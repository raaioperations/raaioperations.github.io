
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
