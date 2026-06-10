// Client smoke test: stub DOM + 2D context, load the real bundle, run frames.
// Catches renderer/HUD crashes (undefined vars, bad state reads) headlessly.
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const ctxStub = () => new Proxy({}, {
  get(t, prop) {
    if (prop === 'canvas') return cnv();
    if (prop === 'createLinearGradient' || prop === 'createRadialGradient') return () => ({ addColorStop() {} });
    if (prop === 'createImageData') return (w, h) => ({ data: new Uint8ClampedArray(w * h * 4), width: w, height: h });
    if (prop === 'getImageData') return (x, y, w, h) => ({ data: new Uint8ClampedArray(w * h * 4) });
    if (prop === 'measureText') return () => ({ width: 10 });
    if (typeof prop === 'string' && /^(fillStyle|strokeStyle|lineWidth|lineCap|lineJoin|font|textAlign|globalAlpha|globalCompositeOperation|shadowColor|shadowBlur|imageSmoothingEnabled|imageSmoothingQuality)$/.test(prop)) return '#000';
    return () => {};
  },
  set() { return true; },
});

const made = {};
function el(id) {
  if (made[id]) return made[id];
  const children = [];
  const e = {
    id, children, style: {}, dataset: {}, classList: { add() {}, remove() {}, toggle() {}, contains: () => false },
    addEventListener() {}, appendChild(c) { children.push(c); }, querySelectorAll: () => [],
    set innerHTML(v) { this._html = v; }, get innerHTML() { return this._html || ''; },
    set textContent(v) { this._t = v; }, get textContent() { return this._t || ''; },
    getBoundingClientRect: () => ({ left: 0, top: 0, width: 1280, height: 800 }),
  };
  made[id] = e;
  return e;
}
function cnv() {
  return {
    width: 1280, height: 800, style: {},
    getContext: () => ctxStub(),
    addEventListener() {},
    getBoundingClientRect: () => ({ left: 0, top: 0 }),
  };
}

const rafQueue = [];
const g = globalThis;
g.window = g;
g.document = {
  getElementById: (id) => (id === 'game' ? (made.game || (made.game = cnv())) : el(id)),
  createElement: (tag) => (tag === 'canvas' ? cnv() : el('dyn' + Math.random())),
  querySelectorAll: () => [],
};
g.innerWidth = 1280; g.innerHeight = 800; g.devicePixelRatio = 1;
g.addEventListener = () => {};
g.requestAnimationFrame = (fn) => { rafQueue.push(fn); return rafQueue.length; };
g.setInterval = () => 0;
if (!g.performance) g.performance = { now: () => Date.now() };

// The renderer is now WebGL (three.js); node has no GL, so the expected
// behavior here is: sim boots, then start() fails cleanly with the WebGL
// message and NO unhandled exception. That still covers bundle parse + sim
// boot + the graceful-degradation path.
let failed = 0;
let sawWebglMsg = false;
const origErr = console.error;
console.error = (...a) => {
  if (String(a[0]).includes('SCRAPLAND boot failed')) sawWebglMsg = true;
  else origErr(...a);
};
try {
  const code = fs.readFileSync(path.join(__dirname, '..', 'dist', 'game.js'), 'utf8');
  (0, eval)(code);
  console.error = origErr;
  if (!sawWebglMsg) throw new Error('expected graceful WebGL-unavailable path in node');
  console.log('PASS client smoke: bundle parses, sim boots, WebGL fallback message shown');
} catch (e) {
  console.error = origErr;
  failed = 1;
  console.error('FAIL client smoke:', e.message);
  console.error((e.stack || '').split('\n').slice(1, 6).join('\n'));
}
process.exit(failed);
