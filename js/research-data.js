/**
 * Session 9 research-card data (deeper cards). Verified 2026-10-07.
 * See "method" below for how every field was sourced. No buy/sell calls. No invented numbers.
 */
window.IG_RESEARCH_DATA = {
 "verifiedOn": "2026-10-07",
 "session": 9,
 "method": "CIKs from SEC company_tickers.json (fetched 2026-10-07 with a descriptive User-Agent). Latest 10-K for each company found via data.sec.gov submissions; the 10-K text was downloaded from EDGAR and Item 1 (Business) and Item 1A (Risk Factors) were extracted. Each plain-English business line and risk was written from those sections and keyword-checked against the extracted text. No numbers are quoted. IR links: fetched 2026-10-07 and confirmed HTTP 200 on the company's own domain; null = could not be verified (bot protection), so the card says to search the official IR site.",
 "companies": {
  "MSFT": {
   "name": "Microsoft",
   "cik": "0000789019",
   "ir": "https://www.microsoft.com/en-us/investor",
   "sector": "Technology",
   "tier": "Steady",
   "why": "Software + cloud giant",
   "tierWhy": "Huge, diversified software and cloud business with lots of recurring subscription revenue. Steadier than most tech, but still a tech stock.",
   "business": "Sells software (Windows, Microsoft 365), cloud computing (Azure), LinkedIn, and gaming (Xbox).",
   "risks": [
    "Faces intense competition in cloud, software, and AI from big and small rivals.",
    "Is spending heavily on AI and datacenters, and that spending may not pay off as planned.",
    "Cyberattacks and security flaws could hurt customers and its reputation.",
    "Faces government scrutiny and regulation, including competition law, in many countries."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-07-29",
    "period": "2026-06-30",
    "accession": "0001193125-26-323660",
    "url": "https://www.sec.gov/Archives/edgar/data/789019/000119312526323660/msft-20260630.htm",
    "filerCik": "0000789019"
   },
   "checkFirst": "Compare revenue and operating income across its reportable segments, and watch capital spending on datacenters in the cash-flow statement."
  },
  "AAPL": {
   "name": "Apple",
   "cik": "0000320193",
   "ir": "https://investor.apple.com/",
   "sector": "Technology",
   "tier": "Steady",
   "why": "Consumer tech + services",
   "tierWhy": "Very large, cash-generating consumer tech company with a loyal user base. Steadier than most tech, but still tied to new product cycles.",
   "business": "Designs iPhone, Mac, iPad, and wearables, and sells services like the App Store, iCloud, and Apple Music.",
   "risks": [
    "Depends on launching successful new products and services in fast-changing markets.",
    "Most manufacturing is done by outsourcing partners, many in Asia, so tariffs, trade fights, or disruptions there matter.",
    "Faces legal and regulatory pressure on the App Store and its services business.",
    "Competes in fast-moving markets with aggressive rivals."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2025-10-31",
    "period": "2025-09-27",
    "accession": "0000320193-25-000079",
    "url": "https://www.sec.gov/Archives/edgar/data/320193/000032019325000079/aapl-20250927.htm",
    "filerCik": "0000320193"
   },
   "checkFirst": "Net sales by product category and by geographic segment; compare Services gross margin with Products gross margin."
  },
  "GOOGL": {
   "name": "Alphabet",
   "cik": "0001652044",
   "ir": "https://abc.xyz/investor/",
   "sector": "Technology",
   "tier": "Steady",
   "why": "Search, YouTube, cloud",
   "tierWhy": "Dominant, cash-rich advertising and cloud business. Steadier than smaller tech, though tied to ad spending and court outcomes.",
   "business": "Runs Google Search, YouTube, Android, and Google Cloud, plus long-term bets like Waymo (in Other Bets).",
   "risks": [
    "Most revenue comes from advertising, which drops when advertisers cut budgets.",
    "Faces antitrust lawsuits and regulation around the world.",
    "AI is changing how people search, which brings new competition.",
    "Privacy and data-protection rules could limit how it uses data."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-05",
    "period": "2025-12-31",
    "accession": "0001652044-26-000018",
    "url": "https://www.sec.gov/Archives/edgar/data/1652044/000165204426000018/goog-20251231.htm",
    "filerCik": "0001652044"
   },
   "checkFirst": "Google Services vs. Google Cloud operating income, Other Bets losses, and capital expenditures."
  },
  "IBM": {
   "name": "IBM",
   "cik": "0000051143",
   "ir": "https://www.ibm.com/investor",
   "sector": "Technology",
   "tier": "Steady",
   "why": "Hybrid cloud + consulting",
   "tierWhy": "Long-established, dividend-paying tech company with recurring software and consulting revenue. Slower growth, steadier profile.",
   "business": "Sells hybrid-cloud and AI software (including Red Hat), consulting services, and infrastructure like mainframes.",
   "risks": [
    "Competes in fast-changing tech markets against strong rivals.",
    "Its shift toward software and AI may not go as planned.",
    "A large international footprint exposes it to currency and political risks.",
    "Cybersecurity and data-protection failures could hurt clients and IBM."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-24",
    "period": "2025-12-31",
    "accession": "0000051143-26-000010",
    "url": "https://www.sec.gov/Archives/edgar/data/51143/000005114326000010/ibm-20251231.htm",
    "filerCik": "0000051143"
   },
   "checkFirst": "Software vs. Consulting vs. Infrastructure segment results, and debt taken on for acquisitions."
  },
  "CSCO": {
   "name": "Cisco Systems",
   "cik": "0000858877",
   "ir": "https://investor.cisco.com/",
   "sector": "Technology",
   "tier": "Steady",
   "why": "Networking + security",
   "tierWhy": "Mature networking leader with a large installed base and dividends. Steady rather than fast-growing.",
   "business": "Makes networking equipment (switches, routers), security and collaboration products, and observability software (Splunk).",
   "risks": [
    "Faces strong competition and fast technology change.",
    "Supply-chain problems for components can delay products.",
    "The shift to software and subscriptions may be uneven.",
    "Global economic and geopolitical conditions affect customer spending."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-09-02",
    "period": "2026-07-25",
    "accession": "0000858877-26-000132",
    "url": "https://www.sec.gov/Archives/edgar/data/858877/000085887726000132/csco-20260725.htm",
    "filerCik": "0000858877"
   },
   "checkFirst": "Product vs. services revenue, subscription mix, and remaining performance obligations in the 10-K/10-Q."
  },
  "TXN": {
   "name": "Texas Instruments",
   "cik": "0000097476",
   "ir": "https://investor.ti.com/",
   "sector": "Technology",
   "tier": "Steady",
   "why": "Analog + embedded chips",
   "tierWhy": "Long-running chip maker with broad industrial customers and a dividend history. Steadier than most chip names, but still cyclical.",
   "business": "Designs and makes analog and embedded processing chips used in industrial, automotive, and consumer products, mostly in its own factories.",
   "risks": [
    "Chip demand moves in cycles, and downturns hurt results.",
    "Is investing heavily in new manufacturing capacity.",
    "Has exposure to China and to trade restrictions.",
    "Faces competition across many product lines."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-06",
    "period": "2025-12-31",
    "accession": "0000097476-26-000059",
    "url": "https://www.sec.gov/Archives/edgar/data/97476/000009747626000059/txn-20251231.htm",
    "filerCik": "0000097476"
   },
   "checkFirst": "Analog vs. Embedded Processing segment results, capital expenditures, and free cash flow."
  },
  "ACN": {
   "name": "Accenture",
   "cik": "0001467373",
   "ir": "https://investor.accenture.com/",
   "sector": "Technology",
   "tier": "Steady",
   "why": "IT consulting + services",
   "tierWhy": "Big, diversified services firm with many clients worldwide. Steady, but tied to corporate IT budgets.",
   "business": "Global professional-services firm providing consulting, technology services, and outsourcing to large businesses and governments.",
   "risks": [
    "Client spending falls when the economy weakens.",
    "Generative AI could change what clients pay for.",
    "Competes hard for clients and skilled people.",
    "Faces legal, tax, and regulatory risks in many countries."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2025-10-10",
    "period": "2025-08-31",
    "accession": "0001467373-25-000217",
    "url": "https://www.sec.gov/Archives/edgar/data/1467373/000146737325000217/acn-20250831.htm",
    "filerCik": "0001467373"
   },
   "checkFirst": "Revenue by geographic market and by type of work, new bookings, and operating margin."
  },
  "NVDA": {
   "name": "NVIDIA",
   "cik": "0001045810",
   "ir": "https://investor.nvidia.com/",
   "sector": "Technology",
   "tier": "Growth",
   "why": "AI chips leader",
   "tierWhy": "Leader in AI chips with fast growth, but results and the stock can swing hard with AI spending. Growth tier, not Defensive.",
   "business": "Designs GPUs and full computing platforms used in AI data centers, gaming, professional visualization, and cars.",
   "risks": [
    "Demand for AI data-center products could slow or swing sharply.",
    "Relies on third parties to manufacture and supply its products.",
    "U.S. export controls limit sales to China and other places.",
    "A small number of customers make up a large share of revenue."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-25",
    "period": "2026-01-25",
    "accession": "0001045810-26-000021",
    "url": "https://www.sec.gov/Archives/edgar/data/1045810/000104581026000021/nvda-20260125.htm",
    "filerCik": "0001045810"
   },
   "checkFirst": "Compute & Networking vs. Graphics segment results, customer concentration notes, and inventory and purchase commitments."
  },
  "AVGO": {
   "name": "Broadcom",
   "cik": "0001730168",
   "ir": "https://investors.broadcom.com/",
   "sector": "Technology",
   "tier": "Growth",
   "why": "AI networking chips + software",
   "tierWhy": "Profitable chip-and-software company riding AI networking demand. Acquisitions and customer concentration add risk.",
   "business": "Designs semiconductors (networking, custom AI chips, broadband, wireless) and sells infrastructure software, including VMware.",
   "risks": [
    "Depends on a small number of large customers.",
    "Carries significant debt from acquisitions.",
    "Integrating big acquisitions like VMware is hard.",
    "Relies on outside manufacturers for most of its chips."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2025-12-18",
    "period": "2025-11-02",
    "accession": "0001730168-25-000121",
    "url": "https://www.sec.gov/Archives/edgar/data/1730168/000173016825000121/avgo-20251102.htm",
    "filerCik": "0001730168"
   },
   "checkFirst": "Semiconductor solutions vs. infrastructure software segment results, and total debt."
  },
  "META": {
   "name": "Meta Platforms",
   "cik": "0001326801",
   "ir": "https://investor.atmeta.com/",
   "sector": "Technology",
   "tier": "Growth",
   "why": "Social apps + AI",
   "tierWhy": "Highly profitable but heavily ad-dependent, and investing huge sums in AI and the metaverse. More volatile than steady blue chips.",
   "business": "Runs Facebook, Instagram, WhatsApp, and Messenger, and builds AI plus AR/VR hardware in Reality Labs.",
   "risks": [
    "Almost all revenue comes from advertising.",
    "Privacy rules and regulation could limit ad targeting.",
    "Large, uncertain spending on AI and Reality Labs may not pay off.",
    "Faces lawsuits and investigations over content and youth safety."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-01-29",
    "period": "2025-12-31",
    "accession": "0001628280-26-003942",
    "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026003942/meta-20251231.htm",
    "filerCik": "0001326801"
   },
   "checkFirst": "Family of Apps vs. Reality Labs operating income, and capital expenditures guidance in earnings releases."
  },
  "AMZN": {
   "name": "Amazon",
   "cik": "0001018724",
   "ir": "https://ir.aboutamazon.com/",
   "sector": "Technology",
   "tier": "Growth",
   "why": "E-commerce + AWS cloud",
   "tierWhy": "Giant but still growth-driven, with thin retail margins and big capital spending. Swings more than defensive names.",
   "business": "Runs online retail and third-party seller services, Prime subscriptions, advertising, and cloud computing through AWS.",
   "risks": [
    "Faces intense competition in retail and cloud.",
    "Is investing heavily in infrastructure, including for AI.",
    "Faces government regulation and antitrust scrutiny.",
    "International operations add currency and political risks."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-06",
    "period": "2025-12-31",
    "accession": "0001018724-26-000004",
    "url": "https://www.sec.gov/Archives/edgar/data/1018724/000101872426000004/amzn-20251231.htm",
    "filerCik": "0001018724"
   },
   "checkFirst": "North America, International, and AWS segment operating income; capital expenditures and free cash flow."
  },
  "ORCL": {
   "name": "Oracle",
   "cik": "0001341439",
   "ir": "https://investor.oracle.com/",
   "sector": "Technology",
   "tier": "Growth",
   "why": "Database + AI cloud build-out",
   "tierWhy": "Established software company now betting heavily on AI cloud capacity funded partly by debt. Higher risk than its history suggests.",
   "business": "Sells database and enterprise software, cloud infrastructure (OCI), business applications, and hardware.",
   "risks": [
    "Is spending heavily to build cloud data centers.",
    "Carries significant debt.",
    "Competes with larger cloud providers.",
    "Some large cloud contracts concentrate risk in a few customers."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-06-22",
    "period": "2026-05-31",
    "accession": "0001193125-26-277521",
    "url": "https://www.sec.gov/Archives/edgar/data/1341439/000119312526277521/orcl-20260531.htm",
    "filerCik": "0001341439"
   },
   "checkFirst": "Cloud vs. license revenue, remaining performance obligations, capital expenditures, and total debt."
  },
  "ADBE": {
   "name": "Adobe",
   "cik": "0000796343",
   "ir": "https://www.adobe.com/investor-relations.html",
   "sector": "Technology",
   "tier": "Growth",
   "why": "Creative + document software",
   "tierWhy": "Profitable subscription software, but worries about AI disruption make the stock more volatile.",
   "business": "Makes creative and document software (Photoshop, Acrobat) and digital-marketing software, sold mostly by subscription.",
   "risks": [
    "Generative AI could bring new competitors and change its products.",
    "Faces strong competition.",
    "Its subscription model depends on customers renewing.",
    "Security breaches could hurt customers and trust."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-01-15",
    "period": "2025-11-28",
    "accession": "0000796343-26-000003",
    "url": "https://www.sec.gov/Archives/edgar/data/796343/000079634326000003/adbe-20251128.htm",
    "filerCik": "0000796343"
   },
   "checkFirst": "Digital Media vs. Digital Experience segment results and annualized recurring revenue in earnings releases."
  },
  "CRM": {
   "name": "Salesforce",
   "cik": "0001108524",
   "ir": "https://investor.salesforce.com/",
   "sector": "Technology",
   "tier": "Growth",
   "why": "CRM software + AI agents",
   "tierWhy": "Large subscription-software leader. Growth is slower than before and AI bets add uncertainty.",
   "business": "Sells cloud customer-relationship-management (CRM) software plus Slack, Tableau, MuleSoft, and AI agents.",
   "risks": [
    "Faces strong competition.",
    "Its AI products may not succeed as hoped.",
    "Integrating acquisitions carries risk.",
    "Security breaches could hurt customers and trust."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-03-02",
    "period": "2026-01-31",
    "accession": "0001108524-26-000060",
    "url": "https://www.sec.gov/Archives/edgar/data/1108524/000110852426000060/crm-20260131.htm",
    "filerCik": "0001108524"
   },
   "checkFirst": "Subscription and support revenue by service offering, operating margin, and remaining performance obligations."
  },
  "NOW": {
   "name": "ServiceNow",
   "cik": "0001373715",
   "ir": "https://investor.servicenow.com/",
   "sector": "Technology",
   "tier": "Growth",
   "why": "Workflow automation software",
   "tierWhy": "Fast-growing software with a high valuation. Growth names can fall hard if growth slows.",
   "business": "Cloud workflow-automation software (the ServiceNow AI Platform) that large companies use for IT, HR, and customer service.",
   "risks": [
    "Faces strong competition.",
    "Must keep innovating, including in AI.",
    "Security incidents could hurt customers and trust.",
    "Sales to large enterprises can be slow and uneven."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-01-29",
    "period": "2025-12-31",
    "accession": "0001373715-26-000007",
    "url": "https://www.sec.gov/Archives/edgar/data/1373715/000137371526000007/now-20251231.htm",
    "filerCik": "0001373715"
   },
   "checkFirst": "Subscription revenue growth, remaining performance obligations, and stock-based compensation."
  },
  "AMD": {
   "name": "Advanced Micro Devices",
   "cik": "0000002488",
   "ir": "https://ir.amd.com/",
   "sector": "Technology",
   "tier": "Aggressive growth",
   "why": "CPUs, GPUs, AI accelerators",
   "tierWhy": "Big AI and chip upside but very sensitive to competition and the chip cycle. Aggressive growth.",
   "business": "Designs CPUs, GPUs, and AI accelerators for data centers, PCs, gaming consoles, and embedded uses.",
   "risks": [
    "Competes against much larger or entrenched rivals like Intel and NVIDIA.",
    "Relies on third-party manufacturers such as TSMC.",
    "Export controls limit some sales.",
    "Chip demand is cyclical."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-04",
    "period": "2025-12-27",
    "accession": "0000002488-26-000018",
    "url": "https://www.sec.gov/Archives/edgar/data/2488/000000248826000018/amd-20251227.htm",
    "filerCik": "0000002488"
   },
   "checkFirst": "Data Center, Client, Gaming, and Embedded segment results, gross margin, and inventory."
  },
  "PLTR": {
   "name": "Palantir Technologies",
   "cik": "0001321655",
   "ir": "https://investors.palantir.com/",
   "sector": "Technology",
   "tier": "Aggressive growth",
   "why": "Data + AI software",
   "tierWhy": "Rapid growth and a very high valuation. The stock can swing wildly. Aggressive growth.",
   "business": "Builds data-analytics and AI software platforms (Gotham, Foundry, AIP) for governments and companies.",
   "risks": [
    "A large share of revenue comes from government contracts.",
    "Results can be lumpy because of large contracts.",
    "Pays a lot in stock-based compensation, which dilutes shareholders.",
    "The stock price can be very volatile."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-17",
    "period": "2025-12-31",
    "accession": "0001321655-26-000011",
    "url": "https://www.sec.gov/Archives/edgar/data/1321655/000132165526000011/pltr-20251231.htm",
    "filerCik": "0001321655"
   },
   "checkFirst": "Government vs. commercial revenue, U.S. vs. international mix, and stock-based compensation."
  },
  "CRWD": {
   "name": "CrowdStrike",
   "cik": "0001535527",
   "ir": null,
   "sector": "Technology",
   "tier": "Aggressive growth",
   "why": "Cloud cybersecurity",
   "tierWhy": "Fast-growing security software priced for growth. One bad incident or slowdown can hit the stock hard.",
   "business": "Runs the Falcon cloud cybersecurity platform protecting computers, cloud workloads, and identities.",
   "risks": [
    "A faulty software update has caused widespread customer outages before, and another could hurt trust.",
    "Faces intense competition.",
    "Has a history of losses and may not stay profitable.",
    "As a security company, it is itself a target for attackers."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-03-05",
    "period": "2026-01-31",
    "accession": "0001535527-26-000010",
    "url": "https://www.sec.gov/Archives/edgar/data/1535527/000153552726000010/crwd-20260131.htm",
    "filerCik": "0001535527"
   },
   "checkFirst": "Annual recurring revenue (ARR) in earnings releases, subscription gross margin, and GAAP vs. non-GAAP results."
  },
  "SNOW": {
   "name": "Snowflake",
   "cik": "0001640147",
   "ir": "https://investors.snowflake.com/",
   "sector": "Technology",
   "tier": "Aggressive growth",
   "why": "Cloud data platform",
   "tierWhy": "Not consistently profitable and valued on future growth. Aggressive growth.",
   "business": "Cloud data platform (the AI Data Cloud) that lets companies store, analyze, and share data, mostly paid for by usage.",
   "risks": [
    "Has a history of net losses.",
    "Usage-based revenue can rise and fall with customer activity.",
    "Depends on public cloud providers like AWS, Azure, and Google Cloud.",
    "Faces strong competition."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-03-20",
    "period": "2026-01-31",
    "accession": "0001640147-26-000008",
    "url": "https://www.sec.gov/Archives/edgar/data/1640147/000164014726000008/snow-20260131.htm",
    "filerCik": "0001640147"
   },
   "checkFirst": "Product revenue growth, net revenue retention, remaining performance obligations, and stock-based compensation."
  },
  "NET": {
   "name": "Cloudflare",
   "cik": "0001477333",
   "ir": "https://cloudflare.net/",
   "sector": "Technology",
   "tier": "Aggressive growth",
   "why": "Edge network + security",
   "tierWhy": "Rapid growth while still building profitability, with a high valuation. Aggressive growth.",
   "business": "Runs a global network that speeds up and secures websites, apps, and corporate networks, plus developer and AI services.",
   "risks": [
    "Has a history of net losses.",
    "Network outages or disruptions could hurt customers.",
    "Faces strong competition.",
    "Content on customers' sites can create legal and reputation problems."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-26",
    "period": "2025-12-31",
    "accession": "0001477333-26-000016",
    "url": "https://www.sec.gov/Archives/edgar/data/1477333/000147733326000016/cloud-20251231.htm",
    "filerCik": "0001477333"
   },
   "checkFirst": "Revenue growth, dollar-based net retention, large-customer counts, and GAAP operating results."
  },
  "MU": {
   "name": "Micron Technology",
   "cik": "0000723125",
   "ir": "https://investors.micron.com/",
   "sector": "Technology",
   "tier": "Aggressive growth",
   "why": "Memory chips (DRAM, NAND, HBM)",
   "tierWhy": "The boom-and-bust memory cycle makes profits and the stock swing sharply. Aggressive growth.",
   "business": "Makes memory and storage chips (DRAM, NAND, and high-bandwidth memory) for data centers, phones, PCs, and cars.",
   "risks": [
    "Memory prices swing sharply, which can turn profits into losses.",
    "Needs heavy capital spending to stay competitive.",
    "Faces restrictions and risks related to China.",
    "Faces strong competition."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2025-10-03",
    "period": "2025-08-28",
    "accession": "0000723125-25-000028",
    "url": "https://www.sec.gov/Archives/edgar/data/723125/000072312525000028/mu-20250828.htm",
    "filerCik": "0000723125"
   },
   "checkFirst": "Segment results, gross margin trend, capital expenditures, and inventory."
  },
  "JNJ": {
   "name": "Johnson & Johnson",
   "cik": "0000200406",
   "ir": "https://www.investor.jnj.com/",
   "sector": "Healthcare",
   "tier": "Defensive",
   "why": "Medicines + medical devices",
   "tierWhy": "Diversified healthcare giant with a long dividend record. People need healthcare in recessions too. Defensive.",
   "business": "Develops and sells prescription medicines (Innovative Medicine) and medical devices (MedTech).",
   "risks": [
    "Faces large product-liability lawsuits, including talc litigation.",
    "Patent expirations and biosimilar competition can cut sales of key drugs.",
    "Drug-pricing pressure and government rules.",
    "Product quality problems could lead to recalls."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-11",
    "period": "2025-12-28",
    "accession": "0000200406-26-000016",
    "url": "https://www.sec.gov/Archives/edgar/data/200406/000020040626000016/jnj-20251228.htm",
    "filerCik": "0000200406"
   },
   "checkFirst": "Innovative Medicine vs. MedTech segment sales, litigation notes, and debt."
  },
  "MRK": {
   "name": "Merck",
   "cik": "0000310158",
   "ir": "https://www.merck.com/investor-relations/",
   "sector": "Healthcare",
   "tier": "Defensive",
   "why": "Medicines + vaccines",
   "tierWhy": "Large, profitable drugmaker with steady demand. Defensive, though one big drug matters a lot.",
   "business": "Develops prescription medicines, vaccines, and animal-health products.",
   "risks": [
    "Depends heavily on a few key products, especially Keytruda.",
    "Patent expirations can sharply cut sales.",
    "Drug-pricing laws and pressure.",
    "Research and clinical trials can fail."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-24",
    "period": "2025-12-31",
    "accession": "0000310158-26-000063",
    "url": "https://www.sec.gov/Archives/edgar/data/310158/000031015826000063/mrk-20251231.htm",
    "filerCik": "0000310158"
   },
   "checkFirst": "Pharmaceutical vs. Animal Health segment sales and sales of top products."
  },
  "ABT": {
   "name": "Abbott Laboratories",
   "cik": "0000001800",
   "ir": null,
   "sector": "Healthcare",
   "tier": "Defensive",
   "why": "Devices, diagnostics, nutrition",
   "tierWhy": "Broad, diversified healthcare products with a long dividend record. Defensive.",
   "business": "Sells medical devices, diagnostic tests, nutrition products, and branded generic medicines.",
   "risks": [
    "Product-quality or regulatory problems could disrupt sales.",
    "Faces product-liability lawsuits, including over preterm infant formula.",
    "Healthcare cost-cutting and pricing pressure.",
    "International operations add currency and political risks."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-20",
    "period": "2025-12-31",
    "accession": "0001628280-26-010185",
    "url": "https://www.sec.gov/Archives/edgar/data/1800/000162828026010185/abt-20251231.htm",
    "filerCik": "0000001800"
   },
   "checkFirst": "Sales by segment (Medical Devices, Diagnostics, Nutrition, Established Pharmaceuticals) and litigation notes."
  },
  "PFE": {
   "name": "Pfizer",
   "cik": "0000078003",
   "ir": "https://www.pfizer.com/investors",
   "sector": "Healthcare",
   "tier": "Defensive",
   "why": "Medicines + vaccines",
   "tierWhy": "Big drugmaker with a dividend and lower swings than biotech, but facing patent expirations. Defensive tier, with caution.",
   "business": "Develops and sells prescription medicines and vaccines across many disease areas.",
   "risks": [
    "Patent expirations will cut sales of some major products.",
    "Drug-pricing pressure and government rules.",
    "Research and development may not produce new products.",
    "Integrating acquisitions like Seagen carries risk."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-26",
    "period": "2025-12-31",
    "accession": "0000078003-26-000026",
    "url": "https://www.sec.gov/Archives/edgar/data/78003/000007800326000026/pfe-20251231.htm",
    "filerCik": "0000078003"
   },
   "checkFirst": "Revenue by product, guidance in earnings releases, cost-cutting programs, and debt."
  },
  "ABBV": {
   "name": "AbbVie",
   "cik": "0001551152",
   "ir": "https://investors.abbvie.com/",
   "sector": "Healthcare",
   "tier": "Steady",
   "why": "Immunology + aesthetics drugs",
   "tierWhy": "Large, dividend-paying drugmaker with growing newer drugs. Steady.",
   "business": "Develops medicines in immunology (Skyrizi, Rinvoq), oncology, and neuroscience, plus aesthetics like Botox.",
   "risks": [
    "Humira faces biosimilar competition.",
    "Drug-pricing rules and pressure.",
    "Carries significant debt from past acquisitions.",
    "Pipeline drugs may fail in clinical trials."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-20",
    "period": "2025-12-31",
    "accession": "0001551152-26-000008",
    "url": "https://www.sec.gov/Archives/edgar/data/1551152/000155115226000008/abbv-20251231.htm",
    "filerCik": "0001551152"
   },
   "checkFirst": "Net revenues by key product, debt, and guidance in earnings releases."
  },
  "TMO": {
   "name": "Thermo Fisher Scientific",
   "cik": "0000097745",
   "ir": "https://ir.thermofisher.com/",
   "sector": "Healthcare",
   "tier": "Steady",
   "why": "Lab tools + services",
   "tierWhy": "Essential supplier to science and healthcare with diversified customers. Steady.",
   "business": "Sells lab instruments, consumables, software, and services to pharma, biotech, hospitals, and researchers.",
   "risks": [
    "Depends on spending by pharma and biotech customers.",
    "Government research-funding cuts could reduce demand.",
    "Integrating acquisitions carries risk.",
    "International operations add currency and political risks."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-26",
    "period": "2025-12-31",
    "accession": "0000097745-26-000018",
    "url": "https://www.sec.gov/Archives/edgar/data/97745/000009774526000018/tmo-20251231.htm",
    "filerCik": "0000097745"
   },
   "checkFirst": "Segment revenue and margins, organic growth, and debt from acquisitions."
  },
  "UNH": {
   "name": "UnitedHealth Group",
   "cik": "0000731766",
   "ir": "https://www.unitedhealthgroup.com/investors.html",
   "sector": "Healthcare",
   "tier": "Steady",
   "why": "Health insurance + Optum",
   "tierWhy": "Huge insurer and health-services company. Usually steady, but cost and regulatory pressure have added volatility. Steady, not Defensive.",
   "business": "Health insurance (UnitedHealthcare) and health services (Optum: care delivery, pharmacy benefits, and data).",
   "risks": [
    "Medical costs can rise faster than the premiums it charges.",
    "Heavy government regulation, including Medicare Advantage rules and payments.",
    "Faces government investigations and lawsuits.",
    "Cyberattacks can disrupt its systems."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-03-02",
    "period": "2025-12-31",
    "accession": "0000731766-26-000062",
    "url": "https://www.sec.gov/Archives/edgar/data/731766/000073176626000062/unh-20251231.htm",
    "filerCik": "0000731766"
   },
   "checkFirst": "UnitedHealthcare vs. Optum segment earnings, medical care ratio, and guidance in earnings releases."
  },
  "AMGN": {
   "name": "Amgen",
   "cik": "0000318154",
   "ir": null,
   "sector": "Healthcare",
   "tier": "Steady",
   "why": "Mature biotech",
   "tierWhy": "Mature, profitable biotech that pays a dividend. Steady.",
   "business": "Biotech company making medicines for bone health, heart disease, cancer, inflammation, and rare diseases.",
   "risks": [
    "Biosimilar competition and patent expirations can cut sales.",
    "Drug-pricing pressure.",
    "Carries debt from the Horizon acquisition.",
    "Clinical trials can fail."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-13",
    "period": "2025-12-31",
    "accession": "0000318154-26-000010",
    "url": "https://www.sec.gov/Archives/edgar/data/318154/000031815426000010/amgn-20251231.htm",
    "filerCik": "0000318154"
   },
   "checkFirst": "Product sales by drug, debt, and pipeline updates in earnings releases."
  },
  "MDT": {
   "name": "Medtronic",
   "cik": "0001613103",
   "ir": "https://investorrelations.medtronic.com/",
   "sector": "Healthcare",
   "tier": "Steady",
   "why": "Medical devices",
   "tierWhy": "Large, diversified device maker with a long dividend record. Steady.",
   "business": "Makes medical devices for the heart, surgery, the brain and spine, and diabetes.",
   "risks": [
    "Product recalls and quality problems.",
    "Depends on regulatory approvals such as from the FDA.",
    "Pricing pressure from hospitals and governments.",
    "Faces strong competition."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-06-18",
    "period": "2026-04-24",
    "accession": "0001628280-26-044354",
    "url": "https://www.sec.gov/Archives/edgar/data/1613103/000162828026044354/mdt-20260424.htm",
    "filerCik": "0001613103"
   },
   "checkFirst": "Segment sales (Cardiovascular, Neuroscience, Medical Surgical, Diabetes) and organic growth."
  },
  "DHR": {
   "name": "Danaher",
   "cik": "0000313616",
   "ir": "https://investors.danaher.com/",
   "sector": "Healthcare",
   "tier": "Steady",
   "why": "Life-science tools + diagnostics",
   "tierWhy": "Steady tools-and-diagnostics business, though bioprocessing demand moves in cycles. Steady.",
   "business": "Sells life-sciences tools, products for making biotech drugs (bioprocessing), and diagnostic tests.",
   "risks": [
    "Demand from biopharma customers can swing.",
    "Acquisitions carry integration risk.",
    "Government funding and healthcare policy changes.",
    "Exposure to China."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-24",
    "period": "2025-12-31",
    "accession": "0000313616-26-000062",
    "url": "https://www.sec.gov/Archives/edgar/data/313616/000031361626000062/dhr-20251231.htm",
    "filerCik": "0000313616"
   },
   "checkFirst": "Biotechnology, Life Sciences, and Diagnostics segment results and core growth."
  },
  "LLY": {
   "name": "Eli Lilly",
   "cik": "0000059478",
   "ir": "https://investor.lilly.com/",
   "sector": "Healthcare",
   "tier": "Growth",
   "why": "Diabetes + obesity drugs",
   "tierWhy": "Fast growth from obesity drugs and a high valuation. Growth tier, more volatile than older drugmakers.",
   "business": "Develops medicines for diabetes and obesity (Mounjaro, Zepbound), cancer, immunology, and brain diseases.",
   "risks": [
    "Growth relies heavily on its incretin (diabetes and obesity) drugs.",
    "Must scale up manufacturing quickly.",
    "Drug-pricing pressure.",
    "Compounded and counterfeit copies of its drugs."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-12",
    "period": "2025-12-31",
    "accession": "0000059478-26-000013",
    "url": "https://www.sec.gov/Archives/edgar/data/59478/000005947826000013/lly-20251231.htm",
    "filerCik": "0000059478"
   },
   "checkFirst": "Revenue by product, manufacturing investment, and guidance in earnings releases."
  },
  "ISRG": {
   "name": "Intuitive Surgical",
   "cik": "0001035267",
   "ir": null,
   "sector": "Healthcare",
   "tier": "Growth",
   "why": "Surgical robots",
   "tierWhy": "Leading surgical-robot company with recurring instrument sales, priced for growth. Growth.",
   "business": "Makes the da Vinci robotic surgical systems plus the instruments, accessories, and services that go with them.",
   "risks": [
    "New surgical robots from competitors.",
    "Hospital capital budgets can tighten.",
    "Depends on regulatory approvals and clearances.",
    "Product-liability lawsuits."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-03",
    "period": "2025-12-31",
    "accession": "0001035267-26-000010",
    "url": "https://www.sec.gov/Archives/edgar/data/1035267/000103526726000010/isrg-20251231.htm",
    "filerCik": "0001035267"
   },
   "checkFirst": "Procedure growth, system placements, and instruments-and-accessories revenue."
  },
  "VRTX": {
   "name": "Vertex Pharmaceuticals",
   "cik": "0000875320",
   "ir": null,
   "sector": "Healthcare",
   "tier": "Growth",
   "why": "Cystic fibrosis biotech",
   "tierWhy": "Profitable biotech, but concentrated in one disease area with pipeline bets. Growth.",
   "business": "Biotech focused on cystic fibrosis medicines, expanding into pain, sickle cell disease, and kidney disease.",
   "risks": [
    "Most revenue comes from its CF (cystic fibrosis) medicines.",
    "New products may not sell as hoped.",
    "Pricing and reimbursement pressure.",
    "Clinical trials can fail."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-13",
    "period": "2025-12-31",
    "accession": "0000875320-26-000056",
    "url": "https://www.sec.gov/Archives/edgar/data/875320/000087532026000056/vrtx-20251231.htm",
    "filerCik": "0000875320"
   },
   "checkFirst": "Product revenue by drug and pipeline milestones in earnings releases."
  },
  "REGN": {
   "name": "Regeneron",
   "cik": "0000872589",
   "ir": null,
   "sector": "Healthcare",
   "tier": "Growth",
   "why": "Biotech (Eylea, Dupixent)",
   "tierWhy": "Profitable biotech whose key products face competition. Growth.",
   "business": "Biotech that makes EYLEA for eye disease, Dupixent (with Sanofi), and cancer medicines.",
   "risks": [
    "EYLEA faces biosimilar competition.",
    "Relies on its collaboration with Sanofi.",
    "Clinical trials can fail.",
    "Drug-pricing pressure."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-04",
    "period": "2025-12-31",
    "accession": "0000872589-26-000008",
    "url": "https://www.sec.gov/Archives/edgar/data/872589/000087258926000008/regn-20251231.htm",
    "filerCik": "0000872589"
   },
   "checkFirst": "Product sales, collaboration revenue from Sanofi, and R&D spending."
  },
  "BSX": {
   "name": "Boston Scientific",
   "cik": "0000885725",
   "ir": "https://investors.bostonscientific.com/",
   "sector": "Healthcare",
   "tier": "Growth",
   "why": "Minimally invasive devices",
   "tierWhy": "Fast-growing device maker with a high valuation. Growth.",
   "business": "Makes minimally invasive medical devices for heart, vascular, urology, and other procedures, including WATCHMAN.",
   "risks": [
    "Product recalls and quality problems.",
    "Faces strong competition.",
    "Depends on FDA and other regulatory approvals.",
    "Acquisitions carry integration risk."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-17",
    "period": "2025-12-31",
    "accession": "0000885725-26-000010",
    "url": "https://www.sec.gov/Archives/edgar/data/885725/000088572526000010/bsx-20251231.htm",
    "filerCik": "0000885725"
   },
   "checkFirst": "Cardiovascular vs. MedSurg segment sales and organic growth."
  },
  "SYK": {
   "name": "Stryker",
   "cik": "0000310764",
   "ir": "https://investors.stryker.com/",
   "sector": "Healthcare",
   "tier": "Growth",
   "why": "Orthopedics + surgical tech",
   "tierWhy": "Growing medtech leader. Demand is steady but it is valued for growth. Growth.",
   "business": "Medical technology: orthopaedic implants, surgical equipment, neurotechnology, and the Mako surgical robot.",
   "risks": [
    "Healthcare cost pressure on prices.",
    "Product recalls and liability.",
    "Acquisitions carry integration risk.",
    "Depends on FDA and other approvals."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-11",
    "period": "2025-12-31",
    "accession": "0000310764-26-000010",
    "url": "https://www.sec.gov/Archives/edgar/data/310764/000031076426000010/syk-20251231.htm",
    "filerCik": "0000310764"
   },
   "checkFirst": "MedSurg and Neurotechnology vs. Orthopaedics segment sales and organic growth."
  },
  "MRNA": {
   "name": "Moderna",
   "cik": "0001682852",
   "ir": "https://investors.modernatx.com/",
   "sector": "Healthcare",
   "tier": "Aggressive growth",
   "why": "mRNA vaccines + medicines",
   "tierWhy": "Losing money while betting on its pipeline; very volatile. Aggressive growth.",
   "business": "Biotech developing mRNA medicines and vaccines, including for COVID-19, RSV, flu, and cancer.",
   "risks": [
    "Sales have fallen as COVID-19 vaccine demand declined.",
    "Has a history of net losses.",
    "Vaccine policy and approvals are uncertain.",
    "Clinical trials can fail."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-20",
    "period": "2025-12-31",
    "accession": "0001682852-26-000033",
    "url": "https://www.sec.gov/Archives/edgar/data/1682852/000168285226000033/mrna-20251231.htm",
    "filerCik": "0001682852"
   },
   "checkFirst": "Product sales, cash and investments, and operating expense cuts in earnings releases."
  },
  "DXCM": {
   "name": "DexCom",
   "cik": "0001093557",
   "ir": "https://investors.dexcom.com/",
   "sector": "Healthcare",
   "tier": "Aggressive growth",
   "why": "Glucose monitors",
   "tierWhy": "Growth medtech with one main product line; the stock swings with competition and quality issues. Aggressive growth.",
   "business": "Makes continuous glucose monitoring (CGM) systems for people with diabetes.",
   "risks": [
    "Faces strong competition in glucose monitoring.",
    "Depends on insurance coverage and reimbursement.",
    "Product quality issues and FDA actions.",
    "Manufacturing problems could limit supply."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-12",
    "period": "2025-12-31",
    "accession": "0001093557-26-000027",
    "url": "https://www.sec.gov/Archives/edgar/data/1093557/000109355726000027/dxcm-20251231.htm",
    "filerCik": "0001093557"
   },
   "checkFirst": "U.S. vs. international revenue, gross margin, and any FDA warning letters disclosed in 8-Ks."
  },
  "ALNY": {
   "name": "Alnylam Pharmaceuticals",
   "cik": "0001178670",
   "ir": "https://investors.alnylam.com/",
   "sector": "Healthcare",
   "tier": "Aggressive growth",
   "why": "RNAi medicines",
   "tierWhy": "Biotech growth story with a high valuation. Aggressive growth.",
   "business": "Biotech making RNA-interference (RNAi) medicines for rare and heart diseases.",
   "risks": [
    "Has a history of losses.",
    "Depends on a few commercial products, especially AMVUTTRA.",
    "Clinical trials can fail.",
    "Pricing and reimbursement pressure."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-12",
    "period": "2025-12-31",
    "accession": "0001628280-26-007497",
    "url": "https://www.sec.gov/Archives/edgar/data/1178670/000162828026007497/alny-20251231.htm",
    "filerCik": "0001178670"
   },
   "checkFirst": "Net product revenue by drug, operating results, and cash."
  },
  "ILMN": {
   "name": "Illumina",
   "cik": "0001110803",
   "ir": null,
   "sector": "Healthcare",
   "tier": "Aggressive growth",
   "why": "DNA sequencing",
   "tierWhy": "Former growth leader facing competition and China issues. Volatile. Aggressive growth.",
   "business": "Makes DNA sequencing instruments and consumables used in research and clinical genomics.",
   "risks": [
    "New sequencing competitors.",
    "Restrictions and risks in China.",
    "Research-funding cuts could reduce demand.",
    "Depends on recurring consumables sales."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-12",
    "period": "2025-12-28",
    "accession": "0001110803-26-000024",
    "url": "https://www.sec.gov/Archives/edgar/data/1110803/000111080326000024/ilmn-20251228.htm",
    "filerCik": "0001110803"
   },
   "checkFirst": "Consumables vs. instruments revenue, China results, and operating margin."
  },
  "BRK.B": {
   "name": "Berkshire Hathaway Class B",
   "cik": "0001067983",
   "ir": "https://www.berkshirehathaway.com/",
   "sector": "Financials",
   "tier": "Defensive",
   "why": "Conglomerate (insurance, rail, energy)",
   "tierWhy": "Diversified, cash-rich conglomerate known for conservative finances. Defensive.",
   "business": "Conglomerate that owns insurance (GEICO and reinsurance), the BNSF railroad, utilities and energy, manufacturing and retail businesses, and a large stock portfolio.",
   "risks": [
    "Depends on key leaders, including the handoff from Warren Buffett to Greg Abel as CEO.",
    "Large insurance losses from catastrophes.",
    "Big stock investments can swing in value.",
    "Its utilities, railroad, and insurers are heavily regulated."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-03-02",
    "period": "2025-12-31",
    "accession": "0001193125-26-083899",
    "url": "https://www.sec.gov/Archives/edgar/data/1067983/000119312526083899/brka-20251231.htm",
    "filerCik": "0001067983"
   },
   "checkFirst": "Insurance underwriting vs. investment income, BNSF and Berkshire Hathaway Energy results, and cash. Read the annual shareholder letter too.",
   "note": "One CIK covers both BRK.A and BRK.B. The Berkshire annual letter is posted on the same official site."
  },
  "CB": {
   "name": "Chubb",
   "cik": "0000896159",
   "ir": "https://investors.chubb.com/",
   "sector": "Financials",
   "tier": "Defensive",
   "why": "Property & casualty insurer",
   "tierWhy": "Large, conservatively run insurer. Insurance demand is steady. Defensive.",
   "business": "Global property and casualty insurer that also sells life insurance and reinsurance.",
   "risks": [
    "Catastrophes like hurricanes and wildfires can cause big losses.",
    "Loss reserves may turn out to be too low.",
    "Its investment portfolio can lose value.",
    "Regulated in many countries."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-27",
    "period": "2025-12-31",
    "accession": "0000896159-26-000005",
    "url": "https://www.sec.gov/Archives/edgar/data/896159/000089615926000005/cb-20251231.htm",
    "filerCik": "0000896159"
   },
   "checkFirst": "Combined ratio by segment, catastrophe losses, and net investment income."
  },
  "MRSH": {
   "name": "Marsh & McLennan",
   "cik": "0000062709",
   "ir": "https://www.marsh.com/en/corp/investors.html",
   "sector": "Financials",
   "tier": "Defensive",
   "why": "Insurance broker + consulting",
   "tierWhy": "Fee-based brokerage and consulting with recurring revenue. Defensive.",
   "business": "Professional-services firm: insurance brokerage (Marsh), reinsurance brokerage (Guy Carpenter), and consulting (Mercer, Oliver Wyman).",
   "risks": [
    "Errors-and-omissions claims from clients.",
    "Economic conditions affect clients' spending.",
    "Acquisitions carry integration risk.",
    "Regulated in many countries."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-09",
    "period": "2025-12-31",
    "accession": "0000062709-26-000022",
    "url": "https://www.sec.gov/Archives/edgar/data/62709/000006270926000022/mrsh-20251231.htm",
    "filerCik": "0000062709"
   },
   "checkFirst": "Risk & Insurance Services vs. Consulting segment revenue and underlying growth.",
   "note": "SEC lists Marsh & McLennan under the ticker MRSH. Its investor page now lives on marsh.com."
  },
  "JPM": {
   "name": "JPMorgan Chase",
   "cik": "0000019617",
   "ir": "https://www.jpmorganchase.com/ir",
   "sector": "Financials",
   "tier": "Steady",
   "why": "Largest U.S. bank",
   "tierWhy": "Biggest, well-capitalized U.S. bank. Banks swing with the economy. Steady.",
   "business": "Largest U.S. bank: consumer banking (Chase), investment banking, commercial banking, and asset and wealth management.",
   "risks": [
    "Economic downturns raise loan losses.",
    "Heavy regulation and capital rules.",
    "Market swings affect trading and investment results.",
    "Cyberattacks."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-13",
    "period": "2025-12-31",
    "accession": "0001628280-26-008131",
    "url": "https://www.sec.gov/Archives/edgar/data/19617/000162828026008131/jpm-20251231.htm",
    "filerCik": "0000019617"
   },
   "checkFirst": "Segment net income, credit-loss provisions, and capital ratios."
  },
  "BAC": {
   "name": "Bank of America",
   "cik": "0000070858",
   "ir": "https://investor.bankofamerica.com/",
   "sector": "Financials",
   "tier": "Steady",
   "why": "Large U.S. bank",
   "tierWhy": "Large, diversified U.S. bank. Earnings swing with interest rates and the economy. Steady.",
   "business": "Large U.S. bank: consumer banking, Merrill wealth management, and global banking and markets.",
   "risks": [
    "Interest-rate changes affect earnings.",
    "Economic downturns raise loan losses.",
    "Heavy regulation.",
    "Cyberattacks."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-25",
    "period": "2025-12-31",
    "accession": "0000070858-26-000157",
    "url": "https://www.sec.gov/Archives/edgar/data/70858/000007085826000157/bac-20251231.htm",
    "filerCik": "0000070858"
   },
   "checkFirst": "Net interest income, segment results, credit-loss provisions, and capital ratios."
  },
  "V": {
   "name": "Visa",
   "cik": "0001403161",
   "ir": "https://investor.visa.com/",
   "sector": "Financials",
   "tier": "Steady",
   "why": "Card payments network",
   "tierWhy": "High-margin network business that grows with consumer spending. Steady.",
   "business": "Runs a global card-payments network connecting consumers, merchants, banks, and governments, earning fees on transactions.",
   "risks": [
    "Lawsuits, including over interchange fees.",
    "Regulation of payment fees.",
    "Competition from new ways to pay.",
    "Spending drops in a weak economy."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2025-11-06",
    "period": "2025-09-30",
    "accession": "0001403161-25-000089",
    "url": "https://www.sec.gov/Archives/edgar/data/1403161/000140316125000089/v-20250930.htm",
    "filerCik": "0001403161"
   },
   "checkFirst": "Payments volume, processed transactions, and cross-border volume in earnings releases."
  },
  "MA": {
   "name": "Mastercard",
   "cik": "0001141391",
   "ir": "https://investor.mastercard.com/",
   "sector": "Financials",
   "tier": "Steady",
   "why": "Card payments network",
   "tierWhy": "High-margin network business that grows with consumer spending. Steady.",
   "business": "Global payments network and services connecting cardholders, merchants, and banks.",
   "risks": [
    "Lawsuits, including over interchange fees.",
    "Regulation of payment fees.",
    "Competition from new ways to pay.",
    "Cyberattacks and data breaches."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-11",
    "period": "2025-12-31",
    "accession": "0001141391-26-000013",
    "url": "https://www.sec.gov/Archives/edgar/data/1141391/000114139126000013/ma-20251231.htm",
    "filerCik": "0001141391"
   },
   "checkFirst": "Gross dollar volume, cross-border volume, and value-added services revenue."
  },
  "SPGI": {
   "name": "S&P Global",
   "cik": "0000064040",
   "ir": "https://investor.spglobal.com/",
   "sector": "Financials",
   "tier": "Steady",
   "why": "Ratings, indices, data",
   "tierWhy": "Data and ratings franchises with recurring fees. Steady.",
   "business": "Provides credit ratings, market data and analytics, S&P indices, and commodity insights.",
   "risks": [
    "Ratings revenue depends on how much debt companies issue.",
    "Regulation and legal risks.",
    "Faces competition.",
    "Cyberattacks."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-11",
    "period": "2025-12-31",
    "accession": "0000064040-26-000013",
    "url": "https://www.sec.gov/Archives/edgar/data/64040/000006404026000013/spgi-20251231.htm",
    "filerCik": "0000064040"
   },
   "checkFirst": "Segment revenue (Ratings, Market Intelligence, Indices, and others) and operating margin."
  },
  "AXP": {
   "name": "American Express",
   "cik": "0000004962",
   "ir": "https://ir.americanexpress.com/",
   "sector": "Financials",
   "tier": "Steady",
   "why": "Premium cards + network",
   "tierWhy": "Premium card issuer with wealthy customers. Swings with spending and credit. Steady.",
   "business": "Card issuer and payments network serving consumers, small businesses, and corporations, earning fees and interest.",
   "risks": [
    "Spending and credit losses worsen in downturns.",
    "Faces strong competition.",
    "Heavy regulation.",
    "Depends on co-brand partners."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-06",
    "period": "2025-12-31",
    "accession": "0000004962-26-000080",
    "url": "https://www.sec.gov/Archives/edgar/data/4962/000000496226000080/axp-20251231.htm",
    "filerCik": "0000004962"
   },
   "checkFirst": "Billed business, net card fees, and credit-loss provisions."
  },
  "PGR": {
   "name": "Progressive",
   "cik": "0000080661",
   "ir": "https://investors.progressive.com/",
   "sector": "Financials",
   "tier": "Steady",
   "why": "Auto insurer",
   "tierWhy": "Large insurer whose profits swing with claims costs. Steady.",
   "business": "Sells auto insurance plus home and commercial auto insurance, directly and through independent agents.",
   "risks": [
    "Claims costs can rise faster than prices.",
    "Catastrophe losses.",
    "Insurance rates are regulated by states.",
    "Faces strong competition."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-03-02",
    "period": "2025-12-31",
    "accession": "0000080661-26-000086",
    "url": "https://www.sec.gov/Archives/edgar/data/80661/000008066126000086/pgr-20251231.htm",
    "filerCik": "0000080661"
   },
   "checkFirst": "Combined ratio, policies in force, and monthly results it publishes."
  },
  "GS": {
   "name": "Goldman Sachs",
   "cik": "0000886982",
   "ir": "https://www.goldmansachs.com/investor-relations/",
   "sector": "Financials",
   "tier": "Growth",
   "why": "Investment bank",
   "tierWhy": "Results swing with deal-making and trading. Growth tier (more cyclical than plain banks).",
   "business": "Investment bank: advises on deals, trades securities, and runs asset and wealth management.",
   "risks": [
    "Market swings hurt trading and investment results.",
    "Regulation and capital rules.",
    "Legal and reputation risks.",
    "Credit losses."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-25",
    "period": "2025-12-31",
    "accession": "0000886982-26-000091",
    "url": "https://www.sec.gov/Archives/edgar/data/886982/000088698226000091/gs-20251231.htm",
    "filerCik": "0000886982"
   },
   "checkFirst": "Global Banking & Markets vs. Asset & Wealth Management results and capital ratios."
  },
  "MS": {
   "name": "Morgan Stanley",
   "cik": "0000895421",
   "ir": "https://www.morganstanley.com/about-us-ir",
   "sector": "Financials",
   "tier": "Growth",
   "why": "Investment bank + wealth management",
   "tierWhy": "More cyclical than plain banks, though wealth management adds stability. Growth tier.",
   "business": "Investment bank plus a large wealth-management business and investment management.",
   "risks": [
    "Market swings hurt trading and fee income.",
    "Regulation and capital rules.",
    "Legal and reputation risks.",
    "Credit losses."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-19",
    "period": "2025-12-31",
    "accession": "0000895421-26-000086",
    "url": "https://www.sec.gov/Archives/edgar/data/895421/000089542126000086/ms-20251231.htm",
    "filerCik": "0000895421"
   },
   "checkFirst": "Institutional Securities vs. Wealth Management results and net new assets."
  },
  "SCHW": {
   "name": "Charles Schwab",
   "cik": "0000316709",
   "ir": "https://www.aboutschwab.com/investor-relations",
   "sector": "Financials",
   "tier": "Growth",
   "why": "Brokerage + banking",
   "tierWhy": "Earnings are very sensitive to interest rates and markets. Growth tier.",
   "business": "Brokerage, banking, and wealth services for individual investors and independent advisors.",
   "risks": [
    "Interest-rate changes affect earnings.",
    "Clients can move cash into higher-yielding options.",
    "Heavy regulation.",
    "Tech outages and cyberattacks."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-25",
    "period": "2025-12-31",
    "accession": "0000316709-26-000009",
    "url": "https://www.sec.gov/Archives/edgar/data/316709/000031670926000009/schw-20251231.htm",
    "filerCik": "0000316709"
   },
   "checkFirst": "Net interest revenue, client assets, and new brokerage accounts in monthly activity reports."
  },
  "PYPL": {
   "name": "PayPal",
   "cik": "0001633917",
   "ir": "https://investor.pypl.com/",
   "sector": "Financials",
   "tier": "Growth",
   "why": "Digital payments",
   "tierWhy": "Payments company trying to re-accelerate growth. Growth tier, with more uncertainty.",
   "business": "Digital payments through PayPal, Venmo, and Braintree merchant processing.",
   "risks": [
    "Faces strong competition.",
    "Heavy regulation.",
    "Fraud and cyberattacks.",
    "Transaction margins can shrink."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-03",
    "period": "2025-12-31",
    "accession": "0001633917-26-000024",
    "url": "https://www.sec.gov/Archives/edgar/data/1633917/000163391726000024/pypl-20251231.htm",
    "filerCik": "0001633917"
   },
   "checkFirst": "Total payment volume, transaction margin dollars, and active accounts."
  },
  "COF": {
   "name": "Capital One",
   "cik": "0000927628",
   "ir": null,
   "sector": "Financials",
   "tier": "Growth",
   "why": "Credit cards + consumer banking",
   "tierWhy": "Consumer-lending bank that is more sensitive to recessions than big diversified banks. Growth tier (higher risk and reward).",
   "business": "Bank focused on credit cards, auto loans, and consumer and commercial banking. It now owns Discover and its payment network.",
   "risks": [
    "Credit losses on consumer loans rise in downturns.",
    "Integrating Discover carries risk.",
    "Heavy regulation.",
    "Interest-rate changes affect earnings."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-19",
    "period": "2025-12-31",
    "accession": "0000927628-26-000024",
    "url": "https://www.sec.gov/Archives/edgar/data/927628/000092762826000024/cof-20251231.htm",
    "filerCik": "0000927628"
   },
   "checkFirst": "Net charge-off rates, credit-card segment results, and capital ratios."
  },
  "HOOD": {
   "name": "Robinhood Markets",
   "cik": "0001783879",
   "ir": null,
   "sector": "Financials",
   "tier": "Aggressive growth",
   "why": "Trading app",
   "tierWhy": "Revenue swings with retail trading and crypto activity. Aggressive growth.",
   "business": "Online brokerage app for trading stocks, options, and crypto, plus cash and retirement accounts.",
   "risks": [
    "Revenue depends on how much customers trade.",
    "Heavy and changing regulation.",
    "Exposure to crypto markets.",
    "Platform outages."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-18",
    "period": "2025-12-31",
    "accession": "0001783879-26-000023",
    "url": "https://www.sec.gov/Archives/edgar/data/1783879/000178387926000023/hood-20251231.htm",
    "filerCik": "0001783879"
   },
   "checkFirst": "Transaction revenue by type, net interest revenue, funded customers, and assets under custody. (The stock is a company, not crypto; this app holds no crypto.)"
  },
  "SOFI": {
   "name": "SoFi Technologies",
   "cik": "0001818874",
   "ir": "https://investors.sofi.com/",
   "sector": "Financials",
   "tier": "Aggressive growth",
   "why": "Digital bank + lending",
   "tierWhy": "Fast-growing digital lender and bank with credit and rate exposure. Aggressive growth.",
   "business": "Digital personal-finance company: student, personal, and home loans, banking, investing, and the Galileo tech platform.",
   "risks": [
    "Credit losses on loans.",
    "Regulated as a bank holding company.",
    "Interest-rate changes affect funding and loan demand.",
    "Faces strong competition."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-17",
    "period": "2025-12-31",
    "accession": "0001818874-26-000013",
    "url": "https://www.sec.gov/Archives/edgar/data/1818874/000181887426000013/sofi-20251231.htm",
    "filerCik": "0001818874"
   },
   "checkFirst": "Segment results (Lending, Technology Platform, Financial Services), member growth, and loan performance."
  },
  "AFRM": {
   "name": "Affirm Holdings",
   "cik": "0001820953",
   "ir": null,
   "sector": "Financials",
   "tier": "Aggressive growth",
   "why": "Buy now, pay later",
   "tierWhy": "Lending model depends on credit and funding markets. Aggressive growth.",
   "business": "Offers buy-now-pay-later loans at checkout, plus the Affirm Card.",
   "risks": [
    "Credit losses on its loans.",
    "Depends on capital markets for funding.",
    "Relies on large merchant partners.",
    "Regulation of consumer lending."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-08-27",
    "period": "2026-06-30",
    "accession": "0001628280-26-059279",
    "url": "https://www.sec.gov/Archives/edgar/data/1820953/000162828026059279/afrm-20260630.htm",
    "filerCik": "0001820953"
   },
   "checkFirst": "Gross merchandise volume, revenue less transaction costs, and delinquency rates."
  },
  "KMI": {
   "name": "Kinder Morgan",
   "cik": "0001506307",
   "ir": "https://ir.kindermorgan.com/",
   "sector": "Energy",
   "tier": "Defensive",
   "why": "Natural gas pipelines",
   "tierWhy": "Fee-based pipeline income is steadier than oil drilling. Defensive within Energy.",
   "business": "Operates natural gas pipelines and storage, plus products pipelines, terminals, and CO2 businesses.",
   "risks": [
    "Pipeline rates are regulated (FERC).",
    "Carries a lot of debt.",
    "Some businesses are exposed to commodity prices.",
    "Climate rules could reduce demand or raise costs."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-13",
    "period": "2025-12-31",
    "accession": "0001506307-26-000011",
    "url": "https://www.sec.gov/Archives/edgar/data/1506307/000150630726000011/kmi-20251231.htm",
    "filerCik": "0001506307"
   },
   "checkFirst": "Segment earnings (Natural Gas Pipelines and others), debt-to-EBITDA in earnings releases, and dividend coverage."
  },
  "WMB": {
   "name": "Williams Companies",
   "cik": "0000107263",
   "ir": null,
   "sector": "Energy",
   "tier": "Defensive",
   "why": "Natural gas pipelines",
   "tierWhy": "Fee-based natural gas pipelines. Defensive within Energy.",
   "business": "Operates natural gas pipelines (including Transco) and gathering and processing systems.",
   "risks": [
    "Pipeline rates are regulated (FERC).",
    "Carries a lot of debt.",
    "Depends on natural gas demand and production.",
    "Climate rules could reduce demand or raise costs."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-24",
    "period": "2025-12-31",
    "accession": "0000107263-26-000006",
    "url": "https://www.sec.gov/Archives/edgar/data/107263/000010726326000006/wmb-20251231.htm",
    "filerCik": "0000107263"
   },
   "checkFirst": "Transmission vs. gathering segment results, debt, and project backlog."
  },
  "XOM": {
   "name": "Exxon Mobil",
   "cik": "0002115436",
   "ir": "https://investor.exxonmobil.com/",
   "sector": "Energy",
   "tier": "Steady",
   "why": "Integrated oil major",
   "tierWhy": "Huge, diversified oil major with a dividend. Steady, but tied to oil prices.",
   "business": "Integrated oil and gas company: exploration and production (Upstream), refining and fuels, chemicals, and specialty products.",
   "risks": [
    "Oil and gas prices swing.",
    "Climate rules and the energy transition.",
    "Political and geopolitical risks where it operates.",
    "Big projects can run late or over budget."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-18",
    "period": "2025-12-31",
    "accession": "0000034088-26-000045",
    "url": "https://www.sec.gov/Archives/edgar/data/34088/000003408826000045/xom-20251231.htm",
    "filerCik": "0000034088"
   },
   "checkFirst": "Upstream vs. Energy Products vs. Chemical Products earnings, capital spending, and production volumes.",
   "note": "EDGAR now lists XOM under ExxonMobil Holdings Corp (CIK 0002115436). Older 10-K/10-Q filings sit under Exxon Mobil Corp, CIK 0000034088."
  },
  "CVX": {
   "name": "Chevron",
   "cik": "0000093410",
   "ir": "https://www.chevron.com/investors",
   "sector": "Energy",
   "tier": "Steady",
   "why": "Integrated oil major",
   "tierWhy": "Large integrated oil major with a dividend. Steady, but tied to oil prices.",
   "business": "Integrated oil and gas company: upstream production, refining and marketing (downstream), and chemicals.",
   "risks": [
    "Oil and gas prices swing.",
    "Climate rules and the energy transition.",
    "Integrating the Hess acquisition.",
    "Political risks where it operates."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-24",
    "period": "2025-12-31",
    "accession": "0000093410-26-000078",
    "url": "https://www.sec.gov/Archives/edgar/data/93410/000009341026000078/cvx-20251231.htm",
    "filerCik": "0000093410"
   },
   "checkFirst": "Upstream vs. Downstream earnings, production, and capital spending."
  },
  "COP": {
   "name": "ConocoPhillips",
   "cik": "0001163165",
   "ir": "https://www.conocophillips.com/investor-relations/",
   "sector": "Energy",
   "tier": "Steady",
   "why": "Oil & gas producer",
   "tierWhy": "Large oil and gas producer with a strong balance sheet. Steady, but tied to oil prices.",
   "business": "Explores for and produces oil and natural gas worldwide, including LNG.",
   "risks": [
    "Oil and gas prices swing.",
    "Climate rules.",
    "Heavy regulation.",
    "Must keep replacing the oil and gas reserves it produces."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-17",
    "period": "2025-12-31",
    "accession": "0001163165-26-000009",
    "url": "https://www.sec.gov/Archives/edgar/data/1163165/000116316526000009/cop-20251231.htm",
    "filerCik": "0001163165"
   },
   "checkFirst": "Production by region, realized prices, and capital spending."
  },
  "EOG": {
   "name": "EOG Resources",
   "cik": "0000821189",
   "ir": "https://investors.eogresources.com/",
   "sector": "Energy",
   "tier": "Steady",
   "why": "Shale oil & gas producer",
   "tierWhy": "Disciplined U.S. shale producer. Steady for its industry, but tied to oil prices.",
   "business": "Explores for and produces oil and natural gas in U.S. shale basins and Trinidad.",
   "risks": [
    "Oil and gas prices swing.",
    "Heavy regulation.",
    "Climate rules.",
    "Drilling and operating risks."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-24",
    "period": "2025-12-31",
    "accession": "0000821189-26-000054",
    "url": "https://www.sec.gov/Archives/edgar/data/821189/000082118926000054/eog-20251231.htm",
    "filerCik": "0000821189"
   },
   "checkFirst": "Production volumes, per-unit costs, and capital spending."
  },
  "PSX": {
   "name": "Phillips 66",
   "cik": "0001534701",
   "ir": "https://investor.phillips66.com/",
   "sector": "Energy",
   "tier": "Steady",
   "why": "Refining + midstream",
   "tierWhy": "Refiner with steadier midstream and chemicals businesses. Steady.",
   "business": "Refines fuels and runs midstream pipelines, chemicals (through a joint venture), and fuel marketing.",
   "risks": [
    "Refining margins swing.",
    "Renewable-fuel and climate rules.",
    "Accidents and hazards at plants.",
    "Climate rules."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-20",
    "period": "2025-12-31",
    "accession": "0001534701-26-000006",
    "url": "https://www.sec.gov/Archives/edgar/data/1534701/000153470126000006/psx-20251231.htm",
    "filerCik": "0001534701"
   },
   "checkFirst": "Segment results (Midstream, Chemicals, Refining, Marketing), refining margins, and capital spending."
  },
  "SLB": {
   "name": "SLB (Schlumberger)",
   "cik": "0000087347",
   "ir": "https://investorcenter.slb.com/",
   "sector": "Energy",
   "tier": "Growth",
   "why": "Oilfield services",
   "tierWhy": "Largest oilfield-services company; demand swings with oil spending. Growth tier (more cyclical).",
   "business": "Provides technology and services for oil and gas drilling, production, and digital operations.",
   "risks": [
    "Depends on customers' spending on drilling.",
    "Political risks in many countries.",
    "Climate rules and the energy transition.",
    "Faces strong competition."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-01-23",
    "period": "2025-12-31",
    "accession": "0001193125-26-021017",
    "url": "https://www.sec.gov/Archives/edgar/data/87347/000119312526021017/slb-20251231.htm",
    "filerCik": "0000087347"
   },
   "checkFirst": "Revenue by division and by region, and pretax operating margins."
  },
  "MPC": {
   "name": "Marathon Petroleum",
   "cik": "0001510295",
   "ir": "https://www.marathonpetroleum.com/Investors/",
   "sector": "Energy",
   "tier": "Growth",
   "why": "Refining + MPLX",
   "tierWhy": "Refining profits move with fuel margins. Growth tier (cyclical).",
   "business": "Refines and markets fuels, and runs midstream pipelines through MPLX.",
   "risks": [
    "Refining margins swing.",
    "Heavy regulation.",
    "Accidents and hazards at plants.",
    "Climate rules."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-26",
    "period": "2025-12-31",
    "accession": "0001510295-26-000009",
    "url": "https://www.sec.gov/Archives/edgar/data/1510295/000151029526000009/mpc-20251231.htm",
    "filerCik": "0001510295"
   },
   "checkFirst": "Refining & Marketing vs. Midstream results, refining margin per barrel, and buybacks."
  },
  "VLO": {
   "name": "Valero Energy",
   "cik": "0001035002",
   "ir": "https://investorvalero.com/",
   "sector": "Energy",
   "tier": "Growth",
   "why": "Refining + renewable fuels",
   "tierWhy": "Refining profits move with fuel margins. Growth tier (cyclical).",
   "business": "Refines petroleum fuels and makes renewable diesel and ethanol.",
   "risks": [
    "Refining margins swing.",
    "Renewable-fuel rules.",
    "Accidents at plants.",
    "Climate rules."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-25",
    "period": "2025-12-31",
    "accession": "0001628280-26-011499",
    "url": "https://www.sec.gov/Archives/edgar/data/1035002/000162828026011499/vlo-20251231.htm",
    "filerCik": "0001035002"
   },
   "checkFirst": "Refining, Renewable Diesel, and Ethanol segment results and throughput."
  },
  "OXY": {
   "name": "Occidental Petroleum",
   "cik": "0000797468",
   "ir": "https://www.oxy.com/investors/",
   "sector": "Energy",
   "tier": "Growth",
   "why": "Oil, chemicals, carbon capture",
   "tierWhy": "Oil-heavy producer with debt and carbon-capture bets. Growth tier.",
   "business": "Produces oil and gas (largely in the Permian Basin), runs chemicals (OxyChem) and midstream businesses, and is developing carbon capture.",
   "risks": [
    "Oil and gas prices swing.",
    "Carries significant debt.",
    "Climate rules.",
    "Carbon-capture ventures may not succeed."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-18",
    "period": "2025-12-31",
    "accession": "0001628280-26-009059",
    "url": "https://www.sec.gov/Archives/edgar/data/797468/000162828026009059/oxy-20251231.htm",
    "filerCik": "0000797468"
   },
   "checkFirst": "Oil and gas vs. chemical vs. midstream results, debt reduction, and production."
  },
  "BKR": {
   "name": "Baker Hughes",
   "cik": "0001701605",
   "ir": "https://investors.bakerhughes.com/",
   "sector": "Energy",
   "tier": "Growth",
   "why": "Energy technology + LNG equipment",
   "tierWhy": "Energy equipment and services with cyclical demand. Growth tier.",
   "business": "Energy technology company: oilfield services and equipment, plus industrial and energy technology like LNG equipment and turbines.",
   "risks": [
    "Depends on customers' spending.",
    "Faces strong competition.",
    "International operations add political risks.",
    "Climate rules and the energy transition."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-05",
    "period": "2025-12-31",
    "accession": "0001701605-26-000007",
    "url": "https://www.sec.gov/Archives/edgar/data/1701605/000170160526000007/bkr-20251231.htm",
    "filerCik": "0001701605"
   },
   "checkFirst": "Oilfield Services & Equipment vs. Industrial & Energy Technology results and orders."
  },
  "CEG": {
   "name": "Constellation Energy",
   "cik": "0001868275",
   "ir": null,
   "sector": "Energy",
   "tier": "Growth",
   "why": "Nuclear power producer",
   "tierWhy": "Nuclear-heavy power producer benefiting from power demand, with price swings. Growth tier.",
   "business": "Largest U.S. producer of nuclear power; also runs gas, hydro, wind, and solar plants and sells power to businesses and homes.",
   "risks": [
    "Nuclear plants carry special operating risks.",
    "Power prices swing.",
    "Heavy regulation.",
    "Integrating the Calpine acquisition."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-24",
    "period": "2025-12-31",
    "accession": "0001868275-26-000032",
    "url": "https://www.sec.gov/Archives/edgar/data/1868275/000186827526000032/ceg-20251231.htm",
    "filerCik": "0001868275"
   },
   "checkFirst": "Generation output, hedging disclosures, and guidance in earnings releases."
  },
  "FANG": {
   "name": "Diamondback Energy",
   "cik": "0001539838",
   "ir": null,
   "sector": "Energy",
   "tier": "Growth",
   "why": "Permian shale producer",
   "tierWhy": "Pure-play shale producer tied to oil prices. Growth tier.",
   "business": "Oil and gas producer focused on the Permian Basin.",
   "risks": [
    "Oil and gas prices swing.",
    "Heavy regulation.",
    "Carries debt.",
    "Drilling and operating risks."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-25",
    "period": "2025-12-31",
    "accession": "0001539838-26-000010",
    "url": "https://www.sec.gov/Archives/edgar/data/1539838/000153983826000010/fang-20251231.htm",
    "filerCik": "0001539838"
   },
   "checkFirst": "Production volumes, per-unit costs, capital spending, and free cash flow."
  },
  "FSLR": {
   "name": "First Solar",
   "cik": "0001274494",
   "ir": "https://investor.firstsolar.com/",
   "sector": "Energy",
   "tier": "Aggressive growth",
   "why": "U.S. solar panel maker",
   "tierWhy": "Depends on government policy and solar demand. Very volatile. Aggressive growth.",
   "business": "Makes thin-film solar panels in the U.S. and other countries.",
   "risks": [
    "Depends on government incentives such as tax credits.",
    "Competition from cheaper imports.",
    "Trade policy and tariffs.",
    "Manufacturing and technology risks."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-24",
    "period": "2025-12-31",
    "accession": "0001274494-26-000021",
    "url": "https://www.sec.gov/Archives/edgar/data/1274494/000127449426000021/fslr-20251231.htm",
    "filerCik": "0001274494"
   },
   "checkFirst": "Bookings backlog, gross margin, and tax-credit sales in earnings releases."
  },
  "ENPH": {
   "name": "Enphase Energy",
   "cik": "0001463101",
   "ir": null,
   "sector": "Energy",
   "tier": "Aggressive growth",
   "why": "Home solar microinverters",
   "tierWhy": "Home-solar demand swings with rates and policy. Very volatile. Aggressive growth.",
   "business": "Makes microinverters, batteries, and energy-management systems for home solar.",
   "risks": [
    "Solar demand depends on incentives and interest rates.",
    "Faces strong competition.",
    "Relies on contract manufacturers.",
    "Trade policy and tariffs."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-17",
    "period": "2025-12-31",
    "accession": "0001463101-26-000013",
    "url": "https://www.sec.gov/Archives/edgar/data/1463101/000146310126000013/enph-20251231.htm",
    "filerCik": "0001463101"
   },
   "checkFirst": "Revenue by region, channel inventory, and gross margin."
  },
  "VST": {
   "name": "Vistra",
   "cik": "0001692819",
   "ir": "https://investor.vistracorp.com/",
   "sector": "Energy",
   "tier": "Aggressive growth",
   "why": "Power generation + retail electricity",
   "tierWhy": "Power producer with price, weather, and debt exposure. Aggressive growth.",
   "business": "Generates power (nuclear, gas, coal, solar, storage) and sells retail electricity in Texas and other markets.",
   "risks": [
    "Power prices swing.",
    "Extreme weather.",
    "Heavy regulation.",
    "Carries significant debt."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-27",
    "period": "2025-12-31",
    "accession": "0001692819-26-000006",
    "url": "https://www.sec.gov/Archives/edgar/data/1692819/000169281926000006/vistra-20251231.htm",
    "filerCik": "0001692819"
   },
   "checkFirst": "Segment results, hedging disclosures, and debt."
  },
  "HAL": {
   "name": "Halliburton",
   "cik": "0000045012",
   "ir": null,
   "sector": "Energy",
   "tier": "Aggressive growth",
   "why": "Oilfield services",
   "tierWhy": "Very cyclical oilfield-services business, heavy in North American fracking. Aggressive growth (high swings).",
   "business": "Oilfield services: drilling, well completion (including fracking), and production services.",
   "risks": [
    "Depends on customers' spending on drilling.",
    "Political risks in many countries.",
    "Rules on hydraulic fracturing.",
    "Faces strong competition."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-06",
    "period": "2025-12-31",
    "accession": "0000045012-26-000015",
    "url": "https://www.sec.gov/Archives/edgar/data/45012/000004501226000015/hal-20251231.htm",
    "filerCik": "0000045012"
   },
   "checkFirst": "Completion and Production vs. Drilling and Evaluation results, and North America vs. international revenue."
  },
  "PG": {
   "name": "Procter & Gamble",
   "cik": "0000080424",
   "ir": "https://pginvestor.com/",
   "sector": "Consumer",
   "tier": "Defensive",
   "why": "Household staples",
   "tierWhy": "Everyday products people buy in good and bad economies. Defensive.",
   "business": "Sells everyday household and personal-care brands such as Tide, Pampers, Gillette, and Crest.",
   "risks": [
    "Rising costs for materials and transport.",
    "Faces strong competition, including store brands.",
    "Currency swings and international risks.",
    "Depends on a few big retail customers."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-08-04",
    "period": "2026-06-30",
    "accession": "0000080424-26-000103",
    "url": "https://www.sec.gov/Archives/edgar/data/80424/000008042426000103/pg-20260630.htm",
    "filerCik": "0000080424"
   },
   "checkFirst": "Organic sales growth by segment, gross margin, and currency effects."
  },
  "KO": {
   "name": "Coca-Cola",
   "cik": "0000021344",
   "ir": "https://investors.coca-colacompany.com/",
   "sector": "Consumer",
   "tier": "Defensive",
   "why": "Beverages",
   "tierWhy": "Global drink brands with steady demand and a long dividend record. Defensive.",
   "business": "Makes beverage concentrates and drinks (Coca-Cola, Sprite, Powerade) sold through bottling partners worldwide.",
   "risks": [
    "Changing tastes and health concerns about sugar.",
    "Depends on its bottling partners.",
    "Currency swings.",
    "Tax disputes and changes in tax law."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-20",
    "period": "2025-12-31",
    "accession": "0001628280-26-010047",
    "url": "https://www.sec.gov/Archives/edgar/data/21344/000162828026010047/ko-20251231.htm",
    "filerCik": "0000021344"
   },
   "checkFirst": "Unit case volume, organic revenue growth, and operating segment results."
  },
  "PEP": {
   "name": "PepsiCo",
   "cik": "0000077476",
   "ir": "https://www.pepsico.com/investors",
   "sector": "Consumer",
   "tier": "Defensive",
   "why": "Snacks + beverages",
   "tierWhy": "Snacks and drinks with steady demand. Defensive.",
   "business": "Sells snacks (Frito-Lay, Quaker) and beverages (Pepsi, Gatorade).",
   "risks": [
    "Shifting consumer tastes and health trends.",
    "Rising input costs.",
    "Faces strong competition.",
    "Regulation, including labeling and taxes."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-03",
    "period": "2025-12-27",
    "accession": "0000077476-26-000007",
    "url": "https://www.sec.gov/Archives/edgar/data/77476/000007747626000007/pep-20251227.htm",
    "filerCik": "0000077476"
   },
   "checkFirst": "Division results (Frito-Lay North America and others), organic growth, and margins."
  },
  "WMT": {
   "name": "Walmart",
   "cik": "0000104169",
   "ir": "https://stock.walmart.com/",
   "sector": "Consumer",
   "tier": "Defensive",
   "why": "Largest retailer",
   "tierWhy": "Low-price retailer that often holds up in downturns. Defensive.",
   "business": "World's largest retailer: Walmart stores, Sam's Club, e-commerce, and advertising.",
   "risks": [
    "Economic conditions affect shoppers.",
    "Faces strong competition.",
    "International operations add risks.",
    "Tariffs and supply-chain costs."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-03-13",
    "period": "2026-01-31",
    "accession": "0000104169-26-000055",
    "url": "https://www.sec.gov/Archives/edgar/data/104169/000010416926000055/wmt-20260131.htm",
    "filerCik": "0000104169"
   },
   "checkFirst": "Walmart U.S., International, and Sam's Club segment results; e-commerce growth."
  },
  "COST": {
   "name": "Costco",
   "cik": "0000909832",
   "ir": "https://investor.costco.com/",
   "sector": "Consumer",
   "tier": "Defensive",
   "why": "Membership warehouses",
   "tierWhy": "Membership model with loyal customers. Defensive.",
   "business": "Runs membership warehouse clubs selling groceries and general merchandise at low prices.",
   "risks": [
    "Depends on members renewing.",
    "Faces strong competition.",
    "Inflation and supply-chain costs.",
    "Security breaches."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-10-07",
    "period": "2026-08-30",
    "accession": "0000909832-26-000093",
    "url": "https://www.sec.gov/Archives/edgar/data/909832/000090983226000093/cost-20260830.htm",
    "filerCik": "0000909832"
   },
   "checkFirst": "Comparable sales, membership fee income and renewal rate, and gross margin."
  },
  "MCD": {
   "name": "McDonald's",
   "cik": "0000063908",
   "ir": "https://corporate.mcdonalds.com/corpmcd/investors.html",
   "sector": "Consumer",
   "tier": "Defensive",
   "why": "Franchised restaurants",
   "tierWhy": "Global, mostly franchised restaurant brand with a long dividend record. Defensive.",
   "business": "Franchises and operates McDonald's restaurants worldwide; most restaurants are run by franchisees.",
   "risks": [
    "Depends on its franchisees.",
    "Changing consumer preferences.",
    "Food-safety problems.",
    "Currency swings and international risks."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-24",
    "period": "2025-12-31",
    "accession": "0000063908-26-000035",
    "url": "https://www.sec.gov/Archives/edgar/data/63908/000006390826000035/mcd-20251231.htm",
    "filerCik": "0000063908"
   },
   "checkFirst": "Comparable sales by segment, franchised margins, and debt."
  },
  "CL": {
   "name": "Colgate-Palmolive",
   "cik": "0000021665",
   "ir": "https://investor.colgatepalmolive.com/",
   "sector": "Consumer",
   "tier": "Defensive",
   "why": "Oral care + pet food",
   "tierWhy": "Everyday products with steady demand. Defensive.",
   "business": "Sells toothpaste and toothbrushes (Colgate), personal and home care products, and Hill's pet food.",
   "risks": [
    "Rising costs.",
    "Faces strong competition.",
    "Currency swings.",
    "Depends on big retail customers."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-23",
    "period": "2025-12-31",
    "accession": "0000021665-26-000006",
    "url": "https://www.sec.gov/Archives/edgar/data/21665/000002166526000006/cl-20251231.htm",
    "filerCik": "0000021665"
   },
   "checkFirst": "Organic sales growth by segment, gross margin, and currency effects."
  },
  "HD": {
   "name": "Home Depot",
   "cik": "0000354950",
   "ir": "https://ir.homedepot.com/",
   "sector": "Consumer",
   "tier": "Steady",
   "why": "Home improvement",
   "tierWhy": "Big, profitable retailer whose sales follow the housing market. Steady.",
   "business": "Largest home-improvement retailer, serving do-it-yourself customers and pros; it acquired SRS Distribution.",
   "risks": [
    "Sales follow the housing market.",
    "Economic conditions affect spending.",
    "Faces strong competition.",
    "Supply-chain disruptions."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-03-18",
    "period": "2026-02-01",
    "accession": "0001628280-26-019436",
    "url": "https://www.sec.gov/Archives/edgar/data/354950/000162828026019436/hd-20260201.htm",
    "filerCik": "0000354950"
   },
   "checkFirst": "Comparable sales, average ticket vs. transactions, and operating margin."
  },
  "LOW": {
   "name": "Lowe's",
   "cik": "0000060667",
   "ir": "https://corporate.lowes.com/investors",
   "sector": "Consumer",
   "tier": "Steady",
   "why": "Home improvement",
   "tierWhy": "Large home-improvement retailer tied to housing. Steady.",
   "business": "Home-improvement retailer for do-it-yourself customers and pros.",
   "risks": [
    "Sales follow the housing market.",
    "Economic conditions affect spending.",
    "Faces strong competition.",
    "Supply-chain disruptions."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-03-23",
    "period": "2026-01-30",
    "accession": "0000060667-26-000029",
    "url": "https://www.sec.gov/Archives/edgar/data/60667/000006066726000029/low-20260130.htm",
    "filerCik": "0000060667"
   },
   "checkFirst": "Comparable sales, Pro vs. DIY trends, and operating margin."
  },
  "TJX": {
   "name": "TJX Companies",
   "cik": "0000109198",
   "ir": null,
   "sector": "Consumer",
   "tier": "Steady",
   "why": "Off-price retail",
   "tierWhy": "Off-price retailer that can do well when shoppers hunt for deals. Steady.",
   "business": "Off-price retailer running T.J. Maxx, Marshalls, HomeGoods, and TK Maxx.",
   "risks": [
    "Depends on buying the right excess inventory.",
    "Economic conditions affect spending.",
    "Currency swings.",
    "Tariffs."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-03-31",
    "period": "2026-01-31",
    "accession": "0000109198-26-000008",
    "url": "https://www.sec.gov/Archives/edgar/data/109198/000010919826000008/tjx-20260131.htm",
    "filerCik": "0000109198"
   },
   "checkFirst": "Comparable sales by division and pretax margin."
  },
  "NKE": {
   "name": "Nike",
   "cik": "0000320187",
   "ir": "https://investors.nike.com/",
   "sector": "Consumer",
   "tier": "Steady",
   "why": "Athletic footwear + apparel",
   "tierWhy": "Global brand going through a turnaround. Steady tier, but more volatile lately.",
   "business": "Designs and sells athletic footwear, apparel, and equipment (Nike, Jordan, Converse).",
   "risks": [
    "Faces strong competition.",
    "Consumer tastes can change fast.",
    "Relies on contract manufacturers.",
    "Tariffs and trade policy."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-07-15",
    "period": "2026-05-31",
    "accession": "0000320187-26-000088",
    "url": "https://www.sec.gov/Archives/edgar/data/320187/000032018726000088/nke-20260531.htm",
    "filerCik": "0000320187"
   },
   "checkFirst": "Revenue by geography and by channel (wholesale vs. direct), gross margin, and inventory."
  },
  "SBUX": {
   "name": "Starbucks",
   "cik": "0000829224",
   "ir": "https://investor.starbucks.com/",
   "sector": "Consumer",
   "tier": "Steady",
   "why": "Coffeehouses",
   "tierWhy": "Global coffee brand in a turnaround. Steady tier, but more volatile lately.",
   "business": "Operates and licenses Starbucks coffeehouses worldwide and sells packaged coffee.",
   "risks": [
    "Economic conditions affect spending.",
    "Competition and conditions in China.",
    "Labor relations, including unions.",
    "Coffee prices."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2025-11-14",
    "period": "2025-09-28",
    "accession": "0000829224-25-000114",
    "url": "https://www.sec.gov/Archives/edgar/data/829224/000082922425000114/sbux-20250928.htm",
    "filerCik": "0000829224"
   },
   "checkFirst": "Comparable store sales by region, operating margin, and store counts."
  },
  "BKNG": {
   "name": "Booking Holdings",
   "cik": "0001075531",
   "ir": "https://ir.bookingholdings.com/",
   "sector": "Consumer",
   "tier": "Growth",
   "why": "Online travel",
   "tierWhy": "Profitable online-travel leader whose results follow travel demand. Growth.",
   "business": "Online travel company running Booking.com, Priceline, Agoda, KAYAK, and OpenTable.",
   "risks": [
    "Travel demand can fall.",
    "Faces strong competition, including from big tech and AI.",
    "Regulation such as the EU Digital Markets Act.",
    "Currency swings."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-18",
    "period": "2025-12-31",
    "accession": "0001075531-26-000009",
    "url": "https://www.sec.gov/Archives/edgar/data/1075531/000107553126000009/bkng-20251231.htm",
    "filerCik": "0001075531"
   },
   "checkFirst": "Room nights, gross bookings, and marketing expense."
  },
  "CMG": {
   "name": "Chipotle Mexican Grill",
   "cik": "0001058090",
   "ir": "https://ir.chipotle.com/",
   "sector": "Consumer",
   "tier": "Growth",
   "why": "Fast-casual restaurants",
   "tierWhy": "Company-owned growth restaurant chain with a high valuation. Growth.",
   "business": "Runs fast-casual Mexican restaurants that it owns and operates rather than franchises.",
   "risks": [
    "Food-safety problems.",
    "Labor and food costs.",
    "Consumer demand can weaken.",
    "New restaurants may not perform."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-04",
    "period": "2025-12-31",
    "accession": "0001058090-26-000009",
    "url": "https://www.sec.gov/Archives/edgar/data/1058090/000105809026000009/cmg-20251231.htm",
    "filerCik": "0001058090"
   },
   "checkFirst": "Comparable sales, restaurant-level margin, and new openings."
  },
  "ORLY": {
   "name": "O'Reilly Automotive",
   "cik": "0000898173",
   "ir": "https://corporate.oreillyauto.com/investor-relations-information/",
   "sector": "Consumer",
   "tier": "Growth",
   "why": "Auto parts retail",
   "tierWhy": "Consistent grower in auto parts, valued for growth. Growth.",
   "business": "Auto-parts retailer serving do-it-yourself customers and professional mechanics.",
   "risks": [
    "Faces strong competition.",
    "Vehicle trends, including electric vehicles.",
    "Supply-chain disruptions and tariffs.",
    "Economic conditions affect driving and spending."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-27",
    "period": "2025-12-31",
    "accession": "0000898173-26-000009",
    "url": "https://www.sec.gov/Archives/edgar/data/898173/000089817326000009/orly-20251231x10k.htm",
    "filerCik": "0000898173"
   },
   "checkFirst": "Comparable store sales, gross margin, and share buybacks funded with debt."
  },
  "TSLA": {
   "name": "Tesla",
   "cik": "0001318605",
   "ir": null,
   "sector": "Consumer",
   "tier": "Aggressive growth",
   "why": "EVs, energy storage, autonomy",
   "tierWhy": "Very high valuation built on future products. One of the most volatile large stocks. Aggressive growth.",
   "business": "Makes electric vehicles, energy storage, and solar products, and is developing self-driving and robotics.",
   "risks": [
    "Depends heavily on Elon Musk.",
    "Faces strong competition.",
    "Production ramps and new products can be delayed.",
    "Regulation, including for self-driving."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-01-29",
    "period": "2025-12-31",
    "accession": "0001628280-26-003952",
    "url": "https://www.sec.gov/Archives/edgar/data/1318605/000162828026003952/tsla-20251231.htm",
    "filerCik": "0001318605"
   },
   "checkFirst": "Automotive vs. Energy Generation and Storage results, deliveries, and automotive gross margin."
  },
  "ABNB": {
   "name": "Airbnb",
   "cik": "0001559720",
   "ir": "https://investors.airbnb.com/",
   "sector": "Consumer",
   "tier": "Aggressive growth",
   "why": "Home-stay marketplace",
   "tierWhy": "Growth marketplace exposed to travel demand and local rules. Aggressive growth.",
   "business": "Online marketplace for short-term home stays and experiences.",
   "risks": [
    "Local rules on short-term rentals.",
    "Travel demand can fall.",
    "Faces strong competition.",
    "Trust and safety problems."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-12",
    "period": "2025-12-31",
    "accession": "0001559720-26-000004",
    "url": "https://www.sec.gov/Archives/edgar/data/1559720/000155972026000004/abnb-20251231.htm",
    "filerCik": "0001559720"
   },
   "checkFirst": "Nights and experiences booked, gross booking value, and free cash flow."
  },
  "DASH": {
   "name": "DoorDash",
   "cik": "0001792789",
   "ir": "https://ir.doordash.com/",
   "sector": "Consumer",
   "tier": "Aggressive growth",
   "why": "Delivery platform",
   "tierWhy": "Fast-growing platform with thin profits and regulatory risk. Aggressive growth.",
   "business": "Delivery platform for restaurants, groceries, and retail (DoorDash, Wolt, and Deliveroo).",
   "risks": [
    "Rules on whether delivery workers are independent contractors.",
    "Faces strong competition.",
    "Has a history of losses.",
    "Integrating Deliveroo."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-18",
    "period": "2025-12-31",
    "accession": "0001792789-26-000013",
    "url": "https://www.sec.gov/Archives/edgar/data/1792789/000179278926000013/dash-20251231.htm",
    "filerCik": "0001792789"
   },
   "checkFirst": "Total orders, marketplace gross order value, and GAAP net income."
  },
  "LULU": {
   "name": "Lululemon Athletica",
   "cik": "0001397187",
   "ir": "https://corporate.lululemon.com/investors",
   "sector": "Consumer",
   "tier": "Aggressive growth",
   "why": "Athletic apparel",
   "tierWhy": "Brand-driven apparel company with fashion and competition risk. Aggressive growth.",
   "business": "Designs and sells athletic apparel for yoga, running, and training through its own stores and online.",
   "risks": [
    "Faces strong competition.",
    "Its brand and consumer tastes can change.",
    "Relies on suppliers in Asia.",
    "Tariffs."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-03-17",
    "period": "2026-02-01",
    "accession": "0001397187-26-000020",
    "url": "https://www.sec.gov/Archives/edgar/data/1397187/000139718726000020/lulu-20260201.htm",
    "filerCik": "0001397187"
   },
   "checkFirst": "Revenue by region (Americas vs. China), comparable sales, and gross margin."
  },
  "WM": {
   "name": "Waste Management",
   "cik": "0000823768",
   "ir": null,
   "sector": "Industrials",
   "tier": "Defensive",
   "why": "Waste + recycling",
   "tierWhy": "Trash pickup is needed in every economy. Defensive.",
   "business": "Collects, recycles, and disposes of waste across North America, including landfills, and handles healthcare waste.",
   "risks": [
    "Environmental regulation.",
    "Fuel and operating costs.",
    "Integrating the Stericycle acquisition.",
    "Faces competition."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-09",
    "period": "2025-12-31",
    "accession": "0001104659-26-012049",
    "url": "https://www.sec.gov/Archives/edgar/data/823768/000110465926012049/wm-20251231x10k.htm",
    "filerCik": "0000823768"
   },
   "checkFirst": "Collection and disposal results, operating EBITDA margin, and free cash flow."
  },
  "LMT": {
   "name": "Lockheed Martin",
   "cik": "0000936468",
   "ir": null,
   "sector": "Industrials",
   "tier": "Defensive",
   "why": "Defense contractor",
   "tierWhy": "Defense spending is fairly steady across economic cycles. Defensive.",
   "business": "Defense contractor making the F-35 fighter jet, missiles, helicopters, and space systems.",
   "risks": [
    "Depends on U.S. government budgets.",
    "Fixed-price contracts can lose money.",
    "Depends heavily on the F-35 program.",
    "Supply-chain problems."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-01-29",
    "period": "2025-12-31",
    "accession": "0001628280-26-004195",
    "url": "https://www.sec.gov/Archives/edgar/data/936468/000162828026004195/lmt-20251231.htm",
    "filerCik": "0000936468"
   },
   "checkFirst": "Segment sales and margins (Aeronautics, Missiles and Fire Control, Rotary and Mission Systems, Space) and backlog."
  },
  "ADP": {
   "name": "Automatic Data Processing",
   "cik": "0000008670",
   "ir": "https://investors.adp.com/",
   "sector": "Industrials",
   "tier": "Defensive",
   "why": "Payroll + HR services",
   "tierWhy": "Recurring payroll and HR fees from many businesses. Defensive.",
   "business": "Provides payroll, HR, and benefits software and outsourcing for businesses.",
   "risks": [
    "Fewer jobs mean fewer paychecks to process.",
    "Security breaches.",
    "Interest rates affect income on client funds.",
    "Faces competition."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-08-05",
    "period": "2026-06-30",
    "accession": "0000008670-26-000030",
    "url": "https://www.sec.gov/Archives/edgar/data/8670/000000867026000030/adp-20260630.htm",
    "filerCik": "0000008670"
   },
   "checkFirst": "Employer Services vs. PEO results, pays-per-control growth, and client-funds interest."
  },
  "CAT": {
   "name": "Caterpillar",
   "cik": "0000018230",
   "ir": "https://investors.caterpillar.com/",
   "sector": "Industrials",
   "tier": "Steady",
   "why": "Construction + mining equipment",
   "tierWhy": "Industrial leader with a dividend record, but demand follows the economy. Steady.",
   "business": "Makes construction and mining equipment, engines, turbines, and locomotives, and offers financing.",
   "risks": [
    "Demand is cyclical.",
    "Commodity prices affect mining customers.",
    "Trade policy and tariffs.",
    "Relies on independent dealers."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-13",
    "period": "2025-12-31",
    "accession": "0000018230-26-000008",
    "url": "https://www.sec.gov/Archives/edgar/data/18230/000001823026000008/cat-20251231.htm",
    "filerCik": "0000018230"
   },
   "checkFirst": "Segment sales and profit (Construction Industries, Resource Industries, Energy & Transportation) and backlog."
  },
  "HON": {
   "name": "Honeywell",
   "cik": "0000773840",
   "ir": "https://investor.honeywell.com/",
   "sector": "Industrials",
   "tier": "Steady",
   "why": "Industrial conglomerate",
   "tierWhy": "Diversified industrial with steady cash flow, now splitting into separate companies. Steady.",
   "business": "Industrial company in aerospace, building automation, industrial automation, and energy and sustainability, and it is separating into separate companies.",
   "risks": [
    "The planned separation may not go smoothly.",
    "Aerospace demand moves in cycles.",
    "International operations add risks.",
    "Supply-chain problems."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-17",
    "period": "2025-12-31",
    "accession": "0000773840-26-000013",
    "url": "https://www.sec.gov/Archives/edgar/data/773840/000077384026000013/hon-20251231.htm",
    "filerCik": "0000773840"
   },
   "checkFirst": "Segment sales and margins, and separation updates in 8-Ks."
  },
  "UNP": {
   "name": "Union Pacific",
   "cik": "0000100885",
   "ir": "https://investor.unionpacific.com/",
   "sector": "Industrials",
   "tier": "Steady",
   "why": "Railroad",
   "tierWhy": "Large railroad with pricing power, tied to freight volumes. Steady.",
   "business": "Runs a railroad network across the western two-thirds of the U.S., moving freight.",
   "risks": [
    "Freight volumes follow the economy.",
    "Heavy regulation.",
    "Most workers are in unions.",
    "Severe weather can disrupt service."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-06",
    "period": "2025-12-31",
    "accession": "0000100885-26-000037",
    "url": "https://www.sec.gov/Archives/edgar/data/100885/000010088526000037/unp-20251231.htm",
    "filerCik": "0000100885"
   },
   "checkFirst": "Operating ratio, carloads by commodity group, and any merger updates in 8-Ks."
  },
  "RTX": {
   "name": "RTX",
   "cik": "0000101829",
   "ir": "https://investors.rtx.com/",
   "sector": "Industrials",
   "tier": "Steady",
   "why": "Aerospace + defense",
   "tierWhy": "Aerospace and defense mix with long programs. Steady.",
   "business": "Aerospace and defense company: Collins Aerospace, Pratt & Whitney engines, and Raytheon defense systems.",
   "risks": [
    "An engine-part quality issue (powder metal) is causing extra inspections, costs, and more planes on the ground.",
    "Depends on U.S. government budgets.",
    "Fixed-price contracts can lose money.",
    "Supply-chain problems."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-06",
    "period": "2025-12-31",
    "accession": "0000101829-26-000006",
    "url": "https://www.sec.gov/Archives/edgar/data/101829/000010182926000006/rtx-20251231.htm",
    "filerCik": "0000101829"
   },
   "checkFirst": "Collins, Pratt & Whitney, and Raytheon segment results and backlog."
  },
  "DE": {
   "name": "Deere",
   "cik": "0000315189",
   "ir": "https://investor.deere.com/",
   "sector": "Industrials",
   "tier": "Steady",
   "why": "Farm + construction equipment",
   "tierWhy": "Equipment leader whose sales follow the farm economy. Steady.",
   "business": "Makes farm, construction, and forestry equipment and provides financing.",
   "risks": [
    "Sales follow the farm economy.",
    "Economic cycles.",
    "Trade policy and tariffs.",
    "Credit risk in its financing arm."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2025-12-18",
    "period": "2025-11-02",
    "accession": "0001104659-25-122321",
    "url": "https://www.sec.gov/Archives/edgar/data/315189/000110465925122321/de-20251102x10k.htm",
    "filerCik": "0000315189"
   },
   "checkFirst": "Segment results (Production & Precision Ag, Small Ag & Turf, Construction & Forestry, Financial Services)."
  },
  "UPS": {
   "name": "United Parcel Service",
   "cik": "0001090727",
   "ir": "https://investors.ups.com/",
   "sector": "Industrials",
   "tier": "Steady",
   "why": "Package delivery",
   "tierWhy": "Large delivery network tied to shipping volumes and labor costs. Steady.",
   "business": "Delivers packages in the U.S. and internationally and provides logistics services.",
   "risks": [
    "Labor contracts with the Teamsters union.",
    "Faces strong competition.",
    "Reducing its Amazon volume changes the business.",
    "Fuel costs."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-17",
    "period": "2025-12-31",
    "accession": "0001628280-26-008432",
    "url": "https://www.sec.gov/Archives/edgar/data/1090727/000162828026008432/ups-20251231.htm",
    "filerCik": "0001090727"
   },
   "checkFirst": "U.S. Domestic vs. International vs. Supply Chain Solutions results and average daily volume."
  },
  "GD": {
   "name": "General Dynamics",
   "cik": "0000040533",
   "ir": "https://investorrelations.gd.com/",
   "sector": "Industrials",
   "tier": "Steady",
   "why": "Defense + business jets",
   "tierWhy": "Defense contractor plus Gulfstream jets. Steady.",
   "business": "Makes Gulfstream business jets, submarines and ships, combat vehicles, and provides IT services.",
   "risks": [
    "Depends on U.S. government budgets.",
    "Government contracts can be changed or ended early.",
    "Supply-chain problems.",
    "Business-jet demand can change."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-01-30",
    "period": "2025-12-31",
    "accession": "0000040533-26-000006",
    "url": "https://www.sec.gov/Archives/edgar/data/40533/000004053326000006/gd-20251231.htm",
    "filerCik": "0000040533"
   },
   "checkFirst": "Segment results (Aerospace, Marine Systems, Combat Systems, Technologies) and backlog."
  },
  "ITW": {
   "name": "Illinois Tool Works",
   "cik": "0000049826",
   "ir": "https://investor.itw.com/",
   "sector": "Industrials",
   "tier": "Steady",
   "why": "Diversified manufacturer",
   "tierWhy": "Diversified, high-margin manufacturer with a long dividend record. Steady.",
   "business": "Diversified maker of specialized industrial products across many segments, such as automotive parts, food equipment, and welding.",
   "risks": [
    "Economic slowdowns cut demand.",
    "Raw-material costs.",
    "Currency swings.",
    "Acquisitions and divestitures."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-13",
    "period": "2025-12-31",
    "accession": "0000049826-26-000008",
    "url": "https://www.sec.gov/Archives/edgar/data/49826/000004982626000008/itw-20251231.htm",
    "filerCik": "0000049826"
   },
   "checkFirst": "Organic growth and operating margin by segment."
  },
  "GE": {
   "name": "GE Aerospace",
   "cik": "0000040545",
   "ir": "https://www.geaerospace.com/investor-relations",
   "sector": "Industrials",
   "tier": "Growth",
   "why": "Jet engines",
   "tierWhy": "Leading jet-engine maker with a big service business, valued for growth. Growth.",
   "business": "Designs, makes, and services jet engines for commercial airlines and the military.",
   "risks": [
    "Air travel and airline health drive demand.",
    "Supply-chain problems.",
    "Product quality and safety.",
    "Leftover liabilities from former GE businesses."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-01-29",
    "period": "2025-12-31",
    "accession": "0000040545-26-000008",
    "url": "https://www.sec.gov/Archives/edgar/data/40545/000004054526000008/ge-20251231.htm",
    "filerCik": "0000040545"
   },
   "checkFirst": "Commercial Engines & Services vs. Defense & Propulsion Technologies results and orders."
  },
  "ETN": {
   "name": "Eaton",
   "cik": "0001551182",
   "ir": "https://www.eaton.com/us/en-us/company/investor-relations.html",
   "sector": "Industrials",
   "tier": "Growth",
   "why": "Electrical equipment",
   "tierWhy": "Power-management company riding data-center and grid demand. Growth.",
   "business": "Power-management company making electrical equipment for data centers, utilities, and buildings, plus aerospace and vehicle parts.",
   "risks": [
    "Economic conditions.",
    "Supply-chain problems.",
    "Data-center demand could slow.",
    "International operations add risks."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-26",
    "period": "2025-12-31",
    "accession": "0001551182-26-000007",
    "url": "https://www.sec.gov/Archives/edgar/data/1551182/000155118226000007/etn-20251231.htm",
    "filerCik": "0001551182"
   },
   "checkFirst": "Electrical Americas vs. other segment results, orders, and backlog."
  },
  "PWR": {
   "name": "Quanta Services",
   "cik": "0001050915",
   "ir": "https://investors.quantaservices.com/",
   "sector": "Industrials",
   "tier": "Growth",
   "why": "Grid construction",
   "tierWhy": "Contractor benefiting from grid spending, with project risk. Growth.",
   "business": "Specialty contractor that builds and maintains electric grids, renewable connections, and pipelines.",
   "risks": [
    "Projects can lose money, especially fixed-price ones.",
    "Depends on utility customers' spending.",
    "Needs enough skilled workers.",
    "Safety incidents."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-19",
    "period": "2025-12-31",
    "accession": "0001050915-26-000006",
    "url": "https://www.sec.gov/Archives/edgar/data/1050915/000105091526000006/pwr-20251231.htm",
    "filerCik": "0001050915"
   },
   "checkFirst": "Segment revenue and margins, and backlog."
  },
  "TT": {
   "name": "Trane Technologies",
   "cik": "0001466258",
   "ir": "https://investors.tranetechnologies.com/",
   "sector": "Industrials",
   "tier": "Growth",
   "why": "HVAC systems",
   "tierWhy": "Heating and cooling leader with data-center tailwinds, valued for growth. Growth.",
   "business": "Makes heating, ventilation, and air-conditioning systems (Trane, Thermo King) for buildings, homes, and transport.",
   "risks": [
    "Economic conditions.",
    "Rules on refrigerants.",
    "Supply-chain problems.",
    "Faces competition."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-05",
    "period": "2025-12-31",
    "accession": "0001628280-26-005731",
    "url": "https://www.sec.gov/Archives/edgar/data/1466258/000162828026005731/tt-20251231.htm",
    "filerCik": "0001466258"
   },
   "checkFirst": "Bookings, backlog, and segment margins."
  },
  "PH": {
   "name": "Parker-Hannifin",
   "cik": "0000076334",
   "ir": "https://investors.parker.com/",
   "sector": "Industrials",
   "tier": "Growth",
   "why": "Motion + control tech",
   "tierWhy": "Industrial and aerospace parts maker, cyclical but growing. Growth.",
   "business": "Makes motion and control technologies: hydraulics, aerospace systems, and filtration.",
   "risks": [
    "Demand follows economic conditions.",
    "Acquisitions carry integration risk.",
    "Supply-chain problems.",
    "International operations add risks."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-08-21",
    "period": "2026-06-30",
    "accession": "0000076334-26-000105",
    "url": "https://www.sec.gov/Archives/edgar/data/76334/000007633426000105/ph-20260630.htm",
    "filerCik": "0000076334"
   },
   "checkFirst": "Diversified Industrial vs. Aerospace Systems results and orders."
  },
  "GEV": {
   "name": "GE Vernova",
   "cik": "0001996810",
   "ir": "https://www.gevernova.com/investors",
   "sector": "Industrials",
   "tier": "Aggressive growth",
   "why": "Power + grid equipment",
   "tierWhy": "Fast-growing power-equipment company with a high valuation; its wind unit has been a weak spot. Aggressive growth.",
   "business": "Makes and services power equipment: gas turbines, grid equipment, and wind turbines.",
   "risks": [
    "Its Wind business has faced delays in key components, and wind demand depends on renewable-energy policies.",
    "Large projects can run late or over budget.",
    "Supply-chain problems.",
    "Building and servicing equipment like offshore wind turbines is hard and needs skilled labor."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-01-29",
    "period": "2025-12-31",
    "accession": "0001996810-26-000015",
    "url": "https://www.sec.gov/Archives/edgar/data/1996810/000199681026000015/gev-20251231.htm",
    "filerCik": "0001996810"
   },
   "checkFirst": "Power, Wind, and Electrification segment results, orders, and backlog."
  },
  "UBER": {
   "name": "Uber Technologies",
   "cik": "0001543151",
   "ir": "https://investor.uber.com/",
   "sector": "Industrials",
   "tier": "Aggressive growth",
   "why": "Ride-hailing + delivery",
   "tierWhy": "Global platform still facing driver-classification and autonomy questions. Aggressive growth.",
   "business": "Runs ride-hailing (Mobility), food delivery (Uber Eats), and freight platforms.",
   "risks": [
    "Rules on whether drivers are independent contractors.",
    "Heavy and changing regulation.",
    "Faces strong competition.",
    "Self-driving vehicles could change the business."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-13",
    "period": "2025-12-31",
    "accession": "0001543151-26-000015",
    "url": "https://www.sec.gov/Archives/edgar/data/1543151/000154315126000015/uber-20251231.htm",
    "filerCik": "0001543151"
   },
   "checkFirst": "Gross bookings and trips by segment, and adjusted EBITDA vs. GAAP income."
  },
  "AXON": {
   "name": "Axon Enterprise",
   "cik": "0001069183",
   "ir": "https://investor.axon.com/",
   "sector": "Industrials",
   "tier": "Aggressive growth",
   "why": "TASER + body cameras",
   "tierWhy": "Fast-growing public-safety tech company with a high valuation. Aggressive growth.",
   "business": "Makes TASER devices, body cameras, and cloud software for police and public safety.",
   "risks": [
    "Depends on government budgets.",
    "Product-liability lawsuits.",
    "Faces competition.",
    "Data security."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-25",
    "period": "2025-12-31",
    "accession": "0001628280-26-011360",
    "url": "https://www.sec.gov/Archives/edgar/data/1069183/000162828026011360/axon-20251231.htm",
    "filerCik": "0001069183"
   },
   "checkFirst": "TASER vs. software and sensors revenue, annual recurring revenue, and bookings."
  },
  "RKLB": {
   "name": "Rocket Lab",
   "cik": "0001819994",
   "ir": null,
   "sector": "Industrials",
   "tier": "Aggressive growth",
   "why": "Space launch + spacecraft",
   "tierWhy": "Space company still losing money while it develops a bigger rocket. One of the riskiest names here. Aggressive growth.",
   "business": "Launches small satellites (Electron), is developing the larger Neutron rocket, and builds spacecraft and parts.",
   "risks": [
    "Launch failures.",
    "Has a history of losses.",
    "Neutron development could be delayed.",
    "Depends on government contracts."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-26",
    "period": "2025-12-31",
    "accession": "0001819994-26-000013",
    "url": "https://www.sec.gov/Archives/edgar/data/1819994/000181999426000013/rklb-20251231.htm",
    "filerCik": "0001819994"
   },
   "checkFirst": "Launch vs. space systems revenue, backlog, and cash burn."
  }
 }
};
