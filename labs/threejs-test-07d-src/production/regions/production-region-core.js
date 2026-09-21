export const PRODUCTION_REGION_SCHEMA_VERSION=1;

const clone=value=>JSON.parse(JSON.stringify(value));
const finite=(value,label)=>{
  if(!Number.isFinite(value))throw new Error('07C invalid '+label);
  return value;
};

export class ProductionRegionStateStore{
  constructor(){this.snapshots=new Map();}
  save(regionId,snapshot){
    if(!regionId||snapshot?.regionId!==regionId)throw new Error('07C region snapshot mismatch');
    if(snapshot.version!==PRODUCTION_REGION_SCHEMA_VERSION)throw new Error('07C region snapshot version mismatch');
    this.snapshots.set(regionId,clone(snapshot));
    return this.load(regionId);
  }
  load(regionId){
    const snapshot=this.snapshots.get(regionId);
    return snapshot?clone(snapshot):null;
  }
  has(regionId){return this.snapshots.has(regionId);}
}

export class ProductionRegion{
  constructor({
    id,
    pipeline,
    store=new ProductionRegionStateStore(),
    actorBlueprints=[],
    bindActor=async()=>{},
    unbindActor=async()=>{},
    loadRadiusM=24,
    unloadRadiusM=38
  }={}){
    if(!id)throw new Error('07C region id required');
    if(!pipeline)throw new Error('07C production actor pipeline required');
    if(!Array.isArray(actorBlueprints)||actorBlueprints.length===0)throw new Error('07C actor blueprints required');
    if(!(loadRadiusM>0&&unloadRadiusM>loadRadiusM))throw new Error('07C region hysteresis invalid');
    const ids=new Set();
    for(const blueprint of actorBlueprints){
      if(!blueprint?.id||!blueprint?.typeId)throw new Error('07C invalid actor blueprint');
      if(ids.has(blueprint.id))throw new Error('07C duplicate actor blueprint '+blueprint.id);
      ids.add(blueprint.id);
    }

    this.id=id;
    this.pipeline=pipeline;
    this.store=store;
    this.actorBlueprints=clone(actorBlueprints);
    this.bindActor=bindActor;
    this.unbindActor=unbindActor;
    this.loadRadiusM=finite(loadRadiusM,'loadRadiusM');
    this.unloadRadiusM=finite(unloadRadiusM,'unloadRadiusM');

    this.lifecycle='UNLOADED';
    this.operation=null;
    this.loadCount=0;
    this.unloadCount=0;
    this.restoreCount=0;
    this.duplicateCount=0;
    this.lastSerializedAt=0;
    this.lastOffscreenMs=0;
    this.lastRestoreProgressPreserved=false;
    this.lastRestoreIdsStable=false;
    this.lastError=null;
  }

  get isActive(){return this.lifecycle==='ACTIVE';}
  get hasSnapshot(){return this.store.has(this.id);}
  get actorIds(){return this.actorBlueprints.map(actor=>actor.id);}
  get activeActors(){
    return this.actorIds.map(id=>this.pipeline.getActor(id)).filter(Boolean);
  }

  desiredLifecycle(distanceM){
    const distance=finite(distanceM,'distanceM');
    if(this.lifecycle==='ACTIVE')return distance>=this.unloadRadiusM?'UNLOADED':'ACTIVE';
    if(this.lifecycle==='UNLOADED')return distance<=this.loadRadiusM?'ACTIVE':'UNLOADED';
    return this.lifecycle;
  }

  serialize(now=Date.now()){
    finite(now,'serialize now');
    const actors=this.actorIds.map(id=>{
      const actor=this.pipeline.getActor(id);
      if(!actor)throw new Error('07C cannot serialize missing actor '+id);
      return actor.serialize(now);
    });
    return {
      version:PRODUCTION_REGION_SCHEMA_VERSION,
      regionId:this.id,
      serializedAt:now,
      actorIds:[...this.actorIds],
      actors
    };
  }

  async load(now=Date.now()){
    if(this.isActive)return {rehydrated:false,alreadyActive:true,offscreenMs:0};
    if(this.operation)return this.operation;
    this.operation=this._load(now).finally(()=>{this.operation=null;});
    return this.operation;
  }

  async _load(now){
    this.lastError=null;
    const snapshot=this.store.load(this.id);
    this.lifecycle=snapshot?'REHYDRATING':'LOADING';
    const created=[];
    const bound=[];
    const beforeProgress=new Map();
    try{
      if(snapshot){
        if(snapshot.version!==PRODUCTION_REGION_SCHEMA_VERSION||snapshot.regionId!==this.id){
          throw new Error('07C invalid region snapshot');
        }
        if(snapshot.actorIds.join('|')!==this.actorIds.join('|')){
          throw new Error('07C region actor identity mismatch');
        }
        for(const actorSnapshot of snapshot.actors){
          beforeProgress.set(actorSnapshot.actorId,actorSnapshot.kernel?.goals?.progress);
          const actor=this.pipeline.restoreActor(actorSnapshot,now);
          created.push(actor);
        }
      }else{
        for(const blueprint of this.actorBlueprints){
          const actor=this.pipeline.createActor(blueprint);
          created.push(actor);
        }
      }

      for(const actor of created){
        await this.bindActor(actor);
        bound.push(actor);
      }

      this.lifecycle='ACTIVE';
      this.loadCount++;
      if(snapshot){
        this.restoreCount++;
        this.lastOffscreenMs=Math.max(0,now-snapshot.serializedAt);
        this.lastRestoreIdsStable=
          created.length===this.actorIds.length&&
          created.every((actor,index)=>actor.id===this.actorIds[index]);
        this.lastRestoreProgressPreserved=created.every(actor=>{
          const before=beforeProgress.get(actor.id);
          return Number.isFinite(before)&&Math.abs(actor.kernel.goals.progress-before)<1e-12;
        });
      }
      return {
        rehydrated:!!snapshot,
        alreadyActive:false,
        offscreenMs:this.lastOffscreenMs,
        actorIds:created.map(actor=>actor.id)
      };
    }catch(error){
      this.lastError=error;
      for(const actor of bound.slice().reverse()){
        try{await this.unbindActor(actor);}catch{}
      }
      for(const actor of created.slice().reverse()){
        if(actor.bindingId){
          this.duplicateCount++;
          continue;
        }
        this.pipeline.destroyActor(actor.id);
      }
      this.lifecycle='UNLOADED';
      throw error;
    }
  }

  async unload(now=Date.now()){
    if(!this.isActive)return null;
    if(this.operation)return this.operation;
    this.operation=this._unload(now).finally(()=>{this.operation=null;});
    return this.operation;
  }

  async _unload(now){
    this.lastError=null;
    this.lifecycle='SERIALIZING';
    const snapshot=this.serialize(now);
    this.store.save(this.id,snapshot);
    this.lastSerializedAt=now;
    this.lifecycle='UNLOADING';
    try{
      for(const id of this.actorIds){
        const actor=this.pipeline.getActor(id);
        if(!actor)throw new Error('07C missing actor during unload '+id);
        await this.unbindActor(actor);
      }
      for(const id of this.actorIds){
        const actor=this.pipeline.getActor(id);
        if(!actor)throw new Error('07C actor disappeared before destroy '+id);
        if(actor.bindingId){
          this.duplicateCount++;
          throw new Error('07C actor still bound during destroy '+id);
        }
        this.pipeline.destroyActor(id);
      }
      this.lifecycle='UNLOADED';
      this.unloadCount++;
      return clone(snapshot);
    }catch(error){
      this.lastError=error;
      throw error;
    }
  }

  update({dtMs=0,now=Date.now(),foodProgressPerSecond=.008}={}){
    if(!this.isActive)return 0;
    const dt=Math.max(0,finite(dtMs,'dtMs'));
    const delta=(dt/1000)*Math.max(0,finite(foodProgressPerSecond,'foodProgressPerSecond'));
    let updated=0;
    for(const actor of this.activeActors){
      actor.kernel.update({
        now,
        foodValid:true,
        foodEventAt:now,
        foodProgressDelta:delta
      });
      updated++;
    }
    return updated;
  }
}
