import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import {FrameScheduler} from '../src/engine/FrameScheduler.js';
import {FRAME_PHASE} from '../src/config.js';
import {PlayerController} from '../src/player/PlayerController.js';
import {segmentCylinderHitFraction,ThirdPersonCamera} from '../src/camera/ThirdPersonCamera.js';

test('scheduler preserves player before camera before render order',()=>{
  const calls=[],scheduler=new FrameScheduler({now:()=>1000});
  scheduler.register({name:'camera',phase:FRAME_PHASE.CAMERA,update:()=>calls.push('camera')});
  scheduler.register({name:'player',phase:FRAME_PHASE.SIMULATION,update:()=>calls.push('player')});
  scheduler.register({name:'render',phase:FRAME_PHASE.RENDER,update:()=>calls.push('render')});
  scheduler.step(1016);
  assert.deepEqual(calls,['player','camera','render']);
});

test('player moves and returns to ground after jump',()=>{
  const root=new THREE.Group(),player=new PlayerController(root);
  player.setInput({moveX:0,moveY:1,sprint:false,jump:false});
  for(let i=0;i<60;i++)player.update({dt:1/60},0);
  assert.ok(Math.abs(root.position.z)>1);
  player.setInput({moveX:0,moveY:0,sprint:false,jump:true});
  player.update({dt:1/60},0);
  assert.ok(root.position.y>0);
  player.setInput({moveX:0,moveY:0,sprint:false,jump:false});
  for(let i=0;i<120;i++)player.update({dt:1/60},0);
  assert.equal(player.grounded,true);
  assert.ok(Math.abs(root.position.y)<1e-9);
});

test('analytic cylinder collision returns an intercept fraction',()=>{
  const hit=segmentCylinderHitFraction(0,0,10,0,5,0,1);
  assert.ok(hit!==null&&hit>0&&hit<1);
  assert.equal(segmentCylinderHitFraction(0,0,10,0,5,5,1),null);
});

test('camera collision shortens boom around obstacle',()=>{
  const camera=new THREE.PerspectiveCamera(),rig=new ThirdPersonCamera(camera,{obstacles:[{x:0,z:3,r:1,height:8}]});
  rig.yaw=0;rig.pitch=0;rig.distance=7;
  rig.update({dt:1/60},new THREE.Vector3(0,0,0),{lookDX:0,lookDY:0});
  assert.ok(rig.actualDistance<7.2);
});
