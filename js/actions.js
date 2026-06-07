"use strict";
/* actions.js — player action handlers (hotbar slots, interact, gather/repair swings) plus shared
   collision: solid cells, edge-wall thin-segment geometry, fences, boulders, and wall LOS checks. */

/* ------------------------------- actions -------------------------------- */
const SLOT_WEAPON = { 1: 'pistol', 2: 'rifle', 3: 'minigun', 4: 'rocket', 6: 'sniper', 7: 'shotgun', 8: 'hmg' };   // slot -> weapon name (slot 0 = tool, slot 5 = build: no weapon)

function weaponOf(slot) { return SLOT_WEAPON[slot] || null; }

function ownsSlot(slot) {
  if (slot === 0 || slot === 5) return true;
  const w = weaponOf(slot);
  return w ? !!game.owned[w] : false;
}

function selectSlot(i) {
  const weaponName = weaponOf(i);
  if (weaponName && !game.owned[weaponName]) {   // weapons must be owned (you start with the pistol only)
    flashTip(WEAPONS[weaponName].name + ' locked — buy it at the trade shop');
    return;
  }
  if (game.rapidRockets && i !== 4) {
    // picking another weapon exits rapid-rocket mode (so it doesn't hijack firing)
    game.rapidRockets = false;
    const btn = document.getElementById('rocketbtn');
    if (btn) {
      btn.classList.remove('on');
      btn.textContent = 'Rapid Rockets';
    }
  }
  game.slot = i;
  if (i !== 5 && game.buildMode) {
    game.buildMode = false;
    document.getElementById('buildmenu').classList.add('hidden');
  }
  if (i === 5 && !game.buildMode) {
    game.buildMode = true;
    document.getElementById('buildmenu').classList.remove('hidden');
  }
  refreshHotbar();
}

function toggleBuild() { selectSlot(game.slot === 5 ? 0 : 5); }

function curWeapon() {
  const w = weaponOf(game.slot);
  return (w && game.owned[w]) ? WEAPONS[w] : null;
}

function reload() {
  const w = curWeapon();
  if (!w) return;
  if (w.reloading > 0 || w.ammo >= w.magSize || w.reserve <= 0) return;
  w.reloading = w.reloadT;
}

function ownsLock(s) { return !s.lock || s.lock.by === OWNER; }   // single-player: the cupboard owner can open

function interact() {
  if (game.store || game.shopOpen) return;
  const c = game.copter;
  if (player.inCopter) {
    exitCopter();
    return;
  }
  if (c && !c.destroyed &&
      dist2(player.x, player.y, c.x, c.y) < (COPTER.r + PLAYER_R + 34) * (COPTER.r + PLAYER_R + 34)) {
    player.inCopter = true;
    addFloat(c.x, c.y - COPTER.r - 6, 'liftoff', '#c4d66a');
    return;
  }
  if (game.shop &&
      dist2(player.x, player.y, game.shop.x, game.shop.y) < (game.shop.r + PLAYER_R + 44) * (game.shop.r + PLAYER_R + 44)) {
    openShop();
    return;
  }
  interactStructure();
}

function exitCopter() {
  const c = game.copter;
  const cell = cellOf(c.x, c.y);
  if (foundationAt(cell.gx, cell.gy) || game.deploys.has(gkey(cell.gx, cell.gy))) {
    flashTip("Can't land on a base — find open ground");
    return;
  }
  player.inCopter = false;
  let ex = c.x;
  let ey = c.y + COPTER.r + PLAYER_R + 6;
  if (blocked(ex, ey, PLAYER_R)) {
    ex = c.x + COPTER.r + PLAYER_R + 6;
    ey = c.y;
  }
  player.x = clamp(ex, PLAYER_R, WORLD.w - PLAYER_R);
  player.y = clamp(ey, PLAYER_R, WORLD.h - PLAYER_R);
  addFloat(player.x, player.y - 26, 'exit', '#c4d66a');
}

function interactStructure() {   // operate the nearest door / box / cupboard within reach
  let best = null;
  let bx = 0;
  let by = 0;
  let bestDistSq = (TILE * 1.4) * (TILE * 1.4);
  for (const [k, s] of game.walls) {
    if (s.type !== 'door') continue;
    const seg = wallSegOf(k, s);
    const cx = (seg[0] + seg[2]) / 2;
    const cy = (seg[1] + seg[3]) / 2;
    const d = dist2(player.x, player.y, cx, cy);
    if (d < bestDistSq) {
      bestDistSq = d;
      best = s;
      bx = cx;
      by = cy;
    }
  }
  for (const [k, s] of game.deploys) {
    if (s.type !== 'box' && s.type !== 'cupboard') continue;
    const [gx, gy] = k.split(',').map(Number);
    const cx = gx * TILE + TILE / 2;
    const cy = gy * TILE + TILE / 2;
    const d = dist2(player.x, player.y, cx, cy);
    if (d < bestDistSq) {
      bestDistSq = d;
      best = s;
      bx = cx;
      by = cy;
    }
  }
  if (!best) return;
  if (!ownsLock(best)) {
    flashTip('Locked — not your base');
    return;
  }
  if (best.type === 'door') {
    best.open = !best.open;
    addFloat(bx, by - 22, best.open ? 'open' : 'closed', '#c4d66a');
  } else {
    openStore(best, best.type === 'cupboard' ? 'Tool Cupboard' : 'Box');   // box / cupboard storage
  }
}

function onPrimaryDown() {
  if (game.store || player.dead || player.inCopter) return;
  if (game.buildMode) {
    placeStructure();
    return;
  }
  if (game.slot === 0) {
    gatherSwing();
    return;
  }
  const w = curWeapon();
  if (w && !w.auto) fire();
}

function onSecondaryDown() {
  if (game.store || player.inCopter) return;
  if (game.buildMode) removeStructure();
}

/* ----------------------------- collision -------------------------------- */
function isSolidAt(x, y) {
  // turret/cupboard cells and boxes block; floors/trifloors are walkable
  const key = gkey(Math.floor(x / TILE), Math.floor(y / TILE));
  const s = game.structures.get(key);
  if (s && (s.type === 'turret' || s.type === 'cupboard') &&
      !(game._passOwner && s.owner === game._passOwner)) return true;
  const dep = game.deploys.get(key);
  if (dep) {
    // only the cupboard is passable to its owner (the base core where bots spawn/deposit);
    // turrets & boxes stay solid (walk AROUND) — but phaseable during a stuck-escape so a
    // cornered bot never traps itself
    if (dep.type === 'cupboard') return !(game._passOwner && dep.owner === game._passOwner);
    return !(game._passDeploy && game._passOwner && dep.owner === game._passOwner);
  }
  return false;
}

function circleHitsSolid(cx, cy, r) {
  if (isSolidAt(cx, cy)) return true;
  for (let i = 0; i < 8; i++) {
    const a = i / 8 * TAU;
    if (isSolidAt(cx + Math.cos(a) * r, cy + Math.sin(a) * r)) return true;
  }
  return false;
}

/* ---- edge walls: geometry + thin-segment collision ---- */
function wallSegOf(key, w) {   // -> [x1,y1,x2,y2] world segment
  const parts = key.split(',');
  const kind = parts[0];
  const a = +parts[1];
  const b = +parts[2];
  if (kind === 'V') return [a * TILE, b * TILE, a * TILE, (b + 1) * TILE];
  if (kind === 'H') return [a * TILE, b * TILE, (a + 1) * TILE, b * TILE];
  return (w && w.rot) ? [(a + 1) * TILE, b * TILE, a * TILE, (b + 1) * TILE]   // "/" diagonal
                      : [a * TILE, b * TILE, (a + 1) * TILE, (b + 1) * TILE];  // "\" diagonal
}

function ptSeg(px, py, x1, y1, x2, y2) {   // distance from point to segment
  const dx = x2 - x1;
  const dy = y2 - y1;
  const l2 = dx * dx + dy * dy;
  let t = l2 ? ((px - x1) * dx + (py - y1) * dy) / l2 : 0;
  t = clamp(t, 0, 1);
  return Math.hypot(px - (x1 + t * dx), py - (y1 + t * dy));
}

function wallNear(x, y, r) {
  const gx = Math.floor(x / TILE);
  const gy = Math.floor(y / TILE);
  const reach = r + WALL_T / 2;
  const keys = ['V,' + gx + ',' + gy, 'V,' + (gx + 1) + ',' + gy, 'H,' + gx + ',' + gy, 'H,' + gx + ',' + (gy + 1)];
  for (let dx = -1; dx <= 1; dx++) {
    for (let dy = -1; dy <= 1; dy++) keys.push('D,' + (gx + dx) + ',' + (gy + dy));
  }
  for (const k of keys) {
    const w = game.walls.get(k);
    if (!w) continue;
    if (w.type === 'door' && w.open) continue;   // an OPEN door is passable to everyone
    if (game._passOwner && w.owner === game._passOwner) {   // own base
      // the human player passes own doors freely; BOTS must OPEN the door first
      // (game._mustOpenDoor is set during bot movement) so they swing it open, pass, then shut it
      if (w.type === 'door' && !game._noDoor && !game._mustOpenDoor) continue;
      if (game._passWalls) continue;   // allied workers only: free base access
    }
    const seg = wallSegOf(k, w);
    if (ptSeg(x, y, seg[0], seg[1], seg[2], seg[3]) < reach) return true;
  }
  return false;
}

function fenceBlocks(x, y, r) {   // deployable wood fences are solid (can't walk over)
  if (!game.fences || !game.fences.length) return false;
  for (const f of game.fences) {
    if (f.hp <= 0) continue;
    if (ptSeg(x, y, f.x0, f.y0, f.x1, f.y1) < r + 4) return true;
  }
  return false;
}

function blocked(x, y, r) {
  if (game._ghostMove) return false;   // full phase
  // soft stuck-escape: phase TERRAIN (coast/lake/boulders) & deploys to break a pathing
  // limit-cycle, but ALL walls (ours & theirs) stay solid — units still use doors and still
  // must breach enemy walls
  if (game._escapeSoft) return wallNear(x, y, r) || fenceBlocks(x, y, r);
  if (!onLand(x, y)) return true;   // the ocean is impassable (island edge)
  // lakes are WADEABLE (walkable but slow); only the ocean and solid BOULDERS block
  return circleHitsSolid(x, y, r) || wallNear(x, y, r) || fenceBlocks(x, y, r) || boulderBlocks(x, y, r);
}

function segSeg(ax, ay, bx, by, cx, cy, dx, dy) {   // do segments AB and CD cross?
  const orient = (px, py, qx, qy, rx, ry) => (qx - px) * (ry - py) - (qy - py) * (rx - px);
  const d1 = orient(cx, cy, dx, dy, ax, ay);
  const d2 = orient(cx, cy, dx, dy, bx, by);
  const d3 = orient(ax, ay, bx, by, cx, cy);
  const d4 = orient(ax, ay, bx, by, dx, dy);
  return ((d1 > 0) !== (d2 > 0)) && ((d3 > 0) !== (d4 > 0));
}

function wallBlocksViewFor(x0, y0, x1, y1, owner) {
  // a closed wall/door between the two points blocks LOS; a unit/turret sees over its OWN walls
  for (const [k, w] of game.walls) {
    if (w.hp <= 0) continue;
    if (owner && w.owner === owner) continue;
    if (w.type === 'door' && w.open) continue;
    const seg = wallSegOf(k, w);
    if (segSeg(x0, y0, x1, y1, seg[0], seg[1], seg[2], seg[3])) return true;
  }
  return false;
}

function wallBlocksView(x0, y0, x1, y1) { return wallBlocksViewFor(x0, y0, x1, y1, null); }

function resolveCircle(arr) {
  for (const o of arr) {
    if (o.amount !== undefined && o.amount <= 0) continue;   // depleted node = passable
    if (o.hp !== undefined && o.hp <= 0) continue;           // destroyed = passable
    const rr = PLAYER_R + o.r;
    const distSq = dist2(player.x, player.y, o.x, o.y);
    if (distSq < rr * rr && distSq > 0.0001) {
      const d = Math.sqrt(distSq);
      const push = rr - d;
      player.x += (player.x - o.x) / d * push;
      player.y += (player.y - o.y) / d * push;
    }
  }
}

/* ------------------------------ gathering ------------------------------- */
function repairNearby() {   // the tool repairs the nearest damaged structure (costs materials)
  let best = null;
  let bestDistSq = (GATHER_RANGE + TILE * 0.6) * (GATHER_RANGE + TILE * 0.6);
  let bx = 0;
  let by = 0;
  for (const [k, s] of game.structures) {
    if (s.hp >= s.max) continue;
    // a foundation can't be repaired for REPAIR_LOCK seconds after taking damage
    if ((s.type === 'floor' || s.type === 'trifloor') &&
        game.t - (s._hitT !== undefined ? s._hitT : -1e9) < REPAIR_LOCK) continue;
    const [gx, gy] = k.split(',').map(Number);
    const cx = gx * TILE + TILE / 2;
    const cy = gy * TILE + TILE / 2;
    const d = dist2(player.x, player.y, cx, cy);
    if (d < bestDistSq) {
      bestDistSq = d;
      best = s;
      bx = cx;
      by = cy;
    }
  }
  for (const [k, s] of game.walls) {
    // a wall can't be repaired for REPAIR_LOCK seconds after taking damage
    if (s.hp >= s.max || game.t - (s._hitT !== undefined ? s._hitT : -1e9) < REPAIR_LOCK) continue;
    const seg = wallSegOf(k, s);
    const cx = (seg[0] + seg[2]) / 2;
    const cy = (seg[1] + seg[3]) / 2;
    const d = dist2(player.x, player.y, cx, cy);
    if (d < bestDistSq) {
      bestDistSq = d;
      best = s;
      bx = cx;
      by = cy;
    }
  }
  // your own turrets/cupboards/boxes are repairable too (costs their build materials, incl. metal)
  for (const [k, s] of game.deploys) {
    if ((s.owner || OWNER) !== OWNER || s.hp >= s.max) continue;
    const [gx, gy] = k.split(',').map(Number);
    const cx = gx * TILE + TILE / 2;
    const cy = gy * TILE + TILE / 2;
    const d = dist2(player.x, player.y, cx, cy);
    if (d < bestDistSq) {
      bestDistSq = d;
      best = s;
      bx = cx;
      by = cy;
    }
  }
  if (!best) return false;
  const def = BUILD[best.type];
  const heal = Math.min(best.max - best.hp, Math.ceil(best.max * 0.2));
  const frac = heal / best.max;
  const cost = {};
  for (const k in def.cost) cost[k] = Math.max(1, Math.ceil(def.cost[k] * frac));
  if (best.mat === 'stone') cost.stone = (cost.stone || 0) + Math.ceil(15 * frac);
  if (best.mat === 'metal') {
    cost.stone = (cost.stone || 0) + Math.ceil(15 * frac);
    cost.metal = (cost.metal || 0) + Math.ceil(20 * frac);
  }
  if (!canAfford(cost)) {
    flashTip('Need materials to repair');
    return true;
  }
  pay(cost);
  best.hp += heal;
  addFloat(bx, by - 18, '+' + heal + ' hp', '#9ccb5a');
  burst(bx, by, '#cfe0ff', 6, 120);
  return true;
}

function gatherSwing() {
  game.gatherCd = 0.34;
  player.swing = 0.16;

  // melee: the hatchet also hits the nearest animal in reach
  let nearAnimal = null;
  let nearDistSq = 1e9;
  for (const a of game.animals) {
    if (a.hp <= 0) continue;
    const d = dist2(player.x, player.y, a.x, a.y);
    const rr = GATHER_RANGE * 0.85 + a.r;
    if (d < rr * rr && d < nearDistSq) {
      nearDistSq = d;
      nearAnimal = a;
    }
  }
  if (nearAnimal) damageAnimal(nearAnimal, 18, player.x, player.y);

  if (repairNearby()) return;   // repair a damaged structure instead of gathering

  // gather the nearest resource node
  let best = null;
  let bestDistSq = 1e9;
  for (const o of game.resources) {
    if (o.amount <= 0) continue;
    const d = dist2(player.x, player.y, o.x, o.y);
    const rr = GATHER_RANGE + o.r;
    if (d < rr * rr && d < bestDistSq) {
      bestDistSq = d;
      best = o;
    }
  }
  if (!best) return;
  const amt = (best.base === 'wood' ? 8 : best.base === 'stone' ? 6 : 5) * (game.jackhammer ? 3 : 1);   // jackhammer triples yield
  const got = Math.min(amt, best.amount);
  best.amount -= got;
  give(best.base, got);
  best.regen = 0;
  addFloat(best.x, best.y - best.r - 6, '+' + got + ' ' + best.base,
    best.base === 'wood' ? '#d79a52' : best.base === 'stone' ? '#c2c8cf' : '#eaa24e');
  burst(best.x, best.y, best.base === 'wood' ? COL.wood : best.base === 'stone' ? COL.stone : COL.metalOre, 9, 170);
  if (game.jackhammer) {
    // JACKHAMMER: big chunks of the node break off and fly...
    const chunkColor = best.base === 'wood' ? COL.woodDk : best.base === 'stone' ? COL.stoneDk : COL.metalDk;
    for (let i = 0; i < 7; i++) {
      const a = rand(0, TAU);
      const sp = rand(110, 320);
      game.particles.push({
        x: best.x, y: best.y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp,
        life: rand(0.3, 0.7), max: 0.7, color: chunkColor, r: rand(2.6, 5.6)
      });
    }
    // ...plus bright sparks (fast, short-lived)
    for (let i = 0; i < 6; i++) {
      const a = rand(0, TAU);
      const sp = rand(190, 440);
      game.particles.push({
        x: best.x, y: best.y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp,
        life: rand(0.1, 0.26), max: 0.26, color: i % 2 ? '#fff2b0' : '#ffce4a', r: rand(0.9, 2)
      });
    }
  }
}
