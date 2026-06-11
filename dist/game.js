(()=>{var ce={w:13824,h:9216},Yt=16,Fo=64,Ve="p1",wr=1/60,sn={pistol:{name:"Pistol",magSize:12,reserve:96,dmg:14,rof:.22,spread:.03,speed:1150,auto:!1,reloadT:1,kick:6,range:1.6},rifle:{name:"Rifle",magSize:30,reserve:180,dmg:11,rof:.09,spread:.05,speed:1500,auto:!0,reloadT:1.6,kick:4,range:2.4},minigun:{name:"Minigun",magSize:200,reserve:200,dmg:6,rof:.045,spread:.09,speed:1300,auto:!0,reloadT:4.5,kick:2,range:1.8,windup:2.6},rocket:{name:"Rocket",magSize:1,reserve:50,dmg:55,rof:.9,spread:.012,speed:560,auto:!1,reloadT:1.9,kick:16,range:2.8,rocket:!0,splash:96,splashDmg:150,structDmg:55},sniper:{name:"Sniper",magSize:1,reserve:30,dmg:60,rof:1,spread:.004,speed:1180,auto:!1,reloadT:1.8,kick:14,range:3.4,locked:!0},shotgun:{name:"Shotgun",magSize:6,reserve:48,dmg:9,rof:.3,spread:.17,speed:1050,auto:!0,reloadT:1.5,kick:9,range:1.1,pellets:7},hmg:{name:"HMG",magSize:100,reserve:300,dmg:15,rof:.05,spread:.11,speed:1500,auto:!0,reloadT:3,kick:9,range:2.4,locked:!0,tracer:"hmg"}};var Fs={splash:120,splashDmg:120,structDmg:22,fuse:2},Zt={floor:{name:"Floor",cost:{wood:5},cat:"cell",hp:100,found:!0,up:!0},trifloor:{name:"Tri-Floor",cost:{wood:4},cat:"cell",hp:90,found:!0,up:!0,tri:!0,hidden:!0},wall:{name:"Wall",cost:{wood:10},cat:"edge",hp:100,up:!0},triangle:{name:"Triangle",cost:{wood:8},cat:"diag",hp:100,up:!0,hidden:!0},door:{name:"Door",cost:{wood:10,metal:5},cat:"edge",hp:50,up:!0,mMul:2,door:!0},box:{name:"Box",cost:{wood:15},cat:"cell",hp:90,box:!0,store:!0,hidden:!0},turret:{name:"Turret",cost:{wood:40,metal:30},cat:"cell",hp:150,solid:!0,turret:!0},cupboard:{name:"Cupboard",cost:{wood:60,metal:25},cat:"cell",hp:300,solid:!0,tc:!0,store:!0}},ds=["floor","wall","door","turret","cupboard"];var yc=10,If={wood:{to:"stone",cost:{stone:15}},stone:{to:"metal",cost:{metal:20}},metal:{to:"armored",cost:{hqm:8}}};function Mi(n,e){let t=n.mMul||4;return e==="armored"?n.hp*t*2:e==="metal"?n.hp*t:e==="stone"?Math.round(n.hp*(1+t)/2):n.hp}var Ut=900,Vi=900,Tr=.0075,Pf=30,Oo=10,Lf=600,_c=3600,Df=1200,Er=240,gt=620,vc=620,Mc=50,Gi={hp:200,len:46,half:23,life:60},Nf=7,Bo=1.9,Uf=.65,us={head:[0,.25,.45,.62],body:[0,.18,.34,.5],cost:[0,16,34,60],headCol:[null,"#cdbb92","#9aabb8","#7c8ec9"],bodyCol:[null,"#857748","#959ca3","#5d7a9b"]},bc=(n,e)=>us[e][Fm(n)],Fm=n=>n<0?0:n>3?3:n|0,ut={speed:560,boost:980,accel:360,drag:.55,dragIdle:.85,turn:2.1,r:30,hp:260},Ht={speed:455,accel:300,drag:.55,turn:1.6,r:46,seats:4,cost:40,hp:360},zo={1:{name:"Pistol",dmg:14,rof:.5,speed:1e3,spread:.05,mag:12,reload:1.6,range:340,lead:0},2:{name:"Rifle",dmg:11,rof:.12,speed:1500,spread:.05,mag:30,reload:2,range:380,lead:.55},3:{name:"Sniper",dmg:60,rof:1.3,speed:1900,spread:0,mag:1,reload:2.4,range:460,lead:1}},kf={2:50,3:250},wc=50,ps={boar:{hp:35,r:17,walk:62,chase:128,dmg:7,atk:.8,detect:300,lose:560,loot:["wood",1,3]},wolf:{hp:62,r:15,walk:84,chase:190,dmg:12,atk:.6,detect:430,lose:720,loot:["metal",1,2],biome:"jungle",pack:!0},bear:{hp:165,r:25,walk:54,chase:132,dmg:24,atk:1,detect:360,lose:660,loot:["metal",3,6],biome:"winter"},alligator:{hp:140,r:22,walk:48,chase:158,dmg:22,atk:.9,detect:340,lose:620,loot:["metal",2,5],biome:"jungle",lake:!0},snake:{hp:42,r:11,walk:78,chase:214,dmg:14,atk:.5,detect:380,lose:640,loot:["metal",1,2],biome:"desert"},scorpion:{hp:28,r:12,walk:74,chase:158,dmg:6,atk:.7,detect:300,lose:540,loot:["metal",1,2],biome:"desert",poison:!0},polarbear:{hp:205,r:27,walk:58,chase:142,dmg:28,atk:1,detect:380,lose:690,loot:["metal",4,7],biome:"winter"}},Ff=[["boar",12],["wolf",7],["bear",6],["alligator",8],["snake",9],["scorpion",8],["polarbear",5]],Ft={trades:[["wood",100,6],["stone",100,9],["metal",50,10]],buys:{pistol:{ammo:48,cost:6},rifle:{ammo:90,cost:10},minigun:{ammo:200,cost:16},rocket:{ammo:2,cost:24},shotgun:{ammo:24,cost:9},sniper:{ammo:5,cost:24},hmg:{ammo:150,cost:20}},jackhammer:30,laser:14,fenceWood:10,grenade:8,signal:60,hqm:{cost:12,amt:10},worker:100},zt={hp:64,r:14,dmg:8,rof:.5,range:430,detect:540,speed:118,leash:170,bspeed:1200,spread:.06},Of=[{type:"gas",name:"Gas Station",fx:.26,fy:.3,crates:4,barrels:12,guards:3},{type:"junk",name:"Junkyard",fx:.75,fy:.32,crates:5,barrels:7,guards:3},{type:"warehouse",name:"Abandoned Warehouse",fx:.5,fy:.74,crates:7,barrels:7,guards:4}],Yn={capR:240,capT:8,payEvery:6,pay:{stone:10,metal:6,scrap:4}},cn={vhp:1100,ghp:80,speed:120,trange:560,tdmg:13,trof:.34,gdmg:9,grof:.5,grange:440,gspeed:120,leash:300,bspeed:1300},Zn={hp:450,speed:330,orbitR:420,orbitT:22,strafeR:760,flakR:720},Os={hackT:60,r:150},ct={TEAM_COUNT:7,COLS:["#b85b5b","#5b8bb8","#b89b5b","#7bb85b","#9b5bb8","#5bb8a8","#b8765b","#8b8b5b","#b85b9b","#6b78b8"],BOT_SPEED:160,ROCKET_MIN:230,STRAFE_FLIP:.9,REACT_R:640,WORKER_COST:50,GATHER_LOAD:300,MINICOPTER_COST:30,SIGNAL_COST:60,HIRE_CAP_HARD:16,HIRE_CAP:8,RESPAWN_T:15,TRIPWIRE:2600,RAID_DEF_W:.55,RAID_TUR_W:.3,ENDGAME_T:420,ENDGAME_BASES:6};function Bf(n){let e=n>>>0||1,t=()=>{e|=0,e=e+1831565813|0;let i=Math.imul(e^e>>>15,1|e);return i=i+Math.imul(i^i>>>7,61|i)^i,((i^i>>>14)>>>0)/4294967296};return{next:t,rand:(i=0,s=1)=>i+t()*(s-i),randi:(i,s)=>Math.floor(i+t()*(s-i+1)),chance:i=>t()<i,pick:i=>i[Math.floor(t()*i.length)],angle:()=>t()*Math.PI*2}}var ze=Math.PI*2,nt=(n,e,t)=>n<e?e:n>t?t:n,Ar=(n,e,t)=>n+(e-n)*t,he=(n,e,t,i)=>{let s=t-n,r=i-e;return s*s+r*r},Q=(n,e,t,i)=>Math.sqrt(he(n,e,t,i)),bi=n=>(n=nt(n,0,1),n*n*(3-2*n));function Om(n,e){let t=(e-n)%ze;return t>Math.PI&&(t-=ze),t<-Math.PI&&(t+=ze),t}function wi(n,e,t){let i=Om(n,e);return Math.abs(i)<=t?e:n+Math.sign(i)*t}var qe=(n,e)=>n+","+e,Se=(n,e,t)=>n+","+e+","+t;function xt(n,e,t,i,s,r){let o=s-t,a=r-i,l=o*o+a*a;if(l===0)return Q(n,e,t,i);let c=((n-t)*o+(e-i)*a)/l;return c=nt(c,0,1),Q(n,e,t+c*o,i+c*a)}function ii(n,e,t,i,s,r,o,a){let l=Ho(s,r,o,a,n,e),c=Ho(s,r,o,a,t,i),h=Ho(n,e,t,i,s,r),f=Ho(n,e,t,i,o,a);return(l>0&&c<0||l<0&&c>0)&&(h>0&&f<0||h<0&&f>0)}function Ho(n,e,t,i,s,r){return(t-n)*(r-e)-(i-e)*(s-n)}function zf(n,e,t,i,s,r,o,a){let l=t-n,c=i-e,h=o-s,f=a-r,d=l*f-c*h;if(Math.abs(d)<1e-9)return null;let u=((s-n)*f-(r-e)*h)/d,p=((s-n)*c-(r-e)*l)/d;return u<0||u>1||p<0||p>1?null:{x:n+u*l,y:e+u*c}}function Vo(n,e){let t=n*374761393+e*668265263|0;return t=t^t>>13|0,t=Math.imul(t,1274126177),((t^t>>16)>>>0)/4294967296}function Vf(n){let e=n.rng,t=ce.w,i=ce.h,s=200,r=t/2,o=i/2,a=.47*t,l=.47*i,c=[];for(let v=0;v<5;v++)c.push({f:v+2,w:1/(v+1.2),p:e.rand(0,ze)});let h=[],f=1e9,d=-1e9;for(let v=0;v<s;v++){let D=v/s*ze,R=0;for(let k of c)R+=Math.sin(D*k.f+k.p)*k.w;h.push(R),f=Math.min(f,R),d=Math.max(d,R)}let u=h.map(v=>1-.22*(.5-.5*((v-f)/(d-f)*2-1))),p={cx:r,cy:o,rx:a,ry:l,N:s,rad:u},x=v=>{let D=v%ze;D<0&&(D+=ze);let R=D/ze*s,k=Math.floor(R)%s,W=(k+1)%s;return u[k]+(u[W]-u[k])*(R-k)},m=(v,D)=>{let R=(v-r)/a,k=(D-o)/l,W=Math.sqrt(R*R+k*k);return x(Math.atan2(k,R))-W},g=(v,D)=>m(v,D)>0,y=[];for(let v=0;v<s;v++){let D=v/s*ze;y.push({x:r+Math.cos(D)*u[v]*a,y:o+Math.sin(D)*u[v]*l})}let w=v=>v===void 0?0:(Math.sin(v*.0016+1.7)*.62+Math.sin(v*.0043+4.2)*.38)*t*.055,T=(v,D)=>{let R=(v+w(D))/t;return R<1/3?"desert":R<2/3?"jungle":"winter"},I={x:t/2,y:i/2,r:46},E=[];for(let v=0;v<5;v++){let D=v%2===0,R=D?t:i,k=D?i:t,W=e.rand(.14,.86)*k,ie=e.rand(260,820),me=e.rand(1.4,3.2),we=e.rand(0,ze),Oe=[];for(let Le=0;Le<=30;Le++){let yt=Le/30,_t=nt(W+Math.sin(yt*me*ze+we)*ie,60,k-60);Oe.push(D?{x:yt*R,y:_t}:{x:_t,y:yt*R})}let Pe=e.rand(26,42),ke=[],We=e.chance(.5)?1:-1;for(let Le=0;Le<Oe.length;Le+=2){let yt=L(Oe,Le);ke.push({x:nt(Oe[Le].x+Math.cos(yt+Math.PI/2)*We*(Pe/2+24),20,t-20),y:nt(Oe[Le].y+Math.sin(yt+Math.PI/2)*We*(Pe/2+24),20,i-20)})}E.push({pts:Oe,w:Pe,poles:ke,fade:Oe.map(()=>1)})}function L(v,D){let R=v[Math.max(0,D-1)],k=v[Math.min(v.length-1,D+1)];return Math.atan2(k.y-R.y,k.x-R.x)}let _=(v,D)=>{let R=v,k=D;for(let W=0;W<7;W++){let ie={x:(R.x+k.x)/2,y:(R.y+k.y)/2};m(ie.x,ie.y)>.015?R=ie:k=ie}return{x:R.x,y:R.y}},M=v=>{let D=v.map(ie=>m(ie.x,ie.y)>.015),R=D.indexOf(!0),k=D.lastIndexOf(!0);if(R===-1||k-R<2)return null;let W=v.slice(R,k+1);return R>0&&(W[0]=_(W[0],v[R-1])),k<v.length-1&&(W[W.length-1]=_(W[W.length-1],v[k+1])),W},S=e.chance(.5),C=[];for(let v of[[.15,.35],[.65,.85]]){let D=S?t:i,R=S?i:t;for(let k=0;k<4&&!C.some(W=>W.band===v[0]);k++){let W=e.rand(v[0],v[1])*R,ie=e.rand(70,Math.min(300,R*.09)),me=e.rand(.7,1.5),we=e.rand(0,ze),Oe=[];for(let ke=0;ke<=46;ke++){let We=ke/46,Le=nt(W+Math.sin(We*me*ze+we)*ie,90,R-90);Oe.push(S?{x:We*D,y:Le}:{x:Le,y:We*D})}if(Oe=M(Oe),!Oe)continue;let Pe=!1;for(let ke of C)for(let We=0;We<Oe.length-1&&!Pe;We++)for(let Le=0;Le<ke.pts.length-1;Le++)if(ii(Oe[We].x,Oe[We].y,Oe[We+1].x,Oe[We+1].y,ke.pts[Le].x,ke.pts[Le].y,ke.pts[Le+1].x,ke.pts[Le+1].y)){Pe=!0;break}Pe||C.push({pts:Oe,band:v[0]})}}let N=(v,D,R)=>{let k=1e9;for(let W of R){let ie=W.pts;for(let me=0;me<ie.length-1;me++)k=Math.min(k,xt(v,D,ie[me].x,ie[me].y,ie[me+1].x,ie[me+1].y))}return k},V=(v,D)=>N(v,D,C),Y=(v,D)=>N(v,D,E);for(let v of E)v.fade=v.pts.map(D=>{let R=m(D.x,D.y);return R<=.015?0:bi((V(D.x,D.y)-17)/9)*bi((R-.015)/.05)}),v.poles=v.poles.filter(D=>m(D.x,D.y)>.03);let U=[];for(let v of C)for(let D=0;D<v.pts.length-1;D++)for(let R of E)for(let k=0;k<R.pts.length-1;k++){let W=zf(v.pts[D].x,v.pts[D].y,v.pts[D+1].x,v.pts[D+1].y,R.pts[k].x,R.pts[k].y,R.pts[k+1].x,R.pts[k+1].y);W&&U.push({x:W.x,y:W.y,railAng:Math.atan2(v.pts[D+1].y-v.pts[D].y,v.pts[D+1].x-v.pts[D].x),gate:0,active:!1})}let B=[];for(let v=0;v<26&&B.length<5;v++){let D=e.rand(.34*t,.97*t),R=e.rand(.14*i,.86*i),k=e.rand(170,330);if(m(D,R)<k/Math.min(a,l)+.06||T(D,R)==="desert"||V(D,R)<k+120||Q(D,R,I.x,I.y)<gt+k+260||B.some(Oe=>Q(D,R,Oe.x,Oe.y)<k+Oe.r+220))continue;let W=[],ie=[{f:2,p:e.rand(0,ze)},{f:3,p:e.rand(0,ze)},{f:5,p:e.rand(0,ze)}];for(let Oe=0;Oe<28;Oe++){let Pe=Oe/28*ze,ke=0;for(let We=0;We<3;We++)ke+=Math.sin(Pe*ie[We].f+ie[We].p)/(We+1.6);W.push(1+.17*Math.max(-1,Math.min(1,ke)))}let me=T(D,R)==="winter",we=[];if(!me)for(let Oe=0,Pe=e.randi(2,4);Oe<Pe;Oe++)we.push({a:e.rand(0,ze),rr:e.rand(.2,.72),s:e.rand(9,16)});B.push({x:D,y:R,r:k,wob:W,frozen:me,pads:we,seed:e.rand(0,9)})}let q=(v,D)=>{for(let R of B)if(he(v,D,R.x,R.y)<R.r*R.r)return R;return null},ae=[];for(let v of Of){let D=v.fx*t,R=v.fy*i;for(let k=0;k<8&&(m(D,R)<.12||q(D,R));k++)D=D*.78+r*.22,R=R*.78+o*.22;ae.push({type:v.type,name:v.name,x:D,y:R,r:200,crates:v.crates,nbarrels:v.barrels,nguards:v.guards})}let J=gt+240+700,ee={x:.4*t,y:.52*i};e:for(let v=0;v<6;v++){let D=J+v*700;for(let R=0;R<16;R++){let k=R/16*ze,W=I.x+Math.cos(k)*D,ie=I.y+Math.sin(k)*D;if(!(W<600||ie<600||W>t-600||ie>i-600)&&!(m(W,ie)<.12||q(W,ie))&&!(V(W,ie)<360||Y(W,ie)<320)&&!(Q(W,ie,I.x,I.y)<J)){ee={x:W,y:ie};break e}}}ae.push({type:"quarry",name:"Quarry",x:ee.x,y:ee.y,r:170}),n.quarry={x:ee.x,y:ee.y,r:Yn.capR,owner:null,capOwner:null,capT:0,payT:0,arm:0,paid:0};let te=[],se=[],F=(v,D,R,k)=>{if(m(v,D)<.06||q(v,D))return!1;let W=T(v,D);if(W!=="jungle"&&W!=="winter"||Q(v,D,I.x,I.y)<gt+R)return!1;for(let ie of ae)if(Q(v,D,ie.x,ie.y)<ie.r+240)return!1;if(V(v,D)<R+90)return!1;for(let ie of k)if(Q(v,D,ie.x,ie.y)<R+ie.r+44)return!1;return!0};for(let v=0;v<34;v++)for(let D=0;D<30;D++){let R=e.rand(t/3,t-120),k=e.rand(120,i-120),W=e.rand(28,42);if(F(R,k,W,te)){te.push({x:R,y:k,r:W,seed:e.rand(0,9),winter:T(R,k)==="winter"});break}}for(let v=0;v<72;v++)for(let D=0;D<18;D++){let R=e.rand(t/3,t-100),k=e.rand(100,i-100),W=e.rand(7,13);if(F(R,k,W,te)){se.push({x:R,y:k,r:W,seed:e.rand(0,9),winter:T(R,k)==="winter"});break}}n.world={island:p,islandPath:y,onLand:g,landFactor:m,islandRadAt:x,biomeAt:T,biomeRidge:w,shop:I,roads:E,rails:C,railHoriz:S,crossings:U,lakes:B,lakeAt:q,railDist:V,pathDist:Y,monuments:ae,boulders:te,rocks:se,flora:[],palms:[]},zm(n),Hm(n),Gm(n),Wm(n),n.copter={x:n.player.x+120,y:n.player.y,angle:0,rotor:0,vx:0,vy:0,spd:0,hp:ut.hp,max:ut.hp,destroyed:!1}}function Bm(n,e,t,i){let s=n.rng;for(let r=0;r<40;r++){let o=s.rand(i,ce.w-i),a=s.rand(i,ce.h-i);if(Q(o,a,n.player.x,n.player.y)<220||n.world.landFactor(o,a)<.05||n.world.lakeAt(o,a))continue;let l=!1;for(let c of e)if(Q(o,a,c.x,c.y)<t+c.r+24){l=!0;break}if(!l)return{x:o,y:a}}return null}function zm(n){let e=n.rng,t=[["tree",290,22,120,"wood"],["stone",190,26,140,"stone"],["metal",150,24,110,"metal"]],i=[];for(let[s,r,o,a,l]of t)for(let c=0;c<r;c++){let h=Bm(n,i,o,90);if(!h)continue;let f={type:s,x:h.x,y:h.y,r:o,amount:a,max:a,regen:0,seed:e.rand(0,1e3),base:l,by:null,byT:0};i.push(f),n.resources.push(f)}}function Hm(n){let e=n.rng;for(let t of n.world.monuments)if(t.type!=="quarry"){for(let i=0;i<t.crates;i++){let s=e.rand(0,ze),r=e.rand(24,.62*t.r);n.barrels.push({x:t.x+Math.cos(s)*r,y:t.y+Math.sin(s)*r,r:18,hp:45,max:45,seed:e.rand(0,9),tier:"mon",crate:!0,respawnT:0})}for(let i=0;i<t.nbarrels;i++){let s=e.rand(0,ze),r=e.rand(.45*t.r,.95*t.r);n.barrels.push({x:t.x+Math.cos(s)*r,y:t.y+Math.sin(s)*r,r:16,hp:30,max:30,seed:e.rand(0,9),tier:"mon",respawnT:0})}for(let i=0;i<t.nguards;i++)Vm(n,t)}for(let t of n.world.roads)if(!t.convoy)for(let i=0;i<t.pts.length;i+=2){if(i%4!==0||!e.chance(.7))continue;let s=t.pts[i],r=e.rand(0,ze),o=nt(s.x+Math.cos(r)*(t.w/2+e.rand(16,70)),30,ce.w-30),a=nt(s.y+Math.sin(r)*(t.w/2+e.rand(16,70)),30,ce.h-30);Q(o,a,n.world.shop.x,n.world.shop.y)<gt+60||!n.world.onLand(o,a)||n.world.lakeAt(o,a)||n.barrels.push({x:o,y:a,r:16,hp:30,max:30,seed:e.rand(0,9),tier:"road",respawnT:0})}}function Vm(n,e){let t=n.rng,i=t.rand(0,ze),s=t.rand(.35*e.r,.8*e.r);n.guards.push({mx:e.x,my:e.y,mr:e.r,x:e.x+Math.cos(i)*s,y:e.y+Math.sin(i)*s,hp:zt.hp,max:zt.hp,angle:t.rand(0,ze),gunCd:t.rand(0,.6),dead:!1,respawnT:0,wpX:0,wpY:0,wpT:0,hasWp:!1,seed:t.rand(0,9),vx:0,vy:0})}function Gm(n){let e=n.rng,t=ce.w,i=ce.h,s=["#d96a83","#dbb44a","#c46ac4","#e8e4da","#e08a52","#7aa0e0"];for(let r=0,o=e.randi(200,300);r<o;r++){let a=e.rand(t/3,2*t/3),l=e.rand(60,i-60);if(!n.world.onLand(a,l)||n.world.lakeAt(a,l)||n.world.biomeAt(a,l)!=="jungle")continue;let c=e.next();n.world.flora.push({x:a,y:l,type:c<.4?"flower":c<.72?"fern":"shrub",seed:e.rand(0,9),col:e.pick(s)})}for(let r=0,o=e.randi(90,140);r<o;r++){let a=e.rand(30,t/3),l=e.rand(60,i-60);!n.world.onLand(a,l)||n.world.lakeAt(a,l)||n.world.biomeAt(a,l)!=="desert"||n.world.flora.push({x:a,y:l,type:e.chance(.5)?"cactus":"deshrub",seed:e.rand(0,9),arms:e.randi(0,2)})}for(let r=0;r<n.world.islandPath.length;r+=2){let o=n.world.islandPath[r],a=n.world.island.cx+(o.x-n.world.island.cx)*.93,l=n.world.island.cy+(o.y-n.world.island.cy)*.93;n.world.biomeAt(a,l)==="jungle"&&e.chance(.34)&&n.world.palms.push({x:a,y:l,seed:e.rand(0,9)})}for(let r=0,o=e.randi(10,16);r<o;r++){let a=e.rand(40,t/3-20),l=e.rand(80,i-80);n.world.biomeAt(a,l)==="desert"&&n.world.onLand(a,l)&&!n.world.lakeAt(a,l)&&n.world.palms.push({x:a,y:l,seed:e.rand(0,9),desert:!0})}}function Wm(n){let e=n.rng,t=ce.w,i=ce.h,s=o=>o==="desert"?[0,t/3]:o==="jungle"?[t/3,2*t/3]:o==="winter"?[2*t/3,t]:[0,t],r=[];for(let[o,a]of Ff){let l=ps[o];for(let c=0;c<a;c++){let h=Hf(n,o,l,s(l.biome),r,null);if(h&&l.pack&&e.chance(.45))for(let f=0,d=e.randi(1,2);f<d;f++)Hf(n,o,l,s(l.biome),r,h)}}}function Hf(n,e,t,i,s,r){let o=n.rng;for(let a=0;a<40;a++){let l,c,h=r?r.lake:null;if(r)l=r.x+o.rand(-150,150),c=r.y+o.rand(-150,150);else if(t.lake){let u=n.world.lakes.filter(m=>!m.frozen||t.biome!=="jungle");if(!u.length)return null;h=o.pick(u);let p=o.rand(0,ze),x=h.r+o.rand(30,200);l=h.x+Math.cos(p)*x,c=h.y+Math.sin(p)*x}else l=o.rand(i[0],i[1]),c=o.rand(90,ce.h-90);if(l=nt(l,i[0]-70,i[1]+70),c=nt(c,90,ce.h-90),Q(l,c,n.player.x,n.player.y)<220||n.world.landFactor(l,c)<.05||n.world.lakeAt(l,c)&&!t.lake)continue;let f=!1;for(let u of s)if(Q(l,c,u.x,u.y)<t.r+u.r+8){f=!0;break}if(f)continue;let d={type:e,x:l,y:c,vx:0,vy:0,r:t.r,hp:t.hp,max:t.hp,aggro:null,atkcd:0,hit:0,wanderT:o.rand(0,2),dir:o.rand(0,ze),respawnT:0,hostile:o.chance(.1),foe:null,lake:h,pauseT:0,stuckT:0,blockedAll:0,dead:!1,avoidT:0,avoidA:0};return s.push(d),n.animals.push(d),d}return null}var yn=Math.ceil(ce.w/64),Bs=Math.ceil(ce.h/64),Wi=yn*Bs;function Yf(n){let e=new Uint8Array(Wi),t=new Float32Array(Wi);for(let i=0;i<Bs;i++)for(let s=0;s<yn;s++){let r=s*64+64/2,o=i*64+64/2,a=i*yn+s,l=1;if(!n.world.onLand(r,o)){e[a]=1,t[a]=1;continue}let c=n.world.lakeAt(r,o);c&&(l=c.frozen?1.15:3);for(let h of n.world.boulders)if((r-h.x)*(r-h.x)+(o-h.y)*(o-h.y)<(h.r+18)*(h.r+18)){e[a]=1;break}n.world.pathDist(r,o)<26&&(l=Math.min(l,.85)),t[a]=l}n.nav={COLS:yn,ROWS:Bs,N:Wi,terrain:e,cost:t,stamp:1,penalty:new Map,g:new Float32Array(Wi),came:new Int32Array(Wi),vis:new Int32Array(Wi),gen:0,heap:new Int32Array(Wi+1),heapF:new Float32Array(Wi+1)}}var Cr=(n,e)=>n<0||e<0||n>=yn||e>=Bs?-1:e*yn+n;function Xm(n,e,t,i){let s=n.deploys.get(qe(e,t));return s?s.type==="cupboard"?s.owner!==i:!0:!1}function Wo(n,e,t,i){let s=Cr(e,t);return!(s<0||n.nav.terrain[s]||n.walls.has("D,"+e+","+t)||Xm(n,e,t,i)||n.nav.fenceCells&&n.nav.fenceCells.has(s))}function Tc(n,e,t,i,s,r){let o;i>e?o=Se("V",i,t):i<e?o=Se("V",e,t):s>t?o=Se("H",e,s):o=Se("H",e,t);let a=n.walls.get(o);return!a||a.hp<=0?0:a.type==="door"&&(a.open||a.lock&&a.lock.by===r)?1:2}function Ti(n,e,t,i,s,r){if(!Wo(n,i,s,r))return-1;let o=Tc(n,e,t,i,s,r);return o===2?-1:o}function qm(n,e,t){let i=n.nav.cost[e],s=n.nav.penalty.get(e);return s!==void 0&&(s>t?i+=6:n.nav.penalty.delete(e)),i}function Xo(n,e,t,i=12){let s=Cr(Math.floor(e/64),Math.floor(t/64));s>=0&&n.nav.penalty.set(s,n.t+i)}var zs=256,Go=Math.ceil(ce.w/zs),Gf=Math.ceil(ce.h/zs);function Ym(n){let e=n.nav;if(e.maskStamp===e.stamp&&e.mask)return e.mask;let t=e.mask&&e.maskStamp!==void 0?e.mask.fill(0):new Uint8Array(Go*Gf),i=(s,r)=>{let o=s/zs|0,a=r/zs|0;for(let l=-1;l<=1;l++)for(let c=-1;c<=1;c++){let h=(a+l)*Go+(o+c);o+c>=0&&a+l>=0&&o+c<Go&&a+l<Gf&&(t[h]=1)}};for(let s of n.walls.keys()){let r=s.split(",");i(+r[1]*64,+r[2]*64)}for(let s of n.deploys.keys()){let r=s.split(",");i(+r[0]*64,+r[1]*64)}for(let s of n.fences)i(s.x,s.y);return e.mask=t,e.maskStamp=e.stamp,t}function Zf(n,e,t){let i=Ym(n),s=(t/zs|0)*Go+(e/zs|0);return i[s]===1}function Kf(n){let e=new Set;for(let t of n.fences)e.add(Cr(Math.floor(t.x/64),Math.floor(t.y/64)));n.nav.fenceCells=e,n.nav.stamp++}function Wf(n,e,t,i){if(Wo(n,e,t,i))return{gx:e,gy:t};for(let s=1;s<=8;s++)for(let r=-s;r<=s;r++)for(let o=-s;o<=s;o++)if(Math.max(Math.abs(o),Math.abs(r))===s&&Wo(n,e+o,t+r,i))return{gx:e+o,gy:t+r};return null}function Xf(n,e,t){let i=++n.heapN,s=n.heap,r=n.heapF;for(;i>1;){let o=i>>1;if(r[o]<=t)break;s[i]=s[o],r[i]=r[o],i=o}s[i]=e,r[i]=t}function Zm(n){let e=n.heap,t=n.heapF,i=e[1],s=e[n.heapN],r=t[n.heapN--],o=1;for(;;){let a=o<<1;if(a>n.heapN||(a+1<=n.heapN&&t[a+1]<t[a]&&a++,t[a]>=r))break;e[o]=e[a],t[o]=t[a],o=a}return e[o]=s,t[o]=r,i}var qf=[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]];function $f(n,e,t,i,s,r,o){let a=n.nav,l=nt(Math.floor(t/64),0,yn-1),c=nt(Math.floor(i/64),0,Bs-1),h=nt(Math.floor(s/64),0,yn-1),f=nt(Math.floor(r/64),0,Bs-1),d=Wf(n,l,c,e);if(!d)return null;let u=Wf(n,h,f,e);if(!u)return null;if(l=d.gx,c=d.gy,h=u.gx,f=u.gy,l===h&&c===f)return[{x:s,y:r}];let p=++a.gen;a.heapN=0;let x=c*yn+l,m=f*yn+h;a.vis[x]=p,a.g[x]=0,a.came[x]=-1,Xf(a,x,0);let g=Math.max(Math.abs(h-l),Math.abs(f-c)),y=o||Math.min(26e3,3e3+g*90),w=0,T=!1;for(;a.heapN>0&&w++<y;){let S=Zm(a);if(S===m){T=!0;break}let C=S%yn,N=S/yn|0,V=a.g[S];for(let Y=0;Y<8;Y++){let U=qf[Y][0],B=qf[Y][1],q=C+U,ae=N+B,J=Cr(q,ae);if(J<0)continue;let ee=0;if(Y<4){let R=Ti(n,C,N,q,ae,e);if(R<0)continue;R===1&&(ee=2)}else if(Ti(n,C,N,C+U,N,e)!==0||Ti(n,C,N,C,N+B,e)!==0||Ti(n,C+U,N,q,ae,e)!==0||Ti(n,C,N+B,q,ae,e)!==0)continue;let te=(Y<4?1:1.41421)*qm(n,J,n.t)+ee,se=V+te;if(a.vis[J]===p&&a.g[J]<=se)continue;a.vis[J]=p,a.g[J]=se,a.came[J]=S;let F=Math.abs(q-h),v=Math.abs(ae-f),D=(Math.max(F,v)+.41421*Math.min(F,v))*.85;Xf(a,J,se+D)}}if(!T)return null;let I=[],E=m;for(;E!==-1;)I.push(E),E=a.came[E];I.reverse();let L=[];for(let S=0;S<I.length;S++){let C=I[S]%yn,N=I[S]/yn|0,V=!1;if(S>0){let Y=I[S-1]%yn,U=I[S-1]/yn|0;Math.abs(C-Y)+Math.abs(N-U)===1&&(V=Tc(n,Y,U,C,N,e)===1)}L.push({x:C*64+64/2,y:N*64+64/2,door:V})}L[L.length-1]={x:s,y:r,door:L[L.length-1].door};let _=[L[0]],M=0;for(let S=1;S<L.length;S++)if(L[S].door||S===L.length-1){let C=M;for(;C<S;){let N=C+1;for(let V=S;V>C;V--)if(!(L[V].door&&V!==S)&&Rr(n,e,L[C].x,L[C].y,L[V].x,L[V].y)){N=V;break}_.push(L[N]),C=N}M=S}return _.length>1&&!_[0].door&&Rr(n,e,t,i,_[1].x,_[1].y)&&_.shift(),_}function Rr(n,e,t,i,s,r){let o=Math.hypot(s-t,r-i),a=Math.max(1,Math.ceil(o/(64*.4))),l=Math.floor(t/64),c=Math.floor(i/64);for(let h=1;h<=a;h++){let f=h/a,d=t+(s-t)*f,u=i+(r-i)*f,p=Math.floor(d/64),x=Math.floor(u/64);if(!(p===l&&x===c)){if(!Wo(n,p,x,e))return!1;if(p!==l&&x!==c){if(Ti(n,l,c,p,c,e)!==0||Ti(n,p,c,p,x,e)!==0||Ti(n,l,c,l,x,e)!==0||Ti(n,l,x,p,x,e)!==0)return!1}else if(Tc(n,l,c,p,x,e)!==0)return!1;l=p,c=x}}return!0}function Jf(n,e,t,i,s){let r=Math.hypot(i-e,s-t),o=Math.max(1,Math.ceil(r/(64*.5)));for(let a=1;a<=o;a++){let l=a/o,c=Cr(Math.floor((e+(i-e)*l)/64),Math.floor((t+(s-t)*l)/64));if(c<0||n.nav.terrain[c])return!1}return!0}function Ec(n){let e={seed:n>>>0,rng:Bf(n),t:0,tick:0,resources:[],barrels:[],loot:[],bullets:[],rockets:[],grenades:[],satchels:[],fences:[],fires:[],wrecks:[],animals:[],guards:[],dummies:[],structures:new Map,walls:new Map,deploys:new Map,units:[],teams:[],transports:[],trains:[],convoys:[],airdrop:null,plane:null,airdropT:150,signal:null,patrol:null,patrolT:0,lockedCrate:null,crateT:0,quarry:null,trainT:0,convoyT:0,clouds:null,fogBanks:null,fireflies:null,footprints:[],weather:{mode:"clear",timer:28,rain:0,boltT:0,flash:0,fog:0,fogTimer:18,fogOn:!1},wind:0,player:{x:ce.w/2,y:ce.h/2+260,vx:0,vy:0,angle:0,walk:200,run:340,recoil:0,health:100,maxhp:100,hurt:0,regenDelay:0,dead:!1,deadT:0,invuln:0,moving:!1,inCopter:!1,facemask:0,bodyArmor:0,rifleLaser:!1,poison:0,swing:0,gatherCd:0,lastHitBy:null},inv:{wood:1e4,stone:1e4,metal:1e4,scrap:0,hqm:0,fence:10,grenade:3,signal:0},owned:{pistol:!0,rifle:!1,minigun:!1,rocket:!1,sniper:!1,shotgun:!1,hmg:!1},weapons:Km(),slot:0,buildMode:!1,buildPiece:"wall",buildRot:0,jackhammer:!1,ghost:!0,copter:null,playerKills:0,deathMark:null,bounty:null,raids:[],elims:[],raidAlarm:null,breachT:{},shake:0,aggressor:-1,aggressorOwner:null,aggroT:0,roleT:0,aliveBases:0,dbSweepT:0,events:[],muzzle:null,blasts:[],scorch:[],flashes:[],floats:[],particles:[],cmd:{mx:0,my:0,fire:!1,fireHeld:!1,up:!1,down:!1,left:!1,right:!1,run:!1},metrics:{hardUnstick:0,wallPhase:0,stuckTotal:0,maxStuck:0,repaths:0,pathFails:0,act:{},raidsLaunched:0,tcKilled:0,elims:0,winner:null,decisiveT:null,workerLog:[],stuckLog:[],regionStuck:{base:0,lake:0,monument:0,open:0}}};return Vf(e),Yf(e),$m(e),e.trainT=e.rng.rand(20,60),e.patrolT=e.rng.rand(180,280),e.crateT=e.rng.rand(100,180),e.convoyT=e.rng.rand(120,200),e}function Km(){let n={};for(let e in sn){let t=sn[e];n[e]={ammo:t.magSize,reserve:t.reserve,reloading:0,cd:0,spin:0}}return n}function $m(n){let e=n.rng,t=[{x:n.world.shop.x,y:n.world.shop.y,r:gt+500},{x:n.player.x,y:n.player.y,r:700},...n.world.monuments.map(i=>({x:i.x,y:i.y,r:gt+320}))];for(let i=0;i<ct.TEAM_COUNT;i++){let s=null;for(let h=0;h<120&&!s;h++){let f=e.rand(1400,ce.w-1400),d=e.rand(1400,ce.h-1400);n.world.landFactor(f,d)<.12||n.world.lakeAt(f,d)||n.world.lakes.some(u=>Q(f,d,u.x,u.y)<u.r+560)||n.world.railDist(f,d)<400||n.world.pathDist(f,d)<340||t.some(u=>Q(f,d,u.x,u.y)<u.r)||(s={x:f,y:d})}if(!s)continue;t.push({x:s.x,y:s.y,r:Vi});let r=e.next(),o=r<.25,a=r>=.75,l={id:i,owner:"e"+i,col:ct.COLS[i%ct.COLS.length],hard:o,weak:a,role:["raider","turtle","nomad"][i%3],shotgun:e.chance(.3),eliminated:!1,bases:[],brain:{sealed:!0,decaying:!1,ready:!1,attack:!1,attackers:0,urgent:!1,aggressor:!1,raidTarget:null,raidPhase:null,breachKey:null,breachT:0,buildHoldT:0,builderId:null,lootCd:0,qCd:0,sigCd:0,statusT:e.rand(0,.5),stage:null,stageT:0}};n.teams.push(l);let c=Sr(n,l,s.x,s.y,!0);c.inv={wood:120,stone:30,metal:10},c.unfounded=!0,c.siteX=s.x,c.siteY=s.y,c.copter={x:s.x-256,y:s.y,angle:0,rotor:0,spin:0,vx:0,vy:0,hp:160,max:160,destroyed:!1};for(let h=0;h<3;h++){let f=Sr(n,l,s.x+e.rand(-46,46),s.y+e.rand(24,64),!1);f.unfounded=!0,f.siteX=s.x,f.siteY=s.y}}}function Sr(n,e,t,i,s){let r=n.rng,o={id:e.id,owner:e.owner,col:e.col,primary:!!s,worker:!s,ally:!1,hard:e.hard,weak:e.weak,shotgun:e.shotgun,role:e.role,x:t,y:i,vx:0,vy:0,angle:r.rand(0,Math.PI*2),hx:t,hy:i,tcKey:null,doorX:t,doorY:i+64,doorGy:Math.floor(i/64)+1,hp:100,max:100,dead:!1,respawnT:0,eliminated:!1,regenT:0,lastHitBy:null,inv:{wood:0,stone:0,metal:0},scrap:0,rockets:0,satchels:0,grenades:0,hqm:0,gun:"pistol",rifleLaser:!1,facemask:e.hard?1:0,bodyArmor:e.hard?2:0,jack:!1,kills:0,state:"gather",act:"gather",unfounded:!1,siteX:0,siteY:0,think:r.rand(0,1),gunCd:0,rkCd:0,gnCd:0,fenceCd:0,expandT:r.rand(3,9),retaliateT:0,threatX:0,threatY:0,disengageT:0,defendT:0,defHold:0,defTgt:null,retreat:!1,raid:null,wasRaid:!1,raidCd:0,raidBias:r.next(),raidUrge:0,defDuty:!1,buildDuty:!1,rocketer:!1,lootRun:null,qRun:null,monRun:!1,monRunT:0,monCd:0,monStay:0,tgtNode:null,skipNode:null,skipT:0,lootTgt:null,lootSkip:null,lootSkipT:0,lane:r.rand(-12,12),hoff:r.rand(-26,26),path:null,pathI:0,pathGX:0,pathGY:0,pathT:0,navStamp:0,repathN:0,noPathT:0,progT:0,progBest:1e9,stuckT:0,baseT:0,idleT:0,aiNetT:0,aiPx:t,aiPy:i,retT:0,maintT:-10,hireT:0,stT:0,expT:r.rand(40,80),fwdT:0,endgame:!1,copter:null,flying:!1,aboard:null,tradeDone:!1,parkChk:0,gathering:!1,swing:0,hf:!1,strafeT:0,strafeS:1,backoff:!1,tickPhase:n.units.length%9};return n.units.push(o),o}function jf(n){let e=n.rng,t=n.world.shop,i=Jm(n),r=Sr(n,{id:-1,owner:Ve,col:"#7ec850",hard:!1,weak:!1,shotgun:!1,role:"raider"},t.x+e.rand(-60,60),t.y+(t.r||120)+40,!1);return r.ally=!0,r.gun="rifle",r.col="#7ec850",r.raidUrge=e.rand(12,24),r.facemask=0,r.bodyArmor=0,i?(r.hx=i.hx,r.hy=i.hy,r.tcKey=i.tcKey):(r.hx=n.player.x,r.hy=n.player.y),r.doorX=r.hx,r.doorY=r.hy+64,r.doorGy=Math.floor(r.hy/64)+1,r}function Jm(n){for(let[e,t]of n.deploys)if(t.type==="cupboard"&&t.owner===Ve){let[i,s]=e.split(",").map(Number);return{owner:Ve,tcKey:e,hx:i*64+64/2,hy:s*64+64/2,isPlayer:!0}}return null}var Qf=(n,e)=>n.teams.find(t=>t.owner===e)||null;function Ge(n,e,t,i,s){let r=0,o=n.floats[n.floats.length-1];o&&n.t-o.born<1&&Math.abs(o.ox-e)<60&&Math.abs(o.oy-t)<44&&(r=o.lift+15),n.floats.push({x:e,y:t-r,ox:e,oy:t,lift:r,text:i,col:s||"#e8e2cf",vy:-26,life:.9,max:.9,born:n.t}),n.floats.length>90&&n.floats.shift()}function at(n,e,t,i,s,r){for(let o=0;o<s;o++){let a=n.rng.rand(0,Math.PI*2),l=n.rng.rand(.3*r,r);n.particles.push({x:e,y:t,vx:Math.cos(a)*l,vy:Math.sin(a)*l,life:n.rng.rand(.25,.6),max:.6,r:n.rng.rand(1.5,3.5),col:i})}n.particles.length>900&&n.particles.splice(0,n.particles.length-900)}function vt(n,e,t,i,s,r){let o=n.rng.rand(0,Math.PI*2),a=n.rng.rand(40,90);n.loot.push({x:e,y:t,vx:Math.cos(o)*a,vy:Math.sin(o)*a,kind:i,amt:s,gun:r||null,life:0,bob:n.rng.rand(0,Math.PI*2)})}function rn(n,e,t,i,s){if(s<=0)return;let r=Math.min(12,Math.max(1,Math.ceil(s/50))),o=s;for(let a=0;a<r;a++){let l=Math.min(o,Math.ceil(s/r));if(l<=0)break;vt(n,e+n.rng.rand(-14,14),t+n.rng.rand(-14,14),i,l),o-=l}}function ed(n,e,t,i){if(i.store)for(let s of["wood","stone","metal"])rn(n,e,t,s,i.store[s]|0),i.store[s]=0}function td(n,e,t,i){let s=n.raids.find(r=>r.id===i);if(s){s.x=e,s.y=t,s.t=60;return}n.raids.push({x:e,y:t,id:i,t:60}),n.raids.length>40&&n.raids.shift()}function qo(n,e){if(!e)return;if(e===Ve){n.playerKills++,n.inv.scrap+=12;return}let t=n.units.find(i=>i.owner===e&&i.primary&&!i.eliminated)||n.units.find(i=>i.owner===e&&!i.eliminated);t&&(t.kills++,t.scrap+=12)}function St(n,e){let t=n.split(","),i=+t[1],s=+t[2];return t[0]==="V"?[i*64,s*64,i*64,(s+1)*64]:t[0]==="H"?[i*64,s*64,(i+1)*64,s*64]:e&&e.rot===1?[i*64,(s+1)*64,(i+1)*64,s*64]:[i*64,s*64,(i+1)*64,(s+1)*64]}var Ac=(n,e)=>[Se("V",n,e),Se("V",n+1,e),Se("H",n,e),Se("H",n,e+1),Se("D",n,e)];function Rc(n,e,t,i,s){let r=Math.floor((e-i)/64),o=Math.floor((e+i)/64),a=Math.floor((t-i)/64),l=Math.floor((t+i)/64);for(let c=a;c<=l;c++)for(let h=r;h<=o;h++)for(let f of Ac(h,c)){let d=n.walls.get(f);if(d&&d.hp>0&&s(f,d)===!0)return!0}return!1}function Ir(n,e,t,i){let s=n.deploys.get(qe(Math.floor(e/64),Math.floor(t/64)));return!s||i&&s.type==="cupboard"&&s.owner===i?!1:s.type==="turret"||s.type==="cupboard"||s.type==="box"}function jm(n,e,t,i,s){if(Ir(n,e,t,s))return!0;for(let r=0;r<8;r++){let o=r/8*Math.PI*2;if(Ir(n,e+Math.cos(o)*i,t+Math.sin(o)*i,s))return!0}return!1}function Cc(n,e,t,i){for(let s of n.world.boulders)if(he(e,t,s.x,s.y)<(i+s.r)*(i+s.r))return!0;return!1}function Pr(n,e,t){for(let i of n.world.boulders)if(he(e,t,i.x,i.y)<(i.r+12)*(i.r+12))return i;return null}function si(n,e,t,i,s){for(let r of n.world.boulders)if(xt(r.x,r.y,e,t,i,s)<r.r)return!0;return!1}function Qm(n,e,t,i){for(let s of n.fences)if(!(s.hp<=0)&&xt(e,t,s.x0,s.y0,s.x1,s.y1)<i+4)return s;return null}function Mt(n,e,t,i,s={}){if(!n.world.onLand(e,t)||Cc(n,e,t,i))return!0;if(!Zf(n,e,t))return!1;if(jm(n,e,t,i,s.passOwner)||Qm(n,e,t,i))return!0;let r=!1;return Rc(n,e,t,i+8,(o,a)=>{if(a.type==="door"&&a.open)return!1;if(a.type==="door"&&s.openOwnDoors&&a.lock&&a.lock.by===s.passOwner)return a.open=!0,a.closeT=n.t+1,n.nav.stamp++,!1;let l=St(o,a);if(xt(e,t,l[0],l[1],l[2],l[3])<i+4)return r=!0,!0}),r}function kt(n,e,t,i,s){let r=Math.min(e,i)-64,o=Math.max(e,i)+64,a=Math.min(t,s)-64,l=Math.max(t,s)+64,c=Math.floor(r/64),h=Math.floor(o/64),f=Math.floor(a/64),d=Math.floor(l/64),u=Math.hypot(i-e,s-t);if(u>192){let p=Math.ceil(u/(64*.5)),x=new Set;for(let m=0;m<=p;m++){let g=m/p,y=Math.floor((e+(i-e)*g)/64),w=Math.floor((t+(s-t)*g)/64),T=y*10007+w;if(!x.has(T)){x.add(T);for(let I of Ac(y,w)){let E=n.walls.get(I);if(!E||E.hp<=0||E.type==="door"&&E.open)continue;let L=St(I,E);if(ii(e,t,i,s,L[0],L[1],L[2],L[3]))return!0}}}return!1}for(let p=f;p<=d;p++)for(let x=c;x<=h;x++)for(let m of Ac(x,p)){let g=n.walls.get(m);if(!g||g.hp<=0||g.type==="door"&&g.open)continue;let y=St(m,g);if(ii(e,t,i,s,y[0],y[1],y[2],y[3]))return!0}return!1}function bt(n,e,t){return he(e,t,n.world.shop.x,n.world.shop.y)<gt*gt}function Hs(n,e,t){for(let i of n.world.monuments)if(he(e,t,i.x,i.y)<vc*vc)return i;return null}function Yo(n,e,t){return xt(n,e,t.px,t.py,t.x,t.y)<Nf}var st=(n,e)=>({x:n*64+64/2,y:e*64+64/2});function e0(n,e,t,i){let s=null,r=Ut*Ut;for(let[o,a]of n.deploys){if(a.type!=="cupboard"||i&&a.owner!==i)continue;let[l,c]=o.split(",").map(Number),h=st(l,c),f=he(e,t,h.x,h.y);f<r&&(r=f,s={key:o,d:a,x:h.x,y:h.y})}return s}function wn(n,e){let t=n.deploys.get(e);return t&&t.type==="cupboard"?t:null}var An={has(n,e){for(let t in e){let i=0;for(let s of n)i+=s[t]||0;if(i<e[t])return!1}return!0},pay(n,e){if(!An.has(n,e))return!1;for(let t in e){let i=e[t];for(let s of n){let r=Math.min(i,s[t]||0);if(s[t]=(s[t]||0)-r,i-=r,i<=0)break}}return!0}};function t0(n,e,t,i){let s=t,r=t,o=i,a=i,l=!1;for(let[c,h]of n.structures){if(h.owner!==e)continue;let[f,d]=c.split(",").map(Number);Math.abs(f-t)*64>Ut||Math.abs(d-i)*64>Ut||(l=!0,s=Math.min(s,f),r=Math.max(r,f),o=Math.min(o,d),a=Math.max(a,d))}return l?r-s+1>yc||a-o+1>yc:!1}function nd(n,e){let t=e.split(","),i=+t[1],s=+t[2];return t[0]==="V"?n.structures.has(qe(i-1,s))||n.structures.has(qe(i,s)):n.structures.has(qe(i,s-1))||n.structures.has(qe(i,s))}function Sc(n,e,t,i){let s=Zt[t];if(!s)return!1;if(s.cat==="cell"){let{gx:r,gy:o}=i,a=st(r,o);if(r<1||o<1||a.x>13760||a.y>9152||bt(n,a.x,a.y)||Hs(n,a.x,a.y)||Pr(n,a.x,a.y)||!n.world.onLand(a.x,a.y)||n.world.lakeAt(a.x,a.y))return!1;if(s.found)return!(n.structures.has(qe(r,o))||n.deploys.has(qe(r,o))||t0(n,e,r,o)||n0(n,r,o));if(n.deploys.has(qe(r,o))||(s.tc||s.box)&&!n.structures.has(qe(r,o)))return!1;if(s.tc){if(e===Ve&&[...n.deploys.values()].some(l=>l.type==="cupboard"&&l.owner===Ve))return!1;for(let[l,c]of n.deploys){if(c.type!=="cupboard")continue;let[h,f]=l.split(",").map(Number),d=st(h,f);if(Q(a.x,a.y,d.x,d.y)<Vi)return!1}}return!(s.turret&&!e0(n,a.x,a.y,e))}if(s.cat==="edge"){let r=i.key;if(n.walls.has(r)||!nd(n,r))return!1;let a=St(r,{type:t}),l=(a[0]+a[2])/2,c=(a[1]+a[3])/2;return!(bt(n,l,c)||Hs(n,l,c))}if(s.cat==="diag"){let r=i.key;if(n.walls.has(r))return!1;let o=r.split(",");return!!n.structures.has(qe(+o[1],+o[2]))}return!1}function n0(n,e,t){let i=st(e,t),s=r=>r&&!r.destroyed&&Math.abs(r.x-i.x)<38&&Math.abs(r.y-i.y)<38;if(s(n.copter))return!0;for(let r of n.units)if(s(r.copter))return!0;return!1}function id(n,e,t,i,s,r={}){let o=Zt[t];if(!Sc(n,e,t,i)||s&&!An.pay(s,o.cost))return null;let a=r.mat||"wood",l=Mi(o,a),c;return o.cat==="cell"&&o.found?(c={type:t,mat:a,hp:l,max:l,owner:e,hitT:-100,rot:(r.rot||0)&3},n.structures.set(qe(i.gx,i.gy),c)):o.cat==="cell"?(c={type:t,mat:"wood",hp:o.hp,max:o.hp,owner:e,hitT:-100},o.store&&(c.store={wood:0,stone:0,metal:0,scrap:0}),o.turret&&(c.tier=r.tier||1,c.angle=0,c.cd=0,c.mag=12,c.reload=0,c.ext=!!r.ext,c.scanT=n.rng.rand(.5,4.5)),(o.tc||o.box||o.door)&&(c.lock={by:e}),n.deploys.set(qe(i.gx,i.gy),c)):(c={type:t,mat:a,hp:Mi(o,a),max:Mi(o,a),owner:e,hitT:-100,open:!1,rot:(r.rot||0)&1},o.door&&(c.lock={by:e}),n.walls.set(i.key,c)),n.nav.stamp++,c}function sd(n,e,t,i){let s=If[e.mat];return!s||!t.up||i&&!An.pay(i,s.cost)?!1:(e.mat=s.to,e.max=Mi(t,e.mat),e.hp=e.max,!0)}function Vs(n,e,t,i){let s=n.walls.get(e);if(!s||s.hp<=0)return!1;if(s.hp-=t,s.hitT=n.t,s.hp<=0){let r=St(e,s);return at(n,(r[0]+r[2])/2,(r[1]+r[3])/2,"#8a7a5c",10,160),n.walls.delete(e),n.breachT[e]=n.t,n.nav.stamp++,n.events.push({type:"wallDown",x:(r[0]+r[2])/2,y:(r[1]+r[3])/2}),!0}return!1}function Lr(n,e,t){let i=n.structures.get(e);return i?(i.hp-=t,i.hitT=n.t,i.hp<=0?(n.structures.delete(e),n.breachT[e]=n.t,Zo(n,e),n.nav.stamp++,!0):!1):!1}function ms(n,e,t,i){let s=n.deploys.get(e);return s?(s.hp-=t,s.hitT=n.t,s.hp<=0?(Ic(n,e,s,i),!0):!1):!1}function Ic(n,e,t,i){let[s,r]=e.split(",").map(Number),o=st(s,r);if(ed(n,o.x,o.y,t),n.deploys.delete(e),n.nav.stamp++,at(n,o.x,o.y,"#caa24a",14,220),t.type==="cupboard"){if(Ge(n,o.x,o.y,"TC destroyed!","#ff7a4a"),n.metrics.tcKilled++,t.owner===Ve)for(let l of["wood","stone","metal"])n.inv[l]>0;Pc(n,t.owner,o.x,o.y);let a=Qf(n,t.owner);if(a){let l=a.bases.find(c=>c.tcKey===e);l&&(l.dead=!0)}}}function Pc(n,e,t,i){for(let[s,r]of[...n.walls]){if(r.owner!==e)continue;let o=St(s,r);Q((o[0]+o[2])/2,(o[1]+o[3])/2,t,i)<560&&n.walls.delete(s)}for(let[s,r]of[...n.structures]){if(r.owner!==e)continue;let[o,a]=s.split(",").map(Number),l=st(o,a);Q(l.x,l.y,t,i)<560&&(n.structures.delete(s),at(n,l.x,l.y,"#6b5a40",3,120))}for(let[s,r]of[...n.deploys]){if(r.owner!==e||r.type==="cupboard")continue;let[o,a]=s.split(",").map(Number),l=st(o,a);Q(l.x,l.y,t,i)<560&&n.deploys.delete(s)}n.nav.stamp++}function Zo(n,e){let[t,i]=e.split(",").map(Number);for(let s of[Se("D",t,i)])n.walls.delete(s);for(let s of[Se("V",t,i),Se("V",t+1,i),Se("H",t,i),Se("H",t,i+1)])n.walls.has(s)&&!nd(n,s)&&n.walls.delete(s)}function i0(n,e,t){let i={};for(let s in n.cost)i[s]=Math.max(1,Math.ceil(n.cost[s]*t));return(e.mat==="stone"||e.mat==="metal")&&(i.stone=(i.stone||0)+Math.ceil(15*t)),e.mat==="metal"&&(i.metal=(i.metal||0)+Math.ceil(20*t)),i}function rd(n,e,t,i,s=Oo){if(e.hp>=e.max||n.t-e.hitT<s)return!1;let r=Math.min(e.max-e.hp,e.max*.2),o=r/e.max;return An.pay(i,i0(t,e,o))?(e.hp+=r,!0):!1}function od(n,e){if(n.decayT=(n.decayT||0)+e,n.decayT<.5)return;let t=n.decayT;n.decayT=0;let i=[];for(let[r,o]of n.deploys){if(o.type!=="cupboard")continue;let[a,l]=r.split(",").map(Number);i.push({key:r,d:o,...st(a,l),n:0})}let s=(r,o,a)=>{let l=r.split(","),c=+l[l.length-2],h=+l[l.length-1],f=st(c,h),d=null,u=Ut*Ut;for(let p of i){let x=he(f.x,f.y,p.x,p.y);x<u&&(u=x,d=p)}if(d){if(d.n++,d.d.store.wood+d.d.store.stone+d.d.store.metal>0)return;let x=Math.sqrt(u)/Ut,m=_c+(Df-_c)*x;o.hp-=o.max*(t/m)}else o.hp-=o.max*(t/Lf);o.hp<=0&&(a?(n.walls.delete(r),n.nav.stamp++):(n.structures.delete(r),Zo(n,r),n.nav.stamp++))};for(let[r,o]of[...n.walls])s(r,o,!0);for(let[r,o]of[...n.structures])s(r,o,!1);for(let r of i){let o=r.n*Tr*t;for(let a of["wood","stone","metal"]){if(o<=0)break;let l=Math.min(o,r.d.store[a]);r.d.store[a]-=l,o-=l}}}function Ko(n,e,t,i){let s=Math.floor(t/64),r=Math.floor(i/64),o=e.owner;for(let p=0;p<3;p++)for(let x=0;x<3;x++)n.structures.set(qe(s+x,r+p),{type:"floor",mat:"wood",hp:100,max:100,owner:o,hitT:-100});let a=p=>n.walls.set(p,{type:"wall",mat:"wood",hp:100,max:100,owner:o,hitT:-100,open:!1}),l=p=>n.walls.set(p,{type:"door",mat:"wood",hp:50,max:50,owner:o,hitT:-100,open:!1,lock:{by:o}});for(let p=0;p<3;p++)a(Se("H",s+p,r));a(Se("H",s,r+3)),a(Se("H",s+2,r+3)),l(Se("H",s+1,r+3));for(let p=0;p<3;p++)a(Se("V",s,r+p)),a(Se("V",s+3,r+p));let c=s+1,h=r+1;l(Se("H",c,h)),a(Se("V",c,h)),a(Se("V",c+1,h)),l(Se("H",c,h+1));let f=qe(c,h);if(n.deploys.set(f,{type:"cupboard",mat:"wood",hp:300,max:300,owner:o,hitT:-100,lock:{by:o},store:{wood:200+n.rng.randi(20,70),stone:0,metal:n.rng.randi(0,40),scrap:0}}),n.deploys.set(qe(s+2,r),{type:"turret",mat:"wood",hp:150,max:150,owner:o,hitT:-100,tier:e.hard?3:e.weak?1:2,angle:0,cd:0,mag:12,reload:0,ext:!1,scanT:n.rng.rand(.5,4.5)}),e.hard)for(let[,p]of n.walls)p.owner===o&&p.mat==="wood"&&(p.mat="metal",p.max=Mi(Zt[p.type],"metal"),p.hp=p.max);let d=st(c,h),u={owner:o,tcKey:f,hx:d.x,hy:d.y,doorX:(s+1)*64+64/2,doorY:(r+3)*64,doorGy:r+3,kind:"home",dead:!1,cleared:!1};return e.bases.push(u),Lc(n,e,u),n.nav.stamp++,u}function $o(n,e,t,i){let s=1e9,r=1e9,o=-1e9,a=-1e9,l=!1;for(let[c,h]of n.structures){if(h.owner!==e)continue;let[f,d]=c.split(",").map(Number),u=st(f,d);he(u.x,u.y,t,i)>Ut*Ut||(l=!0,s=Math.min(s,f),o=Math.max(o,f),r=Math.min(r,d),a=Math.max(a,d))}return l?{minx:s,miny:r,maxx:o,maxy:a}:null}function Lc(n,e,t){let i=$o(n,e.owner,t.hx,t.hy);if(!i)return;let s=Math.floor((i.minx+i.maxx)/2),r=Math.floor((i.miny+i.maxy)/2),o=[Se("H",s,i.miny),Se("H",s,i.maxy+1),Se("V",i.minx,r),Se("V",i.maxx+1,r)];for(let a of o){let l=n.walls.get(a);l&&l.owner===e.owner&&l.type==="wall"&&l.hp>0&&(l.type="door",l.lock={by:e.owner},l.open=!1)}n.nav.stamp++}function Dr(n,e,t){let i=e.owner,s=Se("H",Math.floor(t.doorX/64),t.doorGy);for(let[r,o]of n.structures){if(o.owner!==i)continue;let[a,l]=r.split(",").map(Number),c=st(a,l);if(he(c.x,c.y,t.hx,t.hy)>Ut*Ut)continue;let h=[[Se("V",a,l),qe(a-1,l)],[Se("V",a+1,l),qe(a+1,l)],[Se("H",a,l),qe(a,l-1)],[Se("H",a,l+1),qe(a,l+1)]];for(let[f,d]of h){let u=n.structures.get(d);if(u&&u.owner===i||f===s)continue;let p=n.walls.get(f);if(!p||p.hp<=0)return f}}return null}function Dc(n,e,t,i){return n.t-(n.breachT[t]||-1e9)<Pf||!An.pay(i,{wood:40})?!1:(n.walls.set(t,{type:"wall",mat:"wood",hp:100,max:100,owner:e.owner,hitT:-100,open:!1}),n.nav.stamp++,!0)}function Jo(n,e,t){let i=null,s=.6;for(let[r,o]of n.walls){if(o.owner!==e.owner||o.type==="door"||o.hp<=0||n.t-o.hitT<Oo)continue;let a=St(r,o);if(he((a[0]+a[2])/2,(a[1]+a[3])/2,t.hx,t.hy)>Ut*Ut)continue;let l=o.hp/o.max;l<s&&(s=l,i=r)}return i}function ad(n,e,t,i){let s=n.walls.get(t);if(!s||n.t-s.hitT<Oo)return!1;let r=s.mat==="metal"?{metal:8}:s.mat==="stone"?{stone:8}:{wood:12};return An.pay(i,r)?(s.hp=Math.min(s.max,s.hp+s.max*.5),!0):!1}function In(n,e){n.bullets.push({x:e.x,y:e.y,px:e.x,py:e.y,vx:Math.cos(e.angle)*e.speed,vy:Math.sin(e.angle)*e.speed,life:e.life,dmg:e.dmg,from:e.from,col:e.col||null,turret:!!e.turret,enemy:e.from!==Ve,bounces:0,ricochet:!1,dist:0})}function Nr(n,e,t,i,s){let r=sn.rocket;n.rockets.push({x:e,y:t,vx:Math.cos(i)*r.speed,vy:Math.sin(i)*r.speed,life:r.range,w:r,smoke:0,from:s}),n.events.push({type:"rocketLaunch",x:e,y:t})}var s0=(n,e,t)=>e*(1-bc(t?n.player.facemask:n.player.bodyArmor,t?"head":"body")),r0=(n,e,t)=>e*(1-bc(t?n.facemask:n.bodyArmor,t?"head":"body"));function gs(n,e,t,i,s){let r=n.player;if(!(r.dead||r.invuln>0||n.ghost||bt(n,r.x,r.y))){if(r.health-=e,r.regenDelay=4.5,r.hurt=.28,s&&(r.lastHitBy=s),t!==void 0){let o=Math.max(1,Q(t,i,r.x,r.y));r.x+=(r.x-t)/o*7,r.y+=(r.y-i)/o*7}at(n,r.x,r.y,"#9e2b1e",6,160),r.health<=0&&Ur(n)}}function Ur(n,e){let t=n.player;if(t.dead)return;t.dead=!0,t.deadT=e?4:2.2,n.deathMark={x:t.x,y:t.y},qo(n,t.lastHitBy);for(let a of["wood","stone","metal"])rn(n,t.x,t.y,a,n.inv[a]),n.inv[a]=0;let i=0;for(let a in n.weapons)a!=="rocket"&&(i+=n.weapons[a].ammo+n.weapons[a].reserve,n.weapons[a].ammo=0,n.weapons[a].reserve=0);let s=Math.min(8,Math.ceil(i/30));for(let a=0;a<s;a++)vt(n,t.x,t.y,"ammo",Math.ceil(i/Math.max(1,s)));let r=n.weapons.rocket,o=Math.min(12,r.ammo+r.reserve);r.ammo=0,r.reserve=0;for(let a=0;a<o;a++)vt(n,t.x,t.y,"rocket",1);n.events.push({type:"playerDie",x:t.x,y:t.y})}function xs(n,e,t,i,s,r){e.dead||e.flying||e.eliminated||bt(n,e.x,e.y)||(e.hp-=t,at(n,e.x,e.y,"#9e2b1e",4,150),e.regenT=4,e.lastHitBy=r||null,i!==void 0&&(e.threatX=i,e.threatY=s,e.retaliateT=2.2),e.hp<=0&&Uc(n,e))}function Uc(n,e){if(e.dead)return;e.dead=!0,e.respawnT=15,e.flying=!1,e.aboard=null;for(let s of["wood","stone","metal"])rn(n,e.x,e.y,s,e.inv[s]),e.inv[s]=0;let t=Math.min(12,e.rockets);e.rockets=0;for(let s=0;s<t;s++)vt(n,e.x,e.y,"rocket",1);let i=Math.min(6,e.grenades);e.grenades=0;for(let s=0;s<i;s++)vt(n,e.x,e.y,"rocket",1);vt(n,e.x,e.y,"ammo",n.rng.randi(24,60)),e.gun!=="pistol"&&(vt(n,e.x,e.y,"gun",1,e.gun),e.gun="pistol"),e.scrap>0&&(rn(n,e.x,e.y,"scrap",e.scrap),e.scrap=0),e.id===n.bounty&&e.lastHitBy===Ve&&(n.inv.scrap+=Mc,Ge(n,e.x,e.y,"+"+Mc+" bounty!","#ffd76b"),n.bounty=null),qo(n,e.lastHitBy),at(n,e.x,e.y,"#9e2b1e",14,220),Ge(n,e.x,e.y,"down","#e2664a")}function ld(n,e,t,i){e.dead||(e.hp-=t,at(n,e.x,e.y,"#9e2b1e",5,140),e.hp<=0&&(e.dead=!0,e.respawnT=82,at(n,e.x,e.y,"#9e2b1e",20,220),rn(n,e.x,e.y,"scrap",n.rng.randi(4,9)),vt(n,e.x,e.y,"ammo",n.rng.randi(12,26)),i===Ve?(n.inv.scrap+=8,Ge(n,e.x,e.y,"+8 guard","#ffe07a")):(Ge(n,e.x,e.y,"guard down","#e2664a"),qo(n,i))))}function jo(n,e,t,i,s,r){if(!e.dead){if(e.hp-=t,e.hit=.12,i!==void 0){let o=Math.max(1,Q(i,s,e.x,e.y)),a=Math.min(16,t*.4);e.x+=(e.x-i)/o*a,e.y+=(e.y-s)/o*a}if(e.foe=r||e.foe,e.aggro=e.aggro||"hit",Ge(n,e.x,e.y-e.r,"-"+Math.round(t),"#e8b06a"),e.hp<=0){e.dead=!0,e.respawnT=n.rng.rand(11,18),at(n,e.x,e.y,"#9e2b1e",12,200);let o=ps[e.type];o&&o.loot&&vt(n,e.x,e.y,o.loot[0],n.rng.randi(o.loot[1],o.loot[2])),Ge(n,e.x,e.y,(o?e.type:"animal")+" down","#caa46a")}}}function cd(n,e,t,i){if(e.hp-=t,e.hp>0){at(n,e.x,e.y,"#d2664a",3,120);return}at(n,e.x,e.y,e.crate?"#caa15f":"#d2664a",14,230),e.tier==="mon"?(rn(n,e.x,e.y,"scrap",n.rng.randi(e.crate?22:12,e.crate?42:26)),vt(n,e.x,e.y,"ammo",n.rng.randi(45,85)),e.respawnT=82):e.tier==="road"?(rn(n,e.x,e.y,"scrap",n.rng.randi(8,16)),vt(n,e.x,e.y,"ammo",n.rng.randi(16,34)),e.respawnT=22):(rn(n,e.x,e.y,"scrap",n.rng.randi(3,7)),rn(n,e.x,e.y,"metal",n.rng.randi(2,5)),e.respawnT=22),e.hp=0}function o0(n,e){let t=Math.floor(e.x/64),i=Math.floor(e.y/64),s=[Se("V",t,i),Se("V",t+1,i),Se("H",t,i),Se("H",t,i+1),Se("D",t,i)];for(let o of s){let a=n.walls.get(o);if(!a||a.hp<=0||a.type==="door"&&a.open)continue;let l=St(o,a);if(ii(e.px,e.py,e.x,e.y,l[0],l[1],l[2],l[3])||xt(e.x,e.y,l[0],l[1],l[2],l[3])<10)return a0(n,a)!==e.from&&Vs(n,o,Math.max(1,Math.round(e.dmg*.1)),e.from),{kind:"wall",key:o,w:a}}let r=n.deploys.get(qe(t,i));if(r&&r.owner!==e.from){let o=st(t,i);if(!kt(n,e.px,e.py,o.x,o.y)){let a=r.type==="cupboard"?.05:.25;ms(n,qe(t,i),Math.max(1,Math.round(e.dmg*a)),e.from)}return{kind:"deploy",key:qe(t,i),d:r}}return null}var a0=(n,e)=>e.owner;function l0(n,e,t){if(t&&t.kind==="wall"){let i=t.key.split(",");if(i[0]==="V")return{x:1,y:0};if(i[0]==="H")return{x:0,y:1};let s=St(t.key,t.w),r=s[2]-s[0],o=s[3]-s[1],a=Math.hypot(r,o);return{x:-o/a,y:r/a}}if(t&&t.cx!==void 0){let i=Math.max(1,Q(e.px,e.py,t.cx,t.cy));return{x:(e.px-t.cx)/i,y:(e.py-t.cy)/i}}return{x:0,y:1}}function c0(n,e,t,i){if(e.bounces>=2||!n.rng.chance(i))return!1;let s=l0(n,e,t);s.x*(e.px-e.x)+s.y*(e.py-e.y)<0&&(s.x=-s.x,s.y=-s.y);let r=e.vx*s.x+e.vy*s.y,o=e.vx-2*r*s.x,a=e.vy-2*r*s.y,l=n.rng.rand(-.45,.45),c=Math.cos(l),h=Math.sin(l),f=o*c-a*h,d=o*h+a*c,u=Math.hypot(f,d);return f*s.x+d*s.y>=.05*u&&(o=f,a=d),e.vx=o*.6,e.vy=a*.6,e.x=e.px+s.x*6,e.y=e.py+s.y*6,e.dmg=Math.max(1,Math.round(e.dmg*.6)),e.bounces++,e.ricochet=!0,e.col="ricochet",at(n,e.x,e.y,"#86d8ff",4,180),!0}function hd(n,e){let t=n.player;for(let i=n.bullets.length-1;i>=0;i--){let s=n.bullets[i];if(s.px=s.x,s.py=s.y,s.ricochet){let l=Math.pow(.3,e);if(s.vx*=l,s.vy*=l,Math.hypot(s.vx,s.vy)<150){n.bullets.splice(i,1);continue}}if(s.x+=s.vx*e,s.y+=s.vy*e,s.dist+=Math.hypot(s.vx,s.vy)*e,s.life-=e,s.life<=0||s.x<0||s.y<0||s.x>ce.w||s.y>ce.h||s.dist>3400){n.bullets.splice(i,1);continue}let r=!1,o=null;if(Rc(n,(s.px+s.x)/2,(s.py+s.y)/2,Math.abs(s.x-s.px)+Math.abs(s.y-s.py)+12,(l,c)=>{if(c.type==="door"&&c.open)return!1;let h=St(l,c);if(ii(s.px,s.py,s.x,s.y,h[0],h[1],h[2],h[3]))return o={kind:"wall",key:l,w:c},!0}),!o&&Ir(n,s.x,s.y)){let l=Math.floor(s.x/64),c=Math.floor(s.y/64),h=n.deploys.get(qe(l,c));if(!(h&&h.type==="turret"&&h.owner===s.from)){let f=st(l,c);o={kind:"solid",key:qe(l,c),d:h,cx:f.x,cy:f.y}}}let a=null;if(!o){for(let l of n.world.boulders)if(xt(l.x,l.y,s.px,s.py,s.x,s.y)<l.r){a={cx:l.x,cy:l.y};break}}if(o||a){o&&o0(n,s),c0(n,s,o||a,a?.8:.15)||(at(n,s.px,s.py,"#bfb49a",3,110),n.bullets.splice(i,1));continue}for(let l=n.fences.length-1;l>=0;l--){let c=n.fences[l];if(ii(s.px,s.py,s.x,s.y,c.x0,c.y0,c.x1,c.y1)||xt(s.x,s.y,c.x0,c.y0,c.x1,c.y1)<5){fd(n,c,s.dmg),r=!0;break}}if(r){n.bullets.splice(i,1);continue}for(let l of n.barrels)if(!(l.hp<=0)&&he(s.x,s.y,l.x,l.y)<(l.r+2)*(l.r+2)){cd(n,l,s.dmg,s.from),r=!0;break}if(r){n.bullets.splice(i,1);continue}if(n.patrol&&s.from!=="patrol"&&xt(n.patrol.x,n.patrol.y,s.px,s.py,s.x,s.y)<34){n.patrol.hp-=s.dmg,at(n,s.x,s.y,"#aab1b8",2,120),n.bullets.splice(i,1);continue}if(n.airdrop&&n.airdrop.fall>=1&&xt(n.airdrop.x,n.airdrop.y,s.px,s.py,s.x,s.y)<22){n.airdrop.hp-=s.dmg,n.bullets.splice(i,1);continue}for(let l of n.animals)if(!l.dead&&xt(l.x,l.y,s.px,s.py,s.x,s.y)<l.r+2){jo(n,l,s.dmg,s.px,s.py,s.from),r=!0;break}if(r){n.bullets.splice(i,1);continue}if(s.from!=="guard"){for(let l of n.guards)if(!l.dead&&xt(l.x,l.y,s.px,s.py,s.x,s.y)<zt.r+2){let c=Yo(l.x,l.y,s);ld(n,l,s.dmg*(c?Bo:1),s.from),c&&s.from===Ve&&Ge(n,l.x,l.y-14,"headshot","#ffe07a"),r=!0;break}}if(r){n.bullets.splice(i,1);continue}for(let l of n.units)if(!(l.dead||l.flying||l.eliminated||l.owner===s.from)&&xt(l.x,l.y,s.px,s.py,s.x,s.y)<14){let c=Yo(l.x,l.y,s),h=s.dmg*(c?Bo:1);h=r0(l,h,c);let f=s.px,d=s.py;xs(n,l,h,f,d,s.from),c&&s.from===Ve&&Ge(n,l.x,l.y-14,"headshot","#ffe07a"),r=!0;break}if(r){n.bullets.splice(i,1);continue}for(let l of n.transports)if(!(l.destroyed||l.owner===s.from)&&xt(l.x,l.y,s.px,s.py,s.x,s.y)<Ht.r+2){l.hp-=s.dmg,l.hp<=0&&(l.destroyed=!0),r=!0;break}if(r){n.bullets.splice(i,1);continue}for(let l of n.convoys){if(s.from==="convoy")break;if(!l.dead&&xt(l.x,l.y,s.px,s.py,s.x,s.y)<26){l.hp-=s.dmg,r=!0;break}for(let c of l.guards)if(!c.dead&&xt(c.x,c.y,s.px,s.py,s.x,s.y)<14){c.hp-=s.dmg,c.hp<=0&&(c.dead=!0,vt(n,c.x,c.y,"ammo",n.rng.randi(6,12))),r=!0;break}if(r)break}if(r){n.bullets.splice(i,1);continue}if(s.from!==Ve&&!t.dead&&!t.inCopter&&!n.ghost&&xt(t.x,t.y,s.px,s.py,s.x,s.y)<18){let l=Yo(t.x,t.y,s);gs(n,s0(n,s.dmg*(l?Bo:1),l),s.px,s.py,s.from),n.bullets.splice(i,1);continue}}}function fd(n,e,t){e.hp-=t,e.hp<=0?(at(n,e.x,e.y,"#caa46a",14,200),n.fences.splice(n.fences.indexOf(e),1),n.needFenceRefresh=!0):at(n,e.x,e.y,"#d8b888",3,120)}function kc(n,e,t,i,s){let r=i.splash,o=i.splashDmg,a=i.structDmg||i.splashDmg;at(n,e,t,"#ffb24a",22,320),at(n,e,t,"#5a534a",12,200),n.flashes.push({x:e,y:t,r,life:.25,max:.25}),n.scorch.push({x:e,y:t,r:r*.66}),n.scorch.length>36&&n.scorch.shift(),n.events.push({type:"explosion",x:e,y:t,r}),n.shake=Math.max(n.shake,16);let l=i===sn.rocket||i.structDmg===50;if(l&&s!==Ve){let f=!1;for(let[d,u]of n.structures)if(u.owner===Ve){let[p,x]=d.split(",").map(Number),m=st(p,x);if(he(e,t,m.x,m.y)<(r+64)*(r+64)){f=!0;break}}f&&(n.raidAlarm={x:e,y:t,t:1.5})}if(l){let f=h0(n,e,t,r+128);f&&f!==s&&td(n,e,t,"raid_"+f)}for(let[f,d]of[...n.structures]){let[u,p]=f.split(",").map(Number),x=st(u,p),m=Q(e,t,x.x,x.y);m>r+32||d.owner===s||Lr(n,f,a*(1-m/(r+32)))}for(let[f,d]of[...n.walls]){if(d.owner===s)continue;let u=St(f,d),p=xt(e,t,u[0],u[1],u[2],u[3]);p>r||Vs(n,f,a*(1-p/r),s)}for(let[f,d]of[...n.deploys]){if(d.owner===s)continue;let[u,p]=f.split(",").map(Number),x=st(u,p),m=Q(e,t,x.x,x.y);m>r+25.6||kt(n,e,t,x.x,x.y)||ms(n,f,o*(1-m/(r+25.6)),s)}for(let f of n.animals){if(f.dead)continue;let d=Q(e,t,f.x,f.y);d<r+f.r&&jo(n,f,o*(1-d/(r+f.r)),e,t,s)}for(let f of n.guards){if(f.dead)continue;let d=Q(e,t,f.x,f.y);d<r+14&&ld(n,f,o*(1-d/(r+14)),s)}for(let f of n.convoys){let d=Q(e,t,f.x,f.y);!f.dead&&d<r+26&&(f.hp-=o*1.5*(1-d/(r+26)));for(let u of f.guards){if(u.dead)continue;let p=Q(e,t,u.x,u.y);p<r+14&&(u.hp-=o*(1-p/(r+14)),u.hp<=0&&(u.dead=!0,vt(n,u.x,u.y,"ammo",n.rng.randi(6,12))))}}for(let f of n.barrels){if(f.hp<=0)continue;let d=Q(e,t,f.x,f.y);d<r+f.r&&cd(n,f,o*(1-d/(r+f.r)),s)}for(let f=n.fences.length-1;f>=0;f--){let d=n.fences[f],u=Q(e,t,d.x,d.y);u<r+23&&fd(n,d,o*(1-u/(r+23)))}let c=n.player;if(!c.dead&&!c.inCopter){let f=Q(e,t,c.x,c.y);if(f<r+16){let d=1-f/(r+16);s===Ve?n.ghost||(c.health-=Math.round(o*.45*d),c.regenDelay=4.5,c.hurt=.28,c.health<=0&&Ur(n)):gs(n,Math.round(o*.45*d),e,t,s)}}for(let f of n.units){if(f.dead||f.eliminated||f.owner===s)continue;let d=Q(e,t,f.x,f.y);d<r+14&&xs(n,f,o*.8*(1-d/(r+14)),e,t,s)}let h=(f,d,u)=>{if(!f||f.destroyed||d===s)return;let p=Q(e,t,f.x,f.y);p<r+30&&f0(n,f,o*(1-p/(r+30)),u)};h(n.copter,Ve,!0);for(let f of n.units)h(f.copter,f.owner,!1,f);for(let f of n.transports){if(f.destroyed||f.owner===s)continue;let d=Q(e,t,f.x,f.y);d<r+Ht.r&&(f.hp-=o*(1-d/(r+Ht.r)),f.hp<=0&&(f.destroyed=!0))}if(i.rocket&&n.rng.chance(.25)&&dd(n,e,t),n.patrol){let f=Q(e,t,n.patrol.x,n.patrol.y);f<r+34&&(n.patrol.hp-=o*(1-f/(r+34)))}}function h0(n,e,t,i){for(let[s,r]of n.structures){let[o,a]=s.split(",").map(Number),l=st(o,a);if(he(e,t,l.x,l.y)<i*i)return r.owner}for(let[s,r]of n.walls){let o=St(s,r);if(xt(e,t,o[0],o[1],o[2],o[3])<i)return r.owner}return null}function f0(n,e,t,i,s){e.hp-=t,!(e.hp>0||e.destroyed)&&(e.destroyed=!0,Fc(n,e.x,e.y),i&&n.player.inCopter&&(n.player.inCopter=!1,n.player.health=0,Ur(n)))}function Fc(n,e,t){at(n,e,t,"#ffb24a",30,340),at(n,e,t,"#5a534a",18,240),n.flashes.push({x:e,y:t,r:96,life:.25,max:.25}),n.scorch.push({x:e,y:t,r:52}),n.scorch.length>36&&n.scorch.shift(),n.wrecks.push({x:e,y:t,t:15}),n.wrecks.length>24&&n.wrecks.shift(),n.shake=Math.max(n.shake,15),n.events.push({type:"explosion",x:e,y:t,r:96})}function dd(n,e,t){n.fires.length>=80||n.fires.push({x:e,y:t,r:36,life:30,max:30,dmgT:0,spread:0,spreadT:n.rng.rand(3,7)})}function ud(n,e){for(let t=n.fires.length-1;t>=0;t--){let i=n.fires[t];if(i.life-=e,i.life<=0){n.fires.splice(t,1);continue}if(i.dmgT-=e,i.dmgT<=0){i.dmgT=.3;for(let[r,o]of[...n.structures]){let[a,l]=r.split(",").map(Number),c=st(a,l);he(i.x,i.y,c.x,c.y)<i.r*i.r&&Lr(n,r,22*.3)}for(let[r,o]of[...n.walls]){let a=St(r,o);xt(i.x,i.y,a[0],a[1],a[2],a[3])<i.r&&Vs(n,r,18*.3,"fire")}let s=n.player;!s.dead&&he(i.x,i.y,s.x,s.y)<(i.r+16)*(i.r+16)&&gs(n,15*.3,void 0,void 0,"fire");for(let r of n.units)r.dead||r.eliminated||he(i.x,i.y,r.x,r.y)<(i.r+12)*(i.r+12)&&xs(n,r,15*.3)}if(i.spreadT-=e,i.spreadT<=0&&i.spread<3&&(i.spreadT=n.rng.rand(4,8),n.rng.chance(.25))){let s=null,r=(i.r+64)*(i.r+64);for(let[o,a]of n.structures){let[l,c]=o.split(",").map(Number),h=st(l,c),f=he(i.x,i.y,h.x,h.y);f<r&&!kt(n,i.x,i.y,h.x,h.y)&&(r=f,s=h)}s&&(dd(n,s.x,s.y),i.spread++)}n.rng.chance(.3)&&n.particles.push({x:i.x+n.rng.rand(-10,10),y:i.y+n.rng.rand(-10,10),vx:n.wind*8,vy:-n.rng.rand(20,50),life:n.rng.rand(.6,1.4),max:1.4,r:n.rng.rand(2,5),col:"rgba(60,56,50,0.5)"})}}function pd(n,e){for(let t=n.satchels.length-1;t>=0;t--){let i=n.satchels[t];i.t-=e,i.t<=0&&(n.satchels.splice(t,1),kc(n,i.x,i.y,{splash:88,splashDmg:120,structDmg:50},i.from))}}function md(n,e){for(let t=n.grenades.length-1;t>=0;t--){let i=n.grenades[t],s=i.x,r=i.y,o=Math.pow(.9,e*60);i.vx*=o,i.vy*=o,i.x=nt(i.x+i.vx*e,8,ce.w-8),i.y=nt(i.y+i.vy*e,8,ce.h-8),i.bob+=e,i.t-=e,kt(n,s,r,i.x,i.y)&&(i.x=s,i.y=r,i.t=0),i.t<=0&&(n.grenades.splice(t,1),kc(n,i.x,i.y,Fs,i.from))}}function gd(n,e){for(let t=n.rockets.length-1;t>=0;t--){let i=n.rockets[t],s=i.x,r=i.y;i.x+=i.vx*e,i.y+=i.vy*e,i.life-=e,i.smoke-=e,i.smoke<=0&&(i.smoke=.016,n.particles.push({x:i.x,y:i.y,vx:n.rng.rand(-12,12),vy:n.rng.rand(-12,12),life:.5,max:.5,r:n.rng.rand(2,4),col:"rgba(120,114,104,0.5)"}));let o=i.life<=0||i.x<4||i.y<4||i.x>ce.w-4||i.y>ce.h-4;if(!o&&(Ir(n,i.x,i.y)||Cc(n,i.x,i.y,2))&&(o=!0),!o&&kt(n,s,r,i.x,i.y)&&(o=!0,i.x=s,i.y=r),!o){for(let a of n.animals)if(!a.dead&&he(i.x,i.y,a.x,a.y)<(a.r+3)*(a.r+3)){o=!0;break}}if(!o){for(let a of n.barrels)if(a.hp>0&&he(i.x,i.y,a.x,a.y)<(a.r+3)*(a.r+3)){o=!0;break}}if(!o){let a=(l,c)=>l&&!l.destroyed&&c!==i.from&&he(i.x,i.y,l.x,l.y)<1089;if(a(n.copter,Ve)&&(o=!0),!o){for(let l of n.units)if(a(l.copter,l.owner)){o=!0;break}}}o&&(n.rockets.splice(t,1),kc(n,i.x,i.y,i.w,i.from))}}function xd(n,e){for(let[t,i]of n.deploys){if(i.type!=="turret")continue;let[s,r]=t.split(",").map(Number),o=st(s,r),a=zo[i.tier||1];if(n.tick%30===0&&(i.tcOk=d0(n,i.owner)),i.tcOk===!1)continue;i.cd=Math.max(0,(i.cd||0)-e),i.reload>0&&(i.reload-=e,i.reload<=0&&(i.mag=a.mag)),i.targT=(i.targT||0)-e;let l=i.tgt||null;if(l){let c=l.ref;!c||c.dead||c.flying||c.eliminated||c===n.player&&(n.ghost||c.inCopter)||he(o.x,o.y,c.x,c.y)>a.range*a.range*1.2?(l=null,i.tgt=null):(l.x=c.x,l.y=c.y,l.vx=c.vx||0,l.vy=c.vy||0)}if(i.targT<=0){i.targT=.12;let c=a.range*a.range;l=null;let h=(d,u,p,x,m)=>{let g=he(o.x,o.y,d,u);g<c&&!p0(n,i.owner,o.x,o.y,d,u)&&(c=g,l={x:d,y:u,vx:p||0,vy:x||0,ref:m})};for(let d of n.animals)!d.dead&&he(o.x,o.y,d.x,d.y)<c&&h(d.x,d.y,d.vx,d.vy,d);for(let d of n.units)!d.dead&&!d.flying&&!d.eliminated&&d.owner!==i.owner&&h(d.x,d.y,d.vx,d.vy,d);let f=n.player;i.owner!==Ve&&!f.dead&&!f.inCopter&&!n.ghost&&h(f.x,f.y,f.vx,f.vy,f),i.tgt=l}if(l){let c=Q(o.x,o.y,l.x,l.y),h=Math.min(.45,c/a.speed)*a.lead,f=Math.atan2(l.y+l.vy*h-o.y,l.x+l.vx*h-o.x),d=(i.tier===3?16:10)*e;if(i.angle=Nc(i.angle,f,d),Math.abs(yd(i.angle,f))<.22&&i.cd<=0&&i.reload<=0)if(i.mag<=0)i.reload=a.reload;else{i.mag--,i.cd=a.rof;let u=i.angle+n.rng.rand(-a.spread,a.spread);In(n,{x:o.x+Math.cos(i.angle)*wc,y:o.y+Math.sin(i.angle)*wc,angle:u,speed:a.speed,dmg:a.dmg,from:i.owner,life:a.range/a.speed+.1,turret:!0}),n.events.push({type:"turretFire",x:o.x,y:o.y,a:i.angle})}}else{if(n.tick%18===0||i.trk===void 0){let h=null,f=(a.range*2.2)**2;for(let d of n.units)if(!d.dead&&!d.eliminated&&d.owner!==i.owner){let u=he(o.x,o.y,d.x,d.y);u<f&&(f=u,h=d)}i.trk=h}let c=i.trk&&!i.trk.dead?i.trk:null;if(c)i.angle=Nc(i.angle,Math.atan2(c.y-o.y,c.x-o.x),5*e);else{if(i.scanT-=e,i.scanT<=0){i.scanT=n.rng.rand(2.5,6.5);let h=u0(n,i.owner,o.x,o.y),f=h?Math.atan2(o.y-h.y,o.x-h.x):n.rng.rand(0,ze);i.scanAim=f+n.rng.rand(-1.1,1.1)}i.scanAim!==void 0&&(i.angle=Nc(i.angle,i.scanAim,1.6*e))}}}}function d0(n,e){for(let t of n.deploys.values())if(t.type==="cupboard"&&t.owner===e)return!0;return!1}function u0(n,e,t,i){let s=null,r=1e18;for(let[o,a]of n.deploys){if(a.type!=="cupboard"||a.owner!==e)continue;let[l,c]=o.split(",").map(Number),h=st(l,c),f=he(t,i,h.x,h.y);f<r&&(r=f,s=h)}return s}function p0(n,e,t,i,s,r){let o=Math.min(t,s),a=Math.max(t,s),l=!1;return m0(n,t,i,s,r,(c,h)=>{if(h.owner===e||h.type==="door"&&h.open)return!1;let f=St(c,h);if(ii(t,i,s,r,f[0],f[1],f[2],f[3]))return l=!0,!0}),l}function m0(n,e,t,i,s,r){let o=Math.hypot(i-e,s-t),a=Math.max(1,Math.ceil(o/(64*.5))),l=new Set;for(let c=0;c<=a;c++){let h=c/a,f=Math.floor((e+(i-e)*h)/64),d=Math.floor((t+(s-t)*h)/64),u=f*10007+d;if(!l.has(u)){l.add(u);for(let p of[Se("V",f,d),Se("V",f+1,d),Se("H",f,d),Se("H",f,d+1),Se("D",f,d)]){let x=n.walls.get(p);if(x&&x.hp>0&&r(p,x)===!0)return}}}}var Nc=(n,e,t)=>{let i=yd(n,e);return Math.abs(i)<=t?e:n+Math.sign(i)*t},yd=(n,e)=>{let t=(e-n)%ze;return t>Math.PI&&(t-=ze),t<-Math.PI&&(t+=ze),t};function _d(n,e){let t=n.player;for(let i=n.loot.length-1;i>=0;i--){let s=n.loot[i];s.life+=e,s.bob+=e;let r=Math.pow(.88,e*60);if(s.vx*=r,s.vy*=r,s.x+=s.vx*e,s.y+=s.vy*e,!t.dead&&!t.inCopter&&!n.ghost&&s.life>.35){let o=Q(t.x,t.y,s.x,s.y);if(o<150&&(s.x+=(t.x-s.x)/o*210*e,s.y+=(t.y-s.y)/o*210*e,o<20)){g0(n,s),n.loot.splice(i,1);continue}}if(s.life>.3){let o=null,a=32400;for(let l of n.units){if(l.dead||l.eliminated||l.flying)continue;let c=he(l.x,l.y,s.x,s.y);c<a&&(a=c,o=l)}if(o){let l=Math.sqrt(a)||1;if(s.x+=(o.x-s.x)/l*240*e,s.y+=(o.y-s.y)/l*240*e,l<22){x0(n,o,s),n.loot.splice(i,1);continue}}}s.life>120&&n.loot.splice(i,1)}}function g0(n,e){let t=n.weapons;e.kind==="ammo"?(t.rifle.reserve+=e.amt,t.pistol.reserve+=Math.ceil(e.amt*.4),t.shotgun.reserve+=Math.ceil(e.amt*.3)):e.kind==="rocket"?t.rocket.reserve+=e.amt:e.kind==="satchel"?n.inv.scrap+=e.amt*8:e.kind==="sniper"?(n.owned.sniper=!0,t.sniper.reserve+=12,Ge(n,n.player.x,n.player.y-20,"SNIPER unlocked!","#bfe3ff")):e.kind==="gun"?e.gun&&n.owned[e.gun]!==void 0&&(n.owned[e.gun]=!0,t[e.gun].reserve+=e.gun==="hmg"?60:30):n.inv[e.kind]=(n.inv[e.kind]||0)+e.amt}function x0(n,e,t){if(t.kind==="scrap")e.scrap+=t.amt;else if(t.kind==="rocket")e.rockets+=t.amt;else if(t.kind==="satchel")e.satchels+=t.amt;else if(t.kind==="ammo")e.scrap+=Math.ceil(t.amt/8);else if(t.kind==="sniper")e.scrap+=30;else if(t.kind==="gun"){let i={pistol:1,shotgun:2,rifle:3,hmg:4};(i[t.gun]||0)>(i[e.gun]||0)?e.gun=t.gun:e.scrap+=10}else e.inv[t.kind]=(e.inv[t.kind]||0)+t.amt}function vd(n,e){for(let t=n.wrecks.length-1;t>=0;t--){let i=n.wrecks[t];if(i.t-=e,i.t<=0){n.wrecks.splice(t,1);continue}n.rng.chance(.25)&&n.particles.push({x:i.x+n.rng.rand(-12,12),y:i.y+n.rng.rand(-8,8),vx:n.wind*10,vy:-n.rng.rand(24,60),life:n.rng.rand(.7,1.6),max:1.6,r:n.rng.rand(2.5,6),col:"rgba(50,46,44,0.55)"})}}function Md(n,e){let t=n.copter,i=n.player,s=n.cmd;if(!t||t.destroyed){i.inCopter=!1;return}s.left&&(t.angle-=ut.turn*e),s.right&&(t.angle+=ut.turn*e);let r=0;s.up?r=1:s.down&&(r=-.55);let o=s.run?ut.boost:ut.speed;t.vx+=Math.cos(t.angle)*ut.accel*r*e,t.vy+=Math.sin(t.angle)*ut.accel*r*e;let a=Math.pow(r!==0?ut.drag:ut.dragIdle,e);t.vx*=a,t.vy*=a;let l=Math.hypot(t.vx,t.vy);l>o&&(t.vx*=o/l,t.vy*=o/l),t.x+=t.vx*e,t.y+=t.vy*e,t.x<ut.r&&(t.x=ut.r,t.vx*=-.3),t.y<ut.r&&(t.y=ut.r,t.vy*=-.3),t.x>ce.w-ut.r&&(t.x=ce.w-ut.r,t.vx*=-.3),t.y>ce.h-ut.r&&(t.y=ce.h-ut.r,t.vy*=-.3),t.spd=Math.hypot(t.vx,t.vy),t.rotor+=e*(20+t.spd*.05),i.x=t.x,i.y=t.y,i.vx=t.vx,i.vy=t.vy}function bd(n,e,t){let i=n.world.shop,s={owner:e.owner,x:i.x,y:i.y+(i.r||120)+90,angle:0,vx:0,vy:0,rotor:0,hp:Ht.hp,max:Ht.hp,destroyed:!1,state:"idle",stateT:0,boardT:0,homeX:t.hx,homeY:t.hy,riders:[],destX:0,destY:0};return n.transports.push(s),Ge(n,s.x,s.y,"+transport heli","#bfe3ff"),s}function wd(n,e,t){return t.riders.length>=Ht.seats||t.state==="fly"||t.state==="unload"?!1:(e.aboard=t,e.flying=!0,e.wasRaid=!1,e.state="raid",t.riders.push(e),t.state==="idle"&&(t.state="board"),!0)}function Oc(n,e,t,i,s){let r=Q(e.x,e.y,t,i),o=Math.atan2(i-e.y,t-e.x);e.angle=wi(e.angle,o,s*3);let a=r>220?1:Math.max(.08,r/220);e.vx+=Math.cos(e.angle)*Ht.accel*a*s,e.vy+=Math.sin(e.angle)*Ht.accel*a*s;let l=Math.pow(Ht.drag,s);e.vx*=l,e.vy*=l;let c=Math.hypot(e.vx,e.vy);return c>Ht.speed&&(e.vx*=Ht.speed/c,e.vy*=Ht.speed/c),e.x=nt(e.x+e.vx*s,Ht.r,ce.w-Ht.r),e.y=nt(e.y+e.vy*s,Ht.r,ce.h-Ht.r),r}function Td(n,e){for(let t=n.transports.length-1;t>=0;t--){let i=n.transports[t];if(i.hp<=0||i.destroyed){Fc(n,i.x,i.y);for(let a of i.riders)a.aboard=null,a.flying=!1,a.x=i.x+n.rng.rand(-30,30),a.y=i.y+n.rng.rand(-30,30),Uc(n,a);n.transports.splice(t,1);continue}i.riders=i.riders.filter(a=>!a.dead&&a.aboard===i),i.stateT+=e;let s=i.riders.length>0;(s||i.state==="fly"||i.state==="unload"||i.state==="return")&&(i.rotor+=e*40);let r=i.riders.length?i.riders[0].raid:null,o=r&&r.bases?r.bases.find(a=>!a.dead):null;if(i.state==="idle"||i.state==="board"){if(s&&o){if(i.boardT+=e,i.riders.length>=2||i.boardT>5){let a=Q(i.x,i.y,o.hx,o.hy),l=Math.max(0,(a-620)/Math.max(1,a));i.destX=i.x+(o.hx-i.x)*l,i.destY=i.y+(o.hy-i.y)*l,i.state="fly",i.stateT=0,i.boardT=0}}else s?Oc(n,i,i.homeX-320,i.homeY,e):(i.vx=i.vy=0,i.boardT=0);for(let a of i.riders)a.x=i.x,a.y=i.y}else if(i.state==="fly"){let a=Oc(n,i,i.destX,i.destY,e);for(let l of i.riders)l.x=i.x,l.y=i.y;(a<200||!o||i.stateT>16)&&(i.state="unload",i.stateT=0)}else if(i.state==="unload"){for(let a of i.riders){let l=i.x+n.rng.rand(-60,60),c=i.y+n.rng.rand(-60,60);for(let h=0;h<14&&Mt(n,l,c,12);h++){let f=n.rng.rand(0,ze),d=n.rng.rand(40,150);l=i.x+Math.cos(f)*d,c=i.y+Math.sin(f)*d}a.x=nt(l,12,ce.w-12),a.y=nt(c,12,ce.h-12),a.aboard=null,a.flying=!1}i.riders=[],i.state="return",i.stateT=0}else i.state==="return"&&(Oc(n,i,i.homeX-320,i.homeY,e)<160||i.stateT>16)&&(i.state="idle",i.vx=i.vy=0)}}function Ed(n,e){if(n.world.rails.length&&(n.trainT-=e,n.trainT<=0&&n.trains.length<2)){n.trainT=n.rng.rand(30,90);let t=n.rng.pick(n.world.rails),s=n.rng.chance(.5)?t.pts:[...t.pts].reverse();n.trains.push({pts:s,seg:0,x:s[0].x,y:s[0].y,px:s[0].x,py:s[0].y,ang:0,speed:n.rng.rand(460,640),smokeT:0})}for(let t=n.trains.length-1;t>=0;t--){let i=n.trains[t];i.px=i.x,i.py=i.y;let s=i.speed*e;for(;s>0&&i.seg<i.pts.length-1;){let c=i.pts[i.seg],h=i.pts[i.seg+1],f=Q(c.x,c.y,h.x,h.y),d=Q(c.x,c.y,i.x,i.y),u=f-d;if(s<u){let p=(d+s)/f;i.x=c.x+(h.x-c.x)*p,i.y=c.y+(h.y-c.y)*p,s=0}else i.seg++,i.x=h.x,i.y=h.y,s-=u}i.ang=Math.atan2(i.y-i.py,i.x-i.px)||i.ang;let r=36,o=n.player;!o.dead&&!o.inCopter&&xt(o.x,o.y,i.px,i.py,i.x,i.y)<r&&gs(n,999,i.px,i.py,"train");for(let c of n.units)!c.dead&&!c.flying&&!c.eliminated&&xt(c.x,c.y,i.px,i.py,i.x,i.y)<r&&xs(n,c,999,i.px,i.py,"train");for(let c of n.animals)!c.dead&&xt(c.x,c.y,i.px,i.py,i.x,i.y)<r&&(c.hp=0,c.dead=!0,c.respawnT=n.rng.rand(11,18));for(let c of n.barrels)c.hp>0&&xt(c.x,c.y,i.px,i.py,i.x,i.y)<r&&(c.hp=0);let a=Q(i.px,i.py,i.x,i.y),l=Math.max(1,Math.ceil(a/64));for(let c=0;c<=l;c++){let h=c/l,f=Math.floor((i.px+(i.x-i.px)*h)/64),d=Math.floor((i.py+(i.y-i.py)*h)/64);Lr(n,f+","+d,9999),ms(n,f+","+d,9999,"train");for(let u of["V,"+f+","+d,"V,"+(f+1)+","+d,"H,"+f+","+d,"H,"+f+","+(d+1)])Vs(n,u,9999,"train")}if(i.smokeT-=e,i.smokeT<=0){i.smokeT=.28;let c=i.x+Math.cos(i.ang)*16,h=i.y+Math.sin(i.ang)*16;n.particles.push({x:c,y:h,vx:n.rng.rand(-7,7)+n.wind*5,vy:-n.rng.rand(6,16),life:n.rng.rand(11,15),max:15,r:n.rng.rand(5,10),col:"rgba(74,74,80,0.5)"}),n.particles.push({x:c,y:h,vx:n.rng.rand(-4,4),vy:-n.rng.rand(4,10),life:n.rng.rand(8,12),max:12,r:n.rng.rand(3,6),col:"rgba(40,40,46,0.45)"})}i.seg>=i.pts.length-1&&n.trains.splice(t,1)}for(let t of n.world.crossings)t.active=n.trains.some(i=>he(i.x,i.y,t.x,t.y)<820*820),t.gate+=((t.active?1:0)-t.gate)*Math.min(1,e*3)}function Ad(n,e){n.convoys.length||(n.convoyT-=e,n.convoyT<=0&&y0(n));for(let t=n.convoys.length-1;t>=0;t--){let i=n.convoys[t];if(i.hp<=0&&!i.dead){i.dead=!0,at(n,i.x,i.y,"#ffb24a",30,340),at(n,i.x,i.y,"#ffe2a0",16,220),n.flashes.push({x:i.x,y:i.y,r:96,life:.25,max:.25}),n.shake=Math.max(n.shake,12),n.scorch.push({x:i.x,y:i.y,r:60}),n.scorch.length>36&&n.scorch.shift(),rn(n,i.x,i.y,"metal",n.rng.randi(50,90)),rn(n,i.x,i.y,"scrap",n.rng.randi(60,110)),vt(n,i.x,i.y,"ammo",n.rng.randi(50,100));for(let c=0,h=n.rng.randi(3,5);c<h;c++)vt(n,i.x,i.y,"rocket",1);for(let c=0,h=n.rng.randi(2,4);c<h;c++)vt(n,i.x,i.y,"satchel",1);for(let c of i.guards)c.dead||vt(n,c.x,c.y,"ammo",n.rng.randi(8,16));Ge(n,i.x,i.y,"convoy destroyed!","#ffd0a0"),n.events.push({type:"explosion",x:i.x,y:i.y,r:96}),n.convoys.splice(t,1);continue}i.px=i.x,i.py=i.y;let s=cn.speed*e;for(;s>0&&i.seg<i.pts.length-1;){let c=i.pts[i.seg],h=i.pts[i.seg+1],f=Q(c.x,c.y,h.x,h.y),d=Q(c.x,c.y,i.x,i.y),u=f-d;if(s<u){let p=(d+s)/f;i.x=c.x+(h.x-c.x)*p,i.y=c.y+(h.y-c.y)*p,s=0}else i.seg++,i.x=h.x,i.y=h.y,s-=u}if(i.ang=Math.atan2(i.y-i.py,i.x-i.px)||i.ang,i.seg>=i.pts.length-1){n.convoys.splice(t,1);continue}i.gunCd=Math.max(0,i.gunCd-e);let r=null,o=cn.trange,a=n.player;if(!a.dead&&!a.inCopter&&!n.ghost){let c=Q(i.x,i.y,a.x,a.y);c<o&&!kt(n,i.x,i.y,a.x,a.y)&&!si(n,i.x,i.y,a.x,a.y)&&(r=a,o=c)}for(let c of n.units){if(c.dead||c.flying||c.eliminated)continue;let h=Q(i.x,i.y,c.x,c.y);h<o&&!kt(n,i.x,i.y,c.x,c.y)&&!si(n,i.x,i.y,c.x,c.y)&&(r=c,o=h)}r?(i.taim=Math.atan2(r.y-i.y,r.x-i.x),i.gunCd<=0&&(i.gunCd=cn.trof,In(n,{x:i.x+Math.cos(i.taim)*30,y:i.y+Math.sin(i.taim)*30,angle:i.taim+n.rng.rand(-.04,.04),speed:cn.bspeed,dmg:cn.tdmg,from:"convoy",life:.6}),at(n,i.x+Math.cos(i.taim)*30,i.y+Math.sin(i.taim)*30,"#ffd76b",2,90))):i.taim=i.ang;let l=[[-46,28],[-46,-28],[50,30],[50,-30]];for(let c=0;c<i.guards.length;c++){let h=i.guards[c];if(h.dead)continue;h.gunCd=Math.max(0,h.gunCd-e);let f=null,d=cn.grange;if(!a.dead&&!a.inCopter&&!n.ghost){let u=Q(h.x,h.y,a.x,a.y);u<d&&!kt(n,h.x,h.y,a.x,a.y)&&!si(n,h.x,h.y,a.x,a.y)&&(f=a,d=u)}for(let u of n.units){if(u.dead||u.flying||u.eliminated)continue;let p=Q(h.x,h.y,u.x,u.y);p<d&&!kt(n,h.x,h.y,u.x,u.y)&&!si(n,h.x,h.y,u.x,u.y)&&(f=u,d=p)}if(Q(h.x,h.y,i.x,i.y)>cn.leash&&(f=null),f){let u=Math.atan2(f.y-h.y,f.x-h.x);h.angle=wi(h.angle,u,e*9),h.gunCd<=0&&Math.abs(M0(h.angle,u))<.3&&(h.gunCd=cn.grof,In(n,{x:h.x+Math.cos(h.angle)*14,y:h.y+Math.sin(h.angle)*14,angle:h.angle+n.rng.rand(-.06,.06),speed:cn.bspeed,dmg:cn.gdmg,from:"convoy",life:.55}));let p=0,x=0;d>260?(p=Math.cos(u),x=Math.sin(u)):d<150&&(p=-Math.cos(u),x=-Math.sin(u));let m=h.x+p*cn.gspeed*e,g=h.y+x*cn.gspeed*e;Mt(n,m,g,12)||(h.x=m,h.y=g)}else{let u=i.x+Math.cos(i.ang)*l[c][0]-Math.sin(i.ang)*l[c][1],p=i.y+Math.sin(i.ang)*l[c][0]+Math.cos(i.ang)*l[c][1],x=Q(h.x,h.y,u,p);if(x>4){let m=cn.speed+50;h.x+=(u-h.x)/x*Math.min(x,m*e),h.y+=(p-h.y)/x*Math.min(x,m*e)}h.angle=wi(h.angle,i.ang,e*5)}}}}function y0(n){n.convoyT=n.rng.rand(180,300);let e=[];for(let r of n.world.roads){let o=-1,a=null;for(let l=0;l<=r.pts.length;l++){let c=l<r.pts.length&&n.world.landFactor(r.pts[l].x,r.pts[l].y)>.02;c&&o===-1&&(o=l),!c&&o!==-1&&((!a||l-o>a.len)&&(a={start:o,len:l-o}),o=-1)}a&&a.len>=10&&e.push({rd:r,...a})}if(!e.length)return;let t=e[Math.floor(n.rng.next()*e.length)],i=t.rd.pts.slice(t.start,t.start+t.len);n.rng.chance(.5)&&(i=[...i].reverse());let s={pts:i,seg:0,x:i[0].x,y:i[0].y,px:i[0].x,py:i[0].y,ang:0,taim:0,hp:cn.vhp,max:cn.vhp,gunCd:0,dead:!1,guards:[]};for(let r=0;r<4;r++)s.guards.push({x:i[0].x,y:i[0].y,hp:cn.ghp,max:cn.ghp,angle:0,gunCd:0,dead:!1});n.convoys.push(s),n.events.push({type:"convoy",x:s.x,y:s.y})}function Rd(n,e){if(!n.patrol){n.patrolT-=e,n.patrolT<=0&&_0(n);return}let t=n.patrol;t.rotor+=e*28;let i=n.teams.find(c=>c.owner===t.huntOwner&&!c.eliminated&&c.bases.some(h=>!h.dead));if(t.hp<=0){v0(n);return}let s,r,o=!1;if(!i||t.orbitT<=0){if(o=!0,s=t.exitX,r=t.exitY,t.x<-320||t.x>ce.w+320||t.y<-320||t.y>ce.h+320){n.patrol=null,n.patrolT=n.rng.rand(240,420);return}}else{let c=i.bases.find(f=>!f.dead);Q(t.x,t.y,c.hx,c.hy)>460&&!t.orbiting?(s=c.hx,r=c.hy):(t.orbiting=!0,t.orbitA+=.55*e,t.orbitT-=e,s=c.hx+Math.cos(t.orbitA)*Zn.orbitR,r=c.hy+Math.sin(t.orbitA)*Zn.orbitR)}let a=Math.atan2(r-t.y,s-t.x);t.angle=wi(t.angle,a,e*3);let l=Q(t.x,t.y,s,r);if(t.spd=Math.min(Zn.speed,Zn.speed*l/300+40),t.x+=Math.cos(t.angle)*t.spd*e,t.y+=Math.sin(t.angle)*t.spd*e,t.flash=Math.max(0,t.flash-e),i&&!o){if(t.strafeT-=e,t.strafeT<=0){t.strafeT=1.2;let c=null,h=Zn.strafeR;for(let f of n.units){if(f.owner!==t.huntOwner||f.dead||f.eliminated||f.flying)continue;let d=Q(t.x,t.y,f.x,f.y);d<h&&(h=d,c=f)}if(c){for(let f=0;f<5;f++){let d=.18+f*.02,u=c.x+c.vx*d+n.rng.rand(-26,26),p=c.y+c.vy*d+n.rng.rand(-26,26);In(n,{x:t.x,y:t.y,angle:Math.atan2(p-t.y,u-t.x),speed:900,dmg:9,from:"patrol",life:1,col:"hmg"})}t.flash=.12}}for(let c of n.units)if(!(c.owner!==t.huntOwner||c.dead||c.eliminated||c.flying)&&!(he(t.x,t.y,c.x,c.y)>Zn.flakR*Zn.flakR)&&(c.flakT=(c.flakT||0)-e,c.flakT<=0)){c.flakT=1;let h=Q(t.x,t.y,c.x,c.y)/1100,f=t.x+Math.cos(t.angle)*t.spd*h,d=t.y+Math.sin(t.angle)*t.spd*h,u=Math.atan2(d-c.y,f-c.x)+n.rng.rand(-.07,.07);c.angle=u;let p=c.x+Math.cos(u)*1100*.7,x=c.y+Math.sin(u)*1100*.7;n.events.push({type:"flak",x0:c.x,y0:c.y,x1:p,y1:x}),xt(t.x,t.y,c.x,c.y,p,x)<40&&(t.hp-=6,at(n,t.x,t.y,"#aab1b8",3,120))}}}function _0(n){let e=null,t=-1;for(let o of n.teams){if(o.eliminated)continue;let a=o.bases.find(u=>!u.dead);if(!a)continue;let l=n.units.filter(u=>u.owner===o.owner&&!u.dead&&!u.eliminated).length,c=0;for(let u of n.structures.values())u.owner===o.owner&&c++;let h=n.deploys.get(a.tcKey),f=h?h.store.wood+h.store.stone+h.store.metal:0,d=l*10+c*2+f*.01;d>t&&(t=d,e={t:o,rec:a})}if(!e){n.patrolT=n.rng.rand(120,240);return}let{t:i,rec:s}=e,r=s.hx>ce.w/2;n.patrol={huntOwner:i.owner,huntId:i.id,x:r?-200:ce.w+200,y:nt(s.hy+n.rng.rand(-600,600),200,ce.h-200),exitX:r?ce.w+360:-360,exitY:s.hy,angle:0,rotor:0,spd:0,hp:Zn.hp,max:Zn.hp,orbitA:n.rng.rand(0,ze),orbitT:Zn.orbitT,orbiting:!1,strafeT:1,flash:0},Ge(n,s.hx,s.hy-80,"Patrol helicopter inbound!","#ffb84a"),n.elims.push({text:"PATROL HELI hunts Base "+(i.id+1),t:10})}function v0(n){let e=n.patrol;at(n,e.x,e.y,"#ffb24a",40,360),at(n,e.x,e.y,"#ff9b3d",24,280),n.scorch.push({x:e.x,y:e.y,r:64}),n.scorch.length>36&&n.scorch.shift(),n.wrecks.push({x:e.x,y:e.y,t:15});for(let t=0,i=n.rng.randi(4,6);t<i;t++)vt(n,e.x+n.rng.rand(-30,30),e.y+n.rng.rand(-30,30),"rocket",1);for(let t=0,i=n.rng.randi(2,3);t<i;t++)vt(n,e.x+n.rng.rand(-30,30),e.y+n.rng.rand(-30,30),"satchel",1);vt(n,e.x,e.y,"ammo",n.rng.randi(100,180)),rn(n,e.x,e.y,"scrap",n.rng.randi(80,150)),rn(n,e.x,e.y,"metal",n.rng.randi(50,90)),n.elims.push({text:"PATROL HELI DOWN",t:12}),n.events.push({type:"explosion",x:e.x,y:e.y,r:110}),n.shake=Math.max(n.shake,14),n.patrol=null,n.patrolT=n.rng.rand(240,420)}var M0=(n,e)=>{let t=(e-n)%ze;return t>Math.PI&&(t-=ze),t<-Math.PI&&(t+=ze),t};function Cd(n,e){let t=n.weather;t.timer-=e,t.timer<=0&&(t.mode==="clear"?(t.mode="rain",t.timer=n.rng.rand(8,16),t.boltT=n.rng.rand(3,8)):(t.mode="clear",t.timer=n.rng.rand(90,170)));let i=t.mode==="rain"?1:0;t.rain+=(i-t.rain)*Math.min(1,e*.5),t.rain>.4&&(t.boltT-=e,t.boltT<=0&&(t.boltT=n.rng.rand(4,13),t.flash=1,n.events.push({type:"bolt"}))),t.flash=Math.max(0,t.flash-e*2.4),t.fogTimer-=e,t.fogTimer<=0&&(t.fogOn=!t.fogOn,t.fogTimer=t.fogOn?n.rng.rand(28,60):n.rng.rand(45,95)),t.fog+=((t.fogOn?1:0)-t.fog)*Math.min(1,e*.22),n.wind=(Math.sin(n.t*.5)*.5+Math.sin(n.t*1.9+1.1)*.5)*(1+t.rain*1.7)}function Sd(n,e){if(!n.plane&&!n.airdrop&&(n.airdropT-=e,n.airdropT<=0&&(Id(n),n.airdropT=n.rng.rand(120,300))),n.plane){let t=n.plane;t.x+=t.vx*e,t.prop+=e*30,!t.released&&(t.vx>0&&t.x>=t.dropX||t.vx<0&&t.x<=t.dropX)&&(t.released=!0,n.airdrop={x:t.dropX,y:t.dropY-780,gy:t.dropY,hp:90,max:90,fall:0,sway:n.rng.rand(0,ze),loot:b0(n)},Ge(n,t.dropX,t.dropY,"Airdrop incoming!","#ffe07a"),n.events.push({type:"airdropCalled",x:t.dropX,y:t.dropY})),(t.x<-300||t.x>ce.w+300)&&(n.plane=null)}if(n.airdrop){let t=n.airdrop;if(t.fall<1){t.fall=Math.min(1,t.fall+e*.16);let i=t.fall*t.fall*(3-2*t.fall);t.y=t.gy-780+780*i,t.sway+=e*1.5}else t.hp<=0&&(w0(n,t),n.airdrop=null)}}function Id(n,e,t){let i=e,s=t;if(i===void 0){for(let o=0;o<24;o++){let a=n.rng.rand(.16*ce.w,.84*ce.w),l=n.rng.rand(.16*ce.h,.84*ce.h);if(!(Q(a,l,n.world.shop.x,n.world.shop.y)<gt+160)){i=a,s=l;break}}i===void 0&&(i=ce.w*.25,s=ce.h*.25)}let r=n.rng.chance(.5);n.plane={x:i+(r?-1700:1700),y:s,vx:r?820:-820,dropX:i,dropY:s,released:!1,prop:0}}function b0(n){let e=[["scrap",n.rng.randi(50,110)]];return n.rng.chance(.85)&&e.push(["rocket",n.rng.randi(2,6)]),n.rng.chance(.85)&&e.push(["ammo",n.rng.randi(70,150)]),n.rng.chance(.55)&&e.push(["metal",n.rng.randi(25,60)]),n.rng.chance(.5)&&e.push(["wood",n.rng.randi(30,70)]),n.rng.chance(.4)&&e.push(["sniper",1]),e}function w0(n,e){at(n,e.x,e.y,"#ffd27a",30,300),at(n,e.x,e.y,"#d2664a",16,220);for(let[t,i]of e.loot)if(t==="rocket")for(let s=0;s<i;s++)vt(n,e.x,e.y,"rocket",1);else t==="sniper"?vt(n,e.x,e.y,"sniper",1):t==="ammo"?vt(n,e.x,e.y,"ammo",i):rn(n,e.x,e.y,t,i);Ge(n,e.x,e.y-30,"AIRDROP LOOTED!","#ffe07a")}function Bc(n,e,t){if(n.signal)return!1;let i=n.player,s=Q(i.x,i.y,e,t);if(s>700){let r=700/s;e=i.x+(e-i.x)*r,t=i.y+(t-i.y)*r}return bt(n,e,t)?(Ge(n,i.x,i.y-20,"Not in the safe zone","#d2664a"),!1):(n.inv.signal|0)<1?(Ge(n,i.x,i.y-20,"No supply signal \u2014 buy one at the trade zone","#d2664a"),!1):(n.inv.signal--,n.signal={x:e,y:t,t:0,dur:6,puff:0,called:!1},Ge(n,i.x,i.y-20,"Supply signal out \u2014 everyone saw it","#c9a0ff"),!0)}function Pd(n,e,t){return n.signal||n.plane||n.airdrop?!1:(n.signal={x:e,y:t,t:0,dur:6,puff:0,called:!1},!0)}function Ld(n,e){let t=n.signal;t&&(t.t+=e,t.puff-=e,t.puff<=0&&(t.puff=.12,at(n,t.x+n.rng.rand(-8,8),t.y+n.rng.rand(-6,2),"#a96bd4",3,60)),!t.called&&t.t>t.dur&&!n.plane&&!n.airdrop&&(Id(n,t.x,t.y),t.called=!0),(t.called||t.t>t.dur+60)&&(n.signal=null))}function Dd(n,e){let t=n.quarry;if(!t)return;let i=new Set;!n.player.dead&&!n.player.inCopter&&!n.ghost&&he(n.player.x,n.player.y,t.x,t.y)<t.r*t.r&&i.add(Ve);for(let s of n.units)s.dead||s.eliminated||s.flying||he(s.x,s.y,t.x,t.y)<t.r*t.r&&i.add(s.owner);if(i.size===1){let s=[...i][0];if(s!==t.owner){if(t.capOwner!==s&&(t.capOwner=s,t.capT=0),t.capT+=e,t.capT>=Yn.capT){t.owner=s,t.capT=0,t.capOwner=null,t.payT=0;let r=n.teams.find(a=>a.owner===s),o=s===Ve?"You":"Base "+(r?r.id+1:"?");Ge(n,t.x,t.y-44,"Quarry captured!","#cdd6a3"),n.elims.push({text:"QUARRY \u2192 "+o,t:10})}}else t.capT=0}else t.capT=Math.max(0,t.capT-e);if(t.owner&&t.owner!==Ve){let s=n.teams.find(o=>o.owner===t.owner);s&&!s.eliminated&&n.units.some(o=>o.owner===t.owner&&o.primary&&!o.eliminated)||(t.owner=null)}if(t.owner&&(t.arm+=e,t.payT+=e,t.payT>=Yn.payEvery)){if(t.payT=0,t.paid++,t.owner===Ve)n.inv.stone+=Yn.pay.stone,n.inv.metal+=Yn.pay.metal,n.inv.scrap+=Yn.pay.scrap;else{let s=n.teams.find(a=>a.owner===t.owner),r=s&&s.bases.find(a=>!a.dead),o=r&&n.deploys.get(r.tcKey);o&&o.store&&(o.store.stone+=Yn.pay.stone,o.store.metal+=Yn.pay.metal,o.store.scrap+=Yn.pay.scrap)}Ge(n,t.x,t.y-44,"+stone +metal +scrap","#cdd6a3")}}function Nd(n,e){if(!n.lockedCrate){if(n.crateT-=e,n.crateT<=0){let s=n.world.monuments.filter(a=>a.type!=="quarry"),r=n.rng.pick(s),o=n.rng.rand(0,ze);n.lockedCrate={x:r.x+Math.cos(o)*(r.r+90),y:r.y+Math.sin(o)*(r.r+90),mon:r.name,t:Os.hackT,started:!1,blink:0},Ge(n,n.lockedCrate.x,n.lockedCrate.y-30,"Locked crate at the "+r.name+"!","#ffb84a"),n.elims.push({text:"LOCKED CRATE \u2014 "+r.name,t:12}),n.crateT=n.rng.rand(240,360)}return}let t=n.lockedCrate;t.blink+=e;let i=!n.player.dead&&!n.ghost&&he(n.player.x,n.player.y,t.x,t.y)<Os.r*Os.r;if(!i){for(let s of n.units)if(!(s.dead||s.eliminated||s.flying)&&he(s.x,s.y,t.x,t.y)<Os.r*Os.r){i=!0;break}}if(i&&(t.started=!0,t.t-=e),t.t<=0){at(n,t.x,t.y,"#ffd27a",30,300),at(n,t.x,t.y,"#d2664a",16,220),rn(n,t.x,t.y,"scrap",n.rng.randi(80,140)),rn(n,t.x,t.y,"metal",n.rng.randi(40,80));for(let s=0,r=n.rng.randi(3,6);s<r;s++)vt(n,t.x+n.rng.rand(-20,20),t.y+n.rng.rand(-20,20),"rocket",1);for(let s=0,r=n.rng.randi(2,4);s<r;s++)vt(n,t.x+n.rng.rand(-20,20),t.y+n.rng.rand(-20,20),"satchel",1);vt(n,t.x,t.y,"ammo",n.rng.randi(80,160)),n.rng.chance(.5)&&vt(n,t.x,t.y,"sniper",1),Ge(n,t.x,t.y-24,"Locked crate opened!","#ffb84a"),n.lockedCrate=null}}function zc(n){let e=n.rng,t=ce.w,i=ce.h,s=(o,a,l)=>{let c=l?e.rand(86,140):e.rand(70,128),h=[],f=c;for(let d=0,u=e.randi(5,9);d<u;d++){let p=e.rand(-.95,.95)*c,x=e.rand(-.42,.42)*c,m=c*e.rand(.55,1);h.push({dx:p,dy:x,r:m}),f=Math.max(f,Math.hypot(p,x)+m)}return{x:o,y:a,puffs:h,r:f,op:l?e.rand(.92,1):e.rand(.7,1),sp:e.rand(9,19),heavy:l}};n.clouds=[];let r=e.randi(7,10);for(;r>0;)if(r>=2&&e.chance(.5)){let o=e.rand(0,t),a=e.rand(0,i),l=Math.min(r,e.randi(2,3));for(let c=0;c<l;c++)n.clouds.push(s(o+e.rand(-150,150),a+e.rand(-95,95),!0));r-=l}else n.clouds.push(s(e.rand(0,t),e.rand(0,i),e.chance(.4))),r--;n.fogBanks=[];for(let o=0,a=e.randi(13,20);o<a;o++){let l=e.rand(150,320),c=[];for(let h=0,f=e.randi(2,5);h<f;h++)c.push({dx:e.rand(-1,1)*l,dy:e.rand(-.6,.6)*l,r:l*e.rand(.7,1.2)});n.fogBanks.push({x:e.rand(0,t),y:e.rand(0,i),r:l,puffs:c,dens:e.rand(.5,1.15),sp:e.rand(5,12),vy:e.rand(-3,3)})}n.fireflies=[];for(let o=0,a=e.randi(16,28);o<a;o++)n.fireflies.push({x:e.rand(t/3+30,2*t/3-30),y:e.rand(60,i-60),vx:e.rand(-28,28),vy:e.rand(-28,28),ph:e.rand(0,ze),fs:e.rand(2.5,4.5),wT:e.rand(.5,1.7)})}function Ud(n,e){let t=ce.w,i=ce.h;n.clouds||zc(n);for(let o of n.clouds)o.x+=o.sp*e,o.x-o.r>t+160&&(o.x=-o.r-n.rng.rand(0,500),o.y=n.rng.rand(0,i));for(let o of n.fogBanks)o.x+=o.sp*e,o.y+=o.vy*e,o.x-o.r>t+220&&(o.x=-o.r-n.rng.rand(0,450),o.y=n.rng.rand(0,i)),o.y<-o.r?o.y=i+o.r*.5:o.y>i+o.r&&(o.y=-o.r*.5);let s=t/3+20,r=2*t/3-20;for(let o of n.fireflies){if(o.wT-=e,o.wT<=0){o.wT=n.rng.rand(.5,1.7);let a=n.rng.rand(0,ze),l=n.rng.rand(14,40);o.vx=Math.cos(a)*l,o.vy=Math.sin(a)*l}o.x+=o.vx*e,o.y+=o.vy*e,o.x<s&&(o.x=s,o.vx=Math.abs(o.vx)),o.x>r&&(o.x=r,o.vx=-Math.abs(o.vx)),o.y=nt(o.y,40,i-40),o.ph+=o.fs*e}for(let o=n.footprints.length-1;o>=0;o--)n.footprints[o].t+=e,n.footprints[o].t>=10&&n.footprints.splice(o,1)}function Qo(n,e,t){if(e.fpAcc=(e.fpAcc||0)+Q(e.x,e.y,e.fpX||e.x,e.fpY||e.y),e.fpX=e.x,e.fpY=e.y,e.fpAcc<30)return;e.fpAcc=0,e.fpSide=!e.fpSide;let i=e.fpSide?5:-5;n.footprints.push({x:e.x-Math.sin(t)*i,y:e.y+Math.cos(t)*i,a:t,t:0}),n.footprints.length>700&&n.footprints.shift()}function kd(n,e){for(let t of n.resources)t.amount>=t.max||(t.regen+=e,t.amount<=0?t.regen>=29&&(t.amount=t.max,t.regen=0):t.regen>=2.5&&(t.amount=Math.min(t.max,t.amount+Math.ceil(t.max*.05)),t.regen=0));for(let t of n.barrels)t.hp>0||(t.respawnT-=e,t.respawnT<=0&&(t.hp=t.max))}var Fd={1:"pistol",2:"rifle",3:"minigun",4:"rocket",6:"sniper",7:"shotgun",8:"hmg"};function kr(n){let e=Fd[n.slot];return e&&n.owned[e]?e:null}function Od(n,e){let t=n.player,i=n.cmd;if(t.gatherCd=Math.max(0,(t.gatherCd||0)-e),t.recoil=Math.max(0,t.recoil-42*e),t.swing=Math.max(0,t.swing-e),t.hurt=Math.max(0,t.hurt-e),t.invuln=Math.max(0,t.invuln-e),t.dead){t.deadT-=e,t.deadT<=0&&A0(n);return}if(t.poison>0&&(t.poison-=e,t.regenDelay=Math.max(t.regenDelay,1.5),t.health-=3.2*e,n.tick%60===0&&Ge(n,t.x,t.y-20,"poison","#7bbf4f"),t.health<=0)){Ur(n,!0);return}if(t.regenDelay=Math.max(0,t.regenDelay-e),t.regenDelay<=0&&t.health<t.maxhp&&(t.health=Math.min(t.maxhp,t.health+12*e)),t.inCopter){Md(n,e);return}t.angle=Math.atan2(i.my-t.y,i.mx-t.x);let s=(i.right?1:0)-(i.left?1:0),r=(i.down?1:0)-(i.up?1:0),o=i.run?t.run:t.walk,a=kr(n);a==="minigun"&&n.weapons.minigun.spin>=sn.minigun.windup&&(o*=.4);let l=n.world.lakeAt(t.x,t.y);l&&!l.frozen&&(o*=.5);let c=Math.hypot(s,r),h=0,f=0;if(c>0&&(h=s/c*o,f=r/c*o),l&&l.frozen){let y=Math.min(1,e*1.1);if(t.vx+=(h-t.vx)*y,t.vy+=(f-t.vy)*y,c===0){let w=Math.pow(.6,e);t.vx*=w,t.vy*=w}}else t.vx=h,t.vy=f;t.moving=Math.hypot(t.vx,t.vy)>10;let d={passOwner:Ve,openOwnDoors:!1},u=t.x+t.vx*e,p=t.y+t.vy*e;Mt(n,t.x,t.y,Yt,d)?(t.x=u,t.y=p):(Mt(n,u,t.y,Yt,d)?t.vx*=-.2:t.x=u,Mt(n,t.x,p,Yt,d)?t.vy*=-.2:t.y=p),t.x=nt(t.x,Yt,ce.w-Yt),t.y=nt(t.y,Yt,ce.h-Yt);for(let y of n.resources)y.amount>0&&ea(t,y.x,y.y,y.r+Yt-6);for(let y of n.barrels)y.hp>0&&ea(t,y.x,y.y,y.r+Yt-4);for(let y of n.world.boulders)ea(t,y.x,y.y,y.r+Yt-2);ea(t,n.world.shop.x,n.world.shop.y,n.world.shop.r+Yt),t.moving&&Qo(n,t,Math.atan2(t.vy,t.vx));let x=a&&n.weapons[a],m=a&&sn[a];if(x&&(x.cd=Math.max(0,x.cd-e),x.reloading>0&&(x.reloading-=e,x.reloading<=0))){let y=Math.min(m.magSize-x.ammo,x.reserve);x.ammo+=y,x.reserve-=y}let g=!n.buildMode&&!t.dead&&!t.inCopter&&!n.shopOpen&&!n.storeOpen;if(g&&a==="minigun"){let y=n.weapons.minigun;i.fireHeld?y.spin=Math.min(m.windup+.4,y.spin+e):y.spin=Math.max(0,y.spin-1.6*e),i.fireHeld&&y.spin>=m.windup&&ta(n)}else g&&i.fireHeld&&m&&m.auto?ta(n):g&&i.fireHeld&&n.slot===0&&t.gatherCd<=0&&(t.gatherCd=.34,T0(n));n.rapidRockets&&g&&i.fireHeld&&(n.rapidCd=Math.max(0,(n.rapidCd||0)-e),n.rapidCd<=0&&!bt(n,t.x,t.y)&&(n.rapidCd=.1,Nr(n,t.x+Math.cos(t.angle)*26,t.y+Math.sin(t.angle)*26,t.angle,Ve)))}function ea(n,e,t,i){let s=he(n.x,n.y,e,t);if(s<i*i&&s>.01){let r=Math.sqrt(s);n.x+=(n.x-e)/r*(i-r),n.y+=(n.y-t)/r*(i-r)}}function ta(n){let e=n.player,t=kr(n);if(!t)return;if(bt(n,e.x,e.y)){pn(n,"No weapons in the safe zone");return}let i=n.weapons[t],s=sn[t];if(i.reloading>0||i.cd>0)return;if(i.ammo<=0){Hc(n);return}i.ammo--,i.cd=s.rof;let r=s.spread;t==="rifle"&&e.rifleLaser&&(r*=.4);let o=s.pellets||1;for(let a=0;a<o;a++){let l=e.angle+n.rng.rand(-r,r),c=e.x+Math.cos(l)*26,h=e.y+Math.sin(l)*26;s.rocket?Nr(n,c,h,l,Ve):In(n,{x:c,y:h,angle:l,speed:s.speed,dmg:s.dmg,from:Ve,life:s.range,col:s.tracer||null})}e.recoil=Math.min(12,e.recoil+s.kick),n.muzzle={x:e.x+Math.cos(e.angle)*30,y:e.y+Math.sin(e.angle)*30,a:e.angle,t:s.rocket?.08:.05},n.events.push({type:"shot",x:e.x,y:e.y,a:e.angle,weapon:t})}function Hc(n){let e=kr(n);if(!e)return;let t=n.weapons[e],i=sn[e];t.reloading>0||t.ammo>=i.magSize||t.reserve<=0||(t.reloading=i.reloadT)}function Fr(n,e){if(n.player.inCopter)return;let t=Fd[e];if(t&&!n.owned[t]){pn(n,"locked \u2014 buy it at the trade shop");return}n.slot=e,n.buildMode=e===5,n.rapidRockets&&e!==4&&(n.rapidRockets=!1)}function T0(n){let e=n.player;e.swing=.16;let t=null,i=Fo*.85;for(let o of n.animals){if(o.dead)continue;let a=Q(e.x,e.y,o.x,o.y)-o.r;a<i&&(i=a,t=o)}if(t){jo(n,t,18,e.x,e.y,Ve);return}if(E0(n))return;let s=null,r=Fo;for(let o of n.resources){if(o.amount<=0)continue;let a=Q(e.x,e.y,o.x,o.y)-o.r;a<r&&(r=a,s=o)}if(s){let o=s.base==="wood"?8:s.base==="stone"?6:5,a=Math.min((n.jackhammer?3:1)*o,s.amount);s.amount-=a,s.regen=0,n.inv[s.base]+=a,Ge(n,s.x,s.y-s.r,"+"+a+" "+s.base,"#d8e0c2"),at(n,s.x,s.y,"#caa07a",n.jackhammer?6:3,140),n.events.push({type:"harvest",x:s.x,y:s.y,kind:s.base,jack:n.jackhammer})}}function E0(n){let e=n.player,t=Fo+38.4,i=null,s=t,r=null,o=null;for(let[c,h]of n.structures){if(h.owner!==Ve||h.hp>=h.max)continue;let[f,d]=c.split(",").map(Number),u=st(f,d),p=Q(e.x,e.y,u.x,u.y);p<s&&(s=p,i=h,r="cell",o=c)}for(let[c,h]of n.walls){if(h.owner!==Ve||h.hp>=h.max)continue;let f=St(c,h),d=Q(e.x,e.y,(f[0]+f[2])/2,(f[1]+f[3])/2);d<s&&(s=d,i=h,r="wall",o=c)}for(let[c,h]of n.deploys){if(h.owner!==Ve||h.hp>=h.max)continue;let[f,d]=c.split(",").map(Number),u=st(f,d),p=Q(e.x,e.y,u.x,u.y);p<s&&(s=p,i=h,r="deploy",o=c)}if(!i)return!1;let a=Zt[i.type],l=r==="deploy"?0:void 0;return rd(n,i,a,[n.inv],l)&&Ge(n,e.x,e.y-20,"repaired","#9ad06a"),!0}function Bd(n){let e=n.player;if(e.inCopter){let a=Math.floor(e.x/64),l=Math.floor(e.y/64);if(n.structures.has(qe(a,l))){pn(n,"Can't land on a base");return}e.inCopter=!1,e.y+=ut.r+Yt+6;return}if(n.copter&&!n.copter.destroyed&&Q(e.x,e.y,n.copter.x,n.copter.y)<ut.r+Yt+34){e.inCopter=!0,pn(n,"liftoff");return}let t=n.world.shop;if(Q(e.x,e.y,t.x,t.y)<t.r+Yt+44){n.shopOpen=!n.shopOpen;return}let i=null,s=64*1.4,r=null,o=null;for(let[a,l]of n.walls){if(l.type!=="door"||l.hp<=0)continue;let c=St(a,l),h=Q(e.x,e.y,(c[0]+c[2])/2,(c[1]+c[3])/2);h<s&&(s=h,i=l,r="door",o=a)}for(let[a,l]of n.deploys){if(!(l.type==="cupboard"||l.type==="box"))continue;let[c,h]=a.split(",").map(Number),f=st(c,h),d=Q(e.x,e.y,f.x,f.y);d<s&&(s=d,i=l,r="store",o=a)}if(i){if(i.lock&&i.lock.by!==Ve){pn(n,"Locked \u2014 not your base");return}r==="door"?(i.open=!i.open,n.nav.stamp++):n.storeOpen=o}}function Or(n,e,t){let i=n.buildPiece,s=Zt[i],r=Math.floor(e/64),o=Math.floor(t/64);if(s.cat==="cell")return{gx:r,gy:o};if(s.cat==="diag")return{key:Se("D",r,o)};let a=e-r*64,l=t-o*64;return{key:[{key:Se("V",r,o),d:a},{key:Se("V",r+1,o),d:64-a},{key:Se("H",r,o),d:l},{key:Se("H",r,o+1),d:64-l}].sort((h,f)=>h.d-f.d)[0].key}}function zd(n){let e=Or(n,n.cmd.mx,n.cmd.my),t=n.buildPiece;id(n,Ve,t,e,[n.inv],{rot:n.buildRot})?(Zt[t].tc&&Ge(n,n.cmd.mx,n.cmd.my,"base claimed","#9ad06a"),n.events.push({type:"place",x:n.cmd.mx,y:n.cmd.my})):pn(n,"can't place there")}function Hd(n){let e=Or(n,n.cmd.mx,n.cmd.my),t=Math.floor(n.cmd.mx/64),i=Math.floor(n.cmd.my/64),s=(l,c)=>{for(let h in l.cost)n.inv[h]+=Math.ceil(l.cost[h]/2);(c.mat==="stone"||c.mat==="metal")&&(n.inv.stone+=7),c.mat==="metal"&&(n.inv.metal+=10)};if(e.key){let l=n.walls.get(e.key);if(l&&l.owner===Ve){s(Zt[l.type],l),n.walls.delete(e.key),n.nav.stamp++;return}}let r=qe(t,i),o=n.deploys.get(r);if(o&&o.owner===Ve){s(Zt[o.type],o),n.deploys.delete(r),n.nav.stamp++;return}let a=n.structures.get(r);if(a&&a.owner===Ve){s(Zt[a.type],a),n.structures.delete(r),Zo(n,r),n.nav.stamp++;return}}function Vd(n){let e=n.cmd.mx,t=n.cmd.my,i=Math.floor(e/64),s=Math.floor(t/64);if(n.buildMode){let r=Or(n,e,t),o=a=>a&&a.owner===Ve&&sd(n,a,Zt[a.type],[n.inv]);for(let a of[Se("V",i,s),Se("V",i+1,s),Se("H",i,s),Se("H",i,s+1)]){let l=n.walls.get(a);if(!l)continue;let c=St(a,l);if(Math.min(Q(e,t,c[0],c[1]),Q(e,t,c[2],c[3]),Q(e,t,(c[0]+c[2])/2,(c[1]+c[3])/2))<18&&o(l))return}if(o(n.structures.get(qe(i,s))))return}else{let r=n.deploys.get(qe(i,s));if(r&&r.type==="turret"&&r.owner===Ve){let o=(r.tier||1)+1,a=kf[o];a&&n.inv.scrap>=a&&(n.inv.scrap-=a,r.tier=o,r.mag=30,r.reload=0,Ge(n,e,t,"turret T"+o,"#9ab0d0"))}}}function Gd(n){let e=n.player;if(n.inv.grenade<=0){pn(n,"No grenades \u2014 buy at the trade shop");return}if(bt(n,e.x,e.y)){pn(n,"No weapons in the safe zone");return}n.inv.grenade--;let t=Math.min(560,Q(e.x,e.y,n.cmd.mx,n.cmd.my)),i=Math.max(120,t*6)*.2,s=e.angle;n.grenades.push({x:e.x+Math.cos(s)*22,y:e.y+Math.sin(s)*22,vx:Math.cos(s)*i,vy:Math.sin(s)*i,t:Fs.fuse,from:Ve,bob:0})}function Wd(n){let e=n.player;if(n.inv.fence<=0){pn(n,"No fences \u2014 buy more (10 wood)");return}let t=e.x+Math.cos(e.angle)*34,i=e.y+Math.sin(e.angle)*34;if(n.structures.has(qe(Math.floor(t/64),Math.floor(i/64)))){pn(n,"Not on a base");return}n.inv.fence--;let s=e.angle+Math.PI/2;n.fences.push({x:t,y:i,a:s,owner:Ve,hp:Gi.hp,max:Gi.hp,t:Gi.life,x0:t-Math.cos(s)*Gi.half,y0:i-Math.sin(s)*Gi.half,x1:t+Math.cos(s)*Gi.half,y1:i+Math.sin(s)*Gi.half}),n.needFenceRefresh=!0}function A0(n){let e=n.player;e.dead=!1,e.health=e.maxhp,e.invuln=1.8,e.poison=0;let t=null;for(let[i,s]of n.deploys)if(s.type==="cupboard"&&s.owner===Ve){let[r,o]=i.split(",").map(Number),a=st(r,o);t={x:a.x,y:a.y+64};break}if(t)e.x=t.x,e.y=t.y;else for(let i=0;i<60;i++){let s=n.rng.rand(600,ce.w-600),r=n.rng.rand(600,ce.h-600);if(!(!n.world.onLand(s,r)||n.world.lakeAt(s,r)||bt(n,s,r)||Mt(n,s,r,Yt))){e.x=s,e.y=r;break}}n.copter&&n.copter.destroyed&&(n.copter.destroyed=!1,n.copter.hp=n.copter.max,n.copter.x=e.x+120,n.copter.y=e.y);for(let i of n.animals)i.aggro=null,i.foe=null,!i.dead&&he(i.x,i.y,e.x,e.y)<4e4&&(i.dead=!0,i.respawnT=.6)}function Xd(n,e){let[t,i,s]=Ft.trades[e];if(n.inv[t]<i){pn(n,"not enough "+t);return}n.inv[t]-=i,n.inv.scrap+=s}function qd(n,e){let t=Ft.buys[e];if(!t||n.inv.scrap<t.cost){pn(n,"not enough scrap");return}n.inv.scrap-=t.cost;let i=n.weapons[e];n.owned[e]?i.reserve+=t.ammo:(n.owned[e]=!0,i.ammo<sn[e].magSize&&(i.ammo=sn[e].magSize),Ge(n,n.player.x,n.player.y-20,sn[e].name+" unlocked!","#bfe3ff"))}function Yd(n,e){let t=n.player,i=s=>n.inv.scrap<s?(pn(n,"not enough scrap"),!1):(n.inv.scrap-=s,!0);switch(e){case"jackhammer":!n.jackhammer&&i(Ft.jackhammer)&&(n.jackhammer=!0,pn(n,"Jackhammer! 3\xD7 gather"));break;case"laser":if(!n.owned.rifle){pn(n,"buy the rifle first");break}!t.rifleLaser&&i(Ft.laser)&&(t.rifleLaser=!0);break;case"fence":n.inv.wood>=Ft.fenceWood?(n.inv.wood-=Ft.fenceWood,n.inv.fence++):pn(n,"not enough wood");break;case"grenade":i(Ft.grenade)&&n.inv.grenade++;break;case"signal":i(Ft.signal)&&(n.inv.signal=(n.inv.signal|0)+1);break;case"hqm":i(Ft.hqm.cost)&&(n.inv.hqm+=Ft.hqm.amt);break;case"facemask":{let s=t.facemask+1;s<=3&&i(us.cost[s])&&(t.facemask=s);break}case"bodyArmor":{let s=t.bodyArmor+1;s<=3&&i(us.cost[s])&&(t.bodyArmor=s);break}case"worker":i(Ft.worker)&&(jf(n),pn(n,"worker hired \u2014 they gather and fight for you"));break}}function Zd(n,e,t){let i=n.deploys.get(n.storeOpen);if(!(!i||!i.store))if(t>0){let s=t>=9e3?n.inv[e]:Math.max(1,Math.floor(n.inv[e]*t)),r=Math.min(s,n.inv[e]);n.inv[e]-=r,i.store[e]+=r}else{let s=-t,r=s>=9e3?i.store[e]:Math.max(1,Math.floor(i.store[e]*s)),o=Math.min(r,i.store[e]);i.store[e]-=o,n.inv[e]+=o}}function pn(n,e){n.tip={text:e,t:1.4}}function $d(n,e){let t=n.player;for(let i of n.animals){if(i.dead){i.respawnT-=e,i.respawnT<=0&&Kd(n,i);continue}let s=ps[i.type];if(i.atkcd=Math.max(0,i.atkcd-e),i.hit=Math.max(0,i.hit-e),i.pauseT>0){i.pauseT-=e,i.vx=i.vy=0;continue}i.phase===void 0&&(i.phase=n.rng.next()*12|0);let r,o,a=1e9;if((n.tick+i.phase)%12===0||i.tgtCache===void 0){r=null,o=null;let m=t.dead||t.inCopter||n.ghost||bt(n,t.x,t.y),g=null,y=1e9;for(let w of n.units){if(w.dead||w.flying||w.eliminated)continue;let T=Q(i.x,i.y,w.x,w.y);T<s.detect&&T<y&&!kt(n,i.x,i.y,w.x,w.y)&&(y=T,g=w)}if(!m){let w=Q(i.x,i.y,t.x,t.y);w<s.detect&&w<=y&&!kt(n,i.x,i.y,t.x,t.y)&&(r=t,o="player")}if(!r&&g&&(r=g,o="bot"),!r){let w=null,T=s.detect*s.detect;for(let[I,E]of n.deploys){if(E.type!=="turret")continue;let[L,_]=I.split(",").map(Number),M=st(L,_),S=he(i.x,i.y,M.x,M.y);S<T&&!kt(n,i.x,i.y,M.x,M.y)&&(T=S,w={key:I,x:M.x,y:M.y})}w&&(r=w,o="turret")}if(!r&&i.hostile){let w=null,T=s.detect*s.detect;for(let I of n.animals){if(I===i||I.dead)continue;let E=he(i.x,i.y,I.x,I.y);E<T&&(T=E,w=I)}w&&(r=w,o="animal")}if(!r&&i.foe){let w=i.foe;typeof w=="object"&&!w.dead&&Q(i.x,i.y,w.x,w.y)<s.detect*1.4&&(r=w,o=w===t?"player":w.owner!==void 0?"bot":"animal")}i.tgtCache=r?{tgt:r,kind:o}:null}else if(i.tgtCache){let m=i.tgtCache;(m.tgt.dead||m.kind==="player"&&(t.dead||n.ghost)||m.kind==="turret"&&!n.deploys.has(m.tgt.key))&&(i.tgtCache=null)}r=i.tgtCache?i.tgtCache.tgt:null,o=i.tgtCache?i.tgtCache.kind:null,r&&(a=Q(i.x,i.y,r.x,r.y)),r&&o!=="turret"&&a>s.lose&&(r=null,i.aggro=null);let l=s.walk,c=0,h=0;if(r){i.aggro=o,l=s.chase;let m=Math.max(1,a);c=(r.x-i.x)/m,h=(r.y-i.y)/m;let g=o==="turret"?i.r+35.2:o==="player"?i.r+16+2:i.r+16;if(i.atkcd<=0&&a<g){o==="player"?(gs(n,s.dmg,i.x,i.y,"animal"),s.poison&&(t.poison=Math.max(t.poison,10))):o==="bot"?xs(n,r,s.dmg,i.x,i.y,"animal"):o==="turret"?ms(n,r.key,s.dmg,"animal"):o==="animal"&&(r.hp-=s.dmg,r.foe=i,r.hit=.12,r.hp<=0&&(r.dead=!0,r.respawnT=n.rng.rand(11,18))),i.atkcd=s.atk,i.pauseT=Uf;continue}}else{if(i.aggro=null,i.wanderT-=e,i.avoidT>0)i.avoidT-=e,i.dir=i.avoidA;else if(i.wanderT<=0)if(i.wanderT=n.rng.rand(1.2,3.2),i.lake&&Q(i.x,i.y,i.lake.x,i.lake.y)>i.lake.r*.9)i.dir=Math.atan2(i.lake.y-i.y,i.lake.x-i.x);else if(i.lake&&n.rng.chance(.55)){i.vx=i.vy=0;continue}else if(n.rng.chance(.3)){i.vx=i.vy=0;continue}else i.dir=n.rng.rand(0,ze);for(let[m,g]of n.deploys){if(g.type!=="cupboard")continue;let[y,w]=m.split(",").map(Number),T=st(y,w);if(he(i.x,i.y,T.x,T.y)<340*340){i.avoidA=Math.atan2(i.y-T.y,i.x-T.x),i.avoidT=1.2,i.dir=i.avoidA;break}}c=Math.cos(i.dir),h=Math.sin(i.dir)}let f=i.x+c*l*e,d=i.y+h*l*e,u={x:i.x,y:i.y},p=i.lake?{allowLake:!0}:{},x=R0(n,i,f,d);if(i.vx=(i.x-u.x)/e,i.vy=(i.y-u.y)/e,r)if(Q(i.x,i.y,u.x,u.y)<l*e*.25){if(i.stuckT+=e,i.stuckT>3){Kd(n,i);continue}i.stuckT>1.5&&(i.aggro=null,i.foe=null,i.stuckT=0,i.dir=n.rng.rand(0,ze))}else i.stuckT=Math.max(0,i.stuckT-e*2);else!x&&n.rng.chance(.5)&&(i.dir=n.rng.rand(0,ze))}}function R0(n,e,t,i){if(bt(n,t,i))return!1;let s=!1;return Mt(n,e.x,e.y,e.r*.7)?(e.x=t,e.y=i,s=!0):(!Mt(n,t,e.y,e.r*.7)&&(e.lake||!n.world.lakeAt(t,e.y))&&(e.x=t,s=!0),!Mt(n,e.x,i,e.r*.7)&&(e.lake||!n.world.lakeAt(e.x,i))&&(e.y=i,s=!0)),e.x=nt(e.x,20,ce.w-20),e.y=nt(e.y,20,ce.h-20),s}function Kd(n,e){let t=ps[e.type],i=ce.w,s=t.biome==="desert"?[0,i/3]:t.biome==="jungle"?[i/3,2*i/3]:t.biome==="winter"?[2*i/3,i]:[0,i];for(let r=0;r<30;r++){let o,a;if(e.lake){let l=n.rng.rand(0,ze);o=e.lake.x+Math.cos(l)*(e.lake.r+n.rng.rand(30,200)),a=e.lake.y+Math.sin(l)*(e.lake.r+n.rng.rand(30,200))}else o=n.rng.rand(Math.max(90,s[0]-90),Math.min(i-90,s[1]+90)),a=n.rng.rand(90,ce.h-90);if(!(Q(o,a,n.player.x,n.player.y)<520)&&!(n.world.landFactor(o,a)<.05)&&!(n.world.lakeAt(o,a)&&!e.lake)&&!Mt(n,o,a,e.r)){e.x=o,e.y=a;break}}e.dead=!1,e.hp=e.max,e.aggro=null,e.foe=null,e.pauseT=0,e.stuckT=0,e.dir=n.rng.rand(0,ze),e.respawnT=0,e.looted=!1}function Jd(n,e){let t=n.player;for(let i of n.guards){if(i.dead){if(i.respawnT-=e,i.respawnT<=0){let a=n.rng.rand(0,ze),l=n.rng.rand(.35*i.mr,.8*i.mr);i.x=i.mx+Math.cos(a)*l,i.y=i.my+Math.sin(a)*l,i.hp=i.max,i.dead=!1}continue}i.gunCd=Math.max(0,i.gunCd-e);let s=null,r=zt.detect;if(!t.dead&&!t.inCopter&&!n.ghost&&!bt(n,t.x,t.y)){let a=Q(i.x,i.y,t.x,t.y);a<r&&!kt(n,i.x,i.y,t.x,t.y)&&(s=t,r=a)}for(let a of n.units){if(a.dead||a.flying||a.eliminated)continue;let l=Q(i.x,i.y,a.x,a.y);l<r&&!kt(n,i.x,i.y,a.x,a.y)&&(s=a,r=l)}let o=Q(i.x,i.y,i.mx,i.my);if(o>i.mr+zt.leash&&(s=null),s){let a=Math.atan2(s.y-i.y,s.x-i.x);if(i.angle=wi(i.angle,a,Math.min(1,e*9)*Math.PI),r<zt.range&&i.gunCd<=0&&Math.abs(C0(i.angle,a))<.3){i.gunCd=zt.rof;let d=i.angle+n.rng.rand(-zt.spread,zt.spread);In(n,{x:i.x+Math.cos(i.angle)*16,y:i.y+Math.sin(i.angle)*16,angle:d,speed:zt.bspeed,dmg:zt.dmg,from:"guard",life:zt.range/zt.bspeed+.1}),at(n,i.x+Math.cos(i.angle)*16,i.y+Math.sin(i.angle)*16,"#ffd76b",2,90)}let l=0,c=0;r>300?(l=Math.cos(a),c=Math.sin(a)):r<150?(l=-Math.cos(a),c=-Math.sin(a)):(l=-Math.sin(a)*(i.seed>4.5?1:-1),c=Math.cos(a)*(i.seed>4.5?1:-1));let h=i.x+l*zt.speed*e,f=i.y+c*zt.speed*e;Mt(n,h,f,zt.r)||(i.x=h,i.y=f),i.hasWp=!1}else{let a=Math.min(580,i.mr*2.6);if(o>a+90){let l=Math.atan2(i.my-i.y,i.mx-i.x);i.angle=wi(i.angle,l,e*4);let c=i.x+Math.cos(i.angle)*zt.speed*e,h=i.y+Math.sin(i.angle)*zt.speed*e;Mt(n,c,h,zt.r)||(i.x=c,i.y=h),i.hasWp=!1}else{if(i.wpT-=e,!i.hasWp||i.wpT<=0||Q(i.x,i.y,i.wpX,i.wpY)<26){let d=n.rng.rand(0,ze),u=n.rng.rand(.25*i.mr,a);i.wpX=i.mx+Math.cos(d)*u,i.wpY=i.my+Math.sin(d)*u,i.wpT=n.rng.rand(2.4,6),i.hasWp=!0}let l=Math.atan2(i.wpY-i.y,i.wpX-i.x);i.angle=wi(i.angle,l,e*3.5);let c=zt.speed*.55,h=i.x+Math.cos(i.angle)*c*e,f=i.y+Math.sin(i.angle)*c*e;Mt(n,h,f,zt.r)?i.hasWp=!1:(i.x=h,i.y=f)}}}}var C0=(n,e)=>{let t=(e-n)%ze;return t>Math.PI&&(t-=ze),t<-Math.PI&&(t+=ze),t};function Gs(n,e){let t=Bn(n,e),i=t&&wn(n,t.tcKey);return i?[e.inv,i.store]:[e.inv]}function Bn(n,e){let t=n.teams[e.id];return!t||e.ally?null:t.bases.find(i=>i.tcKey===e.tcKey&&!i.dead)||t.bases.find(i=>!i.dead)||null}function Br(n,e){let t=e.bases.find(s=>!s.dead),i=t&&wn(n,t.tcKey);return i?i.store:null}function na(n,e,t){if(e<1400||t<1400||e>12424||t>7816||!n.world.onLand(e,t)||n.world.lakeAt(e,t)||n.world.railDist(e,t)<360||n.world.pathDist(e,t)<320||n.world.landFactor(e,t)<.12||Q(e,t,n.world.shop.x,n.world.shop.y)<gt+450)return!1;for(let i of n.world.monuments)if(Q(e,t,i.x,i.y)<gt+200)return!1;for(let i of n.world.lakes)if(Q(e,t,i.x,i.y)<i.r+560)return!1;for(let i of n.world.boulders)if(Q(e,t,i.x,i.y)<i.r+300)return!1;for(let[i,s]of n.deploys){if(s.type!=="cupboard")continue;let[r,o]=i.split(",").map(Number),a=st(r,o);if(Q(e,t,a.x,a.y)<Vi)return!1}return!0}function tu(n,e,t){if(t.inv.wood+t.inv.stone+t.inv.metal<220)return!1;let s=220;for(let o of["wood","stone","metal"]){let a=Math.min(s,t.inv[o]);if(t.inv[o]-=a,s-=a,s<=0)break}let r=Ko(n,e,t.siteX,t.siteY);for(let o of n.units)o.owner===e.owner&&(o.unfounded=!1,o.hx=r.hx,o.hy=r.hy,o.tcKey=r.tcKey,o.doorX=r.doorX,o.doorY=r.doorY,o.doorGy=r.doorGy);return Ge(n,r.hx,r.hy,"base founded","#9ad06a"),!0}function nu(n,e){let t=n.teams[e.id],i=Bn(n,e);if(!t||!i)return!1;let s=Gs(n,e),r=S0(n,t.owner,i),o=I0(n,t.owner,i),a=e.hard?9:5,l=e.hard?10:e.weak?5:8,c=e.hard?49:36;return r<a&&jd(n,e,t,i,s)||e.primary&&r>=5&&ia(n,e)||o<l&&D0(n,e,t,i,s)||e.hard&&Vc(n,e,t,i,s)?!0:!e.jack&&An.pay(s,{wood:120,metal:60})?(e.jack=!0,Ge(n,e.x,e.y,"+jackhammer","#ffd76b"),!0):(e.hf=!e.hf,!!((e.hf?Qd(n,e,t,i,s)||Vc(n,e,t,i,s):Vc(n,e,t,i,s)||Qd(n,e,t,i,s))||r<c&&jd(n,e,t,i,s)))}function S0(n,e,t){let i=0;for(let[s,r]of n.structures){if(r.owner!==e)continue;let[o,a]=s.split(",").map(Number),l=st(o,a);he(l.x,l.y,t.hx,t.hy)<Ut*Ut&&i++}return i}function I0(n,e,t){let i=0;for(let[s,r]of n.deploys){if(r.type!=="turret"||r.owner!==e)continue;let[o,a]=s.split(",").map(Number),l=st(o,a);he(l.x,l.y,t.hx,t.hy)<Ut*Ut&&i++}return i}function P0(n,e,t,i,s){let r=qe(e,t);if(n.structures.has(r)||n.deploys.has(r))return!1;let o=st(e,t);if(t>=s.doorGy||bt(n,o.x,o.y)||Hs(n,o.x,o.y)||!n.world.onLand(o.x,o.y)||n.world.lakeAt(o.x,o.y)||Pr(n,o.x,o.y))return!1;for(let l of n.animals)if(!l.dead&&Math.abs(l.x-o.x)<64&&Math.abs(l.y-o.y)<64)return!1;let a=$o(n,i.owner,s.hx,s.hy);if(a){let l=Math.min(a.minx,e),c=Math.max(a.maxx,e),h=Math.min(a.miny,t),f=Math.max(a.maxy,t);if(c-l+1>10||f-h+1>10)return!1}return!0}function L0(n,e,t){let i=t.split(","),s=+i[1],r=+i[2],o=i[0]==="V"?[[s-1,r],[s,r]]:[[s,r-1],[s,r]];for(let[a,l]of o){if(!n.structures.has(qe(a,l)))continue;let c=0;for(let h of[Se("V",a,l),Se("V",a+1,l),Se("H",a,l),Se("H",a,l+1)]){if(h===t)continue;let f=n.walls.get(h);(!f||f.hp<=0||f.type==="door")&&c++}if(c===0)return!0}return!1}function jd(n,e,t,i,s){if(!An.has(s,{wood:40}))return!1;let r=[];for(let[c,h]of n.structures){if(h.owner!==t.owner)continue;let[f,d]=c.split(",").map(Number),u=st(f,d);if(!(he(u.x,u.y,i.hx,i.hy)>Ut*Ut))for(let[p,x]of[[1,0],[-1,0],[0,1],[0,-1]])P0(n,f+p,d+x,t,i)&&r.push([f+p,d+x])}if(!r.length)return!1;let[o,a]=r[Math.floor(n.rng.next()*r.length)];if(!An.pay(s,{wood:40}))return!1;n.structures.set(qe(o,a),{type:"floor",mat:"wood",hp:100,max:100,owner:t.owner,hitT:-100});let l=[[Se("V",o,a),qe(o-1,a)],[Se("V",o+1,a),qe(o+1,a)],[Se("H",o,a),qe(o,a-1)],[Se("H",o,a+1),qe(o,a+1)]];for(let[c,h]of l){let f=n.structures.get(h);f&&f.owner===t.owner||n.walls.has(c)||L0(n,t.owner,c)||n.walls.set(c,{type:"wall",mat:"wood",hp:100,max:100,owner:t.owner,hitT:-100,open:!1})}return Lc(n,t,i),n.nav.stamp++,Ge(n,o*64+64/2,a*64+64/2,"+room","#bcd0e0"),!0}function D0(n,e,t,i,s){if(!An.has(s,{wood:40,metal:30}))return!1;let r=$o(n,t.owner,i.hx,i.hy);if(!r)return!1;let o=Math.floor(i.doorX/64),a=[];for(let c=r.miny-1;c<=r.maxy+1;c++)for(let h=r.minx-1;h<=r.maxx+1;h++){let f=qe(h,c);if(n.structures.has(f)||n.deploys.has(f)||c>=i.doorGy&&Math.abs(h-o)<=1)continue;let d=st(h,c);if(bt(n,d.x,d.y)||Hs(n,d.x,d.y)||!n.world.onLand(d.x,d.y)||n.world.lakeAt(d.x,d.y)||Pr(n,d.x,d.y))continue;let u=!1,p=!1;for(let x=-1;x<=1&&!u;x++)for(let m=-1;m<=1;m++){let g=n.structures.get(qe(h+m,c+x));if(g&&g.owner===t.owner){u=!0;break}}for(let[x,m]of[[1,0],[-1,0],[0,1],[0,-1]]){let g=n.deploys.get(qe(h+x,c+m));if(g&&g.type==="turret"){p=!0;break}}u&&!p&&a.push({gx:h,gy:c,c:d})}if(!a.length)return!1;a.sort((c,h)=>he(h.c.x,h.c.y,i.doorX,i.doorY)-he(c.c.x,c.c.y,i.doorX,i.doorY));let l=a[0];return An.pay(s,{wood:40,metal:30})?(n.deploys.set(qe(l.gx,l.gy),{type:"turret",mat:"wood",hp:150,max:150,owner:t.owner,hitT:-100,tier:e.hard?3:e.weak?1:2,angle:0,cd:0,mag:12,reload:0,ext:!0,scanT:n.rng.rand(.5,4.5)}),n.nav.stamp++,Ge(n,l.c.x,l.c.y,"+turret","#bcd0e0"),!0):!1}var N0={wood:{mat:"stone",cost:{stone:15}},stone:{mat:"metal",cost:{metal:20}},metal:{mat:"armored",hqm:8}},U0={wood:{mat:"stone",cost:{stone:12}},stone:{mat:"metal",cost:{metal:16}},metal:{mat:"armored",hqm:6}};function Vc(n,e,t,i,s){for(let[r,o]of n.walls){if(o.owner!==t.owner||o.hp<=0)continue;let a=N0[o.mat];if(a){if(a.hqm){if(e.hqm<a.hqm)continue;e.hqm-=a.hqm}else if(!An.pay(s,a.cost))continue;return o.mat=a.mat,o.max=Mi(Zt[o.type],o.mat),o.hp=o.max,Ge(n,e.x,e.y,"+"+a.mat,a.mat==="armored"?"#7f93ad":a.mat==="metal"?"#aeb6bf":"#c2c8cf"),!0}}return!1}function Qd(n,e,t,i,s){for(let[r,o]of n.structures){if(o.owner!==t.owner)continue;let a=U0[o.mat];if(a){if(a.hqm){if(e.hqm<a.hqm)continue;e.hqm-=a.hqm}else if(!An.pay(s,a.cost))continue;return o.mat=a.mat,o.max=Mi(Zt[o.type],o.mat),o.hp=o.max,!0}}return!1}function ia(n,e){let t=n.teams[e.id];if(!t||!e.primary)return!1;let i=e.hard?ct.HIRE_CAP_HARD:ct.HIRE_CAP;if(n.units.filter(h=>h.owner===t.owner&&!h.eliminated).length>=i)return!1;let r=Bn(n,e),o=r&&wn(n,r.tcKey),a=ct.WORKER_COST,l=Math.min(a,e.scrap);if(l+(o?o.store.scrap:0)<a)return!1;e.scrap-=l,a-=l,a>0&&(o.store.scrap-=a);let c=Sr(n,t,e.hx+n.rng.rand(-46,46),e.hy+n.rng.rand(24,64),!1);return c.hx=e.hx,c.hy=e.hy,c.tcKey=e.tcKey,c.doorX=e.doorX,c.doorY=e.doorY,c.doorGy=e.doorGy,c.unfounded=e.unfounded,Ge(n,c.x,c.y,"+worker hired","#9ad06a"),!0}function iu(n,e,t){let i=n.units.find(c=>c.owner===e.owner&&c.primary&&!c.eliminated);if(!i||i.unfounded||e.eliminated)return;let s=e.bases.filter(c=>!c.dead);if(!s.length)return;let r=e.hard?4:3,o=Br(n,e),a=o?o.wood+o.stone+o.metal:0,l=e.brain;if(i.fwdT-=t,l.aggressor&&l.raidTarget&&s.length<r&&a>=170&&i.fwdT<=0){i.fwdT=10;let c=zn(n,l.raidTarget);if(c&&!s.some(h=>Q(h.hx,h.hy,c.hx,c.hy)<2400)){let h=s[0],f=Math.atan2(h.hy-c.hy,h.hx-c.hx);for(let d of[1800,2300,1400,2700]){let u=c.hx+Math.cos(f)*d,p=c.hy+Math.sin(f)*d;if(na(n,u,p)){eu(o,200);let x=Ko(n,e,u,p);x.kind="raid-forward",Ge(n,u,p,"+raid base","#ffd0a0");return}}}}if(i.expT-=t,i.expT<=0){i.expT=n.rng.rand(50,90);let c=l.attack?160:260;if(s.length>=1&&s.length<r&&a>=c){let h=k0(n,e,s[0]);if(h){eu(o,240);let f=Ko(n,e,h.x,h.y);f.kind=h.kind,Ge(n,h.x,h.y,"+"+h.kind+" base","#bcd0e0")}}}}function eu(n,e){if(n)for(let t of["wood","stone","metal"]){let i=Math.min(e,n[t]);if(n[t]-=i,e-=i,e<=0)return}}function zn(n,e){if(!e)return null;if(e==="player"){for(let[t,i]of n.deploys)if(i.type==="cupboard"&&i.owner===Ve){let[s,r]=t.split(",").map(Number),o=st(s,r);return{owner:Ve,tcKey:t,hx:o.x,hy:o.y,isPlayer:!0}}return null}return e.bases&&e.bases.find(t=>!t.dead)||null}function k0(n,e,t){for(let s of n.world.monuments){let r=!1;for(let o of n.teams)if(o.bases.some(a=>!a.dead&&Q(a.hx,a.hy,s.x,s.y)<gt+900)){r=!0;break}if(!r)for(let o=0;o<8;o++){let a=o/8*Math.PI*2,l=s.x+Math.cos(a)*(gt+320),c=s.y+Math.sin(a)*(gt+320);if(na(n,l,c))return{x:l,y:c,kind:"monument"}}}let i=zn(n,e.brain.raidTarget)||F0(n,e,t);if(i){let s=Math.atan2(i.hy-t.hy,i.hx-t.hx);for(let r of[1700,2200,1300]){let o=t.hx+Math.cos(s)*r,a=t.hy+Math.sin(s)*r;if(na(n,o,a))return{x:o,y:a,kind:"raid-forward"}}}for(let s=0;s<10;s++){let r=n.rng.rand(0,Math.PI*2),o=n.rng.rand(Vi+200,Vi+1600),a=t.hx+Math.cos(r)*o,l=t.hy+Math.sin(r)*o;if(na(n,a,l))return{x:a,y:l,kind:"survival"}}return null}function F0(n,e,t){let i=null,s=3e3*3e3;for(let r of n.teams)if(!(r===e||r.eliminated))for(let o of r.bases){if(o.dead)continue;let a=he(t.hx,t.hy,o.hx,o.hy);a>s&&(s=a,i=o)}return i}function Gc(n,e){if(e.ally)return!1;let t=Math.floor(e.x/64),i=Math.floor(e.y/64),s=null,r=-1;for(let[a,l,c]of[[Se("V",t,i),qe(t-1,i),!1],[Se("V",t+1,i),qe(t+1,i),!1],[Se("H",t,i),qe(t,i-1),!1],[Se("H",t,i+1),qe(t,i+1),!0]]){let h=n.walls.get(a);if(!h||h.owner!==e.owner||h.type==="door")continue;let f=(n.structures.has(l)?0:60)+(c?12:0)+n.rng.rand(0,2);f>r&&(r=f,s=a)}if(!s)return!1;let o=n.walls.get(s);return o.type="door",o.open=!0,o.closeT=n.t+1.2,o.lock={by:e.owner},o.hp=Math.max(o.hp,50),o.max=Math.max(o.max,50),n.nav.stamp++,n.metrics.doorCuts=(n.metrics.doorCuts||0)+1,Ge(n,e.x,e.y,"cut a door","#caa46a"),!0}function zr(n){n.path=null,n.pathI=0,n.repathN=0}function Ot(n,e,t,i,s,r={}){let o=r.arrive||16,a=Q(e.x,e.y,t,i);if(a<=o)return zr(e),e.progBest=1e9,"arrived";let l=Q(e.pathGX,e.pathGY,t,i)>90,c=n.t-e.pathT>3,h=!e.path||n.t-(e.lastPlanT||-1)>.5;if((!e.path||l||c||e.pathI>=e.path.length)&&h){if(e.lastPlanT=n.t,a<192&&Rr(n,e.owner,e.x,e.y,t,i))e.path=[{x:t,y:i}],e.pathI=0;else{let M=$f(n,e.owner,e.x,e.y,t,i);n.metrics.repaths++,M?(e.path=M,e.pathI=0,e.directFallback=!1):(n.metrics.pathFails++,e.path=[{x:t,y:i}],e.pathI=0,e.directFallback=!0)}e.pathGX=t,e.pathGY=i,e.pathT=n.t}let f=e.path[Math.min(e.pathI,e.path.length-1)],d=f.door?12:15;Q(e.x,e.y,f.x,f.y)<d&&e.pathI<e.path.length-1&&(e.pathI++,f=e.path[e.pathI]),!f.door&&e.pathI+1<e.path.length&&!e.path[e.pathI+1].door&&n.tick%7===e.tickPhase%7&&Rr(n,e.owner,e.x,e.y,e.path[e.pathI+1].x,e.path[e.pathI+1].y)&&(e.pathI++,f=e.path[e.pathI]);let u=r.speed||ct.BOT_SPEED,p=n.world.lakeAt(e.x,e.y);p&&!p.frozen&&(u*=.5);let x=Math.max(1,Q(e.x,e.y,f.x,f.y)),m=(f.x-e.x)/x,g=(f.y-e.y)/x,y=Math.min(u*s,x),w=e.x+m*y,T=e.y+g*y,I=e.x,E=e.y,L={passOwner:e.owner,openOwnDoors:!0},_=!1;if(Mt(n,e.x,e.y,13,L)?(e.x=w,e.y=T,_=!0):Mt(n,w,T,13,L)?(Mt(n,w,e.y,13,L)||(e.x=w,_=!0),Mt(n,e.x,T,13,L)||(e.y=T,_=!0)):(e.x=w,e.y=T,_=!0),e.x=nt(e.x,12,ce.w-12),e.y=nt(e.y,12,ce.h-12),e.vx=(e.x-I)/s,e.vy=(e.y-E)/s,_){let M=Math.atan2(g,m);e.angle=e.angle+sa(e.angle,M)*Math.min(1,s*7)}if(e.progT+=s,e.progT>=.5){e.progT=0;let M=Q(e.x,e.y,t,i);if(M<e.progBest-12)e.progBest=M,e.noProgT=0,e.repathN=0;else if(e.noProgT=(e.noProgT||0)+.5,e.noProgT>=1.5){if(e.noProgT=0,e.repathN++,Xo(n,e.x,e.y,12),Xo(n,e.x+(t>e.x?64:-64),e.y,10),Xo(n,e.x,e.y+(i>e.y?64:-64),10),n.metrics.stuckTotal+=1.5,e.path=null,e.lastPlanT=-1,e.repathN===2){let S=Math.atan2(i-e.y,t-e.x)+(e.id%2?1:-1)*Math.PI/2;e.detourX=e.x+Math.cos(S)*220,e.detourY=e.y+Math.sin(S)*220,e.detourT=n.t+2.5}if(e.repathN>=3)return e.repathN=0,e.progBest=1e9,zr(e),n.metrics.stuckLog.push({t:n.t,owner:e.owner,x:e.x|0,y:e.y|0}),"stuck"}}if(e.detourT&&n.t<e.detourT)if(Q(e.x,e.y,e.detourX,e.detourY)>20){let S=Math.atan2(e.detourY-e.y,e.detourX-e.x),C=e.x+Math.cos(S)*u*s,N=e.y+Math.sin(S)*u*s;Mt(n,C,N,13,L)||(e.x=C,e.y=N)}else e.detourT=0;return!_&&e.path&&e.pathI<e.path.length-1?(e.wpStallT=(e.wpStallT||0)+s,e.wpStallT>.6&&(e.wpStallT=0,e.pathI++)):_&&(e.wpStallT=0),e.gotoTick=n.tick,_?e.stuckT=Math.max(0,e.stuckT-s*2):(e.stuckT+=s,e.state!=="raid"&&(n.metrics.maxStuck=Math.max(n.metrics.maxStuck,e.stuckT))),"moving"}function su(n,e,t){for(let i of n.units){if(i===e||i.dead||i.eliminated||i.flying||i.owner!==e.owner)continue;let s=he(e.x,e.y,i.x,i.y);if(s>.01&&s<324){let r=Math.sqrt(s),o=(18-r)*.5*t*6,a=(e.x-i.x)/r*o,l=(e.y-i.y)/r*o;Mt(n,e.x+a,e.y+l,13,{passOwner:e.owner})||(e.x+=a,e.y+=l)}}}function Pn(n,e,t,i,s=8){let r=Math.atan2(t-n.y,e-n.x);n.angle=n.angle+sa(n.angle,r)*Math.min(1,i*s)}var sa=(n,e)=>{let t=(e-n)%ze;return t>Math.PI&&(t-=ze),t<-Math.PI&&(t+=ze),t};var ru=ct.BOT_SPEED;function hu(n,e,t){if(e.eliminated)return;let i=e.ally?null:n.teams[e.id];if(!e.ally&&!e.unfounded){let d=Bn(n,e);if(!d){fu(n,e,i);return}d.tcKey!==e.tcKey&&du(n,e,d);let u=wn(n,d.tcKey);u&&(u.store.wood=Math.max(u.store.wood,40))}if(e.dead){e.respawnT-=t,e.respawnT<=0&&B0(n,e,i);return}if(e.gunCd=Math.max(0,e.gunCd-t),e.rkCd=Math.max(0,e.rkCd-t),e.gnCd=Math.max(0,e.gnCd-t),e.fenceCd=Math.max(0,e.fenceCd-t),e.think-=t,e.expandT-=t,e.retaliateT=Math.max(0,e.retaliateT-t),e.disengageT=Math.max(0,e.disengageT-t),e.regenT=Math.max(0,e.regenT-t),e.regenT<=0&&e.hp<e.max&&(e.hp=Math.min(e.max,e.hp+9*t)),e.primary&&!e.unfounded&&!e.ally&&(e.hireT-=t,e.hireT<=0)){e.hireT=2;let d=Bn(n,e),u=d&&wn(n,d.tcKey);e.scrap+(u?u.store.scrap:0)>=ct.WORKER_COST+24&&ia(n,e)}if(e.aboard)if(e.aboard.destroyed||!e.aboard.riders.includes(e))e.aboard=null,e.flying=!1;else{e.flying=!0;return}if(e.flying&&(!e.copter||e.copter.destroyed)&&(e.flying=!1),e.flying&&e.state!=="trade"&&yu(e),e.unfounded){z0(n,e,i,t),ou(n,e,t);return}e.endgame=n.aliveBases<=ct.ENDGAME_BASES||n.t>ct.ENDGAME_T;let s=i?i.brain:O0,r=e.retaliateT>0&&he(e.x,e.y,e.threatX,e.threatY)<ct.REACT_R*ct.REACT_R&&!bt(n,e.x,e.y);(n.tick+e.tickPhase)%9===0||e.thCache===void 0?e.thCache=xu(n,e)||Kc(n,e):e.thCache&&e.thCache.ref&&!e.thCache.ref.dead?(e.thCache.x=e.thCache.ref.x,e.thCache.y=e.thCache.ref.y):e.thCache&&e.thCache.ref&&e.thCache.ref.dead&&(e.thCache=null);let o=r?{x:e.threatX,y:e.threatY,vx:0,vy:0}:e.thCache,a=Q(e.x,e.y,e.hx,e.hy);he(e.x,e.y,n.world.shop.x,n.world.shop.y)<(gt+140)*(gt+140)&&(o=null),e.ally&&(e.raidUrge-=t);let l=e.raid&&zn(n,e.raid),c=e.rocketer&&(e.state==="raid"||e.wasRaid)&&l&&e.rockets>0&&e.hp>=e.max*.2&&!s.urgent,h=o?Q(e.x,e.y,o.x,o.y):1e9;switch(o&&!c&&(e.defDuty||r&&!e.wasRaid||s.urgent||e.ally)&&!((e.wasRaid||e.endgame)&&h>=230)&&!(s.aggressor&&h>=160)?(e.state="defend",e.defHold=e.defDuty&&(s.attack||s.urgent)?2.5:.7,e.defTgt={x:o.x,y:o.y,vx:o.vx||0,vy:o.vy||0,ref:o.ref}):e.state==="defend"?(e.defHold-=t,e.defHold<=0&&(e.state="gather",e.defendT=0,e.defTgt=null)):e.state==="raid"&&(!l||i&&s.decaying)?(e.raid=null,e.wasRaid=!1,e.state="gather"):e.defDuty&&(s.attackers>0||s.urgent)&&a>340&&e.state!=="raid"&&e.state!=="trade"?e.state="return":e.state==="gather"&&H0(n,e,i,s)&&(e.state=V0(n,e,i,s)),e.act=e.state,e.state){case"defend":q0(n,e,i,s,o,t);break;case"raid":Y0(n,e,i,s,t);break;case"return":$0(n,e,t);break;case"trade":J0(n,e,i,s,t);break;default:Q0(n,e,i,s,t);break}ou(n,e,t)}var O0={sealed:!0,decaying:!1,ready:!1,attack:!1,urgent:!1,aggressor:!1,raidTarget:null};function ou(n,e,t){if(su(n,e,t),e.gotoTick!==n.tick&&(e.stuckT=Math.max(0,e.stuckT-t)),!e.flying&&(e.state==="gather"||e.state==="raid"||e.state==="return"||e.state==="trade")&&Math.hypot(e.vx,e.vy)>30&&Qo(n,e,Math.atan2(e.vy,e.vx)),e.directFallback&&e.stuckT>1.5){let i=Math.floor(e.x/64),s=Math.floor(e.y/64),r=n.structures.get(i+","+s);r&&r.owner===e.owner&&Gc(n,e)&&(zr(e),e.directFallback=!1,e.stuckT=0)}n.metrics.act[e.act]=(n.metrics.act[e.act]||0)+t}function fu(n,e,t){e.eliminated=!0,e.dead=!0,e.primary&&t&&!t.elimsPosted&&(t.elimsPosted=!0,t.eliminated=!0,n.elims.push({text:"Base "+(e.id+1)+" ELIMINATED",t:30}),n.metrics.elims++)}function du(n,e,t){e.hx=t.hx,e.hy=t.hy,e.tcKey=t.tcKey,e.doorX=t.doorX,e.doorY=t.doorY,e.doorGy=t.doorGy,zr(e)}function B0(n,e,t){if(e.ally){e.hp=e.max,e.dead=!1,e.x=e.hx,e.y=e.hy+50,e.state="gather";return}if(!t)return;let i=t.bases.filter(r=>!r.dead);if(!i.length){fu(n,e,t);return}let s=i[0];if(i.length>1&&!e.primary){let r=zn(n,t.brain.raidTarget);r&&(e.rocketer||e.wasRaid||e.state==="raid")?s=i.reduce((o,a)=>he(o.hx,o.hy,r.hx,r.hy)<he(a.hx,a.hy,r.hx,r.hy)?o:a):s=i[Math.floor(n.rng.next()*i.length)]}du(n,e,s),e.hp=e.max,e.dead=!1,e.x=s.hx,e.y=s.hy+50,e.state="gather",e.raid=null,e.wasRaid=!1,e.primary&&e.copter&&(e.copter.destroyed=!1,e.copter.hp=e.copter.max,e.copter.x=e.hx-256,e.copter.y=e.hy)}function z0(n,e,t,i){e.act="found";let s=e.inv.wood+e.inv.stone+e.inv.metal,r=xu(n,e);if(r&&!bt(n,e.x,e.y)){vu(n,e,r,i);return}if(e.primary){if(s>=220){if(Q(e.x,e.y,e.siteX,e.siteY)<=128){tu(n,t,e);return}Ot(n,e,e.siteX,e.siteY,i);return}}else if(s>=70)if(Q(e.x,e.y,e.siteX,e.siteY)<=192){let a=n.units.find(l=>l.owner===e.owner&&l.primary&&!l.dead);if(a)for(let l of["wood","stone","metal"])a.inv[l]+=e.inv[l],e.inv[l]=0}else{Ot(n,e,e.siteX,e.siteY,i);return}e.act="gather";let o=e.tgtNode;(!o||o.amount<=0)&&(o=ig(n,e,"wood",2600)||cu(n,e,4e3)||cu(n,e,1e9),e.tgtNode=o),o&&_u(n,e,o,i)}function H0(n,e,t,i){if(e.monRun)return!1;let s=e.inv.wood+e.inv.stone+e.inv.metal;return!!(s>=ct.GATHER_LOAD||e.scrap>40||!e.ally&&t&&(i.breach||i.damaged&&Xc(n,e)>=12||e.rocketer&&e.rockets<8&&e.role!=="turtle"&&n.t>=(e.tradeCd||0)&&(e.scrap>=12||s>=100||Yc(n,e)>=24)||uu(n,e,i)||pu(n,e,i))||e.ally&&e.raidUrge<=0)}function uu(n,e,t){if(e.ally||e.role==="turtle"||n.t<(e.tradeCd||0)||e.rockets>=(e.primary?12:6))return!1;let i=e.inv.wood+e.inv.stone+e.inv.metal;return(e.scrap>=24||i>=120||e.primary&&Yc(n,e)>=48)&&(t.aggressor||G0(n,e)||t.ready)}function pu(n,e,t){return!(n.t>120||e.endgame)||n.t<e.raidCd||e.role==="turtle"&&!e.endgame||!(e.rockets>0||e.satchels>0||e.endgame)?!1:e.endgame||t.aggressor?!0:t.ready&&t.raidTarget&&e.raidBias<.72&&W0(n,e)>=4}function V0(n,e,t,i){let s=e.inv.wood+e.inv.stone+e.inv.metal;if(!e.ally&&t){let r=i.breach;if(r&&Xc(n,e)<40)return"gather";let o=Q(e.x,e.y,e.hx,e.hy);if(r||i.damaged&&Xc(n,e)>=12)return o>180?"return":"gather";if(e.rocketer&&e.rockets<8&&e.role!=="turtle"&&n.t>=(e.tradeCd||0)&&(e.scrap>=12||s>=100||Yc(n,e)>=24))return"trade";if(e.scrap>40||s>=ct.GATHER_LOAD)return"return";if(uu(n,e,i))return"trade";if(pu(n,e,i)){let a=i.raidTarget;if(n.transports.find(c=>c.owner===e.owner&&!c.destroyed&&c.state!=="fly"&&c.state!=="unload"&&c.riders.length<Ht.seats)){let c=gu(n,t);c&&(a=c)}if((!a||!zn(n,a))&&(a=Zc(n,t,e)),a)return e.raid=a,e.raidCd=n.t+2,n.metrics.raidsLaunched++,"raid"}}if(e.ally&&e.raidUrge<=0){let r=X0(n);if(r)return e.raid=r,e.raidUrge=n.rng.rand(24,44),"raid";e.raidUrge=n.rng.rand(8,14)}return"gather"}var Xc=(n,e)=>e.inv.wood+mu(n,e,"wood"),Yc=(n,e)=>mu(n,e,"scrap");function mu(n,e,t){let i=Bn(n,e),s=i&&wn(n,i.tcKey);return s?s.store[t]:0}function G0(n,e){let t=Bn(n,e),i=t&&wn(n,t.tcKey);if(!i)return!1;let s=n.teams[e.id],r=2;for(let o of n.structures.values())o.owner===e.owner&&r++;for(let o of n.deploys.values())o.owner===e.owner&&o.type==="turret"&&r++;return i.store.wood+i.store.stone+i.store.metal>r*.0075*300}function W0(n,e){let t=0;for(let i of n.structures.values())i.owner===e.owner&&(i.type==="floor"||i.type==="trifloor")&&t++;return t}function Zc(n,e,t){let i=null,s=1e18,r=e.bases.find(a=>!a.dead);if(!r)return null;for(let a of n.teams){if(a===e||a.eliminated)continue;let l=a.bases.find(p=>!p.dead);if(!l)continue;let c=wn(n,l.tcKey),h=c?c.store.wood+c.store.stone+c.store.metal:0,f=0;for(let p of n.deploys.values())p.owner===a.owner&&p.type==="turret"&&f++;let d=0;if(e.hard)for(let p of n.units)p.owner===a.owner&&!p.dead&&!p.eliminated&&he(p.x,p.y,l.hx,l.hy)<720*720&&d++;let u=he(r.hx,r.hy,l.hx,l.hy)*(1+f*ct.RAID_TUR_W)*(1+d*ct.RAID_DEF_W)/(1+h*.003);u<s&&(s=u,i=a)}let o=zn(n,"player");return o&&!n.ghost&&he(r.hx,r.hy,o.hx,o.hy)<s&&(i="player"),i}function X0(n){let e=null,t=1e18;for(let i of n.teams){if(i.eliminated)continue;let s=i.bases.find(o=>!o.dead);if(!s)continue;let r=he(n.player.x,n.player.y,s.hx,s.hy);r<t&&(t=r,e=i)}return e}function gu(n,e){let t=e.bases.find(r=>!r.dead);if(!t)return null;let i=null,s=3e3*3e3;for(let r of n.teams){if(r===e||r.eliminated)continue;let o=r.bases.find(l=>!l.dead);if(!o)continue;let a=he(t.hx,t.hy,o.hx,o.hy);a>s&&(s=a,i=r)}return i}function xu(n,e){if(e.disengageT>0||bt(n,e.x,e.y))return null;let t=null,i=ct.REACT_R*ct.REACT_R,s=n.player,r=(o,a,l,c,h,f)=>{if(h===e.unreach&&n.t<e.unreachT)return;let d=he(e.x,e.y,o,a);d>=i||f&&d>f*f||bt(n,o,a)||si(n,e.x,e.y,o,a)||(i=d,t={x:o,y:a,vx:l,vy:c,ref:h})};!e.ally&&!s.dead&&!s.inCopter&&!n.ghost&&r(s.x,s.y,s.vx,s.vy,s);for(let o of n.units)o.owner===e.owner||o.dead||o.flying||o.eliminated||r(o.x,o.y,o.vx,o.vy,o);for(let o of n.animals)!o.dead&&o.aggro&&r(o.x,o.y,o.vx,o.vy,o,360);for(let o of n.guards)o.dead||r(o.x,o.y,0,0,o,480);return t}function Kc(n,e){if(e.disengageT>0||bt(n,e.x,e.y))return null;let t=null,i=430*430,s=n.player,r=(o,a,l,c,h)=>{if(h===e.unreach&&n.t<e.unreachT)return;let f=he(e.x,e.y,o,a);f>=i||bt(n,o,a)||si(n,e.x,e.y,o,a)||(i=f,t={x:o,y:a,vx:l,vy:c,ref:h})};!e.ally&&!s.dead&&!s.inCopter&&!n.ghost&&r(s.x,s.y,s.vx,s.vy,s);for(let o of n.units)o.owner===e.owner||o.dead||o.flying||o.eliminated||r(o.x,o.y,o.vx,o.vy,o);for(let o of n.guards)o.dead||r(o.x,o.y,0,0,o);return t}function q0(n,e,t,i,s,r){e.defendT+=r;let o=s||e.defTgt;if(!o){e.state="gather";return}let a=e.raid&&zn(n,e.raid),c=e.inv.wood+e.inv.stone+e.inv.metal>60||e.scrap>20,h=e.hp<e.max*.2;if((e.hp<e.max*(c?.45:.28)&&!a||h)&&!e.endgame&&!e.retreat&&n.rng.chance(c?.05:.02)&&(e.retreat=!0),e.retreat)if(e.hp>=e.max*.85||e.defendT>9)e.retreat=!1;else{e.disengageT=Math.max(e.disengageT,2.5),kt(n,e.x,e.y,o.x,o.y)||Gr(n,e,o,r),(Ot(n,e,e.hx+e.lane,e.hy+e.hoff,r)==="arrived"||Q(e.x,e.y,e.hx,e.hy)<64*1.5)&&(e.retreat=!1,e.state="return");return}vu(n,e,o,r),og(n,e,o);let d=a?2.2:7;e.defendT>d&&(a?e.state="raid":(e.disengageT=6,e.state="gather"),e.defendT=0)}function Y0(n,e,t,i,s){e.wasRaid=!0,e.act="raid";let r=zn(n,e.raid);if(!r){e.wasRaid=!1,e.state="return";return}let o=wn(n,r.tcKey);if(!o){e.wasRaid=!1,e.state="return";return}if(e.rockets<=0&&e.satchels<=0&&!e.endgame){e.raid=null,e.wasRaid=!1;let m=e.inv.wood+e.inv.stone+e.inv.metal;e.state=e.scrap>=8||m>=100?"trade":"gather";return}if(!e.aboard&&Q(e.x,e.y,e.hx,e.hy)<600&&Q(r.hx,r.hy,e.hx,e.hy)>2800){let m=n.transports.find(g=>g.owner===e.owner&&!g.destroyed&&(g.state==="idle"||g.state==="board")&&g.riders.length<Ht.seats);if(m){if(Q(e.x,e.y,m.x,m.y)<70){wd(n,e,m);return}Ot(n,e,m.x,m.y,s);return}}let a=Q(e.x,e.y,r.hx,r.hy),c=n.units.filter(m=>m.owner===e.owner&&m.state==="raid"&&m.raid===e.raid&&!m.dead&&he(m.x,m.y,r.hx,r.hy)<560*560).length>=2||e.endgame||e.ally;if(e.stagedFor!==e.raid&&(e.staged=!1,e.stagedFor=e.raid),a<700?e.staged=!0:a>1600&&(e.staged=!1),!e.staged){let m=Math.atan2(e.hy-r.hy,e.hx-r.hx),g=(e.id%5-2)*70+e.lane*2,y=r.hx+Math.cos(m)*540+Math.cos(m+Math.PI/2)*g,w=r.hy+Math.sin(m)*540+Math.sin(m+Math.PI/2)*g;Ot(n,e,y,w,s)==="stuck"&&(e.raidCd=n.t+8,e.raid=null,e.wasRaid=!1,e.state="gather");return}if(c&&a<(e.endgame?420:300)&&!kt(n,e.x,e.y,r.hx,r.hy)){Pn(e,r.hx,r.hy,s),o.hp-=(e.endgame?140:e.hard?24:14)*s,o.hitT=n.t,n.rng.chance(.2)&&n.particles.push({x:r.hx+n.rng.rand(-10,10),y:r.hy+n.rng.rand(-10,10),vx:n.rng.rand(-40,40),vy:n.rng.rand(-60,-20),life:.4,max:.4,r:2,col:"#caa24a"}),o.hp<=0&&Ic(n,r.tcKey,o,e.owner);return}let h=Z0(n,e,r),f=null,d=null,u=!1;if(h)f=h.c,d=h.key;else{let m=K0(n,e,t,r);m?(f=m.c,d=m.key,u=m.door):f={x:r.hx,y:r.hy}}let p=Q(e.x,e.y,f.x,f.y);if(e.rockets>0){if(a>=ct.ROCKET_MIN&&a<460&&!kt(n,e.x,e.y,r.hx,r.hy)){Pn(e,r.hx,r.hy,s),qc(n,e,r.hx,r.hy,2.2);return}if(p>380){let m=Math.atan2(e.y-f.y,e.x-f.x),g=(e.id%5-2)*70,y=f.x+Math.cos(m)*320+Math.cos(m+Math.PI/2)*g,w=f.y+Math.sin(m)*320+Math.sin(m+Math.PI/2)*g;Ot(n,e,y,w,s),au(n,e,r)}else if(p<ct.ROCKET_MIN){let m=Math.atan2(e.y-f.y,e.x-f.x),g=e.x+Math.cos(m)*120*s,y=e.y+Math.sin(m)*120*s;Mt(n,g,y,13,{passOwner:e.owner})||(e.x=g,e.y=y)}else Pn(e,f.x,f.y,s),qc(n,e,f.x,f.y,2.2);return}if(e.satchels>0&&c){p<100?e.rkCd<=0&&(n.satchels.push({x:f.x,y:f.y,t:2,from:e.owner}),e.satchels--,e.rkCd=2.6,Ge(n,e.x,e.y,"satchel!","#ffd0a0")):(Ot(n,e,f.x,f.y,s,{arrive:80}),au(n,e,r));return}let x=Kc(n,e);if(x)Q(e.x,e.y,x.x,x.y)<480?(Pn(e,x.x,x.y,s),Gr(n,e,x,s)):Ot(n,e,x.x,x.y,s);else if(c){let m=Math.atan2(e.hy-r.hy,e.hx-r.hx),g=(e.id%5-2)*64;Ot(n,e,f.x+Math.cos(m)*380+Math.cos(m+Math.PI/2)*g,f.y+Math.sin(m)*380+Math.sin(m+Math.PI/2)*g,s,{arrive:40})}else if(p<380){let m=Math.atan2(e.y-f.y,e.x-f.x),g=e.x+Math.cos(m)*ru*s,y=e.y+Math.sin(m)*ru*s;Mt(n,g,y,13,{passOwner:e.owner})||(e.x=g,e.y=y)}else Ot(n,e,f.x,f.y,s,{arrive:340})}function Z0(n,e,t){let i=null,s=1e18;for(let[r,o]of n.deploys){if(o.type!=="turret"||o.owner!==t.owner)continue;let[a,l]=r.split(",").map(Number),c=st(a,l),h={1:340,2:380,3:460}[o.tier||1]+60,f=he(e.x,e.y,c.x,c.y);f<h*h&&!kt(n,e.x,e.y,c.x,c.y)&&f<s&&(s=f,i={key:r,c})}return i}function K0(n,e,t,i){for(let d of n.units)if(!(d.owner!==e.owner||d.dead||d.raid!==e.raid)&&he(d.x,d.y,i.hx,i.hy)<760*760&&!kt(n,d.x,d.y,i.hx,i.hy))return null;let s=t?t.brain:null;if(s&&s.breachKey&&n.t-s.breachT<1.5){let d=n.walls.get(s.breachKey);if(d&&d.hp>0&&!(d.type==="door"&&d.open)){let u=ra(n,s.breachKey,d);return{key:s.breachKey,c:u,door:d.type==="door"}}}let r=0,o=0,a=0;for(let d of n.units)d.owner===e.owner&&d.raid===e.raid&&!d.dead&&(r+=d.x,o+=d.y,a++);a||(r=e.x,o=e.y,a=1),r/=a,o/=a;let l=null,c=1e18,h=!1;for(let[d,u]of n.walls){if(u.owner!==i.owner||u.hp<=0||u.type==="door"&&u.open)continue;let p=ra(n,d,u);if(he(p.x,p.y,i.hx,i.hy)>Ut*Ut)continue;let x=(Q(r,o,p.x,p.y)+Q(p.x,p.y,i.hx,i.hy))*(u.type==="door"?.6:1);x<c&&(c=x,l=d,h=u.type==="door")}if(!l)return null;s&&(s.breachKey=l,s.breachT=n.t);let f=n.walls.get(l);return{key:l,c:ra(n,l,f),door:h}}function ra(n,e,t){let i=e.split(","),s=+i[1],r=+i[2];return i[0]==="V"?{x:s*64,y:r*64+64/2}:{x:s*64+64/2,y:r*64}}function au(n,e,t){let i=null,s=57600,r=!1;for(let[a,l]of n.walls){if(l.owner!==t.owner||l.hp<=0||l.type==="door"&&l.open)continue;let c=ra(n,a,l),h=he(e.x,e.y,c.x,c.y),f=l.type==="door";(h<s||f&&!r&&h<57600)&&(f||!r)&&(s=h,i=c,r=f)}if(!i||e.rkCd>0)return;let o=Q(e.x,e.y,i.x,i.y);e.rockets>0&&o>=ct.ROCKET_MIN?(Pn(e,i.x,i.y,1),qc(n,e,i.x,i.y,2.2)):o<90&&e.satchels>0&&(n.satchels.push({x:i.x,y:i.y,t:3,from:e.owner}),e.satchels--,e.rkCd=4.5)}function $0(n,e,t){e.wasRaid=!1,e.act="return",e.retT+=t;let i=Ot(n,e,e.hx+e.lane,e.hy+e.hoff,t,{arrive:64*1.5});if(i==="arrived"){Vr(n,e),e.state="gather",e.retT=0;return}if(i==="stuck"||e.retT>14){let s=e.ally?null:n.teams[e.id],r=s&&Bn(n,e);s&&r&&Dr(n,s,r)?i==="stuck"&&Gc(n,e):(Vr(n,e),e.state="gather",e.retT=0)}}function Vr(n,e){if(e.ally){for(let s of["wood","stone","metal"])n.inv[s]+=e.inv[s],e.inv[s]=0;n.inv.scrap+=e.scrap,e.scrap=0;return}let t=Bn(n,e),i=t&&wn(n,t.tcKey);if(i){for(let s of["wood","stone","metal"])i.store[s]+=e.inv[s],e.inv[s]=0;i.store.scrap+=e.scrap,e.scrap=0}}function J0(n,e,t,i,s){e.act="trade";let r=n.world.shop;if(!r){e.state="return";return}let o=(e.id>=0?e.id:3)+(e.tradeJitter||0),a=r.x+Math.cos(o*2.39996)*gt*.34,l=r.y+Math.sin(o*2.39996)*gt*.34;if(!e.tradeDone){if(Q(e.x,e.y,r.x,r.y)>gt*.55){if(e.copter&&!e.copter.destroyed){lu(n,e,a,l,s,gt*.5);return}Ot(n,e,a,l,s,{arrive:30})==="stuck"&&(e.tradeCd=n.t+20,e.tradeJitter=(e.tradeJitter||0)+1,e.state="return");return}j0(n,e,t,i),e.tradeDone=!0;return}if(e.flying){lu(n,e,e.hx-256,e.hy,s,46)&&(yu(e),e.tradeDone=!1,e.state="return");return}e.tradeDone=!1,e.state="return"}function j0(n,e,t,i){let s=0;for(;e.inv.wood>=100;)e.inv.wood-=100,e.scrap+=6,s+=6;for(;e.inv.stone>=100;)e.inv.stone-=100,e.scrap+=9,s+=9;for(;e.inv.metal>=50;)e.inv.metal-=50,e.scrap+=10,s+=10;s>0&&Ge(n,e.x,e.y,"+"+s+" scrap","#ffe07a");let r=Bn(n,e),o=r&&wn(n,r.tcKey);if(o){if(e.primary)e.scrap+=o.store.scrap,o.store.scrap=0;else if(e.rocketer){let c=Math.max(0,o.store.scrap-100);e.scrap+=c,o.store.scrap-=c}}let a=!1;for(e.primary&&t&&e.scrap>=Ht.cost&&!n.transports.some(c=>c.owner===e.owner&&!c.destroyed)&&gu(n,t)&&(e.scrap-=Ht.cost,bd(n,t,e),a=!0),!e.weak&&e.gun==="pistol"&&e.scrap>=10&&(e.scrap-=10,e.gun=e.shotgun?"shotgun":"rifle",Ge(n,e.x,e.y,"+"+e.gun,"#bfe3ff"),a=!0),e.hard&&e.gun==="rifle"&&!e.rifleLaser&&e.scrap>=10&&(e.scrap-=10,e.rifleLaser=!0,Ge(n,e.x,e.y,"+laser","#ff6a6a"),a=!0);e.rockets<2&&e.scrap>=12;)e.scrap-=12,e.rockets++,a=!0;if(e.primary&&e.rockets>=2)for(;e.scrap>=ct.WORKER_COST&&ia(n,e);)a=!0;for(;e.rockets<12&&e.scrap>=12;)e.scrap-=12,e.rockets++,a=!0;for(;e.satchels<4&&e.scrap>=8;)e.scrap-=8,e.satchels++,a=!0;if(e.grenades<2&&e.scrap>=8&&(e.scrap-=8,e.grenades++,a=!0),e.hard){for(;e.scrap>=14&&e.bodyArmor<3;)e.scrap-=14,e.bodyArmor++,Ge(n,e.x,e.y,"+armor","#9fb0c8"),a=!0;for(;e.scrap>=12&&e.facemask<3;)e.scrap-=12,e.facemask++,a=!0;for(;e.scrap>=20&&e.hqm<60;)e.scrap-=14,e.hqm+=10,a=!0}let l=n.units.filter(c=>c.owner===e.owner&&c.copter&&!c.copter.destroyed).length;(!e.copter||e.copter.destroyed)&&!e.aboard&&e.scrap>=ct.MINICOPTER_COST&&l<(e.hard?3:2)&&(e.scrap-=ct.MINICOPTER_COST,e.copter={x:e.x-128,y:e.y,angle:0,rotor:0,spin:0,vx:0,vy:0,hp:160,max:160,destroyed:!1},Ge(n,e.x,e.y,"+minicopter","#bfe3ff"),a=!0),a&&Ge(n,e.x,e.y-16,"resupplied","#bfe3ff")}function lu(n,e,t,i,s,r=44){let o=e.copter;if(!o||o.destroyed)return!0;e.flying||(o.x=e.x,o.y=e.y,e.flying=!0,e.flyT=0),e.flyT=(e.flyT||0)+s;let a=Q(o.x,o.y,t,i);if(a<r||e.flyT>9)return e.flyT>9&&(o.x=t,o.y=i,o.vx=o.vy=0),e.x=o.x,e.y=o.y,!0;let l=Math.atan2(i-o.y,t-o.x);o.angle=o.angle+sa(o.angle,l)*Math.min(1,s*4),o.rotor+=s*46;let c=a>160?1:Math.max(.12,a/160);o.vx+=Math.cos(o.angle)*ut.accel*c*s,o.vy+=Math.sin(o.angle)*ut.accel*c*s;let h=Math.pow(ut.drag,s);o.vx*=h,o.vy*=h;let f=Math.hypot(o.vx,o.vy);return f>ut.speed&&(o.vx*=ut.speed/f,o.vy*=ut.speed/f),o.x=nt(o.x+o.vx*s,ut.r,ce.w-ut.r),o.y=nt(o.y+o.vy*s,ut.r,ce.h-ut.r),e.x=o.x,e.y=o.y,!1}function yu(n){n.copter&&(n.copter.x=n.x,n.copter.y=n.y,n.copter.vx=0,n.copter.vy=0,n.copter.spin=0),n.flying=!1}function Q0(n,e,t,i,s){e.wasRaid=!1,e.retT=0;let r=e.inv.wood+e.inv.stone+e.inv.metal,o=Q(e.x,e.y,e.hx,e.hy),a=o<200;e.gathering=!1;let l=t&&Bn(n,e);if(e.buildDuty&&t&&l){let f=Dr(n,t,l);if(f){if(e.act="build",o>200){Ot(n,e,e.hx+e.lane,e.hy+e.hoff,s);return}r>0&&Vr(n,e),Dc(n,t,f,Gs(n,e))&&(Ge(n,e.x,e.y,"sealed","#9ad06a"),e.maintT=n.t);return}if(a){r>0&&Vr(n,e);let d=Jo(n,t,l);if(d&&ad(n,t,d,Gs(n,e))){e.act="build",e.maintT=n.t,Ge(n,e.x,e.y,"repaired","#9ad06a");return}if(e.expandT<=0&&(e.expandT=n.rng.rand(2.5,6),nu(n,e))){e.act="build",e.maintT=n.t;return}}}if(a&&t&&l&&((r>100||e.scrap>0)&&Vr(n,e),i.breach&&Dc(n,t,i.breach,Gs(n,e))&&(i.breach=null,i.sealed=!0,e.maintT=n.t,Ge(n,e.x,e.y,"sealed","#9ad06a"))),e.qRun){let f=n.quarry;if(!f||f.owner===e.owner||n.t>e.qRun.until)e.qRun=null;else{e.act="quarry";let d=Kc(n,e),u=Q(e.x,e.y,f.x,f.y);if(d&&u<f.r){Pn(e,d.x,d.y,s,10),Gr(n,e,d,s);return}u>f.r*.5&&Ot(n,e,f.x,f.y,s,{arrive:f.r*.4})==="stuck"&&(e.qRun=null);return}}if(e.lootRun){let f=e.lootRun,d=n.t<f.until;if(f.kind==="crate"&&(d=d&&!!n.lockedCrate),f.kind==="airdrop"){let u=Q(e.x,e.y,f.x,f.y);(u<2200&&n.airdrop||!n.airdrop&&u<480)&&(d=!1)}if(f.kind==="pile"&&(Q(e.x,e.y,f.x,f.y)<480?d=!1:n.loot.some(p=>(p.kind==="rocket"||p.kind==="satchel")&&he(p.x,p.y,f.x,f.y)<300*300)||(d=!1)),!d)e.lootRun=null;else{e.act="loot",f.kind==="crate"&&n.lockedCrate&&Q(e.x,e.y,n.lockedCrate.x,n.lockedCrate.y)<=90||Ot(n,e,f.x,f.y,s,{arrive:80,speed:170})==="stuck"&&(e.lootRun=null);return}}if(e.lootSkipSet&&n.t>e.lootSkipT&&(e.lootSkipSet=null),e.lootTgt&&(!n.loot.includes(e.lootTgt)||he(e.x,e.y,e.lootTgt.x,e.lootTgt.y)>560*560)&&(e.lootTgt=null),!e.lootTgt){let f=null,d=520*520;for(let u of n.loot){if(e.lootSkipSet&&e.lootSkipSet.has(u))continue;let p=he(e.x,e.y,u.x,u.y);p<d&&(d=p,f=u)}e.lootTgt=f}if(e.lootTgt){e.act="loot",(Ot(n,e,e.lootTgt.x,e.lootTgt.y,s,{arrive:22,speed:170})==="stuck"||e.directFallback&&e.stuckT>2)&&(e.lootSkipSet||(e.lootSkipSet=new Set),e.lootSkipSet.add(e.lootTgt),e.lootSkipT=n.t+25,e.lootTgt=null);return}if(n.airdrop&&n.t>(e.airdropCd||0)&&he(e.x,e.y,n.airdrop.x,n.airdrop.gy)<2600*2600){let f=n.airdrop;e.act="airdrop";let d=f.fall<1?f.gy:f.y,u=Q(e.x,e.y,f.x,d);if(f.fall>=1&&u<150){Pn(e,f.x,f.y,s,10),e.gunCd<=0&&oa(n,e,f.x,f.y);return}if(u>130){Ot(n,e,f.x,d,s,{arrive:120,speed:165})==="stuck"&&(e.airdropCd=n.t+25);return}return}if(n.lockedCrate&&!e.buildDuty&&n.t>(e.crateCd||0)&&he(e.x,e.y,n.lockedCrate.x,n.lockedCrate.y)<1600*1600){let f=n.lockedCrate;if(e.act="crate",Q(e.x,e.y,f.x,f.y)>90){Ot(n,e,f.x,f.y,s,{arrive:80,speed:165})==="stuck"&&(e.crateCd=n.t+30);return}return}if(!e.endgame){if(e.monRun){let f=Wc(n,e),d=f&&Hr(n,f);if(e.monRunT+=s,!d||r>=340||e.monRunT>12)e.monRun=!1,e.monCd=n.t+n.rng.rand(60,110);else{e.act="monument";let u=sg(n,f);if(u&&he(e.x,e.y,f.x,f.y)<(f.r+320)*(f.r+320)){Q(e.x,e.y,u.x,u.y)>340||kt(n,e.x,e.y,u.x,u.y)?Ot(n,e,u.x,u.y,s,{arrive:300})==="stuck"&&(e.monRun=!1,e.monCd=n.t+30):(Pn(e,u.x,u.y,s,10),Gr(n,e,{x:u.x,y:u.y,ref:u},s));return}let p=Hr(n,f);if(p){Q(e.x,e.y,p.x,p.y)>120?Ot(n,e,p.x,p.y,s,{arrive:110,speed:150})==="stuck"&&(e.monRun=!1,e.monCd=n.t+14):(Pn(e,p.x,p.y,s,10),e.gunCd<=0&&oa(n,e,p.x,p.y));return}}}else if(n.t>e.monCd&&r<200){let f=Wc(n,e);f&&Hr(n,f)&&(he(f.x,f.y,e.hx,e.hy)<2100*2100||he(f.x,f.y,e.x,e.y)<1300*1300)&&(e.monRun=!0,e.monRunT=0)}}let c=Wc(n,e);c&&he(e.x,e.y,c.x,c.y)<(c.r+150)*(c.r+150)&&!e.monRun?(e.monStay+=s,e.monStay>10&&(e.monStay=0,e.monCd=n.t+45,e.tgtNode=null)):e.monStay=Math.max(0,e.monStay-2*s);let h=eg(n,e);if(h){_u(n,e,h,s);return}if(c&&Hr(n,c)&&n.t>e.monCd){let f=Hr(n,c);e.act="monument",Q(e.x,e.y,f.x,f.y)>120?Ot(n,e,f.x,f.y,s,{arrive:110,speed:150})==="stuck"&&(e.monCd=n.t+30):(Pn(e,f.x,f.y,s,10),e.gunCd<=0&&oa(n,e,f.x,f.y));return}e.act="roam",rg(n,e,s)}function _u(n,e,t,i){if(Q(e.x,e.y,t.x,t.y)>t.r+22){e.act="toNode",Ot(n,e,t.x,t.y,i,{arrive:t.r+18})==="stuck"&&((!e.skipSet||n.t>e.skipT)&&(e.skipSet=new Set),e.skipSet.add(t),e.skipT=n.t+10,e.tgtNode=null);return}if(e.act="gather",e.gathering=!0,Pn(e,t.x,t.y,i),e.swing+=i*9,e.think<=0){e.think=.5;let r=Math.min(e.jack?24:8,t.amount);r>0&&(t.amount-=r,t.regen=0,e.inv[t.base]+=r,n.events.push({type:"harvest",x:t.x,y:t.y,kind:t.base,jack:e.jack}))}}function eg(n,e){if(e.tgtNode){let i=e.tgtNode,s=i.by&&i.by!==e&&!i.by.dead&&n.t-i.byT<3;if(i.amount>0&&!s)return i.by=e,i.byT=n.t,i;e.tgtNode=null}let t=[1400,2800,5600,1e9];for(let i of t){let s=null,r=1e18;for(let o of n.resources){if(o.amount<=0||e.skipSet&&e.skipSet.has(o)&&n.t<e.skipT)continue;let a=he(o.x,o.y,e.hx,e.hy);if(a<57600||a>i*i||o.by&&o.by!==e&&!o.by.dead&&n.t-o.byT<2.5||n.structures.has(tg(o.x,o.y)))continue;let l=he(e.x,e.y,o.x,o.y);l*=ng(n,e,o)?1:6,l<r&&(r=l,s=o)}if(s)return s.by=e,s.byT=n.t,e.tgtNode=s,s}return null}var tg=(n,e)=>Math.floor(n/64)+","+Math.floor(e/64);function ng(n,e,t){return t._losT&&n.t-t._losT<2&&t._losFor===e||(t._los=Jf(n,e.x,e.y,t.x,t.y),t._losT=n.t,t._losFor=e),t._los}function cu(n,e,t){let i=null,s=t*t;for(let r of n.resources){if(r.amount<=0)continue;let o=he(e.x,e.y,r.x,r.y);o<s&&(s=o,i=r)}return i}function ig(n,e,t,i){let s=null,r=i*i;for(let o of n.resources){if(o.amount<=0||o.base!==t)continue;let a=he(e.x,e.y,o.x,o.y);a<r&&(r=a,s=o)}return s}function Wc(n,e){let t=null,i=1e18;for(let s of n.world.monuments){if(s.type==="quarry")continue;let r=he(e.x,e.y,s.x,s.y);r<i&&(i=r,t=s)}return t}function Hr(n,e){for(let t of n.barrels)if(!(t.hp<=0||t.tier!=="mon")&&he(t.x,t.y,e.x,e.y)<(e.r+220)*(e.r+220))return t;return null}function sg(n,e){let t=null,i=(e.r+280)*(e.r+280);for(let s of n.guards){if(s.dead)continue;let r=he(s.x,s.y,e.x,e.y);r<i&&(i=r,t=s)}return t}function rg(n,e,t){if(!e.roamX||Q(e.x,e.y,e.roamX,e.roamY)<140||n.t>(e.roamT||0))for(let i=0;i<12;i++){let s=n.rng.rand(800,ce.w-800),r=n.rng.rand(800,ce.h-800);if(!(!n.world.onLand(s,r)||n.world.lakeAt(s,r))){e.roamX=s,e.roamY=r,e.roamT=n.t+n.rng.rand(7,13);break}}e.roamX&&Ot(n,e,e.roamX,e.roamY,t,{speed:140,arrive:120})==="stuck"&&(e.roamX=0)}function vu(n,e,t,i){e.hp<e.max*.35&&ag(n,e,t);let s=t.x,r=t.y;if(e.hard&&(t.vx||t.vy)){let l=e.weak?1150:1500,c=Math.min(.7,Q(e.x,e.y,t.x,t.y)/l);s+=(t.vx||0)*c,r+=(t.vy||0)*c}let o=Q(e.x,e.y,t.x,t.y);if(!kt(n,e.x,e.y,t.x,t.y)&&!si(n,e.x,e.y,t.x,t.y)&&o<460){if(Pn(e,s,r,i,10),Gr(n,e,{x:s,y:r,ref:t.ref},i),o<140?e.backoff=!0:o>180&&(e.backoff=!1),e.backoff){let l=Math.atan2(e.y-t.y,e.x-t.x),c=e.x+Math.cos(l)*120*i,h=e.y+Math.sin(l)*120*i;Mt(n,c,h,13,{passOwner:e.owner})||(e.x=c,e.y=h,e.path=null)}else if(e.regenT>0||e.retaliateT>0){e.strafeT-=i,e.strafeT<=0&&(e.strafeT=ct.STRAFE_FLIP,e.strafeS=-e.strafeS);let l=Math.atan2(t.y-e.y,t.x-e.x)+Math.PI/2*e.strafeS,c=e.x+Math.cos(l)*120*i,h=e.y+Math.sin(l)*120*i;Mt(n,c,h,13,{passOwner:e.owner})||(e.x=c,e.y=h,e.path=null)}}else Ot(n,e,t.x,t.y,i,{arrive:380})==="stuck"&&(e.disengageT=4,e.retaliateT=0,e.defHold=0,e.defTgt=null,e.thCache=null,t.ref&&(e.unreach=t.ref,e.unreachT=n.t+25))}function Gr(n,e,t,i){e.gunCd>0||e.flying||e.dead||bt(n,e.x,e.y)||bt(n,t.x,t.y)||kt(n,e.x,e.y,t.x,t.y)||si(n,e.x,e.y,t.x,t.y)||oa(n,e,t.x,t.y)}function oa(n,e,t,i){let s=Q(e.x,e.y,t,i),r=Math.atan2(i-e.y,t-e.x);e.angle=r;let o=18;if(e.gun==="shotgun"&&s<420){e.gunCd=.34;for(let a=0;a<6;a++)In(n,{x:e.x+Math.cos(r)*o,y:e.y+Math.sin(r)*o,angle:r+n.rng.rand(-.18,.18),speed:1050,dmg:8,from:e.owner,life:.95})}else if(e.gun==="rifle"){e.gunCd=e.hard?.12:.16;let a=e.hard?.02:.055;e.rifleLaser&&(a*=.45),In(n,{x:e.x+Math.cos(r)*o,y:e.y+Math.sin(r)*o,angle:r+n.rng.rand(-a,a),speed:1500,dmg:e.hard?13:11,from:e.owner,life:1.6})}else e.gunCd=.3,In(n,{x:e.x+Math.cos(r)*o,y:e.y+Math.sin(r)*o,angle:r+n.rng.rand(-.1,.1),speed:1150,dmg:7,from:e.owner,life:1.6});n.events.push({type:"botShot",x:e.x,y:e.y,a:r})}function qc(n,e,t,i,s){if(e.rkCd>0||e.rockets<=0||Q(e.x,e.y,t,i)<ct.ROCKET_MIN||bt(n,e.x,e.y))return!1;e.rkCd=s||2.4,e.rockets--;let r=Math.atan2(i-e.y,t-e.x);return Nr(n,e.x+Math.cos(r)*22,e.y+Math.sin(r)*22,r,e.owner),!0}function og(n,e,t){if(e.grenades<=0||e.gnCd>0)return;let i=Q(e.x,e.y,t.x,t.y);if(i<150||i>380)return;let s=!1,r=n.player;if(!r.dead&&he(t.x,t.y,r.x,r.y)<4900&&(s=!0),!s){for(let l of n.units)if(!l.dead&&l.owner!==e.owner&&he(t.x,t.y,l.x,l.y)<4900){s=!0;break}}if(!s)return;e.gnCd=n.rng.rand(5,8),e.grenades--;let o=Math.atan2(t.y-e.y,t.x-e.x),a=Math.min(420,i)*5.4;n.grenades.push({x:e.x+Math.cos(o)*22,y:e.y+Math.sin(o)*22,vx:Math.cos(o)*a*.2,vy:Math.sin(o)*a*.2,t:Fs.fuse,from:e.owner,bob:0}),Ge(n,e.x,e.y,"grenade!","#ffd0a0")}function ag(n,e,t){if(e.fenceCd>0)return;let i=Gs(n,e),s=0;for(let d of i)s+=d.wood||0;if(s<10)return;let r=Math.atan2(t.y-e.y,t.x-e.x),o=e.x+Math.cos(r)*30,a=e.y+Math.sin(r)*30,l=Math.floor(o/64),c=Math.floor(a/64);if(n.structures.has(l+","+c))return;let h=10;for(let d of i){let u=Math.min(h,d.wood||0);if(d.wood-=u,h-=u,h<=0)break}let f=r+Math.PI/2;n.fences.push({x:o,y:a,a:f,owner:e.owner,hp:200,max:200,t:60,x0:o-Math.cos(f)*23,y0:a-Math.sin(f)*23,x1:o+Math.cos(f)*23,y1:a+Math.sin(f)*23}),n.fences.length>120&&n.fences.shift(),n.needFenceRefresh=!0,e.fenceCd=9}function Mu(n,e){for(let[o,a]of n.walls)a.type==="door"&&a.open&&a.closeT!==void 0&&n.t>a.closeT&&(a.open=!1,n.nav.stamp++);let t=0;for(let o of n.teams)o.eliminated||(o.bases.some(a=>!a.dead)||n.units.some(a=>a.owner===o.owner&&a.unfounded&&!a.eliminated))&&t++;if(n.aliveBases=t,n.dbSweepT-=e,n.dbSweepT<=0){n.dbSweepT=2;for(let o of n.teams)for(let a of o.bases)!a.dead&&!wn(n,a.tcKey)&&(a.dead=!0),a.dead&&!a.cleared&&(a.cleared=!0,Pc(n,o.owner,a.hx,a.hy))}if(n.aggroT-=e,n.aggroT<=0){let o=n.teams.find(l=>l.owner===n.aggressorOwner);if(o&&!o.eliminated&&o.brain.raidTarget&&zn(n,o.brain.raidTarget)&&n.units.some(l=>l.owner===o.owner&&!l.dead&&!l.eliminated))n.aggroT=8;else{let l=n.teams.filter(c=>!c.eliminated&&n.units.some(h=>h.owner===c.owner&&h.primary&&!h.eliminated));if(l.length){let c=l[Math.floor(n.rng.next()*l.length)];n.aggressor=c.id,n.aggressorOwner=c.owner}n.aggroT=n.rng.rand(35,55)}}n.roleT-=e;let i=n.roleT<=0;i&&(n.roleT=.4);for(let o of n.teams){if(o.eliminated)continue;let a=o.brain,l=o.bases.filter(M=>!M.dead);if(!l.length)continue;let c=n.units.find(M=>M.owner===o.owner&&M.primary&&!M.eliminated);if(a.statusT-=e,a.statusT<=0){a.statusT=.5;let M=l[0];a.breach=Dr(n,o,M),a.damaged=Jo(n,o,M),a.sealed=!a.breach;let S=2,C=0,N=0;for(let B of n.structures.values())B.owner===o.owner&&(S++,N++);for(let B of n.deploys.values())B.owner===o.owner&&B.type==="turret"&&(S++,C++);let V=Br(n,o),Y=V?V.wood+V.stone+V.metal:0;a.decaying=Y<S*Tr*150;let U=o.hard?4:o.weak?2:3;a.ready=a.sealed&&C>=U&&Y>S*Tr*300&&N>=(o.hard?6:4),a.floors=N,a.turrets=C}if(!i)continue;let h=n.units.filter(M=>M.owner===o.owner&&!M.eliminated&&!M.dead&&!M.flying&&!M.unfounded&&!M.aboard),f=(M,S)=>l.some(C=>he(M,S,C.hx,C.hy)<720*720),d=0,u=0,p=0,x=n.player;!x.dead&&!x.inCopter&&!n.ghost&&f(x.x,x.y)&&(d++,u+=x.x,p+=x.y);for(let M of n.units)M.owner===o.owner||M.dead||M.flying||M.eliminated||f(M.x,M.y)&&(d++,u+=M.x,p+=M.y);let m=!1;for(let M of n.rockets)if(M.from!==o.owner&&f(M.x,M.y)){m=!0;break}if(!m){for(let M of n.satchels)if(M.from!==o.owner&&f(M.x,M.y)){m=!0;break}}a.attackers=d,a.urgent=m,a.attack=d>0||n.units.some(M=>M.raid===o&&M.state==="raid"&&!M.dead),a.aggressor=o.owner===n.aggressorOwner||n.aliveBases<=3;let g=0;if(o.hard)for(let M of n.units)M.owner===o.owner||M.dead||M.eliminated||M.state==="raid"&&M.raid===o&&l.some(S=>he(M.x,M.y,S.hx,S.hy)<1400*1400)&&g++;let y=Math.max(d,g),w=m?h.length:y>0?Math.min(y+1,h.length):0;d>0?(u/=d,p/=d):(u=l[0].hx,p=l[0].hy);let T=[...h].sort((M,S)=>he(M.x,M.y,u,p)-he(S.x,S.y,u,p));for(let M=0;M<T.length;M++)T[M].defDuty=M<w;let I=Br(n,o);(!a.sealed||I&&I.wood>=40&&a.floors<(o.hard?49:36))&&(a.buildHoldT=n.t+6);let L=h.filter(M=>!M.defDuty),_=null;n.t<a.buildHoldT&&L.length>=2&&(_=L.find(M=>M.buildDuty)||L.reduce((M,S)=>he(M.x,M.y,l[0].hx,l[0].hy)<he(S.x,S.y,l[0].hx,l[0].hy)?M:S,L[0]));for(let M of h)M.buildDuty=M===_;if(m||d>0&&!a.aggressor){a.raidTarget=null;for(let M of h)M.rocketer=!1}else if(a.ready||a.aggressor){let M=0;for(let U of h)M+=U.rockets+U.satchels;let S=h.filter(U=>!U.defDuty&&!U.buildDuty),C=Math.min(n.aliveBases<=4?3:2,S.length),N=S.filter(U=>U.rocketer);for(let U of h)U.rocketer&&(U.defDuty||U.buildDuty)&&(U.rocketer=!1,N=N.filter(B=>B!==U));if(N.length<C){let U=S.filter(B=>!B.rocketer).sort((B,q)=>q.rockets+q.satchels-(B.rockets+B.satchels)||he(B.x,B.y,l[0].hx,l[0].hy)-he(q.x,q.y,l[0].hx,l[0].hy));for(let B of U){if(N.length>=C)break;B.rocketer=!0,N.push(B)}}let V=a.aggressor?2:4,Y=h.filter(U=>!U.defDuty).length;c&&Y>=2&&M>=V?(!a.raidTarget||!zn(n,a.raidTarget))&&(a.raidTarget=Zc(n,o,c)):a.raidTarget=null}else{a.raidTarget=null;for(let M of h)M.rocketer=!1}if(o.hard&&n.t>a.lootCd&&!n.units.some(M=>M.owner===o.owner&&M.lootRun)){let M=null;if(n.lockedCrate)M={x:n.lockedCrate.x,y:n.lockedCrate.y,kind:"crate"};else if(n.airdrop)M={x:n.airdrop.x,y:n.airdrop.gy,kind:"airdrop"};else for(let S of n.loot){if(S.kind!=="rocket"&&S.kind!=="satchel")continue;let C=!1;for(let N of n.teams)if(!(N===o||N.eliminated)&&N.bases.some(V=>!V.dead&&he(S.x,S.y,V.hx,V.hy)<800*800)){C=!0;break}if(!C){M={x:S.x,y:S.y,kind:"pile"};break}}if(M){let S=n.units.filter(C=>C.owner===o.owner&&!C.dead&&!C.eliminated&&!C.primary&&!C.defDuty&&!C.buildDuty&&!C.rocketer&&!C.monRun&&C.state==="gather").sort((C,N)=>he(C.x,C.y,M.x,M.y)-he(N.x,N.y,M.x,M.y))[0];if(S){let C=Q(S.x,S.y,M.x,M.y),N=M.kind==="pile"?520:2400;C>N&&C<4500&&(S.lootRun={x:M.x,y:M.y,kind:M.kind,until:n.t+C/ct.BOT_SPEED*1.8+(M.kind==="crate"?170:20)},a.lootCd=n.t+45)}}}if(n.quarry&&n.quarry.owner!==o.owner&&n.t>a.qCd&&!n.units.some(M=>M.owner===o.owner&&M.qRun)){let M=n.units.filter(S=>S.owner===o.owner&&!S.dead&&!S.eliminated&&!S.primary&&!S.defDuty&&!S.buildDuty&&!S.rocketer&&!S.monRun&&!S.lootRun&&S.state==="gather").sort((S,C)=>he(S.x,S.y,n.quarry.x,n.quarry.y)-he(C.x,C.y,n.quarry.x,n.quarry.y))[0];if(M){let S=Q(M.x,M.y,n.quarry.x,n.quarry.y);S<5200&&(M.qRun={until:n.t+S/ct.BOT_SPEED*1.8+25},a.qCd=n.t+(o.hard?90:150))}}if(o.hard&&c&&!n.signal&&!n.plane&&!n.airdrop&&n.t>a.sigCd){let M=Br(n,o);if(c.scrap+(M?M.scrap:0)>=ct.SIGNAL_COST+60){let C=l[0];for(let N=0;N<8;N++){let V=N/8*Math.PI*2,Y=C.hx+Math.cos(V)*620,U=C.hy+Math.sin(V)*620;if(Y<300||U<300||Y>ce.w-300||U>ce.h-300||Q(Y,U,n.world.shop.x,n.world.shop.y)<gt||!n.world.onLand(Y,U)||n.world.lakeAt(Y,U))continue;let B=ct.SIGNAL_COST,q=Math.min(B,c.scrap);c.scrap-=q,B-=q,B>0&&M&&(M.scrap-=B),Pd(n,Y,U),a.sigCd=n.t+n.rng.rand(150,240),Ge(n,C.hx,C.hy-40,"supply signal!","#c9a0ff");break}}}}for(let o of n.teams)o.eliminated||iu(n,o,e);let s=0,r=null;for(let o of n.teams){if(o.eliminated)continue;let a=0;for(let l of n.units)l.owner===o.owner&&(a+=l.kills);a>s&&(s=a,r=o.id)}if(n.bounty=s>0?r:null,!n.metrics.winner){let o=n.teams.filter(a=>!a.eliminated);o.length===1&&n.teams.length>1&&(n.metrics.winner=o[0].owner,n.metrics.decisiveT=n.t)}}function bu(n){let e=wr;n.t+=e,n.tick++,n.clouds||zc(n),n.needFenceRefresh&&(n.needFenceRefresh=!1,Kf(n)),Od(n,e),gd(n,e),$d(n,e),Jd(n,e),xd(n,e),od(n,e),Cd(n,e),Ud(n,e),Ed(n,e),Ad(n,e),Sd(n,e),Dd(n,e),Ld(n,e),Rd(n,e),Nd(n,e),ud(n,e),vd(n,e),pd(n,e),md(n,e),lg(n,e),cg(n,e),n.raidAlarm&&(n.raidAlarm.t-=e,n.raidAlarm.t<=0&&(n.raidAlarm=null)),Mu(n,e),Td(n,e);for(let t of n.units)hu(n,t,e);for(let t=n.elims.length-1;t>=0;t--)n.elims[t].t-=e,n.elims[t].t<=0&&n.elims.splice(t,1);hd(n,e),_d(n,e),kd(n,e);for(let t=n.particles.length-1;t>=0;t--){let i=n.particles[t],s=Math.pow(.9,e*60);i.vx*=s,i.vy*=s,i.x+=i.vx*e,i.y+=i.vy*e,i.life-=e,i.life<=0&&n.particles.splice(t,1)}for(let t=n.floats.length-1;t>=0;t--){let i=n.floats[t];i.y+=i.vy*e,i.life-=e,i.life<=0&&n.floats.splice(t,1)}for(let t=n.flashes.length-1;t>=0;t--)n.flashes[t].life-=e,n.flashes[t].life<=0&&n.flashes.splice(t,1);for(let t=n.blasts.length-1;t>=0;t--)n.blasts[t].life-=e,n.blasts[t].life<=0&&n.blasts.splice(t,1);n.muzzle&&(n.muzzle.t-=e,n.muzzle.t<=0&&(n.muzzle=null)),n.shake=Math.max(0,n.shake-26*e),n.tip&&(n.tip.t-=e,n.tip.t<=0&&(n.tip=null)),n.events.length>600&&n.events.splice(0,n.events.length-600),n.tick%120===0&&fg(n)}function lg(n,e){for(let t=n.fences.length-1;t>=0;t--){let i=n.fences[t];i.t-=e,i.t<=0&&(n.fences.splice(t,1),n.needFenceRefresh=!0)}}function cg(n,e){for(let t=n.raids.length-1;t>=0;t--)n.raids[t].t-=e,n.raids[t].t<=0&&n.raids.splice(t,1)}function hg(n,e){let t=Math.floor(e.x/64),i=Math.floor(e.y/64);for(let s of["V,"+t+","+i,"V,"+(t+1)+","+i,"H,"+t+","+i,"H,"+t+","+(i+1)]){let r=n.walls.get(s);if(!r||r.hp<=0||r.type==="door"&&r.open||r.owner===e.owner)continue;let o=St(s,r);if(xt(e.x,e.y,o[0],o[1],o[2],o[3])<3)return!0}return!1}function fg(n){let e=n.metrics;for(let t of n.units)if(!(t.dead||t.eliminated)&&((!isFinite(t.x)||!isFinite(t.y))&&(e.nan=(e.nan||0)+1,t.x=t.hx,t.y=t.hy),hg(n,t)&&e.wallPhase++,t.stuckT>1.5&&t.state!=="raid")){let i=n.world.lakeAt(t.x,t.y),s="open";if(Math.abs(t.x-t.hx)<460&&Math.abs(t.y-t.hy)<460)s="base";else if(i)s="lake";else for(let r of n.world.monuments)if((t.x-r.x)**2+(t.y-r.y)**2<(r.r+220)**2){s="monument";break}e.regionStuck[s]+=2}if((!isFinite(n.player.x)||!isFinite(n.player.y))&&(e.nan=(e.nan||0)+1,n.player.x=6912,n.player.y=4868),n.t-(e._wlT||0)>=60){e._wlT=n.t;let t={t:Math.round(n.t)};for(let i of n.teams)t[i.owner]=n.units.filter(s=>s.owner===i.owner&&!s.eliminated).length;e.workerLog.push(t)}}var Ju=0,Lh=1,ju=2;var wo=1,Qu=2,gr=3,Li=0,gn=1,Rn=2,mi=0,ji=1,Fn=2,Dh=3,Nh=4,ep=5;var Qi=100,tp=101,np=102,ip=103,sp=104,rp=200,op=201,ap=202,lp=203,Na=204,Ua=205,cp=206,hp=207,fp=208,dp=209,up=210,pp=211,mp=212,gp=213,xp=214,ka=0,Fa=1,Oa=2,ws=3,Ba=4,za=5,Ha=6,Va=7,ml=0,yp=1,_p=2,Qn=0,Uh=1,kh=2,Fh=3,Oh=4,Bh=5,zh=6,Hh=7;var Vh=300,rs=301,Ss=302,gl=303,xl=304,To=306,Ts=1e3,ai=1001,Ga=1002,dn=1003,vp=1004;var Eo=1005;var mn=1006,yl=1007;var gi=1008;var Cn=1009,Gh=1010,Wh=1011,xr=1012,_l=1013,ei=1014,Xn=1015,xi=1016,vl=1017,Ml=1018,yr=1020,Xh=35902,qh=35899,Yh=1021,Zh=1022,qn=1023,li=1026,os=1027,bl=1028,wl=1029,as=1030,Tl=1031;var El=1033,Ao=33776,Ro=33777,Co=33778,So=33779,Al=35840,Rl=35841,Cl=35842,Sl=35843,Il=36196,Pl=37492,Ll=37496,Dl=37488,Nl=37489,Io=37490,Ul=37491,kl=37808,Fl=37809,Ol=37810,Bl=37811,zl=37812,Hl=37813,Vl=37814,Gl=37815,Wl=37816,Xl=37817,ql=37818,Yl=37819,Zl=37820,Kl=37821,$l=36492,Jl=36494,jl=36495,Ql=36283,ec=36284,Po=36285,tc=36286;var Qr=2300,Wa=2301,Da=2302,Mh=2303,bh=2400,wh=2401,Th=2402;var Mp=3200;var nc=0,bp=1,Oi="",fn="srgb",eo="srgb-linear",to="linear",wt="srgb";var bs=7680;var Eh=519,wp=512,Tp=513,Ep=514,ic=515,Ap=516,Rp=517,sc=518,Cp=519,Xa=35044;var Kh="300 es",jn=2e3,lr=2001;function dg(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ug(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function no(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Sp(){let n=no("canvas");return n.style.display="block",n}var wu={},cr=null;function io(...n){let e="THREE."+n.shift();cr?cr("log",e,...n):console.log(e,...n)}function Ip(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ze(...n){n=Ip(n);let e="THREE."+n.shift();if(cr)cr("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Ye(...n){n=Ip(n);let e="THREE."+n.shift();if(cr)cr("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function qa(...n){let e=n.join(" ");e in wu||(wu[e]=!0,Ze(...n))}function Pp(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var Lp={[ka]:Fa,[Oa]:Ha,[Ba]:Va,[ws]:za,[Fa]:ka,[Ha]:Oa,[Va]:Ba,[za]:ws},ci=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},_n=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var $c=Math.PI/180,Ya=180/Math.PI;function Ji(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(_n[n&255]+_n[n>>8&255]+_n[n>>16&255]+_n[n>>24&255]+"-"+_n[e&255]+_n[e>>8&255]+"-"+_n[e>>16&15|64]+_n[e>>24&255]+"-"+_n[t&63|128]+_n[t>>8&255]+"-"+_n[t>>16&255]+_n[t>>24&255]+_n[i&255]+_n[i>>8&255]+_n[i>>16&255]+_n[i>>24&255]).toLowerCase()}function ft(n,e,t){return Math.max(e,Math.min(t,n))}function pg(n,e){return(n%e+e)%e}function Jc(n,e,t){return(1-t)*n+t*e}function oi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function At(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var $e=class n{static{n.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ft(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ft(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},hi=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],f=i[s+3],d=r[o+0],u=r[o+1],p=r[o+2],x=r[o+3];if(f!==x||l!==d||c!==u||h!==p){let m=l*d+c*u+h*p+f*x;m<0&&(d=-d,u=-u,p=-p,x=-x,m=-m);let g=1-a;if(m<.9995){let y=Math.acos(m),w=Math.sin(y);g=Math.sin(g*y)/w,a=Math.sin(a*y)/w,l=l*g+d*a,c=c*g+u*a,h=h*g+p*a,f=f*g+x*a}else{l=l*g+d*a,c=c*g+u*a,h=h*g+p*a,f=f*g+x*a;let y=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=y,c*=y,h*=y,f*=y}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],f=r[o],d=r[o+1],u=r[o+2],p=r[o+3];return e[t]=a*p+h*f+l*u-c*d,e[t+1]=l*p+h*d+c*f-a*u,e[t+2]=c*p+h*u+a*d-l*f,e[t+3]=h*p-a*f-l*d-c*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),f=a(r/2),d=l(i/2),u=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=d*h*f+c*u*p,this._y=c*u*f-d*h*p,this._z=c*h*p+d*u*f,this._w=c*h*f-d*u*p;break;case"YXZ":this._x=d*h*f+c*u*p,this._y=c*u*f-d*h*p,this._z=c*h*p-d*u*f,this._w=c*h*f+d*u*p;break;case"ZXY":this._x=d*h*f-c*u*p,this._y=c*u*f+d*h*p,this._z=c*h*p+d*u*f,this._w=c*h*f-d*u*p;break;case"ZYX":this._x=d*h*f-c*u*p,this._y=c*u*f+d*h*p,this._z=c*h*p-d*u*f,this._w=c*h*f+d*u*p;break;case"YZX":this._x=d*h*f+c*u*p,this._y=c*u*f+d*h*p,this._z=c*h*p-d*u*f,this._w=c*h*f-d*u*p;break;case"XZY":this._x=d*h*f-c*u*p,this._y=c*u*f-d*h*p,this._z=c*h*p+d*u*f,this._w=c*h*f+d*u*p;break;default:Ze("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],f=t[10],d=i+a+f;if(d>0){let u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(h-l)*u,this._y=(r-c)*u,this._z=(o-s)*u}else if(i>a&&i>f){let u=2*Math.sqrt(1+i-a-f);this._w=(h-l)/u,this._x=.25*u,this._y=(s+o)/u,this._z=(r+c)/u}else if(a>f){let u=2*Math.sqrt(1+a-i-f);this._w=(r-c)/u,this._x=(s+o)/u,this._y=.25*u,this._z=(l+h)/u}else{let u=2*Math.sqrt(1+f-i-a);this._w=(o-s)/u,this._x=(r+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ft(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},z=class n{static{n.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Tu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Tu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),f=2*(r*i-o*t);return this.x=t+l*c+o*f-a*h,this.y=i+l*h+a*c-r*f,this.z=s+l*f+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this.z=ft(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this.z=ft(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ft(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return jc.copy(this).projectOnVector(e),this.sub(jc)}reflect(e){return this.sub(jc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ft(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},jc=new z,Tu=new hi,Qe=class n{static{n.prototype.isMatrix3=!0}constructor(e,t,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],f=i[7],d=i[2],u=i[5],p=i[8],x=s[0],m=s[3],g=s[6],y=s[1],w=s[4],T=s[7],I=s[2],E=s[5],L=s[8];return r[0]=o*x+a*y+l*I,r[3]=o*m+a*w+l*E,r[6]=o*g+a*T+l*L,r[1]=c*x+h*y+f*I,r[4]=c*m+h*w+f*E,r[7]=c*g+h*T+f*L,r[2]=d*x+u*y+p*I,r[5]=d*m+u*w+p*E,r[8]=d*g+u*T+p*L,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=h*o-a*c,d=a*l-h*r,u=c*r-o*l,p=t*f+i*d+s*u;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return e[0]=f*x,e[1]=(s*c-h*i)*x,e[2]=(a*i-s*o)*x,e[3]=d*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=u*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Qc.makeScale(e,t)),this}rotate(e){return this.premultiply(Qc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Qc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Qc=new Qe,Eu=new Qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Au=new Qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function mg(){let n={enabled:!0,workingColorSpace:eo,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===wt&&(s.r=Pi(s.r),s.g=Pi(s.g),s.b=Pi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===wt&&(s.r=ar(s.r),s.g=ar(s.g),s.b=ar(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Oi?to:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return qa("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return qa("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[eo]:{primaries:e,whitePoint:i,transfer:to,toXYZ:Eu,fromXYZ:Au,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:fn},outputColorSpaceConfig:{drawingBufferColorSpace:fn}},[fn]:{primaries:e,whitePoint:i,transfer:wt,toXYZ:Eu,fromXYZ:Au,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:fn}}}),n}var ht=mg();function Pi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ar(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Ws,Za=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ws===void 0&&(Ws=no("canvas")),Ws.width=e.width,Ws.height=e.height;let s=Ws.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Ws}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=no("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Pi(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Pi(t[i]/255)*255):t[i]=Pi(t[i]);return{data:t,width:e.width,height:e.height}}else return Ze("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},gg=0,hr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gg++}),this.uuid=Ji(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(eh(s[o].image)):r.push(eh(s[o]))}else r=eh(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function eh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Za.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ze("Texture: Unable to serialize Texture."),{})}var xg=0,th=new z,En=class n extends ci{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=ai,s=ai,r=mn,o=gi,a=qn,l=Cn,c=n.DEFAULT_ANISOTROPY,h=Oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xg++}),this.uuid=Ji(),this.name="",this.source=new hr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(th).x}get height(){return this.source.getSize(th).y}get depth(){return this.source.getSize(th).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Ze(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ze(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ts:e.x=e.x-Math.floor(e.x);break;case ai:e.x=e.x<0?0:1;break;case Ga:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ts:e.y=e.y-Math.floor(e.y);break;case ai:e.y=e.y<0?0:1;break;case Ga:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};En.DEFAULT_IMAGE=null;En.DEFAULT_MAPPING=Vh;En.DEFAULT_ANISOTROPY=1;var Vt=class n{static{n.prototype.isVector4=!0}constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],f=l[8],d=l[1],u=l[5],p=l[9],x=l[2],m=l[6],g=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-x)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+x)<.1&&Math.abs(p+m)<.1&&Math.abs(c+u+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(c+1)/2,T=(u+1)/2,I=(g+1)/2,E=(h+d)/4,L=(f+x)/4,_=(p+m)/4;return w>T&&w>I?w<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(w),s=E/i,r=L/i):T>I?T<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),i=E/s,r=_/s):I<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),i=L/r,s=_/r),this.set(i,s,r,t),this}let y=Math.sqrt((m-p)*(m-p)+(f-x)*(f-x)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-p)/y,this.y=(f-x)/y,this.z=(d-h)/y,this.w=Math.acos((c+u+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this.z=ft(this.z,e.z,t.z),this.w=ft(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this.z=ft(this.z,e,t),this.w=ft(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ft(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ka=class extends ci{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Vt(0,0,e,t),this.scissorTest=!1,this.viewport=new Vt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:i.depth},r=new En(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:mn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new hr(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}},Nn=class extends Ka{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},so=class extends En{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var $a=class extends En{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var dt=class n{static{n.prototype.isMatrix4=!0}constructor(e,t,i,s,r,o,a,l,c,h,f,d,u,p,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,f,d,u,p,x,m)}set(e,t,i,s,r,o,a,l,c,h,f,d,u,p,x,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=f,g[14]=d,g[3]=u,g[7]=p,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();let t=this.elements,i=e.elements,s=1/Xs.setFromMatrixColumn(e,0).length(),r=1/Xs.setFromMatrixColumn(e,1).length(),o=1/Xs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let d=o*h,u=o*f,p=a*h,x=a*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=u+p*c,t[5]=d-x*c,t[9]=-a*l,t[2]=x-d*c,t[6]=p+u*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*h,u=l*f,p=c*h,x=c*f;t[0]=d+x*a,t[4]=p*a-u,t[8]=o*c,t[1]=o*f,t[5]=o*h,t[9]=-a,t[2]=u*a-p,t[6]=x+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*h,u=l*f,p=c*h,x=c*f;t[0]=d-x*a,t[4]=-o*f,t[8]=p+u*a,t[1]=u+p*a,t[5]=o*h,t[9]=x-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*h,u=o*f,p=a*h,x=a*f;t[0]=l*h,t[4]=p*c-u,t[8]=d*c+x,t[1]=l*f,t[5]=x*c+d,t[9]=u*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,u=o*c,p=a*l,x=a*c;t[0]=l*h,t[4]=x-d*f,t[8]=p*f+u,t[1]=f,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=u*f+p,t[10]=d-x*f}else if(e.order==="XZY"){let d=o*l,u=o*c,p=a*l,x=a*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=d*f+x,t[5]=o*h,t[9]=u*f-p,t[2]=p*f-u,t[6]=a*h,t[10]=x*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(yg,e,_g)}lookAt(e,t,i){let s=this.elements;return Ln.subVectors(e,t),Ln.lengthSq()===0&&(Ln.z=1),Ln.normalize(),Xi.crossVectors(i,Ln),Xi.lengthSq()===0&&(Math.abs(i.z)===1?Ln.x+=1e-4:Ln.z+=1e-4,Ln.normalize(),Xi.crossVectors(i,Ln)),Xi.normalize(),aa.crossVectors(Ln,Xi),s[0]=Xi.x,s[4]=aa.x,s[8]=Ln.x,s[1]=Xi.y,s[5]=aa.y,s[9]=Ln.y,s[2]=Xi.z,s[6]=aa.z,s[10]=Ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],f=i[5],d=i[9],u=i[13],p=i[2],x=i[6],m=i[10],g=i[14],y=i[3],w=i[7],T=i[11],I=i[15],E=s[0],L=s[4],_=s[8],M=s[12],S=s[1],C=s[5],N=s[9],V=s[13],Y=s[2],U=s[6],B=s[10],q=s[14],ae=s[3],J=s[7],ee=s[11],te=s[15];return r[0]=o*E+a*S+l*Y+c*ae,r[4]=o*L+a*C+l*U+c*J,r[8]=o*_+a*N+l*B+c*ee,r[12]=o*M+a*V+l*q+c*te,r[1]=h*E+f*S+d*Y+u*ae,r[5]=h*L+f*C+d*U+u*J,r[9]=h*_+f*N+d*B+u*ee,r[13]=h*M+f*V+d*q+u*te,r[2]=p*E+x*S+m*Y+g*ae,r[6]=p*L+x*C+m*U+g*J,r[10]=p*_+x*N+m*B+g*ee,r[14]=p*M+x*V+m*q+g*te,r[3]=y*E+w*S+T*Y+I*ae,r[7]=y*L+w*C+T*U+I*J,r[11]=y*_+w*N+T*B+I*ee,r[15]=y*M+w*V+T*q+I*te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],f=e[6],d=e[10],u=e[14],p=e[3],x=e[7],m=e[11],g=e[15],y=l*u-c*d,w=a*u-c*f,T=a*d-l*f,I=o*u-c*h,E=o*d-l*h,L=o*f-a*h;return t*(x*y-m*w+g*T)-i*(p*y-m*I+g*E)+s*(p*w-x*I+g*L)-r*(p*T-x*E+m*L)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=e[9],d=e[10],u=e[11],p=e[12],x=e[13],m=e[14],g=e[15],y=t*a-i*o,w=t*l-s*o,T=t*c-r*o,I=i*l-s*a,E=i*c-r*a,L=s*c-r*l,_=h*x-f*p,M=h*m-d*p,S=h*g-u*p,C=f*m-d*x,N=f*g-u*x,V=d*g-u*m,Y=y*V-w*N+T*C+I*S-E*M+L*_;if(Y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/Y;return e[0]=(a*V-l*N+c*C)*U,e[1]=(s*N-i*V-r*C)*U,e[2]=(x*L-m*E+g*I)*U,e[3]=(d*E-f*L-u*I)*U,e[4]=(l*S-o*V-c*M)*U,e[5]=(t*V-s*S+r*M)*U,e[6]=(m*T-p*L-g*w)*U,e[7]=(h*L-d*T+u*w)*U,e[8]=(o*N-a*S+c*_)*U,e[9]=(i*S-t*N-r*_)*U,e[10]=(p*E-x*T+g*y)*U,e[11]=(f*T-h*E-u*y)*U,e[12]=(a*M-o*C-l*_)*U,e[13]=(t*C-i*M+s*_)*U,e[14]=(x*w-p*I-m*y)*U,e[15]=(h*I-f*w+d*y)*U,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,f=a+a,d=r*c,u=r*h,p=r*f,x=o*h,m=o*f,g=a*f,y=l*c,w=l*h,T=l*f,I=i.x,E=i.y,L=i.z;return s[0]=(1-(x+g))*I,s[1]=(u+T)*I,s[2]=(p-w)*I,s[3]=0,s[4]=(u-T)*E,s[5]=(1-(d+g))*E,s[6]=(m+y)*E,s[7]=0,s[8]=(p+w)*L,s[9]=(m-y)*L,s[10]=(1-(d+x))*L,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinant();if(r===0)return i.set(1,1,1),t.identity(),this;let o=Xs.set(s[0],s[1],s[2]).length(),a=Xs.set(s[4],s[5],s[6]).length(),l=Xs.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Kn.copy(this);let c=1/o,h=1/a,f=1/l;return Kn.elements[0]*=c,Kn.elements[1]*=c,Kn.elements[2]*=c,Kn.elements[4]*=h,Kn.elements[5]*=h,Kn.elements[6]*=h,Kn.elements[8]*=f,Kn.elements[9]*=f,Kn.elements[10]*=f,t.setFromRotationMatrix(Kn),i.x=o,i.y=a,i.z=l,this}makePerspective(e,t,i,s,r,o,a=jn,l=!1){let c=this.elements,h=2*r/(t-e),f=2*r/(i-s),d=(t+e)/(t-e),u=(i+s)/(i-s),p,x;if(l)p=r/(o-r),x=o*r/(o-r);else if(a===jn)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===lr)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=jn,l=!1){let c=this.elements,h=2/(t-e),f=2/(i-s),d=-(t+e)/(t-e),u=-(i+s)/(i-s),p,x;if(l)p=1/(o-r),x=o/(o-r);else if(a===jn)p=-2/(o-r),x=-(o+r)/(o-r);else if(a===lr)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=u,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Xs=new z,Kn=new dt,yg=new z(0,0,0),_g=new z(1,1,1),Xi=new z,aa=new z,Ln=new z,Ru=new dt,Cu=new hi,Di=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],f=s[2],d=s[6],u=s[10];switch(t){case"XYZ":this._y=Math.asin(ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ft(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(ft(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,u),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ft(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ft(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:Ze("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ru.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ru,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Cu.setFromEuler(this),this.setFromQuaternion(Cu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Di.DEFAULT_ORDER="XYZ";var fr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},vg=0,Su=new z,qs=new hi,Ei=new dt,la=new z,Wr=new z,Mg=new z,bg=new hi,Iu=new z(1,0,0),Pu=new z(0,1,0),Lu=new z(0,0,1),Du={type:"added"},wg={type:"removed"},Ys={type:"childadded",child:null},nh={type:"childremoved",child:null},en=class n extends ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vg++}),this.uuid=Ji(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new z,t=new Di,i=new hi,s=new z(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new dt},normalMatrix:{value:new Qe}}),this.matrix=new dt,this.matrixWorld=new dt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return qs.setFromAxisAngle(e,t),this.quaternion.multiply(qs),this}rotateOnWorldAxis(e,t){return qs.setFromAxisAngle(e,t),this.quaternion.premultiply(qs),this}rotateX(e){return this.rotateOnAxis(Iu,e)}rotateY(e){return this.rotateOnAxis(Pu,e)}rotateZ(e){return this.rotateOnAxis(Lu,e)}translateOnAxis(e,t){return Su.copy(e).applyQuaternion(this.quaternion),this.position.add(Su.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Iu,e)}translateY(e){return this.translateOnAxis(Pu,e)}translateZ(e){return this.translateOnAxis(Lu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ei.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?la.copy(e):la.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Wr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ei.lookAt(Wr,la,this.up):Ei.lookAt(la,Wr,this.up),this.quaternion.setFromRotationMatrix(Ei),s&&(Ei.extractRotation(s.matrixWorld),qs.setFromRotationMatrix(Ei),this.quaternion.premultiply(qs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ye("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Du),Ys.child=e,this.dispatchEvent(Ys),Ys.child=null):Ye("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(wg),nh.child=e,this.dispatchEvent(nh),nh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ei),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Du),Ys.child=e,this.dispatchEvent(Ys),Ys.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wr,e,Mg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wr,bg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),f=o(e.shapes),d=o(e.skeletons),u=o(e.animations),p=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),u.length>0&&(i.animations=u),p.length>0&&(i.nodes=p)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};en.DEFAULT_UP=new z(0,1,0);en.DEFAULT_MATRIX_AUTO_UPDATE=!0;en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ke=class extends en{constructor(){super(),this.isGroup=!0,this.type="Group"}},Tg={type:"move"},dr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ke,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ke,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ke,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,i),g=this._getHandJoint(c,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=h.position.distanceTo(f.position),u=.02,p=.005;c.inputState.pinching&&d>u+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=u-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Tg)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Ke;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Dp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qi={h:0,s:0,l:0},ca={h:0,s:0,l:0};function ih(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Je=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=fn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=ht.workingColorSpace){return this.r=e,this.g=t,this.b=i,ht.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=ht.workingColorSpace){if(e=pg(e,1),t=ft(t,0,1),i=ft(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=ih(o,r,e+1/3),this.g=ih(o,r,e),this.b=ih(o,r,e-1/3)}return ht.colorSpaceToWorking(this,s),this}setStyle(e,t=fn){function i(r){r!==void 0&&parseFloat(r)<1&&Ze("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ze("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Ze("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=fn){let i=Dp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ze("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pi(e.r),this.g=Pi(e.g),this.b=Pi(e.b),this}copyLinearToSRGB(e){return this.r=ar(e.r),this.g=ar(e.g),this.b=ar(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fn){return ht.workingToColorSpace(vn.copy(this),e),Math.round(ft(vn.r*255,0,255))*65536+Math.round(ft(vn.g*255,0,255))*256+Math.round(ft(vn.b*255,0,255))}getHexString(e=fn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ht.workingColorSpace){ht.workingToColorSpace(vn.copy(this),t);let i=vn.r,s=vn.g,r=vn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ht.workingColorSpace){return ht.workingToColorSpace(vn.copy(this),t),e.r=vn.r,e.g=vn.g,e.b=vn.b,e}getStyle(e=fn){ht.workingToColorSpace(vn.copy(this),e);let t=vn.r,i=vn.g,s=vn.b;return e!==fn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(qi),this.setHSL(qi.h+e,qi.s+t,qi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(qi),e.getHSL(ca);let i=Jc(qi.h,ca.h,t),s=Jc(qi.s,ca.s,t),r=Jc(qi.l,ca.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},vn=new Je;Je.NAMES=Dp;var ro=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Je(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},oo=class extends en{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Di,this.environmentIntensity=1,this.environmentRotation=new Di,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},$n=new z,Ai=new z,sh=new z,Ri=new z,Zs=new z,Ks=new z,Nu=new z,rh=new z,oh=new z,ah=new z,lh=new Vt,ch=new Vt,hh=new Vt,Ii=class n{constructor(e=new z,t=new z,i=new z){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),$n.subVectors(e,t),s.cross($n);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){$n.subVectors(s,t),Ai.subVectors(i,t),sh.subVectors(e,t);let o=$n.dot($n),a=$n.dot(Ai),l=$n.dot(sh),c=Ai.dot(Ai),h=Ai.dot(sh),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;let d=1/f,u=(c*l-a*h)*d,p=(o*h-a*l)*d;return r.set(1-u-p,p,u)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Ri)===null?!1:Ri.x>=0&&Ri.y>=0&&Ri.x+Ri.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ri.x),l.addScaledVector(o,Ri.y),l.addScaledVector(a,Ri.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return lh.setScalar(0),ch.setScalar(0),hh.setScalar(0),lh.fromBufferAttribute(e,t),ch.fromBufferAttribute(e,i),hh.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(lh,r.x),o.addScaledVector(ch,r.y),o.addScaledVector(hh,r.z),o}static isFrontFacing(e,t,i,s){return $n.subVectors(i,t),Ai.subVectors(e,t),$n.cross(Ai).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $n.subVectors(this.c,this.b),Ai.subVectors(this.a,this.b),$n.cross(Ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;Zs.subVectors(s,i),Ks.subVectors(r,i),rh.subVectors(e,i);let l=Zs.dot(rh),c=Ks.dot(rh);if(l<=0&&c<=0)return t.copy(i);oh.subVectors(e,s);let h=Zs.dot(oh),f=Ks.dot(oh);if(h>=0&&f<=h)return t.copy(s);let d=l*f-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(Zs,o);ah.subVectors(e,r);let u=Zs.dot(ah),p=Ks.dot(ah);if(p>=0&&u<=p)return t.copy(r);let x=u*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(i).addScaledVector(Ks,a);let m=h*p-u*f;if(m<=0&&f-h>=0&&u-p>=0)return Nu.subVectors(r,s),a=(f-h)/(f-h+(u-p)),t.copy(s).addScaledVector(Nu,a);let g=1/(m+x+d);return o=x*g,a=d*g,t.copy(i).addScaledVector(Zs,o).addScaledVector(Ks,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},fi=class{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Jn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Jn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Jn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Jn):Jn.fromBufferAttribute(r,o),Jn.applyMatrix4(e.matrixWorld),this.expandByPoint(Jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ha.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ha.copy(i.boundingBox)),ha.applyMatrix4(e.matrixWorld),this.union(ha)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Jn),Jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xr),fa.subVectors(this.max,Xr),$s.subVectors(e.a,Xr),Js.subVectors(e.b,Xr),js.subVectors(e.c,Xr),Yi.subVectors(Js,$s),Zi.subVectors(js,Js),ys.subVectors($s,js);let t=[0,-Yi.z,Yi.y,0,-Zi.z,Zi.y,0,-ys.z,ys.y,Yi.z,0,-Yi.x,Zi.z,0,-Zi.x,ys.z,0,-ys.x,-Yi.y,Yi.x,0,-Zi.y,Zi.x,0,-ys.y,ys.x,0];return!fh(t,$s,Js,js,fa)||(t=[1,0,0,0,1,0,0,0,1],!fh(t,$s,Js,js,fa))?!1:(da.crossVectors(Yi,Zi),t=[da.x,da.y,da.z],fh(t,$s,Js,js,fa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ci=[new z,new z,new z,new z,new z,new z,new z,new z],Jn=new z,ha=new fi,$s=new z,Js=new z,js=new z,Yi=new z,Zi=new z,ys=new z,Xr=new z,fa=new z,da=new z,_s=new z;function fh(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){_s.fromArray(n,r);let a=s.x*Math.abs(_s.x)+s.y*Math.abs(_s.y)+s.z*Math.abs(_s.z),l=e.dot(_s),c=t.dot(_s),h=i.dot(_s);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Qt=new z,ua=new $e,Eg=0,Kt=class extends ci{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Eg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Xa,this.updateRanges=[],this.gpuType=Xn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ua.fromBufferAttribute(this,t),ua.applyMatrix3(e),this.setXY(t,ua.x,ua.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix3(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix4(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.applyNormalMatrix(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.transformDirection(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=oi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=At(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=oi(t,this.array)),t}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=oi(t,this.array)),t}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=oi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=oi(t,this.array)),t}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),i=At(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),i=At(i,this.array),s=At(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),i=At(i,this.array),s=At(s,this.array),r=At(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Xa&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}};var ao=class extends Kt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var lo=class extends Kt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var It=class extends Kt{constructor(e,t,i){super(new Float32Array(e),t,i)}},Ag=new fi,qr=new z,dh=new z,Ni=class{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Ag.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;qr.subVectors(e,this.center);let t=qr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(qr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(dh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(qr.copy(e.center).add(dh)),this.expandByPoint(qr.copy(e.center).sub(dh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Rg=0,Hn=new dt,uh=new en,Qs=new z,Dn=new fi,Yr=new fi,hn=new z,Gt=class n extends ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rg++}),this.uuid=Ji(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(dg(e)?lo:ao)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Qe().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Hn.makeRotationFromQuaternion(e),this.applyMatrix4(Hn),this}rotateX(e){return Hn.makeRotationX(e),this.applyMatrix4(Hn),this}rotateY(e){return Hn.makeRotationY(e),this.applyMatrix4(Hn),this}rotateZ(e){return Hn.makeRotationZ(e),this.applyMatrix4(Hn),this}translate(e,t,i){return Hn.makeTranslation(e,t,i),this.applyMatrix4(Hn),this}scale(e,t,i){return Hn.makeScale(e,t,i),this.applyMatrix4(Hn),this}lookAt(e){return uh.lookAt(e),uh.updateMatrix(),this.applyMatrix4(uh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qs).negate(),this.translate(Qs.x,Qs.y,Qs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new It(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ze("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Dn.setFromBufferAttribute(r),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,Dn.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,Dn.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(Dn.min),this.boundingBox.expandByPoint(Dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ye('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ni);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){let i=this.boundingSphere.center;if(Dn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Yr.setFromBufferAttribute(a),this.morphTargetsRelative?(hn.addVectors(Dn.min,Yr.min),Dn.expandByPoint(hn),hn.addVectors(Dn.max,Yr.max),Dn.expandByPoint(hn)):(Dn.expandByPoint(Yr.min),Dn.expandByPoint(Yr.max))}Dn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)hn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(hn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)hn.fromBufferAttribute(a,c),l&&(Qs.fromBufferAttribute(e,c),hn.add(Qs)),s=Math.max(s,i.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ye('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ye("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Kt(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let _=0;_<i.count;_++)a[_]=new z,l[_]=new z;let c=new z,h=new z,f=new z,d=new $e,u=new $e,p=new $e,x=new z,m=new z;function g(_,M,S){c.fromBufferAttribute(i,_),h.fromBufferAttribute(i,M),f.fromBufferAttribute(i,S),d.fromBufferAttribute(r,_),u.fromBufferAttribute(r,M),p.fromBufferAttribute(r,S),h.sub(c),f.sub(c),u.sub(d),p.sub(d);let C=1/(u.x*p.y-p.x*u.y);isFinite(C)&&(x.copy(h).multiplyScalar(p.y).addScaledVector(f,-u.y).multiplyScalar(C),m.copy(f).multiplyScalar(u.x).addScaledVector(h,-p.x).multiplyScalar(C),a[_].add(x),a[M].add(x),a[S].add(x),l[_].add(m),l[M].add(m),l[S].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let _=0,M=y.length;_<M;++_){let S=y[_],C=S.start,N=S.count;for(let V=C,Y=C+N;V<Y;V+=3)g(e.getX(V+0),e.getX(V+1),e.getX(V+2))}let w=new z,T=new z,I=new z,E=new z;function L(_){I.fromBufferAttribute(s,_),E.copy(I);let M=a[_];w.copy(M),w.sub(I.multiplyScalar(I.dot(M))).normalize(),T.crossVectors(E,M);let C=T.dot(l[_])<0?-1:1;o.setXYZW(_,w.x,w.y,w.z,C)}for(let _=0,M=y.length;_<M;++_){let S=y[_],C=S.start,N=S.count;for(let V=C,Y=C+N;V<Y;V+=3)L(e.getX(V+0)),L(e.getX(V+1)),L(e.getX(V+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Kt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,u=i.count;d<u;d++)i.setXYZ(d,0,0,0);let s=new z,r=new z,o=new z,a=new z,l=new z,c=new z,h=new z,f=new z;if(e)for(let d=0,u=e.count;d<u;d+=3){let p=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),a.fromBufferAttribute(i,p),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,u=t.count;d<u;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)hn.fromBufferAttribute(e,t),hn.normalize(),e.setXYZ(t,hn.x,hn.y,hn.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,f=a.normalized,d=new c.constructor(l.length*h),u=0,p=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?u=l[x]*a.data.stride+a.offset:u=l[x]*h;for(let g=0;g<h;g++)d[p++]=c[u++]}return new Kt(d,h,f)}if(this.index===null)return Ze("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,f=c.length;h<f;h++){let d=c[h],u=e(d,i);l.push(u)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,d=c.length;f<d;f++){let u=c[f];h.push(u.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],f=r[c];for(let d=0,u=f.length;d<u;d++)h.push(f[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ja=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Xa,this.updateRanges=[],this.version=0,this.uuid=Ji()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ji()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ji()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Tn=new z,co=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Tn.fromBufferAttribute(this,t),Tn.applyMatrix4(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Tn.fromBufferAttribute(this,t),Tn.applyNormalMatrix(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Tn.fromBufferAttribute(this,t),Tn.transformDirection(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=oi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=At(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=oi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=oi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=oi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=oi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),i=At(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),i=At(i,this.array),s=At(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),i=At(i,this.array),s=At(s,this.array),r=At(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){io("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Kt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){io("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Cg=0,di=class extends ci{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cg++}),this.uuid=Ji(),this.name="",this.type="Material",this.blending=ji,this.side=Li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Na,this.blendDst=Ua,this.blendEquation=Qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Eh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bs,this.stencilZFail=bs,this.stencilZPass=bs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Ze(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ze(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ji&&(i.blending=this.blending),this.side!==Li&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Na&&(i.blendSrc=this.blendSrc),this.blendDst!==Ua&&(i.blendDst=this.blendDst),this.blendEquation!==Qi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ws&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Eh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==bs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==bs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==bs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},es=class extends di{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Je(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},er,Zr=new z,tr=new z,nr=new z,ir=new $e,Kr=new $e,Np=new dt,pa=new z,$r=new z,ma=new z,Uu=new $e,ph=new $e,ku=new $e,Es=class extends en{constructor(e=new es){if(super(),this.isSprite=!0,this.type="Sprite",er===void 0){er=new Gt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Ja(t,5);er.setIndex([0,1,2,0,2,3]),er.setAttribute("position",new co(i,3,0,!1)),er.setAttribute("uv",new co(i,2,3,!1))}this.geometry=er,this.material=e,this.center=new $e(.5,.5),this.count=1}raycast(e,t){e.camera===null&&Ye('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),tr.setFromMatrixScale(this.matrixWorld),Np.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),nr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&tr.multiplyScalar(-nr.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;ga(pa.set(-.5,-.5,0),nr,o,tr,s,r),ga($r.set(.5,-.5,0),nr,o,tr,s,r),ga(ma.set(.5,.5,0),nr,o,tr,s,r),Uu.set(0,0),ph.set(1,0),ku.set(1,1);let a=e.ray.intersectTriangle(pa,$r,ma,!1,Zr);if(a===null&&(ga($r.set(-.5,.5,0),nr,o,tr,s,r),ph.set(0,1),a=e.ray.intersectTriangle(pa,ma,$r,!1,Zr),a===null))return;let l=e.ray.origin.distanceTo(Zr);l<e.near||l>e.far||t.push({distance:l,point:Zr.clone(),uv:Ii.getInterpolation(Zr,pa,$r,ma,Uu,ph,ku,new $e),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function ga(n,e,t,i,s,r){ir.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(Kr.x=r*ir.x-s*ir.y,Kr.y=s*ir.x+r*ir.y):Kr.copy(ir),n.copy(e),n.x+=Kr.x,n.y+=Kr.y,n.applyMatrix4(Np)}var Si=new z,mh=new z,xa=new z,Ki=new z,gh=new z,ya=new z,xh=new z,ur=class{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Si)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Si.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Si.copy(this.origin).addScaledVector(this.direction,t),Si.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){mh.copy(e).add(t).multiplyScalar(.5),xa.copy(t).sub(e).normalize(),Ki.copy(this.origin).sub(mh);let r=e.distanceTo(t)*.5,o=-this.direction.dot(xa),a=Ki.dot(this.direction),l=-Ki.dot(xa),c=Ki.lengthSq(),h=Math.abs(1-o*o),f,d,u,p;if(h>0)if(f=o*l-a,d=o*a-l,p=r*h,f>=0)if(d>=-p)if(d<=p){let x=1/h;f*=x,d*=x,u=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=r,f=Math.max(0,-(o*d+a)),u=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(o*d+a)),u=-f*f+d*(d+2*l)+c;else d<=-p?(f=Math.max(0,-(-o*r+a)),d=f>0?-r:Math.min(Math.max(-r,-l),r),u=-f*f+d*(d+2*l)+c):d<=p?(f=0,d=Math.min(Math.max(-r,-l),r),u=d*(d+2*l)+c):(f=Math.max(0,-(o*r+a)),d=f>0?r:Math.min(Math.max(-r,-l),r),u=-f*f+d*(d+2*l)+c);else d=o>0?-r:r,f=Math.max(0,-(o*d+a)),u=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(mh).addScaledVector(xa,d),u}intersectSphere(e,t){Si.subVectors(e.center,this.origin);let i=Si.dot(this.direction),s=Si.dot(Si)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Si)!==null}intersectTriangle(e,t,i,s,r){gh.subVectors(t,e),ya.subVectors(i,e),xh.crossVectors(gh,ya);let o=this.direction.dot(xh),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ki.subVectors(this.origin,e);let l=a*this.direction.dot(ya.crossVectors(Ki,ya));if(l<0)return null;let c=a*this.direction.dot(gh.cross(Ki));if(c<0||l+c>o)return null;let h=-a*Ki.dot(xh);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},tn=class extends di{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Di,this.combine=ml,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Fu=new dt,vs=new ur,_a=new Ni,Ou=new z,va=new z,Ma=new z,ba=new z,yh=new z,wa=new z,Bu=new z,Ta=new z,pe=class extends en{constructor(e=new Gt,t=new tn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){wa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],f=r[l];h!==0&&(yh.fromBufferAttribute(f,e),o?wa.addScaledVector(yh,h):wa.addScaledVector(yh.sub(t),h))}t.add(wa)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),_a.copy(i.boundingSphere),_a.applyMatrix4(r),vs.copy(e.ray).recast(e.near),!(_a.containsPoint(vs.origin)===!1&&(vs.intersectSphere(_a,Ou)===null||vs.origin.distanceToSquared(Ou)>(e.far-e.near)**2))&&(Fu.copy(r).invert(),vs.copy(e.ray).applyMatrix4(Fu),!(i.boundingBox!==null&&vs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,vs)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,d=r.groups,u=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=d.length;p<x;p++){let m=d[p],g=o[m.materialIndex],y=Math.max(m.start,u.start),w=Math.min(a.count,Math.min(m.start+m.count,u.start+u.count));for(let T=y,I=w;T<I;T+=3){let E=a.getX(T),L=a.getX(T+1),_=a.getX(T+2);s=Ea(this,g,e,i,c,h,f,E,L,_),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,u.start),x=Math.min(a.count,u.start+u.count);for(let m=p,g=x;m<g;m+=3){let y=a.getX(m),w=a.getX(m+1),T=a.getX(m+2);s=Ea(this,o,e,i,c,h,f,y,w,T),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=d.length;p<x;p++){let m=d[p],g=o[m.materialIndex],y=Math.max(m.start,u.start),w=Math.min(l.count,Math.min(m.start+m.count,u.start+u.count));for(let T=y,I=w;T<I;T+=3){let E=T,L=T+1,_=T+2;s=Ea(this,g,e,i,c,h,f,E,L,_),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,u.start),x=Math.min(l.count,u.start+u.count);for(let m=p,g=x;m<g;m+=3){let y=m,w=m+1,T=m+2;s=Ea(this,o,e,i,c,h,f,y,w,T),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Sg(n,e,t,i,s,r,o,a){let l;if(e.side===gn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Li,a),l===null)return null;Ta.copy(a),Ta.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Ta);return c<t.near||c>t.far?null:{distance:c,point:Ta.clone(),object:n}}function Ea(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,va),n.getVertexPosition(l,Ma),n.getVertexPosition(c,ba);let h=Sg(n,e,t,i,va,Ma,ba,Bu);if(h){let f=new z;Ii.getBarycoord(Bu,va,Ma,ba,f),s&&(h.uv=Ii.getInterpolatedAttribute(s,a,l,c,f,new $e)),r&&(h.uv1=Ii.getInterpolatedAttribute(r,a,l,c,f,new $e)),o&&(h.normal=Ii.getInterpolatedAttribute(o,a,l,c,f,new z),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new z,materialIndex:0};Ii.getNormal(va,Ma,ba,d.normal),h.face=d,h.barycoord=f}return h}var ho=class extends En{constructor(e=null,t=1,i=1,s,r,o,a,l,c=dn,h=dn,f,d){super(null,o,a,l,c,h,s,r,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var fo=class extends Kt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},sr=new dt,zu=new dt,Aa=[],Hu=new fi,Ig=new dt,Jr=new pe,jr=new Ni,Wt=class extends pe{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new fo(new Float32Array(i*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Ig)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new fi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,sr),Hu.copy(e.boundingBox).applyMatrix4(sr),this.boundingBox.union(Hu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ni),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,sr),jr.copy(e.boundingSphere).applyMatrix4(sr),this.boundingSphere.union(jr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Jr.geometry=this.geometry,Jr.material=this.material,Jr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),jr.copy(this.boundingSphere),jr.applyMatrix4(i),e.ray.intersectsSphere(jr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,sr),zu.multiplyMatrices(i,sr),Jr.matrixWorld=zu,Jr.raycast(e,Aa);for(let o=0,a=Aa.length;o<a;o++){let l=Aa[o];l.instanceId=r,l.object=this,t.push(l)}Aa.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new fo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new ho(new Float32Array(s*this.count),s,this.count,bl,Xn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(i,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},_h=new z,Pg=new z,Lg=new Qe,Vn=class{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=_h.subVectors(i,t).cross(Pg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(_h),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Lg.getNormalMatrix(e),s=this.coplanarPoint(_h).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ms=new Ni,Dg=new $e(.5,.5),Ra=new z,pr=class{constructor(e=new Vn,t=new Vn,i=new Vn,s=new Vn,r=new Vn,o=new Vn){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=jn,i=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],f=r[5],d=r[6],u=r[7],p=r[8],x=r[9],m=r[10],g=r[11],y=r[12],w=r[13],T=r[14],I=r[15];if(s[0].setComponents(c-o,u-h,g-p,I-y).normalize(),s[1].setComponents(c+o,u+h,g+p,I+y).normalize(),s[2].setComponents(c+a,u+f,g+x,I+w).normalize(),s[3].setComponents(c-a,u-f,g-x,I-w).normalize(),i)s[4].setComponents(l,d,m,T).normalize(),s[5].setComponents(c-l,u-d,g-m,I-T).normalize();else if(s[4].setComponents(c-l,u-d,g-m,I-T).normalize(),t===jn)s[5].setComponents(c+l,u+d,g+m,I+T).normalize();else if(t===lr)s[5].setComponents(l,d,m,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ms.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ms.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ms)}intersectsSprite(e){Ms.center.set(0,0,0);let t=Dg.distanceTo(e.center);return Ms.radius=.7071067811865476+t,Ms.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ms)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Ra.x=s.normal.x>0?e.max.x:e.min.x,Ra.y=s.normal.y>0?e.max.y:e.min.y,Ra.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ra)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ui=class extends di{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Vu=new dt,Ah=new ur,Ca=new Ni,Sa=new z,Ui=class extends en{constructor(e=new Gt,t=new ui){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ca.copy(i.boundingSphere),Ca.applyMatrix4(s),Ca.radius+=r,e.ray.intersectsSphere(Ca)===!1)return;Vu.copy(s).invert(),Ah.copy(e.ray).applyMatrix4(Vu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){let d=Math.max(0,o.start),u=Math.min(c.count,o.start+o.count);for(let p=d,x=u;p<x;p++){let m=c.getX(p);Sa.fromBufferAttribute(f,m),Gu(Sa,m,l,s,e,t,this)}}else{let d=Math.max(0,o.start),u=Math.min(f.count,o.start+o.count);for(let p=d,x=u;p<x;p++)Sa.fromBufferAttribute(f,p),Gu(Sa,p,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Gu(n,e,t,i,s,r,o){let a=Ah.distanceSqToPoint(n);if(a<t){let l=new z;Ah.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var uo=class extends En{constructor(e=[],t=rs,i,s,r,o,a,l,c,h){super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},pi=class extends En{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ki=class extends En{constructor(e,t,i=ei,s,r,o,a=dn,l=dn,c,h=li,f=1){if(h!==li&&h!==os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:f};super(d,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new hr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},ja=class extends ki{constructor(e,t=ei,i=rs,s,r,o=dn,a=dn,l,c=li){let h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,t,i,s,r,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},po=class extends En{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ts=class n extends Gt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],f=[],d=0,u=0;p("z","y","x",-1,-1,i,t,e,o,r,0),p("z","y","x",1,-1,i,t,-e,o,r,1),p("x","z","y",1,1,e,i,t,s,o,2),p("x","z","y",1,-1,e,i,-t,s,o,3),p("x","y","z",1,-1,e,t,i,s,r,4),p("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new It(c,3)),this.setAttribute("normal",new It(h,3)),this.setAttribute("uv",new It(f,2));function p(x,m,g,y,w,T,I,E,L,_,M){let S=T/L,C=I/_,N=T/2,V=I/2,Y=E/2,U=L+1,B=_+1,q=0,ae=0,J=new z;for(let ee=0;ee<B;ee++){let te=ee*C-V;for(let se=0;se<U;se++){let F=se*S-N;J[x]=F*y,J[m]=te*w,J[g]=Y,c.push(J.x,J.y,J.z),J[x]=0,J[m]=0,J[g]=E>0?1:-1,h.push(J.x,J.y,J.z),f.push(se/L),f.push(1-ee/_),q+=1}}for(let ee=0;ee<_;ee++)for(let te=0;te<L;te++){let se=d+te+U*ee,F=d+te+U*(ee+1),v=d+(te+1)+U*(ee+1),D=d+(te+1)+U*ee;l.push(se,F,D),l.push(F,v,D),ae+=6}a.addGroup(u,ae,M),u+=ae,d+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Fi=class n extends Gt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new z,h=new $e;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,d=3;f<=t;f++,d+=3){let u=i+f/t*s;c.x=e*Math.cos(u),c.y=e*Math.sin(u),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,l.push(h.x,h.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new It(o,3)),this.setAttribute("normal",new It(a,3)),this.setAttribute("uv",new It(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},As=class n extends Gt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],d=[],u=[],p=0,x=[],m=i/2,g=0;y(),o===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new It(f,3)),this.setAttribute("normal",new It(d,3)),this.setAttribute("uv",new It(u,2));function y(){let T=new z,I=new z,E=0,L=(t-e)/i;for(let _=0;_<=r;_++){let M=[],S=_/r,C=S*(t-e)+e;for(let N=0;N<=s;N++){let V=N/s,Y=V*l+a,U=Math.sin(Y),B=Math.cos(Y);I.x=C*U,I.y=-S*i+m,I.z=C*B,f.push(I.x,I.y,I.z),T.set(U,L,B).normalize(),d.push(T.x,T.y,T.z),u.push(V,1-S),M.push(p++)}x.push(M)}for(let _=0;_<s;_++)for(let M=0;M<r;M++){let S=x[M][_],C=x[M+1][_],N=x[M+1][_+1],V=x[M][_+1];(e>0||M!==0)&&(h.push(S,C,V),E+=3),(t>0||M!==r-1)&&(h.push(C,N,V),E+=3)}c.addGroup(g,E,0),g+=E}function w(T){let I=p,E=new $e,L=new z,_=0,M=T===!0?e:t,S=T===!0?1:-1;for(let N=1;N<=s;N++)f.push(0,m*S,0),d.push(0,S,0),u.push(.5,.5),p++;let C=p;for(let N=0;N<=s;N++){let Y=N/s*l+a,U=Math.cos(Y),B=Math.sin(Y);L.x=M*B,L.y=m*S,L.z=M*U,f.push(L.x,L.y,L.z),d.push(0,S,0),E.x=U*.5+.5,E.y=B*.5*S+.5,u.push(E.x,E.y),p++}for(let N=0;N<s;N++){let V=I+N,Y=C+N;T===!0?h.push(Y,Y+1,V):h.push(Y+1,Y,V),_+=3}c.addGroup(g,_,T===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},mo=class n extends As{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Qa=class n extends Gt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new It(r,3)),this.setAttribute("normal",new It(r.slice(),3)),this.setAttribute("uv",new It(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let w=new z,T=new z,I=new z;for(let E=0;E<t.length;E+=3)u(t[E+0],w),u(t[E+1],T),u(t[E+2],I),l(w,T,I,y)}function l(y,w,T,I){let E=I+1,L=[];for(let _=0;_<=E;_++){L[_]=[];let M=y.clone().lerp(T,_/E),S=w.clone().lerp(T,_/E),C=E-_;for(let N=0;N<=C;N++)N===0&&_===E?L[_][N]=M:L[_][N]=M.clone().lerp(S,N/C)}for(let _=0;_<E;_++)for(let M=0;M<2*(E-_)-1;M++){let S=Math.floor(M/2);M%2===0?(d(L[_][S+1]),d(L[_+1][S]),d(L[_][S])):(d(L[_][S+1]),d(L[_+1][S+1]),d(L[_+1][S]))}}function c(y){let w=new z;for(let T=0;T<r.length;T+=3)w.x=r[T+0],w.y=r[T+1],w.z=r[T+2],w.normalize().multiplyScalar(y),r[T+0]=w.x,r[T+1]=w.y,r[T+2]=w.z}function h(){let y=new z;for(let w=0;w<r.length;w+=3){y.x=r[w+0],y.y=r[w+1],y.z=r[w+2];let T=m(y)/2/Math.PI+.5,I=g(y)/Math.PI+.5;o.push(T,1-I)}p(),f()}function f(){for(let y=0;y<o.length;y+=6){let w=o[y+0],T=o[y+2],I=o[y+4],E=Math.max(w,T,I),L=Math.min(w,T,I);E>.9&&L<.1&&(w<.2&&(o[y+0]+=1),T<.2&&(o[y+2]+=1),I<.2&&(o[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function u(y,w){let T=y*3;w.x=e[T+0],w.y=e[T+1],w.z=e[T+2]}function p(){let y=new z,w=new z,T=new z,I=new z,E=new $e,L=new $e,_=new $e;for(let M=0,S=0;M<r.length;M+=9,S+=6){y.set(r[M+0],r[M+1],r[M+2]),w.set(r[M+3],r[M+4],r[M+5]),T.set(r[M+6],r[M+7],r[M+8]),E.set(o[S+0],o[S+1]),L.set(o[S+2],o[S+3]),_.set(o[S+4],o[S+5]),I.copy(y).add(w).add(T).divideScalar(3);let C=m(I);x(E,S+0,y,C),x(L,S+2,w,C),x(_,S+4,T,C)}}function x(y,w,T,I){I<0&&y.x===1&&(o[w]=y.x-1),T.x===0&&T.z===0&&(o[w]=I/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function g(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.detail)}};var Rs=class n extends Qa{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var Gn=class n extends Gt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,f=e/a,d=t/l,u=[],p=[],x=[],m=[];for(let g=0;g<h;g++){let y=g*d-o;for(let w=0;w<c;w++){let T=w*f-r;p.push(T,-y,0),x.push(0,0,1),m.push(w/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let y=0;y<a;y++){let w=y+c*g,T=y+c*(g+1),I=y+1+c*(g+1),E=y+1+c*g;u.push(w,T,E),u.push(T,I,E)}this.setIndex(u),this.setAttribute("position",new It(p,3)),this.setAttribute("normal",new It(x,3)),this.setAttribute("uv",new It(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},go=class n extends Gt{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],h=[],f=e,d=(t-e)/s,u=new z,p=new $e;for(let x=0;x<=s;x++){for(let m=0;m<=i;m++){let g=r+m/i*o;u.x=f*Math.cos(g),u.y=f*Math.sin(g),l.push(u.x,u.y,u.z),c.push(0,0,1),p.x=(u.x/t+1)/2,p.y=(u.y/t+1)/2,h.push(p.x,p.y)}f+=d}for(let x=0;x<s;x++){let m=x*(i+1);for(let g=0;g<i;g++){let y=g+m,w=y,T=y+i+1,I=y+i+2,E=y+1;a.push(w,T,E),a.push(T,I,E)}}this.setIndex(a),this.setAttribute("position",new It(l,3)),this.setAttribute("normal",new It(c,3)),this.setAttribute("uv",new It(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Cs=class n extends Gt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],f=new z,d=new z,u=[],p=[],x=[],m=[];for(let g=0;g<=i;g++){let y=[],w=g/i,T=0;g===0&&o===0?T=.5/t:g===i&&l===Math.PI&&(T=-.5/t);for(let I=0;I<=t;I++){let E=I/t;f.x=-e*Math.cos(s+E*r)*Math.sin(o+w*a),f.y=e*Math.cos(o+w*a),f.z=e*Math.sin(s+E*r)*Math.sin(o+w*a),p.push(f.x,f.y,f.z),d.copy(f).normalize(),x.push(d.x,d.y,d.z),m.push(E+T,1-w),y.push(c++)}h.push(y)}for(let g=0;g<i;g++)for(let y=0;y<t;y++){let w=h[g][y+1],T=h[g][y],I=h[g+1][y],E=h[g+1][y+1];(g!==0||o>0)&&u.push(w,T,E),(g!==i-1||l<Math.PI)&&u.push(T,I,E)}this.setIndex(u),this.setAttribute("position",new It(p,3)),this.setAttribute("normal",new It(x,3)),this.setAttribute("uv",new It(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};function Is(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(Wu(s))s.isRenderTargetTexture?(Ze("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(Wu(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function bn(n){let e={};for(let t=0;t<n.length;t++){let i=Is(n[t]);for(let s in i)e[s]=i[s]}return e}function Wu(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Ng(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function $h(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ht.workingColorSpace}var Up={clone:Is,merge:bn},Ug=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Un=class extends di{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ug,this.fragmentShader=kg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Is(e.uniforms),this.uniformsGroups=Ng(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},el=class extends Un{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Wn=class extends di{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nc,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Di,this.combine=ml,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},tl=class extends di{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Mp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},nl=class extends di{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ia(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}var ns=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];e:{t:{let o;n:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break t}o=t.length;break n}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break t}o=i,i=0;break n}break e}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},il=class extends ns{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:bh,endingEnd:bh}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case wh:r=e,a=2*t-i;break;case Th:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case wh:o=e,l=2*i-t;break;case Th:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,u=this._weightNext,p=(i-t)/(s-t),x=p*p,m=x*p,g=-d*m+2*d*x-d*p,y=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*p+1,w=(-1-u)*m+(1.5+u)*x+.5*p,T=u*m-u*x;for(let I=0;I!==a;++I)r[I]=g*o[h+I]+y*o[c+I]+w*o[l+I]+T*o[f+I];return r}},sl=class extends ns{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(s-t),f=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*f+o[l+d]*h;return r}},rl=class extends ns{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},ol=class extends ns{interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.settings||this.DefaultSettings_,f=h.inTangents,d=h.outTangents;if(!f||!d){let x=(i-t)/(s-t),m=1-x;for(let g=0;g!==a;++g)r[g]=o[c+g]*m+o[l+g]*x;return r}let u=a*2,p=e-1;for(let x=0;x!==a;++x){let m=o[c+x],g=o[l+x],y=p*u+x*2,w=d[y],T=d[y+1],I=e*u+x*2,E=f[I],L=f[I+1],_=(i-t)/(s-t),M,S,C,N,V;for(let Y=0;Y<8;Y++){M=_*_,S=M*_,C=1-_,N=C*C,V=N*C;let B=V*t+3*N*_*w+3*C*M*E+S*s-i;if(Math.abs(B)<1e-10)break;let q=3*N*(w-t)+6*C*_*(E-w)+3*M*(s-E);if(Math.abs(q)<1e-10)break;_=_-B/q,_=Math.max(0,Math.min(1,_))}r[x]=V*m+3*N*_*T+3*C*M*L+S*g}return r}},kn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ia(t,this.TimeBufferType),this.values=Ia(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Ia(e.times,Array),values:Ia(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new rl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new sl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new il(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new ol(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case Qr:t=this.InterpolantFactoryMethodDiscrete;break;case Wa:t=this.InterpolantFactoryMethodLinear;break;case Da:t=this.InterpolantFactoryMethodSmooth;break;case Mh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ze("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Qr;case this.InterpolantFactoryMethodLinear:return Wa;case this.InterpolantFactoryMethodSmooth:return Da;case this.InterpolantFactoryMethodBezier:return Mh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ye("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Ye("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){Ye("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Ye("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&ug(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Ye("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Da,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let f=a*i,d=f-i,u=f+i;for(let p=0;p!==i;++p){let x=t[f+p];if(x!==t[d+p]||x!==t[u+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let f=a*i,d=o*i;for(let u=0;u!==i;++u)t[d+u]=t[f+u]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};kn.prototype.ValueTypeName="";kn.prototype.TimeBufferType=Float32Array;kn.prototype.ValueBufferType=Float32Array;kn.prototype.DefaultInterpolation=Wa;var is=class extends kn{constructor(e,t,i){super(e,t,i)}};is.prototype.ValueTypeName="bool";is.prototype.ValueBufferType=Array;is.prototype.DefaultInterpolation=Qr;is.prototype.InterpolantFactoryMethodLinear=void 0;is.prototype.InterpolantFactoryMethodSmooth=void 0;var al=class extends kn{constructor(e,t,i,s){super(e,t,i,s)}};al.prototype.ValueTypeName="color";var ll=class extends kn{constructor(e,t,i,s){super(e,t,i,s)}};ll.prototype.ValueTypeName="number";var cl=class extends ns{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)hi.slerpFlat(r,0,o,c-a,o,c,l);return r}},xo=class extends kn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new cl(this.times,this.values,this.getValueSize(),e)}};xo.prototype.ValueTypeName="quaternion";xo.prototype.InterpolantFactoryMethodSmooth=void 0;var ss=class extends kn{constructor(e,t,i){super(e,t,i)}};ss.prototype.ValueTypeName="string";ss.prototype.ValueBufferType=Array;ss.prototype.DefaultInterpolation=Qr;ss.prototype.InterpolantFactoryMethodLinear=void 0;ss.prototype.InterpolantFactoryMethodSmooth=void 0;var hl=class extends kn{constructor(e,t,i,s){super(e,t,i,s)}};hl.prototype.ValueTypeName="vector";var fl=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,d=c.length;f<d;f+=2){let u=c[f],p=c[f+1];if(u.global&&(u.lastIndex=0),u.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},kp=new fl,dl=class{constructor(e){this.manager=e!==void 0?e:kp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};dl.DEFAULT_MATERIAL_NAME="__DEFAULT";var yo=class extends en{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},_o=class extends yo{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(en.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Je(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},vh=new dt,Xu=new z,qu=new z,Rh=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $e(512,512),this.mapType=Cn,this.map=null,this.mapPass=null,this.matrix=new dt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pr,this._frameExtents=new $e(1,1),this._viewportCount=1,this._viewports=[new Vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Xu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Xu),qu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(qu),t.updateMatrixWorld(),vh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vh,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===lr||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(vh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Pa=new z,La=new hi,ri=new z,vo=class extends en{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dt,this.projectionMatrix=new dt,this.projectionMatrixInverse=new dt,this.coordinateSystem=jn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Pa,La,ri),ri.x===1&&ri.y===1&&ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Pa,La,ri.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Pa,La,ri),ri.x===1&&ri.y===1&&ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Pa,La,ri.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},$i=new z,Yu=new $e,Zu=new $e,Mn=class extends vo{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ya*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan($c*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ya*2*Math.atan(Math.tan($c*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){$i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set($i.x,$i.y).multiplyScalar(-e/$i.z),$i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set($i.x,$i.y).multiplyScalar(-e/$i.z)}getViewSize(e,t){return this.getViewBounds(e,Yu,Zu),t.subVectors(Zu,Yu)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan($c*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var mr=class extends vo{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ch=class extends Rh{constructor(){super(new mr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Mo=class extends yo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(en.DEFAULT_UP),this.updateMatrix(),this.target=new en,this.shadow=new Ch}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var rr=-90,or=1,ul=class extends en{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Mn(rr,or,e,t);s.layers=this.layers,this.add(s);let r=new Mn(rr,or,e,t);r.layers=this.layers,this.add(r);let o=new Mn(rr,or,e,t);o.layers=this.layers,this.add(o);let a=new Mn(rr,or,e,t);a.layers=this.layers,this.add(a);let l=new Mn(rr,or,e,t);l.layers=this.layers,this.add(l);let c=new Mn(rr,or,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===jn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===lr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(f,d,u),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},pl=class extends Mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Jh="\\[\\]\\.:\\/",Fg=new RegExp("["+Jh+"]","g"),jh="[^"+Jh+"]",Og="[^"+Jh.replace("\\.","")+"]",Bg=/((?:WC+[\/:])*)/.source.replace("WC",jh),zg=/(WCOD+)?/.source.replace("WCOD",Og),Hg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",jh),Vg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",jh),Gg=new RegExp("^"+Bg+zg+Hg+Vg+"$"),Wg=["material","materials","bones","map"],Sh=class{constructor(e,t,i){let s=i||Bt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Bt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Fg,"")}static parseTrackName(e){let t=Gg.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Wg.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ze("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){Ye("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ye("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ye("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ye("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ye("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Ye("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){Ye("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;Ye("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ye("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ye("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Bt.Composite=Sh;Bt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Bt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Bt.prototype.GetterByBindingType=[Bt.prototype._getValue_direct,Bt.prototype._getValue_array,Bt.prototype._getValue_arrayElement,Bt.prototype._getValue_toArray];Bt.prototype.SetterByBindingTypeAndVersioning=[[Bt.prototype._setValue_direct,Bt.prototype._setValue_direct_setNeedsUpdate,Bt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_array,Bt.prototype._setValue_array_setNeedsUpdate,Bt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_arrayElement,Bt.prototype._setValue_arrayElement_setNeedsUpdate,Bt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_fromArray,Bt.prototype._setValue_fromArray_setNeedsUpdate,Bt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Lw=new Float32Array(1);var Ku=new dt,bo=class{constructor(e,t,i=0,s=1/0){this.ray=new ur(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new fr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ye("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ku.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ku),this}intersectObject(e,t=!0,i=[]){return Ih(e,this,i,t),i.sort($u),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Ih(e[s],this,i,t);return i.sort($u),i}};function $u(n,e){return n.distance-e.distance}function Ih(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let o=0,a=r.length;o<a;o++)Ih(r[o],e,t,!0)}}var Ph=class n{static{n.prototype.isMatrix2=!0}constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};function Qh(n,e,t,i){let s=Xg(i);switch(t){case Yh:return n*e;case bl:return n*e/s.components*s.byteLength;case wl:return n*e/s.components*s.byteLength;case as:return n*e*2/s.components*s.byteLength;case Tl:return n*e*2/s.components*s.byteLength;case Zh:return n*e*3/s.components*s.byteLength;case qn:return n*e*4/s.components*s.byteLength;case El:return n*e*4/s.components*s.byteLength;case Ao:case Ro:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Co:case So:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Rl:case Sl:return Math.max(n,16)*Math.max(e,8)/4;case Al:case Cl:return Math.max(n,8)*Math.max(e,8)/2;case Il:case Pl:case Dl:case Nl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ll:case Io:case Ul:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case kl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Fl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ol:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Bl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case zl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Hl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Vl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Gl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Wl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Xl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case ql:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Yl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Zl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Kl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case $l:case Jl:case jl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Ql:case ec:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Po:case tc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Xg(n){switch(n){case Cn:case Gh:return{byteLength:1,components:1};case xr:case Wh:case xi:return{byteLength:2,components:1};case vl:case Ml:return{byteLength:2,components:4};case ei:case _l:case Xn:return{byteLength:4,components:1};case Xh:case qh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"184"}}));typeof window<"u"&&(window.__THREE__?Ze("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="184");function rm(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Yg(n){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,f=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,h),a.onUploadCallback();let u;if(c instanceof Float32Array)u=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)u=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?u=n.HALF_FLOAT:u=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=n.SHORT;else if(c instanceof Uint32Array)u=n.UNSIGNED_INT;else if(c instanceof Int32Array)u=n.INT;else if(c instanceof Int8Array)u=n.BYTE;else if(c instanceof Uint8Array)u=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){let h=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,h);else{f.sort((u,p)=>u.start-p.start);let d=0;for(let u=1;u<f.length;u++){let p=f[d],x=f[u];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++d,f[d]=x)}f.length=d+1;for(let u=0,p=f.length;u<p;u++){let x=f[u];n.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Zg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Kg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,$g=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Jg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Qg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ex=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,tx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,nx=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,ix=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,sx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ox=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ax=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,lx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,cx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,hx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ux=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,px=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,mx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,gx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,xx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,yx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,_x=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,vx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Mx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Tx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ex=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ax=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Rx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Cx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Sx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ix=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Px=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Lx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Dx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Nx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ux=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,kx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Fx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ox=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Bx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,zx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Hx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Gx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,qx=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Yx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Zx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Kx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$x=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Jx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ey=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ty=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ny=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,iy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,sy=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ry=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,oy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ay=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ly=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hy=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,fy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,uy=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,py=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,my=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,yy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_y=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,My=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,by=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Ty=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ey=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ay=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ry=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Iy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Py=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ly=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Dy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ny=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Uy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ky=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Oy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,By=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Hy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Gy=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Wy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Xy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Yy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Zy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ky=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$y=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jy=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,e_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,t_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,n_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,i_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,s_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,r_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,a_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,l_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,c_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,h_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,f_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,d_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,u_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,p_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,m_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,g_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,x_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,y_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,__=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,v_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,M_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,b_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,w_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,T_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,E_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,A_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,R_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,rt={alphahash_fragment:Zg,alphahash_pars_fragment:Kg,alphamap_fragment:$g,alphamap_pars_fragment:Jg,alphatest_fragment:jg,alphatest_pars_fragment:Qg,aomap_fragment:ex,aomap_pars_fragment:tx,batching_pars_vertex:nx,batching_vertex:ix,begin_vertex:sx,beginnormal_vertex:rx,bsdfs:ox,iridescence_fragment:ax,bumpmap_pars_fragment:lx,clipping_planes_fragment:cx,clipping_planes_pars_fragment:hx,clipping_planes_pars_vertex:fx,clipping_planes_vertex:dx,color_fragment:ux,color_pars_fragment:px,color_pars_vertex:mx,color_vertex:gx,common:xx,cube_uv_reflection_fragment:yx,defaultnormal_vertex:_x,displacementmap_pars_vertex:vx,displacementmap_vertex:Mx,emissivemap_fragment:bx,emissivemap_pars_fragment:wx,colorspace_fragment:Tx,colorspace_pars_fragment:Ex,envmap_fragment:Ax,envmap_common_pars_fragment:Rx,envmap_pars_fragment:Cx,envmap_pars_vertex:Sx,envmap_physical_pars_fragment:zx,envmap_vertex:Ix,fog_vertex:Px,fog_pars_vertex:Lx,fog_fragment:Dx,fog_pars_fragment:Nx,gradientmap_pars_fragment:Ux,lightmap_pars_fragment:kx,lights_lambert_fragment:Fx,lights_lambert_pars_fragment:Ox,lights_pars_begin:Bx,lights_toon_fragment:Hx,lights_toon_pars_fragment:Vx,lights_phong_fragment:Gx,lights_phong_pars_fragment:Wx,lights_physical_fragment:Xx,lights_physical_pars_fragment:qx,lights_fragment_begin:Yx,lights_fragment_maps:Zx,lights_fragment_end:Kx,lightprobes_pars_fragment:$x,logdepthbuf_fragment:Jx,logdepthbuf_pars_fragment:jx,logdepthbuf_pars_vertex:Qx,logdepthbuf_vertex:ey,map_fragment:ty,map_pars_fragment:ny,map_particle_fragment:iy,map_particle_pars_fragment:sy,metalnessmap_fragment:ry,metalnessmap_pars_fragment:oy,morphinstance_vertex:ay,morphcolor_vertex:ly,morphnormal_vertex:cy,morphtarget_pars_vertex:hy,morphtarget_vertex:fy,normal_fragment_begin:dy,normal_fragment_maps:uy,normal_pars_fragment:py,normal_pars_vertex:my,normal_vertex:gy,normalmap_pars_fragment:xy,clearcoat_normal_fragment_begin:yy,clearcoat_normal_fragment_maps:_y,clearcoat_pars_fragment:vy,iridescence_pars_fragment:My,opaque_fragment:by,packing:wy,premultiplied_alpha_fragment:Ty,project_vertex:Ey,dithering_fragment:Ay,dithering_pars_fragment:Ry,roughnessmap_fragment:Cy,roughnessmap_pars_fragment:Sy,shadowmap_pars_fragment:Iy,shadowmap_pars_vertex:Py,shadowmap_vertex:Ly,shadowmask_pars_fragment:Dy,skinbase_vertex:Ny,skinning_pars_vertex:Uy,skinning_vertex:ky,skinnormal_vertex:Fy,specularmap_fragment:Oy,specularmap_pars_fragment:By,tonemapping_fragment:zy,tonemapping_pars_fragment:Hy,transmission_fragment:Vy,transmission_pars_fragment:Gy,uv_pars_fragment:Wy,uv_pars_vertex:Xy,uv_vertex:qy,worldpos_vertex:Yy,background_vert:Zy,background_frag:Ky,backgroundCube_vert:$y,backgroundCube_frag:Jy,cube_vert:jy,cube_frag:Qy,depth_vert:e_,depth_frag:t_,distance_vert:n_,distance_frag:i_,equirect_vert:s_,equirect_frag:r_,linedashed_vert:o_,linedashed_frag:a_,meshbasic_vert:l_,meshbasic_frag:c_,meshlambert_vert:h_,meshlambert_frag:f_,meshmatcap_vert:d_,meshmatcap_frag:u_,meshnormal_vert:p_,meshnormal_frag:m_,meshphong_vert:g_,meshphong_frag:x_,meshphysical_vert:y_,meshphysical_frag:__,meshtoon_vert:v_,meshtoon_frag:M_,points_vert:b_,points_frag:w_,shadow_vert:T_,shadow_frag:E_,sprite_vert:A_,sprite_frag:R_},Ee={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new z},probesMax:{value:new z},probesResolution:{value:new z}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},_i={basic:{uniforms:bn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:bn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Je(0)},envMapIntensity:{value:1}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:bn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:bn([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:bn([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new Je(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:bn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:bn([Ee.points,Ee.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:bn([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:bn([Ee.common,Ee.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:bn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:bn([Ee.sprite,Ee.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distance:{uniforms:bn([Ee.common,Ee.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distance_vert,fragmentShader:rt.distance_frag},shadow:{uniforms:bn([Ee.lights,Ee.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};_i.physical={uniforms:bn([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};var rc={r:0,b:0,g:0},C_=new dt,om=new Qe;om.set(-1,0,0,0,1,0,0,0,1);function S_(n,e,t,i,s,r){let o=new Je(0),a=s===!0?0:1,l,c,h=null,f=0,d=null;function u(y){let w=y.isScene===!0?y.background:null;if(w&&w.isTexture){let T=y.backgroundBlurriness>0;w=e.get(w,T)}return w}function p(y){let w=!1,T=u(y);T===null?m(o,a):T&&T.isColor&&(m(T,1),w=!0);let I=n.xr.getEnvironmentBlendMode();I==="additive"?t.buffers.color.setClear(0,0,0,1,r):I==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(y,w){let T=u(w);T&&(T.isCubeTexture||T.mapping===To)?(c===void 0&&(c=new pe(new ts(1,1,1),new Un({name:"BackgroundCubeMaterial",uniforms:Is(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(I,E,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=T,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(C_.makeRotationFromEuler(w.backgroundRotation)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(om),c.material.toneMapped=ht.getTransfer(T.colorSpace)!==wt,(h!==T||f!==T.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,h=T,f=T.version,d=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):T&&T.isTexture&&(l===void 0&&(l=new pe(new Gn(2,2),new Un({name:"BackgroundMaterial",uniforms:Is(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:Li,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=T,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=ht.getTransfer(T.colorSpace)!==wt,T.matrixAutoUpdate===!0&&T.updateMatrix(),l.material.uniforms.uvTransform.value.copy(T.matrix),(h!==T||f!==T.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,h=T,f=T.version,d=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,w){y.getRGB(rc,$h(n)),t.buffers.color.setClear(rc.r,rc.g,rc.b,w,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,w=1){o.set(y),a=w,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,m(o,a)},render:p,addToRenderList:x,dispose:g}}function I_(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,o=!1;function a(C,N,V,Y,U){let B=!1,q=f(C,Y,V,N);r!==q&&(r=q,c(r.object)),B=u(C,Y,V,U),B&&p(C,Y,V,U),U!==null&&e.update(U,n.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,T(C,N,V,Y),U!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function l(){return n.createVertexArray()}function c(C){return n.bindVertexArray(C)}function h(C){return n.deleteVertexArray(C)}function f(C,N,V,Y){let U=Y.wireframe===!0,B=i[N.id];B===void 0&&(B={},i[N.id]=B);let q=C.isInstancedMesh===!0?C.id:0,ae=B[q];ae===void 0&&(ae={},B[q]=ae);let J=ae[V.id];J===void 0&&(J={},ae[V.id]=J);let ee=J[U];return ee===void 0&&(ee=d(l()),J[U]=ee),ee}function d(C){let N=[],V=[],Y=[];for(let U=0;U<t;U++)N[U]=0,V[U]=0,Y[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:V,attributeDivisors:Y,object:C,attributes:{},index:null}}function u(C,N,V,Y){let U=r.attributes,B=N.attributes,q=0,ae=V.getAttributes();for(let J in ae)if(ae[J].location>=0){let te=U[J],se=B[J];if(se===void 0&&(J==="instanceMatrix"&&C.instanceMatrix&&(se=C.instanceMatrix),J==="instanceColor"&&C.instanceColor&&(se=C.instanceColor)),te===void 0||te.attribute!==se||se&&te.data!==se.data)return!0;q++}return r.attributesNum!==q||r.index!==Y}function p(C,N,V,Y){let U={},B=N.attributes,q=0,ae=V.getAttributes();for(let J in ae)if(ae[J].location>=0){let te=B[J];te===void 0&&(J==="instanceMatrix"&&C.instanceMatrix&&(te=C.instanceMatrix),J==="instanceColor"&&C.instanceColor&&(te=C.instanceColor));let se={};se.attribute=te,te&&te.data&&(se.data=te.data),U[J]=se,q++}r.attributes=U,r.attributesNum=q,r.index=Y}function x(){let C=r.newAttributes;for(let N=0,V=C.length;N<V;N++)C[N]=0}function m(C){g(C,0)}function g(C,N){let V=r.newAttributes,Y=r.enabledAttributes,U=r.attributeDivisors;V[C]=1,Y[C]===0&&(n.enableVertexAttribArray(C),Y[C]=1),U[C]!==N&&(n.vertexAttribDivisor(C,N),U[C]=N)}function y(){let C=r.newAttributes,N=r.enabledAttributes;for(let V=0,Y=N.length;V<Y;V++)N[V]!==C[V]&&(n.disableVertexAttribArray(V),N[V]=0)}function w(C,N,V,Y,U,B,q){q===!0?n.vertexAttribIPointer(C,N,V,U,B):n.vertexAttribPointer(C,N,V,Y,U,B)}function T(C,N,V,Y){x();let U=Y.attributes,B=V.getAttributes(),q=N.defaultAttributeValues;for(let ae in B){let J=B[ae];if(J.location>=0){let ee=U[ae];if(ee===void 0&&(ae==="instanceMatrix"&&C.instanceMatrix&&(ee=C.instanceMatrix),ae==="instanceColor"&&C.instanceColor&&(ee=C.instanceColor)),ee!==void 0){let te=ee.normalized,se=ee.itemSize,F=e.get(ee);if(F===void 0)continue;let v=F.buffer,D=F.type,R=F.bytesPerElement,k=D===n.INT||D===n.UNSIGNED_INT||ee.gpuType===_l;if(ee.isInterleavedBufferAttribute){let W=ee.data,ie=W.stride,me=ee.offset;if(W.isInstancedInterleavedBuffer){for(let we=0;we<J.locationSize;we++)g(J.location+we,W.meshPerAttribute);C.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let we=0;we<J.locationSize;we++)m(J.location+we);n.bindBuffer(n.ARRAY_BUFFER,v);for(let we=0;we<J.locationSize;we++)w(J.location+we,se/J.locationSize,D,te,ie*R,(me+se/J.locationSize*we)*R,k)}else{if(ee.isInstancedBufferAttribute){for(let W=0;W<J.locationSize;W++)g(J.location+W,ee.meshPerAttribute);C.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let W=0;W<J.locationSize;W++)m(J.location+W);n.bindBuffer(n.ARRAY_BUFFER,v);for(let W=0;W<J.locationSize;W++)w(J.location+W,se/J.locationSize,D,te,se*R,se/J.locationSize*W*R,k)}}else if(q!==void 0){let te=q[ae];if(te!==void 0)switch(te.length){case 2:n.vertexAttrib2fv(J.location,te);break;case 3:n.vertexAttrib3fv(J.location,te);break;case 4:n.vertexAttrib4fv(J.location,te);break;default:n.vertexAttrib1fv(J.location,te)}}}}y()}function I(){M();for(let C in i){let N=i[C];for(let V in N){let Y=N[V];for(let U in Y){let B=Y[U];for(let q in B)h(B[q].object),delete B[q];delete Y[U]}}delete i[C]}}function E(C){if(i[C.id]===void 0)return;let N=i[C.id];for(let V in N){let Y=N[V];for(let U in Y){let B=Y[U];for(let q in B)h(B[q].object),delete B[q];delete Y[U]}}delete i[C.id]}function L(C){for(let N in i){let V=i[N];for(let Y in V){let U=V[Y];if(U[C.id]===void 0)continue;let B=U[C.id];for(let q in B)h(B[q].object),delete B[q];delete U[C.id]}}}function _(C){for(let N in i){let V=i[N],Y=C.isInstancedMesh===!0?C.id:0,U=V[Y];if(U!==void 0){for(let B in U){let q=U[B];for(let ae in q)h(q[ae].object),delete q[ae];delete U[B]}delete V[Y],Object.keys(V).length===0&&delete i[N]}}}function M(){S(),o=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:M,resetDefaultState:S,dispose:I,releaseStatesOfGeometry:E,releaseStatesOfObject:_,releaseStatesOfProgram:L,initAttributes:x,enableAttribute:m,disableUnusedAttributes:y}}function P_(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function o(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),t.update(c,i,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let d=0;for(let u=0;u<h;u++)d+=c[u];t.update(d,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function L_(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let L=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(L){return!(L!==qn&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(L){let _=L===xi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==Cn&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==Xn&&!_)}function l(L){if(L==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Ze("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&Ze("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),T=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),I=n.getParameter(n.MAX_SAMPLES),E=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:u,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:y,maxVaryings:w,maxFragmentUniforms:T,maxSamples:I,samples:E}}function D_(n){let e=this,t=null,i=0,s=!1,r=!1,o=new Vn,a=new Qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let u=f.length!==0||d||i!==0||s;return s=d,i=f.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){t=h(f,d,0)},this.setState=function(f,d,u){let p=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,g=n.get(f);if(!s||p===null||p.length===0||r&&!m)r?h(null):c();else{let y=r?0:i,w=y*4,T=g.clippingState||null;l.value=T,T=h(p,d,w,u);for(let I=0;I!==w;++I)T[I]=t[I];g.clippingState=T,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(f,d,u,p){let x=f!==null?f.length:0,m=null;if(x!==0){if(m=l.value,p!==!0||m===null){let g=u+x*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<g)&&(m=new Float32Array(g));for(let w=0,T=u;w!==x;++w,T+=4)o.copy(f[w]).applyMatrix4(y,a),o.normal.toArray(m,T),m[T+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}var ls=4,Fp=[.125,.215,.35,.446,.526,.582],Ps=20,N_=256,Lo=new mr,Op=new Je,ef=null,tf=0,nf=0,sf=!1,U_=new z,ac=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:o=256,position:a=U_}=r;ef=this._renderer.getRenderTarget(),tf=this._renderer.getActiveCubeFace(),nf=this._renderer.getActiveMipmapLevel(),sf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ef,tf,nf),this._renderer.xr.enabled=sf,e.scissorTest=!1,_r(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===rs||e.mapping===Ss?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ef=this._renderer.getRenderTarget(),tf=this._renderer.getActiveCubeFace(),nf=this._renderer.getActiveMipmapLevel(),sf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:mn,minFilter:mn,generateMipmaps:!1,type:xi,format:qn,colorSpace:eo,depthBuffer:!1},s=Bp(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bp(e,t,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=k_(r)),this._blurMaterial=O_(r,e,t),this._ggxMaterial=F_(r,e,t)}return s}_compileMaterial(e){let t=new pe(new Gt,e);this._renderer.compile(t,Lo)}_sceneToCubeUV(e,t,i,s,r){let l=new Mn(90,1,t,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,u=f.toneMapping;f.getClearColor(Op),f.toneMapping=Qn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new pe(new ts,new tn({name:"PMREM.Background",side:gn,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,m=x.material,g=!1,y=e.background;y?y.isColor&&(m.color.copy(y),e.background=null,g=!0):(m.color.copy(Op),g=!0);for(let w=0;w<6;w++){let T=w%3;T===0?(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[w],r.y,r.z)):T===1?(l.up.set(0,0,c[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[w],r.z)):(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[w]));let I=this._cubeSize;_r(s,T*I,w>2?I:0,I,I),f.setRenderTarget(s),g&&f.render(x,l),f.render(e,l)}f.toneMapping=u,f.autoClear=d,e.background=y}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===rs||e.mapping===Ss;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zp());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;_r(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Lo)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;let l=o.uniforms,c=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-h*h),d=0+c*1.25,u=f*d,{_lodMax:p}=this,x=this._sizeLods[i],m=3*x*(i>p-ls?i-p+ls:0),g=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=u,l.mipInt.value=p-t,_r(r,m,g,3*x,2*x),s.setRenderTarget(r),s.render(a,Lo),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-i,_r(e,m,g,3*x,2*x),s.setRenderTarget(e),s.render(a,Lo)}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Ye("blur direction must be either latitudinal or longitudinal!");let h=3,f=this._lodMeshes[s];f.material=c;let d=c.uniforms,u=this._sizeLods[i]-1,p=isFinite(r)?Math.PI/(2*u):2*Math.PI/(2*Ps-1),x=r/p,m=isFinite(r)?1+Math.floor(h*x):Ps;m>Ps&&Ze(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ps}`);let g=[],y=0;for(let L=0;L<Ps;++L){let _=L/x,M=Math.exp(-_*_/2);g.push(M),L===0?y+=M:L<m&&(y+=2*M)}for(let L=0;L<g.length;L++)g[L]=g[L]/y;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=g,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:w}=this;d.dTheta.value=p,d.mipInt.value=w-i;let T=this._sizeLods[s],I=3*T*(s>w-ls?s-w+ls:0),E=4*(this._cubeSize-T);_r(t,I,E,3*T,2*T),l.setRenderTarget(t),l.render(f,Lo)}};function k_(n){let e=[],t=[],i=[],s=n,r=n-ls+1+Fp.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>n-ls?l=Fp[o-n+ls-1]:o===0&&(l=0),t.push(l);let c=1/(a-2),h=-c,f=1+c,d=[h,h,f,h,f,f,h,h,f,f,h,f],u=6,p=6,x=3,m=2,g=1,y=new Float32Array(x*p*u),w=new Float32Array(m*p*u),T=new Float32Array(g*p*u);for(let E=0;E<u;E++){let L=E%3*2/3-1,_=E>2?0:-1,M=[L,_,0,L+2/3,_,0,L+2/3,_+1,0,L,_,0,L+2/3,_+1,0,L,_+1,0];y.set(M,x*p*E),w.set(d,m*p*E);let S=[E,E,E,E,E,E];T.set(S,g*p*E)}let I=new Gt;I.setAttribute("position",new Kt(y,x)),I.setAttribute("uv",new Kt(w,m)),I.setAttribute("faceIndex",new Kt(T,g)),i.push(new pe(I,null)),s>ls&&s--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Bp(n,e,t){let i=new Nn(n,e,t);return i.texture.mapping=To,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function _r(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function F_(n,e,t){return new Un({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:N_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:hc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function O_(n,e,t){let i=new Float32Array(Ps),s=new z(0,1,0);return new Un({name:"SphericalGaussianBlur",defines:{n:Ps,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function zp(){return new Un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Hp(){return new Un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function hc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var lc=class extends Nn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new uo(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ts(5,5,5),r=new Un({name:"CubemapFromEquirect",uniforms:Is(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:gn,blending:mi});r.uniforms.tEquirect.value=t;let o=new pe(s,r),a=t.minFilter;return t.minFilter===gi&&(t.minFilter=mn),new ul(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}};function B_(n){let e=new WeakMap,t=new WeakMap,i=null;function s(d,u=!1){return d==null?null:u?o(d):r(d)}function r(d){if(d&&d.isTexture){let u=d.mapping;if(u===gl||u===xl)if(e.has(d)){let p=e.get(d).texture;return a(p,d.mapping)}else{let p=d.image;if(p&&p.height>0){let x=new lc(p.height);return x.fromEquirectangularTexture(n,d),e.set(d,x),d.addEventListener("dispose",c),a(x.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){let u=d.mapping,p=u===gl||u===xl,x=u===rs||u===Ss;if(p||x){let m=t.get(d),g=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return i===null&&(i=new ac(n)),m=p?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{let y=d.image;return p&&y&&y.height>0||x&&y&&l(y)?(i===null&&(i=new ac(n)),m=p?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function a(d,u){return u===gl?d.mapping=rs:u===xl&&(d.mapping=Ss),d}function l(d){let u=0,p=6;for(let x=0;x<p;x++)d[x]!==void 0&&u++;return u===p}function c(d){let u=d.target;u.removeEventListener("dispose",c);let p=e.get(u);p!==void 0&&(e.delete(u),p.dispose())}function h(d){let u=d.target;u.removeEventListener("dispose",h);let p=t.get(u);p!==void 0&&(t.delete(u),p.dispose())}function f(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function z_(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&qa("WebGLRenderer: "+i+" extension not supported."),s}}}function H_(n,e,t,i){let s={},r=new WeakMap;function o(f){let d=f.target;d.index!==null&&e.remove(d.index);for(let p in d.attributes)e.remove(d.attributes[p]);d.removeEventListener("dispose",o),delete s[d.id];let u=r.get(d);u&&(e.remove(u),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(f){let d=f.attributes;for(let u in d)e.update(d[u],n.ARRAY_BUFFER)}function c(f){let d=[],u=f.index,p=f.attributes.position,x=0;if(p===void 0)return;if(u!==null){let y=u.array;x=u.version;for(let w=0,T=y.length;w<T;w+=3){let I=y[w+0],E=y[w+1],L=y[w+2];d.push(I,E,E,L,L,I)}}else{let y=p.array;x=p.version;for(let w=0,T=y.length/3-1;w<T;w+=3){let I=w+0,E=w+1,L=w+2;d.push(I,E,E,L,L,I)}}let m=new(p.count>=65535?lo:ao)(d,1);m.version=x;let g=r.get(f);g&&e.remove(g),r.set(f,m)}function h(f){let d=r.get(f);if(d){let u=f.index;u!==null&&d.version<u.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function V_(n,e,t){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){n.drawElements(i,d,r,f*o),t.update(d,i,1)}function c(f,d,u){u!==0&&(n.drawElementsInstanced(i,d,r,f*o,u),t.update(d,i,u))}function h(f,d,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,u);let x=0;for(let m=0;m<u;m++)x+=d[m];t.update(x,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function G_(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:Ye("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function W_(n,e,t){let i=new WeakMap,s=new Vt;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0,d=i.get(a);if(d===void 0||d.count!==f){let M=function(){L.dispose(),i.delete(a),a.removeEventListener("dispose",M)};d!==void 0&&d.texture.dispose();let u=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],w=0;u===!0&&(w=1),p===!0&&(w=2),x===!0&&(w=3);let T=a.attributes.position.count*w,I=1;T>e.maxTextureSize&&(I=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);let E=new Float32Array(T*I*4*f),L=new so(E,T,I,f);L.type=Xn,L.needsUpdate=!0;let _=w*4;for(let S=0;S<f;S++){let C=m[S],N=g[S],V=y[S],Y=T*I*4*S;for(let U=0;U<C.count;U++){let B=U*_;u===!0&&(s.fromBufferAttribute(C,U),E[Y+B+0]=s.x,E[Y+B+1]=s.y,E[Y+B+2]=s.z,E[Y+B+3]=0),p===!0&&(s.fromBufferAttribute(N,U),E[Y+B+4]=s.x,E[Y+B+5]=s.y,E[Y+B+6]=s.z,E[Y+B+7]=0),x===!0&&(s.fromBufferAttribute(V,U),E[Y+B+8]=s.x,E[Y+B+9]=s.y,E[Y+B+10]=s.z,E[Y+B+11]=V.itemSize===4?s.w:1)}}d={count:f,texture:L,size:new $e(T,I)},i.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let u=0;for(let x=0;x<c.length;x++)u+=c[x];let p=a.morphTargetsRelative?1:1-u;l.getUniforms().setValue(n,"morphTargetBaseInfluence",p),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function X_(n,e,t,i,s){let r=new WeakMap;function o(c){let h=s.render.frame,f=c.geometry,d=e.get(c,f);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let u=c.skeleton;r.get(u)!==h&&(u.update(),r.set(u,h))}return d}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var q_={[Uh]:"LINEAR_TONE_MAPPING",[kh]:"REINHARD_TONE_MAPPING",[Fh]:"CINEON_TONE_MAPPING",[Oh]:"ACES_FILMIC_TONE_MAPPING",[zh]:"AGX_TONE_MAPPING",[Hh]:"NEUTRAL_TONE_MAPPING",[Bh]:"CUSTOM_TONE_MAPPING"};function Y_(n,e,t,i,s){let r=new Nn(e,t,{type:n,depthBuffer:i,stencilBuffer:s,depthTexture:i?new ki(e,t):void 0}),o=new Nn(e,t,{type:xi,depthBuffer:!1,stencilBuffer:!1}),a=new Gt;a.setAttribute("position",new It([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new It([0,2,0,0,2,0],2));let l=new el({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new pe(a,l),h=new mr(-1,1,1,-1,0,1),f=null,d=null,u=!1,p,x=null,m=[],g=!1;this.setSize=function(y,w){r.setSize(y,w),o.setSize(y,w);for(let T=0;T<m.length;T++){let I=m[T];I.setSize&&I.setSize(y,w)}},this.setEffects=function(y){m=y,g=m.length>0&&m[0].isRenderPass===!0;let w=r.width,T=r.height;for(let I=0;I<m.length;I++){let E=m[I];E.setSize&&E.setSize(w,T)}},this.begin=function(y,w){if(u||y.toneMapping===Qn&&m.length===0)return!1;if(x=w,w!==null){let T=w.width,I=w.height;(r.width!==T||r.height!==I)&&this.setSize(T,I)}return g===!1&&y.setRenderTarget(r),p=y.toneMapping,y.toneMapping=Qn,!0},this.hasRenderPass=function(){return g},this.end=function(y,w){y.toneMapping=p,u=!0;let T=r,I=o;for(let E=0;E<m.length;E++){let L=m[E];if(L.enabled!==!1&&(L.render(y,I,T,w),L.needsSwap!==!1)){let _=T;T=I,I=_}}if(f!==y.outputColorSpace||d!==y.toneMapping){f=y.outputColorSpace,d=y.toneMapping,l.defines={},ht.getTransfer(f)===wt&&(l.defines.SRGB_TRANSFER="");let E=q_[d];E&&(l.defines[E]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=T.texture,y.setRenderTarget(x),y.render(c,h),x=null,u=!1},this.isCompositing=function(){return u},this.dispose=function(){r.depthTexture&&r.depthTexture.dispose(),r.dispose(),o.dispose(),a.dispose(),l.dispose()}}var am=new En,af=new ki(1,1),lm=new so,cm=new $a,hm=new uo,Vp=[],Gp=[],Wp=new Float32Array(16),Xp=new Float32Array(9),qp=new Float32Array(4);function Mr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Vp[s];if(r===void 0&&(r=new Float32Array(s),Vp[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function on(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function an(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function fc(n,e){let t=Gp[e];t===void 0&&(t=new Int32Array(e),Gp[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Z_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function K_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;n.uniform2fv(this.addr,e),an(t,e)}}function $_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(on(t,e))return;n.uniform3fv(this.addr,e),an(t,e)}}function J_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;n.uniform4fv(this.addr,e),an(t,e)}}function j_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(on(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),an(t,e)}else{if(on(t,i))return;qp.set(i),n.uniformMatrix2fv(this.addr,!1,qp),an(t,i)}}function Q_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(on(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),an(t,e)}else{if(on(t,i))return;Xp.set(i),n.uniformMatrix3fv(this.addr,!1,Xp),an(t,i)}}function ev(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(on(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),an(t,e)}else{if(on(t,i))return;Wp.set(i),n.uniformMatrix4fv(this.addr,!1,Wp),an(t,i)}}function tv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function nv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;n.uniform2iv(this.addr,e),an(t,e)}}function iv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;n.uniform3iv(this.addr,e),an(t,e)}}function sv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;n.uniform4iv(this.addr,e),an(t,e)}}function rv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function ov(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;n.uniform2uiv(this.addr,e),an(t,e)}}function av(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;n.uniform3uiv(this.addr,e),an(t,e)}}function lv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;n.uniform4uiv(this.addr,e),an(t,e)}}function cv(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(af.compareFunction=t.isReversedDepthBuffer()?sc:ic,r=af):r=am,t.setTexture2D(e||r,s)}function hv(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||cm,s)}function fv(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||hm,s)}function dv(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||lm,s)}function uv(n){switch(n){case 5126:return Z_;case 35664:return K_;case 35665:return $_;case 35666:return J_;case 35674:return j_;case 35675:return Q_;case 35676:return ev;case 5124:case 35670:return tv;case 35667:case 35671:return nv;case 35668:case 35672:return iv;case 35669:case 35673:return sv;case 5125:return rv;case 36294:return ov;case 36295:return av;case 36296:return lv;case 35678:case 36198:case 36298:case 36306:case 35682:return cv;case 35679:case 36299:case 36307:return hv;case 35680:case 36300:case 36308:case 36293:return fv;case 36289:case 36303:case 36311:case 36292:return dv}}function pv(n,e){n.uniform1fv(this.addr,e)}function mv(n,e){let t=Mr(e,this.size,2);n.uniform2fv(this.addr,t)}function gv(n,e){let t=Mr(e,this.size,3);n.uniform3fv(this.addr,t)}function xv(n,e){let t=Mr(e,this.size,4);n.uniform4fv(this.addr,t)}function yv(n,e){let t=Mr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function _v(n,e){let t=Mr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function vv(n,e){let t=Mr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Mv(n,e){n.uniform1iv(this.addr,e)}function bv(n,e){n.uniform2iv(this.addr,e)}function wv(n,e){n.uniform3iv(this.addr,e)}function Tv(n,e){n.uniform4iv(this.addr,e)}function Ev(n,e){n.uniform1uiv(this.addr,e)}function Av(n,e){n.uniform2uiv(this.addr,e)}function Rv(n,e){n.uniform3uiv(this.addr,e)}function Cv(n,e){n.uniform4uiv(this.addr,e)}function Sv(n,e,t){let i=this.cache,s=e.length,r=fc(t,s);on(i,r)||(n.uniform1iv(this.addr,r),an(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=af:o=am;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function Iv(n,e,t){let i=this.cache,s=e.length,r=fc(t,s);on(i,r)||(n.uniform1iv(this.addr,r),an(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||cm,r[o])}function Pv(n,e,t){let i=this.cache,s=e.length,r=fc(t,s);on(i,r)||(n.uniform1iv(this.addr,r),an(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||hm,r[o])}function Lv(n,e,t){let i=this.cache,s=e.length,r=fc(t,s);on(i,r)||(n.uniform1iv(this.addr,r),an(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||lm,r[o])}function Dv(n){switch(n){case 5126:return pv;case 35664:return mv;case 35665:return gv;case 35666:return xv;case 35674:return yv;case 35675:return _v;case 35676:return vv;case 5124:case 35670:return Mv;case 35667:case 35671:return bv;case 35668:case 35672:return wv;case 35669:case 35673:return Tv;case 5125:return Ev;case 36294:return Av;case 36295:return Rv;case 36296:return Cv;case 35678:case 36198:case 36298:case 36306:case 35682:return Sv;case 35679:case 36299:case 36307:return Iv;case 35680:case 36300:case 36308:case 36293:return Pv;case 36289:case 36303:case 36311:case 36292:return Lv}}var lf=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=uv(t.type)}},cf=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Dv(t.type)}},hf=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},rf=/(\w+)(\])?(\[|\.)?/g;function Yp(n,e){n.seq.push(e),n.map[e.id]=e}function Nv(n,e,t){let i=n.name,s=i.length;for(rf.lastIndex=0;;){let r=rf.exec(i),o=rf.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Yp(t,c===void 0?new lf(a,n,e):new cf(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new hf(a),Yp(t,f)),t=f}}}var vr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);Nv(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function Zp(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var Uv=37297,kv=0;function Fv(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var Kp=new Qe;function Ov(n){ht._getMatrix(Kp,ht.workingColorSpace,n);let e=`mat3( ${Kp.elements.map(t=>t.toFixed(4))} )`;switch(ht.getTransfer(n)){case to:return[e,"LinearTransferOETF"];case wt:return[e,"sRGBTransferOETF"];default:return Ze("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function $p(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Fv(n.getShaderSource(e),a)}else return r}function Bv(n,e){let t=Ov(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var zv={[Uh]:"Linear",[kh]:"Reinhard",[Fh]:"Cineon",[Oh]:"ACESFilmic",[zh]:"AgX",[Hh]:"Neutral",[Bh]:"Custom"};function Hv(n,e){let t=zv[e];return t===void 0?(Ze("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var oc=new z;function Vv(){ht.getLuminanceCoefficients(oc);let n=oc.x.toFixed(4),e=oc.y.toFixed(4),t=oc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Gv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(No).join(`
`)}function Wv(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Xv(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function No(n){return n!==""}function Jp(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function jp(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var qv=/^[ \t]*#include +<([\w\d./]+)>/gm;function ff(n){return n.replace(qv,Zv)}var Yv=new Map;function Zv(n,e){let t=rt[e];if(t===void 0){let i=Yv.get(e);if(i!==void 0)t=rt[i],Ze('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ff(t)}var Kv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qp(n){return n.replace(Kv,$v)}function $v(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function em(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var Jv={[wo]:"SHADOWMAP_TYPE_PCF",[gr]:"SHADOWMAP_TYPE_VSM"};function jv(n){return Jv[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Qv={[rs]:"ENVMAP_TYPE_CUBE",[Ss]:"ENVMAP_TYPE_CUBE",[To]:"ENVMAP_TYPE_CUBE_UV"};function eM(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":Qv[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var tM={[Ss]:"ENVMAP_MODE_REFRACTION"};function nM(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":tM[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var iM={[ml]:"ENVMAP_BLENDING_MULTIPLY",[yp]:"ENVMAP_BLENDING_MIX",[_p]:"ENVMAP_BLENDING_ADD"};function sM(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":iM[n.combine]||"ENVMAP_BLENDING_NONE"}function rM(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function oM(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=jv(t),c=eM(t),h=nM(t),f=sM(t),d=rM(t),u=Gv(t),p=Wv(r),x=s.createProgram(),m,g,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(No).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(No).join(`
`),g.length>0&&(g+=`
`)):(m=[em(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(No).join(`
`),g=[em(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Qn?"#define TONE_MAPPING":"",t.toneMapping!==Qn?rt.tonemapping_pars_fragment:"",t.toneMapping!==Qn?Hv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,Bv("linearToOutputTexel",t.outputColorSpace),Vv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(No).join(`
`)),o=ff(o),o=Jp(o,t),o=jp(o,t),a=ff(a),a=Jp(a,t),a=jp(a,t),o=Qp(o),a=Qp(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===Kh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Kh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let w=y+m+o,T=y+g+a,I=Zp(s,s.VERTEX_SHADER,w),E=Zp(s,s.FRAGMENT_SHADER,T);s.attachShader(x,I),s.attachShader(x,E),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function L(C){if(n.debug.checkShaderErrors){let N=s.getProgramInfoLog(x)||"",V=s.getShaderInfoLog(I)||"",Y=s.getShaderInfoLog(E)||"",U=N.trim(),B=V.trim(),q=Y.trim(),ae=!0,J=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(ae=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,I,E);else{let ee=$p(s,I,"vertex"),te=$p(s,E,"fragment");Ye("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+U+`
`+ee+`
`+te)}else U!==""?Ze("WebGLProgram: Program Info Log:",U):(B===""||q==="")&&(J=!1);J&&(C.diagnostics={runnable:ae,programLog:U,vertexShader:{log:B,prefix:m},fragmentShader:{log:q,prefix:g}})}s.deleteShader(I),s.deleteShader(E),_=new vr(s,x),M=Xv(s,x)}let _;this.getUniforms=function(){return _===void 0&&L(this),_};let M;this.getAttributes=function(){return M===void 0&&L(this),M};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(x,Uv)),S},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=kv++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=I,this.fragmentShader=E,this}var aM=0,df=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new uf(e),t.set(e,i)),i}},uf=class{constructor(e){this.id=aM++,this.code=e,this.usedTimes=0}};function lM(n){return n===as||n===Io||n===Po}function cM(n,e,t,i,s,r){let o=new fr,a=new df,l=new Set,c=[],h=new Map,f=i.logarithmicDepthBuffer,d=i.precision,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return l.add(_),_===0?"uv":`uv${_}`}function x(_,M,S,C,N,V){let Y=C.fog,U=N.geometry,B=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?C.environment:null,q=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,ae=e.get(_.envMap||B,q),J=ae&&ae.mapping===To?ae.image.height:null,ee=u[_.type];_.precision!==null&&(d=i.getMaxPrecision(_.precision),d!==_.precision&&Ze("WebGLProgram.getParameters:",_.precision,"not supported, using",d,"instead."));let te=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,se=te!==void 0?te.length:0,F=0;U.morphAttributes.position!==void 0&&(F=1),U.morphAttributes.normal!==void 0&&(F=2),U.morphAttributes.color!==void 0&&(F=3);let v,D,R,k;if(ee){let et=_i[ee];v=et.vertexShader,D=et.fragmentShader}else v=_.vertexShader,D=_.fragmentShader,a.update(_),R=a.getVertexShaderID(_),k=a.getFragmentShaderID(_);let W=n.getRenderTarget(),ie=n.state.buffers.depth.getReversed(),me=N.isInstancedMesh===!0,we=N.isBatchedMesh===!0,Oe=!!_.map,Pe=!!_.matcap,ke=!!ae,We=!!_.aoMap,Le=!!_.lightMap,yt=!!_.bumpMap,_t=!!_.normalMap,un=!!_.displacementMap,G=!!_.emissiveMap,nn=!!_.metalnessMap,lt=!!_.roughnessMap,Dt=_.anisotropy>0,Te=_.clearcoat>0,Xt=_.dispersion>0,P=_.iridescence>0,b=_.sheen>0,Z=_.transmission>0,oe=Dt&&!!_.anisotropyMap,ue=Te&&!!_.clearcoatMap,ge=Te&&!!_.clearcoatNormalMap,be=Te&&!!_.clearcoatRoughnessMap,ne=P&&!!_.iridescenceMap,le=P&&!!_.iridescenceThicknessMap,Ce=b&&!!_.sheenColorMap,Ne=b&&!!_.sheenRoughnessMap,_e=!!_.specularMap,xe=!!_.specularColorMap,je=!!_.specularIntensityMap,it=Z&&!!_.transmissionMap,mt=Z&&!!_.thicknessMap,O=!!_.gradientMap,ye=!!_.alphaMap,re=_.alphaTest>0,Ie=!!_.alphaHash,ve=!!_.extensions,de=Qn;_.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(de=n.toneMapping);let Be={shaderID:ee,shaderType:_.type,shaderName:_.name,vertexShader:v,fragmentShader:D,defines:_.defines,customVertexShaderID:R,customFragmentShaderID:k,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:d,batching:we,batchingColor:we&&N._colorsTexture!==null,instancing:me,instancingColor:me&&N.instanceColor!==null,instancingMorph:me&&N.morphTexture!==null,outputColorSpace:W===null?n.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:ht.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Oe,matcap:Pe,envMap:ke,envMapMode:ke&&ae.mapping,envMapCubeUVHeight:J,aoMap:We,lightMap:Le,bumpMap:yt,normalMap:_t,displacementMap:un,emissiveMap:G,normalMapObjectSpace:_t&&_.normalMapType===bp,normalMapTangentSpace:_t&&_.normalMapType===nc,packedNormalMap:_t&&_.normalMapType===nc&&lM(_.normalMap.format),metalnessMap:nn,roughnessMap:lt,anisotropy:Dt,anisotropyMap:oe,clearcoat:Te,clearcoatMap:ue,clearcoatNormalMap:ge,clearcoatRoughnessMap:be,dispersion:Xt,iridescence:P,iridescenceMap:ne,iridescenceThicknessMap:le,sheen:b,sheenColorMap:Ce,sheenRoughnessMap:Ne,specularMap:_e,specularColorMap:xe,specularIntensityMap:je,transmission:Z,transmissionMap:it,thicknessMap:mt,gradientMap:O,opaque:_.transparent===!1&&_.blending===ji&&_.alphaToCoverage===!1,alphaMap:ye,alphaTest:re,alphaHash:Ie,combine:_.combine,mapUv:Oe&&p(_.map.channel),aoMapUv:We&&p(_.aoMap.channel),lightMapUv:Le&&p(_.lightMap.channel),bumpMapUv:yt&&p(_.bumpMap.channel),normalMapUv:_t&&p(_.normalMap.channel),displacementMapUv:un&&p(_.displacementMap.channel),emissiveMapUv:G&&p(_.emissiveMap.channel),metalnessMapUv:nn&&p(_.metalnessMap.channel),roughnessMapUv:lt&&p(_.roughnessMap.channel),anisotropyMapUv:oe&&p(_.anisotropyMap.channel),clearcoatMapUv:ue&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:ge&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&p(_.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:le&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&p(_.sheenRoughnessMap.channel),specularMapUv:_e&&p(_.specularMap.channel),specularColorMapUv:xe&&p(_.specularColorMap.channel),specularIntensityMapUv:je&&p(_.specularIntensityMap.channel),transmissionMapUv:it&&p(_.transmissionMap.channel),thicknessMapUv:mt&&p(_.thicknessMap.channel),alphaMapUv:ye&&p(_.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(_t||Dt),vertexNormals:!!U.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!U.attributes.uv&&(Oe||ye),fog:!!Y,useFog:_.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||U.attributes.normal===void 0&&_t===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ie,skinning:N.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:F,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:V.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&S.length>0,shadowMapType:n.shadowMap.type,toneMapping:de,decodeVideoTexture:Oe&&_.map.isVideoTexture===!0&&ht.getTransfer(_.map.colorSpace)===wt,decodeVideoTextureEmissive:G&&_.emissiveMap.isVideoTexture===!0&&ht.getTransfer(_.emissiveMap.colorSpace)===wt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Rn,flipSided:_.side===gn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ve&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ve&&_.extensions.multiDraw===!0||we)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Be.vertexUv1s=l.has(1),Be.vertexUv2s=l.has(2),Be.vertexUv3s=l.has(3),l.clear(),Be}function m(_){let M=[];if(_.shaderID?M.push(_.shaderID):(M.push(_.customVertexShaderID),M.push(_.customFragmentShaderID)),_.defines!==void 0)for(let S in _.defines)M.push(S),M.push(_.defines[S]);return _.isRawShaderMaterial===!1&&(g(M,_),y(M,_),M.push(n.outputColorSpace)),M.push(_.customProgramCacheKey),M.join()}function g(_,M){_.push(M.precision),_.push(M.outputColorSpace),_.push(M.envMapMode),_.push(M.envMapCubeUVHeight),_.push(M.mapUv),_.push(M.alphaMapUv),_.push(M.lightMapUv),_.push(M.aoMapUv),_.push(M.bumpMapUv),_.push(M.normalMapUv),_.push(M.displacementMapUv),_.push(M.emissiveMapUv),_.push(M.metalnessMapUv),_.push(M.roughnessMapUv),_.push(M.anisotropyMapUv),_.push(M.clearcoatMapUv),_.push(M.clearcoatNormalMapUv),_.push(M.clearcoatRoughnessMapUv),_.push(M.iridescenceMapUv),_.push(M.iridescenceThicknessMapUv),_.push(M.sheenColorMapUv),_.push(M.sheenRoughnessMapUv),_.push(M.specularMapUv),_.push(M.specularColorMapUv),_.push(M.specularIntensityMapUv),_.push(M.transmissionMapUv),_.push(M.thicknessMapUv),_.push(M.combine),_.push(M.fogExp2),_.push(M.sizeAttenuation),_.push(M.morphTargetsCount),_.push(M.morphAttributeCount),_.push(M.numDirLights),_.push(M.numPointLights),_.push(M.numSpotLights),_.push(M.numSpotLightMaps),_.push(M.numHemiLights),_.push(M.numRectAreaLights),_.push(M.numDirLightShadows),_.push(M.numPointLightShadows),_.push(M.numSpotLightShadows),_.push(M.numSpotLightShadowsWithMaps),_.push(M.numLightProbes),_.push(M.shadowMapType),_.push(M.toneMapping),_.push(M.numClippingPlanes),_.push(M.numClipIntersection),_.push(M.depthPacking)}function y(_,M){o.disableAll(),M.instancing&&o.enable(0),M.instancingColor&&o.enable(1),M.instancingMorph&&o.enable(2),M.matcap&&o.enable(3),M.envMap&&o.enable(4),M.normalMapObjectSpace&&o.enable(5),M.normalMapTangentSpace&&o.enable(6),M.clearcoat&&o.enable(7),M.iridescence&&o.enable(8),M.alphaTest&&o.enable(9),M.vertexColors&&o.enable(10),M.vertexAlphas&&o.enable(11),M.vertexUv1s&&o.enable(12),M.vertexUv2s&&o.enable(13),M.vertexUv3s&&o.enable(14),M.vertexTangents&&o.enable(15),M.anisotropy&&o.enable(16),M.alphaHash&&o.enable(17),M.batching&&o.enable(18),M.dispersion&&o.enable(19),M.batchingColor&&o.enable(20),M.gradientMap&&o.enable(21),M.packedNormalMap&&o.enable(22),M.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),M.numLightProbeGrids>0&&o.enable(22),_.push(o.mask)}function w(_){let M=u[_.type],S;if(M){let C=_i[M];S=Up.clone(C.uniforms)}else S=_.uniforms;return S}function T(_,M){let S=h.get(M);return S!==void 0?++S.usedTimes:(S=new oM(n,M,_,s),c.push(S),h.set(M,S)),S}function I(_){if(--_.usedTimes===0){let M=c.indexOf(_);c[M]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function E(_){a.remove(_)}function L(){a.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:w,acquireProgram:T,releaseProgram:I,releaseShaderCache:E,programs:c,dispose:L}}function hM(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function fM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function tm(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function nm(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(d){let u=0;return d.isInstancedMesh&&(u+=2),d.isSkinnedMesh&&(u+=1),u}function a(d,u,p,x,m,g){let y=n[e];return y===void 0?(y={id:d.id,object:d,geometry:u,material:p,materialVariant:o(d),groupOrder:x,renderOrder:d.renderOrder,z:m,group:g},n[e]=y):(y.id=d.id,y.object=d,y.geometry=u,y.material=p,y.materialVariant=o(d),y.groupOrder=x,y.renderOrder=d.renderOrder,y.z=m,y.group=g),e++,y}function l(d,u,p,x,m,g){let y=a(d,u,p,x,m,g);p.transmission>0?i.push(y):p.transparent===!0?s.push(y):t.push(y)}function c(d,u,p,x,m,g){let y=a(d,u,p,x,m,g);p.transmission>0?i.unshift(y):p.transparent===!0?s.unshift(y):t.unshift(y)}function h(d,u){t.length>1&&t.sort(d||fM),i.length>1&&i.sort(u||tm),s.length>1&&s.sort(u||tm)}function f(){for(let d=e,u=n.length;d<u;d++){let p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:f,sort:h}}function dM(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new nm,n.set(i,[o])):s>=r.length?(o=new nm,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function uM(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new Je};break;case"SpotLight":t={position:new z,direction:new z,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new z,halfWidth:new z,halfHeight:new z};break}return n[e.id]=t,t}}}function pM(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var mM=0;function gM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function xM(n){let e=new uM,t=pM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new z);let s=new z,r=new dt,o=new dt;function a(c){let h=0,f=0,d=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let u=0,p=0,x=0,m=0,g=0,y=0,w=0,T=0,I=0,E=0,L=0;c.sort(gM);for(let M=0,S=c.length;M<S;M++){let C=c[M],N=C.color,V=C.intensity,Y=C.distance,U=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===as?U=C.shadow.map.texture:U=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=N.r*V,f+=N.g*V,d+=N.b*V;else if(C.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(C.sh.coefficients[B],V);L++}else if(C.isDirectionalLight){let B=e.get(C);if(B.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let q=C.shadow,ae=t.get(C);ae.shadowIntensity=q.intensity,ae.shadowBias=q.bias,ae.shadowNormalBias=q.normalBias,ae.shadowRadius=q.radius,ae.shadowMapSize=q.mapSize,i.directionalShadow[u]=ae,i.directionalShadowMap[u]=U,i.directionalShadowMatrix[u]=C.shadow.matrix,y++}i.directional[u]=B,u++}else if(C.isSpotLight){let B=e.get(C);B.position.setFromMatrixPosition(C.matrixWorld),B.color.copy(N).multiplyScalar(V),B.distance=Y,B.coneCos=Math.cos(C.angle),B.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),B.decay=C.decay,i.spot[x]=B;let q=C.shadow;if(C.map&&(i.spotLightMap[I]=C.map,I++,q.updateMatrices(C),C.castShadow&&E++),i.spotLightMatrix[x]=q.matrix,C.castShadow){let ae=t.get(C);ae.shadowIntensity=q.intensity,ae.shadowBias=q.bias,ae.shadowNormalBias=q.normalBias,ae.shadowRadius=q.radius,ae.shadowMapSize=q.mapSize,i.spotShadow[x]=ae,i.spotShadowMap[x]=U,T++}x++}else if(C.isRectAreaLight){let B=e.get(C);B.color.copy(N).multiplyScalar(V),B.halfWidth.set(C.width*.5,0,0),B.halfHeight.set(0,C.height*.5,0),i.rectArea[m]=B,m++}else if(C.isPointLight){let B=e.get(C);if(B.color.copy(C.color).multiplyScalar(C.intensity),B.distance=C.distance,B.decay=C.decay,C.castShadow){let q=C.shadow,ae=t.get(C);ae.shadowIntensity=q.intensity,ae.shadowBias=q.bias,ae.shadowNormalBias=q.normalBias,ae.shadowRadius=q.radius,ae.shadowMapSize=q.mapSize,ae.shadowCameraNear=q.camera.near,ae.shadowCameraFar=q.camera.far,i.pointShadow[p]=ae,i.pointShadowMap[p]=U,i.pointShadowMatrix[p]=C.shadow.matrix,w++}i.point[p]=B,p++}else if(C.isHemisphereLight){let B=e.get(C);B.skyColor.copy(C.color).multiplyScalar(V),B.groundColor.copy(C.groundColor).multiplyScalar(V),i.hemi[g]=B,g++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ee.LTC_FLOAT_1,i.rectAreaLTC2=Ee.LTC_FLOAT_2):(i.rectAreaLTC1=Ee.LTC_HALF_1,i.rectAreaLTC2=Ee.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=d;let _=i.hash;(_.directionalLength!==u||_.pointLength!==p||_.spotLength!==x||_.rectAreaLength!==m||_.hemiLength!==g||_.numDirectionalShadows!==y||_.numPointShadows!==w||_.numSpotShadows!==T||_.numSpotMaps!==I||_.numLightProbes!==L)&&(i.directional.length=u,i.spot.length=x,i.rectArea.length=m,i.point.length=p,i.hemi.length=g,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=T+I-E,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=L,_.directionalLength=u,_.pointLength=p,_.spotLength=x,_.rectAreaLength=m,_.hemiLength=g,_.numDirectionalShadows=y,_.numPointShadows=w,_.numSpotShadows=T,_.numSpotMaps=I,_.numLightProbes=L,i.version=mM++)}function l(c,h){let f=0,d=0,u=0,p=0,x=0,m=h.matrixWorldInverse;for(let g=0,y=c.length;g<y;g++){let w=c[g];if(w.isDirectionalLight){let T=i.directional[f];T.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),f++}else if(w.isSpotLight){let T=i.spot[u];T.position.setFromMatrixPosition(w.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),u++}else if(w.isRectAreaLight){let T=i.rectArea[p];T.position.setFromMatrixPosition(w.matrixWorld),T.position.applyMatrix4(m),o.identity(),r.copy(w.matrixWorld),r.premultiply(m),o.extractRotation(r),T.halfWidth.set(w.width*.5,0,0),T.halfHeight.set(0,w.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),p++}else if(w.isPointLight){let T=i.point[d];T.position.setFromMatrixPosition(w.matrixWorld),T.position.applyMatrix4(m),d++}else if(w.isHemisphereLight){let T=i.hemi[x];T.direction.setFromMatrixPosition(w.matrixWorld),T.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function im(n){let e=new xM(n),t=[],i=[],s=[];function r(d){f.camera=d,t.length=0,i.length=0,s.length=0}function o(d){t.push(d)}function a(d){i.push(d)}function l(d){s.push(d)}function c(){e.setup(t)}function h(d){e.setupView(t,d)}let f={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function yM(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new im(n),e.set(s,[a])):r>=o.length?(a=new im(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var _M=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,MM=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],bM=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],sm=new dt,Do=new z,of=new z;function wM(n,e,t){let i=new pr,s=new $e,r=new $e,o=new Vt,a=new tl,l=new nl,c={},h=t.maxTextureSize,f={[Li]:gn,[gn]:Li,[Rn]:Rn},d=new Un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:_M,fragmentShader:vM}),u=d.clone();u.defines.HORIZONTAL_PASS=1;let p=new Gt;p.setAttribute("position",new Kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new pe(p,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wo;let g=this.type;this.render=function(E,L,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===Qu&&(Ze("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=wo);let M=n.getRenderTarget(),S=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),N=n.state;N.setBlending(mi),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let V=g!==this.type;V&&L.traverse(function(Y){Y.material&&(Array.isArray(Y.material)?Y.material.forEach(U=>U.needsUpdate=!0):Y.material.needsUpdate=!0)});for(let Y=0,U=E.length;Y<U;Y++){let B=E[Y],q=B.shadow;if(q===void 0){Ze("WebGLShadowMap:",B,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let ae=q.getFrameExtents();s.multiply(ae),r.copy(q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ae.x),s.x=r.x*ae.x,q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ae.y),s.y=r.y*ae.y,q.mapSize.y=r.y));let J=n.state.buffers.depth.getReversed();if(q.camera._reversedDepth=J,q.map===null||V===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===gr){if(B.isPointLight){Ze("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new Nn(s.x,s.y,{format:as,type:xi,minFilter:mn,magFilter:mn,generateMipmaps:!1}),q.map.texture.name=B.name+".shadowMap",q.map.depthTexture=new ki(s.x,s.y,Xn),q.map.depthTexture.name=B.name+".shadowMapDepth",q.map.depthTexture.format=li,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=dn,q.map.depthTexture.magFilter=dn}else B.isPointLight?(q.map=new lc(s.x),q.map.depthTexture=new ja(s.x,ei)):(q.map=new Nn(s.x,s.y),q.map.depthTexture=new ki(s.x,s.y,ei)),q.map.depthTexture.name=B.name+".shadowMap",q.map.depthTexture.format=li,this.type===wo?(q.map.depthTexture.compareFunction=J?sc:ic,q.map.depthTexture.minFilter=mn,q.map.depthTexture.magFilter=mn):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=dn,q.map.depthTexture.magFilter=dn);q.camera.updateProjectionMatrix()}let ee=q.map.isWebGLCubeRenderTarget?6:1;for(let te=0;te<ee;te++){if(q.map.isWebGLCubeRenderTarget)n.setRenderTarget(q.map,te),n.clear();else{te===0&&(n.setRenderTarget(q.map),n.clear());let se=q.getViewport(te);o.set(r.x*se.x,r.y*se.y,r.x*se.z,r.y*se.w),N.viewport(o)}if(B.isPointLight){let se=q.camera,F=q.matrix,v=B.distance||se.far;v!==se.far&&(se.far=v,se.updateProjectionMatrix()),Do.setFromMatrixPosition(B.matrixWorld),se.position.copy(Do),of.copy(se.position),of.add(MM[te]),se.up.copy(bM[te]),se.lookAt(of),se.updateMatrixWorld(),F.makeTranslation(-Do.x,-Do.y,-Do.z),sm.multiplyMatrices(se.projectionMatrix,se.matrixWorldInverse),q._frustum.setFromProjectionMatrix(sm,se.coordinateSystem,se.reversedDepth)}else q.updateMatrices(B);i=q.getFrustum(),T(L,_,q.camera,B,this.type)}q.isPointLightShadow!==!0&&this.type===gr&&y(q,_),q.needsUpdate=!1}g=this.type,m.needsUpdate=!1,n.setRenderTarget(M,S,C)};function y(E,L){let _=e.update(x);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,u.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,u.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Nn(s.x,s.y,{format:as,type:xi})),d.uniforms.shadow_pass.value=E.map.depthTexture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(L,null,_,d,x,null),u.uniforms.shadow_pass.value=E.mapPass.texture,u.uniforms.resolution.value=E.mapSize,u.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(L,null,_,u,x,null)}function w(E,L,_,M){let S=null,C=_.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(C!==void 0)S=C;else if(S=_.isPointLight===!0?l:a,n.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){let N=S.uuid,V=L.uuid,Y=c[N];Y===void 0&&(Y={},c[N]=Y);let U=Y[V];U===void 0&&(U=S.clone(),Y[V]=U,L.addEventListener("dispose",I)),S=U}if(S.visible=L.visible,S.wireframe=L.wireframe,M===gr?S.side=L.shadowSide!==null?L.shadowSide:L.side:S.side=L.shadowSide!==null?L.shadowSide:f[L.side],S.alphaMap=L.alphaMap,S.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,S.map=L.map,S.clipShadows=L.clipShadows,S.clippingPlanes=L.clippingPlanes,S.clipIntersection=L.clipIntersection,S.displacementMap=L.displacementMap,S.displacementScale=L.displacementScale,S.displacementBias=L.displacementBias,S.wireframeLinewidth=L.wireframeLinewidth,S.linewidth=L.linewidth,_.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let N=n.properties.get(S);N.light=_}return S}function T(E,L,_,M,S){if(E.visible===!1)return;if(E.layers.test(L.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&S===gr)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,E.matrixWorld);let V=e.update(E),Y=E.material;if(Array.isArray(Y)){let U=V.groups;for(let B=0,q=U.length;B<q;B++){let ae=U[B],J=Y[ae.materialIndex];if(J&&J.visible){let ee=w(E,J,M,S);E.onBeforeShadow(n,E,L,_,V,ee,ae),n.renderBufferDirect(_,null,V,ee,E,ae),E.onAfterShadow(n,E,L,_,V,ee,ae)}}}else if(Y.visible){let U=w(E,Y,M,S);E.onBeforeShadow(n,E,L,_,V,U,null),n.renderBufferDirect(_,null,V,U,E,null),E.onAfterShadow(n,E,L,_,V,U,null)}}let N=E.children;for(let V=0,Y=N.length;V<Y;V++)T(N[V],L,_,M,S)}function I(E){E.target.removeEventListener("dispose",I);for(let _ in c){let M=c[_],S=E.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}function TM(n,e){function t(){let O=!1,ye=new Vt,re=null,Ie=new Vt(0,0,0,0);return{setMask:function(ve){re!==ve&&!O&&(n.colorMask(ve,ve,ve,ve),re=ve)},setLocked:function(ve){O=ve},setClear:function(ve,de,Be,et,$t){$t===!0&&(ve*=et,de*=et,Be*=et),ye.set(ve,de,Be,et),Ie.equals(ye)===!1&&(n.clearColor(ve,de,Be,et),Ie.copy(ye))},reset:function(){O=!1,re=null,Ie.set(-1,0,0,0)}}}function i(){let O=!1,ye=!1,re=null,Ie=null,ve=null;return{setReversed:function(de){if(ye!==de){let Be=e.get("EXT_clip_control");de?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT),ye=de;let et=ve;ve=null,this.setClear(et)}},getReversed:function(){return ye},setTest:function(de){de?W(n.DEPTH_TEST):ie(n.DEPTH_TEST)},setMask:function(de){re!==de&&!O&&(n.depthMask(de),re=de)},setFunc:function(de){if(ye&&(de=Lp[de]),Ie!==de){switch(de){case ka:n.depthFunc(n.NEVER);break;case Fa:n.depthFunc(n.ALWAYS);break;case Oa:n.depthFunc(n.LESS);break;case ws:n.depthFunc(n.LEQUAL);break;case Ba:n.depthFunc(n.EQUAL);break;case za:n.depthFunc(n.GEQUAL);break;case Ha:n.depthFunc(n.GREATER);break;case Va:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ie=de}},setLocked:function(de){O=de},setClear:function(de){ve!==de&&(ve=de,ye&&(de=1-de),n.clearDepth(de))},reset:function(){O=!1,re=null,Ie=null,ve=null,ye=!1}}}function s(){let O=!1,ye=null,re=null,Ie=null,ve=null,de=null,Be=null,et=null,$t=null;return{setTest:function(Tt){O||(Tt?W(n.STENCIL_TEST):ie(n.STENCIL_TEST))},setMask:function(Tt){ye!==Tt&&!O&&(n.stencilMask(Tt),ye=Tt)},setFunc:function(Tt,vi,ti){(re!==Tt||Ie!==vi||ve!==ti)&&(n.stencilFunc(Tt,vi,ti),re=Tt,Ie=vi,ve=ti)},setOp:function(Tt,vi,ti){(de!==Tt||Be!==vi||et!==ti)&&(n.stencilOp(Tt,vi,ti),de=Tt,Be=vi,et=ti)},setLocked:function(Tt){O=Tt},setClear:function(Tt){$t!==Tt&&(n.clearStencil(Tt),$t=Tt)},reset:function(){O=!1,ye=null,re=null,Ie=null,ve=null,de=null,Be=null,et=null,$t=null}}}let r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap,h={},f={},d={},u=new WeakMap,p=[],x=null,m=!1,g=null,y=null,w=null,T=null,I=null,E=null,L=null,_=new Je(0,0,0),M=0,S=!1,C=null,N=null,V=null,Y=null,U=null,B=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,ae=0,J=n.getParameter(n.VERSION);J.indexOf("WebGL")!==-1?(ae=parseFloat(/^WebGL (\d)/.exec(J)[1]),q=ae>=1):J.indexOf("OpenGL ES")!==-1&&(ae=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),q=ae>=2);let ee=null,te={},se=n.getParameter(n.SCISSOR_BOX),F=n.getParameter(n.VIEWPORT),v=new Vt().fromArray(se),D=new Vt().fromArray(F);function R(O,ye,re,Ie){let ve=new Uint8Array(4),de=n.createTexture();n.bindTexture(O,de),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Be=0;Be<re;Be++)O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?n.texImage3D(ye,0,n.RGBA,1,1,Ie,0,n.RGBA,n.UNSIGNED_BYTE,ve):n.texImage2D(ye+Be,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ve);return de}let k={};k[n.TEXTURE_2D]=R(n.TEXTURE_2D,n.TEXTURE_2D,1),k[n.TEXTURE_CUBE_MAP]=R(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),k[n.TEXTURE_2D_ARRAY]=R(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),k[n.TEXTURE_3D]=R(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),W(n.DEPTH_TEST),o.setFunc(ws),yt(!1),_t(Lh),W(n.CULL_FACE),We(mi);function W(O){h[O]!==!0&&(n.enable(O),h[O]=!0)}function ie(O){h[O]!==!1&&(n.disable(O),h[O]=!1)}function me(O,ye){return d[O]!==ye?(n.bindFramebuffer(O,ye),d[O]=ye,O===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=ye),O===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=ye),!0):!1}function we(O,ye){let re=p,Ie=!1;if(O){re=u.get(ye),re===void 0&&(re=[],u.set(ye,re));let ve=O.textures;if(re.length!==ve.length||re[0]!==n.COLOR_ATTACHMENT0){for(let de=0,Be=ve.length;de<Be;de++)re[de]=n.COLOR_ATTACHMENT0+de;re.length=ve.length,Ie=!0}}else re[0]!==n.BACK&&(re[0]=n.BACK,Ie=!0);Ie&&n.drawBuffers(re)}function Oe(O){return x!==O?(n.useProgram(O),x=O,!0):!1}let Pe={[Qi]:n.FUNC_ADD,[tp]:n.FUNC_SUBTRACT,[np]:n.FUNC_REVERSE_SUBTRACT};Pe[ip]=n.MIN,Pe[sp]=n.MAX;let ke={[rp]:n.ZERO,[op]:n.ONE,[ap]:n.SRC_COLOR,[Na]:n.SRC_ALPHA,[up]:n.SRC_ALPHA_SATURATE,[fp]:n.DST_COLOR,[cp]:n.DST_ALPHA,[lp]:n.ONE_MINUS_SRC_COLOR,[Ua]:n.ONE_MINUS_SRC_ALPHA,[dp]:n.ONE_MINUS_DST_COLOR,[hp]:n.ONE_MINUS_DST_ALPHA,[pp]:n.CONSTANT_COLOR,[mp]:n.ONE_MINUS_CONSTANT_COLOR,[gp]:n.CONSTANT_ALPHA,[xp]:n.ONE_MINUS_CONSTANT_ALPHA};function We(O,ye,re,Ie,ve,de,Be,et,$t,Tt){if(O===mi){m===!0&&(ie(n.BLEND),m=!1);return}if(m===!1&&(W(n.BLEND),m=!0),O!==ep){if(O!==g||Tt!==S){if((y!==Qi||I!==Qi)&&(n.blendEquation(n.FUNC_ADD),y=Qi,I=Qi),Tt)switch(O){case ji:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Fn:n.blendFunc(n.ONE,n.ONE);break;case Dh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Nh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Ye("WebGLState: Invalid blending: ",O);break}else switch(O){case ji:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Fn:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Dh:Ye("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Nh:Ye("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ye("WebGLState: Invalid blending: ",O);break}w=null,T=null,E=null,L=null,_.set(0,0,0),M=0,g=O,S=Tt}return}ve=ve||ye,de=de||re,Be=Be||Ie,(ye!==y||ve!==I)&&(n.blendEquationSeparate(Pe[ye],Pe[ve]),y=ye,I=ve),(re!==w||Ie!==T||de!==E||Be!==L)&&(n.blendFuncSeparate(ke[re],ke[Ie],ke[de],ke[Be]),w=re,T=Ie,E=de,L=Be),(et.equals(_)===!1||$t!==M)&&(n.blendColor(et.r,et.g,et.b,$t),_.copy(et),M=$t),g=O,S=!1}function Le(O,ye){O.side===Rn?ie(n.CULL_FACE):W(n.CULL_FACE);let re=O.side===gn;ye&&(re=!re),yt(re),O.blending===ji&&O.transparent===!1?We(mi):We(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);let Ie=O.stencilWrite;a.setTest(Ie),Ie&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),G(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?W(n.SAMPLE_ALPHA_TO_COVERAGE):ie(n.SAMPLE_ALPHA_TO_COVERAGE)}function yt(O){C!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),C=O)}function _t(O){O!==Ju?(W(n.CULL_FACE),O!==N&&(O===Lh?n.cullFace(n.BACK):O===ju?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ie(n.CULL_FACE),N=O}function un(O){O!==V&&(q&&n.lineWidth(O),V=O)}function G(O,ye,re){O?(W(n.POLYGON_OFFSET_FILL),(Y!==ye||U!==re)&&(Y=ye,U=re,o.getReversed()&&(ye=-ye),n.polygonOffset(ye,re))):ie(n.POLYGON_OFFSET_FILL)}function nn(O){O?W(n.SCISSOR_TEST):ie(n.SCISSOR_TEST)}function lt(O){O===void 0&&(O=n.TEXTURE0+B-1),ee!==O&&(n.activeTexture(O),ee=O)}function Dt(O,ye,re){re===void 0&&(ee===null?re=n.TEXTURE0+B-1:re=ee);let Ie=te[re];Ie===void 0&&(Ie={type:void 0,texture:void 0},te[re]=Ie),(Ie.type!==O||Ie.texture!==ye)&&(ee!==re&&(n.activeTexture(re),ee=re),n.bindTexture(O,ye||k[O]),Ie.type=O,Ie.texture=ye)}function Te(){let O=te[ee];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function Xt(){try{n.compressedTexImage2D(...arguments)}catch(O){Ye("WebGLState:",O)}}function P(){try{n.compressedTexImage3D(...arguments)}catch(O){Ye("WebGLState:",O)}}function b(){try{n.texSubImage2D(...arguments)}catch(O){Ye("WebGLState:",O)}}function Z(){try{n.texSubImage3D(...arguments)}catch(O){Ye("WebGLState:",O)}}function oe(){try{n.compressedTexSubImage2D(...arguments)}catch(O){Ye("WebGLState:",O)}}function ue(){try{n.compressedTexSubImage3D(...arguments)}catch(O){Ye("WebGLState:",O)}}function ge(){try{n.texStorage2D(...arguments)}catch(O){Ye("WebGLState:",O)}}function be(){try{n.texStorage3D(...arguments)}catch(O){Ye("WebGLState:",O)}}function ne(){try{n.texImage2D(...arguments)}catch(O){Ye("WebGLState:",O)}}function le(){try{n.texImage3D(...arguments)}catch(O){Ye("WebGLState:",O)}}function Ce(O){return f[O]!==void 0?f[O]:n.getParameter(O)}function Ne(O,ye){f[O]!==ye&&(n.pixelStorei(O,ye),f[O]=ye)}function _e(O){v.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),v.copy(O))}function xe(O){D.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),D.copy(O))}function je(O,ye){let re=c.get(ye);re===void 0&&(re=new WeakMap,c.set(ye,re));let Ie=re.get(O);Ie===void 0&&(Ie=n.getUniformBlockIndex(ye,O.name),re.set(O,Ie))}function it(O,ye){let Ie=c.get(ye).get(O);l.get(ye)!==Ie&&(n.uniformBlockBinding(ye,Ie,O.__bindingPointIndex),l.set(ye,Ie))}function mt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},f={},ee=null,te={},d={},u=new WeakMap,p=[],x=null,m=!1,g=null,y=null,w=null,T=null,I=null,E=null,L=null,_=new Je(0,0,0),M=0,S=!1,C=null,N=null,V=null,Y=null,U=null,v.set(0,0,n.canvas.width,n.canvas.height),D.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:W,disable:ie,bindFramebuffer:me,drawBuffers:we,useProgram:Oe,setBlending:We,setMaterial:Le,setFlipSided:yt,setCullFace:_t,setLineWidth:un,setPolygonOffset:G,setScissorTest:nn,activeTexture:lt,bindTexture:Dt,unbindTexture:Te,compressedTexImage2D:Xt,compressedTexImage3D:P,texImage2D:ne,texImage3D:le,pixelStorei:Ne,getParameter:Ce,updateUBOMapping:je,uniformBlockBinding:it,texStorage2D:ge,texStorage3D:be,texSubImage2D:b,texSubImage3D:Z,compressedTexSubImage2D:oe,compressedTexSubImage3D:ue,scissor:_e,viewport:xe,reset:mt}}function EM(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new $e,h=new WeakMap,f=new Set,d,u=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(P,b){return p?new OffscreenCanvas(P,b):no("canvas")}function m(P,b,Z){let oe=1,ue=Xt(P);if((ue.width>Z||ue.height>Z)&&(oe=Z/Math.max(ue.width,ue.height)),oe<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let ge=Math.floor(oe*ue.width),be=Math.floor(oe*ue.height);d===void 0&&(d=x(ge,be));let ne=b?x(ge,be):d;return ne.width=ge,ne.height=be,ne.getContext("2d").drawImage(P,0,0,ge,be),Ze("WebGLRenderer: Texture has been resized from ("+ue.width+"x"+ue.height+") to ("+ge+"x"+be+")."),ne}else return"data"in P&&Ze("WebGLRenderer: Image in DataTexture is too big ("+ue.width+"x"+ue.height+")."),P;return P}function g(P){return P.generateMipmaps}function y(P){n.generateMipmap(P)}function w(P){return P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?n.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(P,b,Z,oe,ue,ge=!1){if(P!==null){if(n[P]!==void 0)return n[P];Ze("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let be;oe&&(be=e.get("EXT_texture_norm16"),be||Ze("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ne=b;if(b===n.RED&&(Z===n.FLOAT&&(ne=n.R32F),Z===n.HALF_FLOAT&&(ne=n.R16F),Z===n.UNSIGNED_BYTE&&(ne=n.R8),Z===n.UNSIGNED_SHORT&&be&&(ne=be.R16_EXT),Z===n.SHORT&&be&&(ne=be.R16_SNORM_EXT)),b===n.RED_INTEGER&&(Z===n.UNSIGNED_BYTE&&(ne=n.R8UI),Z===n.UNSIGNED_SHORT&&(ne=n.R16UI),Z===n.UNSIGNED_INT&&(ne=n.R32UI),Z===n.BYTE&&(ne=n.R8I),Z===n.SHORT&&(ne=n.R16I),Z===n.INT&&(ne=n.R32I)),b===n.RG&&(Z===n.FLOAT&&(ne=n.RG32F),Z===n.HALF_FLOAT&&(ne=n.RG16F),Z===n.UNSIGNED_BYTE&&(ne=n.RG8),Z===n.UNSIGNED_SHORT&&be&&(ne=be.RG16_EXT),Z===n.SHORT&&be&&(ne=be.RG16_SNORM_EXT)),b===n.RG_INTEGER&&(Z===n.UNSIGNED_BYTE&&(ne=n.RG8UI),Z===n.UNSIGNED_SHORT&&(ne=n.RG16UI),Z===n.UNSIGNED_INT&&(ne=n.RG32UI),Z===n.BYTE&&(ne=n.RG8I),Z===n.SHORT&&(ne=n.RG16I),Z===n.INT&&(ne=n.RG32I)),b===n.RGB_INTEGER&&(Z===n.UNSIGNED_BYTE&&(ne=n.RGB8UI),Z===n.UNSIGNED_SHORT&&(ne=n.RGB16UI),Z===n.UNSIGNED_INT&&(ne=n.RGB32UI),Z===n.BYTE&&(ne=n.RGB8I),Z===n.SHORT&&(ne=n.RGB16I),Z===n.INT&&(ne=n.RGB32I)),b===n.RGBA_INTEGER&&(Z===n.UNSIGNED_BYTE&&(ne=n.RGBA8UI),Z===n.UNSIGNED_SHORT&&(ne=n.RGBA16UI),Z===n.UNSIGNED_INT&&(ne=n.RGBA32UI),Z===n.BYTE&&(ne=n.RGBA8I),Z===n.SHORT&&(ne=n.RGBA16I),Z===n.INT&&(ne=n.RGBA32I)),b===n.RGB&&(Z===n.UNSIGNED_SHORT&&be&&(ne=be.RGB16_EXT),Z===n.SHORT&&be&&(ne=be.RGB16_SNORM_EXT),Z===n.UNSIGNED_INT_5_9_9_9_REV&&(ne=n.RGB9_E5),Z===n.UNSIGNED_INT_10F_11F_11F_REV&&(ne=n.R11F_G11F_B10F)),b===n.RGBA){let le=ge?to:ht.getTransfer(ue);Z===n.FLOAT&&(ne=n.RGBA32F),Z===n.HALF_FLOAT&&(ne=n.RGBA16F),Z===n.UNSIGNED_BYTE&&(ne=le===wt?n.SRGB8_ALPHA8:n.RGBA8),Z===n.UNSIGNED_SHORT&&be&&(ne=be.RGBA16_EXT),Z===n.SHORT&&be&&(ne=be.RGBA16_SNORM_EXT),Z===n.UNSIGNED_SHORT_4_4_4_4&&(ne=n.RGBA4),Z===n.UNSIGNED_SHORT_5_5_5_1&&(ne=n.RGB5_A1)}return(ne===n.R16F||ne===n.R32F||ne===n.RG16F||ne===n.RG32F||ne===n.RGBA16F||ne===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function I(P,b){let Z;return P?b===null||b===ei||b===yr?Z=n.DEPTH24_STENCIL8:b===Xn?Z=n.DEPTH32F_STENCIL8:b===xr&&(Z=n.DEPTH24_STENCIL8,Ze("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ei||b===yr?Z=n.DEPTH_COMPONENT24:b===Xn?Z=n.DEPTH_COMPONENT32F:b===xr&&(Z=n.DEPTH_COMPONENT16),Z}function E(P,b){return g(P)===!0||P.isFramebufferTexture&&P.minFilter!==dn&&P.minFilter!==mn?Math.log2(Math.max(b.width,b.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?b.mipmaps.length:1}function L(P){let b=P.target;b.removeEventListener("dispose",L),M(b),b.isVideoTexture&&h.delete(b),b.isHTMLTexture&&f.delete(b)}function _(P){let b=P.target;b.removeEventListener("dispose",_),C(b)}function M(P){let b=i.get(P);if(b.__webglInit===void 0)return;let Z=P.source,oe=u.get(Z);if(oe){let ue=oe[b.__cacheKey];ue.usedTimes--,ue.usedTimes===0&&S(P),Object.keys(oe).length===0&&u.delete(Z)}i.remove(P)}function S(P){let b=i.get(P);n.deleteTexture(b.__webglTexture);let Z=P.source,oe=u.get(Z);delete oe[b.__cacheKey],o.memory.textures--}function C(P){let b=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(b.__webglFramebuffer[oe]))for(let ue=0;ue<b.__webglFramebuffer[oe].length;ue++)n.deleteFramebuffer(b.__webglFramebuffer[oe][ue]);else n.deleteFramebuffer(b.__webglFramebuffer[oe]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[oe])}else{if(Array.isArray(b.__webglFramebuffer))for(let oe=0;oe<b.__webglFramebuffer.length;oe++)n.deleteFramebuffer(b.__webglFramebuffer[oe]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let oe=0;oe<b.__webglColorRenderbuffer.length;oe++)b.__webglColorRenderbuffer[oe]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[oe]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let Z=P.textures;for(let oe=0,ue=Z.length;oe<ue;oe++){let ge=i.get(Z[oe]);ge.__webglTexture&&(n.deleteTexture(ge.__webglTexture),o.memory.textures--),i.remove(Z[oe])}i.remove(P)}let N=0;function V(){N=0}function Y(){return N}function U(P){N=P}function B(){let P=N;return P>=s.maxTextures&&Ze("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),N+=1,P}function q(P){let b=[];return b.push(P.wrapS),b.push(P.wrapT),b.push(P.wrapR||0),b.push(P.magFilter),b.push(P.minFilter),b.push(P.anisotropy),b.push(P.internalFormat),b.push(P.format),b.push(P.type),b.push(P.generateMipmaps),b.push(P.premultiplyAlpha),b.push(P.flipY),b.push(P.unpackAlignment),b.push(P.colorSpace),b.join()}function ae(P,b){let Z=i.get(P);if(P.isVideoTexture&&Dt(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&Z.__version!==P.version){let oe=P.image;if(oe===null)Ze("WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)Ze("WebGLRenderer: Texture marked for update but image is incomplete");else{ie(Z,P,b);return}}else P.isExternalTexture&&(Z.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,Z.__webglTexture,n.TEXTURE0+b)}function J(P,b){let Z=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&Z.__version!==P.version){ie(Z,P,b);return}else P.isExternalTexture&&(Z.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,Z.__webglTexture,n.TEXTURE0+b)}function ee(P,b){let Z=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&Z.__version!==P.version){ie(Z,P,b);return}t.bindTexture(n.TEXTURE_3D,Z.__webglTexture,n.TEXTURE0+b)}function te(P,b){let Z=i.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&Z.__version!==P.version){me(Z,P,b);return}t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture,n.TEXTURE0+b)}let se={[Ts]:n.REPEAT,[ai]:n.CLAMP_TO_EDGE,[Ga]:n.MIRRORED_REPEAT},F={[dn]:n.NEAREST,[vp]:n.NEAREST_MIPMAP_NEAREST,[Eo]:n.NEAREST_MIPMAP_LINEAR,[mn]:n.LINEAR,[yl]:n.LINEAR_MIPMAP_NEAREST,[gi]:n.LINEAR_MIPMAP_LINEAR},v={[wp]:n.NEVER,[Cp]:n.ALWAYS,[Tp]:n.LESS,[ic]:n.LEQUAL,[Ep]:n.EQUAL,[sc]:n.GEQUAL,[Ap]:n.GREATER,[Rp]:n.NOTEQUAL};function D(P,b){if(b.type===Xn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===mn||b.magFilter===yl||b.magFilter===Eo||b.magFilter===gi||b.minFilter===mn||b.minFilter===yl||b.minFilter===Eo||b.minFilter===gi)&&Ze("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,se[b.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,se[b.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,se[b.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,F[b.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,F[b.minFilter]),b.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,v[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===dn||b.minFilter!==Eo&&b.minFilter!==gi||b.type===Xn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){let Z=e.get("EXT_texture_filter_anisotropic");n.texParameterf(P,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function R(P,b){let Z=!1;P.__webglInit===void 0&&(P.__webglInit=!0,b.addEventListener("dispose",L));let oe=b.source,ue=u.get(oe);ue===void 0&&(ue={},u.set(oe,ue));let ge=q(b);if(ge!==P.__cacheKey){ue[ge]===void 0&&(ue[ge]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,Z=!0),ue[ge].usedTimes++;let be=ue[P.__cacheKey];be!==void 0&&(ue[P.__cacheKey].usedTimes--,be.usedTimes===0&&S(b)),P.__cacheKey=ge,P.__webglTexture=ue[ge].texture}return Z}function k(P,b,Z){return Math.floor(Math.floor(P/Z)/b)}function W(P,b,Z,oe){let ge=P.updateRanges;if(ge.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,b.width,b.height,Z,oe,b.data);else{ge.sort((Ne,_e)=>Ne.start-_e.start);let be=0;for(let Ne=1;Ne<ge.length;Ne++){let _e=ge[be],xe=ge[Ne],je=_e.start+_e.count,it=k(xe.start,b.width,4),mt=k(_e.start,b.width,4);xe.start<=je+1&&it===mt&&k(xe.start+xe.count-1,b.width,4)===it?_e.count=Math.max(_e.count,xe.start+xe.count-_e.start):(++be,ge[be]=xe)}ge.length=be+1;let ne=t.getParameter(n.UNPACK_ROW_LENGTH),le=t.getParameter(n.UNPACK_SKIP_PIXELS),Ce=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,b.width);for(let Ne=0,_e=ge.length;Ne<_e;Ne++){let xe=ge[Ne],je=Math.floor(xe.start/4),it=Math.ceil(xe.count/4),mt=je%b.width,O=Math.floor(je/b.width),ye=it,re=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,mt),t.pixelStorei(n.UNPACK_SKIP_ROWS,O),t.texSubImage2D(n.TEXTURE_2D,0,mt,O,ye,re,Z,oe,b.data)}P.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,ne),t.pixelStorei(n.UNPACK_SKIP_PIXELS,le),t.pixelStorei(n.UNPACK_SKIP_ROWS,Ce)}}function ie(P,b,Z){let oe=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(oe=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(oe=n.TEXTURE_3D);let ue=R(P,b),ge=b.source;t.bindTexture(oe,P.__webglTexture,n.TEXTURE0+Z);let be=i.get(ge);if(ge.version!==be.__version||ue===!0){if(t.activeTexture(n.TEXTURE0+Z),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){let re=ht.getPrimaries(ht.workingColorSpace),Ie=b.colorSpace===Oi?null:ht.getPrimaries(b.colorSpace),ve=b.colorSpace===Oi||re===Ie?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve)}t.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment);let le=m(b.image,!1,s.maxTextureSize);le=Te(b,le);let Ce=r.convert(b.format,b.colorSpace),Ne=r.convert(b.type),_e=T(b.internalFormat,Ce,Ne,b.normalized,b.colorSpace,b.isVideoTexture);D(oe,b);let xe,je=b.mipmaps,it=b.isVideoTexture!==!0,mt=be.__version===void 0||ue===!0,O=ge.dataReady,ye=E(b,le);if(b.isDepthTexture)_e=I(b.format===os,b.type),mt&&(it?t.texStorage2D(n.TEXTURE_2D,1,_e,le.width,le.height):t.texImage2D(n.TEXTURE_2D,0,_e,le.width,le.height,0,Ce,Ne,null));else if(b.isDataTexture)if(je.length>0){it&&mt&&t.texStorage2D(n.TEXTURE_2D,ye,_e,je[0].width,je[0].height);for(let re=0,Ie=je.length;re<Ie;re++)xe=je[re],it?O&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,xe.width,xe.height,Ce,Ne,xe.data):t.texImage2D(n.TEXTURE_2D,re,_e,xe.width,xe.height,0,Ce,Ne,xe.data);b.generateMipmaps=!1}else it?(mt&&t.texStorage2D(n.TEXTURE_2D,ye,_e,le.width,le.height),O&&W(b,le,Ce,Ne)):t.texImage2D(n.TEXTURE_2D,0,_e,le.width,le.height,0,Ce,Ne,le.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){it&&mt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ye,_e,je[0].width,je[0].height,le.depth);for(let re=0,Ie=je.length;re<Ie;re++)if(xe=je[re],b.format!==qn)if(Ce!==null)if(it){if(O)if(b.layerUpdates.size>0){let ve=Qh(xe.width,xe.height,b.format,b.type);for(let de of b.layerUpdates){let Be=xe.data.subarray(de*ve/xe.data.BYTES_PER_ELEMENT,(de+1)*ve/xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,de,xe.width,xe.height,1,Ce,Be)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,xe.width,xe.height,le.depth,Ce,xe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,re,_e,xe.width,xe.height,le.depth,0,xe.data,0,0);else Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else it?O&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,xe.width,xe.height,le.depth,Ce,Ne,xe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,re,_e,xe.width,xe.height,le.depth,0,Ce,Ne,xe.data)}else{it&&mt&&t.texStorage2D(n.TEXTURE_2D,ye,_e,je[0].width,je[0].height);for(let re=0,Ie=je.length;re<Ie;re++)xe=je[re],b.format!==qn?Ce!==null?it?O&&t.compressedTexSubImage2D(n.TEXTURE_2D,re,0,0,xe.width,xe.height,Ce,xe.data):t.compressedTexImage2D(n.TEXTURE_2D,re,_e,xe.width,xe.height,0,xe.data):Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?O&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,xe.width,xe.height,Ce,Ne,xe.data):t.texImage2D(n.TEXTURE_2D,re,_e,xe.width,xe.height,0,Ce,Ne,xe.data)}else if(b.isDataArrayTexture)if(it){if(mt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ye,_e,le.width,le.height,le.depth),O)if(b.layerUpdates.size>0){let re=Qh(le.width,le.height,b.format,b.type);for(let Ie of b.layerUpdates){let ve=le.data.subarray(Ie*re/le.data.BYTES_PER_ELEMENT,(Ie+1)*re/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ie,le.width,le.height,1,Ce,Ne,ve)}b.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,Ce,Ne,le.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,_e,le.width,le.height,le.depth,0,Ce,Ne,le.data);else if(b.isData3DTexture)it?(mt&&t.texStorage3D(n.TEXTURE_3D,ye,_e,le.width,le.height,le.depth),O&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,Ce,Ne,le.data)):t.texImage3D(n.TEXTURE_3D,0,_e,le.width,le.height,le.depth,0,Ce,Ne,le.data);else if(b.isFramebufferTexture){if(mt)if(it)t.texStorage2D(n.TEXTURE_2D,ye,_e,le.width,le.height);else{let re=le.width,Ie=le.height;for(let ve=0;ve<ye;ve++)t.texImage2D(n.TEXTURE_2D,ve,_e,re,Ie,0,Ce,Ne,null),re>>=1,Ie>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in n){let re=n.canvas;if(re.hasAttribute("layoutsubtree")||re.setAttribute("layoutsubtree","true"),le.parentNode!==re){re.appendChild(le),f.add(b),re.onpaint=et=>{let $t=et.changedElements;for(let Tt of f)$t.includes(Tt.image)&&(Tt.needsUpdate=!0)},re.requestPaint();return}let Ie=0,ve=n.RGBA,de=n.RGBA,Be=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,Ie,ve,de,Be,le),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(je.length>0){if(it&&mt){let re=Xt(je[0]);t.texStorage2D(n.TEXTURE_2D,ye,_e,re.width,re.height)}for(let re=0,Ie=je.length;re<Ie;re++)xe=je[re],it?O&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,Ce,Ne,xe):t.texImage2D(n.TEXTURE_2D,re,_e,Ce,Ne,xe);b.generateMipmaps=!1}else if(it){if(mt){let re=Xt(le);t.texStorage2D(n.TEXTURE_2D,ye,_e,re.width,re.height)}O&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ce,Ne,le)}else t.texImage2D(n.TEXTURE_2D,0,_e,Ce,Ne,le);g(b)&&y(oe),be.__version=ge.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function me(P,b,Z){if(b.image.length!==6)return;let oe=R(P,b),ue=b.source;t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+Z);let ge=i.get(ue);if(ue.version!==ge.__version||oe===!0){t.activeTexture(n.TEXTURE0+Z);let be=ht.getPrimaries(ht.workingColorSpace),ne=b.colorSpace===Oi?null:ht.getPrimaries(b.colorSpace),le=b.colorSpace===Oi||be===ne?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);let Ce=b.isCompressedTexture||b.image[0].isCompressedTexture,Ne=b.image[0]&&b.image[0].isDataTexture,_e=[];for(let de=0;de<6;de++)!Ce&&!Ne?_e[de]=m(b.image[de],!0,s.maxCubemapSize):_e[de]=Ne?b.image[de].image:b.image[de],_e[de]=Te(b,_e[de]);let xe=_e[0],je=r.convert(b.format,b.colorSpace),it=r.convert(b.type),mt=T(b.internalFormat,je,it,b.normalized,b.colorSpace),O=b.isVideoTexture!==!0,ye=ge.__version===void 0||oe===!0,re=ue.dataReady,Ie=E(b,xe);D(n.TEXTURE_CUBE_MAP,b);let ve;if(Ce){O&&ye&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ie,mt,xe.width,xe.height);for(let de=0;de<6;de++){ve=_e[de].mipmaps;for(let Be=0;Be<ve.length;Be++){let et=ve[Be];b.format!==qn?je!==null?O?re&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Be,0,0,et.width,et.height,je,et.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Be,mt,et.width,et.height,0,et.data):Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Be,0,0,et.width,et.height,je,it,et.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Be,mt,et.width,et.height,0,je,it,et.data)}}}else{if(ve=b.mipmaps,O&&ye){ve.length>0&&Ie++;let de=Xt(_e[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ie,mt,de.width,de.height)}for(let de=0;de<6;de++)if(Ne){O?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,_e[de].width,_e[de].height,je,it,_e[de].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,mt,_e[de].width,_e[de].height,0,je,it,_e[de].data);for(let Be=0;Be<ve.length;Be++){let $t=ve[Be].image[de].image;O?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Be+1,0,0,$t.width,$t.height,je,it,$t.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Be+1,mt,$t.width,$t.height,0,je,it,$t.data)}}else{O?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,je,it,_e[de]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,mt,je,it,_e[de]);for(let Be=0;Be<ve.length;Be++){let et=ve[Be];O?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Be+1,0,0,je,it,et.image[de]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Be+1,mt,je,it,et.image[de])}}}g(b)&&y(n.TEXTURE_CUBE_MAP),ge.__version=ue.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function we(P,b,Z,oe,ue,ge){let be=r.convert(Z.format,Z.colorSpace),ne=r.convert(Z.type),le=T(Z.internalFormat,be,ne,Z.normalized,Z.colorSpace),Ce=i.get(b),Ne=i.get(Z);if(Ne.__renderTarget=b,!Ce.__hasExternalTextures){let _e=Math.max(1,b.width>>ge),xe=Math.max(1,b.height>>ge);ue===n.TEXTURE_3D||ue===n.TEXTURE_2D_ARRAY?t.texImage3D(ue,ge,le,_e,xe,b.depth,0,be,ne,null):t.texImage2D(ue,ge,le,_e,xe,0,be,ne,null)}t.bindFramebuffer(n.FRAMEBUFFER,P),lt(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,oe,ue,Ne.__webglTexture,0,nn(b)):(ue===n.TEXTURE_2D||ue>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ue<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,oe,ue,Ne.__webglTexture,ge),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Oe(P,b,Z){if(n.bindRenderbuffer(n.RENDERBUFFER,P),b.depthBuffer){let oe=b.depthTexture,ue=oe&&oe.isDepthTexture?oe.type:null,ge=I(b.stencilBuffer,ue),be=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;lt(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,nn(b),ge,b.width,b.height):Z?n.renderbufferStorageMultisample(n.RENDERBUFFER,nn(b),ge,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,ge,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,be,n.RENDERBUFFER,P)}else{let oe=b.textures;for(let ue=0;ue<oe.length;ue++){let ge=oe[ue],be=r.convert(ge.format,ge.colorSpace),ne=r.convert(ge.type),le=T(ge.internalFormat,be,ne,ge.normalized,ge.colorSpace);lt(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,nn(b),le,b.width,b.height):Z?n.renderbufferStorageMultisample(n.RENDERBUFFER,nn(b),le,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,le,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Pe(P,b,Z){let oe=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,P),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let ue=i.get(b.depthTexture);if(ue.__renderTarget=b,(!ue.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),oe){if(ue.__webglInit===void 0&&(ue.__webglInit=!0,b.depthTexture.addEventListener("dispose",L)),ue.__webglTexture===void 0){ue.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,ue.__webglTexture),D(n.TEXTURE_CUBE_MAP,b.depthTexture);let Ce=r.convert(b.depthTexture.format),Ne=r.convert(b.depthTexture.type),_e;b.depthTexture.format===li?_e=n.DEPTH_COMPONENT24:b.depthTexture.format===os&&(_e=n.DEPTH24_STENCIL8);for(let xe=0;xe<6;xe++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,_e,b.width,b.height,0,Ce,Ne,null)}}else ae(b.depthTexture,0);let ge=ue.__webglTexture,be=nn(b),ne=oe?n.TEXTURE_CUBE_MAP_POSITIVE_X+Z:n.TEXTURE_2D,le=b.depthTexture.format===os?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(b.depthTexture.format===li)lt(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,le,ne,ge,0,be):n.framebufferTexture2D(n.FRAMEBUFFER,le,ne,ge,0);else if(b.depthTexture.format===os)lt(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,le,ne,ge,0,be):n.framebufferTexture2D(n.FRAMEBUFFER,le,ne,ge,0);else throw new Error("Unknown depthTexture format")}function ke(P){let b=i.get(P),Z=P.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==P.depthTexture){let oe=P.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),oe){let ue=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,oe.removeEventListener("dispose",ue)};oe.addEventListener("dispose",ue),b.__depthDisposeCallback=ue}b.__boundDepthTexture=oe}if(P.depthTexture&&!b.__autoAllocateDepthBuffer)if(Z)for(let oe=0;oe<6;oe++)Pe(b.__webglFramebuffer[oe],P,oe);else{let oe=P.texture.mipmaps;oe&&oe.length>0?Pe(b.__webglFramebuffer[0],P,0):Pe(b.__webglFramebuffer,P,0)}else if(Z){b.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)if(t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[oe]),b.__webglDepthbuffer[oe]===void 0)b.__webglDepthbuffer[oe]=n.createRenderbuffer(),Oe(b.__webglDepthbuffer[oe],P,!1);else{let ue=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ge=b.__webglDepthbuffer[oe];n.bindRenderbuffer(n.RENDERBUFFER,ge),n.framebufferRenderbuffer(n.FRAMEBUFFER,ue,n.RENDERBUFFER,ge)}}else{let oe=P.texture.mipmaps;if(oe&&oe.length>0?t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=n.createRenderbuffer(),Oe(b.__webglDepthbuffer,P,!1);else{let ue=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ge=b.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ge),n.framebufferRenderbuffer(n.FRAMEBUFFER,ue,n.RENDERBUFFER,ge)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function We(P,b,Z){let oe=i.get(P);b!==void 0&&we(oe.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Z!==void 0&&ke(P)}function Le(P){let b=P.texture,Z=i.get(P),oe=i.get(b);P.addEventListener("dispose",_);let ue=P.textures,ge=P.isWebGLCubeRenderTarget===!0,be=ue.length>1;if(be||(oe.__webglTexture===void 0&&(oe.__webglTexture=n.createTexture()),oe.__version=b.version,o.memory.textures++),ge){Z.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(b.mipmaps&&b.mipmaps.length>0){Z.__webglFramebuffer[ne]=[];for(let le=0;le<b.mipmaps.length;le++)Z.__webglFramebuffer[ne][le]=n.createFramebuffer()}else Z.__webglFramebuffer[ne]=n.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){Z.__webglFramebuffer=[];for(let ne=0;ne<b.mipmaps.length;ne++)Z.__webglFramebuffer[ne]=n.createFramebuffer()}else Z.__webglFramebuffer=n.createFramebuffer();if(be)for(let ne=0,le=ue.length;ne<le;ne++){let Ce=i.get(ue[ne]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=n.createTexture(),o.memory.textures++)}if(P.samples>0&&lt(P)===!1){Z.__webglMultisampledFramebuffer=n.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let ne=0;ne<ue.length;ne++){let le=ue[ne];Z.__webglColorRenderbuffer[ne]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Z.__webglColorRenderbuffer[ne]);let Ce=r.convert(le.format,le.colorSpace),Ne=r.convert(le.type),_e=T(le.internalFormat,Ce,Ne,le.normalized,le.colorSpace,P.isXRRenderTarget===!0),xe=nn(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,xe,_e,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ne,n.RENDERBUFFER,Z.__webglColorRenderbuffer[ne])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(Z.__webglDepthRenderbuffer=n.createRenderbuffer(),Oe(Z.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ge){t.bindTexture(n.TEXTURE_CUBE_MAP,oe.__webglTexture),D(n.TEXTURE_CUBE_MAP,b);for(let ne=0;ne<6;ne++)if(b.mipmaps&&b.mipmaps.length>0)for(let le=0;le<b.mipmaps.length;le++)we(Z.__webglFramebuffer[ne][le],P,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,le);else we(Z.__webglFramebuffer[ne],P,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);g(b)&&y(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(be){for(let ne=0,le=ue.length;ne<le;ne++){let Ce=ue[ne],Ne=i.get(Ce),_e=n.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(_e=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(_e,Ne.__webglTexture),D(_e,Ce),we(Z.__webglFramebuffer,P,Ce,n.COLOR_ATTACHMENT0+ne,_e,0),g(Ce)&&y(_e)}t.unbindTexture()}else{let ne=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ne=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ne,oe.__webglTexture),D(ne,b),b.mipmaps&&b.mipmaps.length>0)for(let le=0;le<b.mipmaps.length;le++)we(Z.__webglFramebuffer[le],P,b,n.COLOR_ATTACHMENT0,ne,le);else we(Z.__webglFramebuffer,P,b,n.COLOR_ATTACHMENT0,ne,0);g(b)&&y(ne),t.unbindTexture()}P.depthBuffer&&ke(P)}function yt(P){let b=P.textures;for(let Z=0,oe=b.length;Z<oe;Z++){let ue=b[Z];if(g(ue)){let ge=w(P),be=i.get(ue).__webglTexture;t.bindTexture(ge,be),y(ge),t.unbindTexture()}}}let _t=[],un=[];function G(P){if(P.samples>0){if(lt(P)===!1){let b=P.textures,Z=P.width,oe=P.height,ue=n.COLOR_BUFFER_BIT,ge=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,be=i.get(P),ne=b.length>1;if(ne)for(let Ce=0;Ce<b.length;Ce++)t.bindFramebuffer(n.FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer);let le=P.texture.mipmaps;le&&le.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let Ce=0;Ce<b.length;Ce++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ue|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ue|=n.STENCIL_BUFFER_BIT)),ne){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,be.__webglColorRenderbuffer[Ce]);let Ne=i.get(b[Ce]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ne,0)}n.blitFramebuffer(0,0,Z,oe,0,0,Z,oe,ue,n.NEAREST),l===!0&&(_t.length=0,un.length=0,_t.push(n.COLOR_ATTACHMENT0+Ce),P.depthBuffer&&P.resolveDepthBuffer===!1&&(_t.push(ge),un.push(ge),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,un)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,_t))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ne)for(let Ce=0;Ce<b.length;Ce++){t.bindFramebuffer(n.FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.RENDERBUFFER,be.__webglColorRenderbuffer[Ce]);let Ne=i.get(b[Ce]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.TEXTURE_2D,Ne,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){let b=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}}function nn(P){return Math.min(s.maxSamples,P.samples)}function lt(P){let b=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Dt(P){let b=o.render.frame;h.get(P)!==b&&(h.set(P,b),P.update())}function Te(P,b){let Z=P.colorSpace,oe=P.format,ue=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||Z!==eo&&Z!==Oi&&(ht.getTransfer(Z)===wt?(oe!==qn||ue!==Cn)&&Ze("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ye("WebGLTextures: Unsupported texture color space:",Z)),b}function Xt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=V,this.getTextureUnits=Y,this.setTextureUnits=U,this.setTexture2D=ae,this.setTexture2DArray=J,this.setTexture3D=ee,this.setTextureCube=te,this.rebindTextures=We,this.setupRenderTarget=Le,this.updateRenderTargetMipmap=yt,this.updateMultisampleRenderTarget=G,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=we,this.useMultisampledRTT=lt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function AM(n,e){function t(i,s=Oi){let r,o=ht.getTransfer(s);if(i===Cn)return n.UNSIGNED_BYTE;if(i===vl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ml)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Xh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===qh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Gh)return n.BYTE;if(i===Wh)return n.SHORT;if(i===xr)return n.UNSIGNED_SHORT;if(i===_l)return n.INT;if(i===ei)return n.UNSIGNED_INT;if(i===Xn)return n.FLOAT;if(i===xi)return n.HALF_FLOAT;if(i===Yh)return n.ALPHA;if(i===Zh)return n.RGB;if(i===qn)return n.RGBA;if(i===li)return n.DEPTH_COMPONENT;if(i===os)return n.DEPTH_STENCIL;if(i===bl)return n.RED;if(i===wl)return n.RED_INTEGER;if(i===as)return n.RG;if(i===Tl)return n.RG_INTEGER;if(i===El)return n.RGBA_INTEGER;if(i===Ao||i===Ro||i===Co||i===So)if(o===wt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ao)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ro)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Co)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===So)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ao)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ro)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Co)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===So)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Al||i===Rl||i===Cl||i===Sl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Al)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Rl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Cl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Sl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Il||i===Pl||i===Ll||i===Dl||i===Nl||i===Io||i===Ul)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Il||i===Pl)return o===wt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ll)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Dl)return r.COMPRESSED_R11_EAC;if(i===Nl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Io)return r.COMPRESSED_RG11_EAC;if(i===Ul)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===kl||i===Fl||i===Ol||i===Bl||i===zl||i===Hl||i===Vl||i===Gl||i===Wl||i===Xl||i===ql||i===Yl||i===Zl||i===Kl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===kl)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Fl)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ol)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Bl)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===zl)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Hl)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Vl)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Gl)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Wl)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Xl)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ql)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Yl)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Zl)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Kl)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===$l||i===Jl||i===jl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===$l)return o===wt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Jl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===jl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ql||i===ec||i===Po||i===tc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ql)return r.COMPRESSED_RED_RGTC1_EXT;if(i===ec)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Po)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===tc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===yr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var RM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,CM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,pf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new po(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Un({vertexShader:RM,fragmentShader:CM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new pe(new Gn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},mf=class extends ci{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,d=null,u=null,p=null,x=typeof XRWebGLBinding<"u",m=new pf,g={},y=t.getContextAttributes(),w=null,T=null,I=[],E=[],L=new $e,_=null,M=new Mn;M.viewport=new Vt;let S=new Mn;S.viewport=new Vt;let C=[M,S],N=new pl,V=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(R){let k=I[R];return k===void 0&&(k=new dr,I[R]=k),k.getTargetRaySpace()},this.getControllerGrip=function(R){let k=I[R];return k===void 0&&(k=new dr,I[R]=k),k.getGripSpace()},this.getHand=function(R){let k=I[R];return k===void 0&&(k=new dr,I[R]=k),k.getHandSpace()};function U(R){let k=E.indexOf(R.inputSource);if(k===-1)return;let W=I[k];W!==void 0&&(W.update(R.inputSource,R.frame,c||o),W.dispatchEvent({type:R.type,data:R.inputSource}))}function B(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",q);for(let R=0;R<I.length;R++){let k=E[R];k!==null&&(E[R]=null,I[R].disconnect(k))}V=null,Y=null,m.reset();for(let R in g)delete g[R];e.setRenderTarget(w),u=null,d=null,f=null,s=null,T=null,D.stop(),i.isPresenting=!1,e.setPixelRatio(_),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(R){r=R,i.isPresenting===!0&&Ze("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(R){a=R,i.isPresenting===!0&&Ze("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(R){c=R},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(R){if(s=R,s!==null){if(w=e.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",B),s.addEventListener("inputsourceschange",q),y.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(L),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let W=null,ie=null,me=null;y.depth&&(me=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,W=y.stencil?os:li,ie=y.stencil?yr:ei);let we={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:r};f=this.getBinding(),d=f.createProjectionLayer(we),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),T=new Nn(d.textureWidth,d.textureHeight,{format:qn,type:Cn,depthTexture:new ki(d.textureWidth,d.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,W),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let W={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,t,W),s.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),T=new Nn(u.framebufferWidth,u.framebufferHeight,{format:qn,type:Cn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),D.setContext(s),D.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function q(R){for(let k=0;k<R.removed.length;k++){let W=R.removed[k],ie=E.indexOf(W);ie>=0&&(E[ie]=null,I[ie].disconnect(W))}for(let k=0;k<R.added.length;k++){let W=R.added[k],ie=E.indexOf(W);if(ie===-1){for(let we=0;we<I.length;we++)if(we>=E.length){E.push(W),ie=we;break}else if(E[we]===null){E[we]=W,ie=we;break}if(ie===-1)break}let me=I[ie];me&&me.connect(W)}}let ae=new z,J=new z;function ee(R,k,W){ae.setFromMatrixPosition(k.matrixWorld),J.setFromMatrixPosition(W.matrixWorld);let ie=ae.distanceTo(J),me=k.projectionMatrix.elements,we=W.projectionMatrix.elements,Oe=me[14]/(me[10]-1),Pe=me[14]/(me[10]+1),ke=(me[9]+1)/me[5],We=(me[9]-1)/me[5],Le=(me[8]-1)/me[0],yt=(we[8]+1)/we[0],_t=Oe*Le,un=Oe*yt,G=ie/(-Le+yt),nn=G*-Le;if(k.matrixWorld.decompose(R.position,R.quaternion,R.scale),R.translateX(nn),R.translateZ(G),R.matrixWorld.compose(R.position,R.quaternion,R.scale),R.matrixWorldInverse.copy(R.matrixWorld).invert(),me[10]===-1)R.projectionMatrix.copy(k.projectionMatrix),R.projectionMatrixInverse.copy(k.projectionMatrixInverse);else{let lt=Oe+G,Dt=Pe+G,Te=_t-nn,Xt=un+(ie-nn),P=ke*Pe/Dt*lt,b=We*Pe/Dt*lt;R.projectionMatrix.makePerspective(Te,Xt,P,b,lt,Dt),R.projectionMatrixInverse.copy(R.projectionMatrix).invert()}}function te(R,k){k===null?R.matrixWorld.copy(R.matrix):R.matrixWorld.multiplyMatrices(k.matrixWorld,R.matrix),R.matrixWorldInverse.copy(R.matrixWorld).invert()}this.updateCamera=function(R){if(s===null)return;let k=R.near,W=R.far;m.texture!==null&&(m.depthNear>0&&(k=m.depthNear),m.depthFar>0&&(W=m.depthFar)),N.near=S.near=M.near=k,N.far=S.far=M.far=W,(V!==N.near||Y!==N.far)&&(s.updateRenderState({depthNear:N.near,depthFar:N.far}),V=N.near,Y=N.far),N.layers.mask=R.layers.mask|6,M.layers.mask=N.layers.mask&-5,S.layers.mask=N.layers.mask&-3;let ie=R.parent,me=N.cameras;te(N,ie);for(let we=0;we<me.length;we++)te(me[we],ie);me.length===2?ee(N,M,S):N.projectionMatrix.copy(M.projectionMatrix),se(R,N,ie)};function se(R,k,W){W===null?R.matrix.copy(k.matrixWorld):(R.matrix.copy(W.matrixWorld),R.matrix.invert(),R.matrix.multiply(k.matrixWorld)),R.matrix.decompose(R.position,R.quaternion,R.scale),R.updateMatrixWorld(!0),R.projectionMatrix.copy(k.projectionMatrix),R.projectionMatrixInverse.copy(k.projectionMatrixInverse),R.isPerspectiveCamera&&(R.fov=Ya*2*Math.atan(1/R.projectionMatrix.elements[5]),R.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(d===null&&u===null))return l},this.setFoveation=function(R){l=R,d!==null&&(d.fixedFoveation=R),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=R)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function(R){return g[R]};let F=null;function v(R,k){if(h=k.getViewerPose(c||o),p=k,h!==null){let W=h.views;u!==null&&(e.setRenderTargetFramebuffer(T,u.framebuffer),e.setRenderTarget(T));let ie=!1;W.length!==N.cameras.length&&(N.cameras.length=0,ie=!0);for(let Pe=0;Pe<W.length;Pe++){let ke=W[Pe],We=null;if(u!==null)We=u.getViewport(ke);else{let yt=f.getViewSubImage(d,ke);We=yt.viewport,Pe===0&&(e.setRenderTargetTextures(T,yt.colorTexture,yt.depthStencilTexture),e.setRenderTarget(T))}let Le=C[Pe];Le===void 0&&(Le=new Mn,Le.layers.enable(Pe),Le.viewport=new Vt,C[Pe]=Le),Le.matrix.fromArray(ke.transform.matrix),Le.matrix.decompose(Le.position,Le.quaternion,Le.scale),Le.projectionMatrix.fromArray(ke.projectionMatrix),Le.projectionMatrixInverse.copy(Le.projectionMatrix).invert(),Le.viewport.set(We.x,We.y,We.width,We.height),Pe===0&&(N.matrix.copy(Le.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),ie===!0&&N.cameras.push(Le)}let me=s.enabledFeatures;if(me&&me.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){f=i.getBinding();let Pe=f.getDepthInformation(W[0]);Pe&&Pe.isValid&&Pe.texture&&m.init(Pe,s.renderState)}if(me&&me.includes("camera-access")&&x){e.state.unbindTexture(),f=i.getBinding();for(let Pe=0;Pe<W.length;Pe++){let ke=W[Pe].camera;if(ke){let We=g[ke];We||(We=new po,g[ke]=We);let Le=f.getCameraImage(ke);We.sourceTexture=Le}}}}for(let W=0;W<I.length;W++){let ie=E[W],me=I[W];ie!==null&&me!==void 0&&me.update(ie,k,c||o)}F&&F(R,k),k.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:k}),p=null}let D=new rm;D.setAnimationLoop(v),this.setAnimationLoop=function(R){F=R},this.dispose=function(){}}},SM=new dt,fm=new Qe;fm.set(-1,0,0,0,1,0,0,0,1);function IM(n,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function i(m,g){g.color.getRGB(m.fogColor.value,$h(n)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,y,w,T){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),f(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),d(m,g),g.isMeshPhysicalMaterial&&u(m,g,T)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),x(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,y,w):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===gn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===gn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let y=e.get(g),w=y.envMap,T=y.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(SM.makeRotationFromEuler(T)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(fm),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,y,w){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*y,m.scale.value=w*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function f(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function d(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function u(m,g,y){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===gn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){let y=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function PM(n,e,t,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,w){let T=w.program;i.uniformBlockBinding(y,T)}function c(y,w){let T=s[y.id];T===void 0&&(p(y),T=h(y),s[y.id]=T,y.addEventListener("dispose",m));let I=w.program;i.updateUBOMapping(y,I);let E=e.render.frame;r[y.id]!==E&&(d(y),r[y.id]=E)}function h(y){let w=f();y.__bindingPointIndex=w;let T=n.createBuffer(),I=y.__size,E=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,I,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,T),T}function f(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return Ye("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let w=s[y.id],T=y.uniforms,I=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let E=0,L=T.length;E<L;E++){let _=Array.isArray(T[E])?T[E]:[T[E]];for(let M=0,S=_.length;M<S;M++){let C=_[M];if(u(C,E,M,I)===!0){let N=C.__offset,V=Array.isArray(C.value)?C.value:[C.value],Y=0;for(let U=0;U<V.length;U++){let B=V[U],q=x(B);typeof B=="number"||typeof B=="boolean"?(C.__data[0]=B,n.bufferSubData(n.UNIFORM_BUFFER,N+Y,C.__data)):B.isMatrix3?(C.__data[0]=B.elements[0],C.__data[1]=B.elements[1],C.__data[2]=B.elements[2],C.__data[3]=0,C.__data[4]=B.elements[3],C.__data[5]=B.elements[4],C.__data[6]=B.elements[5],C.__data[7]=0,C.__data[8]=B.elements[6],C.__data[9]=B.elements[7],C.__data[10]=B.elements[8],C.__data[11]=0):ArrayBuffer.isView(B)?C.__data.set(new B.constructor(B.buffer,B.byteOffset,C.__data.length)):(B.toArray(C.__data,Y),Y+=q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,N,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function u(y,w,T,I){let E=y.value,L=w+"_"+T;if(I[L]===void 0)return typeof E=="number"||typeof E=="boolean"?I[L]=E:ArrayBuffer.isView(E)?I[L]=E.slice():I[L]=E.clone(),!0;{let _=I[L];if(typeof E=="number"||typeof E=="boolean"){if(_!==E)return I[L]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(_.equals(E)===!1)return _.copy(E),!0}}return!1}function p(y){let w=y.uniforms,T=0,I=16;for(let L=0,_=w.length;L<_;L++){let M=Array.isArray(w[L])?w[L]:[w[L]];for(let S=0,C=M.length;S<C;S++){let N=M[S],V=Array.isArray(N.value)?N.value:[N.value];for(let Y=0,U=V.length;Y<U;Y++){let B=V[Y],q=x(B),ae=T%I,J=ae%q.boundary,ee=ae+J;T+=J,ee!==0&&I-ee<q.storage&&(T+=I-ee),N.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=T,T+=q.storage}}}let E=T%I;return E>0&&(T+=I-E),y.__size=T,y.__cache={},this}function x(y){let w={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(w.boundary=4,w.storage=4):y.isVector2?(w.boundary=8,w.storage=8):y.isVector3||y.isColor?(w.boundary=16,w.storage=12):y.isVector4?(w.boundary=16,w.storage=16):y.isMatrix3?(w.boundary=48,w.storage=48):y.isMatrix4?(w.boundary=64,w.storage=64):y.isTexture?Ze("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(w.boundary=16,w.storage=y.byteLength):Ze("WebGLRenderer: Unsupported uniform value type.",y),w}function m(y){let w=y.target;w.removeEventListener("dispose",m);let T=o.indexOf(w.__bindingPointIndex);o.splice(T,1),n.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function g(){for(let y in s)n.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:c,dispose:g}}var LM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),yi=null;function DM(){return yi===null&&(yi=new ho(LM,16,16,as,xi),yi.name="DFG_LUT",yi.minFilter=mn,yi.magFilter=mn,yi.wrapS=ai,yi.wrapT=ai,yi.generateMipmaps=!1,yi.needsUpdate=!0),yi}var cc=class{constructor(e={}){let{canvas:t=Sp(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:u=Cn}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let x=u,m=new Set([El,Tl,wl]),g=new Set([Cn,ei,xr,yr,vl,Ml]),y=new Uint32Array(4),w=new Int32Array(4),T=new z,I=null,E=null,L=[],_=[],M=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Qn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let S=this,C=!1,N=null;this._outputColorSpace=fn;let V=0,Y=0,U=null,B=-1,q=null,ae=new Vt,J=new Vt,ee=null,te=new Je(0),se=0,F=t.width,v=t.height,D=1,R=null,k=null,W=new Vt(0,0,F,v),ie=new Vt(0,0,F,v),me=!1,we=new pr,Oe=!1,Pe=!1,ke=new dt,We=new z,Le=new Vt,yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},_t=!1;function un(){return U===null?D:1}let G=i;function nn(A,X){return t.getContext(A,X)}try{let A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"184"}`),t.addEventListener("webglcontextlost",de,!1),t.addEventListener("webglcontextrestored",Be,!1),t.addEventListener("webglcontextcreationerror",et,!1),G===null){let X="webgl2";if(G=nn(X,A),G===null)throw nn(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw Ye("WebGLRenderer: "+A.message),A}let lt,Dt,Te,Xt,P,b,Z,oe,ue,ge,be,ne,le,Ce,Ne,_e,xe,je,it,mt,O,ye,re;function Ie(){lt=new z_(G),lt.init(),O=new AM(G,lt),Dt=new L_(G,lt,e,O),Te=new TM(G,lt),Dt.reversedDepthBuffer&&d&&Te.buffers.depth.setReversed(!0),Xt=new G_(G),P=new hM,b=new EM(G,lt,Te,P,Dt,O,Xt),Z=new B_(S),oe=new Yg(G),ye=new I_(G,oe),ue=new H_(G,oe,Xt,ye),ge=new X_(G,ue,oe,ye,Xt),je=new W_(G,Dt,b),Ne=new D_(P),be=new cM(S,Z,lt,Dt,ye,Ne),ne=new IM(S,P),le=new dM,Ce=new yM(lt),xe=new S_(S,Z,Te,ge,p,l),_e=new wM(S,ge,Dt),re=new PM(G,Xt,Dt,Te),it=new P_(G,lt,Xt),mt=new V_(G,lt,Xt),Xt.programs=be.programs,S.capabilities=Dt,S.extensions=lt,S.properties=P,S.renderLists=le,S.shadowMap=_e,S.state=Te,S.info=Xt}Ie(),x!==Cn&&(M=new Y_(x,t.width,t.height,s,r));let ve=new mf(S,G);this.xr=ve,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){let A=lt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=lt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return D},this.setPixelRatio=function(A){A!==void 0&&(D=A,this.setSize(F,v,!1))},this.getSize=function(A){return A.set(F,v)},this.setSize=function(A,X,j=!0){if(ve.isPresenting){Ze("WebGLRenderer: Can't change size while VR device is presenting.");return}F=A,v=X,t.width=Math.floor(A*D),t.height=Math.floor(X*D),j===!0&&(t.style.width=A+"px",t.style.height=X+"px"),M!==null&&M.setSize(t.width,t.height),this.setViewport(0,0,A,X)},this.getDrawingBufferSize=function(A){return A.set(F*D,v*D).floor()},this.setDrawingBufferSize=function(A,X,j){F=A,v=X,D=j,t.width=Math.floor(A*j),t.height=Math.floor(X*j),this.setViewport(0,0,A,X)},this.setEffects=function(A){if(x===Cn){Ye("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let X=0;X<A.length;X++)if(A[X].isOutputPass===!0){Ze("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}M.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(ae)},this.getViewport=function(A){return A.copy(W)},this.setViewport=function(A,X,j,K){A.isVector4?W.set(A.x,A.y,A.z,A.w):W.set(A,X,j,K),Te.viewport(ae.copy(W).multiplyScalar(D).round())},this.getScissor=function(A){return A.copy(ie)},this.setScissor=function(A,X,j,K){A.isVector4?ie.set(A.x,A.y,A.z,A.w):ie.set(A,X,j,K),Te.scissor(J.copy(ie).multiplyScalar(D).round())},this.getScissorTest=function(){return me},this.setScissorTest=function(A){Te.setScissorTest(me=A)},this.setOpaqueSort=function(A){R=A},this.setTransparentSort=function(A){k=A},this.getClearColor=function(A){return A.copy(xe.getClearColor())},this.setClearColor=function(){xe.setClearColor(...arguments)},this.getClearAlpha=function(){return xe.getClearAlpha()},this.setClearAlpha=function(){xe.setClearAlpha(...arguments)},this.clear=function(A=!0,X=!0,j=!0){let K=0;if(A){let $=!1;if(U!==null){let Re=U.texture.format;$=m.has(Re)}if($){let Re=U.texture.type,Ue=g.has(Re),Ae=xe.getClearColor(),Fe=xe.getClearAlpha(),He=Ae.r,tt=Ae.g,ot=Ae.b;Ue?(y[0]=He,y[1]=tt,y[2]=ot,y[3]=Fe,G.clearBufferuiv(G.COLOR,0,y)):(w[0]=He,w[1]=tt,w[2]=ot,w[3]=Fe,G.clearBufferiv(G.COLOR,0,w))}else K|=G.COLOR_BUFFER_BIT}X&&(K|=G.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),j&&(K|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),K!==0&&G.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),N=A},this.dispose=function(){t.removeEventListener("webglcontextlost",de,!1),t.removeEventListener("webglcontextrestored",Be,!1),t.removeEventListener("webglcontextcreationerror",et,!1),xe.dispose(),le.dispose(),Ce.dispose(),P.dispose(),Z.dispose(),ge.dispose(),ye.dispose(),re.dispose(),be.dispose(),ve.dispose(),ve.removeEventListener("sessionstart",bf),ve.removeEventListener("sessionend",wf),fs.stop()};function de(A){A.preventDefault(),io("WebGLRenderer: Context Lost."),C=!0}function Be(){io("WebGLRenderer: Context Restored."),C=!1;let A=Xt.autoReset,X=_e.enabled,j=_e.autoUpdate,K=_e.needsUpdate,$=_e.type;Ie(),Xt.autoReset=A,_e.enabled=X,_e.autoUpdate=j,_e.needsUpdate=K,_e.type=$}function et(A){Ye("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function $t(A){let X=A.target;X.removeEventListener("dispose",$t),Tt(X)}function Tt(A){vi(A),P.remove(A)}function vi(A){let X=P.get(A).programs;X!==void 0&&(X.forEach(function(j){be.releaseProgram(j)}),A.isShaderMaterial&&be.releaseShaderCache(A))}this.renderBufferDirect=function(A,X,j,K,$,Re){X===null&&(X=yt);let Ue=$.isMesh&&$.matrixWorld.determinant()<0,Ae=Pm(A,X,j,K,$);Te.setMaterial(K,Ue);let Fe=j.index,He=1;if(K.wireframe===!0){if(Fe=ue.getWireframeAttribute(j),Fe===void 0)return;He=2}let tt=j.drawRange,ot=j.attributes.position,Xe=tt.start*He,Et=(tt.start+tt.count)*He;Re!==null&&(Xe=Math.max(Xe,Re.start*He),Et=Math.min(Et,(Re.start+Re.count)*He)),Fe!==null?(Xe=Math.max(Xe,0),Et=Math.min(Et,Fe.count)):ot!=null&&(Xe=Math.max(Xe,0),Et=Math.min(Et,ot.count));let Jt=Et-Xe;if(Jt<0||Jt===1/0)return;ye.setup($,K,Ae,j,Fe);let qt,Rt=it;if(Fe!==null&&(qt=oe.get(Fe),Rt=mt,Rt.setIndex(qt)),$.isMesh)K.wireframe===!0?(Te.setLineWidth(K.wireframeLinewidth*un()),Rt.setMode(G.LINES)):Rt.setMode(G.TRIANGLES);else if($.isLine){let xn=K.linewidth;xn===void 0&&(xn=1),Te.setLineWidth(xn*un()),$.isLineSegments?Rt.setMode(G.LINES):$.isLineLoop?Rt.setMode(G.LINE_LOOP):Rt.setMode(G.LINE_STRIP)}else $.isPoints?Rt.setMode(G.POINTS):$.isSprite&&Rt.setMode(G.TRIANGLES);if($.isBatchedMesh)if(lt.get("WEBGL_multi_draw"))Rt.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{let xn=$._multiDrawStarts,De=$._multiDrawCounts,Sn=$._multiDrawCount,pt=Fe?oe.get(Fe).bytesPerElement:1,On=P.get(K).currentProgram.getUniforms();for(let ni=0;ni<Sn;ni++)On.setValue(G,"_gl_DrawID",ni),Rt.render(xn[ni]/pt,De[ni])}else if($.isInstancedMesh)Rt.renderInstances(Xe,Jt,$.count);else if(j.isInstancedBufferGeometry){let xn=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,De=Math.min(j.instanceCount,xn);Rt.renderInstances(Xe,Jt,De)}else Rt.render(Xe,Jt)};function ti(A,X,j){A.transparent===!0&&A.side===Rn&&A.forceSinglePass===!1?(A.side=gn,A.needsUpdate=!0,ko(A,X,j),A.side=Li,A.needsUpdate=!0,ko(A,X,j),A.side=Rn):ko(A,X,j)}this.compile=function(A,X,j=null){j===null&&(j=A),E=Ce.get(j),E.init(X),_.push(E),j.traverseVisible(function($){$.isLight&&$.layers.test(X.layers)&&(E.pushLight($),$.castShadow&&E.pushShadow($))}),A!==j&&A.traverseVisible(function($){$.isLight&&$.layers.test(X.layers)&&(E.pushLight($),$.castShadow&&E.pushShadow($))}),E.setupLights();let K=new Set;return A.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;let Re=$.material;if(Re)if(Array.isArray(Re))for(let Ue=0;Ue<Re.length;Ue++){let Ae=Re[Ue];ti(Ae,j,$),K.add(Ae)}else ti(Re,j,$),K.add(Re)}),E=_.pop(),K},this.compileAsync=function(A,X,j=null){let K=this.compile(A,X,j);return new Promise($=>{function Re(){if(K.forEach(function(Ue){P.get(Ue).currentProgram.isReady()&&K.delete(Ue)}),K.size===0){$(A);return}setTimeout(Re,10)}lt.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let gc=null;function Sm(A){gc&&gc(A)}function bf(){fs.stop()}function wf(){fs.start()}let fs=new rm;fs.setAnimationLoop(Sm),typeof self<"u"&&fs.setContext(self),this.setAnimationLoop=function(A){gc=A,ve.setAnimationLoop(A),A===null?fs.stop():fs.start()},ve.addEventListener("sessionstart",bf),ve.addEventListener("sessionend",wf),this.render=function(A,X){if(X!==void 0&&X.isCamera!==!0){Ye("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;N!==null&&N.renderStart(A,X);let j=ve.enabled===!0&&ve.isPresenting===!0,K=M!==null&&(U===null||j)&&M.begin(S,U);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),ve.enabled===!0&&ve.isPresenting===!0&&(M===null||M.isCompositing()===!1)&&(ve.cameraAutoUpdate===!0&&ve.updateCamera(X),X=ve.getCamera()),A.isScene===!0&&A.onBeforeRender(S,A,X,U),E=Ce.get(A,_.length),E.init(X),E.state.textureUnits=b.getTextureUnits(),_.push(E),ke.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),we.setFromProjectionMatrix(ke,jn,X.reversedDepth),Pe=this.localClippingEnabled,Oe=Ne.init(this.clippingPlanes,Pe),I=le.get(A,L.length),I.init(),L.push(I),ve.enabled===!0&&ve.isPresenting===!0){let Ue=S.xr.getDepthSensingMesh();Ue!==null&&xc(Ue,X,-1/0,S.sortObjects)}xc(A,X,0,S.sortObjects),I.finish(),S.sortObjects===!0&&I.sort(R,k),_t=ve.enabled===!1||ve.isPresenting===!1||ve.hasDepthSensing()===!1,_t&&xe.addToRenderList(I,A),this.info.render.frame++,Oe===!0&&Ne.beginShadows();let $=E.state.shadowsArray;if(_e.render($,A,X),Oe===!0&&Ne.endShadows(),this.info.autoReset===!0&&this.info.reset(),(K&&M.hasRenderPass())===!1){let Ue=I.opaque,Ae=I.transmissive;if(E.setupLights(),X.isArrayCamera){let Fe=X.cameras;if(Ae.length>0)for(let He=0,tt=Fe.length;He<tt;He++){let ot=Fe[He];Ef(Ue,Ae,A,ot)}_t&&xe.render(A);for(let He=0,tt=Fe.length;He<tt;He++){let ot=Fe[He];Tf(I,A,ot,ot.viewport)}}else Ae.length>0&&Ef(Ue,Ae,A,X),_t&&xe.render(A),Tf(I,A,X)}U!==null&&Y===0&&(b.updateMultisampleRenderTarget(U),b.updateRenderTargetMipmap(U)),K&&M.end(S),A.isScene===!0&&A.onAfterRender(S,A,X),ye.resetDefaultState(),B=-1,q=null,_.pop(),_.length>0?(E=_[_.length-1],b.setTextureUnits(E.state.textureUnits),Oe===!0&&Ne.setGlobalState(S.clippingPlanes,E.state.camera)):E=null,L.pop(),L.length>0?I=L[L.length-1]:I=null,N!==null&&N.renderEnd()};function xc(A,X,j,K){if(A.visible===!1)return;if(A.layers.test(X.layers)){if(A.isGroup)j=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(X);else if(A.isLightProbeGrid)E.pushLightProbeGrid(A);else if(A.isLight)E.pushLight(A),A.castShadow&&E.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||we.intersectsSprite(A)){K&&Le.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ke);let Ue=ge.update(A),Ae=A.material;Ae.visible&&I.push(A,Ue,Ae,j,Le.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||we.intersectsObject(A))){let Ue=ge.update(A),Ae=A.material;if(K&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Le.copy(A.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),Le.copy(Ue.boundingSphere.center)),Le.applyMatrix4(A.matrixWorld).applyMatrix4(ke)),Array.isArray(Ae)){let Fe=Ue.groups;for(let He=0,tt=Fe.length;He<tt;He++){let ot=Fe[He],Xe=Ae[ot.materialIndex];Xe&&Xe.visible&&I.push(A,Ue,Xe,j,Le.z,ot)}}else Ae.visible&&I.push(A,Ue,Ae,j,Le.z,null)}}let Re=A.children;for(let Ue=0,Ae=Re.length;Ue<Ae;Ue++)xc(Re[Ue],X,j,K)}function Tf(A,X,j,K){let{opaque:$,transmissive:Re,transparent:Ue}=A;E.setupLightsView(j),Oe===!0&&Ne.setGlobalState(S.clippingPlanes,j),K&&Te.viewport(ae.copy(K)),$.length>0&&Uo($,X,j),Re.length>0&&Uo(Re,X,j),Ue.length>0&&Uo(Ue,X,j),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function Ef(A,X,j,K){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[K.id]===void 0){let Xe=lt.has("EXT_color_buffer_half_float")||lt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[K.id]=new Nn(1,1,{generateMipmaps:!0,type:Xe?xi:Cn,minFilter:gi,samples:Math.max(4,Dt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ht.workingColorSpace})}let Re=E.state.transmissionRenderTarget[K.id],Ue=K.viewport||ae;Re.setSize(Ue.z*S.transmissionResolutionScale,Ue.w*S.transmissionResolutionScale);let Ae=S.getRenderTarget(),Fe=S.getActiveCubeFace(),He=S.getActiveMipmapLevel();S.setRenderTarget(Re),S.getClearColor(te),se=S.getClearAlpha(),se<1&&S.setClearColor(16777215,.5),S.clear(),_t&&xe.render(j);let tt=S.toneMapping;S.toneMapping=Qn;let ot=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),E.setupLightsView(K),Oe===!0&&Ne.setGlobalState(S.clippingPlanes,K),Uo(A,j,K),b.updateMultisampleRenderTarget(Re),b.updateRenderTargetMipmap(Re),lt.has("WEBGL_multisampled_render_to_texture")===!1){let Xe=!1;for(let Et=0,Jt=X.length;Et<Jt;Et++){let qt=X[Et],{object:Rt,geometry:xn,material:De,group:Sn}=qt;if(De.side===Rn&&Rt.layers.test(K.layers)){let pt=De.side;De.side=gn,De.needsUpdate=!0,Af(Rt,j,K,xn,De,Sn),De.side=pt,De.needsUpdate=!0,Xe=!0}}Xe===!0&&(b.updateMultisampleRenderTarget(Re),b.updateRenderTargetMipmap(Re))}S.setRenderTarget(Ae,Fe,He),S.setClearColor(te,se),ot!==void 0&&(K.viewport=ot),S.toneMapping=tt}function Uo(A,X,j){let K=X.isScene===!0?X.overrideMaterial:null;for(let $=0,Re=A.length;$<Re;$++){let Ue=A[$],{object:Ae,geometry:Fe,group:He}=Ue,tt=Ue.material;tt.allowOverride===!0&&K!==null&&(tt=K),Ae.layers.test(j.layers)&&Af(Ae,X,j,Fe,tt,He)}}function Af(A,X,j,K,$,Re){A.onBeforeRender(S,X,j,K,$,Re),A.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),$.onBeforeRender(S,X,j,K,A,Re),$.transparent===!0&&$.side===Rn&&$.forceSinglePass===!1?($.side=gn,$.needsUpdate=!0,S.renderBufferDirect(j,X,K,$,A,Re),$.side=Li,$.needsUpdate=!0,S.renderBufferDirect(j,X,K,$,A,Re),$.side=Rn):S.renderBufferDirect(j,X,K,$,A,Re),A.onAfterRender(S,X,j,K,$,Re)}function ko(A,X,j){X.isScene!==!0&&(X=yt);let K=P.get(A),$=E.state.lights,Re=E.state.shadowsArray,Ue=$.state.version,Ae=be.getParameters(A,$.state,Re,X,j,E.state.lightProbeGridArray),Fe=be.getProgramCacheKey(Ae),He=K.programs;K.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?X.environment:null,K.fog=X.fog;let tt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;K.envMap=Z.get(A.envMap||K.environment,tt),K.envMapRotation=K.environment!==null&&A.envMap===null?X.environmentRotation:A.envMapRotation,He===void 0&&(A.addEventListener("dispose",$t),He=new Map,K.programs=He);let ot=He.get(Fe);if(ot!==void 0){if(K.currentProgram===ot&&K.lightsStateVersion===Ue)return Cf(A,Ae),ot}else Ae.uniforms=be.getUniforms(A),N!==null&&A.isNodeMaterial&&N.build(A,j,Ae),A.onBeforeCompile(Ae,S),ot=be.acquireProgram(Ae,Fe),He.set(Fe,ot),K.uniforms=Ae.uniforms;let Xe=K.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Xe.clippingPlanes=Ne.uniform),Cf(A,Ae),K.needsLights=Dm(A),K.lightsStateVersion=Ue,K.needsLights&&(Xe.ambientLightColor.value=$.state.ambient,Xe.lightProbe.value=$.state.probe,Xe.directionalLights.value=$.state.directional,Xe.directionalLightShadows.value=$.state.directionalShadow,Xe.spotLights.value=$.state.spot,Xe.spotLightShadows.value=$.state.spotShadow,Xe.rectAreaLights.value=$.state.rectArea,Xe.ltc_1.value=$.state.rectAreaLTC1,Xe.ltc_2.value=$.state.rectAreaLTC2,Xe.pointLights.value=$.state.point,Xe.pointLightShadows.value=$.state.pointShadow,Xe.hemisphereLights.value=$.state.hemi,Xe.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Xe.spotLightMatrix.value=$.state.spotLightMatrix,Xe.spotLightMap.value=$.state.spotLightMap,Xe.pointShadowMatrix.value=$.state.pointShadowMatrix),K.lightProbeGrid=E.state.lightProbeGridArray.length>0,K.currentProgram=ot,K.uniformsList=null,ot}function Rf(A){if(A.uniformsList===null){let X=A.currentProgram.getUniforms();A.uniformsList=vr.seqWithValue(X.seq,A.uniforms)}return A.uniformsList}function Cf(A,X){let j=P.get(A);j.outputColorSpace=X.outputColorSpace,j.batching=X.batching,j.batchingColor=X.batchingColor,j.instancing=X.instancing,j.instancingColor=X.instancingColor,j.instancingMorph=X.instancingMorph,j.skinning=X.skinning,j.morphTargets=X.morphTargets,j.morphNormals=X.morphNormals,j.morphColors=X.morphColors,j.morphTargetsCount=X.morphTargetsCount,j.numClippingPlanes=X.numClippingPlanes,j.numIntersection=X.numClipIntersection,j.vertexAlphas=X.vertexAlphas,j.vertexTangents=X.vertexTangents,j.toneMapping=X.toneMapping}function Im(A,X){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;T.setFromMatrixPosition(X.matrixWorld);for(let j=0,K=A.length;j<K;j++){let $=A[j];if($.texture!==null&&$.boundingBox.containsPoint(T))return $}return null}function Pm(A,X,j,K,$){X.isScene!==!0&&(X=yt),b.resetTextureUnits();let Re=X.fog,Ue=K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial?X.environment:null,Ae=U===null?S.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:ht.workingColorSpace,Fe=K.isMeshStandardMaterial||K.isMeshLambertMaterial&&!K.envMap||K.isMeshPhongMaterial&&!K.envMap,He=Z.get(K.envMap||Ue,Fe),tt=K.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,ot=!!j.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Xe=!!j.morphAttributes.position,Et=!!j.morphAttributes.normal,Jt=!!j.morphAttributes.color,qt=Qn;K.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(qt=S.toneMapping);let Rt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,xn=Rt!==void 0?Rt.length:0,De=P.get(K),Sn=E.state.lights;if(Oe===!0&&(Pe===!0||A!==q)){let Nt=A===q&&K.id===B;Ne.setState(K,A,Nt)}let pt=!1;K.version===De.__version?(De.needsLights&&De.lightsStateVersion!==Sn.state.version||De.outputColorSpace!==Ae||$.isBatchedMesh&&De.batching===!1||!$.isBatchedMesh&&De.batching===!0||$.isBatchedMesh&&De.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&De.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&De.instancing===!1||!$.isInstancedMesh&&De.instancing===!0||$.isSkinnedMesh&&De.skinning===!1||!$.isSkinnedMesh&&De.skinning===!0||$.isInstancedMesh&&De.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&De.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&De.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&De.instancingMorph===!1&&$.morphTexture!==null||De.envMap!==He||K.fog===!0&&De.fog!==Re||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==Ne.numPlanes||De.numIntersection!==Ne.numIntersection)||De.vertexAlphas!==tt||De.vertexTangents!==ot||De.morphTargets!==Xe||De.morphNormals!==Et||De.morphColors!==Jt||De.toneMapping!==qt||De.morphTargetsCount!==xn||!!De.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(pt=!0):(pt=!0,De.__version=K.version);let On=De.currentProgram;pt===!0&&(On=ko(K,X,$),N&&K.isNodeMaterial&&N.onUpdateProgram(K,On,De));let ni=!1,Bi=!1,Us=!1,Ct=On.getUniforms(),jt=De.uniforms;if(Te.useProgram(On.program)&&(ni=!0,Bi=!0,Us=!0),K.id!==B&&(B=K.id,Bi=!0),De.needsLights){let Nt=Im(E.state.lightProbeGridArray,$);De.lightProbeGrid!==Nt&&(De.lightProbeGrid=Nt,Bi=!0)}if(ni||q!==A){Te.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Ct.setValue(G,"projectionMatrix",A.projectionMatrix),Ct.setValue(G,"viewMatrix",A.matrixWorldInverse);let Hi=Ct.map.cameraPosition;Hi!==void 0&&Hi.setValue(G,We.setFromMatrixPosition(A.matrixWorld)),Dt.logarithmicDepthBuffer&&Ct.setValue(G,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Ct.setValue(G,"isOrthographic",A.isOrthographicCamera===!0),q!==A&&(q=A,Bi=!0,Us=!0)}if(De.needsLights&&(Sn.state.directionalShadowMap.length>0&&Ct.setValue(G,"directionalShadowMap",Sn.state.directionalShadowMap,b),Sn.state.spotShadowMap.length>0&&Ct.setValue(G,"spotShadowMap",Sn.state.spotShadowMap,b),Sn.state.pointShadowMap.length>0&&Ct.setValue(G,"pointShadowMap",Sn.state.pointShadowMap,b)),$.isSkinnedMesh){Ct.setOptional(G,$,"bindMatrix"),Ct.setOptional(G,$,"bindMatrixInverse");let Nt=$.skeleton;Nt&&(Nt.boneTexture===null&&Nt.computeBoneTexture(),Ct.setValue(G,"boneTexture",Nt.boneTexture,b))}$.isBatchedMesh&&(Ct.setOptional(G,$,"batchingTexture"),Ct.setValue(G,"batchingTexture",$._matricesTexture,b),Ct.setOptional(G,$,"batchingIdTexture"),Ct.setValue(G,"batchingIdTexture",$._indirectTexture,b),Ct.setOptional(G,$,"batchingColorTexture"),$._colorsTexture!==null&&Ct.setValue(G,"batchingColorTexture",$._colorsTexture,b));let zi=j.morphAttributes;if((zi.position!==void 0||zi.normal!==void 0||zi.color!==void 0)&&je.update($,j,On),(Bi||De.receiveShadow!==$.receiveShadow)&&(De.receiveShadow=$.receiveShadow,Ct.setValue(G,"receiveShadow",$.receiveShadow)),(K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial)&&K.envMap===null&&X.environment!==null&&(jt.envMapIntensity.value=X.environmentIntensity),jt.dfgLUT!==void 0&&(jt.dfgLUT.value=DM()),Bi){if(Ct.setValue(G,"toneMappingExposure",S.toneMappingExposure),De.needsLights&&Lm(jt,Us),Re&&K.fog===!0&&ne.refreshFogUniforms(jt,Re),ne.refreshMaterialUniforms(jt,K,D,v,E.state.transmissionRenderTarget[A.id]),De.needsLights&&De.lightProbeGrid){let Nt=De.lightProbeGrid;jt.probesSH.value=Nt.texture,jt.probesMin.value.copy(Nt.boundingBox.min),jt.probesMax.value.copy(Nt.boundingBox.max),jt.probesResolution.value.copy(Nt.resolution)}vr.upload(G,Rf(De),jt,b)}if(K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(vr.upload(G,Rf(De),jt,b),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Ct.setValue(G,"center",$.center),Ct.setValue(G,"modelViewMatrix",$.modelViewMatrix),Ct.setValue(G,"normalMatrix",$.normalMatrix),Ct.setValue(G,"modelMatrix",$.matrixWorld),K.uniformsGroups!==void 0){let Nt=K.uniformsGroups;for(let Hi=0,ks=Nt.length;Hi<ks;Hi++){let Sf=Nt[Hi];re.update(Sf,On),re.bind(Sf,On)}}return On}function Lm(A,X){A.ambientLightColor.needsUpdate=X,A.lightProbe.needsUpdate=X,A.directionalLights.needsUpdate=X,A.directionalLightShadows.needsUpdate=X,A.pointLights.needsUpdate=X,A.pointLightShadows.needsUpdate=X,A.spotLights.needsUpdate=X,A.spotLightShadows.needsUpdate=X,A.rectAreaLights.needsUpdate=X,A.hemisphereLights.needsUpdate=X}function Dm(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(A,X,j){let K=P.get(A);K.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),P.get(A.texture).__webglTexture=X,P.get(A.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:j,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,X){let j=P.get(A);j.__webglFramebuffer=X,j.__useDefaultFramebuffer=X===void 0};let Nm=G.createFramebuffer();this.setRenderTarget=function(A,X=0,j=0){U=A,V=X,Y=j;let K=null,$=!1,Re=!1;if(A){let Ae=P.get(A);if(Ae.__useDefaultFramebuffer!==void 0){Te.bindFramebuffer(G.FRAMEBUFFER,Ae.__webglFramebuffer),ae.copy(A.viewport),J.copy(A.scissor),ee=A.scissorTest,Te.viewport(ae),Te.scissor(J),Te.setScissorTest(ee),B=-1;return}else if(Ae.__webglFramebuffer===void 0)b.setupRenderTarget(A);else if(Ae.__hasExternalTextures)b.rebindTextures(A,P.get(A.texture).__webglTexture,P.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let tt=A.depthTexture;if(Ae.__boundDepthTexture!==tt){if(tt!==null&&P.has(tt)&&(A.width!==tt.image.width||A.height!==tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(A)}}let Fe=A.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(Re=!0);let He=P.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(He[X])?K=He[X][j]:K=He[X],$=!0):A.samples>0&&b.useMultisampledRTT(A)===!1?K=P.get(A).__webglMultisampledFramebuffer:Array.isArray(He)?K=He[j]:K=He,ae.copy(A.viewport),J.copy(A.scissor),ee=A.scissorTest}else ae.copy(W).multiplyScalar(D).floor(),J.copy(ie).multiplyScalar(D).floor(),ee=me;if(j!==0&&(K=Nm),Te.bindFramebuffer(G.FRAMEBUFFER,K)&&Te.drawBuffers(A,K),Te.viewport(ae),Te.scissor(J),Te.setScissorTest(ee),$){let Ae=P.get(A.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ae.__webglTexture,j)}else if(Re){let Ae=X;for(let Fe=0;Fe<A.textures.length;Fe++){let He=P.get(A.textures[Fe]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+Fe,He.__webglTexture,j,Ae)}}else if(A!==null&&j!==0){let Ae=P.get(A.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Ae.__webglTexture,j)}B=-1},this.readRenderTargetPixels=function(A,X,j,K,$,Re,Ue,Ae=0){if(!(A&&A.isWebGLRenderTarget)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=P.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ue!==void 0&&(Fe=Fe[Ue]),Fe){Te.bindFramebuffer(G.FRAMEBUFFER,Fe);try{let He=A.textures[Ae],tt=He.format,ot=He.type;if(A.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Ae),!Dt.textureFormatReadable(tt)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Dt.textureTypeReadable(ot)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=A.width-K&&j>=0&&j<=A.height-$&&G.readPixels(X,j,K,$,O.convert(tt),O.convert(ot),Re)}finally{let He=U!==null?P.get(U).__webglFramebuffer:null;Te.bindFramebuffer(G.FRAMEBUFFER,He)}}},this.readRenderTargetPixelsAsync=async function(A,X,j,K,$,Re,Ue,Ae=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=P.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ue!==void 0&&(Fe=Fe[Ue]),Fe)if(X>=0&&X<=A.width-K&&j>=0&&j<=A.height-$){Te.bindFramebuffer(G.FRAMEBUFFER,Fe);let He=A.textures[Ae],tt=He.format,ot=He.type;if(A.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Ae),!Dt.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Dt.textureTypeReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Xe=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,Xe),G.bufferData(G.PIXEL_PACK_BUFFER,Re.byteLength,G.STREAM_READ),G.readPixels(X,j,K,$,O.convert(tt),O.convert(ot),0);let Et=U!==null?P.get(U).__webglFramebuffer:null;Te.bindFramebuffer(G.FRAMEBUFFER,Et);let Jt=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await Pp(G,Jt,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,Xe),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Re),G.deleteBuffer(Xe),G.deleteSync(Jt),Re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,X=null,j=0){let K=Math.pow(2,-j),$=Math.floor(A.image.width*K),Re=Math.floor(A.image.height*K),Ue=X!==null?X.x:0,Ae=X!==null?X.y:0;b.setTexture2D(A,0),G.copyTexSubImage2D(G.TEXTURE_2D,j,0,0,Ue,Ae,$,Re),Te.unbindTexture()};let Um=G.createFramebuffer(),km=G.createFramebuffer();this.copyTextureToTexture=function(A,X,j=null,K=null,$=0,Re=0){let Ue,Ae,Fe,He,tt,ot,Xe,Et,Jt,qt=A.isCompressedTexture?A.mipmaps[Re]:A.image;if(j!==null)Ue=j.max.x-j.min.x,Ae=j.max.y-j.min.y,Fe=j.isBox3?j.max.z-j.min.z:1,He=j.min.x,tt=j.min.y,ot=j.isBox3?j.min.z:0;else{let jt=Math.pow(2,-$);Ue=Math.floor(qt.width*jt),Ae=Math.floor(qt.height*jt),A.isDataArrayTexture?Fe=qt.depth:A.isData3DTexture?Fe=Math.floor(qt.depth*jt):Fe=1,He=0,tt=0,ot=0}K!==null?(Xe=K.x,Et=K.y,Jt=K.z):(Xe=0,Et=0,Jt=0);let Rt=O.convert(X.format),xn=O.convert(X.type),De;X.isData3DTexture?(b.setTexture3D(X,0),De=G.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(b.setTexture2DArray(X,0),De=G.TEXTURE_2D_ARRAY):(b.setTexture2D(X,0),De=G.TEXTURE_2D),Te.activeTexture(G.TEXTURE0),Te.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,X.flipY),Te.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),Te.pixelStorei(G.UNPACK_ALIGNMENT,X.unpackAlignment);let Sn=Te.getParameter(G.UNPACK_ROW_LENGTH),pt=Te.getParameter(G.UNPACK_IMAGE_HEIGHT),On=Te.getParameter(G.UNPACK_SKIP_PIXELS),ni=Te.getParameter(G.UNPACK_SKIP_ROWS),Bi=Te.getParameter(G.UNPACK_SKIP_IMAGES);Te.pixelStorei(G.UNPACK_ROW_LENGTH,qt.width),Te.pixelStorei(G.UNPACK_IMAGE_HEIGHT,qt.height),Te.pixelStorei(G.UNPACK_SKIP_PIXELS,He),Te.pixelStorei(G.UNPACK_SKIP_ROWS,tt),Te.pixelStorei(G.UNPACK_SKIP_IMAGES,ot);let Us=A.isDataArrayTexture||A.isData3DTexture,Ct=X.isDataArrayTexture||X.isData3DTexture;if(A.isDepthTexture){let jt=P.get(A),zi=P.get(X),Nt=P.get(jt.__renderTarget),Hi=P.get(zi.__renderTarget);Te.bindFramebuffer(G.READ_FRAMEBUFFER,Nt.__webglFramebuffer),Te.bindFramebuffer(G.DRAW_FRAMEBUFFER,Hi.__webglFramebuffer);for(let ks=0;ks<Fe;ks++)Us&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,P.get(A).__webglTexture,$,ot+ks),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,P.get(X).__webglTexture,Re,Jt+ks)),G.blitFramebuffer(He,tt,Ue,Ae,Xe,Et,Ue,Ae,G.DEPTH_BUFFER_BIT,G.NEAREST);Te.bindFramebuffer(G.READ_FRAMEBUFFER,null),Te.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if($!==0||A.isRenderTargetTexture||P.has(A)){let jt=P.get(A),zi=P.get(X);Te.bindFramebuffer(G.READ_FRAMEBUFFER,Um),Te.bindFramebuffer(G.DRAW_FRAMEBUFFER,km);for(let Nt=0;Nt<Fe;Nt++)Us?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,jt.__webglTexture,$,ot+Nt):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,jt.__webglTexture,$),Ct?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,zi.__webglTexture,Re,Jt+Nt):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,zi.__webglTexture,Re),$!==0?G.blitFramebuffer(He,tt,Ue,Ae,Xe,Et,Ue,Ae,G.COLOR_BUFFER_BIT,G.NEAREST):Ct?G.copyTexSubImage3D(De,Re,Xe,Et,Jt+Nt,He,tt,Ue,Ae):G.copyTexSubImage2D(De,Re,Xe,Et,He,tt,Ue,Ae);Te.bindFramebuffer(G.READ_FRAMEBUFFER,null),Te.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Ct?A.isDataTexture||A.isData3DTexture?G.texSubImage3D(De,Re,Xe,Et,Jt,Ue,Ae,Fe,Rt,xn,qt.data):X.isCompressedArrayTexture?G.compressedTexSubImage3D(De,Re,Xe,Et,Jt,Ue,Ae,Fe,Rt,qt.data):G.texSubImage3D(De,Re,Xe,Et,Jt,Ue,Ae,Fe,Rt,xn,qt):A.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Re,Xe,Et,Ue,Ae,Rt,xn,qt.data):A.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Re,Xe,Et,qt.width,qt.height,Rt,qt.data):G.texSubImage2D(G.TEXTURE_2D,Re,Xe,Et,Ue,Ae,Rt,xn,qt);Te.pixelStorei(G.UNPACK_ROW_LENGTH,Sn),Te.pixelStorei(G.UNPACK_IMAGE_HEIGHT,pt),Te.pixelStorei(G.UNPACK_SKIP_PIXELS,On),Te.pixelStorei(G.UNPACK_SKIP_ROWS,ni),Te.pixelStorei(G.UNPACK_SKIP_IMAGES,Bi),Re===0&&X.generateMipmaps&&G.generateMipmap(De),Te.unbindTexture()},this.initRenderTarget=function(A){P.get(A).__webglFramebuffer===void 0&&b.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?b.setTextureCube(A,0):A.isData3DTexture?b.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?b.setTexture2DArray(A,0):b.setTexture2D(A,0),Te.unbindTexture()},this.resetState=function(){V=0,Y=0,U=null,Te.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ht._getDrawingBufferColorSpace(e),t.unpackColorSpace=ht._getUnpackColorSpace()}};function dm(n,e){let t=new cc({canvas:e.canvas,antialias:!0});t.setPixelRatio(Math.min(2,devicePixelRatio||1)),t.setSize(e.VW,e.VH),t.outputColorSpace=fn;let i=new oo;i.background=new Je(861232);let s=new Mn(50,e.VW/e.VH,10,6e4),r=new _o(15397624,4867128,.95);i.add(r);let o=new Mo(16773852,1.35);o.position.set(-.45,1,-.3).multiplyScalar(1e3),i.add(o);let a=new en;i.add(a),o.target=a,i.fog=new ro(10466494,2600,9e3);let l={renderer:t,scene:i,camera:s,sun:o,hemi:r,cx:n.player.x,cy:n.player.y,dist:1150,elev:.96,shakeX:0,shakeY:0,_ray:new bo,_plane:new Vn(new z(0,1,0),0),_v3:new z,lightLevel(){return .5+.5*Math.cos(Math.PI*2*(n.t%Er/Er))},resize(){s.aspect=e.VW/e.VH,s.updateProjectionMatrix(),t.setSize(e.VW,e.VH)},update(c){let h=n.player,f=h.x,d=h.y,u=1500,p=.96;if(e.godView){f=ce.w/2,d=ce.h/2,p=1.52;let L=Math.tan(s.fov/2*Math.PI/180),_=(ce.h/2+500)/L,M=(ce.w/2+500)/(L*s.aspect);u=Math.max(_,M)*1.02}else h.inCopter&&n.copter&&(u=1850+Math.hypot(n.copter.vx,n.copter.vy)*.9);l._wasGod!==e.godView&&(l._wasGod=e.godView,l.cx=f,l.cy=d,l.dist=u,l.elev=p);let x=Math.min(1,c*(e.godView?6:5));l.cx=Ar(l.cx,f,x),l.cy=Ar(l.cy,d,x),l.dist=Ar(l.dist,u,Math.min(1,c*4)),l.elev=Ar(l.elev,p,Math.min(1,c*4)),n.shake>0?(l.shakeX=(Math.random()*2-1)*n.shake,l.shakeY=(Math.random()*2-1)*n.shake):(l.shakeX=0,l.shakeY=0);let m=l.cx+l.shakeX,g=l.cy+l.shakeY,y=Math.sin(l.elev)*l.dist,w=Math.cos(l.elev)*l.dist;s.position.set(m,y,g+w),s.lookAt(m,0,g),a.position.set(m,0,g);let T=l.lightLevel(),I=Math.sin((1-T)*Math.PI);o.intensity=1+T*.45,o.color.setHSL(.105-I*.045,.52+I*.25,.62-I*.06),r.intensity=.78+T*.25;let E=n.t%Er/Er*Math.PI*2;o.position.set(m+Math.cos(E)*1400,900+T*600,g+Math.sin(E)*1400-400),i.fog.near=l.dist*2.2,i.fog.far=l.dist*8,l._viewR=l.dist*1.9},render(){t.render(i,s)},screenToWorld(c,h){let f=new $e(c/e.VW*2-1,-(h/e.VH)*2+1);l._ray.setFromCamera(f,s);let d=new z;return l._ray.ray.intersectPlane(l._plane,d),d?{x:d.x,y:d.z}:{x:l.cx,y:l.cy}},worldToScreen(c,h,f=0){return l._v3.set(c,f,h).project(s),{x:(l._v3.x+1)/2*e.VW,y:(-l._v3.y+1)/2*e.VH,behind:l._v3.z>1}},inView(c,h,f=0){let d=c-l.cx,u=h-l.cy;return d*d+u*u<(l._viewR+f)*(l._viewR+f)},viewRect(c=0){let h=l._viewR+c;return{x0:l.cx-h,y0:l.cy-h,x1:l.cx+h,y1:l.cy+h}},get zoom(){return 900/l.dist}};return l.update(.1),l}var dc=.3;function pm(n,e){let t=Math.round(ce.w*dc),i=Math.round(ce.h*dc),s=document.createElement("canvas");s.width=t,s.height=i;let r=s.getContext("2d");r.save(),r.scale(dc,dc),NM(n,r),r.restore();let o=new pi(s);o.colorSpace=fn,o.anisotropy=4,o.minFilter=gi;let a=new pe(new Gn(ce.w,ce.h),new Wn({map:o,transparent:!0}));a.rotation.x=-Math.PI/2,a.position.set(ce.w/2,0,ce.h/2),a.renderOrder=1,e.add(a);let l=new pe(new Gn(ce.w*6,ce.h*6),new Wn({color:1060924}));l.rotation.x=-Math.PI/2,l.position.set(ce.w/2,-3,ce.h/2),e.add(l);let c=document.createElement("canvas");c.width=256,c.height=256;let h=c.getContext("2d");for(let T=0;T<260;T++){let I=Math.random()*256,E=Math.random()*256;h.fillStyle=`rgba(200,235,245,${.25+Math.random()*.5})`,h.fillRect(I,E,1.6+Math.random()*2.4,1.2)}let f=new pi(c);f.wrapS=f.wrapT=Ts,f.repeat.set(220,146);let d=new pe(new Gn(ce.w*6,ce.h*6),new tn({map:f,transparent:!0,opacity:.5,depthWrite:!1,blending:Fn}));d.rotation.x=-Math.PI/2,d.position.set(ce.w/2,-1.5,ce.h/2),e.add(d);let u=f.clone();u.wrapS=u.wrapT=Ts,u.repeat.set(133,88);let p=new pe(new Gn(ce.w*6,ce.h*6),new tn({map:u,transparent:!0,opacity:.3,depthWrite:!1,blending:Fn}));p.rotation.x=-Math.PI/2,p.position.set(ce.w/2,-1.2,ce.h/2),e.add(p);let x=document.createElement("canvas");x.width=4,x.height=256;let m=x.getContext("2d"),g=m.createLinearGradient(0,0,0,256);g.addColorStop(0,"#5d9bd3"),g.addColorStop(.62,"#9cc3dd"),g.addColorStop(.78,"#cfddd8"),g.addColorStop(1,"#dfe5da"),m.fillStyle=g,m.fillRect(0,0,4,256);let y=new pi(x);y.colorSpace=fn;let w=new pe(new Cs(34e3,18,12,0,Math.PI*2,0,Math.PI/2),new tn({map:y,side:gn,fog:!1}));return w.position.set(ce.w/2,-40,ce.h/2),e.add(w),e.background=null,{tex:o,sync(T,I,E){let L=d.material.map,_=p.material.map;L.offset.x+=T*.0022,L.offset.y+=T*.0013,_.offset.x-=T*.0011,_.offset.y+=T*8e-4,w.position.set(E.cx,-40,E.cy);let M=E.lightLevel();w.material.color.setHSL(.58,.18,.62+M*.38)}}}function um(n,e,t){let i=(e+n.world.biomeRidge(t))/ce.w,s=.05,r=bi((i-(1/3-s))/(2*s)),o=bi((i-(2/3-s))/(2*s)),a=(d,u,p)=>[d[0]+(u[0]-d[0])*p,d[1]+(u[1]-d[1])*p,d[2]+(u[2]-d[2])*p],l=[181,154,102],c=[74,92,48],h=[185,199,209],f=a(l,c,r);return f=a(f,h,o),f}function gf(n,e){e.beginPath(),n.world.islandPath.forEach((t,i)=>i?e.lineTo(t.x,t.y):e.moveTo(t.x,t.y)),e.closePath()}function NM(n,e){let t=ce.w,i=ce.h;e.lineJoin="round",e.strokeStyle="rgba(64,124,134,0.45)",e.lineWidth=64,gf(n,e),e.stroke(),e.strokeStyle="rgba(90,150,158,0.30)",e.lineWidth=26,gf(n,e),e.stroke(),e.save(),gf(n,e),e.clip();let s=32;for(let a=0;a<i;a+=s)for(let l=0;l<t;l+=s){if(n.world.landFactor(l+s/2,a+s/2)<=-.25)continue;let[h,f,d]=um(n,l+s/2,a+s/2),u=Vo(l/s|0,a/s|0),p=Vo(l/96|0,a/96|0),x=.88+u*.14+(p-.5)*.12-a/i*.06;h*=x,f*=x,d*=x,e.fillStyle=`rgb(${h|0},${f|0},${d|0})`,e.fillRect(l-1,a-1,s+2,s+2)}e.lineCap="round";let r=n.world.islandPath;for(let a=0;a<3;a++){let l=a===0?96:a===1?30:7;for(let c=0;c<r.length;c++){let h=r[c],f=r[(c+1)%r.length],d=n.world.biomeAt((h.x+f.x)/2,(h.y+f.y)/2)==="winter";e.strokeStyle=a===0?d?"rgba(214,227,235,0.95)":"rgba(186,166,120,0.95)":a===1?d?"rgba(168,190,204,0.9)":"rgba(146,128,92,0.9)":"rgba(240,248,252,0.55)",e.lineWidth=l,e.beginPath(),e.moveTo(h.x,h.y),e.lineTo(f.x,f.y),e.stroke()}}for(let a of n.world.lakes){e.save(),e.translate(a.x,a.y);let l=()=>{e.beginPath();for(let h=0;h<=28;h++){let f=h/28*Math.PI*2,d=a.r*a.wob[h%28],u=Math.cos(f)*d,p=Math.sin(f)*d*.84;h?e.lineTo(u,p):e.moveTo(u,p)}e.closePath()};e.save(),e.scale(1.06,1.06),l(),e.fillStyle=a.frozen?"rgba(238,246,251,.95)":"rgba(96,118,66,.7)",e.fill(),e.restore(),l();let c=e.createRadialGradient(0,-.3*a.r,a.r*.1,0,0,a.r);a.frozen?(c.addColorStop(0,"#dfeaf2"),c.addColorStop(1,"#96b2c8")):(c.addColorStop(0,"#33687c"),c.addColorStop(1,"#0c2531")),e.fillStyle=c,e.fill(),e.restore()}for(let a of n.world.monuments){let l=e.createRadialGradient(a.x,a.y,a.r*.2,a.x,a.y,a.r);l.addColorStop(0,"rgba(110,106,95,.5)"),l.addColorStop(.8,"rgba(98,94,84,.32)"),l.addColorStop(1,"rgba(90,86,76,0)"),e.fillStyle=l,e.beginPath(),e.arc(a.x,a.y,a.r,0,7),e.fill()}e.lineCap="round";for(let a of n.world.roads)for(let l=0;l<a.pts.length-1;l++){let c=a.pts[l],h=a.pts[l+1],f=Math.min(a.fade[l],a.fade[l+1]);f<=.02||(e.globalAlpha=f,e.strokeStyle="#4f4430",e.lineWidth=a.w,e.beginPath(),e.moveTo(c.x,c.y),e.lineTo(h.x,h.y),e.stroke(),e.strokeStyle="#665838",e.lineWidth=a.w-4,e.beginPath(),e.moveTo(c.x,c.y),e.lineTo(h.x,h.y),e.stroke(),e.globalAlpha=1)}let o=11;for(let a of n.world.rails)for(let l=0;l<a.pts.length-1;l++){let c=a.pts[l],h=a.pts[l+1];e.strokeStyle="#574d40",e.lineWidth=2*o+16,e.beginPath(),e.moveTo(c.x,c.y),e.lineTo(h.x,h.y),e.stroke(),e.strokeStyle="#6b5f4e",e.lineWidth=2*o+7,e.beginPath(),e.moveTo(c.x,c.y),e.lineTo(h.x,h.y),e.stroke();let f=Math.hypot(h.x-c.x,h.y-c.y),d=Math.atan2(h.y-c.y,h.x-c.x),u=-Math.sin(d),p=Math.cos(d);e.strokeStyle="#3a2e1d",e.lineWidth=4.5;for(let x=8;x<f;x+=24){let m=c.x+Math.cos(d)*x,g=c.y+Math.sin(d)*x;e.beginPath(),e.moveTo(m-u*(o+5),g-p*(o+5)),e.lineTo(m+u*(o+5),g+p*(o+5)),e.stroke()}e.strokeStyle="#9aa1a8",e.lineWidth=2.6;for(let x of[-o,o])e.beginPath(),e.moveTo(c.x+u*x,c.y+p*x),e.lineTo(h.x+u*x,h.y+p*x),e.stroke()}for(let a=0;a<i;a+=96)for(let l=0;l<t;l+=96){if(!n.world.onLand(l,a)||n.world.lakeAt(l,a))continue;let c=Vo(l/96|0,a/96|0);if(c>.5)continue;let[h,f,d]=um(n,l,a);e.fillStyle=`rgba(${h*.75|0},${f*.75|0},${d*.75|0},0.5)`,e.beginPath(),e.ellipse(l+c*80,a+c*7919%1*80,9+c*14,5+c*8,c*6,0,7),e.fill()}e.restore()}var xf=new Map;function Me(n,e={}){let t=n+JSON.stringify(e);return xf.has(t)||xf.set(t,new Wn({color:n,emissive:e.emissive||0,emissiveIntensity:e.emissiveIntensity??1,transparent:!!e.transparent,opacity:e.opacity??1,flatShading:!0})),xf.get(t)}var fe={box:new ts(1,1,1),cyl:new As(1,1,1,8),cyl6:new As(1,1.18,1,6),cone:new mo(1,1,7),ico:new Rs(1,0),sphere:new Cs(1,8,6),quad:new Gn(1,1)},uc=null;function _f(){if(uc)return uc;let n=document.createElement("canvas");n.width=64,n.height=64;let e=n.getContext("2d"),t=e.createRadialGradient(32,32,2,32,32,32);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.4,"rgba(255,255,255,0.45)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),uc=new pi(n),uc}var pc=null;function vf(){if(pc)return pc;let n=document.createElement("canvas");n.width=64,n.height=64;let e=n.getContext("2d"),t=e.createRadialGradient(32,32,4,32,32,30);return t.addColorStop(0,"rgba(8,8,6,0.42)"),t.addColorStop(.7,"rgba(8,8,6,0.22)"),t.addColorStop(1,"rgba(8,8,6,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),pc=new pi(n),pc}function cs(n,e=60){let t=new es({map:_f(),color:n,transparent:!0,blending:Fn,depthWrite:!1}),i=new Es(t);return i.scale.set(e,e,1),i}var yf=null;function Ds(n=40){yf||(yf=new Fi(.5,14));let e=new tn({map:vf(),transparent:!0,depthWrite:!1}),t=new pe(yf,e);return t.rotation.x=-Math.PI/2,t.scale.set(n,n*.8,1),t}var mc={wood:9069104,stone:8357517,metal:5791590,armored:4280939},Ns={wood:6111006,stone:5659747,metal:3948871,armored:2567996};var UM=Math.PI*2;function mm(n,e){let t=n.resources.filter(F=>F.type==="tree"),i=n.resources.filter(F=>F.type==="stone"),s=n.resources.filter(F=>F.type==="metal"),r=new Wt(fe.cyl,Me(6111008),t.length),o=new Wt(fe.cone,Me(16777215),t.length),a=new Wt(fe.cone,Me(16777215),t.length),l=new Wt(fe.cone,Me(15660281),t.length),c=new Wt(fe.ico,Me(9278603),i.length),h=new Wt(fe.ico,Me(9271114),s.length),f=new Wt(fe.ico,Me(14198864,{emissive:6965776}),s.length);for(let F of[r,o,a,l,c,h,f])F.frustumCulled=!1,e.add(F);let d=new Je,u=new Je,p=[];t.forEach((F,v)=>{let D=.85+F.seed*7.3%1*.4,R=n.world.biomeAt(F.x,F.y)==="winter";p.push(R),d.setHex(R?3953968:3494175).multiplyScalar(D),u.setHex(R?5995082:5274160).multiplyScalar(D),o.setColorAt(v,d),a.setColorAt(v,u)}),o.instanceColor&&(o.instanceColor.needsUpdate=!0),a.instanceColor&&(a.instanceColor.needsUpdate=!0);let x=new dt,m=0;function g(){t.forEach((F,v)=>{let D=F.amount<=0?.001:.55+.45*(F.amount/F.max),R=(F.seed*13.7%1-.5)*.12;x.makeRotationZ(R).scale(new z(7*D,30*D,7*D)).setPosition(F.x,15*D,F.y),r.setMatrixAt(v,x),x.makeRotationY(F.seed).scale(new z(30*D,42*D,30*D)).setPosition(F.x,36*D,F.y),o.setMatrixAt(v,x),x.makeRotationY(F.seed*2).scale(new z(20*D,30*D,20*D)).setPosition(F.x+4,56*D,F.y-3),a.setMatrixAt(v,x);let k=p[v]?D:.001;x.makeScale(13*k,12*k,13*k).setPosition(F.x+4,70*k,F.y-3),l.setMatrixAt(v,x)}),l.instanceMatrix.needsUpdate=!0,i.forEach((F,v)=>{let D=F.amount<=0?.001:(.55+.45*(F.amount/F.max))*F.r;x.makeRotationY(F.seed).scale(new z(D,D*.75,D)).setPosition(F.x,D*.45,F.y),c.setMatrixAt(v,x)}),s.forEach((F,v)=>{let D=F.amount<=0?.001:(.55+.45*(F.amount/F.max))*F.r;x.makeRotationY(F.seed*2).scale(new z(D,D*.7,D)).setPosition(F.x,D*.42,F.y),h.setMatrixAt(v,x),x.makeScale(D*.4,D*.34,D*.4).setPosition(F.x+3,D*.85,F.y-2),f.setMatrixAt(v,x)});for(let F of[r,o,a,c,h,f])F.instanceMatrix.needsUpdate=!0}g();let y=new Wt(fe.ico,Me(7896708),n.world.boulders.length||1);n.world.boulders.forEach((F,v)=>{x.makeRotationY(F.seed).scale(new z(F.r,F.r*.8,F.r)).setPosition(F.x,F.r*.45,F.y),y.setMatrixAt(v,x)}),y.frustumCulled=!1,e.add(y);let w=new Wt(fe.ico,Me(8685967),n.world.rocks.length||1);n.world.rocks.forEach((F,v)=>{x.makeRotationY(F.seed).scale(new z(F.r,F.r*.6,F.r)).setPosition(F.x,F.r*.3,F.y),w.setMatrixAt(v,x)}),w.frustumCulled=!1,e.add(w);let T=new Wt(fe.cyl,Me(7032616),n.world.palms.length||1),I=new Wt(fe.cone,Me(5077552),n.world.palms.length||1);n.world.palms.forEach((F,v)=>{x.makeScale(3.4,44,3.4).setPosition(F.x,22,F.y),T.setMatrixAt(v,x),x.makeScale(26,14,26).setPosition(F.x,48,F.y),I.setMatrixAt(v,x)}),T.frustumCulled=!1,I.frustumCulled=!1,e.add(T,I);let E=n.world.flora.filter(F=>F.type==="cactus"),L=new Wt(fe.cyl,Me(5143098),E.length||1);E.forEach((F,v)=>{x.makeScale(4.5,22,4.5).setPosition(F.x,11,F.y),L.setMatrixAt(v,x)}),L.frustumCulled=!1,e.add(L);let _=n.world.flora.filter(F=>F.type==="fern"||F.type==="shrub"),M=new Wt(fe.ico,Me(5599290),_.length||1);_.forEach((F,v)=>{x.makeScale(8,6,8).setPosition(F.x,4,F.y),M.setMatrixAt(v,x)}),M.frustumCulled=!1,e.add(M),kM(n,e);let S=n.barrels.map(F=>{let v;return F.crate?(v=new pe(fe.box,Me(9069104)),v.scale.set(F.r*1.8,F.r*1.5,F.r*1.8),v.position.set(F.x,F.r*.75,F.y)):(v=new pe(fe.cyl,Me(10768174)),v.scale.set(F.r*.9,F.r*1.7,F.r*.9),v.position.set(F.x,F.r*.85,F.y)),e.add(v),v}),C={quarryArm:null,gates:[],fadeables:[]};for(let F of n.world.monuments)OM(n,e,F,C);BM(n,e);for(let F of n.world.crossings){let v=new Ke;v.position.set(F.x,0,F.y),v.rotation.y=-F.railAng;for(let D of[-1,1]){let R=new pe(fe.box,Me(2500139));R.scale.set(5,20,5),R.position.set(0,10,D*38),v.add(R);let k=new pe(fe.box,Me(12597802));k.scale.set(40,3.6,3.6),k.position.set(20,18,D*38);let W=new Ke;W.position.set(0,18,D*38),k.position.set(20,0,0),W.add(k),v.add(W),C.gates.push({pivot:W,cr:F,side:D})}e.add(v)}let N=new Ke;e.add(N);let V=new Map,Y=new Map,U=new Map,B=-1,q=new Set;function ae(F){if(F==="p1")return 8308816;let v=n.teams.find(D=>D.owner===F);return v?parseInt(v.col.slice(1),16):8947848}function J(){if(n.nav.stamp!==B){B=n.nav.stamp,q.clear();for(let[F,v]of n.structures){q.add(F);let D=v.mat,R=Y.get(F);if(R&&R.sig!==D&&(N.remove(R.mesh),Y.delete(F),R=null),!R){let[k,W]=F.split(",").map(Number),ie=new pe(fe.box,Me(Ns[v.mat]||Ns.wood));ie.scale.set(62,5,62),ie.position.set(k*64+64/2,2.5,W*64+64/2),N.add(ie),Y.set(F,{mesh:ie,sig:D})}}for(let[F,v]of Y)q.has(F)||(N.remove(v.mesh),Y.delete(F));q.clear();for(let[F,v]of n.walls){if(v.hp<=0)continue;q.add(F);let D=v.type+v.mat+(v.open?"o":"c"),R=V.get(F);if(R&&R.sig!==D&&(N.remove(R.mesh),V.delete(F),R=null),!R){let k=St(F,v),W=(k[0]+k[2])/2,ie=(k[1]+k[3])/2,me=k[0]===k[2],we=new Ke,Oe=v.type==="door"?v.mat==="wood"?8016944:mc[v.mat]:mc[v.mat]||mc.wood;if(v.type==="door"&&v.open)for(let Pe of[-26,26]){let ke=new pe(fe.box,Me(Ns[v.mat]||Ns.wood));ke.scale.set(me?11:12,40,me?12:11),ke.position.set(me?0:Pe,20,me?Pe:0),we.add(ke)}else{let Pe=new pe(fe.box,Me(Oe)),ke=v.type==="door"?42:48;Pe.scale.set(me?11:64,ke,me?64:11),Pe.position.y=ke/2,we.add(Pe);let We=new pe(fe.box,Me(Ns[v.mat]||Ns.wood));if(We.scale.set(me?13:66,4,me?66:13),We.position.y=ke+2,we.add(We),v.type==="door"){let Le=new pe(fe.sphere,Me(14202462));Le.scale.set(2.5,2.5,2.5),Le.position.set(me?7:10,22,me?10:7),we.add(Le)}}we.position.set(W,0,ie),N.add(we),V.set(F,{mesh:we,sig:D})}}for(let[F,v]of V)q.has(F)||(N.remove(v.mesh),V.delete(F));q.clear();for(let[F,v]of n.deploys){q.add(F);let D=v.type+(v.tier||"")+v.owner,R=U.get(F);if(R&&R.sig!==D&&(N.remove(R.group),U.delete(F),R=null),!R){let[k,W]=F.split(",").map(Number),ie=k*64+64/2,me=W*64+64/2,we=new Ke;we.position.set(ie,0,me);let Oe={group:we,sig:D};if(v.type==="turret"){let Pe=new pe(fe.cyl6,Me(3883320));Pe.scale.set(17,10,17),Pe.position.y=5,we.add(Pe);let ke=new pe(fe.cyl,Me(5659980));ke.scale.set(11,10,11),ke.position.y=16,we.add(ke);let We=v.tier===3?6277344:v.tier===2?14721594:10133928,Le=new Ke;Le.position.y=18;let yt=new pe(fe.box,Me(2237994)),_t=v.tier===3?42:v.tier===2?32:24;yt.scale.set(_t,5,v.tier===2?9:5),yt.position.x=_t/2+6,Le.add(yt);let un=new pe(fe.box,Me(We,{emissive:We,emissiveIntensity:.5}));un.scale.set(4,6,6),un.position.x=_t+8,Le.add(un),we.add(Le),Oe.pivot=Le}else if(v.type==="cupboard"){let Pe=new pe(fe.box,Me(ae(v.owner)));Pe.scale.set(42,40,42),Pe.position.y=20,we.add(Pe);let ke=new pe(fe.box,Me(2891532));ke.scale.set(46,5,46),ke.position.y=42,we.add(ke);let We=cs(7790698,26);We.position.y=50,we.add(We),Oe.led=We}else{let Pe=new pe(fe.box,Me(7031332));Pe.scale.set(40,24,40),Pe.position.y=12,we.add(Pe)}N.add(we),U.set(F,Oe)}}for(let[F,v]of U)q.has(F)||(N.remove(v.group),U.delete(F))}}let ee=new Ke;e.add(ee);let te=-1;function se(){if(n.fences.length!==te){te=n.fences.length,ee.clear();for(let F of n.fences){let v=new pe(fe.box,Me(8215600));v.scale.set(46,22,5),v.position.set(F.x,11,F.y),v.rotation.y=-F.a,ee.add(v)}}}return{sync(F){m-=F,m<=0&&(m=.25,g()),n.barrels.forEach((D,R)=>{S[R].visible=D.hp>0}),J(),se();for(let[D,R]of U){let k=n.deploys.get(D);if(k&&(R.pivot&&(R.pivot.rotation.y=-(k.angle||0)),R.led&&k.store)){let W=k.store.wood+k.store.stone+k.store.metal>0;R.led.material.color.setHex(W?7790698:16734780)}}if(C.quarryArm){let D=n.quarry;C.quarryArm.rotation.z=D&&D.owner?Math.sin(D.arm*2.4)*.35:-.18}for(let D of C.gates)D.pivot.rotation.z=(1-D.cr.gate)*1.35;let v=n.player;for(let D of C.fadeables){let R=v.x-D.x,k=v.y-D.y,ie=!v.dead&&R*R+k*k<(D.r+90)*(D.r+90)?.3:1;for(let me of D.mats)me.opacity+=(ie-me.opacity)*Math.min(1,F*7)}}}}function kM(n,e){let{hash2:t}=FM,i=[],s=[],r=[],o=13824,a=9216;for(let u=120;u<a-120;u+=150)for(let p=120;p<o-120;p+=150){let x=t(p/150|0,u/150|0);if(x>.62)continue;let m=p+x*977%1*130,g=u+x*467%1*130;if(!n.world.onLand(m,g)||n.world.lakeAt(m,g)||n.world.pathDist(m,g)<40)continue;let y=n.world.biomeAt(m,g);y==="jungle"?i.push({x:m,y:g,h:x}):y==="desert"?x<.3&&s.push({x:m,y:g,h:x}):x<.4&&r.push({x:m,y:g,h:x})}let l=new dt,c=new Je,h=new Wt(fe.cone,Me(16777215),i.length||1);i.forEach((u,p)=>{let x=5+u.h*8;l.makeRotationY(u.h*6).scale(new z(x,x*1.8,x)).setPosition(u.x,x*.9,u.y),h.setMatrixAt(p,l),c.setHex(4876846).multiplyScalar(.8+u.h*37%1*.5),h.setColorAt(p,c)});let f=new Wt(fe.ico,Me(16777215),s.length||1);s.forEach((u,p)=>{let x=3+u.h*8;l.makeRotationY(u.h*9).scale(new z(x,x*.55,x)).setPosition(u.x,x*.3,u.y),f.setMatrixAt(p,l),c.setHex(10259040).multiplyScalar(.85+u.h*53%1*.3),f.setColorAt(p,c)});let d=new Wt(fe.sphere,Me(15265781),r.length||1);r.forEach((u,p)=>{let x=6+u.h*12;l.makeScale(x,x*.4,x*.8).setPosition(u.x,x*.16,u.y),d.setMatrixAt(p,l)});for(let u of[h,f,d])u.frustumCulled=!1,u.instanceColor&&(u.instanceColor.needsUpdate=!0),e.add(u)}var FM={hash2(n,e){let t=n*374761393+e*668265263|0;return t=t^t>>13|0,t=Math.imul(t,1274126177),((t^t>>16)>>>0)/4294967296}};function OM(n,e,t,i){let s=new Ke;s.position.set(t.x,0,t.y);let r=(l,c,h,f,d,u,p,x,m=0,g)=>{let y=new pe(l,Me(c,g));return y.scale.set(h,f,d),y.position.set(u,p,x),y.rotation.y=m,s.add(y),y},o=[],a=(...l)=>{let c=r(...l),h=c.material.clone();return h.transparent=!0,c.material=h,o.push(h),c};if(t.type==="gas"){a(fe.box,11027246,216,8,30,0,64,-70);for(let l of[-96,-30,36,96])r(fe.box,4147024,6,60,6,l,30,-62);for(let l of[-58,0])r(fe.box,5989227,18,30,16,l,15,-22);a(fe.box,9081241,54,52,50,58,26,-16),r(fe.box,12574959,18,14,2,66,34,10),r(fe.box,13279562,26,26,6,-104,40,-62)}else if(t.type==="junk"){for(let l=0;l<5;l++){let c=l/5*UM;r(fe.ico,7238780,26,14,20,Math.cos(c)*70,8,Math.sin(c)*54,c)}r(fe.box,8011824,56,22,26,-58,11,-40,.3),r(fe.box,3824234,56,22,26,54,11,44,-.5),r(fe.cyl,2302237,12,16,12,70,8,-50),r(fe.cyl,2302237,12,16,12,-66,8,58)}else if(t.type==="warehouse"){a(fe.box,8291470,252,70,164,0,35,0),a(fe.box,5988971,264,10,176,0,74,0);for(let l of[-72,0,72])a(fe.box,2764597,60,46,4,l,23,84);a(fe.box,4870488,30,14,16,-38,84,0),a(fe.box,4870488,30,14,16,38,84,0)}else if(t.type==="quarry"){r(fe.cyl,3814438,46,8,28,-36,4,26),r(fe.box,3948871,12,64,12,8,32,-46);let l=new Ke;l.position.set(14,60,-44);let c=new pe(fe.box,Me(8226963));c.scale.set(86,9,9),l.add(c);let h=new pe(fe.sphere,Me(10768430));h.scale.set(9,9,9),h.position.x=-43,l.add(h),s.add(l),i.quarryArm=l,r(fe.box,5061152,4,46,4,-44,23,-58),r(fe.box,7236186,24,13,2,-32,40,-58)}o.length&&i.fadeables.push({x:t.x,y:t.y,r:t.r,mats:o}),e.add(s)}function BM(n,e){let t=n.world.shop,i=new Ke;i.position.set(t.x,0,t.y);let s=new pe(fe.cyl,Me(6969398));s.scale.set(46,6,46),s.position.y=3,i.add(s);let r=new pe(fe.box,Me(10120764));r.scale.set(60,24,22),r.position.set(0,16,2),i.add(r);let o=new pe(fe.cone,Me(11751744));o.scale.set(52,26,52),o.position.y=56,i.add(o);for(let l of[-34,34]){let c=new pe(fe.cyl,Me(6177574));c.scale.set(3,44,3),c.position.set(l,22,8),i.add(c)}let a=new pe(new go(gt-7,gt,72),new tn({color:9885695,transparent:!0,opacity:.3,side:Rn,depthWrite:!1}));a.rotation.x=-Math.PI/2,a.position.y=1.2,i.add(a),e.add(i)}var Mf=13081716,br=Math.PI*2;function Pt(n,e,t,i,s,r,o){let a=new pe(fe.box,Me(n));return a.scale.set(e,t,i),a.position.set(s,r,o),a}function ln(n,e,t,i,s,r=1,o=1){let a=new pe(fe.sphere,Me(n));return a.scale.set(e,e*r,e*o),a.position.set(t,i,s),a}var gm={pistol:n=>n.add(Pt(2303519,10,4,3.4,11,0,0)),rifle:n=>{n.add(Pt(2303519,20,3.6,3.4,15,0,0)),n.add(Pt(4864544,5,5,3.8,7,-1,0))},shotgun:n=>{n.add(Pt(2827808,16,4.6,4,13,0,0)),n.add(Pt(5980710,5,5.5,4.2,5,-1,0))},hmg:n=>{n.add(Pt(2303519,24,5,4.4,16,0,0)),n.add(Pt(3817271,6,7,4.8,10,-3,0))},tool:n=>{n.add(Pt(5980710,13,3,3,9,0,0)),n.add(Pt(12173511,4,8,3.4,16,1,0))},rocket:n=>{n.add(Pt(3751983,22,6.5,6,14,1,0)),n.add(Pt(16751421,3,7,6.4,25,1,0))},hammer:n=>{n.add(Pt(5980710,11,3,3,8,0,0)),n.add(Pt(10133928,4,7,4.4,14,1,0))},jack:n=>{n.add(Pt(1842204,4,4,3.4,6,1,0)),n.add(Pt(13279802,11,9,5.5,13,0,0)),n.add(Pt(3817271,4,5.5,4,20,-1,0)),n.add(Pt(12173511,11,2.6,2.6,27,-2,0))}};function _m(n,e={}){let t=new Ke,i={};i.shadow=Ds(46),i.shadow.position.y=1,t.add(i.shadow),i.lower=new Ke,t.add(i.lower);for(let c of["L","R"]){let h=new Ke;h.position.set(0,12,c==="L"?-3.2:3.2);let f=Pt(3289130,4.6,12,4.6,0,-6,0);h.add(f),i.lower.add(h),i["leg"+c]=h}i.torso=Pt(n,10,14,12,0,24.5,0),t.add(i.torso),i.torsoShade=Pt(xm(n,.7),10.4,4.5,12.4,0,19,0),t.add(i.torsoShade),i.armor=Pt(9804963,11,10,13,.8,24.5,0),i.armor.visible=!1,t.add(i.armor),i.pack=Pt(4866100,4,9,8,-7,25,0),t.add(i.pack),i.armL=new Ke,i.armL.position.set(0,30,-7.4);let s=Pt(Mf,3.6,11,3.6,0,-5,0);i.armL.add(s),t.add(i.armL),i.armR=new Ke,i.armR.position.set(2,29,7.4),i.armR.add(Pt(Mf,9,3.6,3.6,4.5,0,-1.5)),i.gun=new Ke,i.armR.add(i.gun),t.add(i.armR),i.head=new Ke,i.head.position.y=38,i.head.add(ln(Mf,5.6,0,0,0));let r=new pe(fe.sphere,Me(e.hairCol??3811864));r.scale.set(5.9,4.4,5.9),r.position.y=2.2,i.head.add(r);let o=new pe(fe.cyl,Me(n));o.scale.set(5.9,1.6,5.9),o.position.y=1.2,i.head.add(o),i.band=o,i.helmet=new Ke;let a=new pe(fe.sphere,Me(10136504));a.scale.set(6.3,6.3,6.3),i.helmet.add(a);let l=Pt(1119516,3,3,9.5,4.6,-.5,0);return i.helmet.add(l),i.helmet.visible=!1,i.head.add(i.helmet),t.add(i.head),t.userData={parts:i,colHex:n,phase:Math.random()*7,setGun(c){t.userData.gunKind!==c&&(t.userData.gunKind=c,i.gun.clear(),(gm[c]||gm.pistol)(i.gun))},setArmor(c,h){i.armor.visible=c>0,c>0&&(i.armor.material=Me(c>=3?6126235:c===2?9804963:8746824)),i.helmet.visible=h>0,h>0&&(i.helmet.children[0].material=Me(h>=3?8163017:h===2?10136504:13482898))},setColor(c){t.userData.colHex!==c&&(t.userData.colHex=c,i.torso.material=Me(c),i.torsoShade.material=Me(xm(c,.7)),o.material=Me(c))},animate(c,h,f,d,u){let p=t.userData,x=Math.min(.1,Math.max(.001,c-(p.lastT??c)));p.lastT=c;let m=p.hipsCur??0,g=1,y=1;if(h>.05&&u!==null&&u!==void 0){let L=u%br;L>Math.PI&&(L-=br),L<-Math.PI&&(L+=br),Math.abs(L)>2.06&&(g=-1,y=.72,L=L>0?L-Math.PI:L+Math.PI),m=L}else h<=.05&&(m=0);let w=p.hipsCur??0,T=(m-w)%br;T>Math.PI&&(T-=br),T<-Math.PI&&(T+=br),w+=T*Math.min(1,x*14),p.hipsCur=w,i.lower.rotation.y=-w;let I=c*11+p.phase,E=Math.sin(I)*.75*h*y*g;if(i.legL.rotation.z=E,i.legR.rotation.z=-E,i.armL.rotation.z=-E*.55,t.position.y=Math.abs(Math.sin(I))*1.4*h,f&&d){i.armR.rotation.z=-.22+Math.sin(c*62)*.05;let L=Math.sin(c*57)*1.5,_=Math.sin(c*71)*1.1;t.position.y+=Math.abs(_)*.8,t.userData.judder={x:L,z:Math.cos(c*49)*1.3}}else t.userData.judder=null,f?i.armR.rotation.z=-.5+Math.sin(c*9)*.55:i.armR.rotation.z=0}},t.userData.setGun(e.gun||"pistol"),t}function xm(n,e){let t=Math.min(255,(n>>16&255)*e)|0,i=Math.min(255,(n>>8&255)*e)|0,s=Math.min(255,(n&255)*e)|0;return t<<16|i<<8|s}function ym(n,e,t,i,s,r){let o=[];for(let a of[-1,1])for(let l of[-1,1]){let c=new Ke;c.position.set(a*i,r,l*s);let h=new pe(fe.cyl,Me(e));h.scale.set(t*.16,r,t*.16),h.position.y=-r/2,c.add(h),n.add(c),o.push({pivot:c,phase:a*l>0?0:Math.PI})}return o}function vm(n,e){let t=new Ke,i={legs:[],extra:null},s={boar:[8282692,5521451],wolf:[7698047,4605773],bear:[6375471,3812380],polarbear:[14542315,11451592],alligator:[5599286,3229980],snake:[11704890,7430430],scorpion:[8278566,4664850]}[n]||[8947848,5592405],[r,o]=s,a=Ds(e*3.2);if(a.position.y=.8,t.add(a),n==="snake"){i.segs=[];for(let c=0;c<6;c++){let h=ln(c%2?o:r,e*(.55-c*.05),-c*e*.5,e*.4,0);t.add(h),i.segs.push(h)}let l=ln(r,e*.62,e*.45,e*.45,0,.8,.9);t.add(l),i.head=l}else if(n==="scorpion"){t.add(ln(o,e*.85,0,e*.4,0,.5,.8)),t.add(ln(r,e*.62,e*.2,e*.55,0,.5,.75));for(let f of[-1,1])t.add(Pt(r,e*.8,e*.2,e*.18,e*.75,e*.35,f*e*.5)),t.add(ln(o,e*.26,e*1.2,e*.35,f*e*.62));i.tail=new Ke,i.tail.position.set(-e*.7,e*.5,0);let l=0,c=0;for(let f=0;f<3;f++)l-=e*.3,c+=e*.34,i.tail.add(ln(o,e*.2,l,c,0));let h=new pe(fe.cone,Me(3810320));h.scale.set(e*.14,e*.3,e*.14),h.position.set(l+e*.16,c+e*.22,0),h.rotation.z=-1,i.tail.add(h),t.add(i.tail)}else if(n==="alligator"){let l=e*.55;t.add(ln(o,e,0,l,0,.5,.72)),t.add(ln(r,e*.82,0,l+e*.18,0,.42,.6)),t.add(ln(r,e*.5,e*1.15,l,0,.5,.62)),t.add(Pt(o,e*.9,e*.16,e*.5,e*1.25,l-e*.1,0)),t.add(ln(o,e*.62,-e*1.05,l,0,.45,.6)),t.add(ln(o,e*.4,-e*1.7,l*.9,0,.45,.55));for(let c=0;c<4;c++){let h=new pe(fe.cone,Me(o));h.scale.set(e*.12,e*.25,e*.12),h.position.set(-e*.6+c*e*.42,l+e*.42,0),t.add(h)}i.legs=ym(t,o,e,e*.55,e*.5,l*.8)}else{let l=n==="bear"||n==="polarbear"?1.18:1,c=e*.78*l;t.add(ln(o,e*1.05*l,0,c,0,.78,.78)),t.add(ln(r,e*.92*l,0,c+e*.12,0,.72,.7)),l>1&&t.add(ln(r,e*.7,-e*.25,c+e*.55,0));let h=e*(n==="wolf"?.46:.55),f=new Ke;if(f.position.set(e*.95*l,c+e*.18,0),f.add(ln(r,h,0,0,0)),n==="wolf"){f.add(ln(o,h*.55,h*.8,-h*.15,0,.7,.6));for(let d of[-1,1]){let u=new pe(fe.cone,Me(o));u.scale.set(h*.3,h*.6,h*.3),u.position.set(-h*.3,h*.85,d*h*.5),f.add(u)}}else if(n==="boar"){f.add(ln(o,h*.5,h*.85,-h*.2,0,.7,.8));for(let d of[-1,1]){let u=new pe(fe.cone,Me(15261903));u.scale.set(h*.12,h*.4,h*.12),u.position.set(h*.9,-h*.25,d*h*.4),u.rotation.z=.7,f.add(u)}}else for(let d of[-1,1])f.add(ln(o,h*.28,-h*.2,h*.85,d*h*.6));t.add(f),i.head=f,i.legs=ym(t,o,e*l,e*.5*l,e*.42*l,c*.85)}return t.userData={...i,phase:Math.random()*7,animate(l,c){let h=l*9+t.userData.phase;for(let f of i.legs)f.pivot.rotation.z=Math.sin(h+f.phase)*.55*c;if(i.segs)for(let f=0;f<i.segs.length;f++)i.segs[f].position.z=Math.sin(l*7-f*.8)*e*.3*(.4+c);i.tail&&(i.tail.rotation.z=Math.sin(l*3)*.08),i.head&&!i.segs&&(i.head.rotation.z=Math.sin(l*2.2+t.userData.phase)*.06)}},t}var Mm=Math.PI*2,zM={0:"tool",1:"pistol",2:"rifle",3:"hmg",4:"rocket",5:"hammer",6:"rifle",7:"shotgun",8:"hmg"},hs=class{constructor(e,t){this.scene=e,this.make=t,this.map=new Map,this.seen=new Set,this.miss=new Map}get(e,...t){this.seen.add(e);let i=this.map.get(e);return i||(i=this.make(...t),this.map.set(e,i),this.scene.add(i)),i.visible=!0,i}sweep(){for(let[e,t]of this.map)if(this.seen.has(e))this.miss.delete(e);else{t.visible=!1;let i=(this.miss.get(e)||0)+1;i>300?(this.scene.remove(t),this.map.delete(e),this.miss.delete(e)):this.miss.set(e,i)}this.seen.clear()}};function bm(n,e){let t=new hs(e,(J,ee)=>_m(J,{gun:ee})),i=new hs(e,(J,ee)=>vm(J,ee)),s=new hs(e,J=>{let ee=new Ke,te=new pe(fe.sphere,Me(J));te.scale.set(20,12,14),te.position.y=12,ee.add(te);let se=new pe(fe.box,Me(2896680));se.scale.set(26,5,5),se.position.set(-22,14,0),ee.add(se);let F=new pe(fe.box,r());F.scale.set(52,1.5,5),F.position.y=22,ee.add(F);let v=Ds(60);return v.position.y=1,ee.add(v),ee.userData={rotor:F,sh:v},ee});function r(){return Me(1645589)}let o=new hs(e,J=>{let ee=new Ke,te=new pe(fe.sphere,Me(J));te.scale.set(34,17,22),te.position.y=16,ee.add(te);let se=new pe(fe.box,Me(2501666));se.scale.set(40,7,7),se.position.set(-36,20,0),ee.add(se);let F=new pe(fe.box,r());F.scale.set(84,2,7),F.position.y=30,ee.add(F);let v=Ds(96);return v.position.y=1,ee.add(v),ee.userData={rotor:F,sh:v},ee}),a=new hs(e,J=>J()),l=new hs(e,(J,ee)=>cs(J,ee)),c=700,h=new Wt(fe.quad,new tn({color:2366482,transparent:!0,opacity:.34,depthWrite:!1,side:Rn}),c);h.frustumCulled=!1,e.add(h);let f=new dt,d=new dt,u=new z,p=64,x=[],m=new Wt(fe.box,new Wn({color:16777215,flatShading:!0}),p);m.frustumCulled=!1,e.add(m);let g=new dt,y=new Je,w={wood:9069104,stone:8685967,metal:13145412},T=90,I=[],E=new Gt,L=new Float32Array(T*3);E.setAttribute("position",new Kt(L,3));let _=new Ui(E,new ui({color:16771491,size:6,transparent:!0,opacity:.95,blending:Fn,depthWrite:!1,sizeAttenuation:!0}));_.frustumCulled=!1,e.add(_);function M(J){let ee=J.jack?5:3;for(let te=0;te<ee;te++){x.length>=p&&x.shift();let se=Math.random()*Mm;x.push({x:J.x+Math.cos(se)*6,y:J.y+Math.sin(se)*6,h:18+Math.random()*14,vx:Math.cos(se)*(40+Math.random()*70),vy:Math.sin(se)*(40+Math.random()*70),vh:60+Math.random()*90,life:.85,rot:Math.random()*7,vrot:(Math.random()-.5)*14,s:2.2+Math.random()*(J.jack?3.4:2.2),col:w[J.kind]||9069104})}if(J.jack)for(let te=0;te<7;te++){I.length>=T&&I.shift();let se=Math.random()*Mm;I.push({x:J.x,y:J.y,h:16,vx:Math.cos(se)*(90+Math.random()*160),vy:Math.sin(se)*(90+Math.random()*160),vh:40+Math.random()*120,life:.22+Math.random()*.14})}}function S(J){for(let te=x.length-1;te>=0;te--){let se=x[te];if(se.life-=J,se.life<=0){x.splice(te,1);continue}se.vh-=320*J,se.x+=se.vx*J,se.y+=se.vy*J,se.h+=se.vh*J,se.h<1.5&&(se.h=1.5,se.vh*=-.35,se.vx*=.6,se.vy*=.6),se.rot+=se.vrot*J}x.forEach((te,se)=>{g.makeRotationY(te.rot).scale(new z(te.s,te.s,te.s)).setPosition(te.x,te.h,te.y),m.setMatrixAt(se,g),y.setHex(te.col),m.setColorAt(se,y)}),m.count=x.length,m.instanceMatrix.needsUpdate=!0,m.instanceColor&&(m.instanceColor.needsUpdate=!0);let ee=0;for(let te=I.length-1;te>=0;te--){let se=I[te];if(se.life-=J,se.life<=0){I.splice(te,1);continue}se.vh-=260*J,se.x+=se.vx*J,se.y+=se.vy*J,se.h=Math.max(1,se.h+se.vh*J)}for(let te of I){if(ee>=T)break;L[ee*3]=te.x,L[ee*3+1]=te.h,L[ee*3+2]=te.y,ee++}E.setDrawRange(0,ee),E.attributes.position.needsUpdate=!0}let C=1200,N=new Gt,V=new Float32Array(C*3),Y=new Float32Array(C*3);N.setAttribute("position",new Kt(V,3)),N.setAttribute("color",new Kt(Y,3));let U=new Ui(N,new ui({size:7,vertexColors:!0,transparent:!0,opacity:.9,sizeAttenuation:!0,depthWrite:!1}));U.frustumCulled=!1,e.add(U);let B=new Map;function q(J){let ee=B.get(J);if(!ee){ee=new Je;try{if(J.startsWith("rgba")){let te=J.match(/rgba?\(([\d.]+),\s*([\d.]+),\s*([\d.]+)/);te&&ee.setRGB(+te[1]/255,+te[2]/255,+te[3]/255)}else ee.set(J)}catch{ee.setRGB(.7,.7,.7)}B.set(J,ee)}return ee}function ae(J,ee,te,se,F,v={}){J.position.set(ee,0,te),J.rotation.y=-se;let D=J.userData;D.setColor(F),v.gun&&D.setGun(v.gun),D.setArmor(v.bodyArmor||0,v.facemask||0);let R=null;(v.vx||v.vy)&&Math.hypot(v.vx,v.vy)>18&&(R=Math.atan2(v.vy,v.vx)-se),D.animate(n.t,v.moveAmt??0,!!v.gathering,!!v.jack,R),D.judder&&(J.position.x+=D.judder.x,J.position.z+=D.judder.z)}return{sync(J,ee){for(let v of n.units){if(v.dead||v.eliminated)continue;if(v.copter&&!v.copter.destroyed&&ee.inView(v.copter.x,v.copter.y,200)){let W=s.get(v.copter,parseInt(v.col.slice(1),16)),ie=v.flying&&v.state==="trade";W.position.set(v.copter.x,ie?70:0,v.copter.y),W.rotation.y=-(v.copter.angle||0),W.userData.rotor.rotation.y=v.copter.rotor||0,W.userData.sh.position.y=ie?-68:1}if(v.flying||!ee.inView(v.x,v.y,200))continue;let D=parseInt((v.ally?"#7ec850":v.col).slice(1),16),R=t.get(v,D,v.gun),k=Math.min(1,Math.hypot(v.vx,v.vy)/120);ae(R,v.x,v.y,v.angle,D,{gun:v.gathering?v.jack?"jack":"tool":v.gun,moveAmt:k,gathering:v.gathering,jack:v.jack,bodyArmor:v.bodyArmor,facemask:v.facemask,vx:v.vx,vy:v.vy})}let te=n.player;if(!te.inCopter){let v=t.get(te,8030800,"pistol"),D=te.moving?1:0,R=n.slot===0&&n.jackhammer;ae(v,te.x,te.y,te.angle,te.hurt>0?12876382:8030800,{gun:n.slot===0&&n.jackhammer?"jack":zM[n.slot]||"pistol",moveAmt:D,gathering:te.swing>0&&n.slot===0,jack:R,bodyArmor:te.bodyArmor,facemask:te.facemask,vx:te.vx,vy:te.vy}),te.dead&&(v.visible=!1)}if(n.copter&&!n.copter.destroyed){let v=s.get(n.copter,6121548),D=te.inCopter;v.position.set(n.copter.x,D?80:0,n.copter.y),v.rotation.y=-(n.copter.angle||0),v.userData.rotor.rotation.y=(n.copter.rotor||0)*3,v.userData.sh.position.y=D?-78:1}for(let v of n.guards){if(v.dead||!ee.inView(v.x,v.y,150))continue;let D=t.get(v,12410412,"rifle"),R=Math.min(1,Math.hypot(v.vx||0,v.vy||0)/90+.2);ae(D,v.x,v.y,v.angle,12410412,{gun:"rifle",moveAmt:R,facemask:1,vx:v.vx,vy:v.vy})}for(let v of n.animals){if(v.dead||!ee.inView(v.x,v.y,150))continue;let D=i.get(v,v.type,v.r),R=0;v.type==="alligator"&&n.world.lakeAt(v.x,v.y)&&(R=v.r*.62),D.userData.sinkY=(D.userData.sinkY??0)+(R-(D.userData.sinkY??0))*Math.min(1,J*5),D.position.set(v.x,-D.userData.sinkY,v.y);let k=Math.hypot(v.vx||0,v.vy||0),W=k>2?Math.atan2(v.vy,v.vx):v.dir;D.rotation.y=-W,D.userData.animate(n.t,Math.min(1,k/80))}for(let v of n.transports){let D=v.owner===Ve?8308816:parseInt((n.teams.find(W=>W.owner===v.owner)||{col:"#888888"}).col.slice(1),16),R=o.get(v,D),k=v.state==="fly"||v.state==="return"||v.riders.length>0;R.position.set(v.x,k?110:4,v.y),R.rotation.y=-v.angle,R.userData.rotor.rotation.y=v.rotor,R.userData.sh.position.y=k?-106:1}for(let v of n.trains){let D=a.get(v,()=>{let R=new Ke,k=new pe(fe.box,Me(3817544));k.scale.set(48,30,26),k.position.y=15,R.add(k);for(let ie of[-46,-90]){let me=new pe(fe.box,Me(5917238));me.scale.set(38,24,24),me.position.set(ie,12,0),R.add(me)}let W=cs(16771491,40);return W.position.set(28,14,0),R.add(W),R});D.position.set(v.x,0,v.y),D.rotation.y=-v.ang}for(let v of n.convoys){if(v.dead)continue;let D=a.get(v,()=>{let R=new Ke,k=new pe(fe.box,Me(5660746));k.scale.set(68,24,36),k.position.y=12,R.add(k);let W=new Ke;W.position.y=28;let ie=new pe(fe.cyl,Me(3752499));ie.scale.set(12,9,12),W.add(ie);let me=new pe(fe.box,Me(1250830));me.scale.set(32,5,5),me.position.x=20,W.add(me),R.add(W),R.userData={turret:W};let we=Ds(90);return we.position.y=1,R.add(we),R});D.position.set(v.x,0,v.y),D.rotation.y=-v.ang,D.userData.turret.rotation.y=-(v.taim-v.ang);for(let R of v.guards){if(R.dead)continue;let k=t.get(R,7305806,"rifle");ae(k,R.x,R.y,R.angle,7305806,{gun:"rifle",moveAmt:.6,facemask:2})}}if(n.patrol){let v=n.patrol,D=a.get("patrol",()=>{let R=new Ke,k=new pe(fe.sphere,Me(4740158));k.scale.set(32,15,18),R.add(k);let W=new pe(fe.box,Me(3357744));W.scale.set(36,6,6),W.position.x=-34,R.add(W);let ie=new pe(fe.box,r());return ie.scale.set(96,2,8),ie.position.y=14,R.add(ie),R.userData={rotor:ie},R});D.position.set(v.x,150,v.y),D.rotation.y=-v.angle,D.userData.rotor.rotation.y=v.rotor}if(n.plane){let v=a.get("plane",()=>{let D=new Ke,R=new pe(fe.sphere,Me(8291985));R.scale.set(28,8,8),D.add(R);let k=new pe(fe.box,Me(7041660));return k.scale.set(10,2,52),D.add(k),D});v.position.set(n.plane.x,320,n.plane.y),v.rotation.y=n.plane.vx<0?Math.PI:0}if(n.airdrop){let v=n.airdrop,D=a.get("airdrop",()=>{let k=new Ke,W=new pe(fe.box,Me(6120530));W.scale.set(30,24,30),W.position.y=12,k.add(W);let ie=new pe(fe.box,Me(16766827));ie.scale.set(32,5,32),ie.position.y=12,k.add(ie);let me=new pe(fe.cone,Me(12079162,{transparent:!0,opacity:.9}));return me.scale.set(34,26,34),me.position.y=56,k.add(me),k.userData={chute:me},k}),R=v.fall<1?(1-v.fall)*320:0;D.position.set(v.x+(v.fall<1?Math.sin(v.sway)*12:0),R,v.fall<1?v.gy:v.y),D.userData.chute.visible=v.fall<1}if(n.lockedCrate){let v=n.lockedCrate,D=a.get("crate",()=>{let k=new Ke,W=new pe(fe.box,Me(3948871));W.scale.set(40,26,30),W.position.y=13,k.add(W);let ie=cs(16758858,22);return ie.position.set(13,26,-8),k.add(ie),k.userData={light:ie},k});D.position.set(v.x,0,v.y);let R=v.blink%.8<.4;D.userData.light.visible=R,D.userData.light.material.color.setHex(v.started?16758858:13777960)}for(let v of n.bullets){let D=a.get(v,()=>{let k=new Ke,W=new pe(fe.box,new tn({color:16771491}));W.scale.set(34,3.6,3.6),k.add(W);let ie=new pe(fe.box,new tn({color:16771491,transparent:!0,opacity:.55,blending:Fn,depthWrite:!1}));return ie.scale.set(40,8,8),k.add(ie),k.userData={core:W,halo:ie},k});D.position.set(v.x,18,v.y),D.rotation.y=-Math.atan2(v.vy,v.vx);let R=v.col==="hmg"?16734762:v.ricochet?8837375:16771491;D.userData.core.material.color.setHex(R),D.userData.halo.material.color.setHex(R)}for(let v of n.rockets){let D=a.get(v,()=>{let R=new Ke,k=new pe(fe.cone,Me(3751983));k.scale.set(5,18,5),k.rotation.z=-Math.PI/2,R.add(k);let W=cs(16751421,34);return W.position.x=-12,R.add(W),R});D.position.set(v.x,18,v.y),D.rotation.y=-Math.atan2(v.vy,v.vx)}for(let v of n.grenades)a.get(v,()=>{let R=new pe(fe.sphere,Me(2898466));return R.scale.set(6,6,6),R}).position.set(v.x,8+Math.abs(Math.sin(v.bob*6))*8,v.y);for(let v of n.satchels){let D=a.get(v,()=>{let R=new pe(fe.box,Me(3814444));return R.scale.set(14,9,12),R.position.y=4,R});D.position.set(v.x,4,v.y),D.visible=Math.sin(n.t*18)>-.6}for(let v of n.loot){if(!ee.inView(v.x,v.y,100))continue;let D=a.get(v,()=>{let k=new pe(fe.box,Me(14081248));return k.scale.set(9,9,9),k}),R={wood:12158022,stone:11186616,metal:15245902,scrap:14081248,ammo:16769162,rocket:16751194,sniper:12575743,satchel:13154442,gun:12896701};D.material=Me(R[v.kind]||14081248),D.position.set(v.x,8+Math.sin(v.bob*3)*2.5,v.y),D.rotation.y=v.bob}for(let v of n.fires){let D=l.get(v,16747050,90);D.position.set(v.x,16,v.y);let R=.8+Math.sin(n.t*11+v.x)*.25;D.scale.set(90*R,110*R,1)}for(let v of n.wrecks)a.get(v,()=>{let R=new Ke,k=new pe(fe.box,Me(2499614));k.scale.set(30,14,20),k.position.y=7,k.rotation.y=.5,R.add(k);let W=cs(16755260,60);return W.position.y=14,R.add(W),R}).position.set(v.x,0,v.y);for(let v of n.scorch){let D=a.get(v,()=>{let R=new pe(new Fi(1,12),new tn({color:1314828,transparent:!0,opacity:.45,depthWrite:!1}));return R.rotation.x=-Math.PI/2,R.position.y=.8,R});D.position.set(v.x,.8,v.y),D.scale.set(v.r,v.r,1)}for(let v of n.flashes){let D=l.get(v,16757322,v.r*2.4);D.position.set(v.x,20,v.y);let R=v.life/v.max;D.material.opacity=R,D.scale.set(v.r*(2.6-R),v.r*(2.6-R),1)}if(n.muzzle){let v=l.get("muzzle",16766827,46);v.position.set(n.muzzle.x,18,n.muzzle.y),v.material.opacity=n.muzzle.t/.08}for(let v of n.events)v.type==="harvest"&&ee.inView(v.x,v.y,300)&&M(v);S(J);let se=0;for(let v of n.footprints){if(se>=c)break;let D=1-v.t/10;if(D<.06||!ee.inView(v.x,v.y,60))continue;let R=6.2*(.45+.55*D);f.makeRotationY(-v.a),d.makeRotationX(-Math.PI/2),f.multiply(d),u.set(R,R*.55,1),f.scale(u),f.setPosition(v.x,.45+se%9*.025,v.y),h.setMatrixAt(se,f),se++}h.count=se,h.instanceMatrix.needsUpdate=!0;let F=0;for(let v of n.particles){if(F>=C)break;V[F*3]=v.x,V[F*3+1]=10+(1-v.life/v.max)*14,V[F*3+2]=v.y;let D=q(v.col),R=Math.max(0,v.life/v.max);Y[F*3]=D.r*R,Y[F*3+1]=D.g*R,Y[F*3+2]=D.b*R,F++}N.setDrawRange(0,F),N.attributes.position.needsUpdate=!0,N.attributes.color.needsUpdate=!0,t.sweep(),i.sweep(),s.sweep(),o.sweep(),a.sweep(),l.sweep()}}}function wm(n,e){let i=new Gt,s=new Float32Array(700*3),r=[];for(let m=0;m<700;m++)r.push({x:Math.random(),z:Math.random(),y:Math.random(),sp:.4+Math.random()*.8});i.setAttribute("position",new Kt(s,3));let o=new ui({color:12374764,size:5,transparent:!0,opacity:0,depthWrite:!1}),a=new Ui(i,o);a.frustumCulled=!1,e.add(a);let l=[],c=()=>{if(l.length||!n.clouds)return;let m=new Rs(1,0);for(let g of n.clouds){let y=new Wn({color:16251644,emissive:9279908,flatShading:!0,transparent:!0,opacity:.5,depthWrite:!1}),w=new Ke;g.puffs.forEach((I,E)=>{let L=new pe(m,y),_=I.r*.45*(g.heavy?1:.85);L.scale.set(_,_*.45,_*.72),L.position.set(I.dx*.55,E*37%17-6,I.dy*.55),L.rotation.y=E*1.7,w.add(L)}),e.add(w);let T=new pe(new Fi(g.r*1.05,14),new tn({map:vf(),transparent:!0,opacity:.5*g.op,depthWrite:!1}));T.rotation.x=-Math.PI/2,T.scale.set(1.35,1,1),e.add(T),l.push({cl:g,g:w,sh:T,matC:y})}},h=[],f=()=>{if(!(h.length||!n.fogBanks))for(let m of n.fogBanks){let g=new es({map:_f(),color:14081766,transparent:!0,opacity:0,depthWrite:!1}),y=new Es(g);y.scale.set(m.r*3,m.r*1.6,1),e.add(y),h.push({f:m,s:y})}},d=new Gt,u=new Float32Array(120);d.setAttribute("position",new Kt(u,3));let p=new ui({color:14221190,size:9,transparent:!0,opacity:.9,blending:Fn,depthWrite:!1,sizeAttenuation:!0}),x=new Ui(d,p);return x.frustumCulled=!1,e.add(x),{sync(m,g){c(),f();let y=n.weather,w=(g.cx+n.world.biomeRidge(g.cy))/ce.w,T=.085,I=bi((w-(2/3-T))/(2*T)),E=bi((w-(1/3-T))/(2*T))*(1-I),L=y.rain*(E+I);if(o.opacity=Math.min(.75,L*.8),o.color.setHex(I>E?16054524:12374764),o.size=I>E?7:4.5,L>.02){let C=I>E?.12:.55;for(let N=0;N<700;N++){let V=r[N],Y=(V.y+n.t*V.sp*C)%1;s[N*3]=g.cx+(V.x-.5)*2*1700+n.wind*60*Y,s[N*3+1]=700*(1-Y),s[N*3+2]=g.cy+(V.z-.5)*2*1700}i.attributes.position.needsUpdate=!0}let _=g.lightLevel();for(let{cl:S,g:C,sh:N,matC:V}of l){C.position.set(S.x,1250,S.y),N.position.set(S.x+64,2.5,S.y+86);let Y=S.x-g.cx,U=S.y-g.cy,B=Math.sqrt(Y*Y+U*U),q=(B<700?.08:B<1400?.08+(B-700)/700*.42:.5)*S.op;V.opacity+=(q-V.opacity)*Math.min(1,m*4),V.color.setScalar(.82+_*.18),N.material.opacity=(.32+.26*_)*S.op}for(let{f:S,s:C}of h){let N=n.world.biomeAt(S.x,S.y)==="winter";C.material.opacity=N?0:Math.min(.5,y.fog*S.dens*.5),C.position.set(S.x,26,S.y)}let M=0;if(n.fireflies){let S=1-g.lightLevel();p.opacity=.35+.5*S+.3*Math.min(1,y.fog);for(let C of n.fireflies){if(M>=40)break;n.world.biomeAt(C.x,C.y)==="jungle"&&(u[M*3]=C.x,u[M*3+1]=16+Math.sin(C.ph)*8,u[M*3+2]=C.y,M++)}d.attributes.position.needsUpdate=!0}d.setDrawRange(0,M)}}}function Tm(n,e,t){let i=document.createElement("canvas");i.id="overlay",i.style.cssText="position:fixed;inset:0;pointer-events:none;z-index:5",document.body.appendChild(i);let s=i.getContext("2d");function r(){i.width=e.VW,i.height=e.VH}r(),addEventListener("resize",r);let o=(h,f,d=0)=>t.worldToScreen(h,f,d);function a(h,f,d,u,p){s.strokeStyle=u,s.lineWidth=2,p&&s.setLineDash(p),s.beginPath();for(let x=0;x<=36;x++){let m=x/36*Math.PI*2,g=o(h+Math.cos(m)*d,f+Math.sin(m)*d);x?s.lineTo(g.x,g.y):s.moveTo(g.x,g.y)}s.stroke(),s.setLineDash([])}return{draw(){let h=e.VW,f=e.VH;s.clearRect(0,0,h,f);let d=n.t;s.font="bold 13px Trebuchet MS",s.textAlign="center";for(let u of e.godView?[]:n.floats){let p=o(u.ox,u.y,40);if(p.behind)continue;let x=Math.max(0,u.life/u.max);s.globalAlpha=x,s.fillStyle="#000",s.fillText(u.text,p.x+1,p.y-u.lift+1),s.fillStyle=u.col,s.fillText(u.text,p.x,p.y-u.lift)}if(s.globalAlpha=1,n.buildMode&&!e.godView){let m=function(){for(let g in x.cost)if((n.inv[g]||0)<x.cost[g])return!1;return!0},u=Or(n,n.cmd.mx,n.cmd.my),p=Sc(n,Ve,n.buildPiece,u)&&m();s.fillStyle=p?"rgba(180,220,120,.4)":"rgba(210,80,60,.45)",s.strokeStyle=p?"#c4d66a":"#d2553c",s.lineWidth=2;let x=Zt[n.buildPiece];if(x.cat==="cell"){let g=u.gx*64,y=u.gy*64;s.beginPath(),[[0,0],[64,0],[64,64],[0,64]].forEach(([w,T],I)=>{let E=o(g+w,y+T);I?s.lineTo(E.x,E.y):s.moveTo(E.x,E.y)}),s.closePath(),s.fill(),s.stroke()}else{let g=St(u.key,{type:n.buildPiece,rot:n.buildRot&1}),y=o(g[0],g[1]),w=o(g[2],g[3]);s.lineWidth=8,s.globalAlpha=.75,s.beginPath(),s.moveTo(y.x,y.y),s.lineTo(w.x,w.y),s.stroke(),s.globalAlpha=1}}if(!e.godView&&!n.player.inCopter){for(let[u,p]of n.deploys){if(p.type!=="cupboard"||p.owner!==Ve)continue;let[x,m]=u.split(",").map(Number);a(x*64+32,m*64+32,Ut,"rgba(126,200,80,0.3)",[10,8])}if(!n.shopOpen&&!n.storeOpen){let u=Math.floor(n.cmd.mx/64),p=Math.floor(n.cmd.my/64),x=n.deploys.get(u+","+p);x&&x.type==="turret"&&a(u*64+32,p*64+32,zo[x.tier||1].range,"rgba(240,156,72,0.3)",[6,7]);let m=l(u,p);if(m){let g=o(m.x,m.y,50),y=Math.max(0,m.hp/m.max);s.fillStyle="rgba(0,0,0,.7)",s.fillRect(g.x-18,g.y-8,36,5),s.fillStyle=y>.5?"#7bbf4f":y>.25?"#d8b24a":"#c0432f",s.fillRect(g.x-18,g.y-8,36*y,5)}}}if(e.debugPaths){s.font="bold 10px Trebuchet MS";for(let u of n.units){if(u.dead||u.eliminated||u.flying||!t.inView(u.x,u.y,600))continue;let p=u.ally?"#7ec850":u.col;if(u.path&&u.pathI<u.path.length){s.strokeStyle=p,s.lineWidth=1.5,s.globalAlpha=.8,s.beginPath();let m=o(u.x,u.y);s.moveTo(m.x,m.y);for(let g=u.pathI;g<u.path.length;g++)m=o(u.path[g].x,u.path[g].y),s.lineTo(m.x,m.y);s.stroke(),s.globalAlpha=1}let x=o(u.x,u.y,56);s.fillStyle="#000",s.fillText(u.act||u.state,x.x+1,x.y+1),s.fillStyle=p,s.fillText(u.act||u.state,x.x,x.y)}}if(c(n.airdrop&&{x:n.airdrop.x,y:n.airdrop.fall<1?n.airdrop.gy:n.airdrop.y},"AIRDROP","#ffd76b","\u2708"),n.quarry){let u=n.teams.find(p=>p.owner===n.quarry.owner);c(n.quarry,"QUARRY",n.quarry.owner===Ve?"#7ec850":u?u.col:"#b9b39d","Q")}if(n.lockedCrate){let u=n.lockedCrate;c(u,u.started?"CRATE "+Math.ceil(u.t)+"s":"LOCKED CRATE","#ffb84a","C")}if(e.godView){s.font="bold 9px Trebuchet MS";for(let p of n.teams)for(let x of p.bases){if(x.dead)continue;let m=o(x.hx,x.hy);s.fillStyle=p.col,s.fillRect(m.x-6,m.y-6,12,12),s.fillStyle="#fff",s.fillText(String(p.id+1),m.x,m.y+3.5)}for(let p of n.units){if(p.dead||p.eliminated)continue;let x=o(p.x,p.y);s.fillStyle=p.ally?"#7ec850":p.col,s.beginPath(),s.arc(x.x,x.y,p.primary?3.4:2.4,0,7),s.fill()}for(let p of n.raids){let x=o(p.x,p.y);s.fillStyle=`rgba(255,82,56,${.35+.4*(p.t/60)})`,s.beginPath(),s.arc(x.x,x.y,7+3*Math.sin(d*6),0,7),s.fill()}if(n.deathMark){let p=o(n.deathMark.x,n.deathMark.y);s.fillStyle="#000",s.beginPath(),s.arc(p.x,p.y,8,0,7),s.fill(),s.fillStyle="#fff",s.beginPath(),s.arc(p.x,p.y-1,5,0,7),s.fill()}let u=o(n.player.x,n.player.y);s.strokeStyle="#7ec850",s.lineWidth=2.5,s.beginPath(),s.arc(u.x,u.y,11+3*Math.sin(d*6),0,7),s.stroke(),s.font="bold 11px Trebuchet MS",s.fillStyle="#7ec850",s.fillText("YOU",u.x,u.y-18),s.fillStyle="#d8d0ba",s.font="bold 14px Trebuchet MS",s.fillText("Click anywhere on the map to travel there",h/2,f-66)}else{let u=e.mouseSX,p=e.mouseSY;if(u!==void 0){s.strokeStyle="rgba(225,235,195,.9)",s.lineWidth=3,s.lineCap="round";for(let[x,m]of[[1,0],[-1,0],[0,1],[0,-1]])s.beginPath(),s.moveTo(u+x*6,p+m*6),s.lineTo(u+x*15,p+m*15),s.stroke()}}if(n.raidAlarm){let u=Math.min(1,n.raidAlarm.t/1.5);s.fillStyle=`rgba(180,30,20,${.14*u})`,s.fillRect(0,0,h,f),s.textAlign="center",s.font="bold 22px Trebuchet MS",s.fillStyle="rgba(0,0,0,.7)",s.fillText("BASE UNDER ATTACK",h/2+2,54),s.fillStyle=`rgba(255,${80+110*(.5+.5*Math.sin(d*8))},55,${u})`,s.fillText("BASE UNDER ATTACK",h/2,52)}n.player.hurt>0&&(s.fillStyle=`rgba(150,28,18,${n.player.hurt*.4})`,s.fillRect(0,0,h,f)),n.player.dead&&(s.fillStyle="rgba(10,6,4,.55)",s.fillRect(0,0,h,f),s.textAlign="center",s.fillStyle="#e6d9b8",s.font="bold 44px Trebuchet MS",s.fillText("YOU DIED",h/2,f/2-4),s.fillStyle="#b9a06f",s.font="15px Trebuchet MS",s.fillText("respawning\u2026",h/2,f/2+24)),s.textAlign="left",s.font="bold 14px Trebuchet MS",n.elims.forEach((u,p)=>{let x=Math.min(1,u.t/3);s.globalAlpha=x,s.fillStyle="rgba(0,0,0,.5)",s.fillRect(h/2-130,92+p*24,264,20),s.fillStyle="#e2664a",s.fillText(u.text,h/2-122,106+p*24)}),s.globalAlpha=1,s.textAlign="center"}};function l(h,f){let d=n.deploys.get(h+","+f);if(d)return{x:h*64+32,y:f*64+32,hp:d.hp,max:d.max};let u=n.structures.get(h+","+f);if(u)return{x:h*64+32,y:f*64+32,hp:u.hp,max:u.max};for(let p of["V,"+h+","+f,"V,"+(h+1)+","+f,"H,"+h+","+f,"H,"+h+","+(f+1)]){let x=n.walls.get(p);if(!x)continue;let m=St(p,x),g=(m[0]+m[2])/2,y=(m[1]+m[3])/2;if(Math.hypot(n.cmd.mx-g,n.cmd.my-y)<16)return{x:g,y,hp:x.hp,max:x.max}}return null}function c(h,f,d,u){if(!h)return;let p=o(h.x,h.y),x=e.VW,m=e.VH;if(s.textAlign="center",!p.behind&&p.x>0&&p.x<x&&p.y>0&&p.y<m){if(e.godView)return;s.font="bold 11px Trebuchet MS",s.fillStyle="rgba(0,0,0,.7)",s.fillText(f,p.x+1,p.y-49),s.fillStyle=d,s.fillText(f,p.x,p.y-50)}else{let g=Math.max(54,Math.min(x-54,p.x)),y=Math.max(54,Math.min(m-54,p.behind?m-54:p.y));s.fillStyle=d,s.globalAlpha=.92,s.beginPath(),s.arc(g,y,14,0,7),s.fill(),s.globalAlpha=1,s.fillStyle="#1c1812",s.font="bold 13px Trebuchet MS",s.fillText(u,g,y+4.5)}}}function Am(n,e,t,i){let s={},r=e.canvas,o=(l,c)=>{let h=t.screenToWorld(l,c);n.cmd.mx=h.x,n.cmd.my=h.y,e.mouseSX=l,e.mouseSY=c};addEventListener("keydown",l=>{let c=l.key.toLowerCase();if(n.storeOpen){(c==="escape"||c==="e")&&(n.storeOpen=null,i.closeModals()),l.preventDefault();return}if(n.shopOpen){(c==="escape"||c==="e")&&(n.shopOpen=!1,i.closeModals()),l.preventDefault();return}s[c]=!0,a(),c==="e"&&Bd(n),c==="g"&&!n.player.inCopter&&Wd(n),c==="q"&&(n.buildMode?Em(n,1):n.player.inCopter||Gd(n)),c==="t"&&!n.buildMode&&!n.player.inCopter&&Bc(n,n.cmd.mx,n.cmd.my),/^Digit[1-9]$|^Numpad[1-9]$/.test(l.code)&&!n.player.inCopter&&Fr(n,+l.code.slice(-1)-1),c==="b"&&!n.player.inCopter&&Fr(n,n.buildMode?0:5),c==="r"&&(n.buildMode?n.buildRot=(n.buildRot+1)%4:Hc(n)),c==="u"&&Vd(n),["w","a","s","d"," "].includes(c)&&l.preventDefault()}),addEventListener("keyup",l=>{s[l.key.toLowerCase()]=!1,a()}),addEventListener("blur",()=>{for(let l in s)s[l]=!1;a(),n.cmd.fireHeld=!1});function a(){n.cmd.up=!!s.w,n.cmd.down=!!s.s,n.cmd.left=!!s.a,n.cmd.right=!!s.d,n.cmd.run=!!s.shift}addEventListener("wheel",l=>{n.buildMode&&!n.shopOpen&&!n.storeOpen&&(Em(n,l.deltaY>0?1:-1),l.preventDefault())},{passive:!1}),r.addEventListener("mousemove",l=>{let c=r.getBoundingClientRect();o(l.clientX-c.left,l.clientY-c.top)}),r.addEventListener("mousedown",l=>{let c=r.getBoundingClientRect();if(o(l.clientX-c.left,l.clientY-c.top),l.button===0){if(e.godView){HM(n,e);return}if(n.cmd.fireHeld=!0,n.buildMode)zd(n);else if(!n.shopOpen&&!n.storeOpen){let h=n.slot;ta(n)}}else l.button===2&&n.buildMode&&Hd(n)}),addEventListener("mouseup",()=>{n.cmd.fireHeld=!1}),r.addEventListener("contextmenu",l=>l.preventDefault()),setInterval(()=>{e.mouseSX!==void 0&&o(e.mouseSX,e.mouseSY)},50)}function Em(n,e){let t=ds.indexOf(n.buildPiece);n.buildPiece=ds[(t+e+ds.length)%ds.length]}function HM(n,e){let t=n.cmd.mx,i=n.cmd.my;t=nt(t,Yt,13824-Yt),i=nt(i,Yt,9216-Yt);for(let s=0;s<24&&Mt(n,t,i,Yt);s++)t+=(Math.random()*2-1)*40,i+=(Math.random()*2-1)*40;n.player.x=t,n.player.y=i,n.player.inCopter=!1,e.godView=!1,document.getElementById("mapbtn").classList.remove("on"),document.getElementById("mapbtn").textContent="Map View",n.tip={text:"arrived",t:1.2}}var VM={tool:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 20l7-7"/><path d="M14 4l6 6-5 5-6-6z" fill="currentColor"/></svg>',pistol:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 8h16v4h-6l-1 5h-4l1-5H6a3 3 0 0 1-3-3z"/></svg>',rifle:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M1 11h18l4-2v3l-4 1h-5l-1 5h-3l1-5H1z"/></svg>',minigun:'<svg viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="7" width="14" height="3"/><rect x="2" y="11" width="14" height="3"/><rect x="2" y="15" width="14" height="3"/><rect x="15" y="6" width="6" height="13" rx="2"/></svg>',rocket:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M2 10h13l5 2-5 2H2z"/><path d="M20 8l3 4-3 4z"/></svg>',build:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21l4-12 6 6-10 6z" fill="currentColor"/><path d="M13 5l6 6"/></svg>',sniper:'<svg viewBox="0 0 24 24" fill="currentColor"><rect x="1" y="10" width="20" height="3"/><rect x="6" y="6" width="6" height="3" rx="1"/><path d="M21 9l2 2-2 2z"/></svg>',shotgun:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M1 10h17v5H8l-2 4H3l2-4H1z"/></svg>',hmg:'<svg viewBox="0 0 24 24" fill="currentColor"><rect x="1" y="9" width="19" height="5"/><rect x="6" y="14" width="6" height="6"/><path d="M20 9l3 2.5-3 2.5z"/></svg>'},GM=[["Tool","tool"],["Pistol","pistol"],["Rifle","rifle"],["Minigun","minigun"],["Rocket","rocket"],["Build","build"],["Sniper","sniper"],["Shotgun","shotgun"],["HMG","hmg"]],WM={1:"pistol",2:"rifle",3:"minigun",4:"rocket",6:"sniper",7:"shotgun",8:"hmg"},XM={floor:'<svg viewBox="0 0 24 24" fill="currentColor"><rect x="4" y="4" width="16" height="16" rx="2"/></svg>',wall:'<svg viewBox="0 0 24 24" fill="currentColor"><rect x="10" y="3" width="4" height="18" rx="1"/></svg>',door:'<svg viewBox="0 0 24 24" fill="currentColor"><rect x="9" y="3" width="6" height="18" rx="1"/><circle cx="13" cy="12" r="1.4" fill="#15130e"/></svg>',turret:'<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="13" r="6"/><rect x="12" y="11" width="10" height="4" rx="1"/></svg>',cupboard:'<svg viewBox="0 0 24 24" fill="currentColor"><rect x="5" y="3" width="14" height="18" rx="2"/><rect x="11.4" y="5" width="1.2" height="14" fill="#15130e"/></svg>'};function Rm(n,e){let t=p=>document.getElementById(p),i=t("hotbar");GM.forEach(([p,x],m)=>{let g=document.createElement("div");g.className="slot",g.innerHTML=`<span class="key">${m+1}</span>${VM[x]}<span class="nm">${p}</span>`,g.addEventListener("mousedown",y=>{y.stopPropagation(),Fr(n,m)}),i.appendChild(g)});let s=t("bpieces");for(let p of ds){let x=document.createElement("div");x.className="bpiece",x.dataset.piece=p;let m=Object.entries(Zt[p].cost).map(([g,y])=>y+" "+g).join(" + ");x.innerHTML=`${XM[p]}${Zt[p].name}<br><span style="opacity:.7">${m}</span>`,x.addEventListener("mousedown",g=>{g.stopPropagation(),n.buildPiece=p}),s.appendChild(x)}let r=(p,x)=>t(p).addEventListener("mousedown",m=>{m.stopPropagation(),x(t(p))});r("mapbtn",p=>{e.godView=!e.godView,p.classList.toggle("on",e.godView),p.textContent=e.godView?"Exit Map":"Map View"}),r("ghostbtn",p=>{n.ghost=!n.ghost,p.classList.toggle("on",n.ghost),p.textContent=n.ghost?"Ghost: ON":"Ghost"}),r("rocketbtn",p=>{n.rapidRockets=!n.rapidRockets,p.classList.toggle("on",n.rapidRockets),p.textContent=n.rapidRockets?"Rockets: ON":"Rapid Rockets"}),r("refillbtn",()=>window.__refillAll()),r("boosthardbtn",()=>window.__boostHard()),r("debugbtn",p=>{e.debugPaths=!e.debugPaths,p.classList.toggle("on",e.debugPaths),p.textContent=e.debugPaths?"Debug: ON":"Debug paths"}),t("ghostbtn").classList.add("on"),t("ghostbtn").textContent="Ghost: ON",t("helpToggle").addEventListener("click",()=>{let p=t("help");p.classList.toggle("min"),t("helpToggle").textContent=p.classList.contains("min")?"show":"hide"}),document.querySelectorAll(".spdbtn").forEach(p=>{p.addEventListener("mousedown",x=>{x.stopPropagation(),e.speed=+p.dataset.spd,document.querySelectorAll(".spdbtn").forEach(m=>m.classList.toggle("on",m===p))})});let o=0,a=null,l=!1;function c(){let p=t("shop"),x='<h3>Trade Shop</h3><div style="margin-bottom:8px">Scrap: <b id="shop-scrap">0</b></div><div class="cols"><div class="col"><h5>SELL \u2192 SCRAP</h5>';Ft.trades.forEach(([m,g,y],w)=>{x+=`<div class="trow"><span>${g} ${m} \u2192 ${y} scrap</span><button data-trade="${w}">Sell</button></div>`}),x+='</div><div class="col"><h5>BUY WEAPONS + GEAR</h5>';for(let m in Ft.buys)x+=`<div class="trow"><span id="shopown-${m}">${sn[m].name} <small>+${Ft.buys[m].ammo} ammo</small></span><button data-buy="${m}">${Ft.buys[m].cost} scrap</button></div>`;x+=`<div class="trow"><span>Jackhammer <small>3\xD7 gather</small></span><button data-misc="jackhammer">${Ft.jackhammer} scrap</button></div>`,x+=`<div class="trow"><span>Rifle laser sight</span><button data-misc="laser">${Ft.laser} scrap</button></div>`,x+=`<div class="trow"><span>Wood fence (G)</span><button data-misc="fence">${Ft.fenceWood} wood</button></div>`,x+=`<div class="trow"><span>Grenade (Q)</span><button data-misc="grenade">${Ft.grenade} scrap</button></div>`,x+=`<div class="trow"><span>Supply signal (T)</span><button data-misc="signal">${Ft.signal} scrap</button></div>`,x+=`<div class="trow"><span>+10 HQM</span><button data-misc="hqm">${Ft.hqm.cost} scrap</button></div>`,x+='<div class="trow"><span id="fm-lbl">Facemask</span><button data-misc="facemask">buy</button></div>',x+='<div class="trow"><span id="ba-lbl">Body armor</span><button data-misc="bodyArmor">buy</button></div>',x+=`<div class="trow"><span>Hire worker</span><button data-misc="worker">${Ft.worker} scrap</button></div>`,x+='</div></div><button class="close">Close (E / Esc)</button>',p.innerHTML=x,p.querySelectorAll("button").forEach(m=>{m.addEventListener("mousedown",g=>g.stopPropagation()),m.addEventListener("click",()=>{m.dataset.trade!==void 0?Xd(n,+m.dataset.trade):m.dataset.buy?qd(n,m.dataset.buy):m.dataset.misc?Yd(n,m.dataset.misc):(n.shopOpen=!1,p.classList.add("hidden")),h()})}),h()}function h(){let p=t("shop-scrap");p&&(p.textContent=n.inv.scrap|0);let x=t("fm-lbl");if(x){let g=n.player.facemask+1;x.textContent=g<=3?`Facemask L${g} (${us.cost[g]} scrap)`:"Facemask MAX"}let m=t("ba-lbl");if(m){let g=n.player.bodyArmor+1;m.textContent=g<=3?`Body armor L${g} (${us.cost[g]} scrap)`:"Body armor MAX"}for(let g in Ft.buys){let y=t("shopown-"+g);y&&(y.style.color=n.owned[g]?"var(--accent2)":"var(--ink)")}}function f(p){let x=t("store"),m=n.deploys.get(p);if(!m)return;let g=`<h3>${m.type==="cupboard"?"Tool Cupboard":"Storage"}</h3>`;for(let y of["wood","stone","metal","scrap"])g+=`<div class="strow"><span class="ic ${y}"></span>
        <button data-mv="${y},-9999">\u25C0 all</button><button data-mv="${y},-0.1">\u25C0 10%</button>
        <span class="cnt"><b id="st-${y}">0</b> store \xB7 bag <b id="inv-${y}">0</b></span>
        <button data-mv="${y},0.1">10% \u25B6</button><button data-mv="${y},9999">all \u25B6</button>
        <span></span></div>`;g+='<button class="close">Close (E / Esc)</button>',x.innerHTML=g,x.querySelectorAll("button").forEach(y=>{y.addEventListener("mousedown",w=>w.stopPropagation()),y.addEventListener("click",()=>{if(y.dataset.mv){let[w,T]=y.dataset.mv.split(",");Zd(n,w,+T),d()}else n.storeOpen=null,x.classList.add("hidden")})}),d()}function d(){let p=n.deploys.get(n.storeOpen);if(!(!p||!p.store))for(let x of["wood","stone","metal","scrap"]){let m=t("st-"+x),g=t("inv-"+x);m&&(m.textContent=p.store[x]|0),g&&(g.textContent=n.inv[x]|0)}}return{closeModals(){t("store").classList.add("hidden"),t("shop").classList.add("hidden")},update(){t("r-wood").textContent=n.inv.wood|0,t("r-stone").textContent=n.inv.stone|0,t("r-metal").textContent=n.inv.metal|0,t("r-scrap").textContent=n.inv.scrap|0;let p=Math.floor(n.t/60),x=Math.floor(n.t%60);t("playtime").textContent=p+":"+String(x).padStart(2,"0");let m=n.player,g=Math.max(0,m.health/m.maxhp),y=t("hpfill");y.style.width=g*100+"%",y.style.background=g>.5?"linear-gradient(180deg,#9ccb5a,#6fae3e)":g>.25?"linear-gradient(180deg,#e0c14e,#c9962f)":"linear-gradient(180deg,#d76a4a,#b23b2a)",t("hptxt").textContent=Math.ceil(Math.max(0,m.health));let w=i.children;for(let E=0;E<w.length;E++){w[E].classList.toggle("sel",n.slot===E);let L=WM[E];w[E].classList.toggle("dim",!!L&&!n.owned[L])}if(t("buildmenu").classList.toggle("hidden",!n.buildMode),n.buildMode)for(let E of s.children){E.classList.toggle("sel",E.dataset.piece===n.buildPiece);let L=!0;for(let _ in Zt[E.dataset.piece].cost)(n.inv[_]||0)<Zt[E.dataset.piece].cost[_]&&(L=!1);E.classList.toggle("cant",!L)}let T=kr(n);if(t("ammo").classList.toggle("hidden",!T),T){let E=n.weapons[T];t("ammo-mag").innerHTML=`${E.ammo} <small>/ ${E.reserve}</small>`;let L=T==="minigun"&&E.spin>0&&E.spin<sn.minigun.windup;t("ammo-rl").textContent=E.reloading>0?"RELOADING":L?"SPINNING\u2026":E.ammo===0?"PRESS R":""}let I=t("tip");n.tip?(I.textContent=n.tip.text,I.classList.add("show")):I.classList.remove("show"),n.shopOpen!==l?(l=n.shopOpen,t("shop").classList.toggle("hidden",!n.shopOpen),n.shopOpen&&c()):n.shopOpen&&n.tick%30===0&&h(),n.storeOpen!==a?(a=n.storeOpen,t("store").classList.toggle("hidden",!n.storeOpen),n.storeOpen&&f(n.storeOpen)):n.storeOpen&&n.tick%30===0&&d(),n.t-o>.4&&(o=n.t,u())}};function u(){let p=[];p.push({id:Ve,name:"You",col:"#c4d66a",alive:!n.player.dead,you:!0,kills:n.playerKills,scrap:n.inv.scrap|0,res:n.inv.wood+n.inv.stone+n.inv.metal|0,tier:""});for(let y of n.teams){let w=0,T=0,I=0,E=!1;for(let _ of n.units)_.owner===y.owner&&(w+=_.kills,T+=_.scrap,I+=_.inv.wood+_.inv.stone+_.inv.metal,_.eliminated||(E=!0));let L=y.bases.find(_=>!_.dead);if(L){let _=n.deploys.get(L.tcKey);_&&_.store&&(I+=_.store.wood+_.store.stone+_.store.metal,T+=_.store.scrap)}p.push({id:y.id,name:"Base "+(y.id+1),col:y.col,alive:E&&!y.eliminated,kills:w,scrap:T|0,res:I|0,tier:y.hard?"HARD":y.weak?"EASY":""})}let x=null,m=0;for(let y of p)!y.you&&y.alive&&y.kills>m&&(m=y.kills,x=y.id);p.sort((y,w)=>w.scrap-y.scrap||w.kills-y.kills||w.res-y.res);let g=y=>y>=1e4?(y/1e3|0)+"k":y>=1e3?(y/1e3).toFixed(1)+"k":y;t("lb-rows").innerHTML=p.map(y=>`
      <div class="lbr ${y.alive?"":"dead"} ${y.id===x?"lb-bounty":""}">
        <span class="dot" style="background:${y.col}"></span>
        <span class="nm">${y.id===x?"\u2605 ":""}${y.name}</span>
        ${y.tier?`<span class="pill ${y.tier.toLowerCase()}">${y.tier}</span>`:""}
        <span>${y.kills}</span><span style="color:var(--ink-dim)">${g(y.scrap)}</span><span style="color:var(--ink-dim)">${g(y.res)}</span>
      </div>`).join("")}}var Cm=Math.random()*1e9>>>0,Lt=Ec(Cm);Lt.ghost=!0;function qM(){let e={canvas:document.getElementById("game"),VW:innerWidth,VH:innerHeight,speed:1,godView:!1,debugPaths:!1},t=dm(Lt,e),i=pm(Lt,t.scene),s=mm(Lt,t.scene),r=bm(Lt,t.scene),o=wm(Lt,t.scene),a=Tm(Lt,e,t),l=Rm(Lt,e);Am(Lt,e,t,l),addEventListener("resize",()=>{e.VW=innerWidth,e.VH=innerHeight,t.resize()});let c=document.getElementById("seedval");c&&(c.textContent=String(Cm)),window.__refillAll=()=>{for(let u in Lt.owned)Lt.owned[u]=!0;for(let u in Lt.weapons){let p=Lt.weapons[u];p.reserve=Math.max(p.reserve,u==="rocket"?80:u==="sniper"?60:u==="shotgun"?80:600),p.ammo=sn[u].magSize,p.reloading=0}for(let u of["wood","stone","metal"])Lt.inv[u]=Math.max(Lt.inv[u],1e4);Lt.inv.scrap=Math.max(Lt.inv.scrap,500),Lt.inv.fence=Math.max(Lt.inv.fence,10),Lt.tip={text:"Refilled ammo + resources",t:1.4}},window.__boostHard=()=>{let u=0;for(let p of Lt.units)!p.hard||p.dead||p.eliminated||(u++,p.hp=p.max,p.rockets=Math.max(p.rockets,12),p.satchels=Math.max(p.satchels,6),p.grenades=Math.max(p.grenades,4),p.hqm=Math.max(p.hqm,80),p.gun=p.shotgun?"shotgun":"rifle",p.facemask=Math.max(p.facemask,2),p.bodyArmor=Math.max(p.bodyArmor,3),p.jack=!0);for(let p of Lt.teams){if(!p.hard||p.eliminated)continue;let x=p.bases.find(m=>!m.dead);if(x){let m=Lt.deploys.get(x.tcKey);m&&m.store&&(m.store.wood=Math.max(m.store.wood,3e3),m.store.stone=Math.max(m.store.stone,1500),m.store.metal=Math.max(m.store.metal,1500),m.store.scrap=Math.max(m.store.scrap,600))}}Lt.tip={text:"Boosted "+u+" hard units",t:1.4}};let h=performance.now(),f=0;function d(u){requestAnimationFrame(d);let p=Math.min(.1,(u-h)/1e3);h=u,f+=p*e.speed;let x=0,m=Math.max(4,e.speed*4);for(;f>=wr&&x<m;)bu(Lt),f-=wr,x++;x>=m&&(f=0),t.update(p),i.sync(p,Lt,t),s.sync(p),r.sync(p,t),o.sync(p,t),t.render(),a.draw(),l.update(),Lt.events.length=0}requestAnimationFrame(d)}try{qM()}catch(n){console.error("SCRAPLAND boot failed: WebGL unavailable \u2014",n&&n.message);let e=document.createElement("div");e.style.cssText="position:fixed;inset:0;display:flex;align-items:center;justify-content:center;color:#ddd5c2;font:16px Trebuchet MS;background:#14120e;z-index:99",e.textContent="SCRAPLAND needs WebGL \u2014 please enable hardware acceleration and reload.",document.body&&document.body.appendChild(e)}})();
