/* ============================================================================
   SCRAPLAND — enemy AI (separate file, classic script loaded before the main game)
   References globals defined in index.html's main script at call time:
   game, player, TILE, WORLD, COPTER, WEAPONS, COL, OWNER, SAFE_R, MIN_TC_DIST,
   PLAYER_R, dist, dist2, clamp, rand, randi, TAU, gkey, wallSegOf, blocked,
   foundationAt, inSafeZone, angDiff, addFloat, burst, worldToScreen, shadow, inView, ctx
   ========================================================================== */
"use strict";
const ENEMY_COLS = ['#b85b5b','#5b8bb8','#b89b5b','#7bb85b','#9b5bb8','#5bb8a8','#b8765b','#8b8b5b','#b85b9b','#6b78b8'];
const ENEMY_COUNT = 7;
const ROCKET_MIN = 230;        // never fire a rocket closer than this (anti-suicide; rocket splash R≈96)
const STRAFE_FLIP = 0.9;       // seconds between strafe-direction commits (was a per-frame random flip -> jitter)
const BOT_SPEED = 160;         // ONE uniform on-foot travel speed for EVERY unit (no unit moves faster than another)
const MINICOPTER_COST = 30;    // scrap to buy an EXTRA team minicopter at the trade zone (a team starts with one on the primary; units can buy more — capped)
const REACT_R = 640;           // a unit only REACTS to threats within its own viewport (~screen half-width) of its BODY. It still DECIDES to do far things (raid/monument/trade/return home) as deliberate goals — but it never reacts to a distant event it couldn't see. Localizing reactions kills the "charge a far foe across my own base" jitter.

function spawnEnemyBases(){
  const used=[{x:game.shop.x, y:game.shop.y, r:SAFE_R+500}, {x:player.x, y:player.y, r:700}];
  for(const m of (game.monuments||[])) used.push({x:m.x, y:m.y, r:SAFE_R+320});   // bases never spawn inside a monument no-build zone
  for(let i=0;i<ENEMY_COUNT;i++){
    let bx=0,by=0,ok=false;
    for(let t=0;t<120 && !ok;t++){
      bx=rand(1400,WORLD.w-1400); by=rand(1400,WORLD.h-1400); ok=true;
      if(typeof landFactor==='function' && (landFactor(bx,by)<0.12 || (typeof lakeAt==='function' && lakeAt(bx,by)))) ok=false;   // base footprint must sit on solid land, not coast/lake
      if(ok && game.lakes) for(const L of game.lakes){ if(dist2(bx,by,L.x,L.y) < (L.r+560)*(L.r+560)){ ok=false; break; } }   // keep the whole base footprint + guard ring well clear of water -> units never end up circling a lake at home
      if(ok && typeof railDist==='function' && railDist(bx,by) < 400) ok=false;     // never start a team ON the railroad tracks (a train would flatten the base)
      if(ok && typeof pathDist==='function' && pathDist(bx,by) < 340) ok=false;     // never start a team ON a dirt road (roads stay clear for the convoy)
      if(ok) for(const u of used){ if(dist2(bx,by,u.x,u.y) < u.r*u.r){ ok=false; break; } }
    }
    if(!ok) continue;
    used.push({x:bx, y:by, r:MIN_TC_DIST});
    spawnEnemyTeam(i, bx, by);     // teams start as UNITS ONLY at a planned site — they gather, then BUILD the first base (no starting base)
  }
}
function spawnEnemyTeam(i, bx, by){    // spawn a team's primary + 3 workers UNFOUNDED at a site (their home keys point to where the base WILL be once founded)
  const owner='e'+i, col=ENEMY_COLS[i%ENEMY_COLS.length], gx0=Math.floor(bx/TILE), gy0=Math.floor(by/TILE);
  const tcK=gkey(gx0+1,gy0+1), boxK=tcK, cx=(gx0+1)*TILE+TILE/2, cy=(gy0+1)*TILE+TILE/2, dX=(gx0+1)*TILE+TILE/2, dY=(gy0+3)*TILE, dGy=gy0+3;   // box removed -> boxKey aliases the TC
  const tr=Math.random(), hard=tr<0.25, weak=tr>=0.75, role=['raider','turtle','nomad'][i%3], shotgun=(Math.random()<0.3);
  game.enemies.push({ id:i, owner, col, x:cx, y:cy+30, hx:cx, hy:cy, hp:100, max:100, dead:false, eliminated:false, _unfounded:true,
    respawnT:0, inv:{wood:120,stone:30,metal:10}, rockets:0, satchels:0, state:'gather', angle:0, gunCd:0, rkCd:0, think:0,
    expandT:rand(3,9), tx:cx, ty:cy, raid:null, target:null, flying:false, tcKey:tcK, boxKey:boxK,
    kills:0, scrap:0, jack:false, hard, weak, shotgun, facemask:(hard?1:0), bodyArmor:(hard?2:0), gun:'pistol', primary:true, lastHitBy:null, role, _lane:rand(-10,10), _hoff:rand(-26,26),
    doorX:dX, doorY:dY, doorGy:dGy, copter:{x:cx-TILE*4, y:cy, angle:0, rotor:0, spin:0, hp:160, max:160, destroyed:false} });   // HARD teams are elite: innate armor (mitigates head/body damage) + better aim + faster siege
  for(let w=0;w<3;w++) game.enemies.push({ id:i, owner, col, worker:true, hard, weak, shotgun, facemask:(hard?1:0), bodyArmor:(hard?2:0), gun:'pistol', _unfounded:true,
    x:cx+rand(-46,46), y:cy+rand(24,64), hx:cx, hy:cy, hp:100, max:100, dead:false, eliminated:false,
    respawnT:0, inv:{wood:0,stone:0,metal:0}, rockets:0, state:'gather', angle:0, gunCd:0, rkCd:0, think:rand(0,1),
    expandT:rand(3,9), tx:cx, ty:cy, raid:null, target:null, flying:false, tcKey:tcK, boxKey:boxK,
    kills:0, scrap:0, jack:false, lastHitBy:null, role, _lane:rand(-12,12), _hoff:rand(-26,26),
    doorX:dX, doorY:dY, doorGy:dGy, copter:null });
}
function teamPrimary(owner){ for(const e of game.enemies){ if(e.primary && e.owner===owner && !e.eliminated) return e; } return null; }
function siteClear(x,y){               // a valid spot for a NEW base: on land, off water, outside safe/monument no-build zones, and >= MIN_TC_DIST from EVERY existing base (Rust rule)
  if(x<1400||y<1400||x>WORLD.w-1400||y>WORLD.h-1400) return false;
  if((typeof onLand==='function'&&!onLand(x,y)) || (typeof lakeAt==='function'&&lakeAt(x,y))) return false;
  if(typeof railDist==='function' && railDist(x,y) < 360) return false;   // never found a base on/near the railroad tracks (a train would flatten it)
  if(typeof pathDist==='function' && pathDist(x,y) < 320) return false;   // never found a base on a dirt road (roads stay clear for the convoy)
  if(typeof landFactor==='function' && landFactor(x,y)<0.12) return false;
  if(game.shop && dist2(x,y,game.shop.x,game.shop.y)<(SAFE_R+450)*(SAFE_R+450)) return false;
  if(game.monuments) for(const m of game.monuments){ if(dist2(x,y,m.x,m.y)<(SAFE_R+200)*(SAFE_R+200)) return false; }
  if(game.lakes) for(const L of game.lakes){ if(dist2(x,y,L.x,L.y)<(L.r+560)*(L.r+560)) return false; }
  if(game.boulders) for(const b of game.boulders){ if(dist2(x,y,b.x,b.y)<(b.r+300)*(b.r+300)) return false; }   // keep the base footprint off boulders (solid)
  for(const [k,d] of game.deploys){ if(d.type!=='cupboard') continue; const c=k.indexOf(','), gx=+k.slice(0,c), gy=+k.slice(c+1); if(dist2(x,y,gx*TILE+TILE/2,gy*TILE+TILE/2)<MIN_TC_DIST*MIN_TC_DIST) return false; }
  return true; }
function teamHasBaseNear(owner, x, y, rad){ for(const r of teamBaseRecs(owner)){ if(baseRecAlive(r) && dist2(x,y,r.hx,r.hy)<rad*rad) return true; } return false; }
function pickSecondarySite(b){         // choose a STRATEGIC site for the team's next base: (1) near a monument, (2) FORWARD toward a far enemy (raid base), (3) spread out (survival)
  if(game.monuments) for(const m of game.monuments){ if(teamHasBaseNear(b.owner,m.x,m.y,SAFE_R+900)) continue;   // a monument with no team base yet -> claim it
    for(let k=0;k<8;k++){ const a=k/8*TAU, x=m.x+Math.cos(a)*(SAFE_R+TILE*5), y=m.y+Math.sin(a)*(SAFE_R+TILE*5); if(siteClear(x,y)) return {x,y,kind:'monument'}; } }
  const S=game._team&&game._team[b.owner]; const fwd=(S&&S.raidTarget&&(typeof baseAlive==='function'&&baseAlive(S.raidTarget)))?S.raidTarget:botFarthestEnemy(b);   // FORWARD raid base toward the team's ACTIVE raid target (else the farthest enemy) so forward respawns land near the fight
  if(fwd){ const a=Math.atan2(fwd.hy-b.hy,fwd.hx-b.hx);
    for(const dd of [1700,2200,1300]){ const x=b.hx+Math.cos(a)*dd, y=b.hy+Math.sin(a)*dd; if(siteClear(x,y)) return {x,y,kind:'raid-forward'}; } }
  for(let k=0;k<10;k++){ const a=rand(0,TAU), dd=rand(MIN_TC_DIST+200, MIN_TC_DIST+1600), x=b.hx+Math.cos(a)*dd, y=b.hy+Math.sin(a)*dd; if(siteClear(x,y)) return {x,y,kind:'survival'}; }   // spread out for survival
  return null; }
function expandTeamBases(dt){          // established teams build EXTRA bases (mobility + survival). Only the FIRST base keeps the one minicopter.
  for(const b of game.enemies){ if(!b.primary || b.eliminated || b._unfounded) continue;
    const recs=teamBaseRecs(b.owner).filter(baseRecAlive), maxBases = b.hard?4:3;
    const tc=game.deploys.get(b.tcKey), bank=tc&&tc.store?(tc.store.wood+tc.store.stone+tc.store.metal):0;
    const S=game._team&&game._team[b.owner];
    // ---- PROMPT FORWARD RAID BASE: the AGGRESSOR commits to a target with no staging near it -> build a forward base ASAP (cheaper + faster than normal expansion). Raiders respawn here (forward respawn) so the FULL-TEAM assault PERSISTS while the defenders are on their 15s respawn -> a real, coordinated raid cracks the base. ----
    if(S && S.aggressor && S.raidTarget && (typeof baseAlive==='function'&&baseAlive(S.raidTarget)) && recs.length<maxBases && bank>=170 && !teamHasBaseNear(b.owner,S.raidTarget.hx,S.raidTarget.hy,2400)){
      if((b._fwdT=(b._fwdT||0)-dt)<=0){ b._fwdT=10;
        const far=S.raidTarget, a=Math.atan2(far.hy-b.hy,far.hx-b.hx); let site=null;
        for(const dd of [1800,2300,1400,2700]){ const x=far.hx-Math.cos(a)*dd, y=far.hy-Math.sin(a)*dd; if(siteClear(x,y)){ site={x,y}; break; } }   // ~1.4-2.7k px back from the TARGET on our approach side (siteClear keeps the Rust MIN_TC_DIST so it's never on the enemy)
        if(site){ const nrec=foundBase(b.owner,site.x,site.y,false); nrec.kind='raid-forward'; if(tc&&tc.store){ let pay=200; for(const r of ['wood','stone','metal']){ const t=Math.min(tc.store[r]||0,pay); tc.store[r]-=t; pay-=t; } } addFloat(site.x,site.y-30,'+raid base','#ffd0a0'); continue; } }
    }
    b._expT=(b._expT||rand(40,80))-dt; if(b._expT>0) continue; b._expT=rand(50,90);
    if(recs.length<1 || recs.length>=maxBases) continue;
    const underRaid = S && S.attack;
    if(bank<260 && !(underRaid && bank>=160)) continue;                                       // need banked resources (cheaper if we're being raided and need a fallback)
    const site=pickSecondarySite(b); if(!site) continue;
    const nrec=foundBase(b.owner, site.x, site.y, false); nrec.kind=site.kind;
    if(tc&&tc.store){ let pay=240; for(const r of ['wood','stone','metal']){ const t=Math.min(tc.store[r]||0,pay); tc.store[r]-=t; pay-=t; } }
    addFloat(site.x,site.y-30,'+'+site.kind+' base','#bcd0e0');                                // staffed naturally by respawns (units spawn at any team base) — no disruptive re-homing of live workers
  } }
function botNearestWood(b){ let best=null,bd=2600*2600; for(const o of game.resources){ if(o.amount<=0||o.base!=='wood') continue; const d=dist2(b.x,b.y,o.x,o.y); if(d<bd){ bd=d; best=o; } } return best; }
function foundTeamBase(b){             // the unfounded primary spends gathered material to build the FIRST base at the planned site, then the whole team homes to it
  const rec=foundBase(b.owner, b.hx, b.hy, true); let pay=220; for(const r of ['wood','stone','metal']){ const t=Math.min(b.inv[r]||0,pay); b.inv[r]-=t; pay-=t; }
  for(const e of game.enemies){ if(e.owner!==b.owner) continue; e._unfounded=false; e.tcKey=rec.tcKey; e.boxKey=rec.boxKey; e.hx=rec.hx; e.hy=rec.hy; e.doorX=rec.doorX; e.doorY=rec.doorY; e.doorGy=rec.doorGy; }
  addFloat(rec.hx, rec.hy-30, 'base founded', '#9ad06a'); }
function eWall(key,type,owner){ const d=BUILD[type];
  game.walls.set(key,{type, mat:'wood', hp:d.hp, max:d.hp, open:false, lock:type==='door'?{by:owner,locked:true,authorized:(owner===OWNER)}:null, owner}); }
function foundBase(owner, bx, by, primary){     // build a fresh 3x3 base (TC + floors + walls + door + box + turret) at (bx,by) and register it for the team
  const gx0=Math.floor(bx/TILE), gy0=Math.floor(by/TILE);
  for(let dx=0;dx<3;dx++) for(let dy=0;dy<3;dy++) game.structures.set(gkey(gx0+dx,gy0+dy), {type:'floor', mat:'wood', hp:100, max:100, owner});
  for(let dx=0;dx<3;dx++){ eWall('H,'+(gx0+dx)+','+gy0,'wall',owner); if(dx!==1) eWall('H,'+(gx0+dx)+','+(gy0+3),'wall',owner); }
  game.walls.set('H,'+(gx0+1)+','+(gy0+3), {type:'door', mat:'wood', hp:50, max:50, open:false, lock:{by:owner,locked:true,authorized:(owner===OWNER)}, owner});  // south door
  for(let dy=0;dy<3;dy++){ eWall('V,'+gx0+','+(gy0+dy),'wall',owner); eWall('V,'+(gx0+3)+','+(gy0+dy),'wall',owner); }
  const tcK=gkey(gx0+1,gy0+1), boxK=tcK;                                                                // box removed -> ALL loot lives in the Tool Cupboard (boxKey aliases the TC)
  game.deploys.set(tcK, {type:'cupboard', mat:'wood', hp:300, max:300, open:false, lock:{by:owner,locked:true,authorized:(owner===OWNER)}, owner, loot:true, store:{wood:200+randi(20,70), stone:0, metal:randi(0,40), scrap:0}});
  game.deploys.set(gkey(gx0+2,gy0), {type:'turret', mat:'wood', hp:150, max:150, angle:0, cd:0, owner});
  // INNER CORE ring around the Tool Cupboard so the PATH TO THE TC crosses MULTIPLE doors (airlock), not one weak door. The inner door is on the SAME side as the outer south door -> the owner's path IN to the TC is STRAIGHT (no enter-south-then-zigzag-north, which was a big share of the base looping); a raider still has to breach a 2nd door.
  const icx=gx0+1, icy=gy0+1;
  game.walls.set('H,'+icx+','+icy, {type:'door', mat:'wood', hp:50, max:50, open:false, lock:{by:owner,locked:true,authorized:(owner===OWNER)}, owner});       // inner core door NORTH — bases grow NORTH so units inside approach the TC from the north; reach it directly (no arc around the inner ring)
  eWall('V,'+icx+','+icy,'wall',owner);                                                                // core west wall (keeps the airlock a real 2-layer barrier on the sides)
  eWall('V,'+(icx+1)+','+icy,'wall',owner);                                                            // core east wall
  game.walls.set('H,'+icx+','+(icy+1), {type:'door', mat:'wood', hp:50, max:50, open:false, lock:{by:owner,locked:true,authorized:(owner===OWNER)}, owner});   // inner core door SOUTH (aligned with a south outer door) — N+S inner doors cover the main traffic, E/W stay walled
  const _prim=(typeof teamPrimary==='function')?teamPrimary(owner):null;
  if(_prim && _prim.hard){ for(const [k,w] of game.walls){ if(w.owner===owner){ w.mat='metal'; w.max=tierHp(BUILD[w.type],'metal'); w.hp=w.max; } } }   // HARD teams found with METAL walls (4x wood HP) and then HQM-armor them -> a tough fortress fast
  const cx=(gx0+1)*TILE+TILE/2, cy=(gy0+1)*TILE+TILE/2;
  const rec={ owner, tcKey:tcK, boxKey:boxK, hx:cx, hy:cy, doorX:(gx0+1)*TILE+TILE/2, doorY:(gy0+3)*TILE, doorGy:gy0+3, primary:!!primary };
  if(!game.teamBases) game.teamBases={}; (game.teamBases[owner]=game.teamBases[owner]||[]).push(rec);
  ensureSideDoors(owner);                              // MULTI-SIDE DOORS: an outer door on each side so units exit/enter toward their goal via the NEAREST side, instead of rounding the whole base to one south door (the orbit/loop cause)
  return rec; }
function ensureSideDoors(owner){           // ensure the CURRENT outer perimeter has a DOOR at the midpoint of each side. Doors KEEP the wall's HP (passable to the owner, no weaker to a raider than the wall was) -> units exit/enter toward their goal without rounding the base.
  const bb=(typeof botBaseBounds==='function')?botBaseBounds(owner):null; if(!bb) return [];
  const midGx=Math.floor((bb.minx+bb.maxx)/2), midGy=Math.floor((bb.miny+bb.maxy)/2);
  const sides=[
    {k:'H,'+midGx+','+bb.miny,     x:(midGx+0.5)*TILE, y:bb.miny*TILE,     nx:0, ny:-1},   // N
    {k:'H,'+midGx+','+(bb.maxy+1), x:(midGx+0.5)*TILE, y:(bb.maxy+1)*TILE, nx:0, ny:1},     // S
    {k:'V,'+bb.minx+','+midGy,     x:bb.minx*TILE,     y:(midGy+0.5)*TILE, nx:-1, ny:0},    // W
    {k:'V,'+(bb.maxx+1)+','+midGy, x:(bb.maxx+1)*TILE, y:(midGy+0.5)*TILE, nx:1, ny:0} ];   // E
  const doors=[];
  for(const s of sides){ const w=game.walls.get(s.k);
    if(w && w.hp>0){ if(w.type!=='door'){ w.type='door'; w.open=false; if(!w.lock) w.lock={by:owner,locked:true,authorized:(owner===OWNER)}; } doors.push(s); } }   // convert the midpoint perimeter wall -> a door (keep HP); a usable exit on this side
  return doors; }
function baseDoorsCached(b){ if(!b._sd || (game.t-(b._sdT||0))>1.2){ b._sd=ensureSideDoors(b.owner); b._sdT=game.t||0; } return b._sd; }   // cache the perimeter doors (recompute ~1.2s) for routing
function nearestDoor(b,tx,ty){ const ds=baseDoorsCached(b); if(!ds||!ds.length) return null;   // the door nearest the target point; COMMITTED ~0.9s so the choice can't flip-flop as the unit moves (that would re-create the orbit)
  if(b._curDoor && (game.t-(b._curDoorT||0))<0.9){ for(const d of ds) if(d.k===b._curDoor.k) return d; }
  let best=null,bd=1e18; for(const d of ds){ const dd=dist2(d.x,d.y,tx,ty); if(dd<bd){ bd=dd; best=d; } }
  b._curDoor=best; b._curDoorT=game.t||0; return best; }
function teamBaseRecs(owner){ return (game.teamBases&&game.teamBases[owner])||[]; }
function baseRecAlive(r){ const tc=game.deploys.get(r.tcKey); return !!(tc&&tc.type==='cupboard'); }
function teamAliveBaseCount(owner){ let n=0; for(const r of teamBaseRecs(owner)) if(baseRecAlive(r)) n++; return n; }
function rehomeUnit(b){ let best=null,bd=1e18; for(const r of teamBaseRecs(b.owner)){ if(!baseRecAlive(r)) continue; const d=dist2(b.x,b.y,r.hx,r.hy); if(d<bd){ bd=d; best=r; } }   // point a unit at its NEAREST still-alive team base
  if(!best) return false; b.tcKey=best.tcKey; b.boxKey=best.boxKey; b.hx=best.hx; b.hy=best.hy; b.doorX=best.doorX; b.doorY=best.doorY; b.doorGy=best.doorGy; return true; }
function buildEnemyBase(i,bx,by){
  const owner='e'+i, col=ENEMY_COLS[i%ENEMY_COLS.length];
  const rec=foundBase(owner, bx, by, true);
  const tr=Math.random(), hard=tr<0.25, weak=tr>=0.75;            // 25% hard (better aim, aggressive), 25% weak (pistol only), 50% normal
  game.enemies.push({ id:i, owner, col, x:rec.hx, y:rec.hy+30, hx:rec.hx, hy:rec.hy, hp:100, max:100, dead:false, eliminated:false,
    respawnT:0, inv:{wood:1000,stone:250,metal:100}, rockets:0, satchels:0, state:'gather', angle:0, gunCd:0, rkCd:0, think:0,
    expandT:rand(3,9), tx:rec.hx, ty:rec.hy, raid:null, target:null, flying:false, tcKey:rec.tcKey, boxKey:rec.boxKey,
    kills:0, scrap:0, jack:false, hard, weak, shotgun:(Math.random()<0.3), gun:'pistol', primary:true, lastHitBy:null, role:['raider','turtle','nomad'][i%3], _lane:rand(-10,10), _hoff:rand(-26,26),
    doorX:rec.doorX, doorY:rec.doorY, doorGy:rec.doorGy,
    copter:{x:rec.hx-TILE*4, y:rec.hy, angle:0, rotor:0, spin:0, hp:160, max:160, destroyed:false} });   // the team's ONE minicopter, parked well west of the base (clear of unit routing)
}
function spawnUnit(base){           // a worker: an extra unit sharing its base's owner, home, storage and tier
  game.enemies.push({ id:base.id, owner:base.owner, col:base.col, worker:true, ally:base.ally, hard:base.hard, weak:base.weak, shotgun:base.shotgun, facemask:(base.facemask||0), bodyArmor:(base.bodyArmor||0), gun:(base.gun||'pistol'),
    x:base.hx+rand(-46,46), y:base.hy+rand(24,64), hx:base.hx, hy:base.hy, hp:100, max:100, dead:false, eliminated:false,
    respawnT:0, inv:{wood:0,stone:0,metal:0}, rockets:0, state:'gather', angle:0, gunCd:0, rkCd:0, think:rand(0,1),
    expandT:rand(3,9), tx:base.hx, ty:base.hy, raid:null, target:null, flying:false, tcKey:base.tcKey, boxKey:base.boxKey,
    kills:0, scrap:0, jack:false, lastHitBy:null, role:base.role, _lane:rand(-12,12), _hoff:rand(-26,26),
    doorX:base.doorX, doorY:base.doorY, doorGy:base.doorGy,
    copter:null });   // ONE copter per team -> only the primary holds it; workers have none
}
function spawnWorkers(){ const bases=game.enemies.filter(b=>b.primary); for(const base of bases) for(let w=0;w<3;w++) spawnUnit(base); }  // each AI starts with 3 workers
const WORKER_COST = 50;        // scrap to hire an extra worker (a fast way to grow the economy — but capped, so teams don't just max worker count)
function teamUnitCount(owner){ let n=0; for(const e of game.enemies){ if(e.owner===owner && !e.eliminated) n++; } return n; }
function teamCopterCount(owner){ let n=0; for(const e of game.enemies){ if(e.owner===owner && !e.eliminated && e.copter && !e.copter.destroyed) n++; } return n; }   // minicopters a team currently fields (start: 1 on the primary; bought extras add to this, capped)
function botHireWorker(b){      // spend banked scrap to hire ONE more worker; capped per team so it stays balanced
  const cap = b.hard?16:8;      // total team units (1 primary + workers): hard teams up to 15 workers, everyone else 7. Capped so teams don't cluster/camp at base.
  if(!b.primary || teamUnitCount(b.owner) >= cap) return false;
  const tc=game.deploys.get(b.tcKey), tcS=(tc&&tc.store)?(tc.store.scrap||0):0, have=(b.scrap||0)+tcS;
  if(have < WORKER_COST) return false;
  let pay=WORKER_COST; const fromB=Math.min(b.scrap||0,pay); b.scrap-=fromB; pay-=fromB; if(pay>0&&tc&&tc.store) tc.store.scrap=Math.max(0,tcS-pay);
  spawnUnit(b); if(typeof addFloat==='function') addFloat(b.hx,b.hy-30,'+worker hired','#bcd0e0'); return true; }
function spawnPlayerWorker(){    // a hired ally that fights for the player (gathers into the player's stockpile, defends, raids enemies)
  const pb=(typeof playerBaseTarget==='function')?playerBaseTarget():null;
  const hx=pb?pb.hx:player.x, hy=pb?pb.hy:player.y, key=pb?pb.boxKey:gkey(Math.floor(hx/TILE),Math.floor(hy/TILE));
  const sx=(game.shop?game.shop.x:hx)+rand(-60,60), sy=(game.shop?game.shop.y+(game.shop.r||120)+40:hy);   // spawn at the trade zone
  game.enemies.push({ id:-1, owner:OWNER, ally:true, worker:true, col:'#7ec850',
    x:sx, y:sy, hx, hy, hp:100, max:100, dead:false, eliminated:false,
    respawnT:0, inv:{wood:0,stone:0,metal:0}, rockets:0, state:'gather', angle:0, gunCd:0, rkCd:0, think:rand(0,1),
    expandT:1e9, tx:hx, ty:hy, raid:null, target:null, flying:false, tcKey:key, boxKey:key,
    kills:0, scrap:0, jack:false, lastHitBy:null, role:'raider', raidUrge:rand(12,24), gun:'rifle',
    doorX:hx, doorY:hy+TILE, doorGy:Math.floor(hy/TILE)+1,
    copter:null });   // the player's team shares ONE minicopter (game.copter) — allies don't each get their own. Allies are paid soldiers -> rifle.
  return true;
}

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
/* ---------------- transport helicopter (team vehicle, bought at trade, ferries a raiding squad over long distances) ---------------- */
function teamTransport(owner){ if(!game.transports) return null; for(const t of game.transports){ if(t.owner===owner && !t.destroyed) return t; } return null; }
function buyTransport(b){ if(!game.transports || teamTransport(b.owner) || (b.scrap||0)<TRANSPORT.cost) return false;   // one transport per team, bought at the shop
  b.scrap-=TRANSPORT.cost; const sx=game.shop?game.shop.x:b.hx, sy=game.shop?(game.shop.y+(game.shop.r||120)+90):b.hy;
  game.transports.push({owner:b.owner, x:sx, y:sy, angle:0, rotor:0, hp:TRANSPORT.hp, max:TRANSPORT.hp, destroyed:false, vx:0, vy:0, state:'idle', destX:b.hx, destY:b.hy, homeX:b.hx, homeY:b.hy, riders:[], boardT:0});
  addFloat(sx,sy-44,'+transport heli','#bfe3ff'); return true; }
function transportPhysics(tr,tx,ty,dt){ tr.angle += angDiff(tr.angle, Math.atan2(ty-tr.y,tx-tr.x))*Math.min(1,dt*3); tr.vx=tr.vx||0; tr.vy=tr.vy||0;
  const d=Math.hypot(tx-tr.x,ty-tr.y), thr=d>220?1:Math.max(0.08,d/220); tr.vx+=Math.cos(tr.angle)*TRANSPORT.accel*thr*dt; tr.vy+=Math.sin(tr.angle)*TRANSPORT.accel*thr*dt;
  const dr=TRANSPORT.drag*dt; tr.vx-=tr.vx*dr; tr.vy-=tr.vy*dr; const sp=Math.hypot(tr.vx,tr.vy); if(sp>TRANSPORT.speed){ tr.vx=tr.vx/sp*TRANSPORT.speed; tr.vy=tr.vy/sp*TRANSPORT.speed; }
  tr.x=clamp(tr.x+tr.vx*dt,TRANSPORT.r,WORLD.w-TRANSPORT.r); tr.y=clamp(tr.y+tr.vy*dt,TRANSPORT.r,WORLD.h-TRANSPORT.r); return d; }
function transportBoard(b,tr){ if(tr.riders.length>=TRANSPORT.seats || tr.state==='fly' || tr.state==='unload') return false; b._aboard=tr; tr.riders.push(b); b.flying=true; b._wasRaid=false; b.state='raid'; return true; }
function updateTransports(dt){ if(!game.transports) return;
  for(let i=game.transports.length-1;i>=0;i--){ const tr=game.transports[i];
    if(tr.destroyed || tr.hp<=0){ if(typeof vehicleWreck==='function') vehicleWreck(tr.x,tr.y);          // SHOT DOWN -> explosion + 15s fire/smoke; every rider DIES and their loot falls
      for(const r of tr.riders){ if(!r) continue; r._aboard=null; r.flying=false; r.x=tr.x+rand(-30,30); r.y=tr.y+rand(-30,30); if(typeof botDie==='function' && !r.dead && !r.eliminated) botDie(r); }
      game.transports.splice(i,1); continue; }
    tr.riders=tr.riders.filter(r=>r && !r.dead && !r.eliminated && r._aboard===tr); tr.stateT=(tr.stateT||0)+dt;
    const occupied=tr.riders.length>=1;                                                           // a transport NEVER flies on its own — it only moves with an occupant aboard to pilot it
    if(occupied || tr.state==='fly' || tr.state==='unload' || tr.state==='return') tr.rotor+=dt*40;   // rotor idles when parked & empty
    let raidT=null; for(const r of tr.riders){ if(r.raid && baseAlive(r.raid)){ raidT=r.raid; break; } }
    if(tr.state==='idle' || tr.state==='board'){
      if(occupied && raidT){ tr.boardT=(tr.boardT||0)+dt;
        if(tr.riders.length>=2 || tr.boardT>5){ const tk=raidT.tcKey||raidT.boxKey, p=tk.split(',').map(Number), tx=p[0]*TILE+TILE/2, ty=p[1]*TILE+TILE/2;
          const a=Math.atan2(ty-tr.y,tx-tr.x); tr.destX=tx-Math.cos(a)*620; tr.destY=ty-Math.sin(a)*620; tr.state='fly'; tr.stateT=0; tr.boardT=0; } }
      else if(occupied){ tr.boardT=0; transportPhysics(tr, tr.homeX-TILE*5, tr.homeY, dt); }       // riders aboard but no target yet -> hold near base (piloted)
      else { tr.boardT=0; tr.vx=0; tr.vy=0; }                                                      // EMPTY -> grounded; it does not hover or fly on its own
      for(const r of tr.riders){ r.x=tr.x; r.y=tr.y; r.flying=true; }
    } else if(tr.state==='fly'){ const d=transportPhysics(tr,tr.destX,tr.destY,dt); for(const r of tr.riders){ r.x=tr.x; r.y=tr.y; r.flying=true; }
      if(d<200 || !raidT || tr.stateT>16){ tr.state='unload'; tr.stateT=0; }                     // ANTI-ORBIT timeout: never circle the drop point forever (the old landing bug)
    } else if(tr.state==='unload'){ for(const r of tr.riders){ r._aboard=null; r.flying=false;     // drop each rider onto OPEN ground near the heli (not water / a wall)
        let rx=tr.x+rand(-60,60), ry=tr.y+rand(-60,60);
        for(let k=0;k<14 && (typeof blocked==='function' && blocked(rx,ry,12)); k++){ const a=rand(0,TAU), rr=rand(40,150); rx=tr.x+Math.cos(a)*rr; ry=tr.y+Math.sin(a)*rr; }
        r.x=clamp(rx,12,WORLD.w-12); r.y=clamp(ry,12,WORLD.h-12); }
      tr.riders.length=0; tr.state='return'; tr.stateT=0;
    } else if(tr.state==='return'){ const d=transportPhysics(tr, tr.homeX-TILE*5, tr.homeY, dt); if(d<160 || tr.stateT>16){ tr.state='idle'; tr.stateT=0; } }   // anti-orbit timeout on the way home too
  } }
function breachIfBlocked(b,tgt){
  let pick=null, bd=240*240;     // prefer the target's door (1 rocket) — fastest way in
  for(const [k,w] of game.walls){ if(w.owner!==tgt.owner) continue; const sg=wallSegOf(k,w), mx=(sg[0]+sg[2])/2, my=(sg[1]+sg[3])/2;
    const dd=dist2(b.x,b.y,mx,my); if(dd<bd && (!pick || w.type==='door')){ if(!pick||w.type==='door'){ pick={mx,my,door:w.type==='door'}; if(w.type==='door') bd=dd; } } }
  if(pick && b.rkCd<=0){ const dd=dist2(b.x,b.y,pick.mx,pick.my);
    if(b.rockets>0 && dd>=ROCKET_MIN*ROCKET_MIN){ botTryRocket(b,pick.mx,pick.my,{cd:2.2}); }            // rocket the door FROM RANGE (never point-blank)
    else if(dd<90*90 && (b.satchels||0)>0){ b.satchels--; b.rkCd=4.5; game.satchels.push({x:pick.mx,y:pick.my,t:3.0,from:b.owner}); addFloat(pick.mx,pick.my-16,'satchel!','#e08a36'); }   // up close -> plant a satchel (only if we BOUGHT some)
  }
}
function botBreachAim(b,tgt){   // TEAM-COORDINATED CHEAPEST PATH: the whole squad focuses ONE piece so rockets punch a SINGLE LANE to the TC instead of scattering across the perimeter (a real raid concentrates fire). The piece = the standing wall/DOOR minimizing dist(squad→piece)+dist(piece→TC) — i.e. the next obstacle ON the lane from the squad to the cupboard — doors preferred (cheapest). Cached on the team state (recomputed when that piece falls or ~every 1.5s) so every rocketer hits the same piece. As lane pieces fall the focus moves inward → toward the TC.
  const S=game._team&&game._team[b.owner];
  { const tk0=tgt.tcKey||tgt.boxKey, c0=tk0.indexOf(','), tcx0=(+tk0.slice(0,c0)+0.5)*TILE, tcy0=(+tk0.slice(c0+1)+0.5)*TILE;   // LANE OPEN? if ANY raider on this target already has a clear line to the cupboard, STOP breaching walls and go for the TC (push in & siege) — otherwise raiders rocket walls forever while breaches reseal (the treadmill: walls destroyed but no TC kill)
    if(typeof wallBlocksView==='function') for(const u of game.enemies){ if(u.owner===b.owner && !u.dead && !u.eliminated && u.raid===tgt && Math.hypot(u.x-tcx0,u.y-tcy0)<760 && !wallBlocksView(u.x,u.y,tcx0,tcy0)){ if(S) S.breachKey=null; return null; } } }
  if(S){ const cached=S.breachKey&&game.walls.get(S.breachKey);
    if(cached && cached.owner===tgt.owner && cached.hp>0 && !(cached.type==='door'&&cached.open) && (game.t||0)<(S.breachT||0)){
      const sg=wallSegOf(S.breachKey,cached); return {x:(sg[0]+sg[2])/2,y:(sg[1]+sg[3])/2,door:cached.type==='door'}; }
    const tk=tgt.tcKey||tgt.boxKey, c=tk.indexOf(','), tcx=(+tk.slice(0,c)+0.5)*TILE, tcy=(+tk.slice(c+1)+0.5)*TILE;
    let cx=0,cy=0,cn=0; for(const u of game.enemies){ if(u.owner===b.owner&&!u.dead&&!u.eliminated&&u.raid===tgt){ cx+=u.x; cy+=u.y; cn++; } }
    const rx=cn?cx/cn:b.x, ry=cn?cy/cn:b.y;                                              // squad centroid (the approach point)
    let bestK=null,bd=1e18,bestSeg=null;
    for(const [k,w] of game.walls){ if(w.owner!==tgt.owner||w.hp<=0) continue; if(w.type==='door'&&w.open) continue;
      const sg=wallSegOf(k,w), mx=(sg[0]+sg[2])/2, my=(sg[1]+sg[3])/2;
      const score=(Math.hypot(rx-mx,ry-my)+Math.hypot(mx-tcx,my-tcy))*(w.type==='door'?0.6:1);   // minimized ALONG the squad→TC line; doors cheaper
      if(score<bd){ bd=score; bestK=k; bestSeg={x:mx,y:my,door:w.type==='door'}; } }
    S.breachKey=bestK; S.breachT=(game.t||0)+1.5;
    if(bestSeg) return bestSeg; }
  let pick=null, bd2=1e18;                                                              // fallback (no team state): nearest standing piece
  for(const [k,w] of game.walls){ if(w.owner!==tgt.owner||w.hp<=0) continue; if(w.type==='door'&&w.open) continue;
    const sg=wallSegOf(k,w), mx=(sg[0]+sg[2])/2, my=(sg[1]+sg[3])/2;
    const score=dist2(b.x,b.y,mx,my)*(w.type==='door'?0.4:1);
    if(score<bd2){ bd2=score; pick={x:mx,y:my,door:w.type==='door'}; } }
  return pick; }
function botPathTurret(b,tgt){   // a target turret that can shoot a raider on the way to the TC -> clear ONLY these (not every turret — that's inefficient). nearest such turret within its own range of us.
  let pick=null, bd=1e18;
  for(const [k,d] of game.deploys){ if(d.type!=='turret'||(d.owner)!==tgt.owner||d.hp<=0) continue;
    const c=k.indexOf(','), tx=(+k.slice(0,c)+0.5)*TILE, ty=(+k.slice(c+1)+0.5)*TILE;
    const tt=(typeof TTIER!=='undefined'&&TTIER[d.tier||1])?TTIER[d.tier||1].range:340, dd=dist2(b.x,b.y,tx,ty);
    if(dd < (tt+60)*(tt+60) && dd<bd){ bd=dd; pick={x:tx,y:ty,k}; } }   // only turrets whose range covers us right now
  return pick; }
function botFreeWall(b){ if(b.ally) return false; const gx=Math.floor(b.x/TILE), gy=Math.floor(b.y/TILE);   // boxed in -> CUT A LOCKED DOOR through one blocking own wall: we can open & pass it (escape) but it stays a sealed, defended opening (no hole, no wall-phasing). This is the "remove a wall to get out, then rebuild it" the player asked for.
  let best=null, bdx=0, bdy=0, bestScore=-1e18;
  for(const [k,dx,dy] of [['V,'+gx+','+gy,-1,0],['V,'+(gx+1)+','+gy,1,0],['H,'+gx+','+gy,0,-1],['H,'+gx+','+(gy+1),0,1]]){
    const w=game.walls.get(k); if(!w || w.owner!==b.owner || w.type==='door') continue;
    const nFloor=foundationAt(gx+dx,gy+dy);                                                  // prefer cutting toward OPEN ground (a real way out), then toward the south (the base's main door side)
    const score=(nFloor?0:60) + (dy>0?12:0) + rand(0,2);
    if(score>bestScore){ bestScore=score; best=k; bdx=dx; bdy=dy; } }
  if(!best) return false;
  const w=game.walls.get(best); w.type='door'; w.open=true; w._closeT=(game.t||0)+1.2; w.lock={by:b.owner}; w.hp=Math.max(w.hp||0,50); w.max=Math.max(w.max||0,50);
  b._escAng=Math.atan2(bdy,bdx);                                                             // head out through the new doorway
  const sg=wallSegOf(best,w); addFloat((sg[0]+sg[2])/2,(sg[1]+sg[3])/2,'cut a door','#9ad06a'); return true; }
function botDropFence(b,tx,ty){ if((b.fenceCd||0)>0 || !botHas(b,'wood',10)) return;        // low-HP cover: a wood fence between us and the threat
  const a=Math.atan2(ty-b.y,tx-b.x), fx=b.x+Math.cos(a)*30, fy=b.y+Math.sin(a)*30;
  if(typeof placeFence!=='function') return;
  if(typeof foundationAt==='function' && foundationAt(Math.floor(fx/TILE),Math.floor(fy/TILE))) return;   // don't try to drop a fence on a foundation (it'd be rejected) — don't waste the wood
  botPay(b,'wood',10); if(placeFence(fx,fy,a+Math.PI/2,b.owner)){ b.fenceCd=9; addFloat(b.x,b.y-22,'+fence','#c79a5e'); } }
function botMaybeGrenade(b,t){ if((b.grenades||0)<=0 || (b.gnCd||0)>0 || typeof GRENADE==='undefined' || !game.grenades) return;
  const d=Math.hypot(t.x-b.x,t.y-b.y); if(d<150 || d>380) return;                              // mid-range sweet spot: not point-blank (self-splash), within lob reach
  let unit=false;                                                                              // GRENADES ARE FOR HOSTILE PLAYERS/BOTS — never waste them on animals
  if(b.owner!==OWNER && !player.dead && !player.inCopter && !game.ghost && Math.hypot(player.x-t.x,player.y-t.y)<70) unit=true;
  if(!unit) for(const o of game.enemies){ if(o===b||o.dead||o.eliminated||o.flying||o.owner===b.owner) continue; if(Math.hypot(o.x-t.x,o.y-t.y)<70){ unit=true; break; } }
  if(!unit) return;                                                                            // the threat at t is an animal (or nothing) -> hold the grenade
  b.grenades--; b.gnCd=rand(5,8); const a=Math.atan2(t.y-b.y,t.x-b.x), reach=Math.min(420,d), sp=reach*5.4;
  game.grenades.push({x:b.x+Math.cos(a)*22, y:b.y+Math.sin(a)*22, vx:Math.cos(a)*sp, vy:Math.sin(a)*sp, t:GRENADE.fuse, from:b.owner, bob:0});
  addFloat(b.x,b.y-22,'grenade!','#ffd27a'); }
/* ---------------- base expansion (spend gathered resources to grow & harden) ---------------- */
function botBaseBounds(owner){ let minx=1e9,miny=1e9,maxx=-1e9,maxy=-1e9,any=false;
  for(const [k,s] of game.structures){ if(s.owner!==owner||(s.type!=='floor'&&s.type!=='trifloor')) continue;
    const [gx,gy]=k.split(',').map(Number); any=true; if(gx<minx)minx=gx; if(gy<miny)miny=gy; if(gx>maxx)maxx=gx; if(gy>maxy)maxy=gy; }
  return any?{minx,miny,maxx,maxy}:null; }
function botStores(b){ const out=[b.inv]; const tc=game.deploys.get(b.tcKey); if(tc&&tc.store) out.push(tc.store); return out; }   // carried + the Tool Cupboard (the ONE store now — box removed)
function botHas(b,res,amt){ let t=0; for(const s of botStores(b)) t+=(s[res]||0); return t>=amt; }
function botPay(b,res,amt){ for(const s of botStores(b)){ if(amt<=0) break; const take=Math.min(s[res]||0,amt); s[res]-=take; amt-=take; } }
function botBaseFloors(owner){ let n=0; for(const [,s] of game.structures){ if(s.owner===owner&&(s.type==='floor'||s.type==='trifloor')) n++; } return n; }
function botOwnerTurrets(owner){ let n=0; for(const [,s] of game.deploys){ if(s.owner===owner&&s.type==='turret') n++; } return n; }
function botEstablished(b){ return botBaseFloors(b.owner)>=8 && botOwnerTurrets(b.owner)>=1; }   // built up enough to go raid
function wallWouldTrap(key){           // would adding this wall box a floored cell in with no usable exit? (walls AND solid turrets/boxes both block an exit)
  const p=key.split(','), t=p[0], a=+p[1], c=+p[2];
  const cells = t==='V' ? [[a-1,c],[a,c]] : [[a,c-1],[a,c]];
  for(const [gx,gy] of cells){ if(!game.structures.has(gkey(gx,gy))) continue;
    const edges=[['V,'+gx+','+gy,gx-1,gy], ['V,'+(gx+1)+','+gy,gx+1,gy], ['H,'+gx+','+gy,gx,gy-1], ['H,'+gx+','+(gy+1),gx,gy+1]];
    let blocked=0, hasDoor=false;
    for(const [e,nx,ny] of edges){ if(e===key){ blocked++; continue; }
      const w=game.walls.get(e); if(w){ blocked++; if(w.type==='door') hasDoor=true; continue; }
      const d=game.deploys.get(gkey(nx,ny)); if(d && d.type!=='cupboard'){ blocked++; } }    // an exit that only leads into a solid turret/box is no exit
    if(blocked>=4 && !hasDoor){ const cx=gx*TILE+TILE/2, cy=gy*TILE+TILE/2;
      const pIn = !player.dead && Math.abs(player.x-cx)<TILE/2 && Math.abs(player.y-cy)<TILE/2;   // only allow full enclosure if a player is inside
      if(!pIn) return true; } }
  return false; }
function deployWouldTrap(gx,gy){       // would dropping a solid deploy on (gx,gy) leave an adjacent own floor with no open exit?
  for(const [dx,dy] of [[1,0],[-1,0],[0,1],[0,-1]]){ const nx=gx+dx, ny=gy+dy; if(!foundationAt(nx,ny)) continue;
    const edges=[['V,'+nx+','+ny,nx-1,ny], ['V,'+(nx+1)+','+ny,nx+1,ny], ['H,'+nx+','+ny,nx,ny-1], ['H,'+nx+','+(ny+1),nx,ny+1]];
    let open=0;
    for(const [e,ex,ey] of edges){ const w=game.walls.get(e); if(w && w.type!=='door') continue;     // walled edge -> closed
      if(ex===gx && ey===gy) continue;                                                                 // this edge would open into the NEW deploy -> closed
      const dd=game.deploys.get(gkey(ex,ey)); if(dd && dd.type!=='cupboard') continue;                 // opens into an existing solid deploy -> closed
      open++; }
    if(open===0) return true; }
  return false; }
function botAddFloor(b){ if(!botHas(b,'wood',40)) return false; const bb=botBaseBounds(b.owner); if(!bb) return false;
  const cand=[];
  for(const [k,s] of game.structures){ if(s.owner!==b.owner||(s.type!=='floor'&&s.type!=='trifloor')) continue;
    const [gx,gy]=k.split(',').map(Number);
    for(const [dx,dy] of [[1,0],[-1,0],[0,1],[0,-1]]){ const nx=gx+dx, ny=gy+dy, nk=gkey(nx,ny);
      if(game.structures.has(nk)||game.deploys.has(nk)) continue;
      if(typeof copterAtCell==='function' && copterAtCell(nx,ny)) continue;             // can't lay a foundation on a minicopter
      if((Math.max(bb.maxx,nx)-Math.min(bb.minx,nx)+1)>10 || (Math.max(bb.maxy,ny)-Math.min(bb.miny,ny)+1)>10) continue;   // base may grow up to 10x10
      if(b.doorGy!==undefined && ny>=b.doorGy) continue;               // never wall off the door side
      const cx=nx*TILE+TILE/2, cy=ny*TILE+TILE/2; if(inSafeZone(cx,cy)||(typeof inMonZone==='function'&&inMonZone(cx,cy))) continue;
      if((typeof lakeAt==='function'&&lakeAt(cx,cy)) || (typeof onLand==='function'&&!onLand(cx,cy))) continue;   // never expand the base onto water/ocean (would strand units against it)
      if(typeof boulderAt==='function'&&boulderAt(cx,cy)) continue;                                             // never build on a boulder (solid)
      if(game.animals && game.animals.some(a=>a.hp>0 && Math.floor(a.x/TILE)===nx && Math.floor(a.y/TILE)===ny)) continue;   // can't lay a foundation on top of an animal
      cand.push({nx,ny,nk}); } }
  if(!cand.length) return false;
  const c=cand[randi(0,cand.length-1)]; botPay(b,'wood',40);
  game.structures.set(c.nk,{type:'floor',mat:'wood',hp:100,max:100,owner:b.owner});
  const wkeys=[];
  if(!game.structures.has(gkey(c.nx,c.ny-1))) wkeys.push('H,'+c.nx+','+c.ny);
  if(!game.structures.has(gkey(c.nx,c.ny+1))) wkeys.push('H,'+c.nx+','+(c.ny+1));
  if(!game.structures.has(gkey(c.nx-1,c.ny))) wkeys.push('V,'+c.nx+','+c.ny);
  if(!game.structures.has(gkey(c.nx+1,c.ny))) wkeys.push('V,'+(c.nx+1)+','+c.ny);
  for(const wk of wkeys){ if(!wallWouldTrap(wk)) eWall(wk,'wall',b.owner); }   // never box a cell in on all sides (anti-trap)
  addFloat(c.nx*TILE+TILE/2, c.ny*TILE+TILE/2-10,'+room','#9ad06a'); ensureSideDoors(b.owner); return true; }   // keep a door on each side of the GROWN perimeter
function botAddTurret(b){ if(!botHas(b,'metal',30)||!botHas(b,'wood',40)) return false;       // turrets go on the EXTERIOR perimeter: clear LOS to raiders/animals (interior turrets are blind behind their own walls), and they don't clog the inside
  const bb=botBaseBounds(b.owner); if(!bb) return false;
  const doorGx=Math.floor((b.doorX!==undefined?b.doorX:b.hx)/TILE);
  const cand=[];
  for(let nx=bb.minx-1; nx<=bb.maxx+1; nx++) for(let ny=bb.miny-1; ny<=bb.maxy+1; ny++){
    const nk=gkey(nx,ny); if(game.structures.has(nk)||game.deploys.has(nk)) continue;          // an empty ground cell, not a floor/deploy
    let adj=false; for(let ax=-1;ax<=1&&!adj;ax++) for(let ay=-1;ay<=1&&!adj;ay++){ const s=game.structures.get(gkey(nx+ax,ny+ay)); if(s&&s.owner===b.owner&&(s.type==='floor'||s.type==='trifloor')) adj=true; }
    if(!adj) continue;                                                                          // must hug the base wall
    if(b.doorGy!==undefined && ny>=b.doorGy && Math.abs(nx-doorGx)<=1) continue;                // keep the south door lane clear so units can get out
    const cx=nx*TILE+TILE/2, cy=ny*TILE+TILE/2;
    if(inSafeZone(cx,cy)||(typeof inMonZone==='function'&&inMonZone(cx,cy))) continue;
    if((typeof lakeAt==='function'&&lakeAt(cx,cy))||(typeof onLand==='function'&&!onLand(cx,cy))) continue;   // not on water
    if(typeof boulderAt==='function'&&boulderAt(cx,cy)) continue;                                            // not on a boulder
    if(typeof copterAtCell==='function'&&copterAtCell(nx,ny)) continue;
    let near=false; for(const [dx,dy] of [[1,0],[-1,0],[0,1],[0,-1]]){ const dd=game.deploys.get(gkey(nx+dx,ny+dy)); if(dd&&dd.type==='turret'){ near=true; break; } }
    if(near) continue;                                                                          // space turrets out (dotted ring) so units keep clear lanes around the base
    cand.push({nk,cx,cy}); }
  if(cand.length){ cand.sort((p,q)=> Math.hypot(q.cx-(b.doorX||b.hx),q.cy-(b.doorY||b.hy)) - Math.hypot(p.cx-(b.doorX||b.hx),p.cy-(b.doorY||b.hy)) );   // cover the raid-facing sides first (farthest from our own door)
    const c=cand[0]; game.deploys.set(c.nk,{type:'turret',mat:'wood',hp:150,max:150,angle:0,cd:0,owner:b.owner, tier:(b.hard?3:b.weak?1:2), ext:true});   // ext: placed on the exterior perimeter
    game._turBuilt=game._turBuilt||{ext:0,int:0}; game._turBuilt.ext++;
    botPay(b,'metal',30); botPay(b,'wood',40); addFloat(c.cx,c.cy-10,'+turret','#9ad06a'); return true; }
  for(const [k,s] of game.structures){ if(s.owner!==b.owner||s.type!=='floor'||game.deploys.has(k)) continue;   // fallback: no exterior spot -> an interior floor (rare)
    const [gx,gy]=k.split(',').map(Number); if(deployWouldTrap(gx,gy)) continue;
    game.deploys.set(k,{type:'turret',mat:'wood',hp:150,max:150,angle:0,cd:0,owner:b.owner, tier:(b.hard?3:b.weak?1:2), ext:false});
    game._turBuilt=game._turBuilt||{ext:0,int:0}; game._turBuilt.int++;
    botPay(b,'metal',30); botPay(b,'wood',40); addFloat(gx*TILE+TILE/2,gy*TILE+TILE/2-10,'+turret','#9ad06a'); return true; }
  return false; }
function botParkSpot(b){                        // where to PARK the minicopter: just off the base footprint, on the side AWAY from the nearest enemy base (gunfire comes from that direction — keep the copter sheltered so it isn't lost)
  const bb=botBaseBounds(b.owner);
  const cxB = bb?((bb.minx+bb.maxx+1)*TILE/2):b.hx, cyB = bb?((bb.miny+bb.maxy+1)*TILE/2):b.hy;
  let ex=null,ey=null,bd=1e18;
  for(const o of game.enemies){ if(o.owner===b.owner||!o.primary||o.eliminated||!baseAlive(o)) continue; const d=dist2(cxB,cyB,o.hx,o.hy); if(d<bd){ bd=d; ex=o.hx; ey=o.hy; } }
  let ax=-1, ay=0; if(ex!==null){ const a=Math.atan2(cyB-ey, cxB-ex); ax=Math.cos(a)||-1; ay=Math.sin(a)||0; }   // unit vector FROM the enemy base toward us = the sheltered side
  const reach=(bb?Math.max(bb.maxx-bb.minx+1, bb.maxy-bb.miny+1):3)*TILE/2 + TILE*2.5;
  return { x:clamp(cxB+ax*reach,COPTER.r,WORLD.w-COPTER.r), y:clamp(cyB+ay*reach,COPTER.r,WORLD.h-COPTER.r), cxB, cyB, ax, ay }; }
function botParkCopterClear(b){ const c=b.copter; if(!c||c.destroyed||b.flying||b._aboard) return;   // a parked copter must never sit on the buildable footprint, and parks on the side sheltered from the nearest enemy base
  const bb=botBaseBounds(b.owner); if(!bb) return;
  const sp=botParkSpot(b);
  const cg=Math.floor(c.x/TILE), cgy=Math.floor(c.y/TILE);
  const onFootprint = cg>=bb.minx-1 && cg<=bb.maxx+1 && cgy>=bb.miny-1 && cgy<=bb.maxy+1;
  const enemySide = ((c.x-sp.cxB)*(-sp.ax) + (c.y-sp.cyB)*(-sp.ay)) > 0;                          // copter currently sits on the enemy-facing half -> exposed, move it to shelter
  if((onFootprint || enemySide) && Math.hypot(c.x-sp.x, c.y-sp.y) > TILE*1.2){
    c.x=clamp(sp.x,COPTER.r,WORLD.w-COPTER.r); c.y=clamp(sp.y,COPTER.r,WORLD.h-COPTER.r); c.vx=0; c.vy=0;
    if((game.t-(b._parkT||-1e9))>5){ b._parkT=game.t; addFloat(c.x,c.y-22,'moved copter','#bcd0e0'); } } }
function botHarden(b){   // harden a wall — CASCADE one wall up as far as resources allow in a single call (wood->stone->metal->armored), so a base actually reaches ARMORED (depth-first) instead of every wall creeping up one tier at a time
  for(const [k,w] of game.walls){ if(w.owner!==b.owner || w.mat==='armored') continue;
    let upg=false;
    if(w.mat==='wood' && botHas(b,'stone',15)){ botPay(b,'stone',15); w.mat='stone'; upg=true; }
    if(w.mat==='stone' && botHas(b,'metal',20)){ botPay(b,'metal',20); w.mat='metal'; upg=true; }
    if(w.mat==='metal' && (b.hqm||0)>=8){ b.hqm-=8; w.mat='armored'; upg=true; }                       // spend HQM (bought at the trade zone) to ARMOR-PLATE the wall (2x metal HP)
    if(upg){ w.max=tierHp(BUILD[w.type],w.mat); w.hp=w.max; const sg=wallSegOf(k,w);
      addFloat((sg[0]+sg[2])/2,(sg[1]+sg[3])/2,'+'+w.mat, w.mat==='armored'?'#7f93ad':w.mat==='metal'?'#aeb6bf':'#c2c8cf'); return true; } }
  return false; }
function botHardenFloor(b){   // also upgrade FOUNDATIONS (floors) wood->stone->metal->armored — its OWN build step (not gated behind every wall being armored, so growing bases still reinforce their floors)
  for(const [k,s] of game.structures){ if(s.owner!==b.owner || (s.type!=='floor'&&s.type!=='trifloor') || s.mat==='armored') continue;
    let upg=false;
    if(s.mat==='wood' && botHas(b,'stone',12)){ botPay(b,'stone',12); s.mat='stone'; upg=true; }
    if(s.mat==='stone' && botHas(b,'metal',16)){ botPay(b,'metal',16); s.mat='metal'; upg=true; }
    if(s.mat==='metal' && (b.hqm||0)>=6){ b.hqm-=6; s.mat='armored'; upg=true; }
    if(upg){ s.max=tierHp(BUILD[s.type],s.mat); s.hp=s.max; const c=k.indexOf(','), gx=+k.slice(0,c), gy=+k.slice(c+1);
      addFloat(gx*TILE+TILE/2,gy*TILE+TILE/2,'+'+s.mat, s.mat==='armored'?'#7f93ad':s.mat==='metal'?'#aeb6bf':'#c2c8cf'); return true; } }
  return false; }
function botBuild(b){    // proactive base development, in the user's priority order (hard bots build bigger, tougher, costlier-to-raid bases)
  botParkCopterClear(b);                                          // first move the helicopter off the build area if it's in the way
  const floors=botBaseFloors(b.owner);
  const minFloors=b.hard?9:5, maxTur=b.hard?10:b.weak?5:8, capFloors=b.hard?49:36;   // ~7x7 (hard) / 6x6 fortress: still tough, but CRACKABLE so matches resolve, and a smaller footprint = far less at-base circling/idle
  if(floors<minFloors && botAddFloor(b)) return true;            // 1: footprint (hard = larger = longer path to the Tool Cupboard)
  if(botOwnerTurrets(b.owner)<maxTur && botAddTurret(b)) return true; // 2: ring with turrets (hard = more) for animal + raid defense
  if(b.hard && botHarden(b)) return true;                        // hard bots harden walls to stone/metal early -> expensive to breach
  if(!b.jack && botHas(b,'wood',120) && botHas(b,'metal',60)){ botPay(b,'wood',120); botPay(b,'metal',60); b.jack=true;  // 3: jackhammer (3x gather)
    addFloat(b.x,b.y-22,'+jackhammer','#e6c878'); return true; }
  if(b.primary && floors>=5 && botHireWorker(b)) return true;    // 3.5: HIRE a worker once the base is established (capped) — more workers = faster economy (a strong, balanced growth lever)
  b._hf=!b._hf;                                                  // 4: harden WALLS and FOUNDATIONS, alternating which is tried first so BOTH advance even while the base keeps expanding (walls alone would always have work and floors would never upgrade)
  if(b._hf){ if(botHardenFloor(b)) return true; if(botHarden(b)) return true; }
  else { if(botHarden(b)) return true; if(botHardenFloor(b)) return true; }
  if(floors<capFloors && botAddFloor(b)) return true;            // keep growing when resource-rich
  return false; }
function botBreached(b){   // a perimeter gap (no wall, not the doorway) in our base -> needs sealing
  const doorKey = b.doorGy!==undefined ? ('H,'+Math.floor((b.doorX||b.hx)/TILE)+','+b.doorGy) : null;
  for(const [k,s] of game.structures){ if(s.owner!==b.owner||(s.type!=='floor'&&s.type!=='trifloor')) continue;
    const [gx,gy]=k.split(',').map(Number);
    const sides=[['H,'+gx+','+gy,gx,gy-1],['H,'+gx+','+(gy+1),gx,gy+1],['V,'+gx+','+gy,gx-1,gy],['V,'+(gx+1)+','+gy,gx+1,gy]];
    for(const [ek,nx,ny] of sides){ if(game.structures.has(gkey(nx,ny))) continue;   // shared interior edge -> fine
      if(ek===doorKey) continue;                                                       // the doorway is meant to be open
      const w=game.walls.get(ek); if(!w || w.hp<=0){ if(game._freed && (game._freed[ek]||0) > (game.t||0)) continue;   // just tore this down to escape -> leave it open briefly (no churn)
        return ek; } } }                                                               // exposed perimeter edge -> breach
  return null; }
function botUpkeepStores(b){ return botStores(b); }   // box removed -> seal/repair draw the same single store (the Tool Cupboard)
function botPayUpkeep(b,res,amt){ const stores=botUpkeepStores(b); let have=0; for(const s of stores) have+=(s[res]||0); if(have<amt) return false; for(const s of stores){ if(amt<=0)break; const take=Math.min(s[res]||0,amt); s[res]-=take; amt-=take; } return true; }
function botSealWall(b,ek){ if(!ek) ek=botBreached(b); if(!ek) return false;
  const lock=(typeof REPAIR_LOCK!=='undefined'?REPAIR_LOCK:30);                              // a DESTROYED wall's spot can't be re-walled for REPAIR_LOCK (30s) -> a committed raid stays open and actually breaks in (no instant reseal)
  if(game._breachT && (game.t||0)-(game._breachT[ek]||-1e9) < lock) return false;
  if(!botPayUpkeep(b,'wood',40)) return false;
  eWall(ek,'wall',b.owner); const w=game.walls.get(ek); if(w){ const sg=wallSegOf(ek,w); addFloat((sg[0]+sg[2])/2,(sg[1]+sg[3])/2-8,'sealed','#9ad06a'); } return true; }
function botDamagedWall(b){ let worst=null, wf=0.6; const lock=(typeof REPAIR_LOCK!=='undefined'?REPAIR_LOCK:10);   // a perimeter wall below 60% hp -> wants repair (most-damaged first)
  for(const [k,w] of game.walls){ if(w.owner!==b.owner||w.type==='door'||w.hp<=0) continue; if(game.t-(w._hitT!==undefined?w._hitT:-1e9)<lock) continue; const f=w.hp/w.max; if(f<wf){ wf=f; worst=k; } } return worst; }   // skip walls hit in the last REPAIR_LOCK s (no instant repairs)
function botRepairCost(w){ return w.mat==='metal'?['metal',8]:w.mat==='stone'?['stone',8]:['wood',12]; }
function botRepairWall(b,k){ const w=game.walls.get(k); if(!w) return false; if(game.t-(w._hitT!==undefined?w._hitT:-1e9)<(typeof REPAIR_LOCK!=='undefined'?REPAIR_LOCK:10)) return false; const c=botRepairCost(w);
  if(!botPayUpkeep(b,c[0],c[1])) return false; w.hp=Math.min(w.max,w.hp+w.max*0.5);
  const sg=wallSegOf(k,w); addFloat((sg[0]+sg[2])/2,(sg[1]+sg[3])/2-8,'repaired','#9ad06a'); return true; }
function botSafe(b){ const tc=game.deploys.get(b.tcKey); if(!tc||!tc.store) return false;   // enough in the TC to NOT decay for 5 minutes -> objective flips to raiding
  const store=tc.store.wood+tc.store.stone+tc.store.metal, n=botBaseFloors(b.owner)+botOwnerTurrets(b.owner)+2, up=(typeof UPKEEP!=='undefined'?UPKEEP:0.0075);
  return store > n*up*300; }
function depositHome(b){   // drop ALL carried loot into the Tool Cupboard (box removed — the TC is the one store)
  if(b.ally){ for(const r of ['wood','stone','metal']){ if(b.inv[r]>0){ game.inv[r]=(game.inv[r]||0)+b.inv[r]; b.inv[r]=0; } } if(b.scrap>0){ game.inv.scrap=(game.inv.scrap|0)+b.scrap; b.scrap=0; } return; }   // player's workers stock the player's stockpile
  const tc=game.deploys.get(b.tcKey); if(!tc||!tc.store) return;
  for(const r of ['wood','stone','metal']){ if(b.inv[r]>0){ tc.store[r]=(tc.store[r]||0)+b.inv[r]; b.inv[r]=0; } }
  if((b.scrap||0)>0){ tc.store.scrap=(tc.store.scrap||0)+b.scrap; b.scrap=0; } }

/* ---------------- combat hooks (called from main updateBullets/explode) ---------------- */
function creditKill(by){ if(!by) return; const reward=12;                       // kills pay out scrap
  if(by===OWNER){ game.playerKills=(game.playerKills||0)+1; game.inv.scrap=(game.inv.scrap|0)+reward; }
  else { const k=game.enemies.find(e=>e.owner===by); if(k){ k.kills=(k.kills||0)+1; k.scrap=(k.scrap||0)+reward; } } }
function hurtBot(b,dmg,sx,sy,by){ if(b.dead||b.flying||b.eliminated) return; if(typeof inSafeZone==='function' && inSafeZone(b.x,b.y)) return;   // no damage in the trade safe zone
  b.hp-=dmg; burst(b.x,b.y,COL.blood,5,140);
  b.regenT=4;                                                          // pause health regen for a few seconds after being hit
  if(by) b.lastHitBy=by;
  if(sx!==undefined){ b.threatX=sx; b.threatY=sy; b.retaliateT=2.2; }   // remember who shot us -> return fire
  if(b.hp<=0) botDie(b); }
function botDie(b){ b.dead=true; b.respawnT=15; b.flying=false;   // 15s respawn: a BIG coordinated raid out-cycles a base's trickle of respawning defenders (its real advantage), while a forward raid base puts the raiders' own respawns back on the wall fast
  for(const r of ['wood','stone','metal']){ if(b.inv[r]>0){ spillStack(b.x,b.y,r,b.inv[r]); b.inv[r]=0; } }   // killed -> drop carried resources on the ground
  if(typeof addLoot==='function'){                                                            // ALSO drop their rockets, ammo, GUN and scrap (so loot is recoverable, matching the player) -> the winning side scavenges it and snowballs (momentum)
    if(b.rockets>0){ for(let i=0;i<b.rockets && i<12;i++) addLoot(b.x,b.y,'rocket',1); b.rockets=0; }
    if((b.grenades||0)>0){ for(let i=0;i<b.grenades && i<6;i++) addLoot(b.x,b.y,'rocket',1); b.grenades=0; }
    addLoot(b.x,b.y,'ammo', (typeof randi==='function')?randi(24,60):40);
    if(b.gun && b.gun!=='pistol'){ addLoot(b.x,b.y,'gun',1,b.gun); b.gun='pistol'; } }          // DROP THE GUN -> a scavenger upgrades from it; the dead unit reverts to a pistol (must re-earn its weapon) — momentum for the winning team
  if((b.scrap||0)>0 && typeof spillStack==='function'){ spillStack(b.x,b.y,'scrap',b.scrap); b.scrap=0; }
  if(b.id===game.bounty && b.lastHitBy===OWNER){ game.inv.scrap=(game.inv.scrap|0)+BOUNTY_REWARD; addFloat(player.x,player.y-30,'+'+BOUNTY_REWARD+' bounty!','#ffe07a'); game.bounty=null; }
  creditKill(b.lastHitBy); burst(b.x,b.y,COL.blood,20,220); addFloat(b.x,b.y-20,'down','#e2664a'); }
function botEliminate(b){ b.eliminated=true; b.dead=true; game.elims.push({text:'Base '+(b.id+1)+' ELIMINATED', t:30}); }
function clearDeadBase(owner, tx, ty){   // a base whose TC was cracked -> clear its orphaned walls/floors/turrets so they don't litter the map (units would otherwise circle dead-base wall debris) — also speeds the field collapse. Tight radius so a team's OTHER base (>=900px away) is untouched.
  const R2=560*560;
  for(const [k,w] of [...game.walls]){ if(w.owner!==owner) continue; const sg=wallSegOf(k,w); if(dist2(tx,ty,(sg[0]+sg[2])/2,(sg[1]+sg[3])/2)<R2) game.walls.delete(k); }
  for(const [k,s] of [...game.structures]){ if(s.owner!==owner||(s.type!=='floor'&&s.type!=='trifloor')) continue; const c=k.indexOf(','),gx=+k.slice(0,c),gy=+k.slice(c+1), cx=gx*TILE+TILE/2, cy=gy*TILE+TILE/2; if(dist2(tx,ty,cx,cy)<R2){ game.structures.delete(k); if(typeof burst==='function') burst(cx,cy,'#6f4a22',3,90); } }
  for(const [k,d] of [...game.deploys]){ if(d.owner!==owner||d.type==='cupboard') continue; const c=k.indexOf(','),gx=+k.slice(0,c),gy=+k.slice(c+1); if(dist2(tx,ty,gx*TILE+TILE/2,gy*TILE+TILE/2)<R2) game.deploys.delete(k); } }

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

/* ---------------- rendering (called inside the world transform / LOS clip) ---------------- */
function drawTransports(){ if(!game.transports) return; for(const tr of game.transports){ if(tr.destroyed || !inView(tr.x,tr.y,TRANSPORT.r+40)) continue;
  const s=worldToScreen(tr.x,tr.y), col=ENEMY_COLS[(parseInt((tr.owner||'e0').slice(1))||0)%ENEMY_COLS.length];
  ctx.fillStyle='rgba(0,0,0,.25)'; ctx.beginPath(); ctx.ellipse(s.x,s.y+10,TRANSPORT.r,TRANSPORT.r*0.6,0,0,TAU); ctx.fill();
  ctx.save(); ctx.translate(s.x,s.y-16); ctx.rotate(tr.angle);
  ctx.fillStyle=COL.copterDk; ctx.fillRect(-TRANSPORT.r*1.5,-5,TRANSPORT.r,10);                                   // tail boom
  ctx.fillStyle=col; ctx.beginPath(); ctx.ellipse(0,0,TRANSPORT.r*0.98,TRANSPORT.r*0.62,0,0,TAU); ctx.fill();      // big hull
  ctx.strokeStyle='rgba(0,0,0,.35)'; ctx.lineWidth=2; ctx.stroke();
  ctx.fillStyle='rgba(0,0,0,.28)'; ctx.beginPath(); ctx.ellipse(0,TRANSPORT.r*0.2,TRANSPORT.r*0.8,TRANSPORT.r*0.3,0,0,TAU); ctx.fill();
  ctx.fillStyle='rgba(210,238,255,.92)'; ctx.beginPath(); ctx.ellipse(TRANSPORT.r*0.55,0,TRANSPORT.r*0.3,TRANSPORT.r*0.34,0,0,TAU); ctx.fill();   // cockpit glass
  ctx.restore();
  ctx.save(); ctx.translate(s.x,s.y-16); ctx.rotate(tr.rotor||0); ctx.fillStyle='rgba(36,42,32,.5)'; ctx.fillRect(-5,-TRANSPORT.r*1.6,10,TRANSPORT.r*3.2); ctx.fillRect(-TRANSPORT.r*1.6,-5,TRANSPORT.r*3.2,10); ctx.restore();
  if(tr.riders&&tr.riders.length){ ctx.fillStyle='#e6c45e'; ctx.font='bold 11px sans-serif'; ctx.textAlign='center'; ctx.fillText('×'+tr.riders.length, s.x, s.y-TRANSPORT.r-12); ctx.textAlign='left'; }
  if(tr.hp<tr.max){ const f=Math.max(0,tr.hp/tr.max); ctx.fillStyle='rgba(0,0,0,.6)'; ctx.fillRect(s.x-22,s.y-TRANSPORT.r-22,44,4); ctx.fillStyle='#d2553c'; ctx.fillRect(s.x-22,s.y-TRANSPORT.r-22,44*f,4); } } }
function drawBotCopter(b){ const c=b.copter; if(!c || c.destroyed) return; if(!inView(c.x,c.y,40)) return;
  const s=worldToScreen(c.x,c.y), fly=b.flying, lift=fly?12:2;
  ctx.fillStyle='rgba(0,0,0,.25)'; ctx.beginPath(); ctx.ellipse(s.x,s.y+6,COPTER.r*0.9,COPTER.r*0.55,0,0,TAU); ctx.fill();
  ctx.save(); ctx.translate(s.x,s.y-lift); ctx.rotate(c.angle);
  ctx.fillStyle=COL.copterDk; ctx.fillRect(-COPTER.r*1.4,-3,COPTER.r*0.9,6);                          // tail boom
  ctx.fillStyle=rgrad(2,-3,COPTER.r*0.85,b.col,'rgba(0,0,0,.55)');                                    // tinted hull, shaded
  ctx.beginPath(); ctx.ellipse(0,0,COPTER.r*0.8,COPTER.r*0.58,0,0,TAU); ctx.fill();
  ctx.strokeStyle='rgba(0,0,0,.3)'; ctx.lineWidth=1.5; ctx.beginPath(); ctx.ellipse(0,0,COPTER.r*0.8,COPTER.r*0.58,0,0,TAU); ctx.stroke();
  ctx.fillStyle=rgrad(COPTER.r*0.5,-2,COPTER.r*0.3,'rgba(210,238,255,.95)','rgba(110,160,200,.6)');   // glass
  ctx.beginPath(); ctx.ellipse(COPTER.r*0.5,0,COPTER.r*0.27,COPTER.r*0.31,0,0,TAU); ctx.fill();
  ctx.fillStyle='rgba(255,255,255,.5)'; ctx.beginPath(); ctx.ellipse(COPTER.r*0.42,-COPTER.r*0.12,COPTER.r*0.09,COPTER.r*0.12,0,0,TAU); ctx.fill();
  ctx.restore();
  ctx.save(); ctx.translate(s.x,s.y-lift); ctx.rotate(c.rotor||0); ctx.fillStyle='rgba(36,42,32,'+(fly?0.5:0.9)+')';
  ctx.fillRect(-3,-COPTER.r*1.2,6,COPTER.r*2.4); ctx.fillRect(-COPTER.r*1.2,-3,COPTER.r*2.4,6); ctx.restore(); }
function drawBot(b){ const s=worldToScreen(b.x,b.y);
  shadow(s.x,s.y+12,14);
  const moving=(b.state==='gather'||b.state==='raid'||b.state==='return'), lk=moving?Math.sin(game.t*10+(b.id||0))*1.8:0;
  ctx.fillStyle=vgrad(s.x,s.y+5,0,12,'#3a322a','#1c160f'); fillRR(s.x-7,s.y+5+lk,5,11,2.2,ctx.fillStyle); fillRR(s.x+2,s.y+5-lk,5,11,2.2,ctx.fillStyle);  // legs
  ctx.save(); ctx.translate(s.x,s.y-1); ctx.rotate(b.angle);                                          // arm + tool/gun
  ctx.fillStyle='#c39e76'; fillRR(2,-2.5,9,5,2,ctx.fillStyle);                                         // forearm
  if(b.gathering){ ctx.save(); ctx.translate(8,0); ctx.rotate(-0.4+Math.sin(b.swing||0)*0.9);          // swing a tool exactly like the player gathering
      ctx.fillStyle='#5b4226'; ctx.fillRect(0,-2,16,4); ctx.fillStyle='#b9c0c7'; ctx.fillRect(13,-6,7,12); ctx.restore(); }
  else { ctx.fillStyle='#23261f'; fillRR(8,-3,17,6,2,ctx.fillStyle); ctx.fillStyle='#54584c'; ctx.fillRect(8,-3,17,1.5);
         if(b.rifleLaser){ ctx.fillStyle='#ff5a4a'; ctx.beginPath(); ctx.arc(26,0,1.7,0,TAU); ctx.fill(); } }   // rifle/pistol (+ red laser-sight emitter when upgraded)
  ctx.restore();
  ctx.fillStyle='#15140e'; fillRR(s.x-9,s.y-7,18,15,5,ctx.fillStyle);                                 // torso
  ctx.fillStyle=b.col; fillRR(s.x-7,s.y-6,14,13,4,ctx.fillStyle);
  ctx.fillStyle='rgba(0,0,0,.34)'; rrect(s.x-7,s.y+1,14,6,3); ctx.fill();                              // lower shade
  ctx.fillStyle='rgba(255,255,255,.16)'; fillRR(s.x-7,s.y-6,14,4,3,ctx.fillStyle);                     // shoulder sheen
  if(b.bodyArmor>0 && typeof ARMOR!=='undefined'){ ctx.fillStyle=(ARMOR.bodyCol&&ARMOR.bodyCol[b.bodyArmor])||'#9fb0c8'; fillRR(s.x-6,s.y-4,12,9,2.5,ctx.fillStyle);   // BODY ARMOR plate -> hard teams visibly wear armor
    ctx.fillStyle='rgba(0,0,0,.42)'; for(let i=0;i<b.bodyArmor;i++) ctx.fillRect(s.x-4+i*3.4,s.y+3,2.2,1.4); }                                                         // level pips
  const hy=s.y-13; ctx.fillStyle='#15140e'; ctx.beginPath(); ctx.arc(s.x,hy,7,0,TAU); ctx.fill();       // head
  ctx.fillStyle=rgrad(s.x,hy,6,'#e2bd96','#a9805a'); ctx.beginPath(); ctx.arc(s.x,hy,5.4,0,TAU); ctx.fill();
  ctx.fillStyle=b.col; fillRR(s.x-5,hy-6,10,3.4,1.5,ctx.fillStyle);                                     // team band
  if(b.facemask>0 && typeof ARMOR!=='undefined'){ ctx.fillStyle=(ARMOR.headCol&&ARMOR.headCol[b.facemask])||'#aab4c2'; fillRR(s.x-5,hy-1,10,5,2,ctx.fillStyle); }   // FACEMASK / visor over the face
  if(b.hp<b.max){ const f=Math.max(0,b.hp/b.max); ctx.fillStyle='rgba(0,0,0,.6)'; fillRR(s.x-12,s.y-27,24,4,2,ctx.fillStyle);
    ctx.fillStyle='#d2553c'; fillRR(s.x-12,s.y-27,24*f,4,2,ctx.fillStyle); } }
function drawEnemies(){ drawTransports();
  for(const b of game.enemies){ if(b.eliminated) continue;
  drawBotCopter(b);
  const inCopter = b.flying && b.copter && !b.copter.destroyed;                 // only a bot actually riding an intact copter is hidden (it's drawn AS the copter)
  if(!b.dead && !inCopter && inView(b.x,b.y,40)) drawBot(b); } }                // otherwise the bot is always drawn — no invisible units
/* ---------------- debug paths overlay (toggled by the HUD "Debug paths" button) ---------------- */
function botAction(b){               // short label for what this unit is currently DOING — uses the ground-truth b._act set each frame in updateBot (build/gather/toNode/monument/trade/return/raid/defend/loot/airdrop/roam/found)
  if(b._unfounded) return b._act || (b.primary ? 'found' : 'gather');
  return b._act || b.state || 'gather';
}
function drawDebugPaths(){           // draw each live unit's current ROUTE (waypoints) + ACTION label, so pathing/jitter is visible
  if(!game.enemies) return;
  ctx.save(); ctx.lineWidth=1.6; ctx.font='bold 10px sans-serif'; ctx.textAlign='center';
  for(const b of game.enemies){ if(b.eliminated||b.dead||b.flying) continue; if(!inView(b.x,b.y,120)) continue;
    const s=worldToScreen(b.x,b.y), col=b.ally?'#7ec850':(b.col||'#dddddd'), pl=b._plan;
    ctx.strokeStyle=col; ctx.fillStyle=col; ctx.globalAlpha=0.8;
    if(pl && pl.mode==='path' && pl.path && pl.path.length){                    // A* terrain path
      ctx.beginPath(); ctx.moveTo(s.x,s.y); for(let i=(pl.i||0);i<pl.path.length;i++){ const w=worldToScreen(pl.path[i].x,pl.path[i].y); ctx.lineTo(w.x,w.y); } ctx.stroke();
      for(let i=(pl.i||0);i<pl.path.length;i++){ const w=worldToScreen(pl.path[i].x,pl.path[i].y); ctx.beginPath(); ctx.arc(w.x,w.y,2.6,0,TAU); ctx.fill(); }
    } else if(pl && pl.mode==='around' && pl.cs){                               // rounding our own base via committed corners
      ctx.beginPath(); ctx.moveTo(s.x,s.y); for(let i=(pl.i||0);i<pl.cs.length;i++){ const w=worldToScreen(pl.cs[i].x,pl.cs[i].y); ctx.lineTo(w.x,w.y); } ctx.stroke();
      for(let i=(pl.i||0);i<pl.cs.length;i++){ const w=worldToScreen(pl.cs[i].x,pl.cs[i].y); ctx.beginPath(); ctx.arc(w.x,w.y,3,0,TAU); ctx.stroke(); }
    } else if(b._navX!==undefined){                                            // immediate move target (door routing / direct)
      const w=worldToScreen(b._navX,b._navY); ctx.setLineDash([4,4]); ctx.beginPath(); ctx.moveTo(s.x,s.y); ctx.lineTo(w.x,w.y); ctx.stroke(); ctx.setLineDash([]);
    }
    ctx.globalAlpha=1; const act=botAction(b);
    ctx.fillStyle='rgba(0,0,0,.7)'; ctx.fillText(act, s.x+1, s.y-29); ctx.fillStyle=col; ctx.fillText(act, s.x, s.y-30);
  }
  ctx.globalAlpha=1; ctx.restore();
}
