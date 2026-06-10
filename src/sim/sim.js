// Sim orchestrator: createSim(seed) + step() advance one fixed tick (1/60 s).
// Runs identically in the browser and headless in node.
import { DT } from './config.js';
import { createSim } from './state.js';
import { updatePlayer } from './player.js';
import { updateBullets, updateRockets, updateGrenades, updateSatchels, updateFires, updateWrecks, updateTurrets, updateLoot } from './combat.js';
import { updateAnimals, updateGuards } from './animals.js';
import { updateDecay } from './building.js';
import { updateTransports, updateTrains, updateConvoys, updatePatrol } from './vehicles.js';
import { updateWeather, updateAirdrop, updateSignals, updateQuarry, updateLockedCrate, updateAmbient, updateRespawns, buildAmbient } from './worldevents.js';
import { updateBrains } from './ai/brain.js';
import { updateUnit } from './ai/unit.js';
import { refreshFenceCells } from './nav.js';

export { createSim };

export function step(S) {
  const dt = DT;
  S.t += dt; S.tick++;

  if (!S.clouds) buildAmbient(S);
  if (S.needFenceRefresh) { S.needFenceRefresh = false; refreshFenceCells(S); }

  updatePlayer(S, dt);
  updateRockets(S, dt);
  updateAnimals(S, dt);
  updateGuards(S, dt);
  updateTurrets(S, dt);
  updateDecay(S, dt);

  updateWeather(S, dt);
  updateAmbient(S, dt);
  updateTrains(S, dt);
  updateConvoys(S, dt);
  updateAirdrop(S, dt);
  updateQuarry(S, dt);
  updateSignals(S, dt);
  updatePatrol(S, dt);
  updateLockedCrate(S, dt);

  updateFires(S, dt);
  updateWrecks(S, dt);
  updateSatchels(S, dt);
  updateGrenades(S, dt);
  ageFences(S, dt);
  ageRaids(S, dt);
  if (S.raidAlarm) { S.raidAlarm.t -= dt; if (S.raidAlarm.t <= 0) S.raidAlarm = null; }

  // AI
  updateBrains(S, dt);
  updateTransports(S, dt);
  for (const u of S.units) updateUnit(S, u, dt);

  // banners
  for (let i = S.elims.length - 1; i >= 0; i--) {
    S.elims[i].t -= dt;
    if (S.elims[i].t <= 0) S.elims.splice(i, 1);
  }

  updateBullets(S, dt);
  updateLoot(S, dt);
  updateRespawns(S, dt);

  // transient FX state
  for (let i = S.particles.length - 1; i >= 0; i--) {
    const p = S.particles[i];
    const f = Math.pow(0.9, dt * 60);
    p.vx *= f; p.vy *= f;
    p.x += p.vx * dt; p.y += p.vy * dt;
    p.life -= dt;
    if (p.life <= 0) S.particles.splice(i, 1);
  }
  for (let i = S.floats.length - 1; i >= 0; i--) {
    const f = S.floats[i];
    f.y += f.vy * dt; f.life -= dt;
    if (f.life <= 0) S.floats.splice(i, 1);
  }
  for (let i = S.flashes.length - 1; i >= 0; i--) {
    S.flashes[i].life -= dt;
    if (S.flashes[i].life <= 0) S.flashes.splice(i, 1);
  }
  for (let i = S.blasts.length - 1; i >= 0; i--) {
    S.blasts[i].life -= dt;
    if (S.blasts[i].life <= 0) S.blasts.splice(i, 1);
  }
  if (S.muzzle) { S.muzzle.t -= dt; if (S.muzzle.t <= 0) S.muzzle = null; }
  S.shake = Math.max(0, S.shake - 26 * dt);
  if (S.tip) { S.tip.t -= dt; if (S.tip.t <= 0) S.tip = null; }

  // cap transient buffers in headless runs
  if (S.events.length > 600) S.events.splice(0, S.events.length - 600);

  // periodic integrity audit (cheap, every 2 s): NaN + wall-phase detection
  if (S.tick % 120 === 0) audit(S);
}

function ageFences(S, dt) {
  for (let i = S.fences.length - 1; i >= 0; i--) {
    const f = S.fences[i];
    f.t -= dt;
    if (f.t <= 0) {
      S.fences.splice(i, 1);
      S.needFenceRefresh = true;
    }
  }
}

function ageRaids(S, dt) {
  for (let i = S.raids.length - 1; i >= 0; i--) {
    S.raids[i].t -= dt;
    if (S.raids[i].t <= 0) S.raids.splice(i, 1);
  }
}

import { wallSegOf } from './physics.js';
import { ptSeg } from './util.js';

function wallOverlap(S, u) {
  // TRUE phasing detector: a unit's center deep inside a closed wall band.
  // (Normal collision keeps centers ≥ ~17 px away; ≤ 3 px means it crossed.)
  const gx = Math.floor(u.x / 64), gy = Math.floor(u.y / 64);
  for (const k of ['V,' + gx + ',' + gy, 'V,' + (gx + 1) + ',' + gy, 'H,' + gx + ',' + gy, 'H,' + gx + ',' + (gy + 1)]) {
    const w = S.walls.get(k);
    if (!w || w.hp <= 0 || (w.type === 'door' && w.open)) continue;
    if (w.owner === u.owner) continue; // own walls can spawn on top of units (then they escape)
    const s = wallSegOf(k, w);
    if (ptSeg(u.x, u.y, s[0], s[1], s[2], s[3]) < 3) return true;
  }
  return false;
}

function audit(S) {
  const m = S.metrics;
  for (const u of S.units) {
    if (u.dead || u.eliminated) continue;
    if (!isFinite(u.x) || !isFinite(u.y)) { m.nan = (m.nan || 0) + 1; u.x = u.hx; u.y = u.hy; }
    if (wallOverlap(S, u)) m.wallPhase++;
    // region-stuck attribution for long-stuck units (non-raid, like v1 bars)
    if (u.stuckT > 1.5 && u.state !== 'raid') {
      const inLake = S.world.lakeAt(u.x, u.y);
      let region = 'open';
      if (Math.abs(u.x - u.hx) < 460 && Math.abs(u.y - u.hy) < 460) region = 'base';
      else if (inLake) region = 'lake';
      else { for (const mo of S.world.monuments) if ((u.x - mo.x) ** 2 + (u.y - mo.y) ** 2 < (mo.r + 220) ** 2) { region = 'monument'; break; } }
      m.regionStuck[region] += 2;
    }
  }
  if (!isFinite(S.player.x) || !isFinite(S.player.y)) { m.nan = (m.nan || 0) + 1; S.player.x = 6912; S.player.y = 4868; }
  // worker timeline (per minute)
  if (S.t - (m._wlT || 0) >= 60) {
    m._wlT = S.t;
    const row = { t: Math.round(S.t) };
    for (const t of S.teams) row[t.owner] = S.units.filter(u => u.owner === t.owner && !u.eliminated).length;
    m.workerLog.push(row);
  }
}
