import {ACTORS,BEHAVIOR} from '../config.js';
import {ActorNeighborhoodIndex} from './ActorNeighborhoodIndex.js';
import {InteractionScheduler} from './InteractionScheduler.js';

const LOD_ORDER=Object.freeze(['NEAR','MID','FAR']);

function behaviorInterval(lod){
  return lod==='NEAR'
    ?ACTORS.nearBehaviorInterval
    :lod==='MID'
      ?ACTORS.midBehaviorInterval
      :ACTORS.farBehaviorInterval;
}

function shortestHeadingDelta(from,to){
  let delta=(to-from+Math.PI)%(Math.PI*2)-Math.PI;
  if(delta<-Math.PI)delta+=Math.PI*2;
  return delta;
}

export class BehaviorSystem{
  constructor(){
    this.neighborhood=new ActorNeighborhoodIndex(ACTORS.neighborhoodCellSize);
    this.interactions=new InteractionScheduler();

    this.evaluationsThisFrame=0;
    this.peakEvaluationsPerFrame=0;
    this.totalEvaluations=0;
    this.evaluationsByLod={NEAR:0,MID:0,FAR:0};

    this.playerAwarenessTransitions=0;
    this.avoidanceTransitions=0;
    this.wanderTransitions=0;
    this.socialTransitions=0;
    this.worldObstacleAvoidanceEvents=0;
    this.neighborAvoidanceEvents=0;
  }

  rebuild(activeRecords){this.neighborhood.rebuild(activeRecords);}

  #transition(record,next,frame,duration){
    if(record.behavior!==next){
      record.behaviorTransitions++;
      if(next===BEHAVIOR.OBSERVE_PLAYER){record.playerAwarenessEvents++;this.playerAwarenessTransitions++;}
      if(next===BEHAVIOR.AVOID){record.avoidanceEvents++;this.avoidanceTransitions++;}
      if(next===BEHAVIOR.WANDER)this.wanderTransitions++;
      if(next===BEHAVIOR.SOCIAL)this.socialTransitions++;
    }
    record.behavior=next;
    record.behaviorUntilFrame=frame+duration;
  }

  #nearestNeighbor(record){
    const candidates=this.neighborhood.queryRadius(record.x,record.z,ACTORS.perceptionRadius);
    let best=null,bestD2=Infinity;
    for(const other of candidates){
      if(other.id===record.id)continue;
      const dx=other.x-record.x,dz=other.z-record.z;
      const d2=dx*dx+dz*dz;
      if(d2<bestD2){bestD2=d2;best=other;}
    }
    return best?{record:best,distance:Math.sqrt(bestD2)}:null;
  }

  #nearestObstacle(record,worldSpatialIndex){
    if(!worldSpatialIndex)return null;
    const r=ACTORS.obstacleAvoidDistance+1.0;
    const candidates=worldSpatialIndex.queryAABB(record.x-r,record.z-r,record.x+r,record.z+r);
    let best=null,bestClearance=Infinity;
    for(const obstacle of candidates){
      const dx=record.x-obstacle.x,dz=record.z-obstacle.z;
      const distance=Math.hypot(dx,dz);
      const clearance=distance-(obstacle.r||0);
      if(clearance<bestClearance){bestClearance=clearance;best=obstacle;}
    }
    return best?{record:best,clearance:bestClearance}:null;
  }

  evaluateRecord(record,frame,playerPosition,worldSpatialIndex){
    if(record.defeated){record.desiredHeading=null;return;}
    if(frame<record.staggerUntilFrame){record.desiredHeading=null;return;}
    if(
      record.lastPlayerInteractionFrame>=0&&
      frame<record.lastPlayerInteractionFrame+ACTORS.playerInteractionHoldFrames
    ){
      const dx=playerPosition.x-record.x,dz=playerPosition.z-record.z;
      record.behavior=BEHAVIOR.OBSERVE_PLAYER;
      record.behaviorUntilFrame=record.lastPlayerInteractionFrame+ACTORS.playerInteractionHoldFrames;
      record.awareness=1;
      record.desiredHeading=Math.atan2(dx,dz);
      return;
    }
    if(record.behavior===BEHAVIOR.SOCIAL&&frame<record.behaviorUntilFrame){
      const partner=this.neighborhood.records.get(record.interactionPartner);
      if(partner){
        record.desiredHeading=Math.atan2(partner.x-record.x,partner.z-record.z);
        return;
      }
    }else if(record.behavior===BEHAVIOR.SOCIAL){
      record.interactionPartner=null;
    }

    const neighbor=this.#nearestNeighbor(record);
    const obstacle=this.#nearestObstacle(record,worldSpatialIndex);

    if(neighbor&&neighbor.distance<ACTORS.avoidRadius){
      const dx=record.x-neighbor.record.x,dz=record.z-neighbor.record.z;
      record.desiredHeading=Math.atan2(dx,dz);
      this.#transition(record,BEHAVIOR.AVOID,frame,ACTORS.avoidDurationFrames);
      this.neighborAvoidanceEvents++;
      return;
    }

    if(obstacle&&obstacle.clearance<ACTORS.obstacleAvoidDistance){
      const dx=record.x-obstacle.record.x,dz=record.z-obstacle.record.z;
      record.desiredHeading=Math.atan2(dx,dz);
      this.#transition(record,BEHAVIOR.AVOID,frame,ACTORS.avoidDurationFrames);
      this.worldObstacleAvoidanceEvents++;
      return;
    }

    const pdx=playerPosition.x-record.x,pdz=playerPosition.z-record.z;
    const playerDistance=Math.hypot(pdx,pdz);

    if(record.lod!=='FAR'&&playerDistance<ACTORS.playerAwarenessRadius){
      record.awareness=Math.max(record.awareness,.8);
      record.desiredHeading=Math.atan2(pdx,pdz);
      this.#transition(record,BEHAVIOR.OBSERVE_PLAYER,frame,ACTORS.observeDurationFrames);
      return;
    }

    if(neighbor&&neighbor.distance<ACTORS.socialRadius){
      if(this.interactions.tryStart(record,neighbor.record,frame)){
        this.socialTransitions++;
        return;
      }
    }

    record.awareness=Math.max(0,record.awareness-.12);
    record.desiredHeading=null;
    this.#transition(record,BEHAVIOR.WANDER,frame,ACTORS.nearBehaviorInterval);
  }

  update(frame,{records,playerPosition,worldSpatialIndex}){
    this.evaluationsThisFrame=0;
    this.interactions.beginFrame(frame.frame);
    this.rebuild(records);

    for(const lod of LOD_ORDER){
      const interval=behaviorInterval(lod);
      for(const record of records){
        if(this.evaluationsThisFrame>=ACTORS.behaviorBudgetPerFrame)break;
        if(record.lod!==lod)continue;
        if(((frame.frame+record.behaviorStagger)%interval)!==0)continue;

        this.evaluateRecord(record,frame.frame,playerPosition,worldSpatialIndex);
        this.evaluationsThisFrame++;
        this.totalEvaluations++;
        this.evaluationsByLod[lod]++;
      }
      if(this.evaluationsThisFrame>=ACTORS.behaviorBudgetPerFrame)break;
    }

    this.peakEvaluationsPerFrame=Math.max(this.peakEvaluationsPerFrame,this.evaluationsThisFrame);
  }

  steeringHeading(record,dt){
    if(record.desiredHeading===null||record.desiredHeading===undefined)return record.heading;
    const turnRate=record.behavior===BEHAVIOR.AVOID?5.2:record.behavior===BEHAVIOR.OBSERVE_PLAYER?3.0:2.2;
    const delta=shortestHeadingDelta(record.heading,record.desiredHeading);
    return record.heading+delta*Math.min(1,turnRate*dt);
  }

  speedScale(record){
    if(record.behavior===BEHAVIOR.SOCIAL)return .06;
    if(record.behavior===BEHAVIOR.OBSERVE_PLAYER)return .24;
    if(record.behavior===BEHAVIOR.AVOID)return 1.12;
    return 1;
  }

  snapshot(activeRecords){
    const states={WANDER:0,OBSERVE_PLAYER:0,AVOID:0,SOCIAL:0};
    const activeByLod={NEAR:0,MID:0,FAR:0};
    for(const record of activeRecords){
      states[record.behavior]=(states[record.behavior]||0)+1;
      activeByLod[record.lod]=(activeByLod[record.lod]||0)+1;
    }
    const averageEvaluationsByLod={
      NEAR:activeByLod.NEAR?this.evaluationsByLod.NEAR/activeByLod.NEAR:0,
      MID:activeByLod.MID?this.evaluationsByLod.MID/activeByLod.MID:0,
      FAR:activeByLod.FAR?this.evaluationsByLod.FAR/activeByLod.FAR:0
    };

    return Object.freeze({
      evaluationsThisFrame:this.evaluationsThisFrame,
      peakEvaluationsPerFrame:this.peakEvaluationsPerFrame,
      evaluationBudget:ACTORS.behaviorBudgetPerFrame,
      totalEvaluations:this.totalEvaluations,
      evaluationsByLod:Object.freeze({...this.evaluationsByLod}),
      averageEvaluationsByLod:Object.freeze(averageEvaluationsByLod),
      playerAwarenessTransitions:this.playerAwarenessTransitions,
      avoidanceTransitions:this.avoidanceTransitions,
      wanderTransitions:this.wanderTransitions,
      socialTransitions:this.socialTransitions,
      worldObstacleAvoidanceEvents:this.worldObstacleAvoidanceEvents,
      neighborAvoidanceEvents:this.neighborAvoidanceEvents,
      states:Object.freeze(states),
      neighborhood:this.neighborhood.snapshot(),
      interactions:this.interactions.snapshot()
    });
  }
}
