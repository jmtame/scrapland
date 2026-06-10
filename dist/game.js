(() => {
  // src/sim/config.js
  var TILE = 64;
  var WORLD = { w: 13824, h: 9216 };
  var PLAYER_R = 16;
  var GATHER_RANGE = 64;
  var OWNER = "p1";
  var DT = 1 / 60;
  var WEAPONS = {
    pistol: { name: "Pistol", magSize: 12, reserve: 96, dmg: 14, rof: 0.22, spread: 0.03, speed: 1150, auto: false, reloadT: 1, kick: 6, range: 1.6 },
    rifle: { name: "Rifle", magSize: 30, reserve: 180, dmg: 11, rof: 0.09, spread: 0.05, speed: 1500, auto: true, reloadT: 1.6, kick: 4, range: 2.4 },
    minigun: { name: "Minigun", magSize: 200, reserve: 200, dmg: 6, rof: 0.045, spread: 0.09, speed: 1300, auto: true, reloadT: 4.5, kick: 2, range: 1.8, windup: 2.6 },
    rocket: { name: "Rocket", magSize: 1, reserve: 50, dmg: 55, rof: 0.9, spread: 0.012, speed: 560, auto: false, reloadT: 1.9, kick: 16, range: 2.8, rocket: true, splash: 96, splashDmg: 150, structDmg: 55 },
    sniper: { name: "Sniper", magSize: 1, reserve: 30, dmg: 60, rof: 1, spread: 4e-3, speed: 1180, auto: false, reloadT: 1.8, kick: 14, range: 3.4, locked: true },
    shotgun: { name: "Shotgun", magSize: 6, reserve: 48, dmg: 9, rof: 0.3, spread: 0.17, speed: 1050, auto: true, reloadT: 1.5, kick: 9, range: 1.1, pellets: 7 },
    hmg: { name: "HMG", magSize: 100, reserve: 300, dmg: 15, rof: 0.05, spread: 0.11, speed: 1500, auto: true, reloadT: 3, kick: 9, range: 2.4, locked: true, tracer: "hmg" }
  };
  var GRENADE = { splash: 120, splashDmg: 120, structDmg: 22, fuse: 2 };
  var BUILD = {
    floor: { name: "Floor", cost: { wood: 5 }, cat: "cell", hp: 100, found: true, up: true },
    trifloor: { name: "Tri-Floor", cost: { wood: 4 }, cat: "cell", hp: 90, found: true, up: true, tri: true, hidden: true },
    wall: { name: "Wall", cost: { wood: 10 }, cat: "edge", hp: 100, up: true },
    triangle: { name: "Triangle", cost: { wood: 8 }, cat: "diag", hp: 100, up: true, hidden: true },
    door: { name: "Door", cost: { wood: 10, metal: 5 }, cat: "edge", hp: 50, up: true, mMul: 2, door: true },
    box: { name: "Box", cost: { wood: 15 }, cat: "cell", hp: 90, box: true, store: true, hidden: true },
    turret: { name: "Turret", cost: { wood: 40, metal: 30 }, cat: "cell", hp: 150, solid: true, turret: true },
    cupboard: { name: "Cupboard", cost: { wood: 60, metal: 25 }, cat: "cell", hp: 300, solid: true, tc: true, store: true }
  };
  var PIECES = ["floor", "wall", "door", "turret", "cupboard"];
  var BASE_MAX = 10;
  var UPGRADE = { wood: { to: "stone", cost: { stone: 15 } }, stone: { to: "metal", cost: { metal: 20 } }, metal: { to: "armored", cost: { hqm: 8 } } };
  function tierHp(def, mat) {
    const mMul = def.mMul || 4;
    if (mat === "armored") return def.hp * mMul * 2;
    if (mat === "metal") return def.hp * mMul;
    if (mat === "stone") return Math.round(def.hp * (1 + mMul) / 2);
    return def.hp;
  }
  var CLAIM_R = 900;
  var MIN_TC_DIST = 900;
  var UPKEEP = 75e-4;
  var REPAIR_LOCK = 30;
  var HIT_LOCK = 10;
  var DECAY_UNCLAIMED = 600;
  var DECAY_CENTER = 3600;
  var DECAY_EDGE = 1200;
  var DAY_LEN = 240;
  var SAFE_R = 620;
  var MON_NOBUILD = 620;
  var BOUNTY_REWARD = 50;
  var FENCE = { hp: 200, len: 46, half: 23, life: 60 };
  var HEAD_R = 7;
  var HEADSHOT_MUL = 1.9;
  var ANIM_PAUSE = 0.65;
  var ARMOR = {
    head: [0, 0.25, 0.45, 0.62],
    body: [0, 0.18, 0.34, 0.5],
    cost: [0, 16, 34, 60],
    headCol: [null, "#cdbb92", "#9aabb8", "#7c8ec9"],
    bodyCol: [null, "#857748", "#959ca3", "#5d7a9b"]
  };
  var armorReduce = (lvl, part) => ARMOR[part][clampLvl(lvl)];
  var clampLvl = (l) => l < 0 ? 0 : l > 3 ? 3 : l | 0;
  var COPTER = { speed: 560, boost: 980, accel: 360, drag: 0.55, dragIdle: 0.85, turn: 2.1, r: 30, hp: 260 };
  var TRANSPORT = { speed: 455, accel: 300, drag: 0.55, turn: 1.6, r: 46, seats: 4, cost: 40, hp: 360 };
  var TTIER = {
    1: { name: "Pistol", dmg: 14, rof: 0.5, speed: 1e3, spread: 0.05, mag: 12, reload: 1.6, range: 340, lead: 0 },
    2: { name: "Rifle", dmg: 11, rof: 0.12, speed: 1500, spread: 0.05, mag: 30, reload: 2, range: 380, lead: 0.55 },
    3: { name: "Sniper", dmg: 60, rof: 1.3, speed: 1900, spread: 0, mag: 1, reload: 2.4, range: 460, lead: 1 }
  };
  var TURRET_UP = { 2: 50, 3: 250 };
  var TURRET_MUZZLE = 50;
  var ANIMALS = {
    boar: { hp: 35, r: 17, walk: 62, chase: 128, dmg: 7, atk: 0.8, detect: 300, lose: 560, loot: ["wood", 1, 3] },
    wolf: { hp: 62, r: 15, walk: 84, chase: 190, dmg: 12, atk: 0.6, detect: 430, lose: 720, loot: ["metal", 1, 2], biome: "jungle", pack: true },
    bear: { hp: 165, r: 25, walk: 54, chase: 132, dmg: 24, atk: 1, detect: 360, lose: 660, loot: ["metal", 3, 6], biome: "winter" },
    alligator: { hp: 140, r: 22, walk: 48, chase: 158, dmg: 22, atk: 0.9, detect: 340, lose: 620, loot: ["metal", 2, 5], biome: "jungle", lake: true },
    snake: { hp: 42, r: 11, walk: 78, chase: 214, dmg: 14, atk: 0.5, detect: 380, lose: 640, loot: ["metal", 1, 2], biome: "desert" },
    scorpion: { hp: 28, r: 12, walk: 74, chase: 158, dmg: 6, atk: 0.7, detect: 300, lose: 540, loot: ["metal", 1, 2], biome: "desert", poison: true },
    polarbear: { hp: 205, r: 27, walk: 58, chase: 142, dmg: 28, atk: 1, detect: 380, lose: 690, loot: ["metal", 4, 7], biome: "winter" }
  };
  var ANIMAL_SPAWNS = [
    ["boar", 12],
    ["wolf", 7],
    ["bear", 6],
    ["alligator", 8],
    ["snake", 9],
    ["scorpion", 8],
    ["polarbear", 5]
  ];
  var SHOP = {
    trades: [["wood", 100, 6], ["stone", 100, 9], ["metal", 50, 10]],
    buys: {
      pistol: { ammo: 48, cost: 6 },
      rifle: { ammo: 90, cost: 10 },
      minigun: { ammo: 200, cost: 16 },
      rocket: { ammo: 2, cost: 24 },
      shotgun: { ammo: 24, cost: 9 },
      sniper: { ammo: 5, cost: 24 },
      hmg: { ammo: 150, cost: 20 }
    },
    jackhammer: 30,
    laser: 14,
    fenceWood: 10,
    grenade: 8,
    signal: 60,
    hqm: { cost: 12, amt: 10 },
    worker: 100
  };
  var GUARD = { hp: 64, r: 14, dmg: 8, rof: 0.5, range: 430, detect: 540, speed: 118, leash: 170, bspeed: 1200, spread: 0.06 };
  var MONUMENTS = [
    { type: "gas", name: "Gas Station", fx: 0.26, fy: 0.3, crates: 4, barrels: 12, guards: 3 },
    { type: "junk", name: "Junkyard", fx: 0.75, fy: 0.32, crates: 5, barrels: 7, guards: 3 },
    { type: "warehouse", name: "Abandoned Warehouse", fx: 0.5, fy: 0.74, crates: 7, barrels: 7, guards: 4 }
  ];
  var QUARRY = { capR: 240, capT: 8, payEvery: 6, pay: { stone: 10, metal: 6, scrap: 4 } };
  var CONVOY = { vhp: 1100, ghp: 80, speed: 120, trange: 560, tdmg: 13, trof: 0.34, gdmg: 9, grof: 0.5, grange: 440, gspeed: 120, leash: 300, bspeed: 1300 };
  var PATROL = { hp: 450, speed: 330, orbitR: 420, orbitT: 22, strafeR: 760, flakR: 720 };
  var CRATE = { hackT: 60, r: 150 };
  var AI = {
    TEAM_COUNT: 7,
    COLS: ["#b85b5b", "#5b8bb8", "#b89b5b", "#7bb85b", "#9b5bb8", "#5bb8a8", "#b8765b", "#8b8b5b", "#b85b9b", "#6b78b8"],
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
    TRIPWIRE: 2600,
    // hard-team raid intel radius
    RAID_DEF_W: 0.55,
    // per defender-home raid score weight
    RAID_TUR_W: 0.3,
    // per turret raid score weight
    ENDGAME_T: 420,
    ENDGAME_BASES: 6
  };

  // src/sim/rng.js
  function makeRng(seed2) {
    let a = seed2 >>> 0 || 1;
    const next = () => {
      a |= 0;
      a = a + 1831565813 | 0;
      let t = Math.imul(a ^ a >>> 15, 1 | a);
      t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
    return {
      next,
      rand: (lo = 0, hi = 1) => lo + next() * (hi - lo),
      randi: (lo, hi) => Math.floor(lo + next() * (hi - lo + 1)),
      chance: (p) => next() < p,
      pick: (arr) => arr[Math.floor(next() * arr.length)],
      angle: () => next() * Math.PI * 2
    };
  }

  // src/sim/util.js
  var TAU = Math.PI * 2;
  var clamp = (v, a, b) => v < a ? a : v > b ? b : v;
  var lerp = (a, b, t) => a + (b - a) * t;
  var dist2 = (x0, y0, x1, y1) => {
    const dx = x1 - x0, dy = y1 - y0;
    return dx * dx + dy * dy;
  };
  var dist = (x0, y0, x1, y1) => Math.sqrt(dist2(x0, y0, x1, y1));
  var smooth01 = (t) => {
    t = clamp(t, 0, 1);
    return t * t * (3 - 2 * t);
  };
  function angDiff(a, b) {
    let d = (b - a) % TAU;
    if (d > Math.PI) d -= TAU;
    if (d < -Math.PI) d += TAU;
    return d;
  }
  function turnToward(a, b, step2) {
    const d = angDiff(a, b);
    if (Math.abs(d) <= step2) return b;
    return a + Math.sign(d) * step2;
  }
  var gkey = (gx, gy) => gx + "," + gy;
  var ekey = (v, gx, gy) => v + "," + gx + "," + gy;
  function ptSeg(px, py, x0, y0, x1, y1) {
    const dx = x1 - x0, dy = y1 - y0;
    const l2 = dx * dx + dy * dy;
    if (l2 === 0) return dist(px, py, x0, y0);
    let t = ((px - x0) * dx + (py - y0) * dy) / l2;
    t = clamp(t, 0, 1);
    return dist(px, py, x0 + t * dx, y0 + t * dy);
  }
  function segSeg(ax, ay, bx, by, cx, cy, dx, dy) {
    const d1 = cross(cx, cy, dx, dy, ax, ay);
    const d2 = cross(cx, cy, dx, dy, bx, by);
    const d3 = cross(ax, ay, bx, by, cx, cy);
    const d4 = cross(ax, ay, bx, by, dx, dy);
    if ((d1 > 0 && d2 < 0 || d1 < 0 && d2 > 0) && (d3 > 0 && d4 < 0 || d3 < 0 && d4 > 0)) return true;
    return false;
  }
  function cross(ax, ay, bx, by, px, py) {
    return (bx - ax) * (py - ay) - (by - ay) * (px - ax);
  }
  function segXpt(ax, ay, bx, by, cx, cy, dx, dy) {
    const r1x = bx - ax, r1y = by - ay, r2x = dx - cx, r2y = dy - cy;
    const den = r1x * r2y - r1y * r2x;
    if (Math.abs(den) < 1e-9) return null;
    const t = ((cx - ax) * r2y - (cy - ay) * r2x) / den;
    const u = ((cx - ax) * r1y - (cy - ay) * r1x) / den;
    if (t < 0 || t > 1 || u < 0 || u > 1) return null;
    return { x: ax + t * r1x, y: ay + t * r1y };
  }
  function hash2(x, y) {
    let h = x * 374761393 + y * 668265263 | 0;
    h = h ^ h >> 13 | 0;
    h = Math.imul(h, 1274126177);
    return ((h ^ h >> 16) >>> 0) / 4294967296;
  }

  // src/sim/world.js
  function buildWorld(S2) {
    const R = S2.rng;
    const W = WORLD.w, H = WORLD.h;
    const N2 = 200, cx = W / 2, cy = H / 2, rx = 0.47 * W, ry = 0.47 * H;
    const harm = [];
    for (let k = 0; k < 5; k++) harm.push({ f: k + 2, w: 1 / (k + 1.2), p: R.rand(0, TAU) });
    let raw = [], lo = 1e9, hi = -1e9;
    for (let i = 0; i < N2; i++) {
      const a = i / N2 * TAU;
      let v = 0;
      for (const h of harm) v += Math.sin(a * h.f + h.p) * h.w;
      raw.push(v);
      lo = Math.min(lo, v);
      hi = Math.max(hi, v);
    }
    const rad = raw.map((v) => {
      const n = (v - lo) / (hi - lo) * 2 - 1;
      return 1 - 0.22 * (0.5 - 0.5 * n);
    });
    const island = { cx, cy, rx, ry, N: N2, rad };
    const islandRadAt = (ang) => {
      let a = ang % TAU;
      if (a < 0) a += TAU;
      const f = a / TAU * N2;
      const i0 = Math.floor(f) % N2, i1 = (i0 + 1) % N2;
      return rad[i0] + (rad[i1] - rad[i0]) * (f - i0);
    };
    const landFactor = (x, y) => {
      const dx = (x - cx) / rx, dy = (y - cy) / ry;
      const r = Math.sqrt(dx * dx + dy * dy);
      return islandRadAt(Math.atan2(dy, dx)) - r;
    };
    const onLand = (x, y) => landFactor(x, y) > 0;
    const islandPath = [];
    for (let i = 0; i < N2; i++) {
      const a = i / N2 * TAU;
      islandPath.push({ x: cx + Math.cos(a) * rad[i] * rx, y: cy + Math.sin(a) * rad[i] * ry });
    }
    const biomeRidge = (y) => y === void 0 ? 0 : (Math.sin(y * 16e-4 + 1.7) * 0.62 + Math.sin(y * 43e-4 + 4.2) * 0.38) * W * 0.055;
    const biomeAt = (x, y) => {
      const t = (x + biomeRidge(y)) / W;
      return t < 1 / 3 ? "desert" : t < 2 / 3 ? "jungle" : "winter";
    };
    const shop = { x: W / 2, y: H / 2, r: 46 };
    const roads = [];
    for (let p = 0; p < 5; p++) {
      const horiz = p % 2 === 0;
      const span = horiz ? W : H, cspan = horiz ? H : W;
      const base = R.rand(0.14, 0.86) * cspan, amp = R.rand(260, 820), freq = R.rand(1.4, 3.2), ph = R.rand(0, TAU);
      const pts = [];
      for (let i = 0; i <= 30; i++) {
        const t = i / 30;
        const cross2 = clamp(base + Math.sin(t * freq * TAU + ph) * amp, 60, cspan - 60);
        pts.push(horiz ? { x: t * span, y: cross2 } : { x: cross2, y: t * span });
      }
      const w = R.rand(26, 42);
      const poles = [];
      const side = R.chance(0.5) ? 1 : -1;
      for (let i = 0; i < pts.length; i += 2) {
        const a = roadAngAt(pts, i);
        poles.push({
          x: clamp(pts[i].x + Math.cos(a + Math.PI / 2) * side * (w / 2 + 24), 20, W - 20),
          y: clamp(pts[i].y + Math.sin(a + Math.PI / 2) * side * (w / 2 + 24), 20, H - 20)
        });
      }
      roads.push({ pts, w, poles, fade: pts.map(() => 1) });
    }
    function roadAngAt(pts, i) {
      const a = pts[Math.max(0, i - 1)], b = pts[Math.min(pts.length - 1, i + 1)];
      return Math.atan2(b.y - a.y, b.x - a.x);
    }
    const coastPoint = (onPt, offPt) => {
      let a = onPt, b = offPt;
      for (let i = 0; i < 7; i++) {
        const m = { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 };
        if (landFactor(m.x, m.y) > 0.015) a = m;
        else b = m;
      }
      return { x: a.x, y: a.y };
    };
    const trimToLand = (pts) => {
      const on = pts.map((p) => landFactor(p.x, p.y) > 0.015);
      let i0 = on.indexOf(true);
      let i1 = on.lastIndexOf(true);
      if (i0 === -1 || i1 - i0 < 2) return null;
      const out = pts.slice(i0, i1 + 1);
      if (i0 > 0) out[0] = coastPoint(out[0], pts[i0 - 1]);
      if (i1 < pts.length - 1) out[out.length - 1] = coastPoint(out[out.length - 1], pts[i1 + 1]);
      return out;
    };
    const railHoriz = R.chance(0.5);
    const rails = [];
    for (const band of [[0.15, 0.35], [0.65, 0.85]]) {
      const span = railHoriz ? W : H, cspan = railHoriz ? H : W;
      for (let attempt = 0; attempt < 4 && !rails.some((r) => r.band === band[0]); attempt++) {
        const base = R.rand(band[0], band[1]) * cspan, amp = R.rand(70, Math.min(300, cspan * 0.09)), freq = R.rand(0.7, 1.5), ph = R.rand(0, TAU);
        let pts = [];
        for (let i = 0; i <= 46; i++) {
          const t = i / 46;
          const cross2 = clamp(base + Math.sin(t * freq * TAU + ph) * amp, 90, cspan - 90);
          pts.push(railHoriz ? { x: t * span, y: cross2 } : { x: cross2, y: t * span });
        }
        pts = trimToLand(pts);
        if (!pts) continue;
        let crosses = false;
        for (const other of rails) {
          for (let i = 0; i < pts.length - 1 && !crosses; i++)
            for (let j = 0; j < other.pts.length - 1; j++)
              if (segSeg(pts[i].x, pts[i].y, pts[i + 1].x, pts[i + 1].y, other.pts[j].x, other.pts[j].y, other.pts[j + 1].x, other.pts[j + 1].y)) {
                crosses = true;
                break;
              }
        }
        if (!crosses) rails.push({ pts, band: band[0] });
      }
    }
    const polyDist = (x, y, polys) => {
      let best = 1e9;
      for (const r of polys) {
        const pts = r.pts;
        for (let i = 0; i < pts.length - 1; i++) best = Math.min(best, ptSeg(x, y, pts[i].x, pts[i].y, pts[i + 1].x, pts[i + 1].y));
      }
      return best;
    };
    const railDist = (x, y) => polyDist(x, y, rails);
    const pathDist = (x, y) => polyDist(x, y, roads);
    for (const rd of roads) {
      rd.fade = rd.pts.map((p) => {
        const lf = landFactor(p.x, p.y);
        if (lf <= 0.015) return 0;
        return smooth01((railDist(p.x, p.y) - 17) / 9) * smooth01((lf - 0.015) / 0.05);
      });
      rd.poles = rd.poles.filter((p) => landFactor(p.x, p.y) > 0.03);
    }
    const crossings = [];
    for (const rl of rails) for (let i = 0; i < rl.pts.length - 1; i++) {
      for (const rd of roads) for (let j = 0; j < rd.pts.length - 1; j++) {
        const pt = segXpt(rl.pts[i].x, rl.pts[i].y, rl.pts[i + 1].x, rl.pts[i + 1].y, rd.pts[j].x, rd.pts[j].y, rd.pts[j + 1].x, rd.pts[j + 1].y);
        if (pt) crossings.push({ x: pt.x, y: pt.y, railAng: Math.atan2(rl.pts[i + 1].y - rl.pts[i].y, rl.pts[i + 1].x - rl.pts[i].x), gate: 0, active: false });
      }
    }
    const lakes = [];
    for (let a = 0; a < 26 && lakes.length < 5; a++) {
      const x = R.rand(0.34 * W, 0.97 * W), y = R.rand(0.14 * H, 0.86 * H), r = R.rand(170, 330);
      if (landFactor(x, y) < r / Math.min(rx, ry) + 0.06) continue;
      if (biomeAt(x, y) === "desert") continue;
      if (railDist(x, y) < r + 120) continue;
      if (dist(x, y, shop.x, shop.y) < SAFE_R + r + 260) continue;
      if (lakes.some((L) => dist(x, y, L.x, L.y) < r + L.r + 220)) continue;
      const wob = [];
      const h3 = [{ f: 2, p: R.rand(0, TAU) }, { f: 3, p: R.rand(0, TAU) }, { f: 5, p: R.rand(0, TAU) }];
      for (let i = 0; i < 28; i++) {
        const ang = i / 28 * TAU;
        let v = 0;
        for (let k = 0; k < 3; k++) v += Math.sin(ang * h3[k].f + h3[k].p) / (k + 1.6);
        wob.push(1 + 0.17 * Math.max(-1, Math.min(1, v)));
      }
      const frozen = biomeAt(x, y) === "winter";
      const pads = [];
      if (!frozen) for (let i = 0, n = R.randi(2, 4); i < n; i++) pads.push({ a: R.rand(0, TAU), rr: R.rand(0.2, 0.72), s: R.rand(9, 16) });
      lakes.push({ x, y, r, wob, frozen, pads, seed: R.rand(0, 9) });
    }
    const lakeAt = (x, y) => {
      for (const L of lakes) if (dist2(x, y, L.x, L.y) < L.r * L.r) return L;
      return null;
    };
    const monuments = [];
    for (const def of MONUMENTS) {
      let x = def.fx * W, y = def.fy * H;
      for (let i = 0; i < 8 && (landFactor(x, y) < 0.12 || lakeAt(x, y)); i++) {
        x = x * 0.78 + cx * 0.22;
        y = y * 0.78 + cy * 0.22;
      }
      monuments.push({ type: def.type, name: def.name, x, y, r: 200, crates: def.crates, nbarrels: def.barrels, nguards: def.guards });
    }
    const minShopDist = SAFE_R + 240 + 700;
    let q = { x: 0.4 * W, y: 0.52 * H };
    outer: for (let ring = 0; ring < 6; ring++) {
      const radius = minShopDist + ring * 700;
      for (let s = 0; s < 16; s++) {
        const a = s / 16 * TAU;
        const x = shop.x + Math.cos(a) * radius, y = shop.y + Math.sin(a) * radius;
        if (x < 600 || y < 600 || x > W - 600 || y > H - 600) continue;
        if (landFactor(x, y) < 0.12 || lakeAt(x, y)) continue;
        if (railDist(x, y) < 360 || pathDist(x, y) < 320) continue;
        if (dist(x, y, shop.x, shop.y) < minShopDist) continue;
        q = { x, y };
        break outer;
      }
    }
    monuments.push({ type: "quarry", name: "Quarry", x: q.x, y: q.y, r: 170 });
    S2.quarry = { x: q.x, y: q.y, r: QUARRY.capR, owner: null, capOwner: null, capT: 0, payT: 0, arm: 0, paid: 0 };
    const boulders = [], rocks = [];
    const okRock = (x, y, r, list) => {
      if (landFactor(x, y) < 0.06 || lakeAt(x, y)) return false;
      const b = biomeAt(x, y);
      if (b !== "jungle" && b !== "winter") return false;
      if (dist(x, y, shop.x, shop.y) < SAFE_R + r) return false;
      for (const m of monuments) if (dist(x, y, m.x, m.y) < m.r + 240) return false;
      if (railDist(x, y) < r + 90) return false;
      for (const o of list) if (dist(x, y, o.x, o.y) < r + o.r + 44) return false;
      return true;
    };
    for (let n = 0; n < 34; n++) for (let t = 0; t < 30; t++) {
      const x = R.rand(W / 3, W - 120), y = R.rand(120, H - 120), r = R.rand(28, 42);
      if (okRock(x, y, r, boulders)) {
        boulders.push({ x, y, r, seed: R.rand(0, 9), winter: biomeAt(x, y) === "winter" });
        break;
      }
    }
    for (let n = 0; n < 72; n++) for (let t = 0; t < 18; t++) {
      const x = R.rand(W / 3, W - 100), y = R.rand(100, H - 100), r = R.rand(7, 13);
      if (okRock(x, y, r, boulders)) {
        rocks.push({ x, y, r, seed: R.rand(0, 9), winter: biomeAt(x, y) === "winter" });
        break;
      }
    }
    S2.world = {
      island,
      islandPath,
      onLand,
      landFactor,
      islandRadAt,
      biomeAt,
      biomeRidge,
      shop,
      roads,
      rails,
      railHoriz,
      crossings,
      lakes,
      lakeAt,
      railDist,
      pathDist,
      monuments,
      boulders,
      rocks,
      flora: [],
      palms: []
    };
    spawnNodes(S2);
    spawnMonumentLoot(S2);
    spawnFlora(S2);
    spawnAnimals(S2);
    S2.copter = { x: S2.player.x + 120, y: S2.player.y, angle: 0, rotor: 0, vx: 0, vy: 0, spd: 0, hp: COPTER.hp, max: COPTER.hp, destroyed: false };
  }
  function spawnNoOverlap(S2, list, r, margin) {
    const R = S2.rng;
    for (let t = 0; t < 40; t++) {
      const x = R.rand(margin, WORLD.w - margin), y = R.rand(margin, WORLD.h - margin);
      if (dist(x, y, S2.player.x, S2.player.y) < 220) continue;
      if (S2.world.landFactor(x, y) < 0.05 || S2.world.lakeAt(x, y)) continue;
      let bad = false;
      for (const o of list) if (dist(x, y, o.x, o.y) < r + o.r + 24) {
        bad = true;
        break;
      }
      if (!bad) return { x, y };
    }
    return null;
  }
  function spawnNodes(S2) {
    const R = S2.rng;
    const defs = [
      ["tree", 290, 22, 120, "wood"],
      ["stone", 190, 26, 140, "stone"],
      ["metal", 150, 24, 110, "metal"]
    ];
    const all = [];
    for (const [type, count, r, amt, base] of defs) {
      for (let i = 0; i < count; i++) {
        const p = spawnNoOverlap(S2, all, r, 90);
        if (!p) continue;
        const node = { type, x: p.x, y: p.y, r, amount: amt, max: amt, regen: 0, seed: R.rand(0, 1e3), base, by: null, byT: 0 };
        all.push(node);
        S2.resources.push(node);
      }
    }
  }
  function spawnMonumentLoot(S2) {
    const R = S2.rng;
    for (const m of S2.world.monuments) {
      if (m.type === "quarry") continue;
      for (let i = 0; i < m.crates; i++) {
        const a = R.rand(0, TAU), d = R.rand(24, 0.62 * m.r);
        S2.barrels.push({ x: m.x + Math.cos(a) * d, y: m.y + Math.sin(a) * d, r: 18, hp: 45, max: 45, seed: R.rand(0, 9), tier: "mon", crate: true, respawnT: 0 });
      }
      for (let i = 0; i < m.nbarrels; i++) {
        const a = R.rand(0, TAU), d = R.rand(0.45 * m.r, 0.95 * m.r);
        S2.barrels.push({ x: m.x + Math.cos(a) * d, y: m.y + Math.sin(a) * d, r: 16, hp: 30, max: 30, seed: R.rand(0, 9), tier: "mon", respawnT: 0 });
      }
      for (let i = 0; i < m.nguards; i++) spawnGuard(S2, m);
    }
    for (const rd of S2.world.roads) {
      if (rd.convoy) continue;
      for (let i = 0; i < rd.pts.length; i += 2) {
        if (i % 4 !== 0 || !R.chance(0.7)) continue;
        const p = rd.pts[i];
        const a = R.rand(0, TAU);
        const x = clamp(p.x + Math.cos(a) * (rd.w / 2 + R.rand(16, 70)), 30, WORLD.w - 30);
        const y = clamp(p.y + Math.sin(a) * (rd.w / 2 + R.rand(16, 70)), 30, WORLD.h - 30);
        if (dist(x, y, S2.world.shop.x, S2.world.shop.y) < SAFE_R + 60) continue;
        if (!S2.world.onLand(x, y) || S2.world.lakeAt(x, y)) continue;
        S2.barrels.push({ x, y, r: 16, hp: 30, max: 30, seed: R.rand(0, 9), tier: "road", respawnT: 0 });
      }
    }
  }
  function spawnGuard(S2, m) {
    const R = S2.rng;
    const a = R.rand(0, TAU), d = R.rand(0.35 * m.r, 0.8 * m.r);
    S2.guards.push({
      mx: m.x,
      my: m.y,
      mr: m.r,
      x: m.x + Math.cos(a) * d,
      y: m.y + Math.sin(a) * d,
      hp: GUARD.hp,
      max: GUARD.hp,
      angle: R.rand(0, TAU),
      gunCd: R.rand(0, 0.6),
      dead: false,
      respawnT: 0,
      wpX: 0,
      wpY: 0,
      wpT: 0,
      hasWp: false,
      seed: R.rand(0, 9),
      vx: 0,
      vy: 0
    });
  }
  function spawnFlora(S2) {
    const R = S2.rng;
    const W = WORLD.w, H = WORLD.h;
    const FLOWER_COLS = ["#d96a83", "#dbb44a", "#c46ac4", "#e8e4da", "#e08a52", "#7aa0e0"];
    for (let i = 0, n = R.randi(200, 300); i < n; i++) {
      const x = R.rand(W / 3, 2 * W / 3), y = R.rand(60, H - 60);
      if (!S2.world.onLand(x, y) || S2.world.lakeAt(x, y) || S2.world.biomeAt(x, y) !== "jungle") continue;
      const t = R.next();
      S2.world.flora.push({ x, y, type: t < 0.4 ? "flower" : t < 0.72 ? "fern" : "shrub", seed: R.rand(0, 9), col: R.pick(FLOWER_COLS) });
    }
    for (let i = 0, n = R.randi(90, 140); i < n; i++) {
      const x = R.rand(30, W / 3), y = R.rand(60, H - 60);
      if (!S2.world.onLand(x, y) || S2.world.lakeAt(x, y) || S2.world.biomeAt(x, y) !== "desert") continue;
      S2.world.flora.push({ x, y, type: R.chance(0.5) ? "cactus" : "deshrub", seed: R.rand(0, 9), arms: R.randi(0, 2) });
    }
    for (let i = 0; i < S2.world.islandPath.length; i += 2) {
      const p = S2.world.islandPath[i];
      const x = S2.world.island.cx + (p.x - S2.world.island.cx) * 0.93;
      const y = S2.world.island.cy + (p.y - S2.world.island.cy) * 0.93;
      if (S2.world.biomeAt(x, y) === "jungle" && R.chance(0.34)) S2.world.palms.push({ x, y, seed: R.rand(0, 9) });
    }
    for (let i = 0, n = R.randi(10, 16); i < n; i++) {
      const x = R.rand(40, W / 3 - 20), y = R.rand(80, H - 80);
      if (S2.world.biomeAt(x, y) === "desert" && S2.world.onLand(x, y) && !S2.world.lakeAt(x, y)) S2.world.palms.push({ x, y, seed: R.rand(0, 9), desert: true });
    }
  }
  function spawnAnimals(S2) {
    const R = S2.rng;
    const W = WORLD.w, H = WORLD.h;
    const bandOf = (biome) => biome === "desert" ? [0, W / 3] : biome === "jungle" ? [W / 3, 2 * W / 3] : biome === "winter" ? [2 * W / 3, W] : [0, W];
    const placed = [];
    for (const [type, count] of ANIMAL_SPAWNS) {
      const def = ANIMALS[type];
      for (let i = 0; i < count; i++) {
        const leader = spawnOneAnimal(S2, type, def, bandOf(def.biome), placed, null);
        if (leader && def.pack && R.chance(0.45)) {
          for (let p = 0, n = R.randi(1, 2); p < n; p++) spawnOneAnimal(S2, type, def, bandOf(def.biome), placed, leader);
        }
      }
    }
  }
  function spawnOneAnimal(S2, type, def, band, placed, leader) {
    const R = S2.rng;
    for (let t = 0; t < 40; t++) {
      let x, y, lake = leader ? leader.lake : null;
      if (leader) {
        x = leader.x + R.rand(-150, 150);
        y = leader.y + R.rand(-150, 150);
      } else if (def.lake) {
        const lakes = S2.world.lakes.filter((L) => !L.frozen || def.biome !== "jungle");
        if (!lakes.length) return null;
        lake = R.pick(lakes);
        const a2 = R.rand(0, TAU), d = lake.r + R.rand(30, 200);
        x = lake.x + Math.cos(a2) * d;
        y = lake.y + Math.sin(a2) * d;
      } else {
        x = R.rand(band[0], band[1]);
        y = R.rand(90, WORLD.h - 90);
      }
      x = clamp(x, band[0] - 70, band[1] + 70);
      y = clamp(y, 90, WORLD.h - 90);
      if (dist(x, y, S2.player.x, S2.player.y) < 220) continue;
      if (S2.world.landFactor(x, y) < 0.05) continue;
      if (S2.world.lakeAt(x, y) && !def.lake) continue;
      let bad = false;
      for (const o of placed) if (dist(x, y, o.x, o.y) < def.r + o.r + 8) {
        bad = true;
        break;
      }
      if (bad) continue;
      const a = {
        type,
        x,
        y,
        vx: 0,
        vy: 0,
        r: def.r,
        hp: def.hp,
        max: def.hp,
        aggro: null,
        atkcd: 0,
        hit: 0,
        wanderT: R.rand(0, 2),
        dir: R.rand(0, TAU),
        respawnT: 0,
        hostile: R.chance(0.1),
        foe: null,
        lake,
        pauseT: 0,
        stuckT: 0,
        blockedAll: 0,
        dead: false,
        avoidT: 0,
        avoidA: 0
      };
      placed.push(a);
      S2.animals.push(a);
      return a;
    }
    return null;
  }

  // src/sim/nav.js
  var COLS = Math.ceil(WORLD.w / TILE);
  var ROWS = Math.ceil(WORLD.h / TILE);
  var N = COLS * ROWS;
  function buildNav(S2) {
    const terrain = new Uint8Array(N);
    const cost = new Float32Array(N);
    for (let gy = 0; gy < ROWS; gy++) {
      for (let gx = 0; gx < COLS; gx++) {
        const x = gx * TILE + TILE / 2, y = gy * TILE + TILE / 2;
        const i = gy * COLS + gx;
        let c = 1;
        if (!S2.world.onLand(x, y)) {
          terrain[i] = 1;
          cost[i] = 1;
          continue;
        }
        const lake = S2.world.lakeAt(x, y);
        if (lake) c = lake.frozen ? 1.15 : 3;
        for (const b of S2.world.boulders) {
          if ((x - b.x) * (x - b.x) + (y - b.y) * (y - b.y) < (b.r + 18) * (b.r + 18)) {
            terrain[i] = 1;
            break;
          }
        }
        if (S2.world.pathDist(x, y) < 26) c = Math.min(c, 0.85);
        cost[i] = c;
      }
    }
    S2.nav = {
      COLS,
      ROWS,
      N,
      terrain,
      cost,
      stamp: 1,
      // bumped whenever walls/deploys/fences change
      penalty: /* @__PURE__ */ new Map(),
      // cellIdx -> expireT (anti-loop cost bump)
      g: new Float32Array(N),
      came: new Int32Array(N),
      vis: new Int32Array(N),
      gen: 0,
      heap: new Int32Array(N + 1),
      heapF: new Float32Array(N + 1)
    };
  }
  var cellIdx = (gx, gy) => gx < 0 || gy < 0 || gx >= COLS || gy >= ROWS ? -1 : gy * COLS + gx;
  function deployBlocked(S2, gx, gy, owner) {
    const d = S2.deploys.get(gkey(gx, gy));
    if (!d) return false;
    if (d.type === "cupboard") return d.owner !== owner;
    return true;
  }
  function cellPass(S2, gx, gy, owner) {
    const i = cellIdx(gx, gy);
    if (i < 0 || S2.nav.terrain[i]) return false;
    if (S2.walls.has("D," + gx + "," + gy)) return false;
    if (deployBlocked(S2, gx, gy, owner)) return false;
    if (S2.nav.fenceCells && S2.nav.fenceCells.has(i)) return false;
    return true;
  }
  function edgeState(S2, gx, gy, nx, ny, owner) {
    let k;
    if (nx > gx) k = ekey("V", nx, gy);
    else if (nx < gx) k = ekey("V", gx, gy);
    else if (ny > gy) k = ekey("H", gx, ny);
    else k = ekey("H", gx, gy);
    const w = S2.walls.get(k);
    if (!w || w.hp <= 0) return 0;
    if (w.type === "door") {
      if (w.open) return 1;
      if (w.lock && w.lock.by === owner) return 1;
      return 2;
    }
    return 2;
  }
  function stepOk(S2, gx, gy, nx, ny, owner) {
    if (!cellPass(S2, nx, ny, owner)) return -1;
    const e = edgeState(S2, gx, gy, nx, ny, owner);
    if (e === 2) return -1;
    return e;
  }
  function cellCost(S2, i, t) {
    let c = S2.nav.cost[i];
    const p = S2.nav.penalty.get(i);
    if (p !== void 0) {
      if (p > t) c += 6;
      else S2.nav.penalty.delete(i);
    }
    return c;
  }
  function addPenalty(S2, x, y, dur = 12) {
    const i = cellIdx(Math.floor(x / TILE), Math.floor(y / TILE));
    if (i >= 0) S2.nav.penalty.set(i, S2.t + dur);
  }
  var MASK_CS = 256;
  var MCOLS = Math.ceil(WORLD.w / MASK_CS);
  var MROWS = Math.ceil(WORLD.h / MASK_CS);
  function wallMask(S2) {
    const nav = S2.nav;
    if (nav.maskStamp === nav.stamp && nav.mask) return nav.mask;
    const mask = nav.mask && nav.maskStamp !== void 0 ? nav.mask.fill(0) : new Uint8Array(MCOLS * MROWS);
    const mark = (x, y) => {
      const mx = x / MASK_CS | 0, my = y / MASK_CS | 0;
      for (let dy = -1; dy <= 1; dy++) for (let dx = -1; dx <= 1; dx++) {
        const i = (my + dy) * MCOLS + (mx + dx);
        if (mx + dx >= 0 && my + dy >= 0 && mx + dx < MCOLS && my + dy < MROWS) mask[i] = 1;
      }
    };
    for (const k of S2.walls.keys()) {
      const p = k.split(",");
      mark(+p[1] * TILE, +p[2] * TILE);
    }
    for (const k of S2.deploys.keys()) {
      const p = k.split(",");
      mark(+p[0] * TILE, +p[1] * TILE);
    }
    for (const f of S2.fences) mark(f.x, f.y);
    nav.mask = mask;
    nav.maskStamp = nav.stamp;
    return mask;
  }
  function maskHit(S2, x, y) {
    const m = wallMask(S2);
    const i = (y / MASK_CS | 0) * MCOLS + (x / MASK_CS | 0);
    return m[i] === 1;
  }
  function refreshFenceCells(S2) {
    const set = /* @__PURE__ */ new Set();
    for (const f of S2.fences) set.add(cellIdx(Math.floor(f.x / TILE), Math.floor(f.y / TILE)));
    S2.nav.fenceCells = set;
    S2.nav.stamp++;
  }
  function nearestOpen(S2, gx, gy, owner) {
    if (cellPass(S2, gx, gy, owner)) return { gx, gy };
    for (let r = 1; r <= 8; r++) {
      for (let dy = -r; dy <= r; dy++) for (let dx = -r; dx <= r; dx++) {
        if (Math.max(Math.abs(dx), Math.abs(dy)) !== r) continue;
        if (cellPass(S2, gx + dx, gy + dy, owner)) return { gx: gx + dx, gy: gy + dy };
      }
    }
    return null;
  }
  function heapPush(nav, i, f) {
    let n = ++nav.heapN;
    const H = nav.heap, HF = nav.heapF;
    while (n > 1) {
      const p = n >> 1;
      if (HF[p] <= f) break;
      H[n] = H[p];
      HF[n] = HF[p];
      n = p;
    }
    H[n] = i;
    HF[n] = f;
  }
  function heapPop(nav) {
    const H = nav.heap, HF = nav.heapF;
    const top = H[1];
    const li = H[nav.heapN], lf = HF[nav.heapN--];
    let n = 1;
    while (true) {
      let c = n << 1;
      if (c > nav.heapN) break;
      if (c + 1 <= nav.heapN && HF[c + 1] < HF[c]) c++;
      if (HF[c] >= lf) break;
      H[n] = H[c];
      HF[n] = HF[c];
      n = c;
    }
    H[n] = li;
    HF[n] = lf;
    return top;
  }
  var DIRS = [[1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [1, -1], [-1, 1], [-1, -1]];
  function findPath(S2, owner, sx, sy, tx, ty, maxIterOpt) {
    const nav = S2.nav;
    let sgx = clamp(Math.floor(sx / TILE), 0, COLS - 1), sgy = clamp(Math.floor(sy / TILE), 0, ROWS - 1);
    let tgx = clamp(Math.floor(tx / TILE), 0, COLS - 1), tgy = clamp(Math.floor(ty / TILE), 0, ROWS - 1);
    const sFix = nearestOpen(S2, sgx, sgy, owner);
    if (!sFix) return null;
    const tFix = nearestOpen(S2, tgx, tgy, owner);
    if (!tFix) return null;
    sgx = sFix.gx;
    sgy = sFix.gy;
    tgx = tFix.gx;
    tgy = tFix.gy;
    if (sgx === tgx && sgy === tgy) return [{ x: tx, y: ty }];
    const gen = ++nav.gen;
    nav.heapN = 0;
    const start = sgy * COLS + sgx, goal = tgy * COLS + tgx;
    nav.vis[start] = gen;
    nav.g[start] = 0;
    nav.came[start] = -1;
    heapPush(nav, start, 0);
    const distTiles = Math.max(Math.abs(tgx - sgx), Math.abs(tgy - sgy));
    const maxIter = maxIterOpt || Math.min(26e3, 3e3 + distTiles * 90);
    let iter = 0, found = false;
    while (nav.heapN > 0 && iter++ < maxIter) {
      const cur2 = heapPop(nav);
      if (cur2 === goal) {
        found = true;
        break;
      }
      const cgx = cur2 % COLS, cgy = cur2 / COLS | 0;
      const cg = nav.g[cur2];
      for (let d = 0; d < 8; d++) {
        const dx = DIRS[d][0], dy = DIRS[d][1];
        const ngx = cgx + dx, ngy = cgy + dy;
        const ni = cellIdx(ngx, ngy);
        if (ni < 0) continue;
        let doorCost = 0;
        if (d < 4) {
          const st = stepOk(S2, cgx, cgy, ngx, ngy, owner);
          if (st < 0) continue;
          if (st === 1) doorCost = 2;
        } else {
          if (stepOk(S2, cgx, cgy, cgx + dx, cgy, owner) !== 0) continue;
          if (stepOk(S2, cgx, cgy, cgx, cgy + dy, owner) !== 0) continue;
          if (stepOk(S2, cgx + dx, cgy, ngx, ngy, owner) !== 0) continue;
          if (stepOk(S2, cgx, cgy + dy, ngx, ngy, owner) !== 0) continue;
        }
        const step2 = (d < 4 ? 1 : 1.41421) * cellCost(S2, ni, S2.t) + doorCost;
        const ng = cg + step2;
        if (nav.vis[ni] === gen && nav.g[ni] <= ng) continue;
        nav.vis[ni] = gen;
        nav.g[ni] = ng;
        nav.came[ni] = cur2;
        const hdx = Math.abs(ngx - tgx), hdy = Math.abs(ngy - tgy);
        const h = (Math.max(hdx, hdy) + 0.41421 * Math.min(hdx, hdy)) * 0.85;
        heapPush(nav, ni, ng + h);
      }
    }
    if (!found) return null;
    const rev = [];
    let cur = goal;
    while (cur !== -1) {
      rev.push(cur);
      cur = nav.came[cur];
    }
    rev.reverse();
    const pts = [];
    for (let i = 0; i < rev.length; i++) {
      const gx = rev[i] % COLS, gy = rev[i] / COLS | 0;
      let door = false;
      if (i > 0) {
        const pgx = rev[i - 1] % COLS, pgy = rev[i - 1] / COLS | 0;
        if (Math.abs(gx - pgx) + Math.abs(gy - pgy) === 1) door = edgeState(S2, pgx, pgy, gx, gy, owner) === 1;
      }
      pts.push({ x: gx * TILE + TILE / 2, y: gy * TILE + TILE / 2, door });
    }
    pts[pts.length - 1] = { x: tx, y: ty, door: pts[pts.length - 1].door };
    const out = [pts[0]];
    let anchor = 0;
    for (let i = 1; i < pts.length; i++) {
      if (pts[i].door || i === pts.length - 1) {
        let a = anchor;
        while (a < i) {
          let far = a + 1;
          for (let j = i; j > a; j--) {
            if (pts[j].door && j !== i) continue;
            if (losMove(S2, owner, pts[a].x, pts[a].y, pts[j].x, pts[j].y)) {
              far = j;
              break;
            }
          }
          out.push(pts[far]);
          a = far;
        }
        anchor = i;
      }
    }
    if (out.length > 1 && !out[0].door && losMove(S2, owner, sx, sy, out[1].x, out[1].y)) out.shift();
    return out;
  }
  function losMove(S2, owner, x0, y0, x1, y1) {
    const d = Math.hypot(x1 - x0, y1 - y0);
    const steps = Math.max(1, Math.ceil(d / (TILE * 0.4)));
    let pgx = Math.floor(x0 / TILE), pgy = Math.floor(y0 / TILE);
    for (let i = 1; i <= steps; i++) {
      const t = i / steps;
      const x = x0 + (x1 - x0) * t, y = y0 + (y1 - y0) * t;
      const gx = Math.floor(x / TILE), gy = Math.floor(y / TILE);
      if (gx === pgx && gy === pgy) continue;
      if (!cellPass(S2, gx, gy, owner)) return false;
      if (gx !== pgx && gy !== pgy) {
        if (stepOk(S2, pgx, pgy, gx, pgy, owner) !== 0 || stepOk(S2, gx, pgy, gx, gy, owner) !== 0) return false;
        if (stepOk(S2, pgx, pgy, pgx, gy, owner) !== 0 || stepOk(S2, pgx, gy, gx, gy, owner) !== 0) return false;
      } else if (edgeState(S2, pgx, pgy, gx, gy, owner) !== 0) return false;
      pgx = gx;
      pgy = gy;
    }
    return true;
  }
  function losTerrain(S2, x0, y0, x1, y1) {
    const d = Math.hypot(x1 - x0, y1 - y0);
    const steps = Math.max(1, Math.ceil(d / (TILE * 0.5)));
    for (let i = 1; i <= steps; i++) {
      const t = i / steps;
      const i2 = cellIdx(Math.floor((x0 + (x1 - x0) * t) / TILE), Math.floor((y0 + (y1 - y0) * t) / TILE));
      if (i2 < 0 || S2.nav.terrain[i2]) return false;
    }
    return true;
  }

  // src/sim/state.js
  function createSim(seed2) {
    const S2 = {
      seed: seed2 >>> 0,
      rng: makeRng(seed2),
      t: 0,
      tick: 0,
      // entities
      resources: [],
      barrels: [],
      loot: [],
      bullets: [],
      rockets: [],
      grenades: [],
      satchels: [],
      fences: [],
      fires: [],
      wrecks: [],
      animals: [],
      guards: [],
      dummies: [],
      structures: /* @__PURE__ */ new Map(),
      walls: /* @__PURE__ */ new Map(),
      deploys: /* @__PURE__ */ new Map(),
      units: [],
      teams: [],
      transports: [],
      trains: [],
      convoys: [],
      // world events
      airdrop: null,
      plane: null,
      airdropT: 150,
      signal: null,
      patrol: null,
      patrolT: 0,
      lockedCrate: null,
      crateT: 0,
      quarry: null,
      trainT: 0,
      convoyT: 0,
      // ambient (sim-lite: positions evolve deterministically but render-only)
      clouds: null,
      fogBanks: null,
      fireflies: null,
      footprints: [],
      weather: { mode: "clear", timer: 28, rain: 0, boltT: 0, flash: 0, fog: 0, fogTimer: 18, fogOn: false },
      wind: 0,
      // player
      player: {
        x: WORLD.w / 2,
        y: WORLD.h / 2 + 260,
        vx: 0,
        vy: 0,
        angle: 0,
        walk: 200,
        run: 340,
        recoil: 0,
        health: 100,
        maxhp: 100,
        hurt: 0,
        regenDelay: 0,
        dead: false,
        deadT: 0,
        invuln: 0,
        moving: false,
        inCopter: false,
        facemask: 0,
        bodyArmor: 0,
        rifleLaser: false,
        poison: 0,
        swing: 0,
        gatherCd: 0,
        lastHitBy: null
      },
      inv: { wood: 1e4, stone: 1e4, metal: 1e4, scrap: 0, hqm: 0, fence: 10, grenade: 3, signal: 0 },
      owned: { pistol: true, rifle: false, minigun: false, rocket: false, sniper: false, shotgun: false, hmg: false },
      weapons: instWeapons(),
      slot: 0,
      buildMode: false,
      buildPiece: "wall",
      buildRot: 0,
      jackhammer: false,
      ghost: true,
      copter: null,
      playerKills: 0,
      deathMark: null,
      bounty: null,
      // raid/alarm/banners
      raids: [],
      elims: [],
      raidAlarm: null,
      breachT: {},
      shake: 0,
      // AI coordination
      aggressor: -1,
      aggressorOwner: null,
      aggroT: 0,
      roleT: 0,
      aliveBases: 0,
      dbSweepT: 0,
      // transient render events (drained by client each frame)
      events: [],
      muzzle: null,
      blasts: [],
      scorch: [],
      flashes: [],
      floats: [],
      particles: [],
      // input command bus (client → sim)
      cmd: { mx: 0, my: 0, fire: false, fireHeld: false, up: false, down: false, left: false, right: false, run: false },
      // metrics for headless verification
      metrics: {
        hardUnstick: 0,
        wallPhase: 0,
        stuckTotal: 0,
        maxStuck: 0,
        repaths: 0,
        pathFails: 0,
        act: {},
        raidsLaunched: 0,
        tcKilled: 0,
        elims: 0,
        winner: null,
        decisiveT: null,
        workerLog: [],
        stuckLog: [],
        regionStuck: { base: 0, lake: 0, monument: 0, open: 0 }
      }
    };
    buildWorld(S2);
    buildNav(S2);
    spawnTeams(S2);
    S2.trainT = S2.rng.rand(20, 60);
    S2.patrolT = S2.rng.rand(180, 280);
    S2.crateT = S2.rng.rand(100, 180);
    S2.convoyT = S2.rng.rand(120, 200);
    return S2;
  }
  function instWeapons() {
    const w = {};
    for (const k in WEAPONS) {
      const d = WEAPONS[k];
      w[k] = { ammo: d.magSize, reserve: d.reserve, reloading: 0, cd: 0, spin: 0 };
    }
    return w;
  }
  function spawnTeams(S2) {
    const R = S2.rng;
    const used = [
      { x: S2.world.shop.x, y: S2.world.shop.y, r: SAFE_R + 500 },
      { x: S2.player.x, y: S2.player.y, r: 700 },
      ...S2.world.monuments.map((m) => ({ x: m.x, y: m.y, r: SAFE_R + 320 }))
    ];
    for (let i = 0; i < AI.TEAM_COUNT; i++) {
      let site = null;
      for (let t = 0; t < 120 && !site; t++) {
        const bx = R.rand(1400, WORLD.w - 1400), by = R.rand(1400, WORLD.h - 1400);
        if (S2.world.landFactor(bx, by) < 0.12) continue;
        if (S2.world.lakeAt(bx, by)) continue;
        if (S2.world.lakes.some((L) => dist(bx, by, L.x, L.y) < L.r + 560)) continue;
        if (S2.world.railDist(bx, by) < 400 || S2.world.pathDist(bx, by) < 340) continue;
        if (used.some((u) => dist(bx, by, u.x, u.y) < u.r)) continue;
        site = { x: bx, y: by };
      }
      if (!site) continue;
      used.push({ x: site.x, y: site.y, r: MIN_TC_DIST });
      const roll = R.next();
      const hard = roll < 0.25, weak = roll >= 0.75;
      const team = {
        id: i,
        owner: "e" + i,
        col: AI.COLS[i % AI.COLS.length],
        hard,
        weak,
        role: ["raider", "turtle", "nomad"][i % 3],
        shotgun: R.chance(0.3),
        eliminated: false,
        bases: [],
        brain: {
          sealed: true,
          decaying: false,
          ready: false,
          attack: false,
          attackers: 0,
          urgent: false,
          aggressor: false,
          raidTarget: null,
          raidPhase: null,
          breachKey: null,
          breachT: 0,
          buildHoldT: 0,
          builderId: null,
          lootCd: 0,
          qCd: 0,
          sigCd: 0,
          statusT: R.rand(0, 0.5),
          stage: null,
          stageT: 0
        }
      };
      S2.teams.push(team);
      const primary = spawnUnit(S2, team, site.x, site.y, true);
      primary.inv = { wood: 120, stone: 30, metal: 10 };
      primary.unfounded = true;
      primary.siteX = site.x;
      primary.siteY = site.y;
      primary.copter = { x: site.x - TILE * 4, y: site.y, angle: 0, rotor: 0, spin: 0, vx: 0, vy: 0, hp: 160, max: 160, destroyed: false };
      for (let w = 0; w < 3; w++) {
        const u = spawnUnit(S2, team, site.x + R.rand(-46, 46), site.y + R.rand(24, 64), false);
        u.unfounded = true;
        u.siteX = site.x;
        u.siteY = site.y;
      }
    }
  }
  function spawnUnit(S2, team, x, y, primary) {
    const R = S2.rng;
    const u = {
      id: team.id,
      owner: team.owner,
      col: team.col,
      primary: !!primary,
      worker: !primary,
      ally: false,
      hard: team.hard,
      weak: team.weak,
      shotgun: team.shotgun,
      role: team.role,
      x,
      y,
      vx: 0,
      vy: 0,
      angle: R.rand(0, Math.PI * 2),
      hx: x,
      hy: y,
      tcKey: null,
      doorX: x,
      doorY: y + TILE,
      doorGy: Math.floor(y / TILE) + 1,
      hp: 100,
      max: 100,
      dead: false,
      respawnT: 0,
      eliminated: false,
      regenT: 0,
      lastHitBy: null,
      inv: { wood: 0, stone: 0, metal: 0 },
      scrap: 0,
      rockets: 0,
      satchels: 0,
      grenades: 0,
      hqm: 0,
      gun: "pistol",
      rifleLaser: false,
      facemask: team.hard ? 1 : 0,
      bodyArmor: team.hard ? 2 : 0,
      jack: false,
      kills: 0,
      state: "gather",
      act: "gather",
      unfounded: false,
      siteX: 0,
      siteY: 0,
      think: R.rand(0, 1),
      gunCd: 0,
      rkCd: 0,
      gnCd: 0,
      fenceCd: 0,
      expandT: R.rand(3, 9),
      retaliateT: 0,
      threatX: 0,
      threatY: 0,
      disengageT: 0,
      defendT: 0,
      defHold: 0,
      defTgt: null,
      retreat: false,
      raid: null,
      wasRaid: false,
      raidCd: 0,
      raidBias: R.next(),
      raidUrge: 0,
      defDuty: false,
      buildDuty: false,
      rocketer: false,
      lootRun: null,
      qRun: null,
      monRun: false,
      monRunT: 0,
      monCd: 0,
      monStay: 0,
      tgtNode: null,
      skipNode: null,
      skipT: 0,
      lootTgt: null,
      lootSkip: null,
      lootSkipT: 0,
      lane: R.rand(-12, 12),
      hoff: R.rand(-26, 26),
      path: null,
      pathI: 0,
      pathGX: 0,
      pathGY: 0,
      pathT: 0,
      navStamp: 0,
      repathN: 0,
      noPathT: 0,
      progT: 0,
      progBest: 1e9,
      stuckT: 0,
      baseT: 0,
      idleT: 0,
      aiNetT: 0,
      aiPx: x,
      aiPy: y,
      retT: 0,
      maintT: -10,
      hireT: 0,
      stT: 0,
      expT: R.rand(40, 80),
      fwdT: 0,
      endgame: false,
      copter: null,
      flying: false,
      aboard: null,
      tradeDone: false,
      parkChk: 0,
      gathering: false,
      swing: 0,
      hf: false,
      strafeT: 0,
      strafeS: 1,
      backoff: false,
      tickPhase: S2.units.length % 9
    };
    S2.units.push(u);
    return u;
  }
  function spawnPlayerWorker(S2) {
    const R = S2.rng;
    const shop = S2.world.shop;
    const tc = playerTC(S2);
    const team = { id: -1, owner: OWNER, col: "#7ec850", hard: false, weak: false, shotgun: false, role: "raider" };
    const u = spawnUnit(S2, team, shop.x + R.rand(-60, 60), shop.y + (shop.r || 120) + 40, false);
    u.ally = true;
    u.gun = "rifle";
    u.col = "#7ec850";
    u.raidUrge = R.rand(12, 24);
    u.facemask = 0;
    u.bodyArmor = 0;
    if (tc) {
      u.hx = tc.hx;
      u.hy = tc.hy;
      u.tcKey = tc.tcKey;
    } else {
      u.hx = S2.player.x;
      u.hy = S2.player.y;
    }
    u.doorX = u.hx;
    u.doorY = u.hy + TILE;
    u.doorGy = Math.floor(u.hy / TILE) + 1;
    return u;
  }
  function playerTC(S2) {
    for (const [k, d] of S2.deploys) {
      if (d.type === "cupboard" && d.owner === OWNER) {
        const [gx, gy] = k.split(",").map(Number);
        return { owner: OWNER, tcKey: k, hx: gx * TILE + TILE / 2, hy: gy * TILE + TILE / 2, isPlayer: true };
      }
    }
    return null;
  }
  var teamOf = (S2, owner) => S2.teams.find((t) => t.owner === owner) || null;
  function addFloat(S2, x, y, text, col) {
    let lift = 0;
    const f0 = S2.floats[S2.floats.length - 1];
    if (f0 && S2.t - f0.born < 1 && Math.abs(f0.ox - x) < 60 && Math.abs(f0.oy - y) < 44) lift = f0.lift + 15;
    S2.floats.push({ x, y: y - lift, ox: x, oy: y, lift, text, col: col || "#e8e2cf", vy: -26, life: 0.9, max: 0.9, born: S2.t });
    if (S2.floats.length > 90) S2.floats.shift();
  }
  function burst(S2, x, y, col, n, spd) {
    for (let i = 0; i < n; i++) {
      const a = S2.rng.rand(0, Math.PI * 2), v = S2.rng.rand(0.3 * spd, spd);
      S2.particles.push({ x, y, vx: Math.cos(a) * v, vy: Math.sin(a) * v, life: S2.rng.rand(0.25, 0.6), max: 0.6, r: S2.rng.rand(1.5, 3.5), col });
    }
    if (S2.particles.length > 900) S2.particles.splice(0, S2.particles.length - 900);
  }
  function addLoot(S2, x, y, kind, amt, gun) {
    const a = S2.rng.rand(0, Math.PI * 2), v = S2.rng.rand(40, 90);
    S2.loot.push({ x, y, vx: Math.cos(a) * v, vy: Math.sin(a) * v, kind, amt, gun: gun || null, life: 0, bob: S2.rng.rand(0, Math.PI * 2) });
  }
  function spillStack(S2, x, y, kind, amt) {
    if (amt <= 0) return;
    const n = Math.min(12, Math.max(1, Math.ceil(amt / 50)));
    let left = amt;
    for (let i = 0; i < n; i++) {
      const part = Math.min(left, Math.ceil(amt / n));
      if (part <= 0) break;
      addLoot(S2, x + S2.rng.rand(-14, 14), y + S2.rng.rand(-14, 14), kind, part);
      left -= part;
    }
  }
  function spillContainer(S2, x, y, d) {
    if (!d.store) return;
    for (const k of ["wood", "stone", "metal"]) {
      spillStack(S2, x, y, k, d.store[k] | 0);
      d.store[k] = 0;
    }
  }
  function markRaid(S2, x, y, id) {
    const m = S2.raids.find((r) => r.id === id);
    if (m) {
      m.x = x;
      m.y = y;
      m.t = 60;
      return;
    }
    S2.raids.push({ x, y, id, t: 60 });
    if (S2.raids.length > 40) S2.raids.shift();
  }
  function creditKill(S2, by) {
    if (!by) return;
    if (by === OWNER) {
      S2.playerKills++;
      S2.inv.scrap += 12;
      return;
    }
    const killer = S2.units.find((u) => u.owner === by && u.primary && !u.eliminated) || S2.units.find((u) => u.owner === by && !u.eliminated);
    if (killer) {
      killer.kills++;
      killer.scrap += 12;
    }
  }

  // src/sim/physics.js
  function wallSegOf(key, w) {
    const p = key.split(",");
    const gx = +p[1], gy = +p[2];
    if (p[0] === "V") return [gx * TILE, gy * TILE, gx * TILE, (gy + 1) * TILE];
    if (p[0] === "H") return [gx * TILE, gy * TILE, (gx + 1) * TILE, gy * TILE];
    if (w && w.rot === 1) return [gx * TILE, (gy + 1) * TILE, (gx + 1) * TILE, gy * TILE];
    return [gx * TILE, gy * TILE, (gx + 1) * TILE, (gy + 1) * TILE];
  }
  var CELL_KEYS = (gx, gy) => [
    ekey("V", gx, gy),
    ekey("V", gx + 1, gy),
    ekey("H", gx, gy),
    ekey("H", gx, gy + 1),
    ekey("D", gx, gy)
  ];
  function eachWallNear(S2, x, y, r, fn) {
    const g0x = Math.floor((x - r) / TILE), g1x = Math.floor((x + r) / TILE);
    const g0y = Math.floor((y - r) / TILE), g1y = Math.floor((y + r) / TILE);
    for (let gy = g0y; gy <= g1y; gy++) for (let gx = g0x; gx <= g1x; gx++) {
      for (const k of CELL_KEYS(gx, gy)) {
        const w = S2.walls.get(k);
        if (w && w.hp > 0) {
          if (fn(k, w) === true) return true;
        }
      }
    }
    return false;
  }
  function isSolidAt(S2, x, y, passOwner) {
    const d = S2.deploys.get(gkey(Math.floor(x / TILE), Math.floor(y / TILE)));
    if (!d) return false;
    if (passOwner && d.type === "cupboard" && d.owner === passOwner) return false;
    return d.type === "turret" || d.type === "cupboard" || d.type === "box";
  }
  function circleHitsSolid(S2, x, y, r, passOwner) {
    if (isSolidAt(S2, x, y, passOwner)) return true;
    for (let i = 0; i < 8; i++) {
      const a = i / 8 * Math.PI * 2;
      if (isSolidAt(S2, x + Math.cos(a) * r, y + Math.sin(a) * r, passOwner)) return true;
    }
    return false;
  }
  function boulderBlocks(S2, x, y, r) {
    for (const b of S2.world.boulders) if (dist2(x, y, b.x, b.y) < (r + b.r) * (r + b.r)) return true;
    return false;
  }
  function boulderAt(S2, x, y) {
    for (const b of S2.world.boulders) if (dist2(x, y, b.x, b.y) < (b.r + 12) * (b.r + 12)) return b;
    return null;
  }
  function boulderLine(S2, x0, y0, x1, y1) {
    for (const b of S2.world.boulders) if (ptSeg(b.x, b.y, x0, y0, x1, y1) < b.r) return true;
    return false;
  }
  function fenceBlocks(S2, x, y, r) {
    for (const f of S2.fences) {
      if (f.hp <= 0) continue;
      if (ptSeg(x, y, f.x0, f.y0, f.x1, f.y1) < r + 4) return f;
    }
    return null;
  }
  function blocked(S2, x, y, r, opts = {}) {
    if (!S2.world.onLand(x, y)) return true;
    if (boulderBlocks(S2, x, y, r)) return true;
    if (!maskHit(S2, x, y)) return false;
    if (circleHitsSolid(S2, x, y, r, opts.passOwner)) return true;
    if (fenceBlocks(S2, x, y, r)) return true;
    let hit = false;
    eachWallNear(S2, x, y, r + 8, (k, w) => {
      if (w.type === "door" && w.open) return false;
      if (w.type === "door" && opts.openOwnDoors && w.lock && w.lock.by === opts.passOwner) {
        w.open = true;
        w.closeT = S2.t + 1;
        S2.nav.stamp++;
        return false;
      }
      const s = wallSegOf(k, w);
      if (ptSeg(x, y, s[0], s[1], s[2], s[3]) < r + 4) {
        hit = true;
        return true;
      }
    });
    return hit;
  }
  function wallBlocksView(S2, x0, y0, x1, y1) {
    const minx = Math.min(x0, x1) - TILE, maxx = Math.max(x0, x1) + TILE;
    const miny = Math.min(y0, y1) - TILE, maxy = Math.max(y0, y1) + TILE;
    const g0x = Math.floor(minx / TILE), g1x = Math.floor(maxx / TILE);
    const g0y = Math.floor(miny / TILE), g1y = Math.floor(maxy / TILE);
    const len = Math.hypot(x1 - x0, y1 - y0);
    if (len > TILE * 3) {
      const steps = Math.ceil(len / (TILE * 0.5));
      const seen = /* @__PURE__ */ new Set();
      for (let i = 0; i <= steps; i++) {
        const t = i / steps;
        const gx = Math.floor((x0 + (x1 - x0) * t) / TILE), gy = Math.floor((y0 + (y1 - y0) * t) / TILE);
        const id = gx * 10007 + gy;
        if (seen.has(id)) continue;
        seen.add(id);
        for (const k of CELL_KEYS(gx, gy)) {
          const w = S2.walls.get(k);
          if (!w || w.hp <= 0 || w.type === "door" && w.open) continue;
          const s = wallSegOf(k, w);
          if (segSeg(x0, y0, x1, y1, s[0], s[1], s[2], s[3])) return true;
        }
      }
      return false;
    }
    for (let gy = g0y; gy <= g1y; gy++) for (let gx = g0x; gx <= g1x; gx++) {
      for (const k of CELL_KEYS(gx, gy)) {
        const w = S2.walls.get(k);
        if (!w || w.hp <= 0 || w.type === "door" && w.open) continue;
        const s = wallSegOf(k, w);
        if (segSeg(x0, y0, x1, y1, s[0], s[1], s[2], s[3])) return true;
      }
    }
    return false;
  }
  function inSafeZone(S2, x, y) {
    return dist2(x, y, S2.world.shop.x, S2.world.shop.y) < SAFE_R * SAFE_R;
  }
  function inMonZone(S2, x, y) {
    for (const m of S2.world.monuments) if (dist2(x, y, m.x, m.y) < MON_NOBUILD * MON_NOBUILD) return m;
    return null;
  }
  function segHitsHead(cx, cy, b) {
    return ptSeg(cx, cy, b.px, b.py, b.x, b.y) < HEAD_R;
  }

  // src/sim/building.js
  var cellCenter = (gx, gy) => ({ x: gx * TILE + TILE / 2, y: gy * TILE + TILE / 2 });
  function nearestCupboard(S2, x, y, owner) {
    let best = null, bd = CLAIM_R * CLAIM_R;
    for (const [k, d] of S2.deploys) {
      if (d.type !== "cupboard") continue;
      if (owner && d.owner !== owner) continue;
      const [gx, gy] = k.split(",").map(Number);
      const c = cellCenter(gx, gy);
      const dd = dist2(x, y, c.x, c.y);
      if (dd < bd) {
        bd = dd;
        best = { key: k, d, x: c.x, y: c.y };
      }
    }
    return best;
  }
  function tcOf(S2, tcKey) {
    const d = S2.deploys.get(tcKey);
    return d && d.type === "cupboard" ? d : null;
  }
  var wallet = {
    has(stores, cost) {
      for (const k in cost) {
        let have = 0;
        for (const s of stores) have += s[k] || 0;
        if (have < cost[k]) return false;
      }
      return true;
    },
    pay(stores, cost) {
      if (!wallet.has(stores, cost)) return false;
      for (const k in cost) {
        let need = cost[k];
        for (const s of stores) {
          const take = Math.min(need, s[k] || 0);
          s[k] = (s[k] || 0) - take;
          need -= take;
          if (need <= 0) break;
        }
      }
      return true;
    }
  };
  function exceedsBase(S2, owner, gx, gy) {
    let minx = gx, maxx = gx, miny = gy, maxy = gy, found = false;
    for (const [k, s] of S2.structures) {
      if (s.owner !== owner) continue;
      const [x, y] = k.split(",").map(Number);
      if (Math.abs(x - gx) * TILE > CLAIM_R || Math.abs(y - gy) * TILE > CLAIM_R) continue;
      found = true;
      minx = Math.min(minx, x);
      maxx = Math.max(maxx, x);
      miny = Math.min(miny, y);
      maxy = Math.max(maxy, y);
    }
    if (!found) return false;
    return maxx - minx + 1 > BASE_MAX || maxy - miny + 1 > BASE_MAX;
  }
  function edgeHasFoundation(S2, key) {
    const p = key.split(","), gx = +p[1], gy = +p[2];
    if (p[0] === "V") return S2.structures.has(gkey(gx - 1, gy)) || S2.structures.has(gkey(gx, gy));
    return S2.structures.has(gkey(gx, gy - 1)) || S2.structures.has(gkey(gx, gy));
  }
  function canPlace(S2, owner, piece, target) {
    const def = BUILD[piece];
    if (!def) return false;
    if (def.cat === "cell") {
      const { gx, gy } = target;
      const c = cellCenter(gx, gy);
      if (gx < 1 || gy < 1 || c.x > 13824 - TILE || c.y > 9216 - TILE) return false;
      if (inSafeZone(S2, c.x, c.y) || inMonZone(S2, c.x, c.y)) return false;
      if (boulderAt(S2, c.x, c.y)) return false;
      if (!S2.world.onLand(c.x, c.y) || S2.world.lakeAt(c.x, c.y)) return false;
      if (def.found) {
        if (S2.structures.has(gkey(gx, gy))) return false;
        if (S2.deploys.has(gkey(gx, gy))) return false;
        if (exceedsBase(S2, owner, gx, gy)) return false;
        if (copterOnCell(S2, gx, gy)) return false;
        return true;
      }
      if (S2.deploys.has(gkey(gx, gy))) return false;
      if (def.tc || def.box) {
        if (!S2.structures.has(gkey(gx, gy))) return false;
      }
      if (def.tc) {
        if (owner === OWNER && [...S2.deploys.values()].some((d) => d.type === "cupboard" && d.owner === OWNER)) return false;
        for (const [k, d] of S2.deploys) {
          if (d.type !== "cupboard") continue;
          const [x2, y2] = k.split(",").map(Number);
          const cc = cellCenter(x2, y2);
          if (dist(c.x, c.y, cc.x, cc.y) < MIN_TC_DIST) return false;
        }
      }
      if (def.turret && !nearestCupboard(S2, c.x, c.y, owner)) return false;
      return true;
    }
    if (def.cat === "edge") {
      const key = target.key;
      if (S2.walls.has(key)) return false;
      if (!edgeHasFoundation(S2, key)) return false;
      const w = { type: piece };
      const s = wallSegOf(key, w);
      const mx = (s[0] + s[2]) / 2, my = (s[1] + s[3]) / 2;
      if (inSafeZone(S2, mx, my) || inMonZone(S2, mx, my)) return false;
      return true;
    }
    if (def.cat === "diag") {
      const key = target.key;
      if (S2.walls.has(key)) return false;
      const p = key.split(",");
      if (!S2.structures.has(gkey(+p[1], +p[2]))) return false;
      return true;
    }
    return false;
  }
  function copterOnCell(S2, gx, gy) {
    const c = cellCenter(gx, gy);
    const test = (cp) => cp && !cp.destroyed && Math.abs(cp.x - c.x) < 38 && Math.abs(cp.y - c.y) < 38;
    if (test(S2.copter)) return true;
    for (const u of S2.units) if (test(u.copter)) return true;
    return false;
  }
  function place(S2, owner, piece, target, stores, opts = {}) {
    const def = BUILD[piece];
    if (!canPlace(S2, owner, piece, target)) return null;
    if (stores && !wallet.pay(stores, def.cost)) return null;
    const mat = opts.mat || "wood";
    const hp = tierHp(def, mat);
    let obj;
    if (def.cat === "cell" && def.found) {
      obj = { type: piece, mat, hp, max: hp, owner, hitT: -100, rot: (opts.rot || 0) & 3 };
      S2.structures.set(gkey(target.gx, target.gy), obj);
    } else if (def.cat === "cell") {
      obj = { type: piece, mat: "wood", hp: def.hp, max: def.hp, owner, hitT: -100 };
      if (def.store) obj.store = { wood: 0, stone: 0, metal: 0, scrap: 0 };
      if (def.turret) {
        obj.tier = opts.tier || 1;
        obj.angle = 0;
        obj.cd = 0;
        obj.mag = 12;
        obj.reload = 0;
        obj.ext = !!opts.ext;
        obj.scanT = S2.rng.rand(0.5, 4.5);
      }
      if (def.tc || def.box || def.door) obj.lock = { by: owner };
      S2.deploys.set(gkey(target.gx, target.gy), obj);
    } else {
      obj = { type: piece, mat, hp: tierHp(def, mat), max: tierHp(def, mat), owner, hitT: -100, open: false, rot: (opts.rot || 0) & 1 };
      if (def.door) obj.lock = { by: owner };
      S2.walls.set(target.key, obj);
    }
    S2.nav.stamp++;
    return obj;
  }
  function upgradeStructure(S2, obj, def, stores) {
    const up = UPGRADE[obj.mat];
    if (!up || !def.up) return false;
    if (stores && !wallet.pay(stores, up.cost)) return false;
    obj.mat = up.to;
    obj.max = tierHp(def, obj.mat);
    obj.hp = obj.max;
    return true;
  }
  function damageWall(S2, key, dmg, by) {
    const w = S2.walls.get(key);
    if (!w || w.hp <= 0) return false;
    w.hp -= dmg;
    w.hitT = S2.t;
    if (w.hp <= 0) {
      const s = wallSegOf(key, w);
      burst(S2, (s[0] + s[2]) / 2, (s[1] + s[3]) / 2, "#8a7a5c", 10, 160);
      S2.walls.delete(key);
      S2.breachT[key] = S2.t;
      S2.nav.stamp++;
      S2.events.push({ type: "wallDown", x: (s[0] + s[2]) / 2, y: (s[1] + s[3]) / 2 });
      return true;
    }
    return false;
  }
  function damageStructure(S2, key, dmg) {
    const s = S2.structures.get(key);
    if (!s) return false;
    s.hp -= dmg;
    s.hitT = S2.t;
    if (s.hp <= 0) {
      S2.structures.delete(key);
      S2.breachT[key] = S2.t;
      cleanupOrphans(S2, key);
      S2.nav.stamp++;
      return true;
    }
    return false;
  }
  function damageDeploy(S2, key, dmg, by) {
    const d = S2.deploys.get(key);
    if (!d) return false;
    d.hp -= dmg;
    d.hitT = S2.t;
    if (d.hp <= 0) {
      destroyDeploy(S2, key, d, by);
      return true;
    }
    return false;
  }
  function destroyDeploy(S2, key, d, by) {
    const [gx, gy] = key.split(",").map(Number);
    const c = cellCenter(gx, gy);
    spillContainer(S2, c.x, c.y, d);
    S2.deploys.delete(key);
    S2.nav.stamp++;
    burst(S2, c.x, c.y, "#caa24a", 14, 220);
    if (d.type === "cupboard") {
      addFloat(S2, c.x, c.y, "TC destroyed!", "#ff7a4a");
      S2.metrics.tcKilled++;
      if (d.owner === OWNER) {
        for (const k of ["wood", "stone", "metal"]) {
          if (S2.inv[k] > 0) {
          }
        }
      }
      clearDeadBase(S2, d.owner, c.x, c.y);
      const team = teamOf(S2, d.owner);
      if (team) {
        const rec = team.bases.find((r) => r.tcKey === key);
        if (rec) rec.dead = true;
      }
    }
  }
  function clearDeadBase(S2, owner, tx, ty) {
    for (const [k, w] of [...S2.walls]) {
      if (w.owner !== owner) continue;
      const s = wallSegOf(k, w);
      if (dist((s[0] + s[2]) / 2, (s[1] + s[3]) / 2, tx, ty) < 560) {
        S2.walls.delete(k);
      }
    }
    for (const [k, st] of [...S2.structures]) {
      if (st.owner !== owner) continue;
      const [gx, gy] = k.split(",").map(Number);
      const c = cellCenter(gx, gy);
      if (dist(c.x, c.y, tx, ty) < 560) {
        S2.structures.delete(k);
        burst(S2, c.x, c.y, "#6b5a40", 3, 120);
      }
    }
    for (const [k, d] of [...S2.deploys]) {
      if (d.owner !== owner || d.type === "cupboard") continue;
      const [gx, gy] = k.split(",").map(Number);
      const c = cellCenter(gx, gy);
      if (dist(c.x, c.y, tx, ty) < 560) S2.deploys.delete(k);
    }
    S2.nav.stamp++;
  }
  function cleanupOrphans(S2, cellKey) {
    const [gx, gy] = cellKey.split(",").map(Number);
    for (const k of [ekey("D", gx, gy)]) S2.walls.delete(k);
    for (const k of [ekey("V", gx, gy), ekey("V", gx + 1, gy), ekey("H", gx, gy), ekey("H", gx, gy + 1)]) {
      if (S2.walls.has(k) && !edgeHasFoundation(S2, k)) S2.walls.delete(k);
    }
  }
  function repairCost(def, obj, frac) {
    const cost = {};
    for (const k in def.cost) cost[k] = Math.max(1, Math.ceil(def.cost[k] * frac));
    if (obj.mat === "stone" || obj.mat === "metal") cost.stone = (cost.stone || 0) + Math.ceil(15 * frac);
    if (obj.mat === "metal") cost.metal = (cost.metal || 0) + Math.ceil(20 * frac);
    return cost;
  }
  function tryRepair(S2, obj, def, stores, lock = HIT_LOCK) {
    if (obj.hp >= obj.max) return false;
    if (S2.t - obj.hitT < lock) return false;
    const heal = Math.min(obj.max - obj.hp, obj.max * 0.2);
    const frac = heal / obj.max;
    if (!wallet.pay(stores, repairCost(def, obj, frac))) return false;
    obj.hp += heal;
    return true;
  }
  function updateDecay(S2, dt) {
    S2.decayT = (S2.decayT || 0) + dt;
    if (S2.decayT < 0.5) return;
    const step2 = S2.decayT;
    S2.decayT = 0;
    const tcs = [];
    for (const [k, d] of S2.deploys) {
      if (d.type !== "cupboard") continue;
      const [gx, gy] = k.split(",").map(Number);
      tcs.push({ key: k, d, ...cellCenter(gx, gy), n: 0 });
    }
    const decayOne = (key, obj, isWall) => {
      const p = key.split(",");
      const gx = +p[p.length - 2], gy = +p[p.length - 1];
      const c = cellCenter(isWall ? gx : gx, gy);
      let tc = null, bd = CLAIM_R * CLAIM_R;
      for (const t of tcs) {
        const dd = dist2(c.x, c.y, t.x, t.y);
        if (dd < bd) {
          bd = dd;
          tc = t;
        }
      }
      if (tc) {
        tc.n++;
        const stocked = tc.d.store.wood + tc.d.store.stone + tc.d.store.metal > 0;
        if (stocked) return;
        const f = Math.sqrt(bd) / CLAIM_R;
        const time = DECAY_CENTER + (DECAY_EDGE - DECAY_CENTER) * f;
        obj.hp -= obj.max * (step2 / time);
      } else {
        obj.hp -= obj.max * (step2 / DECAY_UNCLAIMED);
      }
      if (obj.hp <= 0) {
        if (isWall) {
          S2.walls.delete(key);
          S2.nav.stamp++;
        } else {
          S2.structures.delete(key);
          cleanupOrphans(S2, key);
          S2.nav.stamp++;
        }
      }
    };
    for (const [k, w] of [...S2.walls]) decayOne(k, w, true);
    for (const [k, s] of [...S2.structures]) decayOne(k, s, false);
    for (const t of tcs) {
      let drain = t.n * UPKEEP * step2;
      for (const k of ["wood", "stone", "metal"]) {
        if (drain <= 0) break;
        const take = Math.min(drain, t.d.store[k]);
        t.d.store[k] -= take;
        drain -= take;
      }
    }
  }
  function foundBase(S2, team, bx, by) {
    const gx0 = Math.floor(bx / TILE), gy0 = Math.floor(by / TILE);
    const owner = team.owner;
    for (let dy = 0; dy < 3; dy++) for (let dx = 0; dx < 3; dx++) {
      S2.structures.set(gkey(gx0 + dx, gy0 + dy), { type: "floor", mat: "wood", hp: 100, max: 100, owner, hitT: -100 });
    }
    const wall = (key) => S2.walls.set(key, { type: "wall", mat: "wood", hp: 100, max: 100, owner, hitT: -100, open: false });
    const door = (key) => S2.walls.set(key, { type: "door", mat: "wood", hp: 50, max: 50, owner, hitT: -100, open: false, lock: { by: owner } });
    for (let dx = 0; dx < 3; dx++) wall(ekey("H", gx0 + dx, gy0));
    wall(ekey("H", gx0, gy0 + 3));
    wall(ekey("H", gx0 + 2, gy0 + 3));
    door(ekey("H", gx0 + 1, gy0 + 3));
    for (let dy = 0; dy < 3; dy++) {
      wall(ekey("V", gx0, gy0 + dy));
      wall(ekey("V", gx0 + 3, gy0 + dy));
    }
    const cgx = gx0 + 1, cgy = gy0 + 1;
    door(ekey("H", cgx, cgy));
    wall(ekey("V", cgx, cgy));
    wall(ekey("V", cgx + 1, cgy));
    door(ekey("H", cgx, cgy + 1));
    const tcKey = gkey(cgx, cgy);
    S2.deploys.set(tcKey, {
      type: "cupboard",
      mat: "wood",
      hp: 300,
      max: 300,
      owner,
      hitT: -100,
      lock: { by: owner },
      store: { wood: 200 + S2.rng.randi(20, 70), stone: 0, metal: S2.rng.randi(0, 40), scrap: 0 }
    });
    S2.deploys.set(gkey(gx0 + 2, gy0), { type: "turret", mat: "wood", hp: 150, max: 150, owner, hitT: -100, tier: team.hard ? 3 : team.weak ? 1 : 2, angle: 0, cd: 0, mag: 12, reload: 0, ext: false, scanT: S2.rng.rand(0.5, 4.5) });
    if (team.hard) {
      for (const [, w] of S2.walls) if (w.owner === owner && w.mat === "wood") {
        w.mat = "metal";
        w.max = tierHp(BUILD[w.type], "metal");
        w.hp = w.max;
      }
    }
    const c = cellCenter(cgx, cgy);
    const rec = {
      owner,
      tcKey,
      hx: c.x,
      hy: c.y,
      doorX: (gx0 + 1) * TILE + TILE / 2,
      doorY: (gy0 + 3) * TILE,
      doorGy: gy0 + 3,
      kind: "home",
      dead: false,
      cleared: false
    };
    team.bases.push(rec);
    ensureSideDoors(S2, team, rec);
    S2.nav.stamp++;
    return rec;
  }
  function baseBounds(S2, owner, hx, hy) {
    let minx = 1e9, miny = 1e9, maxx = -1e9, maxy = -1e9, found = false;
    for (const [k, s] of S2.structures) {
      if (s.owner !== owner) continue;
      const [gx, gy] = k.split(",").map(Number);
      const c = cellCenter(gx, gy);
      if (dist2(c.x, c.y, hx, hy) > CLAIM_R * CLAIM_R) continue;
      found = true;
      minx = Math.min(minx, gx);
      maxx = Math.max(maxx, gx);
      miny = Math.min(miny, gy);
      maxy = Math.max(maxy, gy);
    }
    return found ? { minx, miny, maxx, maxy } : null;
  }
  function ensureSideDoors(S2, team, rec) {
    const b = baseBounds(S2, team.owner, rec.hx, rec.hy);
    if (!b) return;
    const midGx = Math.floor((b.minx + b.maxx) / 2), midGy = Math.floor((b.miny + b.maxy) / 2);
    const keys = [ekey("H", midGx, b.miny), ekey("H", midGx, b.maxy + 1), ekey("V", b.minx, midGy), ekey("V", b.maxx + 1, midGy)];
    for (const k of keys) {
      const w = S2.walls.get(k);
      if (w && w.owner === team.owner && w.type === "wall" && w.hp > 0) {
        w.type = "door";
        w.lock = { by: team.owner };
        w.open = false;
      }
    }
    S2.nav.stamp++;
  }
  function findBreach(S2, team, rec) {
    const owner = team.owner;
    const doorKey = ekey("H", Math.floor(rec.doorX / TILE), rec.doorGy);
    for (const [k, s] of S2.structures) {
      if (s.owner !== owner) continue;
      const [gx, gy] = k.split(",").map(Number);
      const c = cellCenter(gx, gy);
      if (dist2(c.x, c.y, rec.hx, rec.hy) > CLAIM_R * CLAIM_R) continue;
      const edges = [
        [ekey("V", gx, gy), gkey(gx - 1, gy)],
        [ekey("V", gx + 1, gy), gkey(gx + 1, gy)],
        [ekey("H", gx, gy), gkey(gx, gy - 1)],
        [ekey("H", gx, gy + 1), gkey(gx, gy + 1)]
      ];
      for (const [ek, nk] of edges) {
        const nb = S2.structures.get(nk);
        if (nb && nb.owner === owner) continue;
        if (ek === doorKey) continue;
        const w = S2.walls.get(ek);
        if (!w || w.hp <= 0) return ek;
      }
    }
    return null;
  }
  function sealWall(S2, team, ek, stores) {
    if (S2.t - (S2.breachT[ek] || -1e9) < REPAIR_LOCK) return false;
    if (!wallet.pay(stores, { wood: 40 })) return false;
    S2.walls.set(ek, { type: "wall", mat: "wood", hp: 100, max: 100, owner: team.owner, hitT: -100, open: false });
    S2.nav.stamp++;
    return true;
  }
  function worstDamagedWall(S2, team, rec) {
    let worst = null, wf = 0.6;
    for (const [k, w] of S2.walls) {
      if (w.owner !== team.owner || w.type === "door" || w.hp <= 0) continue;
      if (S2.t - w.hitT < HIT_LOCK) continue;
      const s = wallSegOf(k, w);
      if (dist2((s[0] + s[2]) / 2, (s[1] + s[3]) / 2, rec.hx, rec.hy) > CLAIM_R * CLAIM_R) continue;
      const f = w.hp / w.max;
      if (f < wf) {
        wf = f;
        worst = k;
      }
    }
    return worst;
  }
  function repairWall(S2, team, k, stores) {
    const w = S2.walls.get(k);
    if (!w || S2.t - w.hitT < HIT_LOCK) return false;
    const cost = w.mat === "metal" ? { metal: 8 } : w.mat === "stone" ? { stone: 8 } : { wood: 12 };
    if (!wallet.pay(stores, cost)) return false;
    w.hp = Math.min(w.max, w.hp + w.max * 0.5);
    return true;
  }

  // src/sim/combat.js
  function spawnBullet(S2, o) {
    S2.bullets.push({
      x: o.x,
      y: o.y,
      px: o.x,
      py: o.y,
      vx: Math.cos(o.angle) * o.speed,
      vy: Math.sin(o.angle) * o.speed,
      life: o.life,
      dmg: o.dmg,
      from: o.from,
      col: o.col || null,
      turret: !!o.turret,
      enemy: o.from !== OWNER,
      bounces: 0,
      ricochet: false,
      dist: 0
    });
  }
  function spawnRocket(S2, x, y, angle, from) {
    const w = WEAPONS.rocket;
    S2.rockets.push({ x, y, vx: Math.cos(angle) * w.speed, vy: Math.sin(angle) * w.speed, life: w.range, w, smoke: 0, from });
    S2.events.push({ type: "rocketLaunch", x, y });
  }
  var playerMitigate = (S2, dmg, head) => dmg * (1 - armorReduce(head ? S2.player.facemask : S2.player.bodyArmor, head ? "head" : "body"));
  var botMitigate = (b, dmg, head) => dmg * (1 - armorReduce(head ? b.facemask : b.bodyArmor, head ? "head" : "body"));
  function hurtPlayer(S2, dmg, fx, fy, by) {
    const p = S2.player;
    if (p.dead || p.invuln > 0 || S2.ghost || inSafeZone(S2, p.x, p.y)) return;
    p.health -= dmg;
    p.regenDelay = 4.5;
    p.hurt = 0.28;
    if (by) p.lastHitBy = by;
    if (fx !== void 0) {
      const d = Math.max(1, dist(fx, fy, p.x, p.y));
      p.x += (p.x - fx) / d * 7;
      p.y += (p.y - fy) / d * 7;
    }
    burst(S2, p.x, p.y, "#9e2b1e", 6, 160);
    if (p.health <= 0) playerDie(S2);
  }
  function playerDie(S2, poison) {
    const p = S2.player;
    if (p.dead) return;
    p.dead = true;
    p.deadT = poison ? 4 : 2.2;
    S2.deathMark = { x: p.x, y: p.y };
    creditKill(S2, p.lastHitBy);
    for (const k of ["wood", "stone", "metal"]) {
      spillStack(S2, p.x, p.y, k, S2.inv[k]);
      S2.inv[k] = 0;
    }
    let ammoPool = 0;
    for (const k in S2.weapons) {
      if (k === "rocket") continue;
      ammoPool += S2.weapons[k].ammo + S2.weapons[k].reserve;
      S2.weapons[k].ammo = 0;
      S2.weapons[k].reserve = 0;
    }
    const piles = Math.min(8, Math.ceil(ammoPool / 30));
    for (let i = 0; i < piles; i++) addLoot(S2, p.x, p.y, "ammo", Math.ceil(ammoPool / Math.max(1, piles)));
    const rk = S2.weapons.rocket;
    const rockets = Math.min(12, rk.ammo + rk.reserve);
    rk.ammo = 0;
    rk.reserve = 0;
    for (let i = 0; i < rockets; i++) addLoot(S2, p.x, p.y, "rocket", 1);
    S2.events.push({ type: "playerDie", x: p.x, y: p.y });
  }
  function hurtBot(S2, b, dmg, sx, sy, by) {
    if (b.dead || b.flying || b.eliminated) return;
    if (inSafeZone(S2, b.x, b.y)) return;
    b.hp -= dmg;
    burst(S2, b.x, b.y, "#9e2b1e", 4, 150);
    b.regenT = 4;
    b.lastHitBy = by || null;
    if (sx !== void 0) {
      b.threatX = sx;
      b.threatY = sy;
      b.retaliateT = 2.2;
    }
    if (b.hp <= 0) botDie(S2, b);
  }
  function botDie(S2, b) {
    if (b.dead) return;
    b.dead = true;
    b.respawnT = 15;
    b.flying = false;
    b.aboard = null;
    for (const k of ["wood", "stone", "metal"]) {
      spillStack(S2, b.x, b.y, k, b.inv[k]);
      b.inv[k] = 0;
    }
    const rk = Math.min(12, b.rockets);
    b.rockets = 0;
    for (let i = 0; i < rk; i++) addLoot(S2, b.x, b.y, "rocket", 1);
    const gn = Math.min(6, b.grenades);
    b.grenades = 0;
    for (let i = 0; i < gn; i++) addLoot(S2, b.x, b.y, "rocket", 1);
    addLoot(S2, b.x, b.y, "ammo", S2.rng.randi(24, 60));
    if (b.gun !== "pistol") {
      addLoot(S2, b.x, b.y, "gun", 1, b.gun);
      b.gun = "pistol";
    }
    if (b.scrap > 0) {
      spillStack(S2, b.x, b.y, "scrap", b.scrap);
      b.scrap = 0;
    }
    if (b.id === S2.bounty && b.lastHitBy === OWNER) {
      S2.inv.scrap += BOUNTY_REWARD;
      addFloat(S2, b.x, b.y, "+" + BOUNTY_REWARD + " bounty!", "#ffd76b");
      S2.bounty = null;
    }
    creditKill(S2, b.lastHitBy);
    burst(S2, b.x, b.y, "#9e2b1e", 14, 220);
    addFloat(S2, b.x, b.y, "down", "#e2664a");
  }
  function hurtGuard(S2, g, dmg, by) {
    if (g.dead) return;
    g.hp -= dmg;
    burst(S2, g.x, g.y, "#9e2b1e", 5, 140);
    if (g.hp <= 0) {
      g.dead = true;
      g.respawnT = 82;
      burst(S2, g.x, g.y, "#9e2b1e", 20, 220);
      spillStack(S2, g.x, g.y, "scrap", S2.rng.randi(4, 9));
      addLoot(S2, g.x, g.y, "ammo", S2.rng.randi(12, 26));
      if (by === OWNER) {
        S2.inv.scrap += 8;
        addFloat(S2, g.x, g.y, "+8 guard", "#ffe07a");
      } else {
        addFloat(S2, g.x, g.y, "guard down", "#e2664a");
        creditKill(S2, by);
      }
    }
  }
  function damageAnimal(S2, a, dmg, sx, sy, by) {
    if (a.dead) return;
    a.hp -= dmg;
    a.hit = 0.12;
    if (sx !== void 0) {
      const d = Math.max(1, dist(sx, sy, a.x, a.y));
      const kb = Math.min(16, dmg * 0.4);
      a.x += (a.x - sx) / d * kb;
      a.y += (a.y - sy) / d * kb;
    }
    a.foe = by || a.foe;
    a.aggro = a.aggro || "hit";
    addFloat(S2, a.x, a.y - a.r, "-" + Math.round(dmg), "#e8b06a");
    if (a.hp <= 0) {
      a.dead = true;
      a.respawnT = S2.rng.rand(11, 18);
      burst(S2, a.x, a.y, "#9e2b1e", 12, 200);
      const def = ANIMALS[a.type];
      if (def && def.loot) addLoot(S2, a.x, a.y, def.loot[0], S2.rng.randi(def.loot[1], def.loot[2]));
      addFloat(S2, a.x, a.y, (def ? a.type : "animal") + " down", "#caa46a");
    }
  }
  function damageBarrel(S2, o, dmg, by) {
    o.hp -= dmg;
    if (o.hp > 0) {
      burst(S2, o.x, o.y, "#d2664a", 3, 120);
      return;
    }
    burst(S2, o.x, o.y, o.crate ? "#caa15f" : "#d2664a", 14, 230);
    if (o.tier === "mon") {
      spillStack(S2, o.x, o.y, "scrap", S2.rng.randi(o.crate ? 22 : 12, o.crate ? 42 : 26));
      addLoot(S2, o.x, o.y, "ammo", S2.rng.randi(45, 85));
      o.respawnT = 82;
    } else if (o.tier === "road") {
      spillStack(S2, o.x, o.y, "scrap", S2.rng.randi(8, 16));
      addLoot(S2, o.x, o.y, "ammo", S2.rng.randi(16, 34));
      o.respawnT = 22;
    } else {
      spillStack(S2, o.x, o.y, "scrap", S2.rng.randi(3, 7));
      spillStack(S2, o.x, o.y, "metal", S2.rng.randi(2, 5));
      o.respawnT = 22;
    }
    o.hp = 0;
  }
  function bulletHitStruct(S2, b) {
    const gx = Math.floor(b.x / TILE), gy = Math.floor(b.y / TILE);
    const keys = [ekey("V", gx, gy), ekey("V", gx + 1, gy), ekey("H", gx, gy), ekey("H", gx, gy + 1), ekey("D", gx, gy)];
    for (const k of keys) {
      const w = S2.walls.get(k);
      if (!w || w.hp <= 0 || w.type === "door" && w.open) continue;
      const s = wallSegOf(k, w);
      if (segSeg(b.px, b.py, b.x, b.y, s[0], s[1], s[2], s[3]) || ptSeg(b.x, b.y, s[0], s[1], s[2], s[3]) < 10) {
        if (ownerOfWall(S2, w) !== b.from) damageWall(S2, k, Math.max(1, Math.round(b.dmg * 0.1)), b.from);
        return { kind: "wall", key: k, w };
      }
    }
    const d = S2.deploys.get(gkey(gx, gy));
    if (d && d.owner !== b.from) {
      const c = cellCenter(gx, gy);
      if (!wallBlocksView(S2, b.px, b.py, c.x, c.y)) {
        const mul = d.type === "cupboard" ? 0.05 : 0.25;
        damageDeploy(S2, gkey(gx, gy), Math.max(1, Math.round(b.dmg * mul)), b.from);
      }
      return { kind: "deploy", key: gkey(gx, gy), d };
    }
    return null;
  }
  var ownerOfWall = (S2, w) => w.owner;
  function surfaceNormal(S2, b, hit) {
    if (hit && hit.kind === "wall") {
      const p = hit.key.split(",");
      if (p[0] === "V") return { x: 1, y: 0 };
      if (p[0] === "H") return { x: 0, y: 1 };
      const s = wallSegOf(hit.key, hit.w);
      const dx = s[2] - s[0], dy = s[3] - s[1];
      const l = Math.hypot(dx, dy);
      return { x: -dy / l, y: dx / l };
    }
    if (hit && hit.cx !== void 0) {
      const d = Math.max(1, dist(b.px, b.py, hit.cx, hit.cy));
      return { x: (b.px - hit.cx) / d, y: (b.py - hit.cy) / d };
    }
    return { x: 0, y: 1 };
  }
  function tryRicochet(S2, b, hit, chance) {
    if (b.bounces >= 2 || !S2.rng.chance(chance)) return false;
    let n = surfaceNormal(S2, b, hit);
    if (n.x * (b.px - b.x) + n.y * (b.py - b.y) < 0) {
      n.x = -n.x;
      n.y = -n.y;
    }
    const dot = b.vx * n.x + b.vy * n.y;
    let rvx = b.vx - 2 * dot * n.x, rvy = b.vy - 2 * dot * n.y;
    const sc = S2.rng.rand(-0.45, 0.45);
    const cs = Math.cos(sc), sn = Math.sin(sc);
    const svx = rvx * cs - rvy * sn, svy = rvx * sn + rvy * cs;
    const sp = Math.hypot(svx, svy);
    if (svx * n.x + svy * n.y >= 0.05 * sp) {
      rvx = svx;
      rvy = svy;
    }
    b.vx = rvx * 0.6;
    b.vy = rvy * 0.6;
    b.x = b.px + n.x * 6;
    b.y = b.py + n.y * 6;
    b.dmg = Math.max(1, Math.round(b.dmg * 0.6));
    b.bounces++;
    b.ricochet = true;
    b.col = "ricochet";
    burst(S2, b.x, b.y, "#86d8ff", 4, 180);
    return true;
  }
  function updateBullets(S2, dt) {
    const p = S2.player;
    for (let i = S2.bullets.length - 1; i >= 0; i--) {
      const b = S2.bullets[i];
      b.px = b.x;
      b.py = b.y;
      if (b.ricochet) {
        const f = Math.pow(0.3, dt);
        b.vx *= f;
        b.vy *= f;
        if (Math.hypot(b.vx, b.vy) < 150) {
          S2.bullets.splice(i, 1);
          continue;
        }
      }
      b.x += b.vx * dt;
      b.y += b.vy * dt;
      b.dist += Math.hypot(b.vx, b.vy) * dt;
      b.life -= dt;
      if (b.life <= 0 || b.x < 0 || b.y < 0 || b.x > WORLD.w || b.y > WORLD.h || b.dist > 3400) {
        S2.bullets.splice(i, 1);
        continue;
      }
      let dead = false;
      let hitWall = null;
      eachWallNear(S2, (b.px + b.x) / 2, (b.py + b.y) / 2, Math.abs(b.x - b.px) + Math.abs(b.y - b.py) + 12, (k, w) => {
        if (w.type === "door" && w.open) return false;
        const s = wallSegOf(k, w);
        if (segSeg(b.px, b.py, b.x, b.y, s[0], s[1], s[2], s[3])) {
          hitWall = { kind: "wall", key: k, w };
          return true;
        }
      });
      if (!hitWall && isSolidAt(S2, b.x, b.y)) {
        const gx = Math.floor(b.x / TILE), gy = Math.floor(b.y / TILE);
        const d = S2.deploys.get(gkey(gx, gy));
        if (!(d && d.type === "turret" && d.owner === b.from)) {
          const c = cellCenter(gx, gy);
          hitWall = { kind: "solid", key: gkey(gx, gy), d, cx: c.x, cy: c.y };
        }
      }
      let hitBoulder = null;
      if (!hitWall) {
        for (const bd of S2.world.boulders) {
          if (ptSeg(bd.x, bd.y, b.px, b.py, b.x, b.y) < bd.r) {
            hitBoulder = { cx: bd.x, cy: bd.y };
            break;
          }
        }
      }
      if (hitWall || hitBoulder) {
        if (hitWall) bulletHitStruct(S2, b);
        const chance = hitBoulder ? 0.8 : 0.15;
        if (!tryRicochet(S2, b, hitWall || hitBoulder, chance)) {
          burst(S2, b.px, b.py, "#bfb49a", 3, 110);
          S2.bullets.splice(i, 1);
        }
        continue;
      }
      for (let f = S2.fences.length - 1; f >= 0; f--) {
        const fe = S2.fences[f];
        if (segSeg(b.px, b.py, b.x, b.y, fe.x0, fe.y0, fe.x1, fe.y1) || ptSeg(b.x, b.y, fe.x0, fe.y0, fe.x1, fe.y1) < 5) {
          damageFence(S2, fe, b.dmg);
          dead = true;
          break;
        }
      }
      if (dead) {
        S2.bullets.splice(i, 1);
        continue;
      }
      for (const o of S2.barrels) {
        if (o.hp <= 0) continue;
        if (dist2(b.x, b.y, o.x, o.y) < (o.r + 2) * (o.r + 2)) {
          damageBarrel(S2, o, b.dmg, b.from);
          dead = true;
          break;
        }
      }
      if (dead) {
        S2.bullets.splice(i, 1);
        continue;
      }
      if (S2.patrol && b.from !== "patrol" && ptSeg(S2.patrol.x, S2.patrol.y, b.px, b.py, b.x, b.y) < 34) {
        S2.patrol.hp -= b.dmg;
        burst(S2, b.x, b.y, "#aab1b8", 2, 120);
        S2.bullets.splice(i, 1);
        continue;
      }
      if (S2.airdrop && S2.airdrop.fall >= 1 && ptSeg(S2.airdrop.x, S2.airdrop.y, b.px, b.py, b.x, b.y) < 22) {
        S2.airdrop.hp -= b.dmg;
        S2.bullets.splice(i, 1);
        continue;
      }
      for (const a of S2.animals) {
        if (a.dead) continue;
        if (ptSeg(a.x, a.y, b.px, b.py, b.x, b.y) < a.r + 2) {
          damageAnimal(S2, a, b.dmg, b.px, b.py, b.from);
          dead = true;
          break;
        }
      }
      if (dead) {
        S2.bullets.splice(i, 1);
        continue;
      }
      if (b.from !== "guard") {
        for (const g of S2.guards) {
          if (g.dead) continue;
          if (ptSeg(g.x, g.y, b.px, b.py, b.x, b.y) < GUARD.r + 2) {
            const head = segHitsHead(g.x, g.y, b);
            hurtGuard(S2, g, b.dmg * (head ? HEADSHOT_MUL : 1), b.from);
            if (head && b.from === OWNER) addFloat(S2, g.x, g.y - 14, "headshot", "#ffe07a");
            dead = true;
            break;
          }
        }
      }
      if (dead) {
        S2.bullets.splice(i, 1);
        continue;
      }
      for (const u of S2.units) {
        if (u.dead || u.flying || u.eliminated || u.owner === b.from) continue;
        if (ptSeg(u.x, u.y, b.px, b.py, b.x, b.y) < 14) {
          const head = segHitsHead(u.x, u.y, b);
          let dmg = b.dmg * (head ? HEADSHOT_MUL : 1);
          dmg = botMitigate(u, dmg, head);
          let ax = b.px, ay = b.py;
          hurtBot(S2, u, dmg, ax, ay, b.from);
          if (head && b.from === OWNER) addFloat(S2, u.x, u.y - 14, "headshot", "#ffe07a");
          dead = true;
          break;
        }
      }
      if (dead) {
        S2.bullets.splice(i, 1);
        continue;
      }
      for (const tr of S2.transports) {
        if (tr.destroyed || tr.owner === b.from) continue;
        if (ptSeg(tr.x, tr.y, b.px, b.py, b.x, b.y) < TRANSPORT.r + 2) {
          tr.hp -= b.dmg;
          if (tr.hp <= 0) tr.destroyed = true;
          dead = true;
          break;
        }
      }
      if (dead) {
        S2.bullets.splice(i, 1);
        continue;
      }
      for (const cv of S2.convoys) {
        if (b.from === "convoy") break;
        if (!cv.dead && ptSeg(cv.x, cv.y, b.px, b.py, b.x, b.y) < 26) {
          cv.hp -= b.dmg;
          dead = true;
          break;
        }
        for (const g of cv.guards) {
          if (g.dead) continue;
          if (ptSeg(g.x, g.y, b.px, b.py, b.x, b.y) < 14) {
            g.hp -= b.dmg;
            if (g.hp <= 0) {
              g.dead = true;
              addLoot(S2, g.x, g.y, "ammo", S2.rng.randi(6, 12));
            }
            dead = true;
            break;
          }
        }
        if (dead) break;
      }
      if (dead) {
        S2.bullets.splice(i, 1);
        continue;
      }
      if (b.from !== OWNER && !p.dead && !p.inCopter && !S2.ghost) {
        if (ptSeg(p.x, p.y, b.px, b.py, b.x, b.y) < 18) {
          const head = segHitsHead(p.x, p.y, b);
          hurtPlayer(S2, playerMitigate(S2, b.dmg * (head ? HEADSHOT_MUL : 1), head), b.px, b.py, b.from);
          S2.bullets.splice(i, 1);
          continue;
        }
      }
    }
  }
  function damageFence(S2, f, dmg) {
    f.hp -= dmg;
    if (f.hp <= 0) {
      burst(S2, f.x, f.y, "#caa46a", 14, 200);
      S2.fences.splice(S2.fences.indexOf(f), 1);
      S2.needFenceRefresh = true;
    } else burst(S2, f.x, f.y, "#d8b888", 3, 120);
  }
  function explode(S2, x, y, w, from) {
    const R = w.splash, sd = w.splashDmg, st = w.structDmg || w.splashDmg;
    burst(S2, x, y, "#ffb24a", 22, 320);
    burst(S2, x, y, "#5a534a", 12, 200);
    S2.flashes.push({ x, y, r: R, life: 0.25, max: 0.25 });
    S2.scorch.push({ x, y, r: R * 0.66 });
    if (S2.scorch.length > 36) S2.scorch.shift();
    S2.events.push({ type: "explosion", x, y, r: R });
    S2.shake = Math.max(S2.shake, 16);
    const isExplosiveRaid = w === WEAPONS.rocket || w.structDmg === 50;
    if (isExplosiveRaid && from !== OWNER) {
      let nearPlayer = false;
      for (const [k, s] of S2.structures) if (s.owner === OWNER) {
        const [gx, gy] = k.split(",").map(Number);
        const c = cellCenter(gx, gy);
        if (dist2(x, y, c.x, c.y) < (R + TILE) * (R + TILE)) {
          nearPlayer = true;
          break;
        }
      }
      if (nearPlayer) S2.raidAlarm = { x, y, t: 1.5 };
    }
    if (isExplosiveRaid) {
      const near = nearestOwnedStruct(S2, x, y, R + TILE * 2);
      if (near && near !== from) markRaid(S2, x, y, "raid_" + near);
    }
    for (const [k, s] of [...S2.structures]) {
      const [gx, gy] = k.split(",").map(Number);
      const c = cellCenter(gx, gy);
      const d = dist(x, y, c.x, c.y);
      if (d > R + 32 || s.owner === from) continue;
      damageStructure(S2, k, st * (1 - d / (R + 32)));
    }
    for (const [k, wl] of [...S2.walls]) {
      if (wl.owner === from) continue;
      const s = wallSegOf(k, wl);
      const d = ptSeg(x, y, s[0], s[1], s[2], s[3]);
      if (d > R) continue;
      damageWall(S2, k, st * (1 - d / R), from);
    }
    for (const [k, dp] of [...S2.deploys]) {
      if (dp.owner === from) continue;
      const [gx, gy] = k.split(",").map(Number);
      const c = cellCenter(gx, gy);
      const d = dist(x, y, c.x, c.y);
      if (d > R + 25.6) continue;
      if (wallBlocksView(S2, x, y, c.x, c.y)) continue;
      damageDeploy(S2, k, sd * (1 - d / (R + 25.6)), from);
    }
    for (const a of S2.animals) {
      if (a.dead) continue;
      const d = dist(x, y, a.x, a.y);
      if (d < R + a.r) {
        damageAnimal(S2, a, sd * (1 - d / (R + a.r)), x, y, from);
      }
    }
    for (const g of S2.guards) {
      if (g.dead) continue;
      const d = dist(x, y, g.x, g.y);
      if (d < R + 14) hurtGuard(S2, g, sd * (1 - d / (R + 14)), from);
    }
    for (const cv of S2.convoys) {
      const d = dist(x, y, cv.x, cv.y);
      if (!cv.dead && d < R + 26) cv.hp -= sd * 1.5 * (1 - d / (R + 26));
      for (const g of cv.guards) {
        if (g.dead) continue;
        const gd = dist(x, y, g.x, g.y);
        if (gd < R + 14) {
          g.hp -= sd * (1 - gd / (R + 14));
          if (g.hp <= 0) {
            g.dead = true;
            addLoot(S2, g.x, g.y, "ammo", S2.rng.randi(6, 12));
          }
        }
      }
    }
    for (const o of S2.barrels) {
      if (o.hp <= 0) continue;
      const d = dist(x, y, o.x, o.y);
      if (d < R + o.r) damageBarrel(S2, o, sd * (1 - d / (R + o.r)), from);
    }
    for (let i = S2.fences.length - 1; i >= 0; i--) {
      const f = S2.fences[i];
      const d = dist(x, y, f.x, f.y);
      if (d < R + 23) damageFence(S2, f, sd * (1 - d / (R + 23)));
    }
    const p = S2.player;
    if (!p.dead && !p.inCopter) {
      const d = dist(x, y, p.x, p.y);
      if (d < R + 16) {
        const fall = 1 - d / (R + 16);
        if (from === OWNER) {
          if (!S2.ghost) {
            p.health -= Math.round(sd * 0.45 * fall);
            p.regenDelay = 4.5;
            p.hurt = 0.28;
            if (p.health <= 0) playerDie(S2);
          }
        } else hurtPlayer(S2, Math.round(sd * 0.45 * fall), x, y, from);
      }
    }
    for (const u of S2.units) {
      if (u.dead || u.eliminated || u.owner === from) continue;
      const d = dist(x, y, u.x, u.y);
      if (d < R + 14) hurtBot(S2, u, sd * 0.8 * (1 - d / (R + 14)), x, y, from);
    }
    const hitCop = (c, ownerId, isPlayer) => {
      if (!c || c.destroyed || ownerId === from) return;
      const d = dist(x, y, c.x, c.y);
      if (d < R + 30) hurtCopter(S2, c, sd * (1 - d / (R + 30)), isPlayer);
    };
    hitCop(S2.copter, OWNER, true);
    for (const u of S2.units) hitCop(u.copter, u.owner, false, u);
    for (const tr of S2.transports) {
      if (tr.destroyed || tr.owner === from) continue;
      const d = dist(x, y, tr.x, tr.y);
      if (d < R + TRANSPORT.r) {
        tr.hp -= sd * (1 - d / (R + TRANSPORT.r));
        if (tr.hp <= 0) tr.destroyed = true;
      }
    }
    if (w.rocket && S2.rng.chance(0.25)) spawnFire(S2, x, y);
    if (S2.patrol) {
      const d = dist(x, y, S2.patrol.x, S2.patrol.y);
      if (d < R + 34) S2.patrol.hp -= sd * (1 - d / (R + 34));
    }
  }
  function nearestOwnedStruct(S2, x, y, r) {
    for (const [k, s] of S2.structures) {
      const [gx, gy] = k.split(",").map(Number);
      const c = cellCenter(gx, gy);
      if (dist2(x, y, c.x, c.y) < r * r) return s.owner;
    }
    for (const [k, w] of S2.walls) {
      const s = wallSegOf(k, w);
      if (ptSeg(x, y, s[0], s[1], s[2], s[3]) < r) return w.owner;
    }
    return null;
  }
  function hurtCopter(S2, c, dmg, isPlayer, ownerUnit) {
    c.hp -= dmg;
    if (c.hp > 0 || c.destroyed) return;
    c.destroyed = true;
    vehicleWreck(S2, c.x, c.y);
    if (isPlayer && S2.player.inCopter) {
      S2.player.inCopter = false;
      S2.player.health = 0;
      playerDie(S2);
    }
  }
  function vehicleWreck(S2, x, y) {
    burst(S2, x, y, "#ffb24a", 30, 340);
    burst(S2, x, y, "#5a534a", 18, 240);
    S2.flashes.push({ x, y, r: 96, life: 0.25, max: 0.25 });
    S2.scorch.push({ x, y, r: 52 });
    if (S2.scorch.length > 36) S2.scorch.shift();
    S2.wrecks.push({ x, y, t: 15 });
    if (S2.wrecks.length > 24) S2.wrecks.shift();
    S2.shake = Math.max(S2.shake, 15);
    S2.events.push({ type: "explosion", x, y, r: 96 });
  }
  function spawnFire(S2, x, y) {
    if (S2.fires.length >= 80) return;
    S2.fires.push({ x, y, r: 36, life: 30, max: 30, dmgT: 0, spread: 0, spreadT: S2.rng.rand(3, 7) });
  }
  function updateFires(S2, dt) {
    for (let i = S2.fires.length - 1; i >= 0; i--) {
      const f = S2.fires[i];
      f.life -= dt;
      if (f.life <= 0) {
        S2.fires.splice(i, 1);
        continue;
      }
      f.dmgT -= dt;
      if (f.dmgT <= 0) {
        f.dmgT = 0.3;
        for (const [k, s] of [...S2.structures]) {
          const [gx, gy] = k.split(",").map(Number);
          const c = cellCenter(gx, gy);
          if (dist2(f.x, f.y, c.x, c.y) < f.r * f.r) damageStructure(S2, k, 22 * 0.3);
        }
        for (const [k, w] of [...S2.walls]) {
          const s = wallSegOf(k, w);
          if (ptSeg(f.x, f.y, s[0], s[1], s[2], s[3]) < f.r) damageWall(S2, k, 18 * 0.3, "fire");
        }
        const p = S2.player;
        if (!p.dead && dist2(f.x, f.y, p.x, p.y) < (f.r + 16) * (f.r + 16)) hurtPlayer(S2, 15 * 0.3, void 0, void 0, "fire");
        for (const u of S2.units) {
          if (u.dead || u.eliminated) continue;
          if (dist2(f.x, f.y, u.x, u.y) < (f.r + 12) * (f.r + 12)) hurtBot(S2, u, 15 * 0.3);
        }
      }
      f.spreadT -= dt;
      if (f.spreadT <= 0 && f.spread < 3) {
        f.spreadT = S2.rng.rand(4, 8);
        if (S2.rng.chance(0.25)) {
          let best = null, bd = (f.r + TILE) * (f.r + TILE);
          for (const [k, s] of S2.structures) {
            const [gx, gy] = k.split(",").map(Number);
            const c = cellCenter(gx, gy);
            const dd = dist2(f.x, f.y, c.x, c.y);
            if (dd < bd && !wallBlocksView(S2, f.x, f.y, c.x, c.y)) {
              bd = dd;
              best = c;
            }
          }
          if (best) {
            spawnFire(S2, best.x, best.y);
            f.spread++;
          }
        }
      }
      if (S2.rng.chance(0.3)) S2.particles.push({ x: f.x + S2.rng.rand(-10, 10), y: f.y + S2.rng.rand(-10, 10), vx: S2.wind * 8, vy: -S2.rng.rand(20, 50), life: S2.rng.rand(0.6, 1.4), max: 1.4, r: S2.rng.rand(2, 5), col: "rgba(60,56,50,0.5)" });
    }
  }
  function updateSatchels(S2, dt) {
    for (let i = S2.satchels.length - 1; i >= 0; i--) {
      const s = S2.satchels[i];
      s.t -= dt;
      if (s.t <= 0) {
        S2.satchels.splice(i, 1);
        explode(S2, s.x, s.y, { splash: 88, splashDmg: 120, structDmg: 50 }, s.from);
      }
    }
  }
  function updateGrenades(S2, dt) {
    for (let i = S2.grenades.length - 1; i >= 0; i--) {
      const g = S2.grenades[i];
      const px = g.x, py = g.y;
      const f = Math.pow(0.9, dt * 60);
      g.vx *= f;
      g.vy *= f;
      g.x = clamp(g.x + g.vx * dt, 8, WORLD.w - 8);
      g.y = clamp(g.y + g.vy * dt, 8, WORLD.h - 8);
      g.bob += dt;
      g.t -= dt;
      if (wallBlocksView(S2, px, py, g.x, g.y)) {
        g.x = px;
        g.y = py;
        g.t = 0;
      }
      if (g.t <= 0) {
        S2.grenades.splice(i, 1);
        explode(S2, g.x, g.y, GRENADE, g.from);
      }
    }
  }
  function updateRockets(S2, dt) {
    for (let i = S2.rockets.length - 1; i >= 0; i--) {
      const r = S2.rockets[i];
      const px = r.x, py = r.y;
      r.x += r.vx * dt;
      r.y += r.vy * dt;
      r.life -= dt;
      r.smoke -= dt;
      if (r.smoke <= 0) {
        r.smoke = 0.016;
        S2.particles.push({ x: r.x, y: r.y, vx: S2.rng.rand(-12, 12), vy: S2.rng.rand(-12, 12), life: 0.5, max: 0.5, r: S2.rng.rand(2, 4), col: "rgba(120,114,104,0.5)" });
      }
      let boom = r.life <= 0 || r.x < 4 || r.y < 4 || r.x > WORLD.w - 4 || r.y > WORLD.h - 4;
      if (!boom && (isSolidAt(S2, r.x, r.y) || boulderBlocks(S2, r.x, r.y, 2))) boom = true;
      if (!boom && wallBlocksView(S2, px, py, r.x, r.y)) {
        boom = true;
        r.x = px;
        r.y = py;
      }
      if (!boom) for (const a of S2.animals) {
        if (!a.dead && dist2(r.x, r.y, a.x, a.y) < (a.r + 3) * (a.r + 3)) {
          boom = true;
          break;
        }
      }
      if (!boom) for (const o of S2.barrels) {
        if (o.hp > 0 && dist2(r.x, r.y, o.x, o.y) < (o.r + 3) * (o.r + 3)) {
          boom = true;
          break;
        }
      }
      if (!boom) {
        const hitCop = (c, owner) => c && !c.destroyed && owner !== r.from && dist2(r.x, r.y, c.x, c.y) < (30 + 3) * (30 + 3);
        if (hitCop(S2.copter, OWNER)) boom = true;
        if (!boom) {
          for (const u of S2.units) if (hitCop(u.copter, u.owner)) {
            boom = true;
            break;
          }
        }
      }
      if (boom) {
        S2.rockets.splice(i, 1);
        explode(S2, r.x, r.y, r.w, r.from);
      }
    }
  }
  function updateTurrets(S2, dt) {
    for (const [k, d] of S2.deploys) {
      if (d.type !== "turret") continue;
      const [gx, gy] = k.split(",").map(Number);
      const c = cellCenter(gx, gy);
      const tt = TTIER[d.tier || 1];
      if (S2.tick % 30 === 0) d.tcOk = ownerHasTC(S2, d.owner);
      if (d.tcOk === false) continue;
      d.cd = Math.max(0, (d.cd || 0) - dt);
      if (d.reload > 0) {
        d.reload -= dt;
        if (d.reload <= 0) d.mag = tt.mag;
      }
      d.targT = (d.targT || 0) - dt;
      let best = d.tgt || null;
      if (best) {
        const ref = best.ref;
        const gone = !ref || ref.dead || ref.flying || ref.eliminated || ref === S2.player && (S2.ghost || ref.inCopter);
        if (gone || dist2(c.x, c.y, ref.x, ref.y) > tt.range * tt.range * 1.2) {
          best = null;
          d.tgt = null;
        } else {
          best.x = ref.x;
          best.y = ref.y;
          best.vx = ref.vx || 0;
          best.vy = ref.vy || 0;
        }
      }
      if (d.targT <= 0) {
        d.targT = 0.12;
        let bd = tt.range * tt.range;
        best = null;
        const consider = (x, y, vx, vy, ref) => {
          const dd = dist2(c.x, c.y, x, y);
          if (dd < bd && !wallBlocksViewFor(S2, d.owner, c.x, c.y, x, y)) {
            bd = dd;
            best = { x, y, vx: vx || 0, vy: vy || 0, ref };
          }
        };
        for (const a of S2.animals) if (!a.dead && dist2(c.x, c.y, a.x, a.y) < bd) consider(a.x, a.y, a.vx, a.vy, a);
        for (const u of S2.units) if (!u.dead && !u.flying && !u.eliminated && u.owner !== d.owner) consider(u.x, u.y, u.vx, u.vy, u);
        const p = S2.player;
        if (d.owner !== OWNER && !p.dead && !p.inCopter && !S2.ghost) consider(p.x, p.y, p.vx, p.vy, p);
        d.tgt = best;
      }
      if (best) {
        const dd = dist(c.x, c.y, best.x, best.y);
        const lead = Math.min(0.45, dd / tt.speed) * tt.lead;
        const aim = Math.atan2(best.y + best.vy * lead - c.y, best.x + best.vx * lead - c.x);
        const slew = (d.tier === 3 ? 16 : 10) * dt;
        d.angle = turnTo(d.angle, aim, slew);
        if (Math.abs(angD(d.angle, aim)) < 0.22 && d.cd <= 0 && d.reload <= 0) {
          if (d.mag <= 0) {
            d.reload = tt.reload;
          } else {
            d.mag--;
            d.cd = tt.rof;
            const a2 = d.angle + S2.rng.rand(-tt.spread, tt.spread);
            spawnBullet(S2, { x: c.x + Math.cos(d.angle) * TURRET_MUZZLE, y: c.y + Math.sin(d.angle) * TURRET_MUZZLE, angle: a2, speed: tt.speed, dmg: tt.dmg, from: d.owner, life: tt.range / tt.speed + 0.1, turret: true });
            S2.events.push({ type: "turretFire", x: c.x, y: c.y, a: d.angle });
          }
        }
      } else {
        if (S2.tick % 18 === 0 || d.trk === void 0) {
          let trk2 = null, td = (tt.range * 2.2) ** 2;
          for (const u of S2.units) if (!u.dead && !u.eliminated && u.owner !== d.owner) {
            const dd = dist2(c.x, c.y, u.x, u.y);
            if (dd < td) {
              td = dd;
              trk2 = u;
            }
          }
          d.trk = trk2;
        }
        const trk = d.trk && !d.trk.dead ? d.trk : null;
        if (trk) d.angle = turnTo(d.angle, Math.atan2(trk.y - c.y, trk.x - c.x), 5 * dt);
        else {
          d.scanT -= dt;
          if (d.scanT <= 0) {
            d.scanT = S2.rng.rand(2.5, 6.5);
            const tc = nearestTC(S2, d.owner, c.x, c.y);
            const outward = tc ? Math.atan2(c.y - tc.y, c.x - tc.x) : S2.rng.rand(0, TAU);
            d.scanAim = outward + S2.rng.rand(-1.1, 1.1);
          }
          if (d.scanAim !== void 0) d.angle = turnTo(d.angle, d.scanAim, 1.6 * dt);
        }
      }
    }
  }
  function ownerHasTC(S2, owner) {
    for (const d of S2.deploys.values()) if (d.type === "cupboard" && d.owner === owner) return true;
    return false;
  }
  function nearestTC(S2, owner, x, y) {
    let best = null, bd = 1e18;
    for (const [k, d] of S2.deploys) {
      if (d.type !== "cupboard" || d.owner !== owner) continue;
      const [gx, gy] = k.split(",").map(Number);
      const c = cellCenter(gx, gy);
      const dd = dist2(x, y, c.x, c.y);
      if (dd < bd) {
        bd = dd;
        best = c;
      }
    }
    return best;
  }
  function wallBlocksViewFor(S2, owner, x0, y0, x1, y1) {
    const minx = Math.min(x0, x1), maxx = Math.max(x0, x1);
    let blocked2 = false;
    eachWallNearSeg(S2, x0, y0, x1, y1, (k, w) => {
      if (w.owner === owner) return false;
      if (w.type === "door" && w.open) return false;
      const s = wallSegOf(k, w);
      if (segSeg(x0, y0, x1, y1, s[0], s[1], s[2], s[3])) {
        blocked2 = true;
        return true;
      }
    });
    return blocked2;
  }
  function eachWallNearSeg(S2, x0, y0, x1, y1, fn) {
    const len = Math.hypot(x1 - x0, y1 - y0);
    const steps = Math.max(1, Math.ceil(len / (TILE * 0.5)));
    const seen = /* @__PURE__ */ new Set();
    for (let i = 0; i <= steps; i++) {
      const t = i / steps;
      const gx = Math.floor((x0 + (x1 - x0) * t) / TILE), gy = Math.floor((y0 + (y1 - y0) * t) / TILE);
      const id = gx * 10007 + gy;
      if (seen.has(id)) continue;
      seen.add(id);
      for (const k of [ekey("V", gx, gy), ekey("V", gx + 1, gy), ekey("H", gx, gy), ekey("H", gx, gy + 1), ekey("D", gx, gy)]) {
        const w = S2.walls.get(k);
        if (w && w.hp > 0) {
          if (fn(k, w) === true) return;
        }
      }
    }
  }
  var turnTo = (a, b, step2) => {
    const d = angD(a, b);
    if (Math.abs(d) <= step2) return b;
    return a + Math.sign(d) * step2;
  };
  var angD = (a, b) => {
    let d = (b - a) % TAU;
    if (d > Math.PI) d -= TAU;
    if (d < -Math.PI) d += TAU;
    return d;
  };
  function updateLoot(S2, dt) {
    const p = S2.player;
    for (let i = S2.loot.length - 1; i >= 0; i--) {
      const L = S2.loot[i];
      L.life += dt;
      L.bob += dt;
      const f = Math.pow(0.88, dt * 60);
      L.vx *= f;
      L.vy *= f;
      L.x += L.vx * dt;
      L.y += L.vy * dt;
      if (!p.dead && !p.inCopter && !S2.ghost && L.life > 0.35) {
        const d = dist(p.x, p.y, L.x, L.y);
        if (d < 150) {
          L.x += (p.x - L.x) / d * 210 * dt;
          L.y += (p.y - L.y) / d * 210 * dt;
          if (d < 20) {
            collectPlayer(S2, L);
            S2.loot.splice(i, 1);
            continue;
          }
        }
      }
      if (L.life > 0.3) {
        let bu = null, bd2 = 180 * 180;
        for (const u of S2.units) {
          if (u.dead || u.eliminated || u.flying) continue;
          const dd = dist2(u.x, u.y, L.x, L.y);
          if (dd < bd2) {
            bd2 = dd;
            bu = u;
          }
        }
        if (bu) {
          const d = Math.sqrt(bd2) || 1;
          L.x += (bu.x - L.x) / d * 240 * dt;
          L.y += (bu.y - L.y) / d * 240 * dt;
          if (d < 22) {
            collectBot(S2, bu, L);
            S2.loot.splice(i, 1);
            continue;
          }
        }
      }
      if (L.life > 120) S2.loot.splice(i, 1);
    }
  }
  function collectPlayer(S2, L) {
    const w = S2.weapons;
    if (L.kind === "ammo") {
      w.rifle.reserve += L.amt;
      w.pistol.reserve += Math.ceil(L.amt * 0.4);
      w.shotgun.reserve += Math.ceil(L.amt * 0.3);
    } else if (L.kind === "rocket") w.rocket.reserve += L.amt;
    else if (L.kind === "satchel") S2.inv.scrap += L.amt * 8;
    else if (L.kind === "sniper") {
      S2.owned.sniper = true;
      w.sniper.reserve += 12;
      addFloat(S2, S2.player.x, S2.player.y - 20, "SNIPER unlocked!", "#bfe3ff");
    } else if (L.kind === "gun") {
      if (L.gun && S2.owned[L.gun] !== void 0) {
        S2.owned[L.gun] = true;
        w[L.gun].reserve += L.gun === "hmg" ? 60 : 30;
      }
    } else S2.inv[L.kind] = (S2.inv[L.kind] || 0) + L.amt;
  }
  function collectBot(S2, u, L) {
    if (L.kind === "scrap") u.scrap += L.amt;
    else if (L.kind === "rocket") u.rockets += L.amt;
    else if (L.kind === "satchel") u.satchels += L.amt;
    else if (L.kind === "ammo") u.scrap += Math.ceil(L.amt / 8);
    else if (L.kind === "sniper") u.scrap += 30;
    else if (L.kind === "gun") {
      const rank = { pistol: 1, shotgun: 2, rifle: 3, hmg: 4 };
      if ((rank[L.gun] || 0) > (rank[u.gun] || 0)) u.gun = L.gun;
      else u.scrap += 10;
    } else u.inv[L.kind] = (u.inv[L.kind] || 0) + L.amt;
  }
  function updateWrecks(S2, dt) {
    for (let i = S2.wrecks.length - 1; i >= 0; i--) {
      const w = S2.wrecks[i];
      w.t -= dt;
      if (w.t <= 0) {
        S2.wrecks.splice(i, 1);
        continue;
      }
      if (S2.rng.chance(0.25)) S2.particles.push({ x: w.x + S2.rng.rand(-12, 12), y: w.y + S2.rng.rand(-8, 8), vx: S2.wind * 10, vy: -S2.rng.rand(24, 60), life: S2.rng.rand(0.7, 1.6), max: 1.6, r: S2.rng.rand(2.5, 6), col: "rgba(50,46,44,0.55)" });
    }
  }

  // src/sim/vehicles.js
  function moveCopter(S2, dt) {
    const c = S2.copter, p = S2.player, cmd = S2.cmd;
    if (!c || c.destroyed) {
      p.inCopter = false;
      return;
    }
    if (cmd.left) c.angle -= COPTER.turn * dt;
    if (cmd.right) c.angle += COPTER.turn * dt;
    let thr = 0;
    if (cmd.up) thr = 1;
    else if (cmd.down) thr = -0.55;
    const cap = cmd.run ? COPTER.boost : COPTER.speed;
    c.vx += Math.cos(c.angle) * COPTER.accel * thr * dt;
    c.vy += Math.sin(c.angle) * COPTER.accel * thr * dt;
    const drag = Math.pow(thr !== 0 ? COPTER.drag : COPTER.dragIdle, dt);
    c.vx *= drag;
    c.vy *= drag;
    const sp = Math.hypot(c.vx, c.vy);
    if (sp > cap) {
      c.vx *= cap / sp;
      c.vy *= cap / sp;
    }
    c.x += c.vx * dt;
    c.y += c.vy * dt;
    if (c.x < COPTER.r) {
      c.x = COPTER.r;
      c.vx *= -0.3;
    }
    if (c.y < COPTER.r) {
      c.y = COPTER.r;
      c.vy *= -0.3;
    }
    if (c.x > WORLD.w - COPTER.r) {
      c.x = WORLD.w - COPTER.r;
      c.vx *= -0.3;
    }
    if (c.y > WORLD.h - COPTER.r) {
      c.y = WORLD.h - COPTER.r;
      c.vy *= -0.3;
    }
    c.spd = Math.hypot(c.vx, c.vy);
    c.rotor += dt * (20 + c.spd * 0.05);
    p.x = c.x;
    p.y = c.y;
    p.vx = c.vx;
    p.vy = c.vy;
  }
  function buyTransport(S2, team, buyer) {
    const shop = S2.world.shop;
    const tr = {
      owner: team.owner,
      x: shop.x,
      y: shop.y + (shop.r || 120) + 90,
      angle: 0,
      vx: 0,
      vy: 0,
      rotor: 0,
      hp: TRANSPORT.hp,
      max: TRANSPORT.hp,
      destroyed: false,
      state: "idle",
      stateT: 0,
      boardT: 0,
      homeX: buyer.hx,
      homeY: buyer.hy,
      riders: [],
      destX: 0,
      destY: 0
    };
    S2.transports.push(tr);
    addFloat(S2, tr.x, tr.y, "+transport heli", "#bfe3ff");
    return tr;
  }
  function transportBoard(S2, b, tr) {
    if (tr.riders.length >= TRANSPORT.seats || tr.state === "fly" || tr.state === "unload") return false;
    b.aboard = tr;
    b.flying = true;
    b.wasRaid = false;
    b.state = "raid";
    tr.riders.push(b);
    if (tr.state === "idle") tr.state = "board";
    return true;
  }
  function transportPhysics(S2, tr, tx, ty, dt) {
    const d = dist(tr.x, tr.y, tx, ty);
    const aim = Math.atan2(ty - tr.y, tx - tr.x);
    tr.angle = turnToward(tr.angle, aim, dt * 3);
    const thr = d > 220 ? 1 : Math.max(0.08, d / 220);
    tr.vx += Math.cos(tr.angle) * TRANSPORT.accel * thr * dt;
    tr.vy += Math.sin(tr.angle) * TRANSPORT.accel * thr * dt;
    const drag = Math.pow(TRANSPORT.drag, dt);
    tr.vx *= drag;
    tr.vy *= drag;
    const sp = Math.hypot(tr.vx, tr.vy);
    if (sp > TRANSPORT.speed) {
      tr.vx *= TRANSPORT.speed / sp;
      tr.vy *= TRANSPORT.speed / sp;
    }
    tr.x = clamp(tr.x + tr.vx * dt, TRANSPORT.r, WORLD.w - TRANSPORT.r);
    tr.y = clamp(tr.y + tr.vy * dt, TRANSPORT.r, WORLD.h - TRANSPORT.r);
    return d;
  }
  function updateTransports(S2, dt) {
    for (let i = S2.transports.length - 1; i >= 0; i--) {
      const tr = S2.transports[i];
      if (tr.hp <= 0 || tr.destroyed) {
        vehicleWreck(S2, tr.x, tr.y);
        for (const r of tr.riders) {
          r.aboard = null;
          r.flying = false;
          r.x = tr.x + S2.rng.rand(-30, 30);
          r.y = tr.y + S2.rng.rand(-30, 30);
          botDie(S2, r);
        }
        S2.transports.splice(i, 1);
        continue;
      }
      tr.riders = tr.riders.filter((r) => !r.dead && r.aboard === tr);
      tr.stateT += dt;
      const occupied = tr.riders.length > 0;
      if (occupied || tr.state === "fly" || tr.state === "unload" || tr.state === "return") tr.rotor += dt * 40;
      const raidTeam = tr.riders.length ? tr.riders[0].raid : null;
      const raidRec = raidTeam && raidTeam.bases ? raidTeam.bases.find((r) => !r.dead) : null;
      if (tr.state === "idle" || tr.state === "board") {
        if (occupied && raidRec) {
          tr.boardT += dt;
          if (tr.riders.length >= 2 || tr.boardT > 5) {
            const d = dist(tr.x, tr.y, raidRec.hx, raidRec.hy);
            const f = Math.max(0, (d - 620) / Math.max(1, d));
            tr.destX = tr.x + (raidRec.hx - tr.x) * f;
            tr.destY = tr.y + (raidRec.hy - tr.y) * f;
            tr.state = "fly";
            tr.stateT = 0;
            tr.boardT = 0;
          }
        } else if (occupied) {
          transportPhysics(S2, tr, tr.homeX - TILE * 5, tr.homeY, dt);
        } else {
          tr.vx = tr.vy = 0;
          tr.boardT = 0;
        }
        for (const r of tr.riders) {
          r.x = tr.x;
          r.y = tr.y;
        }
      } else if (tr.state === "fly") {
        const d = transportPhysics(S2, tr, tr.destX, tr.destY, dt);
        for (const r of tr.riders) {
          r.x = tr.x;
          r.y = tr.y;
        }
        if (d < 200 || !raidRec || tr.stateT > 16) {
          tr.state = "unload";
          tr.stateT = 0;
        }
      } else if (tr.state === "unload") {
        for (const r of tr.riders) {
          let rx = tr.x + S2.rng.rand(-60, 60), ry = tr.y + S2.rng.rand(-60, 60);
          for (let t = 0; t < 14 && blocked(S2, rx, ry, 12); t++) {
            const a = S2.rng.rand(0, TAU), dd = S2.rng.rand(40, 150);
            rx = tr.x + Math.cos(a) * dd;
            ry = tr.y + Math.sin(a) * dd;
          }
          r.x = clamp(rx, 12, WORLD.w - 12);
          r.y = clamp(ry, 12, WORLD.h - 12);
          r.aboard = null;
          r.flying = false;
        }
        tr.riders = [];
        tr.state = "return";
        tr.stateT = 0;
      } else if (tr.state === "return") {
        const d = transportPhysics(S2, tr, tr.homeX - TILE * 5, tr.homeY, dt);
        if (d < 160 || tr.stateT > 16) {
          tr.state = "idle";
          tr.vx = tr.vy = 0;
        }
      }
    }
  }
  function updateTrains(S2, dt) {
    if (S2.world.rails.length) {
      S2.trainT -= dt;
      if (S2.trainT <= 0 && S2.trains.length < 2) {
        S2.trainT = S2.rng.rand(30, 90);
        const rail = S2.rng.pick(S2.world.rails);
        const fwd = S2.rng.chance(0.5);
        const pts = fwd ? rail.pts : [...rail.pts].reverse();
        S2.trains.push({ pts, seg: 0, x: pts[0].x, y: pts[0].y, px: pts[0].x, py: pts[0].y, ang: 0, speed: S2.rng.rand(460, 640), smokeT: 0 });
      }
    }
    for (let i = S2.trains.length - 1; i >= 0; i--) {
      const tr = S2.trains[i];
      tr.px = tr.x;
      tr.py = tr.y;
      let move = tr.speed * dt;
      while (move > 0 && tr.seg < tr.pts.length - 1) {
        const a = tr.pts[tr.seg], b = tr.pts[tr.seg + 1];
        const segLen = dist(a.x, a.y, b.x, b.y);
        const done = dist(a.x, a.y, tr.x, tr.y);
        const left = segLen - done;
        if (move < left) {
          const f = (done + move) / segLen;
          tr.x = a.x + (b.x - a.x) * f;
          tr.y = a.y + (b.y - a.y) * f;
          move = 0;
        } else {
          tr.seg++;
          tr.x = b.x;
          tr.y = b.y;
          move -= left;
        }
      }
      tr.ang = Math.atan2(tr.y - tr.py, tr.x - tr.px) || tr.ang;
      const KR = 36;
      const p = S2.player;
      if (!p.dead && !p.inCopter && ptSeg(p.x, p.y, tr.px, tr.py, tr.x, tr.y) < KR) hurtPlayer(S2, 999, tr.px, tr.py, "train");
      for (const u of S2.units) if (!u.dead && !u.flying && !u.eliminated && ptSeg(u.x, u.y, tr.px, tr.py, tr.x, tr.y) < KR) hurtBot(S2, u, 999, tr.px, tr.py, "train");
      for (const a of S2.animals) if (!a.dead && ptSeg(a.x, a.y, tr.px, tr.py, tr.x, tr.y) < KR) {
        a.hp = 0;
        a.dead = true;
        a.respawnT = S2.rng.rand(11, 18);
      }
      for (const o of S2.barrels) if (o.hp > 0 && ptSeg(o.x, o.y, tr.px, tr.py, tr.x, tr.y) < KR) o.hp = 0;
      const sweepLen = dist(tr.px, tr.py, tr.x, tr.y);
      const steps = Math.max(1, Math.ceil(sweepLen / TILE));
      for (let s2 = 0; s2 <= steps; s2++) {
        const t = s2 / steps;
        const gx = Math.floor((tr.px + (tr.x - tr.px) * t) / TILE), gy = Math.floor((tr.py + (tr.y - tr.py) * t) / TILE);
        damageStructure(S2, gx + "," + gy, 9999);
        damageDeploy(S2, gx + "," + gy, 9999, "train");
        for (const k of ["V," + gx + "," + gy, "V," + (gx + 1) + "," + gy, "H," + gx + "," + gy, "H," + gx + "," + (gy + 1)]) damageWall(S2, k, 9999, "train");
      }
      tr.smokeT -= dt;
      if (tr.smokeT <= 0) {
        tr.smokeT = 0.28;
        const hx = tr.x + Math.cos(tr.ang) * 16, hy = tr.y + Math.sin(tr.ang) * 16;
        S2.particles.push({ x: hx, y: hy, vx: S2.rng.rand(-7, 7) + S2.wind * 5, vy: -S2.rng.rand(6, 16), life: S2.rng.rand(11, 15), max: 15, r: S2.rng.rand(5, 10), col: "rgba(74,74,80,0.5)" });
        S2.particles.push({ x: hx, y: hy, vx: S2.rng.rand(-4, 4), vy: -S2.rng.rand(4, 10), life: S2.rng.rand(8, 12), max: 12, r: S2.rng.rand(3, 6), col: "rgba(40,40,46,0.45)" });
      }
      if (tr.seg >= tr.pts.length - 1) S2.trains.splice(i, 1);
    }
    for (const c of S2.world.crossings) {
      c.active = S2.trains.some((tr) => dist2(tr.x, tr.y, c.x, c.y) < 820 * 820);
      c.gate += ((c.active ? 1 : 0) - c.gate) * Math.min(1, dt * 3);
    }
  }
  function updateConvoys(S2, dt) {
    if (!S2.convoys.length) {
      S2.convoyT -= dt;
      if (S2.convoyT <= 0) spawnConvoy(S2);
    }
    for (let i = S2.convoys.length - 1; i >= 0; i--) {
      const cv = S2.convoys[i];
      if (cv.hp <= 0 && !cv.dead) {
        cv.dead = true;
        burst(S2, cv.x, cv.y, "#ffb24a", 30, 340);
        burst(S2, cv.x, cv.y, "#ffe2a0", 16, 220);
        S2.flashes.push({ x: cv.x, y: cv.y, r: 96, life: 0.25, max: 0.25 });
        S2.shake = Math.max(S2.shake, 12);
        S2.scorch.push({ x: cv.x, y: cv.y, r: 60 });
        if (S2.scorch.length > 36) S2.scorch.shift();
        spillStack(S2, cv.x, cv.y, "metal", S2.rng.randi(50, 90));
        spillStack(S2, cv.x, cv.y, "scrap", S2.rng.randi(60, 110));
        addLoot(S2, cv.x, cv.y, "ammo", S2.rng.randi(50, 100));
        for (let r = 0, n = S2.rng.randi(3, 5); r < n; r++) addLoot(S2, cv.x, cv.y, "rocket", 1);
        for (let r = 0, n = S2.rng.randi(2, 4); r < n; r++) addLoot(S2, cv.x, cv.y, "satchel", 1);
        for (const g of cv.guards) if (!g.dead) addLoot(S2, g.x, g.y, "ammo", S2.rng.randi(8, 16));
        addFloat(S2, cv.x, cv.y, "convoy destroyed!", "#ffd0a0");
        S2.events.push({ type: "explosion", x: cv.x, y: cv.y, r: 96 });
        S2.convoys.splice(i, 1);
        continue;
      }
      cv.px = cv.x;
      cv.py = cv.y;
      let move = CONVOY.speed * dt;
      while (move > 0 && cv.seg < cv.pts.length - 1) {
        const a = cv.pts[cv.seg], b = cv.pts[cv.seg + 1];
        const segLen = dist(a.x, a.y, b.x, b.y);
        const done = dist(a.x, a.y, cv.x, cv.y);
        const left = segLen - done;
        if (move < left) {
          const f = (done + move) / segLen;
          cv.x = a.x + (b.x - a.x) * f;
          cv.y = a.y + (b.y - a.y) * f;
          move = 0;
        } else {
          cv.seg++;
          cv.x = b.x;
          cv.y = b.y;
          move -= left;
        }
      }
      cv.ang = Math.atan2(cv.y - cv.py, cv.x - cv.px) || cv.ang;
      if (cv.seg >= cv.pts.length - 1) {
        S2.convoys.splice(i, 1);
        continue;
      }
      cv.gunCd = Math.max(0, cv.gunCd - dt);
      let tgt = null, td = CONVOY.trange;
      const p = S2.player;
      if (!p.dead && !p.inCopter && !S2.ghost) {
        const d = dist(cv.x, cv.y, p.x, p.y);
        if (d < td && !wallBlocksView(S2, cv.x, cv.y, p.x, p.y) && !boulderLine(S2, cv.x, cv.y, p.x, p.y)) {
          tgt = p;
          td = d;
        }
      }
      for (const u of S2.units) {
        if (u.dead || u.flying || u.eliminated) continue;
        const d = dist(cv.x, cv.y, u.x, u.y);
        if (d < td && !wallBlocksView(S2, cv.x, cv.y, u.x, u.y) && !boulderLine(S2, cv.x, cv.y, u.x, u.y)) {
          tgt = u;
          td = d;
        }
      }
      if (tgt) {
        cv.taim = Math.atan2(tgt.y - cv.y, tgt.x - cv.x);
        if (cv.gunCd <= 0) {
          cv.gunCd = CONVOY.trof;
          spawnBullet(S2, { x: cv.x + Math.cos(cv.taim) * 30, y: cv.y + Math.sin(cv.taim) * 30, angle: cv.taim + S2.rng.rand(-0.04, 0.04), speed: CONVOY.bspeed, dmg: CONVOY.tdmg, from: "convoy", life: 0.6 });
          burst(S2, cv.x + Math.cos(cv.taim) * 30, cv.y + Math.sin(cv.taim) * 30, "#ffd76b", 2, 90);
        }
      } else cv.taim = cv.ang;
      const slots = [[-46, 28], [-46, -28], [50, 30], [50, -30]];
      for (let gi = 0; gi < cv.guards.length; gi++) {
        const g = cv.guards[gi];
        if (g.dead) continue;
        g.gunCd = Math.max(0, g.gunCd - dt);
        let gt = null, gd = CONVOY.grange;
        if (!p.dead && !p.inCopter && !S2.ghost) {
          const d = dist(g.x, g.y, p.x, p.y);
          if (d < gd && !wallBlocksView(S2, g.x, g.y, p.x, p.y) && !boulderLine(S2, g.x, g.y, p.x, p.y)) {
            gt = p;
            gd = d;
          }
        }
        for (const u of S2.units) {
          if (u.dead || u.flying || u.eliminated) continue;
          const d = dist(g.x, g.y, u.x, u.y);
          if (d < gd && !wallBlocksView(S2, g.x, g.y, u.x, u.y) && !boulderLine(S2, g.x, g.y, u.x, u.y)) {
            gt = u;
            gd = d;
          }
        }
        if (dist(g.x, g.y, cv.x, cv.y) > CONVOY.leash) gt = null;
        if (gt) {
          const aim = Math.atan2(gt.y - g.y, gt.x - g.x);
          g.angle = turnToward(g.angle, aim, dt * 9);
          if (g.gunCd <= 0 && Math.abs(angShort(g.angle, aim)) < 0.3) {
            g.gunCd = CONVOY.grof;
            spawnBullet(S2, { x: g.x + Math.cos(g.angle) * 14, y: g.y + Math.sin(g.angle) * 14, angle: g.angle + S2.rng.rand(-0.06, 0.06), speed: CONVOY.bspeed, dmg: CONVOY.gdmg, from: "convoy", life: 0.55 });
          }
          let mvx = 0, mvy = 0;
          if (gd > 260) {
            mvx = Math.cos(aim);
            mvy = Math.sin(aim);
          } else if (gd < 150) {
            mvx = -Math.cos(aim);
            mvy = -Math.sin(aim);
          }
          const nx = g.x + mvx * CONVOY.gspeed * dt, ny = g.y + mvy * CONVOY.gspeed * dt;
          if (!blocked(S2, nx, ny, 12)) {
            g.x = nx;
            g.y = ny;
          }
        } else {
          const sx = cv.x + Math.cos(cv.ang) * slots[gi][0] - Math.sin(cv.ang) * slots[gi][1];
          const sy = cv.y + Math.sin(cv.ang) * slots[gi][0] + Math.cos(cv.ang) * slots[gi][1];
          const d = dist(g.x, g.y, sx, sy);
          if (d > 4) {
            const sp = CONVOY.speed + 50;
            g.x += (sx - g.x) / d * Math.min(d, sp * dt);
            g.y += (sy - g.y) / d * Math.min(d, sp * dt);
          }
          g.angle = turnToward(g.angle, cv.ang, dt * 5);
        }
      }
    }
  }
  function spawnConvoy(S2) {
    S2.convoyT = S2.rng.rand(180, 300);
    const cands = [];
    for (const rd of S2.world.roads) {
      let start = -1, best = null;
      for (let i = 0; i <= rd.pts.length; i++) {
        const ok = i < rd.pts.length && S2.world.landFactor(rd.pts[i].x, rd.pts[i].y) > 0.02;
        if (ok && start === -1) start = i;
        if (!ok && start !== -1) {
          if (!best || i - start > best.len) best = { start, len: i - start };
          start = -1;
        }
      }
      if (best && best.len >= 10) cands.push({ rd, ...best });
    }
    if (!cands.length) return;
    const pick = cands[Math.floor(S2.rng.next() * cands.length)];
    let pts = pick.rd.pts.slice(pick.start, pick.start + pick.len);
    if (S2.rng.chance(0.5)) pts = [...pts].reverse();
    const cv = { pts, seg: 0, x: pts[0].x, y: pts[0].y, px: pts[0].x, py: pts[0].y, ang: 0, taim: 0, hp: CONVOY.vhp, max: CONVOY.vhp, gunCd: 0, dead: false, guards: [] };
    for (let i = 0; i < 4; i++) cv.guards.push({ x: pts[0].x, y: pts[0].y, hp: CONVOY.ghp, max: CONVOY.ghp, angle: 0, gunCd: 0, dead: false });
    S2.convoys.push(cv);
    S2.events.push({ type: "convoy", x: cv.x, y: cv.y });
  }
  function updatePatrol(S2, dt) {
    if (!S2.patrol) {
      S2.patrolT -= dt;
      if (S2.patrolT <= 0) spawnPatrol(S2);
      return;
    }
    const p = S2.patrol;
    p.rotor += dt * 28;
    const team = S2.teams.find((t) => t.owner === p.huntOwner && !t.eliminated && t.bases.some((r) => !r.dead));
    if (p.hp <= 0) {
      patrolCrash(S2);
      return;
    }
    let goalX, goalY, leaving = false;
    if (!team || p.orbitT <= 0) {
      leaving = true;
      goalX = p.exitX;
      goalY = p.exitY;
      if (p.x < -320 || p.x > WORLD.w + 320 || p.y < -320 || p.y > WORLD.h + 320) {
        S2.patrol = null;
        S2.patrolT = S2.rng.rand(240, 420);
        return;
      }
    } else {
      const rec = team.bases.find((r) => !r.dead);
      const d = dist(p.x, p.y, rec.hx, rec.hy);
      if (d > 460 && !p.orbiting) {
        goalX = rec.hx;
        goalY = rec.hy;
      } else {
        p.orbiting = true;
        p.orbitA += 0.55 * dt;
        p.orbitT -= dt;
        goalX = rec.hx + Math.cos(p.orbitA) * PATROL.orbitR;
        goalY = rec.hy + Math.sin(p.orbitA) * PATROL.orbitR;
      }
    }
    const aim = Math.atan2(goalY - p.y, goalX - p.x);
    p.angle = turnToward(p.angle, aim, dt * 3);
    const d2g = dist(p.x, p.y, goalX, goalY);
    p.spd = Math.min(PATROL.speed, PATROL.speed * d2g / 300 + 40);
    p.x += Math.cos(p.angle) * p.spd * dt;
    p.y += Math.sin(p.angle) * p.spd * dt;
    p.flash = Math.max(0, p.flash - dt);
    if (team && !leaving) {
      p.strafeT -= dt;
      if (p.strafeT <= 0) {
        p.strafeT = 1.2;
        let v = null, vd = PATROL.strafeR;
        for (const u of S2.units) {
          if (u.owner !== p.huntOwner || u.dead || u.eliminated || u.flying) continue;
          const d = dist(p.x, p.y, u.x, u.y);
          if (d < vd) {
            vd = d;
            v = u;
          }
        }
        if (v) {
          for (let i = 0; i < 5; i++) {
            const lead = 0.18 + i * 0.02;
            const tx = v.x + v.vx * lead + S2.rng.rand(-26, 26), ty = v.y + v.vy * lead + S2.rng.rand(-26, 26);
            spawnBullet(S2, { x: p.x, y: p.y, angle: Math.atan2(ty - p.y, tx - p.x), speed: 900, dmg: 9, from: "patrol", life: 1, col: "hmg" });
          }
          p.flash = 0.12;
        }
      }
      for (const u of S2.units) {
        if (u.owner !== p.huntOwner || u.dead || u.eliminated || u.flying) continue;
        if (dist2(p.x, p.y, u.x, u.y) > PATROL.flakR * PATROL.flakR) continue;
        u.flakT = (u.flakT || 0) - dt;
        if (u.flakT <= 0) {
          u.flakT = 1;
          const lead = dist(p.x, p.y, u.x, u.y) / 1100;
          const tx = p.x + Math.cos(p.angle) * p.spd * lead, ty = p.y + Math.sin(p.angle) * p.spd * lead;
          const a = Math.atan2(ty - u.y, tx - u.x) + S2.rng.rand(-0.07, 0.07);
          u.angle = a;
          const fx = u.x + Math.cos(a) * 1100 * 0.7, fy = u.y + Math.sin(a) * 1100 * 0.7;
          S2.events.push({ type: "flak", x0: u.x, y0: u.y, x1: fx, y1: fy });
          if (ptSeg(p.x, p.y, u.x, u.y, fx, fy) < 40) {
            p.hp -= 6;
            burst(S2, p.x, p.y, "#aab1b8", 3, 120);
          }
        }
      }
    }
  }
  function spawnPatrol(S2) {
    let best = null, bs = -1;
    for (const t2 of S2.teams) {
      if (t2.eliminated) continue;
      const rec2 = t2.bases.find((r) => !r.dead);
      if (!rec2) continue;
      const live = S2.units.filter((u) => u.owner === t2.owner && !u.dead && !u.eliminated).length;
      let floors = 0;
      for (const s of S2.structures.values()) if (s.owner === t2.owner) floors++;
      const tc = S2.deploys.get(rec2.tcKey);
      const bank = tc ? tc.store.wood + tc.store.stone + tc.store.metal : 0;
      const score = live * 10 + floors * 2 + bank * 0.01;
      if (score > bs) {
        bs = score;
        best = { t: t2, rec: rec2 };
      }
    }
    if (!best) {
      S2.patrolT = S2.rng.rand(120, 240);
      return;
    }
    const { t, rec } = best;
    const fromLeft = rec.hx > WORLD.w / 2;
    S2.patrol = {
      huntOwner: t.owner,
      huntId: t.id,
      x: fromLeft ? -200 : WORLD.w + 200,
      y: clamp(rec.hy + S2.rng.rand(-600, 600), 200, WORLD.h - 200),
      exitX: fromLeft ? WORLD.w + 360 : -360,
      exitY: rec.hy,
      angle: 0,
      rotor: 0,
      spd: 0,
      hp: PATROL.hp,
      max: PATROL.hp,
      orbitA: S2.rng.rand(0, TAU),
      orbitT: PATROL.orbitT,
      orbiting: false,
      strafeT: 1,
      flash: 0
    };
    addFloat(S2, rec.hx, rec.hy - 80, "Patrol helicopter inbound!", "#ffb84a");
    S2.elims.push({ text: "PATROL HELI hunts Base " + (t.id + 1), t: 10 });
  }
  function patrolCrash(S2) {
    const p = S2.patrol;
    burst(S2, p.x, p.y, "#ffb24a", 40, 360);
    burst(S2, p.x, p.y, "#ff9b3d", 24, 280);
    S2.scorch.push({ x: p.x, y: p.y, r: 64 });
    if (S2.scorch.length > 36) S2.scorch.shift();
    S2.wrecks.push({ x: p.x, y: p.y, t: 15 });
    for (let i = 0, n = S2.rng.randi(4, 6); i < n; i++) addLoot(S2, p.x + S2.rng.rand(-30, 30), p.y + S2.rng.rand(-30, 30), "rocket", 1);
    for (let i = 0, n = S2.rng.randi(2, 3); i < n; i++) addLoot(S2, p.x + S2.rng.rand(-30, 30), p.y + S2.rng.rand(-30, 30), "satchel", 1);
    addLoot(S2, p.x, p.y, "ammo", S2.rng.randi(100, 180));
    spillStack(S2, p.x, p.y, "scrap", S2.rng.randi(80, 150));
    spillStack(S2, p.x, p.y, "metal", S2.rng.randi(50, 90));
    S2.elims.push({ text: "PATROL HELI DOWN", t: 12 });
    S2.events.push({ type: "explosion", x: p.x, y: p.y, r: 110 });
    S2.shake = Math.max(S2.shake, 14);
    S2.patrol = null;
    S2.patrolT = S2.rng.rand(240, 420);
  }
  var angShort = (a, b) => {
    let d = (b - a) % TAU;
    if (d > Math.PI) d -= TAU;
    if (d < -Math.PI) d += TAU;
    return d;
  };

  // src/sim/worldevents.js
  function updateWeather(S2, dt) {
    const W = S2.weather;
    W.timer -= dt;
    if (W.timer <= 0) {
      if (W.mode === "clear") {
        W.mode = "rain";
        W.timer = S2.rng.rand(8, 16);
        W.boltT = S2.rng.rand(3, 8);
      } else {
        W.mode = "clear";
        W.timer = S2.rng.rand(90, 170);
      }
    }
    const target = W.mode === "rain" ? 1 : 0;
    W.rain += (target - W.rain) * Math.min(1, dt * 0.5);
    if (W.rain > 0.4) {
      W.boltT -= dt;
      if (W.boltT <= 0) {
        W.boltT = S2.rng.rand(4, 13);
        W.flash = 1;
        S2.events.push({ type: "bolt" });
      }
    }
    W.flash = Math.max(0, W.flash - dt * 2.4);
    W.fogTimer -= dt;
    if (W.fogTimer <= 0) {
      W.fogOn = !W.fogOn;
      W.fogTimer = W.fogOn ? S2.rng.rand(28, 60) : S2.rng.rand(45, 95);
    }
    W.fog += ((W.fogOn ? 1 : 0) - W.fog) * Math.min(1, dt * 0.22);
    S2.wind = (Math.sin(S2.t * 0.5) * 0.5 + Math.sin(S2.t * 1.9 + 1.1) * 0.5) * (1 + W.rain * 1.7);
  }
  function updateAirdrop(S2, dt) {
    if (!S2.plane && !S2.airdrop) {
      S2.airdropT -= dt;
      if (S2.airdropT <= 0) {
        spawnAirdrop(S2);
        S2.airdropT = S2.rng.rand(120, 300);
      }
    }
    if (S2.plane) {
      const pl = S2.plane;
      pl.x += pl.vx * dt;
      pl.prop += dt * 30;
      if (!pl.released && (pl.vx > 0 && pl.x >= pl.dropX || pl.vx < 0 && pl.x <= pl.dropX)) {
        pl.released = true;
        S2.airdrop = { x: pl.dropX, y: pl.dropY - 780, gy: pl.dropY, hp: 90, max: 90, fall: 0, sway: S2.rng.rand(0, TAU), loot: airdropLoot(S2) };
        addFloat(S2, pl.dropX, pl.dropY, "Airdrop incoming!", "#ffe07a");
        S2.events.push({ type: "airdropCalled", x: pl.dropX, y: pl.dropY });
      }
      if (pl.x < -300 || pl.x > WORLD.w + 300) S2.plane = null;
    }
    if (S2.airdrop) {
      const a = S2.airdrop;
      if (a.fall < 1) {
        a.fall = Math.min(1, a.fall + dt * 0.16);
        const s = a.fall * a.fall * (3 - 2 * a.fall);
        a.y = a.gy - 780 + 780 * s;
        a.sway += dt * 1.5;
      } else if (a.hp <= 0) {
        spillAirdrop(S2, a);
        S2.airdrop = null;
      }
    }
  }
  function spawnAirdrop(S2, atX, atY) {
    let dropX = atX, dropY = atY;
    if (dropX === void 0) {
      for (let t = 0; t < 24; t++) {
        const x = S2.rng.rand(0.16 * WORLD.w, 0.84 * WORLD.w), y = S2.rng.rand(0.16 * WORLD.h, 0.84 * WORLD.h);
        if (dist(x, y, S2.world.shop.x, S2.world.shop.y) < SAFE_R + 160) continue;
        dropX = x;
        dropY = y;
        break;
      }
      if (dropX === void 0) {
        dropX = WORLD.w * 0.25;
        dropY = WORLD.h * 0.25;
      }
    }
    const fromLeft = S2.rng.chance(0.5);
    S2.plane = { x: dropX + (fromLeft ? -1700 : 1700), y: dropY, vx: fromLeft ? 820 : -820, dropX, dropY, released: false, prop: 0 };
  }
  function airdropLoot(S2) {
    const loot = [["scrap", S2.rng.randi(50, 110)]];
    if (S2.rng.chance(0.85)) loot.push(["rocket", S2.rng.randi(2, 6)]);
    if (S2.rng.chance(0.85)) loot.push(["ammo", S2.rng.randi(70, 150)]);
    if (S2.rng.chance(0.55)) loot.push(["metal", S2.rng.randi(25, 60)]);
    if (S2.rng.chance(0.5)) loot.push(["wood", S2.rng.randi(30, 70)]);
    if (S2.rng.chance(0.4)) loot.push(["sniper", 1]);
    return loot;
  }
  function spillAirdrop(S2, a) {
    burst(S2, a.x, a.y, "#ffd27a", 30, 300);
    burst(S2, a.x, a.y, "#d2664a", 16, 220);
    for (const [kind, amt] of a.loot) {
      if (kind === "rocket") {
        for (let i = 0; i < amt; i++) addLoot(S2, a.x, a.y, "rocket", 1);
      } else if (kind === "sniper") addLoot(S2, a.x, a.y, "sniper", 1);
      else if (kind === "ammo") addLoot(S2, a.x, a.y, "ammo", amt);
      else spillStack(S2, a.x, a.y, kind, amt);
    }
    addFloat(S2, a.x, a.y - 30, "AIRDROP LOOTED!", "#ffe07a");
  }
  function throwSupplySignal(S2, x, y) {
    if (S2.signal) return false;
    const p = S2.player;
    const d = dist(p.x, p.y, x, y);
    if (d > 700) {
      const f = 700 / d;
      x = p.x + (x - p.x) * f;
      y = p.y + (y - p.y) * f;
    }
    if (inSafeZone(S2, x, y)) {
      addFloat(S2, p.x, p.y - 20, "Not in the safe zone", "#d2664a");
      return false;
    }
    if ((S2.inv.signal | 0) < 1) {
      addFloat(S2, p.x, p.y - 20, "No supply signal \u2014 buy one at the trade zone", "#d2664a");
      return false;
    }
    S2.inv.signal--;
    S2.signal = { x, y, t: 0, dur: 6, puff: 0, called: false };
    addFloat(S2, p.x, p.y - 20, "Supply signal out \u2014 everyone saw it", "#c9a0ff");
    return true;
  }
  function aiSupplySignal(S2, x, y) {
    if (S2.signal || S2.plane || S2.airdrop) return false;
    S2.signal = { x, y, t: 0, dur: 6, puff: 0, called: false };
    return true;
  }
  function updateSignals(S2, dt) {
    const s = S2.signal;
    if (!s) return;
    s.t += dt;
    s.puff -= dt;
    if (s.puff <= 0) {
      s.puff = 0.12;
      burst(S2, s.x + S2.rng.rand(-8, 8), s.y + S2.rng.rand(-6, 2), "#a96bd4", 3, 60);
    }
    if (!s.called && s.t > s.dur && !S2.plane && !S2.airdrop) {
      spawnAirdrop(S2, s.x, s.y);
      s.called = true;
    }
    if (s.called || s.t > s.dur + 60) S2.signal = null;
  }
  function updateQuarry(S2, dt) {
    const q = S2.quarry;
    if (!q) return;
    const present = /* @__PURE__ */ new Set();
    if (!S2.player.dead && !S2.player.inCopter && !S2.ghost && dist2(S2.player.x, S2.player.y, q.x, q.y) < q.r * q.r) present.add(OWNER);
    for (const u of S2.units) {
      if (u.dead || u.eliminated || u.flying) continue;
      if (dist2(u.x, u.y, q.x, q.y) < q.r * q.r) present.add(u.owner);
    }
    if (present.size === 1) {
      const owner = [...present][0];
      if (owner !== q.owner) {
        if (q.capOwner !== owner) {
          q.capOwner = owner;
          q.capT = 0;
        }
        q.capT += dt;
        if (q.capT >= QUARRY.capT) {
          q.owner = owner;
          q.capT = 0;
          q.capOwner = null;
          q.payT = 0;
          const team = S2.teams.find((t) => t.owner === owner);
          const label = owner === OWNER ? "You" : "Base " + (team ? team.id + 1 : "?");
          addFloat(S2, q.x, q.y - 44, "Quarry captured!", "#cdd6a3");
          S2.elims.push({ text: "QUARRY \u2192 " + label, t: 10 });
        }
      } else q.capT = 0;
    } else q.capT = Math.max(0, q.capT - dt);
    if (q.owner && q.owner !== OWNER) {
      const team = S2.teams.find((t) => t.owner === q.owner);
      const primaryAlive = team && !team.eliminated && S2.units.some((u) => u.owner === q.owner && u.primary && !u.eliminated);
      if (!primaryAlive) q.owner = null;
    }
    if (q.owner) {
      q.arm += dt;
      q.payT += dt;
      if (q.payT >= QUARRY.payEvery) {
        q.payT = 0;
        q.paid++;
        if (q.owner === OWNER) {
          S2.inv.stone += QUARRY.pay.stone;
          S2.inv.metal += QUARRY.pay.metal;
          S2.inv.scrap += QUARRY.pay.scrap;
        } else {
          const team = S2.teams.find((t) => t.owner === q.owner);
          const rec = team && team.bases.find((r) => !r.dead);
          const tc = rec && S2.deploys.get(rec.tcKey);
          if (tc && tc.store) {
            tc.store.stone += QUARRY.pay.stone;
            tc.store.metal += QUARRY.pay.metal;
            tc.store.scrap += QUARRY.pay.scrap;
          }
        }
        addFloat(S2, q.x, q.y - 44, "+stone +metal +scrap", "#cdd6a3");
      }
    }
  }
  function updateLockedCrate(S2, dt) {
    if (!S2.lockedCrate) {
      S2.crateT -= dt;
      if (S2.crateT <= 0) {
        const mons = S2.world.monuments.filter((m2) => m2.type !== "quarry");
        const m = S2.rng.pick(mons);
        const a = S2.rng.rand(0, TAU);
        S2.lockedCrate = { x: m.x + Math.cos(a) * (m.r + 90), y: m.y + Math.sin(a) * (m.r + 90), mon: m.name, t: CRATE.hackT, started: false, blink: 0 };
        addFloat(S2, S2.lockedCrate.x, S2.lockedCrate.y - 30, "Locked crate at the " + m.name + "!", "#ffb84a");
        S2.elims.push({ text: "LOCKED CRATE \u2014 " + m.name, t: 12 });
        S2.crateT = S2.rng.rand(240, 360);
      }
      return;
    }
    const c = S2.lockedCrate;
    c.blink += dt;
    let attended = !S2.player.dead && !S2.ghost && dist2(S2.player.x, S2.player.y, c.x, c.y) < CRATE.r * CRATE.r;
    if (!attended) {
      for (const u of S2.units) {
        if (u.dead || u.eliminated || u.flying) continue;
        if (dist2(u.x, u.y, c.x, c.y) < CRATE.r * CRATE.r) {
          attended = true;
          break;
        }
      }
    }
    if (attended) {
      c.started = true;
      c.t -= dt;
    }
    if (c.t <= 0) {
      burst(S2, c.x, c.y, "#ffd27a", 30, 300);
      burst(S2, c.x, c.y, "#d2664a", 16, 220);
      spillStack(S2, c.x, c.y, "scrap", S2.rng.randi(80, 140));
      spillStack(S2, c.x, c.y, "metal", S2.rng.randi(40, 80));
      for (let i = 0, n = S2.rng.randi(3, 6); i < n; i++) addLoot(S2, c.x + S2.rng.rand(-20, 20), c.y + S2.rng.rand(-20, 20), "rocket", 1);
      for (let i = 0, n = S2.rng.randi(2, 4); i < n; i++) addLoot(S2, c.x + S2.rng.rand(-20, 20), c.y + S2.rng.rand(-20, 20), "satchel", 1);
      addLoot(S2, c.x, c.y, "ammo", S2.rng.randi(80, 160));
      if (S2.rng.chance(0.5)) addLoot(S2, c.x, c.y, "sniper", 1);
      addFloat(S2, c.x, c.y - 24, "Locked crate opened!", "#ffb84a");
      S2.lockedCrate = null;
    }
  }
  function buildAmbient(S2) {
    const R = S2.rng;
    const W = WORLD.w, H = WORLD.h;
    const mkCloud = (x, y, heavy) => {
      const baseR = heavy ? R.rand(86, 140) : R.rand(70, 128);
      const puffs = [];
      let bound = baseR;
      for (let i = 0, n = R.randi(5, 9); i < n; i++) {
        const dx = R.rand(-0.95, 0.95) * baseR, dy = R.rand(-0.42, 0.42) * baseR, r = baseR * R.rand(0.55, 1);
        puffs.push({ dx, dy, r });
        bound = Math.max(bound, Math.hypot(dx, dy) + r);
      }
      return { x, y, puffs, r: bound, op: heavy ? R.rand(0.92, 1) : R.rand(0.7, 1), sp: R.rand(9, 19), heavy };
    };
    S2.clouds = [];
    let slots = R.randi(7, 10);
    while (slots > 0) {
      if (slots >= 2 && R.chance(0.5)) {
        const cx2 = R.rand(0, W), cy2 = R.rand(0, H);
        const n = Math.min(slots, R.randi(2, 3));
        for (let i = 0; i < n; i++) S2.clouds.push(mkCloud(cx2 + R.rand(-150, 150), cy2 + R.rand(-95, 95), true));
        slots -= n;
      } else {
        S2.clouds.push(mkCloud(R.rand(0, W), R.rand(0, H), R.chance(0.4)));
        slots--;
      }
    }
    S2.fogBanks = [];
    for (let i = 0, n = R.randi(13, 20); i < n; i++) {
      const baseR = R.rand(150, 320);
      const puffs = [];
      for (let p = 0, np = R.randi(2, 5); p < np; p++) puffs.push({ dx: R.rand(-1, 1) * baseR, dy: R.rand(-0.6, 0.6) * baseR, r: baseR * R.rand(0.7, 1.2) });
      S2.fogBanks.push({ x: R.rand(0, W), y: R.rand(0, H), r: baseR, puffs, dens: R.rand(0.5, 1.15), sp: R.rand(5, 12), vy: R.rand(-3, 3) });
    }
    S2.fireflies = [];
    for (let i = 0, n = R.randi(16, 28); i < n; i++) {
      S2.fireflies.push({ x: R.rand(W / 3 + 30, 2 * W / 3 - 30), y: R.rand(60, H - 60), vx: R.rand(-28, 28), vy: R.rand(-28, 28), ph: R.rand(0, TAU), fs: R.rand(2.5, 4.5), wT: R.rand(0.5, 1.7) });
    }
  }
  function updateAmbient(S2, dt) {
    const W = WORLD.w, H = WORLD.h;
    if (!S2.clouds) buildAmbient(S2);
    for (const c of S2.clouds) {
      c.x += c.sp * dt;
      if (c.x - c.r > W + 160) {
        c.x = -c.r - S2.rng.rand(0, 500);
        c.y = S2.rng.rand(0, H);
      }
    }
    for (const f of S2.fogBanks) {
      f.x += f.sp * dt;
      f.y += f.vy * dt;
      if (f.x - f.r > W + 220) {
        f.x = -f.r - S2.rng.rand(0, 450);
        f.y = S2.rng.rand(0, H);
      }
      if (f.y < -f.r) f.y = H + f.r * 0.5;
      else if (f.y > H + f.r) f.y = -f.r * 0.5;
    }
    const x0 = W / 3 + 20, x1 = 2 * W / 3 - 20;
    for (const ff of S2.fireflies) {
      ff.wT -= dt;
      if (ff.wT <= 0) {
        ff.wT = S2.rng.rand(0.5, 1.7);
        const a = S2.rng.rand(0, TAU), sp = S2.rng.rand(14, 40);
        ff.vx = Math.cos(a) * sp;
        ff.vy = Math.sin(a) * sp;
      }
      ff.x += ff.vx * dt;
      ff.y += ff.vy * dt;
      if (ff.x < x0) {
        ff.x = x0;
        ff.vx = Math.abs(ff.vx);
      }
      if (ff.x > x1) {
        ff.x = x1;
        ff.vx = -Math.abs(ff.vx);
      }
      ff.y = clamp(ff.y, 40, H - 40);
      ff.ph += ff.fs * dt;
    }
    for (let i = S2.footprints.length - 1; i >= 0; i--) {
      S2.footprints[i].t += dt;
      if (S2.footprints[i].t >= 10) S2.footprints.splice(i, 1);
    }
  }
  function dropFootprint(S2, e, a) {
    e.fpAcc = (e.fpAcc || 0) + dist(e.x, e.y, e.fpX || e.x, e.fpY || e.y);
    e.fpX = e.x;
    e.fpY = e.y;
    if (e.fpAcc < 30) return;
    e.fpAcc = 0;
    e.fpSide = !e.fpSide;
    const s = e.fpSide ? 5 : -5;
    S2.footprints.push({ x: e.x - Math.sin(a) * s, y: e.y + Math.cos(a) * s, a, t: 0 });
    if (S2.footprints.length > 700) S2.footprints.shift();
  }
  function updateRespawns(S2, dt) {
    for (const n of S2.resources) {
      if (n.amount >= n.max) continue;
      n.regen += dt;
      if (n.amount <= 0) {
        if (n.regen >= 29) {
          n.amount = n.max;
          n.regen = 0;
        }
      } else if (n.regen >= 2.5) {
        n.amount = Math.min(n.max, n.amount + Math.ceil(n.max * 0.05));
        n.regen = 0;
      }
    }
    for (const b of S2.barrels) {
      if (b.hp > 0) continue;
      b.respawnT -= dt;
      if (b.respawnT <= 0) b.hp = b.max;
    }
  }

  // src/sim/player.js
  var SLOT_WEAPON = { 1: "pistol", 2: "rifle", 3: "minigun", 4: "rocket", 6: "sniper", 7: "shotgun", 8: "hmg" };
  function curWeapon(S2) {
    const k = SLOT_WEAPON[S2.slot];
    return k && S2.owned[k] ? k : null;
  }
  function updatePlayer(S2, dt) {
    const p = S2.player, cmd = S2.cmd;
    p.gatherCd = Math.max(0, (p.gatherCd || 0) - dt);
    p.recoil = Math.max(0, p.recoil - 42 * dt);
    p.swing = Math.max(0, p.swing - dt);
    p.hurt = Math.max(0, p.hurt - dt);
    p.invuln = Math.max(0, p.invuln - dt);
    if (p.dead) {
      p.deadT -= dt;
      if (p.deadT <= 0) respawnPlayer(S2);
      return;
    }
    if (p.poison > 0) {
      p.poison -= dt;
      p.regenDelay = Math.max(p.regenDelay, 1.5);
      p.health -= 3.2 * dt;
      if (S2.tick % 60 === 0) addFloat(S2, p.x, p.y - 20, "poison", "#7bbf4f");
      if (p.health <= 0) {
        playerDie(S2, true);
        return;
      }
    }
    p.regenDelay = Math.max(0, p.regenDelay - dt);
    if (p.regenDelay <= 0 && p.health < p.maxhp) p.health = Math.min(p.maxhp, p.health + 12 * dt);
    if (p.inCopter) {
      moveCopter(S2, dt);
      return;
    }
    p.angle = Math.atan2(cmd.my - p.y, cmd.mx - p.x);
    let dx = (cmd.right ? 1 : 0) - (cmd.left ? 1 : 0);
    let dy = (cmd.down ? 1 : 0) - (cmd.up ? 1 : 0);
    let speed = cmd.run ? p.run : p.walk;
    const wepK = curWeapon(S2);
    if (wepK === "minigun" && S2.weapons.minigun.spin >= WEAPONS.minigun.windup) speed *= 0.4;
    const lake = S2.world.lakeAt(p.x, p.y);
    if (lake && !lake.frozen) speed *= 0.5;
    const len = Math.hypot(dx, dy);
    let wvx = 0, wvy = 0;
    if (len > 0) {
      wvx = dx / len * speed;
      wvy = dy / len * speed;
    }
    if (lake && lake.frozen) {
      const t2 = Math.min(1, dt * 1.1);
      p.vx += (wvx - p.vx) * t2;
      p.vy += (wvy - p.vy) * t2;
      if (len === 0) {
        const g = Math.pow(0.6, dt);
        p.vx *= g;
        p.vy *= g;
      }
    } else {
      p.vx = wvx;
      p.vy = wvy;
    }
    p.moving = Math.hypot(p.vx, p.vy) > 10;
    const opts = { passOwner: OWNER, openOwnDoors: false };
    const nx = p.x + p.vx * dt, ny = p.y + p.vy * dt;
    if (blocked(S2, p.x, p.y, PLAYER_R, opts)) {
      p.x = nx;
      p.y = ny;
    } else {
      if (!blocked(S2, nx, p.y, PLAYER_R, opts)) p.x = nx;
      else p.vx *= -0.2;
      if (!blocked(S2, p.x, ny, PLAYER_R, opts)) p.y = ny;
      else p.vy *= -0.2;
    }
    p.x = clamp(p.x, PLAYER_R, WORLD.w - PLAYER_R);
    p.y = clamp(p.y, PLAYER_R, WORLD.h - PLAYER_R);
    for (const n of S2.resources) if (n.amount > 0) pushOut(p, n.x, n.y, n.r + PLAYER_R - 6);
    for (const b of S2.barrels) if (b.hp > 0) pushOut(p, b.x, b.y, b.r + PLAYER_R - 4);
    for (const b of S2.world.boulders) pushOut(p, b.x, b.y, b.r + PLAYER_R - 2);
    pushOut(p, S2.world.shop.x, S2.world.shop.y, S2.world.shop.r + PLAYER_R);
    if (p.moving) dropFootprint(S2, p, Math.atan2(p.vy, p.vx));
    const w = wepK && S2.weapons[wepK];
    const def = wepK && WEAPONS[wepK];
    if (w) {
      w.cd = Math.max(0, w.cd - dt);
      if (w.reloading > 0) {
        w.reloading -= dt;
        if (w.reloading <= 0) {
          const take = Math.min(def.magSize - w.ammo, w.reserve);
          w.ammo += take;
          w.reserve -= take;
        }
      }
    }
    const canAct = !S2.buildMode && !p.dead && !p.inCopter && !S2.shopOpen && !S2.storeOpen;
    if (canAct && wepK === "minigun") {
      const mg = S2.weapons.minigun;
      if (cmd.fireHeld) mg.spin = Math.min(def.windup + 0.4, mg.spin + dt);
      else mg.spin = Math.max(0, mg.spin - 1.6 * dt);
      if (cmd.fireHeld && mg.spin >= def.windup) fire(S2);
    } else if (canAct && cmd.fireHeld && def && def.auto) fire(S2);
    else if (canAct && cmd.fireHeld && S2.slot === 0) {
      if (p.gatherCd <= 0) {
        p.gatherCd = 0.34;
        gatherSwing(S2);
      }
    }
    if (S2.rapidRockets && canAct && cmd.fireHeld) {
      S2.rapidCd = Math.max(0, (S2.rapidCd || 0) - dt);
      if (S2.rapidCd <= 0 && !inSafeZone(S2, p.x, p.y)) {
        S2.rapidCd = 0.1;
        spawnRocket(S2, p.x + Math.cos(p.angle) * 26, p.y + Math.sin(p.angle) * 26, p.angle, OWNER);
      }
    }
  }
  function pushOut(p, x, y, r) {
    const d2 = dist2(p.x, p.y, x, y);
    if (d2 < r * r && d2 > 0.01) {
      const d = Math.sqrt(d2);
      p.x += (p.x - x) / d * (r - d);
      p.y += (p.y - y) / d * (r - d);
    }
  }
  function fire(S2) {
    const p = S2.player;
    const k = curWeapon(S2);
    if (!k) return;
    if (inSafeZone(S2, p.x, p.y)) {
      tip(S2, "No weapons in the safe zone");
      return;
    }
    const w = S2.weapons[k], def = WEAPONS[k];
    if (w.reloading > 0 || w.cd > 0) return;
    if (w.ammo <= 0) {
      reload(S2);
      return;
    }
    w.ammo--;
    w.cd = def.rof;
    let spread = def.spread;
    if (k === "rifle" && p.rifleLaser) spread *= 0.4;
    const n = def.pellets || 1;
    for (let i = 0; i < n; i++) {
      const a = p.angle + S2.rng.rand(-spread, spread);
      const mx = p.x + Math.cos(a) * 26, my = p.y + Math.sin(a) * 26;
      if (def.rocket) spawnRocket(S2, mx, my, a, OWNER);
      else spawnBullet(S2, { x: mx, y: my, angle: a, speed: def.speed, dmg: def.dmg, from: OWNER, life: def.range, col: def.tracer || null });
    }
    p.recoil = Math.min(12, p.recoil + def.kick);
    S2.muzzle = { x: p.x + Math.cos(p.angle) * 30, y: p.y + Math.sin(p.angle) * 30, a: p.angle, t: def.rocket ? 0.08 : 0.05 };
    S2.events.push({ type: "shot", x: p.x, y: p.y, a: p.angle, weapon: k });
  }
  function reload(S2) {
    const k = curWeapon(S2);
    if (!k) return;
    const w = S2.weapons[k], def = WEAPONS[k];
    if (w.reloading > 0 || w.ammo >= def.magSize || w.reserve <= 0) return;
    w.reloading = def.reloadT;
  }
  function selectSlot(S2, i) {
    if (S2.player.inCopter) return;
    const k = SLOT_WEAPON[i];
    if (k && !S2.owned[k]) {
      tip(S2, "locked \u2014 buy it at the trade shop");
      return;
    }
    S2.slot = i;
    S2.buildMode = i === 5;
    if (S2.rapidRockets && i !== 4) S2.rapidRockets = false;
  }
  function gatherSwing(S2) {
    const p = S2.player;
    p.swing = 0.16;
    let a = null, ad = GATHER_RANGE * 0.85;
    for (const an of S2.animals) {
      if (an.dead) continue;
      const d = dist(p.x, p.y, an.x, an.y) - an.r;
      if (d < ad) {
        ad = d;
        a = an;
      }
    }
    if (a) {
      damageAnimal(S2, a, 18, p.x, p.y, OWNER);
      return;
    }
    if (repairNearby(S2)) return;
    let node = null, nd = GATHER_RANGE;
    for (const n of S2.resources) {
      if (n.amount <= 0) continue;
      const d = dist(p.x, p.y, n.x, n.y) - n.r;
      if (d < nd) {
        nd = d;
        node = n;
      }
    }
    if (node) {
      const baseAmt = node.base === "wood" ? 8 : node.base === "stone" ? 6 : 5;
      const got = Math.min((S2.jackhammer ? 3 : 1) * baseAmt, node.amount);
      node.amount -= got;
      node.regen = 0;
      S2.inv[node.base] += got;
      addFloat(S2, node.x, node.y - node.r, "+" + got + " " + node.base, "#d8e0c2");
      burst(S2, node.x, node.y, "#caa07a", S2.jackhammer ? 6 : 3, 140);
      S2.events.push({ type: "harvest", x: node.x, y: node.y, kind: node.base });
    }
  }
  function repairNearby(S2) {
    const p = S2.player;
    const reach = GATHER_RANGE + 38.4;
    let best = null, bd = reach, bestKind = null, bestKey = null;
    for (const [k, s] of S2.structures) {
      if (s.owner !== OWNER || s.hp >= s.max) continue;
      const [gx, gy] = k.split(",").map(Number);
      const c = cellCenter(gx, gy);
      const d = dist(p.x, p.y, c.x, c.y);
      if (d < bd) {
        bd = d;
        best = s;
        bestKind = "cell";
        bestKey = k;
      }
    }
    for (const [k, w] of S2.walls) {
      if (w.owner !== OWNER || w.hp >= w.max) continue;
      const seg = wallSegOf(k, w);
      const d = dist(p.x, p.y, (seg[0] + seg[2]) / 2, (seg[1] + seg[3]) / 2);
      if (d < bd) {
        bd = d;
        best = w;
        bestKind = "wall";
        bestKey = k;
      }
    }
    for (const [k, dp] of S2.deploys) {
      if (dp.owner !== OWNER || dp.hp >= dp.max) continue;
      const [gx, gy] = k.split(",").map(Number);
      const c = cellCenter(gx, gy);
      const d = dist(p.x, p.y, c.x, c.y);
      if (d < bd) {
        bd = d;
        best = dp;
        bestKind = "deploy";
        bestKey = k;
      }
    }
    if (!best) return false;
    const def = BUILD[best.type];
    const lock = bestKind === "deploy" ? 0 : void 0;
    if (tryRepair(S2, best, def, [S2.inv], lock)) {
      addFloat(S2, p.x, p.y - 20, "repaired", "#9ad06a");
      return true;
    }
    return true;
  }
  function interact(S2) {
    const p = S2.player;
    if (p.inCopter) {
      const gx = Math.floor(p.x / TILE), gy = Math.floor(p.y / TILE);
      if (S2.structures.has(gkey(gx, gy))) {
        tip(S2, "Can't land on a base");
        return;
      }
      p.inCopter = false;
      p.y += COPTER.r + PLAYER_R + 6;
      return;
    }
    if (S2.copter && !S2.copter.destroyed && dist(p.x, p.y, S2.copter.x, S2.copter.y) < COPTER.r + PLAYER_R + 34) {
      p.inCopter = true;
      tip(S2, "liftoff");
      return;
    }
    const shop = S2.world.shop;
    if (dist(p.x, p.y, shop.x, shop.y) < shop.r + PLAYER_R + 44) {
      S2.shopOpen = !S2.shopOpen;
      return;
    }
    let best = null, bd = TILE * 1.4, kind = null, key = null;
    for (const [k, w] of S2.walls) {
      if (w.type !== "door" || w.hp <= 0) continue;
      const seg = wallSegOf(k, w);
      const d = dist(p.x, p.y, (seg[0] + seg[2]) / 2, (seg[1] + seg[3]) / 2);
      if (d < bd) {
        bd = d;
        best = w;
        kind = "door";
        key = k;
      }
    }
    for (const [k, dp] of S2.deploys) {
      if (!(dp.type === "cupboard" || dp.type === "box")) continue;
      const [gx, gy] = k.split(",").map(Number);
      const c = cellCenter(gx, gy);
      const d = dist(p.x, p.y, c.x, c.y);
      if (d < bd) {
        bd = d;
        best = dp;
        kind = "store";
        key = k;
      }
    }
    if (!best) return;
    if (best.lock && best.lock.by !== OWNER) {
      tip(S2, "Locked \u2014 not your base");
      return;
    }
    if (kind === "door") {
      best.open = !best.open;
      S2.nav.stamp++;
    } else S2.storeOpen = key;
  }
  function buildTargetAt(S2, wx, wy) {
    const piece = S2.buildPiece;
    const def = BUILD[piece];
    const gx = Math.floor(wx / TILE), gy = Math.floor(wy / TILE);
    if (def.cat === "cell") return { gx, gy };
    if (def.cat === "diag") return { key: ekey("D", gx, gy) };
    const lx = wx - gx * TILE, ly = wy - gy * TILE;
    const cands = [
      { key: ekey("V", gx, gy), d: lx },
      { key: ekey("V", gx + 1, gy), d: TILE - lx },
      { key: ekey("H", gx, gy), d: ly },
      { key: ekey("H", gx, gy + 1), d: TILE - ly }
    ].sort((a, b) => a.d - b.d);
    return { key: cands[0].key };
  }
  function tryPlace(S2) {
    const t = buildTargetAt(S2, S2.cmd.mx, S2.cmd.my);
    const piece = S2.buildPiece;
    const obj = place(S2, OWNER, piece, t, [S2.inv], { rot: S2.buildRot });
    if (obj) {
      if (BUILD[piece].tc) addFloat(S2, S2.cmd.mx, S2.cmd.my, "base claimed", "#9ad06a");
      S2.events.push({ type: "place", x: S2.cmd.mx, y: S2.cmd.my });
    } else tip(S2, "can't place there");
  }
  function tryRemove(S2) {
    const t = buildTargetAt(S2, S2.cmd.mx, S2.cmd.my);
    const gx = Math.floor(S2.cmd.mx / TILE), gy = Math.floor(S2.cmd.my / TILE);
    const refund = (def, obj) => {
      for (const k in def.cost) S2.inv[k] += Math.ceil(def.cost[k] / 2);
      if (obj.mat === "stone" || obj.mat === "metal") S2.inv.stone += 7;
      if (obj.mat === "metal") S2.inv.metal += 10;
    };
    if (t.key) {
      const w = S2.walls.get(t.key);
      if (w && w.owner === OWNER) {
        refund(BUILD[w.type], w);
        S2.walls.delete(t.key);
        S2.nav.stamp++;
        return;
      }
    }
    const dk = gkey(gx, gy);
    const dp = S2.deploys.get(dk);
    if (dp && dp.owner === OWNER) {
      refund(BUILD[dp.type], dp);
      S2.deploys.delete(dk);
      S2.nav.stamp++;
      return;
    }
    const st = S2.structures.get(dk);
    if (st && st.owner === OWNER) {
      refund(BUILD[st.type], st);
      S2.structures.delete(dk);
      cleanupOrphans(S2, dk);
      S2.nav.stamp++;
      return;
    }
  }
  function upgradeUnderCursor(S2) {
    const wx = S2.cmd.mx, wy = S2.cmd.my;
    const gx = Math.floor(wx / TILE), gy = Math.floor(wy / TILE);
    if (S2.buildMode) {
      const t = buildTargetAt(S2, wx, wy);
      const tryUp = (obj) => obj && obj.owner === OWNER && upgradeStructure(S2, obj, BUILD[obj.type], [S2.inv]);
      for (const k of [ekey("V", gx, gy), ekey("V", gx + 1, gy), ekey("H", gx, gy), ekey("H", gx, gy + 1)]) {
        const w = S2.walls.get(k);
        if (!w) continue;
        const seg = wallSegOf(k, w);
        if (Math.min(dist(wx, wy, seg[0], seg[1]), dist(wx, wy, seg[2], seg[3]), dist(wx, wy, (seg[0] + seg[2]) / 2, (seg[1] + seg[3]) / 2)) < 18) {
          if (tryUp(w)) return;
        }
      }
      if (tryUp(S2.structures.get(gkey(gx, gy)))) return;
    } else {
      const d = S2.deploys.get(gkey(gx, gy));
      if (d && d.type === "turret" && d.owner === OWNER) {
        const next = (d.tier || 1) + 1;
        const cost = TURRET_UP[next];
        if (cost && S2.inv.scrap >= cost) {
          S2.inv.scrap -= cost;
          d.tier = next;
          d.mag = 30;
          d.reload = 0;
          addFloat(S2, wx, wy, "turret T" + next, "#9ab0d0");
        }
      }
    }
  }
  function throwGrenade(S2) {
    const p = S2.player;
    if (S2.inv.grenade <= 0) {
      tip(S2, "No grenades \u2014 buy at the trade shop");
      return;
    }
    if (inSafeZone(S2, p.x, p.y)) {
      tip(S2, "No weapons in the safe zone");
      return;
    }
    S2.inv.grenade--;
    const d = Math.min(560, dist(p.x, p.y, S2.cmd.mx, S2.cmd.my));
    const speed = Math.max(120, d * 6) * 0.2;
    const a = p.angle;
    S2.grenades.push({ x: p.x + Math.cos(a) * 22, y: p.y + Math.sin(a) * 22, vx: Math.cos(a) * speed, vy: Math.sin(a) * speed, t: GRENADE.fuse, from: OWNER, bob: 0 });
  }
  function dropPlayerFence(S2) {
    const p = S2.player;
    if (S2.inv.fence <= 0) {
      tip(S2, "No fences \u2014 buy more (10 wood)");
      return;
    }
    const fx = p.x + Math.cos(p.angle) * 34, fy = p.y + Math.sin(p.angle) * 34;
    if (S2.structures.has(gkey(Math.floor(fx / TILE), Math.floor(fy / TILE)))) {
      tip(S2, "Not on a base");
      return;
    }
    S2.inv.fence--;
    const pa = p.angle + Math.PI / 2;
    S2.fences.push({
      x: fx,
      y: fy,
      a: pa,
      owner: OWNER,
      hp: FENCE.hp,
      max: FENCE.hp,
      t: FENCE.life,
      x0: fx - Math.cos(pa) * FENCE.half,
      y0: fy - Math.sin(pa) * FENCE.half,
      x1: fx + Math.cos(pa) * FENCE.half,
      y1: fy + Math.sin(pa) * FENCE.half
    });
    S2.needFenceRefresh = true;
  }
  function respawnPlayer(S2) {
    const p = S2.player;
    p.dead = false;
    p.health = p.maxhp;
    p.invuln = 1.8;
    p.poison = 0;
    let tc = null;
    for (const [k, d] of S2.deploys) {
      if (d.type === "cupboard" && d.owner === OWNER) {
        const [gx, gy] = k.split(",").map(Number);
        const c = cellCenter(gx, gy);
        tc = { x: c.x, y: c.y + TILE };
        break;
      }
    }
    if (tc) {
      p.x = tc.x;
      p.y = tc.y;
    } else {
      for (let t = 0; t < 60; t++) {
        const x = S2.rng.rand(600, WORLD.w - 600), y = S2.rng.rand(600, WORLD.h - 600);
        if (!S2.world.onLand(x, y) || S2.world.lakeAt(x, y) || inSafeZone(S2, x, y) || blocked(S2, x, y, PLAYER_R)) continue;
        p.x = x;
        p.y = y;
        break;
      }
    }
    if (S2.copter && S2.copter.destroyed) {
      S2.copter.destroyed = false;
      S2.copter.hp = S2.copter.max;
      S2.copter.x = p.x + 120;
      S2.copter.y = p.y;
    }
    for (const a of S2.animals) {
      a.aggro = null;
      a.foe = null;
      if (!a.dead && dist2(a.x, a.y, p.x, p.y) < 200 * 200) {
        a.dead = true;
        a.respawnT = 0.6;
      }
    }
  }
  function doTrade(S2, i) {
    const [kind, amt, scrap] = SHOP.trades[i];
    if (S2.inv[kind] < amt) {
      tip(S2, "not enough " + kind);
      return;
    }
    S2.inv[kind] -= amt;
    S2.inv.scrap += scrap;
  }
  function doBuy(S2, k) {
    const def = SHOP.buys[k];
    if (!def || S2.inv.scrap < def.cost) {
      tip(S2, "not enough scrap");
      return;
    }
    S2.inv.scrap -= def.cost;
    const w = S2.weapons[k];
    if (!S2.owned[k]) {
      S2.owned[k] = true;
      if (w.ammo < WEAPONS[k].magSize) w.ammo = WEAPONS[k].magSize;
      addFloat(S2, S2.player.x, S2.player.y - 20, WEAPONS[k].name + " unlocked!", "#bfe3ff");
    } else w.reserve += def.ammo;
  }
  function buyMisc(S2, what) {
    const p = S2.player;
    const pay = (c) => {
      if (S2.inv.scrap < c) {
        tip(S2, "not enough scrap");
        return false;
      }
      S2.inv.scrap -= c;
      return true;
    };
    switch (what) {
      case "jackhammer":
        if (!S2.jackhammer && pay(SHOP.jackhammer)) {
          S2.jackhammer = true;
          tip(S2, "Jackhammer! 3\xD7 gather");
        }
        break;
      case "laser":
        if (!S2.owned.rifle) {
          tip(S2, "buy the rifle first");
          break;
        }
        if (!p.rifleLaser && pay(SHOP.laser)) p.rifleLaser = true;
        break;
      case "fence":
        if (S2.inv.wood >= SHOP.fenceWood) {
          S2.inv.wood -= SHOP.fenceWood;
          S2.inv.fence++;
        } else tip(S2, "not enough wood");
        break;
      case "grenade":
        if (pay(SHOP.grenade)) S2.inv.grenade++;
        break;
      case "signal":
        if (pay(SHOP.signal)) S2.inv.signal = (S2.inv.signal | 0) + 1;
        break;
      case "hqm":
        if (pay(SHOP.hqm.cost)) S2.inv.hqm += SHOP.hqm.amt;
        break;
      case "facemask": {
        const next = p.facemask + 1;
        if (next <= 3 && pay(ARMOR.cost[next])) p.facemask = next;
        break;
      }
      case "bodyArmor": {
        const next = p.bodyArmor + 1;
        if (next <= 3 && pay(ARMOR.cost[next])) p.bodyArmor = next;
        break;
      }
      case "worker":
        if (pay(SHOP.worker)) {
          spawnPlayerWorker(S2);
          tip(S2, "worker hired \u2014 they gather and fight for you");
        }
        break;
    }
  }
  function storeMove(S2, kind, amt) {
    const d = S2.deploys.get(S2.storeOpen);
    if (!d || !d.store) return;
    if (amt > 0) {
      const take = amt >= 9e3 ? S2.inv[kind] : Math.max(1, Math.floor(S2.inv[kind] * amt));
      const real = Math.min(take, S2.inv[kind]);
      S2.inv[kind] -= real;
      d.store[kind] += real;
    } else {
      const a = -amt;
      const take = a >= 9e3 ? d.store[kind] : Math.max(1, Math.floor(d.store[kind] * a));
      const real = Math.min(take, d.store[kind]);
      d.store[kind] -= real;
      S2.inv[kind] += real;
    }
  }
  function tip(S2, text) {
    S2.tip = { text, t: 1.4 };
  }

  // src/sim/animals.js
  function updateAnimals(S2, dt) {
    const p = S2.player;
    for (const a of S2.animals) {
      if (a.dead) {
        a.respawnT -= dt;
        if (a.respawnT <= 0) respawnAnimal(S2, a);
        continue;
      }
      const def = ANIMALS[a.type];
      a.atkcd = Math.max(0, a.atkcd - dt);
      a.hit = Math.max(0, a.hit - dt);
      if (a.pauseT > 0) {
        a.pauseT -= dt;
        a.vx = a.vy = 0;
        continue;
      }
      if (a.phase === void 0) a.phase = S2.rng.next() * 12 | 0;
      let tgt, tgtKind, tdist = 1e9;
      if ((S2.tick + a.phase) % 12 === 0 || a.tgtCache === void 0) {
        tgt = null;
        tgtKind = null;
        const playerHidden = p.dead || p.inCopter || S2.ghost || inSafeZone(S2, p.x, p.y);
        let botT = null, botD = 1e9;
        for (const u of S2.units) {
          if (u.dead || u.flying || u.eliminated) continue;
          const d = dist(a.x, a.y, u.x, u.y);
          if (d < def.detect && d < botD && !wallBlocksView(S2, a.x, a.y, u.x, u.y)) {
            botD = d;
            botT = u;
          }
        }
        if (!playerHidden) {
          const d = dist(a.x, a.y, p.x, p.y);
          if (d < def.detect && d <= botD && !wallBlocksView(S2, a.x, a.y, p.x, p.y)) {
            tgt = p;
            tgtKind = "player";
          }
        }
        if (!tgt && botT) {
          tgt = botT;
          tgtKind = "bot";
        }
        if (!tgt) {
          let tk = null, td = def.detect * def.detect;
          for (const [k, d2] of S2.deploys) {
            if (d2.type !== "turret") continue;
            const [gx, gy] = k.split(",").map(Number);
            const c = cellCenter(gx, gy);
            const dd = dist2(a.x, a.y, c.x, c.y);
            if (dd < td && !wallBlocksView(S2, a.x, a.y, c.x, c.y)) {
              td = dd;
              tk = { key: k, x: c.x, y: c.y };
            }
          }
          if (tk) {
            tgt = tk;
            tgtKind = "turret";
          }
        }
        if (!tgt && a.hostile) {
          let o = null, od = def.detect * def.detect;
          for (const b of S2.animals) {
            if (b === a || b.dead) continue;
            const dd = dist2(a.x, a.y, b.x, b.y);
            if (dd < od) {
              od = dd;
              o = b;
            }
          }
          if (o) {
            tgt = o;
            tgtKind = "animal";
          }
        }
        if (!tgt && a.foe) {
          const f = a.foe;
          if (typeof f === "object" && !f.dead && dist(a.x, a.y, f.x, f.y) < def.detect * 1.4) {
            tgt = f;
            tgtKind = f === p ? "player" : f.owner !== void 0 ? "bot" : "animal";
          }
        }
        a.tgtCache = tgt ? { tgt, kind: tgtKind } : null;
      } else if (a.tgtCache) {
        const c = a.tgtCache;
        const dead2 = c.tgt.dead || c.kind === "player" && (p.dead || S2.ghost) || c.kind === "turret" && !S2.deploys.has(c.tgt.key);
        if (dead2) a.tgtCache = null;
      }
      tgt = a.tgtCache ? a.tgtCache.tgt : null;
      tgtKind = a.tgtCache ? a.tgtCache.kind : null;
      if (tgt) tdist = dist(a.x, a.y, tgt.x, tgt.y);
      if (tgt && tgtKind !== "turret" && tdist > def.lose) {
        tgt = null;
        a.aggro = null;
      }
      let sp = def.walk, mx = 0, my = 0;
      if (tgt) {
        a.aggro = tgtKind;
        sp = def.chase;
        const d = Math.max(1, tdist);
        mx = (tgt.x - a.x) / d;
        my = (tgt.y - a.y) / d;
        const reach = tgtKind === "turret" ? a.r + 35.2 : tgtKind === "player" ? a.r + 16 + 2 : a.r + 16;
        if (a.atkcd <= 0 && tdist < reach) {
          if (tgtKind === "player") {
            hurtPlayer(S2, def.dmg, a.x, a.y, "animal");
            if (def.poison) p.poison = Math.max(p.poison, 10);
          } else if (tgtKind === "bot") hurtBot(S2, tgt, def.dmg, a.x, a.y, "animal");
          else if (tgtKind === "turret") damageDeploy(S2, tgt.key, def.dmg, "animal");
          else if (tgtKind === "animal") {
            tgt.hp -= def.dmg;
            tgt.foe = a;
            tgt.hit = 0.12;
            if (tgt.hp <= 0) {
              tgt.dead = true;
              tgt.respawnT = S2.rng.rand(11, 18);
            }
          }
          a.atkcd = def.atk;
          a.pauseT = ANIM_PAUSE;
          continue;
        }
      } else {
        a.aggro = null;
        a.wanderT -= dt;
        if (a.avoidT > 0) {
          a.avoidT -= dt;
          a.dir = a.avoidA;
        } else if (a.wanderT <= 0) {
          a.wanderT = S2.rng.rand(1.2, 3.2);
          if (a.lake && dist(a.x, a.y, a.lake.x, a.lake.y) > a.lake.r * 0.9) a.dir = Math.atan2(a.lake.y - a.y, a.lake.x - a.x);
          else if (a.lake && S2.rng.chance(0.55)) {
            a.vx = a.vy = 0;
            continue;
          } else if (S2.rng.chance(0.3)) {
            a.vx = a.vy = 0;
            continue;
          } else a.dir = S2.rng.rand(0, TAU);
        }
        for (const [k, d2] of S2.deploys) {
          if (d2.type !== "cupboard") continue;
          const [gx, gy] = k.split(",").map(Number);
          const c = cellCenter(gx, gy);
          if (dist2(a.x, a.y, c.x, c.y) < 340 * 340) {
            a.avoidA = Math.atan2(a.y - c.y, a.x - c.x);
            a.avoidT = 1.2;
            a.dir = a.avoidA;
            break;
          }
        }
        mx = Math.cos(a.dir);
        my = Math.sin(a.dir);
      }
      const nx = a.x + mx * sp * dt, ny = a.y + my * sp * dt;
      const before = { x: a.x, y: a.y };
      const opts = a.lake ? { allowLake: true } : {};
      const ok = moveAnimal(S2, a, nx, ny);
      a.vx = (a.x - before.x) / dt;
      a.vy = (a.y - before.y) / dt;
      if (tgt) {
        const moved = dist(a.x, a.y, before.x, before.y);
        if (moved < sp * dt * 0.25) {
          a.stuckT += dt;
          if (a.stuckT > 3) {
            respawnAnimal(S2, a);
            continue;
          }
          if (a.stuckT > 1.5) {
            a.aggro = null;
            a.foe = null;
            a.stuckT = 0;
            a.dir = S2.rng.rand(0, TAU);
          }
        } else a.stuckT = Math.max(0, a.stuckT - dt * 2);
      } else if (!ok && S2.rng.chance(0.5)) a.dir = S2.rng.rand(0, TAU);
    }
  }
  function moveAnimal(S2, a, nx, ny) {
    if (inSafeZone(S2, nx, ny)) return false;
    let moved = false;
    if (blocked(S2, a.x, a.y, a.r * 0.7)) {
      a.x = nx;
      a.y = ny;
      moved = true;
    } else {
      if (!blocked(S2, nx, a.y, a.r * 0.7) && (a.lake || !S2.world.lakeAt(nx, a.y))) {
        a.x = nx;
        moved = true;
      }
      if (!blocked(S2, a.x, ny, a.r * 0.7) && (a.lake || !S2.world.lakeAt(a.x, ny))) {
        a.y = ny;
        moved = true;
      }
    }
    a.x = clamp(a.x, 20, WORLD.w - 20);
    a.y = clamp(a.y, 20, WORLD.h - 20);
    return moved;
  }
  function respawnAnimal(S2, a) {
    const def = ANIMALS[a.type];
    const W = WORLD.w;
    const band = def.biome === "desert" ? [0, W / 3] : def.biome === "jungle" ? [W / 3, 2 * W / 3] : def.biome === "winter" ? [2 * W / 3, W] : [0, W];
    for (let t = 0; t < 30; t++) {
      let x, y;
      if (a.lake) {
        const ang = S2.rng.rand(0, TAU);
        x = a.lake.x + Math.cos(ang) * (a.lake.r + S2.rng.rand(30, 200));
        y = a.lake.y + Math.sin(ang) * (a.lake.r + S2.rng.rand(30, 200));
      } else {
        x = S2.rng.rand(Math.max(90, band[0] - 90), Math.min(W - 90, band[1] + 90));
        y = S2.rng.rand(90, WORLD.h - 90);
      }
      if (dist(x, y, S2.player.x, S2.player.y) < 520) continue;
      if (S2.world.landFactor(x, y) < 0.05) continue;
      if (S2.world.lakeAt(x, y) && !a.lake) continue;
      if (blocked(S2, x, y, a.r)) continue;
      a.x = x;
      a.y = y;
      break;
    }
    a.dead = false;
    a.hp = a.max;
    a.aggro = null;
    a.foe = null;
    a.pauseT = 0;
    a.stuckT = 0;
    a.dir = S2.rng.rand(0, TAU);
    a.respawnT = 0;
    a.looted = false;
  }
  function updateGuards(S2, dt) {
    const p = S2.player;
    for (const g of S2.guards) {
      if (g.dead) {
        g.respawnT -= dt;
        if (g.respawnT <= 0) {
          const a = S2.rng.rand(0, TAU), d = S2.rng.rand(0.35 * g.mr, 0.8 * g.mr);
          g.x = g.mx + Math.cos(a) * d;
          g.y = g.my + Math.sin(a) * d;
          g.hp = g.max;
          g.dead = false;
        }
        continue;
      }
      g.gunCd = Math.max(0, g.gunCd - dt);
      let tgt = null, td = GUARD.detect;
      if (!p.dead && !p.inCopter && !S2.ghost && !inSafeZone(S2, p.x, p.y)) {
        const d = dist(g.x, g.y, p.x, p.y);
        if (d < td && !wallBlocksView(S2, g.x, g.y, p.x, p.y)) {
          tgt = p;
          td = d;
        }
      }
      for (const u of S2.units) {
        if (u.dead || u.flying || u.eliminated) continue;
        const d = dist(g.x, g.y, u.x, u.y);
        if (d < td && !wallBlocksView(S2, g.x, g.y, u.x, u.y)) {
          tgt = u;
          td = d;
        }
      }
      const homeD = dist(g.x, g.y, g.mx, g.my);
      if (homeD > g.mr + GUARD.leash) tgt = null;
      if (tgt) {
        const aim = Math.atan2(tgt.y - g.y, tgt.x - g.x);
        g.angle = turnToward(g.angle, aim, Math.min(1, dt * 9) * Math.PI);
        if (td < GUARD.range && g.gunCd <= 0 && Math.abs(angShort2(g.angle, aim)) < 0.3) {
          g.gunCd = GUARD.rof;
          const a2 = g.angle + S2.rng.rand(-GUARD.spread, GUARD.spread);
          spawnBullet(S2, { x: g.x + Math.cos(g.angle) * 16, y: g.y + Math.sin(g.angle) * 16, angle: a2, speed: GUARD.bspeed, dmg: GUARD.dmg, from: "guard", life: GUARD.range / GUARD.bspeed + 0.1 });
          burst(S2, g.x + Math.cos(g.angle) * 16, g.y + Math.sin(g.angle) * 16, "#ffd76b", 2, 90);
        }
        let mvx = 0, mvy = 0;
        if (td > 300) {
          mvx = Math.cos(aim);
          mvy = Math.sin(aim);
        } else if (td < 150) {
          mvx = -Math.cos(aim);
          mvy = -Math.sin(aim);
        } else {
          mvx = -Math.sin(aim) * (g.seed > 4.5 ? 1 : -1);
          mvy = Math.cos(aim) * (g.seed > 4.5 ? 1 : -1);
        }
        const nx = g.x + mvx * GUARD.speed * dt, ny = g.y + mvy * GUARD.speed * dt;
        if (!blocked(S2, nx, ny, GUARD.r)) {
          g.x = nx;
          g.y = ny;
        }
        g.hasWp = false;
      } else {
        const ROAM = Math.min(620 - 40, g.mr * 2.6);
        if (homeD > ROAM + 90) {
          const aim = Math.atan2(g.my - g.y, g.mx - g.x);
          g.angle = turnToward(g.angle, aim, dt * 4);
          const nx = g.x + Math.cos(g.angle) * GUARD.speed * dt, ny = g.y + Math.sin(g.angle) * GUARD.speed * dt;
          if (!blocked(S2, nx, ny, GUARD.r)) {
            g.x = nx;
            g.y = ny;
          }
          g.hasWp = false;
        } else {
          g.wpT -= dt;
          if (!g.hasWp || g.wpT <= 0 || dist(g.x, g.y, g.wpX, g.wpY) < 26) {
            const a = S2.rng.rand(0, TAU), d = S2.rng.rand(0.25 * g.mr, ROAM);
            g.wpX = g.mx + Math.cos(a) * d;
            g.wpY = g.my + Math.sin(a) * d;
            g.wpT = S2.rng.rand(2.4, 6);
            g.hasWp = true;
          }
          const aim = Math.atan2(g.wpY - g.y, g.wpX - g.x);
          g.angle = turnToward(g.angle, aim, dt * 3.5);
          const sp = GUARD.speed * 0.55;
          const nx = g.x + Math.cos(g.angle) * sp * dt, ny = g.y + Math.sin(g.angle) * sp * dt;
          if (!blocked(S2, nx, ny, GUARD.r)) {
            g.x = nx;
            g.y = ny;
          } else g.hasWp = false;
        }
      }
    }
  }
  var angShort2 = (a, b) => {
    let d = (b - a) % TAU;
    if (d > Math.PI) d -= TAU;
    if (d < -Math.PI) d += TAU;
    return d;
  };

  // src/sim/ai/build.js
  function botStores(S2, u) {
    const rec = homeRec(S2, u);
    const tc = rec && tcOf(S2, rec.tcKey);
    return tc ? [u.inv, tc.store] : [u.inv];
  }
  function homeRec(S2, u) {
    const team = S2.teams[u.id];
    if (!team || u.ally) return null;
    return team.bases.find((r) => r.tcKey === u.tcKey && !r.dead) || team.bases.find((r) => !r.dead) || null;
  }
  function teamBank(S2, team) {
    const rec = team.bases.find((r) => !r.dead);
    const tc = rec && tcOf(S2, rec.tcKey);
    return tc ? tc.store : null;
  }
  function siteClear(S2, x, y) {
    if (x < 1400 || y < 1400 || x > 13824 - 1400 || y > 9216 - 1400) return false;
    if (!S2.world.onLand(x, y) || S2.world.lakeAt(x, y)) return false;
    if (S2.world.railDist(x, y) < 360 || S2.world.pathDist(x, y) < 320) return false;
    if (S2.world.landFactor(x, y) < 0.12) return false;
    if (dist(x, y, S2.world.shop.x, S2.world.shop.y) < SAFE_R + 450) return false;
    for (const m of S2.world.monuments) if (dist(x, y, m.x, m.y) < SAFE_R + 200) return false;
    for (const L of S2.world.lakes) if (dist(x, y, L.x, L.y) < L.r + 560) return false;
    for (const b of S2.world.boulders) if (dist(x, y, b.x, b.y) < b.r + 300) return false;
    for (const [k, d] of S2.deploys) {
      if (d.type !== "cupboard") continue;
      const [gx, gy] = k.split(",").map(Number);
      const c = cellCenter(gx, gy);
      if (dist(x, y, c.x, c.y) < MIN_TC_DIST) return false;
    }
    return true;
  }
  function foundTeamBase(S2, team, primary) {
    const carried = primary.inv.wood + primary.inv.stone + primary.inv.metal;
    if (carried < 220) return false;
    let pay = 220;
    for (const k of ["wood", "stone", "metal"]) {
      const take = Math.min(pay, primary.inv[k]);
      primary.inv[k] -= take;
      pay -= take;
      if (pay <= 0) break;
    }
    const rec = foundBase(S2, team, primary.siteX, primary.siteY);
    for (const u of S2.units) {
      if (u.owner !== team.owner) continue;
      u.unfounded = false;
      u.hx = rec.hx;
      u.hy = rec.hy;
      u.tcKey = rec.tcKey;
      u.doorX = rec.doorX;
      u.doorY = rec.doorY;
      u.doorGy = rec.doorGy;
    }
    addFloat(S2, rec.hx, rec.hy, "base founded", "#9ad06a");
    return true;
  }
  function botBuild(S2, u) {
    const team = S2.teams[u.id];
    const rec = homeRec(S2, u);
    if (!team || !rec) return false;
    const stores = botStores(S2, u);
    const floors = countFloors(S2, team.owner, rec);
    const turrets = countTurrets(S2, team.owner, rec);
    const minFloors = u.hard ? 9 : 5;
    const maxTur = u.hard ? 10 : u.weak ? 5 : 8;
    const capFloors = u.hard ? 49 : 36;
    if (floors < minFloors && botAddFloor(S2, u, team, rec, stores)) return true;
    if (u.primary && floors >= 5 && botHireWorker(S2, u)) return true;
    if (turrets < maxTur && botAddTurret(S2, u, team, rec, stores)) return true;
    if (u.hard && botHarden(S2, u, team, rec, stores)) return true;
    if (!u.jack && wallet.pay(stores, { wood: 120, metal: 60 })) {
      u.jack = true;
      addFloat(S2, u.x, u.y, "+jackhammer", "#ffd76b");
      return true;
    }
    u.hf = !u.hf;
    if (u.hf ? botHardenFloor(S2, u, team, rec, stores) || botHarden(S2, u, team, rec, stores) : botHarden(S2, u, team, rec, stores) || botHardenFloor(S2, u, team, rec, stores)) return true;
    if (floors < capFloors && botAddFloor(S2, u, team, rec, stores)) return true;
    return false;
  }
  function countFloors(S2, owner, rec) {
    let n = 0;
    for (const [k, s] of S2.structures) {
      if (s.owner !== owner) continue;
      const [gx, gy] = k.split(",").map(Number);
      const c = cellCenter(gx, gy);
      if (dist2(c.x, c.y, rec.hx, rec.hy) < CLAIM_R * CLAIM_R) n++;
    }
    return n;
  }
  function countTurrets(S2, owner, rec) {
    let n = 0;
    for (const [k, d] of S2.deploys) {
      if (d.type !== "turret" || d.owner !== owner) continue;
      const [gx, gy] = k.split(",").map(Number);
      const c = cellCenter(gx, gy);
      if (dist2(c.x, c.y, rec.hx, rec.hy) < CLAIM_R * CLAIM_R) n++;
    }
    return n;
  }
  function cellFreeForFloor(S2, gx, gy, team, rec) {
    const k = gkey(gx, gy);
    if (S2.structures.has(k) || S2.deploys.has(k)) return false;
    const c = cellCenter(gx, gy);
    if (gy >= rec.doorGy) return false;
    if (inSafeZone(S2, c.x, c.y) || inMonZone(S2, c.x, c.y)) return false;
    if (!S2.world.onLand(c.x, c.y) || S2.world.lakeAt(c.x, c.y) || boulderAt(S2, c.x, c.y)) return false;
    for (const a of S2.animals) if (!a.dead && Math.abs(a.x - c.x) < TILE && Math.abs(a.y - c.y) < TILE) return false;
    const b = baseBounds(S2, team.owner, rec.hx, rec.hy);
    if (b) {
      const minx = Math.min(b.minx, gx), maxx = Math.max(b.maxx, gx);
      const miny = Math.min(b.miny, gy), maxy = Math.max(b.maxy, gy);
      if (maxx - minx + 1 > 10 || maxy - miny + 1 > 10) return false;
    }
    return true;
  }
  function wallWouldTrap(S2, owner, key) {
    const p = key.split(",");
    const gx = +p[1], gy = +p[2];
    const cells = p[0] === "V" ? [[gx - 1, gy], [gx, gy]] : [[gx, gy - 1], [gx, gy]];
    for (const [cx, cy] of cells) {
      if (!S2.structures.has(gkey(cx, cy))) continue;
      let openings = 0;
      for (const ek2 of [ekey("V", cx, cy), ekey("V", cx + 1, cy), ekey("H", cx, cy), ekey("H", cx, cy + 1)]) {
        if (ek2 === key) continue;
        const w = S2.walls.get(ek2);
        if (!w || w.hp <= 0 || w.type === "door") openings++;
      }
      if (openings === 0) return true;
    }
    return false;
  }
  function botAddFloor(S2, u, team, rec, stores) {
    if (!wallet.has(stores, { wood: 40 })) return false;
    const cands = [];
    for (const [k, s] of S2.structures) {
      if (s.owner !== team.owner) continue;
      const [gx2, gy2] = k.split(",").map(Number);
      const c = cellCenter(gx2, gy2);
      if (dist2(c.x, c.y, rec.hx, rec.hy) > CLAIM_R * CLAIM_R) continue;
      for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
        if (cellFreeForFloor(S2, gx2 + dx, gy2 + dy, team, rec)) cands.push([gx2 + dx, gy2 + dy]);
      }
    }
    if (!cands.length) return false;
    const [gx, gy] = cands[Math.floor(S2.rng.next() * cands.length)];
    if (!wallet.pay(stores, { wood: 40 })) return false;
    S2.structures.set(gkey(gx, gy), { type: "floor", mat: "wood", hp: 100, max: 100, owner: team.owner, hitT: -100 });
    const edges = [
      [ekey("V", gx, gy), gkey(gx - 1, gy)],
      [ekey("V", gx + 1, gy), gkey(gx + 1, gy)],
      [ekey("H", gx, gy), gkey(gx, gy - 1)],
      [ekey("H", gx, gy + 1), gkey(gx, gy + 1)]
    ];
    for (const [ek2, nk] of edges) {
      const nb = S2.structures.get(nk);
      if (nb && nb.owner === team.owner) continue;
      if (S2.walls.has(ek2)) continue;
      if (wallWouldTrap(S2, team.owner, ek2)) continue;
      S2.walls.set(ek2, { type: "wall", mat: "wood", hp: 100, max: 100, owner: team.owner, hitT: -100, open: false });
    }
    ensureSideDoors(S2, team, rec);
    S2.nav.stamp++;
    addFloat(S2, gx * TILE + TILE / 2, gy * TILE + TILE / 2, "+room", "#bcd0e0");
    return true;
  }
  function botAddTurret(S2, u, team, rec, stores) {
    if (!wallet.has(stores, { wood: 40, metal: 30 })) return false;
    const b = baseBounds(S2, team.owner, rec.hx, rec.hy);
    if (!b) return false;
    const doorGx = Math.floor(rec.doorX / TILE);
    const cands = [];
    for (let gy = b.miny - 1; gy <= b.maxy + 1; gy++) for (let gx = b.minx - 1; gx <= b.maxx + 1; gx++) {
      const k = gkey(gx, gy);
      if (S2.structures.has(k) || S2.deploys.has(k)) continue;
      if (gy >= rec.doorGy && Math.abs(gx - doorGx) <= 1) continue;
      const c = cellCenter(gx, gy);
      if (inSafeZone(S2, c.x, c.y) || inMonZone(S2, c.x, c.y)) continue;
      if (!S2.world.onLand(c.x, c.y) || S2.world.lakeAt(c.x, c.y) || boulderAt(S2, c.x, c.y)) continue;
      let adj = false, nextToTurret = false;
      for (let dy = -1; dy <= 1 && !adj; dy++) for (let dx = -1; dx <= 1; dx++) {
        const nb = S2.structures.get(gkey(gx + dx, gy + dy));
        if (nb && nb.owner === team.owner) {
          adj = true;
          break;
        }
      }
      for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
        const nd = S2.deploys.get(gkey(gx + dx, gy + dy));
        if (nd && nd.type === "turret") {
          nextToTurret = true;
          break;
        }
      }
      if (adj && !nextToTurret) cands.push({ gx, gy, c });
    }
    if (!cands.length) return false;
    cands.sort((a, c2) => dist2(c2.c.x, c2.c.y, rec.doorX, rec.doorY) - dist2(a.c.x, a.c.y, rec.doorX, rec.doorY));
    const pick = cands[0];
    if (!wallet.pay(stores, { wood: 40, metal: 30 })) return false;
    S2.deploys.set(gkey(pick.gx, pick.gy), {
      type: "turret",
      mat: "wood",
      hp: 150,
      max: 150,
      owner: team.owner,
      hitT: -100,
      tier: u.hard ? 3 : u.weak ? 1 : 2,
      angle: 0,
      cd: 0,
      mag: 12,
      reload: 0,
      ext: true,
      scanT: S2.rng.rand(0.5, 4.5)
    });
    S2.nav.stamp++;
    addFloat(S2, pick.c.x, pick.c.y, "+turret", "#bcd0e0");
    return true;
  }
  var WALL_UP = { wood: { mat: "stone", cost: { stone: 15 } }, stone: { mat: "metal", cost: { metal: 20 } }, metal: { mat: "armored", hqm: 8 } };
  var FLOOR_UP = { wood: { mat: "stone", cost: { stone: 12 } }, stone: { mat: "metal", cost: { metal: 16 } }, metal: { mat: "armored", hqm: 6 } };
  function botHarden(S2, u, team, rec, stores) {
    for (const [k, w] of S2.walls) {
      if (w.owner !== team.owner || w.hp <= 0) continue;
      const up = WALL_UP[w.mat];
      if (!up) continue;
      if (up.hqm) {
        if (u.hqm < up.hqm) continue;
        u.hqm -= up.hqm;
      } else if (!wallet.pay(stores, up.cost)) continue;
      w.mat = up.mat;
      w.max = tierHp(BUILD[w.type], w.mat);
      w.hp = w.max;
      addFloat(S2, u.x, u.y, "+" + up.mat, up.mat === "armored" ? "#7f93ad" : up.mat === "metal" ? "#aeb6bf" : "#c2c8cf");
      return true;
    }
    return false;
  }
  function botHardenFloor(S2, u, team, rec, stores) {
    for (const [k, s] of S2.structures) {
      if (s.owner !== team.owner) continue;
      const up = FLOOR_UP[s.mat];
      if (!up) continue;
      if (up.hqm) {
        if (u.hqm < up.hqm) continue;
        u.hqm -= up.hqm;
      } else if (!wallet.pay(stores, up.cost)) continue;
      s.mat = up.mat;
      s.max = tierHp(BUILD[s.type], s.mat);
      s.hp = s.max;
      return true;
    }
    return false;
  }
  function botHireWorker(S2, u) {
    const team = S2.teams[u.id];
    if (!team || !u.primary) return false;
    const cap = u.hard ? AI.HIRE_CAP_HARD : AI.HIRE_CAP;
    const count = S2.units.filter((o) => o.owner === team.owner && !o.eliminated).length;
    if (count >= cap) return false;
    const rec = homeRec(S2, u);
    const tc = rec && tcOf(S2, rec.tcKey);
    let cost = AI.WORKER_COST;
    const fromPocket = Math.min(cost, u.scrap);
    if (fromPocket + (tc ? tc.store.scrap : 0) < cost) return false;
    u.scrap -= fromPocket;
    cost -= fromPocket;
    if (cost > 0) tc.store.scrap -= cost;
    const w = spawnUnit(S2, team, u.hx + S2.rng.rand(-46, 46), u.hy + S2.rng.rand(24, 64), false);
    w.hx = u.hx;
    w.hy = u.hy;
    w.tcKey = u.tcKey;
    w.doorX = u.doorX;
    w.doorY = u.doorY;
    w.doorGy = u.doorGy;
    w.unfounded = u.unfounded;
    addFloat(S2, w.x, w.y, "+worker hired", "#9ad06a");
    return true;
  }
  function expandTeamBases(S2, team, dt) {
    const primary = S2.units.find((u2) => u2.owner === team.owner && u2.primary && !u2.eliminated);
    if (!primary || primary.unfounded || team.eliminated) return;
    const live = team.bases.filter((r) => !r.dead);
    if (!live.length) return;
    const maxBases = team.hard ? 4 : 3;
    const bank = teamBank(S2, team);
    const bankSum = bank ? bank.wood + bank.stone + bank.metal : 0;
    const brain = team.brain;
    primary.fwdT -= dt;
    if (brain.aggressor && brain.raidTarget && live.length < maxBases && bankSum >= 170 && primary.fwdT <= 0) {
      primary.fwdT = 10;
      const tgtRec = raidTargetRec(S2, brain.raidTarget);
      if (tgtRec && !live.some((r) => dist(r.hx, r.hy, tgtRec.hx, tgtRec.hy) < 2400)) {
        const home = live[0];
        const ang = Math.atan2(home.hy - tgtRec.hy, home.hx - tgtRec.hx);
        for (const back of [1800, 2300, 1400, 2700]) {
          const x = tgtRec.hx + Math.cos(ang) * back, y = tgtRec.hy + Math.sin(ang) * back;
          if (siteClear(S2, x, y)) {
            payBank(bank, 200);
            const rec = foundBase(S2, team, x, y);
            rec.kind = "raid-forward";
            addFloat(S2, x, y, "+raid base", "#ffd0a0");
            return;
          }
        }
      }
    }
    primary.expT -= dt;
    if (primary.expT <= 0) {
      primary.expT = S2.rng.rand(50, 90);
      const need = brain.attack ? 160 : 260;
      if (live.length >= 1 && live.length < maxBases && bankSum >= need) {
        const site = pickSecondarySite(S2, team, live[0]);
        if (site) {
          payBank(bank, 240);
          const rec = foundBase(S2, team, site.x, site.y);
          rec.kind = site.kind;
          addFloat(S2, site.x, site.y, "+" + site.kind + " base", "#bcd0e0");
        }
      }
    }
  }
  function payBank(bank, amt) {
    if (!bank) return;
    for (const k of ["wood", "stone", "metal"]) {
      const take = Math.min(amt, bank[k]);
      bank[k] -= take;
      amt -= take;
      if (amt <= 0) return;
    }
  }
  function raidTargetRec(S2, target) {
    if (!target) return null;
    if (target === "player") {
      for (const [k, d] of S2.deploys) {
        if (d.type === "cupboard" && d.owner === OWNER) {
          const [gx, gy] = k.split(",").map(Number);
          const c = cellCenter(gx, gy);
          return { owner: OWNER, tcKey: k, hx: c.x, hy: c.y, isPlayer: true };
        }
      }
      return null;
    }
    return target.bases ? target.bases.find((r) => !r.dead) || null : null;
  }
  function pickSecondarySite(S2, team, home) {
    for (const m of S2.world.monuments) {
      let claimed = false;
      for (const t2 of S2.teams) {
        if (t2.bases.some((r) => !r.dead && dist(r.hx, r.hy, m.x, m.y) < SAFE_R + 900)) {
          claimed = true;
          break;
        }
      }
      if (claimed) continue;
      for (let s = 0; s < 8; s++) {
        const a = s / 8 * Math.PI * 2;
        const x = m.x + Math.cos(a) * (SAFE_R + TILE * 5), y = m.y + Math.sin(a) * (SAFE_R + TILE * 5);
        if (siteClear(S2, x, y)) return { x, y, kind: "monument" };
      }
    }
    const tgtRec = raidTargetRec(S2, team.brain.raidTarget) || farthestEnemyRec(S2, team, home);
    if (tgtRec) {
      const ang = Math.atan2(tgtRec.hy - home.hy, tgtRec.hx - home.hx);
      for (const d of [1700, 2200, 1300]) {
        const x = home.hx + Math.cos(ang) * d, y = home.hy + Math.sin(ang) * d;
        if (siteClear(S2, x, y)) return { x, y, kind: "raid-forward" };
      }
    }
    for (let t = 0; t < 10; t++) {
      const a = S2.rng.rand(0, Math.PI * 2), d = S2.rng.rand(MIN_TC_DIST + 200, MIN_TC_DIST + 1600);
      const x = home.hx + Math.cos(a) * d, y = home.hy + Math.sin(a) * d;
      if (siteClear(S2, x, y)) return { x, y, kind: "survival" };
    }
    return null;
  }
  function farthestEnemyRec(S2, team, home) {
    let best = null, bd = 3e3 * 3e3;
    for (const t2 of S2.teams) {
      if (t2 === team || t2.eliminated) continue;
      for (const r of t2.bases) {
        if (r.dead) continue;
        const dd = dist2(home.hx, home.hy, r.hx, r.hy);
        if (dd > bd) {
          bd = dd;
          best = r;
        }
      }
    }
    return best;
  }
  function botFreeWall(S2, u) {
    if (u.ally) return false;
    const gx = Math.floor(u.x / TILE), gy = Math.floor(u.y / TILE);
    let best = null, bs = -1;
    for (const [ek2, nk, south] of [
      [ekey("V", gx, gy), gkey(gx - 1, gy), false],
      [ekey("V", gx + 1, gy), gkey(gx + 1, gy), false],
      [ekey("H", gx, gy), gkey(gx, gy - 1), false],
      [ekey("H", gx, gy + 1), gkey(gx, gy + 1), true]
    ]) {
      const w2 = S2.walls.get(ek2);
      if (!w2 || w2.owner !== u.owner || w2.type === "door") continue;
      const score = (S2.structures.has(nk) ? 0 : 60) + (south ? 12 : 0) + S2.rng.rand(0, 2);
      if (score > bs) {
        bs = score;
        best = ek2;
      }
    }
    if (!best) return false;
    const w = S2.walls.get(best);
    w.type = "door";
    w.open = true;
    w.closeT = S2.t + 1.2;
    w.lock = { by: u.owner };
    w.hp = Math.max(w.hp, 50);
    w.max = Math.max(w.max, 50);
    S2.nav.stamp++;
    S2.metrics.doorCuts = (S2.metrics.doorCuts || 0) + 1;
    addFloat(S2, u.x, u.y, "cut a door", "#caa46a");
    return true;
  }

  // src/sim/ai/move.js
  function clearPath(u) {
    u.path = null;
    u.pathI = 0;
    u.repathN = 0;
  }
  function goto(S2, u, tx, ty, dt, opts = {}) {
    const arrive = opts.arrive || 16;
    const d = dist(u.x, u.y, tx, ty);
    if (d <= arrive) {
      clearPath(u);
      u.progBest = 1e9;
      return "arrived";
    }
    const goalMoved = dist(u.pathGX, u.pathGY, tx, ty) > 90;
    const stale = S2.t - u.pathT > 3;
    const canPlan = !u.path || S2.t - (u.lastPlanT || -1) > 0.5;
    if ((!u.path || goalMoved || stale || u.pathI >= u.path.length) && canPlan) {
      u.lastPlanT = S2.t;
      if (d < TILE * 3 && losMove(S2, u.owner, u.x, u.y, tx, ty)) {
        u.path = [{ x: tx, y: ty }];
        u.pathI = 0;
      } else {
        const p = findPath(S2, u.owner, u.x, u.y, tx, ty);
        S2.metrics.repaths++;
        if (!p) {
          S2.metrics.pathFails++;
          u.path = [{ x: tx, y: ty }];
          u.pathI = 0;
          u.directFallback = true;
        } else {
          u.path = p;
          u.pathI = 0;
          u.directFallback = false;
        }
      }
      u.pathGX = tx;
      u.pathGY = ty;
      u.pathT = S2.t;
    }
    let wp = u.path[Math.min(u.pathI, u.path.length - 1)];
    const wpR = wp.door ? 12 : 15;
    if (dist(u.x, u.y, wp.x, wp.y) < wpR && u.pathI < u.path.length - 1) {
      u.pathI++;
      wp = u.path[u.pathI];
    }
    if (!wp.door && u.pathI + 1 < u.path.length && !u.path[u.pathI + 1].door) {
      if (S2.tick % 7 === u.tickPhase % 7 && losMove(S2, u.owner, u.x, u.y, u.path[u.pathI + 1].x, u.path[u.pathI + 1].y)) {
        u.pathI++;
        wp = u.path[u.pathI];
      }
    }
    let speed = opts.speed || AI.BOT_SPEED;
    const lake = S2.world.lakeAt(u.x, u.y);
    if (lake && !lake.frozen) speed *= 0.5;
    const wd = Math.max(1, dist(u.x, u.y, wp.x, wp.y));
    const mvx = (wp.x - u.x) / wd, mvy = (wp.y - u.y) / wd;
    const step2 = Math.min(speed * dt, wd);
    const nx = u.x + mvx * step2, ny = u.y + mvy * step2;
    const before = u.x, beforeY = u.y;
    const mOpts = { passOwner: u.owner, openOwnDoors: true };
    let moved = false;
    if (blocked(S2, u.x, u.y, 13, mOpts)) {
      u.x = nx;
      u.y = ny;
      moved = true;
    } else if (!blocked(S2, nx, ny, 13, mOpts)) {
      u.x = nx;
      u.y = ny;
      moved = true;
    } else {
      if (!blocked(S2, nx, u.y, 13, mOpts)) {
        u.x = nx;
        moved = true;
      }
      if (!blocked(S2, u.x, ny, 13, mOpts)) {
        u.y = ny;
        moved = true;
      }
    }
    u.x = clamp(u.x, 12, WORLD.w - 12);
    u.y = clamp(u.y, 12, WORLD.h - 12);
    u.vx = (u.x - before) / dt;
    u.vy = (u.y - beforeY) / dt;
    if (moved) {
      const want = Math.atan2(mvy, mvx);
      u.angle = u.angle + angShort3(u.angle, want) * Math.min(1, dt * 7);
    }
    u.progT += dt;
    if (u.progT >= 0.5) {
      u.progT = 0;
      const cur = dist(u.x, u.y, tx, ty);
      if (cur < u.progBest - 12) {
        u.progBest = cur;
        u.noProgT = 0;
        u.repathN = 0;
      } else {
        u.noProgT = (u.noProgT || 0) + 0.5;
        if (u.noProgT >= 1.5) {
          u.noProgT = 0;
          u.repathN++;
          addPenalty(S2, u.x, u.y, 12);
          addPenalty(S2, u.x + (tx > u.x ? 64 : -64), u.y, 10);
          addPenalty(S2, u.x, u.y + (ty > u.y ? 64 : -64), 10);
          S2.metrics.stuckTotal += 1.5;
          u.path = null;
          u.lastPlanT = -1;
          if (u.repathN === 2) {
            const a = Math.atan2(ty - u.y, tx - u.x) + (u.id % 2 ? 1 : -1) * Math.PI / 2;
            u.detourX = u.x + Math.cos(a) * 220;
            u.detourY = u.y + Math.sin(a) * 220;
            u.detourT = S2.t + 2.5;
          }
          if (u.repathN >= 3) {
            u.repathN = 0;
            u.progBest = 1e9;
            clearPath(u);
            S2.metrics.stuckLog.push({ t: S2.t, owner: u.owner, x: u.x | 0, y: u.y | 0 });
            return "stuck";
          }
        }
      }
    }
    if (u.detourT && S2.t < u.detourT) {
      const dd = dist(u.x, u.y, u.detourX, u.detourY);
      if (dd > 20) {
        const da = Math.atan2(u.detourY - u.y, u.detourX - u.x);
        const dnx = u.x + Math.cos(da) * speed * dt, dny = u.y + Math.sin(da) * speed * dt;
        if (!blocked(S2, dnx, dny, 13, mOpts)) {
          u.x = dnx;
          u.y = dny;
        }
      } else u.detourT = 0;
    }
    if (!moved && u.path && u.pathI < u.path.length - 1) {
      u.wpStallT = (u.wpStallT || 0) + dt;
      if (u.wpStallT > 0.6) {
        u.wpStallT = 0;
        u.pathI++;
      }
    } else if (moved) u.wpStallT = 0;
    u.gotoTick = S2.tick;
    if (!moved) {
      u.stuckT += dt;
      if (u.state !== "raid") S2.metrics.maxStuck = Math.max(S2.metrics.maxStuck, u.stuckT);
    } else u.stuckT = Math.max(0, u.stuckT - dt * 2);
    return "moving";
  }
  function separate(S2, u, dt) {
    for (const o of S2.units) {
      if (o === u || o.dead || o.eliminated || o.flying || o.owner !== u.owner) continue;
      const dd = dist2(u.x, u.y, o.x, o.y);
      if (dd > 0.01 && dd < 18 * 18) {
        const d = Math.sqrt(dd);
        const push = (18 - d) * 0.5 * dt * 6;
        const px = (u.x - o.x) / d * push, py = (u.y - o.y) / d * push;
        if (!blocked(S2, u.x + px, u.y + py, 13, { passOwner: u.owner })) {
          u.x += px;
          u.y += py;
        }
      }
    }
  }
  function faceToward(u, tx, ty, dt, rate = 8) {
    const want = Math.atan2(ty - u.y, tx - u.x);
    u.angle = u.angle + angShort3(u.angle, want) * Math.min(1, dt * rate);
  }
  var angShort3 = (a, b) => {
    let d = (b - a) % TAU;
    if (d > Math.PI) d -= TAU;
    if (d < -Math.PI) d += TAU;
    return d;
  };

  // src/sim/ai/unit.js
  var BS = AI.BOT_SPEED;
  function updateUnit(S2, u, dt) {
    if (u.eliminated) return;
    const team = u.ally ? null : S2.teams[u.id];
    if (!u.ally && !u.unfounded) {
      const rec = homeRec(S2, u);
      if (!rec) {
        eliminate(S2, u, team);
        return;
      }
      if (rec.tcKey !== u.tcKey) rehome(S2, u, rec);
      const tc = tcOf(S2, rec.tcKey);
      if (tc) tc.store.wood = Math.max(tc.store.wood, 40);
    }
    if (u.dead) {
      u.respawnT -= dt;
      if (u.respawnT <= 0) respawn(S2, u, team);
      return;
    }
    u.gunCd = Math.max(0, u.gunCd - dt);
    u.rkCd = Math.max(0, u.rkCd - dt);
    u.gnCd = Math.max(0, u.gnCd - dt);
    u.fenceCd = Math.max(0, u.fenceCd - dt);
    u.think -= dt;
    u.expandT -= dt;
    u.retaliateT = Math.max(0, u.retaliateT - dt);
    u.disengageT = Math.max(0, u.disengageT - dt);
    u.regenT = Math.max(0, u.regenT - dt);
    if (u.regenT <= 0 && u.hp < u.max) u.hp = Math.min(u.max, u.hp + 9 * dt);
    if (u.primary && !u.unfounded && !u.ally) {
      u.hireT -= dt;
      if (u.hireT <= 0) {
        u.hireT = 2;
        const rec = homeRec(S2, u);
        const tc = rec && tcOf(S2, rec.tcKey);
        if (u.scrap + (tc ? tc.store.scrap : 0) >= AI.WORKER_COST + 24) botHireWorker(S2, u);
      }
    }
    if (u.aboard) {
      if (u.aboard.destroyed || !u.aboard.riders.includes(u)) {
        u.aboard = null;
        u.flying = false;
      } else {
        u.flying = true;
        return;
      }
    }
    if (u.flying && (!u.copter || u.copter.destroyed)) u.flying = false;
    if (u.flying && u.state !== "trade") {
      landCopter(u);
    }
    if (u.unfounded) {
      updateFounding(S2, u, team, dt);
      afterMove(S2, u, dt);
      return;
    }
    u.endgame = S2.aliveBases <= AI.ENDGAME_BASES || S2.t > AI.ENDGAME_T;
    const brain = team ? team.brain : allyBrain;
    const underFire = u.retaliateT > 0 && dist2(u.x, u.y, u.threatX, u.threatY) < AI.REACT_R * AI.REACT_R && !inSafeZone(S2, u.x, u.y);
    if ((S2.tick + u.tickPhase) % 9 === 0 || u.thCache === void 0) {
      u.thCache = botThreat(S2, u) || botNearThreat(S2, u);
    } else if (u.thCache && u.thCache.ref && !u.thCache.ref.dead) {
      u.thCache.x = u.thCache.ref.x;
      u.thCache.y = u.thCache.ref.y;
    } else if (u.thCache && u.thCache.ref && u.thCache.ref.dead) u.thCache = null;
    let th = underFire ? { x: u.threatX, y: u.threatY, vx: 0, vy: 0 } : u.thCache;
    const homeD = dist(u.x, u.y, u.hx, u.hy);
    if (dist2(u.x, u.y, S2.world.shop.x, S2.world.shop.y) < (SAFE_R + 140) * (SAFE_R + 140)) th = null;
    if (u.ally) u.raidUrge -= dt;
    const raidAlive = u.raid && raidTargetRec(S2, u.raid);
    const rocketerPress = u.rocketer && (u.state === "raid" || u.wasRaid) && raidAlive && u.rockets > 0 && u.hp >= u.max * 0.2 && !brain.urgent;
    const thD = th ? dist(u.x, u.y, th.x, th.y) : 1e9;
    const wantDefend = th && !rocketerPress && (u.defDuty || underFire && !u.wasRaid || brain.urgent || u.ally) && !((u.wasRaid || u.endgame) && thD >= 230) && !(brain.aggressor && thD >= 160);
    if (wantDefend) {
      u.state = "defend";
      u.defHold = u.defDuty && (brain.attack || brain.urgent) ? 2.5 : 0.7;
      u.defTgt = { x: th.x, y: th.y, vx: th.vx || 0, vy: th.vy || 0, ref: th.ref };
    } else if (u.state === "defend") {
      u.defHold -= dt;
      if (u.defHold <= 0) {
        u.state = "gather";
        u.defendT = 0;
        u.defTgt = null;
      }
    } else if (u.state === "raid" && (!raidAlive || team && brain.decaying)) {
      u.raid = null;
      u.wasRaid = false;
      u.state = "gather";
    } else if (u.defDuty && (brain.attack || brain.urgent) && homeD > 340 && u.state !== "raid" && u.state !== "trade") {
      u.state = "return";
    } else if (u.state === "gather" && gatherDone(S2, u, team, brain)) {
      u.state = plan(S2, u, team, brain);
    }
    u.act = u.state;
    switch (u.state) {
      case "defend":
        updateDefend(S2, u, team, brain, th, dt);
        break;
      case "raid":
        updateRaid(S2, u, team, brain, dt);
        break;
      case "return":
        updateReturn(S2, u, dt);
        break;
      case "trade":
        updateTrade(S2, u, team, brain, dt);
        break;
      default:
        updateGather(S2, u, team, brain, dt);
        break;
    }
    afterMove(S2, u, dt);
  }
  var allyBrain = { sealed: true, decaying: false, ready: false, attack: false, urgent: false, aggressor: false, raidTarget: null };
  function afterMove(S2, u, dt) {
    separate(S2, u, dt);
    if (u.gotoTick !== S2.tick) u.stuckT = Math.max(0, u.stuckT - dt);
    if (!u.flying && (u.state === "gather" || u.state === "raid" || u.state === "return" || u.state === "trade")) {
      if (Math.hypot(u.vx, u.vy) > 30) dropFootprint(S2, u, Math.atan2(u.vy, u.vx));
    }
    if (u.directFallback && u.stuckT > 1.5) {
      const gx = Math.floor(u.x / TILE), gy = Math.floor(u.y / TILE);
      const st = S2.structures.get(gx + "," + gy);
      if (st && st.owner === u.owner) {
        if (botFreeWall(S2, u)) {
          clearPath(u);
          u.directFallback = false;
          u.stuckT = 0;
        }
      }
    }
    S2.metrics.act[u.act] = (S2.metrics.act[u.act] || 0) + dt;
  }
  function eliminate(S2, u, team) {
    u.eliminated = true;
    u.dead = true;
    if (u.primary && team && !team.elimsPosted) {
      team.elimsPosted = true;
      team.eliminated = true;
      S2.elims.push({ text: "Base " + (u.id + 1) + " ELIMINATED", t: 30 });
      S2.metrics.elims++;
    }
  }
  function rehome(S2, u, rec) {
    u.hx = rec.hx;
    u.hy = rec.hy;
    u.tcKey = rec.tcKey;
    u.doorX = rec.doorX;
    u.doorY = rec.doorY;
    u.doorGy = rec.doorGy;
    clearPath(u);
  }
  function respawn(S2, u, team) {
    if (u.ally) {
      u.hp = u.max;
      u.dead = false;
      u.x = u.hx;
      u.y = u.hy + 50;
      u.state = "gather";
      return;
    }
    if (!team) return;
    const recs = team.bases.filter((r) => !r.dead);
    if (!recs.length) {
      eliminate(S2, u, team);
      return;
    }
    let rec = recs[0];
    if (recs.length > 1 && !u.primary) {
      const tgtRec = raidTargetRec(S2, team.brain.raidTarget);
      if (tgtRec && (u.rocketer || u.wasRaid || u.state === "raid")) {
        rec = recs.reduce((a, b) => dist2(a.hx, a.hy, tgtRec.hx, tgtRec.hy) < dist2(b.hx, b.hy, tgtRec.hx, tgtRec.hy) ? a : b);
      } else rec = recs[Math.floor(S2.rng.next() * recs.length)];
    }
    rehome(S2, u, rec);
    u.hp = u.max;
    u.dead = false;
    u.x = rec.hx;
    u.y = rec.hy + 50;
    u.state = "gather";
    u.raid = null;
    u.wasRaid = false;
    if (u.primary && u.copter) {
      u.copter.destroyed = false;
      u.copter.hp = u.copter.max;
      u.copter.x = u.hx - TILE * 4;
      u.copter.y = u.hy;
    }
  }
  function updateFounding(S2, u, team, dt) {
    u.act = "found";
    const carried = u.inv.wood + u.inv.stone + u.inv.metal;
    const th = botThreat(S2, u);
    if (th && !inSafeZone(S2, u.x, u.y)) {
      combatStep(S2, u, th, dt);
      return;
    }
    if (u.primary) {
      if (carried >= 220) {
        if (dist(u.x, u.y, u.siteX, u.siteY) <= TILE * 2) {
          foundTeamBase(S2, team, u);
          return;
        }
        goto(S2, u, u.siteX, u.siteY, dt);
        return;
      }
    } else {
      if (carried >= 70) {
        if (dist(u.x, u.y, u.siteX, u.siteY) <= TILE * 3) {
          const primary = S2.units.find((o) => o.owner === u.owner && o.primary && !o.dead);
          if (primary) {
            for (const k of ["wood", "stone", "metal"]) {
              primary.inv[k] += u.inv[k];
              u.inv[k] = 0;
            }
          }
        } else {
          goto(S2, u, u.siteX, u.siteY, dt);
          return;
        }
      }
    }
    u.act = "gather";
    let node = u.tgtNode;
    if (!node || node.amount <= 0) {
      node = nearestNodeOfKind(S2, u, "wood", 2600) || nearestNode(S2, u, 4e3) || nearestNode(S2, u, 1e9);
      u.tgtNode = node;
    }
    if (!node) return;
    harvestOrWalk(S2, u, node, dt);
  }
  function gatherDone(S2, u, team, brain) {
    if (u.monRun) return false;
    const carried = u.inv.wood + u.inv.stone + u.inv.metal;
    if (carried >= AI.GATHER_LOAD || u.scrap > 40) return true;
    if (!u.ally && team) {
      if (brain.breach) return true;
      if (brain.damaged && totalWood(S2, u) >= 12) return true;
      if (u.rocketer && u.rockets < 8 && u.role !== "turtle" && S2.t >= (u.tradeCd || 0) && (u.scrap >= 12 || carried >= 100 || tcScrap(S2, u) >= 24)) return true;
      if (restockWanted(S2, u, brain)) return true;
      if (raidWanted(S2, u, brain)) return true;
    }
    if (u.ally && u.raidUrge <= 0) return true;
    return false;
  }
  function restockWanted(S2, u, brain) {
    if (u.ally || u.role === "turtle") return false;
    if (S2.t < (u.tradeCd || 0)) return false;
    if (u.rockets >= (u.primary ? 12 : 6)) return false;
    const carried = u.inv.wood + u.inv.stone + u.inv.metal;
    const funds = u.scrap >= 24 || carried >= 120 || u.primary && tcScrap(S2, u) >= 48;
    return funds && (brain.aggressor || botSafe(S2, u) || brain.ready);
  }
  function raidWanted(S2, u, brain) {
    if (!(S2.t > 120 || u.endgame)) return false;
    if (S2.t < u.raidCd) return false;
    if (u.role === "turtle" && !u.endgame) return false;
    if (!(u.rockets > 0 || u.satchels > 0 || u.endgame)) return false;
    if (u.endgame || brain.aggressor) return true;
    return brain.ready && brain.raidTarget && u.raidBias < 0.72 && teamFloors(S2, u) >= 4;
  }
  function plan(S2, u, team, brain) {
    const carried = u.inv.wood + u.inv.stone + u.inv.metal;
    if (!u.ally && team) {
      const breach = brain.breach;
      if (breach && totalWood(S2, u) < 40) return "gather";
      const homeD = dist(u.x, u.y, u.hx, u.hy);
      if (breach || brain.damaged && totalWood(S2, u) >= 12) return homeD > 180 ? "return" : "gather";
      if (u.rocketer && u.rockets < 8 && u.role !== "turtle" && S2.t >= (u.tradeCd || 0) && (u.scrap >= 12 || carried >= 100 || tcScrap(S2, u) >= 24)) return "trade";
      if (u.scrap > 40 || carried >= AI.GATHER_LOAD) return "return";
      if (restockWanted(S2, u, brain)) return "trade";
      if (raidWanted(S2, u, brain)) {
        let tgt = brain.raidTarget;
        const tr = S2.transports.find((t2) => t2.owner === u.owner && !t2.destroyed && t2.state !== "fly" && t2.state !== "unload" && t2.riders.length < TRANSPORT.seats);
        if (tr) {
          const far = farthestTeam(S2, team);
          if (far) tgt = far;
        }
        if (!tgt || !raidTargetRec(S2, tgt)) tgt = pickRaidTarget(S2, team, u);
        if (tgt) {
          u.raid = tgt;
          u.raidCd = S2.t + 2;
          S2.metrics.raidsLaunched++;
          return "raid";
        }
      }
    }
    if (u.ally && u.raidUrge <= 0) {
      const tgt = pickAllyTarget(S2);
      if (tgt) {
        u.raid = tgt;
        u.raidUrge = S2.rng.rand(24, 44);
        return "raid";
      }
      u.raidUrge = S2.rng.rand(8, 14);
    }
    return "gather";
  }
  var totalWood = (S2, u) => u.inv.wood + tcStore(S2, u, "wood");
  var tcScrap = (S2, u) => tcStore(S2, u, "scrap");
  function tcStore(S2, u, k) {
    const rec = homeRec(S2, u);
    const tc = rec && tcOf(S2, rec.tcKey);
    return tc ? tc.store[k] : 0;
  }
  function botSafe(S2, u) {
    const rec = homeRec(S2, u);
    const tc = rec && tcOf(S2, rec.tcKey);
    if (!tc) return false;
    const team = S2.teams[u.id];
    let n = 2;
    for (const s of S2.structures.values()) if (s.owner === u.owner) n++;
    for (const d of S2.deploys.values()) if (d.owner === u.owner && d.type === "turret") n++;
    return tc.store.wood + tc.store.stone + tc.store.metal > n * 75e-4 * 300;
  }
  function teamFloors(S2, u) {
    let n = 0;
    for (const s of S2.structures.values()) if (s.owner === u.owner && (s.type === "floor" || s.type === "trifloor")) n++;
    return n;
  }
  function pickRaidTarget(S2, team, u) {
    let best = null, bs = 1e18;
    const home = team.bases.find((r) => !r.dead);
    if (!home) return null;
    for (const t2 of S2.teams) {
      if (t2 === team || t2.eliminated) continue;
      const rec = t2.bases.find((r) => !r.dead);
      if (!rec) continue;
      const tc = tcOf(S2, rec.tcKey);
      const loot = tc ? tc.store.wood + tc.store.stone + tc.store.metal : 0;
      let turrets = 0;
      for (const d of S2.deploys.values()) if (d.owner === t2.owner && d.type === "turret") turrets++;
      let defHome = 0;
      if (team.hard) {
        for (const o of S2.units) if (o.owner === t2.owner && !o.dead && !o.eliminated && dist2(o.x, o.y, rec.hx, rec.hy) < 720 * 720) defHome++;
      }
      const score = dist2(home.hx, home.hy, rec.hx, rec.hy) * (1 + turrets * AI.RAID_TUR_W) * (1 + defHome * AI.RAID_DEF_W) / (1 + loot * 3e-3);
      if (score < bs) {
        bs = score;
        best = t2;
      }
    }
    const ptc = raidTargetRec(S2, "player");
    if (ptc && !S2.ghost) {
      const score = dist2(home.hx, home.hy, ptc.hx, ptc.hy);
      if (score < bs) best = "player";
    }
    return best;
  }
  function pickAllyTarget(S2) {
    let best = null, bd = 1e18;
    for (const t2 of S2.teams) {
      if (t2.eliminated) continue;
      const rec = t2.bases.find((r) => !r.dead);
      if (!rec) continue;
      const dd = dist2(S2.player.x, S2.player.y, rec.hx, rec.hy);
      if (dd < bd) {
        bd = dd;
        best = t2;
      }
    }
    return best;
  }
  function farthestTeam(S2, team) {
    const home = team.bases.find((r) => !r.dead);
    if (!home) return null;
    let best = null, bd = 3e3 * 3e3;
    for (const t2 of S2.teams) {
      if (t2 === team || t2.eliminated) continue;
      const rec = t2.bases.find((r) => !r.dead);
      if (!rec) continue;
      const dd = dist2(home.hx, home.hy, rec.hx, rec.hy);
      if (dd > bd) {
        bd = dd;
        best = t2;
      }
    }
    return best;
  }
  function botThreat(S2, u) {
    if (u.disengageT > 0 || inSafeZone(S2, u.x, u.y)) return null;
    let best = null, bd = AI.REACT_R * AI.REACT_R;
    const p = S2.player;
    const consider = (x, y, vx, vy, ref, maxR) => {
      if (ref === u.unreach && S2.t < u.unreachT) return;
      const dd = dist2(u.x, u.y, x, y);
      if (dd >= bd || maxR && dd > maxR * maxR) return;
      if (inSafeZone(S2, x, y)) return;
      if (boulderLine(S2, u.x, u.y, x, y)) return;
      bd = dd;
      best = { x, y, vx, vy, ref };
    };
    if (!u.ally && !p.dead && !p.inCopter && !S2.ghost) consider(p.x, p.y, p.vx, p.vy, p);
    for (const o of S2.units) {
      if (o.owner === u.owner || o.dead || o.flying || o.eliminated) continue;
      consider(o.x, o.y, o.vx, o.vy, o);
    }
    for (const a of S2.animals) if (!a.dead && a.aggro) consider(a.x, a.y, a.vx, a.vy, a, 360);
    for (const g of S2.guards) if (!g.dead) consider(g.x, g.y, 0, 0, g, 480);
    return best;
  }
  function botNearThreat(S2, u) {
    if (u.disengageT > 0 || inSafeZone(S2, u.x, u.y)) return null;
    let best = null, bd = 430 * 430;
    const p = S2.player;
    const consider = (x, y, vx, vy, ref) => {
      if (ref === u.unreach && S2.t < u.unreachT) return;
      const dd = dist2(u.x, u.y, x, y);
      if (dd >= bd || inSafeZone(S2, x, y) || boulderLine(S2, u.x, u.y, x, y)) return;
      bd = dd;
      best = { x, y, vx, vy, ref };
    };
    if (!u.ally && !p.dead && !p.inCopter && !S2.ghost) consider(p.x, p.y, p.vx, p.vy, p);
    for (const o of S2.units) {
      if (o.owner === u.owner || o.dead || o.flying || o.eliminated) continue;
      consider(o.x, o.y, o.vx, o.vy, o);
    }
    for (const g of S2.guards) if (!g.dead) consider(g.x, g.y, 0, 0, g);
    return best;
  }
  function updateDefend(S2, u, team, brain, th, dt) {
    u.defendT += dt;
    const foe = th || u.defTgt;
    if (!foe) {
      u.state = "gather";
      return;
    }
    const raiding = u.raid && raidTargetRec(S2, u.raid);
    const carried = u.inv.wood + u.inv.stone + u.inv.metal;
    const carrying = carried > 60 || u.scrap > 20;
    const critical = u.hp < u.max * 0.2;
    const hurt = u.hp < u.max * (carrying ? 0.45 : 0.28);
    if ((hurt && !raiding || critical) && !u.endgame && !u.retreat) {
      if (S2.rng.chance(carrying ? 0.05 : 0.02)) u.retreat = true;
    }
    if (u.retreat) {
      if (u.hp >= u.max * 0.85 || u.defendT > 9) u.retreat = false;
      else {
        u.disengageT = Math.max(u.disengageT, 2.5);
        if (!wallBlocksView(S2, u.x, u.y, foe.x, foe.y)) botShoot(S2, u, foe, dt);
        const st = goto(S2, u, u.hx + u.lane, u.hy + u.hoff, dt);
        if (st === "arrived" || dist(u.x, u.y, u.hx, u.hy) < TILE * 1.5) {
          u.retreat = false;
          u.state = "return";
        }
        return;
      }
    }
    combatStep(S2, u, foe, dt);
    maybeGrenade(S2, u, foe);
    const breakT = raiding ? 2.2 : 7;
    if (u.defendT > breakT) {
      if (raiding) u.state = "raid";
      else {
        u.disengageT = 6;
        u.state = "gather";
      }
      u.defendT = 0;
    }
  }
  function updateRaid(S2, u, team, brain, dt) {
    u.wasRaid = true;
    u.act = "raid";
    const rec = raidTargetRec(S2, u.raid);
    if (!rec) {
      u.wasRaid = false;
      u.state = "return";
      return;
    }
    const tc = tcOf(S2, rec.tcKey);
    if (!tc) {
      u.wasRaid = false;
      u.state = "return";
      return;
    }
    if (u.rockets <= 0 && u.satchels <= 0 && !u.endgame) {
      u.raid = null;
      u.wasRaid = false;
      const carried = u.inv.wood + u.inv.stone + u.inv.metal;
      u.state = u.scrap >= 8 || carried >= 100 ? "trade" : "gather";
      return;
    }
    if (!u.aboard && dist(u.x, u.y, u.hx, u.hy) < 600 && dist(rec.hx, rec.hy, u.hx, u.hy) > 2800) {
      const tr = S2.transports.find((t2) => t2.owner === u.owner && !t2.destroyed && (t2.state === "idle" || t2.state === "board") && t2.riders.length < TRANSPORT.seats);
      if (tr) {
        if (dist(u.x, u.y, tr.x, tr.y) < 70) {
          transportBoard(S2, u, tr);
          return;
        }
        goto(S2, u, tr.x, tr.y, dt);
        return;
      }
    }
    const dTC = dist(u.x, u.y, rec.hx, rec.hy);
    const squadAt = S2.units.filter((o) => o.owner === u.owner && o.state === "raid" && o.raid === u.raid && !o.dead && dist2(o.x, o.y, rec.hx, rec.hy) < 560 * 560).length;
    const grouped = squadAt >= 2 || u.endgame || u.ally;
    if (u.stagedFor !== u.raid) {
      u.staged = false;
      u.stagedFor = u.raid;
    }
    if (dTC < 700) u.staged = true;
    else if (dTC > 1600) u.staged = false;
    if (!u.staged) {
      const ang = Math.atan2(u.hy - rec.hy, u.hx - rec.hx);
      const lane = (u.id % 5 - 2) * 70 + u.lane * 2;
      const sx = rec.hx + Math.cos(ang) * 540 + Math.cos(ang + Math.PI / 2) * lane;
      const sy = rec.hy + Math.sin(ang) * 540 + Math.sin(ang + Math.PI / 2) * lane;
      const st = goto(S2, u, sx, sy, dt);
      if (st === "stuck") {
        u.raidCd = S2.t + 8;
        u.raid = null;
        u.wasRaid = false;
        u.state = "gather";
      }
      return;
    }
    if (grouped && dTC < (u.endgame ? 420 : 300) && !wallBlocksView(S2, u.x, u.y, rec.hx, rec.hy)) {
      faceToward(u, rec.hx, rec.hy, dt);
      tc.hp -= (u.endgame ? 140 : u.hard ? 24 : 14) * dt;
      tc.hitT = S2.t;
      if (S2.rng.chance(0.2)) S2.particles.push({ x: rec.hx + S2.rng.rand(-10, 10), y: rec.hy + S2.rng.rand(-10, 10), vx: S2.rng.rand(-40, 40), vy: S2.rng.rand(-60, -20), life: 0.4, max: 0.4, r: 2, col: "#caa24a" });
      if (tc.hp <= 0) destroyDeploy(S2, rec.tcKey, tc, u.owner);
      return;
    }
    const turret = pathTurret(S2, u, rec);
    let aim = null, aimKey = null, aimIsDoor = false;
    if (turret) {
      aim = turret.c;
      aimKey = turret.key;
    } else {
      const breach = breachAim(S2, u, team, rec);
      if (breach) {
        aim = breach.c;
        aimKey = breach.key;
        aimIsDoor = breach.door;
      } else aim = { x: rec.hx, y: rec.hy };
    }
    const dAim = dist(u.x, u.y, aim.x, aim.y);
    if (u.rockets > 0) {
      if (dTC >= AI.ROCKET_MIN && dTC < 460 && !wallBlocksView(S2, u.x, u.y, rec.hx, rec.hy)) {
        faceToward(u, rec.hx, rec.hy, dt);
        tryRocket(S2, u, rec.hx, rec.hy, 2.2);
        return;
      }
      if (dAim > 380) {
        const ang = Math.atan2(u.y - aim.y, u.x - aim.x);
        const lane = (u.id % 5 - 2) * 70;
        const tx = aim.x + Math.cos(ang) * 320 + Math.cos(ang + Math.PI / 2) * lane;
        const ty = aim.y + Math.sin(ang) * 320 + Math.sin(ang + Math.PI / 2) * lane;
        goto(S2, u, tx, ty, dt);
        breachIfBlocked(S2, u, rec);
      } else if (dAim < AI.ROCKET_MIN) {
        const ang = Math.atan2(u.y - aim.y, u.x - aim.x);
        const nx = u.x + Math.cos(ang) * 120 * dt, ny = u.y + Math.sin(ang) * 120 * dt;
        if (!blocked(S2, nx, ny, 13, { passOwner: u.owner })) {
          u.x = nx;
          u.y = ny;
        }
      } else {
        faceToward(u, aim.x, aim.y, dt);
        tryRocket(S2, u, aim.x, aim.y, 2.2);
      }
      return;
    }
    if (u.satchels > 0 && grouped) {
      if (dAim < 100) {
        if (u.rkCd <= 0) {
          S2.satchels.push({ x: aim.x, y: aim.y, t: 2, from: u.owner });
          u.satchels--;
          u.rkCd = 2.6;
          addFloat(S2, u.x, u.y, "satchel!", "#ffd0a0");
        }
      } else {
        goto(S2, u, aim.x, aim.y, dt, { arrive: 80 });
        breachIfBlocked(S2, u, rec);
      }
      return;
    }
    const foe = botNearThreat(S2, u);
    if (foe) {
      if (dist(u.x, u.y, foe.x, foe.y) < 480) {
        faceToward(u, foe.x, foe.y, dt);
        botShoot(S2, u, foe, dt);
      } else goto(S2, u, foe.x, foe.y, dt);
    } else if (grouped) {
      const ang = Math.atan2(u.hy - rec.hy, u.hx - rec.hx);
      const lane = (u.id % 5 - 2) * 64;
      goto(S2, u, aim.x + Math.cos(ang) * 380 + Math.cos(ang + Math.PI / 2) * lane, aim.y + Math.sin(ang) * 380 + Math.sin(ang + Math.PI / 2) * lane, dt, { arrive: 40 });
    } else if (dAim < 380) {
      const ang = Math.atan2(u.y - aim.y, u.x - aim.x);
      const nx = u.x + Math.cos(ang) * BS * dt, ny = u.y + Math.sin(ang) * BS * dt;
      if (!blocked(S2, nx, ny, 13, { passOwner: u.owner })) {
        u.x = nx;
        u.y = ny;
      }
    } else goto(S2, u, aim.x, aim.y, dt, { arrive: 340 });
  }
  function pathTurret(S2, u, rec) {
    let best = null, bd = 1e18;
    for (const [k, d] of S2.deploys) {
      if (d.type !== "turret" || d.owner !== rec.owner) continue;
      const [gx, gy] = k.split(",").map(Number);
      const c = cellCenter(gx, gy);
      const range = { 1: 340, 2: 380, 3: 460 }[d.tier || 1] + 60;
      const dd = dist2(u.x, u.y, c.x, c.y);
      if (dd < range * range && !wallBlocksView(S2, u.x, u.y, c.x, c.y)) {
        if (dd < bd) {
          bd = dd;
          best = { key: k, c };
        }
      }
    }
    return best;
  }
  function breachAim(S2, u, team, rec) {
    for (const o of S2.units) {
      if (o.owner !== u.owner || o.dead || o.raid !== u.raid) continue;
      if (dist2(o.x, o.y, rec.hx, rec.hy) < 760 * 760 && !wallBlocksView(S2, o.x, o.y, rec.hx, rec.hy)) return null;
    }
    const brain = team ? team.brain : null;
    if (brain && brain.breachKey && S2.t - brain.breachT < 1.5) {
      const w2 = S2.walls.get(brain.breachKey);
      if (w2 && w2.hp > 0 && !(w2.type === "door" && w2.open)) {
        const s = wallSegMid(S2, brain.breachKey, w2);
        return { key: brain.breachKey, c: s, door: w2.type === "door" };
      }
    }
    let cx = 0, cy = 0, n = 0;
    for (const o of S2.units) {
      if (o.owner === u.owner && o.raid === u.raid && !o.dead) {
        cx += o.x;
        cy += o.y;
        n++;
      }
    }
    if (!n) {
      cx = u.x;
      cy = u.y;
      n = 1;
    }
    cx /= n;
    cy /= n;
    let best = null, bs = 1e18, bestDoor = false;
    for (const [k, w2] of S2.walls) {
      if (w2.owner !== rec.owner || w2.hp <= 0) continue;
      if (w2.type === "door" && w2.open) continue;
      const mid = wallSegMid(S2, k, w2);
      if (dist2(mid.x, mid.y, rec.hx, rec.hy) > CLAIM_R * CLAIM_R) continue;
      const score = (dist(cx, cy, mid.x, mid.y) + dist(mid.x, mid.y, rec.hx, rec.hy)) * (w2.type === "door" ? 0.6 : 1);
      if (score < bs) {
        bs = score;
        best = k;
        bestDoor = w2.type === "door";
      }
    }
    if (!best) return null;
    if (brain) {
      brain.breachKey = best;
      brain.breachT = S2.t;
    }
    const w = S2.walls.get(best);
    return { key: best, c: wallSegMid(S2, best, w), door: bestDoor };
  }
  function wallSegMid(S2, k, w) {
    const p = k.split(",");
    const gx = +p[1], gy = +p[2];
    if (p[0] === "V") return { x: gx * TILE, y: gy * TILE + TILE / 2 };
    return { x: gx * TILE + TILE / 2, y: gy * TILE };
  }
  function breachIfBlocked(S2, u, rec) {
    let best = null, bd = 240 * 240, bestDoor = false;
    for (const [k, w] of S2.walls) {
      if (w.owner !== rec.owner || w.hp <= 0) continue;
      if (w.type === "door" && w.open) continue;
      const mid = wallSegMid(S2, k, w);
      const dd = dist2(u.x, u.y, mid.x, mid.y);
      const isDoor = w.type === "door";
      if (dd < bd || isDoor && !bestDoor && dd < 240 * 240) {
        if (isDoor || !bestDoor) {
          bd = dd;
          best = mid;
          bestDoor = isDoor;
        }
      }
    }
    if (!best || u.rkCd > 0) return;
    const d = dist(u.x, u.y, best.x, best.y);
    if (u.rockets > 0 && d >= AI.ROCKET_MIN) {
      faceToward(u, best.x, best.y, 1);
      tryRocket(S2, u, best.x, best.y, 2.2);
    } else if (d < 90 && u.satchels > 0) {
      S2.satchels.push({ x: best.x, y: best.y, t: 3, from: u.owner });
      u.satchels--;
      u.rkCd = 4.5;
    }
  }
  function updateReturn(S2, u, dt) {
    u.wasRaid = false;
    u.act = "return";
    u.retT += dt;
    const st = goto(S2, u, u.hx + u.lane, u.hy + u.hoff, dt, { arrive: TILE * 1.5 });
    if (st === "arrived") {
      depositHome(S2, u);
      u.state = "gather";
      u.retT = 0;
      return;
    }
    if (st === "stuck" || u.retT > 14) {
      const team = u.ally ? null : S2.teams[u.id];
      const rec = team && homeRec(S2, u);
      const breached = team && rec && findBreach(S2, team, rec);
      if (!breached) {
        depositHome(S2, u);
        u.state = "gather";
        u.retT = 0;
      } else if (st === "stuck") botFreeWall(S2, u);
    }
  }
  function depositHome(S2, u) {
    if (u.ally) {
      for (const k of ["wood", "stone", "metal"]) {
        S2.inv[k] += u.inv[k];
        u.inv[k] = 0;
      }
      S2.inv.scrap += u.scrap;
      u.scrap = 0;
      return;
    }
    const rec = homeRec(S2, u);
    const tc = rec && tcOf(S2, rec.tcKey);
    if (!tc) return;
    for (const k of ["wood", "stone", "metal"]) {
      tc.store[k] += u.inv[k];
      u.inv[k] = 0;
    }
    tc.store.scrap += u.scrap;
    u.scrap = 0;
  }
  function updateTrade(S2, u, team, brain, dt) {
    u.act = "trade";
    const shop = S2.world.shop;
    if (!shop) {
      u.state = "return";
      return;
    }
    const fan = (u.id >= 0 ? u.id : 3) + (u.tradeJitter || 0);
    const fx = shop.x + Math.cos(fan * 2.39996) * SAFE_R * 0.34;
    const fy = shop.y + Math.sin(fan * 2.39996) * SAFE_R * 0.34;
    if (!u.tradeDone) {
      const d = dist(u.x, u.y, shop.x, shop.y);
      if (d > SAFE_R * 0.55) {
        if (u.copter && !u.copter.destroyed) {
          if (flyTo(S2, u, fx, fy, dt, SAFE_R * 0.5)) {
          }
          return;
        }
        const st = goto(S2, u, fx, fy, dt, { arrive: 30 });
        if (st === "stuck") {
          u.tradeCd = S2.t + 20;
          u.tradeJitter = (u.tradeJitter || 0) + 1;
          u.state = "return";
        }
        return;
      }
      doTradeVisit(S2, u, team, brain);
      u.tradeDone = true;
      return;
    }
    if (u.flying) {
      if (flyTo(S2, u, u.hx - TILE * 4, u.hy, dt, 46)) {
        landCopter(u);
        u.tradeDone = false;
        u.state = "return";
      }
      return;
    }
    u.tradeDone = false;
    u.state = "return";
  }
  function doTradeVisit(S2, u, team, brain) {
    let sold = 0;
    while (u.inv.wood >= 100) {
      u.inv.wood -= 100;
      u.scrap += 6;
      sold += 6;
    }
    while (u.inv.stone >= 100) {
      u.inv.stone -= 100;
      u.scrap += 9;
      sold += 9;
    }
    while (u.inv.metal >= 50) {
      u.inv.metal -= 50;
      u.scrap += 10;
      sold += 10;
    }
    if (sold > 0) addFloat(S2, u.x, u.y, "+" + sold + " scrap", "#ffe07a");
    const rec = homeRec(S2, u);
    const tc = rec && tcOf(S2, rec.tcKey);
    if (tc) {
      if (u.primary) {
        u.scrap += tc.store.scrap;
        tc.store.scrap = 0;
      } else if (u.rocketer) {
        const take = Math.max(0, tc.store.scrap - 100);
        u.scrap += take;
        tc.store.scrap -= take;
      }
    }
    let bought = false;
    if (u.primary && team && u.scrap >= TRANSPORT.cost && !S2.transports.some((t2) => t2.owner === u.owner && !t2.destroyed)) {
      const far = farthestTeam(S2, team);
      if (far) {
        u.scrap -= TRANSPORT.cost;
        buyTransport(S2, team, u);
        bought = true;
      }
    }
    if (!u.weak && u.gun === "pistol" && u.scrap >= 10) {
      u.scrap -= 10;
      u.gun = u.shotgun ? "shotgun" : "rifle";
      addFloat(S2, u.x, u.y, "+" + u.gun, "#bfe3ff");
      bought = true;
    }
    if (u.hard && u.gun === "rifle" && !u.rifleLaser && u.scrap >= 10) {
      u.scrap -= 10;
      u.rifleLaser = true;
      addFloat(S2, u.x, u.y, "+laser", "#ff6a6a");
      bought = true;
    }
    while (u.rockets < 2 && u.scrap >= 12) {
      u.scrap -= 12;
      u.rockets++;
      bought = true;
    }
    if (u.primary && u.rockets >= 2) while (u.scrap >= AI.WORKER_COST && botHireWorker(S2, u)) bought = true;
    while (u.rockets < 12 && u.scrap >= 12) {
      u.scrap -= 12;
      u.rockets++;
      bought = true;
    }
    while (u.satchels < 4 && u.scrap >= 8) {
      u.scrap -= 8;
      u.satchels++;
      bought = true;
    }
    if (u.grenades < 2 && u.scrap >= 8) {
      u.scrap -= 8;
      u.grenades++;
      bought = true;
    }
    if (u.hard) {
      while (u.scrap >= 14 && u.bodyArmor < 3) {
        u.scrap -= 14;
        u.bodyArmor++;
        addFloat(S2, u.x, u.y, "+armor", "#9fb0c8");
        bought = true;
      }
      while (u.scrap >= 12 && u.facemask < 3) {
        u.scrap -= 12;
        u.facemask++;
        bought = true;
      }
      while (u.scrap >= 20 && u.hqm < 60) {
        u.scrap -= 14;
        u.hqm += 10;
        bought = true;
      }
    }
    const copCount = S2.units.filter((o) => o.owner === u.owner && o.copter && !o.copter.destroyed).length;
    if ((!u.copter || u.copter.destroyed) && !u.aboard && u.scrap >= AI.MINICOPTER_COST && copCount < (u.hard ? 3 : 2)) {
      u.scrap -= AI.MINICOPTER_COST;
      u.copter = { x: u.x - TILE * 2, y: u.y, angle: 0, rotor: 0, spin: 0, vx: 0, vy: 0, hp: 160, max: 160, destroyed: false };
      addFloat(S2, u.x, u.y, "+minicopter", "#bfe3ff");
      bought = true;
    }
    if (bought) addFloat(S2, u.x, u.y - 16, "resupplied", "#bfe3ff");
  }
  function flyTo(S2, u, tx, ty, dt, reach = 44) {
    const c = u.copter;
    if (!c || c.destroyed) return true;
    if (!u.flying) {
      c.x = u.x;
      c.y = u.y;
      u.flying = true;
      u.flyT = 0;
    }
    u.flyT = (u.flyT || 0) + dt;
    const d = dist(c.x, c.y, tx, ty);
    if (d < reach || u.flyT > 9) {
      if (u.flyT > 9) {
        c.x = tx;
        c.y = ty;
        c.vx = c.vy = 0;
      }
      u.x = c.x;
      u.y = c.y;
      return true;
    }
    const aim = Math.atan2(ty - c.y, tx - c.x);
    c.angle = c.angle + angShort3(c.angle, aim) * Math.min(1, dt * 4);
    c.rotor += dt * 46;
    const throttle = d > 160 ? 1 : Math.max(0.12, d / 160);
    c.vx += Math.cos(c.angle) * COPTER.accel * throttle * dt;
    c.vy += Math.sin(c.angle) * COPTER.accel * throttle * dt;
    const drag = Math.pow(COPTER.drag, dt);
    c.vx *= drag;
    c.vy *= drag;
    const sp = Math.hypot(c.vx, c.vy);
    if (sp > COPTER.speed) {
      c.vx *= COPTER.speed / sp;
      c.vy *= COPTER.speed / sp;
    }
    c.x = clamp(c.x + c.vx * dt, COPTER.r, WORLD.w - COPTER.r);
    c.y = clamp(c.y + c.vy * dt, COPTER.r, WORLD.h - COPTER.r);
    u.x = c.x;
    u.y = c.y;
    return false;
  }
  function landCopter(u) {
    if (u.copter) {
      u.copter.x = u.x;
      u.copter.y = u.y;
      u.copter.vx = 0;
      u.copter.vy = 0;
      u.copter.spin = 0;
    }
    u.flying = false;
  }
  function updateGather(S2, u, team, brain, dt) {
    u.wasRaid = false;
    u.retT = 0;
    const carried = u.inv.wood + u.inv.stone + u.inv.metal;
    const homeD = dist(u.x, u.y, u.hx, u.hy);
    const atHome = homeD < 200;
    u.gathering = false;
    const rec = team && homeRec(S2, u);
    if (u.buildDuty && team && rec) {
      const breach = findBreach(S2, team, rec);
      if (breach) {
        u.act = "build";
        if (homeD > 200) {
          goto(S2, u, u.hx + u.lane, u.hy + u.hoff, dt);
          return;
        }
        if (carried > 0) depositHome(S2, u);
        if (sealWall(S2, team, breach, botStores(S2, u))) {
          addFloat(S2, u.x, u.y, "sealed", "#9ad06a");
          u.maintT = S2.t;
        }
        return;
      }
      if (atHome) {
        if (carried > 0) depositHome(S2, u);
        const dmg = worstDamagedWall(S2, team, rec);
        if (dmg) {
          if (repairWall(S2, team, dmg, botStores(S2, u))) {
            u.act = "build";
            u.maintT = S2.t;
            addFloat(S2, u.x, u.y, "repaired", "#9ad06a");
            return;
          }
        }
        if (u.expandT <= 0) {
          u.expandT = S2.rng.rand(2.5, 6);
          if (botBuild(S2, u)) {
            u.act = "build";
            u.maintT = S2.t;
            return;
          }
        }
      }
    }
    if (atHome && team && rec) {
      if (carried > 100 || u.scrap > 0) depositHome(S2, u);
      if (brain.breach && sealWall(S2, team, brain.breach, botStores(S2, u))) {
        brain.breach = null;
        brain.sealed = true;
        u.maintT = S2.t;
        addFloat(S2, u.x, u.y, "sealed", "#9ad06a");
      }
    }
    if (u.qRun) {
      const q = S2.quarry;
      if (!q || q.owner === u.owner || S2.t > u.qRun.until) {
        u.qRun = null;
      } else {
        u.act = "quarry";
        const foe = botNearThreat(S2, u);
        const dq = dist(u.x, u.y, q.x, q.y);
        if (foe && dq < q.r) {
          faceToward(u, foe.x, foe.y, dt, 10);
          botShoot(S2, u, foe, dt);
          return;
        }
        if (dq > q.r * 0.5) {
          if (goto(S2, u, q.x, q.y, dt, { arrive: q.r * 0.4 }) === "stuck") u.qRun = null;
        }
        return;
      }
    }
    if (u.lootRun) {
      const r2 = u.lootRun;
      let live = S2.t < r2.until;
      if (r2.kind === "crate") live = live && !!S2.lockedCrate;
      if (r2.kind === "airdrop") {
        const d = dist(u.x, u.y, r2.x, r2.y);
        if (d < 2200 && S2.airdrop || !S2.airdrop && d < 480) live = false;
      }
      if (r2.kind === "pile") {
        const d = dist(u.x, u.y, r2.x, r2.y);
        if (d < 480) live = false;
        else if (!S2.loot.some((L) => (L.kind === "rocket" || L.kind === "satchel") && dist2(L.x, L.y, r2.x, r2.y) < 300 * 300)) live = false;
      }
      if (!live) u.lootRun = null;
      else {
        u.act = "loot";
        if (r2.kind === "crate" && S2.lockedCrate && dist(u.x, u.y, S2.lockedCrate.x, S2.lockedCrate.y) <= 90) {
        } else if (goto(S2, u, r2.x, r2.y, dt, { arrive: 80, speed: 170 }) === "stuck") u.lootRun = null;
        return;
      }
    }
    if (u.lootSkipSet && S2.t > u.lootSkipT) u.lootSkipSet = null;
    if (u.lootTgt && (!S2.loot.includes(u.lootTgt) || dist2(u.x, u.y, u.lootTgt.x, u.lootTgt.y) > 560 * 560)) u.lootTgt = null;
    if (!u.lootTgt) {
      let best = null, bd = 520 * 520;
      for (const L of S2.loot) {
        if (u.lootSkipSet && u.lootSkipSet.has(L)) continue;
        const dd = dist2(u.x, u.y, L.x, L.y);
        if (dd < bd) {
          bd = dd;
          best = L;
        }
      }
      u.lootTgt = best;
    }
    if (u.lootTgt) {
      u.act = "loot";
      const st = goto(S2, u, u.lootTgt.x, u.lootTgt.y, dt, { arrive: 22, speed: 170 });
      if (st === "stuck" || u.directFallback && u.stuckT > 2) {
        if (!u.lootSkipSet) u.lootSkipSet = /* @__PURE__ */ new Set();
        u.lootSkipSet.add(u.lootTgt);
        u.lootSkipT = S2.t + 25;
        u.lootTgt = null;
      }
      return;
    }
    if (S2.airdrop && S2.t > (u.airdropCd || 0) && dist2(u.x, u.y, S2.airdrop.x, S2.airdrop.gy) < 2600 * 2600) {
      const a = S2.airdrop;
      u.act = "airdrop";
      const ty = a.fall < 1 ? a.gy : a.y;
      const d = dist(u.x, u.y, a.x, ty);
      if (a.fall >= 1 && d < 150) {
        faceToward(u, a.x, a.y, dt, 10);
        if (u.gunCd <= 0) shootAt(S2, u, a.x, a.y);
        return;
      }
      if (d > 130) {
        if (goto(S2, u, a.x, ty, dt, { arrive: 120, speed: 165 }) === "stuck") u.airdropCd = S2.t + 25;
        return;
      }
      return;
    }
    if (S2.lockedCrate && !u.buildDuty && S2.t > (u.crateCd || 0) && dist2(u.x, u.y, S2.lockedCrate.x, S2.lockedCrate.y) < 1600 * 1600) {
      const c = S2.lockedCrate;
      u.act = "crate";
      if (dist(u.x, u.y, c.x, c.y) > 90) {
        if (goto(S2, u, c.x, c.y, dt, { arrive: 80, speed: 165 }) === "stuck") u.crateCd = S2.t + 30;
        return;
      }
      return;
    }
    if (!u.endgame) {
      if (u.monRun) {
        const m = nearestMonument(S2, u);
        const hasBarrel = m && monumentBarrel(S2, m);
        u.monRunT += dt;
        if (!hasBarrel || carried >= 340 || u.monRunT > 12) {
          u.monRun = false;
          u.monCd = S2.t + S2.rng.rand(60, 110);
        } else {
          u.act = "monument";
          const guard = monumentGuard(S2, m);
          if (guard && dist2(u.x, u.y, m.x, m.y) < (m.r + 320) * (m.r + 320)) {
            const gd = dist(u.x, u.y, guard.x, guard.y);
            if (gd > 340 || wallBlocksView(S2, u.x, u.y, guard.x, guard.y)) {
              if (goto(S2, u, guard.x, guard.y, dt, { arrive: 300 }) === "stuck") {
                u.monRun = false;
                u.monCd = S2.t + 30;
              }
            } else {
              faceToward(u, guard.x, guard.y, dt, 10);
              botShoot(S2, u, { x: guard.x, y: guard.y, ref: guard }, dt);
            }
            return;
          }
          const b = monumentBarrel(S2, m);
          if (b) {
            if (dist(u.x, u.y, b.x, b.y) > 120) {
              if (goto(S2, u, b.x, b.y, dt, { arrive: 110, speed: 150 }) === "stuck") {
                u.monRun = false;
                u.monCd = S2.t + 14;
              }
            } else {
              faceToward(u, b.x, b.y, dt, 10);
              if (u.gunCd <= 0) shootAt(S2, u, b.x, b.y);
            }
            return;
          }
        }
      } else if (S2.t > u.monCd && carried < 200) {
        const m = nearestMonument(S2, u);
        if (m && monumentBarrel(S2, m) && (dist2(m.x, m.y, u.hx, u.hy) < 2100 * 2100 || dist2(m.x, m.y, u.x, u.y) < 1300 * 1300)) {
          u.monRun = true;
          u.monRunT = 0;
        }
      }
    }
    const mz = nearestMonument(S2, u);
    if (mz && dist2(u.x, u.y, mz.x, mz.y) < (mz.r + 150) * (mz.r + 150) && !u.monRun) {
      u.monStay += dt;
      if (u.monStay > 10) {
        u.monStay = 0;
        u.monCd = S2.t + 45;
        u.tgtNode = null;
      }
    } else u.monStay = Math.max(0, u.monStay - 2 * dt);
    let node = pickNode(S2, u);
    if (node) {
      harvestOrWalk(S2, u, node, dt);
      return;
    }
    if (mz && monumentBarrel(S2, mz) && S2.t > u.monCd) {
      const b = monumentBarrel(S2, mz);
      u.act = "monument";
      if (dist(u.x, u.y, b.x, b.y) > 120) {
        if (goto(S2, u, b.x, b.y, dt, { arrive: 110, speed: 150 }) === "stuck") u.monCd = S2.t + 30;
      } else {
        faceToward(u, b.x, b.y, dt, 10);
        if (u.gunCd <= 0) shootAt(S2, u, b.x, b.y);
      }
      return;
    }
    u.act = "roam";
    roam(S2, u, dt);
  }
  function harvestOrWalk(S2, u, node, dt) {
    const d = dist(u.x, u.y, node.x, node.y);
    if (d > node.r + 22) {
      u.act = "toNode";
      const st = goto(S2, u, node.x, node.y, dt, { arrive: node.r + 18 });
      if (st === "stuck") {
        if (!u.skipSet || S2.t > u.skipT) u.skipSet = /* @__PURE__ */ new Set();
        u.skipSet.add(node);
        u.skipT = S2.t + 10;
        u.tgtNode = null;
      }
      return;
    }
    u.act = "gather";
    u.gathering = true;
    faceToward(u, node.x, node.y, dt);
    u.swing += dt * 9;
    if (u.think <= 0) {
      u.think = 0.5;
      const got = Math.min(u.jack ? 24 : 8, node.amount);
      if (got > 0) {
        node.amount -= got;
        node.regen = 0;
        u.inv[node.base] += got;
        S2.events.push({ type: "harvest", x: node.x, y: node.y, kind: node.base });
      }
    }
  }
  function pickNode(S2, u) {
    if (u.tgtNode) {
      const n = u.tgtNode;
      const claimed = n.by && n.by !== u && !n.by.dead && S2.t - n.byT < 3;
      if (n.amount > 0 && !claimed) {
        n.by = u;
        n.byT = S2.t;
        return n;
      }
      u.tgtNode = null;
    }
    const rings = [1400, 2800, 5600, 1e9];
    for (const ring of rings) {
      let best = null, bs = 1e18;
      for (const n of S2.resources) {
        if (n.amount <= 0) continue;
        if (u.skipSet && u.skipSet.has(n) && S2.t < u.skipT) continue;
        const dh = dist2(n.x, n.y, u.hx, u.hy);
        if (dh < 240 * 240 || dh > ring * ring) continue;
        if (n.by && n.by !== u && !n.by.dead && S2.t - n.byT < 2.5) continue;
        if (S2.structures.has(gkeyOf(n.x, n.y))) continue;
        let score = dist2(u.x, u.y, n.x, n.y);
        score *= losTerrainCheap(S2, u, n) ? 1 : 6;
        if (score < bs) {
          bs = score;
          best = n;
        }
      }
      if (best) {
        best.by = u;
        best.byT = S2.t;
        u.tgtNode = best;
        return best;
      }
    }
    return null;
  }
  var gkeyOf = (x, y) => Math.floor(x / TILE) + "," + Math.floor(y / TILE);
  function losTerrainCheap(S2, u, n) {
    if (n._losT && S2.t - n._losT < 2 && n._losFor === u) return n._los;
    n._los = losTerrain(S2, u.x, u.y, n.x, n.y);
    n._losT = S2.t;
    n._losFor = u;
    return n._los;
  }
  function nearestNode(S2, u, maxD) {
    let best = null, bd = maxD * maxD;
    for (const n of S2.resources) {
      if (n.amount <= 0) continue;
      const dd = dist2(u.x, u.y, n.x, n.y);
      if (dd < bd) {
        bd = dd;
        best = n;
      }
    }
    return best;
  }
  function nearestNodeOfKind(S2, u, base, maxD) {
    let best = null, bd = maxD * maxD;
    for (const n of S2.resources) {
      if (n.amount <= 0 || n.base !== base) continue;
      const dd = dist2(u.x, u.y, n.x, n.y);
      if (dd < bd) {
        bd = dd;
        best = n;
      }
    }
    return best;
  }
  function nearestMonument(S2, u) {
    let best = null, bd = 1e18;
    for (const m of S2.world.monuments) {
      if (m.type === "quarry") continue;
      const dd = dist2(u.x, u.y, m.x, m.y);
      if (dd < bd) {
        bd = dd;
        best = m;
      }
    }
    return best;
  }
  function monumentBarrel(S2, m) {
    for (const b of S2.barrels) {
      if (b.hp <= 0 || b.tier !== "mon") continue;
      if (dist2(b.x, b.y, m.x, m.y) < (m.r + 220) * (m.r + 220)) return b;
    }
    return null;
  }
  function monumentGuard(S2, m) {
    let best = null, bd = (m.r + 280) * (m.r + 280);
    for (const g of S2.guards) {
      if (g.dead) continue;
      const dd = dist2(g.x, g.y, m.x, m.y);
      if (dd < bd) {
        bd = dd;
        best = g;
      }
    }
    return best;
  }
  function roam(S2, u, dt) {
    if (!u.roamX || dist(u.x, u.y, u.roamX, u.roamY) < 140 || S2.t > (u.roamT || 0)) {
      for (let t = 0; t < 12; t++) {
        const x = S2.rng.rand(800, WORLD.w - 800), y = S2.rng.rand(800, WORLD.h - 800);
        if (!S2.world.onLand(x, y) || S2.world.lakeAt(x, y)) continue;
        u.roamX = x;
        u.roamY = y;
        u.roamT = S2.t + S2.rng.rand(7, 13);
        break;
      }
    }
    if (u.roamX) {
      if (goto(S2, u, u.roamX, u.roamY, dt, { speed: 140, arrive: 120 }) === "stuck") u.roamX = 0;
    }
  }
  function combatStep(S2, u, tgt, dt) {
    if (u.hp < u.max * 0.35) dropFence(S2, u, tgt);
    let ax = tgt.x, ay = tgt.y;
    if (u.hard && (tgt.vx || tgt.vy)) {
      const bulletSpeed = u.weak ? 1150 : 1500;
      const lead = Math.min(0.7, dist(u.x, u.y, tgt.x, tgt.y) / bulletSpeed);
      ax += (tgt.vx || 0) * lead;
      ay += (tgt.vy || 0) * lead;
    }
    const d = dist(u.x, u.y, tgt.x, tgt.y);
    const los = !wallBlocksView(S2, u.x, u.y, tgt.x, tgt.y) && !boulderLine(S2, u.x, u.y, tgt.x, tgt.y);
    if (los && d < 460) {
      faceToward(u, ax, ay, dt, 10);
      botShoot(S2, u, { x: ax, y: ay, ref: tgt.ref }, dt);
      if (d < 140) u.backoff = true;
      else if (d > 180) u.backoff = false;
      if (u.backoff) {
        const ang = Math.atan2(u.y - tgt.y, u.x - tgt.x);
        const nx = u.x + Math.cos(ang) * 120 * dt, ny = u.y + Math.sin(ang) * 120 * dt;
        if (!blocked(S2, nx, ny, 13, { passOwner: u.owner })) {
          u.x = nx;
          u.y = ny;
          u.path = null;
        }
      } else if (u.regenT > 0 || u.retaliateT > 0) {
        u.strafeT -= dt;
        if (u.strafeT <= 0) {
          u.strafeT = AI.STRAFE_FLIP;
          u.strafeS = -u.strafeS;
        }
        const ang = Math.atan2(tgt.y - u.y, tgt.x - u.x) + Math.PI / 2 * u.strafeS;
        const nx = u.x + Math.cos(ang) * 120 * dt, ny = u.y + Math.sin(ang) * 120 * dt;
        if (!blocked(S2, nx, ny, 13, { passOwner: u.owner })) {
          u.x = nx;
          u.y = ny;
          u.path = null;
        }
      }
    } else {
      const st = goto(S2, u, tgt.x, tgt.y, dt, { arrive: 380 });
      if (st === "stuck") {
        u.disengageT = 4;
        u.retaliateT = 0;
        u.defHold = 0;
        u.defTgt = null;
        u.thCache = null;
        if (tgt.ref) {
          u.unreach = tgt.ref;
          u.unreachT = S2.t + 25;
        }
      }
    }
  }
  function botShoot(S2, u, tgt, dt) {
    if (u.gunCd > 0 || u.flying || u.dead) return;
    if (inSafeZone(S2, u.x, u.y) || inSafeZone(S2, tgt.x, tgt.y)) return;
    if (wallBlocksView(S2, u.x, u.y, tgt.x, tgt.y) || boulderLine(S2, u.x, u.y, tgt.x, tgt.y)) return;
    shootAt(S2, u, tgt.x, tgt.y);
  }
  function shootAt(S2, u, tx, ty) {
    const d = dist(u.x, u.y, tx, ty);
    const base = Math.atan2(ty - u.y, tx - u.x);
    u.angle = base;
    const mz = 18;
    if (u.gun === "shotgun" && d < 420) {
      u.gunCd = 0.34;
      for (let i = 0; i < 6; i++) {
        spawnBullet(S2, { x: u.x + Math.cos(base) * mz, y: u.y + Math.sin(base) * mz, angle: base + S2.rng.rand(-0.18, 0.18), speed: 1050, dmg: 8, from: u.owner, life: 0.95 });
      }
    } else if (u.gun === "rifle") {
      u.gunCd = u.hard ? 0.12 : 0.16;
      let spread = u.hard ? 0.02 : 0.055;
      if (u.rifleLaser) spread *= 0.45;
      spawnBullet(S2, { x: u.x + Math.cos(base) * mz, y: u.y + Math.sin(base) * mz, angle: base + S2.rng.rand(-spread, spread), speed: 1500, dmg: u.hard ? 13 : 11, from: u.owner, life: 1.6 });
    } else {
      u.gunCd = 0.3;
      spawnBullet(S2, { x: u.x + Math.cos(base) * mz, y: u.y + Math.sin(base) * mz, angle: base + S2.rng.rand(-0.1, 0.1), speed: 1150, dmg: 7, from: u.owner, life: 1.6 });
    }
    S2.events.push({ type: "botShot", x: u.x, y: u.y, a: base });
  }
  function tryRocket(S2, u, tx, ty, cd) {
    if (u.rkCd > 0 || u.rockets <= 0) return false;
    if (dist(u.x, u.y, tx, ty) < AI.ROCKET_MIN) return false;
    if (inSafeZone(S2, u.x, u.y)) return false;
    u.rkCd = cd || 2.4;
    u.rockets--;
    const a = Math.atan2(ty - u.y, tx - u.x);
    spawnRocket(S2, u.x + Math.cos(a) * 22, u.y + Math.sin(a) * 22, a, u.owner);
    return true;
  }
  function maybeGrenade(S2, u, tgt) {
    if (u.grenades <= 0 || u.gnCd > 0) return;
    const d = dist(u.x, u.y, tgt.x, tgt.y);
    if (d < 150 || d > 380) return;
    let manned = false;
    const p = S2.player;
    if (!p.dead && dist2(tgt.x, tgt.y, p.x, p.y) < 70 * 70) manned = true;
    if (!manned) {
      for (const o of S2.units) if (!o.dead && o.owner !== u.owner && dist2(tgt.x, tgt.y, o.x, o.y) < 70 * 70) {
        manned = true;
        break;
      }
    }
    if (!manned) return;
    u.gnCd = S2.rng.rand(5, 8);
    u.grenades--;
    const a = Math.atan2(tgt.y - u.y, tgt.x - u.x);
    const speed = Math.min(420, d) * 5.4;
    S2.grenades.push({ x: u.x + Math.cos(a) * 22, y: u.y + Math.sin(a) * 22, vx: Math.cos(a) * speed * 0.2, vy: Math.sin(a) * speed * 0.2, t: GRENADE.fuse, from: u.owner, bob: 0 });
    addFloat(S2, u.x, u.y, "grenade!", "#ffd0a0");
  }
  function dropFence(S2, u, tgt) {
    if (u.fenceCd > 0) return;
    const stores = botStores(S2, u);
    let have = 0;
    for (const s of stores) have += s.wood || 0;
    if (have < 10) return;
    const a = Math.atan2(tgt.y - u.y, tgt.x - u.x);
    const fx = u.x + Math.cos(a) * 30, fy = u.y + Math.sin(a) * 30;
    const gx = Math.floor(fx / TILE), gy = Math.floor(fy / TILE);
    if (S2.structures.has(gx + "," + gy)) return;
    let need = 10;
    for (const s of stores) {
      const take = Math.min(need, s.wood || 0);
      s.wood -= take;
      need -= take;
      if (need <= 0) break;
    }
    const pa = a + Math.PI / 2;
    S2.fences.push({
      x: fx,
      y: fy,
      a: pa,
      owner: u.owner,
      hp: 200,
      max: 200,
      t: 60,
      x0: fx - Math.cos(pa) * 23,
      y0: fy - Math.sin(pa) * 23,
      x1: fx + Math.cos(pa) * 23,
      y1: fy + Math.sin(pa) * 23
    });
    if (S2.fences.length > 120) S2.fences.shift();
    S2.needFenceRefresh = true;
    u.fenceCd = 9;
  }

  // src/sim/ai/brain.js
  function updateBrains(S2, dt) {
    for (const [k, w] of S2.walls) {
      if (w.type === "door" && w.open && w.closeT !== void 0 && S2.t > w.closeT) {
        w.open = false;
        S2.nav.stamp++;
      }
    }
    let alive = 0;
    for (const t of S2.teams) {
      if (t.eliminated) continue;
      if (t.bases.some((r) => !r.dead) || S2.units.some((u) => u.owner === t.owner && u.unfounded && !u.eliminated)) alive++;
    }
    S2.aliveBases = alive;
    S2.dbSweepT -= dt;
    if (S2.dbSweepT <= 0) {
      S2.dbSweepT = 2;
      for (const t of S2.teams) for (const r of t.bases) {
        if (!r.dead && !tcOf(S2, r.tcKey)) r.dead = true;
        if (r.dead && !r.cleared) {
          r.cleared = true;
          clearDeadBase(S2, t.owner, r.hx, r.hy);
        }
      }
    }
    S2.aggroT -= dt;
    if (S2.aggroT <= 0) {
      const cur = S2.teams.find((t) => t.owner === S2.aggressorOwner);
      const stillAssaulting = cur && !cur.eliminated && cur.brain.raidTarget && raidTargetRec(S2, cur.brain.raidTarget) && S2.units.some((u) => u.owner === cur.owner && !u.dead && !u.eliminated);
      if (stillAssaulting) S2.aggroT = 8;
      else {
        const candidates = S2.teams.filter((t) => !t.eliminated && S2.units.some((u) => u.owner === t.owner && u.primary && !u.eliminated));
        if (candidates.length) {
          const pick = candidates[Math.floor(S2.rng.next() * candidates.length)];
          S2.aggressor = pick.id;
          S2.aggressorOwner = pick.owner;
        }
        S2.aggroT = S2.rng.rand(35, 55);
      }
    }
    S2.roleT -= dt;
    const doRoles = S2.roleT <= 0;
    if (doRoles) S2.roleT = 0.4;
    for (const team of S2.teams) {
      if (team.eliminated) continue;
      const brain = team.brain;
      const recs = team.bases.filter((r) => !r.dead);
      if (!recs.length) continue;
      const primary = S2.units.find((u) => u.owner === team.owner && u.primary && !u.eliminated);
      brain.statusT -= dt;
      if (brain.statusT <= 0) {
        brain.statusT = 0.5;
        const rec = recs[0];
        brain.breach = findBreach(S2, team, rec);
        brain.damaged = worstDamagedWall(S2, team, rec);
        brain.sealed = !brain.breach;
        let structCount = 2, turrets = 0, floors = 0;
        for (const s of S2.structures.values()) if (s.owner === team.owner) {
          structCount++;
          floors++;
        }
        for (const d of S2.deploys.values()) if (d.owner === team.owner && d.type === "turret") {
          structCount++;
          turrets++;
        }
        const bank2 = teamBank(S2, team);
        const store = bank2 ? bank2.wood + bank2.stone + bank2.metal : 0;
        brain.decaying = store < structCount * UPKEEP * 150;
        const turretGoal = team.hard ? 4 : team.weak ? 2 : 3;
        brain.ready = brain.sealed && turrets >= turretGoal && store > structCount * UPKEEP * 300 && floors >= (team.hard ? 6 : 4);
        brain.floors = floors;
        brain.turrets = turrets;
      }
      if (!doRoles) continue;
      const units = S2.units.filter((u) => u.owner === team.owner && !u.eliminated && !u.dead && !u.flying && !u.unfounded && !u.aboard);
      const near = (x, y) => recs.some((r) => dist2(x, y, r.hx, r.hy) < 720 * 720);
      let atkCount = 0, cx = 0, cy = 0;
      const p = S2.player;
      if (!p.dead && !p.inCopter && !S2.ghost && near(p.x, p.y)) {
        atkCount++;
        cx += p.x;
        cy += p.y;
      }
      for (const u of S2.units) {
        if (u.owner === team.owner || u.dead || u.flying || u.eliminated) continue;
        if (near(u.x, u.y)) {
          atkCount++;
          cx += u.x;
          cy += u.y;
        }
      }
      let urgent = false;
      for (const r of S2.rockets) if (r.from !== team.owner && near(r.x, r.y)) {
        urgent = true;
        break;
      }
      if (!urgent) {
        for (const s of S2.satchels) if (s.from !== team.owner && near(s.x, s.y)) {
          urgent = true;
          break;
        }
      }
      brain.attackers = atkCount;
      brain.urgent = urgent;
      brain.attack = atkCount > 0 || S2.units.some((u) => u.raid === team && u.state === "raid" && !u.dead);
      brain.aggressor = team.owner === S2.aggressorOwner || S2.aliveBases <= 3;
      let inbound = 0;
      if (team.hard) {
        for (const u of S2.units) {
          if (u.owner === team.owner || u.dead || u.eliminated) continue;
          if (u.state === "raid" && u.raid === team && recs.some((r) => dist2(u.x, u.y, r.hx, r.hy) < AI.TRIPWIRE * AI.TRIPWIRE)) inbound++;
        }
      }
      const threat = Math.max(atkCount, inbound);
      const wantDef = urgent ? units.length : threat > 0 ? Math.min(threat + 1, units.length) : 0;
      if (atkCount > 0) {
        cx /= atkCount;
        cy /= atkCount;
      } else {
        cx = recs[0].hx;
        cy = recs[0].hy;
      }
      const sorted = [...units].sort((a, b) => dist2(a.x, a.y, cx, cy) - dist2(b.x, b.y, cx, cy));
      for (let i = 0; i < sorted.length; i++) sorted[i].defDuty = i < wantDef;
      const bank = teamBank(S2, team);
      const needBuild = !brain.sealed || bank && bank.wood >= 40 && brain.floors < (team.hard ? 49 : 36);
      if (needBuild) brain.buildHoldT = S2.t + 6;
      const free = units.filter((u) => !u.defDuty);
      let builder = null;
      if (S2.t < brain.buildHoldT && free.length >= 2) {
        builder = free.find((u) => u.buildDuty) || free.reduce((a, b) => dist2(a.x, a.y, recs[0].hx, recs[0].hy) < dist2(b.x, b.y, recs[0].hx, recs[0].hy) ? a : b, free[0]);
      }
      for (const u of units) u.buildDuty = u === builder;
      if (urgent || atkCount > 0 && !brain.aggressor) {
        brain.raidTarget = null;
        for (const u of units) u.rocketer = false;
      } else if (brain.ready || brain.aggressor) {
        let explosives = 0;
        for (const u of units) explosives += u.rockets + u.satchels;
        const pool = units.filter((u) => !u.defDuty && !u.buildDuty);
        const wantR = Math.min(S2.aliveBases <= 4 ? 3 : 2, pool.length);
        let current = pool.filter((u) => u.rocketer);
        for (const u of units) if (u.rocketer && (u.defDuty || u.buildDuty)) {
          u.rocketer = false;
          current = current.filter((o) => o !== u);
        }
        if (current.length < wantR) {
          const cands = pool.filter((u) => !u.rocketer).sort((a, b) => b.rockets + b.satchels - (a.rockets + a.satchels) || dist2(a.x, a.y, recs[0].hx, recs[0].hy) - dist2(b.x, b.y, recs[0].hx, recs[0].hy));
          for (const c of cands) {
            if (current.length >= wantR) break;
            c.rocketer = true;
            current.push(c);
          }
        }
        const needExpl = brain.aggressor ? 2 : 4;
        const freeCount = units.filter((u) => !u.defDuty).length;
        if (primary && freeCount >= 2 && explosives >= needExpl) {
          if (!brain.raidTarget || !raidTargetRec(S2, brain.raidTarget)) brain.raidTarget = pickRaidTarget(S2, team, primary);
        } else brain.raidTarget = null;
      } else {
        brain.raidTarget = null;
        for (const u of units) u.rocketer = false;
      }
      if (team.hard && S2.t > brain.lootCd && !S2.units.some((u) => u.owner === team.owner && u.lootRun)) {
        let prize = null;
        if (S2.lockedCrate) prize = { x: S2.lockedCrate.x, y: S2.lockedCrate.y, kind: "crate" };
        else if (S2.airdrop) prize = { x: S2.airdrop.x, y: S2.airdrop.gy, kind: "airdrop" };
        else {
          for (const L of S2.loot) {
            if (L.kind !== "rocket" && L.kind !== "satchel") continue;
            let nearBase = false;
            for (const t2 of S2.teams) {
              if (t2 === team || t2.eliminated) continue;
              if (t2.bases.some((r) => !r.dead && dist2(L.x, L.y, r.hx, r.hy) < 800 * 800)) {
                nearBase = true;
                break;
              }
            }
            if (!nearBase) {
              prize = { x: L.x, y: L.y, kind: "pile" };
              break;
            }
          }
        }
        if (prize) {
          const runner = S2.units.filter((u) => u.owner === team.owner && !u.dead && !u.eliminated && !u.primary && !u.defDuty && !u.buildDuty && !u.rocketer && !u.monRun && u.state === "gather").sort((a, b) => dist2(a.x, a.y, prize.x, prize.y) - dist2(b.x, b.y, prize.x, prize.y))[0];
          if (runner) {
            const trek = dist(runner.x, runner.y, prize.x, prize.y);
            const minTrek = prize.kind === "pile" ? 520 : 2400;
            if (trek > minTrek && trek < 4500) {
              runner.lootRun = { x: prize.x, y: prize.y, kind: prize.kind, until: S2.t + trek / AI.BOT_SPEED * 1.8 + (prize.kind === "crate" ? 170 : 20) };
              brain.lootCd = S2.t + 45;
            }
          }
        }
      }
      if (S2.quarry && S2.quarry.owner !== team.owner && S2.t > brain.qCd && !S2.units.some((u) => u.owner === team.owner && u.qRun)) {
        const runner = S2.units.filter((u) => u.owner === team.owner && !u.dead && !u.eliminated && !u.primary && !u.defDuty && !u.buildDuty && !u.rocketer && !u.monRun && !u.lootRun && u.state === "gather").sort((a, b) => dist2(a.x, a.y, S2.quarry.x, S2.quarry.y) - dist2(b.x, b.y, S2.quarry.x, S2.quarry.y))[0];
        if (runner) {
          const trek = dist(runner.x, runner.y, S2.quarry.x, S2.quarry.y);
          if (trek < 5200) {
            runner.qRun = { until: S2.t + trek / AI.BOT_SPEED * 1.8 + 25 };
            brain.qCd = S2.t + (team.hard ? 90 : 150);
          }
        }
      }
      if (team.hard && primary && !S2.signal && !S2.plane && !S2.airdrop && S2.t > brain.sigCd) {
        const bank2 = teamBank(S2, team);
        const funds = primary.scrap + (bank2 ? bank2.scrap : 0);
        if (funds >= AI.SIGNAL_COST + 60) {
          const rec = recs[0];
          for (let s = 0; s < 8; s++) {
            const a = s / 8 * Math.PI * 2;
            const x = rec.hx + Math.cos(a) * 620, y = rec.hy + Math.sin(a) * 620;
            if (x < 300 || y < 300 || x > WORLD.w - 300 || y > WORLD.h - 300) continue;
            if (dist(x, y, S2.world.shop.x, S2.world.shop.y) < SAFE_R) continue;
            if (!S2.world.onLand(x, y) || S2.world.lakeAt(x, y)) continue;
            let pay = AI.SIGNAL_COST;
            const fromPocket = Math.min(pay, primary.scrap);
            primary.scrap -= fromPocket;
            pay -= fromPocket;
            if (pay > 0 && bank2) bank2.scrap -= pay;
            aiSupplySignal(S2, x, y);
            brain.sigCd = S2.t + S2.rng.rand(150, 240);
            addFloat(S2, rec.hx, rec.hy - 40, "supply signal!", "#c9a0ff");
            break;
          }
        }
      }
    }
    for (const team of S2.teams) if (!team.eliminated) expandTeamBases(S2, team, dt);
    let bk = 0, bid = null;
    for (const team of S2.teams) {
      if (team.eliminated) continue;
      let kills = 0;
      for (const u of S2.units) if (u.owner === team.owner) kills += u.kills;
      if (kills > bk) {
        bk = kills;
        bid = team.id;
      }
    }
    S2.bounty = bk > 0 ? bid : null;
    if (!S2.metrics.winner) {
      const alive2 = S2.teams.filter((t) => !t.eliminated);
      if (alive2.length === 1 && S2.teams.length > 1) {
        S2.metrics.winner = alive2[0].owner;
        S2.metrics.decisiveT = S2.t;
      }
    }
  }

  // src/sim/sim.js
  function step(S2) {
    const dt = DT;
    S2.t += dt;
    S2.tick++;
    if (!S2.clouds) buildAmbient(S2);
    if (S2.needFenceRefresh) {
      S2.needFenceRefresh = false;
      refreshFenceCells(S2);
    }
    updatePlayer(S2, dt);
    updateRockets(S2, dt);
    updateAnimals(S2, dt);
    updateGuards(S2, dt);
    updateTurrets(S2, dt);
    updateDecay(S2, dt);
    updateWeather(S2, dt);
    updateAmbient(S2, dt);
    updateTrains(S2, dt);
    updateConvoys(S2, dt);
    updateAirdrop(S2, dt);
    updateQuarry(S2, dt);
    updateSignals(S2, dt);
    updatePatrol(S2, dt);
    updateLockedCrate(S2, dt);
    updateFires(S2, dt);
    updateWrecks(S2, dt);
    updateSatchels(S2, dt);
    updateGrenades(S2, dt);
    ageFences(S2, dt);
    ageRaids(S2, dt);
    if (S2.raidAlarm) {
      S2.raidAlarm.t -= dt;
      if (S2.raidAlarm.t <= 0) S2.raidAlarm = null;
    }
    updateBrains(S2, dt);
    updateTransports(S2, dt);
    for (const u of S2.units) updateUnit(S2, u, dt);
    for (let i = S2.elims.length - 1; i >= 0; i--) {
      S2.elims[i].t -= dt;
      if (S2.elims[i].t <= 0) S2.elims.splice(i, 1);
    }
    updateBullets(S2, dt);
    updateLoot(S2, dt);
    updateRespawns(S2, dt);
    for (let i = S2.particles.length - 1; i >= 0; i--) {
      const p = S2.particles[i];
      const f = Math.pow(0.9, dt * 60);
      p.vx *= f;
      p.vy *= f;
      p.x += p.vx * dt;
      p.y += p.vy * dt;
      p.life -= dt;
      if (p.life <= 0) S2.particles.splice(i, 1);
    }
    for (let i = S2.floats.length - 1; i >= 0; i--) {
      const f = S2.floats[i];
      f.y += f.vy * dt;
      f.life -= dt;
      if (f.life <= 0) S2.floats.splice(i, 1);
    }
    for (let i = S2.flashes.length - 1; i >= 0; i--) {
      S2.flashes[i].life -= dt;
      if (S2.flashes[i].life <= 0) S2.flashes.splice(i, 1);
    }
    for (let i = S2.blasts.length - 1; i >= 0; i--) {
      S2.blasts[i].life -= dt;
      if (S2.blasts[i].life <= 0) S2.blasts.splice(i, 1);
    }
    if (S2.muzzle) {
      S2.muzzle.t -= dt;
      if (S2.muzzle.t <= 0) S2.muzzle = null;
    }
    S2.shake = Math.max(0, S2.shake - 26 * dt);
    if (S2.tip) {
      S2.tip.t -= dt;
      if (S2.tip.t <= 0) S2.tip = null;
    }
    if (S2.events.length > 600) S2.events.splice(0, S2.events.length - 600);
    if (S2.tick % 120 === 0) audit(S2);
  }
  function ageFences(S2, dt) {
    for (let i = S2.fences.length - 1; i >= 0; i--) {
      const f = S2.fences[i];
      f.t -= dt;
      if (f.t <= 0) {
        S2.fences.splice(i, 1);
        S2.needFenceRefresh = true;
      }
    }
  }
  function ageRaids(S2, dt) {
    for (let i = S2.raids.length - 1; i >= 0; i--) {
      S2.raids[i].t -= dt;
      if (S2.raids[i].t <= 0) S2.raids.splice(i, 1);
    }
  }
  function wallOverlap(S2, u) {
    const gx = Math.floor(u.x / 64), gy = Math.floor(u.y / 64);
    for (const k of ["V," + gx + "," + gy, "V," + (gx + 1) + "," + gy, "H," + gx + "," + gy, "H," + gx + "," + (gy + 1)]) {
      const w = S2.walls.get(k);
      if (!w || w.hp <= 0 || w.type === "door" && w.open) continue;
      if (w.owner === u.owner) continue;
      const s = wallSegOf(k, w);
      if (ptSeg(u.x, u.y, s[0], s[1], s[2], s[3]) < 3) return true;
    }
    return false;
  }
  function audit(S2) {
    const m = S2.metrics;
    for (const u of S2.units) {
      if (u.dead || u.eliminated) continue;
      if (!isFinite(u.x) || !isFinite(u.y)) {
        m.nan = (m.nan || 0) + 1;
        u.x = u.hx;
        u.y = u.hy;
      }
      if (wallOverlap(S2, u)) m.wallPhase++;
      if (u.stuckT > 1.5 && u.state !== "raid") {
        const inLake = S2.world.lakeAt(u.x, u.y);
        let region = "open";
        if (Math.abs(u.x - u.hx) < 460 && Math.abs(u.y - u.hy) < 460) region = "base";
        else if (inLake) region = "lake";
        else {
          for (const mo of S2.world.monuments) if ((u.x - mo.x) ** 2 + (u.y - mo.y) ** 2 < (mo.r + 220) ** 2) {
            region = "monument";
            break;
          }
        }
        m.regionStuck[region] += 2;
      }
    }
    if (!isFinite(S2.player.x) || !isFinite(S2.player.y)) {
      m.nan = (m.nan || 0) + 1;
      S2.player.x = 6912;
      S2.player.y = 4868;
    }
    if (S2.t - (m._wlT || 0) >= 60) {
      m._wlT = S2.t;
      const row = { t: Math.round(S2.t) };
      for (const t of S2.teams) row[t.owner] = S2.units.filter((u) => u.owner === t.owner && !u.eliminated).length;
      m.workerLog.push(row);
    }
  }

  // src/client/render/palette.js
  var PAL = {
    ocean0: "#0d2b35",
    ocean1: "#081b24",
    wave: "rgba(140,190,205,0.08)",
    sand: "#b3a075",
    sandWet: "#8d7d5c",
    iceShore: "#ccdbe4",
    desert0: "#b59a66",
    desert1: "#8c7544",
    desertPatch: "rgba(120,96,52,.4)",
    jungle0: "#4a5c30",
    jungle1: "#2c3a1c",
    junglePatch: "rgba(26,40,16,.5)",
    winter0: "#b9c7d1",
    winter1: "#8a9aa8",
    winterPatch: "rgba(225,236,243,.5)",
    road0: "#4f4430",
    road1: "#665838",
    roadWear: "rgba(30,25,16,.25)",
    rail: "#9aa1a8",
    tie: "#3a2e1d",
    ballast0: "#574d40",
    ballast1: "#6b5f4e",
    ink: "#171510",
    shadow: "rgba(10,9,6,0.35)",
    woodDk: "#5d3f1e",
    wood: "#8a6230",
    woodLt: "#b08348",
    stoneDk: "#565c63",
    stone: "#7f868d",
    stoneLt: "#a5acb3",
    metalDk: "#3c4147",
    metal: "#585f66",
    metalLt: "#7d8893",
    armorDk: "#272f3c",
    armor: "#41526b",
    armorLt: "#7f93ad",
    tcGold: "#c89d48",
    skin: "#c79c74",
    tracer: "#ffe9a3",
    hmgTracer: "#ff5a2a",
    ricochet: "#86d8ff",
    flash: "#ffd76b",
    blood: "#7e2317",
    explosion: "#ffb24a",
    laser: "rgba(255,46,40,0.5)",
    player: "#7a8a50",
    playerDk: "#4d5732",
    guard: "#bd5e2c",
    guardDk: "#7e3318",
    night: "#060b1c"
  };
  function matCols(mat) {
    if (mat === "stone") return { dk: PAL.stoneDk, mid: PAL.stone, lt: PAL.stoneLt };
    if (mat === "metal") return { dk: PAL.metalDk, mid: PAL.metal, lt: PAL.metalLt };
    if (mat === "armored") return { dk: PAL.armorDk, mid: PAL.armor, lt: PAL.armorLt };
    return { dk: PAL.woodDk, mid: PAL.wood, lt: PAL.woodLt };
  }
  function rrect(ctx, x, y, w, h, r) {
    ctx.beginPath();
    if (ctx.roundRect) ctx.roundRect(x, y, w, h, r);
    else ctx.rect(x, y, w, h);
  }
  function fillRR(ctx, x, y, w, h, r, col) {
    ctx.fillStyle = col;
    rrect(ctx, x, y, w, h, r);
    ctx.fill();
  }
  function vgrad(ctx, x, y, w, h, c0, c1) {
    const g = ctx.createLinearGradient(0, y, 0, y + h);
    g.addColorStop(0, c0);
    g.addColorStop(1, c1);
    return g;
  }
  function rgrad(ctx, x, y, r, c0, c1) {
    const g = ctx.createRadialGradient(x - 0.32 * r, y - 0.32 * r, r * 0.1, x, y, r);
    g.addColorStop(0, c0);
    g.addColorStop(1, c1);
    return g;
  }
  function shadow(ctx, x, y, r) {
    const g = ctx.createRadialGradient(x, y, 0, x, y, r);
    g.addColorStop(0, "rgba(8,7,5,.34)");
    g.addColorStop(0.6, "rgba(8,7,5,.18)");
    g.addColorStop(1, "rgba(8,7,5,0)");
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.ellipse(x, y, r, r * 0.55, 0, 0, Math.PI * 2);
    ctx.fill();
  }
  function blob(ctx, x, y, r, seed2) {
    ctx.beginPath();
    for (let i = 0; i <= 9; i++) {
      const a = i / 9 * Math.PI * 2;
      const rr = r * (0.84 + 0.18 * Math.sin(3 * a + seed2));
      const px = x + Math.cos(a) * rr, py = y + Math.sin(a) * rr;
      i ? ctx.lineTo(px, py) : ctx.moveTo(px, py);
    }
    ctx.closePath();
  }
  function poly(ctx, x, y, r, n, seed2) {
    ctx.beginPath();
    for (let i = 0; i <= n; i++) {
      const a = i / n * Math.PI * 2;
      const rr = r * (0.78 + 0.26 * Math.sin(2.3 * i + seed2));
      const px = x + Math.cos(a) * rr, py = y + Math.sin(a) * rr;
      i ? ctx.lineTo(px, py) : ctx.moveTo(px, py);
    }
    ctx.closePath();
  }
  function hpRing(ctx, x, y, r, frac, col) {
    if (frac >= 1) return;
    ctx.lineWidth = 3;
    ctx.strokeStyle = "rgba(0,0,0,.6)";
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.stroke();
    ctx.strokeStyle = col;
    ctx.beginPath();
    ctx.arc(x, y, r, -Math.PI / 2, -Math.PI / 2 + frac * Math.PI * 2);
    ctx.stroke();
  }

  // src/client/render/terrain.js
  var CHUNK = 512;
  function makeTerrain(S2) {
    const cols = Math.ceil(WORLD.w / CHUNK), rows = Math.ceil(WORLD.h / CHUNK);
    const chunks = new Array(cols * rows).fill(null);
    function biomeCols(x, y) {
      const t = (x + S2.world.biomeRidge(y)) / WORLD.w;
      const tw = 0.05;
      const dj = smooth01((t - (1 / 3 - tw)) / (2 * tw));
      const jw = smooth01((t - (2 / 3 - tw)) / (2 * tw));
      const mix = (a, b, f) => [a[0] + (b[0] - a[0]) * f, a[1] + (b[1] - a[1]) * f, a[2] + (b[2] - a[2]) * f];
      const des = [181, 154, 102], jun = [74, 92, 48], win = [185, 199, 209];
      let c = mix(des, jun, dj);
      c = mix(c, win, jw);
      return c;
    }
    function traceIsland(c, ox, oy) {
      c.beginPath();
      S2.world.islandPath.forEach((p, i) => {
        i ? c.lineTo(p.x - ox, p.y - oy) : c.moveTo(p.x - ox, p.y - oy);
      });
      c.closePath();
    }
    function bake(ci) {
      const cgx = ci % cols, cgy = ci / cols | 0;
      const ox = cgx * CHUNK, oy = cgy * CHUNK;
      const cv = document.createElement("canvas");
      cv.width = CHUNK;
      cv.height = CHUNK;
      const c = cv.getContext("2d");
      c.fillStyle = PAL.ocean0;
      c.fillRect(0, 0, CHUNK, CHUNK);
      c.save();
      c.lineJoin = "round";
      c.strokeStyle = "rgba(64,124,134,0.45)";
      c.lineWidth = 64;
      traceIsland(c, ox, oy);
      c.stroke();
      c.strokeStyle = "rgba(90,150,158,0.30)";
      c.lineWidth = 26;
      traceIsland(c, ox, oy);
      c.stroke();
      c.restore();
      c.save();
      traceIsland(c, ox, oy);
      c.clip();
      const CS = 32;
      for (let y = 0; y < CHUNK; y += CS) {
        for (let x = 0; x < CHUNK; x += CS) {
          const wx = ox + x + CS / 2, wy = oy + y + CS / 2;
          const lf = S2.world.landFactor(wx, wy);
          if (lf <= -0.25) continue;
          let [r, g, b] = biomeCols(wx, wy);
          const n = hash2(wx / CS | 0, wy / CS | 0);
          const n2 = hash2(wx / 96 | 0, wy / 96 | 0);
          const shade2 = 0.88 + n * 0.14 + (n2 - 0.5) * 0.12 - wy / WORLD.h * 0.06;
          r *= shade2;
          g *= shade2;
          b *= shade2;
          c.fillStyle = `rgb(${r | 0},${g | 0},${b | 0})`;
          c.fillRect(x - 1, y - 1, CS + 2, CS + 2);
        }
      }
      c.lineCap = "round";
      const ipath = S2.world.islandPath;
      for (let pass = 0; pass < 3; pass++) {
        const lw = pass === 0 ? 96 : pass === 1 ? 30 : 7;
        for (let i = 0; i < ipath.length; i++) {
          const a = ipath[i], b2 = ipath[(i + 1) % ipath.length];
          if (Math.min(a.x, b2.x) > ox + CHUNK + lw || Math.max(a.x, b2.x) < ox - lw) continue;
          if (Math.min(a.y, b2.y) > oy + CHUNK + lw || Math.max(a.y, b2.y) < oy - lw) continue;
          const winter = S2.world.biomeAt((a.x + b2.x) / 2, (a.y + b2.y) / 2) === "winter";
          c.strokeStyle = pass === 0 ? winter ? "rgba(214,227,235,0.95)" : "rgba(186,166,120,0.95)" : pass === 1 ? winter ? "rgba(168,190,204,0.9)" : "rgba(146,128,92,0.9)" : "rgba(240,248,252,0.55)";
          c.lineWidth = lw;
          c.beginPath();
          c.moveTo(a.x - ox, a.y - oy);
          c.lineTo(b2.x - ox, b2.y - oy);
          c.stroke();
        }
      }
      for (let y = 0; y < CHUNK; y += 48) {
        for (let x = 0; x < CHUNK; x += 48) {
          const wx = ox + x, wy = oy + y;
          if (!S2.world.onLand(wx, wy) || S2.world.lakeAt(wx, wy)) continue;
          const cx = wx / 48 | 0, cy = wy / 48 | 0;
          const h = hash2(cx, cy);
          const biome = S2.world.biomeAt(wx, wy);
          const lx = x + (hash2(cx + 7, cy) - 0.5) * 40 + 24;
          const ly = y + (hash2(cx, cy + 13) - 0.5) * 40 + 24;
          if (h < 0.09) {
            if (biome === "desert") {
              c.fillStyle = "rgba(120,96,52,.35)";
              c.beginPath();
              c.ellipse(lx, ly, 8, 2.6, h * 6, 0, 7);
              c.fill();
            } else if (biome === "winter") {
              c.strokeStyle = "rgba(225,236,243,.6)";
              c.lineWidth = 1.5;
              c.beginPath();
              c.moveTo(lx - 5, ly + 2);
              c.quadraticCurveTo(lx, ly - 5, lx + 5, ly + 1);
              c.stroke();
            } else {
              c.strokeStyle = `rgba(${60 + h * 220 | 0},116,44,.65)`;
              c.lineWidth = 1.5;
              for (let bl = -1; bl <= 1; bl++) {
                c.beginPath();
                c.moveTo(lx + bl * 2.4, ly + 3);
                c.quadraticCurveTo(lx + bl * 3.6, ly - 3, lx + bl * 5, ly - 6.5);
                c.stroke();
              }
            }
          }
          const hr = hash2(3 * cx + 11, 5 * cy + 7);
          if (hr > 0.93) {
            const pr = 2.2 + hr * 3;
            const cols2 = biome === "winter" ? ["#dfe7ee", "#b4c5d2"] : biome === "desert" ? ["#a8905c", "#7d6940"] : ["#7e848c", "#565b62"];
            c.fillStyle = cols2[1];
            c.beginPath();
            c.ellipse(lx + 14, ly + 10, pr, pr * 0.75, 0.4, 0, 7);
            c.fill();
            c.fillStyle = cols2[0];
            c.beginPath();
            c.ellipse(lx + 13.4, ly + 9.4, pr * 0.7, pr * 0.5, 0.4, 0, 7);
            c.fill();
          }
          const hg = hash2(2 * cx + 5, 9 * cy + 1);
          if (biome === "jungle" && hg > 0.78) {
            c.strokeStyle = `rgba(96,150,60,${0.3 + 0.3 * hg})`;
            c.lineWidth = 1.4;
            for (let f = -1; f <= 1; f++) {
              c.beginPath();
              c.moveTo(lx - 14, ly + 16);
              c.quadraticCurveTo(lx - 14 + f * 5, ly + 6, lx - 14 + f * 9, ly + 1);
              c.stroke();
            }
          } else if (biome === "desert" && hg > 0.92) {
            c.fillStyle = "#4e7a3a";
            c.fillRect(lx + 6, ly - 18, 3.6, 13);
            c.fillRect(lx + 2, ly - 14, 4, 3);
            c.fillRect(lx + 9.6, ly - 16, 4, 3);
          } else if (biome === "winter" && hg > 0.88) {
            c.fillStyle = "rgba(240,248,253,.7)";
            c.beginPath();
            c.ellipse(lx, ly + 12, 5 + 4 * hg, 3 + 2 * hg, 0, 0, 7);
            c.fill();
          }
        }
      }
      for (const m of S2.world.monuments) {
        if (m.x + m.r < ox || m.x - m.r > ox + CHUNK || m.y + m.r < oy || m.y - m.r > oy + CHUNK) continue;
        const g = c.createRadialGradient(m.x - ox, m.y - oy, m.r * 0.2, m.x - ox, m.y - oy, m.r);
        g.addColorStop(0, "rgba(110,106,95,.5)");
        g.addColorStop(0.8, "rgba(98,94,84,.32)");
        g.addColorStop(1, "rgba(90,86,76,0)");
        c.fillStyle = g;
        c.beginPath();
        c.arc(m.x - ox, m.y - oy, m.r, 0, 7);
        c.fill();
        c.strokeStyle = "rgba(40,38,32,.4)";
        c.lineWidth = 1.2;
        for (let k = 0; k < 5; k++) {
          const a = hash2(k, m.x | 0) * 6.28;
          c.beginPath();
          c.moveTo(m.x - ox + Math.cos(a) * m.r * 0.2, m.y - oy + Math.sin(a) * m.r * 0.2);
          c.lineTo(m.x - ox + Math.cos(a + 0.4) * m.r * 0.7, m.y - oy + Math.sin(a + 0.4) * m.r * 0.7);
          c.stroke();
        }
      }
      c.lineCap = "round";
      c.lineJoin = "round";
      for (const rd of S2.world.roads) {
        for (let i = 0; i < rd.pts.length - 1; i++) {
          const a = rd.pts[i], b = rd.pts[i + 1];
          if (Math.max(a.x, b.x) < ox - 60 || Math.min(a.x, b.x) > ox + CHUNK + 60) continue;
          if (Math.max(a.y, b.y) < oy - 60 || Math.min(a.y, b.y) > oy + CHUNK + 60) continue;
          const fade = Math.min(rd.fade[i], rd.fade[i + 1]);
          if (fade <= 0.02) continue;
          c.globalAlpha = fade;
          c.strokeStyle = PAL.road0;
          c.lineWidth = rd.w;
          c.beginPath();
          c.moveTo(a.x - ox, a.y - oy);
          c.lineTo(b.x - ox, b.y - oy);
          c.stroke();
          c.strokeStyle = PAL.road1;
          c.lineWidth = rd.w - 4;
          c.beginPath();
          c.moveTo(a.x - ox, a.y - oy);
          c.lineTo(b.x - ox, b.y - oy);
          c.stroke();
          const ang = Math.atan2(b.y - a.y, b.x - a.x);
          const px = -Math.sin(ang), py = Math.cos(ang);
          c.strokeStyle = PAL.roadWear;
          c.lineWidth = 3;
          for (const off of [-rd.w * 0.22, rd.w * 0.22]) {
            c.beginPath();
            c.moveTo(a.x - ox + px * off, a.y - oy + py * off);
            c.lineTo(b.x - ox + px * off, b.y - oy + py * off);
            c.stroke();
          }
          c.globalAlpha = 1;
        }
      }
      const GA = 11;
      for (const rl of S2.world.rails) {
        for (let i = 0; i < rl.pts.length - 1; i++) {
          const a = rl.pts[i], b = rl.pts[i + 1];
          if (Math.max(a.x, b.x) < ox - 60 || Math.min(a.x, b.x) > ox + CHUNK + 60) continue;
          if (Math.max(a.y, b.y) < oy - 60 || Math.min(a.y, b.y) > oy + CHUNK + 60) continue;
          c.strokeStyle = PAL.ballast0;
          c.lineWidth = 2 * GA + 16;
          c.beginPath();
          c.moveTo(a.x - ox, a.y - oy);
          c.lineTo(b.x - ox, b.y - oy);
          c.stroke();
          c.strokeStyle = PAL.ballast1;
          c.lineWidth = 2 * GA + 7;
          c.beginPath();
          c.moveTo(a.x - ox, a.y - oy);
          c.lineTo(b.x - ox, b.y - oy);
          c.stroke();
          const len = Math.hypot(b.x - a.x, b.y - a.y);
          const ang = Math.atan2(b.y - a.y, b.x - a.x);
          const px = -Math.sin(ang), py = Math.cos(ang);
          c.strokeStyle = PAL.tie;
          c.lineWidth = 4.5;
          for (let d = 8; d < len; d += 24) {
            const tx = a.x + Math.cos(ang) * d - ox, ty = a.y + Math.sin(ang) * d - oy;
            c.beginPath();
            c.moveTo(tx - px * (GA + 5), ty - py * (GA + 5));
            c.lineTo(tx + px * (GA + 5), ty + py * (GA + 5));
            c.stroke();
          }
          c.strokeStyle = PAL.rail;
          c.lineWidth = 2.6;
          for (const off of [-GA, GA]) {
            c.beginPath();
            c.moveTo(a.x - ox + px * off, a.y - oy + py * off);
            c.lineTo(b.x - ox + px * off, b.y - oy + py * off);
            c.stroke();
          }
        }
      }
      for (const rd of S2.world.roads) {
        for (const p of rd.poles) {
          if (p.x < ox - 30 || p.x > ox + CHUNK + 30 || p.y < oy - 40 || p.y > oy + CHUNK + 40) continue;
          const x = p.x - ox, y = p.y - oy;
          c.fillStyle = "rgba(10,9,6,.3)";
          c.beginPath();
          c.ellipse(x, y + 2, 7, 3, 0, 0, 7);
          c.fill();
          c.fillStyle = "#33291d";
          c.fillRect(x - 2, y - 29, 4, 31);
          c.fillStyle = "#463a28";
          c.fillRect(x - 9, y - 27, 18, 3);
          c.fillStyle = "#1c160e";
          c.fillRect(x - 7.5, y - 31, 2.5, 5);
          c.fillRect(x + 5, y - 31, 2.5, 5);
        }
      }
      c.restore();
      return cv;
    }
    return {
      draw(ctx, cam, view2) {
        const v = cam.viewRect(40);
        const c0x = clamp(v.x0 / CHUNK | 0, 0, cols - 1), c1x = clamp(v.x1 / CHUNK | 0, 0, cols - 1);
        const c0y = clamp(v.y0 / CHUNK | 0, 0, rows - 1), c1y = clamp(v.y1 / CHUNK | 0, 0, rows - 1);
        for (let cy = c0y; cy <= c1y; cy++) {
          for (let cx = c0x; cx <= c1x; cx++) {
            const i = cy * cols + cx;
            if (!chunks[i]) chunks[i] = bake(i);
            ctx.drawImage(chunks[i], cx * CHUNK, cy * CHUNK);
          }
        }
      }
    };
  }

  // src/client/render/lighting.js
  function makeLighting(S2, view2, cam) {
    const cv = document.createElement("canvas");
    const c = cv.getContext("2d");
    function lightLevel() {
      return 0.5 + 0.5 * Math.cos(Math.PI * 2 * (S2.t % DAY_LEN / DAY_LEN));
    }
    function addLight(lx, ly, r, intensity) {
      const p = cam.worldToScreen(lx, ly);
      const sr = r * cam.zoom;
      if (p.x < -sr || p.y < -sr || p.x > view2.VW + sr || p.y > view2.VH + sr) return;
      const g = c.createRadialGradient(p.x / 2, p.y / 2, 0, p.x / 2, p.y / 2, sr / 2);
      g.addColorStop(0, `rgba(255,255,255,${intensity})`);
      g.addColorStop(1, "rgba(255,255,255,0)");
      c.fillStyle = g;
      c.beginPath();
      c.arc(p.x / 2, p.y / 2, sr / 2, 0, 7);
      c.fill();
    }
    return {
      lightLevel,
      draw(ctx) {
        return;
        if (view2.godView) return;
        const light = lightLevel();
        const dark = 1 - light;
        if (dark < 0.04) return;
        const w = Math.ceil(view2.VW / 2), h = Math.ceil(view2.VH / 2);
        if (cv.width !== w || cv.height !== h) {
          cv.width = w;
          cv.height = h;
        }
        const duskiness = Math.sin(Math.min(1, dark) * Math.PI);
        c.globalCompositeOperation = "source-over";
        const nightA = Math.min(0.08, dark * 0.09);
        c.fillStyle = `rgba(12,18,34,${nightA})`;
        c.fillRect(0, 0, w, h);
        if (duskiness > 0.1) {
          c.fillStyle = `rgba(150,82,30,${duskiness * 0.05})`;
          c.fillRect(0, 0, w, h);
        }
        c.globalCompositeOperation = "destination-out";
        const lit = Math.min(1, dark * 1.2);
        for (const f of S2.fires) addLight(f.x, f.y, 150 + Math.sin(S2.t * 9 + f.x) * 14, 0.85 * lit);
        for (const wreck of S2.wrecks) addLight(wreck.x, wreck.y, 120, 0.7 * lit);
        if (S2.muzzle) addLight(S2.muzzle.x, S2.muzzle.y, 130, 0.8 * lit);
        for (const fl of S2.flashes) addLight(fl.x, fl.y, fl.r * 2.4 * (fl.life / fl.max), 0.95 * lit);
        addLight(S2.world.shop.x, S2.world.shop.y, 320, 0.5 * lit);
        if (dark > 0.45) {
          for (const [k, d] of S2.deploys) {
            if (d.type !== "cupboard" && d.type !== "turret") continue;
            const [gx, gy] = k.split(",").map(Number);
            addLight(gx * 64 + 32, gy * 64 + 32, d.type === "cupboard" ? 70 : 46, 0.25 * lit);
          }
          for (const u of S2.units) {
            if (u.dead || u.eliminated) continue;
            addLight(u.x, u.y, 60, 0.18 * lit);
          }
          addLight(S2.player.x, S2.player.y, 130, 0.4 * lit);
        }
        c.globalCompositeOperation = "source-over";
        ctx.drawImage(cv, 0, 0, view2.VW, view2.VH);
      }
    };
  }

  // src/client/render/weather.js
  function makeWeather(S2, view2, cam) {
    let flakes = null, drops = null, bolt = null, boltT = 0;
    function ensureParticles() {
      if (!flakes) {
        flakes = [];
        for (let i = 0; i < 340; i++) flakes.push({ x: Math.random(), y: Math.random(), sp: 0.1 + Math.random() * 0.22, r: 1 + Math.random() * 2.3, drift: Math.random() * 7, near: Math.random() < 0.4 });
        drops = [];
        for (let i = 0; i < 460; i++) drops.push({ x: Math.random(), y: Math.random(), sp: 0.45 + Math.random() * 1.15, len: 7 + Math.random() * 15, near: Math.random() < 0.34 });
      }
    }
    return {
      drawWorld(ctx) {
        const W = S2.weather;
        if (W.fog > 0.02 && S2.fogBanks) {
          for (const f of S2.fogBanks) {
            if (!cam.inView(f.x, f.y, f.r * 1.6)) continue;
            if (S2.world.biomeAt(f.x, f.y) === "winter") continue;
            for (const p of f.puffs) {
              const a = W.fog * f.dens * 0.6;
              const g = ctx.createRadialGradient(f.x + p.dx, f.y + p.dy, p.r * 0.15, f.x + p.dx, f.y + p.dy, p.r);
              g.addColorStop(0, `rgba(216,224,232,${a})`);
              g.addColorStop(0.5, `rgba(213,221,230,${a * 0.5})`);
              g.addColorStop(1, "rgba(210,218,228,0)");
              ctx.fillStyle = g;
              ctx.beginPath();
              ctx.ellipse(f.x + p.dx, f.y + p.dy, p.r, p.r * 0.82, 0, 0, 7);
              ctx.fill();
            }
          }
        }
        if (S2.fireflies) {
          const dark = 1 - (0.5 + 0.5 * Math.cos(Math.PI * 2 * (S2.t % 240 / 240)));
          ctx.globalCompositeOperation = "lighter";
          for (const ff of S2.fireflies) {
            if (!cam.inView(ff.x, ff.y, 30)) continue;
            if (S2.world.biomeAt(ff.x, ff.y) !== "jungle") continue;
            const boost = 0.45 + 0.4 * dark + 0.45 * Math.min(1, S2.weather.fog);
            const a = clamp(boost * (0.6 + 0.4 * Math.sin(ff.ph)), 0, 1);
            const g = ctx.createRadialGradient(ff.x, ff.y, 0, ff.x, ff.y, 7);
            g.addColorStop(0, `rgba(216,255,134,${0.9 * a})`);
            g.addColorStop(1, "rgba(150,220,90,0)");
            ctx.fillStyle = g;
            ctx.beginPath();
            ctx.arc(ff.x, ff.y, 7, 0, 7);
            ctx.fill();
            ctx.fillStyle = `rgba(240,255,205,${a})`;
            ctx.beginPath();
            ctx.arc(ff.x, ff.y, 1.4, 0, 7);
            ctx.fill();
          }
          ctx.globalCompositeOperation = "source-over";
        }
      },
      drawCloudShadows(ctx) {
        if (!S2.clouds) return;
        for (const cl of S2.clouds) {
          if (!cam.inView(cl.x + 64, cl.y + 86, cl.r * 1.6)) continue;
          for (const p of cl.puffs) {
            const a = (cl.heavy ? 0.3 : 0.18) * cl.op;
            const g = ctx.createRadialGradient(cl.x + p.dx + 64, cl.y + p.dy + 86, p.r * 0.2, cl.x + p.dx + 64, cl.y + p.dy + 86, p.r);
            g.addColorStop(0, `rgba(12,17,27,${a})`);
            g.addColorStop(1, "rgba(12,17,27,0)");
            ctx.fillStyle = g;
            ctx.beginPath();
            ctx.ellipse(cl.x + p.dx + 64, cl.y + p.dy + 86, p.r, p.r * 0.74, 0, 0, 7);
            ctx.fill();
          }
        }
      },
      drawClouds(ctx, lightLevel) {
        if (!S2.clouds) return;
        const bright = 0.6 + 0.4 * lightLevel;
        for (const cl of S2.clouds) {
          if (!cam.inView(cl.x, cl.y, cl.r * 1.6)) continue;
          for (const p of cl.puffs) {
            const a0 = (cl.heavy ? 0.72 : 0.42) * cl.op;
            const g = ctx.createRadialGradient(cl.x + p.dx, cl.y + p.dy, p.r * 0.15, cl.x + p.dx, cl.y + p.dy, p.r);
            g.addColorStop(0, `rgba(${248 * bright | 0},${250 * bright | 0},${253 * bright | 0},${a0})`);
            g.addColorStop(1, "rgba(244,248,252,0)");
            ctx.fillStyle = g;
            ctx.beginPath();
            ctx.ellipse(cl.x + p.dx, cl.y + p.dy, p.r, p.r * 0.78, 0, 0, 7);
            ctx.fill();
          }
        }
      },
      // screen-space precipitation; biome blend by camera position
      drawScreen(ctx) {
        const W = S2.weather;
        if (W.rain <= 0.02) {
          bolt = null;
          return;
        }
        ensureParticles();
        const t = (cam.cx + S2.world.biomeRidge(cam.cy)) / WORLD.w;
        const bl = 0.085;
        const snowAmt = smooth01((t - (2 / 3 - bl)) / (2 * bl));
        const rainAmt = smooth01((t - (1 / 3 - bl)) / (2 * bl)) * (1 - snowAmt);
        const rI = W.rain * rainAmt, sI = W.rain * snowAmt;
        const VW = view2.VW, VH = view2.VH;
        const tintScale = view2.godView ? 0 : 1;
        if (sI > 0.02) {
          ctx.fillStyle = `rgba(210,224,238,${sI * 0.16 * tintScale})`;
          ctx.fillRect(0, 0, VW, VH);
          ctx.fillStyle = "#f4f8fc";
          for (const f of flakes) {
            const fall = (f.y + S2.t * f.sp * 0.18) % 1.06;
            const y = fall * (VH + 40) - 20;
            const x = (f.x * VW + Math.sin(S2.t * 0.8 + f.drift) * 10 + S2.wind * 22 * fall + VW) % VW;
            ctx.globalAlpha = (f.near ? 0.9 : 0.55) * clamp(sI * 1.4, 0, 1);
            ctx.beginPath();
            ctx.arc(x, y, f.r * (f.near ? 1.4 : 1), 0, 7);
            ctx.fill();
          }
          ctx.globalAlpha = 1;
        }
        if (rI > 0.02) {
          ctx.fillStyle = `rgba(26,36,54,${rI * 0.16 * tintScale})`;
          ctx.fillRect(0, 0, VW, VH);
          const slant = 0.24 + S2.wind * 0.05;
          const sn = Math.sin(slant), cs = Math.cos(slant);
          for (const pass of [0, 1]) {
            ctx.strokeStyle = pass ? `rgba(198,214,240,${0.42 * rI})` : `rgba(168,188,220,${0.22 * rI})`;
            ctx.lineWidth = pass ? 1.7 : 1;
            ctx.beginPath();
            for (const d of drops) {
              if (pass !== (d.near ? 1 : 0)) continue;
              const fall = (d.y + S2.t * d.sp * 0.5) % 1.08;
              const y = fall * (VH + 60) - 30;
              const x = (d.x * VW + S2.wind * 40 * fall + VW) % VW;
              const L = d.len * (pass ? 1.5 : 1);
              ctx.moveTo(x, y);
              ctx.lineTo(x + sn * L, y + cs * L * 2.2);
            }
            ctx.stroke();
          }
        }
        if (rainAmt > 0.55) {
          for (const e of S2.events) {
            if (e.type === "bolt") {
              bolt = { pts: makeBolt(VW, VH), life: 0.5, max: 0.5 };
            }
          }
          if (W.flash > 0.01) {
            ctx.fillStyle = `rgba(222,232,255,${W.flash * 0.5})`;
            ctx.fillRect(0, 0, VW, VH);
          }
          if (bolt) {
            bolt.life -= 1 / 60;
            if (bolt.life <= 0) bolt = null;
            else {
              const a = bolt.life / bolt.max;
              ctx.strokeStyle = `rgba(236,242,255,${a})`;
              ctx.lineWidth = 2.4 + 2 * a;
              ctx.shadowColor = "rgba(200,220,255,.9)";
              ctx.shadowBlur = 14;
              ctx.beginPath();
              bolt.pts.forEach((p, i) => i ? ctx.lineTo(p.x, p.y) : ctx.moveTo(p.x, p.y));
              ctx.stroke();
              ctx.shadowBlur = 0;
            }
          }
        }
      }
    };
    function makeBolt(VW, VH) {
      const pts = [];
      let x = (0.2 + Math.random() * 0.6) * VW, y = 0;
      const endY = VH * (0.5 + Math.random() * 0.4);
      while (y < endY) {
        pts.push({ x, y });
        y += 20 + Math.random() * 28;
        x += (Math.random() * 2 - 1) * 42;
      }
      return pts;
    }
  }

  // src/client/render/sprites.js
  var TAU2 = Math.PI * 2;
  function drawLake(ctx, S2, L) {
    const t = S2.t;
    ctx.save();
    ctx.translate(L.x, L.y);
    const path = () => {
      ctx.beginPath();
      for (let i = 0; i <= 28; i++) {
        const a = i / 28 * TAU2;
        const r = L.r * L.wob[i % 28];
        const px = Math.cos(a) * r, py = Math.sin(a) * r * 0.84;
        i ? ctx.lineTo(px, py) : ctx.moveTo(px, py);
      }
      ctx.closePath();
    };
    ctx.save();
    ctx.scale(L.frozen ? 1.07 : 1.06, L.frozen ? 1.07 : 1.06);
    path();
    ctx.fillStyle = L.frozen ? "rgba(238,246,251,.95)" : "rgba(96,118,66,.7)";
    ctx.fill();
    ctx.restore();
    path();
    if (L.frozen) {
      const g = ctx.createRadialGradient(0, -0.35 * L.r, L.r * 0.1, 0, 0, L.r * 1.1);
      g.addColorStop(0, "#dfeaf2");
      g.addColorStop(1, "#96b2c8");
      ctx.fillStyle = g;
      ctx.fill();
      ctx.save();
      path();
      ctx.clip();
      ctx.fillStyle = "rgba(255,255,255,0.28)";
      ctx.beginPath();
      ctx.ellipse(-0.3 * L.r, -0.3 * L.r, 0.34 * L.r, 0.18 * L.r, -0.5, 0, TAU2);
      ctx.fill();
      for (let i = 0; i < 9; i++) {
        if (Math.sin(t * 1.6 + i * 1.7 + L.seed * 3) > 0.62) {
          const sx = Math.sin(i * 37.7 + L.seed) * L.r * 0.6, sy = Math.cos(i * 21.3) * L.r * 0.5;
          ctx.fillStyle = "rgba(255,255,255,.9)";
          ctx.beginPath();
          ctx.arc(sx, sy, 1.5, 0, TAU2);
          ctx.fill();
          ctx.fillStyle = "rgba(255,255,255,.25)";
          ctx.beginPath();
          ctx.arc(sx, sy, 3.4, 0, TAU2);
          ctx.fill();
        }
      }
      ctx.restore();
    } else {
      const g = ctx.createRadialGradient(0, -0.3 * L.r, L.r * 0.1, 0, 0, L.r);
      g.addColorStop(0, "#33687c");
      g.addColorStop(1, "#0c2531");
      ctx.fillStyle = g;
      ctx.fill();
      ctx.save();
      path();
      ctx.clip();
      ctx.fillStyle = "rgba(190,225,238,0.13)";
      ctx.beginPath();
      ctx.ellipse(Math.sin(t * 0.4 + L.seed) * L.r * 0.1 - L.r * 0.05, -0.28 * L.r, 0.32 * L.r, 0.15 * L.r, -0.3, 0, TAU2);
      ctx.fill();
      for (let i = 0; i < 2; i++) {
        const ph = (t * 0.14 + i * 0.5 + L.seed * 0.1) % 1;
        ctx.strokeStyle = `rgba(180,215,228,${0.12 * (1 - ph)})`;
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.arc(0, 0, L.r * 0.25 + ph * L.r * 0.6, 0, TAU2);
        ctx.stroke();
      }
      for (const pad of L.pads) {
        const px = Math.cos(pad.a) * L.r * pad.rr, py = Math.sin(pad.a) * L.r * pad.rr * 0.84;
        ctx.fillStyle = "#41763c";
        ctx.beginPath();
        ctx.ellipse(px, py, pad.s, pad.s * 0.8, pad.a, 0, TAU2);
        ctx.fill();
        ctx.fillStyle = "#335f2f";
        ctx.beginPath();
        ctx.moveTo(px, py);
        ctx.arc(px, py, pad.s, pad.a + 0.4, pad.a + 0.7);
        ctx.closePath();
        ctx.fill();
      }
      ctx.restore();
    }
    ctx.restore();
  }
  var nodeStep = (f) => f > 0.66 ? 1 : f > 0.33 ? 0.62 : 0.3;
  function drawNode(ctx, S2, n) {
    const stepv = nodeStep(n.amount / n.max);
    const t = S2.t;
    if (n.type === "tree") {
      const sc = 0.5 + 0.5 * stepv;
      const sway = Math.sin(t * 1.5 + n.seed) * 2.6;
      shadow(ctx, n.x, n.y + 6, n.r * 1.2 * sc);
      fillRR(ctx, n.x - 4, n.y - 8, 8, 16, 3, "#5d3f20");
      ctx.fillStyle = "#3c2a12";
      ctx.fillRect(n.x - 4, n.y - 8, 3, 16);
      const R = n.r * 1.35 * sc;
      for (const [rr, c0, c1, dy] of [[R + 3, "#3d5526", "#1f2c12", 0], [R, "#4b6a31", "#2a3d18", -3], [R * 0.66, "#6f944c", "#3f5a2a", -6]]) {
        ctx.fillStyle = rgrad(ctx, n.x + sway * 0.4, n.y - 14 + dy, rr, c0, c1);
        blob(ctx, n.x + sway * 0.4, n.y - 14 + dy, rr, n.seed);
        ctx.fill();
      }
      ctx.globalAlpha = 0.5;
      ctx.fillStyle = "#92b863";
      blob(ctx, n.x + sway * 0.5 - R * 0.22, n.y - 20 - R * 0.2, R * 0.26, n.seed + 2);
      ctx.fill();
      ctx.globalAlpha = 1;
    } else if (n.type === "stone") {
      const sc = 0.55 + 0.45 * stepv;
      shadow(ctx, n.x, n.y + 4, n.r * sc);
      ctx.fillStyle = "#4f4d48";
      poly(ctx, n.x + 1.5, n.y + 2.5, n.r * sc, 6, n.seed);
      ctx.fill();
      ctx.fillStyle = rgrad(ctx, n.x, n.y, n.r * sc, "#979388", "#56534b");
      poly(ctx, n.x, n.y, n.r * sc, 6, n.seed);
      ctx.fill();
      ctx.globalAlpha = 0.85;
      ctx.fillStyle = "#b2ada0";
      poly(ctx, n.x - n.r * sc * 0.12, n.y - n.r * sc * 0.18, n.r * sc * 0.55, 5, n.seed + 1);
      ctx.fill();
      ctx.globalAlpha = 1;
    } else {
      const sc = 0.55 + 0.45 * stepv;
      shadow(ctx, n.x, n.y + 4, n.r * sc);
      ctx.fillStyle = "#4e3f23";
      poly(ctx, n.x + 1.5, n.y + 2.5, n.r * sc, 6, n.seed);
      ctx.fill();
      ctx.fillStyle = rgrad(ctx, n.x, n.y, n.r * sc, "#8d774a", "#54462a");
      poly(ctx, n.x, n.y, n.r * sc, 6, n.seed);
      ctx.fill();
      ctx.fillStyle = "#b09657";
      poly(ctx, n.x - n.r * sc * 0.1, n.y - n.r * sc * 0.15, n.r * sc * 0.5, 5, n.seed + 1);
      ctx.fill();
      for (let i = 0; i < 6; i++) {
        const a = i * 1.047 + n.seed;
        const gx = n.x + Math.cos(a) * n.r * sc * 0.45, gy = n.y + Math.sin(a) * n.r * sc * 0.4;
        ctx.fillStyle = rgrad(ctx, gx, gy, 2.6, "#ffc46a", "#d27c28");
        ctx.beginPath();
        ctx.arc(gx, gy, 2.4, 0, TAU2);
        ctx.fill();
        if (Math.sin(t * 3 + i * 2.1 + n.seed) > 0.55) {
          ctx.fillStyle = "rgba(255,246,210,.9)";
          ctx.beginPath();
          ctx.arc(gx - 0.5, gy - 0.5, 1.6, 0, TAU2);
          ctx.fill();
        }
      }
    }
  }
  function drawBarrel(ctx, S2, o) {
    shadow(ctx, o.x, o.y + o.r * 0.6, o.r * 1.1);
    if (o.crate) {
      const r = o.r;
      ctx.save();
      ctx.translate(o.x, o.y);
      fillRR(ctx, -r, -r, 2 * r, 2 * r, 4, "#3a2a14");
      ctx.fillStyle = vgrad(ctx, 0, -r + 2, 0, 2 * r - 4, "#8a6230", "#54391b");
      rrect(ctx, -r + 2, -r + 2, 2 * r - 4, 2 * r - 4, 3);
      ctx.fill();
      ctx.fillStyle = "rgba(255,255,255,.08)";
      ctx.fillRect(-r + 2, -r + 2, 2 * r - 4, 5);
      ctx.fillStyle = "#bd9450";
      ctx.fillRect(-r, -3, 2 * r, 6);
      fillRR(ctx, -4, -4, 8, 8, 1.5, "#c6cdc6");
      ctx.fillStyle = "#1e1812";
      ctx.fillRect(-1.4, -3, 2.8, 6);
      ctx.restore();
      hpRing(ctx, o.x, o.y, o.r + 5, o.hp / o.max, "#caa15f");
    } else {
      const bw = 1.55 * o.r, bh = 2.05 * o.r;
      ctx.save();
      ctx.translate(o.x, o.y);
      ctx.fillStyle = vgrad(ctx, 0, -bh / 2, 0, bh, "#a44f2e", "#5c2814");
      rrect(ctx, -bw / 2, -bh / 2, bw, bh, 0.34 * bw);
      ctx.fill();
      ctx.fillStyle = "rgba(255,255,255,.10)";
      ctx.fillRect(-bw / 2 + 2, -bh / 2 + 3, bw * 0.3, bh - 6);
      ctx.strokeStyle = "#caa14a";
      ctx.lineWidth = 2.4;
      for (const dy of [-0.24 * bh, 0.24 * bh]) {
        ctx.beginPath();
        ctx.moveTo(-bw / 2, dy);
        ctx.lineTo(bw / 2, dy);
        ctx.stroke();
      }
      ctx.strokeStyle = "#401f0e";
      ctx.lineWidth = 1.6;
      rrect(ctx, -bw / 2, -bh / 2, bw, bh, 0.34 * bw);
      ctx.stroke();
      ctx.fillStyle = rgrad(ctx, 0, -bh / 2 + 3, bw * 0.3, "#d8ad62", "#8a6630");
      ctx.beginPath();
      ctx.ellipse(0, -bh / 2 + 4, bw * 0.25, bw * 0.13, 0, 0, TAU2);
      ctx.fill();
      ctx.restore();
      hpRing(ctx, o.x, o.y, o.r + 6, o.hp / o.max, "#d2664a");
    }
  }
  function drawBoulder(ctx, b) {
    shadow(ctx, b.x, b.y + b.r * 0.5, b.r * 1.15);
    const c0 = b.winter ? "#c2ccd4" : "#8b9197", c1 = b.winter ? "#7e8c98" : "#4f545a";
    ctx.fillStyle = "#33363b";
    poly(ctx, b.x + 2, b.y + 3, b.r, 7, b.seed);
    ctx.fill();
    ctx.fillStyle = rgrad(ctx, b.x, b.y, b.r, c0, c1);
    poly(ctx, b.x, b.y, b.r, 7, b.seed);
    ctx.fill();
    ctx.globalAlpha = 0.7;
    ctx.fillStyle = b.winter ? "#e8eff5" : "#a9b0b6";
    poly(ctx, b.x - b.r * 0.18, b.y - b.r * 0.22, b.r * 0.5, 5, b.seed + 3);
    ctx.fill();
    ctx.globalAlpha = 1;
    if (b.winter) {
      ctx.fillStyle = "rgba(240,248,253,.75)";
      blob(ctx, b.x - b.r * 0.1, b.y - b.r * 0.45, b.r * 0.42, b.seed);
      ctx.fill();
    }
  }
  function drawRock(ctx, r2) {
    const c0 = r2.winter ? "#dfe7ee" : "#878d95", c1 = r2.winter ? "#b4c5d2" : "#5d626a";
    ctx.fillStyle = c1;
    ctx.beginPath();
    ctx.ellipse(r2.x + 0.7, r2.y + 1, r2.r, r2.r * 0.8, 0.3, 0, TAU2);
    ctx.fill();
    ctx.fillStyle = c0;
    ctx.beginPath();
    ctx.ellipse(r2.x, r2.y, r2.r * 0.8, r2.r * 0.6, 0.3, 0, TAU2);
    ctx.fill();
  }
  function drawPalm(ctx, S2, p) {
    const t = S2.t;
    const sway = Math.sin(t * 1.1 + p.seed) * 3;
    shadow(ctx, p.x, p.y + 4, 16);
    ctx.strokeStyle = p.desert ? "#7d6238" : "#6b4f28";
    ctx.lineWidth = 4.5;
    ctx.beginPath();
    ctx.moveTo(p.x, p.y);
    ctx.quadraticCurveTo(p.x + 4, p.y - 14, p.x + 7 + sway * 0.4, p.y - 26);
    ctx.stroke();
    const tx = p.x + 7 + sway * 0.4, ty = p.y - 26;
    ctx.strokeStyle = p.desert ? "#8a9a4a" : "#4d7a30";
    ctx.lineWidth = 2.6;
    for (let i = 0; i < 6; i++) {
      const a = i / 6 * TAU2 + p.seed;
      ctx.beginPath();
      ctx.moveTo(tx, ty);
      ctx.quadraticCurveTo(tx + Math.cos(a) * 11, ty + Math.sin(a) * 5 - 5, tx + Math.cos(a) * 19 + sway * 0.4, ty + Math.sin(a) * 9 + 2);
      ctx.stroke();
    }
  }
  function drawFlora(ctx, S2, f) {
    const t = S2.t;
    if (f.type === "flower") {
      const lean = (S2.wind + Math.sin(t * 1.1 + 7 * f.seed) * 0.3) * 4;
      ctx.strokeStyle = "#3e5a2a";
      ctx.lineWidth = 1.3;
      ctx.beginPath();
      ctx.moveTo(f.x, f.y);
      ctx.quadraticCurveTo(f.x + lean * 0.5, f.y - 5, f.x + lean, f.y - 9);
      ctx.stroke();
      ctx.fillStyle = f.col;
      for (let i = 0; i < 5; i++) {
        const a = i / 5 * TAU2 + f.seed;
        ctx.beginPath();
        ctx.arc(f.x + lean + Math.cos(a) * 2.6, f.y - 9 + Math.sin(a) * 2.6, 1.9, 0, TAU2);
        ctx.fill();
      }
      ctx.fillStyle = "#3a2c12";
      ctx.beginPath();
      ctx.arc(f.x + lean, f.y - 9, 1.7, 0, TAU2);
      ctx.fill();
    } else if (f.type === "fern" || f.type === "shrub") {
      ctx.strokeStyle = "rgba(86,134,52,.7)";
      ctx.lineWidth = 1.5;
      const sway = S2.wind * 2;
      for (let i = -1; i <= 1; i++) {
        ctx.beginPath();
        ctx.moveTo(f.x, f.y);
        ctx.quadraticCurveTo(f.x + i * 4 + sway, f.y - 6, f.x + i * 7 + sway, f.y - 11);
        ctx.stroke();
      }
    } else if (f.type === "cactus") {
      shadow(ctx, f.x, f.y + 3, 9);
      fillRR(ctx, f.x - 3, f.y - 20, 6.5, 21, 3, "#4e7a3a");
      ctx.fillStyle = "rgba(255,255,255,.12)";
      ctx.fillRect(f.x - 3, f.y - 20, 2, 21);
      if (f.arms > 0) {
        fillRR(ctx, f.x - 10, f.y - 14, 7, 3.4, 2, "#477036");
        fillRR(ctx, f.x - 10, f.y - 19, 3.4, 7, 2, "#477036");
      }
      if (f.arms > 1) {
        fillRR(ctx, f.x + 3.5, f.y - 11, 7, 3.4, 2, "#477036");
        fillRR(ctx, f.x + 7, f.y - 17, 3.4, 8, 2, "#477036");
      }
    } else {
      ctx.fillStyle = "rgba(140,118,72,.5)";
      blob(ctx, f.x, f.y, 6, f.seed);
      ctx.fill();
    }
  }
  function floorCols(mat) {
    if (mat === "metal") return ["#4e555e", "#33383e", "#262b30", "#7d8893"];
    if (mat === "stone") return ["#767d85", "#4e535a", "#3a3f45", "#a5acb3"];
    if (mat === "armored") return ["#39455a", "#242d3c", "#1a212d", "#7f93ad"];
    return ["#6e5128", "#4b3517", "#33240e", "#a87c40"];
  }
  function drawFloor(ctx, gx, gy, s) {
    const x = gx * TILE, y = gy * TILE;
    const [a, b, seam, edge] = floorCols(s.mat);
    ctx.fillStyle = vgrad(ctx, x, y, 0, TILE, a, b);
    rrect(ctx, x + 1, y + 1, TILE - 2, TILE - 2, 5);
    ctx.fill();
    ctx.strokeStyle = seam;
    ctx.lineWidth = 1.4;
    for (const dy of [16, 32, 48]) {
      ctx.beginPath();
      ctx.moveTo(x + 3, y + dy);
      ctx.lineTo(x + TILE - 3, y + dy);
      ctx.stroke();
    }
    if (s.mat !== "wood") {
      ctx.beginPath();
      ctx.moveTo(x + TILE / 2, y + 3);
      ctx.lineTo(x + TILE / 2, y + TILE - 3);
      ctx.stroke();
      ctx.fillStyle = "rgba(255,255,255,.12)";
      for (const [rx, ry] of [[8, 8], [TILE - 8, 8], [8, TILE - 8], [TILE - 8, TILE - 8]]) {
        ctx.beginPath();
        ctx.arc(x + rx, y + ry, 1.6, 0, TAU2);
        ctx.fill();
      }
    }
    ctx.strokeStyle = "rgba(255,255,255,.09)";
    ctx.lineWidth = 1.5;
    rrect(ctx, x + 1, y + 1, TILE - 2, TILE - 2, 5);
    ctx.stroke();
    if (s.hp < s.max * 0.5) {
      ctx.strokeStyle = "rgba(12,10,8,.5)";
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.moveTo(x + 12, y + 10);
      ctx.lineTo(x + 28, y + 30);
      ctx.lineTo(x + 22, y + 48);
      ctx.stroke();
      if (s.hp < s.max * 0.25) {
        ctx.beginPath();
        ctx.moveTo(x + 48, y + 14);
        ctx.lineTo(x + 38, y + 34);
        ctx.lineTo(x + 50, y + 52);
        ctx.stroke();
      }
    }
  }
  function drawWall(ctx, S2, key, w) {
    const seg = wallSegOf(key, w);
    const m = matCols(w.mat);
    const vert = seg[0] === seg[2];
    const mx = (seg[0] + seg[2]) / 2, my = (seg[1] + seg[3]) / 2;
    if (w.type === "door" && w.open) {
      ctx.fillStyle = m.dk;
      if (vert) {
        ctx.fillRect(seg[0] - 5, seg[1], 10, 10);
        ctx.fillRect(seg[0] - 5, seg[3] - 10, 10, 10);
      } else {
        ctx.fillRect(seg[0], seg[1] - 5, 10, 10);
        ctx.fillRect(seg[2] - 10, seg[1] - 5, 10, 10);
      }
      return;
    }
    ctx.save();
    ctx.translate(mx, my);
    if (!vert) ctx.rotate(Math.PI / 2);
    const W = 12, L = TILE;
    fillRR(ctx, -W / 2 - 1, -L / 2, W + 2, L, 3, m.dk);
    const g = ctx.createLinearGradient(-W / 2, 0, W / 2, 0);
    g.addColorStop(0, m.lt);
    g.addColorStop(1, m.dk);
    ctx.fillStyle = g;
    rrect(ctx, -W / 2, -L / 2 + 1, W, L - 2, 2);
    ctx.fill();
    ctx.fillStyle = "rgba(255,255,255,.14)";
    ctx.fillRect(-W / 2, -L / 2 + 1, 2, L - 2);
    if (w.type === "door") {
      ctx.fillStyle = "#2c1f0e";
      ctx.fillRect(-0.8, -L / 2 + 3, 1.6, L - 6);
      ctx.fillStyle = "#d8b65e";
      ctx.beginPath();
      ctx.arc(W / 4, 0, 2.4, 0, TAU2);
      ctx.fill();
    }
    if (w.mat === "metal" || w.mat === "armored") {
      ctx.fillStyle = "rgba(0,0,0,.3)";
      for (const dy of [-L / 2 + 8, 0, L / 2 - 8]) {
        ctx.beginPath();
        ctx.arc(0, dy, 1.4, 0, TAU2);
        ctx.fill();
      }
    }
    if (w.hp < w.max * 0.5) {
      ctx.strokeStyle = "rgba(10,9,7,.6)";
      ctx.lineWidth = 1.1;
      ctx.beginPath();
      ctx.moveTo(-W / 4, -L / 4);
      ctx.lineTo(W / 4, 0);
      ctx.lineTo(-W / 5, L / 4);
      ctx.stroke();
    }
    ctx.restore();
    if (w.hp < w.max) {
      const locked = S2.t - w.hitT < HIT_LOCK;
      const col = locked ? "#8b9099" : w.mat === "metal" || w.mat === "armored" ? "#9ab0d0" : w.mat === "stone" ? "#c6ccd2" : "#d2664a";
      hpRing(ctx, mx, my, 10, w.hp / w.max, col);
    }
    if (w.type === "door" && w.lock) drawLock(ctx, mx, my, w.lock.by === "p1");
  }
  function drawLock(ctx, x, y, own) {
    ctx.strokeStyle = own ? "#7bbf4f" : "#c0432f";
    ctx.lineWidth = 1.6;
    ctx.beginPath();
    ctx.arc(x, y - 4, 3, Math.PI, 0);
    ctx.stroke();
    ctx.fillStyle = own ? "#7bbf4f" : "#c0432f";
    fillRR(ctx, x - 4, y - 4, 8, 6.5, 1.5, own ? "#5f9c3c" : "#9c3322");
  }
  function drawCupboard(ctx, S2, gx, gy, d, teamCol) {
    const x = gx * TILE, y = gy * TILE, cx = x + TILE / 2, cy = y + TILE / 2;
    shadow(ctx, cx, cy + 14, 26);
    fillRR(ctx, x + 6, y + 6, TILE - 12, TILE - 12, 6, "#241806");
    const lt = shade(teamCol, 1.3), dk = shade(teamCol, 0.58);
    ctx.fillStyle = vgrad(ctx, 0, y + 9, 0, TILE - 18, lt, dk);
    rrect(ctx, x + 9, y + 9, TILE - 18, TILE - 18, 4);
    ctx.fill();
    ctx.fillStyle = "rgba(255,255,255,.13)";
    ctx.fillRect(x + 9, y + 9, TILE - 18, 5);
    ctx.strokeStyle = "#2c1f0c";
    ctx.lineWidth = 1.6;
    rrect(ctx, x + 9, y + 9, TILE - 18, TILE - 18, 4);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(cx, y + 11);
    ctx.lineTo(cx, y + TILE - 11);
    ctx.stroke();
    ctx.fillStyle = "#d8b65e";
    ctx.beginPath();
    ctx.arc(cx - 4, cy, 1.6, 0, TAU2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(cx + 4, cy, 1.6, 0, TAU2);
    ctx.fill();
    const stocked = d.store && d.store.wood + d.store.stone + d.store.metal > 0;
    ctx.shadowColor = stocked ? "#76e06a" : "#ff5a3c";
    ctx.shadowBlur = 6;
    ctx.fillStyle = stocked ? "#76e06a" : "#ff5a3c";
    ctx.beginPath();
    ctx.arc(cx, y + 15, 2.8, 0, TAU2);
    ctx.fill();
    ctx.shadowBlur = 0;
    if (d.lock) drawLock(ctx, x + TILE - 13, y + 15, d.lock.by === "p1");
    hpRing(ctx, cx, cy, 0.44 * TILE, d.hp / d.max, "#caa15f");
  }
  function drawBox(ctx, gx, gy, d) {
    const x = gx * TILE, y = gy * TILE, cx = x + TILE / 2, cy = y + TILE / 2;
    shadow(ctx, cx, cy + 12, 24);
    fillRR(ctx, x + 5, y + 5, TILE - 10, TILE - 10, 5, "#33240f");
    ctx.fillStyle = vgrad(ctx, 0, y + 7, 0, TILE - 14, "#8a6230", "#4f3517");
    rrect(ctx, x + 7, y + 7, TILE - 14, TILE - 14, 4);
    ctx.fill();
    ctx.fillStyle = "rgba(255,255,255,.1)";
    ctx.fillRect(x + 7, y + 7, TILE - 14, 4);
    ctx.fillStyle = "#caa15f";
    ctx.fillRect(cx - 3, y + 7, 6, TILE - 14);
    hpRing(ctx, cx, cy, 0.42 * TILE, d.hp / d.max, "#caa15f");
  }
  function drawTurret(ctx, S2, gx, gy, d) {
    const x = gx * TILE, y = gy * TILE, cx = x + TILE / 2, cy = y + TILE / 2;
    const AC = d.tier === 3 ? "#5fc8e0" : d.tier === 2 ? "#e0a23a" : "#9aa1a8";
    shadow(ctx, cx, cy + 12, 22);
    fillRR(ctx, x + 8, y + 8, TILE - 16, TILE - 16, 5, "#2f352c");
    ctx.strokeStyle = AC;
    ctx.lineWidth = 2;
    ctx.globalAlpha = 0.8;
    ctx.beginPath();
    ctx.arc(cx, cy, 17, 0, TAU2);
    ctx.stroke();
    ctx.globalAlpha = 1;
    ctx.fillStyle = rgrad(ctx, cx, cy, 15, "#79836f", "#3b4138");
    ctx.beginPath();
    ctx.arc(cx, cy, 15, 0, TAU2);
    ctx.fill();
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(d.angle || 0);
    if (d.tier === 3) {
      fillRR(ctx, 0, -3, 40, 6, 2, "#22262a");
      ctx.fillStyle = "rgba(255,255,255,.25)";
      ctx.fillRect(2, -3, 36, 1.6);
      ctx.fillStyle = AC;
      fillRR(ctx, 8, -8.5, 7, 5, 1.5, AC);
      ctx.beginPath();
      ctx.arc(42, 0, 2, 0, TAU2);
      ctx.fill();
    } else if (d.tier === 2) {
      fillRR(ctx, 0, -5.5, 30, 4, 1.5, "#22262a");
      fillRR(ctx, 0, 1.5, 30, 4, 1.5, "#22262a");
      ctx.fillStyle = AC;
      fillRR(ctx, 9, -2, 6, 4, 1, AC);
    } else {
      fillRR(ctx, 0, -4, 22, 8, 3, "#23272b");
      ctx.fillStyle = AC;
      ctx.beginPath();
      ctx.arc(24, 0, 2.2, 0, TAU2);
      ctx.fill();
    }
    ctx.restore();
    ctx.fillStyle = "#383f35";
    ctx.beginPath();
    ctx.arc(cx, cy, 8, 0, TAU2);
    ctx.fill();
    ctx.shadowColor = AC;
    ctx.shadowBlur = 5;
    ctx.fillStyle = AC;
    ctx.beginPath();
    ctx.arc(cx, cy, 3, 0, TAU2);
    ctx.fill();
    ctx.shadowBlur = 0;
    for (let i = 0; i < (d.tier || 1); i++) {
      ctx.beginPath();
      ctx.arc(cx - 6 + i * 6, cy + 0.31 * TILE, 1.8, 0, TAU2);
      ctx.fill();
    }
    hpRing(ctx, cx, cy, 19, d.hp / d.max, "#9ab0d0");
  }
  function drawFence(ctx, f) {
    ctx.save();
    ctx.translate(f.x, f.y);
    ctx.rotate(f.a);
    ctx.fillStyle = "#6b4d28";
    ctx.fillRect(-23, -7, 46, 3.4);
    ctx.fillRect(-23, 1, 46, 3.4);
    for (let px = -21; px <= 21; px += 9) {
      ctx.fillStyle = "#7d5c30";
      ctx.fillRect(px - 2.2, -9, 4.5, 18);
      ctx.fillStyle = "rgba(255,255,255,.15)";
      ctx.fillRect(px - 2.2, -9, 4.5, 2);
    }
    const dmg = 1 - f.hp / f.max;
    if (dmg > 0.02) {
      ctx.strokeStyle = `rgba(20,14,8,${0.2 + 0.5 * dmg})`;
      ctx.lineWidth = 1.3;
      ctx.beginPath();
      ctx.moveTo(-12, -6);
      ctx.lineTo(-4, 2);
      ctx.lineTo(6, -4);
      ctx.stroke();
    }
    ctx.restore();
    if (f.hp < f.max) {
      ctx.fillStyle = "rgba(0,0,0,.5)";
      ctx.fillRect(f.x - 16, f.y - 14, 32, 3);
      ctx.fillStyle = "#c79a5e";
      ctx.fillRect(f.x - 16, f.y - 14, 32 * (f.hp / f.max), 3);
    }
  }
  function shade(hex, f) {
    const n = parseInt(hex.slice(1), 16);
    const r = Math.min(255, (n >> 16 & 255) * f) | 0;
    const g = Math.min(255, (n >> 8 & 255) * f) | 0;
    const b = Math.min(255, (n & 255) * f) | 0;
    return `rgb(${r},${g},${b})`;
  }
  function drawUnit(ctx, S2, u) {
    if (u.dead || u.eliminated) return;
    const t = S2.t;
    const moving = Math.hypot(u.vx, u.vy) > 20;
    shadow(ctx, u.x, u.y + 11, 15);
    const kick = moving ? Math.sin(t * 10 + u.id) * 2.4 : 0;
    ctx.fillStyle = "#2b251c";
    fillRR(ctx, u.x - 6.5, u.y + 4 + kick, 5, 9, 2.2, "#2b251c");
    fillRR(ctx, u.x + 1.5, u.y + 4 - kick, 5, 9, 2.2, "#2b251c");
    ctx.save();
    ctx.translate(u.x, u.y);
    ctx.rotate(u.angle);
    if (u.gathering) {
      ctx.rotate(-0.4 + Math.sin(u.swing) * 0.9);
      fillRR(ctx, 8, -2, 14, 3.6, 1.5, "#5b4226");
      fillRR(ctx, 20, -5.5, 5.5, 10, 1.5, "#b9c0c7");
    } else {
      fillRR(ctx, 6, -2.5, 9, 5, 2, PAL.skin);
      const gunLen = u.gun === "rifle" ? 19 : u.gun === "shotgun" ? 15 : u.gun === "hmg" ? 22 : 13;
      fillRR(ctx, 10, -3, gunLen, 6, 2, "#23261f");
      ctx.fillStyle = "rgba(255,255,255,.2)";
      ctx.fillRect(10, -3, gunLen, 1.6);
      if (u.rifleLaser) {
        ctx.fillStyle = "#ff3a2a";
        ctx.beginPath();
        ctx.arc(10 + gunLen, 0, 1.5, 0, TAU2);
        ctx.fill();
      }
    }
    ctx.restore();
    ctx.fillStyle = PAL.ink;
    fillRR(ctx, u.x - 9.5, u.y - 8, 19, 16, 5.5, PAL.ink);
    ctx.fillStyle = vgrad(ctx, 0, u.y - 7, 0, 14, shade(u.col, 1.06), shade(u.col, 0.55));
    rrect(ctx, u.x - 7.5, u.y - 6.5, 15, 13.5, 4.5);
    ctx.fill();
    ctx.fillStyle = "rgba(255,255,255,.14)";
    ctx.fillRect(u.x - 6, u.y - 6, 12, 2.6);
    if (u.bodyArmor > 0) {
      const ac = ARMOR.bodyCol[u.bodyArmor] || "#9fb0c8";
      fillRR(ctx, u.x - 7, u.y - 5, 14, 11, 3, ac);
      ctx.fillStyle = "rgba(255,255,255,.18)";
      ctx.fillRect(u.x - 6, u.y - 4.5, 12, 2);
      ctx.fillStyle = "rgba(10,12,16,.5)";
      ctx.fillRect(u.x - 0.7, u.y - 5, 1.4, 11);
      for (let i = 0; i < u.bodyArmor; i++) {
        ctx.fillStyle = "rgba(14,16,20,.8)";
        ctx.fillRect(u.x - 5 + i * 4, u.y + 3.4, 3, 1.6);
      }
    }
    ctx.fillStyle = PAL.ink;
    ctx.beginPath();
    ctx.arc(u.x, u.y - 1.5, 7, 0, TAU2);
    ctx.fill();
    ctx.fillStyle = rgrad(ctx, u.x, u.y - 2, 5.6, "#d9b48c", "#9a7350");
    ctx.beginPath();
    ctx.arc(u.x, u.y - 1.5, 5.6, 0, TAU2);
    ctx.fill();
    ctx.strokeStyle = u.col;
    ctx.lineWidth = 2.2;
    ctx.beginPath();
    ctx.arc(u.x, u.y - 1.5, 5.4, Math.PI * 1.05, Math.PI * 1.95);
    ctx.stroke();
    if (u.facemask > 0) {
      const hc = ARMOR.headCol[u.facemask] || "#aab4c2";
      ctx.fillStyle = hc;
      ctx.beginPath();
      ctx.arc(u.x, u.y - 1.5, 6, 0, TAU2);
      ctx.fill();
      ctx.fillStyle = "rgba(255,255,255,.22)";
      ctx.beginPath();
      ctx.arc(u.x - 1.6, u.y - 3.4, 2.8, 0, TAU2);
      ctx.fill();
      ctx.fillStyle = "#11151c";
      fillRR(ctx, u.x - 5, u.y - 2.6, 10, 2.6, 1.2, "#11151c");
    }
    if (u.hp < u.max) {
      ctx.fillStyle = "rgba(0,0,0,.65)";
      ctx.fillRect(u.x - 12, u.y - 14, 24, 4);
      ctx.fillStyle = "#d2553c";
      ctx.fillRect(u.x - 12, u.y - 14, 24 * Math.max(0, u.hp / u.max), 4);
    }
  }
  function drawPlayer(ctx, S2) {
    const p = S2.player;
    const t = S2.t;
    ctx.save();
    if (S2.ghost) ctx.globalAlpha = 0.4;
    if (p.dead) {
      shadow(ctx, p.x, p.y + 8, 15);
      ctx.fillStyle = PAL.playerDk;
      ctx.beginPath();
      ctx.arc(p.x, p.y, PLAYER_R - 3, 0, TAU2);
      ctx.fill();
      ctx.fillStyle = PAL.blood;
      for (let i = 0; i < 6; i++) {
        const a = i * 1.047;
        ctx.beginPath();
        ctx.arc(p.x + Math.cos(a) * 15, p.y + Math.sin(a) * 10, 3, 0, TAU2);
        ctx.fill();
      }
      ctx.restore();
      return;
    }
    shadow(ctx, p.x, p.y + 12, PLAYER_R * 1.05);
    const moving = p.moving;
    const kick = moving ? Math.sin(t * 12) * 2.4 : 0;
    fillRR(ctx, p.x - 7, p.y + 5 + kick, 5, 11, 2.2, "#3b342a");
    fillRR(ctx, p.x + 2, p.y + 5 - kick, 5, 11, 2.2, "#3b342a");
    const off = 11 - p.recoil;
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(p.angle);
    const slot = S2.slot;
    fillRR(ctx, 6, -2.5, 9, 5, 2, PAL.skin);
    if (slot === 0) {
      if (S2.jackhammer) {
        ctx.save();
        ctx.rotate(0.12 + (p.swing > 0 ? Math.sin(t * 60) * 0.09 : 0));
        fillRR(ctx, off, -5, 12, 10, 2, "#caa23a");
        ctx.fillStyle = "rgba(255,255,255,.2)";
        ctx.fillRect(off, -5, 12, 2.5);
        fillRR(ctx, off + 12, -3, 4, 6, 1, "#3a3f37");
        fillRR(ctx, off + 16, -2.1, 13, 4.2, 1, "#b9c0c7");
        ctx.restore();
      } else {
        ctx.save();
        ctx.rotate(p.swing > 0 ? -0.4 + (0.16 - p.swing) * 5 : -0.2);
        fillRR(ctx, off, -2, 16, 4, 1.5, "#5b4226");
        fillRR(ctx, off + 14, -6, 7, 12, 2, "#b9c0c7");
        ctx.restore();
      }
    } else if (slot === 5) {
      fillRR(ctx, off, -2, 13, 4, 1.5, "#5b4226");
      fillRR(ctx, off + 11, -5, 7, 10, 2, "#9aa1a8");
    } else {
      const k = { 1: [13, 6], 2: [20, 6], 3: [18, 10], 4: [26, 10], 6: [30, 5], 7: [17, 8], 8: [24, 9] }[slot] || [13, 6];
      if (slot === 3) {
        fillRR(ctx, off, -6, 12, 12, 2, "#3a3f37");
        const wob = S2.weapons.minigun.spin > 0 ? Math.sin(t * 30) * 2 : 0;
        for (const dy of [-4, 0, 4]) fillRR(ctx, off + 10, dy - 1.5 + wob * 0.3, 20, 3, 1.5, "#22262a");
      } else if (slot === 4) {
        fillRR(ctx, off, -5, 26, 10, 3, "#39402f");
        ctx.fillStyle = "#ff9b3d";
        ctx.fillRect(off + 2, -5, 24, 2);
        ctx.fillStyle = "#14130d";
        ctx.beginPath();
        ctx.arc(off + 24, 0, 5, 0, TAU2);
        ctx.fill();
      } else {
        fillRR(ctx, off, -k[1] / 2, k[0], k[1], 2, "#23261f");
        ctx.fillStyle = "rgba(255,255,255,.22)";
        ctx.fillRect(off, -k[1] / 2, k[0], 1.8);
        if (slot === 6) {
          fillRR(ctx, off + 9, -k[1] / 2 - 4, 7, 4, 1.5, "#9fb0bd");
        }
        if (slot === 7) {
          fillRR(ctx, off - 4, 2, 6, 5, 1.5, "#5b4226");
        }
        if (slot === 8) {
          fillRR(ctx, off + 7, 3, 7, 7, 1.5, "#3a3f37");
        }
      }
    }
    ctx.restore();
    fillRR(ctx, p.x - 9, p.y - 7.5, 18, 15, 5, "#15140e");
    ctx.fillStyle = vgrad(ctx, 0, p.y - 6.5, 0, 13, p.hurt > 0 ? "#c47a5e" : "#8a995e", p.hurt > 0 ? "#7a3e2c" : "#4d5732");
    rrect(ctx, p.x - 7, p.y - 6.5, 14, 13, 4.5);
    ctx.fill();
    ctx.fillStyle = "rgba(255,255,255,.15)";
    ctx.fillRect(p.x - 5.5, p.y - 6, 11, 2.4);
    if (p.bodyArmor > 0) {
      const ac = ARMOR.bodyCol[p.bodyArmor];
      fillRR(ctx, p.x - 7, p.y - 5, 14, 11, 3, ac);
      ctx.fillStyle = "rgba(10,12,16,.5)";
      ctx.fillRect(p.x - 0.7, p.y - 5, 1.4, 11);
      for (let i = 0; i < p.bodyArmor; i++) {
        ctx.fillStyle = "rgba(14,16,20,.8)";
        ctx.fillRect(p.x - 5 + i * 4, p.y + 3.6, 3, 1.6);
      }
    }
    ctx.fillStyle = "#15140e";
    ctx.beginPath();
    ctx.arc(p.x, p.y - 1.5, 7, 0, TAU2);
    ctx.fill();
    ctx.fillStyle = rgrad(ctx, p.x, p.y - 2, 5.6, "#e2bd96", "#a9805a");
    ctx.beginPath();
    ctx.arc(p.x, p.y - 1.5, 5.6, 0, TAU2);
    ctx.fill();
    ctx.fillStyle = "#3a2a18";
    ctx.beginPath();
    ctx.arc(p.x, p.y - 3, 5.4, Math.PI, 0);
    ctx.fill();
    const fr = Math.cos(p.angle) >= 0 ? 1 : -1;
    ctx.fillStyle = "#1c150d";
    ctx.beginPath();
    ctx.arc(p.x + fr * 1.8, p.y - 2.5, 1.05, 0, TAU2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(p.x + fr * 4.3, p.y - 2.5, 1.05, 0, TAU2);
    ctx.fill();
    if (p.facemask > 0) {
      const hc = ARMOR.headCol[p.facemask];
      ctx.fillStyle = hc;
      ctx.beginPath();
      ctx.arc(p.x, p.y - 1.5, 6, 0, TAU2);
      ctx.fill();
      ctx.fillStyle = "rgba(255,255,255,.25)";
      ctx.beginPath();
      ctx.arc(p.x - 1.8, p.y - 3.6, 2.6, 0, TAU2);
      ctx.fill();
      fillRR(ctx, p.x - 5, p.y - 2.8, 10, 2.6, 1.2, "#11151c");
    }
    if (p.invuln > 0) {
      ctx.strokeStyle = `rgba(150,205,255,${0.35 + 0.3 * Math.sin(t * 22)})`;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(p.x, p.y, PLAYER_R + 6, 0, TAU2);
      ctx.stroke();
    }
    ctx.restore();
  }
  function drawGuard(ctx, S2, g) {
    const t = S2.t;
    shadow(ctx, g.x, g.y + 10, 14);
    const kick = Math.sin(t * 9 + g.seed) * 1.6;
    fillRR(ctx, g.x - 6, g.y + 4 + kick, 4.5, 9, 2, "#2c2218");
    fillRR(ctx, g.x + 1.5, g.y + 4 - kick, 4.5, 9, 2, "#2c2218");
    ctx.save();
    ctx.translate(g.x, g.y);
    ctx.rotate(g.angle);
    fillRR(ctx, 6, -2.4, 8, 4.8, 2, PAL.skin);
    fillRR(ctx, 10, -3, 17, 6, 2, "#23261f");
    ctx.fillStyle = "rgba(255,255,255,.2)";
    ctx.fillRect(10, -3, 17, 1.6);
    ctx.restore();
    fillRR(ctx, g.x - 8, g.y - 7.5, 16, 15, 5, "#171410");
    ctx.fillStyle = vgrad(ctx, 0, g.y - 6.5, 0, 13, PAL.guard, PAL.guardDk);
    rrect(ctx, g.x - 6.5, g.y - 6.5, 13, 13, 4);
    ctx.fill();
    ctx.globalAlpha = 0.5;
    ctx.fillStyle = "#f4f0e4";
    ctx.fillRect(g.x - 6.5, g.y + 0.5, 13, 2.4);
    ctx.globalAlpha = 1;
    ctx.fillStyle = rgrad(ctx, g.x, g.y - 2, 5.4, "#d3a87e", "#9a7350");
    ctx.beginPath();
    ctx.arc(g.x, g.y - 1.5, 5.4, 0, TAU2);
    ctx.fill();
    ctx.fillStyle = "#c0432f";
    ctx.beginPath();
    ctx.arc(g.x, g.y - 2.8, 5.2, Math.PI, 0);
    ctx.fill();
    hpRing(ctx, g.x, g.y, GUARD.r + 4, g.hp / g.max, "#e2664a");
  }
  var ANIMAL_COLS = {
    boar: ["#7e6244", "#54402b"],
    wolf: ["#75767f", "#46474d"],
    bear: ["#61482f", "#3a2c1c"],
    alligator: ["#557036", "#31491c"],
    snake: ["#b29a3a", "#71611e"],
    scorpion: ["#7e5226", "#472e12"],
    polarbear: ["#dde5eb", "#a4b2bd"]
  };
  function drawAnimal(ctx, S2, a) {
    if (a.dead) return;
    const [col, colDk] = ANIMAL_COLS[a.type] || ["#888", "#555"];
    const ang = a.vx || a.vy ? Math.atan2(a.vy, a.vx) : a.dir;
    const t = S2.t;
    shadow(ctx, a.x, a.y + a.r * 0.5, a.r * 1.1);
    ctx.save();
    ctx.translate(a.x, a.y);
    ctx.rotate(ang);
    if (a.type === "snake") {
      for (let i = 6; i >= 0; i--) {
        const sx = -i * 5.2, sy = Math.sin(t * 7 - i * 0.6) * 4.5;
        ctx.fillStyle = i % 2 ? colDk : col;
        ctx.beginPath();
        ctx.arc(sx, sy, 6 - i * 0.5, 0, TAU2);
        ctx.fill();
      }
      ctx.fillStyle = col;
      ctx.beginPath();
      ctx.ellipse(6, 0, 7, 5, 0, 0, TAU2);
      ctx.fill();
      ctx.fillStyle = "#1c150d";
      ctx.beginPath();
      ctx.arc(8, -2, 1.3, 0, TAU2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(8, 2, 1.3, 0, TAU2);
      ctx.fill();
      ctx.strokeStyle = "#c0432f";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(13, 0);
      ctx.lineTo(17, -1.6);
      ctx.moveTo(13, 0);
      ctx.lineTo(17, 1.6);
      ctx.stroke();
    } else if (a.type === "scorpion") {
      ctx.strokeStyle = colDk;
      ctx.lineWidth = 2;
      for (const s of [-1, 1]) for (const lx of [-4, 0, 4]) {
        ctx.beginPath();
        ctx.moveTo(lx, 0);
        ctx.lineTo(lx + 3, s * a.r * 0.8);
        ctx.stroke();
      }
      ctx.fillStyle = colDk;
      ctx.beginPath();
      ctx.ellipse(0, 0, a.r * 0.7, a.r * 0.5, 0, 0, TAU2);
      ctx.fill();
      ctx.fillStyle = col;
      ctx.beginPath();
      ctx.ellipse(1, 0, a.r * 0.55, a.r * 0.38, 0, 0, TAU2);
      ctx.fill();
      for (const s of [-1, 1]) {
        ctx.strokeStyle = col;
        ctx.lineWidth = 2.4;
        ctx.beginPath();
        ctx.moveTo(a.r * 0.4, s * 2);
        ctx.lineTo(a.r * 0.95, s * a.r * 0.5);
        ctx.stroke();
        ctx.fillStyle = colDk;
        ctx.beginPath();
        ctx.arc(a.r * 0.95, s * a.r * 0.5, 2.4, 0, TAU2);
        ctx.fill();
      }
      ctx.strokeStyle = col;
      ctx.lineWidth = 2.6;
      ctx.beginPath();
      ctx.moveTo(-a.r * 0.5, 0);
      ctx.quadraticCurveTo(-a.r * 1.1, -a.r * 0.5, -a.r * 0.9, -a.r * 0.9);
      ctx.stroke();
      ctx.fillStyle = "#3a2410";
      ctx.beginPath();
      ctx.arc(-a.r * 0.9, -a.r * 0.9, 2.2, 0, TAU2);
      ctx.fill();
    } else {
      ctx.fillStyle = PAL.ink;
      ctx.beginPath();
      ctx.ellipse(0, 0, a.r * 1.28, a.r * 0.97, 0, 0, TAU2);
      ctx.fill();
      ctx.fillStyle = colDk;
      ctx.beginPath();
      ctx.ellipse(0, 0, a.r * 1.18, a.r * 0.86, 0, 0, TAU2);
      ctx.fill();
      ctx.fillStyle = col;
      ctx.beginPath();
      ctx.ellipse(0, 0, a.r * 1.02, a.r * 0.72, 0, 0, TAU2);
      ctx.fill();
      ctx.strokeStyle = "rgba(0,0,0,.12)";
      ctx.lineWidth = 1;
      for (let i = -2; i <= 2; i++) {
        ctx.beginPath();
        ctx.moveTo(i * a.r * 0.3, -a.r * 0.5);
        ctx.quadraticCurveTo(i * a.r * 0.3 + 3, 0, i * a.r * 0.3, a.r * 0.5);
        ctx.stroke();
      }
      if (a.type === "alligator") {
        ctx.fillStyle = colDk;
        ctx.beginPath();
        ctx.moveTo(-a.r * 0.9, -a.r * 0.22);
        ctx.lineTo(-a.r * 1.8, 0);
        ctx.lineTo(-a.r * 0.9, a.r * 0.22);
        ctx.closePath();
        ctx.fill();
        ctx.fillStyle = col;
        ctx.beginPath();
        ctx.ellipse(a.r * 1.2, 0, a.r * 0.55, a.r * 0.3, 0, 0, TAU2);
        ctx.fill();
        ctx.fillStyle = colDk;
        for (let i = 0; i < 4; i++) {
          ctx.beginPath();
          ctx.moveTo(-a.r * 0.5 + i * a.r * 0.34, -3);
          ctx.lineTo(-a.r * 0.36 + i * a.r * 0.34, -7);
          ctx.lineTo(-a.r * 0.22 + i * a.r * 0.34, -3);
          ctx.closePath();
          ctx.fill();
        }
        ctx.fillStyle = "#10100a";
        ctx.beginPath();
        ctx.arc(a.r * 1.2, -3, 1.9, 0, TAU2);
        ctx.fill();
      } else {
        ctx.fillStyle = col;
        ctx.beginPath();
        ctx.arc(a.r * 0.96, 0, a.r * 0.5, 0, TAU2);
        ctx.fill();
        if (a.type === "bear" || a.type === "polarbear") {
          ctx.fillStyle = colDk;
          ctx.beginPath();
          ctx.arc(a.r * 0.7, -a.r * 0.5, a.r * 0.22, 0, TAU2);
          ctx.fill();
          ctx.beginPath();
          ctx.arc(a.r * 0.7, a.r * 0.5, a.r * 0.22, 0, TAU2);
          ctx.fill();
        }
        if (a.type === "wolf") {
          ctx.fillStyle = colDk;
          for (const s of [-1, 1]) {
            ctx.beginPath();
            ctx.moveTo(a.r * 0.6, s * a.r * 0.34);
            ctx.lineTo(a.r * 0.9, s * a.r * 0.7);
            ctx.lineTo(a.r * 1, s * a.r * 0.25);
            ctx.closePath();
            ctx.fill();
          }
        }
        if (a.type === "boar") {
          ctx.fillStyle = "#e8e0cf";
          ctx.fillRect(a.r * 1.28, -4, 5, 2);
          ctx.fillRect(a.r * 1.28, 2, 5, 2);
        }
        ctx.fillStyle = "#10100a";
        ctx.beginPath();
        ctx.arc(a.r * 0.96, -3, 1.9, 0, TAU2);
        ctx.fill();
      }
    }
    ctx.restore();
    if (a.hit > 0) {
      ctx.globalAlpha = 0.42;
      ctx.fillStyle = "#fff";
      ctx.beginPath();
      ctx.arc(a.x, a.y, a.r * 1.12, 0, TAU2);
      ctx.fill();
      ctx.globalAlpha = 1;
    }
    if (a.aggro) {
      ctx.fillStyle = "#e2664a";
      ctx.font = "bold 13px Trebuchet MS";
      ctx.textAlign = "center";
      ctx.fillText("!", a.x, a.y - a.r - 9);
    }
    hpRing(ctx, a.x, a.y, a.r + 5, a.hp / a.max, a.type.includes("bear") ? "#e2664a" : "#e8b06a");
  }
  function drawMinicopter(ctx, S2, c, teamCol, flying) {
    const lift = flying ? 12 : 2;
    shadow(ctx, c.x, c.y + 16, 26);
    ctx.save();
    ctx.translate(c.x, c.y - lift);
    ctx.rotate(c.angle || 0);
    fillRR(ctx, -28, -3, 21, 6, 2, "#2c3328");
    ctx.fillStyle = "#2c3328";
    ctx.fillRect(-30, -8, 5, 16);
    const hull = teamCol || "#5d684c";
    ctx.fillStyle = rgrad(ctx, 0, 0, 19, shade(hull, 1.15), shade(hull, 0.5));
    ctx.beginPath();
    ctx.ellipse(0, 0, 19, 13, 0, 0, TAU2);
    ctx.fill();
    ctx.fillStyle = "rgba(150,200,230,.55)";
    ctx.beginPath();
    ctx.ellipse(8, 0, 7, 8, 0, 0, TAU2);
    ctx.fill();
    ctx.fillStyle = "rgba(255,255,255,.2)";
    ctx.beginPath();
    ctx.ellipse(5, -4, 5, 2.5, -0.4, 0, TAU2);
    ctx.fill();
    ctx.strokeStyle = "#252b22";
    ctx.lineWidth = 3;
    for (const s of [-1, 1]) {
      ctx.beginPath();
      ctx.moveTo(-10, s * 15);
      ctx.lineTo(18, s * 15);
      ctx.stroke();
    }
    ctx.globalAlpha = flying ? 0.5 : 0.85;
    ctx.strokeStyle = "#191c15";
    ctx.lineWidth = 5;
    const r = c.rotor || 0;
    ctx.beginPath();
    ctx.moveTo(Math.cos(r) * 24, Math.sin(r) * 24);
    ctx.lineTo(-Math.cos(r) * 24, -Math.sin(r) * 24);
    ctx.moveTo(Math.cos(r + 1.57) * 24, Math.sin(r + 1.57) * 24);
    ctx.lineTo(-Math.cos(r + 1.57) * 24, -Math.sin(r + 1.57) * 24);
    ctx.stroke();
    if (flying) {
      ctx.globalAlpha = 0.18;
      ctx.beginPath();
      ctx.arc(0, 0, 25, 0, TAU2);
      ctx.stroke();
    }
    ctx.globalAlpha = 1;
    ctx.fillStyle = "#11140f";
    ctx.beginPath();
    ctx.arc(0, 0, 3.4, 0, TAU2);
    ctx.fill();
    ctx.restore();
    if (c.hp < c.max && !c.destroyed) {
      ctx.fillStyle = "rgba(0,0,0,.6)";
      ctx.fillRect(c.x - 16, c.y - 26, 32, 4);
      ctx.fillStyle = "#9ad06a";
      ctx.fillRect(c.x - 16, c.y - 26, 32 * Math.max(0, c.hp / c.max), 4);
    }
  }
  function drawTransport(ctx, S2, tr, teamCol) {
    shadow(ctx, tr.x + 6, tr.y + 22, 44);
    ctx.save();
    ctx.translate(tr.x, tr.y - 10);
    ctx.rotate(tr.angle);
    fillRR(ctx, -52, -4, 26, 8, 3, "#262c22");
    ctx.fillStyle = "#262c22";
    ctx.fillRect(-54, -12, 6, 24);
    ctx.fillStyle = rgrad(ctx, 0, 0, 34, shade(teamCol, 1.1), shade(teamCol, 0.45));
    ctx.beginPath();
    ctx.ellipse(0, 0, 32, 19, 0, 0, TAU2);
    ctx.fill();
    ctx.fillStyle = "rgba(255,255,255,.12)";
    ctx.beginPath();
    ctx.ellipse(-4, -7, 18, 5, -0.1, 0, TAU2);
    ctx.fill();
    ctx.fillStyle = "rgba(150,200,230,.5)";
    ctx.beginPath();
    ctx.ellipse(17, 0, 9, 10, 0, 0, TAU2);
    ctx.fill();
    ctx.strokeStyle = "#1c211a";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.ellipse(0, 0, 32, 19, 0, 0, TAU2);
    ctx.stroke();
    const r = tr.rotor;
    ctx.globalAlpha = 0.45;
    ctx.strokeStyle = "#15180f";
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(Math.cos(r) * 40, Math.sin(r) * 40);
    ctx.lineTo(-Math.cos(r) * 40, -Math.sin(r) * 40);
    ctx.moveTo(Math.cos(r + 1.57) * 40, Math.sin(r + 1.57) * 40);
    ctx.lineTo(-Math.cos(r + 1.57) * 40, -Math.sin(r + 1.57) * 40);
    ctx.stroke();
    ctx.globalAlpha = 1;
    ctx.restore();
    if (tr.riders.length) {
      ctx.fillStyle = "#ffd76b";
      ctx.font = "bold 11px Trebuchet MS";
      ctx.textAlign = "center";
      ctx.fillText("\xD7" + tr.riders.length, tr.x, tr.y - 38);
    }
    if (tr.hp < tr.max) {
      ctx.fillStyle = "rgba(0,0,0,.6)";
      ctx.fillRect(tr.x - 22, tr.y - 34, 44, 4);
      ctx.fillStyle = "#9ad06a";
      ctx.fillRect(tr.x - 22, tr.y - 34, 44 * Math.max(0, tr.hp / tr.max), 4);
    }
  }
  function drawTrain(ctx, tr) {
    ctx.save();
    ctx.translate(tr.x, tr.y);
    ctx.rotate(tr.ang);
    ctx.fillStyle = "rgba(10,9,6,.3)";
    rrect(ctx, -118, -15 + 6, 150, 30, 8);
    ctx.fill();
    for (const off of [-44, -88]) {
      ctx.fillStyle = vgrad(ctx, 0, -14, 0, 28, "#5a4a36", "#39301f");
      rrect(ctx, off - 19, -14, 38, 28, 3);
      ctx.fill();
      ctx.fillStyle = "rgba(255,255,255,.12)";
      ctx.fillRect(off - 19, -14, 38, 4);
      ctx.fillStyle = "#23201a";
      ctx.fillRect(off - 19, 11, 38, 3);
    }
    ctx.fillStyle = vgrad(ctx, 0, -15, 0, 30, "#3a4048", "#1c2026");
    rrect(ctx, -23, -15, 46, 30, 4);
    ctx.fill();
    ctx.fillStyle = "rgba(255,255,255,.14)";
    ctx.fillRect(-23, -15, 46, 4);
    ctx.fillStyle = "#11151a";
    fillRR(ctx, -18, -10, 16, 20, 2, "#11151a");
    ctx.shadowColor = "#ffe9a3";
    ctx.shadowBlur = 6;
    ctx.fillStyle = "#ffe9a3";
    ctx.beginPath();
    ctx.arc(24, 0, 3.4, 0, TAU2);
    ctx.fill();
    ctx.shadowBlur = 0;
    ctx.fillStyle = "#1c2026";
    ctx.beginPath();
    ctx.moveTo(20, -13);
    ctx.lineTo(27, 0);
    ctx.lineTo(20, 13);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }
  function drawConvoy(ctx, S2, cv) {
    shadow(ctx, cv.x, cv.y + 14, 38);
    ctx.save();
    ctx.translate(cv.x, cv.y);
    ctx.rotate(cv.ang);
    ctx.fillStyle = vgrad(ctx, 0, -18, 0, 36, "#56604a", "#333b29");
    rrect(ctx, -34, -18, 68, 36, 5);
    ctx.fill();
    ctx.fillStyle = "rgba(255,255,255,.1)";
    ctx.fillRect(-34, -18, 68, 5);
    ctx.fillStyle = "#23281c";
    ctx.fillRect(-34, -19.5, 68, 3.4);
    ctx.fillRect(-34, 16.1, 68, 3.4);
    ctx.fillStyle = "#1f2418";
    fillRR(ctx, 15, -13, 15, 26, 3, "#272d1e");
    ctx.save();
    ctx.rotate(cv.taim - cv.ang);
    ctx.fillStyle = "#394233";
    ctx.beginPath();
    ctx.arc(0, 0, 11, 0, TAU2);
    ctx.fill();
    ctx.fillStyle = "#13160e";
    fillRR(ctx, 0, -2.6, 32, 5.2, 2, "#13160e");
    ctx.restore();
    ctx.restore();
    if (cv.hp < cv.max) {
      const f = Math.max(0, cv.hp / cv.max);
      ctx.fillStyle = "rgba(0,0,0,.6)";
      ctx.fillRect(cv.x - 28, cv.y - 31, 56, 5);
      ctx.fillStyle = f > 0.5 ? "#86c861" : f > 0.25 ? "#e0b24a" : "#d2664a";
      ctx.fillRect(cv.x - 28, cv.y - 31, 56 * f, 5);
    }
  }
  function drawConvoyGuard(ctx, g) {
    shadow(ctx, g.x, g.y + 8, 10);
    ctx.save();
    ctx.translate(g.x, g.y);
    ctx.rotate(g.angle);
    fillRR(ctx, 6, -1.6, 16, 3.2, 1.5, "#13160e");
    ctx.restore();
    ctx.fillStyle = "#6f7a4e";
    ctx.beginPath();
    ctx.arc(g.x, g.y, 7, 0, TAU2);
    ctx.fill();
    ctx.fillStyle = "#39402c";
    ctx.beginPath();
    ctx.arc(g.x, g.y - 1, 4.4, 0, TAU2);
    ctx.fill();
    if (g.hp < g.max) {
      ctx.fillStyle = "rgba(0,0,0,.6)";
      ctx.fillRect(g.x - 9, g.y - 13, 18, 3);
      ctx.fillStyle = "#cdd6c4";
      ctx.fillRect(g.x - 9, g.y - 13, 18 * Math.max(0, g.hp / g.max), 3);
    }
  }
  function drawPatrol(ctx, S2) {
    const p = S2.patrol;
    if (!p) return;
    shadow(ctx, p.x + 26, p.y + 30, 52);
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(p.angle);
    ctx.fillStyle = "#333c30";
    fillRR(ctx, -42, -4, 34, 8, 3, "#333c30");
    ctx.fillRect(-46, -12, 8, 24);
    ctx.fillStyle = rgrad(ctx, 0, 0, 30, "#48543e", "#272e22");
    ctx.beginPath();
    ctx.ellipse(0, 0, 30, 15, 0, 0, TAU2);
    ctx.fill();
    ctx.fillStyle = "#36402f";
    ctx.beginPath();
    ctx.ellipse(0, 0, 22, 12, 0, 0, TAU2);
    ctx.fill();
    ctx.fillStyle = "rgba(150,200,230,.6)";
    ctx.beginPath();
    ctx.ellipse(14, 0, 12, 8, 0, 0, TAU2);
    ctx.fill();
    ctx.fillStyle = "#41464d";
    fillRR(ctx, -8, -24, 16, 8, 2, "#41464d");
    fillRR(ctx, -8, 16, 16, 8, 2, "#41464d");
    if (p.flash > 0) {
      ctx.fillStyle = "#ffd76b";
      ctx.beginPath();
      ctx.arc(26, 0, 7, 0, TAU2);
      ctx.fill();
    }
    ctx.strokeStyle = "rgba(20,22,16,.55)";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.ellipse(0, 0, 56, 17.9, 0, p.rotor, p.rotor + 4.4);
    ctx.stroke();
    ctx.restore();
    if (p.hp < p.max) {
      const f = Math.max(0, p.hp / p.max);
      ctx.fillStyle = "rgba(0,0,0,.6)";
      ctx.fillRect(p.x - 30, p.y - 44, 60, 6);
      ctx.fillStyle = f > 0.4 ? "#9ad06a" : "#d9694f";
      ctx.fillRect(p.x - 30, p.y - 44, 60 * f, 6);
    }
    if (Math.sin(S2.t * 3.9) > 0) {
      ctx.fillStyle = "#ff3a2a";
      ctx.beginPath();
      ctx.arc(p.x - 18, p.y - 14, 3, 0, TAU2);
      ctx.fill();
    }
  }
  function drawShop(ctx, S2) {
    const sh = S2.world.shop;
    const t = S2.t;
    ctx.fillStyle = "rgba(120,200,255,0.04)";
    ctx.beginPath();
    ctx.arc(sh.x, sh.y, SAFE_R, 0, TAU2);
    ctx.fill();
    ctx.setLineDash([18, 14]);
    ctx.strokeStyle = `rgba(150,215,255,${0.26 + 0.12 * (0.5 + 0.5 * Math.sin(t * 1.5))})`;
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(sh.x, sh.y, SAFE_R, 0, TAU2);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = "rgba(150,215,255,.5)";
    ctx.font = "bold 22px Trebuchet MS";
    ctx.textAlign = "center";
    ctx.fillText("SAFE ZONE", sh.x, sh.y - SAFE_R + 30);
    shadow(ctx, sh.x, sh.y + 30, 52);
    ctx.fillStyle = rgrad(ctx, sh.x, sh.y, 46, "#6a5836", "#332d1f");
    ctx.beginPath();
    ctx.arc(sh.x, sh.y, 46, 0, TAU2);
    ctx.fill();
    ctx.fillStyle = vgrad(ctx, 0, sh.y - 21, 0, 26, "#9a6e3c", "#5e4326");
    rrect(ctx, sh.x - 30, sh.y - 21, 60, 26, 4);
    ctx.fill();
    ctx.fillStyle = "rgba(255,255,255,.12)";
    ctx.fillRect(sh.x - 30, sh.y - 21, 60, 5);
    ctx.fillStyle = vgrad(ctx, 0, sh.y - 40, 0, 22, "#b35140", "#7e3322");
    ctx.beginPath();
    ctx.moveTo(sh.x - 40, sh.y - 18);
    ctx.lineTo(sh.x, sh.y - 42);
    ctx.lineTo(sh.x + 40, sh.y - 18);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = "#e8b04a";
    for (let i = 0; i < 5; i++) {
      ctx.beginPath();
      ctx.arc(sh.x - 32 + i * 16, sh.y - 17, 4, 0, Math.PI);
      ctx.fill();
    }
    ctx.fillStyle = "#1f2616";
    ctx.font = "bold 12px Trebuchet MS";
    ctx.fillText("TRADE", sh.x, sh.y - 3);
    const p = S2.player;
    if (!p.dead && Math.hypot(p.x - sh.x, p.y - sh.y) < sh.r + 16 + 44) {
      ctx.fillStyle = "#c4d66a";
      ctx.font = "12px Trebuchet MS";
      ctx.fillText("E \u2014 trade", sh.x, sh.y - 50);
    }
  }
  function drawMonument(ctx, S2, m) {
    const t = S2.t;
    ctx.textAlign = "center";
    if (m.type === "quarry") {
      drawQuarry(ctx, S2, m);
      return;
    }
    ctx.save();
    ctx.translate(m.x, m.y);
    if (m.type === "gas") {
      ctx.fillStyle = "rgba(20,16,10,.25)";
      for (let i = 0; i < 5; i++) {
        blob(ctx, -70 + i * 38, 30 - i % 2 * 50, 13, i);
        ctx.fill();
      }
      for (const px of [-96, -30, 36, 96]) {
        ctx.fillStyle = "#3f4750";
        ctx.fillRect(px - 3, -70, 6, 52);
      }
      ctx.fillStyle = vgrad(ctx, 0, -82, 0, 24, "#a8432e", "#73291a");
      rrect(ctx, -108, -82, 216, 24, 6);
      ctx.fill();
      ctx.fillStyle = "rgba(244,240,228,.9)";
      ctx.fillRect(-108, -73, 216, 7);
      for (const dx of [-58, 0]) {
        ctx.fillStyle = "#5b636b";
        fillRR(ctx, dx - 9, -30, 18, 30, 2, "#5b636b");
        ctx.fillStyle = "#a8432e";
        fillRR(ctx, dx - 7, -28, 14, 15, 2, "#a8432e");
        ctx.fillStyle = "#cfe0ea";
        ctx.fillRect(dx - 5, -25, 10, 6);
      }
      ctx.fillStyle = vgrad(ctx, 0, -47, 0, 58, "#8a9199", "#4a5158");
      rrect(ctx, 31, -47, 54, 58, 3);
      ctx.fill();
      ctx.fillStyle = "#33363b";
      ctx.fillRect(44, -25, 18, 22);
      ctx.fillStyle = "#bfe0ef";
      ctx.fillRect(66, -38, 18, 16);
      ctx.fillStyle = "#3f4750";
      ctx.fillRect(-106, -46, 5, 46);
      ctx.fillStyle = "#caa14a";
      fillRR(ctx, -118, -74, 28, 28, 3, "#caa14a");
      ctx.fillStyle = "#2c2718";
      ctx.font = "bold 16px Trebuchet MS";
      ctx.fillText("$", -104, -54);
    } else if (m.type === "junk") {
      ctx.setLineDash([12, 8]);
      ctx.strokeStyle = "#4a4036";
      ctx.lineWidth = 3;
      ctx.strokeRect(-118, -92, 236, 184);
      ctx.setLineDash([]);
      for (let i = 0; i < 5; i++) {
        const a = i / 5 * TAU2;
        const hx = Math.cos(a) * 70, hy = Math.sin(a) * 54;
        ctx.fillStyle = rgrad(ctx, hx, hy, 17, "#7e848c", "#3e4248");
        ctx.beginPath();
        ctx.ellipse(hx, hy, 16, 9.5, 0, 0, TAU2);
        ctx.fill();
        ctx.fillStyle = "#5a4030";
        ctx.fillRect(hx - 13, hy - 4, 26, 4);
        ctx.fillStyle = "#8a3a2a";
        ctx.fillRect(hx, hy - 8, 9, 5);
      }
      for (const [cx2, cy2, rot, col] of [[-58, -40, 0.3, "#7a4030"], [54, 44, -0.5, "#3a5a6a"]]) {
        ctx.save();
        ctx.translate(cx2, cy2);
        ctx.rotate(rot);
        fillRR(ctx, -28, -13, 56, 26, 7, col);
        ctx.fillStyle = "rgba(255,255,255,.1)";
        ctx.fillRect(-28, -13, 56, 5);
        fillRR(ctx, -13, -9, 26, 12, 4, "rgba(20,22,20,.6)");
        ctx.fillStyle = "#22211c";
        for (const wx of [-18, 14]) for (const wy of [-14, 12]) {
          ctx.beginPath();
          ctx.arc(wx, wy, 5, 0, TAU2);
          ctx.fill();
        }
        ctx.restore();
      }
      for (const [tx2, ty2] of [[70, -50], [-66, 58]]) {
        for (let i = 0; i < 3; i++) {
          ctx.strokeStyle = "#23211d";
          ctx.lineWidth = 5;
          ctx.beginPath();
          ctx.arc(tx2, ty2 - i * 5, 11 - i * 1.2, 0, TAU2);
          ctx.stroke();
        }
      }
    } else {
      ctx.fillStyle = "rgba(10,9,6,.3)";
      ctx.beginPath();
      ctx.ellipse(0, 78, 128, 20, 0, 0, TAU2);
      ctx.fill();
      ctx.fillStyle = vgrad(ctx, 0, -82, 0, 164, "#7e848e", "#3a4048");
      rrect(ctx, -126, -82, 252, 164, 8);
      ctx.fill();
      ctx.fillStyle = "#5b626b";
      ctx.fillRect(-132, -92, 264, 22);
      ctx.fillStyle = "rgba(255,255,255,.07)";
      for (let i = 0; i < 6; i++) ctx.fillRect(-120 + i * 42, -60, 3, 140);
      for (const dx of [-72, 0, 72]) {
        ctx.fillStyle = "#2a2f35";
        fillRR(ctx, dx - 30, 26, 60, 56, 3, "#2a2f35");
        ctx.strokeStyle = "rgba(255,255,255,.1)";
        ctx.lineWidth = 2;
        for (let i = 1; i < 4; i++) {
          ctx.beginPath();
          ctx.moveTo(dx - 26, 26 + i * 13);
          ctx.lineTo(dx + 26, 26 + i * 13);
          ctx.stroke();
        }
      }
      ctx.fillStyle = "#4a5158";
      fillRR(ctx, -50, -104, 30, 16, 2, "#4a5158");
      fillRR(ctx, 24, -104, 30, 16, 2, "#4a5158");
    }
    ctx.restore();
    ctx.setLineDash([16, 14]);
    ctx.strokeStyle = `rgba(220,170,90,${0.2 + 0.1 * Math.sin(t * 1.6)})`;
    ctx.lineWidth = 3.5;
    ctx.beginPath();
    ctx.arc(m.x, m.y, MON_NOBUILD, 0, TAU2);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = "rgba(220,180,110,.5)";
    ctx.font = "15px Trebuchet MS";
    ctx.fillText("NO BUILD", m.x, m.y - MON_NOBUILD + 22);
    ctx.fillStyle = "#f0e4c4";
    ctx.font = "bold 14px Trebuchet MS";
    ctx.fillText(m.name, m.x, m.y - 0.62 * m.r);
  }
  function drawQuarry(ctx, S2, m) {
    const q = S2.quarry;
    const t = S2.t;
    ctx.save();
    ctx.translate(q.x, q.y);
    ctx.fillStyle = "rgba(70,62,44,.55)";
    ctx.beginPath();
    ctx.arc(0, 0, q.r * 0.66, 0, TAU2);
    ctx.fill();
    ctx.fillStyle = "#3a3426";
    ctx.beginPath();
    ctx.ellipse(-36, 26, 44, 24, 0, 0, TAU2);
    ctx.fill();
    ctx.fillStyle = "rgba(0,0,0,.3)";
    ctx.beginPath();
    ctx.ellipse(-36, 26, 30, 15, 0, 0, TAU2);
    ctx.fill();
    ctx.fillStyle = PAL.metalDk;
    ctx.fillRect(8 - 6, -46 - 32, 12, 64);
    ctx.fillStyle = PAL.metal;
    ctx.fillRect(8 - 10, -46 - 42, 20, 10);
    const armA = q.owner ? Math.sin(q.arm * 2.4) * 0.35 : -0.18;
    ctx.save();
    ctx.translate(14, -44);
    ctx.rotate(armA);
    fillRR(ctx, -43, -5, 86, 10, 3, PAL.metalLt);
    ctx.fillStyle = "#a4502e";
    ctx.beginPath();
    ctx.arc(-43, 0, 9, 0, TAU2);
    ctx.fill();
    ctx.restore();
    ctx.fillStyle = "#4d3a20";
    ctx.fillRect(-44 - 2, -58 - 40, 4, 46);
    const team = q.owner ? S2.teams.find((tm) => tm.owner === q.owner) : null;
    const fcol = q.owner === "p1" ? "#7ec850" : team ? team.col : "#6e6a5a";
    ctx.fillStyle = fcol;
    ctx.fillRect(-42, -96, 26, 14);
    if (q.capT > 0) {
      ctx.strokeStyle = "rgba(255,220,120,.85)";
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.arc(0, 0, q.r * 0.66, -Math.PI / 2, -Math.PI / 2 + q.capT / 8 * TAU2);
      ctx.stroke();
    }
    ctx.restore();
  }
  function drawAirdrop(ctx, S2) {
    const a = S2.airdrop;
    if (a) {
      if (a.fall < 1) {
        const sway = Math.sin(a.sway) * 12;
        shadow(ctx, a.x, a.gy, 26 * (0.4 + 0.6 * a.fall));
        ctx.save();
        ctx.translate(a.x + sway, a.y);
        ctx.fillStyle = "#b8503a";
        ctx.beginPath();
        ctx.arc(0, -34, 26, Math.PI, 0);
        ctx.fill();
        ctx.fillStyle = "rgba(255,255,255,.16)";
        ctx.beginPath();
        ctx.arc(-7, -36, 12, Math.PI, 0);
        ctx.fill();
        ctx.strokeStyle = "rgba(230,230,230,.6)";
        ctx.lineWidth = 1.2;
        for (const dx of [-24, -8, 8, 24]) {
          ctx.beginPath();
          ctx.moveTo(dx, -34);
          ctx.lineTo(0, -8);
          ctx.stroke();
        }
        fillRR(ctx, -14, -12, 28, 22, 3, "#5d6452");
        ctx.fillStyle = "#ffd76b";
        ctx.fillRect(-14, -4, 28, 4);
        ctx.restore();
      } else {
        shadow(ctx, a.x, a.y + 12, 26);
        fillRR(ctx, a.x - 16, a.y - 13, 32, 26, 3, "#525a47");
        ctx.fillStyle = vgrad(ctx, 0, a.y - 13, 0, 26, "#6c7558", "#3f4634");
        rrect(ctx, a.x - 14, a.y - 11, 28, 22, 2);
        ctx.fill();
        ctx.fillStyle = "#ffd76b";
        ctx.fillRect(a.x - 14, a.y - 2, 28, 4);
        ctx.fillStyle = "rgba(0,0,0,.6)";
        ctx.fillRect(a.x - 19, a.y - 22, 38, 4);
        ctx.fillStyle = "#e0b24a";
        ctx.fillRect(a.x - 19, a.y - 22, 38 * Math.max(0, a.hp / a.max), 4);
      }
    }
    const pl = S2.plane;
    if (pl) {
      ctx.save();
      ctx.translate(pl.x, pl.y);
      if (pl.vx < 0) ctx.scale(-1, 1);
      ctx.fillStyle = "rgba(10,9,6,.2)";
      ctx.beginPath();
      ctx.ellipse(0, 30, 30, 6, 0, 0, TAU2);
      ctx.fill();
      ctx.fillStyle = "#7e8691";
      ctx.beginPath();
      ctx.ellipse(0, 0, 26, 7, 0, 0, TAU2);
      ctx.fill();
      ctx.fillStyle = "#5e6670";
      ctx.beginPath();
      ctx.moveTo(-4, 0);
      ctx.lineTo(-20, -14);
      ctx.lineTo(-12, 0);
      ctx.closePath();
      ctx.fill();
      ctx.fillStyle = "#6b727c";
      ctx.beginPath();
      ctx.moveTo(2, -2);
      ctx.lineTo(-8, 14);
      ctx.lineTo(-14, 0);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }
  }
  function drawLockedCrate(ctx, S2) {
    const c = S2.lockedCrate;
    if (!c) return;
    shadow(ctx, c.x, c.y + 14, 26);
    fillRR(ctx, c.x - 20, c.y - 16, 40, 30, 3, PAL.metalDk);
    ctx.fillStyle = PAL.metal;
    ctx.fillRect(c.x - 20, c.y - 16, 40, 8);
    ctx.strokeStyle = PAL.metalLt;
    ctx.lineWidth = 2;
    rrect(ctx, c.x - 20, c.y - 16, 40, 30, 3);
    ctx.stroke();
    fillRR(ctx, c.x - 3, c.y - 8, 6, 10, 1.5, "#1c1f24");
    const on = c.blink % 0.8 < 0.4;
    ctx.fillStyle = on ? c.started ? "#ffb84a" : "#d23c28" : "#3a3f45";
    if (on) {
      ctx.shadowColor = ctx.fillStyle;
      ctx.shadowBlur = 6;
    }
    ctx.beginPath();
    ctx.arc(c.x + 13, c.y - 11, 3.4, 0, TAU2);
    ctx.fill();
    ctx.shadowBlur = 0;
    ctx.strokeStyle = "rgba(255,200,90,.85)";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(c.x, c.y, 30, -Math.PI / 2, -Math.PI / 2 + (1 - c.t / 60) * TAU2);
    ctx.stroke();
  }
  function drawCrossing(ctx, S2, c) {
    ctx.save();
    ctx.translate(c.x, c.y);
    ctx.rotate(c.railAng);
    for (const side of [-1, 1]) {
      ctx.save();
      ctx.translate(0, side * 38);
      ctx.fillStyle = "rgba(10,9,6,.3)";
      ctx.beginPath();
      ctx.ellipse(0, 3, 8, 3, 0, 0, TAU2);
      ctx.fill();
      fillRR(ctx, -3, -13, 6, 13, 1.5, "#26262b");
      const raised = 0.46 * Math.PI;
      const ang = raised * (1 - c.gate) * -side;
      ctx.save();
      ctx.translate(0, -11);
      ctx.rotate(ang + (side < 0 ? Math.PI : 0));
      ctx.fillStyle = "#1c1c20";
      ctx.fillRect(0, -2, 40, 4);
      for (let i = 0; i < 4; i++) {
        ctx.fillStyle = i % 2 ? "#e8e4da" : "#c03a2a";
        ctx.fillRect(3 + i * 9.2, -2, 8, 4);
      }
      ctx.restore();
      if (c.active) {
        const ph = Math.sin(S2.t * 10) > 0;
        for (const lx of [-4.5, 4.5]) {
          const lit = lx < 0 === ph;
          ctx.fillStyle = lit ? "#ff3a2a" : "#521616";
          if (lit) {
            ctx.shadowColor = "#ff3a2a";
            ctx.shadowBlur = 7;
          }
          ctx.beginPath();
          ctx.arc(lx, -7, 2.7, 0, TAU2);
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      }
      ctx.restore();
    }
    ctx.restore();
  }
  function drawDummy(ctx, S2, d) {
    shadow(ctx, d.x, d.y + 8, d.r);
    ctx.fillStyle = "#5b4a2c";
    ctx.fillRect(d.x - 3, d.y - 4, 6, d.r + 8);
    for (const [r, col] of [[d.r, "#d8c79a"], [d.r * 0.74, "#b23b2a"], [d.r * 0.5, "#e8e0cf"], [d.r * 0.28, "#b23b2a"]]) {
      ctx.fillStyle = col;
      ctx.beginPath();
      ctx.arc(d.x, d.y - 6, r, 0, TAU2);
      ctx.fill();
    }
    if (d.hit > 0) {
      ctx.globalAlpha = 0.45;
      ctx.fillStyle = "#fff";
      ctx.beginPath();
      ctx.arc(d.x, d.y - 6, d.r, 0, TAU2);
      ctx.fill();
      ctx.globalAlpha = 1;
    }
    hpRing(ctx, d.x, d.y, d.r + 5, d.hp / d.max, "#e8b06a");
  }

  // src/client/render/fx.js
  var TAU3 = Math.PI * 2;
  function drawScorch(ctx, S2, cam) {
    for (const s of S2.scorch) {
      if (!cam.inView(s.x, s.y, s.r + 20)) continue;
      const g = ctx.createRadialGradient(s.x, s.y, s.r * 0.1, s.x, s.y, s.r);
      g.addColorStop(0, "rgba(16,12,8,.55)");
      g.addColorStop(0.7, "rgba(18,14,10,.35)");
      g.addColorStop(1, "rgba(18,14,10,0)");
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.ellipse(s.x, s.y, s.r, s.r * 0.72, 0, 0, TAU3);
      ctx.fill();
    }
  }
  function drawFootprints(ctx, S2, cam) {
    for (const f of S2.footprints) {
      if (!cam.inView(f.x, f.y, 20)) continue;
      ctx.globalAlpha = (1 - f.t / 10) * 0.28;
      ctx.fillStyle = "rgb(28,22,14)";
      ctx.save();
      ctx.translate(f.x, f.y);
      ctx.rotate(f.a);
      ctx.beginPath();
      ctx.ellipse(0, 0, 4.4, 2.5, 0, 0, TAU3);
      ctx.fill();
      ctx.restore();
    }
    ctx.globalAlpha = 1;
  }
  function drawBullets(ctx, S2, cam) {
    for (const b of S2.bullets) {
      if (!cam.inView(b.x, b.y, 60)) continue;
      let col = PAL.tracer, lw = 3, head = 2, glow = false;
      if (b.col === "hmg") {
        col = PAL.hmgTracer;
        lw = 4;
        head = 2.8;
        glow = true;
      } else if (b.col === "ricochet" || b.ricochet) {
        col = PAL.ricochet;
        lw = 4;
        head = 2.8;
        glow = true;
      }
      if (glow) {
        ctx.shadowColor = col;
        ctx.shadowBlur = 6;
      }
      ctx.strokeStyle = col;
      ctx.lineWidth = lw;
      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.moveTo(b.px, b.py);
      ctx.lineTo(b.x, b.y);
      ctx.stroke();
      ctx.fillStyle = glow ? col : "#fff";
      ctx.beginPath();
      ctx.arc(b.x, b.y, head, 0, TAU3);
      ctx.fill();
      ctx.shadowBlur = 0;
    }
  }
  function drawRockets(ctx, S2, cam) {
    for (const r of S2.rockets) {
      if (!cam.inView(r.x, r.y, 40)) continue;
      ctx.save();
      ctx.translate(r.x, r.y);
      ctx.rotate(Math.atan2(r.vy, r.vx));
      ctx.fillStyle = "#8a8f7a";
      ctx.fillRect(-9, -4, 4, 8);
      fillRR(ctx, -7, -3.5, 13, 7, 2, "#39402f");
      ctx.fillStyle = PAL.explosion;
      ctx.beginPath();
      ctx.moveTo(6, -3.5);
      ctx.lineTo(12, 0);
      ctx.lineTo(6, 3.5);
      ctx.closePath();
      ctx.fill();
      ctx.shadowColor = "#ff9b3d";
      ctx.shadowBlur = 8;
      ctx.fillStyle = "rgba(255,155,61,.9)";
      ctx.beginPath();
      ctx.arc(-10, 0, 3 + Math.random() * 1.5, 0, TAU3);
      ctx.fill();
      ctx.shadowBlur = 0;
      ctx.restore();
    }
  }
  function drawGrenades(ctx, S2, cam) {
    for (const g of S2.grenades) {
      if (!cam.inView(g.x, g.y, 20)) continue;
      shadow(ctx, g.x, g.y + 4, 5);
      ctx.fillStyle = "#2c3a22";
      ctx.beginPath();
      ctx.arc(g.x, g.y, 6, 0, TAU3);
      ctx.fill();
      ctx.fillStyle = "rgba(255,255,255,.2)";
      ctx.beginPath();
      ctx.arc(g.x - 1.6, g.y - 1.6, 2.2, 0, TAU3);
      ctx.fill();
      if (Math.sin(g.bob * 30) > 0) {
        ctx.fillStyle = "#ff3a2a";
        ctx.beginPath();
        ctx.arc(g.x + 3, g.y - 4, 1.6, 0, TAU3);
        ctx.fill();
      }
    }
  }
  function drawSatchels(ctx, S2, cam) {
    for (const s of S2.satchels) {
      if (!cam.inView(s.x, s.y, 20)) continue;
      fillRR(ctx, s.x - 7, s.y - 6, 14, 12, 2, "#3a342c");
      ctx.fillStyle = "#23201a";
      ctx.fillRect(s.x - 7, s.y - 6, 14, 3);
      const on = Math.sin(S2.t * 18) > 0;
      ctx.fillStyle = on ? "#ff3a2a" : "#7a1a12";
      if (on) {
        ctx.shadowColor = "#ff3a2a";
        ctx.shadowBlur = 6;
      }
      ctx.beginPath();
      ctx.arc(s.x + 4, s.y - 2, 2, 0, TAU3);
      ctx.fill();
      ctx.shadowBlur = 0;
    }
  }
  function drawFires(ctx, S2, cam) {
    for (const f of S2.fires) {
      if (!cam.inView(f.x, f.y, f.r + 40)) continue;
      const a = Math.min(1, f.life / 2) * Math.min(1, (f.max - f.life) / 0.5);
      ctx.globalAlpha = a;
      const g = ctx.createRadialGradient(f.x, f.y, 2, f.x, f.y, f.r);
      g.addColorStop(0, "rgba(255,150,45,0.5)");
      g.addColorStop(1, "rgba(255,150,45,0)");
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(f.x, f.y, f.r, 0, TAU3);
      ctx.fill();
      for (let k = 0; k < 5; k++) {
        const ph = S2.t * 9 + k * 1.7 + f.x * 0.07;
        const x = f.x + Math.sin(ph) * 5 + (k - 2) * 6;
        const h = 16 + Math.sin(1.3 * ph) * 7 + (k === 2 ? 8 : 0);
        const gg = ctx.createLinearGradient(0, f.y, 0, f.y - h);
        gg.addColorStop(0, "#cf3c18");
        gg.addColorStop(0.55, "#ff8a2a");
        gg.addColorStop(1, "#ffe46e");
        ctx.fillStyle = gg;
        ctx.beginPath();
        ctx.moveTo(x - 4, f.y);
        ctx.quadraticCurveTo(x - 5, f.y - h * 0.5, x, f.y - h);
        ctx.quadraticCurveTo(x + 5, f.y - h * 0.5, x + 4, f.y);
        ctx.closePath();
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    }
  }
  function drawWrecks(ctx, S2, cam) {
    for (const w of S2.wrecks) {
      if (!cam.inView(w.x, w.y, 60)) continue;
      ctx.fillStyle = "#22211c";
      ctx.save();
      ctx.translate(w.x, w.y);
      ctx.rotate(w.x % 1.3);
      fillRR(ctx, -16, -9, 32, 18, 4, "#26241e");
      ctx.fillStyle = "#16151278";
      ctx.fillRect(-10, -5, 20, 10);
      ctx.restore();
      const flick = 0.7 + Math.sin(S2.t * 11 + w.x) * 0.3;
      const g = ctx.createRadialGradient(w.x, w.y - 4, 1, w.x, w.y - 4, 22 * flick);
      g.addColorStop(0, "rgba(255,170,60,.8)");
      g.addColorStop(1, "rgba(255,120,30,0)");
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(w.x, w.y - 4, 22 * flick, 0, TAU3);
      ctx.fill();
    }
  }
  function drawParticles(ctx, S2, cam) {
    for (const p of S2.particles) {
      if (!cam.inView(p.x, p.y, 30)) continue;
      ctx.globalAlpha = Math.max(0, p.life / p.max);
      ctx.fillStyle = p.col;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, TAU3);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
  }
  function drawFlashes(ctx, S2, cam) {
    for (const f of S2.flashes) {
      if (!cam.inView(f.x, f.y, f.r * 2)) continue;
      const t = f.life / f.max;
      ctx.globalAlpha = 0.8 * t;
      ctx.fillStyle = PAL.explosion;
      ctx.beginPath();
      ctx.arc(f.x, f.y, f.r * (1.1 - 0.5 * t), 0, TAU3);
      ctx.fill();
      ctx.globalAlpha = t;
      ctx.fillStyle = "#fff3c8";
      ctx.beginPath();
      ctx.arc(f.x, f.y, 0.5 * f.r * (1 - 0.4 * t), 0, TAU3);
      ctx.fill();
      ctx.globalAlpha = 0.5 * t;
      ctx.strokeStyle = "rgba(255,220,160,.8)";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(f.x, f.y, f.r * (1.5 - t), 0, TAU3);
      ctx.stroke();
    }
    ctx.globalAlpha = 1;
    if (S2.muzzle) {
      const m = S2.muzzle;
      ctx.save();
      ctx.translate(m.x, m.y);
      ctx.rotate(m.a);
      ctx.fillStyle = PAL.flash;
      ctx.beginPath();
      for (let i = 0; i < 10; i++) {
        const r = i % 2 ? 4 : 9;
        const a = i / 10 * TAU3;
        i ? ctx.lineTo(Math.cos(a) * r, Math.sin(a) * r) : ctx.moveTo(r, 0);
      }
      ctx.closePath();
      ctx.fill();
      ctx.fillStyle = "#fff6c8";
      ctx.beginPath();
      ctx.arc(0, 0, 3, 0, TAU3);
      ctx.fill();
      ctx.restore();
    }
  }
  function drawFloats(ctx, S2, cam) {
    ctx.font = "bold 13px Trebuchet MS";
    ctx.textAlign = "center";
    for (const f of S2.floats) {
      if (!cam.inView(f.x, f.y, 60)) continue;
      const a = Math.max(0, f.life / f.max);
      ctx.globalAlpha = a;
      ctx.fillStyle = "#000";
      ctx.fillText(f.text, f.x + 1, f.y + 1);
      ctx.fillStyle = f.col;
      ctx.fillText(f.text, f.x, f.y);
    }
    ctx.globalAlpha = 1;
  }
  function drawLoot(ctx, S2, cam) {
    const COLS2 = {
      wood: ["#b98446", "#6f4a22"],
      stone: ["#aab1b8", "#5f656c"],
      metal: ["#e8a24e", "#a85f1c"],
      scrap: ["#d6dce0", "#717880"],
      ammo: ["#ffe08a", "#b8902a"],
      rocket: ["#ff9a5a", "#c2461c"],
      sniper: ["#bfe3ff", "#5f7e9e"],
      satchel: ["#c8b88a", "#6a5c3a"],
      gun: ["#c4c9bd", "#5a6052"]
    };
    for (const L of S2.loot) {
      if (!cam.inView(L.x, L.y, 20)) continue;
      const c = COLS2[L.kind] || COLS2.metal;
      const bob = Math.sin(L.bob * 3) * 2;
      shadow(ctx, L.x, L.y + 6, 6);
      fillRR(ctx, L.x - 5, L.y - 5 + bob, 10, 10, 3, c[1]);
      fillRR(ctx, L.x - 4, L.y - 4 + bob, 8, 4, 2, c[0]);
      ctx.strokeStyle = "rgba(0,0,0,.4)";
      ctx.lineWidth = 1;
      rrect(ctx, L.x - 5, L.y - 5 + bob, 10, 10, 3);
      ctx.stroke();
    }
  }
  function drawSignal(ctx, S2, cam) {
    const s = S2.signal;
    if (!s || !cam.inView(s.x, s.y, 40)) return;
    fillRR(ctx, s.x - 4, s.y - 3, 8, 6, 2, "#5d3a78");
    ctx.fillStyle = "#a96bd4";
    ctx.fillRect(s.x - 4, s.y - 3, 8, 2);
  }
  function drawLaserSight(ctx, S2, cam, wallBlocksView2) {
    const p = S2.player;
    if (!p.rifleLaser || S2.slot !== 2 || p.dead || p.inCopter) return;
    const a = p.angle;
    let len = 640;
    for (let d = 60; d <= 640; d += 60) {
      const x = p.x + Math.cos(a) * d, y = p.y + Math.sin(a) * d;
      if (wallBlocksView2(S2, p.x, p.y, x, y)) {
        len = d;
        break;
      }
    }
    const x0 = p.x + Math.cos(a) * 22, y0 = p.y + Math.sin(a) * 22;
    const x1 = p.x + Math.cos(a) * len, y1 = p.y + Math.sin(a) * len;
    ctx.strokeStyle = PAL.laser;
    ctx.lineWidth = 1.4;
    ctx.shadowColor = "rgba(255,40,30,.8)";
    ctx.shadowBlur = 5;
    ctx.beginPath();
    ctx.moveTo(x0, y0);
    ctx.lineTo(x1, y1);
    ctx.stroke();
    ctx.shadowBlur = 0;
    ctx.fillStyle = "rgba(255,90,80,0.95)";
    ctx.beginPath();
    ctx.arc(x1, y1, 2.3, 0, TAU3);
    ctx.fill();
  }

  // src/client/render/ui.js
  function makeUi(S2, view2, cam, lighting) {
    let grain = null;
    function makeGrain() {
      grain = document.createElement("canvas");
      grain.width = 128;
      grain.height = 128;
      const g = grain.getContext("2d");
      const img = g.createImageData(128, 128);
      for (let i = 0; i < img.data.length; i += 4) {
        const v = 118 + Math.random() * 20;
        img.data[i] = img.data[i + 1] = img.data[i + 2] = v;
        img.data[i + 3] = 14;
      }
      g.putImageData(img, 0, 0);
    }
    return {
      drawBuildGhost(ctx) {
        if (!S2.buildMode) return;
        const v = cam.viewRect(0);
        ctx.strokeStyle = "rgba(196,214,106,.08)";
        ctx.lineWidth = 1 / cam.zoom;
        ctx.beginPath();
        for (let x = Math.floor(v.x0 / TILE) * TILE; x < v.x1; x += TILE) {
          ctx.moveTo(x, v.y0);
          ctx.lineTo(x, v.y1);
        }
        for (let y = Math.floor(v.y0 / TILE) * TILE; y < v.y1; y += TILE) {
          ctx.moveTo(v.x0, y);
          ctx.lineTo(v.x1, y);
        }
        ctx.stroke();
        const t = buildTargetAt(S2, S2.cmd.mx, S2.cmd.my);
        const ok = canPlace(S2, OWNER, S2.buildPiece, t) && afford();
        const colF = ok ? "rgba(180,220,120,.45)" : "rgba(210,80,60,.5)";
        const colS = ok ? "#c4d66a" : "#d2553c";
        const def = BUILD[S2.buildPiece];
        if (def.cat === "cell") {
          ctx.fillStyle = colF;
          ctx.fillRect(t.gx * TILE, t.gy * TILE, TILE, TILE);
          ctx.strokeStyle = colS;
          ctx.lineWidth = 2 / cam.zoom;
          ctx.strokeRect(t.gx * TILE, t.gy * TILE, TILE, TILE);
          if (S2.buildPiece === "turret") {
            ctx.strokeStyle = "rgba(0,0,0,.4)";
            ctx.beginPath();
            ctx.arc(t.gx * TILE + 32, t.gy * TILE + 32, 14, 0, 7);
            ctx.stroke();
          }
        } else {
          const w = { type: S2.buildPiece, rot: S2.buildRot & 1 };
          const s = wallSegOf(t.key, w);
          ctx.strokeStyle = colF;
          ctx.lineWidth = 12;
          ctx.lineCap = "round";
          ctx.globalAlpha = 0.7;
          ctx.beginPath();
          ctx.moveTo(s[0], s[1]);
          ctx.lineTo(s[2], s[3]);
          ctx.stroke();
          ctx.globalAlpha = 1;
        }
        function afford() {
          for (const k in def.cost) if ((S2.inv[k] || 0) < def.cost[k]) return false;
          return true;
        }
      },
      drawRangeRings(ctx) {
        if (S2.player.inCopter || view2.godView) return;
        for (const [k, d] of S2.deploys) {
          if (d.type !== "cupboard" || d.owner !== OWNER) continue;
          const [gx, gy] = k.split(",").map(Number);
          const p = cam.worldToScreen(gx * TILE + 32, gy * TILE + 32);
          ctx.setLineDash([11, 9]);
          ctx.strokeStyle = "rgba(126,200,80,0.34)";
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(p.x, p.y, CLAIM_R * cam.zoom, 0, 7);
          ctx.stroke();
          ctx.setLineDash([]);
        }
        if (!S2.shopOpen && !S2.storeOpen) {
          const gx = Math.floor(S2.cmd.mx / TILE), gy = Math.floor(S2.cmd.my / TILE);
          const d = S2.deploys.get(gx + "," + gy);
          if (d && d.type === "turret") {
            const p = cam.worldToScreen(gx * TILE + 32, gy * TILE + 32);
            ctx.setLineDash([6, 7]);
            ctx.strokeStyle = "rgba(240,156,72,0.3)";
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(p.x, p.y, TTIER[d.tier || 1].range * cam.zoom, 0, 7);
            ctx.stroke();
            ctx.setLineDash([]);
          }
        }
        const hov = hoverTarget();
        if (hov) {
          const p = cam.worldToScreen(hov.x, hov.y);
          const f = Math.max(0, hov.hp / hov.max);
          ctx.fillStyle = "rgba(0,0,0,.7)";
          ctx.fillRect(p.x - 18, p.y - 40 * cam.zoom - 8, 36, 5);
          ctx.fillStyle = f > 0.5 ? "#7bbf4f" : f > 0.25 ? "#d8b24a" : "#c0432f";
          ctx.fillRect(p.x - 18, p.y - 40 * cam.zoom - 8, 36 * f, 5);
        }
      },
      drawScreen(ctx, dt) {
        const VW = view2.VW, VH = view2.VH;
        const t = S2.t;
        if (!view2.godView) {
          const vg = ctx.createRadialGradient(VW / 2, VH / 2, 0.34 * Math.min(VW, VH), VW / 2, VH / 2, 0.72 * Math.max(VW, VH));
          vg.addColorStop(0, "rgba(8,7,5,0)");
          vg.addColorStop(1, "rgba(8,7,5,0.16)");
          ctx.fillStyle = vg;
          ctx.fillRect(0, 0, VW, VH);
        }
        if (!grain) makeGrain();
        ctx.globalAlpha = 0.05;
        ctx.globalCompositeOperation = "overlay";
        for (let y = 0; y < VH; y += 128) for (let x = 0; x < VW; x += 128) ctx.drawImage(grain, x, y);
        ctx.globalCompositeOperation = "source-over";
        ctx.globalAlpha = 1;
        if (view2.godView) drawMapMarkers(ctx);
        else drawReticle(ctx);
        for (const b of S2.blasts || []) {
          const p = cam.worldToScreen(b.x, b.y);
          if (p.x > -46 && p.x < VW + 46 && p.y > -46 && p.y < VH + 46) continue;
          const cxp = Math.max(24, Math.min(VW - 24, p.x)), cyp = Math.max(24, Math.min(VH - 24, p.y));
          const a = b.life / b.max;
          ctx.fillStyle = `rgba(255,178,74,${0.5 * a})`;
          ctx.beginPath();
          ctx.arc(cxp, cyp, 18 * (1.3 - a), 0, 7);
          ctx.fill();
        }
        marker(ctx, S2.airdrop && { x: S2.airdrop.x, y: S2.airdrop.fall < 1 ? S2.airdrop.gy : S2.airdrop.y }, "AIRDROP", "#ffd76b", "\u2708");
        if (S2.quarry) {
          const team = S2.teams.find((t2) => t2.owner === S2.quarry.owner);
          const col = S2.quarry.owner === OWNER ? "#7ec850" : team ? team.col : "#b9b39d";
          marker(ctx, S2.quarry, "QUARRY", col, "Q");
        }
        if (S2.lockedCrate) {
          const c = S2.lockedCrate;
          marker(ctx, c, c.started ? "CRATE " + Math.ceil(c.t) + "s" : "LOCKED CRATE", "#ffb84a", "C");
        }
        if (S2.raidAlarm) {
          const al = Math.min(1, S2.raidAlarm.t / 1.5);
          ctx.fillStyle = `rgba(180,30,20,${0.16 * al})`;
          ctx.fillRect(0, 0, VW, VH);
          ctx.font = "bold 22px Trebuchet MS";
          ctx.textAlign = "center";
          ctx.fillStyle = "rgba(0,0,0,.7)";
          ctx.fillText("BASE UNDER ATTACK", VW / 2 + 2, 54);
          ctx.fillStyle = `rgba(255,${80 + 110 * (0.5 + 0.5 * Math.sin(t * 8))},55,${al})`;
          ctx.fillText("BASE UNDER ATTACK", VW / 2, 52);
        }
        if (S2.player.hurt > 0) {
          ctx.fillStyle = `rgba(150,28,18,${S2.player.hurt * 0.5})`;
          ctx.fillRect(0, 0, VW, VH);
        }
        if (S2.player.dead) {
          ctx.fillStyle = "rgba(10,6,4,.55)";
          ctx.fillRect(0, 0, VW, VH);
          ctx.textAlign = "center";
          ctx.fillStyle = "#e6d9b8";
          ctx.font = "bold 44px Trebuchet MS";
          ctx.fillText("YOU DIED", VW / 2, VH / 2 - 4);
          ctx.fillStyle = "#b9a06f";
          ctx.font = "15px Trebuchet MS";
          ctx.fillText("respawning\u2026", VW / 2, VH / 2 + 24);
        }
        ctx.textAlign = "left";
        ctx.font = "bold 14px Trebuchet MS";
        S2.elims.forEach((e, i) => {
          const a = Math.min(1, e.t / 3);
          ctx.globalAlpha = a;
          ctx.fillStyle = "rgba(0,0,0,.5)";
          ctx.fillRect(VW / 2 - 130, 92 + i * 24, 264, 20);
          ctx.fillStyle = "#e2664a";
          ctx.fillText(e.text, VW / 2 - 122, 106 + i * 24);
        });
        ctx.globalAlpha = 1;
      },
      drawDebugPaths(ctx) {
        for (const u of S2.units) {
          if (u.dead || u.eliminated || u.flying) continue;
          if (!cam.inView(u.x, u.y, 600)) continue;
          const col = u.ally ? "#7ec850" : u.col;
          if (u.path && u.pathI < u.path.length) {
            ctx.strokeStyle = col;
            ctx.lineWidth = 1.6;
            ctx.globalAlpha = 0.8;
            ctx.beginPath();
            ctx.moveTo(u.x, u.y);
            for (let i = u.pathI; i < u.path.length; i++) ctx.lineTo(u.path[i].x, u.path[i].y);
            ctx.stroke();
            ctx.fillStyle = col;
            for (let i = u.pathI; i < u.path.length; i++) {
              ctx.beginPath();
              ctx.arc(u.path[i].x, u.path[i].y, u.path[i].door ? 4 : 2.6, 0, 7);
              ctx.fill();
            }
            ctx.globalAlpha = 1;
          }
          ctx.font = "bold 10px Trebuchet MS";
          ctx.textAlign = "center";
          ctx.fillStyle = "#000";
          ctx.fillText(u.act || u.state, u.x + 1, u.y - 29);
          ctx.fillStyle = col;
          ctx.fillText(u.act || u.state, u.x, u.y - 30);
        }
      }
    };
    function hoverTarget() {
      if (S2.shopOpen || S2.storeOpen || S2.player.inCopter) return null;
      const gx = Math.floor(S2.cmd.mx / TILE), gy = Math.floor(S2.cmd.my / TILE);
      const d = S2.deploys.get(gx + "," + gy);
      if (d) return { x: gx * TILE + 32, y: gy * TILE + 32, hp: d.hp, max: d.max };
      const st = S2.structures.get(gx + "," + gy);
      if (st) return { x: gx * TILE + 32, y: gy * TILE + 32, hp: st.hp, max: st.max };
      for (const k of ["V," + gx + "," + gy, "V," + (gx + 1) + "," + gy, "H," + gx + "," + gy, "H," + gx + "," + (gy + 1)]) {
        const w = S2.walls.get(k);
        if (!w) continue;
        const s = wallSegOf(k, w);
        const mx = (s[0] + s[2]) / 2, my = (s[1] + s[3]) / 2;
        if (Math.hypot(S2.cmd.mx - mx, S2.cmd.my - my) < 16) return { x: mx, y: my, hp: w.hp, max: w.max };
      }
      return null;
    }
    function drawReticle(ctx) {
      const x = view2.mouseSX, y = view2.mouseSY;
      if (x === void 0) return;
      ctx.strokeStyle = "rgba(225,235,195,.9)";
      ctx.lineWidth = 3.5;
      ctx.lineCap = "round";
      for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
        ctx.beginPath();
        ctx.moveTo(x + dx * 6, y + dy * 6);
        ctx.lineTo(x + dx * 16, y + dy * 16);
        ctx.stroke();
      }
      ctx.fillStyle = "rgba(225,235,195,.9)";
      ctx.fillRect(x - 2, y - 2, 4, 4);
    }
    function marker(ctx, obj, label, col, chip) {
      if (!obj) return;
      const p = cam.worldToScreen(obj.x, obj.y);
      const VW = view2.VW, VH = view2.VH;
      ctx.textAlign = "center";
      if (p.x > 0 && p.x < VW && p.y > 0 && p.y < VH) {
        if (view2.godView) return;
        ctx.font = "bold 11px Trebuchet MS";
        ctx.fillStyle = "rgba(0,0,0,.7)";
        ctx.fillText(label, p.x + 1, p.y - 43);
        ctx.fillStyle = col;
        ctx.fillText(label, p.x, p.y - 44);
      } else {
        const cx2 = Math.max(54, Math.min(VW - 54, p.x)), cy2 = Math.max(54, Math.min(VH - 54, p.y));
        ctx.fillStyle = col;
        ctx.globalAlpha = 0.92;
        ctx.beginPath();
        ctx.arc(cx2, cy2, 14, 0, 7);
        ctx.fill();
        ctx.globalAlpha = 1;
        ctx.fillStyle = "#1c1812";
        ctx.font = "bold 13px Trebuchet MS";
        ctx.fillText(chip, cx2, cy2 + 4.5);
      }
    }
    function drawMapMarkers(ctx) {
      const t = S2.t;
      ctx.textAlign = "center";
      for (const m of S2.world.monuments) {
        const p = cam.worldToScreen(m.x, m.y);
        ctx.fillStyle = "#caa24a";
        ctx.beginPath();
        ctx.arc(p.x, p.y, 5, 0, 7);
        ctx.fill();
        ctx.font = "10px Trebuchet MS";
        ctx.fillStyle = "#e8dcc0";
        ctx.fillText(m.name, p.x, p.y - 9);
      }
      for (const team of S2.teams) {
        for (const rec of team.bases) {
          if (rec.dead) continue;
          const p = cam.worldToScreen(rec.hx, rec.hy);
          ctx.fillStyle = team.col;
          ctx.fillRect(p.x - 6, p.y - 6, 12, 12);
          ctx.fillStyle = "#fff";
          ctx.font = "bold 9px Trebuchet MS";
          ctx.fillText(String(team.id + 1), p.x, p.y + 3.5);
        }
      }
      for (const [k, d] of S2.deploys) {
        if (d.type === "cupboard" && d.owner === OWNER) {
          const [gx, gy] = k.split(",").map(Number);
          const p = cam.worldToScreen(gx * TILE + 32, gy * TILE + 32);
          ctx.strokeStyle = "#caa24a";
          ctx.lineWidth = 2;
          ctx.strokeRect(p.x - 5, p.y - 5, 10, 10);
        }
      }
      for (const u of S2.units) {
        if (u.dead || u.eliminated) continue;
        const p = cam.worldToScreen(u.x, u.y);
        ctx.fillStyle = "rgba(0,0,0,.8)";
        ctx.beginPath();
        ctx.arc(p.x, p.y, (u.primary ? 3 : 2) + 1, 0, 7);
        ctx.fill();
        ctx.fillStyle = u.ally ? "#7ec850" : u.col;
        ctx.beginPath();
        ctx.arc(p.x, p.y, u.primary ? 3 : 2, 0, 7);
        ctx.fill();
      }
      for (const r of S2.raids) {
        const p = cam.worldToScreen(r.x, r.y);
        const pulse = 0.5 + 0.5 * Math.sin(t * 6);
        ctx.fillStyle = `rgba(255,82,56,${0.35 + 0.4 * (r.t / 60)})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 7 + 3 * pulse, 0, 7);
        ctx.fill();
        ctx.fillStyle = "#ff5238";
        ctx.beginPath();
        ctx.arc(p.x, p.y, 3.2, 0, 7);
        ctx.fill();
      }
      if (S2.airdrop) {
        const p = cam.worldToScreen(S2.airdrop.x, S2.airdrop.gy);
        ctx.strokeStyle = "#ffd76b";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 8 + 3 * Math.sin(t * 5), 0, 7);
        ctx.stroke();
      }
      for (const cv of S2.convoys) {
        const p = cam.worldToScreen(cv.x, cv.y);
        ctx.fillStyle = "#8a9a5a";
        ctx.fillRect(p.x - 5, p.y - 3, 10, 6);
      }
      if (S2.plane) {
        const p = cam.worldToScreen(S2.plane.x, S2.plane.y);
        ctx.fillStyle = "#e6eef4";
        ctx.beginPath();
        ctx.arc(p.x, p.y, 3.2, 0, 7);
        ctx.fill();
      }
      if (S2.deathMark) {
        const p = cam.worldToScreen(S2.deathMark.x, S2.deathMark.y);
        ctx.fillStyle = "#000";
        ctx.beginPath();
        ctx.arc(p.x, p.y, 8, 0, 7);
        ctx.fill();
        ctx.fillStyle = "#fff";
        ctx.beginPath();
        ctx.arc(p.x, p.y - 1, 5, 0, 7);
        ctx.fill();
        ctx.fillRect(p.x - 3, p.y + 2, 6, 4);
        ctx.fillStyle = "#000";
        ctx.beginPath();
        ctx.arc(p.x - 2, p.y - 2, 1.6, 0, 7);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(p.x + 2, p.y - 2, 1.6, 0, 7);
        ctx.fill();
      }
      const yp = cam.worldToScreen(S2.player.x, S2.player.y);
      ctx.strokeStyle = "#7ec850";
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.arc(yp.x, yp.y, 11 + 3 * Math.sin(t * 6), 0, 7);
      ctx.stroke();
      ctx.fillStyle = "#7ec850";
      ctx.beginPath();
      ctx.arc(yp.x, yp.y, 5, 0, 7);
      ctx.fill();
      ctx.font = "bold 11px Trebuchet MS";
      ctx.fillText("YOU", yp.x, yp.y - 18);
      ctx.fillStyle = "#d8d0ba";
      ctx.font = "bold 14px Trebuchet MS";
      ctx.fillText("Click anywhere on the map to travel there", view2.VW / 2, view2.VH - 66);
    }
  }

  // src/client/render/renderer.js
  function makeRenderer(S2, view2, cam) {
    const terrain = makeTerrain(S2);
    const lighting = makeLighting(S2, view2, cam);
    const weather = makeWeather(S2, view2, cam);
    const ui = makeUi(S2, view2, cam, lighting);
    const ctx = view2.ctx;
    function render(dt) {
      const VW = view2.VW, VH = view2.VH;
      ctx.fillStyle = PAL.ocean1;
      ctx.fillRect(0, 0, VW, VH);
      ctx.save();
      ctx.translate(VW / 2, VH / 2);
      ctx.scale(cam.zoom, cam.zoom);
      ctx.translate(-cam.cx, -cam.cy);
      drawOceanWaves();
      terrain.draw(ctx, cam, view2);
      for (const L of S2.world.lakes) if (cam.inView(L.x, L.y, L.r * 1.4)) drawLake(ctx, S2, L);
      drawScorch(ctx, S2, cam);
      weather.drawCloudShadows(ctx);
      for (const r of S2.world.rocks) if (cam.inView(r.x, r.y, 20)) drawRock(ctx, r);
      for (const f of S2.world.flora) if (cam.inView(f.x, f.y, 30)) drawFlora(ctx, S2, f);
      drawFootprints(ctx, S2, cam);
      for (const [k, s] of S2.structures) {
        const [gx, gy] = k.split(",").map(Number);
        if (!cam.inView(gx * TILE + 32, gy * TILE + 32, 70)) continue;
        drawFloor(ctx, gx, gy, s);
      }
      drawLoot(ctx, S2, cam);
      const items = [];
      const add = (y, fn) => items.push({ y, fn });
      for (const b of S2.world.boulders) if (cam.inView(b.x, b.y, b.r + 30)) add(b.y + b.r * 0.5, () => drawBoulder(ctx, b));
      for (const p of S2.world.palms) if (cam.inView(p.x, p.y, 50)) add(p.y, () => drawPalm(ctx, S2, p));
      for (const n of S2.resources) if (n.amount > 0 && cam.inView(n.x, n.y, 70)) add(n.y, () => drawNode(ctx, S2, n));
      for (const o of S2.barrels) if (o.hp > 0 && cam.inView(o.x, o.y, 50)) add(o.y, () => drawBarrel(ctx, S2, o));
      for (const f of S2.fences) if (cam.inView(f.x, f.y, 40)) add(f.y, () => drawFence(ctx, f));
      for (const d of S2.dummies) if (cam.inView(d.x, d.y, 40)) add(d.y, () => drawDummy(ctx, S2, d));
      for (const a of S2.animals) if (!a.dead && cam.inView(a.x, a.y, 60)) add(a.y, () => drawAnimal(ctx, S2, a));
      for (const g of S2.guards) if (!g.dead && cam.inView(g.x, g.y, 40)) add(g.y, () => drawGuard(ctx, S2, g));
      for (const cv of S2.convoys) {
        if (!cv.dead && cam.inView(cv.x, cv.y, 90)) add(cv.y, () => drawConvoy(ctx, S2, cv));
        for (const g of cv.guards) if (!g.dead && cam.inView(g.x, g.y, 30)) add(g.y, () => drawConvoyGuard(ctx, g));
      }
      for (const [k, d] of S2.deploys) {
        const [gx, gy] = k.split(",").map(Number);
        const cx2 = gx * TILE + 32, cy2 = gy * TILE + 32;
        if (!cam.inView(cx2, cy2, 70)) continue;
        const sortY = gy * TILE + TILE;
        if (d.type === "cupboard") add(sortY, () => drawCupboard(ctx, S2, gx, gy, d, teamColOf(d.owner)));
        else if (d.type === "turret") add(sortY, () => drawTurret(ctx, S2, gx, gy, d));
        else add(sortY, () => drawBox(ctx, gx, gy, d));
      }
      for (const [k, w] of S2.walls) {
        const seg = wallSegOf(k, w);
        const mx = (seg[0] + seg[2]) / 2, my = (seg[1] + seg[3]) / 2;
        if (!cam.inView(mx, my, 80)) continue;
        add(Math.max(seg[1], seg[3]), () => drawWall(ctx, S2, k, w));
      }
      add(S2.world.shop.y + 46, () => drawShop(ctx, S2));
      for (const m of S2.world.monuments) if (cam.inView(m.x, m.y, 700)) add(m.y + m.r, () => drawMonument(ctx, S2, m));
      for (const u of S2.units) {
        if (u.dead || u.eliminated) continue;
        if (u.copter && !u.copter.destroyed && cam.inView(u.copter.x, u.copter.y, 60)) {
          const c = u.copter;
          add(u.flying ? 1e9 : c.y, () => drawMinicopter(ctx, S2, c, u.col, u.flying));
        }
        if (!u.flying && cam.inView(u.x, u.y, 50)) add(u.y, () => drawUnit(ctx, S2, u));
      }
      if (!S2.player.inCopter) add(S2.player.y, () => drawPlayer(ctx, S2));
      if (S2.copter && !S2.copter.destroyed && cam.inView(S2.copter.x, S2.copter.y, 70)) {
        add(S2.player.inCopter ? 1e9 : S2.copter.y, () => drawMinicopter(ctx, S2, S2.copter, "#5d684c", S2.player.inCopter));
      }
      for (const tr of S2.transports) if (cam.inView(tr.x, tr.y, 90)) add(tr.riders.length || tr.state === "fly" ? 1e9 : tr.y, () => drawTransport(ctx, S2, tr, teamColOf(tr.owner)));
      items.sort((a, b) => a.y - b.y);
      for (const it of items) it.fn();
      drawLaserSight(ctx, S2, cam, wallBlocksView);
      drawFires(ctx, S2, cam);
      drawWrecks(ctx, S2, cam);
      drawSatchels(ctx, S2, cam);
      drawGrenades(ctx, S2, cam);
      if (view2.debugPaths) ui.drawDebugPaths(ctx);
      drawBullets(ctx, S2, cam);
      drawRockets(ctx, S2, cam);
      drawFlashes(ctx, S2, cam);
      drawQuarry(ctx, S2, S2.world.monuments.find((m) => m.type === "quarry"));
      drawSignal(ctx, S2, cam);
      drawAirdrop(ctx, S2);
      drawPatrol(ctx, S2);
      drawLockedCrate(ctx, S2);
      for (const tr2 of S2.trains) drawTrain(ctx, tr2);
      for (const c of S2.world.crossings) if (cam.inView(c.x, c.y, 90)) drawCrossing(ctx, S2, c);
      drawParticles(ctx, S2, cam);
      drawFloats(ctx, S2, cam);
      weather.drawWorld(ctx);
      weather.drawClouds(ctx, lighting.lightLevel());
      ui.drawBuildGhost(ctx);
      ctx.restore();
      ui.drawRangeRings(ctx);
      lighting.draw(ctx);
      weather.drawScreen(ctx);
      ui.drawScreen(ctx, dt);
      S2.events.length = 0;
    }
    function teamColOf(owner) {
      if (owner === OWNER) return "#7ec850";
      const t = S2.teams.find((t2) => t2.owner === owner);
      return t ? t.col : "#888";
    }
    function drawOceanWaves() {
      if (cam.zoom <= 0.5) return;
      const v = cam.viewRect(120);
      ctx.strokeStyle = PAL.wave;
      ctx.lineWidth = 2.5;
      ctx.lineCap = "round";
      const t = S2.t;
      for (let y = Math.floor(v.y0 / 64) * 64; y < v.y1; y += 64) {
        const ph = Math.sin(y * 0.05 + t * 0.6) * 28 + t * 16;
        for (let x = Math.floor(v.x0 / 170) * 170; x < v.x1; x += 170) {
          const wx = x + ph % 170;
          if (S2.world.landFactor(wx + 23, y) > -0.01) continue;
          ctx.beginPath();
          ctx.moveTo(wx, y);
          ctx.lineTo(wx + 46, y);
          ctx.stroke();
        }
      }
    }
    return { render };
  }

  // src/client/input.js
  function bindInput(S2, view2, camera2, hud2) {
    const keys = {};
    const canvas2 = view2.canvas;
    const refreshMouseWorld = (sx, sy) => {
      const w = camera2.screenToWorld(sx, sy);
      S2.cmd.mx = w.x;
      S2.cmd.my = w.y;
      view2.mouseSX = sx;
      view2.mouseSY = sy;
    };
    addEventListener("keydown", (e) => {
      const k = e.key.toLowerCase();
      if (S2.storeOpen) {
        if (k === "escape" || k === "e") {
          S2.storeOpen = null;
          hud2.closeModals();
        }
        e.preventDefault();
        return;
      }
      if (S2.shopOpen) {
        if (k === "escape" || k === "e") {
          S2.shopOpen = false;
          hud2.closeModals();
        }
        e.preventDefault();
        return;
      }
      keys[k] = true;
      syncMoveKeys();
      if (k === "e") interact(S2);
      if (k === "g" && !S2.player.inCopter) dropPlayerFence(S2);
      if (k === "q") {
        if (S2.buildMode) cyclePiece(S2, 1);
        else if (!S2.player.inCopter) throwGrenade(S2);
      }
      if (k === "t" && !S2.buildMode && !S2.player.inCopter) throwSupplySignal(S2, S2.cmd.mx, S2.cmd.my);
      if (/^Digit[1-9]$|^Numpad[1-9]$/.test(e.code) && !S2.player.inCopter) selectSlot(S2, +e.code.slice(-1) - 1);
      if (k === "b" && !S2.player.inCopter) selectSlot(S2, S2.buildMode ? 0 : 5);
      if (k === "r") {
        if (S2.buildMode) S2.buildRot = (S2.buildRot + 1) % 4;
        else reload(S2);
      }
      if (k === "u") upgradeUnderCursor(S2);
      if (["w", "a", "s", "d", " "].includes(k)) e.preventDefault();
    });
    addEventListener("keyup", (e) => {
      keys[e.key.toLowerCase()] = false;
      syncMoveKeys();
    });
    addEventListener("blur", () => {
      for (const k in keys) keys[k] = false;
      syncMoveKeys();
      S2.cmd.fireHeld = false;
    });
    function syncMoveKeys() {
      S2.cmd.up = !!keys["w"];
      S2.cmd.down = !!keys["s"];
      S2.cmd.left = !!keys["a"];
      S2.cmd.right = !!keys["d"];
      S2.cmd.run = !!keys["shift"];
    }
    addEventListener("wheel", (e) => {
      if (S2.buildMode && !S2.shopOpen && !S2.storeOpen) {
        cyclePiece(S2, e.deltaY > 0 ? 1 : -1);
        e.preventDefault();
      }
    }, { passive: false });
    canvas2.addEventListener("mousemove", (e) => {
      const r = canvas2.getBoundingClientRect();
      refreshMouseWorld(e.clientX - r.left, e.clientY - r.top);
    });
    canvas2.addEventListener("mousedown", (e) => {
      const r = canvas2.getBoundingClientRect();
      refreshMouseWorld(e.clientX - r.left, e.clientY - r.top);
      if (e.button === 0) {
        if (view2.godView) {
          mapTeleport(S2, view2);
          return;
        }
        S2.cmd.fireHeld = true;
        if (S2.buildMode) tryPlace(S2);
        else if (!S2.shopOpen && !S2.storeOpen) {
          const k = S2.slot;
          fire(S2);
        }
      } else if (e.button === 2) {
        if (S2.buildMode) tryRemove(S2);
      }
    });
    addEventListener("mouseup", () => {
      S2.cmd.fireHeld = false;
    });
    canvas2.addEventListener("contextmenu", (e) => e.preventDefault());
    setInterval(() => {
      if (view2.mouseSX !== void 0) refreshMouseWorld(view2.mouseSX, view2.mouseSY);
    }, 50);
  }
  function cyclePiece(S2, dir) {
    const i = PIECES.indexOf(S2.buildPiece);
    S2.buildPiece = PIECES[(i + dir + PIECES.length) % PIECES.length];
  }
  function mapTeleport(S2, view2) {
    let x = S2.cmd.mx, y = S2.cmd.my;
    x = clamp(x, PLAYER_R, 13824 - PLAYER_R);
    y = clamp(y, PLAYER_R, 9216 - PLAYER_R);
    for (let t = 0; t < 24 && blocked(S2, x, y, PLAYER_R); t++) {
      x += (Math.random() * 2 - 1) * 40;
      y += (Math.random() * 2 - 1) * 40;
    }
    S2.player.x = x;
    S2.player.y = y;
    S2.player.inCopter = false;
    view2.godView = false;
    document.getElementById("mapbtn").classList.remove("on");
    document.getElementById("mapbtn").textContent = "Map View";
    S2.tip = { text: "arrived", t: 1.2 };
  }

  // src/client/hud.js
  var ICONS = {
    tool: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 20l7-7"/><path d="M14 4l6 6-5 5-6-6z" fill="currentColor"/></svg>',
    pistol: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 8h16v4h-6l-1 5h-4l1-5H6a3 3 0 0 1-3-3z"/></svg>',
    rifle: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M1 11h18l4-2v3l-4 1h-5l-1 5h-3l1-5H1z"/></svg>',
    minigun: '<svg viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="7" width="14" height="3"/><rect x="2" y="11" width="14" height="3"/><rect x="2" y="15" width="14" height="3"/><rect x="15" y="6" width="6" height="13" rx="2"/></svg>',
    rocket: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M2 10h13l5 2-5 2H2z"/><path d="M20 8l3 4-3 4z"/></svg>',
    build: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21l4-12 6 6-10 6z" fill="currentColor"/><path d="M13 5l6 6"/></svg>',
    sniper: '<svg viewBox="0 0 24 24" fill="currentColor"><rect x="1" y="10" width="20" height="3"/><rect x="6" y="6" width="6" height="3" rx="1"/><path d="M21 9l2 2-2 2z"/></svg>',
    shotgun: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M1 10h17v5H8l-2 4H3l2-4H1z"/></svg>',
    hmg: '<svg viewBox="0 0 24 24" fill="currentColor"><rect x="1" y="9" width="19" height="5"/><rect x="6" y="14" width="6" height="6"/><path d="M20 9l3 2.5-3 2.5z"/></svg>'
  };
  var SLOTS = [
    ["Tool", "tool"],
    ["Pistol", "pistol"],
    ["Rifle", "rifle"],
    ["Minigun", "minigun"],
    ["Rocket", "rocket"],
    ["Build", "build"],
    ["Sniper", "sniper"],
    ["Shotgun", "shotgun"],
    ["HMG", "hmg"]
  ];
  var SLOT_WEAPON2 = { 1: "pistol", 2: "rifle", 3: "minigun", 4: "rocket", 6: "sniper", 7: "shotgun", 8: "hmg" };
  var BPREV = {
    floor: '<svg viewBox="0 0 24 24" fill="currentColor"><rect x="4" y="4" width="16" height="16" rx="2"/></svg>',
    wall: '<svg viewBox="0 0 24 24" fill="currentColor"><rect x="10" y="3" width="4" height="18" rx="1"/></svg>',
    door: '<svg viewBox="0 0 24 24" fill="currentColor"><rect x="9" y="3" width="6" height="18" rx="1"/><circle cx="13" cy="12" r="1.4" fill="#15130e"/></svg>',
    turret: '<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="13" r="6"/><rect x="12" y="11" width="10" height="4" rx="1"/></svg>',
    cupboard: '<svg viewBox="0 0 24 24" fill="currentColor"><rect x="5" y="3" width="14" height="18" rx="2"/><rect x="11.4" y="5" width="1.2" height="14" fill="#15130e"/></svg>'
  };
  function makeHud(S2, view2) {
    const $ = (id) => document.getElementById(id);
    const hotbar = $("hotbar");
    SLOTS.forEach(([name, icon], i) => {
      const d = document.createElement("div");
      d.className = "slot";
      d.innerHTML = `<span class="key">${i + 1}</span>${ICONS[icon]}<span class="nm">${name}</span>`;
      d.addEventListener("mousedown", (e) => {
        e.stopPropagation();
        selectSlot(S2, i);
      });
      hotbar.appendChild(d);
    });
    const bpieces = $("bpieces");
    for (const p of PIECES) {
      const d = document.createElement("div");
      d.className = "bpiece";
      d.dataset.piece = p;
      const cost = Object.entries(BUILD[p].cost).map(([k, v]) => v + " " + k).join(" + ");
      d.innerHTML = `${BPREV[p]}${BUILD[p].name}<br><span style="opacity:.7">${cost}</span>`;
      d.addEventListener("mousedown", (e) => {
        e.stopPropagation();
        S2.buildPiece = p;
      });
      bpieces.appendChild(d);
    }
    const btn = (id, fn) => $(id).addEventListener("mousedown", (e) => {
      e.stopPropagation();
      fn($(id));
    });
    btn("mapbtn", (b) => {
      view2.godView = !view2.godView;
      b.classList.toggle("on", view2.godView);
      b.textContent = view2.godView ? "Exit Map" : "Map View";
    });
    btn("ghostbtn", (b) => {
      S2.ghost = !S2.ghost;
      b.classList.toggle("on", S2.ghost);
      b.textContent = S2.ghost ? "Ghost: ON" : "Ghost";
    });
    btn("rocketbtn", (b) => {
      S2.rapidRockets = !S2.rapidRockets;
      b.classList.toggle("on", S2.rapidRockets);
      b.textContent = S2.rapidRockets ? "Rockets: ON" : "Rapid Rockets";
    });
    btn("refillbtn", () => window.__refillAll());
    btn("boosthardbtn", () => window.__boostHard());
    btn("debugbtn", (b) => {
      view2.debugPaths = !view2.debugPaths;
      b.classList.toggle("on", view2.debugPaths);
      b.textContent = view2.debugPaths ? "Debug: ON" : "Debug paths";
    });
    $("ghostbtn").classList.add("on");
    $("ghostbtn").textContent = "Ghost: ON";
    $("helpToggle").addEventListener("click", () => {
      const h = $("help");
      h.classList.toggle("min");
      $("helpToggle").textContent = h.classList.contains("min") ? "show" : "hide";
    });
    document.querySelectorAll(".spdbtn").forEach((b) => {
      b.addEventListener("mousedown", (e) => {
        e.stopPropagation();
        view2.speed = +b.dataset.spd;
        document.querySelectorAll(".spdbtn").forEach((o) => o.classList.toggle("on", o === b));
      });
    });
    let lbT = 0;
    let lastStore = null, lastShop = false;
    function buildShop() {
      const el = $("shop");
      let html = '<h3>Trade Shop</h3><div style="margin-bottom:8px">Scrap: <b id="shop-scrap">0</b></div><div class="cols"><div class="col"><h5>SELL \u2192 SCRAP</h5>';
      SHOP.trades.forEach(([k, amt, sc], i) => {
        html += `<div class="trow"><span>${amt} ${k} \u2192 ${sc} scrap</span><button data-trade="${i}">Sell</button></div>`;
      });
      html += '</div><div class="col"><h5>BUY WEAPONS + GEAR</h5>';
      for (const k in SHOP.buys) {
        html += `<div class="trow"><span id="shopown-${k}">${WEAPONS[k].name} <small>+${SHOP.buys[k].ammo} ammo</small></span><button data-buy="${k}">${SHOP.buys[k].cost} scrap</button></div>`;
      }
      html += `<div class="trow"><span>Jackhammer <small>3\xD7 gather</small></span><button data-misc="jackhammer">${SHOP.jackhammer} scrap</button></div>`;
      html += `<div class="trow"><span>Rifle laser sight</span><button data-misc="laser">${SHOP.laser} scrap</button></div>`;
      html += `<div class="trow"><span>Wood fence (G)</span><button data-misc="fence">${SHOP.fenceWood} wood</button></div>`;
      html += `<div class="trow"><span>Grenade (Q)</span><button data-misc="grenade">${SHOP.grenade} scrap</button></div>`;
      html += `<div class="trow"><span>Supply signal (T)</span><button data-misc="signal">${SHOP.signal} scrap</button></div>`;
      html += `<div class="trow"><span>+10 HQM</span><button data-misc="hqm">${SHOP.hqm.cost} scrap</button></div>`;
      html += `<div class="trow"><span id="fm-lbl">Facemask</span><button data-misc="facemask">buy</button></div>`;
      html += `<div class="trow"><span id="ba-lbl">Body armor</span><button data-misc="bodyArmor">buy</button></div>`;
      html += `<div class="trow"><span>Hire worker</span><button data-misc="worker">${SHOP.worker} scrap</button></div>`;
      html += '</div></div><button class="close">Close (E / Esc)</button>';
      el.innerHTML = html;
      el.querySelectorAll("button").forEach((b) => {
        b.addEventListener("mousedown", (e) => e.stopPropagation());
        b.addEventListener("click", () => {
          if (b.dataset.trade !== void 0) doTrade(S2, +b.dataset.trade);
          else if (b.dataset.buy) doBuy(S2, b.dataset.buy);
          else if (b.dataset.misc) buyMisc(S2, b.dataset.misc);
          else {
            S2.shopOpen = false;
            el.classList.add("hidden");
          }
          refreshShop();
        });
      });
      refreshShop();
    }
    function refreshShop() {
      const sc = $("shop-scrap");
      if (sc) sc.textContent = S2.inv.scrap | 0;
      const fm = $("fm-lbl");
      if (fm) {
        const next = S2.player.facemask + 1;
        fm.textContent = next <= 3 ? `Facemask L${next} (${ARMOR.cost[next]} scrap)` : "Facemask MAX";
      }
      const ba = $("ba-lbl");
      if (ba) {
        const next = S2.player.bodyArmor + 1;
        ba.textContent = next <= 3 ? `Body armor L${next} (${ARMOR.cost[next]} scrap)` : "Body armor MAX";
      }
      for (const k in SHOP.buys) {
        const own = $("shopown-" + k);
        if (own) own.style.color = S2.owned[k] ? "var(--accent2)" : "var(--ink)";
      }
    }
    function buildStore(key) {
      const el = $("store");
      const d = S2.deploys.get(key);
      if (!d) return;
      let html = `<h3>${d.type === "cupboard" ? "Tool Cupboard" : "Storage"}</h3>`;
      for (const k of ["wood", "stone", "metal", "scrap"]) {
        html += `<div class="strow"><span class="ic ${k}"></span>
        <button data-mv="${k},-9999">\u25C0 all</button><button data-mv="${k},-0.1">\u25C0 10%</button>
        <span class="cnt"><b id="st-${k}">0</b> store \xB7 bag <b id="inv-${k}">0</b></span>
        <button data-mv="${k},0.1">10% \u25B6</button><button data-mv="${k},9999">all \u25B6</button>
        <span></span></div>`;
      }
      html += '<button class="close">Close (E / Esc)</button>';
      el.innerHTML = html;
      el.querySelectorAll("button").forEach((b) => {
        b.addEventListener("mousedown", (e) => e.stopPropagation());
        b.addEventListener("click", () => {
          if (b.dataset.mv) {
            const [k, amt] = b.dataset.mv.split(",");
            storeMove(S2, k, +amt);
            refreshStore();
          } else {
            S2.storeOpen = null;
            el.classList.add("hidden");
          }
        });
      });
      refreshStore();
    }
    function refreshStore() {
      const d = S2.deploys.get(S2.storeOpen);
      if (!d || !d.store) return;
      for (const k of ["wood", "stone", "metal", "scrap"]) {
        const a = $("st-" + k), b = $("inv-" + k);
        if (a) a.textContent = d.store[k] | 0;
        if (b) b.textContent = S2.inv[k] | 0;
      }
    }
    return {
      closeModals() {
        $("store").classList.add("hidden");
        $("shop").classList.add("hidden");
      },
      update() {
        $("r-wood").textContent = S2.inv.wood | 0;
        $("r-stone").textContent = S2.inv.stone | 0;
        $("r-metal").textContent = S2.inv.metal | 0;
        $("r-scrap").textContent = S2.inv.scrap | 0;
        const mm = Math.floor(S2.t / 60), ss = Math.floor(S2.t % 60);
        $("playtime").textContent = mm + ":" + String(ss).padStart(2, "0");
        const p = S2.player;
        const f = Math.max(0, p.health / p.maxhp);
        const fill = $("hpfill");
        fill.style.width = f * 100 + "%";
        fill.style.background = f > 0.5 ? "linear-gradient(180deg,#9ccb5a,#6fae3e)" : f > 0.25 ? "linear-gradient(180deg,#e0c14e,#c9962f)" : "linear-gradient(180deg,#d76a4a,#b23b2a)";
        $("hptxt").textContent = Math.ceil(Math.max(0, p.health));
        const slots = hotbar.children;
        for (let i = 0; i < slots.length; i++) {
          slots[i].classList.toggle("sel", S2.slot === i);
          const wk2 = SLOT_WEAPON2[i];
          slots[i].classList.toggle("dim", !!wk2 && !S2.owned[wk2]);
        }
        $("buildmenu").classList.toggle("hidden", !S2.buildMode);
        if (S2.buildMode) {
          for (const d of bpieces.children) {
            d.classList.toggle("sel", d.dataset.piece === S2.buildPiece);
            let can = true;
            for (const k in BUILD[d.dataset.piece].cost) if ((S2.inv[k] || 0) < BUILD[d.dataset.piece].cost[k]) can = false;
            d.classList.toggle("cant", !can);
          }
        }
        const wk = curWeapon(S2);
        $("ammo").classList.toggle("hidden", !wk);
        if (wk) {
          const w = S2.weapons[wk];
          $("ammo-mag").innerHTML = `${w.ammo} <small>/ ${w.reserve}</small>`;
          const mg = wk === "minigun" && w.spin > 0 && w.spin < WEAPONS.minigun.windup;
          $("ammo-rl").textContent = w.reloading > 0 ? "RELOADING" : mg ? "SPINNING\u2026" : w.ammo === 0 ? "PRESS R" : "";
        }
        const tip2 = $("tip");
        if (S2.tip) {
          tip2.textContent = S2.tip.text;
          tip2.classList.add("show");
        } else tip2.classList.remove("show");
        if (S2.shopOpen !== lastShop) {
          lastShop = S2.shopOpen;
          $("shop").classList.toggle("hidden", !S2.shopOpen);
          if (S2.shopOpen) buildShop();
        } else if (S2.shopOpen && S2.tick % 30 === 0) refreshShop();
        if (S2.storeOpen !== lastStore) {
          lastStore = S2.storeOpen;
          $("store").classList.toggle("hidden", !S2.storeOpen);
          if (S2.storeOpen) buildStore(S2.storeOpen);
        } else if (S2.storeOpen && S2.tick % 30 === 0) refreshStore();
        if (S2.t - lbT > 0.4) {
          lbT = S2.t;
          updateLeaderboard();
        }
      }
    };
    function updateLeaderboard() {
      const rows = [];
      rows.push({
        id: OWNER,
        name: "You",
        col: "#c4d66a",
        alive: !S2.player.dead,
        you: true,
        kills: S2.playerKills,
        scrap: S2.inv.scrap | 0,
        res: S2.inv.wood + S2.inv.stone + S2.inv.metal | 0,
        tier: ""
      });
      for (const team of S2.teams) {
        let kills = 0, scrap = 0, res = 0, alive = false;
        for (const u of S2.units) {
          if (u.owner !== team.owner) continue;
          kills += u.kills;
          scrap += u.scrap;
          res += u.inv.wood + u.inv.stone + u.inv.metal;
          if (!u.eliminated) alive = true;
        }
        const rec = team.bases.find((r) => !r.dead);
        if (rec) {
          const tc = S2.deploys.get(rec.tcKey);
          if (tc && tc.store) {
            res += tc.store.wood + tc.store.stone + tc.store.metal;
            scrap += tc.store.scrap;
          }
        }
        rows.push({
          id: team.id,
          name: "Base " + (team.id + 1),
          col: team.col,
          alive: alive && !team.eliminated,
          kills,
          scrap: scrap | 0,
          res: res | 0,
          tier: team.hard ? "HARD" : team.weak ? "EASY" : ""
        });
      }
      let bounty = null, bk = 0;
      for (const r of rows) if (!r.you && r.alive && r.kills > bk) {
        bk = r.kills;
        bounty = r.id;
      }
      rows.sort((a, b) => b.scrap - a.scrap || b.kills - a.kills || b.res - a.res);
      const fmtK = (n) => n >= 1e4 ? (n / 1e3 | 0) + "k" : n >= 1e3 ? (n / 1e3).toFixed(1) + "k" : n;
      $("lb-rows").innerHTML = rows.map((r) => `
      <div class="lbr ${r.alive ? "" : "dead"} ${r.id === bounty ? "lb-bounty" : ""}">
        <span class="dot" style="background:${r.col}"></span>
        <span class="nm">${r.id === bounty ? "\u2605 " : ""}${r.name}</span>
        ${r.tier ? `<span class="pill ${r.tier.toLowerCase()}">${r.tier}</span>` : ""}
        <span>${r.kills}</span><span style="color:var(--ink-dim)">${fmtK(r.scrap)}</span><span style="color:var(--ink-dim)">${fmtK(r.res)}</span>
      </div>`).join("");
    }
  }

  // src/client/camera.js
  function makeCamera(S2, view2) {
    const cam = {
      cx: S2.player.x,
      cy: S2.player.y,
      zoom: 1,
      screenToWorld(sx, sy) {
        return { x: (sx - view2.VW / 2) / cam.zoom + cam.cx, y: (sy - view2.VH / 2) / cam.zoom + cam.cy };
      },
      worldToScreen(x, y) {
        return { x: (x - cam.cx) * cam.zoom + view2.VW / 2, y: (y - cam.cy) * cam.zoom + view2.VH / 2 };
      },
      viewRect(margin = 0) {
        const hw = view2.VW / 2 / cam.zoom + margin, hh = view2.VH / 2 / cam.zoom + margin;
        return { x0: cam.cx - hw, y0: cam.cy - hh, x1: cam.cx + hw, y1: cam.cy + hh };
      },
      inView(x, y, m = 0) {
        const v = cam._v || cam.viewRect(0);
        return x > v.x0 - m && x < v.x1 + m && y > v.y0 - m && y < v.y1 + m;
      },
      update(dt) {
        const p = S2.player;
        let targetZoom = 1, tx = p.x, ty = p.y;
        if (view2.godView) {
          targetZoom = Math.min(view2.VW / WORLD.w, view2.VH / WORLD.h) * 0.98;
          tx = WORLD.w / 2;
          ty = WORLD.h / 2;
        } else if (p.inCopter && S2.copter) {
          const spd = Math.hypot(S2.copter.vx, S2.copter.vy);
          targetZoom = clamp(0.82 - 0.42 * (spd / 980), 0.4, 0.82);
        }
        cam.zoom = lerp(cam.zoom, targetZoom, Math.min(1, dt * (view2.godView ? 6 : 4)));
        const over = view2.godView ? 0 : 300;
        const hw = view2.VW / 2 / cam.zoom, hh = view2.VH / 2 / cam.zoom;
        cam.cx = view2.godView ? tx : clamp(tx, hw - over, WORLD.w - hw + over);
        cam.cy = view2.godView ? ty : clamp(ty, hh - over, WORLD.h - hh + over);
        if (WORLD.w < view2.VW / cam.zoom) cam.cx = WORLD.w / 2;
        if (WORLD.h < view2.VH / cam.zoom) cam.cy = WORLD.h / 2;
        if (S2.shake > 0) {
          cam.cx += (Math.random() * 2 - 1) * S2.shake * 0.5;
          cam.cy += (Math.random() * 2 - 1) * S2.shake * 0.5;
        }
        cam._v = cam.viewRect(0);
      }
    };
    return cam;
  }

  // src/client/main.js
  var canvas = document.getElementById("game");
  var seed = Math.random() * 1e9 >>> 0;
  var S = createSim(seed);
  S.ghost = true;
  var view = {
    canvas,
    ctx: canvas.getContext("2d"),
    VW: innerWidth,
    VH: innerHeight,
    DPR: Math.min(2, devicePixelRatio || 1),
    speed: 1,
    godView: false,
    debugPaths: false,
    shakeX: 0,
    shakeY: 0
  };
  function resize() {
    view.VW = innerWidth;
    view.VH = innerHeight;
    canvas.width = Math.round(view.VW * view.DPR);
    canvas.height = Math.round(view.VH * view.DPR);
    canvas.style.width = view.VW + "px";
    canvas.style.height = view.VH + "px";
    view.ctx.setTransform(view.DPR, 0, 0, view.DPR, 0, 0);
    view.ctx.imageSmoothingEnabled = true;
    view.ctx.imageSmoothingQuality = "high";
    view.ctx.lineJoin = "round";
  }
  addEventListener("resize", resize);
  resize();
  var camera = makeCamera(S, view);
  var renderer = makeRenderer(S, view, camera);
  var hud = makeHud(S, view);
  bindInput(S, view, camera, hud);
  var seedEl = document.getElementById("seedval");
  if (seedEl) seedEl.textContent = String(seed);
  window.__refillAll = () => {
    for (const k in S.owned) S.owned[k] = true;
    for (const k in S.weapons) {
      const w = S.weapons[k];
      w.reserve = Math.max(w.reserve, k === "rocket" ? 80 : k === "sniper" ? 60 : k === "shotgun" ? 80 : 600);
      w.ammo = WEAPONS[k].magSize;
      w.reloading = 0;
    }
    for (const k of ["wood", "stone", "metal"]) S.inv[k] = Math.max(S.inv[k], 1e4);
    S.inv.scrap = Math.max(S.inv.scrap, 500);
    S.inv.fence = Math.max(S.inv.fence, 10);
    S.tip = { text: "Refilled ammo + resources", t: 1.4 };
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
      u.gun = u.shotgun ? "shotgun" : "rifle";
      u.facemask = Math.max(u.facemask, 2);
      u.bodyArmor = Math.max(u.bodyArmor, 3);
      u.jack = true;
    }
    for (const team of S.teams) {
      if (!team.hard || team.eliminated) continue;
      const rec = team.bases.find((r) => !r.dead);
      if (rec) {
        const tc = S.deploys.get(rec.tcKey);
        if (tc && tc.store) {
          tc.store.wood = Math.max(tc.store.wood, 3e3);
          tc.store.stone = Math.max(tc.store.stone, 1500);
          tc.store.metal = Math.max(tc.store.metal, 1500);
          tc.store.scrap = Math.max(tc.store.scrap, 600);
        }
      }
    }
    S.tip = { text: "Boosted " + n + " hard units", t: 1.4 };
  };
  var last = performance.now();
  var acc = 0;
  function loop(now) {
    requestAnimationFrame(loop);
    const elapsed = Math.min(0.1, (now - last) / 1e3);
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
    camera.update(elapsed);
    renderer.render(elapsed);
    hud.update();
  }
  requestAnimationFrame(loop);
})();
