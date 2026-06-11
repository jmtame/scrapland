// Combat: bullets (swept tests, ricochets, headshots), explosions (LOS-gated
// vs deploys), fires, satchels, grenades, turrets, loot, damage/death.
import { TILE, WORLD, OWNER, WEAPONS, GRENADE, HEAD_R, HEADSHOT_MUL, ARMOR, armorReduce, TTIER, TURRET_MUZZLE, GUARD, TRANSPORT, BOUNTY_REWARD, SAFE_R, ANIMALS } from './config.js';
import { gkey, ekey, dist, dist2, ptSeg, segSeg, clamp, TAU } from './util.js';
import { wallSegOf, wallBlocksView, isSolidAt, boulderBlocks, boulderLine, inSafeZone, segHitsHead, eachWallNear } from './physics.js';
import { damageWall, damageStructure, damageDeploy, cellCenter, clearDeadBase } from './building.js';
import { addFloat, burst, addLoot, spillStack, markRaid, creditKill, teamOf } from './state.js';

export function spawnBullet(S, o) {
  S.bullets.push({
    x: o.x, y: o.y, px: o.x, py: o.y,
    vx: Math.cos(o.angle) * o.speed, vy: Math.sin(o.angle) * o.speed,
    life: o.life, dmg: o.dmg, from: o.from, col: o.col || null, turret: !!o.turret,
    enemy: o.from !== OWNER, bounces: 0, ricochet: false, dist: 0,
  });
}

export function spawnRocket(S, x, y, angle, from) {
  const w = WEAPONS.rocket;
  S.rockets.push({ x, y, vx: Math.cos(angle) * w.speed, vy: Math.sin(angle) * w.speed, life: w.range, w, smoke: 0, from });
  S.events.push({ type: 'rocketLaunch', x, y });
}

// ---- armor ----
export const playerMitigate = (S, dmg, head) => dmg * (1 - armorReduce(head ? S.player.facemask : S.player.bodyArmor, head ? 'head' : 'body'));
export const botMitigate = (b, dmg, head) => dmg * (1 - armorReduce(head ? b.facemask : b.bodyArmor, head ? 'head' : 'body'));

// ---- hurt / death ----
export function hurtPlayer(S, dmg, fx, fy, by) {
  const p = S.player;
  if (p.dead || p.invuln > 0 || S.ghost || inSafeZone(S, p.x, p.y)) return;
  p.health -= dmg;
  p.regenDelay = 4.5; p.hurt = 0.28;
  if (by) p.lastHitBy = by;
  if (fx !== undefined) {
    const d = Math.max(1, dist(fx, fy, p.x, p.y));
    p.x += (p.x - fx) / d * 7; p.y += (p.y - fy) / d * 7;
  }
  burst(S, p.x, p.y, '#9e2b1e', 6, 160);
  if (p.health <= 0) playerDie(S);
}

export function playerDie(S, poison) {
  const p = S.player;
  if (p.dead) return;
  p.dead = true; p.deadT = poison ? 4 : 2.2;
  S.deathMark = { x: p.x, y: p.y };
  creditKill(S, p.lastHitBy);
  for (const k of ['wood', 'stone', 'metal']) { spillStack(S, p.x, p.y, k, S.inv[k]); S.inv[k] = 0; }
  let ammoPool = 0;
  for (const k in S.weapons) {
    if (k === 'rocket') continue;
    ammoPool += S.weapons[k].ammo + S.weapons[k].reserve;
    S.weapons[k].ammo = 0; S.weapons[k].reserve = 0;
  }
  const piles = Math.min(8, Math.ceil(ammoPool / 30));
  for (let i = 0; i < piles; i++) addLoot(S, p.x, p.y, 'ammo', Math.ceil(ammoPool / Math.max(1, piles)));
  const rk = S.weapons.rocket;
  const rockets = Math.min(12, rk.ammo + rk.reserve);
  rk.ammo = 0; rk.reserve = 0;
  for (let i = 0; i < rockets; i++) addLoot(S, p.x, p.y, 'rocket', 1);
  S.events.push({ type: 'playerDie', x: p.x, y: p.y });
}

export function hurtBot(S, b, dmg, sx, sy, by) {
  if (b.dead || b.flying || b.eliminated) return;
  if (inSafeZone(S, b.x, b.y)) return;
  b.hp -= dmg;
  burst(S, b.x, b.y, '#9e2b1e', 4, 150);
  b.regenT = 4; b.lastHitBy = by || null;
  if (sx !== undefined) { b.threatX = sx; b.threatY = sy; b.retaliateT = 2.2; }
  if (b.hp <= 0) botDie(S, b);
}

export function botDie(S, b) {
  if (b.dead) return;
  b.dead = true; b.respawnT = 15; b.flying = false; b.aboard = null;
  for (const k of ['wood', 'stone', 'metal']) { spillStack(S, b.x, b.y, k, b.inv[k]); b.inv[k] = 0; }
  const rk = Math.min(12, b.rockets); b.rockets = 0;
  for (let i = 0; i < rk; i++) addLoot(S, b.x, b.y, 'rocket', 1);
  const gn = Math.min(6, b.grenades); b.grenades = 0;
  for (let i = 0; i < gn; i++) addLoot(S, b.x, b.y, 'rocket', 1); // grenades drop as rocket loot (v1 rule)
  addLoot(S, b.x, b.y, 'ammo', S.rng.randi(24, 60));
  if (b.gun !== 'pistol') { addLoot(S, b.x, b.y, 'gun', 1, b.gun); b.gun = 'pistol'; }
  if (b.scrap > 0) { spillStack(S, b.x, b.y, 'scrap', b.scrap); b.scrap = 0; }
  if (b.id === S.bounty && b.lastHitBy === OWNER) {
    S.inv.scrap += BOUNTY_REWARD;
    addFloat(S, b.x, b.y, '+' + BOUNTY_REWARD + ' bounty!', '#ffd76b');
    S.bounty = null;
  }
  creditKill(S, b.lastHitBy);
  burst(S, b.x, b.y, '#9e2b1e', 14, 220);
  addFloat(S, b.x, b.y, 'down', '#e2664a');
}

export function hurtGuard(S, g, dmg, by) {
  if (g.dead) return;
  g.hp -= dmg;
  burst(S, g.x, g.y, '#9e2b1e', 5, 140);
  if (g.hp <= 0) {
    g.dead = true; g.respawnT = 82;
    burst(S, g.x, g.y, '#9e2b1e', 20, 220);
    spillStack(S, g.x, g.y, 'scrap', S.rng.randi(4, 9));
    addLoot(S, g.x, g.y, 'ammo', S.rng.randi(12, 26));
    if (by === OWNER) { S.inv.scrap += 8; addFloat(S, g.x, g.y, '+8 guard', '#ffe07a'); }
    else { addFloat(S, g.x, g.y, 'guard down', '#e2664a'); creditKill(S, by); }
  }
}

export function damageAnimal(S, a, dmg, sx, sy, by) {
  if (a.dead) return;
  a.hp -= dmg; a.hit = 0.12;
  if (sx !== undefined) {
    const d = Math.max(1, dist(sx, sy, a.x, a.y));
    const kb = Math.min(16, dmg * 0.4);
    a.x += (a.x - sx) / d * kb; a.y += (a.y - sy) / d * kb;
  }
  a.foe = by || a.foe;
  a.aggro = a.aggro || 'hit';
  addFloat(S, a.x, a.y - a.r, '-' + Math.round(dmg), '#e8b06a');
  if (a.hp <= 0) {
    a.dead = true; a.respawnT = S.rng.rand(11, 18);
    burst(S, a.x, a.y, '#9e2b1e', 12, 200);
    const def = ANIMALS[a.type];
    if (def && def.loot) addLoot(S, a.x, a.y, def.loot[0], S.rng.randi(def.loot[1], def.loot[2]));
    addFloat(S, a.x, a.y, (def ? a.type : 'animal') + ' down', '#caa46a');
  }
}

export function damageBarrel(S, o, dmg, by) {
  o.hp -= dmg;
  if (o.hp > 0) { burst(S, o.x, o.y, '#d2664a', 3, 120); return; }
  burst(S, o.x, o.y, o.crate ? '#caa15f' : '#d2664a', 14, 230);
  if (o.tier === 'mon') {
    spillStack(S, o.x, o.y, 'scrap', S.rng.randi(o.crate ? 22 : 12, o.crate ? 42 : 26));
    addLoot(S, o.x, o.y, 'ammo', S.rng.randi(45, 85));
    o.respawnT = 82;
  } else if (o.tier === 'road') {
    spillStack(S, o.x, o.y, 'scrap', S.rng.randi(8, 16));
    addLoot(S, o.x, o.y, 'ammo', S.rng.randi(16, 34));
    o.respawnT = 22;
  } else {
    spillStack(S, o.x, o.y, 'scrap', S.rng.randi(3, 7));
    spillStack(S, o.x, o.y, 'metal', S.rng.randi(2, 5));
    o.respawnT = 22;
  }
  o.hp = 0;
}

// ---- struct chip from gunfire ----
function bulletHitStruct(S, b) {
  const gx = Math.floor(b.x / TILE), gy = Math.floor(b.y / TILE);
  const keys = [ekey('V', gx, gy), ekey('V', gx + 1, gy), ekey('H', gx, gy), ekey('H', gx, gy + 1), ekey('D', gx, gy)];
  for (const k of keys) {
    const w = S.walls.get(k);
    if (!w || w.hp <= 0 || (w.type === 'door' && w.open)) continue;
    const s = wallSegOf(k, w);
    if (segSeg(b.px, b.py, b.x, b.y, s[0], s[1], s[2], s[3]) || ptSeg(b.x, b.y, s[0], s[1], s[2], s[3]) < 10) {
      if (ownerOfWall(S, w) !== b.from) damageWall(S, k, Math.max(1, Math.round(b.dmg * 0.10)), b.from);
      return { kind: 'wall', key: k, w };
    }
  }
  const d = S.deploys.get(gkey(gx, gy));
  if (d && d.owner !== b.from) {
    const c = cellCenter(gx, gy);
    if (!wallBlocksView(S, b.px, b.py, c.x, c.y)) {
      const mul = d.type === 'cupboard' ? 0.05 : 0.25;
      damageDeploy(S, gkey(gx, gy), Math.max(1, Math.round(b.dmg * mul)), b.from);
    }
    return { kind: 'deploy', key: gkey(gx, gy), d };
  }
  return null;
}
const ownerOfWall = (S, w) => w.owner;

// surface normal for ricochet
function surfaceNormal(S, b, hit) {
  if (hit && hit.kind === 'wall') {
    const p = hit.key.split(',');
    if (p[0] === 'V') return { x: 1, y: 0 };
    if (p[0] === 'H') return { x: 0, y: 1 };
    const s = wallSegOf(hit.key, hit.w);
    const dx = s[2] - s[0], dy = s[3] - s[1];
    const l = Math.hypot(dx, dy);
    return { x: -dy / l, y: dx / l };
  }
  if (hit && hit.cx !== undefined) {
    const d = Math.max(1, dist(b.px, b.py, hit.cx, hit.cy));
    return { x: (b.px - hit.cx) / d, y: (b.py - hit.cy) / d };
  }
  return { x: 0, y: 1 };
}

function tryRicochet(S, b, hit, chance) {
  if (b.bounces >= 2 || !S.rng.chance(chance)) return false;
  let n = surfaceNormal(S, b, hit);
  // flip normal toward shooter side
  if (n.x * (b.px - b.x) + n.y * (b.py - b.y) < 0) { n.x = -n.x; n.y = -n.y; }
  const dot = b.vx * n.x + b.vy * n.y;
  let rvx = b.vx - 2 * dot * n.x, rvy = b.vy - 2 * dot * n.y;
  // scatter ±0.45 rad, but never back through the surface
  const sc = S.rng.rand(-0.45, 0.45);
  const cs = Math.cos(sc), sn = Math.sin(sc);
  const svx = rvx * cs - rvy * sn, svy = rvx * sn + rvy * cs;
  const sp = Math.hypot(svx, svy);
  if (svx * n.x + svy * n.y >= 0.05 * sp) { rvx = svx; rvy = svy; }
  b.vx = rvx * 0.6; b.vy = rvy * 0.6;
  b.x = b.px + n.x * 6; b.y = b.py + n.y * 6;
  b.dmg = Math.max(1, Math.round(b.dmg * 0.6));
  b.bounces++; b.ricochet = true; b.col = 'ricochet';
  burst(S, b.x, b.y, '#86d8ff', 4, 180);
  return true;
}

// ---- bullets ----
export function updateBullets(S, dt) {
  const p = S.player;
  for (let i = S.bullets.length - 1; i >= 0; i--) {
    const b = S.bullets[i];
    b.px = b.x; b.py = b.y;
    if (b.ricochet) {
      const f = Math.pow(0.3, dt);
      b.vx *= f; b.vy *= f;
      if (Math.hypot(b.vx, b.vy) < 150) { S.bullets.splice(i, 1); continue; }
    }
    b.x += b.vx * dt; b.y += b.vy * dt;
    b.dist += Math.hypot(b.vx, b.vy) * dt;
    b.life -= dt;
    if (b.life <= 0 || b.x < 0 || b.y < 0 || b.x > WORLD.w || b.y > WORLD.h || b.dist > 3400) { S.bullets.splice(i, 1); continue; }

    // 1. walls / solids / boulders
    let dead = false;
    let hitWall = null;
    eachWallNear(S, (b.px + b.x) / 2, (b.py + b.y) / 2, Math.abs(b.x - b.px) + Math.abs(b.y - b.py) + 12, (k, w) => {
      if (w.type === 'door' && w.open) return false;
      const s = wallSegOf(k, w);
      if (segSeg(b.px, b.py, b.x, b.y, s[0], s[1], s[2], s[3])) { hitWall = { kind: 'wall', key: k, w }; return true; }
    });
    if (!hitWall && isSolidAt(S, b.x, b.y) ) {
      const gx = Math.floor(b.x / TILE), gy = Math.floor(b.y / TILE);
      const d = S.deploys.get(gkey(gx, gy));
      if (!(d && d.type === 'turret' && d.owner === b.from)) { // shots pass own turrets
        const c = cellCenter(gx, gy);
        hitWall = { kind: 'solid', key: gkey(gx, gy), d, cx: c.x, cy: c.y };
      }
    }
    let hitBoulder = null;
    if (!hitWall) {
      for (const bd of S.world.boulders) {
        if (ptSeg(bd.x, bd.y, b.px, b.py, b.x, b.y) < bd.r) { hitBoulder = { cx: bd.x, cy: bd.y }; break; }
      }
    }
    if (hitWall || hitBoulder) {
      if (hitWall) bulletHitStruct(S, b);
      const chance = hitBoulder ? 0.8 : 0.15;
      if (!tryRicochet(S, b, hitWall || hitBoulder, chance)) {
        burst(S, b.px, b.py, '#bfb49a', 3, 110);
        S.bullets.splice(i, 1);
      }
      continue;
    }

    // 2. fences
    for (let f = S.fences.length - 1; f >= 0; f--) {
      const fe = S.fences[f];
      if (segSeg(b.px, b.py, b.x, b.y, fe.x0, fe.y0, fe.x1, fe.y1) || ptSeg(b.x, b.y, fe.x0, fe.y0, fe.x1, fe.y1) < 5) {
        damageFence(S, fe, b.dmg); dead = true; break;
      }
    }
    if (dead) { S.bullets.splice(i, 1); continue; }

    // 3. barrels
    for (const o of S.barrels) {
      if (o.hp <= 0) continue;
      if (dist2(b.x, b.y, o.x, o.y) < (o.r + 2) * (o.r + 2)) { damageBarrel(S, o, b.dmg, b.from); dead = true; break; }
    }
    if (dead) { S.bullets.splice(i, 1); continue; }

    // 4. patrol heli
    if (S.patrol && b.from !== 'patrol' && ptSeg(S.patrol.x, S.patrol.y, b.px, b.py, b.x, b.y) < 34) {
      S.patrol.hp -= b.dmg;
      burst(S, b.x, b.y, '#aab1b8', 2, 120);
      S.bullets.splice(i, 1); continue;
    }
    // 5. landed airdrop
    if (S.airdrop && S.airdrop.fall >= 1 && ptSeg(S.airdrop.x, S.airdrop.y, b.px, b.py, b.x, b.y) < 22) {
      S.airdrop.hp -= b.dmg;
      S.bullets.splice(i, 1); continue;
    }
    // 6. animals
    for (const a of S.animals) {
      if (a.dead) continue;
      if (ptSeg(a.x, a.y, b.px, b.py, b.x, b.y) < a.r + 2) { damageAnimal(S, a, b.dmg, b.px, b.py, b.from); dead = true; break; }
    }
    if (dead) { S.bullets.splice(i, 1); continue; }

    // 7. guards
    if (b.from !== 'guard') {
      for (const g of S.guards) {
        if (g.dead) continue;
        if (ptSeg(g.x, g.y, b.px, b.py, b.x, b.y) < GUARD.r + 2) {
          const head = segHitsHead(g.x, g.y, b);
          hurtGuard(S, g, b.dmg * (head ? HEADSHOT_MUL : 1), b.from);
          if (head && b.from === OWNER) addFloat(S, g.x, g.y - 14, 'headshot', '#ffe07a');
          dead = true; break;
        }
      }
    }
    if (dead) { S.bullets.splice(i, 1); continue; }

    // 8. bots
    for (const u of S.units) {
      if (u.dead || u.flying || u.eliminated || u.owner === b.from) continue;
      if (ptSeg(u.x, u.y, b.px, b.py, b.x, b.y) < 14) {
        const head = segHitsHead(u.x, u.y, b);
        let dmg = b.dmg * (head ? HEADSHOT_MUL : 1);
        dmg = botMitigate(u, dmg, head);
        let ax = b.px, ay = b.py;
        hurtBot(S, u, dmg, ax, ay, b.from);
        if (head && b.from === OWNER) addFloat(S, u.x, u.y - 14, 'headshot', '#ffe07a');
        dead = true; break;
      }
    }
    if (dead) { S.bullets.splice(i, 1); continue; }

    // 9. transports
    for (const tr of S.transports) {
      if (tr.destroyed || tr.owner === b.from) continue;
      if (ptSeg(tr.x, tr.y, b.px, b.py, b.x, b.y) < TRANSPORT.r + 2) {
        tr.hp -= b.dmg;
        if (tr.hp <= 0) tr.destroyed = true;
        dead = true; break;
      }
    }
    if (dead) { S.bullets.splice(i, 1); continue; }

    // 10. convoy
    for (const cv of S.convoys) {
      if (b.from === 'convoy') break;
      if (!cv.dead && ptSeg(cv.x, cv.y, b.px, b.py, b.x, b.y) < 26) { cv.hp -= b.dmg; dead = true; break; }
      for (const g of cv.guards) {
        if (g.dead) continue;
        if (ptSeg(g.x, g.y, b.px, b.py, b.x, b.y) < 14) {
          g.hp -= b.dmg;
          if (g.hp <= 0) { g.dead = true; addLoot(S, g.x, g.y, 'ammo', S.rng.randi(6, 12)); }
          dead = true; break;
        }
      }
      if (dead) break;
    }
    if (dead) { S.bullets.splice(i, 1); continue; }

    // 11. player
    if (b.from !== OWNER && !p.dead && !p.inCopter && !S.ghost) {
      if (ptSeg(p.x, p.y, b.px, b.py, b.x, b.y) < 18) {
        const head = segHitsHead(p.x, p.y, b);
        hurtPlayer(S, playerMitigate(S, b.dmg * (head ? HEADSHOT_MUL : 1), head), b.px, b.py, b.from);
        S.bullets.splice(i, 1); continue;
      }
    }
  }
}

export function damageFence(S, f, dmg) {
  f.hp -= dmg;
  if (f.hp <= 0) {
    burst(S, f.x, f.y, '#caa46a', 14, 200);
    S.fences.splice(S.fences.indexOf(f), 1);
    S.needFenceRefresh = true;
  } else burst(S, f.x, f.y, '#d8b888', 3, 120);
}

// ---- explosions ----
export function explode(S, x, y, w, from) {
  const R = w.splash, sd = w.splashDmg, st = w.structDmg || w.splashDmg;
  burst(S, x, y, '#ffb24a', 22, 320);
  burst(S, x, y, '#5a534a', 12, 200);
  S.flashes.push({ x, y, r: R, life: 0.25, max: 0.25 });
  S.scorch.push({ x, y, r: R * 0.66 });
  if (S.scorch.length > 36) S.scorch.shift();
  S.events.push({ type: 'explosion', x, y, r: R });
  S.shake = Math.max(S.shake, 16);

  const isExplosiveRaid = w === WEAPONS.rocket || w.structDmg === 50; // rocket or satchel
  if (isExplosiveRaid && from !== OWNER) {
    // player base alarm
    let nearPlayer = false;
    for (const [k, s] of S.structures) if (s.owner === OWNER) { const [gx, gy] = k.split(',').map(Number); const c = cellCenter(gx, gy); if (dist2(x, y, c.x, c.y) < (R + TILE) * (R + TILE)) { nearPlayer = true; break; } }
    if (nearPlayer) S.raidAlarm = { x, y, t: 1.5 };
  }
  if (isExplosiveRaid) {
    // minimap raid pulse for the raided owner
    const near = nearestOwnedStruct(S, x, y, R + TILE * 2);
    if (near && near !== from) markRaid(S, x, y, 'raid_' + near);
  }

  // structures (floors + solid cells)
  for (const [k, s] of [...S.structures]) {
    const [gx, gy] = k.split(',').map(Number);
    const c = cellCenter(gx, gy);
    const d = dist(x, y, c.x, c.y);
    if (d > R + 32 || s.owner === from) continue;
    damageStructure(S, k, st * (1 - d / (R + 32)));
  }
  // walls
  for (const [k, wl] of [...S.walls]) {
    if (wl.owner === from) continue;
    const s = wallSegOf(k, wl);
    const d = ptSeg(x, y, s[0], s[1], s[2], s[3]);
    if (d > R) continue;
    damageWall(S, k, st * (1 - d / R), from);
  }
  // deploys — LOS-gated (a wall between blast and deploy shields it)
  for (const [k, dp] of [...S.deploys]) {
    if (dp.owner === from) continue;
    const [gx, gy] = k.split(',').map(Number);
    const c = cellCenter(gx, gy);
    const d = dist(x, y, c.x, c.y);
    if (d > R + 25.6) continue;
    if (wallBlocksView(S, x, y, c.x, c.y)) continue;
    damageDeploy(S, k, sd * (1 - d / (R + 25.6)), from);
  }
  // animals / guards / convoy / barrels / fences
  for (const a of S.animals) {
    if (a.dead) continue;
    const d = dist(x, y, a.x, a.y);
    if (d < R + a.r) { damageAnimal(S, a, sd * (1 - d / (R + a.r)), x, y, from); }
  }
  for (const g of S.guards) {
    if (g.dead) continue;
    const d = dist(x, y, g.x, g.y);
    if (d < R + 14) hurtGuard(S, g, sd * (1 - d / (R + 14)), from);
  }
  for (const cv of S.convoys) {
    const d = dist(x, y, cv.x, cv.y);
    if (!cv.dead && d < R + 26) cv.hp -= sd * 1.5 * (1 - d / (R + 26));
    for (const g of cv.guards) {
      if (g.dead) continue;
      const gd = dist(x, y, g.x, g.y);
      if (gd < R + 14) { g.hp -= sd * (1 - gd / (R + 14)); if (g.hp <= 0) { g.dead = true; addLoot(S, g.x, g.y, 'ammo', S.rng.randi(6, 12)); } }
    }
  }
  for (const o of S.barrels) {
    if (o.hp <= 0) continue;
    const d = dist(x, y, o.x, o.y);
    if (d < R + o.r) damageBarrel(S, o, sd * (1 - d / (R + o.r)), from);
  }
  for (let i = S.fences.length - 1; i >= 0; i--) {
    const f = S.fences[i];
    const d = dist(x, y, f.x, f.y);
    if (d < R + 23) damageFence(S, f, sd * (1 - d / (R + 23)));
  }
  // player (self-splash 45%)
  const p = S.player;
  if (!p.dead && !p.inCopter) {
    const d = dist(x, y, p.x, p.y);
    if (d < R + 16) {
      const fall = 1 - d / (R + 16);
      if (from === OWNER) { if (!S.ghost) { p.health -= Math.round(sd * 0.45 * fall); p.regenDelay = 4.5; p.hurt = 0.28; if (p.health <= 0) playerDie(S); } }
      else hurtPlayer(S, Math.round(sd * 0.45 * fall), x, y, from);
    }
  }
  // bots
  for (const u of S.units) {
    if (u.dead || u.eliminated || u.owner === from) continue;
    const d = dist(x, y, u.x, u.y);
    if (d < R + 14) hurtBot(S, u, sd * 0.8 * (1 - d / (R + 14)), x, y, from);
  }
  // copters
  const hitCop = (c, ownerId, isPlayer) => {
    if (!c || c.destroyed || ownerId === from) return;
    const d = dist(x, y, c.x, c.y);
    if (d < R + 30) hurtCopter(S, c, sd * (1 - d / (R + 30)), isPlayer);
  };
  hitCop(S.copter, OWNER, true);
  for (const u of S.units) hitCop(u.copter, u.owner, false, u);
  // transports
  for (const tr of S.transports) {
    if (tr.destroyed || tr.owner === from) continue;
    const d = dist(x, y, tr.x, tr.y);
    if (d < R + TRANSPORT.r) { tr.hp -= sd * (1 - d / (R + TRANSPORT.r)); if (tr.hp <= 0) tr.destroyed = true; }
  }
  // fires: 25% from rockets
  if (w.rocket && S.rng.chance(0.25)) spawnFire(S, x, y);
  // patrol heli
  if (S.patrol) {
    const d = dist(x, y, S.patrol.x, S.patrol.y);
    if (d < R + 34) S.patrol.hp -= sd * (1 - d / (R + 34));
  }
}

function nearestOwnedStruct(S, x, y, r) {
  for (const [k, s] of S.structures) {
    const [gx, gy] = k.split(',').map(Number);
    const c = cellCenter(gx, gy);
    if (dist2(x, y, c.x, c.y) < r * r) return s.owner;
  }
  for (const [k, w] of S.walls) {
    const s = wallSegOf(k, w);
    if (ptSeg(x, y, s[0], s[1], s[2], s[3]) < r) return w.owner;
  }
  return null;
}

export function hurtCopter(S, c, dmg, isPlayer, ownerUnit) {
  c.hp -= dmg;
  if (c.hp > 0 || c.destroyed) return;
  c.destroyed = true;
  vehicleWreck(S, c.x, c.y);
  if (isPlayer && S.player.inCopter) { S.player.inCopter = false; S.player.health = 0; playerDie(S); }
}

export function vehicleWreck(S, x, y) {
  burst(S, x, y, '#ffb24a', 30, 340);
  burst(S, x, y, '#5a534a', 18, 240);
  S.flashes.push({ x, y, r: 96, life: 0.25, max: 0.25 });
  S.scorch.push({ x, y, r: 52 });
  if (S.scorch.length > 36) S.scorch.shift();
  S.wrecks.push({ x, y, t: 15 });
  if (S.wrecks.length > 24) S.wrecks.shift();
  S.shake = Math.max(S.shake, 15);
  S.events.push({ type: 'explosion', x, y, r: 96 });
}

// ---- fires ----
export function spawnFire(S, x, y) {
  if (S.fires.length >= 80) return;
  S.fires.push({ x, y, r: 36, life: 30, max: 30, dmgT: 0, spread: 0, spreadT: S.rng.rand(3, 7) });
}

export function updateFires(S, dt) {
  for (let i = S.fires.length - 1; i >= 0; i--) {
    const f = S.fires[i];
    f.life -= dt;
    if (f.life <= 0) { S.fires.splice(i, 1); continue; }
    f.dmgT -= dt;
    if (f.dmgT <= 0) {
      f.dmgT = 0.3;
      for (const [k, s] of [...S.structures]) {
        const [gx, gy] = k.split(',').map(Number);
        const c = cellCenter(gx, gy);
        if (dist2(f.x, f.y, c.x, c.y) < f.r * f.r) damageStructure(S, k, 22 * 0.3);
      }
      for (const [k, w] of [...S.walls]) {
        const s = wallSegOf(k, w);
        if (ptSeg(f.x, f.y, s[0], s[1], s[2], s[3]) < f.r) damageWall(S, k, 18 * 0.3, 'fire');
      }
      const p = S.player;
      if (!p.dead && dist2(f.x, f.y, p.x, p.y) < (f.r + 16) * (f.r + 16)) hurtPlayer(S, 15 * 0.3, undefined, undefined, 'fire');
      for (const u of S.units) {
        if (u.dead || u.eliminated) continue;
        if (dist2(f.x, f.y, u.x, u.y) < (f.r + 12) * (f.r + 12)) hurtBot(S, u, 15 * 0.3);
      }
    }
    f.spreadT -= dt;
    if (f.spreadT <= 0 && f.spread < 3) {
      f.spreadT = S.rng.rand(4, 8);
      if (S.rng.chance(0.25)) {
        let best = null, bd = (f.r + TILE) * (f.r + TILE);
        for (const [k, s] of S.structures) {
          const [gx, gy] = k.split(',').map(Number);
          const c = cellCenter(gx, gy);
          const dd = dist2(f.x, f.y, c.x, c.y);
          if (dd < bd && !wallBlocksView(S, f.x, f.y, c.x, c.y)) { bd = dd; best = c; }
        }
        if (best) { spawnFire(S, best.x, best.y); f.spread++; }
      }
    }
    if (S.rng.chance(0.3)) S.particles.push({ x: f.x + S.rng.rand(-10, 10), y: f.y + S.rng.rand(-10, 10), vx: S.wind * 8, vy: -S.rng.rand(20, 50), life: S.rng.rand(0.6, 1.4), max: 1.4, r: S.rng.rand(2, 5), col: 'rgba(60,56,50,0.5)' });
  }
}

// ---- satchels / grenades / rockets ----
export function updateSatchels(S, dt) {
  for (let i = S.satchels.length - 1; i >= 0; i--) {
    const s = S.satchels[i];
    s.t -= dt;
    if (s.t <= 0) { S.satchels.splice(i, 1); explode(S, s.x, s.y, { splash: 88, splashDmg: 120, structDmg: 50 }, s.from); }
  }
}

export function updateGrenades(S, dt) {
  for (let i = S.grenades.length - 1; i >= 0; i--) {
    const g = S.grenades[i];
    const px = g.x, py = g.y;
    const f = Math.pow(0.9, dt * 60);
    g.vx *= f; g.vy *= f;
    g.x = clamp(g.x + g.vx * dt, 8, WORLD.w - 8);
    g.y = clamp(g.y + g.vy * dt, 8, WORLD.h - 8);
    g.bob += dt; g.t -= dt;
    if (wallBlocksView(S, px, py, g.x, g.y)) { g.x = px; g.y = py; g.t = 0; }
    if (g.t <= 0) { S.grenades.splice(i, 1); explode(S, g.x, g.y, GRENADE, g.from); }
  }
}

export function updateRockets(S, dt) {
  for (let i = S.rockets.length - 1; i >= 0; i--) {
    const r = S.rockets[i];
    const px = r.x, py = r.y;
    r.x += r.vx * dt; r.y += r.vy * dt;
    r.life -= dt;
    r.smoke -= dt;
    if (r.smoke <= 0) {
      r.smoke = 0.016;
      S.particles.push({ x: r.x, y: r.y, vx: S.rng.rand(-12, 12), vy: S.rng.rand(-12, 12), life: 0.5, max: 0.5, r: S.rng.rand(2, 4), col: 'rgba(120,114,104,0.5)' });
    }
    let boom = r.life <= 0 || r.x < 4 || r.y < 4 || r.x > WORLD.w - 4 || r.y > WORLD.h - 4;
    if (!boom && (isSolidAt(S, r.x, r.y) || boulderBlocks(S, r.x, r.y, 2))) boom = true;
    if (!boom && wallBlocksView(S, px, py, r.x, r.y)) { boom = true; r.x = px; r.y = py; }
    if (!boom) for (const a of S.animals) { if (!a.dead && dist2(r.x, r.y, a.x, a.y) < (a.r + 3) * (a.r + 3)) { boom = true; break; } }
    if (!boom) for (const o of S.barrels) { if (o.hp > 0 && dist2(r.x, r.y, o.x, o.y) < (o.r + 3) * (o.r + 3)) { boom = true; break; } }
    if (!boom) {
      const hitCop = (c, owner) => c && !c.destroyed && owner !== r.from && dist2(r.x, r.y, c.x, c.y) < (30 + 3) * (30 + 3);
      if (hitCop(S.copter, OWNER)) boom = true;
      if (!boom) for (const u of S.units) if (hitCop(u.copter, u.owner)) { boom = true; break; }
    }
    if (boom) { S.rockets.splice(i, 1); explode(S, r.x, r.y, r.w, r.from); }
  }
}

// ---- turrets ----
export function updateTurrets(S, dt) {
  for (const [k, d] of S.deploys) {
    if (d.type !== 'turret') continue;
    const [gx, gy] = k.split(',').map(Number);
    const c = cellCenter(gx, gy);
    const tt = TTIER[d.tier || 1];
    // owner's TC must stand
    if (S.tick % 30 === 0) d.tcOk = ownerHasTC(S, d.owner);
    if (d.tcOk === false) continue;
    d.cd = Math.max(0, (d.cd || 0) - dt);
    if (d.reload > 0) { d.reload -= dt; if (d.reload <= 0) d.mag = tt.mag; }
    // target — full (LOS) reacquire on a 0.12 s cadence; cheap revalidate between
    d.targT = (d.targT || 0) - dt;
    let best = d.tgt || null;
    if (best) {
      const ref = best.ref;
      const gone = !ref || ref.dead || ref.flying || ref.eliminated || (ref === S.player && (S.ghost || ref.inCopter));
      if (gone || dist2(c.x, c.y, ref.x, ref.y) > tt.range * tt.range * 1.2) { best = null; d.tgt = null; }
      else { best.x = ref.x; best.y = ref.y; best.vx = ref.vx || 0; best.vy = ref.vy || 0; }
    }
    if (d.targT <= 0) {
      d.targT = 0.12;
      let bd = tt.range * tt.range;
      best = null;
      const consider = (x, y, vx, vy, ref) => {
        const dd = dist2(c.x, c.y, x, y);
        if (dd < bd && !wallBlocksViewFor(S, d.owner, c.x, c.y, x, y)) { bd = dd; best = { x, y, vx: vx || 0, vy: vy || 0, ref }; }
      };
      for (const a of S.animals) if (!a.dead && dist2(c.x, c.y, a.x, a.y) < bd) consider(a.x, a.y, a.vx, a.vy, a);
      for (const u of S.units) if (!u.dead && !u.flying && !u.eliminated && u.owner !== d.owner) consider(u.x, u.y, u.vx, u.vy, u);
      const p = S.player;
      if (d.owner !== OWNER && !p.dead && !p.inCopter && !S.ghost) consider(p.x, p.y, p.vx, p.vy, p);
      d.tgt = best;
    }
    if (best) {
      const dd = dist(c.x, c.y, best.x, best.y);
      const lead = Math.min(0.45, dd / tt.speed) * tt.lead;
      const aim = Math.atan2(best.y + best.vy * lead - c.y, best.x + best.vx * lead - c.x);
      const slew = (d.tier === 3 ? 16 : 10) * dt;
      d.angle = turnTo(d.angle, aim, slew);
      if (Math.abs(angD(d.angle, aim)) < 0.22 && d.cd <= 0 && d.reload <= 0) {
        if (d.mag <= 0) { d.reload = tt.reload; }
        else {
          d.mag--; d.cd = tt.rof;
          const a2 = d.angle + S.rng.rand(-tt.spread, tt.spread);
          spawnBullet(S, { x: c.x + Math.cos(d.angle) * TURRET_MUZZLE, y: c.y + Math.sin(d.angle) * TURRET_MUZZLE, angle: a2, speed: tt.speed, dmg: tt.dmg, from: d.owner, life: tt.range / tt.speed + 0.1, turret: true });
          S.events.push({ type: 'turretFire', x: c.x, y: c.y, a: d.angle });
        }
      }
    } else {
      // track nearest within 2.2× range (cadenced), else idle outward scan
      if (S.tick % 18 === 0 || d.trk === undefined) {
        let trk = null, td = (tt.range * 2.2) ** 2;
        for (const u of S.units) if (!u.dead && !u.eliminated && u.owner !== d.owner) { const dd = dist2(c.x, c.y, u.x, u.y); if (dd < td) { td = dd; trk = u; } }
        d.trk = trk;
      }
      const trk = d.trk && !d.trk.dead ? d.trk : null;
      if (trk) d.angle = turnTo(d.angle, Math.atan2(trk.y - c.y, trk.x - c.x), 5 * dt);
      else {
        d.scanT -= dt;
        if (d.scanT <= 0) {
          d.scanT = S.rng.rand(2.5, 6.5);
          const tc = nearestTC(S, d.owner, c.x, c.y);
          const outward = tc ? Math.atan2(c.y - tc.y, c.x - tc.x) : S.rng.rand(0, TAU);
          d.scanAim = outward + S.rng.rand(-1.1, 1.1);
        }
        if (d.scanAim !== undefined) d.angle = turnTo(d.angle, d.scanAim, 1.6 * dt);
      }
    }
  }
}

function ownerHasTC(S, owner) {
  for (const d of S.deploys.values()) if (d.type === 'cupboard' && d.owner === owner) return true;
  return false;
}
function nearestTC(S, owner, x, y) {
  let best = null, bd = 1e18;
  for (const [k, d] of S.deploys) {
    if (d.type !== 'cupboard' || d.owner !== owner) continue;
    const [gx, gy] = k.split(',').map(Number);
    const c = cellCenter(gx, gy);
    const dd = dist2(x, y, c.x, c.y);
    if (dd < bd) { bd = dd; best = c; }
  }
  return best;
}
export function wallBlocksViewFor(S, owner, x0, y0, x1, y1) {
  // own walls don't block own turret view
  const minx = Math.min(x0, x1), maxx = Math.max(x0, x1);
  let blocked = false;
  eachWallNearSeg(S, x0, y0, x1, y1, (k, w) => {
    if (w.owner === owner) return false;
    if (w.type === 'door' && w.open) return false;
    const s = wallSegOf(k, w);
    if (segSeg(x0, y0, x1, y1, s[0], s[1], s[2], s[3])) { blocked = true; return true; }
  });
  return blocked;
}
function eachWallNearSeg(S, x0, y0, x1, y1, fn) {
  const len = Math.hypot(x1 - x0, y1 - y0);
  const steps = Math.max(1, Math.ceil(len / (TILE * 0.5)));
  const seen = new Set();
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const gx = Math.floor((x0 + (x1 - x0) * t) / TILE), gy = Math.floor((y0 + (y1 - y0) * t) / TILE);
    const id = gx * 10007 + gy;
    if (seen.has(id)) continue;
    seen.add(id);
    for (const k of [ekey('V', gx, gy), ekey('V', gx + 1, gy), ekey('H', gx, gy), ekey('H', gx, gy + 1), ekey('D', gx, gy)]) {
      const w = S.walls.get(k);
      if (w && w.hp > 0) { if (fn(k, w) === true) return; }
    }
  }
}
const turnTo = (a, b, step) => {
  const d = angD(a, b);
  if (Math.abs(d) <= step) return b;
  return a + Math.sign(d) * step;
};
const angD = (a, b) => {
  let d = (b - a) % TAU;
  if (d > Math.PI) d -= TAU;
  if (d < -Math.PI) d += TAU;
  return d;
};

// ---- loot ----
export function updateLoot(S, dt) {
  const p = S.player;
  for (let i = S.loot.length - 1; i >= 0; i--) {
    const L = S.loot[i];
    L.life += dt; L.bob += dt;
    const f = Math.pow(0.88, dt * 60);
    L.vx *= f; L.vy *= f;
    L.x += L.vx * dt; L.y += L.vy * dt;
    // player magnet
    if (!p.dead && !p.inCopter && !S.ghost && L.life > 0.35) {
      const d = dist(p.x, p.y, L.x, L.y);
      if (d < 150) {
        L.x += (p.x - L.x) / d * 210 * dt; L.y += (p.y - L.y) / d * 210 * dt;
        if (d < 20) { collectPlayer(S, L); S.loot.splice(i, 1); continue; }
      }
    }
    // bot magnet
    if (L.life > 0.3) {
      let bu = null, bd2 = 180 * 180;
      for (const u of S.units) {
        if (u.dead || u.eliminated || u.flying) continue;
        const dd = dist2(u.x, u.y, L.x, L.y);
        if (dd < bd2) { bd2 = dd; bu = u; }
      }
      if (bu) {
        const d = Math.sqrt(bd2) || 1;
        L.x += (bu.x - L.x) / d * 240 * dt; L.y += (bu.y - L.y) / d * 240 * dt;
        if (d < 22) { collectBot(S, bu, L); S.loot.splice(i, 1); continue; }
      }
    }
    if (L.life > 120) S.loot.splice(i, 1);
  }
}

function collectPlayer(S, L) {
  const w = S.weapons;
  const p = S.player;
  if (L.kind === 'ammo') {
    w.rifle.reserve += L.amt; w.pistol.reserve += Math.ceil(L.amt * 0.4); w.shotgun.reserve += Math.ceil(L.amt * 0.3);
    addFloat(S, p.x, p.y - 20, '+' + L.amt + ' ammo', '#ffe08a');
  } else if (L.kind === 'rocket') {
    w.rocket.reserve += L.amt;
    addFloat(S, p.x, p.y - 20, '+' + L.amt + ' rocket', '#ff9a5a');
  } else if (L.kind === 'satchel') {
    S.inv.scrap += L.amt * 8;
    addFloat(S, p.x, p.y - 20, '+' + (L.amt * 8) + ' scrap', '#d6dce0');
  } else if (L.kind === 'sniper') {
    S.owned.sniper = true; w.sniper.reserve += 12;
    addFloat(S, p.x, p.y - 20, 'SNIPER unlocked!', '#bfe3ff');
  } else if (L.kind === 'gun') {
    if (L.gun && S.owned[L.gun] !== undefined) {
      S.owned[L.gun] = true; w[L.gun].reserve += L.gun === 'hmg' ? 60 : 30;
      addFloat(S, p.x, p.y - 20, '+' + L.gun.toUpperCase(), '#bfe3ff');
    }
  } else {
    S.inv[L.kind] = (S.inv[L.kind] || 0) + L.amt;
    const KC = { wood: '#b98446', stone: '#aab1b8', metal: '#e8a24e', scrap: '#d6dce0' };
    addFloat(S, p.x, p.y - 20, '+' + L.amt + ' ' + L.kind, KC[L.kind] || '#d8e0c2');
  }
}

function collectBot(S, u, L) {
  if (L.kind === 'scrap') u.scrap += L.amt;
  else if (L.kind === 'rocket') u.rockets += L.amt;
  else if (L.kind === 'satchel') u.satchels += L.amt;
  else if (L.kind === 'ammo') u.scrap += Math.ceil(L.amt / 8);
  else if (L.kind === 'sniper') u.scrap += 30;
  else if (L.kind === 'gun') {
    const rank = { pistol: 1, shotgun: 2, rifle: 3, hmg: 4 };
    if ((rank[L.gun] || 0) > (rank[u.gun] || 0)) u.gun = L.gun; else u.scrap += 10;
  } else u.inv[L.kind] = (u.inv[L.kind] || 0) + L.amt;
}

export function updateWrecks(S, dt) {
  for (let i = S.wrecks.length - 1; i >= 0; i--) {
    const w = S.wrecks[i];
    w.t -= dt;
    if (w.t <= 0) { S.wrecks.splice(i, 1); continue; }
    if (S.rng.chance(0.25)) S.particles.push({ x: w.x + S.rng.rand(-12, 12), y: w.y + S.rng.rand(-8, 8), vx: S.wind * 10, vy: -S.rng.rand(24, 60), life: S.rng.rand(0.7, 1.6), max: 1.6, r: S.rng.rand(2.5, 6), col: 'rgba(50,46,44,0.55)' });
  }
}
