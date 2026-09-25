import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import {INTERACTION,WORLD} from '../src/config.js';
import {ResourceTracker} from '../src/engine/ResourceTracker.js';
import {selectInteractionTarget} from '../src/interaction/InteractionArbiter.js';
import {WorldInteractables} from '../src/interaction/WorldInteractables.js';
import {GameplayInteractionSystem} from '../src/interaction/GameplayInteractionSystem.js';

test('target arbitration is deterministic with stable id tie-break',()=>{
  const candidates=[
    {id:'b',type:'NPC',label:'B',x:1,z:0},
    {id:'a',type:'NPC',label:'A',x:1,z:0}
  ];
  const target=selectInteractionTarget(candidates,{playerX:0,playerZ:0,forwardX:1,forwardZ:0});
  assert.equal(target.id,'a');
});

test('target arbitration favors a nearer pickup over farther candidates',()=>{
  const candidates=[
    {id:'npc',type:'NPC',label:'NPC',x:2,z:0},
    {id:'pickup',type:'PICKUP',label:'Pickup',x:1,z:0}
  ];
  const target=selectInteractionTarget(candidates,{playerX:0,playerZ:0,forwardX:1,forwardZ:0});
  assert.equal(target.id,'pickup');
  assert.ok(target.distance<=INTERACTION.maxDistance);
});

test('world interactables preserve pickup and use state',()=>{
  const root=new THREE.Group();
  const resources=new ResourceTracker();
  const world=new WorldInteractables({root,resources,groundHeight:()=>0});

  const pickup=world.get('pickup:copper-shard');
  const use=world.get('use:waystone');

  assert.equal(world.execute(pickup.id),true);
  assert.equal(pickup.collected,true);
  assert.equal(pickup.active,false);
  assert.equal(pickup.mesh.visible,false);

  assert.equal(world.execute(use.id),true);
  assert.equal(use.toggled,true);
  assert.equal(world.execute(use.id),true);
  assert.equal(use.toggled,false);

  world.dispose();
  resources.dispose();
});

test('gameplay interaction enforces one action per frame',()=>{
  const root=new THREE.Group();
  const resources=new ResourceTracker();
  const world=new WorldInteractables({root,resources,groundHeight:()=>0});
  const use=world.get('use:waystone');

  const camera={getWorldDirection(v){return v.set(1,0,0);}};
  const prompt={show(){},hide(){},snapshot(){return {visible:false,text:''};}};
  const actors={
    behavior:{neighborhood:{queryRadius:()=>[]}},
    refreshActorVisual:()=>true
  };

  const interaction=new GameplayInteractionSystem({
    actors,worldInteractables:world,camera,prompt,coarsePointer:false
  });

  interaction.currentTarget={
    id:use.id,type:'USE',label:use.label,prompt:use.prompt,
    x:use.x,z:use.z,y:use.y,record:use
  };
  const player={x:use.x,y:0,z:use.z};

  assert.equal(interaction.executeCurrent({frame:10},player),true);
  assert.equal(interaction.executeCurrent({frame:10},player),false);
  assert.equal(interaction.actionsThisFrame,1);
  assert.equal(interaction.peakActionsPerFrame,1);

  world.dispose();
  resources.dispose();
});

test('NPC interaction writes persistent player-interaction state',()=>{
  const actor={
    id:'actor:0:0:0',x:0,z:0,y:0,behavior:'WANDER',behaviorUntilFrame:0,awareness:0,
    interactionPartner:null,desiredHeading:null,playerAwarenessEvents:0,behaviorTransitions:0,
    playerInteractionCount:0,lastPlayerInteractionFrame:-1
  };
  const camera={getWorldDirection(v){return v.set(1,0,0);}};
  const prompt={show(){},hide(){},snapshot(){return {visible:false,text:''};}};
  const actors={
    behavior:{neighborhood:{queryRadius:()=>[actor]}},
    refreshActorVisual:id=>id===actor.id
  };
  const worldInteractables={
    candidates:()=>[],
    execute:()=>false,
    snapshot:()=>({total:0,active:0,pickupCollected:false,pickupActions:0,waystoneToggled:false,useActions:0})
  };

  const interaction=new GameplayInteractionSystem({
    actors,worldInteractables,camera,prompt,coarsePointer:false
  });
  const player={x:0,y:0,z:0};
  interaction.update({frame:22},player,{interact:true});

  assert.equal(interaction.npcInteractions,1);
  assert.equal(actor.playerInteractionCount,1);
  assert.equal(actor.lastPlayerInteractionFrame,22);
  assert.equal(actor.behavior,'OBSERVE_PLAYER');
  assert.equal(actor.awareness,1);
});

test('spawn-relative interactables stay near the starting player',()=>{
  const root=new THREE.Group();
  const resources=new ResourceTracker();
  const world=new WorldInteractables({root,resources,groundHeight:()=>0});
  for(const record of world.records.values()){
    assert.ok(Math.hypot(record.x-WORLD.playerSpawnX,record.z-WORLD.playerSpawnZ)<=INTERACTION.maxDistance);
  }
  world.dispose();
  resources.dispose();
});
