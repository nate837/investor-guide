/**
 * Session 1 nav.js — superseded by app.js in Session 2.
 * Kept so old bookmarks do not 404; loads app.js helpers if present.
 */
(function () {
  if (!window.IG) {
    var s = document.createElement("script");
    s.src = "js/app.js";
    document.head.appendChild(s);
  }
})();
