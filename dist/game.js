(()=>{var he={w:13824,h:9216},$t=16,zo=64,Ge="p1",Tr=1/60,on={pistol:{name:"Pistol",magSize:12,reserve:96,dmg:14,rof:.22,spread:.03,speed:1150,auto:!1,reloadT:1,kick:6,range:1.6},rifle:{name:"Rifle",magSize:30,reserve:180,dmg:11,rof:.09,spread:.05,speed:1500,auto:!0,reloadT:1.6,kick:4,range:2.4},minigun:{name:"Minigun",magSize:200,reserve:200,dmg:6,rof:.045,spread:.09,speed:1300,auto:!0,reloadT:4.5,kick:2,range:1.8,windup:2.6},rocket:{name:"Rocket",magSize:1,reserve:50,dmg:55,rof:.9,spread:.012,speed:560,auto:!1,reloadT:1.9,kick:16,range:2.8,rocket:!0,splash:96,splashDmg:150,structDmg:55},sniper:{name:"Sniper",magSize:1,reserve:30,dmg:60,rof:1,spread:.004,speed:1180,auto:!1,reloadT:1.8,kick:14,range:3.4,locked:!0},shotgun:{name:"Shotgun",magSize:6,reserve:48,dmg:9,rof:.3,spread:.17,speed:1050,auto:!0,reloadT:1.5,kick:9,range:1.1,pellets:7},hmg:{name:"HMG",magSize:100,reserve:300,dmg:15,rof:.05,spread:.11,speed:1500,auto:!0,reloadT:3,kick:9,range:2.4,locked:!0,tracer:"hmg"}};var Fs={splash:120,splashDmg:120,structDmg:22,fuse:2},Kt={floor:{name:"Floor",cost:{wood:5},cat:"cell",hp:100,found:!0,up:!0},trifloor:{name:"Tri-Floor",cost:{wood:4},cat:"cell",hp:90,found:!0,up:!0,tri:!0,hidden:!0},wall:{name:"Wall",cost:{wood:10},cat:"edge",hp:100,up:!0},triangle:{name:"Triangle",cost:{wood:8},cat:"diag",hp:100,up:!0,hidden:!0},door:{name:"Door",cost:{wood:10,metal:5},cat:"edge",hp:50,up:!0,mMul:2,door:!0},box:{name:"Box",cost:{wood:15},cat:"cell",hp:90,box:!0,store:!0,hidden:!0},turret:{name:"Turret",cost:{wood:40,metal:30},cat:"cell",hp:150,solid:!0,turret:!0},cupboard:{name:"Cupboard",cost:{wood:60,metal:25},cat:"cell",hp:300,solid:!0,tc:!0,store:!0}},ps=["floor","wall","door","turret","cupboard"];var Mc=10,Df={wood:{to:"stone",cost:{stone:15}},stone:{to:"metal",cost:{metal:20}},metal:{to:"armored",cost:{hqm:8}}};function bi(n,e){let t=n.mMul||4;return e==="armored"?n.hp*t*2:e==="metal"?n.hp*t:e==="stone"?Math.round(n.hp*(1+t)/2):n.hp}var Ot=900,Vi=900,Er=.0075,Lf=30,Ho=10,Nf=600,bc=3600,Uf=1200,Ar=240,Mt=620,wc=620,Tc=50,Gi={hp:200,len:46,half:23,life:60},kf=7,Vo=1.9,Ff=.65,ms={head:[0,.25,.45,.62],body:[0,.18,.34,.5],cost:[0,16,34,60],headCol:[null,"#cdbb92","#9aabb8","#7c8ec9"],bodyCol:[null,"#857748","#959ca3","#5d7a9b"]},Ec=(n,e)=>ms[e][Vm(n)],Vm=n=>n<0?0:n>3?3:n|0,gt={speed:560,boost:980,accel:360,drag:.55,dragIdle:.85,turn:2.1,r:30,hp:260},Wt={speed:455,accel:300,drag:.55,turn:1.6,r:46,seats:4,cost:40,hp:360},Go={1:{name:"Pistol",dmg:14,rof:.5,speed:1e3,spread:.05,mag:12,reload:1.6,range:340,lead:0},2:{name:"Rifle",dmg:11,rof:.12,speed:1500,spread:.05,mag:30,reload:2,range:380,lead:.55},3:{name:"Sniper",dmg:60,rof:1.3,speed:1900,spread:0,mag:1,reload:2.4,range:460,lead:1}},Of={2:50,3:250},Ac=50,gs={boar:{hp:35,r:17,walk:62,chase:128,dmg:7,atk:.8,detect:300,lose:560,loot:["wood",1,3]},wolf:{hp:62,r:15,walk:84,chase:190,dmg:12,atk:.6,detect:430,lose:720,loot:["metal",1,2],biome:"jungle",pack:!0},bear:{hp:165,r:25,walk:54,chase:132,dmg:24,atk:1,detect:360,lose:660,loot:["metal",3,6],biome:"winter"},alligator:{hp:140,r:22,walk:48,chase:158,dmg:22,atk:.9,detect:340,lose:620,loot:["metal",2,5],biome:"jungle",lake:!0},snake:{hp:42,r:11,walk:78,chase:214,dmg:14,atk:.5,detect:380,lose:640,loot:["metal",1,2],biome:"desert"},scorpion:{hp:28,r:12,walk:74,chase:158,dmg:6,atk:.7,detect:300,lose:540,loot:["metal",1,2],biome:"desert",poison:!0},polarbear:{hp:205,r:27,walk:58,chase:142,dmg:28,atk:1,detect:380,lose:690,loot:["metal",4,7],biome:"winter"}},Bf=[["boar",12],["wolf",7],["bear",6],["alligator",8],["snake",9],["scorpion",8],["polarbear",5]],zt={trades:[["wood",100,6],["stone",100,9],["metal",50,10]],buys:{pistol:{ammo:48,cost:6},rifle:{ammo:90,cost:10},minigun:{ammo:200,cost:16},rocket:{ammo:2,cost:24},shotgun:{ammo:24,cost:9},sniper:{ammo:5,cost:24},hmg:{ammo:150,cost:20}},jackhammer:30,laser:14,fenceWood:10,grenade:8,signal:60,hqm:{cost:12,amt:10},worker:100},Gt={hp:64,r:14,dmg:8,rof:.5,range:430,detect:540,speed:118,leash:170,bspeed:1200,spread:.06},zf=[{type:"gas",name:"Gas Station",fx:.26,fy:.3,crates:4,barrels:12,guards:3},{type:"junk",name:"Junkyard",fx:.75,fy:.32,crates:5,barrels:7,guards:3},{type:"warehouse",name:"Abandoned Warehouse",fx:.5,fy:.74,crates:7,barrels:7,guards:4}],Zn={capR:240,capT:8,payEvery:6,pay:{stone:10,metal:6,scrap:4}},fn={vhp:1100,ghp:80,speed:120,trange:560,tdmg:13,trof:.34,gdmg:9,grof:.5,grange:440,gspeed:120,leash:300,bspeed:1300},$n={hp:450,speed:330,orbitR:420,orbitT:22,strafeR:760,flakR:720},Os={hackT:60,r:150},dt={TEAM_COUNT:7,COLS:["#b85b5b","#5b8bb8","#b89b5b","#7bb85b","#9b5bb8","#5bb8a8","#b8765b","#8b8b5b","#b85b9b","#6b78b8"],BOT_SPEED:160,ROCKET_MIN:230,STRAFE_FLIP:.9,REACT_R:640,WORKER_COST:50,GATHER_LOAD:300,MINICOPTER_COST:30,SIGNAL_COST:60,HIRE_CAP_HARD:16,HIRE_CAP:8,RESPAWN_T:15,TRIPWIRE:2600,RAID_DEF_W:.55,RAID_TUR_W:.3,ENDGAME_T:420,ENDGAME_BASES:6};function Hf(n){let e=n>>>0||1,t=()=>{e|=0,e=e+1831565813|0;let i=Math.imul(e^e>>>15,1|e);return i=i+Math.imul(i^i>>>7,61|i)^i,((i^i>>>14)>>>0)/4294967296};return{next:t,rand:(i=0,s=1)=>i+t()*(s-i),randi:(i,s)=>Math.floor(i+t()*(s-i+1)),chance:i=>t()<i,pick:i=>i[Math.floor(t()*i.length)],angle:()=>t()*Math.PI*2}}var He=Math.PI*2,et=(n,e,t)=>n<e?e:n>t?t:n,Rr=(n,e,t)=>n+(e-n)*t,ue=(n,e,t,i)=>{let s=t-n,r=i-e;return s*s+r*r},ne=(n,e,t,i)=>Math.sqrt(ue(n,e,t,i)),Wi=n=>(n=et(n,0,1),n*n*(3-2*n));function Gm(n,e){let t=(e-n)%He;return t>Math.PI&&(t-=He),t<-Math.PI&&(t+=He),t}function wi(n,e,t){let i=Gm(n,e);return Math.abs(i)<=t?e:n+Math.sign(i)*t}var Ye=(n,e)=>n+","+e,Le=(n,e,t)=>n+","+e+","+t;function wt(n,e,t,i,s,r){let o=s-t,a=r-i,l=o*o+a*a;if(l===0)return ne(n,e,t,i);let c=((n-t)*o+(e-i)*a)/l;return c=et(c,0,1),ne(n,e,t+c*o,i+c*a)}function si(n,e,t,i,s,r,o,a){let l=Wo(s,r,o,a,n,e),c=Wo(s,r,o,a,t,i),f=Wo(n,e,t,i,s,r),h=Wo(n,e,t,i,o,a);return(l>0&&c<0||l<0&&c>0)&&(f>0&&h<0||f<0&&h>0)}function Wo(n,e,t,i,s,r){return(t-n)*(r-e)-(i-e)*(s-n)}function Vf(n,e,t,i,s,r,o,a){let l=t-n,c=i-e,f=o-s,h=a-r,d=l*h-c*f;if(Math.abs(d)<1e-9)return null;let u=((s-n)*h-(r-e)*f)/d,p=((s-n)*c-(r-e)*l)/d;return u<0||u>1||p<0||p>1?null:{x:n+u*l,y:e+u*c}}function Xi(n,e){let t=n*374761393+e*668265263|0;return t=t^t>>13|0,t=Math.imul(t,1274126177),((t^t>>16)>>>0)/4294967296}function Wf(n){let e=n.rng,t=he.w,i=he.h,s=200,r=t/2,o=i/2,a=.47*t,l=.47*i,c=[];for(let F=0;F<5;F++)c.push({f:F+2,w:1/(F+1.2),p:e.rand(0,He)});let f=[],h=1e9,d=-1e9;for(let F=0;F<s;F++){let z=F/s*He,S=0;for(let L of c)S+=Math.sin(z*L.f+L.p)*L.w;f.push(S),h=Math.min(h,S),d=Math.max(d,S)}let u=f.map(F=>1-.22*(.5-.5*((F-h)/(d-h)*2-1))),p={cx:r,cy:o,rx:a,ry:l,N:s,rad:u},x=F=>{let z=F%He;z<0&&(z+=He);let S=z/He*s,L=Math.floor(S)%s,U=(L+1)%s;return u[L]+(u[U]-u[L])*(S-L)},m=(F,z)=>{let S=(F-r)/a,L=(z-o)/l,U=Math.sqrt(S*S+L*L);return x(Math.atan2(L,S))-U},g=(F,z)=>m(F,z)>0,y=[];for(let F=0;F<s;F++){let z=F/s*He;y.push({x:r+Math.cos(z)*u[F]*a,y:o+Math.sin(z)*u[F]*l})}let M=F=>F===void 0?0:(Math.sin(F*.0016+1.7)*.62+Math.sin(F*.0043+4.2)*.38)*t*.055,w=(F,z)=>{let S=(F+M(z))/t;return S<1/3?"desert":S<2/3?"jungle":"winter"},C={x:t/2,y:i/2,r:46},T=[];for(let F=0;F<5;F++){let z=F%2===0,S=z?t:i,L=z?i:t,U=e.rand(.14,.86)*L,K=e.rand(260,820),ge=e.rand(1.4,3.2),A=e.rand(0,He),J=[];for(let pe=0;pe<=30;pe++){let qe=pe/30,Qe=et(U+Math.sin(qe*ge*He+A)*K,60,L-60);J.push(z?{x:qe*S,y:Qe}:{x:Qe,y:qe*S})}let G=e.rand(26,42),se=[],ie=e.chance(.5)?1:-1;for(let pe=0;pe<J.length;pe+=2){let qe=D(J,pe);se.push({x:et(J[pe].x+Math.cos(qe+Math.PI/2)*ie*(G/2+24),20,t-20),y:et(J[pe].y+Math.sin(qe+Math.PI/2)*ie*(G/2+24),20,i-20)})}T.push({pts:J,w:G,poles:se,fade:J.map(()=>1)})}function D(F,z){let S=F[Math.max(0,z-1)],L=F[Math.min(F.length-1,z+1)];return Math.atan2(L.y-S.y,L.x-S.x)}let _=(F,z)=>{let S=F,L=z;for(let U=0;U<7;U++){let K={x:(S.x+L.x)/2,y:(S.y+L.y)/2};m(K.x,K.y)>.015?S=K:L=K}return{x:S.x,y:S.y}},v=F=>{let z=F.map(K=>m(K.x,K.y)>.015),S=z.indexOf(!0),L=z.lastIndexOf(!0);if(S===-1||L-S<2)return null;let U=F.slice(S,L+1);return S>0&&(U[0]=_(U[0],F[S-1])),L<F.length-1&&(U[U.length-1]=_(U[U.length-1],F[L+1])),U},P=e.chance(.5),R=[];for(let F of[[.15,.35],[.65,.85]]){let z=P?t:i,S=P?i:t;for(let L=0;L<4&&!R.some(U=>U.band===F[0]);L++){let U=e.rand(F[0],F[1])*S,K=e.rand(70,Math.min(300,S*.09)),ge=e.rand(.7,1.5),A=e.rand(0,He),J=[];for(let se=0;se<=46;se++){let ie=se/46,pe=et(U+Math.sin(ie*ge*He+A)*K,90,S-90);J.push(P?{x:ie*z,y:pe}:{x:pe,y:ie*z})}if(J=v(J),!J)continue;let G=!1;for(let se of R)for(let ie=0;ie<J.length-1&&!G;ie++)for(let pe=0;pe<se.pts.length-1;pe++)if(si(J[ie].x,J[ie].y,J[ie+1].x,J[ie+1].y,se.pts[pe].x,se.pts[pe].y,se.pts[pe+1].x,se.pts[pe+1].y)){G=!0;break}G||R.push({pts:J,band:F[0]})}}let N=(F,z,S)=>{let L=1e9;for(let U of S){let K=U.pts;for(let ge=0;ge<K.length-1;ge++)L=Math.min(L,wt(F,z,K[ge].x,K[ge].y,K[ge+1].x,K[ge+1].y))}return L},X=(F,z)=>N(F,z,R),q=(F,z)=>N(F,z,T);for(let F of T)F.fade=F.pts.map(z=>{let S=m(z.x,z.y);return S<=.015?0:Wi((S-.015)/.05)}),F.poles=F.poles.filter(z=>m(z.x,z.y)>.03);let k=[];for(let F of R)for(let z=0;z<F.pts.length-1;z++)for(let S of T)for(let L=0;L<S.pts.length-1;L++){let U=Vf(F.pts[z].x,F.pts[z].y,F.pts[z+1].x,F.pts[z+1].y,S.pts[L].x,S.pts[L].y,S.pts[L+1].x,S.pts[L+1].y);U&&k.push({x:U.x,y:U.y,railAng:Math.atan2(F.pts[z+1].y-F.pts[z].y,F.pts[z+1].x-F.pts[z].x),gate:0,active:!1})}let B=[];for(let F=0;F<26&&B.length<5;F++){let z=e.rand(.34*t,.97*t),S=e.rand(.14*i,.86*i),L=e.rand(170,330);if(m(z,S)<L/Math.min(a,l)+.06||w(z,S)==="desert"||X(z,S)<L+120||ne(z,S,C.x,C.y)<Mt+L+260||B.some(J=>ne(z,S,J.x,J.y)<L+J.r+220))continue;let U=[],K=[{f:2,p:e.rand(0,He)},{f:3,p:e.rand(0,He)},{f:5,p:e.rand(0,He)}];for(let J=0;J<28;J++){let G=J/28*He,se=0;for(let ie=0;ie<3;ie++)se+=Math.sin(G*K[ie].f+K[ie].p)/(ie+1.6);U.push(1+.17*Math.max(-1,Math.min(1,se)))}let ge=w(z,S)==="winter",A=[];if(!ge)for(let J=0,G=e.randi(2,4);J<G;J++)A.push({a:e.rand(0,He),rr:e.rand(.2,.72),s:e.rand(9,16)});B.push({x:z,y:S,r:L,wob:U,frozen:ge,pads:A,seed:e.rand(0,9)})}let Y=(F,z)=>{for(let S of B)if(ue(F,z,S.x,S.y)<S.r*S.r)return S;return null},le=[];for(let F of zf){let z=F.fx*t,S=F.fy*i;for(let L=0;L<8&&(m(z,S)<.12||Y(z,S));L++)z=z*.78+r*.22,S=S*.78+o*.22;le.push({type:F.type,name:F.name,x:z,y:S,r:200,crates:F.crates,nbarrels:F.barrels,nguards:F.guards})}let fe=Mt+240+700,_e={x:.4*t,y:.52*i};e:for(let F=0;F<6;F++){let z=fe+F*700;for(let S=0;S<16;S++){let L=S/16*He,U=C.x+Math.cos(L)*z,K=C.y+Math.sin(L)*z;if(!(U<600||K<600||U>t-600||K>i-600)&&!(m(U,K)<.12||Y(U,K))&&!(X(U,K)<360||q(U,K)<320)&&!(ne(U,K,C.x,C.y)<fe)){_e={x:U,y:K};break e}}}le.push({type:"quarry",name:"Quarry",x:_e.x,y:_e.y,r:170}),n.quarry={x:_e.x,y:_e.y,r:Zn.capR,owner:null,capOwner:null,capT:0,payT:0,arm:0,paid:0};let Ce=[],Ue=[],Z=(F,z,S,L)=>{if(m(F,z)<.06||Y(F,z))return!1;let U=w(F,z);if(U!=="jungle"&&U!=="winter"||ne(F,z,C.x,C.y)<Mt+S)return!1;for(let K of le)if(ne(F,z,K.x,K.y)<K.r+240)return!1;if(X(F,z)<S+90)return!1;for(let K of L)if(ne(F,z,K.x,K.y)<S+K.r+44)return!1;return!0};for(let F=0;F<34;F++)for(let z=0;z<30;z++){let S=e.rand(t/3,t-120),L=e.rand(120,i-120),U=e.rand(28,42);if(Z(S,L,U,Ce)){Ce.push({x:S,y:L,r:U,seed:e.rand(0,9),winter:w(S,L)==="winter"});break}}for(let F=0;F<72;F++)for(let z=0;z<18;z++){let S=e.rand(t/3,t-100),L=e.rand(100,i-100),U=e.rand(7,13);if(Z(S,L,U,Ce)){Ue.push({x:S,y:L,r:U,seed:e.rand(0,9),winter:w(S,L)==="winter"});break}}n.world={island:p,islandPath:y,onLand:g,landFactor:m,islandRadAt:x,biomeAt:w,biomeRidge:M,shop:C,roads:T,rails:R,railHoriz:P,crossings:k,lakes:B,lakeAt:Y,railDist:X,pathDist:q,monuments:le,boulders:Ce,rocks:Ue,flora:[],palms:[]},Xm(n),qm(n),Zm(n),$m(n),n.copter={x:n.player.x+120,y:n.player.y,angle:0,rotor:0,vx:0,vy:0,spd:0,hp:gt.hp,max:gt.hp,destroyed:!1}}function Wm(n,e,t,i){let s=n.rng;for(let r=0;r<40;r++){let o=s.rand(i,he.w-i),a=s.rand(i,he.h-i);if(ne(o,a,n.player.x,n.player.y)<220||n.world.landFactor(o,a)<.05||n.world.lakeAt(o,a))continue;let l=!1;for(let c of e)if(ne(o,a,c.x,c.y)<t+c.r+24){l=!0;break}if(!l)return{x:o,y:a}}return null}function Xm(n){let e=n.rng,t=[["tree",290,22,120,"wood"],["stone",190,26,140,"stone"],["metal",150,24,110,"metal"]],i=[];for(let[s,r,o,a,l]of t)for(let c=0;c<r;c++){let f=Wm(n,i,o,90);if(!f)continue;let h={type:s,x:f.x,y:f.y,r:o,amount:a,max:a,regen:0,seed:e.rand(0,1e3),base:l,by:null,byT:0};i.push(h),n.resources.push(h)}}function qm(n){let e=n.rng;for(let t of n.world.monuments)if(t.type!=="quarry"){for(let i=0;i<t.crates;i++){let s=e.rand(0,He),r=e.rand(24,.62*t.r);n.barrels.push({x:t.x+Math.cos(s)*r,y:t.y+Math.sin(s)*r,r:18,hp:45,max:45,seed:e.rand(0,9),tier:"mon",crate:!0,respawnT:0})}for(let i=0;i<t.nbarrels;i++){let s=e.rand(0,He),r=e.rand(.45*t.r,.95*t.r);n.barrels.push({x:t.x+Math.cos(s)*r,y:t.y+Math.sin(s)*r,r:16,hp:30,max:30,seed:e.rand(0,9),tier:"mon",respawnT:0})}for(let i=0;i<t.nguards;i++)Ym(n,t)}for(let t of n.world.roads)if(!t.convoy)for(let i=0;i<t.pts.length;i+=2){if(i%4!==0||!e.chance(.7))continue;let s=t.pts[i],r=e.rand(0,He),o=et(s.x+Math.cos(r)*(t.w/2+e.rand(16,70)),30,he.w-30),a=et(s.y+Math.sin(r)*(t.w/2+e.rand(16,70)),30,he.h-30);ne(o,a,n.world.shop.x,n.world.shop.y)<Mt+60||!n.world.onLand(o,a)||n.world.lakeAt(o,a)||n.barrels.push({x:o,y:a,r:16,hp:30,max:30,seed:e.rand(0,9),tier:"road",respawnT:0})}}function Ym(n,e){let t=n.rng,i=t.rand(0,He),s=t.rand(.35*e.r,.8*e.r);n.guards.push({mx:e.x,my:e.y,mr:e.r,x:e.x+Math.cos(i)*s,y:e.y+Math.sin(i)*s,hp:Gt.hp,max:Gt.hp,angle:t.rand(0,He),gunCd:t.rand(0,.6),dead:!1,respawnT:0,wpX:0,wpY:0,wpT:0,hasWp:!1,seed:t.rand(0,9),vx:0,vy:0})}function Zm(n){let e=n.rng,t=he.w,i=he.h,s=["#d96a83","#dbb44a","#c46ac4","#e8e4da","#e08a52","#7aa0e0"];for(let r=0,o=e.randi(200,300);r<o;r++){let a=e.rand(t/3,2*t/3),l=e.rand(60,i-60);if(!n.world.onLand(a,l)||n.world.lakeAt(a,l)||n.world.biomeAt(a,l)!=="jungle")continue;let c=e.next();n.world.flora.push({x:a,y:l,type:c<.4?"flower":c<.72?"fern":"shrub",seed:e.rand(0,9),col:e.pick(s)})}for(let r=0,o=e.randi(90,140);r<o;r++){let a=e.rand(30,t/3),l=e.rand(60,i-60);!n.world.onLand(a,l)||n.world.lakeAt(a,l)||n.world.biomeAt(a,l)!=="desert"||n.world.flora.push({x:a,y:l,type:e.chance(.5)?"cactus":"deshrub",seed:e.rand(0,9),arms:e.randi(0,2)})}for(let r=0;r<n.world.islandPath.length;r+=2){let o=n.world.islandPath[r],a=n.world.island.cx+(o.x-n.world.island.cx)*.93,l=n.world.island.cy+(o.y-n.world.island.cy)*.93;n.world.biomeAt(a,l)==="jungle"&&e.chance(.34)&&n.world.palms.push({x:a,y:l,seed:e.rand(0,9)})}for(let r=0,o=e.randi(10,16);r<o;r++){let a=e.rand(40,t/3-20),l=e.rand(80,i-80);n.world.biomeAt(a,l)==="desert"&&n.world.onLand(a,l)&&!n.world.lakeAt(a,l)&&n.world.palms.push({x:a,y:l,seed:e.rand(0,9),desert:!0})}}function $m(n){let e=n.rng,t=he.w,i=he.h,s=o=>o==="desert"?[0,t/3]:o==="jungle"?[t/3,2*t/3]:o==="winter"?[2*t/3,t]:[0,t],r=[];for(let[o,a]of Bf){let l=gs[o];for(let c=0;c<a;c++){let f=Gf(n,o,l,s(l.biome),r,null);if(f&&l.pack&&e.chance(.45))for(let h=0,d=e.randi(1,2);h<d;h++)Gf(n,o,l,s(l.biome),r,f)}}}function Gf(n,e,t,i,s,r){let o=n.rng;for(let a=0;a<40;a++){let l,c,f=r?r.lake:null;if(r)l=r.x+o.rand(-150,150),c=r.y+o.rand(-150,150);else if(t.lake){let u=n.world.lakes.filter(m=>!m.frozen||t.biome!=="jungle");if(!u.length)return null;f=o.pick(u);let p=o.rand(0,He),x=f.r+o.rand(30,200);l=f.x+Math.cos(p)*x,c=f.y+Math.sin(p)*x}else l=o.rand(i[0],i[1]),c=o.rand(90,he.h-90);if(l=et(l,i[0]-70,i[1]+70),c=et(c,90,he.h-90),ne(l,c,n.player.x,n.player.y)<220||ne(l,c,n.world.shop.x,n.world.shop.y)<Mt+200||n.world.landFactor(l,c)<.05||n.world.lakeAt(l,c)&&!t.lake)continue;let h=!1;for(let u of s)if(ne(l,c,u.x,u.y)<t.r+u.r+8){h=!0;break}if(h)continue;let d={type:e,x:l,y:c,vx:0,vy:0,r:t.r,hp:t.hp,max:t.hp,aggro:null,atkcd:0,hit:0,wanderT:o.rand(0,2),dir:o.rand(0,He),respawnT:0,hostile:o.chance(.1),foe:null,lake:f,pauseT:0,stuckT:0,blockedAll:0,dead:!1,avoidT:0,avoidA:0};return s.push(d),n.animals.push(d),d}return null}var yn=Math.ceil(he.w/64),Bs=Math.ceil(he.h/64),qi=yn*Bs;function $f(n){let e=new Uint8Array(qi),t=new Float32Array(qi);for(let i=0;i<Bs;i++)for(let s=0;s<yn;s++){let r=s*64+64/2,o=i*64+64/2,a=i*yn+s,l=1;if(!n.world.onLand(r,o)){e[a]=1,t[a]=1;continue}let c=n.world.lakeAt(r,o);c&&(l=c.frozen?1.15:3);for(let f of n.world.boulders)if((r-f.x)*(r-f.x)+(o-f.y)*(o-f.y)<(f.r+18)*(f.r+18)){e[a]=1;break}n.world.pathDist(r,o)<26&&(l=Math.min(l,.85)),t[a]=l}n.nav={COLS:yn,ROWS:Bs,N:qi,terrain:e,cost:t,stamp:1,penalty:new Map,g:new Float32Array(qi),came:new Int32Array(qi),vis:new Int32Array(qi),gen:0,heap:new Int32Array(qi+1),heapF:new Float32Array(qi+1)}}var Sr=(n,e)=>n<0||e<0||n>=yn||e>=Bs?-1:e*yn+n;function Km(n,e,t,i){let s=n.deploys.get(Ye(e,t));return s?s.type==="cupboard"?s.owner!==i:!0:!1}function qo(n,e,t,i){let s=Sr(e,t);return!(s<0||n.nav.terrain[s]||n.walls.has("D,"+e+","+t)||Km(n,e,t,i)||n.nav.fenceCells&&n.nav.fenceCells.has(s))}function Rc(n,e,t,i,s,r){let o;i>e?o=Le("V",i,t):i<e?o=Le("V",e,t):s>t?o=Le("H",e,s):o=Le("H",e,t);let a=n.walls.get(o);return!a||a.hp<=0?0:a.type==="door"&&(a.open||a.lock&&a.lock.by===r)?1:2}function Ti(n,e,t,i,s,r){if(!qo(n,i,s,r))return-1;let o=Rc(n,e,t,i,s,r);return o===2?-1:o}function Jm(n,e,t){let i=n.nav.cost[e],s=n.nav.penalty.get(e);return s!==void 0&&(s>t?i+=6:n.nav.penalty.delete(e)),i}function Yo(n,e,t,i=12){let s=Sr(Math.floor(e/64),Math.floor(t/64));s>=0&&n.nav.penalty.set(s,n.t+i)}var zs=256,Xo=Math.ceil(he.w/zs),Xf=Math.ceil(he.h/zs);function jm(n){let e=n.nav;if(e.maskStamp===e.stamp&&e.mask)return e.mask;let t=e.mask&&e.maskStamp!==void 0?e.mask.fill(0):new Uint8Array(Xo*Xf),i=(s,r)=>{let o=s/zs|0,a=r/zs|0;for(let l=-1;l<=1;l++)for(let c=-1;c<=1;c++){let f=(a+l)*Xo+(o+c);o+c>=0&&a+l>=0&&o+c<Xo&&a+l<Xf&&(t[f]=1)}};for(let s of n.walls.keys()){let r=s.split(",");i(+r[1]*64,+r[2]*64)}for(let s of n.deploys.keys()){let r=s.split(",");i(+r[0]*64,+r[1]*64)}for(let s of n.fences)i(s.x,s.y);return e.mask=t,e.maskStamp=e.stamp,t}function Kf(n,e,t){let i=jm(n),s=(t/zs|0)*Xo+(e/zs|0);return i[s]===1}function Jf(n){let e=new Set;for(let t of n.fences)e.add(Sr(Math.floor(t.x/64),Math.floor(t.y/64)));n.nav.fenceCells=e,n.nav.stamp++}function qf(n,e,t,i){if(qo(n,e,t,i))return{gx:e,gy:t};for(let s=1;s<=8;s++)for(let r=-s;r<=s;r++)for(let o=-s;o<=s;o++)if(Math.max(Math.abs(o),Math.abs(r))===s&&qo(n,e+o,t+r,i))return{gx:e+o,gy:t+r};return null}function Yf(n,e,t){let i=++n.heapN,s=n.heap,r=n.heapF;for(;i>1;){let o=i>>1;if(r[o]<=t)break;s[i]=s[o],r[i]=r[o],i=o}s[i]=e,r[i]=t}function Qm(n){let e=n.heap,t=n.heapF,i=e[1],s=e[n.heapN],r=t[n.heapN--],o=1;for(;;){let a=o<<1;if(a>n.heapN||(a+1<=n.heapN&&t[a+1]<t[a]&&a++,t[a]>=r))break;e[o]=e[a],t[o]=t[a],o=a}return e[o]=s,t[o]=r,i}var Zf=[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]];function jf(n,e,t,i,s,r,o){let a=n.nav,l=et(Math.floor(t/64),0,yn-1),c=et(Math.floor(i/64),0,Bs-1),f=et(Math.floor(s/64),0,yn-1),h=et(Math.floor(r/64),0,Bs-1),d=qf(n,l,c,e);if(!d)return null;let u=qf(n,f,h,e);if(!u)return null;if(l=d.gx,c=d.gy,f=u.gx,h=u.gy,l===f&&c===h)return[{x:s,y:r}];let p=++a.gen;a.heapN=0;let x=c*yn+l,m=h*yn+f;a.vis[x]=p,a.g[x]=0,a.came[x]=-1,Yf(a,x,0);let g=Math.max(Math.abs(f-l),Math.abs(h-c)),y=o||Math.min(26e3,3e3+g*90),M=0,w=!1;for(;a.heapN>0&&M++<y;){let P=Qm(a);if(P===m){w=!0;break}let R=P%yn,N=P/yn|0,X=a.g[P];for(let q=0;q<8;q++){let k=Zf[q][0],B=Zf[q][1],Y=R+k,le=N+B,fe=Sr(Y,le);if(fe<0)continue;let _e=0;if(q<4){let S=Ti(n,R,N,Y,le,e);if(S<0)continue;S===1&&(_e=2)}else if(Ti(n,R,N,R+k,N,e)!==0||Ti(n,R,N,R,N+B,e)!==0||Ti(n,R+k,N,Y,le,e)!==0||Ti(n,R,N+B,Y,le,e)!==0)continue;let Ce=(q<4?1:1.41421)*Jm(n,fe,n.t)+_e,Ue=X+Ce;if(a.vis[fe]===p&&a.g[fe]<=Ue)continue;a.vis[fe]=p,a.g[fe]=Ue,a.came[fe]=P;let Z=Math.abs(Y-f),F=Math.abs(le-h),z=(Math.max(Z,F)+.41421*Math.min(Z,F))*.85;Yf(a,fe,Ue+z)}}if(!w)return null;let C=[],T=m;for(;T!==-1;)C.push(T),T=a.came[T];C.reverse();let D=[];for(let P=0;P<C.length;P++){let R=C[P]%yn,N=C[P]/yn|0,X=!1;if(P>0){let q=C[P-1]%yn,k=C[P-1]/yn|0;Math.abs(R-q)+Math.abs(N-k)===1&&(X=Rc(n,q,k,R,N,e)===1)}D.push({x:R*64+64/2,y:N*64+64/2,door:X})}D[D.length-1]={x:s,y:r,door:D[D.length-1].door};let _=[D[0]],v=0;for(let P=1;P<D.length;P++)if(D[P].door||P===D.length-1){let R=v;for(;R<P;){let N=R+1;for(let X=P;X>R;X--)if(!(D[X].door&&X!==P)&&Cr(n,e,D[R].x,D[R].y,D[X].x,D[X].y)){N=X;break}_.push(D[N]),R=N}v=P}return _.length>1&&!_[0].door&&Cr(n,e,t,i,_[1].x,_[1].y)&&_.shift(),_}function Cr(n,e,t,i,s,r){let o=Math.hypot(s-t,r-i),a=Math.max(1,Math.ceil(o/(64*.4))),l=Math.floor(t/64),c=Math.floor(i/64);for(let f=1;f<=a;f++){let h=f/a,d=t+(s-t)*h,u=i+(r-i)*h,p=Math.floor(d/64),x=Math.floor(u/64);if(!(p===l&&x===c)){if(!qo(n,p,x,e))return!1;if(p!==l&&x!==c){if(Ti(n,l,c,p,c,e)!==0||Ti(n,p,c,p,x,e)!==0||Ti(n,l,c,l,x,e)!==0||Ti(n,l,x,p,x,e)!==0)return!1}else if(Rc(n,l,c,p,x,e)!==0)return!1;l=p,c=x}}return!0}function Qf(n,e,t,i,s){let r=Math.hypot(i-e,s-t),o=Math.max(1,Math.ceil(r/(64*.5)));for(let a=1;a<=o;a++){let l=a/o,c=Sr(Math.floor((e+(i-e)*l)/64),Math.floor((t+(s-t)*l)/64));if(c<0||n.nav.terrain[c])return!1}return!0}function Cc(n){let e={seed:n>>>0,rng:Hf(n),t:0,tick:0,resources:[],barrels:[],loot:[],bullets:[],rockets:[],grenades:[],satchels:[],fences:[],fires:[],wrecks:[],animals:[],guards:[],dummies:[],structures:new Map,walls:new Map,deploys:new Map,units:[],teams:[],transports:[],trains:[],convoys:[],airdrop:null,plane:null,airdropT:150,signal:null,patrol:null,patrolT:0,lockedCrate:null,crateT:0,quarry:null,trainT:0,convoyT:0,clouds:null,fogBanks:null,fireflies:null,footprints:[],weather:{mode:"clear",timer:28,rain:0,boltT:0,flash:0,fog:0,fogTimer:18,fogOn:!1},wind:0,player:{x:he.w/2,y:he.h/2+260,vx:0,vy:0,angle:0,walk:200,run:340,recoil:0,health:100,maxhp:100,hurt:0,regenDelay:0,dead:!1,deadT:0,invuln:0,moving:!1,inCopter:!1,facemask:0,bodyArmor:0,rifleLaser:!1,poison:0,swing:0,gatherCd:0,lastHitBy:null},inv:{wood:1e4,stone:1e4,metal:1e4,scrap:0,hqm:0,fence:10,grenade:3,signal:0},owned:{pistol:!0,rifle:!1,minigun:!1,rocket:!1,sniper:!1,shotgun:!1,hmg:!1},weapons:e0(),slot:0,buildMode:!1,buildPiece:"wall",buildRot:0,jackhammer:!1,ghost:!0,copter:null,playerKills:0,deathMark:null,bounty:null,raids:[],elims:[],raidAlarm:null,breachT:{},shake:0,aggressor:-1,aggressorOwner:null,aggroT:0,roleT:0,aliveBases:0,dbSweepT:0,events:[],muzzle:null,blasts:[],scorch:[],flashes:[],floats:[],particles:[],cmd:{mx:0,my:0,fire:!1,fireHeld:!1,up:!1,down:!1,left:!1,right:!1,run:!1},metrics:{hardUnstick:0,wallPhase:0,stuckTotal:0,maxStuck:0,repaths:0,pathFails:0,act:{},raidsLaunched:0,tcKilled:0,elims:0,winner:null,decisiveT:null,workerLog:[],stuckLog:[],regionStuck:{base:0,lake:0,monument:0,open:0}}};return Wf(e),$f(e),t0(e),e.trainT=e.rng.rand(20,60),e.patrolT=e.rng.rand(180,280),e.crateT=e.rng.rand(100,180),e.convoyT=e.rng.rand(120,200),e}function e0(){let n={};for(let e in on){let t=on[e];n[e]={ammo:t.magSize,reserve:t.reserve,reloading:0,cd:0,spin:0}}return n}function t0(n){let e=n.rng,t=[{x:n.world.shop.x,y:n.world.shop.y,r:Mt+500},{x:n.player.x,y:n.player.y,r:700},...n.world.monuments.map(i=>({x:i.x,y:i.y,r:Mt+320}))];for(let i=0;i<dt.TEAM_COUNT;i++){let s=null;for(let f=0;f<120&&!s;f++){let h=e.rand(1400,he.w-1400),d=e.rand(1400,he.h-1400);n.world.landFactor(h,d)<.12||n.world.lakeAt(h,d)||n.world.lakes.some(u=>ne(h,d,u.x,u.y)<u.r+560)||n.world.railDist(h,d)<400||n.world.pathDist(h,d)<340||t.some(u=>ne(h,d,u.x,u.y)<u.r)||(s={x:h,y:d})}if(!s)continue;t.push({x:s.x,y:s.y,r:Vi});let r=e.next(),o=r<.25,a=r>=.75,l={id:i,owner:"e"+i,col:dt.COLS[i%dt.COLS.length],hard:o,weak:a,role:["raider","turtle","nomad"][i%3],shotgun:e.chance(.3),eliminated:!1,bases:[],brain:{sealed:!0,decaying:!1,ready:!1,attack:!1,attackers:0,urgent:!1,aggressor:!1,raidTarget:null,raidPhase:null,breachKey:null,breachT:0,buildHoldT:0,builderId:null,lootCd:0,qCd:0,sigCd:0,statusT:e.rand(0,.5),stage:null,stageT:0}};n.teams.push(l);let c=Pr(n,l,s.x,s.y,!0);c.inv={wood:120,stone:30,metal:10},c.unfounded=!0,c.siteX=s.x,c.siteY=s.y,c.copter={x:s.x-256,y:s.y,angle:0,rotor:0,spin:0,vx:0,vy:0,hp:160,max:160,destroyed:!1};for(let f=0;f<3;f++){let h=Pr(n,l,s.x+e.rand(-46,46),s.y+e.rand(24,64),!1);h.unfounded=!0,h.siteX=s.x,h.siteY=s.y}}}function Pr(n,e,t,i,s){let r=n.rng,o={id:e.id,owner:e.owner,col:e.col,primary:!!s,worker:!s,ally:!1,hard:e.hard,weak:e.weak,shotgun:e.shotgun,role:e.role,x:t,y:i,vx:0,vy:0,angle:r.rand(0,Math.PI*2),hx:t,hy:i,tcKey:null,doorX:t,doorY:i+64,doorGy:Math.floor(i/64)+1,hp:100,max:100,dead:!1,respawnT:0,eliminated:!1,regenT:0,lastHitBy:null,inv:{wood:0,stone:0,metal:0},scrap:0,rockets:0,satchels:0,grenades:0,hqm:0,gun:"pistol",rifleLaser:!1,facemask:e.hard?1:0,bodyArmor:e.hard?2:0,jack:!1,kills:0,state:"gather",act:"gather",unfounded:!1,siteX:0,siteY:0,think:r.rand(0,1),gunCd:0,rkCd:0,gnCd:0,fenceCd:0,expandT:r.rand(3,9),retaliateT:0,threatX:0,threatY:0,disengageT:0,defendT:0,defHold:0,defTgt:null,retreat:!1,raid:null,wasRaid:!1,raidCd:0,raidBias:r.next(),raidUrge:0,defDuty:!1,buildDuty:!1,rocketer:!1,lootRun:null,qRun:null,monRun:!1,monRunT:0,monCd:0,monStay:0,tgtNode:null,skipNode:null,skipT:0,lootTgt:null,lootSkip:null,lootSkipT:0,lane:r.rand(-12,12),hoff:r.rand(-26,26),path:null,pathI:0,pathGX:0,pathGY:0,pathT:0,navStamp:0,repathN:0,noPathT:0,progT:0,progBest:1e9,stuckT:0,baseT:0,idleT:0,aiNetT:0,aiPx:t,aiPy:i,retT:0,maintT:-10,hireT:0,stT:0,expT:r.rand(40,80),fwdT:0,endgame:!1,copter:null,flying:!1,aboard:null,tradeDone:!1,parkChk:0,gathering:!1,swing:0,hf:!1,strafeT:0,strafeS:1,backoff:!1,tickPhase:n.units.length%9};return n.units.push(o),o}function ed(n){let e=n.rng,t=n.world.shop,i=n0(n),r=Pr(n,{id:-1,owner:Ge,col:"#7ec850",hard:!1,weak:!1,shotgun:!1,role:"raider"},t.x+e.rand(-60,60),t.y+(t.r||120)+40,!1);return r.ally=!0,r.gun="rifle",r.col="#7ec850",r.raidUrge=e.rand(12,24),r.facemask=0,r.bodyArmor=0,i?(r.hx=i.hx,r.hy=i.hy,r.tcKey=i.tcKey):(r.hx=n.player.x,r.hy=n.player.y),r.doorX=r.hx,r.doorY=r.hy+64,r.doorGy=Math.floor(r.hy/64)+1,r}function n0(n){for(let[e,t]of n.deploys)if(t.type==="cupboard"&&t.owner===Ge){let[i,s]=e.split(",").map(Number);return{owner:Ge,tcKey:e,hx:i*64+64/2,hy:s*64+64/2,isPlayer:!0}}return null}var td=(n,e)=>n.teams.find(t=>t.owner===e)||null;function We(n,e,t,i,s){let r=0,o=n.floats[n.floats.length-1];o&&n.t-o.born<1&&Math.abs(o.ox-e)<60&&Math.abs(o.oy-t)<44&&(r=o.lift+15),n.floats.push({x:e,y:t-r,ox:e,oy:t,lift:r,text:i,col:s||"#e8e2cf",vy:-26,life:.9,max:.9,born:n.t}),n.floats.length>90&&n.floats.shift()}function ft(n,e,t,i,s,r){for(let o=0;o<s;o++){let a=n.rng.rand(0,Math.PI*2),l=n.rng.rand(.3*r,r);n.particles.push({x:e,y:t,vx:Math.cos(a)*l,vy:Math.sin(a)*l,life:n.rng.rand(.25,.6),max:.6,r:n.rng.rand(1.5,3.5),col:i})}n.particles.length>900&&n.particles.splice(0,n.particles.length-900)}function Et(n,e,t,i,s,r){let o=n.rng.rand(0,Math.PI*2),a=n.rng.rand(40,90);n.loot.push({x:e,y:t,vx:Math.cos(o)*a,vy:Math.sin(o)*a,kind:i,amt:s,gun:r||null,life:0,bob:n.rng.rand(0,Math.PI*2)})}function an(n,e,t,i,s){if(s<=0)return;let r=Math.min(12,Math.max(1,Math.ceil(s/50))),o=s;for(let a=0;a<r;a++){let l=Math.min(o,Math.ceil(s/r));if(l<=0)break;Et(n,e+n.rng.rand(-14,14),t+n.rng.rand(-14,14),i,l),o-=l}}function nd(n,e,t,i){if(i.store)for(let s of["wood","stone","metal"])an(n,e,t,s,i.store[s]|0),i.store[s]=0}function id(n,e,t,i){let s=n.raids.find(r=>r.id===i);if(s){s.x=e,s.y=t,s.t=60;return}n.raids.push({x:e,y:t,id:i,t:60}),n.raids.length>40&&n.raids.shift()}function Zo(n,e){if(!e)return;if(e===Ge){n.playerKills++,n.inv.scrap+=12;return}let t=n.units.find(i=>i.owner===e&&i.primary&&!i.eliminated)||n.units.find(i=>i.owner===e&&!i.eliminated);t&&(t.kills++,t.scrap+=12)}function Lt(n,e){let t=n.split(","),i=+t[1],s=+t[2];return t[0]==="V"?[i*64,s*64,i*64,(s+1)*64]:t[0]==="H"?[i*64,s*64,(i+1)*64,s*64]:e&&e.rot===1?[i*64,(s+1)*64,(i+1)*64,s*64]:[i*64,s*64,(i+1)*64,(s+1)*64]}var Sc=(n,e)=>[Le("V",n,e),Le("V",n+1,e),Le("H",n,e),Le("H",n,e+1),Le("D",n,e)];function Pc(n,e,t,i,s){let r=Math.floor((e-i)/64),o=Math.floor((e+i)/64),a=Math.floor((t-i)/64),l=Math.floor((t+i)/64);for(let c=a;c<=l;c++)for(let f=r;f<=o;f++)for(let h of Sc(f,c)){let d=n.walls.get(h);if(d&&d.hp>0&&s(h,d)===!0)return!0}return!1}function Ir(n,e,t,i){let s=n.deploys.get(Ye(Math.floor(e/64),Math.floor(t/64)));return!s||i&&s.type==="cupboard"&&s.owner===i?!1:s.type==="turret"||s.type==="cupboard"||s.type==="box"}function i0(n,e,t,i,s){if(Ir(n,e,t,s))return!0;for(let r=0;r<8;r++){let o=r/8*Math.PI*2;if(Ir(n,e+Math.cos(o)*i,t+Math.sin(o)*i,s))return!0}return!1}function Ic(n,e,t,i){for(let s of n.world.boulders)if(ue(e,t,s.x,s.y)<(i+s.r)*(i+s.r))return!0;return!1}function Dr(n,e,t){for(let i of n.world.boulders)if(ue(e,t,i.x,i.y)<(i.r+12)*(i.r+12))return i;return null}function ri(n,e,t,i,s){for(let r of n.world.boulders)if(wt(r.x,r.y,e,t,i,s)<r.r)return!0;return!1}function s0(n,e,t,i){for(let s of n.fences)if(!(s.hp<=0)&&wt(e,t,s.x0,s.y0,s.x1,s.y1)<i+4)return s;return null}function bt(n,e,t,i,s={}){if(!n.world.onLand(e,t)||Ic(n,e,t,i))return!0;if(!Kf(n,e,t))return!1;if(i0(n,e,t,i,s.passOwner)||s0(n,e,t,i))return!0;let r=!1;return Pc(n,e,t,i+8,(o,a)=>{if(a.type==="door"&&a.open)return!1;if(a.type==="door"&&s.openOwnDoors&&a.lock&&a.lock.by===s.passOwner)return a.open=!0,a.closeT=n.t+1,n.nav.stamp++,!1;let l=Lt(o,a);if(wt(e,t,l[0],l[1],l[2],l[3])<i+4)return r=!0,!0}),r}function Bt(n,e,t,i,s){let r=Math.min(e,i)-64,o=Math.max(e,i)+64,a=Math.min(t,s)-64,l=Math.max(t,s)+64,c=Math.floor(r/64),f=Math.floor(o/64),h=Math.floor(a/64),d=Math.floor(l/64),u=Math.hypot(i-e,s-t);if(u>192){let p=Math.ceil(u/(64*.5)),x=new Set;for(let m=0;m<=p;m++){let g=m/p,y=Math.floor((e+(i-e)*g)/64),M=Math.floor((t+(s-t)*g)/64),w=y*10007+M;if(!x.has(w)){x.add(w);for(let C of Sc(y,M)){let T=n.walls.get(C);if(!T||T.hp<=0||T.type==="door"&&T.open)continue;let D=Lt(C,T);if(si(e,t,i,s,D[0],D[1],D[2],D[3]))return!0}}}return!1}for(let p=h;p<=d;p++)for(let x=c;x<=f;x++)for(let m of Sc(x,p)){let g=n.walls.get(m);if(!g||g.hp<=0||g.type==="door"&&g.open)continue;let y=Lt(m,g);if(si(e,t,i,s,y[0],y[1],y[2],y[3]))return!0}return!1}function yt(n,e,t){return ue(e,t,n.world.shop.x,n.world.shop.y)<Mt*Mt}function Hs(n,e,t){for(let i of n.world.monuments)if(ue(e,t,i.x,i.y)<wc*wc)return i;return null}function $o(n,e,t){return wt(n,e,t.px,t.py,t.x,t.y)<kf}var lt=(n,e)=>({x:n*64+64/2,y:e*64+64/2});function r0(n,e,t,i){let s=null,r=Ot*Ot;for(let[o,a]of n.deploys){if(a.type!=="cupboard"||i&&a.owner!==i)continue;let[l,c]=o.split(",").map(Number),f=lt(l,c),h=ue(e,t,f.x,f.y);h<r&&(r=h,s={key:o,d:a,x:f.x,y:f.y})}return s}function wn(n,e){let t=n.deploys.get(e);return t&&t.type==="cupboard"?t:null}var An={has(n,e){for(let t in e){let i=0;for(let s of n)i+=s[t]||0;if(i<e[t])return!1}return!0},pay(n,e){if(!An.has(n,e))return!1;for(let t in e){let i=e[t];for(let s of n){let r=Math.min(i,s[t]||0);if(s[t]=(s[t]||0)-r,i-=r,i<=0)break}}return!0}};function o0(n,e,t,i){let s=t,r=t,o=i,a=i,l=!1;for(let[c,f]of n.structures){if(f.owner!==e)continue;let[h,d]=c.split(",").map(Number);Math.abs(h-t)*64>Ot||Math.abs(d-i)*64>Ot||(l=!0,s=Math.min(s,h),r=Math.max(r,h),o=Math.min(o,d),a=Math.max(a,d))}return l?r-s+1>Mc||a-o+1>Mc:!1}function sd(n,e){let t=e.split(","),i=+t[1],s=+t[2];return t[0]==="V"?n.structures.has(Ye(i-1,s))||n.structures.has(Ye(i,s)):n.structures.has(Ye(i,s-1))||n.structures.has(Ye(i,s))}function Dc(n,e,t,i){let s=Kt[t];if(!s)return!1;if(s.cat==="cell"){let{gx:r,gy:o}=i,a=lt(r,o);if(r<1||o<1||a.x>13760||a.y>9152||yt(n,a.x,a.y)||Hs(n,a.x,a.y)||Dr(n,a.x,a.y)||!n.world.onLand(a.x,a.y)||n.world.lakeAt(a.x,a.y))return!1;if(s.found)return!(n.structures.has(Ye(r,o))||n.deploys.has(Ye(r,o))||o0(n,e,r,o)||a0(n,r,o));if(n.deploys.has(Ye(r,o))||(s.tc||s.box)&&!n.structures.has(Ye(r,o)))return!1;if(s.tc){if(e===Ge&&[...n.deploys.values()].some(l=>l.type==="cupboard"&&l.owner===Ge))return!1;for(let[l,c]of n.deploys){if(c.type!=="cupboard")continue;let[f,h]=l.split(",").map(Number),d=lt(f,h);if(ne(a.x,a.y,d.x,d.y)<Vi)return!1}}return!(s.turret&&!r0(n,a.x,a.y,e))}if(s.cat==="edge"){let r=i.key;if(n.walls.has(r)||!sd(n,r))return!1;let a=Lt(r,{type:t}),l=(a[0]+a[2])/2,c=(a[1]+a[3])/2;return!(yt(n,l,c)||Hs(n,l,c))}if(s.cat==="diag"){let r=i.key;if(n.walls.has(r))return!1;let o=r.split(",");return!!n.structures.has(Ye(+o[1],+o[2]))}return!1}function a0(n,e,t){let i=lt(e,t),s=r=>r&&!r.destroyed&&Math.abs(r.x-i.x)<38&&Math.abs(r.y-i.y)<38;if(s(n.copter))return!0;for(let r of n.units)if(s(r.copter))return!0;return!1}function rd(n,e,t,i,s,r={}){let o=Kt[t];if(!Dc(n,e,t,i)||s&&!An.pay(s,o.cost))return null;let a=r.mat||"wood",l=bi(o,a),c;return o.cat==="cell"&&o.found?(c={type:t,mat:a,hp:l,max:l,owner:e,hitT:-100,rot:(r.rot||0)&3},n.structures.set(Ye(i.gx,i.gy),c)):o.cat==="cell"?(c={type:t,mat:"wood",hp:o.hp,max:o.hp,owner:e,hitT:-100},o.store&&(c.store={wood:0,stone:0,metal:0,scrap:0}),o.turret&&(c.tier=r.tier||1,c.angle=0,c.cd=0,c.mag=12,c.reload=0,c.ext=!!r.ext,c.scanT=n.rng.rand(.5,4.5)),(o.tc||o.box||o.door)&&(c.lock={by:e}),n.deploys.set(Ye(i.gx,i.gy),c)):(c={type:t,mat:a,hp:bi(o,a),max:bi(o,a),owner:e,hitT:-100,open:!1,rot:(r.rot||0)&1},o.door&&(c.lock={by:e}),n.walls.set(i.key,c)),n.nav.stamp++,c}function od(n,e,t,i){let s=Df[e.mat];return!s||!t.up||i&&!An.pay(i,s.cost)?!1:(e.mat=s.to,e.max=bi(t,e.mat),e.hp=e.max,!0)}function Vs(n,e,t,i){let s=n.walls.get(e);if(!s||s.hp<=0)return!1;if(s.hp-=t,s.hitT=n.t,s.hp<=0){let r=Lt(e,s);return ft(n,(r[0]+r[2])/2,(r[1]+r[3])/2,"#8a7a5c",10,160),n.walls.delete(e),n.breachT[e]=n.t,n.nav.stamp++,n.events.push({type:"wallDown",x:(r[0]+r[2])/2,y:(r[1]+r[3])/2}),!0}return!1}function Lr(n,e,t){let i=n.structures.get(e);return i?(i.hp-=t,i.hitT=n.t,i.hp<=0?(n.structures.delete(e),n.breachT[e]=n.t,Ko(n,e),n.nav.stamp++,!0):!1):!1}function xs(n,e,t,i){let s=n.deploys.get(e);return s?(s.hp-=t,s.hitT=n.t,s.hp<=0?(Lc(n,e,s,i),!0):!1):!1}function Lc(n,e,t,i){let[s,r]=e.split(",").map(Number),o=lt(s,r);if(nd(n,o.x,o.y,t),n.deploys.delete(e),n.nav.stamp++,ft(n,o.x,o.y,"#caa24a",14,220),t.type==="cupboard"){if(We(n,o.x,o.y,"TC destroyed!","#ff7a4a"),n.metrics.tcKilled++,t.owner===Ge)for(let l of["wood","stone","metal"])n.inv[l]>0;Nc(n,t.owner,o.x,o.y);let a=td(n,t.owner);if(a){let l=a.bases.find(c=>c.tcKey===e);l&&(l.dead=!0)}}}function Nc(n,e,t,i){for(let[s,r]of[...n.walls]){if(r.owner!==e)continue;let o=Lt(s,r);ne((o[0]+o[2])/2,(o[1]+o[3])/2,t,i)<560&&n.walls.delete(s)}for(let[s,r]of[...n.structures]){if(r.owner!==e)continue;let[o,a]=s.split(",").map(Number),l=lt(o,a);ne(l.x,l.y,t,i)<560&&(n.structures.delete(s),ft(n,l.x,l.y,"#6b5a40",3,120))}for(let[s,r]of[...n.deploys]){if(r.owner!==e||r.type==="cupboard")continue;let[o,a]=s.split(",").map(Number),l=lt(o,a);ne(l.x,l.y,t,i)<560&&n.deploys.delete(s)}n.nav.stamp++}function Ko(n,e){let[t,i]=e.split(",").map(Number);for(let s of[Le("D",t,i)])n.walls.delete(s);for(let s of[Le("V",t,i),Le("V",t+1,i),Le("H",t,i),Le("H",t,i+1)])n.walls.has(s)&&!sd(n,s)&&n.walls.delete(s)}function l0(n,e,t){let i={};for(let s in n.cost)i[s]=Math.max(1,Math.ceil(n.cost[s]*t));return(e.mat==="stone"||e.mat==="metal")&&(i.stone=(i.stone||0)+Math.ceil(15*t)),e.mat==="metal"&&(i.metal=(i.metal||0)+Math.ceil(20*t)),i}function ad(n,e,t,i,s=Ho){if(e.hp>=e.max||n.t-e.hitT<s)return!1;let r=Math.min(e.max-e.hp,e.max*.2),o=r/e.max;return An.pay(i,l0(t,e,o))?(e.hp+=r,!0):!1}function ld(n,e){if(n.decayT=(n.decayT||0)+e,n.decayT<.5)return;let t=n.decayT;n.decayT=0;let i=[];for(let[r,o]of n.deploys){if(o.type!=="cupboard")continue;let[a,l]=r.split(",").map(Number);i.push({key:r,d:o,...lt(a,l),n:0})}let s=(r,o,a)=>{let l=r.split(","),c=+l[l.length-2],f=+l[l.length-1],h=lt(c,f),d=null,u=Ot*Ot;for(let p of i){let x=ue(h.x,h.y,p.x,p.y);x<u&&(u=x,d=p)}if(d){if(d.n++,d.d.store.wood+d.d.store.stone+d.d.store.metal>0)return;let x=Math.sqrt(u)/Ot,m=bc+(Uf-bc)*x;o.hp-=o.max*(t/m)}else o.hp-=o.max*(t/Nf);o.hp<=0&&(a?(n.walls.delete(r),n.nav.stamp++):(n.structures.delete(r),Ko(n,r),n.nav.stamp++))};for(let[r,o]of[...n.walls])s(r,o,!0);for(let[r,o]of[...n.structures])s(r,o,!1);for(let r of i){let o=r.n*Er*t;for(let a of["wood","stone","metal"]){if(o<=0)break;let l=Math.min(o,r.d.store[a]);r.d.store[a]-=l,o-=l}}}function Jo(n,e,t,i){let s=Math.floor(t/64),r=Math.floor(i/64),o=e.owner;for(let p=0;p<3;p++)for(let x=0;x<3;x++)n.structures.set(Ye(s+x,r+p),{type:"floor",mat:"wood",hp:100,max:100,owner:o,hitT:-100});let a=p=>n.walls.set(p,{type:"wall",mat:"wood",hp:100,max:100,owner:o,hitT:-100,open:!1}),l=p=>n.walls.set(p,{type:"door",mat:"wood",hp:50,max:50,owner:o,hitT:-100,open:!1,lock:{by:o}});for(let p=0;p<3;p++)a(Le("H",s+p,r));a(Le("H",s,r+3)),a(Le("H",s+2,r+3)),l(Le("H",s+1,r+3));for(let p=0;p<3;p++)a(Le("V",s,r+p)),a(Le("V",s+3,r+p));let c=s+1,f=r+1;l(Le("H",c,f)),a(Le("V",c,f)),a(Le("V",c+1,f)),l(Le("H",c,f+1));let h=Ye(c,f);if(n.deploys.set(h,{type:"cupboard",mat:"wood",hp:300,max:300,owner:o,hitT:-100,lock:{by:o},store:{wood:200+n.rng.randi(20,70),stone:0,metal:n.rng.randi(0,40),scrap:0}}),n.deploys.set(Ye(s+2,r),{type:"turret",mat:"wood",hp:150,max:150,owner:o,hitT:-100,tier:e.hard?3:e.weak?1:2,angle:0,cd:0,mag:12,reload:0,ext:!1,scanT:n.rng.rand(.5,4.5)}),e.hard)for(let[,p]of n.walls)p.owner===o&&p.mat==="wood"&&(p.mat="metal",p.max=bi(Kt[p.type],"metal"),p.hp=p.max);let d=lt(c,f),u={owner:o,tcKey:h,hx:d.x,hy:d.y,doorX:(s+1)*64+64/2,doorY:(r+3)*64,doorGy:r+3,kind:"home",dead:!1,cleared:!1};return e.bases.push(u),Uc(n,e,u),n.nav.stamp++,u}function jo(n,e,t,i){let s=1e9,r=1e9,o=-1e9,a=-1e9,l=!1;for(let[c,f]of n.structures){if(f.owner!==e)continue;let[h,d]=c.split(",").map(Number),u=lt(h,d);ue(u.x,u.y,t,i)>Ot*Ot||(l=!0,s=Math.min(s,h),o=Math.max(o,h),r=Math.min(r,d),a=Math.max(a,d))}return l?{minx:s,miny:r,maxx:o,maxy:a}:null}function Uc(n,e,t){let i=jo(n,e.owner,t.hx,t.hy);if(!i)return;let s=Math.floor((i.minx+i.maxx)/2),r=Math.floor((i.miny+i.maxy)/2),o=[Le("H",s,i.miny),Le("H",s,i.maxy+1),Le("V",i.minx,r),Le("V",i.maxx+1,r)];for(let a of o){let l=n.walls.get(a);l&&l.owner===e.owner&&l.type==="wall"&&l.hp>0&&(l.type="door",l.lock={by:e.owner},l.open=!1)}n.nav.stamp++}function Nr(n,e,t){let i=e.owner,s=Le("H",Math.floor(t.doorX/64),t.doorGy);for(let[r,o]of n.structures){if(o.owner!==i)continue;let[a,l]=r.split(",").map(Number),c=lt(a,l);if(ue(c.x,c.y,t.hx,t.hy)>Ot*Ot)continue;let f=[[Le("V",a,l),Ye(a-1,l)],[Le("V",a+1,l),Ye(a+1,l)],[Le("H",a,l),Ye(a,l-1)],[Le("H",a,l+1),Ye(a,l+1)]];for(let[h,d]of f){let u=n.structures.get(d);if(u&&u.owner===i||h===s)continue;let p=n.walls.get(h);if(!p||p.hp<=0)return h}}return null}function kc(n,e,t,i){return n.t-(n.breachT[t]||-1e9)<Lf||!An.pay(i,{wood:40})?!1:(n.walls.set(t,{type:"wall",mat:"wood",hp:100,max:100,owner:e.owner,hitT:-100,open:!1}),n.nav.stamp++,!0)}function Qo(n,e,t){let i=null,s=.6;for(let[r,o]of n.walls){if(o.owner!==e.owner||o.type==="door"||o.hp<=0||n.t-o.hitT<Ho)continue;let a=Lt(r,o);if(ue((a[0]+a[2])/2,(a[1]+a[3])/2,t.hx,t.hy)>Ot*Ot)continue;let l=o.hp/o.max;l<s&&(s=l,i=r)}return i}function cd(n,e,t,i){let s=n.walls.get(t);if(!s||n.t-s.hitT<Ho)return!1;let r=s.mat==="metal"?{metal:8}:s.mat==="stone"?{stone:8}:{wood:12};return An.pay(i,r)?(s.hp=Math.min(s.max,s.hp+s.max*.5),!0):!1}function In(n,e){n.bullets.push({x:e.x,y:e.y,px:e.x,py:e.y,vx:Math.cos(e.angle)*e.speed,vy:Math.sin(e.angle)*e.speed,life:e.life,dmg:e.dmg,from:e.from,col:e.col||null,turret:!!e.turret,enemy:e.from!==Ge,bounces:0,ricochet:!1,dist:0})}function Ur(n,e,t,i,s){let r=on.rocket;n.rockets.push({x:e,y:t,vx:Math.cos(i)*r.speed,vy:Math.sin(i)*r.speed,life:r.range,w:r,smoke:0,from:s}),n.events.push({type:"rocketLaunch",x:e,y:t})}var c0=(n,e,t)=>e*(1-Ec(t?n.player.facemask:n.player.bodyArmor,t?"head":"body")),h0=(n,e,t)=>e*(1-Ec(t?n.facemask:n.bodyArmor,t?"head":"body"));function ys(n,e,t,i,s){let r=n.player;if(!(r.dead||r.invuln>0||n.ghost||yt(n,r.x,r.y))){if(r.health-=e,r.regenDelay=4.5,r.hurt=.28,s&&(r.lastHitBy=s),t!==void 0){let o=Math.max(1,ne(t,i,r.x,r.y));r.x+=(r.x-t)/o*7,r.y+=(r.y-i)/o*7}ft(n,r.x,r.y,"#9e2b1e",6,160),r.health<=0&&kr(n)}}function kr(n,e){let t=n.player;if(t.dead)return;t.dead=!0,t.deadT=e?4:2.2,n.deathMark={x:t.x,y:t.y},Zo(n,t.lastHitBy);for(let a of["wood","stone","metal"])an(n,t.x,t.y,a,n.inv[a]),n.inv[a]=0;let i=0;for(let a in n.weapons)a!=="rocket"&&(i+=n.weapons[a].ammo+n.weapons[a].reserve,n.weapons[a].ammo=0,n.weapons[a].reserve=0);let s=Math.min(8,Math.ceil(i/30));for(let a=0;a<s;a++)Et(n,t.x,t.y,"ammo",Math.ceil(i/Math.max(1,s)));let r=n.weapons.rocket,o=Math.min(12,r.ammo+r.reserve);r.ammo=0,r.reserve=0;for(let a=0;a<o;a++)Et(n,t.x,t.y,"rocket",1);n.events.push({type:"playerDie",x:t.x,y:t.y})}function _s(n,e,t,i,s,r){e.dead||e.flying||e.eliminated||yt(n,e.x,e.y)||(e.hp-=t,ft(n,e.x,e.y,"#9e2b1e",4,150),e.regenT=4,e.lastHitBy=r||null,i!==void 0&&(e.threatX=i,e.threatY=s,e.retaliateT=2.2),e.hp<=0&&Oc(n,e))}function Oc(n,e){if(e.dead)return;e.dead=!0,e.respawnT=15,e.flying=!1,e.aboard=null;for(let s of["wood","stone","metal"])an(n,e.x,e.y,s,e.inv[s]),e.inv[s]=0;let t=Math.min(12,e.rockets);e.rockets=0;for(let s=0;s<t;s++)Et(n,e.x,e.y,"rocket",1);let i=Math.min(6,e.grenades);e.grenades=0;for(let s=0;s<i;s++)Et(n,e.x,e.y,"rocket",1);Et(n,e.x,e.y,"ammo",n.rng.randi(24,60)),e.gun!=="pistol"&&(Et(n,e.x,e.y,"gun",1,e.gun),e.gun="pistol"),e.scrap>0&&(an(n,e.x,e.y,"scrap",e.scrap),e.scrap=0),e.id===n.bounty&&e.lastHitBy===Ge&&(n.inv.scrap+=Tc,We(n,e.x,e.y,"+"+Tc+" bounty!","#ffd76b"),n.bounty=null),Zo(n,e.lastHitBy),ft(n,e.x,e.y,"#9e2b1e",14,220),We(n,e.x,e.y,"down","#e2664a")}function hd(n,e,t,i){e.dead||(e.hp-=t,ft(n,e.x,e.y,"#9e2b1e",5,140),e.hp<=0&&(e.dead=!0,e.respawnT=82,ft(n,e.x,e.y,"#9e2b1e",20,220),an(n,e.x,e.y,"scrap",n.rng.randi(4,9)),Et(n,e.x,e.y,"ammo",n.rng.randi(12,26)),i===Ge?(n.inv.scrap+=8,We(n,e.x,e.y,"+8 guard","#ffe07a")):(We(n,e.x,e.y,"guard down","#e2664a"),Zo(n,i))))}function ea(n,e,t,i,s,r){if(!e.dead){if(e.hp-=t,e.hit=.12,i!==void 0){let o=Math.max(1,ne(i,s,e.x,e.y)),a=Math.min(16,t*.4);e.x+=(e.x-i)/o*a,e.y+=(e.y-s)/o*a}if(e.foe=r||e.foe,e.aggro=e.aggro||"hit",We(n,e.x,e.y-e.r,"-"+Math.round(t),"#e8b06a"),e.hp<=0){e.dead=!0,e.respawnT=n.rng.rand(11,18),ft(n,e.x,e.y,"#9e2b1e",12,200);let o=gs[e.type];o&&o.loot&&Et(n,e.x,e.y,o.loot[0],n.rng.randi(o.loot[1],o.loot[2])),We(n,e.x,e.y,(o?e.type:"animal")+" down","#caa46a")}}}function fd(n,e,t,i){if(e.hp-=t,e.hp>0){ft(n,e.x,e.y,"#d2664a",3,120);return}ft(n,e.x,e.y,e.crate?"#caa15f":"#d2664a",14,230),e.tier==="mon"?(an(n,e.x,e.y,"scrap",n.rng.randi(e.crate?22:12,e.crate?42:26)),Et(n,e.x,e.y,"ammo",n.rng.randi(45,85)),e.respawnT=82):e.tier==="road"?(an(n,e.x,e.y,"scrap",n.rng.randi(8,16)),Et(n,e.x,e.y,"ammo",n.rng.randi(16,34)),e.respawnT=22):(an(n,e.x,e.y,"scrap",n.rng.randi(3,7)),an(n,e.x,e.y,"metal",n.rng.randi(2,5)),e.respawnT=22),e.hp=0}function f0(n,e){let t=Math.floor(e.x/64),i=Math.floor(e.y/64),s=[Le("V",t,i),Le("V",t+1,i),Le("H",t,i),Le("H",t,i+1),Le("D",t,i)];for(let o of s){let a=n.walls.get(o);if(!a||a.hp<=0||a.type==="door"&&a.open)continue;let l=Lt(o,a);if(si(e.px,e.py,e.x,e.y,l[0],l[1],l[2],l[3])||wt(e.x,e.y,l[0],l[1],l[2],l[3])<10)return d0(n,a)!==e.from&&Vs(n,o,Math.max(1,Math.round(e.dmg*.1)),e.from),{kind:"wall",key:o,w:a}}let r=n.deploys.get(Ye(t,i));if(r&&r.owner!==e.from){let o=lt(t,i);if(!Bt(n,e.px,e.py,o.x,o.y)){let a=r.type==="cupboard"?.05:.25;xs(n,Ye(t,i),Math.max(1,Math.round(e.dmg*a)),e.from)}return{kind:"deploy",key:Ye(t,i),d:r}}return null}var d0=(n,e)=>e.owner;function u0(n,e,t){if(t&&t.kind==="wall"){let i=t.key.split(",");if(i[0]==="V")return{x:1,y:0};if(i[0]==="H")return{x:0,y:1};let s=Lt(t.key,t.w),r=s[2]-s[0],o=s[3]-s[1],a=Math.hypot(r,o);return{x:-o/a,y:r/a}}if(t&&t.cx!==void 0){let i=Math.max(1,ne(e.px,e.py,t.cx,t.cy));return{x:(e.px-t.cx)/i,y:(e.py-t.cy)/i}}return{x:0,y:1}}function p0(n,e,t,i){if(e.bounces>=2||!n.rng.chance(i))return!1;let s=u0(n,e,t);s.x*(e.px-e.x)+s.y*(e.py-e.y)<0&&(s.x=-s.x,s.y=-s.y);let r=e.vx*s.x+e.vy*s.y,o=e.vx-2*r*s.x,a=e.vy-2*r*s.y,l=n.rng.rand(-.45,.45),c=Math.cos(l),f=Math.sin(l),h=o*c-a*f,d=o*f+a*c,u=Math.hypot(h,d);return h*s.x+d*s.y>=.05*u&&(o=h,a=d),e.vx=o*.6,e.vy=a*.6,e.x=e.px+s.x*6,e.y=e.py+s.y*6,e.dmg=Math.max(1,Math.round(e.dmg*.6)),e.bounces++,e.ricochet=!0,e.col="ricochet",ft(n,e.x,e.y,"#86d8ff",4,180),!0}function dd(n,e){let t=n.player;for(let i=n.bullets.length-1;i>=0;i--){let s=n.bullets[i];if(s.px=s.x,s.py=s.y,s.ricochet){let l=Math.pow(.3,e);if(s.vx*=l,s.vy*=l,Math.hypot(s.vx,s.vy)<150){n.bullets.splice(i,1);continue}}if(s.x+=s.vx*e,s.y+=s.vy*e,s.dist+=Math.hypot(s.vx,s.vy)*e,s.life-=e,s.life<=0||s.x<0||s.y<0||s.x>he.w||s.y>he.h||s.dist>3400){n.bullets.splice(i,1);continue}let r=!1,o=null;if(Pc(n,(s.px+s.x)/2,(s.py+s.y)/2,Math.abs(s.x-s.px)+Math.abs(s.y-s.py)+12,(l,c)=>{if(c.type==="door"&&c.open)return!1;let f=Lt(l,c);if(si(s.px,s.py,s.x,s.y,f[0],f[1],f[2],f[3]))return o={kind:"wall",key:l,w:c},!0}),!o&&Ir(n,s.x,s.y)){let l=Math.floor(s.x/64),c=Math.floor(s.y/64),f=n.deploys.get(Ye(l,c));if(!(f&&f.type==="turret"&&f.owner===s.from)){let h=lt(l,c);o={kind:"solid",key:Ye(l,c),d:f,cx:h.x,cy:h.y}}}let a=null;if(!o){for(let l of n.world.boulders)if(wt(l.x,l.y,s.px,s.py,s.x,s.y)<l.r){a={cx:l.x,cy:l.y};break}}if(o||a){o&&f0(n,s),p0(n,s,o||a,a?.8:.15)||(ft(n,s.px,s.py,"#bfb49a",3,110),n.bullets.splice(i,1));continue}for(let l=n.fences.length-1;l>=0;l--){let c=n.fences[l];if(si(s.px,s.py,s.x,s.y,c.x0,c.y0,c.x1,c.y1)||wt(s.x,s.y,c.x0,c.y0,c.x1,c.y1)<5){ud(n,c,s.dmg),r=!0;break}}if(r){n.bullets.splice(i,1);continue}for(let l of n.barrels)if(!(l.hp<=0)&&ue(s.x,s.y,l.x,l.y)<(l.r+2)*(l.r+2)){fd(n,l,s.dmg,s.from),r=!0;break}if(r){n.bullets.splice(i,1);continue}if(n.patrol&&s.from!=="patrol"&&wt(n.patrol.x,n.patrol.y,s.px,s.py,s.x,s.y)<34){n.patrol.hp-=s.dmg,ft(n,s.x,s.y,"#aab1b8",2,120),n.bullets.splice(i,1);continue}if(n.airdrop&&n.airdrop.fall>=1&&wt(n.airdrop.x,n.airdrop.y,s.px,s.py,s.x,s.y)<22){n.airdrop.hp-=s.dmg,n.bullets.splice(i,1);continue}for(let l of n.animals)if(!l.dead&&wt(l.x,l.y,s.px,s.py,s.x,s.y)<l.r+2){ea(n,l,s.dmg,s.px,s.py,s.from),r=!0;break}if(r){n.bullets.splice(i,1);continue}if(s.from!=="guard"){for(let l of n.guards)if(!l.dead&&wt(l.x,l.y,s.px,s.py,s.x,s.y)<Gt.r+2){let c=$o(l.x,l.y,s);hd(n,l,s.dmg*(c?Vo:1),s.from),c&&s.from===Ge&&We(n,l.x,l.y-14,"headshot","#ffe07a"),r=!0;break}}if(r){n.bullets.splice(i,1);continue}for(let l of n.units)if(!(l.dead||l.flying||l.eliminated||l.owner===s.from)&&wt(l.x,l.y,s.px,s.py,s.x,s.y)<14){let c=$o(l.x,l.y,s),f=s.dmg*(c?Vo:1);f=h0(l,f,c);let h=s.px,d=s.py;_s(n,l,f,h,d,s.from),c&&s.from===Ge&&We(n,l.x,l.y-14,"headshot","#ffe07a"),r=!0;break}if(r){n.bullets.splice(i,1);continue}for(let l of n.transports)if(!(l.destroyed||l.owner===s.from)&&wt(l.x,l.y,s.px,s.py,s.x,s.y)<Wt.r+2){l.hp-=s.dmg,l.hp<=0&&(l.destroyed=!0),r=!0;break}if(r){n.bullets.splice(i,1);continue}for(let l of n.convoys){if(s.from==="convoy")break;if(!l.dead&&wt(l.x,l.y,s.px,s.py,s.x,s.y)<26){l.hp-=s.dmg,r=!0;break}for(let c of l.guards)if(!c.dead&&wt(c.x,c.y,s.px,s.py,s.x,s.y)<14){c.hp-=s.dmg,c.hp<=0&&(c.dead=!0,Et(n,c.x,c.y,"ammo",n.rng.randi(6,12))),r=!0;break}if(r)break}if(r){n.bullets.splice(i,1);continue}if(s.from!==Ge&&!t.dead&&!t.inCopter&&!n.ghost&&wt(t.x,t.y,s.px,s.py,s.x,s.y)<18){let l=$o(t.x,t.y,s);ys(n,c0(n,s.dmg*(l?Vo:1),l),s.px,s.py,s.from),n.bullets.splice(i,1);continue}}}function ud(n,e,t){e.hp-=t,e.hp<=0?(ft(n,e.x,e.y,"#caa46a",14,200),n.fences.splice(n.fences.indexOf(e),1),n.needFenceRefresh=!0):ft(n,e.x,e.y,"#d8b888",3,120)}function Bc(n,e,t,i,s){let r=i.splash,o=i.splashDmg,a=i.structDmg||i.splashDmg;ft(n,e,t,"#ffb24a",22,320),ft(n,e,t,"#5a534a",12,200),n.flashes.push({x:e,y:t,r,life:.25,max:.25}),n.scorch.push({x:e,y:t,r:r*.66}),n.scorch.length>36&&n.scorch.shift(),n.events.push({type:"explosion",x:e,y:t,r}),n.shake=Math.max(n.shake,16);let l=i===on.rocket||i.structDmg===50;if(l&&s!==Ge){let h=!1;for(let[d,u]of n.structures)if(u.owner===Ge){let[p,x]=d.split(",").map(Number),m=lt(p,x);if(ue(e,t,m.x,m.y)<(r+64)*(r+64)){h=!0;break}}h&&(n.raidAlarm={x:e,y:t,t:1.5})}if(l){let h=m0(n,e,t,r+128);h&&h!==s&&id(n,e,t,"raid_"+h)}for(let[h,d]of[...n.structures]){let[u,p]=h.split(",").map(Number),x=lt(u,p),m=ne(e,t,x.x,x.y);m>r+32||d.owner===s||Lr(n,h,a*(1-m/(r+32)))}for(let[h,d]of[...n.walls]){if(d.owner===s)continue;let u=Lt(h,d),p=wt(e,t,u[0],u[1],u[2],u[3]);p>r||Vs(n,h,a*(1-p/r),s)}for(let[h,d]of[...n.deploys]){if(d.owner===s)continue;let[u,p]=h.split(",").map(Number),x=lt(u,p),m=ne(e,t,x.x,x.y);m>r+25.6||Bt(n,e,t,x.x,x.y)||xs(n,h,o*(1-m/(r+25.6)),s)}for(let h of n.animals){if(h.dead)continue;let d=ne(e,t,h.x,h.y);d<r+h.r&&ea(n,h,o*(1-d/(r+h.r)),e,t,s)}for(let h of n.guards){if(h.dead)continue;let d=ne(e,t,h.x,h.y);d<r+14&&hd(n,h,o*(1-d/(r+14)),s)}for(let h of n.convoys){let d=ne(e,t,h.x,h.y);!h.dead&&d<r+26&&(h.hp-=o*1.5*(1-d/(r+26)));for(let u of h.guards){if(u.dead)continue;let p=ne(e,t,u.x,u.y);p<r+14&&(u.hp-=o*(1-p/(r+14)),u.hp<=0&&(u.dead=!0,Et(n,u.x,u.y,"ammo",n.rng.randi(6,12))))}}for(let h of n.barrels){if(h.hp<=0)continue;let d=ne(e,t,h.x,h.y);d<r+h.r&&fd(n,h,o*(1-d/(r+h.r)),s)}for(let h=n.fences.length-1;h>=0;h--){let d=n.fences[h],u=ne(e,t,d.x,d.y);u<r+23&&ud(n,d,o*(1-u/(r+23)))}let c=n.player;if(!c.dead&&!c.inCopter){let h=ne(e,t,c.x,c.y);if(h<r+16){let d=1-h/(r+16);s===Ge?n.ghost||(c.health-=Math.round(o*.45*d),c.regenDelay=4.5,c.hurt=.28,c.health<=0&&kr(n)):ys(n,Math.round(o*.45*d),e,t,s)}}for(let h of n.units){if(h.dead||h.eliminated||h.owner===s)continue;let d=ne(e,t,h.x,h.y);d<r+14&&_s(n,h,o*.8*(1-d/(r+14)),e,t,s)}let f=(h,d,u)=>{if(!h||h.destroyed||d===s)return;let p=ne(e,t,h.x,h.y);p<r+30&&g0(n,h,o*(1-p/(r+30)),u)};f(n.copter,Ge,!0);for(let h of n.units)f(h.copter,h.owner,!1,h);for(let h of n.transports){if(h.destroyed||h.owner===s)continue;let d=ne(e,t,h.x,h.y);d<r+Wt.r&&(h.hp-=o*(1-d/(r+Wt.r)),h.hp<=0&&(h.destroyed=!0))}if(i.rocket&&n.rng.chance(.25)&&pd(n,e,t),n.patrol){let h=ne(e,t,n.patrol.x,n.patrol.y);h<r+34&&(n.patrol.hp-=o*(1-h/(r+34)))}}function m0(n,e,t,i){for(let[s,r]of n.structures){let[o,a]=s.split(",").map(Number),l=lt(o,a);if(ue(e,t,l.x,l.y)<i*i)return r.owner}for(let[s,r]of n.walls){let o=Lt(s,r);if(wt(e,t,o[0],o[1],o[2],o[3])<i)return r.owner}return null}function g0(n,e,t,i,s){e.hp-=t,!(e.hp>0||e.destroyed)&&(e.destroyed=!0,zc(n,e.x,e.y),i&&n.player.inCopter&&(n.player.inCopter=!1,n.player.health=0,kr(n)))}function zc(n,e,t){ft(n,e,t,"#ffb24a",30,340),ft(n,e,t,"#5a534a",18,240),n.flashes.push({x:e,y:t,r:96,life:.25,max:.25}),n.scorch.push({x:e,y:t,r:52}),n.scorch.length>36&&n.scorch.shift(),n.wrecks.push({x:e,y:t,t:15}),n.wrecks.length>24&&n.wrecks.shift(),n.shake=Math.max(n.shake,15),n.events.push({type:"explosion",x:e,y:t,r:96})}function pd(n,e,t){n.fires.length>=80||n.fires.push({x:e,y:t,r:36,life:30,max:30,dmgT:0,spread:0,spreadT:n.rng.rand(3,7)})}function md(n,e){for(let t=n.fires.length-1;t>=0;t--){let i=n.fires[t];if(i.life-=e,i.life<=0){n.fires.splice(t,1);continue}if(i.dmgT-=e,i.dmgT<=0){i.dmgT=.3;for(let[r,o]of[...n.structures]){let[a,l]=r.split(",").map(Number),c=lt(a,l);ue(i.x,i.y,c.x,c.y)<i.r*i.r&&Lr(n,r,22*.3)}for(let[r,o]of[...n.walls]){let a=Lt(r,o);wt(i.x,i.y,a[0],a[1],a[2],a[3])<i.r&&Vs(n,r,18*.3,"fire")}let s=n.player;!s.dead&&ue(i.x,i.y,s.x,s.y)<(i.r+16)*(i.r+16)&&ys(n,15*.3,void 0,void 0,"fire");for(let r of n.units)r.dead||r.eliminated||ue(i.x,i.y,r.x,r.y)<(i.r+12)*(i.r+12)&&_s(n,r,15*.3)}if(i.spreadT-=e,i.spreadT<=0&&i.spread<3&&(i.spreadT=n.rng.rand(4,8),n.rng.chance(.25))){let s=null,r=(i.r+64)*(i.r+64);for(let[o,a]of n.structures){let[l,c]=o.split(",").map(Number),f=lt(l,c),h=ue(i.x,i.y,f.x,f.y);h<r&&!Bt(n,i.x,i.y,f.x,f.y)&&(r=h,s=f)}s&&(pd(n,s.x,s.y),i.spread++)}n.rng.chance(.3)&&n.particles.push({x:i.x+n.rng.rand(-10,10),y:i.y+n.rng.rand(-10,10),vx:n.wind*8,vy:-n.rng.rand(20,50),life:n.rng.rand(.6,1.4),max:1.4,r:n.rng.rand(2,5),col:"rgba(60,56,50,0.5)"})}}function gd(n,e){for(let t=n.satchels.length-1;t>=0;t--){let i=n.satchels[t];i.t-=e,i.t<=0&&(n.satchels.splice(t,1),Bc(n,i.x,i.y,{splash:88,splashDmg:120,structDmg:50},i.from))}}function xd(n,e){for(let t=n.grenades.length-1;t>=0;t--){let i=n.grenades[t],s=i.x,r=i.y,o=Math.pow(.9,e*60);i.vx*=o,i.vy*=o,i.x=et(i.x+i.vx*e,8,he.w-8),i.y=et(i.y+i.vy*e,8,he.h-8),i.bob+=e,i.t-=e,Bt(n,s,r,i.x,i.y)&&(i.x=s,i.y=r,i.t=0),i.t<=0&&(n.grenades.splice(t,1),Bc(n,i.x,i.y,Fs,i.from))}}function yd(n,e){for(let t=n.rockets.length-1;t>=0;t--){let i=n.rockets[t],s=i.x,r=i.y;i.x+=i.vx*e,i.y+=i.vy*e,i.life-=e,i.smoke-=e,i.smoke<=0&&(i.smoke=.016,n.particles.push({x:i.x,y:i.y,vx:n.rng.rand(-12,12),vy:n.rng.rand(-12,12),life:.5,max:.5,r:n.rng.rand(2,4),col:"rgba(120,114,104,0.5)"}));let o=i.life<=0||i.x<4||i.y<4||i.x>he.w-4||i.y>he.h-4;if(!o&&(Ir(n,i.x,i.y)||Ic(n,i.x,i.y,2))&&(o=!0),!o&&Bt(n,s,r,i.x,i.y)&&(o=!0,i.x=s,i.y=r),!o){for(let a of n.animals)if(!a.dead&&ue(i.x,i.y,a.x,a.y)<(a.r+3)*(a.r+3)){o=!0;break}}if(!o){for(let a of n.barrels)if(a.hp>0&&ue(i.x,i.y,a.x,a.y)<(a.r+3)*(a.r+3)){o=!0;break}}if(!o){let a=(l,c)=>l&&!l.destroyed&&c!==i.from&&ue(i.x,i.y,l.x,l.y)<1089;if(a(n.copter,Ge)&&(o=!0),!o){for(let l of n.units)if(a(l.copter,l.owner)){o=!0;break}}}o&&(n.rockets.splice(t,1),Bc(n,i.x,i.y,i.w,i.from))}}function _d(n,e){for(let[t,i]of n.deploys){if(i.type!=="turret")continue;let[s,r]=t.split(",").map(Number),o=lt(s,r),a=Go[i.tier||1];if(n.tick%30===0&&(i.tcOk=x0(n,i.owner)),i.tcOk===!1)continue;i.cd=Math.max(0,(i.cd||0)-e),i.reload>0&&(i.reload-=e,i.reload<=0&&(i.mag=a.mag)),i.targT=(i.targT||0)-e;let l=i.tgt||null;if(l){let c=l.ref;!c||c.dead||c.flying||c.eliminated||c===n.player&&(n.ghost||c.inCopter)||ue(o.x,o.y,c.x,c.y)>a.range*a.range*1.2?(l=null,i.tgt=null):(l.x=c.x,l.y=c.y,l.vx=c.vx||0,l.vy=c.vy||0)}if(i.targT<=0){i.targT=.12;let c=a.range*a.range;l=null;let f=(d,u,p,x,m)=>{let g=ue(o.x,o.y,d,u);g<c&&!_0(n,i.owner,o.x,o.y,d,u)&&(c=g,l={x:d,y:u,vx:p||0,vy:x||0,ref:m})};for(let d of n.animals)!d.dead&&ue(o.x,o.y,d.x,d.y)<c&&f(d.x,d.y,d.vx,d.vy,d);for(let d of n.units)!d.dead&&!d.flying&&!d.eliminated&&d.owner!==i.owner&&f(d.x,d.y,d.vx,d.vy,d);let h=n.player;i.owner!==Ge&&!h.dead&&!h.inCopter&&!n.ghost&&f(h.x,h.y,h.vx,h.vy,h),i.tgt=l}if(l){let c=ne(o.x,o.y,l.x,l.y),f=Math.min(.45,c/a.speed)*a.lead,h=Math.atan2(l.y+l.vy*f-o.y,l.x+l.vx*f-o.x),d=(i.tier===3?16:10)*e;if(i.angle=Fc(i.angle,h,d),Math.abs(vd(i.angle,h))<.22&&i.cd<=0&&i.reload<=0)if(i.mag<=0)i.reload=a.reload;else{i.mag--,i.cd=a.rof;let u=i.angle+n.rng.rand(-a.spread,a.spread);In(n,{x:o.x+Math.cos(i.angle)*Ac,y:o.y+Math.sin(i.angle)*Ac,angle:u,speed:a.speed,dmg:a.dmg,from:i.owner,life:a.range/a.speed+.1,turret:!0}),n.events.push({type:"turretFire",x:o.x,y:o.y,a:i.angle})}}else{if(n.tick%18===0||i.trk===void 0){let f=null,h=(a.range*2.2)**2;for(let d of n.units)if(!d.dead&&!d.eliminated&&d.owner!==i.owner){let u=ue(o.x,o.y,d.x,d.y);u<h&&(h=u,f=d)}i.trk=f}let c=i.trk&&!i.trk.dead?i.trk:null;if(c)i.angle=Fc(i.angle,Math.atan2(c.y-o.y,c.x-o.x),5*e);else{if(i.scanT-=e,i.scanT<=0){i.scanT=n.rng.rand(2.5,6.5);let f=y0(n,i.owner,o.x,o.y),h=f?Math.atan2(o.y-f.y,o.x-f.x):n.rng.rand(0,He);i.scanAim=h+n.rng.rand(-1.1,1.1)}i.scanAim!==void 0&&(i.angle=Fc(i.angle,i.scanAim,1.6*e))}}}}function x0(n,e){for(let t of n.deploys.values())if(t.type==="cupboard"&&t.owner===e)return!0;return!1}function y0(n,e,t,i){let s=null,r=1e18;for(let[o,a]of n.deploys){if(a.type!=="cupboard"||a.owner!==e)continue;let[l,c]=o.split(",").map(Number),f=lt(l,c),h=ue(t,i,f.x,f.y);h<r&&(r=h,s=f)}return s}function _0(n,e,t,i,s,r){let o=Math.min(t,s),a=Math.max(t,s),l=!1;return v0(n,t,i,s,r,(c,f)=>{if(f.owner===e||f.type==="door"&&f.open)return!1;let h=Lt(c,f);if(si(t,i,s,r,h[0],h[1],h[2],h[3]))return l=!0,!0}),l}function v0(n,e,t,i,s,r){let o=Math.hypot(i-e,s-t),a=Math.max(1,Math.ceil(o/(64*.5))),l=new Set;for(let c=0;c<=a;c++){let f=c/a,h=Math.floor((e+(i-e)*f)/64),d=Math.floor((t+(s-t)*f)/64),u=h*10007+d;if(!l.has(u)){l.add(u);for(let p of[Le("V",h,d),Le("V",h+1,d),Le("H",h,d),Le("H",h,d+1),Le("D",h,d)]){let x=n.walls.get(p);if(x&&x.hp>0&&r(p,x)===!0)return}}}}var Fc=(n,e,t)=>{let i=vd(n,e);return Math.abs(i)<=t?e:n+Math.sign(i)*t},vd=(n,e)=>{let t=(e-n)%He;return t>Math.PI&&(t-=He),t<-Math.PI&&(t+=He),t};function Md(n,e){let t=n.player;for(let i=n.loot.length-1;i>=0;i--){let s=n.loot[i];s.life+=e,s.bob+=e;let r=Math.pow(.88,e*60);if(s.vx*=r,s.vy*=r,s.x+=s.vx*e,s.y+=s.vy*e,!t.dead&&!t.inCopter&&!n.ghost&&s.life>.35){let o=ne(t.x,t.y,s.x,s.y);if(o<150&&(s.x+=(t.x-s.x)/o*210*e,s.y+=(t.y-s.y)/o*210*e,o<20)){M0(n,s),n.loot.splice(i,1);continue}}if(s.life>.3){let o=null,a=32400;for(let l of n.units){if(l.dead||l.eliminated||l.flying)continue;let c=ue(l.x,l.y,s.x,s.y);c<a&&(a=c,o=l)}if(o){let l=Math.sqrt(a)||1;if(s.x+=(o.x-s.x)/l*240*e,s.y+=(o.y-s.y)/l*240*e,l<22){b0(n,o,s),n.loot.splice(i,1);continue}}}s.life>120&&n.loot.splice(i,1)}}function M0(n,e){let t=n.weapons;e.kind==="ammo"?(t.rifle.reserve+=e.amt,t.pistol.reserve+=Math.ceil(e.amt*.4),t.shotgun.reserve+=Math.ceil(e.amt*.3)):e.kind==="rocket"?t.rocket.reserve+=e.amt:e.kind==="satchel"?n.inv.scrap+=e.amt*8:e.kind==="sniper"?(n.owned.sniper=!0,t.sniper.reserve+=12,We(n,n.player.x,n.player.y-20,"SNIPER unlocked!","#bfe3ff")):e.kind==="gun"?e.gun&&n.owned[e.gun]!==void 0&&(n.owned[e.gun]=!0,t[e.gun].reserve+=e.gun==="hmg"?60:30):n.inv[e.kind]=(n.inv[e.kind]||0)+e.amt}function b0(n,e,t){if(t.kind==="scrap")e.scrap+=t.amt;else if(t.kind==="rocket")e.rockets+=t.amt;else if(t.kind==="satchel")e.satchels+=t.amt;else if(t.kind==="ammo")e.scrap+=Math.ceil(t.amt/8);else if(t.kind==="sniper")e.scrap+=30;else if(t.kind==="gun"){let i={pistol:1,shotgun:2,rifle:3,hmg:4};(i[t.gun]||0)>(i[e.gun]||0)?e.gun=t.gun:e.scrap+=10}else e.inv[t.kind]=(e.inv[t.kind]||0)+t.amt}function bd(n,e){for(let t=n.wrecks.length-1;t>=0;t--){let i=n.wrecks[t];if(i.t-=e,i.t<=0){n.wrecks.splice(t,1);continue}n.rng.chance(.25)&&n.particles.push({x:i.x+n.rng.rand(-12,12),y:i.y+n.rng.rand(-8,8),vx:n.wind*10,vy:-n.rng.rand(24,60),life:n.rng.rand(.7,1.6),max:1.6,r:n.rng.rand(2.5,6),col:"rgba(50,46,44,0.55)"})}}function wd(n,e){let t=n.copter,i=n.player,s=n.cmd;if(!t||t.destroyed){i.inCopter=!1;return}s.left&&(t.angle-=gt.turn*e),s.right&&(t.angle+=gt.turn*e);let r=0;s.up?r=1:s.down&&(r=-.55);let o=s.run?gt.boost:gt.speed;t.vx+=Math.cos(t.angle)*gt.accel*r*e,t.vy+=Math.sin(t.angle)*gt.accel*r*e;let a=Math.pow(r!==0?gt.drag:gt.dragIdle,e);t.vx*=a,t.vy*=a;let l=Math.hypot(t.vx,t.vy);l>o&&(t.vx*=o/l,t.vy*=o/l),t.x+=t.vx*e,t.y+=t.vy*e,t.x<gt.r&&(t.x=gt.r,t.vx*=-.3),t.y<gt.r&&(t.y=gt.r,t.vy*=-.3),t.x>he.w-gt.r&&(t.x=he.w-gt.r,t.vx*=-.3),t.y>he.h-gt.r&&(t.y=he.h-gt.r,t.vy*=-.3),t.spd=Math.hypot(t.vx,t.vy),t.rotor+=e*(20+t.spd*.05),i.x=t.x,i.y=t.y,i.vx=t.vx,i.vy=t.vy}function Td(n,e,t){let i=n.world.shop,s={owner:e.owner,x:i.x,y:i.y+(i.r||120)+90,angle:0,vx:0,vy:0,rotor:0,hp:Wt.hp,max:Wt.hp,destroyed:!1,state:"idle",stateT:0,boardT:0,homeX:t.hx,homeY:t.hy,riders:[],destX:0,destY:0};return n.transports.push(s),We(n,s.x,s.y,"+transport heli","#bfe3ff"),s}function Ed(n,e,t){return t.riders.length>=Wt.seats||t.state==="fly"||t.state==="unload"?!1:(e.aboard=t,e.flying=!0,e.wasRaid=!1,e.state="raid",t.riders.push(e),t.state==="idle"&&(t.state="board"),!0)}function Hc(n,e,t,i,s){let r=ne(e.x,e.y,t,i),o=Math.atan2(i-e.y,t-e.x);e.angle=wi(e.angle,o,s*3);let a=r>220?1:Math.max(.08,r/220);e.vx+=Math.cos(e.angle)*Wt.accel*a*s,e.vy+=Math.sin(e.angle)*Wt.accel*a*s;let l=Math.pow(Wt.drag,s);e.vx*=l,e.vy*=l;let c=Math.hypot(e.vx,e.vy);return c>Wt.speed&&(e.vx*=Wt.speed/c,e.vy*=Wt.speed/c),e.x=et(e.x+e.vx*s,Wt.r,he.w-Wt.r),e.y=et(e.y+e.vy*s,Wt.r,he.h-Wt.r),r}function Ad(n,e){for(let t=n.transports.length-1;t>=0;t--){let i=n.transports[t];if(i.hp<=0||i.destroyed){zc(n,i.x,i.y);for(let a of i.riders)a.aboard=null,a.flying=!1,a.x=i.x+n.rng.rand(-30,30),a.y=i.y+n.rng.rand(-30,30),Oc(n,a);n.transports.splice(t,1);continue}i.riders=i.riders.filter(a=>!a.dead&&a.aboard===i),i.stateT+=e;let s=i.riders.length>0;(s||i.state==="fly"||i.state==="unload"||i.state==="return")&&(i.rotor+=e*40);let r=i.riders.length?i.riders[0].raid:null,o=r&&r.bases?r.bases.find(a=>!a.dead):null;if(i.state==="idle"||i.state==="board"){if(s&&o){if(i.boardT+=e,i.riders.length>=2||i.boardT>5){let a=ne(i.x,i.y,o.hx,o.hy),l=Math.max(0,(a-620)/Math.max(1,a));i.destX=i.x+(o.hx-i.x)*l,i.destY=i.y+(o.hy-i.y)*l,i.state="fly",i.stateT=0,i.boardT=0}}else s?Hc(n,i,i.homeX-320,i.homeY,e):(i.vx=i.vy=0,i.boardT=0);for(let a of i.riders)a.x=i.x,a.y=i.y}else if(i.state==="fly"){let a=Hc(n,i,i.destX,i.destY,e);for(let l of i.riders)l.x=i.x,l.y=i.y;(a<200||!o||i.stateT>16)&&(i.state="unload",i.stateT=0)}else if(i.state==="unload"){for(let a of i.riders){let l=i.x+n.rng.rand(-60,60),c=i.y+n.rng.rand(-60,60);for(let f=0;f<14&&bt(n,l,c,12);f++){let h=n.rng.rand(0,He),d=n.rng.rand(40,150);l=i.x+Math.cos(h)*d,c=i.y+Math.sin(h)*d}a.x=et(l,12,he.w-12),a.y=et(c,12,he.h-12),a.aboard=null,a.flying=!1}i.riders=[],i.state="return",i.stateT=0}else i.state==="return"&&(Hc(n,i,i.homeX-320,i.homeY,e)<160||i.stateT>16)&&(i.state="idle",i.vx=i.vy=0)}}function Rd(n,e){if(n.world.rails.length&&(n.trainT-=e,n.trainT<=0&&n.trains.length<2)){n.trainT=n.rng.rand(30,90);let t=n.rng.pick(n.world.rails),s=n.rng.chance(.5)?t.pts:[...t.pts].reverse();n.trains.push({pts:s,seg:0,x:s[0].x,y:s[0].y,px:s[0].x,py:s[0].y,ang:0,speed:n.rng.rand(460,640),smokeT:0})}for(let t=n.trains.length-1;t>=0;t--){let i=n.trains[t];i.px=i.x,i.py=i.y;let s=i.speed*e;for(;s>0&&i.seg<i.pts.length-1;){let c=i.pts[i.seg],f=i.pts[i.seg+1],h=ne(c.x,c.y,f.x,f.y),d=ne(c.x,c.y,i.x,i.y),u=h-d;if(s<u){let p=(d+s)/h;i.x=c.x+(f.x-c.x)*p,i.y=c.y+(f.y-c.y)*p,s=0}else i.seg++,i.x=f.x,i.y=f.y,s-=u}i.ang=Math.atan2(i.y-i.py,i.x-i.px)||i.ang;let r=36,o=n.player;!o.dead&&!o.inCopter&&wt(o.x,o.y,i.px,i.py,i.x,i.y)<r&&ys(n,999,i.px,i.py,"train");for(let c of n.units)!c.dead&&!c.flying&&!c.eliminated&&wt(c.x,c.y,i.px,i.py,i.x,i.y)<r&&_s(n,c,999,i.px,i.py,"train");for(let c of n.animals)!c.dead&&wt(c.x,c.y,i.px,i.py,i.x,i.y)<r&&(c.hp=0,c.dead=!0,c.respawnT=n.rng.rand(11,18));for(let c of n.barrels)c.hp>0&&wt(c.x,c.y,i.px,i.py,i.x,i.y)<r&&(c.hp=0);let a=ne(i.px,i.py,i.x,i.y),l=Math.max(1,Math.ceil(a/64));for(let c=0;c<=l;c++){let f=c/l,h=Math.floor((i.px+(i.x-i.px)*f)/64),d=Math.floor((i.py+(i.y-i.py)*f)/64);Lr(n,h+","+d,9999),xs(n,h+","+d,9999,"train");for(let u of["V,"+h+","+d,"V,"+(h+1)+","+d,"H,"+h+","+d,"H,"+h+","+(d+1)])Vs(n,u,9999,"train")}if(i.smokeT-=e,i.smokeT<=0){i.smokeT=.28;let c=i.x+Math.cos(i.ang)*16,f=i.y+Math.sin(i.ang)*16;n.particles.push({x:c,y:f,vx:n.rng.rand(-7,7)+n.wind*5,vy:-n.rng.rand(6,16),life:n.rng.rand(11,15),max:15,r:n.rng.rand(5,10),col:"rgba(74,74,80,0.5)"}),n.particles.push({x:c,y:f,vx:n.rng.rand(-4,4),vy:-n.rng.rand(4,10),life:n.rng.rand(8,12),max:12,r:n.rng.rand(3,6),col:"rgba(40,40,46,0.45)"})}i.seg>=i.pts.length-1&&n.trains.splice(t,1)}for(let t of n.world.crossings)t.active=n.trains.some(i=>ue(i.x,i.y,t.x,t.y)<820*820),t.gate+=((t.active?1:0)-t.gate)*Math.min(1,e*3)}function Cd(n,e){n.convoys.length||(n.convoyT-=e,n.convoyT<=0&&w0(n));for(let t=n.convoys.length-1;t>=0;t--){let i=n.convoys[t];if(i.hp<=0&&!i.dead){i.dead=!0,ft(n,i.x,i.y,"#ffb24a",30,340),ft(n,i.x,i.y,"#ffe2a0",16,220),n.flashes.push({x:i.x,y:i.y,r:96,life:.25,max:.25}),n.shake=Math.max(n.shake,12),n.scorch.push({x:i.x,y:i.y,r:60}),n.scorch.length>36&&n.scorch.shift(),an(n,i.x,i.y,"metal",n.rng.randi(50,90)),an(n,i.x,i.y,"scrap",n.rng.randi(60,110)),Et(n,i.x,i.y,"ammo",n.rng.randi(50,100));for(let c=0,f=n.rng.randi(3,5);c<f;c++)Et(n,i.x,i.y,"rocket",1);for(let c=0,f=n.rng.randi(2,4);c<f;c++)Et(n,i.x,i.y,"satchel",1);for(let c of i.guards)c.dead||Et(n,c.x,c.y,"ammo",n.rng.randi(8,16));We(n,i.x,i.y,"convoy destroyed!","#ffd0a0"),n.events.push({type:"explosion",x:i.x,y:i.y,r:96}),n.convoys.splice(t,1);continue}i.px=i.x,i.py=i.y;let s=fn.speed*e;for(;s>0&&i.seg<i.pts.length-1;){let c=i.pts[i.seg],f=i.pts[i.seg+1],h=ne(c.x,c.y,f.x,f.y),d=ne(c.x,c.y,i.x,i.y),u=h-d;if(s<u){let p=(d+s)/h;i.x=c.x+(f.x-c.x)*p,i.y=c.y+(f.y-c.y)*p,s=0}else i.seg++,i.x=f.x,i.y=f.y,s-=u}if(i.ang=Math.atan2(i.y-i.py,i.x-i.px)||i.ang,i.seg>=i.pts.length-1){n.convoys.splice(t,1);continue}i.gunCd=Math.max(0,i.gunCd-e);let r=null,o=fn.trange,a=n.player;if(!a.dead&&!a.inCopter&&!n.ghost){let c=ne(i.x,i.y,a.x,a.y);c<o&&!Bt(n,i.x,i.y,a.x,a.y)&&!ri(n,i.x,i.y,a.x,a.y)&&(r=a,o=c)}for(let c of n.units){if(c.dead||c.flying||c.eliminated)continue;let f=ne(i.x,i.y,c.x,c.y);f<o&&!Bt(n,i.x,i.y,c.x,c.y)&&!ri(n,i.x,i.y,c.x,c.y)&&(r=c,o=f)}r?(i.taim=Math.atan2(r.y-i.y,r.x-i.x),i.gunCd<=0&&(i.gunCd=fn.trof,In(n,{x:i.x+Math.cos(i.taim)*30,y:i.y+Math.sin(i.taim)*30,angle:i.taim+n.rng.rand(-.04,.04),speed:fn.bspeed,dmg:fn.tdmg,from:"convoy",life:.6}),ft(n,i.x+Math.cos(i.taim)*30,i.y+Math.sin(i.taim)*30,"#ffd76b",2,90))):i.taim=i.ang;let l=[[-46,28],[-46,-28],[50,30],[50,-30]];for(let c=0;c<i.guards.length;c++){let f=i.guards[c];if(f.dead)continue;f.gunCd=Math.max(0,f.gunCd-e);let h=null,d=fn.grange;if(!a.dead&&!a.inCopter&&!n.ghost){let u=ne(f.x,f.y,a.x,a.y);u<d&&!Bt(n,f.x,f.y,a.x,a.y)&&!ri(n,f.x,f.y,a.x,a.y)&&(h=a,d=u)}for(let u of n.units){if(u.dead||u.flying||u.eliminated)continue;let p=ne(f.x,f.y,u.x,u.y);p<d&&!Bt(n,f.x,f.y,u.x,u.y)&&!ri(n,f.x,f.y,u.x,u.y)&&(h=u,d=p)}if(ne(f.x,f.y,i.x,i.y)>fn.leash&&(h=null),h){let u=Math.atan2(h.y-f.y,h.x-f.x);f.angle=wi(f.angle,u,e*9),f.gunCd<=0&&Math.abs(A0(f.angle,u))<.3&&(f.gunCd=fn.grof,In(n,{x:f.x+Math.cos(f.angle)*14,y:f.y+Math.sin(f.angle)*14,angle:f.angle+n.rng.rand(-.06,.06),speed:fn.bspeed,dmg:fn.gdmg,from:"convoy",life:.55}));let p=0,x=0;d>260?(p=Math.cos(u),x=Math.sin(u)):d<150&&(p=-Math.cos(u),x=-Math.sin(u));let m=f.x+p*fn.gspeed*e,g=f.y+x*fn.gspeed*e;bt(n,m,g,12)||(f.x=m,f.y=g)}else{let u=i.x+Math.cos(i.ang)*l[c][0]-Math.sin(i.ang)*l[c][1],p=i.y+Math.sin(i.ang)*l[c][0]+Math.cos(i.ang)*l[c][1],x=ne(f.x,f.y,u,p);if(x>4){let m=fn.speed+50;f.x+=(u-f.x)/x*Math.min(x,m*e),f.y+=(p-f.y)/x*Math.min(x,m*e)}f.angle=wi(f.angle,i.ang,e*5)}}}}function w0(n){n.convoyT=n.rng.rand(180,300);let e=[];for(let r of n.world.roads){let o=-1,a=null;for(let l=0;l<=r.pts.length;l++){let c=l<r.pts.length&&n.world.landFactor(r.pts[l].x,r.pts[l].y)>.02;c&&o===-1&&(o=l),!c&&o!==-1&&((!a||l-o>a.len)&&(a={start:o,len:l-o}),o=-1)}a&&a.len>=10&&e.push({rd:r,...a})}if(!e.length)return;let t=e[Math.floor(n.rng.next()*e.length)],i=t.rd.pts.slice(t.start,t.start+t.len);n.rng.chance(.5)&&(i=[...i].reverse());let s={pts:i,seg:0,x:i[0].x,y:i[0].y,px:i[0].x,py:i[0].y,ang:0,taim:0,hp:fn.vhp,max:fn.vhp,gunCd:0,dead:!1,guards:[]};for(let r=0;r<4;r++)s.guards.push({x:i[0].x,y:i[0].y,hp:fn.ghp,max:fn.ghp,angle:0,gunCd:0,dead:!1});n.convoys.push(s),n.events.push({type:"convoy",x:s.x,y:s.y})}function Sd(n,e){if(!n.patrol){n.patrolT-=e,n.patrolT<=0&&T0(n);return}let t=n.patrol;t.rotor+=e*28;let i=n.teams.find(c=>c.owner===t.huntOwner&&!c.eliminated&&c.bases.some(f=>!f.dead));if(t.hp<=0){E0(n);return}let s,r,o=!1;if(!i||t.orbitT<=0){if(o=!0,s=t.exitX,r=t.exitY,t.x<-320||t.x>he.w+320||t.y<-320||t.y>he.h+320){n.patrol=null,n.patrolT=n.rng.rand(240,420);return}}else{let c=i.bases.find(h=>!h.dead);ne(t.x,t.y,c.hx,c.hy)>460&&!t.orbiting?(s=c.hx,r=c.hy):(t.orbiting=!0,t.orbitA+=.55*e,t.orbitT-=e,s=c.hx+Math.cos(t.orbitA)*$n.orbitR,r=c.hy+Math.sin(t.orbitA)*$n.orbitR)}let a=Math.atan2(r-t.y,s-t.x);t.angle=wi(t.angle,a,e*3);let l=ne(t.x,t.y,s,r);if(t.spd=Math.min($n.speed,$n.speed*l/300+40),t.x+=Math.cos(t.angle)*t.spd*e,t.y+=Math.sin(t.angle)*t.spd*e,t.flash=Math.max(0,t.flash-e),i&&!o){if(t.strafeT-=e,t.strafeT<=0){t.strafeT=1.2;let c=null,f=$n.strafeR;for(let h of n.units){if(h.owner!==t.huntOwner||h.dead||h.eliminated||h.flying)continue;let d=ne(t.x,t.y,h.x,h.y);d<f&&(f=d,c=h)}if(c){for(let h=0;h<5;h++){let d=.18+h*.02,u=c.x+c.vx*d+n.rng.rand(-26,26),p=c.y+c.vy*d+n.rng.rand(-26,26);In(n,{x:t.x,y:t.y,angle:Math.atan2(p-t.y,u-t.x),speed:900,dmg:9,from:"patrol",life:1,col:"hmg"})}t.flash=.12}}for(let c of n.units)if(!(c.owner!==t.huntOwner||c.dead||c.eliminated||c.flying)&&!(ue(t.x,t.y,c.x,c.y)>$n.flakR*$n.flakR)&&(c.flakT=(c.flakT||0)-e,c.flakT<=0)){c.flakT=1;let f=ne(t.x,t.y,c.x,c.y)/1100,h=t.x+Math.cos(t.angle)*t.spd*f,d=t.y+Math.sin(t.angle)*t.spd*f,u=Math.atan2(d-c.y,h-c.x)+n.rng.rand(-.07,.07);c.angle=u;let p=c.x+Math.cos(u)*1100*.7,x=c.y+Math.sin(u)*1100*.7;n.events.push({type:"flak",x0:c.x,y0:c.y,x1:p,y1:x}),wt(t.x,t.y,c.x,c.y,p,x)<40&&(t.hp-=6,ft(n,t.x,t.y,"#aab1b8",3,120))}}}function T0(n){let e=null,t=-1;for(let o of n.teams){if(o.eliminated)continue;let a=o.bases.find(u=>!u.dead);if(!a)continue;let l=n.units.filter(u=>u.owner===o.owner&&!u.dead&&!u.eliminated).length,c=0;for(let u of n.structures.values())u.owner===o.owner&&c++;let f=n.deploys.get(a.tcKey),h=f?f.store.wood+f.store.stone+f.store.metal:0,d=l*10+c*2+h*.01;d>t&&(t=d,e={t:o,rec:a})}if(!e){n.patrolT=n.rng.rand(120,240);return}let{t:i,rec:s}=e,r=s.hx>he.w/2;n.patrol={huntOwner:i.owner,huntId:i.id,x:r?-200:he.w+200,y:et(s.hy+n.rng.rand(-600,600),200,he.h-200),exitX:r?he.w+360:-360,exitY:s.hy,angle:0,rotor:0,spd:0,hp:$n.hp,max:$n.hp,orbitA:n.rng.rand(0,He),orbitT:$n.orbitT,orbiting:!1,strafeT:1,flash:0},We(n,s.hx,s.hy-80,"Patrol helicopter inbound!","#ffb84a"),n.elims.push({text:"PATROL HELI hunts Base "+(i.id+1),t:10})}function E0(n){let e=n.patrol;ft(n,e.x,e.y,"#ffb24a",40,360),ft(n,e.x,e.y,"#ff9b3d",24,280),n.scorch.push({x:e.x,y:e.y,r:64}),n.scorch.length>36&&n.scorch.shift(),n.wrecks.push({x:e.x,y:e.y,t:15});for(let t=0,i=n.rng.randi(4,6);t<i;t++)Et(n,e.x+n.rng.rand(-30,30),e.y+n.rng.rand(-30,30),"rocket",1);for(let t=0,i=n.rng.randi(2,3);t<i;t++)Et(n,e.x+n.rng.rand(-30,30),e.y+n.rng.rand(-30,30),"satchel",1);Et(n,e.x,e.y,"ammo",n.rng.randi(100,180)),an(n,e.x,e.y,"scrap",n.rng.randi(80,150)),an(n,e.x,e.y,"metal",n.rng.randi(50,90)),n.elims.push({text:"PATROL HELI DOWN",t:12}),n.events.push({type:"explosion",x:e.x,y:e.y,r:110}),n.shake=Math.max(n.shake,14),n.patrol=null,n.patrolT=n.rng.rand(240,420)}var A0=(n,e)=>{let t=(e-n)%He;return t>Math.PI&&(t-=He),t<-Math.PI&&(t+=He),t};function Pd(n,e){let t=n.weather;t.timer-=e,t.timer<=0&&(t.mode==="clear"?(t.mode="rain",t.timer=n.rng.rand(8,16),t.boltT=n.rng.rand(3,8)):(t.mode="clear",t.timer=n.rng.rand(90,170)));let i=t.mode==="rain"?1:0;t.rain+=(i-t.rain)*Math.min(1,e*.5),t.rain>.4&&(t.boltT-=e,t.boltT<=0&&(t.boltT=n.rng.rand(4,13),t.flash=1,n.events.push({type:"bolt"}))),t.flash=Math.max(0,t.flash-e*2.4),t.fogTimer-=e,t.fogTimer<=0&&(t.fogOn=!t.fogOn,t.fogTimer=t.fogOn?n.rng.rand(28,60):n.rng.rand(45,95)),t.fog+=((t.fogOn?1:0)-t.fog)*Math.min(1,e*.22),n.wind=(Math.sin(n.t*.5)*.5+Math.sin(n.t*1.9+1.1)*.5)*(1+t.rain*1.7)}function Id(n,e){if(!n.plane&&!n.airdrop&&(n.airdropT-=e,n.airdropT<=0&&(Dd(n),n.airdropT=n.rng.rand(120,300))),n.plane){let t=n.plane;t.x+=t.vx*e,t.prop+=e*30,!t.released&&(t.vx>0&&t.x>=t.dropX||t.vx<0&&t.x<=t.dropX)&&(t.released=!0,n.airdrop={x:t.dropX,y:t.dropY-780,gy:t.dropY,hp:90,max:90,fall:0,sway:n.rng.rand(0,He),loot:R0(n)},We(n,t.dropX,t.dropY,"Airdrop incoming!","#ffe07a"),n.events.push({type:"airdropCalled",x:t.dropX,y:t.dropY})),(t.x<-300||t.x>he.w+300)&&(n.plane=null)}if(n.airdrop){let t=n.airdrop;if(t.fall<1){t.fall=Math.min(1,t.fall+e*.16);let i=t.fall*t.fall*(3-2*t.fall);t.y=t.gy-780+780*i,t.sway+=e*1.5}else t.hp<=0&&(C0(n,t),n.airdrop=null)}}function Dd(n,e,t){let i=e,s=t;if(i===void 0){for(let o=0;o<24;o++){let a=n.rng.rand(.16*he.w,.84*he.w),l=n.rng.rand(.16*he.h,.84*he.h);if(!(ne(a,l,n.world.shop.x,n.world.shop.y)<Mt+160)){i=a,s=l;break}}i===void 0&&(i=he.w*.25,s=he.h*.25)}let r=n.rng.chance(.5);n.plane={x:i+(r?-1700:1700),y:s,vx:r?820:-820,dropX:i,dropY:s,released:!1,prop:0}}function R0(n){let e=[["scrap",n.rng.randi(50,110)]];return n.rng.chance(.85)&&e.push(["rocket",n.rng.randi(2,6)]),n.rng.chance(.85)&&e.push(["ammo",n.rng.randi(70,150)]),n.rng.chance(.55)&&e.push(["metal",n.rng.randi(25,60)]),n.rng.chance(.5)&&e.push(["wood",n.rng.randi(30,70)]),n.rng.chance(.4)&&e.push(["sniper",1]),e}function C0(n,e){ft(n,e.x,e.y,"#ffd27a",30,300),ft(n,e.x,e.y,"#d2664a",16,220);for(let[t,i]of e.loot)if(t==="rocket")for(let s=0;s<i;s++)Et(n,e.x,e.y,"rocket",1);else t==="sniper"?Et(n,e.x,e.y,"sniper",1):t==="ammo"?Et(n,e.x,e.y,"ammo",i):an(n,e.x,e.y,t,i);We(n,e.x,e.y-30,"AIRDROP LOOTED!","#ffe07a")}function Vc(n,e,t){if(n.signal)return!1;let i=n.player,s=ne(i.x,i.y,e,t);if(s>700){let r=700/s;e=i.x+(e-i.x)*r,t=i.y+(t-i.y)*r}return yt(n,e,t)?(We(n,i.x,i.y-20,"Not in the safe zone","#d2664a"),!1):(n.inv.signal|0)<1?(We(n,i.x,i.y-20,"No supply signal \u2014 buy one at the trade zone","#d2664a"),!1):(n.inv.signal--,n.signal={x:e,y:t,t:0,dur:6,puff:0,called:!1},We(n,i.x,i.y-20,"Supply signal out \u2014 everyone saw it","#c9a0ff"),!0)}function Ld(n,e,t){return n.signal||n.plane||n.airdrop?!1:(n.signal={x:e,y:t,t:0,dur:6,puff:0,called:!1},!0)}function Nd(n,e){let t=n.signal;t&&(t.t+=e,t.puff-=e,t.puff<=0&&(t.puff=.12,ft(n,t.x+n.rng.rand(-8,8),t.y+n.rng.rand(-6,2),"#a96bd4",3,60)),!t.called&&t.t>t.dur&&!n.plane&&!n.airdrop&&(Dd(n,t.x,t.y),t.called=!0),(t.called||t.t>t.dur+60)&&(n.signal=null))}function Ud(n,e){let t=n.quarry;if(!t)return;let i=new Set;!n.player.dead&&!n.player.inCopter&&!n.ghost&&ue(n.player.x,n.player.y,t.x,t.y)<t.r*t.r&&i.add(Ge);for(let s of n.units)s.dead||s.eliminated||s.flying||ue(s.x,s.y,t.x,t.y)<t.r*t.r&&i.add(s.owner);if(i.size===1){let s=[...i][0];if(s!==t.owner){if(t.capOwner!==s&&(t.capOwner=s,t.capT=0),t.capT+=e,t.capT>=Zn.capT){t.owner=s,t.capT=0,t.capOwner=null,t.payT=0;let r=n.teams.find(a=>a.owner===s),o=s===Ge?"You":"Base "+(r?r.id+1:"?");We(n,t.x,t.y-44,"Quarry captured!","#cdd6a3"),n.elims.push({text:"QUARRY \u2192 "+o,t:10})}}else t.capT=0}else t.capT=Math.max(0,t.capT-e);if(t.owner&&t.owner!==Ge){let s=n.teams.find(o=>o.owner===t.owner);s&&!s.eliminated&&n.units.some(o=>o.owner===t.owner&&o.primary&&!o.eliminated)||(t.owner=null)}if(t.owner&&(t.arm+=e,t.payT+=e,t.payT>=Zn.payEvery)){if(t.payT=0,t.paid++,t.owner===Ge)n.inv.stone+=Zn.pay.stone,n.inv.metal+=Zn.pay.metal,n.inv.scrap+=Zn.pay.scrap;else{let s=n.teams.find(a=>a.owner===t.owner),r=s&&s.bases.find(a=>!a.dead),o=r&&n.deploys.get(r.tcKey);o&&o.store&&(o.store.stone+=Zn.pay.stone,o.store.metal+=Zn.pay.metal,o.store.scrap+=Zn.pay.scrap)}We(n,t.x,t.y-44,"+stone +metal +scrap","#cdd6a3")}}function kd(n,e){if(!n.lockedCrate){if(n.crateT-=e,n.crateT<=0){let s=n.world.monuments.filter(a=>a.type!=="quarry"),r=n.rng.pick(s),o=n.rng.rand(0,He);n.lockedCrate={x:r.x+Math.cos(o)*(r.r+90),y:r.y+Math.sin(o)*(r.r+90),mon:r.name,t:Os.hackT,started:!1,blink:0},We(n,n.lockedCrate.x,n.lockedCrate.y-30,"Locked crate at the "+r.name+"!","#ffb84a"),n.elims.push({text:"LOCKED CRATE \u2014 "+r.name,t:12}),n.crateT=n.rng.rand(240,360)}return}let t=n.lockedCrate;t.blink+=e;let i=!n.player.dead&&!n.ghost&&ue(n.player.x,n.player.y,t.x,t.y)<Os.r*Os.r;if(!i){for(let s of n.units)if(!(s.dead||s.eliminated||s.flying)&&ue(s.x,s.y,t.x,t.y)<Os.r*Os.r){i=!0;break}}if(i&&(t.started=!0,t.t-=e),t.t<=0){ft(n,t.x,t.y,"#ffd27a",30,300),ft(n,t.x,t.y,"#d2664a",16,220),an(n,t.x,t.y,"scrap",n.rng.randi(80,140)),an(n,t.x,t.y,"metal",n.rng.randi(40,80));for(let s=0,r=n.rng.randi(3,6);s<r;s++)Et(n,t.x+n.rng.rand(-20,20),t.y+n.rng.rand(-20,20),"rocket",1);for(let s=0,r=n.rng.randi(2,4);s<r;s++)Et(n,t.x+n.rng.rand(-20,20),t.y+n.rng.rand(-20,20),"satchel",1);Et(n,t.x,t.y,"ammo",n.rng.randi(80,160)),n.rng.chance(.5)&&Et(n,t.x,t.y,"sniper",1),We(n,t.x,t.y-24,"Locked crate opened!","#ffb84a"),n.lockedCrate=null}}function Gc(n){let e=n.rng,t=he.w,i=he.h,s=(o,a,l)=>{let c=l?e.rand(86,140):e.rand(70,128),f=[],h=c;for(let d=0,u=e.randi(5,9);d<u;d++){let p=e.rand(-.95,.95)*c,x=e.rand(-.42,.42)*c,m=c*e.rand(.55,1);f.push({dx:p,dy:x,r:m}),h=Math.max(h,Math.hypot(p,x)+m)}return{x:o,y:a,puffs:f,r:h,op:l?e.rand(.92,1):e.rand(.7,1),sp:e.rand(9,19),heavy:l}};n.clouds=[];let r=e.randi(7,10);for(;r>0;)if(r>=2&&e.chance(.5)){let o=e.rand(0,t),a=e.rand(0,i),l=Math.min(r,e.randi(2,3));for(let c=0;c<l;c++)n.clouds.push(s(o+e.rand(-150,150),a+e.rand(-95,95),!0));r-=l}else n.clouds.push(s(e.rand(0,t),e.rand(0,i),e.chance(.4))),r--;n.fogBanks=[];for(let o=0,a=e.randi(13,20);o<a;o++){let l=e.rand(150,320),c=[];for(let f=0,h=e.randi(2,5);f<h;f++)c.push({dx:e.rand(-1,1)*l,dy:e.rand(-.6,.6)*l,r:l*e.rand(.7,1.2)});n.fogBanks.push({x:e.rand(0,t),y:e.rand(0,i),r:l,puffs:c,dens:e.rand(.5,1.15),sp:e.rand(5,12),vy:e.rand(-3,3)})}n.fireflies=[];for(let o=0,a=e.randi(16,28);o<a;o++)n.fireflies.push({x:e.rand(t/3+30,2*t/3-30),y:e.rand(60,i-60),vx:e.rand(-28,28),vy:e.rand(-28,28),ph:e.rand(0,He),fs:e.rand(2.5,4.5),wT:e.rand(.5,1.7)})}function Fd(n,e){let t=he.w,i=he.h;n.clouds||Gc(n);for(let o of n.clouds)o.x+=o.sp*e,o.x-o.r>t+160&&(o.x=-o.r-n.rng.rand(0,500),o.y=n.rng.rand(0,i));for(let o of n.fogBanks)o.x+=o.sp*e,o.y+=o.vy*e,o.x-o.r>t+220&&(o.x=-o.r-n.rng.rand(0,450),o.y=n.rng.rand(0,i)),o.y<-o.r?o.y=i+o.r*.5:o.y>i+o.r&&(o.y=-o.r*.5);let s=t/3+20,r=2*t/3-20;for(let o of n.fireflies){if(o.wT-=e,o.wT<=0){o.wT=n.rng.rand(.5,1.7);let a=n.rng.rand(0,He),l=n.rng.rand(14,40);o.vx=Math.cos(a)*l,o.vy=Math.sin(a)*l}o.x+=o.vx*e,o.y+=o.vy*e,o.x<s&&(o.x=s,o.vx=Math.abs(o.vx)),o.x>r&&(o.x=r,o.vx=-Math.abs(o.vx)),o.y=et(o.y,40,i-40),o.ph+=o.fs*e}for(let o=n.footprints.length-1;o>=0;o--)n.footprints[o].t+=e,n.footprints[o].t>=10&&n.footprints.splice(o,1)}function ta(n,e,t){if(e.fpAcc=(e.fpAcc||0)+ne(e.x,e.y,e.fpX||e.x,e.fpY||e.y),e.fpX=e.x,e.fpY=e.y,e.fpAcc<30)return;e.fpAcc=0,e.fpSide=!e.fpSide;let i=e.fpSide?5:-5;n.footprints.push({x:e.x-Math.sin(t)*i,y:e.y+Math.cos(t)*i,a:t,t:0}),n.footprints.length>700&&n.footprints.shift()}function Od(n,e){for(let t of n.resources)t.amount>=t.max||(t.regen+=e,t.amount<=0?t.regen>=29&&(t.amount=t.max,t.regen=0):t.regen>=2.5&&(t.amount=Math.min(t.max,t.amount+Math.ceil(t.max*.05)),t.regen=0));for(let t of n.barrels)t.hp>0||(t.respawnT-=e,t.respawnT<=0&&(t.hp=t.max))}var Bd={1:"pistol",2:"rifle",3:"minigun",4:"rocket",6:"sniper",7:"shotgun",8:"hmg"};function Fr(n){let e=Bd[n.slot];return e&&n.owned[e]?e:null}function zd(n,e){let t=n.player,i=n.cmd;if(t.gatherCd=Math.max(0,(t.gatherCd||0)-e),t.recoil=Math.max(0,t.recoil-42*e),t.swing=Math.max(0,t.swing-e),t.hurt=Math.max(0,t.hurt-e),t.invuln=Math.max(0,t.invuln-e),t.dead){t.deadT-=e,t.deadT<=0&&I0(n);return}if(t.poison>0&&(t.poison-=e,t.regenDelay=Math.max(t.regenDelay,1.5),t.health-=3.2*e,n.tick%60===0&&We(n,t.x,t.y-20,"poison","#7bbf4f"),t.health<=0)){kr(n,!0);return}if(t.regenDelay=Math.max(0,t.regenDelay-e),t.regenDelay<=0&&t.health<t.maxhp&&(t.health=Math.min(t.maxhp,t.health+12*e)),t.inCopter){wd(n,e);return}t.angle=Math.atan2(i.my-t.y,i.mx-t.x);let s=(i.right?1:0)-(i.left?1:0),r=(i.down?1:0)-(i.up?1:0),o=i.run?t.run:t.walk,a=Fr(n);a==="minigun"&&n.weapons.minigun.spin>=on.minigun.windup&&(o*=.4);let l=n.world.lakeAt(t.x,t.y);l&&!l.frozen&&(o*=.5);let c=Math.hypot(s,r),f=0,h=0;if(c>0&&(f=s/c*o,h=r/c*o),l&&l.frozen){let y=Math.min(1,e*1.1);if(t.vx+=(f-t.vx)*y,t.vy+=(h-t.vy)*y,c===0){let M=Math.pow(.6,e);t.vx*=M,t.vy*=M}}else t.vx=f,t.vy=h;t.moving=Math.hypot(t.vx,t.vy)>10;let d={passOwner:Ge,openOwnDoors:!1},u=t.x+t.vx*e,p=t.y+t.vy*e;bt(n,t.x,t.y,$t,d)?(t.x=u,t.y=p):(bt(n,u,t.y,$t,d)?t.vx*=-.2:t.x=u,bt(n,t.x,p,$t,d)?t.vy*=-.2:t.y=p),t.x=et(t.x,$t,he.w-$t),t.y=et(t.y,$t,he.h-$t);for(let y of n.resources)y.amount>0&&na(t,y.x,y.y,y.r+$t-6);for(let y of n.barrels)y.hp>0&&na(t,y.x,y.y,y.r+$t-4);for(let y of n.world.boulders)na(t,y.x,y.y,y.r+$t-2);na(t,n.world.shop.x,n.world.shop.y,n.world.shop.r+$t),t.moving&&ta(n,t,Math.atan2(t.vy,t.vx));let x=a&&n.weapons[a],m=a&&on[a];if(x&&(x.cd=Math.max(0,x.cd-e),x.reloading>0&&(x.reloading-=e,x.reloading<=0))){let y=Math.min(m.magSize-x.ammo,x.reserve);x.ammo+=y,x.reserve-=y}let g=!n.buildMode&&!t.dead&&!t.inCopter&&!n.shopOpen&&!n.storeOpen;if(g&&a==="minigun"){let y=n.weapons.minigun;i.fireHeld?y.spin=Math.min(m.windup+.4,y.spin+e):y.spin=Math.max(0,y.spin-1.6*e),i.fireHeld&&y.spin>=m.windup&&ia(n)}else g&&i.fireHeld&&m&&m.auto?ia(n):g&&i.fireHeld&&n.slot===0&&t.gatherCd<=0&&(t.gatherCd=.34,S0(n));n.rapidRockets&&g&&i.fireHeld&&(n.rapidCd=Math.max(0,(n.rapidCd||0)-e),n.rapidCd<=0&&!yt(n,t.x,t.y)&&(n.rapidCd=.1,Ur(n,t.x+Math.cos(t.angle)*26,t.y+Math.sin(t.angle)*26,t.angle,Ge)))}function na(n,e,t,i){let s=ue(n.x,n.y,e,t);if(s<i*i&&s>.01){let r=Math.sqrt(s);n.x+=(n.x-e)/r*(i-r),n.y+=(n.y-t)/r*(i-r)}}function ia(n){let e=n.player,t=Fr(n);if(!t)return;if(yt(n,e.x,e.y)){pn(n,"No weapons in the safe zone");return}let i=n.weapons[t],s=on[t];if(i.reloading>0||i.cd>0)return;if(i.ammo<=0){Wc(n);return}i.ammo--,i.cd=s.rof;let r=s.spread;t==="rifle"&&e.rifleLaser&&(r*=.4);let o=s.pellets||1;for(let a=0;a<o;a++){let l=e.angle+n.rng.rand(-r,r),c=e.x+Math.cos(l)*26,f=e.y+Math.sin(l)*26;s.rocket?Ur(n,c,f,l,Ge):In(n,{x:c,y:f,angle:l,speed:s.speed,dmg:s.dmg,from:Ge,life:s.range,col:s.tracer||null})}e.recoil=Math.min(12,e.recoil+s.kick),n.muzzle={x:e.x+Math.cos(e.angle)*30,y:e.y+Math.sin(e.angle)*30,a:e.angle,t:s.rocket?.08:.05},n.events.push({type:"shot",x:e.x,y:e.y,a:e.angle,weapon:t})}function Wc(n){let e=Fr(n);if(!e)return;let t=n.weapons[e],i=on[e];t.reloading>0||t.ammo>=i.magSize||t.reserve<=0||(t.reloading=i.reloadT)}function Or(n,e){if(n.player.inCopter)return;let t=Bd[e];if(t&&!n.owned[t]){pn(n,"locked \u2014 buy it at the trade shop");return}n.slot=e,n.buildMode=e===5,n.rapidRockets&&e!==4&&(n.rapidRockets=!1)}function S0(n){let e=n.player;e.swing=.16;let t=null,i=zo*.85;for(let o of n.animals){if(o.dead)continue;let a=ne(e.x,e.y,o.x,o.y)-o.r;a<i&&(i=a,t=o)}if(t){ea(n,t,18,e.x,e.y,Ge);return}if(P0(n))return;let s=null,r=zo;for(let o of n.resources){if(o.amount<=0)continue;let a=ne(e.x,e.y,o.x,o.y)-o.r;a<r&&(r=a,s=o)}if(s){let o=s.base==="wood"?8:s.base==="stone"?6:5,a=Math.min((n.jackhammer?3:1)*o,s.amount);s.amount-=a,s.regen=0,n.inv[s.base]+=a,We(n,s.x,s.y-s.r,"+"+a+" "+s.base,"#d8e0c2"),ft(n,s.x,s.y,"#caa07a",n.jackhammer?6:3,140),n.events.push({type:"harvest",x:s.x,y:s.y,kind:s.base,jack:n.jackhammer})}}function P0(n){let e=n.player,t=zo+38.4,i=null,s=t,r=null,o=null;for(let[c,f]of n.structures){if(f.owner!==Ge||f.hp>=f.max)continue;let[h,d]=c.split(",").map(Number),u=lt(h,d),p=ne(e.x,e.y,u.x,u.y);p<s&&(s=p,i=f,r="cell",o=c)}for(let[c,f]of n.walls){if(f.owner!==Ge||f.hp>=f.max)continue;let h=Lt(c,f),d=ne(e.x,e.y,(h[0]+h[2])/2,(h[1]+h[3])/2);d<s&&(s=d,i=f,r="wall",o=c)}for(let[c,f]of n.deploys){if(f.owner!==Ge||f.hp>=f.max)continue;let[h,d]=c.split(",").map(Number),u=lt(h,d),p=ne(e.x,e.y,u.x,u.y);p<s&&(s=p,i=f,r="deploy",o=c)}if(!i)return!1;let a=Kt[i.type],l=r==="deploy"?0:void 0;return ad(n,i,a,[n.inv],l)&&We(n,e.x,e.y-20,"repaired","#9ad06a"),!0}function Hd(n){let e=n.player;if(e.inCopter){let a=Math.floor(e.x/64),l=Math.floor(e.y/64);if(n.structures.has(Ye(a,l))){pn(n,"Can't land on a base");return}e.inCopter=!1,e.y+=gt.r+$t+6;return}if(n.copter&&!n.copter.destroyed&&ne(e.x,e.y,n.copter.x,n.copter.y)<gt.r+$t+34){e.inCopter=!0,pn(n,"liftoff");return}let t=n.world.shop;if(ne(e.x,e.y,t.x,t.y)<t.r+$t+44){n.shopOpen=!n.shopOpen;return}let i=null,s=64*1.4,r=null,o=null;for(let[a,l]of n.walls){if(l.type!=="door"||l.hp<=0)continue;let c=Lt(a,l),f=ne(e.x,e.y,(c[0]+c[2])/2,(c[1]+c[3])/2);f<s&&(s=f,i=l,r="door",o=a)}for(let[a,l]of n.deploys){if(!(l.type==="cupboard"||l.type==="box"))continue;let[c,f]=a.split(",").map(Number),h=lt(c,f),d=ne(e.x,e.y,h.x,h.y);d<s&&(s=d,i=l,r="store",o=a)}if(i){if(i.lock&&i.lock.by!==Ge){pn(n,"Locked \u2014 not your base");return}r==="door"?(i.open=!i.open,n.nav.stamp++):n.storeOpen=o}}function Br(n,e,t){let i=n.buildPiece,s=Kt[i],r=Math.floor(e/64),o=Math.floor(t/64);if(s.cat==="cell")return{gx:r,gy:o};if(s.cat==="diag")return{key:Le("D",r,o)};let a=e-r*64,l=t-o*64;return{key:[{key:Le("V",r,o),d:a},{key:Le("V",r+1,o),d:64-a},{key:Le("H",r,o),d:l},{key:Le("H",r,o+1),d:64-l}].sort((f,h)=>f.d-h.d)[0].key}}function Vd(n){let e=Br(n,n.cmd.mx,n.cmd.my),t=n.buildPiece;rd(n,Ge,t,e,[n.inv],{rot:n.buildRot})?(Kt[t].tc&&We(n,n.cmd.mx,n.cmd.my,"base claimed","#9ad06a"),n.events.push({type:"place",x:n.cmd.mx,y:n.cmd.my})):pn(n,"can't place there")}function Gd(n){let e=Br(n,n.cmd.mx,n.cmd.my),t=Math.floor(n.cmd.mx/64),i=Math.floor(n.cmd.my/64),s=(l,c)=>{for(let f in l.cost)n.inv[f]+=Math.ceil(l.cost[f]/2);(c.mat==="stone"||c.mat==="metal")&&(n.inv.stone+=7),c.mat==="metal"&&(n.inv.metal+=10)};if(e.key){let l=n.walls.get(e.key);if(l&&l.owner===Ge){s(Kt[l.type],l),n.walls.delete(e.key),n.nav.stamp++;return}}let r=Ye(t,i),o=n.deploys.get(r);if(o&&o.owner===Ge){s(Kt[o.type],o),n.deploys.delete(r),n.nav.stamp++;return}let a=n.structures.get(r);if(a&&a.owner===Ge){s(Kt[a.type],a),n.structures.delete(r),Ko(n,r),n.nav.stamp++;return}}function Wd(n){let e=n.cmd.mx,t=n.cmd.my,i=Math.floor(e/64),s=Math.floor(t/64);if(n.buildMode){let r=Br(n,e,t),o=a=>a&&a.owner===Ge&&od(n,a,Kt[a.type],[n.inv]);for(let a of[Le("V",i,s),Le("V",i+1,s),Le("H",i,s),Le("H",i,s+1)]){let l=n.walls.get(a);if(!l)continue;let c=Lt(a,l);if(Math.min(ne(e,t,c[0],c[1]),ne(e,t,c[2],c[3]),ne(e,t,(c[0]+c[2])/2,(c[1]+c[3])/2))<18&&o(l))return}if(o(n.structures.get(Ye(i,s))))return}else{let r=n.deploys.get(Ye(i,s));if(r&&r.type==="turret"&&r.owner===Ge){let o=(r.tier||1)+1,a=Of[o];a&&n.inv.scrap>=a&&(n.inv.scrap-=a,r.tier=o,r.mag=30,r.reload=0,We(n,e,t,"turret T"+o,"#9ab0d0"))}}}function Xd(n){let e=n.player;if(n.inv.grenade<=0){pn(n,"No grenades \u2014 buy at the trade shop");return}if(yt(n,e.x,e.y)){pn(n,"No weapons in the safe zone");return}n.inv.grenade--;let t=Math.min(560,ne(e.x,e.y,n.cmd.mx,n.cmd.my)),i=Math.max(120,t*6)*.2,s=e.angle;n.grenades.push({x:e.x+Math.cos(s)*22,y:e.y+Math.sin(s)*22,vx:Math.cos(s)*i,vy:Math.sin(s)*i,t:Fs.fuse,from:Ge,bob:0})}function qd(n){let e=n.player;if(n.inv.fence<=0){pn(n,"No fences \u2014 buy more (10 wood)");return}let t=e.x+Math.cos(e.angle)*34,i=e.y+Math.sin(e.angle)*34;if(n.structures.has(Ye(Math.floor(t/64),Math.floor(i/64)))){pn(n,"Not on a base");return}n.inv.fence--;let s=e.angle+Math.PI/2;n.fences.push({x:t,y:i,a:s,owner:Ge,hp:Gi.hp,max:Gi.hp,t:Gi.life,x0:t-Math.cos(s)*Gi.half,y0:i-Math.sin(s)*Gi.half,x1:t+Math.cos(s)*Gi.half,y1:i+Math.sin(s)*Gi.half}),n.needFenceRefresh=!0}function I0(n){let e=n.player;e.dead=!1,e.health=e.maxhp,e.invuln=1.8,e.poison=0;let t=null;for(let[i,s]of n.deploys)if(s.type==="cupboard"&&s.owner===Ge){let[r,o]=i.split(",").map(Number),a=lt(r,o);t={x:a.x,y:a.y+64};break}if(t)e.x=t.x,e.y=t.y;else for(let i=0;i<60;i++){let s=n.rng.rand(600,he.w-600),r=n.rng.rand(600,he.h-600);if(!(!n.world.onLand(s,r)||n.world.lakeAt(s,r)||yt(n,s,r)||bt(n,s,r,$t))){e.x=s,e.y=r;break}}n.copter&&n.copter.destroyed&&(n.copter.destroyed=!1,n.copter.hp=n.copter.max,n.copter.x=e.x+120,n.copter.y=e.y);for(let i of n.animals)i.aggro=null,i.foe=null,!i.dead&&ue(i.x,i.y,e.x,e.y)<4e4&&(i.dead=!0,i.respawnT=.6)}function Yd(n,e){let[t,i,s]=zt.trades[e];if(n.inv[t]<i){pn(n,"not enough "+t);return}n.inv[t]-=i,n.inv.scrap+=s}function Zd(n,e){let t=zt.buys[e];if(!t||n.inv.scrap<t.cost){pn(n,"not enough scrap");return}n.inv.scrap-=t.cost;let i=n.weapons[e];n.owned[e]?i.reserve+=t.ammo:(n.owned[e]=!0,i.ammo<on[e].magSize&&(i.ammo=on[e].magSize),We(n,n.player.x,n.player.y-20,on[e].name+" unlocked!","#bfe3ff"))}function $d(n,e){let t=n.player,i=s=>n.inv.scrap<s?(pn(n,"not enough scrap"),!1):(n.inv.scrap-=s,!0);switch(e){case"jackhammer":!n.jackhammer&&i(zt.jackhammer)&&(n.jackhammer=!0,pn(n,"Jackhammer! 3\xD7 gather"));break;case"laser":if(!n.owned.rifle){pn(n,"buy the rifle first");break}!t.rifleLaser&&i(zt.laser)&&(t.rifleLaser=!0);break;case"fence":n.inv.wood>=zt.fenceWood?(n.inv.wood-=zt.fenceWood,n.inv.fence++):pn(n,"not enough wood");break;case"grenade":i(zt.grenade)&&n.inv.grenade++;break;case"signal":i(zt.signal)&&(n.inv.signal=(n.inv.signal|0)+1);break;case"hqm":i(zt.hqm.cost)&&(n.inv.hqm+=zt.hqm.amt);break;case"facemask":{let s=t.facemask+1;s<=3&&i(ms.cost[s])&&(t.facemask=s);break}case"bodyArmor":{let s=t.bodyArmor+1;s<=3&&i(ms.cost[s])&&(t.bodyArmor=s);break}case"worker":i(zt.worker)&&(ed(n),pn(n,"worker hired \u2014 they gather and fight for you"));break}}function Kd(n,e,t){let i=n.deploys.get(n.storeOpen);if(!(!i||!i.store))if(t>0){let s=t>=9e3?n.inv[e]:Math.max(1,Math.floor(n.inv[e]*t)),r=Math.min(s,n.inv[e]);n.inv[e]-=r,i.store[e]+=r}else{let s=-t,r=s>=9e3?i.store[e]:Math.max(1,Math.floor(i.store[e]*s)),o=Math.min(r,i.store[e]);i.store[e]-=o,n.inv[e]+=o}}function pn(n,e){n.tip={text:e,t:1.4}}function jd(n,e){let t=n.player;for(let i of n.animals){if(i.dead){i.respawnT-=e,i.respawnT<=0&&Jd(n,i);continue}let s=gs[i.type];if(i.atkcd=Math.max(0,i.atkcd-e),i.hit=Math.max(0,i.hit-e),i.pauseT>0){i.pauseT-=e,i.vx=i.vy=0;continue}i.phase===void 0&&(i.phase=n.rng.next()*12|0);let r,o,a=1e9;if((n.tick+i.phase)%12===0||i.tgtCache===void 0){r=null,o=null;let m=t.dead||t.inCopter||n.ghost||yt(n,t.x,t.y),g=null,y=1e9;for(let M of n.units){if(M.dead||M.flying||M.eliminated||yt(n,M.x,M.y))continue;let w=ne(i.x,i.y,M.x,M.y);w<s.detect&&w<y&&!Bt(n,i.x,i.y,M.x,M.y)&&(y=w,g=M)}if(!m){let M=ne(i.x,i.y,t.x,t.y);M<s.detect&&M<=y&&!Bt(n,i.x,i.y,t.x,t.y)&&(r=t,o="player")}if(!r&&g&&(r=g,o="bot"),!r){let M=null,w=s.detect*s.detect;for(let[C,T]of n.deploys){if(T.type!=="turret")continue;let[D,_]=C.split(",").map(Number),v=lt(D,_),P=ue(i.x,i.y,v.x,v.y);P<w&&!Bt(n,i.x,i.y,v.x,v.y)&&(w=P,M={key:C,x:v.x,y:v.y})}M&&(r=M,o="turret")}if(!r&&i.hostile){let M=null,w=s.detect*s.detect;for(let C of n.animals){if(C===i||C.dead)continue;let T=ue(i.x,i.y,C.x,C.y);T<w&&(w=T,M=C)}M&&(r=M,o="animal")}if(!r&&i.foe){let M=i.foe;typeof M=="object"&&!M.dead&&ne(i.x,i.y,M.x,M.y)<s.detect*1.4&&(r=M,o=M===t?"player":M.owner!==void 0?"bot":"animal")}i.tgtCache=r?{tgt:r,kind:o}:null}else if(i.tgtCache){let m=i.tgtCache;(m.tgt.dead||m.kind==="player"&&(t.dead||n.ghost)||m.kind==="turret"&&!n.deploys.has(m.tgt.key))&&(i.tgtCache=null)}r=i.tgtCache?i.tgtCache.tgt:null,o=i.tgtCache?i.tgtCache.kind:null,r&&(a=ne(i.x,i.y,r.x,r.y)),r&&o!=="turret"&&a>s.lose&&(r=null,i.aggro=null);let l=s.walk,c=0,f=0;if(r){i.aggro=o,l=s.chase;let m=Math.max(1,a);c=(r.x-i.x)/m,f=(r.y-i.y)/m;let g=o==="turret"?i.r+35.2:o==="player"?i.r+16+2:i.r+16;if(i.atkcd<=0&&a<g){o==="player"?(ys(n,s.dmg,i.x,i.y,"animal"),s.poison&&(t.poison=Math.max(t.poison,10))):o==="bot"?_s(n,r,s.dmg,i.x,i.y,"animal"):o==="turret"?xs(n,r.key,s.dmg,"animal"):o==="animal"&&(r.hp-=s.dmg,r.foe=i,r.hit=.12,r.hp<=0&&(r.dead=!0,r.respawnT=n.rng.rand(11,18))),i.atkcd=s.atk,i.pauseT=Ff;continue}}else{if(i.aggro=null,i.wanderT-=e,i.avoidT>0)i.avoidT-=e,i.dir=i.avoidA;else if(i.wanderT<=0)if(i.wanderT=n.rng.rand(1.2,3.2),i.lake&&ne(i.x,i.y,i.lake.x,i.lake.y)>i.lake.r*.9)i.dir=Math.atan2(i.lake.y-i.y,i.lake.x-i.x);else if(i.lake&&n.rng.chance(.55)){i.vx=i.vy=0;continue}else if(n.rng.chance(.3)){i.vx=i.vy=0;continue}else i.dir=n.rng.rand(0,He);for(let[m,g]of n.deploys){if(g.type!=="cupboard")continue;let[y,M]=m.split(",").map(Number),w=lt(y,M);if(ue(i.x,i.y,w.x,w.y)<340*340){i.avoidA=Math.atan2(i.y-w.y,i.x-w.x),i.avoidT=1.2,i.dir=i.avoidA;break}}{let m=n.world.shop;ue(i.x,i.y,m.x,m.y)<760*760&&(i.avoidA=Math.atan2(i.y-m.y,i.x-m.x)+n.rng.rand(-.3,.3),i.avoidT=1.6,i.dir=i.avoidA)}c=Math.cos(i.dir),f=Math.sin(i.dir)}let h=i.x+c*l*e,d=i.y+f*l*e,u={x:i.x,y:i.y},p=i.lake?{allowLake:!0}:{},x=D0(n,i,h,d);if(i.vx=(i.x-u.x)/e,i.vy=(i.y-u.y)/e,r)if(ne(i.x,i.y,u.x,u.y)<l*e*.25){if(i.stuckT+=e,i.stuckT>3){Jd(n,i);continue}i.stuckT>1.5&&(i.aggro=null,i.foe=null,i.stuckT=0,i.dir=n.rng.rand(0,He))}else i.stuckT=Math.max(0,i.stuckT-e*2);else!x&&n.rng.chance(.5)&&(i.dir=n.rng.rand(0,He))}}function D0(n,e,t,i){if(yt(n,t,i)){let r=n.world.shop;e.avoidA=Math.atan2(e.y-r.y,e.x-r.x)+n.rng.rand(-.6,.6),e.avoidT=1.6,e.dir=e.avoidA,e.aggro=null,e.foe=null;let o=!1;return!yt(n,t,e.y)&&!bt(n,t,e.y,e.r*.7)?(e.x=t,o=!0):!yt(n,e.x,i)&&!bt(n,e.x,i,e.r*.7)&&(e.y=i,o=!0),e.x=et(e.x,20,he.w-20),e.y=et(e.y,20,he.h-20),o}let s=!1;return bt(n,e.x,e.y,e.r*.7)?(e.x=t,e.y=i,s=!0):(!bt(n,t,e.y,e.r*.7)&&(e.lake||!n.world.lakeAt(t,e.y))&&(e.x=t,s=!0),!bt(n,e.x,i,e.r*.7)&&(e.lake||!n.world.lakeAt(e.x,i))&&(e.y=i,s=!0)),e.x=et(e.x,20,he.w-20),e.y=et(e.y,20,he.h-20),s}function Jd(n,e){let t=gs[e.type],i=he.w,s=t.biome==="desert"?[0,i/3]:t.biome==="jungle"?[i/3,2*i/3]:t.biome==="winter"?[2*i/3,i]:[0,i];for(let r=0;r<30;r++){let o,a;if(e.lake){let l=n.rng.rand(0,He);o=e.lake.x+Math.cos(l)*(e.lake.r+n.rng.rand(30,200)),a=e.lake.y+Math.sin(l)*(e.lake.r+n.rng.rand(30,200))}else o=n.rng.rand(Math.max(90,s[0]-90),Math.min(i-90,s[1]+90)),a=n.rng.rand(90,he.h-90);if(!(ne(o,a,n.player.x,n.player.y)<520)&&!(ne(o,a,n.world.shop.x,n.world.shop.y)<820)&&!(n.world.landFactor(o,a)<.05)&&!(n.world.lakeAt(o,a)&&!e.lake)&&!bt(n,o,a,e.r)){e.x=o,e.y=a;break}}e.dead=!1,e.hp=e.max,e.aggro=null,e.foe=null,e.pauseT=0,e.stuckT=0,e.dir=n.rng.rand(0,He),e.respawnT=0,e.looted=!1}function Qd(n,e){let t=n.player;for(let i of n.guards){if(i.dead){if(i.respawnT-=e,i.respawnT<=0){let a=n.rng.rand(0,He),l=n.rng.rand(.35*i.mr,.8*i.mr);i.x=i.mx+Math.cos(a)*l,i.y=i.my+Math.sin(a)*l,i.hp=i.max,i.dead=!1}continue}i.gunCd=Math.max(0,i.gunCd-e);let s=null,r=Gt.detect;if(!t.dead&&!t.inCopter&&!n.ghost&&!yt(n,t.x,t.y)){let a=ne(i.x,i.y,t.x,t.y);a<r&&!Bt(n,i.x,i.y,t.x,t.y)&&(s=t,r=a)}for(let a of n.units){if(a.dead||a.flying||a.eliminated)continue;let l=ne(i.x,i.y,a.x,a.y);l<r&&!Bt(n,i.x,i.y,a.x,a.y)&&(s=a,r=l)}let o=ne(i.x,i.y,i.mx,i.my);if(o>i.mr+Gt.leash&&(s=null),s){let a=Math.atan2(s.y-i.y,s.x-i.x);if(i.angle=wi(i.angle,a,Math.min(1,e*9)*Math.PI),r<Gt.range&&i.gunCd<=0&&Math.abs(L0(i.angle,a))<.3){i.gunCd=Gt.rof;let d=i.angle+n.rng.rand(-Gt.spread,Gt.spread);In(n,{x:i.x+Math.cos(i.angle)*16,y:i.y+Math.sin(i.angle)*16,angle:d,speed:Gt.bspeed,dmg:Gt.dmg,from:"guard",life:Gt.range/Gt.bspeed+.1}),ft(n,i.x+Math.cos(i.angle)*16,i.y+Math.sin(i.angle)*16,"#ffd76b",2,90)}let l=0,c=0;r>300?(l=Math.cos(a),c=Math.sin(a)):r<150?(l=-Math.cos(a),c=-Math.sin(a)):(l=-Math.sin(a)*(i.seed>4.5?1:-1),c=Math.cos(a)*(i.seed>4.5?1:-1));let f=i.x+l*Gt.speed*e,h=i.y+c*Gt.speed*e;bt(n,f,h,Gt.r)||(i.x=f,i.y=h),i.hasWp=!1}else{let a=Math.min(580,i.mr*2.6);if(o>a+90){let l=Math.atan2(i.my-i.y,i.mx-i.x);i.angle=wi(i.angle,l,e*4);let c=i.x+Math.cos(i.angle)*Gt.speed*e,f=i.y+Math.sin(i.angle)*Gt.speed*e;bt(n,c,f,Gt.r)||(i.x=c,i.y=f),i.hasWp=!1}else{if(i.wpT-=e,!i.hasWp||i.wpT<=0||ne(i.x,i.y,i.wpX,i.wpY)<26){let d=n.rng.rand(0,He),u=n.rng.rand(.25*i.mr,a);i.wpX=i.mx+Math.cos(d)*u,i.wpY=i.my+Math.sin(d)*u,i.wpT=n.rng.rand(2.4,6),i.hasWp=!0}let l=Math.atan2(i.wpY-i.y,i.wpX-i.x);i.angle=wi(i.angle,l,e*3.5);let c=Gt.speed*.55,f=i.x+Math.cos(i.angle)*c*e,h=i.y+Math.sin(i.angle)*c*e;bt(n,f,h,Gt.r)?i.hasWp=!1:(i.x=f,i.y=h)}}}}var L0=(n,e)=>{let t=(e-n)%He;return t>Math.PI&&(t-=He),t<-Math.PI&&(t+=He),t};function Gs(n,e){let t=zn(n,e),i=t&&wn(n,t.tcKey);return i?[e.inv,i.store]:[e.inv]}function zn(n,e){let t=n.teams[e.id];return!t||e.ally?null:t.bases.find(i=>i.tcKey===e.tcKey&&!i.dead)||t.bases.find(i=>!i.dead)||null}function zr(n,e){let t=e.bases.find(s=>!s.dead),i=t&&wn(n,t.tcKey);return i?i.store:null}function sa(n,e,t){if(e<1400||t<1400||e>12424||t>7816||!n.world.onLand(e,t)||n.world.lakeAt(e,t)||n.world.railDist(e,t)<360||n.world.pathDist(e,t)<320||n.world.landFactor(e,t)<.12||ne(e,t,n.world.shop.x,n.world.shop.y)<Mt+450)return!1;for(let i of n.world.monuments)if(ne(e,t,i.x,i.y)<Mt+200)return!1;for(let i of n.world.lakes)if(ne(e,t,i.x,i.y)<i.r+560)return!1;for(let i of n.world.boulders)if(ne(e,t,i.x,i.y)<i.r+300)return!1;for(let[i,s]of n.deploys){if(s.type!=="cupboard")continue;let[r,o]=i.split(",").map(Number),a=lt(r,o);if(ne(e,t,a.x,a.y)<Vi)return!1}return!0}function iu(n,e,t){if(t.inv.wood+t.inv.stone+t.inv.metal<220)return!1;let s=220;for(let o of["wood","stone","metal"]){let a=Math.min(s,t.inv[o]);if(t.inv[o]-=a,s-=a,s<=0)break}let r=Jo(n,e,t.siteX,t.siteY);for(let o of n.units)o.owner===e.owner&&(o.unfounded=!1,o.hx=r.hx,o.hy=r.hy,o.tcKey=r.tcKey,o.doorX=r.doorX,o.doorY=r.doorY,o.doorGy=r.doorGy);return We(n,r.hx,r.hy,"base founded","#9ad06a"),!0}function su(n,e){let t=n.teams[e.id],i=zn(n,e);if(!t||!i)return!1;let s=Gs(n,e),r=N0(n,t.owner,i),o=U0(n,t.owner,i),a=e.hard?9:5,l=e.hard?10:e.weak?5:8,c=e.hard?49:36;return r<a&&eu(n,e,t,i,s)||e.primary&&r>=5&&ra(n,e)||o<l&&O0(n,e,t,i,s)||e.hard&&Xc(n,e,t,i,s)?!0:!e.jack&&An.pay(s,{wood:120,metal:60})?(e.jack=!0,We(n,e.x,e.y,"+jackhammer","#ffd76b"),!0):(e.hf=!e.hf,!!((e.hf?tu(n,e,t,i,s)||Xc(n,e,t,i,s):Xc(n,e,t,i,s)||tu(n,e,t,i,s))||r<c&&eu(n,e,t,i,s)))}function N0(n,e,t){let i=0;for(let[s,r]of n.structures){if(r.owner!==e)continue;let[o,a]=s.split(",").map(Number),l=lt(o,a);ue(l.x,l.y,t.hx,t.hy)<Ot*Ot&&i++}return i}function U0(n,e,t){let i=0;for(let[s,r]of n.deploys){if(r.type!=="turret"||r.owner!==e)continue;let[o,a]=s.split(",").map(Number),l=lt(o,a);ue(l.x,l.y,t.hx,t.hy)<Ot*Ot&&i++}return i}function k0(n,e,t,i,s){let r=Ye(e,t);if(n.structures.has(r)||n.deploys.has(r))return!1;let o=lt(e,t);if(t>=s.doorGy||yt(n,o.x,o.y)||Hs(n,o.x,o.y)||!n.world.onLand(o.x,o.y)||n.world.lakeAt(o.x,o.y)||Dr(n,o.x,o.y))return!1;for(let l of n.animals)if(!l.dead&&Math.abs(l.x-o.x)<64&&Math.abs(l.y-o.y)<64)return!1;let a=jo(n,i.owner,s.hx,s.hy);if(a){let l=Math.min(a.minx,e),c=Math.max(a.maxx,e),f=Math.min(a.miny,t),h=Math.max(a.maxy,t);if(c-l+1>10||h-f+1>10)return!1}return!0}function F0(n,e,t){let i=t.split(","),s=+i[1],r=+i[2],o=i[0]==="V"?[[s-1,r],[s,r]]:[[s,r-1],[s,r]];for(let[a,l]of o){if(!n.structures.has(Ye(a,l)))continue;let c=0;for(let f of[Le("V",a,l),Le("V",a+1,l),Le("H",a,l),Le("H",a,l+1)]){if(f===t)continue;let h=n.walls.get(f);(!h||h.hp<=0||h.type==="door")&&c++}if(c===0)return!0}return!1}function eu(n,e,t,i,s){if(!An.has(s,{wood:40}))return!1;let r=[];for(let[c,f]of n.structures){if(f.owner!==t.owner)continue;let[h,d]=c.split(",").map(Number),u=lt(h,d);if(!(ue(u.x,u.y,i.hx,i.hy)>Ot*Ot))for(let[p,x]of[[1,0],[-1,0],[0,1],[0,-1]])k0(n,h+p,d+x,t,i)&&r.push([h+p,d+x])}if(!r.length)return!1;let[o,a]=r[Math.floor(n.rng.next()*r.length)];if(!An.pay(s,{wood:40}))return!1;n.structures.set(Ye(o,a),{type:"floor",mat:"wood",hp:100,max:100,owner:t.owner,hitT:-100});let l=[[Le("V",o,a),Ye(o-1,a)],[Le("V",o+1,a),Ye(o+1,a)],[Le("H",o,a),Ye(o,a-1)],[Le("H",o,a+1),Ye(o,a+1)]];for(let[c,f]of l){let h=n.structures.get(f);h&&h.owner===t.owner||n.walls.has(c)||F0(n,t.owner,c)||n.walls.set(c,{type:"wall",mat:"wood",hp:100,max:100,owner:t.owner,hitT:-100,open:!1})}return Uc(n,t,i),n.nav.stamp++,We(n,o*64+64/2,a*64+64/2,"+room","#bcd0e0"),!0}function O0(n,e,t,i,s){if(!An.has(s,{wood:40,metal:30}))return!1;let r=jo(n,t.owner,i.hx,i.hy);if(!r)return!1;let o=Math.floor(i.doorX/64),a=[];for(let c=r.miny-1;c<=r.maxy+1;c++)for(let f=r.minx-1;f<=r.maxx+1;f++){let h=Ye(f,c);if(n.structures.has(h)||n.deploys.has(h)||c>=i.doorGy&&Math.abs(f-o)<=1)continue;let d=lt(f,c);if(yt(n,d.x,d.y)||Hs(n,d.x,d.y)||!n.world.onLand(d.x,d.y)||n.world.lakeAt(d.x,d.y)||Dr(n,d.x,d.y))continue;let u=!1,p=!1;for(let x=-1;x<=1&&!u;x++)for(let m=-1;m<=1;m++){let g=n.structures.get(Ye(f+m,c+x));if(g&&g.owner===t.owner){u=!0;break}}for(let[x,m]of[[1,0],[-1,0],[0,1],[0,-1]]){let g=n.deploys.get(Ye(f+x,c+m));if(g&&g.type==="turret"){p=!0;break}}u&&!p&&a.push({gx:f,gy:c,c:d})}if(!a.length)return!1;a.sort((c,f)=>ue(f.c.x,f.c.y,i.doorX,i.doorY)-ue(c.c.x,c.c.y,i.doorX,i.doorY));let l=a[0];return An.pay(s,{wood:40,metal:30})?(n.deploys.set(Ye(l.gx,l.gy),{type:"turret",mat:"wood",hp:150,max:150,owner:t.owner,hitT:-100,tier:e.hard?3:e.weak?1:2,angle:0,cd:0,mag:12,reload:0,ext:!0,scanT:n.rng.rand(.5,4.5)}),n.nav.stamp++,We(n,l.c.x,l.c.y,"+turret","#bcd0e0"),!0):!1}var B0={wood:{mat:"stone",cost:{stone:15}},stone:{mat:"metal",cost:{metal:20}},metal:{mat:"armored",hqm:8}},z0={wood:{mat:"stone",cost:{stone:12}},stone:{mat:"metal",cost:{metal:16}},metal:{mat:"armored",hqm:6}};function Xc(n,e,t,i,s){for(let[r,o]of n.walls){if(o.owner!==t.owner||o.hp<=0)continue;let a=B0[o.mat];if(a){if(a.hqm){if(e.hqm<a.hqm)continue;e.hqm-=a.hqm}else if(!An.pay(s,a.cost))continue;return o.mat=a.mat,o.max=bi(Kt[o.type],o.mat),o.hp=o.max,We(n,e.x,e.y,"+"+a.mat,a.mat==="armored"?"#7f93ad":a.mat==="metal"?"#aeb6bf":"#c2c8cf"),!0}}return!1}function tu(n,e,t,i,s){for(let[r,o]of n.structures){if(o.owner!==t.owner)continue;let a=z0[o.mat];if(a){if(a.hqm){if(e.hqm<a.hqm)continue;e.hqm-=a.hqm}else if(!An.pay(s,a.cost))continue;return o.mat=a.mat,o.max=bi(Kt[o.type],o.mat),o.hp=o.max,!0}}return!1}function ra(n,e){let t=n.teams[e.id];if(!t||!e.primary)return!1;let i=e.hard?dt.HIRE_CAP_HARD:dt.HIRE_CAP;if(n.units.filter(f=>f.owner===t.owner&&!f.eliminated).length>=i)return!1;let r=zn(n,e),o=r&&wn(n,r.tcKey),a=dt.WORKER_COST,l=Math.min(a,e.scrap);if(l+(o?o.store.scrap:0)<a)return!1;e.scrap-=l,a-=l,a>0&&(o.store.scrap-=a);let c=Pr(n,t,e.hx+n.rng.rand(-46,46),e.hy+n.rng.rand(24,64),!1);return c.hx=e.hx,c.hy=e.hy,c.tcKey=e.tcKey,c.doorX=e.doorX,c.doorY=e.doorY,c.doorGy=e.doorGy,c.unfounded=e.unfounded,We(n,c.x,c.y,"+worker hired","#9ad06a"),!0}function ru(n,e,t){let i=n.units.find(c=>c.owner===e.owner&&c.primary&&!c.eliminated);if(!i||i.unfounded||e.eliminated)return;let s=e.bases.filter(c=>!c.dead);if(!s.length)return;let r=e.hard?4:3,o=zr(n,e),a=o?o.wood+o.stone+o.metal:0,l=e.brain;if(i.fwdT-=t,l.aggressor&&l.raidTarget&&s.length<r&&a>=170&&i.fwdT<=0){i.fwdT=10;let c=Hn(n,l.raidTarget);if(c&&!s.some(f=>ne(f.hx,f.hy,c.hx,c.hy)<2400)){let f=s[0],h=Math.atan2(f.hy-c.hy,f.hx-c.hx);for(let d of[1800,2300,1400,2700]){let u=c.hx+Math.cos(h)*d,p=c.hy+Math.sin(h)*d;if(sa(n,u,p)){nu(o,200);let x=Jo(n,e,u,p);x.kind="raid-forward",We(n,u,p,"+raid base","#ffd0a0");return}}}}if(i.expT-=t,i.expT<=0){i.expT=n.rng.rand(50,90);let c=l.attack?160:260;if(s.length>=1&&s.length<r&&a>=c){let f=H0(n,e,s[0]);if(f){nu(o,240);let h=Jo(n,e,f.x,f.y);h.kind=f.kind,We(n,f.x,f.y,"+"+f.kind+" base","#bcd0e0")}}}}function nu(n,e){if(n)for(let t of["wood","stone","metal"]){let i=Math.min(e,n[t]);if(n[t]-=i,e-=i,e<=0)return}}function Hn(n,e){if(!e)return null;if(e==="player"){for(let[t,i]of n.deploys)if(i.type==="cupboard"&&i.owner===Ge){let[s,r]=t.split(",").map(Number),o=lt(s,r);return{owner:Ge,tcKey:t,hx:o.x,hy:o.y,isPlayer:!0}}return null}return e.bases&&e.bases.find(t=>!t.dead)||null}function H0(n,e,t){for(let s of n.world.monuments){let r=!1;for(let o of n.teams)if(o.bases.some(a=>!a.dead&&ne(a.hx,a.hy,s.x,s.y)<Mt+900)){r=!0;break}if(!r)for(let o=0;o<8;o++){let a=o/8*Math.PI*2,l=s.x+Math.cos(a)*(Mt+320),c=s.y+Math.sin(a)*(Mt+320);if(sa(n,l,c))return{x:l,y:c,kind:"monument"}}}let i=Hn(n,e.brain.raidTarget)||V0(n,e,t);if(i){let s=Math.atan2(i.hy-t.hy,i.hx-t.hx);for(let r of[1700,2200,1300]){let o=t.hx+Math.cos(s)*r,a=t.hy+Math.sin(s)*r;if(sa(n,o,a))return{x:o,y:a,kind:"raid-forward"}}}for(let s=0;s<10;s++){let r=n.rng.rand(0,Math.PI*2),o=n.rng.rand(Vi+200,Vi+1600),a=t.hx+Math.cos(r)*o,l=t.hy+Math.sin(r)*o;if(sa(n,a,l))return{x:a,y:l,kind:"survival"}}return null}function V0(n,e,t){let i=null,s=3e3*3e3;for(let r of n.teams)if(!(r===e||r.eliminated))for(let o of r.bases){if(o.dead)continue;let a=ue(t.hx,t.hy,o.hx,o.hy);a>s&&(s=a,i=o)}return i}function qc(n,e){if(e.ally)return!1;let t=Math.floor(e.x/64),i=Math.floor(e.y/64),s=null,r=-1;for(let[a,l,c]of[[Le("V",t,i),Ye(t-1,i),!1],[Le("V",t+1,i),Ye(t+1,i),!1],[Le("H",t,i),Ye(t,i-1),!1],[Le("H",t,i+1),Ye(t,i+1),!0]]){let f=n.walls.get(a);if(!f||f.owner!==e.owner||f.type==="door")continue;let h=(n.structures.has(l)?0:60)+(c?12:0)+n.rng.rand(0,2);h>r&&(r=h,s=a)}if(!s)return!1;let o=n.walls.get(s);return o.type="door",o.open=!0,o.closeT=n.t+1.2,o.lock={by:e.owner},o.hp=Math.max(o.hp,50),o.max=Math.max(o.max,50),n.nav.stamp++,n.metrics.doorCuts=(n.metrics.doorCuts||0)+1,We(n,e.x,e.y,"cut a door","#caa46a"),!0}function Hr(n){n.path=null,n.pathI=0,n.repathN=0}function Ht(n,e,t,i,s,r={}){let o=r.arrive||16,a=ne(e.x,e.y,t,i);if(a<=o)return Hr(e),e.progBest=1e9,"arrived";let l=ne(e.pathGX,e.pathGY,t,i)>90,c=n.t-e.pathT>3,f=!e.path||n.t-(e.lastPlanT||-1)>.5;if((!e.path||l||c||e.pathI>=e.path.length)&&f){if(e.lastPlanT=n.t,a<192&&Cr(n,e.owner,e.x,e.y,t,i))e.path=[{x:t,y:i}],e.pathI=0;else{let v=jf(n,e.owner,e.x,e.y,t,i);n.metrics.repaths++,v?(e.path=v,e.pathI=0,e.directFallback=!1):(n.metrics.pathFails++,e.path=[{x:t,y:i}],e.pathI=0,e.directFallback=!0)}e.pathGX=t,e.pathGY=i,e.pathT=n.t}let h=e.path[Math.min(e.pathI,e.path.length-1)],d=h.door?12:15;ne(e.x,e.y,h.x,h.y)<d&&e.pathI<e.path.length-1&&(e.pathI++,h=e.path[e.pathI]),!h.door&&e.pathI+1<e.path.length&&!e.path[e.pathI+1].door&&n.tick%7===e.tickPhase%7&&Cr(n,e.owner,e.x,e.y,e.path[e.pathI+1].x,e.path[e.pathI+1].y)&&(e.pathI++,h=e.path[e.pathI]);let u=r.speed||dt.BOT_SPEED,p=n.world.lakeAt(e.x,e.y);p&&!p.frozen&&(u*=.5);let x=Math.max(1,ne(e.x,e.y,h.x,h.y)),m=(h.x-e.x)/x,g=(h.y-e.y)/x,y=Math.min(u*s,x),M=e.x+m*y,w=e.y+g*y,C=e.x,T=e.y,D={passOwner:e.owner,openOwnDoors:!0},_=!1;if(bt(n,e.x,e.y,13,D)?(e.x=M,e.y=w,_=!0):bt(n,M,w,13,D)?(bt(n,M,e.y,13,D)||(e.x=M,_=!0),bt(n,e.x,w,13,D)||(e.y=w,_=!0)):(e.x=M,e.y=w,_=!0),e.x=et(e.x,12,he.w-12),e.y=et(e.y,12,he.h-12),e.vx=(e.x-C)/s,e.vy=(e.y-T)/s,_){let v=Math.atan2(g,m);e.angle=e.angle+oa(e.angle,v)*Math.min(1,s*7)}if(e.progT+=s,e.progT>=.5){e.progT=0;let v=ne(e.x,e.y,t,i);if(v<e.progBest-12)e.progBest=v,e.noProgT=0,e.repathN=0;else if(e.noProgT=(e.noProgT||0)+.5,e.noProgT>=1.5){if(e.noProgT=0,e.repathN++,Yo(n,e.x,e.y,12),Yo(n,e.x+(t>e.x?64:-64),e.y,10),Yo(n,e.x,e.y+(i>e.y?64:-64),10),n.metrics.stuckTotal+=1.5,e.path=null,e.lastPlanT=-1,e.repathN===2){let P=Math.atan2(i-e.y,t-e.x)+(e.id%2?1:-1)*Math.PI/2;e.detourX=e.x+Math.cos(P)*220,e.detourY=e.y+Math.sin(P)*220,e.detourT=n.t+2.5}if(e.repathN>=3)return e.repathN=0,e.progBest=1e9,Hr(e),n.metrics.stuckLog.push({t:n.t,owner:e.owner,x:e.x|0,y:e.y|0}),"stuck"}}if(e.detourT&&n.t<e.detourT)if(ne(e.x,e.y,e.detourX,e.detourY)>20){let P=Math.atan2(e.detourY-e.y,e.detourX-e.x),R=e.x+Math.cos(P)*u*s,N=e.y+Math.sin(P)*u*s;bt(n,R,N,13,D)||(e.x=R,e.y=N)}else e.detourT=0;return!_&&e.path&&e.pathI<e.path.length-1?(e.wpStallT=(e.wpStallT||0)+s,e.wpStallT>.6&&(e.wpStallT=0,e.pathI++)):_&&(e.wpStallT=0),e.gotoTick=n.tick,_?e.stuckT=Math.max(0,e.stuckT-s*2):(e.stuckT+=s,e.state!=="raid"&&(n.metrics.maxStuck=Math.max(n.metrics.maxStuck,e.stuckT))),"moving"}function ou(n,e,t){for(let i of n.units){if(i===e||i.dead||i.eliminated||i.flying||i.owner!==e.owner)continue;let s=ue(e.x,e.y,i.x,i.y);if(s>.01&&s<324){let r=Math.sqrt(s),o=(18-r)*.5*t*6,a=(e.x-i.x)/r*o,l=(e.y-i.y)/r*o;bt(n,e.x+a,e.y+l,13,{passOwner:e.owner})||(e.x+=a,e.y+=l)}}}function Dn(n,e,t,i,s=8){let r=Math.atan2(t-n.y,e-n.x);n.angle=n.angle+oa(n.angle,r)*Math.min(1,i*s)}var oa=(n,e)=>{let t=(e-n)%He;return t>Math.PI&&(t-=He),t<-Math.PI&&(t+=He),t};var au=dt.BOT_SPEED;function du(n,e,t){if(e.eliminated)return;let i=e.ally?null:n.teams[e.id];if(!e.ally&&!e.unfounded){let d=zn(n,e);if(!d){uu(n,e,i);return}d.tcKey!==e.tcKey&&pu(n,e,d);let u=wn(n,d.tcKey);u&&(u.store.wood=Math.max(u.store.wood,40))}if(e.dead){e.respawnT-=t,e.respawnT<=0&&W0(n,e,i);return}if(e.gunCd=Math.max(0,e.gunCd-t),e.rkCd=Math.max(0,e.rkCd-t),e.gnCd=Math.max(0,e.gnCd-t),e.fenceCd=Math.max(0,e.fenceCd-t),e.think-=t,e.expandT-=t,e.retaliateT=Math.max(0,e.retaliateT-t),e.disengageT=Math.max(0,e.disengageT-t),e.regenT=Math.max(0,e.regenT-t),e.regenT<=0&&e.hp<e.max&&(e.hp=Math.min(e.max,e.hp+9*t)),e.primary&&!e.unfounded&&!e.ally&&(e.hireT-=t,e.hireT<=0)){e.hireT=2;let d=zn(n,e),u=d&&wn(n,d.tcKey);e.scrap+(u?u.store.scrap:0)>=dt.WORKER_COST+24&&ra(n,e)}if(e.aboard)if(e.aboard.destroyed||!e.aboard.riders.includes(e))e.aboard=null,e.flying=!1;else{e.flying=!0;return}if(e.flying&&(!e.copter||e.copter.destroyed)&&(e.flying=!1),e.flying&&e.state!=="trade"&&vu(e),e.unfounded){X0(n,e,i,t),lu(n,e,t);return}e.endgame=n.aliveBases<=dt.ENDGAME_BASES||n.t>dt.ENDGAME_T;let s=i?i.brain:G0,r=e.retaliateT>0&&ue(e.x,e.y,e.threatX,e.threatY)<dt.REACT_R*dt.REACT_R&&!yt(n,e.x,e.y);(n.tick+e.tickPhase)%9===0||e.thCache===void 0?e.thCache=_u(n,e)||jc(n,e):e.thCache&&e.thCache.ref&&!e.thCache.ref.dead?(e.thCache.x=e.thCache.ref.x,e.thCache.y=e.thCache.ref.y):e.thCache&&e.thCache.ref&&e.thCache.ref.dead&&(e.thCache=null);let o=r?{x:e.threatX,y:e.threatY,vx:0,vy:0}:e.thCache,a=ne(e.x,e.y,e.hx,e.hy);ue(e.x,e.y,n.world.shop.x,n.world.shop.y)<(Mt+140)*(Mt+140)&&(o=null),e.ally&&(e.raidUrge-=t);let l=e.raid&&Hn(n,e.raid),c=e.rocketer&&(e.state==="raid"||e.wasRaid)&&l&&e.rockets>0&&e.hp>=e.max*.2&&!s.urgent,f=o?ne(e.x,e.y,o.x,o.y):1e9;switch(o&&!c&&(e.defDuty||r&&!e.wasRaid||s.urgent||e.ally)&&!((e.wasRaid||e.endgame)&&f>=230)&&!(s.aggressor&&f>=160)?(e.state="defend",e.defHold=e.defDuty&&(s.attack||s.urgent)?2.5:.7,e.defTgt={x:o.x,y:o.y,vx:o.vx||0,vy:o.vy||0,ref:o.ref}):e.state==="defend"?(e.defHold-=t,e.defHold<=0&&(e.state="gather",e.defendT=0,e.defTgt=null)):e.state==="raid"&&(!l||i&&s.decaying)?(e.raid=null,e.wasRaid=!1,e.state="gather"):e.defDuty&&(s.attackers>0||s.urgent)&&a>340&&e.state!=="raid"&&e.state!=="trade"?e.state="return":e.state==="gather"&&q0(n,e,i,s)&&(e.state=Y0(n,e,i,s)),e.act=e.state,e.state){case"defend":J0(n,e,i,s,o,t);break;case"raid":j0(n,e,i,s,t);break;case"return":tg(n,e,t);break;case"trade":ng(n,e,i,s,t);break;default:sg(n,e,i,s,t);break}lu(n,e,t)}var G0={sealed:!0,decaying:!1,ready:!1,attack:!1,urgent:!1,aggressor:!1,raidTarget:null};function lu(n,e,t){if(ou(n,e,t),e.gotoTick!==n.tick&&(e.stuckT=Math.max(0,e.stuckT-t)),!e.flying&&(e.state==="gather"||e.state==="raid"||e.state==="return"||e.state==="trade")&&Math.hypot(e.vx,e.vy)>30&&ta(n,e,Math.atan2(e.vy,e.vx)),e.directFallback&&e.stuckT>1.5){let i=Math.floor(e.x/64),s=Math.floor(e.y/64),r=n.structures.get(i+","+s);r&&r.owner===e.owner&&qc(n,e)&&(Hr(e),e.directFallback=!1,e.stuckT=0)}n.metrics.act[e.act]=(n.metrics.act[e.act]||0)+t}function uu(n,e,t){e.eliminated=!0,e.dead=!0,e.primary&&t&&!t.elimsPosted&&(t.elimsPosted=!0,t.eliminated=!0,n.elims.push({text:"Base "+(e.id+1)+" ELIMINATED",t:30}),n.metrics.elims++)}function pu(n,e,t){e.hx=t.hx,e.hy=t.hy,e.tcKey=t.tcKey,e.doorX=t.doorX,e.doorY=t.doorY,e.doorGy=t.doorGy,Hr(e)}function W0(n,e,t){if(e.ally){e.hp=e.max,e.dead=!1,e.x=e.hx,e.y=e.hy+50,e.state="gather";return}if(!t)return;let i=t.bases.filter(r=>!r.dead);if(!i.length){uu(n,e,t);return}let s=i[0];if(i.length>1&&!e.primary){let r=Hn(n,t.brain.raidTarget);r&&(e.rocketer||e.wasRaid||e.state==="raid")?s=i.reduce((o,a)=>ue(o.hx,o.hy,r.hx,r.hy)<ue(a.hx,a.hy,r.hx,r.hy)?o:a):s=i[Math.floor(n.rng.next()*i.length)]}pu(n,e,s),e.hp=e.max,e.dead=!1,e.x=s.hx,e.y=s.hy+50,e.state="gather",e.raid=null,e.wasRaid=!1,e.primary&&e.copter&&(e.copter.destroyed=!1,e.copter.hp=e.copter.max,e.copter.x=e.hx-256,e.copter.y=e.hy)}function X0(n,e,t,i){e.act="found";let s=e.inv.wood+e.inv.stone+e.inv.metal,r=_u(n,e);if(r&&!yt(n,e.x,e.y)){bu(n,e,r,i);return}if(e.primary){if(s>=220){if(ne(e.x,e.y,e.siteX,e.siteY)<=128){iu(n,t,e);return}Ht(n,e,e.siteX,e.siteY,i);return}}else if(s>=70)if(ne(e.x,e.y,e.siteX,e.siteY)<=192){let a=n.units.find(l=>l.owner===e.owner&&l.primary&&!l.dead);if(a)for(let l of["wood","stone","metal"])a.inv[l]+=e.inv[l],e.inv[l]=0}else{Ht(n,e,e.siteX,e.siteY,i);return}e.act="gather";let o=e.tgtNode;(!o||o.amount<=0)&&(o=lg(n,e,"wood",2600)||fu(n,e,4e3)||fu(n,e,1e9),e.tgtNode=o),o&&Mu(n,e,o,i)}function q0(n,e,t,i){if(e.monRun)return!1;let s=e.inv.wood+e.inv.stone+e.inv.metal;return!!(s>=dt.GATHER_LOAD||e.scrap>40||!e.ally&&t&&(i.breach||i.damaged&&Zc(n,e)>=12||e.rocketer&&e.rockets<8&&e.role!=="turtle"&&n.t>=(e.tradeCd||0)&&(e.scrap>=12||s>=100||Kc(n,e)>=24)||mu(n,e,i)||gu(n,e,i))||e.ally&&e.raidUrge<=0)}function mu(n,e,t){if(e.ally||e.role==="turtle"||n.t<(e.tradeCd||0)||e.rockets>=(e.primary?12:6))return!1;let i=e.inv.wood+e.inv.stone+e.inv.metal;return(e.scrap>=24||i>=120||e.primary&&Kc(n,e)>=48)&&(t.aggressor||Z0(n,e)||t.ready)}function gu(n,e,t){return!(n.t>120||e.endgame)||n.t<e.raidCd||e.role==="turtle"&&!e.endgame||!(e.rockets>0||e.satchels>0||e.endgame)?!1:e.endgame||t.aggressor?!0:t.ready&&t.raidTarget&&e.raidBias<.72&&$0(n,e)>=4}function Y0(n,e,t,i){let s=e.inv.wood+e.inv.stone+e.inv.metal;if(!e.ally&&t){let r=i.breach;if(r&&Zc(n,e)<40)return"gather";let o=ne(e.x,e.y,e.hx,e.hy);if(r||i.damaged&&Zc(n,e)>=12)return o>180?"return":"gather";if(e.rocketer&&e.rockets<8&&e.role!=="turtle"&&n.t>=(e.tradeCd||0)&&(e.scrap>=12||s>=100||Kc(n,e)>=24))return"trade";if(e.scrap>40||s>=dt.GATHER_LOAD)return"return";if(mu(n,e,i))return"trade";if(gu(n,e,i)){let a=i.raidTarget;if(n.transports.find(c=>c.owner===e.owner&&!c.destroyed&&c.state!=="fly"&&c.state!=="unload"&&c.riders.length<Wt.seats)){let c=yu(n,t);c&&(a=c)}if((!a||!Hn(n,a))&&(a=Jc(n,t,e)),a)return e.raid=a,e.raidCd=n.t+2,n.metrics.raidsLaunched++,"raid"}}if(e.ally&&e.raidUrge<=0){let r=K0(n);if(r)return e.raid=r,e.raidUrge=n.rng.rand(24,44),"raid";e.raidUrge=n.rng.rand(8,14)}return"gather"}var Zc=(n,e)=>e.inv.wood+xu(n,e,"wood"),Kc=(n,e)=>xu(n,e,"scrap");function xu(n,e,t){let i=zn(n,e),s=i&&wn(n,i.tcKey);return s?s.store[t]:0}function Z0(n,e){let t=zn(n,e),i=t&&wn(n,t.tcKey);if(!i)return!1;let s=n.teams[e.id],r=2;for(let o of n.structures.values())o.owner===e.owner&&r++;for(let o of n.deploys.values())o.owner===e.owner&&o.type==="turret"&&r++;return i.store.wood+i.store.stone+i.store.metal>r*.0075*300}function $0(n,e){let t=0;for(let i of n.structures.values())i.owner===e.owner&&(i.type==="floor"||i.type==="trifloor")&&t++;return t}function Jc(n,e,t){let i=null,s=1e18,r=e.bases.find(a=>!a.dead);if(!r)return null;for(let a of n.teams){if(a===e||a.eliminated)continue;let l=a.bases.find(p=>!p.dead);if(!l)continue;let c=wn(n,l.tcKey),f=c?c.store.wood+c.store.stone+c.store.metal:0,h=0;for(let p of n.deploys.values())p.owner===a.owner&&p.type==="turret"&&h++;let d=0;if(e.hard)for(let p of n.units)p.owner===a.owner&&!p.dead&&!p.eliminated&&ue(p.x,p.y,l.hx,l.hy)<720*720&&d++;let u=ue(r.hx,r.hy,l.hx,l.hy)*(1+h*dt.RAID_TUR_W)*(1+d*dt.RAID_DEF_W)/(1+f*.003);u<s&&(s=u,i=a)}let o=Hn(n,"player");return o&&!n.ghost&&ue(r.hx,r.hy,o.hx,o.hy)<s&&(i="player"),i}function K0(n){let e=null,t=1e18;for(let i of n.teams){if(i.eliminated)continue;let s=i.bases.find(o=>!o.dead);if(!s)continue;let r=ue(n.player.x,n.player.y,s.hx,s.hy);r<t&&(t=r,e=i)}return e}function yu(n,e){let t=e.bases.find(r=>!r.dead);if(!t)return null;let i=null,s=3e3*3e3;for(let r of n.teams){if(r===e||r.eliminated)continue;let o=r.bases.find(l=>!l.dead);if(!o)continue;let a=ue(t.hx,t.hy,o.hx,o.hy);a>s&&(s=a,i=r)}return i}function _u(n,e){if(e.disengageT>0||yt(n,e.x,e.y))return null;let t=null,i=dt.REACT_R*dt.REACT_R,s=n.player,r=(o,a,l,c,f,h)=>{if(f===e.unreach&&n.t<e.unreachT)return;let d=ue(e.x,e.y,o,a);d>=i||h&&d>h*h||yt(n,o,a)||ri(n,e.x,e.y,o,a)||(i=d,t={x:o,y:a,vx:l,vy:c,ref:f})};!e.ally&&!s.dead&&!s.inCopter&&!n.ghost&&r(s.x,s.y,s.vx,s.vy,s);for(let o of n.units)o.owner===e.owner||o.dead||o.flying||o.eliminated||r(o.x,o.y,o.vx,o.vy,o);for(let o of n.animals)!o.dead&&o.aggro&&r(o.x,o.y,o.vx,o.vy,o,360);for(let o of n.guards)o.dead||r(o.x,o.y,0,0,o,480);return t}function jc(n,e){if(e.disengageT>0||yt(n,e.x,e.y))return null;let t=null,i=430*430,s=n.player,r=(o,a,l,c,f)=>{if(f===e.unreach&&n.t<e.unreachT)return;let h=ue(e.x,e.y,o,a);h>=i||yt(n,o,a)||ri(n,e.x,e.y,o,a)||(i=h,t={x:o,y:a,vx:l,vy:c,ref:f})};!e.ally&&!s.dead&&!s.inCopter&&!n.ghost&&r(s.x,s.y,s.vx,s.vy,s);for(let o of n.units)o.owner===e.owner||o.dead||o.flying||o.eliminated||r(o.x,o.y,o.vx,o.vy,o);for(let o of n.guards)o.dead||r(o.x,o.y,0,0,o);return t}function J0(n,e,t,i,s,r){e.defendT+=r;let o=s||e.defTgt;if(!o){e.state="gather";return}let a=e.raid&&Hn(n,e.raid),c=e.inv.wood+e.inv.stone+e.inv.metal>60||e.scrap>20,f=e.hp<e.max*.2;if((e.hp<e.max*(c?.45:.28)&&!a||f)&&!e.endgame&&!e.retreat&&n.rng.chance(c?.05:.02)&&(e.retreat=!0),e.retreat)if(e.hp>=e.max*.85||e.defendT>9)e.retreat=!1;else{e.disengageT=Math.max(e.disengageT,2.5),Bt(n,e.x,e.y,o.x,o.y)||Wr(n,e,o,r),(Ht(n,e,e.hx+e.lane,e.hy+e.hoff,r)==="arrived"||ne(e.x,e.y,e.hx,e.hy)<64*1.5)&&(e.retreat=!1,e.state="return");return}bu(n,e,o,r),fg(n,e,o);let d=a?2.2:7;e.defendT>d&&(a?e.state="raid":(e.disengageT=6,e.state="gather"),e.defendT=0)}function j0(n,e,t,i,s){e.wasRaid=!0,e.act="raid";let r=Hn(n,e.raid);if(!r){e.wasRaid=!1,e.state="return";return}let o=wn(n,r.tcKey);if(!o){e.wasRaid=!1,e.state="return";return}if(e.rockets<=0&&e.satchels<=0&&!e.endgame){e.raid=null,e.wasRaid=!1;let m=e.inv.wood+e.inv.stone+e.inv.metal;e.state=e.scrap>=8||m>=100?"trade":"gather";return}if(!e.aboard&&ne(e.x,e.y,e.hx,e.hy)<600&&ne(r.hx,r.hy,e.hx,e.hy)>2800){let m=n.transports.find(g=>g.owner===e.owner&&!g.destroyed&&(g.state==="idle"||g.state==="board")&&g.riders.length<Wt.seats);if(m){if(ne(e.x,e.y,m.x,m.y)<70){Ed(n,e,m);return}Ht(n,e,m.x,m.y,s);return}}let a=ne(e.x,e.y,r.hx,r.hy),c=n.units.filter(m=>m.owner===e.owner&&m.state==="raid"&&m.raid===e.raid&&!m.dead&&ue(m.x,m.y,r.hx,r.hy)<560*560).length>=2||e.endgame||e.ally;if(e.stagedFor!==e.raid&&(e.staged=!1,e.stagedFor=e.raid),a<700?e.staged=!0:a>1600&&(e.staged=!1),!e.staged){let m=Math.atan2(e.hy-r.hy,e.hx-r.hx),g=(e.id%5-2)*70+e.lane*2,y=r.hx+Math.cos(m)*540+Math.cos(m+Math.PI/2)*g,M=r.hy+Math.sin(m)*540+Math.sin(m+Math.PI/2)*g;Ht(n,e,y,M,s)==="stuck"&&(e.raidCd=n.t+8,e.raid=null,e.wasRaid=!1,e.state="gather");return}if(c&&a<(e.endgame?420:300)&&!Bt(n,e.x,e.y,r.hx,r.hy)){Dn(e,r.hx,r.hy,s),o.hp-=(e.endgame?140:e.hard?24:14)*s,o.hitT=n.t,n.rng.chance(.2)&&n.particles.push({x:r.hx+n.rng.rand(-10,10),y:r.hy+n.rng.rand(-10,10),vx:n.rng.rand(-40,40),vy:n.rng.rand(-60,-20),life:.4,max:.4,r:2,col:"#caa24a"}),o.hp<=0&&Lc(n,r.tcKey,o,e.owner);return}let f=Q0(n,e,r),h=null,d=null,u=!1;if(f)h=f.c,d=f.key;else{let m=eg(n,e,t,r);m?(h=m.c,d=m.key,u=m.door):h={x:r.hx,y:r.hy}}let p=ne(e.x,e.y,h.x,h.y);if(e.rockets>0){if(a>=dt.ROCKET_MIN&&a<460&&!Bt(n,e.x,e.y,r.hx,r.hy)){Dn(e,r.hx,r.hy,s),$c(n,e,r.hx,r.hy,2.2);return}if(p>380){let m=Math.atan2(e.y-h.y,e.x-h.x),g=(e.id%5-2)*70,y=h.x+Math.cos(m)*320+Math.cos(m+Math.PI/2)*g,M=h.y+Math.sin(m)*320+Math.sin(m+Math.PI/2)*g;Ht(n,e,y,M,s),cu(n,e,r)}else if(p<dt.ROCKET_MIN){let m=Math.atan2(e.y-h.y,e.x-h.x),g=e.x+Math.cos(m)*120*s,y=e.y+Math.sin(m)*120*s;bt(n,g,y,13,{passOwner:e.owner})||(e.x=g,e.y=y)}else Dn(e,h.x,h.y,s),$c(n,e,h.x,h.y,2.2);return}if(e.satchels>0&&c){p<100?e.rkCd<=0&&(n.satchels.push({x:h.x,y:h.y,t:2,from:e.owner}),e.satchels--,e.rkCd=2.6,We(n,e.x,e.y,"satchel!","#ffd0a0")):(Ht(n,e,h.x,h.y,s,{arrive:80}),cu(n,e,r));return}let x=jc(n,e);if(x)ne(e.x,e.y,x.x,x.y)<480?(Dn(e,x.x,x.y,s),Wr(n,e,x,s)):Ht(n,e,x.x,x.y,s);else if(c){let m=Math.atan2(e.hy-r.hy,e.hx-r.hx),g=(e.id%5-2)*64;Ht(n,e,h.x+Math.cos(m)*380+Math.cos(m+Math.PI/2)*g,h.y+Math.sin(m)*380+Math.sin(m+Math.PI/2)*g,s,{arrive:40})}else if(p<380){let m=Math.atan2(e.y-h.y,e.x-h.x),g=e.x+Math.cos(m)*au*s,y=e.y+Math.sin(m)*au*s;bt(n,g,y,13,{passOwner:e.owner})||(e.x=g,e.y=y)}else Ht(n,e,h.x,h.y,s,{arrive:340})}function Q0(n,e,t){let i=null,s=1e18;for(let[r,o]of n.deploys){if(o.type!=="turret"||o.owner!==t.owner)continue;let[a,l]=r.split(",").map(Number),c=lt(a,l),f={1:340,2:380,3:460}[o.tier||1]+60,h=ue(e.x,e.y,c.x,c.y);h<f*f&&!Bt(n,e.x,e.y,c.x,c.y)&&h<s&&(s=h,i={key:r,c})}return i}function eg(n,e,t,i){for(let d of n.units)if(!(d.owner!==e.owner||d.dead||d.raid!==e.raid)&&ue(d.x,d.y,i.hx,i.hy)<760*760&&!Bt(n,d.x,d.y,i.hx,i.hy))return null;let s=t?t.brain:null;if(s&&s.breachKey&&n.t-s.breachT<1.5){let d=n.walls.get(s.breachKey);if(d&&d.hp>0&&!(d.type==="door"&&d.open)){let u=aa(n,s.breachKey,d);return{key:s.breachKey,c:u,door:d.type==="door"}}}let r=0,o=0,a=0;for(let d of n.units)d.owner===e.owner&&d.raid===e.raid&&!d.dead&&(r+=d.x,o+=d.y,a++);a||(r=e.x,o=e.y,a=1),r/=a,o/=a;let l=null,c=1e18,f=!1;for(let[d,u]of n.walls){if(u.owner!==i.owner||u.hp<=0||u.type==="door"&&u.open)continue;let p=aa(n,d,u);if(ue(p.x,p.y,i.hx,i.hy)>Ot*Ot)continue;let x=(ne(r,o,p.x,p.y)+ne(p.x,p.y,i.hx,i.hy))*(u.type==="door"?.6:1);x<c&&(c=x,l=d,f=u.type==="door")}if(!l)return null;s&&(s.breachKey=l,s.breachT=n.t);let h=n.walls.get(l);return{key:l,c:aa(n,l,h),door:f}}function aa(n,e,t){let i=e.split(","),s=+i[1],r=+i[2];return i[0]==="V"?{x:s*64,y:r*64+64/2}:{x:s*64+64/2,y:r*64}}function cu(n,e,t){let i=null,s=57600,r=!1;for(let[a,l]of n.walls){if(l.owner!==t.owner||l.hp<=0||l.type==="door"&&l.open)continue;let c=aa(n,a,l),f=ue(e.x,e.y,c.x,c.y),h=l.type==="door";(f<s||h&&!r&&f<57600)&&(h||!r)&&(s=f,i=c,r=h)}if(!i||e.rkCd>0)return;let o=ne(e.x,e.y,i.x,i.y);e.rockets>0&&o>=dt.ROCKET_MIN?(Dn(e,i.x,i.y,1),$c(n,e,i.x,i.y,2.2)):o<90&&e.satchels>0&&(n.satchels.push({x:i.x,y:i.y,t:3,from:e.owner}),e.satchels--,e.rkCd=4.5)}function tg(n,e,t){e.wasRaid=!1,e.act="return",e.retT+=t;let i=Ht(n,e,e.hx+e.lane,e.hy+e.hoff,t,{arrive:64*1.5});if(i==="arrived"){Gr(n,e),e.state="gather",e.retT=0;return}if(i==="stuck"||e.retT>14){let s=e.ally?null:n.teams[e.id],r=s&&zn(n,e);s&&r&&Nr(n,s,r)?i==="stuck"&&qc(n,e):(Gr(n,e),e.state="gather",e.retT=0)}}function Gr(n,e){if(e.ally){for(let s of["wood","stone","metal"])n.inv[s]+=e.inv[s],e.inv[s]=0;n.inv.scrap+=e.scrap,e.scrap=0;return}let t=zn(n,e),i=t&&wn(n,t.tcKey);if(i){for(let s of["wood","stone","metal"])i.store[s]+=e.inv[s],e.inv[s]=0;i.store.scrap+=e.scrap,e.scrap=0}}function ng(n,e,t,i,s){e.act="trade";let r=n.world.shop;if(!r){e.state="return";return}let o=(e.id>=0?e.id:3)+(e.tradeJitter||0),a=r.x+Math.cos(o*2.39996)*Mt*.34,l=r.y+Math.sin(o*2.39996)*Mt*.34;if(!e.tradeDone){if(ne(e.x,e.y,r.x,r.y)>Mt*.55){if(e.copter&&!e.copter.destroyed){hu(n,e,a,l,s,Mt*.5);return}Ht(n,e,a,l,s,{arrive:30})==="stuck"&&(e.tradeCd=n.t+20,e.tradeJitter=(e.tradeJitter||0)+1,e.state="return");return}ig(n,e,t,i),e.tradeDone=!0;return}if(e.flying){hu(n,e,e.hx-256,e.hy,s,46)&&(vu(e),e.tradeDone=!1,e.state="return");return}e.tradeDone=!1,e.state="return"}function ig(n,e,t,i){let s=0;for(;e.inv.wood>=100;)e.inv.wood-=100,e.scrap+=6,s+=6;for(;e.inv.stone>=100;)e.inv.stone-=100,e.scrap+=9,s+=9;for(;e.inv.metal>=50;)e.inv.metal-=50,e.scrap+=10,s+=10;s>0&&We(n,e.x,e.y,"+"+s+" scrap","#ffe07a");let r=zn(n,e),o=r&&wn(n,r.tcKey);if(o){if(e.primary)e.scrap+=o.store.scrap,o.store.scrap=0;else if(e.rocketer){let c=Math.max(0,o.store.scrap-100);e.scrap+=c,o.store.scrap-=c}}let a=!1;for(e.primary&&t&&e.scrap>=Wt.cost&&!n.transports.some(c=>c.owner===e.owner&&!c.destroyed)&&yu(n,t)&&(e.scrap-=Wt.cost,Td(n,t,e),a=!0),!e.weak&&e.gun==="pistol"&&e.scrap>=10&&(e.scrap-=10,e.gun=e.shotgun?"shotgun":"rifle",We(n,e.x,e.y,"+"+e.gun,"#bfe3ff"),a=!0),e.hard&&e.gun==="rifle"&&!e.rifleLaser&&e.scrap>=10&&(e.scrap-=10,e.rifleLaser=!0,We(n,e.x,e.y,"+laser","#ff6a6a"),a=!0);e.rockets<2&&e.scrap>=12;)e.scrap-=12,e.rockets++,a=!0;if(e.primary&&e.rockets>=2)for(;e.scrap>=dt.WORKER_COST&&ra(n,e);)a=!0;for(;e.rockets<12&&e.scrap>=12;)e.scrap-=12,e.rockets++,a=!0;for(;e.satchels<4&&e.scrap>=8;)e.scrap-=8,e.satchels++,a=!0;if(e.grenades<2&&e.scrap>=8&&(e.scrap-=8,e.grenades++,a=!0),e.hard){for(;e.scrap>=14&&e.bodyArmor<3;)e.scrap-=14,e.bodyArmor++,We(n,e.x,e.y,"+armor","#9fb0c8"),a=!0;for(;e.scrap>=12&&e.facemask<3;)e.scrap-=12,e.facemask++,a=!0;for(;e.scrap>=20&&e.hqm<60;)e.scrap-=14,e.hqm+=10,a=!0}let l=n.units.filter(c=>c.owner===e.owner&&c.copter&&!c.copter.destroyed).length;(!e.copter||e.copter.destroyed)&&!e.aboard&&e.scrap>=dt.MINICOPTER_COST&&l<(e.hard?3:2)&&(e.scrap-=dt.MINICOPTER_COST,e.copter={x:e.x-128,y:e.y,angle:0,rotor:0,spin:0,vx:0,vy:0,hp:160,max:160,destroyed:!1},We(n,e.x,e.y,"+minicopter","#bfe3ff"),a=!0),a&&We(n,e.x,e.y-16,"resupplied","#bfe3ff")}function hu(n,e,t,i,s,r=44){let o=e.copter;if(!o||o.destroyed)return!0;e.flying||(o.x=e.x,o.y=e.y,e.flying=!0,e.flyT=0),e.flyT=(e.flyT||0)+s;let a=ne(o.x,o.y,t,i);if(a<r||e.flyT>9)return e.flyT>9&&(o.x=t,o.y=i,o.vx=o.vy=0),e.x=o.x,e.y=o.y,!0;let l=Math.atan2(i-o.y,t-o.x);o.angle=o.angle+oa(o.angle,l)*Math.min(1,s*4),o.rotor+=s*46;let c=a>160?1:Math.max(.12,a/160);o.vx+=Math.cos(o.angle)*gt.accel*c*s,o.vy+=Math.sin(o.angle)*gt.accel*c*s;let f=Math.pow(gt.drag,s);o.vx*=f,o.vy*=f;let h=Math.hypot(o.vx,o.vy);return h>gt.speed&&(o.vx*=gt.speed/h,o.vy*=gt.speed/h),o.x=et(o.x+o.vx*s,gt.r,he.w-gt.r),o.y=et(o.y+o.vy*s,gt.r,he.h-gt.r),e.x=o.x,e.y=o.y,!1}function vu(n){n.copter&&(n.copter.x=n.x,n.copter.y=n.y,n.copter.vx=0,n.copter.vy=0,n.copter.spin=0),n.flying=!1}function sg(n,e,t,i,s){e.wasRaid=!1,e.retT=0;let r=e.inv.wood+e.inv.stone+e.inv.metal,o=ne(e.x,e.y,e.hx,e.hy),a=o<200;e.gathering=!1;let l=t&&zn(n,e);if(e.buildDuty&&t&&l){let h=Nr(n,t,l);if(h){if(e.act="build",o>200){Ht(n,e,e.hx+e.lane,e.hy+e.hoff,s);return}r>0&&Gr(n,e),kc(n,t,h,Gs(n,e))&&(We(n,e.x,e.y,"sealed","#9ad06a"),e.maintT=n.t);return}if(a){r>0&&Gr(n,e);let d=Qo(n,t,l);if(d&&cd(n,t,d,Gs(n,e))){e.act="build",e.maintT=n.t,We(n,e.x,e.y,"repaired","#9ad06a");return}if(e.expandT<=0&&(e.expandT=n.rng.rand(2.5,6),su(n,e))){e.act="build",e.maintT=n.t;return}}}if(a&&t&&l&&((r>100||e.scrap>0)&&Gr(n,e),i.breach&&kc(n,t,i.breach,Gs(n,e))&&(i.breach=null,i.sealed=!0,e.maintT=n.t,We(n,e.x,e.y,"sealed","#9ad06a"))),e.qRun){let h=n.quarry;if(!h||h.owner===e.owner||n.t>e.qRun.until)e.qRun=null;else{e.act="quarry";let d=jc(n,e),u=ne(e.x,e.y,h.x,h.y);if(d&&u<h.r){Dn(e,d.x,d.y,s,10),Wr(n,e,d,s);return}u>h.r*.5&&Ht(n,e,h.x,h.y,s,{arrive:h.r*.4})==="stuck"&&(e.qRun=null);return}}if(e.lootRun){let h=e.lootRun,d=n.t<h.until;if(h.kind==="crate"&&(d=d&&!!n.lockedCrate),h.kind==="airdrop"){let u=ne(e.x,e.y,h.x,h.y);(u<2200&&n.airdrop||!n.airdrop&&u<480)&&(d=!1)}if(h.kind==="pile"&&(ne(e.x,e.y,h.x,h.y)<480?d=!1:n.loot.some(p=>(p.kind==="rocket"||p.kind==="satchel")&&ue(p.x,p.y,h.x,h.y)<300*300)||(d=!1)),!d)e.lootRun=null;else{e.act="loot",h.kind==="crate"&&n.lockedCrate&&ne(e.x,e.y,n.lockedCrate.x,n.lockedCrate.y)<=90||Ht(n,e,h.x,h.y,s,{arrive:80,speed:170})==="stuck"&&(e.lootRun=null);return}}if(e.lootSkipSet&&n.t>e.lootSkipT&&(e.lootSkipSet=null),e.lootTgt&&(!n.loot.includes(e.lootTgt)||ue(e.x,e.y,e.lootTgt.x,e.lootTgt.y)>560*560)&&(e.lootTgt=null),!e.lootTgt){let h=null,d=520*520;for(let u of n.loot){if(e.lootSkipSet&&e.lootSkipSet.has(u))continue;let p=ue(e.x,e.y,u.x,u.y);p<d&&(d=p,h=u)}e.lootTgt=h}if(e.lootTgt){e.act="loot",(Ht(n,e,e.lootTgt.x,e.lootTgt.y,s,{arrive:22,speed:170})==="stuck"||e.directFallback&&e.stuckT>2)&&(e.lootSkipSet||(e.lootSkipSet=new Set),e.lootSkipSet.add(e.lootTgt),e.lootSkipT=n.t+25,e.lootTgt=null);return}if(n.airdrop&&n.t>(e.airdropCd||0)&&ue(e.x,e.y,n.airdrop.x,n.airdrop.gy)<2600*2600){let h=n.airdrop;e.act="airdrop";let d=h.fall<1?h.gy:h.y,u=ne(e.x,e.y,h.x,d);if(h.fall>=1&&u<150){Dn(e,h.x,h.y,s,10),e.gunCd<=0&&la(n,e,h.x,h.y);return}if(u>130){Ht(n,e,h.x,d,s,{arrive:120,speed:165})==="stuck"&&(e.airdropCd=n.t+25);return}return}if(n.lockedCrate&&!e.buildDuty&&n.t>(e.crateCd||0)&&ue(e.x,e.y,n.lockedCrate.x,n.lockedCrate.y)<1600*1600){let h=n.lockedCrate;if(e.act="crate",ne(e.x,e.y,h.x,h.y)>90){Ht(n,e,h.x,h.y,s,{arrive:80,speed:165})==="stuck"&&(e.crateCd=n.t+30);return}return}if(!e.endgame){if(e.monRun){let h=Yc(n,e),d=h&&Vr(n,h);if(e.monRunT+=s,!d||r>=340||e.monRunT>12)e.monRun=!1,e.monCd=n.t+n.rng.rand(60,110);else{e.act="monument";let u=cg(n,h);if(u&&ue(e.x,e.y,h.x,h.y)<(h.r+320)*(h.r+320)){ne(e.x,e.y,u.x,u.y)>340||Bt(n,e.x,e.y,u.x,u.y)?Ht(n,e,u.x,u.y,s,{arrive:300})==="stuck"&&(e.monRun=!1,e.monCd=n.t+30):(Dn(e,u.x,u.y,s,10),Wr(n,e,{x:u.x,y:u.y,ref:u},s));return}let p=Vr(n,h);if(p){ne(e.x,e.y,p.x,p.y)>120?Ht(n,e,p.x,p.y,s,{arrive:110,speed:150})==="stuck"&&(e.monRun=!1,e.monCd=n.t+14):(Dn(e,p.x,p.y,s,10),e.gunCd<=0&&la(n,e,p.x,p.y));return}}}else if(n.t>e.monCd&&r<200){let h=Yc(n,e);h&&Vr(n,h)&&(ue(h.x,h.y,e.hx,e.hy)<2100*2100||ue(h.x,h.y,e.x,e.y)<1300*1300)&&(e.monRun=!0,e.monRunT=0)}}let c=Yc(n,e);c&&ue(e.x,e.y,c.x,c.y)<(c.r+150)*(c.r+150)&&!e.monRun?(e.monStay+=s,e.monStay>10&&(e.monStay=0,e.monCd=n.t+45,e.tgtNode=null)):e.monStay=Math.max(0,e.monStay-2*s);let f=rg(n,e);if(f){Mu(n,e,f,s);return}if(c&&Vr(n,c)&&n.t>e.monCd){let h=Vr(n,c);e.act="monument",ne(e.x,e.y,h.x,h.y)>120?Ht(n,e,h.x,h.y,s,{arrive:110,speed:150})==="stuck"&&(e.monCd=n.t+30):(Dn(e,h.x,h.y,s,10),e.gunCd<=0&&la(n,e,h.x,h.y));return}e.act="roam",hg(n,e,s)}function Mu(n,e,t,i){if(ne(e.x,e.y,t.x,t.y)>t.r+22){e.act="toNode",Ht(n,e,t.x,t.y,i,{arrive:t.r+18})==="stuck"&&((!e.skipSet||n.t>e.skipT)&&(e.skipSet=new Set),e.skipSet.add(t),e.skipT=n.t+10,e.tgtNode=null);return}if(e.act="gather",e.gathering=!0,Dn(e,t.x,t.y,i),e.swing+=i*9,e.think<=0){e.think=.5;let r=Math.min(e.jack?24:8,t.amount);r>0&&(t.amount-=r,t.regen=0,e.inv[t.base]+=r,n.events.push({type:"harvest",x:t.x,y:t.y,kind:t.base,jack:e.jack}))}}function rg(n,e){if(e.tgtNode){let i=e.tgtNode,s=i.by&&i.by!==e&&!i.by.dead&&n.t-i.byT<3;if(i.amount>0&&!s)return i.by=e,i.byT=n.t,i;e.tgtNode=null}let t=[1400,2800,5600,1e9];for(let i of t){let s=null,r=1e18;for(let o of n.resources){if(o.amount<=0||e.skipSet&&e.skipSet.has(o)&&n.t<e.skipT)continue;let a=ue(o.x,o.y,e.hx,e.hy);if(a<57600||a>i*i||o.by&&o.by!==e&&!o.by.dead&&n.t-o.byT<2.5||n.structures.has(og(o.x,o.y)))continue;let l=ue(e.x,e.y,o.x,o.y);l*=ag(n,e,o)?1:6,l<r&&(r=l,s=o)}if(s)return s.by=e,s.byT=n.t,e.tgtNode=s,s}return null}var og=(n,e)=>Math.floor(n/64)+","+Math.floor(e/64);function ag(n,e,t){return t._losT&&n.t-t._losT<2&&t._losFor===e||(t._los=Qf(n,e.x,e.y,t.x,t.y),t._losT=n.t,t._losFor=e),t._los}function fu(n,e,t){let i=null,s=t*t;for(let r of n.resources){if(r.amount<=0)continue;let o=ue(e.x,e.y,r.x,r.y);o<s&&(s=o,i=r)}return i}function lg(n,e,t,i){let s=null,r=i*i;for(let o of n.resources){if(o.amount<=0||o.base!==t)continue;let a=ue(e.x,e.y,o.x,o.y);a<r&&(r=a,s=o)}return s}function Yc(n,e){let t=null,i=1e18;for(let s of n.world.monuments){if(s.type==="quarry")continue;let r=ue(e.x,e.y,s.x,s.y);r<i&&(i=r,t=s)}return t}function Vr(n,e){for(let t of n.barrels)if(!(t.hp<=0||t.tier!=="mon")&&ue(t.x,t.y,e.x,e.y)<(e.r+220)*(e.r+220))return t;return null}function cg(n,e){let t=null,i=(e.r+280)*(e.r+280);for(let s of n.guards){if(s.dead)continue;let r=ue(s.x,s.y,e.x,e.y);r<i&&(i=r,t=s)}return t}function hg(n,e,t){if(!e.roamX||ne(e.x,e.y,e.roamX,e.roamY)<140||n.t>(e.roamT||0))for(let i=0;i<12;i++){let s=n.rng.rand(800,he.w-800),r=n.rng.rand(800,he.h-800);if(!(!n.world.onLand(s,r)||n.world.lakeAt(s,r))){e.roamX=s,e.roamY=r,e.roamT=n.t+n.rng.rand(7,13);break}}e.roamX&&Ht(n,e,e.roamX,e.roamY,t,{speed:140,arrive:120})==="stuck"&&(e.roamX=0)}function bu(n,e,t,i){e.hp<e.max*.35&&dg(n,e,t);let s=t.x,r=t.y;if(e.hard&&(t.vx||t.vy)){let l=e.weak?1150:1500,c=Math.min(.7,ne(e.x,e.y,t.x,t.y)/l);s+=(t.vx||0)*c,r+=(t.vy||0)*c}let o=ne(e.x,e.y,t.x,t.y);if(!Bt(n,e.x,e.y,t.x,t.y)&&!ri(n,e.x,e.y,t.x,t.y)&&o<460){if(Dn(e,s,r,i,10),Wr(n,e,{x:s,y:r,ref:t.ref},i),o<140?e.backoff=!0:o>180&&(e.backoff=!1),e.backoff){let l=Math.atan2(e.y-t.y,e.x-t.x),c=e.x+Math.cos(l)*120*i,f=e.y+Math.sin(l)*120*i;bt(n,c,f,13,{passOwner:e.owner})||(e.x=c,e.y=f,e.path=null)}else if(e.regenT>0||e.retaliateT>0){e.strafeT-=i,e.strafeT<=0&&(e.strafeT=dt.STRAFE_FLIP,e.strafeS=-e.strafeS);let l=Math.atan2(t.y-e.y,t.x-e.x)+Math.PI/2*e.strafeS,c=e.x+Math.cos(l)*120*i,f=e.y+Math.sin(l)*120*i;bt(n,c,f,13,{passOwner:e.owner})||(e.x=c,e.y=f,e.path=null)}}else Ht(n,e,t.x,t.y,i,{arrive:380})==="stuck"&&(e.disengageT=4,e.retaliateT=0,e.defHold=0,e.defTgt=null,e.thCache=null,t.ref&&(e.unreach=t.ref,e.unreachT=n.t+25))}function Wr(n,e,t,i){e.gunCd>0||e.flying||e.dead||yt(n,e.x,e.y)||yt(n,t.x,t.y)||Bt(n,e.x,e.y,t.x,t.y)||ri(n,e.x,e.y,t.x,t.y)||la(n,e,t.x,t.y)}function la(n,e,t,i){let s=ne(e.x,e.y,t,i),r=Math.atan2(i-e.y,t-e.x);e.angle=r;let o=18;if(e.gun==="shotgun"&&s<420){e.gunCd=.34;for(let a=0;a<6;a++)In(n,{x:e.x+Math.cos(r)*o,y:e.y+Math.sin(r)*o,angle:r+n.rng.rand(-.18,.18),speed:1050,dmg:8,from:e.owner,life:.95})}else if(e.gun==="rifle"){e.gunCd=e.hard?.12:.16;let a=e.hard?.02:.055;e.rifleLaser&&(a*=.45),In(n,{x:e.x+Math.cos(r)*o,y:e.y+Math.sin(r)*o,angle:r+n.rng.rand(-a,a),speed:1500,dmg:e.hard?13:11,from:e.owner,life:1.6})}else e.gunCd=.3,In(n,{x:e.x+Math.cos(r)*o,y:e.y+Math.sin(r)*o,angle:r+n.rng.rand(-.1,.1),speed:1150,dmg:7,from:e.owner,life:1.6});n.events.push({type:"botShot",x:e.x,y:e.y,a:r})}function $c(n,e,t,i,s){if(e.rkCd>0||e.rockets<=0||ne(e.x,e.y,t,i)<dt.ROCKET_MIN||yt(n,e.x,e.y))return!1;e.rkCd=s||2.4,e.rockets--;let r=Math.atan2(i-e.y,t-e.x);return Ur(n,e.x+Math.cos(r)*22,e.y+Math.sin(r)*22,r,e.owner),!0}function fg(n,e,t){if(e.grenades<=0||e.gnCd>0)return;let i=ne(e.x,e.y,t.x,t.y);if(i<150||i>380)return;let s=!1,r=n.player;if(!r.dead&&ue(t.x,t.y,r.x,r.y)<4900&&(s=!0),!s){for(let l of n.units)if(!l.dead&&l.owner!==e.owner&&ue(t.x,t.y,l.x,l.y)<4900){s=!0;break}}if(!s)return;e.gnCd=n.rng.rand(5,8),e.grenades--;let o=Math.atan2(t.y-e.y,t.x-e.x),a=Math.min(420,i)*5.4;n.grenades.push({x:e.x+Math.cos(o)*22,y:e.y+Math.sin(o)*22,vx:Math.cos(o)*a*.2,vy:Math.sin(o)*a*.2,t:Fs.fuse,from:e.owner,bob:0}),We(n,e.x,e.y,"grenade!","#ffd0a0")}function dg(n,e,t){if(e.fenceCd>0)return;let i=Gs(n,e),s=0;for(let d of i)s+=d.wood||0;if(s<10)return;let r=Math.atan2(t.y-e.y,t.x-e.x),o=e.x+Math.cos(r)*30,a=e.y+Math.sin(r)*30,l=Math.floor(o/64),c=Math.floor(a/64);if(n.structures.has(l+","+c))return;let f=10;for(let d of i){let u=Math.min(f,d.wood||0);if(d.wood-=u,f-=u,f<=0)break}let h=r+Math.PI/2;n.fences.push({x:o,y:a,a:h,owner:e.owner,hp:200,max:200,t:60,x0:o-Math.cos(h)*23,y0:a-Math.sin(h)*23,x1:o+Math.cos(h)*23,y1:a+Math.sin(h)*23}),n.fences.length>120&&n.fences.shift(),n.needFenceRefresh=!0,e.fenceCd=9}function wu(n,e){for(let[o,a]of n.walls)a.type==="door"&&a.open&&a.closeT!==void 0&&n.t>a.closeT&&(a.open=!1,n.nav.stamp++);let t=0;for(let o of n.teams)o.eliminated||(o.bases.some(a=>!a.dead)||n.units.some(a=>a.owner===o.owner&&a.unfounded&&!a.eliminated))&&t++;if(n.aliveBases=t,n.dbSweepT-=e,n.dbSweepT<=0){n.dbSweepT=2;for(let o of n.teams)for(let a of o.bases)!a.dead&&!wn(n,a.tcKey)&&(a.dead=!0),a.dead&&!a.cleared&&(a.cleared=!0,Nc(n,o.owner,a.hx,a.hy))}if(n.aggroT-=e,n.aggroT<=0){let o=n.teams.find(l=>l.owner===n.aggressorOwner);if(o&&!o.eliminated&&o.brain.raidTarget&&Hn(n,o.brain.raidTarget)&&n.units.some(l=>l.owner===o.owner&&!l.dead&&!l.eliminated))n.aggroT=8;else{let l=n.teams.filter(c=>!c.eliminated&&n.units.some(f=>f.owner===c.owner&&f.primary&&!f.eliminated));if(l.length){let c=l[Math.floor(n.rng.next()*l.length)];n.aggressor=c.id,n.aggressorOwner=c.owner}n.aggroT=n.rng.rand(35,55)}}n.roleT-=e;let i=n.roleT<=0;i&&(n.roleT=.4);for(let o of n.teams){if(o.eliminated)continue;let a=o.brain,l=o.bases.filter(v=>!v.dead);if(!l.length)continue;let c=n.units.find(v=>v.owner===o.owner&&v.primary&&!v.eliminated);if(a.statusT-=e,a.statusT<=0){a.statusT=.5;let v=l[0];a.breach=Nr(n,o,v),a.damaged=Qo(n,o,v),a.sealed=!a.breach;let P=2,R=0,N=0;for(let B of n.structures.values())B.owner===o.owner&&(P++,N++);for(let B of n.deploys.values())B.owner===o.owner&&B.type==="turret"&&(P++,R++);let X=zr(n,o),q=X?X.wood+X.stone+X.metal:0;a.decaying=q<P*Er*150;let k=o.hard?4:o.weak?2:3;a.ready=a.sealed&&R>=k&&q>P*Er*300&&N>=(o.hard?6:4),a.floors=N,a.turrets=R}if(!i)continue;let f=n.units.filter(v=>v.owner===o.owner&&!v.eliminated&&!v.dead&&!v.flying&&!v.unfounded&&!v.aboard),h=(v,P)=>l.some(R=>ue(v,P,R.hx,R.hy)<720*720),d=0,u=0,p=0,x=n.player;!x.dead&&!x.inCopter&&!n.ghost&&h(x.x,x.y)&&(d++,u+=x.x,p+=x.y);for(let v of n.units)v.owner===o.owner||v.dead||v.flying||v.eliminated||h(v.x,v.y)&&(d++,u+=v.x,p+=v.y);let m=!1;for(let v of n.rockets)if(v.from!==o.owner&&h(v.x,v.y)){m=!0;break}if(!m){for(let v of n.satchels)if(v.from!==o.owner&&h(v.x,v.y)){m=!0;break}}a.attackers=d,a.urgent=m,a.attack=d>0||n.units.some(v=>v.raid===o&&v.state==="raid"&&!v.dead),a.aggressor=o.owner===n.aggressorOwner||n.aliveBases<=3;let g=0;if(o.hard)for(let v of n.units)v.owner===o.owner||v.dead||v.eliminated||v.state==="raid"&&v.raid===o&&l.some(P=>ue(v.x,v.y,P.hx,P.hy)<1400*1400)&&g++;let y=Math.max(d,g),M=m?f.length:y>0?Math.min(y+1,f.length):0;d>0?(u/=d,p/=d):(u=l[0].hx,p=l[0].hy);let w=[...f].sort((v,P)=>ue(v.x,v.y,u,p)-ue(P.x,P.y,u,p));for(let v=0;v<w.length;v++)w[v].defDuty=v<M;let C=zr(n,o);(!a.sealed||C&&C.wood>=40&&a.floors<(o.hard?49:36))&&(a.buildHoldT=n.t+6);let D=f.filter(v=>!v.defDuty),_=null;n.t<a.buildHoldT&&D.length>=2&&(_=D.find(v=>v.buildDuty)||D.reduce((v,P)=>ue(v.x,v.y,l[0].hx,l[0].hy)<ue(P.x,P.y,l[0].hx,l[0].hy)?v:P,D[0]));for(let v of f)v.buildDuty=v===_;if(m||d>0&&!a.aggressor){a.raidTarget=null;for(let v of f)v.rocketer=!1}else if(a.ready||a.aggressor){let v=0;for(let k of f)v+=k.rockets+k.satchels;let P=f.filter(k=>!k.defDuty&&!k.buildDuty),R=Math.min(n.aliveBases<=4?3:2,P.length),N=P.filter(k=>k.rocketer);for(let k of f)k.rocketer&&(k.defDuty||k.buildDuty)&&(k.rocketer=!1,N=N.filter(B=>B!==k));if(N.length<R){let k=P.filter(B=>!B.rocketer).sort((B,Y)=>Y.rockets+Y.satchels-(B.rockets+B.satchels)||ue(B.x,B.y,l[0].hx,l[0].hy)-ue(Y.x,Y.y,l[0].hx,l[0].hy));for(let B of k){if(N.length>=R)break;B.rocketer=!0,N.push(B)}}let X=a.aggressor?2:4,q=f.filter(k=>!k.defDuty).length;c&&q>=2&&v>=X?(!a.raidTarget||!Hn(n,a.raidTarget))&&(a.raidTarget=Jc(n,o,c)):a.raidTarget=null}else{a.raidTarget=null;for(let v of f)v.rocketer=!1}if(o.hard&&n.t>a.lootCd&&!n.units.some(v=>v.owner===o.owner&&v.lootRun)){let v=null;if(n.lockedCrate)v={x:n.lockedCrate.x,y:n.lockedCrate.y,kind:"crate"};else if(n.airdrop)v={x:n.airdrop.x,y:n.airdrop.gy,kind:"airdrop"};else for(let P of n.loot){if(P.kind!=="rocket"&&P.kind!=="satchel")continue;let R=!1;for(let N of n.teams)if(!(N===o||N.eliminated)&&N.bases.some(X=>!X.dead&&ue(P.x,P.y,X.hx,X.hy)<800*800)){R=!0;break}if(!R){v={x:P.x,y:P.y,kind:"pile"};break}}if(v){let P=n.units.filter(R=>R.owner===o.owner&&!R.dead&&!R.eliminated&&!R.primary&&!R.defDuty&&!R.buildDuty&&!R.rocketer&&!R.monRun&&R.state==="gather").sort((R,N)=>ue(R.x,R.y,v.x,v.y)-ue(N.x,N.y,v.x,v.y))[0];if(P){let R=ne(P.x,P.y,v.x,v.y),N=v.kind==="pile"?520:2400;R>N&&R<4500&&(P.lootRun={x:v.x,y:v.y,kind:v.kind,until:n.t+R/dt.BOT_SPEED*1.8+(v.kind==="crate"?170:20)},a.lootCd=n.t+45)}}}if(n.quarry&&n.quarry.owner!==o.owner&&n.t>a.qCd&&!n.units.some(v=>v.owner===o.owner&&v.qRun)){let v=n.units.filter(P=>P.owner===o.owner&&!P.dead&&!P.eliminated&&!P.primary&&!P.defDuty&&!P.buildDuty&&!P.rocketer&&!P.monRun&&!P.lootRun&&P.state==="gather").sort((P,R)=>ue(P.x,P.y,n.quarry.x,n.quarry.y)-ue(R.x,R.y,n.quarry.x,n.quarry.y))[0];if(v){let P=ne(v.x,v.y,n.quarry.x,n.quarry.y);P<5200&&(v.qRun={until:n.t+P/dt.BOT_SPEED*1.8+25},a.qCd=n.t+(o.hard?90:150))}}if(o.hard&&c&&!n.signal&&!n.plane&&!n.airdrop&&n.t>a.sigCd){let v=zr(n,o);if(c.scrap+(v?v.scrap:0)>=dt.SIGNAL_COST+60){let R=l[0];for(let N=0;N<8;N++){let X=N/8*Math.PI*2,q=R.hx+Math.cos(X)*620,k=R.hy+Math.sin(X)*620;if(q<300||k<300||q>he.w-300||k>he.h-300||ne(q,k,n.world.shop.x,n.world.shop.y)<Mt||!n.world.onLand(q,k)||n.world.lakeAt(q,k))continue;let B=dt.SIGNAL_COST,Y=Math.min(B,c.scrap);c.scrap-=Y,B-=Y,B>0&&v&&(v.scrap-=B),Ld(n,q,k),a.sigCd=n.t+n.rng.rand(150,240),We(n,R.hx,R.hy-40,"supply signal!","#c9a0ff");break}}}}for(let o of n.teams)o.eliminated||ru(n,o,e);let s=0,r=null;for(let o of n.teams){if(o.eliminated)continue;let a=0;for(let l of n.units)l.owner===o.owner&&(a+=l.kills);a>s&&(s=a,r=o.id)}if(n.bounty=s>0?r:null,!n.metrics.winner){let o=n.teams.filter(a=>!a.eliminated);o.length===1&&n.teams.length>1&&(n.metrics.winner=o[0].owner,n.metrics.decisiveT=n.t)}}function Tu(n){let e=Tr;n.t+=e,n.tick++,n.clouds||Gc(n),n.needFenceRefresh&&(n.needFenceRefresh=!1,Jf(n)),zd(n,e),yd(n,e),jd(n,e),Qd(n,e),_d(n,e),ld(n,e),Pd(n,e),Fd(n,e),Rd(n,e),Cd(n,e),Id(n,e),Ud(n,e),Nd(n,e),Sd(n,e),kd(n,e),md(n,e),bd(n,e),gd(n,e),xd(n,e),ug(n,e),pg(n,e),n.raidAlarm&&(n.raidAlarm.t-=e,n.raidAlarm.t<=0&&(n.raidAlarm=null)),wu(n,e),Ad(n,e);for(let t of n.units)du(n,t,e);for(let t=n.elims.length-1;t>=0;t--)n.elims[t].t-=e,n.elims[t].t<=0&&n.elims.splice(t,1);dd(n,e),Md(n,e),Od(n,e);for(let t=n.particles.length-1;t>=0;t--){let i=n.particles[t],s=Math.pow(.9,e*60);i.vx*=s,i.vy*=s,i.x+=i.vx*e,i.y+=i.vy*e,i.life-=e,i.life<=0&&n.particles.splice(t,1)}for(let t=n.floats.length-1;t>=0;t--){let i=n.floats[t];i.y+=i.vy*e,i.life-=e,i.life<=0&&n.floats.splice(t,1)}for(let t=n.flashes.length-1;t>=0;t--)n.flashes[t].life-=e,n.flashes[t].life<=0&&n.flashes.splice(t,1);for(let t=n.blasts.length-1;t>=0;t--)n.blasts[t].life-=e,n.blasts[t].life<=0&&n.blasts.splice(t,1);n.muzzle&&(n.muzzle.t-=e,n.muzzle.t<=0&&(n.muzzle=null)),n.shake=Math.max(0,n.shake-26*e),n.tip&&(n.tip.t-=e,n.tip.t<=0&&(n.tip=null)),n.events.length>600&&n.events.splice(0,n.events.length-600),n.tick%120===0&&gg(n)}function ug(n,e){for(let t=n.fences.length-1;t>=0;t--){let i=n.fences[t];i.t-=e,i.t<=0&&(n.fences.splice(t,1),n.needFenceRefresh=!0)}}function pg(n,e){for(let t=n.raids.length-1;t>=0;t--)n.raids[t].t-=e,n.raids[t].t<=0&&n.raids.splice(t,1)}function mg(n,e){let t=Math.floor(e.x/64),i=Math.floor(e.y/64);for(let s of["V,"+t+","+i,"V,"+(t+1)+","+i,"H,"+t+","+i,"H,"+t+","+(i+1)]){let r=n.walls.get(s);if(!r||r.hp<=0||r.type==="door"&&r.open||r.owner===e.owner)continue;let o=Lt(s,r);if(wt(e.x,e.y,o[0],o[1],o[2],o[3])<3)return!0}return!1}function gg(n){let e=n.metrics;for(let t of n.units)if(!(t.dead||t.eliminated)&&((!isFinite(t.x)||!isFinite(t.y))&&(e.nan=(e.nan||0)+1,t.x=t.hx,t.y=t.hy),mg(n,t)&&e.wallPhase++,t.stuckT>1.5&&t.state!=="raid")){let i=n.world.lakeAt(t.x,t.y),s="open";if(Math.abs(t.x-t.hx)<460&&Math.abs(t.y-t.hy)<460)s="base";else if(i)s="lake";else for(let r of n.world.monuments)if((t.x-r.x)**2+(t.y-r.y)**2<(r.r+220)**2){s="monument";break}e.regionStuck[s]+=2}if((!isFinite(n.player.x)||!isFinite(n.player.y))&&(e.nan=(e.nan||0)+1,n.player.x=6912,n.player.y=4868),n.t-(e._wlT||0)>=60){e._wlT=n.t;let t={t:Math.round(n.t)};for(let i of n.teams)t[i.owner]=n.units.filter(s=>s.owner===i.owner&&!s.eliminated).length;e.workerLog.push(t)}}var Qu=0,Uh=1,ep=2;var To=1,tp=2,gr=3,Di=0,gn=1,Cn=2,gi=0,es=1,On=2,kh=3,Fh=4,np=5;var ts=100,ip=101,sp=102,rp=103,op=104,ap=200,lp=201,cp=202,hp=203,ka=204,Fa=205,fp=206,dp=207,up=208,pp=209,mp=210,gp=211,xp=212,yp=213,_p=214,Oa=0,Ba=1,za=2,Es=3,Ha=4,Va=5,Ga=6,Wa=7,xl=0,vp=1,Mp=2,ei=0,Oh=1,Bh=2,zh=3,Hh=4,Vh=5,Gh=6,Wh=7;var Xh=300,as=301,Ps=302,yl=303,_l=304,Eo=306,Li=1e3,li=1001,Xa=1002,un=1003,bp=1004;var Ao=1005;var mn=1006,vl=1007;var xi=1008;var Sn=1009,qh=1010,Yh=1011,xr=1012,Ml=1013,ti=1014,qn=1015,yi=1016,bl=1017,wl=1018,yr=1020,Zh=35902,$h=35899,Kh=1021,Jh=1022,Yn=1023,ci=1026,ls=1027,Tl=1028,El=1029,cs=1030,Al=1031;var Rl=1033,Ro=33776,Co=33777,So=33778,Po=33779,Cl=35840,Sl=35841,Pl=35842,Il=35843,Dl=36196,Ll=37492,Nl=37496,Ul=37488,kl=37489,Io=37490,Fl=37491,Ol=37808,Bl=37809,zl=37810,Hl=37811,Vl=37812,Gl=37813,Wl=37814,Xl=37815,ql=37816,Yl=37817,Zl=37818,$l=37819,Kl=37820,Jl=37821,jl=36492,Ql=36494,ec=36495,tc=36283,nc=36284,Do=36285,ic=36286;var eo=2300,qa=2301,Ua=2302,Th=2303,Eh=2400,Ah=2401,Rh=2402;var wp=3200;var sc=0,Tp=1,Oi="",sn="srgb",to="srgb-linear",no="linear",At="srgb";var Ts=7680;var Ch=519,Ep=512,Ap=513,Rp=514,rc=515,Cp=516,Sp=517,oc=518,Pp=519,Ya=35044;var jh="300 es",Qn=2e3,lr=2001;function xg(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function yg(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function io(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Ip(){let n=io("canvas");return n.style.display="block",n}var Eu={},cr=null;function so(...n){let e="THREE."+n.shift();cr?cr("log",e,...n):console.log(e,...n)}function Dp(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function $e(...n){n=Dp(n);let e="THREE."+n.shift();if(cr)cr("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Ze(...n){n=Dp(n);let e="THREE."+n.shift();if(cr)cr("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Za(...n){let e=n.join(" ");e in Eu||(Eu[e]=!0,$e(...n))}function Lp(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var Np={[Oa]:Ba,[za]:Ga,[Ha]:Wa,[Es]:Va,[Ba]:Oa,[Ga]:za,[Wa]:Ha,[Va]:Es},hi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},_n=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Qc=Math.PI/180,$a=180/Math.PI;function Qi(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(_n[n&255]+_n[n>>8&255]+_n[n>>16&255]+_n[n>>24&255]+"-"+_n[e&255]+_n[e>>8&255]+"-"+_n[e>>16&15|64]+_n[e>>24&255]+"-"+_n[t&63|128]+_n[t>>8&255]+"-"+_n[t>>16&255]+_n[t>>24&255]+_n[i&255]+_n[i>>8&255]+_n[i>>16&255]+_n[i>>24&255]).toLowerCase()}function pt(n,e,t){return Math.max(e,Math.min(t,n))}function _g(n,e){return(n%e+e)%e}function eh(n,e,t){return(1-t)*n+t*e}function ai(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Pt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Je=class n{static{n.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(pt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(pt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},fi=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],f=i[s+2],h=i[s+3],d=r[o+0],u=r[o+1],p=r[o+2],x=r[o+3];if(h!==x||l!==d||c!==u||f!==p){let m=l*d+c*u+f*p+h*x;m<0&&(d=-d,u=-u,p=-p,x=-x,m=-m);let g=1-a;if(m<.9995){let y=Math.acos(m),M=Math.sin(y);g=Math.sin(g*y)/M,a=Math.sin(a*y)/M,l=l*g+d*a,c=c*g+u*a,f=f*g+p*a,h=h*g+x*a}else{l=l*g+d*a,c=c*g+u*a,f=f*g+p*a,h=h*g+x*a;let y=1/Math.sqrt(l*l+c*c+f*f+h*h);l*=y,c*=y,f*=y,h*=y}}e[t]=l,e[t+1]=c,e[t+2]=f,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],f=i[s+3],h=r[o],d=r[o+1],u=r[o+2],p=r[o+3];return e[t]=a*p+f*h+l*u-c*d,e[t+1]=l*p+f*d+c*h-a*u,e[t+2]=c*p+f*u+a*d-l*h,e[t+3]=f*p-a*h-l*d-c*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),f=a(s/2),h=a(r/2),d=l(i/2),u=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=d*f*h+c*u*p,this._y=c*u*h-d*f*p,this._z=c*f*p+d*u*h,this._w=c*f*h-d*u*p;break;case"YXZ":this._x=d*f*h+c*u*p,this._y=c*u*h-d*f*p,this._z=c*f*p-d*u*h,this._w=c*f*h+d*u*p;break;case"ZXY":this._x=d*f*h-c*u*p,this._y=c*u*h+d*f*p,this._z=c*f*p+d*u*h,this._w=c*f*h-d*u*p;break;case"ZYX":this._x=d*f*h-c*u*p,this._y=c*u*h+d*f*p,this._z=c*f*p-d*u*h,this._w=c*f*h+d*u*p;break;case"YZX":this._x=d*f*h+c*u*p,this._y=c*u*h+d*f*p,this._z=c*f*p-d*u*h,this._w=c*f*h-d*u*p;break;case"XZY":this._x=d*f*h-c*u*p,this._y=c*u*h-d*f*p,this._z=c*f*p+d*u*h,this._w=c*f*h+d*u*p;break;default:$e("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],f=t[6],h=t[10],d=i+a+h;if(d>0){let u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(f-l)*u,this._y=(r-c)*u,this._z=(o-s)*u}else if(i>a&&i>h){let u=2*Math.sqrt(1+i-a-h);this._w=(f-l)/u,this._x=.25*u,this._y=(s+o)/u,this._z=(r+c)/u}else if(a>h){let u=2*Math.sqrt(1+a-i-h);this._w=(r-c)/u,this._x=(s+o)/u,this._y=.25*u,this._z=(l+f)/u}else{let u=2*Math.sqrt(1+h-i-a);this._w=(o-s)/u,this._x=(r+c)/u,this._y=(l+f)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,f=t._w;return this._x=i*f+o*a+s*c-r*l,this._y=s*f+o*l+r*a-i*c,this._z=r*f+o*c+i*l-s*a,this._w=o*f-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),f=Math.sin(c);l=Math.sin(l*c)/f,t=Math.sin(t*c)/f,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},V=class n{static{n.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Au.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Au.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),f=2*(a*t-r*s),h=2*(r*i-o*t);return this.x=t+l*c+o*h-a*f,this.y=i+l*f+a*c-r*h,this.z=s+l*h+r*f-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this.z=pt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this.z=pt(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(pt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return th.copy(this).projectOnVector(e),this.sub(th)}reflect(e){return this.sub(th.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(pt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},th=new V,Au=new fi,it=class n{static{n.prototype.isMatrix3=!0}constructor(e,t,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let f=this.elements;return f[0]=e,f[1]=s,f[2]=a,f[3]=t,f[4]=r,f[5]=l,f[6]=i,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],f=i[4],h=i[7],d=i[2],u=i[5],p=i[8],x=s[0],m=s[3],g=s[6],y=s[1],M=s[4],w=s[7],C=s[2],T=s[5],D=s[8];return r[0]=o*x+a*y+l*C,r[3]=o*m+a*M+l*T,r[6]=o*g+a*w+l*D,r[1]=c*x+f*y+h*C,r[4]=c*m+f*M+h*T,r[7]=c*g+f*w+h*D,r[2]=d*x+u*y+p*C,r[5]=d*m+u*M+p*T,r[8]=d*g+u*w+p*D,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8];return t*o*f-t*a*c-i*r*f+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],h=f*o-a*c,d=a*l-f*r,u=c*r-o*l,p=t*h+i*d+s*u;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return e[0]=h*x,e[1]=(s*c-f*i)*x,e[2]=(a*i-s*o)*x,e[3]=d*x,e[4]=(f*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=u*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(nh.makeScale(e,t)),this}rotate(e){return this.premultiply(nh.makeRotation(-e)),this}translate(e,t){return this.premultiply(nh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},nh=new it,Ru=new it().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Cu=new it().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function vg(){let n={enabled:!0,workingColorSpace:to,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===At&&(s.r=Ii(s.r),s.g=Ii(s.g),s.b=Ii(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===At&&(s.r=ar(s.r),s.g=ar(s.g),s.b=ar(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Oi?no:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Za("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Za("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[to]:{primaries:e,whitePoint:i,transfer:no,toXYZ:Ru,fromXYZ:Cu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:sn},outputColorSpaceConfig:{drawingBufferColorSpace:sn}},[sn]:{primaries:e,whitePoint:i,transfer:At,toXYZ:Ru,fromXYZ:Cu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:sn}}}),n}var ut=vg();function Ii(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ar(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Ws,Ka=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ws===void 0&&(Ws=io("canvas")),Ws.width=e.width,Ws.height=e.height;let s=Ws.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Ws}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=io("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ii(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ii(t[i]/255)*255):t[i]=Ii(t[i]);return{data:t,width:e.width,height:e.height}}else return $e("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Mg=0,hr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Mg++}),this.uuid=Qi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ih(s[o].image)):r.push(ih(s[o]))}else r=ih(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function ih(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ka.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:($e("Texture: Unable to serialize Texture."),{})}var bg=0,sh=new V,En=class n extends hi{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=li,s=li,r=mn,o=xi,a=Yn,l=Sn,c=n.DEFAULT_ANISOTROPY,f=Oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bg++}),this.uuid=Qi(),this.name="",this.source=new hr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new it,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(sh).x}get height(){return this.source.getSize(sh).y}get depth(){return this.source.getSize(sh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){$e(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){$e(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Li:e.x=e.x-Math.floor(e.x);break;case li:e.x=e.x<0?0:1;break;case Xa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Li:e.y=e.y-Math.floor(e.y);break;case li:e.y=e.y<0?0:1;break;case Xa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};En.DEFAULT_IMAGE=null;En.DEFAULT_MAPPING=Xh;En.DEFAULT_ANISOTROPY=1;var Xt=class n{static{n.prototype.isVector4=!0}constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],f=l[4],h=l[8],d=l[1],u=l[5],p=l[9],x=l[2],m=l[6],g=l[10];if(Math.abs(f-d)<.01&&Math.abs(h-x)<.01&&Math.abs(p-m)<.01){if(Math.abs(f+d)<.1&&Math.abs(h+x)<.1&&Math.abs(p+m)<.1&&Math.abs(c+u+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(c+1)/2,w=(u+1)/2,C=(g+1)/2,T=(f+d)/4,D=(h+x)/4,_=(p+m)/4;return M>w&&M>C?M<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(M),s=T/i,r=D/i):w>C?w<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),i=T/s,r=_/s):C<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),i=D/r,s=_/r),this.set(i,s,r,t),this}let y=Math.sqrt((m-p)*(m-p)+(h-x)*(h-x)+(d-f)*(d-f));return Math.abs(y)<.001&&(y=1),this.x=(m-p)/y,this.y=(h-x)/y,this.z=(d-f)/y,this.w=Math.acos((c+u+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this.z=pt(this.z,e.z,t.z),this.w=pt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this.z=pt(this.z,e,t),this.w=pt(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(pt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ja=class extends hi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Xt(0,0,e,t),this.scissorTest=!1,this.viewport=new Xt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:i.depth},r=new En(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:mn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new hr(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}},Un=class extends Ja{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},ro=class extends En{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=un,this.minFilter=un,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ja=class extends En{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=un,this.minFilter=un,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var mt=class n{static{n.prototype.isMatrix4=!0}constructor(e,t,i,s,r,o,a,l,c,f,h,d,u,p,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,f,h,d,u,p,x,m)}set(e,t,i,s,r,o,a,l,c,f,h,d,u,p,x,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=f,g[10]=h,g[14]=d,g[3]=u,g[7]=p,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();let t=this.elements,i=e.elements,s=1/Xs.setFromMatrixColumn(e,0).length(),r=1/Xs.setFromMatrixColumn(e,1).length(),o=1/Xs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),f=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let d=o*f,u=o*h,p=a*f,x=a*h;t[0]=l*f,t[4]=-l*h,t[8]=c,t[1]=u+p*c,t[5]=d-x*c,t[9]=-a*l,t[2]=x-d*c,t[6]=p+u*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*f,u=l*h,p=c*f,x=c*h;t[0]=d+x*a,t[4]=p*a-u,t[8]=o*c,t[1]=o*h,t[5]=o*f,t[9]=-a,t[2]=u*a-p,t[6]=x+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*f,u=l*h,p=c*f,x=c*h;t[0]=d-x*a,t[4]=-o*h,t[8]=p+u*a,t[1]=u+p*a,t[5]=o*f,t[9]=x-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*f,u=o*h,p=a*f,x=a*h;t[0]=l*f,t[4]=p*c-u,t[8]=d*c+x,t[1]=l*h,t[5]=x*c+d,t[9]=u*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,u=o*c,p=a*l,x=a*c;t[0]=l*f,t[4]=x-d*h,t[8]=p*h+u,t[1]=h,t[5]=o*f,t[9]=-a*f,t[2]=-c*f,t[6]=u*h+p,t[10]=d-x*h}else if(e.order==="XZY"){let d=o*l,u=o*c,p=a*l,x=a*c;t[0]=l*f,t[4]=-h,t[8]=c*f,t[1]=d*h+x,t[5]=o*f,t[9]=u*h-p,t[2]=p*h-u,t[6]=a*f,t[10]=x*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wg,e,Tg)}lookAt(e,t,i){let s=this.elements;return Ln.subVectors(e,t),Ln.lengthSq()===0&&(Ln.z=1),Ln.normalize(),Yi.crossVectors(i,Ln),Yi.lengthSq()===0&&(Math.abs(i.z)===1?Ln.x+=1e-4:Ln.z+=1e-4,Ln.normalize(),Yi.crossVectors(i,Ln)),Yi.normalize(),ca.crossVectors(Ln,Yi),s[0]=Yi.x,s[4]=ca.x,s[8]=Ln.x,s[1]=Yi.y,s[5]=ca.y,s[9]=Ln.y,s[2]=Yi.z,s[6]=ca.z,s[10]=Ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],f=i[1],h=i[5],d=i[9],u=i[13],p=i[2],x=i[6],m=i[10],g=i[14],y=i[3],M=i[7],w=i[11],C=i[15],T=s[0],D=s[4],_=s[8],v=s[12],P=s[1],R=s[5],N=s[9],X=s[13],q=s[2],k=s[6],B=s[10],Y=s[14],le=s[3],fe=s[7],_e=s[11],Ce=s[15];return r[0]=o*T+a*P+l*q+c*le,r[4]=o*D+a*R+l*k+c*fe,r[8]=o*_+a*N+l*B+c*_e,r[12]=o*v+a*X+l*Y+c*Ce,r[1]=f*T+h*P+d*q+u*le,r[5]=f*D+h*R+d*k+u*fe,r[9]=f*_+h*N+d*B+u*_e,r[13]=f*v+h*X+d*Y+u*Ce,r[2]=p*T+x*P+m*q+g*le,r[6]=p*D+x*R+m*k+g*fe,r[10]=p*_+x*N+m*B+g*_e,r[14]=p*v+x*X+m*Y+g*Ce,r[3]=y*T+M*P+w*q+C*le,r[7]=y*D+M*R+w*k+C*fe,r[11]=y*_+M*N+w*B+C*_e,r[15]=y*v+M*X+w*Y+C*Ce,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],f=e[2],h=e[6],d=e[10],u=e[14],p=e[3],x=e[7],m=e[11],g=e[15],y=l*u-c*d,M=a*u-c*h,w=a*d-l*h,C=o*u-c*f,T=o*d-l*f,D=o*h-a*f;return t*(x*y-m*M+g*w)-i*(p*y-m*C+g*T)+s*(p*M-x*C+g*D)-r*(p*w-x*T+m*D)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],h=e[9],d=e[10],u=e[11],p=e[12],x=e[13],m=e[14],g=e[15],y=t*a-i*o,M=t*l-s*o,w=t*c-r*o,C=i*l-s*a,T=i*c-r*a,D=s*c-r*l,_=f*x-h*p,v=f*m-d*p,P=f*g-u*p,R=h*m-d*x,N=h*g-u*x,X=d*g-u*m,q=y*X-M*N+w*R+C*P-T*v+D*_;if(q===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/q;return e[0]=(a*X-l*N+c*R)*k,e[1]=(s*N-i*X-r*R)*k,e[2]=(x*D-m*T+g*C)*k,e[3]=(d*T-h*D-u*C)*k,e[4]=(l*P-o*X-c*v)*k,e[5]=(t*X-s*P+r*v)*k,e[6]=(m*w-p*D-g*M)*k,e[7]=(f*D-d*w+u*M)*k,e[8]=(o*N-a*P+c*_)*k,e[9]=(i*P-t*N-r*_)*k,e[10]=(p*T-x*w+g*y)*k,e[11]=(h*w-f*T-u*y)*k,e[12]=(a*v-o*R-l*_)*k,e[13]=(t*R-i*v+s*_)*k,e[14]=(x*M-p*C-m*y)*k,e[15]=(f*C-h*M+d*y)*k,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,f=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,f*a+i,f*l-s*o,0,c*l-s*a,f*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,f=o+o,h=a+a,d=r*c,u=r*f,p=r*h,x=o*f,m=o*h,g=a*h,y=l*c,M=l*f,w=l*h,C=i.x,T=i.y,D=i.z;return s[0]=(1-(x+g))*C,s[1]=(u+w)*C,s[2]=(p-M)*C,s[3]=0,s[4]=(u-w)*T,s[5]=(1-(d+g))*T,s[6]=(m+y)*T,s[7]=0,s[8]=(p+M)*D,s[9]=(m-y)*D,s[10]=(1-(d+x))*D,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinant();if(r===0)return i.set(1,1,1),t.identity(),this;let o=Xs.set(s[0],s[1],s[2]).length(),a=Xs.set(s[4],s[5],s[6]).length(),l=Xs.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Kn.copy(this);let c=1/o,f=1/a,h=1/l;return Kn.elements[0]*=c,Kn.elements[1]*=c,Kn.elements[2]*=c,Kn.elements[4]*=f,Kn.elements[5]*=f,Kn.elements[6]*=f,Kn.elements[8]*=h,Kn.elements[9]*=h,Kn.elements[10]*=h,t.setFromRotationMatrix(Kn),i.x=o,i.y=a,i.z=l,this}makePerspective(e,t,i,s,r,o,a=Qn,l=!1){let c=this.elements,f=2*r/(t-e),h=2*r/(i-s),d=(t+e)/(t-e),u=(i+s)/(i-s),p,x;if(l)p=r/(o-r),x=o*r/(o-r);else if(a===Qn)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===lr)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=f,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Qn,l=!1){let c=this.elements,f=2/(t-e),h=2/(i-s),d=-(t+e)/(t-e),u=-(i+s)/(i-s),p,x;if(l)p=1/(o-r),x=o/(o-r);else if(a===Qn)p=-2/(o-r),x=-(o+r)/(o-r);else if(a===lr)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=f,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=u,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Xs=new V,Kn=new mt,wg=new V(0,0,0),Tg=new V(1,1,1),Yi=new V,ca=new V,Ln=new V,Su=new mt,Pu=new fi,Ni=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],f=s[9],h=s[2],d=s[6],u=s[10];switch(t){case"XYZ":this._y=Math.asin(pt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,u),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-pt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(pt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,u),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-pt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(pt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-f,u),this._y=0);break;default:$e("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Su.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Su,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Pu.setFromEuler(this),this.setFromQuaternion(Pu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ni.DEFAULT_ORDER="XYZ";var fr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Eg=0,Iu=new V,qs=new fi,Ei=new mt,ha=new V,Xr=new V,Ag=new V,Rg=new fi,Du=new V(1,0,0),Lu=new V(0,1,0),Nu=new V(0,0,1),Uu={type:"added"},Cg={type:"removed"},Ys={type:"childadded",child:null},rh={type:"childremoved",child:null},rn=class n extends hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Eg++}),this.uuid=Qi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new V,t=new Ni,i=new fi,s=new V(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new mt},normalMatrix:{value:new it}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return qs.setFromAxisAngle(e,t),this.quaternion.multiply(qs),this}rotateOnWorldAxis(e,t){return qs.setFromAxisAngle(e,t),this.quaternion.premultiply(qs),this}rotateX(e){return this.rotateOnAxis(Du,e)}rotateY(e){return this.rotateOnAxis(Lu,e)}rotateZ(e){return this.rotateOnAxis(Nu,e)}translateOnAxis(e,t){return Iu.copy(e).applyQuaternion(this.quaternion),this.position.add(Iu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Du,e)}translateY(e){return this.translateOnAxis(Lu,e)}translateZ(e){return this.translateOnAxis(Nu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ei.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ha.copy(e):ha.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Xr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ei.lookAt(Xr,ha,this.up):Ei.lookAt(ha,Xr,this.up),this.quaternion.setFromRotationMatrix(Ei),s&&(Ei.extractRotation(s.matrixWorld),qs.setFromRotationMatrix(Ei),this.quaternion.premultiply(qs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ze("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Uu),Ys.child=e,this.dispatchEvent(Ys),Ys.child=null):Ze("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Cg),rh.child=e,this.dispatchEvent(rh),rh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ei),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Uu),Ys.child=e,this.dispatchEvent(Ys),Ys.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xr,e,Ag),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xr,Rg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),f=o(e.images),h=o(e.shapes),d=o(e.skeletons),u=o(e.animations),p=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),u.length>0&&(i.animations=u),p.length>0&&(i.nodes=p)}return i.object=s,i;function o(a){let l=[];for(let c in a){let f=a[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};rn.DEFAULT_UP=new V(0,1,0);rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ke=class extends rn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Sg={type:"move"},dr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ke,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ke,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ke,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,i),g=this._getHandJoint(c,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let f=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=f.position.distanceTo(h.position),u=.02,p=.005;c.inputState.pinching&&d>u+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=u-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Sg)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Ke;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Up={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zi={h:0,s:0,l:0},fa={h:0,s:0,l:0};function oh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var je=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=sn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=ut.workingColorSpace){return this.r=e,this.g=t,this.b=i,ut.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=ut.workingColorSpace){if(e=_g(e,1),t=pt(t,0,1),i=pt(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=oh(o,r,e+1/3),this.g=oh(o,r,e),this.b=oh(o,r,e-1/3)}return ut.colorSpaceToWorking(this,s),this}setStyle(e,t=sn){function i(r){r!==void 0&&parseFloat(r)<1&&$e("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:$e("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);$e("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=sn){let i=Up[e.toLowerCase()];return i!==void 0?this.setHex(i,t):$e("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ii(e.r),this.g=Ii(e.g),this.b=Ii(e.b),this}copyLinearToSRGB(e){return this.r=ar(e.r),this.g=ar(e.g),this.b=ar(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=sn){return ut.workingToColorSpace(vn.copy(this),e),Math.round(pt(vn.r*255,0,255))*65536+Math.round(pt(vn.g*255,0,255))*256+Math.round(pt(vn.b*255,0,255))}getHexString(e=sn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ut.workingColorSpace){ut.workingToColorSpace(vn.copy(this),t);let i=vn.r,s=vn.g,r=vn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,f=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=f<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,t=ut.workingColorSpace){return ut.workingToColorSpace(vn.copy(this),t),e.r=vn.r,e.g=vn.g,e.b=vn.b,e}getStyle(e=sn){ut.workingToColorSpace(vn.copy(this),e);let t=vn.r,i=vn.g,s=vn.b;return e!==sn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Zi),this.setHSL(Zi.h+e,Zi.s+t,Zi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Zi),e.getHSL(fa);let i=eh(Zi.h,fa.h,t),s=eh(Zi.s,fa.s,t),r=eh(Zi.l,fa.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},vn=new je;je.NAMES=Up;var oo=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new je(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ao=class extends rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ni,this.environmentIntensity=1,this.environmentRotation=new Ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Jn=new V,Ai=new V,ah=new V,Ri=new V,Zs=new V,$s=new V,ku=new V,lh=new V,ch=new V,hh=new V,fh=new Xt,dh=new Xt,uh=new Xt,Pi=class n{constructor(e=new V,t=new V,i=new V){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Jn.subVectors(e,t),s.cross(Jn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Jn.subVectors(s,t),Ai.subVectors(i,t),ah.subVectors(e,t);let o=Jn.dot(Jn),a=Jn.dot(Ai),l=Jn.dot(ah),c=Ai.dot(Ai),f=Ai.dot(ah),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let d=1/h,u=(c*l-a*f)*d,p=(o*f-a*l)*d;return r.set(1-u-p,p,u)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Ri)===null?!1:Ri.x>=0&&Ri.y>=0&&Ri.x+Ri.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ri.x),l.addScaledVector(o,Ri.y),l.addScaledVector(a,Ri.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return fh.setScalar(0),dh.setScalar(0),uh.setScalar(0),fh.fromBufferAttribute(e,t),dh.fromBufferAttribute(e,i),uh.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(fh,r.x),o.addScaledVector(dh,r.y),o.addScaledVector(uh,r.z),o}static isFrontFacing(e,t,i,s){return Jn.subVectors(i,t),Ai.subVectors(e,t),Jn.cross(Ai).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jn.subVectors(this.c,this.b),Ai.subVectors(this.a,this.b),Jn.cross(Ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;Zs.subVectors(s,i),$s.subVectors(r,i),lh.subVectors(e,i);let l=Zs.dot(lh),c=$s.dot(lh);if(l<=0&&c<=0)return t.copy(i);ch.subVectors(e,s);let f=Zs.dot(ch),h=$s.dot(ch);if(f>=0&&h<=f)return t.copy(s);let d=l*h-f*c;if(d<=0&&l>=0&&f<=0)return o=l/(l-f),t.copy(i).addScaledVector(Zs,o);hh.subVectors(e,r);let u=Zs.dot(hh),p=$s.dot(hh);if(p>=0&&u<=p)return t.copy(r);let x=u*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(i).addScaledVector($s,a);let m=f*p-u*h;if(m<=0&&h-f>=0&&u-p>=0)return ku.subVectors(r,s),a=(h-f)/(h-f+(u-p)),t.copy(s).addScaledVector(ku,a);let g=1/(m+x+d);return o=x*g,a=d*g,t.copy(i).addScaledVector(Zs,o).addScaledVector($s,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},di=class{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(jn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(jn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=jn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,jn):jn.fromBufferAttribute(r,o),jn.applyMatrix4(e.matrixWorld),this.expandByPoint(jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),da.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),da.copy(i.boundingBox)),da.applyMatrix4(e.matrixWorld),this.union(da)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,jn),jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qr),ua.subVectors(this.max,qr),Ks.subVectors(e.a,qr),Js.subVectors(e.b,qr),js.subVectors(e.c,qr),$i.subVectors(Js,Ks),Ki.subVectors(js,Js),vs.subVectors(Ks,js);let t=[0,-$i.z,$i.y,0,-Ki.z,Ki.y,0,-vs.z,vs.y,$i.z,0,-$i.x,Ki.z,0,-Ki.x,vs.z,0,-vs.x,-$i.y,$i.x,0,-Ki.y,Ki.x,0,-vs.y,vs.x,0];return!ph(t,Ks,Js,js,ua)||(t=[1,0,0,0,1,0,0,0,1],!ph(t,Ks,Js,js,ua))?!1:(pa.crossVectors($i,Ki),t=[pa.x,pa.y,pa.z],ph(t,Ks,Js,js,ua))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ci=[new V,new V,new V,new V,new V,new V,new V,new V],jn=new V,da=new di,Ks=new V,Js=new V,js=new V,$i=new V,Ki=new V,vs=new V,qr=new V,ua=new V,pa=new V,Ms=new V;function ph(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ms.fromArray(n,r);let a=s.x*Math.abs(Ms.x)+s.y*Math.abs(Ms.y)+s.z*Math.abs(Ms.z),l=e.dot(Ms),c=t.dot(Ms),f=i.dot(Ms);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}var nn=new V,ma=new Je,Pg=0,Jt=class extends hi{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Pg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ya,this.updateRanges=[],this.gpuType=qn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ma.fromBufferAttribute(this,t),ma.applyMatrix3(e),this.setXY(t,ma.x,ma.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix3(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix4(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)nn.fromBufferAttribute(this,t),nn.applyNormalMatrix(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)nn.fromBufferAttribute(this,t),nn.transformDirection(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ai(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Pt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ai(t,this.array)),t}setX(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ai(t,this.array)),t}setY(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ai(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ai(t,this.array)),t}setW(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),i=Pt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),i=Pt(i,this.array),s=Pt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),i=Pt(i,this.array),s=Pt(s,this.array),r=Pt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ya&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}};var lo=class extends Jt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var co=class extends Jt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Nt=class extends Jt{constructor(e,t,i){super(new Float32Array(e),t,i)}},Ig=new di,Yr=new V,mh=new V,Ui=class{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Ig.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Yr.subVectors(e,this.center);let t=Yr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Yr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(mh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Yr.copy(e.center).add(mh)),this.expandByPoint(Yr.copy(e.center).sub(mh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Dg=0,Vn=new mt,gh=new rn,Qs=new V,Nn=new di,Zr=new di,dn=new V,qt=class n extends hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dg++}),this.uuid=Qi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(xg(e)?co:lo)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new it().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Vn.makeRotationFromQuaternion(e),this.applyMatrix4(Vn),this}rotateX(e){return Vn.makeRotationX(e),this.applyMatrix4(Vn),this}rotateY(e){return Vn.makeRotationY(e),this.applyMatrix4(Vn),this}rotateZ(e){return Vn.makeRotationZ(e),this.applyMatrix4(Vn),this}translate(e,t,i){return Vn.makeTranslation(e,t,i),this.applyMatrix4(Vn),this}scale(e,t,i){return Vn.makeScale(e,t,i),this.applyMatrix4(Vn),this}lookAt(e){return gh.lookAt(e),gh.updateMatrix(),this.applyMatrix4(gh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qs).negate(),this.translate(Qs.x,Qs.y,Qs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Nt(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&$e("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new di);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Nn.setFromBufferAttribute(r),this.morphTargetsRelative?(dn.addVectors(this.boundingBox.min,Nn.min),this.boundingBox.expandByPoint(dn),dn.addVectors(this.boundingBox.max,Nn.max),this.boundingBox.expandByPoint(dn)):(this.boundingBox.expandByPoint(Nn.min),this.boundingBox.expandByPoint(Nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ui);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){let i=this.boundingSphere.center;if(Nn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Zr.setFromBufferAttribute(a),this.morphTargetsRelative?(dn.addVectors(Nn.min,Zr.min),Nn.expandByPoint(dn),dn.addVectors(Nn.max,Zr.max),Nn.expandByPoint(dn)):(Nn.expandByPoint(Zr.min),Nn.expandByPoint(Zr.max))}Nn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)dn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(dn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)dn.fromBufferAttribute(a,c),l&&(Qs.fromBufferAttribute(e,c),dn.add(Qs)),s=Math.max(s,i.distanceToSquared(dn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Jt(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let _=0;_<i.count;_++)a[_]=new V,l[_]=new V;let c=new V,f=new V,h=new V,d=new Je,u=new Je,p=new Je,x=new V,m=new V;function g(_,v,P){c.fromBufferAttribute(i,_),f.fromBufferAttribute(i,v),h.fromBufferAttribute(i,P),d.fromBufferAttribute(r,_),u.fromBufferAttribute(r,v),p.fromBufferAttribute(r,P),f.sub(c),h.sub(c),u.sub(d),p.sub(d);let R=1/(u.x*p.y-p.x*u.y);isFinite(R)&&(x.copy(f).multiplyScalar(p.y).addScaledVector(h,-u.y).multiplyScalar(R),m.copy(h).multiplyScalar(u.x).addScaledVector(f,-p.x).multiplyScalar(R),a[_].add(x),a[v].add(x),a[P].add(x),l[_].add(m),l[v].add(m),l[P].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let _=0,v=y.length;_<v;++_){let P=y[_],R=P.start,N=P.count;for(let X=R,q=R+N;X<q;X+=3)g(e.getX(X+0),e.getX(X+1),e.getX(X+2))}let M=new V,w=new V,C=new V,T=new V;function D(_){C.fromBufferAttribute(s,_),T.copy(C);let v=a[_];M.copy(v),M.sub(C.multiplyScalar(C.dot(v))).normalize(),w.crossVectors(T,v);let R=w.dot(l[_])<0?-1:1;o.setXYZW(_,M.x,M.y,M.z,R)}for(let _=0,v=y.length;_<v;++_){let P=y[_],R=P.start,N=P.count;for(let X=R,q=R+N;X<q;X+=3)D(e.getX(X+0)),D(e.getX(X+1)),D(e.getX(X+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Jt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,u=i.count;d<u;d++)i.setXYZ(d,0,0,0);let s=new V,r=new V,o=new V,a=new V,l=new V,c=new V,f=new V,h=new V;if(e)for(let d=0,u=e.count;d<u;d+=3){let p=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),f.subVectors(o,r),h.subVectors(s,r),f.cross(h),a.fromBufferAttribute(i,p),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(f),l.add(f),c.add(f),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,u=t.count;d<u;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),f.subVectors(o,r),h.subVectors(s,r),f.cross(h),i.setXYZ(d+0,f.x,f.y,f.z),i.setXYZ(d+1,f.x,f.y,f.z),i.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)dn.fromBufferAttribute(e,t),dn.normalize(),e.setXYZ(t,dn.x,dn.y,dn.z)}toNonIndexed(){function e(a,l){let c=a.array,f=a.itemSize,h=a.normalized,d=new c.constructor(l.length*f),u=0,p=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?u=l[x]*a.data.stride+a.offset:u=l[x]*f;for(let g=0;g<f;g++)d[p++]=c[u++]}return new Jt(d,f,h)}if(this.index===null)return $e("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let f=0,h=c.length;f<h;f++){let d=c[f],u=e(d,i);l.push(u)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],f=[];for(let h=0,d=c.length;h<d;h++){let u=c[h];f.push(u.toJSON(e.data))}f.length>0&&(s[l]=f,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let f=s[c];this.setAttribute(c,f.clone(t))}let r=e.morphAttributes;for(let c in r){let f=[],h=r[c];for(let d=0,u=h.length;d<u;d++)f.push(h[d].clone(t));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,f=o.length;c<f;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Qa=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ya,this.updateRanges=[],this.version=0,this.uuid=Qi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Tn=new V,ho=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Tn.fromBufferAttribute(this,t),Tn.applyMatrix4(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Tn.fromBufferAttribute(this,t),Tn.applyNormalMatrix(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Tn.fromBufferAttribute(this,t),Tn.transformDirection(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=ai(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Pt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ai(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ai(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ai(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ai(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Pt(t,this.array),i=Pt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Pt(t,this.array),i=Pt(i,this.array),s=Pt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Pt(t,this.array),i=Pt(i,this.array),s=Pt(s,this.array),r=Pt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){so("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Jt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){so("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Lg=0,ui=class extends hi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Lg++}),this.uuid=Qi(),this.name="",this.type="Material",this.blending=es,this.side=Di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ka,this.blendDst=Fa,this.blendEquation=ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new je(0,0,0),this.blendAlpha=0,this.depthFunc=Es,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ch,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ts,this.stencilZFail=Ts,this.stencilZPass=Ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){$e(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){$e(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==es&&(i.blending=this.blending),this.side!==Di&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ka&&(i.blendSrc=this.blendSrc),this.blendDst!==Fa&&(i.blendDst=this.blendDst),this.blendEquation!==ts&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Es&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ch&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ts&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ts&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ts&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},ns=class extends ui{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new je(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},er,$r=new V,tr=new V,nr=new V,ir=new Je,Kr=new Je,kp=new mt,ga=new V,Jr=new V,xa=new V,Fu=new Je,xh=new Je,Ou=new Je,As=class extends rn{constructor(e=new ns){if(super(),this.isSprite=!0,this.type="Sprite",er===void 0){er=new qt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Qa(t,5);er.setIndex([0,1,2,0,2,3]),er.setAttribute("position",new ho(i,3,0,!1)),er.setAttribute("uv",new ho(i,2,3,!1))}this.geometry=er,this.material=e,this.center=new Je(.5,.5),this.count=1}raycast(e,t){e.camera===null&&Ze('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),tr.setFromMatrixScale(this.matrixWorld),kp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),nr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&tr.multiplyScalar(-nr.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;ya(ga.set(-.5,-.5,0),nr,o,tr,s,r),ya(Jr.set(.5,-.5,0),nr,o,tr,s,r),ya(xa.set(.5,.5,0),nr,o,tr,s,r),Fu.set(0,0),xh.set(1,0),Ou.set(1,1);let a=e.ray.intersectTriangle(ga,Jr,xa,!1,$r);if(a===null&&(ya(Jr.set(-.5,.5,0),nr,o,tr,s,r),xh.set(0,1),a=e.ray.intersectTriangle(ga,xa,Jr,!1,$r),a===null))return;let l=e.ray.origin.distanceTo($r);l<e.near||l>e.far||t.push({distance:l,point:$r.clone(),uv:Pi.getInterpolation($r,ga,Jr,xa,Fu,xh,Ou,new Je),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function ya(n,e,t,i,s,r){ir.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(Kr.x=r*ir.x-s*ir.y,Kr.y=s*ir.x+r*ir.y):Kr.copy(ir),n.copy(e),n.x+=Kr.x,n.y+=Kr.y,n.applyMatrix4(kp)}var Si=new V,yh=new V,_a=new V,Ji=new V,_h=new V,va=new V,vh=new V,ur=class{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Si)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Si.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Si.copy(this.origin).addScaledVector(this.direction,t),Si.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){yh.copy(e).add(t).multiplyScalar(.5),_a.copy(t).sub(e).normalize(),Ji.copy(this.origin).sub(yh);let r=e.distanceTo(t)*.5,o=-this.direction.dot(_a),a=Ji.dot(this.direction),l=-Ji.dot(_a),c=Ji.lengthSq(),f=Math.abs(1-o*o),h,d,u,p;if(f>0)if(h=o*l-a,d=o*a-l,p=r*f,h>=0)if(d>=-p)if(d<=p){let x=1/f;h*=x,d*=x,u=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),u=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),u=-h*h+d*(d+2*l)+c;else d<=-p?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),u=-h*h+d*(d+2*l)+c):d<=p?(h=0,d=Math.min(Math.max(-r,-l),r),u=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),u=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),u=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(yh).addScaledVector(_a,d),u}intersectSphere(e,t){Si.subVectors(e.center,this.origin);let i=Si.dot(this.direction),s=Si.dot(Si)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),f>=0?(r=(e.min.y-d.y)*f,o=(e.max.y-d.y)*f):(r=(e.max.y-d.y)*f,o=(e.min.y-d.y)*f),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Si)!==null}intersectTriangle(e,t,i,s,r){_h.subVectors(t,e),va.subVectors(i,e),vh.crossVectors(_h,va);let o=this.direction.dot(vh),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ji.subVectors(this.origin,e);let l=a*this.direction.dot(va.crossVectors(Ji,va));if(l<0)return null;let c=a*this.direction.dot(_h.cross(Ji));if(c<0||l+c>o)return null;let f=-a*Ji.dot(vh);return f<0?null:this.at(f/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},tn=class extends ui{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.combine=xl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Bu=new mt,bs=new ur,Ma=new Ui,zu=new V,ba=new V,wa=new V,Ta=new V,Mh=new V,Ea=new V,Hu=new V,Aa=new V,ye=class extends rn{constructor(e=new qt,t=new tn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Ea.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let f=a[l],h=r[l];f!==0&&(Mh.fromBufferAttribute(h,e),o?Ea.addScaledVector(Mh,f):Ea.addScaledVector(Mh.sub(t),f))}t.add(Ea)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ma.copy(i.boundingSphere),Ma.applyMatrix4(r),bs.copy(e.ray).recast(e.near),!(Ma.containsPoint(bs.origin)===!1&&(bs.intersectSphere(Ma,zu)===null||bs.origin.distanceToSquared(zu)>(e.far-e.near)**2))&&(Bu.copy(r).invert(),bs.copy(e.ray).applyMatrix4(Bu),!(i.boundingBox!==null&&bs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,bs)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,f=r.attributes.uv1,h=r.attributes.normal,d=r.groups,u=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=d.length;p<x;p++){let m=d[p],g=o[m.materialIndex],y=Math.max(m.start,u.start),M=Math.min(a.count,Math.min(m.start+m.count,u.start+u.count));for(let w=y,C=M;w<C;w+=3){let T=a.getX(w),D=a.getX(w+1),_=a.getX(w+2);s=Ra(this,g,e,i,c,f,h,T,D,_),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,u.start),x=Math.min(a.count,u.start+u.count);for(let m=p,g=x;m<g;m+=3){let y=a.getX(m),M=a.getX(m+1),w=a.getX(m+2);s=Ra(this,o,e,i,c,f,h,y,M,w),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=d.length;p<x;p++){let m=d[p],g=o[m.materialIndex],y=Math.max(m.start,u.start),M=Math.min(l.count,Math.min(m.start+m.count,u.start+u.count));for(let w=y,C=M;w<C;w+=3){let T=w,D=w+1,_=w+2;s=Ra(this,g,e,i,c,f,h,T,D,_),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,u.start),x=Math.min(l.count,u.start+u.count);for(let m=p,g=x;m<g;m+=3){let y=m,M=m+1,w=m+2;s=Ra(this,o,e,i,c,f,h,y,M,w),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Ng(n,e,t,i,s,r,o,a){let l;if(e.side===gn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Di,a),l===null)return null;Aa.copy(a),Aa.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Aa);return c<t.near||c>t.far?null:{distance:c,point:Aa.clone(),object:n}}function Ra(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,ba),n.getVertexPosition(l,wa),n.getVertexPosition(c,Ta);let f=Ng(n,e,t,i,ba,wa,Ta,Hu);if(f){let h=new V;Pi.getBarycoord(Hu,ba,wa,Ta,h),s&&(f.uv=Pi.getInterpolatedAttribute(s,a,l,c,h,new Je)),r&&(f.uv1=Pi.getInterpolatedAttribute(r,a,l,c,h,new Je)),o&&(f.normal=Pi.getInterpolatedAttribute(o,a,l,c,h,new V),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new V,materialIndex:0};Pi.getNormal(ba,wa,Ta,d.normal),f.face=d,f.barycoord=h}return f}var fo=class extends En{constructor(e=null,t=1,i=1,s,r,o,a,l,c=un,f=un,h,d){super(null,o,a,l,c,f,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var uo=class extends Jt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},sr=new mt,Vu=new mt,Ca=[],Gu=new di,Ug=new mt,jr=new ye,Qr=new Ui,Yt=class extends ye{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new uo(new Float32Array(i*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Ug)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new di),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,sr),Gu.copy(e.boundingBox).applyMatrix4(sr),this.boundingBox.union(Gu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ui),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,sr),Qr.copy(e.boundingSphere).applyMatrix4(sr),this.boundingSphere.union(Qr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(jr.geometry=this.geometry,jr.material=this.material,jr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Qr.copy(this.boundingSphere),Qr.applyMatrix4(i),e.ray.intersectsSphere(Qr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,sr),Vu.multiplyMatrices(i,sr),jr.matrixWorld=Vu,jr.raycast(e,Ca);for(let o=0,a=Ca.length;o<a;o++){let l=Ca[o];l.instanceId=r,l.object=this,t.push(l)}Ca.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new uo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new fo(new Float32Array(s*this.count),s,this.count,Tl,qn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(i,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},bh=new V,kg=new V,Fg=new it,Gn=class{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=bh.subVectors(i,t).cross(kg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(bh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Fg.getNormalMatrix(e),s=this.coplanarPoint(bh).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ws=new Ui,Og=new Je(.5,.5),Sa=new V,pr=class{constructor(e=new Gn,t=new Gn,i=new Gn,s=new Gn,r=new Gn,o=new Gn){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Qn,i=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],f=r[4],h=r[5],d=r[6],u=r[7],p=r[8],x=r[9],m=r[10],g=r[11],y=r[12],M=r[13],w=r[14],C=r[15];if(s[0].setComponents(c-o,u-f,g-p,C-y).normalize(),s[1].setComponents(c+o,u+f,g+p,C+y).normalize(),s[2].setComponents(c+a,u+h,g+x,C+M).normalize(),s[3].setComponents(c-a,u-h,g-x,C-M).normalize(),i)s[4].setComponents(l,d,m,w).normalize(),s[5].setComponents(c-l,u-d,g-m,C-w).normalize();else if(s[4].setComponents(c-l,u-d,g-m,C-w).normalize(),t===Qn)s[5].setComponents(c+l,u+d,g+m,C+w).normalize();else if(t===lr)s[5].setComponents(l,d,m,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ws.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ws.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ws)}intersectsSprite(e){ws.center.set(0,0,0);let t=Og.distanceTo(e.center);return ws.radius=.7071067811865476+t,ws.applyMatrix4(e.matrixWorld),this.intersectsSphere(ws)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Sa.x=s.normal.x>0?e.max.x:e.min.x,Sa.y=s.normal.y>0?e.max.y:e.min.y,Sa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Sa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var pi=class extends ui{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Wu=new mt,Sh=new ur,Pa=new Ui,Ia=new V,ki=class extends rn{constructor(e=new qt,t=new pi){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Pa.copy(i.boundingSphere),Pa.applyMatrix4(s),Pa.radius+=r,e.ray.intersectsSphere(Pa)===!1)return;Wu.copy(s).invert(),Sh.copy(e.ray).applyMatrix4(Wu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){let d=Math.max(0,o.start),u=Math.min(c.count,o.start+o.count);for(let p=d,x=u;p<x;p++){let m=c.getX(p);Ia.fromBufferAttribute(h,m),Xu(Ia,m,l,s,e,t,this)}}else{let d=Math.max(0,o.start),u=Math.min(h.count,o.start+o.count);for(let p=d,x=u;p<x;p++)Ia.fromBufferAttribute(h,p),Xu(Ia,p,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Xu(n,e,t,i,s,r,o){let a=Sh.distanceSqToPoint(n);if(a<t){let l=new V;Sh.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var po=class extends En{constructor(e=[],t=as,i,s,r,o,a,l,c,f){super(e,t,i,s,r,o,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Wn=class extends En{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Fi=class extends En{constructor(e,t,i=ti,s,r,o,a=un,l=un,c,f=ci,h=1){if(f!==ci&&f!==ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:h};super(d,s,r,o,a,l,f,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new hr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},el=class extends Fi{constructor(e,t=ti,i=as,s,r,o=un,a=un,l,c=ci){let f={width:e,height:e,depth:1},h=[f,f,f,f,f,f];super(e,e,t,i,s,r,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},mo=class extends En{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},is=class n extends qt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],f=[],h=[],d=0,u=0;p("z","y","x",-1,-1,i,t,e,o,r,0),p("z","y","x",1,-1,i,t,-e,o,r,1),p("x","z","y",1,1,e,i,t,s,o,2),p("x","z","y",1,-1,e,i,-t,s,o,3),p("x","y","z",1,-1,e,t,i,s,r,4),p("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Nt(c,3)),this.setAttribute("normal",new Nt(f,3)),this.setAttribute("uv",new Nt(h,2));function p(x,m,g,y,M,w,C,T,D,_,v){let P=w/D,R=C/_,N=w/2,X=C/2,q=T/2,k=D+1,B=_+1,Y=0,le=0,fe=new V;for(let _e=0;_e<B;_e++){let Ce=_e*R-X;for(let Ue=0;Ue<k;Ue++){let Z=Ue*P-N;fe[x]=Z*y,fe[m]=Ce*M,fe[g]=q,c.push(fe.x,fe.y,fe.z),fe[x]=0,fe[m]=0,fe[g]=T>0?1:-1,f.push(fe.x,fe.y,fe.z),h.push(Ue/D),h.push(1-_e/_),Y+=1}}for(let _e=0;_e<_;_e++)for(let Ce=0;Ce<D;Ce++){let Ue=d+Ce+k*_e,Z=d+Ce+k*(_e+1),F=d+(Ce+1)+k*(_e+1),z=d+(Ce+1)+k*_e;l.push(Ue,Z,z),l.push(Z,F,z),le+=6}a.addGroup(u,le,v),u+=le,d+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var mi=class n extends qt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new V,f=new Je;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){let u=i+h/t*s;c.x=e*Math.cos(u),c.y=e*Math.sin(u),o.push(c.x,c.y,c.z),a.push(0,0,1),f.x=(o[d]/e+1)/2,f.y=(o[d+1]/e+1)/2,l.push(f.x,f.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Nt(o,3)),this.setAttribute("normal",new Nt(a,3)),this.setAttribute("uv",new Nt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Rs=class n extends qt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let f=[],h=[],d=[],u=[],p=0,x=[],m=i/2,g=0;y(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(f),this.setAttribute("position",new Nt(h,3)),this.setAttribute("normal",new Nt(d,3)),this.setAttribute("uv",new Nt(u,2));function y(){let w=new V,C=new V,T=0,D=(t-e)/i;for(let _=0;_<=r;_++){let v=[],P=_/r,R=P*(t-e)+e;for(let N=0;N<=s;N++){let X=N/s,q=X*l+a,k=Math.sin(q),B=Math.cos(q);C.x=R*k,C.y=-P*i+m,C.z=R*B,h.push(C.x,C.y,C.z),w.set(k,D,B).normalize(),d.push(w.x,w.y,w.z),u.push(X,1-P),v.push(p++)}x.push(v)}for(let _=0;_<s;_++)for(let v=0;v<r;v++){let P=x[v][_],R=x[v+1][_],N=x[v+1][_+1],X=x[v][_+1];(e>0||v!==0)&&(f.push(P,R,X),T+=3),(t>0||v!==r-1)&&(f.push(R,N,X),T+=3)}c.addGroup(g,T,0),g+=T}function M(w){let C=p,T=new Je,D=new V,_=0,v=w===!0?e:t,P=w===!0?1:-1;for(let N=1;N<=s;N++)h.push(0,m*P,0),d.push(0,P,0),u.push(.5,.5),p++;let R=p;for(let N=0;N<=s;N++){let q=N/s*l+a,k=Math.cos(q),B=Math.sin(q);D.x=v*B,D.y=m*P,D.z=v*k,h.push(D.x,D.y,D.z),d.push(0,P,0),T.x=k*.5+.5,T.y=B*.5*P+.5,u.push(T.x,T.y),p++}for(let N=0;N<s;N++){let X=C+N,q=R+N;w===!0?f.push(q,q+1,X):f.push(q+1,q,X),_+=3}c.addGroup(g,_,w===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},go=class n extends Rs{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},tl=class n extends qt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),c(i),f(),this.setAttribute("position",new Nt(r,3)),this.setAttribute("normal",new Nt(r.slice(),3)),this.setAttribute("uv",new Nt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let M=new V,w=new V,C=new V;for(let T=0;T<t.length;T+=3)u(t[T+0],M),u(t[T+1],w),u(t[T+2],C),l(M,w,C,y)}function l(y,M,w,C){let T=C+1,D=[];for(let _=0;_<=T;_++){D[_]=[];let v=y.clone().lerp(w,_/T),P=M.clone().lerp(w,_/T),R=T-_;for(let N=0;N<=R;N++)N===0&&_===T?D[_][N]=v:D[_][N]=v.clone().lerp(P,N/R)}for(let _=0;_<T;_++)for(let v=0;v<2*(T-_)-1;v++){let P=Math.floor(v/2);v%2===0?(d(D[_][P+1]),d(D[_+1][P]),d(D[_][P])):(d(D[_][P+1]),d(D[_+1][P+1]),d(D[_+1][P]))}}function c(y){let M=new V;for(let w=0;w<r.length;w+=3)M.x=r[w+0],M.y=r[w+1],M.z=r[w+2],M.normalize().multiplyScalar(y),r[w+0]=M.x,r[w+1]=M.y,r[w+2]=M.z}function f(){let y=new V;for(let M=0;M<r.length;M+=3){y.x=r[M+0],y.y=r[M+1],y.z=r[M+2];let w=m(y)/2/Math.PI+.5,C=g(y)/Math.PI+.5;o.push(w,1-C)}p(),h()}function h(){for(let y=0;y<o.length;y+=6){let M=o[y+0],w=o[y+2],C=o[y+4],T=Math.max(M,w,C),D=Math.min(M,w,C);T>.9&&D<.1&&(M<.2&&(o[y+0]+=1),w<.2&&(o[y+2]+=1),C<.2&&(o[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function u(y,M){let w=y*3;M.x=e[w+0],M.y=e[w+1],M.z=e[w+2]}function p(){let y=new V,M=new V,w=new V,C=new V,T=new Je,D=new Je,_=new Je;for(let v=0,P=0;v<r.length;v+=9,P+=6){y.set(r[v+0],r[v+1],r[v+2]),M.set(r[v+3],r[v+4],r[v+5]),w.set(r[v+6],r[v+7],r[v+8]),T.set(o[P+0],o[P+1]),D.set(o[P+2],o[P+3]),_.set(o[P+4],o[P+5]),C.copy(y).add(M).add(w).divideScalar(3);let R=m(C);x(T,P+0,y,R),x(D,P+2,M,R),x(_,P+4,w,R)}}function x(y,M,w,C){C<0&&y.x===1&&(o[M]=y.x-1),w.x===0&&w.z===0&&(o[M]=C/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function g(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.detail)}};var Cs=class n extends tl{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var Xn=class n extends qt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,f=l+1,h=e/a,d=t/l,u=[],p=[],x=[],m=[];for(let g=0;g<f;g++){let y=g*d-o;for(let M=0;M<c;M++){let w=M*h-r;p.push(w,-y,0),x.push(0,0,1),m.push(M/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let y=0;y<a;y++){let M=y+c*g,w=y+c*(g+1),C=y+1+c*(g+1),T=y+1+c*g;u.push(M,w,T),u.push(w,C,T)}this.setIndex(u),this.setAttribute("position",new Nt(p,3)),this.setAttribute("normal",new Nt(x,3)),this.setAttribute("uv",new Nt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},xo=class n extends qt{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],f=[],h=e,d=(t-e)/s,u=new V,p=new Je;for(let x=0;x<=s;x++){for(let m=0;m<=i;m++){let g=r+m/i*o;u.x=h*Math.cos(g),u.y=h*Math.sin(g),l.push(u.x,u.y,u.z),c.push(0,0,1),p.x=(u.x/t+1)/2,p.y=(u.y/t+1)/2,f.push(p.x,p.y)}h+=d}for(let x=0;x<s;x++){let m=x*(i+1);for(let g=0;g<i;g++){let y=g+m,M=y,w=y+i+1,C=y+i+2,T=y+1;a.push(M,w,T),a.push(w,C,T)}}this.setIndex(a),this.setAttribute("position",new Nt(l,3)),this.setAttribute("normal",new Nt(c,3)),this.setAttribute("uv",new Nt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Ss=class n extends qt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,f=[],h=new V,d=new V,u=[],p=[],x=[],m=[];for(let g=0;g<=i;g++){let y=[],M=g/i,w=0;g===0&&o===0?w=.5/t:g===i&&l===Math.PI&&(w=-.5/t);for(let C=0;C<=t;C++){let T=C/t;h.x=-e*Math.cos(s+T*r)*Math.sin(o+M*a),h.y=e*Math.cos(o+M*a),h.z=e*Math.sin(s+T*r)*Math.sin(o+M*a),p.push(h.x,h.y,h.z),d.copy(h).normalize(),x.push(d.x,d.y,d.z),m.push(T+w,1-M),y.push(c++)}f.push(y)}for(let g=0;g<i;g++)for(let y=0;y<t;y++){let M=f[g][y+1],w=f[g][y],C=f[g+1][y],T=f[g+1][y+1];(g!==0||o>0)&&u.push(M,w,T),(g!==i-1||l<Math.PI)&&u.push(w,C,T)}this.setIndex(u),this.setAttribute("position",new Nt(p,3)),this.setAttribute("normal",new Nt(x,3)),this.setAttribute("uv",new Nt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};function Is(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(qu(s))s.isRenderTargetTexture?($e("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(qu(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function bn(n){let e={};for(let t=0;t<n.length;t++){let i=Is(n[t]);for(let s in i)e[s]=i[s]}return e}function qu(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Bg(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Qh(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ut.workingColorSpace}var Fp={clone:Is,merge:bn},zg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,kn=class extends ui{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zg,this.fragmentShader=Hg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Is(e.uniforms),this.uniformsGroups=Bg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},nl=class extends kn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Rn=class extends ui{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sc,this.normalScale=new Je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.combine=xl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},il=class extends ui{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},sl=class extends ui{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Da(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}var ss=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];e:{t:{let o;n:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break t}o=t.length;break n}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break t}o=i,i=0;break n}break e}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},rl=class extends ss{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Eh,endingEnd:Eh}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ah:r=e,a=2*t-i;break;case Rh:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Ah:o=e,l=2*i-t;break;case Rh:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,f=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*f,this._offsetNext=o*f}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,f=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,u=this._weightNext,p=(i-t)/(s-t),x=p*p,m=x*p,g=-d*m+2*d*x-d*p,y=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*p+1,M=(-1-u)*m+(1.5+u)*x+.5*p,w=u*m-u*x;for(let C=0;C!==a;++C)r[C]=g*o[f+C]+y*o[c+C]+M*o[l+C]+w*o[h+C];return r}},ol=class extends ss{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,f=(i-t)/(s-t),h=1-f;for(let d=0;d!==a;++d)r[d]=o[c+d]*h+o[l+d]*f;return r}},al=class extends ss{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},ll=class extends ss{interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,f=this.settings||this.DefaultSettings_,h=f.inTangents,d=f.outTangents;if(!h||!d){let x=(i-t)/(s-t),m=1-x;for(let g=0;g!==a;++g)r[g]=o[c+g]*m+o[l+g]*x;return r}let u=a*2,p=e-1;for(let x=0;x!==a;++x){let m=o[c+x],g=o[l+x],y=p*u+x*2,M=d[y],w=d[y+1],C=e*u+x*2,T=h[C],D=h[C+1],_=(i-t)/(s-t),v,P,R,N,X;for(let q=0;q<8;q++){v=_*_,P=v*_,R=1-_,N=R*R,X=N*R;let B=X*t+3*N*_*M+3*R*v*T+P*s-i;if(Math.abs(B)<1e-10)break;let Y=3*N*(M-t)+6*R*_*(T-M)+3*v*(s-T);if(Math.abs(Y)<1e-10)break;_=_-B/Y,_=Math.max(0,Math.min(1,_))}r[x]=X*m+3*N*_*w+3*R*v*D+P*g}return r}},Fn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Da(t,this.TimeBufferType),this.values=Da(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Da(e.times,Array),values:Da(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new al(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ol(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new rl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new ll(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case eo:t=this.InterpolantFactoryMethodDiscrete;break;case qa:t=this.InterpolantFactoryMethodLinear;break;case Ua:t=this.InterpolantFactoryMethodSmooth;break;case Th:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return $e("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return eo;case this.InterpolantFactoryMethodLinear:return qa;case this.InterpolantFactoryMethodSmooth:return Ua;case this.InterpolantFactoryMethodBezier:return Th}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ze("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Ze("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){Ze("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Ze("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&yg(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Ze("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Ua,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],f=e[a+1];if(c!==f&&(a!==1||c!==e[0]))if(s)l=!0;else{let h=a*i,d=h-i,u=h+i;for(let p=0;p!==i;++p){let x=t[h+p];if(x!==t[d+p]||x!==t[u+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*i,d=o*i;for(let u=0;u!==i;++u)t[d+u]=t[h+u]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Fn.prototype.ValueTypeName="";Fn.prototype.TimeBufferType=Float32Array;Fn.prototype.ValueBufferType=Float32Array;Fn.prototype.DefaultInterpolation=qa;var rs=class extends Fn{constructor(e,t,i){super(e,t,i)}};rs.prototype.ValueTypeName="bool";rs.prototype.ValueBufferType=Array;rs.prototype.DefaultInterpolation=eo;rs.prototype.InterpolantFactoryMethodLinear=void 0;rs.prototype.InterpolantFactoryMethodSmooth=void 0;var cl=class extends Fn{constructor(e,t,i,s){super(e,t,i,s)}};cl.prototype.ValueTypeName="color";var hl=class extends Fn{constructor(e,t,i,s){super(e,t,i,s)}};hl.prototype.ValueTypeName="number";var fl=class extends ss{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let f=c+a;c!==f;c+=4)fi.slerpFlat(r,0,o,c-a,o,c,l);return r}},yo=class extends Fn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new fl(this.times,this.values,this.getValueSize(),e)}};yo.prototype.ValueTypeName="quaternion";yo.prototype.InterpolantFactoryMethodSmooth=void 0;var os=class extends Fn{constructor(e,t,i){super(e,t,i)}};os.prototype.ValueTypeName="string";os.prototype.ValueBufferType=Array;os.prototype.DefaultInterpolation=eo;os.prototype.InterpolantFactoryMethodLinear=void 0;os.prototype.InterpolantFactoryMethodSmooth=void 0;var dl=class extends Fn{constructor(e,t,i,s){super(e,t,i,s)}};dl.prototype.ValueTypeName="vector";var ul=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(f){a++,r===!1&&s.onStart!==void 0&&s.onStart(f,o,a),r=!0},this.itemEnd=function(f){o++,s.onProgress!==void 0&&s.onProgress(f,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(f){s.onError!==void 0&&s.onError(f)},this.resolveURL=function(f){return l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,h){return c.push(f,h),this},this.removeHandler=function(f){let h=c.indexOf(f);return h!==-1&&c.splice(h,2),this},this.getHandler=function(f){for(let h=0,d=c.length;h<d;h+=2){let u=c[h],p=c[h+1];if(u.global&&(u.lastIndex=0),u.test(f))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Op=new ul,pl=class{constructor(e){this.manager=e!==void 0?e:Op,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};pl.DEFAULT_MATERIAL_NAME="__DEFAULT";var _o=class extends rn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new je(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},vo=class extends _o{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new je(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},wh=new mt,Yu=new V,Zu=new V,Ph=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Je(512,512),this.mapType=Sn,this.map=null,this.mapPass=null,this.matrix=new mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pr,this._frameExtents=new Je(1,1),this._viewportCount=1,this._viewports=[new Xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Yu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Yu),Zu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Zu),t.updateMatrixWorld(),wh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wh,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===lr||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(wh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},La=new V,Na=new fi,oi=new V,Mo=class extends rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=Qn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(La,Na,oi),oi.x===1&&oi.y===1&&oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(La,Na,oi.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(La,Na,oi),oi.x===1&&oi.y===1&&oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(La,Na,oi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ji=new V,$u=new Je,Ku=new Je,Mn=class extends Mo{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=$a*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Qc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $a*2*Math.atan(Math.tan(Qc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ji.x,ji.y).multiplyScalar(-e/ji.z),ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ji.x,ji.y).multiplyScalar(-e/ji.z)}getViewSize(e,t){return this.getViewBounds(e,$u,Ku),t.subVectors(Ku,$u)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Qc*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var mr=class extends Mo{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ih=class extends Ph{constructor(){super(new mr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},bo=class extends _o{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.target=new rn,this.shadow=new Ih}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var rr=-90,or=1,ml=class extends rn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Mn(rr,or,e,t);s.layers=this.layers,this.add(s);let r=new Mn(rr,or,e,t);r.layers=this.layers,this.add(r);let o=new Mn(rr,or,e,t);o.layers=this.layers,this.add(o);let a=new Mn(rr,or,e,t);a.layers=this.layers,this.add(a);let l=new Mn(rr,or,e,t);l.layers=this.layers,this.add(l);let c=new Mn(rr,or,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Qn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===lr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,f]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(h,d,u),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},gl=class extends Mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var ef="\\[\\]\\.:\\/",Vg=new RegExp("["+ef+"]","g"),tf="[^"+ef+"]",Gg="[^"+ef.replace("\\.","")+"]",Wg=/((?:WC+[\/:])*)/.source.replace("WC",tf),Xg=/(WCOD+)?/.source.replace("WCOD",Gg),qg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",tf),Yg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",tf),Zg=new RegExp("^"+Wg+Xg+qg+Yg+"$"),$g=["material","materials","bones","map"],Dh=class{constructor(e,t,i){let s=i||Vt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Vt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Vg,"")}static parseTrackName(e){let t=Zg.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);$g.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){$e("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){Ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ze("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ze("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let f=0;f<e.length;f++)if(e[f].name===c){c=f;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ze("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Ze("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){Ze("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;Ze("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Vt.Composite=Dh;Vt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Vt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Vt.prototype.GetterByBindingType=[Vt.prototype._getValue_direct,Vt.prototype._getValue_array,Vt.prototype._getValue_arrayElement,Vt.prototype._getValue_toArray];Vt.prototype.SetterByBindingTypeAndVersioning=[[Vt.prototype._setValue_direct,Vt.prototype._setValue_direct_setNeedsUpdate,Vt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Vt.prototype._setValue_array,Vt.prototype._setValue_array_setNeedsUpdate,Vt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Vt.prototype._setValue_arrayElement,Vt.prototype._setValue_arrayElement_setNeedsUpdate,Vt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Vt.prototype._setValue_fromArray,Vt.prototype._setValue_fromArray_setNeedsUpdate,Vt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ow=new Float32Array(1);var Ju=new mt,wo=class{constructor(e,t,i=0,s=1/0){this.ray=new ur(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new fr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ze("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ju.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ju),this}intersectObject(e,t=!0,i=[]){return Lh(e,this,i,t),i.sort(ju),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Lh(e[s],this,i,t);return i.sort(ju),i}};function ju(n,e){return n.distance-e.distance}function Lh(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let o=0,a=r.length;o<a;o++)Lh(r[o],e,t,!0)}}var Nh=class n{static{n.prototype.isMatrix2=!0}constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};function nf(n,e,t,i){let s=Kg(i);switch(t){case Kh:return n*e;case Tl:return n*e/s.components*s.byteLength;case El:return n*e/s.components*s.byteLength;case cs:return n*e*2/s.components*s.byteLength;case Al:return n*e*2/s.components*s.byteLength;case Jh:return n*e*3/s.components*s.byteLength;case Yn:return n*e*4/s.components*s.byteLength;case Rl:return n*e*4/s.components*s.byteLength;case Ro:case Co:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case So:case Po:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Sl:case Il:return Math.max(n,16)*Math.max(e,8)/4;case Cl:case Pl:return Math.max(n,8)*Math.max(e,8)/2;case Dl:case Ll:case Ul:case kl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Nl:case Io:case Fl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ol:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Bl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case zl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Hl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Vl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Gl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Wl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Xl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case ql:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Yl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Zl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case $l:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Kl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Jl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case jl:case Ql:case ec:return Math.ceil(n/4)*Math.ceil(e/4)*16;case tc:case nc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Do:case ic:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Kg(n){switch(n){case Sn:case qh:return{byteLength:1,components:1};case xr:case Yh:case yi:return{byteLength:2,components:1};case bl:case wl:return{byteLength:2,components:4};case ti:case Ml:case qn:return{byteLength:4,components:1};case Zh:case $h:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"184"}}));typeof window<"u"&&(window.__THREE__?$e("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="184");function am(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function jg(n){let e=new WeakMap;function t(a,l){let c=a.array,f=a.usage,h=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,f),a.onUploadCallback();let u;if(c instanceof Float32Array)u=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)u=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?u=n.HALF_FLOAT:u=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=n.SHORT;else if(c instanceof Uint32Array)u=n.UNSIGNED_INT;else if(c instanceof Int32Array)u=n.INT;else if(c instanceof Int8Array)u=n.BYTE;else if(c instanceof Uint8Array)u=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){let f=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,f);else{h.sort((u,p)=>u.start-p.start);let d=0;for(let u=1;u<h.length;u++){let p=h[d],x=h[u];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++d,h[d]=x)}h.length=d+1;for(let u=0,p=h.length;u<p;u++){let x=h[u];n.bufferSubData(c,x.start*f.BYTES_PER_ELEMENT,f,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let f=e.get(a);(!f||f.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Qg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ex=`#ifdef USE_ALPHAHASH
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
#endif`,tx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ix=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rx=`#ifdef USE_AOMAP
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
#endif`,ox=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ax=`#ifdef USE_BATCHING
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
#endif`,lx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,dx=`#ifdef USE_IRIDESCENCE
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
#endif`,ux=`#ifdef USE_BUMPMAP
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
#endif`,px=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,mx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,_x=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,vx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Mx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,bx=`#define PI 3.141592653589793
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
} // validated`,wx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Tx=`vec3 transformedNormal = objectNormal;
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
#endif`,Ex=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ax=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Rx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Cx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Sx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Px=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ix=`#ifdef USE_ENVMAP
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
#endif`,Dx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Lx=`#ifdef USE_ENVMAP
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
#endif`,Nx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ux=`#ifdef USE_ENVMAP
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
#endif`,kx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Fx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ox=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zx=`#ifdef USE_GRADIENTMAP
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
}`,Hx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wx=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Xx=`#ifdef USE_ENVMAP
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
#endif`,qx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Yx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$x=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Kx=`PhysicalMaterial material;
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
#endif`,Jx=`uniform sampler2D dfgLUT;
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
}`,jx=`
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
#endif`,Qx=`#if defined( RE_IndirectDiffuse )
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
#endif`,ey=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ty=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,ny=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,iy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ry=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,oy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ay=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ly=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,cy=`#if defined( USE_POINTS_UV )
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
#endif`,hy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,uy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,py=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,my=`#ifdef USE_MORPHTARGETS
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
#endif`,gy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,yy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,_y=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,My=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,by=`#ifdef USE_NORMALMAP
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
#endif`,wy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ty=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ey=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ay=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ry=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Sy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Py=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Iy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Dy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ly=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ny=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Uy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ky=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Fy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Oy=`float getShadowMask() {
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
}`,By=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zy=`#ifdef USE_SKINNING
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
#endif`,Hy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vy=`#ifdef USE_SKINNING
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
#endif`,Gy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Yy=`#ifdef USE_TRANSMISSION
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
#endif`,Zy=`#ifdef USE_TRANSMISSION
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
#endif`,$y=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ky=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Qy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,e_=`uniform sampler2D t2D;
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
}`,t_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,n_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,i_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,s_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r_=`#include <common>
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
}`,o_=`#if DEPTH_PACKING == 3200
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
}`,a_=`#define DISTANCE
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
}`,l_=`#define DISTANCE
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
}`,c_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,h_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f_=`uniform float scale;
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
}`,d_=`uniform vec3 diffuse;
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
}`,u_=`#include <common>
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
}`,p_=`uniform vec3 diffuse;
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
}`,m_=`#define LAMBERT
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
}`,g_=`#define LAMBERT
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
}`,x_=`#define MATCAP
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
}`,y_=`#define MATCAP
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
}`,__=`#define NORMAL
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
}`,v_=`#define NORMAL
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
}`,M_=`#define PHONG
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
}`,b_=`#define PHONG
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
}`,w_=`#define STANDARD
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
}`,T_=`#define STANDARD
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
}`,E_=`#define TOON
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
}`,A_=`#define TOON
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
}`,R_=`uniform float size;
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
}`,C_=`uniform vec3 diffuse;
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
}`,S_=`#include <common>
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
}`,P_=`uniform vec3 color;
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
}`,I_=`uniform float rotation;
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
}`,D_=`uniform vec3 diffuse;
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
}`,ct={alphahash_fragment:Qg,alphahash_pars_fragment:ex,alphamap_fragment:tx,alphamap_pars_fragment:nx,alphatest_fragment:ix,alphatest_pars_fragment:sx,aomap_fragment:rx,aomap_pars_fragment:ox,batching_pars_vertex:ax,batching_vertex:lx,begin_vertex:cx,beginnormal_vertex:hx,bsdfs:fx,iridescence_fragment:dx,bumpmap_pars_fragment:ux,clipping_planes_fragment:px,clipping_planes_pars_fragment:mx,clipping_planes_pars_vertex:gx,clipping_planes_vertex:xx,color_fragment:yx,color_pars_fragment:_x,color_pars_vertex:vx,color_vertex:Mx,common:bx,cube_uv_reflection_fragment:wx,defaultnormal_vertex:Tx,displacementmap_pars_vertex:Ex,displacementmap_vertex:Ax,emissivemap_fragment:Rx,emissivemap_pars_fragment:Cx,colorspace_fragment:Sx,colorspace_pars_fragment:Px,envmap_fragment:Ix,envmap_common_pars_fragment:Dx,envmap_pars_fragment:Lx,envmap_pars_vertex:Nx,envmap_physical_pars_fragment:Xx,envmap_vertex:Ux,fog_vertex:kx,fog_pars_vertex:Fx,fog_fragment:Ox,fog_pars_fragment:Bx,gradientmap_pars_fragment:zx,lightmap_pars_fragment:Hx,lights_lambert_fragment:Vx,lights_lambert_pars_fragment:Gx,lights_pars_begin:Wx,lights_toon_fragment:qx,lights_toon_pars_fragment:Yx,lights_phong_fragment:Zx,lights_phong_pars_fragment:$x,lights_physical_fragment:Kx,lights_physical_pars_fragment:Jx,lights_fragment_begin:jx,lights_fragment_maps:Qx,lights_fragment_end:ey,lightprobes_pars_fragment:ty,logdepthbuf_fragment:ny,logdepthbuf_pars_fragment:iy,logdepthbuf_pars_vertex:sy,logdepthbuf_vertex:ry,map_fragment:oy,map_pars_fragment:ay,map_particle_fragment:ly,map_particle_pars_fragment:cy,metalnessmap_fragment:hy,metalnessmap_pars_fragment:fy,morphinstance_vertex:dy,morphcolor_vertex:uy,morphnormal_vertex:py,morphtarget_pars_vertex:my,morphtarget_vertex:gy,normal_fragment_begin:xy,normal_fragment_maps:yy,normal_pars_fragment:_y,normal_pars_vertex:vy,normal_vertex:My,normalmap_pars_fragment:by,clearcoat_normal_fragment_begin:wy,clearcoat_normal_fragment_maps:Ty,clearcoat_pars_fragment:Ey,iridescence_pars_fragment:Ay,opaque_fragment:Ry,packing:Cy,premultiplied_alpha_fragment:Sy,project_vertex:Py,dithering_fragment:Iy,dithering_pars_fragment:Dy,roughnessmap_fragment:Ly,roughnessmap_pars_fragment:Ny,shadowmap_pars_fragment:Uy,shadowmap_pars_vertex:ky,shadowmap_vertex:Fy,shadowmask_pars_fragment:Oy,skinbase_vertex:By,skinning_pars_vertex:zy,skinning_vertex:Hy,skinnormal_vertex:Vy,specularmap_fragment:Gy,specularmap_pars_fragment:Wy,tonemapping_fragment:Xy,tonemapping_pars_fragment:qy,transmission_fragment:Yy,transmission_pars_fragment:Zy,uv_pars_fragment:$y,uv_pars_vertex:Ky,uv_vertex:Jy,worldpos_vertex:jy,background_vert:Qy,background_frag:e_,backgroundCube_vert:t_,backgroundCube_frag:n_,cube_vert:i_,cube_frag:s_,depth_vert:r_,depth_frag:o_,distance_vert:a_,distance_frag:l_,equirect_vert:c_,equirect_frag:h_,linedashed_vert:f_,linedashed_frag:d_,meshbasic_vert:u_,meshbasic_frag:p_,meshlambert_vert:m_,meshlambert_frag:g_,meshmatcap_vert:x_,meshmatcap_frag:y_,meshnormal_vert:__,meshnormal_frag:v_,meshphong_vert:M_,meshphong_frag:b_,meshphysical_vert:w_,meshphysical_frag:T_,meshtoon_vert:E_,meshtoon_frag:A_,points_vert:R_,points_frag:C_,shadow_vert:S_,shadow_frag:P_,sprite_vert:I_,sprite_frag:D_},Se={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new it}},envmap:{envMap:{value:null},envMapRotation:{value:new it},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new it}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new it}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new it},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new it},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new it},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new it}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new it}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new it}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new V},probesMax:{value:new V},probesResolution:{value:new V}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0},uvTransform:{value:new it}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}}},vi={basic:{uniforms:bn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:bn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new je(0)},envMapIntensity:{value:1}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:bn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:bn([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:bn([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new je(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:bn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:bn([Se.points,Se.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:bn([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:bn([Se.common,Se.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:bn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:bn([Se.sprite,Se.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new it},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new it}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distance:{uniforms:bn([Se.common,Se.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distance_vert,fragmentShader:ct.distance_frag},shadow:{uniforms:bn([Se.lights,Se.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};vi.physical={uniforms:bn([vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new it},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new it},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new it},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new it},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new it},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new it},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new it},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new it},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new it},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new it},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new it},anisotropyVector:{value:new Je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new it}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};var ac={r:0,b:0,g:0},L_=new mt,lm=new it;lm.set(-1,0,0,0,1,0,0,0,1);function N_(n,e,t,i,s,r){let o=new je(0),a=s===!0?0:1,l,c,f=null,h=0,d=null;function u(y){let M=y.isScene===!0?y.background:null;if(M&&M.isTexture){let w=y.backgroundBlurriness>0;M=e.get(M,w)}return M}function p(y){let M=!1,w=u(y);w===null?m(o,a):w&&w.isColor&&(m(w,1),M=!0);let C=n.xr.getEnvironmentBlendMode();C==="additive"?t.buffers.color.setClear(0,0,0,1,r):C==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(y,M){let w=u(M);w&&(w.isCubeTexture||w.mapping===Eo)?(c===void 0&&(c=new ye(new is(1,1,1),new kn({name:"BackgroundCubeMaterial",uniforms:Is(vi.backgroundCube.uniforms),vertexShader:vi.backgroundCube.vertexShader,fragmentShader:vi.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,T,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=w,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(L_.makeRotationFromEuler(M.backgroundRotation)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(lm),c.material.toneMapped=ut.getTransfer(w.colorSpace)!==At,(f!==w||h!==w.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,f=w,h=w.version,d=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new ye(new Xn(2,2),new kn({name:"BackgroundMaterial",uniforms:Is(vi.background.uniforms),vertexShader:vi.background.vertexShader,fragmentShader:vi.background.fragmentShader,side:Di,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=w,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=ut.getTransfer(w.colorSpace)!==At,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(f!==w||h!==w.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,f=w,h=w.version,d=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,M){y.getRGB(ac,Qh(n)),t.buffers.color.setClear(ac.r,ac.g,ac.b,M,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,M=1){o.set(y),a=M,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,m(o,a)},render:p,addToRenderList:x,dispose:g}}function U_(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,o=!1;function a(R,N,X,q,k){let B=!1,Y=h(R,q,X,N);r!==Y&&(r=Y,c(r.object)),B=u(R,q,X,k),B&&p(R,q,X,k),k!==null&&e.update(k,n.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,w(R,N,X,q),k!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return n.createVertexArray()}function c(R){return n.bindVertexArray(R)}function f(R){return n.deleteVertexArray(R)}function h(R,N,X,q){let k=q.wireframe===!0,B=i[N.id];B===void 0&&(B={},i[N.id]=B);let Y=R.isInstancedMesh===!0?R.id:0,le=B[Y];le===void 0&&(le={},B[Y]=le);let fe=le[X.id];fe===void 0&&(fe={},le[X.id]=fe);let _e=fe[k];return _e===void 0&&(_e=d(l()),fe[k]=_e),_e}function d(R){let N=[],X=[],q=[];for(let k=0;k<t;k++)N[k]=0,X[k]=0,q[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:X,attributeDivisors:q,object:R,attributes:{},index:null}}function u(R,N,X,q){let k=r.attributes,B=N.attributes,Y=0,le=X.getAttributes();for(let fe in le)if(le[fe].location>=0){let Ce=k[fe],Ue=B[fe];if(Ue===void 0&&(fe==="instanceMatrix"&&R.instanceMatrix&&(Ue=R.instanceMatrix),fe==="instanceColor"&&R.instanceColor&&(Ue=R.instanceColor)),Ce===void 0||Ce.attribute!==Ue||Ue&&Ce.data!==Ue.data)return!0;Y++}return r.attributesNum!==Y||r.index!==q}function p(R,N,X,q){let k={},B=N.attributes,Y=0,le=X.getAttributes();for(let fe in le)if(le[fe].location>=0){let Ce=B[fe];Ce===void 0&&(fe==="instanceMatrix"&&R.instanceMatrix&&(Ce=R.instanceMatrix),fe==="instanceColor"&&R.instanceColor&&(Ce=R.instanceColor));let Ue={};Ue.attribute=Ce,Ce&&Ce.data&&(Ue.data=Ce.data),k[fe]=Ue,Y++}r.attributes=k,r.attributesNum=Y,r.index=q}function x(){let R=r.newAttributes;for(let N=0,X=R.length;N<X;N++)R[N]=0}function m(R){g(R,0)}function g(R,N){let X=r.newAttributes,q=r.enabledAttributes,k=r.attributeDivisors;X[R]=1,q[R]===0&&(n.enableVertexAttribArray(R),q[R]=1),k[R]!==N&&(n.vertexAttribDivisor(R,N),k[R]=N)}function y(){let R=r.newAttributes,N=r.enabledAttributes;for(let X=0,q=N.length;X<q;X++)N[X]!==R[X]&&(n.disableVertexAttribArray(X),N[X]=0)}function M(R,N,X,q,k,B,Y){Y===!0?n.vertexAttribIPointer(R,N,X,k,B):n.vertexAttribPointer(R,N,X,q,k,B)}function w(R,N,X,q){x();let k=q.attributes,B=X.getAttributes(),Y=N.defaultAttributeValues;for(let le in B){let fe=B[le];if(fe.location>=0){let _e=k[le];if(_e===void 0&&(le==="instanceMatrix"&&R.instanceMatrix&&(_e=R.instanceMatrix),le==="instanceColor"&&R.instanceColor&&(_e=R.instanceColor)),_e!==void 0){let Ce=_e.normalized,Ue=_e.itemSize,Z=e.get(_e);if(Z===void 0)continue;let F=Z.buffer,z=Z.type,S=Z.bytesPerElement,L=z===n.INT||z===n.UNSIGNED_INT||_e.gpuType===Ml;if(_e.isInterleavedBufferAttribute){let U=_e.data,K=U.stride,ge=_e.offset;if(U.isInstancedInterleavedBuffer){for(let A=0;A<fe.locationSize;A++)g(fe.location+A,U.meshPerAttribute);R.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=U.meshPerAttribute*U.count)}else for(let A=0;A<fe.locationSize;A++)m(fe.location+A);n.bindBuffer(n.ARRAY_BUFFER,F);for(let A=0;A<fe.locationSize;A++)M(fe.location+A,Ue/fe.locationSize,z,Ce,K*S,(ge+Ue/fe.locationSize*A)*S,L)}else{if(_e.isInstancedBufferAttribute){for(let U=0;U<fe.locationSize;U++)g(fe.location+U,_e.meshPerAttribute);R.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let U=0;U<fe.locationSize;U++)m(fe.location+U);n.bindBuffer(n.ARRAY_BUFFER,F);for(let U=0;U<fe.locationSize;U++)M(fe.location+U,Ue/fe.locationSize,z,Ce,Ue*S,Ue/fe.locationSize*U*S,L)}}else if(Y!==void 0){let Ce=Y[le];if(Ce!==void 0)switch(Ce.length){case 2:n.vertexAttrib2fv(fe.location,Ce);break;case 3:n.vertexAttrib3fv(fe.location,Ce);break;case 4:n.vertexAttrib4fv(fe.location,Ce);break;default:n.vertexAttrib1fv(fe.location,Ce)}}}}y()}function C(){v();for(let R in i){let N=i[R];for(let X in N){let q=N[X];for(let k in q){let B=q[k];for(let Y in B)f(B[Y].object),delete B[Y];delete q[k]}}delete i[R]}}function T(R){if(i[R.id]===void 0)return;let N=i[R.id];for(let X in N){let q=N[X];for(let k in q){let B=q[k];for(let Y in B)f(B[Y].object),delete B[Y];delete q[k]}}delete i[R.id]}function D(R){for(let N in i){let X=i[N];for(let q in X){let k=X[q];if(k[R.id]===void 0)continue;let B=k[R.id];for(let Y in B)f(B[Y].object),delete B[Y];delete k[R.id]}}}function _(R){for(let N in i){let X=i[N],q=R.isInstancedMesh===!0?R.id:0,k=X[q];if(k!==void 0){for(let B in k){let Y=k[B];for(let le in Y)f(Y[le].object),delete Y[le];delete k[B]}delete X[q],Object.keys(X).length===0&&delete i[N]}}}function v(){P(),o=!0,r!==s&&(r=s,c(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:v,resetDefaultState:P,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfObject:_,releaseStatesOfProgram:D,initAttributes:x,enableAttribute:m,disableUnusedAttributes:y}}function k_(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function o(l,c,f){f!==0&&(n.drawArraysInstanced(i,l,c,f),t.update(c,i,f))}function a(l,c,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,f);let d=0;for(let u=0;u<f;u++)d+=c[u];t.update(d,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function F_(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let D=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(D){return!(D!==Yn&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(D){let _=D===yi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==Sn&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==qn&&!_)}function l(D){if(D==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",f=l(c);f!==c&&($e("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);let h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&$e("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),w=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=n.getParameter(n.MAX_SAMPLES),T=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:u,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:y,maxVaryings:M,maxFragmentUniforms:w,maxSamples:C,samples:T}}function O_(n){let e=this,t=null,i=0,s=!1,r=!1,o=new Gn,a=new it,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let u=h.length!==0||d||i!==0||s;return s=d,i=h.length,u},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=f(h,d,0)},this.setState=function(h,d,u){let p=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,g=n.get(h);if(!s||p===null||p.length===0||r&&!m)r?f(null):c();else{let y=r?0:i,M=y*4,w=g.clippingState||null;l.value=w,w=f(p,d,M,u);for(let C=0;C!==M;++C)w[C]=t[C];g.clippingState=w,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(h,d,u,p){let x=h!==null?h.length:0,m=null;if(x!==0){if(m=l.value,p!==!0||m===null){let g=u+x*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<g)&&(m=new Float32Array(g));for(let M=0,w=u;M!==x;++M,w+=4)o.copy(h[M]).applyMatrix4(y,a),o.normal.toArray(m,w),m[w+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}var hs=4,Bp=[.125,.215,.35,.446,.526,.582],Ds=20,B_=256,Lo=new mr,zp=new je,sf=null,rf=0,of=0,af=!1,z_=new V,cc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:o=256,position:a=z_}=r;sf=this._renderer.getRenderTarget(),rf=this._renderer.getActiveCubeFace(),of=this._renderer.getActiveMipmapLevel(),af=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(sf,rf,of),this._renderer.xr.enabled=af,e.scissorTest=!1,_r(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===as||e.mapping===Ps?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),sf=this._renderer.getRenderTarget(),rf=this._renderer.getActiveCubeFace(),of=this._renderer.getActiveMipmapLevel(),af=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:mn,minFilter:mn,generateMipmaps:!1,type:yi,format:Yn,colorSpace:to,depthBuffer:!1},s=Hp(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hp(e,t,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=H_(r)),this._blurMaterial=G_(r,e,t),this._ggxMaterial=V_(r,e,t)}return s}_compileMaterial(e){let t=new ye(new qt,e);this._renderer.compile(t,Lo)}_sceneToCubeUV(e,t,i,s,r){let l=new Mn(90,1,t,i),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(zp),h.toneMapping=ei,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ye(new is,new tn({name:"PMREM.Background",side:gn,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,m=x.material,g=!1,y=e.background;y?y.isColor&&(m.color.copy(y),e.background=null,g=!0):(m.color.copy(zp),g=!0);for(let M=0;M<6;M++){let w=M%3;w===0?(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+f[M],r.y,r.z)):w===1?(l.up.set(0,0,c[M]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+f[M],r.z)):(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+f[M]));let C=this._cubeSize;_r(s,w*C,M>2?C:0,C,C),h.setRenderTarget(s),g&&h.render(x,l),h.render(e,l)}h.toneMapping=u,h.autoClear=d,e.background=y}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===as||e.mapping===Ps;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vp());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;_r(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Lo)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;let l=o.uniforms,c=i/(this._lodMeshes.length-1),f=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-f*f),d=0+c*1.25,u=h*d,{_lodMax:p}=this,x=this._sizeLods[i],m=3*x*(i>p-hs?i-p+hs:0),g=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=u,l.mipInt.value=p-t,_r(r,m,g,3*x,2*x),s.setRenderTarget(r),s.render(a,Lo),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-i,_r(e,m,g,3*x,2*x),s.setRenderTarget(e),s.render(a,Lo)}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Ze("blur direction must be either latitudinal or longitudinal!");let f=3,h=this._lodMeshes[s];h.material=c;let d=c.uniforms,u=this._sizeLods[i]-1,p=isFinite(r)?Math.PI/(2*u):2*Math.PI/(2*Ds-1),x=r/p,m=isFinite(r)?1+Math.floor(f*x):Ds;m>Ds&&$e(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ds}`);let g=[],y=0;for(let D=0;D<Ds;++D){let _=D/x,v=Math.exp(-_*_/2);g.push(v),D===0?y+=v:D<m&&(y+=2*v)}for(let D=0;D<g.length;D++)g[D]=g[D]/y;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=g,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:M}=this;d.dTheta.value=p,d.mipInt.value=M-i;let w=this._sizeLods[s],C=3*w*(s>M-hs?s-M+hs:0),T=4*(this._cubeSize-w);_r(t,C,T,3*w,2*w),l.setRenderTarget(t),l.render(h,Lo)}};function H_(n){let e=[],t=[],i=[],s=n,r=n-hs+1+Bp.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>n-hs?l=Bp[o-n+hs-1]:o===0&&(l=0),t.push(l);let c=1/(a-2),f=-c,h=1+c,d=[f,f,h,f,h,h,f,f,h,h,f,h],u=6,p=6,x=3,m=2,g=1,y=new Float32Array(x*p*u),M=new Float32Array(m*p*u),w=new Float32Array(g*p*u);for(let T=0;T<u;T++){let D=T%3*2/3-1,_=T>2?0:-1,v=[D,_,0,D+2/3,_,0,D+2/3,_+1,0,D,_,0,D+2/3,_+1,0,D,_+1,0];y.set(v,x*p*T),M.set(d,m*p*T);let P=[T,T,T,T,T,T];w.set(P,g*p*T)}let C=new qt;C.setAttribute("position",new Jt(y,x)),C.setAttribute("uv",new Jt(M,m)),C.setAttribute("faceIndex",new Jt(w,g)),i.push(new ye(C,null)),s>hs&&s--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Hp(n,e,t){let i=new Un(n,e,t);return i.texture.mapping=Eo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function _r(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function V_(n,e,t){return new kn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:B_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:dc(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function G_(n,e,t){let i=new Float32Array(Ds),s=new V(0,1,0);return new kn({name:"SphericalGaussianBlur",defines:{n:Ds,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:dc(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function Vp(){return new kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dc(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function Gp(){return new kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function dc(){return`

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
	`}var hc=class extends Un{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new po(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new is(5,5,5),r=new kn({name:"CubemapFromEquirect",uniforms:Is(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:gn,blending:gi});r.uniforms.tEquirect.value=t;let o=new ye(s,r),a=t.minFilter;return t.minFilter===xi&&(t.minFilter=mn),new ml(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}};function W_(n){let e=new WeakMap,t=new WeakMap,i=null;function s(d,u=!1){return d==null?null:u?o(d):r(d)}function r(d){if(d&&d.isTexture){let u=d.mapping;if(u===yl||u===_l)if(e.has(d)){let p=e.get(d).texture;return a(p,d.mapping)}else{let p=d.image;if(p&&p.height>0){let x=new hc(p.height);return x.fromEquirectangularTexture(n,d),e.set(d,x),d.addEventListener("dispose",c),a(x.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){let u=d.mapping,p=u===yl||u===_l,x=u===as||u===Ps;if(p||x){let m=t.get(d),g=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return i===null&&(i=new cc(n)),m=p?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{let y=d.image;return p&&y&&y.height>0||x&&y&&l(y)?(i===null&&(i=new cc(n)),m=p?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",f),m.texture):null}}}return d}function a(d,u){return u===yl?d.mapping=as:u===_l&&(d.mapping=Ps),d}function l(d){let u=0,p=6;for(let x=0;x<p;x++)d[x]!==void 0&&u++;return u===p}function c(d){let u=d.target;u.removeEventListener("dispose",c);let p=e.get(u);p!==void 0&&(e.delete(u),p.dispose())}function f(d){let u=d.target;u.removeEventListener("dispose",f);let p=t.get(u);p!==void 0&&(t.delete(u),p.dispose())}function h(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function X_(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Za("WebGLRenderer: "+i+" extension not supported."),s}}}function q_(n,e,t,i){let s={},r=new WeakMap;function o(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let p in d.attributes)e.remove(d.attributes[p]);d.removeEventListener("dispose",o),delete s[d.id];let u=r.get(d);u&&(e.remove(u),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(h){let d=h.attributes;for(let u in d)e.update(d[u],n.ARRAY_BUFFER)}function c(h){let d=[],u=h.index,p=h.attributes.position,x=0;if(p===void 0)return;if(u!==null){let y=u.array;x=u.version;for(let M=0,w=y.length;M<w;M+=3){let C=y[M+0],T=y[M+1],D=y[M+2];d.push(C,T,T,D,D,C)}}else{let y=p.array;x=p.version;for(let M=0,w=y.length/3-1;M<w;M+=3){let C=M+0,T=M+1,D=M+2;d.push(C,T,T,D,D,C)}}let m=new(p.count>=65535?co:lo)(d,1);m.version=x;let g=r.get(h);g&&e.remove(g),r.set(h,m)}function f(h){let d=r.get(h);if(d){let u=h.index;u!==null&&d.version<u.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:f}}function Y_(n,e,t){let i;function s(h){i=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function l(h,d){n.drawElements(i,d,r,h*o),t.update(d,i,1)}function c(h,d,u){u!==0&&(n.drawElementsInstanced(i,d,r,h*o,u),t.update(d,i,u))}function f(h,d,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,h,0,u);let x=0;for(let m=0;m<u;m++)x+=d[m];t.update(x,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function Z_(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:Ze("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function $_(n,e,t){let i=new WeakMap,s=new Xt;function r(o,a,l){let c=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=f!==void 0?f.length:0,d=i.get(a);if(d===void 0||d.count!==h){let v=function(){D.dispose(),i.delete(a),a.removeEventListener("dispose",v)};d!==void 0&&d.texture.dispose();let u=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],M=0;u===!0&&(M=1),p===!0&&(M=2),x===!0&&(M=3);let w=a.attributes.position.count*M,C=1;w>e.maxTextureSize&&(C=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);let T=new Float32Array(w*C*4*h),D=new ro(T,w,C,h);D.type=qn,D.needsUpdate=!0;let _=M*4;for(let P=0;P<h;P++){let R=m[P],N=g[P],X=y[P],q=w*C*4*P;for(let k=0;k<R.count;k++){let B=k*_;u===!0&&(s.fromBufferAttribute(R,k),T[q+B+0]=s.x,T[q+B+1]=s.y,T[q+B+2]=s.z,T[q+B+3]=0),p===!0&&(s.fromBufferAttribute(N,k),T[q+B+4]=s.x,T[q+B+5]=s.y,T[q+B+6]=s.z,T[q+B+7]=0),x===!0&&(s.fromBufferAttribute(X,k),T[q+B+8]=s.x,T[q+B+9]=s.y,T[q+B+10]=s.z,T[q+B+11]=X.itemSize===4?s.w:1)}}d={count:h,texture:D,size:new Je(w,C)},i.set(a,d),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let u=0;for(let x=0;x<c.length;x++)u+=c[x];let p=a.morphTargetsRelative?1:1-u;l.getUniforms().setValue(n,"morphTargetBaseInfluence",p),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function K_(n,e,t,i,s){let r=new WeakMap;function o(c){let f=s.render.frame,h=c.geometry,d=e.get(c,h);if(r.get(d)!==f&&(e.update(d),r.set(d,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==f&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,f))),c.isSkinnedMesh){let u=c.skeleton;r.get(u)!==f&&(u.update(),r.set(u,f))}return d}function a(){r=new WeakMap}function l(c){let f=c.target;f.removeEventListener("dispose",l),i.releaseStatesOfObject(f),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:o,dispose:a}}var J_={[Oh]:"LINEAR_TONE_MAPPING",[Bh]:"REINHARD_TONE_MAPPING",[zh]:"CINEON_TONE_MAPPING",[Hh]:"ACES_FILMIC_TONE_MAPPING",[Gh]:"AGX_TONE_MAPPING",[Wh]:"NEUTRAL_TONE_MAPPING",[Vh]:"CUSTOM_TONE_MAPPING"};function j_(n,e,t,i,s){let r=new Un(e,t,{type:n,depthBuffer:i,stencilBuffer:s,depthTexture:i?new Fi(e,t):void 0}),o=new Un(e,t,{type:yi,depthBuffer:!1,stencilBuffer:!1}),a=new qt;a.setAttribute("position",new Nt([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new Nt([0,2,0,0,2,0],2));let l=new nl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new ye(a,l),f=new mr(-1,1,1,-1,0,1),h=null,d=null,u=!1,p,x=null,m=[],g=!1;this.setSize=function(y,M){r.setSize(y,M),o.setSize(y,M);for(let w=0;w<m.length;w++){let C=m[w];C.setSize&&C.setSize(y,M)}},this.setEffects=function(y){m=y,g=m.length>0&&m[0].isRenderPass===!0;let M=r.width,w=r.height;for(let C=0;C<m.length;C++){let T=m[C];T.setSize&&T.setSize(M,w)}},this.begin=function(y,M){if(u||y.toneMapping===ei&&m.length===0)return!1;if(x=M,M!==null){let w=M.width,C=M.height;(r.width!==w||r.height!==C)&&this.setSize(w,C)}return g===!1&&y.setRenderTarget(r),p=y.toneMapping,y.toneMapping=ei,!0},this.hasRenderPass=function(){return g},this.end=function(y,M){y.toneMapping=p,u=!0;let w=r,C=o;for(let T=0;T<m.length;T++){let D=m[T];if(D.enabled!==!1&&(D.render(y,C,w,M),D.needsSwap!==!1)){let _=w;w=C,C=_}}if(h!==y.outputColorSpace||d!==y.toneMapping){h=y.outputColorSpace,d=y.toneMapping,l.defines={},ut.getTransfer(h)===At&&(l.defines.SRGB_TRANSFER="");let T=J_[d];T&&(l.defines[T]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=w.texture,y.setRenderTarget(x),y.render(c,f),x=null,u=!1},this.isCompositing=function(){return u},this.dispose=function(){r.depthTexture&&r.depthTexture.dispose(),r.dispose(),o.dispose(),a.dispose(),l.dispose()}}var cm=new En,hf=new Fi(1,1),hm=new ro,fm=new ja,dm=new po,Wp=[],Xp=[],qp=new Float32Array(16),Yp=new Float32Array(9),Zp=new Float32Array(4);function Mr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Wp[s];if(r===void 0&&(r=new Float32Array(s),Wp[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function ln(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function cn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function uc(n,e){let t=Xp[e];t===void 0&&(t=new Int32Array(e),Xp[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Q_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function ev(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;n.uniform2fv(this.addr,e),cn(t,e)}}function tv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ln(t,e))return;n.uniform3fv(this.addr,e),cn(t,e)}}function nv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;n.uniform4fv(this.addr,e),cn(t,e)}}function iv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(ln(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),cn(t,e)}else{if(ln(t,i))return;Zp.set(i),n.uniformMatrix2fv(this.addr,!1,Zp),cn(t,i)}}function sv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(ln(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),cn(t,e)}else{if(ln(t,i))return;Yp.set(i),n.uniformMatrix3fv(this.addr,!1,Yp),cn(t,i)}}function rv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(ln(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),cn(t,e)}else{if(ln(t,i))return;qp.set(i),n.uniformMatrix4fv(this.addr,!1,qp),cn(t,i)}}function ov(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function av(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;n.uniform2iv(this.addr,e),cn(t,e)}}function lv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ln(t,e))return;n.uniform3iv(this.addr,e),cn(t,e)}}function cv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;n.uniform4iv(this.addr,e),cn(t,e)}}function hv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function fv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;n.uniform2uiv(this.addr,e),cn(t,e)}}function dv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ln(t,e))return;n.uniform3uiv(this.addr,e),cn(t,e)}}function uv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;n.uniform4uiv(this.addr,e),cn(t,e)}}function pv(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(hf.compareFunction=t.isReversedDepthBuffer()?oc:rc,r=hf):r=cm,t.setTexture2D(e||r,s)}function mv(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||fm,s)}function gv(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||dm,s)}function xv(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||hm,s)}function yv(n){switch(n){case 5126:return Q_;case 35664:return ev;case 35665:return tv;case 35666:return nv;case 35674:return iv;case 35675:return sv;case 35676:return rv;case 5124:case 35670:return ov;case 35667:case 35671:return av;case 35668:case 35672:return lv;case 35669:case 35673:return cv;case 5125:return hv;case 36294:return fv;case 36295:return dv;case 36296:return uv;case 35678:case 36198:case 36298:case 36306:case 35682:return pv;case 35679:case 36299:case 36307:return mv;case 35680:case 36300:case 36308:case 36293:return gv;case 36289:case 36303:case 36311:case 36292:return xv}}function _v(n,e){n.uniform1fv(this.addr,e)}function vv(n,e){let t=Mr(e,this.size,2);n.uniform2fv(this.addr,t)}function Mv(n,e){let t=Mr(e,this.size,3);n.uniform3fv(this.addr,t)}function bv(n,e){let t=Mr(e,this.size,4);n.uniform4fv(this.addr,t)}function wv(n,e){let t=Mr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Tv(n,e){let t=Mr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Ev(n,e){let t=Mr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Av(n,e){n.uniform1iv(this.addr,e)}function Rv(n,e){n.uniform2iv(this.addr,e)}function Cv(n,e){n.uniform3iv(this.addr,e)}function Sv(n,e){n.uniform4iv(this.addr,e)}function Pv(n,e){n.uniform1uiv(this.addr,e)}function Iv(n,e){n.uniform2uiv(this.addr,e)}function Dv(n,e){n.uniform3uiv(this.addr,e)}function Lv(n,e){n.uniform4uiv(this.addr,e)}function Nv(n,e,t){let i=this.cache,s=e.length,r=uc(t,s);ln(i,r)||(n.uniform1iv(this.addr,r),cn(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=hf:o=cm;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function Uv(n,e,t){let i=this.cache,s=e.length,r=uc(t,s);ln(i,r)||(n.uniform1iv(this.addr,r),cn(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||fm,r[o])}function kv(n,e,t){let i=this.cache,s=e.length,r=uc(t,s);ln(i,r)||(n.uniform1iv(this.addr,r),cn(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||dm,r[o])}function Fv(n,e,t){let i=this.cache,s=e.length,r=uc(t,s);ln(i,r)||(n.uniform1iv(this.addr,r),cn(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||hm,r[o])}function Ov(n){switch(n){case 5126:return _v;case 35664:return vv;case 35665:return Mv;case 35666:return bv;case 35674:return wv;case 35675:return Tv;case 35676:return Ev;case 5124:case 35670:return Av;case 35667:case 35671:return Rv;case 35668:case 35672:return Cv;case 35669:case 35673:return Sv;case 5125:return Pv;case 36294:return Iv;case 36295:return Dv;case 36296:return Lv;case 35678:case 36198:case 36298:case 36306:case 35682:return Nv;case 35679:case 36299:case 36307:return Uv;case 35680:case 36300:case 36308:case 36293:return kv;case 36289:case 36303:case 36311:case 36292:return Fv}}var ff=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=yv(t.type)}},df=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ov(t.type)}},uf=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},lf=/(\w+)(\])?(\[|\.)?/g;function $p(n,e){n.seq.push(e),n.map[e.id]=e}function Bv(n,e,t){let i=n.name,s=i.length;for(lf.lastIndex=0;;){let r=lf.exec(i),o=lf.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){$p(t,c===void 0?new ff(a,n,e):new df(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new uf(a),$p(t,h)),t=h}}}var vr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);Bv(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function Kp(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var zv=37297,Hv=0;function Vv(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var Jp=new it;function Gv(n){ut._getMatrix(Jp,ut.workingColorSpace,n);let e=`mat3( ${Jp.elements.map(t=>t.toFixed(4))} )`;switch(ut.getTransfer(n)){case no:return[e,"LinearTransferOETF"];case At:return[e,"sRGBTransferOETF"];default:return $e("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function jp(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Vv(n.getShaderSource(e),a)}else return r}function Wv(n,e){let t=Gv(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Xv={[Oh]:"Linear",[Bh]:"Reinhard",[zh]:"Cineon",[Hh]:"ACESFilmic",[Gh]:"AgX",[Wh]:"Neutral",[Vh]:"Custom"};function qv(n,e){let t=Xv[e];return t===void 0?($e("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var lc=new V;function Yv(){ut.getLuminanceCoefficients(lc);let n=lc.x.toFixed(4),e=lc.y.toFixed(4),t=lc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Zv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Uo).join(`
`)}function $v(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Kv(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Uo(n){return n!==""}function Qp(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function em(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Jv=/^[ \t]*#include +<([\w\d./]+)>/gm;function pf(n){return n.replace(Jv,Qv)}var jv=new Map;function Qv(n,e){let t=ct[e];if(t===void 0){let i=jv.get(e);if(i!==void 0)t=ct[i],$e('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return pf(t)}var eM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tm(n){return n.replace(eM,tM)}function tM(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function nm(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}var nM={[To]:"SHADOWMAP_TYPE_PCF",[gr]:"SHADOWMAP_TYPE_VSM"};function iM(n){return nM[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var sM={[as]:"ENVMAP_TYPE_CUBE",[Ps]:"ENVMAP_TYPE_CUBE",[Eo]:"ENVMAP_TYPE_CUBE_UV"};function rM(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":sM[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var oM={[Ps]:"ENVMAP_MODE_REFRACTION"};function aM(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":oM[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var lM={[xl]:"ENVMAP_BLENDING_MULTIPLY",[vp]:"ENVMAP_BLENDING_MIX",[Mp]:"ENVMAP_BLENDING_ADD"};function cM(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":lM[n.combine]||"ENVMAP_BLENDING_NONE"}function hM(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function fM(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=iM(t),c=rM(t),f=aM(t),h=cM(t),d=hM(t),u=Zv(t),p=$v(r),x=s.createProgram(),m,g,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Uo).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Uo).join(`
`),g.length>0&&(g+=`
`)):(m=[nm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Uo).join(`
`),g=[nm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ei?"#define TONE_MAPPING":"",t.toneMapping!==ei?ct.tonemapping_pars_fragment:"",t.toneMapping!==ei?qv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,Wv("linearToOutputTexel",t.outputColorSpace),Yv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Uo).join(`
`)),o=pf(o),o=Qp(o,t),o=em(o,t),a=pf(a),a=Qp(a,t),a=em(a,t),o=tm(o),a=tm(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===jh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===jh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let M=y+m+o,w=y+g+a,C=Kp(s,s.VERTEX_SHADER,M),T=Kp(s,s.FRAGMENT_SHADER,w);s.attachShader(x,C),s.attachShader(x,T),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function D(R){if(n.debug.checkShaderErrors){let N=s.getProgramInfoLog(x)||"",X=s.getShaderInfoLog(C)||"",q=s.getShaderInfoLog(T)||"",k=N.trim(),B=X.trim(),Y=q.trim(),le=!0,fe=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(le=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,C,T);else{let _e=jp(s,C,"vertex"),Ce=jp(s,T,"fragment");Ze("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+k+`
`+_e+`
`+Ce)}else k!==""?$e("WebGLProgram: Program Info Log:",k):(B===""||Y==="")&&(fe=!1);fe&&(R.diagnostics={runnable:le,programLog:k,vertexShader:{log:B,prefix:m},fragmentShader:{log:Y,prefix:g}})}s.deleteShader(C),s.deleteShader(T),_=new vr(s,x),v=Kv(s,x)}let _;this.getUniforms=function(){return _===void 0&&D(this),_};let v;this.getAttributes=function(){return v===void 0&&D(this),v};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(x,zv)),P},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Hv++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=C,this.fragmentShader=T,this}var dM=0,mf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new gf(e),t.set(e,i)),i}},gf=class{constructor(e){this.id=dM++,this.code=e,this.usedTimes=0}};function uM(n){return n===cs||n===Io||n===Do}function pM(n,e,t,i,s,r){let o=new fr,a=new mf,l=new Set,c=[],f=new Map,h=i.logarithmicDepthBuffer,d=i.precision,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return l.add(_),_===0?"uv":`uv${_}`}function x(_,v,P,R,N,X){let q=R.fog,k=N.geometry,B=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?R.environment:null,Y=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,le=e.get(_.envMap||B,Y),fe=le&&le.mapping===Eo?le.image.height:null,_e=u[_.type];_.precision!==null&&(d=i.getMaxPrecision(_.precision),d!==_.precision&&$e("WebGLProgram.getParameters:",_.precision,"not supported, using",d,"instead."));let Ce=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Ue=Ce!==void 0?Ce.length:0,Z=0;k.morphAttributes.position!==void 0&&(Z=1),k.morphAttributes.normal!==void 0&&(Z=2),k.morphAttributes.color!==void 0&&(Z=3);let F,z,S,L;if(_e){let st=vi[_e];F=st.vertexShader,z=st.fragmentShader}else F=_.vertexShader,z=_.fragmentShader,a.update(_),S=a.getVertexShaderID(_),L=a.getFragmentShaderID(_);let U=n.getRenderTarget(),K=n.state.buffers.depth.getReversed(),ge=N.isInstancedMesh===!0,A=N.isBatchedMesh===!0,J=!!_.map,G=!!_.matcap,se=!!le,ie=!!_.aoMap,pe=!!_.lightMap,qe=!!_.bumpMap,Qe=!!_.normalMap,Rt=!!_.displacementMap,O=!!_.emissiveMap,Tt=!!_.metalnessMap,tt=!!_.roughnessMap,ot=_.anisotropy>0,ve=_.clearcoat>0,_t=_.dispersion>0,I=_.iridescence>0,b=_.sheen>0,j=_.transmission>0,ae=ot&&!!_.anisotropyMap,xe=ve&&!!_.clearcoatMap,be=ve&&!!_.clearcoatNormalMap,Re=ve&&!!_.clearcoatRoughnessMap,re=I&&!!_.iridescenceMap,ce=I&&!!_.iridescenceThicknessMap,De=b&&!!_.sheenColorMap,Fe=b&&!!_.sheenRoughnessMap,Ee=!!_.specularMap,we=!!_.specularColorMap,nt=!!_.specularIntensityMap,at=j&&!!_.transmissionMap,vt=j&&!!_.thicknessMap,H=!!_.gradientMap,Te=!!_.alphaMap,oe=_.alphaTest>0,Ne=!!_.alphaHash,Ae=!!_.extensions,me=ei;_.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(me=n.toneMapping);let ze={shaderID:_e,shaderType:_.type,shaderName:_.name,vertexShader:F,fragmentShader:z,defines:_.defines,customVertexShaderID:S,customFragmentShaderID:L,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:d,batching:A,batchingColor:A&&N._colorsTexture!==null,instancing:ge,instancingColor:ge&&N.instanceColor!==null,instancingMorph:ge&&N.morphTexture!==null,outputColorSpace:U===null?n.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:ut.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:J,matcap:G,envMap:se,envMapMode:se&&le.mapping,envMapCubeUVHeight:fe,aoMap:ie,lightMap:pe,bumpMap:qe,normalMap:Qe,displacementMap:Rt,emissiveMap:O,normalMapObjectSpace:Qe&&_.normalMapType===Tp,normalMapTangentSpace:Qe&&_.normalMapType===sc,packedNormalMap:Qe&&_.normalMapType===sc&&uM(_.normalMap.format),metalnessMap:Tt,roughnessMap:tt,anisotropy:ot,anisotropyMap:ae,clearcoat:ve,clearcoatMap:xe,clearcoatNormalMap:be,clearcoatRoughnessMap:Re,dispersion:_t,iridescence:I,iridescenceMap:re,iridescenceThicknessMap:ce,sheen:b,sheenColorMap:De,sheenRoughnessMap:Fe,specularMap:Ee,specularColorMap:we,specularIntensityMap:nt,transmission:j,transmissionMap:at,thicknessMap:vt,gradientMap:H,opaque:_.transparent===!1&&_.blending===es&&_.alphaToCoverage===!1,alphaMap:Te,alphaTest:oe,alphaHash:Ne,combine:_.combine,mapUv:J&&p(_.map.channel),aoMapUv:ie&&p(_.aoMap.channel),lightMapUv:pe&&p(_.lightMap.channel),bumpMapUv:qe&&p(_.bumpMap.channel),normalMapUv:Qe&&p(_.normalMap.channel),displacementMapUv:Rt&&p(_.displacementMap.channel),emissiveMapUv:O&&p(_.emissiveMap.channel),metalnessMapUv:Tt&&p(_.metalnessMap.channel),roughnessMapUv:tt&&p(_.roughnessMap.channel),anisotropyMapUv:ae&&p(_.anisotropyMap.channel),clearcoatMapUv:xe&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:be&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&p(_.clearcoatRoughnessMap.channel),iridescenceMapUv:re&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:De&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&p(_.sheenRoughnessMap.channel),specularMapUv:Ee&&p(_.specularMap.channel),specularColorMapUv:we&&p(_.specularColorMap.channel),specularIntensityMapUv:nt&&p(_.specularIntensityMap.channel),transmissionMapUv:at&&p(_.transmissionMap.channel),thicknessMapUv:vt&&p(_.thicknessMap.channel),alphaMapUv:Te&&p(_.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Qe||ot),vertexNormals:!!k.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!k.attributes.uv&&(J||Te),fog:!!q,useFog:_.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||k.attributes.normal===void 0&&Qe===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:K,skinning:N.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:Ue,morphTextureStride:Z,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numLightProbeGrids:X.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:me,decodeVideoTexture:J&&_.map.isVideoTexture===!0&&ut.getTransfer(_.map.colorSpace)===At,decodeVideoTextureEmissive:O&&_.emissiveMap.isVideoTexture===!0&&ut.getTransfer(_.emissiveMap.colorSpace)===At,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Cn,flipSided:_.side===gn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Ae&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ae&&_.extensions.multiDraw===!0||A)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return ze.vertexUv1s=l.has(1),ze.vertexUv2s=l.has(2),ze.vertexUv3s=l.has(3),l.clear(),ze}function m(_){let v=[];if(_.shaderID?v.push(_.shaderID):(v.push(_.customVertexShaderID),v.push(_.customFragmentShaderID)),_.defines!==void 0)for(let P in _.defines)v.push(P),v.push(_.defines[P]);return _.isRawShaderMaterial===!1&&(g(v,_),y(v,_),v.push(n.outputColorSpace)),v.push(_.customProgramCacheKey),v.join()}function g(_,v){_.push(v.precision),_.push(v.outputColorSpace),_.push(v.envMapMode),_.push(v.envMapCubeUVHeight),_.push(v.mapUv),_.push(v.alphaMapUv),_.push(v.lightMapUv),_.push(v.aoMapUv),_.push(v.bumpMapUv),_.push(v.normalMapUv),_.push(v.displacementMapUv),_.push(v.emissiveMapUv),_.push(v.metalnessMapUv),_.push(v.roughnessMapUv),_.push(v.anisotropyMapUv),_.push(v.clearcoatMapUv),_.push(v.clearcoatNormalMapUv),_.push(v.clearcoatRoughnessMapUv),_.push(v.iridescenceMapUv),_.push(v.iridescenceThicknessMapUv),_.push(v.sheenColorMapUv),_.push(v.sheenRoughnessMapUv),_.push(v.specularMapUv),_.push(v.specularColorMapUv),_.push(v.specularIntensityMapUv),_.push(v.transmissionMapUv),_.push(v.thicknessMapUv),_.push(v.combine),_.push(v.fogExp2),_.push(v.sizeAttenuation),_.push(v.morphTargetsCount),_.push(v.morphAttributeCount),_.push(v.numDirLights),_.push(v.numPointLights),_.push(v.numSpotLights),_.push(v.numSpotLightMaps),_.push(v.numHemiLights),_.push(v.numRectAreaLights),_.push(v.numDirLightShadows),_.push(v.numPointLightShadows),_.push(v.numSpotLightShadows),_.push(v.numSpotLightShadowsWithMaps),_.push(v.numLightProbes),_.push(v.shadowMapType),_.push(v.toneMapping),_.push(v.numClippingPlanes),_.push(v.numClipIntersection),_.push(v.depthPacking)}function y(_,v){o.disableAll(),v.instancing&&o.enable(0),v.instancingColor&&o.enable(1),v.instancingMorph&&o.enable(2),v.matcap&&o.enable(3),v.envMap&&o.enable(4),v.normalMapObjectSpace&&o.enable(5),v.normalMapTangentSpace&&o.enable(6),v.clearcoat&&o.enable(7),v.iridescence&&o.enable(8),v.alphaTest&&o.enable(9),v.vertexColors&&o.enable(10),v.vertexAlphas&&o.enable(11),v.vertexUv1s&&o.enable(12),v.vertexUv2s&&o.enable(13),v.vertexUv3s&&o.enable(14),v.vertexTangents&&o.enable(15),v.anisotropy&&o.enable(16),v.alphaHash&&o.enable(17),v.batching&&o.enable(18),v.dispersion&&o.enable(19),v.batchingColor&&o.enable(20),v.gradientMap&&o.enable(21),v.packedNormalMap&&o.enable(22),v.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reversedDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),v.numLightProbeGrids>0&&o.enable(22),_.push(o.mask)}function M(_){let v=u[_.type],P;if(v){let R=vi[v];P=Fp.clone(R.uniforms)}else P=_.uniforms;return P}function w(_,v){let P=f.get(v);return P!==void 0?++P.usedTimes:(P=new fM(n,v,_,s),c.push(P),f.set(v,P)),P}function C(_){if(--_.usedTimes===0){let v=c.indexOf(_);c[v]=c[c.length-1],c.pop(),f.delete(_.cacheKey),_.destroy()}}function T(_){a.remove(_)}function D(){a.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:M,acquireProgram:w,releaseProgram:C,releaseShaderCache:T,programs:c,dispose:D}}function mM(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function gM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function im(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function sm(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(d){let u=0;return d.isInstancedMesh&&(u+=2),d.isSkinnedMesh&&(u+=1),u}function a(d,u,p,x,m,g){let y=n[e];return y===void 0?(y={id:d.id,object:d,geometry:u,material:p,materialVariant:o(d),groupOrder:x,renderOrder:d.renderOrder,z:m,group:g},n[e]=y):(y.id=d.id,y.object=d,y.geometry=u,y.material=p,y.materialVariant=o(d),y.groupOrder=x,y.renderOrder=d.renderOrder,y.z=m,y.group=g),e++,y}function l(d,u,p,x,m,g){let y=a(d,u,p,x,m,g);p.transmission>0?i.push(y):p.transparent===!0?s.push(y):t.push(y)}function c(d,u,p,x,m,g){let y=a(d,u,p,x,m,g);p.transmission>0?i.unshift(y):p.transparent===!0?s.unshift(y):t.unshift(y)}function f(d,u){t.length>1&&t.sort(d||gM),i.length>1&&i.sort(u||im),s.length>1&&s.sort(u||im)}function h(){for(let d=e,u=n.length;d<u;d++){let p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:h,sort:f}}function xM(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new sm,n.set(i,[o])):s>=r.length?(o=new sm,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function yM(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new V,color:new je};break;case"SpotLight":t={position:new V,direction:new V,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new je,groundColor:new je};break;case"RectAreaLight":t={color:new je,position:new V,halfWidth:new V,halfHeight:new V};break}return n[e.id]=t,t}}}function _M(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var vM=0;function MM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function bM(n){let e=new yM,t=_M(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new V);let s=new V,r=new mt,o=new mt;function a(c){let f=0,h=0,d=0;for(let v=0;v<9;v++)i.probe[v].set(0,0,0);let u=0,p=0,x=0,m=0,g=0,y=0,M=0,w=0,C=0,T=0,D=0;c.sort(MM);for(let v=0,P=c.length;v<P;v++){let R=c[v],N=R.color,X=R.intensity,q=R.distance,k=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===cs?k=R.shadow.map.texture:k=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)f+=N.r*X,h+=N.g*X,d+=N.b*X;else if(R.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(R.sh.coefficients[B],X);D++}else if(R.isDirectionalLight){let B=e.get(R);if(B.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let Y=R.shadow,le=t.get(R);le.shadowIntensity=Y.intensity,le.shadowBias=Y.bias,le.shadowNormalBias=Y.normalBias,le.shadowRadius=Y.radius,le.shadowMapSize=Y.mapSize,i.directionalShadow[u]=le,i.directionalShadowMap[u]=k,i.directionalShadowMatrix[u]=R.shadow.matrix,y++}i.directional[u]=B,u++}else if(R.isSpotLight){let B=e.get(R);B.position.setFromMatrixPosition(R.matrixWorld),B.color.copy(N).multiplyScalar(X),B.distance=q,B.coneCos=Math.cos(R.angle),B.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),B.decay=R.decay,i.spot[x]=B;let Y=R.shadow;if(R.map&&(i.spotLightMap[C]=R.map,C++,Y.updateMatrices(R),R.castShadow&&T++),i.spotLightMatrix[x]=Y.matrix,R.castShadow){let le=t.get(R);le.shadowIntensity=Y.intensity,le.shadowBias=Y.bias,le.shadowNormalBias=Y.normalBias,le.shadowRadius=Y.radius,le.shadowMapSize=Y.mapSize,i.spotShadow[x]=le,i.spotShadowMap[x]=k,w++}x++}else if(R.isRectAreaLight){let B=e.get(R);B.color.copy(N).multiplyScalar(X),B.halfWidth.set(R.width*.5,0,0),B.halfHeight.set(0,R.height*.5,0),i.rectArea[m]=B,m++}else if(R.isPointLight){let B=e.get(R);if(B.color.copy(R.color).multiplyScalar(R.intensity),B.distance=R.distance,B.decay=R.decay,R.castShadow){let Y=R.shadow,le=t.get(R);le.shadowIntensity=Y.intensity,le.shadowBias=Y.bias,le.shadowNormalBias=Y.normalBias,le.shadowRadius=Y.radius,le.shadowMapSize=Y.mapSize,le.shadowCameraNear=Y.camera.near,le.shadowCameraFar=Y.camera.far,i.pointShadow[p]=le,i.pointShadowMap[p]=k,i.pointShadowMatrix[p]=R.shadow.matrix,M++}i.point[p]=B,p++}else if(R.isHemisphereLight){let B=e.get(R);B.skyColor.copy(R.color).multiplyScalar(X),B.groundColor.copy(R.groundColor).multiplyScalar(X),i.hemi[g]=B,g++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Se.LTC_FLOAT_1,i.rectAreaLTC2=Se.LTC_FLOAT_2):(i.rectAreaLTC1=Se.LTC_HALF_1,i.rectAreaLTC2=Se.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=h,i.ambient[2]=d;let _=i.hash;(_.directionalLength!==u||_.pointLength!==p||_.spotLength!==x||_.rectAreaLength!==m||_.hemiLength!==g||_.numDirectionalShadows!==y||_.numPointShadows!==M||_.numSpotShadows!==w||_.numSpotMaps!==C||_.numLightProbes!==D)&&(i.directional.length=u,i.spot.length=x,i.rectArea.length=m,i.point.length=p,i.hemi.length=g,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=w+C-T,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=D,_.directionalLength=u,_.pointLength=p,_.spotLength=x,_.rectAreaLength=m,_.hemiLength=g,_.numDirectionalShadows=y,_.numPointShadows=M,_.numSpotShadows=w,_.numSpotMaps=C,_.numLightProbes=D,i.version=vM++)}function l(c,f){let h=0,d=0,u=0,p=0,x=0,m=f.matrixWorldInverse;for(let g=0,y=c.length;g<y;g++){let M=c[g];if(M.isDirectionalLight){let w=i.directional[h];w.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),h++}else if(M.isSpotLight){let w=i.spot[u];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),u++}else if(M.isRectAreaLight){let w=i.rectArea[p];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),w.halfWidth.set(M.width*.5,0,0),w.halfHeight.set(0,M.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),p++}else if(M.isPointLight){let w=i.point[d];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){let w=i.hemi[x];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function rm(n){let e=new bM(n),t=[],i=[],s=[];function r(d){h.camera=d,t.length=0,i.length=0,s.length=0}function o(d){t.push(d)}function a(d){i.push(d)}function l(d){s.push(d)}function c(){e.setup(t)}function f(d){e.setupView(t,d)}let h={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:f,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function wM(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new rm(n),e.set(s,[a])):r>=o.length?(a=new rm(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var TM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,EM=`uniform sampler2D shadow_pass;
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
}`,AM=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],RM=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],om=new mt,No=new V,cf=new V;function CM(n,e,t){let i=new pr,s=new Je,r=new Je,o=new Xt,a=new il,l=new sl,c={},f=t.maxTextureSize,h={[Di]:gn,[gn]:Di,[Cn]:Cn},d=new kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:TM,fragmentShader:EM}),u=d.clone();u.defines.HORIZONTAL_PASS=1;let p=new qt;p.setAttribute("position",new Jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ye(p,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=To;let g=this.type;this.render=function(T,D,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===tp&&($e("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=To);let v=n.getRenderTarget(),P=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),N=n.state;N.setBlending(gi),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let X=g!==this.type;X&&D.traverse(function(q){q.material&&(Array.isArray(q.material)?q.material.forEach(k=>k.needsUpdate=!0):q.material.needsUpdate=!0)});for(let q=0,k=T.length;q<k;q++){let B=T[q],Y=B.shadow;if(Y===void 0){$e("WebGLShadowMap:",B,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);let le=Y.getFrameExtents();s.multiply(le),r.copy(Y.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(r.x=Math.floor(f/le.x),s.x=r.x*le.x,Y.mapSize.x=r.x),s.y>f&&(r.y=Math.floor(f/le.y),s.y=r.y*le.y,Y.mapSize.y=r.y));let fe=n.state.buffers.depth.getReversed();if(Y.camera._reversedDepth=fe,Y.map===null||X===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===gr){if(B.isPointLight){$e("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new Un(s.x,s.y,{format:cs,type:yi,minFilter:mn,magFilter:mn,generateMipmaps:!1}),Y.map.texture.name=B.name+".shadowMap",Y.map.depthTexture=new Fi(s.x,s.y,qn),Y.map.depthTexture.name=B.name+".shadowMapDepth",Y.map.depthTexture.format=ci,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=un,Y.map.depthTexture.magFilter=un}else B.isPointLight?(Y.map=new hc(s.x),Y.map.depthTexture=new el(s.x,ti)):(Y.map=new Un(s.x,s.y),Y.map.depthTexture=new Fi(s.x,s.y,ti)),Y.map.depthTexture.name=B.name+".shadowMap",Y.map.depthTexture.format=ci,this.type===To?(Y.map.depthTexture.compareFunction=fe?oc:rc,Y.map.depthTexture.minFilter=mn,Y.map.depthTexture.magFilter=mn):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=un,Y.map.depthTexture.magFilter=un);Y.camera.updateProjectionMatrix()}let _e=Y.map.isWebGLCubeRenderTarget?6:1;for(let Ce=0;Ce<_e;Ce++){if(Y.map.isWebGLCubeRenderTarget)n.setRenderTarget(Y.map,Ce),n.clear();else{Ce===0&&(n.setRenderTarget(Y.map),n.clear());let Ue=Y.getViewport(Ce);o.set(r.x*Ue.x,r.y*Ue.y,r.x*Ue.z,r.y*Ue.w),N.viewport(o)}if(B.isPointLight){let Ue=Y.camera,Z=Y.matrix,F=B.distance||Ue.far;F!==Ue.far&&(Ue.far=F,Ue.updateProjectionMatrix()),No.setFromMatrixPosition(B.matrixWorld),Ue.position.copy(No),cf.copy(Ue.position),cf.add(AM[Ce]),Ue.up.copy(RM[Ce]),Ue.lookAt(cf),Ue.updateMatrixWorld(),Z.makeTranslation(-No.x,-No.y,-No.z),om.multiplyMatrices(Ue.projectionMatrix,Ue.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(om,Ue.coordinateSystem,Ue.reversedDepth)}else Y.updateMatrices(B);i=Y.getFrustum(),w(D,_,Y.camera,B,this.type)}Y.isPointLightShadow!==!0&&this.type===gr&&y(Y,_),Y.needsUpdate=!1}g=this.type,m.needsUpdate=!1,n.setRenderTarget(v,P,R)};function y(T,D){let _=e.update(x);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,u.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,u.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Un(s.x,s.y,{format:cs,type:yi})),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(D,null,_,d,x,null),u.uniforms.shadow_pass.value=T.mapPass.texture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(D,null,_,u,x,null)}function M(T,D,_,v){let P=null,R=_.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(R!==void 0)P=R;else if(P=_.isPointLight===!0?l:a,n.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){let N=P.uuid,X=D.uuid,q=c[N];q===void 0&&(q={},c[N]=q);let k=q[X];k===void 0&&(k=P.clone(),q[X]=k,D.addEventListener("dispose",C)),P=k}if(P.visible=D.visible,P.wireframe=D.wireframe,v===gr?P.side=D.shadowSide!==null?D.shadowSide:D.side:P.side=D.shadowSide!==null?D.shadowSide:h[D.side],P.alphaMap=D.alphaMap,P.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,P.map=D.map,P.clipShadows=D.clipShadows,P.clippingPlanes=D.clippingPlanes,P.clipIntersection=D.clipIntersection,P.displacementMap=D.displacementMap,P.displacementScale=D.displacementScale,P.displacementBias=D.displacementBias,P.wireframeLinewidth=D.wireframeLinewidth,P.linewidth=D.linewidth,_.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let N=n.properties.get(P);N.light=_}return P}function w(T,D,_,v,P){if(T.visible===!1)return;if(T.layers.test(D.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&P===gr)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,T.matrixWorld);let X=e.update(T),q=T.material;if(Array.isArray(q)){let k=X.groups;for(let B=0,Y=k.length;B<Y;B++){let le=k[B],fe=q[le.materialIndex];if(fe&&fe.visible){let _e=M(T,fe,v,P);T.onBeforeShadow(n,T,D,_,X,_e,le),n.renderBufferDirect(_,null,X,_e,T,le),T.onAfterShadow(n,T,D,_,X,_e,le)}}}else if(q.visible){let k=M(T,q,v,P);T.onBeforeShadow(n,T,D,_,X,k,null),n.renderBufferDirect(_,null,X,k,T,null),T.onAfterShadow(n,T,D,_,X,k,null)}}let N=T.children;for(let X=0,q=N.length;X<q;X++)w(N[X],D,_,v,P)}function C(T){T.target.removeEventListener("dispose",C);for(let _ in c){let v=c[_],P=T.target.uuid;P in v&&(v[P].dispose(),delete v[P])}}}function SM(n,e){function t(){let H=!1,Te=new Xt,oe=null,Ne=new Xt(0,0,0,0);return{setMask:function(Ae){oe!==Ae&&!H&&(n.colorMask(Ae,Ae,Ae,Ae),oe=Ae)},setLocked:function(Ae){H=Ae},setClear:function(Ae,me,ze,st,jt){jt===!0&&(Ae*=st,me*=st,ze*=st),Te.set(Ae,me,ze,st),Ne.equals(Te)===!1&&(n.clearColor(Ae,me,ze,st),Ne.copy(Te))},reset:function(){H=!1,oe=null,Ne.set(-1,0,0,0)}}}function i(){let H=!1,Te=!1,oe=null,Ne=null,Ae=null;return{setReversed:function(me){if(Te!==me){let ze=e.get("EXT_clip_control");me?ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.ZERO_TO_ONE_EXT):ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.NEGATIVE_ONE_TO_ONE_EXT),Te=me;let st=Ae;Ae=null,this.setClear(st)}},getReversed:function(){return Te},setTest:function(me){me?U(n.DEPTH_TEST):K(n.DEPTH_TEST)},setMask:function(me){oe!==me&&!H&&(n.depthMask(me),oe=me)},setFunc:function(me){if(Te&&(me=Np[me]),Ne!==me){switch(me){case Oa:n.depthFunc(n.NEVER);break;case Ba:n.depthFunc(n.ALWAYS);break;case za:n.depthFunc(n.LESS);break;case Es:n.depthFunc(n.LEQUAL);break;case Ha:n.depthFunc(n.EQUAL);break;case Va:n.depthFunc(n.GEQUAL);break;case Ga:n.depthFunc(n.GREATER);break;case Wa:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ne=me}},setLocked:function(me){H=me},setClear:function(me){Ae!==me&&(Ae=me,Te&&(me=1-me),n.clearDepth(me))},reset:function(){H=!1,oe=null,Ne=null,Ae=null,Te=!1}}}function s(){let H=!1,Te=null,oe=null,Ne=null,Ae=null,me=null,ze=null,st=null,jt=null;return{setTest:function(Ct){H||(Ct?U(n.STENCIL_TEST):K(n.STENCIL_TEST))},setMask:function(Ct){Te!==Ct&&!H&&(n.stencilMask(Ct),Te=Ct)},setFunc:function(Ct,Mi,ni){(oe!==Ct||Ne!==Mi||Ae!==ni)&&(n.stencilFunc(Ct,Mi,ni),oe=Ct,Ne=Mi,Ae=ni)},setOp:function(Ct,Mi,ni){(me!==Ct||ze!==Mi||st!==ni)&&(n.stencilOp(Ct,Mi,ni),me=Ct,ze=Mi,st=ni)},setLocked:function(Ct){H=Ct},setClear:function(Ct){jt!==Ct&&(n.clearStencil(Ct),jt=Ct)},reset:function(){H=!1,Te=null,oe=null,Ne=null,Ae=null,me=null,ze=null,st=null,jt=null}}}let r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap,f={},h={},d={},u=new WeakMap,p=[],x=null,m=!1,g=null,y=null,M=null,w=null,C=null,T=null,D=null,_=new je(0,0,0),v=0,P=!1,R=null,N=null,X=null,q=null,k=null,B=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,le=0,fe=n.getParameter(n.VERSION);fe.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec(fe)[1]),Y=le>=1):fe.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec(fe)[1]),Y=le>=2);let _e=null,Ce={},Ue=n.getParameter(n.SCISSOR_BOX),Z=n.getParameter(n.VIEWPORT),F=new Xt().fromArray(Ue),z=new Xt().fromArray(Z);function S(H,Te,oe,Ne){let Ae=new Uint8Array(4),me=n.createTexture();n.bindTexture(H,me),n.texParameteri(H,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(H,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ze=0;ze<oe;ze++)H===n.TEXTURE_3D||H===n.TEXTURE_2D_ARRAY?n.texImage3D(Te,0,n.RGBA,1,1,Ne,0,n.RGBA,n.UNSIGNED_BYTE,Ae):n.texImage2D(Te+ze,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ae);return me}let L={};L[n.TEXTURE_2D]=S(n.TEXTURE_2D,n.TEXTURE_2D,1),L[n.TEXTURE_CUBE_MAP]=S(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),L[n.TEXTURE_2D_ARRAY]=S(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),L[n.TEXTURE_3D]=S(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),U(n.DEPTH_TEST),o.setFunc(Es),qe(!1),Qe(Uh),U(n.CULL_FACE),ie(gi);function U(H){f[H]!==!0&&(n.enable(H),f[H]=!0)}function K(H){f[H]!==!1&&(n.disable(H),f[H]=!1)}function ge(H,Te){return d[H]!==Te?(n.bindFramebuffer(H,Te),d[H]=Te,H===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=Te),H===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=Te),!0):!1}function A(H,Te){let oe=p,Ne=!1;if(H){oe=u.get(Te),oe===void 0&&(oe=[],u.set(Te,oe));let Ae=H.textures;if(oe.length!==Ae.length||oe[0]!==n.COLOR_ATTACHMENT0){for(let me=0,ze=Ae.length;me<ze;me++)oe[me]=n.COLOR_ATTACHMENT0+me;oe.length=Ae.length,Ne=!0}}else oe[0]!==n.BACK&&(oe[0]=n.BACK,Ne=!0);Ne&&n.drawBuffers(oe)}function J(H){return x!==H?(n.useProgram(H),x=H,!0):!1}let G={[ts]:n.FUNC_ADD,[ip]:n.FUNC_SUBTRACT,[sp]:n.FUNC_REVERSE_SUBTRACT};G[rp]=n.MIN,G[op]=n.MAX;let se={[ap]:n.ZERO,[lp]:n.ONE,[cp]:n.SRC_COLOR,[ka]:n.SRC_ALPHA,[mp]:n.SRC_ALPHA_SATURATE,[up]:n.DST_COLOR,[fp]:n.DST_ALPHA,[hp]:n.ONE_MINUS_SRC_COLOR,[Fa]:n.ONE_MINUS_SRC_ALPHA,[pp]:n.ONE_MINUS_DST_COLOR,[dp]:n.ONE_MINUS_DST_ALPHA,[gp]:n.CONSTANT_COLOR,[xp]:n.ONE_MINUS_CONSTANT_COLOR,[yp]:n.CONSTANT_ALPHA,[_p]:n.ONE_MINUS_CONSTANT_ALPHA};function ie(H,Te,oe,Ne,Ae,me,ze,st,jt,Ct){if(H===gi){m===!0&&(K(n.BLEND),m=!1);return}if(m===!1&&(U(n.BLEND),m=!0),H!==np){if(H!==g||Ct!==P){if((y!==ts||C!==ts)&&(n.blendEquation(n.FUNC_ADD),y=ts,C=ts),Ct)switch(H){case es:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case On:n.blendFunc(n.ONE,n.ONE);break;case kh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Fh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Ze("WebGLState: Invalid blending: ",H);break}else switch(H){case es:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case On:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case kh:Ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Fh:Ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ze("WebGLState: Invalid blending: ",H);break}M=null,w=null,T=null,D=null,_.set(0,0,0),v=0,g=H,P=Ct}return}Ae=Ae||Te,me=me||oe,ze=ze||Ne,(Te!==y||Ae!==C)&&(n.blendEquationSeparate(G[Te],G[Ae]),y=Te,C=Ae),(oe!==M||Ne!==w||me!==T||ze!==D)&&(n.blendFuncSeparate(se[oe],se[Ne],se[me],se[ze]),M=oe,w=Ne,T=me,D=ze),(st.equals(_)===!1||jt!==v)&&(n.blendColor(st.r,st.g,st.b,jt),_.copy(st),v=jt),g=H,P=!1}function pe(H,Te){H.side===Cn?K(n.CULL_FACE):U(n.CULL_FACE);let oe=H.side===gn;Te&&(oe=!oe),qe(oe),H.blending===es&&H.transparent===!1?ie(gi):ie(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),o.setFunc(H.depthFunc),o.setTest(H.depthTest),o.setMask(H.depthWrite),r.setMask(H.colorWrite);let Ne=H.stencilWrite;a.setTest(Ne),Ne&&(a.setMask(H.stencilWriteMask),a.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),a.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),O(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?U(n.SAMPLE_ALPHA_TO_COVERAGE):K(n.SAMPLE_ALPHA_TO_COVERAGE)}function qe(H){R!==H&&(H?n.frontFace(n.CW):n.frontFace(n.CCW),R=H)}function Qe(H){H!==Qu?(U(n.CULL_FACE),H!==N&&(H===Uh?n.cullFace(n.BACK):H===ep?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):K(n.CULL_FACE),N=H}function Rt(H){H!==X&&(Y&&n.lineWidth(H),X=H)}function O(H,Te,oe){H?(U(n.POLYGON_OFFSET_FILL),(q!==Te||k!==oe)&&(q=Te,k=oe,o.getReversed()&&(Te=-Te),n.polygonOffset(Te,oe))):K(n.POLYGON_OFFSET_FILL)}function Tt(H){H?U(n.SCISSOR_TEST):K(n.SCISSOR_TEST)}function tt(H){H===void 0&&(H=n.TEXTURE0+B-1),_e!==H&&(n.activeTexture(H),_e=H)}function ot(H,Te,oe){oe===void 0&&(_e===null?oe=n.TEXTURE0+B-1:oe=_e);let Ne=Ce[oe];Ne===void 0&&(Ne={type:void 0,texture:void 0},Ce[oe]=Ne),(Ne.type!==H||Ne.texture!==Te)&&(_e!==oe&&(n.activeTexture(oe),_e=oe),n.bindTexture(H,Te||L[H]),Ne.type=H,Ne.texture=Te)}function ve(){let H=Ce[_e];H!==void 0&&H.type!==void 0&&(n.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function _t(){try{n.compressedTexImage2D(...arguments)}catch(H){Ze("WebGLState:",H)}}function I(){try{n.compressedTexImage3D(...arguments)}catch(H){Ze("WebGLState:",H)}}function b(){try{n.texSubImage2D(...arguments)}catch(H){Ze("WebGLState:",H)}}function j(){try{n.texSubImage3D(...arguments)}catch(H){Ze("WebGLState:",H)}}function ae(){try{n.compressedTexSubImage2D(...arguments)}catch(H){Ze("WebGLState:",H)}}function xe(){try{n.compressedTexSubImage3D(...arguments)}catch(H){Ze("WebGLState:",H)}}function be(){try{n.texStorage2D(...arguments)}catch(H){Ze("WebGLState:",H)}}function Re(){try{n.texStorage3D(...arguments)}catch(H){Ze("WebGLState:",H)}}function re(){try{n.texImage2D(...arguments)}catch(H){Ze("WebGLState:",H)}}function ce(){try{n.texImage3D(...arguments)}catch(H){Ze("WebGLState:",H)}}function De(H){return h[H]!==void 0?h[H]:n.getParameter(H)}function Fe(H,Te){h[H]!==Te&&(n.pixelStorei(H,Te),h[H]=Te)}function Ee(H){F.equals(H)===!1&&(n.scissor(H.x,H.y,H.z,H.w),F.copy(H))}function we(H){z.equals(H)===!1&&(n.viewport(H.x,H.y,H.z,H.w),z.copy(H))}function nt(H,Te){let oe=c.get(Te);oe===void 0&&(oe=new WeakMap,c.set(Te,oe));let Ne=oe.get(H);Ne===void 0&&(Ne=n.getUniformBlockIndex(Te,H.name),oe.set(H,Ne))}function at(H,Te){let Ne=c.get(Te).get(H);l.get(Te)!==Ne&&(n.uniformBlockBinding(Te,Ne,H.__bindingPointIndex),l.set(Te,Ne))}function vt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),f={},h={},_e=null,Ce={},d={},u=new WeakMap,p=[],x=null,m=!1,g=null,y=null,M=null,w=null,C=null,T=null,D=null,_=new je(0,0,0),v=0,P=!1,R=null,N=null,X=null,q=null,k=null,F.set(0,0,n.canvas.width,n.canvas.height),z.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:U,disable:K,bindFramebuffer:ge,drawBuffers:A,useProgram:J,setBlending:ie,setMaterial:pe,setFlipSided:qe,setCullFace:Qe,setLineWidth:Rt,setPolygonOffset:O,setScissorTest:Tt,activeTexture:tt,bindTexture:ot,unbindTexture:ve,compressedTexImage2D:_t,compressedTexImage3D:I,texImage2D:re,texImage3D:ce,pixelStorei:Fe,getParameter:De,updateUBOMapping:nt,uniformBlockBinding:at,texStorage2D:be,texStorage3D:Re,texSubImage2D:b,texSubImage3D:j,compressedTexSubImage2D:ae,compressedTexSubImage3D:xe,scissor:Ee,viewport:we,reset:vt}}function PM(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Je,f=new WeakMap,h=new Set,d,u=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(I,b){return p?new OffscreenCanvas(I,b):io("canvas")}function m(I,b,j){let ae=1,xe=_t(I);if((xe.width>j||xe.height>j)&&(ae=j/Math.max(xe.width,xe.height)),ae<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let be=Math.floor(ae*xe.width),Re=Math.floor(ae*xe.height);d===void 0&&(d=x(be,Re));let re=b?x(be,Re):d;return re.width=be,re.height=Re,re.getContext("2d").drawImage(I,0,0,be,Re),$e("WebGLRenderer: Texture has been resized from ("+xe.width+"x"+xe.height+") to ("+be+"x"+Re+")."),re}else return"data"in I&&$e("WebGLRenderer: Image in DataTexture is too big ("+xe.width+"x"+xe.height+")."),I;return I}function g(I){return I.generateMipmaps}function y(I){n.generateMipmap(I)}function M(I){return I.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?n.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(I,b,j,ae,xe,be=!1){if(I!==null){if(n[I]!==void 0)return n[I];$e("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Re;ae&&(Re=e.get("EXT_texture_norm16"),Re||$e("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let re=b;if(b===n.RED&&(j===n.FLOAT&&(re=n.R32F),j===n.HALF_FLOAT&&(re=n.R16F),j===n.UNSIGNED_BYTE&&(re=n.R8),j===n.UNSIGNED_SHORT&&Re&&(re=Re.R16_EXT),j===n.SHORT&&Re&&(re=Re.R16_SNORM_EXT)),b===n.RED_INTEGER&&(j===n.UNSIGNED_BYTE&&(re=n.R8UI),j===n.UNSIGNED_SHORT&&(re=n.R16UI),j===n.UNSIGNED_INT&&(re=n.R32UI),j===n.BYTE&&(re=n.R8I),j===n.SHORT&&(re=n.R16I),j===n.INT&&(re=n.R32I)),b===n.RG&&(j===n.FLOAT&&(re=n.RG32F),j===n.HALF_FLOAT&&(re=n.RG16F),j===n.UNSIGNED_BYTE&&(re=n.RG8),j===n.UNSIGNED_SHORT&&Re&&(re=Re.RG16_EXT),j===n.SHORT&&Re&&(re=Re.RG16_SNORM_EXT)),b===n.RG_INTEGER&&(j===n.UNSIGNED_BYTE&&(re=n.RG8UI),j===n.UNSIGNED_SHORT&&(re=n.RG16UI),j===n.UNSIGNED_INT&&(re=n.RG32UI),j===n.BYTE&&(re=n.RG8I),j===n.SHORT&&(re=n.RG16I),j===n.INT&&(re=n.RG32I)),b===n.RGB_INTEGER&&(j===n.UNSIGNED_BYTE&&(re=n.RGB8UI),j===n.UNSIGNED_SHORT&&(re=n.RGB16UI),j===n.UNSIGNED_INT&&(re=n.RGB32UI),j===n.BYTE&&(re=n.RGB8I),j===n.SHORT&&(re=n.RGB16I),j===n.INT&&(re=n.RGB32I)),b===n.RGBA_INTEGER&&(j===n.UNSIGNED_BYTE&&(re=n.RGBA8UI),j===n.UNSIGNED_SHORT&&(re=n.RGBA16UI),j===n.UNSIGNED_INT&&(re=n.RGBA32UI),j===n.BYTE&&(re=n.RGBA8I),j===n.SHORT&&(re=n.RGBA16I),j===n.INT&&(re=n.RGBA32I)),b===n.RGB&&(j===n.UNSIGNED_SHORT&&Re&&(re=Re.RGB16_EXT),j===n.SHORT&&Re&&(re=Re.RGB16_SNORM_EXT),j===n.UNSIGNED_INT_5_9_9_9_REV&&(re=n.RGB9_E5),j===n.UNSIGNED_INT_10F_11F_11F_REV&&(re=n.R11F_G11F_B10F)),b===n.RGBA){let ce=be?no:ut.getTransfer(xe);j===n.FLOAT&&(re=n.RGBA32F),j===n.HALF_FLOAT&&(re=n.RGBA16F),j===n.UNSIGNED_BYTE&&(re=ce===At?n.SRGB8_ALPHA8:n.RGBA8),j===n.UNSIGNED_SHORT&&Re&&(re=Re.RGBA16_EXT),j===n.SHORT&&Re&&(re=Re.RGBA16_SNORM_EXT),j===n.UNSIGNED_SHORT_4_4_4_4&&(re=n.RGBA4),j===n.UNSIGNED_SHORT_5_5_5_1&&(re=n.RGB5_A1)}return(re===n.R16F||re===n.R32F||re===n.RG16F||re===n.RG32F||re===n.RGBA16F||re===n.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function C(I,b){let j;return I?b===null||b===ti||b===yr?j=n.DEPTH24_STENCIL8:b===qn?j=n.DEPTH32F_STENCIL8:b===xr&&(j=n.DEPTH24_STENCIL8,$e("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ti||b===yr?j=n.DEPTH_COMPONENT24:b===qn?j=n.DEPTH_COMPONENT32F:b===xr&&(j=n.DEPTH_COMPONENT16),j}function T(I,b){return g(I)===!0||I.isFramebufferTexture&&I.minFilter!==un&&I.minFilter!==mn?Math.log2(Math.max(b.width,b.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?b.mipmaps.length:1}function D(I){let b=I.target;b.removeEventListener("dispose",D),v(b),b.isVideoTexture&&f.delete(b),b.isHTMLTexture&&h.delete(b)}function _(I){let b=I.target;b.removeEventListener("dispose",_),R(b)}function v(I){let b=i.get(I);if(b.__webglInit===void 0)return;let j=I.source,ae=u.get(j);if(ae){let xe=ae[b.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&P(I),Object.keys(ae).length===0&&u.delete(j)}i.remove(I)}function P(I){let b=i.get(I);n.deleteTexture(b.__webglTexture);let j=I.source,ae=u.get(j);delete ae[b.__cacheKey],o.memory.textures--}function R(I){let b=i.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),i.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(b.__webglFramebuffer[ae]))for(let xe=0;xe<b.__webglFramebuffer[ae].length;xe++)n.deleteFramebuffer(b.__webglFramebuffer[ae][xe]);else n.deleteFramebuffer(b.__webglFramebuffer[ae]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[ae])}else{if(Array.isArray(b.__webglFramebuffer))for(let ae=0;ae<b.__webglFramebuffer.length;ae++)n.deleteFramebuffer(b.__webglFramebuffer[ae]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ae=0;ae<b.__webglColorRenderbuffer.length;ae++)b.__webglColorRenderbuffer[ae]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[ae]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let j=I.textures;for(let ae=0,xe=j.length;ae<xe;ae++){let be=i.get(j[ae]);be.__webglTexture&&(n.deleteTexture(be.__webglTexture),o.memory.textures--),i.remove(j[ae])}i.remove(I)}let N=0;function X(){N=0}function q(){return N}function k(I){N=I}function B(){let I=N;return I>=s.maxTextures&&$e("WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),N+=1,I}function Y(I){let b=[];return b.push(I.wrapS),b.push(I.wrapT),b.push(I.wrapR||0),b.push(I.magFilter),b.push(I.minFilter),b.push(I.anisotropy),b.push(I.internalFormat),b.push(I.format),b.push(I.type),b.push(I.generateMipmaps),b.push(I.premultiplyAlpha),b.push(I.flipY),b.push(I.unpackAlignment),b.push(I.colorSpace),b.join()}function le(I,b){let j=i.get(I);if(I.isVideoTexture&&ot(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&j.__version!==I.version){let ae=I.image;if(ae===null)$e("WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)$e("WebGLRenderer: Texture marked for update but image is incomplete");else{K(j,I,b);return}}else I.isExternalTexture&&(j.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,j.__webglTexture,n.TEXTURE0+b)}function fe(I,b){let j=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&j.__version!==I.version){K(j,I,b);return}else I.isExternalTexture&&(j.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,j.__webglTexture,n.TEXTURE0+b)}function _e(I,b){let j=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&j.__version!==I.version){K(j,I,b);return}t.bindTexture(n.TEXTURE_3D,j.__webglTexture,n.TEXTURE0+b)}function Ce(I,b){let j=i.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&j.__version!==I.version){ge(j,I,b);return}t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture,n.TEXTURE0+b)}let Ue={[Li]:n.REPEAT,[li]:n.CLAMP_TO_EDGE,[Xa]:n.MIRRORED_REPEAT},Z={[un]:n.NEAREST,[bp]:n.NEAREST_MIPMAP_NEAREST,[Ao]:n.NEAREST_MIPMAP_LINEAR,[mn]:n.LINEAR,[vl]:n.LINEAR_MIPMAP_NEAREST,[xi]:n.LINEAR_MIPMAP_LINEAR},F={[Ep]:n.NEVER,[Pp]:n.ALWAYS,[Ap]:n.LESS,[rc]:n.LEQUAL,[Rp]:n.EQUAL,[oc]:n.GEQUAL,[Cp]:n.GREATER,[Sp]:n.NOTEQUAL};function z(I,b){if(b.type===qn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===mn||b.magFilter===vl||b.magFilter===Ao||b.magFilter===xi||b.minFilter===mn||b.minFilter===vl||b.minFilter===Ao||b.minFilter===xi)&&$e("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(I,n.TEXTURE_WRAP_S,Ue[b.wrapS]),n.texParameteri(I,n.TEXTURE_WRAP_T,Ue[b.wrapT]),(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)&&n.texParameteri(I,n.TEXTURE_WRAP_R,Ue[b.wrapR]),n.texParameteri(I,n.TEXTURE_MAG_FILTER,Z[b.magFilter]),n.texParameteri(I,n.TEXTURE_MIN_FILTER,Z[b.minFilter]),b.compareFunction&&(n.texParameteri(I,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(I,n.TEXTURE_COMPARE_FUNC,F[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===un||b.minFilter!==Ao&&b.minFilter!==xi||b.type===qn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){let j=e.get("EXT_texture_filter_anisotropic");n.texParameterf(I,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function S(I,b){let j=!1;I.__webglInit===void 0&&(I.__webglInit=!0,b.addEventListener("dispose",D));let ae=b.source,xe=u.get(ae);xe===void 0&&(xe={},u.set(ae,xe));let be=Y(b);if(be!==I.__cacheKey){xe[be]===void 0&&(xe[be]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,j=!0),xe[be].usedTimes++;let Re=xe[I.__cacheKey];Re!==void 0&&(xe[I.__cacheKey].usedTimes--,Re.usedTimes===0&&P(b)),I.__cacheKey=be,I.__webglTexture=xe[be].texture}return j}function L(I,b,j){return Math.floor(Math.floor(I/j)/b)}function U(I,b,j,ae){let be=I.updateRanges;if(be.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,b.width,b.height,j,ae,b.data);else{be.sort((Fe,Ee)=>Fe.start-Ee.start);let Re=0;for(let Fe=1;Fe<be.length;Fe++){let Ee=be[Re],we=be[Fe],nt=Ee.start+Ee.count,at=L(we.start,b.width,4),vt=L(Ee.start,b.width,4);we.start<=nt+1&&at===vt&&L(we.start+we.count-1,b.width,4)===at?Ee.count=Math.max(Ee.count,we.start+we.count-Ee.start):(++Re,be[Re]=we)}be.length=Re+1;let re=t.getParameter(n.UNPACK_ROW_LENGTH),ce=t.getParameter(n.UNPACK_SKIP_PIXELS),De=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,b.width);for(let Fe=0,Ee=be.length;Fe<Ee;Fe++){let we=be[Fe],nt=Math.floor(we.start/4),at=Math.ceil(we.count/4),vt=nt%b.width,H=Math.floor(nt/b.width),Te=at,oe=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,vt),t.pixelStorei(n.UNPACK_SKIP_ROWS,H),t.texSubImage2D(n.TEXTURE_2D,0,vt,H,Te,oe,j,ae,b.data)}I.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,re),t.pixelStorei(n.UNPACK_SKIP_PIXELS,ce),t.pixelStorei(n.UNPACK_SKIP_ROWS,De)}}function K(I,b,j){let ae=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ae=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ae=n.TEXTURE_3D);let xe=S(I,b),be=b.source;t.bindTexture(ae,I.__webglTexture,n.TEXTURE0+j);let Re=i.get(be);if(be.version!==Re.__version||xe===!0){if(t.activeTexture(n.TEXTURE0+j),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){let oe=ut.getPrimaries(ut.workingColorSpace),Ne=b.colorSpace===Oi?null:ut.getPrimaries(b.colorSpace),Ae=b.colorSpace===Oi||oe===Ne?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae)}t.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment);let ce=m(b.image,!1,s.maxTextureSize);ce=ve(b,ce);let De=r.convert(b.format,b.colorSpace),Fe=r.convert(b.type),Ee=w(b.internalFormat,De,Fe,b.normalized,b.colorSpace,b.isVideoTexture);z(ae,b);let we,nt=b.mipmaps,at=b.isVideoTexture!==!0,vt=Re.__version===void 0||xe===!0,H=be.dataReady,Te=T(b,ce);if(b.isDepthTexture)Ee=C(b.format===ls,b.type),vt&&(at?t.texStorage2D(n.TEXTURE_2D,1,Ee,ce.width,ce.height):t.texImage2D(n.TEXTURE_2D,0,Ee,ce.width,ce.height,0,De,Fe,null));else if(b.isDataTexture)if(nt.length>0){at&&vt&&t.texStorage2D(n.TEXTURE_2D,Te,Ee,nt[0].width,nt[0].height);for(let oe=0,Ne=nt.length;oe<Ne;oe++)we=nt[oe],at?H&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,we.width,we.height,De,Fe,we.data):t.texImage2D(n.TEXTURE_2D,oe,Ee,we.width,we.height,0,De,Fe,we.data);b.generateMipmaps=!1}else at?(vt&&t.texStorage2D(n.TEXTURE_2D,Te,Ee,ce.width,ce.height),H&&U(b,ce,De,Fe)):t.texImage2D(n.TEXTURE_2D,0,Ee,ce.width,ce.height,0,De,Fe,ce.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){at&&vt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Te,Ee,nt[0].width,nt[0].height,ce.depth);for(let oe=0,Ne=nt.length;oe<Ne;oe++)if(we=nt[oe],b.format!==Yn)if(De!==null)if(at){if(H)if(b.layerUpdates.size>0){let Ae=nf(we.width,we.height,b.format,b.type);for(let me of b.layerUpdates){let ze=we.data.subarray(me*Ae/we.data.BYTES_PER_ELEMENT,(me+1)*Ae/we.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,me,we.width,we.height,1,De,ze)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,0,we.width,we.height,ce.depth,De,we.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,oe,Ee,we.width,we.height,ce.depth,0,we.data,0,0);else $e("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else at?H&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,0,we.width,we.height,ce.depth,De,Fe,we.data):t.texImage3D(n.TEXTURE_2D_ARRAY,oe,Ee,we.width,we.height,ce.depth,0,De,Fe,we.data)}else{at&&vt&&t.texStorage2D(n.TEXTURE_2D,Te,Ee,nt[0].width,nt[0].height);for(let oe=0,Ne=nt.length;oe<Ne;oe++)we=nt[oe],b.format!==Yn?De!==null?at?H&&t.compressedTexSubImage2D(n.TEXTURE_2D,oe,0,0,we.width,we.height,De,we.data):t.compressedTexImage2D(n.TEXTURE_2D,oe,Ee,we.width,we.height,0,we.data):$e("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?H&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,we.width,we.height,De,Fe,we.data):t.texImage2D(n.TEXTURE_2D,oe,Ee,we.width,we.height,0,De,Fe,we.data)}else if(b.isDataArrayTexture)if(at){if(vt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Te,Ee,ce.width,ce.height,ce.depth),H)if(b.layerUpdates.size>0){let oe=nf(ce.width,ce.height,b.format,b.type);for(let Ne of b.layerUpdates){let Ae=ce.data.subarray(Ne*oe/ce.data.BYTES_PER_ELEMENT,(Ne+1)*oe/ce.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ne,ce.width,ce.height,1,De,Fe,Ae)}b.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,De,Fe,ce.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ee,ce.width,ce.height,ce.depth,0,De,Fe,ce.data);else if(b.isData3DTexture)at?(vt&&t.texStorage3D(n.TEXTURE_3D,Te,Ee,ce.width,ce.height,ce.depth),H&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,De,Fe,ce.data)):t.texImage3D(n.TEXTURE_3D,0,Ee,ce.width,ce.height,ce.depth,0,De,Fe,ce.data);else if(b.isFramebufferTexture){if(vt)if(at)t.texStorage2D(n.TEXTURE_2D,Te,Ee,ce.width,ce.height);else{let oe=ce.width,Ne=ce.height;for(let Ae=0;Ae<Te;Ae++)t.texImage2D(n.TEXTURE_2D,Ae,Ee,oe,Ne,0,De,Fe,null),oe>>=1,Ne>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in n){let oe=n.canvas;if(oe.hasAttribute("layoutsubtree")||oe.setAttribute("layoutsubtree","true"),ce.parentNode!==oe){oe.appendChild(ce),h.add(b),oe.onpaint=st=>{let jt=st.changedElements;for(let Ct of h)jt.includes(Ct.image)&&(Ct.needsUpdate=!0)},oe.requestPaint();return}let Ne=0,Ae=n.RGBA,me=n.RGBA,ze=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,Ne,Ae,me,ze,ce),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(nt.length>0){if(at&&vt){let oe=_t(nt[0]);t.texStorage2D(n.TEXTURE_2D,Te,Ee,oe.width,oe.height)}for(let oe=0,Ne=nt.length;oe<Ne;oe++)we=nt[oe],at?H&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,De,Fe,we):t.texImage2D(n.TEXTURE_2D,oe,Ee,De,Fe,we);b.generateMipmaps=!1}else if(at){if(vt){let oe=_t(ce);t.texStorage2D(n.TEXTURE_2D,Te,Ee,oe.width,oe.height)}H&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,De,Fe,ce)}else t.texImage2D(n.TEXTURE_2D,0,Ee,De,Fe,ce);g(b)&&y(ae),Re.__version=be.version,b.onUpdate&&b.onUpdate(b)}I.__version=b.version}function ge(I,b,j){if(b.image.length!==6)return;let ae=S(I,b),xe=b.source;t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+j);let be=i.get(xe);if(xe.version!==be.__version||ae===!0){t.activeTexture(n.TEXTURE0+j);let Re=ut.getPrimaries(ut.workingColorSpace),re=b.colorSpace===Oi?null:ut.getPrimaries(b.colorSpace),ce=b.colorSpace===Oi||Re===re?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);let De=b.isCompressedTexture||b.image[0].isCompressedTexture,Fe=b.image[0]&&b.image[0].isDataTexture,Ee=[];for(let me=0;me<6;me++)!De&&!Fe?Ee[me]=m(b.image[me],!0,s.maxCubemapSize):Ee[me]=Fe?b.image[me].image:b.image[me],Ee[me]=ve(b,Ee[me]);let we=Ee[0],nt=r.convert(b.format,b.colorSpace),at=r.convert(b.type),vt=w(b.internalFormat,nt,at,b.normalized,b.colorSpace),H=b.isVideoTexture!==!0,Te=be.__version===void 0||ae===!0,oe=xe.dataReady,Ne=T(b,we);z(n.TEXTURE_CUBE_MAP,b);let Ae;if(De){H&&Te&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ne,vt,we.width,we.height);for(let me=0;me<6;me++){Ae=Ee[me].mipmaps;for(let ze=0;ze<Ae.length;ze++){let st=Ae[ze];b.format!==Yn?nt!==null?H?oe&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,ze,0,0,st.width,st.height,nt,st.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,ze,vt,st.width,st.height,0,st.data):$e("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,ze,0,0,st.width,st.height,nt,at,st.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,ze,vt,st.width,st.height,0,nt,at,st.data)}}}else{if(Ae=b.mipmaps,H&&Te){Ae.length>0&&Ne++;let me=_t(Ee[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ne,vt,me.width,me.height)}for(let me=0;me<6;me++)if(Fe){H?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Ee[me].width,Ee[me].height,nt,at,Ee[me].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,vt,Ee[me].width,Ee[me].height,0,nt,at,Ee[me].data);for(let ze=0;ze<Ae.length;ze++){let jt=Ae[ze].image[me].image;H?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,ze+1,0,0,jt.width,jt.height,nt,at,jt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,ze+1,vt,jt.width,jt.height,0,nt,at,jt.data)}}else{H?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,nt,at,Ee[me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,vt,nt,at,Ee[me]);for(let ze=0;ze<Ae.length;ze++){let st=Ae[ze];H?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,ze+1,0,0,nt,at,st.image[me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,ze+1,vt,nt,at,st.image[me])}}}g(b)&&y(n.TEXTURE_CUBE_MAP),be.__version=xe.version,b.onUpdate&&b.onUpdate(b)}I.__version=b.version}function A(I,b,j,ae,xe,be){let Re=r.convert(j.format,j.colorSpace),re=r.convert(j.type),ce=w(j.internalFormat,Re,re,j.normalized,j.colorSpace),De=i.get(b),Fe=i.get(j);if(Fe.__renderTarget=b,!De.__hasExternalTextures){let Ee=Math.max(1,b.width>>be),we=Math.max(1,b.height>>be);xe===n.TEXTURE_3D||xe===n.TEXTURE_2D_ARRAY?t.texImage3D(xe,be,ce,Ee,we,b.depth,0,Re,re,null):t.texImage2D(xe,be,ce,Ee,we,0,Re,re,null)}t.bindFramebuffer(n.FRAMEBUFFER,I),tt(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ae,xe,Fe.__webglTexture,0,Tt(b)):(xe===n.TEXTURE_2D||xe>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&xe<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ae,xe,Fe.__webglTexture,be),t.bindFramebuffer(n.FRAMEBUFFER,null)}function J(I,b,j){if(n.bindRenderbuffer(n.RENDERBUFFER,I),b.depthBuffer){let ae=b.depthTexture,xe=ae&&ae.isDepthTexture?ae.type:null,be=C(b.stencilBuffer,xe),Re=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;tt(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Tt(b),be,b.width,b.height):j?n.renderbufferStorageMultisample(n.RENDERBUFFER,Tt(b),be,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,be,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Re,n.RENDERBUFFER,I)}else{let ae=b.textures;for(let xe=0;xe<ae.length;xe++){let be=ae[xe],Re=r.convert(be.format,be.colorSpace),re=r.convert(be.type),ce=w(be.internalFormat,Re,re,be.normalized,be.colorSpace);tt(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Tt(b),ce,b.width,b.height):j?n.renderbufferStorageMultisample(n.RENDERBUFFER,Tt(b),ce,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,ce,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function G(I,b,j){let ae=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,I),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let xe=i.get(b.depthTexture);if(xe.__renderTarget=b,(!xe.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),ae){if(xe.__webglInit===void 0&&(xe.__webglInit=!0,b.depthTexture.addEventListener("dispose",D)),xe.__webglTexture===void 0){xe.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,xe.__webglTexture),z(n.TEXTURE_CUBE_MAP,b.depthTexture);let De=r.convert(b.depthTexture.format),Fe=r.convert(b.depthTexture.type),Ee;b.depthTexture.format===ci?Ee=n.DEPTH_COMPONENT24:b.depthTexture.format===ls&&(Ee=n.DEPTH24_STENCIL8);for(let we=0;we<6;we++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,Ee,b.width,b.height,0,De,Fe,null)}}else le(b.depthTexture,0);let be=xe.__webglTexture,Re=Tt(b),re=ae?n.TEXTURE_CUBE_MAP_POSITIVE_X+j:n.TEXTURE_2D,ce=b.depthTexture.format===ls?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(b.depthTexture.format===ci)tt(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ce,re,be,0,Re):n.framebufferTexture2D(n.FRAMEBUFFER,ce,re,be,0);else if(b.depthTexture.format===ls)tt(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ce,re,be,0,Re):n.framebufferTexture2D(n.FRAMEBUFFER,ce,re,be,0);else throw new Error("Unknown depthTexture format")}function se(I){let b=i.get(I),j=I.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==I.depthTexture){let ae=I.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ae){let xe=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ae.removeEventListener("dispose",xe)};ae.addEventListener("dispose",xe),b.__depthDisposeCallback=xe}b.__boundDepthTexture=ae}if(I.depthTexture&&!b.__autoAllocateDepthBuffer)if(j)for(let ae=0;ae<6;ae++)G(b.__webglFramebuffer[ae],I,ae);else{let ae=I.texture.mipmaps;ae&&ae.length>0?G(b.__webglFramebuffer[0],I,0):G(b.__webglFramebuffer,I,0)}else if(j){b.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)if(t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[ae]),b.__webglDepthbuffer[ae]===void 0)b.__webglDepthbuffer[ae]=n.createRenderbuffer(),J(b.__webglDepthbuffer[ae],I,!1);else{let xe=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,be=b.__webglDepthbuffer[ae];n.bindRenderbuffer(n.RENDERBUFFER,be),n.framebufferRenderbuffer(n.FRAMEBUFFER,xe,n.RENDERBUFFER,be)}}else{let ae=I.texture.mipmaps;if(ae&&ae.length>0?t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=n.createRenderbuffer(),J(b.__webglDepthbuffer,I,!1);else{let xe=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,be=b.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,be),n.framebufferRenderbuffer(n.FRAMEBUFFER,xe,n.RENDERBUFFER,be)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ie(I,b,j){let ae=i.get(I);b!==void 0&&A(ae.__webglFramebuffer,I,I.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),j!==void 0&&se(I)}function pe(I){let b=I.texture,j=i.get(I),ae=i.get(b);I.addEventListener("dispose",_);let xe=I.textures,be=I.isWebGLCubeRenderTarget===!0,Re=xe.length>1;if(Re||(ae.__webglTexture===void 0&&(ae.__webglTexture=n.createTexture()),ae.__version=b.version,o.memory.textures++),be){j.__webglFramebuffer=[];for(let re=0;re<6;re++)if(b.mipmaps&&b.mipmaps.length>0){j.__webglFramebuffer[re]=[];for(let ce=0;ce<b.mipmaps.length;ce++)j.__webglFramebuffer[re][ce]=n.createFramebuffer()}else j.__webglFramebuffer[re]=n.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){j.__webglFramebuffer=[];for(let re=0;re<b.mipmaps.length;re++)j.__webglFramebuffer[re]=n.createFramebuffer()}else j.__webglFramebuffer=n.createFramebuffer();if(Re)for(let re=0,ce=xe.length;re<ce;re++){let De=i.get(xe[re]);De.__webglTexture===void 0&&(De.__webglTexture=n.createTexture(),o.memory.textures++)}if(I.samples>0&&tt(I)===!1){j.__webglMultisampledFramebuffer=n.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let re=0;re<xe.length;re++){let ce=xe[re];j.__webglColorRenderbuffer[re]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,j.__webglColorRenderbuffer[re]);let De=r.convert(ce.format,ce.colorSpace),Fe=r.convert(ce.type),Ee=w(ce.internalFormat,De,Fe,ce.normalized,ce.colorSpace,I.isXRRenderTarget===!0),we=Tt(I);n.renderbufferStorageMultisample(n.RENDERBUFFER,we,Ee,I.width,I.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+re,n.RENDERBUFFER,j.__webglColorRenderbuffer[re])}n.bindRenderbuffer(n.RENDERBUFFER,null),I.depthBuffer&&(j.__webglDepthRenderbuffer=n.createRenderbuffer(),J(j.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(be){t.bindTexture(n.TEXTURE_CUBE_MAP,ae.__webglTexture),z(n.TEXTURE_CUBE_MAP,b);for(let re=0;re<6;re++)if(b.mipmaps&&b.mipmaps.length>0)for(let ce=0;ce<b.mipmaps.length;ce++)A(j.__webglFramebuffer[re][ce],I,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+re,ce);else A(j.__webglFramebuffer[re],I,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);g(b)&&y(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Re){for(let re=0,ce=xe.length;re<ce;re++){let De=xe[re],Fe=i.get(De),Ee=n.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Ee=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ee,Fe.__webglTexture),z(Ee,De),A(j.__webglFramebuffer,I,De,n.COLOR_ATTACHMENT0+re,Ee,0),g(De)&&y(Ee)}t.unbindTexture()}else{let re=n.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(re=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(re,ae.__webglTexture),z(re,b),b.mipmaps&&b.mipmaps.length>0)for(let ce=0;ce<b.mipmaps.length;ce++)A(j.__webglFramebuffer[ce],I,b,n.COLOR_ATTACHMENT0,re,ce);else A(j.__webglFramebuffer,I,b,n.COLOR_ATTACHMENT0,re,0);g(b)&&y(re),t.unbindTexture()}I.depthBuffer&&se(I)}function qe(I){let b=I.textures;for(let j=0,ae=b.length;j<ae;j++){let xe=b[j];if(g(xe)){let be=M(I),Re=i.get(xe).__webglTexture;t.bindTexture(be,Re),y(be),t.unbindTexture()}}}let Qe=[],Rt=[];function O(I){if(I.samples>0){if(tt(I)===!1){let b=I.textures,j=I.width,ae=I.height,xe=n.COLOR_BUFFER_BIT,be=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Re=i.get(I),re=b.length>1;if(re)for(let De=0;De<b.length;De++)t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer);let ce=I.texture.mipmaps;ce&&ce.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Re.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let De=0;De<b.length;De++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(xe|=n.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(xe|=n.STENCIL_BUFFER_BIT)),re){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Re.__webglColorRenderbuffer[De]);let Fe=i.get(b[De]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Fe,0)}n.blitFramebuffer(0,0,j,ae,0,0,j,ae,xe,n.NEAREST),l===!0&&(Qe.length=0,Rt.length=0,Qe.push(n.COLOR_ATTACHMENT0+De),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Qe.push(be),Rt.push(be),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Rt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Qe))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),re)for(let De=0;De<b.length;De++){t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.RENDERBUFFER,Re.__webglColorRenderbuffer[De]);let Fe=i.get(b[De]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.TEXTURE_2D,Fe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){let b=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}}function Tt(I){return Math.min(s.maxSamples,I.samples)}function tt(I){let b=i.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ot(I){let b=o.render.frame;f.get(I)!==b&&(f.set(I,b),I.update())}function ve(I,b){let j=I.colorSpace,ae=I.format,xe=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||j!==to&&j!==Oi&&(ut.getTransfer(j)===At?(ae!==Yn||xe!==Sn)&&$e("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ze("WebGLTextures: Unsupported texture color space:",j)),b}function _t(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=X,this.getTextureUnits=q,this.setTextureUnits=k,this.setTexture2D=le,this.setTexture2DArray=fe,this.setTexture3D=_e,this.setTextureCube=Ce,this.rebindTextures=ie,this.setupRenderTarget=pe,this.updateRenderTargetMipmap=qe,this.updateMultisampleRenderTarget=O,this.setupDepthRenderbuffer=se,this.setupFrameBufferTexture=A,this.useMultisampledRTT=tt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function IM(n,e){function t(i,s=Oi){let r,o=ut.getTransfer(s);if(i===Sn)return n.UNSIGNED_BYTE;if(i===bl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===wl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Zh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===$h)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===qh)return n.BYTE;if(i===Yh)return n.SHORT;if(i===xr)return n.UNSIGNED_SHORT;if(i===Ml)return n.INT;if(i===ti)return n.UNSIGNED_INT;if(i===qn)return n.FLOAT;if(i===yi)return n.HALF_FLOAT;if(i===Kh)return n.ALPHA;if(i===Jh)return n.RGB;if(i===Yn)return n.RGBA;if(i===ci)return n.DEPTH_COMPONENT;if(i===ls)return n.DEPTH_STENCIL;if(i===Tl)return n.RED;if(i===El)return n.RED_INTEGER;if(i===cs)return n.RG;if(i===Al)return n.RG_INTEGER;if(i===Rl)return n.RGBA_INTEGER;if(i===Ro||i===Co||i===So||i===Po)if(o===At)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ro)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Co)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===So)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Po)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ro)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Co)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===So)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Po)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Cl||i===Sl||i===Pl||i===Il)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Cl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Sl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Pl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Il)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Dl||i===Ll||i===Nl||i===Ul||i===kl||i===Io||i===Fl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Dl||i===Ll)return o===At?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Nl)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ul)return r.COMPRESSED_R11_EAC;if(i===kl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Io)return r.COMPRESSED_RG11_EAC;if(i===Fl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Ol||i===Bl||i===zl||i===Hl||i===Vl||i===Gl||i===Wl||i===Xl||i===ql||i===Yl||i===Zl||i===$l||i===Kl||i===Jl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ol)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Bl)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===zl)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Hl)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Vl)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Gl)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Wl)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Xl)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ql)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Yl)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Zl)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===$l)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Kl)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Jl)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===jl||i===Ql||i===ec)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===jl)return o===At?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ql)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ec)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===tc||i===nc||i===Do||i===ic)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===tc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===nc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Do)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ic)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===yr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var DM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,LM=`
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

}`,xf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new mo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new kn({vertexShader:DM,fragmentShader:LM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ye(new Xn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},yf=class extends hi{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,f=null,h=null,d=null,u=null,p=null,x=typeof XRWebGLBinding<"u",m=new xf,g={},y=t.getContextAttributes(),M=null,w=null,C=[],T=[],D=new Je,_=null,v=new Mn;v.viewport=new Xt;let P=new Mn;P.viewport=new Xt;let R=[v,P],N=new gl,X=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(S){let L=C[S];return L===void 0&&(L=new dr,C[S]=L),L.getTargetRaySpace()},this.getControllerGrip=function(S){let L=C[S];return L===void 0&&(L=new dr,C[S]=L),L.getGripSpace()},this.getHand=function(S){let L=C[S];return L===void 0&&(L=new dr,C[S]=L),L.getHandSpace()};function k(S){let L=T.indexOf(S.inputSource);if(L===-1)return;let U=C[L];U!==void 0&&(U.update(S.inputSource,S.frame,c||o),U.dispatchEvent({type:S.type,data:S.inputSource}))}function B(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",Y);for(let S=0;S<C.length;S++){let L=T[S];L!==null&&(T[S]=null,C[S].disconnect(L))}X=null,q=null,m.reset();for(let S in g)delete g[S];e.setRenderTarget(M),u=null,d=null,h=null,s=null,w=null,z.stop(),i.isPresenting=!1,e.setPixelRatio(_),e.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(S){r=S,i.isPresenting===!0&&$e("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(S){a=S,i.isPresenting===!0&&$e("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(S){c=S},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(S){if(s=S,s!==null){if(M=e.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",B),s.addEventListener("inputsourceschange",Y),y.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(D),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let U=null,K=null,ge=null;y.depth&&(ge=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,U=y.stencil?ls:ci,K=y.stencil?yr:ti);let A={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(A),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),w=new Un(d.textureWidth,d.textureHeight,{format:Yn,type:Sn,depthTexture:new Fi(d.textureWidth,d.textureHeight,K,void 0,void 0,void 0,void 0,void 0,void 0,U),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let U={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,t,U),s.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),w=new Un(u.framebufferWidth,u.framebufferHeight,{format:Yn,type:Sn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),z.setContext(s),z.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Y(S){for(let L=0;L<S.removed.length;L++){let U=S.removed[L],K=T.indexOf(U);K>=0&&(T[K]=null,C[K].disconnect(U))}for(let L=0;L<S.added.length;L++){let U=S.added[L],K=T.indexOf(U);if(K===-1){for(let A=0;A<C.length;A++)if(A>=T.length){T.push(U),K=A;break}else if(T[A]===null){T[A]=U,K=A;break}if(K===-1)break}let ge=C[K];ge&&ge.connect(U)}}let le=new V,fe=new V;function _e(S,L,U){le.setFromMatrixPosition(L.matrixWorld),fe.setFromMatrixPosition(U.matrixWorld);let K=le.distanceTo(fe),ge=L.projectionMatrix.elements,A=U.projectionMatrix.elements,J=ge[14]/(ge[10]-1),G=ge[14]/(ge[10]+1),se=(ge[9]+1)/ge[5],ie=(ge[9]-1)/ge[5],pe=(ge[8]-1)/ge[0],qe=(A[8]+1)/A[0],Qe=J*pe,Rt=J*qe,O=K/(-pe+qe),Tt=O*-pe;if(L.matrixWorld.decompose(S.position,S.quaternion,S.scale),S.translateX(Tt),S.translateZ(O),S.matrixWorld.compose(S.position,S.quaternion,S.scale),S.matrixWorldInverse.copy(S.matrixWorld).invert(),ge[10]===-1)S.projectionMatrix.copy(L.projectionMatrix),S.projectionMatrixInverse.copy(L.projectionMatrixInverse);else{let tt=J+O,ot=G+O,ve=Qe-Tt,_t=Rt+(K-Tt),I=se*G/ot*tt,b=ie*G/ot*tt;S.projectionMatrix.makePerspective(ve,_t,I,b,tt,ot),S.projectionMatrixInverse.copy(S.projectionMatrix).invert()}}function Ce(S,L){L===null?S.matrixWorld.copy(S.matrix):S.matrixWorld.multiplyMatrices(L.matrixWorld,S.matrix),S.matrixWorldInverse.copy(S.matrixWorld).invert()}this.updateCamera=function(S){if(s===null)return;let L=S.near,U=S.far;m.texture!==null&&(m.depthNear>0&&(L=m.depthNear),m.depthFar>0&&(U=m.depthFar)),N.near=P.near=v.near=L,N.far=P.far=v.far=U,(X!==N.near||q!==N.far)&&(s.updateRenderState({depthNear:N.near,depthFar:N.far}),X=N.near,q=N.far),N.layers.mask=S.layers.mask|6,v.layers.mask=N.layers.mask&-5,P.layers.mask=N.layers.mask&-3;let K=S.parent,ge=N.cameras;Ce(N,K);for(let A=0;A<ge.length;A++)Ce(ge[A],K);ge.length===2?_e(N,v,P):N.projectionMatrix.copy(v.projectionMatrix),Ue(S,N,K)};function Ue(S,L,U){U===null?S.matrix.copy(L.matrixWorld):(S.matrix.copy(U.matrixWorld),S.matrix.invert(),S.matrix.multiply(L.matrixWorld)),S.matrix.decompose(S.position,S.quaternion,S.scale),S.updateMatrixWorld(!0),S.projectionMatrix.copy(L.projectionMatrix),S.projectionMatrixInverse.copy(L.projectionMatrixInverse),S.isPerspectiveCamera&&(S.fov=$a*2*Math.atan(1/S.projectionMatrix.elements[5]),S.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(d===null&&u===null))return l},this.setFoveation=function(S){l=S,d!==null&&(d.fixedFoveation=S),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=S)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function(S){return g[S]};let Z=null;function F(S,L){if(f=L.getViewerPose(c||o),p=L,f!==null){let U=f.views;u!==null&&(e.setRenderTargetFramebuffer(w,u.framebuffer),e.setRenderTarget(w));let K=!1;U.length!==N.cameras.length&&(N.cameras.length=0,K=!0);for(let G=0;G<U.length;G++){let se=U[G],ie=null;if(u!==null)ie=u.getViewport(se);else{let qe=h.getViewSubImage(d,se);ie=qe.viewport,G===0&&(e.setRenderTargetTextures(w,qe.colorTexture,qe.depthStencilTexture),e.setRenderTarget(w))}let pe=R[G];pe===void 0&&(pe=new Mn,pe.layers.enable(G),pe.viewport=new Xt,R[G]=pe),pe.matrix.fromArray(se.transform.matrix),pe.matrix.decompose(pe.position,pe.quaternion,pe.scale),pe.projectionMatrix.fromArray(se.projectionMatrix),pe.projectionMatrixInverse.copy(pe.projectionMatrix).invert(),pe.viewport.set(ie.x,ie.y,ie.width,ie.height),G===0&&(N.matrix.copy(pe.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),K===!0&&N.cameras.push(pe)}let ge=s.enabledFeatures;if(ge&&ge.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){h=i.getBinding();let G=h.getDepthInformation(U[0]);G&&G.isValid&&G.texture&&m.init(G,s.renderState)}if(ge&&ge.includes("camera-access")&&x){e.state.unbindTexture(),h=i.getBinding();for(let G=0;G<U.length;G++){let se=U[G].camera;if(se){let ie=g[se];ie||(ie=new mo,g[se]=ie);let pe=h.getCameraImage(se);ie.sourceTexture=pe}}}}for(let U=0;U<C.length;U++){let K=T[U],ge=C[U];K!==null&&ge!==void 0&&ge.update(K,L,c||o)}Z&&Z(S,L),L.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:L}),p=null}let z=new am;z.setAnimationLoop(F),this.setAnimationLoop=function(S){Z=S},this.dispose=function(){}}},NM=new mt,um=new it;um.set(-1,0,0,0,1,0,0,0,1);function UM(n,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function i(m,g){g.color.getRGB(m.fogColor.value,Qh(n)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,y,M,w){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),h(m,g)):g.isMeshPhongMaterial?(r(m,g),f(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),d(m,g),g.isMeshPhysicalMaterial&&u(m,g,w)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),x(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,y,M):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===gn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===gn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let y=e.get(g),M=y.envMap,w=y.envMapRotation;M&&(m.envMap.value=M,m.envMapRotation.value.setFromMatrix4(NM.makeRotationFromEuler(w)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(um),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,y,M){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*y,m.scale.value=M*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function f(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function h(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function d(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function u(m,g,y){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===gn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){let y=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function kM(n,e,t,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,M){let w=M.program;i.uniformBlockBinding(y,w)}function c(y,M){let w=s[y.id];w===void 0&&(p(y),w=f(y),s[y.id]=w,y.addEventListener("dispose",m));let C=M.program;i.updateUBOMapping(y,C);let T=e.render.frame;r[y.id]!==T&&(d(y),r[y.id]=T)}function f(y){let M=h();y.__bindingPointIndex=M;let w=n.createBuffer(),C=y.__size,T=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,C,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,w),w}function h(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return Ze("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let M=s[y.id],w=y.uniforms,C=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let T=0,D=w.length;T<D;T++){let _=Array.isArray(w[T])?w[T]:[w[T]];for(let v=0,P=_.length;v<P;v++){let R=_[v];if(u(R,T,v,C)===!0){let N=R.__offset,X=Array.isArray(R.value)?R.value:[R.value],q=0;for(let k=0;k<X.length;k++){let B=X[k],Y=x(B);typeof B=="number"||typeof B=="boolean"?(R.__data[0]=B,n.bufferSubData(n.UNIFORM_BUFFER,N+q,R.__data)):B.isMatrix3?(R.__data[0]=B.elements[0],R.__data[1]=B.elements[1],R.__data[2]=B.elements[2],R.__data[3]=0,R.__data[4]=B.elements[3],R.__data[5]=B.elements[4],R.__data[6]=B.elements[5],R.__data[7]=0,R.__data[8]=B.elements[6],R.__data[9]=B.elements[7],R.__data[10]=B.elements[8],R.__data[11]=0):ArrayBuffer.isView(B)?R.__data.set(new B.constructor(B.buffer,B.byteOffset,R.__data.length)):(B.toArray(R.__data,q),q+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,N,R.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function u(y,M,w,C){let T=y.value,D=M+"_"+w;if(C[D]===void 0)return typeof T=="number"||typeof T=="boolean"?C[D]=T:ArrayBuffer.isView(T)?C[D]=T.slice():C[D]=T.clone(),!0;{let _=C[D];if(typeof T=="number"||typeof T=="boolean"){if(_!==T)return C[D]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(_.equals(T)===!1)return _.copy(T),!0}}return!1}function p(y){let M=y.uniforms,w=0,C=16;for(let D=0,_=M.length;D<_;D++){let v=Array.isArray(M[D])?M[D]:[M[D]];for(let P=0,R=v.length;P<R;P++){let N=v[P],X=Array.isArray(N.value)?N.value:[N.value];for(let q=0,k=X.length;q<k;q++){let B=X[q],Y=x(B),le=w%C,fe=le%Y.boundary,_e=le+fe;w+=fe,_e!==0&&C-_e<Y.storage&&(w+=C-_e),N.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=w,w+=Y.storage}}}let T=w%C;return T>0&&(w+=C-T),y.__size=w,y.__cache={},this}function x(y){let M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?$e("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(M.boundary=16,M.storage=y.byteLength):$e("WebGLRenderer: Unsupported uniform value type.",y),M}function m(y){let M=y.target;M.removeEventListener("dispose",m);let w=o.indexOf(M.__bindingPointIndex);o.splice(w,1),n.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function g(){for(let y in s)n.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:c,dispose:g}}var FM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),_i=null;function OM(){return _i===null&&(_i=new fo(FM,16,16,cs,yi),_i.name="DFG_LUT",_i.minFilter=mn,_i.magFilter=mn,_i.wrapS=li,_i.wrapT=li,_i.generateMipmaps=!1,_i.needsUpdate=!0),_i}var fc=class{constructor(e={}){let{canvas:t=Ip(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:u=Sn}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let x=u,m=new Set([Rl,Al,El]),g=new Set([Sn,ti,xr,yr,bl,wl]),y=new Uint32Array(4),M=new Int32Array(4),w=new V,C=null,T=null,D=[],_=[],v=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ei,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,R=!1,N=null;this._outputColorSpace=sn;let X=0,q=0,k=null,B=-1,Y=null,le=new Xt,fe=new Xt,_e=null,Ce=new je(0),Ue=0,Z=t.width,F=t.height,z=1,S=null,L=null,U=new Xt(0,0,Z,F),K=new Xt(0,0,Z,F),ge=!1,A=new pr,J=!1,G=!1,se=new mt,ie=new V,pe=new Xt,qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Qe=!1;function Rt(){return k===null?z:1}let O=i;function Tt(E,$){return t.getContext(E,$)}try{let E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"184"}`),t.addEventListener("webglcontextlost",me,!1),t.addEventListener("webglcontextrestored",ze,!1),t.addEventListener("webglcontextcreationerror",st,!1),O===null){let $="webgl2";if(O=Tt($,E),O===null)throw Tt($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw Ze("WebGLRenderer: "+E.message),E}let tt,ot,ve,_t,I,b,j,ae,xe,be,Re,re,ce,De,Fe,Ee,we,nt,at,vt,H,Te,oe;function Ne(){tt=new X_(O),tt.init(),H=new IM(O,tt),ot=new F_(O,tt,e,H),ve=new SM(O,tt),ot.reversedDepthBuffer&&d&&ve.buffers.depth.setReversed(!0),_t=new Z_(O),I=new mM,b=new PM(O,tt,ve,I,ot,H,_t),j=new W_(P),ae=new jg(O),Te=new U_(O,ae),xe=new q_(O,ae,_t,Te),be=new K_(O,xe,ae,Te,_t),nt=new $_(O,ot,b),Fe=new O_(I),Re=new pM(P,j,tt,ot,Te,Fe),re=new UM(P,I),ce=new xM,De=new wM(tt),we=new N_(P,j,ve,be,p,l),Ee=new CM(P,be,ot),oe=new kM(O,_t,ot,ve),at=new k_(O,tt,_t),vt=new Y_(O,tt,_t),_t.programs=Re.programs,P.capabilities=ot,P.extensions=tt,P.properties=I,P.renderLists=ce,P.shadowMap=Ee,P.state=ve,P.info=_t}Ne(),x!==Sn&&(v=new j_(x,t.width,t.height,s,r));let Ae=new yf(P,O);this.xr=Ae,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let E=tt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=tt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(E){E!==void 0&&(z=E,this.setSize(Z,F,!1))},this.getSize=function(E){return E.set(Z,F)},this.setSize=function(E,$,te=!0){if(Ae.isPresenting){$e("WebGLRenderer: Can't change size while VR device is presenting.");return}Z=E,F=$,t.width=Math.floor(E*z),t.height=Math.floor($*z),te===!0&&(t.style.width=E+"px",t.style.height=$+"px"),v!==null&&v.setSize(t.width,t.height),this.setViewport(0,0,E,$)},this.getDrawingBufferSize=function(E){return E.set(Z*z,F*z).floor()},this.setDrawingBufferSize=function(E,$,te){Z=E,F=$,z=te,t.width=Math.floor(E*te),t.height=Math.floor($*te),this.setViewport(0,0,E,$)},this.setEffects=function(E){if(x===Sn){Ze("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let $=0;$<E.length;$++)if(E[$].isOutputPass===!0){$e("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}v.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(le)},this.getViewport=function(E){return E.copy(U)},this.setViewport=function(E,$,te,Q){E.isVector4?U.set(E.x,E.y,E.z,E.w):U.set(E,$,te,Q),ve.viewport(le.copy(U).multiplyScalar(z).round())},this.getScissor=function(E){return E.copy(K)},this.setScissor=function(E,$,te,Q){E.isVector4?K.set(E.x,E.y,E.z,E.w):K.set(E,$,te,Q),ve.scissor(fe.copy(K).multiplyScalar(z).round())},this.getScissorTest=function(){return ge},this.setScissorTest=function(E){ve.setScissorTest(ge=E)},this.setOpaqueSort=function(E){S=E},this.setTransparentSort=function(E){L=E},this.getClearColor=function(E){return E.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor(...arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha(...arguments)},this.clear=function(E=!0,$=!0,te=!0){let Q=0;if(E){let ee=!1;if(k!==null){let Ie=k.texture.format;ee=m.has(Ie)}if(ee){let Ie=k.texture.type,Oe=g.has(Ie),Pe=we.getClearColor(),Be=we.getClearAlpha(),Ve=Pe.r,rt=Pe.g,ht=Pe.b;Oe?(y[0]=Ve,y[1]=rt,y[2]=ht,y[3]=Be,O.clearBufferuiv(O.COLOR,0,y)):(M[0]=Ve,M[1]=rt,M[2]=ht,M[3]=Be,O.clearBufferiv(O.COLOR,0,M))}else Q|=O.COLOR_BUFFER_BIT}$&&(Q|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),te&&(Q|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Q!==0&&O.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),N=E},this.dispose=function(){t.removeEventListener("webglcontextlost",me,!1),t.removeEventListener("webglcontextrestored",ze,!1),t.removeEventListener("webglcontextcreationerror",st,!1),we.dispose(),ce.dispose(),De.dispose(),I.dispose(),j.dispose(),be.dispose(),Te.dispose(),oe.dispose(),Re.dispose(),Ae.dispose(),Ae.removeEventListener("sessionstart",Tf),Ae.removeEventListener("sessionend",Ef),us.stop()};function me(E){E.preventDefault(),so("WebGLRenderer: Context Lost."),R=!0}function ze(){so("WebGLRenderer: Context Restored."),R=!1;let E=_t.autoReset,$=Ee.enabled,te=Ee.autoUpdate,Q=Ee.needsUpdate,ee=Ee.type;Ne(),_t.autoReset=E,Ee.enabled=$,Ee.autoUpdate=te,Ee.needsUpdate=Q,Ee.type=ee}function st(E){Ze("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function jt(E){let $=E.target;$.removeEventListener("dispose",jt),Ct($)}function Ct(E){Mi(E),I.remove(E)}function Mi(E){let $=I.get(E).programs;$!==void 0&&($.forEach(function(te){Re.releaseProgram(te)}),E.isShaderMaterial&&Re.releaseShaderCache(E))}this.renderBufferDirect=function(E,$,te,Q,ee,Ie){$===null&&($=qe);let Oe=ee.isMesh&&ee.matrixWorld.determinant()<0,Pe=km(E,$,te,Q,ee);ve.setMaterial(Q,Oe);let Be=te.index,Ve=1;if(Q.wireframe===!0){if(Be=xe.getWireframeAttribute(te),Be===void 0)return;Ve=2}let rt=te.drawRange,ht=te.attributes.position,Xe=rt.start*Ve,St=(rt.start+rt.count)*Ve;Ie!==null&&(Xe=Math.max(Xe,Ie.start*Ve),St=Math.min(St,(Ie.start+Ie.count)*Ve)),Be!==null?(Xe=Math.max(Xe,0),St=Math.min(St,Be.count)):ht!=null&&(Xe=Math.max(Xe,0),St=Math.min(St,ht.count));let Qt=St-Xe;if(Qt<0||Qt===1/0)return;Te.setup(ee,Q,Pe,te,Be);let Zt,It=at;if(Be!==null&&(Zt=ae.get(Be),It=vt,It.setIndex(Zt)),ee.isMesh)Q.wireframe===!0?(ve.setLineWidth(Q.wireframeLinewidth*Rt()),It.setMode(O.LINES)):It.setMode(O.TRIANGLES);else if(ee.isLine){let xn=Q.linewidth;xn===void 0&&(xn=1),ve.setLineWidth(xn*Rt()),ee.isLineSegments?It.setMode(O.LINES):ee.isLineLoop?It.setMode(O.LINE_LOOP):It.setMode(O.LINE_STRIP)}else ee.isPoints?It.setMode(O.POINTS):ee.isSprite&&It.setMode(O.TRIANGLES);if(ee.isBatchedMesh)if(tt.get("WEBGL_multi_draw"))It.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else{let xn=ee._multiDrawStarts,ke=ee._multiDrawCounts,Pn=ee._multiDrawCount,xt=Be?ae.get(Be).bytesPerElement:1,Bn=I.get(Q).currentProgram.getUniforms();for(let ii=0;ii<Pn;ii++)Bn.setValue(O,"_gl_DrawID",ii),It.render(xn[ii]/xt,ke[ii])}else if(ee.isInstancedMesh)It.renderInstances(Xe,Qt,ee.count);else if(te.isInstancedBufferGeometry){let xn=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,ke=Math.min(te.instanceCount,xn);It.renderInstances(Xe,Qt,ke)}else It.render(Xe,Qt)};function ni(E,$,te){E.transparent===!0&&E.side===Cn&&E.forceSinglePass===!1?(E.side=gn,E.needsUpdate=!0,Bo(E,$,te),E.side=Di,E.needsUpdate=!0,Bo(E,$,te),E.side=Cn):Bo(E,$,te)}this.compile=function(E,$,te=null){te===null&&(te=E),T=De.get(te),T.init($),_.push(T),te.traverseVisible(function(ee){ee.isLight&&ee.layers.test($.layers)&&(T.pushLight(ee),ee.castShadow&&T.pushShadow(ee))}),E!==te&&E.traverseVisible(function(ee){ee.isLight&&ee.layers.test($.layers)&&(T.pushLight(ee),ee.castShadow&&T.pushShadow(ee))}),T.setupLights();let Q=new Set;return E.traverse(function(ee){if(!(ee.isMesh||ee.isPoints||ee.isLine||ee.isSprite))return;let Ie=ee.material;if(Ie)if(Array.isArray(Ie))for(let Oe=0;Oe<Ie.length;Oe++){let Pe=Ie[Oe];ni(Pe,te,ee),Q.add(Pe)}else ni(Ie,te,ee),Q.add(Ie)}),T=_.pop(),Q},this.compileAsync=function(E,$,te=null){let Q=this.compile(E,$,te);return new Promise(ee=>{function Ie(){if(Q.forEach(function(Oe){I.get(Oe).currentProgram.isReady()&&Q.delete(Oe)}),Q.size===0){ee(E);return}setTimeout(Ie,10)}tt.get("KHR_parallel_shader_compile")!==null?Ie():setTimeout(Ie,10)})};let _c=null;function Nm(E){_c&&_c(E)}function Tf(){us.stop()}function Ef(){us.start()}let us=new am;us.setAnimationLoop(Nm),typeof self<"u"&&us.setContext(self),this.setAnimationLoop=function(E){_c=E,Ae.setAnimationLoop(E),E===null?us.stop():us.start()},Ae.addEventListener("sessionstart",Tf),Ae.addEventListener("sessionend",Ef),this.render=function(E,$){if($!==void 0&&$.isCamera!==!0){Ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;N!==null&&N.renderStart(E,$);let te=Ae.enabled===!0&&Ae.isPresenting===!0,Q=v!==null&&(k===null||te)&&v.begin(P,k);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),Ae.enabled===!0&&Ae.isPresenting===!0&&(v===null||v.isCompositing()===!1)&&(Ae.cameraAutoUpdate===!0&&Ae.updateCamera($),$=Ae.getCamera()),E.isScene===!0&&E.onBeforeRender(P,E,$,k),T=De.get(E,_.length),T.init($),T.state.textureUnits=b.getTextureUnits(),_.push(T),se.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),A.setFromProjectionMatrix(se,Qn,$.reversedDepth),G=this.localClippingEnabled,J=Fe.init(this.clippingPlanes,G),C=ce.get(E,D.length),C.init(),D.push(C),Ae.enabled===!0&&Ae.isPresenting===!0){let Oe=P.xr.getDepthSensingMesh();Oe!==null&&vc(Oe,$,-1/0,P.sortObjects)}vc(E,$,0,P.sortObjects),C.finish(),P.sortObjects===!0&&C.sort(S,L),Qe=Ae.enabled===!1||Ae.isPresenting===!1||Ae.hasDepthSensing()===!1,Qe&&we.addToRenderList(C,E),this.info.render.frame++,J===!0&&Fe.beginShadows();let ee=T.state.shadowsArray;if(Ee.render(ee,E,$),J===!0&&Fe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Q&&v.hasRenderPass())===!1){let Oe=C.opaque,Pe=C.transmissive;if(T.setupLights(),$.isArrayCamera){let Be=$.cameras;if(Pe.length>0)for(let Ve=0,rt=Be.length;Ve<rt;Ve++){let ht=Be[Ve];Rf(Oe,Pe,E,ht)}Qe&&we.render(E);for(let Ve=0,rt=Be.length;Ve<rt;Ve++){let ht=Be[Ve];Af(C,E,ht,ht.viewport)}}else Pe.length>0&&Rf(Oe,Pe,E,$),Qe&&we.render(E),Af(C,E,$)}k!==null&&q===0&&(b.updateMultisampleRenderTarget(k),b.updateRenderTargetMipmap(k)),Q&&v.end(P),E.isScene===!0&&E.onAfterRender(P,E,$),Te.resetDefaultState(),B=-1,Y=null,_.pop(),_.length>0?(T=_[_.length-1],b.setTextureUnits(T.state.textureUnits),J===!0&&Fe.setGlobalState(P.clippingPlanes,T.state.camera)):T=null,D.pop(),D.length>0?C=D[D.length-1]:C=null,N!==null&&N.renderEnd()};function vc(E,$,te,Q){if(E.visible===!1)return;if(E.layers.test($.layers)){if(E.isGroup)te=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update($);else if(E.isLightProbeGrid)T.pushLightProbeGrid(E);else if(E.isLight)T.pushLight(E),E.castShadow&&T.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||A.intersectsSprite(E)){Q&&pe.setFromMatrixPosition(E.matrixWorld).applyMatrix4(se);let Oe=be.update(E),Pe=E.material;Pe.visible&&C.push(E,Oe,Pe,te,pe.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||A.intersectsObject(E))){let Oe=be.update(E),Pe=E.material;if(Q&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),pe.copy(E.boundingSphere.center)):(Oe.boundingSphere===null&&Oe.computeBoundingSphere(),pe.copy(Oe.boundingSphere.center)),pe.applyMatrix4(E.matrixWorld).applyMatrix4(se)),Array.isArray(Pe)){let Be=Oe.groups;for(let Ve=0,rt=Be.length;Ve<rt;Ve++){let ht=Be[Ve],Xe=Pe[ht.materialIndex];Xe&&Xe.visible&&C.push(E,Oe,Xe,te,pe.z,ht)}}else Pe.visible&&C.push(E,Oe,Pe,te,pe.z,null)}}let Ie=E.children;for(let Oe=0,Pe=Ie.length;Oe<Pe;Oe++)vc(Ie[Oe],$,te,Q)}function Af(E,$,te,Q){let{opaque:ee,transmissive:Ie,transparent:Oe}=E;T.setupLightsView(te),J===!0&&Fe.setGlobalState(P.clippingPlanes,te),Q&&ve.viewport(le.copy(Q)),ee.length>0&&Oo(ee,$,te),Ie.length>0&&Oo(Ie,$,te),Oe.length>0&&Oo(Oe,$,te),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function Rf(E,$,te,Q){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[Q.id]===void 0){let Xe=tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[Q.id]=new Un(1,1,{generateMipmaps:!0,type:Xe?yi:Sn,minFilter:xi,samples:Math.max(4,ot.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ut.workingColorSpace})}let Ie=T.state.transmissionRenderTarget[Q.id],Oe=Q.viewport||le;Ie.setSize(Oe.z*P.transmissionResolutionScale,Oe.w*P.transmissionResolutionScale);let Pe=P.getRenderTarget(),Be=P.getActiveCubeFace(),Ve=P.getActiveMipmapLevel();P.setRenderTarget(Ie),P.getClearColor(Ce),Ue=P.getClearAlpha(),Ue<1&&P.setClearColor(16777215,.5),P.clear(),Qe&&we.render(te);let rt=P.toneMapping;P.toneMapping=ei;let ht=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),T.setupLightsView(Q),J===!0&&Fe.setGlobalState(P.clippingPlanes,Q),Oo(E,te,Q),b.updateMultisampleRenderTarget(Ie),b.updateRenderTargetMipmap(Ie),tt.has("WEBGL_multisampled_render_to_texture")===!1){let Xe=!1;for(let St=0,Qt=$.length;St<Qt;St++){let Zt=$[St],{object:It,geometry:xn,material:ke,group:Pn}=Zt;if(ke.side===Cn&&It.layers.test(Q.layers)){let xt=ke.side;ke.side=gn,ke.needsUpdate=!0,Cf(It,te,Q,xn,ke,Pn),ke.side=xt,ke.needsUpdate=!0,Xe=!0}}Xe===!0&&(b.updateMultisampleRenderTarget(Ie),b.updateRenderTargetMipmap(Ie))}P.setRenderTarget(Pe,Be,Ve),P.setClearColor(Ce,Ue),ht!==void 0&&(Q.viewport=ht),P.toneMapping=rt}function Oo(E,$,te){let Q=$.isScene===!0?$.overrideMaterial:null;for(let ee=0,Ie=E.length;ee<Ie;ee++){let Oe=E[ee],{object:Pe,geometry:Be,group:Ve}=Oe,rt=Oe.material;rt.allowOverride===!0&&Q!==null&&(rt=Q),Pe.layers.test(te.layers)&&Cf(Pe,$,te,Be,rt,Ve)}}function Cf(E,$,te,Q,ee,Ie){E.onBeforeRender(P,$,te,Q,ee,Ie),E.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),ee.onBeforeRender(P,$,te,Q,E,Ie),ee.transparent===!0&&ee.side===Cn&&ee.forceSinglePass===!1?(ee.side=gn,ee.needsUpdate=!0,P.renderBufferDirect(te,$,Q,ee,E,Ie),ee.side=Di,ee.needsUpdate=!0,P.renderBufferDirect(te,$,Q,ee,E,Ie),ee.side=Cn):P.renderBufferDirect(te,$,Q,ee,E,Ie),E.onAfterRender(P,$,te,Q,ee,Ie)}function Bo(E,$,te){$.isScene!==!0&&($=qe);let Q=I.get(E),ee=T.state.lights,Ie=T.state.shadowsArray,Oe=ee.state.version,Pe=Re.getParameters(E,ee.state,Ie,$,te,T.state.lightProbeGridArray),Be=Re.getProgramCacheKey(Pe),Ve=Q.programs;Q.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?$.environment:null,Q.fog=$.fog;let rt=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;Q.envMap=j.get(E.envMap||Q.environment,rt),Q.envMapRotation=Q.environment!==null&&E.envMap===null?$.environmentRotation:E.envMapRotation,Ve===void 0&&(E.addEventListener("dispose",jt),Ve=new Map,Q.programs=Ve);let ht=Ve.get(Be);if(ht!==void 0){if(Q.currentProgram===ht&&Q.lightsStateVersion===Oe)return Pf(E,Pe),ht}else Pe.uniforms=Re.getUniforms(E),N!==null&&E.isNodeMaterial&&N.build(E,te,Pe),E.onBeforeCompile(Pe,P),ht=Re.acquireProgram(Pe,Be),Ve.set(Be,ht),Q.uniforms=Pe.uniforms;let Xe=Q.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Xe.clippingPlanes=Fe.uniform),Pf(E,Pe),Q.needsLights=Om(E),Q.lightsStateVersion=Oe,Q.needsLights&&(Xe.ambientLightColor.value=ee.state.ambient,Xe.lightProbe.value=ee.state.probe,Xe.directionalLights.value=ee.state.directional,Xe.directionalLightShadows.value=ee.state.directionalShadow,Xe.spotLights.value=ee.state.spot,Xe.spotLightShadows.value=ee.state.spotShadow,Xe.rectAreaLights.value=ee.state.rectArea,Xe.ltc_1.value=ee.state.rectAreaLTC1,Xe.ltc_2.value=ee.state.rectAreaLTC2,Xe.pointLights.value=ee.state.point,Xe.pointLightShadows.value=ee.state.pointShadow,Xe.hemisphereLights.value=ee.state.hemi,Xe.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,Xe.spotLightMatrix.value=ee.state.spotLightMatrix,Xe.spotLightMap.value=ee.state.spotLightMap,Xe.pointShadowMatrix.value=ee.state.pointShadowMatrix),Q.lightProbeGrid=T.state.lightProbeGridArray.length>0,Q.currentProgram=ht,Q.uniformsList=null,ht}function Sf(E){if(E.uniformsList===null){let $=E.currentProgram.getUniforms();E.uniformsList=vr.seqWithValue($.seq,E.uniforms)}return E.uniformsList}function Pf(E,$){let te=I.get(E);te.outputColorSpace=$.outputColorSpace,te.batching=$.batching,te.batchingColor=$.batchingColor,te.instancing=$.instancing,te.instancingColor=$.instancingColor,te.instancingMorph=$.instancingMorph,te.skinning=$.skinning,te.morphTargets=$.morphTargets,te.morphNormals=$.morphNormals,te.morphColors=$.morphColors,te.morphTargetsCount=$.morphTargetsCount,te.numClippingPlanes=$.numClippingPlanes,te.numIntersection=$.numClipIntersection,te.vertexAlphas=$.vertexAlphas,te.vertexTangents=$.vertexTangents,te.toneMapping=$.toneMapping}function Um(E,$){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;w.setFromMatrixPosition($.matrixWorld);for(let te=0,Q=E.length;te<Q;te++){let ee=E[te];if(ee.texture!==null&&ee.boundingBox.containsPoint(w))return ee}return null}function km(E,$,te,Q,ee){$.isScene!==!0&&($=qe),b.resetTextureUnits();let Ie=$.fog,Oe=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial?$.environment:null,Pe=k===null?P.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:ut.workingColorSpace,Be=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial&&!Q.envMap||Q.isMeshPhongMaterial&&!Q.envMap,Ve=j.get(Q.envMap||Oe,Be),rt=Q.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,ht=!!te.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Xe=!!te.morphAttributes.position,St=!!te.morphAttributes.normal,Qt=!!te.morphAttributes.color,Zt=ei;Q.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Zt=P.toneMapping);let It=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,xn=It!==void 0?It.length:0,ke=I.get(Q),Pn=T.state.lights;if(J===!0&&(G===!0||E!==Y)){let Ft=E===Y&&Q.id===B;Fe.setState(Q,E,Ft)}let xt=!1;Q.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==Pn.state.version||ke.outputColorSpace!==Pe||ee.isBatchedMesh&&ke.batching===!1||!ee.isBatchedMesh&&ke.batching===!0||ee.isBatchedMesh&&ke.batchingColor===!0&&ee.colorTexture===null||ee.isBatchedMesh&&ke.batchingColor===!1&&ee.colorTexture!==null||ee.isInstancedMesh&&ke.instancing===!1||!ee.isInstancedMesh&&ke.instancing===!0||ee.isSkinnedMesh&&ke.skinning===!1||!ee.isSkinnedMesh&&ke.skinning===!0||ee.isInstancedMesh&&ke.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&ke.instancingColor===!1&&ee.instanceColor!==null||ee.isInstancedMesh&&ke.instancingMorph===!0&&ee.morphTexture===null||ee.isInstancedMesh&&ke.instancingMorph===!1&&ee.morphTexture!==null||ke.envMap!==Ve||Q.fog===!0&&ke.fog!==Ie||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==Fe.numPlanes||ke.numIntersection!==Fe.numIntersection)||ke.vertexAlphas!==rt||ke.vertexTangents!==ht||ke.morphTargets!==Xe||ke.morphNormals!==St||ke.morphColors!==Qt||ke.toneMapping!==Zt||ke.morphTargetsCount!==xn||!!ke.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(xt=!0):(xt=!0,ke.__version=Q.version);let Bn=ke.currentProgram;xt===!0&&(Bn=Bo(Q,$,ee),N&&Q.isNodeMaterial&&N.onUpdateProgram(Q,Bn,ke));let ii=!1,Bi=!1,Us=!1,Dt=Bn.getUniforms(),en=ke.uniforms;if(ve.useProgram(Bn.program)&&(ii=!0,Bi=!0,Us=!0),Q.id!==B&&(B=Q.id,Bi=!0),ke.needsLights){let Ft=Um(T.state.lightProbeGridArray,ee);ke.lightProbeGrid!==Ft&&(ke.lightProbeGrid=Ft,Bi=!0)}if(ii||Y!==E){ve.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),Dt.setValue(O,"projectionMatrix",E.projectionMatrix),Dt.setValue(O,"viewMatrix",E.matrixWorldInverse);let Hi=Dt.map.cameraPosition;Hi!==void 0&&Hi.setValue(O,ie.setFromMatrixPosition(E.matrixWorld)),ot.logarithmicDepthBuffer&&Dt.setValue(O,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Dt.setValue(O,"isOrthographic",E.isOrthographicCamera===!0),Y!==E&&(Y=E,Bi=!0,Us=!0)}if(ke.needsLights&&(Pn.state.directionalShadowMap.length>0&&Dt.setValue(O,"directionalShadowMap",Pn.state.directionalShadowMap,b),Pn.state.spotShadowMap.length>0&&Dt.setValue(O,"spotShadowMap",Pn.state.spotShadowMap,b),Pn.state.pointShadowMap.length>0&&Dt.setValue(O,"pointShadowMap",Pn.state.pointShadowMap,b)),ee.isSkinnedMesh){Dt.setOptional(O,ee,"bindMatrix"),Dt.setOptional(O,ee,"bindMatrixInverse");let Ft=ee.skeleton;Ft&&(Ft.boneTexture===null&&Ft.computeBoneTexture(),Dt.setValue(O,"boneTexture",Ft.boneTexture,b))}ee.isBatchedMesh&&(Dt.setOptional(O,ee,"batchingTexture"),Dt.setValue(O,"batchingTexture",ee._matricesTexture,b),Dt.setOptional(O,ee,"batchingIdTexture"),Dt.setValue(O,"batchingIdTexture",ee._indirectTexture,b),Dt.setOptional(O,ee,"batchingColorTexture"),ee._colorsTexture!==null&&Dt.setValue(O,"batchingColorTexture",ee._colorsTexture,b));let zi=te.morphAttributes;if((zi.position!==void 0||zi.normal!==void 0||zi.color!==void 0)&&nt.update(ee,te,Bn),(Bi||ke.receiveShadow!==ee.receiveShadow)&&(ke.receiveShadow=ee.receiveShadow,Dt.setValue(O,"receiveShadow",ee.receiveShadow)),(Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial)&&Q.envMap===null&&$.environment!==null&&(en.envMapIntensity.value=$.environmentIntensity),en.dfgLUT!==void 0&&(en.dfgLUT.value=OM()),Bi){if(Dt.setValue(O,"toneMappingExposure",P.toneMappingExposure),ke.needsLights&&Fm(en,Us),Ie&&Q.fog===!0&&re.refreshFogUniforms(en,Ie),re.refreshMaterialUniforms(en,Q,z,F,T.state.transmissionRenderTarget[E.id]),ke.needsLights&&ke.lightProbeGrid){let Ft=ke.lightProbeGrid;en.probesSH.value=Ft.texture,en.probesMin.value.copy(Ft.boundingBox.min),en.probesMax.value.copy(Ft.boundingBox.max),en.probesResolution.value.copy(Ft.resolution)}vr.upload(O,Sf(ke),en,b)}if(Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(vr.upload(O,Sf(ke),en,b),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Dt.setValue(O,"center",ee.center),Dt.setValue(O,"modelViewMatrix",ee.modelViewMatrix),Dt.setValue(O,"normalMatrix",ee.normalMatrix),Dt.setValue(O,"modelMatrix",ee.matrixWorld),Q.uniformsGroups!==void 0){let Ft=Q.uniformsGroups;for(let Hi=0,ks=Ft.length;Hi<ks;Hi++){let If=Ft[Hi];oe.update(If,Bn),oe.bind(If,Bn)}}return Bn}function Fm(E,$){E.ambientLightColor.needsUpdate=$,E.lightProbe.needsUpdate=$,E.directionalLights.needsUpdate=$,E.directionalLightShadows.needsUpdate=$,E.pointLights.needsUpdate=$,E.pointLightShadows.needsUpdate=$,E.spotLights.needsUpdate=$,E.spotLightShadows.needsUpdate=$,E.rectAreaLights.needsUpdate=$,E.hemisphereLights.needsUpdate=$}function Om(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(E,$,te){let Q=I.get(E);Q.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),I.get(E.texture).__webglTexture=$,I.get(E.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:te,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,$){let te=I.get(E);te.__webglFramebuffer=$,te.__useDefaultFramebuffer=$===void 0};let Bm=O.createFramebuffer();this.setRenderTarget=function(E,$=0,te=0){k=E,X=$,q=te;let Q=null,ee=!1,Ie=!1;if(E){let Pe=I.get(E);if(Pe.__useDefaultFramebuffer!==void 0){ve.bindFramebuffer(O.FRAMEBUFFER,Pe.__webglFramebuffer),le.copy(E.viewport),fe.copy(E.scissor),_e=E.scissorTest,ve.viewport(le),ve.scissor(fe),ve.setScissorTest(_e),B=-1;return}else if(Pe.__webglFramebuffer===void 0)b.setupRenderTarget(E);else if(Pe.__hasExternalTextures)b.rebindTextures(E,I.get(E.texture).__webglTexture,I.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let rt=E.depthTexture;if(Pe.__boundDepthTexture!==rt){if(rt!==null&&I.has(rt)&&(E.width!==rt.image.width||E.height!==rt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(E)}}let Be=E.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(Ie=!0);let Ve=I.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ve[$])?Q=Ve[$][te]:Q=Ve[$],ee=!0):E.samples>0&&b.useMultisampledRTT(E)===!1?Q=I.get(E).__webglMultisampledFramebuffer:Array.isArray(Ve)?Q=Ve[te]:Q=Ve,le.copy(E.viewport),fe.copy(E.scissor),_e=E.scissorTest}else le.copy(U).multiplyScalar(z).floor(),fe.copy(K).multiplyScalar(z).floor(),_e=ge;if(te!==0&&(Q=Bm),ve.bindFramebuffer(O.FRAMEBUFFER,Q)&&ve.drawBuffers(E,Q),ve.viewport(le),ve.scissor(fe),ve.setScissorTest(_e),ee){let Pe=I.get(E.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+$,Pe.__webglTexture,te)}else if(Ie){let Pe=$;for(let Be=0;Be<E.textures.length;Be++){let Ve=I.get(E.textures[Be]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Be,Ve.__webglTexture,te,Pe)}}else if(E!==null&&te!==0){let Pe=I.get(E.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Pe.__webglTexture,te)}B=-1},this.readRenderTargetPixels=function(E,$,te,Q,ee,Ie,Oe,Pe=0){if(!(E&&E.isWebGLRenderTarget)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=I.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Oe!==void 0&&(Be=Be[Oe]),Be){ve.bindFramebuffer(O.FRAMEBUFFER,Be);try{let Ve=E.textures[Pe],rt=Ve.format,ht=Ve.type;if(E.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Pe),!ot.textureFormatReadable(rt)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ot.textureTypeReadable(ht)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=E.width-Q&&te>=0&&te<=E.height-ee&&O.readPixels($,te,Q,ee,H.convert(rt),H.convert(ht),Ie)}finally{let Ve=k!==null?I.get(k).__webglFramebuffer:null;ve.bindFramebuffer(O.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(E,$,te,Q,ee,Ie,Oe,Pe=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Be=I.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Oe!==void 0&&(Be=Be[Oe]),Be)if($>=0&&$<=E.width-Q&&te>=0&&te<=E.height-ee){ve.bindFramebuffer(O.FRAMEBUFFER,Be);let Ve=E.textures[Pe],rt=Ve.format,ht=Ve.type;if(E.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Pe),!ot.textureFormatReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ot.textureTypeReadable(ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Xe=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Xe),O.bufferData(O.PIXEL_PACK_BUFFER,Ie.byteLength,O.STREAM_READ),O.readPixels($,te,Q,ee,H.convert(rt),H.convert(ht),0);let St=k!==null?I.get(k).__webglFramebuffer:null;ve.bindFramebuffer(O.FRAMEBUFFER,St);let Qt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Lp(O,Qt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Xe),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,Ie),O.deleteBuffer(Xe),O.deleteSync(Qt),Ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,$=null,te=0){let Q=Math.pow(2,-te),ee=Math.floor(E.image.width*Q),Ie=Math.floor(E.image.height*Q),Oe=$!==null?$.x:0,Pe=$!==null?$.y:0;b.setTexture2D(E,0),O.copyTexSubImage2D(O.TEXTURE_2D,te,0,0,Oe,Pe,ee,Ie),ve.unbindTexture()};let zm=O.createFramebuffer(),Hm=O.createFramebuffer();this.copyTextureToTexture=function(E,$,te=null,Q=null,ee=0,Ie=0){let Oe,Pe,Be,Ve,rt,ht,Xe,St,Qt,Zt=E.isCompressedTexture?E.mipmaps[Ie]:E.image;if(te!==null)Oe=te.max.x-te.min.x,Pe=te.max.y-te.min.y,Be=te.isBox3?te.max.z-te.min.z:1,Ve=te.min.x,rt=te.min.y,ht=te.isBox3?te.min.z:0;else{let en=Math.pow(2,-ee);Oe=Math.floor(Zt.width*en),Pe=Math.floor(Zt.height*en),E.isDataArrayTexture?Be=Zt.depth:E.isData3DTexture?Be=Math.floor(Zt.depth*en):Be=1,Ve=0,rt=0,ht=0}Q!==null?(Xe=Q.x,St=Q.y,Qt=Q.z):(Xe=0,St=0,Qt=0);let It=H.convert($.format),xn=H.convert($.type),ke;$.isData3DTexture?(b.setTexture3D($,0),ke=O.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(b.setTexture2DArray($,0),ke=O.TEXTURE_2D_ARRAY):(b.setTexture2D($,0),ke=O.TEXTURE_2D),ve.activeTexture(O.TEXTURE0),ve.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,$.flipY),ve.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),ve.pixelStorei(O.UNPACK_ALIGNMENT,$.unpackAlignment);let Pn=ve.getParameter(O.UNPACK_ROW_LENGTH),xt=ve.getParameter(O.UNPACK_IMAGE_HEIGHT),Bn=ve.getParameter(O.UNPACK_SKIP_PIXELS),ii=ve.getParameter(O.UNPACK_SKIP_ROWS),Bi=ve.getParameter(O.UNPACK_SKIP_IMAGES);ve.pixelStorei(O.UNPACK_ROW_LENGTH,Zt.width),ve.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Zt.height),ve.pixelStorei(O.UNPACK_SKIP_PIXELS,Ve),ve.pixelStorei(O.UNPACK_SKIP_ROWS,rt),ve.pixelStorei(O.UNPACK_SKIP_IMAGES,ht);let Us=E.isDataArrayTexture||E.isData3DTexture,Dt=$.isDataArrayTexture||$.isData3DTexture;if(E.isDepthTexture){let en=I.get(E),zi=I.get($),Ft=I.get(en.__renderTarget),Hi=I.get(zi.__renderTarget);ve.bindFramebuffer(O.READ_FRAMEBUFFER,Ft.__webglFramebuffer),ve.bindFramebuffer(O.DRAW_FRAMEBUFFER,Hi.__webglFramebuffer);for(let ks=0;ks<Be;ks++)Us&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,I.get(E).__webglTexture,ee,ht+ks),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,I.get($).__webglTexture,Ie,Qt+ks)),O.blitFramebuffer(Ve,rt,Oe,Pe,Xe,St,Oe,Pe,O.DEPTH_BUFFER_BIT,O.NEAREST);ve.bindFramebuffer(O.READ_FRAMEBUFFER,null),ve.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(ee!==0||E.isRenderTargetTexture||I.has(E)){let en=I.get(E),zi=I.get($);ve.bindFramebuffer(O.READ_FRAMEBUFFER,zm),ve.bindFramebuffer(O.DRAW_FRAMEBUFFER,Hm);for(let Ft=0;Ft<Be;Ft++)Us?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,en.__webglTexture,ee,ht+Ft):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,en.__webglTexture,ee),Dt?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,zi.__webglTexture,Ie,Qt+Ft):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,zi.__webglTexture,Ie),ee!==0?O.blitFramebuffer(Ve,rt,Oe,Pe,Xe,St,Oe,Pe,O.COLOR_BUFFER_BIT,O.NEAREST):Dt?O.copyTexSubImage3D(ke,Ie,Xe,St,Qt+Ft,Ve,rt,Oe,Pe):O.copyTexSubImage2D(ke,Ie,Xe,St,Ve,rt,Oe,Pe);ve.bindFramebuffer(O.READ_FRAMEBUFFER,null),ve.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Dt?E.isDataTexture||E.isData3DTexture?O.texSubImage3D(ke,Ie,Xe,St,Qt,Oe,Pe,Be,It,xn,Zt.data):$.isCompressedArrayTexture?O.compressedTexSubImage3D(ke,Ie,Xe,St,Qt,Oe,Pe,Be,It,Zt.data):O.texSubImage3D(ke,Ie,Xe,St,Qt,Oe,Pe,Be,It,xn,Zt):E.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,Ie,Xe,St,Oe,Pe,It,xn,Zt.data):E.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,Ie,Xe,St,Zt.width,Zt.height,It,Zt.data):O.texSubImage2D(O.TEXTURE_2D,Ie,Xe,St,Oe,Pe,It,xn,Zt);ve.pixelStorei(O.UNPACK_ROW_LENGTH,Pn),ve.pixelStorei(O.UNPACK_IMAGE_HEIGHT,xt),ve.pixelStorei(O.UNPACK_SKIP_PIXELS,Bn),ve.pixelStorei(O.UNPACK_SKIP_ROWS,ii),ve.pixelStorei(O.UNPACK_SKIP_IMAGES,Bi),Ie===0&&$.generateMipmaps&&O.generateMipmap(ke),ve.unbindTexture()},this.initRenderTarget=function(E){I.get(E).__webglFramebuffer===void 0&&b.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?b.setTextureCube(E,0):E.isData3DTexture?b.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?b.setTexture2DArray(E,0):b.setTexture2D(E,0),ve.unbindTexture()},this.resetState=function(){X=0,q=0,k=null,ve.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ut._getDrawingBufferColorSpace(e),t.unpackColorSpace=ut._getUnpackColorSpace()}};function pm(n,e){let t=new fc({canvas:e.canvas,antialias:!0});t.setPixelRatio(Math.min(2,devicePixelRatio||1)),t.setSize(e.VW,e.VH),t.outputColorSpace=sn;let i=new ao;i.background=new je(861232);let s=new Mn(50,e.VW/e.VH,10,6e4),r=new vo(15397624,4867128,.95);i.add(r);let o=new bo(16773852,1.35);o.position.set(-.45,1,-.3).multiplyScalar(1e3),i.add(o);let a=new rn;i.add(a),o.target=a,i.fog=new oo(10466494,2600,9e3);let l={renderer:t,scene:i,camera:s,sun:o,hemi:r,cx:n.player.x,cy:n.player.y,dist:1150,elev:.96,shakeX:0,shakeY:0,orbit:0,zoomFactor:1,_ray:new wo,_plane:new Gn(new V(0,1,0),0),_v3:new V,lightLevel(){return .5+.5*Math.cos(Math.PI*2*(n.t%Ar/Ar))},resize(){s.aspect=e.VW/e.VH,s.updateProjectionMatrix(),t.setSize(e.VW,e.VH)},update(c){let f=n.player,h=f.x,d=f.y,u=1500*l.zoomFactor,p=.96;if(e.godView){h=he.w/2,d=he.h/2,p=1.52;let _=Math.tan(s.fov/2*Math.PI/180),v=(he.h/2+500)/_,P=(he.w/2+500)/(_*s.aspect);u=Math.max(v,P)*1.02}else f.inCopter&&n.copter&&(u=(1850+Math.hypot(n.copter.vx,n.copter.vy)*.9)*l.zoomFactor);l._wasGod!==e.godView&&(l._wasGod=e.godView,l.cx=h,l.cy=d,l.dist=u,l.elev=p);let x=Math.min(1,c*(e.godView?6:5));l.cx=Rr(l.cx,h,x),l.cy=Rr(l.cy,d,x),l.dist=Rr(l.dist,u,Math.min(1,c*4)),l.elev=Rr(l.elev,p,Math.min(1,c*4)),n.shake>0?(l.shakeX=(Math.random()*2-1)*n.shake,l.shakeY=(Math.random()*2-1)*n.shake):(l.shakeX=0,l.shakeY=0);let m=l.cx+l.shakeX,g=l.cy+l.shakeY,y=Math.sin(l.elev)*l.dist,M=Math.cos(l.elev)*l.dist,w=e.godView?0:l.orbit;s.position.set(m+Math.sin(w)*M,y,g+Math.cos(w)*M),s.lookAt(m,0,g),a.position.set(m,0,g);let C=l.lightLevel(),T=Math.sin((1-C)*Math.PI);o.intensity=1+C*.45,o.color.setHSL(.105-T*.045,.52+T*.25,.62-T*.06),r.intensity=.78+C*.25;let D=n.t%Ar/Ar*Math.PI*2;o.position.set(m+Math.cos(D)*1400,900+C*600,g+Math.sin(D)*1400-400),i.fog.near=l.dist*2.2,i.fog.far=l.dist*8,l._viewR=l.dist*1.9},render(){t.render(i,s)},screenToWorld(c,f){let h=new Je(c/e.VW*2-1,-(f/e.VH)*2+1);l._ray.setFromCamera(h,s);let d=new V;return l._ray.ray.intersectPlane(l._plane,d),d?{x:d.x,y:d.z}:{x:l.cx,y:l.cy}},worldToScreen(c,f,h=0){return l._v3.set(c,h,f).project(s),{x:(l._v3.x+1)/2*e.VW,y:(-l._v3.y+1)/2*e.VH,behind:l._v3.z>1}},inView(c,f,h=0){let d=c-l.cx,u=f-l.cy;return d*d+u*u<(l._viewR+h)*(l._viewR+h)},viewRect(c=0){let f=l._viewR+c;return{x0:l.cx-f,y0:l.cy-f,x1:l.cx+f,y1:l.cy+f}},get zoom(){return 900/l.dist}};return l.update(.1),l}var pc=.45;function gm(n,e){let t=Math.round(he.w*pc),i=Math.round(he.h*pc),s=document.createElement("canvas");s.width=t,s.height=i;let r=s.getContext("2d");r.save(),r.scale(pc,pc),BM(n,r),r.restore();let o=new Wn(s);o.colorSpace=sn,o.anisotropy=8,o.minFilter=xi;let a=new ye(new Xn(he.w,he.h),new Rn({map:o,transparent:!0}));a.rotation.x=-Math.PI/2,a.position.set(he.w/2,0,he.h/2),a.renderOrder=-1,e.add(a);let l=new ye(new Xn(he.w*6,he.h*6),new Rn({color:1060924}));l.rotation.x=-Math.PI/2,l.position.set(he.w/2,-3,he.h/2),e.add(l);let c=document.createElement("canvas");c.width=256,c.height=256;let f=c.getContext("2d");for(let w=0;w<260;w++){let C=Math.random()*256,T=Math.random()*256;f.fillStyle=`rgba(200,235,245,${.25+Math.random()*.5})`,f.fillRect(C,T,1.6+Math.random()*2.4,1.2)}let h=new Wn(c);h.wrapS=h.wrapT=Li,h.repeat.set(220,146);let d=new ye(new Xn(he.w*6,he.h*6),new tn({map:h,transparent:!0,opacity:.5,depthWrite:!1,blending:On}));d.rotation.x=-Math.PI/2,d.position.set(he.w/2,-1.5,he.h/2),d.renderOrder=-2,e.add(d);let u=h.clone();u.wrapS=u.wrapT=Li,u.repeat.set(133,88);let p=new ye(new Xn(he.w*6,he.h*6),new tn({map:u,transparent:!0,opacity:.3,depthWrite:!1,blending:On}));p.rotation.x=-Math.PI/2,p.position.set(he.w/2,-1.2,he.h/2),p.renderOrder=-2,e.add(p);let x=document.createElement("canvas");x.width=4,x.height=256;let m=x.getContext("2d"),g=m.createLinearGradient(0,0,0,256);g.addColorStop(0,"#5d9bd3"),g.addColorStop(.62,"#9cc3dd"),g.addColorStop(.78,"#cfddd8"),g.addColorStop(1,"#dfe5da"),m.fillStyle=g,m.fillRect(0,0,4,256);let y=new Wn(x);y.colorSpace=sn;let M=new ye(new Ss(34e3,18,12,0,Math.PI*2,0,Math.PI/2),new tn({map:y,side:gn,fog:!1}));return M.position.set(he.w/2,-40,he.h/2),e.add(M),e.background=null,{tex:o,sync(w,C,T){let D=d.material.map,_=p.material.map;D.offset.x+=w*.0022,D.offset.y+=w*.0013,_.offset.x-=w*.0011,_.offset.y+=w*8e-4,M.position.set(T.cx,-40,T.cy);let v=T.lightLevel();M.material.color.setHSL(.58,.18,.62+v*.38)}}}function mm(n,e,t){let i=(e+n.world.biomeRidge(t))/he.w,s=.05,r=Wi((i-(1/3-s))/(2*s)),o=Wi((i-(2/3-s))/(2*s)),a=(d,u,p)=>[d[0]+(u[0]-d[0])*p,d[1]+(u[1]-d[1])*p,d[2]+(u[2]-d[2])*p],l=[181,154,102],c=[74,92,48],f=[185,199,209],h=a(l,c,r);return h=a(h,f,o),h}function _f(n,e){e.beginPath(),n.world.islandPath.forEach((t,i)=>i?e.lineTo(t.x,t.y):e.moveTo(t.x,t.y)),e.closePath()}function BM(n,e){let t=he.w,i=he.h;e.lineJoin="round",e.strokeStyle="rgba(64,124,134,0.45)",e.lineWidth=64,_f(n,e),e.stroke(),e.strokeStyle="rgba(90,150,158,0.30)",e.lineWidth=26,_f(n,e),e.stroke(),e.save(),_f(n,e),e.clip();let s=32;for(let h=0;h<i;h+=s)for(let d=0;d<t;d+=s){if(n.world.landFactor(d+s/2,h+s/2)<=-.25)continue;let[p,x,m]=mm(n,d+s/2,h+s/2),g=Xi(d/s|0,h/s|0),y=Xi(d/96|0,h/96|0),M=.88+g*.14+(y-.5)*.12-h/i*.06;p*=M,x*=M,m*=M,e.fillStyle=`rgb(${p|0},${x|0},${m|0})`,e.fillRect(d-1,h-1,s+2,s+2)}e.lineCap="round";let r=n.world.islandPath;for(let h=0;h<3;h++){let d=h===0?96:h===1?30:7;for(let u=0;u<r.length;u++){let p=r[u],x=r[(u+1)%r.length],m=n.world.biomeAt((p.x+x.x)/2,(p.y+x.y)/2)==="winter";e.strokeStyle=h===0?m?"rgba(214,227,235,0.95)":"rgba(186,166,120,0.95)":h===1?m?"rgba(168,190,204,0.9)":"rgba(146,128,92,0.9)":"rgba(240,248,252,0.55)",e.lineWidth=d,e.beginPath(),e.moveTo(p.x,p.y),e.lineTo(x.x,x.y),e.stroke()}}for(let h of n.world.lakes){e.save(),e.translate(h.x,h.y);let d=()=>{e.beginPath();for(let p=0;p<=28;p++){let x=p/28*Math.PI*2,m=h.r*h.wob[p%28],g=Math.cos(x)*m,y=Math.sin(x)*m*.84;p?e.lineTo(g,y):e.moveTo(g,y)}e.closePath()};e.save(),e.scale(1.06,1.06),d(),e.fillStyle=h.frozen?"rgba(238,246,251,.95)":"rgba(96,118,66,.7)",e.fill(),e.restore(),d();let u=e.createRadialGradient(0,-.3*h.r,h.r*.1,0,0,h.r);h.frozen?(u.addColorStop(0,"#dfeaf2"),u.addColorStop(1,"#96b2c8")):(u.addColorStop(0,"#33687c"),u.addColorStop(1,"#0c2531")),e.fillStyle=u,e.fill(),e.restore()}for(let h of n.world.monuments){let d=e.createRadialGradient(h.x,h.y,h.r*.2,h.x,h.y,h.r);d.addColorStop(0,"rgba(110,106,95,.5)"),d.addColorStop(.8,"rgba(98,94,84,.32)"),d.addColorStop(1,"rgba(90,86,76,0)"),e.fillStyle=d,e.beginPath(),e.arc(h.x,h.y,h.r,0,7),e.fill()}e.lineCap="round",e.lineJoin="round";let o=[];for(let h of n.world.roads){let d=null;for(let u=0;u<h.pts.length;u++)h.fade[u]>.05?(d||(d={rd:h,pts:[]}),d.pts.push(h.pts[u])):d&&(d.pts.length>1&&o.push(d),d=null);d&&d.pts.length>1&&o.push(d)}let a=(h,d)=>{let u=[];for(let p=0;p<h.length-1;p++){let x=h[p],m=h[p+1],g=Math.hypot(m.x-x.x,m.y-x.y),y=Math.max(1,Math.ceil(g/d));for(let M=0;M<y;M++)u.push({x:x.x+(m.x-x.x)*(M/y),y:x.y+(m.y-x.y)*(M/y)})}return u.push(h[h.length-1]),u},l=(h,d,u,p,x)=>{e.fillStyle=d,e.globalAlpha=x;let m=a(h.pts,u*.55);for(let g=0;g<m.length;g++){let y=m[g],M=Xi(y.x*.13|0,y.y*.13|0),w=Xi(y.x*.31|0,y.y*.07|0),C=u*(.86+M*.34),T=(w-.5)*p,D=(M-.5)*p;e.beginPath(),e.arc(y.x+T,y.y+D,C,0,7),e.fill()}e.globalAlpha=1};for(let h of o)l(h,"#564a31",h.rd.w*.62,9,.85);for(let h of o)l(h,"#6c5d3b",h.rd.w*.46,6,1);for(let h of o)l(h,"#75653f",h.rd.w*.3,8,.5);for(let h of o){e.fillStyle="#5d5034";let d=a(h.pts,34);for(let u=0;u<d.length;u++){let p=d[u],x=Xi(p.x*.21|0,p.y*.17|0);if(x<.45)continue;let m=d[Math.max(0,u-1)],g=d[Math.min(d.length-1,u+1)],y=Math.atan2(g.y-m.y,g.x-m.x)+Math.PI/2,M=x>.72?1:-1,w=h.rd.w*.58+x*53%1*14;e.globalAlpha=.4,e.beginPath(),e.arc(p.x+Math.cos(y)*w*M,p.y+Math.sin(y)*w*M,2.5+x*31%1*5,0,7),e.fill()}e.globalAlpha=1}e.globalAlpha=.3;for(let h of o)e.strokeStyle="#544731",e.lineWidth=4,e.beginPath(),h.pts.forEach((d,u)=>u?e.lineTo(d.x,d.y):e.moveTo(d.x,d.y)),e.stroke();e.globalAlpha=1;for(let h of o){let d=a(h.pts,90);e.fillStyle="rgba(58,48,30,0.5)";for(let u of d){let p=Xi(u.x*.07|0,u.y*.23|0);p>.82&&(e.beginPath(),e.ellipse(u.x+(p*91%1-.5)*h.rd.w*.5,u.y+(p*47%1-.5)*h.rd.w*.5,4+p*5,3+p*3,p*6,0,7),e.fill())}}let c=11;for(let h of n.world.crossings){let d=Math.cos(h.railAng),u=Math.sin(h.railAng);e.save(),e.translate(h.x,h.y),e.rotate(h.railAng);let p=e.createRadialGradient(0,0,10,0,0,64);p.addColorStop(0,"rgba(116,104,78,0.95)"),p.addColorStop(.7,"rgba(108,96,72,0.7)"),p.addColorStop(1,"rgba(100,90,68,0)"),e.fillStyle=p,e.beginPath(),e.ellipse(0,0,64,50,0,0,7),e.fill(),e.fillStyle="#7b6a45";for(let x of[-c-7,0,c+7])e.fillRect(-34,x-3.4,68,6.8);e.strokeStyle="rgba(60,50,34,0.5)",e.lineWidth=1.2;for(let x of[-c-7,0,c+7])e.strokeRect(-34,x-3.4,68,6.8);e.restore()}let f=(h,d)=>n.world.crossings.some(u=>(h-u.x)*(h-u.x)+(d-u.y)*(d-u.y)<2704);for(let h of n.world.rails){let d=()=>{e.beginPath(),h.pts.forEach((u,p)=>p?e.lineTo(u.x,u.y):e.moveTo(u.x,u.y))};d(),e.strokeStyle="rgba(87,77,64,0.85)",e.lineWidth=2*c+16,e.stroke(),d(),e.strokeStyle="rgba(107,95,78,0.85)",e.lineWidth=2*c+7,e.stroke(),e.strokeStyle="#3a2e1d",e.lineWidth=4.5;for(let u=0;u<h.pts.length-1;u++){let p=h.pts[u],x=h.pts[u+1],m=Math.hypot(x.x-p.x,x.y-p.y),g=Math.atan2(x.y-p.y,x.x-p.x),y=-Math.sin(g),M=Math.cos(g);for(let w=8;w<m;w+=24){let C=p.x+Math.cos(g)*w,T=p.y+Math.sin(g)*w;f(C,T)||(e.beginPath(),e.moveTo(C-y*(c+5),T-M*(c+5)),e.lineTo(C+y*(c+5),T+M*(c+5)),e.stroke())}}e.strokeStyle="#a4abb2",e.lineWidth=2.8;for(let u of[-c,c]){e.beginPath();for(let p=0;p<h.pts.length;p++){let x=h.pts[Math.max(0,p-1)],m=h.pts[Math.min(h.pts.length-1,p+1)],g=Math.atan2(m.y-x.y,m.x-x.x),y=-Math.sin(g),M=Math.cos(g),w=h.pts[p].x+y*u,C=h.pts[p].y+M*u;p?e.lineTo(w,C):e.moveTo(w,C)}e.stroke()}}for(let h=0;h<i;h+=96)for(let d=0;d<t;d+=96){if(!n.world.onLand(d,h)||n.world.lakeAt(d,h))continue;let u=Xi(d/96|0,h/96|0);if(u>.5)continue;let[p,x,m]=mm(n,d,h);e.fillStyle=`rgba(${p*.75|0},${x*.75|0},${m*.75|0},0.5)`,e.beginPath(),e.ellipse(d+u*80,h+u*7919%1*80,9+u*14,5+u*8,u*6,0,7),e.fill()}e.restore()}var vf=new Map;function Me(n,e={}){let t=n+JSON.stringify(e);return vf.has(t)||vf.set(t,new Rn({color:n,emissive:e.emissive||0,emissiveIntensity:e.emissiveIntensity??1,transparent:!!e.transparent,opacity:e.opacity??1,flatShading:!0})),vf.get(t)}var de={box:new is(1,1,1),cyl:new Rs(1,1,1,8),cyl6:new Rs(1,1.18,1,6),cone:new go(1,1,7),ico:new Cs(1,0),sphere:new Ss(1,8,6),quad:new Xn(1,1)},mc=null;function zM(){if(mc)return mc;let n=document.createElement("canvas");n.width=64,n.height=64;let e=n.getContext("2d"),t=e.createRadialGradient(32,32,2,32,32,32);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.4,"rgba(255,255,255,0.45)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),mc=new Wn(n),mc}var gc=null;function yc(){if(gc)return gc;let n=document.createElement("canvas");n.width=128,n.height=128;let e=n.getContext("2d"),t=e.createRadialGradient(64,64,6,64,64,64);t.addColorStop(0,"rgba(255,255,255,0.5)"),t.addColorStop(.55,"rgba(255,255,255,0.42)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),e.globalCompositeOperation="destination-out";for(let i=0;i<5;i++){let s=i*1.26,r=58,o=e.createRadialGradient(64+Math.cos(s)*r,64+Math.sin(s)*r,2,64+Math.cos(s)*r,64+Math.sin(s)*r,26);o.addColorStop(0,"rgba(0,0,0,0.5)"),o.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=o,e.fillRect(0,0,128,128)}return gc=new Wn(n),gc}var xc=null;function bf(){if(xc)return xc;let n=document.createElement("canvas");n.width=64,n.height=64;let e=n.getContext("2d"),t=e.createRadialGradient(32,32,4,32,32,30);return t.addColorStop(0,"rgba(8,8,6,0.42)"),t.addColorStop(.7,"rgba(8,8,6,0.22)"),t.addColorStop(1,"rgba(8,8,6,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),xc=new Wn(n),xc}function fs(n,e=60){let t=new ns({map:zM(),color:n,transparent:!0,blending:On,depthWrite:!1,depthTest:!1}),i=new As(t);return i.scale.set(e,e,1),i.renderOrder=4,i}var Mf=null;function Ns(n=40){Mf||(Mf=new mi(.5,14));let e=new tn({map:bf(),transparent:!0,depthWrite:!1}),t=new ye(Mf,e);return t.rotation.x=-Math.PI/2,t.scale.set(n,n*.8,1),t}var ko={wood:6111006,stone:5659747,metal:3948871,armored:2567996},br=new Map;function xm(n){let e=document.createElement("canvas");e.width=128,e.height=128;let t=e.getContext("2d"),i=HM(n.length*1337+7);if(n==="wood"){t.fillStyle="#86602e",t.fillRect(0,0,128,128);for(let r=0;r<128;r+=21){t.fillStyle=`rgba(${70+i()*50|0},${48+i()*34|0},${20+i()*16|0},0.55)`,t.fillRect(r,0,21,128),t.fillStyle="rgba(42,28,12,0.85)",t.fillRect(r,0,2,128),t.strokeStyle="rgba(50,34,14,0.30)",t.lineWidth=1;for(let o=0;o<5;o++){let a=r+4+i()*14;t.beginPath(),t.moveTo(a,0),t.bezierCurveTo(a+i()*4-2,40,a+i()*4-2,88,a,128),t.stroke()}if(i()>.55){let o=r+6+i()*10,a=i()*128;t.fillStyle="rgba(40,26,10,0.6)",t.beginPath(),t.ellipse(o,a,3.2,4.5,.3,0,7),t.fill(),t.strokeStyle="rgba(120,90,48,0.5)",t.beginPath(),t.ellipse(o,a,5,6.5,.3,0,7),t.stroke()}}t.fillStyle="rgba(255,235,200,0.05)",t.fillRect(0,0,128,10)}else if(n==="stone"){t.fillStyle="#7b8289",t.fillRect(0,0,128,128);let r=26;for(let o=0;o<5;o++){let a=o%2*26;for(let l=-26;l<128;l+=52){let c=l+a;t.fillStyle=`rgba(${108+i()*34|0},${114+i()*32|0},${120+i()*30|0},0.7)`,t.fillRect(c+2,o*r+2,48,r-4),t.strokeStyle="rgba(60,66,72,0.35)",t.lineWidth=1;for(let f=0;f<3;f++){let h=c+6+i()*38,d=o*r+5+i()*(r-10);t.beginPath(),t.moveTo(h,d),t.lineTo(h+6+i()*8,d+i()*3-1.5),t.stroke()}}t.fillStyle="rgba(70,76,82,0.9)",t.fillRect(0,o*r-1.5,128,3)}}else if(n==="metal"){t.fillStyle="#5b6168",t.fillRect(0,0,128,128);for(let r=0;r<128;r+=43){t.fillStyle=`rgba(${80+i()*26|0},${88+i()*22|0},${96+i()*20|0},0.45)`,t.fillRect(r+2,0,39,128),t.fillStyle="rgba(34,38,43,0.9)",t.fillRect(r,0,2.4,128);for(let o=8;o<128;o+=18)t.fillStyle="rgba(28,32,36,0.9)",t.beginPath(),t.arc(r+6,o,1.9,0,7),t.fill(),t.fillStyle="rgba(200,210,218,0.5)",t.beginPath(),t.arc(r+5.4,o-.6,.8,0,7),t.fill()}t.strokeStyle="rgba(168,178,188,0.25)";for(let r=0;r<7;r++){let o=i()*128,a=i()*128;t.beginPath(),t.moveTo(o,a),t.lineTo(o+10+i()*22,a+i()*6-3),t.stroke()}for(let r=0;r<5;r++){let o=i()*128,a=i()*128,l=t.createRadialGradient(o,a,1,o,a,7+i()*10);l.addColorStop(0,"rgba(140,72,30,0.5)"),l.addColorStop(1,"rgba(140,72,30,0)"),t.fillStyle=l,t.fillRect(o-18,a-18,36,36)}}else{t.fillStyle="#3c4a5e",t.fillRect(0,0,128,128),t.strokeStyle="rgba(22,28,38,0.9)",t.lineWidth=6,t.strokeRect(3,3,122,122),t.strokeStyle="rgba(30,38,50,0.85)",t.lineWidth=10,t.beginPath(),t.moveTo(0,0),t.lineTo(128,128),t.stroke(),t.beginPath(),t.moveTo(128,0),t.lineTo(0,128),t.stroke(),t.strokeStyle="rgba(110,130,160,0.35)",t.lineWidth=2,t.beginPath(),t.moveTo(0,0),t.lineTo(128,128),t.stroke(),t.beginPath(),t.moveTo(128,0),t.lineTo(0,128),t.stroke(),t.fillStyle="rgba(190,205,225,0.6)";for(let[r,o]of[[12,12],[116,12],[12,116],[116,116],[64,14],[64,114],[14,64],[114,64]])t.beginPath(),t.arc(r,o,2.6,0,7),t.fill();t.fillStyle="rgba(255,255,255,0.05)",t.fillRect(0,0,128,22)}let s=new Wn(e);return s.wrapS=s.wrapT=Li,s.colorSpace=sn,s}function HM(n){let e=n>>>0;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Fo(n){let e="w"+n;return br.has(e)||br.set(e,new Rn({map:xm(n),flatShading:!0})),br.get(e)}function ym(n){let e="f"+n;if(!br.has(e)){let t=new Rn({map:xm(n),flatShading:!0});t.color.setScalar(.72),br.set(e,t)}return br.get(e)}var _m=Math.PI*2;function vm(n,e){let t=n.resources.filter(Z=>Z.type==="tree"),i=n.resources.filter(Z=>Z.type==="stone"),s=n.resources.filter(Z=>Z.type==="metal"),r=new Yt(de.cyl,Me(6111008),t.length),o=new Yt(de.cone,Me(16777215),t.length),a=new Yt(de.cone,Me(16777215),t.length),l=new Yt(de.cone,Me(15660281),t.length),c=new Yt(de.ico,Me(9278603),i.length),f=new Yt(de.ico,Me(9271114),s.length),h=new Yt(de.ico,Me(14198864,{emissive:6965776}),s.length);for(let Z of[r,o,a,l,c,f,h])Z.frustumCulled=!1,e.add(Z);let d=new je,u=new je,p=[];t.forEach((Z,F)=>{let z=.85+Z.seed*7.3%1*.4,S=n.world.biomeAt(Z.x,Z.y)==="winter";p.push(S),d.setHex(S?3953968:3494175).multiplyScalar(z),u.setHex(S?5995082:5274160).multiplyScalar(z),o.setColorAt(F,d),a.setColorAt(F,u)}),o.instanceColor&&(o.instanceColor.needsUpdate=!0),a.instanceColor&&(a.instanceColor.needsUpdate=!0);let x=new mt,m=0;function g(){t.forEach((Z,F)=>{let z=Z.amount<=0?.001:.55+.45*(Z.amount/Z.max),S=(Z.seed*13.7%1-.5)*.12;x.makeRotationZ(S).scale(new V(7*z,30*z,7*z)).setPosition(Z.x,15*z,Z.y),r.setMatrixAt(F,x),x.makeRotationY(Z.seed).scale(new V(30*z,42*z,30*z)).setPosition(Z.x,36*z,Z.y),o.setMatrixAt(F,x),x.makeRotationY(Z.seed*2).scale(new V(20*z,30*z,20*z)).setPosition(Z.x+4,56*z,Z.y-3),a.setMatrixAt(F,x);let L=p[F]?z:.001;x.makeScale(13*L,12*L,13*L).setPosition(Z.x+4,70*L,Z.y-3),l.setMatrixAt(F,x)}),l.instanceMatrix.needsUpdate=!0,i.forEach((Z,F)=>{let z=Z.amount<=0?.001:(.55+.45*(Z.amount/Z.max))*Z.r;x.makeRotationY(Z.seed).scale(new V(z,z*.75,z)).setPosition(Z.x,z*.45,Z.y),c.setMatrixAt(F,x)}),s.forEach((Z,F)=>{let z=Z.amount<=0?.001:(.55+.45*(Z.amount/Z.max))*Z.r;x.makeRotationY(Z.seed*2).scale(new V(z,z*.7,z)).setPosition(Z.x,z*.42,Z.y),f.setMatrixAt(F,x),x.makeScale(z*.4,z*.34,z*.4).setPosition(Z.x+3,z*.85,Z.y-2),h.setMatrixAt(F,x)});for(let Z of[r,o,a,c,f,h])Z.instanceMatrix.needsUpdate=!0}g();let y=new Yt(de.ico,Me(7896708),n.world.boulders.length||1);n.world.boulders.forEach((Z,F)=>{x.makeRotationY(Z.seed).scale(new V(Z.r,Z.r*.8,Z.r)).setPosition(Z.x,Z.r*.45,Z.y),y.setMatrixAt(F,x)}),y.frustumCulled=!1,e.add(y);let M=new Yt(de.ico,Me(8685967),n.world.rocks.length||1);n.world.rocks.forEach((Z,F)=>{x.makeRotationY(Z.seed).scale(new V(Z.r,Z.r*.6,Z.r)).setPosition(Z.x,Z.r*.3,Z.y),M.setMatrixAt(F,x)}),M.frustumCulled=!1,e.add(M);let w=new Yt(de.cyl,Me(7032616),n.world.palms.length||1),C=new Yt(de.cone,Me(5077552),n.world.palms.length||1);n.world.palms.forEach((Z,F)=>{x.makeScale(3.4,44,3.4).setPosition(Z.x,22,Z.y),w.setMatrixAt(F,x),x.makeScale(26,14,26).setPosition(Z.x,48,Z.y),C.setMatrixAt(F,x)}),w.frustumCulled=!1,C.frustumCulled=!1,e.add(w,C);let T=n.world.flora.filter(Z=>Z.type==="cactus"),D=new Yt(de.cyl,Me(5143098),T.length||1);T.forEach((Z,F)=>{x.makeScale(4.5,22,4.5).setPosition(Z.x,11,Z.y),D.setMatrixAt(F,x)}),D.frustumCulled=!1,e.add(D);let _=n.world.flora.filter(Z=>Z.type==="fern"||Z.type==="shrub"),v=new Yt(de.ico,Me(5599290),_.length||1);_.forEach((Z,F)=>{x.makeScale(8,6,8).setPosition(Z.x,4,Z.y),v.setMatrixAt(F,x)}),v.frustumCulled=!1,e.add(v),VM(n,e);let P=n.barrels.map(Z=>{let F;return Z.crate?(F=new ye(de.box,Me(9069104)),F.scale.set(Z.r*1.8,Z.r*1.5,Z.r*1.8),F.position.set(Z.x,Z.r*.75,Z.y)):(F=new ye(de.cyl,Me(10768174)),F.scale.set(Z.r*.9,Z.r*1.7,Z.r*.9),F.position.set(Z.x,Z.r*.85,Z.y)),e.add(F),F}),R={quarryArm:null,gates:[],fadeables:[]};for(let Z of n.world.monuments)WM(n,e,Z,R);XM(n,e);for(let Z of n.world.crossings){let F=new Ke;F.position.set(Z.x,0,Z.y),F.rotation.y=-Z.railAng;for(let z of[-1,1]){let S=new ye(de.box,Me(2500139));S.scale.set(5,20,5),S.position.set(0,10,z*38),F.add(S);let L=new ye(de.box,Me(12597802));L.scale.set(40,3.6,3.6),L.position.set(20,18,z*38);let U=new Ke;U.position.set(0,18,z*38),L.position.set(20,0,0),U.add(L),F.add(U),R.gates.push({pivot:U,cr:Z,side:z})}e.add(F)}let N=new Ke;e.add(N);let X=new Map,q=new Map,k=new Map,B=-1,Y=new Set;function le(Z){if(Z==="p1")return 8308816;let F=n.teams.find(z=>z.owner===Z);return F?parseInt(F.col.slice(1),16):8947848}function fe(){if(n.nav.stamp!==B){B=n.nav.stamp,Y.clear();for(let[Z,F]of n.structures){Y.add(Z);let z=F.mat,S=q.get(Z);if(S&&S.sig!==z&&(N.remove(S.mesh),q.delete(Z),S=null),!S){let[L,U]=Z.split(",").map(Number),K=new ye(de.box,ym(F.mat||"wood"));K.scale.set(62,5,62),K.position.set(L*64+64/2,2.5,U*64+64/2),N.add(K),q.set(Z,{mesh:K,sig:z})}}for(let[Z,F]of q)Y.has(Z)||(N.remove(F.mesh),q.delete(Z));Y.clear();for(let[Z,F]of n.walls){if(F.hp<=0)continue;Y.add(Z);let z=F.type+F.mat+(F.open?"o":"c"),S=X.get(Z);if(S&&S.sig!==z&&(N.remove(S.mesh),X.delete(Z),S=null),!S){let L=Lt(Z,F),U=(L[0]+L[2])/2,K=(L[1]+L[3])/2,ge=L[0]===L[2],A=new Ke;if(F.type==="door"&&F.open)for(let J of[-26,26]){let G=new ye(de.box,Me(ko[F.mat]||ko.wood));G.scale.set(ge?11:12,40,ge?12:11),G.position.set(ge?0:J,20,ge?J:0),A.add(G)}else{let J=Fo(F.mat||"wood"),G=new ye(de.box,J),se=F.type==="door"?42:48;G.scale.set(ge?11:64,se,ge?64:11),G.position.y=se/2,F.type==="door"&&(G.material=J.clone(),G.material.color.setScalar(.78)),A.add(G);let ie=new ye(de.box,Me(ko[F.mat]||ko.wood));if(ie.scale.set(ge?13:66,4,ge?66:13),ie.position.y=se+2,A.add(ie),F.type==="door"){let pe=new ye(de.sphere,Me(14202462));pe.scale.set(2.5,2.5,2.5),pe.position.set(ge?7:10,22,ge?10:7),A.add(pe)}}A.position.set(U,0,K),N.add(A),X.set(Z,{mesh:A,sig:z})}}for(let[Z,F]of X)Y.has(Z)||(N.remove(F.mesh),X.delete(Z));Y.clear();for(let[Z,F]of n.deploys){Y.add(Z);let z=F.type+(F.tier||"")+F.owner,S=k.get(Z);if(S&&S.sig!==z&&(N.remove(S.group),k.delete(Z),S=null),!S){let[L,U]=Z.split(",").map(Number),K=L*64+64/2,ge=U*64+64/2,A=new Ke;A.position.set(K,0,ge);let J={group:A,sig:z};if(F.type==="turret"){let G=F.tier===3?6277344:F.tier===2?14721594:10133928;for(let ot=0;ot<3;ot++){let ve=ot/3*_m+.5,_t=new ye(de.cyl,Me(3027760));_t.scale.set(2.2,18,2.2),_t.position.set(Math.cos(ve)*11,8,Math.sin(ve)*11),_t.rotation.z=-Math.cos(ve)*.5,_t.rotation.x=Math.sin(ve)*.5,A.add(_t);let I=new ye(de.box,Me(2303787));I.scale.set(6,2,6),I.position.set(Math.cos(ve)*16,1,Math.sin(ve)*16),A.add(I)}let se=new ye(de.cyl,Me(3817284));se.scale.set(3.6,16,3.6),se.position.y=16,A.add(se);let ie=new Ke;ie.position.y=26;for(let ot of[-1,1]){let ve=new ye(de.box,Me(4870228));ve.scale.set(12,13,2.4),ve.position.set(0,2,ot*7.6),ie.add(ve)}let pe=new ye(de.box,Me(5659994));pe.scale.set(13,9.5,12),pe.position.y=3,ie.add(pe);let qe=new ye(de.cyl,Me(1316892));qe.scale.set(3.2,2,3.2),qe.rotation.z=Math.PI/2,qe.position.set(7.6,4.5,0),ie.add(qe);let Qe=new ye(de.sphere,Me(13777960,{emissive:13777960,emissiveIntensity:.8}));Qe.scale.set(1.5,1.5,1.5),Qe.position.set(9.2,4.5,0),ie.add(Qe);let Rt=F.tier===3?22:F.tier===2?17:13,O=new ye(de.box,Me(1974822));if(O.scale.set(Rt,3.8,3.4),O.position.set(Rt/2+5,-2.6,0),ie.add(O),F.tier===2){let ot=O.clone();ot.position.z=4.4,ie.add(ot)}let Tt=new ye(de.cyl,Me(G,{emissive:G,emissiveIntensity:.45}));Tt.scale.set(2,2.6,2),Tt.rotation.z=Math.PI/2,Tt.position.set(Rt+6,-2.6,0),ie.add(Tt);let tt=new ye(de.cyl,Me(G,{emissive:G,emissiveIntensity:.3}));tt.scale.set(4.1,2,4.1),tt.position.y=21,A.add(tt),A.add(ie),J.pivot=ie}else if(F.type==="cupboard"){let G=new ye(de.box,Me(le(F.owner)));G.scale.set(42,40,42),G.position.y=20,A.add(G);let se=new ye(de.box,Me(2891532));se.scale.set(46,5,46),se.position.y=42,A.add(se);let ie=fs(7790698,26);ie.position.y=50,A.add(ie),J.led=ie}else{let G=new ye(de.box,Me(7031332));G.scale.set(40,24,40),G.position.y=12,A.add(G)}N.add(A),k.set(Z,J)}}for(let[Z,F]of k)Y.has(Z)||(N.remove(F.group),k.delete(Z))}}let _e=new Ke;e.add(_e);let Ce=-1;function Ue(){if(n.fences.length!==Ce){Ce=n.fences.length,_e.clear();for(let Z of n.fences){let F=new ye(de.box,Me(8215600));F.scale.set(46,22,5),F.position.set(Z.x,11,Z.y),F.rotation.y=-Z.a,_e.add(F)}}}return{sync(Z){m-=Z,m<=0&&(m=.25,g()),n.barrels.forEach((z,S)=>{P[S].visible=z.hp>0}),fe(),Ue();for(let[z,S]of k){let L=n.deploys.get(z);if(L&&(S.pivot&&(S.pivot.rotation.y=-(L.angle||0)),S.led&&L.store)){let U=L.store.wood+L.store.stone+L.store.metal>0;S.led.material.color.setHex(U?7790698:16734780)}}if(R.quarryArm){let z=n.quarry;R.quarryArm.rotation.z=z&&z.owner?Math.sin(z.arm*2.4)*.35:-.18}for(let z of R.gates)z.pivot.rotation.z=(1-z.cr.gate)*1.35;let F=n.player;for(let z of R.fadeables){let S=F.x-z.x,L=F.y-z.y,K=!F.dead&&S*S+L*L<(z.r+90)*(z.r+90)?.3:1;for(let ge of z.mats)ge.opacity+=(K-ge.opacity)*Math.min(1,Z*7)}}}}function VM(n,e){let{hash2:t}=GM,i=[],s=[],r=[],o=13824,a=9216;for(let u=120;u<a-120;u+=150)for(let p=120;p<o-120;p+=150){let x=t(p/150|0,u/150|0);if(x>.62)continue;let m=p+x*977%1*130,g=u+x*467%1*130;if(!n.world.onLand(m,g)||n.world.lakeAt(m,g)||n.world.pathDist(m,g)<40)continue;let y=n.world.biomeAt(m,g);y==="jungle"?i.push({x:m,y:g,h:x}):y==="desert"?x<.3&&s.push({x:m,y:g,h:x}):x<.4&&r.push({x:m,y:g,h:x})}let l=new mt,c=new je,f=new Yt(de.cone,Me(16777215),i.length||1);i.forEach((u,p)=>{let x=5+u.h*8;l.makeRotationY(u.h*6).scale(new V(x,x*1.8,x)).setPosition(u.x,x*.9,u.y),f.setMatrixAt(p,l),c.setHex(4876846).multiplyScalar(.8+u.h*37%1*.5),f.setColorAt(p,c)});let h=new Yt(de.ico,Me(16777215),s.length||1);s.forEach((u,p)=>{let x=3+u.h*8;l.makeRotationY(u.h*9).scale(new V(x,x*.55,x)).setPosition(u.x,x*.3,u.y),h.setMatrixAt(p,l),c.setHex(10259040).multiplyScalar(.85+u.h*53%1*.3),h.setColorAt(p,c)});let d=new Yt(de.sphere,Me(15265781),r.length||1);r.forEach((u,p)=>{let x=6+u.h*12;l.makeScale(x,x*.4,x*.8).setPosition(u.x,x*.16,u.y),d.setMatrixAt(p,l)});for(let u of[f,h,d])u.frustumCulled=!1,u.instanceColor&&(u.instanceColor.needsUpdate=!0),e.add(u)}var GM={hash2(n,e){let t=n*374761393+e*668265263|0;return t=t^t>>13|0,t=Math.imul(t,1274126177),((t^t>>16)>>>0)/4294967296}};function WM(n,e,t,i){let s=new Ke;s.position.set(t.x,0,t.y);let r=(l,c,f,h,d,u,p,x,m=0,g)=>{let y=new ye(l,Me(c,g));return y.scale.set(f,h,d),y.position.set(u,p,x),y.rotation.y=m,s.add(y),y},o=[],a=(...l)=>{let c=r(...l),f=c.material.clone();return f.transparent=!0,c.material=f,o.push(f),c};if(t.type==="gas"){a(de.box,11027246,216,8,30,0,64,-70);for(let l of[-96,-30,36,96])r(de.box,4147024,6,60,6,l,30,-62);for(let l of[-58,0])r(de.box,5989227,18,30,16,l,15,-22);a(de.box,9081241,54,52,50,58,26,-16),r(de.box,12574959,18,14,2,66,34,10),r(de.box,13279562,26,26,6,-104,40,-62)}else if(t.type==="junk"){for(let l=0;l<5;l++){let c=l/5*_m;r(de.ico,7238780,26,14,20,Math.cos(c)*70,8,Math.sin(c)*54,c)}r(de.box,8011824,56,22,26,-58,11,-40,.3),r(de.box,3824234,56,22,26,54,11,44,-.5),r(de.cyl,2302237,12,16,12,70,8,-50),r(de.cyl,2302237,12,16,12,-66,8,58)}else if(t.type==="warehouse"){a(de.box,8291470,252,70,164,0,35,0),a(de.box,5988971,264,10,176,0,74,0);for(let l of[-72,0,72])a(de.box,2764597,60,46,4,l,23,84);a(de.box,4870488,30,14,16,-38,84,0),a(de.box,4870488,30,14,16,38,84,0)}else if(t.type==="quarry"){r(de.cyl,3814438,46,8,28,-36,4,26),r(de.box,3948871,12,64,12,8,32,-46);let l=new Ke;l.position.set(14,60,-44);let c=new ye(de.box,Me(8226963));c.scale.set(86,9,9),l.add(c);let f=new ye(de.sphere,Me(10768430));f.scale.set(9,9,9),f.position.x=-43,l.add(f),s.add(l),i.quarryArm=l,r(de.box,5061152,4,46,4,-44,23,-58),r(de.box,7236186,24,13,2,-32,40,-58)}o.length&&i.fadeables.push({x:t.x,y:t.y,r:t.r,mats:o}),e.add(s)}function XM(n,e){let t=n.world.shop,i=new Ke;i.position.set(t.x,0,t.y);let s=new ye(de.cyl,Me(6969398));s.scale.set(46,6,46),s.position.y=3,i.add(s);let r=new ye(de.box,Me(10120764));r.scale.set(60,24,22),r.position.set(0,16,2),i.add(r);let o=new ye(de.cone,Me(11751744));o.scale.set(52,26,52),o.position.y=56,i.add(o);for(let l of[-34,34]){let c=new ye(de.cyl,Me(6177574));c.scale.set(3,44,3),c.position.set(l,22,8),i.add(c)}let a=new ye(new xo(Mt-7,Mt,72),new tn({color:9885695,transparent:!0,opacity:.3,side:Cn,depthWrite:!1}));a.rotation.x=-Math.PI/2,a.position.y=1.2,i.add(a),e.add(i)}var wf=13081716,wr=Math.PI*2;function Ut(n,e,t,i,s,r,o){let a=new ye(de.box,Me(n));return a.scale.set(e,t,i),a.position.set(s,r,o),a}function hn(n,e,t,i,s,r=1,o=1){let a=new ye(de.sphere,Me(n));return a.scale.set(e,e*r,e*o),a.position.set(t,i,s),a}var Mm={pistol:n=>n.add(Ut(2303519,10,4,3.4,11,0,0)),rifle:n=>{n.add(Ut(2303519,20,3.6,3.4,15,0,0)),n.add(Ut(4864544,5,5,3.8,7,-1,0))},shotgun:n=>{n.add(Ut(2827808,16,4.6,4,13,0,0)),n.add(Ut(5980710,5,5.5,4.2,5,-1,0))},hmg:n=>{n.add(Ut(2303519,24,5,4.4,16,0,0)),n.add(Ut(3817271,6,7,4.8,10,-3,0))},tool:n=>{n.add(Ut(5980710,13,3,3,9,0,0)),n.add(Ut(12173511,4,8,3.4,16,1,0))},rocket:n=>{n.add(Ut(3751983,22,6.5,6,14,1,0)),n.add(Ut(16751421,3,7,6.4,25,1,0))},hammer:n=>{n.add(Ut(5980710,11,3,3,8,0,0)),n.add(Ut(10133928,4,7,4.4,14,1,0))},jack:n=>{n.add(Ut(1842204,4,4,3.4,6,1,0)),n.add(Ut(13279802,11,9,5.5,13,0,0)),n.add(Ut(3817271,4,5.5,4,20,-1,0)),n.add(Ut(12173511,11,2.6,2.6,27,-2,0))}};function Tm(n,e={}){let t=new Ke,i={};i.shadow=Ns(46),i.shadow.position.y=1,t.add(i.shadow),i.lower=new Ke,t.add(i.lower);for(let c of["L","R"]){let f=new Ke;f.position.set(0,12,c==="L"?-3.2:3.2);let h=Ut(3289130,4.6,12,4.6,0,-6,0);f.add(h),i.lower.add(f),i["leg"+c]=f}i.torso=Ut(n,10,14,12,0,24.5,0),t.add(i.torso),i.torsoShade=Ut(bm(n,.7),10.4,4.5,12.4,0,19,0),t.add(i.torsoShade),i.armor=Ut(9804963,11,10,13,.8,24.5,0),i.armor.visible=!1,t.add(i.armor),i.pack=Ut(4866100,4,9,8,-7,25,0),t.add(i.pack),i.armL=new Ke,i.armL.position.set(0,30,-7.4);let s=Ut(wf,3.6,11,3.6,0,-5,0);i.armL.add(s),t.add(i.armL),i.armR=new Ke,i.armR.position.set(2,29,7.4),i.armR.add(Ut(wf,9,3.6,3.6,4.5,0,-1.5)),i.gun=new Ke,i.armR.add(i.gun),t.add(i.armR),i.head=new Ke,i.head.position.y=38,i.head.add(hn(wf,5.6,0,0,0));let r=new ye(de.sphere,Me(e.hairCol??3811864));r.scale.set(5.9,4.4,5.9),r.position.y=2.2,i.head.add(r);let o=new ye(de.cyl,Me(n));o.scale.set(5.9,1.6,5.9),o.position.y=1.2,i.head.add(o),i.band=o,i.helmet=new Ke;let a=new ye(de.sphere,Me(10136504));a.scale.set(6.3,6.3,6.3),i.helmet.add(a);let l=Ut(1119516,3,3,9.5,4.6,-.5,0);return i.helmet.add(l),i.helmet.visible=!1,i.head.add(i.helmet),t.add(i.head),t.userData={parts:i,colHex:n,phase:Math.random()*7,setGun(c){t.userData.gunKind!==c&&(t.userData.gunKind=c,i.gun.clear(),(Mm[c]||Mm.pistol)(i.gun))},setArmor(c,f){i.armor.visible=c>0,c>0&&(i.armor.material=Me(c>=3?6126235:c===2?9804963:8746824)),i.helmet.visible=f>0,f>0&&(i.helmet.children[0].material=Me(f>=3?8163017:f===2?10136504:13482898))},setColor(c){t.userData.colHex!==c&&(t.userData.colHex=c,i.torso.material=Me(c),i.torsoShade.material=Me(bm(c,.7)),o.material=Me(c))},animate(c,f,h,d,u){let p=t.userData,x=Math.min(.1,Math.max(.001,c-(p.lastT??c)));p.lastT=c;let m=p.hipsCur??0,g=1,y=1;if(f>.05&&u!==null&&u!==void 0){let D=u%wr;D>Math.PI&&(D-=wr),D<-Math.PI&&(D+=wr),Math.abs(D)>2.06&&(g=-1,y=.72,D=D>0?D-Math.PI:D+Math.PI),m=D}else f<=.05&&(m=0);let M=p.hipsCur??0,w=(m-M)%wr;w>Math.PI&&(w-=wr),w<-Math.PI&&(w+=wr),M+=w*Math.min(1,x*14),p.hipsCur=M,i.lower.rotation.y=-M;let C=c*11+p.phase,T=Math.sin(C)*.75*f*y*g;if(i.legL.rotation.z=T,i.legR.rotation.z=-T,i.armL.rotation.z=-T*.55,t.position.y=Math.abs(Math.sin(C))*1.4*f,h&&d){i.armR.rotation.z=-.22+Math.sin(c*62)*.05;let D=Math.sin(c*57)*1.5,_=Math.sin(c*71)*1.1;t.position.y+=Math.abs(_)*.8,t.userData.judder={x:D,z:Math.cos(c*49)*1.3}}else t.userData.judder=null,h?i.armR.rotation.z=-.5+Math.sin(c*9)*.55:i.armR.rotation.z=0}},t.userData.setGun(e.gun||"pistol"),t}function bm(n,e){let t=Math.min(255,(n>>16&255)*e)|0,i=Math.min(255,(n>>8&255)*e)|0,s=Math.min(255,(n&255)*e)|0;return t<<16|i<<8|s}function wm(n,e,t,i,s,r){let o=[];for(let a of[-1,1])for(let l of[-1,1]){let c=new Ke;c.position.set(a*i,r,l*s);let f=new ye(de.cyl,Me(e));f.scale.set(t*.16,r,t*.16),f.position.y=-r/2,c.add(f),n.add(c),o.push({pivot:c,phase:a*l>0?0:Math.PI})}return o}function Em(n,e){let t=new Ke,i={legs:[],extra:null},s={boar:[8282692,5521451],wolf:[7698047,4605773],bear:[6375471,3812380],polarbear:[14542315,11451592],alligator:[5599286,3229980],snake:[11704890,7430430],scorpion:[8278566,4664850]}[n]||[8947848,5592405],[r,o]=s,a=Ns(e*3.2);if(a.position.y=.8,t.add(a),n==="snake"){i.segs=[];for(let c=0;c<6;c++){let f=hn(c%2?o:r,e*(.55-c*.05),-c*e*.5,e*.4,0);t.add(f),i.segs.push(f)}let l=hn(r,e*.62,e*.45,e*.45,0,.8,.9);t.add(l),i.head=l}else if(n==="scorpion"){t.add(hn(o,e*.85,0,e*.4,0,.5,.8)),t.add(hn(r,e*.62,e*.2,e*.55,0,.5,.75));for(let h of[-1,1])t.add(Ut(r,e*.8,e*.2,e*.18,e*.75,e*.35,h*e*.5)),t.add(hn(o,e*.26,e*1.2,e*.35,h*e*.62));i.tail=new Ke,i.tail.position.set(-e*.7,e*.5,0);let l=0,c=0;for(let h=0;h<3;h++)l-=e*.3,c+=e*.34,i.tail.add(hn(o,e*.2,l,c,0));let f=new ye(de.cone,Me(3810320));f.scale.set(e*.14,e*.3,e*.14),f.position.set(l+e*.16,c+e*.22,0),f.rotation.z=-1,i.tail.add(f),t.add(i.tail)}else if(n==="alligator"){let l=e*.55;t.add(hn(o,e,0,l,0,.5,.72)),t.add(hn(r,e*.82,0,l+e*.18,0,.42,.6)),t.add(hn(r,e*.5,e*1.15,l,0,.5,.62)),t.add(Ut(o,e*.9,e*.16,e*.5,e*1.25,l-e*.1,0)),t.add(hn(o,e*.62,-e*1.05,l,0,.45,.6)),t.add(hn(o,e*.4,-e*1.7,l*.9,0,.45,.55));for(let c=0;c<4;c++){let f=new ye(de.cone,Me(o));f.scale.set(e*.12,e*.25,e*.12),f.position.set(-e*.6+c*e*.42,l+e*.42,0),t.add(f)}i.legs=wm(t,o,e,e*.55,e*.5,l*.8)}else{let l=n==="bear"||n==="polarbear"?1.18:1,c=e*.78*l;t.add(hn(o,e*1.05*l,0,c,0,.78,.78)),t.add(hn(r,e*.92*l,0,c+e*.12,0,.72,.7)),l>1&&t.add(hn(r,e*.7,-e*.25,c+e*.55,0));let f=e*(n==="wolf"?.46:.55),h=new Ke;if(h.position.set(e*.95*l,c+e*.18,0),h.add(hn(r,f,0,0,0)),n==="wolf"){h.add(hn(o,f*.55,f*.8,-f*.15,0,.7,.6));for(let d of[-1,1]){let u=new ye(de.cone,Me(o));u.scale.set(f*.3,f*.6,f*.3),u.position.set(-f*.3,f*.85,d*f*.5),h.add(u)}}else if(n==="boar"){h.add(hn(o,f*.5,f*.85,-f*.2,0,.7,.8));for(let d of[-1,1]){let u=new ye(de.cone,Me(15261903));u.scale.set(f*.12,f*.4,f*.12),u.position.set(f*.9,-f*.25,d*f*.4),u.rotation.z=.7,h.add(u)}}else for(let d of[-1,1])h.add(hn(o,f*.28,-f*.2,f*.85,d*f*.6));t.add(h),i.head=h,i.legs=wm(t,o,e*l,e*.5*l,e*.42*l,c*.85)}return t.userData={...i,phase:Math.random()*7,animate(l,c){let f=l*9+t.userData.phase;for(let h of i.legs)h.pivot.rotation.z=Math.sin(f+h.phase)*.55*c;if(i.segs)for(let h=0;h<i.segs.length;h++)i.segs[h].position.z=Math.sin(l*7-h*.8)*e*.3*(.4+c);i.tail&&(i.tail.rotation.z=Math.sin(l*3)*.08),i.head&&!i.segs&&(i.head.rotation.z=Math.sin(l*2.2+t.userData.phase)*.06)}},t}var Am=Math.PI*2,qM={0:"tool",1:"pistol",2:"rifle",3:"hmg",4:"rocket",5:"hammer",6:"rifle",7:"shotgun",8:"hmg"},ds=class{constructor(e,t){this.scene=e,this.make=t,this.map=new Map,this.seen=new Set,this.miss=new Map}get(e,...t){this.seen.add(e);let i=this.map.get(e);return i||(i=this.make(...t),this.map.set(e,i),this.scene.add(i)),i.visible=!0,i}sweep(){for(let[e,t]of this.map)if(this.seen.has(e))this.miss.delete(e);else{t.visible=!1;let i=(this.miss.get(e)||0)+1;i>300?(this.scene.remove(t),this.map.delete(e),this.miss.delete(e)):this.miss.set(e,i)}this.seen.clear()}};function Rm(n,e){let t=new ds(e,(S,L)=>Tm(S,{gun:L})),i=new ds(e,(S,L)=>Em(S,L));function s(){return Me(1645589)}let r=(S,L,U,K,ge,A,J)=>{let G=new ye(de.box,Me(S));return G.scale.set(L,U,K),G.position.set(ge,A,J),G},o=new ds(e,S=>{let L=new Ke;L.add(r(3356462,34,3,24,2,8,0)),L.add(r(S,15,11,15,4,15,0)),L.add(r(S,13,16,3.4,-3,24,0)),L.add(r(2303519,9,7,12,15,13,0)),L.add(r(3817271,10,10,11,-11,14,0));let U=new ye(de.cyl,Me(2895656));U.scale.set(2.4,16,2.4),U.position.set(-2,32,0),L.add(U),L.add(r(2895656,42,3.6,3.6,-32,22,0)),L.add(r(3356462,8,12,2.4,-51,26,0));let K=r(1645589,1.4,16,2.6,-53,24,3);L.add(K);for(let se of[-1,1]){let ie=new ye(de.cyl,Me(2303519));ie.scale.set(1.8,52,1.8),ie.rotation.z=Math.PI/2,ie.position.set(2,2.5,se*13),L.add(ie),L.add(r(2303519,2,8,2,-8,5,se*13)),L.add(r(2303519,2,8,2,12,5,se*13))}let ge=r(1645589,96,1.6,7,-2,41,0);L.add(ge);let A=new Ke;A.add(r(S,8,11,9,4,21,0));let J=new ye(de.sphere,Me(13081716));J.scale.set(4.5,4.5,4.5),J.position.set(4,30,0),A.add(J),A.visible=!1,L.add(A);let G=Ns(86);return G.position.y=1,L.add(G),L.userData={rotor:ge,tailRotor:K,sh:G,pilot:A},L}),a=new ds(e,S=>{let L=new Ke;L.add(r(S,104,30,34,0,26,0)),L.add(r(2501666,104,8,35,0,13,0)),L.add(r(2040857,18,22,30,56,24,0)),L.add(r(10470104,6,9,26,64,30,0));let U=r(2896680,20,4,30,-56,12,0);U.rotation.z=.5,L.add(U);for(let G=0;G<4;G++)L.add(r(1316892,7,7,2,32-G*22,30,17.6));for(let G=0;G<4;G++)L.add(r(1316892,7,7,2,32-G*22,30,-17.6));L.add(r(3817524,26,10,20,-38,46,0));let K=r(2895656,4,12,4,38,46,0);L.add(K);let ge=r(1645589,100,2,8,38,54,0);L.add(ge);let A=r(1645589,100,2,8,-38,58,0);L.add(A);for(let[G,se]of[[44,14],[44,-14],[-40,16],[-40,-16]]){let ie=new ye(de.cyl,Me(1316892));ie.scale.set(4.5,3,4.5),ie.rotation.x=Math.PI/2,ie.position.set(G,5,se),L.add(ie)}let J=Ns(150);return J.position.y=1,L.add(J),L.userData={rotor:ge,rotor2:A,sh:J},L}),l=new ds(e,S=>S()),c=new ds(e,(S,L)=>fs(S,L)),f=700,h=new Yt(de.quad,new tn({color:2366482,transparent:!0,opacity:.34,depthWrite:!1,side:Cn}),f);h.frustumCulled=!1,h.renderOrder=2,e.add(h);let d=new mt,u=new mt,p=new V,x=64,m=[],g=new Yt(de.box,new Rn({color:16777215,flatShading:!0}),x);g.frustumCulled=!1,e.add(g);let y=new mt,M=new je,w={wood:9069104,stone:8685967,metal:13145412},C=90,T=[],D=new qt,_=new Float32Array(C*3);D.setAttribute("position",new Jt(_,3));let v=new ki(D,new pi({color:16771491,size:6,transparent:!0,opacity:.95,blending:On,depthWrite:!1,sizeAttenuation:!0}));v.frustumCulled=!1,e.add(v);function P(S){let L=S.jack?5:3;for(let U=0;U<L;U++){m.length>=x&&m.shift();let K=Math.random()*Am;m.push({x:S.x+Math.cos(K)*6,y:S.y+Math.sin(K)*6,h:18+Math.random()*14,vx:Math.cos(K)*(40+Math.random()*70),vy:Math.sin(K)*(40+Math.random()*70),vh:60+Math.random()*90,life:.85,rot:Math.random()*7,vrot:(Math.random()-.5)*14,s:2.2+Math.random()*(S.jack?3.4:2.2),col:w[S.kind]||9069104})}if(S.jack)for(let U=0;U<7;U++){T.length>=C&&T.shift();let K=Math.random()*Am;T.push({x:S.x,y:S.y,h:16,vx:Math.cos(K)*(90+Math.random()*160),vy:Math.sin(K)*(90+Math.random()*160),vh:40+Math.random()*120,life:.22+Math.random()*.14})}}function R(S){for(let U=m.length-1;U>=0;U--){let K=m[U];if(K.life-=S,K.life<=0){m.splice(U,1);continue}K.vh-=320*S,K.x+=K.vx*S,K.y+=K.vy*S,K.h+=K.vh*S,K.h<1.5&&(K.h=1.5,K.vh*=-.35,K.vx*=.6,K.vy*=.6),K.rot+=K.vrot*S}m.forEach((U,K)=>{y.makeRotationY(U.rot).scale(new V(U.s,U.s,U.s)).setPosition(U.x,U.h,U.y),g.setMatrixAt(K,y),M.setHex(U.col),g.setColorAt(K,M)}),g.count=m.length,g.instanceMatrix.needsUpdate=!0,g.instanceColor&&(g.instanceColor.needsUpdate=!0);let L=0;for(let U=T.length-1;U>=0;U--){let K=T[U];if(K.life-=S,K.life<=0){T.splice(U,1);continue}K.vh-=260*S,K.x+=K.vx*S,K.y+=K.vy*S,K.h=Math.max(1,K.h+K.vh*S)}for(let U of T){if(L>=C)break;_[L*3]=U.x,_[L*3+1]=U.h,_[L*3+2]=U.y,L++}D.setDrawRange(0,L),D.attributes.position.needsUpdate=!0}let N=46,X=[];for(let S=0;S<N;S++){let L=new As(new ns({map:yc(),color:8817810,transparent:!0,opacity:0,depthWrite:!1}));L.visible=!1,e.add(L),X.push(L)}let q=[];function k(S,L,U,K){q.length>=N&&q.shift(),q.push({x:S,y:L,h:U,life:2.8,max:2.8,s0:26*K,drift:Math.random()*7})}function B(S){for(let L=q.length-1;L>=0;L--){let U=q[L];if(U.life-=S,U.life<=0){q.splice(L,1);continue}U.h+=50*S,U.x+=n.wind*9*S,U.y+=Math.sin(U.drift)*3*S}X.forEach((L,U)=>{let K=q[U];if(!K){L.visible=!1;return}L.visible=!0;let ge=1-K.life/K.max,A=K.s0*(1+ge*2.4);L.scale.set(A,A,1),L.position.set(K.x,K.h,K.y),L.material.opacity=.36*(K.life/K.max)*Math.min(1,ge*6+.2)})}function Y(S,L){let U=S.pts,K=0;for(let A=0;A<S.seg&&A<U.length-1;A++)K+=Math.hypot(U[A+1].x-U[A].x,U[A+1].y-U[A].y);K+=Math.hypot(S.x-U[Math.min(S.seg,U.length-1)].x,S.y-U[Math.min(S.seg,U.length-1)].y);let ge=[];for(let A of L){let J=Math.max(.1,K+A),G=0,se=0;for(;G<U.length-2;){let Rt=Math.hypot(U[G+1].x-U[G].x,U[G+1].y-U[G].y);if(se+Rt>=J)break;se+=Rt,G++}let ie=U[G],pe=U[G+1],qe=Math.hypot(pe.x-ie.x,pe.y-ie.y)||1,Qe=Math.max(0,Math.min(1,(J-se)/qe));ge.push({x:ie.x+(pe.x-ie.x)*Qe,y:ie.y+(pe.y-ie.y)*Qe,a:Math.atan2(pe.y-ie.y,pe.x-ie.x)})}return ge}let le=1200,fe=new qt,_e=new Float32Array(le*3),Ce=new Float32Array(le*3);fe.setAttribute("position",new Jt(_e,3)),fe.setAttribute("color",new Jt(Ce,3));let Ue=new ki(fe,new pi({size:7,vertexColors:!0,transparent:!0,opacity:.9,sizeAttenuation:!0,depthWrite:!1}));Ue.frustumCulled=!1,e.add(Ue);let Z=new Map;function F(S){let L=Z.get(S);if(!L){L=new je;try{if(S.startsWith("rgba")){let U=S.match(/rgba?\(([\d.]+),\s*([\d.]+),\s*([\d.]+)/);U&&L.setRGB(+U[1]/255,+U[2]/255,+U[3]/255)}else L.set(S)}catch{L.setRGB(.7,.7,.7)}Z.set(S,L)}return L}function z(S,L,U,K,ge,A={}){S.position.set(L,0,U),S.rotation.y=-K;let J=S.userData;J.setColor(ge),A.gun&&J.setGun(A.gun),J.setArmor(A.bodyArmor||0,A.facemask||0);let G=null;(A.vx||A.vy)&&Math.hypot(A.vx,A.vy)>18&&(G=Math.atan2(A.vy,A.vx)-K),J.animate(n.t,A.moveAmt??0,!!A.gathering,!!A.jack,G),J.judder&&(S.position.x+=J.judder.x,S.position.z+=J.judder.z)}return{sync(S,L){for(let A of n.units){if(A.dead||A.eliminated)continue;if(A.copter&&!A.copter.destroyed&&L.inView(A.copter.x,A.copter.y,200)){let ie=o.get(A.copter,parseInt(A.col.slice(1),16)),pe=A.flying&&A.state==="trade";ie.position.set(A.copter.x,pe?70:0,A.copter.y),ie.rotation.y=-(A.copter.angle||0),ie.userData.rotor.rotation.y=A.copter.rotor||0,ie.userData.tailRotor.rotation.z=(A.copter.rotor||0)*4,ie.userData.pilot.visible=pe,ie.userData.sh.position.y=pe?-68:1}if(A.flying||!L.inView(A.x,A.y,200))continue;let J=parseInt((A.ally?"#7ec850":A.col).slice(1),16),G=t.get(A,J,A.gun),se=Math.min(1,Math.hypot(A.vx,A.vy)/120);z(G,A.x,A.y,A.angle,J,{gun:A.gathering?A.jack?"jack":"tool":A.gun,moveAmt:se,gathering:A.gathering,jack:A.jack,bodyArmor:A.bodyArmor,facemask:A.facemask,vx:A.vx,vy:A.vy})}let U=n.player;if(!U.inCopter){let A=t.get(U,8030800,"pistol"),J=U.moving?1:0,G=n.slot===0&&n.jackhammer;z(A,U.x,U.y,U.angle,U.hurt>0?12876382:8030800,{gun:n.slot===0&&n.jackhammer?"jack":qM[n.slot]||"pistol",moveAmt:J,gathering:U.swing>0&&n.slot===0,jack:G,bodyArmor:U.bodyArmor,facemask:U.facemask,vx:U.vx,vy:U.vy}),U.dead&&(A.visible=!1)}if(n.copter&&!n.copter.destroyed){let A=o.get(n.copter,6121548),J=U.inCopter;A.position.set(n.copter.x,J?80:0,n.copter.y),A.rotation.y=-(n.copter.angle||0),A.userData.rotor.rotation.y=(n.copter.rotor||0)*3,A.userData.tailRotor.rotation.z=(n.copter.rotor||0)*11,A.userData.pilot.visible=J,A.userData.sh.position.y=J?-78:1}for(let A of n.guards){if(A.dead||!L.inView(A.x,A.y,150))continue;let J=t.get(A,12410412,"rifle"),G=Math.min(1,Math.hypot(A.vx||0,A.vy||0)/90+.2);z(J,A.x,A.y,A.angle,12410412,{gun:"rifle",moveAmt:G,facemask:1,vx:A.vx,vy:A.vy})}for(let A of n.animals){if(A.dead||!L.inView(A.x,A.y,150))continue;let J=i.get(A,A.type,A.r),G=0;A.type==="alligator"&&n.world.lakeAt(A.x,A.y)&&(G=A.r*.62),J.userData.sinkY=(J.userData.sinkY??0)+(G-(J.userData.sinkY??0))*Math.min(1,S*5),J.position.set(A.x,-J.userData.sinkY,A.y);let se=Math.hypot(A.vx||0,A.vy||0),ie=se>2?Math.atan2(A.vy,A.vx):A.dir;J.rotation.y=-ie,J.userData.animate(n.t,Math.min(1,se/80))}for(let A of n.transports){let J=A.owner===Ge?8308816:parseInt((n.teams.find(ie=>ie.owner===A.owner)||{col:"#888888"}).col.slice(1),16),G=a.get(A,J),se=A.state==="fly"||A.state==="return"||A.riders.length>0;G.position.set(A.x,se?110:2,A.y),G.rotation.y=-A.angle,G.userData.rotor.rotation.y=A.rotor,G.userData.rotor2.rotation.y=-A.rotor,G.userData.sh.position.y=se?-106:1}for(let A of n.trains){let J=l.get(A,()=>{let ie=new Ke,pe=Fo("metal").clone();pe.color.setScalar(.62);let qe=new ye(de.box,pe);qe.scale.set(54,30,26),qe.position.y=17,ie.add(qe),ie.add(r(2303788,18,14,27,-14,38,0)),ie.add(r(10470104,4,7,22,-4,39,0));let Qe=new ye(de.cyl,Me(1843238));Qe.scale.set(4.5,12,4.5),Qe.position.set(16,38,0),ie.add(Qe);let Rt=r(2764339,12,10,24,30,8,0);Rt.rotation.z=-.5,ie.add(Rt);let O=fs(16771491,44);O.position.set(30,20,0),ie.add(O);let Tt=[];for(let tt=0;tt<4;tt++){let ot=new Ke,ve=Fo("wood").clone();ve.color.setScalar(.78+tt%2*.14);let _t=new ye(de.box,ve);_t.scale.set(46,26,24),_t.position.y=15,ot.add(_t);let I=r(2893344,48,3.5,26,0,30,0);ot.add(I),ot.add(r(2038292,8,12,25,0,14,0)),ie.add(ot),Tt.push(ot)}return ie.userData={cars:Tt,smokeT:0},ie}),G=Y(A,[0,-64,-116,-168,-220]),se=G[0];if(J.position.set(se.x,0,se.y),J.rotation.y=-se.a,J.userData.cars.forEach((ie,pe)=>{let qe=G[pe+1],Qe=qe.x-se.x,Rt=qe.y-se.y,O=Math.cos(se.a),Tt=Math.sin(se.a);ie.position.set(Qe*O+Rt*Tt,0,-Qe*Tt+Rt*O),ie.rotation.y=-(qe.a-se.a)}),J.userData.smokeT-=S,J.userData.smokeT<=0){J.userData.smokeT=.12;let ie=se.x+Math.cos(se.a)*16,pe=se.y+Math.sin(se.a)*16;k(ie,pe,40,1)}}for(let A of n.convoys){if(A.dead)continue;let J=l.get(A,()=>{let G=new Ke,se=new ye(de.box,Me(5660746));se.scale.set(68,24,36),se.position.y=12,G.add(se);let ie=new Ke;ie.position.y=28;let pe=new ye(de.cyl,Me(3752499));pe.scale.set(12,9,12),ie.add(pe);let qe=new ye(de.box,Me(1250830));qe.scale.set(32,5,5),qe.position.x=20,ie.add(qe),G.add(ie),G.userData={turret:ie};let Qe=Ns(90);return Qe.position.y=1,G.add(Qe),G});J.position.set(A.x,0,A.y),J.rotation.y=-A.ang,J.userData.turret.rotation.y=-(A.taim-A.ang);for(let G of A.guards){if(G.dead)continue;let se=t.get(G,7305806,"rifle");z(se,G.x,G.y,G.angle,7305806,{gun:"rifle",moveAmt:.6,facemask:2})}}if(n.patrol){let A=n.patrol,J=l.get("patrol",()=>{let G=new Ke;G.add(r(4740158,76,20,20,0,0,0)),G.add(r(3818548,76,6,21,0,-12,0));let se=new ye(de.sphere,Me(4740158));se.scale.set(14,11,10),se.position.set(40,-1,0),G.add(se),G.add(r(1316892,14,8,14,26,8,0)),G.add(r(10470104,4,6,12,34,7,0)),G.add(r(1974822,10,6,6,36,-13,0)),G.add(r(1316892,14,2.6,2.6,46,-13,0));for(let Qe of[-1,1]){G.add(r(3818548,16,4,26,2,2,Qe*22));for(let Rt of[16,26]){let O=new ye(de.cyl,Me(2830374));O.scale.set(4.5,16,4.5),O.rotation.z=Math.PI/2,O.position.set(4,-3,Qe*Rt),G.add(O)}}G.add(r(3357744,52,6,6,-58,4,0)),G.add(r(3818548,9,18,3,-82,12,0));let ie=r(1645589,1.6,20,3,-84,10,4);G.add(ie);let pe=r(2895656,5,8,5,0,13,0);G.add(pe);let qe=r(1645589,124,2.2,9,0,19,0);return G.add(qe),G.userData={rotor:qe,tailRotor:ie},G});J.position.set(A.x,150,A.y),J.rotation.y=-A.angle,J.userData.rotor.rotation.y=A.rotor,J.userData.tailRotor.rotation.z=A.rotor*4}if(n.plane){let A=l.get("plane",()=>{let J=new Ke,G=new ye(de.sphere,Me(8291985));G.scale.set(28,8,8),J.add(G);let se=new ye(de.box,Me(7041660));return se.scale.set(10,2,52),J.add(se),J});A.position.set(n.plane.x,320,n.plane.y),A.rotation.y=n.plane.vx<0?Math.PI:0}if(n.airdrop){let A=n.airdrop,J=l.get("airdrop",()=>{let se=new Ke,ie=new ye(de.box,Me(6120530));ie.scale.set(30,24,30),ie.position.y=12,se.add(ie);let pe=new ye(de.box,Me(16766827));pe.scale.set(32,5,32),pe.position.y=12,se.add(pe);let qe=new ye(de.cone,Me(12079162,{transparent:!0,opacity:.9}));return qe.scale.set(34,26,34),qe.position.y=56,se.add(qe),se.userData={chute:qe},se}),G=A.fall<1?(1-A.fall)*320:0;J.position.set(A.x+(A.fall<1?Math.sin(A.sway)*12:0),G,A.fall<1?A.gy:A.y),J.userData.chute.visible=A.fall<1}if(n.lockedCrate){let A=n.lockedCrate,J=l.get("crate",()=>{let se=new Ke,ie=new ye(de.box,Me(3948871));ie.scale.set(40,26,30),ie.position.y=13,se.add(ie);let pe=fs(16758858,22);return pe.position.set(13,26,-8),se.add(pe),se.userData={light:pe},se});J.position.set(A.x,0,A.y);let G=A.blink%.8<.4;J.userData.light.visible=G,J.userData.light.material.color.setHex(A.started?16758858:13777960)}for(let A of n.bullets){let J=l.get(A,()=>{let se=new Ke,ie=new ye(de.box,new tn({color:16771491}));ie.scale.set(34,3.6,3.6),se.add(ie);let pe=new ye(de.box,new tn({color:16771491,transparent:!0,opacity:.55,blending:On,depthWrite:!1}));return pe.scale.set(40,8,8),se.add(pe),se.userData={core:ie,halo:pe},se});J.position.set(A.x,18,A.y),J.rotation.y=-Math.atan2(A.vy,A.vx);let G=A.col==="hmg"?16734762:A.ricochet?8837375:16771491;J.userData.core.material.color.setHex(G),J.userData.halo.material.color.setHex(G)}for(let A of n.rockets){let J=l.get(A,()=>{let G=new Ke,se=new ye(de.cone,Me(3751983));se.scale.set(5,18,5),se.rotation.z=-Math.PI/2,G.add(se);let ie=fs(16751421,34);return ie.position.x=-12,G.add(ie),G});J.position.set(A.x,18,A.y),J.rotation.y=-Math.atan2(A.vy,A.vx)}for(let A of n.grenades)l.get(A,()=>{let G=new ye(de.sphere,Me(2898466));return G.scale.set(6,6,6),G}).position.set(A.x,8+Math.abs(Math.sin(A.bob*6))*8,A.y);for(let A of n.satchels){let J=l.get(A,()=>{let G=new ye(de.box,Me(3814444));return G.scale.set(14,9,12),G.position.y=4,G});J.position.set(A.x,4,A.y),J.visible=Math.sin(n.t*18)>-.6}for(let A of n.loot){if(!L.inView(A.x,A.y,100))continue;let J=l.get(A,()=>{let se=new ye(de.box,Me(14081248));return se.scale.set(9,9,9),se}),G={wood:12158022,stone:11186616,metal:15245902,scrap:14081248,ammo:16769162,rocket:16751194,sniper:12575743,satchel:13154442,gun:12896701};J.material=Me(G[A.kind]||14081248),J.position.set(A.x,8+Math.sin(A.bob*3)*2.5,A.y),J.rotation.y=A.bob}for(let A of n.fires){let J=c.get(A,16747050,90);J.position.set(A.x,16,A.y);let G=.8+Math.sin(n.t*11+A.x)*.25;J.scale.set(90*G,110*G,1)}for(let A of n.wrecks)l.get(A,()=>{let G=new Ke,se=new ye(de.box,Me(2499614));se.scale.set(30,14,20),se.position.y=7,se.rotation.y=.5,G.add(se);let ie=fs(16755260,60);return ie.position.y=14,G.add(ie),G}).position.set(A.x,0,A.y);for(let A of n.scorch){let J=l.get(A,()=>{let G=new ye(new mi(1,12),new tn({color:1314828,transparent:!0,opacity:.45,depthWrite:!1}));return G.rotation.x=-Math.PI/2,G.position.y=.8,G});J.position.set(A.x,.8,A.y),J.scale.set(A.r,A.r,1)}for(let A of n.flashes){let J=c.get(A,16757322,A.r*2.4);J.position.set(A.x,20,A.y);let G=A.life/A.max;J.material.opacity=G,J.scale.set(A.r*(2.6-G),A.r*(2.6-G),1)}if(n.muzzle){let A=c.get("muzzle",16766827,46);A.position.set(n.muzzle.x,18,n.muzzle.y),A.material.opacity=n.muzzle.t/.08}for(let A of n.events)A.type==="harvest"&&L.inView(A.x,A.y,300)&&P(A);R(S),B(S);let K=0;for(let A of n.footprints){if(K>=f)break;let J=1-A.t/10;if(J<.06||!L.inView(A.x,A.y,60))continue;let G=6.2*(.45+.55*J);d.makeRotationY(-A.a),u.makeRotationX(-Math.PI/2),d.multiply(u),p.set(G,G*.55,1),d.scale(p),d.setPosition(A.x,.45+K%9*.025,A.y),h.setMatrixAt(K,d),K++}h.count=K,h.instanceMatrix.needsUpdate=!0;let ge=0;for(let A of n.particles){if(ge>=le)break;_e[ge*3]=A.x,_e[ge*3+1]=10+(1-A.life/A.max)*14,_e[ge*3+2]=A.y;let J=F(A.col),G=Math.max(0,A.life/A.max);Ce[ge*3]=J.r*G,Ce[ge*3+1]=J.g*G,Ce[ge*3+2]=J.b*G,ge++}fe.setDrawRange(0,ge),fe.attributes.position.needsUpdate=!0,fe.attributes.color.needsUpdate=!0,t.sweep(),i.sweep(),o.sweep(),a.sweep(),l.sweep(),c.sweep()}}}function Cm(n,e){let i=new qt,s=new Float32Array(700*3),r=[];for(let g=0;g<700;g++)r.push({x:Math.random(),z:Math.random(),y:Math.random(),sp:.4+Math.random()*.8});i.setAttribute("position",new Jt(s,3));let o=new pi({color:12374764,size:5,transparent:!0,opacity:0,depthWrite:!1}),a=new ki(i,o);a.frustumCulled=!1,e.add(a);let l=[],c=()=>{if(l.length||!n.clouds)return;let g=new Cs(1,0);for(let y of n.clouds){let M=new Rn({color:16251644,emissive:9279908,flatShading:!0,transparent:!0,opacity:.5,depthWrite:!1}),w=new Ke;y.puffs.forEach((T,D)=>{let _=new ye(g,M),v=T.r*.45*(y.heavy?1:.85);_.scale.set(v,v*.45,v*.72),_.position.set(T.dx*.55,D*37%17-6,T.dy*.55),_.rotation.y=D*1.7,w.add(_)}),e.add(w);let C=new ye(new mi(y.r*1.05,14),new tn({map:bf(),transparent:!0,opacity:.5*y.op,depthWrite:!1}));C.rotation.x=-Math.PI/2,C.scale.set(1.35,1,1),e.add(C),l.push({cl:y,g:w,sh:C,matC:M})}},f=[],h=new mi(1,16),d=()=>{if(!(f.length||!n.fogBanks))for(let g of n.fogBanks){let y=new Ke,M=[];g.puffs.forEach((w,C)=>{let T=new tn({map:yc(),color:13160664,transparent:!0,opacity:0,depthWrite:!1}),D=new ye(h,T);D.rotation.x=-Math.PI/2;let _=w.r*(.85+C%3*.18);D.scale.set(_,_*.8,1),D.position.set(w.dx*.6,2+C*4.5,w.dy*.6),D.renderOrder=3+C,y.add(D),M.push({s:D,r:_,phase:C*1.7+g.dens*5,spin:(C%2?1:-1)*(.015+C*.004)})}),e.add(y),f.push({f:g,group:y,puffs:M})}},u=new qt,p=new Float32Array(120);u.setAttribute("position",new Jt(p,3));let x=new pi({color:14221190,size:9,transparent:!0,opacity:.9,blending:On,depthWrite:!1,sizeAttenuation:!0}),m=new ki(u,x);return m.frustumCulled=!1,e.add(m),{sync(g,y){c(),d();let M=n.weather,w=(y.cx+n.world.biomeRidge(y.cy))/he.w,C=.085,T=Wi((w-(2/3-C))/(2*C)),D=Wi((w-(1/3-C))/(2*C))*(1-T),_=M.rain*(D+T);if(o.opacity=Math.min(.75,_*.8),o.color.setHex(T>D?16054524:12374764),o.size=T>D?7:4.5,_>.02){let N=T>D?.12:.55;for(let X=0;X<700;X++){let q=r[X],k=(q.y+n.t*q.sp*N)%1;s[X*3]=y.cx+(q.x-.5)*2*1700+n.wind*60*k,s[X*3+1]=700*(1-k),s[X*3+2]=y.cy+(q.z-.5)*2*1700}i.attributes.position.needsUpdate=!0}let v=y.lightLevel();for(let{cl:R,g:N,sh:X,matC:q}of l){N.position.set(R.x,560,R.y),X.position.set(R.x+64,2.5,R.y+86);let k=R.x-y.cx,B=R.y-y.cy,Y=Math.sqrt(k*k+B*B),le=(Y<700?.22:Y<1400?.22+(Y-700)/700*.28:.5)*R.op;q.opacity+=(le-q.opacity)*Math.min(1,g*4),q.color.setScalar(.82+v*.18),X.material.opacity=(.32+.26*v)*R.op}for(let{f:R,group:N,puffs:X}of f){let q=n.world.biomeAt(R.x,R.y)==="winter";N.position.set(R.x,0,R.y);let k=q?0:Math.min(.16,M.fog*R.dens*.15);for(let B of X){B.s.material.opacity=k,B.s.rotation.z=B.phase+n.t*B.spin;let Y=1+Math.sin(n.t*.27+B.phase)*.07;B.s.scale.set(B.r*Y,B.r*.8*Y,1)}}let P=0;if(n.fireflies){let R=1-y.lightLevel();x.opacity=.35+.5*R+.3*Math.min(1,M.fog);for(let N of n.fireflies){if(P>=40)break;n.world.biomeAt(N.x,N.y)==="jungle"&&(p[P*3]=N.x,p[P*3+1]=16+Math.sin(N.ph)*8,p[P*3+2]=N.y,P++)}u.attributes.position.needsUpdate=!0}u.setDrawRange(0,P)}}}function Sm(n,e,t){let i=document.createElement("canvas");i.id="overlay",i.style.cssText="position:fixed;inset:0;pointer-events:none;z-index:5",document.body.appendChild(i);let s=i.getContext("2d");function r(){i.width=e.VW,i.height=e.VH}r(),addEventListener("resize",r);let o=(f,h,d=0)=>t.worldToScreen(f,h,d);function a(f,h,d,u,p){s.strokeStyle=u,s.lineWidth=2,p&&s.setLineDash(p),s.beginPath();for(let x=0;x<=36;x++){let m=x/36*Math.PI*2,g=o(f+Math.cos(m)*d,h+Math.sin(m)*d);x?s.lineTo(g.x,g.y):s.moveTo(g.x,g.y)}s.stroke(),s.setLineDash([])}return{draw(){let f=e.VW,h=e.VH;s.clearRect(0,0,f,h);let d=n.t;s.font="bold 13px Trebuchet MS",s.textAlign="center";for(let u of e.godView?[]:n.floats){let p=o(u.ox,u.y,40);if(p.behind)continue;let x=Math.max(0,u.life/u.max);s.globalAlpha=x,s.fillStyle="#000",s.fillText(u.text,p.x+1,p.y-u.lift+1),s.fillStyle=u.col,s.fillText(u.text,p.x,p.y-u.lift)}if(s.globalAlpha=1,n.buildMode&&!e.godView){let m=function(){for(let g in x.cost)if((n.inv[g]||0)<x.cost[g])return!1;return!0},u=Br(n,n.cmd.mx,n.cmd.my),p=Dc(n,Ge,n.buildPiece,u)&&m();s.fillStyle=p?"rgba(180,220,120,.4)":"rgba(210,80,60,.45)",s.strokeStyle=p?"#c4d66a":"#d2553c",s.lineWidth=2;let x=Kt[n.buildPiece];if(x.cat==="cell"){let g=u.gx*64,y=u.gy*64;s.beginPath(),[[0,0],[64,0],[64,64],[0,64]].forEach(([M,w],C)=>{let T=o(g+M,y+w);C?s.lineTo(T.x,T.y):s.moveTo(T.x,T.y)}),s.closePath(),s.fill(),s.stroke()}else{let g=Lt(u.key,{type:n.buildPiece,rot:n.buildRot&1}),y=o(g[0],g[1]),M=o(g[2],g[3]);s.lineWidth=8,s.globalAlpha=.75,s.beginPath(),s.moveTo(y.x,y.y),s.lineTo(M.x,M.y),s.stroke(),s.globalAlpha=1}}if(!e.godView&&!n.player.inCopter){for(let[u,p]of n.deploys){if(p.type!=="cupboard"||p.owner!==Ge)continue;let[x,m]=u.split(",").map(Number);a(x*64+32,m*64+32,Ot,"rgba(126,200,80,0.3)",[10,8])}if(!n.shopOpen&&!n.storeOpen){let u=Math.floor(n.cmd.mx/64),p=Math.floor(n.cmd.my/64),x=n.deploys.get(u+","+p);x&&x.type==="turret"&&a(u*64+32,p*64+32,Go[x.tier||1].range,"rgba(240,156,72,0.3)",[6,7]);let m=l(u,p);if(m){let g=o(m.x,m.y,50),y=Math.max(0,m.hp/m.max);s.fillStyle="rgba(0,0,0,.7)",s.fillRect(g.x-18,g.y-8,36,5),s.fillStyle=y>.5?"#7bbf4f":y>.25?"#d8b24a":"#c0432f",s.fillRect(g.x-18,g.y-8,36*y,5)}}}if(e.debugPaths){s.font="bold 10px Trebuchet MS";for(let u of n.units){if(u.dead||u.eliminated||u.flying||!t.inView(u.x,u.y,600))continue;let p=u.ally?"#7ec850":u.col;if(u.path&&u.pathI<u.path.length){s.strokeStyle=p,s.lineWidth=1.5,s.globalAlpha=.8,s.beginPath();let m=o(u.x,u.y);s.moveTo(m.x,m.y);for(let g=u.pathI;g<u.path.length;g++)m=o(u.path[g].x,u.path[g].y),s.lineTo(m.x,m.y);s.stroke(),s.globalAlpha=1}let x=o(u.x,u.y,56);s.fillStyle="#000",s.fillText(u.act||u.state,x.x+1,x.y+1),s.fillStyle=p,s.fillText(u.act||u.state,x.x,x.y)}}if(c(n.airdrop&&{x:n.airdrop.x,y:n.airdrop.fall<1?n.airdrop.gy:n.airdrop.y},"AIRDROP","#ffd76b","\u2708"),n.quarry){let u=n.teams.find(p=>p.owner===n.quarry.owner);c(n.quarry,"QUARRY",n.quarry.owner===Ge?"#7ec850":u?u.col:"#b9b39d","Q")}if(n.lockedCrate){let u=n.lockedCrate;c(u,u.started?"CRATE "+Math.ceil(u.t)+"s":"LOCKED CRATE","#ffb84a","C")}if(e.godView){s.font="bold 9px Trebuchet MS";for(let p of n.teams)for(let x of p.bases){if(x.dead)continue;let m=o(x.hx,x.hy);s.fillStyle=p.col,s.fillRect(m.x-6,m.y-6,12,12),s.fillStyle="#fff",s.fillText(String(p.id+1),m.x,m.y+3.5)}for(let p of n.units){if(p.dead||p.eliminated)continue;let x=o(p.x,p.y);s.fillStyle=p.ally?"#7ec850":p.col,s.beginPath(),s.arc(x.x,x.y,p.primary?3.4:2.4,0,7),s.fill()}for(let p of n.raids){let x=o(p.x,p.y);s.fillStyle=`rgba(255,82,56,${.35+.4*(p.t/60)})`,s.beginPath(),s.arc(x.x,x.y,7+3*Math.sin(d*6),0,7),s.fill()}if(n.deathMark){let p=o(n.deathMark.x,n.deathMark.y);s.fillStyle="#000",s.beginPath(),s.arc(p.x,p.y,8,0,7),s.fill(),s.fillStyle="#fff",s.beginPath(),s.arc(p.x,p.y-1,5,0,7),s.fill()}let u=o(n.player.x,n.player.y);s.strokeStyle="#7ec850",s.lineWidth=2.5,s.beginPath(),s.arc(u.x,u.y,11+3*Math.sin(d*6),0,7),s.stroke(),s.font="bold 11px Trebuchet MS",s.fillStyle="#7ec850",s.fillText("YOU",u.x,u.y-18),s.fillStyle="#d8d0ba",s.font="bold 14px Trebuchet MS",s.fillText("Click anywhere on the map to travel there",f/2,h-66)}else{let u=e.mouseSX,p=e.mouseSY;if(u!==void 0){s.strokeStyle="rgba(225,235,195,.9)",s.lineWidth=3,s.lineCap="round";for(let[x,m]of[[1,0],[-1,0],[0,1],[0,-1]])s.beginPath(),s.moveTo(u+x*6,p+m*6),s.lineTo(u+x*15,p+m*15),s.stroke()}}if(n.raidAlarm){let u=Math.min(1,n.raidAlarm.t/1.5);s.fillStyle=`rgba(180,30,20,${.14*u})`,s.fillRect(0,0,f,h),s.textAlign="center",s.font="bold 22px Trebuchet MS",s.fillStyle="rgba(0,0,0,.7)",s.fillText("BASE UNDER ATTACK",f/2+2,54),s.fillStyle=`rgba(255,${80+110*(.5+.5*Math.sin(d*8))},55,${u})`,s.fillText("BASE UNDER ATTACK",f/2,52)}n.player.hurt>0&&(s.fillStyle=`rgba(150,28,18,${n.player.hurt*.4})`,s.fillRect(0,0,f,h)),n.player.dead&&(s.fillStyle="rgba(10,6,4,.55)",s.fillRect(0,0,f,h),s.textAlign="center",s.fillStyle="#e6d9b8",s.font="bold 44px Trebuchet MS",s.fillText("YOU DIED",f/2,h/2-4),s.fillStyle="#b9a06f",s.font="15px Trebuchet MS",s.fillText("respawning\u2026",f/2,h/2+24)),s.textAlign="left",s.font="bold 14px Trebuchet MS",n.elims.forEach((u,p)=>{let x=Math.min(1,u.t/3);s.globalAlpha=x,s.fillStyle="rgba(0,0,0,.5)",s.fillRect(f/2-130,92+p*24,264,20),s.fillStyle="#e2664a",s.fillText(u.text,f/2-122,106+p*24)}),s.globalAlpha=1,s.textAlign="center"}};function l(f,h){let d=n.deploys.get(f+","+h);if(d)return{x:f*64+32,y:h*64+32,hp:d.hp,max:d.max};let u=n.structures.get(f+","+h);if(u)return{x:f*64+32,y:h*64+32,hp:u.hp,max:u.max};for(let p of["V,"+f+","+h,"V,"+(f+1)+","+h,"H,"+f+","+h,"H,"+f+","+(h+1)]){let x=n.walls.get(p);if(!x)continue;let m=Lt(p,x),g=(m[0]+m[2])/2,y=(m[1]+m[3])/2;if(Math.hypot(n.cmd.mx-g,n.cmd.my-y)<16)return{x:g,y,hp:x.hp,max:x.max}}return null}function c(f,h,d,u){if(!f)return;let p=o(f.x,f.y),x=e.VW,m=e.VH;if(s.textAlign="center",!p.behind&&p.x>0&&p.x<x&&p.y>0&&p.y<m){if(e.godView)return;s.font="bold 11px Trebuchet MS",s.fillStyle="rgba(0,0,0,.7)",s.fillText(h,p.x+1,p.y-49),s.fillStyle=d,s.fillText(h,p.x,p.y-50)}else{let g=Math.max(54,Math.min(x-54,p.x)),y=Math.max(54,Math.min(m-54,p.behind?m-54:p.y));s.fillStyle=d,s.globalAlpha=.92,s.beginPath(),s.arc(g,y,14,0,7),s.fill(),s.globalAlpha=1,s.fillStyle="#1c1812",s.font="bold 13px Trebuchet MS",s.fillText(u,g,y+4.5)}}}function Im(n,e,t,i){let s={},r=e.canvas,o=(c,f)=>{let h=t.screenToWorld(c,f);n.cmd.mx=h.x,n.cmd.my=h.y,e.mouseSX=c,e.mouseSY=f};addEventListener("keydown",c=>{let f=c.key.toLowerCase();if(n.storeOpen){(f==="escape"||f==="e")&&(n.storeOpen=null,i.closeModals()),c.preventDefault();return}if(n.shopOpen){(f==="escape"||f==="e")&&(n.shopOpen=!1,i.closeModals()),c.preventDefault();return}s[f]=!0,a(),f==="e"&&Hd(n),f==="g"&&!n.player.inCopter&&qd(n),f==="q"&&(n.buildMode?Pm(n,1):n.player.inCopter||Xd(n)),f==="t"&&!n.buildMode&&!n.player.inCopter&&Vc(n,n.cmd.mx,n.cmd.my),/^Digit[1-9]$|^Numpad[1-9]$/.test(c.code)&&!n.player.inCopter&&Or(n,+c.code.slice(-1)-1),f==="b"&&!n.player.inCopter&&Or(n,n.buildMode?0:5),f==="r"&&(n.buildMode?n.buildRot=(n.buildRot+1)%4:Wc(n)),f==="u"&&Wd(n),["w","a","s","d"," "].includes(f)&&c.preventDefault()}),addEventListener("keyup",c=>{s[c.key.toLowerCase()]=!1,a()}),addEventListener("blur",()=>{for(let c in s)s[c]=!1;a(),n.cmd.fireHeld=!1});function a(){let c=(s.d?1:0)-(s.a?1:0),f=(s.s?1:0)-(s.w?1:0),h=t.orbit||0,d=c*Math.cos(h)+f*Math.sin(h),u=-c*Math.sin(h)+f*Math.cos(h);n.cmd.right=d>.38,n.cmd.left=d<-.38,n.cmd.down=u>.38,n.cmd.up=u<-.38,n.cmd.run=!!s.shift}addEventListener("wheel",c=>{if(n.buildMode&&!n.shopOpen&&!n.storeOpen){Pm(n,c.deltaY>0?1:-1),c.preventDefault();return}!e.godView&&!n.shopOpen&&!n.storeOpen&&t.zoomFactor!==void 0&&(t.zoomFactor=et(t.zoomFactor*(1+c.deltaY*.0011),.55,1.9),c.preventDefault())},{passive:!1});let l=null;r.addEventListener("mousedown",c=>{c.button===1&&!e.godView&&(l={x:c.clientX,start:t.orbit||0},c.preventDefault())}),addEventListener("mousemove",c=>{l&&t.orbit!==void 0&&(t.orbit=l.start+(c.clientX-l.x)*.006,a())}),addEventListener("mouseup",c=>{c.button===1&&(l=null)}),r.addEventListener("auxclick",c=>{c.button===1&&c.preventDefault()}),r.addEventListener("mousemove",c=>{let f=r.getBoundingClientRect();o(c.clientX-f.left,c.clientY-f.top)}),r.addEventListener("mousedown",c=>{let f=r.getBoundingClientRect();if(o(c.clientX-f.left,c.clientY-f.top),c.button===0){if(e.godView){YM(n,e);return}if(n.cmd.fireHeld=!0,n.buildMode)Vd(n);else if(!n.shopOpen&&!n.storeOpen){let h=n.slot;ia(n)}}else c.button===2&&n.buildMode&&Gd(n)}),addEventListener("mouseup",()=>{n.cmd.fireHeld=!1}),r.addEventListener("contextmenu",c=>c.preventDefault()),setInterval(()=>{e.mouseSX!==void 0&&o(e.mouseSX,e.mouseSY)},50)}function Pm(n,e){let t=ps.indexOf(n.buildPiece);n.buildPiece=ps[(t+e+ps.length)%ps.length]}function YM(n,e){let t=n.cmd.mx,i=n.cmd.my;t=et(t,$t,13824-$t),i=et(i,$t,9216-$t);for(let s=0;s<24&&bt(n,t,i,$t);s++)t+=(Math.random()*2-1)*40,i+=(Math.random()*2-1)*40;n.player.x=t,n.player.y=i,n.player.inCopter=!1,e.godView=!1,document.getElementById("mapbtn").classList.remove("on"),document.getElementById("mapbtn").textContent="Map View",n.tip={text:"arrived",t:1.2}}var ZM={tool:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 20l7-7"/><path d="M14 4l6 6-5 5-6-6z" fill="currentColor"/></svg>',pistol:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 8h16v4h-6l-1 5h-4l1-5H6a3 3 0 0 1-3-3z"/></svg>',rifle:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M1 11h18l4-2v3l-4 1h-5l-1 5h-3l1-5H1z"/></svg>',minigun:'<svg viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="7" width="14" height="3"/><rect x="2" y="11" width="14" height="3"/><rect x="2" y="15" width="14" height="3"/><rect x="15" y="6" width="6" height="13" rx="2"/></svg>',rocket:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M2 10h13l5 2-5 2H2z"/><path d="M20 8l3 4-3 4z"/></svg>',build:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21l4-12 6 6-10 6z" fill="currentColor"/><path d="M13 5l6 6"/></svg>',sniper:'<svg viewBox="0 0 24 24" fill="currentColor"><rect x="1" y="10" width="20" height="3"/><rect x="6" y="6" width="6" height="3" rx="1"/><path d="M21 9l2 2-2 2z"/></svg>',shotgun:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M1 10h17v5H8l-2 4H3l2-4H1z"/></svg>',hmg:'<svg viewBox="0 0 24 24" fill="currentColor"><rect x="1" y="9" width="19" height="5"/><rect x="6" y="14" width="6" height="6"/><path d="M20 9l3 2.5-3 2.5z"/></svg>'},$M=[["Tool","tool"],["Pistol","pistol"],["Rifle","rifle"],["Minigun","minigun"],["Rocket","rocket"],["Build","build"],["Sniper","sniper"],["Shotgun","shotgun"],["HMG","hmg"]],KM={1:"pistol",2:"rifle",3:"minigun",4:"rocket",6:"sniper",7:"shotgun",8:"hmg"},JM={floor:'<svg viewBox="0 0 24 24" fill="currentColor"><rect x="4" y="4" width="16" height="16" rx="2"/></svg>',wall:'<svg viewBox="0 0 24 24" fill="currentColor"><rect x="10" y="3" width="4" height="18" rx="1"/></svg>',door:'<svg viewBox="0 0 24 24" fill="currentColor"><rect x="9" y="3" width="6" height="18" rx="1"/><circle cx="13" cy="12" r="1.4" fill="#15130e"/></svg>',turret:'<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="13" r="6"/><rect x="12" y="11" width="10" height="4" rx="1"/></svg>',cupboard:'<svg viewBox="0 0 24 24" fill="currentColor"><rect x="5" y="3" width="14" height="18" rx="2"/><rect x="11.4" y="5" width="1.2" height="14" fill="#15130e"/></svg>'};function Dm(n,e){let t=p=>document.getElementById(p),i=t("hotbar");$M.forEach(([p,x],m)=>{let g=document.createElement("div");g.className="slot",g.innerHTML=`<span class="key">${m+1}</span>${ZM[x]}<span class="nm">${p}</span>`,g.addEventListener("mousedown",y=>{y.stopPropagation(),Or(n,m)}),i.appendChild(g)});let s=t("bpieces");for(let p of ps){let x=document.createElement("div");x.className="bpiece",x.dataset.piece=p;let m=Object.entries(Kt[p].cost).map(([g,y])=>y+" "+g).join(" + ");x.innerHTML=`${JM[p]}${Kt[p].name}<br><span style="opacity:.7">${m}</span>`,x.addEventListener("mousedown",g=>{g.stopPropagation(),n.buildPiece=p}),s.appendChild(x)}let r=(p,x)=>t(p).addEventListener("mousedown",m=>{m.stopPropagation(),x(t(p))});r("mapbtn",p=>{e.godView=!e.godView,p.classList.toggle("on",e.godView),p.textContent=e.godView?"Exit Map":"Map View"}),r("ghostbtn",p=>{n.ghost=!n.ghost,p.classList.toggle("on",n.ghost),p.textContent=n.ghost?"Ghost: ON":"Ghost"}),r("rocketbtn",p=>{n.rapidRockets=!n.rapidRockets,p.classList.toggle("on",n.rapidRockets),p.textContent=n.rapidRockets?"Rockets: ON":"Rapid Rockets"}),r("refillbtn",()=>window.__refillAll()),r("boosthardbtn",()=>window.__boostHard()),r("debugbtn",p=>{e.debugPaths=!e.debugPaths,p.classList.toggle("on",e.debugPaths),p.textContent=e.debugPaths?"Debug: ON":"Debug paths"}),t("ghostbtn").classList.add("on"),t("ghostbtn").textContent="Ghost: ON",t("helpToggle").addEventListener("click",()=>{let p=t("help");p.classList.toggle("min"),t("helpToggle").textContent=p.classList.contains("min")?"show":"hide"}),document.querySelectorAll(".spdbtn").forEach(p=>{p.addEventListener("mousedown",x=>{x.stopPropagation(),e.speed=+p.dataset.spd,document.querySelectorAll(".spdbtn").forEach(m=>m.classList.toggle("on",m===p))})});let o=0,a=null,l=!1;function c(){let p=t("shop"),x='<h3>Trade Shop</h3><div style="margin-bottom:8px">Scrap: <b id="shop-scrap">0</b></div><div class="cols"><div class="col"><h5>SELL \u2192 SCRAP</h5>';zt.trades.forEach(([m,g,y],M)=>{x+=`<div class="trow"><span>${g} ${m} \u2192 ${y} scrap</span><button data-trade="${M}">Sell</button></div>`}),x+='</div><div class="col"><h5>BUY WEAPONS + GEAR</h5>';for(let m in zt.buys)x+=`<div class="trow"><span id="shopown-${m}">${on[m].name} <small>+${zt.buys[m].ammo} ammo</small></span><button data-buy="${m}">${zt.buys[m].cost} scrap</button></div>`;x+=`<div class="trow"><span>Jackhammer <small>3\xD7 gather</small></span><button data-misc="jackhammer">${zt.jackhammer} scrap</button></div>`,x+=`<div class="trow"><span>Rifle laser sight</span><button data-misc="laser">${zt.laser} scrap</button></div>`,x+=`<div class="trow"><span>Wood fence (G)</span><button data-misc="fence">${zt.fenceWood} wood</button></div>`,x+=`<div class="trow"><span>Grenade (Q)</span><button data-misc="grenade">${zt.grenade} scrap</button></div>`,x+=`<div class="trow"><span>Supply signal (T)</span><button data-misc="signal">${zt.signal} scrap</button></div>`,x+=`<div class="trow"><span>+10 HQM</span><button data-misc="hqm">${zt.hqm.cost} scrap</button></div>`,x+='<div class="trow"><span id="fm-lbl">Facemask</span><button data-misc="facemask">buy</button></div>',x+='<div class="trow"><span id="ba-lbl">Body armor</span><button data-misc="bodyArmor">buy</button></div>',x+=`<div class="trow"><span>Hire worker</span><button data-misc="worker">${zt.worker} scrap</button></div>`,x+='</div></div><button class="close">Close (E / Esc)</button>',p.innerHTML=x,p.querySelectorAll("button").forEach(m=>{m.addEventListener("mousedown",g=>g.stopPropagation()),m.addEventListener("click",()=>{m.dataset.trade!==void 0?Yd(n,+m.dataset.trade):m.dataset.buy?Zd(n,m.dataset.buy):m.dataset.misc?$d(n,m.dataset.misc):(n.shopOpen=!1,p.classList.add("hidden")),f()})}),f()}function f(){let p=t("shop-scrap");p&&(p.textContent=n.inv.scrap|0);let x=t("fm-lbl");if(x){let g=n.player.facemask+1;x.textContent=g<=3?`Facemask L${g} (${ms.cost[g]} scrap)`:"Facemask MAX"}let m=t("ba-lbl");if(m){let g=n.player.bodyArmor+1;m.textContent=g<=3?`Body armor L${g} (${ms.cost[g]} scrap)`:"Body armor MAX"}for(let g in zt.buys){let y=t("shopown-"+g);y&&(y.style.color=n.owned[g]?"var(--accent2)":"var(--ink)")}}function h(p){let x=t("store"),m=n.deploys.get(p);if(!m)return;let g=`<h3>${m.type==="cupboard"?"Tool Cupboard":"Storage"}</h3>`;for(let y of["wood","stone","metal","scrap"])g+=`<div class="strow"><span class="ic ${y}"></span>
        <button data-mv="${y},-9999">\u25C0 all</button><button data-mv="${y},-0.1">\u25C0 10%</button>
        <span class="cnt"><b id="st-${y}">0</b> store \xB7 bag <b id="inv-${y}">0</b></span>
        <button data-mv="${y},0.1">10% \u25B6</button><button data-mv="${y},9999">all \u25B6</button>
        <span></span></div>`;g+='<button class="close">Close (E / Esc)</button>',x.innerHTML=g,x.querySelectorAll("button").forEach(y=>{y.addEventListener("mousedown",M=>M.stopPropagation()),y.addEventListener("click",()=>{if(y.dataset.mv){let[M,w]=y.dataset.mv.split(",");Kd(n,M,+w),d()}else n.storeOpen=null,x.classList.add("hidden")})}),d()}function d(){let p=n.deploys.get(n.storeOpen);if(!(!p||!p.store))for(let x of["wood","stone","metal","scrap"]){let m=t("st-"+x),g=t("inv-"+x);m&&(m.textContent=p.store[x]|0),g&&(g.textContent=n.inv[x]|0)}}return{closeModals(){t("store").classList.add("hidden"),t("shop").classList.add("hidden")},update(){t("r-wood").textContent=n.inv.wood|0,t("r-stone").textContent=n.inv.stone|0,t("r-metal").textContent=n.inv.metal|0,t("r-scrap").textContent=n.inv.scrap|0;let p=Math.floor(n.t/60),x=Math.floor(n.t%60);t("playtime").textContent=p+":"+String(x).padStart(2,"0");let m=n.player,g=Math.max(0,m.health/m.maxhp),y=t("hpfill");y.style.width=g*100+"%",y.style.background=g>.5?"linear-gradient(180deg,#9ccb5a,#6fae3e)":g>.25?"linear-gradient(180deg,#e0c14e,#c9962f)":"linear-gradient(180deg,#d76a4a,#b23b2a)",t("hptxt").textContent=Math.ceil(Math.max(0,m.health));let M=i.children;for(let T=0;T<M.length;T++){M[T].classList.toggle("sel",n.slot===T);let D=KM[T];M[T].classList.toggle("dim",!!D&&!n.owned[D])}if(t("buildmenu").classList.toggle("hidden",!n.buildMode),n.buildMode)for(let T of s.children){T.classList.toggle("sel",T.dataset.piece===n.buildPiece);let D=!0;for(let _ in Kt[T.dataset.piece].cost)(n.inv[_]||0)<Kt[T.dataset.piece].cost[_]&&(D=!1);T.classList.toggle("cant",!D)}let w=Fr(n);if(t("ammo").classList.toggle("hidden",!w),w){let T=n.weapons[w];t("ammo-mag").innerHTML=`${T.ammo} <small>/ ${T.reserve}</small>`;let D=w==="minigun"&&T.spin>0&&T.spin<on.minigun.windup;t("ammo-rl").textContent=T.reloading>0?"RELOADING":D?"SPINNING\u2026":T.ammo===0?"PRESS R":""}let C=t("tip");n.tip?(C.textContent=n.tip.text,C.classList.add("show")):C.classList.remove("show"),n.shopOpen!==l?(l=n.shopOpen,t("shop").classList.toggle("hidden",!n.shopOpen),n.shopOpen&&c()):n.shopOpen&&n.tick%30===0&&f(),n.storeOpen!==a?(a=n.storeOpen,t("store").classList.toggle("hidden",!n.storeOpen),n.storeOpen&&h(n.storeOpen)):n.storeOpen&&n.tick%30===0&&d(),n.t-o>.4&&(o=n.t,u())}};function u(){let p=[];p.push({id:Ge,name:"You",col:"#c4d66a",alive:!n.player.dead,you:!0,kills:n.playerKills,scrap:n.inv.scrap|0,res:n.inv.wood+n.inv.stone+n.inv.metal|0,tier:""});for(let y of n.teams){let M=0,w=0,C=0,T=!1;for(let _ of n.units)_.owner===y.owner&&(M+=_.kills,w+=_.scrap,C+=_.inv.wood+_.inv.stone+_.inv.metal,_.eliminated||(T=!0));let D=y.bases.find(_=>!_.dead);if(D){let _=n.deploys.get(D.tcKey);_&&_.store&&(C+=_.store.wood+_.store.stone+_.store.metal,w+=_.store.scrap)}p.push({id:y.id,name:"Base "+(y.id+1),col:y.col,alive:T&&!y.eliminated,kills:M,scrap:w|0,res:C|0,tier:y.hard?"HARD":y.weak?"EASY":""})}let x=null,m=0;for(let y of p)!y.you&&y.alive&&y.kills>m&&(m=y.kills,x=y.id);p.sort((y,M)=>M.scrap-y.scrap||M.kills-y.kills||M.res-y.res);let g=y=>y>=1e4?(y/1e3|0)+"k":y>=1e3?(y/1e3).toFixed(1)+"k":y;t("lb-rows").innerHTML=p.map(y=>`
      <div class="lbr ${y.alive?"":"dead"} ${y.id===x?"lb-bounty":""}">
        <span class="dot" style="background:${y.col}"></span>
        <span class="nm">${y.id===x?"\u2605 ":""}${y.name}</span>
        ${y.tier?`<span class="pill ${y.tier.toLowerCase()}">${y.tier}</span>`:""}
        <span>${y.kills}</span><span style="color:var(--ink-dim)">${g(y.scrap)}</span><span style="color:var(--ink-dim)">${g(y.res)}</span>
      </div>`).join("")}}var Lm=Math.random()*1e9>>>0,kt=Cc(Lm);kt.ghost=!0;function jM(){let e={canvas:document.getElementById("game"),VW:innerWidth,VH:innerHeight,speed:1,godView:!1,debugPaths:!1},t=pm(kt,e),i=gm(kt,t.scene),s=vm(kt,t.scene),r=Rm(kt,t.scene),o=Cm(kt,t.scene),a=Sm(kt,e,t),l=Dm(kt,e);Im(kt,e,t,l),addEventListener("resize",()=>{e.VW=innerWidth,e.VH=innerHeight,t.resize()});let c=document.getElementById("seedval");c&&(c.textContent=String(Lm)),window.__refillAll=()=>{for(let u in kt.owned)kt.owned[u]=!0;for(let u in kt.weapons){let p=kt.weapons[u];p.reserve=Math.max(p.reserve,u==="rocket"?80:u==="sniper"?60:u==="shotgun"?80:600),p.ammo=on[u].magSize,p.reloading=0}for(let u of["wood","stone","metal"])kt.inv[u]=Math.max(kt.inv[u],1e4);kt.inv.scrap=Math.max(kt.inv.scrap,500),kt.inv.fence=Math.max(kt.inv.fence,10),kt.tip={text:"Refilled ammo + resources",t:1.4}},window.__boostHard=()=>{let u=0;for(let p of kt.units)!p.hard||p.dead||p.eliminated||(u++,p.hp=p.max,p.rockets=Math.max(p.rockets,12),p.satchels=Math.max(p.satchels,6),p.grenades=Math.max(p.grenades,4),p.hqm=Math.max(p.hqm,80),p.gun=p.shotgun?"shotgun":"rifle",p.facemask=Math.max(p.facemask,2),p.bodyArmor=Math.max(p.bodyArmor,3),p.jack=!0);for(let p of kt.teams){if(!p.hard||p.eliminated)continue;let x=p.bases.find(m=>!m.dead);if(x){let m=kt.deploys.get(x.tcKey);m&&m.store&&(m.store.wood=Math.max(m.store.wood,3e3),m.store.stone=Math.max(m.store.stone,1500),m.store.metal=Math.max(m.store.metal,1500),m.store.scrap=Math.max(m.store.scrap,600))}}kt.tip={text:"Boosted "+u+" hard units",t:1.4}};let f=performance.now(),h=0;function d(u){requestAnimationFrame(d);let p=Math.min(.1,(u-f)/1e3);f=u,h+=p*e.speed;let x=0,m=Math.max(4,e.speed*4);for(;h>=Tr&&x<m;)Tu(kt),h-=Tr,x++;x>=m&&(h=0),t.update(p),i.sync(p,kt,t),s.sync(p),r.sync(p,t),o.sync(p,t),t.render(),a.draw(),l.update(),kt.events.length=0}requestAnimationFrame(d)}try{jM()}catch(n){console.error("SCRAPLAND boot failed: WebGL unavailable \u2014",n&&n.message);let e=document.createElement("div");e.style.cssText="position:fixed;inset:0;display:flex;align-items:center;justify-content:center;color:#ddd5c2;font:16px Trebuchet MS;background:#14120e;z-index:99",e.textContent="SCRAPLAND needs WebGL \u2014 please enable hardware acceleration and reload.",document.body&&document.body.appendChild(e)}})();
