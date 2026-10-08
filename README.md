# Investor Guide (Session 10)

**Session 10:** more companies at higher risk (High 18–25, Extra high 25–35 at $10,000+), two new quiz steps — **starting amount** (+ optional monthly addition) and **time period** — smaller amounts get fewer single companies and more ETFs (each company ≥ ~$50, each ETF ≥ ~$25), every holding shows its dollar amount, an illustrative bad / middle / good growth table with stated assumptions, and short-time-period warnings. Universe grows to 175 companies, each with a full research card. Committed locally; not pushed or deployed.

**Session 9:** new risk ladder — lower risk = mostly ETFs + very safe companies; higher risk = more single companies from riskier tiers and fewer ETFs. 116-company universe tagged by safety tier. Deeper research card for every company (business, key 10-K risks with filing date, what to check next). Deploy-ready static website (see **Put it online** below).

Phone-friendly **educational** Investor Guide for Nate’s college-application project.  
**Session 6:** Watchlist (`watchlist.html`) — small list, delayed end-of-day prices, visible as-of stamp. Not a live quote.  
**Sessions 1–5 intact:** quiz → plan with **real ETF + company holdings**, mobile polish, Trusted Sources.  
Not personalized financial advice. No backend. **All 8 sessions done.** Session 7 research cards and Session 8 college writeup (`docs/COLLEGE_WRITEUP.md`) included.

## Open locally

### Option A — open the file
```bash
cd /workspace/investor-guide
xdg-open index.html   # Linux
# open index.html     # macOS
```

Trusted Sources or Watchlist directly:
```bash
xdg-open sources.html
xdg-open watchlist.html
# or: open sources.html
```

### Option B — local static server (recommended for phone DevTools)
```bash
cd /workspace/investor-guide
python3 -m http.server 8080
```

Then visit: [http://127.0.0.1:8080/](http://127.0.0.1:8080/)  
Sources: [http://127.0.0.1:8080/sources.html](http://127.0.0.1:8080/sources.html)  
Watchlist: [http://127.0.0.1:8080/watchlist.html](http://127.0.0.1:8080/watchlist.html)  
Chrome DevTools → device toolbar → width ~**390px** (also OK ~**430px**).

## Walkthrough path

**Welcome + disclaimer** → Risk → Return → **Money** (starting amount + monthly) → **Time** (years) → Sectors → **Review** → **Plan** (holdings table with $) → **Reject / New plan**

Footer on every page: **Home · Disclaimer · Sources · Watchlist · Research** (thumb-friendly, ≥44px tap targets). After a plan is generated, Plan and Reject also link to the watchlist.

## What’s included

| Path | Purpose |
|------|---------|
| `docs/SPEC.md` | Spec through Session 10 (§20) |
| `docs/COLLEGE_WRITEUP.md` | **Session 8** college-application writeup draft (essay, activity list, one-liner, lessons) |
| `index.html` | Welcome + locked disclaimer (must acknowledge) |
| `risk.html` | Risk choices |
| `return.html` | Expected return ranges |
| `money.html` | **Session 10** starting amount (presets or typed) + optional monthly addition |
| `time.html` | **Session 10** time period (presets or slider) with a live short-period warning |
| `sectors.html` | Sector preferences |
| `review.html` | Confirm answers |
| `plan.html` | Generated holdings A + B + research block |
| `reject.html` | Same answers, alternate tickers/weights (3 variants) |
| `disclaimer.html` | Always-available locked disclaimer |
| `sources.html` | **Session 5** Trusted Sources (allowed / banned / why / where / locked 12) |
| `watchlist.html` | **Session 6** small watchlist, delayed/EOD prices, as-of stamp |
| `css/styles.css` | Session 4 phone layout + sources + watchlist styles |
| `js/app.js` | Quiz persistence (`sessionStorage`); Session 10 adds `amount`, `monthly`, `years` + number-input helper |
| `js/generator.js` | Plan generator — Session 10 ladder + amount scaling + projections, 175 tiered companies, **only 12 hardcoded manager names** |
| `js/render-plan.js` | Holdings table (% and $) + research block + tier mix / notes + Session 10 time-period warning and growth table |
| `js/research-data.js` | Research data for all 175 companies (CIK, 10-K citation, business, risks, IR); 59 added in Session 10 |
| `js/research.js` | Research cards (plan view + `research.html?view=all` library) |
| `research.html` | Research cards page |
| `tests/generator.test.js` | Node test over every risk × return × sector × variant × amount × time period combo (207,360) |
| `404.html`, `favicon.*`, `site.webmanifest`, `.nojekyll`, `robots.txt` | Website files (Session 9) |
| `deploy/github-pages.sh` | One-command GitHub Pages publish after a one-time `gh auth login` |
| `js/eod-snapshot.js` | One real Yahoo Finance daily-bar snapshot (not live) |
| `js/watchlist.js` | Watchlist UI; stores `watchlist` on the quiz session object |

## Session 5 — Trusted Sources highlights

- Exact **allowed** list (SEC filings, IR, ETF fact sheets, locked-firm 13Fs, Berkshire / Pershing / Third Point / ARK / AQR / Damodaran)  
- Exact **banned** list (Reddit/TikTok/blogs, anonymous lists, other managers, guaranteed returns, 13F-as-buy-list)  
- Short **why we trust / why we ban**  
- **Where to look** with EDGAR + Damodaran links and IR / ETF guidance; 13F ~45-day delay note  
- **Locked 12** by RED / YELLOW / GREEN / BLUE color buckets  
- Educational badge; links to Home / Plan / Disclaimer  
- Keeps Session 4 tap targets and typography  

## Session 4 polish (still in effect)

- Body text ≥16px; clearer hierarchy and line-height  
- Buttons / quiz options ≥44px min height; sticky Continue on quiz steps  
- Safe-area padding; compact educational badge; no main-screen horizontal overflow  
- Holdings: isolated horizontal scroll, sticky Ticker column, zebra rows, scannable %  
- Plan sections separated: disclaimer / consistent plan / stretch / research  
- Progress caption: Welcome → Risk → Return → Sectors → Review → Plan  

## Holdings (Session 10 ladder — replaces the Session 9 numbers)

Every plan shows: **Ticker | Name | Type | Sleeve | % | $ | Why | Source type** (Why ends with the company's safety tier).

Full size (starting amount $10,000 or more):

| Risk | ETF % | Companies | Max % each | Tiers pulled |
|------|-------|-----------|-----------|--------------|
| Extra low | 85–95% | 1–3 | 5% | Very safe mega-cap Defensive |
| Low | 70–85% | 3–5 | 6% | Defensive, then Steady |
| Medium-low | 55–70% | 6–9 | 7% | Steady/Defensive + 1–2 Growth |
| High-medium | 40–55% | 10–15 | 8% | Steady + Growth mix |
| High | 15–30% | 18–25 | 10% | ~half Steady, ~half Growth/Aggressive |
| Extra high | 8–18% | 25–35 | 12% | Mostly Growth + Aggressive growth |

Weights taper from the top-conviction name (which reaches the cap at High-medium and up) down to small positions. Whole numbers, sum to 100.

**Less money = fewer companies, more ETFs.** Bands: $10,000+ (full ladder), $5,000–$9,999 (×0.75 companies), $1,000–$4,999 (×0.5), under $1,000 (×0.3), with the company share trimmed a little each step. Then every company must be at least ~$50 and every ETF at least ~$25, so the count is capped at what the money allows; if one company at the cap would still be under $50 (e.g. Extra low under $1,000), the plan is all ETFs and says so. Example, Extra high: $500 → 6 companies, 33% ETFs; $3,000 → 13 companies, 26% ETFs; $25,000 → 25 companies, 16% ETFs. Plans note when fractional shares would be needed.

**Time period.** The plan shows an illustrative bad / middle / good table for your years, using your starting amount and monthly addition, with the made-up yearly rates stated on the page (not predictions). High / Extra high under 5 years, or Medium-low / High-medium under 3 years, get a warning. One real figure is cited with a link (Damodaran's historical returns: S&P 500 −36.55% in 2008, −18.04% in 2022).

Company tickers stay inside your selected sectors (the plan says so if a sector is thin or lacks a tier). Every sector has 28+ companies, so even one sector can fill Extra high's 25-company minimum. Reject/New cycles 3 variants that change tickers and weights. Plan B (stretch) uses the next risk level up, same amount.

Run the test: `node tests/generator.test.js` (207,360 combos, ~45 s; prints the observed ranges by risk and amount band).

## Manager buckets (only these 12)

- **RED** (Extra high satellite): Leopold Aschenbrenner / Situational Awareness LP; Bill Ackman / Pershing Square; Cathie Wood / ARK Invest  
- **YELLOW** (High sleeve): Chase Coleman / Tiger Global; David Tepper / Appaloosa; Dan Loeb / Third Point  
- **GREEN** (process only): Ken Griffin / Citadel; Israel Englander / Millennium; Cliff Asness / AQR — Citadel/Millennium **not copyable**  
- **BLUE** (Extra low/Low/core): Warren Buffett / Berkshire Hathaway; Seth Klarman / Baupost; Ray Dalio / Bridgewater All Weather principles  

## Session 6 — Watchlist

- Seeds from the current Plan A tickers when a finished quiz is in this tab and you have not saved a list yet.
- Add or remove symbols from the educational universe only. Cap 12. Saved in the same `sessionStorage` object as the quiz (`watchlist`).
- Prices are the **2026-10-01** session close from the Yahoo Finance daily chart API, fetched **2026-10-02 11:23 AM ET**. The in-progress Oct 2 bar was dropped. Labeled delayed / not a live quote. No buy or sell calls.

## Roadmap status

| Session | Status |
|---------|--------|
| 1–3 | Done |
| 4 Mobile polish | Done |
| 5 Trusted-sources expansion | Done |
| **6 Watchlist + delayed prices** | **Done** |
| **7 EDGAR research cards** | **Done** |
| **8 College-app writeup** | **Done** |
| **9 Aggressive ladder + deeper research + website** | **Done (live)** |
| **10 More companies + starting amount + time period** | **Done locally (not pushed)** |

## Owner

Owner: **Nate** · Assistant: **Karen**

## Session 7 — Research cards

`research.html` (open from Plan or Reject, or the footer). One card per company in the plan: SEC EDGAR links (real CIKs), which filings to read, and the official IR page. Link data lives in `js/research-data.js`, verified 2026-10-07. McDonald's and Caterpillar IR links are left out because they couldn't be verified automatically; those cards say to search the official IR site.

## Session 8 — College-app writeup

`docs/COLLEGE_WRITEUP.md`: project-description essay draft, ~150-word activity-list version, one-line Common App description, and a What I learned / What I'd do next section. Draft for Nate to edit; `[Nate: ...]` placeholders mark places that need his own words. No app code changed in Session 8.

## Session 9 — Deeper research cards

`research.html` shows a deep card for each company in your plan; `research.html?view=all` lists every company (116 in Session 9, 175 after Session 10) with tier and sector filters. Each card: sector, safety tier and why it fits, what the business does, 2–4 key risks from the latest 10-K (Item 1A, filing date cited and linked), what to check next (segments, margins, debt, guidance), and EDGAR + official IR links. Sourcing: CIKs from SEC `company_tickers.json`; 10-K text fetched from EDGAR on 2026-10-07; every business line and risk was keyword-checked against the extracted Item 1 / Item 1A text. No numbers are quoted. 20 IR links could not be verified (bot protection) and are left out; those cards say to search the official IR site.

## Session 10 — Research cards for 59 new companies

Built the same way as Session 9 on 2026-10-08: CIKs from a fresh SEC `company_tickers.json`, latest 10-K from EDGAR, Item 1 / Item 1A paraphrased and keyword-checked, filing date cited. 14 new IR links couldn't be verified (bot protection) and are left out: ADI, AMAT, PANW, DDOG, ZTS, CME, UPST, TRGP, NRG, MDLZ, ROST, AZO, RSG, NOC. `research.html?view=all` now lists all 175.

## Put it online

The site is plain static files with relative paths, so any static host works. It is live on GitHub Pages at https://nate837.github.io/investor-guide/ (Session 9). Session 10 is committed locally only; publish with `bash deploy/github-pages.sh` when approved.

Easiest path (GitHub Pages, free):
1. One-time login: `gh auth login` (choose GitHub.com → HTTPS → "Login with a web browser", then enter the code at github.com/login/device).
2. Publish: `bash deploy/github-pages.sh` → prints `https://<your-username>.github.io/investor-guide/`.

Other options: drag the folder onto Netlify Drop (app.netlify.com/drop, needs a free Netlify login to keep it), or Cloudflare Pages / Vercel (each needs its own login).
