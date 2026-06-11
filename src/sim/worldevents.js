// World events + ambience: weather/wind, airdrops + supply signal, quarry
// capture, locked crate, clouds, fog banks, fireflies, footprints, node regen.
import { WORLD, SAFE_R, OWNER, QUARRY, CRATE, TILE } from './config.js';
import { TAU, clamp, dist, dist2 } from './util.js';
import { inSafeZone } from './physics.js';
import { addFloat, burst, addLoot, spillStack } from './state.js';

// ---- weather + wind ----
export function updateWeather(S, dt) {
  const W = S.weather;
  W.timer -= dt;
  if (W.timer <= 0) {
    if (W.mode === 'clear') { W.mode = 'rain'; W.timer = S.rng.rand(8, 16); W.boltT = S.rng.rand(3, 8); }
    else { W.mode = 'clear'; W.timer = S.rng.rand(90, 170); }
  }
  const target = W.mode === 'rain' ? 1 : 0;
  W.rain += (target - W.rain) * Math.min(1, dt * 0.5);
  if (W.rain > 0.4) {
    W.boltT -= dt;
    if (W.boltT <= 0) { W.boltT = S.rng.rand(4, 13); W.flash = 1; S.events.push({ type: 'bolt' }); }
  }
  W.flash = Math.max(0, W.flash - dt * 2.4);
  // independent ground-fog cycle
  W.fogTimer -= dt;
  if (W.fogTimer <= 0) {
    W.fogOn = !W.fogOn;
    W.fogTimer = W.fogOn ? S.rng.rand(28, 60) : S.rng.rand(45, 95);
  }
  W.fog += ((W.fogOn ? 1 : 0) - W.fog) * Math.min(1, dt * 0.22);
  S.wind = (Math.sin(S.t * 0.5) * 0.5 + Math.sin(S.t * 1.9 + 1.1) * 0.5) * (1 + W.rain * 1.7);
}

// ---- airdrops ----
export function updateAirdrop(S, dt) {
  if (!S.plane && !S.airdrop) {
    S.airdropT -= dt;
    if (S.airdropT <= 0) { spawnAirdrop(S); S.airdropT = S.rng.rand(120, 300); }
  }
  if (S.plane) {
    const pl = S.plane;
    pl.x += pl.vx * dt; pl.prop += dt * 30;
    if (!pl.released && ((pl.vx > 0 && pl.x >= pl.dropX) || (pl.vx < 0 && pl.x <= pl.dropX))) {
      pl.released = true;
      S.airdrop = { x: pl.dropX, y: pl.dropY - 780, gy: pl.dropY, hp: 90, max: 90, fall: 0, sway: S.rng.rand(0, TAU), loot: airdropLoot(S) };
      addFloat(S, pl.dropX, pl.dropY, 'Airdrop incoming!', '#ffe07a');
      S.events.push({ type: 'airdropCalled', x: pl.dropX, y: pl.dropY });
    }
    if (pl.x < -300 || pl.x > WORLD.w + 300) S.plane = null;
  }
  if (S.airdrop) {
    const a = S.airdrop;
    if (a.fall < 1) {
      a.fall = Math.min(1, a.fall + dt * 0.16);
      const s = a.fall * a.fall * (3 - 2 * a.fall);
      a.y = (a.gy - 780) + 780 * s;
      a.sway += dt * 1.5;
    } else if (a.hp <= 0) {
      spillAirdrop(S, a);
      S.airdrop = null;
    }
  }
}

export function spawnAirdrop(S, atX, atY) {
  let dropX = atX, dropY = atY;
  if (dropX === undefined) {
    for (let t = 0; t < 24; t++) {
      const x = S.rng.rand(0.16 * WORLD.w, 0.84 * WORLD.w), y = S.rng.rand(0.16 * WORLD.h, 0.84 * WORLD.h);
      if (dist(x, y, S.world.shop.x, S.world.shop.y) < SAFE_R + 160) continue;
      dropX = x; dropY = y; break;
    }
    if (dropX === undefined) { dropX = WORLD.w * 0.25; dropY = WORLD.h * 0.25; }
  }
  const fromLeft = S.rng.chance(0.5);
  S.plane = { x: dropX + (fromLeft ? -1700 : 1700), y: dropY, vx: fromLeft ? 820 : -820, dropX, dropY, released: false, prop: 0 };
}

function airdropLoot(S) {
  const loot = [['scrap', S.rng.randi(50, 110)]];
  if (S.rng.chance(0.85)) loot.push(['rocket', S.rng.randi(2, 6)]);
  if (S.rng.chance(0.85)) loot.push(['ammo', S.rng.randi(70, 150)]);
  if (S.rng.chance(0.55)) loot.push(['metal', S.rng.randi(25, 60)]);
  if (S.rng.chance(0.5)) loot.push(['wood', S.rng.randi(30, 70)]);
  if (S.rng.chance(0.4)) loot.push(['sniper', 1]);
  return loot;
}

export function spillAirdrop(S, a) {
  burst(S, a.x, a.y, '#ffd27a', 30, 300);
  burst(S, a.x, a.y, '#d2664a', 16, 220);
  for (const [kind, amt] of a.loot) {
    if (kind === 'rocket') { for (let i = 0; i < amt; i++) addLoot(S, a.x, a.y, 'rocket', 1); }
    else if (kind === 'sniper') addLoot(S, a.x, a.y, 'sniper', 1);
    else if (kind === 'ammo') addLoot(S, a.x, a.y, 'ammo', amt);
    else spillStack(S, a.x, a.y, kind, amt);
  }
  addFloat(S, a.x, a.y - 30, 'AIRDROP LOOTED!', '#ffe07a');
}

// ---- supply signal ----
export function throwSupplySignal(S, x, y) {
  if (S.signal) return false;
  const p = S.player;
  const d = dist(p.x, p.y, x, y);
  if (d > 700) { const f = 700 / d; x = p.x + (x - p.x) * f; y = p.y + (y - p.y) * f; }
  if (inSafeZone(S, x, y)) { addFloat(S, p.x, p.y - 20, 'Not in the safe zone', '#d2664a'); return false; }
  if ((S.inv.signal | 0) < 1) { addFloat(S, p.x, p.y - 20, 'No supply signal — buy one at the trade zone', '#d2664a'); return false; }
  S.inv.signal--;
  S.signal = { x, y, t: 0, dur: 6, puff: 0, called: false };
  addFloat(S, p.x, p.y - 20, 'Supply signal out — everyone saw it', '#c9a0ff');
  return true;
}

export function aiSupplySignal(S, x, y) {
  if (S.signal || S.plane || S.airdrop) return false;
  S.signal = { x, y, t: 0, dur: 6, puff: 0, called: false };
  return true;
}

export function updateSignals(S, dt) {
  const s = S.signal;
  if (!s) return;
  s.t += dt; s.puff -= dt;
  if (s.puff <= 0) {
    s.puff = 0.12;
    burst(S, s.x + S.rng.rand(-8, 8), s.y + S.rng.rand(-6, 2), '#a96bd4', 3, 60);
  }
  if (!s.called && s.t > s.dur && !S.plane && !S.airdrop) { spawnAirdrop(S, s.x, s.y); s.called = true; }
  if (s.called || s.t > s.dur + 60) S.signal = null;
}

// ---- quarry ----
export function updateQuarry(S, dt) {
  const q = S.quarry;
  if (!q) return;
  const present = new Set();
  if (!S.player.dead && !S.player.inCopter && !S.ghost && dist2(S.player.x, S.player.y, q.x, q.y) < q.r * q.r) present.add(OWNER);
  for (const u of S.units) {
    if (u.dead || u.eliminated || u.flying) continue;
    if (dist2(u.x, u.y, q.x, q.y) < q.r * q.r) present.add(u.owner);
  }
  if (present.size === 1) {
    const owner = [...present][0];
    if (owner !== q.owner) {
      if (q.capOwner !== owner) { q.capOwner = owner; q.capT = 0; }
      q.capT += dt;
      if (q.capT >= QUARRY.capT) {
        q.owner = owner; q.capT = 0; q.capOwner = null; q.payT = 0;
        const team = S.teams.find(t => t.owner === owner);
        const label = owner === OWNER ? 'You' : 'Base ' + (team ? team.id + 1 : '?');
        addFloat(S, q.x, q.y - 44, 'Quarry captured!', '#cdd6a3');
        S.elims.push({ text: 'QUARRY → ' + label, t: 10 });
      }
    } else q.capT = 0;
  } else q.capT = Math.max(0, q.capT - dt);

  // owning team must keep a living primary
  if (q.owner && q.owner !== OWNER) {
    const team = S.teams.find(t => t.owner === q.owner);
    const primaryAlive = team && !team.eliminated && S.units.some(u => u.owner === q.owner && u.primary && !u.eliminated);
    if (!primaryAlive) q.owner = null;
  }
  if (q.owner) {
    q.arm += dt;
    q.payT += dt;
    if (q.payT >= QUARRY.payEvery) {
      q.payT = 0; q.paid++;
      if (q.owner === OWNER) {
        S.inv.stone += QUARRY.pay.stone; S.inv.metal += QUARRY.pay.metal; S.inv.scrap += QUARRY.pay.scrap;
      } else {
        const team = S.teams.find(t => t.owner === q.owner);
        const rec = team && team.bases.find(r => !r.dead);
        const tc = rec && S.deploys.get(rec.tcKey);
        if (tc && tc.store) { tc.store.stone += QUARRY.pay.stone; tc.store.metal += QUARRY.pay.metal; tc.store.scrap += QUARRY.pay.scrap; }
      }
      addFloat(S, q.x, q.y - 44, '+stone +metal +scrap', '#cdd6a3');
    }
  }
}

// ---- locked crate ----
export function updateLockedCrate(S, dt) {
  if (!S.lockedCrate) {
    S.crateT -= dt;
    if (S.crateT <= 0) {
      const mons = S.world.monuments.filter(m => m.type !== 'quarry');
      const m = S.rng.pick(mons);
      const a = S.rng.rand(0, TAU);
      S.lockedCrate = { x: m.x + Math.cos(a) * (m.r + 90), y: m.y + Math.sin(a) * (m.r + 90), mon: m.name, t: CRATE.hackT, started: false, blink: 0 };
      addFloat(S, S.lockedCrate.x, S.lockedCrate.y - 30, 'Locked crate at the ' + m.name + '!', '#ffb84a');
      S.elims.push({ text: 'LOCKED CRATE — ' + m.name, t: 12 });
      S.crateT = S.rng.rand(240, 360);
    }
    return;
  }
  const c = S.lockedCrate;
  c.blink += dt;
  let attended = !S.player.dead && !S.ghost && dist2(S.player.x, S.player.y, c.x, c.y) < CRATE.r * CRATE.r;
  if (!attended) {
    for (const u of S.units) {
      if (u.dead || u.eliminated || u.flying) continue;
      if (dist2(u.x, u.y, c.x, c.y) < CRATE.r * CRATE.r) { attended = true; break; }
    }
  }
  if (attended) { c.started = true; c.t -= dt; }
  if (c.t <= 0) {
    burst(S, c.x, c.y, '#ffd27a', 30, 300);
    burst(S, c.x, c.y, '#d2664a', 16, 220);
    spillStack(S, c.x, c.y, 'scrap', S.rng.randi(80, 140));
    spillStack(S, c.x, c.y, 'metal', S.rng.randi(40, 80));
    for (let i = 0, n = S.rng.randi(3, 6); i < n; i++) addLoot(S, c.x + S.rng.rand(-20, 20), c.y + S.rng.rand(-20, 20), 'rocket', 1);
    for (let i = 0, n = S.rng.randi(2, 4); i < n; i++) addLoot(S, c.x + S.rng.rand(-20, 20), c.y + S.rng.rand(-20, 20), 'satchel', 1);
    addLoot(S, c.x, c.y, 'ammo', S.rng.randi(80, 160));
    if (S.rng.chance(0.5)) addLoot(S, c.x, c.y, 'sniper', 1);
    addFloat(S, c.x, c.y - 24, 'Locked crate opened!', '#ffb84a');
    S.lockedCrate = null;
  }
}

// ---- ambient: clouds / fog banks / fireflies / footprints ----
export function buildAmbient(S) {
  const R = S.rng;
  const W = WORLD.w, H = WORLD.h;
  const mkCloud = (x, y, heavy) => {
    const baseR = heavy ? R.rand(86, 140) : R.rand(70, 128);
    const puffs = [];
    let bound = baseR;
    for (let i = 0, n = R.randi(5, 9); i < n; i++) {
      const dx = R.rand(-0.95, 0.95) * baseR, dy = R.rand(-0.42, 0.42) * baseR, r = baseR * R.rand(0.55, 1.0);
      puffs.push({ dx, dy, r });
      bound = Math.max(bound, Math.hypot(dx, dy) + r);
    }
    return { x, y, puffs, r: bound, op: heavy ? R.rand(0.92, 1) : R.rand(0.7, 1), sp: R.rand(9, 19), heavy };
  };
  S.clouds = [];
  let slots = R.randi(7, 10);
  while (slots > 0) {
    if (slots >= 2 && R.chance(0.5)) {
      const cx2 = R.rand(0, W), cy2 = R.rand(0, H);
      const n = Math.min(slots, R.randi(2, 3));
      for (let i = 0; i < n; i++) S.clouds.push(mkCloud(cx2 + R.rand(-150, 150), cy2 + R.rand(-95, 95), true));
      slots -= n;
    } else { S.clouds.push(mkCloud(R.rand(0, W), R.rand(0, H), R.chance(0.4))); slots--; }
  }
  S.fogBanks = [];
  for (let i = 0, n = R.randi(13, 20); i < n; i++) {
    const baseR = R.rand(150, 320);
    const puffs = [];
    for (let p = 0, np = R.randi(2, 5); p < np; p++) puffs.push({ dx: R.rand(-1, 1) * baseR, dy: R.rand(-0.6, 0.6) * baseR, r: baseR * R.rand(0.7, 1.2) });
    S.fogBanks.push({ x: R.rand(0, W), y: R.rand(0, H), r: baseR, puffs, dens: R.rand(0.5, 1.15), sp: R.rand(5, 12), vy: R.rand(-3, 3) });
  }
  S.fireflies = [];
  for (let i = 0, n = R.randi(16, 28); i < n; i++) {
    S.fireflies.push({ x: R.rand(W / 3 + 30, 2 * W / 3 - 30), y: R.rand(60, H - 60), vx: R.rand(-28, 28), vy: R.rand(-28, 28), ph: R.rand(0, TAU), fs: R.rand(2.5, 4.5), wT: R.rand(0.5, 1.7) });
  }
}

export function updateAmbient(S, dt) {
  const W = WORLD.w, H = WORLD.h;
  if (!S.clouds) buildAmbient(S);
  for (const c of S.clouds) {
    c.x += c.sp * dt;
    if (c.x - c.r > W + 160) { c.x = -c.r - S.rng.rand(0, 500); c.y = S.rng.rand(0, H); }
  }
  for (const f of S.fogBanks) {
    f.x += f.sp * dt; f.y += f.vy * dt;
    if (f.x - f.r > W + 220) { f.x = -f.r - S.rng.rand(0, 450); f.y = S.rng.rand(0, H); }
    if (f.y < -f.r) f.y = H + f.r * 0.5; else if (f.y > H + f.r) f.y = -f.r * 0.5;
  }
  const x0 = W / 3 + 20, x1 = 2 * W / 3 - 20;
  for (const ff of S.fireflies) {
    ff.wT -= dt;
    if (ff.wT <= 0) {
      ff.wT = S.rng.rand(0.5, 1.7);
      const a = S.rng.rand(0, TAU), sp = S.rng.rand(14, 40);
      ff.vx = Math.cos(a) * sp; ff.vy = Math.sin(a) * sp;
    }
    ff.x += ff.vx * dt; ff.y += ff.vy * dt;
    if (ff.x < x0) { ff.x = x0; ff.vx = Math.abs(ff.vx); }
    if (ff.x > x1) { ff.x = x1; ff.vx = -Math.abs(ff.vx); }
    ff.y = clamp(ff.y, 40, H - 40);
    ff.ph += ff.fs * dt;
  }
  // footprints
  for (let i = S.footprints.length - 1; i >= 0; i--) {
    S.footprints[i].t += dt;
    if (S.footprints[i].t >= 10) S.footprints.splice(i, 1);
  }
}

export function dropFootprint(S, e, a) {
  e.fpAcc = (e.fpAcc || 0) + dist(e.x, e.y, e.fpX || e.x, e.fpY || e.y);
  e.fpX = e.x; e.fpY = e.y;
  if (e.fpAcc < 30) return;
  e.fpAcc = 0;
  e.fpSide = !e.fpSide;
  // wading: no prints on water — splash instead
  const lake = S.world.lakeAt(e.x, e.y);
  if (lake && !lake.frozen) {
    S.events.push({ type: 'splash', x: e.x, y: e.y });
    return;
  }
  const s = e.fpSide ? 5 : -5;
  S.footprints.push({ x: e.x - Math.sin(a) * s, y: e.y + Math.cos(a) * s, a, t: 0 });
  if (S.footprints.length > 700) S.footprints.shift();
}

// ---- node regen / barrel + guard respawn ----
export function updateRespawns(S, dt) {
  for (const n of S.resources) {
    if (n.amount >= n.max) continue;
    n.regen += dt;
    if (n.amount <= 0) {
      if (n.regen >= 29) { n.amount = n.max; n.regen = 0; }
    } else if (n.regen >= 2.5) {
      n.amount = Math.min(n.max, n.amount + Math.ceil(n.max * 0.05));
      n.regen = 0;
    }
  }
  for (const b of S.barrels) {
    if (b.hp > 0) continue;
    b.respawnT -= dt;
    if (b.respawnT <= 0) b.hp = b.max;
  }
}
