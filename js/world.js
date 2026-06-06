"use strict";
/* --------------------------- world generation --------------------------- */
function spawnNoOverlap(arr, r, margin){
  for(let tries=0; tries<40; tries++){
    const x = rand(margin, WORLD.w-margin), y = rand(margin, WORLD.h-margin);
    if(dist2(x,y,player.x,player.y) < (220*220)) continue;
    if(landFactor(x,y) < 0.05 || lakeAt(x,y)) continue;            // spawn on solid land only (off the beach, off lakes)
    let ok=true;
    for(const o of arr){ if(dist2(x,y,o.x,o.y) < (r+o.r+24)*(r+o.r+24)){ ok=false; break; } }
    if(ok) return {x,y};
  }
  return null;
}
function buildWorld(){
  const all=[];
  buildIsland();                                                   // irregular coastline first — everything spawns on land
  if(!onLand(player.x,player.y)){ player.x=WORLD.w/2; player.y=WORLD.h/2; }
  game.shop = { x: WORLD.w/2, y: WORLD.h/2, r:46 };
  buildPaths(); buildRails(); buildCrossings();                    // roads + rails FIRST so lakes/boulders can avoid the tracks; crossings sit where they intersect
  buildLakes();                                                    // jungle/winter lakes (avoid the shop + tracks)
  buildConvoyRoad();                                               // AFTER island + lakes so the convoy road stays on SOLID LAND (off ocean AND lakes) and clear of the tracks — the convoy must never drive into the water
  buildPalms();                                                    // palms along the jungle shoreline
  const mk=(type,r,amount,base)=>{ const p=spawnNoOverlap(all, r, 90); if(!p) return;
    const o={type, x:p.x, y:p.y, r, amount, max:amount, regen:0, seed:Math.random()*1000, base};
    all.push(o); game.resources.push(o); };
  for(let i=0;i<290;i++) mk('tree',  22, 120, 'wood');     // node counts bumped ~25% for the bigger map -> gather density stays healthy
  for(let i=0;i<190;i++) mk('stone', 26, 140, 'stone');
  for(let i=0;i<150;i++) mk('metal', 24, 110, 'metal');
  const biomeX={desert:[0,WORLD.w/3], jungle:[WORLD.w/3,2*WORLD.w/3], winter:[2*WORLD.w/3,WORLD.w]};
  const spawnAnimal=(type, near)=>{ const def=ANIMALS[type]; const bx=def.biome?biomeX[def.biome]:[0,WORLD.w];
    const lake = def.lake && game.lakes && game.lakes.length ? game.lakes[randi(0,game.lakes.length-1)] : null;
    let x,y,ok=false;
    for(let t=0;t<40&&!ok;t++){
      if(near){ x=clamp(near.x+rand(-150,150),bx[0]+70,bx[1]-70); y=clamp(near.y+rand(-150,150),90,WORLD.h-90); }   // pack member: spawn beside the leader
      else if(lake){ const a=rand(0,TAU), rr=lake.r+rand(30,200); x=clamp(lake.x+Math.cos(a)*rr,bx[0]+70,bx[1]-70); y=clamp(lake.y+Math.sin(a)*rr,90,WORLD.h-90); }   // alligators spawn at a lake's edge
      else { x=rand(bx[0]+70,bx[1]-70); y=rand(90,WORLD.h-90); }
      if(dist2(x,y,player.x,player.y)<220*220) continue;
      if(landFactor(x,y)<0.05 || (lakeAt(x,y)&&!def.lake)) continue; ok=true;   // alligators may sit IN the lake
      for(const o of all){ if(o.r&&dist2(x,y,o.x,o.y)<(def.r+o.r+8)*(def.r+o.r+8)){ ok=false; break; } } }
    if(!ok) return null;
    const a={type,x,y,vx:0,vy:0,r:def.r,hp:def.hp,max:def.hp,aggro:false,atkcd:0,hit:0,
      wanderT:rand(0,2),dir:rand(0,TAU),respawn:0, hostile:Math.random()<0.10, _foe:null, _lake:lake||(near&&near._lake)||null}; all.push(a); game.animals.push(a); return a; };   // ~10% are HOSTILE; _lake = home lake for alligators (and pack members inherit it)
  for(let i=0;i<12;i++) spawnAnimal('boar');         // general wildlife (counts kept modest — don't overload the map)
  for(let p=0;p<7;p++){ const lead=spawnAnimal('wolf'); if(lead && Math.random()<0.45){ const n=randi(1,2); for(let q=0;q<n;q++) spawnAnimal('wolf',lead); } }   // jungle wolves, sometimes in packs of 2-3
  for(let i=0;i<6;i++)  spawnAnimal('bear');         // winter
  for(let i=0;i<8;i++)  spawnAnimal('alligator');    // jungle lakes
  for(let i=0;i<9;i++)  spawnAnimal('snake');        // desert
  for(let i=0;i<8;i++)  spawnAnimal('scorpion');     // desert (poison sting)
  for(let i=0;i<5;i++)  spawnAnimal('polarbear');    // winter
  game.copter = { x: player.x+120, y: player.y, angle:0, rotor:0, vx:0, vy:0, spd:0, hp:260, max:260, destroyed:false };
  buildMonuments();
  buildRocks();                                               // decorative small rocks (walkable) + solid boulders, jungle & winter
  buildFlora();                                               // jungle flowers / ferns / shrubs (walkable decor)
  buildNavGrid();                                             // coarse terrain navigation grid for bot A* pathfinding (built AFTER lakes/boulders)
  if(typeof spawnEnemyBases==='function') spawnEnemyBases();   // enemy AI (enemyai.js)
}
function buildRocks(){     // jungle & winter terrain: small rocks (walkable decor) + big BOULDERS (solid, block movement & building)
  game.rocks=[]; game.boulders=[];
  const okSpot=(x,y,r)=>{
    if(landFactor(x,y) < 0.06 || lakeAt(x,y)) return false;                                  // solid land, off lakes/coast
    const bm=biomeAt(x,y); if(bm!=='jungle' && bm!=='winter') return false;                  // jungle + winter only (no desert)
    if(inSafeZone(x,y) || inMonZone(x,y)) return false;
    for(const m of (game.monuments||[])){ if(dist2(x,y,m.x,m.y) < (m.r+240)*(m.r+240)) return false; }
    if(dist2(x,y,player.x,player.y) < 360*360) return false;
    if(typeof railDist==='function' && railDist(x,y) < r+90) return false;                       // never put a boulder on the railroad tracks
    for(const o of game.resources){ if(o.r && dist2(x,y,o.x,o.y) < (r+o.r+18)*(r+o.r+18)) return false; }
    for(const b of game.boulders){ if(dist2(x,y,b.x,b.y) < (r+b.r+44)*(r+b.r+44)) return false; }
    return true; };
  for(let i=0;i<34;i++){ for(let tr=0;tr<30;tr++){ const x=rand(WORLD.w/3,WORLD.w-120), y=rand(120,WORLD.h-120), r=rand(28,42);   // big boulders (solid)
    if(okSpot(x,y,r)){ game.boulders.push({x,y,r,seed:rand(0,9), winter:biomeAt(x,y)==='winter'}); break; } } }
  for(let i=0;i<72;i++){ for(let tr=0;tr<18;tr++){ const x=rand(WORLD.w/3,WORLD.w-100), y=rand(100,WORLD.h-100), r=rand(7,13);    // small rocks (walkable)
    if(okSpot(x,y,r)){ game.rocks.push({x,y,r,seed:rand(0,9), winter:biomeAt(x,y)==='winter'}); break; } } }
}
function boulderBlocks(x,y,r){ if(!game.boulders) return false; for(const b of game.boulders){ if(dist2(x,y,b.x,b.y) < (r+b.r)*(r+b.r)) return true; } return false; }   // boulders are SOLID
function boulderAt(x,y){ if(!game.boulders) return null; for(const b of game.boulders){ if(dist2(x,y,b.x,b.y) < (b.r+12)*(b.r+12)) return b; } return null; }   // for build-blocking
function boulderLine(x0,y0,x1,y1){ if(!game.boulders) return false; for(const o of game.boulders){ if(ptSeg(o.x,o.y,x0,y0,x1,y1) < o.r) return true; } return false; }   // a SOLID boulder sits on the shot line -> no clear line of fire (units must not shoot through it)

/* ---- terrain navigation grid + A* pathfinder (bots route AROUND lakes/boulders/coast instead of reactively hugging them -> smooth, no jitter/orbit). Walls/doors stay with the existing door-routing + local collision; this grid is STATIC terrain only. ---- */
let NAV=null;
function buildNavGrid(){ const CS=128, cols=Math.ceil(WORLD.w/CS), rows=Math.ceil(WORLD.h/CS), blk=new Uint8Array(cols*rows);   // coarse 2-tile cells
  for(let gy=0;gy<rows;gy++) for(let gx=0;gx<cols;gx++){ const cx=gx*CS+CS/2, cy=gy*CS+CS/2;
    blk[gy*cols+gx] = (!onLand(cx,cy) || lakeAt(cx,cy) || boulderAt(cx,cy)) ? 1 : 0; }   // ocean/coast, lakes (route around the wade), and solid boulders are obstacles
  NAV={CS,cols,rows,blk}; }
function navBlk(gx,gy){ return (!NAV||gx<0||gy<0||gx>=NAV.cols||gy>=NAV.rows) ? true : NAV.blk[gy*NAV.cols+gx]===1; }
function navCellX(x){ return Math.max(0,Math.min(NAV.cols-1,Math.floor(x/NAV.CS))); }
function navCellY(y){ return Math.max(0,Math.min(NAV.rows-1,Math.floor(y/NAV.CS))); }
function navLOS(x0,y0,x1,y1){ if(!NAV) return true;                                       // straight path clear of terrain obstacles?
  const d=Math.hypot(x1-x0,y1-y0), n=Math.max(1,Math.ceil(d/(NAV.CS*0.5)));
  for(let i=0;i<=n;i++){ const t=i/n; if(navBlk(navCellX(x0+(x1-x0)*t), navCellY(y0+(y1-y0)*t))) return false; }
  return true; }
function navNearestOpen(gx,gy){ if(!navBlk(gx,gy)) return {gx,gy};
  for(let r=1;r<=8;r++) for(let dx=-r;dx<=r;dx++) for(let dy=-r;dy<=r;dy++){ if(Math.abs(dx)!==r&&Math.abs(dy)!==r) continue; if(!navBlk(gx+dx,gy+dy)) return {gx:gx+dx,gy:gy+dy}; }
  return null; }
function navFindPath(sx,sy,tx,ty){ if(!NAV) return null;
  let sgx=navCellX(sx), sgy=navCellY(sy), ggx=navCellX(tx), ggy=navCellY(ty);
  if(navBlk(sgx,sgy)){ const o=navNearestOpen(sgx,sgy); if(!o) return null; sgx=o.gx; sgy=o.gy; }
  if(navBlk(ggx,ggy)){ const o=navNearestOpen(ggx,ggy); if(!o) return null; ggx=o.gx; ggy=o.gy; }
  const cols=NAV.cols, N=cols*NAV.rows, si=sgy*cols+sgx, gi=ggy*cols+ggx; if(si===gi) return [{x:tx,y:ty}];
  const came=new Int32Array(N).fill(-1), g=new Float32Array(N).fill(1e15), open=[si]; g[si]=0;
  const H=i=>Math.abs((i%cols)-ggx)+Math.abs(((i/cols)|0)-ggy);
  let it=0, ok=false;
  while(open.length && it++<7000){ let bk=0,bf=1e15; for(let k=0;k<open.length;k++){ const f=g[open[k]]+H(open[k]); if(f<bf){bf=f;bk=k;} }   // small open set -> linear pop is fine
    const cur=open[bk]; if(cur===gi){ ok=true; break; } open[bk]=open[open.length-1]; open.pop();
    const cx=cur%cols, cy=(cur/cols)|0;
    for(const [dx,dy] of [[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]]){ const nx=cx+dx, ny=cy+dy; if(navBlk(nx,ny)) continue; if(dx&&dy&&(navBlk(cx+dx,cy)||navBlk(cx,cy+dy))) continue;
      const ni=ny*cols+nx, ng=g[cur]+((dx&&dy)?1.4142:1); if(ng<g[ni]){ g[ni]=ng; came[ni]=cur; open.push(ni); } } }
  if(!ok) return null;
  const cells=[]; for(let c=gi;c!==-1;c=came[c]) cells.push(c); cells.reverse();
  const pts=cells.map(i=>({x:(i%cols)*NAV.CS+NAV.CS/2, y:((i/cols|0))*NAV.CS+NAV.CS/2})); pts[pts.length-1]={x:tx,y:ty};
  const out=[pts[0]]; let i=0;                                                              // string-pull: keep only the furthest waypoint with clear LOS (smooth path)
  while(i<pts.length-1){ let j=pts.length-1; while(j>i+1 && !navLOS(pts[i].x,pts[i].y,pts[j].x,pts[j].y)) j--; out.push(pts[j]); i=j; }
  return out; }
function buildMonuments(){     // 3 landmark POIs with the richest loot (scrap + ammo) — and armed GUARDS
  game.monuments=[]; game.guards=[];
  const defs=[{type:'gas',name:'Gas Station'},{type:'junk',name:'Junkyard'},{type:'warehouse',name:'Abandoned Warehouse'}];
  const spots=[{x:WORLD.w*0.26,y:WORLD.h*0.30},{x:WORLD.w*0.75,y:WORLD.h*0.32},{x:WORLD.w*0.5,y:WORLD.h*0.74}];
  const cx=WORLD.w/2, cy=WORLD.h/2;
  for(let i=0;i<3;i++){ let sx=spots[i].x, sy=spots[i].y;
    for(let g=0; g<8 && (landFactor(sx,sy)<0.12 || lakeAt(sx,sy)); g++){ sx=sx*0.78+cx*0.22; sy=sy*0.78+cy*0.22; }   // pull onto solid land if the coast cut into it
    const m={type:defs[i].type, name:defs[i].name, x:sx, y:sy, r:200}; game.monuments.push(m);
    const crates = m.type==='warehouse'?7 : m.type==='junk'?5 : 4;                               // loot crates (most loot)
    for(let c=0;c<crates;c++){ const a=rand(0,TAU), rr=rand(24,m.r*0.62);
      game.barrels.push({x:m.x+Math.cos(a)*rr, y:m.y+Math.sin(a)*rr, r:18, hp:45, max:45, seed:Math.random()*9, tier:'mon', crate:true}); }
    const bar = m.type==='gas'?12 : 7;                                                            // explosive barrels (gas station = fuel)
    for(let c=0;c<bar;c++){ const a=rand(0,TAU), rr=rand(m.r*0.45,m.r*0.95);
      game.barrels.push({x:m.x+Math.cos(a)*rr, y:m.y+Math.sin(a)*rr, r:16, hp:30, max:30, seed:Math.random()*9, tier:'mon'}); }
    const ng = m.type==='warehouse'?4 : 3;                                                        // armed guards patrol the monument (more at the richer warehouse)
    for(let c=0;c<ng;c++) game.guards.push(spawnGuard(m)); }
}
const GUARD = { hp:64, r:14, dmg:8, rof:0.5, range:430, detect:540, speed:118, leash:170, bspeed:1200, spread:0.06 };
function spawnGuard(m){ const a=rand(0,TAU), rr=rand(m.r*0.35,m.r*0.8);
  return { mx:m.x, my:m.y, mr:m.r, x:m.x+Math.cos(a)*rr, y:m.y+Math.sin(a)*rr, hp:GUARD.hp, max:GUARD.hp, angle:rand(0,TAU), gunCd:rand(0,0.6), dead:false, respawnT:0, patrolA:rand(0,TAU), seed:rand(0,9) }; }
function updateGuards(dt){ if(!game.guards) return;
  for(const g of game.guards){
    if(g.dead){ g.respawnT-=dt; if(g.respawnT<=0){ g.dead=false; g.hp=g.max; const a=rand(0,TAU), rr=rand(g.mr*0.35,g.mr*0.8); g.x=g.mx+Math.cos(a)*rr; g.y=g.my+Math.sin(a)*rr; } continue; }
    g.gunCd-=dt;
    let tgt=null, bd=GUARD.detect*GUARD.detect;                                                   // acquire nearest intruder (player OR any bot) with line of sight — guards are hostile to EVERYONE
    if(!player.dead && !player.inCopter && !game.ghost){ const d=dist2(g.x,g.y,player.x,player.y); if(d<bd && !wallBlocksView(g.x,g.y,player.x,player.y)){ bd=d; tgt=player; } }
    for(const e of game.enemies){ if(e.dead||e.eliminated||e.flying) continue; const d=dist2(g.x,g.y,e.x,e.y); if(d<bd && !wallBlocksView(g.x,g.y,e.x,e.y)){ bd=d; tgt=e; } }
    const homeFar = Math.hypot(g.x-g.mx,g.y-g.my) > g.mr+GUARD.leash;                              // leash: never chase far from the monument
    if(tgt && !homeFar){ const d=Math.sqrt(bd), want=Math.atan2(tgt.y-g.y,tgt.x-g.x);
      g.angle += angDiff(g.angle,want)*Math.min(1,dt*9);
      if(d<GUARD.range && g.gunCd<=0 && Math.abs(angDiff(g.angle,want))<0.30){ g.gunCd=GUARD.rof; const ang=g.angle+rand(-GUARD.spread,GUARD.spread), bx=g.x+Math.cos(ang)*16, by=g.y+Math.sin(ang)*16;
        game.bullets.push({x:bx,y:by,px:bx,py:by,vx:Math.cos(ang)*GUARD.bspeed,vy:Math.sin(ang)*GUARD.bspeed,life:GUARD.range/GUARD.bspeed+0.1,dmg:GUARD.dmg,from:'guard',enemy:true}); burst(bx,by,COL.flash,2,90); }
      let mvx=0,mvy=0; if(d>300){ mvx=(tgt.x-g.x)/d; mvy=(tgt.y-g.y)/d; } else if(d<150){ mvx=-(tgt.x-g.x)/d; mvy=-(tgt.y-g.y)/d; } else { const pa=want+Math.PI/2; mvx=Math.cos(pa); mvy=Math.sin(pa); }   // keep ~mid range + strafe
      const nx=g.x+mvx*GUARD.speed*dt, ny=g.y+mvy*GUARD.speed*dt; if(!blocked(nx,ny,GUARD.r)) { g.x=nx; g.y=ny; }
    } else {                                                                                      // PATROL: each guard ROAMS THE NO-BUILD ZONE INDEPENDENTLY to its own random waypoints (no synchronized orbit) -> guards spread out & don't bunch/jitter in a clump
      const ROAM = Math.min((typeof MON_NOBUILD!=='undefined'?MON_NOBUILD:SAFE_R)-40, g.mr*2.6);   // free movement anywhere within the monument no-build zone
      if(Math.hypot(g.x-g.mx,g.y-g.my) > ROAM+90){ const a=Math.atan2(g.my-g.y,g.mx-g.x);          // strayed out of the zone -> head back in
        const nx=g.x+Math.cos(a)*GUARD.speed*dt, ny=g.y+Math.sin(a)*GUARD.speed*dt; if(!blocked(nx,ny,GUARD.r)){ g.x=nx; g.y=ny; } g.angle+=angDiff(g.angle,a)*Math.min(1,dt*4); g.wp=null; }
      else {
        if(!g.wp || (g.wpT=(g.wpT||0)-dt)<=0 || Math.hypot(g.wp.x-g.x,g.wp.y-g.y)<26){             // pick a fresh INDEPENDENT wander point (own timer -> de-synchronized)
          const a=rand(0,TAU), rr=rand(g.mr*0.25, ROAM); g.wp={x:g.mx+Math.cos(a)*rr, y:g.my+Math.sin(a)*rr}; g.wpT=rand(2.4,6.0); }
        const a=Math.atan2(g.wp.y-g.y, g.wp.x-g.x), sp=GUARD.speed*0.55;                            // amble toward it
        const nx=g.x+Math.cos(a)*sp*dt, ny=g.y+Math.sin(a)*sp*dt;
        if(!blocked(nx,ny,GUARD.r)){ g.x=nx; g.y=ny; } else { g.wp=null; g.wpT=0; }                 // blocked -> repick a point (never twitch in place)
        g.angle+=angDiff(g.angle,a)*Math.min(1,dt*3.5); } }
  }
}
function hurtGuard(g,dmg,by){ if(g.dead||dmg<=0) return; g.hp-=dmg; burst(g.x,g.y,COL.blood,5,140);
  if(g.hp<=0){ g.dead=true; g.respawnT=82; burst(g.x,g.y,COL.blood,20,220);                       // monument guards (NPCs) respawn on the monument-loot timer (82s — bumped +30s in round 28)
    if(typeof spillStack==='function') spillStack(g.x,g.y,'scrap',randi(4,9)); if(typeof addLoot==='function') addLoot(g.x,g.y,'ammo',randi(12,26));
    if(by===OWNER){ game.inv.scrap=(game.inv.scrap|0)+8; addFloat(g.x,g.y-22,'+8 guard','#ffe07a'); } else addFloat(g.x,g.y-20,'guard down','#e2664a');
    if(by && by!==OWNER && by!=='guard' && typeof creditKill==='function') creditKill(by); } }
function buildPaths(){          // meandering dirt paths + powerlines + roadside barrels
  game.paths=[];
  for(let p=0;p<5;p++){ const horiz=p%2===0, span=horiz?WORLD.w:WORLD.h, cspan=horiz?WORLD.h:WORLD.w;
    const base=rand(0.14,0.86)*cspan, amp=rand(260,820), freq=rand(1.4,3.2), ph=rand(0,TAU), steps=30, pts=[];
    for(let i=0;i<=steps;i++){ const tt=i/steps, along=tt*span, cross=clamp(base+Math.sin(tt*freq*TAU+ph)*amp, 60, cspan-60);
      pts.push(horiz?{x:along,y:cross}:{x:cross,y:along}); }
    const w=rand(26,42), poles=[], side=Math.random()<0.5?1:-1, off=w/2+24;
    for(let i=0;i<pts.length-1;i+=2){ const a=pts[i], bnx=pts[i+1]; let dx=bnx.x-a.x, dy=bnx.y-a.y; const ln=Math.hypot(dx,dy)||1; dx/=ln; dy/=ln;
      const px=a.x-dy*off*side, py=a.y+dx*off*side; poles.push({x:clamp(px,20,WORLD.w-20), y:clamp(py,20,WORLD.h-20)});   // poles run alongside the road
      if(i%4===0 && Math.random()<0.7){ const bo=w/2+rand(16,70)*(Math.random()<0.5?1:-1);                                // roadside barrels (scrap + ammo)
        const bx=clamp(a.x-dy*bo,30,WORLD.w-30), by=clamp(a.y+dx*bo,30,WORLD.h-30);
        if(!game.shop || dist2(bx,by,game.shop.x,game.shop.y)>(SAFE_R+60)*(SAFE_R+60))
          game.barrels.push({x:bx,y:by,r:16,hp:30,max:30,seed:Math.random()*9,tier:'road'}); } }
    game.paths.push({pts, w, poles}); }
}
function segsCross(A,B){ for(let i=0;i<A.length-1;i++) for(let j=0;j<B.length-1;j++) if(segSeg(A[i].x,A[i].y,A[i+1].x,A[i+1].y,B[j].x,B[j].y,B[j+1].x,B[j+1].y)) return true; return false; }
function railDist(x,y){ let m=1e9; if(game.rails) for(const rl of game.rails){ const pts=rl.pts; for(let i=0;i<pts.length-1;i++){ const d=ptSeg(x,y,pts[i].x,pts[i].y,pts[i+1].x,pts[i+1].y); if(d<m) m=d; } } return m; }   // distance to the nearest rail centerline
function pathDist(x,y){ let m=1e9; if(game.paths) for(const pth of game.paths){ const pts=pth.pts; for(let i=0;i<pts.length-1;i++){ const d=ptSeg(x,y,pts[i].x,pts[i].y,pts[i+1].x,pts[i+1].y); if(d<m) m=d; } } return m; }   // distance to the nearest dirt-road centerline (bases avoid roads; the convoy travels them)
function buildRails(){          // RAILROAD tracks: parallel lines that NEVER cross each other (same orientation, separated cross-bands + a crossing-rejection safety). Walkable decor like dirt roads.
  game.rails=[];
  const horiz=Math.random()<0.5, span=horiz?WORLD.w:WORLD.h, cspan=horiz?WORLD.h:WORLD.w; game.railHoriz=horiz;   // remembered so the convoy road can run PARALLEL (never crossing)
  const bands=[[0.15,0.35],[0.65,0.85]];                                                          // two separated bands so the tracks stay apart
  for(let p=0;p<bands.length;p++){ const bnd=bands[p], base=rand(bnd[0],bnd[1])*cspan, amp=rand(70,Math.min(300,cspan*0.09)), freq=rand(0.7,1.5), ph=rand(0,TAU), steps=46, pts=[];
    for(let i=0;i<=steps;i++){ const tt=i/steps, along=tt*span, cross=clamp(base+Math.sin(tt*freq*TAU+ph)*amp, 90, cspan-90);
      pts.push(horiz?{x:along,y:cross}:{x:cross,y:along}); }
    let cross=false; for(const rl of game.rails){ if(segsCross(pts,rl.pts)){ cross=true; break; } }   // never overlap another rail
    if(!cross) game.rails.push({pts}); }
  // dirt ROADS yield to the tracks: precompute a per-point fade so a road tapers out (stops) smoothly where it meets a rail
  if(game.paths) for(const pth of game.paths){ const RAILW=17, BAND=9; pth.fade=pth.pts.map(p=>{ const d=railDist(p.x,p.y); return smooth01((d-RAILW)/BAND); }); }   // road runs right up to the ballast and the rails cross OVER it (natural crossing) — only a tiny taper under the tracks
}
function buildConvoyRoad(){   // ONE dirt road crossing the LANDMASS coast-to-coast in a rail-free lane (parallel to the tracks): never crosses a train track AND stays on solid land (no driving into the ocean/lakes).
  const horiz = game.railHoriz!==false, span = horiz?WORLD.w:WORLD.h, cspan = horiz?WORLD.h:WORLD.w, N=64;
  const onLandHere=(x,y)=> (typeof onLand!=='function' || onLand(x,y)) && (typeof lakeAt!=='function' || !lakeAt(x,y)) && (typeof landFactor!=='function' || landFactor(x,y)>=0.2);
  let best=null, bestScore=-1;
  for(let s=0;s<=56;s++){ const cross=clamp(70 + s/56*(cspan-140), 70, cspan-70);
    let runS=-1, run=null, minClr=1e9;                                                       // longest CONTIGUOUS on-land run along this lane + its rail clearance
    for(let i=0;i<=N;i++){ const along=i/N*span, x=horiz?along:cross, y=horiz?cross:along;
      const clr=(typeof railDist==='function')?railDist(x,y):1e9; if(clr<minClr) minClr=clr;
      if(onLandHere(x,y)){ if(runS<0) runS=i; if(!run || (i-runS)>(run[1]-run[0])) run=[runS,i]; } else runS=-1; }
    if(!run) continue;
    const runLen=(run[1]-run[0])/N, railOk=minClr>180;                                       // fraction of the span on solid land, contiguous
    const score=runLen*2 + (railOk?0.6:0) + Math.min(minClr,500)/2000;                       // prefer a LONG land run, then a rail-free lane
    if(score>bestScore){ bestScore=score; best={cross, run}; } }
  if(!best) best={cross:cspan*0.5, run:[0,N]};
  const inset=Math.max(1, Math.round(N*0.03));                                               // pull the ends a touch inland off the waterline
  const a0=Math.min(best.run[0]+inset,best.run[1])/N*span, a1=Math.max(best.run[1]-inset,best.run[0])/N*span, steps=44, pts=[];
  for(let i=0;i<=steps;i++){ const along=a0+(a1-a0)*i/steps; pts.push(horiz?{x:along,y:best.cross}:{x:best.cross,y:along}); }   // dead-straight in the chosen land lane -> on land + never crosses a parallel rail
  const road={pts, w:38, poles:[], convoy:true, fade:pts.map(()=>1)};
  game.convoyRoad=road; game.paths.push(road); }
function makeBolt(){ let x=rand(VW*0.2,VW*0.8), y=0; const pts=[{x,y}], end=VH*rand(0.5,0.9);
  while(y<end){ y+=rand(20,48); x+=rand(-42,42); pts.push({x,y}); } return {pts, life:0.5, max:0.5}; }
function updateWeather(dt){ const W=game.weather;
  W.timer-=dt;
  if(W.timer<=0){ if(W.mode==='clear'){ W.mode='rain'; W.timer=rand(8,16); W.boltT=rand(3,8); }     // shorter rain
                  else { W.mode='clear'; W.timer=rand(90,170); } }                                   // much longer dry spells -> rain less often
  W.rain += ((W.mode==='rain'?1:0)-W.rain)*Math.min(1,dt*0.5);          // ease intensity in/out
  if(W.mode==='rain' && W.rain>0.4){ W.boltT-=dt; if(W.boltT<=0){ W.boltT=rand(4,13); W.flash=1; W.bolt=makeBolt(); } }
  W.flash=Math.max(0,W.flash-dt*2.4);
  if(W.bolt){ W.bolt.life-=dt; if(W.bolt.life<=0) W.bolt=null; }
  game.wind = (Math.sin(game.t*0.5)*0.5 + Math.sin(game.t*1.9+1.1)*0.5) * (1 + W.rain*1.7);   // breezier in storms
}

/* ------------------------------ airdrops -------------------------------- */
function airdropLoot(){ const L=[];                                   // randomized HIGH-VALUE loot tables (shoot the crate -> it all spills)
  L.push(['scrap', randi(50,110)]);                                   // always some scrap
  if(Math.random()<0.85) L.push(['rocket', randi(2,6)]);              // usually rockets
  if(Math.random()<0.85) L.push(['ammo', randi(70,150)]);             // usually ammo
  if(Math.random()<0.55) L.push(['metal', randi(25,60)]);
  if(Math.random()<0.50) L.push(['wood', randi(30,70)]);
  if(Math.random()<0.40) L.push(['sniper', 1]);                       // rare: a sniper rifle
  return L; }
function spawnAirdrop(){ let dx,dy; for(let i=0;i<24;i++){ dx=rand(WORLD.w*0.16, WORLD.w*0.84); dy=rand(WORLD.h*0.16, WORLD.h*0.84);
    if(!(typeof inSafeZone==='function' && (inSafeZone(dx,dy) || (game.shop && dist2(dx,dy,game.shop.x,game.shop.y)<(SAFE_R+160)*(SAFE_R+160))))) break; }   // NEVER drop in (or right next to) the trade safe zone
  const fromLeft=Math.random()<0.5, lead=1700;
  game.plane={ x: dx - (fromLeft?lead:-lead), y:dy, vx:(fromLeft?1:-1)*820, dropX:dx, dropY:dy, released:false, prop:0 }; }   // start a short lead before the drop point -> the crate falls within seconds, then the plane continues off-map
function updateAirdrop(dt){
  game.airdropT-=dt;
  if(game.airdropT<=0 && !game.plane && !game.airdrop){ spawnAirdrop(); game.airdropT=rand(120,300); }   // 2-5 min between drops
  if(game.plane){ const p=game.plane; p.x+=p.vx*dt; p.prop+=dt*30;
    if(!p.released && ((p.vx>0&&p.x>=p.dropX)||(p.vx<0&&p.x<=p.dropX))){ p.released=true;
      game.airdrop={ x:p.dropX, y:p.dropY-780, gy:p.dropY, hp:90, max:90, fall:0, sway:Math.random()*TAU, loot:airdropLoot() }; flashTip('Airdrop incoming!'); }
    if((p.vx>0&&p.x>WORLD.w+300)||(p.vx<0&&p.x<-300)) game.plane=null; }
  if(game.airdrop){ const a=game.airdrop; if(a.fall<1){ a.fall=Math.min(1, a.fall+dt*0.16); const s=a.fall*a.fall*(3-2*a.fall); a.y=(a.gy-780)+780*s; a.sway+=dt*1.5; } }   // ~6s parachute descent
}
function spillAirdrop(a){ burst(a.x,a.y,'#ffd27a',30,300); burst(a.x,a.y,COL.barrelLt,16,220);
  for(const [kind,amt] of a.loot){
    if(kind==='rocket'){ for(let i=0;i<amt;i++) addLoot(a.x,a.y,'rocket',1); }
    else if(kind==='sniper'){ addLoot(a.x,a.y,'sniper',1); }
    else if(kind==='ammo'){ addLoot(a.x,a.y,'ammo',amt); }
    else spillStack(a.x,a.y,kind,amt); }
  addFloat(a.x,a.y-30,'AIRDROP LOOTED!','#ffe07a'); }

/* ------------------------------ helpers --------------------------------- */
function addFloat(x,y,text,color){
  // STACK rapid floats near the same spot onto their own lines so quick loot pickups (or repeated hits) never print on top of each other.
  if(game.t-(game._flT||0) < 1.0 && Math.abs(x-(game._flX||0))<60 && Math.abs(y-(game._flY||0))<44) game._flN=(game._flN||0)+1; else game._flN=0;
  game._flT=game.t; game._flX=x; game._flY=y;
  game.floats.push({x, y:y-game._flN*15, vy:-26, text, color, life:0.9, max:0.9}); }
function burst(x,y,color,n,spd){ for(let i=0;i<n;i++){ const a=rand(0,TAU),s=rand(spd*0.3,spd);
  game.particles.push({x,y,vx:Math.cos(a)*s,vy:Math.sin(a)*s,life:rand(0.25,0.6),
    max:0.6,color,r:rand(1.5,3.5)}); } }
function addLoot(x,y,kind,amt,gun){ const a=rand(0,TAU),s=rand(40,90);
  game.loot.push({x,y,vx:Math.cos(a)*s,vy:Math.sin(a)*s,kind,amt,gun:gun||null,life:0,bob:Math.random()*TAU}); }
function gunRank(g){ return {pistol:1,shotgun:2,rifle:3,hmg:4}[g]||0; }   // weapon tier order -> a scavenged DROPPED gun only upgrades you (never downgrades)
function spillStack(x,y,kind,amt){ amt=Math.floor(amt); if(amt<=0) return;       // scatter a pile into a few pickups
  const n=Math.min(12, Math.max(1, Math.ceil(amt/50))), per=Math.ceil(amt/n); let left=amt;
  for(let i=0;i<n && left>0;i++){ const c=Math.min(per,left); addLoot(x,y,kind,c); left-=c; } }
function spillContainer(x,y,d){                                                   // drop a destroyed cupboard/box's contents
  if(d.store){ for(const k of ['wood','stone','metal']){ if(d.store[k]>0){ spillStack(x,y,k,d.store[k]); d.store[k]=0; } } }
  if(d.type==='cupboard' && (d.owner||OWNER)===OWNER){                            // your Tool Cupboard also dumps your carried resources
    for(const k of ['wood','stone','metal']){ if(game.inv[k]>0){ spillStack(x,y,k,game.inv[k]); game.inv[k]=0; } } } }
function give(kind,amt){ game.inv[kind]+=amt; }
function canAfford(cost){ for(const k in cost){ if(game.inv[k] < cost[k]) return false; } return true; }
function pay(cost){ for(const k in cost){ game.inv[k]-=cost[k]; } }

