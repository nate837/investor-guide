import json,os,time,urllib.request,gzip,concurrent.futures as cf
UA = "InvestorGuide educational student project research@investorguide-edu.org"
M=json.load(open("metrics.json"))
os.makedirs("subs",exist_ok=True); os.makedirs("facts",exist_ok=True)
def get(url):
    for i in range(4):
        try:
            r=urllib.request.urlopen(urllib.request.Request(url,headers={"User-Agent":UA,"Accept-Encoding":"gzip"}),timeout=60)
            b=r.read()
            if r.headers.get("Content-Encoding")=="gzip": b=gzip.decompress(b)
            return b
        except Exception as e:
            time.sleep(2+i*3)
    return None
jobs=[]
for cik,m in M.items():
    jobs.append(("subs/%s.json"%cik,"https://data.sec.gov/submissions/CIK%010d.json"%int(cik),True))
    if m["revTag"]=="none": jobs.append(("facts/%s.json"%cik,"https://data.sec.gov/api/xbrl/companyfacts/CIK%010d.json"%int(cik),False))
jobs=[j for j in jobs if not os.path.exists(j[0])]
print("jobs",len(jobs),flush=True)
def work(j):
    fn,url,slim=j
    b=get(url)
    if b is None: return "ERR "+fn
    if slim:
        d=json.loads(b); d={k:d.get(k) for k in ["cik","name","sic","sicDescription","tickers","exchanges","fiscalYearEnd","stateOfIncorporation","category","entityType","formerNames"]} | {"addresses":d.get("addresses",{}).get("business")}
        b=json.dumps(d).encode()
    open(fn,"wb").write(b); return None
n=0
with cf.ThreadPoolExecutor(9) as ex:
    for r in ex.map(lambda j:(time.sleep(0.95),work(j))[1], jobs):
        n+=1
        if r: print(r,flush=True)
        if n%250==0: print(n,flush=True)
print("done")
