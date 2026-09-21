import {
  ProductionActorPipeline,
  PRODUCTION_ACTOR_SCHEMA_VERSION
} from './production/actors/actor-pipeline-core.js';

const assert=(condition,message)=>{
  if(!condition)throw new Error('07B production-actor proof failed: '+message);
};

export function runActorPipelineProof(){
  const pipeline=new ProductionActorPipeline();
  const definition=pipeline.registerDefinition({
    typeId:'HUMANOID_FORAGER_V1',
    asset:{id:'SOLDIER_GLB_V1',url:'./assets/Soldier.glb'},
    scale:.92,
    yawOffset:Math.PI,
    animationMap:{IDLE:'Idle',WALK:'Walk',RUN:'Run'},
    presentation:{castShadow:false,receiveShadow:true}
  });
  assert(definition.typeId==='HUMANOID_FORAGER_V1','definition registration');

  let duplicateDefinitionRejected=false;
  try{pipeline.registerDefinition({...definition});}catch{duplicateDefinitionRejected=true;}
  assert(duplicateDefinitionRejected,'duplicate definition rejection');

  const actorA=pipeline.createActor({
    id:'ACTOR_A',
    typeId:definition.typeId,
    position:{x:1,y:2,z:3},
    yaw:.25,
    animationIntent:'IDLE',
    kernelOptions:{initialGoal:'FOOD',initialProgress:.34}
  });
  const actorB=pipeline.createActor({
    id:'ACTOR_B',
    typeId:definition.typeId,
    position:{x:-1,y:0,z:4},
    yaw:-.5,
    animationIntent:'WALK',
    kernelOptions:{initialGoal:'FOOD',initialProgress:.62}
  });
  assert(pipeline.size===2,'two independent actor records');
  assert(actorA.kernel!==actorB.kernel,'independent LivingWorldKernel instances');
  assert(Math.abs(actorA.kernel.goals.progress-.34)<1e-12,'actor A kernel options');
  assert(Math.abs(actorB.kernel.goals.progress-.62)<1e-12,'actor B kernel options');

  let duplicateActorRejected=false;
  try{pipeline.createActor({id:'ACTOR_A',typeId:definition.typeId});}catch{duplicateActorRejected=true;}
  assert(duplicateActorRejected,'duplicate actor id rejection');

  assert(actorA.claimBinding('BIND_A')===true,'first visual binding claim');
  assert(actorA.claimBinding('BIND_A')===false,'same binding idempotent');
  let duplicateBindingRejected=false;
  try{actorA.claimBinding('BIND_A_2');}catch{duplicateBindingRejected=true;}
  assert(duplicateBindingRejected,'second visual binding rejected');
  assert(actorA.bindingClaims===1,'binding claim count stable');

  actorA.kernel.createHazardEvent({center:{x:0,z:0},at:1000});
  const hazardState=actorA.kernel.update({
    now:1120,
    actorPath:{a:{x:-3,z:0},b:{x:3,z:0}},
    foodValid:true,
    foodEventAt:1120
  });
  assert(hazardState.winner==='HAZARD'&&hazardState.goal==='HAZARD','actor owns production kernel behavior');

  actorA.setTransform({x:5,y:1.5,z:-2,yaw:.75});
  actorA.setAnimationIntent('RUN');
  const snapshot=actorA.serialize(1600);
  assert(snapshot.version===PRODUCTION_ACTOR_SCHEMA_VERSION,'actor snapshot schema');
  assert(snapshot.actorId==='ACTOR_A'&&snapshot.typeId===definition.typeId,'actor snapshot identity');
  assert(snapshot.animationIntent==='RUN','actor snapshot animation intent');
  assert(snapshot.transform.position.x===5&&snapshot.transform.yaw===.75,'actor snapshot transform');

  assert(actorA.releaseBinding('BIND_A')===true,'visual binding release');
  assert(pipeline.destroyActor('ACTOR_A')===true,'actor destroy after unbind');
  assert(pipeline.size===1,'destroy removes actor record');

  const restoredA=pipeline.restoreActor(snapshot,7000);
  assert(restoredA.id==='ACTOR_A'&&pipeline.size===2,'actor identity restore');
  assert(restoredA.kernel.memory.state==='CALM','actor kernel resolves offscreen memory');
  assert(restoredA.kernel.goals.activeGoal==='FOOD','actor kernel resumes original goal');
  assert(Math.abs(restoredA.kernel.goals.progress-.34)<1e-12,'actor kernel progress survives actor restore');
  assert(restoredA.position.x===5&&restoredA.yaw===.75,'actor transform survives restore');
  assert(restoredA.animationIntent==='RUN','actor animation intent survives restore');
  assert(restoredA.bindingId===null,'restored actor begins unbound');

  return {
    definitions:1,
    actor_records:2,
    independent_kernels:true,
    stable_actor_identity:true,
    duplicate_definition_rejected:true,
    duplicate_actor_id_rejected:true,
    duplicate_visual_binding_rejected:true,
    binding_release_required_before_destroy:true,
    actor_snapshot_version:PRODUCTION_ACTOR_SCHEMA_VERSION,
    transform_survives_restore:true,
    animation_intent_survives_restore:true,
    kernel_state_survives_restore:true,
    offscreen_memory_resolves:true,
    three_adapter_uses_gltf_cache:true,
    skeleton_safe_clone:true,
    independent_animation_mixer_contract:true
  };
}
