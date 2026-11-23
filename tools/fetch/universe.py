import json, re, collections
def load(fn):
    L=open(fn).read().splitlines(); h=L[0].split("|"); return [dict(zip(h,l.split("|"))) for l in L[1:] if not l.startswith("File Creation")]
BAD = re.compile(r"warrant|\bunits?\b|\brights?\b|preferred|\bnotes?\b|debenture|\bfund\b|\betf\b|\betn\b|exchange[- ]traded|%|depositary shares,? each representing a 1/|perpetual|subordinated|trust preferred|contingent value|\bseries [a-z]\b.*(cumulative|preferred)|cumulative", re.I)
rows=[]
for r in load("nasdaqlisted.txt"):
    if r["ETF"]=="Y" or r["Test Issue"]=="Y" or r.get("NextShares")=="Y": continue
    rows.append(dict(sym=r["Symbol"], name=r["Security Name"], exch="Nasdaq", fin=r["Financial Status"]))
EX={"N":"NYSE","A":"NYSE American"}
for r in load("otherlisted.txt"):
    if r["ETF"]=="Y" or r["Test Issue"]=="Y" or r["Exchange"] not in EX: continue
    rows.append(dict(sym=r["ACT Symbol"], name=r["Security Name"], exch=EX[r["Exchange"]], fin=""))
keep=[r for r in rows if not BAD.search(r["name"])]
print(len(rows), "->", len(keep), collections.Counter(r["exch"] for r in keep))
cte=json.load(open("cte.json"))
tick2cik={}
for cik,name,t,ex in cte["data"]:
    tick2cik.setdefault(t.upper().replace(".","-").replace("/","-"), (cik,name,ex))
scr={r["symbol"].upper().replace("/","-").replace(".","-").replace("^","-P"):r for r in json.load(open("screener.json"))["data"]["rows"]}
out=[]; miss=collections.Counter()
for r in keep:
    k=r["sym"].upper().replace(".","-").replace("/","-")
    c=tick2cik.get(k)
    if not c: miss["nocik"]+=1; continue
    r["key"]=k; r["cik"]=c[0]; r["secname"]=c[1]; r["s"]=scr.get(k); 
    if not r["s"]: miss["noscreener"]+=1
    out.append(r)
print(len(out), miss)
json.dump(out, open("universe.json","w"))
ciks=sorted({r["cik"] for r in out}); print("unique ciks", len(ciks))
