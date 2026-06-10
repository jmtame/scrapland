// Sim state factory. createSim(seed) returns S — the single source of truth.
// Pure data + seeded RNG; no DOM. The client renders S; tests step it headless.
import { makeRng } from './rng.js';
import { buildWorld } from './world.js';
import { buildNav } from './nav.js';
import { WORLD, WEAPONS, AI, MIN_TC_DIST, SAFE_R, OWNER, TILE } from './config.js';
import { dist, gkey } from './util.js';

export function createSim(seed) {
  const S = {
    seed: seed >>> 0, rng: makeRng(seed), t: 0, tick: 0,
    // entities
    resources: [], barrels: [], loot: [], bullets: [], rockets: [], grenades: [], satchels: [],
    fences: [], fires: [], wrecks: [], animals: [], guards: [], dummies: [],
    structures: new Map(), walls: new Map(), deploys: new Map(),
    units: [], teams: [], transports: [], trains: [], convoys: [],
    // world events
    airdrop: null, plane: null, airdropT: 150, signal: null, patrol: null, patrolT: 0,
    lockedCrate: null, crateT: 0, quarry: null, trainT: 0, convoyT: 0,
    // ambient (sim-lite: positions evolve deterministically but render-only)
    clouds: null, fogBanks: null, fireflies: null, footprints: [],
    weather: { mode: 'clear', timer: 28, rain: 0, boltT: 0, flash: 0, fog: 0, fogTimer: 18, fogOn: false },
    wind: 0,
    // player
    player: {
      x: WORLD.w / 2, y: WORLD.h / 2 + 260, vx: 0, vy: 0, angle: 0, walk: 200, run: 340,
      recoil: 0, health: 100, maxhp: 100, hurt: 0, regenDelay: 0, dead: false, deadT: 0,
      invuln: 0, moving: false, inCopter: false, facemask: 0, bodyArmor: 0, rifleLaser: false,
      poison: 0, swing: 0, gatherCd: 0, lastHitBy: null,
    },
    inv: { wood: 10000, stone: 10000, metal: 10000, scrap: 0, hqm: 0, fence: 10, grenade: 3, signal: 0 },
    owned: { pistol: true, rifle: false, minigun: false, rocket: false, sniper: false, shotgun: false, hmg: false },
    weapons: instWeapons(), slot: 0, buildMode: false, buildPiece: 'wall', buildRot: 0,
    jackhammer: false, ghost: true, copter: null, playerKills: 0, deathMark: null, bounty: null,
    // raid/alarm/banners
    raids: [], elims: [], raidAlarm: null, breachT: {}, shake: 0,
    // AI coordination
    aggressor: -1, aggressorOwner: null, aggroT: 0, roleT: 0, aliveBases: 0, dbSweepT: 0,
    // transient render events (drained by client each frame)
    events: [],
    muzzle: null, blasts: [], scorch: [], flashes: [], floats: [], particles: [],
    // input command bus (client → sim)
    cmd: { mx: 0, my: 0, fire: false, fireHeld: false, up: false, down: false, left: false, right: false, run: false },
    // metrics for headless verification
    metrics: {
      hardUnstick: 0, wallPhase: 0, stuckTotal: 0, maxStuck: 0, repaths: 0, pathFails: 0,
      act: {}, raidsLaunched: 0, tcKilled: 0, elims: 0, winner: null, decisiveT: null,
      workerLog: [], stuckLog: [], regionStuck: { base: 0, lake: 0, monument: 0, open: 0 },
    },
  };
  buildWorld(S);
  buildNav(S);
  spawnTeams(S);
  // event schedulers (first-occurrence windows)
  S.trainT = S.rng.rand(20, 60);
  S.patrolT = S.rng.rand(180, 280);
  S.crateT = S.rng.rand(100, 180);
  S.convoyT = S.rng.rand(120, 200);
  return S;
}

function instWeapons() {
  const w = {};
  for (const k in WEAPONS) {
    const d = WEAPONS[k];
    w[k] = { ammo: d.magSize, reserve: d.reserve, reloading: 0, cd: 0, spin: 0 };
  }
  return w;
}

// ---- AI teams ----
export function spawnTeams(S) {
  const R = S.rng;
  const used = [
    { x: S.world.shop.x, y: S.world.shop.y, r: SAFE_R + 500 },
    { x: S.player.x, y: S.player.y, r: 700 },
    ...S.world.monuments.map(m => ({ x: m.x, y: m.y, r: SAFE_R + 320 })),
  ];
  for (let i = 0; i < AI.TEAM_COUNT; i++) {
    let site = null;
    for (let t = 0; t < 120 && !site; t++) {
      const bx = R.rand(1400, WORLD.w - 1400), by = R.rand(1400, WORLD.h - 1400);
      if (S.world.landFactor(bx, by) < 0.12) continue;
      if (S.world.lakeAt(bx, by)) continue;
      if (S.world.lakes.some(L => dist(bx, by, L.x, L.y) < L.r + 560)) continue;
      if (S.world.railDist(bx, by) < 400 || S.world.pathDist(bx, by) < 340) continue;
      if (used.some(u => dist(bx, by, u.x, u.y) < u.r)) continue;
      site = { x: bx, y: by };
    }
    if (!site) continue;
    used.push({ x: site.x, y: site.y, r: MIN_TC_DIST });

    const roll = R.next();
    const hard = roll < 0.25, weak = roll >= 0.75;
    const team = {
      id: i, owner: 'e' + i, col: AI.COLS[i % AI.COLS.length], hard, weak,
      role: ['raider', 'turtle', 'nomad'][i % 3], shotgun: R.chance(0.3),
      eliminated: false, bases: [],
      brain: {
        sealed: true, decaying: false, ready: false, attack: false, attackers: 0, urgent: false,
        aggressor: false, raidTarget: null, raidPhase: null, breachKey: null, breachT: 0,
        buildHoldT: 0, builderId: null, lootCd: 0, qCd: 0, sigCd: 0, statusT: R.rand(0, 0.5),
        stage: null, stageT: 0,
      },
    };
    S.teams.push(team);
    const primary = spawnUnit(S, team, site.x, site.y, true);
    primary.inv = { wood: 120, stone: 30, metal: 10 };
    primary.unfounded = true;
    primary.siteX = site.x; primary.siteY = site.y;
    primary.copter = { x: site.x - TILE * 4, y: site.y, angle: 0, rotor: 0, spin: 0, vx: 0, vy: 0, hp: 160, max: 160, destroyed: false };
    for (let w = 0; w < 3; w++) {
      const u = spawnUnit(S, team, site.x + R.rand(-46, 46), site.y + R.rand(24, 64), false);
      u.unfounded = true; u.siteX = site.x; u.siteY = site.y;
    }
  }
}

export function spawnUnit(S, team, x, y, primary) {
  const R = S.rng;
  const u = {
    id: team.id, owner: team.owner, col: team.col, primary: !!primary, worker: !primary, ally: false,
    hard: team.hard, weak: team.weak, shotgun: team.shotgun, role: team.role,
    x, y, vx: 0, vy: 0, angle: R.rand(0, Math.PI * 2),
    hx: x, hy: y, tcKey: null, doorX: x, doorY: y + TILE, doorGy: Math.floor(y / TILE) + 1,
    hp: 100, max: 100, dead: false, respawnT: 0, eliminated: false, regenT: 0, lastHitBy: null,
    inv: { wood: 0, stone: 0, metal: 0 }, scrap: 0, rockets: 0, satchels: 0, grenades: 0, hqm: 0,
    gun: 'pistol', rifleLaser: false, facemask: team.hard ? 1 : 0, bodyArmor: team.hard ? 2 : 0, jack: false,
    kills: 0, state: 'gather', act: 'gather', unfounded: false, siteX: 0, siteY: 0,
    think: R.rand(0, 1), gunCd: 0, rkCd: 0, gnCd: 0, fenceCd: 0, expandT: R.rand(3, 9),
    retaliateT: 0, threatX: 0, threatY: 0, disengageT: 0,
    defendT: 0, defHold: 0, defTgt: null, retreat: false,
    raid: null, wasRaid: false, raidCd: 0, raidBias: R.next(), raidUrge: 0,
    defDuty: false, buildDuty: false, rocketer: false,
    lootRun: null, qRun: null, monRun: false, monRunT: 0, monCd: 0, monStay: 0,
    tgtNode: null, skipNode: null, skipT: 0, lootTgt: null, lootSkip: null, lootSkipT: 0,
    lane: R.rand(-12, 12), hoff: R.rand(-26, 26),
    path: null, pathI: 0, pathGX: 0, pathGY: 0, pathT: 0, navStamp: 0, repathN: 0, noPathT: 0,
    progT: 0, progBest: 1e9, stuckT: 0, baseT: 0, idleT: 0, aiNetT: 0, aiPx: x, aiPy: y,
    retT: 0, maintT: -10, hireT: 0, stT: 0, expT: R.rand(40, 80), fwdT: 0, endgame: false,
    copter: null, flying: false, aboard: null, tradeDone: false, parkChk: 0,
    gathering: false, swing: 0, hf: false, strafeT: 0, strafeS: 1, backoff: false,
    tickPhase: S.units.length % 9,
  };
  S.units.push(u);
  return u;
}

export function spawnPlayerWorker(S) {
  const R = S.rng;
  const shop = S.world.shop;
  const tc = playerTC(S);
  const team = { id: -1, owner: OWNER, col: '#7ec850', hard: false, weak: false, shotgun: false, role: 'raider' };
  const u = spawnUnit(S, team, shop.x + R.rand(-60, 60), shop.y + (shop.r || 120) + 40, false);
  u.ally = true; u.gun = 'rifle'; u.col = '#7ec850'; u.raidUrge = R.rand(12, 24); u.facemask = 0; u.bodyArmor = 0;
  if (tc) { u.hx = tc.hx; u.hy = tc.hy; u.tcKey = tc.tcKey; }
  else { u.hx = S.player.x; u.hy = S.player.y; }
  u.doorX = u.hx; u.doorY = u.hy + TILE; u.doorGy = Math.floor(u.hy / TILE) + 1;
  return u;
}

export function playerTC(S) {
  for (const [k, d] of S.deploys) {
    if (d.type === 'cupboard' && d.owner === OWNER) {
      const [gx, gy] = k.split(',').map(Number);
      return { owner: OWNER, tcKey: k, hx: gx * TILE + TILE / 2, hy: gy * TILE + TILE / 2, isPlayer: true };
    }
  }
  return null;
}

export const teamOf = (S, owner) => S.teams.find(t => t.owner === owner) || null;
export const teamUnits = (S, owner) => S.units.filter(u => u.owner === owner && !u.eliminated);

// ---- shared event/FX emitters (sim-side state the renderer consumes) ----
export function addFloat(S, x, y, text, col) {
  // anti-overlap stacking: successive floats at one spot step up 15 px lines
  let lift = 0;
  const f0 = S.floats[S.floats.length - 1];
  if (f0 && S.t - f0.born < 1.0 && Math.abs(f0.ox - x) < 60 && Math.abs(f0.oy - y) < 44) lift = f0.lift + 15;
  S.floats.push({ x, y: y - lift, ox: x, oy: y, lift, text, col: col || '#e8e2cf', vy: -26, life: 0.9, max: 0.9, born: S.t });
  if (S.floats.length > 90) S.floats.shift();
}
export function burst(S, x, y, col, n, spd) {
  for (let i = 0; i < n; i++) {
    const a = S.rng.rand(0, Math.PI * 2), v = S.rng.rand(0.3 * spd, spd);
    S.particles.push({ x, y, vx: Math.cos(a) * v, vy: Math.sin(a) * v, life: S.rng.rand(0.25, 0.6), max: 0.6, r: S.rng.rand(1.5, 3.5), col });
  }
  if (S.particles.length > 900) S.particles.splice(0, S.particles.length - 900);
}
export function addLoot(S, x, y, kind, amt, gun) {
  const a = S.rng.rand(0, Math.PI * 2), v = S.rng.rand(40, 90);
  S.loot.push({ x, y, vx: Math.cos(a) * v, vy: Math.sin(a) * v, kind, amt, gun: gun || null, life: 0, bob: S.rng.rand(0, Math.PI * 2) });
}
export function spillStack(S, x, y, kind, amt) {
  if (amt <= 0) return;
  const n = Math.min(12, Math.max(1, Math.ceil(amt / 50)));
  let left = amt;
  for (let i = 0; i < n; i++) {
    const part = Math.min(left, Math.ceil(amt / n));
    if (part <= 0) break;
    addLoot(S, x + S.rng.rand(-14, 14), y + S.rng.rand(-14, 14), kind, part);
    left -= part;
  }
}
export function spillContainer(S, x, y, d) {
  if (!d.store) return;
  for (const k of ['wood', 'stone', 'metal']) { spillStack(S, x, y, k, d.store[k] | 0); d.store[k] = 0; }
  // stored scrap is destroyed, not spilled (v1 rule)
}
export function markRaid(S, x, y, id) {
  const m = S.raids.find(r => r.id === id);
  if (m) { m.x = x; m.y = y; m.t = 60; return; }
  S.raids.push({ x, y, id, t: 60 });
  if (S.raids.length > 40) S.raids.shift();
}
export function creditKill(S, by) {
  if (!by) return;
  if (by === OWNER) { S.playerKills++; S.inv.scrap += 12; return; }
  const killer = S.units.find(u => u.owner === by && u.primary && !u.eliminated) || S.units.find(u => u.owner === by && !u.eliminated);
  if (killer) { killer.kills++; killer.scrap += 12; }
}
