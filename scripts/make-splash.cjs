// Renders iOS PWA launch images (public/splash/*.png) from the brand mark. Run: node scripts/make-splash.cjs
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const SIZES = [
  [375, 667, 2], [414, 896, 2], [375, 812, 3], [390, 844, 3], [393, 852, 3],
  [428, 926, 3], [430, 932, 3], [820, 1180, 2], [834, 1194, 2], [1024, 1366, 2],
];
const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
const style = html.match(/<style>[\s\S]*?<\/style>/)[0].replace(/animation:[^;}]*[;]?/g, '');
const splash = html.match(/<div id="splash"[\s\S]*?<div class="bar"><i><\/i><\/div>/)[0].replace('<div class="bar"><i></i></div>', '') + '</div>';
(async () => {
  const b = await chromium.launch();
  const out = [];
  for (const [w, h, dpr] of SIZES) {
    const p = await b.newPage({ viewport: { width: w, height: h }, deviceScaleFactor: dpr });
    await p.setContent(`<html><head>${style}<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@600;800&display=swap" rel="stylesheet"></head><body style="margin:0">${splash}</body></html>`);
    await p.waitForTimeout(600);
    const file = `splash-${w * dpr}x${h * dpr}.jpg`;
    await p.screenshot({ path: path.join(__dirname, '..', 'public', 'splash', file), type: 'jpeg', quality: 82 });
    out.push(`    <link rel="apple-touch-startup-image" media="(device-width: ${w}px) and (device-height: ${h}px) and (-webkit-device-pixel-ratio: ${dpr}) and (orientation: portrait)" href="/splash/${file}" />`);
    await p.close();
  }
  await b.close();
  console.log(out.join('\n'));
})();
