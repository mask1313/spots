// The "Global Football Press Translator" is delivered as a single self-contained
// HTML file at /app/frontend/public/index.html per product requirements.
// React is intentionally not mounted. This guard prevents any mount errors.
const rootEl = document.getElementById("root");
if (rootEl) {
  rootEl.innerHTML = "";
}
