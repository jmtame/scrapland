// Team commander: refreshes each team's blackboard (economy status, role
// assignment with hysteresis, the single called raid target, loot/quarry/
// signal excursions), rotates the aggressor, sweeps doors and dead bases.
import { AI, UPKEEP, OWNER, SAFE_R, WORLD, TILE } from '../config.js';
import { dist, dist2 } from '../util.js';
import { tcOf, findBreach, worstDamagedWall, clearDeadBase } from '../building.js';
import { teamBank, expandTeamBases, raidTargetRec } from './build.js';
import { pickRaidTarget } from './unit.js';
import { aiSupplySignal } from '../worldevents.js';
import { addFloat } from '../state.js';

export function updateBrains(S, dt) {
  // door auto-close sweep
  for (const [k, w] of S.walls) {
    if (w.type === 'door' && w.open && w.closeT !== undefined && S.t > w.closeT) {
      w.open = false; S.nav.stamp++;
    }
  }
  // alive-base count (endgame driver). Unfounded teams count as alive so the
  // founding phase never reads as "endgame" and triggers an opening raid rush.
  let alive = 0;
  for (const t of S.teams) {
    if (t.eliminated) continue;
    if (t.bases.some(r => !r.dead) || S.units.some(u => u.owner === t.owner && u.unfounded && !u.eliminated)) alive++;
  }
  S.aliveBases = alive;

  // dead-base sweep every 2 s: mark recs whose TC is gone, clear debris once
  S.dbSweepT -= dt;
  if (S.dbSweepT <= 0) {
    S.dbSweepT = 2;
    for (const t of S.teams) for (const r of t.bases) {
      if (!r.dead && !tcOf(S, r.tcKey)) r.dead = true;
      if (r.dead && !r.cleared) { r.cleared = true; clearDeadBase(S, t.owner, r.hx, r.hy); }
    }
  }

  // aggressor rotation
  S.aggroT -= dt;
  if (S.aggroT <= 0) {
    const cur = S.teams.find(t => t.owner === S.aggressorOwner);
    const stillAssaulting = cur && !cur.eliminated && cur.brain.raidTarget && raidTargetRec(S, cur.brain.raidTarget) &&
      S.units.some(u => u.owner === cur.owner && !u.dead && !u.eliminated);
    if (stillAssaulting) S.aggroT = 8;
    else {
      const candidates = S.teams.filter(t => !t.eliminated && S.units.some(u => u.owner === t.owner && u.primary && !u.eliminated));
      if (candidates.length) {
        const pick = candidates[Math.floor(S.rng.next() * candidates.length)];
        S.aggressor = pick.id; S.aggressorOwner = pick.owner;
      }
      S.aggroT = S.rng.rand(35, 55);
    }
  }

  // per-team status + roles (0.4 s cadence, staggered)
  S.roleT -= dt;
  const doRoles = S.roleT <= 0;
  if (doRoles) S.roleT = 0.4;

  for (const team of S.teams) {
    if (team.eliminated) continue;
    const brain = team.brain;
    const recs = team.bases.filter(r => !r.dead);
    if (!recs.length) continue;
    const primary = S.units.find(u => u.owner === team.owner && u.primary && !u.eliminated);

    // -- work status (0.5 s) --
    brain.statusT -= dt;
    if (brain.statusT <= 0) {
      brain.statusT = 0.5;
      const rec = recs[0];
      brain.breach = findBreach(S, team, rec);
      brain.damaged = worstDamagedWall(S, team, rec);
      brain.sealed = !brain.breach;
      let structCount = 2, turrets = 0, floors = 0;
      for (const s of S.structures.values()) if (s.owner === team.owner) { structCount++; floors++; }
      for (const d of S.deploys.values()) if (d.owner === team.owner && d.type === 'turret') { structCount++; turrets++; }
      const bank = teamBank(S, team);
      const store = bank ? bank.wood + bank.stone + bank.metal : 0;
      brain.decaying = store < structCount * UPKEEP * 150;
      const turretGoal = team.hard ? 4 : team.weak ? 2 : 3;
      brain.ready = brain.sealed && turrets >= turretGoal && store > structCount * UPKEEP * 300 && floors >= (team.hard ? 6 : 4);
      brain.floors = floors; brain.turrets = turrets;
    }

    if (!doRoles) continue;

    // -- role assignment --
    const units = S.units.filter(u => u.owner === team.owner && !u.eliminated && !u.dead && !u.flying && !u.unfounded && !u.aboard);
    const near = (x, y) => recs.some(r => dist2(x, y, r.hx, r.hy) < 720 * 720);
    let atkCount = 0, cx = 0, cy = 0;
    const p = S.player;
    if (!p.dead && !p.inCopter && !S.ghost && near(p.x, p.y)) { atkCount++; cx += p.x; cy += p.y; }
    for (const u of S.units) {
      if (u.owner === team.owner || u.dead || u.flying || u.eliminated) continue;
      if (near(u.x, u.y)) { atkCount++; cx += u.x; cy += u.y; }
    }
    let urgent = false;
    for (const r of S.rockets) if (r.from !== team.owner && near(r.x, r.y)) { urgent = true; break; }
    if (!urgent) for (const s of S.satchels) if (s.from !== team.owner && near(s.x, s.y)) { urgent = true; break; }
    brain.attackers = atkCount; brain.urgent = urgent;
    brain.attack = atkCount > 0 || S.units.some(u => u.raid === team && u.state === 'raid' && !u.dead);
    brain.aggressor = team.owner === S.aggressorOwner || S.aliveBases <= 3;

    // hard-team intel tripwire
    let inbound = 0;
    if (team.hard) {
      for (const u of S.units) {
        if (u.owner === team.owner || u.dead || u.eliminated) continue;
        if (u.state === 'raid' && u.raid === team && recs.some(r => dist2(u.x, u.y, r.hx, r.hy) < AI.TRIPWIRE * AI.TRIPWIRE)) inbound++;
      }
    }
    const threat = Math.max(atkCount, inbound);
    const wantDef = urgent ? units.length : threat > 0 ? Math.min(threat + 1, units.length) : 0;
    if (atkCount > 0) { cx /= atkCount; cy /= atkCount; } else { cx = recs[0].hx; cy = recs[0].hy; }
    const sorted = [...units].sort((a, b) => dist2(a.x, a.y, cx, cy) - dist2(b.x, b.y, cx, cy));
    for (let i = 0; i < sorted.length; i++) sorted[i].defDuty = i < wantDef;

    // one sticky builder
    const bank = teamBank(S, team);
    const needBuild = !brain.sealed || (bank && bank.wood >= 40 && brain.floors < (team.hard ? 49 : 36));
    if (needBuild) brain.buildHoldT = S.t + 6;
    const free = units.filter(u => !u.defDuty);
    let builder = null;
    if (S.t < brain.buildHoldT && free.length >= 2) {
      builder = free.find(u => u.buildDuty) ||
        free.reduce((a, b) => dist2(a.x, a.y, recs[0].hx, recs[0].hy) < dist2(b.x, b.y, recs[0].hx, recs[0].hy) ? a : b, free[0]);
    }
    for (const u of units) u.buildDuty = u === builder;

    // rocketers + raid call
    if (urgent || (atkCount > 0 && !brain.aggressor)) {
      brain.raidTarget = null;
      for (const u of units) u.rocketer = false;
    } else if (brain.ready || brain.aggressor) {
      let explosives = 0;
      for (const u of units) explosives += u.rockets + u.satchels;
      const pool = units.filter(u => !u.defDuty && !u.buildDuty);
      const wantR = Math.min(S.aliveBases <= 4 ? 3 : 2, pool.length);
      let current = pool.filter(u => u.rocketer);
      for (const u of units) if (u.rocketer && (u.defDuty || u.buildDuty)) { u.rocketer = false; current = current.filter(o => o !== u); }
      if (current.length < wantR) {
        const cands = pool.filter(u => !u.rocketer)
          .sort((a, b) => (b.rockets + b.satchels) - (a.rockets + a.satchels) || dist2(a.x, a.y, recs[0].hx, recs[0].hy) - dist2(b.x, b.y, recs[0].hx, recs[0].hy));
        for (const c of cands) {
          if (current.length >= wantR) break;
          c.rocketer = true; current.push(c);
        }
      }
      const needExpl = brain.aggressor ? 2 : 4;
      const freeCount = units.filter(u => !u.defDuty).length;
      if (primary && freeCount >= 2 && explosives >= needExpl) {
        if (!brain.raidTarget || !raidTargetRec(S, brain.raidTarget)) brain.raidTarget = pickRaidTarget(S, team, primary);
      } else brain.raidTarget = null;
    } else {
      brain.raidTarget = null;
      for (const u of units) u.rocketer = false;
    }

    // hard-team loot runs
    if (team.hard && S.t > brain.lootCd && !S.units.some(u => u.owner === team.owner && u.lootRun)) {
      let prize = null;
      if (S.lockedCrate) prize = { x: S.lockedCrate.x, y: S.lockedCrate.y, kind: 'crate' };
      else if (S.airdrop) prize = { x: S.airdrop.x, y: S.airdrop.gy, kind: 'airdrop' };
      else {
        for (const L of S.loot) {
          if (L.kind !== 'rocket' && L.kind !== 'satchel') continue;
          let nearBase = false;
          for (const t2 of S.teams) {
            if (t2 === team || t2.eliminated) continue;
            if (t2.bases.some(r => !r.dead && dist2(L.x, L.y, r.hx, r.hy) < 800 * 800)) { nearBase = true; break; }
          }
          if (!nearBase) { prize = { x: L.x, y: L.y, kind: 'pile' }; break; }
        }
      }
      if (prize) {
        const runner = S.units
          .filter(u => u.owner === team.owner && !u.dead && !u.eliminated && !u.primary && !u.defDuty && !u.buildDuty && !u.rocketer && !u.monRun && u.state === 'gather')
          .sort((a, b) => dist2(a.x, a.y, prize.x, prize.y) - dist2(b.x, b.y, prize.x, prize.y))[0];
        if (runner) {
          const trek = dist(runner.x, runner.y, prize.x, prize.y);
          const minTrek = prize.kind === 'pile' ? 520 : 2400;
          if (trek > minTrek && trek < 4500) {
            runner.lootRun = { x: prize.x, y: prize.y, kind: prize.kind, until: S.t + (trek / AI.BOT_SPEED) * 1.8 + (prize.kind === 'crate' ? 170 : 20) };
            brain.lootCd = S.t + 45;
          }
        }
      }
    }
    // quarry runs
    if (S.quarry && S.quarry.owner !== team.owner && S.t > brain.qCd && !S.units.some(u => u.owner === team.owner && u.qRun)) {
      const runner = S.units
        .filter(u => u.owner === team.owner && !u.dead && !u.eliminated && !u.primary && !u.defDuty && !u.buildDuty && !u.rocketer && !u.monRun && !u.lootRun && u.state === 'gather')
        .sort((a, b) => dist2(a.x, a.y, S.quarry.x, S.quarry.y) - dist2(b.x, b.y, S.quarry.x, S.quarry.y))[0];
      if (runner) {
        const trek = dist(runner.x, runner.y, S.quarry.x, S.quarry.y);
        if (trek < 5200) {
          runner.qRun = { until: S.t + (trek / AI.BOT_SPEED) * 1.8 + 25 };
          brain.qCd = S.t + (team.hard ? 90 : 150);
        }
      }
    }
    // hard supply signals
    if (team.hard && primary && !S.signal && !S.plane && !S.airdrop && S.t > brain.sigCd) {
      const bank2 = teamBank(S, team);
      const funds = primary.scrap + (bank2 ? bank2.scrap : 0);
      if (funds >= AI.SIGNAL_COST + 60) {
        const rec = recs[0];
        for (let s = 0; s < 8; s++) {
          const a = (s / 8) * Math.PI * 2;
          const x = rec.hx + Math.cos(a) * 620, y = rec.hy + Math.sin(a) * 620;
          if (x < 300 || y < 300 || x > WORLD.w - 300 || y > WORLD.h - 300) continue;
          if (dist(x, y, S.world.shop.x, S.world.shop.y) < SAFE_R) continue;
          if (!S.world.onLand(x, y) || S.world.lakeAt(x, y)) continue;
          let pay = AI.SIGNAL_COST;
          const fromPocket = Math.min(pay, primary.scrap);
          primary.scrap -= fromPocket; pay -= fromPocket;
          if (pay > 0 && bank2) bank2.scrap -= pay;
          aiSupplySignal(S, x, y);
          brain.sigCd = S.t + S.rng.rand(150, 240);
          addFloat(S, rec.hx, rec.hy - 40, 'supply signal!', '#c9a0ff');
          break;
        }
      }
    }
  }

  // expansions
  for (const team of S.teams) if (!team.eliminated) expandTeamBases(S, team, dt);

  // bounty: alive non-player team with most kills
  let bk = 0, bid = null;
  for (const team of S.teams) {
    if (team.eliminated) continue;
    let kills = 0;
    for (const u of S.units) if (u.owner === team.owner) kills += u.kills;
    if (kills > bk) { bk = kills; bid = team.id; }
  }
  S.bounty = bk > 0 ? bid : null;

  // winner detection (metrics)
  if (!S.metrics.winner) {
    const alive2 = S.teams.filter(t => !t.eliminated);
    if (alive2.length === 1 && S.teams.length > 1) {
      S.metrics.winner = alive2[0].owner;
      S.metrics.decisiveT = S.t;
    }
  }
}
