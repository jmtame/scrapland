// v2 verification suite: world-gen invariants, combat micro-scenarios, and a
// timed match with behavior bars (anti-stuck, economy, no wall-phasing).
// Usage: node tests-v2/verify.js [seed] [matchMinutes]
import { createSim, step } from '../src/sim/sim.js';
import { WEAPONS, tierHp, BUILD, WORLD, SAFE_R, TILE, AI } from '../src/sim/config.js';
import { spawnBullet, updateBullets, explode } from '../src/sim/combat.js';
import { damageWall, sealWall, repairWall, foundBase } from '../src/sim/building.js';
import { spawnAirdrop, updateRespawns } from '../src/sim/worldevents.js';
import { segHitsHead, wallBlocksView } from '../src/sim/physics.js';
import { armorReduce } from '../src/sim/config.js';

const seed = +process.argv[2] || 42;
const matchMin = +process.argv[3] || 8;

let pass = 0, fail = 0;
const t = (name, ok, detail) => {
  if (ok) { pass++; console.log('PASS', name); }
  else { fail++; console.log('FAIL', name, detail !== undefined ? '[' + detail + ']' : ''); }
};

// ---------- A. world generation ----------
{
  const S = createSim(seed);
  t('biome bands: west desert, east winter', S.world.biomeAt(0.1 * WORLD.w, 4000) === 'desert' && S.world.biomeAt(0.9 * WORLD.w, 4000) === 'winter');
  let cross = false;
  const rails = S.world.rails;
  for (let i = 0; i < rails.length; i++) for (let j = i + 1; j < rails.length; j++) {
    for (let a = 0; a < rails[i].pts.length - 1 && !cross; a++) for (let b = 0; b < rails[j].pts.length - 1; b++) {
      const A = rails[i].pts[a], A2 = rails[i].pts[a + 1], B = rails[j].pts[b], B2 = rails[j].pts[b + 1];
      const d1 = (A2.x - A.x) * (B.y - A.y) - (A2.y - A.y) * (B.x - A.x);
      const d2 = (A2.x - A.x) * (B2.y - A.y) - (A2.y - A.y) * (B2.x - A.x);
      const d3 = (B2.x - B.x) * (A.y - B.y) - (B2.y - B.y) * (A.x - B.x);
      const d4 = (B2.x - B.x) * (A2.y - B.y) - (B2.y - B.y) * (A2.x - B.x);
      if (d1 * d2 < 0 && d3 * d4 < 0) { cross = true; break; }
    }
  }
  t('rails never cross', !cross);
  t('every road has fade[]', S.world.roads.every(r => Array.isArray(r.fade) && r.fade.length === r.pts.length));
  t('quarry monument exists + state', S.world.monuments.some(m => m.type === 'quarry') && !!S.quarry);
  t('boulders only jungle/winter', S.world.boulders.every(b => S.world.biomeAt(b.x, b.y) !== 'desert'));
  t('teams spawned unfounded', S.teams.length >= 5 && S.units.every(u => u.unfounded));
  t('monument crates+barrels+guards', S.barrels.filter(b => b.tier === 'mon').length >= 16 && S.guards.length === 10);
  {
    // convoy uses a random dirt road: spawn one and check its span is on land
    const { spawnConvoy } = await import('../src/sim/vehicles.js');
    spawnConvoy(S);
    const cv = S.convoys[0];
    t('convoy spawns on a dirt road, fully on land', !!cv && cv.pts.length >= 10 && cv.pts.every(p => S.world.landFactor(p.x, p.y) > 0), cv ? cv.pts.length + ' pts' : 'none');
    S.convoys.length = 0;
  }
  // airdrops never in safe zone
  let safeDrops = 0;
  for (let i = 0; i < 40; i++) {
    S.plane = null; S.airdrop = null;
    spawnAirdrop(S);
    const d = Math.hypot(S.plane.dropX - S.world.shop.x, S.plane.dropY - S.world.shop.y);
    if (d < SAFE_R + 160) safeDrops++;
  }
  t('40 airdrops: none near safe zone', safeDrops === 0, safeDrops);
}

// ---------- B. tables / math ----------
{
  t('HMG vs rifle: faster rof, more dmg, more spread', WEAPONS.hmg.rof < WEAPONS.rifle.rof && WEAPONS.hmg.dmg > WEAPONS.rifle.dmg && WEAPONS.hmg.spread > WEAPONS.rifle.spread);
  t('wall tier HP 100/250/400/800', tierHp(BUILD.wall, 'wood') === 100 && tierHp(BUILD.wall, 'stone') === 250 && tierHp(BUILD.wall, 'metal') === 400 && tierHp(BUILD.wall, 'armored') === 800);
  t('door tier HP 50/75/100/200', tierHp(BUILD.door, 'wood') === 50 && tierHp(BUILD.door, 'stone') === 75 && tierHp(BUILD.door, 'metal') === 100 && tierHp(BUILD.door, 'armored') === 200);
  t('armor reductions', armorReduce(3, 'head') === 0.62 && armorReduce(3, 'body') === 0.50 && armorReduce(1, 'head') === 0.25);
  t('headshot segment test', segHitsHead(100, 100, { px: 0, py: 100, x: 200, y: 100 }) && !segHitsHead(100, 100, { px: 0, py: 120, x: 200, y: 120 }));
}

// ---------- C. micro-scenarios ----------
{
  const S = createSim(seed + 1);
  // node respawn at 29 s (through the real updater)
  const n = S.resources[0];
  n.amount = 0; n.regen = 0;
  for (let i = 0; i < Math.round(28.1 * 60); i++) updateRespawns(S, 1 / 60);
  t('node still empty at 28.1 s', n.amount === 0);
  for (let i = 0; i < Math.round(1.5 * 60); i++) updateRespawns(S, 1 / 60);
  t('node full after 29 s', n.amount === n.max);

  // ricochet wall-safety: force every roll, fire into a wall, bullet must not cross
  const S2 = createSim(seed + 2);
  S2.rng.chance = () => true; // every ricochet roll succeeds
  const wallKey = 'V,100,70';
  S2.walls.set(wallKey, { type: 'wall', mat: 'metal', hp: 400, max: 400, owner: 'e9', hitT: -100, open: false });
  S2.structures.set('99,70', { type: 'floor', mat: 'wood', hp: 100, max: 100, owner: 'e9', hitT: -100 });
  S2.nav.stamp++;
  let crossed = false, ricocheted = false;
  spawnBullet(S2, { x: 100 * 64 - 80, y: 70 * 64 + 32, angle: 0, speed: 1500, dmg: 11, from: 'p1', life: 1.6 });
  for (let i = 0; i < 90; i++) {
    updateBullets(S2, 1 / 60);
    for (const b of S2.bullets) {
      if (b.ricochet) ricocheted = true;
      if (b.x > 100 * 64 + 6) crossed = true;
    }
    if (!S2.bullets.length) break;
  }
  t('forced ricochet bounces and never crosses the wall', ricocheted && !crossed, `ric=${ricocheted} crossed=${crossed}`);

  // explosion LOS gating: wall shields the TC
  const S3 = createSim(seed + 3);
  const tcKey = '120,80';
  S3.structures.set(tcKey, { type: 'floor', mat: 'wood', hp: 100, max: 100, owner: 'e8', hitT: -100 });
  S3.deploys.set(tcKey, { type: 'cupboard', mat: 'wood', hp: 300, max: 300, owner: 'e8', hitT: -100, store: { wood: 0, stone: 0, metal: 0, scrap: 0 }, lock: { by: 'e8' } });
  S3.walls.set('V,120,80', { type: 'wall', mat: 'wood', hp: 100, max: 100, owner: 'e8', hitT: -100, open: false });
  const bx = 120 * 64 - 40, by = 80 * 64 + 32; // just west of the wall
  explode(S3, bx, by, { splash: 88, splashDmg: 120, structDmg: 50 }, 'p1');
  const hpAfterShielded = S3.deploys.get(tcKey) ? S3.deploys.get(tcKey).hp : 0;
  t('satchel behind wall: TC shielded', hpAfterShielded === 300, hpAfterShielded);
  S3.walls.delete('V,120,80');
  explode(S3, bx, by, { splash: 88, splashDmg: 120, structDmg: 50 }, 'p1');
  const tcAfter = S3.deploys.get(tcKey);
  t('same blast with wall gone: TC damaged', !tcAfter || tcAfter.hp < 300);

  // repair locks
  const S4 = createSim(seed + 4);
  const team = S4.teams[0];
  const rec = foundBase(S4, team, 100 * 64, 100 * 64);
  const wk = [...S4.walls.keys()].find(k => S4.walls.get(k).owner === team.owner && S4.walls.get(k).type === 'wall');
  const w = S4.walls.get(wk);
  w.hp = w.max * 0.4; w.hitT = S4.t;
  const stores = [{ wood: 999, stone: 999, metal: 999 }];
  t('repair blocked inside 10 s hit-lock', repairWall(S4, team, wk, stores) === false);
  S4.t += 11; w.hitT = S4.t - 11;
  t('repair works after lock', repairWall(S4, team, wk, stores) === true);
  // breach seal lock (30 s)
  damageWall(S4, wk, 9999, 'p1');
  t('destroyed wall stamps breach lock', S4.breachT[wk] !== undefined);
  t('seal blocked inside 30 s breach-lock', sealWall(S4, team, wk, stores) === false);
  S4.t += 31;
  t('seal works after breach lock', sealWall(S4, team, wk, stores) === true);
}

// ---------- D. match behavior bars ----------
{
  const S = createSim(seed);
  const t0 = Date.now();
  let peak = { v: 0, s: '' };
  let foundedBy = null;
  for (let i = 0; i < 60 * 60 * matchMin; i++) {
    step(S);
    if (i % 30 === 0) {
      for (const u of S.units) {
        if (!u.dead && !u.eliminated && u.state !== 'raid' && u.stuckT > peak.v) peak = { v: u.stuckT, s: u.state + '/' + u.act };
      }
      if (!foundedBy && S.teams.every(tm => tm.bases.length > 0)) foundedBy = S.t;
    }
  }
  const m = S.metrics;
  const wall = ((Date.now() - t0) / 1000).toFixed(0);
  console.log(`-- match ${matchMin} min (seed ${seed}) in ${wall}s --`);
  t('all teams founded < 3 min', foundedBy !== null && foundedBy < 180, foundedBy && foundedBy.toFixed(0) + 's');
  t('peak non-raid stuck < 30 s', peak.v < 30, peak.v.toFixed(1) + 's ' + peak.s);
  t('no wall phasing', m.wallPhase === 0, m.wallPhase);
  t('no NaN positions', !m.nan, m.nan);
  t('no hard-unstick teleports', m.hardUnstick === 0, m.hardUnstick);
  t('door cuts are rare (< 12)', (m.doorCuts || 0) < 12, m.doorCuts || 0);
  t('raids happen', m.raidsLaunched > 0, m.raidsLaunched);
  t('economy active: gather+toNode > 25% of act time', (() => {
    const total = Object.values(m.act).reduce((a, b) => a + b, 0);
    return ((m.act.gather || 0) + (m.act.toNode || 0)) / total > 0.25;
  })());
  t('roam (idle) share < 4%', (() => {
    const total = Object.values(m.act).reduce((a, b) => a + b, 0);
    return (m.act.roam || 0) / total < 0.04;
  })(), ((m.act.roam || 0) / Object.values(m.act).reduce((a, b) => a + b, 0) * 100).toFixed(1) + '%');
  const hard = S.teams.filter(tm => tm.hard && !tm.eliminated);
  if (hard.length && matchMin >= 8) {
    const counts = hard.map(tm => S.units.filter(u => u.owner === tm.owner && !u.eliminated).length);
    t('hard team hiring works (≥ 10 units by ' + matchMin + ' min)', Math.max(...counts) >= 10, counts.join(','));
  }
  // no unit trapped in a fully sealed cell of its OWN base at end
  // (enemy raiders sealed in mid-raid are legitimate — they breach back out)
  let trapped = 0;
  for (const u of S.units) {
    if (u.dead || u.eliminated) continue;
    const gx = Math.floor(u.x / TILE), gy = Math.floor(u.y / TILE);
    const st = S.structures.get(gx + ',' + gy);
    if (!st || st.owner !== u.owner) continue;
    let openings = 0;
    for (const k of ['V,' + gx + ',' + gy, 'V,' + (gx + 1) + ',' + gy, 'H,' + gx + ',' + gy, 'H,' + gx + ',' + (gy + 1)]) {
      const w2 = S.walls.get(k);
      if (!w2 || w2.hp <= 0 || w2.type === 'door') openings++;
    }
    if (openings === 0) trapped++;
  }
  t('no unit sealed inside its own base', trapped === 0, trapped);
}

console.log(`\n${pass}/${pass + fail} passed`);
process.exit(fail ? 1 : 0);
