"use strict";
/* ------------------------------- state ---------------------------------- */
const game = {
  t:0, dt:0, last:0,
  cam:{cx:0, cy:0}, zoom:1,
  inv:{wood:10000, stone:10000, metal:10000, scrap:0, hqm:0, fence:10, grenade:3},
  shopOpen:false,
  resources:[], barrels:[], dummies:[], loot:[], bullets:[], particles:[], floats:[],
  animals:[], rockets:[], flashes:[], scorch:[], wrecks:[],
  structures:new Map(),         // cell "gx,gy" -> {type:floor|trifloor} (foundations)
  walls:new Map(),              // edge key -> {type:wall|door|triangle}
  deploys:new Map(),            // cell "gx,gy" -> {type:box|turret|cupboard} (sit ON foundations/ground)
  buildMode:false,
  buildPiece:'wall',
  buildRot:0,
  slot:0,
  copter:null, store:null, decayT:0, transports:[], teamBases:{},
  enemies:[], elims:[], aggressor:null, aggroT:0, _passOwner:null, _passWalls:false,
  jackhammer:false, godView:false, ghost:false, blasts:[], speed:1,
  paths:[], wind:0, weather:{mode:'clear', timer:28, rain:0, boltT:0, flash:0, bolt:null}, fires:[], monuments:[], guards:[],
  satchels:[], raidAlarm:null, bounty:null, fences:[], raids:[], grenades:[], footprints:[], convoys:[],
  airdrop:null, plane:null, airdropT:150,
  rapidRockets:false, rapidCd:0,
  owned:{pistol:true, rifle:false, minigun:false, rocket:false, sniper:false, shotgun:false, hmg:false},   // you START with the tool + pistol only; the rest are bought/unlocked at the trade zone
  deathMark:null,                                                                                // last death location (skull on the minimap)
  shake:0
};
const SATCHEL = { splash:88, splashDmg:120, structDmg:50, rocket:false };   // timed breaching charge
const GRENADE = { splash:120, splashDmg:120, structDmg:22, rocket:false, fuse:2.0 };   // thrown; 2s fuse; heavy anti-personnel splash
function throwGrenade(){ if((game.inv.grenade|0)<=0){ flashTip('No grenades — buy at the trade shop'); return; }
  if(inSafeZone(player.x,player.y)){ flashTip('No weapons in the safe zone'); return; }
  game.inv.grenade--; const t=screenToWorld(mouse.sx,mouse.sy);
  const a=Math.atan2(t.y-player.y,t.x-player.x), reach=Math.min(560, Math.hypot(t.x-player.x,t.y-player.y)), sp=Math.max(120, reach*6);   // lands toward the cursor: close cursor = short lob, far cursor = long throw
  game.grenades.push({x:player.x+Math.cos(a)*22, y:player.y+Math.sin(a)*22, vx:Math.cos(a)*sp, vy:Math.sin(a)*sp, t:GRENADE.fuse, from:OWNER, bob:0}); }
function updateGrenades(dt){ for(let i=game.grenades.length-1;i>=0;i--){ const g=game.grenades[i];
  const px=g.x, py=g.y;
  let nx=clamp(g.x+g.vx*dt,8,WORLD.w-8), ny=clamp(g.y+g.vy*dt,8,WORLD.h-8);    // lob with drag
  g.vx*=0.90; g.vy*=0.90; g.bob+=dt; g.t-=dt;
  if(typeof wallBlocksView==='function' && wallBlocksView(px,py,nx,ny)){       // a wall/door is in the way -> grenades CANNOT be thrown over walls; detonate on the near side
    explode(px,py,GRENADE,g.from); game.grenades.splice(i,1); continue; }
  g.x=nx; g.y=ny;
  if(g.t<=0){ explode(g.x,g.y,GRENADE,g.from); game.grenades.splice(i,1); } } }
function drawGrenades(){ for(const g of game.grenades){ if(!inView(g.x,g.y,30)) continue; const s=worldToScreen(g.x,g.y);
  shadow(s.x,s.y+5,7); ctx.fillStyle='#384237'; ctx.beginPath(); ctx.arc(s.x,s.y,6,0,TAU); ctx.fill();
  ctx.fillStyle='#566152'; ctx.beginPath(); ctx.arc(s.x-1.5,s.y-1.5,2.4,0,TAU); ctx.fill();
  if(Math.sin(g.bob*30)>0){ ctx.fillStyle='#ffd27a'; ctx.beginPath(); ctx.arc(s.x+3,s.y-6,2,0,TAU); ctx.fill(); } } }   // blinking fuse
const BOUNTY_REWARD = 50;
const FENCE = { hp:200, len:46, half:23, life:60 };          // wood cover: ~20 rifle rounds; blocks bullets; decays within 1 min
function placeFence(x,y,a,owner){ const dx=Math.cos(a)*FENCE.half, dy=Math.sin(a)*FENCE.half;   // a = segment direction
  if(typeof foundationAt==='function' && foundationAt(Math.floor(x/TILE),Math.floor(y/TILE))) return false;   // deployable wood walls (fences) CANNOT be dropped on a foundation / inside a base — only out in the open for field cover
  game.fences.push({x,y,a,owner:owner||OWNER, hp:FENCE.hp, max:FENCE.hp, t:FENCE.life, x0:x-dx,y0:y-dy, x1:x+dx,y1:y+dy});
  if(game.fences.length>120) game.fences.shift(); return true; }
function ageFences(dt){ for(let i=game.fences.length-1;i>=0;i--){ const f=game.fences[i]; f.t-=dt;   // slow decay -> gone after ~2 min
    if(f.t<=0){ burst(f.x,f.y,'#caa46a',8,140); game.fences.splice(i,1); } } }
function markRaid(x,y,id){ const m=game.raids.find(r=>r.id===id); if(m){ m.x=x; m.y=y; m.t=60; }   // a live raid marker for the minimap (fades after 60s)
  else { game.raids.push({x,y,id,t:60}); if(game.raids.length>40) game.raids.shift(); } }
function ageRaids(dt){ for(let i=game.raids.length-1;i>=0;i--){ game.raids[i].t-=dt; if(game.raids[i].t<=0) game.raids.splice(i,1); } }
function damageFence(f,dmg){ f.hp-=dmg; if(f.hp<=0){ burst(f.x,f.y,'#caa46a',14,200); const i=game.fences.indexOf(f); if(i>=0) game.fences.splice(i,1); }
  else burst(f.x,f.y,'#d8b888',3,110); }

/* hotbar / weapons definitions */
const WEAPONS = {
  pistol:{ name:'Pistol', mag:12, ammo:12, reserve:96, magSize:12, dmg:14, rof:0.22,
           spread:0.03, speed:1150, auto:false, reloadT:1.0, reloading:0, cd:0, kick:6, range:1.6 },
  rifle:{  name:'Rifle',  mag:30, ammo:30, reserve:180, magSize:30, dmg:11, rof:0.09,
           spread:0.05, speed:1500, auto:true, reloadT:1.6, reloading:0, cd:0, kick:4, range:2.4 },
  minigun:{name:'Minigun',mag:200,ammo:200,reserve:200,magSize:200,dmg:6, rof:0.045,
           spread:0.09, speed:1300, auto:true, reloadT:4.5, reloading:0, cd:0, kick:2, range:1.8,
           windup:2.6, spin:0 },
  rocket:{ name:'Rocket', mag:1,  ammo:1,  reserve:50, magSize:1,  dmg:55, rof:0.9,
           spread:0.012, speed:560, auto:false, reloadT:1.9, reloading:0, cd:0, kick:16, range:2.8,
           rocket:true, splash:96, splashDmg:150, structDmg:55 },  // structDmg: wood wall(100)=2 hits, metal(400)=8
  sniper:{ name:'Sniper', mag:1,  ammo:1,  reserve:30, magSize:1,  dmg:60, rof:1.0,
           spread:0.004, speed:1180, auto:false, reloadT:1.8, reloading:0, cd:0, kick:14, range:3.4, locked:true },  // 2 shots kill a player; bought at the shop
  shotgun:{ name:'Shotgun', mag:6, ammo:6, reserve:48, magSize:6, dmg:9, rof:0.30, pellets:7,
           spread:0.17, speed:1050, auto:true, reloadT:1.5, reloading:0, cd:0, kick:9, range:1.1 },   // 7 pellets, brutal up close; player has it by default, AI can buy it
  hmg:{ name:'HMG', mag:100, ammo:100, reserve:300, magSize:100, dmg:15, rof:0.05,
           spread:0.11, speed:1500, auto:true, reloadT:3.0, reloading:0, cd:0, kick:9, range:2.4, locked:true }   // Heavy Machine Gun: 100-round belt, FAST fire + MORE damage than the rifle, but high recoil (wide spread) and a long reload. Bought at the trade shop.
};
const BUILD = {
  floor:    {name:'Floor',    cost:{wood:5},             cat:'cell', found:true, solid:false, hp:100, up:true },
  trifloor: {name:'Tri-Floor',cost:{wood:4},             cat:'cell', found:true, tri:true, solid:false, hp:90, up:true },
  wall:     {name:'Wall',     cost:{wood:10},            cat:'edge', hp:100, up:true },
  triangle: {name:'Triangle', cost:{wood:8},             cat:'diag', hp:100, up:true },
  door:     {name:'Door',     cost:{wood:10, metal:5},   cat:'edge', hp:50,  up:true, mMul:2, lockable:true, door:true },
  box:      {name:'Box',      cost:{wood:15},            cat:'cell', box:true, hp:90, lockable:true, store:true },  // sits on a foundation
  turret:   {name:'Turret',   cost:{wood:40, metal:30},  cat:'cell', solid:true, hp:150, turret:true },
  cupboard: {name:'Cupboard', cost:{wood:60, metal:25},  cat:'cell', solid:true, hp:300, tc:true, lockable:true, store:true }
};
const PIECES = ['floor','wall','door','turret','cupboard'];   // box removed — all loot stores in the Tool Cupboard. (triangle + tri-floor also not in the menu)
const WALL_T = 12;             // wall visual thickness (world px); collision uses half + radius
const BASE_MAX = 10;
const METAL = { cost:{metal:20}, hpMul:4 };                 // wood -> metal upgrade
const COPTER = { speed:560, boost:980, accel:360, drag:0.55, dragIdle:0.85, turn:2.1, r:30 };
const TRANSPORT = { speed:455, accel:300, drag:0.55, turn:1.6, r:46, seats:4, cost:40, hp:360 };   // vehicle: bigger, slower than the minicopter, carries a squad. Bought at the trade zone.
const TURRET = { range:340, rof:0.5, dmg:14, speed:1000, spread:0.05, muzzle:50 };
const TTIER = { 1:{name:'Pistol', dmg:14, rof:0.5,  speed:1000, spread:0.05, mag:12, reload:1.6, range:340},
                2:{name:'Rifle',  dmg:11, rof:0.12, speed:1500, spread:0.05, mag:30, reload:2.0, range:380},
                3:{name:'Sniper', dmg:60, rof:1.3,  speed:1900, spread:0,    mag:1,  reload:2.4, range:460} };   // turret tiers (T3 = 100% accurate, no spread)
const TURRET_UP = { 2:50, 3:250 };          // scrap to upgrade a turret to tier 2 / tier 3 (tier 1 = base)
/* tool cupboard / base ownership / decay / day-night / safe zone */
const CLAIM_R = 900;           // a structure within CLAIM_R of a cupboard belongs to that base
const MIN_TC_DIST = 900;       // cupboards must be at least this far apart (one per base)
const UPKEEP = 0.0075;          // resources/sec drained from the TC per structure (halved again for slower base decay)
const REPAIR_LOCK = 30;         // s after a wall/foundation is damaged during which it CANNOT be repaired (no instant repairs mid-raid) — long enough that a committed raid out-paces the defender's restore and actually breaks in
const DECAY_UNCLAIMED = 600;   // s to fully decay a foundation not on a claimed base (decay 50% slower: was 300)
const DECAY_CENTER = 3600, DECAY_EDGE = 1200;   // unprotected base decays 50% slower (center 60min, edge 20min)
const DAY_LEN = 240;           // seconds for a full day/night cycle
const SAFE_R = 620;            // shop safe zone radius (no animals, no building)
const FLASH_HALF = 0.42, FLASH_R = 780;        // flashlight cone half-angle + reach
const MAT = { wood:{dk:'#6f4a22', mid:'#9a6a34', lt:'#b98446'},
              stone:{dk:'#5f656c', mid:'#8c939b', lt:'#aab1b8'},
              metal:{dk:'#41464d', mid:'#5b626b', lt:'#7d8893'},
              armored:{dk:'#2b3340', mid:'#46566b', lt:'#7f93ad'} };   // HQM-plated: blue-steel, the toughest tier
const matCols = m => MAT[m] || MAT.wood;                       // m is 'wood'|'stone'|'metal'|'armored'
const UPGRADE = { wood:{next:'stone', cost:{stone:15}}, stone:{next:'metal', cost:{metal:20}}, metal:{next:'armored', cost:{hqm:8}} };   // armored needs HQM (buy-only at the trade zone)
function tierHp(def, mat){ const mMul=def.mMul||4;             // wood x1, stone midpoint, metal xMul, armored ~2x metal
  return mat==='armored' ? def.hp*mMul*2 : mat==='metal' ? def.hp*mMul : mat==='stone' ? Math.round(def.hp*(1+mMul)/2) : def.hp; }

/* animal types: easy -> hard */
const ANIMALS = {
  boar:{ name:'Boar', hp:35,  r:17, walk:62, chase:128, dmg:7,  atk:0.8, detect:300, lose:560, col:COL.boar, colDk:COL.boarDk, lootKind:'wood',  lootMin:1, lootMax:3 },
  wolf:{ name:'Wolf', hp:62,  r:15, walk:84, chase:190, dmg:12, atk:0.6, detect:430, lose:720, col:COL.wolf, colDk:COL.wolfDk, lootKind:'metal', lootMin:1, lootMax:2, biome:'jungle', pack:true },
  bear:{ name:'Bear', hp:165, r:25, walk:54, chase:132, dmg:24, atk:1.0, detect:360, lose:660, col:COL.bear, colDk:COL.bearDk, lootKind:'metal', lootMin:3, lootMax:6, biome:'winter' },
  alligator:{ name:'Alligator', hp:140, r:22, walk:48, chase:158, dmg:22, atk:0.9, detect:340, lose:620, col:'#5d7a3c', colDk:'#36501f', lootKind:'metal', lootMin:2, lootMax:5, biome:'jungle', lake:true },
  snake:{ name:'Snake', hp:42,  r:11, walk:78, chase:214, dmg:14, atk:0.5, detect:380, lose:640, col:'#c2a83e', colDk:'#7c6a20', lootKind:'metal', lootMin:1, lootMax:2, biome:'desert' },
  scorpion:{ name:'Scorpion', hp:28, r:12, walk:74, chase:158, dmg:6, atk:0.7, detect:300, lose:540, col:'#8a5a2a', colDk:'#4e3214', lootKind:'metal', lootMin:1, lootMax:2, biome:'desert', poison:true },
  polarbear:{ name:'Polar Bear', hp:205, r:27, walk:58, chase:142, dmg:28, atk:1.0, detect:380, lose:690, col:'#e3ebf1', colDk:'#aebcc8', lootKind:'metal', lootMin:4, lootMax:7, biome:'winter' }
};
const ANIM_PAUSE = 0.65;        // seconds an animal stands still after each bite — a recovery window so the player/AI can back off and shoot (animals chase faster than units flee)
const BIOME = { desert:{ground:['#caa766','#a07f3e'], patch:'rgba(150,120,60,.5)', dot:'#b89a52'},
                jungle:{ground:['#3e6a2a','#274a18'], patch:'rgba(30,60,20,.55)', dot:'#5a8a3a'},
                winter:{ground:['#cfe0ea','#9fb4c4'], patch:'rgba(150,175,200,.45)', dot:'#e8f1f7'} };
function biomeRidge(y){ if(y===undefined) return 0; return (Math.sin(y*0.0016+1.7)*0.62 + Math.sin(y*0.0043+4.2)*0.38) * WORLD.w*0.055; }   // wavy, non-straight biome boundaries
function biomeAt(x,y){ const t=(x + biomeRidge(y))/WORLD.w; return t<1/3?'desert':t<2/3?'jungle':'winter'; }
/* ---- island shape (irregular coastline) + lakes ---- */
let ISLAND=null;
function buildIsland(){ const cx=WORLD.w/2, cy=WORLD.h/2, rx=WORLD.w*0.47, ry=WORLD.h*0.47, N=200, amp=0.22;
  const harm=[]; for(let k=0;k<5;k++) harm.push({f:k+2, p:rand(0,TAU), a:1/(k+1.2)});
  let amax=0; for(const o of harm) amax+=o.a;
  const rad=new Float32Array(N);
  for(let i=0;i<N;i++){ const ang=i/N*TAU; let n=0; for(const o of harm) n+=o.a*Math.sin(ang*o.f+o.p); n/=amax;   // n in [-1,1]
    rad[i]=1 - amp*(0.5 - 0.5*n); }                                   // coast pulls inward up to amp -> blobby, natural edge
  ISLAND={cx,cy,rx,ry,N,rad}; game.island=ISLAND; }
function islandRadAt(ang){ const N=ISLAND.N; let t=ang/TAU; t-=Math.floor(t); const f=t*N, i=Math.floor(f)%N, j=(i+1)%N, fr=f-Math.floor(f); return ISLAND.rad[i]*(1-fr)+ISLAND.rad[j]*fr; }
function landFactor(x,y){ if(!ISLAND) return 1; const dx=(x-ISLAND.cx)/ISLAND.rx, dy=(y-ISLAND.cy)/ISLAND.ry; const r=Math.hypot(dx,dy)||0.0001; return islandRadAt(Math.atan2(dy,dx)) - r; }   // >0 land, <0 ocean
function onLand(x,y){ return landFactor(x,y) > 0; }
function islandPathPx(){ const pts=[]; for(let i=0;i<ISLAND.N;i++){ const ang=i/ISLAND.N*TAU, R=ISLAND.rad[i]; pts.push([ISLAND.cx+Math.cos(ang)*ISLAND.rx*R, ISLAND.cy+Math.sin(ang)*ISLAND.ry*R]); } return pts; }
function buildLakes(){ game.lakes=[]; if(!ISLAND) return;
  for(let i=0;i<26 && game.lakes.length<5;i++){ const x=rand(WORLD.w*0.34,WORLD.w*0.97), y=rand(WORLD.h*0.14,WORLD.h*0.86), r=rand(170,330);
    const lf=landFactor(x,y); if(lf < (r/Math.min(ISLAND.rx,ISLAND.ry))+0.06) continue;     // keep the whole lake well inland
    const bm=biomeAt(x,y); if(bm==='desert') continue;                                       // lakes only in jungle / winter
    if(typeof railDist==='function' && railDist(x,y) < r+120) continue;                       // never put a lake on the railroad tracks
    if(game.shop && dist2(x,y,game.shop.x,game.shop.y) < (SAFE_R+r+260)*(SAFE_R+r+260)) continue;
    let ok=true; for(const L of game.lakes){ if(dist2(x,y,L.x,L.y) < (r+L.r+220)*(r+L.r+220)){ ok=false; break; } }
    if(ok){ const hh=[]; for(let k=0;k<3;k++) hh.push({f:k+2,p:rand(0,TAU),a:1/(k+1)}); let amax=0; for(const o of hh) amax+=o.a;   // irregular, natural lake outline
      const wob=[]; const M=28; for(let i=0;i<M;i++){ const ang=i/M*TAU; let nn=0; for(const o of hh) nn+=o.a*Math.sin(ang*o.f+o.p); wob.push(1+0.17*(nn/amax)); }
      const pads=[]; if(bm!=='winter'){ for(let k=0;k<randi(2,4);k++) pads.push({a:rand(0,TAU), rr:rand(0.3,0.7), s:rand(7,13)}); }   // lily pads (jungle)
      game.lakes.push({x,y,r,frozen:bm==='winter', wob, pads, seed:rand(0,9)}); } } }
function lakeAt(x,y){ if(!game.lakes) return null; for(const L of game.lakes){ if(dist2(x,y,L.x,L.y) < L.r*L.r) return L; } return null; }

const player = { x: WORLD.w/2, y: WORLD.h/2 + 260, angle:0, walk:200, run:340, recoil:0,
  health:100, maxhp:100, hurt:0, regenDelay:0, dead:false, deadT:0, invuln:0, moving:false, inCopter:false,
  flashlight:false, facemask:0, bodyArmor:0, rifleLaser:false, poison:0 };          // facemask (head) + body armor (chest): 0..3, bought at the trade zone. rifleLaser: rifle laser-sight upgrade. poison: scorpion-sting DoT timer
const OWNER = 'p1';            // single-player owner id (the person who places cupboards)
/* ---- head shots + armor ----  top-down "head" = a small central hitbox; a shot passing within HEAD_R of the body centre is a head shot */
const HEAD_R = 7, HEADSHOT_MUL = 1.9;                   // head shots do ~1.9x damage (before armor)
const ARMOR = {                                         // facemask protects the head, body armor the chest. L1 basic -> L3 best.
  head:[0, 0.25, 0.45, 0.62],                           // fractional damage REDUCTION vs head shots at level 0/1/2/3
  body:[0, 0.18, 0.34, 0.50],                           // reduction vs body shots
  cost:[0, 16, 34, 60],                                 // scrap to buy level 1 / 2 / 3 (each tier)
  headCol:['', '#d8c08c', '#9fb0bd', '#7d8fd0'],        // worn colour per level (L1 tan, L2 steel, L3 blue)
  bodyCol:['', '#8a7a4a', '#9aa1a8', '#5f7ea0'] };
function armorReduce(level, kind){ const arr=ARMOR[kind]; return arr[clamp(level|0,0,3)]||0; }
function segHitsHead(cx,cy,b){ const px=(b.px!==undefined?b.px:b.x), py=(b.py!==undefined?b.py:b.y); return ptSeg(cx,cy,px,py,b.x,b.y) < HEAD_R; }   // did this bullet's path pass through the head zone?
function playerArmorMitigate(dmg, head){ const lv=head?(player.facemask||0):(player.bodyArmor||0); return dmg*(1-armorReduce(lv, head?'head':'body')); }
function botArmorMitigate(b, dmg, head){ const lv=head?(b.facemask||0):(b.bodyArmor||0); return dmg*(1-armorReduce(lv, head?'head':'body')); }
/* trade shop: spend resources -> scrap; spend scrap -> reserve ammo */
const SHOP = {
  trades:[ {give:{wood:100},  get:6},  {give:{stone:100}, get:9}, {give:{metal:50}, get:10} ],
  buys:[ {w:'pistol', ammo:48, scrap:6}, {w:'rifle', ammo:90, scrap:10},
         {w:'minigun', ammo:200, scrap:16}, {w:'rocket', ammo:2, scrap:24},
         {w:'shotgun', ammo:24, scrap:9}, {w:'sniper', ammo:5, scrap:24},
         {w:'hmg', ammo:150, scrap:20} ]   // first buy of each UNLOCKS the weapon (you start with pistol only); later buys add ammo
};

