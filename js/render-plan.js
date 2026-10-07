/**
 * Shared Plan / Reject screen renderer (Session 3 table; Session 9 tier mix + notes).
 * Holdings table: Ticker | Name | Type | Sleeve | % | Why | Source type
 */
(function () {
  function esc(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function holdingsTable(holdings) {
    if (!holdings || !holdings.length) {
      return '<p class="note">No holdings generated.</p>';
    }
    var html =
      '<div class="holdings-wrap"><table class="holdings-table">' +
      "<thead><tr>" +
      "<th>Ticker</th><th>Name</th><th>Type</th><th>Sleeve</th><th>%</th><th>Why</th><th>Source type</th>" +
      "</tr></thead><tbody>";
    var sum = 0;
    holdings.forEach(function (h) {
      sum += h.pct;
      html +=
        "<tr>" +
        '<td class="ticker">' +
        esc(h.ticker) +
        "</td>" +
        "<td>" +
        esc(h.name) +
        "</td>" +
        "<td>" +
        esc(h.type) +
        "</td>" +
        "<td>" +
        esc(h.sleeve) +
        "</td>" +
        '<td class="pct">' +
        esc(h.pct) +
        "%</td>" +
        "<td>" +
        esc(h.why) +
        "</td>" +
        '<td class="source">' +
        esc(h.sourceType) +
        "</td>" +
        "</tr>";
    });
    html +=
      '</tbody><tfoot><tr><td colspan="4"><strong>Total</strong></td><td class="pct"><strong>' +
      esc(sum) +
      "%</strong></td><td colspan=\"2\"></td></tr></tfoot></table></div>";
    return html;
  }

  function metaNote(meta) {
    if (!meta || !meta.rules) return "";
    return (
      '<p class="note holdings-meta">ETF sleeve ≈ <strong>' +
      esc(meta.etfPct) +
      "%</strong> (band " +
      esc(meta.rules.etfMin) +
      "–" +
      esc(meta.rules.etfMax) +
      "%). Companies: <strong>" +
      esc(meta.companyCount) +
      "</strong> (band " +
      esc(meta.rules.coMin) +
      "–" +
      esc(meta.rules.coMax) +
      ", max " +
      esc(meta.rules.coMaxPct) +
      "% each). No live prices.</p>"
    );
  }

  /* Session 9: plain-English notes when a sector was thin or a tier had to be swapped */
  function notesHtml(notes) {
    if (!notes || !notes.length) return "";
    return (
      '<ul class="note plan-notes">' +
      notes
        .map(function (n) {
          return "<li>" + esc(n) + "</li>";
        })
        .join("") +
      "</ul>"
    );
  }

  function tierMix(holdings) {
    var counts = {};
    holdings.forEach(function (h) {
      if (h.type === "Company" && h.tier) counts[h.tier] = (counts[h.tier] || 0) + 1;
    });
    var order = ["Defensive", "Steady", "Growth", "Aggressive growth"];
    var parts = order
      .filter(function (t) {
        return counts[t];
      })
      .map(function (t) {
        return counts[t] + " " + t;
      });
    return parts.length ? '<p class="note tier-mix"><strong>Company safety tiers:</strong> ' + esc(parts.join(" · ")) + "</p>" : "";
  }

  function rangesHtml(ranges) {
    return (
      '<div class="range-row" aria-label="Outcome ranges">' +
      '<div class="range-pill"><strong>Rougher</strong><span>' +
      esc(ranges.down) +
      "</span></div>" +
      '<div class="range-pill"><strong>Base path</strong><span>' +
      esc(ranges.base) +
      "</span></div>" +
      '<div class="range-pill"><strong>Stronger</strong><span>' +
      esc(ranges.up) +
      "</span></div>" +
      "</div>"
    );
  }

  function researchHtml(research) {
    var html = '<section class="card research-block">';
    html += '<p class="plan-label">Research block</p>';
    html += "<h2>How this plan was framed</h2>";

    html += '<h3>Style cousins</h3><ul class="research-list">';
    research.styleCousins.forEach(function (c) {
      html += "<li>" + esc(c) + "</li>";
    });
    html += "</ul>";

    html += '<h3>Reports used</h3><ul class="research-list">';
    research.reportsUsed.forEach(function (r) {
      html += "<li>" + esc(r) + "</li>";
    });
    html += "</ul>";

    html += '<h3>Do not copy</h3><ul class="research-list">';
    research.doNotCopy.forEach(function (d) {
      html += "<li>" + esc(d) + "</li>";
    });
    html += "</ul>";

    html +=
      '<h3>Research burden</h3><p class="lede">' +
      esc(research.researchBurden) +
      "</p>";

    html +=
      '<h3>As-of / delayed (13F)</h3><p class="lede asof-note">' +
      esc(research.asOfDelayed) +
      "</p>";

    html +=
      '<p class="note citadel-line"><strong>' +
      esc(research.citadelMillenniumLine) +
      "</strong></p>";

    html +=
      '<p class="note">Banned sources not used: Reddit, TikTok, blogs, other funds, guaranteed-return calls, or treating 13F as a live buy list.</p>';
    html += "</section>";
    return html;
  }

  function renderPlanInto(root, plan, opts) {
    opts = opts || {};
    if (!root || !plan) return;

    var html = "";

    if (opts.banner) {
      html += '<div class="answers-chip alt-banner">' + esc(opts.banner) + "</div>";
    }

    /* Session 4: clear plan-page section separation (disclaimer / A / B / research) */
    html +=
      '<section class="card plan-disclaimer">' +
      '<p class="plan-label">Disclaimer</p>' +
      '<div class="disclaimer-box"><p>This Investor Guide is an educational tool for a college-application project. It is not personalized financial advice, not a recommendation to buy or sell anything, and not an offer from a broker or advisor. Markets can lose money. Past performance does not predict future results. If your return target conflicts with your risk level (for example, 20%+ at Extra low risk), the app will say that mix is unrealistic and still show the best plan for the risk you chose, plus an optional stretch plan that accepts much larger loss risk. You are responsible for any real-world decisions you make.</p></div>' +
      "</section>";

    html +=
      '<p class="note horizon-note"><strong>Horizon:</strong> ' +
      esc(plan.horizon) +
      " · " +
      esc(plan.educationalLabel) +
      "</p>";

    if (plan.conflict) {
      html +=
        '<div class="conflict-banner"><strong>This mix looks unrealistic.</strong> ' +
        "Your return target conflicts with your risk level. We refuse a fake “safe high return.” " +
        "Below: <strong>(A)</strong> best plan for the risk you chose, plus <strong>(B)</strong> an optional stretch that accepts much larger loss risk.</div>";
    }

    html +=
      '<section class="card plan-card-a"><p class="plan-label">' +
      esc(plan.planA.title) +
      " · consistent plan</p><h2>Holdings</h2>" +
      holdingsTable(plan.planA.holdings) +
      metaNote(plan.planA.meta) +
      tierMix(plan.planA.holdings) +
      notesHtml(plan.planA.notes) +
      '<p class="note"><strong>Why (plain English):</strong> ' +
      esc(plan.planA.why) +
      "</p>" +
      rangesHtml(plan.planA.ranges) +
      '<p class="note">Ranges are educational framing — not forecasts or guarantees. No live quotes shown.</p></section>';

    html +=
      '<section class="card plan-card-b"><p class="plan-label">' +
      esc(plan.planB.title) +
      " · stretch</p><h2>Stretch holdings</h2>" +
      holdingsTable(plan.planB.holdings) +
      metaNote(plan.planB.meta) +
      tierMix(plan.planB.holdings) +
      notesHtml(plan.planB.notes) +
      '<p class="note"><strong>Why:</strong> ' +
      esc(plan.planB.why) +
      "</p>" +
      rangesHtml(plan.planB.ranges) +
      "</section>";

    html += researchHtml(plan.research);

    root.innerHTML = html;
  }

  window.IGRender = {
    renderPlanInto: renderPlanInto,
    researchHtml: researchHtml,
    holdingsTable: holdingsTable,
  };
})();
