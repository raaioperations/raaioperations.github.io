import * as THREE from 'three';
import {ProductionActorPipeline} from './production/actors/actor-pipeline-core.js';
import {ProductionRegionStateStore,ProductionRegion} from './production/regions/production-region-core.js';
import {ProductionWorldManager} from './production/world/production-world-manager.js';
import {ThreePredictiveActorFactory} from './production/prefetch/three-predictive-actor-factory.js';
import {BoundedPredictivePrefetchController} from './production/prefetch/bounded-predictive-prefetch-controller.js';
import {PrefetchBudgetState} from './production/prefetch/bounded-prefetch-lifecycle-core.js';

const assert=(condition,message)=>{
  if(!condition)throw new Error('08C bounded-prefetch proof failed: '+message);
};

export async function runBoundedPrefetchProof(){
  const budgetGuard=new PrefetchBudgetState({maxPreparedInstances:2});
  let overflowRejected=false;
  try{budgetGuard.setPrepared('X',3);}catch{overflowRejected=true;}
  assert(overflowRejected,'prepared pool above budget must be rejected');

  const pipeline=new ProductionActorPipeline();
  const definition=pipeline.registerDefinition({
    typeId:'HUMANOID_FORAGER_V1',
    asset:{id:'SOLDIER_GLB_V1',url:'./assets/Soldier.glb'},
    scale:.92,
    yawOffset:Math.PI,
    animationMap:{IDLE:'Idle',WALK:'Walk',RUN:'Run'},
    presentation:{castShadow:false,receiveShadow:true}
  });

  const fakeAssetCache={
    loadCount:1,
    instanceCount:0,
    async instantiate(){
      this.instanceCount++;
      return {model:new THREE.Group(),clips:[]};
    }
  };
  const scene=new THREE.Scene();
  const factory=new ThreePredictiveActorFactory({scene,assetCache:fakeAssetCache});
  const bounded=new BoundedPredictivePrefetchController({factory,maxPreparedInstances:2});
  const store=new ProductionRegionStateStore();
  const centers={A:{x:0,z:0},B:{x:52,z:0}};

  const blueprints=key=>[
    {
      id:key+'_ACTOR_1',
      typeId:definition.typeId,
      position:{x:centers[key].x-1,y:0,z:0},
      yaw:0,
      animationIntent:'WALK',
      kernelOptions:{initialGoal:'FOOD',initialProgress:key==='A'?.26:.56}
    },
    {
      id:key+'_ACTOR_2',
      typeId:definition.typeId,
      position:{x:centers[key].x+1,y:0,z:0},
      yaw:0,
      animationIntent:'IDLE',
      kernelOptions:{initialGoal:'FOOD',initialProgress:key==='A'?.36:.66}
    }
  ];

  const regions={
    A:new ProductionRegion({
      id:'REGION_A',
      pipeline,
      store,
      actorBlueprints:blueprints('A'),
      bindActor:actor=>factory.bind('A',actor),
      unbindActor:actor=>factory.unbind(actor.id),
      loadRadiusM:24,
      unloadRadiusM:38
    }),
    B:new ProductionRegion({
      id:'REGION_B',
      pipeline,
      store,
      actorBlueprints:blueprints('B'),
      bindActor:actor=>factory.bind('B',actor),
      unbindActor:actor=>factory.unbind(actor.id),
      loadRadiusM:24,
      unloadRadiusM:38
    })
  };

  const world=new ProductionWorldManager({
    entries:[
      {id:'A',center:centers.A,region:regions.A},
      {id:'B',center:centers.B,region:regions.B}
    ]
  });

  await world.step({playerPosition:{x:0,z:0},dtMs:1000,now:1000,foodProgressPerSecond:.01});
  assert(regions.A.isActive,'initial A active');
  assert(factory.fallbackInstances===2,'initial A fallback instances');
  assert(factory.consumedInstances===0,'nothing prefetched consumed initially');

  await bounded.retarget('B',definition,2);
  assert(factory.preparedCount('B')===2,'first B prefetch prepared');
  assert(bounded.executionCount('B')===1,'first B prefetch execution');
  assert(bounded.budget.peakPrepared===2,'first B prefetch reaches exact budget');

  await bounded.retarget(null,definition,2);
  assert(factory.preparedCount('B')===0,'stale B pool evicted');
  assert(bounded.budget.cancellations===1,'one cancellation recorded');
  assert(bounded.budget.evictedInstances===2,'two stale prepared instances evicted');
  assert(bounded.budget.totalPrepared===0,'pool empty after reversal');

  await bounded.retarget('B',definition,2);
  assert(factory.preparedCount('B')===2,'B re-prefetched');
  assert(bounded.executionCount('B')===2,'second B prefetch execution');
  assert(bounded.budget.peakPrepared===2,'peak remains bounded at two');

  await world.step({playerPosition:{x:28,z:0},dtMs:1000,now:3000,foodProgressPerSecond:.01});
  bounded.observeAfterWorldStep();
  assert(regions.B.isActive,'B active on successful handoff');
  assert(factory.preparedCount('B')===0,'B prepared pool consumed');
  assert(factory.consumedInstances===2,'two B prepared instances consumed');
  assert(factory.fallbackInstances===2,'successful B handoff adds no fallback instances');

  const aProgressAtSnapshot=regions.A.activeActors[0].kernel.goals.progress;
  await world.step({playerPosition:{x:45,z:0},dtMs:1000,now:4000,foodProgressPerSecond:.01});
  bounded.observeAfterWorldStep();
  assert(!regions.A.isActive&&regions.B.isActive,'A unloaded after B handoff');
  assert(store.has('REGION_A'),'A snapshot saved');

  await bounded.retarget(null,definition,2);
  await bounded.retarget('A',definition,2);
  assert(factory.preparedCount('A')===2,'A return prefetched');
  assert(bounded.budget.peakPrepared===2,'return prefetch still respects budget');

  await world.step({playerPosition:{x:24,z:0},dtMs:0,now:7000,foodProgressPerSecond:.01});
  bounded.observeAfterWorldStep();
  assert(regions.A.isActive,'A restored');
  assert(regions.A.restoreCount===1,'A restored once');
  assert(regions.A.lastRestoreIdsStable===true,'A IDs stable');
  assert(regions.A.lastRestoreProgressPreserved===true,'A progress preserved');
  assert(Math.abs(regions.A.activeActors[0].kernel.goals.progress-aProgressAtSnapshot)<1e-12,'A exact snapshot progress restored');
  assert(factory.consumedInstances===4,'B + return A consume four prepared instances');
  assert(factory.fallbackInstances===2,'fallback remains initial A only');
  assert(factory.assetCache.loadCount===1,'shared asset load remains one');
  assert(factory.duplicateBindingCount===0,'zero duplicate predictive bindings');
  assert(regions.A.duplicateCount+regions.B.duplicateCount===0,'zero region duplicates');
  assert(bounded.totalPrepared()===0,'prepared pool empty after final consumption');
  assert(bounded.budget.peakPrepared===2,'prepared pool never exceeded two');

  return {
    route:['A','B false-start','A reversal','B','A'],
    max_prepared_instances:2,
    peak_prepared_instances:bounded.budget.peakPrepared,
    cancellation_count:bounded.budget.cancellations,
    evicted_instances:bounded.budget.evictedInstances,
    b_prefetch_executions:bounded.executionCount('B'),
    prepared_instances_consumed:factory.consumedInstances,
    fallback_instances_total:factory.fallbackInstances,
    final_prepared_instances:bounded.totalPrepared(),
    shared_asset_load_count:factory.assetCache.loadCount,
    a_return_ids_stable:regions.A.lastRestoreIdsStable,
    a_return_progress_preserved:regions.A.lastRestoreProgressPreserved,
    duplicate_binding_count:factory.duplicateBindingCount,
    duplicate_region_count:regions.A.duplicateCount+regions.B.duplicateCount,
    overflow_rejected:overflowRejected
  };
}
