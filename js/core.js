"use strict";
/* ------------------------------- input ---------------------------------- */
const keys = {};
const mouse = { sx:0, sy:0, wx:0, wy:0, down:false, rdown:false };

/* ------------------------------- canvas --------------------------------- */
const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
let VW=0, VH=0;
let DPR=1;       // crisp, smooth rendering at the device pixel ratio (no pixelation)
function resize(){
  VW = window.innerWidth; VH = window.innerHeight;
  DPR = Math.min(2, window.devicePixelRatio||1);
  canvas.width = Math.round(VW*DPR); canvas.height = Math.round(VH*DPR);
  canvas.style.width = VW+'px'; canvas.style.height = VH+'px';
  ctx.setTransform(DPR,0,0,DPR,0,0);
  ctx.imageSmoothingEnabled=true; ctx.imageSmoothingQuality='high';
  ctx.lineJoin='round';
}
window.addEventListener('resize', resize);

/* ------------------------------- utils ---------------------------------- */
const clamp=(v,a,b)=>v<a?a:v>b?b:v;
const lerp=(a,b,t)=>a+(b-a)*t;
const rand=(a,b)=>a+Math.random()*(b-a);
const randi=(a,b)=>Math.floor(rand(a,b+1));
const dist2=(ax,ay,bx,by)=>{const dx=ax-bx,dy=ay-by;return dx*dx+dy*dy;};
const dist=(ax,ay,bx,by)=>Math.sqrt(dist2(ax,ay,bx,by));
const TAU=Math.PI*2;
function angDiff(a,b){let d=(b-a)%TAU;if(d>Math.PI)d-=TAU;if(d<-Math.PI)d+=TAU;return d;}
function worldToScreen(x,y){return {x, y};}   // world is drawn inside a ctx transform (camera+zoom)
function screenToWorld(sx,sy){return {x:(sx-VW/2)/game.zoom + game.cam.cx, y:(sy-VH/2)/game.zoom + game.cam.cy};}
function gkey(gx,gy){return gx+','+gy;}
function cellOf(x,y){return {gx:Math.floor(x/TILE), gy:Math.floor(y/TILE)};}

/* ------------------------------- events --------------------------------- */
addEventListener('keydown', e=>{
  if(game.store){ if(e.key==='Escape'||e.key.toLowerCase()==='e') closeStore(); return; }
  if(game.shopOpen){ if(e.key==='Escape'||e.key.toLowerCase()==='e') closeShop(); return; }
  const k = e.key.toLowerCase();
  keys[k]=true;
  if(k==='e'){ interact(); }
  else if(k==='g'){ if(!player.inCopter) dropPlayerFence(); }      // place a wood fence (cover) in front of you
  else if(k==='q' && !game.buildMode && !player.inCopter){ throwGrenade(); }   // lob a grenade toward the cursor (2s fuse)
  if(!player.inCopter){
    const _dm=/^(?:Digit|Numpad)([1-9])$/.exec(e.code||'');                     // use e.code, not e.key: while RUNNING (Shift held) '1' arrives as '!', so key-based slot switching failed — code is layout/Shift independent
    if(_dm) selectSlot(+_dm[1]-1);                  // slots ALWAYS switch (even in build, even while running)
    else if(k==='b') toggleBuild();
    else if(k==='r'){ if(game.buildMode) game.buildRot=(game.buildRot+1)%4; else reload(); }
    else if(k==='u' && !game.buildMode){ upgradeHoverTurret(); }      // upgrade the turret under the cursor (1→2→3)
    else if(game.buildMode){
      if(k==='q') cyclePiece(1);
      else if(k==='u') upgradeStructure();
    }   // lock toggle removed — doors auto-lock when placed
  }
  if(['w','a','s','d',' '].includes(k)) e.preventDefault();
});
addEventListener('keyup', e=>{ keys[e.key.toLowerCase()]=false; });
addEventListener('wheel', e=>{ if(game.buildMode && !game.store && !game.shopOpen){ cyclePiece(e.deltaY>0?1:-1); e.preventDefault(); } }, {passive:false});

canvas.addEventListener('mousemove', e=>{
  const r = canvas.getBoundingClientRect();
  mouse.sx = e.clientX - r.left; mouse.sy = e.clientY - r.top;
});
canvas.addEventListener('mousedown', e=>{
  if(e.button===0 && game.godView){ mapTeleport(); return; }      // map view: click to transport
  if(e.button===0){ mouse.down=true; onPrimaryDown(); }
  if(e.button===2){ mouse.rdown=true; onSecondaryDown(); }
});
function mapTeleport(){ const w=screenToWorld(mouse.sx,mouse.sy);
  let x=clamp(w.x,PLAYER_R,WORLD.w-PLAYER_R), y=clamp(w.y,PLAYER_R,WORLD.h-PLAYER_R);
  for(let t=0;t<24 && blocked(x,y,PLAYER_R);t++){ x+=rand(-40,40); y+=rand(-40,40); x=clamp(x,PLAYER_R,WORLD.w-PLAYER_R); y=clamp(y,PLAYER_R,WORLD.h-PLAYER_R); }
  player.x=x; player.y=y; player.inCopter=false;
  toggleGodView();                                                // drop out of map view at the new spot
  addFloat(x,y-26,'arrived','#c4d66a');
}
addEventListener('mouseup', e=>{
  if(e.button===0) mouse.down=false;
  if(e.button===2) mouse.rdown=false;
});
canvas.addEventListener('contextmenu', e=>e.preventDefault());
window.addEventListener('blur', ()=>{ for(const k in keys) keys[k]=false; mouse.down=false; });

document.getElementById('mapbtn').addEventListener('mousedown', e=>e.stopPropagation());
document.getElementById('mapbtn').addEventListener('click', toggleGodView);
document.getElementById('refillbtn').addEventListener('mousedown', e=>e.stopPropagation());
document.getElementById('refillbtn').addEventListener('click', ()=>{ refillAll(); });
function refillAll(){
  for(const k in game.owned) game.owned[k]=true;                                                 // refill = test cheat: unlock every weapon too
  for(const key in WEAPONS){ const w=WEAPONS[key]; w.reserve=Math.max(w.reserve, w===WEAPONS.rocket?80:w===WEAPONS.sniper?60:w===WEAPONS.shotgun?80:600); w.ammo=w.magSize; w.reloading=0; }
  game.inv.wood=Math.max(game.inv.wood,10000); game.inv.stone=Math.max(game.inv.stone,10000); game.inv.metal=Math.max(game.inv.metal,10000);
  game.inv.scrap=Math.max(game.inv.scrap|0,500); game.inv.fence=Math.max(game.inv.fence|0,10);
  flashTip('Refilled ammo + resources'); }
document.getElementById('boosthardbtn').addEventListener('mousedown', e=>e.stopPropagation());
document.getElementById('boosthardbtn').addEventListener('click', ()=>{ boostHardTeams(); });
document.getElementById('debugbtn').addEventListener('mousedown', e=>e.stopPropagation());
document.getElementById('debugbtn').addEventListener('click', ()=>{ game.debugPaths=!game.debugPaths;   // show each unit's current PATH + ACTION (gather/raid/defend/return/trade/monument/found)
  document.getElementById('debugbtn').classList.toggle('on', game.debugPaths);
  document.getElementById('debugbtn').textContent = game.debugPaths?'Debug: ON':'Debug paths';
  flashTip(game.debugPaths?'Debug paths ON — each unit shows its route + action':'Debug paths OFF'); });
document.querySelectorAll('#timepanel .spdbtn').forEach(btn=>{                                   // gameplay-speed buttons (1×/2×/5×)
  btn.addEventListener('mousedown', e=>e.stopPropagation());
  btn.addEventListener('click', ()=>{ game.speed=+btn.dataset.spd;
    document.querySelectorAll('#timepanel .spdbtn').forEach(b=> b.classList.toggle('on', +b.dataset.spd===game.speed)); }); });
function boostHardTeams(){     // the AI equivalent of "Refill All" — fully kits out every HARD team to fast-forward their late-game progression for testing
  const teams=new Set();
  for(const b of game.enemies){ if(!b.hard || b.eliminated || b.dead) continue; teams.add(b.owner);   // EQUIPMENT stays on the unit (rockets/satchels/grenades/HQM/armor/gun) — but raw RESOURCES go into the team Tool Cupboard, not unit inventories
    b.hp=b.max;
    b.rockets=Math.max(b.rockets||0,12); b.satchels=Math.max(b.satchels||0,6); b.grenades=Math.max(b.grenades||0,4);
    b.hqm=Math.max(b.hqm||0,80); b.gun=(b.shotgun?'shotgun':'rifle'); b.facemask=Math.max(b.facemask||0,2); b.bodyArmor=Math.max(b.bodyArmor||0,3); b.jack=true; }
  for(const ow of teams){
    const prim=game.enemies.find(e=>e.primary && e.owner===ow && !e.eliminated); if(!prim) continue;
    const tc=game.deploys.get(prim.tcKey);
    if(tc && tc.store){ tc.store.wood=Math.max(tc.store.wood||0,3000); tc.store.stone=Math.max(tc.store.stone||0,1500); tc.store.metal=Math.max(tc.store.metal||0,1500); tc.store.scrap=Math.max(tc.store.scrap||0,600); }   // resources -> the TOOL CUPBOARD (shared, upkeep-protected, not dropped on death)
    else { prim.inv.wood=Math.max(prim.inv.wood||0,2000); prim.inv.stone=Math.max(prim.inv.stone||0,800); prim.inv.metal=Math.max(prim.inv.metal||0,400); prim.scrap=Math.max(prim.scrap||0,200); }   // UNFOUNDED team (no TC yet) -> founding fund on the primary so it builds FAST
    if(typeof spawnUnit==='function'){ spawnUnit(prim); const w=game.enemies[game.enemies.length-1]; if(w && prim._unfounded) w._unfounded=true; }   // +1 EXTRA WORKER per hard team
  }
  flashTip(teams.size?('Boosted '+teams.size+' hard team(s): resources banked in the cupboard, +1 worker each'):'No hard teams alive'); }
document.getElementById('rocketbtn').addEventListener('mousedown', e=>e.stopPropagation());
document.getElementById('rocketbtn').addEventListener('click', ()=>{ game.rapidRockets=!game.rapidRockets;
  document.getElementById('rocketbtn').classList.toggle('on', game.rapidRockets);
  document.getElementById('rocketbtn').textContent = game.rapidRockets?'Rockets: ON':'Rapid Rockets';
  flashTip(game.rapidRockets?'Rapid rockets ON — hold left-click to blast':'Rapid rockets OFF'); });
document.getElementById('ghostbtn').addEventListener('mousedown', e=>e.stopPropagation());
document.getElementById('ghostbtn').addEventListener('click', ()=>{ game.ghost=!game.ghost;
  document.getElementById('ghostbtn').classList.toggle('on', game.ghost);
  document.getElementById('ghostbtn').textContent = game.ghost?'Ghost: ON':'Ghost';
  flashTip(game.ghost?'Ghost mode — AI ignores you':'Ghost mode off'); });
function toggleGodView(){ game.godView=!game.godView;
  document.getElementById('mapbtn').classList.toggle('on', game.godView);
  document.getElementById('mapbtn').textContent = game.godView?'Exit Map':'Map View'; }
document.getElementById('helpToggle').addEventListener('click', ()=>{
  const h=document.getElementById('help'); h.classList.toggle('min');
  document.getElementById('helpToggle').textContent = h.classList.contains('min')?'show':'hide';
});

