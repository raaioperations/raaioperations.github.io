import * as THREE from 'three';
import {ACTORS,BEHAVIOR,INTERACTION} from '../config.js';
import {selectInteractionTarget} from './InteractionArbiter.js';

export class GameplayInteractionSystem{
  constructor({actors,worldInteractables,camera,prompt,coarsePointer=false}){
    this.actors=actors;
    this.worldInteractables=worldInteractables;
    this.camera=camera;
    this.prompt=prompt;
    this.coarsePointer=coarsePointer;
    this.forward=new THREE.Vector3(0,0,-1);
    this.currentTarget=null;

    this.actionsThisFrame=0;
    this.peakActionsPerFrame=0;
    this.totalActions=0;
    this.pickupActions=0;
    this.useActions=0;
    this.npcInteractions=0;
    this.noTargetActions=0;
    this.targetChanges=0;
    this.candidatesThisFrame=0;
    this.peakCandidates=0;
    this.lastAction='';
  }

  #candidates(playerPosition){
    const out=this.worldInteractables.candidates();
    const nearby=this.actors.behavior.neighborhood.queryRadius(
      playerPosition.x,playerPosition.z,INTERACTION.maxDistance
    );
    for(const record of nearby){
      out.push({
        id:record.id,type:'NPC',label:'Traveler',prompt:'GREET',
        x:record.x,z:record.z,y:record.y+1.0,record
      });
    }
    this.candidatesThisFrame=out.length;
    this.peakCandidates=Math.max(this.peakCandidates,out.length);
    return out;
  }

  evaluateTarget(playerPosition){
    this.camera.getWorldDirection(this.forward);
    const candidates=this.#candidates(playerPosition);
    const next=selectInteractionTarget(candidates,{
      playerX:playerPosition.x,
      playerZ:playerPosition.z,
      forwardX:this.forward.x,
      forwardZ:this.forward.z
    });
    if((next?.id||null)!==(this.currentTarget?.id||null))this.targetChanges++;
    this.currentTarget=next;
    if(next)this.prompt.show(next,this.coarsePointer);
    else this.prompt.hide();
    return next;
  }

  executeCurrent(frame,playerPosition){
    if(this.actionsThisFrame>=INTERACTION.actionBudgetPerFrame)return false;
    const target=this.currentTarget;
    if(!target){this.noTargetActions++;return false;}

    let executed=false;
    if(target.type==='PICKUP'||target.type==='USE'){
      executed=this.worldInteractables.execute(target.id);
      if(executed&&target.type==='PICKUP')this.pickupActions++;
      if(executed&&target.type==='USE')this.useActions++;
    }else if(target.type==='NPC'&&target.record){
      const actor=target.record;
      actor.playerInteractionCount=(actor.playerInteractionCount||0)+1;
      actor.lastPlayerInteractionFrame=frame.frame;
      actor.behavior=BEHAVIOR.OBSERVE_PLAYER;
      actor.behaviorUntilFrame=frame.frame+ACTORS.playerInteractionHoldFrames;
      actor.awareness=1;
      actor.interactionPartner=null;
      actor.desiredHeading=Math.atan2(playerPosition.x-actor.x,playerPosition.z-actor.z);
      actor.playerAwarenessEvents++;
      actor.behaviorTransitions++;
      this.actors.refreshActorVisual(actor.id);
      this.npcInteractions++;
      executed=true;
    }

    if(executed){
      this.actionsThisFrame++;
      this.totalActions++;
      this.peakActionsPerFrame=Math.max(this.peakActionsPerFrame,this.actionsThisFrame);
      this.lastAction=target.type+':'+target.id;
      this.evaluateTarget(playerPosition);
    }
    return executed;
  }

  update(frame,playerPosition,input){
    this.actionsThisFrame=0;
    this.evaluateTarget(playerPosition);
    if(input?.interact)this.executeCurrent(frame,playerPosition);
  }

  snapshot(){
    return Object.freeze({
      currentTarget:this.currentTarget?Object.freeze({
        id:this.currentTarget.id,type:this.currentTarget.type,label:this.currentTarget.label,
        distance:this.currentTarget.distance
      }):null,
      candidatesThisFrame:this.candidatesThisFrame,
      peakCandidates:this.peakCandidates,
      actionsThisFrame:this.actionsThisFrame,
      peakActionsPerFrame:this.peakActionsPerFrame,
      actionBudget:INTERACTION.actionBudgetPerFrame,
      totalActions:this.totalActions,
      pickupActions:this.pickupActions,
      useActions:this.useActions,
      npcInteractions:this.npcInteractions,
      noTargetActions:this.noTargetActions,
      targetChanges:this.targetChanges,
      lastAction:this.lastAction,
      prompt:this.prompt.snapshot(),
      world:this.worldInteractables.snapshot()
    });
  }

  dispose(){
    this.prompt.hide();
    this.currentTarget=null;
  }
}
