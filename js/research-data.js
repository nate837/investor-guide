/**
 * Session 9 research-card data (deeper cards), expanded in Session 10 (59 more companies). Verified 2026-10-07 / 2026-10-08.
 * See "method" below for how every field was sourced. No buy/sell calls. No invented numbers.
 */
window.IG_RESEARCH_DATA = {
 "verifiedOn": "2026-10-07 (Session 9 companies) and 2026-10-08 (Session 10 additions)",
 "session": 10,
 "method": "CIKs from SEC company_tickers.json (fetched 2026-10-07 with a descriptive User-Agent). Latest 10-K for each company found via data.sec.gov submissions; the 10-K text was downloaded from EDGAR and Item 1 (Business) and Item 1A (Risk Factors) were extracted. Each plain-English business line and risk was written from those sections and keyword-checked against the extracted text. No numbers are quoted. IR links: fetched 2026-10-07 and confirmed HTTP 200 on the company's own domain; null = could not be verified (bot protection), so the card says to search the official IR site. Session 10 (2026-10-08): 59 more companies added the same way (fresh company_tickers.json, data.sec.gov submissions, latest 10-K, Item 1 / Item 1A extracted and keyword-checked; IR links fetched 2026-10-08, HTTP 200 on the company's own domain required). New entries carry addedSession: 10.",
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
  },
  "QCOM": {
   "name": "Qualcomm",
   "cik": "0000804328",
   "ir": "https://investor.qualcomm.com/",
   "sector": "Technology",
   "tier": "Steady",
   "why": "Phone + auto chips, licensing",
   "tierWhy": "Large, profitable chip designer with a big patent-licensing business and a dividend. Steady for a chip company, but still tied to smartphone cycles.",
   "business": "Designs chips for smartphones, cars, PCs, and connected devices (QCT), and licenses its wireless patents to device makers (QTL).",
   "risks": [
    "A large share of revenue comes from a small number of customers, and some big customers are designing their own chips.",
    "Depends heavily on China and on trade and export rules between the U.S. and China.",
    "Its licensing business faces disputes and legal challenges from licensees and regulators.",
    "Relies on outside foundries to manufacture its chips."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2025-11-05",
    "period": "2025-09-28",
    "accession": "0000804328-25-000085",
    "url": "https://www.sec.gov/Archives/edgar/data/804328/000080432825000085/qcom-20250928.htm",
    "filerCik": "0000804328"
   },
   "checkFirst": "QCT vs. QTL revenue and margins, revenue by customer concentration notes, and handset vs. automotive vs. IoT revenue.",
   "addedSession": 10,
   "verifiedOn": "2026-10-08"
  },
  "ADI": {
   "name": "Analog Devices",
   "cik": "0000006281",
   "ir": null,
   "sector": "Technology",
   "tier": "Steady",
   "why": "Analog + mixed-signal chips",
   "tierWhy": "Long-established chip maker selling into industrial, auto, and communications markets, with a dividend history. Steadier than most chip names, but cyclical.",
   "business": "Designs and makes analog, mixed-signal, and power chips used in industrial, automotive, communications, and consumer products.",
   "risks": [
    "Chip demand rises and falls in cycles, and customers sometimes cut orders to use up inventory.",
    "Has significant sales in China and exposure to trade restrictions and tariffs.",
    "Faces strong competition across many product lines.",
    "Depends on its own factories and outside foundries, and disruptions could limit supply."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2025-11-25",
    "period": "2025-11-01",
    "accession": "0000006281-25-000153",
    "url": "https://www.sec.gov/Archives/edgar/data/6281/000000628125000153/adi-20251101.htm",
    "filerCik": "0000006281"
   },
   "checkFirst": "Revenue by end market (industrial, automotive, communications, consumer), gross margin, and inventory levels.",
   "addedSession": 10,
   "verifiedOn": "2026-10-08"
  },
  "INTU": {
   "name": "Intuit",
   "cik": "0000896878",
   "ir": "https://investors.intuit.com/",
   "sector": "Technology",
   "tier": "Growth",
   "why": "TurboTax, QuickBooks, Credit Karma",
   "tierWhy": "Profitable software company with strong brands and recurring revenue, but priced for growth and exposed to tax-policy and AI changes. Growth tier.",
   "business": "Sells TurboTax, QuickBooks, Credit Karma, and Mailchimp software for consumers and small businesses.",
   "risks": [
    "Faces intense competition, including from free and lower-priced tax and accounting products.",
    "Government changes to tax filing, such as free government filing programs, could hurt TurboTax.",
    "Holds sensitive customer financial data, so security breaches and fraud are serious risks.",
    "Its push into AI products may not work as planned."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-09-09",
    "period": "2026-07-31",
    "accession": "0000896878-26-000037",
    "url": "https://www.sec.gov/Archives/edgar/data/896878/000089687826000037/intu-20260731.htm",
    "filerCik": "0000896878"
   },
   "checkFirst": "Revenue by segment (Global Business Solutions, Consumer, Credit Karma, ProTax) and growth in online ecosystem revenue.",
   "addedSession": 10,
   "verifiedOn": "2026-10-08"
  },
  "AMAT": {
   "name": "Applied Materials",
   "cik": "0000006951",
   "ir": null,
   "sector": "Technology",
   "tier": "Growth",
   "why": "Chipmaking equipment",
   "tierWhy": "Leading maker of chip-manufacturing equipment. Profitable, but orders swing with chipmakers' spending plans. Growth tier.",
   "business": "Makes equipment and services used to manufacture semiconductors and displays, sold to chipmakers worldwide.",
   "risks": [
    "Demand depends on chipmakers' spending, which is cyclical and can drop sharply.",
    "U.S. export controls limit sales to China, an important market.",
    "A small number of large customers make up much of revenue.",
    "Must keep up with fast technology changes in chipmaking."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2025-12-12",
    "period": "2025-10-26",
    "accession": "0001628280-25-056742",
    "url": "https://www.sec.gov/Archives/edgar/data/6951/000162828025056742/amat-20251026.htm",
    "filerCik": "0000006951"
   },
   "checkFirst": "Semiconductor Systems vs. Applied Global Services revenue, revenue by geography (especially China), and R&D spending.",
   "addedSession": 10,
   "verifiedOn": "2026-10-08"
  },
  "LRCX": {
   "name": "Lam Research",
   "cik": "0000707549",
   "ir": "https://investor.lamresearch.com/",
   "sector": "Technology",
   "tier": "Growth",
   "why": "Chip etch + deposition tools",
   "tierWhy": "Major chip-equipment maker riding memory and AI chip demand. Profitable but very cyclical. Growth tier.",
   "business": "Makes wafer fabrication equipment (etch, deposition, clean) and services for semiconductor manufacturers.",
   "risks": [
    "Sales depend on cyclical spending by chipmakers, especially memory makers.",
    "Export rules restrict what it can sell to China.",
    "A handful of large customers account for a big share of revenue.",
    "Relies on suppliers, some single-source, for key parts."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-08-07",
    "period": "2026-06-28",
    "accession": "0000707549-26-000037",
    "url": "https://www.sec.gov/Archives/edgar/data/707549/000070754926000037/lrcx-20260628.htm",
    "filerCik": "0000707549"
   },
   "checkFirst": "Revenue by region and by customer type (memory vs. foundry vs. logic), and gross margin trend.",
   "addedSession": 10,
   "verifiedOn": "2026-10-08"
  },
  "ANET": {
   "name": "Arista Networks",
   "cik": "0001596532",
   "ir": "https://investors.arista.com/",
   "sector": "Technology",
   "tier": "Growth",
   "why": "Cloud + AI data-center networking",
   "tierWhy": "Fast-growing networking company selling to big cloud and AI builders. Profitable, but depends on a few huge customers. Growth tier.",
   "business": "Sells high-speed networking switches and software (EOS) used in cloud, AI, and enterprise data centers.",
   "risks": [
    "A few very large cloud customers make up a big share of revenue.",
    "Relies on contract manufacturers and limited suppliers for components.",
    "Competes with much larger networking companies.",
    "Customer spending on AI and cloud build-outs can be uneven."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-17",
    "period": "2025-12-31",
    "accession": "0001596532-26-000013",
    "url": "https://www.sec.gov/Archives/edgar/data/1596532/000159653226000013/anet-20251231.htm",
    "filerCik": "0001596532"
   },
   "checkFirst": "Customer concentration disclosures, product vs. services revenue, and purchase commitments and inventory.",
   "addedSession": 10,
   "verifiedOn": "2026-10-08"
  },
  "PANW": {
   "name": "Palo Alto Networks",
   "cik": "0001327567",
   "ir": null,
   "sector": "Technology",
   "tier": "Growth",
   "why": "Cybersecurity platform",
   "tierWhy": "Large cybersecurity company growing through subscriptions and acquisitions. Valued for growth, so the stock can swing. Growth tier.",
   "business": "Sells cybersecurity products for networks, cloud, and security operations, including firewalls and subscription services.",
   "risks": [
    "Faces intense competition in a fast-changing security market.",
    "A breach of its own products or systems would badly hurt its reputation.",
    "Its shift toward platform deals and acquisitions may not go as planned.",
    "Depends on channel partners and distributors for many sales."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-09-10",
    "period": "2026-07-31",
    "accession": "0001327567-26-000023",
    "url": "https://www.sec.gov/Archives/edgar/data/1327567/000132756726000023/panw-20260731.htm",
    "filerCik": "0001327567"
   },
   "checkFirst": "Next-generation security annual recurring revenue, remaining performance obligations, and product vs. subscription revenue.",
   "addedSession": 10,
   "verifiedOn": "2026-10-08"
  },
  "DDOG": {
   "name": "Datadog",
   "cik": "0001561550",
   "ir": null,
   "sector": "Technology",
   "tier": "Aggressive growth",
   "why": "Cloud monitoring software",
   "tierWhy": "Fast-growing cloud-software company that only recently became consistently profitable; usage-based revenue can swing. Aggressive growth.",
   "business": "Sells a cloud monitoring and security platform that lets companies watch their apps, servers, logs, and AI workloads.",
   "risks": [
    "Revenue depends on customers' usage, which can drop when they cut cloud spending.",
    "Faces strong competition, including from the big cloud providers.",
    "A small number of very large customers matter a lot to growth.",
    "Outages or security breaches could hurt trust in the platform."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-18",
    "period": "2025-12-31",
    "accession": "0001628280-26-008819",
    "url": "https://www.sec.gov/Archives/edgar/data/1561550/000162828026008819/ddog-20251231.htm",
    "filerCik": "0001561550"
   },
   "checkFirst": "Number of large customers, net revenue retention, and free cash flow vs. stock-based compensation.",
   "addedSession": 10,
   "verifiedOn": "2026-10-08"
  },
  "MRVL": {
   "name": "Marvell Technology",
   "cik": "0001835632",
   "ir": "https://investor.marvell.com/",
   "sector": "Technology",
   "tier": "Aggressive growth",
   "why": "Custom AI + data-center chips",
   "tierWhy": "Chip designer betting heavily on custom AI chips for a few cloud giants. High growth potential with big swings. Aggressive growth.",
   "business": "Designs data-infrastructure chips, including custom AI accelerators, electro-optics, networking, and storage chips.",
   "risks": [
    "A small number of customers account for a large share of revenue.",
    "Depends on outside foundries, mainly in Asia, to make its chips.",
    "Custom AI chip programs can be delayed, shrunk, or lost.",
    "Has a history of losses."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-03-11",
    "period": "2026-01-31",
    "accession": "0001835632-26-000011",
    "url": "https://www.sec.gov/Archives/edgar/data/1835632/000183563226000011/mrvl-20260131.htm",
    "filerCik": "0001835632"
   },
   "checkFirst": "Data center revenue share, customer concentration notes, and GAAP vs. non-GAAP profit.",
   "addedSession": 10,
   "verifiedOn": "2026-10-08"
  },
  "APP": {
   "name": "AppLovin",
   "cik": "0001751008",
   "ir": "https://investors.applovin.com/",
   "sector": "Technology",
   "tier": "Aggressive growth",
   "why": "Mobile ad tech",
   "tierWhy": "Very fast-growing ad-tech company whose results and stock have moved sharply. Aggressive growth.",
   "business": "Runs an advertising platform (including AXON and AppDiscovery) that helps app makers and other advertisers find users.",
   "risks": [
    "Depends on mobile app stores and platforms whose rule changes could hurt its business.",
    "Privacy laws and data rules could limit ad targeting.",
    "Faces strong competition in mobile advertising.",
    "Carries significant debt."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-19",
    "period": "2025-12-31",
    "accession": "0001751008-26-000010",
    "url": "https://www.sec.gov/Archives/edgar/data/1751008/000175100826000010/app-20251231.htm",
    "filerCik": "0001751008"
   },
   "checkFirst": "Advertising revenue growth, adjusted EBITDA vs. GAAP net income, and debt.",
   "addedSession": 10,
   "verifiedOn": "2026-10-08"
  },
  "BMY": {
   "name": "Bristol-Myers Squibb",
   "cik": "0000014272",
   "ir": "https://www.bms.com/investors.html",
   "sector": "Healthcare",
   "tier": "Defensive",
   "why": "Cancer, heart + immunology drugs",
   "tierWhy": "Large, dividend-paying drugmaker selling medicines people need in any economy. Defensive, though patent expirations are a real risk.",
   "business": "Discovers, develops, and sells prescription medicines for cancer, heart disease, immunology, and brain disorders, such as Eliquis and Opdivo.",
   "risks": [
    "Key drugs are losing patent protection, which lets cheaper generics and biosimilars compete.",
    "Government drug-pricing rules, like Medicare price negotiation, could cut revenue.",
    "New drugs may fail in clinical trials or not get approved.",
    "Faces lawsuits over products and patents."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-11",
    "period": "2025-12-31",
    "accession": "0000014272-26-000004",
    "url": "https://www.sec.gov/Archives/edgar/data/14272/000001427226000004/bmy-20251231.htm",
    "filerCik": "0000014272"
   },
   "checkFirst": "Revenue split between its older drugs and its newer growth portfolio, and the timing of patent expirations.",
   "addedSession": 10,
   "verifiedOn": "2026-10-08"
  },
  "GILD": {
   "name": "Gilead Sciences",
   "cik": "0000882095",
   "ir": "https://investors.gilead.com/",
   "sector": "Healthcare",
   "tier": "Steady",
   "why": "HIV + liver disease medicines",
   "tierWhy": "Profitable biotech with a large HIV franchise and a dividend. Steady, but depends on a few key drugs.",
   "business": "Develops and sells medicines for HIV, liver diseases, cancer, and inflammation, such as Biktarvy.",
   "risks": [
    "Much of revenue comes from HIV drugs, so problems there would hurt a lot.",
    "Drug-pricing pressure from governments and insurers could reduce sales.",
    "Generic competition when patents expire.",
    "Research and acquisitions may not lead to successful new drugs."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-24",
    "period": "2025-12-31",
    "accession": "0000882095-26-000006",
    "url": "https://www.sec.gov/Archives/edgar/data/882095/000088209526000006/gild-20251231.htm",
    "filerCik": "0000882095"
   },
   "checkFirst": "Revenue by product area (HIV, liver disease, oncology), and research and development spending.",
   "addedSession": 10,
   "verifiedOn": "2026-10-08"
  },
  "ZTS": {
   "name": "Zoetis",
   "cik": "0001555280",
   "ir": null,
   "sector": "Healthcare",
   "tier": "Steady",
   "why": "Animal health medicines",
   "tierWhy": "Largest animal-health company, selling medicines and vaccines for pets and livestock. Steady demand, though some products face new competition.",
   "business": "Makes medicines, vaccines, diagnostics, and other products for pets and farm animals.",
   "risks": [
    "Faces competition, including from generics and new rival treatments.",
    "Safety or effectiveness problems with products could hurt sales.",
    "Livestock demand depends on farm economics and animal disease outbreaks.",
    "Changes in how pet owners spend on vet care affect demand."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-12",
    "period": "2025-12-31",
    "accession": "0001555280-26-000011",
    "url": "https://www.sec.gov/Archives/edgar/data/1555280/000155528026000011/zts-20251231.htm",
    "filerCik": "0001555280"
   },
   "checkFirst": "Companion animal vs. livestock revenue, and U.S. vs. international segment results.",
   "addedSession": 10,
   "verifiedOn": "2026-10-08"
  },
  "CI": {
   "name": "The Cigna Group",
   "cik": "0001739940",
   "ir": "https://investors.thecignagroup.com/",
   "sector": "Healthcare",
   "tier": "Steady",
   "why": "Health benefits + pharmacy services",
   "tierWhy": "Big, profitable health-services company with steady demand. Steady, though exposed to government rules on pharmacy benefits.",
   "business": "Runs Evernorth health services (including the Express Scripts pharmacy benefit manager) and Cigna Healthcare insurance plans.",
   "risks": [
    "Pharmacy benefit managers face new laws, regulation, and lawsuits.",
    "Medical costs could rise faster than the prices it charges.",
    "Depends on a few large clients and contracts.",
    "Holds sensitive health data, so cyberattacks are a major risk."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-26",
    "period": "2025-12-31",
    "accession": "0001739940-26-000006",
    "url": "https://www.sec.gov/Archives/edgar/data/1739940/000173994026000006/ci-20251231.htm",
    "filerCik": "0001739940"
   },
   "checkFirst": "Evernorth vs. Cigna Healthcare segment earnings, medical care ratio, and debt.",
   "addedSession": 10,
   "verifiedOn": "2026-10-08"
  },
  "EW": {
   "name": "Edwards Lifesciences",
   "cik": "0001099800",
   "ir": "https://ir.edwards.com/",
   "sector": "Healthcare",
   "tier": "Growth",
   "why": "Heart valve devices",
   "tierWhy": "Leader in heart-valve devices with strong growth, valued as a growth company. Growth tier.",
   "business": "Makes devices to treat structural heart disease, including transcatheter heart valves (TAVR) and surgical valves.",
   "risks": [
    "Depends heavily on its transcatheter heart valve products.",
    "Faces competition from other device makers.",
    "Clinical trial results and regulatory approvals may not go its way.",
    "Product recalls or safety problems could hurt sales."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-25",
    "period": "2025-12-31",
    "accession": "0001099800-26-000009",
    "url": "https://www.sec.gov/Archives/edgar/data/1099800/000109980026000009/ew-20251231.htm",
    "filerCik": "0001099800"
   },
   "checkFirst": "TAVR vs. other product-group sales, and research and development spending.",
   "addedSession": 10,
   "verifiedOn": "2026-10-08"
  },
  "IDXX": {
   "name": "IDEXX Laboratories",
   "cik": "0000874716",
   "ir": "https://ir.idexx.com/",
   "sector": "Healthcare",
   "tier": "Growth",
   "why": "Pet diagnostics",
   "tierWhy": "Leader in veterinary diagnostics with recurring test revenue and high margins; priced as a growth company. Growth tier.",
   "business": "Makes diagnostic tests, analyzers, and software for veterinarians, plus water and livestock testing.",
   "risks": [
    "Depends on pet owners visiting vets, which can slow down.",
    "Faces competition in veterinary diagnostics.",
    "Relies on some sole-source suppliers for parts and materials.",
    "International sales expose it to currency changes."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-20",
    "period": "2025-12-31",
    "accession": "0000874716-26-000038",
    "url": "https://www.sec.gov/Archives/edgar/data/874716/000087471626000038/idxx-20251231.htm",
    "filerCik": "0000874716"
   },
   "checkFirst": "Companion Animal Group recurring revenue, instrument placements, and operating margin.",
   "addedSession": 10,
   "verifiedOn": "2026-10-08"
  },
  "PODD": {
   "name": "Insulet",
   "cik": "0001145197",
   "ir": "https://investors.insulet.com/",
   "sector": "Healthcare",
   "tier": "Aggressive growth",
   "why": "Tubeless insulin pumps",
   "tierWhy": "Fast-growing medical-device company built mostly around one product line. Aggressive growth.",
   "business": "Makes the Omnipod tubeless, wearable insulin pump for people with diabetes.",
   "risks": [
    "Depends almost entirely on the Omnipod product line.",
    "Faces strong competition from other insulin pumps and new diabetes treatments.",
    "Depends on insurance and pharmacy coverage for the product.",
    "Manufacturing problems or recalls could disrupt supply."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-18",
    "period": "2025-12-31",
    "accession": "0001145197-26-000028",
    "url": "https://www.sec.gov/Archives/edgar/data/1145197/000114519726000028/podd-20251231.htm",
    "filerCik": "0001145197"
   },
   "checkFirst": "U.S. vs. international Omnipod revenue, gross margin, and new-customer growth commentary.",
   "addedSession": 10,
   "verifiedOn": "2026-10-08"
  },
  "NTRA": {
   "name": "Natera",
   "cik": "0001604821",
   "ir": "https://investor.natera.com/",
   "sector": "Healthcare",
   "tier": "Aggressive growth",
   "why": "Genetic + cancer testing",
   "tierWhy": "Fast-growing genetic-testing company that has a history of losses. Aggressive growth.",
   "business": "Provides cell-free DNA tests for women's health, organ transplant monitoring, and cancer (such as Signatera).",
   "risks": [
    "Has a history of losses and may not stay profitable.",
    "Depends on getting paid by insurers and government programs for its tests.",
    "Faces patent lawsuits and other legal disputes.",
    "Faces competition and changing regulation of lab tests."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-27",
    "period": "2025-12-31",
    "accession": "0001104659-26-020881",
    "url": "https://www.sec.gov/Archives/edgar/data/1604821/000110465926020881/ntra-20251231x10k.htm",
    "filerCik": "0001604821"
   },
   "checkFirst": "Tests processed, average revenue per test, and cash burn or free cash flow.",
   "addedSession": 10,
   "verifiedOn": "2026-10-08"
  },
  "INSM": {
   "name": "Insmed",
   "cik": "0001104506",
   "ir": "https://investor.insmed.com/",
   "sector": "Healthcare",
   "tier": "Aggressive growth",
   "why": "Rare lung disease medicines",
   "tierWhy": "Biotech whose value depends on a small number of medicines and trials; has a history of losses. Aggressive growth.",
   "business": "Develops and sells medicines for serious lung diseases, including Arikayce and the newer drug Brinsupri.",
   "risks": [
    "Depends on a small number of products for revenue.",
    "Has a history of losses and may need more money.",
    "Clinical trials may fail or be delayed.",
    "Insurance coverage and pricing pressure could limit sales."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-19",
    "period": "2025-12-31",
    "accession": "0001104506-26-000009",
    "url": "https://www.sec.gov/Archives/edgar/data/1104506/000110450626000009/insm-20251231.htm",
    "filerCik": "0001104506"
   },
   "checkFirst": "Product revenue by drug, research spending, and cash on hand vs. losses.",
   "addedSession": 10,
   "verifiedOn": "2026-10-08"
  },
  "HIMS": {
   "name": "Hims & Hers Health",
   "cik": "0001773751",
   "ir": "https://investors.hims.com/",
   "sector": "Healthcare",
   "tier": "Aggressive growth",
   "why": "Online health + wellness",
   "tierWhy": "Fast-growing telehealth company exposed to regulation and changes in its compounded-drug offerings. Aggressive growth.",
   "business": "Runs an online platform connecting customers with licensed doctors for prescriptions and wellness products, including weight-loss treatments.",
   "risks": [
    "Health-care laws and regulators could restrict how it operates.",
    "Compounded drugs it sells face legal and regulatory uncertainty.",
    "Depends on marketing to attract and keep subscribers.",
    "Relies on outside doctors' groups and pharmacies."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-23",
    "period": "2025-12-31",
    "accession": "0001773751-26-000022",
    "url": "https://www.sec.gov/Archives/edgar/data/1773751/000177375126000022/hims-20251231.htm",
    "filerCik": "0001773751"
   },
   "checkFirst": "Subscriber count, revenue per subscriber, and marketing spending as a share of revenue.",
   "addedSession": 10,
   "verifiedOn": "2026-10-08"
  },
  "TRV": {
   "name": "Travelers",
   "cik": "0000086312",
   "ir": "https://investor.travelers.com/",
   "sector": "Financials",
   "tier": "Defensive",
   "why": "Property & casualty insurer",
   "tierWhy": "Large, long-running insurer selling policies people and businesses need in any economy. Defensive, though big storms hit results.",
   "business": "Sells property and casualty insurance to businesses, governments, and individuals, including auto and home policies.",
   "risks": [
    "Catastrophes like hurricanes, wildfires, and severe storms can cause big losses.",
    "Claims could end up costing more than it set aside.",
    "Its investment portfolio can lose value when interest rates or markets move.",
    "Insurance is heavily regulated."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-12",
    "period": "2025-12-31",
    "accession": "0000086312-26-000065",
    "url": "https://www.sec.gov/Archives/edgar/data/86312/000008631226000065/trv-20251231.htm",
    "filerCik": "0000086312"
   },
   "checkFirst": "Combined ratio by segment, catastrophe losses, and prior-year reserve development.",
   "addedSession": 10,
   "verifiedOn": "2026-10-08"
  },
  "AON": {
   "name": "Aon",
   "cik": "0000315293",
   "ir": "https://ir.aon.com/",
   "sector": "Financials",
   "tier": "Defensive",
   "why": "Insurance broker + consulting",
   "tierWhy": "Global broker earning fees and commissions rather than taking insurance risk itself. Defensive, steady demand.",
   "business": "Global professional-services firm offering risk, retirement, health, and wealth advice and insurance and reinsurance brokerage.",
   "risks": [
    "Results depend on insurance prices and the economy, which affect commissions and fees.",
    "Faces error-and-omission claims from clients, which can rise in downturns.",
    "Large acquisitions and integration bring risk.",
    "Operates in many countries with differing laws and currencies."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-13",
    "period": "2025-12-31",
    "accession": "0001628280-26-008116",
    "url": "https://www.sec.gov/Archives/edgar/data/315293/000162828026008116/aon-20251231.htm",
    "filerCik": "0000315293"
   },
   "checkFirst": "Organic revenue growth by solution line, operating margin, and debt from acquisitions.",
   "addedSession": 10,
   "verifiedOn": "2026-10-08"
  },
  "PNC": {
   "name": "PNC Financial Services",
   "cik": "0000713676",
   "ir": "https://investor.pnc.com/",
   "sector": "Financials",
   "tier": "Steady",
   "why": "Large regional U.S. bank",
   "tierWhy": "Large, established U.S. bank with a dividend history. Steady, but banks are tied to the economy and interest rates.",
   "business": "Bank holding company offering retail and business banking, corporate and institutional banking, and asset management in the U.S.",
   "risks": [
    "Loan losses rise when borrowers struggle in a weak economy.",
    "Interest-rate changes affect what it earns on loans and deposits.",
    "Heavy bank regulation and capital rules can limit its flexibility.",
    "Cyberattacks and technology failures are serious risks."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-20",
    "period": "2025-12-31",
    "accession": "0000713676-26-000020",
    "url": "https://www.sec.gov/Archives/edgar/data/713676/000071367626000020/pnc-20251231.htm",
    "filerCik": "0000713676"
   },
   "checkFirst": "Net interest income and margin, loan-loss provisions, and capital ratios.",
   "addedSession": 10,
   "verifiedOn": "2026-10-08"
  },
  "CME": {
   "name": "CME Group",
   "cik": "0001156375",
   "ir": null,
   "sector": "Financials",
   "tier": "Steady",
   "why": "Futures + options exchange",
   "tierWhy": "Runs the world's biggest futures exchange and earns fees on trading. Steady, often busier when markets are volatile.",
   "business": "Operates futures and options exchanges and clearing for interest rates, stock indexes, energy, agriculture, metals, and currencies.",
   "risks": [
    "Revenue depends on trading volume, which can drop.",
    "Faces competition from other exchanges and trading venues.",
    "Its clearing house could suffer losses if a clearing member fails.",
    "Technology outages or cyberattacks could disrupt trading."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-26",
    "period": "2025-12-31",
    "accession": "0001156375-26-000009",
    "url": "https://www.sec.gov/Archives/edgar/data/1156375/000115637526000009/cme-20251231.htm",
    "filerCik": "0001156375"
   },
   "checkFirst": "Average daily volume by asset class, clearing and transaction fees, and market data revenue.",
   "addedSession": 10,
   "verifiedOn": "2026-10-08"
  },
  "ICE": {
   "name": "Intercontinental Exchange",
   "cik": "0001571949",
   "ir": "https://ir.theice.com/",
   "sector": "Financials",
   "tier": "Steady",
   "why": "Exchanges, data + mortgage tech",
   "tierWhy": "Owns the New York Stock Exchange plus data and mortgage-technology businesses with recurring fees. Steady.",
   "business": "Operates exchanges and clearing houses (including the New York Stock Exchange), sells fixed income data, and provides mortgage technology.",
   "risks": [
    "Trading volumes and market activity can fall.",
    "The mortgage technology business depends on housing and mortgage activity.",
    "Heavy regulation of exchanges and clearing houses.",
    "Carries significant debt from acquisitions."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-05",
    "period": "2025-12-31",
    "accession": "0001571949-26-000004",
    "url": "https://www.sec.gov/Archives/edgar/data/1571949/000157194926000004/ice-20251231.htm",
    "filerCik": "0001571949"
   },
   "checkFirst": "Revenue by segment (Exchanges, Fixed Income and Data Services, Mortgage Technology) and debt.",
   "addedSession": 10,
   "verifiedOn": "2026-10-08"
  },
  "C": {
   "name": "Citigroup",
   "cik": "0000831001",
   "ir": "https://www.citigroup.com/global/investors",
   "sector": "Financials",
   "tier": "Growth",
   "why": "Global bank in turnaround",
   "tierWhy": "Huge global bank in the middle of a multi-year restructuring under regulator orders. Higher upside and risk than steady banks. Growth tier.",
   "business": "Global bank serving companies, governments, and consumers through Services, Markets, Banking, Wealth, and U.S. Personal Banking.",
   "risks": [
    "Must fix risk-management and data problems under regulators' consent orders.",
    "Its transformation and restructuring may not deliver expected results.",
    "Operates in many countries, so economic and geopolitical shocks hit it.",
    "Higher capital requirements could limit buybacks and dividends."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-20",
    "period": "2025-12-31",
    "accession": "0000831001-26-000011",
    "url": "https://www.sec.gov/Archives/edgar/data/831001/000083100126000011/c-20251231.htm",
    "filerCik": "0000831001"
   },
   "checkFirst": "Results by business segment, progress on transformation and consent orders, and CET1 capital ratio.",
   "addedSession": 10,
   "verifiedOn": "2026-10-08"
  },
  "IBKR": {
   "name": "Interactive Brokers",
   "cik": "0001381197",
   "ir": "https://investors.interactivebrokers.com/",
   "sector": "Financials",
   "tier": "Growth",
   "why": "Global online brokerage",
   "tierWhy": "Fast-growing, highly automated global broker. Earnings swing with interest rates and trading activity. Growth tier.",
   "business": "Runs an automated global electronic brokerage that lets customers trade stocks, options, futures, bonds, and more in many markets.",
   "risks": [
    "Earnings depend heavily on interest rates and trading activity.",
    "Is controlled by its founder, which limits other shareholders' say.",
    "Customer losses during market crashes could become its losses.",
    "Faces regulation in many countries."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-27",
    "period": "2025-12-31",
    "accession": "0001381197-26-000062",
    "url": "https://www.sec.gov/Archives/edgar/data/1381197/000138119726000062/ibkr-20251231.htm",
    "filerCik": "0001381197"
   },
   "checkFirst": "Customer accounts, daily average revenue trades, net interest income, and customer margin loans.",
   "addedSession": 10,
   "verifiedOn": "2026-10-08"
  },
  "UPST": {
   "name": "Upstart Holdings",
   "cik": "0001647639",
   "ir": null,
   "sector": "Financials",
   "tier": "Aggressive growth",
   "why": "AI lending marketplace",
   "tierWhy": "AI-lending platform whose results swing sharply with credit markets and interest rates. Aggressive growth.",
   "business": "Runs an AI lending marketplace that connects consumers with banks and credit unions for personal, auto, and home loans.",
   "risks": [
    "Depends on banks, credit unions, and investors to fund loans.",
    "Its AI models may not predict loan losses correctly.",
    "Higher interest rates and a weak economy reduce loan demand.",
    "Lending laws and regulators could restrict its business."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-10",
    "period": "2025-12-31",
    "accession": "0001647639-26-000027",
    "url": "https://www.sec.gov/Archives/edgar/data/1647639/000164763926000027/upst-20251231.htm",
    "filerCik": "0001647639"
   },
   "checkFirst": "Loan volume, conversion rate, fee revenue, and loans held on its own balance sheet.",
   "addedSession": 10,
   "verifiedOn": "2026-10-08"
  },
  "TOST": {
   "name": "Toast",
   "cik": "0001650164",
   "ir": "https://investors.toasttab.com/",
   "sector": "Financials",
   "tier": "Aggressive growth",
   "why": "Restaurant software + payments",
   "tierWhy": "Fast-growing restaurant tech platform that only recently turned profitable. Aggressive growth.",
   "business": "Sells a cloud platform for restaurants: point-of-sale systems, payment processing, and software for operations and marketing.",
   "risks": [
    "Depends on the restaurant industry, which is sensitive to the economy.",
    "Payment processing exposes it to fraud and partner risks.",
    "Faces strong competition in restaurant tech and payments.",
    "Changes to its pricing and packaging could hurt growth or profitability."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-18",
    "period": "2025-12-31",
    "accession": "0001650164-26-000057",
    "url": "https://www.sec.gov/Archives/edgar/data/1650164/000165016426000057/tost-20251231.htm",
    "filerCik": "0001650164"
   },
   "checkFirst": "Annualized recurring run-rate, number of locations, and gross payment volume.",
   "addedSession": 10,
   "verifiedOn": "2026-10-08"
  },
  "LMND": {
   "name": "Lemonade",
   "cik": "0001691421",
   "ir": "https://investor.lemonade.com/",
   "sector": "Financials",
   "tier": "Aggressive growth",
   "why": "AI-driven insurance app",
   "tierWhy": "Fast-growing app-based insurer that has not been consistently profitable. Aggressive growth.",
   "business": "Sells renters, homeowners, car, pet, and life insurance through an app that uses AI and bots.",
   "risks": [
    "Has a history of losses and may not become profitable.",
    "Catastrophes and claims could cost more than expected.",
    "Depends on reinsurance to manage risk.",
    "Insurance regulators could restrict pricing or operations."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-25",
    "period": "2025-12-31",
    "accession": "0001691421-26-000016",
    "url": "https://www.sec.gov/Archives/edgar/data/1691421/000169142126000016/lmnd-20251231.htm",
    "filerCik": "0001691421"
   },
   "checkFirst": "In-force premium, gross loss ratio, customer count, and cash burn.",
   "addedSession": 10,
   "verifiedOn": "2026-10-08"
  },
  "DUK": {
   "name": "Duke Energy",
   "cik": "0001326160",
   "ir": "https://investors.duke-energy.com/",
   "sector": "Energy",
   "tier": "Defensive",
   "why": "Regulated electric + gas utility",
   "tierWhy": "Large regulated utility selling electricity and gas people need in any economy, with a long dividend history. Defensive.",
   "business": "Regulated utility providing electricity and natural gas to customers in the Carolinas, Florida, and the Midwest.",
   "risks": [
    "Regulators decide what rates it can charge and what costs it can recover.",
    "Severe weather and storms can damage its systems and raise costs.",
    "Needs large amounts of borrowed money for its building plans.",
    "Environmental and climate rules affect its power plants."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-26",
    "period": "2025-12-31",
    "accession": "0001326160-26-000014",
    "url": "https://www.sec.gov/Archives/edgar/data/1326160/000132616026000014/duk-20251231.htm",
    "filerCik": "0001326160"
   },
   "checkFirst": "Earnings by segment (Electric Utilities and Infrastructure, Gas Utilities), capital spending plan, and debt.",
   "addedSession": 10,
   "verifiedOn": "2026-10-08"
  },
  "SO": {
   "name": "Southern Company",
   "cik": "0000092122",
   "ir": "https://investor.southerncompany.com/",
   "sector": "Energy",
   "tier": "Defensive",
   "why": "Regulated Southeast utility",
   "tierWhy": "Large regulated utility with a long dividend history. Defensive, though large building projects add risk.",
   "business": "Holding company for regulated electric utilities (including Georgia Power and Alabama Power) and Southern Company Gas.",
   "risks": [
    "Regulators decide what rates it can charge.",
    "Large construction projects can run over budget or late.",
    "Severe weather can damage its systems.",
    "Environmental and climate rules affect its plants."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-19",
    "period": "2025-12-31",
    "accession": "0000092122-26-000006",
    "url": "https://www.sec.gov/Archives/edgar/data/92122/000009212226000006/so-20251231.htm",
    "filerCik": "0000092122"
   },
   "checkFirst": "Results of each traditional electric operating company, capital spending plans, and debt.",
   "addedSession": 10,
   "verifiedOn": "2026-10-08"
  },
  "NEE": {
   "name": "NextEra Energy",
   "cik": "0000753308",
   "ir": "https://www.investor.nexteraenergy.com/",
   "sector": "Energy",
   "tier": "Steady",
   "why": "Florida utility + renewables",
   "tierWhy": "Large utility (Florida Power & Light) plus a big renewable-energy developer. Steady, with more growth and risk than a plain utility.",
   "business": "Owns Florida Power & Light, a large regulated utility, and NextEra Energy Resources, which builds wind, solar, battery storage, and other energy projects.",
   "risks": [
    "Regulators decide what rates Florida Power & Light can charge.",
    "Changes to government policies and tax credits for clean energy could hurt the renewables business.",
    "Depends on raising large amounts of capital, which costs more when interest rates rise.",
    "Hurricanes and severe weather can damage its systems."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-13",
    "period": "2025-12-31",
    "accession": "0000753308-26-000015",
    "url": "https://www.sec.gov/Archives/edgar/data/753308/000075330826000015/nee-20251231.htm",
    "filerCik": "0000753308"
   },
   "checkFirst": "FPL vs. NextEra Energy Resources earnings, capital spending, and debt.",
   "addedSession": 10,
   "verifiedOn": "2026-10-08"
  },
  "OKE": {
   "name": "ONEOK",
   "cik": "0001039684",
   "ir": "https://ir.oneok.com/",
   "sector": "Energy",
   "tier": "Steady",
   "why": "Natural gas + NGL pipelines",
   "tierWhy": "Large midstream pipeline company earning mostly fee-based revenue, with a dividend history. Steady, though tied to energy volumes.",
   "business": "Operates natural gas liquids, natural gas, crude oil, and refined products pipelines, processing plants, and storage.",
   "risks": [
    "Volumes depend on oil and gas drilling activity by its customers.",
    "Commodity price swings affect part of its earnings.",
    "Carries a lot of debt, partly from acquisitions.",
    "Pipeline accidents and environmental rules bring costs."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-24",
    "period": "2025-12-31",
    "accession": "0001039684-26-000006",
    "url": "https://www.sec.gov/Archives/edgar/data/1039684/000103968426000006/oke-20251231.htm",
    "filerCik": "0001039684"
   },
   "checkFirst": "Earnings by segment, fee-based share of earnings, and debt from recent acquisitions.",
   "addedSession": 10,
   "verifiedOn": "2026-10-08"
  },
  "LNG": {
   "name": "Cheniere Energy",
   "cik": "0000003570",
   "ir": "https://lngir.cheniere.com/",
   "sector": "Energy",
   "tier": "Growth",
   "why": "U.S. LNG exporter",
   "tierWhy": "Largest U.S. exporter of liquefied natural gas with long-term contracts. Growth tier: big projects and global gas prices add risk.",
   "business": "Liquefies natural gas at its Sabine Pass and Corpus Christi terminals and sells it to buyers around the world, largely under long-term contracts.",
   "risks": [
    "Depends on customers honoring long-term contracts.",
    "Expansion projects could run late or over budget.",
    "Carries a large amount of debt.",
    "Global LNG competition and prices could hurt uncontracted sales."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-26",
    "period": "2025-12-31",
    "accession": "0000003570-26-000005",
    "url": "https://www.sec.gov/Archives/edgar/data/3570/000000357026000005/lng-20251231.htm",
    "filerCik": "0000003570"
   },
   "checkFirst": "Cargoes exported, contracted vs. spot volumes, and debt across Cheniere and its subsidiaries.",
   "addedSession": 10,
   "verifiedOn": "2026-10-08"
  },
  "TRGP": {
   "name": "Targa Resources",
   "cik": "0001389170",
   "ir": null,
   "sector": "Energy",
   "tier": "Growth",
   "why": "Gas gathering + NGL logistics",
   "tierWhy": "Fast-growing midstream company tied to Permian Basin output. Growth tier.",
   "business": "Gathers and processes natural gas and transports, fractionates, stores, and exports natural gas liquids.",
   "risks": [
    "Volumes depend on drilling by oil and gas producers.",
    "Commodity price swings affect earnings.",
    "Carries substantial debt.",
    "Environmental and pipeline regulation."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-19",
    "period": "2025-12-31",
    "accession": "0001193125-26-059296",
    "url": "https://www.sec.gov/Archives/edgar/data/1389170/000119312526059296/trgp-20251231.htm",
    "filerCik": "0001389170"
   },
   "checkFirst": "Volumes by segment, fee-based margin share, and growth capital spending.",
   "addedSession": 10,
   "verifiedOn": "2026-10-08"
  },
  "EQT": {
   "name": "EQT",
   "cik": "0000033213",
   "ir": "https://ir.eqt.com/",
   "sector": "Energy",
   "tier": "Growth",
   "why": "Appalachian natural gas producer",
   "tierWhy": "Largest U.S. natural gas producer; profits swing with gas prices. Growth tier.",
   "business": "Produces natural gas from the Appalachian Basin and owns pipelines that move it.",
   "risks": [
    "Natural gas prices are volatile, and low prices hurt results.",
    "Depends on pipeline capacity to get gas to market.",
    "Drilling and environmental regulation can raise costs.",
    "Carries substantial debt."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-18",
    "period": "2025-12-31",
    "accession": "0000033213-26-000018",
    "url": "https://www.sec.gov/Archives/edgar/data/33213/000003321326000018/eqt-20251231.htm",
    "filerCik": "0000033213"
   },
   "checkFirst": "Production volumes, realized price per unit, and free cash flow vs. debt reduction.",
   "addedSession": 10,
   "verifiedOn": "2026-10-08"
  },
  "DVN": {
   "name": "Devon Energy",
   "cik": "0001090012",
   "ir": "https://investors.devonenergy.com/",
   "sector": "Energy",
   "tier": "Growth",
   "why": "U.S. oil & gas producer",
   "tierWhy": "Shale oil and gas producer whose earnings swing with commodity prices. Growth tier.",
   "business": "Explores for and produces oil, natural gas, and natural gas liquids in U.S. basins such as the Delaware Basin.",
   "risks": [
    "Oil and gas prices are volatile and drive results.",
    "Reserve estimates could prove too high.",
    "Drilling, environmental, and climate rules can raise costs.",
    "Operations depend on pipelines and other infrastructure."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-18",
    "period": "2025-12-31",
    "accession": "0001193125-26-056485",
    "url": "https://www.sec.gov/Archives/edgar/data/1090012/000119312526056485/dvn-20251231.htm",
    "filerCik": "0001090012"
   },
   "checkFirst": "Production by basin, realized prices, capital spending, and shareholder returns vs. free cash flow.",
   "addedSession": 10,
   "verifiedOn": "2026-10-08"
  },
  "NRG": {
   "name": "NRG Energy",
   "cik": "0001013871",
   "ir": null,
   "sector": "Energy",
   "tier": "Aggressive growth",
   "why": "Power plants + retail electricity",
   "tierWhy": "Power generator and retail electricity seller; earnings swing with power prices and weather. Aggressive growth.",
   "business": "Generates electricity and sells power, natural gas, and home services to retail customers through brands like Reliant and Direct Energy.",
   "risks": [
    "Power and fuel prices are volatile.",
    "Extreme weather can spike costs and strain plants.",
    "Carries substantial debt.",
    "Power markets are heavily regulated."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-24",
    "period": "2025-12-31",
    "accession": "0001013871-26-000004",
    "url": "https://www.sec.gov/Archives/edgar/data/1013871/000101387126000004/nrg-20251231.htm",
    "filerCik": "0001013871"
   },
   "checkFirst": "Earnings by segment, power-plant availability, and debt.",
   "addedSession": 10,
   "verifiedOn": "2026-10-08"
  },
  "OKLO": {
   "name": "Oklo",
   "cik": "0001849056",
   "ir": "https://www.oklo.com/investors/default.aspx",
   "sector": "Energy",
   "tier": "Aggressive growth",
   "why": "Small nuclear reactor developer",
   "tierWhy": "Pre-revenue company developing small nuclear power plants. Among the riskiest names here. Aggressive growth.",
   "business": "Is developing small advanced fission power plants (Aurora powerhouses) to sell electricity, plus fuel recycling services.",
   "risks": [
    "Has no revenue yet and expects losses for years.",
    "Needs Nuclear Regulatory Commission approval, which may be delayed or denied.",
    "Needs reliable supplies of nuclear fuel.",
    "Its technology is unproven at commercial scale."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-03-17",
    "period": "2025-12-31",
    "accession": "0001628280-26-018698",
    "url": "https://www.sec.gov/Archives/edgar/data/1849056/000162828026018698/oklo-20251231.htm",
    "filerCik": "0001849056"
   },
   "checkFirst": "Cash on hand vs. operating losses, licensing milestones, and customer agreements.",
   "addedSession": 10,
   "verifiedOn": "2026-10-08"
  },
  "MDLZ": {
   "name": "Mondelez International",
   "cik": "0001103982",
   "ir": null,
   "sector": "Consumer",
   "tier": "Defensive",
   "why": "Snacks (Oreo, Cadbury)",
   "tierWhy": "Global snack maker with well-known brands people buy in any economy. Defensive.",
   "business": "Makes and sells snacks worldwide, including biscuits, chocolate, gum, and candy under brands like Oreo, Cadbury, and Milka.",
   "risks": [
    "Cocoa and other ingredient costs can rise sharply.",
    "Sells in many countries, so currency swings and politics matter.",
    "Competes with other brands and store brands.",
    "Consumer tastes and health trends change."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-04",
    "period": "2025-12-31",
    "accession": "0001628280-26-005345",
    "url": "https://www.sec.gov/Archives/edgar/data/1103982/000162828026005345/mdlz-20251231.htm",
    "filerCik": "0001103982"
   },
   "checkFirst": "Revenue by region, organic growth vs. price increases, and gross margin.",
   "addedSession": 10,
   "verifiedOn": "2026-10-08"
  },
  "YUM": {
   "name": "Yum! Brands",
   "cik": "0001041061",
   "ir": "https://investors.yum.com/",
   "sector": "Consumer",
   "tier": "Steady",
   "why": "Franchised KFC, Taco Bell, Pizza Hut",
   "tierWhy": "Mostly franchised restaurant company earning royalties. Steady, though debt is high.",
   "business": "Franchises and runs KFC, Taco Bell, Pizza Hut, and Habit Burger restaurants around the world.",
   "risks": [
    "Depends on franchisees doing well and paying royalties.",
    "Food safety problems could hurt its brands.",
    "Carries a large amount of debt.",
    "International operations bring currency and political risks."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-20",
    "period": "2025-12-31",
    "accession": "0001041061-26-000084",
    "url": "https://www.sec.gov/Archives/edgar/data/1041061/000104106126000084/yum-20251231.htm",
    "filerCik": "0001041061"
   },
   "checkFirst": "System sales growth by brand, unit growth, and debt.",
   "addedSession": 10,
   "verifiedOn": "2026-10-08"
  },
  "DIS": {
   "name": "Walt Disney",
   "cik": "0001744489",
   "ir": "https://thewaltdisneycompany.com/investor-relations/",
   "sector": "Consumer",
   "tier": "Steady",
   "why": "Parks, streaming, entertainment",
   "tierWhy": "Large entertainment company with parks, films, and streaming. Steady, but tied to consumer spending.",
   "business": "Runs entertainment (films, TV, Disney+ and Hulu streaming), ESPN sports, and theme parks, cruises, and consumer products.",
   "risks": [
    "Theme-park and travel spending falls in a weak economy.",
    "Changes in how people watch TV hurt traditional networks.",
    "Faces strong competition in streaming.",
    "Depends on making hit content."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2025-11-13",
    "period": "2025-09-27",
    "accession": "0001744489-25-000155",
    "url": "https://www.sec.gov/Archives/edgar/data/1744489/000174448925000155/dis-20250927.htm",
    "filerCik": "0001744489"
   },
   "checkFirst": "Segment results (Entertainment, Sports, Experiences), streaming profitability, and capital spending on parks.",
   "addedSession": 10,
   "verifiedOn": "2026-10-08"
  },
  "ROST": {
   "name": "Ross Stores",
   "cik": "0000745732",
   "ir": null,
   "sector": "Consumer",
   "tier": "Steady",
   "why": "Off-price retail",
   "tierWhy": "Off-price retailer that does relatively well when shoppers want bargains. Steady.",
   "business": "Runs Ross Dress for Less and dd's DISCOUNTS off-price stores selling apparel and home goods.",
   "risks": [
    "Depends on buying enough good merchandise at good prices.",
    "Faces competition from other retailers.",
    "Tariffs and import costs could raise prices.",
    "Consumer spending can weaken."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-03-31",
    "period": "2026-01-31",
    "accession": "0000745732-26-000006",
    "url": "https://www.sec.gov/Archives/edgar/data/745732/000074573226000006/rost-20260131.htm",
    "filerCik": "0000745732"
   },
   "checkFirst": "Comparable store sales, operating margin, and new store openings.",
   "addedSession": 10,
   "verifiedOn": "2026-10-08"
  },
  "NFLX": {
   "name": "Netflix",
   "cik": "0001065280",
   "ir": "https://ir.netflix.net/",
   "sector": "Consumer",
   "tier": "Growth",
   "why": "Streaming leader",
   "tierWhy": "Largest streaming service, profitable and growing, but valued for growth. Growth tier.",
   "business": "Runs a subscription streaming service with TV series, films, and games, including an ad-supported plan.",
   "risks": [
    "Must keep attracting and keeping members.",
    "Faces intense competition for viewers' time.",
    "Content is expensive and hits are uncertain.",
    "International operations bring currency and regulation risk."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-01-23",
    "period": "2025-12-31",
    "accession": "0001065280-26-000034",
    "url": "https://www.sec.gov/Archives/edgar/data/1065280/000106528026000034/nflx-20251231.htm",
    "filerCik": "0001065280"
   },
   "checkFirst": "Revenue by region, operating margin, and content spending vs. free cash flow.",
   "addedSession": 10,
   "verifiedOn": "2026-10-08"
  },
  "AZO": {
   "name": "AutoZone",
   "cik": "0000866787",
   "ir": null,
   "sector": "Consumer",
   "tier": "Growth",
   "why": "Auto parts retail",
   "tierWhy": "Steady auto-parts retailer that has grown for decades; valued as a growth compounder. Growth tier.",
   "business": "Sells auto parts and accessories to do-it-yourself customers and repair shops through stores in the U.S., Mexico, and Brazil.",
   "risks": [
    "Demand depends on miles driven and the number of older cars on the road.",
    "Faces competition from other parts sellers and online sellers.",
    "Relies on suppliers, many abroad, which exposes it to tariffs.",
    "Carries significant debt and relies on borrowing."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2025-10-27",
    "period": "2025-08-30",
    "accession": "0001104659-25-102611",
    "url": "https://www.sec.gov/Archives/edgar/data/866787/000110465925102611/azo-20250830x10k.htm",
    "filerCik": "0000866787"
   },
   "checkFirst": "Same-store sales, commercial vs. retail growth, and share buybacks vs. debt.",
   "addedSession": 10,
   "verifiedOn": "2026-10-08"
  },
  "RIVN": {
   "name": "Rivian Automotive",
   "cik": "0001874178",
   "ir": "https://rivian.com/investors",
   "sector": "Consumer",
   "tier": "Aggressive growth",
   "why": "Electric trucks + SUVs",
   "tierWhy": "Young electric-vehicle maker that is still losing money. Aggressive growth.",
   "business": "Designs and builds electric pickups, SUVs, and commercial vans, and sells software and services.",
   "risks": [
    "Has a history of large losses and may need more funding.",
    "Launching its next, lower-priced model could be delayed.",
    "Depends on suppliers for batteries and parts.",
    "Changes to EV tax credits and policies could hurt demand."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-12",
    "period": "2025-12-31",
    "accession": "0001874178-26-000008",
    "url": "https://www.sec.gov/Archives/edgar/data/1874178/000187417826000008/rivn-20251231.htm",
    "filerCik": "0001874178"
   },
   "checkFirst": "Vehicles produced and delivered, gross profit per vehicle, and cash on hand.",
   "addedSession": 10,
   "verifiedOn": "2026-10-08"
  },
  "CVNA": {
   "name": "Carvana",
   "cik": "0001690820",
   "ir": "https://investors.carvana.com/",
   "sector": "Consumer",
   "tier": "Aggressive growth",
   "why": "Online used-car retailer",
   "tierWhy": "Online used-car seller that recovered from near-crisis but still carries heavy debt. Aggressive growth.",
   "business": "Sells and buys used cars online, with financing and vehicle delivery or pickup.",
   "risks": [
    "Carries a large amount of debt.",
    "Depends on selling the car loans it makes.",
    "Used-car prices and demand are sensitive to the economy and interest rates.",
    "Faces competition from dealers and other online sellers."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-18",
    "period": "2025-12-31",
    "accession": "0001690820-26-000009",
    "url": "https://www.sec.gov/Archives/edgar/data/1690820/000169082026000009/cvna-20251231.htm",
    "filerCik": "0001690820"
   },
   "checkFirst": "Retail units sold, gross profit per unit, and total debt.",
   "addedSession": 10,
   "verifiedOn": "2026-10-08"
  },
  "RBLX": {
   "name": "Roblox",
   "cik": "0001315098",
   "ir": "https://ir.roblox.com/",
   "sector": "Consumer",
   "tier": "Aggressive growth",
   "why": "Online game platform",
   "tierWhy": "Large online gaming platform that has run net losses. Aggressive growth.",
   "business": "Runs an online platform where users play, create, and share experiences, paying with the virtual currency Robux.",
   "risks": [
    "Safety of young users brings lawsuits, regulation, and reputation risk.",
    "Has a history of losses.",
    "Depends on app stores, which take a share of revenue.",
    "Must keep users engaged as tastes change."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-11",
    "period": "2025-12-31",
    "accession": "0001315098-26-000024",
    "url": "https://www.sec.gov/Archives/edgar/data/1315098/000131509826000024/rblx-20251231.htm",
    "filerCik": "0001315098"
   },
   "checkFirst": "Daily active users, bookings, and hours engaged.",
   "addedSession": 10,
   "verifiedOn": "2026-10-08"
  },
  "CELH": {
   "name": "Celsius Holdings",
   "cik": "0001341766",
   "ir": "https://ir.celsiusholdingsinc.com/",
   "sector": "Consumer",
   "tier": "Aggressive growth",
   "why": "Energy drinks",
   "tierWhy": "Fast-growing energy-drink brand that relies heavily on one distributor. Aggressive growth.",
   "business": "Sells functional energy drinks under the Celsius brand and other brands, distributed mainly through PepsiCo.",
   "risks": [
    "Depends heavily on PepsiCo for distribution.",
    "Faces intense competition in energy drinks.",
    "Relies on outside co-packers to make its drinks.",
    "Consumer tastes can change quickly."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-03-02",
    "period": "2025-12-31",
    "accession": "0001341766-26-000024",
    "url": "https://www.sec.gov/Archives/edgar/data/1341766/000134176626000024/celh-20251231.htm",
    "filerCik": "0001341766"
   },
   "checkFirst": "Revenue by brand and channel, gross margin, and distributor concentration.",
   "addedSession": 10,
   "verifiedOn": "2026-10-08"
  },
  "RSG": {
   "name": "Republic Services",
   "cik": "0001060391",
   "ir": null,
   "sector": "Industrials",
   "tier": "Defensive",
   "why": "Waste + recycling",
   "tierWhy": "Collects trash and recycling, a service needed in any economy. Defensive.",
   "business": "Provides waste collection, transfer, recycling, landfill, and environmental services across the U.S.",
   "risks": [
    "Faces competition from other waste companies and local governments.",
    "Environmental rules and landfill liabilities bring costs.",
    "Fuel and labor costs can rise.",
    "Recycled commodity prices are volatile."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-18",
    "period": "2025-12-31",
    "accession": "0001060391-26-000094",
    "url": "https://www.sec.gov/Archives/edgar/data/1060391/000106039126000094/rsg-20251231.htm",
    "filerCik": "0001060391"
   },
   "checkFirst": "Revenue by service line, price vs. volume growth, and free cash flow.",
   "addedSession": 10,
   "verifiedOn": "2026-10-08"
  },
  "NOC": {
   "name": "Northrop Grumman",
   "cik": "0001133421",
   "ir": null,
   "sector": "Industrials",
   "tier": "Defensive",
   "why": "Defense + space contractor",
   "tierWhy": "Large defense contractor with long government contracts. Defensive: spending is steady across economic cycles.",
   "business": "Makes aircraft (including a new stealth bomber), space systems, missiles, and mission systems for the U.S. government and allies.",
   "risks": [
    "Depends heavily on U.S. government spending.",
    "Fixed-price contracts can cause losses if costs run over.",
    "Government contracts can be cut or canceled.",
    "Security breaches and cyberattacks are a risk."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-01-27",
    "period": "2025-12-31",
    "accession": "0001133421-26-000003",
    "url": "https://www.sec.gov/Archives/edgar/data/1133421/000113342126000003/noc-20251231.htm",
    "filerCik": "0001133421"
   },
   "checkFirst": "Sales by segment, backlog, and losses on fixed-price programs.",
   "addedSession": 10,
   "verifiedOn": "2026-10-08"
  },
  "CSX": {
   "name": "CSX",
   "cik": "0000277948",
   "ir": "https://investors.csx.com/",
   "sector": "Industrials",
   "tier": "Steady",
   "why": "Eastern U.S. railroad",
   "tierWhy": "Large railroad with hard-to-copy track network. Steady but cyclical.",
   "business": "Operates a freight railroad in the eastern U.S., moving goods like merchandise, coal, and intermodal containers.",
   "risks": [
    "Shipping volumes depend on the economy.",
    "Heavily regulated, including safety rules.",
    "Labor unions and agreements affect costs.",
    "Accidents and severe weather can disrupt service."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-12",
    "period": "2025-12-31",
    "accession": "0000277948-26-000006",
    "url": "https://www.sec.gov/Archives/edgar/data/277948/000027794826000006/csx-20251231.htm",
    "filerCik": "0000277948"
   },
   "checkFirst": "Volume by commodity, operating ratio, and capital spending.",
   "addedSession": 10,
   "verifiedOn": "2026-10-08"
  },
  "EMR": {
   "name": "Emerson Electric",
   "cik": "0000032604",
   "ir": "https://www.emerson.com/en-us/investors",
   "sector": "Industrials",
   "tier": "Steady",
   "why": "Industrial automation",
   "tierWhy": "Long-established industrial technology company with a dividend history. Steady, but cyclical.",
   "business": "Makes automation technology for factories and plants: control systems, valves, measurement instruments, and software (including AspenTech).",
   "risks": [
    "Demand depends on industrial spending, which is cyclical.",
    "Acquisitions and divestitures bring integration risk.",
    "Operates worldwide, so currencies and trade policy matter.",
    "Cyberattacks could disrupt its systems or products."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2025-11-10",
    "period": "2025-09-30",
    "accession": "0000032604-25-000087",
    "url": "https://www.sec.gov/Archives/edgar/data/32604/000003260425000087/emr-20250930.htm",
    "filerCik": "0000032604"
   },
   "checkFirst": "Segment results, orders trend, and debt from acquisitions.",
   "addedSession": 10,
   "verifiedOn": "2026-10-08"
  },
  "CTAS": {
   "name": "Cintas",
   "cik": "0000723254",
   "ir": "https://www.cintas.com/investors/",
   "sector": "Industrials",
   "tier": "Growth",
   "why": "Uniforms + workplace supplies",
   "tierWhy": "Steady, fast-compounding business-services company; valued for growth. Growth tier.",
   "business": "Rents and sells uniforms and supplies workplace items like mats, restroom supplies, first aid, and fire safety services.",
   "risks": [
    "Demand depends on employment levels at its business customers.",
    "Fuel, energy, and materials costs can rise.",
    "Faces competition.",
    "Labor and benefits costs can rise."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-07-29",
    "period": "2026-05-31",
    "accession": "0000723254-26-000028",
    "url": "https://www.sec.gov/Archives/edgar/data/723254/000072325426000028/ctas-20260531.htm",
    "filerCik": "0000723254"
   },
   "checkFirst": "Organic revenue growth, operating margin, and free cash flow.",
   "addedSession": 10,
   "verifiedOn": "2026-10-08"
  },
  "HWM": {
   "name": "Howmet Aerospace",
   "cik": "0000004281",
   "ir": "https://www.howmet.com/investors/",
   "sector": "Industrials",
   "tier": "Growth",
   "why": "Jet-engine parts",
   "tierWhy": "Fast-growing maker of engine parts riding demand for new aircraft. Growth tier.",
   "business": "Makes engineered parts for jet engines, fasteners, structures, and forged wheels for aerospace and trucks.",
   "risks": [
    "Depends on the commercial aerospace industry and a few big customers.",
    "Raw material and energy costs can rise.",
    "Faces competition in its markets.",
    "Tariffs and trade policy affect costs."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-12",
    "period": "2025-12-31",
    "accession": "0000004281-26-000012",
    "url": "https://www.sec.gov/Archives/edgar/data/4281/000000428126000012/hwm-20251231.htm",
    "filerCik": "0000004281"
   },
   "checkFirst": "Revenue by segment, commercial aerospace share, and margins.",
   "addedSession": 10,
   "verifiedOn": "2026-10-08"
  },
  "TDG": {
   "name": "TransDigm Group",
   "cik": "0001260221",
   "ir": "https://www.transdigm.com/investor-relations/",
   "sector": "Industrials",
   "tier": "Growth",
   "why": "Aircraft parts with heavy debt",
   "tierWhy": "Profitable aircraft-parts maker that uses lots of debt to boost returns. Growth tier.",
   "business": "Designs and makes aircraft components, many of them proprietary and sole-source, sold for new planes and aftermarket replacement.",
   "risks": [
    "Carries a very large amount of debt.",
    "Depends on commercial air travel and aerospace demand.",
    "Government and defense pricing reviews could cut profits.",
    "Growth depends on acquisitions."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2025-11-12",
    "period": "2025-09-30",
    "accession": "0001260221-25-000081",
    "url": "https://www.sec.gov/Archives/edgar/data/1260221/000126022125000081/tdg-20250930.htm",
    "filerCik": "0001260221"
   },
   "checkFirst": "Commercial OEM vs. aftermarket vs. defense revenue, EBITDA margin, and total debt.",
   "addedSession": 10,
   "verifiedOn": "2026-10-08"
  },
  "VRT": {
   "name": "Vertiv Holdings",
   "cik": "0001674101",
   "ir": "https://investors.vertiv.com/",
   "sector": "Industrials",
   "tier": "Aggressive growth",
   "why": "Data-center power + cooling",
   "tierWhy": "Fast-growing supplier of power and cooling gear for AI data centers. Aggressive growth.",
   "business": "Makes power, thermal-management (cooling), and IT infrastructure equipment and services for data centers and communication networks.",
   "risks": [
    "Demand depends on data-center spending, which can be uneven.",
    "Supply-chain problems can delay production.",
    "Faces strong competition.",
    "Tariffs and trade policy raise costs."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-13",
    "period": "2025-12-31",
    "accession": "0001674101-26-000008",
    "url": "https://www.sec.gov/Archives/edgar/data/1674101/000167410126000008/vrt-20251231.htm",
    "filerCik": "0001674101"
   },
   "checkFirst": "Orders and backlog, organic sales growth by region, and margins.",
   "addedSession": 10,
   "verifiedOn": "2026-10-08"
  },
  "JOBY": {
   "name": "Joby Aviation",
   "cik": "0001819848",
   "ir": "https://ir.jobyaviation.com/",
   "sector": "Industrials",
   "tier": "Aggressive growth",
   "why": "Electric air taxis",
   "tierWhy": "Pre-revenue company developing electric air taxis; heavy losses. Among the riskiest names here. Aggressive growth.",
   "business": "Is developing an electric vertical takeoff and landing aircraft to run its own air taxi service.",
   "risks": [
    "Has a history of losses and no meaningful revenue yet.",
    "Needs FAA certification, which could be delayed.",
    "Building aircraft at scale is unproven.",
    "Customers may not adopt air taxi service."
   ],
   "tenK": {
    "form": "10-K",
    "filed": "2026-02-27",
    "period": "2025-12-31",
    "accession": "0001819848-26-000160",
    "url": "https://www.sec.gov/Archives/edgar/data/1819848/000181984826000160/joby-20251231.htm",
    "filerCik": "0001819848"
   },
   "checkFirst": "Cash on hand vs. losses, certification progress, and production milestones.",
   "addedSession": 10,
   "verifiedOn": "2026-10-08"
  }
 }
};
