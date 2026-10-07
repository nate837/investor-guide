# Investor Guide (Session 9)

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

**Welcome + disclaimer** → Risk → Return → Sectors → **Review** → **Plan** (holdings table) → **Reject / New plan**

Footer on every page: **Home · Disclaimer · Sources · Watchlist · Research** (thumb-friendly, ≥44px tap targets). After a plan is generated, Plan and Reject also link to the watchlist.

## What’s included

| Path | Purpose |
|------|---------|
| `docs/SPEC.md` | Spec through Session 9 |
| `docs/COLLEGE_WRITEUP.md` | **Session 8** college-application writeup draft (essay, activity list, one-liner, lessons) |
| `index.html` | Welcome + locked disclaimer (must acknowledge) |
| `risk.html` | Risk choices |
| `return.html` | Expected return ranges |
| `sectors.html` | Sector preferences |
| `review.html` | Confirm answers |
| `plan.html` | Generated holdings A + B + research block |
| `reject.html` | Same answers, alternate tickers/weights (3 variants) |
| `disclaimer.html` | Always-available locked disclaimer |
| `sources.html` | **Session 5** Trusted Sources (allowed / banned / why / where / locked 12) |
| `watchlist.html` | **Session 6** small watchlist, delayed/EOD prices, as-of stamp |
| `css/styles.css` | Session 4 phone layout + sources + watchlist styles |
| `js/app.js` | Quiz persistence (`sessionStorage`) — unchanged quiz logic |
| `js/generator.js` | Plan generator — Session 9 ladder, 116 tiered companies, **only 12 hardcoded manager names** |
| `js/render-plan.js` | Holdings table + research block + Session 9 tier mix / notes |
| `js/research-data.js` | Session 9 research data for all 116 companies (CIK, 10-K citation, business, risks, IR) |
| `js/research.js` | Research cards (plan view + `research.html?view=all` library) |
| `research.html` | Research cards page |
| `tests/generator.test.js` | Node test over every risk/return/sector/variant combo |
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

## Holdings (Session 9 ladder — replaces the Session 3 rules)

Every plan shows: **Ticker | Name | Type | Sleeve | % | Why | Source type** (Why ends with the company's safety tier).

| Risk | ETF % | Companies | Max % each | Tiers pulled |
|------|-------|-----------|-----------|--------------|
| Extra low | 85–95% | 1–3 | 5% | Very safe mega-cap Defensive |
| Low | 70–85% | 3–5 | 6% | Defensive, then Steady |
| Medium-low | 55–70% | 5–8 | 7% | Steady/Defensive + 1–2 Growth |
| High-medium | 40–55% | 8–12 | 8% | Steady + Growth mix |
| High | 20–35% | 12–16 | 10% | ~half Steady, ~half Growth/Aggressive |
| Extra high | 10–20% | 15–22 | 12% | Mostly Growth + Aggressive growth |

Company tickers stay inside your selected sectors (the plan says so if a sector is thin or lacks a tier). Reject/New cycles 3 variants that change tickers and weights. Plan B (stretch) uses the next risk level up.

Run the test: `node tests/generator.test.js` (5,760 combos; prints the observed ranges).

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
| **9 Aggressive ladder + deeper research + website** | **Done (deploy-ready)** |

## Owner

Owner: **Nate** · Assistant: **Karen**

## Session 7 — Research cards

`research.html` (open from Plan or Reject, or the footer). One card per company in the plan: SEC EDGAR links (real CIKs), which filings to read, and the official IR page. Link data lives in `js/research-data.js`, verified 2026-10-07. McDonald's and Caterpillar IR links are left out because they couldn't be verified automatically; those cards say to search the official IR site.

## Session 8 — College-app writeup

`docs/COLLEGE_WRITEUP.md`: project-description essay draft, ~150-word activity-list version, one-line Common App description, and a What I learned / What I'd do next section. Draft for Nate to edit; `[Nate: ...]` placeholders mark places that need his own words. No app code changed in Session 8.

## Session 9 — Deeper research cards

`research.html` shows a deep card for each company in your plan; `research.html?view=all` lists all 116 with tier and sector filters. Each card: sector, safety tier and why it fits, what the business does, 2–4 key risks from the latest 10-K (Item 1A, filing date cited and linked), what to check next (segments, margins, debt, guidance), and EDGAR + official IR links. Sourcing: CIKs from SEC `company_tickers.json`; 10-K text fetched from EDGAR on 2026-10-07; every business line and risk was keyword-checked against the extracted Item 1 / Item 1A text. No numbers are quoted. 20 IR links could not be verified (bot protection) and are left out; those cards say to search the official IR site.

## Put it online

The site is plain static files with relative paths, so any static host works. Nothing is hosted yet: no hosting account is logged in on this machine.

Easiest path (GitHub Pages, free):
1. One-time login: `gh auth login` (choose GitHub.com → HTTPS → "Login with a web browser", then enter the code at github.com/login/device).
2. Publish: `bash deploy/github-pages.sh` → prints `https://<your-username>.github.io/investor-guide/`.

Other options: drag the folder onto Netlify Drop (app.netlify.com/drop, needs a free Netlify login to keep it), or Cloudflare Pages / Vercel (each needs its own login).
