import * as THREE from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';

const ASSET_BASE='/assets/3d/sunlit-basin/v1/';
const manifest=await fetch(ASSET_BASE+'asset_manifest.generated.json',{cache:'no-store'}).then(r=>{
  if(!r.ok)throw new Error('Manifest '+r.status);
  return r.json();
});

const names=Object.keys(manifest.assets);
const scene=new THREE.Scene();
scene.background=new THREE.Color(0xb9d0d2);
scene.fog=new THREE.Fog(0xb9d0d2,24,70);

const camera=new THREE.PerspectiveCamera(48,innerWidth/innerHeight,.05,160);
camera.position.set(9,6,12);

const renderer=new THREE.WebGLRenderer({antialias:true,powerPreference:'high-performance'});
renderer.outputColorSpace=THREE.SRGBColorSpace;
renderer.toneMapping=THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure=1.0;
renderer.shadowMap.enabled=true;
renderer.shadowMap.type=THREE.PCFSoftShadowMap;
renderer.setPixelRatio(Math.min(devicePixelRatio,1.75));
renderer.setSize(innerWidth,innerHeight);
document.body.prepend(renderer.domElement);

scene.add(new THREE.HemisphereLight(0xd9efff,0x56604b,1.7));
const sun=new THREE.DirectionalLight(0xffe3ba,3.2);
sun.position.set(-9,15,7);
sun.castShadow=true;
sun.shadow.mapSize.set(1024,1024);
sun.shadow.camera.left=-14;sun.shadow.camera.right=14;
sun.shadow.camera.top=14;sun.shadow.camera.bottom=-14;
sun.shadow.camera.near=.5;sun.shadow.camera.far=45;
scene.add(sun);

const floor=new THREE.Mesh(
  new THREE.CircleGeometry(16,64),
  new THREE.MeshStandardMaterial({color:0x7e9e69,roughness:.95,metalness:0})
);
floor.rotation.x=-Math.PI/2;
floor.receiveShadow=true;
scene.add(floor);

const ring=new THREE.Mesh(
  new THREE.RingGeometry(4.4,4.48,72),
  new THREE.MeshBasicMaterial({color:0xf1e8c8,transparent:true,opacity:.45,side:THREE.DoubleSide})
);
ring.rotation.x=-Math.PI/2;
ring.position.y=.015;
scene.add(ring);

const controls=new OrbitControls(camera,renderer.domElement);
controls.enableDamping=true;
controls.dampingFactor=.075;
controls.target.set(0,2.5,0);
controls.minDistance=3;
controls.maxDistance=35;

const loader=new GLTFLoader();
const loaded=new Map();
const root=new THREE.Group();
scene.add(root);

const title=document.getElementById('assetName');
const count=document.getElementById('assetCount');
const stats=document.getElementById('assetStats');
const materials=document.getElementById('assetMaterials');
const status=document.getElementById('status');
const prev=document.getElementById('prev');
const next=document.getElementById('next');
const spin=document.getElementById('spin');
const list=document.getElementById('assetList');

let index=0;
let autoSpin=true;
let active=null;
let loadFailures=0;

function nice(name){
  return name.replace('.glb','').replaceAll('_',' ').replace(/\b\w/g,c=>c.toUpperCase());
}

function fitCamera(object){
  const box=new THREE.Box3().setFromObject(object);
  const sphere=box.getBoundingSphere(new THREE.Sphere());
  const radius=Math.max(.75,sphere.radius);
  const center=sphere.center.clone();
  controls.target.copy(center);
  const dist=Math.max(4.5,radius*2.75);
  camera.position.copy(center).add(new THREE.Vector3(dist*.72,dist*.42,dist));
  camera.near=Math.max(.02,dist/500);
  camera.far=Math.max(80,dist*20);
  camera.updateProjectionMatrix();
  controls.minDistance=Math.max(1.5,radius*1.1);
  controls.maxDistance=Math.max(15,radius*7);
  controls.update();
}

function updateList(){
  [...list.children].forEach((el,i)=>el.classList.toggle('active',i===index));
}

async function ensure(name){
  if(loaded.has(name))return loaded.get(name);
  const gltf=await loader.loadAsync(ASSET_BASE+name);
  const obj=gltf.scene;
  obj.traverse(o=>{
    if(o.isMesh){
      o.castShadow=true;
      o.receiveShadow=true;
      if(o.material){
        const mats=Array.isArray(o.material)?o.material:[o.material];
        for(const m of mats){
          m.envMapIntensity=.35;
          m.needsUpdate=true;
        }
      }
    }
  });
  loaded.set(name,obj);
  return obj;
}

async function show(i){
  index=(i+names.length)%names.length;
  status.textContent='LOADING';
  status.className='amber';
  if(active)root.remove(active);
  const name=names[index];
  try{
    active=await ensure(name);
    root.add(active);
    active.rotation.y=0;
    fitCamera(active);
    const m=manifest.assets[name];
    title.textContent=nice(name);
    count.textContent=(index+1)+' / '+names.length;
    stats.textContent=m.triangles.toLocaleString()+' triangles · '+m.bytes.toLocaleString()+' bytes · '+m.bounds_m.join(' × ')+' m';
    materials.textContent=m.materials.join(' · ');
    status.textContent='GLB LOADED';
    status.className='pass';
  }catch(error){
    loadFailures++;
    title.textContent=nice(name);
    stats.textContent=String(error?.message||error);
    materials.textContent='—';
    status.textContent='LOAD FAIL';
    status.className='fail';
  }
  updateList();
}

for(const [i,name] of names.entries()){
  const b=document.createElement('button');
  b.textContent=nice(name);
  b.onclick=()=>show(i);
  list.appendChild(b);
}
prev.onclick=()=>show(index-1);
next.onclick=()=>show(index+1);
spin.onclick=()=>{
  autoSpin=!autoSpin;
  spin.textContent=autoSpin?'AUTO ROTATE: ON':'AUTO ROTATE: OFF';
};
addEventListener('keydown',e=>{
  if(e.key==='ArrowLeft')show(index-1);
  if(e.key==='ArrowRight')show(index+1);
  if(e.key===' ')autoSpin=!autoSpin;
});
addEventListener('resize',()=>{
  camera.aspect=innerWidth/innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth,innerHeight);
});

const clock=new THREE.Clock();
function frame(){
  const dt=Math.min(.05,clock.getDelta());
  if(active&&autoSpin)active.rotation.y+=dt*.34;
  controls.update();
  renderer.render(scene,camera);
  requestAnimationFrame(frame);
}
await show(0);
frame();

globalThis.__assetKit09C={
  manifest,
  names,
  loaded,
  get active(){return names[index];},
  get loadFailures(){return loadFailures;}
};
