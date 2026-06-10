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

let failed = 0;
try {
  const code = fs.readFileSync(path.join(__dirname, '..', 'dist', 'game.js'), 'utf8');
  // run the IIFE bundle
  (0, eval)(code);
  // pump frames: advance fake time so the accumulator runs sim ticks
  let t = 1000;
  for (let f = 0; f < 240; f++) {
    t += 16.7;
    const fns = rafQueue.splice(0);
    if (!fns.length) throw new Error('no rAF scheduled at frame ' + f);
    for (const fn of fns) fn(t);
  }
  console.log('PASS client smoke: 240 frames (~4 s) rendered without exceptions');
} catch (e) {
  failed = 1;
  console.error('FAIL client smoke:', e.message);
  console.error((e.stack || '').split('\n').slice(1, 6).join('\n'));
}
process.exit(failed);
