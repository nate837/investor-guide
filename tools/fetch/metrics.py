import json, collections, os
def fr(c,p):
    fn=f"frames/{c}_{p}.json"
    if not os.path.exists(fn): return {}
    d=json.load(open(fn)); out={}
    for x in d["data"]:
        out[x["cik"]]=x
    return out
REV=["Revenues","RevenueFromContractWithCustomerExcludingAssessedTax","RevenueFromContractWithCustomerIncludingAssessedTax","RevenuesNetOfInterestExpense","SalesRevenueNet"]
YRS=["CY2023","CY2024","CY2025","CY2026"]
F={}
for c in REV+["InterestIncomeExpenseNet","NoninterestIncome","RevenuesExcludingInterestAndDividends","NetIncomeLoss","ProfitLoss","NetIncomeLossAvailableToCommonStockholdersBasic","EarningsPerShareDiluted","EarningsPerShareBasic"]:
    for y in YRS: F[(c,y)]=fr(c,y)
INST=["CY2025Q2I","CY2025Q3I","CY2025Q4I","CY2026Q1I","CY2026Q2I","CY2026Q3I"]
IC=["LongTermDebt","LongTermDebtNoncurrent","LongTermDebtCurrent","DebtCurrent","ShortTermBorrowings","LongTermDebtAndCapitalLeaseObligations","StockholdersEquity","StockholdersEquityIncludingPortionAttributableToNoncontrollingInterest","Assets","Liabilities"]
for c in IC:
    for p in INST: F[(c,p)]=fr(c,p)
SH={p:fr("EntityCommonStockSharesOutstanding",p) for p in ["CY2025Q4I","CY2026Q1I","CY2026Q2I","CY2026Q3I"]}
U=json.load(open("universe.json"))
res={}
# New parent companies with no full-year SEC data yet: use the predecessor's filings (noted on the card)
PRED={2115436: 34088}  # ExxonMobil Holdings Corp (2026 holding company) -> Exxon Mobil Corp
for cik in sorted({r["cik"] for r in U}):
    m={}
    look=cik
    if cik in PRED and not any(F[(c,y)].get(cik) for c in REV for y in ["CY2025","CY2026"]):
        look=PRED[cik]; m["predecessorCik"]=look
    # latest annual year with revenue
    for y in ["CY2026","CY2025","CY2024"]:
        for c in REV:
            x=F[(c,y)].get(look)
            if x and x["val"]>0:
                m["rev"]=x["val"]; m["revEnd"]=x["end"]; m["revStart"]=x["start"]; m["revTag"]=c; m["fy"]=y; m["accn"]=x["accn"]
                py="CY%d"%(int(y[2:])-1)
                p=F[(c,py)].get(look)
                if p and p["val"]>0: m["revPrev"]=p["val"]
                break
        if "rev" in m: break
    if "rev" not in m:
        for y in ["CY2026","CY2025","CY2024"]:
            a=F[("InterestIncomeExpenseNet",y)].get(look); b=F[("NoninterestIncome",y)].get(look)
            if a and b and a["val"]+b["val"]>0:
                m.update(rev=a["val"]+b["val"], revEnd=a["end"], revStart=a["start"], revTag="NetInterest+Noninterest", fy=y, accn=a["accn"])
                py="CY%d"%(int(y[2:])-1)
                pa=F[("InterestIncomeExpenseNet",py)].get(look); pb=F[("NoninterestIncome",py)].get(look)
                if pa and pb and pa["val"]+pb["val"]>0: m["revPrev"]=pa["val"]+pb["val"]
                break
    if "rev" not in m:
        for y in ["CY2026","CY2025","CY2024"]:
            x=F[("NetIncomeLoss",y)].get(look)
            if x:
                m.update(rev=0, revEnd=x["end"], revStart=x["start"], revTag="none", fy=y, accn=x["accn"]); break
    if "rev" not in m: continue
    y=m["fy"]
    for c in ["NetIncomeLoss","ProfitLoss","NetIncomeLossAvailableToCommonStockholdersBasic"]:
        x=F[(c,y)].get(look)
        if x: m["ni"]=x["val"]; break
    for c in ["EarningsPerShareDiluted","EarningsPerShareBasic"]:
        x=F[(c,y)].get(look)
        if x: m["eps"]=x["val"]; break
    # balance sheet: latest instant with equity
    for p in reversed(INST):
        eq=F[("StockholdersEquity",p)].get(look) or F[("StockholdersEquityIncludingPortionAttributableToNoncontrollingInterest",p)].get(look)
        if not eq: continue
        m["eq"]=eq["val"]; m["bsEnd"]=eq["end"]
        g=lambda c: (F[(c,p)].get(look) or {}).get("val")
        ltd=g("LongTermDebt")
        if ltd is None:
            nc=g("LongTermDebtNoncurrent"); cur=g("LongTermDebtCurrent") or g("DebtCurrent")
            if nc is not None or cur is not None: ltd=(nc or 0)+(cur or 0)
        if ltd is None: ltd=g("LongTermDebtAndCapitalLeaseObligations")
        stb=g("ShortTermBorrowings")
        if ltd is not None or stb is not None: m["debt"]=(ltd or 0)+(stb or 0)
        a=g("Assets"); 
        if a: m["assets"]=a
        break
    for p in ["CY2026Q3I","CY2026Q2I","CY2026Q1I","CY2025Q4I"]:
        x=SH[p].get(look)
        if x: m["shares"]=x["val"]; break
    res[cik]=m
print(len(res), "with revenue;", sum(1 for m in res.values() if "ni" in m), "with NI;", sum(1 for m in res.values() if "eq" in m), "eq;", sum(1 for m in res.values() if "debt" in m), "debt;", sum(1 for m in res.values() if "eps" in m),"eps", collections.Counter(m["fy"] for m in res.values()))
json.dump(res, open("metrics.json","w"))
