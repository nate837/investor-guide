/**
 * Session 10 generator test. Runs every risk × return × sector-combo × variant × starting amount
 * (several per amount band) × time period, and checks Plan A and Plan B for: sum = 100, whole-number
 * weights, ETF % in the band for that amount, company counts (full and scaled), per-company cap,
 * ~$50 minimum per company and ~$25 per ETF, dollar column, sector compliance, tier rules, taper,
 * research-card coverage, horizon warnings, and the illustrative projection.
 * Run: node tests/generator.test.js
 */
global.window = {};
require("../js/generator.js");
require("../js/research-data.js");
const P = window.IGPlan;
const R = window.IG_RESEARCH_DATA;

const RISKS = ["Extra low", "Low", "Medium-low", "High-medium", "High", "Extra high"];
const RETURNS = ["4–6%", "6–8%", "8–12%", "12–20%", "20%+"];
const SECTORS = ["Technology", "Healthcare", "Financials", "Energy", "Consumer", "Industrials"];
const COMBOS = [["none"]];
for (let m = 1; m < 1 << SECTORS.length; m++) COMBOS.push(SECTORS.filter((_, i) => m & (1 << i)));
const NEXT = { "Extra low": "Low", Low: "Medium-low", "Medium-low": "High-medium", "High-medium": "High", High: "Extra high", "Extra high": "Extra high" };
const ALLOWED_NAMES = new Set([].concat(...Object.values(P.MANAGERS)).map((m) => m.name + " / " + m.firm));
const UNIVERSE = new Map(P.COMPANY_UNIVERSE.map((c) => [c.ticker, c]));
const BANDS = { micro: [100, 500, 850], small: [1000, 3000, 4999], mid: [5000, 7500, 9999], full: [10000, 25000, 250000] };
const AMOUNTS = [].concat(...Object.values(BANDS));
const BAND_ORDER = ["micro", "small", "mid", "full"];
const HORIZONS = [1, 4, 10];

/* Nate's full-size ladder (starting amount >= $10,000), hard-coded so the test does not just echo the code. */
const LADDER = {
  "Extra low": { etfMin: 85, etfMax: 95, coMin: 1, coMax: 3, cap: 5 },
  Low: { etfMin: 70, etfMax: 85, coMin: 3, coMax: 5, cap: 6 },
  "Medium-low": { etfMin: 55, etfMax: 70, coMin: 6, coMax: 9, cap: 7 },
  "High-medium": { etfMin: 40, etfMax: 55, coMin: 10, coMax: 15, cap: 8 },
  High: { etfMin: 15, etfMax: 30, coMin: 18, coMax: 25, cap: 10 },
  "Extra high": { etfMin: 8, etfMax: 18, coMin: 25, coMax: 35, cap: 12 },
};

let failures = [];
let checks = 0;
const seen = {}; // `${risk}|${band}` -> observed ranges
function fail(msg) { if (failures.length < 60) failures.push(msg); }
function ok(cond, msg) { checks++; if (!cond) fail(msg); }
const bandOf = (amt) => (amt >= 10000 ? "full" : amt >= 5000 ? "mid" : amt >= 1000 ? "small" : "micro");
function expectWarning(risk, y) {
  return ((risk === "High" || risk === "Extra high") && y < 5) || ((risk === "Medium-low" || risk === "High-medium") && y < 3);
}

/* Full ladder in the code matches Nate's numbers */
for (const r of RISKS) {
  const br = P.bandRules(r, 10000);
  const L = LADDER[r];
  ok(br.etfMin === L.etfMin && br.etfMax === L.etfMax && br.coMin === L.coMin && br.coMax === L.coMax && br.coMaxPct === L.cap, `full ladder mismatch at ${r}: ${JSON.stringify(br)}`);
  // scaled bands: fewer companies, more ETFs, monotonic as money shrinks
  let prev = null;
  for (const b of BAND_ORDER.slice().reverse()) {
    const x = P.bandRules(r, BANDS[b][1]);
    if (prev) {
      ok(x.coMin <= prev.coMin && x.coMax <= prev.coMax, `${r}: ${b} band has more companies than the next band up`);
      ok(x.etfMin >= prev.etfMin && x.etfMax >= prev.etfMax, `${r}: ${b} band has less ETF than the next band up`);
    }
    prev = x;
  }
}

function checkPlan(label, risk, sectors, plan, amount, fullPlan) {
  const L = LADDER[risk];
  const br = P.bandRules(risk, amount);
  const band = bandOf(amount);
  const h = plan.holdings;
  const sc = plan.scale;
  const sum = h.reduce((a, r) => a + r.pct, 0);
  const etfRows = h.filter((r) => r.type === "ETF");
  const etf = etfRows.reduce((a, r) => a + r.pct, 0);
  const cos = h.filter((r) => r.type === "Company");
  ok(sum === 100, `${label}: sum ${sum}`);
  ok(h.every((r) => Number.isInteger(r.pct) && r.pct >= 1), `${label}: non-integer or <1 weight`);
  ok(cos.every((c) => c.pct <= L.cap), `${label}: company over ${L.cap}% cap`);
  ok(new Set(h.map((r) => r.ticker)).size === h.length, `${label}: duplicate ticker`);
  ok(etfRows.every((r) => P.ETF_UNIVERSE[r.ticker]), `${label}: unknown ETF`);
  ok(cos.every((c) => UNIVERSE.has(c.ticker)), `${label}: company outside universe`);
  ok(sc.band === band, `${label}: band ${sc.band} vs ${band}`);
  // dollars: shown next to %, and minimum per position
  ok(h.every((r) => r.dollars === Math.round((r.pct * amount) / 100)), `${label}: dollar column wrong`);
  ok(cos.every((c) => (c.pct * amount) / 100 >= 50 - 1e-9), `${label}: a company position under $50`);
  ok(etfRows.every((r) => (r.pct * amount) / 100 >= 25 - 1e-9), `${label}: an ETF position under $25`);
  // company count + ETF %
  if (!cos.length) {
    ok(etf === 100, `${label}: no companies but ETF ${etf}%`);
    ok(Math.ceil(5000 / amount) > L.cap, `${label}: all-ETF although one company fits under the cap`);
    ok(plan.notes.some((n) => /all ETFs/.test(n)), `${label}: all-ETF plan without a note`);
  } else if (!sc.dollarLimited) {
    ok(cos.length >= br.coMin && cos.length <= br.coMax, `${label}: ${cos.length} companies outside ${br.coMin}–${br.coMax}`);
    ok(etf >= br.etfMin && etf <= br.etfMax, `${label}: ETF ${etf}% outside ${br.etfMin}–${br.etfMax}`);
  } else {
    ok(cos.length < sc.targetCompanies && cos.length <= br.coMax, `${label}: dollar-limited count ${cos.length} not below target ${sc.targetCompanies}`);
    ok(etf >= br.etfMin, `${label}: dollar-limited ETF ${etf}% below ${br.etfMin}`);
    ok(plan.notes.some((n) => /about \$50 or more/.test(n)), `${label}: dollar-limited without a note`);
    // max affordable: one more company at the floor would not fit in the company share
    const minPct = Math.ceil(5000 / amount - 1e-9);
    ok((cos.length + 1) * minPct > Math.round((100 - fullPlan.meta.etfPct) * P.AMOUNT_BANDS.find((b) => b.id === band).keep) || cos.length + 1 > sc.targetCompanies, `${label}: count ${cos.length} below what the money allows`);
  }
  if (band === "full") {
    ok(etf >= L.etfMin && etf <= L.etfMax, `${label}: full-size ETF ${etf}% outside ${L.etfMin}–${L.etfMax}`);
    ok(cos.length >= L.coMin && cos.length <= L.coMax, `${label}: full-size ${cos.length} companies outside ${L.coMin}–${L.coMax}`);
  } else {
    ok(cos.length <= fullPlan.meta.companyCount, `${label}: more companies (${cos.length}) than the $10,000 version (${fullPlan.meta.companyCount})`);
    ok(etf >= fullPlan.meta.etfPct, `${label}: less ETF (${etf}%) than the $10,000 version (${fullPlan.meta.etfPct}%)`);
    if (cos.length) ok(plan.notes.some((n) => /fewer single companies keeps each position meaningful; more is in ETFs/.test(n)), `${label}: scaled plan without the amount note`);
  }
  // taper: weights never rise down the list; at High / Extra high full size the top name uses the cap
  ok(cos.every((c, i) => i === 0 || c.pct <= cos[i - 1].pct), `${label}: company weights not tapering`);
  if (band === "full" && (risk === "High" || risk === "Extra high")) ok(cos[0].pct === L.cap && new Set(cos.map((c) => c.pct)).size >= 4, `${label}: top name not using the cap / flat weights`);
  // fractional-share note when any position is small
  const smallest = Math.min(...h.map((r) => (r.pct * amount) / 100));
  ok(!!sc.fractionalNote === smallest < 1000, `${label}: fractional-share note mismatch`);
  // sector compliance
  const wanted = sectors.includes("none") ? [] : sectors;
  if (wanted.length) {
    const inPool = P.COMPANY_UNIVERSE.filter((c) => wanted.includes(c.sector)).length;
    const outside = cos.filter((c) => !wanted.includes(UNIVERSE.get(c.ticker).sector));
    ok(outside.every((c) => c.outsideSectors), `${label}: unflagged out-of-sector company`);
    if (outside.length) {
      ok(inPool < br.coMin, `${label}: filled from broad list although sector pool (${inPool}) was big enough`);
      ok(plan.notes.some((n) => /broad list/.test(n)), `${label}: fill without a note`);
    }
  }
  // tier rules
  const tiers = cos.map((c) => UNIVERSE.get(c.ticker).tier);
  const swapped = plan.notes.some((n) => /Not enough/.test(n));
  if (risk === "Extra low" || risk === "Low") {
    ok(!tiers.some((t) => t === "Growth" || t === "Aggressive growth") || swapped, `${label}: growth tier at low risk`);
    if (!wanted.length) ok(tiers.every((t) => t === "Defensive"), `${label}: no-preference low-risk plan not all Defensive`);
  }
  if (risk === "Extra low" && !wanted.length) ok(cos.every((c) => UNIVERSE.get(c.ticker).core), `${label}: Extra low not using mega-cap core names`);
  if (risk === "Medium-low") ok(tiers.filter((t) => t === "Aggressive growth").length === 0 || swapped, `${label}: aggressive name at Medium-low`);
  const growthShare = tiers.length ? tiers.filter((t) => t === "Growth" || t === "Aggressive growth").length / tiers.length : 0;
  if (risk === "High" && !swapped && tiers.length >= 8) ok(growthShare >= 0.4 && growthShare <= 0.6, `${label}: High growth share ${growthShare.toFixed(2)}`);
  if (risk === "Extra high" && !swapped && tiers.length) ok(growthShare >= 0.65, `${label}: Extra high growth share ${growthShare.toFixed(2)}`);
  // research card for every company
  ok(cos.every((c) => R.companies[c.ticker] && R.companies[c.ticker].risks.length >= 2), `${label}: missing research card`);
  // observed ranges
  const key = risk + "|" + band;
  const s = (seen[key] = seen[key] || { etfMin: 999, etfMax: -1, coMin: 999, coMax: -1, maxCo: 0, minCoDollars: Infinity, n: 0 });
  s.etfMin = Math.min(s.etfMin, etf); s.etfMax = Math.max(s.etfMax, etf);
  s.coMin = Math.min(s.coMin, cos.length); s.coMax = Math.max(s.coMax, cos.length);
  s.maxCo = Math.max(s.maxCo, 0, ...cos.map((c) => c.pct));
  if (cos.length) s.minCoDollars = Math.min(s.minCoDollars, ...cos.map((c) => (c.pct * amount) / 100));
  s.n++;
}

function checkTime(label, risk, years, amount, monthly, proj, warning) {
  ok(!!warning === expectWarning(risk, years), `${label}: horizon warning ${!!warning} for ${risk} at ${years}y`);
  ok(proj.years === years && proj.contributed === amount + monthly * 12 * years, `${label}: projection contributed`);
  const [bad, mid, good] = proj.rows;
  ok(bad.key === "bad" && mid.key === "middle" && good.key === "good", `${label}: projection rows`);
  ok(bad.end < mid.end && mid.end < good.end, `${label}: projection not ordered`);
  ok(/Illustrative only/.test(proj.label) && /not predictions/.test(proj.label), `${label}: projection not labeled illustrative`);
}

let combos = 0;
const t0 = Date.now();
for (const risk of RISKS) {
  for (const ret of RETURNS) {
    for (const sectors of COMBOS) {
      for (const amount of AMOUNTS) {
        const sigs = [];
        for (const v of [0, 1, 2]) {
          const full = P.generate({ risk, return: ret, sectors, planVariant: v, amount: 10000, years: 10 });
          for (const years of HORIZONS) {
            combos++;
            const monthly = years === 4 ? 100 : 0;
            const p = P.generate({ risk, return: ret, sectors, planVariant: v, amount, monthly, years });
            const label = `${risk} | ${ret} | ${sectors.join("+")} | v${v} | $${amount} | ${years}y`;
            if (years === HORIZONS[0]) {
              checkPlan(label + " | A", risk, sectors, p.planA, amount, full.planA);
              checkPlan(label + " | B", NEXT[risk], sectors, p.planB, amount, full.planB);
              sigs.push(p.planA.holdings.map((h) => h.ticker + ":" + h.pct).join(","));
            } else {
              // holdings do not depend on the time period
              ok(JSON.stringify(p.planA.holdings) === JSON.stringify(P.generate({ risk, return: ret, sectors, planVariant: v, amount, years: HORIZONS[0] }).planA.holdings), `${label}: holdings changed with time period`);
            }
            checkTime(label + " | A", risk, years, amount, monthly, p.planA.projection, p.planA.horizonWarning);
            checkTime(label + " | B", NEXT[risk], years, amount, monthly, p.planB.projection, p.planB.horizonWarning);
            ok(p.planB.stretchRisk === NEXT[risk], `${label}: stretch risk ${p.planB.stretchRisk}`);
            const lowRisk = ["Extra low", "Low", "Medium-low"].includes(risk);
            const expectConflict = (lowRisk && (ret === "12–20%" || ret === "20%+")) || (risk === "High-medium" && ret === "20%+");
            ok(p.conflict === expectConflict, `${label}: conflict ${p.conflict}`);
            ok(p.research.styleCousins.every((n) => ALLOWED_NAMES.has(n)), `${label}: manager name outside locked 12`);
            ok(/not copyable/.test(p.research.citadelMillenniumLine), `${label}: Citadel/Millennium line`);
          }
        }
        ok(new Set(sigs).size === 3, `${risk} | ${ret} | ${sectors.join("+")} | $${amount}: Reject variants not all different`);
      }
    }
  }
}

/* Horizon boundaries and the bad case at high risk over short periods */
for (const risk of RISKS) {
  for (const y of [1, 2, 3, 4, 5, 6, 15, 20, 30]) {
    ok(!!P.horizonWarning(risk, y) === expectWarning(risk, y), `boundary: ${risk} ${y}y`);
  }
}
for (const risk of ["High", "Extra high"]) {
  for (const y of [1, 2, 3, 4]) {
    const pr = P.projection(risk, 10000, 0, y);
    ok(pr.rows[0].change < 0, `${risk} ${y}y lump sum: bad case should be a loss (${pr.rows[0].change})`);
  }
}
ok(P.projection("Extra high", 10000, 0, 20).rows[0].change <= 0, "Extra high 20y bad case should be near zero or negative");
ok(/^https:\/\/pages\.stern\.nyu\.edu\//.test(P.HISTORY_NOTE.url), "history note must link to Damodaran");

// Every company in the universe has a full research card
for (const c of P.COMPANY_UNIVERSE) {
  const r = R.companies[c.ticker];
  ok(!!r, `no research card for ${c.ticker}`);
  if (!r) continue;
  ok(/^\d{10}$/.test(r.cik), `${c.ticker}: bad CIK`);
  ok(r.tier === c.tier && r.sector === c.sector, `${c.ticker}: tier/sector mismatch`);
  ok(r.business && r.tierWhy && r.checkFirst, `${c.ticker}: missing text`);
  ok(r.risks.length >= 2 && r.risks.length <= 4, `${c.ticker}: risks count`);
  ok(/^\d{4}-\d{2}-\d{2}$/.test(r.tenK.filed) && /^https:\/\/www\.sec\.gov\/Archives\//.test(r.tenK.url), `${c.ticker}: 10-K citation`);
  ok(r.ir === null || /^https:\/\//.test(r.ir), `${c.ticker}: IR url`);
}
ok(Object.keys(R.companies).length === P.COMPANY_UNIVERSE.length, "research data and universe sizes differ");

// Every sector alone can fill an Extra high plan's minimum (25) without the broad list
for (const s of SECTORS) ok(P.COMPANY_UNIVERSE.filter((c) => c.sector === s).length >= 25, `${s}: fewer than 25 companies`);

// Ladder is monotonic at full size: ETF share falls and company count rises with risk (no-preference, variant 0)
let prevEtf = 101, prevCo = -1;
for (const risk of RISKS) {
  const p = P.generate({ risk, return: "8–12%", sectors: ["none"], planVariant: 0, amount: 25000, years: 10 });
  ok(p.planA.meta.etfPct < prevEtf && p.planA.meta.companyCount > prevCo, `ladder not monotonic at ${risk}`);
  prevEtf = p.planA.meta.etfPct; prevCo = p.planA.meta.companyCount;
}

// Thin-sector fill path: temporarily shrink Energy to 5 names, then restore.
{
  const U = P.COMPANY_UNIVERSE;
  const backup = U.slice();
  const keepEnergy = U.filter((c) => c.sector === "Energy").slice(0, 5).map((c) => c.ticker);
  const trimmed = U.filter((c) => c.sector !== "Energy" || keepEnergy.includes(c.ticker));
  U.length = 0; trimmed.forEach((c) => U.push(c));
  for (const v of [0, 1, 2]) {
    const p = P.generate({ risk: "Extra high", return: "20%+", sectors: ["Energy"], planVariant: v, amount: 25000, years: 10 });
    const cos = p.planA.holdings.filter((h) => h.type === "Company");
    ok(cos.length >= 25, `thin-sector fill v${v}: only ${cos.length} companies`);
    ok(cos.filter((c) => c.sector === "Energy").length === 5, `thin-sector fill v${v}: did not use all Energy names first`);
    ok(cos.filter((c) => c.sector !== "Energy").every((c) => c.outsideSectors), `thin-sector fill v${v}: unflagged fill`);
    ok(p.planA.notes.some((n) => /broad list/.test(n)), `thin-sector fill v${v}: no note`);
    ok(p.planA.holdings.reduce((a, r) => a + r.pct, 0) === 100, `thin-sector fill v${v}: sum`);
  }
  U.length = 0; backup.forEach((c) => U.push(c));
}

console.log(`Combos: ${combos} (6 risks × 5 returns × ${COMBOS.length} sector choices × 3 variants × ${AMOUNTS.length} amounts × ${HORIZONS.length} time periods), checks: ${checks}, ${((Date.now() - t0) / 1000).toFixed(1)}s`);
console.log(`Universe: ${P.COMPANY_UNIVERSE.length} companies, ${Object.keys(R.companies).length} research cards`);
console.log("Observed Plan A + B ranges by risk and amount band (ETF % | companies | max single company % | smallest company $):");
for (const r of RISKS) {
  for (const b of BAND_ORDER.slice().reverse()) {
    const s = seen[r + "|" + b];
    const br = P.bandRules(r, BANDS[b][1]);
    console.log(`  ${r.padEnd(11)} ${b.padEnd(5)} ETF ${s.etfMin}–${s.etfMax}% (band ${br.etfMin}–${br.etfMax}) | cos ${s.coMin}–${s.coMax} (band ${br.coMin}–${br.coMax}) | max ${s.maxCo}% (cap ${br.coMaxPct}) | min $${s.minCoDollars === Infinity ? "—" : Math.round(s.minCoDollars)}`);
  }
}
if (failures.length) {
  console.log(`FAIL (${failures.length}${failures.length >= 60 ? "+" : ""}):`);
  failures.forEach((f) => console.log("  " + f));
  process.exit(1);
}
console.log("PASS");
