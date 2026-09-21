export const STREAM_CELL_SCHEMA_VERSION=1;

export const DEFAULT_STREAM_CONFIG=Object.freeze({
  loadRadiusM:14,
  unloadRadiusM:22,
  disturbedMs:2300,
  settlingMs:2800,
  actorPreGoalTravelMs:6200,
  actorProgressCap:0.34
});

const clone=value=>JSON.parse(JSON.stringify(value));
const finite=(value,label)=>{
  if(!Number.isFinite(value))throw new Error('06H invalid '+label);
  return value;
};

export class StreamStateStore{
  constructor(){this.snapshots=new Map();}
  save(cellId,snapshot){
    if(!cellId||snapshot?.cellId!==cellId)throw new Error('06H snapshot cell mismatch');
    if(snapshot.version!==STREAM_CELL_SCHEMA_VERSION)throw new Error('06H snapshot version mismatch');
    this.snapshots.set(cellId,clone(snapshot));
    return this.load(cellId);
  }
  load(cellId){
    const value=this.snapshots.get(cellId);
    return value?clone(value):null;
  }
  has(cellId){return this.snapshots.has(cellId);}
}

export class StreamCell{
  constructor({
    id,
    store,
    actorStart,
    actorDestination,
    config={},
    initialEventId=0,
    attachVisual=()=>null,
    detachVisual=()=>{},
    updateVisual=()=>{}
  }){
    if(!id)throw new Error('06H StreamCell id required');
    if(!store)throw new Error('06H StreamCell store required');
    this.id=id;
    this.store=store;
    this.config={...DEFAULT_STREAM_CONFIG,...config};
    if(this.config.loadRadiusM>=this.config.unloadRadiusM)throw new Error('06H hysteresis invalid');
    this.actorStart={x:finite(actorStart.x,'actorStart.x'),z:finite(actorStart.z,'actorStart.z')};
    this.actorDestination={x:finite(actorDestination.x,'actorDestination.x'),z:finite(actorDestination.z,'actorDestination.z')};
    this.attachVisual=attachVisual;
    this.detachVisual=detachVisual;
    this.updateVisual=updateVisual;
    this.lifecycle='UNLOADED';
    this.visualHandle=null;
    this.snapshotStatus='NONE';
    this.lastOffscreenMs=0;
    this.dormantSince=0;
    this.loadCount=0;
    this.unloadCount=0;
    this.restoreCount=0;
    this.updateCount=0;
    this.memoryActivationCount=0;
    this.duplicateCount=0;
    this.lastTransition='BOOT';
    this.state={
      memory:{
        state:'CALM',
        startedAt:0,
        expiresAt:0,
        eventId:Number.isFinite(initialEventId)?initialEventId:0
      },
      actor:{
        goal:'FOOD',
        suspendedGoal:'NONE',
        behaviorState:'SEEKING_FOOD',
        progress:0,
        position:{...this.actorStart},
        destination:{...this.actorDestination}
      }
    };
  }

  get isActive(){return this.lifecycle==='ACTIVE';}
  get hasSnapshot(){return this.store.has(this.id);}

  load(nowWall=Date.now()){
    if(this.isActive)return {rehydrated:false,alreadyActive:true};
    const snapshot=this.store.load(this.id);
    if(snapshot)return this.rehydrate(snapshot,nowWall);
    this.lifecycle='REHYDRATING';
    this._attach();
    this.lifecycle='ACTIVE';
    this.loadCount++;
    this.lastTransition='INITIAL_LOAD';
    this.updateVisual(this.visualHandle,clone(this.state),nowWall);
    return {rehydrated:false,alreadyActive:false};
  }

  update({dtMs=0,wallNow=Date.now(),eventId=this.state.memory.eventId}={}){
    if(!this.isActive)return false;
    this.updateCount++;
    this._observeMemoryEvent(eventId,wallNow);
    this._resolveMemory(wallNow);
    this._advanceActor(dtMs);
    this.updateVisual(this.visualHandle,clone(this.state),wallNow);
    return true;
  }

  serialize(nowWall=Date.now()){
    return {
      version:STREAM_CELL_SCHEMA_VERSION,
      cellId:this.id,
      serializedAt:nowWall,
      memory:clone(this.state.memory),
      actor:clone(this.state.actor)
    };
  }

  unload(nowWall=Date.now()){
    if(!this.isActive)return null;
    const snapshot=this.serialize(nowWall);
    this.store.save(this.id,snapshot);
    this.snapshotStatus='SAVED';
    this._detach();
    this.lifecycle='UNLOADED';
    this.dormantSince=nowWall;
    this.unloadCount++;
    this.lastTransition='UNLOADED';
    return clone(snapshot);
  }

  rehydrate(snapshot,nowWall=Date.now()){
    this._validateSnapshot(snapshot);
    this.lifecycle='REHYDRATING';
    this.state={memory:clone(snapshot.memory),actor:clone(snapshot.actor)};
    this.lastOffscreenMs=Math.max(0,nowWall-snapshot.serializedAt);
    this._resolveMemory(nowWall);
    this._attach();
    this.restoreCount++;
    this.loadCount++;
    this.lifecycle='ACTIVE';
    this.lastTransition='REHYDRATED';
    this.updateVisual(this.visualHandle,clone(this.state),nowWall);
    return {rehydrated:true,offscreenMs:this.lastOffscreenMs};
  }

  offscreenMs(nowWall=Date.now()){
    if(this.lifecycle==='UNLOADED'){
      const snapshot=this.store.load(this.id);
      return snapshot?Math.max(0,nowWall-snapshot.serializedAt):0;
    }
    return this.lastOffscreenMs;
  }

  _observeMemoryEvent(eventId,nowWall){
    if(!Number.isFinite(eventId))return;
    if(eventId<this.state.memory.eventId){
      this.duplicateCount++;
      return;
    }
    if(eventId===this.state.memory.eventId)return;
    this.state.memory.eventId=eventId;
    this.state.memory.state='DISTURBED';
    this.state.memory.startedAt=nowWall;
    this.state.memory.expiresAt=nowWall+this.config.disturbedMs+this.config.settlingMs;
    this.memoryActivationCount++;
    this.lastTransition='MEMORY_DISTURBED';
  }

  _resolveMemory(nowWall){
    const memory=this.state.memory;
    if(memory.state==='CALM')return;
    if(nowWall>=memory.expiresAt){
      memory.state='CALM';
      return;
    }
    if(nowWall>=memory.startedAt+this.config.disturbedMs){
      memory.state='SETTLING';
      return;
    }
    memory.state='DISTURBED';
  }

  _advanceActor(dtMs){
    if(this.state.actor.behaviorState!=='SEEKING_FOOD')return;
    const safeDt=Math.max(0,Number.isFinite(dtMs)?dtMs:0);
    const next=Math.min(
      this.config.actorProgressCap,
      this.state.actor.progress+safeDt/this.config.actorPreGoalTravelMs
    );
    this.state.actor.progress=next;
    this.state.actor.position={
      x:this.actorStart.x+(this.actorDestination.x-this.actorStart.x)*next,
      z:this.actorStart.z+(this.actorDestination.z-this.actorStart.z)*next
    };
  }

  _attach(){
    if(this.visualHandle)throw new Error('06H duplicate visual attach');
    this.visualHandle=this.attachVisual(clone(this.state));
  }

  _detach(){
    if(!this.visualHandle)return;
    this.detachVisual(this.visualHandle);
    this.visualHandle=null;
  }

  _validateSnapshot(snapshot){
    if(!snapshot||snapshot.version!==STREAM_CELL_SCHEMA_VERSION)throw new Error('06H invalid snapshot version');
    if(snapshot.cellId!==this.id)throw new Error('06H invalid snapshot cell');
    finite(snapshot.serializedAt,'snapshot.serializedAt');
    if(!snapshot.memory||!snapshot.actor)throw new Error('06H incomplete snapshot');
    finite(snapshot.memory.eventId,'snapshot.memory.eventId');
    finite(snapshot.actor.progress,'snapshot.actor.progress');
    finite(snapshot.actor.position?.x,'snapshot.actor.position.x');
    finite(snapshot.actor.position?.z,'snapshot.actor.position.z');
    finite(snapshot.actor.destination?.x,'snapshot.actor.destination.x');
    finite(snapshot.actor.destination?.z,'snapshot.actor.destination.z');
  }
}
