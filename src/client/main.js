// Client boot (three.js renderer): fixed-step sim + 3D scene + overlay HUD.
import { createSim, step } from '../sim/sim.js';
import { DT, WEAPONS } from '../sim/config.js';
import { makeScene } from './three/scene.js';
import { makeTerrain3 } from './three/terrain3.js';
import { makeBuildings3 } from './three/buildings3.js';
import { makeActors3 } from './three/actors3.js';
import { makeWeather3 } from './three/weather3.js';
import { makeOverlay3 } from './three/overlay3.js';
import { bindInput } from './input.js';
import { makeHud } from './hud.js';

const seed = (Math.random() * 1e9) >>> 0;
const S = createSim(seed);
S.ghost = true;

function start() {
  const canvas = document.getElementById('game');
  const view = {
    canvas,
    VW: innerWidth, VH: innerHeight,
    speed: 1, godView: false, debugPaths: false,
  };
  const rig = makeScene(S, view);
  const terrain = makeTerrain3(S, rig.scene);
  const buildings = makeBuildings3(S, rig.scene);
  const actors = makeActors3(S, rig.scene);
  const weather = makeWeather3(S, rig.scene);
  const overlay = makeOverlay3(S, view, rig);
  const hud = makeHud(S, view);
  bindInput(S, view, rig, hud);

  addEventListener('resize', () => {
    view.VW = innerWidth;
    view.VH = innerHeight;
    rig.resize();
  });

  const seedEl = document.getElementById('seedval');
  if (seedEl) seedEl.textContent = String(seed);

  window.__refillAll = () => {
    for (const k in S.owned) S.owned[k] = true;
    for (const k in S.weapons) {
      const w = S.weapons[k];
      w.reserve = Math.max(w.reserve, k === 'rocket' ? 80 : k === 'sniper' ? 60 : k === 'shotgun' ? 80 : 600);
      w.ammo = WEAPONS[k].magSize;
      w.reloading = 0;
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
      acc -= DT;
      ticks++;
    }
    if (ticks >= maxTicks) acc = 0;
    rig.update(elapsed);
    terrain.sync(elapsed, S, rig);
    buildings.sync(elapsed);
    actors.sync(elapsed, rig);
    weather.sync(elapsed, rig);
    rig.render();
    overlay.draw();
    hud.update();
    S.events.length = 0;
  }
  requestAnimationFrame(loop);
}

try {
  start();
} catch (e) {
  console.error('SCRAPLAND boot failed: WebGL unavailable —', e && e.message);
  const msg = document.createElement('div');
  msg.style.cssText = 'position:fixed;inset:0;display:flex;align-items:center;justify-content:center;color:#ddd5c2;font:16px Trebuchet MS;background:#14120e;z-index:99';
  msg.textContent = 'SCRAPLAND needs WebGL — please enable hardware acceleration and reload.';
  if (document.body) document.body.appendChild(msg);
}
