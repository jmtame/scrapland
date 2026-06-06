"use strict";
/* ---------------- per-base helpers ---------------- */
function baseAlive(b){ if(b.ally) return true; if(b._unfounded) return true; if(b.isPlayer) return !!game.deploys.get(b.boxKey); const tc=game.deploys.get(b.tcKey); return !!(tc && tc.type==='cupboard'); }
function playerBaseTarget(){ let tc=null;                                              // the player's base as a raid target — the Tool Cupboard (box removed; all loot is in the TC)
  for(const [k,s] of game.deploys){ if(s.owner===OWNER && s.type==='cupboard'){ tc={k}; break; } }
  if(!tc) return null; const [gx,gy]=tc.k.split(',').map(Number);
  return {owner:OWNER, boxKey:tc.k, tcKey:tc.k, hx:gx*TILE+TILE/2, hy:gy*TILE+TILE/2, isPlayer:true}; }
function botThreat(b){ if((b.disengageT||0)>0) return null;        // cooling off from a standoff (still fights back if shot, via retaliate)
  if(typeof inSafeZone==='function' && inSafeZone(b.x,b.y)) return null;   // never fight while inside the trade safe zone (weapons disabled there)
  const RR=REACT_R*REACT_R; let best=null, bd=1e18;                 // LOCAL only: react to hostiles within our own viewport (of the BODY), not distant events near our base
  const consider=(tx,ty,vx,vy)=>{ if(typeof inSafeZone==='function' && inSafeZone(tx,ty)) return; if(typeof boulderLine==='function' && boulderLine(b.x,b.y,tx,ty)) return; const d=dist2(b.x,b.y,tx,ty); if(d<bd){ bd=d; best={x:tx,y:ty,vx:vx||0,vy:vy||0}; } };   // LOCAL (within REACT_R of the body). A SOLID boulder on the line is real cover -> don't target through it (no shooting at each other across a boulder). We still engage foes behind our own walls (routing reaches them).
  if(!b.ally && !player.dead && !player.inCopter && !game.ghost && dist2(player.x,player.y,b.x,b.y)<RR) consider(player.x,player.y,player.vx,player.vy);
  for(const o of game.enemies){ if(o===b||o.dead||o.flying||o.eliminated||o.owner===b.owner) continue;   // never target a teammate / our own workers
    if(dist2(o.x,o.y,b.x,b.y)<RR) consider(o.x,o.y,o.vx,o.vy); }     // a hostile within our local view -> engage (a raider AT our base is in-view when we're home; a far foe is the RETURN logic's job, not a reactive charge)
  if(game.animals) for(const a of game.animals){ if(a.hp<=0||!a.aggro) continue; if(dist2(a.x,a.y,b.x,b.y)<360*360) consider(a.x,a.y); }   // fight off aggressive animals nearby
  if(game.guards) for(const g of game.guards){ if(g.dead) continue; if(dist2(g.x,g.y,b.x,b.y)<480*480) consider(g.x,g.y); }   // monument NPCs are hostile -> engage them (guards only exist near monuments, so this only fires there)
  return best; }
function botNearThreat(b){ if((b.disengageT||0)>0) return null;       // a hostile right next to our BODY (independent of home) -> fixes raiders not returning fire & two teams ignoring each other at monuments
  if(typeof inSafeZone==='function' && inSafeZone(b.x,b.y)) return null;   // no fighting inside the trade safe zone
  const R=430, RR=R*R; let best=null, bd=1e18;
  const consider=(tx,ty,vx,vy)=>{ if(typeof inSafeZone==='function' && inSafeZone(tx,ty)) return; if(typeof boulderLine==='function' && boulderLine(b.x,b.y,tx,ty)) return; const d=dist2(b.x,b.y,tx,ty); if(d<bd){ bd=d; best={x:tx,y:ty,vx:vx||0,vy:vy||0}; } };   // a solid boulder on the line = cover -> skip (don't shoot through it)
  if(!b.ally && !player.dead && !player.inCopter && !game.ghost && dist2(player.x,player.y,b.x,b.y)<RR) consider(player.x,player.y,player.vx,player.vy);
  for(const o of game.enemies){ if(o===b||o.dead||o.flying||o.eliminated||o.owner===b.owner) continue;
    if(dist2(o.x,o.y,b.x,b.y)<RR) consider(o.x,o.y,o.vx,o.vy); }
  if(game.guards) for(const g of game.guards){ if(g.dead) continue; if(dist2(g.x,g.y,b.x,b.y)<RR) consider(g.x,g.y); }   // a monument guard right next to us -> shoot it
  return best; }
function botMonumentGuard(b,m){ if(!game.guards||!m) return null; let best=null, bd=1e18; const rr=(m.r+280)*(m.r+280);   // nearest LIVING guard at this monument
  for(const g of game.guards){ if(g.dead) continue; if(dist2(g.x,g.y,m.x,m.y)>rr) continue; const d=dist2(b.x,b.y,g.x,g.y); if(d<bd){ bd=d; best=g; } } return best; }
function botNearestNode(b){ let best=null, bd=1500*1500;
  const now=(game.t||0);
  for(const o of game.resources){ if(o.amount<=0) continue;
    if(o===b._skipNode && (game.t||0)<(b._skipT||0)) continue;                      // a node we just gave up on (was circling toward it) -> ignore briefly so we re-pick
    if(typeof foundationAt==='function' && foundationAt(Math.floor(o.x/TILE),Math.floor(o.y/TILE))) continue;   // node sits ON a base foundation (built over / walled in) -> unreachable; never target it (root of in-base circling: a unit endlessly routing toward a node behind its own — or an enemy's — walls)
    const dh=dist2(o.x,o.y,b.hx,b.hy); if(dh>2200*2200 || dh<240*240) continue;   // ranged ring: not too close (park) nor too far
    if(o._by && o._by!==b && !o._by.dead && !o._by.eliminated && o._by.owner===b.owner && (now-(o._byT||0))<2.5) continue;  // a teammate already works this node -> pick another so units SPREAD OUT (no clumping)
    const d=dist2(b.x,b.y,o.x,o.y); if(d<bd){ bd=d; best=o; } }
  if(best){ best._by=b; best._byT=now; }
  return best; }
function botAnyNode(b){ let best=null, bd=1e18; const now=(game.t||0);                  // nearest resource ANYWHERE (no home-distance cap) -> idle units range out to work, never park at base
  for(const o of game.resources){ if(o.amount<=0) continue;
    if(o===b._skipNode && now<(b._skipT||0)) continue;
    if(typeof foundationAt==='function' && foundationAt(Math.floor(o.x/TILE),Math.floor(o.y/TILE))) continue;   // node built over / walled inside a base -> unreachable, skip it
    if(dist2(o.x,o.y,b.hx,b.hy)<240*240) continue;                                       // not right on top of home
    if(o._by && o._by!==b && !o._by.dead && !o._by.eliminated && o._by.owner===b.owner && (now-(o._byT||0))<2.5) continue;   // a teammate already works it -> spread out
    const d=dist2(b.x,b.y,o.x,o.y); if(d<bd){ bd=d; best=o; } }
  if(best){ best._by=b; best._byT=now; } return best; }
function botPickNode(b){            // a gatherer COMMITS to ONE node until it's depleted (or a teammate claims it) — NOT a per-frame re-pick. The old re-pick-nearest-every-frame churned the target (~13/min) and units wandered without harvesting (the wasted-movement bug).
  const now=game.t||0;
  const ok=(o)=> o && o.amount>0 && !(typeof foundationAt==='function' && foundationAt(Math.floor(o.x/TILE),Math.floor(o.y/TILE)));   // has resources & reachable (not walled into a base)
  const claimedByOther=(o)=> o._by && o._by!==b && !o._by.dead && !o._by.eliminated && o._by.owner===b.owner && (now-(o._byT||0))<3;     // a teammate is already working it
  if(ok(b._tgtNode) && !claimedByOther(b._tgtNode)){ b._tgtNode._by=b; b._tgtNode._byT=now; return b._tgtNode; }   // KEEP our committed node until it's exhausted
  // else claim a fresh node, CONFINED to the base: search expanding HOME rings (≈1 viewport, then wider) and only step out if a ring is empty.
  // Within a ring pick the node nearest the UNIT (reachable, fans out via claims). A unit out at a monument therefore returns to a home-ring node instead of gathering far away.
  let best=null, bd=1e18;
  for(const R of [1400,2800,5600,1e9]){ const R2=R*R; best=null; bd=1e18;
    for(const o of game.resources){ if(!ok(o)||claimedByOther(o)) continue;
      if(o===b._skipNode && now<(b._skipT||0)) continue;
      if(dist2(o.x,o.y,b.hx,b.hy) > R2) continue;                                  // must be within this ring OF HOME
      const clear=(typeof navLOS!=='function') || navLOS(b.x,b.y,o.x,o.y);         // PREFER DIRECTLY-REACHABLE nodes: picking the straight-line-nearest node even when a lake/coast/boulder is in the way made units WIND the long way around it (the "circling outside the base, not gathering" the user saw). A terrain-blocked node is heavily penalised so a clear node wins unless it's much farther.
      const du=dist2(b.x,b.y,o.x,o.y)*(clear?1:6); if(du<bd){ bd=du; best=o; } }
    if(best) break; }                                                              // found one in this ring -> stop (expand outward only when the inner ring is exhausted)
  if(best){ best._by=b; best._byT=now; } b._tgtNode=best||null; return b._tgtNode; }
function botRoam(b,dt){ // last-resort: keep MOVING across the map (never loiter in one region) when there's no node/monument to work
  if(!b._roam || Math.hypot(b._roam.x-b.x,b._roam.y-b.y)<140 || (b._roamT=(b._roamT||0)-dt)<=0){
    for(let k=0;k<12;k++){ const x=rand(800,WORLD.w-800), y=rand(800,WORLD.h-800);
      if((typeof onLand!=='function'||onLand(x,y)) && (typeof lakeAt!=='function'||!lakeAt(x,y))){ b._roam={x,y}; b._roamT=rand(7,13); break; } } }
  if(b._roam) botGoto(b,b._roam.x,b._roam.y,140,dt); }
function botNearestLoot(b){ if(!game.loot||!game.loot.length){ b._lootTgt=null; return null; }   // grab dropped loot only if it's reasonably CLOSE (don't run across the map for scraps)
  // COMMIT to ONE loot item until grabbed / gone / out of range — re-picking the nearest every frame made units ZIGZAG between scattered items near their base (a big chunk of the near-base loop). The loot magnet pulls the committed item in.
  const skipped=(o)=> o===b._lootSkip && (game.t||0)<(b._lootSkipT||0);
  if(b._lootTgt && game.loot.indexOf(b._lootTgt)>=0 && dist2(b.x,b.y,b._lootTgt.x,b._lootTgt.y)<560*560 && !skipped(b._lootTgt)) return b._lootTgt;
  let best=null, bd=520*520;
  for(const o of game.loot){ if(skipped(o)) continue; const d=dist2(b.x,b.y,o.x,o.y); if(d<bd){ bd=d; best=o; } }
  b._lootTgt=best; return best; }
function botNearestMonument(b){ if(!game.monuments||!game.monuments.length) return null; let best=null, bd=1e18;
  for(const m of game.monuments){ const d=dist2(b.x,b.y,m.x,m.y); if(d<bd){ bd=d; best=m; } } return best; }
function botMonumentBarrel(b,m){ if(!game.barrels) return null; let best=null, bd=1e18; const rr=(m.r+50)*(m.r+50);   // a crate/barrel at this monument, nearest to the bot
  for(const o of game.barrels){ if(o.hp<=0) continue; if(dist2(o.x,o.y,m.x,m.y)>rr) continue; const d=dist2(b.x,b.y,o.x,o.y); if(d<bd){ bd=d; best=o; } } return best; }
function botRaidTarget(b){ let best=null, bd=1e18;
  for(const o of game.enemies){ if(o.owner===b.owner || !o.primary || o._unfounded || !baseAlive(o)) continue;   // every ALIVE, FOUNDED enemy base is a target -> the field collapses to a winner
    const box=game.deploys.get(o.boxKey); const loot=box&&box.store?(box.store.wood+box.store.stone+box.store.metal):0;
    const turrets=botOwnerTurrets(o.owner);
    const score = dist2(b.hx,b.hy,o.hx,o.hy) * (1 + turrets*0.30) / (1 + loot*0.003);   // prefer closer + weaker-defended + lootier
    if(score<bd){ bd=score; best=o; } }
  if(!b.ally){ const pt=playerBaseTarget(); if(pt){ const score=dist2(b.hx,b.hy,pt.hx,pt.hy); if(score<bd){ bd=score; best=pt; } } }   // enemies raid the player too; allied workers don't
  return best; }
function botFarthestEnemy(b){ let best=null, bd=-1;                                            // the FARTHEST alive enemy base — a transport-heli raid target (otherwise too far to bother walking)
  for(const o of game.enemies){ if(o.owner===b.owner || !o.primary || !baseAlive(o)) continue; const d=dist2(b.hx,b.hy,o.hx,o.hy); if(d>bd && d>3000*3000){ bd=d; best=o; } }
  return best; }
function botMoveTo(b,tx,ty,sp,dt){ b._navX=tx; b._navY=ty; const l=Math.hypot(tx-b.x,ty-b.y)||1; let step=sp*dt;
  if(typeof lakeAt==='function'){ const _lk=lakeAt(b.x,b.y); if(_lk && !_lk.frozen) step*=0.5; }   // wading through lake water is slow
  game._passOwner=b.owner; game._passWalls=false; game._noDoor=!!b._noDoor; game._passDeploy=!!b._escaping; game._ghostMove=!!b._hardEscape; game._escapeSoft=!!b._escaping; game._mustOpenDoor=true;   // NO unit phases walls (own OR enemy) — INCLUDING the player's allied workers (they used to phase). Everyone uses doors (which they must OPEN) / breaches. A stuck-escape only phases TERRAIN + their own turret/box.
  const goal=Math.atan2(ty-b.y,tx-b.x);
  const free=a=>!blocked(b.x+Math.cos(a)*step, b.y+Math.sin(a)*step, 12);
  let mv=null;
  const canLeave = !b._wf || (free(goal) && l < (b._wfHit||1e9)-10);          // Bug2 leave-point: once hugging an obstacle, DON'T cut back toward the goal until we're genuinely closer than where we hit it -> rounds lakes/enemy bases instead of orbiting them forever
  if(canLeave && free(goal)){ mv=goal; b._wf=0; }                            // clear path & allowed to leave -> straight
  else {                                                                      // blocked (or still rounding): commit ONE turn side and hug the obstacle (no oscillation)
    if(!b._wf){ b._wf = free(goal+0.6) ? 1 : (free(goal-0.6) ? -1 : (((b.id||0)&1)?1:-1)); b._wfHit=l; }   // remember the goal-distance where we hit the wall
    for(let k=1;k<=12 && mv===null;k++){ const a=goal + b._wf*k*(Math.PI/10); if(free(a)) mv=a; }
    if(mv===null) for(let k=1;k<=12 && mv===null;k++){ const a=goal - b._wf*k*(Math.PI/10); if(free(a)) mv=a; }
    if(mv===null && free(goal)){ mv=goal; b._wf=0; }                          // fully boxed except straight -> take it
  }
  // ANTI-JITTER momentum guard: while hugging an obstacle (not escaping), NEVER reverse the heading >130° in one frame — that corner flip-flop IS the jitter. Prefer a free direction near the last heading; if none, don't move (a brief block trips the clean door-cut/escape instead of vibrating).
  if(mv!==null && b._wf && !b._escaping && b._lastMv!==undefined && Math.abs(angDiff(mv,b._lastMv))>2.3){
    let alt=null; for(let k=0;k<=9 && alt===null;k++){ for(const s of (k===0?[0]:[1,-1])){ const a=b._lastMv + s*k*(Math.PI/14); if(Math.abs(angDiff(a,b._lastMv))<=1.7 && free(a)){ alt=a; break; } } }
    mv=alt;   // keep momentum, else null (block -> escape handles it; no reversal vibration)
  }
  if(mv!==null){ b.x+=Math.cos(mv)*step; b.y+=Math.sin(mv)*step; b._lastMv=mv; }
  game._passOwner=null; game._passWalls=false; game._noDoor=false; game._passDeploy=false; game._ghostMove=false; game._escapeSoft=false; game._mustOpenDoor=false;
  b.x=clamp(b.x,12,WORLD.w-12); b.y=clamp(b.y,12,WORLD.h-12);
  b.angle += angDiff(b.angle, mv!==null?mv:goal) * Math.min(1, dt*7);         // smooth facing (no twitch)
  b.vx = mv!==null?Math.cos(mv)*sp:0; b.vy = mv!==null?Math.sin(mv)*sp:0;       // track velocity (used for predictive aim)
  b._blocked = mv===null;
  return l; }
function botUseDoors(b){                                                                       // OPEN any of our team's doors we're walking up to (incl. the player's allied workers) so we're never blocked at a closed door; they auto-close shortly after we pass (sweep in updateEnemies)
  const gx=Math.floor(b.x/TILE), gy=Math.floor(b.y/TILE);
  for(let ax=-1;ax<=1;ax++) for(let ay=-1;ay<=1;ay++){ const cx=gx+ax, cy=gy+ay;
    for(const k of ['V,'+cx+','+cy, 'V,'+(cx+1)+','+cy, 'H,'+cx+','+cy, 'H,'+cx+','+(cy+1)]){
      const w=game.walls.get(k); if(!w || w.type!=='door' || w.owner!==b.owner) continue;
      const sg=wallSegOf(k,w); if(Math.hypot((sg[0]+sg[2])/2-b.x,(sg[1]+sg[3])/2-b.y) < TILE*1.7){ w.open=true; w._closeT=(game.t||0)+1.0; } } } }
// PATH-FOLLOW around terrain (lakes/boulders/coast). When the straight line is terrain-clear -> go direct (identical to the old behaviour, no overhead). Otherwise follow a cached A* path of LOS-clear waypoints -> smooth, no reactive wall-hugging jitter, no orbiting big obstacles. Repaths only on goal-change / ~0.8s staleness (Perplexity's "repath on invalidation, not every frame"); transient blockers between waypoints are handled by botMoveTo's local sidestep, and a true stall by the anti-stuck watchdog / hard-escape.
function botNavStep(b,tx,ty,sp,dt){
  if(typeof navLOS!=='function' || navLOS(b.x,b.y,tx,ty)){ b._path=null; return botMoveTo(b,tx,ty,sp,dt); }
  b._pathT=(b._pathT||0)-dt;
  const goalMoved = b._pgx===undefined || Math.hypot(tx-b._pgx,ty-b._pgy)>180;
  if(!b._path || goalMoved || b._pathT<=0){ b._path=(typeof navFindPath==='function')?navFindPath(b.x,b.y,tx,ty):null; b._pgx=tx; b._pgy=ty; b._pathT=0.8; b._pathI=0; }
  if(!b._path || !b._path.length) return botMoveTo(b,tx,ty,sp,dt);            // no route -> fall back to local steering + recovery
  let i=b._pathI||0; const CS=(typeof NAV!=='undefined'&&NAV)?NAV.CS:128;
  while(i<b._path.length-1 && navLOS(b.x,b.y,b._path[i+1].x,b._path[i+1].y)) i++;   // skip ahead to the furthest waypoint already in sight
  while(i<b._path.length-1 && Math.hypot(b._path[i].x-b.x,b._path[i].y-b.y)<CS*0.6) i++;
  b._pathI=i; const wp=b._path[i];
  botMoveTo(b, wp.x, wp.y, sp, dt);
  return Math.hypot(tx-b.x,ty-b.y); }
// route through the base's own door instead of phasing walls (matches the player using doors)
function segHitsRect(x1,y1,x2,y2, rx0,ry0,rx1,ry1){    // does segment (1->2) touch/enter the axis-aligned rect? (used to detour around our own base)
  if((x1>rx0&&x1<rx1&&y1>ry0&&y1<ry1) || (x2>rx0&&x2<rx1&&y2>ry0&&y2<ry1)) return true;
  return segSeg(x1,y1,x2,y2, rx0,ry0,rx1,ry0) || segSeg(x1,y1,x2,y2, rx1,ry0,rx1,ry1) || segSeg(x1,y1,x2,y2, rx1,ry1,rx0,ry1) || segSeg(x1,y1,x2,y2, rx0,ry1,rx0,ry0); }
// WAYPOINT TRAVEL: decisions are made at PLAN time (goal-change / waypoint reached / ~0.7s staleness) — NOT every frame — so a grazing LOS/obstacle flicker can never flip the route and make the unit jitter. planTravel picks ONE route mode; botTravel commits to it.
function planTravel(b,tx,ty){
  const bb = (!b.ally && !b._unfounded) ? b._bb : null;                                  // only round our OWN built base (allies/unfounded have none)
  if(bb){ const M=TILE*1.7, ex0=bb.minx*TILE-M, ey0=bb.miny*TILE-M, ex1=(bb.maxx+1)*TILE+M, ey1=(bb.maxy+1)*TILE+M;   // wide berth keeps the round arc clear of the walls
    if(segHitsRect(b.x,b.y,tx,ty, ex0,ey0,ex1,ey1)){                                      // straight path clips our base -> round it. COMMIT to ONE rotation direction and follow corners IN ORDER until a corner has a clear shot to the goal. (The old code re-minimized a single "best" corner every step; when the goal sits level with the base, BOTH corners on the goal's side clip, so the unit ping-ponged between them and circled the base forever — THE loop bug. This walks one way and always terminates in <=4 corners.)
      const cs=[{x:ex0,y:ey0},{x:ex1,y:ey0},{x:ex1,y:ey1},{x:ex0,y:ey1}];                 // CW: NW, NE, SE, SW
      let s=0,sd=1e18; for(let k=0;k<4;k++){ const d=Math.hypot(cs[k].x-b.x,cs[k].y-b.y); if(d<sd){sd=d;s=k;} }   // corner nearest the unit = where we join the arc
      const build=(dir)=>{ const seq=[]; let k=s,px=b.x,py=b.y,len=0;
        for(let n=0;n<4;n++){ const c=cs[k]; seq.push(c); len+=Math.hypot(c.x-px,c.y-py); px=c.x; py=c.y;
          if(!segHitsRect(c.x,c.y,tx,ty, ex0,ey0,ex1,ey1)){ len+=Math.hypot(tx-c.x,ty-c.y); break; } k=(k+dir+4)%4; }
        return {seq,len}; };
      const cw=build(1), ccw=build(-1), pick=(cw.len<=ccw.len)?cw:ccw;                    // take the shorter way around
      b._plan={mode:'around', cs:pick.seq, i:0, rx0:ex0,ry0:ey0,rx1:ex1,ry1:ey1}; return; } }
  if(typeof navLOS==='function' && !navLOS(b.x,b.y,tx,ty)){                               // terrain (lake/boulder/coast) in the way -> follow a cached A* path of LOS-clear waypoints
    const path=(typeof navFindPath==='function')?navFindPath(b.x,b.y,tx,ty):null;
    if(path && path.length){ b._plan={mode:'path', path, i:0}; return; } }
  b._plan={mode:'direct'}; }
function botTravel(b,tx,ty,sp,dt){
  b._planT=(b._planT||0)-dt;
  const goalMoved = b._pgx===undefined || Math.hypot(tx-b._pgx,ty-b._pgy)>140;
  const roundIP = b._plan && b._plan.mode==='around';                                  // the arc is COMMITTED to its rotation direction -> don't replan mid-stride (re-planning flip-flops the unit between corners = circling). It self-terminates via the clear-LOS early-out below.
  if(goalMoved || !b._plan || (b._planT<=0 && !roundIP)){ planTravel(b,tx,ty); b._pgx=tx; b._pgy=ty; b._planT=0.7; }   // REPLAN only here — never mid-stride
  const pl=b._plan;
  if(pl.mode==='around'){
    if(segHitsRect(b.x,b.y,tx,ty, pl.rx0,pl.ry0,pl.rx1,pl.ry1)){                                        // still need to round the base
      let c=pl.cs[pl.i]||{x:tx,y:ty};
      if(Math.hypot(c.x-b.x,c.y-b.y)<TILE*0.8){ if(pl.i<pl.cs.length-1){ pl.i++; c=pl.cs[pl.i]; } else pl.mode='direct'; }   // reached this corner -> advance (forward only, never back) or, arc exhausted, go direct
      if(pl.mode==='around') return botMoveTo(b,c.x,c.y,sp,dt);
    } else pl.mode='direct';                                                                            // CLEAR shot to the goal -> break out of the arc immediately (this is what stops the orbit; the unit never finishes a needless lap)
  } else if(pl.mode==='path'){
    let i=pl.i||0; const P=pl.path, CS=(typeof NAV!=='undefined'&&NAV)?NAV.CS:128;
    while(i<P.length-1 && navLOS(b.x,b.y,P[i+1].x,P[i+1].y)) i++;                                        // skip to the furthest visible waypoint (monotonic -> no backward flip)
    while(i<P.length-1 && Math.hypot(P[i].x-b.x,P[i].y-b.y)<CS*0.6) i++;
    pl.i=i; if(i>=P.length-1 && navLOS(b.x,b.y,tx,ty)) pl.mode='direct';
  }
  if(pl.mode==='path'){ const wp=pl.path[pl.i]||{x:tx,y:ty}; botMoveTo(b,wp.x,wp.y,sp,dt); return Math.hypot(tx-b.x,ty-b.y); }
  return botMoveTo(b,tx,ty,sp,dt); }
function botGoto(b,tx,ty,sp,dt){
  sp = BOT_SPEED;   // UNIFORM travel speed for EVERY unit on foot (overrides the per-call speed) — no unit moves faster than another
  // GOAL LOCK: commit to a travel target for ~0.6s instead of re-picking every frame. The state machine sometimes issues two different targets on alternating frames (e.g. a node vs the door) -> per-frame goal flip = jitter. (Escapes/threats use their own paths, so this never blocks a real reaction.)
  if((b._glk=(b._glk||0)-dt)>0 && b._glX!==undefined && Math.hypot(b._glX-b.x,b._glY-b.y)>TILE*0.6){ tx=b._glX; ty=b._glY; }
  else { b._glX=tx; b._glY=ty; b._glk=0.6; }
  if(b.ally || !b.boxKey || b._unfounded) return botTravel(b,tx,ty,sp,dt);   // allied workers / UNFOUNDED units (no base built yet): waypoint travel directly — no phantom door-routing around a base that doesn't exist
  const p=b.boxKey.split(','); const gx0=+p[0], gy0=+p[1];
  if(!b._bb || (game.t-(b._bbT||0))>0.5){ b._bb=botBaseBounds(b.owner); b._bbT=game.t||0; }   // cache the FULL base footprint — bases GROW well past the original 3x3, and routing off the 3x3 made units circle the EXPANDED base (the at-base idle/jitter root)
  const bb=b._bb;
  const x0=(bb?bb.minx:gx0)*TILE, x1=((bb?bb.maxx:gx0+2)+1)*TILE, y0=(bb?bb.miny:gy0)*TILE, y1=((bb?bb.maxy:gy0+2)+1)*TILE;   // FULL footprint (multi-door: every side has a door, so the south row is no longer special)
  const pad=6, inside=(x,y)=> x>x0-pad && x<x1+pad && y>y0-pad && y<y1+pad;
  // HYSTERESIS on the in/out side: only flip when CLEARLY past the wall line (no door-edge jitter)
  const strongIn = b.x>x0+20 && b.x<x1-20 && b.y>y0+20 && b.y<y1-20;
  const strongOut = b.x<x0-20 || b.x>x1+20 || b.y<y0-20 || b.y>y1+20;
  if(b._side===undefined) b._side=inside(b.x,b.y);
  if(strongIn) b._side=true; else if(strongOut) b._side=false;          // in the deadband near a wall, keep the previous side (no flip-flop)
  const meIn=b._side, tgtIn=inside(tx,ty);
  if(meIn===tgtIn){                                                     // same side of the wall -> no door transit needed
    if(meIn) return botMoveTo(b,tx,ty,sp,dt);                           // both inside: the cupboard is passable to us, walk straight
    b._noDoor=true; const r=botTravel(b,tx,ty,sp,dt); b._noDoor=false; return r;   // both outside: waypoint travel — rounds our OWN base at a wide berth if it's in the way, else routes around terrain
  }
  // DOOR TRANSIT via the NEAREST door: ENTER the door closest to US, EXIT the door closest to the GOAL -> no rounding the whole base to one fixed door (the orbit/loop cause)
  const door = nearestDoor(b, meIn?tx:b.x, meIn?ty:b.y);
  if(!door){ b._noDoor=true; const r=botTravel(b,tx,ty,sp,dt); b._noDoor=false; return r; }   // no doors yet -> fall back to plain travel
  const lane=(b._lane||0);
  const ddx=door.x + (door.nx===0?lane:0), ddy=door.y + (door.ny===0?lane:0);   // per-unit lane ALONG the door (perpendicular to its outward normal) so units don't stack on the exact point
  const ox=ddx+door.nx*54, oy=ddy+door.ny*54, ix=ddx-door.nx*44, iy=ddy-door.ny*44;   // waypoints just OUTSIDE / INSIDE the chosen door
  if(tgtIn){                                                            // ENTER: line up outside the door, then COMMIT straight in (no reversing at the threshold)
    const along=(b.x-ddx)*door.nx+(b.y-ddy)*door.ny;                    // >0 = outside the door (along its outward normal)
    const perp=Math.abs((b.x-ddx)*(-door.ny)+(b.y-ddy)*door.nx);        // offset from the door's axis
    const aligned = along>8 && perp<TILE*0.6;
    if(aligned) b._entIn=0.9; else b._entIn=(b._entIn||0)-dt;           // once lined up at the opening, hold the inward push so crossing the wall-line doesn't flip us back out
    if(aligned || b._entIn>0) return botMoveTo(b, ix, iy, sp, dt);      // push inward through the opening
    b._noDoor=true; const r=botTravel(b, ox, oy, sp, dt); b._noDoor=false; return r;   // not lined up yet -> round to the outside-door point of the NEAREST door (a short hop, not a lap of the base)
  }
  return botMoveTo(b, ox, oy, sp, dt);                                  // EXIT: head straight out the chosen door (the one toward the goal); once outside -> "both outside" skirts to the target
}
function botShoot(b,tx,ty){ if(b.gunCd>0 || b.flying || b.dead) return;   // a bot in its copter (drawn as the copter) or dead never fires — no invisible shooters
  if(typeof inSafeZone==='function' && (inSafeZone(b.x,b.y)||inSafeZone(tx,ty))) return;   // guns are DISABLED in the trade safe zone (no shooting in or into it)
  if(typeof wallBlocksView==='function' && wallBlocksView(b.x,b.y,tx,ty)) return;   // needs line of sight
  if(typeof boulderLine==='function' && boulderLine(b.x,b.y,tx,ty)) return;         // a solid boulder is in the way -> hold fire (no shooting through the rock)
  if(b.gun==='shotgun' && Math.hypot(tx-b.x,ty-b.y)<420){ b.gunCd=0.34;     // SHOTGUN (bought): 6-pellet spread, brutal up close
    for(let p=0;p<6;p++){ const a=Math.atan2(ty-b.y,tx-b.x)+rand(-0.18,0.18), x=b.x+Math.cos(a)*18, y=b.y+Math.sin(a)*18;
      game.bullets.push({x,y,px:x,py:y,vx:Math.cos(a)*1050,vy:Math.sin(a)*1050,life:0.95,dmg:8,from:b.owner,enemy:true}); }
    burst(b.x+Math.cos(b.angle)*18,b.y+Math.sin(b.angle)*18,COL.flash,4,110); return; }
  let cd,sp,dmg,spd;                                                        // everyone STARTS with a pistol (weak — defend vs animals while building); buy a RIFLE/SHOTGUN at the trade zone to progress
  if(b.gun==='rifle'){ cd=b.hard?0.12:0.16; sp=b.hard?0.02:0.055; if(b.rifleLaser) sp*=0.45; dmg=b.hard?13:11; spd=1500; }   // rifle (upgraded); laser sight tightens spread
  else { cd=0.30; sp=0.10; dmg=7; spd=1150; }                              // pistol (start / weak / not yet upgraded)
  b.gunCd=cd; const ang=Math.atan2(ty-b.y,tx-b.x)+rand(-sp,sp), x=b.x+Math.cos(ang)*18, y=b.y+Math.sin(ang)*18;
  game.bullets.push({x,y,px:x,py:y,vx:Math.cos(ang)*spd,vy:Math.sin(ang)*spd,life:1.6,dmg,from:b.owner,enemy:true});
  burst(x,y,COL.flash,2,90); }
function botRocketAt(b,tx,ty){ if(typeof inSafeZone==='function' && (inSafeZone(b.x,b.y)||inSafeZone(tx,ty))) return;   // no weapons in the trade safe zone
  const ang=Math.atan2(ty-b.y,tx-b.x), x=b.x+Math.cos(ang)*22, y=b.y+Math.sin(ang)*22;
  game.rockets.push({x,y,vx:Math.cos(ang)*560,vy:Math.sin(ang)*560,life:2.8,w:WEAPONS.rocket,smoke:0,from:b.owner});
  burst(x,y,COL.flash,3,120); }
function botTryRocket(b,tx,ty,opts){ opts=opts||{}; if(b.rkCd>0 || b.rockets<=0) return false;   // single rocket choke point: never fire point-blank (anti-suicide)
  if(dist2(b.x,b.y,tx,ty) < ROCKET_MIN*ROCKET_MIN) return false;
  b.rkCd=opts.cd||2.4; b.rockets--; botRocketAt(b,tx,ty); return true; }
function botCombatStep(b,t,dt){    // one canonical "fight this point": LOS-gated fire + dead-band back-off + timed strafe (no jitter)
  const dd=Math.hypot(t.x-b.x,t.y-b.y);
  if(b.hp < b.max*0.35) botDropFence(b,t.x,t.y);                            // low HP -> drop cover
  let ax=t.x, ay=t.y;
  if(b.hard && (t.vx||t.vy)){ const bs=b.weak?1150:1500, lead=Math.min(0.7, dd/bs); ax=t.x+t.vx*lead; ay=t.y+t.vy*lead; }   // hard bots LEAD where the target is moving (not where it last fired)
  const los=!(typeof wallBlocksView==='function' && wallBlocksView(b.x,b.y,t.x,t.y));
  if(los && dd<460){ botShoot(b,ax,ay);
    b._backoff = dd<140 ? true : (dd>180 ? false : b._backoff);            // hysteresis band 140..180 -> no oscillation at the edge
    if(b._backoff){ botMoveTo(b, b.x+(b.x-t.x), b.y+(b.y-t.y), 120, dt); }  // too close -> back off
    else if((b.regenT||0)>0 || (b.retaliateT||0)>0){ b._strafeT=(b._strafeT||0)-dt; if(b._strafeT<=0){ b._strafe=(b._strafe===1?-1:1); b._strafeT=STRAFE_FLIP; }   // only DODGE (strafe) while actually taking fire; otherwise HOLD position and shoot (combat strafing is fine — excluded from the loop metric)
      const pa=Math.atan2(t.y-b.y,t.x-b.x)+b._strafe*Math.PI/2; botMoveTo(b, b.x+Math.cos(pa)*120, b.y+Math.sin(pa)*120, 120, dt); } }
  else { botGoto(b,t.x,t.y,170,dt); } }                                     // no LOS / far -> close in (via our door)
function botCopterFly(c,tx,ty,dt,maxv){   // shared AI copter physics — accelerate toward heading, drag, cap at the NORMAL cruise speed (matches the player; eases off near the target). No constant boost.
  c.spin=1; c.angle += angDiff(c.angle, Math.atan2(ty-c.y,tx-c.x))*Math.min(1,dt*4); c.rotor+=dt*46;
  c.vx=c.vx||0; c.vy=c.vy||0;
  const d=Math.hypot(tx-c.x,ty-c.y), thr=d>160?1:Math.max(0.12,d/160);                  // throttle eases off as we close -> decelerate into the target
  c.vx += Math.cos(c.angle)*COPTER.accel*thr*dt; c.vy += Math.sin(c.angle)*COPTER.accel*thr*dt;
  const dr=COPTER.drag*dt; c.vx-=c.vx*dr; c.vy-=c.vy*dr;
  const sp=Math.hypot(c.vx,c.vy), mx=(maxv||COPTER.speed); if(sp>mx){ c.vx=c.vx/sp*mx; c.vy=c.vy/sp*mx; }
  c.x=clamp(c.x+c.vx*dt,COPTER.r,WORLD.w-COPTER.r); c.y=clamp(c.y+c.vy*dt,COPTER.r,WORLD.h-COPTER.r); }
function botFly(b,tx,ty,dt){ const c=b.copter; if(!b.flying){ c.x=b.x; c.y=b.y; c.vx=0; c.vy=0; b.flying=true; }
  botCopterFly(c,tx,ty,dt); b.x=c.x; b.y=c.y; }
function botLand(b,dt){ const c=b.copter; const gx=Math.floor(b.x/TILE), gy=Math.floor(b.y/TILE);
  if(!foundationAt(gx,gy) && !game.deploys.has(gkey(gx,gy)) && !inSafeZone(b.x,b.y)){ b.flying=false; c.spin=0; }   // land on open ground only
  else { c.angle+=0.25; const sp=COPTER.boost*dt; c.x=clamp(c.x+Math.cos(c.angle)*sp,COPTER.r,WORLD.w-COPTER.r); c.y=clamp(c.y+Math.sin(c.angle)*sp,COPTER.r,WORLD.h-COPTER.r); c.rotor+=dt*46; b.x=c.x; b.y=c.y; } }
function botFlyTo(b,tx,ty,dt,reach){ const c=b.copter; if(!c||c.destroyed) return true;     // fly the team copter toward a point; true when arrived (airborne -> ignores ground collision, never stuck)
  if(!b.flying){ c.x=b.x; c.y=b.y; c.vx=0; c.vy=0; b.flying=true; c._flyT=0; }
  c._flyT=(c._flyT||0)+dt;
  botCopterFly(c,tx,ty,dt); b.x=c.x; b.y=c.y;
  const arrived = Math.hypot(tx-b.x,ty-b.y) < (reach||44) || c._flyT>9;            // ANTI-ORBIT: if we've been flying toward this point too long (circling it on momentum), settle and arrive — a minicopter never gets stuck airborne
  if(arrived){ if(c._flyT>9){ c.x=b.x=clamp(tx,COPTER.r,WORLD.w-COPTER.r); c.y=b.y=clamp(ty,COPTER.r,WORLD.h-COPTER.r); c.vx=c.vy=0; } c._flyT=0; }
  return arrived; }
