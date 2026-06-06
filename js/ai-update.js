"use strict";
/* ---------------- main update ---------------- */
function updateEnemies(dt){
  game.aggroT=(game.aggroT||0)-dt;
  for(const [k,w] of game.walls){ if(w.type==='door' && w.open && w._closeT && (game.t||0)>w._closeT){ w.open=false; w._closeT=0; } }   // auto-close bot doors shortly after the unit has passed through

  const alive=game.enemies.filter(b=>!b.eliminated && baseAlive(b));
  game._aliveBases = alive.filter(b=>b.primary).length;                 // endgame escalation: when few teams remain, everyone goes all-in
  if(game.aggroT<=0 && alive.length){
    const cst=game.aggressorOwner && game._team && game._team[game.aggressorOwner];
    const stillAssaulting = cst && cst.raidTarget && typeof baseAlive==='function' && baseAlive(cst.raidTarget) && game._team[game.aggressorOwner].sealed!==undefined && game.enemies.some(e=>e.owner===game.aggressorOwner && !e.eliminated && !e.dead);
    if(stillAssaulting){ game.aggroT=8; }                                                       // DON'T rotate away mid-assault — keep pressing until the target base dies (sustained pressure finishes the kill → the collapse continues to 1 winner)
    else { const prims=alive.filter(b=>b.primary); if(prims.length){ const a=prims[randi(0,prims.length-1)]; game.aggressor=a.id; game.aggressorOwner=a.owner; } game.aggroT=rand(35,55); } }   // else rotate a fresh AGGRESSOR TEAM — the symmetry-breaker that ends the mutual-defense stalemate
  // ---- periodic DEAD-BASE debris sweep: a base whose TC is gone (cracked, decayed, or otherwise lost) gets its orphaned walls/floors/turrets cleared ONCE — keyed on that base's OWN centre so coverage is full regardless of how far apart a team's bases are. clearDeadBase already fires the instant a TC cracks; this catches every other way a base dies (so ranging gatherers never circle dead-base litter and the field stays clean / resolves cleanly). ----
  if((game._dbSweepT=(game._dbSweepT||0)-dt)<=0){ game._dbSweepT=2;
    if(game.teamBases) for(const ow in game.teamBases){ const recs=game.teamBases[ow]; if(!recs) continue;
      for(const r of recs){ if(!r._cleared && !baseRecAlive(r)){ r._cleared=true; if(typeof clearDeadBase==='function') clearDeadBase(r.owner!==undefined?r.owner:ow, r.hx, r.hy); } } } }
  // ---- per-team work status (refreshed ~2x/sec): drives the defend / economy / raid-prep split so a team's units aren't all doing the same thing ----
  game._team = game._team || {};
  const UPk=(typeof UPKEEP!=='undefined'?UPKEEP:0.0075);
  for(const b of game.enemies){ if(!b.primary || b.eliminated) continue;
    if((b._stT=(b._stT||0)-dt)<=0 || !game._team[b.owner]){ b._stT=0.5;
      const sealed=!botBreached(b);
      let sc=2; for(const [,s] of game.structures){ if(s.owner===b.owner&&(s.type==='floor'||s.type==='trifloor')) sc++; } for(const [,d] of game.deploys){ if(d.owner===b.owner&&d.type==='turret') sc++; }
      const tc=game.deploys.get(b.tcKey), store=tc&&tc.store?(tc.store.wood+tc.store.stone+tc.store.metal):0;
      const turrets=botOwnerTurrets(b.owner), turTgt=(b.hard?4:b.weak?2:3);
      game._team[b.owner]={ sealed, decaying: store < sc*UPk*150,                          // <2.5 min of upkeep banked -> base is slipping
        ready: (sealed && turrets>=turTgt && store > sc*UPk*300 && botBaseFloors(b.owner)>=(b.hard?6:4)), attack:false };   // sealed + enough turrets + TC holds >=5 min -> safe to go raiding (lowered from 10 min so teams commit offense sooner, not turtle forever)
    } else game._team[b.owner].attack=false;
  }
  for(const o of game.enemies){ if(o.dead||o.eliminated||o.flying) continue;                 // mark every team whose base is under attack (being raided, or a hostile at the perimeter)
    for(const b of game.enemies){ if(!b.primary||b.eliminated||b.owner===o.owner) continue; const st=game._team[b.owner]; if(!st||st.attack) continue;
      const DD=(b.hard?960:760); if((o.raid&&o.raid.owner===b.owner) || dist2(o.x,o.y,b.hx,b.hy)<DD*DD) st.attack=true; }
  }
  // ---- ROLE assignment (run ~2x/sec): PROPORTIONAL DEFENSE so the whole team doesn't drop everything for every skirmish. Match the attacker count (+1); only an URGENT rocket/satchel raid pulls everyone. ----
  if((game._roleT=(game._roleT||0)-dt)<=0){ game._roleT=0.4;
    for(const ow in game._team){ const st=game._team[ow]; const recs=teamBaseRecs(ow).filter(baseRecAlive); if(!recs.length){ continue; }
      const near=(x,y)=>{ for(const r of recs){ if(dist2(x,y,r.hx,r.hy)<720*720) return true; } return false; };
      let nA=0, ax=0, ay=0;                                                                  // count distinct hostile UNITS at our base + their centroid
      if(!player.dead && !player.inCopter && !game.ghost && near(player.x,player.y)){ nA++; ax+=player.x; ay+=player.y; }
      for(const o of game.enemies){ if(o.owner===ow||o.dead||o.eliminated||o.flying) continue; if(near(o.x,o.y)){ nA++; ax+=o.x; ay+=o.y; } }
      let urgent=false;                                                                      // an enemy rocket/satchel near a base = about to lose -> ALL hands
      if(game.rockets) for(const r of game.rockets){ if(r.from!==ow && near(r.x,r.y)){ urgent=true; break; } }
      if(!urgent && game.satchels) for(const s of game.satchels){ if(s.from!==ow && near(s.x,s.y)){ urgent=true; break; } }
      st.attackers=nA; st.urgent=urgent; st.aggressor=(ow===game.aggressorOwner) || ((game._aliveBases||10)<=3);   // the rotating AGGRESSOR commits to offense; AND once the field thins to ≤3 teams EVERY team goes full-aggressor (final showdown -> the last bases fall fast, the match resolves)
      const units=game.enemies.filter(e=>e.owner===ow && !e.eliminated && !e.dead && !e.flying && !e._unfounded && !e._aboard);
      const wantDef = urgent ? units.length : (nA>0 ? Math.min(nA+1, units.length) : 0);     // match attackers + at most 1 extra (2 enemies -> 3 max); explosive raid -> everyone. Defense stays HONEST — a base only falls to a real, coordinated raid, never an artificial nerf.
      if(wantDef>0){ const cx=nA?ax/nA:recs[0].hx, cy=nA?ay/nA:recs[0].hy;
        units.sort((p,q)=>dist2(p.x,p.y,cx,cy)-dist2(q.x,q.y,cx,cy));                         // the units NEAREST the attack defend; the rest keep their economic job
        units.forEach((u,i)=>{ u._defDuty = i<wantDef; }); }
      else units.forEach(u=>{ u._defDuty=false; });
      // ---- assign ONE BUILDER (the user's "one player focuses on building"): a single unit owns base maintenance/expansion so GATHERERS never break stride to build (that was the build×1 churn). Builder = nearest non-defender to home; cleared when there's no build work. ----
      const prim0=teamPrimary(ow); const tc0=prim0?game.deploys.get(prim0.tcKey):null, tcStore=tc0&&tc0.store?(tc0.store.wood||0):0;
      const needBuild = prim0 && (!st.sealed || (tcStore>=40 && botBaseFloors(ow) < (prim0.hard?49:36)));   // a hole to seal, or resources + room to grow
      const freeUnits = units.filter(u=>!u._defDuty);
      const prevBuilder = units.find(u=>u._buildDuty);                                          // STICKY builder: keep the SAME unit across passes. Recomputing "nearest free unit" every 0.4s made the builder identity flicker, briefly tagging a gatherer (the build×1 churn that reset its toNode run). Keep it sticky -> the gatherer stays gathering.
      units.forEach(u=>{ u._buildDuty=false; });
      if(needBuild) st._buildHoldT=(game.t||0)+6;                                                // HYSTERESIS: hold a builder for ~6s after the last frame there was work, so a transient TC dip (the builder just spent the stockpile on a build tick) doesn't bounce the role out for a pass (the residual build<->toNode blip)
      if((needBuild || (game.t||0)<(st._buildHoldT||0)) && freeUnits.length>=2){ let bd=(prevBuilder && freeUnits.indexOf(prevBuilder)>=0)?prevBuilder:freeUnits.slice().sort((p,q)=>dist2(p.x,p.y,recs[0].hx,recs[0].hy)-dist2(q.x,q.y,recs[0].hx,recs[0].hy))[0]; if(bd) bd._buildDuty=true; }   // keep >=1 gatherer; keep the existing builder if still free, else the closest free unit builds
      // ---- the TEAM LEAD (primary) decides RAIDS + names DEDICATED ROCKETERS. 1-2 free units carry the breach explosives (they arm via a TRADE RUN — rockets are trade-zone-only — funded by the team's banked TC scrap); the rest are COVER. Units join the ONE called target -> they group instead of each whimsically picking a base. ----
      if(st.urgent || (nA>0 && !st.aggressor)){ st.raidTarget=null; units.forEach(u=>{ u._rocketer=false; }); }   // overrun -> all hands defend, no rocketers (but the AGGRESSOR presses through a mere skirmish)
      else if(st.ready || st.aggressor){ const prim=teamPrimary(ow);
        let expl=0, free=0; for(const u of units){ expl+=(u.rockets||0)+(u.satchels||0); if(!u._defDuty) free++; }   // team-wide arsenal + free (non-defender) units
        const freeNB=units.filter(u=>!u._defDuty && !u._buildDuty);                              // rocketer candidates (not defending / building)
        const wantR=Math.min((game._aliveBases||10)<=4?3:2, freeNB.length);                       // 2 dedicated rocketers per team (3 once ≤4 bases remain — the survivors are the tough METAL-walled forts that need a heavier concentrated breach load). They carry the breach; the non-primary rocketer leaves a 100-scrap TC reserve so worker-hiring/upkeep isn't starved.
        units.forEach(u=>{ if(u._rocketer && freeNB.indexOf(u)<0) u._rocketer=false; });          // a rocketer pulled onto defend/build duty loses the tag
        let rkN=freeNB.filter(u=>u._rocketer).length;                                             // top up to wantR, sticky otherwise: prefer the already-most-armed, then nearest home (fast rearm)
        if(rkN<wantR){ const add=freeNB.filter(u=>!u._rocketer).sort((p,q)=>((q.rockets||0)+(q.satchels||0))-((p.rockets||0)+(p.satchels||0)) || dist2(p.x,p.y,recs[0].hx,recs[0].hy)-dist2(q.x,q.y,recs[0].hx,recs[0].hy)); for(const u of add){ if(rkN>=wantR) break; u._rocketer=true; rkN++; } }
        const need = st.aggressor ? 2 : 4;                                                        // commit a target sooner (the dedicated rocketers bring the real breach load, so a small starting arsenal is fine)
        if(prim && free>=2 && expl>=need){ if(!st.raidTarget || !(typeof baseAlive==='function'&&baseAlive(st.raidTarget))) st.raidTarget=botRaidTarget(prim); }   // the lead calls ONE target and keeps it until it dies (the squad masses on it instead of fizzling)
        else st.raidTarget=null; }
      else { st.raidTarget=null; units.forEach(u=>{ u._rocketer=false; }); }
    }
  }
  updateTransports(dt);
  expandTeamBases(dt);                 // established teams build EXTRA bases (monument / raid-forward / survival)
  for(const b of game.enemies) updateBot(b,dt);
}
function botHomeAttacker(b){ let best=null, bd=1e18; const DD=(b.hard?1100:900);               // nearest hostile to OUR base (used to converge the team onto a raid)
  for(const o of game.enemies){ if(o===b||o.dead||o.eliminated||o.flying||o.owner===b.owner) continue;
    const d=dist2(o.x,o.y,b.hx,b.hy); if(d<bd && (d<DD*DD || (o.raid&&o.raid.owner===b.owner))){ bd=d; best={x:o.x,y:o.y}; } }
  return best; }
function botWantRaid(b,S){                                                                     // heterogeneous raid appetite -> a ready team sends most (not all) of its units raiding
  if(b._endgame || (S && S.aggressor)) return true;                                            // endgame all-in + the whole rotating AGGRESSOR team always press
  if(b._raidBias===undefined) b._raidBias=Math.random();
  if(S && S.ready && S.raidTarget && b._raidBias < 0.72 && botBaseFloors(b.owner)>=4) return true;   // raid only when the LEAD has CALLED one (S.raidTarget) -> the squad commits to one base together, no whimsical solo raids
  return false; }
const GATHER_LOAD = 300;        // a gatherer commits to gathering until it's carrying this much, THEN banks — fewer, fuller bank trips (less gather<->return cycling)
// ---- DECISION LAYER (committed tasks): a gatherer keeps gathering until one of these "task complete" conditions holds; only then does botPlan pick the next task. NEVER re-decided per frame. ----
function botGatherDone(b, ctx){ const {breach,damaged,S}=ctx; const carried=b.inv.wood+b.inv.stone+b.inv.metal;
  if(b._monRun) return false;                                                            // mid monument RUN -> stay committed (don't bail to bank mid-run; the run ends itself when cleared/full)
  if(carried>=GATHER_LOAD || (b.scrap||0)>40) return true;                                // full -> bank
  if(breach || (damaged && botHas(b,'wood',12))) return true;                             // base needs sealing/repair
  if(!b.ally && b._rocketer && b.rockets<8 && game.shop && b.role!=='turtle' && ((b.scrap||0)>=12 || carried>=100 || ((((game.deploys.get(b.tcKey)||{}).store||{}).scrap||0)>=24)) ) return true;   // DEDICATED ROCKETER arms a breach load — rockets are TRADE-ZONE-ONLY; bypass the 'safe/ready' gate so a perpetual skirmish can't starve offense (funded by own scrap, a sellable load, or the banked TC hoard)
  if(!b.ally && b.rockets<(b.primary?12:6) && ((b.scrap||0)>=24 || carried>=120 || (b.primary && (((game.deploys.get(b.tcKey)||{}).store||{}).scrap||0)>=48)) && game.shop && ((S&&S.aggressor) || botSafe(b) || (S&&S.ready)) && b.role!=='turtle') return true;   // RESTOCK explosives to a stockpile (primary→12, others→6); the primary also makes a run just to convert the team's BANKED scrap hoard into rockets
  if((game.t>120 || b._endgame) && (game.t||0)>(b._raidCd||0) && (b.role!=='turtle'||b._endgame) && (b.rockets>0||(b.satchels||0)>0||b._endgame) && botWantRaid(b,S)) return true;   // a raid is on
  if(b.ally){ b.raidUrge=(b.raidUrge||rand(12,24)); if(b.raidUrge<=0) return true; }
  return false; }
function botPlan(b, ctx){       // choose the next committed task (only called when the current one completes / aborts)
  const {breach,damaged,S,homeD}=ctx; const carried=b.inv.wood+b.inv.stone+b.inv.metal;
  if(breach && !botHas(b,'wood',40)) return 'gather';                                     // too poor to seal -> gather wood first
  if(breach || (damaged && botHas(b,'wood',12))) return (homeD>180)?'return':'gather';     // SEAL/repair the base (rush home if away)
  if(!b.ally && b._rocketer && b.rockets<8 && game.shop && b.role!=='turtle' && ((b.scrap||0)>=12 || carried>=100 || ((((game.deploys.get(b.tcKey)||{}).store||{}).scrap||0)>=24)) ) return 'trade';   // DEDICATED ROCKETER arms a breach load before the full→bank check (it SELLS its load at the shop anyway) — trade-zone-only, bypasses the under-attack gate, drains the TC hoard
  if((b.scrap||0)>40 || carried>=GATHER_LOAD) return 'return';                            // full -> bank it
  if(!b.ally && b.rockets<(b.primary?12:6) && ((b.scrap||0)>=24 || carried>=120 || (b.primary && (((game.deploys.get(b.tcKey)||{}).store||{}).scrap||0)>=48)) && game.shop && ((S&&S.aggressor) || botSafe(b) || (S&&S.ready)) && b.role!=='turtle') return 'trade';   // RESTOCK explosives to a stockpile (primary→12, others→6) + the primary drains the team's banked-scrap hoard into rockets
  if((game.t>120 || b._endgame) && (game.t||0)>(b._raidCd||0) && (b.role!=='turtle'||b._endgame) && (b.rockets>0||(b.satchels||0)>0||b._endgame) && botWantRaid(b,S)){
    const tr=teamTransport(b.owner); let tgt=null;
    if(tr && tr.state!=='fly' && tr.state!=='unload' && tr.riders.length<TRANSPORT.seats) tgt=botFarthestEnemy(b);   // far base + a ferry seat -> use the transport
    if(!tgt) tgt = (S && S.raidTarget && baseAlive(S.raidTarget)) ? S.raidTarget : botRaidTarget(b);   // JOIN the lead's called target (group up)
    if(tgt){ b.raid=tgt; b._raidCd=(game.t||0)+2; return 'raid'; } }
  if(b.ally && (b.raidUrge||1)<=0){ const tgt=botRaidTarget(b); if(tgt){ b.raid=tgt; b.raidUrge=rand(24,44); return 'raid'; } b.raidUrge=rand(8,14); }
  return 'gather'; }
function botObjective(b){   // the unit's current high-level destination (where the anti-stuck watchdog should phase it toward when it's stuck)
  if(b.state==='return') return {x:b.hx, y:b.hy};
  if(b.state==='raid' && b.raid){ const tk=b.raid.tcKey||b.raid.boxKey; if(tk){ const c=tk.indexOf(','); return {x:(+tk.slice(0,c)+0.5)*TILE, y:(+tk.slice(c+1)+0.5)*TILE}; } }
  if(b.state==='trade' && game.shop) return {x:game.shop.x, y:game.shop.y};
  if(b._navX!==undefined) return {x:b._navX, y:b._navY};            // gather/other: head to our current travel target (node / monument / roam point)
  return null; }
function updateBot(b,dt){
  if(b.eliminated) return;
  if(!baseAlive(b)){ if(!rehomeUnit(b)){ botEliminate(b); return; } }   // home base destroyed -> fall back to another of the team's bases; only eliminated when the team has NO bases left
  const tc=game.deploys.get(b.tcKey); if(tc && tc.store) tc.store.wood=Math.max(tc.store.wood,40);  // keep base alive while bot lives
  if(b.dead){ b.respawnT-=dt; if(b.respawnT<=0){ b.dead=false; b.hp=b.max;
    if(!b.primary){ const recs=teamBaseRecs(b.owner).filter(baseRecAlive);
      if(recs.length>1){ const S=game._team&&game._team[b.owner]; const tgt=(S&&S.raidTarget&&(typeof baseAlive==='function'&&baseAlive(S.raidTarget)))?S.raidTarget:null;
        let r=null;
        if(tgt && (b._rocketer || b._wasRaid || b.state==='raid')){ let bd=1e18; for(const rr of recs){ const d=dist2(rr.hx,rr.hy,tgt.hx,tgt.hy); if(d<bd){ bd=d; r=rr; } } }   // FORWARD RESPAWN: a committed raider comes back at the team base NEAREST the raid target so the assault PERSISTS instead of fizzling on a long trek from a random base (pairs with the 'raid-forward' base expandTeamBases already builds toward the enemy)
        if(!r) r=recs[randi(0,recs.length-1)];                                                                  // gatherers / no active raid -> spread out & staff new bases
        b.tcKey=r.tcKey; b.boxKey=r.boxKey; b.hx=r.hx; b.hy=r.hy; b.doorX=r.doorX; b.doorY=r.doorY; b.doorGy=r.doorGy; } }
    b.x=b.hx; b.y=b.hy+50; b.flying=false; b.state='gather';
    if(b.copter){ b.copter.destroyed=false; b.copter.hp=b.copter.max; b.copter.x=b.hx-TILE*4; b.copter.y=b.hy; } } return; }   // only the primary has a copter; parked well west
  b.gunCd-=dt; b.rkCd-=dt; b.think-=dt; b.expandT=(b.expandT||0)-dt; b.retaliateT=(b.retaliateT||0)-dt; b.disengageT=(b.disengageT||0)-dt; b.fenceCd=(b.fenceCd||0)-dt; b.gnCd=(b.gnCd||0)-dt;
  b.regenT=(b.regenT||0)-dt; if(b.regenT<=0 && b.hp<b.max) b.hp=Math.min(b.max, b.hp+9*dt);   // regenerate health like the player
  if(b._aboard){ const tr=b._aboard; if(tr.destroyed || tr.riders.indexOf(b)<0){ b._aboard=null; b.flying=false; } else { b.x=tr.x; b.y=tr.y; b.flying=true; b.gunCd-=dt; b.rkCd-=dt; return; } }   // riding the transport heli -> just ride along (the transport drops us near the target)
  if(b.flying && !b._aboard && (!b.copter || b.copter.destroyed)) b.flying=false;              // copter shot down -> drop back to foot (visible, fights normally; no invisible flyer)
  if(b.flying && !b._aboard && b.state!=='trade'){ b.flying=false; if(b.copter){ b.copter.spin=0; b.copter.x=b.x; b.copter.y=b.y; b.copter.vx=0; b.copter.vy=0; } }   // ONLY the trade state flies the minicopter — any other state (a threat interrupting a trade run, etc.) lands at once so a bot is NEVER stuck airborne / invisible mid-combat
  botUseDoors(b);                                                                             // swing open any of our own doors we're approaching (close shortly after)
  if(b.copter && !b.copter.destroyed && !b.flying && !b._aboard){ if((b._parkChk=(b._parkChk||0)-dt)<=0){ b._parkChk=1.0; botParkCopterClear(b); } }   // keep EVERY parked minicopter (incl. workers' bought ones) off the footprint & on the side sheltered from the nearest enemy base

  // ---- ONE unified anti-stuck watchdog: a non-combat unit that barely changes its NET position over ~6s, while NOT actively gathering/building/repairing/defending, is stuck — a door-routing cycle, a lake/obstacle orbit, monument milling, or just idling at base. Phase it toward its current objective. This ALSO enforces "don't sit in base unless building/repairing": an idle home-sitter has ~0 net movement and isn't maintaining, so it gets pushed back out to work. ----
  const movedSince=(b._pmX!==undefined)?Math.hypot(b.x-b._pmX,b.y-b._pmY):0; b._pmX=b.x; b._pmY=b.y;
  let raidSieging=false;                                                                    // a raider is "busy" only when it's actually AT the enemy base pressing it — a raider still navigating can get stuck and must be caught
  if(b.state==='raid' && b.raid){ const tk=b.raid.tcKey||b.raid.boxKey; if(tk){ const c=tk.indexOf(','); raidSieging=Math.hypot((+tk.slice(0,c)+0.5)*TILE-b.x,(+tk.slice(c+1)+0.5)*TILE-b.y)<360; } }
  const exempt = b.gathering || b.flying || b.state==='defend' || raidSieging || (game.t-(b._maintT||-1e9))<2.5;   // genuinely-busy states: harvesting, flying, fighting, sieging a base, just built/repaired
  if(!exempt){
    if(!b._npH) b._npH=[];
    if((b._npT=(b._npT||0)+dt)>=0.5){ b._npT=0; b._npH.push(b.x,b.y); if(b._npH.length>24) b._npH.splice(0,2); }   // sample position every 0.5s, keep the last ~6s
    if(b._npH.length>=24 && (b._escapeT||0)<=0){
      let mnx=1e9,mny=1e9,mxx=-1e9,mxy=-1e9; for(let i=0;i<b._npH.length;i+=2){ const x=b._npH[i],y=b._npH[i+1]; if(x<mnx)mnx=x; if(x>mxx)mxx=x; if(y<mny)mny=y; if(y>mxy)mxy=y; }
      if(Math.max(mxx-mnx,mxy-mny)<480){   // confined to a ~480px box for 6s without productive work -> stuck OR idling/oscillating at base. Catches door cycles, lake/obstacle orbits, monument milling, home loitering — regardless of oscillation phase. NO wall-phasing: cut a door near base, re-route in the field.
        const homeD=Math.hypot(b.hx-b.x,b.hy-b.y);
        if(homeD<TILE*7){ if(!botFreeWall(b)){ const a=Math.atan2(b.y-b.hy,b.x-b.hx)||rand(0,TAU); b._escAng=a+rand(-0.4,0.4); } }   // stuck at/in our base -> CUT A DOOR out (botFreeWall aims _escAng at the new doorway)
        else { const o=botObjective(b); let ax,ay; if(o && Math.hypot(o.x-b.x,o.y-b.y)>120){ ax=o.x; ay=o.y; } else { const a=Math.atan2(b.y-b.hy,b.x-b.hx)||rand(0,TAU); ax=b.x+Math.cos(a)*340; ay=b.y+Math.sin(a)*340; } b._escAng=Math.atan2(ay-b.y,ax-b.x)+rand(-0.25,0.25); }   // stuck in the field -> drop the goal & head to a fresh one
        b._escapeT=1.0; b._npH.length=0;
        if(b._tgtNode){ b._skipNode=b._tgtNode; b._skipT=(game.t||0)+8; b._tgtNode=null; } b._monCd=(game.t||0)+14; b._postA=undefined; }
    }
  } else { b._npH=null; b._npT=0; }
  // ---- stuck AT our own base: a non-exempt unit lingering within ~6 tiles of home (not returning to deposit, not building/defending) for too long is door-cycling -> drive it back out the door (cut one if the way is blocked). Catches it regardless of how wide it oscillates. ----
  { const hD=Math.hypot(b.hx-b.x,b.hy-b.y);
    if(!exempt && hD<TILE*6){ if((b._baseT=(b._baseT||0)+dt)>9){ b._baseT=0;                   // near home >9s while NOT building/defending/gathering -> loitering/looping at base -> drive it out
        if(!botFreeWall(b)){ const a=Math.atan2(b.y-b.hy,b.x-b.hx)||(b.doorGy!==undefined?Math.PI/2:rand(0,TAU)); b._escAng=a+rand(-0.3,0.3); }   // boxed inside -> cut a door; otherwise head straight OUT, away from home
        b._escapeT=1.6;
        if(b.state==='raid'||b.state==='return'){ if(typeof depositHome==='function') depositHome(b); b.state='gather'; b.raid=null; b._wasRaid=false; b._raidCd=(game.t||0)+8; }   // bank the load & switch to economy; a brief raid cooldown so it actually GATHERS instead of instantly flipping back to raid (the TC now holds all loot, so botSafe stays true)
        if(b._tgtNode){ b._skipNode=b._tgtNode; b._skipT=(game.t||0)+8; b._tgtNode=null; } b._monCd=(game.t||0)+12; } }
    else b._baseT=0; }
  // ---- LONG home-pin: a worker confined within ~6 tiles of its TC for >12s CONTINUOUSLY is looping its own footprint (door-routing on a big base) — it keeps briefly flagging 'gather' on a node hugging the wall, which resets the exempt-gated watchdogs above so they never fire. A real gatherer ranges out to the resource ring; one pinned home is stuck. Continuous timer (reset only on leaving the zone), so brief harvest-touches don't mask it. Primaries (base anchors) and active builders are exempt. FIRST hit -> gentle eviction (cut a door, phase out, skip the node it was circling). If STILL pinned a second time -> it's genuinely trapped in its own geometry while CIRCLING (never wall-pressed, so the hard-escape never engaged): SNAP it just outside its own door — a short hop on its OWN base, the guaranteed un-stick. (Deliberately does NOT force far-ranging: that pushes units to path around LIVE enemy bases and circle in the open.) ----
  if(!b.primary && b.state!=='defend' && b.state!=='trade' && !b.flying && !b._unfounded && !raidSieging && (game.t-(b._maintT||-1e9))>=2.5){
    if(Math.hypot(b.hx-b.x,b.hy-b.y)<TILE*6){ if((b._hpinT=(b._hpinT||0)+dt)>12){ b._hpinT=0; b._hpinN=(b._hpinN||0)+1;
        if(b._hpinN>=2 && b.doorX!==undefined){ b.x=b.doorX+(b._lane||0); b.y=b.hy+TILE*7; b._path=null; b._navX=b.x; b._navY=b.y; b._hpinN=0; b._blkT=0; b._stuck=0; }   // still trapped after one eviction -> SNAP clear of the footprint, south of our own door (>TILE*6 from home so the pin zone is actually exited, not re-entered)
        else { if(typeof botFreeWall!=='function' || !botFreeWall(b)){ const a=Math.atan2(b.y-b.hy,b.x-b.hx)||rand(0,TAU); b._escAng=a+rand(-0.3,0.3); } b._escapeT=1.4; }
        if(b._tgtNode){ b._skipNode=b._tgtNode; b._skipT=(game.t||0)+8; b._tgtNode=null; } b._monCd=(game.t||0)+10; } }
    else { b._hpinT=0; b._hpinN=0; } }
  else { b._hpinT=0; b._hpinN=0; }
  // ---- hard cap on time anywhere in a monument's NO-BUILD ZONE: never linger or circle a monument ----
  { const m=(typeof botNearestMonument==='function')?botNearestMonument(b):null;
    const clearing = m && botMonumentBarrel(b,m) && Math.hypot(m.x-b.x,m.y-b.y)<m.r+220;          // actively smashing crates -> productive, don't evict
    const inMZ = !clearing && m && (((typeof inMonZone==='function')&&inMonZone(b.x,b.y)) || Math.hypot(m.x-b.x,m.y-b.y)<m.r+150);
    if(inMZ){ if((b._monStay=(b._monStay||0)+dt)>10){ b._monStay=0; b._monCd=(game.t||0)+45;       // 10s max LOITERING in the zone (not while clearing), then cool down for 45s
        if(b._tgtNode){ b._skipNode=b._tgtNode; b._skipT=(game.t||0)+8; b._tgtNode=null; }
        const a=Math.atan2(b.y-m.y,b.x-m.x)||rand(0,TAU); b._escAng=a+rand(-0.3,0.3); b._escapeT=1.2; } }   // head straight OUT of the no-build zone (no circling)
    else b._monStay=Math.max(0,(b._monStay||0)-dt*2); }

  // ---- anti-stuck: a continuous-blocked timer drives escalation so a unit can NEVER stay frozen. <0.8s blocked -> soft escape (cut a door / slip past our own turret/box; walls stay solid). STILL blocked past ~1.4s = truly enclosed -> a BRIEF full phase toward the door (guaranteed un-stick; rare, so own-wall crossings stay ~0). ----
  if(b._blocked) b._blkT=(b._blkT||0)+dt; else b._blkT=0;
  b._escapeT=(b._escapeT||0)-dt;
  if(b._escapeT<=0){ if(b._blocked) b._stuck=(b._stuck||0)+dt; else b._stuck=0;
    if(b._stuck>0.8){ b._stuck=0; b._escapeT=0.9; if(!botFreeWall(b)){            // boxed in -> CUT A DOOR out; botFreeWall aims _escAng at the new doorway. Fallback heading = toward our base door.
      const dx=(b.doorX!==undefined?b.doorX:b.hx)-b.x, dy=(b.doorY!==undefined?b.doorY:b.hy)-b.y; b._escAng=Math.atan2(dy,dx)+rand(-0.8,0.8); } } }
  if(b._escapeT>0){ b._hardEscape = (b._blkT||0)>1.4;            // soft escape isn't freeing us (fully walled in / coastal pocket) -> phase everything briefly toward the heading
    b._escaping=true; botMoveTo(b, b.x+Math.cos(b._escAng)*240, b.y+Math.sin(b._escAng)*240, 150, dt); b._escaping=false; b._hardEscape=false;   // soft escape: slip past our own turret/box (walls stay solid) toward the door / cut doorway
    if(b.state==='raid' && b.raid && typeof breachIfBlocked==='function') breachIfBlocked(b, b.raid);   // boxed against an ENEMY wall mid-raid -> blow through it
    return; }
  b._blocked=false;

  if(b._unfounded){                                                                          // EARLY GAME: no base yet -> gather, then the primary builds the FIRST base at the site (runs AFTER the anti-stuck above, so founding units never get stuck)
    b._act = b.primary ? 'found' : 'gather';
    if(!(typeof inSafeZone==='function' && inSafeZone(b.x,b.y))){                              // ALWAYS DEFEND while gathering — early teams were getting mauled by animals because the unfounded path never fought back
      const uth = (b.retaliateT>0 && b.threatX!==undefined ? {x:b.threatX,y:b.threatY} : null) || botThreat(b) || botNearThreat(b);
      if(uth){ b._act='defend'; b.gathering=false; botCombatStep(b, uth, dt); return; } }      // an animal/hostile is on us -> shoot it (pistol) instead of mining through the damage
    const hd=Math.hypot(b.hx-b.x,b.hy-b.y), carried=b.inv.wood+b.inv.stone+b.inv.metal;
    if(b.primary && carried>=220 && hd<TILE*2){ foundTeamBase(b); return; }                  // enough material AT the site -> found it
    if(((b.primary && carried>=220) || (!b.primary && carried>=70)) && hd>TILE*2){ botGoto(b,b.hx+(b._lane||0),b.hy+(b._hoff||0),155,dt); return; }   // loaded -> bring it to the site
    if(!b.primary && hd<TILE*3 && carried>0){ const p=teamPrimary(b.owner); if(p){ for(const r of ['wood','stone','metal']){ p.inv[r]=(p.inv[r]||0)+b.inv[r]; b.inv[r]=0; } } }   // worker delivers its haul to the primary's founding fund
    if((b._escapeT||0)<=0){ const node = botNearestWood(b) || botNearestNode(b) || botAnyNode(b);
      if(node){ const d=Math.hypot(node.x-b.x,node.y-b.y);
        if(d>node.r+22){ b._tgtNode=node; botGoto(b,node.x,node.y,150,dt); }
        else { b.angle += angDiff(b.angle, Math.atan2(node.y-b.y,node.x-b.x))*Math.min(1,dt*8); b.gathering=true; b.swing=(b.swing||0)+dt*9;
          if(b.think<=0){ const got=Math.min(8,node.amount); node.amount-=got; b.inv[node.base]=(b.inv[node.base]||0)+got; b.think=0.5; burst(node.x,node.y,'#caa07a',3,90); } } }
      else botGoto(b,b.hx+(b._lane||0),b.hy+(b._hoff||0),140,dt); }
    return; }

  b._endgame = (game._aliveBases||10)<=6 || (game.t||0)>420;            // all-in when the field thins OR after ~7 min (TIME trigger breaks the no-first-elimination stalemate -> matches always resolve; hard teams win the all-in melee via armor/aim/tougher bases)
  const underFire = b.retaliateT>0 && b.threatX!==undefined && dist2(b.x,b.y,b.threatX,b.threatY) < REACT_R*REACT_R && !(typeof inSafeZone==='function' && inSafeZone(b.x,b.y));   // fight back at a shooter within local view (the movement layer routes to it without jitter; far snipers are out of REACT_R so we never charge across the map)
  let th = (underFire ? {x:b.threatX, y:b.threatY} : null) || botThreat(b) || botNearThreat(b);   // ALL reactive threat detection is now LOCAL (viewport of the body)
  const breach = (!b.ally) ? botBreached(b) : null;                     // a hole in our perimeter?
  const damaged = (!b.ally && !breach) ? botDamagedWall(b) : null;      // a wall that's been chipped below 60%
  const S = (!b.ally && game._team) ? game._team[b.owner] : null;                            // my team's work status (defend / economy / raid-prep)
  const homeD = Math.hypot(b.hx-b.x, b.hy-b.y);
  const nearSafe = game.shop && dist2(b.x,b.y,game.shop.x,game.shop.y) < (SAFE_R+140)*(SAFE_R+140);   // in OR right around the trade safe zone -> no combat at all (weapons disabled there)
  if(nearSafe) th=null;
  if(!th) b.defendT=0;
  if(b.ally) b.raidUrge=(b.raidUrge||rand(12,24))-dt;                                          // allied workers build a raid appetite over time
  // === COMMITTED TASK SELECTION (decision-layer rewrite) — re-plan ONLY on a high-priority interrupt or when the CURRENT task completes. The task is NEVER re-decided per frame, so units stop cycling actions. ===
  // INTERRUPT: defend a LOCAL threat (proportional — only an assigned defender, someone personally shot, an urgent explosive raid, or an ally). A committed raider / endgamer ignores distant fire and keeps pressing.
  const rocketerPress = b._rocketer && (b.state==='raid'||b._wasRaid) && b.raid && (typeof baseAlive==='function'&&baseAlive(b.raid)) && (b.rockets||0)>0 && b.hp>=b.max*0.20 && !(S&&S.urgent);   // an ARMED dedicated rocketer mid-raid PRESSES THE BREACH — ignores incoming fire (cover units screen it) unless critically hurt or its OWN base is under an explosive raid. This is the fix that stops raids aborting into 'defend' (the mutual-defense loop: ~500 raid→defend flips/match).
  const wantDefend = th && !nearSafe && !rocketerPress && (b._defDuty || (underFire && !b._wasRaid) || (S && S.urgent) || b.ally)
    && !((b._wasRaid || b._endgame) && Math.hypot(th.x-b.x,th.y-b.y)>=230)
    && !((S && S.aggressor) && Math.hypot(th.x-b.x,th.y-b.y)>=160);            // AGGRESSOR team only breaks off for a point-blank threat — otherwise it keeps pressing the assault (breaks the mutual-defense stalemate)
  if(wantDefend){ b.state='defend'; b._defHold=(b._defDuty && S && (S.attack||S.urgent))?2.5:0.7; b._defTgt={x:th.x,y:th.y,vx:th.vx||0,vy:th.vy||0}; }   // HOLD the combat posture after a threat blinks out of view (longer for an assigned defender in an ACTIVE siege) -> no defend<->gather cycling
  else {
    if(b.state==='defend'){ b._defHold=(b._defHold||0)-dt; if(b._defHold<=0){ b.state='gather'; b.defendT=0; b._defTgt=null; } }   // threat gone for >0.7s -> resume the economy
    if(b.state==='raid' && (!b.raid || !baseAlive(b.raid) || (S && S.decaying))){ b.raid=null; b.state='gather'; }   // raid target dead / base slipping -> stop raiding
    if(b._defDuty && S && (S.attack||S.urgent) && homeD>340 && b.state!=='raid' && b.state!=='trade'){ b.state='return'; }   // assigned defender + base under attack + I'm far -> RALLY HOME (then defend locally on arrival)
    else if(b.state==='gather' && botGatherDone(b,{breach,damaged,S})) b.state=botPlan(b,{breach,damaged,S,homeD});   // gather task COMPLETE -> plan the next committed task (bank / trade / raid / seal)
    // 'return' / 'trade' / 'raid' stay COMMITTED — their handlers complete them (set state back to 'gather'), so they are not re-decided here
  }
  b._act = b.state;                                                    // ACTION ground-truth (debug overlay + metrics); the gather branches below refine it to gather/toNode/monument/build/loot

  if(b.state==='defend'){ b.defendT=(b.defendT||0)+dt;
    const dth = th || b._defTgt;                                           // engage the live threat, or the remembered one while it's briefly out of view (the 0.7s hold)
    if(!dth){ b.state='gather'; b.defendT=0; return; }
    const raiding = !!(b.raid && baseAlive(b.raid));                        // mid-raid -> press the assault, don't drift home
    const carrying=(b.inv.wood+b.inv.stone+b.inv.metal)>60 || (b.scrap||0)>20;
    const critical = b.hp < b.max*0.20;
    const hurt=b.hp < b.max*(carrying?0.45:0.28);                           // low HP -> sometimes break off (more readily if carrying loot)
    if((( hurt && !raiding) || critical) && !b._endgame && !b._retreat && Math.random()<(carrying?0.05:0.02)){ b._retreat=true; }   // raiders only break off when CRITICAL; in the endgame nobody retreats (fight to the death)
    if(b._retreat){ if(b.hp>=b.max*0.85 || b.defendT>9){ b._retreat=false; }  // recovered / safe -> back to normal
      else { b.disengageT=Math.max(b.disengageT||0,2.5);                      // flee toward home, fire while backpedaling
        if(typeof wallBlocksView!=='function' || !wallBlocksView(b.x,b.y,dth.x,dth.y)) botShoot(b,dth.x,dth.y);
        botGoto(b, b.hx+(b._lane||0), b.hy+(b._hoff||0), 175, dt);
        if(Math.hypot(b.hx-b.x,b.hy-b.y)<TILE*1.5){ b._retreat=false; b.state='return'; } return; } }
    botCombatStep(b, dth, dt);                                             // shared, jitter-free engage (LOS fire, dead-band back-off, timed strafe)
    botMaybeGrenade(b, dth);                                                // lob a grenade if one's held and the foe is in the sweet spot
    const breakT = raiding ? 2.2 : 7;                                       // raiders re-commit to the assault fast; defenders hold the line longer
    if(b.defendT>breakT){ b.defendT=0; if(raiding) b.state='raid'; else { b.disengageT=6; b.state='gather'; } }
    return; }

  if(b.state==='raid'){ const tgt=b.raid; b._wasRaid=true;
    if(!tgt || !baseAlive(tgt)){ b._wasRaid=false; b.state='return'; return; }                  // base already dead -> head home
    if(b.rockets<=0 && (b.satchels||0)<=0 && !b._endgame){ b._wasRaid=false; b.raid=null;        // out of explosives -> can't breach a fortified base; go BUY more (or gather to afford them) instead of orbiting it
      b.state = (game.shop && ((b.scrap||0)>=8 || (b.inv.wood+b.inv.stone+b.inv.metal)>=100)) ? 'trade' : 'gather'; return; }
    if(!b._aboard){ const tk0=tgt.tcKey||tgt.boxKey, p0=tk0.split(',').map(Number), tx0=p0[0]*TILE+TILE/2, ty0=p0[1]*TILE+TILE/2;   // LONG raid -> ferry the squad in the transport heli instead of the long walk
      if(Math.hypot(tx0-b.hx,ty0-b.hy)>2800){ const tr=teamTransport(b.owner);
        if(tr && (tr.state==='idle'||tr.state==='board') && tr.riders.length<TRANSPORT.seats){
          if(Math.hypot(tr.x-b.x,tr.y-b.y)<70){ transportBoard(b,tr); tr.state='board'; return; }
          botGoto(b, tr.x, tr.y, 170, dt); return; } } }
    const tcK2a=tgt.tcKey||tgt.boxKey, tpa=tcK2a.split(',').map(Number), tgx=tpa[0]*TILE+TILE/2, tgy=tpa[1]*TILE+TILE/2;
    let squadAt=0; for(const e of game.enemies){ if(e.owner!==b.owner||e.dead||e.eliminated||e.flying) continue; if(e.state==='raid' && e.raid===tgt && dist2(e.x,e.y,tgx,tgy)<560*560) squadAt++; }
    const grouped = squadAt>=2 || b._endgame;     // RARELY ASSAULT ALONE: only press the close fight (siege/satchel/breach at the walls, under turret fire) with the squad, or all-in in the endgame
    { const tcK2=tcK2a, tcx2=tgx, tcy2=tgy;   // SIEGE: a GROUPED raider pressing an enemy Tool Cupboard steadily wears it down (defenders win by killing the raider first) -> raids are reliably lethal and the match always resolves
      if(grouped && Math.hypot(tcx2-b.x,tcy2-b.y) < (b._endgame?420:300) && !(typeof wallBlocksView==='function' && wallBlocksView(b.x,b.y,tcx2,tcy2))){ const tcd=game.deploys.get(tcK2); if(tcd){ tcd.hp -= (b._endgame?140 : (b.hard?24:14))*dt;   // a GROUPED raider with LINE OF SIGHT to the TC wears it down — raiders must BREACH the walls/doors first to expose it (NO sieging through walls; bases must be cracked by a real breach). Reach 420 (a FAR raider can't drain a TC — round26 anti-bug); endgame rate is FAST (140/s) so a committed raider in range cracks an exposed cupboard before the fort's turrets grind it down. HARD raiders siege faster
        if(typeof burst==='function') burst(tcx2,tcy2,'#caa24a',2,90);   // VISIBLE siege feedback (chips). The minimap red pulse is reserved for explosive hits (rockets/satchels) — see explode().
        if(tcd.hp<=0){ spillContainer(tcx2,tcy2,tcd); game.deploys.delete(tcK2); burst(tcx2,tcy2,COL.boxLt,18,220); addFloat(tcx2,tcy2-20,'TC destroyed!','#ff7a4a'); clearDeadBase(tgt.owner,tcx2,tcy2); } } } }   // crack the TC -> clear the dead base's debris
    const box=game.deploys.get(tgt.boxKey);
    const loot = box&&box.store ? (box.store.wood+box.store.stone+box.store.metal) : 0;
    const STAND=420;
    const breach=botBreachAim(b,tgt);                                                          // CHEAPEST-PATH piece to blow (nearest wall/DOOR; doors preferred). null once the shell is open.
    const turret=botPathTurret(b,tgt);                                                         // a target turret that can currently shoot us
    const turLOS = turret && !(typeof wallBlocksView==='function' && wallBlocksView(b.x,b.y,turret.x,turret.y));   // exposed (not behind a wall) -> rocketable
    // AIM PRIORITY (rocketer): an EXPOSED path turret that can shoot us -> the breach wall/door -> the exposed loot box -> the TC itself
    let bcx,bcy;
    if(turLOS){ bcx=turret.x; bcy=turret.y; }
    else if(breach){ bcx=breach.x; bcy=breach.y; }
    else if(loot>0){ const p=tgt.boxKey.split(',').map(Number); bcx=p[0]*TILE+TILE/2; bcy=p[1]*TILE+TILE/2; }
    else { bcx=tgx; bcy=tgy; }
    const d=Math.hypot(bcx-b.x,bcy-b.y);
    if(!breach && !turLOS && loot>0 && d<TILE*0.9){ b.inv.wood+=box.store.wood; b.inv.stone+=box.store.stone; b.inv.metal+=box.store.metal;
      box.store.wood=box.store.stone=box.store.metal=0; addFloat(b.x,b.y-22,'looted!','#e08a36'); return; }   // exposed box -> grab it
    if(b.inv.wood+b.inv.stone+b.inv.metal>300 && b.rockets<=0 && (b.satchels||0)<=0){ b.state='return'; return; }   // overloaded + spent -> bank
    if(b.rockets>0){                                                                            // ROCKETER: blow the aim piece from a firing STANDOFF (~320px) — approach the standoff, not the wall itself, so it doesn't walk in past min-range and never shoot
      if(d>380){ const ux=(b.x-bcx)/d, uy=(b.y-bcy)/d, lane=(((b.id||0)%5)-2)*70;                // SPREAD the squad in an arc around the target (perpendicular offset per unit) so they don't single-file into one stuck-looking column
        const sx=bcx+ux*320 - uy*lane, sy=bcy+uy*320 + ux*lane; botGoto(b,sx,sy,150,dt); breachIfBlocked(b,tgt); return; }
      if(d<ROCKET_MIN){ const pa=Math.atan2(bcy-b.y,bcx-b.x)+Math.PI; botMoveTo(b,b.x+Math.cos(pa)*120,b.y+Math.sin(pa)*120,120,dt); return; }   // splash-too-close -> step back
      b.angle += angDiff(b.angle, Math.atan2(bcy-b.y,bcx-b.x))*Math.min(1,dt*8); botTryRocket(b,bcx,bcy,{cd:2.2}); return; }
    if((b.satchels||0)>0 && grouped){ if(d<100 && b.rkCd<=0){ b.satchels--; b.rkCd=2.6; game.satchels.push({x:bcx,y:bcy,t:2.0,from:b.owner}); addFloat(bcx,bcy-16,'satchel!','#e08a36'); } botGoto(b,bcx,bcy,150,dt); breachIfBlocked(b,tgt); return; }
    // COVER role (no explosives): suppress the nearest enemy DEFENDER so the rocketers can work; else stage with the squad. Never idle.
    { const def=(typeof botNearThreat==='function')?botNearThreat(b):null;
      if(def){ const cd=Math.hypot(def.x-b.x,def.y-b.y); if(cd<480){ b.angle+=angDiff(b.angle,Math.atan2(def.y-b.y,def.x-b.x))*Math.min(1,dt*8); botShoot(b,def.x,def.y); return; } botGoto(b,def.x,def.y,150,dt); return; } }
    if(grouped){ const dd=Math.max(1,Math.hypot(bcx-b.x,bcy-b.y)), ux=(b.x-bcx)/dd, uy=(b.y-bcy)/dd, lane=(((b.id||0)%5)-2)*64; botGoto(b,bcx - uy*lane, bcy + ux*lane,150,dt); return; }   // DE-BUNCH the grouped stage: each unit holds a perpendicular lane so the squad fans across the wall instead of single-filing onto one breach point (the bunching screenshot)
    if(d<STAND-40){ const pa=Math.atan2(bcy-b.y,bcx-b.x)+Math.PI; botMoveTo(b,b.x+Math.cos(pa)*120,b.y+Math.sin(pa)*120,120,dt); return; }
    botGoto(b,bcx,bcy,150,dt); return; }

  if(b.state==='return'){ b._wasRaid=false; const d=Math.hypot(b.hx-b.x,b.hy-b.y); b._retT=(b._retT||0)+dt;
    const rsp=(game._team&&game._team[b.owner]&&!game._team[b.owner].sealed)?215:160;   // base has a gap -> hustle home to reseal it fast (keep the base sealed)
    botGoto(b, b.hx+(b._lane||0), b.hy+(b._hoff||0), rsp, dt);                      // walk to the Tool Cupboard (units must REACH the TC to bank)
    if(d<TILE*1.5){ depositHome(b); b.state='gather'; b._retT=0; b._homing=false; }           // at the TC -> deposit + go back to work
    else if(b._retT>7 && !b._homing && !botBreached(b)){ depositHome(b); b.state='gather'; b._retT=0; }   // timeout banks a stranded load, but a unit returning to SEAL a breach keeps homing until it arrives (never abandons the repair)
    return; }

  if(b.state==='trade'){ const s=game.shop; const SR=(typeof SAFE_R!=='undefined'?SAFE_R:620);   // sell a load for scrap at the trade store (the team FLIES the copter when it has one)
    if(!s){ b.state='return'; return; }
    if(!b.tradeDone){                                                                            // outbound: reach the trade zone
      const tang=((b.id||0)*2.39996), tox=Math.cos(tang)*SR*0.34, toy=Math.sin(tang)*SR*0.34;    // DE-BUNCH: fan units around the shop on a golden-angle ring instead of all converging on the exact centre (they still land inside SR*0.55 to trade) — kills the shared-waypoint pile-up/circling
      if(Math.hypot(s.x-b.x,s.y-b.y) > SR*0.55){ if(b.copter && !b.copter.destroyed) botFlyTo(b,s.x+tox,s.y+toy,dt,SR*0.5); else botGoto(b,s.x+tox,s.y+toy,150,dt); return; }
      let got=0; for(const [r,per,rate] of [['wood',100,6],['stone',100,9],['metal',50,10]]){ while(b.inv[r]>=per){ b.inv[r]-=per; b.scrap=(b.scrap||0)+rate; got+=rate; } }   // SELL surplus
      if(got>0) addFloat(b.x,b.y-20,'+'+got+' scrap','#ffe07a');
      if(b.primary || b._rocketer){ const tcw=game.deploys.get(b.tcKey); if(tcw&&tcw.store&&(tcw.store.scrap||0)>0){ const reserve=(b._rocketer&&!b.primary)?100:0; const take=Math.max(0,(tcw.store.scrap||0)-reserve); if(take>0){ b.scrap=(b.scrap||0)+take; tcw.store.scrap-=take; } } }   // withdraw the team's BANKED scrap so the hoard actually gets spent — the PRIMARY drains it fully; a non-primary ROCKETER leaves a 50-scrap reserve so the primary can still hire workers / pay upkeep (don't starve the economy lever); leftovers are re-banked at home
      let bought=false;                                                                          // BUY what the team needs (the reason teams fly here): a transport (for far raids) FIRST, then EXPLOSIVES (rockets + satchels — not craftable), a grenade, HQM
      if(b.primary && (b.scrap||0)>=TRANSPORT.cost && !teamTransport(b.owner) && botFarthestEnemy(b)){ if(buyTransport(b)) bought=true; }   // a base is too far to walk-raid -> get the ferry
      if(!b.weak && b.gun==='pistol' && (b.scrap||0)>=10){ b.scrap-=10; b.gun=(b.shotgun?'shotgun':'rifle'); bought=true; addFloat(b.x,b.y-58,'+'+b.gun,'#cfe0a0'); }   // PROGRESSION: upgrade the starting pistol to a rifle/shotgun (weak teams stay pistol)
      if(b.hard && !b.rifleLaser && b.gun==='rifle' && (b.scrap||0)>=10){ b.scrap-=10; b.rifleLaser=true; bought=true; addFloat(b.x,b.y-58,'+laser','#ff6a6a'); }   // HARD teams grab the rifle LASER SIGHT early (cheap accuracy upgrade, prioritized)
      while(b.rockets<12 && (b.scrap||0)>=12){ b.scrap-=12; b.rockets++; bought=true; }                      // EXPLOSIVES first — stockpile a real BREACH supply (up to 12), funded by the team's banked scrap, so raids can actually crack a base
      while((b.satchels||0)<4 && (b.scrap||0)>=8){ b.scrap-=8; b.satchels=(b.satchels||0)+1; bought=true; }   // satchels are bought here too (the only source)
      if((b.grenades||0)<2 && (b.scrap||0)>=8){ b.scrap-=8; b.grenades=(b.grenades||0)+1; bought=true; }
      if(b.hard){                                                                                          // HARD teams PRIORITIZE personal protection: body armor + facemask to max, then the rifle laser sight (tighter aim) — bought right after the breach essentials
        while((b.scrap||0)>=14 && (b.bodyArmor||0)<3){ b.scrap-=14; b.bodyArmor=(b.bodyArmor||0)+1; bought=true; addFloat(b.x,b.y-46,'+armor','#9fb0c8'); }
        while((b.scrap||0)>=12 && (b.facemask||0)<3){ b.scrap-=12; b.facemask=(b.facemask||0)+1; bought=true; }
      }
      while(b.hard && (b.scrap||0)>=20 && (b.hqm||0)<60){ b.scrap-=14; b.hqm=(b.hqm||0)+10; bought=true; }   // hard bots convert SURPLUS scrap into HQM (multiple per visit) -> they actually armor-plate the whole base
      if((!b.copter||b.copter.destroyed) && !b._aboard && (b.scrap||0)>=MINICOPTER_COST && teamCopterCount(b.owner)<(b.hard?3:2)){   // SURPLUS -> buy an extra team minicopter (a team can field MULTIPLE), AFTER combat essentials so it never starves rockets. Reuses the per-unit copter logic (fly/land/trade/park/wreck)
        b.scrap-=MINICOPTER_COST; b.copter={x:b.x-TILE*2, y:b.y, angle:0, rotor:0, spin:0, vx:0, vy:0, hp:160, max:160, destroyed:false}; bought=true; addFloat(b.x,b.y-46,'+minicopter','#bfe3ff'); }
      if(b.primary && b.rockets>=2 && botHireWorker(b)) bought=true;                              // surplus scrap (pooled in the TC) -> HIRE an extra worker (capped) — a fast way to grow the economy
      if(bought) addFloat(b.x,b.y-34,'resupplied','#bfe3ff');
      b.tradeDone=true; return; }
    if(b.flying){ const px=b.hx-TILE*4, py=b.hy; if(botFlyTo(b,px,py,dt,46)){ b.flying=false; if(b.copter){ b.copter.spin=0; b.copter.x=b.x; b.copter.y=b.y; } b.tradeDone=false; b.state='return'; } return; }   // fly home, land at the parking spot, then walk in
    b.tradeDone=false; b.state='return'; return; }

  // gather
  b._wasRaid=false; b._retT=0;
  const carried=b.inv.wood+b.inv.stone+b.inv.metal;
  const atHome=Math.hypot(b.hx-b.x,b.hy-b.y)<200;                                         // only truly at the base
  b.gathering=false;
  // BUILDER duty: ONE assigned unit owns proactive maintenance/EXPANSION (committed task) -> gatherers never break stride to build (that constant build×1 was the churn). Go home, then seal/repair/expand.
  if(b._buildDuty){
    // The builder GATHERS efficiently like everyone else and builds OPPORTUNISTICALLY when it's home (its
    // deposit run) — building/sealing are positionless (draw the TC stockpile via botStores). It used to be
    // yanked home EVERY FRAME for proactive expansion, but botBuild only acts every expandT (2.5-6s), so
    // between ticks it fell through to gather, walked out, got yanked home again: the toNode<->build
    // oscillation (a big share of the looping). Now only an URGENT breach rushes it home; proactive build
    // happens when it's already home, so it never oscillates AND stays in the economy.
    if(breach){ b._act='build'; if(!atHome){ botGoto(b, b.hx+(b._lane||0), b.hy+(b._hoff||0), BOT_SPEED, dt); return; }   // a HOLE -> rush home and seal NOW
      if(carried>0 || (b.scrap||0)>0) depositHome(b); botSealWall(b,breach); b._maintT=game.t; return; }
    if(atHome){ if(carried>0 || (b.scrap||0)>0) depositHome(b);                               // home on a deposit run -> repair / build a tick, then carry on
      if(damaged){ botRepairWall(b,damaged); b._act='build'; b._maintT=game.t; return; }
      if(b.expandT<=0){ b.expandT=rand(2.5,6); if(botBuild(b)){ b._act='build'; b._maintT=game.t; return; } } }
    // otherwise -> fall through and GATHER (committed node), never yanked home for proactive build
  }
  if(atHome){                                                                            // gatherers passing home: deposit + URGENT reactive seal/repair only (instant, no 'build' return -> no churn); proactive expansion is the builder's job
    if(carried>0 || (b.scrap||0)>0) depositHome(b);
    const breach2 = botBreached(b);
    if(breach2){ if(botSealWall(b,breach2)) b._maintT=game.t; }                           // seal a hole (instant) — keep moving to gather after
    else { const dmg=botDamagedWall(b); if(dmg && botRepairWall(b,dmg)) b._maintT=game.t; }
  }
  // ANTI-IDLE: a unit MILLING (barely net-moving) near home, not harvesting/building -> deposit, then commit STRAIGHT to a node. Gated on LOW NET MOVEMENT (not just distance) so it catches idlers anywhere around a big 10x10 base WITHOUT hijacking units actually walking out to gather (those net-move fast). Box->TC fills the TC so workers run out of build tasks and would otherwise idle.
  { if((b._aiT=(b._aiT||0)+dt)>=1){ b._aiT=0; b._aiNet=(b._aiPx!==undefined)?Math.hypot(b.x-b._aiPx,b.y-b._aiPy):999; b._aiPx=b.x; b._aiPy=b.y; } }
  if((b._aiNet||999)<70 && Math.hypot(b.hx-b.x,b.hy-b.y)<900 && !b.gathering && (game.t-(b._maintT||-1e9))>=2.5){ b._idleT=(b._idleT||0)+dt;   // barely moved this second + near home + not harvesting/building = milling
    if(b._idleT>1.5){ b._idleT=0; if(carried>0||(b.scrap||0)>0) depositHome(b);
      const nn=botPickNode(b);
      if(nn){ const d=Math.hypot(nn.x-b.x,nn.y-b.y);
        if(d>nn.r+22){ b._act='toNode'; botGoto(b,nn.x,nn.y,BOT_SPEED,dt); return; }
        else { b._act='gather'; b.angle+=angDiff(b.angle,Math.atan2(nn.y-b.y,nn.x-b.x))*Math.min(1,dt*8); b.gathering=true; b.swing=(b.swing||0)+dt*9; if(b.think<=0){ const got=Math.min(b.jack?24:8,nn.amount); nn.amount-=got; b.inv[nn.base]=(b.inv[nn.base]||0)+got; b.think=0.5; burst(nn.x,nn.y,'#caa07a',3,90); } return; } }
      else { b._act='roam'; botRoam(b,dt); return; } } }
  else b._idleT=0;
  // (bank-when-full / go-buy-rockets / launch-raid are decided by the committed PLANNER above — the gather handler now PURELY gathers: loot interrupt, airdrop, monument run, node harvest)
  const lt = botNearestLoot(b);                  // dropped loot nearby -> COMMIT to ONE item (botNearestLoot); abandon just THAT item if it's unreachable, not all loot
  if(lt){ b._act='loot'; const d=Math.hypot(lt.x-b.x,lt.y-b.y);
    if(d>22){ if(b._blocked){ if((b._lootStuck=(b._lootStuck||0)+dt)>1.5){ b._lootSkip=lt; b._lootSkipT=(game.t||0)+6; b._lootTgt=null; b._lootStuck=0; } } else b._lootStuck=0; botGoto(b,lt.x,lt.y,170,dt); }   // stuck >1.5s reaching THIS item -> skip it for 6s (try other loot / resume work), never freeze in 'loot'
    return; }
  if(game.airdrop){ const a=game.airdrop, tx=a.x, ty=(a.fall<1?a.gy:a.y), da=Math.hypot(tx-b.x,ty-b.y);   // race to an active airdrop (high-value) and crack it open
    if(da<2600){ b._act='airdrop'; if(a.fall>=1 && da<150){ b.angle += angDiff(b.angle, Math.atan2(a.y-b.y,a.x-b.x))*Math.min(1,dt*10); botShoot(b,a.x,a.y); return; }   // landed -> shoot the crate so the loot spills
      botGoto(b,tx,ty,165,dt); return; } }                                               // else close in (and wait under a still-falling crate)
  // MONUMENT RUN as a COMMITTED excursion (not a per-frame interrupt): start one occasionally, then SEE IT THROUGH (clear guards + all crates) before resuming gather — no gather<->monument churn.
  if(!b._endgame && !(b._leave>0)){
    if(!b._monRun && (game.t||0)>(b._monCd||0)){ const m=botNearestMonument(b);
      if(m && botMonumentBarrel(b,m)){ const dm=Math.hypot(m.x-b.x,m.y-b.y), homeDist=Math.hypot(m.x-b.hx,m.y-b.hy);
        if(carried<200 && (homeDist<2100 || dm<1300)){ b._monRun=m; b._monRunT=(game.t||0); } } }   // only loot a monument NEAR HOME / one the unit is already close to — never trek across the map (a big time sink)
    if(b._monRun){ const m=b._monRun, dm=Math.hypot(m.x-b.x,m.y-b.y), bar=botMonumentBarrel(b,m);
      if(!bar || carried>=340 || (game.t-(b._monRunT||0))>12){ b._monRun=null; b._monCd=(game.t||0)+rand(60,110); }   // cleared / full / 12s spent -> done; long cool-down. Each excursion is time-bounded so monument looting never dominates a unit's time.
      else { b._act='monument'; const guard=botMonumentGuard(b,m);
        if(guard && dm<m.r+320){ const dg=Math.hypot(guard.x-b.x,guard.y-b.y);             // clear the NPCs first
          if(dg>340 || (typeof wallBlocksView==='function' && wallBlocksView(b.x,b.y,guard.x,guard.y))){ botGoto(b,guard.x,guard.y,160,dt); return; }
          b.angle += angDiff(b.angle, Math.atan2(guard.y-b.y,guard.x-b.x))*Math.min(1,dt*10); botShoot(b,guard.x,guard.y); return; }
        const db=Math.hypot(bar.x-b.x,bar.y-b.y);
        if(db>120){ botGoto(b,bar.x,bar.y,150,dt); return; }
        b.angle += angDiff(b.angle, Math.atan2(bar.y-b.y,bar.x-b.x))*Math.min(1,dt*10); botShoot(b,bar.x,bar.y); return; } } }
  const node=botPickNode(b);                                                             // COMMITTED node (kept until depleted) -> walk there once & harvest it out, no churn/wander
  if(node){ const d=Math.hypot(node.x-b.x,node.y-b.y);
    if(d>node.r+22){ b._act='toNode'; botGoto(b,node.x,node.y,BOT_SPEED,dt); }            // walk to the node (out through our door)
    else { b._act='gather'; b.angle += angDiff(b.angle, Math.atan2(node.y-b.y,node.x-b.x))*Math.min(1,dt*8);   // STAND & harvest — no oscillation, with a tool swing
      b.gathering=true; b.swing=(b.swing||0)+dt*9;
      if(b.think<=0){ const got=Math.min(b.jack?24:8,node.amount); node.amount-=got; b.inv[node.base]=(b.inv[node.base]||0)+got; b.think=0.5; burst(node.x,node.y,'#caa07a',3,90); } }   // jackhammer = 3x
  } else {                                                                               // NO reachable node anywhere (rare) -> run a monument, else roam
    const m=botNearestMonument(b);
    if(m){ const dm=Math.hypot(m.x-b.x,m.y-b.y); const bar=botMonumentBarrel(b,m);
      if(bar){ b._act='monument'; const db=Math.hypot(bar.x-b.x,bar.y-b.y); if(db>120){ botGoto(b,bar.x,bar.y,150,dt); } else { b.angle+=angDiff(b.angle,Math.atan2(bar.y-b.y,bar.x-b.x))*Math.min(1,dt*10); botShoot(b,bar.x,bar.y); } }
      else if(dm>m.r+40){ b._act='monument'; botGoto(b,m.x,m.y,150,dt); }                 // monument tapped out (no barrels) -> don't park on it, roam on
      else { b._act='roam'; botRoam(b,dt); } }
    else { b._act='roam'; botRoam(b,dt); } }
}

