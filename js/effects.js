"use strict";
/* ---- drifting clouds: light transparent puffs in the sky + soft shadows that slide across the ground ---- */
function makeCloud(x,y,heavy){ const n=randi(5,9), puffs=[], baseR=heavy?rand(86,140):rand(70,128); let R=0;   // heavy clouds are a bit bigger + denser
  for(let k=0;k<n;k++){ const dx=rand(-baseR*0.95,baseR*0.95), dy=rand(-baseR*0.42,baseR*0.42), r=baseR*rand(0.55,1.0); puffs.push({dx,dy,r}); R=Math.max(R,Math.hypot(dx,dy)+r); }
  return { x, y, puffs, r:R, op:heavy?rand(0.92,1):rand(0.7,1), sp:rand(9,19), heavy:!!heavy }; }            // op = opacity, sp = drift speed; heavy = whiter body + darker shadow (~25% transparent core)
function buildClouds(){ game.clouds=[]; const N=randi(7,10); let m=0;                                       // ~10% more clouds than before (was 6-9)
  while(m<N){
    if(m<=N-2 && Math.random()<0.5){ const cx=rand(-160,WORLD.w), cy=rand(0,WORLD.h), grp=Math.min(N-m,randi(2,3));   // some clouds bunch into CLUSTERS (heavier)
      for(let k=0;k<grp;k++){ game.clouds.push(makeCloud(cx+rand(-150,150), cy+rand(-95,95), true)); m++; } }
    else { game.clouds.push(makeCloud(rand(-200,WORLD.w), rand(0,WORLD.h), Math.random()<0.4)); m++; } } }
function updateClouds(dt){ if(!game.clouds) buildClouds();
  for(const c of game.clouds){ c.x += c.sp*dt; if(c.x-c.r > WORLD.w+160) Object.assign(c, makeCloud(-c.r-rand(0,500), rand(0,WORLD.h), c.heavy)); } }   // drift east; recycle off the right edge (keeps its weight)
const CLOUD_OX=64, CLOUD_OY=86;                                                                           // shadow offset from the cloud (sun from the upper-left)
function drawCloudShadows(){ if(!game.clouds) return;                                                     // soft dark patches on the GROUND (drawn over terrain, under units)
  for(const c of game.clouds){ const sx=c.x+CLOUD_OX, sy=c.y+CLOUD_OY; if(!inView(sx,sy,c.r+140)) continue;
    const s0=c.heavy?0.36:0.22, s1=c.heavy?0.2:0.12;                                                       // heavy clouds cast a darker shadow
    for(const p of c.puffs){ const px=sx+p.dx, py=sy+p.dy, g=ctx.createRadialGradient(px,py,p.r*0.2,px,py,p.r);
      g.addColorStop(0,'rgba(12,17,27,'+(s0*c.op).toFixed(3)+')'); g.addColorStop(0.7,'rgba(12,17,27,'+(s1*c.op).toFixed(3)+')'); g.addColorStop(1,'rgba(12,17,27,0)');
      ctx.fillStyle=g; ctx.beginPath(); ctx.ellipse(px,py,p.r,p.r*0.74,0,0,TAU); ctx.fill(); } } }
function drawClouds(){ if(!game.clouds) return; const lit=0.6+0.4*lightLevel();                           // light transparent cloud bodies in the sky (topmost world layer)
  for(const c of game.clouds){ if(!inView(c.x,c.y,c.r+140)) continue;
    const a0=c.heavy?0.75:0.42, a1=c.heavy?0.5:0.26;                                                        // heavy = whiter + denser body (≈25% transparent at the core)
    for(const p of c.puffs){ const px=c.x+p.dx, py=c.y+p.dy, g=ctx.createRadialGradient(px,py,p.r*0.15,px,py,p.r);
      g.addColorStop(0,'rgba(252,253,255,'+(a0*c.op*lit).toFixed(3)+')'); g.addColorStop(0.55,'rgba(244,248,252,'+(a1*c.op*lit).toFixed(3)+')'); g.addColorStop(1,'rgba(244,248,252,0)');
      ctx.fillStyle=g; ctx.beginPath(); ctx.ellipse(px,py,p.r,p.r*0.78,0,0,TAU); ctx.fill(); } } }
/* ---- fog: patchy drifting ground mist. Its own cycle (can overlap rain/snow/day/night); never in the winter biome; density varies by area; floats + moves. ---- */
function makeFogBank(x,y){ const n=randi(2,5), puffs=[], baseR=rand(150,320); let R=0;
  for(let k=0;k<n;k++){ const dx=rand(-baseR,baseR), dy=rand(-baseR*0.6,baseR*0.6), r=baseR*rand(0.7,1.2); puffs.push({dx,dy,r}); R=Math.max(R,Math.hypot(dx,dy)+r); }
  return { x, y, puffs, r:R, dens:rand(0.5,1.15), sp:rand(5,12), vy:rand(-3,3) }; }                        // dens: how thick this patch is (some areas foggier than others) — denser overall now
function buildFog(){ game.fogBanks=[]; const N=randi(13,20); for(let i=0;i<N;i++) game.fogBanks.push(makeFogBank(rand(0,WORLD.w), rand(0,WORLD.h))); }   // more banks -> denser cover
function updateFog(dt){ const W=game.weather; if(!W) return;
  if(W.fogTimer===undefined){ W.fogTimer=rand(12,30); W.fogMode=0; W.fog=0; }                              // fog has its OWN slow cycle -> can co-occur with rain / snow / night
  W.fogTimer-=dt; if(W.fogTimer<=0){ W.fogMode=W.fogMode?0:1; W.fogTimer = W.fogMode?rand(28,60):rand(45,95); }   // rolls in for a stretch, then clears for longer
  W.fog += ((W.fogMode?1:0)-(W.fog||0))*Math.min(1,dt*0.22);                                               // ease density in/out slowly
  if(!game.fogBanks) buildFog();
  for(const f of game.fogBanks){ f.x+=f.sp*dt; f.y+=f.vy*dt; if(f.x-f.r>WORLD.w+220) Object.assign(f, makeFogBank(-f.r-rand(0,450), rand(0,WORLD.h))); } }   // floats + drifts; recycle off the right edge
function drawFog(){ const W=game.weather; if(!W || (W.fog||0)<0.02 || !game.fogBanks) return;
  for(const f of game.fogBanks){ if(!inView(f.x,f.y,f.r+200)) continue;
    if(typeof biomeAt==='function' && biomeAt(f.x,f.y)==='winter') continue;                               // NO fog in the winter biome
    const a = (W.fog||0) * f.dens * 0.6;                                                                   // global intensity × this patch's density (denser fog)
    for(const p of f.puffs){ const px=f.x+p.dx, py=f.y+p.dy, g=ctx.createRadialGradient(px,py,p.r*0.1,px,py,p.r);
      g.addColorStop(0,'rgba(216,224,232,'+a.toFixed(3)+')'); g.addColorStop(0.65,'rgba(212,220,230,'+(a*0.5).toFixed(3)+')'); g.addColorStop(1,'rgba(210,218,228,0)');
      ctx.fillStyle=g; ctx.beginPath(); ctx.ellipse(px,py,p.r,p.r*0.82,0,0,TAU); ctx.fill(); } } }
/* ---- trains: every 1-3 min a train barrels down a random rail, running over any unit/structure/barrel on the tracks (teams avoid building on rails because of this) ---- */
function spawnTrain(){ if(!game.rails||!game.rails.length) return; const rl=game.rails[randi(0,game.rails.length-1)];
  const pts = (Math.random()<0.5) ? rl.pts : rl.pts.slice().reverse();
  game.trains.push({ pts, seg:0, x:pts[0].x, y:pts[0].y, px:pts[0].x, py:pts[0].y, ang:0, speed:rand(460,640), horn:0 }); }
function updateTrains(dt){ if(!game.trains) game.trains=[];
  if(game.trainT===undefined) game.trainT=rand(20,60);
  game.trainT-=dt; if(game.trainT<=0 && game.rails && game.rails.length){ spawnTrain(); game.trainT=rand(30,90); }   // a train every 30-90s
  const KR=36;
  for(let i=game.trains.length-1;i>=0;i--){ const tr=game.trains[i]; tr.px=tr.x; tr.py=tr.y;
    let move=tr.speed*dt;
    while(move>0 && tr.seg<tr.pts.length-1){ const nx=tr.pts[tr.seg+1], dx=nx.x-tr.x, dy=nx.y-tr.y, dl=Math.hypot(dx,dy)||1;
      if(dl<=move){ tr.x=nx.x; tr.y=nx.y; move-=dl; tr.seg++; } else { tr.x+=dx/dl*move; tr.y+=dy/dl*move; tr.ang=Math.atan2(dy,dx); move=0; } }
    if(tr.seg>=tr.pts.length-1){ game.trains.splice(i,1); continue; }                                  // off the far end -> gone
    if(!player.dead && !player.inCopter && !game.ghost && ptSeg(player.x,player.y,tr.px,tr.py,tr.x,tr.y)<KR){ hurtPlayer(999,tr.x,tr.y); }   // RUN OVER units/animals/barrels in the swept path
    for(const e of game.enemies){ if(e.dead||e.eliminated||e.flying) continue; if(ptSeg(e.x,e.y,tr.px,tr.py,tr.x,tr.y)<KR && typeof hurtBot==='function') hurtBot(e,999,tr.x,tr.y); }
    for(const a of game.animals){ if(a.hp>0 && ptSeg(a.x,a.y,tr.px,tr.py,tr.x,tr.y)<KR){ a.hp=0; a.respawn=rand(11,18); } }
    for(const o of game.barrels){ if(o.hp>0 && ptSeg(o.x,o.y,tr.px,tr.py,tr.x,tr.y)<KR) o.hp=0; }
    const steps=Math.max(1,Math.ceil(Math.hypot(tr.x-tr.px,tr.y-tr.py)/TILE));                          // FLATTEN structures/walls/deploys on the swept tiles
    for(let st=0;st<=steps;st++){ const fx=tr.px+(tr.x-tr.px)*st/Math.max(1,steps), fy=tr.py+(tr.y-tr.py)*st/Math.max(1,steps), gx=Math.floor(fx/TILE), gy=Math.floor(fy/TILE), k=gkey(gx,gy);
      if(game.structures.has(k)) damageStructure(k,9999);
      if(game.deploys.has(k)) damageDeploy(k,9999);
      for(const wk of ['V,'+gx+','+gy,'V,'+(gx+1)+','+gy,'H,'+gx+','+gy,'H,'+gx+','+(gy+1)]) if(game.walls.has(wk)) damageWall(wk,9999); }
    tr.smoke=(tr.smoke||0)-dt;                                                                          // SMOKE: long-lived puffs from the smokestack that drift, rise, and fade out over ~15s
    if(tr.smoke<=0){ tr.smoke=0.28; const lx=tr.x+Math.cos(tr.ang)*16, ly=tr.y+Math.sin(tr.ang)*16;
      game.particles.push({x:lx,y:ly, vx:rand(-7,7)+(game.wind||0)*5, vy:-rand(6,16), life:rand(11,15), max:15, color:'rgba(74,74,80,0.5)', r:rand(5,10)});
      game.particles.push({x:lx,y:ly, vx:rand(-4,4), vy:-rand(4,10), life:rand(8,12), max:12, color:'rgba(40,40,46,0.45)', r:rand(3,6)}); } }
}
function drawTrains(){ if(!game.trains) return;
  for(const tr of game.trains){ if(!inView(tr.x,tr.y,140)) continue; const s=worldToScreen(tr.x,tr.y);
    ctx.save(); ctx.translate(s.x,s.y); ctx.rotate(tr.ang);
    ctx.fillStyle='rgba(0,0,0,.32)'; fillRR(-118,-15,150,30,6,ctx.fillStyle);                          // long shadow under the whole train
    for(let c=1;c<=2;c++){ const off=-c*44; ctx.fillStyle=vgrad(0,-14,0,28,'#5a4a36','#39301f'); fillRR(off-19,-14,38,28,4,ctx.fillStyle);   // freight cars
      ctx.fillStyle='rgba(255,255,255,.10)'; fillRR(off-19,-14,38,5,3,ctx.fillStyle); ctx.fillStyle='#23211c'; ctx.fillRect(off-19,9,38,3); }
    ctx.fillStyle=vgrad(0,-15,0,30,'#3a4048','#1c2026'); fillRR(-22,-15,46,30,5,ctx.fillStyle);         // locomotive body
    ctx.fillStyle='rgba(255,255,255,.12)'; fillRR(-22,-15,46,6,3,ctx.fillStyle);
    ctx.fillStyle='#11151a'; fillRR(2,-10,16,20,3,'#11151a');                                           // cab
    ctx.fillStyle='#ffe9a3'; ctx.shadowColor='#ffe9a3'; ctx.shadowBlur=6; ctx.beginPath(); ctx.arc(24,0,3.4,0,TAU); ctx.fill(); ctx.shadowBlur=0;   // headlight
    ctx.fillStyle='#1c2026'; ctx.fillRect(20,-13,6,26);                                                 // pilot/cowcatcher front
    ctx.restore(); }
}
/* ---- railroad crossings: where a dirt road meets a rail, a crossing guard with flashing lights + boom gates that drop when a train is near ---- */
function segXpt(ax,ay,bx,by,cx,cy,dx,dy){ const r1=bx-ax,r2=by-ay,s1=dx-cx,s2=dy-cy,den=r1*s2-r2*s1; if(Math.abs(den)<1e-9) return null; const tt=((cx-ax)*s2-(cy-ay)*s1)/den,uu=((cx-ax)*r2-(cy-ay)*r1)/den; if(tt<0||tt>1||uu<0||uu>1) return null; return {x:ax+r1*tt,y:ay+r2*tt}; }
function buildCrossings(){ game.crossings=[]; if(!game.rails||!game.paths) return;
  for(const rl of game.rails){ const rp=rl.pts; for(const pth of game.paths){ const pp=pth.pts;
    for(let i=0;i<rp.length-1;i++) for(let j=0;j<pp.length-1;j++){ const p=segXpt(rp[i].x,rp[i].y,rp[i+1].x,rp[i+1].y, pp[j].x,pp[j].y,pp[j+1].x,pp[j+1].y);
      if(p){ p.railAng=Math.atan2(rp[i+1].y-rp[i].y, rp[i+1].x-rp[i].x); p.gate=0; p.active=false; game.crossings.push(p); } } } } }
function updateCrossings(dt){ if(!game.crossings) return;
  for(const c of game.crossings){ c.active = !!(game.trains && game.trains.some(tr=>dist2(tr.x,tr.y,c.x,c.y)<820*820));   // a train within ~820px -> warn
    c.gate += ((c.active?1:0)-(c.gate||0))*Math.min(1,dt*3); } }                                          // boom lowers/raises smoothly
function drawCrossings(){ if(!game.crossings) return; const blink=Math.sin(game.t*10)>0;
  for(const c of game.crossings){ if(!inView(c.x,c.y,120)) continue; const s=worldToScreen(c.x,c.y);
    ctx.save(); ctx.translate(s.x,s.y); ctx.rotate(c.railAng);                                            // local frame: +x along the rail, posts straddle the track bed
    for(const side of [-1,1]){ ctx.save(); ctx.translate(0, side*38);
      const raise=(1-(c.gate||0))*(Math.PI*0.46), baseA=side>0?Math.PI:0;                                 // BOOM GATE: down/across when a train's near, raised ~80° when clear
      ctx.save(); ctx.rotate(baseA + side*raise);
      ctx.fillStyle='#15151a'; ctx.fillRect(0,-2,40,4);
      for(let k=0;k<4;k++){ ctx.fillStyle=k%2?'#ec2b22':'#f0f0f0'; ctx.fillRect(2+k*9.2,-2.4,8,4.8); }     // red/white striped boom
      ctx.restore();
      ctx.fillStyle='rgba(0,0,0,.3)'; ctx.beginPath(); ctx.ellipse(0,3,7,3,0,0,TAU); ctx.fill();
      ctx.fillStyle='#26262b'; fillRR(-3,-4,6,13,1.5,'#26262b');                                          // guard post
      const onL=(c.active&&blink), onR=(c.active&&!blink);
      ctx.fillStyle=onL?'#ff3a2a':'#521616'; if(onL){ctx.shadowColor='#ff3a2a';ctx.shadowBlur=7;} ctx.beginPath(); ctx.arc(-4.5,-7,2.7,0,TAU); ctx.fill(); ctx.shadowBlur=0;
      ctx.fillStyle=onR?'#ff3a2a':'#521616'; if(onR){ctx.shadowColor='#ff3a2a';ctx.shadowBlur=7;} ctx.beginPath(); ctx.arc(4.5,-7,2.7,0,TAU); ctx.fill(); ctx.shadowBlur=0;
      ctx.restore(); }
    ctx.restore(); }
}
/* ---- armored convoy: a turret-truck + 4 escort guards roll the convoy road end-to-end every 3-5 min; wreck it for rich loot (metal/scrap/ammo/satchels/rockets) ---- */
const CONVOY={ vhp:1100, ghp:80, speed:120, trange:560, tdmg:13, trof:0.34, gdmg:9, grof:0.5, grange:440, gspeed:120, leash:300, bspeed:1300 };
function spawnConvoy(){ if(!game.convoyRoad) return; const road=game.convoyRoad;
  const pts=(Math.random()<0.5)?road.pts.slice():road.pts.slice().reverse();
  const c={ pts, seg:0, x:pts[0].x, y:pts[0].y, px:pts[0].x, py:pts[0].y, ang:0, taim:0, speed:CONVOY.speed, hp:CONVOY.vhp, max:CONVOY.vhp, gunCd:0, dead:false, guards:[] };
  for(const o of [[-46,28],[-46,-28],[50,30],[50,-30]]) c.guards.push({ ox:o[0], oy:o[1], x:c.x, y:c.y, hp:CONVOY.ghp, max:CONVOY.ghp, angle:0, gunCd:rand(0,0.6), dead:false });   // 2 ahead, 2 behind, flanking
  game.convoys.push(c); }
function convoyTarget(cx,cy){ let tgt=null, bd=CONVOY.trange*CONVOY.trange;                   // nearest intruder (player OR any bot) with a clear shot — the convoy is hostile to everyone
  if(!player.dead && !player.inCopter && !game.ghost){ const d=dist2(cx,cy,player.x,player.y); if(d<bd && !wallBlocksView(cx,cy,player.x,player.y) && !boulderLine(cx,cy,player.x,player.y)){ bd=d; tgt=player; } }
  for(const e of game.enemies){ if(e.dead||e.eliminated||e.flying) continue; const d=dist2(cx,cy,e.x,e.y); if(d<bd && !wallBlocksView(cx,cy,e.x,e.y) && !boulderLine(cx,cy,e.x,e.y)){ bd=d; tgt=e; } }
  return tgt; }
function updateConvoys(dt){ if(!game.convoys) game.convoys=[];
  if(game.convoyT===undefined) game.convoyT=rand(120,200);                                    // first convoy ~2-3 min in
  game.convoyT-=dt;
  if(game.convoyT<=0 && game.convoyRoad && !game.convoys.length){ spawnConvoy(); game.convoyT=rand(180,300); }   // one at a time, every 3-5 min
  for(let i=game.convoys.length-1;i>=0;i--){ const c=game.convoys[i];
    c.px=c.x; c.py=c.y; let move=c.speed*dt;                                                  // advance the truck along its single road path
    while(move>0 && c.seg<c.pts.length-1){ const nx=c.pts[c.seg+1], dx=nx.x-c.x, dy=nx.y-c.y, dl=Math.hypot(dx,dy)||1;
      if(dl<=move){ c.x=nx.x; c.y=nx.y; move-=dl; c.seg++; } else { c.x+=dx/dl*move; c.y+=dy/dl*move; c.ang=Math.atan2(dy,dx); move=0; } }
    if(c.seg>=c.pts.length-1){ game.convoys.splice(i,1); continue; }                           // reached the far edge -> gone (escaped with its loot)
    c.gunCd-=dt; const tgt=convoyTarget(c.x,c.y);                                              // MOUNTED TURRET RIFLE
    if(tgt){ const want=Math.atan2(tgt.y-c.y,tgt.x-c.x); c.taim=want;
      if(c.gunCd<=0){ c.gunCd=CONVOY.trof; const a=want+rand(-0.04,0.04), bx=c.x+Math.cos(a)*30, by=c.y+Math.sin(a)*30;
        game.bullets.push({x:bx,y:by,px:bx,py:by,vx:Math.cos(a)*CONVOY.bspeed,vy:Math.sin(a)*CONVOY.bspeed,life:0.6,dmg:CONVOY.tdmg,from:'convoy',enemy:true}); burst(bx,by,COL.flash,2,90); } }
    else c.taim=c.ang;
    for(const g of c.guards){ if(g.dead) continue; g.gunCd-=dt;                                // ESCORT GUARDS: hold formation alongside the truck, break to engage threats, never stray past the leash
      const fx=c.x+Math.cos(c.ang)*g.ox-Math.sin(c.ang)*g.oy, fy=c.y+Math.sin(c.ang)*g.ox+Math.cos(c.ang)*g.oy;
      let gt=null, gbd=CONVOY.grange*CONVOY.grange;
      if(!player.dead && !player.inCopter && !game.ghost){ const d=dist2(g.x,g.y,player.x,player.y); if(d<gbd && !wallBlocksView(g.x,g.y,player.x,player.y) && !boulderLine(g.x,g.y,player.x,player.y)){ gbd=d; gt=player; } }
      for(const e of game.enemies){ if(e.dead||e.eliminated||e.flying) continue; const d=dist2(g.x,g.y,e.x,e.y); if(d<gbd && !wallBlocksView(g.x,g.y,e.x,e.y) && !boulderLine(g.x,g.y,e.x,e.y)){ gbd=d; gt=e; } }
      const tied = Math.hypot(g.x-c.x,g.y-c.y) > CONVOY.leash;
      if(gt && !tied){ const d=Math.sqrt(gbd)||1, want=Math.atan2(gt.y-g.y,gt.x-g.x); g.angle+=angDiff(g.angle,want)*Math.min(1,dt*9);
        if(d<CONVOY.grange && g.gunCd<=0 && Math.abs(angDiff(g.angle,want))<0.3){ g.gunCd=CONVOY.grof; const a=g.angle+rand(-0.06,0.06), bx=g.x+Math.cos(a)*14, by=g.y+Math.sin(a)*14;
          game.bullets.push({x:bx,y:by,px:bx,py:by,vx:Math.cos(a)*CONVOY.bspeed,vy:Math.sin(a)*CONVOY.bspeed,life:0.55,dmg:CONVOY.gdmg,from:'convoy',enemy:true}); burst(bx,by,COL.flash,2,80); }
        let mvx=0,mvy=0; if(d>260){ mvx=(gt.x-g.x)/d; mvy=(gt.y-g.y)/d; } else if(d<150){ mvx=-(gt.x-g.x)/d; mvy=-(gt.y-g.y)/d; }
        const nx=g.x+mvx*CONVOY.gspeed*dt, ny=g.y+mvy*CONVOY.gspeed*dt; if(typeof blocked!=='function'||!blocked(nx,ny,12)){ g.x=nx; g.y=ny; }
      } else { const dx=fx-g.x, dy=fy-g.y, dl=Math.hypot(dx,dy)||1; if(dl>4){ const sp=Math.min(dl,(c.speed+50)*dt); g.x+=dx/dl*sp; g.y+=dy/dl*sp; g.angle+=angDiff(g.angle,c.ang)*Math.min(1,dt*5); } } }
    if(c.hp<=0){ convoyDestroyed(c); game.convoys.splice(i,1); } }
}
function convoyDestroyed(c){ burst(c.x,c.y,COL.explosion,30,340); burst(c.x,c.y,'#ffe2a0',16,220); game.flashes.push({x:c.x,y:c.y,life:0.25,max:0.25,r:96}); if(inView(c.x,c.y,60)) game.shake=Math.max(game.shake,12); game.scorch.push({x:c.x,y:c.y,r:60}); if(game.scorch.length>36) game.scorch.shift();
  addLoot(c.x,c.y,'metal',randi(50,90)); addLoot(c.x,c.y,'scrap',randi(60,110)); addLoot(c.x,c.y,'ammo',randi(50,100)); addLoot(c.x,c.y,'rocket',randi(3,5)); addLoot(c.x,c.y,'satchel',randi(2,4));   // rich convoy haul
  for(const g of c.guards){ if(!g.dead) addLoot(g.x,g.y,'ammo',randi(8,16)); }
  addFloat(c.x,c.y-30,'convoy destroyed!','#ffd0a0'); }
function drawConvoyVehicle(c){ const s=worldToScreen(c.x,c.y); ctx.save(); ctx.translate(s.x,s.y);
  ctx.fillStyle='rgba(0,0,0,.32)'; ctx.beginPath(); ctx.ellipse(0,7,42,18,0,0,TAU); ctx.fill();
  ctx.save(); ctx.rotate(c.ang);
  ctx.fillStyle=vgrad(0,-18,0,36,'#5b6452','#373f2d'); fillRR(-34,-18,68,36,5,ctx.fillStyle);   // olive armored hull
  ctx.fillStyle='rgba(255,255,255,.08)'; fillRR(-34,-18,68,7,4,ctx.fillStyle);
  ctx.fillStyle='#23271d'; ctx.fillRect(-34,-20,68,3.4); ctx.fillRect(-34,16.6,68,3.4);          // tread bands
  ctx.fillStyle='#2c3326'; fillRR(15,-13,15,26,3,'#2c3326'); ctx.restore();                       // cab
  ctx.save(); ctx.rotate(c.taim||c.ang); ctx.fillStyle='#3a4233'; ctx.beginPath(); ctx.arc(0,0,11,0,TAU); ctx.fill();
  ctx.fillStyle='#15180f'; ctx.fillRect(0,-2.6,32,5.2); ctx.restore();                             // turret + rifle barrel
  const f=clamp(c.hp/c.max,0,1); if(f<1){ ctx.fillStyle='rgba(0,0,0,.55)'; ctx.fillRect(-28,-31,56,5); ctx.fillStyle=f>0.5?'#86c861':f>0.25?'#e0b24a':'#d2664a'; ctx.fillRect(-28,-31,56*f,5); }
  ctx.restore(); }
function drawConvoyGuard(g){ const s=worldToScreen(g.x,g.y); ctx.save(); ctx.translate(s.x,s.y);
  ctx.fillStyle='rgba(0,0,0,.3)'; ctx.beginPath(); ctx.ellipse(0,3,7,3,0,0,TAU); ctx.fill(); ctx.rotate(g.angle);
  ctx.fillStyle='#15180f'; ctx.fillRect(2,-1.6,16,3.2);                                            // rifle
  ctx.fillStyle='#6f7a4e'; ctx.beginPath(); ctx.arc(0,0,7,0,TAU); ctx.fill();                       // olive body
  ctx.fillStyle='#39402c'; ctx.beginPath(); ctx.arc(0,0,4.4,0,TAU); ctx.fill(); ctx.restore();      // helmet
  const f=clamp(g.hp/g.max,0,1); if(f<1){ ctx.fillStyle='rgba(0,0,0,.5)'; ctx.fillRect(s.x-9,s.y-13,18,3); ctx.fillStyle='#cdd6c4'; ctx.fillRect(s.x-9,s.y-13,18*f,3); } }
/* ---- fireflies: harmless glowing motes that wander the JUNGLE biome; glow always, brighter at night + in fog ---- */
function buildFireflies(){ game.fireflies=[]; const x0=WORLD.w/3, x1=2*WORLD.w/3, N=randi(16,28);
  for(let i=0;i<N;i++) game.fireflies.push({ x:rand(x0+40,x1-40), y:rand(60,WORLD.h-60), vx:rand(-28,28), vy:rand(-28,28), ph:rand(0,TAU), fs:rand(2.5,4.5), turn:rand(0,1.6) }); }
function updateFireflies(dt){ if(!game.fireflies) buildFireflies(); const x0=WORLD.w/3, x1=2*WORLD.w/3;
  for(const f of game.fireflies){ f.turn-=dt; if(f.turn<=0){ f.turn=rand(0.5,1.7); const a=rand(0,TAU), s=rand(14,40); f.vx=Math.cos(a)*s; f.vy=Math.sin(a)*s; }   // gentle random wander
    f.x+=f.vx*dt; f.y+=f.vy*dt;
    if(f.x<x0+20) f.vx=Math.abs(f.vx); else if(f.x>x1-20) f.vx=-Math.abs(f.vx);                            // stay within the jungle band
    f.y=clamp(f.y,40,WORLD.h-40); f.ph+=dt*f.fs; } }
function drawFireflies(){ if(!game.fireflies) return; const W=game.weather, night=1-lightLevel(), fog=(W&&W.fog)||0;
  const boost=0.45 + 0.4*night + 0.45*Math.min(1,fog);                                                     // GLOW at all times; brighter at NIGHT and in FOG
  ctx.save(); ctx.globalCompositeOperation='lighter';
  for(const f of game.fireflies){ if(!inView(f.x,f.y,14)) continue;
    if(typeof biomeAt==='function' && biomeAt(f.x,f.y)!=='jungle') continue;                               // only glow inside the jungle
    const a=clamp(boost*(0.6+0.4*Math.sin(f.ph)),0,1);
    const g=ctx.createRadialGradient(f.x,f.y,0,f.x,f.y,7); g.addColorStop(0,'rgba(216,255,134,'+(0.9*a).toFixed(3)+')'); g.addColorStop(1,'rgba(150,220,90,0)');
    ctx.fillStyle=g; ctx.beginPath(); ctx.arc(f.x,f.y,7,0,TAU); ctx.fill();
    ctx.fillStyle='rgba(240,255,205,'+a.toFixed(3)+')'; ctx.beginPath(); ctx.arc(f.x,f.y,1.4,0,TAU); ctx.fill(); }
  ctx.restore(); }
/* ---- jungle birds: REMOVED (R33) ---- */
/* ---- footprints: every walker leaves faint tracks on the ground that fade out over 10s ---- */
function updateFootprints(dt){ if(!game.footprints) game.footprints=[]; const FP=game.footprints;
  for(let i=FP.length-1;i>=0;i--){ if((FP[i].t+=dt)>=10) FP.splice(i,1); }                              // fade out after 10s
  const leave=(o)=>{ if(o.dead||o.eliminated||o.flying||o.inCopter) return;
    const dx=o.x-(o._fpx!==undefined?o._fpx:o.x), dy=o.y-(o._fpy!==undefined?o._fpy:o.y), dl=Math.hypot(dx,dy);
    o._fpx=o.x; o._fpy=o.y; o._fpAcc=(o._fpAcc||0)+dl;
    if(o._fpAcc>=30 && dl>0.01 && (typeof inView!=='function'||inView(o.x,o.y,60))){                     // a print every ~30px walked, only near the camera -> bounded count
      o._fpAcc=0; o._fpSide=o._fpSide?0:1; const a=Math.atan2(dy,dx), s=(o._fpSide?1:-1)*5;
      FP.push({x:o.x-Math.sin(a)*s, y:o.y+Math.cos(a)*s, a, t:0}); if(FP.length>700) FP.shift(); } };
  if(!player.dead && !player.inCopter) leave(player);
  if(game.enemies) for(const e of game.enemies) leave(e); }
function drawFootprints(){ const FP=game.footprints; if(!FP||!FP.length) return;
  for(const f of FP){ if(!inView(f.x,f.y,16)) continue; const a=(1-f.t/10)*0.28;
    ctx.save(); ctx.translate(f.x,f.y); ctx.rotate(f.a); ctx.fillStyle='rgba(28,22,14,'+a.toFixed(3)+')';
    ctx.beginPath(); ctx.ellipse(0,0,4.4,2.5,0,0,TAU); ctx.fill(); ctx.restore(); } }
function drawWorld(){
  drawGround(); drawLakes(); drawMonuments(); drawScorch(); drawCloudShadows();
  if(game.rocks) for(const o of game.rocks){ if(inView(o.x,o.y,24)) drawSmallRock(o); }     // small rocks = flat ground decor (under everything; walkable)
  drawFlora();                                                                             // jungle flowers/ferns/shrubs (ground decor)
  drawFootprints();                                                                        // fading walk tracks on the ground (under units/structures)
  for(const [k,st] of game.structures){ const [gx,gy]=k.split(',').map(Number); if(!inView(gx*TILE,gy*TILE,TILE)) continue;
    if(st.type==='floor') drawFloor(gx,gy,st.mat); else if(st.type==='trifloor') drawTriFloor(gx,gy,st.mat,st.rot); }
  drawLoot();
  const draw=[];
  if(game.boulders) for(const b of game.boulders){ if(inView(b.x,b.y,b.r+20)) draw.push({y:b.y+b.r*0.5,f:()=>drawBoulder(b)}); }   // boulders y-sorted (walk behind them)
  if(game.palms) for(const pp of game.palms){ if(inView(pp.x,pp.y,60)) draw.push({y:pp.y,f:()=>drawPalm(pp)}); }   // palms on the jungle shoreline
  for(const oo of game.resources){ if(oo.amount<=0||!inView(oo.x,oo.y,60)) continue;
    if(oo.type==='tree') draw.push({y:oo.y,f:()=>drawTree(oo)}); else draw.push({y:oo.y,f:()=>drawRock(oo,oo.type==='metal')}); }
  for(const oo of game.barrels){ if(oo.hp>0&&inView(oo.x,oo.y,40)) draw.push({y:oo.y,f:()=>drawBarrel(oo)}); }
  for(const f of game.fences){ if(f.hp>0&&inView(f.x,f.y,48)) draw.push({y:f.y,f:()=>drawFence(f)}); }
  for(const oo of game.dummies){ if(oo.hp>0&&inView(oo.x,oo.y,40)) draw.push({y:oo.y,f:()=>drawDummy(oo)}); }
  for(const a of game.animals){ if(a.hp>0&&inView(a.x,a.y,46)) draw.push({y:a.y,f:()=>drawAnimal(a)}); }
  if(game.guards) for(const g of game.guards){ if(!g.dead&&inView(g.x,g.y,40)) draw.push({y:g.y,f:()=>drawGuard(g)}); }   // monument guards
  if(game.convoys) for(const c of game.convoys){ if(inView(c.x,c.y,90)) draw.push({y:c.y, f:()=>drawConvoyVehicle(c)}); for(const g of c.guards){ if(!g.dead&&inView(g.x,g.y,30)) draw.push({y:g.y, f:()=>drawConvoyGuard(g)}); } }   // armored convoy + escorts
  for(const [k,d] of game.deploys){ const [gx,gy]=k.split(',').map(Number); if(!inView(gx*TILE,gy*TILE,TILE)) continue;
    draw.push({y:gy*TILE+TILE, f:()=> d.type==='turret'?drawTurret(gx,gy,d): d.type==='cupboard'?drawCupboard(gx,gy,d): drawBox(gx,gy,d)}); }
  for(const [k,w] of game.walls){ const sg=wallSegOf(k,w), mx=(sg[0]+sg[2])/2, my=(sg[1]+sg[3])/2;
    if(inView(mx,my,TILE)) draw.push({y:Math.max(sg[1],sg[3]), f:()=>drawWall(k,w)}); }
  if(game.shop && inView(game.shop.x,game.shop.y,80)) draw.push({y:game.shop.y+game.shop.r, f:drawShop});
  if(!player.inCopter) draw.push({y:player.y, f:drawPlayer});
  draw.sort((a,b)=>a.y-b.y); for(const d of draw) d.f();
  drawLaserSight();
  drawFires(); drawWrecks(); drawSatchels(); drawGrenades();
  if(typeof drawEnemies==='function') drawEnemies();
  if(game.debugPaths && typeof drawDebugPaths==='function') drawDebugPaths();   // overlay each unit's route + action when the Debug button is on
  drawCopter(); drawBullets(); drawRockets(); drawMuzzle(); drawAirdrop(); drawParticles(); drawFlashes(); drawFloats();
  drawFog(); drawTrains(); drawClouds(); drawFireflies();
}
function drawOcean(v){ const x0=v.x0-120,y0=v.y0-120,x1=v.x1+120,y1=v.y1+120;
  const g=ctx.createLinearGradient(0,y0,0,y1); g.addColorStop(0,'#15435a'); g.addColorStop(1,'#0e2c3c'); ctx.fillStyle=g; ctx.fillRect(x0,y0,x1-x0,y1-y0);
  if(game.zoom>0.5){ ctx.strokeStyle='rgba(150,205,230,0.10)'; ctx.lineWidth=2.5; ctx.lineCap='round'; ctx.beginPath();   // drifting wave glints (skip when zoomed far out)
    const drift=(game.t*16);
    for(let yy=Math.floor(y0/64)*64; yy<y1; yy+=64){ const ph=Math.sin(yy*0.05+game.t*0.6)*28, base=((drift+yy*0.7)%170);
      for(let xx=Math.floor(x0/170)*170-170; xx<x1; xx+=170){ const wx=xx+base+ph; ctx.moveTo(wx,yy); ctx.lineTo(wx+46,yy); } }
    ctx.stroke(); ctx.lineCap='butt'; } }
function islandPathOf(scale){ const pts=[], n=ISLAND.N, s=scale||1; for(let i=0;i<n;i++){ const ang=i/n*TAU, R=ISLAND.rad[i]*s;
  pts.push([ISLAND.cx+Math.cos(ang)*ISLAND.rx*R, ISLAND.cy+Math.sin(ang)*ISLAND.ry*R]); } return pts; }
function drawShore(){ if(!ISLAND) return;                                     // beach band hugging the irregular coast (icy in the winter biome) — drawn clipped to land, so only the inner half shows
  const ip=islandPathOf(1), n=ip.length; ctx.lineCap='round'; ctx.lineJoin='round'; ctx.lineWidth=120;
  for(let i=0;i<n;i++){ const a=ip[i], b=ip[(i+1)%n], mx=(a[0]+b[0])/2, my=(a[1]+b[1])/2;
    ctx.strokeStyle = biomeAt(mx,my)==='winter' ? 'rgba(216,233,243,0.95)' : 'rgba(214,194,148,0.95)';
    ctx.beginPath(); ctx.moveTo(a[0],a[1]); ctx.lineTo(b[0],b[1]); ctx.stroke(); }
  ctx.lineWidth=2.5; ctx.strokeStyle='rgba(245,250,255,0.5)'; ctx.beginPath();   // foam line at the waterline
  ctx.moveTo(ip[0][0],ip[0][1]); for(let i=1;i<n;i++) ctx.lineTo(ip[i][0],ip[i][1]); ctx.closePath(); ctx.stroke();
  ctx.lineCap='butt'; }
function lakePath(L,scale){ const W=L.wob||[1], n=W.length, s=scale||1; ctx.beginPath();
  for(let i=0;i<=n;i++){ const ang=(i%n)/n*TAU, R=L.r*W[i%n]*s, x=L.x+Math.cos(ang)*R, y=L.y+Math.sin(ang)*R*0.84; if(i===0) ctx.moveTo(x,y); else ctx.lineTo(x,y); }
  ctx.closePath(); }
function drawLakes(){ if(!game.lakes) return; for(const L of game.lakes){ if(!inView(L.x,L.y,L.r+50)) continue;
  if(L.frozen){
    lakePath(L,1.07); ctx.fillStyle='rgba(238,246,251,0.95)'; ctx.fill();                               // snowy bank
    lakePath(L,1.0); ctx.fillStyle=rgrad(L.x,L.y-L.r*0.35,L.r*1.1,'#e4eff6','#9fbdd2'); ctx.fill();      // ice sheet
    ctx.save(); lakePath(L,1.0); ctx.clip();
    ctx.fillStyle='rgba(255,255,255,0.28)'; ctx.beginPath(); ctx.ellipse(L.x-L.r*0.3,L.y-L.r*0.3,L.r*0.34,L.r*0.18,-0.5,0,TAU); ctx.fill();   // sheen (the flickering 'electricity' crack lines were removed; the sparkle below stays)
    for(let i=0;i<9;i++){ const sx=L.x+(hash(L.seed+i*3,i)*2-1)*L.r*0.82, sy=L.y+(hash(i,L.seed+i*2)*2-1)*L.r*0.66, tw=Math.sin(game.t*1.6+i*1.7+L.seed*3);   // subtle frozen-ice sparkle (gentle twinkle, like the metal-ore glints)
      if(tw>0.62){ ctx.globalAlpha=(tw-0.62)*0.95; ctx.fillStyle='#ffffff'; ctx.beginPath(); ctx.arc(sx,sy,1.5,0,TAU); ctx.fill();
        ctx.globalAlpha=(tw-0.62)*0.45; ctx.beginPath(); ctx.arc(sx,sy,3.4,0,TAU); ctx.fill(); } }
    ctx.globalAlpha=1;
    ctx.restore();
  } else {
    lakePath(L,1.06); ctx.fillStyle='rgba(120,150,86,0.7)'; ctx.fill();                                  // mossy/muddy bank
    lakePath(L,1.0); ctx.fillStyle=rgrad(L.x,L.y-L.r*0.3,L.r*1.05,'#3f7f96','#0f2f3e'); ctx.fill();       // shallow->deep water
    ctx.save(); lakePath(L,1.0); ctx.clip();
    ctx.fillStyle='rgba(210,238,248,0.16)'; ctx.beginPath(); ctx.ellipse(L.x-L.r*0.32,L.y-L.r*0.3,L.r*0.32,L.r*0.16,-0.5,0,TAU); ctx.fill();   // static sky reflection (animated surface shimmer removed)
    for(const p of (L.pads||[])){ const px=L.x+Math.cos(p.a)*L.r*p.rr, py=L.y+Math.sin(p.a)*L.r*p.rr*0.84;   // lily pads
      ctx.fillStyle='#4a8a44'; ctx.beginPath(); ctx.ellipse(px,py,p.s,p.s*0.8,p.a,0,TAU); ctx.fill();
      ctx.fillStyle='#3a6f36'; ctx.beginPath(); ctx.moveTo(px,py); ctx.arc(px,py,p.s,p.a+0.4,p.a+0.4+0.7); ctx.closePath(); ctx.fill(); }
    ctx.restore();
  } } }
function drawPalm(p){ const s=worldToScreen(p.x,p.y), sw=Math.sin(game.t*1.3+p.seed)*3, dry=p.desert;
  shadow(s.x+5,s.y+7,16);
  ctx.strokeStyle=dry?'#a4824e':'#7a5a30'; ctx.lineWidth=5; ctx.lineCap='round'; ctx.beginPath(); ctx.moveTo(s.x,s.y); ctx.quadraticCurveTo(s.x+sw*0.6,s.y-22,s.x+sw,s.y-40); ctx.stroke();   // curved trunk (drier = paler/tan)
  const hx=s.x+sw, hy=s.y-42; ctx.strokeStyle=dry?'#9a953f':'#3f7a34'; ctx.lineWidth=4; ctx.lineCap='round';   // desert palm = sun-bleached khaki, droopier fronds
  const nf=dry?5:6;
  for(let k=0;k<nf;k++){ const a=k/nf*TAU + p.seed; ctx.beginPath(); ctx.moveTo(hx,hy); ctx.quadraticCurveTo(hx+Math.cos(a)*16, hy+Math.sin(a)*10+(dry?9:-4), hx+Math.cos(a)*30, hy+Math.sin(a)*20+(dry?13:4)); ctx.stroke(); }
  ctx.fillStyle=dry?'#b08a3c':'#caa24a'; ctx.beginPath(); ctx.arc(hx,hy,3.2,0,TAU); ctx.fill(); ctx.lineCap='butt'; }
function buildPalms(){ game.palms=[]; if(!ISLAND) return; const n=ISLAND.N;
  for(let i=0;i<n;i+=2){ const ang=i/n*TAU, R=ISLAND.rad[i]*0.93, x=ISLAND.cx+Math.cos(ang)*ISLAND.rx*R, y=ISLAND.cy+Math.sin(ang)*ISLAND.ry*R;
    if(biomeAt(x,y)!=='jungle' || rand(0,1)>0.34) continue; game.palms.push({x,y,seed:rand(0,9)}); }
  const dn=randi(10,16);                                                                       // dry desert palms scattered through the desert band (distinct from the lush jungle palms)
  for(let i=0;i<dn;i++){ const x=rand(40,WORLD.w/3-20), y=rand(80,WORLD.h-80);
    if(biomeAt(x,y)!=='desert' || (typeof onLand==='function'&&!onLand(x,y)) || (typeof lakeAt==='function'&&lakeAt(x,y))) continue;
    game.palms.push({x,y,seed:rand(0,9),desert:true}); } }
function drawAirdrop(){            // world-space: the cargo plane overhead + the parachuting / landed supply crate
  const a=game.airdrop;
  if(a && inView(a.x,a.y,140)){
    if(a.fall<1){ const sway=Math.sin(a.sway)*12;                               // parachute + dangling crate, swaying as it falls
      ctx.save(); ctx.translate(a.x+sway,a.y);
      ctx.fillStyle='#cf4a44'; ctx.beginPath(); ctx.moveTo(-30,-34); ctx.quadraticCurveTo(0,-66,30,-34); ctx.quadraticCurveTo(0,-24,-30,-34); ctx.fill();   // canopy
      ctx.fillStyle='#b23d38'; ctx.beginPath(); ctx.moveTo(-30,-34); ctx.quadraticCurveTo(-15,-29,0,-30); ctx.quadraticCurveTo(-9,-46,-30,-34); ctx.fill();  // shade
      ctx.strokeStyle='rgba(245,245,245,.7)'; ctx.lineWidth=1.2; ctx.beginPath(); ctx.moveTo(-26,-33); ctx.lineTo(-9,-6); ctx.moveTo(26,-33); ctx.lineTo(9,-6); ctx.moveTo(0,-28); ctx.lineTo(0,-8); ctx.stroke();
      ctx.fillStyle='#9a7b3e'; fillRR(-13,-6,26,22,3,ctx.fillStyle); ctx.strokeStyle='#5e4a22'; ctx.lineWidth=2; ctx.strokeRect(-13,-6,26,22);
      ctx.strokeStyle='#e6c45e'; ctx.lineWidth=2; ctx.beginPath(); ctx.moveTo(-13,5); ctx.lineTo(13,5); ctx.moveTo(0,-6); ctx.lineTo(0,16); ctx.stroke();
      ctx.restore();
    } else { shadow(a.x,a.y+12,17);                                             // landed crate — shoot it to spill the loot
      ctx.save(); ctx.translate(a.x,a.y);
      ctx.fillStyle='#9a7b3e'; fillRR(-17,-15,34,30,4,ctx.fillStyle); ctx.strokeStyle='#5e4a22'; ctx.lineWidth=2.5; ctx.strokeRect(-17,-15,34,30);
      ctx.strokeStyle='#e6c45e'; ctx.lineWidth=2.5; ctx.beginPath(); ctx.moveTo(-17,0); ctx.lineTo(17,0); ctx.moveTo(0,-15); ctx.lineTo(0,15); ctx.stroke();
      ctx.fillStyle='#e6c45e'; ctx.font='bold 13px sans-serif'; ctx.textAlign='center'; ctx.fillText('✈',0,-19); ctx.textAlign='left';
      ctx.restore();
      const fr=Math.max(0,a.hp/a.max); if(fr<1){ ctx.fillStyle='rgba(0,0,0,.55)'; fillRR(a.x-19,a.y-30,38,4,2,ctx.fillStyle); ctx.fillStyle='#ff7a4a'; fillRR(a.x-19,a.y-30,38*fr,4,2,ctx.fillStyle); }
    } }
  const p=game.plane;
  if(p){ const dir=p.vx>0?1:-1;                                                 // C-130-ish cargo plane, high overhead
    ctx.save(); ctx.translate(p.x,p.y-150); ctx.scale(dir,1);
    ctx.fillStyle='#8b949d'; fillRR(-50,-10,100,20,9,ctx.fillStyle);
    ctx.beginPath(); ctx.moveTo(50,-8); ctx.lineTo(66,0); ctx.lineTo(50,8); ctx.closePath(); ctx.fill();          // nose
    ctx.fillStyle='#727b84'; ctx.beginPath(); ctx.moveTo(-12,-9); ctx.lineTo(20,-9); ctx.lineTo(4,-34); ctx.lineTo(-16,-34); ctx.closePath(); ctx.fill();   // wing
    ctx.beginPath(); ctx.moveTo(-50,-7); ctx.lineTo(-36,-7); ctx.lineTo(-44,-26); ctx.lineTo(-52,-26); ctx.closePath(); ctx.fill();    // tail fin
    ctx.fillStyle='#cfe0ee'; for(let i=-32;i<=24;i+=12){ ctx.beginPath(); ctx.arc(i,-1,2.3,0,TAU); ctx.fill(); }   // windows
    ctx.restore(); } }
function drawAirdropMarker(){     // screen-space: directional arrow / label guiding the player to the active airdrop
  const a=game.airdrop; if(!a) return; const tx=a.x, ty=(a.fall<1?a.gy:a.y);
  const sx=(tx-game.cam.cx)*game.zoom+VW/2, sy=(ty-game.cam.cy)*game.zoom+VH/2, m=54;
  if(sx>=m&&sx<=VW-m&&sy>=m&&sy<=VH-m){ ctx.save(); ctx.globalAlpha=0.9; ctx.fillStyle='#ffd25a'; ctx.font='bold 11px "Trebuchet MS",sans-serif'; ctx.textAlign='center';
    ctx.fillText('AIRDROP', sx, sy-34); ctx.restore(); ctx.textAlign='left'; return; }
  const cx=VW/2, cy=VH/2, ang=Math.atan2(sy-cy,sx-cx), ex=clamp(sx,m,VW-m), ey=clamp(sy,m,VH-m);
  ctx.save(); ctx.translate(ex,ey);
  ctx.fillStyle='rgba(255,210,90,.92)'; ctx.beginPath(); ctx.arc(0,0,15,0,TAU); ctx.fill();
  ctx.fillStyle='#3a2c0a'; ctx.font='bold 13px sans-serif'; ctx.textAlign='center'; ctx.fillText('✈',0,4);
  ctx.rotate(ang); ctx.fillStyle='#ffb24a'; ctx.beginPath(); ctx.moveTo(21,0); ctx.lineTo(9,-7); ctx.lineTo(9,7); ctx.closePath(); ctx.fill();
  ctx.restore(); ctx.textAlign='left'; }
function render(){
  ctx.fillStyle='#123445'; ctx.fillRect(0,0,VW,VH);                          // deep ocean backdrop (island)
  ctx.save();
  ctx.translate(VW/2,VH/2); ctx.scale(game.zoom,game.zoom); ctx.translate(-game.cam.cx,-game.cam.cy);
  const v=game._v=vrange();
  drawOcean(v);                                                             // animated water everywhere; land is drawn on top -> the map is an island
  ctx.save(); ctx.beginPath();                            // clip the land to the irregular island shape (ocean shows through outside)
  if(ISLAND){ const ip=islandPathOf(1); ctx.moveTo(ip[0][0],ip[0][1]); for(let i=1;i<ip.length;i++) ctx.lineTo(ip[i][0],ip[i][1]); ctx.closePath(); }
  else ctx.rect(0,0,WORLD.w,WORLD.h);
  ctx.clip();
  const foot = !player.inCopter && !game.godView;
  drawWorld();                                            // draw the world (always fully visible — no fog/LOS mask)
  drawShore();                                            // beach band hugging the coastline (icy in winter)
  drawBuildOverlay();
  drawHoverHp();
  ctx.restore();
  ctx.restore();
  const dark=1-lightLevel();
  // FOG OF WAR + line-of-sight vision REMOVED — the whole viewport is always fully visible (no radial darkness mask, no LOS occlusion). Only a flat day/night tint remains (cosmetic).
  if(foot){                                                                                // RANGE RINGS only: green = your Tool Cupboard's claim radius (always shown); a faint turret firing range shows ONLY for the turret under the cursor.
    ctx.save(); ctx.lineWidth=2;
    for(const [k,d] of game.deploys){ if((d.owner||OWNER)!==OWNER || d.type!=='cupboard') continue; const [gx,gy]=k.split(',').map(Number);
      const bx=(gx*TILE+TILE/2-game.cam.cx)*game.zoom+VW/2, by=(gy*TILE+TILE/2-game.cam.cy)*game.zoom+VH/2;
      ctx.strokeStyle='rgba(126,200,80,0.34)'; ctx.setLineDash([11,9]); ctx.beginPath(); ctx.arc(bx,by,CLAIM_R*game.zoom,0,TAU); ctx.stroke(); }
    if(!game.store && !game.shopOpen){ const hw=screenToWorld(mouse.sx,mouse.sy), hd=game.deploys.get(gkey(Math.floor(hw.x/TILE),Math.floor(hw.y/TILE)));   // hover a turret -> show its firing range (faint)
      if(hd && hd.type==='turret'){ const tt=TTIER[hd.tier||1], hg=gkey(Math.floor(hw.x/TILE),Math.floor(hw.y/TILE)).split(',').map(Number);
        const bx=(hg[0]*TILE+TILE/2-game.cam.cx)*game.zoom+VW/2, by=(hg[1]*TILE+TILE/2-game.cam.cy)*game.zoom+VH/2;
        ctx.strokeStyle='rgba(240,156,72,0.16)'; ctx.setLineDash([6,7]); ctx.beginPath(); ctx.arc(bx,by,tt.range*game.zoom,0,TAU); ctx.stroke(); } }
    ctx.setLineDash([]); ctx.restore();
  }
  if(dark>0.03){ ctx.fillStyle='rgba(10,16,38,'+(dark*0.5)+')'; ctx.fillRect(0,0,VW,VH); }                // flat day/night tint (uniform — not a vision mask)
  { const vg=ctx.createRadialGradient(VW/2,VH/2,Math.min(VW,VH)*0.34,VW/2,VH/2,Math.max(VW,VH)*0.72);    // mild vignette
    vg.addColorStop(0,'rgba(0,0,0,0)'); vg.addColorStop(1,'rgba(0,0,0,'+(0.22+dark*0.2)+')');
    ctx.fillStyle=vg; ctx.fillRect(0,0,VW,VH); }
  drawWeather();
  if(game.godView) drawMapMarkers(); else drawReticle();
  drawBlasts(); drawAirdropMarker(); drawRaidAlarm();
  if(player.hurt>0){ ctx.fillStyle='rgba(150,28,18,'+(player.hurt*0.5)+')'; ctx.fillRect(0,0,VW,VH); }
  if(player.dead){ ctx.fillStyle='rgba(10,6,4,.55)'; ctx.fillRect(0,0,VW,VH);
    ctx.textAlign='center'; ctx.fillStyle='#e6d9b8'; ctx.font='bold 44px "Trebuchet MS",sans-serif';
    ctx.fillText('YOU DIED', VW/2, VH/2-4);
    ctx.fillStyle='#b9a06f'; ctx.font='15px "Trebuchet MS",sans-serif'; ctx.fillText('respawning…', VW/2, VH/2+24);
    ctx.textAlign='left'; }
  if(game.elims.length){ ctx.textAlign='left'; ctx.font='bold 14px "Trebuchet MS",sans-serif';   // elimination feed, top-left
    for(let i=0;i<game.elims.length;i++){ const e=game.elims[i]; ctx.globalAlpha=Math.min(1,e.t/3);
      ctx.fillStyle='rgba(0,0,0,.5)'; ctx.fillRect(14, 92+i*24, 232, 20);
      ctx.fillStyle='#e2664a'; ctx.fillText(e.text, 22, 106+i*24); }
    ctx.globalAlpha=1; }
}

