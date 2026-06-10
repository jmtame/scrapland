// Headless screenshot harness: renders the real game renderer into a PNG.
// Usage: node tests-v2/shot.js out.png [seed] [simMin] [x|god] [y] [zoom] [w] [h]
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const { createCanvas } = require('/sessions/sharp-gifted-galileo/buildenv/node_modules/@napi-rs/canvas');
import fs from 'fs';

const out = process.argv[2] || '/tmp/shot.png';
const seed = +process.argv[3] || 42;
const simMin = +process.argv[4] || 0.5;
const xArg = process.argv[5] || 'player';
const yArg = +process.argv[6] || 0;
const zoom = +process.argv[7] || 1;
const W = +process.argv[8] || 1280, H = +process.argv[9] || 800;

// ---- DOM stubs (canvas-backed) ----
const g = globalThis;
g.document = {
  createElement: (tag) => {
    if (tag !== 'canvas') throw new Error('only canvas');
    const c = createCanvas(300, 150);
    return c;
  },
};
g.window = g;
if (!g.performance) g.performance = { now: () => Date.now() };

const { createSim, step } = await import('../src/sim/sim.js');
const { makeRenderer } = await import('../src/client/render/renderer.js');
const { makeCamera } = await import('../src/client/camera.js');

const S = createSim(seed);
S.ghost = true;
const ticks = Math.round(simMin * 60 * 60);
for (let i = 0; i < ticks; i++) step(S);

const canvas = createCanvas(W, H);
const ctx = canvas.getContext('2d');
const view = {
  canvas, ctx, VW: W, VH: H, DPR: 1, speed: 1,
  godView: xArg === 'god', debugPaths: process.env.DEBUG_PATHS === '1',
  mouseSX: W / 2, mouseSY: H / 2,
};

if (xArg !== 'god' && xArg !== 'player') { S.player.x = +xArg; S.player.y = yArg; }
const camera = makeCamera(S, view);
const renderer = makeRenderer(S, view, camera);
// settle camera/zoom
for (let i = 0; i < 90; i++) camera.update(1 / 60);
if (xArg !== 'god' && zoom !== 1) { camera.zoom = zoom; camera.update(0); }
// a few live frames so transient FX/ambience exist
for (let i = 0; i < 30; i++) step(S);
camera.update(1 / 60);
renderer.render(1 / 60);
renderer.render(1 / 60);

fs.writeFileSync(out, canvas.encode ? await canvas.encode('png') : canvas.toBuffer('image/png'));
console.log('wrote', out, W + 'x' + H, '| t=' + S.t.toFixed(0) + 's seed=' + seed, xArg === 'god' ? '(god view)' : `@${S.player.x | 0},${S.player.y | 0} z=${camera.zoom.toFixed(2)}`);
