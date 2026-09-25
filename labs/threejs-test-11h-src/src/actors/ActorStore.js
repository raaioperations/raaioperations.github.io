import {ACTORS,BEHAVIOR,WORLD} from '../config.js';
import {chunkCenter,chunkSeed,heightAt,mulberry32} from '../world/Terrain.js';

export function actorChunkKey(cx,cz){return cx+','+cz;}

export class ActorStore{
  constructor({perChunk=ACTORS.perChunk,chunkLimit=ACTORS.storeChunkLimit}={}){
    this.perChunk=perChunk;
    this.chunkLimit=chunkLimit;
    this.records=new Map();
    this.chunkIndex=new Map();
    this.chunkTouch=new Map();
    this.createdEntities=0;
    this.createdChunks=0;
    this.evictedChunks=0;
    this.evictedEntities=0;
  }

  ensureChunk(cx,cz,frame=0){
    const key=actorChunkKey(cx,cz);
    if(this.chunkIndex.has(key)){
      this.chunkTouch.set(key,frame);
      return this.chunkIndex.get(key);
    }

    const rng=mulberry32((chunkSeed(cx,cz)^0xa511e9b3)>>>0);
    const ids=[];
    const centerX=chunkCenter(cx),centerZ=chunkCenter(cz);
    const half=WORLD.chunkSize*.34;

    for(let i=0;i<this.perChunk;i++){
      let x=centerX,z=centerZ;
      for(let attempt=0;attempt<40;attempt++){
        const candidateX=centerX+(rng()*2-1)*half;
        const candidateZ=centerZ+(rng()*2-1)*half;
        const lakeDist=Math.hypot(candidateX-WORLD.waterCenterX,candidateZ-WORLD.waterCenterZ);
        if(lakeDist>WORLD.waterRadius+1.5){x=candidateX;z=candidateZ;break;}
      }

      const id=`actor:${cx}:${cz}:${i}`;
      if(this.records.has(id))throw new Error('Duplicate actor id '+id);

      const record={
        id,cx,cz,index:i,
        homeX:centerX,homeZ:centerZ,
        x,z,
        heading:rng()*Math.PI*2,
        desiredHeading:null,
        speed:ACTORS.minSpeed+rng()*(ACTORS.maxSpeed-ACTORS.minSpeed),
        phase:rng()*Math.PI*2,
        stagger:i,
        behaviorStagger:(i+Math.abs(cx*7+cz*11))%ACTORS.farBehaviorInterval,
        ticks:0,
        lod:'FAR',
        lastActiveFrame:frame,
        y:heightAt(x,z),

        behavior:BEHAVIOR.WANDER,
        behaviorUntilFrame:0,
        awareness:0,
        interactionPartner:null,
        interactionCooldownUntilFrame:0,
        behaviorTransitions:0,
        playerAwarenessEvents:0,
        avoidanceEvents:0,
        socialEvents:0,
        playerInteractionCount:0,
        lastPlayerInteractionFrame:-1,
        health:100,
        maxHealth:100,
        hitCount:0,
        lastHitFrame:-1,
        staggerUntilFrame:0,
        defeated:false
      };

      this.records.set(id,record);
      ids.push(id);
      this.createdEntities++;
    }

    const frozenIds=Object.freeze(ids);
    this.chunkIndex.set(key,frozenIds);
    this.chunkTouch.set(key,frame);
    this.createdChunks++;
    return frozenIds;
  }

  get(id){return this.records.get(id)||null;}
  getChunk(cx,cz){return this.chunkIndex.get(actorChunkKey(cx,cz))||null;}

  touchChunk(cx,cz,frame=0){
    const key=actorChunkKey(cx,cz);
    if(this.chunkIndex.has(key))this.chunkTouch.set(key,frame);
  }

  prune(activeKeys){
    let removed=0;
    if(this.chunkIndex.size<=this.chunkLimit)return removed;

    const candidates=[...this.chunkIndex.keys()]
      .filter(key=>!activeKeys.has(key))
      .sort((a,b)=>(this.chunkTouch.get(a)||0)-(this.chunkTouch.get(b)||0));

    for(const key of candidates){
      if(this.chunkIndex.size<=this.chunkLimit)break;
      const ids=this.chunkIndex.get(key)||[];
      for(const id of ids){
        if(this.records.delete(id)){this.evictedEntities++;removed++;}
      }
      this.chunkIndex.delete(key);
      this.chunkTouch.delete(key);
      this.evictedChunks++;
    }
    return removed;
  }

  snapshot(){
    return Object.freeze({
      entities:this.records.size,
      chunks:this.chunkIndex.size,
      createdEntities:this.createdEntities,
      createdChunks:this.createdChunks,
      evictedEntities:this.evictedEntities,
      evictedChunks:this.evictedChunks,
      chunkLimit:this.chunkLimit
    });
  }
}
