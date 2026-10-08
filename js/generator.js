/**
 * Investor Guide — plan generator (Session 10: bigger ladder + starting-amount scaling + time period).
 * Real ETF + company holdings. ONLY the 12 locked manager names may appear.
 * Lower risk = mostly ETFs + very safe companies; higher risk = more single companies from riskier tiers.
 * Less money = fewer single companies and more ETFs (each company >= ~$50, each ETF >= ~$25).
 * Educational static framework — no live prices. Owner: Nate.
 */
(function () {
  /* ===== ONLY 12 NAMES (hardcoded) ===== */
  var MANAGERS = {
    RED: [
      { name: "Leopold Aschenbrenner", firm: "Situational Awareness LP" },
      { name: "Bill Ackman", firm: "Pershing Square" },
      { name: "Cathie Wood", firm: "ARK Invest" },
    ],
    YELLOW: [
      { name: "Chase Coleman", firm: "Tiger Global" },
      { name: "David Tepper", firm: "Appaloosa" },
      { name: "Dan Loeb", firm: "Third Point" },
    ],
    GREEN: [
      { name: "Ken Griffin", firm: "Citadel" },
      { name: "Israel Englander", firm: "Millennium" },
      { name: "Cliff Asness", firm: "AQR" },
    ],
    BLUE: [
      { name: "Warren Buffett", firm: "Berkshire Hathaway" },
      { name: "Seth Klarman", firm: "Baupost" },
      { name: "Ray Dalio", firm: "Bridgewater All Weather principles" },
    ],
  };

  /* ===== Static universe (real liquid large-caps / major ETFs) ===== */
  var ETF_UNIVERSE = {
    VTI: {
      ticker: "VTI",
      name: "Vanguard Total Stock Market ETF",
      type: "ETF",
      why: "Broad U.S. ownership",
      sourceType: "Official ETF fact sheet",
    },
    VOO: {
      ticker: "VOO",
      name: "Vanguard S&P 500 ETF",
      type: "ETF",
      why: "Large-cap U.S. core",
      sourceType: "Official ETF fact sheet",
    },
    VXUS: {
      ticker: "VXUS",
      name: "Vanguard Total International Stock ETF",
      type: "ETF",
      why: "Global diversification",
      sourceType: "Official ETF fact sheet",
    },
    VT: {
      ticker: "VT",
      name: "Vanguard Total World Stock ETF",
      type: "ETF",
      why: "Global equity ownership",
      sourceType: "Official ETF fact sheet",
    },
    BND: {
      ticker: "BND",
      name: "Vanguard Total Bond Market ETF",
      type: "ETF",
      why: "Shock buffer",
      sourceType: "Official ETF fact sheet",
    },
    BNDW: {
      ticker: "BNDW",
      name: "Vanguard Total World Bond ETF",
      type: "ETF",
      why: "Global bond buffer",
      sourceType: "Official ETF fact sheet",
    },
    BIL: {
      ticker: "BIL",
      name: "SPDR Bloomberg 1-3 Month T-Bill ETF",
      type: "ETF",
      why: "T-bill / cash buffer",
      sourceType: "Official ETF fact sheet",
    },
    SGOV: {
      ticker: "SGOV",
      name: "iShares 0-3 Month Treasury Bond ETF",
      type: "ETF",
      why: "Short Treasury cash-like buffer",
      sourceType: "Official ETF fact sheet",
    },
    VTIP: {
      ticker: "VTIP",
      name: "Vanguard Short-Term Inflation-Protected Securities ETF",
      type: "ETF",
      why: "Inflation-protected buffer",
      sourceType: "Official ETF fact sheet",
    },
    SCHZ: {
      ticker: "SCHZ",
      name: "Schwab U.S. Aggregate Bond ETF",
      type: "ETF",
      why: "Investment-grade bond buffer",
      sourceType: "Official ETF fact sheet",
    },
    VLUE: {
      ticker: "VLUE",
      name: "iShares MSCI USA Value Factor ETF",
      type: "ETF",
      why: "Light AQR-style factor tilt",
      sourceType: "ETF fact sheet; AQR papers",
    },
    MTUM: {
      ticker: "MTUM",
      name: "iShares MSCI USA Momentum Factor ETF",
      type: "ETF",
      why: "Light momentum factor tilt",
      sourceType: "ETF fact sheet; AQR papers",
    },
    QUAL: {
      ticker: "QUAL",
      name: "iShares MSCI USA Quality Factor ETF",
      type: "ETF",
      why: "Light quality factor tilt",
      sourceType: "ETF fact sheet; AQR papers",
    },
  };

  /* ===== Company universe: real US-listed, exchange-traded companies that file 10-Ks (Session 9: 116; Session 10: +59 = 175).
     Each one is tagged with a safety tier. No penny stocks, OTC, options, leverage, or crypto. ===== */
  var TIERS = ["Defensive", "Steady", "Growth", "Aggressive growth"];
  var COMPANY_UNIVERSE = [
    {"ticker":"MSFT","name":"Microsoft","sector":"Technology","tier":"Steady","why":"Software + cloud giant"},
    {"ticker":"AAPL","name":"Apple","sector":"Technology","tier":"Steady","why":"Consumer tech + services"},
    {"ticker":"GOOGL","name":"Alphabet","sector":"Technology","tier":"Steady","why":"Search, YouTube, cloud"},
    {"ticker":"IBM","name":"IBM","sector":"Technology","tier":"Steady","why":"Hybrid cloud + consulting"},
    {"ticker":"CSCO","name":"Cisco Systems","sector":"Technology","tier":"Steady","why":"Networking + security"},
    {"ticker":"TXN","name":"Texas Instruments","sector":"Technology","tier":"Steady","why":"Analog + embedded chips"},
    {"ticker":"ACN","name":"Accenture","sector":"Technology","tier":"Steady","why":"IT consulting + services"},
    {"ticker":"NVDA","name":"NVIDIA","sector":"Technology","tier":"Growth","why":"AI chips leader"},
    {"ticker":"AVGO","name":"Broadcom","sector":"Technology","tier":"Growth","why":"AI networking chips + software"},
    {"ticker":"META","name":"Meta Platforms","sector":"Technology","tier":"Growth","why":"Social apps + AI"},
    {"ticker":"AMZN","name":"Amazon","sector":"Technology","tier":"Growth","why":"E-commerce + AWS cloud"},
    {"ticker":"ORCL","name":"Oracle","sector":"Technology","tier":"Growth","why":"Database + AI cloud build-out"},
    {"ticker":"ADBE","name":"Adobe","sector":"Technology","tier":"Growth","why":"Creative + document software"},
    {"ticker":"CRM","name":"Salesforce","sector":"Technology","tier":"Growth","why":"CRM software + AI agents"},
    {"ticker":"NOW","name":"ServiceNow","sector":"Technology","tier":"Growth","why":"Workflow automation software"},
    {"ticker":"AMD","name":"Advanced Micro Devices","sector":"Technology","tier":"Aggressive growth","why":"CPUs, GPUs, AI accelerators"},
    {"ticker":"PLTR","name":"Palantir Technologies","sector":"Technology","tier":"Aggressive growth","why":"Data + AI software"},
    {"ticker":"CRWD","name":"CrowdStrike","sector":"Technology","tier":"Aggressive growth","why":"Cloud cybersecurity"},
    {"ticker":"SNOW","name":"Snowflake","sector":"Technology","tier":"Aggressive growth","why":"Cloud data platform"},
    {"ticker":"NET","name":"Cloudflare","sector":"Technology","tier":"Aggressive growth","why":"Edge network + security"},
    {"ticker":"MU","name":"Micron Technology","sector":"Technology","tier":"Aggressive growth","why":"Memory chips (DRAM, NAND, HBM)"},
    {"ticker":"QCOM","name":"Qualcomm","sector":"Technology","tier":"Steady","why":"Phone + auto chips, licensing"},
    {"ticker":"ADI","name":"Analog Devices","sector":"Technology","tier":"Steady","why":"Analog + mixed-signal chips"},
    {"ticker":"INTU","name":"Intuit","sector":"Technology","tier":"Growth","why":"TurboTax, QuickBooks, Credit Karma"},
    {"ticker":"AMAT","name":"Applied Materials","sector":"Technology","tier":"Growth","why":"Chipmaking equipment"},
    {"ticker":"LRCX","name":"Lam Research","sector":"Technology","tier":"Growth","why":"Chip etch + deposition tools"},
    {"ticker":"ANET","name":"Arista Networks","sector":"Technology","tier":"Growth","why":"Cloud + AI data-center networking"},
    {"ticker":"PANW","name":"Palo Alto Networks","sector":"Technology","tier":"Growth","why":"Cybersecurity platform"},
    {"ticker":"DDOG","name":"Datadog","sector":"Technology","tier":"Aggressive growth","why":"Cloud monitoring software"},
    {"ticker":"MRVL","name":"Marvell Technology","sector":"Technology","tier":"Aggressive growth","why":"Custom AI + data-center chips"},
    {"ticker":"APP","name":"AppLovin","sector":"Technology","tier":"Aggressive growth","why":"Mobile ad tech"},
    {"ticker":"JNJ","name":"Johnson & Johnson","sector":"Healthcare","tier":"Defensive","why":"Medicines + medical devices","core":true},
    {"ticker":"MRK","name":"Merck","sector":"Healthcare","tier":"Defensive","why":"Medicines + vaccines","core":true},
    {"ticker":"ABT","name":"Abbott Laboratories","sector":"Healthcare","tier":"Defensive","why":"Devices, diagnostics, nutrition","core":true},
    {"ticker":"PFE","name":"Pfizer","sector":"Healthcare","tier":"Defensive","why":"Medicines + vaccines"},
    {"ticker":"ABBV","name":"AbbVie","sector":"Healthcare","tier":"Steady","why":"Immunology + aesthetics drugs"},
    {"ticker":"TMO","name":"Thermo Fisher Scientific","sector":"Healthcare","tier":"Steady","why":"Lab tools + services"},
    {"ticker":"UNH","name":"UnitedHealth Group","sector":"Healthcare","tier":"Steady","why":"Health insurance + Optum"},
    {"ticker":"AMGN","name":"Amgen","sector":"Healthcare","tier":"Steady","why":"Mature biotech"},
    {"ticker":"MDT","name":"Medtronic","sector":"Healthcare","tier":"Steady","why":"Medical devices"},
    {"ticker":"DHR","name":"Danaher","sector":"Healthcare","tier":"Steady","why":"Life-science tools + diagnostics"},
    {"ticker":"LLY","name":"Eli Lilly","sector":"Healthcare","tier":"Growth","why":"Diabetes + obesity drugs"},
    {"ticker":"ISRG","name":"Intuitive Surgical","sector":"Healthcare","tier":"Growth","why":"Surgical robots"},
    {"ticker":"VRTX","name":"Vertex Pharmaceuticals","sector":"Healthcare","tier":"Growth","why":"Cystic fibrosis biotech"},
    {"ticker":"REGN","name":"Regeneron","sector":"Healthcare","tier":"Growth","why":"Biotech (Eylea, Dupixent)"},
    {"ticker":"BSX","name":"Boston Scientific","sector":"Healthcare","tier":"Growth","why":"Minimally invasive devices"},
    {"ticker":"SYK","name":"Stryker","sector":"Healthcare","tier":"Growth","why":"Orthopedics + surgical tech"},
    {"ticker":"MRNA","name":"Moderna","sector":"Healthcare","tier":"Aggressive growth","why":"mRNA vaccines + medicines"},
    {"ticker":"DXCM","name":"DexCom","sector":"Healthcare","tier":"Aggressive growth","why":"Glucose monitors"},
    {"ticker":"ALNY","name":"Alnylam Pharmaceuticals","sector":"Healthcare","tier":"Aggressive growth","why":"RNAi medicines"},
    {"ticker":"ILMN","name":"Illumina","sector":"Healthcare","tier":"Aggressive growth","why":"DNA sequencing"},
    {"ticker":"BMY","name":"Bristol-Myers Squibb","sector":"Healthcare","tier":"Defensive","why":"Cancer, heart + immunology drugs"},
    {"ticker":"GILD","name":"Gilead Sciences","sector":"Healthcare","tier":"Steady","why":"HIV + liver disease medicines"},
    {"ticker":"ZTS","name":"Zoetis","sector":"Healthcare","tier":"Steady","why":"Animal health medicines"},
    {"ticker":"CI","name":"The Cigna Group","sector":"Healthcare","tier":"Steady","why":"Health benefits + pharmacy services"},
    {"ticker":"EW","name":"Edwards Lifesciences","sector":"Healthcare","tier":"Growth","why":"Heart valve devices"},
    {"ticker":"IDXX","name":"IDEXX Laboratories","sector":"Healthcare","tier":"Growth","why":"Pet diagnostics"},
    {"ticker":"PODD","name":"Insulet","sector":"Healthcare","tier":"Aggressive growth","why":"Tubeless insulin pumps"},
    {"ticker":"NTRA","name":"Natera","sector":"Healthcare","tier":"Aggressive growth","why":"Genetic + cancer testing"},
    {"ticker":"INSM","name":"Insmed","sector":"Healthcare","tier":"Aggressive growth","why":"Rare lung disease medicines"},
    {"ticker":"HIMS","name":"Hims & Hers Health","sector":"Healthcare","tier":"Aggressive growth","why":"Online health + wellness"},
    {"ticker":"BRK.B","name":"Berkshire Hathaway Class B","sector":"Financials","tier":"Defensive","why":"Conglomerate (insurance, rail, energy)","core":true},
    {"ticker":"CB","name":"Chubb","sector":"Financials","tier":"Defensive","why":"Property & casualty insurer"},
    {"ticker":"MRSH","name":"Marsh & McLennan","sector":"Financials","tier":"Defensive","why":"Insurance broker + consulting"},
    {"ticker":"JPM","name":"JPMorgan Chase","sector":"Financials","tier":"Steady","why":"Largest U.S. bank"},
    {"ticker":"BAC","name":"Bank of America","sector":"Financials","tier":"Steady","why":"Large U.S. bank"},
    {"ticker":"V","name":"Visa","sector":"Financials","tier":"Steady","why":"Card payments network"},
    {"ticker":"MA","name":"Mastercard","sector":"Financials","tier":"Steady","why":"Card payments network"},
    {"ticker":"SPGI","name":"S&P Global","sector":"Financials","tier":"Steady","why":"Ratings, indices, data"},
    {"ticker":"AXP","name":"American Express","sector":"Financials","tier":"Steady","why":"Premium cards + network"},
    {"ticker":"PGR","name":"Progressive","sector":"Financials","tier":"Steady","why":"Auto insurer"},
    {"ticker":"GS","name":"Goldman Sachs","sector":"Financials","tier":"Growth","why":"Investment bank"},
    {"ticker":"MS","name":"Morgan Stanley","sector":"Financials","tier":"Growth","why":"Investment bank + wealth management"},
    {"ticker":"SCHW","name":"Charles Schwab","sector":"Financials","tier":"Growth","why":"Brokerage + banking"},
    {"ticker":"PYPL","name":"PayPal","sector":"Financials","tier":"Growth","why":"Digital payments"},
    {"ticker":"COF","name":"Capital One","sector":"Financials","tier":"Growth","why":"Credit cards + consumer banking"},
    {"ticker":"HOOD","name":"Robinhood Markets","sector":"Financials","tier":"Aggressive growth","why":"Trading app"},
    {"ticker":"SOFI","name":"SoFi Technologies","sector":"Financials","tier":"Aggressive growth","why":"Digital bank + lending"},
    {"ticker":"AFRM","name":"Affirm Holdings","sector":"Financials","tier":"Aggressive growth","why":"Buy now, pay later"},
    {"ticker":"TRV","name":"Travelers","sector":"Financials","tier":"Defensive","why":"Property & casualty insurer"},
    {"ticker":"AON","name":"Aon","sector":"Financials","tier":"Defensive","why":"Insurance broker + consulting"},
    {"ticker":"PNC","name":"PNC Financial Services","sector":"Financials","tier":"Steady","why":"Large regional U.S. bank"},
    {"ticker":"CME","name":"CME Group","sector":"Financials","tier":"Steady","why":"Futures + options exchange"},
    {"ticker":"ICE","name":"Intercontinental Exchange","sector":"Financials","tier":"Steady","why":"Exchanges, data + mortgage tech"},
    {"ticker":"C","name":"Citigroup","sector":"Financials","tier":"Growth","why":"Global bank in turnaround"},
    {"ticker":"IBKR","name":"Interactive Brokers","sector":"Financials","tier":"Growth","why":"Global online brokerage"},
    {"ticker":"UPST","name":"Upstart Holdings","sector":"Financials","tier":"Aggressive growth","why":"AI lending marketplace"},
    {"ticker":"TOST","name":"Toast","sector":"Financials","tier":"Aggressive growth","why":"Restaurant software + payments"},
    {"ticker":"LMND","name":"Lemonade","sector":"Financials","tier":"Aggressive growth","why":"AI-driven insurance app"},
    {"ticker":"KMI","name":"Kinder Morgan","sector":"Energy","tier":"Defensive","why":"Natural gas pipelines"},
    {"ticker":"WMB","name":"Williams Companies","sector":"Energy","tier":"Defensive","why":"Natural gas pipelines"},
    {"ticker":"XOM","name":"Exxon Mobil","sector":"Energy","tier":"Steady","why":"Integrated oil major"},
    {"ticker":"CVX","name":"Chevron","sector":"Energy","tier":"Steady","why":"Integrated oil major"},
    {"ticker":"COP","name":"ConocoPhillips","sector":"Energy","tier":"Steady","why":"Oil & gas producer"},
    {"ticker":"EOG","name":"EOG Resources","sector":"Energy","tier":"Steady","why":"Shale oil & gas producer"},
    {"ticker":"PSX","name":"Phillips 66","sector":"Energy","tier":"Steady","why":"Refining + midstream"},
    {"ticker":"SLB","name":"SLB (Schlumberger)","sector":"Energy","tier":"Growth","why":"Oilfield services"},
    {"ticker":"MPC","name":"Marathon Petroleum","sector":"Energy","tier":"Growth","why":"Refining + MPLX"},
    {"ticker":"VLO","name":"Valero Energy","sector":"Energy","tier":"Growth","why":"Refining + renewable fuels"},
    {"ticker":"OXY","name":"Occidental Petroleum","sector":"Energy","tier":"Growth","why":"Oil, chemicals, carbon capture"},
    {"ticker":"BKR","name":"Baker Hughes","sector":"Energy","tier":"Growth","why":"Energy technology + LNG equipment"},
    {"ticker":"CEG","name":"Constellation Energy","sector":"Energy","tier":"Growth","why":"Nuclear power producer"},
    {"ticker":"FANG","name":"Diamondback Energy","sector":"Energy","tier":"Growth","why":"Permian shale producer"},
    {"ticker":"FSLR","name":"First Solar","sector":"Energy","tier":"Aggressive growth","why":"U.S. solar panel maker"},
    {"ticker":"ENPH","name":"Enphase Energy","sector":"Energy","tier":"Aggressive growth","why":"Home solar microinverters"},
    {"ticker":"VST","name":"Vistra","sector":"Energy","tier":"Aggressive growth","why":"Power generation + retail electricity"},
    {"ticker":"HAL","name":"Halliburton","sector":"Energy","tier":"Aggressive growth","why":"Oilfield services"},
    {"ticker":"DUK","name":"Duke Energy","sector":"Energy","tier":"Defensive","why":"Regulated electric + gas utility"},
    {"ticker":"SO","name":"Southern Company","sector":"Energy","tier":"Defensive","why":"Regulated Southeast utility"},
    {"ticker":"NEE","name":"NextEra Energy","sector":"Energy","tier":"Steady","why":"Florida utility + renewables"},
    {"ticker":"OKE","name":"ONEOK","sector":"Energy","tier":"Steady","why":"Natural gas + NGL pipelines"},
    {"ticker":"LNG","name":"Cheniere Energy","sector":"Energy","tier":"Growth","why":"U.S. LNG exporter"},
    {"ticker":"TRGP","name":"Targa Resources","sector":"Energy","tier":"Growth","why":"Gas gathering + NGL logistics"},
    {"ticker":"EQT","name":"EQT","sector":"Energy","tier":"Growth","why":"Appalachian natural gas producer"},
    {"ticker":"DVN","name":"Devon Energy","sector":"Energy","tier":"Growth","why":"U.S. oil & gas producer"},
    {"ticker":"NRG","name":"NRG Energy","sector":"Energy","tier":"Aggressive growth","why":"Power plants + retail electricity"},
    {"ticker":"OKLO","name":"Oklo","sector":"Energy","tier":"Aggressive growth","why":"Small nuclear reactor developer"},
    {"ticker":"PG","name":"Procter & Gamble","sector":"Consumer","tier":"Defensive","why":"Household staples","core":true},
    {"ticker":"KO","name":"Coca-Cola","sector":"Consumer","tier":"Defensive","why":"Beverages","core":true},
    {"ticker":"PEP","name":"PepsiCo","sector":"Consumer","tier":"Defensive","why":"Snacks + beverages","core":true},
    {"ticker":"WMT","name":"Walmart","sector":"Consumer","tier":"Defensive","why":"Largest retailer","core":true},
    {"ticker":"COST","name":"Costco","sector":"Consumer","tier":"Defensive","why":"Membership warehouses","core":true},
    {"ticker":"MCD","name":"McDonald's","sector":"Consumer","tier":"Defensive","why":"Franchised restaurants","core":true},
    {"ticker":"CL","name":"Colgate-Palmolive","sector":"Consumer","tier":"Defensive","why":"Oral care + pet food"},
    {"ticker":"HD","name":"Home Depot","sector":"Consumer","tier":"Steady","why":"Home improvement"},
    {"ticker":"LOW","name":"Lowe's","sector":"Consumer","tier":"Steady","why":"Home improvement"},
    {"ticker":"TJX","name":"TJX Companies","sector":"Consumer","tier":"Steady","why":"Off-price retail"},
    {"ticker":"NKE","name":"Nike","sector":"Consumer","tier":"Steady","why":"Athletic footwear + apparel"},
    {"ticker":"SBUX","name":"Starbucks","sector":"Consumer","tier":"Steady","why":"Coffeehouses"},
    {"ticker":"BKNG","name":"Booking Holdings","sector":"Consumer","tier":"Growth","why":"Online travel"},
    {"ticker":"CMG","name":"Chipotle Mexican Grill","sector":"Consumer","tier":"Growth","why":"Fast-casual restaurants"},
    {"ticker":"ORLY","name":"O'Reilly Automotive","sector":"Consumer","tier":"Growth","why":"Auto parts retail"},
    {"ticker":"TSLA","name":"Tesla","sector":"Consumer","tier":"Aggressive growth","why":"EVs, energy storage, autonomy"},
    {"ticker":"ABNB","name":"Airbnb","sector":"Consumer","tier":"Aggressive growth","why":"Home-stay marketplace"},
    {"ticker":"DASH","name":"DoorDash","sector":"Consumer","tier":"Aggressive growth","why":"Delivery platform"},
    {"ticker":"LULU","name":"Lululemon Athletica","sector":"Consumer","tier":"Aggressive growth","why":"Athletic apparel"},
    {"ticker":"MDLZ","name":"Mondelez International","sector":"Consumer","tier":"Defensive","why":"Snacks (Oreo, Cadbury)"},
    {"ticker":"YUM","name":"Yum! Brands","sector":"Consumer","tier":"Steady","why":"Franchised KFC, Taco Bell, Pizza Hut"},
    {"ticker":"DIS","name":"Walt Disney","sector":"Consumer","tier":"Steady","why":"Parks, streaming, entertainment"},
    {"ticker":"ROST","name":"Ross Stores","sector":"Consumer","tier":"Steady","why":"Off-price retail"},
    {"ticker":"NFLX","name":"Netflix","sector":"Consumer","tier":"Growth","why":"Streaming leader"},
    {"ticker":"AZO","name":"AutoZone","sector":"Consumer","tier":"Growth","why":"Auto parts retail"},
    {"ticker":"RIVN","name":"Rivian Automotive","sector":"Consumer","tier":"Aggressive growth","why":"Electric trucks + SUVs"},
    {"ticker":"CVNA","name":"Carvana","sector":"Consumer","tier":"Aggressive growth","why":"Online used-car retailer"},
    {"ticker":"RBLX","name":"Roblox","sector":"Consumer","tier":"Aggressive growth","why":"Online game platform"},
    {"ticker":"CELH","name":"Celsius Holdings","sector":"Consumer","tier":"Aggressive growth","why":"Energy drinks"},
    {"ticker":"WM","name":"Waste Management","sector":"Industrials","tier":"Defensive","why":"Waste + recycling"},
    {"ticker":"LMT","name":"Lockheed Martin","sector":"Industrials","tier":"Defensive","why":"Defense contractor"},
    {"ticker":"ADP","name":"Automatic Data Processing","sector":"Industrials","tier":"Defensive","why":"Payroll + HR services"},
    {"ticker":"CAT","name":"Caterpillar","sector":"Industrials","tier":"Steady","why":"Construction + mining equipment"},
    {"ticker":"HON","name":"Honeywell","sector":"Industrials","tier":"Steady","why":"Industrial conglomerate"},
    {"ticker":"UNP","name":"Union Pacific","sector":"Industrials","tier":"Steady","why":"Railroad"},
    {"ticker":"RTX","name":"RTX","sector":"Industrials","tier":"Steady","why":"Aerospace + defense"},
    {"ticker":"DE","name":"Deere","sector":"Industrials","tier":"Steady","why":"Farm + construction equipment"},
    {"ticker":"UPS","name":"United Parcel Service","sector":"Industrials","tier":"Steady","why":"Package delivery"},
    {"ticker":"GD","name":"General Dynamics","sector":"Industrials","tier":"Steady","why":"Defense + business jets"},
    {"ticker":"ITW","name":"Illinois Tool Works","sector":"Industrials","tier":"Steady","why":"Diversified manufacturer"},
    {"ticker":"GE","name":"GE Aerospace","sector":"Industrials","tier":"Growth","why":"Jet engines"},
    {"ticker":"ETN","name":"Eaton","sector":"Industrials","tier":"Growth","why":"Electrical equipment"},
    {"ticker":"PWR","name":"Quanta Services","sector":"Industrials","tier":"Growth","why":"Grid construction"},
    {"ticker":"TT","name":"Trane Technologies","sector":"Industrials","tier":"Growth","why":"HVAC systems"},
    {"ticker":"PH","name":"Parker-Hannifin","sector":"Industrials","tier":"Growth","why":"Motion + control tech"},
    {"ticker":"GEV","name":"GE Vernova","sector":"Industrials","tier":"Aggressive growth","why":"Power + grid equipment"},
    {"ticker":"UBER","name":"Uber Technologies","sector":"Industrials","tier":"Aggressive growth","why":"Ride-hailing + delivery"},
    {"ticker":"AXON","name":"Axon Enterprise","sector":"Industrials","tier":"Aggressive growth","why":"TASER + body cameras"},
    {"ticker":"RKLB","name":"Rocket Lab","sector":"Industrials","tier":"Aggressive growth","why":"Space launch + spacecraft"},
    {"ticker":"RSG","name":"Republic Services","sector":"Industrials","tier":"Defensive","why":"Waste + recycling"},
    {"ticker":"NOC","name":"Northrop Grumman","sector":"Industrials","tier":"Defensive","why":"Defense + space contractor"},
    {"ticker":"CSX","name":"CSX","sector":"Industrials","tier":"Steady","why":"Eastern U.S. railroad"},
    {"ticker":"EMR","name":"Emerson Electric","sector":"Industrials","tier":"Steady","why":"Industrial automation"},
    {"ticker":"CTAS","name":"Cintas","sector":"Industrials","tier":"Growth","why":"Uniforms + workplace supplies"},
    {"ticker":"HWM","name":"Howmet Aerospace","sector":"Industrials","tier":"Growth","why":"Jet-engine parts"},
    {"ticker":"TDG","name":"TransDigm Group","sector":"Industrials","tier":"Growth","why":"Aircraft parts with heavy debt"},
    {"ticker":"VRT","name":"Vertiv Holdings","sector":"Industrials","tier":"Aggressive growth","why":"Data-center power + cooling"},
    {"ticker":"JOBY","name":"Joby Aviation","sector":"Industrials","tier":"Aggressive growth","why":"Electric air taxis"}
  ];

  /* ===== Session 10 holdings ladder at full size (starting amount >= $10,000) =====
     conv = how far the top-conviction name's weight reaches toward the cap (0 = flat, 1 = all the way). */
  var RISK_RULES = {
    "Extra low": { etfMin: 85, etfMax: 95, coMin: 1, coMax: 3, coMaxPct: 5, band: "blue", conv: 0 },
    Low: { etfMin: 70, etfMax: 85, coMin: 3, coMax: 5, coMaxPct: 6, band: "blue", conv: 0.5 },
    "Medium-low": { etfMin: 55, etfMax: 70, coMin: 6, coMax: 9, coMaxPct: 7, band: "medium", conv: 0.85 },
    "High-medium": { etfMin: 40, etfMax: 55, coMin: 10, coMax: 15, coMaxPct: 8, band: "medium", conv: 1 },
    High: { etfMin: 15, etfMax: 30, coMin: 18, coMax: 25, coMaxPct: 10, band: "high", conv: 1 },
    "Extra high": { etfMin: 8, etfMax: 18, coMin: 25, coMax: 35, coMaxPct: 12, band: "extraHigh", conv: 1 },
  };

  /* Three variants per risk (Reject / New plan cycles them). n = companies at full size.
     Each ETF list sums to that variant's full-size ETF %; smaller amounts scale these weights up. */
  var VARIANTS = {
    "Extra low": [
      { n: 1, etfs: [["VTI", 14], ["VXUS", 6], ["BND", 40, "Primary shock buffer"], ["BIL", 35, "T-bill / cash buffer"]] },
      { n: 2, etfs: [["VOO", 12], ["VXUS", 6], ["SCHZ", 38, "Bond buffer"], ["SGOV", 34, "Short Treasury buffer"]] },
      { n: 3, etfs: [["VTI", 16], ["BND", 34], ["BIL", 28], ["VTIP", 10]] },
    ],
    Low: [
      { n: 3, etfs: [["VTI", 30], ["VXUS", 12], ["BND", 26], ["BIL", 14]] },
      { n: 4, etfs: [["VOO", 28], ["VXUS", 10], ["SCHZ", 24], ["SGOV", 16]] },
      { n: 5, etfs: [["VT", 32], ["BND", 24], ["VTIP", 8], ["BIL", 8]] },
    ],
    "Medium-low": [
      { n: 6, etfs: [["VTI", 28], ["VXUS", 12], ["BND", 16], ["VLUE", 6, null, "Tilt"], ["BIL", 4]] },
      { n: 8, etfs: [["VOO", 26], ["VXUS", 10], ["SCHZ", 15], ["QUAL", 6, null, "Tilt"], ["SGOV", 4]] },
      { n: 9, etfs: [["VT", 28], ["BND", 15], ["MTUM", 6, null, "Tilt"], ["VTIP", 4], ["BIL", 4]] },
    ],
    "High-medium": [
      { n: 10, etfs: [["VTI", 24], ["VXUS", 10], ["BND", 12], ["VLUE", 6, null, "Tilt"]] },
      { n: 12, etfs: [["VOO", 20], ["VXUS", 9], ["SCHZ", 10], ["QUAL", 7, null, "Tilt"]] },
      { n: 15, etfs: [["VT", 22], ["BND", 10], ["MTUM", 6, null, "Tilt"], ["VTIP", 4]] },
    ],
    High: [
      { n: 18, etfs: [["VTI", 18], ["VXUS", 6], ["BND", 4, "Small shock buffer"]] },
      { n: 21, etfs: [["VOO", 14], ["VXUS", 5], ["SCHZ", 3, "Small shock buffer"]] },
      { n: 25, etfs: [["VT", 13], ["BND", 4, "Small shock buffer"]] },
    ],
    "Extra high": [
      { n: 25, etfs: [["VTI", 9, "Small broad-market cushion"], ["VXUS", 4], ["BND", 3, "Small shock buffer"]] },
      { n: 30, etfs: [["VOO", 7, "Small broad-market cushion"], ["VXUS", 3], ["SGOV", 2, "Small cash-like buffer"]] },
      { n: 35, etfs: [["VT", 7, "Small global cushion"], ["BIL", 2, "Small T-bill buffer"]] },
    ],
  };

  /* ===== Session 10: starting-amount scaling =====
     Less money = fewer single companies and more in ETFs, so each position stays meaningful.
     coFactor scales the company-count band; keep scales the company share of the plan. */
  var MIN_CO_DOLLARS = 50; /* each single-company position should be at least ~$50 */
  var MIN_ETF_DOLLARS = 25; /* each ETF position should be at least ~$25 */
  var MIN_AMOUNT = 100;
  var DEFAULT_AMOUNT = 10000;
  var DEFAULT_YEARS = 10;
  var AMOUNT_BANDS = [
    { id: "full", label: "$10,000 or more", min: 10000, coFactor: 1, keep: 1 },
    { id: "mid", label: "$5,000–$9,999", min: 5000, coFactor: 0.75, keep: 0.95 },
    { id: "small", label: "$1,000–$4,999", min: 1000, coFactor: 0.5, keep: 0.88 },
    { id: "micro", label: "under $1,000", min: 0, coFactor: 0.3, keep: 0.8 },
  ];

  function bandFor(amount) {
    for (var i = 0; i < AMOUNT_BANDS.length; i++) if (amount >= AMOUNT_BANDS[i].min) return AMOUNT_BANDS[i];
    return AMOUNT_BANDS[AMOUNT_BANDS.length - 1];
  }

  function cleanAmount(x) {
    var n = Math.round(Number(x));
    return isFinite(n) && n >= MIN_AMOUNT ? n : DEFAULT_AMOUNT;
  }
  function cleanMonthly(x) {
    var n = Math.round(Number(x));
    return isFinite(n) && n > 0 ? n : 0;
  }
  function cleanYears(x) {
    var n = Math.round(Number(x));
    return isFinite(n) && n >= 1 ? Math.min(n, 50) : DEFAULT_YEARS;
  }

  /* Smallest whole-number % that keeps a position at or above `dollars`. */
  function minPctFor(dollars, amount) {
    return Math.max(1, Math.ceil((dollars * 100) / amount - 1e-9));
  }

  /* The ladder for a risk level at a given starting amount (before the per-position dollar check). */
  function bandRules(risk, amount) {
    var r = RISK_RULES[risk];
    var b = bandFor(amount);
    var coMin = Math.max(1, Math.round(r.coMin * b.coFactor));
    var coMax = Math.max(coMin, Math.round(r.coMax * b.coFactor));
    var coPctHi = Math.min(Math.round((100 - r.etfMin) * b.keep), coMax * r.coMaxPct);
    var coPctLo = Math.min(Math.round((100 - r.etfMax) * b.keep), coMin * r.coMaxPct);
    return {
      band: b.id,
      bandLabel: b.label,
      etfMin: 100 - coPctHi,
      etfMax: 100 - coPctLo,
      coMin: coMin,
      coMax: coMax,
      coMaxPct: r.coMaxPct,
      minCoPct: minPctFor(MIN_CO_DOLLARS, amount),
      minEtfPct: minPctFor(MIN_ETF_DOLLARS, amount),
    };
  }

  /* ===== Session 10: illustrative growth assumptions (NOT predictions) =====
     Bad case = the first year drops by badDrop %, then grows badAfter % a year.
     Middle and good = steady yearly rates. All hypothetical, chosen to show the spread, not a forecast. */
  var PROJECTION_ASSUMPTIONS = {
    "Extra low": { badDrop: -5, badAfter: 1, mid: 3.5, good: 5 },
    Low: { badDrop: -10, badAfter: 2, mid: 4.5, good: 6.5 },
    "Medium-low": { badDrop: -18, badAfter: 2.5, mid: 5.5, good: 8 },
    "High-medium": { badDrop: -25, badAfter: 3, mid: 6.5, good: 9.5 },
    High: { badDrop: -35, badAfter: 3, mid: 7.5, good: 11.5 },
    "Extra high": { badDrop: -50, badAfter: 3, mid: 8, good: 14 },
  };

  /* Real historical context, fetched 2026-10-08 from an allowed source (Damodaran, NYU Stern). */
  var HISTORY_NOTE = {
    text: "Real history for context: Damodaran's historical returns data shows the S&P 500 (with dividends) fell 36.55% in 2008 and 18.04% in 2022. Single companies can fall much further than the whole market.",
    url: "https://pages.stern.nyu.edu/~adamodar/New_Home_Page/datafile/histretSP.html",
    source: "Aswath Damodaran, Historical Returns on Stocks, Bonds and Bills (NYU Stern), data through 2024, page dated January 2026",
  };

  /* Month-by-month growth: start amount, then add `monthly` at the end of each month. */
  function grow(amount, monthly, years, rateForYear) {
    var v = amount;
    for (var y = 0; y < years; y++) {
      var m = Math.pow(1 + rateForYear(y) / 100, 1 / 12) - 1;
      for (var k = 0; k < 12; k++) v = v * (1 + m) + monthly;
    }
    return v;
  }

  function projection(risk, amount, monthly, years) {
    var a = PROJECTION_ASSUMPTIONS[risk];
    var put = amount + monthly * 12 * years;
    function row(key, label, assumption, fn) {
      var end = Math.round(grow(amount, monthly, years, fn));
      return { key: key, label: label, assumption: assumption, end: end, change: end - put };
    }
    return {
      years: years,
      contributed: put,
      rows: [
        row("bad", "Bad stretch", "First year " + a.badDrop + "%, then " + a.badAfter + "% a year", function (y) {
          return y === 0 ? a.badDrop : a.badAfter;
        }),
        row("middle", "Middle", a.mid + "% a year", function () { return a.mid; }),
        row("good", "Good", a.good + "% a year", function () { return a.good; }),
      ],
      assumptions: a,
      label: "Illustrative only. These are made-up yearly rates chosen to show a range, not predictions or past results. A bad stretch can mean losing money, and real results can be worse than the bad case or better than the good case.",
      history: HISTORY_NOTE,
    };
  }

  /* Short time period for the risk level? */
  function horizonWarning(risk, years) {
    var hi = risk === "High" || risk === "Extra high";
    var med = risk === "Medium-low" || risk === "High-medium";
    if ((hi && years < 5) || (med && years < 3)) {
      var need = hi ? 5 : 3;
      return (
        years + " year" + (years === 1 ? " is" : "s is") + " a short time period for " + risk + " risk. A bad stretch at this level can take years to recover from, so a short window raises the chance of ending below what you put in. " +
        "This app treats about " + need + "+ years as the shortest sensible window for this risk level. A lower risk level or a longer time period would fit better."
      );
    }
    return null;
  }


  /* Which safety tiers each risk level pulls from. Each group: how many slots, and the tier order to try. */
  function tierPlan(risk, n, v) {
    var D = "Defensive", S = "Steady", G = "Growth", A = "Aggressive growth";
    if (risk === "Extra low") {
      return [{ count: n, order: ["Defensive core", D, S, G, A], label: "very safe mega-cap" }];
    }
    if (risk === "Low") {
      return [{ count: n, order: ["Defensive core", D, S, G, A], label: "safe blue chip" }];
    }
    if (risk === "Medium-low") {
      var g1 = n >= 7 ? 2 : 1;
      return [
        { count: n - g1, order: [S, D, G, A], label: "steady" },
        { count: g1, order: [G, S, A, D], label: "quality grower" },
      ];
    }
    if (risk === "High-medium") {
      var g2 = Math.round(n * 0.4);
      return [
        { count: n - g2, order: [S, D, G, A], label: "steady" },
        { count: g2, order: [G, A, S, D], label: "growth" },
      ];
    }
    if (risk === "High") {
      var steady = Math.ceil(n / 2);
      var grow = n - steady;
      var aggr = Math.floor(grow / 3);
      return [
        { count: steady, order: [S, D, G, A], label: "steady large cap" },
        { count: grow - aggr, order: [G, A, S, D], label: "growth" },
        { count: aggr, order: [A, G, S, D], label: "aggressive growth" },
      ];
    }
    /* Extra high: mostly higher-risk, higher-reward names */
    var growthN = Math.round(n * 0.75);
    var aN = Math.round(growthN * 0.55);
    return [
      { count: aN, order: [A, G, S, D], label: "aggressive growth" },
      { count: growthN - aN, order: [G, A, S, D], label: "growth" },
      { count: n - growthN, order: [S, G, D, A], label: "steady anchor" },
    ];
  }

  function selectedSectors(sectors) {
    if (!sectors || !sectors.length || sectors.indexOf("none") !== -1) return [];
    return sectors.filter(function (s) {
      return s !== "none";
    });
  }

  var SECTOR_ORDER = ["Technology", "Healthcare", "Financials", "Energy", "Consumer", "Industrials"];

  function rotate(arr, k) {
    if (!arr.length) return arr;
    k = ((k % arr.length) + arr.length) % arr.length;
    return arr.slice(k).concat(arr.slice(0, k));
  }

  /* Pick one name of `tier` from the pool, round-robin across sectors so plans stay spread out. */
  function makePicker(pool, v) {
    var secs = SECTOR_ORDER.filter(function (s) {
      return pool.some(function (c) {
        return c.sector === s;
      });
    });
    secs = rotate(secs, v);
    var cursor = {};
    TIERS.forEach(function (t) {
      cursor[t] = 0;
    });
    var used = {};
    function take(tierKey) {
      /* "Defensive core" = the very safe mega-cap defensive names (e.g. JNJ, PG, KO, BRK.B) */
      var coreOnly = tierKey === "Defensive core";
      var tier = coreOnly ? "Defensive" : tierKey;
      if (cursor[tierKey] === undefined) cursor[tierKey] = 0;
      var lists = secs.map(function (s) {
        return rotate(
          pool.filter(function (c) {
            return c.sector === s && c.tier === tier && (!coreOnly || c.core) && !used[c.ticker];
          }),
          v
        );
      });
      var total = lists.reduce(function (a, l) {
        return a + l.length;
      }, 0);
      if (!total) return null;
      for (var i = 0; i < secs.length; i++) {
        var idx = (cursor[tierKey] + i) % secs.length;
        if (lists[idx].length) {
          cursor[tierKey] = idx + 1;
          var pick = lists[idx][0];
          used[pick.ticker] = true;
          return pick;
        }
      }
      return null;
    }
    return { take: take, used: used };
  }
  function pickCompanies(risk, sectors, v, wantN, minN) {
    var wanted = selectedSectors(sectors);
    var notes = [];
    var inSector = wanted.length
      ? COMPANY_UNIVERSE.filter(function (c) {
          return wanted.indexOf(c.sector) !== -1;
        })
      : COMPANY_UNIVERSE.slice();
    var n = wantN;
    var fillFromBroad = 0;
    if (wanted.length && inSector.length < n) {
      if (inSector.length >= minN) {
        notes.push(
          "Your sectors (" + wanted.join(" + ") + ") have " + inSector.length + " names in this app's list, so this mix uses " + inSector.length + " companies instead of " + n + "."
        );
        n = inSector.length;
      } else {
        fillFromBroad = minN - inSector.length;
        n = minN;
      }
    }
    var picker = makePicker(inSector, v);
    var picks = [];
    var swaps = {};
    tierPlan(risk, n, v).forEach(function (g) {
      for (var i = 0; i < g.count; i++) {
        var got = null;
        for (var o = 0; o < g.order.length && !got; o++) {
          got = picker.take(g.order[o]);
          var base = g.order[0] === "Defensive core" ? "Defensive" : g.order[0];
          if (got && got.tier !== base) {
            var key = base + "→" + got.tier;
            swaps[key] = (swaps[key] || 0) + 1;
          }
        }
        if (got) picks.push({ c: got, group: g.label });
      }
    });
    Object.keys(swaps).forEach(function (k) {
      var parts = k.split("→");
      notes.push(
        "Not enough " + parts[0] + " names" + (wanted.length ? " in " + wanted.join(" + ") : "") + ", so " + swaps[k] + " slot" + (swaps[k] > 1 ? "s use" : " uses") + " " + parts[1] + " names instead."
      );
    });
    if (fillFromBroad > 0 || picks.length < n) {
      var outside = COMPANY_UNIVERSE.filter(function (c) {
        return !picker.used[c.ticker] && wanted.indexOf(c.sector) === -1;
      });
      var bp = makePicker(outside, v);
      var need = n - picks.length;
      var added = 0;
      tierPlan(risk, need, v).forEach(function (g) {
        for (var i = 0; i < g.count; i++) {
          var got = null;
          for (var o = 0; o < g.order.length && !got; o++) got = bp.take(g.order[o]);
          if (got) {
            picks.push({ c: got, group: g.label, filled: true });
            added++;
          }
        }
      });
      if (added) {
        notes.push(
          "Your sectors are too thin for this risk level's minimum company count, so " + added + " compan" + (added > 1 ? "ies come" : "y comes") + " from the broad list (marked “outside your sectors”)."
        );
      }
    }
    return { picks: picks, notes: notes };
  }

  /* Session 10 weights: whole numbers that sum to `total`, each between `lo` and `cap`.
     The first (top-conviction) name reaches toward the cap (conv = how far), then weights taper
     geometrically toward the floor. conv 0 = flat. */
  function allocate(total, n, cap, lo, conv) {
    if (!n) return [];
    lo = Math.max(1, lo || 1);
    conv = conv || 0;
    var mean = total / n;
    var hi = Math.min(cap, mean + (cap - mean) * conv);
    if (hi < mean) hi = mean;
    hi = Math.min(hi, total - (n - 1) * lo);
    var raw = [];
    var i;
    if (n === 1 || hi - lo < 1e-9 || hi - mean < 1e-9) {
      for (i = 0; i < n; i++) raw.push(mean);
    } else {
      var target = (total - n * lo) / (hi - lo); /* wanted sum of r^i, between 1 and n */
      var a = 0, b = 1;
      for (var it = 0; it < 80; it++) {
        var r = (a + b) / 2, s = 0, p = 1;
        for (i = 0; i < n; i++) { s += p; p *= r; }
        if (s < target) a = r; else b = r;
      }
      var rr = (a + b) / 2, pw = 1;
      for (i = 0; i < n; i++) { raw.push(lo + (hi - lo) * pw); pw *= rr; }
    }
    /* Largest-remainder rounding, keeping every weight inside [lo, cap]. */
    var w = raw.map(function (x) { return Math.max(lo, Math.min(cap, Math.floor(x + 1e-9))); });
    var diff = total - w.reduce(function (s2, x) { return s2 + x; }, 0);
    var idx = raw.map(function (x, k) { return k; }).sort(function (x, y) {
      var fx = raw[x] - Math.floor(raw[x] + 1e-9), fy = raw[y] - Math.floor(raw[y] + 1e-9);
      return fy - fx || x - y;
    });
    var guard = 0;
    while (diff !== 0 && guard < 100) {
      for (var j = 0; j < n && diff !== 0; j++) {
        var k2 = diff > 0 ? idx[j] : idx[n - 1 - j];
        if (diff > 0 && w[k2] < cap) { w[k2]++; diff--; }
        else if (diff < 0 && w[k2] > lo) { w[k2]--; diff++; }
      }
      guard++;
    }
    return w;
  }

  /* Scale a variant's ETF list to `total` %, then fold any slice under `minPct` into the largest ETF. */
  function scaleEtfs(list, total, minPct) {
    var base = list.reduce(function (s, e) { return s + e[1]; }, 0);
    var rows = list.map(function (e) {
      var x = (e[1] * total) / base;
      return { e: e, raw: x, pct: Math.floor(x) };
    });
    var rem = total - rows.reduce(function (s, r) { return s + r.pct; }, 0);
    rows
      .slice()
      .sort(function (a, b) { return (b.raw - b.pct) - (a.raw - a.pct); })
      .forEach(function (r) { if (rem > 0) { r.pct++; rem--; } });
    var folded = [];
    for (;;) {
      var small = rows.filter(function (r) { return r.pct < Math.max(1, minPct); });
      if (!small.length || rows.length === 1) break;
      small.sort(function (a, b) { return a.pct - b.pct; });
      var drop = small[0];
      rows.splice(rows.indexOf(drop), 1);
      var big = rows.reduce(function (m, r) { return r.pct > m.pct ? r : m; }, rows[0]);
      big.pct += drop.pct;
      folded.push(drop.e[0]);
    }
    return {
      rows: rows.map(function (r) { return etfRow(r.e[0], r.e[3] || "Core", r.pct, r.e[2] || null); }),
      folded: folded,
    };
  }

  function companyRow(c, pct, filled) {
    return {
      ticker: c.ticker,
      name: c.name,
      type: "Company",
      sleeve: c.tier === "Aggressive growth" ? "Satellite" : "Tilt",
      pct: pct,
      why: c.why + " · " + c.tier + (filled ? " · outside your sectors" : ""),
      sourceType: "SEC 10-K; IR",
      tier: c.tier,
      sector: c.sector,
      outsideSectors: !!filled,
    };
  }

  function money(n) {
    return "$" + Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  function buildPlan(risk, sectors, variant, amount) {
    amount = cleanAmount(amount);
    var rules = RISK_RULES[risk] || RISK_RULES.Low;
    var br = bandRules(risk, amount);
    var band = bandFor(amount);
    var v = ((variant % 3) + 3) % 3;
    var cfg = VARIANTS[risk][v];
    var fullEtf = cfg.etfs.reduce(function (s, e) { return s + e[1]; }, 0);
    var notes = [];

    /* 1. Target company count and company share for this amount band */
    var target = Math.min(br.coMax, Math.max(br.coMin, Math.round(cfg.n * band.coFactor)));
    var coPct = Math.min(Math.round((100 - fullEtf) * band.keep), target * rules.coMaxPct);

    /* 2. Per-position dollar check: each company >= ~$50, so cap the count there */
    var minCo = br.minCoPct;
    var affordable = minCo > rules.coMaxPct ? 0 : Math.floor(coPct / minCo);
    var count = Math.min(target, affordable);
    if (!count && target && minCo <= rules.coMaxPct && minCo <= 100 - br.etfMin) {
      /* one company fits at the dollar floor even though the scaled share was a bit smaller */
      coPct = minCo;
      count = 1;
    }
    var dollarLimited = count < target;
    if (count * rules.coMaxPct < coPct) coPct = count * rules.coMaxPct; /* caps can't hold it all: the rest goes to ETFs */

    /* 3. Pick the names (sector rules + tier ladder) */
    var res = count ? pickCompanies(risk, sectors, v, count, Math.min(br.coMin, count)) : { picks: [], notes: [] };
    var picks = res.picks;
    if (picks.length * rules.coMaxPct < coPct) coPct = picks.length * rules.coMaxPct;
    var weights = allocate(coPct, picks.length, rules.coMaxPct, minCo, rules.conv);
    coPct = weights.reduce(function (s, x) { return s + x; }, 0);
    var etfTotal = 100 - coPct;
    var et = scaleEtfs(cfg.etfs, etfTotal, br.minEtfPct);

    /* 4. Plain-English notes about the amount */
    if (!picks.length) {
      notes.push(
        "With " + money(amount) + ", even one company at this risk level's " + rules.coMaxPct + "% cap would be about " + money((amount * rules.coMaxPct) / 100) +
          ", under the ~$50 minimum this app uses per company, so this plan is all ETFs for now. Single companies come in from about " + money(Math.ceil((MIN_CO_DOLLARS * 100) / rules.coMaxPct)) + "."
      );
    } else if (band.id !== "full" || dollarLimited) {
      notes.push(
        "With " + money(amount) + ", fewer single companies keeps each position meaningful; more is in ETFs. This mix holds " + picks.length + " compan" + (picks.length === 1 ? "y" : "ies") +
          " and " + etfTotal + "% ETFs (at $10,000+ the same mix would hold " + cfg.n + " companies and " + fullEtf + "% ETFs)."
      );
    }
    if (dollarLimited && picks.length) {
      notes.push("Each company position is kept at about $50 or more (at least " + minCo + "% of " + money(amount) + "), which caps this plan at " + picks.length + " compan" + (picks.length === 1 ? "y" : "ies") + ".");
    }
    if (et.folded.length) {
      notes.push("Small ETF slices (" + et.folded.join(", ") + ") were folded into the larger ETFs so each ETF position is at least about $25.");
    }

    var rows = et.rows.concat(
      picks.map(function (p, i) {
        return companyRow(p.c, weights[i], p.filled);
      })
    );
    rows.forEach(function (r) {
      r.dollars = Math.round((r.pct * amount) / 100);
    });
    var smallest = rows.reduce(function (m, r) { return Math.min(m, (r.pct * amount) / 100); }, Infinity);
    return {
      holdings: rows,
      notes: res.notes.concat(notes),
      scale: {
        amount: amount,
        band: band.id,
        bandLabel: band.label,
        fullCompanies: cfg.n,
        fullEtfPct: fullEtf,
        targetCompanies: target,
        dollarLimited: dollarLimited,
        minCoPct: minCo,
        minEtfPct: br.minEtfPct,
        foldedEtfs: et.folded,
        fractionalNote:
          smallest < 1000
            ? "No live prices here, so this app can't say what one share costs. Some of these positions are small dollar amounts, and one share of many stocks costs more than that, so buying these exact amounts would usually need a broker that offers fractional shares."
            : null,
      },
    };
  }


  function sumPct(rows) {
    return rows.reduce(function (a, r) {
      return a + r.pct;
    }, 0);
  }

  function etfShare(rows) {
    return rows.reduce(function (a, r) {
      return a + (r.type === "ETF" ? r.pct : 0);
    }, 0);
  }

  function companyCount(rows) {
    return rows.filter(function (r) {
      return r.type === "Company";
    }).length;
  }

  function nextRisk(risk) {
    return risk === "Extra low"
      ? "Low"
      : risk === "Low"
        ? "Medium-low"
        : risk === "Medium-low"
          ? "High-medium"
          : risk === "High-medium"
            ? "High"
            : "Extra high";
  }

  function bandForRisk(risk) {
    var r = RISK_RULES[risk];
    return r ? r.band : "blue";
  }

  function conflict(risk, ret) {
    var lowRisk = risk === "Extra low" || risk === "Low" || risk === "Medium-low";
    var highRet = ret === "12–20%" || ret === "20%+";
    var midRisk = risk === "High-medium";
    var veryHighRet = ret === "20%+";
    return (lowRisk && highRet) || (midRisk && veryHighRet);
  }


  function pickCousins(band, variant) {
    var blue = MANAGERS.BLUE;
    var yellow = MANAGERS.YELLOW;
    var red = MANAGERS.RED;
    var asness = MANAGERS.GREEN[2];

    if (band === "blue") {
      var order = [
        [blue[0], blue[2], blue[1]],
        [blue[2], blue[0], blue[1]],
        [blue[1], blue[0], blue[2]],
      ];
      return order[variant % 3];
    }
    if (band === "medium") {
      var m = [
        [blue[0], blue[2], asness],
        [blue[2], blue[1], asness],
        [blue[1], blue[0], asness],
      ];
      return m[variant % 3];
    }
    if (band === "high") {
      var h = [
        [blue[0], blue[2], yellow[0], yellow[1]],
        [blue[2], blue[1], yellow[1], yellow[2]],
        [blue[1], blue[0], yellow[2], yellow[0]],
      ];
      return h[variant % 3];
    }
    var x = [
      [blue[0], blue[2], red[0], red[1]],
      [blue[2], blue[1], red[1], red[2]],
      [blue[1], blue[0], red[2], red[0]],
    ];
    return x[variant % 3];
  }

  function formatCousin(m) {
    return m.name + " / " + m.firm;
  }

  function etfRow(ticker, sleeve, pct, whyOverride) {
    var base = ETF_UNIVERSE[ticker];
    return {
      ticker: base.ticker,
      name: base.name,
      type: "ETF",
      sleeve: sleeve,
      pct: pct,
      why: whyOverride || base.why,
      sourceType: base.sourceType,
    };
  }

  function rowsCompat(holdings) {
    /* Keep Session 2-style rows for any legacy readers */
    return holdings.map(function (h) {
      return {
        piece: h.ticker + " · " + h.name,
        role: h.type + " · " + h.sleeve,
        pct: h.pct,
      };
    });
  }

  function outcomeRanges(band, stretch) {
    if (stretch) {
      if (band === "blue") {
        return {
          down: "Larger drawdowns than Plan A",
          base: "Higher equity volatility",
          up: "Higher potential — not guaranteed",
        };
      }
      if (band === "medium") {
        return {
          down: "Steeper losses possible",
          base: "Choppy growth path",
          up: "Higher potential — not sure",
        };
      }
      if (band === "high") {
        return {
          down: "Large loss years possible",
          base: "Very volatile",
          up: "High upside potential — not promised",
        };
      }
      return {
        down: "Severe losses possible",
        base: "Extreme volatility",
        up: "Very high upside — not promised",
      };
    }
    if (band === "blue") {
      return {
        down: "Could lose value in rough years",
        base: "Modest long-term growth framing",
        up: "Higher years possible — not guaranteed",
      };
    }
    if (band === "medium") {
      return {
        down: "Moderate drawdowns possible",
        base: "Balanced growth framing",
        up: "Stronger years — not guaranteed",
      };
    }
    if (band === "high") {
      return {
        down: "Large swings expected",
        base: "Growth-oriented path",
        up: "Strong upside potential — not promised",
      };
    }
    return {
      down: "Very large losses possible",
      base: "Highly uneven path",
      up: "Large upside potential — not promised",
    };
  }

  function researchBlock(band, cousins) {
    var cousinLines = cousins.map(formatCousin);

    var reports = [
      "SEC EDGAR 10-K, 10-Q, 8-K",
      "Official company IR earnings releases and transcripts",
      "Official ETF fact sheets",
      "Damodaran industry data for context",
    ];

    var doNotCopy = [];
    var burden = "";
    var asOf =
      "Any SEC 13F-HR referenced for firms above is delayed (often ~45 days after quarter-end) and is not a live buy list.";

    if (band === "blue") {
      reports.push("Berkshire annual shareholder letter");
      reports.push("SEC 13F-HR for Berkshire Hathaway and Baupost (context only)");
      doNotCopy = [
        "We do not copy Berkshire Hathaway, Baupost, or Bridgewater portfolio weights.",
        "All Weather principles are used as a diversification framing, not a clone of any Bridgewater fund.",
        "Margin of safety ideas from Klarman are educational — not a Baupost look-alike book.",
      ];
      burden =
        "About 8–15 hours/year reading ETF fact sheets, Berkshire’s annual letter, and 10-K / IR pages for any named companies. No market-wide scan in this app.";
    } else if (band === "medium") {
      reports.push("Berkshire annual shareholder letter");
      reports.push("AQR official research papers");
      reports.push("SEC 13F-HR for Berkshire Hathaway (context only)");
      doNotCopy = [
        "We do not clone AQR fund books — only a light factor-ETF tilt inspired by published research.",
        "Ken Griffin / Citadel and Israel Englander / Millennium: not copyable.",
        "We do not copy Berkshire or Bridgewater holdings.",
      ];
      burden =
        "About 12–20 hours/year: ETF fact sheets, selected AQR papers, Berkshire letter, company 10-K / IR for named names, and Damodaran sector context. 13Fs are delayed context only.";
    } else if (band === "high") {
      reports.push("Berkshire annual shareholder letter");
      reports.push("Third Point official letters");
      reports.push("SEC 13F-HR for Tiger Global, Appaloosa, and Third Point (context only, delayed)");
      doNotCopy = [
        "YELLOW sleeve is educational style adjacency — not a copy of Tiger Global, Appaloosa, or Third Point positions.",
        "Ken Griffin / Citadel and Israel Englander / Millennium: not copyable.",
        "We do not treat 13Fs as a live buy list.",
      ];
      burden =
        "About 20–35 hours/year: ETF fact sheets, Third Point letters, delayed 13F reviews for YELLOW firms (context), Berkshire letter, and 10-K / IR transcripts for named sleeve companies.";
    } else {
      reports.push("Berkshire annual shareholder letter");
      reports.push("Pershing Square official investor letters");
      reports.push("ARK official holdings files");
      reports.push("SEC 13F-HR for Pershing Square and related RED firms above (context only, delayed)");
      doNotCopy = [
        "RED satellite is a small educational sleeve — not a copy of Situational Awareness LP, Pershing Square, or ARK Invest portfolios.",
        "Ken Griffin / Citadel and Israel Englander / Millennium: not copyable.",
        "ARK holdings files and 13Fs are not treated as live buy lists.",
      ];
      burden =
        "About 30–50 hours/year: ARK official holdings files (as-of stamped), Pershing Square letters, delayed 13Fs for context, ETF fact sheets, Berkshire letter, and company 10-K / IR materials for concentrated names.";
    }

    return {
      styleCousins: cousinLines,
      reportsUsed: reports,
      doNotCopy: doNotCopy,
      researchBurden: burden,
      asOfDelayed: asOf,
      citadelMillenniumLine: "Ken Griffin / Citadel and Israel Englander / Millennium: not copyable.",
    };
  }

  function whyText(band, risk, sectors, variant, years) {
    var wanted = selectedSectors(sectors);
    var sectorNote = wanted.length
      ? " Company names are limited to " + wanted.join(" + ") + "."
      : " No sector preference, so the company sleeve is spread across sectors.";
    var horizon = " Your time period: " + years + " year" + (years === 1 ? "" : "s") + ".";
    var alt = variant > 0 ? " This is alternate mix #" + (variant + 1) + " for the same answers (tickers/weights changed)." : "";
    if (risk === "Extra low" || risk === "Low") {
      return (
        "Best plan for " + risk + " risk: mostly a BLUE-style core of broad ETFs and bond / T-bill buffers (Buffett / Klarman / Dalio principles as educational cousins — not copying any fund book), plus a few very safe Defensive companies." +
        sectorNote + horizon + alt
      );
    }
    if (band === "medium") {
      return (
        "Best plan for " + risk + " risk: a BLUE diversified ETF core with a light factor ETF tilt inspired by Cliff Asness / AQR research (not cloning Citadel or Millennium books), plus " +
        (risk === "Medium-low" ? "mostly steady blue-chip companies and one or two quality growers." : "a mix of steady and growth companies.") +
        sectorNote + horizon + alt
      );
    }
    if (band === "high") {
      return (
        "Best plan for High risk: mostly single companies — about half steady large caps and half higher-growth names — with ETFs as a smaller BLUE-style core. Growth ideas are framed as a YELLOW educational sleeve (style adjacency to Tiger Global / Appaloosa / Third Point). We do not copy their portfolios." +
        sectorNote + horizon + alt
      );
    }
    return (
      "Best plan for Extra high risk: mostly higher-risk, higher-reward growth companies with only a small BLUE-style ETF cushion. The most aggressive names sit in a RED-style Satellite sleeve (style adjacency to Situational Awareness LP / Pershing Square / ARK Invest — not copies). Still only US-listed, exchange-traded stocks: no penny stocks, OTC, options, leverage, or crypto. We do not treat any 13F as a live buy list." +
      sectorNote + horizon + alt
    );
  }

  function holdingsMeta(holdings, risk, amount) {
    var br = bandRules(risk, amount);
    return {
      etfPct: etfShare(holdings),
      companyCount: companyCount(holdings),
      rules: {
        etfMin: br.etfMin,
        etfMax: br.etfMax,
        coMin: br.coMin,
        coMax: br.coMax,
        coMaxPct: br.coMaxPct,
        band: br.band,
        bandLabel: br.bandLabel,
      },
    };
  }

  function generate(answers) {
    var risk = RISK_RULES[answers.risk] ? answers.risk : "Low";
    var ret = answers.return || "6–8%";
    var sectors = answers.sectors || ["none"];
    var variant = typeof answers.planVariant === "number" ? answers.planVariant : 0;
    var amount = cleanAmount(answers.amount);
    var monthly = cleanMonthly(answers.monthly);
    var years = cleanYears(answers.years);
    var band = bandForRisk(risk);
    var cousins = pickCousins(band, variant);
    var hasConflict = conflict(risk, ret);
    var stretchRisk = nextRisk(risk);

    var a = buildPlan(risk, sectors, variant, amount);
    var b = buildPlan(stretchRisk, sectors, (variant + 1) % 3, amount);

    return {
      risk: risk,
      returnTarget: ret,
      sectors: sectors,
      band: band,
      variant: variant,
      conflict: hasConflict,
      amount: amount,
      monthly: monthly,
      years: years,
      amountBand: bandFor(amount).id,
      amountBandLabel: bandFor(amount).label,
      horizon: years + " year" + (years === 1 ? "" : "s"),
      educationalLabel: "Educational / not personalized advice · No live prices",
      planA: {
        title: "A · Best plan for your risk",
        holdings: a.holdings,
        notes: a.notes,
        scale: a.scale,
        rows: rowsCompat(a.holdings),
        meta: holdingsMeta(a.holdings, risk, amount),
        why: whyText(band, risk, sectors, variant, years),
        ranges: outcomeRanges(band, false),
        projection: projection(risk, amount, monthly, years),
        horizonWarning: horizonWarning(risk, years),
      },
      planB: {
        title: "B · Optional stretch (bigger loss risk)",
        stretchRisk: stretchRisk,
        holdings: b.holdings,
        notes: b.notes,
        scale: b.scale,
        rows: rowsCompat(b.holdings),
        meta: holdingsMeta(b.holdings, stretchRisk, amount),
        why:
          "Stretch path uses the " + stretchRisk + " ladder: more single companies and riskier tiers, so much larger loss risk for a chance at higher long-term return. Still educational — not a promise. Named ETFs and companies only. " +
          (hasConflict
            ? "Shown because your return target conflicts with your risk level."
            : "Optional if you knowingly accept more volatility."),
        ranges: outcomeRanges(band, true),
        projection: projection(stretchRisk, amount, monthly, years),
        horizonWarning: horizonWarning(stretchRisk, years),
      },
      research: researchBlock(band, cousins),
    };
  }

  window.IGPlan = {
    generate: generate,
    MANAGERS: MANAGERS,
    bandForRisk: bandForRisk,
    RISK_RULES: RISK_RULES,
    VARIANTS: VARIANTS,
    TIERS: TIERS,
    ETF_UNIVERSE: ETF_UNIVERSE,
    COMPANY_UNIVERSE: COMPANY_UNIVERSE,
    AMOUNT_BANDS: AMOUNT_BANDS,
    MIN_CO_DOLLARS: MIN_CO_DOLLARS,
    MIN_ETF_DOLLARS: MIN_ETF_DOLLARS,
    MIN_AMOUNT: MIN_AMOUNT,
    PROJECTION_ASSUMPTIONS: PROJECTION_ASSUMPTIONS,
    HISTORY_NOTE: HISTORY_NOTE,
    bandFor: bandFor,
    bandRules: bandRules,
    projection: projection,
    horizonWarning: horizonWarning,
    _internal: { pickCompanies: pickCompanies, allocate: allocate, buildPlan: buildPlan, conflict: conflict, scaleEtfs: scaleEtfs },
  };
})();
