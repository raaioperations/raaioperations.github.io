import {ProductionActorPipeline} from './production/actors/actor-pipeline-core.js';
import {
  PRODUCTION_REGION_SCHEMA_VERSION,
  ProductionRegionStateStore,
  ProductionRegion
} from './production/regions/production-region-core.js';

const assert=(condition,message)=>{
  if(!condition)throw new Error('07C streamed-region proof failed: '+message);
};

export async function runRegionProof(){
  const pipeline=new ProductionActorPipeline();
  pipeline.registerDefinition({
    typeId:'HUMANOID_FORAGER_V1',
    asset:{id:'SOLDIER_GLB_V1',url:'./assets/Soldier.glb'},
    scale:.92,
    yawOffset:Math.PI,
    animationMap:{IDLE:'Idle',WALK:'Walk',RUN:'Run'},
    presentation:{castShadow:false,receiveShadow:true}
  });

  const blueprints=[
    {
      id:'REGION_ACTOR_A',
      typeId:'HUMANOID_FORAGER_V1',
      position:{x:-2,y:0,z:0},
      yaw:.2,
      animationIntent:'IDLE',
      kernelOptions:{initialGoal:'FOOD',initialProgress:.28}
    },
    {
      id:'REGION_ACTOR_B',
      typeId:'HUMANOID_FORAGER_V1',
      position:{x:2,y:0,z:0},
      yaw:-.2,
      animationIntent:'WALK',
      kernelOptions:{initialGoal:'FOOD',initialProgress:.58}
    }
  ];

  const store=new ProductionRegionStateStore();
  const bound=new Map();
  let bindSeq=0;
  let duplicateBindings=0;

  const region=new ProductionRegion({
    id:'REGION_A',
    pipeline,
    store,
    actorBlueprints:blueprints,
    loadRadiusM:24,
    unloadRadiusM:38,
    bindActor:async actor=>{
      if(bound.has(actor.id)){
        duplicateBindings++;
        throw new Error('duplicate fake binding '+actor.id);
      }
      const bindingId='BIND_'+(++bindSeq);
      actor.claimBinding(bindingId);
      bound.set(actor.id,bindingId);
    },
    unbindActor:async actor=>{
      const bindingId=bound.get(actor.id);
      if(!bindingId)throw new Error('missing fake binding '+actor.id);
      actor.releaseBinding(bindingId);
      bound.delete(actor.id);
    }
  });

  assert(region.desiredLifecycle(24)==='ACTIVE','unloaded region loads at load radius');
  assert(region.desiredLifecycle(25)==='UNLOADED','unloaded hysteresis holds outside load radius');

  const initial=await region.load(1000);
  assert(initial.rehydrated===false,'initial load must use blueprints');
  assert(region.lifecycle==='ACTIVE','initial region active');
  assert(pipeline.size===2&&bound.size===2,'two production actors active');
  assert(region.desiredLifecycle(30)==='ACTIVE','active hysteresis holds inside unload radius');
  assert(region.desiredLifecycle(38)==='UNLOADED','active region unloads at unload radius');

  region.update({dtMs:1000,now:2000,foodProgressPerSecond:.01});
  const actorA=pipeline.getActor('REGION_ACTOR_A');
  const actorB=pipeline.getActor('REGION_ACTOR_B');
  assert(Math.abs(actorA.kernel.goals.progress-.29)<1e-12,'actor A measurable progress');
  assert(Math.abs(actorB.kernel.goals.progress-.59)<1e-12,'actor B measurable progress');

  actorA.kernel.createHazardEvent({center:{x:0,z:0},at:2100});
  const interrupted=actorA.kernel.update({
    now:2200,
    actorPath:{a:{x:-2,z:0},b:{x:2,z:0}},
    foodValid:true,
    foodEventAt:2200
  });
  assert(interrupted.goal==='HAZARD'&&interrupted.suspendedGoal==='FOOD','production actor interrupted before stream-out');

  const snap1=await region.unload(2300);
  assert(region.lifecycle==='UNLOADED','region unloaded');
  assert(pipeline.size===0&&bound.size===0,'actors removed from active pipeline and bindings');
  assert(store.has('REGION_A'),'region snapshot saved');
  assert(snap1.version===PRODUCTION_REGION_SCHEMA_VERSION,'region snapshot schema');
  assert(snap1.actors.length===2,'two actor snapshots');
  assert(snap1.actorIds.join('|')==='REGION_ACTOR_A|REGION_ACTOR_B','snapshot actor identity order');

  const restore1=await region.load(9000);
  assert(restore1.rehydrated===true,'region rehydrates from saved snapshot');
  assert(restore1.offscreenMs===6700,'offscreen elapsed time');
  assert(region.lastRestoreIdsStable===true,'actor IDs stable');
  assert(region.lastRestoreProgressPreserved===true,'actor progress preserved');
  assert(pipeline.size===2&&bound.size===2,'two actors rebound after restore');
  const restoredA=pipeline.getActor('REGION_ACTOR_A');
  assert(restoredA.kernel.memory.state==='CALM','expired production memory resolves while unloaded');
  assert(restoredA.kernel.goals.activeGoal==='FOOD','interrupted goal resumes after offscreen memory expiry');
  assert(Math.abs(restoredA.kernel.goals.progress-.29)<1e-12,'restored actor A progress');

  for(let cycle=2;cycle<=3;cycle++){
    const beforeA=pipeline.getActor('REGION_ACTOR_A').kernel.goals.progress;
    const beforeB=pipeline.getActor('REGION_ACTOR_B').kernel.goals.progress;
    const unloadAt=9000+cycle*1000;
    await region.unload(unloadAt);
    assert(pipeline.size===0&&bound.size===0,'cycle '+cycle+' removes actors/bindings');
    const loadAt=unloadAt+1500;
    await region.load(loadAt);
    assert(pipeline.size===2&&bound.size===2,'cycle '+cycle+' restores actors/bindings');
    assert(region.lastRestoreIdsStable===true,'cycle '+cycle+' stable IDs');
    assert(region.lastRestoreProgressPreserved===true,'cycle '+cycle+' preserved progress');
    assert(Math.abs(pipeline.getActor('REGION_ACTOR_A').kernel.goals.progress-beforeA)<1e-12,'cycle '+cycle+' actor A progress stable');
    assert(Math.abs(pipeline.getActor('REGION_ACTOR_B').kernel.goals.progress-beforeB)<1e-12,'cycle '+cycle+' actor B progress stable');
  }

  assert(region.unloadCount===3,'three unload cycles');
  assert(region.restoreCount===3,'three restore cycles');
  assert(region.duplicateCount===0,'region duplicate count');
  assert(duplicateBindings===0,'binding duplicate count');
  assert(bound.size===2,'exact final bound actor count');
  assert(new Set(region.activeActors.map(actor=>actor.id)).size===2,'exact final stable actor identities');

  return {
    schema_version:PRODUCTION_REGION_SCHEMA_VERSION,
    actor_count:2,
    load_radius_m:24,
    unload_radius_m:38,
    hysteresis_m:14,
    unload_cycles:region.unloadCount,
    restore_cycles:region.restoreCount,
    final_active_actor_count:pipeline.size,
    final_bound_actor_count:bound.size,
    actor_ids_stable:region.lastRestoreIdsStable,
    actor_progress_preserved:region.lastRestoreProgressPreserved,
    expired_memory_resolved:true,
    interrupted_goal_resumed:true,
    duplicate_region_count:region.duplicateCount,
    duplicate_binding_count:duplicateBindings,
    dormant_actor_simulation:'stopped because actor records are removed from active pipeline',
    snapshot_store:'in-memory ProductionRegionStateStore'
  };
}
