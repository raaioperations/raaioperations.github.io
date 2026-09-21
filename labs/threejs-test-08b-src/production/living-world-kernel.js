export const LIVING_WORLD_KERNEL_SCHEMA_VERSION=1;

export const CANONICAL_LIVING_WORLD_DEFAULTS=Object.freeze({
  memoryRadiusM:1.8,
  disturbedMs:2300,
  settlingMs:2800,
  hazardPriority:100,
  foodPriority:40
});

const clone=value=>JSON.parse(JSON.stringify(value));
const finite=(value,label)=>{
  if(!Number.isFinite(value))throw new Error('07A invalid '+label);
  return value;
};

export function pointSegmentDistance2D(px,pz,ax,az,bx,bz){
  const abx=bx-ax,abz=bz-az;
  const denom=abx*abx+abz*abz;
  if(denom<=1e-12)return Math.hypot(px-ax,pz-az);
  const t=Math.max(0,Math.min(1,((px-ax)*abx+(pz-az)*abz)/denom));
  const qx=ax+abx*t,qz=az+abz*t;
  return Math.hypot(px-qx,pz-qz);
}

export class WorldEventSequence{
  constructor(lastEventId=0){
    this.lastEventId=Math.max(0,Number.isFinite(lastEventId)?Math.floor(lastEventId):0);
  }
  next(type,{at=Date.now(),payload={}}={}){
    if(!type)throw new Error('07A event type required');
    finite(at,'event.at');
    this.lastEventId++;
    return Object.freeze({id:this.lastEventId,type,at,payload:clone(payload)});
  }
  observe(eventId){
    if(!Number.isFinite(eventId)||eventId<=this.lastEventId)return false;
    this.lastEventId=Math.floor(eventId);
    return true;
  }
}

export class TimedSpatialMemory{
  constructor(config={}){
    this.config={...CANONICAL_LIVING_WORLD_DEFAULTS,...config};
    if(!(this.config.memoryRadiusM>0&&this.config.disturbedMs>0&&this.config.settlingMs>0)){
      throw new Error('07A invalid memory config');
    }
    this.state='CALM';
    this.eventId=0;
    this.startedAt=0;
    this.expiresAt=0;
    this.center={x:0,z:0};
  }

  applyEvent(event,{center,now=event?.at??Date.now()}={}){
    if(!event||!Number.isFinite(event.id))throw new Error('07A memory event id required');
    if(event.id<=this.eventId)return false;
    finite(now,'memory now');
    finite(center?.x,'memory center.x');
    finite(center?.z,'memory center.z');
    this.eventId=event.id;
    this.startedAt=now;
    this.expiresAt=now+this.config.disturbedMs+this.config.settlingMs;
    this.center={x:center.x,z:center.z};
    this.state='DISTURBED';
    return true;
  }

  resolve(now=Date.now()){
    finite(now,'memory resolve now');
    if(this.state==='CALM')return this.state;
    if(now>=this.expiresAt){
      this.state='CALM';
    }else if(now>=this.startedAt+this.config.disturbedMs){
      this.state='SETTLING';
    }else{
      this.state='DISTURBED';
    }
    return this.state;
  }

  overlapsPoint(point,now=Date.now()){
    this.resolve(now);
    if(this.state==='CALM')return false;
    return Math.hypot(point.x-this.center.x,point.z-this.center.z)<=this.config.memoryRadiusM;
  }

  overlapsSegment(segment,now=Date.now()){
    this.resolve(now);
    if(this.state==='CALM')return false;
    return pointSegmentDistance2D(
      this.center.x,this.center.z,
      segment.a.x,segment.a.z,
      segment.b.x,segment.b.z
    )<=this.config.memoryRadiusM;
  }

  snapshot(){
    return {
      state:this.state,
      eventId:this.eventId,
      startedAt:this.startedAt,
      expiresAt:this.expiresAt,
      center:clone(this.center),
      config:{
        memoryRadiusM:this.config.memoryRadiusM,
        disturbedMs:this.config.disturbedMs,
        settlingMs:this.config.settlingMs
      }
    };
  }

  restore(snapshot,now=Date.now()){
    if(!snapshot)throw new Error('07A memory snapshot required');
    this.state=snapshot.state;
    this.eventId=snapshot.eventId;
    this.startedAt=snapshot.startedAt;
    this.expiresAt=snapshot.expiresAt;
    this.center=clone(snapshot.center);
    this.resolve(now);
    return this.state;
  }
}

export class StimulusArbiter{
  constructor(priorities={}){
    this.priorities={
      HAZARD:CANONICAL_LIVING_WORLD_DEFAULTS.hazardPriority,
      FOOD:CANONICAL_LIVING_WORLD_DEFAULTS.foodPriority,
      ...priorities
    };
  }

  choose(candidates=[]){
    const valid=candidates
      .filter(c=>c&&c.valid!==false)
      .map(c=>({
        id:c.id,
        priority:Number.isFinite(c.priority)?c.priority:(this.priorities[c.id]??0),
        eventAt:Number.isFinite(c.eventAt)?c.eventAt:0,
        payload:c.payload??null
      }));
    valid.sort((a,b)=>b.priority-a.priority||String(a.id).localeCompare(String(b.id)));
    return valid[0]??null;
  }
}

export class GoalContinuity{
  constructor({goal='FOOD',progress=0}={}){
    this.activeGoal=goal;
    this.progress=Math.max(0,Math.min(1,progress));
    this.suspendedGoal=null;
    this.suspendedProgress=0;
    this.interruption=null;
    this.behaviorState=goal==='FOOD'?'SEEKING_FOOD':'ACTIVE';
  }

  setProgress(progress){
    this.progress=Math.max(0,Math.min(1,finite(progress,'goal progress')));
    if(this.activeGoal==='FOOD'&&this.progress>=1){
      this.activeGoal='FOOD REACHED';
      this.behaviorState='COMPLETE';
    }
  }

  advanceFood(delta){
    if(this.activeGoal!=='FOOD'||this.behaviorState!=='SEEKING_FOOD')return this.progress;
    this.setProgress(this.progress+Math.max(0,finite(delta,'goal delta')));
    return this.progress;
  }

  interrupt(interruptionGoal='HAZARD'){
    if(this.activeGoal===interruptionGoal)return false;
    if(this.activeGoal==='FOOD'){
      this.suspendedGoal='FOOD';
      this.suspendedProgress=this.progress;
    }
    this.interruption=interruptionGoal;
    this.activeGoal=interruptionGoal;
    this.behaviorState='EVADING';
    return true;
  }

  clearInterruption(){
    if(!this.interruption)return false;
    this.interruption=null;
    if(this.suspendedGoal){
      this.activeGoal=this.suspendedGoal;
      this.progress=this.suspendedProgress;
      this.suspendedGoal=null;
      this.suspendedProgress=0;
      this.behaviorState=this.activeGoal==='FOOD'?'SEEKING_FOOD':'ACTIVE';
      return true;
    }
    return false;
  }

  reconcile(winner){
    const id=winner?.id??null;
    if(id==='HAZARD'){
      this.interrupt('HAZARD');
    }else if(this.interruption==='HAZARD'){
      this.clearInterruption();
    }
    return this.activeGoal;
  }

  snapshot(){
    return {
      activeGoal:this.activeGoal,
      progress:this.progress,
      suspendedGoal:this.suspendedGoal,
      suspendedProgress:this.suspendedProgress,
      interruption:this.interruption,
      behaviorState:this.behaviorState
    };
  }

  restore(snapshot){
    if(!snapshot)throw new Error('07A goal snapshot required');
    Object.assign(this,clone(snapshot));
  }
}

export class LivingWorldKernel{
  constructor({
    memoryConfig={},
    priorities={},
    initialGoal='FOOD',
    initialProgress=0
  }={}){
    this.events=new WorldEventSequence();
    this.memory=new TimedSpatialMemory(memoryConfig);
    this.arbiter=new StimulusArbiter(priorities);
    this.goals=new GoalContinuity({goal:initialGoal,progress:initialProgress});
    this.lastWinner=null;
  }

  createHazardEvent({center,at=Date.now(),payload={}}={}){
    const event=this.events.next('HAZARD',{at,payload});
    this.memory.applyEvent(event,{center,now:at});
    return event;
  }

  observeHazardEvent(event,{center,now=event?.at??Date.now()}={}){
    if(!event||event.type!=='HAZARD')throw new Error('07A HAZARD event required');
    this.events.observe(event.id);
    return this.memory.applyEvent(event,{center,now});
  }

  update({
    now=Date.now(),
    actorPath,
    foodValid=true,
    foodEventAt=now,
    foodProgressDelta=0
  }={}){
    this.memory.resolve(now);
    const hazardValid=actorPath?this.memory.overlapsSegment(actorPath,now):this.memory.state!=='CALM';
    const winner=this.arbiter.choose([
      {id:'HAZARD',valid:hazardValid,eventAt:this.memory.startedAt},
      {id:'FOOD',valid:foodValid,eventAt:foodEventAt}
    ]);
    this.lastWinner=winner?.id??null;
    this.goals.reconcile(winner);
    if(this.goals.activeGoal==='FOOD')this.goals.advanceFood(foodProgressDelta);
    return {
      memoryState:this.memory.state,
      winner:this.lastWinner,
      goal:this.goals.activeGoal,
      suspendedGoal:this.goals.suspendedGoal,
      progress:this.goals.progress
    };
  }

  serialize(now=Date.now()){
    finite(now,'kernel serialize now');
    return {
      version:LIVING_WORLD_KERNEL_SCHEMA_VERSION,
      serializedAt:now,
      eventSequence:{lastEventId:this.events.lastEventId},
      memory:this.memory.snapshot(),
      goals:this.goals.snapshot(),
      lastWinner:this.lastWinner
    };
  }

  restore(snapshot,now=Date.now()){
    if(!snapshot||snapshot.version!==LIVING_WORLD_KERNEL_SCHEMA_VERSION)throw new Error('07A kernel snapshot version mismatch');
    this.events=new WorldEventSequence(snapshot.eventSequence?.lastEventId??0);
    this.memory.restore(snapshot.memory,now);
    this.goals.restore(snapshot.goals);
    this.lastWinner=snapshot.lastWinner??null;
    if(this.memory.state==='CALM'&&this.goals.interruption==='HAZARD')this.goals.clearInterruption();
    return {
      offscreenMs:Math.max(0,now-snapshot.serializedAt),
      memoryState:this.memory.state,
      goal:this.goals.activeGoal,
      progress:this.goals.progress
    };
  }
}
