import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import {
  ACTORS,COMBAT,ENEMY_COMBAT,ENEMY_COMBAT_PHASE,PLAYER_VITALS
} from '../src/config.js';
import {ResourceTracker} from '../src/engine/ResourceTracker.js';
import {PlayerVitalState} from '../src/combat/PlayerVitalState.js';
import {EnemyCombatSystem} from '../src/combat/EnemyCombatSystem.js';
import {LivingWorldSystem} from '../src/actors/LivingWorldSystem.js';

function descriptors(centerX=0,centerZ=0){
  const out=[];
  for(let dz=-1;dz<=1;dz++)for(let dx=-1;dx<=1;dx++){
    const lod=dx===0&&dz===0?'NEAR':Math.abs(dx)+Math.abs(dz)===1?'MID':'FAR';
    out.push({cx:centerX+dx,cz:centerZ+dz,lod,owner:'slot:'+dx+':'+dz});
  }
  return out;
}

function enemyRecord(id='actor:0:0:0',x=1.5,z=0){
  return {
    id,x,z,health:100,defeated:false,
    hostileToPlayer:true,threatLevel:1,threatUntilFrame:1000,
    staggerUntilFrame:0,desiredHeading:null,
    enemyCombatPhase:ENEMY_COMBAT_PHASE.READY,
    enemyPhaseStartFrame:0,enemyStrikeResolved:false,
    enemyAttackCount:0,enemyHitCount:0,enemyLastHitFrame:-1
  };
}

test('player vitals apply one damage event then block damage during i-frames',()=>{
  const vitals=new PlayerVitalState();
  const first=vitals.applyDamage(PLAYER_VITALS.enemyDamage,10);
  assert.equal(first.applied,true);
  assert.equal(vitals.health,85);
  assert.equal(vitals.hitCount,1);
  assert.equal(vitals.isStaggered(11),true);
  assert.equal(vitals.isControlLocked(11),true);

  const blocked=vitals.applyDamage(PLAYER_VITALS.enemyDamage,11);
  assert.equal(blocked.applied,false);
  assert.equal(blocked.reason,'INVULNERABLE');
  assert.equal(vitals.health,85);
  assert.equal(vitals.hitCount,1);
  assert.equal(vitals.damageBlockedByInvulnerability,1);
});

test('player vital state enters DOWNED exactly at zero health',()=>{
  const vitals=new PlayerVitalState();
  let frame=1;
  while(!vitals.downed){
    const result=vitals.applyDamage(25,frame);
    assert.equal(result.applied,true);
    frame+=PLAYER_VITALS.invulnerabilityFrames+1;
  }
  assert.equal(vitals.health,0);
  assert.equal(vitals.downed,true);
  assert.equal(vitals.status(frame),'DOWNED');
  assert.equal(vitals.isControlLocked(frame),true);

  const rejected=vitals.applyDamage(25,frame+10);
  assert.equal(rejected.applied,false);
  assert.equal(rejected.reason,'DOWNED');
  assert.equal(vitals.health,0);
});

test('enemy combat advances telegraph to one strike to recovery',()=>{
  const actor=enemyRecord();
  const map=new Map([[actor.id,actor]]);
  const actors={
    activeRecords:[actor],
    store:{get:id=>map.get(id)||null},
    refreshActorVisual:()=>true
  };
  const vitals=new PlayerVitalState();
  const system=new EnemyCombatSystem({actors,playerVitals:vitals});
  const player={x:0,y:0,z:0};

  system.update({frame:1},player);
  assert.equal(actor.enemyCombatPhase,ENEMY_COMBAT_PHASE.TELEGRAPH);
  assert.equal(system.totalAttackStarts,1);

  for(let frame=2;frame<=ENEMY_COMBAT.telegraphFrames;frame++)system.update({frame},player);
  assert.equal(vitals.health,100);

  system.update({frame:ENEMY_COMBAT.telegraphFrames+1},player);
  assert.equal(actor.enemyCombatPhase,ENEMY_COMBAT_PHASE.STRIKE);
  assert.equal(vitals.health,85);
  assert.equal(actor.enemyHitCount,1);
  assert.equal(system.totalHits,1);

  system.update({frame:ENEMY_COMBAT.telegraphFrames+2},player);
  assert.equal(vitals.health,85);
  assert.equal(actor.enemyHitCount,1);

  for(let frame=ENEMY_COMBAT.telegraphFrames+3;frame<=ENEMY_COMBAT.telegraphFrames+5;frame++){
    system.update({frame},player);
  }
  assert.equal(actor.enemyCombatPhase,ENEMY_COMBAT_PHASE.RECOVERY);
});

test('enemy combat start/evaluation budgets are hard bounded',()=>{
  const records=[
    enemyRecord('a',1.2,0),
    enemyRecord('b',1.3,.1),
    enemyRecord('c',1.4,.2),
    enemyRecord('d',1.5,.3),
    enemyRecord('e',1.6,.4)
  ];
  const actors={
    activeRecords:records,
    store:{get:id=>records.find(r=>r.id===id)||null},
    refreshActorVisual:()=>true
  };
  const system=new EnemyCombatSystem({actors,playerVitals:new PlayerVitalState()});
  system.update({frame:1},{x:0,z:0});

  assert.ok(system.evaluationsThisFrame<=ENEMY_COMBAT.evaluationBudgetPerFrame);
  assert.ok(system.peakEvaluationsPerFrame<=ENEMY_COMBAT.evaluationBudgetPerFrame);
  assert.ok(system.attackStartsThisFrame<=ENEMY_COMBAT.attackStartsPerFrame);
  assert.ok(system.peakAttackStartsPerFrame<=ENEMY_COMBAT.attackStartsPerFrame);
  assert.ok(system.concurrentAttackersPeak<=ENEMY_COMBAT.maxConcurrentAttackers);
});

test('player damage creates retaliation state that survives actor chunk unload/reload',()=>{
  const resources=new ResourceTracker();
  const root=new THREE.Group();
  let current=descriptors(0,0);
  const chunkManager={activeDescriptors:()=>current};
  const living=new LivingWorldSystem({
    root,resources,chunkManager,groundHeight:()=>0,worldSpatialIndex:null
  });
  living.syncPopulation(0);

  const id=living.store.getChunk(0,0)[0];
  const result=living.applyDamage(id,COMBAT.damage,20);
  assert.ok(result);
  const before=living.stateSnapshot(id);
  assert.equal(before.health,75);
  assert.equal(before.hostileToPlayer,true);
  assert.ok(before.threatUntilFrame>20);
  assert.equal(before.enemyCombatPhase,ENEMY_COMBAT_PHASE.READY);

  const record=living.store.get(id);
  record.enemyCombatPhase=ENEMY_COMBAT_PHASE.RECOVERY;
  record.enemyPhaseStartFrame=32;
  record.enemyAttackCount=1;
  record.enemyHitCount=1;
  const combatBefore=living.stateSnapshot(id);

  current=descriptors(4,3);
  living.syncPopulation(100);
  assert.equal(living.activeIds.includes(id),false);

  current=descriptors(0,0);
  living.syncPopulation(110);
  const after=living.stateSnapshot(id);
  assert.equal(living.activeIds.includes(id),true);
  assert.equal(after.health,combatBefore.health);
  assert.equal(after.hostileToPlayer,true);
  assert.equal(after.threatUntilFrame,combatBefore.threatUntilFrame);
  assert.equal(after.enemyCombatPhase,ENEMY_COMBAT_PHASE.RECOVERY);
  assert.equal(after.enemyAttackCount,1);
  assert.equal(after.enemyHitCount,1);

  living.dispose();
  resources.dispose();
});

test('reciprocal combat preserves accepted upstream budgets',()=>{
  assert.equal(ACTORS.activeCapacity,27);
  assert.equal(ACTORS.updateBudgetPerFrame,12);
  assert.equal(ACTORS.behaviorBudgetPerFrame,6);
  assert.equal(COMBAT.attackStartsPerFrame,1);
  assert.equal(ENEMY_COMBAT.evaluationBudgetPerFrame,4);
  assert.equal(ENEMY_COMBAT.attackStartsPerFrame,1);
  assert.equal(PLAYER_VITALS.maxHealth,100);
  assert.equal(PLAYER_VITALS.enemyDamage,15);
});
