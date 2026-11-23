/**
 * Session 10B — searchable, filterable company list (companies.html).
 * Loads one precomputed static file (data/companies.json), then filters in the browser.
 * Shows 40 rows at a time; tap a row to open its auto card.
 */
(function () {
  var C = window.IGCompanyCard;
  var esc = C.esc;
  var PAGE = 40;
  var meta, all = [], shown = PAGE;
  var $ = function (id) { return document.getElementById(id); };

  function fill(sel, names, counts) {
    names.forEach(function (n, i) {
      var o = document.createElement("option");
      o.value = String(i);
      o.textContent = n + (counts ? " (" + (counts[i] || 0).toLocaleString() + ")" : "");
      sel.appendChild(o);
    });
  }

  function countBy(key, n) {
    var c = new Array(n).fill(0);
    all.forEach(function (r) { c[r[key]]++; });
    return c;
  }

  var state = { q: "", ex: "", size: "", risk: "", sec: "", list: "", sort: "big" };
  var QS = ["q", "ex", "size", "risk", "sec", "list", "sort"];

  function readUrl() {
    var p = new URLSearchParams(location.search);
    QS.forEach(function (k) { if (p.has(k)) state[k] = p.get(k); });
  }
  function writeUrl() {
    var p = new URLSearchParams();
    QS.forEach(function (k) { if (state[k] && !(k === "sort" && state[k] === "big")) p.set(k, state[k]); });
    var s = p.toString();
    history.replaceState(null, "", location.pathname + (s ? "?" + s : ""));
  }

  function matches(r) {
    if (state.ex !== "" && r.exchange !== +state.ex) return false;
    if (state.size !== "" && r.size !== +state.size) return false;
    if (state.risk !== "" && r.risk !== +state.risk) return false;
    if (state.sec !== "" && r.sector !== +state.sec) return false;
    if (state.list !== "" && !(r.indexes & +state.list)) return false;
    if (state.q) {
      var q = state.q.trim().toUpperCase();
      if (q && r._t.indexOf(q) !== 0 && r._n.indexOf(q) === -1 && (" " + r._o + " ").indexOf(" " + q) === -1) return false;
    }
    return true;
  }

  function sorter() {
    var q = state.q.trim().toUpperCase();
    var base;
    if (state.sort === "az") base = function (a, b) { return a.ticker < b.ticker ? -1 : 1; };
    else if (state.sort === "small") base = function (a, b) { return a.marketCapM - b.marketCapM; };
    else if (state.sort === "growth") base = function (a, b) { return nz(b.revenueGrowthPct) - nz(a.revenueGrowthPct); };
    else if (state.sort === "margin") base = function (a, b) { return nz(b.profitMarginPct) - nz(a.profitMarginPct); };
    else base = function (a, b) { return b.marketCapM - a.marketCapM; };
    if (!q) return base;
    /* exact ticker match first, then ticker starts-with, then the rest */
    return function (a, b) {
      var ra = a._t === q ? 0 : a._t.indexOf(q) === 0 ? 1 : 2;
      var rb = b._t === q ? 0 : b._t.indexOf(q) === 0 ? 1 : 2;
      return ra - rb || base(a, b);
    };
  }
  function nz(x) { return x == null ? -1e9 : x; }

  function rowHtml(r) {
    var g = r.noSales ? "No sales yet" : r.revenueGrowthPct == null ? "" : "Sales " + C.pct(r.revenueGrowthPct);
    return '<details class="cl-item" data-t="' + esc(r.ticker) + '"><summary class="cl-sum">' +
      '<span class="cl-top"><span class="cl-ticker">' + esc(r.ticker) + '</span><span class="cl-name">' + esc(r.name) + "</span></span>" +
      '<span class="cl-meta"><span class="rc-chip">' + esc(r.sizeName) + '</span><span class="rc-chip ' + (C.RISK_CLASS[r.riskName] || "") + '">' + esc(r.riskName) + " risk</span>" +
      '<span class="cl-small">' + esc(r.exchangeName) + " · " + esc(C.bigMoney(r.marketCapM)) + (g ? " · " + esc(g) : "") + "</span></span>" +
      '</summary><div class="cl-body"></div></details>';
  }

  var current = [];
  function draw(resetPage) {
    if (resetPage) shown = PAGE;
    current = all.filter(matches).sort(sorter());
    var list = current.slice(0, shown);
    $("cl-list-root").innerHTML = list.length ? list.map(rowHtml).join("") :
      '<section class="card"><p class="lede">No companies match. Try a shorter search or clear a filter.</p></section>';
    $("cl-count").textContent = "Showing " + list.length.toLocaleString() + " of " + current.length.toLocaleString() + " matching (" + all.length.toLocaleString() + " total).";
    $("cl-more").hidden = current.length <= shown;
    $("cl-more").textContent = "Show " + Math.min(PAGE, current.length - shown) + " more";
    writeUrl();
  }

  function onToggle(e) {
    var d = e.target;
    if (!d.classList || !d.classList.contains("cl-item") || !d.open) return;
    var body = d.querySelector(".cl-body");
    if (body.firstChild) return;
    var t = d.getAttribute("data-t");
    for (var i = 0; i < current.length; i++) {
      if (current[i].ticker === t) {
        body.innerHTML = C.html(current[i], { meta: meta, isPick: !!(current[i].flags & meta.flags.planPick) });
        break;
      }
    }
  }

  function wire() {
    var deb;
    $("cl-q").addEventListener("input", function (e) {
      clearTimeout(deb);
      deb = setTimeout(function () { state.q = e.target.value; draw(true); }, 120);
    });
    [["cl-ex", "ex"], ["cl-size", "size"], ["cl-risk", "risk"], ["cl-sec", "sec"], ["cl-list", "list"], ["cl-sort", "sort"]].forEach(function (p) {
      $(p[0]).value = state[p[1]];
      $(p[0]).addEventListener("change", function (e) { state[p[1]] = e.target.value; draw(true); });
    });
    $("cl-q").value = state.q;
    $("cl-more").addEventListener("click", function () { shown += PAGE; draw(false); });
    $("cl-reset").addEventListener("click", function () {
      state = { q: "", ex: "", size: "", risk: "", sec: "", list: "", sort: "big" };
      $("cl-q").value = "";
      ["cl-ex", "cl-size", "cl-risk", "cl-sec", "cl-list"].forEach(function (id) { $(id).value = ""; });
      $("cl-sort").value = "big";
      draw(true);
    });
    $("cl-list-root").addEventListener("toggle", onToggle, true);
  }

  function start(data) {
    meta = data.meta;
    all = data.rows.map(function (row) {
      var o = C.toObj(row, meta);
      o._t = o.ticker.toUpperCase();
      o._n = o.name.toUpperCase();
      o._o = (o.otherTickers || "").toUpperCase();
      return o;
    });
    var ex = meta.counts.byExchange;
    $("cl-lede").innerHTML = "<strong>" + all.length.toLocaleString() + "</strong> companies listed on " +
      meta.exchanges.map(function (e) { return esc(e) + " (" + (ex[e] || 0).toLocaleString() + ")"; }).join(", ") +
      ". Big and small, steady and risky. Numbers from SEC filings; prices as of " + esc(C.fmtDate(meta.priceDate)) + ".";
    fill($("cl-ex"), meta.exchanges, countBy("exchange", meta.exchanges.length));
    fill($("cl-size"), meta.sizes, countBy("size", meta.sizes.length));
    fill($("cl-risk"), meta.risks, countBy("risk", meta.risks.length));
    fill($("cl-sec"), meta.sectors, countBy("sector", meta.sectors.length));
    Object.keys(meta.indexes).forEach(function (k) {
      var o = document.createElement("option");
      o.value = String(meta.indexes[k]);
      o.textContent = k;
      $("cl-list").appendChild(o);
    });
    $("cl-sources").innerHTML = "Sources: company list from Nasdaq Trader symbol files and SEC <code>company_tickers_exchange.json</code>; key numbers from SEC EDGAR XBRL data; sector from each company's SEC industry (SIC) code; share price and market value from Nasdaq (delayed, " + esc(C.fmtDate(meta.priceDate)) +
      "); famous-list tags from " + Object.keys(meta.indexSources).map(function (k) { return esc(k) + ": " + esc(meta.indexSources[k]); }).join("; ") +
      ". Left out: ETFs and funds, warrants, units, rights, preferred shares, blank-check (SPAC) companies, and companies without enough SEC data (many foreign companies that file under other accounting rules). List built " + esc(C.fmtDate(meta.builtOn)) + ".";
    readUrl();
    wire();
    draw(true);
  }

  fetch("data/companies.json")
    .then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
    .then(start)
    .catch(function () {
      $("cl-lede").textContent = "The company list couldn't load. Check your connection and refresh. (If you opened the file directly from your computer, use a local web server instead.)";
    });
})();
