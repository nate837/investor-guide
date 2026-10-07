/**
 * Investor Guide — Session 3 quiz persistence + UI helpers.
 * Owner: Nate. Educational only.
 */
(function () {
  var KEY = "ig_session2_answers";

  function load() {
    try {
      return JSON.parse(sessionStorage.getItem(KEY) || "{}");
    } catch (e) {
      return {};
    }
  }

  function save(partial) {
    var data = Object.assign(load(), partial);
    sessionStorage.setItem(KEY, JSON.stringify(data));
    return data;
  }

  function getAnswers() {
    return load();
  }

  function clearAnswers() {
    sessionStorage.removeItem(KEY);
  }

  function requireAnswers(fields) {
    var d = load();
    for (var i = 0; i < fields.length; i++) {
      var f = fields[i];
      if (f === "sectors") {
        if (!Array.isArray(d.sectors) || d.sectors.length === 0) return false;
      } else if (f === "disclaimerAck") {
        if (!d.disclaimerAck) return false;
      } else if (!d[f]) {
        return false;
      }
    }
    return true;
  }

  function bindOptions(opts) {
    var key = opts.key;
    var selector = opts.selector || ".option";
    var continueId = opts.continueId || "btn-continue";
    var multi = !!opts.multi;
    var nodes = document.querySelectorAll(selector);
    var cont = document.getElementById(continueId);
    var data = load();

    function updateContinue() {
      if (!cont) return;
      var d = load();
      var ok = multi
        ? Array.isArray(d[key]) && d[key].length > 0
        : !!d[key];
      cont.classList.toggle("is-disabled", !ok);
      if (cont.tagName === "BUTTON") cont.disabled = !ok;
    }

    nodes.forEach(function (el) {
      var val = el.getAttribute("data-value");
      if (multi) {
        var arr = data[key] || [];
        if (arr.indexOf(val) !== -1) el.classList.add("selected");
      } else if (data[key] === val) {
        el.classList.add("selected");
      }
    });
    updateContinue();

    nodes.forEach(function (el) {
      el.addEventListener("click", function (e) {
        e.preventDefault();
        var val = el.getAttribute("data-value");
        if (multi) {
          if (val === "none") {
            nodes.forEach(function (n) {
              n.classList.remove("selected");
            });
            el.classList.add("selected");
            save({ sectors: ["none"] });
          } else {
            var none = document.querySelector(selector + '[data-value="none"]');
            if (none) none.classList.remove("selected");
            el.classList.toggle("selected");
            var selected = [];
            nodes.forEach(function (n) {
              if (n.classList.contains("selected") && n.getAttribute("data-value") !== "none") {
                selected.push(n.getAttribute("data-value"));
              }
            });
            if (selected.length === 0 && none) {
              none.classList.add("selected");
              selected = ["none"];
            }
            save({ sectors: selected });
          }
        } else {
          nodes.forEach(function (n) {
            n.classList.remove("selected");
          });
          el.classList.add("selected");
          var patch = {};
          patch[key] = val;
          save(patch);
        }
        updateContinue();
      });
    });
  }

  function formatSectors(sectors) {
    if (!sectors || !sectors.length) return "—";
    if (sectors.indexOf("none") !== -1) return "No preference";
    return sectors.join(", ");
  }

  function fillAnswersSummary(el, label) {
    if (!el) return;
    var d = load();
    el.innerHTML =
      "<strong>" +
      (label || "Your answers") +
      ":</strong> Risk: " +
      (d.risk || "—") +
      " · Return: " +
      (d.return || "—") +
      " · Sectors: " +
      formatSectors(d.sectors);
  }

  function bindDisclaimerGate(opts) {
    opts = opts || {};
    var box = document.getElementById(opts.checkboxId || "ack");
    var btn = document.getElementById(opts.continueId || "btn-continue");
    if (!box || !btn) return;
    if (load().disclaimerAck) box.checked = true;
    function sync() {
      var ok = box.checked;
      btn.disabled = !ok;
      btn.classList.toggle("is-disabled", !ok);
      if (ok) save({ disclaimerAck: true });
      else save({ disclaimerAck: false });
    }
    box.addEventListener("change", sync);
    sync();
  }

  function nextPlanVariant() {
    var d = load();
    var v = typeof d.planVariant === "number" ? d.planVariant : 0;
    v = (v + 1) % 3;
    save({ planVariant: v });
    return v;
  }

  function getPlanVariant() {
    var d = load();
    return typeof d.planVariant === "number" ? d.planVariant : 0;
  }

  window.IG = {
    save: save,
    getAnswers: getAnswers,
    clearAnswers: clearAnswers,
    requireAnswers: requireAnswers,
    bindOptions: bindOptions,
    fillAnswersSummary: fillAnswersSummary,
    bindDisclaimerGate: bindDisclaimerGate,
    formatSectors: formatSectors,
    nextPlanVariant: nextPlanVariant,
    getPlanVariant: getPlanVariant,
  };
})();
