import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import {ACTORS,COMBAT,COMBAT_PHASE} from '../src/config.js';
import {ResourceTracker} from '../src/engine/ResourceTracker.js';
import {selectCombatTarget} from '../src/combat/CombatTargeting.js';
import {CombatSystem} from '../src/combat/CombatSystem.js';
import {LivingWorldSystem} from '../src/actors/LivingWorldSystem.js';

function descriptors(centerX=0,centerZ=0){
  const out=[];
  for(let dz=-1;dz<=1;dz++)for(let dx=-1;dx<=1;dx++){
    const lod=dx===0&&dz===0?'NEAR':Math.abs(dx)+Math.abs(dz)===1?'MID':'FAR';
    out.push({cx:centerX+dx,cz:centerZ+dz,lod,owner:`slot:${dx}:${dz}`});
  }
  return out;
}

test('combat targeting is deterministic and excludes defeated actors',()=>{
  const records=[
    {id:'actor:b',x:1.5,z:0,defeated:false,health:100},
    {id:'actor:a',x:1.5,z:0,defeated:false,health:100},
    {id:'actor:dead',x:.5,z:0,defeated:true,health:0}
  ];
  const target=selectCombatTarget(records,{
    playerX:0,playerZ:0,forwardX:1,forwardZ:0
  });
  assert.equal(target.id,'actor:a');
  assert.equal(target.record.defeated,false);
  assert.ok(target.distance<=COMBAT.targetRange);
});

test('combat state machine resolves exactly one hit and rejects repeated attack input',()=>{
  const record={
    id:'actor:0:0:0',x:1.4,z:0,health:100,maxHealth:100,hitCount:0,
    defeated:false,lastHitFrame:-1,staggerUntilFrame:0
  };
  const map=new Map([[record.id,record]]);
  const actors={
    activeRecords:[record],
    store:{get:id=>map.get(id)||null},
    applyDamage(id,amount,frame){
      const r=map.get(id);
      if(!r||r.defeated)return null;
      const damage=Math.min(r.health,amount);
      r.health-=damage;r.hitCount++;r.lastHitFrame=frame;r.staggerUntilFrame=frame+COMBAT.staggerFrames;
      const defeatedNow=r.health<=0&&!r.defeated;
      if(defeatedNow)r.defeated=true;
      return {id,damage,health:r.health,hitCount:r.hitCount,defeated:r.defeated,defeatedNow};
    }
  };
  const resources=new ResourceTracker();
  const worldRoot=new THREE.Group();
  const camera={getWorldDirection(v){return v.set(1,0,0);}};

  const combat=new CombatSystem({
    actors,camera,worldRoot,resources,groundHeight:()=>0
  });
  const player={x:0,y:0,z:0};

  combat.update({frame:1,dt:1/60},player,{attack:true});
  assert.equal(combat.phase,COMBAT_PHASE.WINDUP);
  assert.equal(combat.totalAttackStarts,1);

  combat.update({frame:2,dt:1/60},player,{attack:true});
  assert.equal(combat.totalAttackStarts,1);
  assert.ok(combat.recoveryRejects>=1);

  for(let frame=3;frame<=9;frame++)combat.update({frame,dt:1/60},player,{attack:false});
  assert.equal(record.health,75);
  assert.equal(record.hitCount,1);
  assert.equal(combat.totalHits,1);

  combat.update({frame:10,dt:1/60},player,{attack:false});
  combat.update({frame:11,dt:1/60},player,{attack:false});
  assert.equal(record.health,75);
  assert.equal(record.hitCount,1);
  assert.ok(combat.duplicateHitBlocks>=1);

  for(let frame=12;frame<=14;frame++)combat.update({frame,dt:1/60},player,{attack:false});
  const starts=combat.totalAttackStarts;
  combat.update({frame:15,dt:1/60},player,{attack:true});
  assert.equal(combat.totalAttackStarts,starts);
  assert.ok(combat.recoveryRejects>=2);

  combat.dispose();
  resources.dispose();
});

test('living-world combat health and defeated state persist across chunk unload/reload',()=>{
  const resources=new ResourceTracker();
  const root=new THREE.Group();
  let current=descriptors(0,0);
  const chunkManager={activeDescriptors:()=>current};
  const living=new LivingWorldSystem({
    root,resources,chunkManager,groundHeight:()=>0,worldSpatialIndex:null
  });
  living.syncPopulation(0);

  const id=living.store.getChunk(0,0)[0];
  for(let hit=1;hit<=4;hit++){
    const result=living.applyDamage(id,COMBAT.damage,hit*10);
    assert.ok(result);
  }
  const defeated=living.stateSnapshot(id);
  assert.equal(defeated.health,0);
  assert.equal(defeated.hitCount,4);
  assert.equal(defeated.defeated,true);
  assert.equal(living.snapshot().defeatedCount,1);

  current=descriptors(4,3);
  living.syncPopulation(100);
  assert.equal(living.activeIds.includes(id),false);

  current=descriptors(0,0);
  living.syncPopulation(110);
  const restored=living.stateSnapshot(id);
  assert.equal(living.activeIds.includes(id),true);
  assert.equal(restored.health,0);
  assert.equal(restored.hitCount,4);
  assert.equal(restored.defeated,true);

  living.dispose();
  resources.dispose();
});

test('damage application is clamped and cannot double-hit a defeated actor',()=>{
  const resources=new ResourceTracker();
  const root=new THREE.Group();
  const chunkManager={activeDescriptors:()=>descriptors(0,0)};
  const living=new LivingWorldSystem({
    root,resources,chunkManager,groundHeight:()=>0,worldSpatialIndex:null
  });
  living.syncPopulation(0);

  const id=living.store.getChunk(0,0)[0];
  const first=living.applyDamage(id,250,1);
  assert.equal(first.damage,100);
  assert.equal(first.health,0);
  assert.equal(first.defeatedNow,true);
  const second=living.applyDamage(id,COMBAT.damage,2);
  assert.equal(second,null);
  assert.equal(living.stateSnapshot(id).hitCount,1);

  living.dispose();
  resources.dispose();
});

test('combat budgets remain compatible with actor capacity contract',()=>{
  assert.equal(ACTORS.activeCapacity,27);
  assert.equal(ACTORS.updateBudgetPerFrame,12);
  assert.equal(ACTORS.behaviorBudgetPerFrame,6);
  assert.equal(COMBAT.attackStartsPerFrame,1);
  assert.equal(COMBAT.damage,25);
  assert.equal(COMBAT.maxHealth,100);
});
