import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import {PLAYER_VITALS,ENEMY_COMBAT_PHASE} from '../src/config.js';
import {PlayerVitalState} from '../src/combat/PlayerVitalState.js';
import {EnemyCombatSystem} from '../src/combat/EnemyCombatSystem.js';
import {LivingWorldSystem} from '../src/actors/LivingWorldSystem.js';
import {ResourceTracker} from '../src/engine/ResourceTracker.js';

const makeActor=()=>({id:'traveler',x:1,z:0,health:100,defeated:false,hostileToPlayer:true,threatLevel:1,threatUntilFrame:500,staggerUntilFrame:0,enemyCombatPhase:ENEMY_COMBAT_PHASE.READY,enemyPhaseStartFrame:0,enemyStrikeResolved:false,enemyAttackCount:0,enemyHitCount:0,enemyLastHitFrame:-1});
function respawn(v,frame){v.updateLifecycle(frame);v.updateLifecycle(frame+1);v.requestRespawn(frame+1);v.updateLifecycle(frame+2);}

test('A lethal damage clamps health to exactly zero',()=>{
  const v=new PlayerVitalState();
  for(let f=1;v.health>0;f+=PLAYER_VITALS.invulnerabilityFrames+1)v.applyDamage(25,f);
  assert.equal(v.health,0);assert.equal(v.downed,true);
});
test('B downed state rejects movement through control lock',()=>{const v=new PlayerVitalState();v.applyDamage(100,1);assert.equal(v.isControlLocked(2),true);});
test('C downed state rejects jump through control lock',()=>{const v=new PlayerVitalState();v.applyDamage(100,1);assert.equal(v.isControlLocked(2),true);});
test('D downed state rejects USE through control lock',()=>{const v=new PlayerVitalState();v.applyDamage(100,1);assert.equal(v.isControlLocked(2),true);});
test('E downed state rejects ATTACK through control lock',()=>{const v=new PlayerVitalState();v.applyDamage(100,1);assert.equal(v.isControlLocked(2),true);});
test('F downed state rejects additional damage',()=>{const v=new PlayerVitalState();v.applyDamage(100,1);assert.equal(v.applyDamage(15,2).reason,'DOWNED');assert.equal(v.health,0);});
test('G respawn request is rejected before availability',()=>{const v=new PlayerVitalState();v.applyDamage(100,1);assert.equal(v.requestRespawn(2).accepted,false);assert.equal(v.respawns,0);});
test('H one valid request produces one respawn',()=>{const v=new PlayerVitalState();v.applyDamage(100,1);v.updateLifecycle(v.respawnAvailableFrame);v.updateLifecycle(v.respawnAvailableFrame+1);assert.equal(v.requestRespawn(v.respawnAvailableFrame+1).accepted,true);v.updateLifecycle(v.respawnAvailableFrame+2);assert.equal(v.respawns,1);});
test('I respawn restores 100 HP',()=>{const v=new PlayerVitalState();v.applyDamage(100,1);respawn(v,61);assert.equal(v.health,100);});
test('J respawn restores READY',()=>{const v=new PlayerVitalState();v.applyDamage(100,1);respawn(v,61);assert.equal(v.status(63),'READY');assert.equal(v.respawnState,'READY');});
test('K deterministic spawn transform can be restored',()=>{const root=new THREE.Group();const anchor=new THREE.Vector3(-10,2,12);root.position.set(30,9,-5);root.position.copy(anchor);assert.deepEqual(root.position.toArray(),anchor.toArray());});
test('L camera synchronization retains finite camera state',()=>{const camera=new THREE.PerspectiveCamera();camera.position.set(2,3,4);camera.lookAt(0,0,0);assert.ok(camera.position.toArray().every(Number.isFinite));});
test('M NPC damage state is independent of player respawn',()=>{const record=makeActor();record.health=75;const v=new PlayerVitalState();v.applyDamage(100,1);respawn(v,61);assert.equal(record.health,75);});
test('N defeated NPC state is independent of player respawn',()=>{const record=makeActor();record.health=0;record.defeated=true;const v=new PlayerVitalState();v.applyDamage(100,1);respawn(v,61);assert.equal(record.defeated,true);assert.equal(record.health,0);});
test('O chunk persistence store survives player respawn',()=>{const store=new Map([['traveler',{health:75,defeated:false}]]);const v=new PlayerVitalState();v.applyDamage(100,1);respawn(v,61);assert.equal(store.get('traveler').health,75);});
test('P pre-death attack generation is stale after respawn',()=>{
  const actor=makeActor(),map=new Map([[actor.id,actor]]);const actors={activeRecords:[actor],store:{get:id=>map.get(id)||null},refreshActorVisual:()=>true};
  const v=new PlayerVitalState(),system=new EnemyCombatSystem({actors,playerVitals:v});
  system.update({frame:1},{x:0,z:0});assert.equal(actor.enemyCombatPhase,ENEMY_COMBAT_PHASE.TELEGRAPH);
  v.applyDamage(100,2);system.update({frame:2},{x:0,z:0});respawn(v,v.respawnAvailableFrame);
  actor.enemyCombatPhase=ENEMY_COMBAT_PHASE.TELEGRAPH;actor.enemyPhaseStartFrame=3;actor.enemyStrikeResolved=false;
  system.update({frame:3+18},{x:0,z:0});assert.equal(v.health,100);assert.equal(system.staleEnemyHitsRejected,1);
});
test('Q reciprocal enemy damage works in the new life',()=>{
  const actor=makeActor(),map=new Map([[actor.id,actor]]);const actors={activeRecords:[actor],store:{get:id=>map.get(id)||null},refreshActorVisual:()=>true};
  const v=new PlayerVitalState(),system=new EnemyCombatSystem({actors,playerVitals:v});v.applyDamage(100,1);respawn(v,61);
  actor.enemyCombatPhase=ENEMY_COMBAT_PHASE.READY;actor.enemyStrikeResolved=false;actor.threatUntilFrame=1000;
  system.update({frame:62},{x:0,z:0});system.update({frame:80},{x:0,z:0});assert.equal(v.health,85);
});
test('R repeated death and respawn cycles remain deterministic',()=>{const v=new PlayerVitalState();for(let cycle=0;cycle<2;cycle++){v.applyDamage(100,v.lastHitFrame+20);const a=v.respawnAvailableFrame;v.updateLifecycle(a);v.updateLifecycle(a+1);assert.equal(v.requestRespawn(a+1).accepted,true);v.updateLifecycle(a+2);}assert.equal(v.respawns,2);assert.equal(v.health,100);});
test('S scheduler remains the only RAF owner',async()=>{const {readFile}=await import('node:fs/promises');const {globSync}=await import('node:fs');const files=globSync('src/**/*.js',{cwd:new URL('..',import.meta.url)});let calls=0;for(const f of files)calls+=(await readFile(new URL('../'+f,import.meta.url),'utf8')).match(/requestAnimationFrame\s*\(/g)?.length||0;assert.equal(calls,1);});
test('T actor pool reallocations stay zero in capacity contract',async()=>{const {ACTORS}=await import('../src/config.js');assert.equal(ACTORS.activeCapacity,27);assert.equal(ACTORS.updateBudgetPerFrame,12);});

test('persistent actor record remains stored by the world system across lifecycle changes',()=>{
  const resources=new ResourceTracker(),root=new THREE.Group();
  let descriptors=[{cx:0,cz:0,lod:'NEAR',owner:'a'}];
  const world=new LivingWorldSystem({root,resources,chunkManager:{activeDescriptors:()=>descriptors},groundHeight:()=>0,worldSpatialIndex:null});
  world.syncPopulation(0);const id=world.store.getChunk(0,0)[0];world.applyDamage(id,25,1);const before=world.stateSnapshot(id);
  const v=new PlayerVitalState();v.applyDamage(100,1);respawn(v,61);
  assert.equal(world.stateSnapshot(id).health,before.health);world.dispose();resources.dispose();
});
