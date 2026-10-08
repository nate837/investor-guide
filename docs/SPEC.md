# Investor Guide — Product Spec (Session 10)

**Owner:** Nate  
**Assistant:** Karen  
**Product:** Phone-friendly Investor Guide web app for a college-application project  
**Purpose:** Educational only — not for making money  
**Horizon:** chosen by the user in the quiz (Session 10: 1–50 years; presets 1 / 3 / 5 / 10 / 15 / 20+). Short periods for the risk level get a warning.  
**Session:** **10** — Bigger ladder at higher risk (up to 25–35 companies at Extra high), quiz asks starting amount (+ optional monthly addition) and time period, smaller amounts get fewer companies and more ETFs, dollar amount per holding, illustrative growth range, 175-company universe. See §20. Sessions 1–9 intact except the §7 ladder numbers, which Session 10 updates.

---

## 1. Product summary

The Investor Guide walks a student through Welcome + locked disclaimer, risk, expected return, sectors, review, then builds an educational plan with:

- **(A)** the best plan for the chosen risk level — **named ETF + company holdings**
- **(B)** an optional stretch plan that accepts much larger loss risk — also named holdings
- A required **research block** on every plan

Labeled educational / not personalized advice. No live prices on the plan. Session 6 adds a small watchlist of delayed end-of-day closes only (not a live quote). No market-wide scan. No ETF-only plans (Session 9: every risk level holds at least one named company). No “quality names” without tickers.

**Session 5:** expands the always-reachable **Trusted Sources** page into a full phone-friendly policy (allowed / banned / why / where to look / locked-12 reminder).

---

## 2. Screens (through Session 5)

| # | Screen | Role |
|---|--------|------|
| 1 | **Welcome + disclaimer** | What-this-is + locked disclaimer; must acknowledge |
| 2 | **Risk** | Extra high / High / High-medium / Medium-low / Low / Extra low |
| 3 | **Return** | 4–6% / 6–8% / 8–12% / 12–20% / 20%+ |
| 3b | **Money** (Session 10, `money.html`) | Starting amount (presets $500 / $1,000 / $5,000 / $10,000 / $25,000+ or typed, $100–$10,000,000) + optional monthly addition ($0 default) |
| 3c | **Time** (Session 10, `time.html`) | Time period in years (presets 1 / 3 / 5 / 10 / 15 / 20+, or slider 1–40); live short-period warning |
| 4 | **Sectors** | Preferred sectors or “no preference” |
| 5 | **Review** | Show chosen answers; confirm |
| 6 | **Plan** | Disclaimer reminder + holdings table A + B + research block |
| 7 | **Reject / New plan** | Keep answers; change tickers and weights (3 variants) |
| 8 | **Trusted Sources** | Session 5 — full allowed/banned policy + where to look + locked-12 reminder |
| 9 | **Watchlist** | Session 6 — small list, delayed/EOD prices, visible as-of stamp. Not a quiz step |

Always reachable: Disclaimer page, Sources policy, Watchlist.

Progress indicator (Session 10): Welcome → Risk → Return → Money → Time → Sectors → Review → Plan (8 steps).

---

## 3. User flow

```
Welcome+disclaimer → Risk → Return → Money → Time → Sectors → Review → Plan
                                                         ↓
                                              Reject / New plan (cycle mixes)
```

Answers persist in `sessionStorage` (Session 10 adds `amount`, `monthly`, `years` to the same object). Reject keeps risk, return, amount, time period, and sectors; changes tickers and/or weights.

Always reachable from footer: **Home · Disclaimer · Sources · Watchlist**.

---

## 4. Locked disclaimer (verbatim)

This Investor Guide is an educational tool for a college-application project. It is not personalized financial advice, not a recommendation to buy or sell anything, and not an offer from a broker or advisor. Markets can lose money. Past performance does not predict future results. If your return target conflicts with your risk level (for example, 20%+ at Extra low risk), the app will say that mix is unrealistic and still show the best plan for the risk you chose, plus an optional stretch plan that accepts much larger loss risk. You are responsible for any real-world decisions you make.

**Construction rule:** Display verbatim. Do not paraphrase.

---

## 5. ONLY these 12 manager names

If a name is not on this list, it does **not** appear in the UI or generator.

### RED — Extra high satellite only
- Leopold Aschenbrenner / Situational Awareness LP  
- Bill Ackman / Pershing Square  
- Cathie Wood / ARK Invest  

### YELLOW — High sleeve only
- Chase Coleman / Tiger Global  
- David Tepper / Appaloosa  
- Dan Loeb / Third Point  

### GREEN — process notes only, never clone
- Ken Griffin / Citadel  
- Israel Englander / Millennium  
- Cliff Asness / AQR  

**Citadel / Millennium:** one line only — **“not copyable”**.

### BLUE — Extra low / Low / long-term core
- Warren Buffett / Berkshire Hathaway  
- Seth Klarman / Baupost  
- Ray Dalio / Bridgewater All Weather principles  

---

## 6. Risk → style mapping

| Risk | Mapping |
|------|---------|
| Extra low, Low | **BLUE only** |
| Medium-low, High-medium (Medium band) | **BLUE core** + optional light AQR factor ETF tilt (Asness research — not cloning Citadel/Millennium) |
| High | **BLUE core** + **YELLOW** sleeve companies |
| Extra high | **BLUE core** + small **RED** theme satellite |

Session 9 note: the color mapping is unchanged and is still style framing only. In the holdings table, companies in the **Aggressive growth** tier use the **Satellite** sleeve; all other companies use **Tilt**. At Extra high the company sleeve is now most of the plan (§7), so the RED-style Satellite is larger than in Sessions 3–8.

---

## 7. Holdings rules by risk (Session 10 ladder — replaces the Session 9 numbers)

Nate's rule: lower risk = ETFs and very safe companies; as risk goes up, bring in higher-risk, higher-reward companies and use fewer ETFs. Session 10: more companies at higher risk, and **less money = fewer companies / more ETFs** (§20).

**Full size (starting amount $10,000 or more):**

| Risk | ETF % | Companies | Max % each company | Company tiers pulled |
|------|-------|-----------|--------------------|----------------------|
| Extra low | 85–95% (broad + bond / T-bill) | 1–3 | 5% | Very safe mega-cap Defensive (JNJ, PG, KO, PEP, WMT, COST, MCD, BRK.B, MRK, ABT) first |
| Low | 70–85% | 3–5 | 6% | Defensive (mega-cap core first), then Steady |
| Medium-low | 55–70% | 6–9 | 7% | Mostly Steady / Defensive + 1–2 Growth ("quality growers") |
| High-medium | 40–55% | 10–15 | 8% | ~60% Steady / Defensive, ~40% Growth |
| High | 15–30% | 18–25 | 10% | ~half Steady large caps, ~half Growth (about a third of that half Aggressive growth) |
| Extra high | 8–18% | 25–35 | 12% | ~75% Growth + Aggressive growth (Aggressive first), ~25% Steady anchors |

All companies are US-listed, exchange-traded, and file 10-Ks. No penny stocks, OTC, options, leverage, or crypto.

**Variants (Reject / New plan):** three per risk level, each with its own ETF mix, company count, and sector/tier rotation. Full-size counts: Extra low 1 / 2 / 3 · Low 3 / 4 / 5 · Medium-low 6 / 8 / 9 · High-medium 10 / 12 / 15 · High 18 / 21 / 25 · Extra high 25 / 30 / 35 (at 16 / 12 / 9% ETFs). Every Reject changes tickers and weights.

**Weights (Session 10):** whole-number %, sum to 100, each company between its floor (1%, or more at small amounts so it stays ≥ ~$50) and the cap. Weights taper geometrically from the first (top-conviction) name: at High-medium, High and Extra high the top name reaches the cap (8 / 10 / 12%), Medium-low gets close to it, Extra low is flat. At Extra high the Aggressive-growth names come first, so they get the largest weights.

**Safety tiers** (tagged on every company in `js/generator.js` and `js/research-data.js`): **Defensive** (needed in any economy, steady dividends) · **Steady** (large, established, cyclical but durable) · **Growth** (more upside, more swing) · **Aggressive growth** (biggest upside and biggest swings; High and Extra high only).

**Universe (Session 10):** 175 companies — Technology 31, Healthcare 30, Financials 28, Energy 28, Consumer 29, Industrials 29 (every sector alone can fill Extra high's 25-company minimum). By tier: Defensive 27, Steady 53, Growth 52, Aggressive growth 43. Session 9 had 116; Session 10 added 59 (8 Defensive, 15 Steady, 18 Growth, 18 Aggressive growth). Companies whose main business is running investment funds are left out, so no fund firm outside the locked 12 shows up as a holding.

### Required holdings table columns

**Ticker | Name | Type (ETF or Company) | Sleeve (Core / Tilt / Satellite) | % | $ | Why | Source type** — the Why column ends with the company's safety tier; Session 10 adds the rounded dollar amount next to %.

### Sector rule

- If the user picked sectors, **company tickers MUST be in those sectors**.
- If the picked sectors have fewer names than the variant wants but at least the risk level's minimum, the plan uses all of them (and says so).
- Only if the picked sectors have fewer names than the minimum does the plan fill from the broad list; those rows are marked "outside your sectors" and the plan shows a note. With the Session 10 universe (28+ names per sector) this never triggers; the test forces it to prove it works.
- If a sector lacks the preferred tier (e.g. no Defensive names in Technology), the next tier is used and the plan says so.
- No preference = names spread round-robin across all six sectors.

### Sample (must be reproducible) — changed in Session 10

The same answers as before (High-medium · 8–12% · Technology + Healthcare, variant 0), with a $25,000 starting amount, now produce:

| Ticker | Name | Type | Sleeve | % | $ | Why | Source type |
|--------|------|------|--------|---|---|-----|-------------|
| VTI | Vanguard Total Stock Market ETF | ETF | Core | 24% | $6,000 | Broad U.S. ownership | Official ETF fact sheet |
| VXUS | Vanguard Total International Stock ETF | ETF | Core | 10% | $2,500 | Global diversification | Official ETF fact sheet |
| BND | Vanguard Total Bond Market ETF | ETF | Core | 12% | $3,000 | Shock buffer | Official ETF fact sheet |
| VLUE | iShares MSCI USA Value Factor ETF | ETF | Tilt | 6% | $1,500 | Light AQR-style factor tilt | ETF fact sheet; AQR papers |
| MSFT | Microsoft | Company | Tilt | 8% | $2,000 | Software + cloud giant · Steady | SEC 10-K; IR |
| ABBV | AbbVie | Company | Tilt | 7% | $1,750 | Immunology + aesthetics drugs · Steady | SEC 10-K; IR |
| AAPL | Apple | Company | Tilt | 6% | $1,500 | Consumer tech + services · Steady | SEC 10-K; IR |
| TMO | Thermo Fisher Scientific | Company | Tilt | 5% | $1,250 | Lab tools + services · Steady | SEC 10-K; IR |
| GOOGL | Alphabet | Company | Tilt | 5% | $1,250 | Search, YouTube, cloud · Steady | SEC 10-K; IR |
| UNH | UnitedHealth Group | Company | Tilt | 4% | $1,000 | Health insurance + Optum · Steady | SEC 10-K; IR |
| NVDA | NVIDIA | Company | Tilt | 4% | $1,000 | AI chips leader · Growth | SEC 10-K; IR |
| LLY | Eli Lilly | Company | Tilt | 3% | $750 | Diabetes + obesity drugs · Growth | SEC 10-K; IR |
| AVGO | Broadcom | Company | Tilt | 3% | $750 | AI networking chips + software · Growth | SEC 10-K; IR |
| ISRG | Intuitive Surgical | Company | Tilt | 3% | $750 | Surgical robots · Growth | SEC 10-K; IR |

52% ETFs · 10 companies · max 8% (top name at the cap, tapering down).

### Test

`node tests/generator.test.js` runs every risk (6) × return (5) × sector choice (64: no preference + all 63 combinations) × variant (3) × starting amount (12: $100 / $500 / $850 · $1,000 / $3,000 / $4,999 · $5,000 / $7,500 / $9,999 · $10,000 / $25,000 / $250,000) × time period (3: 1 / 4 / 10 years) = 207,360 combos and checks Plan A and Plan B for: sum = 100, whole-number weights, ETF % in the band for that amount, company count (full and scaled, or dollar-limited with a note), per-company cap, every company ≥ ~$50 and every ETF ≥ ~$25, the $ column, fewer-or-equal companies and more-or-equal ETF than the $10,000 version, the amount note, the fractional-share note, tapering weights (top name at the cap at High / Extra high full size), no duplicates, sector compliance (and broad-list fill only when it must, with a note), tier rules, Reject variants all differ, holdings don't change with the time period, stretch plan = next risk level, conflict flag, only locked-12 names, a research card for every company, horizon warnings (plus boundary years 1–30), projection rows ordered and labeled illustrative, and a loss in the bad case for High / Extra high at 1–4 years. The full ladder is hard-coded in the test from Nate's numbers. It also forces a thin sector to test the fill path.

## 8. Allowed reports only (Session 5 — Trusted Sources page)

Exact allowed list (shown on `sources.html`):

- SEC EDGAR 10-K, 10-Q, 8-K  
- Official company IR earnings releases / transcripts  
- Official ETF fact sheets  
- SEC 13F-HR for the 12 locked firms only (delayed; not a buy list)  
- Berkshire annual shareholder letter  
- Pershing Square official investor letters  
- Third Point official letters  
- ARK official holdings files  
- AQR official research papers  
- Damodaran industry data (context)  

### Banned

- Reddit, TikTok, random blogs  
- Anonymous “smart money” lists  
- Other funds / managers not in the locked 12  
- Guaranteed-return calls  
- Treating a 13F as a live buy list  

### Why (plain English)

- **Trust allowed:** primary filings, issuer docs, official letters from the locked managers — checkable, dated, attributable.  
- **Ban others:** hard to verify, out of product scope, or misuse delayed 13Fs as live buys.

### Where to look (Session 5)

- https://www.sec.gov/edgar — 10-K / 10-Q / 8-K / 13F-HR; 13Fs delayed ~45 days  
- Company IR: search “[company] investor relations”  
- ETF issuer fact sheets (Vanguard, iShares, etc.)  
- Damodaran: https://pages.stern.nyu.edu/~adamodar/ (or current official)  
- Official Berkshire / Pershing Square / Third Point / ARK / AQR pages for letters & holdings  

Session 5 documents and links these sources. It does not add an EDGAR research-card product page (Session 7). Session 6 adds the watchlist separately; prices there are delayed/EOD only.

---

## 9. Research block (required on every Plan)

Every plan must show:

1. **Style cousins** — only names from the correct color bucket(s) for that risk  
2. **Reports used** — exact report types from the allowed list  
3. **Do not copy** — what we are not taking from those firms  
4. **Research burden** — hours/year + which filings  
5. **As-of / delayed** note for any 13F  

Plus the Citadel/Millennium “not copyable” line.

---

## 10. Plan construction

- Core first: named low-cost diversified ETFs (BLUE framing)  
- Named companies in Tilt / Satellite sleeves per risk rules  
- Sector filter when sectors selected  
- On return vs risk conflict: refuse fake safe high-return; show A + B  
- On Reject: change some tickers or weights; keep answers; ≥2 alternate mixes  
- Plain English why; outcome ranges not one magic number  
- Label educational / not personalized advice  
- No live prices on the plan; no market-wide scan. Watchlist (Session 6) is delayed/EOD only  

---

## 11. Session 4 — mobile polish (done; still required)

Phone viewport ~**390px** (also OK up to ~**430px**). Goals:

1. Typography: readable body ≥16px, clear hierarchy, comfortable line-height  
2. Tap targets: buttons/options ≥44px min height; adequate spacing  
3. Layout: safe-area padding; no horizontal overflow on main screens; sticky/compact educational badge  
4. Holdings table: horizontal scroll isolated; sticky first column (Ticker); zebra rows; scannable % column  
5. Quiz options: obvious selected state; Continue primary always reachable (sticky actions)  
6. Plan page: sections clearly separated (disclaimer / consistent plan / stretch / research)  
7. Footer nav: thumb-friendly; does not cover content  
8. Light visual polish: consistent color system, cards, focus states — educational/clean  
9. Progress indicator across Welcome → Risk → Return → Sectors → Review → Plan  

**Product rules unchanged:** locked 12 managers, holdings band rules, table columns, research block, disclaimer verbatim, Reject/New behavior. Plan pages still have no live prices.

---

## 12. Session 5 — Trusted-sources expansion (THIS SESSION)

Upgrade `sources.html` (and CSS as needed) into a real phone-friendly Trusted Sources page:

1. Allowed sources — exact list in §8  
2. Banned sources — exact list in §8  
3. Why we trust / why we ban — short plain English  
4. Where to look — practical links/paths (§8)  
5. Locked 12 managers reminder by color bucket (RED / YELLOW / GREEN / BLUE) — names only  
6. Educational / not personalized advice badge; links back to Home / Plan / Disclaimer  
7. Keep Session 4 mobile polish patterns (tap targets, typography)

**Do not change:** `js/generator.js` holdings logic / 12-manager product rules; quiz flow behavior (footer link to Watchlist is OK).

**Session 6 (done):** watchlist + one real delayed/EOD snapshot. **Do not start Session 7+:** no EDGAR research cards as a product feature, no college writeup.

---

## 13. Eight-session roadmap

| Session | Deliverable | Status |
|---------|-------------|--------|
| 1 | Spec + screens + disclaimer | Done |
| 2 | Working phone quiz → plan + research block | Done |
| 3 | Named ETF + company holdings table | Done |
| 4 | Mobile polish | Done |
| 5 | Trusted-sources expansion | Done |
| **6** | Watchlist + delayed prices | **Done** |
| **7** | EDGAR research card page | **Done** |
| **8** | College-app writeup | **Done** |
| **9** | New risk ladder + deeper research cards + real website | **Done (live; see §19)** |
| **10** | More companies at higher risk + starting amount + time period | **Done locally (see §20); not pushed** |

**Do not implement Session 7+ in Session 6.**

---

## 14. Technical constraints (Session 5)

- Static site: HTML / CSS / JS  
- Phone viewport ~390–430px  
- No backend  
- Persist quiz in `sessionStorage`  
- Deterministic JS plan generator using only the 12 names + static ticker universe  
- No fake live quotes  
- Session 5 primarily `sources.html` + CSS; generator logic unchanged  
- Session 6 adds `watchlist.html` + a stored delayed/EOD snapshot; no fake live quotes  

---

## 15. Success criteria (Session 5)

- `sources.html` is a complete Trusted Sources page (allowed, banned, why, where, locked-12 buckets)  
- Session 4 mobile polish patterns preserved  
- Sessions 1–4 product behavior intact  
- Session 6 watchlist (§16) and Session 7 research cards (§17) are implemented. Session 8 writeup (§18) is done  

---

## 16. Session 6 — Watchlist + delayed prices (done)

- Page: `watchlist.html`, footer **Home · Disclaimer · Sources · Watchlist**, and a link from the plan (and reject) screen.
- Seeds from the current Plan A tickers when a finished quiz is in `sessionStorage` and the user has not saved a watchlist yet. Add/remove stays inside the educational universe. Cap **12**. Stored on the same quiz object as `watchlist`.
- Prices are one real Yahoo Finance **daily** chart snapshot (prior completed session close). Each row shows ticker, name if known, price, as-of stamp, and source. Labeled delayed/educational, **not a live quote**. No buy/sell calls. No invented prices.
- Locked 12 managers, holdings rules, quiz logic, and the locked disclaimer are unchanged.

---

## 17. Session 7 — EDGAR research cards (done)

- Page: `research.html`, linked from Plan and Reject; footer **Home · Disclaimer · Sources · Watchlist · Research** on every page.
- One card per company in the current Plan A + Plan B: ticker, name, SEC CIK, EDGAR 10-K and all-filings links, what to read in 10-K / 10-Q / 8-K, and official IR link when verified (otherwise: search the company's official IR site). ETFs listed with a pointer to the issuer fact sheet.
- Shows the plan's existing research block (style cousins from the locked mapping, do-not-copy, research burden, 13F delayed ~45 days / not a live buy list, Citadel/Millennium not copyable).
- Link data in `js/research-data.js`, verified 2026-10-07. Covered all 35 companies in the Session 7 universe (Session 9 expands to 116 deep cards, §19). No buy/sell calls.
- Generator, quiz, watchlist snapshot, and locked disclaimer unchanged.

## 18. Session 8 — College-app writeup (done)

- File: `docs/COLLEGE_WRITEUP.md` (exported as `investor-guide-session8-writeup.docx` / `.pdf`).
- Contains: ~500–650 word project-description essay draft; ~150-word activity-list version; one-line Common App description (<150 characters); What I learned / What I'd do next bullets.
- Written in Nate's voice from project facts only. No invented stories, results, or users. `[Nate: ...]` placeholders mark personal details for Nate to fill in.
- No financial-advice claims. No app code changed (generator, quiz, watchlist, research cards, locked disclaimer unchanged).

## 19. Session 9 — Aggressive ladder, deeper research, website (done)

- **Ladder:** §7 replaces the Session 3 caps. Generator rewritten around safety tiers; return-vs-risk conflict behavior (A = best plan for the risk + B = optional stretch at the next risk level) unchanged.
- **Research cards (`research.html`, `js/research-data.js`, `js/research.js`):** one deep card for each of the 116 companies: sector, safety tier + why it fits, plain-English "what the business does", 2–4 key risks from the latest 10-K Item 1A (filing date cited and linked), "what to check next" (segments, margins, debt, guidance), EDGAR 10-K / all-filings links, and the official IR link when verified. `research.html?view=all` is a library of every company (116 in Session 9; 175 after Session 10, §20) with tier and sector filters (no quiz needed). No numbers quoted; no buy/sell calls.
- **Sourcing:** CIKs from SEC `company_tickers.json` (descriptive User-Agent). Latest 10-K per company from `data.sec.gov` submissions; Item 1 / Item 1A text extracted; every business line and risk keyword-checked against that text. IR URLs fetched 2026-10-07; 20 could not be verified (bot protection) and are omitted with a "search the official IR site" note.
- **Website:** static, relative paths only, `404.html`, favicon (SVG / ICO / PNG), `site.webmanifest`, meta description / Open Graph tags on every page, `.nojekyll`, `robots.txt`. Works on GitHub Pages, Netlify, Vercel, Cloudflare Pages, or any static host. No backend.
- **Unchanged:** locked disclaimer (verbatim), the 12 locked managers + color mapping, allowed / banned sources, no live prices (watchlist stays one delayed EOD snapshot; new tickers show as unpriced there), phone layout.

## 20. Session 10 — More companies, starting amount, time period (done locally, not pushed)

- **Quiz:** two new steps after Return: **Money** (`money.html`: starting amount presets $500 / $1,000 / $5,000 / $10,000 / $25,000+ or typed $100–$10,000,000; optional monthly addition, $0 default) and **Time** (`time.html`: presets 1 / 3 / 5 / 10 / 15 / 20+ years or a 1–40 slider; shows the short-period warning live). Stored as `amount`, `monthly`, `years` in the same `sessionStorage` object; shown on Review and in the plan header. Progress bar now has 8 steps. Old sessions without an amount are sent to the Money step.
- **Ladder:** §7 full-size table (applies at $10,000+). Weights taper so top-conviction names use the cap.
- **Amount scaling (`bandRules`, `buildPlan` in `js/generator.js`):**

| Band | Company-count factor | Company share kept | Example: Extra high | Example: High |
|------|---------------------|--------------------|---------------------|---------------|
| $10,000 or more | ×1 | ×1 | 25–35 cos, 8–18% ETFs | 18–25 cos, 15–30% ETFs |
| $5,000–$9,999 | ×0.75 | ×0.95 | 19–26 cos, 13–22% ETFs | 14–19 cos, 19–33% ETFs |
| $1,000–$4,999 | ×0.5 | ×0.88 | 13–18 cos, 19–28% ETFs | 9–13 cos, 25–38% ETFs |
| under $1,000 | ×0.3 | ×0.8 | 8–11 cos, 26–34% ETFs | 5–8 cos, 32–50% ETFs |

  Then the **~$50 rule**: each company's whole-number % must be at least ceil($50 ÷ amount × 100) (10% at $500, 5% at $1,000, 2% at $3,000, 1% at $5,000+). The company count is capped at what the company share can afford at that floor; if the caps can't hold the company share, the rest moves to ETFs. If even one company at the risk level's cap would be under $50 (Extra low < $1,000, Low < $834, Medium-low < $715, High-medium < $625, High < $500, Extra high < $417), the plan is all ETFs with a plain note (an intended exception to the Session 9 "no ETF-only plans" rule). Each ETF is ≥ ~$25: ETF weights are scaled from the variant's list and slices under the floor are folded into the largest ETF. Plans show the note "With $X, fewer single companies keeps each position meaningful; more is in ETFs" plus the full-size comparison, and a fractional-shares note whenever any position is under $1,000 (no live prices, so it can't name share prices).
- **Time period:** illustrative growth table (bad stretch / middle / good) for Plan A and Plan B, using the starting amount plus monthly additions, compounded monthly. Hypothetical assumptions per risk (stated on the page as made-up rates, not predictions):

| Risk | Bad stretch | Middle | Good |
|------|-------------|--------|------|
| Extra low | first year −5%, then 1%/yr | 3.5%/yr | 5%/yr |
| Low | first year −10%, then 2%/yr | 4.5%/yr | 6.5%/yr |
| Medium-low | first year −18%, then 2.5%/yr | 5.5%/yr | 8%/yr |
| High-medium | first year −25%, then 3%/yr | 6.5%/yr | 9.5%/yr |
| High | first year −35%, then 3%/yr | 7.5%/yr | 11.5%/yr |
| Extra high | first year −50%, then 3%/yr | 8%/yr | 14%/yr |

  One real historical figure is cited, with a link, from an allowed source fetched 2026-10-08: Damodaran's *Historical Returns on Stocks, Bonds and Bills* (NYU Stern, data through 2024, page dated January 2026) — S&P 500 with dividends −36.55% in 2008 and −18.04% in 2022. No other historical statistics are used.
- **Short-period warning:** High / Extra high with < 5 years; Medium-low / High-medium with < 3 years. Shown on the Time step, above Plan A, and in Plan B (for the stretch risk).
- **Universe + research:** 59 new companies (§7), each with a full research card built the Session 9 way: CIK from a fresh SEC `company_tickers.json` (descriptive User-Agent), latest 10-K from `data.sec.gov` submissions, Item 1 / Item 1A extracted (manual line ranges for ICE, Citigroup, Cheniere, Devon), every business line and risk keyword-checked (0 failures; four business keywords matched elsewhere in the 10-K rather than Item 1), no numbers in prose. Wells Fargo was swapped for PNC because its 10-K puts the risk factors in an exhibit. IR links fetched 2026-10-08; 14 could not be verified (bot protection) and are omitted: ADI, AMAT, PANW, DDOG, ZTS, CME, UPST, TRGP, NRG, MDLZ, ROST, AZO, RSG, NOC (34 omitted across all 175).
- **Unchanged:** locked disclaimer (verbatim), the 12 locked managers + color mapping, allowed / banned sources, no live prices (watchlist still one delayed EOD snapshot; new tickers show as unpriced), educational-not-advice framing, phone layout rules (≥16px inputs, ≥44px taps, safe-area).

*Spec updated for Session 10.*

*Spec updated for Session 9. Session 8 writeup, Session 7 research cards (now deeper), Session 6 watchlist, locked disclaimer and Sessions 1–5 product rules unchanged except the §7 holdings ladder.*

*Spec updated for Session 8 writeup. Session 7 research cards, Session 6 watchlist, Locked disclaimer and Sessions 1–5 product rules unchanged.*
