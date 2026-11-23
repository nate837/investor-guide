/**
 * Session 10B — auto-built company cards (key numbers from SEC EDGAR XBRL data).
 * Used by companies.html (the big list) and research.html (smaller, riskier plan picks).
 * Every number gets a one-line plain-English meaning. No buy or sell calls.
 */
(function () {
  function esc(s) {
    return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  var MON = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  function fmtDate(iso) {
    if (!iso) return "";
    var p = iso.split("-");
    return MON[parseInt(p[1], 10) - 1] + " " + parseInt(p[2], 10) + ", " + p[0];
  }
  /* millions -> "$1.2 trillion" / "$350 million" */
  function bigMoney(m) {
    if (m == null) return "n/a";
    var neg = m < 0, a = Math.abs(m), t;
    if (a >= 1e6) t = (a / 1e6).toFixed(a >= 1e7 ? 1 : 2) + " trillion";
    else if (a >= 1e3) t = (a / 1e3).toFixed(a >= 1e5 ? 0 : 1) + " billion";
    else if (a >= 1) t = a.toFixed(a >= 100 ? 0 : 1) + " million";
    else t = Math.round(a * 1000) + " thousand";
    return (neg ? "−$" : "$") + t;
  }
  function pct(x) {
    return (x > 0 ? "+" : x < 0 ? "−" : "") + Math.abs(x).toFixed(Math.abs(x) < 10 ? 1 : 0) + "%";
  }
  function edgarUrl(cik) {
    return "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=" + cik + "&type=10-K&dateb=&owner=include&count=40";
  }
  function filingUrl(cik, accn) {
    return "https://www.sec.gov/Archives/edgar/data/" + cik + "/" + String(accn).replace(/-/g, "") + "/";
  }

  var SIZE_WORDS = {
    Mega: "Mega (worth $200 billion or more)",
    Large: "Large ($10–200 billion)",
    Mid: "Mid-size ($2–10 billion)",
    Small: "Small ($300 million–$2 billion)",
    Micro: "Micro (under $300 million)",
  };
  var RISK_CLASS = { Lower: "t-def", Medium: "t-steady", Higher: "t-growth", "Very high": "t-aggr" };

  /* Turn a compact row into a named object. meta = the file's meta block. */
  function toObj(row, meta) {
    var o = {};
    meta.fields.forEach(function (f, i) { o[f] = row[i]; });
    o.exchangeName = meta.exchanges[o.exchange];
    o.sizeName = meta.sizes[o.size];
    o.riskName = meta.risks[o.risk];
    o.sectorName = meta.sectors[o.sector];
    o.industryName = meta.industries ? meta.industries[o.industry] : "";
    var F = meta.flags;
    o.deep = !!(o.flags & F.deepCard);
    o.noSales = !!(o.flags & F.noSales);
    o.bank = !!(o.flags & F.bankStyle);
    o.negEq = !!(o.flags & F.negativeEquity);
    o.listingWarn = !!(o.flags & F.listingWarning);
    o.losing = !!(o.flags & F.losingMoney);
    o.olderYear = !!(o.flags & F.olderYear);
    o.salesUnclear = !!(o.flags & F.salesUnclear);
    o.lists = [];
    if (meta.indexes) Object.keys(meta.indexes).forEach(function (k) { if (o.indexes & meta.indexes[k]) o.lists.push(k); });
    return o;
  }

  function peLine(c) {
    if (c.pe != null && c.pe > 0) {
      var v = c.pe >= 100 ? Math.round(c.pe) : c.pe.toFixed(1);
      var read = c.pe < 10 ? "Low: the market expects slow growth or sees extra risk." :
        c.pe <= 30 ? "A middle range for a profitable company." :
        c.pe <= 80 ? "High: buyers are paying up because they expect fast growth." :
        "Very high: tiny profits next to the price, so expectations are big and the price can swing a lot.";
      return { value: v, text: "You pay about $" + Math.round(c.pe).toLocaleString() + " for every $1 of yearly profit. " + read };
    }
    if (c.losing) return { value: "None", text: "The company lost money last year, so there is no profit to compare the price with." };
    return { value: "n/a", text: "Could not be worked out from the SEC data for this company." };
  }
  function growthLine(c) {
    if (c.noSales) return { value: "No sales", text: "No sales found in the standard SEC data. That is common for early-stage companies (for example, drug makers still in testing)." };
    if (c.salesUnclear) return { value: "n/a", text: "The sales figure in the SEC data looks like only part of the business (profit came out bigger than sales), so growth isn't shown. Check the income statement in the filing." };
    if (c.revenueGrowthPct == null) return { value: "n/a", text: "Needs two years of sales in the SEC data; only one was found." };
    var g = c.revenueGrowthPct;
    return {
      value: pct(g),
      text: (g >= 0 ? "Sales grew " : "Sales shrank ") + Math.abs(g).toFixed(Math.abs(g) < 10 ? 1 : 0) + "%" + " compared with the year before (" + bigMoney(c.revenueM) + " last year)." +
        (g > 60 ? " Very fast growth often slows down later." : g < -25 ? " A big drop like this is a warning sign worth reading about." : ""),
    };
  }
  function marginLine(c) {
    if (c.salesUnclear) return { value: "n/a", text: "Not shown, because the sales figure looks incomplete (see above)." };
    if (c.noSales || c.profitMarginPct == null) return { value: "n/a", text: "Needs both sales and profit numbers, and one is missing." };
    var m = c.profitMarginPct;
    if (Math.abs(m) > 999) return { value: m > 0 ? "Over +999%" : "Below −999%", text: "Sales are tiny next to its profit or loss, so this number isn't very useful yet." };
    var cents = Math.abs(Math.round(m));
    var amt = cents >= 100 ? "$" + (cents / 100).toFixed(2) : cents + "¢";
    return {
      value: pct(m),
      text: m >= 0 ? "Kept about " + amt + " of profit from each $1 of sales." : "Lost about " + amt + " for each $1 of sales.",
    };
  }
  function debtLine(c) {
    if (c.bank) return { value: c.debtM != null ? bigMoney(c.debtM) : "n/a", text: "Banks and lenders borrow as part of how they make money, so the usual debt yardstick doesn't fit well here." };
    if (c.negEq) return { value: c.debtM != null ? bigMoney(c.debtM) : "n/a", text: "The owners' stake is below zero on paper (it owes more than it owns), so debt-to-equity can't be used. That can come from losses or from big buybacks." };
    if (c.debtToEquity != null) {
      var d = c.debtToEquity;
      var read = d < 0.5 ? "Light borrowing." : d <= 1 ? "Moderate borrowing; usually comfortable." : d <= 2 ? "Fairly heavy borrowing." : "Heavy borrowing; bad years hit harder.";
      return { value: d.toFixed(2) + "×", text: "Debt is " + d.toFixed(2) + " times the owners' stake (debt-to-equity), about " + bigMoney(c.debtM) + " in total. " + read };
    }
    return { value: "Not found", text: "No standard debt figure in the SEC data. It may borrow little or nothing; the balance sheet in its latest filing will say." };
  }

  function riskReasons(c) {
    var r = ["Size: " + SIZE_WORDS[c.sizeName] + "."];
    if (c.losing) r.push("It lost money last year.");
    if (c.noSales) r.push("No sales yet in the SEC data.");
    if (!c.bank && (c.negEq || (c.debtToEquity != null && c.debtToEquity > 2))) r.push("Heavy debt for its size.");
    if (c.price != null && c.price < 5) r.push("Share price under $5 (low-priced stocks tend to swing more).");
    if (c.listingWarn) r.push("Nasdaq lists it as behind on a listing rule (for example, late filings or a low price).");
    if (c.revenueGrowthPct != null && (c.revenueGrowthPct > 60 || c.revenueGrowthPct < -25)) r.push("Sales jumped or fell a lot in one year.");
    if (r.length === 1) r.push(c.sizeName === "Mega" || c.sizeName === "Large" ? "Big, profitable, and not heavily in debt." : "Profitable, without heavy debt.");
    return r;
  }

  function planFit(c, isPick) {
    if (c.deep) return "This company also has a deep research card. Plans can pick it at the risk levels its safety tier allows.";
    if (isPick) return "Plans can use it only at High and Extra high risk, as a small “Smaller & riskier” slice.";
    return "In the list for learning and comparing. Plans don't pick it.";
  }

  /* Full auto card. opts: { where, isPick, meta, open } */
  function html(c, opts) {
    opts = opts || {};
    var meta = opts.meta || {};
    var rows = [["P/E (price ÷ profit)", peLine(c)], ["Sales growth (year over year)", growthLine(c)], ["Profit margin", marginLine(c)], ["Debt level", debtLine(c)]];
    var h = '<section class="card rc-card ac-card" id="ac-' + esc(String(c.ticker).replace(/\./g, "-")) + '">';
    if (opts.where) h += '<p class="plan-label">' + esc(opts.where) + "</p>";
    h += '<h3 class="rc-ticker">' + esc(c.ticker) + ' <span class="rc-name">' + esc(c.name) + "</span></h3>";
    h += chips(c);
    h += '<p class="note ac-sub">' + esc(c.exchangeName) + " · market value about " + esc(bigMoney(c.marketCapM)) + " · share price $" + esc(c.price != null ? c.price.toFixed(2) : "n/a") +
      (c.industryName ? " · SEC industry: " + esc(cap(c.industryName)) : "") + "</p>";
    h += '<h4 class="rc-h">Key numbers <span class="rc-src">auto card · fiscal year ending ' + esc(fmtDate(c.fiscalYearEnd)) + "</span></h4>";
    h += '<dl class="ac-nums">';
    rows.forEach(function (r) {
      h += '<div class="ac-num"><dt>' + esc(r[0]) + '</dt><dd><strong class="ac-val">' + esc(r[1].value) + "</strong> " + esc(r[1].text) + "</dd></div>";
    });
    h += "</dl>";
    h += '<h4 class="rc-h">Why this risk level: ' + esc(c.riskName) + '</h4><ul class="research-list">' + riskReasons(c).map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul>";
    h += '<p class="note">' + esc(planFit(c, opts.isPick)) + "</p>";
    if (c.lists && c.lists.length) h += '<p class="note">Part of: ' + esc(c.lists.join(", ")) + ".</p>";
    if (c.otherTickers) h += '<p class="note">Other share classes: ' + esc(c.otherTickers) + ".</p>";
    h += '<div class="rc-links">';
    if (c.deep) h += '<a class="btn btn-secondary" href="research.html?view=all&amp;t=' + encodeURIComponent(c.ticker) + '">Deep research card</a>';
    h += '<a class="btn btn-ghost" target="_blank" rel="noopener" href="' + esc(filingUrl(c.filingCik || c.cik, c.accession)) + '">Source filing on SEC EDGAR</a>';
    h += '<a class="btn btn-ghost" target="_blank" rel="noopener" href="' + esc(edgarUrl(c.cik)) + '">All 10-K filings</a>';
    h += "</div>";
    h += '<p class="note ac-asof">As of: sales, profit and profit per share for the fiscal year ending ' + esc(fmtDate(c.fiscalYearEnd)) +
      (c.balanceSheetDate ? "; debt and owners' stake from the balance sheet dated " + esc(fmtDate(c.balanceSheetDate)) : "") +
      ". Source: SEC EDGAR XBRL data (CIK " + esc(c.cik) + (c.filingCik ? "; numbers from the company it replaced as parent, CIK " + esc(c.filingCik) + ", because the new parent has no full year filed yet" : "") + "). Share price and market value: Nasdaq, delayed, " + esc(fmtDate(meta.priceDate)) + " — not a live quote." +
      (c.olderYear ? " The newest full year in the SEC data is older than most, so these numbers may be out of date." : "") + "</p>";
    h += "</section>";
    return h;
  }
  function cap(s) {
    s = String(s).toLowerCase();
    return s.charAt(0).toUpperCase() + s.slice(1);
  }
  function chips(c) {
    var h = '<p class="rc-chips">';
    h += '<span class="rc-chip">' + esc(c.sizeName) + " company</span>";
    h += '<span class="rc-chip ' + (RISK_CLASS[c.riskName] || "") + '">Risk: ' + esc(c.riskName) + "</span>";
    h += '<span class="rc-chip">' + esc(c.sectorName) + "</span>";
    if (c.deep) h += '<span class="rc-chip t-def">Deep card</span>';
    return h + "</p>";
  }

  window.IGCompanyCard = { toObj: toObj, html: html, chips: chips, bigMoney: bigMoney, pct: pct, fmtDate: fmtDate, esc: esc, SIZE_WORDS: SIZE_WORDS, RISK_CLASS: RISK_CLASS };
})();
