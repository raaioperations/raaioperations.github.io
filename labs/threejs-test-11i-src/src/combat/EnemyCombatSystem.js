import {ENEMY_COMBAT,ENEMY_COMBAT_PHASE,PLAYER_VITALS} from '../config.js';

function distanceToPlayer(record,playerPosition){
  return Math.hypot(record.x-playerPosition.x,record.z-playerPosition.z);
}

export class EnemyCombatSystem{
  constructor({actors,playerVitals}){
    this.actors=actors;
    this.playerVitals=playerVitals;

    this.evaluationsThisFrame=0;
    this.peakEvaluationsPerFrame=0;
    this.totalEvaluations=0;
    this.attackStartsThisFrame=0;
    this.peakAttackStartsPerFrame=0;
    this.totalAttackStarts=0;
    this.totalHits=0;
    this.totalMisses=0;
    this.invulnerabilityBlocks=0;
    this.playerDowns=0;
    this.telegraphs=0;
    this.strikes=0;
    this.recoveries=0;
    this.lastAttackerId='';
    this.lastDamage=0;
    this.concurrentAttackersPeak=0;
  }

  #setPhase(record,phase,frame){
    if(record.enemyCombatPhase===phase)return;
    record.enemyCombatPhase=phase;
    record.enemyPhaseStartFrame=frame;
    if(phase===ENEMY_COMBAT_PHASE.TELEGRAPH)this.telegraphs++;
    if(phase===ENEMY_COMBAT_PHASE.STRIKE)this.strikes++;
    if(phase===ENEMY_COMBAT_PHASE.RECOVERY)this.recoveries++;
    this.actors.refreshActorVisual(record.id);
  }

  #countConcurrent(records){
    return records.filter(r=>
      r.enemyCombatPhase===ENEMY_COMBAT_PHASE.TELEGRAPH||
      r.enemyCombatPhase===ENEMY_COMBAT_PHASE.STRIKE
    ).length;
  }

  #startAttack(record,frame,records){
    if(this.attackStartsThisFrame>=ENEMY_COMBAT.attackStartsPerFrame)return false;
    if(this.#countConcurrent(records)>=ENEMY_COMBAT.maxConcurrentAttackers)return false;
    this.attackStartsThisFrame++;
    this.totalAttackStarts++;
    this.peakAttackStartsPerFrame=Math.max(this.peakAttackStartsPerFrame,this.attackStartsThisFrame);
    record.enemyAttackCount++;
    record.enemyStrikeResolved=false;
    this.#setPhase(record,ENEMY_COMBAT_PHASE.TELEGRAPH,frame);
    return true;
  }

  #resolveStrike(record,frame,playerPosition){
    if(record.enemyStrikeResolved)return false;
    record.enemyStrikeResolved=true;

    if(distanceToPlayer(record,playerPosition)>ENEMY_COMBAT.attackRange){
      this.totalMisses++;
      return false;
    }

    const result=this.playerVitals.applyDamage(PLAYER_VITALS.enemyDamage,frame);
    this.lastAttackerId=record.id;

    if(!result.applied){
      if(result.reason==='INVULNERABLE')this.invulnerabilityBlocks++;
      return false;
    }

    record.enemyHitCount++;
    record.enemyLastHitFrame=frame;
    this.totalHits++;
    this.lastDamage=result.damage;
    if(result.downed)this.playerDowns++;
    return true;
  }

  #advance(record,frame,playerPosition,records){
    const elapsed=frame-record.enemyPhaseStartFrame;

    if(record.enemyCombatPhase===ENEMY_COMBAT_PHASE.READY){
      if(
        record.hostileToPlayer&&
        frame<=record.threatUntilFrame&&
        frame>=record.staggerUntilFrame&&
        !this.playerVitals.downed&&
        distanceToPlayer(record,playerPosition)<=ENEMY_COMBAT.attackRange
      )this.#startAttack(record,frame,records);
      return;
    }

    if(record.enemyCombatPhase===ENEMY_COMBAT_PHASE.TELEGRAPH){
      record.desiredHeading=Math.atan2(playerPosition.x-record.x,playerPosition.z-record.z);
      if(elapsed>=ENEMY_COMBAT.telegraphFrames){
        this.#setPhase(record,ENEMY_COMBAT_PHASE.STRIKE,frame);
        this.#resolveStrike(record,frame,playerPosition);
      }
      return;
    }

    if(record.enemyCombatPhase===ENEMY_COMBAT_PHASE.STRIKE){
      this.#resolveStrike(record,frame,playerPosition);
      if(elapsed>=ENEMY_COMBAT.strikeFrames)this.#setPhase(record,ENEMY_COMBAT_PHASE.RECOVERY,frame);
      return;
    }

    if(record.enemyCombatPhase===ENEMY_COMBAT_PHASE.RECOVERY){
      if(elapsed>=ENEMY_COMBAT.recoveryFrames){
        record.enemyStrikeResolved=false;
        this.#setPhase(record,ENEMY_COMBAT_PHASE.READY,frame);
      }
    }
  }

  update(frame,playerPosition){
    this.evaluationsThisFrame=0;
    this.attackStartsThisFrame=0;

    const candidates=this.actors.activeRecords
      .filter(r=>r.hostileToPlayer&&!r.defeated)
      .sort((a,b)=>
        distanceToPlayer(a,playerPosition)-distanceToPlayer(b,playerPosition)||
        a.id.localeCompare(b.id)
      );

    for(const record of candidates){
      if(this.evaluationsThisFrame>=ENEMY_COMBAT.evaluationBudgetPerFrame)break;

      if(frame.frame>record.threatUntilFrame&&record.enemyCombatPhase===ENEMY_COMBAT_PHASE.READY){
        record.hostileToPlayer=false;
        record.threatLevel=0;
        this.actors.refreshActorVisual(record.id);
        continue;
      }

      this.#advance(record,frame.frame,playerPosition,candidates);
      this.evaluationsThisFrame++;
      this.totalEvaluations++;
    }

    const concurrent=this.#countConcurrent(candidates);
    this.concurrentAttackersPeak=Math.max(this.concurrentAttackersPeak,concurrent);
    this.peakEvaluationsPerFrame=Math.max(this.peakEvaluationsPerFrame,this.evaluationsThisFrame);
  }

  snapshot(frame=0){
    const activeHostiles=this.actors.activeRecords.filter(r=>r.hostileToPlayer&&!r.defeated);
    const phases={READY:0,TELEGRAPH:0,STRIKE:0,RECOVERY:0};
    for(const r of activeHostiles)phases[r.enemyCombatPhase]=(phases[r.enemyCombatPhase]||0)+1;

    return Object.freeze({
      activeHostiles:activeHostiles.length,
      phases:Object.freeze(phases),
      evaluationsThisFrame:this.evaluationsThisFrame,
      peakEvaluationsPerFrame:this.peakEvaluationsPerFrame,
      evaluationBudget:ENEMY_COMBAT.evaluationBudgetPerFrame,
      totalEvaluations:this.totalEvaluations,
      attackStartsThisFrame:this.attackStartsThisFrame,
      peakAttackStartsPerFrame:this.peakAttackStartsPerFrame,
      attackStartBudget:ENEMY_COMBAT.attackStartsPerFrame,
      totalAttackStarts:this.totalAttackStarts,
      totalHits:this.totalHits,
      totalMisses:this.totalMisses,
      invulnerabilityBlocks:this.invulnerabilityBlocks,
      playerDowns:this.playerDowns,
      telegraphs:this.telegraphs,
      strikes:this.strikes,
      recoveries:this.recoveries,
      concurrentAttackersPeak:this.concurrentAttackersPeak,
      concurrentAttackersLimit:ENEMY_COMBAT.maxConcurrentAttackers,
      lastAttackerId:this.lastAttackerId,
      lastDamage:this.lastDamage,
      player:this.playerVitals.snapshot(frame)
    });
  }
}
