import * as THREE from 'three';
import {ProductionActorPipeline} from './production/actors/actor-pipeline-core.js';
import {ProductionRegionStateStore,ProductionRegion} from './production/regions/production-region-core.js';
import {ProductionWorldManager} from './production/world/production-world-manager.js';
import {PredictiveRegionPrefetchPlanner} from './production/prefetch/predictive-region-prefetch-core.js';
import {ThreePredictiveActorFactory} from './production/prefetch/three-predictive-actor-factory.js';

const assert=(condition,message)=>{
  if(!condition)throw new Error('08B predictive-handoff proof failed: '+message);
};

export async function runPredictiveHandoffProof(){
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
  const store=new ProductionRegionStateStore();

  const centers={A:{x:0,z:0},B:{x:52,z:0}};
  const makeBlueprints=(key)=>[
    {
      id:key+'_ACTOR_1',
      typeId:definition.typeId,
      position:{x:centers[key].x-1,y:0,z:0},
      yaw:0,
      animationIntent:'WALK',
      kernelOptions:{initialGoal:'FOOD',initialProgress:key==='A'?.25:.55}
    },
    {
      id:key+'_ACTOR_2',
      typeId:definition.typeId,
      position:{x:centers[key].x+1,y:0,z:0},
      yaw:0,
      animationIntent:'IDLE',
      kernelOptions:{initialGoal:'FOOD',initialProgress:key==='A'?.35:.65}
    }
  ];

  const regions={
    A:new ProductionRegion({
      id:'REGION_A',
      pipeline,
      store,
      actorBlueprints:makeBlueprints('A'),
      bindActor:actor=>factory.bind('A',actor),
      unbindActor:actor=>factory.unbind(actor.id),
      loadRadiusM:24,
      unloadRadiusM:38
    }),
    B:new ProductionRegion({
      id:'REGION_B',
      pipeline,
      store,
      actorBlueprints:makeBlueprints('B'),
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
  const planner=new PredictiveRegionPrefetchPlanner({
    prefetchRadiusM:58,
    minApproachSpeedMps:.35,
    minApproachDot:.25
  });

  await world.step({playerPosition:{x:0,z:0},dtMs:1000,now:1000,foodProgressPerSecond:.01});
  assert(regions.A.isActive,'A initial active');
  assert(factory.fallbackInstances===2,'initial A uses exactly two fallback visual instances');
  assert(factory.consumedInstances===0,'no prepared instances consumed initially');
  const aProgressInitial=regions.A.activeActors[0].kernel.goals.progress;

  planner.updateMotion({x:0,z:0},2000);
  planner.updateMotion({x:10,z:0},3000);
  const bCandidate=planner.choose({
    position:{x:10,z:0},
    regions:[
      {id:'A',center:centers.A,lifecycle:regions.A.lifecycle},
      {id:'B',center:centers.B,lifecycle:regions.B.lifecycle}
    ],
    excludeIds:['A']
  });
  assert(bCandidate?.id==='B','planner predicts B while moving toward B');
  assert(bCandidate.distance===42,'B predictive distance');
  await factory.prefetch('B',definition,2);
  assert(factory.preparedCount('B')===2,'two B instances prepared off-scene');
  assert(pipeline.getActor('B_ACTOR_1')===null,'prefetch does not create simulation actor records');

  await world.step({playerPosition:{x:28,z:0},dtMs:1000,now:4000,foodProgressPerSecond:.01});
  assert(regions.B.isActive,'B activates at load boundary');
  assert(factory.preparedCount('B')===0,'B prepared instances consumed');
  assert(factory.consumedInstances===2,'two B prefetched instances consumed');
  assert(factory.fallbackInstances===2,'B activation adds no fallback instances');
  const aProgressAtSnapshot=regions.A.activeActors[0].kernel.goals.progress;
  assert(aProgressAtSnapshot>aProgressInitial,'A continues normal FOOD progress while still active before unload');

  await world.step({playerPosition:{x:45,z:0},dtMs:1000,now:5000,foodProgressPerSecond:.01});
  assert(!regions.A.isActive&&regions.B.isActive,'A unloads after handoff to B');
  assert(store.has('REGION_A'),'A snapshot saved');

  planner.updateMotion({x:45,z:0},6000);
  planner.updateMotion({x:35,z:0},7000);
  const aCandidate=planner.choose({
    position:{x:35,z:0},
    regions:[
      {id:'A',center:centers.A,lifecycle:regions.A.lifecycle},
      {id:'B',center:centers.B,lifecycle:regions.B.lifecycle}
    ],
    excludeIds:['B']
  });
  assert(aCandidate?.id==='A','planner predicts A on return');
  await factory.prefetch('A',definition,2);
  assert(factory.preparedCount('A')===2,'two A return instances prepared');

  await world.step({playerPosition:{x:24,z:0},dtMs:0,now:8000,foodProgressPerSecond:.01});
  assert(regions.A.isActive,'A reactivates on return');
  assert(regions.A.restoreCount===1,'A restored from snapshot');
  assert(regions.A.lastRestoreIdsStable===true,'A IDs stable');
  assert(regions.A.lastRestoreProgressPreserved===true,'A progress preserved');
  assert(Math.abs(regions.A.activeActors[0].kernel.goals.progress-aProgressAtSnapshot)<1e-12,'A exact snapshotted progress restored');
  assert(factory.consumedInstances===4,'four prepared instances consumed across B + A return');
  assert(factory.fallbackInstances===2,'fallback remains initial A only');
  assert(factory.assetCache.loadCount===1,'shared frozen asset load count remains one');
  assert(factory.duplicateBindingCount===0,'zero duplicate predictive bindings');
  assert(regions.A.duplicateCount+regions.B.duplicateCount===0,'zero region duplicates');

  return {
    route:['A','B','A'],
    prefetch_radius_m:58,
    initial_fallback_instances:2,
    b_prefetched_instances:2,
    a_return_prefetched_instances:2,
    prepared_instances_consumed:factory.consumedInstances,
    fallback_instances_total:factory.fallbackInstances,
    shared_asset_load_count:factory.assetCache.loadCount,
    a_return_ids_stable:regions.A.lastRestoreIdsStable,
    a_return_progress_preserved:regions.A.lastRestoreProgressPreserved,
    duplicate_binding_count:factory.duplicateBindingCount,
    duplicate_region_count:regions.A.duplicateCount+regions.B.duplicateCount,
    prefetch_creates_simulation_records:false
  };
}
