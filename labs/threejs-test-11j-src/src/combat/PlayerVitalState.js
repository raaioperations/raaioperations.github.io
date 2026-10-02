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
    this.lifeGeneration=0;
    this.respawnState='READY';
    this.respawnAvailableFrame=-1;
    this.lives=1;
    this.downs=0;
    this.respawns=0;
    this.respawnRequests=0;
    this.rejectedRespawnRequests=0;
    this.lastRespawnFrame=-1;
    this.transitionsThisFrame=0;
    this.lifecyclePeakPerFrame=0;
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
      this.downs++;
      this.respawnState='DOWNED';
      this.respawnAvailableFrame=frame+PLAYER_VITALS.respawnAvailabilityFrames;
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

  updateLifecycle(frame){
    this.transitionsThisFrame=0;
    if(this.respawnState==='RESPAWNING'){
      this.health=this.maxHealth;this.downed=false;this.invulnerableUntilFrame=0;this.staggerUntilFrame=0;
      this.respawnState='READY';this.lifeGeneration++;this.lives++;this.respawns++;this.lastRespawnFrame=frame;
      this.transitionsThisFrame=1;
    }else if(this.respawnState==='DOWNED'&&frame>=this.respawnAvailableFrame){
      this.respawnState='RESPAWN_AVAILABLE';
      this.transitionsThisFrame=1;
      this.lifecyclePeakPerFrame=Math.max(this.lifecyclePeakPerFrame,1);
    }
    return this.transitionsThisFrame;
  }

  requestRespawn(frame){
    this.respawnRequests++;
    if(this.respawnState!=='RESPAWN_AVAILABLE'||this.transitionsThisFrame>0){
      this.rejectedRespawnRequests++;
      return Object.freeze({accepted:false,reason:'NOT_AVAILABLE'});
    }
    this.respawnState='RESPAWNING';
    this.transitionsThisFrame=1;
    this.lifecyclePeakPerFrame=Math.max(this.lifecyclePeakPerFrame,1);
    return Object.freeze({accepted:true,generation:this.lifeGeneration,readyFrame:frame+1});
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
      ,lifeGeneration:this.lifeGeneration,respawnState:this.respawnState,lives:this.lives,downs:this.downs,respawns:this.respawns,
      respawnRequests:this.respawnRequests,rejectedRespawnRequests:this.rejectedRespawnRequests,lastRespawnFrame:this.lastRespawnFrame,
      respawnAvailableFrame:this.respawnAvailableFrame,lifecyclePeakPerFrame:this.lifecyclePeakPerFrame
    });
  }
}
