/**
 * Session 9 generator test. Runs every risk × return × sector-combo × variant and checks
 * ETF %, company count, per-company cap, sums, sector compliance, tier rules, Reject changes,
 * stretch plan + conflict behavior, and research-card coverage.
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

let failures = [];
let checks = 0;
const seen = {}; // risk -> observed ranges
function fail(msg) { if (failures.length < 50) failures.push(msg); }
function ok(cond, msg) { checks++; if (!cond) fail(msg); }

function checkPlan(label, risk, sectors, plan) {
  const rules = P.RISK_RULES[risk];
  const h = plan.holdings;
  const sum = h.reduce((a, r) => a + r.pct, 0);
  const etf = h.filter((r) => r.type === "ETF").reduce((a, r) => a + r.pct, 0);
  const cos = h.filter((r) => r.type === "Company");
  ok(sum === 100, `${label}: sum ${sum}`);
  ok(h.every((r) => Number.isInteger(r.pct) && r.pct >= 1), `${label}: non-integer or <1 weight`);
  ok(etf >= rules.etfMin && etf <= rules.etfMax, `${label}: ETF ${etf}% outside ${rules.etfMin}–${rules.etfMax}`);
  ok(cos.length >= rules.coMin && cos.length <= rules.coMax, `${label}: ${cos.length} companies outside ${rules.coMin}–${rules.coMax}`);
  ok(cos.every((c) => c.pct <= rules.coMaxPct), `${label}: company over ${rules.coMaxPct}% cap`);
  ok(new Set(h.map((r) => r.ticker)).size === h.length, `${label}: duplicate ticker`);
  ok(h.filter((r) => r.type === "ETF").every((r) => P.ETF_UNIVERSE[r.ticker]), `${label}: unknown ETF`);
  ok(cos.every((c) => UNIVERSE.has(c.ticker)), `${label}: company outside universe`);
  // sector compliance
  const wanted = sectors.includes("none") ? [] : sectors;
  if (wanted.length) {
    const inPool = P.COMPANY_UNIVERSE.filter((c) => wanted.includes(c.sector)).length;
    const outside = cos.filter((c) => !wanted.includes(UNIVERSE.get(c.ticker).sector));
    ok(outside.every((c) => c.outsideSectors), `${label}: unflagged out-of-sector company`);
    if (outside.length) {
      ok(inPool < rules.coMin, `${label}: filled from broad list although sector pool (${inPool}) was big enough`);
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
  const growthShare = tiers.filter((t) => t === "Growth" || t === "Aggressive growth").length / tiers.length;
  if (risk === "High" && !swapped) ok(growthShare >= 0.4 && growthShare <= 0.6, `${label}: High growth share ${growthShare.toFixed(2)}`);
  if (risk === "Extra high" && !swapped) ok(growthShare >= 0.65, `${label}: Extra high growth share ${growthShare.toFixed(2)}`);
  const s = (seen[risk] = seen[risk] || { etfMin: 999, etfMax: -1, coMin: 999, coMax: -1, maxCo: 0, maxGrowth: 0, minGrowth: 1, n: 0 });
  s.etfMin = Math.min(s.etfMin, etf); s.etfMax = Math.max(s.etfMax, etf);
  s.coMin = Math.min(s.coMin, cos.length); s.coMax = Math.max(s.coMax, cos.length);
  s.maxCo = Math.max(s.maxCo, ...cos.map((c) => c.pct));
  if (!wanted.length) { s.maxGrowth = Math.max(s.maxGrowth, growthShare); s.minGrowth = Math.min(s.minGrowth, growthShare); }
  s.n++;
  // research card for every company
  ok(cos.every((c) => R.companies[c.ticker] && R.companies[c.ticker].risks.length >= 2), `${label}: missing research card`);
}

let combos = 0;
for (const risk of RISKS) {
  for (const ret of RETURNS) {
    for (const sectors of COMBOS) {
      const sigs = [];
      for (const v of [0, 1, 2]) {
        combos++;
        const p = P.generate({ risk, return: ret, sectors, planVariant: v });
        const label = `${risk} | ${ret} | ${sectors.join("+")} | v${v}`;
        checkPlan(label + " | A", risk, sectors, p.planA);
        checkPlan(label + " | B", NEXT[risk], sectors, p.planB);
        ok(p.planB.stretchRisk === NEXT[risk], `${label}: stretch risk ${p.planB.stretchRisk}`);
        const lowRisk = ["Extra low", "Low", "Medium-low"].includes(risk);
        const expectConflict = (lowRisk && (ret === "12–20%" || ret === "20%+")) || (risk === "High-medium" && ret === "20%+");
        ok(p.conflict === expectConflict, `${label}: conflict ${p.conflict}`);
        ok(p.research.styleCousins.every((n) => ALLOWED_NAMES.has(n)), `${label}: manager name outside locked 12`);
        ok(/not copyable/.test(p.research.citadelMillenniumLine), `${label}: Citadel/Millennium line`);
        sigs.push(p.planA.holdings.map((h) => h.ticker + ":" + h.pct).join(","));
      }
      ok(new Set(sigs).size === 3, `${risk} | ${ret} | ${sectors.join("+")}: Reject variants not all different`);
    }
  }
}

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

// Ladder is monotonic: average ETF share falls and company count rises with risk (no-preference, variant 0)
let prevEtf = 101, prevCo = -1;
for (const risk of RISKS) {
  const p = P.generate({ risk, return: "8–12%", sectors: ["none"], planVariant: 0 });
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
    const p = P.generate({ risk: "Extra high", return: "20%+", sectors: ["Energy"], planVariant: v });
    const cos = p.planA.holdings.filter((h) => h.type === "Company");
    ok(cos.length >= 15, `thin-sector fill v${v}: only ${cos.length} companies`);
    ok(cos.filter((c) => c.sector === "Energy").length === 5, `thin-sector fill v${v}: did not use all Energy names first`);
    ok(cos.filter((c) => c.sector !== "Energy").every((c) => c.outsideSectors), `thin-sector fill v${v}: unflagged fill`);
    ok(p.planA.notes.some((n) => /broad list/.test(n)), `thin-sector fill v${v}: no note`);
    ok(p.planA.holdings.reduce((a, r) => a + r.pct, 0) === 100, `thin-sector fill v${v}: sum`);
  }
  U.length = 0; backup.forEach((c) => U.push(c));
}

console.log(`Combos: ${combos} (6 risks × 5 returns × ${COMBOS.length} sector choices × 3 variants), checks: ${checks}`);
console.log("Observed Plan A + B ranges by risk (ETF % | companies | max single company % | growth+aggressive share, no-preference):");
for (const r of RISKS) {
  const s = seen[r];
  const rule = P.RISK_RULES[r];
  console.log(`  ${r.padEnd(11)} ETF ${s.etfMin}–${s.etfMax}% (rule ${rule.etfMin}–${rule.etfMax}) | cos ${s.coMin}–${s.coMax} (rule ${rule.coMin}–${rule.coMax}) | max ${s.maxCo}% (cap ${rule.coMaxPct}) | growth share ${Math.round(s.minGrowth * 100)}–${Math.round(s.maxGrowth * 100)}%`);
}
if (failures.length) {
  console.log(`FAIL (${failures.length}${failures.length >= 50 ? "+" : ""}):`);
  failures.forEach((f) => console.log("  " + f));
  process.exit(1);
}
console.log("PASS");
