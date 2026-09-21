
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
