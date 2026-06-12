// All gameplay constants. Values carried over from v1 verbatim unless marked.
export const TILE = 64;
export const WORLD = { w: 13824, h: 9216 };
export const PLAYER_R = 16;
export const GATHER_RANGE = 64;
export const OWNER = 'p1';

export const DT = 1 / 60; // fixed sim timestep

// ---- weapons (player) ----
export const WEAPONS = {
  pistol:  { name: 'Pistol',  magSize: 12,  reserve: 96,  dmg: 14, rof: 0.22,  spread: 0.03,  speed: 1150, auto: false, reloadT: 1.0, kick: 6,  range: 1.6 },
  rifle:   { name: 'Rifle',   magSize: 30,  reserve: 180, dmg: 11, rof: 0.09,  spread: 0.05,  speed: 1500, auto: true,  reloadT: 1.6, kick: 4,  range: 2.4 },
  minigun: { name: 'Minigun', magSize: 200, reserve: 200, dmg: 6,  rof: 0.045, spread: 0.09,  speed: 1300, auto: true,  reloadT: 4.5, kick: 2,  range: 1.8, windup: 2.6 },
  rocket:  { name: 'Rocket',  magSize: 1,   reserve: 50,  dmg: 55, rof: 0.9,   spread: 0.012, speed: 560,  auto: false, reloadT: 1.9, kick: 16, range: 2.8, rocket: true, splash: 96, splashDmg: 150, structDmg: 55 },
  sniper:  { name: 'Sniper',  magSize: 1,   reserve: 30,  dmg: 60, rof: 1.0,   spread: 0.004, speed: 1180, auto: false, reloadT: 1.8, kick: 14, range: 3.4, locked: true },
  shotgun: { name: 'Shotgun', magSize: 6,   reserve: 48,  dmg: 9,  rof: 0.30,  spread: 0.17,  speed: 1050, auto: true,  reloadT: 1.5, kick: 9,  range: 1.1, pellets: 7 },
  hmg:     { name: 'HMG',     magSize: 100, reserve: 300, dmg: 15, rof: 0.05,  spread: 0.11,  speed: 1500, auto: true,  reloadT: 3.0, kick: 9,  range: 2.4, locked: true, tracer: 'hmg' },
};
export const SATCHEL = { splash: 88, splashDmg: 120, structDmg: 50 };
export const GRENADE = { splash: 120, splashDmg: 120, structDmg: 22, fuse: 2.0 };

// ---- building ----
export const BUILD = {
  floor:    { name: 'Floor',    cost: { wood: 5 },             cat: 'cell', hp: 100, found: true, up: true },
  trifloor: { name: 'Tri-Floor',cost: { wood: 4 },             cat: 'cell', hp: 90,  found: true, up: true, tri: true, hidden: true },
  wall:     { name: 'Wall',     cost: { wood: 10 },            cat: 'edge', hp: 100, up: true },
  triangle: { name: 'Triangle', cost: { wood: 8 },             cat: 'diag', hp: 100, up: true, hidden: true },
  door:     { name: 'Door',     cost: { wood: 10, metal: 5 },  cat: 'edge', hp: 50,  up: true, mMul: 2, door: true },
  box:      { name: 'Box',      cost: { wood: 15 },            cat: 'cell', hp: 90,  box: true, store: true, hidden: true },
  turret:   { name: 'Turret',   cost: { wood: 40, metal: 30 }, cat: 'cell', hp: 150, solid: true, turret: true },
  cupboard: { name: 'Cupboard', cost: { wood: 60, metal: 25 }, cat: 'cell', hp: 300, solid: true, tc: true, store: true },
};
export const PIECES = ['floor', 'wall', 'door', 'turret', 'cupboard'];
export const WALL_T = 12;
export const BASE_MAX = 10;
export const UPGRADE = { wood: { to: 'stone', cost: { stone: 15 } }, stone: { to: 'metal', cost: { metal: 20 } }, metal: { to: 'armored', cost: { hqm: 8 } } };
export function tierHp(def, mat) {
  const mMul = def.mMul || 4;
  if (mat === 'armored') return def.hp * mMul * 2;
  if (mat === 'metal') return def.hp * mMul;
  if (mat === 'stone') return Math.round(def.hp * (1 + mMul) / 2);
  return def.hp;
}

export const CLAIM_R = 900;
export const MIN_TC_DIST = 900;
export const UPKEEP = 0.0075;
export const REPAIR_LOCK = 30;     // seal/rebuild lock after destruction
export const HIT_LOCK = 10;        // repair lock after a hit
export const DECAY_UNCLAIMED = 600;
export const DECAY_CENTER = 3600;
export const DECAY_EDGE = 1200;
export const DAY_LEN = 240;
export const SAFE_R = 620;
export const MON_NOBUILD = 620;
export const BOUNTY_REWARD = 50;
export const FENCE = { hp: 200, len: 46, half: 23, life: 60 };
export const HEAD_R = 7;
export const HEADSHOT_MUL = 1.9;
export const ANIM_PAUSE = 0.65;

// ---- armor ----
export const ARMOR = {
  head: [0, 0.25, 0.45, 0.62],
  body: [0, 0.18, 0.34, 0.50],
  cost: [0, 16, 34, 60],
  headCol: [null, '#cdbb92', '#9aabb8', '#7c8ec9'],
  bodyCol: [null, '#857748', '#959ca3', '#5d7a9b'],
};
export const armorReduce = (lvl, part) => ARMOR[part][clampLvl(lvl)];
const clampLvl = (l) => (l < 0 ? 0 : l > 3 ? 3 : l | 0);

// ---- vehicles / turrets ----
export const COPTER = {
  // shared / AI-copter tuning (ai/unit.js flyTo)
  speed: 560, boost: 980, accel: 360, drag: 0.55, dragIdle: 0.85, turn: 2.1, r: 30, hp: 260,
  // player flight model: physics-driven rotor craft (Rust minicopter feel).
  // Rotor thrusts along the tilted local up; momentum + torque, no auto-level.
  grav: 180, liftMax: 268, liftExp: 1.6,
  spinUp: 0.6, spinDown: 0.9, rpmDecay: 0.12,
  pitchK: 0.0040, rollK: 0.0020, yawK: 3.2, bank: 1.0, stab: 0.5,
  angDrag: 0.10, linDrag: 0.78, altDrag: 0.45,
  ceiling: 470, safeAlt: 26,
};
export const TRANSPORT = { speed: 455, accel: 300, drag: 0.55, turn: 1.6, r: 46, seats: 4, cost: 40, hp: 360 };
export const TTIER = {
  1: { name: 'Pistol', dmg: 14, rof: 0.5,  speed: 1000, spread: 0.05, mag: 12, reload: 1.6, range: 340, lead: 0 },
  2: { name: 'Rifle',  dmg: 11, rof: 0.12, speed: 1500, spread: 0.05, mag: 30, reload: 2.0, range: 380, lead: 0.55 },
  3: { name: 'Sniper', dmg: 60, rof: 1.3,  speed: 1900, spread: 0,    mag: 1,  reload: 2.4, range: 460, lead: 1.0 },
};
export const TURRET_UP = { 2: 50, 3: 250 };
export const TURRET_MUZZLE = 50;

// ---- animals ----
export const ANIMALS = {
  boar:      { hp: 35,  r: 17, walk: 62, chase: 128, dmg: 7,  atk: 0.8, detect: 300, lose: 560, loot: ['wood', 1, 3] },
  wolf:      { hp: 62,  r: 15, walk: 84, chase: 190, dmg: 12, atk: 0.6, detect: 430, lose: 720, loot: ['metal', 1, 2], biome: 'jungle', pack: true },
  bear:      { hp: 165, r: 25, walk: 54, chase: 132, dmg: 24, atk: 1.0, detect: 360, lose: 660, loot: ['metal', 3, 6], biome: 'winter' },
  alligator: { hp: 140, r: 22, walk: 48, chase: 158, dmg: 22, atk: 0.9, detect: 340, lose: 620, loot: ['metal', 2, 5], biome: 'jungle', lake: true },
  snake:     { hp: 42,  r: 11, walk: 78, chase: 214, dmg: 14, atk: 0.5, detect: 380, lose: 640, loot: ['metal', 1, 2], biome: 'desert' },
  scorpion:  { hp: 28,  r: 12, walk: 74, chase: 158, dmg: 6,  atk: 0.7, detect: 300, lose: 540, loot: ['metal', 1, 2], biome: 'desert', poison: true },
  polarbear: { hp: 205, r: 27, walk: 58, chase: 142, dmg: 28, atk: 1.0, detect: 380, lose: 690, loot: ['metal', 4, 7], biome: 'winter' },
};
export const ANIMAL_SPAWNS = [
  ['boar', 12], ['wolf', 7], ['bear', 6], ['alligator', 8], ['snake', 9], ['scorpion', 8], ['polarbear', 5],
];

// ---- shop ----
export const SHOP = {
  trades: [ ['wood', 100, 6], ['stone', 100, 9], ['metal', 50, 10] ],
  buys: {
    pistol: { ammo: 48, cost: 6 }, rifle: { ammo: 90, cost: 10 }, minigun: { ammo: 200, cost: 16 },
    rocket: { ammo: 2, cost: 24 }, shotgun: { ammo: 24, cost: 9 }, sniper: { ammo: 5, cost: 24 }, hmg: { ammo: 150, cost: 20 },
  },
  jackhammer: 30, laser: 14, fenceWood: 10, grenade: 8, signal: 60, hqm: { cost: 12, amt: 10 }, worker: 100,
};

// ---- monuments / guards / events ----
export const GUARD = { hp: 64, r: 14, dmg: 8, rof: 0.5, range: 430, detect: 540, speed: 118, leash: 170, bspeed: 1200, spread: 0.06 };
export const MONUMENTS = [
  { type: 'gas',       name: 'Gas Station',         fx: 0.26, fy: 0.30, crates: 4, barrels: 12, guards: 3 },
  { type: 'junk',      name: 'Junkyard',            fx: 0.75, fy: 0.32, crates: 5, barrels: 7,  guards: 3 },
  { type: 'warehouse', name: 'Abandoned Warehouse', fx: 0.50, fy: 0.74, crates: 7, barrels: 7,  guards: 4 },
];
export const QUARRY = { capR: 240, capT: 8, payEvery: 6, pay: { stone: 10, metal: 6, scrap: 4 } };
export const CONVOY = { vhp: 1100, ghp: 80, speed: 120, trange: 560, tdmg: 13, trof: 0.34, gdmg: 9, grof: 0.5, grange: 440, gspeed: 120, leash: 300, bspeed: 1300 };
export const PATROL = { hp: 450, speed: 330, orbitR: 420, orbitT: 22, strafeR: 760, flakR: 720 };
export const CRATE = { hackT: 60, r: 150 };

// ---- AI tuning ----
export const AI = {
  TEAM_COUNT: 7,
  COLS: ['#b85b5b', '#5b8bb8', '#b89b5b', '#7bb85b', '#9b5bb8', '#5bb8a8', '#b8765b', '#8b8b5b', '#b85b9b', '#6b78b8'],
  BOT_SPEED: 160,
  ROCKET_MIN: 230,
  STRAFE_FLIP: 0.9,
  REACT_R: 640,
  WORKER_COST: 50,
  GATHER_LOAD: 300,
  MINICOPTER_COST: 30,
  SIGNAL_COST: 60,
  HIRE_CAP_HARD: 16,
  HIRE_CAP: 8,
  RESPAWN_T: 15,
  TRIPWIRE: 2600,          // hard-team raid intel radius
  RAID_DEF_W: 0.55,        // per defender-home raid score weight
  RAID_TUR_W: 0.30,        // per turret raid score weight
  ENDGAME_T: 420,
  ENDGAME_BASES: 6,
};
