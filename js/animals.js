"use strict";
/* ------------------------------- animals -------------------------------- */
function damageAnimal(a,dmg,fromx,fromy){
  dmg=Math.round(dmg); if(dmg<=0) return;
  a.hp-=dmg; a.hit=0.12; a.aggro=true;
  const d=dist(a.x,a.y,fromx,fromy)||1, kb=Math.min(16,dmg*0.4);
  a.x+=(a.x-fromx)/d*kb; a.y+=(a.y-fromy)/d*kb;
  burst(a.x,a.y,COL.blood,6,150); addFloat(a.x,a.y-a.r-4,'-'+dmg,'#ff9c8a');
  if(a.hp<=0){ const def=ANIMALS[a.type]; burst(a.x,a.y,COL.blood,20,220);
    const n=randi(def.lootMin,def.lootMax); for(let i=0;i<n;i++) addLoot(a.x,a.y,def.lootKind,1);
    addFloat(a.x,a.y-a.r,def.name+' down','#c4d66a'); a.respawn=rand(11,18); }
}
function respawnAnimal(a){ const bm=ANIMALS[a.type].biome;
  const lo=bm==='jungle'?WORLD.w/3:bm==='winter'?2*WORLD.w/3:0, hi=bm==='desert'?WORLD.w/3:bm==='jungle'?2*WORLD.w/3:WORLD.w;
  for(let t=0;t<30;t++){ const x=rand((bm?lo:0)+90,(bm?hi:WORLD.w)-90), y=rand(90,WORLD.h-90);
    if(dist2(x,y,player.x,player.y)>520*520){ a.x=x; a.y=y; break; } }
  a.hp=a.max; a.aggro=false; a.atkcd=0; a._pauseT=0; a._foe=null; a.hit=0; a.dir=rand(0,TAU); a.wanderT=rand(0,2);
}
function damageDeploy(key,dmg){ const d=game.deploys.get(key); if(!d) return; d.hp-=dmg;
  const [gx,gy]=key.split(',').map(Number), cx=gx*TILE+TILE/2, cy=gy*TILE+TILE/2;
  if(d.hp<=0){ spillContainer(cx,cy,d); game.deploys.delete(key); burst(cx,cy, d.type==='turret'?'#9aa1a8':COL.boxLt,14,180); } else burst(cx,cy,'#cfd6cf',4,110); }
function nearestTurret(x,y,maxd){ let best=null,bd=maxd*maxd;
  for(const [k,s] of game.deploys){ if(s.type!=='turret'||s.hp<=0) continue;
    const [gx,gy]=k.split(',').map(Number), cx=gx*TILE+TILE/2, cy=gy*TILE+TILE/2, d=dist2(x,y,cx,cy);
    if(d<bd){ bd=d; best={x:cx,y:cy,k}; } }
  return best; }
function updateAnimals(dt){
  for(const a of game.animals){
    if(a.hit>0) a.hit-=dt;
    if(a.hp<=0){ if(a.respawn>0){ a.respawn-=dt; if(a.respawn<=0) respawnAnimal(a); } continue; }
    if(a.atkcd>0) a.atkcd-=dt;
    if(a._pauseT>0) a._pauseT-=dt;                                                         // post-attack recovery freeze ticking down
    const def=ANIMALS[a.type];
    const hidden=player.dead||player.inCopter||game.ghost||inSafeZone(player.x,player.y);   // pilot/dead/ghost/safe-zone: no aggro
    const dToP=dist(a.x,a.y,player.x,player.y);
    // pick a target: the player or the nearest bot (whoever's closer & in range), else the nearest turret
    let tx=null,ty=null,turretKey=null,botT=null;
    let bb=null,bbd=def.detect*def.detect; for(const e of game.enemies){ if(e.dead||e.flying||e.eliminated) continue; const dd=dist2(a.x,a.y,e.x,e.y); if(dd<bbd && !wallBlocksView(a.x,a.y,e.x,e.y)){ bbd=dd; bb=e; } }   // animals only notice a unit they can SEE (clear line of sight) -> they never chase anyone into a walled base
    const seeP = !hidden && dToP<def.detect && !wallBlocksView(a.x,a.y,player.x,player.y);
    if(seeP) a.aggro=true;
    if(a.aggro && seeP && dToP<=def.lose && (!bb || dToP*dToP<=bbd)){ tx=player.x; ty=player.y; }   // the player is closer & in sight
    else if(bb){ tx=bb.x; ty=bb.y; botT=bb; a.aggro=true; }                                            // a visible bot is closer -> hunt it
    else { a.aggro=false; const tt=nearestTurret(a.x,a.y,def.detect);
      if(tt){ tx=tt.x; ty=tt.y; turretKey=tt.k; a.aggro=true; } }
    let foeT=null;
    if(tx===null && (a.hostile || (a._foe && a._foe.hp>0))){                                  // no human/bot/turret target -> HOSTILE animals hunt other animals; a wounded animal DEFENDS against its attacker
      if(a._foe && a._foe.hp>0 && dist2(a.x,a.y,a._foe.x,a._foe.y) < (def.detect*1.4)*(def.detect*1.4)) foeT=a._foe;
      else { a._foe=null; if(a.hostile){ let bf=null,bfd=def.detect*def.detect; for(const o of game.animals){ if(o===a||o.hp<=0) continue; const dd=dist2(a.x,a.y,o.x,o.y); if(dd<bfd){ bfd=dd; bf=o; } } foeT=bf; } }
      if(foeT){ tx=foeT.x; ty=foeT.y; a.aggro=true; } }
    let dx=0,dy=0,sp=0;
    if(tx!==null){ dx=tx-a.x; dy=ty-a.y; const l=Math.hypot(dx,dy)||1; dx/=l; dy/=l; sp=def.chase; }
    else { a.wanderT-=dt; if(a.wanderT<=0){
        if(def.lake && a._lake){ const dl=dist(a.x,a.y,a._lake.x,a._lake.y);                  // alligators PREFER their lake: bask in the water, return if they drift out
          if(dl > a._lake.r*0.9) a.dir=Math.atan2(a._lake.y-a.y, a._lake.x-a.x);
          else a.dir = Math.random()<0.55 ? null : rand(0,TAU); }
        else a.dir = Math.random()<0.3?null:rand(0,TAU);
        a.wanderT=rand(1.2,3.2); }
      let bx=null,by=null,bdc=340*340; for(const [k,s] of game.deploys){ if(s.type!=='cupboard') continue; const c=k.indexOf(','),gxx=+k.slice(0,c),gyy=+k.slice(c+1),ccx=gxx*TILE+TILE/2,ccy=gyy*TILE+TILE/2,dd=dist2(a.x,a.y,ccx,ccy); if(dd<bdc){ bdc=dd; bx=ccx; by=ccy; } }
      if(bx!==null){ a.dir=Math.atan2(a.y-by,a.x-bx); a.wanderT=Math.max(a.wanderT,1.2); }   // a WANDERING animal near a base core -> steer AWAY (animals don't loiter in/around bases)
      if(a.dir!==null){ dx=Math.cos(a.dir); dy=Math.sin(a.dir); sp=def.walk; } }
    if(a._pauseT>0) sp=0;                                                                  // FROZEN briefly right after attacking — gives the target room to back off and shoot (animals out-run fleeing units otherwise)
    if(sp>0){ const step=sp*dt, nx=a.x+dx*step, ny=a.y+dy*step;
      if(!blocked(nx,a.y,a.r)) a.x=nx; else if(!a.aggro) a.dir=rand(0,TAU);
      if(!blocked(a.x,ny,a.r)) a.y=ny; else if(!a.aggro) a.dir=rand(0,TAU);
      a.x=clamp(a.x,a.r,WORLD.w-a.r); a.y=clamp(a.y,a.r,WORLD.h-a.r);
      a.vx=dx; a.vy=dy;
    } else { a.vx=0; a.vy=0; }
    // animals must never get STUCK on a base: an aggro animal that can't make progress gives up & wanders off; one boxed in on a foundation is relocated out
    if(tx!==null){ const moved=Math.hypot(a.x-(a._apx||a.x), a.y-(a._apy||a.y));
      if(moved < (sp*dt)*0.25){ a._stuckT=(a._stuckT||0)+dt;
        if(a._stuckT>1.5){ a.aggro=false; a.dir=rand(0,TAU); }                                        // can't reach the target -> stop chasing, wander away
        if(a._stuckT>3){ let walls=0; for(const [ddx,ddy] of [[1,0],[-1,0],[0,1],[0,-1]]) if(blocked(a.x+ddx*(a.r+6), a.y+ddy*(a.r+6), a.r)) walls++;
          if(walls>=4){ a._stuckT=0; respawnAnimal(a); } } }                                          // fully boxed in (a base foundation closed around it) -> remove/relocate the animal
      else a._stuckT=0; }
    a._apx=a.x; a._apy=a.y;
    if(tx!==null && a.atkcd<=0){ const d=dist(a.x,a.y,tx,ty);
      if(turretKey){ if(d < a.r+TILE*0.55){ damageDeploy(turretKey, def.dmg); a.atkcd=def.atk; a._pauseT=ANIM_PAUSE; burst(tx,ty,'#9aa1a8',4,120); } }
      else if(botT){ if(d < a.r+16 && typeof hurtBot==='function'){ hurtBot(botT, def.dmg, a.x, a.y); a.atkcd=def.atk; a._pauseT=ANIM_PAUSE; burst(botT.x,botT.y,COL.blood,4,120); } }   // maul a bot, then freeze briefly
      else if(foeT){ if(foeT.hp>0 && d < a.r+foeT.r+2){ damageAnimal(foeT, def.dmg, a.x, a.y); foeT._foe=a; a.atkcd=def.atk; a._pauseT=ANIM_PAUSE; } }   // bite another animal -> the victim now fights back (defends)
      else if(!hidden && d < a.r+PLAYER_R+2){ hurtPlayer(def.dmg,a.x,a.y); if(def.poison) player.poison=Math.max(player.poison||0,10); a.atkcd=def.atk; a._pauseT=ANIM_PAUSE; } }   // a scorpion sting POISONS the player (10s DoT)
  }
}

/* ------------------------------- player hp ------------------------------ */
function hurtPlayer(dmg,fromx,fromy){
  if(player.dead || player.invuln>0 || game.ghost || dmg<=0 || inSafeZone(player.x,player.y)) return;   // no damage inside the trade safe zone
  player.health-=dmg; player.hurt=0.28; player.regenDelay=4.5;
  const d=dist(player.x,player.y,fromx,fromy)||1; player.x+=(player.x-fromx)/d*7; player.y+=(player.y-fromy)/d*7;
  player.x=clamp(player.x,PLAYER_R,WORLD.w-PLAYER_R); player.y=clamp(player.y,PLAYER_R,WORLD.h-PLAYER_R);
  burst(player.x,player.y,COL.blood,6,140);
  if(player.health<=0){ player.health=0; playerDie(); }
}
function playerDie(){ player.dead=true; player.deadT=2.2; burst(player.x,player.y,COL.blood,28,240);
  game.deathMark={x:player.x, y:player.y};                              // remember where we died -> skull on the map
  if(typeof creditKill==='function' && player.lastHitBy) creditKill(player.lastHitBy); player.lastHitBy=null;
  for(const k of ['wood','stone','metal']){ if(game.inv[k]>0){ spillStack(player.x,player.y,k,game.inv[k]); game.inv[k]=0; } }   // drop carried resources
  let ammo=0; for(const key in WEAPONS){ const w=WEAPONS[key]; if(w===WEAPONS.rocket) continue; ammo+=(w.ammo|0)+(w.reserve|0); w.ammo=0; w.reserve=0; }   // drop gun ammo
  for(let i=0, piles=Math.min(8,Math.ceil(ammo/30)); i<piles && ammo>0; i++) addLoot(player.x,player.y,'ammo',Math.ceil(ammo/piles));
  const rk=(WEAPONS.rocket.ammo|0)+(WEAPONS.rocket.reserve|0); WEAPONS.rocket.ammo=0; WEAPONS.rocket.reserve=0;   // drop rockets
  for(let i=0;i<rk && i<12;i++) addLoot(player.x,player.y,'rocket',1); }
function playerCupboard(){ for(const [k,s] of game.deploys){ if(s.type==='cupboard' && s.owner===OWNER){ const [gx,gy]=k.split(',').map(Number); return {gx,gy,cx:gx*TILE+TILE/2,cy:gy*TILE+TILE/2}; } } return null; }
function respawnPlayer(){ player.dead=false; player.health=player.maxhp; player.hurt=0; player.regenDelay=0;
  player.invuln=1.8; player.inCopter=false;
  const tc=playerCupboard();
  if(tc){ player.x=clamp(tc.cx,PLAYER_R,WORLD.w-PLAYER_R); player.y=clamp(tc.cy,PLAYER_R,WORLD.h-PLAYER_R); }
  else {                                   // no base — random open spot on the map, away from the safe zone
    let rx=WORLD.w/2, ry=WORLD.h/2;
    for(let tries=0; tries<60; tries++){ const x=80+Math.random()*(WORLD.w-160), y=80+Math.random()*(WORLD.h-160);
      if(inSafeZone(x,y)) continue; if(blocked(x,y,PLAYER_R)) continue; rx=x; ry=y; break; }
    player.x=rx; player.y=ry;
  }
  if(game.copter && game.copter.destroyed){ game.copter.destroyed=false; game.copter.hp=game.copter.max;   // get a fresh minicopter
    game.copter.x=player.x+120; game.copter.y=player.y; game.copter.vx=0; game.copter.vy=0; game.copter.spd=0; }
  for(const a of game.animals){ a.aggro=false; if(dist2(a.x,a.y,player.x,player.y)<200*200){ a.x+=260; a.respawn=0.6; a.hp=0; } } }

