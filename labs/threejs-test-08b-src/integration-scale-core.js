export const SCALE_ACTOR_COUNT_06J=192;
export const SCALE_RING_SIZE_06J=48;
export const SCALE_RING_RADII_06J=Object.freeze([10,20,40,64]);

export const PERFORMANCE_BUDGET_06J=Object.freeze({
  warmupMs:4000,
  measureMs:15000,
  minMeasuredFrames:300,
  avgFrameMsMax:17.8,
  p95FrameMsMax:20.5,
  p99FrameMsMax:34.0,
  avgAuditCpuMsMax:2.0,
  p95AuditCpuMsMax:4.0,
  drawCallsMax:120,
  trianglesMax:350000
});

const clone=value=>JSON.parse(JSON.stringify(value));

export function createScaleActor06J(index,wallNow){
  if(!Number.isInteger(index)||index<0||index>=SCALE_ACTOR_COUNT_06J)throw new Error('06J invalid actor index');
  const ring=Math.floor(index/SCALE_RING_SIZE_06J);
  const slot=index%SCALE_RING_SIZE_06J;
  const angle=(slot/SCALE_RING_SIZE_06J)*Math.PI*2+ring*.173;
  const radius=SCALE_RING_RADII_06J[ring]+((slot%5)-2)*.28;
  const tangent=angle+Math.PI*.5;
  const localStart={x:Math.cos(angle)*radius,z:Math.sin(angle)*radius};
  const localDestination={
    x:localStart.x+Math.cos(tangent)*(3.4+(index%4)*.35),
    z:localStart.z+Math.sin(tangent)*(3.4+(index%4)*.35)
  };
  const disturbed=index%4===0;
  const progress=(index%17)*.013;
  return {
    id:'06J_ACTOR_'+String(index).padStart(3,'0'),
    index,
    ring,
    localStart,
    localDestination,
    position:{...localStart},
    goal:'FOOD',
    suspendedGoal:'NONE',
    behaviorState:'SEEKING_FOOD',
    progress,
    winner:disturbed?'HAZARD':'FOOD',
    memory:{
      state:disturbed?'DISTURBED':'CALM',
      expiresAt:disturbed?wallNow+20000+(index%5)*1000:0
    },
    visualActive:true,
    snapshot:null,
    sleepCount:0,
    wakeCount:0
  };
}

export function advanceScaleActor06J(actor,stepMs,wallNow){
  if(!actor)throw new Error('06J actor required');
  const dt=Math.max(0,Number.isFinite(stepMs)?stepMs:0);
  if(actor.memory.state!=='CALM'&&wallNow>=actor.memory.expiresAt){
    actor.memory.state='CALM';
    actor.memory.expiresAt=0;
  }
  actor.winner=actor.memory.state==='DISTURBED'?'HAZARD':'FOOD';

  if(actor.winner==='HAZARD'){
    if(actor.goal!=='HAZARD'){
      if(actor.goal==='FOOD')actor.suspendedGoal='FOOD';
      actor.goal='HAZARD';
      actor.behaviorState='EVADING';
    }
  }else if(actor.suspendedGoal==='FOOD'){
    actor.goal='FOOD';
    actor.suspendedGoal='NONE';
    actor.behaviorState='SEEKING_FOOD';
  }

  if(actor.goal==='FOOD'&&actor.behaviorState==='SEEKING_FOOD'){
    actor.progress=Math.min(1,actor.progress+dt/120000);
    if(actor.progress>=1){
      actor.progress=1;
      actor.goal='FOOD REACHED';
      actor.behaviorState='COMPLETE';
    }
  }

  const p=actor.progress;
  actor.position.x=actor.localStart.x+(actor.localDestination.x-actor.localStart.x)*p;
  actor.position.z=actor.localStart.z+(actor.localDestination.z-actor.localStart.z)*p;
  return actor;
}

export function snapshotScaleActor06J(actor,schemaVersion,wallNow){
  return {
    version:schemaVersion,
    cellId:actor.id,
    serializedAt:wallNow,
    state:{
      goal:actor.goal,
      suspendedGoal:actor.suspendedGoal,
      behaviorState:actor.behaviorState,
      progress:actor.progress,
      winner:actor.winner,
      memory:clone(actor.memory),
      position:clone(actor.position),
      localStart:clone(actor.localStart),
      localDestination:clone(actor.localDestination)
    }
  };
}

export function restoreScaleActor06J(actor,snapshot,wallNow){
  if(!snapshot||snapshot.cellId!==actor.id)throw new Error('06J snapshot mismatch');
  const s=snapshot.state;
  actor.goal=s.goal;
  actor.suspendedGoal=s.suspendedGoal;
  actor.behaviorState=s.behaviorState;
  actor.progress=s.progress;
  actor.winner=s.winner;
  actor.memory=clone(s.memory);
  actor.position=clone(s.position);
  actor.localStart=clone(s.localStart);
  actor.localDestination=clone(s.localDestination);
  advanceScaleActor06J(actor,0,wallNow);
  return Math.max(0,wallNow-snapshot.serializedAt);
}

export function percentile06J(values,p){
  if(!values.length)return 0;
  const sorted=[...values].sort((a,b)=>a-b);
  const index=Math.min(sorted.length-1,Math.max(0,Math.ceil((p/100)*sorted.length)-1));
  return sorted[index];
}

export function summarizePerformance06J({
  frameSamples=[],
  cpuSamples=[],
  drawCallsMax=0,
  trianglesMax=0,
  actorCount=0,
  duplicateCount=0,
  limits=PERFORMANCE_BUDGET_06J
}={}){
  const avg=arr=>arr.length?arr.reduce((a,b)=>a+b,0)/arr.length:0;
  const frameAvg=avg(frameSamples);
  const frameP95=percentile06J(frameSamples,95);
  const frameP99=percentile06J(frameSamples,99);
  const frameWorst=frameSamples.length?Math.max(...frameSamples):0;
  const cpuAvg=avg(cpuSamples);
  const cpuP95=percentile06J(cpuSamples,95);
  const cpuWorst=cpuSamples.length?Math.max(...cpuSamples):0;

  const checks={
    enough_frames:frameSamples.length>=limits.minMeasuredFrames,
    avg_frame_ms:frameAvg<=limits.avgFrameMsMax,
    p95_frame_ms:frameP95<=limits.p95FrameMsMax,
    p99_frame_ms:frameP99<=limits.p99FrameMsMax,
    avg_audit_cpu_ms:cpuAvg<=limits.avgAuditCpuMsMax,
    p95_audit_cpu_ms:cpuP95<=limits.p95AuditCpuMsMax,
    draw_calls:drawCallsMax<=limits.drawCallsMax,
    triangles:trianglesMax<=limits.trianglesMax,
    actor_count:actorCount===SCALE_ACTOR_COUNT_06J,
    duplicates:duplicateCount===0
  };
  const failed=Object.entries(checks).filter(([,ok])=>!ok).map(([name])=>name);
  return {
    pass:failed.length===0,
    failed,
    checks,
    measured_frames:frameSamples.length,
    frame_avg_ms:frameAvg,
    frame_p95_ms:frameP95,
    frame_p99_ms:frameP99,
    frame_worst_ms:frameWorst,
    equivalent_fps:frameAvg>0?1000/frameAvg:0,
    audit_cpu_avg_ms:cpuAvg,
    audit_cpu_p95_ms:cpuP95,
    audit_cpu_worst_ms:cpuWorst,
    draw_calls_max:drawCallsMax,
    triangles_max:trianglesMax,
    actor_count:actorCount,
    duplicate_count:duplicateCount
  };
}
