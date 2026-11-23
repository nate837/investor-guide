import os,time,urllib.request
UA = "InvestorGuide educational student project research@investorguide-edu.org"
C=["Revenues","RevenueFromContractWithCustomerExcludingAssessedTax","RevenueFromContractWithCustomerIncludingAssessedTax","RevenuesNetOfInterestExpense","SalesRevenueNet","NetIncomeLoss","ProfitLoss","NetIncomeLossAvailableToCommonStockholdersBasic","InterestIncomeExpenseNet","NoninterestIncome","RevenuesExcludingInterestAndDividends"]
for c in C+["EarningsPerShareDiluted","EarningsPerShareBasic"]:
    u="USD-per-shares" if c.startswith("Earnings") else "USD"
    fn=f"frames/{c}_CY2026.json"
    if os.path.exists(fn): continue
    try:
        r=urllib.request.urlopen(urllib.request.Request(f"https://data.sec.gov/api/xbrl/frames/us-gaap/{c}/{u}/CY2026.json",headers={"User-Agent":UA}),timeout=60).read(); open(fn,"wb").write(r); print("ok",fn,len(r))
    except Exception as e: print("ERR",fn,e)
    time.sleep(0.6)
