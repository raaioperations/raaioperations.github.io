import {ProductionActorPipeline} from './production/actors/actor-pipeline-core.js';
import {ProductionRegionStateStore,ProductionRegion} from './production/regions/production-region-core.js';
import {ProductionWorldManager} from './production/world/production-world-manager.js';

const assert=(condition,message)=>{
  if(!condition)throw new Error('08A multi-region proof failed: '+message);
};

export async function runWorldProof(){
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

  const bindActor=async actor=>{
    if(bound.has(actor.id)){
      duplicateBindings++;
      throw new Error('duplicate proof binding '+actor.id);
    }
    const bindingId='BIND_'+actor.id;
    actor.claimBinding(bindingId);
    bound.set(actor.id,bindingId);
  };
  const unbindActor=async actor=>{
    const bindingId=bound.get(actor.id);
    if(!bindingId)throw new Error('missing proof binding '+actor.id);
    actor.releaseBinding(bindingId);
    bound.delete(actor.id);
  };

  const centers={A:{x:0,z:0},B:{x:80,z:0},C:{x:160,z:0}};
  const regions={};
  for(const [key,center] of Object.entries(centers)){
    regions[key]=new ProductionRegion({
      id:'REGION_'+key,
      pipeline,
      store,
      loadRadiusM:24,
      unloadRadiusM:38,
      bindActor,
      unbindActor,
      actorBlueprints:[
        {
          id:key+'_ACTOR_1',
          typeId:'HUMANOID_FORAGER_V1',
          position:{x:center.x-2,y:0,z:center.z},
          yaw:0,
          animationIntent:'WALK',
          kernelOptions:{initialGoal:'FOOD',initialProgress:key==='A'?.2:key==='B'?.4:.6}
        },
        {
          id:key+'_ACTOR_2',
          typeId:'HUMANOID_FORAGER_V1',
          position:{x:center.x+2,y:0,z:center.z},
          yaw:0,
          animationIntent:'IDLE',
          kernelOptions:{initialGoal:'FOOD',initialProgress:key==='A'?.3:key==='B'?.5:.7}
        }
      ]
    });
  }

  const world=new ProductionWorldManager({
    entries:[
      {id:'A',center:centers.A,region:regions.A},
      {id:'B',center:centers.B,region:regions.B},
      {id:'C',center:centers.C,region:regions.C}
    ]
  });
  assert(world.size===3,'three registered regions');

  let now=1000;
  await world.step({playerPosition:{x:0,z:0},dtMs:1000,now,foodProgressPerSecond:.01});
  assert(regions.A.isActive&&pipeline.size===2&&bound.size===2,'A active only');
  assert(!regions.B.isActive&&!regions.C.isActive,'B/C inactive initially');
  const aProgress=regions.A.activeActors[0].kernel.goals.progress;
  assert(aProgress>.2,'A progress advanced');

  now=3000;
  await world.step({playerPosition:{x:80,z:0},dtMs:1000,now,foodProgressPerSecond:.01});
  assert(!regions.A.isActive&&regions.B.isActive&&!regions.C.isActive,'move A -> B');
  assert(store.has('REGION_A'),'A snapshot saved');
  assert(pipeline.size===2&&bound.size===2,'only B actors active');
  const bProgress=regions.B.activeActors[0].kernel.goals.progress;
  assert(bProgress>.4,'B progress advanced independently');

  now=5000;
  await world.step({playerPosition:{x:160,z:0},dtMs:1000,now,foodProgressPerSecond:.01});
  assert(!regions.A.isActive&&!regions.B.isActive&&regions.C.isActive,'move B -> C');
  assert(store.has('REGION_B'),'B snapshot saved');
  assert(pipeline.size===2&&bound.size===2,'only C actors active');
  const cProgress=regions.C.activeActors[0].kernel.goals.progress;
  assert(cProgress>.6,'C progress advanced independently');

  now=8000;
  await world.step({playerPosition:{x:0,z:0},dtMs:0,now,foodProgressPerSecond:.01});
  assert(regions.A.isActive&&!regions.B.isActive&&!regions.C.isActive,'return C -> A');
  assert(store.has('REGION_C'),'C snapshot saved');
  assert(pipeline.size===2&&bound.size===2,'only restored A actors active');
  assert(regions.A.restoreCount===1,'A restored once');
  assert(regions.A.lastRestoreIdsStable===true,'A IDs stable');
  assert(regions.A.lastRestoreProgressPreserved===true,'A progress preserved');
  assert(Math.abs(regions.A.activeActors[0].kernel.goals.progress-aProgress)<1e-12,'A exact progress restored');

  const snapB=store.load('REGION_B');
  const snapC=store.load('REGION_C');
  assert(Math.abs(snapB.actors[0].kernel.goals.progress-bProgress)<1e-12,'B snapshot isolated');
  assert(Math.abs(snapC.actors[0].kernel.goals.progress-cProgress)<1e-12,'C snapshot isolated');
  assert(regions.A.duplicateCount+regions.B.duplicateCount+regions.C.duplicateCount===0,'zero region duplicates');
  assert(duplicateBindings===0,'zero binding duplicates');
  assert(world.duplicateRegionIds===0,'zero duplicate world region IDs');

  return {
    region_count:3,
    route:['A','B','C','A'],
    max_active_regions:1,
    active_actor_count:2,
    snapshots_saved:['A','B','C'],
    return_region:'A',
    return_ids_stable:regions.A.lastRestoreIdsStable,
    return_progress_preserved:regions.A.lastRestoreProgressPreserved,
    isolated_region_progress:true,
    duplicate_region_count:0,
    duplicate_binding_count:duplicateBindings,
    shared_asset_load_contract:1
  };
}
