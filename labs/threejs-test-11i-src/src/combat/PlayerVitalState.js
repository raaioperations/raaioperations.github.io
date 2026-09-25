import {PLAYER_VITALS} from '../config.js';

export class PlayerVitalState{
  constructor(){
    this.health=PLAYER_VITALS.maxHealth;
    this.maxHealth=PLAYER_VITALS.maxHealth;
    this.hitCount=0;
    this.damageEvents=0;
    this.damageBlockedByInvulnerability=0;
    this.lastDamage=0;
    this.lastHitFrame=-1;
    this.invulnerableUntilFrame=0;
    this.staggerUntilFrame=0;
    this.downed=false;
    this.downedFrame=-1;
  }

  applyDamage(amount,frame){
    if(this.downed)return Object.freeze({applied:false,reason:'DOWNED',health:this.health});
    if(frame<this.invulnerableUntilFrame){
      this.damageBlockedByInvulnerability++;
      return Object.freeze({applied:false,reason:'INVULNERABLE',health:this.health});
    }

    const damage=Math.max(0,Math.min(this.health,amount));
    if(damage<=0)return Object.freeze({applied:false,reason:'ZERO',health:this.health});

    this.health=Math.max(0,this.health-damage);
    this.hitCount++;
    this.damageEvents++;
    this.lastDamage=damage;
    this.lastHitFrame=frame;
    this.invulnerableUntilFrame=frame+PLAYER_VITALS.invulnerabilityFrames;
    this.staggerUntilFrame=frame+PLAYER_VITALS.staggerFrames;

    if(this.health<=0){
      this.downed=true;
      this.downedFrame=frame;
    }

    return Object.freeze({
      applied:true,
      damage,
      health:this.health,
      hitCount:this.hitCount,
      downed:this.downed,
      invulnerableUntilFrame:this.invulnerableUntilFrame,
      staggerUntilFrame:this.staggerUntilFrame
    });
  }

  isInvulnerable(frame){return !this.downed&&frame<this.invulnerableUntilFrame;}
  isStaggered(frame){return !this.downed&&frame<this.staggerUntilFrame;}
  isControlLocked(frame){return this.downed||this.isStaggered(frame);}

  status(frame){
    if(this.downed)return 'DOWNED';
    if(this.isStaggered(frame))return 'STAGGER';
    if(this.isInvulnerable(frame))return 'INVULNERABLE';
    return 'READY';
  }

  snapshot(frame=0){
    return Object.freeze({
      health:this.health,
      maxHealth:this.maxHealth,
      hitCount:this.hitCount,
      damageEvents:this.damageEvents,
      damageBlockedByInvulnerability:this.damageBlockedByInvulnerability,
      lastDamage:this.lastDamage,
      lastHitFrame:this.lastHitFrame,
      invulnerableUntilFrame:this.invulnerableUntilFrame,
      staggerUntilFrame:this.staggerUntilFrame,
      downed:this.downed,
      downedFrame:this.downedFrame,
      status:this.status(frame),
      controlLocked:this.isControlLocked(frame)
    });
  }
}
