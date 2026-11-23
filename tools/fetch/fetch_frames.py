import json, os, time, urllib.request, sys
UA = "InvestorGuide educational student project research@investorguide-edu.org"
os.makedirs("frames", exist_ok=True)
jobs = []
dur = ["Revenues","RevenueFromContractWithCustomerExcludingAssessedTax","RevenueFromContractWithCustomerIncludingAssessedTax","RevenuesNetOfInterestExpense","SalesRevenueNet","NetIncomeLoss","ProfitLoss","NetIncomeLossAvailableToCommonStockholdersBasic"]
for c in dur:
    for p in ["CY2023","CY2024","CY2025"]:
        jobs.append(("us-gaap",c,"USD",p))
for p in ["CY2023","CY2024","CY2025"]:
    jobs.append(("us-gaap","EarningsPerShareDiluted","USD-per-shares",p))
    jobs.append(("us-gaap","EarningsPerShareBasic","USD-per-shares",p))
inst = ["LongTermDebt","LongTermDebtNoncurrent","LongTermDebtCurrent","DebtCurrent","ShortTermBorrowings","LongTermDebtAndCapitalLeaseObligations","StockholdersEquity","StockholdersEquityIncludingPortionAttributableToNoncontrollingInterest","Assets","Liabilities"]
for c in inst:
    for p in ["CY2025Q2I","CY2025Q3I","CY2025Q4I","CY2026Q1I","CY2026Q2I","CY2026Q3I"]:
        jobs.append(("us-gaap",c,"USD",p))
for p in ["CY2025Q4I","CY2026Q1I","CY2026Q2I","CY2026Q3I"]:
    jobs.append(("dei","EntityCommonStockSharesOutstanding","shares",p))
for tax,c,u,p in jobs:
    fn=f"frames/{c}_{p}.json"
    if os.path.exists(fn): continue
    url=f"https://data.sec.gov/api/xbrl/frames/{tax}/{c}/{u}/{p}.json"
    try:
        r=urllib.request.urlopen(urllib.request.Request(url,headers={"User-Agent":UA}),timeout=60).read()
        open(fn,"wb").write(r); print("ok",fn,len(r))
    except Exception as e:
        print("ERR",fn,e)
    time.sleep(0.25)
