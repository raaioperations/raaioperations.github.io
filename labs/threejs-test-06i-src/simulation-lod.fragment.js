
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
