export const PRODUCTION_VERTICAL_SLICE_SCHEMA_VERSION=1;

const finite=(value,label)=>{
  if(!Number.isFinite(value))throw new Error('07D invalid '+label);
  return value;
};

export class ProductionVerticalSliceCoordinator{
  constructor({
    region,
    pipeline,
    actorId,
    hazardCenter={x:0,z:0},
    triggerDelayMs=1800
  }={}){
    if(!region)throw new Error('07D region required');
    if(!pipeline)throw new Error('07D actor pipeline required');
    if(!actorId)throw new Error('07D actor id required');
    this.region=region;
    this.pipeline=pipeline;
    this.actorId=actorId;
    this.hazardCenter={x:finite(hazardCenter.x,'hazardCenter.x'),z:finite(hazardCenter.z,'hazardCenter.z')};
    this.triggerDelayMs=Math.max(0,finite(triggerDelayMs,'triggerDelayMs'));

    this.stage='WAITING_REGION';
    this.firstActiveAt=0;
    this.hazardEventId=0;
    this.hazardEmittedAt=0;
    this.hazardObserved=false;
    this.recoveryObserved=false;
    this.streamOutObserved=false;
    this.restoreObserved=false;
    this.baselineProgress=null;
    this.recoveredProgress=null;
    this.lastUnloadCount=region.unloadCount??0;
    this.lastRestoreCount=region.restoreCount??0;
  }

  get actor(){return this.pipeline.getActor(this.actorId);}

  update(now=Date.now()){
    finite(now,'update now');

    if((this.region.unloadCount??0)>this.lastUnloadCount){
      this.streamOutObserved=true;
      this.lastUnloadCount=this.region.unloadCount;
    }
    if((this.region.restoreCount??0)>this.lastRestoreCount){
      this.restoreObserved=true;
      this.lastRestoreCount=this.region.restoreCount;
    }

    const actor=this.actor;
    if(!this.region.isActive||!actor){
      if(this.streamOutObserved)this.stage='STREAMED_OUT';
      return this.snapshot();
    }

    if(!this.firstActiveAt){
      this.firstActiveAt=now;
      this.stage='FOOD_ACTIVE';
    }

    if(!this.hazardEventId&&now-this.firstActiveAt>=this.triggerDelayMs){
      this.baselineProgress=actor.kernel.goals.progress;
      const event=actor.kernel.createHazardEvent({center:this.hazardCenter,at:now});
      this.hazardEventId=event.id;
      this.hazardEmittedAt=now;
      this.stage='HAZARD_EMITTED';
    }

    const memory=actor.kernel.memory.state;
    const goal=actor.kernel.goals.activeGoal;
    if(this.hazardEventId&&goal==='HAZARD'){
      this.hazardObserved=true;
      this.stage='HAZARD_ACTIVE';
    }

    if(
      this.hazardObserved&&
      memory==='CALM'&&
      goal==='FOOD'
    ){
      this.recoveryObserved=true;
      this.recoveredProgress=actor.kernel.goals.progress;
      this.stage=this.restoreObserved?'RESTORED':'BEHAVIOR_RECOVERED';
    }

    if(this.restoreObserved&&this.recoveryObserved)this.stage='RESTORED';
    return this.snapshot();
  }

  completion({
    assetLoadCount,
    duplicateCount=0,
    regressionStatus='WAITING'
  }={}){
    const progressPreserved=
      Number.isFinite(this.baselineProgress)&&
      Number.isFinite(this.recoveredProgress)&&
      this.recoveredProgress>=this.baselineProgress-1e-12;

    const checks={
      hazard_emitted:this.hazardEventId>0,
      hazard_observed:this.hazardObserved,
      recovery_observed:this.recoveryObserved,
      progress_preserved:progressPreserved,
      stream_out_observed:this.streamOutObserved,
      restore_observed:this.restoreObserved,
      region_ids_stable:this.region.lastRestoreIdsStable===true,
      region_progress_preserved:this.region.lastRestoreProgressPreserved===true,
      asset_load_one:assetLoadCount===1,
      duplicates:duplicateCount===0,
      regression:regressionStatus==='PASS'
    };
    const failed=Object.entries(checks).filter(([,ok])=>!ok).map(([name])=>name);
    return {pass:failed.length===0,failed,checks};
  }

  snapshot(){
    return {
      version:PRODUCTION_VERTICAL_SLICE_SCHEMA_VERSION,
      stage:this.stage,
      actorId:this.actorId,
      hazardEventId:this.hazardEventId,
      hazardEmittedAt:this.hazardEmittedAt,
      hazardObserved:this.hazardObserved,
      recoveryObserved:this.recoveryObserved,
      streamOutObserved:this.streamOutObserved,
      restoreObserved:this.restoreObserved,
      baselineProgress:this.baselineProgress,
      recoveredProgress:this.recoveredProgress
    };
  }
}
