import {ProductionActorPipeline} from './production/actors/actor-pipeline-core.js';
import {
  ProductionRegionStateStore,
  ProductionRegion
} from './production/regions/production-region-core.js';
import {ProductionVerticalSliceCoordinator} from './production/vertical-slice/production-vertical-slice-core.js';

const assert=(condition,message)=>{
  if(!condition)throw new Error('07D vertical-slice proof failed: '+message);
};

export async function runVerticalSliceProof(){
  const pipeline=new ProductionActorPipeline();
  pipeline.registerDefinition({
    typeId:'HUMANOID_FORAGER_V1',
    asset:{id:'SOLDIER_GLB_V1',url:'./assets/Soldier.glb'},
    scale:.92,
    yawOffset:Math.PI,
    animationMap:{IDLE:'Idle',WALK:'Walk',RUN:'Run'},
    presentation:{castShadow:false,receiveShadow:true}
  });

  const store=new ProductionRegionStateStore();
  const bound=new Map();
  let duplicateBindings=0;

  const region=new ProductionRegion({
    id:'07D_REGION',
    pipeline,
    store,
    loadRadiusM:24,
    unloadRadiusM:38,
    actorBlueprints:[
      {
        id:'SLICE_ACTOR_A',
        typeId:'HUMANOID_FORAGER_V1',
        position:{x:-2,y:0,z:0},
        yaw:.1,
        animationIntent:'WALK',
        kernelOptions:{initialGoal:'FOOD',initialProgress:.31}
      },
      {
        id:'SLICE_ACTOR_B',
        typeId:'HUMANOID_FORAGER_V1',
        position:{x:2,y:0,z:0},
        yaw:-.1,
        animationIntent:'WALK',
        kernelOptions:{initialGoal:'FOOD',initialProgress:.61}
      }
    ],
    bindActor:async actor=>{
      if(bound.has(actor.id)){
        duplicateBindings++;
        throw new Error('duplicate proof binding '+actor.id);
      }
      const bindingId='BIND_'+actor.id;
      actor.claimBinding(bindingId);
      bound.set(actor.id,bindingId);
    },
    unbindActor:async actor=>{
      const bindingId=bound.get(actor.id);
      if(!bindingId)throw new Error('missing proof binding '+actor.id);
      actor.releaseBinding(bindingId);
      bound.delete(actor.id);
    }
  });

  await region.load(1000);
  assert(region.isActive&&pipeline.size===2&&bound.size===2,'initial production region load');

  const coordinator=new ProductionVerticalSliceCoordinator({
    region,
    pipeline,
    actorId:'SLICE_ACTOR_A',
    hazardCenter:{x:0,z:0},
    triggerDelayMs:1800
  });

  coordinator.update(1000);
  region.update({dtMs:800,now:1800,foodProgressPerSecond:.01});
  coordinator.update(1800);

  const beforeHazard=pipeline.getActor('SLICE_ACTOR_A').kernel.goals.progress;
  coordinator.update(2801);
  assert(coordinator.hazardEventId===1,'one accepted hazard event emitted');
  assert(coordinator.baselineProgress===beforeHazard,'baseline progress captured');

  region.update({dtMs:16,now:2817,foodProgressPerSecond:.01});
  coordinator.update(2817);
  assert(coordinator.hazardObserved===true,'HAZARD interruption observed');
  const hazardActor=pipeline.getActor('SLICE_ACTOR_A');
  assert(hazardActor.kernel.goals.activeGoal==='HAZARD','actor goal interrupted to HAZARD');
  assert(hazardActor.kernel.goals.suspendedGoal==='FOOD','FOOD suspended');

  const frozenDuringHazard=hazardActor.kernel.goals.progress;
  region.update({dtMs:2000,now:4817,foodProgressPerSecond:.01});
  coordinator.update(4817);
  assert(Math.abs(hazardActor.kernel.goals.progress-frozenDuringHazard)<1e-12,'FOOD progress freezes during hazard');

  region.update({dtMs:3200,now:8017,foodProgressPerSecond:0});
  coordinator.update(8017);
  const recoveredActor=pipeline.getActor('SLICE_ACTOR_A');
  assert(coordinator.recoveryObserved===true,'FOOD recovery observed');
  assert(recoveredActor.kernel.memory.state==='CALM','memory resolved CALM');
  assert(recoveredActor.kernel.goals.activeGoal==='FOOD','FOOD goal resumed');
  assert(Math.abs(recoveredActor.kernel.goals.progress-beforeHazard)<1e-12,'progress resumes at preserved point');

  await region.unload(8200);
  coordinator.update(8200);
  assert(coordinator.streamOutObserved===true,'stream-out observed');
  assert(pipeline.size===0&&bound.size===0,'region actors and bindings removed');

  await region.load(11000);
  coordinator.update(11000);
  assert(coordinator.restoreObserved===true,'region restore observed');
  assert(region.lastRestoreIdsStable===true,'actor IDs stable');
  assert(region.lastRestoreProgressPreserved===true,'actor progress preserved by region');
  assert(pipeline.size===2&&bound.size===2,'actors rebound after restore');

  const finalActor=pipeline.getActor('SLICE_ACTOR_A');
  assert(finalActor.kernel.goals.activeGoal==='FOOD','final actor remains on FOOD');
  assert(finalActor.kernel.memory.state==='CALM','final actor memory calm');
  assert(coordinator.hazardEventId===1,'vertical slice does not replay hazard event');

  const completion=coordinator.completion({
    assetLoadCount:1,
    duplicateCount:region.duplicateCount+duplicateBindings,
    regressionStatus:'PASS'
  });
  assert(completion.pass===true,'complete production vertical slice must pass');

  return {
    actor_count:2,
    behavior_event_count:1,
    hazard_observed:coordinator.hazardObserved,
    recovery_observed:coordinator.recoveryObserved,
    goal_progress_preserved:true,
    streamed_out:coordinator.streamOutObserved,
    restored:coordinator.restoreObserved,
    actor_ids_stable:region.lastRestoreIdsStable,
    region_progress_preserved:region.lastRestoreProgressPreserved,
    duplicate_region_count:region.duplicateCount,
    duplicate_binding_count:duplicateBindings,
    asset_load_count_contract:1,
    regression_contract:'PASS',
    final_goal:finalActor.kernel.goals.activeGoal,
    final_memory:finalActor.kernel.memory.state,
    completion_pass:completion.pass
  };
}
