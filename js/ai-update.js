"use strict";
// Enemy-AI brain: per-bot state machine (gather/defend/raid/trade/return), team roles + raid
// coordination, anti-stuck watchdogs. References globals from the main game modules at call time.

/* ---------------- main update ---------------- */

function updateEnemies(dt) {
  game.aggroT = (game.aggroT || 0) - dt;

  // Auto-close bot doors shortly after the unit has passed through.
  for (const [k, w] of game.walls) {
    if (w.type === 'door' && w.open && w._closeT && (game.t || 0) > w._closeT) {
      w.open = false;
      w._closeT = 0;
    }
  }

  const alive = game.enemies.filter(b => !b.eliminated && baseAlive(b));
  game._aliveBases = alive.filter(b => b.primary).length;   // endgame escalation: when few teams remain, everyone goes all-in

  if (game.aggroT <= 0 && alive.length) {
    const aggroTeam = game.aggressorOwner && game._team && game._team[game.aggressorOwner];
    const stillAssaulting = aggroTeam && aggroTeam.raidTarget && typeof baseAlive === 'function' &&
      baseAlive(aggroTeam.raidTarget) && game._team[game.aggressorOwner].sealed !== undefined &&
      game.enemies.some(e => e.owner === game.aggressorOwner && !e.eliminated && !e.dead);
    if (stillAssaulting) {
      // Don't rotate away mid-assault — keep pressing until the target base dies (sustained
      // pressure finishes the kill, so the collapse continues toward one winner).
      game.aggroT = 8;
    } else {
      // Rotate a fresh AGGRESSOR TEAM — the symmetry-breaker that ends the mutual-defense stalemate.
      const prims = alive.filter(b => b.primary);
      if (prims.length) {
        const a = prims[randi(0, prims.length - 1)];
        game.aggressor = a.id;
        game.aggressorOwner = a.owner;
      }
      game.aggroT = rand(35, 55);
    }
  }
  // ---- Periodic DEAD-BASE debris sweep: a base whose TC is gone (cracked, decayed, or otherwise
  // lost) gets its orphaned walls/floors/turrets cleared ONCE — keyed on that base's OWN centre so
  // coverage is full regardless of how far apart a team's bases are. clearDeadBase already fires the
  // instant a TC cracks; this catches every other way a base dies, so ranging gatherers never circle
  // dead-base litter and the field stays clean. ----
  if ((game._dbSweepT = (game._dbSweepT || 0) - dt) <= 0) {
    game._dbSweepT = 2;
    if (game.teamBases) {
      for (const ow in game.teamBases) {
        const recs = game.teamBases[ow];
        if (!recs) continue;
        for (const r of recs) {
          if (!r._cleared && !baseRecAlive(r)) {
            r._cleared = true;
            if (typeof clearDeadBase === 'function') {
              clearDeadBase(r.owner !== undefined ? r.owner : ow, r.hx, r.hy);
            }
          }
        }
      }
    }
  }
  // ---- Per-team work status (refreshed ~2x/sec): drives the defend / economy / raid-prep split so
  // a team's units aren't all doing the same thing. ----
  game._team = game._team || {};
  const upkeepRate = (typeof UPKEEP !== 'undefined' ? UPKEEP : 0.0075);
  for (const b of game.enemies) {
    if (!b.primary || b.eliminated) continue;
    if ((b._stT = (b._stT || 0) - dt) <= 0 || !game._team[b.owner]) {
      b._stT = 0.5;
      const sealed = !botBreached(b);
      let structCount = 2;
      for (const [, s] of game.structures) {
        if (s.owner === b.owner && (s.type === 'floor' || s.type === 'trifloor')) structCount++;
      }
      for (const [, d] of game.deploys) {
        if (d.owner === b.owner && d.type === 'turret') structCount++;
      }
      const tc = game.deploys.get(b.tcKey);
      const store = tc && tc.store ? (tc.store.wood + tc.store.stone + tc.store.metal) : 0;
      const turrets = botOwnerTurrets(b.owner);
      const turretGoal = (b.hard ? 4 : b.weak ? 2 : 3);
      game._team[b.owner] = {
        sealed,
        decaying: store < structCount * upkeepRate * 150,   // <2.5 min of upkeep banked -> base is slipping
        // Sealed + enough turrets + TC holds >=5 min of upkeep -> safe to go raiding (a low enough
        // bar that teams commit offense instead of turtling forever).
        ready: (sealed && turrets >= turretGoal && store > structCount * upkeepRate * 300 &&
          botBaseFloors(b.owner) >= (b.hard ? 6 : 4)),
        attack: false
      };
    } else {
      game._team[b.owner].attack = false;
    }
  }
  // Mark every team whose base is under attack (being raided, or a hostile at the perimeter).
  for (const o of game.enemies) {
    if (o.dead || o.eliminated || o.flying) continue;
    for (const b of game.enemies) {
      if (!b.primary || b.eliminated || b.owner === o.owner) continue;
      const st = game._team[b.owner];
      if (!st || st.attack) continue;
      const alertR = (b.hard ? 960 : 760);
      if ((o.raid && o.raid.owner === b.owner) || dist2(o.x, o.y, b.hx, b.hy) < alertR * alertR) {
        st.attack = true;
      }
    }
  }
  // ---- ROLE assignment (~2x/sec): PROPORTIONAL DEFENSE so the whole team doesn't drop everything
  // for every skirmish. Match the attacker count (+1); only an URGENT rocket/satchel raid pulls
  // everyone. ----
  if ((game._roleT = (game._roleT || 0) - dt) <= 0) {
    game._roleT = 0.4;
    for (const ow in game._team) {
      const st = game._team[ow];
      const recs = teamBaseRecs(ow).filter(baseRecAlive);
      if (!recs.length) { continue; }
      const near = (x, y) => {
        for (const r of recs) {
          if (dist2(x, y, r.hx, r.hy) < 720 * 720) return true;
        }
        return false;
      };

      // Count distinct hostile UNITS at our base + their centroid.
      let atkCount = 0;
      let atkX = 0;
      let atkY = 0;
      if (!player.dead && !player.inCopter && !game.ghost && near(player.x, player.y)) {
        atkCount++;
        atkX += player.x;
        atkY += player.y;
      }
      for (const o of game.enemies) {
        if (o.owner === ow || o.dead || o.eliminated || o.flying) continue;
        if (near(o.x, o.y)) {
          atkCount++;
          atkX += o.x;
          atkY += o.y;
        }
      }

      // An enemy rocket/satchel near a base = about to lose -> ALL hands.
      let urgent = false;
      if (game.rockets) {
        for (const r of game.rockets) {
          if (r.from !== ow && near(r.x, r.y)) { urgent = true; break; }
        }
      }
      if (!urgent && game.satchels) {
        for (const s of game.satchels) {
          if (s.from !== ow && near(s.x, s.y)) { urgent = true; break; }
        }
      }
      st.attackers = atkCount;
      st.urgent = urgent;
      // The rotating AGGRESSOR commits to offense; once the field thins to <=3 teams EVERY team
      // goes full-aggressor (final showdown -> the last bases fall fast and the match resolves).
      st.aggressor = (ow === game.aggressorOwner) || ((game._aliveBases || 10) <= 3);

      const units = game.enemies.filter(e =>
        e.owner === ow && !e.eliminated && !e.dead && !e.flying && !e._unfounded && !e._aboard);
      // Match attackers + at most 1 extra (2 enemies -> 3 max); explosive raid -> everyone. Defense
      // stays HONEST — a base only falls to a real, coordinated raid, never an artificial nerf.
      const wantDef = urgent ? units.length : (atkCount > 0 ? Math.min(atkCount + 1, units.length) : 0);
      if (wantDef > 0) {
        const cx = atkCount ? atkX / atkCount : recs[0].hx;
        const cy = atkCount ? atkY / atkCount : recs[0].hy;
        units.sort((p, q) => dist2(p.x, p.y, cx, cy) - dist2(q.x, q.y, cx, cy));   // the units NEAREST the attack defend; the rest keep their economic job
        units.forEach((u, i) => { u._defDuty = i < wantDef; });
      } else {
        units.forEach(u => { u._defDuty = false; });
      }
      // ---- Assign ONE BUILDER: a single unit owns base maintenance/expansion so GATHERERS never
      // break stride to build. Builder = nearest non-defender to home; cleared when there's no
      // build work. ----
      const teamLead = teamPrimary(ow);
      const leadTC = teamLead ? game.deploys.get(teamLead.tcKey) : null;
      const tcWood = leadTC && leadTC.store ? (leadTC.store.wood || 0) : 0;
      const needBuild = teamLead &&
        (!st.sealed || (tcWood >= 40 && botBaseFloors(ow) < (teamLead.hard ? 49 : 36)));   // a hole to seal, or resources + room to grow
      const freeUnits = units.filter(u => !u._defDuty);
      // STICKY builder: keep the SAME unit across passes. Recomputing "nearest free unit" every
      // 0.4s makes the builder identity flicker, briefly tagging a gatherer and resetting its
      // toNode run. Sticky -> the gatherer stays gathering.
      const prevBuilder = units.find(u => u._buildDuty);
      units.forEach(u => { u._buildDuty = false; });
      // HYSTERESIS: hold a builder for ~6s after the last frame there was work, so a transient TC
      // dip (the builder just spent the stockpile on a build tick) doesn't bounce the role out for
      // a pass (avoids a residual build<->toNode blip).
      if (needBuild) st._buildHoldT = (game.t || 0) + 6;
      if ((needBuild || (game.t || 0) < (st._buildHoldT || 0)) && freeUnits.length >= 2) {
        // Keep >=1 gatherer; keep the existing builder if still free, else the closest free unit builds.
        let builder = (prevBuilder && freeUnits.indexOf(prevBuilder) >= 0) ? prevBuilder :
          freeUnits.slice().sort((p, q) =>
            dist2(p.x, p.y, recs[0].hx, recs[0].hy) - dist2(q.x, q.y, recs[0].hx, recs[0].hy))[0];
        if (builder) builder._buildDuty = true;
      }
      // ---- The TEAM LEAD (primary) decides RAIDS + names DEDICATED ROCKETERS. 1-2 free units
      // carry the breach explosives (they arm via a TRADE RUN — rockets are trade-zone-only —
      // funded by the team's banked TC scrap); the rest are COVER. Units join the ONE called
      // target -> they group instead of each whimsically picking a base. ----
      if (st.urgent || (atkCount > 0 && !st.aggressor)) {
        // Overrun -> all hands defend, no rocketers (but the AGGRESSOR presses through a mere skirmish).
        st.raidTarget = null;
        units.forEach(u => { u._rocketer = false; });
      } else if (st.ready || st.aggressor) {
        const prim = teamPrimary(ow);
        // Team-wide arsenal + free (non-defender) units.
        let explosives = 0;
        let freeCount = 0;
        for (const u of units) {
          explosives += (u.rockets || 0) + (u.satchels || 0);
          if (!u._defDuty) freeCount++;
        }
        const rocketerPool = units.filter(u => !u._defDuty && !u._buildDuty);   // rocketer candidates (not defending / building)
        // 2 dedicated rocketers per team (3 once <=4 bases remain — the survivors are the tough
        // METAL-walled forts that need a heavier concentrated breach load). They carry the breach;
        // the non-primary rocketer leaves a scrap reserve in the TC so worker-hiring/upkeep isn't
        // starved.
        const wantRocketers = Math.min((game._aliveBases || 10) <= 4 ? 3 : 2, rocketerPool.length);
        units.forEach(u => {
          if (u._rocketer && rocketerPool.indexOf(u) < 0) u._rocketer = false;   // a rocketer pulled onto defend/build duty loses the tag
        });
        // Top up to wantRocketers, sticky otherwise: prefer the already-most-armed, then nearest
        // home (fast rearm).
        let rocketerN = rocketerPool.filter(u => u._rocketer).length;
        if (rocketerN < wantRocketers) {
          const candidates = rocketerPool.filter(u => !u._rocketer).sort((p, q) =>
            ((q.rockets || 0) + (q.satchels || 0)) - ((p.rockets || 0) + (p.satchels || 0)) ||
            dist2(p.x, p.y, recs[0].hx, recs[0].hy) - dist2(q.x, q.y, recs[0].hx, recs[0].hy));
          for (const u of candidates) {
            if (rocketerN >= wantRocketers) break;
            u._rocketer = true;
            rocketerN++;
          }
        }
        // A low arsenal bar commits a target sooner (the dedicated rocketers bring the real breach
        // load, so a small starting arsenal is fine).
        const needExpl = st.aggressor ? 2 : 4;
        if (prim && freeCount >= 2 && explosives >= needExpl) {
          // The lead calls ONE target and keeps it until it dies (the squad masses on it instead
          // of fizzling).
          if (!st.raidTarget || !(typeof baseAlive === 'function' && baseAlive(st.raidTarget))) {
            st.raidTarget = botRaidTarget(prim);
          }
        } else {
          st.raidTarget = null;
        }
      } else {
        st.raidTarget = null;
        units.forEach(u => { u._rocketer = false; });
      }
    }
  }

  updateTransports(dt);
  expandTeamBases(dt);   // established teams build EXTRA bases (monument / raid-forward / survival)
  for (const b of game.enemies) updateBot(b, dt);
}
// Nearest hostile to OUR base (used to converge the team onto a raid).
function botHomeAttacker(b) {
  let best = null;
  let bestD = 1e18;
  const aggroR = (b.hard ? 1100 : 900);
  for (const o of game.enemies) {
    if (o === b || o.dead || o.eliminated || o.flying || o.owner === b.owner) continue;
    const d = dist2(o.x, o.y, b.hx, b.hy);
    if (d < bestD && (d < aggroR * aggroR || (o.raid && o.raid.owner === b.owner))) {
      bestD = d;
      best = { x: o.x, y: o.y };
    }
  }
  return best;
}

// Heterogeneous raid appetite -> a ready team sends most (not all) of its units raiding.
function botWantRaid(b, S) {
  if (b._endgame || (S && S.aggressor)) return true;   // endgame all-in + the whole rotating AGGRESSOR team always press
  if (b._raidBias === undefined) b._raidBias = Math.random();
  // Raid only when the LEAD has CALLED a target (S.raidTarget) -> the squad commits to one base
  // together, no whimsical solo raids.
  if (S && S.ready && S.raidTarget && b._raidBias < 0.72 && botBaseFloors(b.owner) >= 4) return true;
  return false;
}

// A gatherer commits to gathering until it's carrying this much, THEN banks — fewer, fuller bank
// trips (less gather<->return cycling).
const GATHER_LOAD = 300;
// ---- DECISION LAYER (committed tasks): a gatherer keeps gathering until one of these "task
// complete" conditions holds; only then does botPlan pick the next task. NEVER re-decided per
// frame. ----
function botGatherDone(b, ctx) {
  const { breach, damaged, S } = ctx;
  const carried = b.inv.wood + b.inv.stone + b.inv.metal;
  if (b._monRun) return false;   // mid monument RUN -> stay committed (the run ends itself when cleared/full)
  if (carried >= GATHER_LOAD || (b.scrap || 0) > 40) return true;   // full -> bank
  if (breach || (damaged && botHas(b, 'wood', 12))) return true;    // base needs sealing/repair
  // DEDICATED ROCKETER arms a breach load — rockets are TRADE-ZONE-ONLY; bypass the 'safe/ready'
  // gate so a perpetual skirmish can't starve offense (funded by own scrap, a sellable load, or
  // the banked TC hoard).
  if (!b.ally && b._rocketer && b.rockets < 8 && game.shop && b.role !== 'turtle' &&
      ((b.scrap || 0) >= 12 || carried >= 100 ||
       ((((game.deploys.get(b.tcKey) || {}).store || {}).scrap || 0) >= 24))) return true;
  // RESTOCK explosives to a stockpile (primary->12, others->6); the primary also makes a run just
  // to convert the team's BANKED scrap hoard into rockets.
  if (!b.ally && b.rockets < (b.primary ? 12 : 6) &&
      ((b.scrap || 0) >= 24 || carried >= 120 ||
       (b.primary && (((game.deploys.get(b.tcKey) || {}).store || {}).scrap || 0) >= 48)) &&
      game.shop && ((S && S.aggressor) || botSafe(b) || (S && S.ready)) && b.role !== 'turtle') return true;
  // A raid is on.
  if ((game.t > 120 || b._endgame) && (game.t || 0) > (b._raidCd || 0) &&
      (b.role !== 'turtle' || b._endgame) &&
      (b.rockets > 0 || (b.satchels || 0) > 0 || b._endgame) && botWantRaid(b, S)) return true;
  if (b.ally) {
    b.raidUrge = (b.raidUrge || rand(12, 24));
    if (b.raidUrge <= 0) return true;
  }
  return false;
}
// Choose the next committed task (only called when the current one completes / aborts).
function botPlan(b, ctx) {
  const { breach, damaged, S, homeD } = ctx;
  const carried = b.inv.wood + b.inv.stone + b.inv.metal;
  if (breach && !botHas(b, 'wood', 40)) return 'gather';   // too poor to seal -> gather wood first
  if (breach || (damaged && botHas(b, 'wood', 12))) return (homeD > 180) ? 'return' : 'gather';   // SEAL/repair the base (rush home if away)
  // DEDICATED ROCKETER arms a breach load before the full->bank check (it SELLS its load at the
  // shop anyway) — trade-zone-only, bypasses the under-attack gate, drains the TC hoard.
  if (!b.ally && b._rocketer && b.rockets < 8 && game.shop && b.role !== 'turtle' &&
      ((b.scrap || 0) >= 12 || carried >= 100 ||
       ((((game.deploys.get(b.tcKey) || {}).store || {}).scrap || 0) >= 24))) return 'trade';
  if ((b.scrap || 0) > 40 || carried >= GATHER_LOAD) return 'return';   // full -> bank it
  // RESTOCK explosives to a stockpile (primary->12, others->6) + the primary drains the team's
  // banked-scrap hoard into rockets.
  if (!b.ally && b.rockets < (b.primary ? 12 : 6) &&
      ((b.scrap || 0) >= 24 || carried >= 120 ||
       (b.primary && (((game.deploys.get(b.tcKey) || {}).store || {}).scrap || 0) >= 48)) &&
      game.shop && ((S && S.aggressor) || botSafe(b) || (S && S.ready)) && b.role !== 'turtle') return 'trade';
  if ((game.t > 120 || b._endgame) && (game.t || 0) > (b._raidCd || 0) &&
      (b.role !== 'turtle' || b._endgame) &&
      (b.rockets > 0 || (b.satchels || 0) > 0 || b._endgame) && botWantRaid(b, S)) {
    const transport = teamTransport(b.owner);
    let tgt = null;
    if (transport && transport.state !== 'fly' && transport.state !== 'unload' &&
        transport.riders.length < TRANSPORT.seats) {
      tgt = botFarthestEnemy(b);   // far base + a ferry seat -> use the transport
    }
    if (!tgt) tgt = (S && S.raidTarget && baseAlive(S.raidTarget)) ? S.raidTarget : botRaidTarget(b);   // JOIN the lead's called target (group up)
    if (tgt) {
      b.raid = tgt;
      b._raidCd = (game.t || 0) + 2;
      return 'raid';
    }
  }
  if (b.ally && (b.raidUrge || 1) <= 0) {
    const tgt = botRaidTarget(b);
    if (tgt) {
      b.raid = tgt;
      b.raidUrge = rand(24, 44);
      return 'raid';
    }
    b.raidUrge = rand(8, 14);
  }
  return 'gather';
}

// The unit's current high-level destination (where the anti-stuck watchdog should phase it toward
// when it's stuck).
function botObjective(b) {
  if (b.state === 'return') return { x: b.hx, y: b.hy };
  if (b.state === 'raid' && b.raid) {
    const key = b.raid.tcKey || b.raid.boxKey;
    if (key) {
      const comma = key.indexOf(',');
      return { x: (+key.slice(0, comma) + 0.5) * TILE, y: (+key.slice(comma + 1) + 0.5) * TILE };
    }
  }
  if (b.state === 'trade' && game.shop) return { x: game.shop.x, y: game.shop.y };
  if (b._navX !== undefined) return { x: b._navX, y: b._navY };   // gather/other: head to the current travel target (node / monument / roam point)
  return null;
}
function updateBot(b, dt) {
  if (b.eliminated) return;
  if (!baseAlive(b)) {
    // Home base destroyed -> fall back to another of the team's bases; only eliminated when the
    // team has NO bases left.
    if (!rehomeUnit(b)) {
      botEliminate(b);
      return;
    }
  }
  const tc = game.deploys.get(b.tcKey);
  if (tc && tc.store) tc.store.wood = Math.max(tc.store.wood, 40);   // keep base alive while bot lives

  if (b.dead) {
    b.respawnT -= dt;
    if (b.respawnT <= 0) {
      b.dead = false;
      b.hp = b.max;
      if (!b.primary) {
        const recs = teamBaseRecs(b.owner).filter(baseRecAlive);
        if (recs.length > 1) {
          const S = game._team && game._team[b.owner];
          const tgt = (S && S.raidTarget && (typeof baseAlive === 'function' && baseAlive(S.raidTarget))) ?
            S.raidTarget : null;
          let r = null;
          if (tgt && (b._rocketer || b._wasRaid || b.state === 'raid')) {
            // FORWARD RESPAWN: a committed raider comes back at the team base NEAREST the raid
            // target so the assault PERSISTS instead of fizzling on a long trek from a random base
            // (pairs with the 'raid-forward' base expandTeamBases builds toward the enemy).
            let bestD = 1e18;
            for (const rr of recs) {
              const d = dist2(rr.hx, rr.hy, tgt.hx, tgt.hy);
              if (d < bestD) {
                bestD = d;
                r = rr;
              }
            }
          }
          if (!r) r = recs[randi(0, recs.length - 1)];   // gatherers / no active raid -> spread out & staff new bases
          b.tcKey = r.tcKey;
          b.boxKey = r.boxKey;
          b.hx = r.hx;
          b.hy = r.hy;
          b.doorX = r.doorX;
          b.doorY = r.doorY;
          b.doorGy = r.doorGy;
        }
      }
      b.x = b.hx;
      b.y = b.hy + 50;
      b.flying = false;
      b.state = 'gather';
      if (b.copter) {   // only the primary has a copter; parked well west
        b.copter.destroyed = false;
        b.copter.hp = b.copter.max;
        b.copter.x = b.hx - TILE * 4;
        b.copter.y = b.hy;
      }
    }
    return;
  }
  b.gunCd -= dt;
  b.rkCd -= dt;
  b.think -= dt;
  b.expandT = (b.expandT || 0) - dt;
  b.retaliateT = (b.retaliateT || 0) - dt;
  b.disengageT = (b.disengageT || 0) - dt;
  b.fenceCd = (b.fenceCd || 0) - dt;
  b.gnCd = (b.gnCd || 0) - dt;
  b.regenT = (b.regenT || 0) - dt;
  if (b.regenT <= 0 && b.hp < b.max) b.hp = Math.min(b.max, b.hp + 9 * dt);   // regenerate health like the player

  b._hireT = (b._hireT || 0) - dt;
  if (b.primary && !b._unfounded && b._hireT <= 0) {   // team-level WORKER HIRE pulse: runs in EVERY state, so a primary that lives in raid/defend still converts banked scrap into workers (build/trade hires alone stall once the team stops idling at home)
    b._hireT = 2;
    const tcH = game.deploys.get(b.tcKey);
    const bank = (b.scrap || 0) + ((tcH && tcH.store) ? (tcH.store.scrap || 0) : 0);
    if (bank >= WORKER_COST + 24) botHireWorker(b);    // keep 24 scrap back so the next trade visit can still fund the 2-rocket breach floor
  }

  // Riding the transport heli -> just ride along (the transport drops us near the target).
  if (b._aboard) {
    const tr = b._aboard;
    if (tr.destroyed || tr.riders.indexOf(b) < 0) {
      b._aboard = null;
      b.flying = false;
    } else {
      b.x = tr.x;
      b.y = tr.y;
      b.flying = true;
      b.gunCd -= dt;
      b.rkCd -= dt;
      return;
    }
  }
  // Copter shot down -> drop back to foot (visible, fights normally; no invisible flyer).
  if (b.flying && !b._aboard && (!b.copter || b.copter.destroyed)) b.flying = false;
  // ONLY the trade state flies the minicopter — any other state (a threat interrupting a trade
  // run, etc.) lands at once so a bot is NEVER stuck airborne / invisible mid-combat.
  if (b.flying && !b._aboard && b.state !== 'trade') {
    b.flying = false;
    if (b.copter) {
      b.copter.spin = 0;
      b.copter.x = b.x;
      b.copter.y = b.y;
      b.copter.vx = 0;
      b.copter.vy = 0;
    }
  }
  botUseDoors(b);   // swing open any of our own doors we're approaching (close shortly after)
  // Keep EVERY parked minicopter (incl. workers' bought ones) off the footprint & on the side
  // sheltered from the nearest enemy base.
  if (b.copter && !b.copter.destroyed && !b.flying && !b._aboard) {
    if ((b._parkChk = (b._parkChk || 0) - dt) <= 0) {
      b._parkChk = 1.0;
      botParkCopterClear(b);
    }
  }

  // ---- ONE unified anti-stuck watchdog: a non-combat unit that barely changes its NET position
  // over ~6s, while NOT actively gathering/building/repairing/defending, is stuck — a door-routing
  // cycle, a lake/obstacle orbit, monument milling, or just idling at base. Phase it toward its
  // current objective. This ALSO enforces "don't sit in base unless building/repairing": an idle
  // home-sitter has ~0 net movement and isn't maintaining, so it gets pushed back out to work. ----
  const movedSince = (b._pmX !== undefined) ? Math.hypot(b.x - b._pmX, b.y - b._pmY) : 0;
  b._pmX = b.x;
  b._pmY = b.y;
  // A raider is "busy" only when it's actually AT the enemy base pressing it — a raider still
  // navigating can get stuck and must be caught.
  let raidSieging = false;
  if (b.state === 'raid' && b.raid) {
    const key = b.raid.tcKey || b.raid.boxKey;
    if (key) {
      const comma = key.indexOf(',');
      raidSieging = Math.hypot((+key.slice(0, comma) + 0.5) * TILE - b.x,
        (+key.slice(comma + 1) + 0.5) * TILE - b.y) < 360;
    }
  }
  // Genuinely-busy states: harvesting, flying, fighting, sieging a base, just built/repaired.
  const exempt = b.gathering || b.flying || b.state === 'defend' || raidSieging ||
    (game.t - (b._maintT || -1e9)) < 2.5;
  if (!exempt) {
    if (!b._npH) b._npH = [];
    if ((b._npT = (b._npT || 0) + dt) >= 0.5) {   // sample position every 0.5s, keep the last ~6s
      b._npT = 0;
      b._npH.push(b.x, b.y);
      if (b._npH.length > 24) b._npH.splice(0, 2);
    }
    if (b._npH.length >= 24 && (b._escapeT || 0) <= 0) {
      let minX = 1e9;
      let minY = 1e9;
      let maxX = -1e9;
      let maxY = -1e9;
      for (let i = 0; i < b._npH.length; i += 2) {
        const x = b._npH[i];
        const y = b._npH[i + 1];
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
      // Confined to a ~480px box for 6s without productive work -> stuck OR idling/oscillating at
      // base. Catches door cycles, lake/obstacle orbits, monument milling, home loitering —
      // regardless of oscillation phase. NO wall-phasing: cut a door near base, re-route in the field.
      if (Math.max(maxX - minX, maxY - minY) < 480) {
        const homeD = Math.hypot(b.hx - b.x, b.hy - b.y);
        if (homeD < TILE * 7) {
          // Stuck at/in our base -> CUT A DOOR out (botFreeWall aims _escAng at the new doorway).
          if (!botFreeWall(b)) {
            const a = Math.atan2(b.y - b.hy, b.x - b.hx) || rand(0, TAU);
            b._escAng = a + rand(-0.4, 0.4);
          }
        } else {
          // Stuck in the field -> drop the goal & head to a fresh one.
          const obj = botObjective(b);
          let outX;
          let outY;
          if (obj && Math.hypot(obj.x - b.x, obj.y - b.y) > 120) {
            outX = obj.x;
            outY = obj.y;
          } else {
            const a = Math.atan2(b.y - b.hy, b.x - b.hx) || rand(0, TAU);
            outX = b.x + Math.cos(a) * 340;
            outY = b.y + Math.sin(a) * 340;
          }
          b._escAng = Math.atan2(outY - b.y, outX - b.x) + rand(-0.25, 0.25);
        }
        b._escapeT = 1.0;
        b._npH.length = 0;
        if (b._tgtNode) {
          b._skipNode = b._tgtNode;
          b._skipT = (game.t || 0) + 8;
          b._tgtNode = null;
        }
        b._monCd = (game.t || 0) + 14;
        b._postA = undefined;
      }
    }
  } else {
    b._npH = null;
    b._npT = 0;
  }
  // ---- Stuck AT our own base: a non-exempt unit lingering within ~6 tiles of home (not returning
  // to deposit, not building/defending) for too long is door-cycling -> drive it back out the door
  // (cut one if the way is blocked). Catches it regardless of how wide it oscillates. ----
  {
    const homeDist = Math.hypot(b.hx - b.x, b.hy - b.y);
    if (!exempt && homeDist < TILE * 6) {
      // Near home >9s while NOT building/defending/gathering -> loitering/looping at base -> drive it out.
      if ((b._baseT = (b._baseT || 0) + dt) > 9) {
        b._baseT = 0;
        // Boxed inside -> cut a door; otherwise head straight OUT, away from home.
        if (!botFreeWall(b)) {
          const a = Math.atan2(b.y - b.hy, b.x - b.hx) ||
            (b.doorGy !== undefined ? Math.PI / 2 : rand(0, TAU));
          b._escAng = a + rand(-0.3, 0.3);
        }
        b._escapeT = 1.6;
        // Bank the load & switch to economy; a brief raid cooldown so it actually GATHERS instead
        // of instantly flipping back to raid (the TC holds all loot, so botSafe stays true).
        if (b.state === 'raid' || b.state === 'return') {
          if (typeof depositHome === 'function') depositHome(b);
          b.state = 'gather';
          b.raid = null;
          b._wasRaid = false;
          b._raidCd = (game.t || 0) + 8;
        }
        if (b._tgtNode) {
          b._skipNode = b._tgtNode;
          b._skipT = (game.t || 0) + 8;
          b._tgtNode = null;
        }
        b._monCd = (game.t || 0) + 12;
      }
    } else {
      b._baseT = 0;
    }
  }
  // ---- LONG home-pin: a worker confined within ~6 tiles of its TC for >12s CONTINUOUSLY is
  // looping its own footprint (door-routing on a big base) — it keeps briefly flagging 'gather' on
  // a node hugging the wall, which resets the exempt-gated watchdogs above so they never fire. A
  // real gatherer ranges out to the resource ring; one pinned home is stuck. Continuous timer
  // (reset only on leaving the zone), so brief harvest-touches don't mask it. Primaries (base
  // anchors) and active builders are exempt. FIRST hit -> gentle eviction (cut a door, phase out,
  // skip the node it was circling). If STILL pinned a second time -> it's genuinely trapped in its
  // own geometry while CIRCLING (never wall-pressed, so the hard-escape never engaged): SNAP it
  // just outside its own door — a short hop on its OWN base, the guaranteed un-stick.
  // (Deliberately does NOT force far-ranging: that pushes units to path around LIVE enemy bases
  // and circle in the open.) ----
  if (!b.primary && b.state !== 'defend' && b.state !== 'trade' && !b.flying && !b._unfounded &&
      !raidSieging && (game.t - (b._maintT || -1e9)) >= 2.5) {
    if (Math.hypot(b.hx - b.x, b.hy - b.y) < TILE * 6) {
      if ((b._hpinT = (b._hpinT || 0) + dt) > 12) {
        b._hpinT = 0;
        b._hpinN = (b._hpinN || 0) + 1;
        if (b._hpinN >= 2 && b.doorX !== undefined) {
          // Still trapped after one eviction -> SNAP clear of the footprint, south of our own door
          // (>TILE*6 from home so the pin zone is actually exited, not re-entered).
          b.x = b.doorX + (b._lane || 0);
          b.y = b.hy + TILE * 7;
          b._path = null;
          b._navX = b.x;
          b._navY = b.y;
          b._hpinN = 0;
          b._blkT = 0;
          b._stuck = 0;
        } else {
          if (typeof botFreeWall !== 'function' || !botFreeWall(b)) {
            const a = Math.atan2(b.y - b.hy, b.x - b.hx) || rand(0, TAU);
            b._escAng = a + rand(-0.3, 0.3);
          }
          b._escapeT = 1.4;
        }
        if (b._tgtNode) {
          b._skipNode = b._tgtNode;
          b._skipT = (game.t || 0) + 8;
          b._tgtNode = null;
        }
        b._monCd = (game.t || 0) + 10;
      }
    } else {
      b._hpinT = 0;
      b._hpinN = 0;
    }
  } else {
    b._hpinT = 0;
    b._hpinN = 0;
  }
  // ---- Hard cap on time anywhere in a monument's NO-BUILD ZONE: never linger or circle a monument. ----
  {
    const m = (typeof botNearestMonument === 'function') ? botNearestMonument(b) : null;
    const clearing = m && botMonumentBarrel(b, m) && Math.hypot(m.x - b.x, m.y - b.y) < m.r + 220;   // actively smashing crates -> productive, don't evict
    const inZone = !clearing && m && (((typeof inMonZone === 'function') && inMonZone(b.x, b.y)) ||
      Math.hypot(m.x - b.x, m.y - b.y) < m.r + 150);
    if (inZone) {
      // 10s max LOITERING in the zone (not while clearing), then cool down for 45s.
      if ((b._monStay = (b._monStay || 0) + dt) > 10) {
        b._monStay = 0;
        b._monCd = (game.t || 0) + 45;
        if (b._tgtNode) {
          b._skipNode = b._tgtNode;
          b._skipT = (game.t || 0) + 8;
          b._tgtNode = null;
        }
        // Head straight OUT of the no-build zone (no circling).
        const a = Math.atan2(b.y - m.y, b.x - m.x) || rand(0, TAU);
        b._escAng = a + rand(-0.3, 0.3);
        b._escapeT = 1.2;
      }
    } else {
      b._monStay = Math.max(0, (b._monStay || 0) - dt * 2);
    }
  }

  // ---- Anti-stuck: a continuous-blocked timer drives escalation so a unit can NEVER stay frozen.
  // <0.8s blocked -> soft escape (cut a door / slip past our own turret/box; walls stay solid).
  // STILL blocked past ~1.4s = truly enclosed -> a BRIEF full phase toward the door (guaranteed
  // un-stick; rare, so own-wall crossings stay ~0). ----
  if (b._blocked) b._blkT = (b._blkT || 0) + dt;
  else b._blkT = 0;
  b._escapeT = (b._escapeT || 0) - dt;
  if (b._escapeT <= 0) {
    if (b._blocked) b._stuck = (b._stuck || 0) + dt;
    else b._stuck = 0;
    if (b._stuck > 0.8) {
      b._stuck = 0;
      b._escapeT = 0.9;
      // Boxed in -> CUT A DOOR out; botFreeWall aims _escAng at the new doorway. Fallback heading
      // = toward our base door.
      if (!botFreeWall(b)) {
        const dx = (b.doorX !== undefined ? b.doorX : b.hx) - b.x;
        const dy = (b.doorY !== undefined ? b.doorY : b.hy) - b.y;
        b._escAng = Math.atan2(dy, dx) + rand(-0.8, 0.8);
      }
    }
  }
  if (b._escapeT > 0) {
    b._hardEscape = (b._blkT || 0) > 1.4;   // soft escape isn't freeing us (fully walled in / coastal pocket) -> phase everything briefly toward the heading
    // Soft escape: slip past our own turret/box (walls stay solid) toward the door / cut doorway.
    b._escaping = true;
    botMoveTo(b, b.x + Math.cos(b._escAng) * 240, b.y + Math.sin(b._escAng) * 240, 150, dt);
    b._escaping = false;
    b._hardEscape = false;
    if (b.state === 'raid' && b.raid && typeof breachIfBlocked === 'function') breachIfBlocked(b, b.raid);   // boxed against an ENEMY wall mid-raid -> blow through it
    return;
  }
  b._blocked = false;

  // EARLY GAME: no base yet -> gather, then the primary builds the FIRST base at the site (runs
  // AFTER the anti-stuck above, so founding units never get stuck).
  if (b._unfounded) {
    b._act = b.primary ? 'found' : 'gather';
    // ALWAYS DEFEND while gathering — without this the unfounded path never fights back and early
    // teams get mauled by animals.
    if (!(typeof inSafeZone === 'function' && inSafeZone(b.x, b.y))) {
      const threat = (b.retaliateT > 0 && b.threatX !== undefined ? { x: b.threatX, y: b.threatY } : null) ||
        botThreat(b) || botNearThreat(b);
      if (threat) {   // an animal/hostile is on us -> shoot it (pistol) instead of mining through the damage
        b._act = 'defend';
        b.gathering = false;
        botCombatStep(b, threat, dt);
        return;
      }
    }
    const siteDist = Math.hypot(b.hx - b.x, b.hy - b.y);
    const carried = b.inv.wood + b.inv.stone + b.inv.metal;
    if (b.primary && carried >= 220 && siteDist < TILE * 2) {   // enough material AT the site -> found it
      foundTeamBase(b);
      return;
    }
    if (((b.primary && carried >= 220) || (!b.primary && carried >= 70)) && siteDist > TILE * 2) {
      botGoto(b, b.hx + (b._lane || 0), b.hy + (b._hoff || 0), 155, dt);   // loaded -> bring it to the site
      return;
    }
    if (!b.primary && siteDist < TILE * 3 && carried > 0) {
      // Worker delivers its haul to the primary's founding fund.
      const prim = teamPrimary(b.owner);
      if (prim) {
        for (const r of ['wood', 'stone', 'metal']) {
          prim.inv[r] = (prim.inv[r] || 0) + b.inv[r];
          b.inv[r] = 0;
        }
      }
    }
    if ((b._escapeT || 0) <= 0) {
      const node = botNearestWood(b) || botNearestNode(b) || botAnyNode(b);
      if (node) {
        const d = Math.hypot(node.x - b.x, node.y - b.y);
        if (d > node.r + 22) {
          b._tgtNode = node;
          botGoto(b, node.x, node.y, 150, dt);
        } else {
          b.angle += angDiff(b.angle, Math.atan2(node.y - b.y, node.x - b.x)) * Math.min(1, dt * 8);
          b.gathering = true;
          b.swing = (b.swing || 0) + dt * 9;
          if (b.think <= 0) {
            const got = Math.min(8, node.amount);
            node.amount -= got;
            b.inv[node.base] = (b.inv[node.base] || 0) + got;
            b.think = 0.5;
            burst(node.x, node.y, '#caa07a', 3, 90);
          }
        }
      } else {
        botGoto(b, b.hx + (b._lane || 0), b.hy + (b._hoff || 0), 140, dt);
      }
    }
    return;
  }

  // All-in when the field thins OR after ~7 min (the TIME trigger breaks the no-first-elimination
  // stalemate -> matches always resolve; hard teams win the all-in melee via armor/aim/tougher bases).
  b._endgame = (game._aliveBases || 10) <= 6 || (game.t || 0) > 420;
  // Fight back at a shooter within local view (the movement layer routes to it without jitter;
  // far snipers are out of REACT_R so we never charge across the map).
  const underFire = b.retaliateT > 0 && b.threatX !== undefined &&
    dist2(b.x, b.y, b.threatX, b.threatY) < REACT_R * REACT_R &&
    !(typeof inSafeZone === 'function' && inSafeZone(b.x, b.y));
  // ALL reactive threat detection is LOCAL (viewport of the body).
  let th = (underFire ? { x: b.threatX, y: b.threatY } : null) || botThreat(b) || botNearThreat(b);
  const breach = (!b.ally) ? botBreached(b) : null;                  // a hole in our perimeter?
  const damaged = (!b.ally && !breach) ? botDamagedWall(b) : null;   // a wall that's been chipped below 60%
  const S = (!b.ally && game._team) ? game._team[b.owner] : null;    // my team's work status (defend / economy / raid-prep)
  const homeD = Math.hypot(b.hx - b.x, b.hy - b.y);
  // In OR right around the trade safe zone -> no combat at all (weapons disabled there).
  const nearSafe = game.shop && dist2(b.x, b.y, game.shop.x, game.shop.y) < (SAFE_R + 140) * (SAFE_R + 140);
  if (nearSafe) th = null;
  if (!th) b.defendT = 0;
  if (b.ally) b.raidUrge = (b.raidUrge || rand(12, 24)) - dt;   // allied workers build a raid appetite over time

  // === COMMITTED TASK SELECTION — re-plan ONLY on a high-priority interrupt or when the CURRENT
  // task completes. The task is NEVER re-decided per frame, so units don't cycle actions. ===
  // INTERRUPT: defend a LOCAL threat (proportional — only an assigned defender, someone personally
  // shot, an urgent explosive raid, or an ally). A committed raider / endgamer ignores distant
  // fire and keeps pressing.
  //
  // An ARMED dedicated rocketer mid-raid PRESSES THE BREACH — it ignores incoming fire (cover
  // units screen it) unless critically hurt or its OWN base is under an explosive raid. This is
  // what stops raids aborting into 'defend' (the mutual-defense loop).
  const rocketerPress = b._rocketer && (b.state === 'raid' || b._wasRaid) && b.raid &&
    (typeof baseAlive === 'function' && baseAlive(b.raid)) && (b.rockets || 0) > 0 &&
    b.hp >= b.max * 0.20 && !(S && S.urgent);
  const wantDefend = th && !nearSafe && !rocketerPress &&
    (b._defDuty || (underFire && !b._wasRaid) || (S && S.urgent) || b.ally)
    && !((b._wasRaid || b._endgame) && Math.hypot(th.x - b.x, th.y - b.y) >= 230)
    // AGGRESSOR team only breaks off for a point-blank threat — otherwise it keeps pressing the
    // assault (breaks the mutual-defense stalemate).
    && !((S && S.aggressor) && Math.hypot(th.x - b.x, th.y - b.y) >= 160);
  if (wantDefend) {
    // HOLD the combat posture after a threat blinks out of view (longer for an assigned defender
    // in an ACTIVE siege) -> no defend<->gather cycling.
    b.state = 'defend';
    b._defHold = (b._defDuty && S && (S.attack || S.urgent)) ? 2.5 : 0.7;
    b._defTgt = { x: th.x, y: th.y, vx: th.vx || 0, vy: th.vy || 0 };
  } else {
    if (b.state === 'defend') {
      // Threat gone for >0.7s -> resume the economy.
      b._defHold = (b._defHold || 0) - dt;
      if (b._defHold <= 0) {
        b.state = 'gather';
        b.defendT = 0;
        b._defTgt = null;
      }
    }
    if (b.state === 'raid' && (!b.raid || !baseAlive(b.raid) || (S && S.decaying))) {
      // Raid target dead / own base slipping -> stop raiding.
      b.raid = null;
      b.state = 'gather';
    }
    if (b._defDuty && S && (S.attack || S.urgent) && homeD > 340 && b.state !== 'raid' && b.state !== 'trade') {
      b.state = 'return';   // assigned defender + base under attack + I'm far -> RALLY HOME (then defend locally on arrival)
    } else if (b.state === 'gather' && botGatherDone(b, { breach, damaged, S })) {
      b.state = botPlan(b, { breach, damaged, S, homeD });   // gather task COMPLETE -> plan the next committed task (bank / trade / raid / seal)
    }
    // 'return' / 'trade' / 'raid' stay COMMITTED — their handlers complete them (set state back
    // to 'gather'), so they are not re-decided here.
  }
  // ACTION ground-truth (debug overlay + metrics); the gather branches below refine it to
  // gather/toNode/monument/build/loot.
  b._act = b.state;

  if (b.state === 'defend') {
    b.defendT = (b.defendT || 0) + dt;
    // Engage the live threat, or the remembered one while it's briefly out of view (the 0.7s hold).
    const foe = th || b._defTgt;
    if (!foe) {
      b.state = 'gather';
      b.defendT = 0;
      return;
    }
    const raiding = !!(b.raid && baseAlive(b.raid));   // mid-raid -> press the assault, don't drift home
    const carrying = (b.inv.wood + b.inv.stone + b.inv.metal) > 60 || (b.scrap || 0) > 20;
    const critical = b.hp < b.max * 0.20;
    const hurt = b.hp < b.max * (carrying ? 0.45 : 0.28);   // low HP -> sometimes break off (more readily if carrying loot)
    // Raiders only break off when CRITICAL; in the endgame nobody retreats (fight to the death).
    if (((hurt && !raiding) || critical) && !b._endgame && !b._retreat &&
        Math.random() < (carrying ? 0.05 : 0.02)) {
      b._retreat = true;
    }
    if (b._retreat) {
      if (b.hp >= b.max * 0.85 || b.defendT > 9) {
        b._retreat = false;   // recovered / safe -> back to normal
      } else {
        // Flee toward home, fire while backpedaling.
        b.disengageT = Math.max(b.disengageT || 0, 2.5);
        if (typeof wallBlocksView !== 'function' || !wallBlocksView(b.x, b.y, foe.x, foe.y)) {
          botShoot(b, foe.x, foe.y);
        }
        botGoto(b, b.hx + (b._lane || 0), b.hy + (b._hoff || 0), 175, dt);
        if (Math.hypot(b.hx - b.x, b.hy - b.y) < TILE * 1.5) {
          b._retreat = false;
          b.state = 'return';
        }
        return;
      }
    }
    botCombatStep(b, foe, dt);    // shared, jitter-free engage (LOS fire, dead-band back-off, timed strafe)
    botMaybeGrenade(b, foe);      // lob a grenade if one's held and the foe is in the sweet spot
    const breakT = raiding ? 2.2 : 7;   // raiders re-commit to the assault fast; defenders hold the line longer
    if (b.defendT > breakT) {
      b.defendT = 0;
      if (raiding) {
        b.state = 'raid';
      } else {
        b.disengageT = 6;
        b.state = 'gather';
      }
    }
    return;
  }

  if (b.state === 'raid') {
    const tgt = b.raid;
    b._wasRaid = true;
    if (!tgt || !baseAlive(tgt)) {   // base already dead -> head home
      b._wasRaid = false;
      b.state = 'return';
      return;
    }
    if (b.rockets <= 0 && (b.satchels || 0) <= 0 && !b._endgame) {
      // Out of explosives -> can't breach a fortified base; go BUY more (or gather to afford them)
      // instead of orbiting it.
      b._wasRaid = false;
      b.raid = null;
      b.state = (game.shop && ((b.scrap || 0) >= 8 || (b.inv.wood + b.inv.stone + b.inv.metal) >= 100)) ?
        'trade' : 'gather';
      return;
    }
    // LONG raid -> ferry the squad in the transport heli instead of the long walk.
    if (!b._aboard) {
      const destKey = tgt.tcKey || tgt.boxKey;
      const destTile = destKey.split(',').map(Number);
      const destX = destTile[0] * TILE + TILE / 2;
      const destY = destTile[1] * TILE + TILE / 2;
      if (Math.hypot(destX - b.hx, destY - b.hy) > 2800) {
        const tr = teamTransport(b.owner);
        if (tr && (tr.state === 'idle' || tr.state === 'board') && tr.riders.length < TRANSPORT.seats) {
          if (Math.hypot(tr.x - b.x, tr.y - b.y) < 70) {
            transportBoard(b, tr);
            tr.state = 'board';
            return;
          }
          botGoto(b, tr.x, tr.y, 170, dt);
          return;
        }
      }
    }
    const targetKey = tgt.tcKey || tgt.boxKey;
    const targetTile = targetKey.split(',').map(Number);
    const tcX = targetTile[0] * TILE + TILE / 2;
    const tcY = targetTile[1] * TILE + TILE / 2;
    let squadAt = 0;
    for (const e of game.enemies) {
      if (e.owner !== b.owner || e.dead || e.eliminated || e.flying) continue;
      if (e.state === 'raid' && e.raid === tgt && dist2(e.x, e.y, tcX, tcY) < 560 * 560) squadAt++;
    }
    // RARELY ASSAULT ALONE: only press the close fight (siege/satchel/breach at the walls, under
    // turret fire) with the squad, or all-in in the endgame.
    const grouped = squadAt >= 2 || b._endgame;
    // SIEGE: a GROUPED raider pressing an enemy Tool Cupboard steadily wears it down (defenders
    // win by killing the raider first) -> raids are reliably lethal and the match always resolves.
    {
      const siegeKey = targetKey;
      const siegeX = tcX;
      const siegeY = tcY;
      if (grouped && Math.hypot(siegeX - b.x, siegeY - b.y) < (b._endgame ? 420 : 300) &&
          !(typeof wallBlocksView === 'function' && wallBlocksView(b.x, b.y, siegeX, siegeY))) {
        const tcDeploy = game.deploys.get(siegeKey);
        if (tcDeploy) {
          // A GROUPED raider with LINE OF SIGHT to the TC wears it down — raiders must BREACH the
          // walls/doors first to expose it (NO sieging through walls; bases must be cracked by a
          // real breach). Reach is 420 so a FAR raider can't drain a TC; the endgame rate is FAST
          // (140/s) so a committed raider in range cracks an exposed cupboard before the fort's
          // turrets grind it down. HARD raiders siege faster.
          tcDeploy.hp -= (b._endgame ? 140 : (b.hard ? 24 : 14)) * dt;
          // VISIBLE siege feedback (chips). The minimap red pulse is reserved for explosive hits
          // (rockets/satchels) — see explode().
          if (typeof burst === 'function') burst(siegeX, siegeY, '#caa24a', 2, 90);
          if (tcDeploy.hp <= 0) {   // crack the TC -> clear the dead base's debris
            spillContainer(siegeX, siegeY, tcDeploy);
            game.deploys.delete(siegeKey);
            burst(siegeX, siegeY, COL.boxLt, 18, 220);
            addFloat(siegeX, siegeY - 20, 'TC destroyed!', '#ff7a4a');
            clearDeadBase(tgt.owner, siegeX, siegeY);
          }
        }
      }
    }
    const box = game.deploys.get(tgt.boxKey);
    const loot = box && box.store ? (box.store.wood + box.store.stone + box.store.metal) : 0;
    const STAND = 420;
    const breachAim = botBreachAim(b, tgt);   // CHEAPEST-PATH piece to blow (nearest wall/DOOR; doors preferred). null once the shell is open.
    const turret = botPathTurret(b, tgt);     // a target turret that can currently shoot us
    const turretExposed = turret &&
      !(typeof wallBlocksView === 'function' && wallBlocksView(b.x, b.y, turret.x, turret.y));   // exposed (not behind a wall) -> rocketable
    // AIM PRIORITY (rocketer): an EXPOSED path turret that can shoot us -> the breach wall/door ->
    // the exposed loot box -> the TC itself.
    let aimX;
    let aimY;
    if (turretExposed) {
      aimX = turret.x;
      aimY = turret.y;
    } else if (breachAim) {
      aimX = breachAim.x;
      aimY = breachAim.y;
    } else if (loot > 0) {
      const boxTile = tgt.boxKey.split(',').map(Number);
      aimX = boxTile[0] * TILE + TILE / 2;
      aimY = boxTile[1] * TILE + TILE / 2;
    } else {
      aimX = tcX;
      aimY = tcY;
    }
    const d = Math.hypot(aimX - b.x, aimY - b.y);
    if (!breachAim && !turretExposed && loot > 0 && d < TILE * 0.9) {   // exposed box -> grab it
      b.inv.wood += box.store.wood;
      b.inv.stone += box.store.stone;
      b.inv.metal += box.store.metal;
      box.store.wood = box.store.stone = box.store.metal = 0;
      addFloat(b.x, b.y - 22, 'looted!', '#e08a36');
      return;
    }
    if (b.inv.wood + b.inv.stone + b.inv.metal > 300 && b.rockets <= 0 && (b.satchels || 0) <= 0) {
      b.state = 'return';   // overloaded + spent -> bank
      return;
    }
    // ROCKETER: blow the aim piece from a firing STANDOFF (~320px) — approach the standoff, not
    // the wall itself, so it doesn't walk in past min-range and never shoot.
    if (b.rockets > 0) {
      if (d > 380) {
        // SPREAD the squad in an arc around the target (perpendicular offset per unit) so they
        // don't single-file into one stuck-looking column.
        const ux = (b.x - aimX) / d;
        const uy = (b.y - aimY) / d;
        const lane = (((b.id || 0) % 5) - 2) * 70;
        const standX = aimX + ux * 320 - uy * lane;
        const standY = aimY + uy * 320 + ux * lane;
        botGoto(b, standX, standY, 150, dt);
        breachIfBlocked(b, tgt);
        return;
      }
      if (d < ROCKET_MIN) {   // splash-too-close -> step back
        const backAng = Math.atan2(aimY - b.y, aimX - b.x) + Math.PI;
        botMoveTo(b, b.x + Math.cos(backAng) * 120, b.y + Math.sin(backAng) * 120, 120, dt);
        return;
      }
      b.angle += angDiff(b.angle, Math.atan2(aimY - b.y, aimX - b.x)) * Math.min(1, dt * 8);
      botTryRocket(b, aimX, aimY, { cd: 2.2 });
      return;
    }
    if ((b.satchels || 0) > 0 && grouped) {
      if (d < 100 && b.rkCd <= 0) {
        b.satchels--;
        b.rkCd = 2.6;
        game.satchels.push({ x: aimX, y: aimY, t: 2.0, from: b.owner });
        addFloat(aimX, aimY - 16, 'satchel!', '#e08a36');
      }
      botGoto(b, aimX, aimY, 150, dt);
      breachIfBlocked(b, tgt);
      return;
    }
    // COVER role (no explosives): suppress the nearest enemy DEFENDER so the rocketers can work;
    // else stage with the squad. Never idle.
    {
      const defender = (typeof botNearThreat === 'function') ? botNearThreat(b) : null;
      if (defender) {
        const defDist = Math.hypot(defender.x - b.x, defender.y - b.y);
        if (defDist < 480) {
          b.angle += angDiff(b.angle, Math.atan2(defender.y - b.y, defender.x - b.x)) * Math.min(1, dt * 8);
          botShoot(b, defender.x, defender.y);
          return;
        }
        botGoto(b, defender.x, defender.y, 150, dt);
        return;
      }
    }
    if (grouped) {
      // DE-BUNCH the grouped stage: each unit holds a perpendicular lane so the squad fans across
      // the wall instead of single-filing onto one breach point.
      const distToAim = Math.max(1, Math.hypot(aimX - b.x, aimY - b.y));
      const ux = (b.x - aimX) / distToAim;
      const uy = (b.y - aimY) / distToAim;
      const lane = (((b.id || 0) % 5) - 2) * 64;
      botGoto(b, aimX - uy * lane, aimY + ux * lane, 150, dt);
      return;
    }
    if (d < STAND - 40) {
      const backAng = Math.atan2(aimY - b.y, aimX - b.x) + Math.PI;
      botMoveTo(b, b.x + Math.cos(backAng) * 120, b.y + Math.sin(backAng) * 120, 120, dt);
      return;
    }
    botGoto(b, aimX, aimY, 150, dt);
    return;
  }

  if (b.state === 'return') {
    b._wasRaid = false;
    const d = Math.hypot(b.hx - b.x, b.hy - b.y);
    b._retT = (b._retT || 0) + dt;
    const speed = (game._team && game._team[b.owner] && !game._team[b.owner].sealed) ? 215 : 160;   // base has a gap -> hustle home to reseal it fast
    botGoto(b, b.hx + (b._lane || 0), b.hy + (b._hoff || 0), speed, dt);   // walk to the Tool Cupboard (units must REACH the TC to bank)
    if (d < TILE * 1.5) {   // at the TC -> deposit + go back to work
      depositHome(b);
      b.state = 'gather';
      b._retT = 0;
      b._homing = false;
    } else if (b._retT > 7 && !b._homing && !botBreached(b)) {
      // Timeout banks a stranded load, but a unit returning to SEAL a breach keeps homing until
      // it arrives (never abandons the repair).
      depositHome(b);
      b.state = 'gather';
      b._retT = 0;
    }
    return;
  }

  // Trade: sell a load for scrap at the trade store (the team FLIES the copter when it has one).
  if (b.state === 'trade') {
    const shop = game.shop;
    const SR = (typeof SAFE_R !== 'undefined' ? SAFE_R : 620);
    if (!shop) {
      b.state = 'return';
      return;
    }
    if (!b.tradeDone) {   // outbound: reach the trade zone
      // DE-BUNCH: fan units around the shop on a golden-angle ring instead of all converging on
      // the exact centre (they still land inside SR*0.55 to trade) — kills the shared-waypoint
      // pile-up/circling.
      const fanAng = ((b.id || 0) * 2.39996);
      const fanX = Math.cos(fanAng) * SR * 0.34;
      const fanY = Math.sin(fanAng) * SR * 0.34;
      if (Math.hypot(shop.x - b.x, shop.y - b.y) > SR * 0.55) {
        if (b.copter && !b.copter.destroyed) botFlyTo(b, shop.x + fanX, shop.y + fanY, dt, SR * 0.5);
        else botGoto(b, shop.x + fanX, shop.y + fanY, 150, dt);
        return;
      }
      // SELL surplus.
      let got = 0;
      for (const [r, per, rate] of [['wood', 100, 6], ['stone', 100, 9], ['metal', 50, 10]]) {
        while (b.inv[r] >= per) {
          b.inv[r] -= per;
          b.scrap = (b.scrap || 0) + rate;
          got += rate;
        }
      }
      if (got > 0) addFloat(b.x, b.y - 20, '+' + got + ' scrap', '#ffe07a');
      // Withdraw the team's BANKED scrap so the hoard actually gets spent — the PRIMARY drains it
      // fully; a non-primary ROCKETER leaves a scrap reserve so the primary can still hire workers
      // / pay upkeep (don't starve the economy lever); leftovers are re-banked at home.
      if (b.primary || b._rocketer) {
        const tcw = game.deploys.get(b.tcKey);
        if (tcw && tcw.store && (tcw.store.scrap || 0) > 0) {
          const reserve = (b._rocketer && !b.primary) ? 100 : 0;
          const take = Math.max(0, (tcw.store.scrap || 0) - reserve);
          if (take > 0) {
            b.scrap = (b.scrap || 0) + take;
            tcw.store.scrap -= take;
          }
        }
      }
      // BUY what the team needs (the reason teams fly here): a transport (for far raids) FIRST,
      // then EXPLOSIVES (rockets + satchels — not craftable), a grenade, HQM
      let bought = false;
      // A base is too far to walk-raid -> get the ferry.
      if (b.primary && (b.scrap || 0) >= TRANSPORT.cost && !teamTransport(b.owner) && botFarthestEnemy(b)) {
        if (buyTransport(b)) bought = true;
      }
      // PROGRESSION: upgrade the starting pistol to a rifle/shotgun (weak teams stay pistol).
      if (!b.weak && b.gun === 'pistol' && (b.scrap || 0) >= 10) {
        b.scrap -= 10;
        b.gun = (b.shotgun ? 'shotgun' : 'rifle');
        bought = true;
        addFloat(b.x, b.y - 58, '+' + b.gun, '#cfe0a0');
      }
      // HARD teams grab the rifle LASER SIGHT early (cheap accuracy upgrade, prioritized).
      if (b.hard && !b.rifleLaser && b.gun === 'rifle' && (b.scrap || 0) >= 10) {
        b.scrap -= 10;
        b.rifleLaser = true;
        bought = true;
        addFloat(b.x, b.y - 58, '+laser', '#ff6a6a');
      }
      // A minimal 2-rocket breach/defense floor comes before anything else.
      while (b.rockets < 2 && (b.scrap || 0) >= 12) {
        b.scrap -= 12;
        b.rockets++;
        bought = true;
      }
      // WORKERS NEXT — each hire compounds the economy, so hiring outranks stockpiles; loops
      // toward the team cap while scrap lasts.
      if (b.primary && b.rockets >= 2) {
        while (botHireWorker(b)) bought = true;
      }
      // Then the real BREACH stockpile (up to 12), funded by the team's banked scrap, so raids
      // can actually crack a base.
      while (b.rockets < 12 && (b.scrap || 0) >= 12) {
        b.scrap -= 12;
        b.rockets++;
        bought = true;
      }
      // Satchels are bought here too (the only source).
      while ((b.satchels || 0) < 4 && (b.scrap || 0) >= 8) {
        b.scrap -= 8;
        b.satchels = (b.satchels || 0) + 1;
        bought = true;
      }
      if ((b.grenades || 0) < 2 && (b.scrap || 0) >= 8) {
        b.scrap -= 8;
        b.grenades = (b.grenades || 0) + 1;
        bought = true;
      }
      // HARD teams PRIORITIZE personal protection: body armor + facemask to max, then the rifle
      // laser sight (tighter aim) — bought right after the breach essentials.
      if (b.hard) {
        while ((b.scrap || 0) >= 14 && (b.bodyArmor || 0) < 3) {
          b.scrap -= 14;
          b.bodyArmor = (b.bodyArmor || 0) + 1;
          bought = true;
          addFloat(b.x, b.y - 46, '+armor', '#9fb0c8');
        }
        while ((b.scrap || 0) >= 12 && (b.facemask || 0) < 3) {
          b.scrap -= 12;
          b.facemask = (b.facemask || 0) + 1;
          bought = true;
        }
      }
      // Hard bots convert SURPLUS scrap into HQM (multiple per visit) -> they actually
      // armor-plate the whole base.
      while (b.hard && (b.scrap || 0) >= 20 && (b.hqm || 0) < 60) {
        b.scrap -= 14;
        b.hqm = (b.hqm || 0) + 10;
        bought = true;
      }
      // SURPLUS -> buy an extra team minicopter (a team can field MULTIPLE), AFTER combat
      // essentials so it never starves rockets. Reuses the per-unit copter logic
      // (fly/land/trade/park/wreck).
      if ((!b.copter || b.copter.destroyed) && !b._aboard && (b.scrap || 0) >= MINICOPTER_COST &&
          teamCopterCount(b.owner) < (b.hard ? 3 : 2)) {
        b.scrap -= MINICOPTER_COST;
        b.copter = { x: b.x - TILE * 2, y: b.y, angle: 0, rotor: 0, spin: 0, vx: 0, vy: 0, hp: 160, max: 160, destroyed: false };
        bought = true;
        addFloat(b.x, b.y - 46, '+minicopter', '#bfe3ff');
      }
      if (bought) addFloat(b.x, b.y - 34, 'resupplied', '#bfe3ff');
      b.tradeDone = true;
      return;
    }
    // Fly home, land at the parking spot, then walk in.
    if (b.flying) {
      const parkX = b.hx - TILE * 4;
      const parkY = b.hy;
      if (botFlyTo(b, parkX, parkY, dt, 46)) {
        b.flying = false;
        if (b.copter) {
          b.copter.spin = 0;
          b.copter.x = b.x;
          b.copter.y = b.y;
        }
        b.tradeDone = false;
        b.state = 'return';
      }
      return;
    }
    b.tradeDone = false;
    b.state = 'return';
    return;
  }

  // ---- gather ----
  b._wasRaid = false;
  b._retT = 0;
  const carried = b.inv.wood + b.inv.stone + b.inv.metal;
  const atHome = Math.hypot(b.hx - b.x, b.hy - b.y) < 200;   // only truly at the base
  b.gathering = false;

  // BUILDER duty: ONE assigned unit owns proactive maintenance/EXPANSION (committed task) ->
  // gatherers never break stride to build.
  if (b._buildDuty) {
    // The builder GATHERS efficiently like everyone else and builds OPPORTUNISTICALLY when it's
    // home (its deposit run) — building/sealing are positionless (they draw the TC stockpile via
    // botStores). Yanking it home every frame for proactive expansion causes oscillation: botBuild
    // only acts every expandT (2.5-6s), so between ticks it falls through to gather, walks out,
    // and gets yanked home again (a toNode<->build loop). So only an URGENT breach rushes it home;
    // proactive build happens when it's already home, so it never oscillates AND stays in the economy.
    if (breach) {
      b._act = 'build';
      if (!atHome) {   // a HOLE -> rush home and seal NOW
        botGoto(b, b.hx + (b._lane || 0), b.hy + (b._hoff || 0), BOT_SPEED, dt);
        return;
      }
      if (carried > 0 || (b.scrap || 0) > 0) depositHome(b);
      botSealWall(b, breach);
      b._maintT = game.t;
      return;
    }
    if (atHome) {   // home on a deposit run -> repair / build a tick, then carry on
      if (carried > 0 || (b.scrap || 0) > 0) depositHome(b);
      if (damaged) {
        botRepairWall(b, damaged);
        b._act = 'build';
        b._maintT = game.t;
        return;
      }
      if (b.expandT <= 0) {
        b.expandT = rand(2.5, 6);
        if (botBuild(b)) {
          b._act = 'build';
          b._maintT = game.t;
          return;
        }
      }
    }
    // Otherwise -> fall through and GATHER (committed node), never yanked home for proactive build.
  }

  // Gatherers passing home: deposit + URGENT reactive seal/repair only (instant, no 'build' return
  // -> no churn); proactive expansion is the builder's job.
  if (atHome) {
    if (carried > 0 || (b.scrap || 0) > 0) depositHome(b);
    const breach2 = botBreached(b);
    if (breach2) {   // seal a hole (instant) — keep moving to gather after
      if (botSealWall(b, breach2)) b._maintT = game.t;
    } else {
      const dmg = botDamagedWall(b);
      if (dmg && botRepairWall(b, dmg)) b._maintT = game.t;
    }
  }
  // ANTI-IDLE: a unit MILLING (barely net-moving) near home, not harvesting/building -> deposit,
  // then commit STRAIGHT to a node. Gated on LOW NET MOVEMENT (not just distance) so it catches
  // idlers anywhere around a big 10x10 base WITHOUT hijacking units actually walking out to gather
  // (those net-move fast). Box->TC fills the TC so workers run out of build tasks and would
  // otherwise idle.
  {
    if ((b._aiT = (b._aiT || 0) + dt) >= 1) {
      b._aiT = 0;
      b._aiNet = (b._aiPx !== undefined) ? Math.hypot(b.x - b._aiPx, b.y - b._aiPy) : 999;
      b._aiPx = b.x;
      b._aiPy = b.y;
    }
  }
  if ((b._aiNet || 999) < 70 && Math.hypot(b.hx - b.x, b.hy - b.y) < 900 && !b.gathering &&
      (game.t - (b._maintT || -1e9)) >= 2.5) {
    // Barely moved this second + near home + not harvesting/building = milling.
    b._idleT = (b._idleT || 0) + dt;
    if (b._idleT > 1.5) {
      b._idleT = 0;
      if (carried > 0 || (b.scrap || 0) > 0) depositHome(b);
      const idleNode = botPickNode(b);
      if (idleNode) {
        const d = Math.hypot(idleNode.x - b.x, idleNode.y - b.y);
        if (d > idleNode.r + 22) {
          b._act = 'toNode';
          botGoto(b, idleNode.x, idleNode.y, BOT_SPEED, dt);
          return;
        } else {
          b._act = 'gather';
          b.angle += angDiff(b.angle, Math.atan2(idleNode.y - b.y, idleNode.x - b.x)) * Math.min(1, dt * 8);
          b.gathering = true;
          b.swing = (b.swing || 0) + dt * 9;
          if (b.think <= 0) {
            const got = Math.min(b.jack ? 24 : 8, idleNode.amount);
            idleNode.amount -= got;
            b.inv[idleNode.base] = (b.inv[idleNode.base] || 0) + got;
            b.think = 0.5;
            burst(idleNode.x, idleNode.y, '#caa07a', 3, 90);
          }
          return;
        }
      } else {
        b._act = 'roam';
        botRoam(b, dt);
        return;
      }
    }
  } else {
    b._idleT = 0;
  }

  // (Bank-when-full / go-buy-rockets / launch-raid are decided by the committed PLANNER above —
  // the gather handler PURELY gathers: loot interrupt, airdrop, monument run, node harvest.)

  // Dropped loot nearby -> COMMIT to ONE item (botNearestLoot); abandon just THAT item if it's
  // unreachable, not all loot.
  const lootItem = botNearestLoot(b);
  if (lootItem) {
    b._act = 'loot';
    const d = Math.hypot(lootItem.x - b.x, lootItem.y - b.y);
    if (d > 22) {
      // Stuck >1.5s reaching THIS item -> skip it for 6s (try other loot / resume work), never
      // freeze in 'loot'.
      if (b._blocked) {
        if ((b._lootStuck = (b._lootStuck || 0) + dt) > 1.5) {
          b._lootSkip = lootItem;
          b._lootSkipT = (game.t || 0) + 6;
          b._lootTgt = null;
          b._lootStuck = 0;
        }
      } else {
        b._lootStuck = 0;
      }
      botGoto(b, lootItem.x, lootItem.y, 170, dt);
    }
    return;
  }

  // Race to an active airdrop (high-value) and crack it open.
  if (game.airdrop) {
    const a = game.airdrop;
    const tx = a.x;
    const ty = (a.fall < 1 ? a.gy : a.y);
    const dropDist = Math.hypot(tx - b.x, ty - b.y);
    if (dropDist < 2600) {
      b._act = 'airdrop';
      if (a.fall >= 1 && dropDist < 150) {   // landed -> shoot the crate so the loot spills
        b.angle += angDiff(b.angle, Math.atan2(a.y - b.y, a.x - b.x)) * Math.min(1, dt * 10);
        botShoot(b, a.x, a.y);
        return;
      }
      botGoto(b, tx, ty, 165, dt);   // else close in (and wait under a still-falling crate)
      return;
    }
  }
  // MONUMENT RUN as a COMMITTED excursion (not a per-frame interrupt): start one occasionally,
  // then SEE IT THROUGH (clear guards + all crates) before resuming gather — no gather<->monument
  // churn.
  if (!b._endgame && !(b._leave > 0)) {
    if (!b._monRun && (game.t || 0) > (b._monCd || 0)) {
      const m = botNearestMonument(b);
      if (m && botMonumentBarrel(b, m)) {
        const dm = Math.hypot(m.x - b.x, m.y - b.y);
        const homeDist = Math.hypot(m.x - b.hx, m.y - b.hy);
        // Only loot a monument NEAR HOME / one the unit is already close to — never trek across
        // the map (a big time sink).
        if (carried < 200 && (homeDist < 2100 || dm < 1300)) {
          b._monRun = m;
          b._monRunT = (game.t || 0);
        }
      }
    }
    if (b._monRun) {
      const m = b._monRun;
      const dm = Math.hypot(m.x - b.x, m.y - b.y);
      const barrel = botMonumentBarrel(b, m);
      if (!barrel || carried >= 340 || (game.t - (b._monRunT || 0)) > 12) {
        // Cleared / full / 12s spent -> done; long cool-down. Each excursion is time-bounded so
        // monument looting never dominates a unit's time.
        b._monRun = null;
        b._monCd = (game.t || 0) + rand(60, 110);
      } else {
        b._act = 'monument';
        const guard = botMonumentGuard(b, m);
        if (guard && dm < m.r + 320) {   // clear the NPCs first
          const guardDist = Math.hypot(guard.x - b.x, guard.y - b.y);
          if (guardDist > 340 ||
              (typeof wallBlocksView === 'function' && wallBlocksView(b.x, b.y, guard.x, guard.y))) {
            botGoto(b, guard.x, guard.y, 160, dt);
            return;
          }
          b.angle += angDiff(b.angle, Math.atan2(guard.y - b.y, guard.x - b.x)) * Math.min(1, dt * 10);
          botShoot(b, guard.x, guard.y);
          return;
        }
        const barrelDist = Math.hypot(barrel.x - b.x, barrel.y - b.y);
        if (barrelDist > 120) {
          botGoto(b, barrel.x, barrel.y, 150, dt);
          return;
        }
        b.angle += angDiff(b.angle, Math.atan2(barrel.y - b.y, barrel.x - b.x)) * Math.min(1, dt * 10);
        botShoot(b, barrel.x, barrel.y);
        return;
      }
    }
  }

  // COMMITTED node (kept until depleted) -> walk there once & harvest it out, no churn/wander.
  const node = botPickNode(b);
  if (node) {
    const d = Math.hypot(node.x - b.x, node.y - b.y);
    if (d > node.r + 22) {   // walk to the node (out through our door)
      b._act = 'toNode';
      botGoto(b, node.x, node.y, BOT_SPEED, dt);
    } else {
      // STAND & harvest — no oscillation, with a tool swing.
      b._act = 'gather';
      b.angle += angDiff(b.angle, Math.atan2(node.y - b.y, node.x - b.x)) * Math.min(1, dt * 8);
      b.gathering = true;
      b.swing = (b.swing || 0) + dt * 9;
      if (b.think <= 0) {
        const got = Math.min(b.jack ? 24 : 8, node.amount);   // jackhammer = 3x
        node.amount -= got;
        b.inv[node.base] = (b.inv[node.base] || 0) + got;
        b.think = 0.5;
        burst(node.x, node.y, '#caa07a', 3, 90);
      }
    }
  } else {
    // NO reachable node anywhere (rare) -> run a monument, else roam.
    const m = botNearestMonument(b);
    if (m) {
      const dm = Math.hypot(m.x - b.x, m.y - b.y);
      const barrel = botMonumentBarrel(b, m);
      if (barrel) {
        b._act = 'monument';
        const barrelDist = Math.hypot(barrel.x - b.x, barrel.y - b.y);
        if (barrelDist > 120) {
          botGoto(b, barrel.x, barrel.y, 150, dt);
        } else {
          b.angle += angDiff(b.angle, Math.atan2(barrel.y - b.y, barrel.x - b.x)) * Math.min(1, dt * 10);
          botShoot(b, barrel.x, barrel.y);
        }
      } else if (dm > m.r + 40) {   // monument tapped out (no barrels) -> head toward it but don't park on it
        b._act = 'monument';
        botGoto(b, m.x, m.y, 150, dt);
      } else {
        b._act = 'roam';
        botRoam(b, dt);
      }
    } else {
      b._act = 'roam';
      botRoam(b, dt);
    }
  }
}

