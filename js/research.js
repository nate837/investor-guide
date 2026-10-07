/**
 * Session 9 deeper research cards. Reads the current plan (or the whole company list in Library view).
 * Every business line and risk comes from the company's latest 10-K (Item 1 / Item 1A), with the filing date cited.
 * No live data, no buy/sell calls, no invented numbers.
 */
(function () {
  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  var DATA = window.IG_RESEARCH_DATA;
  var TIER_ORDER = ["Defensive", "Steady", "Growth", "Aggressive growth"];
  var TIER_FIT = {
    Defensive: "Pulled first at Extra low and Low risk. Also used as steady anchors higher up.",
    Steady: "Core of Medium-low and High-medium plans, and the steady half of High plans.",
    Growth: "Added from Medium-low (one or two) up; a big share of High and Extra high plans.",
    "Aggressive growth": "Only in High and Extra high plans, in the Satellite sleeve. Biggest swings.",
  };
  var TIER_CLASS = { Defensive: "t-def", Steady: "t-steady", Growth: "t-growth", "Aggressive growth": "t-aggr" };

  function edgarUrl(cik, type) {
    return "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=" + cik + (type ? "&type=" + type : "") + "&dateb=&owner=include&count=40";
  }

  function fmtDate(iso) {
    var m = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var p = iso.split("-");
    return m[parseInt(p[1], 10) - 1] + " " + parseInt(p[2], 10) + ", " + p[0];
  }

  function card(t, where) {
    var c = DATA.companies[t];
    if (!c) {
      return '<section class="card rc-card"><h3 class="rc-ticker">' + esc(t) + '</h3><p class="note">No verified research data. Search EDGAR and the company\'s official IR site.</p></section>';
    }
    var k = c.tenK;
    var html = '<section class="card rc-card" id="rc-' + esc(t.replace(".", "-")) + '">';
    if (where) html += '<p class="plan-label">' + esc(where) + "</p>";
    html += '<h3 class="rc-ticker">' + esc(t) + ' <span class="rc-name">' + esc(c.name) + "</span></h3>";
    html += '<p class="rc-chips"><span class="rc-chip">' + esc(c.sector) + '</span><span class="rc-chip ' + TIER_CLASS[c.tier] + '">' + esc(c.tier) + "</span></p>";

    html += '<h4 class="rc-h">Why this safety tier</h4><p class="rc-p">' + esc(c.tierWhy) + '</p><p class="note">' + esc(TIER_FIT[c.tier]) + "</p>";
    html += '<h4 class="rc-h">What the business does</h4><p class="rc-p">' + esc(c.business) + "</p>";
    html += '<h4 class="rc-h">Key risks <span class="rc-src">from its 10-K, Item 1A · filed ' + esc(fmtDate(k.filed)) + "</span></h4>";
    html += '<ul class="research-list">' + c.risks.map(function (r) { return "<li>" + esc(r) + "</li>"; }).join("") + "</ul>";

    html += '<details class="rc-more"><summary>What to check next</summary><ul class="research-list">' +
      "<li><strong>Start here:</strong> " + esc(c.checkFirst) + "</li>" +
      "<li><strong>Segments:</strong> the segment note in the 10-K shows which parts of the business make the money.</li>" +
      "<li><strong>Margins:</strong> gross and operating margin trends in MD&amp;A (Item 7). Are they rising or shrinking?</li>" +
      "<li><strong>Debt:</strong> total debt and when it comes due (balance sheet and the debt note).</li>" +
      "<li><strong>Guidance:</strong> the latest quarterly earnings release (an 8-K, usually Exhibit 99.1) and the IR site.</li>" +
      "<li><strong>What changed:</strong> the newest 10-Q, and any 8-Ks filed since this 10-K.</li>" +
      "</ul></details>";

    html += '<div class="rc-links">';
    if (k.url) html += '<a class="btn btn-secondary" target="_blank" rel="noopener" href="' + esc(k.url) + '">Latest 10-K (filed ' + esc(fmtDate(k.filed)) + ")</a>";
    html += '<a class="btn btn-ghost" target="_blank" rel="noopener" href="' + esc(edgarUrl(c.cik, "10-K")) + '">All 10-K filings</a>';
    html += '<a class="btn btn-ghost" target="_blank" rel="noopener" href="' + esc(edgarUrl(c.cik, "")) + '">All EDGAR filings</a>';
    if (c.ir) html += '<a class="btn btn-ghost" target="_blank" rel="noopener" href="' + esc(c.ir) + '">Official investor relations</a>';
    html += "</div>";
    if (!c.ir) html += "<p class=\"note\">IR link not verified (the site blocked our automated check). Search the company's official investor-relations site.</p>";
    html += '<p class="note">SEC CIK ' + esc(c.cik) + " · 10-K for the period ending " + esc(fmtDate(k.period)) + (k.filerCik !== c.cik ? " (filed under CIK " + esc(k.filerCik) + ")" : "") + "</p>";
    if (c.note) html += '<p class="note">' + esc(c.note) + "</p>";
    html += "</section>";
    return html;
  }

  function intro(text) {
    return '<section class="card"><p class="lede">' + text + '</p><p class="note">Reading lists, not buy or sell calls. Educational only. Data verified ' + esc(DATA.verifiedOn) + ".</p></section>";
  }

  function render(root, plan) {
    var a = plan.planA.holdings.filter(function (h) { return h.type !== "ETF"; }).map(function (h) { return h.ticker; });
    var b = plan.planB.holdings.filter(function (h) { return h.type !== "ETF"; }).map(function (h) { return h.ticker; });
    var all = [];
    a.concat(b).forEach(function (t) { if (all.indexOf(t) < 0) all.push(t); });
    all.sort(function (x, y) {
      var cx = DATA.companies[x], cy = DATA.companies[y];
      return (cx ? TIER_ORDER.indexOf(cx.tier) : 9) - (cy ? TIER_ORDER.indexOf(cy.tier) : 9);
    });
    var etfs = [];
    plan.planA.holdings.concat(plan.planB.holdings).forEach(function (h) {
      if (h.type === "ETF" && etfs.indexOf(h.ticker + " · " + h.name) < 0) etfs.push(h.ticker + " · " + h.name);
    });

    var html = intro("<strong>" + all.length + "</strong> compan" + (all.length === 1 ? "y" : "ies") + " in this plan (A and B), safest tier first. Each card: safety tier and why, what the business does, key risks from its latest 10-K, and what to check next.");
    html += '<div class="actions rc-switch"><a class="btn btn-ghost" href="research.html?view=all">See all ' + Object.keys(DATA.companies).length + " companies</a></div>";
    all.forEach(function (t) {
      var where = [a.indexOf(t) >= 0 ? "Plan A" : "", b.indexOf(t) >= 0 ? "Plan B" : ""].filter(Boolean).join(" · ");
      html += card(t, where);
    });
    html += '<section class="card"><p class="plan-label">ETFs in this plan</p><ul class="research-list">';
    etfs.forEach(function (e) { html += "<li>" + esc(e) + "</li>"; });
    html += "</ul><p class=\"note\">For ETFs, read the issuer's official fact sheet (Vanguard, iShares, SPDR, Schwab).</p></section>";
    html += window.IGRender.researchHtml(plan.research);
    root.innerHTML = html;
  }

  /* Library view: every company in the app's list, filterable by tier and sector. */
  function renderLibrary(root) {
    var tickers = Object.keys(DATA.companies);
    var sectors = [];
    tickers.forEach(function (t) { var s = DATA.companies[t].sector; if (sectors.indexOf(s) < 0) sectors.push(s); });
    var state = { tier: "All", sector: "All" };

    function counts() {
      var c = {};
      tickers.forEach(function (t) { var x = DATA.companies[t].tier; c[x] = (c[x] || 0) + 1; });
      return TIER_ORDER.map(function (t) { return c[t] + " " + t; }).join(" · ");
    }

    function draw() {
      var list = tickers.filter(function (t) {
        var c = DATA.companies[t];
        return (state.tier === "All" || c.tier === state.tier) && (state.sector === "All" || c.sector === state.sector);
      });
      list.sort(function (x, y) {
        var d = TIER_ORDER.indexOf(DATA.companies[x].tier) - TIER_ORDER.indexOf(DATA.companies[y].tier);
        return d || x.localeCompare(y);
      });
      document.getElementById("rc-count").textContent = list.length + " shown";
      document.getElementById("rc-list").innerHTML = list.map(function (t) { return card(t, ""); }).join("");
      Array.prototype.forEach.call(root.querySelectorAll("[data-tier]"), function (b) {
        b.classList.toggle("selected", b.getAttribute("data-tier") === state.tier);
        b.setAttribute("aria-pressed", b.getAttribute("data-tier") === state.tier ? "true" : "false");
      });
    }

    var html = intro("All <strong>" + tickers.length + "</strong> companies the plans can pick: " + esc(counts()) + ". Lower-risk plans pull from the safer tiers; higher-risk plans pull more from Growth and Aggressive growth.");
    html += '<section class="card rc-filters"><p class="plan-label">Filter</p><div class="rc-tier-btns" role="group" aria-label="Safety tier">';
    ["All"].concat(TIER_ORDER).forEach(function (t) {
      html += '<button type="button" class="option rc-filter" data-tier="' + esc(t) + '">' + esc(t) + "</button>";
    });
    html += '</div><label class="rc-sector-label" for="rc-sector">Sector</label><select id="rc-sector" class="rc-select"><option value="All">All sectors</option>';
    sectors.forEach(function (s) { html += '<option value="' + esc(s) + '">' + esc(s) + "</option>"; });
    html += '</select><p class="note" id="rc-count"></p></section><div id="rc-list"></div>';
    root.innerHTML = html;
    Array.prototype.forEach.call(root.querySelectorAll("[data-tier]"), function (b) {
      b.addEventListener("click", function () { state.tier = b.getAttribute("data-tier"); draw(); });
    });
    document.getElementById("rc-sector").addEventListener("change", function (e) { state.sector = e.target.value; draw(); });
    draw();
  }

  window.IGResearch = { render: render, renderLibrary: renderLibrary, card: card };
})();
