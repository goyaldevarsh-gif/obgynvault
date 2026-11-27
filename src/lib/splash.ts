/** Fades out the HTML splash (index.html) once the app has rendered, after a short minimum so it never flashes. */
const MIN_MS = 800;
const started = performance.now();

export function hideSplash() {
  const el = document.getElementById('splash');
  if (!el) return;
  const wait = Math.max(0, MIN_MS - (performance.now() - started));
  window.setTimeout(() => {
    el.classList.add('hide');
    window.setTimeout(() => el.remove(), 500);
  }, wait);
}
