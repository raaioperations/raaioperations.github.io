import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import {ACTORS,BEHAVIOR,FRAME_PHASE,WORLD} from '../src/config.js';
import {FrameScheduler} from '../src/engine/FrameScheduler.js';
import {ResourceTracker} from '../src/engine/ResourceTracker.js';
import {ActorStore} from '../src/actors/ActorStore.js';
import {ActorNeighborhoodIndex} from '../src/actors/ActorNeighborhoodIndex.js';
import {InteractionScheduler} from '../src/actors/InteractionScheduler.js';
import {BehaviorSystem} from '../src/actors/BehaviorSystem.js';
import {LivingWorldSystem} from '../src/actors/LivingWorldSystem.js';

function descriptors(centerX=0,centerZ=0){
  const out=[];
  for(let dz=-1;dz<=1;dz++)for(let dx=-1;dx<=1;dx++){
    const lod=dx===0&&dz===0?'NEAR':Math.abs(dx)+Math.abs(dz)===1?'MID':'FAR';
    out.push({cx:centerX+dx,cz:centerZ+dz,lod,owner:`slot:${dx}:${dz}`});
  }
  return out;
}

function reset(record){
  record.behavior=BEHAVIOR.WANDER;
  record.behaviorUntilFrame=0;
  record.awareness=0;
  record.interactionPartner=null;
  record.interactionCooldownUntilFrame=0;
  record.desiredHeading=null;
}

test('scheduler keeps streaming before behavior simulation before presentation',()=>{
  const calls=[];
  const scheduler=new FrameScheduler({now:()=>1000});
  scheduler.register({name:'render',phase:FRAME_PHASE.RENDER,update:()=>calls.push('render')});
  scheduler.register({name:'presentation',phase:FRAME_PHASE.PRESENTATION,update:()=>calls.push('presentation')});
  scheduler.register({name:'actors',phase:FRAME_PHASE.ACTORS,update:()=>calls.push('actors')});
  scheduler.register({name:'streaming',phase:FRAME_PHASE.STREAMING,update:()=>calls.push('streaming')});
  scheduler.step(1016);
  assert.deepEqual(calls,['streaming','actors','presentation','render']);
});

test('neighborhood index returns only local actors',()=>{
  const index=new ActorNeighborhoodIndex(5);
  const records=[
    {id:'a',x:0,z:0},
    {id:'b',x:1,z:1},
    {id:'c',x:20,z:20}
  ];
  index.rebuild(records);
  const result=index.queryRadius(0,0,3).map(r=>r.id).sort();
  assert.deepEqual(result,['a','b']);
  assert.ok(index.snapshot().peakCandidates<records.length);
});

test('behavior system detects player awareness deterministically',()=>{
  const system=new BehaviorSystem();
  const actor={id:'a',x:0,z:0,lod:'NEAR',behaviorStagger:0,behavior:BEHAVIOR.WANDER,behaviorUntilFrame:0,awareness:0,interactionPartner:null,interactionCooldownUntilFrame:0,desiredHeading:null,behaviorTransitions:0,playerAwarenessEvents:0,avoidanceEvents:0,socialEvents:0};
  system.rebuild([actor]);
  system.interactions.beginFrame(10);
  system.evaluateRecord(actor,10,{x:2,z:0},null);
  assert.equal(actor.behavior,BEHAVIOR.OBSERVE_PLAYER);
  assert.equal(actor.playerAwarenessEvents,1);
  assert.ok(Number.isFinite(actor.desiredHeading));
});

test('behavior system detects close actor avoidance before social behavior',()=>{
  const system=new BehaviorSystem();
  const a={id:'a',x:0,z:0,lod:'NEAR',behaviorStagger:0,behavior:BEHAVIOR.WANDER,behaviorUntilFrame:0,awareness:0,interactionPartner:null,interactionCooldownUntilFrame:0,desiredHeading:null,behaviorTransitions:0,playerAwarenessEvents:0,avoidanceEvents:0,socialEvents:0};
  const b={...a,id:'b',x:.5};
  system.rebuild([a,b]);
  system.interactions.beginFrame(12);
  system.evaluateRecord(a,12,{x:100,z:100},null);
  assert.equal(a.behavior,BEHAVIOR.AVOID);
  assert.equal(a.avoidanceEvents,1);
  assert.equal(system.interactions.totalCreated,0);
});

test('interaction scheduler suppresses duplicate pairs and respects hard budget',()=>{
  const scheduler=new InteractionScheduler(2);
  const make=id=>({id,x:0,z:0,behavior:BEHAVIOR.WANDER,behaviorUntilFrame:0,interactionPartner:null,interactionCooldownUntilFrame:0,desiredHeading:null,behaviorTransitions:0,socialEvents:0});
  const a=make('a'),b=make('b'),c=make('c'),d=make('d'),e=make('e'),f=make('f');
  scheduler.beginFrame(20);
  assert.equal(scheduler.tryStart(a,b,20),true);
  assert.equal(scheduler.tryStart(b,a,20),false);
  assert.equal(scheduler.duplicateSkips,1);
  assert.equal(scheduler.tryStart(c,d,20),true);
  assert.equal(scheduler.tryStart(e,f,20),false);
  assert.equal(scheduler.createdThisFrame,2);
  assert.equal(scheduler.peakCreatedPerFrame,2);
});

test('living world keeps movement and behavior budgets bounded with LOD hierarchy',()=>{
  const resources=new ResourceTracker();
  const root=new THREE.Group();
  let current=descriptors(0,0);
  const chunkManager={activeDescriptors:()=>current};
  const living=new LivingWorldSystem({
    root,resources,chunkManager,groundHeight:()=>0,worldSpatialIndex:null
  });
  living.syncPopulation(0);
  const player=new THREE.Vector3(1000,0,1000);

  for(let frame=1;frame<=720;frame++)living.update({frame,dt:1/60},player);

  const snap=living.snapshot();
  const avg=snap.behavior.averageEvaluationsByLod;
  assert.equal(snap.activeActors,ACTORS.activeCapacity);
  assert.equal(snap.poolReallocations,0);
  assert.equal(snap.duplicateIds,0);
  assert.ok(snap.peakUpdatesPerFrame<=ACTORS.updateBudgetPerFrame);
  assert.ok(snap.behavior.peakEvaluationsPerFrame<=ACTORS.behaviorBudgetPerFrame);
  assert.ok(snap.behavior.interactions.peakCreatedPerFrame<=ACTORS.interactionBudgetPerFrame);
  assert.ok(avg.NEAR>avg.MID);
  assert.ok(avg.MID>avg.FAR);
  assert.ok(avg.FAR>0);

  living.dispose();
  resources.dispose();
});

test('behavior domain state survives chunk unload and reload',()=>{
  const resources=new ResourceTracker();
  const root=new THREE.Group();
  let current=descriptors(0,0);
  const chunkManager={activeDescriptors:()=>current};
  const living=new LivingWorldSystem({
    root,resources,chunkManager,groundHeight:()=>0,worldSpatialIndex:null
  });
  living.syncPopulation(0);

  const id=living.store.getChunk(0,0)[0];
  const record=living.store.get(id);
  record.behavior=BEHAVIOR.OBSERVE_PLAYER;
  record.awareness=.91;
  record.behaviorUntilFrame=200;
  record.desiredHeading=1.25;
  record.playerAwarenessEvents=3;
  const before=living.stateSnapshot(id);

  current=descriptors(4,3);
  living.syncPopulation(50);
  assert.equal(living.activeIds.includes(id),false);
  const dormant=living.stateSnapshot(id);

  current=descriptors(0,0);
  living.syncPopulation(60);
  const after=living.stateSnapshot(id);

  assert.equal(living.activeIds.includes(id),true);
  for(const key of ['behavior','awareness','behaviorUntilFrame','desiredHeading','playerAwarenessEvents']){
    assert.equal(dormant[key],before[key]);
    assert.equal(after[key],before[key]);
  }

  living.dispose();
  resources.dispose();
});

test('actor store still produces stable deterministic identities with behavior state',()=>{
  const a=new ActorStore();
  const b=new ActorStore();
  const idsA=a.ensureChunk(-2,4,0);
  const idsB=b.ensureChunk(-2,4,0);
  assert.deepEqual(idsA,idsB);
  for(const id of idsA){
    const ra=a.get(id),rb=b.get(id);
    assert.equal(ra.id,rb.id);
    assert.equal(ra.x,rb.x);
    assert.equal(ra.z,rb.z);
    assert.equal(ra.behavior,BEHAVIOR.WANDER);
    assert.equal(ra.behavior,rb.behavior);
  }
  assert.equal(new Set(idsA).size,ACTORS.perChunk);
  assert.equal(WORLD.activeChunkCount*ACTORS.perChunk,ACTORS.activeCapacity);
});
