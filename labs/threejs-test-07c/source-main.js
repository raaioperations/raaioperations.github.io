import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const $=id=>document.getElementById(id);
const boot=$('boot'), errorBox=$('error'), fpsEl=$('fps'), callsEl=$('calls'), trisEl=$('tris'), charEl=$('char'), scaleEl=$('scale'), zoneEl=$('zone');
addEventListener('error',e=>{errorBox.style.display='block';errorBox.textContent='Runtime error:\n'+e.message;});
addEventListener('unhandledrejection',e=>{errorBox.style.display='block';errorBox.textContent='Load/runtime error:\n'+(e.reason?.message||e.reason||'Unknown rejection');});
const COARSE=matchMedia('(pointer:coarse)').matches;

let seed=0x6d2b79f5;
function rnd(){seed=(seed*1664525+1013904223)>>>0;return seed/4294967296;}
function hash2(x,z){const s=Math.sin(x*127.1+z*311.7)*43758.5453123;return s-Math.floor(s);}
function makeNoiseTexture(size=96){const data=new Uint8Array(size*size*4);for(let y=0;y<size;y++)for(let x=0;x<size;x++){const i=(y*size+x)*4;const n=Math.floor(255*(.36+.64*hash2(x*.31,y*.37)));data[i]=data[i+1]=data[i+2]=n;data[i+3]=255;}const t=new THREE.DataTexture(data,size,size,THREE.RGBAFormat);t.wrapS=t.wrapT=THREE.RepeatWrapping;t.colorSpace=THREE.NoColorSpace;t.needsUpdate=true;return t;}
const microNoise=makeNoiseTexture();microNoise.repeat.set(26,26);
const pathNoise=makeNoiseTexture(64);pathNoise.repeat.set(18,36);

const scene=new THREE.Scene();scene.fog=new THREE.FogExp2(0xb7cbd0,.0057);
const camera=new THREE.PerspectiveCamera(53,innerWidth/innerHeight,.1,800);camera.position.set(0,6,10);
const renderer=new THREE.WebGLRenderer({antialias:true,powerPreference:'high-performance'});
let renderScale=Math.min(devicePixelRatio,COARSE?1.32:1.8), minScale=COARSE?1.0:1.25, maxScale=Math.min(devicePixelRatio,COARSE?1.42:1.9);
renderer.setPixelRatio(renderScale);renderer.setSize(innerWidth,innerHeight);renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.05;renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;document.body.prepend(renderer.domElement);
scaleEl.textContent=renderScale.toFixed(2)+'×';

const hemi=new THREE.HemisphereLight(0xd9efff,0x4d5945,1.85);scene.add(hemi);
const fill=new THREE.AmbientLight(0x91a8b4,.18);scene.add(fill);
const sun=new THREE.DirectionalLight(0xffefd0,3.35);sun.position.set(-46,58,18);sun.castShadow=true;sun.shadow.mapSize.set(COARSE?1024:1536,COARSE?1024:1536);sun.shadow.camera.left=-46;sun.shadow.camera.right=46;sun.shadow.camera.top=46;sun.shadow.camera.bottom=-46;sun.shadow.camera.near=1;sun.shadow.camera.far=155;sun.shadow.bias=-.00018;sun.shadow.normalBias=.025;scene.add(sun,sun.target);
const skyU={top:{value:new THREE.Color(0x5ea9d0)},mid:{value:new THREE.Color(0xbfd7d4)},bottom:{value:new THREE.Color(0xf0ddbc)},sunDir:{value:new THREE.Vector3(-.5,.8,.25)},sunWarm:{value:new THREE.Color(0xffd79a)}};
const skyM=new THREE.ShaderMaterial({side:THREE.BackSide,depthWrite:false,uniforms:skyU,vertexShader:`varying vec3 vW;void main(){vW=(modelMatrix*vec4(position,1.)).xyz;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,fragmentShader:`uniform vec3 top,mid,bottom,sunDir,sunWarm;varying vec3 vW;void main(){vec3 d=normalize(vW);float h=clamp(d.y*.5+.5,0.,1.);vec3 c=mix(bottom,mid,smoothstep(0.,.5,h));c=mix(c,top,smoothstep(.38,1.,h));float a=max(dot(d,normalize(sunDir)),0.);float disc=pow(a,520.);float halo=pow(a,18.)*.28;float horizon=pow(1.-abs(d.y),5.)*.045;c+=sunWarm*(disc*2.8+halo+horizon);gl_FragColor=vec4(c,1.);}`});scene.add(new THREE.Mesh(new THREE.SphereGeometry(390,40,20),skyM));

function streamCenter(z){return -18+Math.sin(z*.048)*4.2+Math.sin(z*.013)*2.2;}
function heightAt(x,z){const broad=Math.sin(x*.029)*3.0+Math.cos(z*.032)*2.4+Math.sin((x+z)*.021)*1.65;const detail=Math.sin(x*.093+z*.032)*.50+Math.cos(z*.108-x*.025)*.38;const dx=x-streamCenter(z);const valley=-Math.exp(-(dx*dx)/54)*5.2;const overlook=Math.exp(-((x-46)*(x-46)+(z+54)*(z+54))/920)*7.0;const ridge=Math.exp(-((x+50)*(x+50)+(z+42)*(z+42))/1600)*3.0;return broad+detail+valley+overlook+ridge;}
function slopeAt(x,z){const e=.45,dx=(heightAt(x+e,z)-heightAt(x-e,z))/(2*e),dz=(heightAt(x,z+e)-heightAt(x,z-e))/(2*e);return Math.min(1,Math.hypot(dx,dz));}
const bridge={cx:0,cz:4,w:18,d:5.0,top:0};bridge.cx=streamCenter(bridge.cz);bridge.top=Math.max(heightAt(bridge.cx-10,bridge.cz),heightAt(bridge.cx+10,bridge.cz))+.72;
function onBridge(x,z){return Math.abs(x-bridge.cx)<bridge.w*.5&&Math.abs(z-bridge.cz)<bridge.d*.5;}
function groundHeight(x,z){return onBridge(x,z)?bridge.top:heightAt(x,z);}
function inWater(x,z){return Math.abs(x-streamCenter(z))<5.8&&!onBridge(x,z);}
function terrainColor(y,x,z){const c=new THREE.Color();const s=slopeAt(x,z),wet=Math.exp(-Math.pow((x-streamCenter(z))/11,2)),n=hash2(x*.9,z*.9);if(s>.55)c.setRGB(.31,.34,.31);else if(y<-1.4)c.setRGB(.26,.38,.25);else if(y<1)c.setRGB(.38,.52,.29);else if(y<4.4)c.setRGB(.43,.58,.31);else c.setRGB(.35,.49,.28);c.offsetHSL((n-.5)*.012,(wet-.5)*.035,(n-.5)*.055);c.lerp(new THREE.Color(.38,.36,.30),Math.max(0,s-.32)*.48);return c;}
const terrainGeo=new THREE.PlaneGeometry(240,240,170,170);terrainGeo.rotateX(-Math.PI/2);const tp=terrainGeo.attributes.position,tc=[];for(let i=0;i<tp.count;i++){const x=tp.getX(i),z=tp.getZ(i),y=heightAt(x,z);tp.setY(i,y);const c=terrainColor(y,x,z);tc.push(c.r,c.g,c.b);}terrainGeo.setAttribute('color',new THREE.Float32BufferAttribute(tc,3));terrainGeo.computeVertexNormals();
const terrainMat=new THREE.MeshStandardMaterial({vertexColors:true,roughness:.92,bumpMap:microNoise,bumpScale:.20});const terrain=new THREE.Mesh(terrainGeo,terrainMat);terrain.receiveShadow=true;scene.add(terrain);

const route=new THREE.CatmullRomCurve3([new THREE.Vector3(5,0,60),new THREE.Vector3(-2,0,41),new THREE.Vector3(-12,0,22),new THREE.Vector3(bridge.cx,0,bridge.cz),new THREE.Vector3(-3,0,-13),new THREE.Vector3(18,0,-31),new THREE.Vector3(36,0,-44),new THREE.Vector3(47,0,-55)]);
const pv=[],pi=[],puv=[],pathSeg=112;for(let i=0;i<=pathSeg;i++){const t=i/pathSeg,p=route.getPoint(t),p2=route.getPoint(Math.min(1,t+.0025)),tan=p2.clone().sub(p).normalize(),n=new THREE.Vector3(-tan.z,0,tan.x),half=2.45+Math.sin(i*.41)*.18;for(let si=0;si<2;si++){const s=si?1:-1,q=p.clone().addScaledVector(n,half*s);q.y=groundHeight(q.x,q.z)+.07;pv.push(q.x,q.y,q.z);puv.push(si,t*8);}}for(let i=0;i<pathSeg;i++){const a=i*2,b=a+1,c=a+2,d=a+3;pi.push(a,c,b,b,c,d);}const pg=new THREE.BufferGeometry();pg.setAttribute('position',new THREE.Float32BufferAttribute(pv,3));pg.setAttribute('uv',new THREE.Float32BufferAttribute(puv,2));pg.setIndex(pi);pg.computeVertexNormals();const pathMat=new THREE.MeshStandardMaterial({color:0x957754,roughness:.96,bumpMap:pathNoise,bumpScale:.18});const pathMesh=new THREE.Mesh(pg,pathMat);pathMesh.receiveShadow=true;scene.add(pathMesh);

const rv=[],ri=[],ruv=[],riverSeg=128;for(let i=0;i<=riverSeg;i++){const z=-110+i*(220/riverSeg),cx=streamCenter(z),half=5.55;rv.push(cx-half,-2.30,z,cx+half,-2.30,z);ruv.push(0,i/riverSeg*14,1,i/riverSeg*14);}for(let i=0;i<riverSeg;i++){const a=i*2,b=a+1,c=a+2,d=a+3;ri.push(a,c,b,b,c,d);}const rg=new THREE.BufferGeometry();rg.setAttribute('position',new THREE.Float32BufferAttribute(rv,3));rg.setAttribute('uv',new THREE.Float32BufferAttribute(ruv,2));rg.setIndex(ri);rg.computeVertexNormals();
const waterU={time:{value:0},sunDir:{value:new THREE.Vector3(-.5,.8,.2)},deep:{value:new THREE.Color(0x1e5267)},shallow:{value:new THREE.Color(0x74b9c2)},sky:{value:new THREE.Color(0xbfd7d4)}};
const waterM=new THREE.ShaderMaterial({transparent:true,depthWrite:false,uniforms:waterU,vertexShader:`uniform float time;varying vec3 vW;varying vec2 vUv;void main(){vec3 p=position;float w=sin((p.x+time*2.3)*.48)*.065+cos((p.z-time*1.6)*.34)*.050+sin((p.x+p.z+time)*.17)*.025;p.y+=w;vUv=uv;vec4 wp=modelMatrix*vec4(p,1.);vW=wp.xyz;gl_Position=projectionMatrix*viewMatrix*wp;}`,fragmentShader:`uniform float time;uniform vec3 deep,shallow,sunDir,sky;varying vec3 vW;varying vec2 vUv;void main(){float dx=.065*.48*cos((vW.x+time*2.3)*.48)+.025*.17*cos((vW.x+vW.z+time)*.17);float dz=-.050*.34*sin((vW.z-time*1.6)*.34)+.025*.17*cos((vW.x+vW.z+time)*.17);vec3 N=normalize(vec3(-dx,1.,-dz));vec3 V=normalize(cameraPosition-vW);float fres=pow(1.-max(dot(N,V),0.),2.8);vec3 R=reflect(-normalize(sunDir),N);float glint=pow(max(dot(R,V),0.),90.)*.9;float edge=min(vUv.x,1.-vUv.x);float foam=(1.-smoothstep(.02,.105,edge))*(.45+.35*sin(vUv.y*5.+time*2.));vec3 c=mix(deep,shallow,.48+N.x*.65);c=mix(c,sky,fres*.48);c+=vec3(1.,.82,.52)*glint;c=mix(c,vec3(.90,.96,.93),foam*.62);gl_FragColor=vec4(c,.88);}`});scene.add(new THREE.Mesh(rg,waterM));

const obstacles=[];const addObstacle=(x,z,r,h=7)=>obstacles.push({x,z,r,h});
function addWind(mat,amp){mat.onBeforeCompile=s=>{s.uniforms.uTime={value:0};s.uniforms.uWind={value:.48};mat.userData.shader=s;s.vertexShader=s.vertexShader.replace('#include <common>','#include <common>\nuniform float uTime;uniform float uWind;').replace('#include <begin_vertex>',`#include <begin_vertex>\nfloat sw=sin(uTime*1.42+(instanceMatrix[3].x+instanceMatrix[3].z)*.052+position.y*.78)*uWind*${amp.toFixed(3)};transformed.x+=sw*max(position.y,0.);`);};mat.customProgramCacheKey=()=>`wind-${amp}`;}
const bark=new THREE.MeshStandardMaterial({color:0x5a3724,roughness:1,bumpMap:microNoise,bumpScale:.08});
const leafA=new THREE.MeshStandardMaterial({color:0x2b6337,roughness:.86});const leafB=new THREE.MeshStandardMaterial({color:0x397847,roughness:.84});const leafC=new THREE.MeshStandardMaterial({color:0x4d8250,roughness:.84});addWind(leafA,.018);addWind(leafB,.022);addWind(leafC,.025);
const TREE=238, trunkGeo=new THREE.CylinderGeometry(.29,.48,5.4,8);trunkGeo.translate(0,2.7,0);const crownGeo=new THREE.IcosahedronGeometry(1.55,1),smallCrown=new THREE.IcosahedronGeometry(1.18,1);
const trunks=new THREE.InstancedMesh(trunkGeo,bark,TREE), crown1=new THREE.InstancedMesh(crownGeo,leafA,TREE), crown2=new THREE.InstancedMesh(smallCrown,leafB,TREE), crown3=new THREE.InstancedMesh(smallCrown,leafC,TREE);trunks.castShadow=trunks.receiveShadow=true;crown1.castShadow=crown2.castShadow=crown3.castShadow=true;
const td=new THREE.Object3D();let ti=0,tries=0;while(ti<TREE&&tries++<5000){const x=(rnd()-.5)*224,z=(rnd()-.5)*224;if(Math.abs(x-streamCenter(z))<9.2)continue;if(Math.hypot(x-5,z-60)<10)continue;if(Math.hypot(x-38,z+45)<14)continue;const y=heightAt(x,z),s=.72+rnd()*1.12,rot=rnd()*Math.PI*2;td.position.set(x,y,z);td.rotation.set(0,rot,0);td.scale.set(s,s,s);td.updateMatrix();trunks.setMatrixAt(ti,td.matrix);const baseY=y+5.15*s;for(const [mesh,ox,oy,oz,ss] of [[crown1,0,0,0,1],[crown2,.75,.18,.05,.86],[crown3,-.62,.42,-.18,.78]]){const ca=Math.cos(rot),sa=Math.sin(rot),rx=ox*ca-oz*sa,rz=ox*sa+oz*ca;td.position.set(x+rx*s,baseY+oy*s,z+rz*s);td.rotation.set(0,rot+rnd()*.5,0);td.scale.set(s*ss*(.9+rnd()*.18),s*ss*(.9+rnd()*.16),s*ss*(.9+rnd()*.18));td.updateMatrix();mesh.setMatrixAt(ti,td.matrix);}addObstacle(x,z,.50*s,7*s);ti++;}scene.add(trunks,crown1,crown2,crown3);

const bushMat=new THREE.MeshStandardMaterial({color:0x477a43,roughness:.9});addWind(bushMat,.030);const bushGeo=new THREE.DodecahedronGeometry(.72,0),BUSH=260,bushes=new THREE.InstancedMesh(bushGeo,bushMat,BUSH);for(let i=0;i<BUSH;i++){const x=(rnd()-.5)*214,z=(rnd()-.5)*214;if(Math.abs(x-streamCenter(z))<7)continue;const y=heightAt(x,z),s=.45+rnd()*.95;td.position.set(x,y+.35*s,z);td.rotation.set(0,rnd()*6.28,0);td.scale.set(s*1.35,s*.75,s);td.updateMatrix();bushes.setMatrixAt(i,td.matrix);}bushes.castShadow=true;scene.add(bushes);

const grassMat=new THREE.MeshStandardMaterial({color:0x648e42,roughness:1,side:THREE.DoubleSide});addWind(grassMat,.060);const bladeGeo=new THREE.ConeGeometry(.052,.62,3);bladeGeo.translate(0,.31,0);const GRASS=2600,grass=new THREE.InstancedMesh(bladeGeo,grassMat,GRASS);for(let i=0;i<GRASS;i++){const x=(rnd()-.5)*220,z=(rnd()-.5)*220;if(Math.abs(x-streamCenter(z))<6.3)continue;const y=heightAt(x,z),s=.45+rnd()*1.15;td.position.set(x,y,z);td.rotation.set(0,rnd()*6.28,0);td.scale.set(s,s,s);td.updateMatrix();grass.setMatrixAt(i,td.matrix);}scene.add(grass);

const flowerMat=new THREE.MeshStandardMaterial({color:0xf0ddb0,roughness:.78,emissive:0x1d1407,emissiveIntensity:.15});addWind(flowerMat,.025);const flowerGeo=new THREE.SphereGeometry(.065,5,4),FLOWERS=310,flowers=new THREE.InstancedMesh(flowerGeo,flowerMat,FLOWERS);for(let i=0;i<FLOWERS;i++){const t=rnd(),p=route.getPoint(t),x=p.x+(rnd()-.5)*14,z=p.z+(rnd()-.5)*14,y=heightAt(x,z);td.position.set(x,y+.18,z);const s=.65+rnd()*.8;td.scale.setScalar(s);td.updateMatrix();flowers.setMatrixAt(i,td.matrix);}scene.add(flowers);

function authoredRockGeometry(k){const g=new THREE.IcosahedronGeometry(1,1),p=g.attributes.position;for(let i=0;i<p.count;i++){const x=p.getX(i),y=p.getY(i),z=p.getZ(i),n=.78+.30*hash2(i*.37+k*11,i*.73+k*7);p.setXYZ(i,x*n,y*n,z*n);}g.computeVertexNormals();return g;}
const rockMat=new THREE.MeshStandardMaterial({color:0x757b78,roughness:.93,bumpMap:microNoise,bumpScale:.12});const ROCKS=120,rockMeshes=[0,1,2].map(k=>{const m=new THREE.InstancedMesh(authoredRockGeometry(k),rockMat,Math.ceil(ROCKS/3));m.castShadow=m.receiveShadow=true;scene.add(m);return m;});const rc=[0,0,0];for(let i=0;i<ROCKS;i++){const x=(rnd()-.5)*215,z=(rnd()-.5)*215,y=heightAt(x,z),s=.22+rnd()*1.25,k=i%3,j=rc[k]++;td.position.set(x,y+.12,z);td.rotation.set(rnd()*.23,rnd()*6.28,rnd()*.20);td.scale.set(s*1.45,s*.72,s);td.updateMatrix();rockMeshes[k].setMatrixAt(j,td.matrix);if(s>.62)addObstacle(x,z,.78*s,1.4*s);}

const mountainMatA=new THREE.MeshStandardMaterial({color:0x687873,roughness:1,flatShading:true}),mountainMatB=new THREE.MeshStandardMaterial({color:0x82908a,roughness:1,flatShading:true});const mountainGeo=new THREE.ConeGeometry(15,36,7,1),M=28,m1=new THREE.InstancedMesh(mountainGeo,mountainMatA,M),m2=new THREE.InstancedMesh(mountainGeo,mountainMatB,M);for(let i=0;i<M;i++){const a=i/M*Math.PI*2,r=145+Math.sin(i*2.17)*15,x=Math.cos(a)*r,z=Math.sin(a)*r,s=.68+((i*13)%11)/18;td.position.set(x,7+Math.sin(i)*3,z);td.rotation.set(0,-a+rnd()*.35,0);td.scale.set(s*(.8+rnd()*.35),s,s*(.8+rnd()*.35));td.updateMatrix();(i%2?m1:m2).setMatrixAt(i,td.matrix);}scene.add(m1,m2);

const wood=new THREE.MeshStandardMaterial({color:0x765134,roughness:.9,bumpMap:microNoise,bumpScale:.08});const bridgeGroup=new THREE.Group();bridgeGroup.position.set(bridge.cx,bridge.top,bridge.cz);scene.add(bridgeGroup);for(let i=0;i<11;i++){const plank=new THREE.Mesh(new THREE.BoxGeometry(1.66,.18,4.0),wood);plank.position.set(-8.1+i*1.62,0,0);plank.rotation.y=(i%3-1)*.008;plank.castShadow=plank.receiveShadow=true;bridgeGroup.add(plank);}for(const sx of [-1,1])for(const sz of [-1,1]){const post=new THREE.Mesh(new THREE.CylinderGeometry(.12,.17,2.45,7),wood);post.position.set(sx*8.0,1.12,sz*1.72);post.castShadow=true;bridgeGroup.add(post);}

const ruin=new THREE.Group(),ruinX=36,ruinZ=-44;ruin.position.set(ruinX,heightAt(ruinX,ruinZ),ruinZ);scene.add(ruin);const stone=new THREE.MeshStandardMaterial({color:0x918d82,roughness:.91,bumpMap:microNoise,bumpScale:.13});function rbox(x,y,z,sx,sy,sz,ry=0){const m=new THREE.Mesh(new THREE.BoxGeometry(sx,sy,sz),stone);m.position.set(x,y,z);m.rotation.y=ry;m.castShadow=m.receiveShadow=true;ruin.add(m);addObstacle(ruinX+x,ruinZ+z,Math.max(sx,sz)*.42,sy);}rbox(0,2.8,0,7.8,5.6,1.7,.07);rbox(-4.9,4.0,.2,1.7,8.0,1.7,.07);rbox(4.9,4.0,.2,1.7,8.0,1.7,.07);rbox(0,7.15,.2,11.2,1.0,1.6,.07);rbox(0,9.35,0,1.3,4.6,1.3);const ring=new THREE.Mesh(new THREE.TorusGeometry(3.55,.30,8,26),stone);ring.position.set(0,10.8,0);ring.rotation.x=Math.PI/2.35;ring.rotation.z=.34;ring.castShadow=true;ruin.add(ring);
const bx=48,bz=-59,by=heightAt(bx,bz),beacon=new THREE.Group();beacon.position.set(bx,by,bz);scene.add(beacon);const beaconMat=new THREE.MeshStandardMaterial({color:0x756f64,roughness:.9,bumpMap:microNoise,bumpScale:.1}),glowMat=new THREE.MeshStandardMaterial({color:0xffd88d,emissive:0xffb84d,emissiveIntensity:2.3});const col=new THREE.Mesh(new THREE.CylinderGeometry(.6,.85,7.5,9),beaconMat);col.position.y=3.75;col.castShadow=true;beacon.add(col);const orb=new THREE.Mesh(new THREE.SphereGeometry(.55,14,10),glowMat);orb.position.y=7.8;beacon.add(orb);const orbLight=new THREE.PointLight(0xffb95a,5.5,18,2);orbLight.position.y=7.8;beacon.add(orbLight);addObstacle(bx,bz,1,8);

const playerRoot=new THREE.Group();scene.add(playerRoot);playerRoot.position.set(5,groundHeight(5,60),60);let model=null,mixer=null,actions={},activeAction=null,characterMode='FALLBACK';
function buildFallback(){const g=new THREE.Group(),bodyMat=new THREE.MeshStandardMaterial({color:0x2a5b79,roughness:.72}),skin=new THREE.MeshStandardMaterial({color:0xd9a57c,roughness:.78}),dark=new THREE.MeshStandardMaterial({color:0x302923,roughness:.92});const torso=new THREE.Mesh(new THREE.CapsuleGeometry(.32,.74,4,8),bodyMat);torso.position.y=1.18;g.add(torso);const head=new THREE.Mesh(new THREE.SphereGeometry(.28,12,8),skin);head.position.y=1.86;g.add(head);for(const sx of [-1,1]){const leg=new THREE.Mesh(new THREE.CapsuleGeometry(.085,.45,3,6),dark);leg.position.set(.145*sx,.52,0);g.add(leg);}g.traverse(o=>{if(o.isMesh){o.castShadow=true;o.receiveShadow=true;}});playerRoot.add(g);model=g;charEl.textContent='FALLBACK';}
buildFallback();boot.classList.add('hide');setTimeout(()=>boot.remove(),320);
const loader=new GLTFLoader();loader.load('./assets/Soldier.glb',g=>{if(model)playerRoot.remove(model);model=g.scene;model.scale.setScalar(1.0);model.rotation.y=Math.PI;model.traverse(o=>{if(o.isMesh){o.castShadow=true;o.receiveShadow=true;}});playerRoot.add(model);mixer=new THREE.AnimationMixer(model);actions={};for(const clip of g.animations)actions[clip.name]=mixer.clipAction(clip);characterMode='GLB';charEl.textContent='GLB';setAction(actions.Idle?'Idle':Object.keys(actions)[0],0);},undefined,err=>{console.warn('Local GLB failed; fallback remains active',err);charEl.textContent='FALLBACK';});
function setAction(name,fade=.16){if(!actions[name]||activeAction===actions[name])return;const next=actions[name];next.reset().play();if(activeAction)activeAction.crossFadeTo(next,fade,true);activeAction=next;}

let yaw=.08,pitch=.30,camDist=7.8,drag=false,lastX=0,lastY=0,touchSprint=false,jumpQueued=false,verticalVel=0,grounded=true;const keys={},touchMove=new THREE.Vector2(),velocity=new THREE.Vector3();addEventListener('keydown',e=>{keys[e.code]=true;if(e.code==='Space')jumpQueued=true;});addEventListener('keyup',e=>keys[e.code]=false);
renderer.domElement.addEventListener('pointerdown',e=>{if(e.pointerType==='touch'&&e.clientX<innerWidth*.36&&e.clientY>innerHeight*.52)return;if(e.pointerType==='touch'&&e.clientX>innerWidth*.68&&e.clientY>innerHeight*.54)return;drag=true;lastX=e.clientX;lastY=e.clientY;renderer.domElement.setPointerCapture(e.pointerId);});renderer.domElement.addEventListener('pointerup',()=>drag=false);renderer.domElement.addEventListener('pointercancel',()=>drag=false);renderer.domElement.addEventListener('pointermove',e=>{if(!drag)return;const dx=e.clientX-lastX,dy=e.clientY-lastY;yaw-=dx*.0060;pitch=THREE.MathUtils.clamp(pitch+dy*.0047,-.05,.90);lastX=e.clientX;lastY=e.clientY;});renderer.domElement.addEventListener('wheel',e=>camDist=THREE.MathUtils.clamp(camDist+e.deltaY*.008,4.8,14),{passive:true});
const stick=$('stick'),knob=$('knob'),sprint=$('sprint'),jump=$('jump');let sp=null;function setStick(e){const r=stick.getBoundingClientRect(),cx=r.left+r.width/2,cy=r.top+r.height/2,max=r.width*.34;let dx=e.clientX-cx,dy=e.clientY-cy,l=Math.hypot(dx,dy)||1,k=Math.min(1,max/l);dx*=k;dy*=k;knob.style.transform=`translate(${dx}px,${dy}px)`;touchMove.set(dx/max,-dy/max);}stick.addEventListener('pointerdown',e=>{e.preventDefault();sp=e.pointerId;stick.setPointerCapture(sp);setStick(e)});stick.addEventListener('pointermove',e=>{if(e.pointerId===sp){e.preventDefault();setStick(e)}});function freeStick(e){if(sp===null||e.pointerId===sp){sp=null;touchMove.set(0,0);knob.style.transform='translate(0,0)'}}stick.addEventListener('pointerup',freeStick);stick.addEventListener('pointercancel',freeStick);sprint.addEventListener('pointerdown',e=>{e.preventDefault();touchSprint=true;sprint.style.transform='scale(.94)'});for(const ev of ['pointerup','pointercancel','pointerleave'])sprint.addEventListener(ev,()=>{touchSprint=false;sprint.style.transform='scale(1)'});jump.addEventListener('pointerdown',e=>{e.preventDefault();jumpQueued=true;jump.style.transform='scale(.93)'});for(const ev of ['pointerup','pointercancel','pointerleave'])jump.addEventListener(ev,()=>jump.style.transform='scale(1)');
const panel=$('panel');$('tuneBtn').onclick=()=>panel.classList.toggle('open');const tod=$('tod'),fogS=$('fog'),windS=$('wind'),dampS=$('damp');$('shadowBtn').onclick=e=>{renderer.shadowMap.enabled=!renderer.shadowMap.enabled;e.target.textContent='Dynamic shadows: '+(renderer.shadowMap.enabled?'ON':'OFF')};

const dayTop=new THREE.Color(0x5ea9d0),duskTop=new THREE.Color(0x646f8d),dayMid=new THREE.Color(0xbfd7d4),duskMid=new THREE.Color(0xc3978f),dayBottom=new THREE.Color(0xf0ddbc),duskBottom=new THREE.Color(0xf0a171);
function updateEnvironment(){const hour=+tod.value,t=(hour-6)/14,ang=.10+t*Math.PI*.91,elev=Math.max(.04,Math.sin(ang)),az=-1.65+t*1.55;sun.position.set(Math.cos(az)*78,elev*90,Math.sin(az)*78);sun.intensity=.88+elev*3.5;const sd=sun.position.clone().normalize();skyU.sunDir.value.copy(sd);waterU.sunDir.value.copy(sd);const edge=THREE.MathUtils.smoothstep(Math.abs(hour-13),3,7);skyU.top.value.copy(dayTop).lerp(duskTop,edge);skyU.mid.value.copy(dayMid).lerp(duskMid,edge*.82);skyU.bottom.value.copy(dayBottom).lerp(duskBottom,edge);waterU.sky.value.copy(skyU.mid.value);sun.color.setRGB(1,.94-.12*edge,.81-.17*edge);hemi.intensity=.90+elev*1.42;fill.intensity=.16+elev*.21;scene.fog.density=.0022+(+fogS.value)*.0082;scene.fog.color.copy(skyU.mid.value).lerp(skyU.bottom.value,.42);renderer.toneMappingExposure=.84+elev*.31;}
function resolveObstacles(pos){for(const o of obstacles){const dx=pos.x-o.x,dz=pos.z-o.z,dist=Math.hypot(dx,dz),min=o.r+.36;if(dist<min&&dist>.0001){const push=min-dist;pos.x+=dx/dist*push;pos.z+=dz/dist*push;}}}
function cameraCollision(target,desired){let best=desired.clone(),ray=desired.clone().sub(target),steps=13;for(let i=1;i<=steps;i++){const t=i/steps,p=target.clone().addScaledVector(ray,t),gh=groundHeight(p.x,p.z)+.66;if(p.y<gh){best=target.clone().addScaledVector(ray,Math.max(.14,(i-1)/steps));break;}for(const o of obstacles){if(Math.hypot(p.x-o.x,p.z-o.z)<o.r+.26&&p.y<groundHeight(o.x,o.z)+o.h){return target.clone().addScaledVector(ray,Math.max(.14,(i-1)/steps));}}}return best;}
function zoneName(x,z){if(Math.hypot(x-bx,z-bz)<10)return'OVERLOOK BEACON';if(Math.hypot(x-ruinX,z-ruinZ)<16)return'RUINED OBSERVATORY';if(onBridge(x,z))return'OLD RIVER BRIDGE';if(Math.abs(x-streamCenter(z))<9)return'RIVER VALLEY';if(z<2)return'HIGHLAND TRAIL';return'FOREST APPROACH';}

const clock=new THREE.Clock();let frames=0,acc=0,qualityAcc=0,qualityFrames=0;
function animate(){requestAnimationFrame(animate);const dt=Math.min(.033,clock.getDelta()),time=clock.elapsedTime;updateEnvironment();const fwd=new THREE.Vector3(-Math.sin(yaw),0,-Math.cos(yaw)),right=new THREE.Vector3(Math.cos(yaw),0,-Math.sin(yaw)),input=new THREE.Vector3();if(keys.KeyW)input.add(fwd);if(keys.KeyS)input.sub(fwd);if(keys.KeyD)input.add(right);if(keys.KeyA)input.sub(right);if(touchMove.lengthSq()>.002){input.addScaledVector(fwd,touchMove.y);input.addScaledVector(right,touchMove.x);}const sprinting=(keys.ShiftLeft||touchSprint)&&input.lengthSq()>.01;const wet=inWater(playerRoot.position.x,playerRoot.position.z)&&groundHeight(playerRoot.position.x,playerRoot.position.z)<-1.1;const maxSpeed=(sprinting?8.7:4.8)*(wet?.58:1);if(input.lengthSq()>0){input.normalize();const tv=input.multiplyScalar(maxSpeed),blend=1-Math.exp(-(grounded?12:5)*dt);velocity.x=THREE.MathUtils.lerp(velocity.x,tv.x,blend);velocity.z=THREE.MathUtils.lerp(velocity.z,tv.z,blend);}else{const d=Math.exp(-(grounded?10:2.5)*dt);velocity.x*=d;velocity.z*=d;}if(jumpQueued&&grounded){verticalVel=7.7;grounded=false;}jumpQueued=false;verticalVel-=18.6*dt;playerRoot.position.x+=velocity.x*dt;playerRoot.position.z+=velocity.z*dt;playerRoot.position.x=THREE.MathUtils.clamp(playerRoot.position.x,-112,112);playerRoot.position.z=THREE.MathUtils.clamp(playerRoot.position.z,-112,112);resolveObstacles(playerRoot.position);const gh=groundHeight(playerRoot.position.x,playerRoot.position.z);playerRoot.position.y+=verticalVel*dt;if(playerRoot.position.y<=gh){playerRoot.position.y=gh;if(verticalVel<0)verticalVel=0;grounded=true;}else grounded=false;const speed=Math.hypot(velocity.x,velocity.z);if(speed>.18){const targetYaw=Math.atan2(velocity.x,velocity.z);let d=((targetYaw-playerRoot.rotation.y+Math.PI)%(Math.PI*2))-Math.PI;playerRoot.rotation.y+=d*(1-Math.exp(-14*dt));}if(characterMode==='GLB'&&grounded){if(speed<.22)setAction(actions.Idle?'Idle':Object.keys(actions)[0]);else if(speed<6)setAction(actions.Walk?'Walk':(actions.Run?'Run':Object.keys(actions)[0]));else setAction(actions.Run?'Run':Object.keys(actions)[0]);}if(mixer)mixer.update(dt*(sprinting?1.08:1));const target=playerRoot.position.clone().add(new THREE.Vector3(0,1.42,0));let desired=target.clone().add(new THREE.Vector3(Math.sin(yaw)*Math.cos(pitch)*camDist,Math.sin(pitch)*camDist+1.0,Math.cos(yaw)*Math.cos(pitch)*camDist));desired=cameraCollision(target,desired);const ck=1-Math.pow(1-(+dampS.value),dt*60);camera.position.lerp(desired,ck);camera.lookAt(target);camera.fov=THREE.MathUtils.lerp(camera.fov,sprinting?60:53,1-Math.exp(-5*dt));camera.updateProjectionMatrix();sun.target.position.copy(playerRoot.position);sun.target.updateMatrixWorld();waterU.time.value=time;const w=+windS.value;for(const mat of [leafA,leafB,leafC,bushMat,grassMat,flowerMat])if(mat.userData.shader){mat.userData.shader.uniforms.uTime.value=time;mat.userData.shader.uniforms.uWind.value=w;}orb.position.y=7.8+Math.sin(time*1.5)*.10;orbLight.intensity=5.0+Math.sin(time*2.1)*.6;zoneEl.textContent=zoneName(playerRoot.position.x,playerRoot.position.z);if(globalThis.__raaiFrameHooks){for(const hook of globalThis.__raaiFrameHooks)hook(performance.now(),dt);}renderer.render(scene,camera);frames++;acc+=dt;qualityFrames++;qualityAcc+=dt;if(acc>.55){const fps=Math.round(frames/acc);fpsEl.textContent=fps;frames=0;acc=0;callsEl.textContent=renderer.info.render.calls;trisEl.textContent=renderer.info.render.triangles.toLocaleString();}if(COARSE&&qualityAcc>1.8){const avg=qualityFrames/qualityAcc;let next=renderScale;if(avg<53.5)next=Math.max(minScale,renderScale-.08);else if(avg>58.7)next=Math.min(maxScale,renderScale+.04);if(Math.abs(next-renderScale)>.001){renderScale=next;renderer.setPixelRatio(renderScale);renderer.setSize(innerWidth,innerHeight,false);scaleEl.textContent=renderScale.toFixed(2)+'×';}qualityAcc=0;qualityFrames=0;}}
animate();
addEventListener('resize',()=>{camera.aspect=innerWidth/innerHeight;camera.updateProjectionMatrix();renderer.setPixelRatio(renderScale);renderer.setSize(innerWidth,innerHeight);});


// ---- Test 06A: Living World Baseline — deterministic flock response ----
const LIVING_WORLD_06A_MARKER='06A_LIVING_WORLD_FLOCK';
const FLOCK={count:12,triggerRadius:7.0,resetRadius:13.5,fleeMs:1450,returnMs:1350,farHoldMs:1400};
const flockSpawnYaw=Number.isFinite(playerRoot.rotation.y)?playerRoot.rotation.y:0;
const flockCenterX=playerRoot.position.x+Math.sin(flockSpawnYaw)*8.0;
const flockCenterZ=playerRoot.position.z+Math.cos(flockSpawnYaw)*8.0;
const flockCenterY=groundHeight(flockCenterX,flockCenterZ)+0.18;

const flockBodyGeo=new THREE.SphereGeometry(.12,7,5);
const flockWingGeo=new THREE.PlaneGeometry(.26,.10);
const flockBodyMat=new THREE.MeshStandardMaterial({color:0x283137,roughness:.78,metalness:.03});
const flockWingMat=new THREE.MeshStandardMaterial({color:0x66757a,roughness:.82,side:THREE.DoubleSide});
const flockBodies=new THREE.InstancedMesh(flockBodyGeo,flockBodyMat,FLOCK.count);
const flockLeftWings=new THREE.InstancedMesh(flockWingGeo,flockWingMat,FLOCK.count);
const flockRightWings=new THREE.InstancedMesh(flockWingGeo,flockWingMat,FLOCK.count);
flockBodies.castShadow=true;flockLeftWings.castShadow=true;flockRightWings.castShadow=true;
scene.add(flockBodies,flockLeftWings,flockRightWings);

const flockBirds=[];
for(let i=0;i<FLOCK.count;i++){
  const a=(i/FLOCK.count)*Math.PI*2+((i*37)%11)*.041;
  const r=1.0+((i*53)%7)*.18;
  const px=Math.cos(a)*r,pz=Math.sin(a)*r;
  const escapeA=a+((i%3)-1)*.22;
  flockBirds.push({
    px,pz,
    ex:px+Math.cos(escapeA)*(5.0+(i%4)*.72),
    ez:pz+Math.sin(escapeA)*(5.0+(i%4)*.72),
    rise:2.8+(i%5)*.42,
    phase:i*.83,
    yaw:escapeA
  });
}

let flockState='CALM',flockStateStart=performance.now(),flockFarSince=0,flockResponses=0;
const bodyObj=new THREE.Object3D(),leftObj=new THREE.Object3D(),rightObj=new THREE.Object3D();
const worldStateEl=document.getElementById('worldState');
const worldDistanceEl=document.getElementById('worldDistance');
const worldResultEl=document.getElementById('worldResult');

function flockEaseOut(p){return 1-Math.pow(1-p,3);}
function flockEaseInOut(p){return p<.5?4*p*p*p:1-Math.pow(-2*p+2,3)/2;}
function flockDistance(){return Math.hypot(playerRoot.position.x-flockCenterX,playerRoot.position.z-flockCenterZ);}
function setFlockState(next,now){
  flockState=next;flockStateStart=now;flockFarSince=0;
  if(worldStateEl){worldStateEl.textContent=next;worldStateEl.style.color=next==='CALM'?'#a8f0b5':next==='FLEEING'?'#ffd18a':next==='DISPERSED'?'#ffb095':'#b9d9ff';}
}
function updateFlockHud(dist){
  if(worldDistanceEl)worldDistanceEl.textContent=dist.toFixed(1)+' m';
  if(worldResultEl&&flockResponses===0)worldResultEl.textContent=dist<=FLOCK.triggerRadius?'TRIGGERING':'APPROACH';
}
function birdPose(b,i,now){
  const calmX=flockCenterX+b.px,calmZ=flockCenterZ+b.pz,calmY=groundHeight(calmX,calmZ)+.22;
  const destX=flockCenterX+b.ex,destZ=flockCenterZ+b.ez,destY=flockCenterY+b.rise;
  let x=calmX,y=calmY,z=calmZ,yaw=b.yaw,flight=0;
  const elapsed=now-flockStateStart;
  if(flockState==='CALM'){
    y+=Math.sin(now*.0021+b.phase)*.022;
    yaw=b.phase*.37+Math.sin(now*.0007+b.phase)*.18;
  }else if(flockState==='FLEEING'){
    const p=Math.min(1,elapsed/FLOCK.fleeMs),e=flockEaseOut(p);
    x=THREE.MathUtils.lerp(calmX,destX,e);z=THREE.MathUtils.lerp(calmZ,destZ,e);
    y=THREE.MathUtils.lerp(calmY,destY,e)+Math.sin(p*Math.PI)*.75;
    flight=1;
  }else if(flockState==='DISPERSED'){
    const t=now*.0014+b.phase;
    x=destX+Math.cos(t)*.45;z=destZ+Math.sin(t)*.45;y=destY+Math.sin(t*1.8)*.18;
    yaw=t+Math.PI/2;flight=1;
  }else if(flockState==='RETURNING'){
    const p=Math.min(1,elapsed/FLOCK.returnMs),e=flockEaseInOut(p);
    x=THREE.MathUtils.lerp(destX,calmX,e);z=THREE.MathUtils.lerp(destZ,calmZ,e);
    y=THREE.MathUtils.lerp(destY,calmY,e)+Math.sin(p*Math.PI)*.92;
    yaw=b.yaw+Math.PI;flight=1;
  }
  const flap=flight?Math.sin(now*.020+b.phase)*.72:Math.sin(now*.006+b.phase)*.08;
  bodyObj.position.set(x,y,z);bodyObj.rotation.set(0,yaw,0);bodyObj.scale.set(.88,.58,1.45);bodyObj.updateMatrix();flockBodies.setMatrixAt(i,bodyObj.matrix);
  const sx=Math.cos(yaw),sz=-Math.sin(yaw);
  leftObj.position.set(x+sx*.13,y+.015,z+sz*.13);leftObj.rotation.set(-Math.PI/2,yaw,flap);leftObj.scale.set(1,1,1);leftObj.updateMatrix();flockLeftWings.setMatrixAt(i,leftObj.matrix);
  rightObj.position.set(x-sx*.13,y+.015,z-sz*.13);rightObj.rotation.set(-Math.PI/2,yaw,-flap);rightObj.scale.set(1,1,1);rightObj.updateMatrix();flockRightWings.setMatrixAt(i,rightObj.matrix);
}
function updateLivingWorld06A(now){
  const dist=flockDistance();updateFlockHud(dist);
  if(flockState==='CALM'&&dist<=FLOCK.triggerRadius){
    flockResponses++;setFlockState('FLEEING',now);
    if(worldResultEl){worldResultEl.textContent='RESPONDED ✓';worldResultEl.style.color='#ffd18a';}
  }else if(flockState==='FLEEING'&&now-flockStateStart>=FLOCK.fleeMs){
    setFlockState('DISPERSED',now);
  }else if(flockState==='DISPERSED'){
    if(dist>FLOCK.resetRadius){
      if(!flockFarSince)flockFarSince=now;
      if(now-flockFarSince>=FLOCK.farHoldMs)setFlockState('RETURNING',now);
    }else flockFarSince=0;
  }else if(flockState==='RETURNING'){
    if(dist<=FLOCK.triggerRadius){setFlockState('FLEEING',now);}
    else if(now-flockStateStart>=FLOCK.returnMs)setFlockState('CALM',now);
  }
  for(let i=0;i<flockBirds.length;i++)birdPose(flockBirds[i],i,now);
  flockBodies.instanceMatrix.needsUpdate=true;flockLeftWings.instanceMatrix.needsUpdate=true;flockRightWings.instanceMatrix.needsUpdate=true;
}
function livingWorld06ALoop(now){requestAnimationFrame(livingWorld06ALoop);updateLivingWorld06A(now);}
requestAnimationFrame(livingWorld06ALoop);

globalThis.__livingWorld06A={
  marker:LIVING_WORLD_06A_MARKER,
  get state(){return flockState;},
  get responses(){return flockResponses;},
  get distance(){return flockDistance();},
  triggerRadius:FLOCK.triggerRadius,
  resetRadius:FLOCK.resetRadius
};


// ---- Test 06B: Living World — deterministic actor-to-actor disturbance propagation ----
const LIVING_WORLD_06B_MARKER='06B_WORLD_DISTURBANCE_PROPAGATION';
const PROPAGATION_06B={secondaryCount:10,disturbanceSpeed:18.0,fleeMs:1250,returnMs:1350,farHoldMs:1200};

// 06A remains frozen. 06B observes only the stable exported 06A public state and never reaches
// into 06A private flock internals. This adapter is the prototype boundary for a future WorldEventBus.
const primaryApi=globalThis.__livingWorld06A;
if(!primaryApi||primaryApi.marker!=='06A_LIVING_WORLD_FLOCK')throw new Error('06B requires accepted 06A public world-state API');

// 06B-R1 visibility correction.
// Dynamic InstancedMesh transforms can outrun stale frustum bounds on mobile Safari/WebGL,
// making a flock appear to blink out even though its state machine is still flying it away.
// Keep the tiny proof flocks render-visible for their complete deterministic travel path.
// This changes no positions, timings, triggers, propagation, or draw-call count.
flockBodies.frustumCulled=false;
flockLeftWings.frustumCulled=false;
flockRightWings.frustumCulled=false;

const spawnYaw06B=Number.isFinite(playerRoot.rotation.y)?playerRoot.rotation.y:0;
const spawnX06B=playerRoot.position.x,spawnZ06B=playerRoot.position.z;
const fwdX06B=Math.sin(spawnYaw06B),fwdZ06B=Math.cos(spawnYaw06B);
const rightX06B=Math.cos(spawnYaw06B),rightZ06B=-Math.sin(spawnYaw06B);
const primaryApproxX06B=spawnX06B+fwdX06B*8.0;
const primaryApproxZ06B=spawnZ06B+fwdZ06B*8.0;
const secondaryCenterX06B=spawnX06B+fwdX06B*15.5+rightX06B*4.5;
const secondaryCenterZ06B=spawnZ06B+fwdZ06B*15.5+rightZ06B*4.5;
const secondaryCenterY06B=groundHeight(secondaryCenterX06B,secondaryCenterZ06B)+0.18;
const propagationDistance06B=Math.hypot(secondaryCenterX06B-primaryApproxX06B,secondaryCenterZ06B-primaryApproxZ06B);
const propagationTravelMs06B=(propagationDistance06B/PROPAGATION_06B.disturbanceSpeed)*1000;

const secondaryBodyGeo06B=new THREE.SphereGeometry(.12,7,5);
const secondaryWingGeo06B=new THREE.PlaneGeometry(.26,.10);
const secondaryBodyMat06B=new THREE.MeshStandardMaterial({color:0x34454d,roughness:.78,metalness:.03});
const secondaryWingMat06B=new THREE.MeshStandardMaterial({color:0x86a1a8,roughness:.82,side:THREE.DoubleSide});
const secondaryBodies06B=new THREE.InstancedMesh(secondaryBodyGeo06B,secondaryBodyMat06B,PROPAGATION_06B.secondaryCount);
const secondaryLeftWings06B=new THREE.InstancedMesh(secondaryWingGeo06B,secondaryWingMat06B,PROPAGATION_06B.secondaryCount);
const secondaryRightWings06B=new THREE.InstancedMesh(secondaryWingGeo06B,secondaryWingMat06B,PROPAGATION_06B.secondaryCount);
secondaryBodies06B.castShadow=true;secondaryLeftWings06B.castShadow=true;secondaryRightWings06B.castShadow=true;
// Same dynamic-instancing visibility rule for Flock B.
secondaryBodies06B.frustumCulled=false;
secondaryLeftWings06B.frustumCulled=false;
secondaryRightWings06B.frustumCulled=false;
scene.add(secondaryBodies06B,secondaryLeftWings06B,secondaryRightWings06B);

const secondaryBirds06B=[];
for(let i=0;i<PROPAGATION_06B.secondaryCount;i++){
  const a=(i/PROPAGATION_06B.secondaryCount)*Math.PI*2+((i*29)%9)*.047;
  const r=.85+((i*41)%6)*.19;
  const px=Math.cos(a)*r,pz=Math.sin(a)*r;
  const escapeA=a+((i%3)-1)*.18+.12;
  secondaryBirds06B.push({
    px,pz,
    ex:px+Math.cos(escapeA)*(4.7+(i%4)*.66),
    ez:pz+Math.sin(escapeA)*(4.7+(i%4)*.66),
    rise:2.5+(i%4)*.46,
    phase:i*.91,
    yaw:escapeA
  });
}

const secondaryBodyObj06B=new THREE.Object3D(),secondaryLeftObj06B=new THREE.Object3D(),secondaryRightObj06B=new THREE.Object3D();
let secondaryState06B='CALM',secondaryStateStart06B=performance.now(),secondaryResponses06B=0;
let primaryPrevState06B=primaryApi.state,disturbance06B=null,disturbanceEvents06B=0;

const secondaryStateEl06B=document.getElementById('worldBState');
const propagationStateEl06B=document.getElementById('worldLinkState');
const propagationDelayEl06B=document.getElementById('worldLinkDelay');
const secondaryDistanceEl06B=document.getElementById('worldBDistance');

function easeOut06B(p){return 1-Math.pow(1-p,3);}
function easeInOut06B(p){return p<.5?4*p*p*p:1-Math.pow(-2*p+2,3)/2;}
function playerToSecondaryDistance06B(){return Math.hypot(playerRoot.position.x-secondaryCenterX06B,playerRoot.position.z-secondaryCenterZ06B);}
function setSecondaryState06B(next,now){
  secondaryState06B=next;secondaryStateStart06B=now;
  if(secondaryStateEl06B){secondaryStateEl06B.textContent=next;secondaryStateEl06B.style.color=next==='CALM'?'#a8f0b5':next==='ALERT_DELAY'?'#ffe59a':next==='FLEEING'?'#ffd18a':next==='DISPERSED'?'#ffb095':'#b9d9ff';}
}
function setLinkState06B(text,color='#a8f0b5'){
  if(propagationStateEl06B){propagationStateEl06B.textContent=text;propagationStateEl06B.style.color=color;}
}
function emitDisturbance06B(now){
  disturbanceEvents06B++;
  disturbance06B={emittedAt:now,arrivalAt:now+propagationTravelMs06B,id:disturbanceEvents06B};
  if(secondaryState06B==='CALM'||secondaryState06B==='RETURNING')setSecondaryState06B('ALERT_DELAY',now);
  setLinkState06B('TRAVELING','#ffe59a');
  if(propagationDelayEl06B)propagationDelayEl06B.textContent=Math.round(propagationTravelMs06B)+' ms';
}
function poseSecondaryBird06B(b,i,now){
  const calmX=secondaryCenterX06B+b.px,calmZ=secondaryCenterZ06B+b.pz,calmY=groundHeight(calmX,calmZ)+.22;
  const destX=secondaryCenterX06B+b.ex,destZ=secondaryCenterZ06B+b.ez,destY=secondaryCenterY06B+b.rise;
  let x=calmX,y=calmY,z=calmZ,yaw=b.yaw,flight=0;
  const elapsed=now-secondaryStateStart06B;
  if(secondaryState06B==='CALM'||secondaryState06B==='ALERT_DELAY'){
    y+=Math.sin(now*.002+b.phase)*.021;
    yaw=b.phase*.34+Math.sin(now*.00072+b.phase)*.16;
    if(secondaryState06B==='ALERT_DELAY')y+=Math.sin(now*.014+b.phase)*.025;
  }else if(secondaryState06B==='FLEEING'){
    const p=Math.min(1,elapsed/PROPAGATION_06B.fleeMs),e=easeOut06B(p);
    x=THREE.MathUtils.lerp(calmX,destX,e);z=THREE.MathUtils.lerp(calmZ,destZ,e);
    y=THREE.MathUtils.lerp(calmY,destY,e)+Math.sin(p*Math.PI)*.68;
    flight=1;
  }else if(secondaryState06B==='DISPERSED'){
    const t=now*.00135+b.phase;
    x=destX+Math.cos(t)*.40;z=destZ+Math.sin(t)*.40;y=destY+Math.sin(t*1.75)*.16;
    yaw=t+Math.PI/2;flight=1;
  }else if(secondaryState06B==='RETURNING'){
    const p=Math.min(1,elapsed/PROPAGATION_06B.returnMs),e=easeInOut06B(p);
    x=THREE.MathUtils.lerp(destX,calmX,e);z=THREE.MathUtils.lerp(destZ,calmZ,e);
    y=THREE.MathUtils.lerp(destY,calmY,e)+Math.sin(p*Math.PI)*.78;
    yaw=b.yaw+Math.PI;flight=1;
  }
  const flap=flight?Math.sin(now*.0205+b.phase)*.72:Math.sin(now*.006+b.phase)*.08;
  secondaryBodyObj06B.position.set(x,y,z);secondaryBodyObj06B.rotation.set(0,yaw,0);secondaryBodyObj06B.scale.set(.88,.58,1.45);secondaryBodyObj06B.updateMatrix();secondaryBodies06B.setMatrixAt(i,secondaryBodyObj06B.matrix);
  const sx=Math.cos(yaw),sz=-Math.sin(yaw);
  secondaryLeftObj06B.position.set(x+sx*.13,y+.015,z+sz*.13);secondaryLeftObj06B.rotation.set(-Math.PI/2,yaw,flap);secondaryLeftObj06B.scale.set(1,1,1);secondaryLeftObj06B.updateMatrix();secondaryLeftWings06B.setMatrixAt(i,secondaryLeftObj06B.matrix);
  secondaryRightObj06B.position.set(x-sx*.13,y+.015,z-sz*.13);secondaryRightObj06B.rotation.set(-Math.PI/2,yaw,-flap);secondaryRightObj06B.scale.set(1,1,1);secondaryRightObj06B.updateMatrix();secondaryRightWings06B.setMatrixAt(i,secondaryRightObj06B.matrix);
}
function updateLivingWorld06B(now){
  const primaryState=primaryApi.state;
  const distB=playerToSecondaryDistance06B();
  if(secondaryDistanceEl06B)secondaryDistanceEl06B.textContent=distB.toFixed(1)+' m';

  // World-to-world trigger: only a new primary CALM/RETURNING -> FLEEING transition emits the event.
  if(primaryState==='FLEEING'&&primaryPrevState06B!=='FLEEING')emitDisturbance06B(now);
  primaryPrevState06B=primaryState;

  if(disturbance06B&&now>=disturbance06B.arrivalAt){
    disturbance06B=null;
    secondaryResponses06B++;
    setSecondaryState06B('FLEEING',now);
    setLinkState06B('ARRIVED ✓','#ffd18a');
  }

  if(secondaryState06B==='FLEEING'&&now-secondaryStateStart06B>=PROPAGATION_06B.fleeMs){
    setSecondaryState06B('DISPERSED',now);
  }else if(secondaryState06B==='DISPERSED'&&(primaryState==='RETURNING'||primaryState==='CALM')){
    setSecondaryState06B('RETURNING',now);
    setLinkState06B('RESETTING','#b9d9ff');
  }else if(secondaryState06B==='RETURNING'){
    if(disturbance06B){setSecondaryState06B('ALERT_DELAY',now);}
    else if(now-secondaryStateStart06B>=PROPAGATION_06B.returnMs){setSecondaryState06B('CALM',now);setLinkState06B('IDLE');}
  }

  for(let i=0;i<secondaryBirds06B.length;i++)poseSecondaryBird06B(secondaryBirds06B[i],i,now);
  secondaryBodies06B.instanceMatrix.needsUpdate=true;secondaryLeftWings06B.instanceMatrix.needsUpdate=true;secondaryRightWings06B.instanceMatrix.needsUpdate=true;
}
function livingWorld06BLoop(now){requestAnimationFrame(livingWorld06BLoop);updateLivingWorld06B(now);}
requestAnimationFrame(livingWorld06BLoop);

globalThis.__livingWorld06B={
  marker:LIVING_WORLD_06B_MARKER,
  get secondaryState(){return secondaryState06B;},
  get secondaryResponses(){return secondaryResponses06B;},
  get disturbanceEvents(){return disturbanceEvents06B;},
  get disturbanceTravelMs(){return propagationTravelMs06B;},
  get playerDistanceToSecondary(){return playerToSecondaryDistance06B();},
  directPlayerTrigger:false,
  source:'06A primary flock state transition'
};


// ---- Test 06C: Living World — local disturbance memory ----
const LIVING_WORLD_06C_MARKER='06C_LOCAL_DISTURBANCE_MEMORY';
const MEMORY_06C={
  reedCount:28,
  disturbedMs:2300,
  settlingMs:2800,
  directPlayerTrigger:false
};

const secondaryApi06C=globalThis.__livingWorld06B;
if(!secondaryApi06C||secondaryApi06C.marker!=='06B_WORLD_DISTURBANCE_PROPAGATION')throw new Error('06C requires frozen accepted 06B public world-state API');

// Reconstruct the accepted 06B secondary-flock location from the same spawn frame without
// reaching into frozen 06B private internals.
const memorySpawnYaw06C=Number.isFinite(playerRoot.rotation.y)?playerRoot.rotation.y:0;
const memorySpawnX06C=playerRoot.position.x,memorySpawnZ06C=playerRoot.position.z;
const memoryFwdX06C=Math.sin(memorySpawnYaw06C),memoryFwdZ06C=Math.cos(memorySpawnYaw06C);
const memoryRightX06C=Math.cos(memorySpawnYaw06C),memoryRightZ06C=-Math.sin(memorySpawnYaw06C);
const memorySecondaryX06C=memorySpawnX06C+memoryFwdX06C*15.5+memoryRightX06C*4.5;
const memorySecondaryZ06C=memorySpawnZ06C+memoryFwdZ06C*15.5+memoryRightZ06C*4.5;
const memoryCenterX06C=memorySpawnX06C+memoryFwdX06C*15.7+memoryRightX06C*6.2;
const memoryCenterZ06C=memorySpawnZ06C+memoryFwdZ06C*15.7+memoryRightZ06C*6.2;

// One natural world actor: a persistent reed patch. It is not player-triggered. The accepted
// Flock B takeoff is the only stimulus. The patch then holds and decays its own local state.
const memoryBladeGeo06C=new THREE.PlaneGeometry(.18,1.55,1,3);
memoryBladeGeo06C.translate(0,.775,0);
const memoryBladeMat06C=new THREE.MeshStandardMaterial({
  color:0x8f9a55,
  roughness:.96,
  metalness:0,
  side:THREE.DoubleSide
});
const memoryReeds06C=new THREE.InstancedMesh(memoryBladeGeo06C,memoryBladeMat06C,MEMORY_06C.reedCount);
memoryReeds06C.castShadow=true;
memoryReeds06C.receiveShadow=true;
// Dynamic instance transforms must remain visible through the entire memory cycle on mobile.
memoryReeds06C.frustumCulled=false;
scene.add(memoryReeds06C);

const memoryReedData06C=[];
for(let i=0;i<MEMORY_06C.reedCount;i++){
  const a=i*2.399963229728653;
  const ring=.35+(i%7)*.115;
  const px=Math.cos(a)*ring;
  const pz=Math.sin(a)*ring*.72;
  const scaleY=.76+((i*17)%9)*.035;
  const yaw=(i*.83)%Math.PI;
  memoryReedData06C.push({px,pz,scaleY,yaw,phase:i*.71});
}

let memoryState06C='CALM';
let memoryStateStart06C=performance.now();
let memoryEvents06C=0;
let memoryPrevSecondaryState06C=secondaryApi06C.secondaryState;
let memoryLastTrigger06C=0;

const memoryObj06C=new THREE.Object3D();
const memoryStateEl06C=document.getElementById('worldMemoryState');
const memoryAgeEl06C=document.getElementById('worldMemoryAge');
const memoryResultEl06C=document.getElementById('worldMemoryResult');

function setMemoryState06C(next,now){
  memoryState06C=next;
  memoryStateStart06C=now;
  if(memoryStateEl06C){
    memoryStateEl06C.textContent=next;
    memoryStateEl06C.style.color=next==='CALM'?'#a8f0b5':next==='DISTURBED'?'#ffd18a':'#b9d9ff';
  }
}
function triggerMemory06C(now){
  memoryEvents06C++;
  memoryLastTrigger06C=now;
  setMemoryState06C('DISTURBED',now);
  if(memoryResultEl06C){
    memoryResultEl06C.textContent='MEMORY ACTIVE ✓';
    memoryResultEl06C.style.color='#ffd18a';
  }
}
function memoryEnvelope06C(now,phase){
  const elapsed=now-memoryStateStart06C;
  if(memoryState06C==='DISTURBED'){
    const p=Math.min(1,elapsed/MEMORY_06C.disturbedMs);
    const hold=.34-.055*p;
    const ring=Math.sin(now*.012+phase)*.065;
    return hold+ring;
  }
  if(memoryState06C==='SETTLING'){
    const p=Math.min(1,elapsed/MEMORY_06C.settlingMs);
    const decay=1-p;
    return decay*(.27+.075*Math.sin(now*.010+phase));
  }
  return .018*Math.sin(now*.0018+phase);
}
function updateMemoryReeds06C(now){
  const dx=memoryCenterX06C-memorySecondaryX06C;
  const dz=memoryCenterZ06C-memorySecondaryZ06C;
  const len=Math.max(.0001,Math.hypot(dx,dz));
  const gustX=dx/len,gustZ=dz/len;

  for(let i=0;i<memoryReedData06C.length;i++){
    const b=memoryReedData06C[i];
    const x=memoryCenterX06C+b.px,z=memoryCenterZ06C+b.pz;
    const y=groundHeight(x,z)+.035;
    const mag=memoryEnvelope06C(now,b.phase);
    const variation=.82+((i*13)%7)*.045;
    const lean=mag*variation;
    memoryObj06C.position.set(x,y,z);
    memoryObj06C.rotation.set(gustZ*lean,b.yaw,-gustX*lean);
    memoryObj06C.scale.set(.8,b.scaleY,1);
    memoryObj06C.updateMatrix();
    memoryReeds06C.setMatrixAt(i,memoryObj06C.matrix);
  }
  memoryReeds06C.instanceMatrix.needsUpdate=true;
}
function updateLivingWorld06C(now){
  const secondaryState=secondaryApi06C.secondaryState;

  // The only trigger is the accepted Flock B transition into FLEEING.
  if(secondaryState==='FLEEING'&&memoryPrevSecondaryState06C!=='FLEEING')triggerMemory06C(now);
  memoryPrevSecondaryState06C=secondaryState;

  if(memoryState06C==='DISTURBED'&&now-memoryStateStart06C>=MEMORY_06C.disturbedMs){
    setMemoryState06C('SETTLING',now);
  }else if(memoryState06C==='SETTLING'&&now-memoryStateStart06C>=MEMORY_06C.settlingMs){
    setMemoryState06C('CALM',now);
    if(memoryResultEl06C)memoryResultEl06C.textContent='SETTLED';
  }

  if(memoryAgeEl06C){
    if(!memoryLastTrigger06C)memoryAgeEl06C.textContent='—';
    else memoryAgeEl06C.textContent=((now-memoryLastTrigger06C)/1000).toFixed(1)+' s';
  }

  updateMemoryReeds06C(now);
}
function livingWorld06CLoop(now){
  requestAnimationFrame(livingWorld06CLoop);
  updateLivingWorld06C(now);
}
requestAnimationFrame(livingWorld06CLoop);

globalThis.__livingWorld06C={
  marker:LIVING_WORLD_06C_MARKER,
  get state(){return memoryState06C;},
  get events(){return memoryEvents06C;},
  get ageMs(){return memoryLastTrigger06C?performance.now()-memoryLastTrigger06C:0;},
  disturbedMs:MEMORY_06C.disturbedMs,
  settlingMs:MEMORY_06C.settlingMs,
  directPlayerTrigger:false,
  source:'accepted 06B Flock B transition to FLEEING'
};


// ---- Test 06D: Living World — memory-informed autonomous route choice ----
const LIVING_WORLD_06D_MARKER='06D_MEMORY_INFORMS_ACTOR_BEHAVIOR';
const BEHAVIOR_06D={
  arrivalDelayMs:1800,
  avoidTravelMs:2450,
  calmHoldMs:550,
  directReturnMs:2500,
  detourOffsetM:2.8,
  directPlayerTrigger:false
};

const memoryApi06D=globalThis.__livingWorld06C;
if(!memoryApi06D||memoryApi06D.marker!=='06C_LOCAL_DISTURBANCE_MEMORY')throw new Error('06D requires frozen accepted 06C public world-memory API');

const spawnYaw06D=Number.isFinite(playerRoot.rotation.y)?playerRoot.rotation.y:0;
const spawnX06D=playerRoot.position.x,spawnZ06D=playerRoot.position.z;
const fwdX06D=Math.sin(spawnYaw06D),fwdZ06D=Math.cos(spawnYaw06D);
const rightX06D=Math.cos(spawnYaw06D),rightZ06D=-Math.sin(spawnYaw06D);

// Reconstruct the accepted 06C reed-patch center from the same deterministic spawn frame.
const memoryCenterX06D=spawnX06D+fwdX06D*15.7+rightX06D*6.2;
const memoryCenterZ06D=spawnZ06D+fwdZ06D*15.7+rightZ06D*6.2;
const routeStartX06D=memoryCenterX06D-rightX06D*3.4;
const routeStartZ06D=memoryCenterZ06D-rightZ06D*3.4;
const routeEndX06D=memoryCenterX06D+rightX06D*3.4;
const routeEndZ06D=memoryCenterZ06D+rightZ06D*3.4;
const detourX06D=memoryCenterX06D+fwdX06D*BEHAVIOR_06D.detourOffsetM;
const detourZ06D=memoryCenterZ06D+fwdZ06D*BEHAVIOR_06D.detourOffsetM;

// A tiny stylized hare/forager built from two instanced geometry families: rounded body parts + ears.
// It is a world actor, not a UI marker, and it has no direct player-proximity behavior.
const foragerRoot06D=new THREE.Group();
scene.add(foragerRoot06D);
const foragerBodyGeo06D=new THREE.DodecahedronGeometry(.5,1);
const foragerEarGeo06D=new THREE.ConeGeometry(.115,.55,7);
const foragerBodyMat06D=new THREE.MeshStandardMaterial({color:0x8a6547,roughness:.9,metalness:0});
const foragerEarMat06D=new THREE.MeshStandardMaterial({color:0x76523d,roughness:.92,metalness:0});
const foragerBodies06D=new THREE.InstancedMesh(foragerBodyGeo06D,foragerBodyMat06D,5);
const foragerEars06D=new THREE.InstancedMesh(foragerEarGeo06D,foragerEarMat06D,2);
foragerBodies06D.castShadow=true;foragerEars06D.castShadow=true;
foragerBodies06D.frustumCulled=false;foragerEars06D.frustumCulled=false;
foragerRoot06D.add(foragerBodies06D,foragerEars06D);

const partObj06D=new THREE.Object3D();
function setForagerPart06D(mesh,index,x,y,z,sx,sy,sz,rx=0,ry=0,rz=0){
  partObj06D.position.set(x,y,z);
  partObj06D.scale.set(sx,sy,sz);
  partObj06D.rotation.set(rx,ry,rz);
  partObj06D.updateMatrix();
  mesh.setMatrixAt(index,partObj06D.matrix);
}
setForagerPart06D(foragerBodies06D,0,0,.42,0,.72,.55,1.08);        // body
setForagerPart06D(foragerBodies06D,1,0,.62,.50,.48,.48,.48);       // head
setForagerPart06D(foragerBodies06D,2,-.33,.25,-.20,.32,.34,.38);   // hind leg L
setForagerPart06D(foragerBodies06D,3,.33,.25,-.20,.32,.34,.38);    // hind leg R
setForagerPart06D(foragerBodies06D,4,0,.48,-.60,.25,.25,.25);      // tail
setForagerPart06D(foragerEars06D,0,-.16,1.08,.49,.72,1.0,.72,-.10,0,-.08);
setForagerPart06D(foragerEars06D,1,.16,1.08,.49,.72,1.0,.72,-.10,0,.08);
foragerBodies06D.instanceMatrix.needsUpdate=true;
foragerEars06D.instanceMatrix.needsUpdate=true;

let behaviorState06D='WAITING';
let behaviorStateStart06D=performance.now();
let behaviorEvents06D=0;
let memoryEventSeen06D=memoryApi06D.events;
let routeChoice06D='NONE';
let directReturnEligibleAt06D=0;
let currentX06D=routeStartX06D,currentZ06D=routeStartZ06D;
let lastX06D=currentX06D,lastZ06D=currentZ06D;

const behaviorStateEl06D=document.getElementById('worldBehaviorState');
const routeChoiceEl06D=document.getElementById('worldRouteChoice');
const behaviorResultEl06D=document.getElementById('worldBehaviorResult');

function setBehaviorState06D(next,now){
  behaviorState06D=next;
  behaviorStateStart06D=now;
  if(behaviorStateEl06D){
    behaviorStateEl06D.textContent=next;
    behaviorStateEl06D.style.color=next==='WAITING'?'#d6d6d6':next==='AVOIDING'?'#ffd18a':next==='HOLDING'?'#ffe59a':next==='DIRECT_RETURN'?'#9fe0ff':'#a8f0b5';
  }
}
function setRouteChoice06D(choice,text,color){
  routeChoice06D=choice;
  if(routeChoiceEl06D){routeChoiceEl06D.textContent=text;routeChoiceEl06D.style.color=color;}
}
function bezier2_06D(a,b,c,t){
  const u=1-t;
  return u*u*a+2*u*t*b+t*t*c;
}
function smooth06D(t){return t*t*(3-2*t);}
function startAvoidance06D(now){
  behaviorEvents06D++;
  setBehaviorState06D('AVOIDING',now);
  setRouteChoice06D('MEMORY_DETOUR','DETOUR: MEMORY','#ffd18a');
  if(behaviorResultEl06D){behaviorResultEl06D.textContent='MEMORY CHANGED ROUTE ✓';behaviorResultEl06D.style.color='#ffd18a';}
}
function updateForagerPose06D(now){
  const dx=currentX06D-lastX06D,dz=currentZ06D-lastZ06D;
  const moving=Math.hypot(dx,dz)>.00001;
  let yaw=foragerRoot06D.rotation.y;
  if(moving)yaw=Math.atan2(dx,dz);
  const hop=(behaviorState06D==='AVOIDING'||behaviorState06D==='DIRECT_RETURN')?Math.max(0,Math.sin((now-behaviorStateStart06D)*.011))*0.12:0;
  const y=groundHeight(currentX06D,currentZ06D)+.03+hop;
  foragerRoot06D.position.set(currentX06D,y,currentZ06D);
  foragerRoot06D.rotation.y=yaw;
  lastX06D=currentX06D;lastZ06D=currentZ06D;
}
function updateLivingWorld06D(now){
  const memoryEvents=memoryApi06D.events;

  // A new accepted 06C memory event starts a delayed actor arrival. The actor intentionally
  // does not react to the birds directly; it arrives late and queries the surviving world state.
  if(memoryEvents>memoryEventSeen06D){
    memoryEventSeen06D=memoryEvents;
    currentX06D=routeStartX06D;currentZ06D=routeStartZ06D;
    setBehaviorState06D('ARRIVAL_DELAY',now);
    setRouteChoice06D('PENDING','READING WORLD…','#ffe59a');
    if(behaviorResultEl06D)behaviorResultEl06D.textContent='LATE ACTOR INBOUND';
  }

  if(behaviorState06D==='ARRIVAL_DELAY'&&now-behaviorStateStart06D>=BEHAVIOR_06D.arrivalDelayMs){
    // This is the test: route selection depends on persistent memory at arrival time, not on
    // the original bird event. Under frozen 06C timings this should select the detour.
    if(memoryApi06D.state!=='CALM')startAvoidance06D(now);
    else{
      setBehaviorState06D('DIRECT_RETURN',now);
      setRouteChoice06D('DIRECT','DIRECT: WORLD CLEAR','#9fe0ff');
    }
  }else if(behaviorState06D==='AVOIDING'){
    const p=Math.min(1,(now-behaviorStateStart06D)/BEHAVIOR_06D.avoidTravelMs),e=smooth06D(p);
    currentX06D=bezier2_06D(routeStartX06D,detourX06D,routeEndX06D,e);
    currentZ06D=bezier2_06D(routeStartZ06D,detourZ06D,routeEndZ06D,e);
    if(p>=1){
      currentX06D=routeEndX06D;currentZ06D=routeEndZ06D;
      setBehaviorState06D('HOLDING',now);
      directReturnEligibleAt06D=0;
      setRouteChoice06D('WAIT_FOR_CLEAR','WAITING FOR CLEAR','#ffe59a');
    }
  }else if(behaviorState06D==='HOLDING'){
    if(memoryApi06D.state==='CALM'){
      if(!directReturnEligibleAt06D)directReturnEligibleAt06D=now+BEHAVIOR_06D.calmHoldMs;
      if(now>=directReturnEligibleAt06D){
        setBehaviorState06D('DIRECT_RETURN',now);
        setRouteChoice06D('DIRECT','DIRECT: MEMORY CLEARED','#9fe0ff');
      }
    }else directReturnEligibleAt06D=0;
  }else if(behaviorState06D==='DIRECT_RETURN'){
    const p=Math.min(1,(now-behaviorStateStart06D)/BEHAVIOR_06D.directReturnMs),e=smooth06D(p);
    currentX06D=THREE.MathUtils.lerp(routeEndX06D,routeStartX06D,e);
    currentZ06D=THREE.MathUtils.lerp(routeEndZ06D,routeStartZ06D,e);
    if(p>=1){
      currentX06D=routeStartX06D;currentZ06D=routeStartZ06D;
      setBehaviorState06D('COMPLETE',now);
      setRouteChoice06D('PROVED','DETOUR THEN DIRECT ✓','#a8f0b5');
      if(behaviorResultEl06D){behaviorResultEl06D.textContent='WORLD STATE AFFECTED BEHAVIOR ✓';behaviorResultEl06D.style.color='#a8f0b5';}
    }
  }

  updateForagerPose06D(now);
}
function livingWorld06DLoop(now){
  requestAnimationFrame(livingWorld06DLoop);
  updateLivingWorld06D(now);
}
requestAnimationFrame(livingWorld06DLoop);

globalThis.__livingWorld06D={
  marker:LIVING_WORLD_06D_MARKER,
  get state(){return behaviorState06D;},
  get routeChoice(){return routeChoice06D;},
  get events(){return behaviorEvents06D;},
  directPlayerTrigger:false,
  reads:'06C persistent world-memory state',
  arrivalDelayMs:BEHAVIOR_06D.arrivalDelayMs,
  avoidTravelMs:BEHAVIOR_06D.avoidTravelMs,
  directReturnMs:BEHAVIOR_06D.directReturnMs
};


// ---- Test 06E: Living World — spatially scoped world memory ----
const LIVING_WORLD_06E_MARKER='06E_SPATIALLY_SCOPED_MEMORY';
const SPATIAL_06E={
  arrivalDelayMs:1800,
  travelMs:2450,
  memoryRadiusM:1.8,
  laneOffsetM:3.35,
  directPlayerTrigger:false
};

const memoryApi06E=globalThis.__livingWorld06C;
const behaviorApi06E=globalThis.__livingWorld06D;
if(!memoryApi06E||memoryApi06E.marker!=='06C_LOCAL_DISTURBANCE_MEMORY')throw new Error('06E requires frozen accepted 06C memory API');
if(!behaviorApi06E||behaviorApi06E.marker!=='06D_MEMORY_INFORMS_ACTOR_BEHAVIOR')throw new Error('06E requires frozen accepted 06D behavior API');

const spawnYaw06E=Number.isFinite(playerRoot.rotation.y)?playerRoot.rotation.y:0;
const spawnX06E=playerRoot.position.x,spawnZ06E=playerRoot.position.z;
const fwdX06E=Math.sin(spawnYaw06E),fwdZ06E=Math.cos(spawnYaw06E);
const rightX06E=Math.cos(spawnYaw06E),rightZ06E=-Math.sin(spawnYaw06E);

const memoryCenterX06E=spawnX06E+fwdX06E*15.7+rightX06E*6.2;
const memoryCenterZ06E=spawnZ06E+fwdZ06E*15.7+rightZ06E*6.2;

// Control lane runs parallel to the accepted 06D path but outside the remembered location.
// It sees the same active memory state; only spatial overlap differs.
const controlLaneCenterX06E=memoryCenterX06E-fwdX06E*SPATIAL_06E.laneOffsetM;
const controlLaneCenterZ06E=memoryCenterZ06E-fwdZ06E*SPATIAL_06E.laneOffsetM;
const controlStartX06E=controlLaneCenterX06E-rightX06E*3.4;
const controlStartZ06E=controlLaneCenterZ06E-rightZ06E*3.4;
const controlEndX06E=controlLaneCenterX06E+rightX06E*3.4;
const controlEndZ06E=controlLaneCenterZ06E+rightZ06E*3.4;

function pointSegmentDistance06E(px,pz,ax,az,bx,bz){
  const abx=bx-ax,abz=bz-az;
  const denom=abx*abx+abz*abz;
  const t=denom>1e-9?THREE.MathUtils.clamp(((px-ax)*abx+(pz-az)*abz)/denom,0,1):0;
  const cx=ax+abx*t,cz=az+abz*t;
  return Math.hypot(px-cx,pz-cz);
}
const controlPathDistanceToMemory06E=pointSegmentDistance06E(
  memoryCenterX06E,memoryCenterZ06E,
  controlStartX06E,controlStartZ06E,
  controlEndX06E,controlEndZ06E
);

// A second stylized forager acts as the spatial control. Gray material distinguishes it
// from the accepted brown 06D forager without changing the accepted actor.
const controlRoot06E=new THREE.Group();
scene.add(controlRoot06E);
const controlBodyGeo06E=new THREE.DodecahedronGeometry(.5,1);
const controlEarGeo06E=new THREE.ConeGeometry(.115,.55,7);
const controlBodyMat06E=new THREE.MeshStandardMaterial({color:0x7c8385,roughness:.91,metalness:0});
const controlEarMat06E=new THREE.MeshStandardMaterial({color:0x666d70,roughness:.93,metalness:0});
const controlBodies06E=new THREE.InstancedMesh(controlBodyGeo06E,controlBodyMat06E,5);
const controlEars06E=new THREE.InstancedMesh(controlEarGeo06E,controlEarMat06E,2);
controlBodies06E.castShadow=true;controlEars06E.castShadow=true;
controlBodies06E.frustumCulled=false;controlEars06E.frustumCulled=false;
controlRoot06E.add(controlBodies06E,controlEars06E);

const controlPart06E=new THREE.Object3D();
function setControlPart06E(mesh,index,x,y,z,sx,sy,sz,rx=0,ry=0,rz=0){
  controlPart06E.position.set(x,y,z);
  controlPart06E.scale.set(sx,sy,sz);
  controlPart06E.rotation.set(rx,ry,rz);
  controlPart06E.updateMatrix();
  mesh.setMatrixAt(index,controlPart06E.matrix);
}
setControlPart06E(controlBodies06E,0,0,.42,0,.72,.55,1.08);
setControlPart06E(controlBodies06E,1,0,.62,.50,.48,.48,.48);
setControlPart06E(controlBodies06E,2,-.33,.25,-.20,.32,.34,.38);
setControlPart06E(controlBodies06E,3,.33,.25,-.20,.32,.34,.38);
setControlPart06E(controlBodies06E,4,0,.48,-.60,.25,.25,.25);
setControlPart06E(controlEars06E,0,-.16,1.08,.49,.72,1,.72,-.10,0,-.08);
setControlPart06E(controlEars06E,1,.16,1.08,.49,.72,1,.72,-.10,0,.08);
controlBodies06E.instanceMatrix.needsUpdate=true;
controlEars06E.instanceMatrix.needsUpdate=true;

let spatialState06E='WAITING';
let spatialStateStart06E=performance.now();
let spatialEvents06E=0;
let memoryEventSeen06E=memoryApi06E.events;
let spatialOverlap06E=false;
let spatialChoice06E='NONE';
let controlX06E=controlStartX06E,controlZ06E=controlStartZ06E;
let controlPrevX06E=controlX06E,controlPrevZ06E=controlZ06E;

const spatialStateEl06E=document.getElementById('worldSpatialState');
const spatialOverlapEl06E=document.getElementById('worldSpatialOverlap');
const spatialChoiceEl06E=document.getElementById('worldSpatialChoice');
const spatialResultEl06E=document.getElementById('worldSpatialResult');

function setSpatialState06E(next,now){
  spatialState06E=next;spatialStateStart06E=now;
  if(spatialStateEl06E){
    spatialStateEl06E.textContent=next;
    spatialStateEl06E.style.color=next==='WAITING'?'#d6d6d6':next==='ARRIVAL_DELAY'?'#ffe59a':next==='DIRECT'?'#9fe0ff':next==='AVOIDING'?'#ffd18a':'#a8f0b5';
  }
}
function setSpatialChoice06E(choice,text,color){
  spatialChoice06E=choice;
  if(spatialChoiceEl06E){spatialChoiceEl06E.textContent=text;spatialChoiceEl06E.style.color=color;}
}
function smoothSpatial06E(t){return t*t*(3-2*t);}
function updateControlPose06E(now){
  const dx=controlX06E-controlPrevX06E,dz=controlZ06E-controlPrevZ06E;
  if(Math.hypot(dx,dz)>.00001)controlRoot06E.rotation.y=Math.atan2(dx,dz);
  const moving=spatialState06E==='DIRECT'||spatialState06E==='AVOIDING';
  const hop=moving?Math.max(0,Math.sin((now-spatialStateStart06E)*.011))*0.11:0;
  controlRoot06E.position.set(controlX06E,groundHeight(controlX06E,controlZ06E)+.03+hop,controlZ06E);
  controlPrevX06E=controlX06E;controlPrevZ06E=controlZ06E;
}
function updateLivingWorld06E(now){
  const memoryEvents=memoryApi06E.events;

  if(memoryEvents>memoryEventSeen06E){
    memoryEventSeen06E=memoryEvents;
    spatialEvents06E++;
    controlX06E=controlStartX06E;controlZ06E=controlStartZ06E;
    controlPrevX06E=controlX06E;controlPrevZ06E=controlZ06E;
    setSpatialState06E('ARRIVAL_DELAY',now);
    setSpatialChoice06E('PENDING','SAME MEMORY · CHECKING SPACE','#ffe59a');
    if(spatialResultEl06E)spatialResultEl06E.textContent='CONTROL ACTOR INBOUND';
  }

  if(spatialState06E==='ARRIVAL_DELAY'&&now-spatialStateStart06E>=SPATIAL_06E.arrivalDelayMs){
    const memoryActive=memoryApi06E.state!=='CALM';
    spatialOverlap06E=controlPathDistanceToMemory06E<=SPATIAL_06E.memoryRadiusM;
    if(spatialOverlapEl06E){
      spatialOverlapEl06E.textContent=spatialOverlap06E?'YES':'NO';
      spatialOverlapEl06E.style.color=spatialOverlap06E?'#ffd18a':'#a8f0b5';
    }

    // Same active world memory, but no path overlap -> no behavioral effect.
    if(memoryActive&&spatialOverlap06E){
      setSpatialState06E('AVOIDING',now);
      setSpatialChoice06E('DETOUR','DETOUR: LOCAL MEMORY','#ffd18a');
    }else{
      setSpatialState06E('DIRECT',now);
      setSpatialChoice06E('DIRECT','DIRECT: OUTSIDE MEMORY','#9fe0ff');
      if(spatialResultEl06E){
        spatialResultEl06E.textContent=memoryActive?'MEMORY ACTIVE · ACTOR UNAFFECTED ✓':'WORLD CLEAR · DIRECT';
        spatialResultEl06E.style.color='#a8f0b5';
      }
    }
  }else if(spatialState06E==='DIRECT'){
    const p=Math.min(1,(now-spatialStateStart06E)/SPATIAL_06E.travelMs),e=smoothSpatial06E(p);
    controlX06E=THREE.MathUtils.lerp(controlStartX06E,controlEndX06E,e);
    controlZ06E=THREE.MathUtils.lerp(controlStartZ06E,controlEndZ06E,e);
    if(p>=1){
      controlX06E=controlEndX06E;controlZ06E=controlEndZ06E;
      setSpatialState06E('COMPLETE',now);
      setSpatialChoice06E('PROVED','LOCAL SCOPE ✓','#a8f0b5');
      if(spatialResultEl06E){spatialResultEl06E.textContent='SAME MEMORY · DIFFERENT LOCATION · NO EFFECT ✓';spatialResultEl06E.style.color='#a8f0b5';}
    }
  }else if(spatialState06E==='AVOIDING'){
    // Defensive path: should not occur for this control lane. If it does, verification remains
    // mechanically honest and the human review will clearly show the unexpected detour.
    const p=Math.min(1,(now-spatialStateStart06E)/SPATIAL_06E.travelMs),e=smoothSpatial06E(p);
    const midX=(controlStartX06E+controlEndX06E)*.5-fwdX06E*2.0;
    const midZ=(controlStartZ06E+controlEndZ06E)*.5-fwdZ06E*2.0;
    const u=1-e;
    controlX06E=u*u*controlStartX06E+2*u*e*midX+e*e*controlEndX06E;
    controlZ06E=u*u*controlStartZ06E+2*u*e*midZ+e*e*controlEndZ06E;
    if(p>=1)setSpatialState06E('COMPLETE',now);
  }

  updateControlPose06E(now);
}
function livingWorld06ELoop(now){
  requestAnimationFrame(livingWorld06ELoop);
  updateLivingWorld06E(now);
}
requestAnimationFrame(livingWorld06ELoop);

if(spatialOverlapEl06E)spatialOverlapEl06E.textContent='PENDING';

globalThis.__livingWorld06E={
  marker:LIVING_WORLD_06E_MARKER,
  get state(){return spatialState06E;},
  get overlap(){return spatialOverlap06E;},
  get choice(){return spatialChoice06E;},
  get events(){return spatialEvents06E;},
  directPlayerTrigger:false,
  memoryRadiusM:SPATIAL_06E.memoryRadiusM,
  controlPathDistanceToMemoryM:controlPathDistanceToMemory06E,
  expectedOverlap:false,
  reads:'same 06C memory state with spatial path query'
};


// ---- Test 06F: Living World — deterministic stimulus priority / arbitration ----
const LIVING_WORLD_06F_MARKER='06F_STIMULUS_PRIORITY_ARBITRATION';
const ARB_06F={
  arrivalDelayMs:1800,
  foodBecomesValidAfterMs:120,
  arbitrationDelayMs:180,
  hazardPriority:100,
  foodPriority:40,
  escapeTravelMs:2550,
  escapeOffsetM:3.2,
  directPlayerTrigger:false
};

const memoryApi06F=globalThis.__livingWorld06C;
const spatialApi06F=globalThis.__livingWorld06E;
if(!memoryApi06F||memoryApi06F.marker!=='06C_LOCAL_DISTURBANCE_MEMORY')throw new Error('06F requires frozen accepted 06C memory API');
if(!spatialApi06F||spatialApi06F.marker!=='06E_SPATIALLY_SCOPED_MEMORY')throw new Error('06F requires frozen accepted 06E spatial-memory API');

const spawnYaw06F=Number.isFinite(playerRoot.rotation.y)?playerRoot.rotation.y:0;
const spawnX06F=playerRoot.position.x,spawnZ06F=playerRoot.position.z;
const fwdX06F=Math.sin(spawnYaw06F),fwdZ06F=Math.cos(spawnYaw06F);
const rightX06F=Math.cos(spawnYaw06F),rightZ06F=-Math.sin(spawnYaw06F);

const memoryCenterX06F=spawnX06F+fwdX06F*15.7+rightX06F*6.2;
const memoryCenterZ06F=spawnZ06F+fwdZ06F*15.7+rightZ06F*6.2;

// Arbitration actor starts on a path that would normally cross the remembered location toward food.
const arbStartX06F=memoryCenterX06F-rightX06F*3.9-fwdX06F*.65;
const arbStartZ06F=memoryCenterZ06F-rightZ06F*3.9-fwdZ06F*.65;
const foodX06F=memoryCenterX06F+rightX06F*3.7;
const foodZ06F=memoryCenterZ06F+rightZ06F*3.7;
const escapeX06F=arbStartX06F-fwdX06F*ARB_06F.escapeOffsetM-rightX06F*.8;
const escapeZ06F=arbStartZ06F-fwdZ06F*ARB_06F.escapeOffsetM-rightZ06F*.8;

// Amber forager = the arbitration subject.
const arbRoot06F=new THREE.Group();
scene.add(arbRoot06F);
const arbBodyGeo06F=new THREE.DodecahedronGeometry(.5,1);
const arbEarGeo06F=new THREE.ConeGeometry(.115,.55,7);
const arbBodyMat06F=new THREE.MeshStandardMaterial({color:0xb97c37,roughness:.9,metalness:0});
const arbEarMat06F=new THREE.MeshStandardMaterial({color:0x9b642f,roughness:.92,metalness:0});
const arbBodies06F=new THREE.InstancedMesh(arbBodyGeo06F,arbBodyMat06F,5);
const arbEars06F=new THREE.InstancedMesh(arbEarGeo06F,arbEarMat06F,2);
arbBodies06F.castShadow=true;arbEars06F.castShadow=true;
arbBodies06F.frustumCulled=false;arbEars06F.frustumCulled=false;
arbRoot06F.add(arbBodies06F,arbEars06F);

const arbPart06F=new THREE.Object3D();
function setArbPart06F(mesh,index,x,y,z,sx,sy,sz,rx=0,ry=0,rz=0){
  arbPart06F.position.set(x,y,z);arbPart06F.scale.set(sx,sy,sz);arbPart06F.rotation.set(rx,ry,rz);arbPart06F.updateMatrix();mesh.setMatrixAt(index,arbPart06F.matrix);
}
setArbPart06F(arbBodies06F,0,0,.42,0,.72,.55,1.08);
setArbPart06F(arbBodies06F,1,0,.62,.50,.48,.48,.48);
setArbPart06F(arbBodies06F,2,-.33,.25,-.20,.32,.34,.38);
setArbPart06F(arbBodies06F,3,.33,.25,-.20,.32,.34,.38);
setArbPart06F(arbBodies06F,4,0,.48,-.60,.25,.25,.25);
setArbPart06F(arbEars06F,0,-.16,1.08,.49,.72,1,.72,-.10,0,-.08);
setArbPart06F(arbEars06F,1,.16,1.08,.49,.72,1,.72,-.10,0,.08);
arbBodies06F.instanceMatrix.needsUpdate=true;arbEars06F.instanceMatrix.needsUpdate=true;

// Small visible food target beyond the remembered patch.
const foodGeo06F=new THREE.SphereGeometry(.13,7,5);
const foodMat06F=new THREE.MeshStandardMaterial({color:0x6e9d46,roughness:.86,metalness:0});
const foodMesh06F=new THREE.InstancedMesh(foodGeo06F,foodMat06F,7);
foodMesh06F.frustumCulled=false;
const foodPart06F=new THREE.Object3D();
for(let i=0;i<7;i++){
  const a=i*2.399963229728653,r=.12+(i%3)*.09;
  const x=foodX06F+Math.cos(a)*r,z=foodZ06F+Math.sin(a)*r;
  foodPart06F.position.set(x,groundHeight(x,z)+.12+(i%2)*.04,z);
  foodPart06F.scale.set(1,1,1);
  foodPart06F.updateMatrix();
  foodMesh06F.setMatrixAt(i,foodPart06F.matrix);
}
foodMesh06F.instanceMatrix.needsUpdate=true;
scene.add(foodMesh06F);

let arbState06F='WAITING';
let arbStateStart06F=performance.now();
let arbMemoryEventSeen06F=memoryApi06F.events;
let arbEvents06F=0;
let arbChoice06F='NONE';
let arbLastStimulus06F='NONE';
let arbHazardValid06F=false;
let arbFoodValid06F=false;
let arbFoodValidAt06F=0;
let arbDecisionAt06F=0;
let arbX06F=arbStartX06F,arbZ06F=arbStartZ06F;
let arbPrevX06F=arbX06F,arbPrevZ06F=arbZ06F;

const arbStateEl06F=document.getElementById('worldArbState');
const arbCandidatesEl06F=document.getElementById('worldArbCandidates');
const arbLastEl06F=document.getElementById('worldArbLast');
const arbWinnerEl06F=document.getElementById('worldArbWinner');
const arbResultEl06F=document.getElementById('worldArbResult');

function setArbState06F(next,now){
  arbState06F=next;arbStateStart06F=now;
  if(arbStateEl06F){
    arbStateEl06F.textContent=next;
    arbStateEl06F.style.color=next==='WAITING'?'#d6d6d6':next==='ARRIVAL_DELAY'?'#ffe59a':next==='ARBITRATING'?'#ffe59a':next==='ESCAPING'?'#ffd18a':'#a8f0b5';
  }
}
function setArbWinner06F(choice,text,color){
  arbChoice06F=choice;
  if(arbWinnerEl06F){arbWinnerEl06F.textContent=text;arbWinnerEl06F.style.color=color;}
}
function smoothArb06F(t){return t*t*(3-2*t);}
function updateArbPose06F(now){
  const dx=arbX06F-arbPrevX06F,dz=arbZ06F-arbPrevZ06F;
  if(Math.hypot(dx,dz)>.00001)arbRoot06F.rotation.y=Math.atan2(dx,dz);
  const moving=arbState06F==='ESCAPING';
  const hop=moving?Math.max(0,Math.sin((now-arbStateStart06F)*.012))*0.115:0;
  arbRoot06F.position.set(arbX06F,groundHeight(arbX06F,arbZ06F)+.03+hop,arbZ06F);
  arbPrevX06F=arbX06F;arbPrevZ06F=arbZ06F;
}
function beginArbitration06F(now){
  arbEvents06F++;
  arbX06F=arbStartX06F;arbZ06F=arbStartZ06F;arbPrevX06F=arbX06F;arbPrevZ06F=arbZ06F;
  arbHazardValid06F=false;arbFoodValid06F=false;
  arbLastStimulus06F='NONE';
  arbFoodValidAt06F=0;arbDecisionAt06F=0;
  setArbState06F('ARRIVAL_DELAY',now);
  setArbWinner06F('PENDING','PENDING','#ffe59a');
  if(arbCandidatesEl06F)arbCandidatesEl06F.textContent='WAITING';
  if(arbLastEl06F)arbLastEl06F.textContent='NONE';
  if(arbResultEl06F)arbResultEl06F.textContent='ACTOR INBOUND';
}
function chooseHighestPriority06F(now){
  const candidates=[];
  if(arbHazardValid06F)candidates.push({id:'HAZARD',priority:ARB_06F.hazardPriority});
  if(arbFoodValid06F)candidates.push({id:'FOOD',priority:ARB_06F.foodPriority});
  candidates.sort((a,b)=>b.priority-a.priority||a.id.localeCompare(b.id));
  const winner=candidates[0]?.id||'NONE';
  if(arbCandidatesEl06F)arbCandidatesEl06F.textContent=`HAZARD ${ARB_06F.hazardPriority} · FOOD ${ARB_06F.foodPriority}`;

  if(winner==='HAZARD'){
    setArbWinner06F('HAZARD','HAZARD 100','#ffd18a');
    setArbState06F('ESCAPING',now);
    if(arbResultEl06F){arbResultEl06F.textContent='NEWER FOOD LOST TO HIGHER PRIORITY ✓';arbResultEl06F.style.color='#a8f0b5';}
  }else if(winner==='FOOD'){
    setArbWinner06F('FOOD','FOOD 40','#9fe0ff');
    setArbState06F('COMPLETE',now);
    if(arbResultEl06F){arbResultEl06F.textContent='FOOD WON';arbResultEl06F.style.color='#9fe0ff';}
  }else{
    setArbWinner06F('NONE','NONE','#d6d6d6');
    setArbState06F('COMPLETE',now);
  }
}
function updateLivingWorld06F(now){
  const memoryEvents=memoryApi06F.events;

  if(memoryEvents>arbMemoryEventSeen06F){
    arbMemoryEventSeen06F=memoryEvents;
    beginArbitration06F(now);
  }

  if(arbState06F==='ARRIVAL_DELAY'&&now-arbStateStart06F>=ARB_06F.arrivalDelayMs){
    // Hazard is established first from persistent local memory.
    arbHazardValid06F=memoryApi06F.state!=='CALM';
    if(arbHazardValid06F){
      arbLastStimulus06F='HAZARD';
      if(arbLastEl06F)arbLastEl06F.textContent='HAZARD';
    }
    arbFoodValidAt06F=now+ARB_06F.foodBecomesValidAfterMs;
    arbDecisionAt06F=now+ARB_06F.arbitrationDelayMs;
    setArbState06F('ARBITRATING',now);
  }else if(arbState06F==='ARBITRATING'){
    // Food intentionally becomes valid later. A last-event system would therefore pick FOOD.
    if(!arbFoodValid06F&&now>=arbFoodValidAt06F){
      arbFoodValid06F=true;
      arbLastStimulus06F='FOOD';
      if(arbLastEl06F){arbLastEl06F.textContent='FOOD (NEWER)';arbLastEl06F.style.color='#9fe0ff';}
    }
    if(now>=arbDecisionAt06F)chooseHighestPriority06F(now);
  }else if(arbState06F==='ESCAPING'){
    const p=Math.min(1,(now-arbStateStart06F)/ARB_06F.escapeTravelMs),e=smoothArb06F(p);
    // Escape away from the remembered location instead of taking the direct food line.
    arbX06F=THREE.MathUtils.lerp(arbStartX06F,escapeX06F,e);
    arbZ06F=THREE.MathUtils.lerp(arbStartZ06F,escapeZ06F,e);
    if(p>=1){
      arbX06F=escapeX06F;arbZ06F=escapeZ06F;
      setArbState06F('COMPLETE',now);
      setArbWinner06F('PROVED','HAZARD WON ✓','#a8f0b5');
      if(arbResultEl06F){arbResultEl06F.textContent='PRIORITY > RECENCY ✓';arbResultEl06F.style.color='#a8f0b5';}
    }
  }

  updateArbPose06F(now);
}
function livingWorld06FLoop(now){
  requestAnimationFrame(livingWorld06FLoop);
  updateLivingWorld06F(now);
}
requestAnimationFrame(livingWorld06FLoop);

globalThis.__livingWorld06F={
  marker:LIVING_WORLD_06F_MARKER,
  get state(){return arbState06F;},
  get winner(){return arbChoice06F;},
  get lastStimulus(){return arbLastStimulus06F;},
  get events(){return arbEvents06F;},
  priorities:{hazard:ARB_06F.hazardPriority,food:ARB_06F.foodPriority},
  foodBecomesValidAfterMs:ARB_06F.foodBecomesValidAfterMs,
  arbitrationDelayMs:ARB_06F.arbitrationDelayMs,
  directPlayerTrigger:false,
  rule:'highest priority wins; event recency is not decision authority'
};


// ---- Test 06G: Living World — interrupted goal recovery ----
const LIVING_WORLD_06G_MARKER='06G_INTERRUPTED_GOAL_RECOVERY';
const RECOVERY_06G={
  preGoalTravelMs:6200,
  preGoalCap:0.34,
  evadeTravelMs:1450,
  recoverHoldMs:450,
  resumeTravelMs:3000,
  evadeOffsetM:3.0,
  directPlayerTrigger:false
};

const memoryApi06G=globalThis.__livingWorld06C;
const arbApi06G=globalThis.__livingWorld06F;
if(!memoryApi06G||memoryApi06G.marker!=='06C_LOCAL_DISTURBANCE_MEMORY')throw new Error('06G requires frozen accepted 06C memory API');
if(!arbApi06G||arbApi06G.marker!=='06F_STIMULUS_PRIORITY_ARBITRATION')throw new Error('06G requires frozen accepted 06F arbitration API');

const spawnYaw06G=Number.isFinite(playerRoot.rotation.y)?playerRoot.rotation.y:0;
const spawnX06G=playerRoot.position.x,spawnZ06G=playerRoot.position.z;
const fwdX06G=Math.sin(spawnYaw06G),fwdZ06G=Math.cos(spawnYaw06G);
const rightX06G=Math.cos(spawnYaw06G),rightZ06G=-Math.sin(spawnYaw06G);

const memoryCenterX06G=spawnX06G+fwdX06G*15.7+rightX06G*6.2;
const memoryCenterZ06G=spawnZ06G+fwdZ06G*15.7+rightZ06G*6.2;
const goalStartX06G=memoryCenterX06G-rightX06G*4.4+fwdX06G*.9;
const goalStartZ06G=memoryCenterZ06G-rightZ06G*4.4+fwdZ06G*.9;
const foodX06G=memoryCenterX06G+rightX06G*4.0+fwdX06G*.8;
const foodZ06G=memoryCenterZ06G+rightZ06G*4.0+fwdZ06G*.8;
const evadeX06G=memoryCenterX06G-fwdX06G*RECOVERY_06G.evadeOffsetM-rightX06G*1.2;
const evadeZ06G=memoryCenterZ06G-fwdZ06G*RECOVERY_06G.evadeOffsetM-rightZ06G*1.2;

// Teal forager = continuity subject. It has an active food goal before any disturbance occurs.
const recoveryRoot06G=new THREE.Group();
scene.add(recoveryRoot06G);
const recoveryBodyGeo06G=new THREE.DodecahedronGeometry(.5,1);
const recoveryEarGeo06G=new THREE.ConeGeometry(.115,.55,7);
const recoveryBodyMat06G=new THREE.MeshStandardMaterial({color:0x3f8f88,roughness:.9,metalness:0});
const recoveryEarMat06G=new THREE.MeshStandardMaterial({color:0x34766f,roughness:.92,metalness:0});
const recoveryBodies06G=new THREE.InstancedMesh(recoveryBodyGeo06G,recoveryBodyMat06G,5);
const recoveryEars06G=new THREE.InstancedMesh(recoveryEarGeo06G,recoveryEarMat06G,2);
recoveryBodies06G.castShadow=true;recoveryEars06G.castShadow=true;
recoveryBodies06G.frustumCulled=false;recoveryEars06G.frustumCulled=false;
recoveryRoot06G.add(recoveryBodies06G,recoveryEars06G);

const recoveryPart06G=new THREE.Object3D();
function setRecoveryPart06G(mesh,index,x,y,z,sx,sy,sz,rx=0,ry=0,rz=0){
  recoveryPart06G.position.set(x,y,z);recoveryPart06G.scale.set(sx,sy,sz);recoveryPart06G.rotation.set(rx,ry,rz);recoveryPart06G.updateMatrix();mesh.setMatrixAt(index,recoveryPart06G.matrix);
}
setRecoveryPart06G(recoveryBodies06G,0,0,.42,0,.72,.55,1.08);
setRecoveryPart06G(recoveryBodies06G,1,0,.62,.50,.48,.48,.48);
setRecoveryPart06G(recoveryBodies06G,2,-.33,.25,-.20,.32,.34,.38);
setRecoveryPart06G(recoveryBodies06G,3,.33,.25,-.20,.32,.34,.38);
setRecoveryPart06G(recoveryBodies06G,4,0,.48,-.60,.25,.25,.25);
setRecoveryPart06G(recoveryEars06G,0,-.16,1.08,.49,.72,1,.72,-.10,0,-.08);
setRecoveryPart06G(recoveryEars06G,1,.16,1.08,.49,.72,1,.72,-.10,0,.08);
recoveryBodies06G.instanceMatrix.needsUpdate=true;recoveryEars06G.instanceMatrix.needsUpdate=true;

// Separate visible food patch for the continuity actor.
const recoveryFoodGeo06G=new THREE.SphereGeometry(.13,7,5);
const recoveryFoodMat06G=new THREE.MeshStandardMaterial({color:0x7fbf54,roughness:.86,metalness:0});
const recoveryFood06G=new THREE.InstancedMesh(recoveryFoodGeo06G,recoveryFoodMat06G,7);
recoveryFood06G.frustumCulled=false;
const recoveryFoodPart06G=new THREE.Object3D();
for(let i=0;i<7;i++){
  const a=i*2.399963229728653,r=.12+(i%3)*.09;
  const x=foodX06G+Math.cos(a)*r,z=foodZ06G+Math.sin(a)*r;
  recoveryFoodPart06G.position.set(x,groundHeight(x,z)+.12+(i%2)*.04,z);
  recoveryFoodPart06G.scale.set(1,1,1);recoveryFoodPart06G.updateMatrix();
  recoveryFood06G.setMatrixAt(i,recoveryFoodPart06G.matrix);
}
recoveryFood06G.instanceMatrix.needsUpdate=true;
scene.add(recoveryFood06G);

let recoveryState06G='SEEKING_FOOD';
let recoveryStateStart06G=performance.now();
let recoveryMemoryEventSeen06G=memoryApi06G.events;
let recoveryEvents06G=0;
let recoveryGoal06G='FOOD';
let recoverySuspendedGoal06G='NONE';
let recoveryInterrupt06G='NONE';
let recoveryX06G=goalStartX06G,recoveryZ06G=goalStartZ06G;
let recoveryPrevX06G=recoveryX06G,recoveryPrevZ06G=recoveryZ06G;
let interruptionStartX06G=goalStartX06G,interruptionStartZ06G=goalStartZ06G;
let resumeStartX06G=evadeX06G,resumeStartZ06G=evadeZ06G;
let recoveryClearSince06G=0;

const recoveryStateEl06G=document.getElementById('worldRecoveryState');
const recoveryGoalEl06G=document.getElementById('worldRecoveryGoal');
const recoverySuspendedEl06G=document.getElementById('worldRecoverySuspended');
const recoveryInterruptEl06G=document.getElementById('worldRecoveryInterrupt');
const recoveryResultEl06G=document.getElementById('worldRecoveryResult');

function setRecoveryState06G(next,now){
  recoveryState06G=next;recoveryStateStart06G=now;
  if(recoveryStateEl06G){
    recoveryStateEl06G.textContent=next;
    recoveryStateEl06G.style.color=next==='SEEKING_FOOD'?'#9fe0ff':next==='EVADING'?'#ffd18a':next==='WAIT_CLEAR'?'#ffe59a':next==='RESUMING_FOOD'?'#9fe0ff':'#a8f0b5';
  }
}
function setRecoveryGoal06G(goal){
  recoveryGoal06G=goal;
  if(recoveryGoalEl06G)recoveryGoalEl06G.textContent=goal;
}
function smoothRecovery06G(t){return t*t*(3-2*t);}
function updateRecoveryPose06G(now){
  const dx=recoveryX06G-recoveryPrevX06G,dz=recoveryZ06G-recoveryPrevZ06G;
  if(Math.hypot(dx,dz)>.00001)recoveryRoot06G.rotation.y=Math.atan2(dx,dz);
  const moving=recoveryState06G==='SEEKING_FOOD'||recoveryState06G==='EVADING'||recoveryState06G==='RESUMING_FOOD';
  const hop=moving?Math.max(0,Math.sin((now-recoveryStateStart06G)*.011))*0.11:0;
  recoveryRoot06G.position.set(recoveryX06G,groundHeight(recoveryX06G,recoveryZ06G)+.03+hop,recoveryZ06G);
  recoveryPrevX06G=recoveryX06G;recoveryPrevZ06G=recoveryZ06G;
}
function interruptFoodGoal06G(now){
  recoveryEvents06G++;
  interruptionStartX06G=recoveryX06G;interruptionStartZ06G=recoveryZ06G;
  recoverySuspendedGoal06G='FOOD';
  recoveryInterrupt06G='HAZARD';
  setRecoveryGoal06G('HAZARD');
  setRecoveryState06G('EVADING',now);
  if(recoverySuspendedEl06G){recoverySuspendedEl06G.textContent='FOOD';recoverySuspendedEl06G.style.color='#ffe59a';}
  if(recoveryInterruptEl06G){recoveryInterruptEl06G.textContent='HAZARD';recoveryInterruptEl06G.style.color='#ffd18a';}
  if(recoveryResultEl06G){recoveryResultEl06G.textContent='FOOD GOAL SUSPENDED';recoveryResultEl06G.style.color='#ffd18a';}
}
function updateLivingWorld06G(now){
  const memoryEvents=memoryApi06G.events;

  if(memoryEvents>recoveryMemoryEventSeen06G){
    recoveryMemoryEventSeen06G=memoryEvents;
    if(recoveryState06G==='SEEKING_FOOD')interruptFoodGoal06G(now);
  }

  if(recoveryState06G==='SEEKING_FOOD'){
    // Repeatable pre-hazard presentation: actor visibly pursues food but holds at 34% so the
    // goal cannot complete before the player triggers the living-world chain.
    const raw=Math.min(1,(now-recoveryStateStart06G)/RECOVERY_06G.preGoalTravelMs);
    const p=Math.min(RECOVERY_06G.preGoalCap,smoothRecovery06G(raw));
    recoveryX06G=THREE.MathUtils.lerp(goalStartX06G,foodX06G,p);
    recoveryZ06G=THREE.MathUtils.lerp(goalStartZ06G,foodZ06G,p);
  }else if(recoveryState06G==='EVADING'){
    const p=Math.min(1,(now-recoveryStateStart06G)/RECOVERY_06G.evadeTravelMs),e=smoothRecovery06G(p);
    recoveryX06G=THREE.MathUtils.lerp(interruptionStartX06G,evadeX06G,e);
    recoveryZ06G=THREE.MathUtils.lerp(interruptionStartZ06G,evadeZ06G,e);
    if(p>=1){
      recoveryX06G=evadeX06G;recoveryZ06G=evadeZ06G;
      setRecoveryState06G('WAIT_CLEAR',now);
      setRecoveryGoal06G('WAITING');
      if(recoveryResultEl06G){recoveryResultEl06G.textContent='WAITING FOR HAZARD TO CLEAR';recoveryResultEl06G.style.color='#ffe59a';}
    }
  }else if(recoveryState06G==='WAIT_CLEAR'){
    if(memoryApi06G.state==='CALM'){
      if(!recoveryClearSince06G)recoveryClearSince06G=now;
      if(now-recoveryClearSince06G>=RECOVERY_06G.recoverHoldMs){
        resumeStartX06G=recoveryX06G;resumeStartZ06G=recoveryZ06G;
        recoverySuspendedGoal06G='NONE';
        setRecoveryGoal06G('FOOD');
        setRecoveryState06G('RESUMING_FOOD',now);
        if(recoverySuspendedEl06G){recoverySuspendedEl06G.textContent='NONE';recoverySuspendedEl06G.style.color='#a8f0b5';}
        if(recoveryResultEl06G){recoveryResultEl06G.textContent='RESUMING ORIGINAL FOOD GOAL';recoveryResultEl06G.style.color='#9fe0ff';}
      }
    }else recoveryClearSince06G=0;
  }else if(recoveryState06G==='RESUMING_FOOD'){
    const p=Math.min(1,(now-recoveryStateStart06G)/RECOVERY_06G.resumeTravelMs),e=smoothRecovery06G(p);
    recoveryX06G=THREE.MathUtils.lerp(resumeStartX06G,foodX06G,e);
    recoveryZ06G=THREE.MathUtils.lerp(resumeStartZ06G,foodZ06G,e);
    if(p>=1){
      recoveryX06G=foodX06G;recoveryZ06G=foodZ06G;
      setRecoveryState06G('COMPLETE',now);
      setRecoveryGoal06G('FOOD REACHED');
      if(recoveryInterruptEl06G){recoveryInterruptEl06G.textContent='RESOLVED';recoveryInterruptEl06G.style.color='#a8f0b5';}
      if(recoveryResultEl06G){recoveryResultEl06G.textContent='INTERRUPT → RECOVER → RESUME ✓';recoveryResultEl06G.style.color='#a8f0b5';}
    }
  }

  updateRecoveryPose06G(now);
}
function livingWorld06GLoop(now){
  requestAnimationFrame(livingWorld06GLoop);
  updateLivingWorld06G(now);
}
requestAnimationFrame(livingWorld06GLoop);

globalThis.__livingWorld06G={
  marker:LIVING_WORLD_06G_MARKER,
  get state(){return recoveryState06G;},
  get goal(){return recoveryGoal06G;},
  get suspendedGoal(){return recoverySuspendedGoal06G;},
  get interrupt(){return recoveryInterrupt06G;},
  get events(){return recoveryEvents06G;},
  directPlayerTrigger:false,
  originalGoal:'FOOD',
  interruption:'HAZARD',
  rule:'suspend original goal, resolve higher-priority interruption, resume original goal when valid'
};


// ---- Test 06H: Living World — offscreen / streamed persistence ----
import {StreamCell,StreamStateStore,STREAM_CELL_SCHEMA_VERSION,DEFAULT_STREAM_CONFIG} from './stream-cell-core.js';

const LIVING_WORLD_06H_MARKER='06H_STREAMED_PERSISTENCE';
const memoryApi06H=globalThis.__livingWorld06C;
if(!memoryApi06H||memoryApi06H.marker!=='06C_LOCAL_DISTURBANCE_MEMORY')throw new Error('06H requires frozen accepted 06C memory API');

const STREAM_06H={
  ...DEFAULT_STREAM_CONFIG,
  cellId:'06H_CELL_A',
  directPlayerBehaviorTrigger:false
};

const spawnYaw06H=Number.isFinite(playerRoot.rotation.y)?playerRoot.rotation.y:0;
const spawnX06H=playerRoot.position.x,spawnZ06H=playerRoot.position.z;
const fwdX06H=Math.sin(spawnYaw06H),fwdZ06H=Math.cos(spawnYaw06H);
const rightX06H=Math.cos(spawnYaw06H),rightZ06H=-Math.sin(spawnYaw06H);

const cellCenterX06H=spawnX06H+fwdX06H*10.5+rightX06H*6.0;
const cellCenterZ06H=spawnZ06H+fwdZ06H*10.5+rightZ06H*6.0;
const actorStart06H={
  x:cellCenterX06H-rightX06H*2.2-fwdX06H*.4,
  z:cellCenterZ06H-rightZ06H*2.2-fwdZ06H*.4
};
const actorDestination06H={
  x:cellCenterX06H+rightX06H*3.6+fwdX06H*.7,
  z:cellCenterZ06H+rightZ06H*3.6+fwdZ06H*.7
};

const streamStore06H=new StreamStateStore();
let streamDistance06H=Infinity;
let lastRestoreTimerCaughtUp06H=false;
let lastRestoreProgressPreserved06H=false;
let lastResult06H='READY';

const streamLifecycleEl06H=document.getElementById('worldStreamLifecycle');
const streamDistanceEl06H=document.getElementById('worldStreamDistance');
const streamSnapshotEl06H=document.getElementById('worldStreamSnapshot');
const streamOffscreenEl06H=document.getElementById('worldStreamOffscreen');
const streamMemoryEl06H=document.getElementById('worldStreamMemory');
const streamGoalEl06H=document.getElementById('worldStreamGoal');
const streamProgressEl06H=document.getElementById('worldStreamProgress');
const streamDuplicatesEl06H=document.getElementById('worldStreamDuplicates');
const streamResultEl06H=document.getElementById('worldStreamResult');

function set06HText(el,value,color){
  if(!el)return;
  el.textContent=value;
  if(color)el.style.color=color;
}
function memoryColor06H(state){
  if(state==='DISTURBED')return 0xd98a38;
  if(state==='SETTLING')return 0xc2ad62;
  return 0x78925d;
}
function disposeMaterial06H(material){
  if(Array.isArray(material)){for(const item of material)item.dispose();}
  else if(material)material.dispose();
}
function attachCellVisual06H(state){
  const root=new THREE.Group();
  root.userData.streamCellId=STREAM_06H.cellId;

  const reedGeo=new THREE.PlaneGeometry(.18,1.42,1,2);
  reedGeo.translate(0,.71,0);
  const reedMat=new THREE.MeshStandardMaterial({
    color:memoryColor06H(state.memory.state),
    roughness:.96,
    metalness:0,
    side:THREE.DoubleSide
  });
  const reeds=new THREE.InstancedMesh(reedGeo,reedMat,14);
  reeds.castShadow=true;
  reeds.receiveShadow=true;
  reeds.frustumCulled=false;
  const temp=new THREE.Object3D();
  for(let i=0;i<14;i++){
    const a=i*2.399963229728653;
    const r=.55+(i%5)*.19;
    const x=cellCenterX06H+Math.cos(a)*r;
    const z=cellCenterZ06H+Math.sin(a)*r;
    temp.position.set(x,groundHeight(x,z)+.03,z);
    temp.rotation.set(0,a*.37,0);
    temp.scale.set(.82,.78+(i%4)*.10,1);
    temp.updateMatrix();
    reeds.setMatrixAt(i,temp.matrix);
  }
  reeds.instanceMatrix.needsUpdate=true;

  const actorGeo=new THREE.DodecahedronGeometry(.48,1);
  const actorMat=new THREE.MeshStandardMaterial({color:0x3f8f88,roughness:.9,metalness:0});
  const actor=new THREE.Mesh(actorGeo,actorMat);
  actor.castShadow=true;

  const foodGeo=new THREE.SphereGeometry(.20,10,8);
  const foodMat=new THREE.MeshStandardMaterial({color:0xd8b35a,emissive:0x6c4d18,emissiveIntensity:.28,roughness:.72});
  const food=new THREE.Mesh(foodGeo,foodMat);
  food.castShadow=true;

  root.add(reeds,actor,food);
  scene.add(root);

  const handle={root,reeds,reedGeo,reedMat,actor,actorGeo,actorMat,food,foodGeo,foodMat};
  updateCellVisual06H(handle,state,Date.now());
  return handle;
}
function updateCellVisual06H(handle,state,wallNow){
  if(!handle)return;
  const p=state.actor.position;
  handle.actor.position.set(p.x,groundHeight(p.x,p.z)+.48,p.z);
  const d=state.actor.destination;
  handle.food.position.set(d.x,groundHeight(d.x,d.z)+.23,d.z);
  const color=memoryColor06H(state.memory.state);
  handle.reedMat.color.setHex(color);
  const pulse=state.memory.state==='DISTURBED'?1+Math.sin(wallNow*.012)*.08:1;
  handle.reeds.scale.setScalar(pulse);
}
function detachCellVisual06H(handle){
  if(!handle)return;
  scene.remove(handle.root);
  handle.root.traverse(obj=>{
    if(obj.geometry)obj.geometry.dispose();
    if(obj.material)disposeMaterial06H(obj.material);
  });
  handle.root.clear();
}

const streamCell06H=new StreamCell({
  id:STREAM_06H.cellId,
  store:streamStore06H,
  actorStart:actorStart06H,
  actorDestination:actorDestination06H,
  config:STREAM_06H,
  initialEventId:memoryApi06H.events,
  attachVisual:attachCellVisual06H,
  detachVisual:detachCellVisual06H,
  updateVisual:updateCellVisual06H
});

streamCell06H.load(Date.now());

function updateStreamHud06H(wallNow){
  const lifecycle=streamCell06H.isActive?'ACTIVE':'UNLOADED';
  set06HText(streamLifecycleEl06H,lifecycle,lifecycle==='ACTIVE'?'#a8f0b5':'#ffd18a');
  set06HText(streamDistanceEl06H,streamDistance06H.toFixed(1)+' m');
  set06HText(streamSnapshotEl06H,streamCell06H.hasSnapshot?'SAVED':'NONE',streamCell06H.hasSnapshot?'#9fe0ff':'#d8ebe5');
  set06HText(streamOffscreenEl06H,(streamCell06H.offscreenMs(wallNow)/1000).toFixed(1)+' s');
  set06HText(streamMemoryEl06H,streamCell06H.state.memory.state,streamCell06H.state.memory.state==='CALM'?'#a8f0b5':'#ffd18a');
  set06HText(streamGoalEl06H,streamCell06H.state.actor.goal);
  set06HText(streamProgressEl06H,Math.round(streamCell06H.state.actor.progress*100)+'%');
  set06HText(streamDuplicatesEl06H,String(streamCell06H.duplicateCount),streamCell06H.duplicateCount===0?'#a8f0b5':'#ff8f8f');
  set06HText(streamResultEl06H,lastResult06H,lastResult06H.includes('✓')?'#a8f0b5':'#ffe59a');
}

function updateLivingWorld06H(now,dt){
  const wallNow=Date.now();
  streamDistance06H=Math.hypot(playerRoot.position.x-cellCenterX06H,playerRoot.position.z-cellCenterZ06H);

  if(streamCell06H.isActive&&streamDistance06H>=STREAM_06H.unloadRadiusM){
    streamCell06H.unload(wallNow);
    lastResult06H='STATE SERIALIZED · SIMULATION STOPPED';
  }else if(!streamCell06H.isActive&&streamDistance06H<=STREAM_06H.loadRadiusM){
    const saved=streamStore06H.load(STREAM_06H.cellId);
    const savedProgress=saved?.actor?.progress;
    const savedMemoryState=saved?.memory?.state;
    const savedExpiresAt=saved?.memory?.expiresAt||0;
    const restore=streamCell06H.load(wallNow);
    if(restore.rehydrated){
      lastRestoreProgressPreserved06H=Math.abs(streamCell06H.state.actor.progress-savedProgress)<1e-9;
      lastRestoreTimerCaughtUp06H=savedMemoryState!=='CALM'&&wallNow>=savedExpiresAt&&streamCell06H.state.memory.state==='CALM';
      if(lastRestoreTimerCaughtUp06H&&lastRestoreProgressPreserved06H&&streamCell06H.duplicateCount===0){
        lastResult06H='STATE RESTORED ✓ · TIMER CAUGHT UP ✓ · NO DUPLICATES ✓';
      }else if(lastRestoreProgressPreserved06H&&streamCell06H.duplicateCount===0){
        lastResult06H='STATE RESTORED ✓ · NO DUPLICATES ✓';
      }else{
        lastResult06H='RESTORE CHECK FAILED';
      }
    }
  }

  if(streamCell06H.isActive){
    streamCell06H.update({
      dtMs:Math.max(0,dt*1000),
      wallNow,
      eventId:memoryApi06H.events
    });
    if(streamCell06H.state.memory.state==='DISTURBED'&&streamCell06H.lastTransition==='MEMORY_DISTURBED'){
      lastResult06H='MEMORY DISTURBED · LEAVE CELL';
    }
  }

  updateStreamHud06H(wallNow);
}

const frameHooks06H=globalThis.__raaiFrameHooks||(globalThis.__raaiFrameHooks=[]);
const frameHook06H=(now,dt)=>updateLivingWorld06H(now,dt);
frameHook06H.streamCellId=STREAM_06H.cellId;
if(!frameHooks06H.some(h=>h.streamCellId===STREAM_06H.cellId))frameHooks06H.push(frameHook06H);

globalThis.__livingWorld06H={
  marker:LIVING_WORLD_06H_MARKER,
  schemaVersion:STREAM_CELL_SCHEMA_VERSION,
  get lifecycle(){return streamCell06H.lifecycle;},
  get loaded(){return streamCell06H.isActive;},
  get state(){return streamCell06H.state.memory.state;},
  get snapshot(){return streamStore06H.load(STREAM_06H.cellId);},
  get playerDistanceM(){return streamDistance06H;},
  get actorGoal(){return streamCell06H.state.actor.goal;},
  get actorProgress(){return streamCell06H.state.actor.progress;},
  get unloadCount(){return streamCell06H.unloadCount;},
  get restoreCount(){return streamCell06H.restoreCount;},
  get duplicateCount(){return streamCell06H.duplicateCount;},
  get lastOffscreenMs(){return streamCell06H.lastOffscreenMs;},
  get timerCaughtUp(){return lastRestoreTimerCaughtUp06H;},
  get progressPreserved(){return lastRestoreProgressPreserved06H;},
  loadRadiusM:STREAM_06H.loadRadiusM,
  unloadRadiusM:STREAM_06H.unloadRadiusM,
  directPlayerBehaviorTrigger:false,
  activeSceneRootCount:()=>scene.children.filter(o=>o.userData?.streamCellId===STREAM_06H.cellId).length
};


// ---- Test 06I: Living World — simulation LOD + sleep/wake ----
import {StreamStateStore as StreamStateStore06I,STREAM_CELL_SCHEMA_VERSION as STREAM_CELL_SCHEMA_VERSION_06I} from './stream-cell-core.js';
import {SimulationLODController,SIM_LOD_TIERS,DEFAULT_SIM_LOD_CONFIG} from './simulation-lod-core.js';

const LIVING_WORLD_06I_MARKER='06I_SIMULATION_LOD_SLEEP_WAKE';
const SIM_06I={
  ...DEFAULT_SIM_LOD_CONFIG,
  cellId:'06I_LOD_CELL',
  actorTravelMs:90000,
  directPlayerBehaviorTrigger:false
};

const lodSpawnYaw06I=Number.isFinite(playerRoot.rotation.y)?playerRoot.rotation.y:0;
const lodSpawnX06I=playerRoot.position.x,lodSpawnZ06I=playerRoot.position.z;
const lodFwdX06I=Math.sin(lodSpawnYaw06I),lodFwdZ06I=Math.cos(lodSpawnYaw06I);
const lodRightX06I=Math.cos(lodSpawnYaw06I),lodRightZ06I=-Math.sin(lodSpawnYaw06I);

const lodCenterX06I=lodSpawnX06I+lodFwdX06I*8.8-lodRightX06I*4.8;
const lodCenterZ06I=lodSpawnZ06I+lodFwdZ06I*8.8-lodRightZ06I*4.8;
const lodActorStart06I={
  x:lodCenterX06I-lodRightX06I*2.4,
  z:lodCenterZ06I-lodRightZ06I*2.4
};
const lodActorDestination06I={
  x:lodCenterX06I+lodRightX06I*4.8+lodFwdX06I*.9,
  z:lodCenterZ06I+lodRightZ06I*4.8+lodFwdZ06I*.9
};

const lodStore06I=new StreamStateStore06I();
let lodRoot06I=null;
let lodVisual06I=null;
let lodDistance06I=Infinity;
let lodDuplicateCount06I=0;
let lodLastSleepProgress06I=0;
let lodProgressPreserved06I=false;
let lodLastSleepAt06I=0;
let lodLastOffscreenMs06I=0;
let lodResult06I='NEAR FULL SIMULATION';
let lodTicksWindowStart06I=performance.now();
let lodTicksWindowCount06I=0;
let lodTicksPerSecond06I=0;
const lodVisited06I=new Set([SIM_LOD_TIERS.NEAR]);

const lodActorState06I={
  goal:'FOOD',
  behaviorState:'SEEKING_FOOD',
  progress:0,
  position:{...lodActorStart06I},
  destination:{...lodActorDestination06I}
};

const lodTierEl06I=document.getElementById('worldLodTier');
const lodDistanceEl06I=document.getElementById('worldLodDistance');
const lodCadenceEl06I=document.getElementById('worldLodCadence');
const lodTicksEl06I=document.getElementById('worldLodTicks');
const lodGoalEl06I=document.getElementById('worldLodGoal');
const lodProgressEl06I=document.getElementById('worldLodProgress');
const lodSnapshotEl06I=document.getElementById('worldLodSnapshot');
const lodSleepWakeEl06I=document.getElementById('worldLodSleepWake');
const lodDuplicatesEl06I=document.getElementById('worldLodDuplicates');
const lodResultEl06I=document.getElementById('worldLodResult');

function set06IText(el,value,color){
  if(!el)return;
  el.textContent=value;
  if(color)el.style.color=color;
}
function tierColor06I(tier){
  if(tier===SIM_LOD_TIERS.NEAR)return 0x3f8f88;
  if(tier===SIM_LOD_TIERS.MID)return 0x4f83a8;
  if(tier===SIM_LOD_TIERS.FAR)return 0x75639a;
  return 0x5f6668;
}
function disposeMaterial06I(material){
  if(Array.isArray(material)){for(const item of material)item.dispose();}
  else if(material)material.dispose();
}
function applyActorPosition06I(){
  const p=lodActorState06I.progress;
  lodActorState06I.position.x=THREE.MathUtils.lerp(lodActorStart06I.x,lodActorDestination06I.x,p);
  lodActorState06I.position.z=THREE.MathUtils.lerp(lodActorStart06I.z,lodActorDestination06I.z,p);
}
function attachLodVisual06I(){
  if(lodRoot06I){
    lodDuplicateCount06I++;
    return;
  }
  const root=new THREE.Group();
  root.userData.simLodCellId=SIM_06I.cellId;

  const bodyGeo=new THREE.DodecahedronGeometry(.46,1);
  const bodyMat=new THREE.MeshStandardMaterial({color:tierColor06I(SIM_LOD_TIERS.NEAR),roughness:.9,metalness:0});
  const body=new THREE.Mesh(bodyGeo,bodyMat);
  body.castShadow=true;

  const earGeo=new THREE.ConeGeometry(.11,.46,7);
  const earMat=new THREE.MeshStandardMaterial({color:0x315f5b,roughness:.92,metalness:0});
  const earL=new THREE.Mesh(earGeo,earMat);
  const earR=new THREE.Mesh(earGeo,earMat.clone());
  earL.position.set(-.19,.43,0);
  earR.position.set(.19,.43,0);
  earL.rotation.z=.22;
  earR.rotation.z=-.22;
  body.add(earL,earR);

  const foodGeo=new THREE.SphereGeometry(.19,10,8);
  const foodMat=new THREE.MeshStandardMaterial({color:0xd7b45a,emissive:0x624914,emissiveIntensity:.25,roughness:.74});
  const food=new THREE.Mesh(foodGeo,foodMat);
  food.castShadow=true;

  root.add(body,food);
  scene.add(root);
  lodRoot06I=root;
  lodVisual06I={root,body,bodyGeo,bodyMat,earL,earR,food,foodGeo,foodMat};
  updateLodVisual06I();
}
function detachLodVisual06I(){
  if(!lodRoot06I)return;
  scene.remove(lodRoot06I);
  lodRoot06I.traverse(obj=>{
    if(obj.geometry)obj.geometry.dispose();
    if(obj.material)disposeMaterial06I(obj.material);
  });
  lodRoot06I.clear();
  lodRoot06I=null;
  lodVisual06I=null;
}
function updateLodVisual06I(){
  if(!lodVisual06I)return;
  const p=lodActorState06I.position;
  lodVisual06I.body.position.set(p.x,groundHeight(p.x,p.z)+.5,p.z);
  const d=lodActorState06I.destination;
  lodVisual06I.food.position.set(d.x,groundHeight(d.x,d.z)+.22,d.z);
  lodVisual06I.bodyMat.color.setHex(tierColor06I(lodController06I?.tier||SIM_LOD_TIERS.NEAR));
}
function saveSleepSnapshot06I(wallNow){
  const snapshot={
    version:STREAM_CELL_SCHEMA_VERSION_06I,
    cellId:SIM_06I.cellId,
    serializedAt:wallNow,
    actor:{
      goal:lodActorState06I.goal,
      behaviorState:lodActorState06I.behaviorState,
      progress:lodActorState06I.progress,
      position:{...lodActorState06I.position},
      destination:{...lodActorState06I.destination}
    }
  };
  lodStore06I.save(SIM_06I.cellId,snapshot);
  lodLastSleepProgress06I=lodActorState06I.progress;
  lodLastSleepAt06I=wallNow;
}
function restoreSleepSnapshot06I(wallNow){
  const snapshot=lodStore06I.load(SIM_06I.cellId);
  if(!snapshot)return false;
  lodActorState06I.goal=snapshot.actor.goal;
  lodActorState06I.behaviorState=snapshot.actor.behaviorState;
  lodActorState06I.progress=snapshot.actor.progress;
  lodActorState06I.position={...snapshot.actor.position};
  lodActorState06I.destination={...snapshot.actor.destination};
  lodLastOffscreenMs06I=Math.max(0,wallNow-snapshot.serializedAt);
  lodProgressPreserved06I=Math.abs(lodActorState06I.progress-lodLastSleepProgress06I)<1e-9;
  return true;
}
function advanceLodActor06I(stepMs){
  if(lodActorState06I.behaviorState!=='SEEKING_FOOD')return;
  lodActorState06I.progress=Math.min(1,lodActorState06I.progress+stepMs/SIM_06I.actorTravelMs);
  if(lodActorState06I.progress>=1){
    lodActorState06I.progress=1;
    lodActorState06I.goal='FOOD REACHED';
    lodActorState06I.behaviorState='COMPLETE';
  }
  applyActorPosition06I();
}

const lodController06I=new SimulationLODController({
  config:SIM_06I,
  onSimulate:(stepMs)=>{
    lodTicksWindowCount06I++;
    advanceLodActor06I(stepMs);
    updateLodVisual06I();
  },
  onTierChange:(next)=>{
    lodVisited06I.add(next);
    if(next===SIM_LOD_TIERS.NEAR)lodResult06I='NEAR FULL SIMULATION';
    else if(next===SIM_LOD_TIERS.MID)lodResult06I='MID REDUCED-RATE SIMULATION';
    else if(next===SIM_LOD_TIERS.FAR)lodResult06I='FAR COARSE SIMULATION';
    else lodResult06I='DORMANT · SNAPSHOT SAVED · SIMULATION SLEEPING';
    updateLodVisual06I();
  },
  onSleep:(wallNow)=>{
    saveSleepSnapshot06I(wallNow);
    detachLodVisual06I();
  },
  onWake:(wallNow)=>{
    const restored=restoreSleepSnapshot06I(wallNow);
    attachLodVisual06I();
    if(restored&&lodProgressPreserved06I&&lodDuplicateCount06I===0){
      lodResult06I='WAKE RESTORED ✓ · PROGRESS PRESERVED ✓ · NO DUPLICATES ✓';
    }else{
      lodResult06I='WAKE VALIDATION FAILED';
    }
  }
});

attachLodVisual06I();

function updateLodHud06I(wallNow){
  const tier=lodController06I.tier;
  const tierColor=tier===SIM_LOD_TIERS.DORMANT?'#ffd18a':'#a8f0b5';
  set06IText(lodTierEl06I,tier,tierColor);
  set06IText(lodDistanceEl06I,lodDistance06I.toFixed(1)+' m');
  set06IText(lodCadenceEl06I,lodController06I.cadenceLabel(),tierColor);
  set06IText(lodTicksEl06I,lodTicksPerSecond06I.toFixed(1)+' /s');
  set06IText(lodGoalEl06I,lodActorState06I.goal);
  set06IText(lodProgressEl06I,Math.round(lodActorState06I.progress*100)+'%');
  set06IText(lodSnapshotEl06I,lodStore06I.has(SIM_06I.cellId)?'SAVED':'NONE',lodStore06I.has(SIM_06I.cellId)?'#9fe0ff':'#d8ebe5');
  set06IText(lodSleepWakeEl06I,lodController06I.sleepCount+'/'+lodController06I.wakeCount);
  set06IText(lodDuplicatesEl06I,String(lodDuplicateCount06I),lodDuplicateCount06I===0?'#a8f0b5':'#ff8f8f');

  if(lodVisited06I.has(SIM_LOD_TIERS.NEAR)&&lodVisited06I.has(SIM_LOD_TIERS.MID)&&lodVisited06I.has(SIM_LOD_TIERS.FAR)&&lodVisited06I.has(SIM_LOD_TIERS.DORMANT)&&lodController06I.wakeCount>0&&lodProgressPreserved06I&&lodDuplicateCount06I===0){
    lodResult06I='LOD LADDER ✓ · SLEEP/WAKE ✓ · NO DUPLICATES ✓';
  }
  set06IText(lodResultEl06I,lodResult06I,lodResult06I.includes('✓')?'#a8f0b5':'#ffe59a');

  const elapsed=performance.now()-lodTicksWindowStart06I;
  if(elapsed>=1000){
    lodTicksPerSecond06I=lodTicksWindowCount06I/(elapsed/1000);
    lodTicksWindowCount06I=0;
    lodTicksWindowStart06I=performance.now();
  }
}

function updateLivingWorld06I(now,dt){
  const wallNow=Date.now();
  lodDistance06I=Math.hypot(playerRoot.position.x-lodCenterX06I,playerRoot.position.z-lodCenterZ06I);
  lodController06I.step({
    distanceM:lodDistance06I,
    dtMs:Math.max(0,dt*1000),
    wallNow
  });
  updateLodHud06I(wallNow);
}

const frameHooks06I=globalThis.__raaiFrameHooks||(globalThis.__raaiFrameHooks=[]);
const frameHook06I=(now,dt)=>updateLivingWorld06I(now,dt);
frameHook06I.simLodCellId=SIM_06I.cellId;
if(!frameHooks06I.some(h=>h.simLodCellId===SIM_06I.cellId))frameHooks06I.push(frameHook06I);

globalThis.__livingWorld06I={
  marker:LIVING_WORLD_06I_MARKER,
  get tier(){return lodController06I.tier;},
  get playerDistanceM(){return lodDistance06I;},
  get cadence(){return lodController06I.cadenceLabel();},
  get totalTicks(){return lodController06I.totalTicks;},
  get ticksByTier(){return {...lodController06I.ticksByTier};},
  get actorGoal(){return lodActorState06I.goal;},
  get actorProgress(){return lodActorState06I.progress;},
  get sleepCount(){return lodController06I.sleepCount;},
  get wakeCount(){return lodController06I.wakeCount;},
  get duplicateCount(){return lodDuplicateCount06I;},
  get snapshot(){return lodStore06I.load(SIM_06I.cellId);},
  get lastOffscreenMs(){return lodLastOffscreenMs06I;},
  get progressPreserved(){return lodProgressPreserved06I;},
  activeSceneRootCount:()=>scene.children.filter(o=>o.userData?.simLodCellId===SIM_06I.cellId).length,
  config:{...SIM_06I},
  directPlayerBehaviorTrigger:false
};


// ---- Test 06J: Living World — integration / scale audit ----
import {
  SCALE_ACTOR_COUNT_06J as SCALE_ACTOR_COUNT_06J_RUNTIME,
  PERFORMANCE_BUDGET_06J as PERFORMANCE_BUDGET_06J_RUNTIME,
  createScaleActor06J as createScaleActor06JRuntime,
  advanceScaleActor06J as advanceScaleActor06JRuntime,
  snapshotScaleActor06J as snapshotScaleActor06JRuntime,
  restoreScaleActor06J as restoreScaleActor06JRuntime,
  summarizePerformance06J as summarizePerformance06JRuntime
} from './integration-scale-core.js';
import {
  SimulationLODController as SimulationLODController06J,
  SIM_LOD_TIERS as SIM_LOD_TIERS_06J,
  DEFAULT_SIM_LOD_CONFIG as DEFAULT_SIM_LOD_CONFIG_06J
} from './simulation-lod-core.js';
import {STREAM_CELL_SCHEMA_VERSION as STREAM_CELL_SCHEMA_VERSION_06J} from './stream-cell-core.js';

const LIVING_WORLD_06J_MARKER='06J_LIVING_WORLD_INTEGRATION_SCALE_AUDIT';
const SCALE_06J={
  actorCount:SCALE_ACTOR_COUNT_06J_RUNTIME,
  directPlayerBehaviorTrigger:false
};

const auditSpawnX06J=playerRoot.position.x;
const auditSpawnZ06J=playerRoot.position.z;
const auditStartWall06J=Date.now();
const auditActors06J=[];
let auditDuplicateCount06J=0;
let auditMatrixDirty06J=false;
let auditColorDirty06J=false;
let auditLogicTicksWindow06J=0;
let auditLogicTicksPerSec06J=0;
let auditLogicWindowStart06J=performance.now();
let auditLastFrameNow06J=0;
let auditStartedAt06J=0;
let auditFinished06J=false;
let auditFinalSummary06J=null;
let auditWarmupProgramCount06J=null;
let auditLastTelemetryAt06J=0;
let auditObjectCount06J=0;
let auditDrawCallsMax06J=0;
let auditTrianglesMax06J=0;
let auditFrameSamples06J=[];
let auditCpuSamples06J=[];
let auditFrameSum06J=0;
let auditCpuSum06J=0;
let auditStage06J='WAITING';
let auditResult06J='WAITING FOR RUNTIME';
let auditTierCounts06J={NEAR:0,MID:0,FAR:0,DORMANT:0};
let auditMemoryActive06J=0;
let auditSuspendedGoals06J=0;
let auditSnapshots06J=0;

const auditStageEl06J=document.getElementById('auditStage06J');
const auditActorsEl06J=document.getElementById('auditActors06J');
const auditTiersEl06J=document.getElementById('auditTiers06J');
const auditTicksEl06J=document.getElementById('auditTicks06J');
const auditFrameEl06J=document.getElementById('auditFrame06J');
const auditCpuEl06J=document.getElementById('auditCpu06J');
const auditDrawEl06J=document.getElementById('auditDraw06J');
const auditSceneEl06J=document.getElementById('auditScene06J');
const auditMemoryEl06J=document.getElementById('auditMemory06J');
const auditShadersEl06J=document.getElementById('auditShaders06J');
const auditGpuEl06J=document.getElementById('auditGpu06J');
const auditStateEl06J=document.getElementById('auditState06J');
const auditResultEl06J=document.getElementById('auditResult06J');
const charEl06J=document.getElementById('char');

const auditGeo06J=new THREE.TetrahedronGeometry(.22,0);
const auditMat06J=new THREE.MeshStandardMaterial({color:0xffffff,roughness:.9,metalness:0});
const auditMesh06J=new THREE.InstancedMesh(auditGeo06J,auditMat06J,SCALE_06J.actorCount);
auditMesh06J.castShadow=false;
auditMesh06J.receiveShadow=false;
auditMesh06J.frustumCulled=false;
auditMesh06J.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
auditMesh06J.userData.scaleAuditRoot=true;
scene.add(auditMesh06J);

const auditObj06J=new THREE.Object3D();
const auditColor06J=new THREE.Color();

function tierHex06J(tier){
  if(tier===SIM_LOD_TIERS_06J.NEAR)return 0x39a99b;
  if(tier===SIM_LOD_TIERS_06J.MID)return 0x4f83b6;
  if(tier===SIM_LOD_TIERS_06J.FAR)return 0x7a62a9;
  return 0x596164;
}

function setAuditInstance06J(actor,tier){
  const wx=auditSpawnX06J+actor.position.x;
  const wz=auditSpawnZ06J+actor.position.z;
  const dormant=tier===SIM_LOD_TIERS_06J.DORMANT;
  auditObj06J.position.set(wx,groundHeight(wx,wz)+.18,wz);
  auditObj06J.rotation.set(0,actor.index*.61803398875,0);
  const scale=dormant?0:.58+((actor.index%7)*.025);
  auditObj06J.scale.setScalar(scale);
  auditObj06J.updateMatrix();
  auditMesh06J.setMatrixAt(actor.index,auditObj06J.matrix);
  auditColor06J.setHex(tierHex06J(tier));
  auditMesh06J.setColorAt(actor.index,auditColor06J);
  auditMatrixDirty06J=true;
  auditColorDirty06J=true;
}

function resolveAuditDistance06J(actor){
  const wx=auditSpawnX06J+actor.position.x;
  const wz=auditSpawnZ06J+actor.position.z;
  return Math.hypot(playerRoot.position.x-wx,playerRoot.position.z-wz);
}

for(let i=0;i<SCALE_06J.actorCount;i++){
  const actor=createScaleActor06JRuntime(i,auditStartWall06J);
  actor.controller=new SimulationLODController06J({
    config:DEFAULT_SIM_LOD_CONFIG_06J,
    onSimulate:(stepMs,tier,wallNow)=>{
      auditLogicTicksWindow06J++;
      advanceScaleActor06JRuntime(actor,stepMs,wallNow);
      setAuditInstance06J(actor,tier);
    },
    onTierChange:(next)=>{
      setAuditInstance06J(actor,next);
    },
    onSleep:(wallNow)=>{
      if(!actor.visualActive)auditDuplicateCount06J++;
      actor.snapshot=snapshotScaleActor06JRuntime(actor,STREAM_CELL_SCHEMA_VERSION_06J,wallNow);
      actor.sleepCount++;
      actor.visualActive=false;
      setAuditInstance06J(actor,SIM_LOD_TIERS_06J.DORMANT);
    },
    onWake:(wallNow,nextTier)=>{
      if(actor.visualActive)auditDuplicateCount06J++;
      if(actor.snapshot)restoreScaleActor06JRuntime(actor,actor.snapshot,wallNow);
      actor.wakeCount++;
      actor.visualActive=true;
      setAuditInstance06J(actor,nextTier);
    }
  });
  auditActors06J.push(actor);
  setAuditInstance06J(actor,SIM_LOD_TIERS_06J.NEAR);
}
auditMesh06J.instanceMatrix.needsUpdate=true;
if(auditMesh06J.instanceColor)auditMesh06J.instanceColor.needsUpdate=true;
auditMatrixDirty06J=false;
auditColorDirty06J=false;

function countSceneObjects06J(){
  let count=0;
  scene.traverse(()=>count++);
  return count;
}

function heapLabel06J(){
  const memory=performance.memory;
  if(!memory||!Number.isFinite(memory.usedJSHeapSize))return 'JS N/A';
  return 'JS '+(memory.usedJSHeapSize/(1024*1024)).toFixed(1)+' MB';
}

function setAuditText06J(el,value,color){
  if(!el)return;
  el.textContent=value;
  if(color)el.style.color=color;
}

function updateAuditCounters06J(){
  const counts={NEAR:0,MID:0,FAR:0,DORMANT:0};
  let memoryActive=0,suspended=0,snapshots=0;
  for(const actor of auditActors06J){
    const tier=actor.controller.tier;
    counts[tier]=(counts[tier]||0)+1;
    if(actor.memory.state!=='CALM')memoryActive++;
    if(actor.suspendedGoal!=='NONE')suspended++;
    if(actor.snapshot)snapshots++;
  }
  auditTierCounts06J=counts;
  auditMemoryActive06J=memoryActive;
  auditSuspendedGoals06J=suspended;
  auditSnapshots06J=snapshots;
}

function liveFrameLabel06J(){
  if(auditFinalSummary06J){
    const s=auditFinalSummary06J;
    return s.frame_avg_ms.toFixed(2)+' / '+s.frame_p95_ms.toFixed(2)+' / '+s.frame_p99_ms.toFixed(2)+' ms';
  }
  const avg=auditFrameSamples06J.length?auditFrameSum06J/auditFrameSamples06J.length:0;
  return avg?avg.toFixed(2)+' ms avg':'—';
}

function liveCpuLabel06J(){
  if(auditFinalSummary06J){
    const s=auditFinalSummary06J;
    return s.audit_cpu_avg_ms.toFixed(3)+' / '+s.audit_cpu_p95_ms.toFixed(3)+' ms';
  }
  const avg=auditCpuSamples06J.length?auditCpuSum06J/auditCpuSamples06J.length:0;
  return avg?avg.toFixed(3)+' ms avg':'—';
}

function updateAuditHud06J(nowPerf){
  const totalTiers=auditTierCounts06J.NEAR+auditTierCounts06J.MID+auditTierCounts06J.FAR+auditTierCounts06J.DORMANT;
  const rendererMem=renderer.info.memory||{};
  const shaderPrograms=Array.isArray(renderer.info.programs)?renderer.info.programs.length:0;
  const shaderDelta=auditWarmupProgramCount06J===null?'—':String(shaderPrograms-auditWarmupProgramCount06J);
  const rootCount=scene.children.filter(o=>o.userData?.scaleAuditRoot===true).length;

  setAuditText06J(auditStageEl06J,auditStage06J,auditStage06J==='PASS'?'#a8f0b5':auditStage06J==='FAIL'?'#ff9b9b':'#ffe59a');
  setAuditText06J(auditActorsEl06J,totalTiers+'/'+SCALE_06J.actorCount);
  setAuditText06J(auditTiersEl06J,auditTierCounts06J.NEAR+'/'+auditTierCounts06J.MID+'/'+auditTierCounts06J.FAR+'/'+auditTierCounts06J.DORMANT);
  setAuditText06J(auditTicksEl06J,auditLogicTicksPerSec06J.toFixed(0)+' /s');
  setAuditText06J(auditFrameEl06J,liveFrameLabel06J());
  setAuditText06J(auditCpuEl06J,liveCpuLabel06J());
  setAuditText06J(auditDrawEl06J,renderer.info.render.calls+' / '+renderer.info.render.triangles.toLocaleString());
  setAuditText06J(auditSceneEl06J,auditObjectCount06J+' obj · '+(rendererMem.geometries||0)+' geo · '+(rendererMem.textures||0)+' tex');
  setAuditText06J(auditMemoryEl06J,heapLabel06J());
  setAuditText06J(auditShadersEl06J,shaderPrograms+' · Δ '+shaderDelta);
  setAuditText06J(auditGpuEl06J,'N/A · WebGL');
  setAuditText06J(auditStateEl06J,'mem '+auditMemoryActive06J+' · susp '+auditSuspendedGoals06J+' · snap '+auditSnapshots06J+' · root '+rootCount);
  setAuditText06J(auditResultEl06J,auditResult06J,auditFinalSummary06J?.pass?'#a8f0b5':auditStage06J==='FAIL'?'#ff9b9b':'#ffe59a');
}

function finishAudit06J(){
  updateAuditCounters06J();
  const tierTotal=auditTierCounts06J.NEAR+auditTierCounts06J.MID+auditTierCounts06J.FAR+auditTierCounts06J.DORMANT;
  const rootCount=scene.children.filter(o=>o.userData?.scaleAuditRoot===true).length;
  const effectiveDuplicates=auditDuplicateCount06J+(rootCount===1?0:1);
  auditFinalSummary06J=summarizePerformance06JRuntime({
    frameSamples:auditFrameSamples06J,
    cpuSamples:auditCpuSamples06J,
    drawCallsMax:auditDrawCallsMax06J,
    trianglesMax:auditTrianglesMax06J,
    actorCount:tierTotal,
    duplicateCount:effectiveDuplicates,
    limits:PERFORMANCE_BUDGET_06J_RUNTIME
  });
  auditFinished06J=true;
  if(auditFinalSummary06J.pass){
    auditStage06J='PASS';
    auditResult06J='192 ACTORS ✓ · BUDGET PASS ✓ · STATE STABLE ✓';
  }else{
    auditStage06J='FAIL';
    auditResult06J='BUDGET FAIL · '+auditFinalSummary06J.failed.slice(0,3).join(' · ');
  }
}

function updateLivingWorld06J(now,dt){
  const cpuStart=performance.now();
  const wallNow=Date.now();
  const rawFrameMs=auditLastFrameNow06J>0?Math.max(0,now-auditLastFrameNow06J):0;
  auditLastFrameNow06J=now;

  if(!auditStartedAt06J&&charEl06J&&charEl06J.textContent!=='BOOT'){
    auditStartedAt06J=now;
    auditStage06J='WARMUP';
    auditResult06J='WARMING SHADERS + SCALE ACTORS';
    auditFrameSamples06J=[];
    auditCpuSamples06J=[];
    auditFrameSum06J=0;
    auditCpuSum06J=0;
    auditDrawCallsMax06J=0;
    auditTrianglesMax06J=0;
  }

  for(const actor of auditActors06J){
    actor.controller.step({
      distanceM:resolveAuditDistance06J(actor),
      dtMs:Math.max(0,dt*1000),
      wallNow
    });
  }

  if(auditMatrixDirty06J){
    auditMesh06J.instanceMatrix.needsUpdate=true;
    auditMatrixDirty06J=false;
  }
  if(auditColorDirty06J&&auditMesh06J.instanceColor){
    auditMesh06J.instanceColor.needsUpdate=true;
    auditColorDirty06J=false;
  }

  updateAuditCounters06J();

  const logicElapsed=now-auditLogicWindowStart06J;
  if(logicElapsed>=1000){
    auditLogicTicksPerSec06J=auditLogicTicksWindow06J/(logicElapsed/1000);
    auditLogicTicksWindow06J=0;
    auditLogicWindowStart06J=now;
  }

  const cpuCost=performance.now()-cpuStart;

  if(auditStartedAt06J&&!auditFinished06J){
    const elapsed=now-auditStartedAt06J;
    if(elapsed<PERFORMANCE_BUDGET_06J_RUNTIME.warmupMs){
      auditStage06J='WARMUP';
    }else{
      if(auditStage06J==='WARMUP'){
        auditWarmupProgramCount06J=Array.isArray(renderer.info.programs)?renderer.info.programs.length:0;
        auditStage06J='MEASURING';
        auditResult06J='MEASURING 15 s PERFORMANCE WINDOW';
      }
      if(rawFrameMs>0){
        auditFrameSamples06J.push(rawFrameMs);
        auditFrameSum06J+=rawFrameMs;
      }
      auditCpuSamples06J.push(cpuCost);
      auditCpuSum06J+=cpuCost;
      auditDrawCallsMax06J=Math.max(auditDrawCallsMax06J,renderer.info.render.calls||0);
      auditTrianglesMax06J=Math.max(auditTrianglesMax06J,renderer.info.render.triangles||0);

      if(elapsed>=PERFORMANCE_BUDGET_06J_RUNTIME.warmupMs+PERFORMANCE_BUDGET_06J_RUNTIME.measureMs){
        finishAudit06J();
      }
    }
  }

  if(now-auditLastTelemetryAt06J>=1000){
    auditObjectCount06J=countSceneObjects06J();
    auditLastTelemetryAt06J=now;
  }

  updateAuditHud06J(now);
}

const frameHooks06J=globalThis.__raaiFrameHooks||(globalThis.__raaiFrameHooks=[]);
const frameHook06J=(now,dt)=>updateLivingWorld06J(now,dt);
frameHook06J.scaleAuditId='06J_SCALE_AUDIT';
if(!frameHooks06J.some(h=>h.scaleAuditId==='06J_SCALE_AUDIT'))frameHooks06J.push(frameHook06J);

globalThis.__livingWorld06J={
  marker:LIVING_WORLD_06J_MARKER,
  get stage(){return auditStage06J;},
  get result(){return auditResult06J;},
  get actorCount(){return auditActors06J.length;},
  get tiers(){return {...auditTierCounts06J};},
  get logicTicksPerSecond(){return auditLogicTicksPerSec06J;},
  get memoryActive(){return auditMemoryActive06J;},
  get suspendedGoals(){return auditSuspendedGoals06J;},
  get snapshots(){return auditSnapshots06J;},
  get duplicateCount(){return auditDuplicateCount06J;},
  get summary(){return auditFinalSummary06J?JSON.parse(JSON.stringify(auditFinalSummary06J)):null;},
  get budgets(){return {...PERFORMANCE_BUDGET_06J_RUNTIME};},
  get gpuTiming(){return 'N/A · WebGL';},
  directPlayerBehaviorTrigger:false
};


// ---- Test 07A: Production Architecture Promotion ----
import {
  PRODUCTION_ARCHITECTURE_07A as PRODUCTION_ARCHITECTURE_07A_RUNTIME,
  LivingWorldKernel as LivingWorldKernel07A,
  StreamStateStore as StreamStateStore07A,
  StreamCell as StreamCell07A,
  SimulationLODController as SimulationLODController07A,
  SIM_LOD_TIERS as SIM_LOD_TIERS_07A
} from './production/index.js';

const PRODUCTION_ARCHITECTURE_07A_MARKER='07A_PRODUCTION_ARCHITECTURE_PROMOTION';

const archModulesEl07A=document.getElementById('archModules07A');
const archBoundaryEl07A=document.getElementById('archBoundary07A');
const archParityEl07A=document.getElementById('archParity07A');
const archStreamEl07A=document.getElementById('archStream07A');
const archRegressionEl07A=document.getElementById('archRegression07A');
const archResultEl07A=document.getElementById('archResult07A');

function setArchText07A(el,value,color){
  if(!el)return;
  if(el.textContent!==value)el.textContent=value;
  if(color&&el.style.color!==color)el.style.color=color;
}

function runProductionArchitectureProof07A(){
  const checks={};

  const kernel=new LivingWorldKernel07A({initialGoal:'FOOD',initialProgress:.34});
  kernel.createHazardEvent({center:{x:0,z:0},at:1000});
  const interrupted=kernel.update({
    now:1120,
    actorPath:{a:{x:-4,z:0},b:{x:4,z:0}},
    foodValid:true,
    foodEventAt:1120,
    foodProgressDelta:.05
  });
  checks.priority_over_recency=
    interrupted.memoryState==='DISTURBED'&&
    interrupted.winner==='HAZARD'&&
    interrupted.goal==='HAZARD'&&
    interrupted.suspendedGoal==='FOOD'&&
    Math.abs(interrupted.progress-.34)<1e-12;

  const snapshot=kernel.serialize(1600);
  const restoredKernel=new LivingWorldKernel07A();
  const restored=restoredKernel.restore(snapshot,7000);
  checks.offscreen_time_resolution=
    restored.memoryState==='CALM'&&
    restored.goal==='FOOD'&&
    Math.abs(restored.progress-.34)<1e-12&&
    restored.offscreenMs===5400;

  const store=new StreamStateStore07A();
  let attached=0,detached=0;
  const cell=new StreamCell07A({
    id:'07A_STREAM_PROOF',
    store,
    actorStart:{x:0,z:0},
    actorDestination:{x:10,z:0},
    initialEventId:0,
    attachVisual:()=>{attached++;return {id:attached};},
    detachVisual:()=>{detached++;},
    updateVisual:()=>{}
  });
  cell.load(1000);
  cell.update({dtMs:800,wallNow:1800,eventId:1});
  const streamProgress=cell.state.actor.progress;
  cell.unload(1900);
  const streamRestore=cell.load(8000);
  checks.stream_parity=
    streamRestore.rehydrated===true&&
    cell.state.memory.state==='CALM'&&
    cell.state.actor.goal==='FOOD'&&
    Math.abs(cell.state.actor.progress-streamProgress)<1e-12&&
    cell.duplicateCount===0&&
    attached===2&&
    detached===1;

  let lodTicks=0;
  const lod=new SimulationLODController07A({onSimulate:()=>{lodTicks++;}});
  lod.step({distanceM:10,dtMs:16,wallNow:1000});
  lod.step({distanceM:17,dtMs:0,wallNow:1016});
  for(let i=0;i<10;i++)lod.step({distanceM:20,dtMs:10,wallNow:1026+i*10});
  lod.step({distanceM:31,dtMs:0,wallNow:1200});
  for(let i=0;i<50;i++)lod.step({distanceM:40,dtMs:10,wallNow:1210+i*10});
  lod.step({distanceM:60,dtMs:0,wallNow:1800});
  const dormantTier=lod.tier;
  const ticksBeforeDormant=lod.totalTicks;
  lod.step({distanceM:60,dtMs:5000,wallNow:6800});
  lod.step({distanceM:45,dtMs:0,wallNow:6801});
  checks.lod_parity=
    dormantTier===SIM_LOD_TIERS_07A.DORMANT&&
    lod.totalTicks===ticksBeforeDormant&&
    lod.tier===SIM_LOD_TIERS_07A.FAR&&
    lod.sleepCount===1&&
    lod.wakeCount===1;

  checks.module_manifest=PRODUCTION_ARCHITECTURE_07A_RUNTIME.modules.length===8;
  checks.boundaries=
    PRODUCTION_ARCHITECTURE_07A_RUNTIME.boundaries.rendering.includes('no THREE')&&
    PRODUCTION_ARCHITECTURE_07A_RUNTIME.boundaries.dom==='none'&&
    PRODUCTION_ARCHITECTURE_07A_RUNTIME.boundaries.productionActorPipeline==='deferred to 07B';

  const failed=Object.entries(checks).filter(([,ok])=>!ok).map(([name])=>name);
  return {pass:failed.length===0,failed,checks};
}

const architectureProof07A=runProductionArchitectureProof07A();
setArchText07A(archModulesEl07A,String(PRODUCTION_ARCHITECTURE_07A_RUNTIME.modules.length));
setArchText07A(archBoundaryEl07A,architectureProof07A.checks.boundaries?'PURE CORE ✓':'FAIL',architectureProof07A.checks.boundaries?'#a8f0b5':'#ff9b9b');
setArchText07A(archParityEl07A,architectureProof07A.checks.priority_over_recency&&architectureProof07A.checks.offscreen_time_resolution?'PASS ✓':'FAIL',architectureProof07A.checks.priority_over_recency&&architectureProof07A.checks.offscreen_time_resolution?'#a8f0b5':'#ff9b9b');
setArchText07A(archStreamEl07A,architectureProof07A.checks.stream_parity&&architectureProof07A.checks.lod_parity?'PASS ✓':'FAIL',architectureProof07A.checks.stream_parity&&architectureProof07A.checks.lod_parity?'#a8f0b5':'#ff9b9b');

function updateProductionArchitecture07A(){
  const regression=globalThis.__livingWorld06J?.stage||'WAITING';
  setArchText07A(archRegressionEl07A,regression,regression==='PASS'?'#a8f0b5':regression==='FAIL'?'#ff9b9b':'#ffe59a');
  if(!architectureProof07A.pass){
    setArchText07A(archResultEl07A,'ARCHITECTURE PROOF FAILED · '+architectureProof07A.failed.join(' · '),'#ff9b9b');
  }else if(regression==='PASS'){
    setArchText07A(archResultEl07A,'PRODUCTION ARCHITECTURE PROMOTED ✓ · 06J REGRESSION PASS ✓','#a8f0b5');
  }else if(regression==='FAIL'){
    setArchText07A(archResultEl07A,'PRODUCTION CORE PASS ✓ · 06J REGRESSION FAILED','#ff9b9b');
  }else{
    setArchText07A(archResultEl07A,'PRODUCTION CORE PASS ✓ · WAITING FOR 06J REGRESSION','#ffe59a');
  }
}

updateProductionArchitecture07A();
const architectureStatusTimer07A=setInterval(()=>{
  updateProductionArchitecture07A();
  const regression=globalThis.__livingWorld06J?.stage||'WAITING';
  if(regression==='PASS'||regression==='FAIL')clearInterval(architectureStatusTimer07A);
},1000);

globalThis.__productionArchitecture07A={
  marker:PRODUCTION_ARCHITECTURE_07A_MARKER,
  manifest:PRODUCTION_ARCHITECTURE_07A_RUNTIME,
  proof:architectureProof07A,
  get regression(){return globalThis.__livingWorld06J?.stage||'WAITING';}
};


// ---- Test 07B: Production Actor Pipeline ----
import {ProductionActorPipeline as ProductionActorPipeline07B} from './production/actors/actor-pipeline-core.js';
import {ThreeProductionActorFactory as ThreeProductionActorFactory07B} from './production/actors/three-actor-adapter.js';

const PRODUCTION_ACTOR_PIPELINE_07B_MARKER='07B_PRODUCTION_ACTOR_PIPELINE';

const actorPipeline07B=new ProductionActorPipeline07B();
const actorDefinition07B=actorPipeline07B.registerDefinition({
  typeId:'HUMANOID_FORAGER_V1',
  asset:{id:'SOLDIER_GLB_V1',url:'./assets/Soldier.glb'},
  scale:.92,
  yawOffset:Math.PI,
  animationMap:{IDLE:'Idle',WALK:'Walk',RUN:'Run'},
  presentation:{castShadow:false,receiveShadow:true}
});

const actorAnchorX07B=playerRoot.position.x;
const actorAnchorZ07B=playerRoot.position.z;
const actorA07B=actorPipeline07B.createActor({
  id:'07B_ACTOR_A',
  typeId:actorDefinition07B.typeId,
  position:{x:actorAnchorX07B-3.2,y:groundHeight(actorAnchorX07B-3.2,actorAnchorZ07B-6.0),z:actorAnchorZ07B-6.0},
  yaw:.18,
  animationIntent:'IDLE',
  kernelOptions:{initialGoal:'FOOD',initialProgress:.22}
});
const actorB07B=actorPipeline07B.createActor({
  id:'07B_ACTOR_B',
  typeId:actorDefinition07B.typeId,
  position:{x:actorAnchorX07B+3.2,y:groundHeight(actorAnchorX07B+3.2,actorAnchorZ07B-7.0),z:actorAnchorZ07B-7.0},
  yaw:-.18,
  animationIntent:'WALK',
  kernelOptions:{initialGoal:'FOOD',initialProgress:.62}
});

const actorFactory07B=new ThreeProductionActorFactory07B({scene});
let actorBindings07B=[];
let actorPipelineState07B='LOADING ASSET';
let actorPipelineError07B='';
let actorReadyAt07B=0;

const markerGeo07B=new THREE.RingGeometry(.72,.92,24);
markerGeo07B.rotateX(-Math.PI/2);
const markerMat07B=new THREE.MeshBasicMaterial({color:0x78e0d3,transparent:true,opacity:.74,side:THREE.DoubleSide,depthWrite:false});
const markerMesh07B=new THREE.InstancedMesh(markerGeo07B,markerMat07B,2);
markerMesh07B.frustumCulled=false;
markerMesh07B.userData.productionActorMarkers=true;
const markerObj07B=new THREE.Object3D();
for(const [i,actor] of [actorA07B,actorB07B].entries()){
  markerObj07B.position.set(actor.position.x,actor.position.y+.025,actor.position.z);
  markerObj07B.rotation.set(0,0,0);
  markerObj07B.scale.setScalar(1);
  markerObj07B.updateMatrix();
  markerMesh07B.setMatrixAt(i,markerObj07B.matrix);
}
markerMesh07B.instanceMatrix.needsUpdate=true;
scene.add(markerMesh07B);

const actorStageEl07B=document.getElementById('actorStage07B');
const actorDefinitionsEl07B=document.getElementById('actorDefinitions07B');
const actorAssetLoadsEl07B=document.getElementById('actorAssetLoads07B');
const actorInstancesEl07B=document.getElementById('actorInstances07B');
const actorBindingsEl07B=document.getElementById('actorBindings07B');
const actorRootsEl07B=document.getElementById('actorRoots07B');
const actorMixersEl07B=document.getElementById('actorMixers07B');
const actorAnimationsEl07B=document.getElementById('actorAnimations07B');
const actorKernelsEl07B=document.getElementById('actorKernels07B');
const actorDuplicatesEl07B=document.getElementById('actorDuplicates07B');
const actorRegressionEl07B=document.getElementById('actorRegression07B');
const actorResultEl07B=document.getElementById('actorResult07B');

function setActorText07B(el,value,color){
  if(!el)return;
  if(el.textContent!==value)el.textContent=value;
  if(color&&el.style.color!==color)el.style.color=color;
}

function productionActorRoots07B(){
  return scene.children.filter(o=>o.userData?.productionActorId==='07B_ACTOR_A'||o.userData?.productionActorId==='07B_ACTOR_B');
}

function productionActorProof07B(){
  const roots=productionActorRoots07B();
  const uniqueRootUuids=new Set(roots.map(root=>root.uuid));
  const bindings=actorBindings07B.filter(Boolean);
  const uniqueModels=new Set(bindings.map(binding=>binding.model?.uuid).filter(Boolean));
  const mixers=bindings.filter(binding=>binding.mixer).length;
  const resolved=bindings.map(binding=>binding.resolvedAnimation).filter(name=>name&&name!=='NONE');
  const kernels=[actorA07B.kernel,actorB07B.kernel].filter(Boolean).length;
  const regression=globalThis.__livingWorld06J?.stage||'WAITING';
  const architecturePass=globalThis.__productionArchitecture07A?.proof?.pass===true;
  const checks={
    definitions:actorPipeline07B.definitions.list().length===1,
    asset_load_once:actorFactory07B.assetCache.loadCount===1,
    actors:actorPipeline07B.size===2,
    bindings:actorFactory07B.size===2&&bindings.length===2,
    unique_roots:roots.length===2&&uniqueRootUuids.size===2&&uniqueModels.size===2,
    independent_mixers:mixers===2,
    animations_resolved:resolved.length===2,
    kernels:kernels===2,
    stable_binding_claims:actorA07B.bindingClaims===1&&actorB07B.bindingClaims===1,
    duplicates:actorFactory07B.duplicateBindingCount===0,
    architecture:architecturePass,
    regression:regression==='PASS'
  };
  const failed=Object.entries(checks).filter(([,ok])=>!ok).map(([name])=>name);
  return {pass:failed.length===0,failed,checks,roots,bindings,resolved,regression,mixers,kernels};
}

async function bootProductionActors07B(){
  try{
    actorBindings07B=await Promise.all([
      actorFactory07B.bind(actorA07B),
      actorFactory07B.bind(actorB07B)
    ]);
    actorBindings07B[0].setAnimationIntent('IDLE',0);
    actorBindings07B[1].setAnimationIntent('WALK',0);
    actorPipelineState07B='READY';
    actorReadyAt07B=performance.now();
  }catch(error){
    actorPipelineState07B='FAIL';
    actorPipelineError07B=error?.message||String(error);
    console.error('07B production actor pipeline failed',error);
  }
}
bootProductionActors07B();

function updateActorHud07B(){
  const proof=productionActorProof07B();
  const ready=actorPipelineState07B==='READY';
  const architecturePass=proof.checks.architecture;
  const corePass=ready&&architecturePass&&
    proof.checks.definitions&&proof.checks.asset_load_once&&proof.checks.actors&&proof.checks.bindings&&
    proof.checks.unique_roots&&proof.checks.independent_mixers&&proof.checks.animations_resolved&&
    proof.checks.kernels&&proof.checks.stable_binding_claims&&proof.checks.duplicates;

  let stage=actorPipelineState07B;
  if(corePass&&proof.regression==='PASS')stage='PASS';
  else if(corePass)stage='WAITING REGRESSION';
  if(actorPipelineState07B==='FAIL')stage='FAIL';

  setActorText07B(actorStageEl07B,stage,stage==='PASS'?'#a8f0b5':stage==='FAIL'?'#ff9b9b':'#ffe59a');
  setActorText07B(actorDefinitionsEl07B,String(actorPipeline07B.definitions.list().length));
  setActorText07B(actorAssetLoadsEl07B,String(actorFactory07B.assetCache.loadCount));
  setActorText07B(actorInstancesEl07B,actorPipeline07B.size+'/2');
  setActorText07B(actorBindingsEl07B,actorFactory07B.size+'/2');
  setActorText07B(actorRootsEl07B,proof.roots.length+' / '+new Set(proof.roots.map(root=>root.uuid)).size);
  setActorText07B(actorMixersEl07B,String(proof.mixers));
  setActorText07B(actorAnimationsEl07B,proof.resolved.length?proof.resolved.join(' / '):'—');
  setActorText07B(actorKernelsEl07B,String(proof.kernels));
  setActorText07B(actorDuplicatesEl07B,String(actorFactory07B.duplicateBindingCount),actorFactory07B.duplicateBindingCount===0?'#a8f0b5':'#ff9b9b');
  setActorText07B(actorRegressionEl07B,proof.regression,proof.regression==='PASS'?'#a8f0b5':proof.regression==='FAIL'?'#ff9b9b':'#ffe59a');

  if(actorPipelineState07B==='FAIL'){
    setActorText07B(actorResultEl07B,'PIPELINE FAIL · '+actorPipelineError07B,'#ff9b9b');
  }else if(corePass&&proof.regression==='PASS'){
    setActorText07B(actorResultEl07B,'ACTOR PIPELINE ✓ · ASSET CACHE ✓ · INDEPENDENT INSTANCES ✓ · 06J REGRESSION PASS ✓','#a8f0b5');
  }else if(corePass){
    setActorText07B(actorResultEl07B,'ACTOR PIPELINE ✓ · WAITING FOR 06J REGRESSION','#ffe59a');
  }else if(ready){
    setActorText07B(actorResultEl07B,'PIPELINE CHECKING · '+proof.failed.filter(x=>x!=='regression').join(' · '),'#ffe59a');
  }else{
    setActorText07B(actorResultEl07B,'LOADING PRODUCTION ACTOR ASSET','#ffe59a');
  }
}

let actorHudNext07B=0;
const actorFrameHooks07B=globalThis.__raaiFrameHooks||(globalThis.__raaiFrameHooks=[]);
const actorFrameHook07B=(now,dt)=>{
  actorFactory07B.update(dt);
  if(now>=actorHudNext07B){
    updateActorHud07B();
    actorHudNext07B=now+1000;
  }
};
actorFrameHook07B.productionActorPipelineId='07B_PRODUCTION_ACTOR_PIPELINE';
if(!actorFrameHooks07B.some(h=>h.productionActorPipelineId==='07B_PRODUCTION_ACTOR_PIPELINE'))actorFrameHooks07B.push(actorFrameHook07B);

globalThis.__productionActorPipeline07B={
  marker:PRODUCTION_ACTOR_PIPELINE_07B_MARKER,
  pipeline:actorPipeline07B,
  factory:actorFactory07B,
  actors:[actorA07B,actorB07B],
  get state(){return actorPipelineState07B;},
  get proof(){return productionActorProof07B();}
};


// ---- Test 07C: Streamed Production Region ----
import {
  ProductionRegion as ProductionRegion07C,
  ProductionRegionStateStore as ProductionRegionStateStore07C
} from './production/regions/production-region-core.js';

const STREAMED_PRODUCTION_REGION_07C_MARKER='07C_STREAMED_PRODUCTION_REGION';

const inheritedActorSystem07C=globalThis.__productionActorPipeline07B;
if(!inheritedActorSystem07C)throw new Error('07C requires frozen accepted 07B actor pipeline');

const regionPipeline07C=inheritedActorSystem07C.pipeline;
const regionFactory07C=inheritedActorSystem07C.factory;
const regionDefinition07C=regionPipeline07C.definitions.get('HUMANOID_FORAGER_V1');

const regionCenter07C={
  x:playerRoot.position.x+12,
  z:playerRoot.position.z-10
};
const regionActorIds07C=['07C_REGION_ACTOR_A','07C_REGION_ACTOR_B'];

const regionBlueprints07C=[
  {
    id:regionActorIds07C[0],
    typeId:regionDefinition07C.typeId,
    position:{
      x:regionCenter07C.x-2.5,
      y:groundHeight(regionCenter07C.x-2.5,regionCenter07C.z),
      z:regionCenter07C.z
    },
    yaw:.22,
    animationIntent:'IDLE',
    kernelOptions:{initialGoal:'FOOD',initialProgress:.28}
  },
  {
    id:regionActorIds07C[1],
    typeId:regionDefinition07C.typeId,
    position:{
      x:regionCenter07C.x+2.5,
      y:groundHeight(regionCenter07C.x+2.5,regionCenter07C.z-.6),
      z:regionCenter07C.z-.6
    },
    yaw:-.22,
    animationIntent:'WALK',
    kernelOptions:{initialGoal:'FOOD',initialProgress:.58}
  }
];

const regionStore07C=new ProductionRegionStateStore07C();
const productionRegion07C=new ProductionRegion07C({
  id:'07C_PRODUCTION_REGION_A',
  pipeline:regionPipeline07C,
  store:regionStore07C,
  actorBlueprints:regionBlueprints07C,
  bindActor:actor=>regionFactory07C.bind(actor),
  unbindActor:actor=>regionFactory07C.unbind(actor.id),
  loadRadiusM:24,
  unloadRadiusM:38
});

let regionDistance07C=Infinity;
let regionOperationError07C='';
let regionLastAction07C='WAITING';
let regionLastUnloadProgress07C=null;
let regionLastRestoreProgress07C=null;
let regionHudNext07C=0;

const regionMarkerGeo07C=new THREE.RingGeometry(5.4,5.75,48);
regionMarkerGeo07C.rotateX(-Math.PI/2);
const regionMarkerMat07C=new THREE.MeshBasicMaterial({
  color:0x5ed8cf,
  transparent:true,
  opacity:.58,
  side:THREE.DoubleSide,
  depthWrite:false
});
const regionMarker07C=new THREE.Mesh(regionMarkerGeo07C,regionMarkerMat07C);
regionMarker07C.position.set(
  regionCenter07C.x,
  groundHeight(regionCenter07C.x,regionCenter07C.z)+.035,
  regionCenter07C.z
);
regionMarker07C.userData.productionRegionDiagnostic=true;
scene.add(regionMarker07C);

const regionStageEl07C=document.getElementById('regionStage07C');
const regionDistanceEl07C=document.getElementById('regionDistance07C');
const regionActorsEl07C=document.getElementById('regionActors07C');
const regionBindingsEl07C=document.getElementById('regionBindings07C');
const regionAssetLoadsEl07C=document.getElementById('regionAssetLoads07C');
const regionSnapshotEl07C=document.getElementById('regionSnapshot07C');
const regionOffscreenEl07C=document.getElementById('regionOffscreen07C');
const regionIdsEl07C=document.getElementById('regionIds07C');
const regionProgressEl07C=document.getElementById('regionProgress07C');
const regionCyclesEl07C=document.getElementById('regionCycles07C');
const regionDuplicatesEl07C=document.getElementById('regionDuplicates07C');
const regionRegressionEl07C=document.getElementById('regionRegression07C');
const regionResultEl07C=document.getElementById('regionResult07C');

function setRegionText07C(el,value,color){
  if(!el)return;
  if(el.textContent!==value)el.textContent=value;
  if(color&&el.style.color!==color)el.style.color=color;
}

function activeRegionRoots07C(){
  const ids=new Set(regionActorIds07C);
  return scene.children.filter(root=>ids.has(root.userData?.productionActorId));
}

function activeRegionBindings07C(){
  return regionActorIds07C.filter(id=>regionFactory07C.getBinding(id)).length;
}

function savedProgress07C(){
  const snapshot=regionStore07C.load(productionRegion07C.id);
  const actor=snapshot?.actors?.find(item=>item.actorId===regionActorIds07C[0]);
  return actor?.kernel?.goals?.progress;
}

function liveProgress07C(){
  const actor=regionPipeline07C.getActor(regionActorIds07C[0]);
  return actor?.kernel?.goals?.progress;
}

function runRegionRuntimeProof07C(){
  const roots=activeRegionRoots07C();
  const rootIds=new Set(roots.map(root=>root.userData?.productionActorId));
  const activeActors=productionRegion07C.activeActors;
  const duplicates=productionRegion07C.duplicateCount+regionFactory07C.duplicateBindingCount;
  const regression=globalThis.__livingWorld06J?.stage||'WAITING';
  const staticControlsPresent=
    !!regionPipeline07C.getActor('07B_ACTOR_A')&&
    !!regionPipeline07C.getActor('07B_ACTOR_B');

  const checks={
    asset_load_one:regionFactory07C.assetCache.loadCount===1,
    static_controls_present:staticControlsPresent,
    actor_count:productionRegion07C.isActive?activeActors.length===2:activeActors.length===0,
    bindings:productionRegion07C.isActive?activeRegionBindings07C()===2:activeRegionBindings07C()===0,
    roots:productionRegion07C.isActive?roots.length===2&&rootIds.size===2:roots.length===0,
    snapshot:productionRegion07C.unloadCount===0||productionRegion07C.hasSnapshot,
    ids_stable:productionRegion07C.restoreCount===0||productionRegion07C.lastRestoreIdsStable,
    progress_preserved:productionRegion07C.restoreCount===0||productionRegion07C.lastRestoreProgressPreserved,
    duplicates:duplicates===0,
    regression:regression==='PASS'
  };
  const failed=Object.entries(checks).filter(([,ok])=>!ok).map(([name])=>name);
  return {pass:failed.length===0,failed,checks,duplicates,regression,roots,activeActors};
}

function updateRegionHud07C(){
  const proof=runRegionRuntimeProof07C();
  const lifecycle=productionRegion07C.lifecycle;
  const lifecycleColor=lifecycle==='ACTIVE'?'#a8f0b5':
    lifecycle==='UNLOADED'?'#ffd18a':
    lifecycle==='LOADING'||lifecycle==='REHYDRATING'?'#9fe0ff':
    lifecycle==='SERIALIZING'||lifecycle==='UNLOADING'?'#ffe59a':'#ffe59a';

  setRegionText07C(regionStageEl07C,lifecycle,lifecycleColor);
  setRegionText07C(regionDistanceEl07C,regionDistance07C.toFixed(1)+' m');
  setRegionText07C(regionActorsEl07C,productionRegion07C.activeActors.length+'/2');
  setRegionText07C(regionBindingsEl07C,activeRegionBindings07C()+'/2');
  setRegionText07C(regionAssetLoadsEl07C,String(regionFactory07C.assetCache.loadCount),regionFactory07C.assetCache.loadCount===1?'#a8f0b5':'#ff9b9b');
  setRegionText07C(regionSnapshotEl07C,productionRegion07C.hasSnapshot?'SAVED':'NONE',productionRegion07C.hasSnapshot?'#9fe0ff':'#d8ebe5');
  setRegionText07C(regionOffscreenEl07C,(productionRegion07C.lastOffscreenMs/1000).toFixed(1)+' s');
  setRegionText07C(regionIdsEl07C,productionRegion07C.restoreCount===0?'PENDING':productionRegion07C.lastRestoreIdsStable?'STABLE ✓':'FAIL',
    productionRegion07C.restoreCount===0?'#ffe59a':productionRegion07C.lastRestoreIdsStable?'#a8f0b5':'#ff9b9b');

  const live=liveProgress07C();
  const saved=savedProgress07C();
  const progressLabel=Number.isFinite(live)?Math.round(live*100)+'%':
    Number.isFinite(saved)?Math.round(saved*100)+'% saved':'—';
  setRegionText07C(regionProgressEl07C,progressLabel);

  setRegionText07C(regionCyclesEl07C,productionRegion07C.unloadCount+'/'+productionRegion07C.restoreCount);
  setRegionText07C(regionDuplicatesEl07C,String(proof.duplicates),proof.duplicates===0?'#a8f0b5':'#ff9b9b');
  setRegionText07C(regionRegressionEl07C,proof.regression,proof.regression==='PASS'?'#a8f0b5':proof.regression==='FAIL'?'#ff9b9b':'#ffe59a');

  if(regionOperationError07C){
    setRegionText07C(regionResultEl07C,'REGION FAIL · '+regionOperationError07C,'#ff9b9b');
  }else if(
    productionRegion07C.restoreCount>0&&
    productionRegion07C.isActive&&
    productionRegion07C.lastRestoreIdsStable&&
    productionRegion07C.lastRestoreProgressPreserved&&
    regionFactory07C.assetCache.loadCount===1&&
    proof.duplicates===0&&
    proof.regression==='PASS'
  ){
    setRegionText07C(
      regionResultEl07C,
      'REGION RESTORED ✓ · IDS STABLE ✓ · PROGRESS PRESERVED ✓ · ASSET LOAD 1 ✓ · NO DUPLICATES ✓ · 06J REGRESSION PASS ✓',
      '#a8f0b5'
    );
  }else if(lifecycle==='UNLOADED'&&productionRegion07C.hasSnapshot){
    setRegionText07C(regionResultEl07C,'REGION UNLOADED ✓ · ACTORS REMOVED ✓ · SNAPSHOT SAVED ✓','#ffe59a');
  }else if(lifecycle==='ACTIVE'){
    setRegionText07C(regionResultEl07C,regionLastAction07C,'#ffe59a');
  }else{
    setRegionText07C(regionResultEl07C,regionLastAction07C,'#ffe59a');
  }
}

function startRegionLoad07C(wallNow){
  if(productionRegion07C.operation)return;
  regionLastAction07C=productionRegion07C.hasSnapshot?'REHYDRATING PRODUCTION REGION':'LOADING PRODUCTION REGION';
  productionRegion07C.load(wallNow).then(result=>{
    regionOperationError07C='';
    if(result.rehydrated){
      regionLastRestoreProgress07C=liveProgress07C();
      regionLastAction07C='REGION REHYDRATED · VERIFYING CONTINUITY';
    }else{
      regionLastAction07C='REGION ACTIVE · LEAVE PAST 38 m';
    }
    updateRegionHud07C();
  }).catch(error=>{
    regionOperationError07C=error?.message||String(error);
    updateRegionHud07C();
  });
}

function startRegionUnload07C(wallNow){
  if(productionRegion07C.operation)return;
  regionLastUnloadProgress07C=liveProgress07C();
  regionLastAction07C='SERIALIZING / UNLOADING REGION';
  productionRegion07C.unload(wallNow).then(()=>{
    regionOperationError07C='';
    regionLastAction07C='REGION UNLOADED · RETURN INSIDE 24 m';
    updateRegionHud07C();
  }).catch(error=>{
    regionOperationError07C=error?.message||String(error);
    updateRegionHud07C();
  });
}

const regionFrameHooks07C=globalThis.__raaiFrameHooks||(globalThis.__raaiFrameHooks=[]);
const regionFrameHook07C=(now,dt)=>{
  const wallNow=Date.now();
  regionDistance07C=Math.hypot(
    playerRoot.position.x-regionCenter07C.x,
    playerRoot.position.z-regionCenter07C.z
  );

  if(!productionRegion07C.operation){
    if(productionRegion07C.lifecycle==='UNLOADED'&&regionDistance07C<=productionRegion07C.loadRadiusM){
      startRegionLoad07C(wallNow);
    }else if(productionRegion07C.lifecycle==='ACTIVE'&&regionDistance07C>=productionRegion07C.unloadRadiusM){
      startRegionUnload07C(wallNow);
    }
  }

  if(productionRegion07C.isActive){
    productionRegion07C.update({
      dtMs:Math.max(0,dt*1000),
      now:wallNow,
      foodProgressPerSecond:.006
    });
  }

  if(now>=regionHudNext07C){
    updateRegionHud07C();
    regionHudNext07C=now+500;
  }
};
regionFrameHook07C.productionRegionId='07C_PRODUCTION_REGION';
if(!regionFrameHooks07C.some(h=>h.productionRegionId==='07C_PRODUCTION_REGION'))regionFrameHooks07C.push(regionFrameHook07C);

globalThis.__streamedProductionRegion07C={
  marker:STREAMED_PRODUCTION_REGION_07C_MARKER,
  region:productionRegion07C,
  store:regionStore07C,
  center:{...regionCenter07C},
  actorIds:[...regionActorIds07C],
  get distanceM(){return regionDistance07C;},
  get proof(){return runRegionRuntimeProof07C();},
  get lastUnloadProgress(){return regionLastUnloadProgress07C;},
  get lastRestoreProgress(){return regionLastRestoreProgress07C;}
};
