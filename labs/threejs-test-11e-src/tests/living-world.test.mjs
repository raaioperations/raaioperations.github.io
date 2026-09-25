import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import {ACTORS,FRAME_PHASE,WORLD} from '../src/config.js';
import {FrameScheduler} from '../src/engine/FrameScheduler.js';
import {ResourceTracker} from '../src/engine/ResourceTracker.js';
import {ActorStore,actorChunkKey} from '../src/actors/ActorStore.js';
import {LivingWorldSystem} from '../src/actors/LivingWorldSystem.js';

function descriptors(centerX=0,centerZ=0){
  const out=[];
  for(let dz=-1;dz<=1;dz++)for(let dx=-1;dx<=1;dx++){
    const lod=dx===0&&dz===0?'NEAR':Math.abs(dx)+Math.abs(dz)===1?'MID':'FAR';
    out.push({cx:centerX+dx,cz:centerZ+dz,lod,owner:`slot:${dx}:${dz}`});
  }
  return out;
}

test('scheduler runs streaming before living actors before presentation',()=>{
  const calls=[];
  const scheduler=new FrameScheduler({now:()=>1000});
  scheduler.register({name:'render',phase:FRAME_PHASE.RENDER,update:()=>calls.push('render')});
  scheduler.register({name:'presentation',phase:FRAME_PHASE.PRESENTATION,update:()=>calls.push('presentation')});
  scheduler.register({name:'actors',phase:FRAME_PHASE.ACTORS,update:()=>calls.push('actors')});
  scheduler.register({name:'streaming',phase:FRAME_PHASE.STREAMING,update:()=>calls.push('streaming')});
  scheduler.step(1016);
  assert.deepEqual(calls,['streaming','actors','presentation','render']);
});

test('actor store generates stable deterministic IDs and state',()=>{
  const a=new ActorStore();
  const b=new ActorStore();
  const idsA=a.ensureChunk(-2,3,10);
  const idsB=b.ensureChunk(-2,3,10);
  assert.deepEqual(idsA,idsB);
  assert.equal(idsA.length,ACTORS.perChunk);
  assert.equal(new Set(idsA).size,ACTORS.perChunk);
  for(const id of idsA){
    const ra=a.get(id),rb=b.get(id);
    assert.deepEqual(
      {id:ra.id,x:ra.x,z:ra.z,heading:ra.heading,speed:ra.speed,phase:ra.phase},
      {id:rb.id,x:rb.x,z:rb.z,heading:rb.heading,speed:rb.speed,phase:rb.phase}
    );
  }
});

test('actor store prunes only dormant chunks to a bounded retention limit',()=>{
  const store=new ActorStore({perChunk:1,chunkLimit:4});
  for(let i=0;i<7;i++)store.ensureChunk(i,0,i);
  const active=new Set([actorChunkKey(5,0),actorChunkKey(6,0)]);
  const removed=store.prune(active);
  assert.ok(removed>=3);
  assert.equal(store.snapshot().chunks,4);
  assert.ok(store.getChunk(5,0));
  assert.ok(store.getChunk(6,0));
});

test('living world enforces simulation LOD and hard update budget',()=>{
  const resources=new ResourceTracker();
  const root=new THREE.Group();
  let current=descriptors(0,0);
  const chunkManager={activeDescriptors:()=>current};
  const actors=new LivingWorldSystem({root,resources,chunkManager,groundHeight:()=>0});
  actors.syncPopulation(0);

  for(let frame=1;frame<=240;frame++)actors.update({frame,dt:1/60});

  const snap=actors.snapshot();
  assert.equal(snap.activeActors,ACTORS.activeCapacity);
  assert.equal(snap.visualBindings,ACTORS.activeCapacity);
  assert.equal(snap.duplicateIds,0);
  assert.equal(snap.poolReallocations,0);
  assert.ok(snap.peakUpdatesPerFrame<=ACTORS.updateBudgetPerFrame);
  assert.ok(snap.averageUpdatesByLod.NEAR>snap.averageUpdatesByLod.MID);
  assert.ok(snap.averageUpdatesByLod.MID>snap.averageUpdatesByLod.FAR);
  assert.ok(snap.averageUpdatesByLod.FAR>0);

  actors.dispose();
  resources.dispose();
});

test('living world restores the same actor state after chunk unload and reload',()=>{
  const resources=new ResourceTracker();
  const root=new THREE.Group();
  let current=descriptors(0,0);
  const chunkManager={activeDescriptors:()=>current};
  const actors=new LivingWorldSystem({root,resources,chunkManager,groundHeight:()=>0});
  actors.syncPopulation(0);

  for(let frame=1;frame<=60;frame++)actors.update({frame,dt:1/60});

  const id=actors.store.getChunk(0,0)[0];
  const before=actors.stateSnapshot(id);

  current=descriptors(4,3);
  actors.syncPopulation(61);
  assert.equal(actors.activeIds.includes(id),false);
  const dormant=actors.stateSnapshot(id);
  assert.deepEqual(
    {x:dormant.x,z:dormant.z,heading:dormant.heading,ticks:dormant.ticks},
    {x:before.x,z:before.z,heading:before.heading,ticks:before.ticks}
  );

  current=descriptors(0,0);
  actors.syncPopulation(62);
  const after=actors.stateSnapshot(id);
  assert.equal(actors.activeIds.includes(id),true);
  assert.deepEqual(
    {x:after.x,z:after.z,heading:after.heading,ticks:after.ticks},
    {x:before.x,z:before.z,heading:before.heading,ticks:before.ticks}
  );
  assert.ok(actors.snapshot().reactivations>=1);
  assert.ok(actors.snapshot().restoredEntities>=ACTORS.perChunk);

  actors.dispose();
  resources.dispose();
});

test('active population contract is exactly three actors across nine chunks',()=>{
  const store=new ActorStore();
  const ids=[];
  for(const d of descriptors(2,-4))ids.push(...store.ensureChunk(d.cx,d.cz,0));
  assert.equal(ids.length,WORLD.activeChunkCount*ACTORS.perChunk);
  assert.equal(ids.length,ACTORS.activeCapacity);
  assert.equal(new Set(ids).size,ACTORS.activeCapacity);
});
