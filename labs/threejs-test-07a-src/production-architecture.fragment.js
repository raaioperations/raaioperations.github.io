
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
  el.textContent=value;
  if(color)el.style.color=color;
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

const frameHooks07A=globalThis.__raaiFrameHooks||(globalThis.__raaiFrameHooks=[]);
const frameHook07A=()=>updateProductionArchitecture07A();
frameHook07A.productionArchitectureId='07A_PRODUCTION_ARCHITECTURE';
if(!frameHooks07A.some(h=>h.productionArchitectureId==='07A_PRODUCTION_ARCHITECTURE'))frameHooks07A.push(frameHook07A);

globalThis.__productionArchitecture07A={
  marker:PRODUCTION_ARCHITECTURE_07A_MARKER,
  manifest:PRODUCTION_ARCHITECTURE_07A_RUNTIME,
  proof:architectureProof07A,
  get regression(){return globalThis.__livingWorld06J?.stage||'WAITING';}
};
