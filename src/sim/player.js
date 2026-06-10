// Player simulation: movement, firing, gathering/repair, interact, shop,
// building inputs. The client feeds S.cmd; everything resolves here in-sim.
import { TILE, WORLD, PLAYER_R, GATHER_RANGE, WEAPONS, SHOP, BUILD, PIECES, OWNER, SAFE_R, ARMOR, FENCE, GRENADE, COPTER, UPGRADE, tierHp, TURRET_UP } from './config.js';
import { clamp, dist, dist2, gkey, ekey } from './util.js';
import { blocked, inSafeZone, wallBlocksView, wallSegOf } from './physics.js';
import { spawnBullet, spawnRocket, playerDie, hurtPlayer, damageAnimal } from './combat.js';
import { canPlace, place, upgradeStructure, tryRepair, repairCost, cellCenter, nearestCupboard, cleanupOrphans } from './building.js';
import { addFloat, burst, spawnPlayerWorker } from './state.js';
import { moveCopter } from './vehicles.js';
import { throwSupplySignal } from './worldevents.js';
import { dropFootprint } from './worldevents.js';

export const SLOT_WEAPON = { 1: 'pistol', 2: 'rifle', 3: 'minigun', 4: 'rocket', 6: 'sniper', 7: 'shotgun', 8: 'hmg' };

export function curWeapon(S) {
  const k = SLOT_WEAPON[S.slot];
  return k && S.owned[k] ? k : null;
}

export function updatePlayer(S, dt) {
  const p = S.player, cmd = S.cmd;
  p.gatherCd = Math.max(0, (p.gatherCd || 0) - dt);
  p.recoil = Math.max(0, p.recoil - 42 * dt);
  p.swing = Math.max(0, p.swing - dt);
  p.hurt = Math.max(0, p.hurt - dt);
  p.invuln = Math.max(0, p.invuln - dt);

  if (p.dead) {
    p.deadT -= dt;
    if (p.deadT <= 0) respawnPlayer(S);
    return;
  }
  // poison DoT
  if (p.poison > 0) {
    p.poison -= dt;
    p.regenDelay = Math.max(p.regenDelay, 1.5);
    p.health -= 3.2 * dt;
    if (S.tick % 60 === 0) addFloat(S, p.x, p.y - 20, 'poison', '#7bbf4f');
    if (p.health <= 0) { playerDie(S, true); return; }
  }
  p.regenDelay = Math.max(0, p.regenDelay - dt);
  if (p.regenDelay <= 0 && p.health < p.maxhp) p.health = Math.min(p.maxhp, p.health + 12 * dt);

  if (p.inCopter) { moveCopter(S, dt); return; }

  // aim
  p.angle = Math.atan2(cmd.my - p.y, cmd.mx - p.x);

  // movement
  let dx = (cmd.right ? 1 : 0) - (cmd.left ? 1 : 0);
  let dy = (cmd.down ? 1 : 0) - (cmd.up ? 1 : 0);
  let speed = cmd.run ? p.run : p.walk;
  const wepK = curWeapon(S);
  if (wepK === 'minigun' && S.weapons.minigun.spin >= WEAPONS.minigun.windup) speed *= 0.4;
  const lake = S.world.lakeAt(p.x, p.y);
  if (lake && !lake.frozen) speed *= 0.5;
  const len = Math.hypot(dx, dy);
  let wvx = 0, wvy = 0;
  if (len > 0) { wvx = dx / len * speed; wvy = dy / len * speed; }
  if (lake && lake.frozen) {
    // slippery: ease control, glide with no input
    const t2 = Math.min(1, dt * 1.1);
    p.vx += (wvx - p.vx) * t2; p.vy += (wvy - p.vy) * t2;
    if (len === 0) { const g = Math.pow(0.6, dt); p.vx *= g; p.vy *= g; }
  } else { p.vx = wvx; p.vy = wvy; }
  p.moving = Math.hypot(p.vx, p.vy) > 10;
  const opts = { passOwner: OWNER, openOwnDoors: false };
  const nx = p.x + p.vx * dt, ny = p.y + p.vy * dt;
  if (blocked(S, p.x, p.y, PLAYER_R, opts)) { p.x = nx; p.y = ny; } // escape rule
  else {
    if (!blocked(S, nx, p.y, PLAYER_R, opts)) p.x = nx; else p.vx *= -0.2;
    if (!blocked(S, p.x, ny, PLAYER_R, opts)) p.y = ny; else p.vy *= -0.2;
  }
  p.x = clamp(p.x, PLAYER_R, WORLD.w - PLAYER_R);
  p.y = clamp(p.y, PLAYER_R, WORLD.h - PLAYER_R);
  // push-out vs round obstacles
  for (const n of S.resources) if (n.amount > 0) pushOut(p, n.x, n.y, n.r + PLAYER_R - 6);
  for (const b of S.barrels) if (b.hp > 0) pushOut(p, b.x, b.y, b.r + PLAYER_R - 4);
  for (const b of S.world.boulders) pushOut(p, b.x, b.y, b.r + PLAYER_R - 2);
  pushOut(p, S.world.shop.x, S.world.shop.y, S.world.shop.r + PLAYER_R);
  if (p.moving) dropFootprint(S, p, Math.atan2(p.vy, p.vx));

  // weapons
  const w = wepK && S.weapons[wepK];
  const def = wepK && WEAPONS[wepK];
  if (w) {
    w.cd = Math.max(0, w.cd - dt);
    if (w.reloading > 0) {
      w.reloading -= dt;
      if (w.reloading <= 0) {
        const take = Math.min(def.magSize - w.ammo, w.reserve);
        w.ammo += take; w.reserve -= take;
      }
    }
  }
  const canAct = !S.buildMode && !p.dead && !p.inCopter && !S.shopOpen && !S.storeOpen;
  if (canAct && wepK === 'minigun') {
    const mg = S.weapons.minigun;
    if (cmd.fireHeld) mg.spin = Math.min(def.windup + 0.4, mg.spin + dt);
    else mg.spin = Math.max(0, mg.spin - 1.6 * dt);
    if (cmd.fireHeld && mg.spin >= def.windup) fire(S);
  } else if (canAct && cmd.fireHeld && def && def.auto) fire(S);
  else if (canAct && cmd.fireHeld && S.slot === 0) {
    if (p.gatherCd <= 0) { p.gatherCd = 0.34; gatherSwing(S); }
  }
  if (S.rapidRockets && canAct && cmd.fireHeld) {
    S.rapidCd = Math.max(0, (S.rapidCd || 0) - dt);
    if (S.rapidCd <= 0 && !inSafeZone(S, p.x, p.y)) {
      S.rapidCd = 0.1;
      spawnRocket(S, p.x + Math.cos(p.angle) * 26, p.y + Math.sin(p.angle) * 26, p.angle, OWNER);
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

export function fire(S) {
  const p = S.player;
  const k = curWeapon(S);
  if (!k) return;
  if (inSafeZone(S, p.x, p.y)) { tip(S, 'No weapons in the safe zone'); return; }
  const w = S.weapons[k], def = WEAPONS[k];
  if (w.reloading > 0 || w.cd > 0) return;
  if (w.ammo <= 0) { reload(S); return; }
  w.ammo--; w.cd = def.rof;
  let spread = def.spread;
  if (k === 'rifle' && p.rifleLaser) spread *= 0.4;
  const n = def.pellets || 1;
  for (let i = 0; i < n; i++) {
    const a = p.angle + S.rng.rand(-spread, spread);
    const mx = p.x + Math.cos(a) * 26, my = p.y + Math.sin(a) * 26;
    if (def.rocket) spawnRocket(S, mx, my, a, OWNER);
    else spawnBullet(S, { x: mx, y: my, angle: a, speed: def.speed, dmg: def.dmg, from: OWNER, life: def.range, col: def.tracer || null });
  }
  p.recoil = Math.min(12, p.recoil + def.kick);
  S.muzzle = { x: p.x + Math.cos(p.angle) * 30, y: p.y + Math.sin(p.angle) * 30, a: p.angle, t: def.rocket ? 0.08 : 0.05 };
  S.events.push({ type: 'shot', x: p.x, y: p.y, a: p.angle, weapon: k });
}

export function reload(S) {
  const k = curWeapon(S);
  if (!k) return;
  const w = S.weapons[k], def = WEAPONS[k];
  if (w.reloading > 0 || w.ammo >= def.magSize || w.reserve <= 0) return;
  w.reloading = def.reloadT;
}

export function selectSlot(S, i) {
  if (S.player.inCopter) return;
  const k = SLOT_WEAPON[i];
  if (k && !S.owned[k]) { tip(S, 'locked — buy it at the trade shop'); return; }
  S.slot = i;
  S.buildMode = i === 5;
  if (S.rapidRockets && i !== 4) S.rapidRockets = false;
}

function gatherSwing(S) {
  const p = S.player;
  p.swing = 0.16;
  // 1. melee animal
  let a = null, ad = GATHER_RANGE * 0.85;
  for (const an of S.animals) {
    if (an.dead) continue;
    const d = dist(p.x, p.y, an.x, an.y) - an.r;
    if (d < ad) { ad = d; a = an; }
  }
  if (a) { damageAnimal(S, a, 18, p.x, p.y, OWNER); return; }
  // 2. repair
  if (repairNearby(S)) return;
  // 3. harvest
  let node = null, nd = GATHER_RANGE;
  for (const n of S.resources) {
    if (n.amount <= 0) continue;
    const d = dist(p.x, p.y, n.x, n.y) - n.r;
    if (d < nd) { nd = d; node = n; }
  }
  if (node) {
    const baseAmt = node.base === 'wood' ? 8 : node.base === 'stone' ? 6 : 5;
    const got = Math.min((S.jackhammer ? 3 : 1) * baseAmt, node.amount);
    node.amount -= got; node.regen = 0;
    S.inv[node.base] += got;
    addFloat(S, node.x, node.y - node.r, '+' + got + ' ' + node.base, '#d8e0c2');
    burst(S, node.x, node.y, '#caa07a', S.jackhammer ? 6 : 3, 140);
    S.events.push({ type: 'harvest', x: node.x, y: node.y, kind: node.base });
  }
}

export function repairNearby(S) {
  const p = S.player;
  const reach = GATHER_RANGE + 38.4;
  let best = null, bd = reach, bestKind = null, bestKey = null;
  for (const [k, s] of S.structures) {
    if (s.owner !== OWNER || s.hp >= s.max) continue;
    const [gx, gy] = k.split(',').map(Number);
    const c = cellCenter(gx, gy);
    const d = dist(p.x, p.y, c.x, c.y);
    if (d < bd) { bd = d; best = s; bestKind = 'cell'; bestKey = k; }
  }
  for (const [k, w] of S.walls) {
    if (w.owner !== OWNER || w.hp >= w.max) continue;
    const seg = wallSegOf(k, w);
    const d = dist(p.x, p.y, (seg[0] + seg[2]) / 2, (seg[1] + seg[3]) / 2);
    if (d < bd) { bd = d; best = w; bestKind = 'wall'; bestKey = k; }
  }
  for (const [k, dp] of S.deploys) {
    if (dp.owner !== OWNER || dp.hp >= dp.max) continue;
    const [gx, gy] = k.split(',').map(Number);
    const c = cellCenter(gx, gy);
    const d = dist(p.x, p.y, c.x, c.y);
    if (d < bd) { bd = d; best = dp; bestKind = 'deploy'; bestKey = k; }
  }
  if (!best) return false;
  const def = BUILD[best.type];
  const lock = bestKind === 'deploy' ? 0 : undefined;
  if (tryRepair(S, best, def, [S.inv], lock)) {
    addFloat(S, p.x, p.y - 20, 'repaired', '#9ad06a');
    return true;
  }
  return true; // wanted to repair (lock or funds) — swing consumed
}

export function interact(S) {
  const p = S.player;
  if (p.inCopter) {
    // exit copter (not over a base)
    const gx = Math.floor(p.x / TILE), gy = Math.floor(p.y / TILE);
    if (S.structures.has(gkey(gx, gy))) { tip(S, "Can't land on a base"); return; }
    p.inCopter = false;
    p.y += COPTER.r + PLAYER_R + 6;
    return;
  }
  if (S.copter && !S.copter.destroyed && dist(p.x, p.y, S.copter.x, S.copter.y) < COPTER.r + PLAYER_R + 34) {
    p.inCopter = true;
    tip(S, 'liftoff');
    return;
  }
  const shop = S.world.shop;
  if (dist(p.x, p.y, shop.x, shop.y) < shop.r + PLAYER_R + 44) {
    S.shopOpen = !S.shopOpen;
    return;
  }
  // nearest door/box/TC within TILE*1.4
  let best = null, bd = TILE * 1.4, kind = null, key = null;
  for (const [k, w] of S.walls) {
    if (w.type !== 'door' || w.hp <= 0) continue;
    const seg = wallSegOf(k, w);
    const d = dist(p.x, p.y, (seg[0] + seg[2]) / 2, (seg[1] + seg[3]) / 2);
    if (d < bd) { bd = d; best = w; kind = 'door'; key = k; }
  }
  for (const [k, dp] of S.deploys) {
    if (!(dp.type === 'cupboard' || dp.type === 'box')) continue;
    const [gx, gy] = k.split(',').map(Number);
    const c = cellCenter(gx, gy);
    const d = dist(p.x, p.y, c.x, c.y);
    if (d < bd) { bd = d; best = dp; kind = 'store'; key = k; }
  }
  if (!best) return;
  if (best.lock && best.lock.by !== OWNER) { tip(S, 'Locked — not your base'); return; }
  if (kind === 'door') { best.open = !best.open; S.nav.stamp++; }
  else S.storeOpen = key;
}

// ---- build mode ----
export function buildTargetAt(S, wx, wy) {
  const piece = S.buildPiece;
  const def = BUILD[piece];
  const gx = Math.floor(wx / TILE), gy = Math.floor(wy / TILE);
  if (def.cat === 'cell') return { gx, gy };
  if (def.cat === 'diag') return { key: ekey('D', gx, gy) };
  // edge: nearest of the 4 cell edges
  const lx = wx - gx * TILE, ly = wy - gy * TILE;
  const cands = [
    { key: ekey('V', gx, gy), d: lx },
    { key: ekey('V', gx + 1, gy), d: TILE - lx },
    { key: ekey('H', gx, gy), d: ly },
    { key: ekey('H', gx, gy + 1), d: TILE - ly },
  ].sort((a, b) => a.d - b.d);
  return { key: cands[0].key };
}

export function tryPlace(S) {
  const t = buildTargetAt(S, S.cmd.mx, S.cmd.my);
  const piece = S.buildPiece;
  const obj = place(S, OWNER, piece, t, [S.inv], { rot: S.buildRot });
  if (obj) {
    if (BUILD[piece].tc) addFloat(S, S.cmd.mx, S.cmd.my, 'base claimed', '#9ad06a');
    S.events.push({ type: 'place', x: S.cmd.mx, y: S.cmd.my });
  } else tip(S, "can't place there");
}

export function tryRemove(S) {
  const t = buildTargetAt(S, S.cmd.mx, S.cmd.my);
  const gx = Math.floor(S.cmd.mx / TILE), gy = Math.floor(S.cmd.my / TILE);
  // try wall edge near cursor first, then deploy, then structure
  const refund = (def, obj) => {
    for (const k in def.cost) S.inv[k] += Math.ceil(def.cost[k] / 2);
    if (obj.mat === 'stone' || obj.mat === 'metal') S.inv.stone += 7;
    if (obj.mat === 'metal') S.inv.metal += 10;
  };
  if (t.key) {
    const w = S.walls.get(t.key);
    if (w && w.owner === OWNER) { refund(BUILD[w.type], w); S.walls.delete(t.key); S.nav.stamp++; return; }
  }
  const dk = gkey(gx, gy);
  const dp = S.deploys.get(dk);
  if (dp && dp.owner === OWNER) { refund(BUILD[dp.type], dp); S.deploys.delete(dk); S.nav.stamp++; return; }
  const st = S.structures.get(dk);
  if (st && st.owner === OWNER) { refund(BUILD[st.type], st); S.structures.delete(dk); cleanupOrphans(S, dk); S.nav.stamp++; return; }
}

export function upgradeUnderCursor(S) {
  const wx = S.cmd.mx, wy = S.cmd.my;
  const gx = Math.floor(wx / TILE), gy = Math.floor(wy / TILE);
  if (S.buildMode) {
    // wall edge first if within 18px
    const t = buildTargetAt(S, wx, wy);
    const tryUp = (obj) => obj && obj.owner === OWNER && upgradeStructure(S, obj, BUILD[obj.type], [S.inv]);
    for (const k of [ekey('V', gx, gy), ekey('V', gx + 1, gy), ekey('H', gx, gy), ekey('H', gx, gy + 1)]) {
      const w = S.walls.get(k);
      if (!w) continue;
      const seg = wallSegOf(k, w);
      if (Math.min(dist(wx, wy, seg[0], seg[1]), dist(wx, wy, seg[2], seg[3]), dist(wx, wy, (seg[0] + seg[2]) / 2, (seg[1] + seg[3]) / 2)) < 18) {
        if (tryUp(w)) return;
      }
    }
    if (tryUp(S.structures.get(gkey(gx, gy)))) return;
  } else {
    // turret tier upgrade
    const d = S.deploys.get(gkey(gx, gy));
    if (d && d.type === 'turret' && d.owner === OWNER) {
      const next = (d.tier || 1) + 1;
      const cost = TURRET_UP[next];
      if (cost && S.inv.scrap >= cost) {
        S.inv.scrap -= cost;
        d.tier = next;
        d.mag = 30; d.reload = 0;
        addFloat(S, wx, wy, 'turret T' + next, '#9ab0d0');
      }
    }
  }
}

export function throwGrenade(S) {
  const p = S.player;
  if (S.inv.grenade <= 0) { tip(S, 'No grenades — buy at the trade shop'); return; }
  if (inSafeZone(S, p.x, p.y)) { tip(S, 'No weapons in the safe zone'); return; }
  S.inv.grenade--;
  const d = Math.min(560, dist(p.x, p.y, S.cmd.mx, S.cmd.my));
  const speed = Math.max(120, d * 6) * 0.2;
  const a = p.angle;
  S.grenades.push({ x: p.x + Math.cos(a) * 22, y: p.y + Math.sin(a) * 22, vx: Math.cos(a) * speed, vy: Math.sin(a) * speed, t: GRENADE.fuse, from: OWNER, bob: 0 });
}

export function dropPlayerFence(S) {
  const p = S.player;
  if (S.inv.fence <= 0) { tip(S, 'No fences — buy more (10 wood)'); return; }
  const fx = p.x + Math.cos(p.angle) * 34, fy = p.y + Math.sin(p.angle) * 34;
  if (S.structures.has(gkey(Math.floor(fx / TILE), Math.floor(fy / TILE)))) { tip(S, 'Not on a base'); return; }
  S.inv.fence--;
  const pa = p.angle + Math.PI / 2;
  S.fences.push({
    x: fx, y: fy, a: pa, owner: OWNER, hp: FENCE.hp, max: FENCE.hp, t: FENCE.life,
    x0: fx - Math.cos(pa) * FENCE.half, y0: fy - Math.sin(pa) * FENCE.half,
    x1: fx + Math.cos(pa) * FENCE.half, y1: fy + Math.sin(pa) * FENCE.half,
  });
  S.needFenceRefresh = true;
}

export function respawnPlayer(S) {
  const p = S.player;
  p.dead = false; p.health = p.maxhp; p.invuln = 1.8; p.poison = 0;
  let tc = null;
  for (const [k, d] of S.deploys) {
    if (d.type === 'cupboard' && d.owner === OWNER) {
      const [gx, gy] = k.split(',').map(Number);
      const c = cellCenter(gx, gy);
      tc = { x: c.x, y: c.y + TILE };
      break;
    }
  }
  if (tc) { p.x = tc.x; p.y = tc.y; }
  else {
    for (let t = 0; t < 60; t++) {
      const x = S.rng.rand(600, WORLD.w - 600), y = S.rng.rand(600, WORLD.h - 600);
      if (!S.world.onLand(x, y) || S.world.lakeAt(x, y) || inSafeZone(S, x, y) || blocked(S, x, y, PLAYER_R)) continue;
      p.x = x; p.y = y;
      break;
    }
  }
  if (S.copter && S.copter.destroyed) {
    S.copter.destroyed = false; S.copter.hp = S.copter.max;
    S.copter.x = p.x + 120; S.copter.y = p.y;
  }
  for (const a of S.animals) {
    a.aggro = null; a.foe = null;
    if (!a.dead && dist2(a.x, a.y, p.x, p.y) < 200 * 200) { a.dead = true; a.respawnT = 0.6; }
  }
}

// ---- shop ----
export function doTrade(S, i) {
  const [kind, amt, scrap] = SHOP.trades[i];
  if (S.inv[kind] < amt) { tip(S, 'not enough ' + kind); return; }
  S.inv[kind] -= amt; S.inv.scrap += scrap;
}

export function doBuy(S, k) {
  const def = SHOP.buys[k];
  if (!def || S.inv.scrap < def.cost) { tip(S, 'not enough scrap'); return; }
  S.inv.scrap -= def.cost;
  const w = S.weapons[k];
  if (!S.owned[k]) {
    S.owned[k] = true;
    if (w.ammo < WEAPONS[k].magSize) w.ammo = WEAPONS[k].magSize;
    addFloat(S, S.player.x, S.player.y - 20, WEAPONS[k].name + ' unlocked!', '#bfe3ff');
  } else w.reserve += def.ammo;
}

export function buyMisc(S, what) {
  const p = S.player;
  const pay = (c) => { if (S.inv.scrap < c) { tip(S, 'not enough scrap'); return false; } S.inv.scrap -= c; return true; };
  switch (what) {
    case 'jackhammer': if (!S.jackhammer && pay(SHOP.jackhammer)) { S.jackhammer = true; tip(S, 'Jackhammer! 3× gather'); } break;
    case 'laser': if (!S.owned.rifle) { tip(S, 'buy the rifle first'); break; } if (!p.rifleLaser && pay(SHOP.laser)) p.rifleLaser = true; break;
    case 'fence': if (S.inv.wood >= SHOP.fenceWood) { S.inv.wood -= SHOP.fenceWood; S.inv.fence++; } else tip(S, 'not enough wood'); break;
    case 'grenade': if (pay(SHOP.grenade)) S.inv.grenade++; break;
    case 'signal': if (pay(SHOP.signal)) S.inv.signal = (S.inv.signal | 0) + 1; break;
    case 'hqm': if (pay(SHOP.hqm.cost)) S.inv.hqm += SHOP.hqm.amt; break;
    case 'facemask': { const next = p.facemask + 1; if (next <= 3 && pay(ARMOR.cost[next])) p.facemask = next; break; }
    case 'bodyArmor': { const next = p.bodyArmor + 1; if (next <= 3 && pay(ARMOR.cost[next])) p.bodyArmor = next; break; }
    case 'worker': if (pay(SHOP.worker)) { spawnPlayerWorker(S); tip(S, 'worker hired — they gather and fight for you'); } break;
  }
}

export function storeMove(S, kind, amt) {
  const d = S.deploys.get(S.storeOpen);
  if (!d || !d.store) return;
  if (amt > 0) { // bag → store
    const take = amt >= 9000 ? S.inv[kind] : Math.max(1, Math.floor(S.inv[kind] * amt));
    const real = Math.min(take, S.inv[kind]);
    S.inv[kind] -= real; d.store[kind] += real;
  } else {
    const a = -amt;
    const take = a >= 9000 ? d.store[kind] : Math.max(1, Math.floor(d.store[kind] * a));
    const real = Math.min(take, d.store[kind]);
    d.store[kind] -= real; S.inv[kind] += real;
  }
}

function tip(S, text) {
  S.tip = { text, t: 1.4 };
}

export { throwSupplySignal };
