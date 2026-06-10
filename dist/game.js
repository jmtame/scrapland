(()=>{var he={w:13824,h:9216},Wt=16,Do=64,ze="p1",xr=1/60,en={pistol:{name:"Pistol",magSize:12,reserve:96,dmg:14,rof:.22,spread:.03,speed:1150,auto:!1,reloadT:1,kick:6,range:1.6},rifle:{name:"Rifle",magSize:30,reserve:180,dmg:11,rof:.09,spread:.05,speed:1500,auto:!0,reloadT:1.6,kick:4,range:2.4},minigun:{name:"Minigun",magSize:200,reserve:200,dmg:6,rof:.045,spread:.09,speed:1300,auto:!0,reloadT:4.5,kick:2,range:1.8,windup:2.6},rocket:{name:"Rocket",magSize:1,reserve:50,dmg:55,rof:.9,spread:.012,speed:560,auto:!1,reloadT:1.9,kick:16,range:2.8,rocket:!0,splash:96,splashDmg:150,structDmg:55},sniper:{name:"Sniper",magSize:1,reserve:30,dmg:60,rof:1,spread:.004,speed:1180,auto:!1,reloadT:1.8,kick:14,range:3.4,locked:!0},shotgun:{name:"Shotgun",magSize:6,reserve:48,dmg:9,rof:.3,spread:.17,speed:1050,auto:!0,reloadT:1.5,kick:9,range:1.1,pellets:7},hmg:{name:"HMG",magSize:100,reserve:300,dmg:15,rof:.05,spread:.11,speed:1500,auto:!0,reloadT:3,kick:9,range:2.4,locked:!0,tracer:"hmg"}};var Is={splash:120,splashDmg:120,structDmg:22,fuse:2},Xt={floor:{name:"Floor",cost:{wood:5},cat:"cell",hp:100,found:!0,up:!0},trifloor:{name:"Tri-Floor",cost:{wood:4},cat:"cell",hp:90,found:!0,up:!0,tri:!0,hidden:!0},wall:{name:"Wall",cost:{wood:10},cat:"edge",hp:100,up:!0},triangle:{name:"Triangle",cost:{wood:8},cat:"diag",hp:100,up:!0,hidden:!0},door:{name:"Door",cost:{wood:10,metal:5},cat:"edge",hp:50,up:!0,mMul:2,door:!0},box:{name:"Box",cost:{wood:15},cat:"cell",hp:90,box:!0,store:!0,hidden:!0},turret:{name:"Turret",cost:{wood:40,metal:30},cat:"cell",hp:150,solid:!0,turret:!0},cupboard:{name:"Cupboard",cost:{wood:60,metal:25},cat:"cell",hp:300,solid:!0,tc:!0,store:!0}},fs=["floor","wall","door","turret","cupboard"];var gc=10,Af={wood:{to:"stone",cost:{stone:15}},stone:{to:"metal",cost:{metal:20}},metal:{to:"armored",cost:{hqm:8}}};function mi(n,e){let t=n.mMul||4;return e==="armored"?n.hp*t*2:e==="metal"?n.hp*t:e==="stone"?Math.round(n.hp*(1+t)/2):n.hp}var Dt=900,Oi=900,yr=.0075,Rf=30,No=10,Cf=600,xc=3600,Sf=1200,_r=240,mt=620,yc=620,_c=50,Bi={hp:200,len:46,half:23,life:60},If=7,Uo=1.9,Pf=.65,ds={head:[0,.25,.45,.62],body:[0,.18,.34,.5],cost:[0,16,34,60],headCol:[null,"#cdbb92","#9aabb8","#7c8ec9"],bodyCol:[null,"#857748","#959ca3","#5d7a9b"]},vc=(n,e)=>ds[e][Sm(n)],Sm=n=>n<0?0:n>3?3:n|0,ft={speed:560,boost:980,accel:360,drag:.55,dragIdle:.85,turn:2.1,r:30,hp:260},zt={speed:455,accel:300,drag:.55,turn:1.6,r:46,seats:4,cost:40,hp:360},Fo={1:{name:"Pistol",dmg:14,rof:.5,speed:1e3,spread:.05,mag:12,reload:1.6,range:340,lead:0},2:{name:"Rifle",dmg:11,rof:.12,speed:1500,spread:.05,mag:30,reload:2,range:380,lead:.55},3:{name:"Sniper",dmg:60,rof:1.3,speed:1900,spread:0,mag:1,reload:2.4,range:460,lead:1}},Lf={2:50,3:250},Mc=50,us={boar:{hp:35,r:17,walk:62,chase:128,dmg:7,atk:.8,detect:300,lose:560,loot:["wood",1,3]},wolf:{hp:62,r:15,walk:84,chase:190,dmg:12,atk:.6,detect:430,lose:720,loot:["metal",1,2],biome:"jungle",pack:!0},bear:{hp:165,r:25,walk:54,chase:132,dmg:24,atk:1,detect:360,lose:660,loot:["metal",3,6],biome:"winter"},alligator:{hp:140,r:22,walk:48,chase:158,dmg:22,atk:.9,detect:340,lose:620,loot:["metal",2,5],biome:"jungle",lake:!0},snake:{hp:42,r:11,walk:78,chase:214,dmg:14,atk:.5,detect:380,lose:640,loot:["metal",1,2],biome:"desert"},scorpion:{hp:28,r:12,walk:74,chase:158,dmg:6,atk:.7,detect:300,lose:540,loot:["metal",1,2],biome:"desert",poison:!0},polarbear:{hp:205,r:27,walk:58,chase:142,dmg:28,atk:1,detect:380,lose:690,loot:["metal",4,7],biome:"winter"}},Df=[["boar",12],["wolf",7],["bear",6],["alligator",8],["snake",9],["scorpion",8],["polarbear",5]],Ft={trades:[["wood",100,6],["stone",100,9],["metal",50,10]],buys:{pistol:{ammo:48,cost:6},rifle:{ammo:90,cost:10},minigun:{ammo:200,cost:16},rocket:{ammo:2,cost:24},shotgun:{ammo:24,cost:9},sniper:{ammo:5,cost:24},hmg:{ammo:150,cost:20}},jackhammer:30,laser:14,fenceWood:10,grenade:8,signal:60,hqm:{cost:12,amt:10},worker:100},Bt={hp:64,r:14,dmg:8,rof:.5,range:430,detect:540,speed:118,leash:170,bspeed:1200,spread:.06},Nf=[{type:"gas",name:"Gas Station",fx:.26,fy:.3,crates:4,barrels:12,guards:3},{type:"junk",name:"Junkyard",fx:.75,fy:.32,crates:5,barrels:7,guards:3},{type:"warehouse",name:"Abandoned Warehouse",fx:.5,fy:.74,crates:7,barrels:7,guards:4}],Vn={capR:240,capT:8,payEvery:6,pay:{stone:10,metal:6,scrap:4}},rn={vhp:1100,ghp:80,speed:120,trange:560,tdmg:13,trof:.34,gdmg:9,grof:.5,grange:440,gspeed:120,leash:300,bspeed:1300},Gn={hp:450,speed:330,orbitR:420,orbitT:22,strafeR:760,flakR:720},Ps={hackT:60,r:150},at={TEAM_COUNT:7,COLS:["#b85b5b","#5b8bb8","#b89b5b","#7bb85b","#9b5bb8","#5bb8a8","#b8765b","#8b8b5b","#b85b9b","#6b78b8"],BOT_SPEED:160,ROCKET_MIN:230,STRAFE_FLIP:.9,REACT_R:640,WORKER_COST:50,GATHER_LOAD:300,MINICOPTER_COST:30,SIGNAL_COST:60,HIRE_CAP_HARD:16,HIRE_CAP:8,RESPAWN_T:15,TRIPWIRE:2600,RAID_DEF_W:.55,RAID_TUR_W:.3,ENDGAME_T:420,ENDGAME_BASES:6};function Uf(n){let e=n>>>0||1,t=()=>{e|=0,e=e+1831565813|0;let i=Math.imul(e^e>>>15,1|e);return i=i+Math.imul(i^i>>>7,61|i)^i,((i^i>>>14)>>>0)/4294967296};return{next:t,rand:(i=0,s=1)=>i+t()*(s-i),randi:(i,s)=>Math.floor(i+t()*(s-i+1)),chance:i=>t()<i,pick:i=>i[Math.floor(t()*i.length)],angle:()=>t()*Math.PI*2}}var Fe=Math.PI*2,et=(n,e,t)=>n<e?e:n>t?t:n,vr=(n,e,t)=>n+(e-n)*t,ae=(n,e,t,i)=>{let s=t-n,r=i-e;return s*s+r*r},J=(n,e,t,i)=>Math.sqrt(ae(n,e,t,i)),gi=n=>(n=et(n,0,1),n*n*(3-2*n));function Im(n,e){let t=(e-n)%Fe;return t>Math.PI&&(t-=Fe),t<-Math.PI&&(t+=Fe),t}function xi(n,e,t){let i=Im(n,e);return Math.abs(i)<=t?e:n+Math.sign(i)*t}var We=(n,e)=>n+","+e,Ae=(n,e,t)=>n+","+e+","+t;function gt(n,e,t,i,s,r){let o=s-t,a=r-i,l=o*o+a*a;if(l===0)return J(n,e,t,i);let c=((n-t)*o+(e-i)*a)/l;return c=et(c,0,1),J(n,e,t+c*o,i+c*a)}function Qn(n,e,t,i,s,r,o,a){let l=ko(s,r,o,a,n,e),c=ko(s,r,o,a,t,i),f=ko(n,e,t,i,s,r),h=ko(n,e,t,i,o,a);return(l>0&&c<0||l<0&&c>0)&&(f>0&&h<0||f<0&&h>0)}function ko(n,e,t,i,s,r){return(t-n)*(r-e)-(i-e)*(s-n)}function Ff(n,e,t,i,s,r,o,a){let l=t-n,c=i-e,f=o-s,h=a-r,d=l*h-c*f;if(Math.abs(d)<1e-9)return null;let u=((s-n)*h-(r-e)*f)/d,p=((s-n)*c-(r-e)*l)/d;return u<0||u>1||p<0||p>1?null:{x:n+u*l,y:e+u*c}}function Oo(n,e){let t=n*374761393+e*668265263|0;return t=t^t>>13|0,t=Math.imul(t,1274126177),((t^t>>16)>>>0)/4294967296}function Of(n){let e=n.rng,t=he.w,i=he.h,s=200,r=t/2,o=i/2,a=.47*t,l=.47*i,c=[];for(let K=0;K<5;K++)c.push({f:K+2,w:1/(K+1.2),p:e.rand(0,Fe)});let f=[],h=1e9,d=-1e9;for(let K=0;K<s;K++){let Q=K/s*Fe,N=0;for(let q of c)N+=Math.sin(Q*q.f+q.p)*q.w;f.push(N),h=Math.min(h,N),d=Math.max(d,N)}let u=f.map(K=>1-.22*(.5-.5*((K-h)/(d-h)*2-1))),p={cx:r,cy:o,rx:a,ry:l,N:s,rad:u},x=K=>{let Q=K%Fe;Q<0&&(Q+=Fe);let N=Q/Fe*s,q=Math.floor(N)%s,j=(q+1)%s;return u[q]+(u[j]-u[q])*(N-q)},m=(K,Q)=>{let N=(K-r)/a,q=(Q-o)/l,j=Math.sqrt(N*N+q*q);return x(Math.atan2(q,N))-j},g=(K,Q)=>m(K,Q)>0,y=[];for(let K=0;K<s;K++){let Q=K/s*Fe;y.push({x:r+Math.cos(Q)*u[K]*a,y:o+Math.sin(Q)*u[K]*l})}let w=K=>K===void 0?0:(Math.sin(K*.0016+1.7)*.62+Math.sin(K*.0043+4.2)*.38)*t*.055,E=(K,Q)=>{let N=(K+w(Q))/t;return N<1/3?"desert":N<2/3?"jungle":"winter"},v={x:t/2,y:i/2,r:46},b=[];for(let K=0;K<5;K++){let Q=K%2===0,N=Q?t:i,q=Q?i:t,j=e.rand(.14,.86)*q,oe=e.rand(260,820),we=e.rand(1.4,3.2),Ie=e.rand(0,Fe),De=[];for(let Oe=0;Oe<=30;Oe++){let St=Oe/30,It=et(j+Math.sin(St*we*Fe+Ie)*oe,60,q-60);De.push(Q?{x:St*N,y:It}:{x:It,y:St*N})}let Ge=e.rand(26,42),Ze=[],Ye=e.chance(.5)?1:-1;for(let Oe=0;Oe<De.length;Oe+=2){let St=R(De,Oe);Ze.push({x:et(De[Oe].x+Math.cos(St+Math.PI/2)*Ye*(Ge/2+24),20,t-20),y:et(De[Oe].y+Math.sin(St+Math.PI/2)*Ye*(Ge/2+24),20,i-20)})}b.push({pts:De,w:Ge,poles:Ze,fade:De.map(()=>1)})}function R(K,Q){let N=K[Math.max(0,Q-1)],q=K[Math.min(K.length-1,Q+1)];return Math.atan2(q.y-N.y,q.x-N.x)}let _=(K,Q)=>{let N=K,q=Q;for(let j=0;j<7;j++){let oe={x:(N.x+q.x)/2,y:(N.y+q.y)/2};m(oe.x,oe.y)>.015?N=oe:q=oe}return{x:N.x,y:N.y}},M=K=>{let Q=K.map(oe=>m(oe.x,oe.y)>.015),N=Q.indexOf(!0),q=Q.lastIndexOf(!0);if(N===-1||q-N<2)return null;let j=K.slice(N,q+1);return N>0&&(j[0]=_(j[0],K[N-1])),q<K.length-1&&(j[j.length-1]=_(j[j.length-1],K[q+1])),j},C=e.chance(.5),S=[];for(let K of[[.15,.35],[.65,.85]]){let Q=C?t:i,N=C?i:t;for(let q=0;q<4&&!S.some(j=>j.band===K[0]);q++){let j=e.rand(K[0],K[1])*N,oe=e.rand(70,Math.min(300,N*.09)),we=e.rand(.7,1.5),Ie=e.rand(0,Fe),De=[];for(let Ze=0;Ze<=46;Ze++){let Ye=Ze/46,Oe=et(j+Math.sin(Ye*we*Fe+Ie)*oe,90,N-90);De.push(C?{x:Ye*Q,y:Oe}:{x:Oe,y:Ye*Q})}if(De=M(De),!De)continue;let Ge=!1;for(let Ze of S)for(let Ye=0;Ye<De.length-1&&!Ge;Ye++)for(let Oe=0;Oe<Ze.pts.length-1;Oe++)if(Qn(De[Ye].x,De[Ye].y,De[Ye+1].x,De[Ye+1].y,Ze.pts[Oe].x,Ze.pts[Oe].y,Ze.pts[Oe+1].x,Ze.pts[Oe+1].y)){Ge=!0;break}Ge||S.push({pts:De,band:K[0]})}}let P=(K,Q,N)=>{let q=1e9;for(let j of N){let oe=j.pts;for(let we=0;we<oe.length-1;we++)q=Math.min(q,gt(K,Q,oe[we].x,oe[we].y,oe[we+1].x,oe[we+1].y))}return q},z=(K,Q)=>P(K,Q,S),X=(K,Q)=>P(K,Q,b);for(let K of b)K.fade=K.pts.map(Q=>{let N=m(Q.x,Q.y);return N<=.015?0:gi((z(Q.x,Q.y)-17)/9)*gi((N-.015)/.05)}),K.poles=K.poles.filter(Q=>m(Q.x,Q.y)>.03);let D=[];for(let K of S)for(let Q=0;Q<K.pts.length-1;Q++)for(let N of b)for(let q=0;q<N.pts.length-1;q++){let j=Ff(K.pts[Q].x,K.pts[Q].y,K.pts[Q+1].x,K.pts[Q+1].y,N.pts[q].x,N.pts[q].y,N.pts[q+1].x,N.pts[q+1].y);j&&D.push({x:j.x,y:j.y,railAng:Math.atan2(K.pts[Q+1].y-K.pts[Q].y,K.pts[Q+1].x-K.pts[Q].x),gate:0,active:!1})}let k=[];for(let K=0;K<26&&k.length<5;K++){let Q=e.rand(.34*t,.97*t),N=e.rand(.14*i,.86*i),q=e.rand(170,330);if(m(Q,N)<q/Math.min(a,l)+.06||E(Q,N)==="desert"||z(Q,N)<q+120||J(Q,N,v.x,v.y)<mt+q+260||k.some(De=>J(Q,N,De.x,De.y)<q+De.r+220))continue;let j=[],oe=[{f:2,p:e.rand(0,Fe)},{f:3,p:e.rand(0,Fe)},{f:5,p:e.rand(0,Fe)}];for(let De=0;De<28;De++){let Ge=De/28*Fe,Ze=0;for(let Ye=0;Ye<3;Ye++)Ze+=Math.sin(Ge*oe[Ye].f+oe[Ye].p)/(Ye+1.6);j.push(1+.17*Math.max(-1,Math.min(1,Ze)))}let we=E(Q,N)==="winter",Ie=[];if(!we)for(let De=0,Ge=e.randi(2,4);De<Ge;De++)Ie.push({a:e.rand(0,Fe),rr:e.rand(.2,.72),s:e.rand(9,16)});k.push({x:Q,y:N,r:q,wob:j,frozen:we,pads:Ie,seed:e.rand(0,9)})}let G=(K,Q)=>{for(let N of k)if(ae(K,Q,N.x,N.y)<N.r*N.r)return N;return null},re=[];for(let K of Nf){let Q=K.fx*t,N=K.fy*i;for(let q=0;q<8&&(m(Q,N)<.12||G(Q,N));q++)Q=Q*.78+r*.22,N=N*.78+o*.22;re.push({type:K.type,name:K.name,x:Q,y:N,r:200,crates:K.crates,nbarrels:K.barrels,nguards:K.guards})}let L=mt+240+700,V={x:.4*t,y:.52*i};e:for(let K=0;K<6;K++){let Q=L+K*700;for(let N=0;N<16;N++){let q=N/16*Fe,j=v.x+Math.cos(q)*Q,oe=v.y+Math.sin(q)*Q;if(!(j<600||oe<600||j>t-600||oe>i-600)&&!(m(j,oe)<.12||G(j,oe))&&!(z(j,oe)<360||X(j,oe)<320)&&!(J(j,oe,v.x,v.y)<L)){V={x:j,y:oe};break e}}}re.push({type:"quarry",name:"Quarry",x:V.x,y:V.y,r:170}),n.quarry={x:V.x,y:V.y,r:Vn.capR,owner:null,capOwner:null,capT:0,payT:0,arm:0,paid:0};let ne=[],fe=[],ke=(K,Q,N,q)=>{if(m(K,Q)<.06||G(K,Q))return!1;let j=E(K,Q);if(j!=="jungle"&&j!=="winter"||J(K,Q,v.x,v.y)<mt+N)return!1;for(let oe of re)if(J(K,Q,oe.x,oe.y)<oe.r+240)return!1;if(z(K,Q)<N+90)return!1;for(let oe of q)if(J(K,Q,oe.x,oe.y)<N+oe.r+44)return!1;return!0};for(let K=0;K<34;K++)for(let Q=0;Q<30;Q++){let N=e.rand(t/3,t-120),q=e.rand(120,i-120),j=e.rand(28,42);if(ke(N,q,j,ne)){ne.push({x:N,y:q,r:j,seed:e.rand(0,9),winter:E(N,q)==="winter"});break}}for(let K=0;K<72;K++)for(let Q=0;Q<18;Q++){let N=e.rand(t/3,t-100),q=e.rand(100,i-100),j=e.rand(7,13);if(ke(N,q,j,ne)){fe.push({x:N,y:q,r:j,seed:e.rand(0,9),winter:E(N,q)==="winter"});break}}n.world={island:p,islandPath:y,onLand:g,landFactor:m,islandRadAt:x,biomeAt:E,biomeRidge:w,shop:v,roads:b,rails:S,railHoriz:C,crossings:D,lakes:k,lakeAt:G,railDist:z,pathDist:X,monuments:re,boulders:ne,rocks:fe,flora:[],palms:[]},Lm(n),Dm(n),Um(n),Fm(n),n.copter={x:n.player.x+120,y:n.player.y,angle:0,rotor:0,vx:0,vy:0,spd:0,hp:ft.hp,max:ft.hp,destroyed:!1}}function Pm(n,e,t,i){let s=n.rng;for(let r=0;r<40;r++){let o=s.rand(i,he.w-i),a=s.rand(i,he.h-i);if(J(o,a,n.player.x,n.player.y)<220||n.world.landFactor(o,a)<.05||n.world.lakeAt(o,a))continue;let l=!1;for(let c of e)if(J(o,a,c.x,c.y)<t+c.r+24){l=!0;break}if(!l)return{x:o,y:a}}return null}function Lm(n){let e=n.rng,t=[["tree",290,22,120,"wood"],["stone",190,26,140,"stone"],["metal",150,24,110,"metal"]],i=[];for(let[s,r,o,a,l]of t)for(let c=0;c<r;c++){let f=Pm(n,i,o,90);if(!f)continue;let h={type:s,x:f.x,y:f.y,r:o,amount:a,max:a,regen:0,seed:e.rand(0,1e3),base:l,by:null,byT:0};i.push(h),n.resources.push(h)}}function Dm(n){let e=n.rng;for(let t of n.world.monuments)if(t.type!=="quarry"){for(let i=0;i<t.crates;i++){let s=e.rand(0,Fe),r=e.rand(24,.62*t.r);n.barrels.push({x:t.x+Math.cos(s)*r,y:t.y+Math.sin(s)*r,r:18,hp:45,max:45,seed:e.rand(0,9),tier:"mon",crate:!0,respawnT:0})}for(let i=0;i<t.nbarrels;i++){let s=e.rand(0,Fe),r=e.rand(.45*t.r,.95*t.r);n.barrels.push({x:t.x+Math.cos(s)*r,y:t.y+Math.sin(s)*r,r:16,hp:30,max:30,seed:e.rand(0,9),tier:"mon",respawnT:0})}for(let i=0;i<t.nguards;i++)Nm(n,t)}for(let t of n.world.roads)if(!t.convoy)for(let i=0;i<t.pts.length;i+=2){if(i%4!==0||!e.chance(.7))continue;let s=t.pts[i],r=e.rand(0,Fe),o=et(s.x+Math.cos(r)*(t.w/2+e.rand(16,70)),30,he.w-30),a=et(s.y+Math.sin(r)*(t.w/2+e.rand(16,70)),30,he.h-30);J(o,a,n.world.shop.x,n.world.shop.y)<mt+60||!n.world.onLand(o,a)||n.world.lakeAt(o,a)||n.barrels.push({x:o,y:a,r:16,hp:30,max:30,seed:e.rand(0,9),tier:"road",respawnT:0})}}function Nm(n,e){let t=n.rng,i=t.rand(0,Fe),s=t.rand(.35*e.r,.8*e.r);n.guards.push({mx:e.x,my:e.y,mr:e.r,x:e.x+Math.cos(i)*s,y:e.y+Math.sin(i)*s,hp:Bt.hp,max:Bt.hp,angle:t.rand(0,Fe),gunCd:t.rand(0,.6),dead:!1,respawnT:0,wpX:0,wpY:0,wpT:0,hasWp:!1,seed:t.rand(0,9),vx:0,vy:0})}function Um(n){let e=n.rng,t=he.w,i=he.h,s=["#d96a83","#dbb44a","#c46ac4","#e8e4da","#e08a52","#7aa0e0"];for(let r=0,o=e.randi(200,300);r<o;r++){let a=e.rand(t/3,2*t/3),l=e.rand(60,i-60);if(!n.world.onLand(a,l)||n.world.lakeAt(a,l)||n.world.biomeAt(a,l)!=="jungle")continue;let c=e.next();n.world.flora.push({x:a,y:l,type:c<.4?"flower":c<.72?"fern":"shrub",seed:e.rand(0,9),col:e.pick(s)})}for(let r=0,o=e.randi(90,140);r<o;r++){let a=e.rand(30,t/3),l=e.rand(60,i-60);!n.world.onLand(a,l)||n.world.lakeAt(a,l)||n.world.biomeAt(a,l)!=="desert"||n.world.flora.push({x:a,y:l,type:e.chance(.5)?"cactus":"deshrub",seed:e.rand(0,9),arms:e.randi(0,2)})}for(let r=0;r<n.world.islandPath.length;r+=2){let o=n.world.islandPath[r],a=n.world.island.cx+(o.x-n.world.island.cx)*.93,l=n.world.island.cy+(o.y-n.world.island.cy)*.93;n.world.biomeAt(a,l)==="jungle"&&e.chance(.34)&&n.world.palms.push({x:a,y:l,seed:e.rand(0,9)})}for(let r=0,o=e.randi(10,16);r<o;r++){let a=e.rand(40,t/3-20),l=e.rand(80,i-80);n.world.biomeAt(a,l)==="desert"&&n.world.onLand(a,l)&&!n.world.lakeAt(a,l)&&n.world.palms.push({x:a,y:l,seed:e.rand(0,9),desert:!0})}}function Fm(n){let e=n.rng,t=he.w,i=he.h,s=o=>o==="desert"?[0,t/3]:o==="jungle"?[t/3,2*t/3]:o==="winter"?[2*t/3,t]:[0,t],r=[];for(let[o,a]of Df){let l=us[o];for(let c=0;c<a;c++){let f=kf(n,o,l,s(l.biome),r,null);if(f&&l.pack&&e.chance(.45))for(let h=0,d=e.randi(1,2);h<d;h++)kf(n,o,l,s(l.biome),r,f)}}}function kf(n,e,t,i,s,r){let o=n.rng;for(let a=0;a<40;a++){let l,c,f=r?r.lake:null;if(r)l=r.x+o.rand(-150,150),c=r.y+o.rand(-150,150);else if(t.lake){let u=n.world.lakes.filter(m=>!m.frozen||t.biome!=="jungle");if(!u.length)return null;f=o.pick(u);let p=o.rand(0,Fe),x=f.r+o.rand(30,200);l=f.x+Math.cos(p)*x,c=f.y+Math.sin(p)*x}else l=o.rand(i[0],i[1]),c=o.rand(90,he.h-90);if(l=et(l,i[0]-70,i[1]+70),c=et(c,90,he.h-90),J(l,c,n.player.x,n.player.y)<220||n.world.landFactor(l,c)<.05||n.world.lakeAt(l,c)&&!t.lake)continue;let h=!1;for(let u of s)if(J(l,c,u.x,u.y)<t.r+u.r+8){h=!0;break}if(h)continue;let d={type:e,x:l,y:c,vx:0,vy:0,r:t.r,hp:t.hp,max:t.hp,aggro:null,atkcd:0,hit:0,wanderT:o.rand(0,2),dir:o.rand(0,Fe),respawnT:0,hostile:o.chance(.1),foe:null,lake:f,pauseT:0,stuckT:0,blockedAll:0,dead:!1,avoidT:0,avoidA:0};return s.push(d),n.animals.push(d),d}return null}var dn=Math.ceil(he.w/64),Ls=Math.ceil(he.h/64),zi=dn*Ls;function Gf(n){let e=new Uint8Array(zi),t=new Float32Array(zi);for(let i=0;i<Ls;i++)for(let s=0;s<dn;s++){let r=s*64+64/2,o=i*64+64/2,a=i*dn+s,l=1;if(!n.world.onLand(r,o)){e[a]=1,t[a]=1;continue}let c=n.world.lakeAt(r,o);c&&(l=c.frozen?1.15:3);for(let f of n.world.boulders)if((r-f.x)*(r-f.x)+(o-f.y)*(o-f.y)<(f.r+18)*(f.r+18)){e[a]=1;break}n.world.pathDist(r,o)<26&&(l=Math.min(l,.85)),t[a]=l}n.nav={COLS:dn,ROWS:Ls,N:zi,terrain:e,cost:t,stamp:1,penalty:new Map,g:new Float32Array(zi),came:new Int32Array(zi),vis:new Int32Array(zi),gen:0,heap:new Int32Array(zi+1),heapF:new Float32Array(zi+1)}}var br=(n,e)=>n<0||e<0||n>=dn||e>=Ls?-1:e*dn+n;function km(n,e,t,i){let s=n.deploys.get(We(e,t));return s?s.type==="cupboard"?s.owner!==i:!0:!1}function zo(n,e,t,i){let s=br(e,t);return!(s<0||n.nav.terrain[s]||n.walls.has("D,"+e+","+t)||km(n,e,t,i)||n.nav.fenceCells&&n.nav.fenceCells.has(s))}function bc(n,e,t,i,s,r){let o;i>e?o=Ae("V",i,t):i<e?o=Ae("V",e,t):s>t?o=Ae("H",e,s):o=Ae("H",e,t);let a=n.walls.get(o);return!a||a.hp<=0?0:a.type==="door"&&(a.open||a.lock&&a.lock.by===r)?1:2}function yi(n,e,t,i,s,r){if(!zo(n,i,s,r))return-1;let o=bc(n,e,t,i,s,r);return o===2?-1:o}function Om(n,e,t){let i=n.nav.cost[e],s=n.nav.penalty.get(e);return s!==void 0&&(s>t?i+=6:n.nav.penalty.delete(e)),i}function Ho(n,e,t,i=12){let s=br(Math.floor(e/64),Math.floor(t/64));s>=0&&n.nav.penalty.set(s,n.t+i)}var Ds=256,Bo=Math.ceil(he.w/Ds),Bf=Math.ceil(he.h/Ds);function Bm(n){let e=n.nav;if(e.maskStamp===e.stamp&&e.mask)return e.mask;let t=e.mask&&e.maskStamp!==void 0?e.mask.fill(0):new Uint8Array(Bo*Bf),i=(s,r)=>{let o=s/Ds|0,a=r/Ds|0;for(let l=-1;l<=1;l++)for(let c=-1;c<=1;c++){let f=(a+l)*Bo+(o+c);o+c>=0&&a+l>=0&&o+c<Bo&&a+l<Bf&&(t[f]=1)}};for(let s of n.walls.keys()){let r=s.split(",");i(+r[1]*64,+r[2]*64)}for(let s of n.deploys.keys()){let r=s.split(",");i(+r[0]*64,+r[1]*64)}for(let s of n.fences)i(s.x,s.y);return e.mask=t,e.maskStamp=e.stamp,t}function Wf(n,e,t){let i=Bm(n),s=(t/Ds|0)*Bo+(e/Ds|0);return i[s]===1}function Xf(n){let e=new Set;for(let t of n.fences)e.add(br(Math.floor(t.x/64),Math.floor(t.y/64)));n.nav.fenceCells=e,n.nav.stamp++}function zf(n,e,t,i){if(zo(n,e,t,i))return{gx:e,gy:t};for(let s=1;s<=8;s++)for(let r=-s;r<=s;r++)for(let o=-s;o<=s;o++)if(Math.max(Math.abs(o),Math.abs(r))===s&&zo(n,e+o,t+r,i))return{gx:e+o,gy:t+r};return null}function Hf(n,e,t){let i=++n.heapN,s=n.heap,r=n.heapF;for(;i>1;){let o=i>>1;if(r[o]<=t)break;s[i]=s[o],r[i]=r[o],i=o}s[i]=e,r[i]=t}function zm(n){let e=n.heap,t=n.heapF,i=e[1],s=e[n.heapN],r=t[n.heapN--],o=1;for(;;){let a=o<<1;if(a>n.heapN||(a+1<=n.heapN&&t[a+1]<t[a]&&a++,t[a]>=r))break;e[o]=e[a],t[o]=t[a],o=a}return e[o]=s,t[o]=r,i}var Vf=[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]];function qf(n,e,t,i,s,r,o){let a=n.nav,l=et(Math.floor(t/64),0,dn-1),c=et(Math.floor(i/64),0,Ls-1),f=et(Math.floor(s/64),0,dn-1),h=et(Math.floor(r/64),0,Ls-1),d=zf(n,l,c,e);if(!d)return null;let u=zf(n,f,h,e);if(!u)return null;if(l=d.gx,c=d.gy,f=u.gx,h=u.gy,l===f&&c===h)return[{x:s,y:r}];let p=++a.gen;a.heapN=0;let x=c*dn+l,m=h*dn+f;a.vis[x]=p,a.g[x]=0,a.came[x]=-1,Hf(a,x,0);let g=Math.max(Math.abs(f-l),Math.abs(h-c)),y=o||Math.min(26e3,3e3+g*90),w=0,E=!1;for(;a.heapN>0&&w++<y;){let C=zm(a);if(C===m){E=!0;break}let S=C%dn,P=C/dn|0,z=a.g[C];for(let X=0;X<8;X++){let D=Vf[X][0],k=Vf[X][1],G=S+D,re=P+k,L=br(G,re);if(L<0)continue;let V=0;if(X<4){let N=yi(n,S,P,G,re,e);if(N<0)continue;N===1&&(V=2)}else if(yi(n,S,P,S+D,P,e)!==0||yi(n,S,P,S,P+k,e)!==0||yi(n,S+D,P,G,re,e)!==0||yi(n,S,P+k,G,re,e)!==0)continue;let ne=(X<4?1:1.41421)*Om(n,L,n.t)+V,fe=z+ne;if(a.vis[L]===p&&a.g[L]<=fe)continue;a.vis[L]=p,a.g[L]=fe,a.came[L]=C;let ke=Math.abs(G-f),K=Math.abs(re-h),Q=(Math.max(ke,K)+.41421*Math.min(ke,K))*.85;Hf(a,L,fe+Q)}}if(!E)return null;let v=[],b=m;for(;b!==-1;)v.push(b),b=a.came[b];v.reverse();let R=[];for(let C=0;C<v.length;C++){let S=v[C]%dn,P=v[C]/dn|0,z=!1;if(C>0){let X=v[C-1]%dn,D=v[C-1]/dn|0;Math.abs(S-X)+Math.abs(P-D)===1&&(z=bc(n,X,D,S,P,e)===1)}R.push({x:S*64+64/2,y:P*64+64/2,door:z})}R[R.length-1]={x:s,y:r,door:R[R.length-1].door};let _=[R[0]],M=0;for(let C=1;C<R.length;C++)if(R[C].door||C===R.length-1){let S=M;for(;S<C;){let P=S+1;for(let z=C;z>S;z--)if(!(R[z].door&&z!==C)&&Mr(n,e,R[S].x,R[S].y,R[z].x,R[z].y)){P=z;break}_.push(R[P]),S=P}M=C}return _.length>1&&!_[0].door&&Mr(n,e,t,i,_[1].x,_[1].y)&&_.shift(),_}function Mr(n,e,t,i,s,r){let o=Math.hypot(s-t,r-i),a=Math.max(1,Math.ceil(o/(64*.4))),l=Math.floor(t/64),c=Math.floor(i/64);for(let f=1;f<=a;f++){let h=f/a,d=t+(s-t)*h,u=i+(r-i)*h,p=Math.floor(d/64),x=Math.floor(u/64);if(!(p===l&&x===c)){if(!zo(n,p,x,e))return!1;if(p!==l&&x!==c){if(yi(n,l,c,p,c,e)!==0||yi(n,p,c,p,x,e)!==0||yi(n,l,c,l,x,e)!==0||yi(n,l,x,p,x,e)!==0)return!1}else if(bc(n,l,c,p,x,e)!==0)return!1;l=p,c=x}}return!0}function Yf(n,e,t,i,s){let r=Math.hypot(i-e,s-t),o=Math.max(1,Math.ceil(r/(64*.5)));for(let a=1;a<=o;a++){let l=a/o,c=br(Math.floor((e+(i-e)*l)/64),Math.floor((t+(s-t)*l)/64));if(c<0||n.nav.terrain[c])return!1}return!0}function wc(n){let e={seed:n>>>0,rng:Uf(n),t:0,tick:0,resources:[],barrels:[],loot:[],bullets:[],rockets:[],grenades:[],satchels:[],fences:[],fires:[],wrecks:[],animals:[],guards:[],dummies:[],structures:new Map,walls:new Map,deploys:new Map,units:[],teams:[],transports:[],trains:[],convoys:[],airdrop:null,plane:null,airdropT:150,signal:null,patrol:null,patrolT:0,lockedCrate:null,crateT:0,quarry:null,trainT:0,convoyT:0,clouds:null,fogBanks:null,fireflies:null,footprints:[],weather:{mode:"clear",timer:28,rain:0,boltT:0,flash:0,fog:0,fogTimer:18,fogOn:!1},wind:0,player:{x:he.w/2,y:he.h/2+260,vx:0,vy:0,angle:0,walk:200,run:340,recoil:0,health:100,maxhp:100,hurt:0,regenDelay:0,dead:!1,deadT:0,invuln:0,moving:!1,inCopter:!1,facemask:0,bodyArmor:0,rifleLaser:!1,poison:0,swing:0,gatherCd:0,lastHitBy:null},inv:{wood:1e4,stone:1e4,metal:1e4,scrap:0,hqm:0,fence:10,grenade:3,signal:0},owned:{pistol:!0,rifle:!1,minigun:!1,rocket:!1,sniper:!1,shotgun:!1,hmg:!1},weapons:Hm(),slot:0,buildMode:!1,buildPiece:"wall",buildRot:0,jackhammer:!1,ghost:!0,copter:null,playerKills:0,deathMark:null,bounty:null,raids:[],elims:[],raidAlarm:null,breachT:{},shake:0,aggressor:-1,aggressorOwner:null,aggroT:0,roleT:0,aliveBases:0,dbSweepT:0,events:[],muzzle:null,blasts:[],scorch:[],flashes:[],floats:[],particles:[],cmd:{mx:0,my:0,fire:!1,fireHeld:!1,up:!1,down:!1,left:!1,right:!1,run:!1},metrics:{hardUnstick:0,wallPhase:0,stuckTotal:0,maxStuck:0,repaths:0,pathFails:0,act:{},raidsLaunched:0,tcKilled:0,elims:0,winner:null,decisiveT:null,workerLog:[],stuckLog:[],regionStuck:{base:0,lake:0,monument:0,open:0}}};return Of(e),Gf(e),Vm(e),e.trainT=e.rng.rand(20,60),e.patrolT=e.rng.rand(180,280),e.crateT=e.rng.rand(100,180),e.convoyT=e.rng.rand(120,200),e}function Hm(){let n={};for(let e in en){let t=en[e];n[e]={ammo:t.magSize,reserve:t.reserve,reloading:0,cd:0,spin:0}}return n}function Vm(n){let e=n.rng,t=[{x:n.world.shop.x,y:n.world.shop.y,r:mt+500},{x:n.player.x,y:n.player.y,r:700},...n.world.monuments.map(i=>({x:i.x,y:i.y,r:mt+320}))];for(let i=0;i<at.TEAM_COUNT;i++){let s=null;for(let f=0;f<120&&!s;f++){let h=e.rand(1400,he.w-1400),d=e.rand(1400,he.h-1400);n.world.landFactor(h,d)<.12||n.world.lakeAt(h,d)||n.world.lakes.some(u=>J(h,d,u.x,u.y)<u.r+560)||n.world.railDist(h,d)<400||n.world.pathDist(h,d)<340||t.some(u=>J(h,d,u.x,u.y)<u.r)||(s={x:h,y:d})}if(!s)continue;t.push({x:s.x,y:s.y,r:Oi});let r=e.next(),o=r<.25,a=r>=.75,l={id:i,owner:"e"+i,col:at.COLS[i%at.COLS.length],hard:o,weak:a,role:["raider","turtle","nomad"][i%3],shotgun:e.chance(.3),eliminated:!1,bases:[],brain:{sealed:!0,decaying:!1,ready:!1,attack:!1,attackers:0,urgent:!1,aggressor:!1,raidTarget:null,raidPhase:null,breachKey:null,breachT:0,buildHoldT:0,builderId:null,lootCd:0,qCd:0,sigCd:0,statusT:e.rand(0,.5),stage:null,stageT:0}};n.teams.push(l);let c=wr(n,l,s.x,s.y,!0);c.inv={wood:120,stone:30,metal:10},c.unfounded=!0,c.siteX=s.x,c.siteY=s.y,c.copter={x:s.x-256,y:s.y,angle:0,rotor:0,spin:0,vx:0,vy:0,hp:160,max:160,destroyed:!1};for(let f=0;f<3;f++){let h=wr(n,l,s.x+e.rand(-46,46),s.y+e.rand(24,64),!1);h.unfounded=!0,h.siteX=s.x,h.siteY=s.y}}}function wr(n,e,t,i,s){let r=n.rng,o={id:e.id,owner:e.owner,col:e.col,primary:!!s,worker:!s,ally:!1,hard:e.hard,weak:e.weak,shotgun:e.shotgun,role:e.role,x:t,y:i,vx:0,vy:0,angle:r.rand(0,Math.PI*2),hx:t,hy:i,tcKey:null,doorX:t,doorY:i+64,doorGy:Math.floor(i/64)+1,hp:100,max:100,dead:!1,respawnT:0,eliminated:!1,regenT:0,lastHitBy:null,inv:{wood:0,stone:0,metal:0},scrap:0,rockets:0,satchels:0,grenades:0,hqm:0,gun:"pistol",rifleLaser:!1,facemask:e.hard?1:0,bodyArmor:e.hard?2:0,jack:!1,kills:0,state:"gather",act:"gather",unfounded:!1,siteX:0,siteY:0,think:r.rand(0,1),gunCd:0,rkCd:0,gnCd:0,fenceCd:0,expandT:r.rand(3,9),retaliateT:0,threatX:0,threatY:0,disengageT:0,defendT:0,defHold:0,defTgt:null,retreat:!1,raid:null,wasRaid:!1,raidCd:0,raidBias:r.next(),raidUrge:0,defDuty:!1,buildDuty:!1,rocketer:!1,lootRun:null,qRun:null,monRun:!1,monRunT:0,monCd:0,monStay:0,tgtNode:null,skipNode:null,skipT:0,lootTgt:null,lootSkip:null,lootSkipT:0,lane:r.rand(-12,12),hoff:r.rand(-26,26),path:null,pathI:0,pathGX:0,pathGY:0,pathT:0,navStamp:0,repathN:0,noPathT:0,progT:0,progBest:1e9,stuckT:0,baseT:0,idleT:0,aiNetT:0,aiPx:t,aiPy:i,retT:0,maintT:-10,hireT:0,stT:0,expT:r.rand(40,80),fwdT:0,endgame:!1,copter:null,flying:!1,aboard:null,tradeDone:!1,parkChk:0,gathering:!1,swing:0,hf:!1,strafeT:0,strafeS:1,backoff:!1,tickPhase:n.units.length%9};return n.units.push(o),o}function Zf(n){let e=n.rng,t=n.world.shop,i=Gm(n),r=wr(n,{id:-1,owner:ze,col:"#7ec850",hard:!1,weak:!1,shotgun:!1,role:"raider"},t.x+e.rand(-60,60),t.y+(t.r||120)+40,!1);return r.ally=!0,r.gun="rifle",r.col="#7ec850",r.raidUrge=e.rand(12,24),r.facemask=0,r.bodyArmor=0,i?(r.hx=i.hx,r.hy=i.hy,r.tcKey=i.tcKey):(r.hx=n.player.x,r.hy=n.player.y),r.doorX=r.hx,r.doorY=r.hy+64,r.doorGy=Math.floor(r.hy/64)+1,r}function Gm(n){for(let[e,t]of n.deploys)if(t.type==="cupboard"&&t.owner===ze){let[i,s]=e.split(",").map(Number);return{owner:ze,tcKey:e,hx:i*64+64/2,hy:s*64+64/2,isPlayer:!0}}return null}var $f=(n,e)=>n.teams.find(t=>t.owner===e)||null;function He(n,e,t,i,s){let r=0,o=n.floats[n.floats.length-1];o&&n.t-o.born<1&&Math.abs(o.ox-e)<60&&Math.abs(o.oy-t)<44&&(r=o.lift+15),n.floats.push({x:e,y:t-r,ox:e,oy:t,lift:r,text:i,col:s||"#e8e2cf",vy:-26,life:.9,max:.9,born:n.t}),n.floats.length>90&&n.floats.shift()}function ot(n,e,t,i,s,r){for(let o=0;o<s;o++){let a=n.rng.rand(0,Math.PI*2),l=n.rng.rand(.3*r,r);n.particles.push({x:e,y:t,vx:Math.cos(a)*l,vy:Math.sin(a)*l,life:n.rng.rand(.25,.6),max:.6,r:n.rng.rand(1.5,3.5),col:i})}n.particles.length>900&&n.particles.splice(0,n.particles.length-900)}function xt(n,e,t,i,s,r){let o=n.rng.rand(0,Math.PI*2),a=n.rng.rand(40,90);n.loot.push({x:e,y:t,vx:Math.cos(o)*a,vy:Math.sin(o)*a,kind:i,amt:s,gun:r||null,life:0,bob:n.rng.rand(0,Math.PI*2)})}function tn(n,e,t,i,s){if(s<=0)return;let r=Math.min(12,Math.max(1,Math.ceil(s/50))),o=s;for(let a=0;a<r;a++){let l=Math.min(o,Math.ceil(s/r));if(l<=0)break;xt(n,e+n.rng.rand(-14,14),t+n.rng.rand(-14,14),i,l),o-=l}}function Kf(n,e,t,i){if(i.store)for(let s of["wood","stone","metal"])tn(n,e,t,s,i.store[s]|0),i.store[s]=0}function Jf(n,e,t,i){let s=n.raids.find(r=>r.id===i);if(s){s.x=e,s.y=t,s.t=60;return}n.raids.push({x:e,y:t,id:i,t:60}),n.raids.length>40&&n.raids.shift()}function Vo(n,e){if(!e)return;if(e===ze){n.playerKills++,n.inv.scrap+=12;return}let t=n.units.find(i=>i.owner===e&&i.primary&&!i.eliminated)||n.units.find(i=>i.owner===e&&!i.eliminated);t&&(t.kills++,t.scrap+=12)}function Rt(n,e){let t=n.split(","),i=+t[1],s=+t[2];return t[0]==="V"?[i*64,s*64,i*64,(s+1)*64]:t[0]==="H"?[i*64,s*64,(i+1)*64,s*64]:e&&e.rot===1?[i*64,(s+1)*64,(i+1)*64,s*64]:[i*64,s*64,(i+1)*64,(s+1)*64]}var Tc=(n,e)=>[Ae("V",n,e),Ae("V",n+1,e),Ae("H",n,e),Ae("H",n,e+1),Ae("D",n,e)];function Ec(n,e,t,i,s){let r=Math.floor((e-i)/64),o=Math.floor((e+i)/64),a=Math.floor((t-i)/64),l=Math.floor((t+i)/64);for(let c=a;c<=l;c++)for(let f=r;f<=o;f++)for(let h of Tc(f,c)){let d=n.walls.get(h);if(d&&d.hp>0&&s(h,d)===!0)return!0}return!1}function Tr(n,e,t,i){let s=n.deploys.get(We(Math.floor(e/64),Math.floor(t/64)));return!s||i&&s.type==="cupboard"&&s.owner===i?!1:s.type==="turret"||s.type==="cupboard"||s.type==="box"}function Wm(n,e,t,i,s){if(Tr(n,e,t,s))return!0;for(let r=0;r<8;r++){let o=r/8*Math.PI*2;if(Tr(n,e+Math.cos(o)*i,t+Math.sin(o)*i,s))return!0}return!1}function Ac(n,e,t,i){for(let s of n.world.boulders)if(ae(e,t,s.x,s.y)<(i+s.r)*(i+s.r))return!0;return!1}function Er(n,e,t){for(let i of n.world.boulders)if(ae(e,t,i.x,i.y)<(i.r+12)*(i.r+12))return i;return null}function jn(n,e,t,i,s){for(let r of n.world.boulders)if(gt(r.x,r.y,e,t,i,s)<r.r)return!0;return!1}function Xm(n,e,t,i){for(let s of n.fences)if(!(s.hp<=0)&&gt(e,t,s.x0,s.y0,s.x1,s.y1)<i+4)return s;return null}function yt(n,e,t,i,s={}){if(!n.world.onLand(e,t)||Ac(n,e,t,i))return!0;if(!Wf(n,e,t))return!1;if(Wm(n,e,t,i,s.passOwner)||Xm(n,e,t,i))return!0;let r=!1;return Ec(n,e,t,i+8,(o,a)=>{if(a.type==="door"&&a.open)return!1;if(a.type==="door"&&s.openOwnDoors&&a.lock&&a.lock.by===s.passOwner)return a.open=!0,a.closeT=n.t+1,n.nav.stamp++,!1;let l=Rt(o,a);if(gt(e,t,l[0],l[1],l[2],l[3])<i+4)return r=!0,!0}),r}function Nt(n,e,t,i,s){let r=Math.min(e,i)-64,o=Math.max(e,i)+64,a=Math.min(t,s)-64,l=Math.max(t,s)+64,c=Math.floor(r/64),f=Math.floor(o/64),h=Math.floor(a/64),d=Math.floor(l/64),u=Math.hypot(i-e,s-t);if(u>192){let p=Math.ceil(u/(64*.5)),x=new Set;for(let m=0;m<=p;m++){let g=m/p,y=Math.floor((e+(i-e)*g)/64),w=Math.floor((t+(s-t)*g)/64),E=y*10007+w;if(!x.has(E)){x.add(E);for(let v of Tc(y,w)){let b=n.walls.get(v);if(!b||b.hp<=0||b.type==="door"&&b.open)continue;let R=Rt(v,b);if(Qn(e,t,i,s,R[0],R[1],R[2],R[3]))return!0}}}return!1}for(let p=h;p<=d;p++)for(let x=c;x<=f;x++)for(let m of Tc(x,p)){let g=n.walls.get(m);if(!g||g.hp<=0||g.type==="door"&&g.open)continue;let y=Rt(m,g);if(Qn(e,t,i,s,y[0],y[1],y[2],y[3]))return!0}return!1}function _t(n,e,t){return ae(e,t,n.world.shop.x,n.world.shop.y)<mt*mt}function Ns(n,e,t){for(let i of n.world.monuments)if(ae(e,t,i.x,i.y)<yc*yc)return i;return null}function Go(n,e,t){return gt(n,e,t.px,t.py,t.x,t.y)<If}var it=(n,e)=>({x:n*64+64/2,y:e*64+64/2});function qm(n,e,t,i){let s=null,r=Dt*Dt;for(let[o,a]of n.deploys){if(a.type!=="cupboard"||i&&a.owner!==i)continue;let[l,c]=o.split(",").map(Number),f=it(l,c),h=ae(e,t,f.x,f.y);h<r&&(r=h,s={key:o,d:a,x:f.x,y:f.y})}return s}function yn(n,e){let t=n.deploys.get(e);return t&&t.type==="cupboard"?t:null}var bn={has(n,e){for(let t in e){let i=0;for(let s of n)i+=s[t]||0;if(i<e[t])return!1}return!0},pay(n,e){if(!bn.has(n,e))return!1;for(let t in e){let i=e[t];for(let s of n){let r=Math.min(i,s[t]||0);if(s[t]=(s[t]||0)-r,i-=r,i<=0)break}}return!0}};function Ym(n,e,t,i){let s=t,r=t,o=i,a=i,l=!1;for(let[c,f]of n.structures){if(f.owner!==e)continue;let[h,d]=c.split(",").map(Number);Math.abs(h-t)*64>Dt||Math.abs(d-i)*64>Dt||(l=!0,s=Math.min(s,h),r=Math.max(r,h),o=Math.min(o,d),a=Math.max(a,d))}return l?r-s+1>gc||a-o+1>gc:!1}function Qf(n,e){let t=e.split(","),i=+t[1],s=+t[2];return t[0]==="V"?n.structures.has(We(i-1,s))||n.structures.has(We(i,s)):n.structures.has(We(i,s-1))||n.structures.has(We(i,s))}function Rc(n,e,t,i){let s=Xt[t];if(!s)return!1;if(s.cat==="cell"){let{gx:r,gy:o}=i,a=it(r,o);if(r<1||o<1||a.x>13760||a.y>9152||_t(n,a.x,a.y)||Ns(n,a.x,a.y)||Er(n,a.x,a.y)||!n.world.onLand(a.x,a.y)||n.world.lakeAt(a.x,a.y))return!1;if(s.found)return!(n.structures.has(We(r,o))||n.deploys.has(We(r,o))||Ym(n,e,r,o)||Zm(n,r,o));if(n.deploys.has(We(r,o))||(s.tc||s.box)&&!n.structures.has(We(r,o)))return!1;if(s.tc){if(e===ze&&[...n.deploys.values()].some(l=>l.type==="cupboard"&&l.owner===ze))return!1;for(let[l,c]of n.deploys){if(c.type!=="cupboard")continue;let[f,h]=l.split(",").map(Number),d=it(f,h);if(J(a.x,a.y,d.x,d.y)<Oi)return!1}}return!(s.turret&&!qm(n,a.x,a.y,e))}if(s.cat==="edge"){let r=i.key;if(n.walls.has(r)||!Qf(n,r))return!1;let a=Rt(r,{type:t}),l=(a[0]+a[2])/2,c=(a[1]+a[3])/2;return!(_t(n,l,c)||Ns(n,l,c))}if(s.cat==="diag"){let r=i.key;if(n.walls.has(r))return!1;let o=r.split(",");return!!n.structures.has(We(+o[1],+o[2]))}return!1}function Zm(n,e,t){let i=it(e,t),s=r=>r&&!r.destroyed&&Math.abs(r.x-i.x)<38&&Math.abs(r.y-i.y)<38;if(s(n.copter))return!0;for(let r of n.units)if(s(r.copter))return!0;return!1}function jf(n,e,t,i,s,r={}){let o=Xt[t];if(!Rc(n,e,t,i)||s&&!bn.pay(s,o.cost))return null;let a=r.mat||"wood",l=mi(o,a),c;return o.cat==="cell"&&o.found?(c={type:t,mat:a,hp:l,max:l,owner:e,hitT:-100,rot:(r.rot||0)&3},n.structures.set(We(i.gx,i.gy),c)):o.cat==="cell"?(c={type:t,mat:"wood",hp:o.hp,max:o.hp,owner:e,hitT:-100},o.store&&(c.store={wood:0,stone:0,metal:0,scrap:0}),o.turret&&(c.tier=r.tier||1,c.angle=0,c.cd=0,c.mag=12,c.reload=0,c.ext=!!r.ext,c.scanT=n.rng.rand(.5,4.5)),(o.tc||o.box||o.door)&&(c.lock={by:e}),n.deploys.set(We(i.gx,i.gy),c)):(c={type:t,mat:a,hp:mi(o,a),max:mi(o,a),owner:e,hitT:-100,open:!1,rot:(r.rot||0)&1},o.door&&(c.lock={by:e}),n.walls.set(i.key,c)),n.nav.stamp++,c}function ed(n,e,t,i){let s=Af[e.mat];return!s||!t.up||i&&!bn.pay(i,s.cost)?!1:(e.mat=s.to,e.max=mi(t,e.mat),e.hp=e.max,!0)}function Us(n,e,t,i){let s=n.walls.get(e);if(!s||s.hp<=0)return!1;if(s.hp-=t,s.hitT=n.t,s.hp<=0){let r=Rt(e,s);return ot(n,(r[0]+r[2])/2,(r[1]+r[3])/2,"#8a7a5c",10,160),n.walls.delete(e),n.breachT[e]=n.t,n.nav.stamp++,n.events.push({type:"wallDown",x:(r[0]+r[2])/2,y:(r[1]+r[3])/2}),!0}return!1}function Ar(n,e,t){let i=n.structures.get(e);return i?(i.hp-=t,i.hitT=n.t,i.hp<=0?(n.structures.delete(e),n.breachT[e]=n.t,Wo(n,e),n.nav.stamp++,!0):!1):!1}function ps(n,e,t,i){let s=n.deploys.get(e);return s?(s.hp-=t,s.hitT=n.t,s.hp<=0?(Cc(n,e,s,i),!0):!1):!1}function Cc(n,e,t,i){let[s,r]=e.split(",").map(Number),o=it(s,r);if(Kf(n,o.x,o.y,t),n.deploys.delete(e),n.nav.stamp++,ot(n,o.x,o.y,"#caa24a",14,220),t.type==="cupboard"){if(He(n,o.x,o.y,"TC destroyed!","#ff7a4a"),n.metrics.tcKilled++,t.owner===ze)for(let l of["wood","stone","metal"])n.inv[l]>0;Sc(n,t.owner,o.x,o.y);let a=$f(n,t.owner);if(a){let l=a.bases.find(c=>c.tcKey===e);l&&(l.dead=!0)}}}function Sc(n,e,t,i){for(let[s,r]of[...n.walls]){if(r.owner!==e)continue;let o=Rt(s,r);J((o[0]+o[2])/2,(o[1]+o[3])/2,t,i)<560&&n.walls.delete(s)}for(let[s,r]of[...n.structures]){if(r.owner!==e)continue;let[o,a]=s.split(",").map(Number),l=it(o,a);J(l.x,l.y,t,i)<560&&(n.structures.delete(s),ot(n,l.x,l.y,"#6b5a40",3,120))}for(let[s,r]of[...n.deploys]){if(r.owner!==e||r.type==="cupboard")continue;let[o,a]=s.split(",").map(Number),l=it(o,a);J(l.x,l.y,t,i)<560&&n.deploys.delete(s)}n.nav.stamp++}function Wo(n,e){let[t,i]=e.split(",").map(Number);for(let s of[Ae("D",t,i)])n.walls.delete(s);for(let s of[Ae("V",t,i),Ae("V",t+1,i),Ae("H",t,i),Ae("H",t,i+1)])n.walls.has(s)&&!Qf(n,s)&&n.walls.delete(s)}function $m(n,e,t){let i={};for(let s in n.cost)i[s]=Math.max(1,Math.ceil(n.cost[s]*t));return(e.mat==="stone"||e.mat==="metal")&&(i.stone=(i.stone||0)+Math.ceil(15*t)),e.mat==="metal"&&(i.metal=(i.metal||0)+Math.ceil(20*t)),i}function td(n,e,t,i,s=No){if(e.hp>=e.max||n.t-e.hitT<s)return!1;let r=Math.min(e.max-e.hp,e.max*.2),o=r/e.max;return bn.pay(i,$m(t,e,o))?(e.hp+=r,!0):!1}function nd(n,e){if(n.decayT=(n.decayT||0)+e,n.decayT<.5)return;let t=n.decayT;n.decayT=0;let i=[];for(let[r,o]of n.deploys){if(o.type!=="cupboard")continue;let[a,l]=r.split(",").map(Number);i.push({key:r,d:o,...it(a,l),n:0})}let s=(r,o,a)=>{let l=r.split(","),c=+l[l.length-2],f=+l[l.length-1],h=it(c,f),d=null,u=Dt*Dt;for(let p of i){let x=ae(h.x,h.y,p.x,p.y);x<u&&(u=x,d=p)}if(d){if(d.n++,d.d.store.wood+d.d.store.stone+d.d.store.metal>0)return;let x=Math.sqrt(u)/Dt,m=xc+(Sf-xc)*x;o.hp-=o.max*(t/m)}else o.hp-=o.max*(t/Cf);o.hp<=0&&(a?(n.walls.delete(r),n.nav.stamp++):(n.structures.delete(r),Wo(n,r),n.nav.stamp++))};for(let[r,o]of[...n.walls])s(r,o,!0);for(let[r,o]of[...n.structures])s(r,o,!1);for(let r of i){let o=r.n*yr*t;for(let a of["wood","stone","metal"]){if(o<=0)break;let l=Math.min(o,r.d.store[a]);r.d.store[a]-=l,o-=l}}}function Xo(n,e,t,i){let s=Math.floor(t/64),r=Math.floor(i/64),o=e.owner;for(let p=0;p<3;p++)for(let x=0;x<3;x++)n.structures.set(We(s+x,r+p),{type:"floor",mat:"wood",hp:100,max:100,owner:o,hitT:-100});let a=p=>n.walls.set(p,{type:"wall",mat:"wood",hp:100,max:100,owner:o,hitT:-100,open:!1}),l=p=>n.walls.set(p,{type:"door",mat:"wood",hp:50,max:50,owner:o,hitT:-100,open:!1,lock:{by:o}});for(let p=0;p<3;p++)a(Ae("H",s+p,r));a(Ae("H",s,r+3)),a(Ae("H",s+2,r+3)),l(Ae("H",s+1,r+3));for(let p=0;p<3;p++)a(Ae("V",s,r+p)),a(Ae("V",s+3,r+p));let c=s+1,f=r+1;l(Ae("H",c,f)),a(Ae("V",c,f)),a(Ae("V",c+1,f)),l(Ae("H",c,f+1));let h=We(c,f);if(n.deploys.set(h,{type:"cupboard",mat:"wood",hp:300,max:300,owner:o,hitT:-100,lock:{by:o},store:{wood:200+n.rng.randi(20,70),stone:0,metal:n.rng.randi(0,40),scrap:0}}),n.deploys.set(We(s+2,r),{type:"turret",mat:"wood",hp:150,max:150,owner:o,hitT:-100,tier:e.hard?3:e.weak?1:2,angle:0,cd:0,mag:12,reload:0,ext:!1,scanT:n.rng.rand(.5,4.5)}),e.hard)for(let[,p]of n.walls)p.owner===o&&p.mat==="wood"&&(p.mat="metal",p.max=mi(Xt[p.type],"metal"),p.hp=p.max);let d=it(c,f),u={owner:o,tcKey:h,hx:d.x,hy:d.y,doorX:(s+1)*64+64/2,doorY:(r+3)*64,doorGy:r+3,kind:"home",dead:!1,cleared:!1};return e.bases.push(u),Ic(n,e,u),n.nav.stamp++,u}function qo(n,e,t,i){let s=1e9,r=1e9,o=-1e9,a=-1e9,l=!1;for(let[c,f]of n.structures){if(f.owner!==e)continue;let[h,d]=c.split(",").map(Number),u=it(h,d);ae(u.x,u.y,t,i)>Dt*Dt||(l=!0,s=Math.min(s,h),o=Math.max(o,h),r=Math.min(r,d),a=Math.max(a,d))}return l?{minx:s,miny:r,maxx:o,maxy:a}:null}function Ic(n,e,t){let i=qo(n,e.owner,t.hx,t.hy);if(!i)return;let s=Math.floor((i.minx+i.maxx)/2),r=Math.floor((i.miny+i.maxy)/2),o=[Ae("H",s,i.miny),Ae("H",s,i.maxy+1),Ae("V",i.minx,r),Ae("V",i.maxx+1,r)];for(let a of o){let l=n.walls.get(a);l&&l.owner===e.owner&&l.type==="wall"&&l.hp>0&&(l.type="door",l.lock={by:e.owner},l.open=!1)}n.nav.stamp++}function Rr(n,e,t){let i=e.owner,s=Ae("H",Math.floor(t.doorX/64),t.doorGy);for(let[r,o]of n.structures){if(o.owner!==i)continue;let[a,l]=r.split(",").map(Number),c=it(a,l);if(ae(c.x,c.y,t.hx,t.hy)>Dt*Dt)continue;let f=[[Ae("V",a,l),We(a-1,l)],[Ae("V",a+1,l),We(a+1,l)],[Ae("H",a,l),We(a,l-1)],[Ae("H",a,l+1),We(a,l+1)]];for(let[h,d]of f){let u=n.structures.get(d);if(u&&u.owner===i||h===s)continue;let p=n.walls.get(h);if(!p||p.hp<=0)return h}}return null}function Pc(n,e,t,i){return n.t-(n.breachT[t]||-1e9)<Rf||!bn.pay(i,{wood:40})?!1:(n.walls.set(t,{type:"wall",mat:"wood",hp:100,max:100,owner:e.owner,hitT:-100,open:!1}),n.nav.stamp++,!0)}function Yo(n,e,t){let i=null,s=.6;for(let[r,o]of n.walls){if(o.owner!==e.owner||o.type==="door"||o.hp<=0||n.t-o.hitT<No)continue;let a=Rt(r,o);if(ae((a[0]+a[2])/2,(a[1]+a[3])/2,t.hx,t.hy)>Dt*Dt)continue;let l=o.hp/o.max;l<s&&(s=l,i=r)}return i}function id(n,e,t,i){let s=n.walls.get(t);if(!s||n.t-s.hitT<No)return!1;let r=s.mat==="metal"?{metal:8}:s.mat==="stone"?{stone:8}:{wood:12};return bn.pay(i,r)?(s.hp=Math.min(s.max,s.hp+s.max*.5),!0):!1}function Rn(n,e){n.bullets.push({x:e.x,y:e.y,px:e.x,py:e.y,vx:Math.cos(e.angle)*e.speed,vy:Math.sin(e.angle)*e.speed,life:e.life,dmg:e.dmg,from:e.from,col:e.col||null,turret:!!e.turret,enemy:e.from!==ze,bounces:0,ricochet:!1,dist:0})}function Cr(n,e,t,i,s){let r=en.rocket;n.rockets.push({x:e,y:t,vx:Math.cos(i)*r.speed,vy:Math.sin(i)*r.speed,life:r.range,w:r,smoke:0,from:s}),n.events.push({type:"rocketLaunch",x:e,y:t})}var Km=(n,e,t)=>e*(1-vc(t?n.player.facemask:n.player.bodyArmor,t?"head":"body")),Jm=(n,e,t)=>e*(1-vc(t?n.facemask:n.bodyArmor,t?"head":"body"));function ms(n,e,t,i,s){let r=n.player;if(!(r.dead||r.invuln>0||n.ghost||_t(n,r.x,r.y))){if(r.health-=e,r.regenDelay=4.5,r.hurt=.28,s&&(r.lastHitBy=s),t!==void 0){let o=Math.max(1,J(t,i,r.x,r.y));r.x+=(r.x-t)/o*7,r.y+=(r.y-i)/o*7}ot(n,r.x,r.y,"#9e2b1e",6,160),r.health<=0&&Sr(n)}}function Sr(n,e){let t=n.player;if(t.dead)return;t.dead=!0,t.deadT=e?4:2.2,n.deathMark={x:t.x,y:t.y},Vo(n,t.lastHitBy);for(let a of["wood","stone","metal"])tn(n,t.x,t.y,a,n.inv[a]),n.inv[a]=0;let i=0;for(let a in n.weapons)a!=="rocket"&&(i+=n.weapons[a].ammo+n.weapons[a].reserve,n.weapons[a].ammo=0,n.weapons[a].reserve=0);let s=Math.min(8,Math.ceil(i/30));for(let a=0;a<s;a++)xt(n,t.x,t.y,"ammo",Math.ceil(i/Math.max(1,s)));let r=n.weapons.rocket,o=Math.min(12,r.ammo+r.reserve);r.ammo=0,r.reserve=0;for(let a=0;a<o;a++)xt(n,t.x,t.y,"rocket",1);n.events.push({type:"playerDie",x:t.x,y:t.y})}function gs(n,e,t,i,s,r){e.dead||e.flying||e.eliminated||_t(n,e.x,e.y)||(e.hp-=t,ot(n,e.x,e.y,"#9e2b1e",4,150),e.regenT=4,e.lastHitBy=r||null,i!==void 0&&(e.threatX=i,e.threatY=s,e.retaliateT=2.2),e.hp<=0&&Dc(n,e))}function Dc(n,e){if(e.dead)return;e.dead=!0,e.respawnT=15,e.flying=!1,e.aboard=null;for(let s of["wood","stone","metal"])tn(n,e.x,e.y,s,e.inv[s]),e.inv[s]=0;let t=Math.min(12,e.rockets);e.rockets=0;for(let s=0;s<t;s++)xt(n,e.x,e.y,"rocket",1);let i=Math.min(6,e.grenades);e.grenades=0;for(let s=0;s<i;s++)xt(n,e.x,e.y,"rocket",1);xt(n,e.x,e.y,"ammo",n.rng.randi(24,60)),e.gun!=="pistol"&&(xt(n,e.x,e.y,"gun",1,e.gun),e.gun="pistol"),e.scrap>0&&(tn(n,e.x,e.y,"scrap",e.scrap),e.scrap=0),e.id===n.bounty&&e.lastHitBy===ze&&(n.inv.scrap+=_c,He(n,e.x,e.y,"+"+_c+" bounty!","#ffd76b"),n.bounty=null),Vo(n,e.lastHitBy),ot(n,e.x,e.y,"#9e2b1e",14,220),He(n,e.x,e.y,"down","#e2664a")}function sd(n,e,t,i){e.dead||(e.hp-=t,ot(n,e.x,e.y,"#9e2b1e",5,140),e.hp<=0&&(e.dead=!0,e.respawnT=82,ot(n,e.x,e.y,"#9e2b1e",20,220),tn(n,e.x,e.y,"scrap",n.rng.randi(4,9)),xt(n,e.x,e.y,"ammo",n.rng.randi(12,26)),i===ze?(n.inv.scrap+=8,He(n,e.x,e.y,"+8 guard","#ffe07a")):(He(n,e.x,e.y,"guard down","#e2664a"),Vo(n,i))))}function Zo(n,e,t,i,s,r){if(!e.dead){if(e.hp-=t,e.hit=.12,i!==void 0){let o=Math.max(1,J(i,s,e.x,e.y)),a=Math.min(16,t*.4);e.x+=(e.x-i)/o*a,e.y+=(e.y-s)/o*a}if(e.foe=r||e.foe,e.aggro=e.aggro||"hit",He(n,e.x,e.y-e.r,"-"+Math.round(t),"#e8b06a"),e.hp<=0){e.dead=!0,e.respawnT=n.rng.rand(11,18),ot(n,e.x,e.y,"#9e2b1e",12,200);let o=us[e.type];o&&o.loot&&xt(n,e.x,e.y,o.loot[0],n.rng.randi(o.loot[1],o.loot[2])),He(n,e.x,e.y,(o?e.type:"animal")+" down","#caa46a")}}}function rd(n,e,t,i){if(e.hp-=t,e.hp>0){ot(n,e.x,e.y,"#d2664a",3,120);return}ot(n,e.x,e.y,e.crate?"#caa15f":"#d2664a",14,230),e.tier==="mon"?(tn(n,e.x,e.y,"scrap",n.rng.randi(e.crate?22:12,e.crate?42:26)),xt(n,e.x,e.y,"ammo",n.rng.randi(45,85)),e.respawnT=82):e.tier==="road"?(tn(n,e.x,e.y,"scrap",n.rng.randi(8,16)),xt(n,e.x,e.y,"ammo",n.rng.randi(16,34)),e.respawnT=22):(tn(n,e.x,e.y,"scrap",n.rng.randi(3,7)),tn(n,e.x,e.y,"metal",n.rng.randi(2,5)),e.respawnT=22),e.hp=0}function Qm(n,e){let t=Math.floor(e.x/64),i=Math.floor(e.y/64),s=[Ae("V",t,i),Ae("V",t+1,i),Ae("H",t,i),Ae("H",t,i+1),Ae("D",t,i)];for(let o of s){let a=n.walls.get(o);if(!a||a.hp<=0||a.type==="door"&&a.open)continue;let l=Rt(o,a);if(Qn(e.px,e.py,e.x,e.y,l[0],l[1],l[2],l[3])||gt(e.x,e.y,l[0],l[1],l[2],l[3])<10)return jm(n,a)!==e.from&&Us(n,o,Math.max(1,Math.round(e.dmg*.1)),e.from),{kind:"wall",key:o,w:a}}let r=n.deploys.get(We(t,i));if(r&&r.owner!==e.from){let o=it(t,i);if(!Nt(n,e.px,e.py,o.x,o.y)){let a=r.type==="cupboard"?.05:.25;ps(n,We(t,i),Math.max(1,Math.round(e.dmg*a)),e.from)}return{kind:"deploy",key:We(t,i),d:r}}return null}var jm=(n,e)=>e.owner;function e0(n,e,t){if(t&&t.kind==="wall"){let i=t.key.split(",");if(i[0]==="V")return{x:1,y:0};if(i[0]==="H")return{x:0,y:1};let s=Rt(t.key,t.w),r=s[2]-s[0],o=s[3]-s[1],a=Math.hypot(r,o);return{x:-o/a,y:r/a}}if(t&&t.cx!==void 0){let i=Math.max(1,J(e.px,e.py,t.cx,t.cy));return{x:(e.px-t.cx)/i,y:(e.py-t.cy)/i}}return{x:0,y:1}}function t0(n,e,t,i){if(e.bounces>=2||!n.rng.chance(i))return!1;let s=e0(n,e,t);s.x*(e.px-e.x)+s.y*(e.py-e.y)<0&&(s.x=-s.x,s.y=-s.y);let r=e.vx*s.x+e.vy*s.y,o=e.vx-2*r*s.x,a=e.vy-2*r*s.y,l=n.rng.rand(-.45,.45),c=Math.cos(l),f=Math.sin(l),h=o*c-a*f,d=o*f+a*c,u=Math.hypot(h,d);return h*s.x+d*s.y>=.05*u&&(o=h,a=d),e.vx=o*.6,e.vy=a*.6,e.x=e.px+s.x*6,e.y=e.py+s.y*6,e.dmg=Math.max(1,Math.round(e.dmg*.6)),e.bounces++,e.ricochet=!0,e.col="ricochet",ot(n,e.x,e.y,"#86d8ff",4,180),!0}function od(n,e){let t=n.player;for(let i=n.bullets.length-1;i>=0;i--){let s=n.bullets[i];if(s.px=s.x,s.py=s.y,s.ricochet){let l=Math.pow(.3,e);if(s.vx*=l,s.vy*=l,Math.hypot(s.vx,s.vy)<150){n.bullets.splice(i,1);continue}}if(s.x+=s.vx*e,s.y+=s.vy*e,s.dist+=Math.hypot(s.vx,s.vy)*e,s.life-=e,s.life<=0||s.x<0||s.y<0||s.x>he.w||s.y>he.h||s.dist>3400){n.bullets.splice(i,1);continue}let r=!1,o=null;if(Ec(n,(s.px+s.x)/2,(s.py+s.y)/2,Math.abs(s.x-s.px)+Math.abs(s.y-s.py)+12,(l,c)=>{if(c.type==="door"&&c.open)return!1;let f=Rt(l,c);if(Qn(s.px,s.py,s.x,s.y,f[0],f[1],f[2],f[3]))return o={kind:"wall",key:l,w:c},!0}),!o&&Tr(n,s.x,s.y)){let l=Math.floor(s.x/64),c=Math.floor(s.y/64),f=n.deploys.get(We(l,c));if(!(f&&f.type==="turret"&&f.owner===s.from)){let h=it(l,c);o={kind:"solid",key:We(l,c),d:f,cx:h.x,cy:h.y}}}let a=null;if(!o){for(let l of n.world.boulders)if(gt(l.x,l.y,s.px,s.py,s.x,s.y)<l.r){a={cx:l.x,cy:l.y};break}}if(o||a){o&&Qm(n,s),t0(n,s,o||a,a?.8:.15)||(ot(n,s.px,s.py,"#bfb49a",3,110),n.bullets.splice(i,1));continue}for(let l=n.fences.length-1;l>=0;l--){let c=n.fences[l];if(Qn(s.px,s.py,s.x,s.y,c.x0,c.y0,c.x1,c.y1)||gt(s.x,s.y,c.x0,c.y0,c.x1,c.y1)<5){ad(n,c,s.dmg),r=!0;break}}if(r){n.bullets.splice(i,1);continue}for(let l of n.barrels)if(!(l.hp<=0)&&ae(s.x,s.y,l.x,l.y)<(l.r+2)*(l.r+2)){rd(n,l,s.dmg,s.from),r=!0;break}if(r){n.bullets.splice(i,1);continue}if(n.patrol&&s.from!=="patrol"&&gt(n.patrol.x,n.patrol.y,s.px,s.py,s.x,s.y)<34){n.patrol.hp-=s.dmg,ot(n,s.x,s.y,"#aab1b8",2,120),n.bullets.splice(i,1);continue}if(n.airdrop&&n.airdrop.fall>=1&&gt(n.airdrop.x,n.airdrop.y,s.px,s.py,s.x,s.y)<22){n.airdrop.hp-=s.dmg,n.bullets.splice(i,1);continue}for(let l of n.animals)if(!l.dead&&gt(l.x,l.y,s.px,s.py,s.x,s.y)<l.r+2){Zo(n,l,s.dmg,s.px,s.py,s.from),r=!0;break}if(r){n.bullets.splice(i,1);continue}if(s.from!=="guard"){for(let l of n.guards)if(!l.dead&&gt(l.x,l.y,s.px,s.py,s.x,s.y)<Bt.r+2){let c=Go(l.x,l.y,s);sd(n,l,s.dmg*(c?Uo:1),s.from),c&&s.from===ze&&He(n,l.x,l.y-14,"headshot","#ffe07a"),r=!0;break}}if(r){n.bullets.splice(i,1);continue}for(let l of n.units)if(!(l.dead||l.flying||l.eliminated||l.owner===s.from)&&gt(l.x,l.y,s.px,s.py,s.x,s.y)<14){let c=Go(l.x,l.y,s),f=s.dmg*(c?Uo:1);f=Jm(l,f,c);let h=s.px,d=s.py;gs(n,l,f,h,d,s.from),c&&s.from===ze&&He(n,l.x,l.y-14,"headshot","#ffe07a"),r=!0;break}if(r){n.bullets.splice(i,1);continue}for(let l of n.transports)if(!(l.destroyed||l.owner===s.from)&&gt(l.x,l.y,s.px,s.py,s.x,s.y)<zt.r+2){l.hp-=s.dmg,l.hp<=0&&(l.destroyed=!0),r=!0;break}if(r){n.bullets.splice(i,1);continue}for(let l of n.convoys){if(s.from==="convoy")break;if(!l.dead&&gt(l.x,l.y,s.px,s.py,s.x,s.y)<26){l.hp-=s.dmg,r=!0;break}for(let c of l.guards)if(!c.dead&&gt(c.x,c.y,s.px,s.py,s.x,s.y)<14){c.hp-=s.dmg,c.hp<=0&&(c.dead=!0,xt(n,c.x,c.y,"ammo",n.rng.randi(6,12))),r=!0;break}if(r)break}if(r){n.bullets.splice(i,1);continue}if(s.from!==ze&&!t.dead&&!t.inCopter&&!n.ghost&&gt(t.x,t.y,s.px,s.py,s.x,s.y)<18){let l=Go(t.x,t.y,s);ms(n,Km(n,s.dmg*(l?Uo:1),l),s.px,s.py,s.from),n.bullets.splice(i,1);continue}}}function ad(n,e,t){e.hp-=t,e.hp<=0?(ot(n,e.x,e.y,"#caa46a",14,200),n.fences.splice(n.fences.indexOf(e),1),n.needFenceRefresh=!0):ot(n,e.x,e.y,"#d8b888",3,120)}function Nc(n,e,t,i,s){let r=i.splash,o=i.splashDmg,a=i.structDmg||i.splashDmg;ot(n,e,t,"#ffb24a",22,320),ot(n,e,t,"#5a534a",12,200),n.flashes.push({x:e,y:t,r,life:.25,max:.25}),n.scorch.push({x:e,y:t,r:r*.66}),n.scorch.length>36&&n.scorch.shift(),n.events.push({type:"explosion",x:e,y:t,r}),n.shake=Math.max(n.shake,16);let l=i===en.rocket||i.structDmg===50;if(l&&s!==ze){let h=!1;for(let[d,u]of n.structures)if(u.owner===ze){let[p,x]=d.split(",").map(Number),m=it(p,x);if(ae(e,t,m.x,m.y)<(r+64)*(r+64)){h=!0;break}}h&&(n.raidAlarm={x:e,y:t,t:1.5})}if(l){let h=n0(n,e,t,r+128);h&&h!==s&&Jf(n,e,t,"raid_"+h)}for(let[h,d]of[...n.structures]){let[u,p]=h.split(",").map(Number),x=it(u,p),m=J(e,t,x.x,x.y);m>r+32||d.owner===s||Ar(n,h,a*(1-m/(r+32)))}for(let[h,d]of[...n.walls]){if(d.owner===s)continue;let u=Rt(h,d),p=gt(e,t,u[0],u[1],u[2],u[3]);p>r||Us(n,h,a*(1-p/r),s)}for(let[h,d]of[...n.deploys]){if(d.owner===s)continue;let[u,p]=h.split(",").map(Number),x=it(u,p),m=J(e,t,x.x,x.y);m>r+25.6||Nt(n,e,t,x.x,x.y)||ps(n,h,o*(1-m/(r+25.6)),s)}for(let h of n.animals){if(h.dead)continue;let d=J(e,t,h.x,h.y);d<r+h.r&&Zo(n,h,o*(1-d/(r+h.r)),e,t,s)}for(let h of n.guards){if(h.dead)continue;let d=J(e,t,h.x,h.y);d<r+14&&sd(n,h,o*(1-d/(r+14)),s)}for(let h of n.convoys){let d=J(e,t,h.x,h.y);!h.dead&&d<r+26&&(h.hp-=o*1.5*(1-d/(r+26)));for(let u of h.guards){if(u.dead)continue;let p=J(e,t,u.x,u.y);p<r+14&&(u.hp-=o*(1-p/(r+14)),u.hp<=0&&(u.dead=!0,xt(n,u.x,u.y,"ammo",n.rng.randi(6,12))))}}for(let h of n.barrels){if(h.hp<=0)continue;let d=J(e,t,h.x,h.y);d<r+h.r&&rd(n,h,o*(1-d/(r+h.r)),s)}for(let h=n.fences.length-1;h>=0;h--){let d=n.fences[h],u=J(e,t,d.x,d.y);u<r+23&&ad(n,d,o*(1-u/(r+23)))}let c=n.player;if(!c.dead&&!c.inCopter){let h=J(e,t,c.x,c.y);if(h<r+16){let d=1-h/(r+16);s===ze?n.ghost||(c.health-=Math.round(o*.45*d),c.regenDelay=4.5,c.hurt=.28,c.health<=0&&Sr(n)):ms(n,Math.round(o*.45*d),e,t,s)}}for(let h of n.units){if(h.dead||h.eliminated||h.owner===s)continue;let d=J(e,t,h.x,h.y);d<r+14&&gs(n,h,o*.8*(1-d/(r+14)),e,t,s)}let f=(h,d,u)=>{if(!h||h.destroyed||d===s)return;let p=J(e,t,h.x,h.y);p<r+30&&i0(n,h,o*(1-p/(r+30)),u)};f(n.copter,ze,!0);for(let h of n.units)f(h.copter,h.owner,!1,h);for(let h of n.transports){if(h.destroyed||h.owner===s)continue;let d=J(e,t,h.x,h.y);d<r+zt.r&&(h.hp-=o*(1-d/(r+zt.r)),h.hp<=0&&(h.destroyed=!0))}if(i.rocket&&n.rng.chance(.25)&&ld(n,e,t),n.patrol){let h=J(e,t,n.patrol.x,n.patrol.y);h<r+34&&(n.patrol.hp-=o*(1-h/(r+34)))}}function n0(n,e,t,i){for(let[s,r]of n.structures){let[o,a]=s.split(",").map(Number),l=it(o,a);if(ae(e,t,l.x,l.y)<i*i)return r.owner}for(let[s,r]of n.walls){let o=Rt(s,r);if(gt(e,t,o[0],o[1],o[2],o[3])<i)return r.owner}return null}function i0(n,e,t,i,s){e.hp-=t,!(e.hp>0||e.destroyed)&&(e.destroyed=!0,Uc(n,e.x,e.y),i&&n.player.inCopter&&(n.player.inCopter=!1,n.player.health=0,Sr(n)))}function Uc(n,e,t){ot(n,e,t,"#ffb24a",30,340),ot(n,e,t,"#5a534a",18,240),n.flashes.push({x:e,y:t,r:96,life:.25,max:.25}),n.scorch.push({x:e,y:t,r:52}),n.scorch.length>36&&n.scorch.shift(),n.wrecks.push({x:e,y:t,t:15}),n.wrecks.length>24&&n.wrecks.shift(),n.shake=Math.max(n.shake,15),n.events.push({type:"explosion",x:e,y:t,r:96})}function ld(n,e,t){n.fires.length>=80||n.fires.push({x:e,y:t,r:36,life:30,max:30,dmgT:0,spread:0,spreadT:n.rng.rand(3,7)})}function cd(n,e){for(let t=n.fires.length-1;t>=0;t--){let i=n.fires[t];if(i.life-=e,i.life<=0){n.fires.splice(t,1);continue}if(i.dmgT-=e,i.dmgT<=0){i.dmgT=.3;for(let[r,o]of[...n.structures]){let[a,l]=r.split(",").map(Number),c=it(a,l);ae(i.x,i.y,c.x,c.y)<i.r*i.r&&Ar(n,r,22*.3)}for(let[r,o]of[...n.walls]){let a=Rt(r,o);gt(i.x,i.y,a[0],a[1],a[2],a[3])<i.r&&Us(n,r,18*.3,"fire")}let s=n.player;!s.dead&&ae(i.x,i.y,s.x,s.y)<(i.r+16)*(i.r+16)&&ms(n,15*.3,void 0,void 0,"fire");for(let r of n.units)r.dead||r.eliminated||ae(i.x,i.y,r.x,r.y)<(i.r+12)*(i.r+12)&&gs(n,r,15*.3)}if(i.spreadT-=e,i.spreadT<=0&&i.spread<3&&(i.spreadT=n.rng.rand(4,8),n.rng.chance(.25))){let s=null,r=(i.r+64)*(i.r+64);for(let[o,a]of n.structures){let[l,c]=o.split(",").map(Number),f=it(l,c),h=ae(i.x,i.y,f.x,f.y);h<r&&!Nt(n,i.x,i.y,f.x,f.y)&&(r=h,s=f)}s&&(ld(n,s.x,s.y),i.spread++)}n.rng.chance(.3)&&n.particles.push({x:i.x+n.rng.rand(-10,10),y:i.y+n.rng.rand(-10,10),vx:n.wind*8,vy:-n.rng.rand(20,50),life:n.rng.rand(.6,1.4),max:1.4,r:n.rng.rand(2,5),col:"rgba(60,56,50,0.5)"})}}function hd(n,e){for(let t=n.satchels.length-1;t>=0;t--){let i=n.satchels[t];i.t-=e,i.t<=0&&(n.satchels.splice(t,1),Nc(n,i.x,i.y,{splash:88,splashDmg:120,structDmg:50},i.from))}}function fd(n,e){for(let t=n.grenades.length-1;t>=0;t--){let i=n.grenades[t],s=i.x,r=i.y,o=Math.pow(.9,e*60);i.vx*=o,i.vy*=o,i.x=et(i.x+i.vx*e,8,he.w-8),i.y=et(i.y+i.vy*e,8,he.h-8),i.bob+=e,i.t-=e,Nt(n,s,r,i.x,i.y)&&(i.x=s,i.y=r,i.t=0),i.t<=0&&(n.grenades.splice(t,1),Nc(n,i.x,i.y,Is,i.from))}}function dd(n,e){for(let t=n.rockets.length-1;t>=0;t--){let i=n.rockets[t],s=i.x,r=i.y;i.x+=i.vx*e,i.y+=i.vy*e,i.life-=e,i.smoke-=e,i.smoke<=0&&(i.smoke=.016,n.particles.push({x:i.x,y:i.y,vx:n.rng.rand(-12,12),vy:n.rng.rand(-12,12),life:.5,max:.5,r:n.rng.rand(2,4),col:"rgba(120,114,104,0.5)"}));let o=i.life<=0||i.x<4||i.y<4||i.x>he.w-4||i.y>he.h-4;if(!o&&(Tr(n,i.x,i.y)||Ac(n,i.x,i.y,2))&&(o=!0),!o&&Nt(n,s,r,i.x,i.y)&&(o=!0,i.x=s,i.y=r),!o){for(let a of n.animals)if(!a.dead&&ae(i.x,i.y,a.x,a.y)<(a.r+3)*(a.r+3)){o=!0;break}}if(!o){for(let a of n.barrels)if(a.hp>0&&ae(i.x,i.y,a.x,a.y)<(a.r+3)*(a.r+3)){o=!0;break}}if(!o){let a=(l,c)=>l&&!l.destroyed&&c!==i.from&&ae(i.x,i.y,l.x,l.y)<1089;if(a(n.copter,ze)&&(o=!0),!o){for(let l of n.units)if(a(l.copter,l.owner)){o=!0;break}}}o&&(n.rockets.splice(t,1),Nc(n,i.x,i.y,i.w,i.from))}}function ud(n,e){for(let[t,i]of n.deploys){if(i.type!=="turret")continue;let[s,r]=t.split(",").map(Number),o=it(s,r),a=Fo[i.tier||1];if(n.tick%30===0&&(i.tcOk=s0(n,i.owner)),i.tcOk===!1)continue;i.cd=Math.max(0,(i.cd||0)-e),i.reload>0&&(i.reload-=e,i.reload<=0&&(i.mag=a.mag)),i.targT=(i.targT||0)-e;let l=i.tgt||null;if(l){let c=l.ref;!c||c.dead||c.flying||c.eliminated||c===n.player&&(n.ghost||c.inCopter)||ae(o.x,o.y,c.x,c.y)>a.range*a.range*1.2?(l=null,i.tgt=null):(l.x=c.x,l.y=c.y,l.vx=c.vx||0,l.vy=c.vy||0)}if(i.targT<=0){i.targT=.12;let c=a.range*a.range;l=null;let f=(d,u,p,x,m)=>{let g=ae(o.x,o.y,d,u);g<c&&!o0(n,i.owner,o.x,o.y,d,u)&&(c=g,l={x:d,y:u,vx:p||0,vy:x||0,ref:m})};for(let d of n.animals)!d.dead&&ae(o.x,o.y,d.x,d.y)<c&&f(d.x,d.y,d.vx,d.vy,d);for(let d of n.units)!d.dead&&!d.flying&&!d.eliminated&&d.owner!==i.owner&&f(d.x,d.y,d.vx,d.vy,d);let h=n.player;i.owner!==ze&&!h.dead&&!h.inCopter&&!n.ghost&&f(h.x,h.y,h.vx,h.vy,h),i.tgt=l}if(l){let c=J(o.x,o.y,l.x,l.y),f=Math.min(.45,c/a.speed)*a.lead,h=Math.atan2(l.y+l.vy*f-o.y,l.x+l.vx*f-o.x),d=(i.tier===3?16:10)*e;if(i.angle=Lc(i.angle,h,d),Math.abs(pd(i.angle,h))<.22&&i.cd<=0&&i.reload<=0)if(i.mag<=0)i.reload=a.reload;else{i.mag--,i.cd=a.rof;let u=i.angle+n.rng.rand(-a.spread,a.spread);Rn(n,{x:o.x+Math.cos(i.angle)*Mc,y:o.y+Math.sin(i.angle)*Mc,angle:u,speed:a.speed,dmg:a.dmg,from:i.owner,life:a.range/a.speed+.1,turret:!0}),n.events.push({type:"turretFire",x:o.x,y:o.y,a:i.angle})}}else{if(n.tick%18===0||i.trk===void 0){let f=null,h=(a.range*2.2)**2;for(let d of n.units)if(!d.dead&&!d.eliminated&&d.owner!==i.owner){let u=ae(o.x,o.y,d.x,d.y);u<h&&(h=u,f=d)}i.trk=f}let c=i.trk&&!i.trk.dead?i.trk:null;if(c)i.angle=Lc(i.angle,Math.atan2(c.y-o.y,c.x-o.x),5*e);else{if(i.scanT-=e,i.scanT<=0){i.scanT=n.rng.rand(2.5,6.5);let f=r0(n,i.owner,o.x,o.y),h=f?Math.atan2(o.y-f.y,o.x-f.x):n.rng.rand(0,Fe);i.scanAim=h+n.rng.rand(-1.1,1.1)}i.scanAim!==void 0&&(i.angle=Lc(i.angle,i.scanAim,1.6*e))}}}}function s0(n,e){for(let t of n.deploys.values())if(t.type==="cupboard"&&t.owner===e)return!0;return!1}function r0(n,e,t,i){let s=null,r=1e18;for(let[o,a]of n.deploys){if(a.type!=="cupboard"||a.owner!==e)continue;let[l,c]=o.split(",").map(Number),f=it(l,c),h=ae(t,i,f.x,f.y);h<r&&(r=h,s=f)}return s}function o0(n,e,t,i,s,r){let o=Math.min(t,s),a=Math.max(t,s),l=!1;return a0(n,t,i,s,r,(c,f)=>{if(f.owner===e||f.type==="door"&&f.open)return!1;let h=Rt(c,f);if(Qn(t,i,s,r,h[0],h[1],h[2],h[3]))return l=!0,!0}),l}function a0(n,e,t,i,s,r){let o=Math.hypot(i-e,s-t),a=Math.max(1,Math.ceil(o/(64*.5))),l=new Set;for(let c=0;c<=a;c++){let f=c/a,h=Math.floor((e+(i-e)*f)/64),d=Math.floor((t+(s-t)*f)/64),u=h*10007+d;if(!l.has(u)){l.add(u);for(let p of[Ae("V",h,d),Ae("V",h+1,d),Ae("H",h,d),Ae("H",h,d+1),Ae("D",h,d)]){let x=n.walls.get(p);if(x&&x.hp>0&&r(p,x)===!0)return}}}}var Lc=(n,e,t)=>{let i=pd(n,e);return Math.abs(i)<=t?e:n+Math.sign(i)*t},pd=(n,e)=>{let t=(e-n)%Fe;return t>Math.PI&&(t-=Fe),t<-Math.PI&&(t+=Fe),t};function md(n,e){let t=n.player;for(let i=n.loot.length-1;i>=0;i--){let s=n.loot[i];s.life+=e,s.bob+=e;let r=Math.pow(.88,e*60);if(s.vx*=r,s.vy*=r,s.x+=s.vx*e,s.y+=s.vy*e,!t.dead&&!t.inCopter&&!n.ghost&&s.life>.35){let o=J(t.x,t.y,s.x,s.y);if(o<150&&(s.x+=(t.x-s.x)/o*210*e,s.y+=(t.y-s.y)/o*210*e,o<20)){l0(n,s),n.loot.splice(i,1);continue}}if(s.life>.3){let o=null,a=32400;for(let l of n.units){if(l.dead||l.eliminated||l.flying)continue;let c=ae(l.x,l.y,s.x,s.y);c<a&&(a=c,o=l)}if(o){let l=Math.sqrt(a)||1;if(s.x+=(o.x-s.x)/l*240*e,s.y+=(o.y-s.y)/l*240*e,l<22){c0(n,o,s),n.loot.splice(i,1);continue}}}s.life>120&&n.loot.splice(i,1)}}function l0(n,e){let t=n.weapons;e.kind==="ammo"?(t.rifle.reserve+=e.amt,t.pistol.reserve+=Math.ceil(e.amt*.4),t.shotgun.reserve+=Math.ceil(e.amt*.3)):e.kind==="rocket"?t.rocket.reserve+=e.amt:e.kind==="satchel"?n.inv.scrap+=e.amt*8:e.kind==="sniper"?(n.owned.sniper=!0,t.sniper.reserve+=12,He(n,n.player.x,n.player.y-20,"SNIPER unlocked!","#bfe3ff")):e.kind==="gun"?e.gun&&n.owned[e.gun]!==void 0&&(n.owned[e.gun]=!0,t[e.gun].reserve+=e.gun==="hmg"?60:30):n.inv[e.kind]=(n.inv[e.kind]||0)+e.amt}function c0(n,e,t){if(t.kind==="scrap")e.scrap+=t.amt;else if(t.kind==="rocket")e.rockets+=t.amt;else if(t.kind==="satchel")e.satchels+=t.amt;else if(t.kind==="ammo")e.scrap+=Math.ceil(t.amt/8);else if(t.kind==="sniper")e.scrap+=30;else if(t.kind==="gun"){let i={pistol:1,shotgun:2,rifle:3,hmg:4};(i[t.gun]||0)>(i[e.gun]||0)?e.gun=t.gun:e.scrap+=10}else e.inv[t.kind]=(e.inv[t.kind]||0)+t.amt}function gd(n,e){for(let t=n.wrecks.length-1;t>=0;t--){let i=n.wrecks[t];if(i.t-=e,i.t<=0){n.wrecks.splice(t,1);continue}n.rng.chance(.25)&&n.particles.push({x:i.x+n.rng.rand(-12,12),y:i.y+n.rng.rand(-8,8),vx:n.wind*10,vy:-n.rng.rand(24,60),life:n.rng.rand(.7,1.6),max:1.6,r:n.rng.rand(2.5,6),col:"rgba(50,46,44,0.55)"})}}function xd(n,e){let t=n.copter,i=n.player,s=n.cmd;if(!t||t.destroyed){i.inCopter=!1;return}s.left&&(t.angle-=ft.turn*e),s.right&&(t.angle+=ft.turn*e);let r=0;s.up?r=1:s.down&&(r=-.55);let o=s.run?ft.boost:ft.speed;t.vx+=Math.cos(t.angle)*ft.accel*r*e,t.vy+=Math.sin(t.angle)*ft.accel*r*e;let a=Math.pow(r!==0?ft.drag:ft.dragIdle,e);t.vx*=a,t.vy*=a;let l=Math.hypot(t.vx,t.vy);l>o&&(t.vx*=o/l,t.vy*=o/l),t.x+=t.vx*e,t.y+=t.vy*e,t.x<ft.r&&(t.x=ft.r,t.vx*=-.3),t.y<ft.r&&(t.y=ft.r,t.vy*=-.3),t.x>he.w-ft.r&&(t.x=he.w-ft.r,t.vx*=-.3),t.y>he.h-ft.r&&(t.y=he.h-ft.r,t.vy*=-.3),t.spd=Math.hypot(t.vx,t.vy),t.rotor+=e*(20+t.spd*.05),i.x=t.x,i.y=t.y,i.vx=t.vx,i.vy=t.vy}function yd(n,e,t){let i=n.world.shop,s={owner:e.owner,x:i.x,y:i.y+(i.r||120)+90,angle:0,vx:0,vy:0,rotor:0,hp:zt.hp,max:zt.hp,destroyed:!1,state:"idle",stateT:0,boardT:0,homeX:t.hx,homeY:t.hy,riders:[],destX:0,destY:0};return n.transports.push(s),He(n,s.x,s.y,"+transport heli","#bfe3ff"),s}function _d(n,e,t){return t.riders.length>=zt.seats||t.state==="fly"||t.state==="unload"?!1:(e.aboard=t,e.flying=!0,e.wasRaid=!1,e.state="raid",t.riders.push(e),t.state==="idle"&&(t.state="board"),!0)}function Fc(n,e,t,i,s){let r=J(e.x,e.y,t,i),o=Math.atan2(i-e.y,t-e.x);e.angle=xi(e.angle,o,s*3);let a=r>220?1:Math.max(.08,r/220);e.vx+=Math.cos(e.angle)*zt.accel*a*s,e.vy+=Math.sin(e.angle)*zt.accel*a*s;let l=Math.pow(zt.drag,s);e.vx*=l,e.vy*=l;let c=Math.hypot(e.vx,e.vy);return c>zt.speed&&(e.vx*=zt.speed/c,e.vy*=zt.speed/c),e.x=et(e.x+e.vx*s,zt.r,he.w-zt.r),e.y=et(e.y+e.vy*s,zt.r,he.h-zt.r),r}function vd(n,e){for(let t=n.transports.length-1;t>=0;t--){let i=n.transports[t];if(i.hp<=0||i.destroyed){Uc(n,i.x,i.y);for(let a of i.riders)a.aboard=null,a.flying=!1,a.x=i.x+n.rng.rand(-30,30),a.y=i.y+n.rng.rand(-30,30),Dc(n,a);n.transports.splice(t,1);continue}i.riders=i.riders.filter(a=>!a.dead&&a.aboard===i),i.stateT+=e;let s=i.riders.length>0;(s||i.state==="fly"||i.state==="unload"||i.state==="return")&&(i.rotor+=e*40);let r=i.riders.length?i.riders[0].raid:null,o=r&&r.bases?r.bases.find(a=>!a.dead):null;if(i.state==="idle"||i.state==="board"){if(s&&o){if(i.boardT+=e,i.riders.length>=2||i.boardT>5){let a=J(i.x,i.y,o.hx,o.hy),l=Math.max(0,(a-620)/Math.max(1,a));i.destX=i.x+(o.hx-i.x)*l,i.destY=i.y+(o.hy-i.y)*l,i.state="fly",i.stateT=0,i.boardT=0}}else s?Fc(n,i,i.homeX-320,i.homeY,e):(i.vx=i.vy=0,i.boardT=0);for(let a of i.riders)a.x=i.x,a.y=i.y}else if(i.state==="fly"){let a=Fc(n,i,i.destX,i.destY,e);for(let l of i.riders)l.x=i.x,l.y=i.y;(a<200||!o||i.stateT>16)&&(i.state="unload",i.stateT=0)}else if(i.state==="unload"){for(let a of i.riders){let l=i.x+n.rng.rand(-60,60),c=i.y+n.rng.rand(-60,60);for(let f=0;f<14&&yt(n,l,c,12);f++){let h=n.rng.rand(0,Fe),d=n.rng.rand(40,150);l=i.x+Math.cos(h)*d,c=i.y+Math.sin(h)*d}a.x=et(l,12,he.w-12),a.y=et(c,12,he.h-12),a.aboard=null,a.flying=!1}i.riders=[],i.state="return",i.stateT=0}else i.state==="return"&&(Fc(n,i,i.homeX-320,i.homeY,e)<160||i.stateT>16)&&(i.state="idle",i.vx=i.vy=0)}}function Md(n,e){if(n.world.rails.length&&(n.trainT-=e,n.trainT<=0&&n.trains.length<2)){n.trainT=n.rng.rand(30,90);let t=n.rng.pick(n.world.rails),s=n.rng.chance(.5)?t.pts:[...t.pts].reverse();n.trains.push({pts:s,seg:0,x:s[0].x,y:s[0].y,px:s[0].x,py:s[0].y,ang:0,speed:n.rng.rand(460,640),smokeT:0})}for(let t=n.trains.length-1;t>=0;t--){let i=n.trains[t];i.px=i.x,i.py=i.y;let s=i.speed*e;for(;s>0&&i.seg<i.pts.length-1;){let c=i.pts[i.seg],f=i.pts[i.seg+1],h=J(c.x,c.y,f.x,f.y),d=J(c.x,c.y,i.x,i.y),u=h-d;if(s<u){let p=(d+s)/h;i.x=c.x+(f.x-c.x)*p,i.y=c.y+(f.y-c.y)*p,s=0}else i.seg++,i.x=f.x,i.y=f.y,s-=u}i.ang=Math.atan2(i.y-i.py,i.x-i.px)||i.ang;let r=36,o=n.player;!o.dead&&!o.inCopter&&gt(o.x,o.y,i.px,i.py,i.x,i.y)<r&&ms(n,999,i.px,i.py,"train");for(let c of n.units)!c.dead&&!c.flying&&!c.eliminated&&gt(c.x,c.y,i.px,i.py,i.x,i.y)<r&&gs(n,c,999,i.px,i.py,"train");for(let c of n.animals)!c.dead&&gt(c.x,c.y,i.px,i.py,i.x,i.y)<r&&(c.hp=0,c.dead=!0,c.respawnT=n.rng.rand(11,18));for(let c of n.barrels)c.hp>0&&gt(c.x,c.y,i.px,i.py,i.x,i.y)<r&&(c.hp=0);let a=J(i.px,i.py,i.x,i.y),l=Math.max(1,Math.ceil(a/64));for(let c=0;c<=l;c++){let f=c/l,h=Math.floor((i.px+(i.x-i.px)*f)/64),d=Math.floor((i.py+(i.y-i.py)*f)/64);Ar(n,h+","+d,9999),ps(n,h+","+d,9999,"train");for(let u of["V,"+h+","+d,"V,"+(h+1)+","+d,"H,"+h+","+d,"H,"+h+","+(d+1)])Us(n,u,9999,"train")}if(i.smokeT-=e,i.smokeT<=0){i.smokeT=.28;let c=i.x+Math.cos(i.ang)*16,f=i.y+Math.sin(i.ang)*16;n.particles.push({x:c,y:f,vx:n.rng.rand(-7,7)+n.wind*5,vy:-n.rng.rand(6,16),life:n.rng.rand(11,15),max:15,r:n.rng.rand(5,10),col:"rgba(74,74,80,0.5)"}),n.particles.push({x:c,y:f,vx:n.rng.rand(-4,4),vy:-n.rng.rand(4,10),life:n.rng.rand(8,12),max:12,r:n.rng.rand(3,6),col:"rgba(40,40,46,0.45)"})}i.seg>=i.pts.length-1&&n.trains.splice(t,1)}for(let t of n.world.crossings)t.active=n.trains.some(i=>ae(i.x,i.y,t.x,t.y)<820*820),t.gate+=((t.active?1:0)-t.gate)*Math.min(1,e*3)}function bd(n,e){n.convoys.length||(n.convoyT-=e,n.convoyT<=0&&h0(n));for(let t=n.convoys.length-1;t>=0;t--){let i=n.convoys[t];if(i.hp<=0&&!i.dead){i.dead=!0,ot(n,i.x,i.y,"#ffb24a",30,340),ot(n,i.x,i.y,"#ffe2a0",16,220),n.flashes.push({x:i.x,y:i.y,r:96,life:.25,max:.25}),n.shake=Math.max(n.shake,12),n.scorch.push({x:i.x,y:i.y,r:60}),n.scorch.length>36&&n.scorch.shift(),tn(n,i.x,i.y,"metal",n.rng.randi(50,90)),tn(n,i.x,i.y,"scrap",n.rng.randi(60,110)),xt(n,i.x,i.y,"ammo",n.rng.randi(50,100));for(let c=0,f=n.rng.randi(3,5);c<f;c++)xt(n,i.x,i.y,"rocket",1);for(let c=0,f=n.rng.randi(2,4);c<f;c++)xt(n,i.x,i.y,"satchel",1);for(let c of i.guards)c.dead||xt(n,c.x,c.y,"ammo",n.rng.randi(8,16));He(n,i.x,i.y,"convoy destroyed!","#ffd0a0"),n.events.push({type:"explosion",x:i.x,y:i.y,r:96}),n.convoys.splice(t,1);continue}i.px=i.x,i.py=i.y;let s=rn.speed*e;for(;s>0&&i.seg<i.pts.length-1;){let c=i.pts[i.seg],f=i.pts[i.seg+1],h=J(c.x,c.y,f.x,f.y),d=J(c.x,c.y,i.x,i.y),u=h-d;if(s<u){let p=(d+s)/h;i.x=c.x+(f.x-c.x)*p,i.y=c.y+(f.y-c.y)*p,s=0}else i.seg++,i.x=f.x,i.y=f.y,s-=u}if(i.ang=Math.atan2(i.y-i.py,i.x-i.px)||i.ang,i.seg>=i.pts.length-1){n.convoys.splice(t,1);continue}i.gunCd=Math.max(0,i.gunCd-e);let r=null,o=rn.trange,a=n.player;if(!a.dead&&!a.inCopter&&!n.ghost){let c=J(i.x,i.y,a.x,a.y);c<o&&!Nt(n,i.x,i.y,a.x,a.y)&&!jn(n,i.x,i.y,a.x,a.y)&&(r=a,o=c)}for(let c of n.units){if(c.dead||c.flying||c.eliminated)continue;let f=J(i.x,i.y,c.x,c.y);f<o&&!Nt(n,i.x,i.y,c.x,c.y)&&!jn(n,i.x,i.y,c.x,c.y)&&(r=c,o=f)}r?(i.taim=Math.atan2(r.y-i.y,r.x-i.x),i.gunCd<=0&&(i.gunCd=rn.trof,Rn(n,{x:i.x+Math.cos(i.taim)*30,y:i.y+Math.sin(i.taim)*30,angle:i.taim+n.rng.rand(-.04,.04),speed:rn.bspeed,dmg:rn.tdmg,from:"convoy",life:.6}),ot(n,i.x+Math.cos(i.taim)*30,i.y+Math.sin(i.taim)*30,"#ffd76b",2,90))):i.taim=i.ang;let l=[[-46,28],[-46,-28],[50,30],[50,-30]];for(let c=0;c<i.guards.length;c++){let f=i.guards[c];if(f.dead)continue;f.gunCd=Math.max(0,f.gunCd-e);let h=null,d=rn.grange;if(!a.dead&&!a.inCopter&&!n.ghost){let u=J(f.x,f.y,a.x,a.y);u<d&&!Nt(n,f.x,f.y,a.x,a.y)&&!jn(n,f.x,f.y,a.x,a.y)&&(h=a,d=u)}for(let u of n.units){if(u.dead||u.flying||u.eliminated)continue;let p=J(f.x,f.y,u.x,u.y);p<d&&!Nt(n,f.x,f.y,u.x,u.y)&&!jn(n,f.x,f.y,u.x,u.y)&&(h=u,d=p)}if(J(f.x,f.y,i.x,i.y)>rn.leash&&(h=null),h){let u=Math.atan2(h.y-f.y,h.x-f.x);f.angle=xi(f.angle,u,e*9),f.gunCd<=0&&Math.abs(u0(f.angle,u))<.3&&(f.gunCd=rn.grof,Rn(n,{x:f.x+Math.cos(f.angle)*14,y:f.y+Math.sin(f.angle)*14,angle:f.angle+n.rng.rand(-.06,.06),speed:rn.bspeed,dmg:rn.gdmg,from:"convoy",life:.55}));let p=0,x=0;d>260?(p=Math.cos(u),x=Math.sin(u)):d<150&&(p=-Math.cos(u),x=-Math.sin(u));let m=f.x+p*rn.gspeed*e,g=f.y+x*rn.gspeed*e;yt(n,m,g,12)||(f.x=m,f.y=g)}else{let u=i.x+Math.cos(i.ang)*l[c][0]-Math.sin(i.ang)*l[c][1],p=i.y+Math.sin(i.ang)*l[c][0]+Math.cos(i.ang)*l[c][1],x=J(f.x,f.y,u,p);if(x>4){let m=rn.speed+50;f.x+=(u-f.x)/x*Math.min(x,m*e),f.y+=(p-f.y)/x*Math.min(x,m*e)}f.angle=xi(f.angle,i.ang,e*5)}}}}function h0(n){n.convoyT=n.rng.rand(180,300);let e=[];for(let r of n.world.roads){let o=-1,a=null;for(let l=0;l<=r.pts.length;l++){let c=l<r.pts.length&&n.world.landFactor(r.pts[l].x,r.pts[l].y)>.02;c&&o===-1&&(o=l),!c&&o!==-1&&((!a||l-o>a.len)&&(a={start:o,len:l-o}),o=-1)}a&&a.len>=10&&e.push({rd:r,...a})}if(!e.length)return;let t=e[Math.floor(n.rng.next()*e.length)],i=t.rd.pts.slice(t.start,t.start+t.len);n.rng.chance(.5)&&(i=[...i].reverse());let s={pts:i,seg:0,x:i[0].x,y:i[0].y,px:i[0].x,py:i[0].y,ang:0,taim:0,hp:rn.vhp,max:rn.vhp,gunCd:0,dead:!1,guards:[]};for(let r=0;r<4;r++)s.guards.push({x:i[0].x,y:i[0].y,hp:rn.ghp,max:rn.ghp,angle:0,gunCd:0,dead:!1});n.convoys.push(s),n.events.push({type:"convoy",x:s.x,y:s.y})}function wd(n,e){if(!n.patrol){n.patrolT-=e,n.patrolT<=0&&f0(n);return}let t=n.patrol;t.rotor+=e*28;let i=n.teams.find(c=>c.owner===t.huntOwner&&!c.eliminated&&c.bases.some(f=>!f.dead));if(t.hp<=0){d0(n);return}let s,r,o=!1;if(!i||t.orbitT<=0){if(o=!0,s=t.exitX,r=t.exitY,t.x<-320||t.x>he.w+320||t.y<-320||t.y>he.h+320){n.patrol=null,n.patrolT=n.rng.rand(240,420);return}}else{let c=i.bases.find(h=>!h.dead);J(t.x,t.y,c.hx,c.hy)>460&&!t.orbiting?(s=c.hx,r=c.hy):(t.orbiting=!0,t.orbitA+=.55*e,t.orbitT-=e,s=c.hx+Math.cos(t.orbitA)*Gn.orbitR,r=c.hy+Math.sin(t.orbitA)*Gn.orbitR)}let a=Math.atan2(r-t.y,s-t.x);t.angle=xi(t.angle,a,e*3);let l=J(t.x,t.y,s,r);if(t.spd=Math.min(Gn.speed,Gn.speed*l/300+40),t.x+=Math.cos(t.angle)*t.spd*e,t.y+=Math.sin(t.angle)*t.spd*e,t.flash=Math.max(0,t.flash-e),i&&!o){if(t.strafeT-=e,t.strafeT<=0){t.strafeT=1.2;let c=null,f=Gn.strafeR;for(let h of n.units){if(h.owner!==t.huntOwner||h.dead||h.eliminated||h.flying)continue;let d=J(t.x,t.y,h.x,h.y);d<f&&(f=d,c=h)}if(c){for(let h=0;h<5;h++){let d=.18+h*.02,u=c.x+c.vx*d+n.rng.rand(-26,26),p=c.y+c.vy*d+n.rng.rand(-26,26);Rn(n,{x:t.x,y:t.y,angle:Math.atan2(p-t.y,u-t.x),speed:900,dmg:9,from:"patrol",life:1,col:"hmg"})}t.flash=.12}}for(let c of n.units)if(!(c.owner!==t.huntOwner||c.dead||c.eliminated||c.flying)&&!(ae(t.x,t.y,c.x,c.y)>Gn.flakR*Gn.flakR)&&(c.flakT=(c.flakT||0)-e,c.flakT<=0)){c.flakT=1;let f=J(t.x,t.y,c.x,c.y)/1100,h=t.x+Math.cos(t.angle)*t.spd*f,d=t.y+Math.sin(t.angle)*t.spd*f,u=Math.atan2(d-c.y,h-c.x)+n.rng.rand(-.07,.07);c.angle=u;let p=c.x+Math.cos(u)*1100*.7,x=c.y+Math.sin(u)*1100*.7;n.events.push({type:"flak",x0:c.x,y0:c.y,x1:p,y1:x}),gt(t.x,t.y,c.x,c.y,p,x)<40&&(t.hp-=6,ot(n,t.x,t.y,"#aab1b8",3,120))}}}function f0(n){let e=null,t=-1;for(let o of n.teams){if(o.eliminated)continue;let a=o.bases.find(u=>!u.dead);if(!a)continue;let l=n.units.filter(u=>u.owner===o.owner&&!u.dead&&!u.eliminated).length,c=0;for(let u of n.structures.values())u.owner===o.owner&&c++;let f=n.deploys.get(a.tcKey),h=f?f.store.wood+f.store.stone+f.store.metal:0,d=l*10+c*2+h*.01;d>t&&(t=d,e={t:o,rec:a})}if(!e){n.patrolT=n.rng.rand(120,240);return}let{t:i,rec:s}=e,r=s.hx>he.w/2;n.patrol={huntOwner:i.owner,huntId:i.id,x:r?-200:he.w+200,y:et(s.hy+n.rng.rand(-600,600),200,he.h-200),exitX:r?he.w+360:-360,exitY:s.hy,angle:0,rotor:0,spd:0,hp:Gn.hp,max:Gn.hp,orbitA:n.rng.rand(0,Fe),orbitT:Gn.orbitT,orbiting:!1,strafeT:1,flash:0},He(n,s.hx,s.hy-80,"Patrol helicopter inbound!","#ffb84a"),n.elims.push({text:"PATROL HELI hunts Base "+(i.id+1),t:10})}function d0(n){let e=n.patrol;ot(n,e.x,e.y,"#ffb24a",40,360),ot(n,e.x,e.y,"#ff9b3d",24,280),n.scorch.push({x:e.x,y:e.y,r:64}),n.scorch.length>36&&n.scorch.shift(),n.wrecks.push({x:e.x,y:e.y,t:15});for(let t=0,i=n.rng.randi(4,6);t<i;t++)xt(n,e.x+n.rng.rand(-30,30),e.y+n.rng.rand(-30,30),"rocket",1);for(let t=0,i=n.rng.randi(2,3);t<i;t++)xt(n,e.x+n.rng.rand(-30,30),e.y+n.rng.rand(-30,30),"satchel",1);xt(n,e.x,e.y,"ammo",n.rng.randi(100,180)),tn(n,e.x,e.y,"scrap",n.rng.randi(80,150)),tn(n,e.x,e.y,"metal",n.rng.randi(50,90)),n.elims.push({text:"PATROL HELI DOWN",t:12}),n.events.push({type:"explosion",x:e.x,y:e.y,r:110}),n.shake=Math.max(n.shake,14),n.patrol=null,n.patrolT=n.rng.rand(240,420)}var u0=(n,e)=>{let t=(e-n)%Fe;return t>Math.PI&&(t-=Fe),t<-Math.PI&&(t+=Fe),t};function Td(n,e){let t=n.weather;t.timer-=e,t.timer<=0&&(t.mode==="clear"?(t.mode="rain",t.timer=n.rng.rand(8,16),t.boltT=n.rng.rand(3,8)):(t.mode="clear",t.timer=n.rng.rand(90,170)));let i=t.mode==="rain"?1:0;t.rain+=(i-t.rain)*Math.min(1,e*.5),t.rain>.4&&(t.boltT-=e,t.boltT<=0&&(t.boltT=n.rng.rand(4,13),t.flash=1,n.events.push({type:"bolt"}))),t.flash=Math.max(0,t.flash-e*2.4),t.fogTimer-=e,t.fogTimer<=0&&(t.fogOn=!t.fogOn,t.fogTimer=t.fogOn?n.rng.rand(28,60):n.rng.rand(45,95)),t.fog+=((t.fogOn?1:0)-t.fog)*Math.min(1,e*.22),n.wind=(Math.sin(n.t*.5)*.5+Math.sin(n.t*1.9+1.1)*.5)*(1+t.rain*1.7)}function Ed(n,e){if(!n.plane&&!n.airdrop&&(n.airdropT-=e,n.airdropT<=0&&(Ad(n),n.airdropT=n.rng.rand(120,300))),n.plane){let t=n.plane;t.x+=t.vx*e,t.prop+=e*30,!t.released&&(t.vx>0&&t.x>=t.dropX||t.vx<0&&t.x<=t.dropX)&&(t.released=!0,n.airdrop={x:t.dropX,y:t.dropY-780,gy:t.dropY,hp:90,max:90,fall:0,sway:n.rng.rand(0,Fe),loot:p0(n)},He(n,t.dropX,t.dropY,"Airdrop incoming!","#ffe07a"),n.events.push({type:"airdropCalled",x:t.dropX,y:t.dropY})),(t.x<-300||t.x>he.w+300)&&(n.plane=null)}if(n.airdrop){let t=n.airdrop;if(t.fall<1){t.fall=Math.min(1,t.fall+e*.16);let i=t.fall*t.fall*(3-2*t.fall);t.y=t.gy-780+780*i,t.sway+=e*1.5}else t.hp<=0&&(m0(n,t),n.airdrop=null)}}function Ad(n,e,t){let i=e,s=t;if(i===void 0){for(let o=0;o<24;o++){let a=n.rng.rand(.16*he.w,.84*he.w),l=n.rng.rand(.16*he.h,.84*he.h);if(!(J(a,l,n.world.shop.x,n.world.shop.y)<mt+160)){i=a,s=l;break}}i===void 0&&(i=he.w*.25,s=he.h*.25)}let r=n.rng.chance(.5);n.plane={x:i+(r?-1700:1700),y:s,vx:r?820:-820,dropX:i,dropY:s,released:!1,prop:0}}function p0(n){let e=[["scrap",n.rng.randi(50,110)]];return n.rng.chance(.85)&&e.push(["rocket",n.rng.randi(2,6)]),n.rng.chance(.85)&&e.push(["ammo",n.rng.randi(70,150)]),n.rng.chance(.55)&&e.push(["metal",n.rng.randi(25,60)]),n.rng.chance(.5)&&e.push(["wood",n.rng.randi(30,70)]),n.rng.chance(.4)&&e.push(["sniper",1]),e}function m0(n,e){ot(n,e.x,e.y,"#ffd27a",30,300),ot(n,e.x,e.y,"#d2664a",16,220);for(let[t,i]of e.loot)if(t==="rocket")for(let s=0;s<i;s++)xt(n,e.x,e.y,"rocket",1);else t==="sniper"?xt(n,e.x,e.y,"sniper",1):t==="ammo"?xt(n,e.x,e.y,"ammo",i):tn(n,e.x,e.y,t,i);He(n,e.x,e.y-30,"AIRDROP LOOTED!","#ffe07a")}function kc(n,e,t){if(n.signal)return!1;let i=n.player,s=J(i.x,i.y,e,t);if(s>700){let r=700/s;e=i.x+(e-i.x)*r,t=i.y+(t-i.y)*r}return _t(n,e,t)?(He(n,i.x,i.y-20,"Not in the safe zone","#d2664a"),!1):(n.inv.signal|0)<1?(He(n,i.x,i.y-20,"No supply signal \u2014 buy one at the trade zone","#d2664a"),!1):(n.inv.signal--,n.signal={x:e,y:t,t:0,dur:6,puff:0,called:!1},He(n,i.x,i.y-20,"Supply signal out \u2014 everyone saw it","#c9a0ff"),!0)}function Rd(n,e,t){return n.signal||n.plane||n.airdrop?!1:(n.signal={x:e,y:t,t:0,dur:6,puff:0,called:!1},!0)}function Cd(n,e){let t=n.signal;t&&(t.t+=e,t.puff-=e,t.puff<=0&&(t.puff=.12,ot(n,t.x+n.rng.rand(-8,8),t.y+n.rng.rand(-6,2),"#a96bd4",3,60)),!t.called&&t.t>t.dur&&!n.plane&&!n.airdrop&&(Ad(n,t.x,t.y),t.called=!0),(t.called||t.t>t.dur+60)&&(n.signal=null))}function Sd(n,e){let t=n.quarry;if(!t)return;let i=new Set;!n.player.dead&&!n.player.inCopter&&!n.ghost&&ae(n.player.x,n.player.y,t.x,t.y)<t.r*t.r&&i.add(ze);for(let s of n.units)s.dead||s.eliminated||s.flying||ae(s.x,s.y,t.x,t.y)<t.r*t.r&&i.add(s.owner);if(i.size===1){let s=[...i][0];if(s!==t.owner){if(t.capOwner!==s&&(t.capOwner=s,t.capT=0),t.capT+=e,t.capT>=Vn.capT){t.owner=s,t.capT=0,t.capOwner=null,t.payT=0;let r=n.teams.find(a=>a.owner===s),o=s===ze?"You":"Base "+(r?r.id+1:"?");He(n,t.x,t.y-44,"Quarry captured!","#cdd6a3"),n.elims.push({text:"QUARRY \u2192 "+o,t:10})}}else t.capT=0}else t.capT=Math.max(0,t.capT-e);if(t.owner&&t.owner!==ze){let s=n.teams.find(o=>o.owner===t.owner);s&&!s.eliminated&&n.units.some(o=>o.owner===t.owner&&o.primary&&!o.eliminated)||(t.owner=null)}if(t.owner&&(t.arm+=e,t.payT+=e,t.payT>=Vn.payEvery)){if(t.payT=0,t.paid++,t.owner===ze)n.inv.stone+=Vn.pay.stone,n.inv.metal+=Vn.pay.metal,n.inv.scrap+=Vn.pay.scrap;else{let s=n.teams.find(a=>a.owner===t.owner),r=s&&s.bases.find(a=>!a.dead),o=r&&n.deploys.get(r.tcKey);o&&o.store&&(o.store.stone+=Vn.pay.stone,o.store.metal+=Vn.pay.metal,o.store.scrap+=Vn.pay.scrap)}He(n,t.x,t.y-44,"+stone +metal +scrap","#cdd6a3")}}function Id(n,e){if(!n.lockedCrate){if(n.crateT-=e,n.crateT<=0){let s=n.world.monuments.filter(a=>a.type!=="quarry"),r=n.rng.pick(s),o=n.rng.rand(0,Fe);n.lockedCrate={x:r.x+Math.cos(o)*(r.r+90),y:r.y+Math.sin(o)*(r.r+90),mon:r.name,t:Ps.hackT,started:!1,blink:0},He(n,n.lockedCrate.x,n.lockedCrate.y-30,"Locked crate at the "+r.name+"!","#ffb84a"),n.elims.push({text:"LOCKED CRATE \u2014 "+r.name,t:12}),n.crateT=n.rng.rand(240,360)}return}let t=n.lockedCrate;t.blink+=e;let i=!n.player.dead&&!n.ghost&&ae(n.player.x,n.player.y,t.x,t.y)<Ps.r*Ps.r;if(!i){for(let s of n.units)if(!(s.dead||s.eliminated||s.flying)&&ae(s.x,s.y,t.x,t.y)<Ps.r*Ps.r){i=!0;break}}if(i&&(t.started=!0,t.t-=e),t.t<=0){ot(n,t.x,t.y,"#ffd27a",30,300),ot(n,t.x,t.y,"#d2664a",16,220),tn(n,t.x,t.y,"scrap",n.rng.randi(80,140)),tn(n,t.x,t.y,"metal",n.rng.randi(40,80));for(let s=0,r=n.rng.randi(3,6);s<r;s++)xt(n,t.x+n.rng.rand(-20,20),t.y+n.rng.rand(-20,20),"rocket",1);for(let s=0,r=n.rng.randi(2,4);s<r;s++)xt(n,t.x+n.rng.rand(-20,20),t.y+n.rng.rand(-20,20),"satchel",1);xt(n,t.x,t.y,"ammo",n.rng.randi(80,160)),n.rng.chance(.5)&&xt(n,t.x,t.y,"sniper",1),He(n,t.x,t.y-24,"Locked crate opened!","#ffb84a"),n.lockedCrate=null}}function Oc(n){let e=n.rng,t=he.w,i=he.h,s=(o,a,l)=>{let c=l?e.rand(86,140):e.rand(70,128),f=[],h=c;for(let d=0,u=e.randi(5,9);d<u;d++){let p=e.rand(-.95,.95)*c,x=e.rand(-.42,.42)*c,m=c*e.rand(.55,1);f.push({dx:p,dy:x,r:m}),h=Math.max(h,Math.hypot(p,x)+m)}return{x:o,y:a,puffs:f,r:h,op:l?e.rand(.92,1):e.rand(.7,1),sp:e.rand(9,19),heavy:l}};n.clouds=[];let r=e.randi(7,10);for(;r>0;)if(r>=2&&e.chance(.5)){let o=e.rand(0,t),a=e.rand(0,i),l=Math.min(r,e.randi(2,3));for(let c=0;c<l;c++)n.clouds.push(s(o+e.rand(-150,150),a+e.rand(-95,95),!0));r-=l}else n.clouds.push(s(e.rand(0,t),e.rand(0,i),e.chance(.4))),r--;n.fogBanks=[];for(let o=0,a=e.randi(13,20);o<a;o++){let l=e.rand(150,320),c=[];for(let f=0,h=e.randi(2,5);f<h;f++)c.push({dx:e.rand(-1,1)*l,dy:e.rand(-.6,.6)*l,r:l*e.rand(.7,1.2)});n.fogBanks.push({x:e.rand(0,t),y:e.rand(0,i),r:l,puffs:c,dens:e.rand(.5,1.15),sp:e.rand(5,12),vy:e.rand(-3,3)})}n.fireflies=[];for(let o=0,a=e.randi(16,28);o<a;o++)n.fireflies.push({x:e.rand(t/3+30,2*t/3-30),y:e.rand(60,i-60),vx:e.rand(-28,28),vy:e.rand(-28,28),ph:e.rand(0,Fe),fs:e.rand(2.5,4.5),wT:e.rand(.5,1.7)})}function Pd(n,e){let t=he.w,i=he.h;n.clouds||Oc(n);for(let o of n.clouds)o.x+=o.sp*e,o.x-o.r>t+160&&(o.x=-o.r-n.rng.rand(0,500),o.y=n.rng.rand(0,i));for(let o of n.fogBanks)o.x+=o.sp*e,o.y+=o.vy*e,o.x-o.r>t+220&&(o.x=-o.r-n.rng.rand(0,450),o.y=n.rng.rand(0,i)),o.y<-o.r?o.y=i+o.r*.5:o.y>i+o.r&&(o.y=-o.r*.5);let s=t/3+20,r=2*t/3-20;for(let o of n.fireflies){if(o.wT-=e,o.wT<=0){o.wT=n.rng.rand(.5,1.7);let a=n.rng.rand(0,Fe),l=n.rng.rand(14,40);o.vx=Math.cos(a)*l,o.vy=Math.sin(a)*l}o.x+=o.vx*e,o.y+=o.vy*e,o.x<s&&(o.x=s,o.vx=Math.abs(o.vx)),o.x>r&&(o.x=r,o.vx=-Math.abs(o.vx)),o.y=et(o.y,40,i-40),o.ph+=o.fs*e}for(let o=n.footprints.length-1;o>=0;o--)n.footprints[o].t+=e,n.footprints[o].t>=10&&n.footprints.splice(o,1)}function $o(n,e,t){if(e.fpAcc=(e.fpAcc||0)+J(e.x,e.y,e.fpX||e.x,e.fpY||e.y),e.fpX=e.x,e.fpY=e.y,e.fpAcc<30)return;e.fpAcc=0,e.fpSide=!e.fpSide;let i=e.fpSide?5:-5;n.footprints.push({x:e.x-Math.sin(t)*i,y:e.y+Math.cos(t)*i,a:t,t:0}),n.footprints.length>700&&n.footprints.shift()}function Ld(n,e){for(let t of n.resources)t.amount>=t.max||(t.regen+=e,t.amount<=0?t.regen>=29&&(t.amount=t.max,t.regen=0):t.regen>=2.5&&(t.amount=Math.min(t.max,t.amount+Math.ceil(t.max*.05)),t.regen=0));for(let t of n.barrels)t.hp>0||(t.respawnT-=e,t.respawnT<=0&&(t.hp=t.max))}var Dd={1:"pistol",2:"rifle",3:"minigun",4:"rocket",6:"sniper",7:"shotgun",8:"hmg"};function Ir(n){let e=Dd[n.slot];return e&&n.owned[e]?e:null}function Nd(n,e){let t=n.player,i=n.cmd;if(t.gatherCd=Math.max(0,(t.gatherCd||0)-e),t.recoil=Math.max(0,t.recoil-42*e),t.swing=Math.max(0,t.swing-e),t.hurt=Math.max(0,t.hurt-e),t.invuln=Math.max(0,t.invuln-e),t.dead){t.deadT-=e,t.deadT<=0&&y0(n);return}if(t.poison>0&&(t.poison-=e,t.regenDelay=Math.max(t.regenDelay,1.5),t.health-=3.2*e,n.tick%60===0&&He(n,t.x,t.y-20,"poison","#7bbf4f"),t.health<=0)){Sr(n,!0);return}if(t.regenDelay=Math.max(0,t.regenDelay-e),t.regenDelay<=0&&t.health<t.maxhp&&(t.health=Math.min(t.maxhp,t.health+12*e)),t.inCopter){xd(n,e);return}t.angle=Math.atan2(i.my-t.y,i.mx-t.x);let s=(i.right?1:0)-(i.left?1:0),r=(i.down?1:0)-(i.up?1:0),o=i.run?t.run:t.walk,a=Ir(n);a==="minigun"&&n.weapons.minigun.spin>=en.minigun.windup&&(o*=.4);let l=n.world.lakeAt(t.x,t.y);l&&!l.frozen&&(o*=.5);let c=Math.hypot(s,r),f=0,h=0;if(c>0&&(f=s/c*o,h=r/c*o),l&&l.frozen){let y=Math.min(1,e*1.1);if(t.vx+=(f-t.vx)*y,t.vy+=(h-t.vy)*y,c===0){let w=Math.pow(.6,e);t.vx*=w,t.vy*=w}}else t.vx=f,t.vy=h;t.moving=Math.hypot(t.vx,t.vy)>10;let d={passOwner:ze,openOwnDoors:!1},u=t.x+t.vx*e,p=t.y+t.vy*e;yt(n,t.x,t.y,Wt,d)?(t.x=u,t.y=p):(yt(n,u,t.y,Wt,d)?t.vx*=-.2:t.x=u,yt(n,t.x,p,Wt,d)?t.vy*=-.2:t.y=p),t.x=et(t.x,Wt,he.w-Wt),t.y=et(t.y,Wt,he.h-Wt);for(let y of n.resources)y.amount>0&&Ko(t,y.x,y.y,y.r+Wt-6);for(let y of n.barrels)y.hp>0&&Ko(t,y.x,y.y,y.r+Wt-4);for(let y of n.world.boulders)Ko(t,y.x,y.y,y.r+Wt-2);Ko(t,n.world.shop.x,n.world.shop.y,n.world.shop.r+Wt),t.moving&&$o(n,t,Math.atan2(t.vy,t.vx));let x=a&&n.weapons[a],m=a&&en[a];if(x&&(x.cd=Math.max(0,x.cd-e),x.reloading>0&&(x.reloading-=e,x.reloading<=0))){let y=Math.min(m.magSize-x.ammo,x.reserve);x.ammo+=y,x.reserve-=y}let g=!n.buildMode&&!t.dead&&!t.inCopter&&!n.shopOpen&&!n.storeOpen;if(g&&a==="minigun"){let y=n.weapons.minigun;i.fireHeld?y.spin=Math.min(m.windup+.4,y.spin+e):y.spin=Math.max(0,y.spin-1.6*e),i.fireHeld&&y.spin>=m.windup&&Jo(n)}else g&&i.fireHeld&&m&&m.auto?Jo(n):g&&i.fireHeld&&n.slot===0&&t.gatherCd<=0&&(t.gatherCd=.34,g0(n));n.rapidRockets&&g&&i.fireHeld&&(n.rapidCd=Math.max(0,(n.rapidCd||0)-e),n.rapidCd<=0&&!_t(n,t.x,t.y)&&(n.rapidCd=.1,Cr(n,t.x+Math.cos(t.angle)*26,t.y+Math.sin(t.angle)*26,t.angle,ze)))}function Ko(n,e,t,i){let s=ae(n.x,n.y,e,t);if(s<i*i&&s>.01){let r=Math.sqrt(s);n.x+=(n.x-e)/r*(i-r),n.y+=(n.y-t)/r*(i-r)}}function Jo(n){let e=n.player,t=Ir(n);if(!t)return;if(_t(n,e.x,e.y)){ln(n,"No weapons in the safe zone");return}let i=n.weapons[t],s=en[t];if(i.reloading>0||i.cd>0)return;if(i.ammo<=0){Bc(n);return}i.ammo--,i.cd=s.rof;let r=s.spread;t==="rifle"&&e.rifleLaser&&(r*=.4);let o=s.pellets||1;for(let a=0;a<o;a++){let l=e.angle+n.rng.rand(-r,r),c=e.x+Math.cos(l)*26,f=e.y+Math.sin(l)*26;s.rocket?Cr(n,c,f,l,ze):Rn(n,{x:c,y:f,angle:l,speed:s.speed,dmg:s.dmg,from:ze,life:s.range,col:s.tracer||null})}e.recoil=Math.min(12,e.recoil+s.kick),n.muzzle={x:e.x+Math.cos(e.angle)*30,y:e.y+Math.sin(e.angle)*30,a:e.angle,t:s.rocket?.08:.05},n.events.push({type:"shot",x:e.x,y:e.y,a:e.angle,weapon:t})}function Bc(n){let e=Ir(n);if(!e)return;let t=n.weapons[e],i=en[e];t.reloading>0||t.ammo>=i.magSize||t.reserve<=0||(t.reloading=i.reloadT)}function Pr(n,e){if(n.player.inCopter)return;let t=Dd[e];if(t&&!n.owned[t]){ln(n,"locked \u2014 buy it at the trade shop");return}n.slot=e,n.buildMode=e===5,n.rapidRockets&&e!==4&&(n.rapidRockets=!1)}function g0(n){let e=n.player;e.swing=.16;let t=null,i=Do*.85;for(let o of n.animals){if(o.dead)continue;let a=J(e.x,e.y,o.x,o.y)-o.r;a<i&&(i=a,t=o)}if(t){Zo(n,t,18,e.x,e.y,ze);return}if(x0(n))return;let s=null,r=Do;for(let o of n.resources){if(o.amount<=0)continue;let a=J(e.x,e.y,o.x,o.y)-o.r;a<r&&(r=a,s=o)}if(s){let o=s.base==="wood"?8:s.base==="stone"?6:5,a=Math.min((n.jackhammer?3:1)*o,s.amount);s.amount-=a,s.regen=0,n.inv[s.base]+=a,He(n,s.x,s.y-s.r,"+"+a+" "+s.base,"#d8e0c2"),ot(n,s.x,s.y,"#caa07a",n.jackhammer?6:3,140),n.events.push({type:"harvest",x:s.x,y:s.y,kind:s.base})}}function x0(n){let e=n.player,t=Do+38.4,i=null,s=t,r=null,o=null;for(let[c,f]of n.structures){if(f.owner!==ze||f.hp>=f.max)continue;let[h,d]=c.split(",").map(Number),u=it(h,d),p=J(e.x,e.y,u.x,u.y);p<s&&(s=p,i=f,r="cell",o=c)}for(let[c,f]of n.walls){if(f.owner!==ze||f.hp>=f.max)continue;let h=Rt(c,f),d=J(e.x,e.y,(h[0]+h[2])/2,(h[1]+h[3])/2);d<s&&(s=d,i=f,r="wall",o=c)}for(let[c,f]of n.deploys){if(f.owner!==ze||f.hp>=f.max)continue;let[h,d]=c.split(",").map(Number),u=it(h,d),p=J(e.x,e.y,u.x,u.y);p<s&&(s=p,i=f,r="deploy",o=c)}if(!i)return!1;let a=Xt[i.type],l=r==="deploy"?0:void 0;return td(n,i,a,[n.inv],l)&&He(n,e.x,e.y-20,"repaired","#9ad06a"),!0}function Ud(n){let e=n.player;if(e.inCopter){let a=Math.floor(e.x/64),l=Math.floor(e.y/64);if(n.structures.has(We(a,l))){ln(n,"Can't land on a base");return}e.inCopter=!1,e.y+=ft.r+Wt+6;return}if(n.copter&&!n.copter.destroyed&&J(e.x,e.y,n.copter.x,n.copter.y)<ft.r+Wt+34){e.inCopter=!0,ln(n,"liftoff");return}let t=n.world.shop;if(J(e.x,e.y,t.x,t.y)<t.r+Wt+44){n.shopOpen=!n.shopOpen;return}let i=null,s=64*1.4,r=null,o=null;for(let[a,l]of n.walls){if(l.type!=="door"||l.hp<=0)continue;let c=Rt(a,l),f=J(e.x,e.y,(c[0]+c[2])/2,(c[1]+c[3])/2);f<s&&(s=f,i=l,r="door",o=a)}for(let[a,l]of n.deploys){if(!(l.type==="cupboard"||l.type==="box"))continue;let[c,f]=a.split(",").map(Number),h=it(c,f),d=J(e.x,e.y,h.x,h.y);d<s&&(s=d,i=l,r="store",o=a)}if(i){if(i.lock&&i.lock.by!==ze){ln(n,"Locked \u2014 not your base");return}r==="door"?(i.open=!i.open,n.nav.stamp++):n.storeOpen=o}}function Lr(n,e,t){let i=n.buildPiece,s=Xt[i],r=Math.floor(e/64),o=Math.floor(t/64);if(s.cat==="cell")return{gx:r,gy:o};if(s.cat==="diag")return{key:Ae("D",r,o)};let a=e-r*64,l=t-o*64;return{key:[{key:Ae("V",r,o),d:a},{key:Ae("V",r+1,o),d:64-a},{key:Ae("H",r,o),d:l},{key:Ae("H",r,o+1),d:64-l}].sort((f,h)=>f.d-h.d)[0].key}}function Fd(n){let e=Lr(n,n.cmd.mx,n.cmd.my),t=n.buildPiece;jf(n,ze,t,e,[n.inv],{rot:n.buildRot})?(Xt[t].tc&&He(n,n.cmd.mx,n.cmd.my,"base claimed","#9ad06a"),n.events.push({type:"place",x:n.cmd.mx,y:n.cmd.my})):ln(n,"can't place there")}function kd(n){let e=Lr(n,n.cmd.mx,n.cmd.my),t=Math.floor(n.cmd.mx/64),i=Math.floor(n.cmd.my/64),s=(l,c)=>{for(let f in l.cost)n.inv[f]+=Math.ceil(l.cost[f]/2);(c.mat==="stone"||c.mat==="metal")&&(n.inv.stone+=7),c.mat==="metal"&&(n.inv.metal+=10)};if(e.key){let l=n.walls.get(e.key);if(l&&l.owner===ze){s(Xt[l.type],l),n.walls.delete(e.key),n.nav.stamp++;return}}let r=We(t,i),o=n.deploys.get(r);if(o&&o.owner===ze){s(Xt[o.type],o),n.deploys.delete(r),n.nav.stamp++;return}let a=n.structures.get(r);if(a&&a.owner===ze){s(Xt[a.type],a),n.structures.delete(r),Wo(n,r),n.nav.stamp++;return}}function Od(n){let e=n.cmd.mx,t=n.cmd.my,i=Math.floor(e/64),s=Math.floor(t/64);if(n.buildMode){let r=Lr(n,e,t),o=a=>a&&a.owner===ze&&ed(n,a,Xt[a.type],[n.inv]);for(let a of[Ae("V",i,s),Ae("V",i+1,s),Ae("H",i,s),Ae("H",i,s+1)]){let l=n.walls.get(a);if(!l)continue;let c=Rt(a,l);if(Math.min(J(e,t,c[0],c[1]),J(e,t,c[2],c[3]),J(e,t,(c[0]+c[2])/2,(c[1]+c[3])/2))<18&&o(l))return}if(o(n.structures.get(We(i,s))))return}else{let r=n.deploys.get(We(i,s));if(r&&r.type==="turret"&&r.owner===ze){let o=(r.tier||1)+1,a=Lf[o];a&&n.inv.scrap>=a&&(n.inv.scrap-=a,r.tier=o,r.mag=30,r.reload=0,He(n,e,t,"turret T"+o,"#9ab0d0"))}}}function Bd(n){let e=n.player;if(n.inv.grenade<=0){ln(n,"No grenades \u2014 buy at the trade shop");return}if(_t(n,e.x,e.y)){ln(n,"No weapons in the safe zone");return}n.inv.grenade--;let t=Math.min(560,J(e.x,e.y,n.cmd.mx,n.cmd.my)),i=Math.max(120,t*6)*.2,s=e.angle;n.grenades.push({x:e.x+Math.cos(s)*22,y:e.y+Math.sin(s)*22,vx:Math.cos(s)*i,vy:Math.sin(s)*i,t:Is.fuse,from:ze,bob:0})}function zd(n){let e=n.player;if(n.inv.fence<=0){ln(n,"No fences \u2014 buy more (10 wood)");return}let t=e.x+Math.cos(e.angle)*34,i=e.y+Math.sin(e.angle)*34;if(n.structures.has(We(Math.floor(t/64),Math.floor(i/64)))){ln(n,"Not on a base");return}n.inv.fence--;let s=e.angle+Math.PI/2;n.fences.push({x:t,y:i,a:s,owner:ze,hp:Bi.hp,max:Bi.hp,t:Bi.life,x0:t-Math.cos(s)*Bi.half,y0:i-Math.sin(s)*Bi.half,x1:t+Math.cos(s)*Bi.half,y1:i+Math.sin(s)*Bi.half}),n.needFenceRefresh=!0}function y0(n){let e=n.player;e.dead=!1,e.health=e.maxhp,e.invuln=1.8,e.poison=0;let t=null;for(let[i,s]of n.deploys)if(s.type==="cupboard"&&s.owner===ze){let[r,o]=i.split(",").map(Number),a=it(r,o);t={x:a.x,y:a.y+64};break}if(t)e.x=t.x,e.y=t.y;else for(let i=0;i<60;i++){let s=n.rng.rand(600,he.w-600),r=n.rng.rand(600,he.h-600);if(!(!n.world.onLand(s,r)||n.world.lakeAt(s,r)||_t(n,s,r)||yt(n,s,r,Wt))){e.x=s,e.y=r;break}}n.copter&&n.copter.destroyed&&(n.copter.destroyed=!1,n.copter.hp=n.copter.max,n.copter.x=e.x+120,n.copter.y=e.y);for(let i of n.animals)i.aggro=null,i.foe=null,!i.dead&&ae(i.x,i.y,e.x,e.y)<4e4&&(i.dead=!0,i.respawnT=.6)}function Hd(n,e){let[t,i,s]=Ft.trades[e];if(n.inv[t]<i){ln(n,"not enough "+t);return}n.inv[t]-=i,n.inv.scrap+=s}function Vd(n,e){let t=Ft.buys[e];if(!t||n.inv.scrap<t.cost){ln(n,"not enough scrap");return}n.inv.scrap-=t.cost;let i=n.weapons[e];n.owned[e]?i.reserve+=t.ammo:(n.owned[e]=!0,i.ammo<en[e].magSize&&(i.ammo=en[e].magSize),He(n,n.player.x,n.player.y-20,en[e].name+" unlocked!","#bfe3ff"))}function Gd(n,e){let t=n.player,i=s=>n.inv.scrap<s?(ln(n,"not enough scrap"),!1):(n.inv.scrap-=s,!0);switch(e){case"jackhammer":!n.jackhammer&&i(Ft.jackhammer)&&(n.jackhammer=!0,ln(n,"Jackhammer! 3\xD7 gather"));break;case"laser":if(!n.owned.rifle){ln(n,"buy the rifle first");break}!t.rifleLaser&&i(Ft.laser)&&(t.rifleLaser=!0);break;case"fence":n.inv.wood>=Ft.fenceWood?(n.inv.wood-=Ft.fenceWood,n.inv.fence++):ln(n,"not enough wood");break;case"grenade":i(Ft.grenade)&&n.inv.grenade++;break;case"signal":i(Ft.signal)&&(n.inv.signal=(n.inv.signal|0)+1);break;case"hqm":i(Ft.hqm.cost)&&(n.inv.hqm+=Ft.hqm.amt);break;case"facemask":{let s=t.facemask+1;s<=3&&i(ds.cost[s])&&(t.facemask=s);break}case"bodyArmor":{let s=t.bodyArmor+1;s<=3&&i(ds.cost[s])&&(t.bodyArmor=s);break}case"worker":i(Ft.worker)&&(Zf(n),ln(n,"worker hired \u2014 they gather and fight for you"));break}}function Wd(n,e,t){let i=n.deploys.get(n.storeOpen);if(!(!i||!i.store))if(t>0){let s=t>=9e3?n.inv[e]:Math.max(1,Math.floor(n.inv[e]*t)),r=Math.min(s,n.inv[e]);n.inv[e]-=r,i.store[e]+=r}else{let s=-t,r=s>=9e3?i.store[e]:Math.max(1,Math.floor(i.store[e]*s)),o=Math.min(r,i.store[e]);i.store[e]-=o,n.inv[e]+=o}}function ln(n,e){n.tip={text:e,t:1.4}}function qd(n,e){let t=n.player;for(let i of n.animals){if(i.dead){i.respawnT-=e,i.respawnT<=0&&Xd(n,i);continue}let s=us[i.type];if(i.atkcd=Math.max(0,i.atkcd-e),i.hit=Math.max(0,i.hit-e),i.pauseT>0){i.pauseT-=e,i.vx=i.vy=0;continue}i.phase===void 0&&(i.phase=n.rng.next()*12|0);let r,o,a=1e9;if((n.tick+i.phase)%12===0||i.tgtCache===void 0){r=null,o=null;let m=t.dead||t.inCopter||n.ghost||_t(n,t.x,t.y),g=null,y=1e9;for(let w of n.units){if(w.dead||w.flying||w.eliminated)continue;let E=J(i.x,i.y,w.x,w.y);E<s.detect&&E<y&&!Nt(n,i.x,i.y,w.x,w.y)&&(y=E,g=w)}if(!m){let w=J(i.x,i.y,t.x,t.y);w<s.detect&&w<=y&&!Nt(n,i.x,i.y,t.x,t.y)&&(r=t,o="player")}if(!r&&g&&(r=g,o="bot"),!r){let w=null,E=s.detect*s.detect;for(let[v,b]of n.deploys){if(b.type!=="turret")continue;let[R,_]=v.split(",").map(Number),M=it(R,_),C=ae(i.x,i.y,M.x,M.y);C<E&&!Nt(n,i.x,i.y,M.x,M.y)&&(E=C,w={key:v,x:M.x,y:M.y})}w&&(r=w,o="turret")}if(!r&&i.hostile){let w=null,E=s.detect*s.detect;for(let v of n.animals){if(v===i||v.dead)continue;let b=ae(i.x,i.y,v.x,v.y);b<E&&(E=b,w=v)}w&&(r=w,o="animal")}if(!r&&i.foe){let w=i.foe;typeof w=="object"&&!w.dead&&J(i.x,i.y,w.x,w.y)<s.detect*1.4&&(r=w,o=w===t?"player":w.owner!==void 0?"bot":"animal")}i.tgtCache=r?{tgt:r,kind:o}:null}else if(i.tgtCache){let m=i.tgtCache;(m.tgt.dead||m.kind==="player"&&(t.dead||n.ghost)||m.kind==="turret"&&!n.deploys.has(m.tgt.key))&&(i.tgtCache=null)}r=i.tgtCache?i.tgtCache.tgt:null,o=i.tgtCache?i.tgtCache.kind:null,r&&(a=J(i.x,i.y,r.x,r.y)),r&&o!=="turret"&&a>s.lose&&(r=null,i.aggro=null);let l=s.walk,c=0,f=0;if(r){i.aggro=o,l=s.chase;let m=Math.max(1,a);c=(r.x-i.x)/m,f=(r.y-i.y)/m;let g=o==="turret"?i.r+35.2:o==="player"?i.r+16+2:i.r+16;if(i.atkcd<=0&&a<g){o==="player"?(ms(n,s.dmg,i.x,i.y,"animal"),s.poison&&(t.poison=Math.max(t.poison,10))):o==="bot"?gs(n,r,s.dmg,i.x,i.y,"animal"):o==="turret"?ps(n,r.key,s.dmg,"animal"):o==="animal"&&(r.hp-=s.dmg,r.foe=i,r.hit=.12,r.hp<=0&&(r.dead=!0,r.respawnT=n.rng.rand(11,18))),i.atkcd=s.atk,i.pauseT=Pf;continue}}else{if(i.aggro=null,i.wanderT-=e,i.avoidT>0)i.avoidT-=e,i.dir=i.avoidA;else if(i.wanderT<=0)if(i.wanderT=n.rng.rand(1.2,3.2),i.lake&&J(i.x,i.y,i.lake.x,i.lake.y)>i.lake.r*.9)i.dir=Math.atan2(i.lake.y-i.y,i.lake.x-i.x);else if(i.lake&&n.rng.chance(.55)){i.vx=i.vy=0;continue}else if(n.rng.chance(.3)){i.vx=i.vy=0;continue}else i.dir=n.rng.rand(0,Fe);for(let[m,g]of n.deploys){if(g.type!=="cupboard")continue;let[y,w]=m.split(",").map(Number),E=it(y,w);if(ae(i.x,i.y,E.x,E.y)<340*340){i.avoidA=Math.atan2(i.y-E.y,i.x-E.x),i.avoidT=1.2,i.dir=i.avoidA;break}}c=Math.cos(i.dir),f=Math.sin(i.dir)}let h=i.x+c*l*e,d=i.y+f*l*e,u={x:i.x,y:i.y},p=i.lake?{allowLake:!0}:{},x=_0(n,i,h,d);if(i.vx=(i.x-u.x)/e,i.vy=(i.y-u.y)/e,r)if(J(i.x,i.y,u.x,u.y)<l*e*.25){if(i.stuckT+=e,i.stuckT>3){Xd(n,i);continue}i.stuckT>1.5&&(i.aggro=null,i.foe=null,i.stuckT=0,i.dir=n.rng.rand(0,Fe))}else i.stuckT=Math.max(0,i.stuckT-e*2);else!x&&n.rng.chance(.5)&&(i.dir=n.rng.rand(0,Fe))}}function _0(n,e,t,i){if(_t(n,t,i))return!1;let s=!1;return yt(n,e.x,e.y,e.r*.7)?(e.x=t,e.y=i,s=!0):(!yt(n,t,e.y,e.r*.7)&&(e.lake||!n.world.lakeAt(t,e.y))&&(e.x=t,s=!0),!yt(n,e.x,i,e.r*.7)&&(e.lake||!n.world.lakeAt(e.x,i))&&(e.y=i,s=!0)),e.x=et(e.x,20,he.w-20),e.y=et(e.y,20,he.h-20),s}function Xd(n,e){let t=us[e.type],i=he.w,s=t.biome==="desert"?[0,i/3]:t.biome==="jungle"?[i/3,2*i/3]:t.biome==="winter"?[2*i/3,i]:[0,i];for(let r=0;r<30;r++){let o,a;if(e.lake){let l=n.rng.rand(0,Fe);o=e.lake.x+Math.cos(l)*(e.lake.r+n.rng.rand(30,200)),a=e.lake.y+Math.sin(l)*(e.lake.r+n.rng.rand(30,200))}else o=n.rng.rand(Math.max(90,s[0]-90),Math.min(i-90,s[1]+90)),a=n.rng.rand(90,he.h-90);if(!(J(o,a,n.player.x,n.player.y)<520)&&!(n.world.landFactor(o,a)<.05)&&!(n.world.lakeAt(o,a)&&!e.lake)&&!yt(n,o,a,e.r)){e.x=o,e.y=a;break}}e.dead=!1,e.hp=e.max,e.aggro=null,e.foe=null,e.pauseT=0,e.stuckT=0,e.dir=n.rng.rand(0,Fe),e.respawnT=0,e.looted=!1}function Yd(n,e){let t=n.player;for(let i of n.guards){if(i.dead){if(i.respawnT-=e,i.respawnT<=0){let a=n.rng.rand(0,Fe),l=n.rng.rand(.35*i.mr,.8*i.mr);i.x=i.mx+Math.cos(a)*l,i.y=i.my+Math.sin(a)*l,i.hp=i.max,i.dead=!1}continue}i.gunCd=Math.max(0,i.gunCd-e);let s=null,r=Bt.detect;if(!t.dead&&!t.inCopter&&!n.ghost&&!_t(n,t.x,t.y)){let a=J(i.x,i.y,t.x,t.y);a<r&&!Nt(n,i.x,i.y,t.x,t.y)&&(s=t,r=a)}for(let a of n.units){if(a.dead||a.flying||a.eliminated)continue;let l=J(i.x,i.y,a.x,a.y);l<r&&!Nt(n,i.x,i.y,a.x,a.y)&&(s=a,r=l)}let o=J(i.x,i.y,i.mx,i.my);if(o>i.mr+Bt.leash&&(s=null),s){let a=Math.atan2(s.y-i.y,s.x-i.x);if(i.angle=xi(i.angle,a,Math.min(1,e*9)*Math.PI),r<Bt.range&&i.gunCd<=0&&Math.abs(v0(i.angle,a))<.3){i.gunCd=Bt.rof;let d=i.angle+n.rng.rand(-Bt.spread,Bt.spread);Rn(n,{x:i.x+Math.cos(i.angle)*16,y:i.y+Math.sin(i.angle)*16,angle:d,speed:Bt.bspeed,dmg:Bt.dmg,from:"guard",life:Bt.range/Bt.bspeed+.1}),ot(n,i.x+Math.cos(i.angle)*16,i.y+Math.sin(i.angle)*16,"#ffd76b",2,90)}let l=0,c=0;r>300?(l=Math.cos(a),c=Math.sin(a)):r<150?(l=-Math.cos(a),c=-Math.sin(a)):(l=-Math.sin(a)*(i.seed>4.5?1:-1),c=Math.cos(a)*(i.seed>4.5?1:-1));let f=i.x+l*Bt.speed*e,h=i.y+c*Bt.speed*e;yt(n,f,h,Bt.r)||(i.x=f,i.y=h),i.hasWp=!1}else{let a=Math.min(580,i.mr*2.6);if(o>a+90){let l=Math.atan2(i.my-i.y,i.mx-i.x);i.angle=xi(i.angle,l,e*4);let c=i.x+Math.cos(i.angle)*Bt.speed*e,f=i.y+Math.sin(i.angle)*Bt.speed*e;yt(n,c,f,Bt.r)||(i.x=c,i.y=f),i.hasWp=!1}else{if(i.wpT-=e,!i.hasWp||i.wpT<=0||J(i.x,i.y,i.wpX,i.wpY)<26){let d=n.rng.rand(0,Fe),u=n.rng.rand(.25*i.mr,a);i.wpX=i.mx+Math.cos(d)*u,i.wpY=i.my+Math.sin(d)*u,i.wpT=n.rng.rand(2.4,6),i.hasWp=!0}let l=Math.atan2(i.wpY-i.y,i.wpX-i.x);i.angle=xi(i.angle,l,e*3.5);let c=Bt.speed*.55,f=i.x+Math.cos(i.angle)*c*e,h=i.y+Math.sin(i.angle)*c*e;yt(n,f,h,Bt.r)?i.hasWp=!1:(i.x=f,i.y=h)}}}}var v0=(n,e)=>{let t=(e-n)%Fe;return t>Math.PI&&(t-=Fe),t<-Math.PI&&(t+=Fe),t};function Fs(n,e){let t=Un(n,e),i=t&&yn(n,t.tcKey);return i?[e.inv,i.store]:[e.inv]}function Un(n,e){let t=n.teams[e.id];return!t||e.ally?null:t.bases.find(i=>i.tcKey===e.tcKey&&!i.dead)||t.bases.find(i=>!i.dead)||null}function Dr(n,e){let t=e.bases.find(s=>!s.dead),i=t&&yn(n,t.tcKey);return i?i.store:null}function Qo(n,e,t){if(e<1400||t<1400||e>12424||t>7816||!n.world.onLand(e,t)||n.world.lakeAt(e,t)||n.world.railDist(e,t)<360||n.world.pathDist(e,t)<320||n.world.landFactor(e,t)<.12||J(e,t,n.world.shop.x,n.world.shop.y)<mt+450)return!1;for(let i of n.world.monuments)if(J(e,t,i.x,i.y)<mt+200)return!1;for(let i of n.world.lakes)if(J(e,t,i.x,i.y)<i.r+560)return!1;for(let i of n.world.boulders)if(J(e,t,i.x,i.y)<i.r+300)return!1;for(let[i,s]of n.deploys){if(s.type!=="cupboard")continue;let[r,o]=i.split(",").map(Number),a=it(r,o);if(J(e,t,a.x,a.y)<Oi)return!1}return!0}function Jd(n,e,t){if(t.inv.wood+t.inv.stone+t.inv.metal<220)return!1;let s=220;for(let o of["wood","stone","metal"]){let a=Math.min(s,t.inv[o]);if(t.inv[o]-=a,s-=a,s<=0)break}let r=Xo(n,e,t.siteX,t.siteY);for(let o of n.units)o.owner===e.owner&&(o.unfounded=!1,o.hx=r.hx,o.hy=r.hy,o.tcKey=r.tcKey,o.doorX=r.doorX,o.doorY=r.doorY,o.doorGy=r.doorGy);return He(n,r.hx,r.hy,"base founded","#9ad06a"),!0}function Qd(n,e){let t=n.teams[e.id],i=Un(n,e);if(!t||!i)return!1;let s=Fs(n,e),r=M0(n,t.owner,i),o=b0(n,t.owner,i),a=e.hard?9:5,l=e.hard?10:e.weak?5:8,c=e.hard?49:36;return r<a&&Zd(n,e,t,i,s)||e.primary&&r>=5&&jo(n,e)||o<l&&E0(n,e,t,i,s)||e.hard&&zc(n,e,t,i,s)?!0:!e.jack&&bn.pay(s,{wood:120,metal:60})?(e.jack=!0,He(n,e.x,e.y,"+jackhammer","#ffd76b"),!0):(e.hf=!e.hf,!!((e.hf?$d(n,e,t,i,s)||zc(n,e,t,i,s):zc(n,e,t,i,s)||$d(n,e,t,i,s))||r<c&&Zd(n,e,t,i,s)))}function M0(n,e,t){let i=0;for(let[s,r]of n.structures){if(r.owner!==e)continue;let[o,a]=s.split(",").map(Number),l=it(o,a);ae(l.x,l.y,t.hx,t.hy)<Dt*Dt&&i++}return i}function b0(n,e,t){let i=0;for(let[s,r]of n.deploys){if(r.type!=="turret"||r.owner!==e)continue;let[o,a]=s.split(",").map(Number),l=it(o,a);ae(l.x,l.y,t.hx,t.hy)<Dt*Dt&&i++}return i}function w0(n,e,t,i,s){let r=We(e,t);if(n.structures.has(r)||n.deploys.has(r))return!1;let o=it(e,t);if(t>=s.doorGy||_t(n,o.x,o.y)||Ns(n,o.x,o.y)||!n.world.onLand(o.x,o.y)||n.world.lakeAt(o.x,o.y)||Er(n,o.x,o.y))return!1;for(let l of n.animals)if(!l.dead&&Math.abs(l.x-o.x)<64&&Math.abs(l.y-o.y)<64)return!1;let a=qo(n,i.owner,s.hx,s.hy);if(a){let l=Math.min(a.minx,e),c=Math.max(a.maxx,e),f=Math.min(a.miny,t),h=Math.max(a.maxy,t);if(c-l+1>10||h-f+1>10)return!1}return!0}function T0(n,e,t){let i=t.split(","),s=+i[1],r=+i[2],o=i[0]==="V"?[[s-1,r],[s,r]]:[[s,r-1],[s,r]];for(let[a,l]of o){if(!n.structures.has(We(a,l)))continue;let c=0;for(let f of[Ae("V",a,l),Ae("V",a+1,l),Ae("H",a,l),Ae("H",a,l+1)]){if(f===t)continue;let h=n.walls.get(f);(!h||h.hp<=0||h.type==="door")&&c++}if(c===0)return!0}return!1}function Zd(n,e,t,i,s){if(!bn.has(s,{wood:40}))return!1;let r=[];for(let[c,f]of n.structures){if(f.owner!==t.owner)continue;let[h,d]=c.split(",").map(Number),u=it(h,d);if(!(ae(u.x,u.y,i.hx,i.hy)>Dt*Dt))for(let[p,x]of[[1,0],[-1,0],[0,1],[0,-1]])w0(n,h+p,d+x,t,i)&&r.push([h+p,d+x])}if(!r.length)return!1;let[o,a]=r[Math.floor(n.rng.next()*r.length)];if(!bn.pay(s,{wood:40}))return!1;n.structures.set(We(o,a),{type:"floor",mat:"wood",hp:100,max:100,owner:t.owner,hitT:-100});let l=[[Ae("V",o,a),We(o-1,a)],[Ae("V",o+1,a),We(o+1,a)],[Ae("H",o,a),We(o,a-1)],[Ae("H",o,a+1),We(o,a+1)]];for(let[c,f]of l){let h=n.structures.get(f);h&&h.owner===t.owner||n.walls.has(c)||T0(n,t.owner,c)||n.walls.set(c,{type:"wall",mat:"wood",hp:100,max:100,owner:t.owner,hitT:-100,open:!1})}return Ic(n,t,i),n.nav.stamp++,He(n,o*64+64/2,a*64+64/2,"+room","#bcd0e0"),!0}function E0(n,e,t,i,s){if(!bn.has(s,{wood:40,metal:30}))return!1;let r=qo(n,t.owner,i.hx,i.hy);if(!r)return!1;let o=Math.floor(i.doorX/64),a=[];for(let c=r.miny-1;c<=r.maxy+1;c++)for(let f=r.minx-1;f<=r.maxx+1;f++){let h=We(f,c);if(n.structures.has(h)||n.deploys.has(h)||c>=i.doorGy&&Math.abs(f-o)<=1)continue;let d=it(f,c);if(_t(n,d.x,d.y)||Ns(n,d.x,d.y)||!n.world.onLand(d.x,d.y)||n.world.lakeAt(d.x,d.y)||Er(n,d.x,d.y))continue;let u=!1,p=!1;for(let x=-1;x<=1&&!u;x++)for(let m=-1;m<=1;m++){let g=n.structures.get(We(f+m,c+x));if(g&&g.owner===t.owner){u=!0;break}}for(let[x,m]of[[1,0],[-1,0],[0,1],[0,-1]]){let g=n.deploys.get(We(f+x,c+m));if(g&&g.type==="turret"){p=!0;break}}u&&!p&&a.push({gx:f,gy:c,c:d})}if(!a.length)return!1;a.sort((c,f)=>ae(f.c.x,f.c.y,i.doorX,i.doorY)-ae(c.c.x,c.c.y,i.doorX,i.doorY));let l=a[0];return bn.pay(s,{wood:40,metal:30})?(n.deploys.set(We(l.gx,l.gy),{type:"turret",mat:"wood",hp:150,max:150,owner:t.owner,hitT:-100,tier:e.hard?3:e.weak?1:2,angle:0,cd:0,mag:12,reload:0,ext:!0,scanT:n.rng.rand(.5,4.5)}),n.nav.stamp++,He(n,l.c.x,l.c.y,"+turret","#bcd0e0"),!0):!1}var A0={wood:{mat:"stone",cost:{stone:15}},stone:{mat:"metal",cost:{metal:20}},metal:{mat:"armored",hqm:8}},R0={wood:{mat:"stone",cost:{stone:12}},stone:{mat:"metal",cost:{metal:16}},metal:{mat:"armored",hqm:6}};function zc(n,e,t,i,s){for(let[r,o]of n.walls){if(o.owner!==t.owner||o.hp<=0)continue;let a=A0[o.mat];if(a){if(a.hqm){if(e.hqm<a.hqm)continue;e.hqm-=a.hqm}else if(!bn.pay(s,a.cost))continue;return o.mat=a.mat,o.max=mi(Xt[o.type],o.mat),o.hp=o.max,He(n,e.x,e.y,"+"+a.mat,a.mat==="armored"?"#7f93ad":a.mat==="metal"?"#aeb6bf":"#c2c8cf"),!0}}return!1}function $d(n,e,t,i,s){for(let[r,o]of n.structures){if(o.owner!==t.owner)continue;let a=R0[o.mat];if(a){if(a.hqm){if(e.hqm<a.hqm)continue;e.hqm-=a.hqm}else if(!bn.pay(s,a.cost))continue;return o.mat=a.mat,o.max=mi(Xt[o.type],o.mat),o.hp=o.max,!0}}return!1}function jo(n,e){let t=n.teams[e.id];if(!t||!e.primary)return!1;let i=e.hard?at.HIRE_CAP_HARD:at.HIRE_CAP;if(n.units.filter(f=>f.owner===t.owner&&!f.eliminated).length>=i)return!1;let r=Un(n,e),o=r&&yn(n,r.tcKey),a=at.WORKER_COST,l=Math.min(a,e.scrap);if(l+(o?o.store.scrap:0)<a)return!1;e.scrap-=l,a-=l,a>0&&(o.store.scrap-=a);let c=wr(n,t,e.hx+n.rng.rand(-46,46),e.hy+n.rng.rand(24,64),!1);return c.hx=e.hx,c.hy=e.hy,c.tcKey=e.tcKey,c.doorX=e.doorX,c.doorY=e.doorY,c.doorGy=e.doorGy,c.unfounded=e.unfounded,He(n,c.x,c.y,"+worker hired","#9ad06a"),!0}function jd(n,e,t){let i=n.units.find(c=>c.owner===e.owner&&c.primary&&!c.eliminated);if(!i||i.unfounded||e.eliminated)return;let s=e.bases.filter(c=>!c.dead);if(!s.length)return;let r=e.hard?4:3,o=Dr(n,e),a=o?o.wood+o.stone+o.metal:0,l=e.brain;if(i.fwdT-=t,l.aggressor&&l.raidTarget&&s.length<r&&a>=170&&i.fwdT<=0){i.fwdT=10;let c=Fn(n,l.raidTarget);if(c&&!s.some(f=>J(f.hx,f.hy,c.hx,c.hy)<2400)){let f=s[0],h=Math.atan2(f.hy-c.hy,f.hx-c.hx);for(let d of[1800,2300,1400,2700]){let u=c.hx+Math.cos(h)*d,p=c.hy+Math.sin(h)*d;if(Qo(n,u,p)){Kd(o,200);let x=Xo(n,e,u,p);x.kind="raid-forward",He(n,u,p,"+raid base","#ffd0a0");return}}}}if(i.expT-=t,i.expT<=0){i.expT=n.rng.rand(50,90);let c=l.attack?160:260;if(s.length>=1&&s.length<r&&a>=c){let f=C0(n,e,s[0]);if(f){Kd(o,240);let h=Xo(n,e,f.x,f.y);h.kind=f.kind,He(n,f.x,f.y,"+"+f.kind+" base","#bcd0e0")}}}}function Kd(n,e){if(n)for(let t of["wood","stone","metal"]){let i=Math.min(e,n[t]);if(n[t]-=i,e-=i,e<=0)return}}function Fn(n,e){if(!e)return null;if(e==="player"){for(let[t,i]of n.deploys)if(i.type==="cupboard"&&i.owner===ze){let[s,r]=t.split(",").map(Number),o=it(s,r);return{owner:ze,tcKey:t,hx:o.x,hy:o.y,isPlayer:!0}}return null}return e.bases&&e.bases.find(t=>!t.dead)||null}function C0(n,e,t){for(let s of n.world.monuments){let r=!1;for(let o of n.teams)if(o.bases.some(a=>!a.dead&&J(a.hx,a.hy,s.x,s.y)<mt+900)){r=!0;break}if(!r)for(let o=0;o<8;o++){let a=o/8*Math.PI*2,l=s.x+Math.cos(a)*(mt+320),c=s.y+Math.sin(a)*(mt+320);if(Qo(n,l,c))return{x:l,y:c,kind:"monument"}}}let i=Fn(n,e.brain.raidTarget)||S0(n,e,t);if(i){let s=Math.atan2(i.hy-t.hy,i.hx-t.hx);for(let r of[1700,2200,1300]){let o=t.hx+Math.cos(s)*r,a=t.hy+Math.sin(s)*r;if(Qo(n,o,a))return{x:o,y:a,kind:"raid-forward"}}}for(let s=0;s<10;s++){let r=n.rng.rand(0,Math.PI*2),o=n.rng.rand(Oi+200,Oi+1600),a=t.hx+Math.cos(r)*o,l=t.hy+Math.sin(r)*o;if(Qo(n,a,l))return{x:a,y:l,kind:"survival"}}return null}function S0(n,e,t){let i=null,s=3e3*3e3;for(let r of n.teams)if(!(r===e||r.eliminated))for(let o of r.bases){if(o.dead)continue;let a=ae(t.hx,t.hy,o.hx,o.hy);a>s&&(s=a,i=o)}return i}function Hc(n,e){if(e.ally)return!1;let t=Math.floor(e.x/64),i=Math.floor(e.y/64),s=null,r=-1;for(let[a,l,c]of[[Ae("V",t,i),We(t-1,i),!1],[Ae("V",t+1,i),We(t+1,i),!1],[Ae("H",t,i),We(t,i-1),!1],[Ae("H",t,i+1),We(t,i+1),!0]]){let f=n.walls.get(a);if(!f||f.owner!==e.owner||f.type==="door")continue;let h=(n.structures.has(l)?0:60)+(c?12:0)+n.rng.rand(0,2);h>r&&(r=h,s=a)}if(!s)return!1;let o=n.walls.get(s);return o.type="door",o.open=!0,o.closeT=n.t+1.2,o.lock={by:e.owner},o.hp=Math.max(o.hp,50),o.max=Math.max(o.max,50),n.nav.stamp++,n.metrics.doorCuts=(n.metrics.doorCuts||0)+1,He(n,e.x,e.y,"cut a door","#caa46a"),!0}function Nr(n){n.path=null,n.pathI=0,n.repathN=0}function kt(n,e,t,i,s,r={}){let o=r.arrive||16,a=J(e.x,e.y,t,i);if(a<=o)return Nr(e),e.progBest=1e9,"arrived";let l=J(e.pathGX,e.pathGY,t,i)>90,c=n.t-e.pathT>3,f=!e.path||n.t-(e.lastPlanT||-1)>.5;if((!e.path||l||c||e.pathI>=e.path.length)&&f){if(e.lastPlanT=n.t,a<192&&Mr(n,e.owner,e.x,e.y,t,i))e.path=[{x:t,y:i}],e.pathI=0;else{let M=qf(n,e.owner,e.x,e.y,t,i);n.metrics.repaths++,M?(e.path=M,e.pathI=0,e.directFallback=!1):(n.metrics.pathFails++,e.path=[{x:t,y:i}],e.pathI=0,e.directFallback=!0)}e.pathGX=t,e.pathGY=i,e.pathT=n.t}let h=e.path[Math.min(e.pathI,e.path.length-1)],d=h.door?12:15;J(e.x,e.y,h.x,h.y)<d&&e.pathI<e.path.length-1&&(e.pathI++,h=e.path[e.pathI]),!h.door&&e.pathI+1<e.path.length&&!e.path[e.pathI+1].door&&n.tick%7===e.tickPhase%7&&Mr(n,e.owner,e.x,e.y,e.path[e.pathI+1].x,e.path[e.pathI+1].y)&&(e.pathI++,h=e.path[e.pathI]);let u=r.speed||at.BOT_SPEED,p=n.world.lakeAt(e.x,e.y);p&&!p.frozen&&(u*=.5);let x=Math.max(1,J(e.x,e.y,h.x,h.y)),m=(h.x-e.x)/x,g=(h.y-e.y)/x,y=Math.min(u*s,x),w=e.x+m*y,E=e.y+g*y,v=e.x,b=e.y,R={passOwner:e.owner,openOwnDoors:!0},_=!1;if(yt(n,e.x,e.y,13,R)?(e.x=w,e.y=E,_=!0):yt(n,w,E,13,R)?(yt(n,w,e.y,13,R)||(e.x=w,_=!0),yt(n,e.x,E,13,R)||(e.y=E,_=!0)):(e.x=w,e.y=E,_=!0),e.x=et(e.x,12,he.w-12),e.y=et(e.y,12,he.h-12),e.vx=(e.x-v)/s,e.vy=(e.y-b)/s,_){let M=Math.atan2(g,m);e.angle=e.angle+ea(e.angle,M)*Math.min(1,s*7)}if(e.progT+=s,e.progT>=.5){e.progT=0;let M=J(e.x,e.y,t,i);if(M<e.progBest-12)e.progBest=M,e.noProgT=0,e.repathN=0;else if(e.noProgT=(e.noProgT||0)+.5,e.noProgT>=1.5){if(e.noProgT=0,e.repathN++,Ho(n,e.x,e.y,12),Ho(n,e.x+(t>e.x?64:-64),e.y,10),Ho(n,e.x,e.y+(i>e.y?64:-64),10),n.metrics.stuckTotal+=1.5,e.path=null,e.lastPlanT=-1,e.repathN===2){let C=Math.atan2(i-e.y,t-e.x)+(e.id%2?1:-1)*Math.PI/2;e.detourX=e.x+Math.cos(C)*220,e.detourY=e.y+Math.sin(C)*220,e.detourT=n.t+2.5}if(e.repathN>=3)return e.repathN=0,e.progBest=1e9,Nr(e),n.metrics.stuckLog.push({t:n.t,owner:e.owner,x:e.x|0,y:e.y|0}),"stuck"}}if(e.detourT&&n.t<e.detourT)if(J(e.x,e.y,e.detourX,e.detourY)>20){let C=Math.atan2(e.detourY-e.y,e.detourX-e.x),S=e.x+Math.cos(C)*u*s,P=e.y+Math.sin(C)*u*s;yt(n,S,P,13,R)||(e.x=S,e.y=P)}else e.detourT=0;return!_&&e.path&&e.pathI<e.path.length-1?(e.wpStallT=(e.wpStallT||0)+s,e.wpStallT>.6&&(e.wpStallT=0,e.pathI++)):_&&(e.wpStallT=0),e.gotoTick=n.tick,_?e.stuckT=Math.max(0,e.stuckT-s*2):(e.stuckT+=s,e.state!=="raid"&&(n.metrics.maxStuck=Math.max(n.metrics.maxStuck,e.stuckT))),"moving"}function eu(n,e,t){for(let i of n.units){if(i===e||i.dead||i.eliminated||i.flying||i.owner!==e.owner)continue;let s=ae(e.x,e.y,i.x,i.y);if(s>.01&&s<324){let r=Math.sqrt(s),o=(18-r)*.5*t*6,a=(e.x-i.x)/r*o,l=(e.y-i.y)/r*o;yt(n,e.x+a,e.y+l,13,{passOwner:e.owner})||(e.x+=a,e.y+=l)}}}function Cn(n,e,t,i,s=8){let r=Math.atan2(t-n.y,e-n.x);n.angle=n.angle+ea(n.angle,r)*Math.min(1,i*s)}var ea=(n,e)=>{let t=(e-n)%Fe;return t>Math.PI&&(t-=Fe),t<-Math.PI&&(t+=Fe),t};var tu=at.BOT_SPEED;function ou(n,e,t){if(e.eliminated)return;let i=e.ally?null:n.teams[e.id];if(!e.ally&&!e.unfounded){let d=Un(n,e);if(!d){au(n,e,i);return}d.tcKey!==e.tcKey&&lu(n,e,d);let u=yn(n,d.tcKey);u&&(u.store.wood=Math.max(u.store.wood,40))}if(e.dead){e.respawnT-=t,e.respawnT<=0&&P0(n,e,i);return}if(e.gunCd=Math.max(0,e.gunCd-t),e.rkCd=Math.max(0,e.rkCd-t),e.gnCd=Math.max(0,e.gnCd-t),e.fenceCd=Math.max(0,e.fenceCd-t),e.think-=t,e.expandT-=t,e.retaliateT=Math.max(0,e.retaliateT-t),e.disengageT=Math.max(0,e.disengageT-t),e.regenT=Math.max(0,e.regenT-t),e.regenT<=0&&e.hp<e.max&&(e.hp=Math.min(e.max,e.hp+9*t)),e.primary&&!e.unfounded&&!e.ally&&(e.hireT-=t,e.hireT<=0)){e.hireT=2;let d=Un(n,e),u=d&&yn(n,d.tcKey);e.scrap+(u?u.store.scrap:0)>=at.WORKER_COST+24&&jo(n,e)}if(e.aboard)if(e.aboard.destroyed||!e.aboard.riders.includes(e))e.aboard=null,e.flying=!1;else{e.flying=!0;return}if(e.flying&&(!e.copter||e.copter.destroyed)&&(e.flying=!1),e.flying&&e.state!=="trade"&&pu(e),e.unfounded){L0(n,e,i,t),nu(n,e,t);return}e.endgame=n.aliveBases<=at.ENDGAME_BASES||n.t>at.ENDGAME_T;let s=i?i.brain:I0,r=e.retaliateT>0&&ae(e.x,e.y,e.threatX,e.threatY)<at.REACT_R*at.REACT_R&&!_t(n,e.x,e.y);(n.tick+e.tickPhase)%9===0||e.thCache===void 0?e.thCache=uu(n,e)||Yc(n,e):e.thCache&&e.thCache.ref&&!e.thCache.ref.dead?(e.thCache.x=e.thCache.ref.x,e.thCache.y=e.thCache.ref.y):e.thCache&&e.thCache.ref&&e.thCache.ref.dead&&(e.thCache=null);let o=r?{x:e.threatX,y:e.threatY,vx:0,vy:0}:e.thCache,a=J(e.x,e.y,e.hx,e.hy);ae(e.x,e.y,n.world.shop.x,n.world.shop.y)<(mt+140)*(mt+140)&&(o=null),e.ally&&(e.raidUrge-=t);let l=e.raid&&Fn(n,e.raid),c=e.rocketer&&(e.state==="raid"||e.wasRaid)&&l&&e.rockets>0&&e.hp>=e.max*.2&&!s.urgent,f=o?J(e.x,e.y,o.x,o.y):1e9;switch(o&&!c&&(e.defDuty||r&&!e.wasRaid||s.urgent||e.ally)&&!((e.wasRaid||e.endgame)&&f>=230)&&!(s.aggressor&&f>=160)?(e.state="defend",e.defHold=e.defDuty&&(s.attack||s.urgent)?2.5:.7,e.defTgt={x:o.x,y:o.y,vx:o.vx||0,vy:o.vy||0,ref:o.ref}):e.state==="defend"?(e.defHold-=t,e.defHold<=0&&(e.state="gather",e.defendT=0,e.defTgt=null)):e.state==="raid"&&(!l||i&&s.decaying)?(e.raid=null,e.wasRaid=!1,e.state="gather"):e.defDuty&&(s.attack||s.urgent)&&a>340&&e.state!=="raid"&&e.state!=="trade"?e.state="return":e.state==="gather"&&D0(n,e,i,s)&&(e.state=N0(n,e,i,s)),e.act=e.state,e.state){case"defend":O0(n,e,i,s,o,t);break;case"raid":B0(n,e,i,s,t);break;case"return":V0(n,e,t);break;case"trade":G0(n,e,i,s,t);break;default:X0(n,e,i,s,t);break}nu(n,e,t)}var I0={sealed:!0,decaying:!1,ready:!1,attack:!1,urgent:!1,aggressor:!1,raidTarget:null};function nu(n,e,t){if(eu(n,e,t),e.gotoTick!==n.tick&&(e.stuckT=Math.max(0,e.stuckT-t)),!e.flying&&(e.state==="gather"||e.state==="raid"||e.state==="return"||e.state==="trade")&&Math.hypot(e.vx,e.vy)>30&&$o(n,e,Math.atan2(e.vy,e.vx)),e.directFallback&&e.stuckT>1.5){let i=Math.floor(e.x/64),s=Math.floor(e.y/64),r=n.structures.get(i+","+s);r&&r.owner===e.owner&&Hc(n,e)&&(Nr(e),e.directFallback=!1,e.stuckT=0)}n.metrics.act[e.act]=(n.metrics.act[e.act]||0)+t}function au(n,e,t){e.eliminated=!0,e.dead=!0,e.primary&&t&&!t.elimsPosted&&(t.elimsPosted=!0,t.eliminated=!0,n.elims.push({text:"Base "+(e.id+1)+" ELIMINATED",t:30}),n.metrics.elims++)}function lu(n,e,t){e.hx=t.hx,e.hy=t.hy,e.tcKey=t.tcKey,e.doorX=t.doorX,e.doorY=t.doorY,e.doorGy=t.doorGy,Nr(e)}function P0(n,e,t){if(e.ally){e.hp=e.max,e.dead=!1,e.x=e.hx,e.y=e.hy+50,e.state="gather";return}if(!t)return;let i=t.bases.filter(r=>!r.dead);if(!i.length){au(n,e,t);return}let s=i[0];if(i.length>1&&!e.primary){let r=Fn(n,t.brain.raidTarget);r&&(e.rocketer||e.wasRaid||e.state==="raid")?s=i.reduce((o,a)=>ae(o.hx,o.hy,r.hx,r.hy)<ae(a.hx,a.hy,r.hx,r.hy)?o:a):s=i[Math.floor(n.rng.next()*i.length)]}lu(n,e,s),e.hp=e.max,e.dead=!1,e.x=s.hx,e.y=s.hy+50,e.state="gather",e.raid=null,e.wasRaid=!1,e.primary&&e.copter&&(e.copter.destroyed=!1,e.copter.hp=e.copter.max,e.copter.x=e.hx-256,e.copter.y=e.hy)}function L0(n,e,t,i){e.act="found";let s=e.inv.wood+e.inv.stone+e.inv.metal,r=uu(n,e);if(r&&!_t(n,e.x,e.y)){gu(n,e,r,i);return}if(e.primary){if(s>=220){if(J(e.x,e.y,e.siteX,e.siteY)<=128){Jd(n,t,e);return}kt(n,e,e.siteX,e.siteY,i);return}}else if(s>=70)if(J(e.x,e.y,e.siteX,e.siteY)<=192){let a=n.units.find(l=>l.owner===e.owner&&l.primary&&!l.dead);if(a)for(let l of["wood","stone","metal"])a.inv[l]+=e.inv[l],e.inv[l]=0}else{kt(n,e,e.siteX,e.siteY,i);return}e.act="gather";let o=e.tgtNode;(!o||o.amount<=0)&&(o=$0(n,e,"wood",2600)||ru(n,e,4e3)||ru(n,e,1e9),e.tgtNode=o),o&&mu(n,e,o,i)}function D0(n,e,t,i){if(e.monRun)return!1;let s=e.inv.wood+e.inv.stone+e.inv.metal;return!!(s>=at.GATHER_LOAD||e.scrap>40||!e.ally&&t&&(i.breach||i.damaged&&Gc(n,e)>=12||e.rocketer&&e.rockets<8&&e.role!=="turtle"&&n.t>=(e.tradeCd||0)&&(e.scrap>=12||s>=100||Xc(n,e)>=24)||cu(n,e,i)||hu(n,e,i))||e.ally&&e.raidUrge<=0)}function cu(n,e,t){if(e.ally||e.role==="turtle"||n.t<(e.tradeCd||0)||e.rockets>=(e.primary?12:6))return!1;let i=e.inv.wood+e.inv.stone+e.inv.metal;return(e.scrap>=24||i>=120||e.primary&&Xc(n,e)>=48)&&(t.aggressor||U0(n,e)||t.ready)}function hu(n,e,t){return!(n.t>120||e.endgame)||n.t<e.raidCd||e.role==="turtle"&&!e.endgame||!(e.rockets>0||e.satchels>0||e.endgame)?!1:e.endgame||t.aggressor?!0:t.ready&&t.raidTarget&&e.raidBias<.72&&F0(n,e)>=4}function N0(n,e,t,i){let s=e.inv.wood+e.inv.stone+e.inv.metal;if(!e.ally&&t){let r=i.breach;if(r&&Gc(n,e)<40)return"gather";let o=J(e.x,e.y,e.hx,e.hy);if(r||i.damaged&&Gc(n,e)>=12)return o>180?"return":"gather";if(e.rocketer&&e.rockets<8&&e.role!=="turtle"&&n.t>=(e.tradeCd||0)&&(e.scrap>=12||s>=100||Xc(n,e)>=24))return"trade";if(e.scrap>40||s>=at.GATHER_LOAD)return"return";if(cu(n,e,i))return"trade";if(hu(n,e,i)){let a=i.raidTarget;if(n.transports.find(c=>c.owner===e.owner&&!c.destroyed&&c.state!=="fly"&&c.state!=="unload"&&c.riders.length<zt.seats)){let c=du(n,t);c&&(a=c)}if((!a||!Fn(n,a))&&(a=qc(n,t,e)),a)return e.raid=a,e.raidCd=n.t+2,n.metrics.raidsLaunched++,"raid"}}if(e.ally&&e.raidUrge<=0){let r=k0(n);if(r)return e.raid=r,e.raidUrge=n.rng.rand(24,44),"raid";e.raidUrge=n.rng.rand(8,14)}return"gather"}var Gc=(n,e)=>e.inv.wood+fu(n,e,"wood"),Xc=(n,e)=>fu(n,e,"scrap");function fu(n,e,t){let i=Un(n,e),s=i&&yn(n,i.tcKey);return s?s.store[t]:0}function U0(n,e){let t=Un(n,e),i=t&&yn(n,t.tcKey);if(!i)return!1;let s=n.teams[e.id],r=2;for(let o of n.structures.values())o.owner===e.owner&&r++;for(let o of n.deploys.values())o.owner===e.owner&&o.type==="turret"&&r++;return i.store.wood+i.store.stone+i.store.metal>r*.0075*300}function F0(n,e){let t=0;for(let i of n.structures.values())i.owner===e.owner&&(i.type==="floor"||i.type==="trifloor")&&t++;return t}function qc(n,e,t){let i=null,s=1e18,r=e.bases.find(a=>!a.dead);if(!r)return null;for(let a of n.teams){if(a===e||a.eliminated)continue;let l=a.bases.find(p=>!p.dead);if(!l)continue;let c=yn(n,l.tcKey),f=c?c.store.wood+c.store.stone+c.store.metal:0,h=0;for(let p of n.deploys.values())p.owner===a.owner&&p.type==="turret"&&h++;let d=0;if(e.hard)for(let p of n.units)p.owner===a.owner&&!p.dead&&!p.eliminated&&ae(p.x,p.y,l.hx,l.hy)<720*720&&d++;let u=ae(r.hx,r.hy,l.hx,l.hy)*(1+h*at.RAID_TUR_W)*(1+d*at.RAID_DEF_W)/(1+f*.003);u<s&&(s=u,i=a)}let o=Fn(n,"player");return o&&!n.ghost&&ae(r.hx,r.hy,o.hx,o.hy)<s&&(i="player"),i}function k0(n){let e=null,t=1e18;for(let i of n.teams){if(i.eliminated)continue;let s=i.bases.find(o=>!o.dead);if(!s)continue;let r=ae(n.player.x,n.player.y,s.hx,s.hy);r<t&&(t=r,e=i)}return e}function du(n,e){let t=e.bases.find(r=>!r.dead);if(!t)return null;let i=null,s=3e3*3e3;for(let r of n.teams){if(r===e||r.eliminated)continue;let o=r.bases.find(l=>!l.dead);if(!o)continue;let a=ae(t.hx,t.hy,o.hx,o.hy);a>s&&(s=a,i=r)}return i}function uu(n,e){if(e.disengageT>0||_t(n,e.x,e.y))return null;let t=null,i=at.REACT_R*at.REACT_R,s=n.player,r=(o,a,l,c,f,h)=>{if(f===e.unreach&&n.t<e.unreachT)return;let d=ae(e.x,e.y,o,a);d>=i||h&&d>h*h||_t(n,o,a)||jn(n,e.x,e.y,o,a)||(i=d,t={x:o,y:a,vx:l,vy:c,ref:f})};!e.ally&&!s.dead&&!s.inCopter&&!n.ghost&&r(s.x,s.y,s.vx,s.vy,s);for(let o of n.units)o.owner===e.owner||o.dead||o.flying||o.eliminated||r(o.x,o.y,o.vx,o.vy,o);for(let o of n.animals)!o.dead&&o.aggro&&r(o.x,o.y,o.vx,o.vy,o,360);for(let o of n.guards)o.dead||r(o.x,o.y,0,0,o,480);return t}function Yc(n,e){if(e.disengageT>0||_t(n,e.x,e.y))return null;let t=null,i=430*430,s=n.player,r=(o,a,l,c,f)=>{if(f===e.unreach&&n.t<e.unreachT)return;let h=ae(e.x,e.y,o,a);h>=i||_t(n,o,a)||jn(n,e.x,e.y,o,a)||(i=h,t={x:o,y:a,vx:l,vy:c,ref:f})};!e.ally&&!s.dead&&!s.inCopter&&!n.ghost&&r(s.x,s.y,s.vx,s.vy,s);for(let o of n.units)o.owner===e.owner||o.dead||o.flying||o.eliminated||r(o.x,o.y,o.vx,o.vy,o);for(let o of n.guards)o.dead||r(o.x,o.y,0,0,o);return t}function O0(n,e,t,i,s,r){e.defendT+=r;let o=s||e.defTgt;if(!o){e.state="gather";return}let a=e.raid&&Fn(n,e.raid),c=e.inv.wood+e.inv.stone+e.inv.metal>60||e.scrap>20,f=e.hp<e.max*.2;if((e.hp<e.max*(c?.45:.28)&&!a||f)&&!e.endgame&&!e.retreat&&n.rng.chance(c?.05:.02)&&(e.retreat=!0),e.retreat)if(e.hp>=e.max*.85||e.defendT>9)e.retreat=!1;else{e.disengageT=Math.max(e.disengageT,2.5),Nt(n,e.x,e.y,o.x,o.y)||kr(n,e,o,r),(kt(n,e,e.hx+e.lane,e.hy+e.hoff,r)==="arrived"||J(e.x,e.y,e.hx,e.hy)<64*1.5)&&(e.retreat=!1,e.state="return");return}gu(n,e,o,r),Q0(n,e,o);let d=a?2.2:7;e.defendT>d&&(a?e.state="raid":(e.disengageT=6,e.state="gather"),e.defendT=0)}function B0(n,e,t,i,s){e.wasRaid=!0,e.act="raid";let r=Fn(n,e.raid);if(!r){e.wasRaid=!1,e.state="return";return}let o=yn(n,r.tcKey);if(!o){e.wasRaid=!1,e.state="return";return}if(e.rockets<=0&&e.satchels<=0&&!e.endgame){e.raid=null,e.wasRaid=!1;let m=e.inv.wood+e.inv.stone+e.inv.metal;e.state=e.scrap>=8||m>=100?"trade":"gather";return}if(!e.aboard&&J(e.x,e.y,e.hx,e.hy)<600&&J(r.hx,r.hy,e.hx,e.hy)>2800){let m=n.transports.find(g=>g.owner===e.owner&&!g.destroyed&&(g.state==="idle"||g.state==="board")&&g.riders.length<zt.seats);if(m){if(J(e.x,e.y,m.x,m.y)<70){_d(n,e,m);return}kt(n,e,m.x,m.y,s);return}}let a=J(e.x,e.y,r.hx,r.hy),c=n.units.filter(m=>m.owner===e.owner&&m.state==="raid"&&m.raid===e.raid&&!m.dead&&ae(m.x,m.y,r.hx,r.hy)<560*560).length>=2||e.endgame||e.ally;if(e.stagedFor!==e.raid&&(e.staged=!1,e.stagedFor=e.raid),a<700?e.staged=!0:a>1600&&(e.staged=!1),!e.staged){let m=Math.atan2(e.hy-r.hy,e.hx-r.hx),g=(e.id%5-2)*70+e.lane*2,y=r.hx+Math.cos(m)*540+Math.cos(m+Math.PI/2)*g,w=r.hy+Math.sin(m)*540+Math.sin(m+Math.PI/2)*g;kt(n,e,y,w,s)==="stuck"&&(e.raidCd=n.t+8,e.raid=null,e.wasRaid=!1,e.state="gather");return}if(c&&a<(e.endgame?420:300)&&!Nt(n,e.x,e.y,r.hx,r.hy)){Cn(e,r.hx,r.hy,s),o.hp-=(e.endgame?140:e.hard?24:14)*s,o.hitT=n.t,n.rng.chance(.2)&&n.particles.push({x:r.hx+n.rng.rand(-10,10),y:r.hy+n.rng.rand(-10,10),vx:n.rng.rand(-40,40),vy:n.rng.rand(-60,-20),life:.4,max:.4,r:2,col:"#caa24a"}),o.hp<=0&&Cc(n,r.tcKey,o,e.owner);return}let f=z0(n,e,r),h=null,d=null,u=!1;if(f)h=f.c,d=f.key;else{let m=H0(n,e,t,r);m?(h=m.c,d=m.key,u=m.door):h={x:r.hx,y:r.hy}}let p=J(e.x,e.y,h.x,h.y);if(e.rockets>0){if(a>=at.ROCKET_MIN&&a<460&&!Nt(n,e.x,e.y,r.hx,r.hy)){Cn(e,r.hx,r.hy,s),Wc(n,e,r.hx,r.hy,2.2);return}if(p>380){let m=Math.atan2(e.y-h.y,e.x-h.x),g=(e.id%5-2)*70,y=h.x+Math.cos(m)*320+Math.cos(m+Math.PI/2)*g,w=h.y+Math.sin(m)*320+Math.sin(m+Math.PI/2)*g;kt(n,e,y,w,s),iu(n,e,r)}else if(p<at.ROCKET_MIN){let m=Math.atan2(e.y-h.y,e.x-h.x),g=e.x+Math.cos(m)*120*s,y=e.y+Math.sin(m)*120*s;yt(n,g,y,13,{passOwner:e.owner})||(e.x=g,e.y=y)}else Cn(e,h.x,h.y,s),Wc(n,e,h.x,h.y,2.2);return}if(e.satchels>0&&c){p<100?e.rkCd<=0&&(n.satchels.push({x:h.x,y:h.y,t:2,from:e.owner}),e.satchels--,e.rkCd=2.6,He(n,e.x,e.y,"satchel!","#ffd0a0")):(kt(n,e,h.x,h.y,s,{arrive:80}),iu(n,e,r));return}let x=Yc(n,e);if(x)J(e.x,e.y,x.x,x.y)<480?(Cn(e,x.x,x.y,s),kr(n,e,x,s)):kt(n,e,x.x,x.y,s);else if(c){let m=Math.atan2(e.hy-r.hy,e.hx-r.hx),g=(e.id%5-2)*64;kt(n,e,h.x+Math.cos(m)*380+Math.cos(m+Math.PI/2)*g,h.y+Math.sin(m)*380+Math.sin(m+Math.PI/2)*g,s,{arrive:40})}else if(p<380){let m=Math.atan2(e.y-h.y,e.x-h.x),g=e.x+Math.cos(m)*tu*s,y=e.y+Math.sin(m)*tu*s;yt(n,g,y,13,{passOwner:e.owner})||(e.x=g,e.y=y)}else kt(n,e,h.x,h.y,s,{arrive:340})}function z0(n,e,t){let i=null,s=1e18;for(let[r,o]of n.deploys){if(o.type!=="turret"||o.owner!==t.owner)continue;let[a,l]=r.split(",").map(Number),c=it(a,l),f={1:340,2:380,3:460}[o.tier||1]+60,h=ae(e.x,e.y,c.x,c.y);h<f*f&&!Nt(n,e.x,e.y,c.x,c.y)&&h<s&&(s=h,i={key:r,c})}return i}function H0(n,e,t,i){for(let d of n.units)if(!(d.owner!==e.owner||d.dead||d.raid!==e.raid)&&ae(d.x,d.y,i.hx,i.hy)<760*760&&!Nt(n,d.x,d.y,i.hx,i.hy))return null;let s=t?t.brain:null;if(s&&s.breachKey&&n.t-s.breachT<1.5){let d=n.walls.get(s.breachKey);if(d&&d.hp>0&&!(d.type==="door"&&d.open)){let u=ta(n,s.breachKey,d);return{key:s.breachKey,c:u,door:d.type==="door"}}}let r=0,o=0,a=0;for(let d of n.units)d.owner===e.owner&&d.raid===e.raid&&!d.dead&&(r+=d.x,o+=d.y,a++);a||(r=e.x,o=e.y,a=1),r/=a,o/=a;let l=null,c=1e18,f=!1;for(let[d,u]of n.walls){if(u.owner!==i.owner||u.hp<=0||u.type==="door"&&u.open)continue;let p=ta(n,d,u);if(ae(p.x,p.y,i.hx,i.hy)>Dt*Dt)continue;let x=(J(r,o,p.x,p.y)+J(p.x,p.y,i.hx,i.hy))*(u.type==="door"?.6:1);x<c&&(c=x,l=d,f=u.type==="door")}if(!l)return null;s&&(s.breachKey=l,s.breachT=n.t);let h=n.walls.get(l);return{key:l,c:ta(n,l,h),door:f}}function ta(n,e,t){let i=e.split(","),s=+i[1],r=+i[2];return i[0]==="V"?{x:s*64,y:r*64+64/2}:{x:s*64+64/2,y:r*64}}function iu(n,e,t){let i=null,s=57600,r=!1;for(let[a,l]of n.walls){if(l.owner!==t.owner||l.hp<=0||l.type==="door"&&l.open)continue;let c=ta(n,a,l),f=ae(e.x,e.y,c.x,c.y),h=l.type==="door";(f<s||h&&!r&&f<57600)&&(h||!r)&&(s=f,i=c,r=h)}if(!i||e.rkCd>0)return;let o=J(e.x,e.y,i.x,i.y);e.rockets>0&&o>=at.ROCKET_MIN?(Cn(e,i.x,i.y,1),Wc(n,e,i.x,i.y,2.2)):o<90&&e.satchels>0&&(n.satchels.push({x:i.x,y:i.y,t:3,from:e.owner}),e.satchels--,e.rkCd=4.5)}function V0(n,e,t){e.wasRaid=!1,e.act="return",e.retT+=t;let i=kt(n,e,e.hx+e.lane,e.hy+e.hoff,t,{arrive:64*1.5});if(i==="arrived"){Fr(n,e),e.state="gather",e.retT=0;return}if(i==="stuck"||e.retT>14){let s=e.ally?null:n.teams[e.id],r=s&&Un(n,e);s&&r&&Rr(n,s,r)?i==="stuck"&&Hc(n,e):(Fr(n,e),e.state="gather",e.retT=0)}}function Fr(n,e){if(e.ally){for(let s of["wood","stone","metal"])n.inv[s]+=e.inv[s],e.inv[s]=0;n.inv.scrap+=e.scrap,e.scrap=0;return}let t=Un(n,e),i=t&&yn(n,t.tcKey);if(i){for(let s of["wood","stone","metal"])i.store[s]+=e.inv[s],e.inv[s]=0;i.store.scrap+=e.scrap,e.scrap=0}}function G0(n,e,t,i,s){e.act="trade";let r=n.world.shop;if(!r){e.state="return";return}let o=(e.id>=0?e.id:3)+(e.tradeJitter||0),a=r.x+Math.cos(o*2.39996)*mt*.34,l=r.y+Math.sin(o*2.39996)*mt*.34;if(!e.tradeDone){if(J(e.x,e.y,r.x,r.y)>mt*.55){if(e.copter&&!e.copter.destroyed){su(n,e,a,l,s,mt*.5);return}kt(n,e,a,l,s,{arrive:30})==="stuck"&&(e.tradeCd=n.t+20,e.tradeJitter=(e.tradeJitter||0)+1,e.state="return");return}W0(n,e,t,i),e.tradeDone=!0;return}if(e.flying){su(n,e,e.hx-256,e.hy,s,46)&&(pu(e),e.tradeDone=!1,e.state="return");return}e.tradeDone=!1,e.state="return"}function W0(n,e,t,i){let s=0;for(;e.inv.wood>=100;)e.inv.wood-=100,e.scrap+=6,s+=6;for(;e.inv.stone>=100;)e.inv.stone-=100,e.scrap+=9,s+=9;for(;e.inv.metal>=50;)e.inv.metal-=50,e.scrap+=10,s+=10;s>0&&He(n,e.x,e.y,"+"+s+" scrap","#ffe07a");let r=Un(n,e),o=r&&yn(n,r.tcKey);if(o){if(e.primary)e.scrap+=o.store.scrap,o.store.scrap=0;else if(e.rocketer){let c=Math.max(0,o.store.scrap-100);e.scrap+=c,o.store.scrap-=c}}let a=!1;for(e.primary&&t&&e.scrap>=zt.cost&&!n.transports.some(c=>c.owner===e.owner&&!c.destroyed)&&du(n,t)&&(e.scrap-=zt.cost,yd(n,t,e),a=!0),!e.weak&&e.gun==="pistol"&&e.scrap>=10&&(e.scrap-=10,e.gun=e.shotgun?"shotgun":"rifle",He(n,e.x,e.y,"+"+e.gun,"#bfe3ff"),a=!0),e.hard&&e.gun==="rifle"&&!e.rifleLaser&&e.scrap>=10&&(e.scrap-=10,e.rifleLaser=!0,He(n,e.x,e.y,"+laser","#ff6a6a"),a=!0);e.rockets<2&&e.scrap>=12;)e.scrap-=12,e.rockets++,a=!0;if(e.primary&&e.rockets>=2)for(;e.scrap>=at.WORKER_COST&&jo(n,e);)a=!0;for(;e.rockets<12&&e.scrap>=12;)e.scrap-=12,e.rockets++,a=!0;for(;e.satchels<4&&e.scrap>=8;)e.scrap-=8,e.satchels++,a=!0;if(e.grenades<2&&e.scrap>=8&&(e.scrap-=8,e.grenades++,a=!0),e.hard){for(;e.scrap>=14&&e.bodyArmor<3;)e.scrap-=14,e.bodyArmor++,He(n,e.x,e.y,"+armor","#9fb0c8"),a=!0;for(;e.scrap>=12&&e.facemask<3;)e.scrap-=12,e.facemask++,a=!0;for(;e.scrap>=20&&e.hqm<60;)e.scrap-=14,e.hqm+=10,a=!0}let l=n.units.filter(c=>c.owner===e.owner&&c.copter&&!c.copter.destroyed).length;(!e.copter||e.copter.destroyed)&&!e.aboard&&e.scrap>=at.MINICOPTER_COST&&l<(e.hard?3:2)&&(e.scrap-=at.MINICOPTER_COST,e.copter={x:e.x-128,y:e.y,angle:0,rotor:0,spin:0,vx:0,vy:0,hp:160,max:160,destroyed:!1},He(n,e.x,e.y,"+minicopter","#bfe3ff"),a=!0),a&&He(n,e.x,e.y-16,"resupplied","#bfe3ff")}function su(n,e,t,i,s,r=44){let o=e.copter;if(!o||o.destroyed)return!0;e.flying||(o.x=e.x,o.y=e.y,e.flying=!0,e.flyT=0),e.flyT=(e.flyT||0)+s;let a=J(o.x,o.y,t,i);if(a<r||e.flyT>9)return e.flyT>9&&(o.x=t,o.y=i,o.vx=o.vy=0),e.x=o.x,e.y=o.y,!0;let l=Math.atan2(i-o.y,t-o.x);o.angle=o.angle+ea(o.angle,l)*Math.min(1,s*4),o.rotor+=s*46;let c=a>160?1:Math.max(.12,a/160);o.vx+=Math.cos(o.angle)*ft.accel*c*s,o.vy+=Math.sin(o.angle)*ft.accel*c*s;let f=Math.pow(ft.drag,s);o.vx*=f,o.vy*=f;let h=Math.hypot(o.vx,o.vy);return h>ft.speed&&(o.vx*=ft.speed/h,o.vy*=ft.speed/h),o.x=et(o.x+o.vx*s,ft.r,he.w-ft.r),o.y=et(o.y+o.vy*s,ft.r,he.h-ft.r),e.x=o.x,e.y=o.y,!1}function pu(n){n.copter&&(n.copter.x=n.x,n.copter.y=n.y,n.copter.vx=0,n.copter.vy=0,n.copter.spin=0),n.flying=!1}function X0(n,e,t,i,s){e.wasRaid=!1,e.retT=0;let r=e.inv.wood+e.inv.stone+e.inv.metal,o=J(e.x,e.y,e.hx,e.hy),a=o<200;e.gathering=!1;let l=t&&Un(n,e);if(e.buildDuty&&t&&l){let h=Rr(n,t,l);if(h){if(e.act="build",o>200){kt(n,e,e.hx+e.lane,e.hy+e.hoff,s);return}r>0&&Fr(n,e),Pc(n,t,h,Fs(n,e))&&(He(n,e.x,e.y,"sealed","#9ad06a"),e.maintT=n.t);return}if(a){r>0&&Fr(n,e);let d=Yo(n,t,l);if(d&&id(n,t,d,Fs(n,e))){e.act="build",e.maintT=n.t,He(n,e.x,e.y,"repaired","#9ad06a");return}if(e.expandT<=0&&(e.expandT=n.rng.rand(2.5,6),Qd(n,e))){e.act="build",e.maintT=n.t;return}}}if(a&&t&&l&&((r>100||e.scrap>0)&&Fr(n,e),i.breach&&Pc(n,t,i.breach,Fs(n,e))&&(i.breach=null,i.sealed=!0,e.maintT=n.t,He(n,e.x,e.y,"sealed","#9ad06a"))),e.qRun){let h=n.quarry;if(!h||h.owner===e.owner||n.t>e.qRun.until)e.qRun=null;else{e.act="quarry";let d=Yc(n,e),u=J(e.x,e.y,h.x,h.y);if(d&&u<h.r){Cn(e,d.x,d.y,s,10),kr(n,e,d,s);return}u>h.r*.5&&kt(n,e,h.x,h.y,s,{arrive:h.r*.4})==="stuck"&&(e.qRun=null);return}}if(e.lootRun){let h=e.lootRun,d=n.t<h.until;if(h.kind==="crate"&&(d=d&&!!n.lockedCrate),h.kind==="airdrop"){let u=J(e.x,e.y,h.x,h.y);(u<2200&&n.airdrop||!n.airdrop&&u<480)&&(d=!1)}if(h.kind==="pile"&&(J(e.x,e.y,h.x,h.y)<480?d=!1:n.loot.some(p=>(p.kind==="rocket"||p.kind==="satchel")&&ae(p.x,p.y,h.x,h.y)<300*300)||(d=!1)),!d)e.lootRun=null;else{e.act="loot",h.kind==="crate"&&n.lockedCrate&&J(e.x,e.y,n.lockedCrate.x,n.lockedCrate.y)<=90||kt(n,e,h.x,h.y,s,{arrive:80,speed:170})==="stuck"&&(e.lootRun=null);return}}if(e.lootSkipSet&&n.t>e.lootSkipT&&(e.lootSkipSet=null),e.lootTgt&&(!n.loot.includes(e.lootTgt)||ae(e.x,e.y,e.lootTgt.x,e.lootTgt.y)>560*560)&&(e.lootTgt=null),!e.lootTgt){let h=null,d=520*520;for(let u of n.loot){if(e.lootSkipSet&&e.lootSkipSet.has(u))continue;let p=ae(e.x,e.y,u.x,u.y);p<d&&(d=p,h=u)}e.lootTgt=h}if(e.lootTgt){e.act="loot",(kt(n,e,e.lootTgt.x,e.lootTgt.y,s,{arrive:22,speed:170})==="stuck"||e.directFallback&&e.stuckT>2)&&(e.lootSkipSet||(e.lootSkipSet=new Set),e.lootSkipSet.add(e.lootTgt),e.lootSkipT=n.t+25,e.lootTgt=null);return}if(n.airdrop&&n.t>(e.airdropCd||0)&&ae(e.x,e.y,n.airdrop.x,n.airdrop.gy)<2600*2600){let h=n.airdrop;e.act="airdrop";let d=h.fall<1?h.gy:h.y,u=J(e.x,e.y,h.x,d);if(h.fall>=1&&u<150){Cn(e,h.x,h.y,s,10),e.gunCd<=0&&na(n,e,h.x,h.y);return}if(u>130){kt(n,e,h.x,d,s,{arrive:120,speed:165})==="stuck"&&(e.airdropCd=n.t+25);return}return}if(n.lockedCrate&&!e.buildDuty&&n.t>(e.crateCd||0)&&ae(e.x,e.y,n.lockedCrate.x,n.lockedCrate.y)<1600*1600){let h=n.lockedCrate;if(e.act="crate",J(e.x,e.y,h.x,h.y)>90){kt(n,e,h.x,h.y,s,{arrive:80,speed:165})==="stuck"&&(e.crateCd=n.t+30);return}return}if(!e.endgame){if(e.monRun){let h=Vc(n,e),d=h&&Ur(n,h);if(e.monRunT+=s,!d||r>=340||e.monRunT>12)e.monRun=!1,e.monCd=n.t+n.rng.rand(60,110);else{e.act="monument";let u=K0(n,h);if(u&&ae(e.x,e.y,h.x,h.y)<(h.r+320)*(h.r+320)){J(e.x,e.y,u.x,u.y)>340||Nt(n,e.x,e.y,u.x,u.y)?kt(n,e,u.x,u.y,s,{arrive:300})==="stuck"&&(e.monRun=!1,e.monCd=n.t+30):(Cn(e,u.x,u.y,s,10),kr(n,e,{x:u.x,y:u.y,ref:u},s));return}let p=Ur(n,h);if(p){J(e.x,e.y,p.x,p.y)>120?kt(n,e,p.x,p.y,s,{arrive:110,speed:150})==="stuck"&&(e.monRun=!1,e.monCd=n.t+14):(Cn(e,p.x,p.y,s,10),e.gunCd<=0&&na(n,e,p.x,p.y));return}}}else if(n.t>e.monCd&&r<200){let h=Vc(n,e);h&&Ur(n,h)&&(ae(h.x,h.y,e.hx,e.hy)<2100*2100||ae(h.x,h.y,e.x,e.y)<1300*1300)&&(e.monRun=!0,e.monRunT=0)}}let c=Vc(n,e);c&&ae(e.x,e.y,c.x,c.y)<(c.r+150)*(c.r+150)&&!e.monRun?(e.monStay+=s,e.monStay>10&&(e.monStay=0,e.monCd=n.t+45,e.tgtNode=null)):e.monStay=Math.max(0,e.monStay-2*s);let f=q0(n,e);if(f){mu(n,e,f,s);return}if(c&&Ur(n,c)&&n.t>e.monCd){let h=Ur(n,c);e.act="monument",J(e.x,e.y,h.x,h.y)>120?kt(n,e,h.x,h.y,s,{arrive:110,speed:150})==="stuck"&&(e.monCd=n.t+30):(Cn(e,h.x,h.y,s,10),e.gunCd<=0&&na(n,e,h.x,h.y));return}e.act="roam",J0(n,e,s)}function mu(n,e,t,i){if(J(e.x,e.y,t.x,t.y)>t.r+22){e.act="toNode",kt(n,e,t.x,t.y,i,{arrive:t.r+18})==="stuck"&&((!e.skipSet||n.t>e.skipT)&&(e.skipSet=new Set),e.skipSet.add(t),e.skipT=n.t+10,e.tgtNode=null);return}if(e.act="gather",e.gathering=!0,Cn(e,t.x,t.y,i),e.swing+=i*9,e.think<=0){e.think=.5;let r=Math.min(e.jack?24:8,t.amount);r>0&&(t.amount-=r,t.regen=0,e.inv[t.base]+=r,n.events.push({type:"harvest",x:t.x,y:t.y,kind:t.base}))}}function q0(n,e){if(e.tgtNode){let i=e.tgtNode,s=i.by&&i.by!==e&&!i.by.dead&&n.t-i.byT<3;if(i.amount>0&&!s)return i.by=e,i.byT=n.t,i;e.tgtNode=null}let t=[1400,2800,5600,1e9];for(let i of t){let s=null,r=1e18;for(let o of n.resources){if(o.amount<=0||e.skipSet&&e.skipSet.has(o)&&n.t<e.skipT)continue;let a=ae(o.x,o.y,e.hx,e.hy);if(a<57600||a>i*i||o.by&&o.by!==e&&!o.by.dead&&n.t-o.byT<2.5||n.structures.has(Y0(o.x,o.y)))continue;let l=ae(e.x,e.y,o.x,o.y);l*=Z0(n,e,o)?1:6,l<r&&(r=l,s=o)}if(s)return s.by=e,s.byT=n.t,e.tgtNode=s,s}return null}var Y0=(n,e)=>Math.floor(n/64)+","+Math.floor(e/64);function Z0(n,e,t){return t._losT&&n.t-t._losT<2&&t._losFor===e||(t._los=Yf(n,e.x,e.y,t.x,t.y),t._losT=n.t,t._losFor=e),t._los}function ru(n,e,t){let i=null,s=t*t;for(let r of n.resources){if(r.amount<=0)continue;let o=ae(e.x,e.y,r.x,r.y);o<s&&(s=o,i=r)}return i}function $0(n,e,t,i){let s=null,r=i*i;for(let o of n.resources){if(o.amount<=0||o.base!==t)continue;let a=ae(e.x,e.y,o.x,o.y);a<r&&(r=a,s=o)}return s}function Vc(n,e){let t=null,i=1e18;for(let s of n.world.monuments){if(s.type==="quarry")continue;let r=ae(e.x,e.y,s.x,s.y);r<i&&(i=r,t=s)}return t}function Ur(n,e){for(let t of n.barrels)if(!(t.hp<=0||t.tier!=="mon")&&ae(t.x,t.y,e.x,e.y)<(e.r+220)*(e.r+220))return t;return null}function K0(n,e){let t=null,i=(e.r+280)*(e.r+280);for(let s of n.guards){if(s.dead)continue;let r=ae(s.x,s.y,e.x,e.y);r<i&&(i=r,t=s)}return t}function J0(n,e,t){if(!e.roamX||J(e.x,e.y,e.roamX,e.roamY)<140||n.t>(e.roamT||0))for(let i=0;i<12;i++){let s=n.rng.rand(800,he.w-800),r=n.rng.rand(800,he.h-800);if(!(!n.world.onLand(s,r)||n.world.lakeAt(s,r))){e.roamX=s,e.roamY=r,e.roamT=n.t+n.rng.rand(7,13);break}}e.roamX&&kt(n,e,e.roamX,e.roamY,t,{speed:140,arrive:120})==="stuck"&&(e.roamX=0)}function gu(n,e,t,i){e.hp<e.max*.35&&j0(n,e,t);let s=t.x,r=t.y;if(e.hard&&(t.vx||t.vy)){let l=e.weak?1150:1500,c=Math.min(.7,J(e.x,e.y,t.x,t.y)/l);s+=(t.vx||0)*c,r+=(t.vy||0)*c}let o=J(e.x,e.y,t.x,t.y);if(!Nt(n,e.x,e.y,t.x,t.y)&&!jn(n,e.x,e.y,t.x,t.y)&&o<460){if(Cn(e,s,r,i,10),kr(n,e,{x:s,y:r,ref:t.ref},i),o<140?e.backoff=!0:o>180&&(e.backoff=!1),e.backoff){let l=Math.atan2(e.y-t.y,e.x-t.x),c=e.x+Math.cos(l)*120*i,f=e.y+Math.sin(l)*120*i;yt(n,c,f,13,{passOwner:e.owner})||(e.x=c,e.y=f,e.path=null)}else if(e.regenT>0||e.retaliateT>0){e.strafeT-=i,e.strafeT<=0&&(e.strafeT=at.STRAFE_FLIP,e.strafeS=-e.strafeS);let l=Math.atan2(t.y-e.y,t.x-e.x)+Math.PI/2*e.strafeS,c=e.x+Math.cos(l)*120*i,f=e.y+Math.sin(l)*120*i;yt(n,c,f,13,{passOwner:e.owner})||(e.x=c,e.y=f,e.path=null)}}else kt(n,e,t.x,t.y,i,{arrive:380})==="stuck"&&(e.disengageT=4,e.retaliateT=0,e.defHold=0,e.defTgt=null,e.thCache=null,t.ref&&(e.unreach=t.ref,e.unreachT=n.t+25))}function kr(n,e,t,i){e.gunCd>0||e.flying||e.dead||_t(n,e.x,e.y)||_t(n,t.x,t.y)||Nt(n,e.x,e.y,t.x,t.y)||jn(n,e.x,e.y,t.x,t.y)||na(n,e,t.x,t.y)}function na(n,e,t,i){let s=J(e.x,e.y,t,i),r=Math.atan2(i-e.y,t-e.x);e.angle=r;let o=18;if(e.gun==="shotgun"&&s<420){e.gunCd=.34;for(let a=0;a<6;a++)Rn(n,{x:e.x+Math.cos(r)*o,y:e.y+Math.sin(r)*o,angle:r+n.rng.rand(-.18,.18),speed:1050,dmg:8,from:e.owner,life:.95})}else if(e.gun==="rifle"){e.gunCd=e.hard?.12:.16;let a=e.hard?.02:.055;e.rifleLaser&&(a*=.45),Rn(n,{x:e.x+Math.cos(r)*o,y:e.y+Math.sin(r)*o,angle:r+n.rng.rand(-a,a),speed:1500,dmg:e.hard?13:11,from:e.owner,life:1.6})}else e.gunCd=.3,Rn(n,{x:e.x+Math.cos(r)*o,y:e.y+Math.sin(r)*o,angle:r+n.rng.rand(-.1,.1),speed:1150,dmg:7,from:e.owner,life:1.6});n.events.push({type:"botShot",x:e.x,y:e.y,a:r})}function Wc(n,e,t,i,s){if(e.rkCd>0||e.rockets<=0||J(e.x,e.y,t,i)<at.ROCKET_MIN||_t(n,e.x,e.y))return!1;e.rkCd=s||2.4,e.rockets--;let r=Math.atan2(i-e.y,t-e.x);return Cr(n,e.x+Math.cos(r)*22,e.y+Math.sin(r)*22,r,e.owner),!0}function Q0(n,e,t){if(e.grenades<=0||e.gnCd>0)return;let i=J(e.x,e.y,t.x,t.y);if(i<150||i>380)return;let s=!1,r=n.player;if(!r.dead&&ae(t.x,t.y,r.x,r.y)<4900&&(s=!0),!s){for(let l of n.units)if(!l.dead&&l.owner!==e.owner&&ae(t.x,t.y,l.x,l.y)<4900){s=!0;break}}if(!s)return;e.gnCd=n.rng.rand(5,8),e.grenades--;let o=Math.atan2(t.y-e.y,t.x-e.x),a=Math.min(420,i)*5.4;n.grenades.push({x:e.x+Math.cos(o)*22,y:e.y+Math.sin(o)*22,vx:Math.cos(o)*a*.2,vy:Math.sin(o)*a*.2,t:Is.fuse,from:e.owner,bob:0}),He(n,e.x,e.y,"grenade!","#ffd0a0")}function j0(n,e,t){if(e.fenceCd>0)return;let i=Fs(n,e),s=0;for(let d of i)s+=d.wood||0;if(s<10)return;let r=Math.atan2(t.y-e.y,t.x-e.x),o=e.x+Math.cos(r)*30,a=e.y+Math.sin(r)*30,l=Math.floor(o/64),c=Math.floor(a/64);if(n.structures.has(l+","+c))return;let f=10;for(let d of i){let u=Math.min(f,d.wood||0);if(d.wood-=u,f-=u,f<=0)break}let h=r+Math.PI/2;n.fences.push({x:o,y:a,a:h,owner:e.owner,hp:200,max:200,t:60,x0:o-Math.cos(h)*23,y0:a-Math.sin(h)*23,x1:o+Math.cos(h)*23,y1:a+Math.sin(h)*23}),n.fences.length>120&&n.fences.shift(),n.needFenceRefresh=!0,e.fenceCd=9}function xu(n,e){for(let[o,a]of n.walls)a.type==="door"&&a.open&&a.closeT!==void 0&&n.t>a.closeT&&(a.open=!1,n.nav.stamp++);let t=0;for(let o of n.teams)o.eliminated||(o.bases.some(a=>!a.dead)||n.units.some(a=>a.owner===o.owner&&a.unfounded&&!a.eliminated))&&t++;if(n.aliveBases=t,n.dbSweepT-=e,n.dbSweepT<=0){n.dbSweepT=2;for(let o of n.teams)for(let a of o.bases)!a.dead&&!yn(n,a.tcKey)&&(a.dead=!0),a.dead&&!a.cleared&&(a.cleared=!0,Sc(n,o.owner,a.hx,a.hy))}if(n.aggroT-=e,n.aggroT<=0){let o=n.teams.find(l=>l.owner===n.aggressorOwner);if(o&&!o.eliminated&&o.brain.raidTarget&&Fn(n,o.brain.raidTarget)&&n.units.some(l=>l.owner===o.owner&&!l.dead&&!l.eliminated))n.aggroT=8;else{let l=n.teams.filter(c=>!c.eliminated&&n.units.some(f=>f.owner===c.owner&&f.primary&&!f.eliminated));if(l.length){let c=l[Math.floor(n.rng.next()*l.length)];n.aggressor=c.id,n.aggressorOwner=c.owner}n.aggroT=n.rng.rand(35,55)}}n.roleT-=e;let i=n.roleT<=0;i&&(n.roleT=.4);for(let o of n.teams){if(o.eliminated)continue;let a=o.brain,l=o.bases.filter(M=>!M.dead);if(!l.length)continue;let c=n.units.find(M=>M.owner===o.owner&&M.primary&&!M.eliminated);if(a.statusT-=e,a.statusT<=0){a.statusT=.5;let M=l[0];a.breach=Rr(n,o,M),a.damaged=Yo(n,o,M),a.sealed=!a.breach;let C=2,S=0,P=0;for(let k of n.structures.values())k.owner===o.owner&&(C++,P++);for(let k of n.deploys.values())k.owner===o.owner&&k.type==="turret"&&(C++,S++);let z=Dr(n,o),X=z?z.wood+z.stone+z.metal:0;a.decaying=X<C*yr*150;let D=o.hard?4:o.weak?2:3;a.ready=a.sealed&&S>=D&&X>C*yr*300&&P>=(o.hard?6:4),a.floors=P,a.turrets=S}if(!i)continue;let f=n.units.filter(M=>M.owner===o.owner&&!M.eliminated&&!M.dead&&!M.flying&&!M.unfounded&&!M.aboard),h=(M,C)=>l.some(S=>ae(M,C,S.hx,S.hy)<720*720),d=0,u=0,p=0,x=n.player;!x.dead&&!x.inCopter&&!n.ghost&&h(x.x,x.y)&&(d++,u+=x.x,p+=x.y);for(let M of n.units)M.owner===o.owner||M.dead||M.flying||M.eliminated||h(M.x,M.y)&&(d++,u+=M.x,p+=M.y);let m=!1;for(let M of n.rockets)if(M.from!==o.owner&&h(M.x,M.y)){m=!0;break}if(!m){for(let M of n.satchels)if(M.from!==o.owner&&h(M.x,M.y)){m=!0;break}}a.attackers=d,a.urgent=m,a.attack=d>0||n.units.some(M=>M.raid===o&&M.state==="raid"&&!M.dead),a.aggressor=o.owner===n.aggressorOwner||n.aliveBases<=3;let g=0;if(o.hard)for(let M of n.units)M.owner===o.owner||M.dead||M.eliminated||M.state==="raid"&&M.raid===o&&l.some(C=>ae(M.x,M.y,C.hx,C.hy)<at.TRIPWIRE*at.TRIPWIRE)&&g++;let y=Math.max(d,g),w=m?f.length:y>0?Math.min(y+1,f.length):0;d>0?(u/=d,p/=d):(u=l[0].hx,p=l[0].hy);let E=[...f].sort((M,C)=>ae(M.x,M.y,u,p)-ae(C.x,C.y,u,p));for(let M=0;M<E.length;M++)E[M].defDuty=M<w;let v=Dr(n,o);(!a.sealed||v&&v.wood>=40&&a.floors<(o.hard?49:36))&&(a.buildHoldT=n.t+6);let R=f.filter(M=>!M.defDuty),_=null;n.t<a.buildHoldT&&R.length>=2&&(_=R.find(M=>M.buildDuty)||R.reduce((M,C)=>ae(M.x,M.y,l[0].hx,l[0].hy)<ae(C.x,C.y,l[0].hx,l[0].hy)?M:C,R[0]));for(let M of f)M.buildDuty=M===_;if(m||d>0&&!a.aggressor){a.raidTarget=null;for(let M of f)M.rocketer=!1}else if(a.ready||a.aggressor){let M=0;for(let D of f)M+=D.rockets+D.satchels;let C=f.filter(D=>!D.defDuty&&!D.buildDuty),S=Math.min(n.aliveBases<=4?3:2,C.length),P=C.filter(D=>D.rocketer);for(let D of f)D.rocketer&&(D.defDuty||D.buildDuty)&&(D.rocketer=!1,P=P.filter(k=>k!==D));if(P.length<S){let D=C.filter(k=>!k.rocketer).sort((k,G)=>G.rockets+G.satchels-(k.rockets+k.satchels)||ae(k.x,k.y,l[0].hx,l[0].hy)-ae(G.x,G.y,l[0].hx,l[0].hy));for(let k of D){if(P.length>=S)break;k.rocketer=!0,P.push(k)}}let z=a.aggressor?2:4,X=f.filter(D=>!D.defDuty).length;c&&X>=2&&M>=z?(!a.raidTarget||!Fn(n,a.raidTarget))&&(a.raidTarget=qc(n,o,c)):a.raidTarget=null}else{a.raidTarget=null;for(let M of f)M.rocketer=!1}if(o.hard&&n.t>a.lootCd&&!n.units.some(M=>M.owner===o.owner&&M.lootRun)){let M=null;if(n.lockedCrate)M={x:n.lockedCrate.x,y:n.lockedCrate.y,kind:"crate"};else if(n.airdrop)M={x:n.airdrop.x,y:n.airdrop.gy,kind:"airdrop"};else for(let C of n.loot){if(C.kind!=="rocket"&&C.kind!=="satchel")continue;let S=!1;for(let P of n.teams)if(!(P===o||P.eliminated)&&P.bases.some(z=>!z.dead&&ae(C.x,C.y,z.hx,z.hy)<800*800)){S=!0;break}if(!S){M={x:C.x,y:C.y,kind:"pile"};break}}if(M){let C=n.units.filter(S=>S.owner===o.owner&&!S.dead&&!S.eliminated&&!S.primary&&!S.defDuty&&!S.buildDuty&&!S.rocketer&&!S.monRun&&S.state==="gather").sort((S,P)=>ae(S.x,S.y,M.x,M.y)-ae(P.x,P.y,M.x,M.y))[0];if(C){let S=J(C.x,C.y,M.x,M.y),P=M.kind==="pile"?520:2400;S>P&&S<4500&&(C.lootRun={x:M.x,y:M.y,kind:M.kind,until:n.t+S/at.BOT_SPEED*1.8+(M.kind==="crate"?170:20)},a.lootCd=n.t+45)}}}if(n.quarry&&n.quarry.owner!==o.owner&&n.t>a.qCd&&!n.units.some(M=>M.owner===o.owner&&M.qRun)){let M=n.units.filter(C=>C.owner===o.owner&&!C.dead&&!C.eliminated&&!C.primary&&!C.defDuty&&!C.buildDuty&&!C.rocketer&&!C.monRun&&!C.lootRun&&C.state==="gather").sort((C,S)=>ae(C.x,C.y,n.quarry.x,n.quarry.y)-ae(S.x,S.y,n.quarry.x,n.quarry.y))[0];if(M){let C=J(M.x,M.y,n.quarry.x,n.quarry.y);C<5200&&(M.qRun={until:n.t+C/at.BOT_SPEED*1.8+25},a.qCd=n.t+(o.hard?90:150))}}if(o.hard&&c&&!n.signal&&!n.plane&&!n.airdrop&&n.t>a.sigCd){let M=Dr(n,o);if(c.scrap+(M?M.scrap:0)>=at.SIGNAL_COST+60){let S=l[0];for(let P=0;P<8;P++){let z=P/8*Math.PI*2,X=S.hx+Math.cos(z)*620,D=S.hy+Math.sin(z)*620;if(X<300||D<300||X>he.w-300||D>he.h-300||J(X,D,n.world.shop.x,n.world.shop.y)<mt||!n.world.onLand(X,D)||n.world.lakeAt(X,D))continue;let k=at.SIGNAL_COST,G=Math.min(k,c.scrap);c.scrap-=G,k-=G,k>0&&M&&(M.scrap-=k),Rd(n,X,D),a.sigCd=n.t+n.rng.rand(150,240),He(n,S.hx,S.hy-40,"supply signal!","#c9a0ff");break}}}}for(let o of n.teams)o.eliminated||jd(n,o,e);let s=0,r=null;for(let o of n.teams){if(o.eliminated)continue;let a=0;for(let l of n.units)l.owner===o.owner&&(a+=l.kills);a>s&&(s=a,r=o.id)}if(n.bounty=s>0?r:null,!n.metrics.winner){let o=n.teams.filter(a=>!a.eliminated);o.length===1&&n.teams.length>1&&(n.metrics.winner=o[0].owner,n.metrics.decisiveT=n.t)}}function yu(n){let e=xr;n.t+=e,n.tick++,n.clouds||Oc(n),n.needFenceRefresh&&(n.needFenceRefresh=!1,Xf(n)),Nd(n,e),dd(n,e),qd(n,e),Yd(n,e),ud(n,e),nd(n,e),Td(n,e),Pd(n,e),Md(n,e),bd(n,e),Ed(n,e),Sd(n,e),Cd(n,e),wd(n,e),Id(n,e),cd(n,e),gd(n,e),hd(n,e),fd(n,e),eg(n,e),tg(n,e),n.raidAlarm&&(n.raidAlarm.t-=e,n.raidAlarm.t<=0&&(n.raidAlarm=null)),xu(n,e),vd(n,e);for(let t of n.units)ou(n,t,e);for(let t=n.elims.length-1;t>=0;t--)n.elims[t].t-=e,n.elims[t].t<=0&&n.elims.splice(t,1);od(n,e),md(n,e),Ld(n,e);for(let t=n.particles.length-1;t>=0;t--){let i=n.particles[t],s=Math.pow(.9,e*60);i.vx*=s,i.vy*=s,i.x+=i.vx*e,i.y+=i.vy*e,i.life-=e,i.life<=0&&n.particles.splice(t,1)}for(let t=n.floats.length-1;t>=0;t--){let i=n.floats[t];i.y+=i.vy*e,i.life-=e,i.life<=0&&n.floats.splice(t,1)}for(let t=n.flashes.length-1;t>=0;t--)n.flashes[t].life-=e,n.flashes[t].life<=0&&n.flashes.splice(t,1);for(let t=n.blasts.length-1;t>=0;t--)n.blasts[t].life-=e,n.blasts[t].life<=0&&n.blasts.splice(t,1);n.muzzle&&(n.muzzle.t-=e,n.muzzle.t<=0&&(n.muzzle=null)),n.shake=Math.max(0,n.shake-26*e),n.tip&&(n.tip.t-=e,n.tip.t<=0&&(n.tip=null)),n.events.length>600&&n.events.splice(0,n.events.length-600),n.tick%120===0&&ig(n)}function eg(n,e){for(let t=n.fences.length-1;t>=0;t--){let i=n.fences[t];i.t-=e,i.t<=0&&(n.fences.splice(t,1),n.needFenceRefresh=!0)}}function tg(n,e){for(let t=n.raids.length-1;t>=0;t--)n.raids[t].t-=e,n.raids[t].t<=0&&n.raids.splice(t,1)}function ng(n,e){let t=Math.floor(e.x/64),i=Math.floor(e.y/64);for(let s of["V,"+t+","+i,"V,"+(t+1)+","+i,"H,"+t+","+i,"H,"+t+","+(i+1)]){let r=n.walls.get(s);if(!r||r.hp<=0||r.type==="door"&&r.open||r.owner===e.owner)continue;let o=Rt(s,r);if(gt(e.x,e.y,o[0],o[1],o[2],o[3])<3)return!0}return!1}function ig(n){let e=n.metrics;for(let t of n.units)if(!(t.dead||t.eliminated)&&((!isFinite(t.x)||!isFinite(t.y))&&(e.nan=(e.nan||0)+1,t.x=t.hx,t.y=t.hy),ng(n,t)&&e.wallPhase++,t.stuckT>1.5&&t.state!=="raid")){let i=n.world.lakeAt(t.x,t.y),s="open";if(Math.abs(t.x-t.hx)<460&&Math.abs(t.y-t.hy)<460)s="base";else if(i)s="lake";else for(let r of n.world.monuments)if((t.x-r.x)**2+(t.y-r.y)**2<(r.r+220)**2){s="monument";break}e.regionStuck[s]+=2}if((!isFinite(n.player.x)||!isFinite(n.player.y))&&(e.nan=(e.nan||0)+1,n.player.x=6912,n.player.y=4868),n.t-(e._wlT||0)>=60){e._wlT=n.t;let t={t:Math.round(n.t)};for(let i of n.teams)t[i.owner]=n.units.filter(s=>s.owner===i.owner&&!s.eliminated).length;e.workerLog.push(t)}}var Yu=0,Ih=1,Zu=2;var _o=1,$u=2,cr=3,Ai=0,Mn=1,Bn=2,ci=0,Zi=1,Di=2,Ph=3,Lh=4,Ku=5;var $i=100,Ju=101,Qu=102,ju=103,ep=104,tp=200,np=201,ip=202,sp=203,Ia=204,Pa=205,rp=206,op=207,ap=208,lp=209,cp=210,hp=211,fp=212,dp=213,up=214,La=0,Da=1,Na=2,bs=3,Ua=4,Fa=5,ka=6,Oa=7,dl=0,pp=1,mp=2,Zn=0,Dh=1,Nh=2,Uh=3,Fh=4,kh=5,Oh=6,Bh=7;var zh=300,ss=301,Ts=302,ul=303,pl=304,vo=306,Ba=1e3,ni=1001,za=1002,an=1003,gp=1004;var Mo=1005;var hn=1006,ml=1007;var hi=1008;var Tn=1009,Hh=1010,Vh=1011,hr=1012,gl=1013,$n=1014,zn=1015,fi=1016,xl=1017,yl=1018,fr=1020,Gh=35902,Wh=35899,Xh=1021,qh=1022,Hn=1023,ii=1026,rs=1027,_l=1028,vl=1029,os=1030,Ml=1031;var bl=1033,bo=33776,wo=33777,To=33778,Eo=33779,wl=35840,Tl=35841,El=35842,Al=35843,Rl=36196,Cl=37492,Sl=37496,Il=37488,Pl=37489,Ao=37490,Ll=37491,Dl=37808,Nl=37809,Ul=37810,Fl=37811,kl=37812,Ol=37813,Bl=37814,zl=37815,Hl=37816,Vl=37817,Gl=37818,Wl=37819,Xl=37820,ql=37821,Yl=36492,Zl=36494,$l=36495,Kl=36283,Jl=36284,Ro=36285,Ql=36286;var Yr=2300,Ha=2301,Sa=2302,_h=2303,vh=2400,Mh=2401,bh=2402;var xp=3200;var jl=0,yp=1,Ni="",cn="srgb",Zr="srgb-linear",$r="linear",vt="srgb";var Ms=7680;var wh=519,_p=512,vp=513,Mp=514,ec=515,bp=516,wp=517,tc=518,Tp=519,Va=35044;var Yh="300 es",Yn=2e3,tr=2001;function sg(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function rg(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Kr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Ep(){let n=Kr("canvas");return n.style.display="block",n}var _u={},nr=null;function Jr(...n){let e="THREE."+n.shift();nr?nr("log",e,...n):console.log(e,...n)}function Ap(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function qe(...n){n=Ap(n);let e="THREE."+n.shift();if(nr)nr("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Xe(...n){n=Ap(n);let e="THREE."+n.shift();if(nr)nr("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Ga(...n){let e=n.join(" ");e in _u||(_u[e]=!0,qe(...n))}function Rp(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var Cp={[La]:Da,[Na]:ka,[Ua]:Oa,[bs]:Fa,[Da]:La,[ka]:Na,[Oa]:Ua,[Fa]:bs},si=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Zc=Math.PI/180,Wa=180/Math.PI;function Yi(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(un[n&255]+un[n>>8&255]+un[n>>16&255]+un[n>>24&255]+"-"+un[e&255]+un[e>>8&255]+"-"+un[e>>16&15|64]+un[e>>24&255]+"-"+un[t&63|128]+un[t>>8&255]+"-"+un[t>>16&255]+un[t>>24&255]+un[i&255]+un[i>>8&255]+un[i>>16&255]+un[i>>24&255]).toLowerCase()}function ht(n,e,t){return Math.max(e,Math.min(t,n))}function og(n,e){return(n%e+e)%e}function $c(n,e,t){return(1-t)*n+t*e}function ti(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Tt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var $e=class n{static{n.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ht(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ht(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ri=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],f=i[s+2],h=i[s+3],d=r[o+0],u=r[o+1],p=r[o+2],x=r[o+3];if(h!==x||l!==d||c!==u||f!==p){let m=l*d+c*u+f*p+h*x;m<0&&(d=-d,u=-u,p=-p,x=-x,m=-m);let g=1-a;if(m<.9995){let y=Math.acos(m),w=Math.sin(y);g=Math.sin(g*y)/w,a=Math.sin(a*y)/w,l=l*g+d*a,c=c*g+u*a,f=f*g+p*a,h=h*g+x*a}else{l=l*g+d*a,c=c*g+u*a,f=f*g+p*a,h=h*g+x*a;let y=1/Math.sqrt(l*l+c*c+f*f+h*h);l*=y,c*=y,f*=y,h*=y}}e[t]=l,e[t+1]=c,e[t+2]=f,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],f=i[s+3],h=r[o],d=r[o+1],u=r[o+2],p=r[o+3];return e[t]=a*p+f*h+l*u-c*d,e[t+1]=l*p+f*d+c*h-a*u,e[t+2]=c*p+f*u+a*d-l*h,e[t+3]=f*p-a*h-l*d-c*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),f=a(s/2),h=a(r/2),d=l(i/2),u=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=d*f*h+c*u*p,this._y=c*u*h-d*f*p,this._z=c*f*p+d*u*h,this._w=c*f*h-d*u*p;break;case"YXZ":this._x=d*f*h+c*u*p,this._y=c*u*h-d*f*p,this._z=c*f*p-d*u*h,this._w=c*f*h+d*u*p;break;case"ZXY":this._x=d*f*h-c*u*p,this._y=c*u*h+d*f*p,this._z=c*f*p+d*u*h,this._w=c*f*h-d*u*p;break;case"ZYX":this._x=d*f*h-c*u*p,this._y=c*u*h+d*f*p,this._z=c*f*p-d*u*h,this._w=c*f*h+d*u*p;break;case"YZX":this._x=d*f*h+c*u*p,this._y=c*u*h+d*f*p,this._z=c*f*p-d*u*h,this._w=c*f*h-d*u*p;break;case"XZY":this._x=d*f*h-c*u*p,this._y=c*u*h-d*f*p,this._z=c*f*p+d*u*h,this._w=c*f*h+d*u*p;break;default:qe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],f=t[6],h=t[10],d=i+a+h;if(d>0){let u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(f-l)*u,this._y=(r-c)*u,this._z=(o-s)*u}else if(i>a&&i>h){let u=2*Math.sqrt(1+i-a-h);this._w=(f-l)/u,this._x=.25*u,this._y=(s+o)/u,this._z=(r+c)/u}else if(a>h){let u=2*Math.sqrt(1+a-i-h);this._w=(r-c)/u,this._x=(s+o)/u,this._y=.25*u,this._z=(l+f)/u}else{let u=2*Math.sqrt(1+h-i-a);this._w=(o-s)/u,this._x=(r+c)/u,this._y=(l+f)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ht(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,f=t._w;return this._x=i*f+o*a+s*c-r*l,this._y=s*f+o*l+r*a-i*c,this._z=r*f+o*c+i*l-s*a,this._w=o*f-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),f=Math.sin(c);l=Math.sin(l*c)/f,t=Math.sin(t*c)/f,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},B=class n{static{n.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(vu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(vu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),f=2*(a*t-r*s),h=2*(r*i-o*t);return this.x=t+l*c+o*h-a*f,this.y=i+l*f+a*c-r*h,this.z=s+l*h+r*f-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this.z=ht(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this.z=ht(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ht(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Kc.copy(this).projectOnVector(e),this.sub(Kc)}reflect(e){return this.sub(Kc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ht(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Kc=new B,vu=new ri,Je=class n{static{n.prototype.isMatrix3=!0}constructor(e,t,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let f=this.elements;return f[0]=e,f[1]=s,f[2]=a,f[3]=t,f[4]=r,f[5]=l,f[6]=i,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],f=i[4],h=i[7],d=i[2],u=i[5],p=i[8],x=s[0],m=s[3],g=s[6],y=s[1],w=s[4],E=s[7],v=s[2],b=s[5],R=s[8];return r[0]=o*x+a*y+l*v,r[3]=o*m+a*w+l*b,r[6]=o*g+a*E+l*R,r[1]=c*x+f*y+h*v,r[4]=c*m+f*w+h*b,r[7]=c*g+f*E+h*R,r[2]=d*x+u*y+p*v,r[5]=d*m+u*w+p*b,r[8]=d*g+u*E+p*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8];return t*o*f-t*a*c-i*r*f+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],h=f*o-a*c,d=a*l-f*r,u=c*r-o*l,p=t*h+i*d+s*u;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return e[0]=h*x,e[1]=(s*c-f*i)*x,e[2]=(a*i-s*o)*x,e[3]=d*x,e[4]=(f*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=u*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Jc.makeScale(e,t)),this}rotate(e){return this.premultiply(Jc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Jc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Jc=new Je,Mu=new Je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bu=new Je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ag(){let n={enabled:!0,workingColorSpace:Zr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===vt&&(s.r=Ei(s.r),s.g=Ei(s.g),s.b=Ei(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===vt&&(s.r=er(s.r),s.g=er(s.g),s.b=er(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ni?$r:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ga("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ga("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Zr]:{primaries:e,whitePoint:i,transfer:$r,toXYZ:Mu,fromXYZ:bu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:cn},outputColorSpaceConfig:{drawingBufferColorSpace:cn}},[cn]:{primaries:e,whitePoint:i,transfer:vt,toXYZ:Mu,fromXYZ:bu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:cn}}}),n}var ct=ag();function Ei(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function er(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var ks,Xa=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ks===void 0&&(ks=Kr("canvas")),ks.width=e.width,ks.height=e.height;let s=ks.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=ks}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Kr("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ei(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ei(t[i]/255)*255):t[i]=Ei(t[i]);return{data:t,width:e.width,height:e.height}}else return qe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},lg=0,ir=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:lg++}),this.uuid=Yi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Qc(s[o].image)):r.push(Qc(s[o]))}else r=Qc(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Qc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Xa.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(qe("Texture: Unable to serialize Texture."),{})}var cg=0,jc=new B,vn=class n extends si{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=ni,s=ni,r=hn,o=hi,a=Hn,l=Tn,c=n.DEFAULT_ANISOTROPY,f=Ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cg++}),this.uuid=Yi(),this.name="",this.source=new ir(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(jc).x}get height(){return this.source.getSize(jc).y}get depth(){return this.source.getSize(jc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){qe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){qe(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==zh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ba:e.x=e.x-Math.floor(e.x);break;case ni:e.x=e.x<0?0:1;break;case za:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ba:e.y=e.y-Math.floor(e.y);break;case ni:e.y=e.y<0?0:1;break;case za:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};vn.DEFAULT_IMAGE=null;vn.DEFAULT_MAPPING=zh;vn.DEFAULT_ANISOTROPY=1;var Ht=class n{static{n.prototype.isVector4=!0}constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],f=l[4],h=l[8],d=l[1],u=l[5],p=l[9],x=l[2],m=l[6],g=l[10];if(Math.abs(f-d)<.01&&Math.abs(h-x)<.01&&Math.abs(p-m)<.01){if(Math.abs(f+d)<.1&&Math.abs(h+x)<.1&&Math.abs(p+m)<.1&&Math.abs(c+u+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(c+1)/2,E=(u+1)/2,v=(g+1)/2,b=(f+d)/4,R=(h+x)/4,_=(p+m)/4;return w>E&&w>v?w<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(w),s=b/i,r=R/i):E>v?E<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),i=b/s,r=_/s):v<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(v),i=R/r,s=_/r),this.set(i,s,r,t),this}let y=Math.sqrt((m-p)*(m-p)+(h-x)*(h-x)+(d-f)*(d-f));return Math.abs(y)<.001&&(y=1),this.x=(m-p)/y,this.y=(h-x)/y,this.z=(d-f)/y,this.w=Math.acos((c+u+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this.z=ht(this.z,e.z,t.z),this.w=ht(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this.z=ht(this.z,e,t),this.w=ht(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ht(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},qa=class extends si{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Ht(0,0,e,t),this.scissorTest=!1,this.viewport=new Ht(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:i.depth},r=new vn(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:hn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new ir(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}},Pn=class extends qa{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Qr=class extends vn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ya=class extends vn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Mt=class n{static{n.prototype.isMatrix4=!0}constructor(e,t,i,s,r,o,a,l,c,f,h,d,u,p,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,f,h,d,u,p,x,m)}set(e,t,i,s,r,o,a,l,c,f,h,d,u,p,x,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=f,g[10]=h,g[14]=d,g[3]=u,g[7]=p,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();let t=this.elements,i=e.elements,s=1/Os.setFromMatrixColumn(e,0).length(),r=1/Os.setFromMatrixColumn(e,1).length(),o=1/Os.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),f=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let d=o*f,u=o*h,p=a*f,x=a*h;t[0]=l*f,t[4]=-l*h,t[8]=c,t[1]=u+p*c,t[5]=d-x*c,t[9]=-a*l,t[2]=x-d*c,t[6]=p+u*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*f,u=l*h,p=c*f,x=c*h;t[0]=d+x*a,t[4]=p*a-u,t[8]=o*c,t[1]=o*h,t[5]=o*f,t[9]=-a,t[2]=u*a-p,t[6]=x+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*f,u=l*h,p=c*f,x=c*h;t[0]=d-x*a,t[4]=-o*h,t[8]=p+u*a,t[1]=u+p*a,t[5]=o*f,t[9]=x-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*f,u=o*h,p=a*f,x=a*h;t[0]=l*f,t[4]=p*c-u,t[8]=d*c+x,t[1]=l*h,t[5]=x*c+d,t[9]=u*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,u=o*c,p=a*l,x=a*c;t[0]=l*f,t[4]=x-d*h,t[8]=p*h+u,t[1]=h,t[5]=o*f,t[9]=-a*f,t[2]=-c*f,t[6]=u*h+p,t[10]=d-x*h}else if(e.order==="XZY"){let d=o*l,u=o*c,p=a*l,x=a*c;t[0]=l*f,t[4]=-h,t[8]=c*f,t[1]=d*h+x,t[5]=o*f,t[9]=u*h-p,t[2]=p*h-u,t[6]=a*f,t[10]=x*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(hg,e,fg)}lookAt(e,t,i){let s=this.elements;return Sn.subVectors(e,t),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),Hi.crossVectors(i,Sn),Hi.lengthSq()===0&&(Math.abs(i.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),Hi.crossVectors(i,Sn)),Hi.normalize(),ia.crossVectors(Sn,Hi),s[0]=Hi.x,s[4]=ia.x,s[8]=Sn.x,s[1]=Hi.y,s[5]=ia.y,s[9]=Sn.y,s[2]=Hi.z,s[6]=ia.z,s[10]=Sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],f=i[1],h=i[5],d=i[9],u=i[13],p=i[2],x=i[6],m=i[10],g=i[14],y=i[3],w=i[7],E=i[11],v=i[15],b=s[0],R=s[4],_=s[8],M=s[12],C=s[1],S=s[5],P=s[9],z=s[13],X=s[2],D=s[6],k=s[10],G=s[14],re=s[3],L=s[7],V=s[11],ne=s[15];return r[0]=o*b+a*C+l*X+c*re,r[4]=o*R+a*S+l*D+c*L,r[8]=o*_+a*P+l*k+c*V,r[12]=o*M+a*z+l*G+c*ne,r[1]=f*b+h*C+d*X+u*re,r[5]=f*R+h*S+d*D+u*L,r[9]=f*_+h*P+d*k+u*V,r[13]=f*M+h*z+d*G+u*ne,r[2]=p*b+x*C+m*X+g*re,r[6]=p*R+x*S+m*D+g*L,r[10]=p*_+x*P+m*k+g*V,r[14]=p*M+x*z+m*G+g*ne,r[3]=y*b+w*C+E*X+v*re,r[7]=y*R+w*S+E*D+v*L,r[11]=y*_+w*P+E*k+v*V,r[15]=y*M+w*z+E*G+v*ne,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],f=e[2],h=e[6],d=e[10],u=e[14],p=e[3],x=e[7],m=e[11],g=e[15],y=l*u-c*d,w=a*u-c*h,E=a*d-l*h,v=o*u-c*f,b=o*d-l*f,R=o*h-a*f;return t*(x*y-m*w+g*E)-i*(p*y-m*v+g*b)+s*(p*w-x*v+g*R)-r*(p*E-x*b+m*R)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],h=e[9],d=e[10],u=e[11],p=e[12],x=e[13],m=e[14],g=e[15],y=t*a-i*o,w=t*l-s*o,E=t*c-r*o,v=i*l-s*a,b=i*c-r*a,R=s*c-r*l,_=f*x-h*p,M=f*m-d*p,C=f*g-u*p,S=h*m-d*x,P=h*g-u*x,z=d*g-u*m,X=y*z-w*P+E*S+v*C-b*M+R*_;if(X===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/X;return e[0]=(a*z-l*P+c*S)*D,e[1]=(s*P-i*z-r*S)*D,e[2]=(x*R-m*b+g*v)*D,e[3]=(d*b-h*R-u*v)*D,e[4]=(l*C-o*z-c*M)*D,e[5]=(t*z-s*C+r*M)*D,e[6]=(m*E-p*R-g*w)*D,e[7]=(f*R-d*E+u*w)*D,e[8]=(o*P-a*C+c*_)*D,e[9]=(i*C-t*P-r*_)*D,e[10]=(p*b-x*E+g*y)*D,e[11]=(h*E-f*b-u*y)*D,e[12]=(a*M-o*S-l*_)*D,e[13]=(t*S-i*M+s*_)*D,e[14]=(x*w-p*v-m*y)*D,e[15]=(f*v-h*w+d*y)*D,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,f=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,f*a+i,f*l-s*o,0,c*l-s*a,f*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,f=o+o,h=a+a,d=r*c,u=r*f,p=r*h,x=o*f,m=o*h,g=a*h,y=l*c,w=l*f,E=l*h,v=i.x,b=i.y,R=i.z;return s[0]=(1-(x+g))*v,s[1]=(u+E)*v,s[2]=(p-w)*v,s[3]=0,s[4]=(u-E)*b,s[5]=(1-(d+g))*b,s[6]=(m+y)*b,s[7]=0,s[8]=(p+w)*R,s[9]=(m-y)*R,s[10]=(1-(d+x))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinant();if(r===0)return i.set(1,1,1),t.identity(),this;let o=Os.set(s[0],s[1],s[2]).length(),a=Os.set(s[4],s[5],s[6]).length(),l=Os.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Wn.copy(this);let c=1/o,f=1/a,h=1/l;return Wn.elements[0]*=c,Wn.elements[1]*=c,Wn.elements[2]*=c,Wn.elements[4]*=f,Wn.elements[5]*=f,Wn.elements[6]*=f,Wn.elements[8]*=h,Wn.elements[9]*=h,Wn.elements[10]*=h,t.setFromRotationMatrix(Wn),i.x=o,i.y=a,i.z=l,this}makePerspective(e,t,i,s,r,o,a=Yn,l=!1){let c=this.elements,f=2*r/(t-e),h=2*r/(i-s),d=(t+e)/(t-e),u=(i+s)/(i-s),p,x;if(l)p=r/(o-r),x=o*r/(o-r);else if(a===Yn)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===tr)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=f,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Yn,l=!1){let c=this.elements,f=2/(t-e),h=2/(i-s),d=-(t+e)/(t-e),u=-(i+s)/(i-s),p,x;if(l)p=1/(o-r),x=o/(o-r);else if(a===Yn)p=-2/(o-r),x=-(o+r)/(o-r);else if(a===tr)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=f,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=u,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Os=new B,Wn=new Mt,hg=new B(0,0,0),fg=new B(1,1,1),Hi=new B,ia=new B,Sn=new B,wu=new Mt,Tu=new ri,Ri=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],f=s[9],h=s[2],d=s[6],u=s[10];switch(t){case"XYZ":this._y=Math.asin(ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,u),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ht(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(ht(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,u),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ht(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ht(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-f,u),this._y=0);break;default:qe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return wu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Tu.setFromEuler(this),this.setFromQuaternion(Tu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ri.DEFAULT_ORDER="XYZ";var sr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},dg=0,Eu=new B,Bs=new ri,_i=new Mt,sa=new B,Or=new B,ug=new B,pg=new ri,Au=new B(1,0,0),Ru=new B(0,1,0),Cu=new B(0,0,1),Su={type:"added"},mg={type:"removed"},zs={type:"childadded",child:null},eh={type:"childremoved",child:null},Qt=class n extends si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dg++}),this.uuid=Yi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new B,t=new Ri,i=new ri,s=new B(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Mt},normalMatrix:{value:new Je}}),this.matrix=new Mt,this.matrixWorld=new Mt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Bs.setFromAxisAngle(e,t),this.quaternion.multiply(Bs),this}rotateOnWorldAxis(e,t){return Bs.setFromAxisAngle(e,t),this.quaternion.premultiply(Bs),this}rotateX(e){return this.rotateOnAxis(Au,e)}rotateY(e){return this.rotateOnAxis(Ru,e)}rotateZ(e){return this.rotateOnAxis(Cu,e)}translateOnAxis(e,t){return Eu.copy(e).applyQuaternion(this.quaternion),this.position.add(Eu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Au,e)}translateY(e){return this.translateOnAxis(Ru,e)}translateZ(e){return this.translateOnAxis(Cu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_i.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?sa.copy(e):sa.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Or.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_i.lookAt(Or,sa,this.up):_i.lookAt(sa,Or,this.up),this.quaternion.setFromRotationMatrix(_i),s&&(_i.extractRotation(s.matrixWorld),Bs.setFromRotationMatrix(_i),this.quaternion.premultiply(Bs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Xe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Su),zs.child=e,this.dispatchEvent(zs),zs.child=null):Xe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(mg),eh.child=e,this.dispatchEvent(eh),eh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_i.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_i.multiply(e.parent.matrixWorld)),e.applyMatrix4(_i),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Su),zs.child=e,this.dispatchEvent(zs),zs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Or,e,ug),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Or,pg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),f=o(e.images),h=o(e.shapes),d=o(e.skeletons),u=o(e.animations),p=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),u.length>0&&(i.animations=u),p.length>0&&(i.nodes=p)}return i.object=s,i;function o(a){let l=[];for(let c in a){let f=a[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Qt.DEFAULT_UP=new B(0,1,0);Qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ut=class extends Qt{constructor(){super(),this.isGroup=!0,this.type="Group"}},gg={type:"move"},rr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ut,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ut,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ut,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,i),g=this._getHandJoint(c,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let f=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=f.position.distanceTo(h.position),u=.02,p=.005;c.inputState.pinching&&d>u+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=u-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(gg)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new ut;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Sp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vi={h:0,s:0,l:0},ra={h:0,s:0,l:0};function th(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var tt=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=cn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=ct.workingColorSpace){return this.r=e,this.g=t,this.b=i,ct.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=ct.workingColorSpace){if(e=og(e,1),t=ht(t,0,1),i=ht(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=th(o,r,e+1/3),this.g=th(o,r,e),this.b=th(o,r,e-1/3)}return ct.colorSpaceToWorking(this,s),this}setStyle(e,t=cn){function i(r){r!==void 0&&parseFloat(r)<1&&qe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:qe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);qe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=cn){let i=Sp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):qe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ei(e.r),this.g=Ei(e.g),this.b=Ei(e.b),this}copyLinearToSRGB(e){return this.r=er(e.r),this.g=er(e.g),this.b=er(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=cn){return ct.workingToColorSpace(pn.copy(this),e),Math.round(ht(pn.r*255,0,255))*65536+Math.round(ht(pn.g*255,0,255))*256+Math.round(ht(pn.b*255,0,255))}getHexString(e=cn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ct.workingColorSpace){ct.workingToColorSpace(pn.copy(this),t);let i=pn.r,s=pn.g,r=pn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,f=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=f<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,t=ct.workingColorSpace){return ct.workingToColorSpace(pn.copy(this),t),e.r=pn.r,e.g=pn.g,e.b=pn.b,e}getStyle(e=cn){ct.workingToColorSpace(pn.copy(this),e);let t=pn.r,i=pn.g,s=pn.b;return e!==cn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Vi),this.setHSL(Vi.h+e,Vi.s+t,Vi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Vi),e.getHSL(ra);let i=$c(Vi.h,ra.h,t),s=$c(Vi.s,ra.s,t),r=$c(Vi.l,ra.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},pn=new tt;tt.NAMES=Sp;var jr=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new tt(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},eo=class extends Qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ri,this.environmentIntensity=1,this.environmentRotation=new Ri,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Xn=new B,vi=new B,nh=new B,Mi=new B,Hs=new B,Vs=new B,Iu=new B,ih=new B,sh=new B,rh=new B,oh=new Ht,ah=new Ht,lh=new Ht,Ti=class n{constructor(e=new B,t=new B,i=new B){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Xn.subVectors(e,t),s.cross(Xn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Xn.subVectors(s,t),vi.subVectors(i,t),nh.subVectors(e,t);let o=Xn.dot(Xn),a=Xn.dot(vi),l=Xn.dot(nh),c=vi.dot(vi),f=vi.dot(nh),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let d=1/h,u=(c*l-a*f)*d,p=(o*f-a*l)*d;return r.set(1-u-p,p,u)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Mi)===null?!1:Mi.x>=0&&Mi.y>=0&&Mi.x+Mi.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Mi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Mi.x),l.addScaledVector(o,Mi.y),l.addScaledVector(a,Mi.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return oh.setScalar(0),ah.setScalar(0),lh.setScalar(0),oh.fromBufferAttribute(e,t),ah.fromBufferAttribute(e,i),lh.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(oh,r.x),o.addScaledVector(ah,r.y),o.addScaledVector(lh,r.z),o}static isFrontFacing(e,t,i,s){return Xn.subVectors(i,t),vi.subVectors(e,t),Xn.cross(vi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xn.subVectors(this.c,this.b),vi.subVectors(this.a,this.b),Xn.cross(vi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;Hs.subVectors(s,i),Vs.subVectors(r,i),ih.subVectors(e,i);let l=Hs.dot(ih),c=Vs.dot(ih);if(l<=0&&c<=0)return t.copy(i);sh.subVectors(e,s);let f=Hs.dot(sh),h=Vs.dot(sh);if(f>=0&&h<=f)return t.copy(s);let d=l*h-f*c;if(d<=0&&l>=0&&f<=0)return o=l/(l-f),t.copy(i).addScaledVector(Hs,o);rh.subVectors(e,r);let u=Hs.dot(rh),p=Vs.dot(rh);if(p>=0&&u<=p)return t.copy(r);let x=u*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(i).addScaledVector(Vs,a);let m=f*p-u*h;if(m<=0&&h-f>=0&&u-p>=0)return Iu.subVectors(r,s),a=(h-f)/(h-f+(u-p)),t.copy(s).addScaledVector(Iu,a);let g=1/(m+x+d);return o=x*g,a=d*g,t.copy(i).addScaledVector(Hs,o).addScaledVector(Vs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},oi=class{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(qn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(qn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=qn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,qn):qn.fromBufferAttribute(r,o),qn.applyMatrix4(e.matrixWorld),this.expandByPoint(qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),oa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),oa.copy(i.boundingBox)),oa.applyMatrix4(e.matrixWorld),this.union(oa)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,qn),qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Br),aa.subVectors(this.max,Br),Gs.subVectors(e.a,Br),Ws.subVectors(e.b,Br),Xs.subVectors(e.c,Br),Gi.subVectors(Ws,Gs),Wi.subVectors(Xs,Ws),xs.subVectors(Gs,Xs);let t=[0,-Gi.z,Gi.y,0,-Wi.z,Wi.y,0,-xs.z,xs.y,Gi.z,0,-Gi.x,Wi.z,0,-Wi.x,xs.z,0,-xs.x,-Gi.y,Gi.x,0,-Wi.y,Wi.x,0,-xs.y,xs.x,0];return!ch(t,Gs,Ws,Xs,aa)||(t=[1,0,0,0,1,0,0,0,1],!ch(t,Gs,Ws,Xs,aa))?!1:(la.crossVectors(Gi,Wi),t=[la.x,la.y,la.z],ch(t,Gs,Ws,Xs,aa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},bi=[new B,new B,new B,new B,new B,new B,new B,new B],qn=new B,oa=new oi,Gs=new B,Ws=new B,Xs=new B,Gi=new B,Wi=new B,xs=new B,Br=new B,aa=new B,la=new B,ys=new B;function ch(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){ys.fromArray(n,r);let a=s.x*Math.abs(ys.x)+s.y*Math.abs(ys.y)+s.z*Math.abs(ys.z),l=e.dot(ys),c=t.dot(ys),f=i.dot(ys);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}var Jt=new B,ca=new $e,xg=0,Kt=class extends si{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:xg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Va,this.updateRanges=[],this.gpuType=zn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ca.fromBufferAttribute(this,t),ca.applyMatrix3(e),this.setXY(t,ca.x,ca.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix3(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ti(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Tt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ti(t,this.array)),t}setX(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ti(t,this.array)),t}setY(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ti(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ti(t,this.array)),t}setW(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),i=Tt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),i=Tt(i,this.array),s=Tt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),i=Tt(i,this.array),s=Tt(s,this.array),r=Tt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Va&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}};var to=class extends Kt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var no=class extends Kt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Ct=class extends Kt{constructor(e,t,i){super(new Float32Array(e),t,i)}},yg=new oi,zr=new B,hh=new B,Ci=class{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):yg.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;zr.subVectors(e,this.center);let t=zr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(zr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(hh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(zr.copy(e.center).add(hh)),this.expandByPoint(zr.copy(e.center).sub(hh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},_g=0,kn=new Mt,fh=new Qt,qs=new B,In=new oi,Hr=new oi,on=new B,qt=class n extends si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_g++}),this.uuid=Yi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(sg(e)?no:to)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Je().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return kn.makeRotationFromQuaternion(e),this.applyMatrix4(kn),this}rotateX(e){return kn.makeRotationX(e),this.applyMatrix4(kn),this}rotateY(e){return kn.makeRotationY(e),this.applyMatrix4(kn),this}rotateZ(e){return kn.makeRotationZ(e),this.applyMatrix4(kn),this}translate(e,t,i){return kn.makeTranslation(e,t,i),this.applyMatrix4(kn),this}scale(e,t,i){return kn.makeScale(e,t,i),this.applyMatrix4(kn),this}lookAt(e){return fh.lookAt(e),fh.updateMatrix(),this.applyMatrix4(fh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qs).negate(),this.translate(qs.x,qs.y,qs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ct(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&qe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new oi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];In.setFromBufferAttribute(r),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,In.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,In.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(In.min),this.boundingBox.expandByPoint(In.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Xe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ci);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){let i=this.boundingSphere.center;if(In.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Hr.setFromBufferAttribute(a),this.morphTargetsRelative?(on.addVectors(In.min,Hr.min),In.expandByPoint(on),on.addVectors(In.max,Hr.max),In.expandByPoint(on)):(In.expandByPoint(Hr.min),In.expandByPoint(Hr.max))}In.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)on.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(on));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)on.fromBufferAttribute(a,c),l&&(qs.fromBufferAttribute(e,c),on.add(qs)),s=Math.max(s,i.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Xe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Xe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Kt(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let _=0;_<i.count;_++)a[_]=new B,l[_]=new B;let c=new B,f=new B,h=new B,d=new $e,u=new $e,p=new $e,x=new B,m=new B;function g(_,M,C){c.fromBufferAttribute(i,_),f.fromBufferAttribute(i,M),h.fromBufferAttribute(i,C),d.fromBufferAttribute(r,_),u.fromBufferAttribute(r,M),p.fromBufferAttribute(r,C),f.sub(c),h.sub(c),u.sub(d),p.sub(d);let S=1/(u.x*p.y-p.x*u.y);isFinite(S)&&(x.copy(f).multiplyScalar(p.y).addScaledVector(h,-u.y).multiplyScalar(S),m.copy(h).multiplyScalar(u.x).addScaledVector(f,-p.x).multiplyScalar(S),a[_].add(x),a[M].add(x),a[C].add(x),l[_].add(m),l[M].add(m),l[C].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let _=0,M=y.length;_<M;++_){let C=y[_],S=C.start,P=C.count;for(let z=S,X=S+P;z<X;z+=3)g(e.getX(z+0),e.getX(z+1),e.getX(z+2))}let w=new B,E=new B,v=new B,b=new B;function R(_){v.fromBufferAttribute(s,_),b.copy(v);let M=a[_];w.copy(M),w.sub(v.multiplyScalar(v.dot(M))).normalize(),E.crossVectors(b,M);let S=E.dot(l[_])<0?-1:1;o.setXYZW(_,w.x,w.y,w.z,S)}for(let _=0,M=y.length;_<M;++_){let C=y[_],S=C.start,P=C.count;for(let z=S,X=S+P;z<X;z+=3)R(e.getX(z+0)),R(e.getX(z+1)),R(e.getX(z+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Kt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,u=i.count;d<u;d++)i.setXYZ(d,0,0,0);let s=new B,r=new B,o=new B,a=new B,l=new B,c=new B,f=new B,h=new B;if(e)for(let d=0,u=e.count;d<u;d+=3){let p=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),f.subVectors(o,r),h.subVectors(s,r),f.cross(h),a.fromBufferAttribute(i,p),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(f),l.add(f),c.add(f),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,u=t.count;d<u;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),f.subVectors(o,r),h.subVectors(s,r),f.cross(h),i.setXYZ(d+0,f.x,f.y,f.z),i.setXYZ(d+1,f.x,f.y,f.z),i.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)on.fromBufferAttribute(e,t),on.normalize(),e.setXYZ(t,on.x,on.y,on.z)}toNonIndexed(){function e(a,l){let c=a.array,f=a.itemSize,h=a.normalized,d=new c.constructor(l.length*f),u=0,p=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?u=l[x]*a.data.stride+a.offset:u=l[x]*f;for(let g=0;g<f;g++)d[p++]=c[u++]}return new Kt(d,f,h)}if(this.index===null)return qe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let f=0,h=c.length;f<h;f++){let d=c[f],u=e(d,i);l.push(u)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],f=[];for(let h=0,d=c.length;h<d;h++){let u=c[h];f.push(u.toJSON(e.data))}f.length>0&&(s[l]=f,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let f=s[c];this.setAttribute(c,f.clone(t))}let r=e.morphAttributes;for(let c in r){let f=[],h=r[c];for(let d=0,u=h.length;d<u;d++)f.push(h[d].clone(t));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,f=o.length;c<f;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Za=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Va,this.updateRanges=[],this.version=0,this.uuid=Yi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},_n=new B,io=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)_n.fromBufferAttribute(this,t),_n.applyMatrix4(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)_n.fromBufferAttribute(this,t),_n.applyNormalMatrix(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)_n.fromBufferAttribute(this,t),_n.transformDirection(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=ti(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Tt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ti(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ti(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ti(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ti(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),i=Tt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),i=Tt(i,this.array),s=Tt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),i=Tt(i,this.array),s=Tt(s,this.array),r=Tt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Jr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Kt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Jr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},vg=0,ai=class extends si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vg++}),this.uuid=Yi(),this.name="",this.type="Material",this.blending=Zi,this.side=Ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ia,this.blendDst=Pa,this.blendEquation=$i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ms,this.stencilZFail=Ms,this.stencilZPass=Ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){qe(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){qe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Zi&&(i.blending=this.blending),this.side!==Ai&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ia&&(i.blendSrc=this.blendSrc),this.blendDst!==Pa&&(i.blendDst=this.blendDst),this.blendEquation!==$i&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==bs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ms&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ms&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ms&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Si=class extends ai{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new tt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ys,Vr=new B,Zs=new B,$s=new B,Ks=new $e,Gr=new $e,Ip=new Mt,ha=new B,Wr=new B,fa=new B,Pu=new $e,dh=new $e,Lu=new $e,Ki=class extends Qt{constructor(e=new Si){if(super(),this.isSprite=!0,this.type="Sprite",Ys===void 0){Ys=new qt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Za(t,5);Ys.setIndex([0,1,2,0,2,3]),Ys.setAttribute("position",new io(i,3,0,!1)),Ys.setAttribute("uv",new io(i,2,3,!1))}this.geometry=Ys,this.material=e,this.center=new $e(.5,.5),this.count=1}raycast(e,t){e.camera===null&&Xe('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Zs.setFromMatrixScale(this.matrixWorld),Ip.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),$s.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Zs.multiplyScalar(-$s.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;da(ha.set(-.5,-.5,0),$s,o,Zs,s,r),da(Wr.set(.5,-.5,0),$s,o,Zs,s,r),da(fa.set(.5,.5,0),$s,o,Zs,s,r),Pu.set(0,0),dh.set(1,0),Lu.set(1,1);let a=e.ray.intersectTriangle(ha,Wr,fa,!1,Vr);if(a===null&&(da(Wr.set(-.5,.5,0),$s,o,Zs,s,r),dh.set(0,1),a=e.ray.intersectTriangle(ha,fa,Wr,!1,Vr),a===null))return;let l=e.ray.origin.distanceTo(Vr);l<e.near||l>e.far||t.push({distance:l,point:Vr.clone(),uv:Ti.getInterpolation(Vr,ha,Wr,fa,Pu,dh,Lu,new $e),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function da(n,e,t,i,s,r){Ks.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(Gr.x=r*Ks.x-s*Ks.y,Gr.y=s*Ks.x+r*Ks.y):Gr.copy(Ks),n.copy(e),n.x+=Gr.x,n.y+=Gr.y,n.applyMatrix4(Ip)}var wi=new B,uh=new B,ua=new B,Xi=new B,ph=new B,pa=new B,mh=new B,or=class{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=wi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(wi.copy(this.origin).addScaledVector(this.direction,t),wi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){uh.copy(e).add(t).multiplyScalar(.5),ua.copy(t).sub(e).normalize(),Xi.copy(this.origin).sub(uh);let r=e.distanceTo(t)*.5,o=-this.direction.dot(ua),a=Xi.dot(this.direction),l=-Xi.dot(ua),c=Xi.lengthSq(),f=Math.abs(1-o*o),h,d,u,p;if(f>0)if(h=o*l-a,d=o*a-l,p=r*f,h>=0)if(d>=-p)if(d<=p){let x=1/f;h*=x,d*=x,u=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),u=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),u=-h*h+d*(d+2*l)+c;else d<=-p?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),u=-h*h+d*(d+2*l)+c):d<=p?(h=0,d=Math.min(Math.max(-r,-l),r),u=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),u=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),u=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(uh).addScaledVector(ua,d),u}intersectSphere(e,t){wi.subVectors(e.center,this.origin);let i=wi.dot(this.direction),s=wi.dot(wi)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),f>=0?(r=(e.min.y-d.y)*f,o=(e.max.y-d.y)*f):(r=(e.max.y-d.y)*f,o=(e.min.y-d.y)*f),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,wi)!==null}intersectTriangle(e,t,i,s,r){ph.subVectors(t,e),pa.subVectors(i,e),mh.crossVectors(ph,pa);let o=this.direction.dot(mh),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Xi.subVectors(this.origin,e);let l=a*this.direction.dot(pa.crossVectors(Xi,pa));if(l<0)return null;let c=a*this.direction.dot(ph.cross(Xi));if(c<0||l+c>o)return null;let f=-a*Xi.dot(mh);return f<0?null:this.at(f/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},wn=class extends ai{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ri,this.combine=dl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Du=new Mt,_s=new or,ma=new Ci,Nu=new B,ga=new B,xa=new B,ya=new B,gh=new B,_a=new B,Uu=new B,va=new B,_e=class extends Qt{constructor(e=new qt,t=new wn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){_a.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let f=a[l],h=r[l];f!==0&&(gh.fromBufferAttribute(h,e),o?_a.addScaledVector(gh,f):_a.addScaledVector(gh.sub(t),f))}t.add(_a)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ma.copy(i.boundingSphere),ma.applyMatrix4(r),_s.copy(e.ray).recast(e.near),!(ma.containsPoint(_s.origin)===!1&&(_s.intersectSphere(ma,Nu)===null||_s.origin.distanceToSquared(Nu)>(e.far-e.near)**2))&&(Du.copy(r).invert(),_s.copy(e.ray).applyMatrix4(Du),!(i.boundingBox!==null&&_s.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,_s)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,f=r.attributes.uv1,h=r.attributes.normal,d=r.groups,u=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=d.length;p<x;p++){let m=d[p],g=o[m.materialIndex],y=Math.max(m.start,u.start),w=Math.min(a.count,Math.min(m.start+m.count,u.start+u.count));for(let E=y,v=w;E<v;E+=3){let b=a.getX(E),R=a.getX(E+1),_=a.getX(E+2);s=Ma(this,g,e,i,c,f,h,b,R,_),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,u.start),x=Math.min(a.count,u.start+u.count);for(let m=p,g=x;m<g;m+=3){let y=a.getX(m),w=a.getX(m+1),E=a.getX(m+2);s=Ma(this,o,e,i,c,f,h,y,w,E),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=d.length;p<x;p++){let m=d[p],g=o[m.materialIndex],y=Math.max(m.start,u.start),w=Math.min(l.count,Math.min(m.start+m.count,u.start+u.count));for(let E=y,v=w;E<v;E+=3){let b=E,R=E+1,_=E+2;s=Ma(this,g,e,i,c,f,h,b,R,_),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,u.start),x=Math.min(l.count,u.start+u.count);for(let m=p,g=x;m<g;m+=3){let y=m,w=m+1,E=m+2;s=Ma(this,o,e,i,c,f,h,y,w,E),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Mg(n,e,t,i,s,r,o,a){let l;if(e.side===Mn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Ai,a),l===null)return null;va.copy(a),va.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(va);return c<t.near||c>t.far?null:{distance:c,point:va.clone(),object:n}}function Ma(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,ga),n.getVertexPosition(l,xa),n.getVertexPosition(c,ya);let f=Mg(n,e,t,i,ga,xa,ya,Uu);if(f){let h=new B;Ti.getBarycoord(Uu,ga,xa,ya,h),s&&(f.uv=Ti.getInterpolatedAttribute(s,a,l,c,h,new $e)),r&&(f.uv1=Ti.getInterpolatedAttribute(r,a,l,c,h,new $e)),o&&(f.normal=Ti.getInterpolatedAttribute(o,a,l,c,h,new B),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new B,materialIndex:0};Ti.getNormal(ga,xa,ya,d.normal),f.face=d,f.barycoord=h}return f}var so=class extends vn{constructor(e=null,t=1,i=1,s,r,o,a,l,c=an,f=an,h,d){super(null,o,a,l,c,f,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ro=class extends Kt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Js=new Mt,Fu=new Mt,ba=[],ku=new oi,bg=new Mt,Xr=new _e,qr=new Ci,gn=class extends _e{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ro(new Float32Array(i*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,bg)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new oi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Js),ku.copy(e.boundingBox).applyMatrix4(Js),this.boundingBox.union(ku)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ci),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Js),qr.copy(e.boundingSphere).applyMatrix4(Js),this.boundingSphere.union(qr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Xr.geometry=this.geometry,Xr.material=this.material,Xr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qr.copy(this.boundingSphere),qr.applyMatrix4(i),e.ray.intersectsSphere(qr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Js),Fu.multiplyMatrices(i,Js),Xr.matrixWorld=Fu,Xr.raycast(e,ba);for(let o=0,a=ba.length;o<a;o++){let l=ba[o];l.instanceId=r,l.object=this,t.push(l)}ba.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ro(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new so(new Float32Array(s*this.count),s,this.count,_l,zn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(i,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},xh=new B,wg=new B,Tg=new Je,On=class{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=xh.subVectors(i,t).cross(wg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(xh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Tg.getNormalMatrix(e),s=this.coplanarPoint(xh).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},vs=new Ci,Eg=new $e(.5,.5),wa=new B,ar=class{constructor(e=new On,t=new On,i=new On,s=new On,r=new On,o=new On){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Yn,i=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],f=r[4],h=r[5],d=r[6],u=r[7],p=r[8],x=r[9],m=r[10],g=r[11],y=r[12],w=r[13],E=r[14],v=r[15];if(s[0].setComponents(c-o,u-f,g-p,v-y).normalize(),s[1].setComponents(c+o,u+f,g+p,v+y).normalize(),s[2].setComponents(c+a,u+h,g+x,v+w).normalize(),s[3].setComponents(c-a,u-h,g-x,v-w).normalize(),i)s[4].setComponents(l,d,m,E).normalize(),s[5].setComponents(c-l,u-d,g-m,v-E).normalize();else if(s[4].setComponents(c-l,u-d,g-m,v-E).normalize(),t===Yn)s[5].setComponents(c+l,u+d,g+m,v+E).normalize();else if(t===tr)s[5].setComponents(l,d,m,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),vs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vs)}intersectsSprite(e){vs.center.set(0,0,0);let t=Eg.distanceTo(e.center);return vs.radius=.7071067811865476+t,vs.applyMatrix4(e.matrixWorld),this.intersectsSphere(vs)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(wa.x=s.normal.x>0?e.max.x:e.min.x,wa.y=s.normal.y>0?e.max.y:e.min.y,wa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(wa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ii=class extends ai{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ou=new Mt,Th=new or,Ta=new Ci,Ea=new B,Ji=class extends Qt{constructor(e=new qt,t=new Ii){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ta.copy(i.boundingSphere),Ta.applyMatrix4(s),Ta.radius+=r,e.ray.intersectsSphere(Ta)===!1)return;Ou.copy(s).invert(),Th.copy(e.ray).applyMatrix4(Ou);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){let d=Math.max(0,o.start),u=Math.min(c.count,o.start+o.count);for(let p=d,x=u;p<x;p++){let m=c.getX(p);Ea.fromBufferAttribute(h,m),Bu(Ea,m,l,s,e,t,this)}}else{let d=Math.max(0,o.start),u=Math.min(h.count,o.start+o.count);for(let p=d,x=u;p<x;p++)Ea.fromBufferAttribute(h,p),Bu(Ea,p,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Bu(n,e,t,i,s,r,o){let a=Th.distanceSqToPoint(n);if(a<t){let l=new B;Th.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var oo=class extends vn{constructor(e=[],t=ss,i,s,r,o,a,l,c,f){super(e,t,i,s,r,o,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Qi=class extends vn{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Pi=class extends vn{constructor(e,t,i=$n,s,r,o,a=an,l=an,c,f=ii,h=1){if(f!==ii&&f!==rs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:h};super(d,s,r,o,a,l,f,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ir(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},$a=class extends Pi{constructor(e,t=$n,i=ss,s,r,o=an,a=an,l,c=ii){let f={width:e,height:e,depth:1},h=[f,f,f,f,f,f];super(e,e,t,i,s,r,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ao=class extends vn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ji=class n extends qt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],f=[],h=[],d=0,u=0;p("z","y","x",-1,-1,i,t,e,o,r,0),p("z","y","x",1,-1,i,t,-e,o,r,1),p("x","z","y",1,1,e,i,t,s,o,2),p("x","z","y",1,-1,e,i,-t,s,o,3),p("x","y","z",1,-1,e,t,i,s,r,4),p("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Ct(c,3)),this.setAttribute("normal",new Ct(f,3)),this.setAttribute("uv",new Ct(h,2));function p(x,m,g,y,w,E,v,b,R,_,M){let C=E/R,S=v/_,P=E/2,z=v/2,X=b/2,D=R+1,k=_+1,G=0,re=0,L=new B;for(let V=0;V<k;V++){let ne=V*S-z;for(let fe=0;fe<D;fe++){let ke=fe*C-P;L[x]=ke*y,L[m]=ne*w,L[g]=X,c.push(L.x,L.y,L.z),L[x]=0,L[m]=0,L[g]=b>0?1:-1,f.push(L.x,L.y,L.z),h.push(fe/R),h.push(1-V/_),G+=1}}for(let V=0;V<_;V++)for(let ne=0;ne<R;ne++){let fe=d+ne+D*V,ke=d+ne+D*(V+1),K=d+(ne+1)+D*(V+1),Q=d+(ne+1)+D*V;l.push(fe,ke,Q),l.push(ke,K,Q),re+=6}a.addGroup(u,re,M),u+=re,d+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Li=class n extends qt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new B,f=new $e;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){let u=i+h/t*s;c.x=e*Math.cos(u),c.y=e*Math.sin(u),o.push(c.x,c.y,c.z),a.push(0,0,1),f.x=(o[d]/e+1)/2,f.y=(o[d+1]/e+1)/2,l.push(f.x,f.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Ct(o,3)),this.setAttribute("normal",new Ct(a,3)),this.setAttribute("uv",new Ct(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},ws=class n extends qt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let f=[],h=[],d=[],u=[],p=0,x=[],m=i/2,g=0;y(),o===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(f),this.setAttribute("position",new Ct(h,3)),this.setAttribute("normal",new Ct(d,3)),this.setAttribute("uv",new Ct(u,2));function y(){let E=new B,v=new B,b=0,R=(t-e)/i;for(let _=0;_<=r;_++){let M=[],C=_/r,S=C*(t-e)+e;for(let P=0;P<=s;P++){let z=P/s,X=z*l+a,D=Math.sin(X),k=Math.cos(X);v.x=S*D,v.y=-C*i+m,v.z=S*k,h.push(v.x,v.y,v.z),E.set(D,R,k).normalize(),d.push(E.x,E.y,E.z),u.push(z,1-C),M.push(p++)}x.push(M)}for(let _=0;_<s;_++)for(let M=0;M<r;M++){let C=x[M][_],S=x[M+1][_],P=x[M+1][_+1],z=x[M][_+1];(e>0||M!==0)&&(f.push(C,S,z),b+=3),(t>0||M!==r-1)&&(f.push(S,P,z),b+=3)}c.addGroup(g,b,0),g+=b}function w(E){let v=p,b=new $e,R=new B,_=0,M=E===!0?e:t,C=E===!0?1:-1;for(let P=1;P<=s;P++)h.push(0,m*C,0),d.push(0,C,0),u.push(.5,.5),p++;let S=p;for(let P=0;P<=s;P++){let X=P/s*l+a,D=Math.cos(X),k=Math.sin(X);R.x=M*k,R.y=m*C,R.z=M*D,h.push(R.x,R.y,R.z),d.push(0,C,0),b.x=D*.5+.5,b.y=k*.5*C+.5,u.push(b.x,b.y),p++}for(let P=0;P<s;P++){let z=v+P,X=S+P;E===!0?f.push(X,X+1,z):f.push(X+1,X,z),_+=3}c.addGroup(g,_,E===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},lo=class n extends ws{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ka=class n extends qt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),c(i),f(),this.setAttribute("position",new Ct(r,3)),this.setAttribute("normal",new Ct(r.slice(),3)),this.setAttribute("uv",new Ct(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let w=new B,E=new B,v=new B;for(let b=0;b<t.length;b+=3)u(t[b+0],w),u(t[b+1],E),u(t[b+2],v),l(w,E,v,y)}function l(y,w,E,v){let b=v+1,R=[];for(let _=0;_<=b;_++){R[_]=[];let M=y.clone().lerp(E,_/b),C=w.clone().lerp(E,_/b),S=b-_;for(let P=0;P<=S;P++)P===0&&_===b?R[_][P]=M:R[_][P]=M.clone().lerp(C,P/S)}for(let _=0;_<b;_++)for(let M=0;M<2*(b-_)-1;M++){let C=Math.floor(M/2);M%2===0?(d(R[_][C+1]),d(R[_+1][C]),d(R[_][C])):(d(R[_][C+1]),d(R[_+1][C+1]),d(R[_+1][C]))}}function c(y){let w=new B;for(let E=0;E<r.length;E+=3)w.x=r[E+0],w.y=r[E+1],w.z=r[E+2],w.normalize().multiplyScalar(y),r[E+0]=w.x,r[E+1]=w.y,r[E+2]=w.z}function f(){let y=new B;for(let w=0;w<r.length;w+=3){y.x=r[w+0],y.y=r[w+1],y.z=r[w+2];let E=m(y)/2/Math.PI+.5,v=g(y)/Math.PI+.5;o.push(E,1-v)}p(),h()}function h(){for(let y=0;y<o.length;y+=6){let w=o[y+0],E=o[y+2],v=o[y+4],b=Math.max(w,E,v),R=Math.min(w,E,v);b>.9&&R<.1&&(w<.2&&(o[y+0]+=1),E<.2&&(o[y+2]+=1),v<.2&&(o[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function u(y,w){let E=y*3;w.x=e[E+0],w.y=e[E+1],w.z=e[E+2]}function p(){let y=new B,w=new B,E=new B,v=new B,b=new $e,R=new $e,_=new $e;for(let M=0,C=0;M<r.length;M+=9,C+=6){y.set(r[M+0],r[M+1],r[M+2]),w.set(r[M+3],r[M+4],r[M+5]),E.set(r[M+6],r[M+7],r[M+8]),b.set(o[C+0],o[C+1]),R.set(o[C+2],o[C+3]),_.set(o[C+4],o[C+5]),v.copy(y).add(w).add(E).divideScalar(3);let S=m(v);x(b,C+0,y,S),x(R,C+2,w,S),x(_,C+4,E,S)}}function x(y,w,E,v){v<0&&y.x===1&&(o[w]=y.x-1),E.x===0&&E.z===0&&(o[w]=v/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function g(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.detail)}};var co=class n extends Ka{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var li=class n extends qt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,f=l+1,h=e/a,d=t/l,u=[],p=[],x=[],m=[];for(let g=0;g<f;g++){let y=g*d-o;for(let w=0;w<c;w++){let E=w*h-r;p.push(E,-y,0),x.push(0,0,1),m.push(w/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let y=0;y<a;y++){let w=y+c*g,E=y+c*(g+1),v=y+1+c*(g+1),b=y+1+c*g;u.push(w,E,b),u.push(E,v,b)}this.setIndex(u),this.setAttribute("position",new Ct(p,3)),this.setAttribute("normal",new Ct(x,3)),this.setAttribute("uv",new Ct(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},ho=class n extends qt{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],f=[],h=e,d=(t-e)/s,u=new B,p=new $e;for(let x=0;x<=s;x++){for(let m=0;m<=i;m++){let g=r+m/i*o;u.x=h*Math.cos(g),u.y=h*Math.sin(g),l.push(u.x,u.y,u.z),c.push(0,0,1),p.x=(u.x/t+1)/2,p.y=(u.y/t+1)/2,f.push(p.x,p.y)}h+=d}for(let x=0;x<s;x++){let m=x*(i+1);for(let g=0;g<i;g++){let y=g+m,w=y,E=y+i+1,v=y+i+2,b=y+1;a.push(w,E,b),a.push(E,v,b)}}this.setIndex(a),this.setAttribute("position",new Ct(l,3)),this.setAttribute("normal",new Ct(c,3)),this.setAttribute("uv",new Ct(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var fo=class n extends qt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,f=[],h=new B,d=new B,u=[],p=[],x=[],m=[];for(let g=0;g<=i;g++){let y=[],w=g/i,E=0;g===0&&o===0?E=.5/t:g===i&&l===Math.PI&&(E=-.5/t);for(let v=0;v<=t;v++){let b=v/t;h.x=-e*Math.cos(s+b*r)*Math.sin(o+w*a),h.y=e*Math.cos(o+w*a),h.z=e*Math.sin(s+b*r)*Math.sin(o+w*a),p.push(h.x,h.y,h.z),d.copy(h).normalize(),x.push(d.x,d.y,d.z),m.push(b+E,1-w),y.push(c++)}f.push(y)}for(let g=0;g<i;g++)for(let y=0;y<t;y++){let w=f[g][y+1],E=f[g][y],v=f[g+1][y],b=f[g+1][y+1];(g!==0||o>0)&&u.push(w,E,b),(g!==i-1||l<Math.PI)&&u.push(E,v,b)}this.setIndex(u),this.setAttribute("position",new Ct(p,3)),this.setAttribute("normal",new Ct(x,3)),this.setAttribute("uv",new Ct(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};function Es(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(zu(s))s.isRenderTargetTexture?(qe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(zu(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function xn(n){let e={};for(let t=0;t<n.length;t++){let i=Es(n[t]);for(let s in i)e[s]=i[s]}return e}function zu(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Ag(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Zh(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ct.workingColorSpace}var Pp={clone:Es,merge:xn},Rg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ln=class extends ai{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rg,this.fragmentShader=Cg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Es(e.uniforms),this.uniformsGroups=Ag(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Ja=class extends Ln{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var es=class extends ai{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jl,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ri,this.combine=dl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Qa=class extends ai{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ja=class extends ai{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Aa(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}var ts=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];e:{t:{let o;n:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break t}o=t.length;break n}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break t}o=i,i=0;break n}break e}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},el=class extends ts{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:vh,endingEnd:vh}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Mh:r=e,a=2*t-i;break;case bh:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Mh:o=e,l=2*i-t;break;case bh:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,f=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*f,this._offsetNext=o*f}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,f=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,u=this._weightNext,p=(i-t)/(s-t),x=p*p,m=x*p,g=-d*m+2*d*x-d*p,y=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*p+1,w=(-1-u)*m+(1.5+u)*x+.5*p,E=u*m-u*x;for(let v=0;v!==a;++v)r[v]=g*o[f+v]+y*o[c+v]+w*o[l+v]+E*o[h+v];return r}},tl=class extends ts{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,f=(i-t)/(s-t),h=1-f;for(let d=0;d!==a;++d)r[d]=o[c+d]*h+o[l+d]*f;return r}},nl=class extends ts{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},il=class extends ts{interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,f=this.settings||this.DefaultSettings_,h=f.inTangents,d=f.outTangents;if(!h||!d){let x=(i-t)/(s-t),m=1-x;for(let g=0;g!==a;++g)r[g]=o[c+g]*m+o[l+g]*x;return r}let u=a*2,p=e-1;for(let x=0;x!==a;++x){let m=o[c+x],g=o[l+x],y=p*u+x*2,w=d[y],E=d[y+1],v=e*u+x*2,b=h[v],R=h[v+1],_=(i-t)/(s-t),M,C,S,P,z;for(let X=0;X<8;X++){M=_*_,C=M*_,S=1-_,P=S*S,z=P*S;let k=z*t+3*P*_*w+3*S*M*b+C*s-i;if(Math.abs(k)<1e-10)break;let G=3*P*(w-t)+6*S*_*(b-w)+3*M*(s-b);if(Math.abs(G)<1e-10)break;_=_-k/G,_=Math.max(0,Math.min(1,_))}r[x]=z*m+3*P*_*E+3*S*M*R+C*g}return r}},Dn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Aa(t,this.TimeBufferType),this.values=Aa(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Aa(e.times,Array),values:Aa(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new nl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new tl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new el(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new il(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case Yr:t=this.InterpolantFactoryMethodDiscrete;break;case Ha:t=this.InterpolantFactoryMethodLinear;break;case Sa:t=this.InterpolantFactoryMethodSmooth;break;case _h:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return qe("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Yr;case this.InterpolantFactoryMethodLinear:return Ha;case this.InterpolantFactoryMethodSmooth:return Sa;case this.InterpolantFactoryMethodBezier:return _h}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Xe("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Xe("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){Xe("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Xe("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&rg(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Xe("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Sa,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],f=e[a+1];if(c!==f&&(a!==1||c!==e[0]))if(s)l=!0;else{let h=a*i,d=h-i,u=h+i;for(let p=0;p!==i;++p){let x=t[h+p];if(x!==t[d+p]||x!==t[u+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*i,d=o*i;for(let u=0;u!==i;++u)t[d+u]=t[h+u]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Dn.prototype.ValueTypeName="";Dn.prototype.TimeBufferType=Float32Array;Dn.prototype.ValueBufferType=Float32Array;Dn.prototype.DefaultInterpolation=Ha;var ns=class extends Dn{constructor(e,t,i){super(e,t,i)}};ns.prototype.ValueTypeName="bool";ns.prototype.ValueBufferType=Array;ns.prototype.DefaultInterpolation=Yr;ns.prototype.InterpolantFactoryMethodLinear=void 0;ns.prototype.InterpolantFactoryMethodSmooth=void 0;var sl=class extends Dn{constructor(e,t,i,s){super(e,t,i,s)}};sl.prototype.ValueTypeName="color";var rl=class extends Dn{constructor(e,t,i,s){super(e,t,i,s)}};rl.prototype.ValueTypeName="number";var ol=class extends ts{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let f=c+a;c!==f;c+=4)ri.slerpFlat(r,0,o,c-a,o,c,l);return r}},uo=class extends Dn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new ol(this.times,this.values,this.getValueSize(),e)}};uo.prototype.ValueTypeName="quaternion";uo.prototype.InterpolantFactoryMethodSmooth=void 0;var is=class extends Dn{constructor(e,t,i){super(e,t,i)}};is.prototype.ValueTypeName="string";is.prototype.ValueBufferType=Array;is.prototype.DefaultInterpolation=Yr;is.prototype.InterpolantFactoryMethodLinear=void 0;is.prototype.InterpolantFactoryMethodSmooth=void 0;var al=class extends Dn{constructor(e,t,i,s){super(e,t,i,s)}};al.prototype.ValueTypeName="vector";var ll=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(f){a++,r===!1&&s.onStart!==void 0&&s.onStart(f,o,a),r=!0},this.itemEnd=function(f){o++,s.onProgress!==void 0&&s.onProgress(f,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(f){s.onError!==void 0&&s.onError(f)},this.resolveURL=function(f){return l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,h){return c.push(f,h),this},this.removeHandler=function(f){let h=c.indexOf(f);return h!==-1&&c.splice(h,2),this},this.getHandler=function(f){for(let h=0,d=c.length;h<d;h+=2){let u=c[h],p=c[h+1];if(u.global&&(u.lastIndex=0),u.test(f))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Lp=new ll,cl=class{constructor(e){this.manager=e!==void 0?e:Lp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};cl.DEFAULT_MATERIAL_NAME="__DEFAULT";var po=class extends Qt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new tt(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},mo=class extends po{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Qt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new tt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},yh=new Mt,Hu=new B,Vu=new B,Eh=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $e(512,512),this.mapType=Tn,this.map=null,this.mapPass=null,this.matrix=new Mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ar,this._frameExtents=new $e(1,1),this._viewportCount=1,this._viewports=[new Ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Hu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Hu),Vu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Vu),t.updateMatrixWorld(),yh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yh,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===tr||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(yh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ra=new B,Ca=new ri,ei=new B,go=class extends Qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mt,this.projectionMatrix=new Mt,this.projectionMatrixInverse=new Mt,this.coordinateSystem=Yn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ra,Ca,ei),ei.x===1&&ei.y===1&&ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ra,Ca,ei.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Ra,Ca,ei),ei.x===1&&ei.y===1&&ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ra,Ca,ei.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},qi=new B,Gu=new $e,Wu=new $e,mn=class extends go{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Wa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Zc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Wa*2*Math.atan(Math.tan(Zc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(qi.x,qi.y).multiplyScalar(-e/qi.z),qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(qi.x,qi.y).multiplyScalar(-e/qi.z)}getViewSize(e,t){return this.getViewBounds(e,Gu,Wu),t.subVectors(Wu,Gu)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Zc*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var lr=class extends go{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ah=class extends Eh{constructor(){super(new lr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},xo=class extends po{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Qt.DEFAULT_UP),this.updateMatrix(),this.target=new Qt,this.shadow=new Ah}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Qs=-90,js=1,hl=class extends Qt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new mn(Qs,js,e,t);s.layers=this.layers,this.add(s);let r=new mn(Qs,js,e,t);r.layers=this.layers,this.add(r);let o=new mn(Qs,js,e,t);o.layers=this.layers,this.add(o);let a=new mn(Qs,js,e,t);a.layers=this.layers,this.add(a);let l=new mn(Qs,js,e,t);l.layers=this.layers,this.add(l);let c=new mn(Qs,js,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Yn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===tr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,f]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(h,d,u),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},fl=class extends mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var $h="\\[\\]\\.:\\/",Sg=new RegExp("["+$h+"]","g"),Kh="[^"+$h+"]",Ig="[^"+$h.replace("\\.","")+"]",Pg=/((?:WC+[\/:])*)/.source.replace("WC",Kh),Lg=/(WCOD+)?/.source.replace("WCOD",Ig),Dg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Kh),Ng=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Kh),Ug=new RegExp("^"+Pg+Lg+Dg+Ng+"$"),Fg=["material","materials","bones","map"],Rh=class{constructor(e,t,i){let s=i||Ot.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Ot=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Sg,"")}static parseTrackName(e){let t=Ug.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Fg.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){qe("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){Xe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Xe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Xe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let f=0;f<e.length;f++)if(e[f].name===c){c=f;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Xe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Xe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Xe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){Xe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;Xe("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Xe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Xe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ot.Composite=Rh;Ot.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ot.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ot.prototype.GetterByBindingType=[Ot.prototype._getValue_direct,Ot.prototype._getValue_array,Ot.prototype._getValue_arrayElement,Ot.prototype._getValue_toArray];Ot.prototype.SetterByBindingTypeAndVersioning=[[Ot.prototype._setValue_direct,Ot.prototype._setValue_direct_setNeedsUpdate,Ot.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ot.prototype._setValue_array,Ot.prototype._setValue_array_setNeedsUpdate,Ot.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ot.prototype._setValue_arrayElement,Ot.prototype._setValue_arrayElement_setNeedsUpdate,Ot.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ot.prototype._setValue_fromArray,Ot.prototype._setValue_fromArray_setNeedsUpdate,Ot.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Mw=new Float32Array(1);var Xu=new Mt,yo=class{constructor(e,t,i=0,s=1/0){this.ray=new or(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new sr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Xe("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Xu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Xu),this}intersectObject(e,t=!0,i=[]){return Ch(e,this,i,t),i.sort(qu),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Ch(e[s],this,i,t);return i.sort(qu),i}};function qu(n,e){return n.distance-e.distance}function Ch(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let o=0,a=r.length;o<a;o++)Ch(r[o],e,t,!0)}}var Sh=class n{static{n.prototype.isMatrix2=!0}constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};function Jh(n,e,t,i){let s=kg(i);switch(t){case Xh:return n*e;case _l:return n*e/s.components*s.byteLength;case vl:return n*e/s.components*s.byteLength;case os:return n*e*2/s.components*s.byteLength;case Ml:return n*e*2/s.components*s.byteLength;case qh:return n*e*3/s.components*s.byteLength;case Hn:return n*e*4/s.components*s.byteLength;case bl:return n*e*4/s.components*s.byteLength;case bo:case wo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case To:case Eo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Tl:case Al:return Math.max(n,16)*Math.max(e,8)/4;case wl:case El:return Math.max(n,8)*Math.max(e,8)/2;case Rl:case Cl:case Il:case Pl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Sl:case Ao:case Ll:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Dl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Nl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ul:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Fl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case kl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ol:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Bl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case zl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Hl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Vl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Gl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Wl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Xl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case ql:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Yl:case Zl:case $l:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Kl:case Jl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Ro:case Ql:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function kg(n){switch(n){case Tn:case Hh:return{byteLength:1,components:1};case hr:case Vh:case fi:return{byteLength:2,components:1};case xl:case yl:return{byteLength:2,components:4};case $n:case gl:case zn:return{byteLength:4,components:1};case Gh:case Wh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"184"}}));typeof window<"u"&&(window.__THREE__?qe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="184");function tm(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Bg(n){let e=new WeakMap;function t(a,l){let c=a.array,f=a.usage,h=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,f),a.onUploadCallback();let u;if(c instanceof Float32Array)u=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)u=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?u=n.HALF_FLOAT:u=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=n.SHORT;else if(c instanceof Uint32Array)u=n.UNSIGNED_INT;else if(c instanceof Int32Array)u=n.INT;else if(c instanceof Int8Array)u=n.BYTE;else if(c instanceof Uint8Array)u=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){let f=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,f);else{h.sort((u,p)=>u.start-p.start);let d=0;for(let u=1;u<h.length;u++){let p=h[d],x=h[u];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++d,h[d]=x)}h.length=d+1;for(let u=0,p=h.length;u<p;u++){let x=h[u];n.bufferSubData(c,x.start*f.BYTES_PER_ELEMENT,f,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let f=e.get(a);(!f||f.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var zg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Hg=`#ifdef USE_ALPHAHASH
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
#endif`,Vg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Xg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qg=`#ifdef USE_AOMAP
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
#endif`,Yg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zg=`#ifdef USE_BATCHING
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
#endif`,$g=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Kg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Jg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,jg=`#ifdef USE_IRIDESCENCE
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
#endif`,ex=`#ifdef USE_BUMPMAP
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
#endif`,tx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,nx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ix=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ox=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ax=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,lx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,cx=`#define PI 3.141592653589793
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
} // validated`,hx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,fx=`vec3 transformedNormal = objectNormal;
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
#endif`,dx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ux=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,px=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gx="gl_FragColor = linearToOutputTexel( gl_FragColor );",xx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yx=`#ifdef USE_ENVMAP
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
#endif`,_x=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,vx=`#ifdef USE_ENVMAP
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
#endif`,Mx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bx=`#ifdef USE_ENVMAP
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
#endif`,wx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Tx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ex=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ax=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Rx=`#ifdef USE_GRADIENTMAP
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
}`,Cx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Sx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ix=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Px=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Lx=`#ifdef USE_ENVMAP
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
#endif`,Dx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Nx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ux=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Fx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kx=`PhysicalMaterial material;
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
#endif`,Ox=`uniform sampler2D dfgLUT;
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
}`,Bx=`
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
#endif`,zx=`#if defined( RE_IndirectDiffuse )
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
#endif`,Hx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Vx=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Gx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Wx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Yx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$x=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Kx=`#if defined( USE_POINTS_UV )
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
#endif`,Jx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Qx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ey=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ty=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ny=`#ifdef USE_MORPHTARGETS
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
#endif`,iy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ry=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,oy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ay=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ly=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cy=`#ifdef USE_NORMALMAP
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
#endif`,hy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,uy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,py=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,my=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,gy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_y=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,My=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,by=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ty=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ey=`float getShadowMask() {
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
}`,Ay=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ry=`#ifdef USE_SKINNING
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
#endif`,Cy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Sy=`#ifdef USE_SKINNING
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
#endif`,Iy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Py=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ly=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Dy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ny=`#ifdef USE_TRANSMISSION
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
#endif`,Uy=`#ifdef USE_TRANSMISSION
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
#endif`,Fy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ky=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Oy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,By=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,zy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Hy=`uniform sampler2D t2D;
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
}`,Vy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Wy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qy=`#include <common>
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
}`,Yy=`#if DEPTH_PACKING == 3200
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
}`,Zy=`#define DISTANCE
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
}`,$y=`#define DISTANCE
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
}`,Ky=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qy=`uniform float scale;
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
}`,jy=`uniform vec3 diffuse;
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
}`,e_=`#include <common>
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
}`,t_=`uniform vec3 diffuse;
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
}`,n_=`#define LAMBERT
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
}`,i_=`#define LAMBERT
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
}`,s_=`#define MATCAP
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
}`,r_=`#define MATCAP
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
}`,o_=`#define NORMAL
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
}`,a_=`#define NORMAL
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
}`,l_=`#define PHONG
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
}`,c_=`#define PHONG
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
}`,h_=`#define STANDARD
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
}`,f_=`#define STANDARD
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
}`,d_=`#define TOON
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
}`,u_=`#define TOON
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
}`,p_=`uniform float size;
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
}`,m_=`uniform vec3 diffuse;
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
}`,g_=`#include <common>
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
}`,x_=`uniform vec3 color;
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
}`,y_=`uniform float rotation;
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
}`,__=`uniform vec3 diffuse;
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
}`,st={alphahash_fragment:zg,alphahash_pars_fragment:Hg,alphamap_fragment:Vg,alphamap_pars_fragment:Gg,alphatest_fragment:Wg,alphatest_pars_fragment:Xg,aomap_fragment:qg,aomap_pars_fragment:Yg,batching_pars_vertex:Zg,batching_vertex:$g,begin_vertex:Kg,beginnormal_vertex:Jg,bsdfs:Qg,iridescence_fragment:jg,bumpmap_pars_fragment:ex,clipping_planes_fragment:tx,clipping_planes_pars_fragment:nx,clipping_planes_pars_vertex:ix,clipping_planes_vertex:sx,color_fragment:rx,color_pars_fragment:ox,color_pars_vertex:ax,color_vertex:lx,common:cx,cube_uv_reflection_fragment:hx,defaultnormal_vertex:fx,displacementmap_pars_vertex:dx,displacementmap_vertex:ux,emissivemap_fragment:px,emissivemap_pars_fragment:mx,colorspace_fragment:gx,colorspace_pars_fragment:xx,envmap_fragment:yx,envmap_common_pars_fragment:_x,envmap_pars_fragment:vx,envmap_pars_vertex:Mx,envmap_physical_pars_fragment:Lx,envmap_vertex:bx,fog_vertex:wx,fog_pars_vertex:Tx,fog_fragment:Ex,fog_pars_fragment:Ax,gradientmap_pars_fragment:Rx,lightmap_pars_fragment:Cx,lights_lambert_fragment:Sx,lights_lambert_pars_fragment:Ix,lights_pars_begin:Px,lights_toon_fragment:Dx,lights_toon_pars_fragment:Nx,lights_phong_fragment:Ux,lights_phong_pars_fragment:Fx,lights_physical_fragment:kx,lights_physical_pars_fragment:Ox,lights_fragment_begin:Bx,lights_fragment_maps:zx,lights_fragment_end:Hx,lightprobes_pars_fragment:Vx,logdepthbuf_fragment:Gx,logdepthbuf_pars_fragment:Wx,logdepthbuf_pars_vertex:Xx,logdepthbuf_vertex:qx,map_fragment:Yx,map_pars_fragment:Zx,map_particle_fragment:$x,map_particle_pars_fragment:Kx,metalnessmap_fragment:Jx,metalnessmap_pars_fragment:Qx,morphinstance_vertex:jx,morphcolor_vertex:ey,morphnormal_vertex:ty,morphtarget_pars_vertex:ny,morphtarget_vertex:iy,normal_fragment_begin:sy,normal_fragment_maps:ry,normal_pars_fragment:oy,normal_pars_vertex:ay,normal_vertex:ly,normalmap_pars_fragment:cy,clearcoat_normal_fragment_begin:hy,clearcoat_normal_fragment_maps:fy,clearcoat_pars_fragment:dy,iridescence_pars_fragment:uy,opaque_fragment:py,packing:my,premultiplied_alpha_fragment:gy,project_vertex:xy,dithering_fragment:yy,dithering_pars_fragment:_y,roughnessmap_fragment:vy,roughnessmap_pars_fragment:My,shadowmap_pars_fragment:by,shadowmap_pars_vertex:wy,shadowmap_vertex:Ty,shadowmask_pars_fragment:Ey,skinbase_vertex:Ay,skinning_pars_vertex:Ry,skinning_vertex:Cy,skinnormal_vertex:Sy,specularmap_fragment:Iy,specularmap_pars_fragment:Py,tonemapping_fragment:Ly,tonemapping_pars_fragment:Dy,transmission_fragment:Ny,transmission_pars_fragment:Uy,uv_pars_fragment:Fy,uv_pars_vertex:ky,uv_vertex:Oy,worldpos_vertex:By,background_vert:zy,background_frag:Hy,backgroundCube_vert:Vy,backgroundCube_frag:Gy,cube_vert:Wy,cube_frag:Xy,depth_vert:qy,depth_frag:Yy,distance_vert:Zy,distance_frag:$y,equirect_vert:Ky,equirect_frag:Jy,linedashed_vert:Qy,linedashed_frag:jy,meshbasic_vert:e_,meshbasic_frag:t_,meshlambert_vert:n_,meshlambert_frag:i_,meshmatcap_vert:s_,meshmatcap_frag:r_,meshnormal_vert:o_,meshnormal_frag:a_,meshphong_vert:l_,meshphong_frag:c_,meshphysical_vert:h_,meshphysical_frag:f_,meshtoon_vert:d_,meshtoon_frag:u_,points_vert:p_,points_frag:m_,shadow_vert:g_,shadow_frag:x_,sprite_vert:y_,sprite_frag:__},Me={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new B},probesMax:{value:new B},probesResolution:{value:new B}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},ui={basic:{uniforms:xn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:xn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new tt(0)},envMapIntensity:{value:1}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:xn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:xn([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:xn([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new tt(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:xn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:xn([Me.points,Me.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:xn([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:xn([Me.common,Me.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:xn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:xn([Me.sprite,Me.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:st.background_vert,fragmentShader:st.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:st.backgroundCube_vert,fragmentShader:st.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distance:{uniforms:xn([Me.common,Me.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:st.distance_vert,fragmentShader:st.distance_frag},shadow:{uniforms:xn([Me.lights,Me.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};ui.physical={uniforms:xn([ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};var nc={r:0,b:0,g:0},v_=new Mt,nm=new Je;nm.set(-1,0,0,0,1,0,0,0,1);function M_(n,e,t,i,s,r){let o=new tt(0),a=s===!0?0:1,l,c,f=null,h=0,d=null;function u(y){let w=y.isScene===!0?y.background:null;if(w&&w.isTexture){let E=y.backgroundBlurriness>0;w=e.get(w,E)}return w}function p(y){let w=!1,E=u(y);E===null?m(o,a):E&&E.isColor&&(m(E,1),w=!0);let v=n.xr.getEnvironmentBlendMode();v==="additive"?t.buffers.color.setClear(0,0,0,1,r):v==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(y,w){let E=u(w);E&&(E.isCubeTexture||E.mapping===vo)?(c===void 0&&(c=new _e(new ji(1,1,1),new Ln({name:"BackgroundCubeMaterial",uniforms:Es(ui.backgroundCube.uniforms),vertexShader:ui.backgroundCube.vertexShader,fragmentShader:ui.backgroundCube.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(v,b,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=E,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(v_.makeRotationFromEuler(w.backgroundRotation)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(nm),c.material.toneMapped=ct.getTransfer(E.colorSpace)!==vt,(f!==E||h!==E.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,f=E,h=E.version,d=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new _e(new li(2,2),new Ln({name:"BackgroundMaterial",uniforms:Es(ui.background.uniforms),vertexShader:ui.background.vertexShader,fragmentShader:ui.background.fragmentShader,side:Ai,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=ct.getTransfer(E.colorSpace)!==vt,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(f!==E||h!==E.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,f=E,h=E.version,d=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,w){y.getRGB(nc,Zh(n)),t.buffers.color.setClear(nc.r,nc.g,nc.b,w,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,w=1){o.set(y),a=w,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,m(o,a)},render:p,addToRenderList:x,dispose:g}}function b_(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,o=!1;function a(S,P,z,X,D){let k=!1,G=h(S,X,z,P);r!==G&&(r=G,c(r.object)),k=u(S,X,z,D),k&&p(S,X,z,D),D!==null&&e.update(D,n.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,E(S,P,z,X),D!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(D).buffer))}function l(){return n.createVertexArray()}function c(S){return n.bindVertexArray(S)}function f(S){return n.deleteVertexArray(S)}function h(S,P,z,X){let D=X.wireframe===!0,k=i[P.id];k===void 0&&(k={},i[P.id]=k);let G=S.isInstancedMesh===!0?S.id:0,re=k[G];re===void 0&&(re={},k[G]=re);let L=re[z.id];L===void 0&&(L={},re[z.id]=L);let V=L[D];return V===void 0&&(V=d(l()),L[D]=V),V}function d(S){let P=[],z=[],X=[];for(let D=0;D<t;D++)P[D]=0,z[D]=0,X[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:z,attributeDivisors:X,object:S,attributes:{},index:null}}function u(S,P,z,X){let D=r.attributes,k=P.attributes,G=0,re=z.getAttributes();for(let L in re)if(re[L].location>=0){let ne=D[L],fe=k[L];if(fe===void 0&&(L==="instanceMatrix"&&S.instanceMatrix&&(fe=S.instanceMatrix),L==="instanceColor"&&S.instanceColor&&(fe=S.instanceColor)),ne===void 0||ne.attribute!==fe||fe&&ne.data!==fe.data)return!0;G++}return r.attributesNum!==G||r.index!==X}function p(S,P,z,X){let D={},k=P.attributes,G=0,re=z.getAttributes();for(let L in re)if(re[L].location>=0){let ne=k[L];ne===void 0&&(L==="instanceMatrix"&&S.instanceMatrix&&(ne=S.instanceMatrix),L==="instanceColor"&&S.instanceColor&&(ne=S.instanceColor));let fe={};fe.attribute=ne,ne&&ne.data&&(fe.data=ne.data),D[L]=fe,G++}r.attributes=D,r.attributesNum=G,r.index=X}function x(){let S=r.newAttributes;for(let P=0,z=S.length;P<z;P++)S[P]=0}function m(S){g(S,0)}function g(S,P){let z=r.newAttributes,X=r.enabledAttributes,D=r.attributeDivisors;z[S]=1,X[S]===0&&(n.enableVertexAttribArray(S),X[S]=1),D[S]!==P&&(n.vertexAttribDivisor(S,P),D[S]=P)}function y(){let S=r.newAttributes,P=r.enabledAttributes;for(let z=0,X=P.length;z<X;z++)P[z]!==S[z]&&(n.disableVertexAttribArray(z),P[z]=0)}function w(S,P,z,X,D,k,G){G===!0?n.vertexAttribIPointer(S,P,z,D,k):n.vertexAttribPointer(S,P,z,X,D,k)}function E(S,P,z,X){x();let D=X.attributes,k=z.getAttributes(),G=P.defaultAttributeValues;for(let re in k){let L=k[re];if(L.location>=0){let V=D[re];if(V===void 0&&(re==="instanceMatrix"&&S.instanceMatrix&&(V=S.instanceMatrix),re==="instanceColor"&&S.instanceColor&&(V=S.instanceColor)),V!==void 0){let ne=V.normalized,fe=V.itemSize,ke=e.get(V);if(ke===void 0)continue;let K=ke.buffer,Q=ke.type,N=ke.bytesPerElement,q=Q===n.INT||Q===n.UNSIGNED_INT||V.gpuType===gl;if(V.isInterleavedBufferAttribute){let j=V.data,oe=j.stride,we=V.offset;if(j.isInstancedInterleavedBuffer){for(let Ie=0;Ie<L.locationSize;Ie++)g(L.location+Ie,j.meshPerAttribute);S.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Ie=0;Ie<L.locationSize;Ie++)m(L.location+Ie);n.bindBuffer(n.ARRAY_BUFFER,K);for(let Ie=0;Ie<L.locationSize;Ie++)w(L.location+Ie,fe/L.locationSize,Q,ne,oe*N,(we+fe/L.locationSize*Ie)*N,q)}else{if(V.isInstancedBufferAttribute){for(let j=0;j<L.locationSize;j++)g(L.location+j,V.meshPerAttribute);S.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let j=0;j<L.locationSize;j++)m(L.location+j);n.bindBuffer(n.ARRAY_BUFFER,K);for(let j=0;j<L.locationSize;j++)w(L.location+j,fe/L.locationSize,Q,ne,fe*N,fe/L.locationSize*j*N,q)}}else if(G!==void 0){let ne=G[re];if(ne!==void 0)switch(ne.length){case 2:n.vertexAttrib2fv(L.location,ne);break;case 3:n.vertexAttrib3fv(L.location,ne);break;case 4:n.vertexAttrib4fv(L.location,ne);break;default:n.vertexAttrib1fv(L.location,ne)}}}}y()}function v(){M();for(let S in i){let P=i[S];for(let z in P){let X=P[z];for(let D in X){let k=X[D];for(let G in k)f(k[G].object),delete k[G];delete X[D]}}delete i[S]}}function b(S){if(i[S.id]===void 0)return;let P=i[S.id];for(let z in P){let X=P[z];for(let D in X){let k=X[D];for(let G in k)f(k[G].object),delete k[G];delete X[D]}}delete i[S.id]}function R(S){for(let P in i){let z=i[P];for(let X in z){let D=z[X];if(D[S.id]===void 0)continue;let k=D[S.id];for(let G in k)f(k[G].object),delete k[G];delete D[S.id]}}}function _(S){for(let P in i){let z=i[P],X=S.isInstancedMesh===!0?S.id:0,D=z[X];if(D!==void 0){for(let k in D){let G=D[k];for(let re in G)f(G[re].object),delete G[re];delete D[k]}delete z[X],Object.keys(z).length===0&&delete i[P]}}}function M(){C(),o=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:M,resetDefaultState:C,dispose:v,releaseStatesOfGeometry:b,releaseStatesOfObject:_,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:m,disableUnusedAttributes:y}}function w_(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function o(l,c,f){f!==0&&(n.drawArraysInstanced(i,l,c,f),t.update(c,i,f))}function a(l,c,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,f);let d=0;for(let u=0;u<f;u++)d+=c[u];t.update(d,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function T_(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==Hn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let _=R===fi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Tn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==zn&&!_)}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",f=l(c);f!==c&&(qe("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);let h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&qe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),v=n.getParameter(n.MAX_SAMPLES),b=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:u,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:y,maxVaryings:w,maxFragmentUniforms:E,maxSamples:v,samples:b}}function E_(n){let e=this,t=null,i=0,s=!1,r=!1,o=new On,a=new Je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let u=h.length!==0||d||i!==0||s;return s=d,i=h.length,u},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=f(h,d,0)},this.setState=function(h,d,u){let p=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,g=n.get(h);if(!s||p===null||p.length===0||r&&!m)r?f(null):c();else{let y=r?0:i,w=y*4,E=g.clippingState||null;l.value=E,E=f(p,d,w,u);for(let v=0;v!==w;++v)E[v]=t[v];g.clippingState=E,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(h,d,u,p){let x=h!==null?h.length:0,m=null;if(x!==0){if(m=l.value,p!==!0||m===null){let g=u+x*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<g)&&(m=new Float32Array(g));for(let w=0,E=u;w!==x;++w,E+=4)o.copy(h[w]).applyMatrix4(y,a),o.normal.toArray(m,E),m[E+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}var as=4,Dp=[.125,.215,.35,.446,.526,.582],As=20,A_=256,Co=new lr,Np=new tt,Qh=null,jh=0,ef=0,tf=!1,R_=new B,sc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:o=256,position:a=R_}=r;Qh=this._renderer.getRenderTarget(),jh=this._renderer.getActiveCubeFace(),ef=this._renderer.getActiveMipmapLevel(),tf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Qh,jh,ef),this._renderer.xr.enabled=tf,e.scissorTest=!1,dr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ss||e.mapping===Ts?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qh=this._renderer.getRenderTarget(),jh=this._renderer.getActiveCubeFace(),ef=this._renderer.getActiveMipmapLevel(),tf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:hn,minFilter:hn,generateMipmaps:!1,type:fi,format:Hn,colorSpace:Zr,depthBuffer:!1},s=Up(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Up(e,t,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=C_(r)),this._blurMaterial=I_(r,e,t),this._ggxMaterial=S_(r,e,t)}return s}_compileMaterial(e){let t=new _e(new qt,e);this._renderer.compile(t,Co)}_sceneToCubeUV(e,t,i,s,r){let l=new mn(90,1,t,i),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Np),h.toneMapping=Zn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new _e(new ji,new wn({name:"PMREM.Background",side:Mn,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,m=x.material,g=!1,y=e.background;y?y.isColor&&(m.color.copy(y),e.background=null,g=!0):(m.color.copy(Np),g=!0);for(let w=0;w<6;w++){let E=w%3;E===0?(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+f[w],r.y,r.z)):E===1?(l.up.set(0,0,c[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+f[w],r.z)):(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+f[w]));let v=this._cubeSize;dr(s,E*v,w>2?v:0,v,v),h.setRenderTarget(s),g&&h.render(x,l),h.render(e,l)}h.toneMapping=u,h.autoClear=d,e.background=y}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===ss||e.mapping===Ts;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=kp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fp());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;dr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Co)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;let l=o.uniforms,c=i/(this._lodMeshes.length-1),f=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-f*f),d=0+c*1.25,u=h*d,{_lodMax:p}=this,x=this._sizeLods[i],m=3*x*(i>p-as?i-p+as:0),g=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=u,l.mipInt.value=p-t,dr(r,m,g,3*x,2*x),s.setRenderTarget(r),s.render(a,Co),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-i,dr(e,m,g,3*x,2*x),s.setRenderTarget(e),s.render(a,Co)}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Xe("blur direction must be either latitudinal or longitudinal!");let f=3,h=this._lodMeshes[s];h.material=c;let d=c.uniforms,u=this._sizeLods[i]-1,p=isFinite(r)?Math.PI/(2*u):2*Math.PI/(2*As-1),x=r/p,m=isFinite(r)?1+Math.floor(f*x):As;m>As&&qe(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${As}`);let g=[],y=0;for(let R=0;R<As;++R){let _=R/x,M=Math.exp(-_*_/2);g.push(M),R===0?y+=M:R<m&&(y+=2*M)}for(let R=0;R<g.length;R++)g[R]=g[R]/y;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=g,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:w}=this;d.dTheta.value=p,d.mipInt.value=w-i;let E=this._sizeLods[s],v=3*E*(s>w-as?s-w+as:0),b=4*(this._cubeSize-E);dr(t,v,b,3*E,2*E),l.setRenderTarget(t),l.render(h,Co)}};function C_(n){let e=[],t=[],i=[],s=n,r=n-as+1+Dp.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>n-as?l=Dp[o-n+as-1]:o===0&&(l=0),t.push(l);let c=1/(a-2),f=-c,h=1+c,d=[f,f,h,f,h,h,f,f,h,h,f,h],u=6,p=6,x=3,m=2,g=1,y=new Float32Array(x*p*u),w=new Float32Array(m*p*u),E=new Float32Array(g*p*u);for(let b=0;b<u;b++){let R=b%3*2/3-1,_=b>2?0:-1,M=[R,_,0,R+2/3,_,0,R+2/3,_+1,0,R,_,0,R+2/3,_+1,0,R,_+1,0];y.set(M,x*p*b),w.set(d,m*p*b);let C=[b,b,b,b,b,b];E.set(C,g*p*b)}let v=new qt;v.setAttribute("position",new Kt(y,x)),v.setAttribute("uv",new Kt(w,m)),v.setAttribute("faceIndex",new Kt(E,g)),i.push(new _e(v,null)),s>as&&s--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Up(n,e,t){let i=new Pn(n,e,t);return i.texture.mapping=vo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function dr(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function S_(n,e,t){return new Ln({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:A_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ac(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function I_(n,e,t){let i=new Float32Array(As),s=new B(0,1,0);return new Ln({name:"SphericalGaussianBlur",defines:{n:As,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ac(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function Fp(){return new Ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ac(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function kp(){return new Ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ac(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function ac(){return`

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
	`}var rc=class extends Pn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new oo(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ji(5,5,5),r=new Ln({name:"CubemapFromEquirect",uniforms:Es(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Mn,blending:ci});r.uniforms.tEquirect.value=t;let o=new _e(s,r),a=t.minFilter;return t.minFilter===hi&&(t.minFilter=hn),new hl(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}};function P_(n){let e=new WeakMap,t=new WeakMap,i=null;function s(d,u=!1){return d==null?null:u?o(d):r(d)}function r(d){if(d&&d.isTexture){let u=d.mapping;if(u===ul||u===pl)if(e.has(d)){let p=e.get(d).texture;return a(p,d.mapping)}else{let p=d.image;if(p&&p.height>0){let x=new rc(p.height);return x.fromEquirectangularTexture(n,d),e.set(d,x),d.addEventListener("dispose",c),a(x.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){let u=d.mapping,p=u===ul||u===pl,x=u===ss||u===Ts;if(p||x){let m=t.get(d),g=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return i===null&&(i=new sc(n)),m=p?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{let y=d.image;return p&&y&&y.height>0||x&&y&&l(y)?(i===null&&(i=new sc(n)),m=p?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",f),m.texture):null}}}return d}function a(d,u){return u===ul?d.mapping=ss:u===pl&&(d.mapping=Ts),d}function l(d){let u=0,p=6;for(let x=0;x<p;x++)d[x]!==void 0&&u++;return u===p}function c(d){let u=d.target;u.removeEventListener("dispose",c);let p=e.get(u);p!==void 0&&(e.delete(u),p.dispose())}function f(d){let u=d.target;u.removeEventListener("dispose",f);let p=t.get(u);p!==void 0&&(t.delete(u),p.dispose())}function h(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function L_(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Ga("WebGLRenderer: "+i+" extension not supported."),s}}}function D_(n,e,t,i){let s={},r=new WeakMap;function o(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let p in d.attributes)e.remove(d.attributes[p]);d.removeEventListener("dispose",o),delete s[d.id];let u=r.get(d);u&&(e.remove(u),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(h){let d=h.attributes;for(let u in d)e.update(d[u],n.ARRAY_BUFFER)}function c(h){let d=[],u=h.index,p=h.attributes.position,x=0;if(p===void 0)return;if(u!==null){let y=u.array;x=u.version;for(let w=0,E=y.length;w<E;w+=3){let v=y[w+0],b=y[w+1],R=y[w+2];d.push(v,b,b,R,R,v)}}else{let y=p.array;x=p.version;for(let w=0,E=y.length/3-1;w<E;w+=3){let v=w+0,b=w+1,R=w+2;d.push(v,b,b,R,R,v)}}let m=new(p.count>=65535?no:to)(d,1);m.version=x;let g=r.get(h);g&&e.remove(g),r.set(h,m)}function f(h){let d=r.get(h);if(d){let u=h.index;u!==null&&d.version<u.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:f}}function N_(n,e,t){let i;function s(h){i=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function l(h,d){n.drawElements(i,d,r,h*o),t.update(d,i,1)}function c(h,d,u){u!==0&&(n.drawElementsInstanced(i,d,r,h*o,u),t.update(d,i,u))}function f(h,d,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,h,0,u);let x=0;for(let m=0;m<u;m++)x+=d[m];t.update(x,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function U_(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:Xe("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function F_(n,e,t){let i=new WeakMap,s=new Ht;function r(o,a,l){let c=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=f!==void 0?f.length:0,d=i.get(a);if(d===void 0||d.count!==h){let M=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",M)};d!==void 0&&d.texture.dispose();let u=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],w=0;u===!0&&(w=1),p===!0&&(w=2),x===!0&&(w=3);let E=a.attributes.position.count*w,v=1;E>e.maxTextureSize&&(v=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);let b=new Float32Array(E*v*4*h),R=new Qr(b,E,v,h);R.type=zn,R.needsUpdate=!0;let _=w*4;for(let C=0;C<h;C++){let S=m[C],P=g[C],z=y[C],X=E*v*4*C;for(let D=0;D<S.count;D++){let k=D*_;u===!0&&(s.fromBufferAttribute(S,D),b[X+k+0]=s.x,b[X+k+1]=s.y,b[X+k+2]=s.z,b[X+k+3]=0),p===!0&&(s.fromBufferAttribute(P,D),b[X+k+4]=s.x,b[X+k+5]=s.y,b[X+k+6]=s.z,b[X+k+7]=0),x===!0&&(s.fromBufferAttribute(z,D),b[X+k+8]=s.x,b[X+k+9]=s.y,b[X+k+10]=s.z,b[X+k+11]=z.itemSize===4?s.w:1)}}d={count:h,texture:R,size:new $e(E,v)},i.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let u=0;for(let x=0;x<c.length;x++)u+=c[x];let p=a.morphTargetsRelative?1:1-u;l.getUniforms().setValue(n,"morphTargetBaseInfluence",p),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function k_(n,e,t,i,s){let r=new WeakMap;function o(c){let f=s.render.frame,h=c.geometry,d=e.get(c,h);if(r.get(d)!==f&&(e.update(d),r.set(d,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==f&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,f))),c.isSkinnedMesh){let u=c.skeleton;r.get(u)!==f&&(u.update(),r.set(u,f))}return d}function a(){r=new WeakMap}function l(c){let f=c.target;f.removeEventListener("dispose",l),i.releaseStatesOfObject(f),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:o,dispose:a}}var O_={[Dh]:"LINEAR_TONE_MAPPING",[Nh]:"REINHARD_TONE_MAPPING",[Uh]:"CINEON_TONE_MAPPING",[Fh]:"ACES_FILMIC_TONE_MAPPING",[Oh]:"AGX_TONE_MAPPING",[Bh]:"NEUTRAL_TONE_MAPPING",[kh]:"CUSTOM_TONE_MAPPING"};function B_(n,e,t,i,s){let r=new Pn(e,t,{type:n,depthBuffer:i,stencilBuffer:s,depthTexture:i?new Pi(e,t):void 0}),o=new Pn(e,t,{type:fi,depthBuffer:!1,stencilBuffer:!1}),a=new qt;a.setAttribute("position",new Ct([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new Ct([0,2,0,0,2,0],2));let l=new Ja({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new _e(a,l),f=new lr(-1,1,1,-1,0,1),h=null,d=null,u=!1,p,x=null,m=[],g=!1;this.setSize=function(y,w){r.setSize(y,w),o.setSize(y,w);for(let E=0;E<m.length;E++){let v=m[E];v.setSize&&v.setSize(y,w)}},this.setEffects=function(y){m=y,g=m.length>0&&m[0].isRenderPass===!0;let w=r.width,E=r.height;for(let v=0;v<m.length;v++){let b=m[v];b.setSize&&b.setSize(w,E)}},this.begin=function(y,w){if(u||y.toneMapping===Zn&&m.length===0)return!1;if(x=w,w!==null){let E=w.width,v=w.height;(r.width!==E||r.height!==v)&&this.setSize(E,v)}return g===!1&&y.setRenderTarget(r),p=y.toneMapping,y.toneMapping=Zn,!0},this.hasRenderPass=function(){return g},this.end=function(y,w){y.toneMapping=p,u=!0;let E=r,v=o;for(let b=0;b<m.length;b++){let R=m[b];if(R.enabled!==!1&&(R.render(y,v,E,w),R.needsSwap!==!1)){let _=E;E=v,v=_}}if(h!==y.outputColorSpace||d!==y.toneMapping){h=y.outputColorSpace,d=y.toneMapping,l.defines={},ct.getTransfer(h)===vt&&(l.defines.SRGB_TRANSFER="");let b=O_[d];b&&(l.defines[b]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=E.texture,y.setRenderTarget(x),y.render(c,f),x=null,u=!1},this.isCompositing=function(){return u},this.dispose=function(){r.depthTexture&&r.depthTexture.dispose(),r.dispose(),o.dispose(),a.dispose(),l.dispose()}}var im=new vn,rf=new Pi(1,1),sm=new Qr,rm=new Ya,om=new oo,Op=[],Bp=[],zp=new Float32Array(16),Hp=new Float32Array(9),Vp=new Float32Array(4);function pr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Op[s];if(r===void 0&&(r=new Float32Array(s),Op[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function nn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function sn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function lc(n,e){let t=Bp[e];t===void 0&&(t=new Int32Array(e),Bp[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function z_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function H_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;n.uniform2fv(this.addr,e),sn(t,e)}}function V_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(nn(t,e))return;n.uniform3fv(this.addr,e),sn(t,e)}}function G_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;n.uniform4fv(this.addr,e),sn(t,e)}}function W_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(nn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),sn(t,e)}else{if(nn(t,i))return;Vp.set(i),n.uniformMatrix2fv(this.addr,!1,Vp),sn(t,i)}}function X_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(nn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),sn(t,e)}else{if(nn(t,i))return;Hp.set(i),n.uniformMatrix3fv(this.addr,!1,Hp),sn(t,i)}}function q_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(nn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),sn(t,e)}else{if(nn(t,i))return;zp.set(i),n.uniformMatrix4fv(this.addr,!1,zp),sn(t,i)}}function Y_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Z_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;n.uniform2iv(this.addr,e),sn(t,e)}}function $_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;n.uniform3iv(this.addr,e),sn(t,e)}}function K_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;n.uniform4iv(this.addr,e),sn(t,e)}}function J_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Q_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;n.uniform2uiv(this.addr,e),sn(t,e)}}function j_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;n.uniform3uiv(this.addr,e),sn(t,e)}}function ev(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;n.uniform4uiv(this.addr,e),sn(t,e)}}function tv(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(rf.compareFunction=t.isReversedDepthBuffer()?tc:ec,r=rf):r=im,t.setTexture2D(e||r,s)}function nv(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||rm,s)}function iv(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||om,s)}function sv(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||sm,s)}function rv(n){switch(n){case 5126:return z_;case 35664:return H_;case 35665:return V_;case 35666:return G_;case 35674:return W_;case 35675:return X_;case 35676:return q_;case 5124:case 35670:return Y_;case 35667:case 35671:return Z_;case 35668:case 35672:return $_;case 35669:case 35673:return K_;case 5125:return J_;case 36294:return Q_;case 36295:return j_;case 36296:return ev;case 35678:case 36198:case 36298:case 36306:case 35682:return tv;case 35679:case 36299:case 36307:return nv;case 35680:case 36300:case 36308:case 36293:return iv;case 36289:case 36303:case 36311:case 36292:return sv}}function ov(n,e){n.uniform1fv(this.addr,e)}function av(n,e){let t=pr(e,this.size,2);n.uniform2fv(this.addr,t)}function lv(n,e){let t=pr(e,this.size,3);n.uniform3fv(this.addr,t)}function cv(n,e){let t=pr(e,this.size,4);n.uniform4fv(this.addr,t)}function hv(n,e){let t=pr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function fv(n,e){let t=pr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function dv(n,e){let t=pr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function uv(n,e){n.uniform1iv(this.addr,e)}function pv(n,e){n.uniform2iv(this.addr,e)}function mv(n,e){n.uniform3iv(this.addr,e)}function gv(n,e){n.uniform4iv(this.addr,e)}function xv(n,e){n.uniform1uiv(this.addr,e)}function yv(n,e){n.uniform2uiv(this.addr,e)}function _v(n,e){n.uniform3uiv(this.addr,e)}function vv(n,e){n.uniform4uiv(this.addr,e)}function Mv(n,e,t){let i=this.cache,s=e.length,r=lc(t,s);nn(i,r)||(n.uniform1iv(this.addr,r),sn(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=rf:o=im;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function bv(n,e,t){let i=this.cache,s=e.length,r=lc(t,s);nn(i,r)||(n.uniform1iv(this.addr,r),sn(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||rm,r[o])}function wv(n,e,t){let i=this.cache,s=e.length,r=lc(t,s);nn(i,r)||(n.uniform1iv(this.addr,r),sn(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||om,r[o])}function Tv(n,e,t){let i=this.cache,s=e.length,r=lc(t,s);nn(i,r)||(n.uniform1iv(this.addr,r),sn(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||sm,r[o])}function Ev(n){switch(n){case 5126:return ov;case 35664:return av;case 35665:return lv;case 35666:return cv;case 35674:return hv;case 35675:return fv;case 35676:return dv;case 5124:case 35670:return uv;case 35667:case 35671:return pv;case 35668:case 35672:return mv;case 35669:case 35673:return gv;case 5125:return xv;case 36294:return yv;case 36295:return _v;case 36296:return vv;case 35678:case 36198:case 36298:case 36306:case 35682:return Mv;case 35679:case 36299:case 36307:return bv;case 35680:case 36300:case 36308:case 36293:return wv;case 36289:case 36303:case 36311:case 36292:return Tv}}var of=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=rv(t.type)}},af=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ev(t.type)}},lf=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},nf=/(\w+)(\])?(\[|\.)?/g;function Gp(n,e){n.seq.push(e),n.map[e.id]=e}function Av(n,e,t){let i=n.name,s=i.length;for(nf.lastIndex=0;;){let r=nf.exec(i),o=nf.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Gp(t,c===void 0?new of(a,n,e):new af(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new lf(a),Gp(t,h)),t=h}}}var ur=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);Av(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function Wp(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var Rv=37297,Cv=0;function Sv(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var Xp=new Je;function Iv(n){ct._getMatrix(Xp,ct.workingColorSpace,n);let e=`mat3( ${Xp.elements.map(t=>t.toFixed(4))} )`;switch(ct.getTransfer(n)){case $r:return[e,"LinearTransferOETF"];case vt:return[e,"sRGBTransferOETF"];default:return qe("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function qp(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Sv(n.getShaderSource(e),a)}else return r}function Pv(n,e){let t=Iv(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Lv={[Dh]:"Linear",[Nh]:"Reinhard",[Uh]:"Cineon",[Fh]:"ACESFilmic",[Oh]:"AgX",[Bh]:"Neutral",[kh]:"Custom"};function Dv(n,e){let t=Lv[e];return t===void 0?(qe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var ic=new B;function Nv(){ct.getLuminanceCoefficients(ic);let n=ic.x.toFixed(4),e=ic.y.toFixed(4),t=ic.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Uv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Io).join(`
`)}function Fv(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function kv(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Io(n){return n!==""}function Yp(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Zp(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Ov=/^[ \t]*#include +<([\w\d./]+)>/gm;function cf(n){return n.replace(Ov,zv)}var Bv=new Map;function zv(n,e){let t=st[e];if(t===void 0){let i=Bv.get(e);if(i!==void 0)t=st[i],qe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return cf(t)}var Hv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $p(n){return n.replace(Hv,Vv)}function Vv(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Kp(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}var Gv={[_o]:"SHADOWMAP_TYPE_PCF",[cr]:"SHADOWMAP_TYPE_VSM"};function Wv(n){return Gv[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Xv={[ss]:"ENVMAP_TYPE_CUBE",[Ts]:"ENVMAP_TYPE_CUBE",[vo]:"ENVMAP_TYPE_CUBE_UV"};function qv(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":Xv[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var Yv={[Ts]:"ENVMAP_MODE_REFRACTION"};function Zv(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Yv[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var $v={[dl]:"ENVMAP_BLENDING_MULTIPLY",[pp]:"ENVMAP_BLENDING_MIX",[mp]:"ENVMAP_BLENDING_ADD"};function Kv(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":$v[n.combine]||"ENVMAP_BLENDING_NONE"}function Jv(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Qv(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=Wv(t),c=qv(t),f=Zv(t),h=Kv(t),d=Jv(t),u=Uv(t),p=Fv(r),x=s.createProgram(),m,g,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Io).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Io).join(`
`),g.length>0&&(g+=`
`)):(m=[Kp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Io).join(`
`),g=[Kp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Zn?"#define TONE_MAPPING":"",t.toneMapping!==Zn?st.tonemapping_pars_fragment:"",t.toneMapping!==Zn?Dv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",st.colorspace_pars_fragment,Pv("linearToOutputTexel",t.outputColorSpace),Nv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Io).join(`
`)),o=cf(o),o=Yp(o,t),o=Zp(o,t),a=cf(a),a=Yp(a,t),a=Zp(a,t),o=$p(o),a=$p(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===Yh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Yh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let w=y+m+o,E=y+g+a,v=Wp(s,s.VERTEX_SHADER,w),b=Wp(s,s.FRAGMENT_SHADER,E);s.attachShader(x,v),s.attachShader(x,b),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function R(S){if(n.debug.checkShaderErrors){let P=s.getProgramInfoLog(x)||"",z=s.getShaderInfoLog(v)||"",X=s.getShaderInfoLog(b)||"",D=P.trim(),k=z.trim(),G=X.trim(),re=!0,L=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(re=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,v,b);else{let V=qp(s,v,"vertex"),ne=qp(s,b,"fragment");Xe("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+D+`
`+V+`
`+ne)}else D!==""?qe("WebGLProgram: Program Info Log:",D):(k===""||G==="")&&(L=!1);L&&(S.diagnostics={runnable:re,programLog:D,vertexShader:{log:k,prefix:m},fragmentShader:{log:G,prefix:g}})}s.deleteShader(v),s.deleteShader(b),_=new ur(s,x),M=kv(s,x)}let _;this.getUniforms=function(){return _===void 0&&R(this),_};let M;this.getAttributes=function(){return M===void 0&&R(this),M};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(x,Rv)),C},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Cv++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=v,this.fragmentShader=b,this}var jv=0,hf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new ff(e),t.set(e,i)),i}},ff=class{constructor(e){this.id=jv++,this.code=e,this.usedTimes=0}};function eM(n){return n===os||n===Ao||n===Ro}function tM(n,e,t,i,s,r){let o=new sr,a=new hf,l=new Set,c=[],f=new Map,h=i.logarithmicDepthBuffer,d=i.precision,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return l.add(_),_===0?"uv":`uv${_}`}function x(_,M,C,S,P,z){let X=S.fog,D=P.geometry,k=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?S.environment:null,G=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,re=e.get(_.envMap||k,G),L=re&&re.mapping===vo?re.image.height:null,V=u[_.type];_.precision!==null&&(d=i.getMaxPrecision(_.precision),d!==_.precision&&qe("WebGLProgram.getParameters:",_.precision,"not supported, using",d,"instead."));let ne=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,fe=ne!==void 0?ne.length:0,ke=0;D.morphAttributes.position!==void 0&&(ke=1),D.morphAttributes.normal!==void 0&&(ke=2),D.morphAttributes.color!==void 0&&(ke=3);let K,Q,N,q;if(V){let Qe=ui[V];K=Qe.vertexShader,Q=Qe.fragmentShader}else K=_.vertexShader,Q=_.fragmentShader,a.update(_),N=a.getVertexShaderID(_),q=a.getFragmentShaderID(_);let j=n.getRenderTarget(),oe=n.state.buffers.depth.getReversed(),we=P.isInstancedMesh===!0,Ie=P.isBatchedMesh===!0,De=!!_.map,Ge=!!_.matcap,Ze=!!re,Ye=!!_.aoMap,Oe=!!_.lightMap,St=!!_.bumpMap,It=!!_.normalMap,En=!!_.displacementMap,O=!!_.emissiveMap,jt=!!_.metalnessMap,lt=!!_.roughnessMap,Pt=_.anisotropy>0,ve=_.clearcoat>0,Vt=_.dispersion>0,I=_.iridescence>0,T=_.sheen>0,W=_.transmission>0,ie=Pt&&!!_.anisotropyMap,ce=ve&&!!_.clearcoatMap,ue=ve&&!!_.clearcoatNormalMap,ye=ve&&!!_.clearcoatRoughnessMap,ee=I&&!!_.iridescenceMap,se=I&&!!_.iridescenceThicknessMap,Ee=T&&!!_.sheenColorMap,Pe=T&&!!_.sheenRoughnessMap,ge=!!_.specularMap,pe=!!_.specularColorMap,Ke=!!_.specularIntensityMap,nt=W&&!!_.transmissionMap,pt=W&&!!_.thicknessMap,U=!!_.gradientMap,me=!!_.alphaMap,te=_.alphaTest>0,Re=!!_.alphaHash,xe=!!_.extensions,le=Zn;_.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(le=n.toneMapping);let Ue={shaderID:V,shaderType:_.type,shaderName:_.name,vertexShader:K,fragmentShader:Q,defines:_.defines,customVertexShaderID:N,customFragmentShaderID:q,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:d,batching:Ie,batchingColor:Ie&&P._colorsTexture!==null,instancing:we,instancingColor:we&&P.instanceColor!==null,instancingMorph:we&&P.morphTexture!==null,outputColorSpace:j===null?n.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:ct.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:De,matcap:Ge,envMap:Ze,envMapMode:Ze&&re.mapping,envMapCubeUVHeight:L,aoMap:Ye,lightMap:Oe,bumpMap:St,normalMap:It,displacementMap:En,emissiveMap:O,normalMapObjectSpace:It&&_.normalMapType===yp,normalMapTangentSpace:It&&_.normalMapType===jl,packedNormalMap:It&&_.normalMapType===jl&&eM(_.normalMap.format),metalnessMap:jt,roughnessMap:lt,anisotropy:Pt,anisotropyMap:ie,clearcoat:ve,clearcoatMap:ce,clearcoatNormalMap:ue,clearcoatRoughnessMap:ye,dispersion:Vt,iridescence:I,iridescenceMap:ee,iridescenceThicknessMap:se,sheen:T,sheenColorMap:Ee,sheenRoughnessMap:Pe,specularMap:ge,specularColorMap:pe,specularIntensityMap:Ke,transmission:W,transmissionMap:nt,thicknessMap:pt,gradientMap:U,opaque:_.transparent===!1&&_.blending===Zi&&_.alphaToCoverage===!1,alphaMap:me,alphaTest:te,alphaHash:Re,combine:_.combine,mapUv:De&&p(_.map.channel),aoMapUv:Ye&&p(_.aoMap.channel),lightMapUv:Oe&&p(_.lightMap.channel),bumpMapUv:St&&p(_.bumpMap.channel),normalMapUv:It&&p(_.normalMap.channel),displacementMapUv:En&&p(_.displacementMap.channel),emissiveMapUv:O&&p(_.emissiveMap.channel),metalnessMapUv:jt&&p(_.metalnessMap.channel),roughnessMapUv:lt&&p(_.roughnessMap.channel),anisotropyMapUv:ie&&p(_.anisotropyMap.channel),clearcoatMapUv:ce&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:ue&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&p(_.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:se&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&p(_.sheenRoughnessMap.channel),specularMapUv:ge&&p(_.specularMap.channel),specularColorMapUv:pe&&p(_.specularColorMap.channel),specularIntensityMapUv:Ke&&p(_.specularIntensityMap.channel),transmissionMapUv:nt&&p(_.transmissionMap.channel),thicknessMapUv:pt&&p(_.thicknessMap.channel),alphaMapUv:me&&p(_.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(It||Pt),vertexNormals:!!D.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!D.attributes.uv&&(De||me),fog:!!X,useFog:_.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||D.attributes.normal===void 0&&It===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:oe,skinning:P.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:ke,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:z.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:le,decodeVideoTexture:De&&_.map.isVideoTexture===!0&&ct.getTransfer(_.map.colorSpace)===vt,decodeVideoTextureEmissive:O&&_.emissiveMap.isVideoTexture===!0&&ct.getTransfer(_.emissiveMap.colorSpace)===vt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Bn,flipSided:_.side===Mn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:xe&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xe&&_.extensions.multiDraw===!0||Ie)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ue.vertexUv1s=l.has(1),Ue.vertexUv2s=l.has(2),Ue.vertexUv3s=l.has(3),l.clear(),Ue}function m(_){let M=[];if(_.shaderID?M.push(_.shaderID):(M.push(_.customVertexShaderID),M.push(_.customFragmentShaderID)),_.defines!==void 0)for(let C in _.defines)M.push(C),M.push(_.defines[C]);return _.isRawShaderMaterial===!1&&(g(M,_),y(M,_),M.push(n.outputColorSpace)),M.push(_.customProgramCacheKey),M.join()}function g(_,M){_.push(M.precision),_.push(M.outputColorSpace),_.push(M.envMapMode),_.push(M.envMapCubeUVHeight),_.push(M.mapUv),_.push(M.alphaMapUv),_.push(M.lightMapUv),_.push(M.aoMapUv),_.push(M.bumpMapUv),_.push(M.normalMapUv),_.push(M.displacementMapUv),_.push(M.emissiveMapUv),_.push(M.metalnessMapUv),_.push(M.roughnessMapUv),_.push(M.anisotropyMapUv),_.push(M.clearcoatMapUv),_.push(M.clearcoatNormalMapUv),_.push(M.clearcoatRoughnessMapUv),_.push(M.iridescenceMapUv),_.push(M.iridescenceThicknessMapUv),_.push(M.sheenColorMapUv),_.push(M.sheenRoughnessMapUv),_.push(M.specularMapUv),_.push(M.specularColorMapUv),_.push(M.specularIntensityMapUv),_.push(M.transmissionMapUv),_.push(M.thicknessMapUv),_.push(M.combine),_.push(M.fogExp2),_.push(M.sizeAttenuation),_.push(M.morphTargetsCount),_.push(M.morphAttributeCount),_.push(M.numDirLights),_.push(M.numPointLights),_.push(M.numSpotLights),_.push(M.numSpotLightMaps),_.push(M.numHemiLights),_.push(M.numRectAreaLights),_.push(M.numDirLightShadows),_.push(M.numPointLightShadows),_.push(M.numSpotLightShadows),_.push(M.numSpotLightShadowsWithMaps),_.push(M.numLightProbes),_.push(M.shadowMapType),_.push(M.toneMapping),_.push(M.numClippingPlanes),_.push(M.numClipIntersection),_.push(M.depthPacking)}function y(_,M){o.disableAll(),M.instancing&&o.enable(0),M.instancingColor&&o.enable(1),M.instancingMorph&&o.enable(2),M.matcap&&o.enable(3),M.envMap&&o.enable(4),M.normalMapObjectSpace&&o.enable(5),M.normalMapTangentSpace&&o.enable(6),M.clearcoat&&o.enable(7),M.iridescence&&o.enable(8),M.alphaTest&&o.enable(9),M.vertexColors&&o.enable(10),M.vertexAlphas&&o.enable(11),M.vertexUv1s&&o.enable(12),M.vertexUv2s&&o.enable(13),M.vertexUv3s&&o.enable(14),M.vertexTangents&&o.enable(15),M.anisotropy&&o.enable(16),M.alphaHash&&o.enable(17),M.batching&&o.enable(18),M.dispersion&&o.enable(19),M.batchingColor&&o.enable(20),M.gradientMap&&o.enable(21),M.packedNormalMap&&o.enable(22),M.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),M.numLightProbeGrids>0&&o.enable(22),_.push(o.mask)}function w(_){let M=u[_.type],C;if(M){let S=ui[M];C=Pp.clone(S.uniforms)}else C=_.uniforms;return C}function E(_,M){let C=f.get(M);return C!==void 0?++C.usedTimes:(C=new Qv(n,M,_,s),c.push(C),f.set(M,C)),C}function v(_){if(--_.usedTimes===0){let M=c.indexOf(_);c[M]=c[c.length-1],c.pop(),f.delete(_.cacheKey),_.destroy()}}function b(_){a.remove(_)}function R(){a.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:w,acquireProgram:E,releaseProgram:v,releaseShaderCache:b,programs:c,dispose:R}}function nM(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function iM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Jp(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Qp(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(d){let u=0;return d.isInstancedMesh&&(u+=2),d.isSkinnedMesh&&(u+=1),u}function a(d,u,p,x,m,g){let y=n[e];return y===void 0?(y={id:d.id,object:d,geometry:u,material:p,materialVariant:o(d),groupOrder:x,renderOrder:d.renderOrder,z:m,group:g},n[e]=y):(y.id=d.id,y.object=d,y.geometry=u,y.material=p,y.materialVariant=o(d),y.groupOrder=x,y.renderOrder=d.renderOrder,y.z=m,y.group=g),e++,y}function l(d,u,p,x,m,g){let y=a(d,u,p,x,m,g);p.transmission>0?i.push(y):p.transparent===!0?s.push(y):t.push(y)}function c(d,u,p,x,m,g){let y=a(d,u,p,x,m,g);p.transmission>0?i.unshift(y):p.transparent===!0?s.unshift(y):t.unshift(y)}function f(d,u){t.length>1&&t.sort(d||iM),i.length>1&&i.sort(u||Jp),s.length>1&&s.sort(u||Jp)}function h(){for(let d=e,u=n.length;d<u;d++){let p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:h,sort:f}}function sM(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new Qp,n.set(i,[o])):s>=r.length?(o=new Qp,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function rM(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new tt};break;case"SpotLight":t={position:new B,direction:new B,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":t={color:new tt,position:new B,halfWidth:new B,halfHeight:new B};break}return n[e.id]=t,t}}}function oM(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var aM=0;function lM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function cM(n){let e=new rM,t=oM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new B);let s=new B,r=new Mt,o=new Mt;function a(c){let f=0,h=0,d=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let u=0,p=0,x=0,m=0,g=0,y=0,w=0,E=0,v=0,b=0,R=0;c.sort(lM);for(let M=0,C=c.length;M<C;M++){let S=c[M],P=S.color,z=S.intensity,X=S.distance,D=null;if(S.shadow&&S.shadow.map&&(S.shadow.map.texture.format===os?D=S.shadow.map.texture:D=S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)f+=P.r*z,h+=P.g*z,d+=P.b*z;else if(S.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(S.sh.coefficients[k],z);R++}else if(S.isDirectionalLight){let k=e.get(S);if(k.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let G=S.shadow,re=t.get(S);re.shadowIntensity=G.intensity,re.shadowBias=G.bias,re.shadowNormalBias=G.normalBias,re.shadowRadius=G.radius,re.shadowMapSize=G.mapSize,i.directionalShadow[u]=re,i.directionalShadowMap[u]=D,i.directionalShadowMatrix[u]=S.shadow.matrix,y++}i.directional[u]=k,u++}else if(S.isSpotLight){let k=e.get(S);k.position.setFromMatrixPosition(S.matrixWorld),k.color.copy(P).multiplyScalar(z),k.distance=X,k.coneCos=Math.cos(S.angle),k.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),k.decay=S.decay,i.spot[x]=k;let G=S.shadow;if(S.map&&(i.spotLightMap[v]=S.map,v++,G.updateMatrices(S),S.castShadow&&b++),i.spotLightMatrix[x]=G.matrix,S.castShadow){let re=t.get(S);re.shadowIntensity=G.intensity,re.shadowBias=G.bias,re.shadowNormalBias=G.normalBias,re.shadowRadius=G.radius,re.shadowMapSize=G.mapSize,i.spotShadow[x]=re,i.spotShadowMap[x]=D,E++}x++}else if(S.isRectAreaLight){let k=e.get(S);k.color.copy(P).multiplyScalar(z),k.halfWidth.set(S.width*.5,0,0),k.halfHeight.set(0,S.height*.5,0),i.rectArea[m]=k,m++}else if(S.isPointLight){let k=e.get(S);if(k.color.copy(S.color).multiplyScalar(S.intensity),k.distance=S.distance,k.decay=S.decay,S.castShadow){let G=S.shadow,re=t.get(S);re.shadowIntensity=G.intensity,re.shadowBias=G.bias,re.shadowNormalBias=G.normalBias,re.shadowRadius=G.radius,re.shadowMapSize=G.mapSize,re.shadowCameraNear=G.camera.near,re.shadowCameraFar=G.camera.far,i.pointShadow[p]=re,i.pointShadowMap[p]=D,i.pointShadowMatrix[p]=S.shadow.matrix,w++}i.point[p]=k,p++}else if(S.isHemisphereLight){let k=e.get(S);k.skyColor.copy(S.color).multiplyScalar(z),k.groundColor.copy(S.groundColor).multiplyScalar(z),i.hemi[g]=k,g++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Me.LTC_FLOAT_1,i.rectAreaLTC2=Me.LTC_FLOAT_2):(i.rectAreaLTC1=Me.LTC_HALF_1,i.rectAreaLTC2=Me.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=h,i.ambient[2]=d;let _=i.hash;(_.directionalLength!==u||_.pointLength!==p||_.spotLength!==x||_.rectAreaLength!==m||_.hemiLength!==g||_.numDirectionalShadows!==y||_.numPointShadows!==w||_.numSpotShadows!==E||_.numSpotMaps!==v||_.numLightProbes!==R)&&(i.directional.length=u,i.spot.length=x,i.rectArea.length=m,i.point.length=p,i.hemi.length=g,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=E+v-b,i.spotLightMap.length=v,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=R,_.directionalLength=u,_.pointLength=p,_.spotLength=x,_.rectAreaLength=m,_.hemiLength=g,_.numDirectionalShadows=y,_.numPointShadows=w,_.numSpotShadows=E,_.numSpotMaps=v,_.numLightProbes=R,i.version=aM++)}function l(c,f){let h=0,d=0,u=0,p=0,x=0,m=f.matrixWorldInverse;for(let g=0,y=c.length;g<y;g++){let w=c[g];if(w.isDirectionalLight){let E=i.directional[h];E.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),h++}else if(w.isSpotLight){let E=i.spot[u];E.position.setFromMatrixPosition(w.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),u++}else if(w.isRectAreaLight){let E=i.rectArea[p];E.position.setFromMatrixPosition(w.matrixWorld),E.position.applyMatrix4(m),o.identity(),r.copy(w.matrixWorld),r.premultiply(m),o.extractRotation(r),E.halfWidth.set(w.width*.5,0,0),E.halfHeight.set(0,w.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),p++}else if(w.isPointLight){let E=i.point[d];E.position.setFromMatrixPosition(w.matrixWorld),E.position.applyMatrix4(m),d++}else if(w.isHemisphereLight){let E=i.hemi[x];E.direction.setFromMatrixPosition(w.matrixWorld),E.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function jp(n){let e=new cM(n),t=[],i=[],s=[];function r(d){h.camera=d,t.length=0,i.length=0,s.length=0}function o(d){t.push(d)}function a(d){i.push(d)}function l(d){s.push(d)}function c(){e.setup(t)}function f(d){e.setupView(t,d)}let h={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:f,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function hM(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new jp(n),e.set(s,[a])):r>=o.length?(a=new jp(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var fM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dM=`uniform sampler2D shadow_pass;
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
}`,uM=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],pM=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],em=new Mt,So=new B,sf=new B;function mM(n,e,t){let i=new ar,s=new $e,r=new $e,o=new Ht,a=new Qa,l=new ja,c={},f=t.maxTextureSize,h={[Ai]:Mn,[Mn]:Ai,[Bn]:Bn},d=new Ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:fM,fragmentShader:dM}),u=d.clone();u.defines.HORIZONTAL_PASS=1;let p=new qt;p.setAttribute("position",new Kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new _e(p,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_o;let g=this.type;this.render=function(b,R,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===$u&&(qe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=_o);let M=n.getRenderTarget(),C=n.getActiveCubeFace(),S=n.getActiveMipmapLevel(),P=n.state;P.setBlending(ci),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);let z=g!==this.type;z&&R.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach(D=>D.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,D=b.length;X<D;X++){let k=b[X],G=k.shadow;if(G===void 0){qe("WebGLShadowMap:",k,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let re=G.getFrameExtents();s.multiply(re),r.copy(G.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(r.x=Math.floor(f/re.x),s.x=r.x*re.x,G.mapSize.x=r.x),s.y>f&&(r.y=Math.floor(f/re.y),s.y=r.y*re.y,G.mapSize.y=r.y));let L=n.state.buffers.depth.getReversed();if(G.camera._reversedDepth=L,G.map===null||z===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===cr){if(k.isPointLight){qe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Pn(s.x,s.y,{format:os,type:fi,minFilter:hn,magFilter:hn,generateMipmaps:!1}),G.map.texture.name=k.name+".shadowMap",G.map.depthTexture=new Pi(s.x,s.y,zn),G.map.depthTexture.name=k.name+".shadowMapDepth",G.map.depthTexture.format=ii,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=an,G.map.depthTexture.magFilter=an}else k.isPointLight?(G.map=new rc(s.x),G.map.depthTexture=new $a(s.x,$n)):(G.map=new Pn(s.x,s.y),G.map.depthTexture=new Pi(s.x,s.y,$n)),G.map.depthTexture.name=k.name+".shadowMap",G.map.depthTexture.format=ii,this.type===_o?(G.map.depthTexture.compareFunction=L?tc:ec,G.map.depthTexture.minFilter=hn,G.map.depthTexture.magFilter=hn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=an,G.map.depthTexture.magFilter=an);G.camera.updateProjectionMatrix()}let V=G.map.isWebGLCubeRenderTarget?6:1;for(let ne=0;ne<V;ne++){if(G.map.isWebGLCubeRenderTarget)n.setRenderTarget(G.map,ne),n.clear();else{ne===0&&(n.setRenderTarget(G.map),n.clear());let fe=G.getViewport(ne);o.set(r.x*fe.x,r.y*fe.y,r.x*fe.z,r.y*fe.w),P.viewport(o)}if(k.isPointLight){let fe=G.camera,ke=G.matrix,K=k.distance||fe.far;K!==fe.far&&(fe.far=K,fe.updateProjectionMatrix()),So.setFromMatrixPosition(k.matrixWorld),fe.position.copy(So),sf.copy(fe.position),sf.add(uM[ne]),fe.up.copy(pM[ne]),fe.lookAt(sf),fe.updateMatrixWorld(),ke.makeTranslation(-So.x,-So.y,-So.z),em.multiplyMatrices(fe.projectionMatrix,fe.matrixWorldInverse),G._frustum.setFromProjectionMatrix(em,fe.coordinateSystem,fe.reversedDepth)}else G.updateMatrices(k);i=G.getFrustum(),E(R,_,G.camera,k,this.type)}G.isPointLightShadow!==!0&&this.type===cr&&y(G,_),G.needsUpdate=!1}g=this.type,m.needsUpdate=!1,n.setRenderTarget(M,C,S)};function y(b,R){let _=e.update(x);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,u.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,u.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Pn(s.x,s.y,{format:os,type:fi})),d.uniforms.shadow_pass.value=b.map.depthTexture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(R,null,_,d,x,null),u.uniforms.shadow_pass.value=b.mapPass.texture,u.uniforms.resolution.value=b.mapSize,u.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(R,null,_,u,x,null)}function w(b,R,_,M){let C=null,S=_.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(S!==void 0)C=S;else if(C=_.isPointLight===!0?l:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let P=C.uuid,z=R.uuid,X=c[P];X===void 0&&(X={},c[P]=X);let D=X[z];D===void 0&&(D=C.clone(),X[z]=D,R.addEventListener("dispose",v)),C=D}if(C.visible=R.visible,C.wireframe=R.wireframe,M===cr?C.side=R.shadowSide!==null?R.shadowSide:R.side:C.side=R.shadowSide!==null?R.shadowSide:h[R.side],C.alphaMap=R.alphaMap,C.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,C.map=R.map,C.clipShadows=R.clipShadows,C.clippingPlanes=R.clippingPlanes,C.clipIntersection=R.clipIntersection,C.displacementMap=R.displacementMap,C.displacementScale=R.displacementScale,C.displacementBias=R.displacementBias,C.wireframeLinewidth=R.wireframeLinewidth,C.linewidth=R.linewidth,_.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let P=n.properties.get(C);P.light=_}return C}function E(b,R,_,M,C){if(b.visible===!1)return;if(b.layers.test(R.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&C===cr)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,b.matrixWorld);let z=e.update(b),X=b.material;if(Array.isArray(X)){let D=z.groups;for(let k=0,G=D.length;k<G;k++){let re=D[k],L=X[re.materialIndex];if(L&&L.visible){let V=w(b,L,M,C);b.onBeforeShadow(n,b,R,_,z,V,re),n.renderBufferDirect(_,null,z,V,b,re),b.onAfterShadow(n,b,R,_,z,V,re)}}}else if(X.visible){let D=w(b,X,M,C);b.onBeforeShadow(n,b,R,_,z,D,null),n.renderBufferDirect(_,null,z,D,b,null),b.onAfterShadow(n,b,R,_,z,D,null)}}let P=b.children;for(let z=0,X=P.length;z<X;z++)E(P[z],R,_,M,C)}function v(b){b.target.removeEventListener("dispose",v);for(let _ in c){let M=c[_],C=b.target.uuid;C in M&&(M[C].dispose(),delete M[C])}}}function gM(n,e){function t(){let U=!1,me=new Ht,te=null,Re=new Ht(0,0,0,0);return{setMask:function(xe){te!==xe&&!U&&(n.colorMask(xe,xe,xe,xe),te=xe)},setLocked:function(xe){U=xe},setClear:function(xe,le,Ue,Qe,Yt){Yt===!0&&(xe*=Qe,le*=Qe,Ue*=Qe),me.set(xe,le,Ue,Qe),Re.equals(me)===!1&&(n.clearColor(xe,le,Ue,Qe),Re.copy(me))},reset:function(){U=!1,te=null,Re.set(-1,0,0,0)}}}function i(){let U=!1,me=!1,te=null,Re=null,xe=null;return{setReversed:function(le){if(me!==le){let Ue=e.get("EXT_clip_control");le?Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.ZERO_TO_ONE_EXT):Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.NEGATIVE_ONE_TO_ONE_EXT),me=le;let Qe=xe;xe=null,this.setClear(Qe)}},getReversed:function(){return me},setTest:function(le){le?j(n.DEPTH_TEST):oe(n.DEPTH_TEST)},setMask:function(le){te!==le&&!U&&(n.depthMask(le),te=le)},setFunc:function(le){if(me&&(le=Cp[le]),Re!==le){switch(le){case La:n.depthFunc(n.NEVER);break;case Da:n.depthFunc(n.ALWAYS);break;case Na:n.depthFunc(n.LESS);break;case bs:n.depthFunc(n.LEQUAL);break;case Ua:n.depthFunc(n.EQUAL);break;case Fa:n.depthFunc(n.GEQUAL);break;case ka:n.depthFunc(n.GREATER);break;case Oa:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Re=le}},setLocked:function(le){U=le},setClear:function(le){xe!==le&&(xe=le,me&&(le=1-le),n.clearDepth(le))},reset:function(){U=!1,te=null,Re=null,xe=null,me=!1}}}function s(){let U=!1,me=null,te=null,Re=null,xe=null,le=null,Ue=null,Qe=null,Yt=null;return{setTest:function(bt){U||(bt?j(n.STENCIL_TEST):oe(n.STENCIL_TEST))},setMask:function(bt){me!==bt&&!U&&(n.stencilMask(bt),me=bt)},setFunc:function(bt,pi,Kn){(te!==bt||Re!==pi||xe!==Kn)&&(n.stencilFunc(bt,pi,Kn),te=bt,Re=pi,xe=Kn)},setOp:function(bt,pi,Kn){(le!==bt||Ue!==pi||Qe!==Kn)&&(n.stencilOp(bt,pi,Kn),le=bt,Ue=pi,Qe=Kn)},setLocked:function(bt){U=bt},setClear:function(bt){Yt!==bt&&(n.clearStencil(bt),Yt=bt)},reset:function(){U=!1,me=null,te=null,Re=null,xe=null,le=null,Ue=null,Qe=null,Yt=null}}}let r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap,f={},h={},d={},u=new WeakMap,p=[],x=null,m=!1,g=null,y=null,w=null,E=null,v=null,b=null,R=null,_=new tt(0,0,0),M=0,C=!1,S=null,P=null,z=null,X=null,D=null,k=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,re=0,L=n.getParameter(n.VERSION);L.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(L)[1]),G=re>=1):L.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(L)[1]),G=re>=2);let V=null,ne={},fe=n.getParameter(n.SCISSOR_BOX),ke=n.getParameter(n.VIEWPORT),K=new Ht().fromArray(fe),Q=new Ht().fromArray(ke);function N(U,me,te,Re){let xe=new Uint8Array(4),le=n.createTexture();n.bindTexture(U,le),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ue=0;Ue<te;Ue++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(me,0,n.RGBA,1,1,Re,0,n.RGBA,n.UNSIGNED_BYTE,xe):n.texImage2D(me+Ue,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,xe);return le}let q={};q[n.TEXTURE_2D]=N(n.TEXTURE_2D,n.TEXTURE_2D,1),q[n.TEXTURE_CUBE_MAP]=N(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[n.TEXTURE_2D_ARRAY]=N(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),q[n.TEXTURE_3D]=N(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),j(n.DEPTH_TEST),o.setFunc(bs),St(!1),It(Ih),j(n.CULL_FACE),Ye(ci);function j(U){f[U]!==!0&&(n.enable(U),f[U]=!0)}function oe(U){f[U]!==!1&&(n.disable(U),f[U]=!1)}function we(U,me){return d[U]!==me?(n.bindFramebuffer(U,me),d[U]=me,U===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=me),U===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=me),!0):!1}function Ie(U,me){let te=p,Re=!1;if(U){te=u.get(me),te===void 0&&(te=[],u.set(me,te));let xe=U.textures;if(te.length!==xe.length||te[0]!==n.COLOR_ATTACHMENT0){for(let le=0,Ue=xe.length;le<Ue;le++)te[le]=n.COLOR_ATTACHMENT0+le;te.length=xe.length,Re=!0}}else te[0]!==n.BACK&&(te[0]=n.BACK,Re=!0);Re&&n.drawBuffers(te)}function De(U){return x!==U?(n.useProgram(U),x=U,!0):!1}let Ge={[$i]:n.FUNC_ADD,[Ju]:n.FUNC_SUBTRACT,[Qu]:n.FUNC_REVERSE_SUBTRACT};Ge[ju]=n.MIN,Ge[ep]=n.MAX;let Ze={[tp]:n.ZERO,[np]:n.ONE,[ip]:n.SRC_COLOR,[Ia]:n.SRC_ALPHA,[cp]:n.SRC_ALPHA_SATURATE,[ap]:n.DST_COLOR,[rp]:n.DST_ALPHA,[sp]:n.ONE_MINUS_SRC_COLOR,[Pa]:n.ONE_MINUS_SRC_ALPHA,[lp]:n.ONE_MINUS_DST_COLOR,[op]:n.ONE_MINUS_DST_ALPHA,[hp]:n.CONSTANT_COLOR,[fp]:n.ONE_MINUS_CONSTANT_COLOR,[dp]:n.CONSTANT_ALPHA,[up]:n.ONE_MINUS_CONSTANT_ALPHA};function Ye(U,me,te,Re,xe,le,Ue,Qe,Yt,bt){if(U===ci){m===!0&&(oe(n.BLEND),m=!1);return}if(m===!1&&(j(n.BLEND),m=!0),U!==Ku){if(U!==g||bt!==C){if((y!==$i||v!==$i)&&(n.blendEquation(n.FUNC_ADD),y=$i,v=$i),bt)switch(U){case Zi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Di:n.blendFunc(n.ONE,n.ONE);break;case Ph:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Lh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Xe("WebGLState: Invalid blending: ",U);break}else switch(U){case Zi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Di:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Ph:Xe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Lh:Xe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Xe("WebGLState: Invalid blending: ",U);break}w=null,E=null,b=null,R=null,_.set(0,0,0),M=0,g=U,C=bt}return}xe=xe||me,le=le||te,Ue=Ue||Re,(me!==y||xe!==v)&&(n.blendEquationSeparate(Ge[me],Ge[xe]),y=me,v=xe),(te!==w||Re!==E||le!==b||Ue!==R)&&(n.blendFuncSeparate(Ze[te],Ze[Re],Ze[le],Ze[Ue]),w=te,E=Re,b=le,R=Ue),(Qe.equals(_)===!1||Yt!==M)&&(n.blendColor(Qe.r,Qe.g,Qe.b,Yt),_.copy(Qe),M=Yt),g=U,C=!1}function Oe(U,me){U.side===Bn?oe(n.CULL_FACE):j(n.CULL_FACE);let te=U.side===Mn;me&&(te=!te),St(te),U.blending===Zi&&U.transparent===!1?Ye(ci):Ye(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);let Re=U.stencilWrite;a.setTest(Re),Re&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),O(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?j(n.SAMPLE_ALPHA_TO_COVERAGE):oe(n.SAMPLE_ALPHA_TO_COVERAGE)}function St(U){S!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),S=U)}function It(U){U!==Yu?(j(n.CULL_FACE),U!==P&&(U===Ih?n.cullFace(n.BACK):U===Zu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):oe(n.CULL_FACE),P=U}function En(U){U!==z&&(G&&n.lineWidth(U),z=U)}function O(U,me,te){U?(j(n.POLYGON_OFFSET_FILL),(X!==me||D!==te)&&(X=me,D=te,o.getReversed()&&(me=-me),n.polygonOffset(me,te))):oe(n.POLYGON_OFFSET_FILL)}function jt(U){U?j(n.SCISSOR_TEST):oe(n.SCISSOR_TEST)}function lt(U){U===void 0&&(U=n.TEXTURE0+k-1),V!==U&&(n.activeTexture(U),V=U)}function Pt(U,me,te){te===void 0&&(V===null?te=n.TEXTURE0+k-1:te=V);let Re=ne[te];Re===void 0&&(Re={type:void 0,texture:void 0},ne[te]=Re),(Re.type!==U||Re.texture!==me)&&(V!==te&&(n.activeTexture(te),V=te),n.bindTexture(U,me||q[U]),Re.type=U,Re.texture=me)}function ve(){let U=ne[V];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Vt(){try{n.compressedTexImage2D(...arguments)}catch(U){Xe("WebGLState:",U)}}function I(){try{n.compressedTexImage3D(...arguments)}catch(U){Xe("WebGLState:",U)}}function T(){try{n.texSubImage2D(...arguments)}catch(U){Xe("WebGLState:",U)}}function W(){try{n.texSubImage3D(...arguments)}catch(U){Xe("WebGLState:",U)}}function ie(){try{n.compressedTexSubImage2D(...arguments)}catch(U){Xe("WebGLState:",U)}}function ce(){try{n.compressedTexSubImage3D(...arguments)}catch(U){Xe("WebGLState:",U)}}function ue(){try{n.texStorage2D(...arguments)}catch(U){Xe("WebGLState:",U)}}function ye(){try{n.texStorage3D(...arguments)}catch(U){Xe("WebGLState:",U)}}function ee(){try{n.texImage2D(...arguments)}catch(U){Xe("WebGLState:",U)}}function se(){try{n.texImage3D(...arguments)}catch(U){Xe("WebGLState:",U)}}function Ee(U){return h[U]!==void 0?h[U]:n.getParameter(U)}function Pe(U,me){h[U]!==me&&(n.pixelStorei(U,me),h[U]=me)}function ge(U){K.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),K.copy(U))}function pe(U){Q.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),Q.copy(U))}function Ke(U,me){let te=c.get(me);te===void 0&&(te=new WeakMap,c.set(me,te));let Re=te.get(U);Re===void 0&&(Re=n.getUniformBlockIndex(me,U.name),te.set(U,Re))}function nt(U,me){let Re=c.get(me).get(U);l.get(me)!==Re&&(n.uniformBlockBinding(me,Re,U.__bindingPointIndex),l.set(me,Re))}function pt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),f={},h={},V=null,ne={},d={},u=new WeakMap,p=[],x=null,m=!1,g=null,y=null,w=null,E=null,v=null,b=null,R=null,_=new tt(0,0,0),M=0,C=!1,S=null,P=null,z=null,X=null,D=null,K.set(0,0,n.canvas.width,n.canvas.height),Q.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:j,disable:oe,bindFramebuffer:we,drawBuffers:Ie,useProgram:De,setBlending:Ye,setMaterial:Oe,setFlipSided:St,setCullFace:It,setLineWidth:En,setPolygonOffset:O,setScissorTest:jt,activeTexture:lt,bindTexture:Pt,unbindTexture:ve,compressedTexImage2D:Vt,compressedTexImage3D:I,texImage2D:ee,texImage3D:se,pixelStorei:Pe,getParameter:Ee,updateUBOMapping:Ke,uniformBlockBinding:nt,texStorage2D:ue,texStorage3D:ye,texSubImage2D:T,texSubImage3D:W,compressedTexSubImage2D:ie,compressedTexSubImage3D:ce,scissor:ge,viewport:pe,reset:pt}}function xM(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new $e,f=new WeakMap,h=new Set,d,u=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(I,T){return p?new OffscreenCanvas(I,T):Kr("canvas")}function m(I,T,W){let ie=1,ce=Vt(I);if((ce.width>W||ce.height>W)&&(ie=W/Math.max(ce.width,ce.height)),ie<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let ue=Math.floor(ie*ce.width),ye=Math.floor(ie*ce.height);d===void 0&&(d=x(ue,ye));let ee=T?x(ue,ye):d;return ee.width=ue,ee.height=ye,ee.getContext("2d").drawImage(I,0,0,ue,ye),qe("WebGLRenderer: Texture has been resized from ("+ce.width+"x"+ce.height+") to ("+ue+"x"+ye+")."),ee}else return"data"in I&&qe("WebGLRenderer: Image in DataTexture is too big ("+ce.width+"x"+ce.height+")."),I;return I}function g(I){return I.generateMipmaps}function y(I){n.generateMipmap(I)}function w(I){return I.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?n.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(I,T,W,ie,ce,ue=!1){if(I!==null){if(n[I]!==void 0)return n[I];qe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let ye;ie&&(ye=e.get("EXT_texture_norm16"),ye||qe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ee=T;if(T===n.RED&&(W===n.FLOAT&&(ee=n.R32F),W===n.HALF_FLOAT&&(ee=n.R16F),W===n.UNSIGNED_BYTE&&(ee=n.R8),W===n.UNSIGNED_SHORT&&ye&&(ee=ye.R16_EXT),W===n.SHORT&&ye&&(ee=ye.R16_SNORM_EXT)),T===n.RED_INTEGER&&(W===n.UNSIGNED_BYTE&&(ee=n.R8UI),W===n.UNSIGNED_SHORT&&(ee=n.R16UI),W===n.UNSIGNED_INT&&(ee=n.R32UI),W===n.BYTE&&(ee=n.R8I),W===n.SHORT&&(ee=n.R16I),W===n.INT&&(ee=n.R32I)),T===n.RG&&(W===n.FLOAT&&(ee=n.RG32F),W===n.HALF_FLOAT&&(ee=n.RG16F),W===n.UNSIGNED_BYTE&&(ee=n.RG8),W===n.UNSIGNED_SHORT&&ye&&(ee=ye.RG16_EXT),W===n.SHORT&&ye&&(ee=ye.RG16_SNORM_EXT)),T===n.RG_INTEGER&&(W===n.UNSIGNED_BYTE&&(ee=n.RG8UI),W===n.UNSIGNED_SHORT&&(ee=n.RG16UI),W===n.UNSIGNED_INT&&(ee=n.RG32UI),W===n.BYTE&&(ee=n.RG8I),W===n.SHORT&&(ee=n.RG16I),W===n.INT&&(ee=n.RG32I)),T===n.RGB_INTEGER&&(W===n.UNSIGNED_BYTE&&(ee=n.RGB8UI),W===n.UNSIGNED_SHORT&&(ee=n.RGB16UI),W===n.UNSIGNED_INT&&(ee=n.RGB32UI),W===n.BYTE&&(ee=n.RGB8I),W===n.SHORT&&(ee=n.RGB16I),W===n.INT&&(ee=n.RGB32I)),T===n.RGBA_INTEGER&&(W===n.UNSIGNED_BYTE&&(ee=n.RGBA8UI),W===n.UNSIGNED_SHORT&&(ee=n.RGBA16UI),W===n.UNSIGNED_INT&&(ee=n.RGBA32UI),W===n.BYTE&&(ee=n.RGBA8I),W===n.SHORT&&(ee=n.RGBA16I),W===n.INT&&(ee=n.RGBA32I)),T===n.RGB&&(W===n.UNSIGNED_SHORT&&ye&&(ee=ye.RGB16_EXT),W===n.SHORT&&ye&&(ee=ye.RGB16_SNORM_EXT),W===n.UNSIGNED_INT_5_9_9_9_REV&&(ee=n.RGB9_E5),W===n.UNSIGNED_INT_10F_11F_11F_REV&&(ee=n.R11F_G11F_B10F)),T===n.RGBA){let se=ue?$r:ct.getTransfer(ce);W===n.FLOAT&&(ee=n.RGBA32F),W===n.HALF_FLOAT&&(ee=n.RGBA16F),W===n.UNSIGNED_BYTE&&(ee=se===vt?n.SRGB8_ALPHA8:n.RGBA8),W===n.UNSIGNED_SHORT&&ye&&(ee=ye.RGBA16_EXT),W===n.SHORT&&ye&&(ee=ye.RGBA16_SNORM_EXT),W===n.UNSIGNED_SHORT_4_4_4_4&&(ee=n.RGBA4),W===n.UNSIGNED_SHORT_5_5_5_1&&(ee=n.RGB5_A1)}return(ee===n.R16F||ee===n.R32F||ee===n.RG16F||ee===n.RG32F||ee===n.RGBA16F||ee===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function v(I,T){let W;return I?T===null||T===$n||T===fr?W=n.DEPTH24_STENCIL8:T===zn?W=n.DEPTH32F_STENCIL8:T===hr&&(W=n.DEPTH24_STENCIL8,qe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===$n||T===fr?W=n.DEPTH_COMPONENT24:T===zn?W=n.DEPTH_COMPONENT32F:T===hr&&(W=n.DEPTH_COMPONENT16),W}function b(I,T){return g(I)===!0||I.isFramebufferTexture&&I.minFilter!==an&&I.minFilter!==hn?Math.log2(Math.max(T.width,T.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?T.mipmaps.length:1}function R(I){let T=I.target;T.removeEventListener("dispose",R),M(T),T.isVideoTexture&&f.delete(T),T.isHTMLTexture&&h.delete(T)}function _(I){let T=I.target;T.removeEventListener("dispose",_),S(T)}function M(I){let T=i.get(I);if(T.__webglInit===void 0)return;let W=I.source,ie=u.get(W);if(ie){let ce=ie[T.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&C(I),Object.keys(ie).length===0&&u.delete(W)}i.remove(I)}function C(I){let T=i.get(I);n.deleteTexture(T.__webglTexture);let W=I.source,ie=u.get(W);delete ie[T.__cacheKey],o.memory.textures--}function S(I){let T=i.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),i.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(T.__webglFramebuffer[ie]))for(let ce=0;ce<T.__webglFramebuffer[ie].length;ce++)n.deleteFramebuffer(T.__webglFramebuffer[ie][ce]);else n.deleteFramebuffer(T.__webglFramebuffer[ie]);T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer[ie])}else{if(Array.isArray(T.__webglFramebuffer))for(let ie=0;ie<T.__webglFramebuffer.length;ie++)n.deleteFramebuffer(T.__webglFramebuffer[ie]);else n.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&n.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ie=0;ie<T.__webglColorRenderbuffer.length;ie++)T.__webglColorRenderbuffer[ie]&&n.deleteRenderbuffer(T.__webglColorRenderbuffer[ie]);T.__webglDepthRenderbuffer&&n.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let W=I.textures;for(let ie=0,ce=W.length;ie<ce;ie++){let ue=i.get(W[ie]);ue.__webglTexture&&(n.deleteTexture(ue.__webglTexture),o.memory.textures--),i.remove(W[ie])}i.remove(I)}let P=0;function z(){P=0}function X(){return P}function D(I){P=I}function k(){let I=P;return I>=s.maxTextures&&qe("WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),P+=1,I}function G(I){let T=[];return T.push(I.wrapS),T.push(I.wrapT),T.push(I.wrapR||0),T.push(I.magFilter),T.push(I.minFilter),T.push(I.anisotropy),T.push(I.internalFormat),T.push(I.format),T.push(I.type),T.push(I.generateMipmaps),T.push(I.premultiplyAlpha),T.push(I.flipY),T.push(I.unpackAlignment),T.push(I.colorSpace),T.join()}function re(I,T){let W=i.get(I);if(I.isVideoTexture&&Pt(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&W.__version!==I.version){let ie=I.image;if(ie===null)qe("WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)qe("WebGLRenderer: Texture marked for update but image is incomplete");else{oe(W,I,T);return}}else I.isExternalTexture&&(W.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,W.__webglTexture,n.TEXTURE0+T)}function L(I,T){let W=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&W.__version!==I.version){oe(W,I,T);return}else I.isExternalTexture&&(W.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,W.__webglTexture,n.TEXTURE0+T)}function V(I,T){let W=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&W.__version!==I.version){oe(W,I,T);return}t.bindTexture(n.TEXTURE_3D,W.__webglTexture,n.TEXTURE0+T)}function ne(I,T){let W=i.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&W.__version!==I.version){we(W,I,T);return}t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture,n.TEXTURE0+T)}let fe={[Ba]:n.REPEAT,[ni]:n.CLAMP_TO_EDGE,[za]:n.MIRRORED_REPEAT},ke={[an]:n.NEAREST,[gp]:n.NEAREST_MIPMAP_NEAREST,[Mo]:n.NEAREST_MIPMAP_LINEAR,[hn]:n.LINEAR,[ml]:n.LINEAR_MIPMAP_NEAREST,[hi]:n.LINEAR_MIPMAP_LINEAR},K={[_p]:n.NEVER,[Tp]:n.ALWAYS,[vp]:n.LESS,[ec]:n.LEQUAL,[Mp]:n.EQUAL,[tc]:n.GEQUAL,[bp]:n.GREATER,[wp]:n.NOTEQUAL};function Q(I,T){if(T.type===zn&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===hn||T.magFilter===ml||T.magFilter===Mo||T.magFilter===hi||T.minFilter===hn||T.minFilter===ml||T.minFilter===Mo||T.minFilter===hi)&&qe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(I,n.TEXTURE_WRAP_S,fe[T.wrapS]),n.texParameteri(I,n.TEXTURE_WRAP_T,fe[T.wrapT]),(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)&&n.texParameteri(I,n.TEXTURE_WRAP_R,fe[T.wrapR]),n.texParameteri(I,n.TEXTURE_MAG_FILTER,ke[T.magFilter]),n.texParameteri(I,n.TEXTURE_MIN_FILTER,ke[T.minFilter]),T.compareFunction&&(n.texParameteri(I,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(I,n.TEXTURE_COMPARE_FUNC,K[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===an||T.minFilter!==Mo&&T.minFilter!==hi||T.type===zn&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){let W=e.get("EXT_texture_filter_anisotropic");n.texParameterf(I,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function N(I,T){let W=!1;I.__webglInit===void 0&&(I.__webglInit=!0,T.addEventListener("dispose",R));let ie=T.source,ce=u.get(ie);ce===void 0&&(ce={},u.set(ie,ce));let ue=G(T);if(ue!==I.__cacheKey){ce[ue]===void 0&&(ce[ue]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,W=!0),ce[ue].usedTimes++;let ye=ce[I.__cacheKey];ye!==void 0&&(ce[I.__cacheKey].usedTimes--,ye.usedTimes===0&&C(T)),I.__cacheKey=ue,I.__webglTexture=ce[ue].texture}return W}function q(I,T,W){return Math.floor(Math.floor(I/W)/T)}function j(I,T,W,ie){let ue=I.updateRanges;if(ue.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,T.width,T.height,W,ie,T.data);else{ue.sort((Pe,ge)=>Pe.start-ge.start);let ye=0;for(let Pe=1;Pe<ue.length;Pe++){let ge=ue[ye],pe=ue[Pe],Ke=ge.start+ge.count,nt=q(pe.start,T.width,4),pt=q(ge.start,T.width,4);pe.start<=Ke+1&&nt===pt&&q(pe.start+pe.count-1,T.width,4)===nt?ge.count=Math.max(ge.count,pe.start+pe.count-ge.start):(++ye,ue[ye]=pe)}ue.length=ye+1;let ee=t.getParameter(n.UNPACK_ROW_LENGTH),se=t.getParameter(n.UNPACK_SKIP_PIXELS),Ee=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,T.width);for(let Pe=0,ge=ue.length;Pe<ge;Pe++){let pe=ue[Pe],Ke=Math.floor(pe.start/4),nt=Math.ceil(pe.count/4),pt=Ke%T.width,U=Math.floor(Ke/T.width),me=nt,te=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,pt),t.pixelStorei(n.UNPACK_SKIP_ROWS,U),t.texSubImage2D(n.TEXTURE_2D,0,pt,U,me,te,W,ie,T.data)}I.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,ee),t.pixelStorei(n.UNPACK_SKIP_PIXELS,se),t.pixelStorei(n.UNPACK_SKIP_ROWS,Ee)}}function oe(I,T,W){let ie=n.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ie=n.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ie=n.TEXTURE_3D);let ce=N(I,T),ue=T.source;t.bindTexture(ie,I.__webglTexture,n.TEXTURE0+W);let ye=i.get(ue);if(ue.version!==ye.__version||ce===!0){if(t.activeTexture(n.TEXTURE0+W),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){let te=ct.getPrimaries(ct.workingColorSpace),Re=T.colorSpace===Ni?null:ct.getPrimaries(T.colorSpace),xe=T.colorSpace===Ni||te===Re?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe)}t.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment);let se=m(T.image,!1,s.maxTextureSize);se=ve(T,se);let Ee=r.convert(T.format,T.colorSpace),Pe=r.convert(T.type),ge=E(T.internalFormat,Ee,Pe,T.normalized,T.colorSpace,T.isVideoTexture);Q(ie,T);let pe,Ke=T.mipmaps,nt=T.isVideoTexture!==!0,pt=ye.__version===void 0||ce===!0,U=ue.dataReady,me=b(T,se);if(T.isDepthTexture)ge=v(T.format===rs,T.type),pt&&(nt?t.texStorage2D(n.TEXTURE_2D,1,ge,se.width,se.height):t.texImage2D(n.TEXTURE_2D,0,ge,se.width,se.height,0,Ee,Pe,null));else if(T.isDataTexture)if(Ke.length>0){nt&&pt&&t.texStorage2D(n.TEXTURE_2D,me,ge,Ke[0].width,Ke[0].height);for(let te=0,Re=Ke.length;te<Re;te++)pe=Ke[te],nt?U&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,pe.width,pe.height,Ee,Pe,pe.data):t.texImage2D(n.TEXTURE_2D,te,ge,pe.width,pe.height,0,Ee,Pe,pe.data);T.generateMipmaps=!1}else nt?(pt&&t.texStorage2D(n.TEXTURE_2D,me,ge,se.width,se.height),U&&j(T,se,Ee,Pe)):t.texImage2D(n.TEXTURE_2D,0,ge,se.width,se.height,0,Ee,Pe,se.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){nt&&pt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,me,ge,Ke[0].width,Ke[0].height,se.depth);for(let te=0,Re=Ke.length;te<Re;te++)if(pe=Ke[te],T.format!==Hn)if(Ee!==null)if(nt){if(U)if(T.layerUpdates.size>0){let xe=Jh(pe.width,pe.height,T.format,T.type);for(let le of T.layerUpdates){let Ue=pe.data.subarray(le*xe/pe.data.BYTES_PER_ELEMENT,(le+1)*xe/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,le,pe.width,pe.height,1,Ee,Ue)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,pe.width,pe.height,se.depth,Ee,pe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,te,ge,pe.width,pe.height,se.depth,0,pe.data,0,0);else qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else nt?U&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,pe.width,pe.height,se.depth,Ee,Pe,pe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,te,ge,pe.width,pe.height,se.depth,0,Ee,Pe,pe.data)}else{nt&&pt&&t.texStorage2D(n.TEXTURE_2D,me,ge,Ke[0].width,Ke[0].height);for(let te=0,Re=Ke.length;te<Re;te++)pe=Ke[te],T.format!==Hn?Ee!==null?nt?U&&t.compressedTexSubImage2D(n.TEXTURE_2D,te,0,0,pe.width,pe.height,Ee,pe.data):t.compressedTexImage2D(n.TEXTURE_2D,te,ge,pe.width,pe.height,0,pe.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?U&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,pe.width,pe.height,Ee,Pe,pe.data):t.texImage2D(n.TEXTURE_2D,te,ge,pe.width,pe.height,0,Ee,Pe,pe.data)}else if(T.isDataArrayTexture)if(nt){if(pt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,me,ge,se.width,se.height,se.depth),U)if(T.layerUpdates.size>0){let te=Jh(se.width,se.height,T.format,T.type);for(let Re of T.layerUpdates){let xe=se.data.subarray(Re*te/se.data.BYTES_PER_ELEMENT,(Re+1)*te/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Re,se.width,se.height,1,Ee,Pe,xe)}T.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,Ee,Pe,se.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ge,se.width,se.height,se.depth,0,Ee,Pe,se.data);else if(T.isData3DTexture)nt?(pt&&t.texStorage3D(n.TEXTURE_3D,me,ge,se.width,se.height,se.depth),U&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,Ee,Pe,se.data)):t.texImage3D(n.TEXTURE_3D,0,ge,se.width,se.height,se.depth,0,Ee,Pe,se.data);else if(T.isFramebufferTexture){if(pt)if(nt)t.texStorage2D(n.TEXTURE_2D,me,ge,se.width,se.height);else{let te=se.width,Re=se.height;for(let xe=0;xe<me;xe++)t.texImage2D(n.TEXTURE_2D,xe,ge,te,Re,0,Ee,Pe,null),te>>=1,Re>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in n){let te=n.canvas;if(te.hasAttribute("layoutsubtree")||te.setAttribute("layoutsubtree","true"),se.parentNode!==te){te.appendChild(se),h.add(T),te.onpaint=Qe=>{let Yt=Qe.changedElements;for(let bt of h)Yt.includes(bt.image)&&(bt.needsUpdate=!0)},te.requestPaint();return}let Re=0,xe=n.RGBA,le=n.RGBA,Ue=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,Re,xe,le,Ue,se),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Ke.length>0){if(nt&&pt){let te=Vt(Ke[0]);t.texStorage2D(n.TEXTURE_2D,me,ge,te.width,te.height)}for(let te=0,Re=Ke.length;te<Re;te++)pe=Ke[te],nt?U&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,Ee,Pe,pe):t.texImage2D(n.TEXTURE_2D,te,ge,Ee,Pe,pe);T.generateMipmaps=!1}else if(nt){if(pt){let te=Vt(se);t.texStorage2D(n.TEXTURE_2D,me,ge,te.width,te.height)}U&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ee,Pe,se)}else t.texImage2D(n.TEXTURE_2D,0,ge,Ee,Pe,se);g(T)&&y(ie),ye.__version=ue.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function we(I,T,W){if(T.image.length!==6)return;let ie=N(I,T),ce=T.source;t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+W);let ue=i.get(ce);if(ce.version!==ue.__version||ie===!0){t.activeTexture(n.TEXTURE0+W);let ye=ct.getPrimaries(ct.workingColorSpace),ee=T.colorSpace===Ni?null:ct.getPrimaries(T.colorSpace),se=T.colorSpace===Ni||ye===ee?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);let Ee=T.isCompressedTexture||T.image[0].isCompressedTexture,Pe=T.image[0]&&T.image[0].isDataTexture,ge=[];for(let le=0;le<6;le++)!Ee&&!Pe?ge[le]=m(T.image[le],!0,s.maxCubemapSize):ge[le]=Pe?T.image[le].image:T.image[le],ge[le]=ve(T,ge[le]);let pe=ge[0],Ke=r.convert(T.format,T.colorSpace),nt=r.convert(T.type),pt=E(T.internalFormat,Ke,nt,T.normalized,T.colorSpace),U=T.isVideoTexture!==!0,me=ue.__version===void 0||ie===!0,te=ce.dataReady,Re=b(T,pe);Q(n.TEXTURE_CUBE_MAP,T);let xe;if(Ee){U&&me&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Re,pt,pe.width,pe.height);for(let le=0;le<6;le++){xe=ge[le].mipmaps;for(let Ue=0;Ue<xe.length;Ue++){let Qe=xe[Ue];T.format!==Hn?Ke!==null?U?te&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ue,0,0,Qe.width,Qe.height,Ke,Qe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ue,pt,Qe.width,Qe.height,0,Qe.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ue,0,0,Qe.width,Qe.height,Ke,nt,Qe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ue,pt,Qe.width,Qe.height,0,Ke,nt,Qe.data)}}}else{if(xe=T.mipmaps,U&&me){xe.length>0&&Re++;let le=Vt(ge[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Re,pt,le.width,le.height)}for(let le=0;le<6;le++)if(Pe){U?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,ge[le].width,ge[le].height,Ke,nt,ge[le].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,pt,ge[le].width,ge[le].height,0,Ke,nt,ge[le].data);for(let Ue=0;Ue<xe.length;Ue++){let Yt=xe[Ue].image[le].image;U?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ue+1,0,0,Yt.width,Yt.height,Ke,nt,Yt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ue+1,pt,Yt.width,Yt.height,0,Ke,nt,Yt.data)}}else{U?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Ke,nt,ge[le]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,pt,Ke,nt,ge[le]);for(let Ue=0;Ue<xe.length;Ue++){let Qe=xe[Ue];U?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ue+1,0,0,Ke,nt,Qe.image[le]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ue+1,pt,Ke,nt,Qe.image[le])}}}g(T)&&y(n.TEXTURE_CUBE_MAP),ue.__version=ce.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function Ie(I,T,W,ie,ce,ue){let ye=r.convert(W.format,W.colorSpace),ee=r.convert(W.type),se=E(W.internalFormat,ye,ee,W.normalized,W.colorSpace),Ee=i.get(T),Pe=i.get(W);if(Pe.__renderTarget=T,!Ee.__hasExternalTextures){let ge=Math.max(1,T.width>>ue),pe=Math.max(1,T.height>>ue);ce===n.TEXTURE_3D||ce===n.TEXTURE_2D_ARRAY?t.texImage3D(ce,ue,se,ge,pe,T.depth,0,ye,ee,null):t.texImage2D(ce,ue,se,ge,pe,0,ye,ee,null)}t.bindFramebuffer(n.FRAMEBUFFER,I),lt(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ie,ce,Pe.__webglTexture,0,jt(T)):(ce===n.TEXTURE_2D||ce>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ce<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ie,ce,Pe.__webglTexture,ue),t.bindFramebuffer(n.FRAMEBUFFER,null)}function De(I,T,W){if(n.bindRenderbuffer(n.RENDERBUFFER,I),T.depthBuffer){let ie=T.depthTexture,ce=ie&&ie.isDepthTexture?ie.type:null,ue=v(T.stencilBuffer,ce),ye=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;lt(T)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,jt(T),ue,T.width,T.height):W?n.renderbufferStorageMultisample(n.RENDERBUFFER,jt(T),ue,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,ue,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ye,n.RENDERBUFFER,I)}else{let ie=T.textures;for(let ce=0;ce<ie.length;ce++){let ue=ie[ce],ye=r.convert(ue.format,ue.colorSpace),ee=r.convert(ue.type),se=E(ue.internalFormat,ye,ee,ue.normalized,ue.colorSpace);lt(T)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,jt(T),se,T.width,T.height):W?n.renderbufferStorageMultisample(n.RENDERBUFFER,jt(T),se,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,se,T.width,T.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ge(I,T,W){let ie=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,I),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let ce=i.get(T.depthTexture);if(ce.__renderTarget=T,(!ce.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ie){if(ce.__webglInit===void 0&&(ce.__webglInit=!0,T.depthTexture.addEventListener("dispose",R)),ce.__webglTexture===void 0){ce.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,ce.__webglTexture),Q(n.TEXTURE_CUBE_MAP,T.depthTexture);let Ee=r.convert(T.depthTexture.format),Pe=r.convert(T.depthTexture.type),ge;T.depthTexture.format===ii?ge=n.DEPTH_COMPONENT24:T.depthTexture.format===rs&&(ge=n.DEPTH24_STENCIL8);for(let pe=0;pe<6;pe++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ge,T.width,T.height,0,Ee,Pe,null)}}else re(T.depthTexture,0);let ue=ce.__webglTexture,ye=jt(T),ee=ie?n.TEXTURE_CUBE_MAP_POSITIVE_X+W:n.TEXTURE_2D,se=T.depthTexture.format===rs?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(T.depthTexture.format===ii)lt(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,se,ee,ue,0,ye):n.framebufferTexture2D(n.FRAMEBUFFER,se,ee,ue,0);else if(T.depthTexture.format===rs)lt(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,se,ee,ue,0,ye):n.framebufferTexture2D(n.FRAMEBUFFER,se,ee,ue,0);else throw new Error("Unknown depthTexture format")}function Ze(I){let T=i.get(I),W=I.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==I.depthTexture){let ie=I.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ie){let ce=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ie.removeEventListener("dispose",ce)};ie.addEventListener("dispose",ce),T.__depthDisposeCallback=ce}T.__boundDepthTexture=ie}if(I.depthTexture&&!T.__autoAllocateDepthBuffer)if(W)for(let ie=0;ie<6;ie++)Ge(T.__webglFramebuffer[ie],I,ie);else{let ie=I.texture.mipmaps;ie&&ie.length>0?Ge(T.__webglFramebuffer[0],I,0):Ge(T.__webglFramebuffer,I,0)}else if(W){T.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)if(t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[ie]),T.__webglDepthbuffer[ie]===void 0)T.__webglDepthbuffer[ie]=n.createRenderbuffer(),De(T.__webglDepthbuffer[ie],I,!1);else{let ce=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=T.__webglDepthbuffer[ie];n.bindRenderbuffer(n.RENDERBUFFER,ue),n.framebufferRenderbuffer(n.FRAMEBUFFER,ce,n.RENDERBUFFER,ue)}}else{let ie=I.texture.mipmaps;if(ie&&ie.length>0?t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=n.createRenderbuffer(),De(T.__webglDepthbuffer,I,!1);else{let ce=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=T.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ue),n.framebufferRenderbuffer(n.FRAMEBUFFER,ce,n.RENDERBUFFER,ue)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ye(I,T,W){let ie=i.get(I);T!==void 0&&Ie(ie.__webglFramebuffer,I,I.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),W!==void 0&&Ze(I)}function Oe(I){let T=I.texture,W=i.get(I),ie=i.get(T);I.addEventListener("dispose",_);let ce=I.textures,ue=I.isWebGLCubeRenderTarget===!0,ye=ce.length>1;if(ye||(ie.__webglTexture===void 0&&(ie.__webglTexture=n.createTexture()),ie.__version=T.version,o.memory.textures++),ue){W.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(T.mipmaps&&T.mipmaps.length>0){W.__webglFramebuffer[ee]=[];for(let se=0;se<T.mipmaps.length;se++)W.__webglFramebuffer[ee][se]=n.createFramebuffer()}else W.__webglFramebuffer[ee]=n.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){W.__webglFramebuffer=[];for(let ee=0;ee<T.mipmaps.length;ee++)W.__webglFramebuffer[ee]=n.createFramebuffer()}else W.__webglFramebuffer=n.createFramebuffer();if(ye)for(let ee=0,se=ce.length;ee<se;ee++){let Ee=i.get(ce[ee]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=n.createTexture(),o.memory.textures++)}if(I.samples>0&&lt(I)===!1){W.__webglMultisampledFramebuffer=n.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let ee=0;ee<ce.length;ee++){let se=ce[ee];W.__webglColorRenderbuffer[ee]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,W.__webglColorRenderbuffer[ee]);let Ee=r.convert(se.format,se.colorSpace),Pe=r.convert(se.type),ge=E(se.internalFormat,Ee,Pe,se.normalized,se.colorSpace,I.isXRRenderTarget===!0),pe=jt(I);n.renderbufferStorageMultisample(n.RENDERBUFFER,pe,ge,I.width,I.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ee,n.RENDERBUFFER,W.__webglColorRenderbuffer[ee])}n.bindRenderbuffer(n.RENDERBUFFER,null),I.depthBuffer&&(W.__webglDepthRenderbuffer=n.createRenderbuffer(),De(W.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ue){t.bindTexture(n.TEXTURE_CUBE_MAP,ie.__webglTexture),Q(n.TEXTURE_CUBE_MAP,T);for(let ee=0;ee<6;ee++)if(T.mipmaps&&T.mipmaps.length>0)for(let se=0;se<T.mipmaps.length;se++)Ie(W.__webglFramebuffer[ee][se],I,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,se);else Ie(W.__webglFramebuffer[ee],I,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);g(T)&&y(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){for(let ee=0,se=ce.length;ee<se;ee++){let Ee=ce[ee],Pe=i.get(Ee),ge=n.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ge=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ge,Pe.__webglTexture),Q(ge,Ee),Ie(W.__webglFramebuffer,I,Ee,n.COLOR_ATTACHMENT0+ee,ge,0),g(Ee)&&y(ge)}t.unbindTexture()}else{let ee=n.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ee=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ee,ie.__webglTexture),Q(ee,T),T.mipmaps&&T.mipmaps.length>0)for(let se=0;se<T.mipmaps.length;se++)Ie(W.__webglFramebuffer[se],I,T,n.COLOR_ATTACHMENT0,ee,se);else Ie(W.__webglFramebuffer,I,T,n.COLOR_ATTACHMENT0,ee,0);g(T)&&y(ee),t.unbindTexture()}I.depthBuffer&&Ze(I)}function St(I){let T=I.textures;for(let W=0,ie=T.length;W<ie;W++){let ce=T[W];if(g(ce)){let ue=w(I),ye=i.get(ce).__webglTexture;t.bindTexture(ue,ye),y(ue),t.unbindTexture()}}}let It=[],En=[];function O(I){if(I.samples>0){if(lt(I)===!1){let T=I.textures,W=I.width,ie=I.height,ce=n.COLOR_BUFFER_BIT,ue=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ye=i.get(I),ee=T.length>1;if(ee)for(let Ee=0;Ee<T.length;Ee++)t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer);let se=I.texture.mipmaps;se&&se.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let Ee=0;Ee<T.length;Ee++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ce|=n.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ce|=n.STENCIL_BUFFER_BIT)),ee){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ye.__webglColorRenderbuffer[Ee]);let Pe=i.get(T[Ee]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Pe,0)}n.blitFramebuffer(0,0,W,ie,0,0,W,ie,ce,n.NEAREST),l===!0&&(It.length=0,En.length=0,It.push(n.COLOR_ATTACHMENT0+Ee),I.depthBuffer&&I.resolveDepthBuffer===!1&&(It.push(ue),En.push(ue),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,En)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,It))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ee)for(let Ee=0;Ee<T.length;Ee++){t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.RENDERBUFFER,ye.__webglColorRenderbuffer[Ee]);let Pe=i.get(T[Ee]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.TEXTURE_2D,Pe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){let T=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[T])}}}function jt(I){return Math.min(s.maxSamples,I.samples)}function lt(I){let T=i.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Pt(I){let T=o.render.frame;f.get(I)!==T&&(f.set(I,T),I.update())}function ve(I,T){let W=I.colorSpace,ie=I.format,ce=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||W!==Zr&&W!==Ni&&(ct.getTransfer(W)===vt?(ie!==Hn||ce!==Tn)&&qe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Xe("WebGLTextures: Unsupported texture color space:",W)),T}function Vt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=z,this.getTextureUnits=X,this.setTextureUnits=D,this.setTexture2D=re,this.setTexture2DArray=L,this.setTexture3D=V,this.setTextureCube=ne,this.rebindTextures=Ye,this.setupRenderTarget=Oe,this.updateRenderTargetMipmap=St,this.updateMultisampleRenderTarget=O,this.setupDepthRenderbuffer=Ze,this.setupFrameBufferTexture=Ie,this.useMultisampledRTT=lt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function yM(n,e){function t(i,s=Ni){let r,o=ct.getTransfer(s);if(i===Tn)return n.UNSIGNED_BYTE;if(i===xl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===yl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Gh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Wh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Hh)return n.BYTE;if(i===Vh)return n.SHORT;if(i===hr)return n.UNSIGNED_SHORT;if(i===gl)return n.INT;if(i===$n)return n.UNSIGNED_INT;if(i===zn)return n.FLOAT;if(i===fi)return n.HALF_FLOAT;if(i===Xh)return n.ALPHA;if(i===qh)return n.RGB;if(i===Hn)return n.RGBA;if(i===ii)return n.DEPTH_COMPONENT;if(i===rs)return n.DEPTH_STENCIL;if(i===_l)return n.RED;if(i===vl)return n.RED_INTEGER;if(i===os)return n.RG;if(i===Ml)return n.RG_INTEGER;if(i===bl)return n.RGBA_INTEGER;if(i===bo||i===wo||i===To||i===Eo)if(o===vt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===bo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===wo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===To)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Eo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===bo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===wo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===To)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Eo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===wl||i===Tl||i===El||i===Al)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===wl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Tl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===El)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Al)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Rl||i===Cl||i===Sl||i===Il||i===Pl||i===Ao||i===Ll)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Rl||i===Cl)return o===vt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Sl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Il)return r.COMPRESSED_R11_EAC;if(i===Pl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Ao)return r.COMPRESSED_RG11_EAC;if(i===Ll)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Dl||i===Nl||i===Ul||i===Fl||i===kl||i===Ol||i===Bl||i===zl||i===Hl||i===Vl||i===Gl||i===Wl||i===Xl||i===ql)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Dl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Nl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ul)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Fl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===kl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ol)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Bl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===zl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Hl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Vl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Gl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Wl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Xl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ql)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Yl||i===Zl||i===$l)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Yl)return o===vt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Zl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===$l)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Kl||i===Jl||i===Ro||i===Ql)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Kl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Jl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ro)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ql)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===fr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var _M=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vM=`
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

}`,df=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new ao(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Ln({vertexShader:_M,fragmentShader:vM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new _e(new li(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},uf=class extends si{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,f=null,h=null,d=null,u=null,p=null,x=typeof XRWebGLBinding<"u",m=new df,g={},y=t.getContextAttributes(),w=null,E=null,v=[],b=[],R=new $e,_=null,M=new mn;M.viewport=new Ht;let C=new mn;C.viewport=new Ht;let S=[M,C],P=new fl,z=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let q=v[N];return q===void 0&&(q=new rr,v[N]=q),q.getTargetRaySpace()},this.getControllerGrip=function(N){let q=v[N];return q===void 0&&(q=new rr,v[N]=q),q.getGripSpace()},this.getHand=function(N){let q=v[N];return q===void 0&&(q=new rr,v[N]=q),q.getHandSpace()};function D(N){let q=b.indexOf(N.inputSource);if(q===-1)return;let j=v[q];j!==void 0&&(j.update(N.inputSource,N.frame,c||o),j.dispatchEvent({type:N.type,data:N.inputSource}))}function k(){s.removeEventListener("select",D),s.removeEventListener("selectstart",D),s.removeEventListener("selectend",D),s.removeEventListener("squeeze",D),s.removeEventListener("squeezestart",D),s.removeEventListener("squeezeend",D),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",G);for(let N=0;N<v.length;N++){let q=b[N];q!==null&&(b[N]=null,v[N].disconnect(q))}z=null,X=null,m.reset();for(let N in g)delete g[N];e.setRenderTarget(w),u=null,d=null,h=null,s=null,E=null,Q.stop(),i.isPresenting=!1,e.setPixelRatio(_),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){r=N,i.isPresenting===!0&&qe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){a=N,i.isPresenting===!0&&qe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(N){c=N},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(N){if(s=N,s!==null){if(w=e.getRenderTarget(),s.addEventListener("select",D),s.addEventListener("selectstart",D),s.addEventListener("selectend",D),s.addEventListener("squeeze",D),s.addEventListener("squeezestart",D),s.addEventListener("squeezeend",D),s.addEventListener("end",k),s.addEventListener("inputsourceschange",G),y.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(R),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let j=null,oe=null,we=null;y.depth&&(we=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,j=y.stencil?rs:ii,oe=y.stencil?fr:$n);let Ie={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(Ie),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),E=new Pn(d.textureWidth,d.textureHeight,{format:Hn,type:Tn,depthTexture:new Pi(d.textureWidth,d.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let j={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,t,j),s.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),E=new Pn(u.framebufferWidth,u.framebufferHeight,{format:Hn,type:Tn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Q.setContext(s),Q.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function G(N){for(let q=0;q<N.removed.length;q++){let j=N.removed[q],oe=b.indexOf(j);oe>=0&&(b[oe]=null,v[oe].disconnect(j))}for(let q=0;q<N.added.length;q++){let j=N.added[q],oe=b.indexOf(j);if(oe===-1){for(let Ie=0;Ie<v.length;Ie++)if(Ie>=b.length){b.push(j),oe=Ie;break}else if(b[Ie]===null){b[Ie]=j,oe=Ie;break}if(oe===-1)break}let we=v[oe];we&&we.connect(j)}}let re=new B,L=new B;function V(N,q,j){re.setFromMatrixPosition(q.matrixWorld),L.setFromMatrixPosition(j.matrixWorld);let oe=re.distanceTo(L),we=q.projectionMatrix.elements,Ie=j.projectionMatrix.elements,De=we[14]/(we[10]-1),Ge=we[14]/(we[10]+1),Ze=(we[9]+1)/we[5],Ye=(we[9]-1)/we[5],Oe=(we[8]-1)/we[0],St=(Ie[8]+1)/Ie[0],It=De*Oe,En=De*St,O=oe/(-Oe+St),jt=O*-Oe;if(q.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(jt),N.translateZ(O),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert(),we[10]===-1)N.projectionMatrix.copy(q.projectionMatrix),N.projectionMatrixInverse.copy(q.projectionMatrixInverse);else{let lt=De+O,Pt=Ge+O,ve=It-jt,Vt=En+(oe-jt),I=Ze*Ge/Pt*lt,T=Ye*Ge/Pt*lt;N.projectionMatrix.makePerspective(ve,Vt,I,T,lt,Pt),N.projectionMatrixInverse.copy(N.projectionMatrix).invert()}}function ne(N,q){q===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(q.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(s===null)return;let q=N.near,j=N.far;m.texture!==null&&(m.depthNear>0&&(q=m.depthNear),m.depthFar>0&&(j=m.depthFar)),P.near=C.near=M.near=q,P.far=C.far=M.far=j,(z!==P.near||X!==P.far)&&(s.updateRenderState({depthNear:P.near,depthFar:P.far}),z=P.near,X=P.far),P.layers.mask=N.layers.mask|6,M.layers.mask=P.layers.mask&-5,C.layers.mask=P.layers.mask&-3;let oe=N.parent,we=P.cameras;ne(P,oe);for(let Ie=0;Ie<we.length;Ie++)ne(we[Ie],oe);we.length===2?V(P,M,C):P.projectionMatrix.copy(M.projectionMatrix),fe(N,P,oe)};function fe(N,q,j){j===null?N.matrix.copy(q.matrixWorld):(N.matrix.copy(j.matrixWorld),N.matrix.invert(),N.matrix.multiply(q.matrixWorld)),N.matrix.decompose(N.position,N.quaternion,N.scale),N.updateMatrixWorld(!0),N.projectionMatrix.copy(q.projectionMatrix),N.projectionMatrixInverse.copy(q.projectionMatrixInverse),N.isPerspectiveCamera&&(N.fov=Wa*2*Math.atan(1/N.projectionMatrix.elements[5]),N.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(d===null&&u===null))return l},this.setFoveation=function(N){l=N,d!==null&&(d.fixedFoveation=N),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=N)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(P)},this.getCameraTexture=function(N){return g[N]};let ke=null;function K(N,q){if(f=q.getViewerPose(c||o),p=q,f!==null){let j=f.views;u!==null&&(e.setRenderTargetFramebuffer(E,u.framebuffer),e.setRenderTarget(E));let oe=!1;j.length!==P.cameras.length&&(P.cameras.length=0,oe=!0);for(let Ge=0;Ge<j.length;Ge++){let Ze=j[Ge],Ye=null;if(u!==null)Ye=u.getViewport(Ze);else{let St=h.getViewSubImage(d,Ze);Ye=St.viewport,Ge===0&&(e.setRenderTargetTextures(E,St.colorTexture,St.depthStencilTexture),e.setRenderTarget(E))}let Oe=S[Ge];Oe===void 0&&(Oe=new mn,Oe.layers.enable(Ge),Oe.viewport=new Ht,S[Ge]=Oe),Oe.matrix.fromArray(Ze.transform.matrix),Oe.matrix.decompose(Oe.position,Oe.quaternion,Oe.scale),Oe.projectionMatrix.fromArray(Ze.projectionMatrix),Oe.projectionMatrixInverse.copy(Oe.projectionMatrix).invert(),Oe.viewport.set(Ye.x,Ye.y,Ye.width,Ye.height),Ge===0&&(P.matrix.copy(Oe.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),oe===!0&&P.cameras.push(Oe)}let we=s.enabledFeatures;if(we&&we.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){h=i.getBinding();let Ge=h.getDepthInformation(j[0]);Ge&&Ge.isValid&&Ge.texture&&m.init(Ge,s.renderState)}if(we&&we.includes("camera-access")&&x){e.state.unbindTexture(),h=i.getBinding();for(let Ge=0;Ge<j.length;Ge++){let Ze=j[Ge].camera;if(Ze){let Ye=g[Ze];Ye||(Ye=new ao,g[Ze]=Ye);let Oe=h.getCameraImage(Ze);Ye.sourceTexture=Oe}}}}for(let j=0;j<v.length;j++){let oe=b[j],we=v[j];oe!==null&&we!==void 0&&we.update(oe,q,c||o)}ke&&ke(N,q),q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:q}),p=null}let Q=new tm;Q.setAnimationLoop(K),this.setAnimationLoop=function(N){ke=N},this.dispose=function(){}}},MM=new Mt,am=new Je;am.set(-1,0,0,0,1,0,0,0,1);function bM(n,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function i(m,g){g.color.getRGB(m.fogColor.value,Zh(n)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,y,w,E){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),h(m,g)):g.isMeshPhongMaterial?(r(m,g),f(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),d(m,g),g.isMeshPhysicalMaterial&&u(m,g,E)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),x(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,y,w):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Mn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Mn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let y=e.get(g),w=y.envMap,E=y.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(MM.makeRotationFromEuler(E)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(am),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,y,w){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*y,m.scale.value=w*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function f(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function h(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function d(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function u(m,g,y){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Mn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){let y=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function wM(n,e,t,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,w){let E=w.program;i.uniformBlockBinding(y,E)}function c(y,w){let E=s[y.id];E===void 0&&(p(y),E=f(y),s[y.id]=E,y.addEventListener("dispose",m));let v=w.program;i.updateUBOMapping(y,v);let b=e.render.frame;r[y.id]!==b&&(d(y),r[y.id]=b)}function f(y){let w=h();y.__bindingPointIndex=w;let E=n.createBuffer(),v=y.__size,b=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,v,b),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,E),E}function h(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return Xe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let w=s[y.id],E=y.uniforms,v=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let b=0,R=E.length;b<R;b++){let _=Array.isArray(E[b])?E[b]:[E[b]];for(let M=0,C=_.length;M<C;M++){let S=_[M];if(u(S,b,M,v)===!0){let P=S.__offset,z=Array.isArray(S.value)?S.value:[S.value],X=0;for(let D=0;D<z.length;D++){let k=z[D],G=x(k);typeof k=="number"||typeof k=="boolean"?(S.__data[0]=k,n.bufferSubData(n.UNIFORM_BUFFER,P+X,S.__data)):k.isMatrix3?(S.__data[0]=k.elements[0],S.__data[1]=k.elements[1],S.__data[2]=k.elements[2],S.__data[3]=0,S.__data[4]=k.elements[3],S.__data[5]=k.elements[4],S.__data[6]=k.elements[5],S.__data[7]=0,S.__data[8]=k.elements[6],S.__data[9]=k.elements[7],S.__data[10]=k.elements[8],S.__data[11]=0):ArrayBuffer.isView(k)?S.__data.set(new k.constructor(k.buffer,k.byteOffset,S.__data.length)):(k.toArray(S.__data,X),X+=G.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,P,S.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function u(y,w,E,v){let b=y.value,R=w+"_"+E;if(v[R]===void 0)return typeof b=="number"||typeof b=="boolean"?v[R]=b:ArrayBuffer.isView(b)?v[R]=b.slice():v[R]=b.clone(),!0;{let _=v[R];if(typeof b=="number"||typeof b=="boolean"){if(_!==b)return v[R]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(_.equals(b)===!1)return _.copy(b),!0}}return!1}function p(y){let w=y.uniforms,E=0,v=16;for(let R=0,_=w.length;R<_;R++){let M=Array.isArray(w[R])?w[R]:[w[R]];for(let C=0,S=M.length;C<S;C++){let P=M[C],z=Array.isArray(P.value)?P.value:[P.value];for(let X=0,D=z.length;X<D;X++){let k=z[X],G=x(k),re=E%v,L=re%G.boundary,V=re+L;E+=L,V!==0&&v-V<G.storage&&(E+=v-V),P.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=E,E+=G.storage}}}let b=E%v;return b>0&&(E+=v-b),y.__size=E,y.__cache={},this}function x(y){let w={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(w.boundary=4,w.storage=4):y.isVector2?(w.boundary=8,w.storage=8):y.isVector3||y.isColor?(w.boundary=16,w.storage=12):y.isVector4?(w.boundary=16,w.storage=16):y.isMatrix3?(w.boundary=48,w.storage=48):y.isMatrix4?(w.boundary=64,w.storage=64):y.isTexture?qe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(w.boundary=16,w.storage=y.byteLength):qe("WebGLRenderer: Unsupported uniform value type.",y),w}function m(y){let w=y.target;w.removeEventListener("dispose",m);let E=o.indexOf(w.__bindingPointIndex);o.splice(E,1),n.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function g(){for(let y in s)n.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:c,dispose:g}}var TM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),di=null;function EM(){return di===null&&(di=new so(TM,16,16,os,fi),di.name="DFG_LUT",di.minFilter=hn,di.magFilter=hn,di.wrapS=ni,di.wrapT=ni,di.generateMipmaps=!1,di.needsUpdate=!0),di}var oc=class{constructor(e={}){let{canvas:t=Ep(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:u=Tn}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let x=u,m=new Set([bl,Ml,vl]),g=new Set([Tn,$n,hr,fr,xl,yl]),y=new Uint32Array(4),w=new Int32Array(4),E=new B,v=null,b=null,R=[],_=[],M=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Zn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,S=!1,P=null;this._outputColorSpace=cn;let z=0,X=0,D=null,k=-1,G=null,re=new Ht,L=new Ht,V=null,ne=new tt(0),fe=0,ke=t.width,K=t.height,Q=1,N=null,q=null,j=new Ht(0,0,ke,K),oe=new Ht(0,0,ke,K),we=!1,Ie=new ar,De=!1,Ge=!1,Ze=new Mt,Ye=new B,Oe=new Ht,St={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},It=!1;function En(){return D===null?Q:1}let O=i;function jt(A,H){return t.getContext(A,H)}try{let A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"184"}`),t.addEventListener("webglcontextlost",le,!1),t.addEventListener("webglcontextrestored",Ue,!1),t.addEventListener("webglcontextcreationerror",Qe,!1),O===null){let H="webgl2";if(O=jt(H,A),O===null)throw jt(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw Xe("WebGLRenderer: "+A.message),A}let lt,Pt,ve,Vt,I,T,W,ie,ce,ue,ye,ee,se,Ee,Pe,ge,pe,Ke,nt,pt,U,me,te;function Re(){lt=new L_(O),lt.init(),U=new yM(O,lt),Pt=new T_(O,lt,e,U),ve=new gM(O,lt),Pt.reversedDepthBuffer&&d&&ve.buffers.depth.setReversed(!0),Vt=new U_(O),I=new nM,T=new xM(O,lt,ve,I,Pt,U,Vt),W=new P_(C),ie=new Bg(O),me=new b_(O,ie),ce=new D_(O,ie,Vt,me),ue=new k_(O,ce,ie,me,Vt),Ke=new F_(O,Pt,T),Pe=new E_(I),ye=new tM(C,W,lt,Pt,me,Pe),ee=new bM(C,I),se=new sM,Ee=new hM(lt),pe=new M_(C,W,ve,ue,p,l),ge=new mM(C,ue,Pt),te=new wM(O,Vt,Pt,ve),nt=new w_(O,lt,Vt),pt=new N_(O,lt,Vt),Vt.programs=ye.programs,C.capabilities=Pt,C.extensions=lt,C.properties=I,C.renderLists=se,C.shadowMap=ge,C.state=ve,C.info=Vt}Re(),x!==Tn&&(M=new B_(x,t.width,t.height,s,r));let xe=new uf(C,O);this.xr=xe,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let A=lt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=lt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(A){A!==void 0&&(Q=A,this.setSize(ke,K,!1))},this.getSize=function(A){return A.set(ke,K)},this.setSize=function(A,H,$=!0){if(xe.isPresenting){qe("WebGLRenderer: Can't change size while VR device is presenting.");return}ke=A,K=H,t.width=Math.floor(A*Q),t.height=Math.floor(H*Q),$===!0&&(t.style.width=A+"px",t.style.height=H+"px"),M!==null&&M.setSize(t.width,t.height),this.setViewport(0,0,A,H)},this.getDrawingBufferSize=function(A){return A.set(ke*Q,K*Q).floor()},this.setDrawingBufferSize=function(A,H,$){ke=A,K=H,Q=$,t.width=Math.floor(A*$),t.height=Math.floor(H*$),this.setViewport(0,0,A,H)},this.setEffects=function(A){if(x===Tn){Xe("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let H=0;H<A.length;H++)if(A[H].isOutputPass===!0){qe("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}M.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(re)},this.getViewport=function(A){return A.copy(j)},this.setViewport=function(A,H,$,Y){A.isVector4?j.set(A.x,A.y,A.z,A.w):j.set(A,H,$,Y),ve.viewport(re.copy(j).multiplyScalar(Q).round())},this.getScissor=function(A){return A.copy(oe)},this.setScissor=function(A,H,$,Y){A.isVector4?oe.set(A.x,A.y,A.z,A.w):oe.set(A,H,$,Y),ve.scissor(L.copy(oe).multiplyScalar(Q).round())},this.getScissorTest=function(){return we},this.setScissorTest=function(A){ve.setScissorTest(we=A)},this.setOpaqueSort=function(A){N=A},this.setTransparentSort=function(A){q=A},this.getClearColor=function(A){return A.copy(pe.getClearColor())},this.setClearColor=function(){pe.setClearColor(...arguments)},this.getClearAlpha=function(){return pe.getClearAlpha()},this.setClearAlpha=function(){pe.setClearAlpha(...arguments)},this.clear=function(A=!0,H=!0,$=!0){let Y=0;if(A){let Z=!1;if(D!==null){let Te=D.texture.format;Z=m.has(Te)}if(Z){let Te=D.texture.type,Le=g.has(Te),be=pe.getClearColor(),Ne=pe.getClearAlpha(),Be=be.r,je=be.g,rt=be.b;Le?(y[0]=Be,y[1]=je,y[2]=rt,y[3]=Ne,O.clearBufferuiv(O.COLOR,0,y)):(w[0]=Be,w[1]=je,w[2]=rt,w[3]=Ne,O.clearBufferiv(O.COLOR,0,w))}else Y|=O.COLOR_BUFFER_BIT}H&&(Y|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(Y|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&O.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),P=A},this.dispose=function(){t.removeEventListener("webglcontextlost",le,!1),t.removeEventListener("webglcontextrestored",Ue,!1),t.removeEventListener("webglcontextcreationerror",Qe,!1),pe.dispose(),se.dispose(),Ee.dispose(),I.dispose(),W.dispose(),ue.dispose(),me.dispose(),te.dispose(),ye.dispose(),xe.dispose(),xe.removeEventListener("sessionstart",yf),xe.removeEventListener("sessionend",_f),hs.stop()};function le(A){A.preventDefault(),Jr("WebGLRenderer: Context Lost."),S=!0}function Ue(){Jr("WebGLRenderer: Context Restored."),S=!1;let A=Vt.autoReset,H=ge.enabled,$=ge.autoUpdate,Y=ge.needsUpdate,Z=ge.type;Re(),Vt.autoReset=A,ge.enabled=H,ge.autoUpdate=$,ge.needsUpdate=Y,ge.type=Z}function Qe(A){Xe("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Yt(A){let H=A.target;H.removeEventListener("dispose",Yt),bt(H)}function bt(A){pi(A),I.remove(A)}function pi(A){let H=I.get(A).programs;H!==void 0&&(H.forEach(function($){ye.releaseProgram($)}),A.isShaderMaterial&&ye.releaseShaderCache(A))}this.renderBufferDirect=function(A,H,$,Y,Z,Te){H===null&&(H=St);let Le=Z.isMesh&&Z.matrixWorld.determinant()<0,be=wm(A,H,$,Y,Z);ve.setMaterial(Y,Le);let Ne=$.index,Be=1;if(Y.wireframe===!0){if(Ne=ce.getWireframeAttribute($),Ne===void 0)return;Be=2}let je=$.drawRange,rt=$.attributes.position,Ve=je.start*Be,wt=(je.start+je.count)*Be;Te!==null&&(Ve=Math.max(Ve,Te.start*Be),wt=Math.min(wt,(Te.start+Te.count)*Be)),Ne!==null?(Ve=Math.max(Ve,0),wt=Math.min(wt,Ne.count)):rt!=null&&(Ve=Math.max(Ve,0),wt=Math.min(wt,rt.count));let Zt=wt-Ve;if(Zt<0||Zt===1/0)return;me.setup(Z,Y,be,$,Ne);let Gt,Et=nt;if(Ne!==null&&(Gt=ie.get(Ne),Et=pt,Et.setIndex(Gt)),Z.isMesh)Y.wireframe===!0?(ve.setLineWidth(Y.wireframeLinewidth*En()),Et.setMode(O.LINES)):Et.setMode(O.TRIANGLES);else if(Z.isLine){let fn=Y.linewidth;fn===void 0&&(fn=1),ve.setLineWidth(fn*En()),Z.isLineSegments?Et.setMode(O.LINES):Z.isLineLoop?Et.setMode(O.LINE_LOOP):Et.setMode(O.LINE_STRIP)}else Z.isPoints?Et.setMode(O.POINTS):Z.isSprite&&Et.setMode(O.TRIANGLES);if(Z.isBatchedMesh)if(lt.get("WEBGL_multi_draw"))Et.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{let fn=Z._multiDrawStarts,Se=Z._multiDrawCounts,An=Z._multiDrawCount,dt=Ne?ie.get(Ne).bytesPerElement:1,Nn=I.get(Y).currentProgram.getUniforms();for(let Jn=0;Jn<An;Jn++)Nn.setValue(O,"_gl_DrawID",Jn),Et.render(fn[Jn]/dt,Se[Jn])}else if(Z.isInstancedMesh)Et.renderInstances(Ve,Zt,Z.count);else if($.isInstancedBufferGeometry){let fn=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Se=Math.min($.instanceCount,fn);Et.renderInstances(Ve,Zt,Se)}else Et.render(Ve,Zt)};function Kn(A,H,$){A.transparent===!0&&A.side===Bn&&A.forceSinglePass===!1?(A.side=Mn,A.needsUpdate=!0,Lo(A,H,$),A.side=Ai,A.needsUpdate=!0,Lo(A,H,$),A.side=Bn):Lo(A,H,$)}this.compile=function(A,H,$=null){$===null&&($=A),b=Ee.get($),b.init(H),_.push(b),$.traverseVisible(function(Z){Z.isLight&&Z.layers.test(H.layers)&&(b.pushLight(Z),Z.castShadow&&b.pushShadow(Z))}),A!==$&&A.traverseVisible(function(Z){Z.isLight&&Z.layers.test(H.layers)&&(b.pushLight(Z),Z.castShadow&&b.pushShadow(Z))}),b.setupLights();let Y=new Set;return A.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;let Te=Z.material;if(Te)if(Array.isArray(Te))for(let Le=0;Le<Te.length;Le++){let be=Te[Le];Kn(be,$,Z),Y.add(be)}else Kn(Te,$,Z),Y.add(Te)}),b=_.pop(),Y},this.compileAsync=function(A,H,$=null){let Y=this.compile(A,H,$);return new Promise(Z=>{function Te(){if(Y.forEach(function(Le){I.get(Le).currentProgram.isReady()&&Y.delete(Le)}),Y.size===0){Z(A);return}setTimeout(Te,10)}lt.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let pc=null;function Mm(A){pc&&pc(A)}function yf(){hs.stop()}function _f(){hs.start()}let hs=new tm;hs.setAnimationLoop(Mm),typeof self<"u"&&hs.setContext(self),this.setAnimationLoop=function(A){pc=A,xe.setAnimationLoop(A),A===null?hs.stop():hs.start()},xe.addEventListener("sessionstart",yf),xe.addEventListener("sessionend",_f),this.render=function(A,H){if(H!==void 0&&H.isCamera!==!0){Xe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;P!==null&&P.renderStart(A,H);let $=xe.enabled===!0&&xe.isPresenting===!0,Y=M!==null&&(D===null||$)&&M.begin(C,D);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),xe.enabled===!0&&xe.isPresenting===!0&&(M===null||M.isCompositing()===!1)&&(xe.cameraAutoUpdate===!0&&xe.updateCamera(H),H=xe.getCamera()),A.isScene===!0&&A.onBeforeRender(C,A,H,D),b=Ee.get(A,_.length),b.init(H),b.state.textureUnits=T.getTextureUnits(),_.push(b),Ze.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),Ie.setFromProjectionMatrix(Ze,Yn,H.reversedDepth),Ge=this.localClippingEnabled,De=Pe.init(this.clippingPlanes,Ge),v=se.get(A,R.length),v.init(),R.push(v),xe.enabled===!0&&xe.isPresenting===!0){let Le=C.xr.getDepthSensingMesh();Le!==null&&mc(Le,H,-1/0,C.sortObjects)}mc(A,H,0,C.sortObjects),v.finish(),C.sortObjects===!0&&v.sort(N,q),It=xe.enabled===!1||xe.isPresenting===!1||xe.hasDepthSensing()===!1,It&&pe.addToRenderList(v,A),this.info.render.frame++,De===!0&&Pe.beginShadows();let Z=b.state.shadowsArray;if(ge.render(Z,A,H),De===!0&&Pe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Y&&M.hasRenderPass())===!1){let Le=v.opaque,be=v.transmissive;if(b.setupLights(),H.isArrayCamera){let Ne=H.cameras;if(be.length>0)for(let Be=0,je=Ne.length;Be<je;Be++){let rt=Ne[Be];Mf(Le,be,A,rt)}It&&pe.render(A);for(let Be=0,je=Ne.length;Be<je;Be++){let rt=Ne[Be];vf(v,A,rt,rt.viewport)}}else be.length>0&&Mf(Le,be,A,H),It&&pe.render(A),vf(v,A,H)}D!==null&&X===0&&(T.updateMultisampleRenderTarget(D),T.updateRenderTargetMipmap(D)),Y&&M.end(C),A.isScene===!0&&A.onAfterRender(C,A,H),me.resetDefaultState(),k=-1,G=null,_.pop(),_.length>0?(b=_[_.length-1],T.setTextureUnits(b.state.textureUnits),De===!0&&Pe.setGlobalState(C.clippingPlanes,b.state.camera)):b=null,R.pop(),R.length>0?v=R[R.length-1]:v=null,P!==null&&P.renderEnd()};function mc(A,H,$,Y){if(A.visible===!1)return;if(A.layers.test(H.layers)){if(A.isGroup)$=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(H);else if(A.isLightProbeGrid)b.pushLightProbeGrid(A);else if(A.isLight)b.pushLight(A),A.castShadow&&b.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Ie.intersectsSprite(A)){Y&&Oe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ze);let Le=ue.update(A),be=A.material;be.visible&&v.push(A,Le,be,$,Oe.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Ie.intersectsObject(A))){let Le=ue.update(A),be=A.material;if(Y&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Oe.copy(A.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),Oe.copy(Le.boundingSphere.center)),Oe.applyMatrix4(A.matrixWorld).applyMatrix4(Ze)),Array.isArray(be)){let Ne=Le.groups;for(let Be=0,je=Ne.length;Be<je;Be++){let rt=Ne[Be],Ve=be[rt.materialIndex];Ve&&Ve.visible&&v.push(A,Le,Ve,$,Oe.z,rt)}}else be.visible&&v.push(A,Le,be,$,Oe.z,null)}}let Te=A.children;for(let Le=0,be=Te.length;Le<be;Le++)mc(Te[Le],H,$,Y)}function vf(A,H,$,Y){let{opaque:Z,transmissive:Te,transparent:Le}=A;b.setupLightsView($),De===!0&&Pe.setGlobalState(C.clippingPlanes,$),Y&&ve.viewport(re.copy(Y)),Z.length>0&&Po(Z,H,$),Te.length>0&&Po(Te,H,$),Le.length>0&&Po(Le,H,$),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function Mf(A,H,$,Y){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[Y.id]===void 0){let Ve=lt.has("EXT_color_buffer_half_float")||lt.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[Y.id]=new Pn(1,1,{generateMipmaps:!0,type:Ve?fi:Tn,minFilter:hi,samples:Math.max(4,Pt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ct.workingColorSpace})}let Te=b.state.transmissionRenderTarget[Y.id],Le=Y.viewport||re;Te.setSize(Le.z*C.transmissionResolutionScale,Le.w*C.transmissionResolutionScale);let be=C.getRenderTarget(),Ne=C.getActiveCubeFace(),Be=C.getActiveMipmapLevel();C.setRenderTarget(Te),C.getClearColor(ne),fe=C.getClearAlpha(),fe<1&&C.setClearColor(16777215,.5),C.clear(),It&&pe.render($);let je=C.toneMapping;C.toneMapping=Zn;let rt=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),b.setupLightsView(Y),De===!0&&Pe.setGlobalState(C.clippingPlanes,Y),Po(A,$,Y),T.updateMultisampleRenderTarget(Te),T.updateRenderTargetMipmap(Te),lt.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let wt=0,Zt=H.length;wt<Zt;wt++){let Gt=H[wt],{object:Et,geometry:fn,material:Se,group:An}=Gt;if(Se.side===Bn&&Et.layers.test(Y.layers)){let dt=Se.side;Se.side=Mn,Se.needsUpdate=!0,bf(Et,$,Y,fn,Se,An),Se.side=dt,Se.needsUpdate=!0,Ve=!0}}Ve===!0&&(T.updateMultisampleRenderTarget(Te),T.updateRenderTargetMipmap(Te))}C.setRenderTarget(be,Ne,Be),C.setClearColor(ne,fe),rt!==void 0&&(Y.viewport=rt),C.toneMapping=je}function Po(A,H,$){let Y=H.isScene===!0?H.overrideMaterial:null;for(let Z=0,Te=A.length;Z<Te;Z++){let Le=A[Z],{object:be,geometry:Ne,group:Be}=Le,je=Le.material;je.allowOverride===!0&&Y!==null&&(je=Y),be.layers.test($.layers)&&bf(be,H,$,Ne,je,Be)}}function bf(A,H,$,Y,Z,Te){A.onBeforeRender(C,H,$,Y,Z,Te),A.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Z.onBeforeRender(C,H,$,Y,A,Te),Z.transparent===!0&&Z.side===Bn&&Z.forceSinglePass===!1?(Z.side=Mn,Z.needsUpdate=!0,C.renderBufferDirect($,H,Y,Z,A,Te),Z.side=Ai,Z.needsUpdate=!0,C.renderBufferDirect($,H,Y,Z,A,Te),Z.side=Bn):C.renderBufferDirect($,H,Y,Z,A,Te),A.onAfterRender(C,H,$,Y,Z,Te)}function Lo(A,H,$){H.isScene!==!0&&(H=St);let Y=I.get(A),Z=b.state.lights,Te=b.state.shadowsArray,Le=Z.state.version,be=ye.getParameters(A,Z.state,Te,H,$,b.state.lightProbeGridArray),Ne=ye.getProgramCacheKey(be),Be=Y.programs;Y.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?H.environment:null,Y.fog=H.fog;let je=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;Y.envMap=W.get(A.envMap||Y.environment,je),Y.envMapRotation=Y.environment!==null&&A.envMap===null?H.environmentRotation:A.envMapRotation,Be===void 0&&(A.addEventListener("dispose",Yt),Be=new Map,Y.programs=Be);let rt=Be.get(Ne);if(rt!==void 0){if(Y.currentProgram===rt&&Y.lightsStateVersion===Le)return Tf(A,be),rt}else be.uniforms=ye.getUniforms(A),P!==null&&A.isNodeMaterial&&P.build(A,$,be),A.onBeforeCompile(be,C),rt=ye.acquireProgram(be,Ne),Be.set(Ne,rt),Y.uniforms=be.uniforms;let Ve=Y.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ve.clippingPlanes=Pe.uniform),Tf(A,be),Y.needsLights=Em(A),Y.lightsStateVersion=Le,Y.needsLights&&(Ve.ambientLightColor.value=Z.state.ambient,Ve.lightProbe.value=Z.state.probe,Ve.directionalLights.value=Z.state.directional,Ve.directionalLightShadows.value=Z.state.directionalShadow,Ve.spotLights.value=Z.state.spot,Ve.spotLightShadows.value=Z.state.spotShadow,Ve.rectAreaLights.value=Z.state.rectArea,Ve.ltc_1.value=Z.state.rectAreaLTC1,Ve.ltc_2.value=Z.state.rectAreaLTC2,Ve.pointLights.value=Z.state.point,Ve.pointLightShadows.value=Z.state.pointShadow,Ve.hemisphereLights.value=Z.state.hemi,Ve.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Ve.spotLightMatrix.value=Z.state.spotLightMatrix,Ve.spotLightMap.value=Z.state.spotLightMap,Ve.pointShadowMatrix.value=Z.state.pointShadowMatrix),Y.lightProbeGrid=b.state.lightProbeGridArray.length>0,Y.currentProgram=rt,Y.uniformsList=null,rt}function wf(A){if(A.uniformsList===null){let H=A.currentProgram.getUniforms();A.uniformsList=ur.seqWithValue(H.seq,A.uniforms)}return A.uniformsList}function Tf(A,H){let $=I.get(A);$.outputColorSpace=H.outputColorSpace,$.batching=H.batching,$.batchingColor=H.batchingColor,$.instancing=H.instancing,$.instancingColor=H.instancingColor,$.instancingMorph=H.instancingMorph,$.skinning=H.skinning,$.morphTargets=H.morphTargets,$.morphNormals=H.morphNormals,$.morphColors=H.morphColors,$.morphTargetsCount=H.morphTargetsCount,$.numClippingPlanes=H.numClippingPlanes,$.numIntersection=H.numClipIntersection,$.vertexAlphas=H.vertexAlphas,$.vertexTangents=H.vertexTangents,$.toneMapping=H.toneMapping}function bm(A,H){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;E.setFromMatrixPosition(H.matrixWorld);for(let $=0,Y=A.length;$<Y;$++){let Z=A[$];if(Z.texture!==null&&Z.boundingBox.containsPoint(E))return Z}return null}function wm(A,H,$,Y,Z){H.isScene!==!0&&(H=St),T.resetTextureUnits();let Te=H.fog,Le=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?H.environment:null,be=D===null?C.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:ct.workingColorSpace,Ne=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,Be=W.get(Y.envMap||Le,Ne),je=Y.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,rt=!!$.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ve=!!$.morphAttributes.position,wt=!!$.morphAttributes.normal,Zt=!!$.morphAttributes.color,Gt=Zn;Y.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Gt=C.toneMapping);let Et=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,fn=Et!==void 0?Et.length:0,Se=I.get(Y),An=b.state.lights;if(De===!0&&(Ge===!0||A!==G)){let Lt=A===G&&Y.id===k;Pe.setState(Y,A,Lt)}let dt=!1;Y.version===Se.__version?(Se.needsLights&&Se.lightsStateVersion!==An.state.version||Se.outputColorSpace!==be||Z.isBatchedMesh&&Se.batching===!1||!Z.isBatchedMesh&&Se.batching===!0||Z.isBatchedMesh&&Se.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Se.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Se.instancing===!1||!Z.isInstancedMesh&&Se.instancing===!0||Z.isSkinnedMesh&&Se.skinning===!1||!Z.isSkinnedMesh&&Se.skinning===!0||Z.isInstancedMesh&&Se.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Se.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Se.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Se.instancingMorph===!1&&Z.morphTexture!==null||Se.envMap!==Be||Y.fog===!0&&Se.fog!==Te||Se.numClippingPlanes!==void 0&&(Se.numClippingPlanes!==Pe.numPlanes||Se.numIntersection!==Pe.numIntersection)||Se.vertexAlphas!==je||Se.vertexTangents!==rt||Se.morphTargets!==Ve||Se.morphNormals!==wt||Se.morphColors!==Zt||Se.toneMapping!==Gt||Se.morphTargetsCount!==fn||!!Se.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(dt=!0):(dt=!0,Se.__version=Y.version);let Nn=Se.currentProgram;dt===!0&&(Nn=Lo(Y,H,Z),P&&Y.isNodeMaterial&&P.onUpdateProgram(Y,Nn,Se));let Jn=!1,Ui=!1,Cs=!1,At=Nn.getUniforms(),$t=Se.uniforms;if(ve.useProgram(Nn.program)&&(Jn=!0,Ui=!0,Cs=!0),Y.id!==k&&(k=Y.id,Ui=!0),Se.needsLights){let Lt=bm(b.state.lightProbeGridArray,Z);Se.lightProbeGrid!==Lt&&(Se.lightProbeGrid=Lt,Ui=!0)}if(Jn||G!==A){ve.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),At.setValue(O,"projectionMatrix",A.projectionMatrix),At.setValue(O,"viewMatrix",A.matrixWorldInverse);let ki=At.map.cameraPosition;ki!==void 0&&ki.setValue(O,Ye.setFromMatrixPosition(A.matrixWorld)),Pt.logarithmicDepthBuffer&&At.setValue(O,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&At.setValue(O,"isOrthographic",A.isOrthographicCamera===!0),G!==A&&(G=A,Ui=!0,Cs=!0)}if(Se.needsLights&&(An.state.directionalShadowMap.length>0&&At.setValue(O,"directionalShadowMap",An.state.directionalShadowMap,T),An.state.spotShadowMap.length>0&&At.setValue(O,"spotShadowMap",An.state.spotShadowMap,T),An.state.pointShadowMap.length>0&&At.setValue(O,"pointShadowMap",An.state.pointShadowMap,T)),Z.isSkinnedMesh){At.setOptional(O,Z,"bindMatrix"),At.setOptional(O,Z,"bindMatrixInverse");let Lt=Z.skeleton;Lt&&(Lt.boneTexture===null&&Lt.computeBoneTexture(),At.setValue(O,"boneTexture",Lt.boneTexture,T))}Z.isBatchedMesh&&(At.setOptional(O,Z,"batchingTexture"),At.setValue(O,"batchingTexture",Z._matricesTexture,T),At.setOptional(O,Z,"batchingIdTexture"),At.setValue(O,"batchingIdTexture",Z._indirectTexture,T),At.setOptional(O,Z,"batchingColorTexture"),Z._colorsTexture!==null&&At.setValue(O,"batchingColorTexture",Z._colorsTexture,T));let Fi=$.morphAttributes;if((Fi.position!==void 0||Fi.normal!==void 0||Fi.color!==void 0)&&Ke.update(Z,$,Nn),(Ui||Se.receiveShadow!==Z.receiveShadow)&&(Se.receiveShadow=Z.receiveShadow,At.setValue(O,"receiveShadow",Z.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&H.environment!==null&&($t.envMapIntensity.value=H.environmentIntensity),$t.dfgLUT!==void 0&&($t.dfgLUT.value=EM()),Ui){if(At.setValue(O,"toneMappingExposure",C.toneMappingExposure),Se.needsLights&&Tm($t,Cs),Te&&Y.fog===!0&&ee.refreshFogUniforms($t,Te),ee.refreshMaterialUniforms($t,Y,Q,K,b.state.transmissionRenderTarget[A.id]),Se.needsLights&&Se.lightProbeGrid){let Lt=Se.lightProbeGrid;$t.probesSH.value=Lt.texture,$t.probesMin.value.copy(Lt.boundingBox.min),$t.probesMax.value.copy(Lt.boundingBox.max),$t.probesResolution.value.copy(Lt.resolution)}ur.upload(O,wf(Se),$t,T)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(ur.upload(O,wf(Se),$t,T),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&At.setValue(O,"center",Z.center),At.setValue(O,"modelViewMatrix",Z.modelViewMatrix),At.setValue(O,"normalMatrix",Z.normalMatrix),At.setValue(O,"modelMatrix",Z.matrixWorld),Y.uniformsGroups!==void 0){let Lt=Y.uniformsGroups;for(let ki=0,Ss=Lt.length;ki<Ss;ki++){let Ef=Lt[ki];te.update(Ef,Nn),te.bind(Ef,Nn)}}return Nn}function Tm(A,H){A.ambientLightColor.needsUpdate=H,A.lightProbe.needsUpdate=H,A.directionalLights.needsUpdate=H,A.directionalLightShadows.needsUpdate=H,A.pointLights.needsUpdate=H,A.pointLightShadows.needsUpdate=H,A.spotLights.needsUpdate=H,A.spotLightShadows.needsUpdate=H,A.rectAreaLights.needsUpdate=H,A.hemisphereLights.needsUpdate=H}function Em(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(A,H,$){let Y=I.get(A);Y.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),I.get(A.texture).__webglTexture=H,I.get(A.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:$,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,H){let $=I.get(A);$.__webglFramebuffer=H,$.__useDefaultFramebuffer=H===void 0};let Am=O.createFramebuffer();this.setRenderTarget=function(A,H=0,$=0){D=A,z=H,X=$;let Y=null,Z=!1,Te=!1;if(A){let be=I.get(A);if(be.__useDefaultFramebuffer!==void 0){ve.bindFramebuffer(O.FRAMEBUFFER,be.__webglFramebuffer),re.copy(A.viewport),L.copy(A.scissor),V=A.scissorTest,ve.viewport(re),ve.scissor(L),ve.setScissorTest(V),k=-1;return}else if(be.__webglFramebuffer===void 0)T.setupRenderTarget(A);else if(be.__hasExternalTextures)T.rebindTextures(A,I.get(A.texture).__webglTexture,I.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let je=A.depthTexture;if(be.__boundDepthTexture!==je){if(je!==null&&I.has(je)&&(A.width!==je.image.width||A.height!==je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(A)}}let Ne=A.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(Te=!0);let Be=I.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Be[H])?Y=Be[H][$]:Y=Be[H],Z=!0):A.samples>0&&T.useMultisampledRTT(A)===!1?Y=I.get(A).__webglMultisampledFramebuffer:Array.isArray(Be)?Y=Be[$]:Y=Be,re.copy(A.viewport),L.copy(A.scissor),V=A.scissorTest}else re.copy(j).multiplyScalar(Q).floor(),L.copy(oe).multiplyScalar(Q).floor(),V=we;if($!==0&&(Y=Am),ve.bindFramebuffer(O.FRAMEBUFFER,Y)&&ve.drawBuffers(A,Y),ve.viewport(re),ve.scissor(L),ve.setScissorTest(V),Z){let be=I.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+H,be.__webglTexture,$)}else if(Te){let be=H;for(let Ne=0;Ne<A.textures.length;Ne++){let Be=I.get(A.textures[Ne]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Ne,Be.__webglTexture,$,be)}}else if(A!==null&&$!==0){let be=I.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,be.__webglTexture,$)}k=-1},this.readRenderTargetPixels=function(A,H,$,Y,Z,Te,Le,be=0){if(!(A&&A.isWebGLRenderTarget)){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=I.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Le!==void 0&&(Ne=Ne[Le]),Ne){ve.bindFramebuffer(O.FRAMEBUFFER,Ne);try{let Be=A.textures[be],je=Be.format,rt=Be.type;if(A.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+be),!Pt.textureFormatReadable(je)){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Pt.textureTypeReadable(rt)){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=A.width-Y&&$>=0&&$<=A.height-Z&&O.readPixels(H,$,Y,Z,U.convert(je),U.convert(rt),Te)}finally{let Be=D!==null?I.get(D).__webglFramebuffer:null;ve.bindFramebuffer(O.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(A,H,$,Y,Z,Te,Le,be=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=I.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Le!==void 0&&(Ne=Ne[Le]),Ne)if(H>=0&&H<=A.width-Y&&$>=0&&$<=A.height-Z){ve.bindFramebuffer(O.FRAMEBUFFER,Ne);let Be=A.textures[be],je=Be.format,rt=Be.type;if(A.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+be),!Pt.textureFormatReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Pt.textureTypeReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ve=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Ve),O.bufferData(O.PIXEL_PACK_BUFFER,Te.byteLength,O.STREAM_READ),O.readPixels(H,$,Y,Z,U.convert(je),U.convert(rt),0);let wt=D!==null?I.get(D).__webglFramebuffer:null;ve.bindFramebuffer(O.FRAMEBUFFER,wt);let Zt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Rp(O,Zt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Ve),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,Te),O.deleteBuffer(Ve),O.deleteSync(Zt),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,H=null,$=0){let Y=Math.pow(2,-$),Z=Math.floor(A.image.width*Y),Te=Math.floor(A.image.height*Y),Le=H!==null?H.x:0,be=H!==null?H.y:0;T.setTexture2D(A,0),O.copyTexSubImage2D(O.TEXTURE_2D,$,0,0,Le,be,Z,Te),ve.unbindTexture()};let Rm=O.createFramebuffer(),Cm=O.createFramebuffer();this.copyTextureToTexture=function(A,H,$=null,Y=null,Z=0,Te=0){let Le,be,Ne,Be,je,rt,Ve,wt,Zt,Gt=A.isCompressedTexture?A.mipmaps[Te]:A.image;if($!==null)Le=$.max.x-$.min.x,be=$.max.y-$.min.y,Ne=$.isBox3?$.max.z-$.min.z:1,Be=$.min.x,je=$.min.y,rt=$.isBox3?$.min.z:0;else{let $t=Math.pow(2,-Z);Le=Math.floor(Gt.width*$t),be=Math.floor(Gt.height*$t),A.isDataArrayTexture?Ne=Gt.depth:A.isData3DTexture?Ne=Math.floor(Gt.depth*$t):Ne=1,Be=0,je=0,rt=0}Y!==null?(Ve=Y.x,wt=Y.y,Zt=Y.z):(Ve=0,wt=0,Zt=0);let Et=U.convert(H.format),fn=U.convert(H.type),Se;H.isData3DTexture?(T.setTexture3D(H,0),Se=O.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(T.setTexture2DArray(H,0),Se=O.TEXTURE_2D_ARRAY):(T.setTexture2D(H,0),Se=O.TEXTURE_2D),ve.activeTexture(O.TEXTURE0),ve.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,H.flipY),ve.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),ve.pixelStorei(O.UNPACK_ALIGNMENT,H.unpackAlignment);let An=ve.getParameter(O.UNPACK_ROW_LENGTH),dt=ve.getParameter(O.UNPACK_IMAGE_HEIGHT),Nn=ve.getParameter(O.UNPACK_SKIP_PIXELS),Jn=ve.getParameter(O.UNPACK_SKIP_ROWS),Ui=ve.getParameter(O.UNPACK_SKIP_IMAGES);ve.pixelStorei(O.UNPACK_ROW_LENGTH,Gt.width),ve.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Gt.height),ve.pixelStorei(O.UNPACK_SKIP_PIXELS,Be),ve.pixelStorei(O.UNPACK_SKIP_ROWS,je),ve.pixelStorei(O.UNPACK_SKIP_IMAGES,rt);let Cs=A.isDataArrayTexture||A.isData3DTexture,At=H.isDataArrayTexture||H.isData3DTexture;if(A.isDepthTexture){let $t=I.get(A),Fi=I.get(H),Lt=I.get($t.__renderTarget),ki=I.get(Fi.__renderTarget);ve.bindFramebuffer(O.READ_FRAMEBUFFER,Lt.__webglFramebuffer),ve.bindFramebuffer(O.DRAW_FRAMEBUFFER,ki.__webglFramebuffer);for(let Ss=0;Ss<Ne;Ss++)Cs&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,I.get(A).__webglTexture,Z,rt+Ss),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,I.get(H).__webglTexture,Te,Zt+Ss)),O.blitFramebuffer(Be,je,Le,be,Ve,wt,Le,be,O.DEPTH_BUFFER_BIT,O.NEAREST);ve.bindFramebuffer(O.READ_FRAMEBUFFER,null),ve.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(Z!==0||A.isRenderTargetTexture||I.has(A)){let $t=I.get(A),Fi=I.get(H);ve.bindFramebuffer(O.READ_FRAMEBUFFER,Rm),ve.bindFramebuffer(O.DRAW_FRAMEBUFFER,Cm);for(let Lt=0;Lt<Ne;Lt++)Cs?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,$t.__webglTexture,Z,rt+Lt):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,$t.__webglTexture,Z),At?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Fi.__webglTexture,Te,Zt+Lt):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Fi.__webglTexture,Te),Z!==0?O.blitFramebuffer(Be,je,Le,be,Ve,wt,Le,be,O.COLOR_BUFFER_BIT,O.NEAREST):At?O.copyTexSubImage3D(Se,Te,Ve,wt,Zt+Lt,Be,je,Le,be):O.copyTexSubImage2D(Se,Te,Ve,wt,Be,je,Le,be);ve.bindFramebuffer(O.READ_FRAMEBUFFER,null),ve.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else At?A.isDataTexture||A.isData3DTexture?O.texSubImage3D(Se,Te,Ve,wt,Zt,Le,be,Ne,Et,fn,Gt.data):H.isCompressedArrayTexture?O.compressedTexSubImage3D(Se,Te,Ve,wt,Zt,Le,be,Ne,Et,Gt.data):O.texSubImage3D(Se,Te,Ve,wt,Zt,Le,be,Ne,Et,fn,Gt):A.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,Te,Ve,wt,Le,be,Et,fn,Gt.data):A.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,Te,Ve,wt,Gt.width,Gt.height,Et,Gt.data):O.texSubImage2D(O.TEXTURE_2D,Te,Ve,wt,Le,be,Et,fn,Gt);ve.pixelStorei(O.UNPACK_ROW_LENGTH,An),ve.pixelStorei(O.UNPACK_IMAGE_HEIGHT,dt),ve.pixelStorei(O.UNPACK_SKIP_PIXELS,Nn),ve.pixelStorei(O.UNPACK_SKIP_ROWS,Jn),ve.pixelStorei(O.UNPACK_SKIP_IMAGES,Ui),Te===0&&H.generateMipmaps&&O.generateMipmap(Se),ve.unbindTexture()},this.initRenderTarget=function(A){I.get(A).__webglFramebuffer===void 0&&T.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?T.setTextureCube(A,0):A.isData3DTexture?T.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?T.setTexture2DArray(A,0):T.setTexture2D(A,0),ve.unbindTexture()},this.resetState=function(){z=0,X=0,D=null,ve.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=ct._getUnpackColorSpace()}};function lm(n,e){let t=new oc({canvas:e.canvas,antialias:!0});t.setPixelRatio(Math.min(2,devicePixelRatio||1)),t.setSize(e.VW,e.VH,!1),t.outputColorSpace=cn;let i=new eo;i.background=new tt(861232);let s=new mn(50,e.VW/e.VH,10,26e3),r=new mo(15397624,4867128,.95);i.add(r);let o=new xo(16773852,1.35);o.position.set(-.45,1,-.3).multiplyScalar(1e3),i.add(o);let a=new Qt;i.add(a),o.target=a,i.fog=new jr(10466494,2600,9e3);let l={renderer:t,scene:i,camera:s,sun:o,hemi:r,cx:n.player.x,cy:n.player.y,dist:1150,elev:.96,shakeX:0,shakeY:0,_ray:new yo,_plane:new On(new B(0,1,0),0),_v3:new B,lightLevel(){return .5+.5*Math.cos(Math.PI*2*(n.t%_r/_r))},resize(){s.aspect=e.VW/e.VH,s.updateProjectionMatrix(),t.setSize(e.VW,e.VH,!1)},update(c){let f=n.player,h=f.x,d=f.y,u=1150,p=.96;e.godView?(h=he.w/2,d=he.h/2,u=11200,p=1.25):f.inCopter&&n.copter&&(u=1500+Math.hypot(n.copter.vx,n.copter.vy)*.9);let x=Math.min(1,c*(e.godView?6:5));l.cx=vr(l.cx,h,x),l.cy=vr(l.cy,d,x),l.dist=vr(l.dist,u,Math.min(1,c*4)),l.elev=vr(l.elev,p,Math.min(1,c*4)),n.shake>0?(l.shakeX=(Math.random()*2-1)*n.shake,l.shakeY=(Math.random()*2-1)*n.shake):(l.shakeX=0,l.shakeY=0);let m=l.cx+l.shakeX,g=l.cy+l.shakeY,y=Math.sin(l.elev)*l.dist,w=Math.cos(l.elev)*l.dist;s.position.set(m,y,g+w),s.lookAt(m,0,g),a.position.set(m,0,g);let E=l.lightLevel(),v=Math.sin((1-E)*Math.PI);o.intensity=1+E*.45,o.color.setHSL(.105-v*.045,.52+v*.25,.62-v*.06),r.intensity=.78+E*.25;let b=n.t%_r/_r*Math.PI*2;o.position.set(m+Math.cos(b)*1400,900+E*600,g+Math.sin(b)*1400-400),i.fog.near=l.dist*2.2,i.fog.far=l.dist*8,l._viewR=l.dist*1.9},render(){t.render(i,s)},screenToWorld(c,f){let h=new $e(c/e.VW*2-1,-(f/e.VH)*2+1);l._ray.setFromCamera(h,s);let d=new B;return l._ray.ray.intersectPlane(l._plane,d),d?{x:d.x,y:d.z}:{x:l.cx,y:l.cy}},worldToScreen(c,f,h=0){return l._v3.set(c,h,f).project(s),{x:(l._v3.x+1)/2*e.VW,y:(-l._v3.y+1)/2*e.VH,behind:l._v3.z>1}},inView(c,f,h=0){let d=c-l.cx,u=f-l.cy;return d*d+u*u<(l._viewR+h)*(l._viewR+h)},viewRect(c=0){let f=l._viewR+c;return{x0:l.cx-f,y0:l.cy-f,x1:l.cx+f,y1:l.cy+f}},get zoom(){return 900/l.dist}};return l.update(.1),l}var cc=.3;function hm(n,e){let t=Math.round(he.w*cc),i=Math.round(he.h*cc),s=document.createElement("canvas");s.width=t,s.height=i;let r=s.getContext("2d");r.save(),r.scale(cc,cc),AM(n,r),r.restore();let o=new Qi(s);o.colorSpace=cn,o.anisotropy=4,o.minFilter=hi;let a=new _e(new li(he.w,he.h),new es({map:o}));a.rotation.x=-Math.PI/2,a.position.set(he.w/2,0,he.h/2),e.add(a);let l=new _e(new li(he.w*6,he.h*6),new es({color:863029}));return l.rotation.x=-Math.PI/2,l.position.set(he.w/2,-2,he.h/2),e.add(l),{tex:o}}function cm(n,e,t){let i=(e+n.world.biomeRidge(t))/he.w,s=.05,r=gi((i-(1/3-s))/(2*s)),o=gi((i-(2/3-s))/(2*s)),a=(d,u,p)=>[d[0]+(u[0]-d[0])*p,d[1]+(u[1]-d[1])*p,d[2]+(u[2]-d[2])*p],l=[181,154,102],c=[74,92,48],f=[185,199,209],h=a(l,c,r);return h=a(h,f,o),h}function pf(n,e){e.beginPath(),n.world.islandPath.forEach((t,i)=>i?e.lineTo(t.x,t.y):e.moveTo(t.x,t.y)),e.closePath()}function AM(n,e){let t=he.w,i=he.h;e.fillStyle="#0d2b35",e.fillRect(0,0,t,i),e.lineJoin="round",e.strokeStyle="rgba(64,124,134,0.45)",e.lineWidth=64,pf(n,e),e.stroke(),e.strokeStyle="rgba(90,150,158,0.30)",e.lineWidth=26,pf(n,e),e.stroke(),e.save(),pf(n,e),e.clip();let s=32;for(let a=0;a<i;a+=s)for(let l=0;l<t;l+=s){if(n.world.landFactor(l+s/2,a+s/2)<=-.25)continue;let[f,h,d]=cm(n,l+s/2,a+s/2),u=Oo(l/s|0,a/s|0),p=Oo(l/96|0,a/96|0),x=.88+u*.14+(p-.5)*.12-a/i*.06;f*=x,h*=x,d*=x,e.fillStyle=`rgb(${f|0},${h|0},${d|0})`,e.fillRect(l-1,a-1,s+2,s+2)}e.lineCap="round";let r=n.world.islandPath;for(let a=0;a<3;a++){let l=a===0?96:a===1?30:7;for(let c=0;c<r.length;c++){let f=r[c],h=r[(c+1)%r.length],d=n.world.biomeAt((f.x+h.x)/2,(f.y+h.y)/2)==="winter";e.strokeStyle=a===0?d?"rgba(214,227,235,0.95)":"rgba(186,166,120,0.95)":a===1?d?"rgba(168,190,204,0.9)":"rgba(146,128,92,0.9)":"rgba(240,248,252,0.55)",e.lineWidth=l,e.beginPath(),e.moveTo(f.x,f.y),e.lineTo(h.x,h.y),e.stroke()}}for(let a of n.world.lakes){e.save(),e.translate(a.x,a.y);let l=()=>{e.beginPath();for(let f=0;f<=28;f++){let h=f/28*Math.PI*2,d=a.r*a.wob[f%28],u=Math.cos(h)*d,p=Math.sin(h)*d*.84;f?e.lineTo(u,p):e.moveTo(u,p)}e.closePath()};e.save(),e.scale(1.06,1.06),l(),e.fillStyle=a.frozen?"rgba(238,246,251,.95)":"rgba(96,118,66,.7)",e.fill(),e.restore(),l();let c=e.createRadialGradient(0,-.3*a.r,a.r*.1,0,0,a.r);a.frozen?(c.addColorStop(0,"#dfeaf2"),c.addColorStop(1,"#96b2c8")):(c.addColorStop(0,"#33687c"),c.addColorStop(1,"#0c2531")),e.fillStyle=c,e.fill(),e.restore()}for(let a of n.world.monuments){let l=e.createRadialGradient(a.x,a.y,a.r*.2,a.x,a.y,a.r);l.addColorStop(0,"rgba(110,106,95,.5)"),l.addColorStop(.8,"rgba(98,94,84,.32)"),l.addColorStop(1,"rgba(90,86,76,0)"),e.fillStyle=l,e.beginPath(),e.arc(a.x,a.y,a.r,0,7),e.fill()}e.lineCap="round";for(let a of n.world.roads)for(let l=0;l<a.pts.length-1;l++){let c=a.pts[l],f=a.pts[l+1],h=Math.min(a.fade[l],a.fade[l+1]);h<=.02||(e.globalAlpha=h,e.strokeStyle="#4f4430",e.lineWidth=a.w,e.beginPath(),e.moveTo(c.x,c.y),e.lineTo(f.x,f.y),e.stroke(),e.strokeStyle="#665838",e.lineWidth=a.w-4,e.beginPath(),e.moveTo(c.x,c.y),e.lineTo(f.x,f.y),e.stroke(),e.globalAlpha=1)}let o=11;for(let a of n.world.rails)for(let l=0;l<a.pts.length-1;l++){let c=a.pts[l],f=a.pts[l+1];e.strokeStyle="#574d40",e.lineWidth=2*o+16,e.beginPath(),e.moveTo(c.x,c.y),e.lineTo(f.x,f.y),e.stroke(),e.strokeStyle="#6b5f4e",e.lineWidth=2*o+7,e.beginPath(),e.moveTo(c.x,c.y),e.lineTo(f.x,f.y),e.stroke();let h=Math.hypot(f.x-c.x,f.y-c.y),d=Math.atan2(f.y-c.y,f.x-c.x),u=-Math.sin(d),p=Math.cos(d);e.strokeStyle="#3a2e1d",e.lineWidth=4.5;for(let x=8;x<h;x+=24){let m=c.x+Math.cos(d)*x,g=c.y+Math.sin(d)*x;e.beginPath(),e.moveTo(m-u*(o+5),g-p*(o+5)),e.lineTo(m+u*(o+5),g+p*(o+5)),e.stroke()}e.strokeStyle="#9aa1a8",e.lineWidth=2.6;for(let x of[-o,o])e.beginPath(),e.moveTo(c.x+u*x,c.y+p*x),e.lineTo(f.x+u*x,f.y+p*x),e.stroke()}for(let a=0;a<i;a+=96)for(let l=0;l<t;l+=96){if(!n.world.onLand(l,a)||n.world.lakeAt(l,a))continue;let c=Oo(l/96|0,a/96|0);if(c>.5)continue;let[f,h,d]=cm(n,l,a);e.fillStyle=`rgba(${f*.75|0},${h*.75|0},${d*.75|0},0.5)`,e.beginPath(),e.ellipse(l+c*80,a+c*7919%1*80,9+c*14,5+c*8,c*6,0,7),e.fill()}e.restore()}var mf=new Map;function Ce(n,e={}){let t=n+JSON.stringify(e);return mf.has(t)||mf.set(t,new es({color:n,emissive:e.emissive||0,emissiveIntensity:e.emissiveIntensity??1,transparent:!!e.transparent,opacity:e.opacity??1,flatShading:!0})),mf.get(t)}var de={box:new ji(1,1,1),cyl:new ws(1,1,1,8),cyl6:new ws(1,1.18,1,6),cone:new lo(1,1,7),ico:new co(1,0),sphere:new fo(1,8,6),quad:new li(1,1)},hc=null;function dc(){if(hc)return hc;let n=document.createElement("canvas");n.width=64,n.height=64;let e=n.getContext("2d"),t=e.createRadialGradient(32,32,2,32,32,32);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.4,"rgba(255,255,255,0.45)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),hc=new Qi(n),hc}var fc=null;function xf(){if(fc)return fc;let n=document.createElement("canvas");n.width=64,n.height=64;let e=n.getContext("2d"),t=e.createRadialGradient(32,32,4,32,32,30);return t.addColorStop(0,"rgba(8,8,6,0.42)"),t.addColorStop(.7,"rgba(8,8,6,0.22)"),t.addColorStop(1,"rgba(8,8,6,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),fc=new Qi(n),fc}function ls(n,e=60){let t=new Si({map:dc(),color:n,transparent:!0,blending:Di,depthWrite:!1}),i=new Ki(t);return i.scale.set(e,e,1),i}var gf=null;function gr(n=40){gf||(gf=new Li(.5,14));let e=new wn({map:xf(),transparent:!0,depthWrite:!1}),t=new _e(gf,e);return t.rotation.x=-Math.PI/2,t.scale.set(n,n*.8,1),t}var uc={wood:9069104,stone:8357517,metal:5791590,armored:4280939},Rs={wood:6111006,stone:5659747,metal:3948871,armored:2567996};function fm(n,e={}){let t=new ut,i=new _e(de.cyl,Ce(n));i.scale.set(10,22,10),i.position.y=11,t.add(i);let s=new _e(de.sphere,Ce(e.headCol??13081716));s.scale.set(7,7,7),s.position.y=27,t.add(s);let r=new _e(de.box,Ce(2303519));r.scale.set(e.gunLen??20,4,4),r.position.set((e.gunLen??20)/2+6,18,0),t.add(r);let o=gr(42);return o.position.y=1.2,t.add(o),t.userData={body:i,head:s,gun:r,shadow:o},t}var RM=Math.PI*2;function dm(n,e){let t=n.resources.filter(L=>L.type==="tree"),i=n.resources.filter(L=>L.type==="stone"),s=n.resources.filter(L=>L.type==="metal"),r=new gn(de.cyl,Ce(6111008),t.length),o=new gn(de.cone,Ce(4942385),t.length),a=new gn(de.cone,Ce(7312460),t.length),l=new gn(de.ico,Ce(9278603),i.length),c=new gn(de.ico,Ce(9271114),s.length),f=new gn(de.ico,Ce(14198864,{emissive:6965776}),s.length);for(let L of[r,o,a,l,c,f])L.frustumCulled=!1,e.add(L);let h=new Mt,d=0;function u(){t.forEach((L,V)=>{let ne=L.amount<=0?.001:.55+.45*(L.amount/L.max);h.makeScale(7*ne,30*ne,7*ne).setPosition(L.x,15*ne,L.y),r.setMatrixAt(V,h),h.makeScale(30*ne,42*ne,30*ne).setPosition(L.x,36*ne,L.y),o.setMatrixAt(V,h),h.makeScale(20*ne,30*ne,20*ne).setPosition(L.x+4,56*ne,L.y-3),a.setMatrixAt(V,h)}),i.forEach((L,V)=>{let ne=L.amount<=0?.001:(.55+.45*(L.amount/L.max))*L.r;h.makeRotationY(L.seed).scale(new B(ne,ne*.75,ne)).setPosition(L.x,ne*.45,L.y),l.setMatrixAt(V,h)}),s.forEach((L,V)=>{let ne=L.amount<=0?.001:(.55+.45*(L.amount/L.max))*L.r;h.makeRotationY(L.seed*2).scale(new B(ne,ne*.7,ne)).setPosition(L.x,ne*.42,L.y),c.setMatrixAt(V,h),h.makeScale(ne*.4,ne*.34,ne*.4).setPosition(L.x+3,ne*.85,L.y-2),f.setMatrixAt(V,h)});for(let L of[r,o,a,l,c,f])L.instanceMatrix.needsUpdate=!0}u();let p=new gn(de.ico,Ce(7896708),n.world.boulders.length||1);n.world.boulders.forEach((L,V)=>{h.makeRotationY(L.seed).scale(new B(L.r,L.r*.8,L.r)).setPosition(L.x,L.r*.45,L.y),p.setMatrixAt(V,h)}),p.frustumCulled=!1,e.add(p);let x=new gn(de.ico,Ce(8685967),n.world.rocks.length||1);n.world.rocks.forEach((L,V)=>{h.makeRotationY(L.seed).scale(new B(L.r,L.r*.6,L.r)).setPosition(L.x,L.r*.3,L.y),x.setMatrixAt(V,h)}),x.frustumCulled=!1,e.add(x);let m=new gn(de.cyl,Ce(7032616),n.world.palms.length||1),g=new gn(de.cone,Ce(5077552),n.world.palms.length||1);n.world.palms.forEach((L,V)=>{h.makeScale(3.4,44,3.4).setPosition(L.x,22,L.y),m.setMatrixAt(V,h),h.makeScale(26,14,26).setPosition(L.x,48,L.y),g.setMatrixAt(V,h)}),m.frustumCulled=!1,g.frustumCulled=!1,e.add(m,g);let y=n.world.flora.filter(L=>L.type==="cactus"),w=new gn(de.cyl,Ce(5143098),y.length||1);y.forEach((L,V)=>{h.makeScale(4.5,22,4.5).setPosition(L.x,11,L.y),w.setMatrixAt(V,h)}),w.frustumCulled=!1,e.add(w);let E=n.world.flora.filter(L=>L.type==="fern"||L.type==="shrub"),v=new gn(de.ico,Ce(5599290),E.length||1);E.forEach((L,V)=>{h.makeScale(8,6,8).setPosition(L.x,4,L.y),v.setMatrixAt(V,h)}),v.frustumCulled=!1,e.add(v);let b=n.barrels.map(L=>{let V;return L.crate?(V=new _e(de.box,Ce(9069104)),V.scale.set(L.r*1.8,L.r*1.5,L.r*1.8),V.position.set(L.x,L.r*.75,L.y)):(V=new _e(de.cyl,Ce(10768174)),V.scale.set(L.r*.9,L.r*1.7,L.r*.9),V.position.set(L.x,L.r*.85,L.y)),e.add(V),V}),R={quarryArm:null,gates:[]};for(let L of n.world.monuments)CM(n,e,L,R);SM(n,e);for(let L of n.world.crossings){let V=new ut;V.position.set(L.x,0,L.y),V.rotation.y=-L.railAng;for(let ne of[-1,1]){let fe=new _e(de.box,Ce(2500139));fe.scale.set(5,20,5),fe.position.set(0,10,ne*38),V.add(fe);let ke=new _e(de.box,Ce(12597802));ke.scale.set(40,3.6,3.6),ke.position.set(20,18,ne*38);let K=new ut;K.position.set(0,18,ne*38),ke.position.set(20,0,0),K.add(ke),V.add(K),R.gates.push({pivot:K,cr:L,side:ne})}e.add(V)}let _=new ut;e.add(_);let M=new Map,C=new Map,S=new Map,P=-1,z=new Set;function X(L){if(L==="p1")return 8308816;let V=n.teams.find(ne=>ne.owner===L);return V?parseInt(V.col.slice(1),16):8947848}function D(){if(n.nav.stamp!==P){P=n.nav.stamp,z.clear();for(let[L,V]of n.structures){z.add(L);let ne=V.mat,fe=C.get(L);if(fe&&fe.sig!==ne&&(_.remove(fe.mesh),C.delete(L),fe=null),!fe){let[ke,K]=L.split(",").map(Number),Q=new _e(de.box,Ce(Rs[V.mat]||Rs.wood));Q.scale.set(62,5,62),Q.position.set(ke*64+64/2,2.5,K*64+64/2),_.add(Q),C.set(L,{mesh:Q,sig:ne})}}for(let[L,V]of C)z.has(L)||(_.remove(V.mesh),C.delete(L));z.clear();for(let[L,V]of n.walls){if(V.hp<=0)continue;z.add(L);let ne=V.type+V.mat+(V.open?"o":"c"),fe=M.get(L);if(fe&&fe.sig!==ne&&(_.remove(fe.mesh),M.delete(L),fe=null),!fe){let ke=Rt(L,V),K=(ke[0]+ke[2])/2,Q=(ke[1]+ke[3])/2,N=ke[0]===ke[2],q=new ut,j=V.type==="door"?V.mat==="wood"?8016944:uc[V.mat]:uc[V.mat]||uc.wood;if(V.type==="door"&&V.open)for(let oe of[-26,26]){let we=new _e(de.box,Ce(Rs[V.mat]||Rs.wood));we.scale.set(N?11:12,40,N?12:11),we.position.set(N?0:oe,20,N?oe:0),q.add(we)}else{let oe=new _e(de.box,Ce(j)),we=V.type==="door"?42:48;oe.scale.set(N?11:64,we,N?64:11),oe.position.y=we/2,q.add(oe);let Ie=new _e(de.box,Ce(Rs[V.mat]||Rs.wood));if(Ie.scale.set(N?13:66,4,N?66:13),Ie.position.y=we+2,q.add(Ie),V.type==="door"){let De=new _e(de.sphere,Ce(14202462));De.scale.set(2.5,2.5,2.5),De.position.set(N?7:10,22,N?10:7),q.add(De)}}q.position.set(K,0,Q),_.add(q),M.set(L,{mesh:q,sig:ne})}}for(let[L,V]of M)z.has(L)||(_.remove(V.mesh),M.delete(L));z.clear();for(let[L,V]of n.deploys){z.add(L);let ne=V.type+(V.tier||"")+V.owner,fe=S.get(L);if(fe&&fe.sig!==ne&&(_.remove(fe.group),S.delete(L),fe=null),!fe){let[ke,K]=L.split(",").map(Number),Q=ke*64+64/2,N=K*64+64/2,q=new ut;q.position.set(Q,0,N);let j={group:q,sig:ne};if(V.type==="turret"){let oe=new _e(de.cyl6,Ce(3883320));oe.scale.set(17,10,17),oe.position.y=5,q.add(oe);let we=new _e(de.cyl,Ce(5659980));we.scale.set(11,10,11),we.position.y=16,q.add(we);let Ie=V.tier===3?6277344:V.tier===2?14721594:10133928,De=new ut;De.position.y=18;let Ge=new _e(de.box,Ce(2237994)),Ze=V.tier===3?42:V.tier===2?32:24;Ge.scale.set(Ze,5,V.tier===2?9:5),Ge.position.x=Ze/2+6,De.add(Ge);let Ye=new _e(de.box,Ce(Ie,{emissive:Ie,emissiveIntensity:.5}));Ye.scale.set(4,6,6),Ye.position.x=Ze+8,De.add(Ye),q.add(De),j.pivot=De}else if(V.type==="cupboard"){let oe=new _e(de.box,Ce(X(V.owner)));oe.scale.set(42,40,42),oe.position.y=20,q.add(oe);let we=new _e(de.box,Ce(2891532));we.scale.set(46,5,46),we.position.y=42,q.add(we);let Ie=ls(7790698,26);Ie.position.y=50,q.add(Ie),j.led=Ie}else{let oe=new _e(de.box,Ce(7031332));oe.scale.set(40,24,40),oe.position.y=12,q.add(oe)}_.add(q),S.set(L,j)}}for(let[L,V]of S)z.has(L)||(_.remove(V.group),S.delete(L))}}let k=new ut;e.add(k);let G=-1;function re(){if(n.fences.length!==G){G=n.fences.length,k.clear();for(let L of n.fences){let V=new _e(de.box,Ce(8215600));V.scale.set(46,22,5),V.position.set(L.x,11,L.y),V.rotation.y=-L.a,k.add(V)}}}return{sync(L){d-=L,d<=0&&(d=.25,u()),n.barrels.forEach((V,ne)=>{b[ne].visible=V.hp>0}),D(),re();for(let[V,ne]of S){let fe=n.deploys.get(V);if(fe&&(ne.pivot&&(ne.pivot.rotation.y=-(fe.angle||0)),ne.led&&fe.store)){let ke=fe.store.wood+fe.store.stone+fe.store.metal>0;ne.led.material.color.setHex(ke?7790698:16734780)}}if(R.quarryArm){let V=n.quarry;R.quarryArm.rotation.z=V&&V.owner?Math.sin(V.arm*2.4)*.35:-.18}for(let V of R.gates)V.pivot.rotation.z=(1-V.cr.gate)*1.35}}}function CM(n,e,t,i){let s=new ut;s.position.set(t.x,0,t.y);let r=(o,a,l,c,f,h,d,u,p=0,x)=>{let m=new _e(o,Ce(a,x));return m.scale.set(l,c,f),m.position.set(h,d,u),m.rotation.y=p,s.add(m),m};if(t.type==="gas"){r(de.box,11027246,216,8,30,0,64,-70);for(let o of[-96,-30,36,96])r(de.box,4147024,6,60,6,o,30,-62);for(let o of[-58,0])r(de.box,5989227,18,30,16,o,15,-22);r(de.box,9081241,54,52,50,58,26,-16),r(de.box,12574959,18,14,2,66,34,10),r(de.box,13279562,26,26,6,-104,40,-62)}else if(t.type==="junk"){for(let o=0;o<5;o++){let a=o/5*RM;r(de.ico,7238780,26,14,20,Math.cos(a)*70,8,Math.sin(a)*54,a)}r(de.box,8011824,56,22,26,-58,11,-40,.3),r(de.box,3824234,56,22,26,54,11,44,-.5),r(de.cyl,2302237,12,16,12,70,8,-50),r(de.cyl,2302237,12,16,12,-66,8,58)}else if(t.type==="warehouse"){r(de.box,8291470,252,70,164,0,35,0),r(de.box,5988971,264,10,176,0,74,0);for(let o of[-72,0,72])r(de.box,2764597,60,46,4,o,23,84);r(de.box,4870488,30,14,16,-38,84,0),r(de.box,4870488,30,14,16,38,84,0)}else if(t.type==="quarry"){r(de.cyl,3814438,46,8,28,-36,4,26),r(de.box,3948871,12,64,12,8,32,-46);let o=new ut;o.position.set(14,60,-44);let a=new _e(de.box,Ce(8226963));a.scale.set(86,9,9),o.add(a);let l=new _e(de.sphere,Ce(10768430));l.scale.set(9,9,9),l.position.x=-43,o.add(l),s.add(o),i.quarryArm=o,r(de.box,5061152,4,46,4,-44,23,-58),r(de.box,7236186,24,13,2,-32,40,-58)}e.add(s)}function SM(n,e){let t=n.world.shop,i=new ut;i.position.set(t.x,0,t.y);let s=new _e(de.cyl,Ce(6969398));s.scale.set(46,6,46),s.position.y=3,i.add(s);let r=new _e(de.box,Ce(10120764));r.scale.set(60,24,22),r.position.set(0,16,2),i.add(r);let o=new _e(de.cone,Ce(11751744));o.scale.set(52,26,52),o.position.y=56,i.add(o);for(let l of[-34,34]){let c=new _e(de.cyl,Ce(6177574));c.scale.set(3,44,3),c.position.set(l,22,8),i.add(c)}let a=new _e(new ho(mt-7,mt,72),new wn({color:9885695,transparent:!0,opacity:.3,side:Bn,depthWrite:!1}));a.rotation.x=-Math.PI/2,a.position.y=1.2,i.add(a),e.add(i)}var l2=Math.PI*2,cs=class{constructor(e,t){this.scene=e,this.make=t,this.map=new Map,this.seen=new Set,this.miss=new Map}get(e,...t){this.seen.add(e);let i=this.map.get(e);return i||(i=this.make(...t),this.map.set(e,i),this.scene.add(i)),i.visible=!0,i}sweep(){for(let[e,t]of this.map)if(this.seen.has(e))this.miss.delete(e);else{t.visible=!1;let i=(this.miss.get(e)||0)+1;i>300?(this.scene.remove(t),this.map.delete(e),this.miss.delete(e)):this.miss.set(e,i)}this.seen.clear()}},um={boar:{col:8282692,rx:1.28,ry:.8,rz:.95},wolf:{col:7698047,rx:1.3,ry:.78,rz:.8},bear:{col:6375471,rx:1.25,ry:.95,rz:1},polarbear:{col:14542315,rx:1.25,ry:.95,rz:1},alligator:{col:5599286,rx:1.9,ry:.45,rz:.75},snake:{col:11704890,rx:2.1,ry:.3,rz:.35},scorpion:{col:8278566,rx:1.2,ry:.4,rz:.95}};function pm(n,e){let t=new cs(e,(g,y)=>fm(g,{gunLen:y})),i=new cs(e,(g,y)=>{let w=um[g]||um.boar,E=new ut,v=new _e(de.sphere,Ce(w.col));v.scale.set(y*w.rx,y*w.ry,y*w.rz),v.position.y=y*w.ry*.9,E.add(v);let b=new _e(de.sphere,Ce(w.col));b.scale.set(y*.5,y*.45,y*.45),b.position.set(y*w.rx*.95,y*w.ry*.95,0),E.add(b);let R=gr(y*3);return R.position.y=1,E.add(R),E}),s=new cs(e,g=>{let y=new ut,w=new _e(de.sphere,Ce(g));w.scale.set(20,12,14),w.position.y=12,y.add(w);let E=new _e(de.box,Ce(2896680));E.scale.set(26,5,5),E.position.set(-22,14,0),y.add(E);let v=new _e(de.box,r());v.scale.set(52,1.5,5),v.position.y=22,y.add(v);let b=gr(60);return b.position.y=1,y.add(b),y.userData={rotor:v,sh:b},y});function r(){return Ce(1645589)}let o=new cs(e,g=>{let y=new ut,w=new _e(de.sphere,Ce(g));w.scale.set(34,17,22),w.position.y=16,y.add(w);let E=new _e(de.box,Ce(2501666));E.scale.set(40,7,7),E.position.set(-36,20,0),y.add(E);let v=new _e(de.box,r());v.scale.set(84,2,7),v.position.y=30,y.add(v);let b=gr(96);return b.position.y=1,y.add(b),y.userData={rotor:v,sh:b},y}),a=new cs(e,g=>g()),l=new cs(e,(g,y)=>ls(g,y)),c=1200,f=new qt,h=new Float32Array(c*3),d=new Float32Array(c*3);f.setAttribute("position",new Kt(h,3)),f.setAttribute("color",new Kt(d,3));let u=new Ji(f,new Ii({size:7,vertexColors:!0,transparent:!0,opacity:.9,sizeAttenuation:!0,depthWrite:!1}));u.frustumCulled=!1,e.add(u);let p=new Map;function x(g){let y=p.get(g);if(!y){y=new tt;try{if(g.startsWith("rgba")){let w=g.match(/rgba?\(([\d.]+),\s*([\d.]+),\s*([\d.]+)/);w&&y.setRGB(+w[1]/255,+w[2]/255,+w[3]/255)}else y.set(g)}catch{y.setRGB(.7,.7,.7)}p.set(g,y)}return y}function m(g,y,w,E,v,b={}){g.position.set(y,0,w),g.rotation.y=-E;let R=g.userData;R.body.material!==Ce(v)&&(R.body.material=Ce(v)),R.body.scale.y=b.crouch?16:22,b.bob&&(g.position.y=Math.abs(Math.sin(n.t*9+(b.phase||0)))*2.2)}return{sync(g,y){for(let v of n.units){if(v.dead||v.eliminated)continue;if(v.copter&&!v.copter.destroyed&&y.inView(v.copter.x,v.copter.y,200)){let M=s.get(v.copter,parseInt(v.col.slice(1),16)),C=v.flying&&v.state==="trade";M.position.set(v.copter.x,C?70:0,v.copter.y),M.rotation.y=-(v.copter.angle||0),M.userData.rotor.rotation.y=v.copter.rotor||0,M.userData.sh.position.y=C?-68:1}if(v.flying||!y.inView(v.x,v.y,200))continue;let b=parseInt((v.ally?"#7ec850":v.col).slice(1),16),R=t.get(v,b,v.gun==="rifle"?22:v.gun==="shotgun"?17:14),_=Math.hypot(v.vx,v.vy)>20;m(R,v.x,v.y,v.angle,b,{bob:_,phase:v.id})}let w=n.player;if(!w.inCopter){let v=t.get(w,8030800,20);m(v,w.x,w.y,w.angle,w.hurt>0?12876382:8030800,{bob:w.moving}),w.dead&&(v.visible=!1)}if(n.copter&&!n.copter.destroyed){let v=s.get(n.copter,6121548),b=w.inCopter;v.position.set(n.copter.x,b?80:0,n.copter.y),v.rotation.y=-(n.copter.angle||0),v.userData.rotor.rotation.y=(n.copter.rotor||0)*3,v.userData.sh.position.y=b?-78:1}for(let v of n.guards){if(v.dead||!y.inView(v.x,v.y,150))continue;let b=t.get(v,12410412,18);m(b,v.x,v.y,v.angle,12410412,{bob:!0,phase:v.seed})}for(let v of n.animals){if(v.dead||!y.inView(v.x,v.y,150))continue;let b=i.get(v,v.type,v.r);b.position.set(v.x,0,v.y);let R=v.vx||v.vy?Math.atan2(v.vy,v.vx):v.dir;b.rotation.y=-R}for(let v of n.transports){let b=v.owner===ze?8308816:parseInt((n.teams.find(M=>M.owner===v.owner)||{col:"#888888"}).col.slice(1),16),R=o.get(v,b),_=v.state==="fly"||v.state==="return"||v.riders.length>0;R.position.set(v.x,_?110:4,v.y),R.rotation.y=-v.angle,R.userData.rotor.rotation.y=v.rotor,R.userData.sh.position.y=_?-106:1}for(let v of n.trains){let b=a.get(v,()=>{let R=new ut,_=new _e(de.box,Ce(3817544));_.scale.set(48,30,26),_.position.y=15,R.add(_);for(let C of[-46,-90]){let S=new _e(de.box,Ce(5917238));S.scale.set(38,24,24),S.position.set(C,12,0),R.add(S)}let M=ls(16771491,40);return M.position.set(28,14,0),R.add(M),R});b.position.set(v.x,0,v.y),b.rotation.y=-v.ang}for(let v of n.convoys){if(v.dead)continue;let b=a.get(v,()=>{let R=new ut,_=new _e(de.box,Ce(5660746));_.scale.set(68,24,36),_.position.y=12,R.add(_);let M=new ut;M.position.y=28;let C=new _e(de.cyl,Ce(3752499));C.scale.set(12,9,12),M.add(C);let S=new _e(de.box,Ce(1250830));S.scale.set(32,5,5),S.position.x=20,M.add(S),R.add(M),R.userData={turret:M};let P=gr(90);return P.position.y=1,R.add(P),R});b.position.set(v.x,0,v.y),b.rotation.y=-v.ang,b.userData.turret.rotation.y=-(v.taim-v.ang);for(let R of v.guards){if(R.dead)continue;let _=t.get(R,7305806,17);m(_,R.x,R.y,R.angle,7305806,{bob:!0})}}if(n.patrol){let v=n.patrol,b=a.get("patrol",()=>{let R=new ut,_=new _e(de.sphere,Ce(4740158));_.scale.set(32,15,18),R.add(_);let M=new _e(de.box,Ce(3357744));M.scale.set(36,6,6),M.position.x=-34,R.add(M);let C=new _e(de.box,r());return C.scale.set(96,2,8),C.position.y=14,R.add(C),R.userData={rotor:C},R});b.position.set(v.x,150,v.y),b.rotation.y=-v.angle,b.userData.rotor.rotation.y=v.rotor}if(n.plane){let v=a.get("plane",()=>{let b=new ut,R=new _e(de.sphere,Ce(8291985));R.scale.set(28,8,8),b.add(R);let _=new _e(de.box,Ce(7041660));return _.scale.set(10,2,52),b.add(_),b});v.position.set(n.plane.x,320,n.plane.y),v.rotation.y=n.plane.vx<0?Math.PI:0}if(n.airdrop){let v=n.airdrop,b=a.get("airdrop",()=>{let _=new ut,M=new _e(de.box,Ce(6120530));M.scale.set(30,24,30),M.position.y=12,_.add(M);let C=new _e(de.box,Ce(16766827));C.scale.set(32,5,32),C.position.y=12,_.add(C);let S=new _e(de.cone,Ce(12079162,{transparent:!0,opacity:.9}));return S.scale.set(34,26,34),S.position.y=56,_.add(S),_.userData={chute:S},_}),R=v.fall<1?(1-v.fall)*320:0;b.position.set(v.x+(v.fall<1?Math.sin(v.sway)*12:0),R,v.fall<1?v.gy:v.y),b.userData.chute.visible=v.fall<1}if(n.lockedCrate){let v=n.lockedCrate,b=a.get("crate",()=>{let _=new ut,M=new _e(de.box,Ce(3948871));M.scale.set(40,26,30),M.position.y=13,_.add(M);let C=ls(16758858,22);return C.position.set(13,26,-8),_.add(C),_.userData={light:C},_});b.position.set(v.x,0,v.y);let R=v.blink%.8<.4;b.userData.light.visible=R,b.userData.light.material.color.setHex(v.started?16758858:13777960)}for(let v of n.bullets){let b=a.get(v,()=>{let R=new _e(de.box,new wn({color:16771491,transparent:!0,opacity:.95,blending:Di,depthWrite:!1}));return R.scale.set(26,2.5,2.5),R});b.position.set(v.x,16,v.y),b.rotation.y=-Math.atan2(v.vy,v.vx),b.material.color.setHex(v.col==="hmg"?16734762:v.ricochet?8837375:16771491)}for(let v of n.rockets){let b=a.get(v,()=>{let R=new ut,_=new _e(de.cone,Ce(3751983));_.scale.set(5,18,5),_.rotation.z=-Math.PI/2,R.add(_);let M=ls(16751421,34);return M.position.x=-12,R.add(M),R});b.position.set(v.x,18,v.y),b.rotation.y=-Math.atan2(v.vy,v.vx)}for(let v of n.grenades)a.get(v,()=>{let R=new _e(de.sphere,Ce(2898466));return R.scale.set(6,6,6),R}).position.set(v.x,8+Math.abs(Math.sin(v.bob*6))*8,v.y);for(let v of n.satchels){let b=a.get(v,()=>{let R=new _e(de.box,Ce(3814444));return R.scale.set(14,9,12),R.position.y=4,R});b.position.set(v.x,4,v.y),b.visible=Math.sin(n.t*18)>-.6}for(let v of n.loot){if(!y.inView(v.x,v.y,100))continue;let b=a.get(v,()=>{let _=new _e(de.box,Ce(14081248));return _.scale.set(9,9,9),_}),R={wood:12158022,stone:11186616,metal:15245902,scrap:14081248,ammo:16769162,rocket:16751194,sniper:12575743,satchel:13154442,gun:12896701};b.material=Ce(R[v.kind]||14081248),b.position.set(v.x,8+Math.sin(v.bob*3)*2.5,v.y),b.rotation.y=v.bob}for(let v of n.fires){let b=l.get(v,16747050,90);b.position.set(v.x,16,v.y);let R=.8+Math.sin(n.t*11+v.x)*.25;b.scale.set(90*R,110*R,1)}for(let v of n.wrecks)a.get(v,()=>{let R=new ut,_=new _e(de.box,Ce(2499614));_.scale.set(30,14,20),_.position.y=7,_.rotation.y=.5,R.add(_);let M=ls(16755260,60);return M.position.y=14,R.add(M),R}).position.set(v.x,0,v.y);for(let v of n.scorch){let b=a.get(v,()=>{let R=new _e(new Li(1,12),new wn({color:1314828,transparent:!0,opacity:.45,depthWrite:!1}));return R.rotation.x=-Math.PI/2,R.position.y=.8,R});b.position.set(v.x,.8,v.y),b.scale.set(v.r,v.r,1)}for(let v of n.flashes){let b=l.get(v,16757322,v.r*2.4);b.position.set(v.x,20,v.y);let R=v.life/v.max;b.material.opacity=R,b.scale.set(v.r*(2.6-R),v.r*(2.6-R),1)}if(n.muzzle){let v=l.get("muzzle",16766827,46);v.position.set(n.muzzle.x,18,n.muzzle.y),v.material.opacity=n.muzzle.t/.08}let E=0;for(let v of n.particles){if(E>=c)break;h[E*3]=v.x,h[E*3+1]=10+(1-v.life/v.max)*14,h[E*3+2]=v.y;let b=x(v.col),R=Math.max(0,v.life/v.max);d[E*3]=b.r*R,d[E*3+1]=b.g*R,d[E*3+2]=b.b*R,E++}f.setDrawRange(0,E),f.attributes.position.needsUpdate=!0,f.attributes.color.needsUpdate=!0,t.sweep(),i.sweep(),s.sweep(),o.sweep(),a.sweep(),l.sweep()}}}function mm(n,e){let i=new qt,s=new Float32Array(700*3),r=[];for(let m=0;m<700;m++)r.push({x:Math.random(),z:Math.random(),y:Math.random(),sp:.4+Math.random()*.8});i.setAttribute("position",new Kt(s,3));let o=new Ii({color:12374764,size:5,transparent:!0,opacity:0,depthWrite:!1}),a=new Ji(i,o);a.frustumCulled=!1,e.add(a);let l=[],c=()=>{if(!(l.length||!n.clouds))for(let m of n.clouds){let g=new Si({map:dc(),color:16054524,transparent:!0,opacity:.5*m.op,depthWrite:!1}),y=new Ki(g);y.scale.set(m.r*2.4,m.r*1.5,1),e.add(y);let w=new _e(new Li(m.r*1.1,12),new wn({map:xf(),transparent:!0,opacity:.55*m.op,depthWrite:!1}));w.rotation.x=-Math.PI/2,e.add(w),l.push({cl:m,s:y,sh:w})}},f=[],h=()=>{if(!(f.length||!n.fogBanks))for(let m of n.fogBanks){let g=new Si({map:dc(),color:14081766,transparent:!0,opacity:0,depthWrite:!1}),y=new Ki(g);y.scale.set(m.r*3,m.r*1.6,1),e.add(y),f.push({f:m,s:y})}},d=new qt,u=new Float32Array(120);d.setAttribute("position",new Kt(u,3));let p=new Ii({color:14221190,size:9,transparent:!0,opacity:.9,blending:Di,depthWrite:!1,sizeAttenuation:!0}),x=new Ji(d,p);return x.frustumCulled=!1,e.add(x),{sync(m,g){c(),h();let y=n.weather,w=(g.cx+n.world.biomeRidge(g.cy))/he.w,E=.085,v=gi((w-(2/3-E))/(2*E)),b=gi((w-(1/3-E))/(2*E))*(1-v),R=y.rain*(b+v);if(o.opacity=Math.min(.75,R*.8),o.color.setHex(v>b?16054524:12374764),o.size=v>b?7:4.5,R>.02){let C=v>b?.12:.55;for(let S=0;S<700;S++){let P=r[S],z=(P.y+n.t*P.sp*C)%1;s[S*3]=g.cx+(P.x-.5)*2*1700+n.wind*60*z,s[S*3+1]=700*(1-z),s[S*3+2]=g.cy+(P.z-.5)*2*1700}i.attributes.position.needsUpdate=!0}for(let{cl:M,s:C,sh:S}of l)C.position.set(M.x,620,M.y),S.position.set(M.x+64,2.5,M.y+86);for(let{f:M,s:C}of f){let S=n.world.biomeAt(M.x,M.y)==="winter";C.material.opacity=S?0:Math.min(.5,y.fog*M.dens*.5),C.position.set(M.x,26,M.y)}let _=0;if(n.fireflies){let M=1-g.lightLevel();p.opacity=.35+.5*M+.3*Math.min(1,y.fog);for(let C of n.fireflies){if(_>=40)break;n.world.biomeAt(C.x,C.y)==="jungle"&&(u[_*3]=C.x,u[_*3+1]=16+Math.sin(C.ph)*8,u[_*3+2]=C.y,_++)}d.attributes.position.needsUpdate=!0}d.setDrawRange(0,_)}}}function gm(n,e,t){let i=document.createElement("canvas");i.id="overlay",i.style.cssText="position:fixed;inset:0;pointer-events:none;z-index:5",document.body.appendChild(i);let s=i.getContext("2d");function r(){i.width=e.VW,i.height=e.VH}r(),addEventListener("resize",r);let o=(f,h,d=0)=>t.worldToScreen(f,h,d);function a(f,h,d,u,p){s.strokeStyle=u,s.lineWidth=2,p&&s.setLineDash(p),s.beginPath();for(let x=0;x<=36;x++){let m=x/36*Math.PI*2,g=o(f+Math.cos(m)*d,h+Math.sin(m)*d);x?s.lineTo(g.x,g.y):s.moveTo(g.x,g.y)}s.stroke(),s.setLineDash([])}return{draw(){let f=e.VW,h=e.VH;s.clearRect(0,0,f,h);let d=n.t;s.font="bold 13px Trebuchet MS",s.textAlign="center";for(let u of n.floats){let p=o(u.ox,u.y,40);if(p.behind)continue;let x=Math.max(0,u.life/u.max);s.globalAlpha=x,s.fillStyle="#000",s.fillText(u.text,p.x+1,p.y-u.lift+1),s.fillStyle=u.col,s.fillText(u.text,p.x,p.y-u.lift)}if(s.globalAlpha=1,n.buildMode&&!e.godView){let m=function(){for(let g in x.cost)if((n.inv[g]||0)<x.cost[g])return!1;return!0},u=Lr(n,n.cmd.mx,n.cmd.my),p=Rc(n,ze,n.buildPiece,u)&&m();s.fillStyle=p?"rgba(180,220,120,.4)":"rgba(210,80,60,.45)",s.strokeStyle=p?"#c4d66a":"#d2553c",s.lineWidth=2;let x=Xt[n.buildPiece];if(x.cat==="cell"){let g=u.gx*64,y=u.gy*64;s.beginPath(),[[0,0],[64,0],[64,64],[0,64]].forEach(([w,E],v)=>{let b=o(g+w,y+E);v?s.lineTo(b.x,b.y):s.moveTo(b.x,b.y)}),s.closePath(),s.fill(),s.stroke()}else{let g=Rt(u.key,{type:n.buildPiece,rot:n.buildRot&1}),y=o(g[0],g[1]),w=o(g[2],g[3]);s.lineWidth=8,s.globalAlpha=.75,s.beginPath(),s.moveTo(y.x,y.y),s.lineTo(w.x,w.y),s.stroke(),s.globalAlpha=1}}if(!e.godView&&!n.player.inCopter){for(let[u,p]of n.deploys){if(p.type!=="cupboard"||p.owner!==ze)continue;let[x,m]=u.split(",").map(Number);a(x*64+32,m*64+32,Dt,"rgba(126,200,80,0.3)",[10,8])}if(!n.shopOpen&&!n.storeOpen){let u=Math.floor(n.cmd.mx/64),p=Math.floor(n.cmd.my/64),x=n.deploys.get(u+","+p);x&&x.type==="turret"&&a(u*64+32,p*64+32,Fo[x.tier||1].range,"rgba(240,156,72,0.3)",[6,7]);let m=l(u,p);if(m){let g=o(m.x,m.y,50),y=Math.max(0,m.hp/m.max);s.fillStyle="rgba(0,0,0,.7)",s.fillRect(g.x-18,g.y-8,36,5),s.fillStyle=y>.5?"#7bbf4f":y>.25?"#d8b24a":"#c0432f",s.fillRect(g.x-18,g.y-8,36*y,5)}}}if(e.debugPaths){s.font="bold 10px Trebuchet MS";for(let u of n.units){if(u.dead||u.eliminated||u.flying||!t.inView(u.x,u.y,600))continue;let p=u.ally?"#7ec850":u.col;if(u.path&&u.pathI<u.path.length){s.strokeStyle=p,s.lineWidth=1.5,s.globalAlpha=.8,s.beginPath();let m=o(u.x,u.y);s.moveTo(m.x,m.y);for(let g=u.pathI;g<u.path.length;g++)m=o(u.path[g].x,u.path[g].y),s.lineTo(m.x,m.y);s.stroke(),s.globalAlpha=1}let x=o(u.x,u.y,56);s.fillStyle="#000",s.fillText(u.act||u.state,x.x+1,x.y+1),s.fillStyle=p,s.fillText(u.act||u.state,x.x,x.y)}}if(c(n.airdrop&&{x:n.airdrop.x,y:n.airdrop.fall<1?n.airdrop.gy:n.airdrop.y},"AIRDROP","#ffd76b","\u2708"),n.quarry){let u=n.teams.find(p=>p.owner===n.quarry.owner);c(n.quarry,"QUARRY",n.quarry.owner===ze?"#7ec850":u?u.col:"#b9b39d","Q")}if(n.lockedCrate){let u=n.lockedCrate;c(u,u.started?"CRATE "+Math.ceil(u.t)+"s":"LOCKED CRATE","#ffb84a","C")}if(e.godView){s.font="bold 9px Trebuchet MS";for(let p of n.teams)for(let x of p.bases){if(x.dead)continue;let m=o(x.hx,x.hy);s.fillStyle=p.col,s.fillRect(m.x-6,m.y-6,12,12),s.fillStyle="#fff",s.fillText(String(p.id+1),m.x,m.y+3.5)}for(let p of n.units){if(p.dead||p.eliminated)continue;let x=o(p.x,p.y);s.fillStyle=p.ally?"#7ec850":p.col,s.beginPath(),s.arc(x.x,x.y,p.primary?3.4:2.4,0,7),s.fill()}for(let p of n.raids){let x=o(p.x,p.y);s.fillStyle=`rgba(255,82,56,${.35+.4*(p.t/60)})`,s.beginPath(),s.arc(x.x,x.y,7+3*Math.sin(d*6),0,7),s.fill()}if(n.deathMark){let p=o(n.deathMark.x,n.deathMark.y);s.fillStyle="#000",s.beginPath(),s.arc(p.x,p.y,8,0,7),s.fill(),s.fillStyle="#fff",s.beginPath(),s.arc(p.x,p.y-1,5,0,7),s.fill()}let u=o(n.player.x,n.player.y);s.strokeStyle="#7ec850",s.lineWidth=2.5,s.beginPath(),s.arc(u.x,u.y,11+3*Math.sin(d*6),0,7),s.stroke(),s.font="bold 11px Trebuchet MS",s.fillStyle="#7ec850",s.fillText("YOU",u.x,u.y-18),s.fillStyle="#d8d0ba",s.font="bold 14px Trebuchet MS",s.fillText("Click anywhere on the map to travel there",f/2,h-66)}else{let u=e.mouseSX,p=e.mouseSY;if(u!==void 0){s.strokeStyle="rgba(225,235,195,.9)",s.lineWidth=3,s.lineCap="round";for(let[x,m]of[[1,0],[-1,0],[0,1],[0,-1]])s.beginPath(),s.moveTo(u+x*6,p+m*6),s.lineTo(u+x*15,p+m*15),s.stroke()}}if(n.raidAlarm){let u=Math.min(1,n.raidAlarm.t/1.5);s.fillStyle=`rgba(180,30,20,${.14*u})`,s.fillRect(0,0,f,h),s.textAlign="center",s.font="bold 22px Trebuchet MS",s.fillStyle="rgba(0,0,0,.7)",s.fillText("BASE UNDER ATTACK",f/2+2,54),s.fillStyle=`rgba(255,${80+110*(.5+.5*Math.sin(d*8))},55,${u})`,s.fillText("BASE UNDER ATTACK",f/2,52)}n.player.hurt>0&&(s.fillStyle=`rgba(150,28,18,${n.player.hurt*.4})`,s.fillRect(0,0,f,h)),n.player.dead&&(s.fillStyle="rgba(10,6,4,.55)",s.fillRect(0,0,f,h),s.textAlign="center",s.fillStyle="#e6d9b8",s.font="bold 44px Trebuchet MS",s.fillText("YOU DIED",f/2,h/2-4),s.fillStyle="#b9a06f",s.font="15px Trebuchet MS",s.fillText("respawning\u2026",f/2,h/2+24)),s.textAlign="left",s.font="bold 14px Trebuchet MS",n.elims.forEach((u,p)=>{let x=Math.min(1,u.t/3);s.globalAlpha=x,s.fillStyle="rgba(0,0,0,.5)",s.fillRect(f/2-130,92+p*24,264,20),s.fillStyle="#e2664a",s.fillText(u.text,f/2-122,106+p*24)}),s.globalAlpha=1,s.textAlign="center"}};function l(f,h){let d=n.deploys.get(f+","+h);if(d)return{x:f*64+32,y:h*64+32,hp:d.hp,max:d.max};let u=n.structures.get(f+","+h);if(u)return{x:f*64+32,y:h*64+32,hp:u.hp,max:u.max};for(let p of["V,"+f+","+h,"V,"+(f+1)+","+h,"H,"+f+","+h,"H,"+f+","+(h+1)]){let x=n.walls.get(p);if(!x)continue;let m=Rt(p,x),g=(m[0]+m[2])/2,y=(m[1]+m[3])/2;if(Math.hypot(n.cmd.mx-g,n.cmd.my-y)<16)return{x:g,y,hp:x.hp,max:x.max}}return null}function c(f,h,d,u){if(!f)return;let p=o(f.x,f.y),x=e.VW,m=e.VH;if(s.textAlign="center",!p.behind&&p.x>0&&p.x<x&&p.y>0&&p.y<m){if(e.godView)return;s.font="bold 11px Trebuchet MS",s.fillStyle="rgba(0,0,0,.7)",s.fillText(h,p.x+1,p.y-49),s.fillStyle=d,s.fillText(h,p.x,p.y-50)}else{let g=Math.max(54,Math.min(x-54,p.x)),y=Math.max(54,Math.min(m-54,p.behind?m-54:p.y));s.fillStyle=d,s.globalAlpha=.92,s.beginPath(),s.arc(g,y,14,0,7),s.fill(),s.globalAlpha=1,s.fillStyle="#1c1812",s.font="bold 13px Trebuchet MS",s.fillText(u,g,y+4.5)}}}function ym(n,e,t,i){let s={},r=e.canvas,o=(l,c)=>{let f=t.screenToWorld(l,c);n.cmd.mx=f.x,n.cmd.my=f.y,e.mouseSX=l,e.mouseSY=c};addEventListener("keydown",l=>{let c=l.key.toLowerCase();if(n.storeOpen){(c==="escape"||c==="e")&&(n.storeOpen=null,i.closeModals()),l.preventDefault();return}if(n.shopOpen){(c==="escape"||c==="e")&&(n.shopOpen=!1,i.closeModals()),l.preventDefault();return}s[c]=!0,a(),c==="e"&&Ud(n),c==="g"&&!n.player.inCopter&&zd(n),c==="q"&&(n.buildMode?xm(n,1):n.player.inCopter||Bd(n)),c==="t"&&!n.buildMode&&!n.player.inCopter&&kc(n,n.cmd.mx,n.cmd.my),/^Digit[1-9]$|^Numpad[1-9]$/.test(l.code)&&!n.player.inCopter&&Pr(n,+l.code.slice(-1)-1),c==="b"&&!n.player.inCopter&&Pr(n,n.buildMode?0:5),c==="r"&&(n.buildMode?n.buildRot=(n.buildRot+1)%4:Bc(n)),c==="u"&&Od(n),["w","a","s","d"," "].includes(c)&&l.preventDefault()}),addEventListener("keyup",l=>{s[l.key.toLowerCase()]=!1,a()}),addEventListener("blur",()=>{for(let l in s)s[l]=!1;a(),n.cmd.fireHeld=!1});function a(){n.cmd.up=!!s.w,n.cmd.down=!!s.s,n.cmd.left=!!s.a,n.cmd.right=!!s.d,n.cmd.run=!!s.shift}addEventListener("wheel",l=>{n.buildMode&&!n.shopOpen&&!n.storeOpen&&(xm(n,l.deltaY>0?1:-1),l.preventDefault())},{passive:!1}),r.addEventListener("mousemove",l=>{let c=r.getBoundingClientRect();o(l.clientX-c.left,l.clientY-c.top)}),r.addEventListener("mousedown",l=>{let c=r.getBoundingClientRect();if(o(l.clientX-c.left,l.clientY-c.top),l.button===0){if(e.godView){IM(n,e);return}if(n.cmd.fireHeld=!0,n.buildMode)Fd(n);else if(!n.shopOpen&&!n.storeOpen){let f=n.slot;Jo(n)}}else l.button===2&&n.buildMode&&kd(n)}),addEventListener("mouseup",()=>{n.cmd.fireHeld=!1}),r.addEventListener("contextmenu",l=>l.preventDefault()),setInterval(()=>{e.mouseSX!==void 0&&o(e.mouseSX,e.mouseSY)},50)}function xm(n,e){let t=fs.indexOf(n.buildPiece);n.buildPiece=fs[(t+e+fs.length)%fs.length]}function IM(n,e){let t=n.cmd.mx,i=n.cmd.my;t=et(t,Wt,13824-Wt),i=et(i,Wt,9216-Wt);for(let s=0;s<24&&yt(n,t,i,Wt);s++)t+=(Math.random()*2-1)*40,i+=(Math.random()*2-1)*40;n.player.x=t,n.player.y=i,n.player.inCopter=!1,e.godView=!1,document.getElementById("mapbtn").classList.remove("on"),document.getElementById("mapbtn").textContent="Map View",n.tip={text:"arrived",t:1.2}}var PM={tool:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 20l7-7"/><path d="M14 4l6 6-5 5-6-6z" fill="currentColor"/></svg>',pistol:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 8h16v4h-6l-1 5h-4l1-5H6a3 3 0 0 1-3-3z"/></svg>',rifle:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M1 11h18l4-2v3l-4 1h-5l-1 5h-3l1-5H1z"/></svg>',minigun:'<svg viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="7" width="14" height="3"/><rect x="2" y="11" width="14" height="3"/><rect x="2" y="15" width="14" height="3"/><rect x="15" y="6" width="6" height="13" rx="2"/></svg>',rocket:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M2 10h13l5 2-5 2H2z"/><path d="M20 8l3 4-3 4z"/></svg>',build:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21l4-12 6 6-10 6z" fill="currentColor"/><path d="M13 5l6 6"/></svg>',sniper:'<svg viewBox="0 0 24 24" fill="currentColor"><rect x="1" y="10" width="20" height="3"/><rect x="6" y="6" width="6" height="3" rx="1"/><path d="M21 9l2 2-2 2z"/></svg>',shotgun:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M1 10h17v5H8l-2 4H3l2-4H1z"/></svg>',hmg:'<svg viewBox="0 0 24 24" fill="currentColor"><rect x="1" y="9" width="19" height="5"/><rect x="6" y="14" width="6" height="6"/><path d="M20 9l3 2.5-3 2.5z"/></svg>'},LM=[["Tool","tool"],["Pistol","pistol"],["Rifle","rifle"],["Minigun","minigun"],["Rocket","rocket"],["Build","build"],["Sniper","sniper"],["Shotgun","shotgun"],["HMG","hmg"]],DM={1:"pistol",2:"rifle",3:"minigun",4:"rocket",6:"sniper",7:"shotgun",8:"hmg"},NM={floor:'<svg viewBox="0 0 24 24" fill="currentColor"><rect x="4" y="4" width="16" height="16" rx="2"/></svg>',wall:'<svg viewBox="0 0 24 24" fill="currentColor"><rect x="10" y="3" width="4" height="18" rx="1"/></svg>',door:'<svg viewBox="0 0 24 24" fill="currentColor"><rect x="9" y="3" width="6" height="18" rx="1"/><circle cx="13" cy="12" r="1.4" fill="#15130e"/></svg>',turret:'<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="13" r="6"/><rect x="12" y="11" width="10" height="4" rx="1"/></svg>',cupboard:'<svg viewBox="0 0 24 24" fill="currentColor"><rect x="5" y="3" width="14" height="18" rx="2"/><rect x="11.4" y="5" width="1.2" height="14" fill="#15130e"/></svg>'};function _m(n,e){let t=p=>document.getElementById(p),i=t("hotbar");LM.forEach(([p,x],m)=>{let g=document.createElement("div");g.className="slot",g.innerHTML=`<span class="key">${m+1}</span>${PM[x]}<span class="nm">${p}</span>`,g.addEventListener("mousedown",y=>{y.stopPropagation(),Pr(n,m)}),i.appendChild(g)});let s=t("bpieces");for(let p of fs){let x=document.createElement("div");x.className="bpiece",x.dataset.piece=p;let m=Object.entries(Xt[p].cost).map(([g,y])=>y+" "+g).join(" + ");x.innerHTML=`${NM[p]}${Xt[p].name}<br><span style="opacity:.7">${m}</span>`,x.addEventListener("mousedown",g=>{g.stopPropagation(),n.buildPiece=p}),s.appendChild(x)}let r=(p,x)=>t(p).addEventListener("mousedown",m=>{m.stopPropagation(),x(t(p))});r("mapbtn",p=>{e.godView=!e.godView,p.classList.toggle("on",e.godView),p.textContent=e.godView?"Exit Map":"Map View"}),r("ghostbtn",p=>{n.ghost=!n.ghost,p.classList.toggle("on",n.ghost),p.textContent=n.ghost?"Ghost: ON":"Ghost"}),r("rocketbtn",p=>{n.rapidRockets=!n.rapidRockets,p.classList.toggle("on",n.rapidRockets),p.textContent=n.rapidRockets?"Rockets: ON":"Rapid Rockets"}),r("refillbtn",()=>window.__refillAll()),r("boosthardbtn",()=>window.__boostHard()),r("debugbtn",p=>{e.debugPaths=!e.debugPaths,p.classList.toggle("on",e.debugPaths),p.textContent=e.debugPaths?"Debug: ON":"Debug paths"}),t("ghostbtn").classList.add("on"),t("ghostbtn").textContent="Ghost: ON",t("helpToggle").addEventListener("click",()=>{let p=t("help");p.classList.toggle("min"),t("helpToggle").textContent=p.classList.contains("min")?"show":"hide"}),document.querySelectorAll(".spdbtn").forEach(p=>{p.addEventListener("mousedown",x=>{x.stopPropagation(),e.speed=+p.dataset.spd,document.querySelectorAll(".spdbtn").forEach(m=>m.classList.toggle("on",m===p))})});let o=0,a=null,l=!1;function c(){let p=t("shop"),x='<h3>Trade Shop</h3><div style="margin-bottom:8px">Scrap: <b id="shop-scrap">0</b></div><div class="cols"><div class="col"><h5>SELL \u2192 SCRAP</h5>';Ft.trades.forEach(([m,g,y],w)=>{x+=`<div class="trow"><span>${g} ${m} \u2192 ${y} scrap</span><button data-trade="${w}">Sell</button></div>`}),x+='</div><div class="col"><h5>BUY WEAPONS + GEAR</h5>';for(let m in Ft.buys)x+=`<div class="trow"><span id="shopown-${m}">${en[m].name} <small>+${Ft.buys[m].ammo} ammo</small></span><button data-buy="${m}">${Ft.buys[m].cost} scrap</button></div>`;x+=`<div class="trow"><span>Jackhammer <small>3\xD7 gather</small></span><button data-misc="jackhammer">${Ft.jackhammer} scrap</button></div>`,x+=`<div class="trow"><span>Rifle laser sight</span><button data-misc="laser">${Ft.laser} scrap</button></div>`,x+=`<div class="trow"><span>Wood fence (G)</span><button data-misc="fence">${Ft.fenceWood} wood</button></div>`,x+=`<div class="trow"><span>Grenade (Q)</span><button data-misc="grenade">${Ft.grenade} scrap</button></div>`,x+=`<div class="trow"><span>Supply signal (T)</span><button data-misc="signal">${Ft.signal} scrap</button></div>`,x+=`<div class="trow"><span>+10 HQM</span><button data-misc="hqm">${Ft.hqm.cost} scrap</button></div>`,x+='<div class="trow"><span id="fm-lbl">Facemask</span><button data-misc="facemask">buy</button></div>',x+='<div class="trow"><span id="ba-lbl">Body armor</span><button data-misc="bodyArmor">buy</button></div>',x+=`<div class="trow"><span>Hire worker</span><button data-misc="worker">${Ft.worker} scrap</button></div>`,x+='</div></div><button class="close">Close (E / Esc)</button>',p.innerHTML=x,p.querySelectorAll("button").forEach(m=>{m.addEventListener("mousedown",g=>g.stopPropagation()),m.addEventListener("click",()=>{m.dataset.trade!==void 0?Hd(n,+m.dataset.trade):m.dataset.buy?Vd(n,m.dataset.buy):m.dataset.misc?Gd(n,m.dataset.misc):(n.shopOpen=!1,p.classList.add("hidden")),f()})}),f()}function f(){let p=t("shop-scrap");p&&(p.textContent=n.inv.scrap|0);let x=t("fm-lbl");if(x){let g=n.player.facemask+1;x.textContent=g<=3?`Facemask L${g} (${ds.cost[g]} scrap)`:"Facemask MAX"}let m=t("ba-lbl");if(m){let g=n.player.bodyArmor+1;m.textContent=g<=3?`Body armor L${g} (${ds.cost[g]} scrap)`:"Body armor MAX"}for(let g in Ft.buys){let y=t("shopown-"+g);y&&(y.style.color=n.owned[g]?"var(--accent2)":"var(--ink)")}}function h(p){let x=t("store"),m=n.deploys.get(p);if(!m)return;let g=`<h3>${m.type==="cupboard"?"Tool Cupboard":"Storage"}</h3>`;for(let y of["wood","stone","metal","scrap"])g+=`<div class="strow"><span class="ic ${y}"></span>
        <button data-mv="${y},-9999">\u25C0 all</button><button data-mv="${y},-0.1">\u25C0 10%</button>
        <span class="cnt"><b id="st-${y}">0</b> store \xB7 bag <b id="inv-${y}">0</b></span>
        <button data-mv="${y},0.1">10% \u25B6</button><button data-mv="${y},9999">all \u25B6</button>
        <span></span></div>`;g+='<button class="close">Close (E / Esc)</button>',x.innerHTML=g,x.querySelectorAll("button").forEach(y=>{y.addEventListener("mousedown",w=>w.stopPropagation()),y.addEventListener("click",()=>{if(y.dataset.mv){let[w,E]=y.dataset.mv.split(",");Wd(n,w,+E),d()}else n.storeOpen=null,x.classList.add("hidden")})}),d()}function d(){let p=n.deploys.get(n.storeOpen);if(!(!p||!p.store))for(let x of["wood","stone","metal","scrap"]){let m=t("st-"+x),g=t("inv-"+x);m&&(m.textContent=p.store[x]|0),g&&(g.textContent=n.inv[x]|0)}}return{closeModals(){t("store").classList.add("hidden"),t("shop").classList.add("hidden")},update(){t("r-wood").textContent=n.inv.wood|0,t("r-stone").textContent=n.inv.stone|0,t("r-metal").textContent=n.inv.metal|0,t("r-scrap").textContent=n.inv.scrap|0;let p=Math.floor(n.t/60),x=Math.floor(n.t%60);t("playtime").textContent=p+":"+String(x).padStart(2,"0");let m=n.player,g=Math.max(0,m.health/m.maxhp),y=t("hpfill");y.style.width=g*100+"%",y.style.background=g>.5?"linear-gradient(180deg,#9ccb5a,#6fae3e)":g>.25?"linear-gradient(180deg,#e0c14e,#c9962f)":"linear-gradient(180deg,#d76a4a,#b23b2a)",t("hptxt").textContent=Math.ceil(Math.max(0,m.health));let w=i.children;for(let b=0;b<w.length;b++){w[b].classList.toggle("sel",n.slot===b);let R=DM[b];w[b].classList.toggle("dim",!!R&&!n.owned[R])}if(t("buildmenu").classList.toggle("hidden",!n.buildMode),n.buildMode)for(let b of s.children){b.classList.toggle("sel",b.dataset.piece===n.buildPiece);let R=!0;for(let _ in Xt[b.dataset.piece].cost)(n.inv[_]||0)<Xt[b.dataset.piece].cost[_]&&(R=!1);b.classList.toggle("cant",!R)}let E=Ir(n);if(t("ammo").classList.toggle("hidden",!E),E){let b=n.weapons[E];t("ammo-mag").innerHTML=`${b.ammo} <small>/ ${b.reserve}</small>`;let R=E==="minigun"&&b.spin>0&&b.spin<en.minigun.windup;t("ammo-rl").textContent=b.reloading>0?"RELOADING":R?"SPINNING\u2026":b.ammo===0?"PRESS R":""}let v=t("tip");n.tip?(v.textContent=n.tip.text,v.classList.add("show")):v.classList.remove("show"),n.shopOpen!==l?(l=n.shopOpen,t("shop").classList.toggle("hidden",!n.shopOpen),n.shopOpen&&c()):n.shopOpen&&n.tick%30===0&&f(),n.storeOpen!==a?(a=n.storeOpen,t("store").classList.toggle("hidden",!n.storeOpen),n.storeOpen&&h(n.storeOpen)):n.storeOpen&&n.tick%30===0&&d(),n.t-o>.4&&(o=n.t,u())}};function u(){let p=[];p.push({id:ze,name:"You",col:"#c4d66a",alive:!n.player.dead,you:!0,kills:n.playerKills,scrap:n.inv.scrap|0,res:n.inv.wood+n.inv.stone+n.inv.metal|0,tier:""});for(let y of n.teams){let w=0,E=0,v=0,b=!1;for(let _ of n.units)_.owner===y.owner&&(w+=_.kills,E+=_.scrap,v+=_.inv.wood+_.inv.stone+_.inv.metal,_.eliminated||(b=!0));let R=y.bases.find(_=>!_.dead);if(R){let _=n.deploys.get(R.tcKey);_&&_.store&&(v+=_.store.wood+_.store.stone+_.store.metal,E+=_.store.scrap)}p.push({id:y.id,name:"Base "+(y.id+1),col:y.col,alive:b&&!y.eliminated,kills:w,scrap:E|0,res:v|0,tier:y.hard?"HARD":y.weak?"EASY":""})}let x=null,m=0;for(let y of p)!y.you&&y.alive&&y.kills>m&&(m=y.kills,x=y.id);p.sort((y,w)=>w.scrap-y.scrap||w.kills-y.kills||w.res-y.res);let g=y=>y>=1e4?(y/1e3|0)+"k":y>=1e3?(y/1e3).toFixed(1)+"k":y;t("lb-rows").innerHTML=p.map(y=>`
      <div class="lbr ${y.alive?"":"dead"} ${y.id===x?"lb-bounty":""}">
        <span class="dot" style="background:${y.col}"></span>
        <span class="nm">${y.id===x?"\u2605 ":""}${y.name}</span>
        ${y.tier?`<span class="pill ${y.tier.toLowerCase()}">${y.tier}</span>`:""}
        <span>${y.kills}</span><span style="color:var(--ink-dim)">${g(y.scrap)}</span><span style="color:var(--ink-dim)">${g(y.res)}</span>
      </div>`).join("")}}var vm=Math.random()*1e9>>>0,Ut=wc(vm);Ut.ghost=!0;function UM(){let e={canvas:document.getElementById("game"),VW:innerWidth,VH:innerHeight,speed:1,godView:!1,debugPaths:!1},t=lm(Ut,e);hm(Ut,t.scene);let i=dm(Ut,t.scene),s=pm(Ut,t.scene),r=mm(Ut,t.scene),o=gm(Ut,e,t),a=_m(Ut,e);ym(Ut,e,t,a),addEventListener("resize",()=>{e.VW=innerWidth,e.VH=innerHeight,t.resize()});let l=document.getElementById("seedval");l&&(l.textContent=String(vm)),window.__refillAll=()=>{for(let d in Ut.owned)Ut.owned[d]=!0;for(let d in Ut.weapons){let u=Ut.weapons[d];u.reserve=Math.max(u.reserve,d==="rocket"?80:d==="sniper"?60:d==="shotgun"?80:600),u.ammo=en[d].magSize,u.reloading=0}for(let d of["wood","stone","metal"])Ut.inv[d]=Math.max(Ut.inv[d],1e4);Ut.inv.scrap=Math.max(Ut.inv.scrap,500),Ut.inv.fence=Math.max(Ut.inv.fence,10),Ut.tip={text:"Refilled ammo + resources",t:1.4}},window.__boostHard=()=>{let d=0;for(let u of Ut.units)!u.hard||u.dead||u.eliminated||(d++,u.hp=u.max,u.rockets=Math.max(u.rockets,12),u.satchels=Math.max(u.satchels,6),u.grenades=Math.max(u.grenades,4),u.hqm=Math.max(u.hqm,80),u.gun=u.shotgun?"shotgun":"rifle",u.facemask=Math.max(u.facemask,2),u.bodyArmor=Math.max(u.bodyArmor,3),u.jack=!0);for(let u of Ut.teams){if(!u.hard||u.eliminated)continue;let p=u.bases.find(x=>!x.dead);if(p){let x=Ut.deploys.get(p.tcKey);x&&x.store&&(x.store.wood=Math.max(x.store.wood,3e3),x.store.stone=Math.max(x.store.stone,1500),x.store.metal=Math.max(x.store.metal,1500),x.store.scrap=Math.max(x.store.scrap,600))}}Ut.tip={text:"Boosted "+d+" hard units",t:1.4}};let c=performance.now(),f=0;function h(d){requestAnimationFrame(h);let u=Math.min(.1,(d-c)/1e3);c=d,f+=u*e.speed;let p=0,x=Math.max(4,e.speed*4);for(;f>=xr&&p<x;)yu(Ut),f-=xr,p++;p>=x&&(f=0),t.update(u),i.sync(u),s.sync(u,t),r.sync(u,t),t.render(),o.draw(),a.update(),Ut.events.length=0}requestAnimationFrame(h)}try{UM()}catch(n){console.error("SCRAPLAND boot failed: WebGL unavailable \u2014",n&&n.message);let e=document.createElement("div");e.style.cssText="position:fixed;inset:0;display:flex;align-items:center;justify-content:center;color:#ddd5c2;font:16px Trebuchet MS;background:#14120e;z-index:99",e.textContent="SCRAPLAND needs WebGL \u2014 please enable hardware acceleration and reload.",document.body&&document.body.appendChild(e)}})();
