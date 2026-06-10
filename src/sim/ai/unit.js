// Per-unit AI: committed-task FSM. States: gather / defend / raid / return /
// trade (+ founding). Movement goes through move.goto (pathfinding + watchdog);
// task logic here only decides WHERE to go and WHAT to do on arrival.
import { TILE, WORLD, AI, OWNER, SAFE_R, COPTER, TRANSPORT, GRENADE, WEAPONS, CLAIM_R } from '../config.js';
import { TAU, clamp, dist, dist2 } from '../util.js';
import { inSafeZone, wallBlocksView, boulderLine, blocked } from '../physics.js';
import { goto as gotoPt, separate, faceToward, clearPath, angShort } from './move.js';
import { spawnBullet, hurtBot, explode, spawnRocket } from '../combat.js';
import { addFloat, teamOf, spillStack } from '../state.js';
import { tcOf, cellCenter, findBreach, sealWall, worstDamagedWall, repairWall, destroyDeploy } from '../building.js';
import { losTerrain } from '../nav.js';
import { buyTransport } from '../vehicles.js';
import { botStores, homeRec, botBuild, botHireWorker, botFreeWall, foundTeamBase, raidTargetRec } from './build.js';
import { transportBoard } from '../vehicles.js';
import { dropFootprint } from '../worldevents.js';

const BS = AI.BOT_SPEED;

export function updateUnit(S, u, dt) {
  if (u.eliminated) return;
  const team = u.ally ? null : S.teams[u.id];

  // team base liveness
  if (!u.ally && !u.unfounded) {
    const rec = homeRec(S, u);
    if (!rec) { eliminate(S, u, team); return; }
    if (rec.tcKey !== u.tcKey) rehome(S, u, rec);
    // base never starves below 40 wood while a unit lives
    const tc = tcOf(S, rec.tcKey);
    if (tc) tc.store.wood = Math.max(tc.store.wood, 40);
  }

  // dead → respawn
  if (u.dead) {
    u.respawnT -= dt;
    if (u.respawnT <= 0) respawn(S, u, team);
    return;
  }

  // timers
  u.gunCd = Math.max(0, u.gunCd - dt); u.rkCd = Math.max(0, u.rkCd - dt);
  u.gnCd = Math.max(0, u.gnCd - dt); u.fenceCd = Math.max(0, u.fenceCd - dt);
  u.think -= dt; u.expandT -= dt; u.retaliateT = Math.max(0, u.retaliateT - dt);
  u.disengageT = Math.max(0, u.disengageT - dt); u.regenT = Math.max(0, u.regenT - dt);
  if (u.regenT <= 0 && u.hp < u.max) u.hp = Math.min(u.max, u.hp + 9 * dt);

  // worker hire pulse (every 2 s, any state)
  if (u.primary && !u.unfounded && !u.ally) {
    u.hireT -= dt;
    if (u.hireT <= 0) {
      u.hireT = 2;
      const rec = homeRec(S, u);
      const tc = rec && tcOf(S, rec.tcKey);
      if (u.scrap + (tc ? tc.store.scrap : 0) >= AI.WORKER_COST + 24) botHireWorker(S, u);
    }
  }

  // aboard transport
  if (u.aboard) {
    if (u.aboard.destroyed || !u.aboard.riders.includes(u)) { u.aboard = null; u.flying = false; }
    else { u.flying = true; return; }
  }
  // copter sanity: only trade flies
  if (u.flying && (!u.copter || u.copter.destroyed)) u.flying = false;
  if (u.flying && u.state !== 'trade') { landCopter(u); }

  // own door auto-open handled by movement; auto-close sweep is in brain.

  // unfounded founding phase
  if (u.unfounded) { updateFounding(S, u, team, dt); afterMove(S, u, dt); return; }

  u.endgame = S.aliveBases <= AI.ENDGAME_BASES || S.t > AI.ENDGAME_T;

  // ---- threat sensing (cadenced: full scan every ~0.15 s, staggered) ----
  const brain = team ? team.brain : allyBrain;
  const underFire = u.retaliateT > 0 && dist2(u.x, u.y, u.threatX, u.threatY) < AI.REACT_R * AI.REACT_R && !inSafeZone(S, u.x, u.y);
  if ((S.tick + u.tickPhase) % 9 === 0 || u.thCache === undefined) {
    u.thCache = botThreat(S, u) || botNearThreat(S, u);
  } else if (u.thCache && u.thCache.ref && !u.thCache.ref.dead) {
    u.thCache.x = u.thCache.ref.x; u.thCache.y = u.thCache.ref.y;
  } else if (u.thCache && u.thCache.ref && u.thCache.ref.dead) u.thCache = null;
  let th = underFire ? { x: u.threatX, y: u.threatY, vx: 0, vy: 0 } : u.thCache;
  const homeD = dist(u.x, u.y, u.hx, u.hy);
  if (dist2(u.x, u.y, S.world.shop.x, S.world.shop.y) < (SAFE_R + 140) * (SAFE_R + 140)) th = null;
  if (u.ally) u.raidUrge -= dt;

  // ---- committed task selection ----
  const raidAlive = u.raid && raidTargetRec(S, u.raid);
  const rocketerPress = u.rocketer && (u.state === 'raid' || u.wasRaid) && raidAlive && u.rockets > 0 && u.hp >= u.max * 0.2 && !brain.urgent;
  const thD = th ? dist(u.x, u.y, th.x, th.y) : 1e9;
  const wantDefend = th && !rocketerPress &&
    (u.defDuty || (underFire && !u.wasRaid) || brain.urgent || u.ally) &&
    !((u.wasRaid || u.endgame) && thD >= 230) &&
    !(brain.aggressor && thD >= 160);

  if (wantDefend) {
    u.state = 'defend';
    u.defHold = (u.defDuty && (brain.attack || brain.urgent)) ? 2.5 : 0.7;
    u.defTgt = { x: th.x, y: th.y, vx: th.vx || 0, vy: th.vy || 0, ref: th.ref };
  } else if (u.state === 'defend') {
    u.defHold -= dt;
    if (u.defHold <= 0) { u.state = 'gather'; u.defendT = 0; u.defTgt = null; }
  } else if (u.state === 'raid' && (!raidAlive || (team && brain.decaying))) {
    u.raid = null; u.wasRaid = false; u.state = 'gather';
  } else if (u.defDuty && (brain.attack || brain.urgent) && homeD > 340 && u.state !== 'raid' && u.state !== 'trade') {
    u.state = 'return';
  } else if (u.state === 'gather' && gatherDone(S, u, team, brain)) {
    u.state = plan(S, u, team, brain);
  }

  u.act = u.state;

  switch (u.state) {
    case 'defend': updateDefend(S, u, team, brain, th, dt); break;
    case 'raid': updateRaid(S, u, team, brain, dt); break;
    case 'return': updateReturn(S, u, dt); break;
    case 'trade': updateTrade(S, u, team, brain, dt); break;
    default: updateGather(S, u, team, brain, dt); break;
  }
  afterMove(S, u, dt);
}

const allyBrain = { sealed: true, decaying: false, ready: false, attack: false, urgent: false, aggressor: false, raidTarget: null };

function afterMove(S, u, dt) {
  separate(S, u, dt);
  // ticks without a blocked goto decay accumulated stuck time (standing in
  // combat, gathering, attending objectives are not "stuck")
  if (u.gotoTick !== S.tick) u.stuckT = Math.max(0, u.stuckT - dt);
  if (!u.flying && (u.state === 'gather' || u.state === 'raid' || u.state === 'return' || u.state === 'trade')) {
    if (Math.hypot(u.vx, u.vy) > 30) dropFootprint(S, u, Math.atan2(u.vy, u.vx));
  }
  // last-resort: no path out while standing on own base → cut a door
  if (u.directFallback && u.stuckT > 1.5) {
    const gx = Math.floor(u.x / TILE), gy = Math.floor(u.y / TILE);
    const st = S.structures.get(gx + ',' + gy);
    if (st && st.owner === u.owner) {
      if (botFreeWall(S, u)) { clearPath(u); u.directFallback = false; u.stuckT = 0; }
    }
  }
  // metrics: act share
  S.metrics.act[u.act] = (S.metrics.act[u.act] || 0) + dt;
}

function eliminate(S, u, team) {
  u.eliminated = true; u.dead = true;
  if (u.primary && team && !team.elimsPosted) {
    team.elimsPosted = true;
    team.eliminated = true;
    S.elims.push({ text: 'Base ' + (u.id + 1) + ' ELIMINATED', t: 30 });
    S.metrics.elims++;
  }
}

function rehome(S, u, rec) {
  u.hx = rec.hx; u.hy = rec.hy; u.tcKey = rec.tcKey;
  u.doorX = rec.doorX; u.doorY = rec.doorY; u.doorGy = rec.doorGy;
  clearPath(u);
}

function respawn(S, u, team) {
  if (u.ally) {
    u.hp = u.max; u.dead = false;
    u.x = u.hx; u.y = u.hy + 50; u.state = 'gather';
    return;
  }
  if (!team) return;
  const recs = team.bases.filter(r => !r.dead);
  if (!recs.length) { eliminate(S, u, team); return; }
  let rec = recs[0];
  if (recs.length > 1 && !u.primary) {
    const tgtRec = raidTargetRec(S, team.brain.raidTarget);
    if (tgtRec && (u.rocketer || u.wasRaid || u.state === 'raid')) {
      rec = recs.reduce((a, b) => dist2(a.hx, a.hy, tgtRec.hx, tgtRec.hy) < dist2(b.hx, b.hy, tgtRec.hx, tgtRec.hy) ? a : b);
    } else rec = recs[Math.floor(S.rng.next() * recs.length)];
  }
  rehome(S, u, rec);
  u.hp = u.max; u.dead = false;
  u.x = rec.hx; u.y = rec.hy + 50;
  u.state = 'gather'; u.raid = null; u.wasRaid = false;
  if (u.primary && u.copter) { u.copter.destroyed = false; u.copter.hp = u.copter.max; u.copter.x = u.hx - TILE * 4; u.copter.y = u.hy; }
}

// ---- founding phase ----
function updateFounding(S, u, team, dt) {
  u.act = 'found';
  const carried = u.inv.wood + u.inv.stone + u.inv.metal;
  // defend self vs adjacent threats
  const th = botThreat(S, u);
  if (th && !inSafeZone(S, u.x, u.y)) { combatStep(S, u, th, dt); return; }
  if (u.primary) {
    if (carried >= 220) {
      if (dist(u.x, u.y, u.siteX, u.siteY) <= TILE * 2) { foundTeamBase(S, team, u); return; }
      gotoPt(S, u, u.siteX, u.siteY, dt);
      return;
    }
  } else {
    if (carried >= 70) {
      if (dist(u.x, u.y, u.siteX, u.siteY) <= TILE * 3) {
        const primary = S.units.find(o => o.owner === u.owner && o.primary && !o.dead);
        if (primary) {
          for (const k of ['wood', 'stone', 'metal']) { primary.inv[k] += u.inv[k]; u.inv[k] = 0; }
        }
      } else { gotoPt(S, u, u.siteX, u.siteY, dt); return; }
    }
  }
  // gather wood-first near site
  u.act = 'gather';
  let node = u.tgtNode;
  if (!node || node.amount <= 0) {
    node = nearestNodeOfKind(S, u, 'wood', 2600) || nearestNode(S, u, 4000) || nearestNode(S, u, 1e9);
    u.tgtNode = node;
  }
  if (!node) return;
  harvestOrWalk(S, u, node, dt);
}

// ---- planner ----
function gatherDone(S, u, team, brain) {
  if (u.monRun) return false;
  const carried = u.inv.wood + u.inv.stone + u.inv.metal;
  if (carried >= AI.GATHER_LOAD || u.scrap > 40) return true;
  if (!u.ally && team) {
    // breach/damage status comes from the brain's 0.5 s cache (perf)
    if (brain.breach) return true;
    if (brain.damaged && totalWood(S, u) >= 12) return true;
    // rocketer arming
    if (u.rocketer && u.rockets < 8 && u.role !== 'turtle' && (u.scrap >= 12 || carried >= 100 || tcScrap(S, u) >= 24)) return true;
    // restock
    if (restockWanted(S, u, brain)) return true;
    // raid
    if (raidWanted(S, u, brain)) return true;
  }
  if (u.ally && u.raidUrge <= 0) return true;
  return false;
}

function restockWanted(S, u, brain) {
  if (u.ally || u.role === 'turtle') return false;
  if (u.rockets >= (u.primary ? 12 : 6)) return false;
  const carried = u.inv.wood + u.inv.stone + u.inv.metal;
  const funds = u.scrap >= 24 || carried >= 120 || (u.primary && tcScrap(S, u) >= 48);
  return funds && (brain.aggressor || botSafe(S, u) || brain.ready);
}

function raidWanted(S, u, brain) {
  if (!(S.t > 120 || u.endgame)) return false;
  if (S.t < u.raidCd) return false;
  if (u.role === 'turtle' && !u.endgame) return false;
  if (!(u.rockets > 0 || u.satchels > 0 || u.endgame)) return false;
  if (u.endgame || brain.aggressor) return true;
  return brain.ready && brain.raidTarget && u.raidBias < 0.72 && teamFloors(S, u) >= 4;
}

function plan(S, u, team, brain) {
  const carried = u.inv.wood + u.inv.stone + u.inv.metal;
  if (!u.ally && team) {
    const breach = brain.breach;
    if (breach && totalWood(S, u) < 40) return 'gather';
    const homeD = dist(u.x, u.y, u.hx, u.hy);
    if (breach || (brain.damaged && totalWood(S, u) >= 12)) return homeD > 180 ? 'return' : 'gather';
    if (u.rocketer && u.rockets < 8 && u.role !== 'turtle' && (u.scrap >= 12 || carried >= 100 || tcScrap(S, u) >= 24)) return 'trade';
    if (u.scrap > 40 || carried >= AI.GATHER_LOAD) return 'return';
    if (restockWanted(S, u, brain)) return 'trade';
    if (raidWanted(S, u, brain)) {
      let tgt = brain.raidTarget;
      // transport ferry: hit the farthest enemy when a transport with seats exists
      const tr = S.transports.find(t2 => t2.owner === u.owner && !t2.destroyed && t2.state !== 'fly' && t2.state !== 'unload' && t2.riders.length < TRANSPORT.seats);
      if (tr) {
        const far = farthestTeam(S, team);
        if (far) tgt = far;
      }
      if (!tgt || !raidTargetRec(S, tgt)) tgt = pickRaidTarget(S, team, u);
      if (tgt) { u.raid = tgt; u.raidCd = S.t + 2; S.metrics.raidsLaunched++; return 'raid'; }
    }
  }
  if (u.ally && u.raidUrge <= 0) {
    const tgt = pickAllyTarget(S);
    if (tgt) { u.raid = tgt; u.raidUrge = S.rng.rand(24, 44); return 'raid'; }
    u.raidUrge = S.rng.rand(8, 14);
  }
  return 'gather';
}

const totalWood = (S, u) => u.inv.wood + tcStore(S, u, 'wood');
const tcScrap = (S, u) => tcStore(S, u, 'scrap');
function tcStore(S, u, k) {
  const rec = homeRec(S, u);
  const tc = rec && tcOf(S, rec.tcKey);
  return tc ? tc.store[k] : 0;
}
function botSafe(S, u) {
  const rec = homeRec(S, u);
  const tc = rec && tcOf(S, rec.tcKey);
  if (!tc) return false;
  const team = S.teams[u.id];
  let n = 2;
  for (const s of S.structures.values()) if (s.owner === u.owner) n++;
  for (const d of S.deploys.values()) if (d.owner === u.owner && d.type === 'turret') n++;
  return (tc.store.wood + tc.store.stone + tc.store.metal) > n * 0.0075 * 300;
}
function teamFloors(S, u) {
  let n = 0;
  for (const s of S.structures.values()) if (s.owner === u.owner && (s.type === 'floor' || s.type === 'trifloor')) n++;
  return n;
}

export function pickRaidTarget(S, team, u) {
  let best = null, bs = 1e18;
  const home = team.bases.find(r => !r.dead);
  if (!home) return null;
  for (const t2 of S.teams) {
    if (t2 === team || t2.eliminated) continue;
    const rec = t2.bases.find(r => !r.dead);
    if (!rec) continue;
    const tc = tcOf(S, rec.tcKey);
    const loot = tc ? tc.store.wood + tc.store.stone + tc.store.metal : 0;
    let turrets = 0;
    for (const d of S.deploys.values()) if (d.owner === t2.owner && d.type === 'turret') turrets++;
    let defHome = 0;
    if (team.hard) for (const o of S.units) if (o.owner === t2.owner && !o.dead && !o.eliminated && dist2(o.x, o.y, rec.hx, rec.hy) < 720 * 720) defHome++;
    const score = dist2(home.hx, home.hy, rec.hx, rec.hy) * (1 + turrets * AI.RAID_TUR_W) * (1 + defHome * AI.RAID_DEF_W) / (1 + loot * 0.003);
    if (score < bs) { bs = score; best = t2; }
  }
  // player base candidate
  const ptc = raidTargetRec(S, 'player');
  if (ptc && !S.ghost) {
    const score = dist2(home.hx, home.hy, ptc.hx, ptc.hy);
    if (score < bs) best = 'player';
  }
  return best;
}

function pickAllyTarget(S) {
  let best = null, bd = 1e18;
  for (const t2 of S.teams) {
    if (t2.eliminated) continue;
    const rec = t2.bases.find(r => !r.dead);
    if (!rec) continue;
    const dd = dist2(S.player.x, S.player.y, rec.hx, rec.hy);
    if (dd < bd) { bd = dd; best = t2; }
  }
  return best;
}

function farthestTeam(S, team) {
  const home = team.bases.find(r => !r.dead);
  if (!home) return null;
  let best = null, bd = 3000 * 3000;
  for (const t2 of S.teams) {
    if (t2 === team || t2.eliminated) continue;
    const rec = t2.bases.find(r => !r.dead);
    if (!rec) continue;
    const dd = dist2(home.hx, home.hy, rec.hx, rec.hy);
    if (dd > bd) { bd = dd; best = t2; }
  }
  return best;
}

// ---- threats ----
export function botThreat(S, u) {
  if (u.disengageT > 0 || inSafeZone(S, u.x, u.y)) return null;
  let best = null, bd = AI.REACT_R * AI.REACT_R;
  const p = S.player;
  const consider = (x, y, vx, vy, ref, maxR) => {
    if (ref === u.unreach && S.t < u.unreachT) return;
    const dd = dist2(u.x, u.y, x, y);
    if (dd >= bd || (maxR && dd > maxR * maxR)) return;
    if (inSafeZone(S, x, y)) return;
    if (boulderLine(S, u.x, u.y, x, y)) return;
    bd = dd; best = { x, y, vx, vy, ref };
  };
  if (!u.ally && !p.dead && !p.inCopter && !S.ghost) consider(p.x, p.y, p.vx, p.vy, p);
  for (const o of S.units) {
    if (o.owner === u.owner || o.dead || o.flying || o.eliminated) continue;
    consider(o.x, o.y, o.vx, o.vy, o);
  }
  for (const a of S.animals) if (!a.dead && a.aggro) consider(a.x, a.y, a.vx, a.vy, a, 360);
  for (const g of S.guards) if (!g.dead) consider(g.x, g.y, 0, 0, g, 480);
  return best;
}

export function botNearThreat(S, u) {
  if (u.disengageT > 0 || inSafeZone(S, u.x, u.y)) return null;
  let best = null, bd = 430 * 430;
  const p = S.player;
  const consider = (x, y, vx, vy, ref) => {
    if (ref === u.unreach && S.t < u.unreachT) return;
    const dd = dist2(u.x, u.y, x, y);
    if (dd >= bd || inSafeZone(S, x, y) || boulderLine(S, u.x, u.y, x, y)) return;
    bd = dd; best = { x, y, vx, vy, ref };
  };
  if (!u.ally && !p.dead && !p.inCopter && !S.ghost) consider(p.x, p.y, p.vx, p.vy, p);
  for (const o of S.units) {
    if (o.owner === u.owner || o.dead || o.flying || o.eliminated) continue;
    consider(o.x, o.y, o.vx, o.vy, o);
  }
  for (const g of S.guards) if (!g.dead) consider(g.x, g.y, 0, 0, g);
  return best;
}

// ---- states ----
function updateDefend(S, u, team, brain, th, dt) {
  u.defendT += dt;
  const foe = th || u.defTgt;
  if (!foe) { u.state = 'gather'; return; }
  const raiding = u.raid && raidTargetRec(S, u.raid);
  const carried = u.inv.wood + u.inv.stone + u.inv.metal;
  const carrying = carried > 60 || u.scrap > 20;
  const critical = u.hp < u.max * 0.2;
  const hurt = u.hp < u.max * (carrying ? 0.45 : 0.28);
  if (((hurt && !raiding) || critical) && !u.endgame && !u.retreat) {
    if (S.rng.chance(carrying ? 0.05 : 0.02)) u.retreat = true;
  }
  if (u.retreat) {
    if (u.hp >= u.max * 0.85 || u.defendT > 9) u.retreat = false;
    else {
      u.disengageT = Math.max(u.disengageT, 2.5);
      if (!wallBlocksView(S, u.x, u.y, foe.x, foe.y)) botShoot(S, u, foe, dt);
      const st = gotoPt(S, u, u.hx + u.lane, u.hy + u.hoff, dt);
      if (st === 'arrived' || dist(u.x, u.y, u.hx, u.hy) < TILE * 1.5) { u.retreat = false; u.state = 'return'; }
      return;
    }
  }
  combatStep(S, u, foe, dt);
  maybeGrenade(S, u, foe);
  const breakT = raiding ? 2.2 : 7;
  if (u.defendT > breakT) {
    if (raiding) u.state = 'raid';
    else { u.disengageT = 6; u.state = 'gather'; }
    u.defendT = 0;
  }
}

function updateRaid(S, u, team, brain, dt) {
  u.wasRaid = true;
  u.act = 'raid';
  const rec = raidTargetRec(S, u.raid);
  if (!rec) { u.wasRaid = false; u.state = 'return'; return; }
  const tc = tcOf(S, rec.tcKey);
  if (!tc) { u.wasRaid = false; u.state = 'return'; return; }

  // out of explosives → go restock (never orbit)
  if (u.rockets <= 0 && u.satchels <= 0 && !u.endgame) {
    u.raid = null; u.wasRaid = false;
    const carried = u.inv.wood + u.inv.stone + u.inv.metal;
    u.state = (u.scrap >= 8 || carried >= 100) ? 'trade' : 'gather';
    return;
  }
  // transport ferry to distant targets
  if (!u.aboard && dist(u.x, u.y, u.hx, u.hy) < 600 && dist(rec.hx, rec.hy, u.hx, u.hy) > 2800) {
    const tr = S.transports.find(t2 => t2.owner === u.owner && !t2.destroyed && (t2.state === 'idle' || t2.state === 'board') && t2.riders.length < TRANSPORT.seats);
    if (tr) {
      if (dist(u.x, u.y, tr.x, tr.y) < 70) { transportBoard(S, u, tr); return; }
      gotoPt(S, u, tr.x, tr.y, dt);
      return;
    }
  }

  const dTC = dist(u.x, u.y, rec.hx, rec.hy);
  const squadAt = S.units.filter(o => o.owner === u.owner && o.state === 'raid' && o.raid === u.raid && !o.dead && dist2(o.x, o.y, rec.hx, rec.hy) < 560 * 560).length;
  const grouped = squadAt >= 2 || u.endgame || u.ally;

  // staging: ONE-TIME approach to the standoff ring (coordinated arrival).
  // Once staged, assault logic owns positioning — no ring ping-pong.
  if (u.stagedFor !== u.raid) { u.staged = false; u.stagedFor = u.raid; }
  if (dTC < 700) u.staged = true;
  else if (dTC > 1600) u.staged = false;
  if (!u.staged) {
    const ang = Math.atan2(u.hy - rec.hy, u.hx - rec.hx);
    const lane = ((u.id % 5) - 2) * 70 + u.lane * 2;
    const sx = rec.hx + Math.cos(ang) * 540 + Math.cos(ang + Math.PI / 2) * lane;
    const sy = rec.hy + Math.sin(ang) * 540 + Math.sin(ang + Math.PI / 2) * lane;
    const st = gotoPt(S, u, sx, sy, dt);
    if (st === 'stuck') { u.raidCd = S.t + 8; u.raid = null; u.wasRaid = false; u.state = 'gather'; }
    return;
  }

  // SIEGE: grouped + close + LOS → chip the TC
  if (grouped && dTC < (u.endgame ? 420 : 300) && !wallBlocksView(S, u.x, u.y, rec.hx, rec.hy)) {
    faceToward(u, rec.hx, rec.hy, dt);
    tc.hp -= (u.endgame ? 140 : u.hard ? 24 : 14) * dt;
    tc.hitT = S.t;
    if (S.rng.chance(0.2)) S.particles.push({ x: rec.hx + S.rng.rand(-10, 10), y: rec.hy + S.rng.rand(-10, 10), vx: S.rng.rand(-40, 40), vy: S.rng.rand(-60, -20), life: 0.4, max: 0.4, r: 2, col: '#caa24a' });
    if (tc.hp <= 0) destroyDeploy(S, rec.tcKey, tc, u.owner);
    return;
  }

  // aim priority: exposed path turret → breach piece → TC
  const turret = pathTurret(S, u, rec);
  let aim = null, aimKey = null, aimIsDoor = false;
  if (turret) { aim = turret.c; aimKey = turret.key; }
  else {
    const breach = breachAim(S, u, team, rec);
    if (breach) { aim = breach.c; aimKey = breach.key; aimIsDoor = breach.door; }
    else aim = { x: rec.hx, y: rec.hy };
  }

  const dAim = dist(u.x, u.y, aim.x, aim.y);
  if (u.rockets > 0) {
    // finisher: lane open to the TC → rocket the TC itself
    if (dTC >= AI.ROCKET_MIN && dTC < 460 && !wallBlocksView(S, u.x, u.y, rec.hx, rec.hy)) {
      faceToward(u, rec.hx, rec.hy, dt);
      tryRocket(S, u, rec.hx, rec.hy, 2.2);
      return;
    }
    // rocketer: stand off 320 and fire
    if (dAim > 380) {
      const ang = Math.atan2(u.y - aim.y, u.x - aim.x);
      const lane = ((u.id % 5) - 2) * 70;
      const tx = aim.x + Math.cos(ang) * 320 + Math.cos(ang + Math.PI / 2) * lane;
      const ty = aim.y + Math.sin(ang) * 320 + Math.sin(ang + Math.PI / 2) * lane;
      gotoPt(S, u, tx, ty, dt);
      breachIfBlocked(S, u, rec);
    } else if (dAim < AI.ROCKET_MIN) {
      const ang = Math.atan2(u.y - aim.y, u.x - aim.x);
      const nx = u.x + Math.cos(ang) * 120 * dt, ny = u.y + Math.sin(ang) * 120 * dt;
      if (!blocked(S, nx, ny, 13, { passOwner: u.owner })) { u.x = nx; u.y = ny; }
    } else {
      faceToward(u, aim.x, aim.y, dt);
      tryRocket(S, u, aim.x, aim.y, 2.2);
    }
    return;
  }
  if (u.satchels > 0 && grouped) {
    if (dAim < 100) {
      if (u.rkCd <= 0) {
        S.satchels.push({ x: aim.x, y: aim.y, t: 2.0, from: u.owner });
        u.satchels--; u.rkCd = 2.6;
        addFloat(S, u.x, u.y, 'satchel!', '#ffd0a0');
      }
    } else { gotoPt(S, u, aim.x, aim.y, dt, { arrive: 80 }); breachIfBlocked(S, u, rec); }
    return;
  }
  // cover role
  const foe = botNearThreat(S, u);
  if (foe) {
    if (dist(u.x, u.y, foe.x, foe.y) < 480) { faceToward(u, foe.x, foe.y, dt); botShoot(S, u, foe, dt); }
    else gotoPt(S, u, foe.x, foe.y, dt);
  } else if (grouped) {
    const ang = Math.atan2(u.hy - rec.hy, u.hx - rec.hx);
    const lane = ((u.id % 5) - 2) * 64;
    gotoPt(S, u, aim.x + Math.cos(ang) * 380 + Math.cos(ang + Math.PI / 2) * lane, aim.y + Math.sin(ang) * 380 + Math.sin(ang + Math.PI / 2) * lane, dt, { arrive: 40 });
  } else if (dAim < 380) {
    const ang = Math.atan2(u.y - aim.y, u.x - aim.x);
    const nx = u.x + Math.cos(ang) * BS * dt, ny = u.y + Math.sin(ang) * BS * dt;
    if (!blocked(S, nx, ny, 13, { passOwner: u.owner })) { u.x = nx; u.y = ny; }
  } else gotoPt(S, u, aim.x, aim.y, dt, { arrive: 340 });
}

function pathTurret(S, u, rec) {
  let best = null, bd = 1e18;
  for (const [k, d] of S.deploys) {
    if (d.type !== 'turret' || d.owner !== rec.owner) continue;
    const [gx, gy] = k.split(',').map(Number);
    const c = cellCenter(gx, gy);
    const range = ({ 1: 340, 2: 380, 3: 460 })[d.tier || 1] + 60;
    const dd = dist2(u.x, u.y, c.x, c.y);
    if (dd < range * range && !wallBlocksView(S, u.x, u.y, c.x, c.y)) {
      if (dd < bd) { bd = dd; best = { key: k, c }; }
    }
  }
  return best;
}

// team-coordinated cheapest path to the TC
function breachAim(S, u, team, rec) {
  // lane-open check: someone is already inside with TC LOS → stop wall-chewing
  for (const o of S.units) {
    if (o.owner !== u.owner || o.dead || o.raid !== u.raid) continue;
    if (dist2(o.x, o.y, rec.hx, rec.hy) < 760 * 760 && !wallBlocksView(S, o.x, o.y, rec.hx, rec.hy)) return null;
  }
  const brain = team ? team.brain : null;
  if (brain && brain.breachKey && S.t - brain.breachT < 1.5) {
    const w = S.walls.get(brain.breachKey);
    if (w && w.hp > 0 && !(w.type === 'door' && w.open)) {
      const s = wallSegMid(S, brain.breachKey, w);
      return { key: brain.breachKey, c: s, door: w.type === 'door' };
    }
  }
  // squad centroid
  let cx = 0, cy = 0, n = 0;
  for (const o of S.units) {
    if (o.owner === u.owner && o.raid === u.raid && !o.dead) { cx += o.x; cy += o.y; n++; }
  }
  if (!n) { cx = u.x; cy = u.y; n = 1; }
  cx /= n; cy /= n;
  let best = null, bs = 1e18, bestDoor = false;
  for (const [k, w] of S.walls) {
    if (w.owner !== rec.owner || w.hp <= 0) continue;
    if (w.type === 'door' && w.open) continue;
    const mid = wallSegMid(S, k, w);
    if (dist2(mid.x, mid.y, rec.hx, rec.hy) > CLAIM_R * CLAIM_R) continue;
    const score = (dist(cx, cy, mid.x, mid.y) + dist(mid.x, mid.y, rec.hx, rec.hy)) * (w.type === 'door' ? 0.6 : 1);
    if (score < bs) { bs = score; best = k; bestDoor = w.type === 'door'; }
  }
  if (!best) return null;
  if (brain) { brain.breachKey = best; brain.breachT = S.t; }
  const w = S.walls.get(best);
  return { key: best, c: wallSegMid(S, best, w), door: bestDoor };
}

function wallSegMid(S, k, w) {
  const p = k.split(',');
  const gx = +p[1], gy = +p[2];
  if (p[0] === 'V') return { x: gx * TILE, y: gy * TILE + TILE / 2 };
  return { x: gx * TILE + TILE / 2, y: gy * TILE };
}

function breachIfBlocked(S, u, rec) {
  // boxed against an enemy wall mid-raid → blow through it
  let best = null, bd = 240 * 240, bestDoor = false;
  for (const [k, w] of S.walls) {
    if (w.owner !== rec.owner || w.hp <= 0) continue;
    if (w.type === 'door' && w.open) continue;
    const mid = wallSegMid(S, k, w);
    const dd = dist2(u.x, u.y, mid.x, mid.y);
    const isDoor = w.type === 'door';
    if (dd < bd || (isDoor && !bestDoor && dd < 240 * 240)) {
      if (isDoor || !bestDoor) { bd = dd; best = mid; bestDoor = isDoor; }
    }
  }
  if (!best || u.rkCd > 0) return;
  const d = dist(u.x, u.y, best.x, best.y);
  if (u.rockets > 0 && d >= AI.ROCKET_MIN) { faceToward(u, best.x, best.y, 1); tryRocket(S, u, best.x, best.y, 2.2); }
  else if (d < 90 && u.satchels > 0) {
    S.satchels.push({ x: best.x, y: best.y, t: 3.0, from: u.owner });
    u.satchels--; u.rkCd = 4.5;
  }
}

function updateReturn(S, u, dt) {
  u.wasRaid = false;
  u.act = 'return';
  u.retT += dt;
  const st = gotoPt(S, u, u.hx + u.lane, u.hy + u.hoff, dt, { arrive: TILE * 1.5 });
  if (st === 'arrived') { depositHome(S, u); u.state = 'gather'; u.retT = 0; return; }
  if (st === 'stuck' || u.retT > 14) {
    const team = u.ally ? null : S.teams[u.id];
    const rec = team && homeRec(S, u);
    const breached = team && rec && findBreach(S, team, rec);
    if (!breached) { depositHome(S, u); u.state = 'gather'; u.retT = 0; }
    else if (st === 'stuck') botFreeWall(S, u);
  }
}

export function depositHome(S, u) {
  if (u.ally) {
    for (const k of ['wood', 'stone', 'metal']) { S.inv[k] += u.inv[k]; u.inv[k] = 0; }
    S.inv.scrap += u.scrap; u.scrap = 0;
    return;
  }
  const rec = homeRec(S, u);
  const tc = rec && tcOf(S, rec.tcKey);
  if (!tc) return;
  for (const k of ['wood', 'stone', 'metal']) { tc.store[k] += u.inv[k]; u.inv[k] = 0; }
  tc.store.scrap += u.scrap; u.scrap = 0;
}

// ---- trade ----
function updateTrade(S, u, team, brain, dt) {
  u.act = 'trade';
  const shop = S.world.shop;
  if (!shop) { u.state = 'return'; return; }
  const fan = u.id >= 0 ? u.id : 3;
  const fx = shop.x + Math.cos(fan * 2.39996) * SAFE_R * 0.34;
  const fy = shop.y + Math.sin(fan * 2.39996) * SAFE_R * 0.34;
  if (!u.tradeDone) {
    const d = dist(u.x, u.y, shop.x, shop.y);
    if (d > SAFE_R * 0.55) {
      if (u.copter && !u.copter.destroyed) { if (flyTo(S, u, fx, fy, dt, SAFE_R * 0.5)) {} return; }
      const st = gotoPt(S, u, fx, fy, dt, { arrive: 30 });
      if (st === 'stuck') { u.state = 'return'; }
      return;
    }
    doTradeVisit(S, u, team, brain);
    u.tradeDone = true;
    return;
  }
  // homebound
  if (u.flying) {
    if (flyTo(S, u, u.hx - TILE * 4, u.hy, dt, 46)) {
      landCopter(u);
      u.tradeDone = false; u.state = 'return';
    }
    return;
  }
  u.tradeDone = false; u.state = 'return';
}

function doTradeVisit(S, u, team, brain) {
  // SELL
  let sold = 0;
  while (u.inv.wood >= 100) { u.inv.wood -= 100; u.scrap += 6; sold += 6; }
  while (u.inv.stone >= 100) { u.inv.stone -= 100; u.scrap += 9; sold += 9; }
  while (u.inv.metal >= 50) { u.inv.metal -= 50; u.scrap += 10; sold += 10; }
  if (sold > 0) addFloat(S, u.x, u.y, '+' + sold + ' scrap', '#ffe07a');
  // withdraw TC bank
  const rec = homeRec(S, u);
  const tc = rec && tcOf(S, rec.tcKey);
  if (tc) {
    if (u.primary) { u.scrap += tc.store.scrap; tc.store.scrap = 0; }
    else if (u.rocketer) { const take = Math.max(0, tc.store.scrap - 100); u.scrap += take; tc.store.scrap -= take; }
  }
  let bought = false;
  // 1. transport heli (primary)
  if (u.primary && team && u.scrap >= TRANSPORT.cost && !S.transports.some(t2 => t2.owner === u.owner && !t2.destroyed)) {
    const far = farthestTeam(S, team);
    if (far) {
      u.scrap -= TRANSPORT.cost;
      buyTransport(S, team, u);
      bought = true;
    }
  }
  // 2. weapon upgrade
  if (!u.weak && u.gun === 'pistol' && u.scrap >= 10) {
    u.scrap -= 10;
    u.gun = u.shotgun ? 'shotgun' : 'rifle';
    addFloat(S, u.x, u.y, '+' + u.gun, '#bfe3ff');
    bought = true;
  }
  // 3. hard laser
  if (u.hard && u.gun === 'rifle' && !u.rifleLaser && u.scrap >= 10) { u.scrap -= 10; u.rifleLaser = true; addFloat(S, u.x, u.y, '+laser', '#ff6a6a'); bought = true; }
  // 4. 2-rocket breach floor
  while (u.rockets < 2 && u.scrap >= 12) { u.scrap -= 12; u.rockets++; bought = true; }
  // 5. hire workers (primary, rockets ≥ 2)
  if (u.primary && u.rockets >= 2) while (u.scrap >= AI.WORKER_COST && botHireWorker(S, u)) bought = true;
  // 6. rocket stockpile
  while (u.rockets < 12 && u.scrap >= 12) { u.scrap -= 12; u.rockets++; bought = true; }
  // 7. satchels
  while (u.satchels < 4 && u.scrap >= 8) { u.scrap -= 8; u.satchels++; bought = true; }
  // 8. grenade (one per visit)
  if (u.grenades < 2 && u.scrap >= 8) { u.scrap -= 8; u.grenades++; bought = true; }
  // 9. hard armor
  if (u.hard) {
    while (u.scrap >= 14 && u.bodyArmor < 3) { u.scrap -= 14; u.bodyArmor++; addFloat(S, u.x, u.y, '+armor', '#9fb0c8'); bought = true; }
    while (u.scrap >= 12 && u.facemask < 3) { u.scrap -= 12; u.facemask++; bought = true; }
    // 10. HQM (gate 20, price 14)
    while (u.scrap >= 20 && u.hqm < 60) { u.scrap -= 14; u.hqm += 10; bought = true; }
  }
  // 11. extra minicopter
  const copCount = S.units.filter(o => o.owner === u.owner && o.copter && !o.copter.destroyed).length;
  if ((!u.copter || u.copter.destroyed) && !u.aboard && u.scrap >= AI.MINICOPTER_COST && copCount < (u.hard ? 3 : 2)) {
    u.scrap -= AI.MINICOPTER_COST;
    u.copter = { x: u.x - TILE * 2, y: u.y, angle: 0, rotor: 0, spin: 0, vx: 0, vy: 0, hp: 160, max: 160, destroyed: false };
    addFloat(S, u.x, u.y, '+minicopter', '#bfe3ff');
    bought = true;
  }
  if (bought) addFloat(S, u.x, u.y - 16, 'resupplied', '#bfe3ff');
}

// minicopter flight (trade runs only)
function flyTo(S, u, tx, ty, dt, reach = 44) {
  const c = u.copter;
  if (!c || c.destroyed) return true;
  if (!u.flying) { c.x = u.x; c.y = u.y; u.flying = true; u.flyT = 0; }
  u.flyT = (u.flyT || 0) + dt;
  const d = dist(c.x, c.y, tx, ty);
  if (d < reach || u.flyT > 9) {
    if (u.flyT > 9) { c.x = tx; c.y = ty; c.vx = c.vy = 0; }
    u.x = c.x; u.y = c.y;
    return true;
  }
  const aim = Math.atan2(ty - c.y, tx - c.x);
  c.angle = c.angle + angShort(c.angle, aim) * Math.min(1, dt * 4);
  c.rotor += dt * 46;
  const throttle = d > 160 ? 1 : Math.max(0.12, d / 160);
  c.vx += Math.cos(c.angle) * COPTER.accel * throttle * dt;
  c.vy += Math.sin(c.angle) * COPTER.accel * throttle * dt;
  const drag = Math.pow(COPTER.drag, dt);
  c.vx *= drag; c.vy *= drag;
  const sp = Math.hypot(c.vx, c.vy);
  if (sp > COPTER.speed) { c.vx *= COPTER.speed / sp; c.vy *= COPTER.speed / sp; }
  c.x = clamp(c.x + c.vx * dt, COPTER.r, WORLD.w - COPTER.r);
  c.y = clamp(c.y + c.vy * dt, COPTER.r, WORLD.h - COPTER.r);
  u.x = c.x; u.y = c.y;
  return false;
}

function landCopter(u) {
  if (u.copter) { u.copter.x = u.x; u.copter.y = u.y; u.copter.vx = 0; u.copter.vy = 0; u.copter.spin = 0; }
  u.flying = false;
}

// ---- gather (default state + side activities) ----
function updateGather(S, u, team, brain, dt) {
  u.wasRaid = false; u.retT = 0;
  const carried = u.inv.wood + u.inv.stone + u.inv.metal;
  const homeD = dist(u.x, u.y, u.hx, u.hy);
  const atHome = homeD < 200;
  u.gathering = false;

  const rec = team && homeRec(S, u);

  // builder duty
  if (u.buildDuty && team && rec) {
    const breach = findBreach(S, team, rec);
    if (breach) {
      u.act = 'build';
      if (homeD > 200) { gotoPt(S, u, u.hx + u.lane, u.hy + u.hoff, dt); return; }
      if (carried > 0) depositHome(S, u);
      if (sealWall(S, team, breach, botStores(S, u))) { addFloat(S, u.x, u.y, 'sealed', '#9ad06a'); u.maintT = S.t; }
      return;
    }
    if (atHome) {
      if (carried > 0) depositHome(S, u);
      const dmg = worstDamagedWall(S, team, rec);
      if (dmg) {
        if (repairWall(S, team, dmg, botStores(S, u))) { u.act = 'build'; u.maintT = S.t; addFloat(S, u.x, u.y, 'repaired', '#9ad06a'); return; }
      }
      if (u.expandT <= 0) {
        u.expandT = S.rng.rand(2.5, 6);
        if (botBuild(S, u)) { u.act = 'build'; u.maintT = S.t; return; }
      }
    }
  }

  // at home: deposit + urgent seal/repair (breach key from brain cache)
  if (atHome && team && rec) {
    if (carried > 100 || u.scrap > 0) depositHome(S, u);
    if (brain.breach && sealWall(S, team, brain.breach, botStores(S, u))) {
      brain.breach = null; brain.sealed = true;
      u.maintT = S.t; addFloat(S, u.x, u.y, 'sealed', '#9ad06a');
    }
  }

  // quarry run
  if (u.qRun) {
    const q = S.quarry;
    if (!q || q.owner === u.owner || S.t > u.qRun.until) { u.qRun = null; }
    else {
      u.act = 'quarry';
      const foe = botNearThreat(S, u);
      const dq = dist(u.x, u.y, q.x, q.y);
      if (foe && dq < q.r) { faceToward(u, foe.x, foe.y, dt, 10); botShoot(S, u, foe, dt); return; }
      if (dq > q.r * 0.5) { if (gotoPt(S, u, q.x, q.y, dt, { arrive: q.r * 0.4 }) === 'stuck') u.qRun = null; }
      return;
    }
  }

  // loot run (hard-team excursion)
  if (u.lootRun) {
    const r2 = u.lootRun;
    let live = S.t < r2.until;
    if (r2.kind === 'crate') live = live && !!S.lockedCrate;
    if (r2.kind === 'airdrop') {
      const d = dist(u.x, u.y, r2.x, r2.y);
      if ((d < 2200 && S.airdrop) || (!S.airdrop && d < 480)) live = false; // arrived → normal logic takes over
    }
    if (r2.kind === 'pile') {
      const d = dist(u.x, u.y, r2.x, r2.y);
      if (d < 480) live = false;
      else if (!S.loot.some(L => (L.kind === 'rocket' || L.kind === 'satchel') && dist2(L.x, L.y, r2.x, r2.y) < 300 * 300)) live = false;
    }
    if (!live) u.lootRun = null;
    else {
      u.act = 'loot';
      if (r2.kind === 'crate' && S.lockedCrate && dist(u.x, u.y, S.lockedCrate.x, S.lockedCrate.y) <= 90) { /* attend hack */ }
      else if (gotoPt(S, u, r2.x, r2.y, dt, { arrive: 80, speed: 170 }) === 'stuck') u.lootRun = null;
      return;
    }
  }

  // loot pickup commit (skip-set so an unreachable pile can't cycle forever)
  if (u.lootSkipSet && S.t > u.lootSkipT) u.lootSkipSet = null;
  if (u.lootTgt && (!S.loot.includes(u.lootTgt) || dist2(u.x, u.y, u.lootTgt.x, u.lootTgt.y) > 560 * 560)) u.lootTgt = null;
  if (!u.lootTgt) {
    let best = null, bd = 520 * 520;
    for (const L of S.loot) {
      if (u.lootSkipSet && u.lootSkipSet.has(L)) continue;
      const dd = dist2(u.x, u.y, L.x, L.y);
      if (dd < bd) { bd = dd; best = L; }
    }
    u.lootTgt = best;
  }
  if (u.lootTgt) {
    u.act = 'loot';
    const st = gotoPt(S, u, u.lootTgt.x, u.lootTgt.y, dt, { arrive: 22, speed: 170 });
    if (st === 'stuck' || (u.directFallback && u.stuckT > 2)) {
      if (!u.lootSkipSet) u.lootSkipSet = new Set();
      u.lootSkipSet.add(u.lootTgt);
      u.lootSkipT = S.t + 25;
      u.lootTgt = null;
    }
    return;
  }

  // airdrop race
  if (S.airdrop && S.t > (u.airdropCd || 0) && dist2(u.x, u.y, S.airdrop.x, S.airdrop.gy) < 2600 * 2600) {
    const a = S.airdrop;
    u.act = 'airdrop';
    const ty = a.fall < 1 ? a.gy : a.y;
    const d = dist(u.x, u.y, a.x, ty);
    if (a.fall >= 1 && d < 150) {
      faceToward(u, a.x, a.y, dt, 10);
      if (u.gunCd <= 0) shootAt(S, u, a.x, a.y); // crack the crate
      return;
    }
    if (d > 130) {
      if (gotoPt(S, u, a.x, ty, dt, { arrive: 120, speed: 165 }) === 'stuck') u.airdropCd = S.t + 25;
      return;
    }
    return;
  }

  // locked crate convergence
  if (S.lockedCrate && !u.buildDuty && S.t > (u.crateCd || 0) && dist2(u.x, u.y, S.lockedCrate.x, S.lockedCrate.y) < 1600 * 1600) {
    const c = S.lockedCrate;
    u.act = 'crate';
    if (dist(u.x, u.y, c.x, c.y) > 90) {
      if (gotoPt(S, u, c.x, c.y, dt, { arrive: 80, speed: 165 }) === 'stuck') u.crateCd = S.t + 30;
      return;
    }
    return; // attend the hack
  }

  // monument run
  if (!u.endgame) {
    if (u.monRun) {
      const m = nearestMonument(S, u);
      const hasBarrel = m && monumentBarrel(S, m);
      u.monRunT += dt;
      if (!hasBarrel || carried >= 340 || u.monRunT > 12) {
        u.monRun = false; u.monCd = S.t + S.rng.rand(60, 110);
      } else {
        u.act = 'monument';
        const guard = monumentGuard(S, m);
        if (guard && dist2(u.x, u.y, m.x, m.y) < (m.r + 320) * (m.r + 320)) {
          const gd = dist(u.x, u.y, guard.x, guard.y);
          if (gd > 340 || wallBlocksView(S, u.x, u.y, guard.x, guard.y)) {
            if (gotoPt(S, u, guard.x, guard.y, dt, { arrive: 300 }) === 'stuck') { u.monRun = false; u.monCd = S.t + 30; }
          }
          else { faceToward(u, guard.x, guard.y, dt, 10); botShoot(S, u, { x: guard.x, y: guard.y, ref: guard }, dt); }
          return;
        }
        const b = monumentBarrel(S, m);
        if (b) {
          if (dist(u.x, u.y, b.x, b.y) > 120) { if (gotoPt(S, u, b.x, b.y, dt, { arrive: 110, speed: 150 }) === 'stuck') { u.monRun = false; u.monCd = S.t + 14; } }
          else { faceToward(u, b.x, b.y, dt, 10); if (u.gunCd <= 0) shootAt(S, u, b.x, b.y); }
          return;
        }
      }
    } else if (S.t > u.monCd && carried < 200) {
      const m = nearestMonument(S, u);
      if (m && monumentBarrel(S, m) && (dist2(m.x, m.y, u.hx, u.hy) < 2100 * 2100 || dist2(m.x, m.y, u.x, u.y) < 1300 * 1300)) {
        u.monRun = true; u.monRunT = 0;
      }
    }
  }
  // monument loiter cap: standing in a zone with nothing productive
  const mz = nearestMonument(S, u);
  if (mz && dist2(u.x, u.y, mz.x, mz.y) < (mz.r + 150) * (mz.r + 150) && !u.monRun) {
    u.monStay += dt;
    if (u.monStay > 10) {
      u.monStay = 0; u.monCd = S.t + 45;
      u.tgtNode = null;
    }
  } else u.monStay = Math.max(0, u.monStay - 2 * dt);

  // node harvest
  let node = pickNode(S, u);
  if (node) {
    harvestOrWalk(S, u, node, dt);
    return;
  }
  // no node: monument fallback or roam
  if (mz && monumentBarrel(S, mz) && S.t > u.monCd) {
    const b = monumentBarrel(S, mz);
    u.act = 'monument';
    if (dist(u.x, u.y, b.x, b.y) > 120) {
      if (gotoPt(S, u, b.x, b.y, dt, { arrive: 110, speed: 150 }) === 'stuck') u.monCd = S.t + 30;
    }
    else { faceToward(u, b.x, b.y, dt, 10); if (u.gunCd <= 0) shootAt(S, u, b.x, b.y); }
    return;
  }
  u.act = 'roam';
  roam(S, u, dt);
}

function harvestOrWalk(S, u, node, dt) {
  const d = dist(u.x, u.y, node.x, node.y);
  if (d > node.r + 22) {
    u.act = 'toNode';
    const st = gotoPt(S, u, node.x, node.y, dt, { arrive: node.r + 18 });
    if (st === 'stuck') {
      if (!u.skipSet || S.t > u.skipT) u.skipSet = new Set();
      u.skipSet.add(node);
      u.skipT = S.t + 10;
      u.tgtNode = null;
    }
    return;
  }
  u.act = 'gather';
  u.gathering = true;
  faceToward(u, node.x, node.y, dt);
  u.swing += dt * 9;
  if (u.think <= 0) {
    u.think = 0.5;
    const got = Math.min(u.jack ? 24 : 8, node.amount);
    if (got > 0) {
      node.amount -= got; node.regen = 0;
      u.inv[node.base] += got;
      S.events.push({ type: 'harvest', x: node.x, y: node.y, kind: node.base });
    }
  }
}

function pickNode(S, u) {
  // keep committed node
  if (u.tgtNode) {
    const n = u.tgtNode;
    const claimed = n.by && n.by !== u && !n.by.dead && S.t - n.byT < 3;
    if (n.amount > 0 && !claimed) { n.by = u; n.byT = S.t; return n; }
    u.tgtNode = null;
  }
  const rings = [1400, 2800, 5600, 1e9];
  for (const ring of rings) {
    let best = null, bs = 1e18;
    for (const n of S.resources) {
      if (n.amount <= 0) continue;
      if (u.skipSet && u.skipSet.has(n) && S.t < u.skipT) continue;
      const dh = dist2(n.x, n.y, u.hx, u.hy);
      if (dh < 240 * 240 || dh > ring * ring) continue;
      if (n.by && n.by !== u && !n.by.dead && S.t - n.byT < 2.5) continue;
      if (S.structures.has(gkeyOf(n.x, n.y))) continue;
      let score = dist2(u.x, u.y, n.x, n.y);
      // terrain-blocked nodes heavily penalized → confined, reachable gathering
      score *= losTerrainCheap(S, u, n) ? 1 : 6;
      if (score < bs) { bs = score; best = n; }
    }
    if (best) { best.by = u; best.byT = S.t; u.tgtNode = best; return best; }
  }
  return null;
}
const gkeyOf = (x, y) => Math.floor(x / TILE) + ',' + Math.floor(y / TILE);
function losTerrainCheap(S, u, n) {
  // cached per node+unit briefly
  if (n._losT && S.t - n._losT < 2 && n._losFor === u) return n._los;
  n._los = losTerrain(S, u.x, u.y, n.x, n.y);
  n._losT = S.t; n._losFor = u;
  return n._los;
}

function nearestNode(S, u, maxD) {
  let best = null, bd = maxD * maxD;
  for (const n of S.resources) {
    if (n.amount <= 0) continue;
    const dd = dist2(u.x, u.y, n.x, n.y);
    if (dd < bd) { bd = dd; best = n; }
  }
  return best;
}
function nearestNodeOfKind(S, u, base, maxD) {
  let best = null, bd = maxD * maxD;
  for (const n of S.resources) {
    if (n.amount <= 0 || n.base !== base) continue;
    const dd = dist2(u.x, u.y, n.x, n.y);
    if (dd < bd) { bd = dd; best = n; }
  }
  return best;
}

function nearestMonument(S, u) {
  let best = null, bd = 1e18;
  for (const m of S.world.monuments) {
    if (m.type === 'quarry') continue;
    const dd = dist2(u.x, u.y, m.x, m.y);
    if (dd < bd) { bd = dd; best = m; }
  }
  return best;
}
function monumentBarrel(S, m) {
  for (const b of S.barrels) {
    if (b.hp <= 0 || b.tier !== 'mon') continue;
    if (dist2(b.x, b.y, m.x, m.y) < (m.r + 220) * (m.r + 220)) return b;
  }
  return null;
}
function monumentGuard(S, m) {
  let best = null, bd = (m.r + 280) * (m.r + 280);
  for (const g of S.guards) {
    if (g.dead) continue;
    const dd = dist2(g.x, g.y, m.x, m.y);
    if (dd < bd) { bd = dd; best = g; }
  }
  return best;
}

function roam(S, u, dt) {
  if (!u.roamX || dist(u.x, u.y, u.roamX, u.roamY) < 140 || S.t > (u.roamT || 0)) {
    for (let t = 0; t < 12; t++) {
      const x = S.rng.rand(800, WORLD.w - 800), y = S.rng.rand(800, WORLD.h - 800);
      if (!S.world.onLand(x, y) || S.world.lakeAt(x, y)) continue;
      u.roamX = x; u.roamY = y; u.roamT = S.t + S.rng.rand(7, 13);
      break;
    }
  }
  if (u.roamX) {
    if (gotoPt(S, u, u.roamX, u.roamY, dt, { speed: 140, arrive: 120 }) === 'stuck') u.roamX = 0; // reroll
  }
}

// ---- combat micro ----
export function combatStep(S, u, tgt, dt) {
  if (u.hp < u.max * 0.35) dropFence(S, u, tgt);
  let ax = tgt.x, ay = tgt.y;
  if (u.hard && (tgt.vx || tgt.vy)) {
    const bulletSpeed = u.weak ? 1150 : 1500;
    const lead = Math.min(0.7, dist(u.x, u.y, tgt.x, tgt.y) / bulletSpeed);
    ax += (tgt.vx || 0) * lead; ay += (tgt.vy || 0) * lead;
  }
  const d = dist(u.x, u.y, tgt.x, tgt.y);
  const los = !wallBlocksView(S, u.x, u.y, tgt.x, tgt.y) && !boulderLine(S, u.x, u.y, tgt.x, tgt.y);
  if (los && d < 460) {
    faceToward(u, ax, ay, dt, 10);
    botShoot(S, u, { x: ax, y: ay, ref: tgt.ref }, dt);
    // backoff hysteresis
    if (d < 140) u.backoff = true;
    else if (d > 180) u.backoff = false;
    if (u.backoff) {
      const ang = Math.atan2(u.y - tgt.y, u.x - tgt.x);
      const nx = u.x + Math.cos(ang) * 120 * dt, ny = u.y + Math.sin(ang) * 120 * dt;
      if (!blocked(S, nx, ny, 13, { passOwner: u.owner })) { u.x = nx; u.y = ny; u.path = null; }
    } else if (u.regenT > 0 || u.retaliateT > 0) {
      // strafe only while actually taking fire
      u.strafeT -= dt;
      if (u.strafeT <= 0) { u.strafeT = AI.STRAFE_FLIP; u.strafeS = -u.strafeS; }
      const ang = Math.atan2(tgt.y - u.y, tgt.x - u.x) + Math.PI / 2 * u.strafeS;
      const nx = u.x + Math.cos(ang) * 120 * dt, ny = u.y + Math.sin(ang) * 120 * dt;
      if (!blocked(S, nx, ny, 13, { passOwner: u.owner })) { u.x = nx; u.y = ny; u.path = null; }
    }
  } else {
    const st = gotoPt(S, u, tgt.x, tgt.y, dt, { arrive: 380 });
    if (st === 'stuck') {
      // unreachable target → fully break contact (clear the under-fire bypass
      // too, or being shot at re-triggers the chase forever) and remember the
      // target as unreachable for a while so it can't be re-acquired
      u.disengageT = 4;
      u.retaliateT = 0;
      u.defHold = 0;
      u.defTgt = null;
      u.thCache = null;
      if (tgt.ref) { u.unreach = tgt.ref; u.unreachT = S.t + 25; }
    }
  }
}

export function botShoot(S, u, tgt, dt) {
  if (u.gunCd > 0 || u.flying || u.dead) return;
  if (inSafeZone(S, u.x, u.y) || inSafeZone(S, tgt.x, tgt.y)) return;
  if (wallBlocksView(S, u.x, u.y, tgt.x, tgt.y) || boulderLine(S, u.x, u.y, tgt.x, tgt.y)) return;
  shootAt(S, u, tgt.x, tgt.y);
}

function shootAt(S, u, tx, ty) {
  const d = dist(u.x, u.y, tx, ty);
  const base = Math.atan2(ty - u.y, tx - u.x);
  u.angle = base;
  const mz = 18;
  if (u.gun === 'shotgun' && d < 420) {
    u.gunCd = 0.34;
    for (let i = 0; i < 6; i++) {
      spawnBullet(S, { x: u.x + Math.cos(base) * mz, y: u.y + Math.sin(base) * mz, angle: base + S.rng.rand(-0.18, 0.18), speed: 1050, dmg: 8, from: u.owner, life: 0.95 });
    }
  } else if (u.gun === 'rifle') {
    u.gunCd = u.hard ? 0.12 : 0.16;
    let spread = u.hard ? 0.02 : 0.055;
    if (u.rifleLaser) spread *= 0.45;
    spawnBullet(S, { x: u.x + Math.cos(base) * mz, y: u.y + Math.sin(base) * mz, angle: base + S.rng.rand(-spread, spread), speed: 1500, dmg: u.hard ? 13 : 11, from: u.owner, life: 1.6 });
  } else {
    u.gunCd = 0.30;
    spawnBullet(S, { x: u.x + Math.cos(base) * mz, y: u.y + Math.sin(base) * mz, angle: base + S.rng.rand(-0.10, 0.10), speed: 1150, dmg: 7, from: u.owner, life: 1.6 });
  }
  S.events.push({ type: 'botShot', x: u.x, y: u.y, a: base });
}

function tryRocket(S, u, tx, ty, cd) {
  if (u.rkCd > 0 || u.rockets <= 0) return false;
  if (dist(u.x, u.y, tx, ty) < AI.ROCKET_MIN) return false;
  if (inSafeZone(S, u.x, u.y)) return false;
  u.rkCd = cd || 2.4; u.rockets--;
  const a = Math.atan2(ty - u.y, tx - u.x);
  spawnRocket(S, u.x + Math.cos(a) * 22, u.y + Math.sin(a) * 22, a, u.owner);
  return true;
}

function maybeGrenade(S, u, tgt) {
  if (u.grenades <= 0 || u.gnCd > 0) return;
  const d = dist(u.x, u.y, tgt.x, tgt.y);
  if (d < 150 || d > 380) return;
  // only vs actual combatants
  let manned = false;
  const p = S.player;
  if (!p.dead && dist2(tgt.x, tgt.y, p.x, p.y) < 70 * 70) manned = true;
  if (!manned) for (const o of S.units) if (!o.dead && o.owner !== u.owner && dist2(tgt.x, tgt.y, o.x, o.y) < 70 * 70) { manned = true; break; }
  if (!manned) return;
  u.gnCd = S.rng.rand(5, 8); u.grenades--;
  const a = Math.atan2(tgt.y - u.y, tgt.x - u.x);
  const speed = Math.min(420, d) * 5.4;
  S.grenades.push({ x: u.x + Math.cos(a) * 22, y: u.y + Math.sin(a) * 22, vx: Math.cos(a) * speed * 0.2, vy: Math.sin(a) * speed * 0.2, t: GRENADE.fuse, from: u.owner, bob: 0 });
  addFloat(S, u.x, u.y, 'grenade!', '#ffd0a0');
}

function dropFence(S, u, tgt) {
  if (u.fenceCd > 0) return;
  const stores = botStores(S, u);
  let have = 0;
  for (const s of stores) have += s.wood || 0;
  if (have < 10) return;
  const a = Math.atan2(tgt.y - u.y, tgt.x - u.x);
  const fx = u.x + Math.cos(a) * 30, fy = u.y + Math.sin(a) * 30;
  const gx = Math.floor(fx / TILE), gy = Math.floor(fy / TILE);
  if (S.structures.has(gx + ',' + gy)) return;
  let need = 10;
  for (const s of stores) {
    const take = Math.min(need, s.wood || 0);
    s.wood -= take; need -= take;
    if (need <= 0) break;
  }
  const pa = a + Math.PI / 2;
  S.fences.push({
    x: fx, y: fy, a: pa, owner: u.owner, hp: 200, max: 200, t: 60,
    x0: fx - Math.cos(pa) * 23, y0: fy - Math.sin(pa) * 23, x1: fx + Math.cos(pa) * 23, y1: fy + Math.sin(pa) * 23,
  });
  if (S.fences.length > 120) S.fences.shift();
  S.needFenceRefresh = true;
  u.fenceCd = 9;
}
