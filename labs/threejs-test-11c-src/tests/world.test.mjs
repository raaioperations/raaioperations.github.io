import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import {FrameScheduler} from '../src/engine/FrameScheduler.js';
import {FRAME_PHASE,CAMERA,WORLD} from '../src/config.js';
import {heightAt,generateVegetationLayout} from '../src/world/Terrain.js';
import {PlayerController} from '../src/player/PlayerController.js';
import {ThirdPersonCamera} from '../src/camera/ThirdPersonCamera.js';

test('scheduler preserves world presentation before camera and render',()=>{
  const calls=[];
  const scheduler=new FrameScheduler({now:()=>1000});
  scheduler.register({name:'render',phase:FRAME_PHASE.RENDER,update:()=>calls.push('render')});
  scheduler.register({name:'camera',phase:FRAME_PHASE.CAMERA,update:()=>calls.push('camera')});
  scheduler.register({name:'world',phase:FRAME_PHASE.PRESENTATION,update:()=>calls.push('world')});
  scheduler.register({name:'player',phase:FRAME_PHASE.SIMULATION,update:()=>calls.push('player')});
  scheduler.step(1016);
  assert.deepEqual(calls,['player','world','camera','render']);
});

test('terrain is deterministic and meaningfully varied',()=>{
  const points=[[-20,-20],[-5,9],[0,0],[12,-8],[28,17]];
  const a=points.map(([x,z])=>heightAt(x,z));
  const b=points.map(([x,z])=>heightAt(x,z));
  assert.deepEqual(a,b);
  assert.ok(Math.max(...a)-Math.min(...a)>.5);
  assert.ok(heightAt(WORLD.waterCenterX,WORLD.waterCenterZ)<WORLD.waterLevel+.8);
});

test('vegetation layout is deterministic and respects world counts',()=>{
  const a=generateVegetationLayout();
  const b=generateVegetationLayout();
  assert.equal(a.trees.length,WORLD.treeCount);
  assert.equal(a.shrubs.length,WORLD.shrubCount);
  assert.deepEqual(a,b);
  for(const item of a.trees){
    assert.ok(Math.hypot(item.x-WORLD.waterCenterX,item.z-WORLD.waterCenterZ)>WORLD.waterRadius+2);
  }
});

test('player follows terrain and lands back on terrain after jump',()=>{
  const root=new THREE.Group();
  root.position.set(WORLD.playerSpawnX,heightAt(WORLD.playerSpawnX,WORLD.playerSpawnZ),WORLD.playerSpawnZ);
  const player=new PlayerController(root,{groundHeight:heightAt});

  player.setInput({moveX:0,moveY:1,sprint:false,jump:false});
  for(let i=0;i<60;i++)player.update({dt:1/60},0);
  assert.ok(Math.abs(root.position.y-heightAt(root.position.x,root.position.z))<1e-9);

  player.setInput({moveX:0,moveY:0,sprint:false,jump:true});
  player.update({dt:1/60},0);
  assert.equal(player.grounded,false);

  player.setInput({moveX:0,moveY:0,sprint:false,jump:false});
  for(let i=0;i<120;i++)player.update({dt:1/60},0);
  assert.equal(player.grounded,true);
  assert.ok(Math.abs(root.position.y-heightAt(root.position.x,root.position.z))<1e-9);
});

test('camera terrain clearance never resolves below terrain padding',()=>{
  const camera=new THREE.PerspectiveCamera();
  const rig=new ThirdPersonCamera(camera,{groundHeight:heightAt,obstacles:[]});
  rig.yaw=.25;
  rig.pitch=-.05;
  rig.distance=8;
  const player=new THREE.Vector3(-12,heightAt(-12,10),10);
  rig.update({dt:1/60},player,{lookDX:0,lookDY:0});
  const clearance=camera.position.y-heightAt(camera.position.x,camera.position.z);
  assert.ok(clearance>=CAMERA.terrainPadding-1e-9);
});
