// Client boot: canvas, fixed-step loop with accumulator, input wiring, HUD.
import { createSim, step } from '../sim/sim.js';
import { DT, WEAPONS } from '../sim/config.js';
import { makeRenderer } from './render/renderer.js';
import { bindInput } from './input.js';
import { makeHud } from './hud.js';
import { makeCamera } from './camera.js';

const canvas = document.getElementById('game');
const seed = (Math.random() * 1e9) >>> 0;
const S = createSim(seed);
S.ghost = true;

const view = {
  canvas, ctx: canvas.getContext('2d'),
  VW: innerWidth, VH: innerHeight, DPR: Math.min(2, devicePixelRatio || 1),
  speed: 1, godView: false, debugPaths: false,
  shakeX: 0, shakeY: 0,
};

function resize() {
  view.VW = innerWidth; view.VH = innerHeight;
  canvas.width = Math.round(view.VW * view.DPR);
  canvas.height = Math.round(view.VH * view.DPR);
  canvas.style.width = view.VW + 'px';
  canvas.style.height = view.VH + 'px';
  view.ctx.setTransform(view.DPR, 0, 0, view.DPR, 0, 0);
  view.ctx.imageSmoothingEnabled = true;
  view.ctx.imageSmoothingQuality = 'high';
  view.ctx.lineJoin = 'round';
}
addEventListener('resize', resize);
resize();

const camera = makeCamera(S, view);
const renderer = makeRenderer(S, view, camera);
const hud = makeHud(S, view);
bindInput(S, view, camera, hud);

const seedEl = document.getElementById('seedval');
if (seedEl) seedEl.textContent = String(seed);

// cheats
window.__refillAll = () => {
  for (const k in S.owned) S.owned[k] = true;
  for (const k in S.weapons) {
    const w = S.weapons[k];
    w.reserve = Math.max(w.reserve, k === 'rocket' ? 80 : k === 'sniper' ? 60 : k === 'shotgun' ? 80 : 600);
    w.ammo = WEAPONS[k].magSize; w.reloading = 0;
  }
  for (const k of ['wood', 'stone', 'metal']) S.inv[k] = Math.max(S.inv[k], 10000);
  S.inv.scrap = Math.max(S.inv.scrap, 500);
  S.inv.fence = Math.max(S.inv.fence, 10);
  S.tip = { text: 'Refilled ammo + resources', t: 1.4 };
};
window.__boostHard = () => {
  let n = 0;
  for (const u of S.units) {
    if (!u.hard || u.dead || u.eliminated) continue;
    n++;
    u.hp = u.max;
    u.rockets = Math.max(u.rockets, 12);
    u.satchels = Math.max(u.satchels, 6);
    u.grenades = Math.max(u.grenades, 4);
    u.hqm = Math.max(u.hqm, 80);
    u.gun = u.shotgun ? 'shotgun' : 'rifle';
    u.facemask = Math.max(u.facemask, 2);
    u.bodyArmor = Math.max(u.bodyArmor, 3);
    u.jack = true;
  }
  for (const team of S.teams) {
    if (!team.hard || team.eliminated) continue;
    const rec = team.bases.find(r => !r.dead);
    if (rec) {
      const tc = S.deploys.get(rec.tcKey);
      if (tc && tc.store) {
        tc.store.wood = Math.max(tc.store.wood, 3000);
        tc.store.stone = Math.max(tc.store.stone, 1500);
        tc.store.metal = Math.max(tc.store.metal, 1500);
        tc.store.scrap = Math.max(tc.store.scrap, 600);
      }
    }
  }
  S.tip = { text: 'Boosted ' + n + ' hard units', t: 1.4 };
};

// fixed-timestep loop
let last = performance.now();
let acc = 0;
function loop(now) {
  requestAnimationFrame(loop);
  const elapsed = Math.min(0.1, (now - last) / 1000);
  last = now;
  acc += elapsed * view.speed;
  let ticks = 0;
  const maxTicks = Math.max(4, view.speed * 4);
  while (acc >= DT && ticks < maxTicks) {
    step(S);
    acc -= DT; ticks++;
  }
  if (ticks >= maxTicks) acc = 0; // spiral-of-death guard
  camera.update(elapsed);
  renderer.render(elapsed);
  hud.update();
}
requestAnimationFrame(loop);
