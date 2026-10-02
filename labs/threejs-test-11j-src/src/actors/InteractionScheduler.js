import {ACTORS,BEHAVIOR} from '../config.js';

export class InteractionScheduler{
  constructor(limit=ACTORS.interactionBudgetPerFrame){
    this.limit=limit;
    this.frame=0;
    this.pairs=new Set();
    this.createdThisFrame=0;
    this.peakCreatedPerFrame=0;
    this.totalCreated=0;
    this.duplicateSkips=0;
    this.cooldownSkips=0;
  }

  beginFrame(frame){
    this.frame=frame;
    this.pairs.clear();
    this.createdThisFrame=0;
  }

  #pairKey(a,b){return a.id<b.id?a.id+'|'+b.id:b.id+'|'+a.id;}

  tryStart(a,b,frame=this.frame){
    if(!a||!b||a===b)return false;
    if(this.createdThisFrame>=this.limit)return false;

    const key=this.#pairKey(a,b);
    if(this.pairs.has(key)){this.duplicateSkips++;return false;}

    if(frame<a.interactionCooldownUntilFrame||frame<b.interactionCooldownUntilFrame){
      this.cooldownSkips++;
      return false;
    }

    this.pairs.add(key);
    this.createdThisFrame++;
    this.peakCreatedPerFrame=Math.max(this.peakCreatedPerFrame,this.createdThisFrame);
    this.totalCreated++;

    const until=frame+ACTORS.socialDurationFrames;
    const cooldown=until+ACTORS.interactionCooldownFrames;

    for(const actor of [a,b]){
      if(actor.behavior!==BEHAVIOR.SOCIAL)actor.behaviorTransitions++;
      actor.behavior=BEHAVIOR.SOCIAL;
      actor.behaviorUntilFrame=until;
      actor.interactionPartner=actor===a?b.id:a.id;
      actor.interactionCooldownUntilFrame=cooldown;
      actor.socialEvents++;
      actor.desiredHeading=Math.atan2(
        (actor===a?b.x:a.x)-actor.x,
        (actor===a?b.z:a.z)-actor.z
      );
    }

    return true;
  }

  snapshot(){
    return Object.freeze({
      limit:this.limit,
      createdThisFrame:this.createdThisFrame,
      peakCreatedPerFrame:this.peakCreatedPerFrame,
      totalCreated:this.totalCreated,
      duplicateSkips:this.duplicateSkips,
      cooldownSkips:this.cooldownSkips
    });
  }
}
