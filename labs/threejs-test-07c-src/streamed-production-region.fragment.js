
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
