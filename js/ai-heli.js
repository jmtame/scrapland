"use strict";
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
