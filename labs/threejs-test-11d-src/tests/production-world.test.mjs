import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import {FrameScheduler} from '../src/engine/FrameScheduler.js';
import {ResourceTracker} from '../src/engine/ResourceTracker.js';
import {QualityManager} from '../src/engine/QualityManager.js';
import {AssetManager} from '../src/assets/AssetManager.js';
import {SpatialHash} from '../src/spatial/SpatialHash.js';
import {ChunkManager} from '../src/world/ChunkManager.js';
import {FRAME_PHASE,QUALITY,WORLD} from '../src/config.js';
import {chunkCenter,heightAt} from '../src/world/Terrain.js';

test('scheduler preserves streaming before presentation before camera before quality before render',()=>{
  const calls=[];
  const scheduler=new FrameScheduler({now:()=>1000});
  scheduler.register({name:'render',phase:FRAME_PHASE.RENDER,update:()=>calls.push('render')});
  scheduler.register({name:'quality',phase:FRAME_PHASE.QUALITY,update:()=>calls.push('quality')});
  scheduler.register({name:'camera',phase:FRAME_PHASE.CAMERA,update:()=>calls.push('camera')});
  scheduler.register({name:'presentation',phase:FRAME_PHASE.PRESENTATION,update:()=>calls.push('presentation')});
  scheduler.register({name:'streaming',phase:FRAME_PHASE.STREAMING,update:()=>calls.push('streaming')});
  scheduler.step(1016);
  assert.deepEqual(calls,['streaming','presentation','camera','quality','render']);
});

test('terrain is continuous across a chunk boundary',()=>{
  const z=7.125;
  const boundary=WORLD.chunkSize;
  const left=heightAt(boundary-1e-9,z);
  const exact=heightAt(boundary,z);
  const right=heightAt(boundary+1e-9,z);
  assert.ok(Math.abs(left-exact)<1e-7);
  assert.ok(Math.abs(right-exact)<1e-7);
  assert.equal(chunkCenter(0),WORLD.chunkSize*.5);
  assert.equal(chunkCenter(1),WORLD.chunkSize*1.5);
});

test('spatial hash broad phase returns a strict subset when query is local',()=>{
  const hash=new SpatialHash(10);
  for(let i=0;i<20;i++)hash.insert({x:i*12,z:0,r:1,height:4},{owner:'o'+i});
  const result=hash.queryAABB(-2,-2,26,2);
  assert.ok(result.length>0);
  assert.ok(result.length<hash.snapshot().entries);
  hash.removeOwner('o0');
  assert.equal(hash.snapshot().entries,19);
});

test('quality manager degrades and improves only after sustained thresholds',()=>{
  const fakeWindow={
    innerWidth:1200,innerHeight:800,devicePixelRatio:2,
    matchMedia:()=>({matches:false})
  };
  const quality=new QualityManager(fakeWindow);
  assert.equal(quality.tier,'HIGH');

  for(let i=0;i<QUALITY.degradeFrames-1;i++)assert.equal(quality.update(25),false);
  assert.equal(quality.tier,'HIGH');
  assert.equal(quality.update(25),true);
  assert.equal(quality.tier,'BALANCED');

  for(let i=0;i<QUALITY.improveFrames-1;i++)assert.equal(quality.update(12),false);
  assert.equal(quality.tier,'BALANCED');
  assert.equal(quality.update(12),true);
  assert.equal(quality.tier,'HIGH');
});

test('asset manager parses a URL once and records cache hits',async()=>{
  const assets=new AssetManager();
  let loads=0;
  assets.loader.loadAsync=async()=>{
    loads++;
    return {scene:new THREE.Group(),animations:[]};
  };
  await assets.loadGLTF('/a.glb');
  await assets.loadGLTF('/a.glb');
  await assets.instantiateGLTF('/a.glb');
  const snap=assets.snapshot();
  assert.equal(loads,1);
  assert.equal(snap.misses,1);
  assert.equal(snap.hits,2);
  assert.equal(snap.instances,1);
  assets.dispose();
});

test('chunk manager reuses a fixed nine-slot pool across crossings',()=>{
  const resources=new ResourceTracker();
  const spatial=new SpatialHash(WORLD.spatialCellSize);
  const quality={tier:'HIGH'};
  const root=new THREE.Group();
  const chunks=new ChunkManager({root,resources,spatialIndex:spatial,quality});

  chunks.refresh(0,0,{force:true});
  const slots=chunks.slots;
  const identities=[...slots];

  for(const [x,z] of [[40,0],[70,-35],[-40,45],[5,5]])chunks.refresh(x,z);

  assert.equal(chunks.slots.length,WORLD.activeChunkCount);
  assert.deepEqual(chunks.slots,identities);
  assert.equal(chunks.snapshot().active,WORLD.activeChunkCount);
  assert.equal(chunks.snapshot().poolSize,WORLD.activeChunkCount);
  assert.ok(chunks.snapshot().refreshes>=5);
  assert.ok(spatial.snapshot().entries>0);

  chunks.dispose();
  resources.dispose();
});
