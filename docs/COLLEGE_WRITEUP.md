# Investor Guide — College Application Writeup (Session 8 draft)

**Owner:** Nate Bleibtreu · **Status:** Draft for Nate to edit. Placeholders marked **[Nate: ...]** need Nate's own words before this is used anywhere.

---

## Project description (essay draft)

The Investor Guide is a phone-friendly web app I designed over eight sessions. You answer a short quiz about how much risk you can handle, what yearly return you hope for, and which sectors interest you. Then it builds an example long-term plan made of real ETFs and real companies, and tells you where to go to research each one. It is an educational project. It is not meant to make money, and it does not give personalized financial advice. The first screen shows a locked disclaimer that has to be acknowledged before the quiz starts, and that wording is never paraphrased anywhere in the app.

[Nate: add one or two sentences, in your own words, about why you started this project.]

The most important rule I set was risk first. A lot of investing content starts with the most exciting tickers. I wanted the app to start with the risk level the person chose and build the best plan for that level, even if it looks boring. Plans name real ETFs and real companies, and each of the six risk levels has its own limits. At "Extra low" the plan is 85–95% ETFs plus one to three very safe giant companies, each at 5% or less. At "Extra high" it is only 10–20% ETFs, with 15–22 mostly higher-growth companies and none above 12%.

The hardest design question was what to do when someone's goals don't fit together, like wanting 20%+ a year at Extra low risk. I didn't want the app to pretend that was possible. So it says plainly that the mix looks unrealistic, still shows the best plan for the risk they picked, and adds a separate "stretch" plan labeled as carrying much bigger loss risk. Writing that rule taught me that being honest with the user sometimes means refusing to give them the answer they asked for.

I was just as strict about information. The app has a Trusted Sources page with an exact allowed list: SEC EDGAR filings, official company investor-relations pages, official ETF fact sheets, specific letters and papers from a few managers, and Professor Aswath Damodaran's industry data. It also has an exact banned list: Reddit, TikTok, random blogs, and anonymous "smart money" lists. I also included 13F filings, which show what big funds held, but only for twelve firms, with a warning that they are about 45 days delayed and are not a buy list. Those twelve managers are sorted into four color buckets, from conservative (Warren Buffett, Seth Klarman, Ray Dalio's All Weather principles) to aggressive (like Cathie Wood). The app uses them only as "style cousins" to explain an approach. It never copies their portfolios.

Later sessions added a watchlist and research cards. The watchlist shows one saved end-of-day price snapshot with a visible "as of" date, never live quotes, because I didn't want the app to feel like a trading screen. The research cards link 35 companies to their SEC EDGAR filings and official investor-relations pages, and every link was checked. Two companies' investor-relations links couldn't be verified automatically, so instead of guessing, those cards tell you to search the official site.

I also set a process rule for myself: build one session at a time and approve each one before starting the next, instead of rushing it all in one day. I worked with an assistant, Karen, during the build. [Nate: describe honestly what you did yourself (for example writing the spec, making the design rules, reviewing and approving each session) and what Karen helped with.] Going step by step meant I could catch problems early and keep the rules from earlier sessions intact as the app grew.

[Nate: add what you personally took away from this, in your own words, and anything real you did with it, like showing it to someone or what you plan to study.]

---

## Activity list — short version (~150 words)

**Investor Guide — educational investing web app (personal project)**

Designed an eight-session plan for a phone-friendly educational web app, then built it with an assistant, approving one session at a time. Users take a short quiz (risk, return goal, sectors) and get a sample long-term plan of real ETFs and companies. Each risk level has its own limits on how much can go into individual companies. If a return goal conflicts with the chosen risk, the app says so honestly and shows a separate, clearly labeled stretch plan instead of a fake "safe high return." I wrote a strict sources policy: SEC EDGAR, official investor-relations pages, ETF fact sheets, delayed 13F filings for 12 firms only, and no Reddit, TikTok, or anonymous lists. I added a watchlist that uses one dated end-of-day price snapshot (no live quotes) and research cards linking 35 companies to verified SEC and official investor-relations pages. Educational only; not financial advice. [Nate: add your role (e.g., founder/designer), grade levels, and hours per week / weeks per year.]

## Common App activity description (one line, under 150 characters)

Designed an educational investing web app over 8 sessions: risk-first quiz-to-plan, primary sources only, verified research links. Not advice.

---

## What I learned / what I'd do next

**What I learned**

- How to write a spec with locked rules (disclaimer, 12 managers, holdings limits) and keep them true as new features are added.
- Where primary investing information actually lives: 10-K, 10-Q, and 8-K filings on SEC EDGAR, company investor-relations pages, and ETF fact sheets.
- That 13F filings are delayed about 45 days, so they show past holdings, not what to buy now.
- That an honest product sometimes has to tell users their goal is unrealistic, and then show both the realistic plan and a clearly labeled riskier one.
- To leave out information I couldn't verify (like two IR links) rather than guess.
- Designing for a ~390px phone screen: readable text, 44px tap targets, tables that scroll without breaking the page.
- [Nate: add one lesson in your own words.]

**What I'd do next**

- Have a few classmates try it and write down where the quiz or plan confused them. [Nate: only keep this if you actually plan to do it.]
- Refresh the end-of-day price snapshot and re-check every research link on a regular schedule, with the new date shown.
- Finish verifying the McDonald's and Caterpillar investor-relations links.
- Add short plain-English explanations of terms like ETF, drawdown, and 10-K.
- [Nate: add anything else you'd want to build or study next.]
