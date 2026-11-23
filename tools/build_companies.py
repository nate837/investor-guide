"""Session 10B: build the big company list (data/companies.json) and the plan pool (js/broad-picks.js).

Inputs (fetched on the build date, see README):
  SEC: company_tickers_exchange.json, XBRL frames (us-gaap + dei), submissions (SIC), companyfacts (fallback revenue)
  Nasdaq Trader: nasdaqlisted.txt, otherlisted.txt (what is listed, ETF / test-issue flags)
  Nasdaq stock screener download: last price + market cap (delayed)
Run: python3 tools/build_companies.py /workspace/ig-data
"""
import json, os, re, sys, collections, datetime
sys.path.insert(0, os.path.dirname(__file__))
from sic_sector import sector_for_sic, APP

SRC = sys.argv[1] if len(sys.argv) > 1 else "/workspace/ig-data"
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BUILD_DATE = sys.argv[2] if len(sys.argv) > 2 else datetime.date.today().isoformat()

U = json.load(open(f"{SRC}/universe.json"))
M = json.load(open(f"{SRC}/metrics.json"))

# Curated 175 (deep research cards)
gen = open(f"{ROOT}/js/generator.js").read()
CURATED = set(re.findall(r'\{"ticker":"([A-Z.]+)"', gen))

def clean_name(n):
    n = n.split(" - ")[0]
    n = re.sub(r"\s*\((the )?Canada\)|\s*\(Holding Company\)", "", n, flags=re.I)
    n = re.sub(r"\s+(New )?(Class [A-Z]\s+)?(Common Stock|Common Shares|Ordinary Shares|Common stock|Subordinate Voting Shares|Shares of Beneficial Interest|American Depositary Shares|Depositary Shares).*$", "", n, flags=re.I)
    return n.strip().rstrip(",")

def num(s):
    try:
        return float(str(s).replace("$", "").replace(",", ""))
    except ValueError:
        return None

REVBAD = re.compile(r"Deferred|Unbilled|Cost|Remaining|Receivable|Percentage|Excise|Tax|Reclass|Expense|Unrealized|Gain|Loss", re.I)
def fallback_revenue(cik, fy_end):
    fn = f"{SRC}/facts/{cik}.json"
    if not os.path.exists(fn):
        return None
    try:
        d = json.load(open(fn))
    except Exception:
        return None
    best = None
    for concept, body in d.get("facts", {}).get("us-gaap", {}).items():
        if "Revenue" not in concept or REVBAD.search(concept):
            continue
        for unit, vals in body.get("units", {}).items():
            if unit != "USD":
                continue
            ann = {}
            for v in vals:
                if not v.get("start") or v.get("form") not in ("10-K", "10-K/A", "20-F", "40-F"):
                    continue
                dd = (datetime.date.fromisoformat(v["end"]) - datetime.date.fromisoformat(v["start"])).days
                if 330 <= dd <= 400:
                    ann[v["end"]] = v["val"]
            if fy_end in ann and ann[fy_end] > 0:
                prev = [e for e in ann if e < fy_end and (datetime.date.fromisoformat(fy_end) - datetime.date.fromisoformat(e)).days in range(330, 400)]
                pv = ann[max(prev)] if prev else None
                if best is None or ann[fy_end] > best[0]:
                    best = (ann[fy_end], pv, concept)
    return best

# group listings by CIK, pick one share class
byc = collections.defaultdict(list)
for r in U:
    byc[str(r["cik"])].append(r)

SIZE = ["Mega", "Large", "Mid", "Small", "Micro"]
RISK = ["Lower", "Medium", "Higher", "Very high"]
def size_for(mcap):
    if mcap >= 200e9: return 0
    if mcap >= 10e9: return 1
    if mcap >= 2e9: return 2
    if mcap >= 300e6: return 3
    return 4

rows = []
skipped = collections.Counter()
for cik, lst in byc.items():
    m = M.get(cik)
    if not m:
        skipped["no SEC financial data"] += 1; continue
    subf = f"{SRC}/subs/{cik}.json"
    sub = json.load(open(subf)) if os.path.exists(subf) else {}
    sic = sub.get("sic")
    if str(sic) == "6770":
        skipped["blank-check (SPAC)"] += 1; continue
    def keyf(r):
        t = r["sym"].replace("-", ".")
        vol = num((r.get("s") or {}).get("volume")) or 0
        return (0 if t in CURATED else 1, -vol)
    lst = sorted(lst, key=keyf)
    main = lst[0]
    s = main.get("s") or {}
    price = num(s.get("lastsale"))
    mcap = num(s.get("marketCap")) or 0
    if (not mcap) and price and m.get("shares"):
        mcap = price * m["shares"]
    if (not mcap) and price and m.get("ni") and m.get("eps") and m["ni"] * m["eps"] > 0:
        mcap = price * (m["ni"] / m["eps"])  # share count implied by profit ÷ profit per share
    if m["revEnd"] > BUILD_DATE:
        skipped["bad period dates in SEC data"] += 1; continue
    if not price or price <= 0 or not mcap:
        skipped["no price or market value"] += 1; continue
    disp = sector_for_sic(sic)
    if not disp:
        skipped["no sector (SIC) code"] += 1; continue
    rev, prev, tag = m["rev"], m.get("revPrev"), m["revTag"]
    if tag == "none":
        fb = fallback_revenue(cik, m["revEnd"])
        if fb:
            rev, prev, tag = fb
    bank = disp == "Financials" and (tag == "NetInterest+Noninterest" or 6000 <= int(sic or 0) <= 6299)
    ni = m.get("ni"); eps = m.get("eps"); eq = m.get("eq"); debt = m.get("debt")
    growth = (rev / prev - 1) * 100 if rev and prev else None
    margin = ni / rev * 100 if rev and ni is not None else None
    unclear = bool(rev and ni is not None and ni > rev)  # profit bigger than sales: the sales tag is only part of the business
    if unclear:
        growth = margin = None
    pe = price / eps if eps and eps > 0 else None
    pe_alt = mcap / ni if ni and ni > 0 else None
    if pe and pe_alt and not (0.4 < pe / pe_alt < 2.5):
        pe = pe_alt  # share-class / ADR ratio mismatch: use market value / profit instead
    if pe is None and pe_alt and not eps:
        pe = pe_alt
    de = debt / eq if debt is not None and eq and eq > 0 else None
    flags = 0
    if main["sym"].replace("-", ".") in CURATED: flags |= 1
    if not rev: flags |= 2
    if bank: flags |= 4
    if eq is not None and eq <= 0: flags |= 8
    if main.get("fin") in ("D", "E", "H"): flags |= 16
    if ni is not None and ni < 0: flags |= 32
    if m["revEnd"] < "2025-06-01": flags |= 64
    if unclear: flags |= 256
    sz = size_for(mcap)
    score = [0, 0, 1, 2, 2][sz]
    if ni is not None and ni < 0: score += 1
    if not bank and ((eq is not None and eq <= 0) or (de is not None and de > 2)): score += 1
    if price < 5: score += 1
    if flags & 16: score += 1
    if not rev: score += 1
    if growth is not None and (growth > 60 or growth < -25): score += 1
    if pe is not None and pe > 100: score += 1
    risk = min(score, 3)
    rows.append(dict(
        t=main["sym"].replace("-", "."), n=clean_name(main["name"]), x=main["exch"], sz=sz, rk=risk, sec=disp, app=APP[disp],
        cik=int(cik), mcap=mcap, price=price, rev=rev, growth=growth, margin=margin, pe=pe, debt=debt, de=de,
        fy=m["revEnd"], bs=m.get("bsEnd"), accn=m["accn"], sic=sub.get("sicDescription") or "", flags=flags,
        other=[r["sym"].replace("-", ".") for r in lst[1:]], score=score, fcik=m.get("predecessorCik") or 0,
    ))

IDX = {}
for bit, fn in ((1, "dia_t.json"), (2, "spy_t.json"), (4, "ndx_t.json")):
    for t in json.load(open(f"{SRC}/{fn}")):
        IDX[t.replace("/", ".").replace("-", ".")] = IDX.get(t.replace("/", ".").replace("-", "."), 0) | bit
for r in rows:
    r["idx"] = 0
    for t in [r["t"]] + r["other"]:
        r["idx"] |= IDX.get(t, 0)
rows.sort(key=lambda r: -r["mcap"])
print("companies", len(rows), "skipped", dict(skipped))
print(collections.Counter(r["x"] for r in rows))
print("size", collections.Counter(SIZE[r["sz"]] for r in rows))
print("risk", collections.Counter(RISK[r["rk"]] for r in rows))
print("sector", collections.Counter(r["sec"] for r in rows))
print("PE", sum(1 for r in rows if r["pe"]), "growth", sum(1 for r in rows if r["growth"] is not None), "margin", sum(1 for r in rows if r["margin"] is not None), "D/E", sum(1 for r in rows if r["de"] is not None), "debt", sum(1 for r in rows if r["debt"] is not None))
cur_found = {r["t"] for r in rows} | {o for r in rows for o in r["other"]}
print("index counts", {k: sum(1 for r in rows if r["idx"] & b) for k, b in (("dow",1),("spx",2),("ndx",4))})
print("curated missing from big list:", sorted(CURATED - cur_found))

SECTORS = ["Technology", "Communication", "Healthcare", "Financials", "Real estate", "Energy", "Utilities", "Materials", "Industrials", "Consumer (wants)", "Consumer (everyday needs)"]
EXCH = ["NYSE", "Nasdaq", "NYSE American"]
sics = sorted({r["sic"] for r in rows})
def r1(x, d=1):
    return None if x is None else round(x, d)
def compact(r):
    return [r["t"], r["n"], EXCH.index(r["x"]), r["sz"], r["rk"], SECTORS.index(r["sec"]), r["cik"],
            round(r["mcap"] / 1e6), r1(r["price"], 2), round(r["rev"] / 1e6, 1) if r["rev"] else 0, r1(r["growth"]), r1(r["margin"]),
            r1(r["pe"]), None if r["debt"] is None else round(r["debt"] / 1e6, 1), r1(r["de"], 2),
            r["fy"], r["bs"], r["accn"], sics.index(r["sic"]), r["flags"], " ".join(r["other"]), r["idx"], r["fcik"]]
FIELDS = ["ticker", "name", "exchange", "size", "risk", "sector", "cik", "marketCapM", "price", "revenueM", "revenueGrowthPct", "profitMarginPct",
          "pe", "debtM", "debtToEquity", "fiscalYearEnd", "balanceSheetDate", "accession", "industry", "flags", "otherTickers", "indexes", "filingCik"]
meta = {
    "builtOn": BUILD_DATE,
    "priceDate": BUILD_DATE,
    "fields": FIELDS, "exchanges": EXCH, "sizes": SIZE, "risks": RISK, "sectors": SECTORS, "appSectors": APP, "industries": sics,
    "flags": {"deepCard": 1, "noSales": 2, "bankStyle": 4, "negativeEquity": 8, "listingWarning": 16, "losingMoney": 32, "olderYear": 64, "planPick": 128, "salesUnclear": 256},
    "indexes": {"Dow 30": 1, "S&P 500": 2, "Nasdaq-100": 4},
    "indexSources": {"Dow 30": "SPDR DIA holdings file (State Street), as of Nov 20, 2026", "S&P 500": "SPDR SPY holdings file (State Street), as of Nov 20, 2026", "Nasdaq-100": "Nasdaq.com Nasdaq-100 list, Nov 23, 2026"},
    "counts": {"total": len(rows), "byExchange": dict(collections.Counter(r["x"] for r in rows))},
    "skipped": dict(skipped),
}

# ===== Plan pool: smaller, riskier growth names for High / Extra high only =====
def eligible(r, lvl):
    if r["flags"] & (1 | 2 | 16 | 64 | 256) or r["rev"] is None or r["growth"] is None or r["margin"] is None:
        return False
    if r["growth"] > 150 or r["margin"] > 60:  # likely a merger or a data quirk, not steady growth
        return False
    if r["sz"] < 2:  # mid, small, micro only
        return False
    if lvl == "high":
        return r["sz"] in (2, 3) and r["price"] >= 5 and r["mcap"] >= 500e6 and r["rev"] >= 100e6 and r["growth"] >= 15 and r["margin"] > -25 and r["rk"] >= 1
    return r["sz"] in (3, 4) and r["price"] >= 5 and r["mcap"] >= 50e6 and r["rev"] >= 10e6 and r["growth"] >= 20 and r["margin"] > -60 and r["rk"] >= 2

def why(r):
    s = SIZE[r["sz"]].lower() + " company"
    g = "sales up %d%% last year" % round(r["growth"])
    p = "losing money" if r["margin"] < 0 else "profitable"
    return (s[0].upper() + s[1:]) + ", " + g + ", " + p

pool = {}
for lvl in ("high", "extraHigh"):
    picked = []
    for app in ["Technology", "Healthcare", "Financials", "Energy", "Consumer", "Industrials"]:
        c = [r for r in rows if r["app"] == app and eligible(r, lvl)]
        # steadier growth first: rank by growth capped at 80%, then size
        # profitable, fast (but not wild) growers first
        if lvl == "high":  # profitable first, then bigger companies
            c.sort(key=lambda r: (0 if r["margin"] > 0 else 1, -r["mcap"]))
        else:  # profitable first, then faster (capped) growth
            c.sort(key=lambda r: (0 if r["margin"] > 0 else 1, -min(r["growth"], 60), -r["mcap"]))
        picked += c[:30]
    pool[lvl] = picked
    print(lvl, len(picked), collections.Counter(r["app"] for r in picked), collections.Counter(SIZE[r["sz"]] for r in picked))
allp = {}
for lvl, lst in pool.items():
    for i, r in enumerate(lst):
        allp.setdefault(r["t"], (r, {}))[1][lvl] = i
picks = []
for t, (r, lv) in sorted(allp.items()):
    # rank = order inside each level's list (steadier growth first); the plan picks in this order
    picks.append({"ticker": t, "name": r["n"], "sector": r["app"], "tier": "Smaller & riskier", "why": why(r),
                  "levels": sorted(lv), "rank": lv, "row": compact(r)})
js = "/* Session 10B — auto-built by tools/build_companies.py on " + BUILD_DATE + ". Do not edit by hand.\n" \
     "   Smaller, riskier growth companies the plan can use ONLY at High and Extra high risk.\n" \
     "   Numbers from SEC EDGAR XBRL data; price and market value from Nasdaq (delayed, " + BUILD_DATE + "). */\n" \
     "window.IG_BROAD = " + json.dumps({"meta": {k: meta[k] for k in ("builtOn", "priceDate", "fields", "exchanges", "sizes", "risks", "sectors", "flags", "indexes")} | {"industries": sics}, "picks": picks}, separators=(",", ":")) + ";\n"
open(f"{ROOT}/js/broad-picks.js", "w").write(js)
print("broad-picks.js bytes", len(js), "picks", len(picks))
for r in rows:
    if r["t"] in allp:
        r["flags"] |= 128
os.makedirs(f"{ROOT}/data", exist_ok=True)
json.dump(dict(meta=meta, rows=[compact(r) for r in rows]), open(f"{ROOT}/data/companies.json", "w"), separators=(",", ":"))
print("companies.json bytes", os.path.getsize(f"{ROOT}/data/companies.json"))
