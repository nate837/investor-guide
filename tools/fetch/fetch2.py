import os,time,urllib.request
UA = "InvestorGuide educational student project research@investorguide-edu.org"
for c in ["InterestIncomeExpenseNet","NoninterestIncome","InterestAndDividendIncomeOperating","OperatingIncomeLoss","RevenuesExcludingInterestAndDividends"]:
  for p in ["CY2023","CY2024","CY2025"]:
    fn=f"frames/{c}_{p}.json"
    if os.path.exists(fn): continue
    try:
      r=urllib.request.urlopen(urllib.request.Request(f"https://data.sec.gov/api/xbrl/frames/us-gaap/{c}/USD/{p}.json",headers={"User-Agent":UA}),timeout=60).read(); open(fn,"wb").write(r); print("ok",fn)
    except Exception as e: print("ERR",fn,e)
    time.sleep(0.25)
