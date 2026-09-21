
// ---- Test 07D: Production Vertical Slice ----
import {ProductionVerticalSliceCoordinator as ProductionVerticalSliceCoordinator07D} from './production/vertical-slice/production-vertical-slice-core.js';

const PRODUCTION_VERTICAL_SLICE_07D_MARKER='07D_PRODUCTION_VERTICAL_SLICE';

const regionSystem07D=globalThis.__streamedProductionRegion07C;
const actorSystem07D=globalThis.__productionActorPipeline07B;
if(!regionSystem07D||!actorSystem07D)throw new Error('07D requires frozen accepted 07B + 07C runtime');

const region07D=regionSystem07D.region;
const pipeline07D=actorSystem07D.pipeline;
const factory07D=actorSystem07D.factory;
const actorId07D='07C_REGION_ACTOR_A';

const coordinator07D=new ProductionVerticalSliceCoordinator07D({
  region:region07D,
  pipeline:pipeline07D,
  actorId:actorId07D,
  hazardCenter:{x:regionSystem07D.center.x,z:regionSystem07D.center.z},
  triggerDelayMs:1800
});

let sliceLastIntent07D='';
let sliceHudNext07D=0;
let sliceBehaviorLoopPass07D=false;
let sliceStreamPass07D=false;
let sliceLastCompletion07D=null;

const beaconGeo07D=new THREE.RingGeometry(1.05,1.35,32);
beaconGeo07D.rotateX(-Math.PI/2);
const beaconMat07D=new THREE.MeshBasicMaterial({
  color:0x5fd8cf,
  transparent:true,
  opacity:.62,
  side:THREE.DoubleSide,
  depthWrite:false
});
const beacon07D=new THREE.Mesh(beaconGeo07D,beaconMat07D);
beacon07D.position.set(
  regionSystem07D.center.x,
  groundHeight(regionSystem07D.center.x,regionSystem07D.center.z)+.05,
  regionSystem07D.center.z
);
beacon07D.userData.productionVerticalSliceBeacon=true;
scene.add(beacon07D);

const sliceStageEl07D=document.getElementById('sliceStage07D');
const sliceRegionEl07D=document.getElementById('sliceRegion07D');
const sliceGoalEl07D=document.getElementById('sliceGoal07D');
const sliceMemoryEl07D=document.getElementById('sliceMemory07D');
const sliceAnimEl07D=document.getElementById('sliceAnim07D');
const sliceBehaviorEl07D=document.getElementById('sliceBehavior07D');
const sliceStreamEl07D=document.getElementById('sliceStream07D');
const sliceIdsEl07D=document.getElementById('sliceIds07D');
const sliceProgressEl07D=document.getElementById('sliceProgress07D');
const sliceAssetEl07D=document.getElementById('sliceAsset07D');
const sliceDuplicatesEl07D=document.getElementById('sliceDuplicates07D');
const sliceRegressionEl07D=document.getElementById('sliceRegression07D');
const sliceResultEl07D=document.getElementById('sliceResult07D');

function setSliceText07D(el,value,color){
  if(!el)return;
  if(el.textContent!==value)el.textContent=value;
  if(color&&el.style.color!==color)el.style.color=color;
}

function actorState07D(){
  const actor=pipeline07D.getActor(actorId07D);
  if(!actor)return {actor:null,binding:null,goal:'UNLOADED',memory:'UNLOADED',intent:'NONE',progress:null};
  const binding=factory07D.getBinding(actorId07D);
  return {
    actor,
    binding,
    goal:actor.kernel.goals.activeGoal,
    memory:actor.kernel.memory.state,
    intent:actor.animationIntent,
    progress:actor.kernel.goals.progress
  };
}

function syncProductionPresentation07D(){
  const state=actorState07D();
  if(!state.actor||!state.binding)return state;

  let desired='WALK';
  if(state.goal==='HAZARD')desired='RUN';
  else if(state.goal==='FOOD REACHED')desired='IDLE';

  if(sliceLastIntent07D!==desired||state.actor.animationIntent!==desired){
    state.binding.setAnimationIntent(desired,.12);
    sliceLastIntent07D=desired;
  }

  if(state.memory==='DISTURBED'){
    beaconMat07D.color.setHex(0xe49a42);
    beaconMat07D.opacity=.9;
  }else if(state.memory==='SETTLING'){
    beaconMat07D.color.setHex(0xd9c46b);
    beaconMat07D.opacity=.76;
  }else{
    beaconMat07D.color.setHex(0x5fd8cf);
    beaconMat07D.opacity=.62;
  }
  return actorState07D();
}

function combinedDuplicates07D(){
  return region07D.duplicateCount+factory07D.duplicateBindingCount;
}

function updateSliceHud07D(){
  const state=actorState07D();
  const regression=globalThis.__livingWorld06J?.stage||'WAITING';
  const completion=coordinator07D.completion({
    assetLoadCount:factory07D.assetCache.loadCount,
    duplicateCount:combinedDuplicates07D(),
    regressionStatus:regression
  });
  sliceLastCompletion07D=completion;

  sliceBehaviorLoopPass07D=
    coordinator07D.hazardObserved&&
    coordinator07D.recoveryObserved&&
    completion.checks.progress_preserved;

  sliceStreamPass07D=
    coordinator07D.streamOutObserved&&
    coordinator07D.restoreObserved&&
    completion.checks.region_ids_stable&&
    completion.checks.region_progress_preserved;

  setSliceText07D(sliceStageEl07D,completion.pass?'PASS':coordinator07D.stage,completion.pass?'#a8f0b5':'#ffe59a');
  setSliceText07D(sliceRegionEl07D,region07D.lifecycle,region07D.isActive?'#a8f0b5':region07D.lifecycle==='UNLOADED'?'#ffd18a':'#9fe0ff');
  setSliceText07D(sliceGoalEl07D,state.goal,state.goal==='HAZARD'?'#ffd18a':'#a8f0b5');
  setSliceText07D(sliceMemoryEl07D,state.memory,state.memory==='CALM'?'#a8f0b5':'#ffd18a');
  setSliceText07D(sliceAnimEl07D,state.binding?.resolvedAnimation||state.intent||'NONE');
  setSliceText07D(sliceBehaviorEl07D,sliceBehaviorLoopPass07D?'PASS ✓':
    coordinator07D.hazardObserved?'HAZARD OBSERVED':
    coordinator07D.hazardEventId?'EVENT EMITTED':'WAITING',
    sliceBehaviorLoopPass07D?'#a8f0b5':'#ffe59a');
  setSliceText07D(sliceStreamEl07D,sliceStreamPass07D?'PASS ✓':
    coordinator07D.streamOutObserved?'UNLOADED ✓ · RETURN':'PENDING',
    sliceStreamPass07D?'#a8f0b5':'#ffe59a');
  setSliceText07D(sliceIdsEl07D,region07D.restoreCount===0?'PENDING':region07D.lastRestoreIdsStable?'STABLE ✓':'FAIL',
    region07D.restoreCount===0?'#ffe59a':region07D.lastRestoreIdsStable?'#a8f0b5':'#ff9b9b');
  setSliceText07D(sliceProgressEl07D,Number.isFinite(state.progress)?Math.round(state.progress*100)+'%':
    Number.isFinite(coordinator07D.recoveredProgress)?Math.round(coordinator07D.recoveredProgress*100)+'% saved':'—');
  setSliceText07D(sliceAssetEl07D,String(factory07D.assetCache.loadCount),factory07D.assetCache.loadCount===1?'#a8f0b5':'#ff9b9b');
  setSliceText07D(sliceDuplicatesEl07D,String(combinedDuplicates07D()),combinedDuplicates07D()===0?'#a8f0b5':'#ff9b9b');
  setSliceText07D(sliceRegressionEl07D,regression,regression==='PASS'?'#a8f0b5':regression==='FAIL'?'#ff9b9b':'#ffe59a');

  if(completion.pass){
    setSliceText07D(
      sliceResultEl07D,
      'PRODUCTION VERTICAL SLICE ✓ · BEHAVIOR LOOP ✓ · STREAM RESTORE ✓ · ASSET PIPELINE ✓ · PERFORMANCE PASS ✓',
      '#a8f0b5'
    );
  }else if(regression==='FAIL'){
    setSliceText07D(sliceResultEl07D,'VERTICAL SLICE BLOCKED · PERFORMANCE REGRESSION FAILED','#ff9b9b');
  }else if(sliceBehaviorLoopPass07D&&!sliceStreamPass07D){
    setSliceText07D(sliceResultEl07D,'BEHAVIOR LOOP ✓ · LEAVE REGION PAST 38 m, THEN RETURN INSIDE 24 m','#ffe59a');
  }else{
    setSliceText07D(sliceResultEl07D,'OBSERVE FOOD → HAZARD → FOOD RECOVERY','#ffe59a');
  }
}

const sliceFrameHooks07D=globalThis.__raaiFrameHooks||(globalThis.__raaiFrameHooks=[]);
const sliceFrameHook07D=(now)=>{
  const wallNow=Date.now();
  coordinator07D.update(wallNow);
  syncProductionPresentation07D();

  const pulse=1+Math.sin(now*.006)*.08;
  beacon07D.scale.setScalar(pulse);

  if(now>=sliceHudNext07D){
    updateSliceHud07D();
    sliceHudNext07D=now+500;
  }
};
sliceFrameHook07D.productionVerticalSliceId='07D_PRODUCTION_VERTICAL_SLICE';
if(!sliceFrameHooks07D.some(h=>h.productionVerticalSliceId==='07D_PRODUCTION_VERTICAL_SLICE'))sliceFrameHooks07D.push(sliceFrameHook07D);

globalThis.__productionVerticalSlice07D={
  marker:PRODUCTION_VERTICAL_SLICE_07D_MARKER,
  coordinator:coordinator07D,
  get completion(){return sliceLastCompletion07D;},
  get behaviorLoopPass(){return sliceBehaviorLoopPass07D;},
  get streamPass(){return sliceStreamPass07D;}
};
