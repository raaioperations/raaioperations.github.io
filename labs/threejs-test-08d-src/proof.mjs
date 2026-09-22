import * as THREE from 'three';
import {ProductionActorPipeline} from './production/actors/actor-pipeline-core.js';
import {ProductionRegionStateStore,ProductionRegion} from './production/regions/production-region-core.js';
import {ProductionWorldManager} from './production/world/production-world-manager.js';
import {ThreePredictiveActorFactory} from './production/prefetch/three-predictive-actor-factory.js';
import {BoundedPredictivePrefetchController} from './production/prefetch/bounded-predictive-prefetch-controller.js';

const assert=(condition,message)=>{
  if(!condition)throw new Error('08D world-expansion certification failed: '+message);
};

export async function runWorldExpansionCertificationProof(){
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
  const centers={A:{x:0,z:0},B:{x:48,z:0}};

  const blueprints=key=>[
    {
      id:key+'_ACTOR_1',
      typeId:definition.typeId,
      position:{x:centers[key].x-1,y:0,z:0},
      yaw:0,
      animationIntent:'WALK',
      kernelOptions:{initialGoal:'FOOD',initialProgress:key==='A'?.28:.58}
    },
    {
      id:key+'_ACTOR_2',
      typeId:definition.typeId,
      position:{x:centers[key].x+1,y:0,z:0},
      yaw:0,
      animationIntent:'IDLE',
      kernelOptions:{initialGoal:'FOOD',initialProgress:key==='A'?.38:.68}
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

  let now=1000;
  let maxActiveActors=0;
  let maxBindings=0;
  let maxPrepared=0;

  const observe=()=>{
    const activeActors=regions.A.activeActors.length+regions.B.activeActors.length;
    maxActiveActors=Math.max(maxActiveActors,activeActors);
    maxBindings=Math.max(maxBindings,factory.size);
    maxPrepared=Math.max(maxPrepared,bounded.totalPrepared(),bounded.budget.peakPrepared);
    assert(activeActors<=4,'active actor ceiling exceeded');
    assert(factory.size<=4,'binding ceiling exceeded');
    assert(bounded.totalPrepared()<=2,'prepared-instance ceiling exceeded');
    assert(factory.assetCache.loadCount===1,'asset-load count changed');
    assert(factory.duplicateBindingCount===0,'duplicate binding detected');
    assert(regions.A.duplicateCount+regions.B.duplicateCount===0,'duplicate region state detected');
  };

  await world.step({playerPosition:{x:0,z:0},dtMs:1000,now,foodProgressPerSecond:.01});
  bounded.observeAfterWorldStep();
  observe();
  assert(regions.A.isActive,'initial A active');
  assert(factory.fallbackInstances===2,'initial A is the only fallback bind path');

  const cycles=5;
  for(let cycle=0;cycle<cycles;cycle++){
    await bounded.retarget('B',definition,2);
    observe();
    assert(factory.preparedCount('B')===2,'B prefetched before handoff cycle '+cycle);

    now+=1000;
    await world.step({playerPosition:{x:24,z:0},dtMs:1000,now,foodProgressPerSecond:.01});
    bounded.observeAfterWorldStep();
    observe();
    assert(regions.B.isActive,'B activates cycle '+cycle);

    now+=1000;
    await world.step({playerPosition:{x:48,z:0},dtMs:1000,now,foodProgressPerSecond:.01});
    bounded.observeAfterWorldStep();
    observe();
    assert(!regions.A.isActive&&regions.B.isActive,'A unloads at B cycle '+cycle);

    await bounded.retarget('A',definition,2);
    observe();
    assert(factory.preparedCount('A')===2,'A return prefetched cycle '+cycle);

    now+=1000;
    await world.step({playerPosition:{x:24,z:0},dtMs:1000,now,foodProgressPerSecond:.01});
    bounded.observeAfterWorldStep();
    observe();
    assert(regions.A.isActive,'A activates on return cycle '+cycle);

    now+=1000;
    await world.step({playerPosition:{x:0,z:0},dtMs:1000,now,foodProgressPerSecond:.01});
    bounded.observeAfterWorldStep();
    observe();
    assert(regions.A.isActive&&!regions.B.isActive,'B unloads at A cycle '+cycle);
  }

  assert(regions.A.restoreCount===cycles,'A restore count');
  assert(regions.B.restoreCount===cycles-1,'B restore count');
  assert(regions.A.unloadCount===cycles,'A unload count');
  assert(regions.B.unloadCount===cycles,'B unload count');
  assert(factory.consumedInstances===cycles*4,'prepared instance consumption across repeated churn');
  assert(factory.fallbackInstances===2,'fallback remains initial A only');
  assert(bounded.totalPrepared()===0,'final prepared pool empty');
  assert(maxPrepared===2,'prepared pool peak exact two');
  assert(maxActiveActors===4,'active actor overlap ceiling exercised');
  assert(maxBindings===4,'binding overlap ceiling exercised');
  assert(factory.assetCache.loadCount===1,'one shared asset load after stress');
  assert(factory.duplicateBindingCount===0,'zero duplicate bindings after stress');
  assert(regions.A.duplicateCount+regions.B.duplicateCount===0,'zero duplicate region state after stress');
  assert(regions.A.lastRestoreIdsStable===true&&regions.A.lastRestoreProgressPreserved===true,'A final restore stable');
  assert(regions.B.lastRestoreIdsStable===true&&regions.B.lastRestoreProgressPreserved===true,'B repeated restore stable');

  return {
    automated_cycles:cycles,
    handoffs:cycles*2,
    a_restores:regions.A.restoreCount,
    b_restores:regions.B.restoreCount,
    a_unloads:regions.A.unloadCount,
    b_unloads:regions.B.unloadCount,
    prepared_instances_consumed:factory.consumedInstances,
    fallback_instances_total:factory.fallbackInstances,
    final_prepared_instances:bounded.totalPrepared(),
    peak_prepared_instances:maxPrepared,
    peak_active_region_actors:maxActiveActors,
    peak_region_bindings:maxBindings,
    shared_asset_load_count:factory.assetCache.loadCount,
    duplicate_binding_count:factory.duplicateBindingCount,
    duplicate_region_count:regions.A.duplicateCount+regions.B.duplicateCount,
    final_a_ids_stable:regions.A.lastRestoreIdsStable,
    final_a_progress_preserved:regions.A.lastRestoreProgressPreserved,
    repeated_b_ids_stable:regions.B.lastRestoreIdsStable,
    repeated_b_progress_preserved:regions.B.lastRestoreProgressPreserved
  };
}
