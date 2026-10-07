/**
 * Session 6 watchlist. Reads the locked plan generator; does not change it.
 * Prices come only from js/eod-snapshot.js (a real Yahoo daily-bar fetch).
 * List persists in the same sessionStorage object as the quiz (ig_session2_answers.watchlist).
 */
(function () {
  var MAX = 12;

  function esc(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function nameFor(ticker) {
    if (!window.IGPlan) return "";
    var etf = IGPlan.ETF_UNIVERSE && IGPlan.ETF_UNIVERSE[ticker];
    if (etf && etf.name) return etf.name;
    var companies = IGPlan.COMPANY_UNIVERSE || [];
    for (var i = 0; i < companies.length; i++) {
      if (companies[i].ticker === ticker) return companies[i].name;
    }
    return "";
  }

  function knownSymbols() {
    var set = {};
    if (window.IGPlan) {
      var etfs = IGPlan.ETF_UNIVERSE || {};
      Object.keys(etfs).forEach(function (t) {
        set[t] = true;
      });
      (IGPlan.COMPANY_UNIVERSE || []).forEach(function (c) {
        set[c.ticker] = true;
      });
    }
    if (window.IGEod && IGEod.quotes) {
      Object.keys(IGEod.quotes).forEach(function (t) {
        set[t] = true;
      });
    }
    return Object.keys(set).sort();
  }

  function planTickers() {
    if (!window.IG || !window.IGPlan) return null;
    if (!IG.requireAnswers(["disclaimerAck", "risk", "return", "sectors"])) return null;
    var plan = IGPlan.generate(IG.getAnswers());
    var out = [];
    (plan.planA.holdings || []).forEach(function (h) {
      if (h && h.ticker && out.indexOf(h.ticker) === -1) out.push(h.ticker);
    });
    return out.slice(0, MAX);
  }

  function loadList() {
    var data = IG.getAnswers();
    if (Array.isArray(data.watchlist)) return data.watchlist.slice(0, MAX);
    var seeded = planTickers();
    if (seeded && seeded.length) {
      IG.save({ watchlist: seeded });
      return seeded;
    }
    // Do not persist an empty list yet, so a plan finished later can still seed.
    return [];
  }

  function saveList(list) {
    var clean = [];
    list.forEach(function (t) {
      t = String(t || "").trim().toUpperCase();
      if (!t || clean.indexOf(t) !== -1) return;
      if (clean.length >= MAX) return;
      clean.push(t);
    });
    IG.save({ watchlist: clean });
    return clean;
  }

  function money(n) {
    return "$" + Number(n).toFixed(2);
  }

  function historyUrl(yahooSymbol) {
    return "https://finance.yahoo.com/quote/" + encodeURIComponent(yahooSymbol) + "/history";
  }

  function chartUrl(yahooSymbol) {
    return (
      "https://query1.finance.yahoo.com/v8/finance/chart/" +
      encodeURIComponent(yahooSymbol) +
      "?interval=1d&range=10d"
    );
  }

  function render(list) {
    var root = document.getElementById("wl-list");
    var stamp = document.getElementById("wl-stamp");
    var count = document.getElementById("wl-count");
    var select = document.getElementById("wl-add");
    var addBtn = document.getElementById("wl-add-btn");
    var seedBtn = document.getElementById("wl-seed");
    var seedNote = document.getElementById("wl-seed-note");
    if (!root || !window.IGEod) return;

    var eod = IGEod;
    if (stamp) {
      stamp.innerHTML =
        "<strong>As of " +
        esc(eod.sessionDate) +
        " session close</strong> (prior completed day, not today). " +
        "Yahoo Finance daily-bar timestamp <strong>" +
        esc(eod.barTimestampUtc) +
        "</strong> (" +
        esc(eod.barTimestampEt) +
        "), which is the start of that daily candle. The number shown is that candle’s close. " +
        "Snapshot fetched <strong>" +
        esc(eod.fetchedAtEt) +
        "</strong>. Delayed / educational — <strong>not a live quote</strong>.";
    }
    if (count) count.textContent = list.length + " of " + MAX;

    if (!list.length) {
      root.innerHTML =
        '<p class="lede">No tickers yet. Add one below, or seed from your current plan if you have finished the quiz.</p>';
    } else {
      var html = "";
      list.forEach(function (ticker) {
        var q = eod.quotes[ticker];
        var name = nameFor(ticker);
        var priceHtml;
        var asofHtml;
        var sourceHtml;
        if (q && typeof q.close === "number") {
          priceHtml = '<p class="wl-price">' + esc(money(q.close)) + " " + esc(q.currency || "USD") + "</p>";
          asofHtml =
            '<p class="wl-asof">As of ' +
            esc(eod.sessionDate) +
            " close · bar " +
            esc(eod.barTimestampUtc) +
            "</p>";
          sourceHtml =
            '<p class="wl-source">Source: <a class="source-link" href="' +
            esc(historyUrl(q.yahooSymbol)) +
            '" rel="noopener noreferrer">Yahoo Finance history</a>' +
            " · feed <a class=\"source-link\" href=\"" +
            esc(chartUrl(q.yahooSymbol)) +
            '" rel="noopener noreferrer">daily chart</a> (delayed EOD)</p>';
        } else {
          priceHtml = '<p class="wl-price wl-missing">No delayed price on file</p>';
          asofHtml = '<p class="wl-asof">Not invented. This snapshot has no close for this symbol.</p>';
          sourceHtml = '<p class="wl-source">Source: none — price omitted on purpose.</p>';
        }
        html +=
          '<article class="wl-row">' +
          '<div class="wl-main">' +
          '<p class="wl-ticker">' +
          esc(ticker) +
          "</p>" +
          '<p class="wl-name">' +
          esc(name || "Name not in the educational universe") +
          "</p>" +
          priceHtml +
          asofHtml +
          sourceHtml +
          "</div>" +
          '<button type="button" class="btn btn-secondary wl-remove" data-ticker="' +
          esc(ticker) +
          '">Remove</button>' +
          "</article>";
      });
      root.innerHTML = html;
    }

    if (select) {
      var current = {};
      list.forEach(function (t) {
        current[t] = true;
      });
      var opts = '<option value="">Choose a ticker</option>';
      knownSymbols().forEach(function (t) {
        if (current[t]) return;
        var n = nameFor(t);
        opts +=
          '<option value="' +
          esc(t) +
          '">' +
          esc(t) +
          (n ? " — " + esc(n) : "") +
          "</option>";
      });
      select.innerHTML = opts;
      select.disabled = list.length >= MAX;
    }
    if (addBtn) addBtn.disabled = list.length >= MAX;

    var seeded = planTickers();
    if (seedBtn) {
      seedBtn.disabled = !seeded || !seeded.length;
    }
    if (seedNote) {
      seedNote.textContent = seeded
        ? "Current plan A tickers: " + seeded.join(", ") + "."
        : "No saved plan in this tab yet. Finish Welcome → Plan, then come back to seed.";
    }

    root.querySelectorAll(".wl-remove").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var t = btn.getAttribute("data-ticker");
        render(saveList(list.filter(function (x) { return x !== t; })));
      });
    });
  }

  function init() {
    var list = loadList();
    render(list);

    var form = document.getElementById("wl-form");
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        var select = document.getElementById("wl-add");
        var ticker = select && select.value ? select.value : "";
        if (!ticker) return;
        var cur = loadList();
        if (cur.length >= MAX || cur.indexOf(ticker) !== -1) return;
        if (!IGEod.quotes[ticker]) return;
        cur.push(ticker);
        render(saveList(cur));
      });
    }

    var seedBtn = document.getElementById("wl-seed");
    if (seedBtn) {
      seedBtn.addEventListener("click", function () {
        var seeded = planTickers();
        if (!seeded) return;
        render(saveList(seeded));
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
