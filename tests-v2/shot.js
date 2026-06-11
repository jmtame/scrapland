// Headless DEBUG-MAP painter (sim-only, no renderer): biomes, roads/rails,
// buildings, units. The real game renderer is WebGL now; this exists for
// behavior QA screenshots in node.
// Usage: node tests-v2/shot.js out.png [seed] [simMin] [x|god] [y] [scalePx]
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const { createCanvas } = require(process.env.HOME + '/buildenv/node_modules/@napi-rs/canvas');
import fs from 'fs';
import { createSim, step } from '../src/sim/sim.js';
import { WORLD, TILE } from '../src/sim/config.js';
import { wallSegOf } from '../src/sim/physics.js';

const out = process.argv[2] || '/tmp/shot.png';
const seed = +process.argv[3] || 42;
const simMin = +process.argv[4] || 0.5;
const xArg = process.argv[5] || 'god';
const yArg = +process.argv[6] || 0;
const span = +process.argv[7] || 1400; // world px shown (non-god)

const S = createSim(seed);
for (let i = 0, n = Math.round(simMin * 3600); i < n; i++) step(S);

const W = 1280, H = 800;
const cv = createCanvas(W, H);
const c = cv.getContext('2d');

let cx = WORLD.w / 2, cy = WORLD.h / 2, scale = Math.min(W / WORLD.w, H / WORLD.h);
if (xArg !== 'god') { cx = +xArg; cy = yArg; scale = W / span; }

c.fillStyle = '#0d2430';
c.fillRect(0, 0, W, H);
c.save();
c.translate(W / 2, H / 2);
c.scale(scale, scale);
c.translate(-cx, -cy);

// land
const CS = 64;
for (let y = 0; y < WORLD.h; y += CS) {
  for (let x = 0; x < WORLD.w; x += CS) {
    if (!S.world.onLand(x + 32, y + 32)) continue;
    const b = S.world.biomeAt(x + 32, y + 32);
    c.fillStyle = b === 'desert' ? '#b59a66' : b === 'jungle' ? '#4a5c30' : '#b9c7d1';
    c.fillRect(x, y, CS, CS);
  }
}
for (const L of S.world.lakes) {
  c.fillStyle = L.frozen ? '#dfeaf2' : '#23576b';
  c.beginPath(); c.ellipse(L.x, L.y, L.r, L.r * 0.84, 0, 0, 7); c.fill();
}
c.lineCap = 'round';
for (const rd of S.world.roads) {
  c.strokeStyle = '#5d5036';
  for (let i = 0; i < rd.pts.length - 1; i++) {
    if (Math.min(rd.fade[i], rd.fade[i + 1]) <= 0.02) continue;
    c.lineWidth = rd.w;
    c.beginPath();
    c.moveTo(rd.pts[i].x, rd.pts[i].y);
    c.lineTo(rd.pts[i + 1].x, rd.pts[i + 1].y);
    c.stroke();
  }
}
for (const rl of S.world.rails) {
  c.strokeStyle = '#6b5f4e';
  c.lineWidth = 24;
  c.beginPath();
  rl.pts.forEach((p, i) => (i ? c.lineTo(p.x, p.y) : c.moveTo(p.x, p.y)));
  c.stroke();
}
for (const b of S.world.boulders) {
  c.fillStyle = '#787e84';
  c.beginPath(); c.arc(b.x, b.y, b.r, 0, 7); c.fill();
}
for (const m of S.world.monuments) {
  c.strokeStyle = '#caa24a';
  c.lineWidth = 6 / scale;
  c.beginPath(); c.arc(m.x, m.y, m.r, 0, 7); c.stroke();
}
// buildings
for (const [k, s] of S.structures) {
  const [gx, gy] = k.split(',').map(Number);
  c.fillStyle = '#6e5128';
  c.fillRect(gx * TILE, gy * TILE, TILE, TILE);
}
for (const [k, w] of S.walls) {
  const seg = wallSegOf(k, w);
  c.strokeStyle = w.type === 'door' ? '#d8b65e' : '#3a3226';
  c.lineWidth = 8;
  c.beginPath(); c.moveTo(seg[0], seg[1]); c.lineTo(seg[2], seg[3]); c.stroke();
}
for (const [k, d] of S.deploys) {
  const [gx, gy] = k.split(',').map(Number);
  c.fillStyle = d.type === 'cupboard' ? '#c89d48' : d.type === 'turret' ? '#5fc8e0' : '#8a6230';
  c.beginPath(); c.arc(gx * TILE + 32, gy * TILE + 32, 14, 0, 7); c.fill();
}
// actors
for (const u of S.units) {
  if (u.dead || u.eliminated) continue;
  c.fillStyle = u.col;
  c.beginPath(); c.arc(u.x, u.y, 10, 0, 7); c.fill();
}
for (const a of S.animals) {
  if (a.dead) continue;
  c.fillStyle = '#5e4730';
  c.beginPath(); c.arc(a.x, a.y, a.r * 0.7, 0, 7); c.fill();
}
c.restore();

fs.writeFileSync(out, await cv.encode('png'));
console.log('wrote', out, '| t=' + S.t.toFixed(0) + 's seed=' + seed);
