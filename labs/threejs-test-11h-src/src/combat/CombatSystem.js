import * as THREE from 'three';
import {COMBAT,COMBAT_PHASE} from '../config.js';
import {combatTargetInHitRange,selectCombatTarget} from './CombatTargeting.js';

export class CombatSystem{
  constructor({actors,camera,worldRoot,resources,groundHeight}){
    this.actors=actors;
    this.camera=camera;
    this.groundHeight=groundHeight;
    this.forward=new THREE.Vector3(0,0,-1);

    this.phase=COMBAT_PHASE.READY;
    this.phaseStartFrame=0;
    this.attackStartFrame=-1;
    this.lockedTargetId=null;
    this.currentTarget=null;
    this.hitResolved=false;

    this.attackStartsThisFrame=0;
    this.peakAttackStartsPerFrame=0;
    this.totalAttackStarts=0;
    this.totalHits=0;
    this.totalMisses=0;
    this.duplicateHitBlocks=0;
    this.recoveryRejects=0;
    this.noTargetRejects=0;
    this.defeats=0;
    this.lastHitTarget='';
    this.lastDamage=0;

    this.indicatorGeometry=resources.own(new THREE.RingGeometry(
      COMBAT.targetIndicatorRadius*.72,
      COMBAT.targetIndicatorRadius,
      24
    ));
    this.indicatorMaterial=resources.own(new THREE.MeshBasicMaterial({
      color:0xe66a55,
      transparent:true,
      opacity:.88,
      depthWrite:false,
      side:THREE.DoubleSide
    }));
    this.indicator=new THREE.Mesh(this.indicatorGeometry,this.indicatorMaterial);
    this.indicator.name='CombatTargetIndicator';
    this.indicator.rotation.x=-Math.PI/2;
    this.indicator.visible=false;
    worldRoot.add(this.indicator);
  }

  #phaseLength(phase){
    if(phase===COMBAT_PHASE.WINDUP)return COMBAT.windupFrames;
    if(phase===COMBAT_PHASE.ACTIVE)return COMBAT.activeFrames;
    if(phase===COMBAT_PHASE.RECOVERY)return COMBAT.recoveryFrames;
    return 0;
  }

  #setPhase(phase,frame){
    this.phase=phase;
    this.phaseStartFrame=frame;
  }

  #updateTarget(playerPosition){
    this.camera.getWorldDirection(this.forward);
    const selected=selectCombatTarget(this.actors.activeRecords,{
      playerX:playerPosition.x,
      playerZ:playerPosition.z,
      forwardX:this.forward.x,
      forwardZ:this.forward.z
    });
    this.currentTarget=selected;

    const record=selected?.record;
    if(record){
      const y=this.groundHeight(record.x,record.z);
      this.indicator.position.set(record.x,y+.035,record.z);
      this.indicator.visible=true;
    }else{
      this.indicator.visible=false;
    }
    return selected;
  }

  #startAttack(frame){
    if(this.phase!==COMBAT_PHASE.READY){
      this.recoveryRejects++;
      return false;
    }
    if(!this.currentTarget){
      this.noTargetRejects++;
      return false;
    }
    if(this.attackStartsThisFrame>=COMBAT.attackStartsPerFrame)return false;

    this.lockedTargetId=this.currentTarget.id;
    this.attackStartFrame=frame;
    this.hitResolved=false;
    this.attackStartsThisFrame++;
    this.peakAttackStartsPerFrame=Math.max(this.peakAttackStartsPerFrame,this.attackStartsThisFrame);
    this.totalAttackStarts++;
    this.#setPhase(COMBAT_PHASE.WINDUP,frame);
    return true;
  }

  #resolveHit(frame,playerPosition){
    if(this.hitResolved){
      this.duplicateHitBlocks++;
      return false;
    }

    this.hitResolved=true;
    const record=this.actors.store.get(this.lockedTargetId);
    if(!combatTargetInHitRange(record,{playerX:playerPosition.x,playerZ:playerPosition.z})){
      this.totalMisses++;
      return false;
    }

    const before=record.health;
    const result=this.actors.applyDamage(record.id,COMBAT.damage,frame);
    if(!result){
      this.totalMisses++;
      return false;
    }

    this.totalHits++;
    this.lastHitTarget=record.id;
    this.lastDamage=before-record.health;
    if(result.defeatedNow)this.defeats++;
    return true;
  }

  #advanceState(frame,playerPosition){
    if(this.phase===COMBAT_PHASE.READY)return;

    const elapsed=frame-this.phaseStartFrame;

    if(this.phase===COMBAT_PHASE.WINDUP&&elapsed>=this.#phaseLength(COMBAT_PHASE.WINDUP)){
      this.#setPhase(COMBAT_PHASE.ACTIVE,frame);
      this.#resolveHit(frame,playerPosition);
      return;
    }

    if(this.phase===COMBAT_PHASE.ACTIVE){
      this.#resolveHit(frame,playerPosition);
      if(elapsed>=this.#phaseLength(COMBAT_PHASE.ACTIVE)){
        this.#setPhase(COMBAT_PHASE.RECOVERY,frame);
      }
      return;
    }

    if(this.phase===COMBAT_PHASE.RECOVERY&&elapsed>=this.#phaseLength(COMBAT_PHASE.RECOVERY)){
      this.#setPhase(COMBAT_PHASE.READY,frame);
      this.lockedTargetId=null;
      this.hitResolved=false;
    }
  }

  update(frame,playerPosition,input){
    this.attackStartsThisFrame=0;
    this.#updateTarget(playerPosition);
    this.#advanceState(frame.frame,playerPosition);
    if(input?.attack)this.#startAttack(frame.frame);
  }

  snapshot(){
    const locked=this.lockedTargetId?this.actors.store.get(this.lockedTargetId):null;
    return Object.freeze({
      phase:this.phase,
      currentTarget:this.currentTarget?Object.freeze({
        id:this.currentTarget.id,
        distance:this.currentTarget.distance,
        health:this.currentTarget.record.health,
        defeated:this.currentTarget.record.defeated
      }):null,
      lockedTargetId:this.lockedTargetId,
      lockedTargetHealth:locked?.health??null,
      indicatorVisible:this.indicator.visible,
      attackStartsThisFrame:this.attackStartsThisFrame,
      peakAttackStartsPerFrame:this.peakAttackStartsPerFrame,
      attackStartBudget:COMBAT.attackStartsPerFrame,
      totalAttackStarts:this.totalAttackStarts,
      totalHits:this.totalHits,
      totalMisses:this.totalMisses,
      duplicateHitBlocks:this.duplicateHitBlocks,
      recoveryRejects:this.recoveryRejects,
      noTargetRejects:this.noTargetRejects,
      defeats:this.defeats,
      lastHitTarget:this.lastHitTarget,
      lastDamage:this.lastDamage
    });
  }

  dispose(){
    this.indicator.removeFromParent();
    this.currentTarget=null;
    this.lockedTargetId=null;
  }
}
