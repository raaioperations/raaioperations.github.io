export const SIM_LOD_TIERS=Object.freeze({
  NEAR:'NEAR',
  MID:'MID',
  FAR:'FAR',
  DORMANT:'DORMANT'
});

export const DEFAULT_SIM_LOD_CONFIG=Object.freeze({
  nearEnterM:12,
  nearExitM:16,
  midEnterM:26,
  midExitM:30,
  sleepRadiusM:58,
  wakeRadiusM:50,
  midIntervalMs:100,
  farIntervalMs:500,
  maxCatchUpTicks:4
});

const finite=(value,label)=>{
  if(!Number.isFinite(value))throw new Error('06I invalid '+label);
  return value;
};

export class SimulationLODController{
  constructor({
    config={},
    onSimulate=()=>{},
    onTierChange=()=>{},
    onSleep=()=>{},
    onWake=()=>{}
  }={}){
    this.config={...DEFAULT_SIM_LOD_CONFIG,...config};
    const c=this.config;
    if(!(c.nearEnterM<c.nearExitM&&c.nearExitM<c.midEnterM&&c.midEnterM<c.midExitM&&c.midExitM<c.wakeRadiusM&&c.wakeRadiusM<c.sleepRadiusM)){
      throw new Error('06I invalid LOD radii/hysteresis ordering');
    }
    if(!(c.midIntervalMs>0&&c.farIntervalMs>c.midIntervalMs))throw new Error('06I invalid LOD cadence');
    this.onSimulate=onSimulate;
    this.onTierChange=onTierChange;
    this.onSleep=onSleep;
    this.onWake=onWake;
    this.tier=SIM_LOD_TIERS.NEAR;
    this.accumulatorMs=0;
    this.totalTicks=0;
    this.ticksByTier={
      [SIM_LOD_TIERS.NEAR]:0,
      [SIM_LOD_TIERS.MID]:0,
      [SIM_LOD_TIERS.FAR]:0,
      [SIM_LOD_TIERS.DORMANT]:0
    };
    this.transitionCount=0;
    this.sleepCount=0;
    this.wakeCount=0;
    this.lastDistanceM=0;
    this.lastTickWallMs=0;
  }

  cadenceLabel(){
    if(this.tier===SIM_LOD_TIERS.NEAR)return 'FRAME';
    if(this.tier===SIM_LOD_TIERS.MID)return Math.round(1000/this.config.midIntervalMs)+' Hz';
    if(this.tier===SIM_LOD_TIERS.FAR)return (1000/this.config.farIntervalMs).toFixed(0)+' Hz';
    return 'SLEEPING';
  }

  step({distanceM,dtMs,wallNow=Date.now()}={}){
    const distance=finite(distanceM,'distanceM');
    const dt=Math.max(0,finite(dtMs,'dtMs'));
    this.lastDistanceM=distance;
    const next=this._nextTier(distance);
    if(next!==this.tier)this._transition(next,wallNow);

    if(this.tier===SIM_LOD_TIERS.DORMANT)return 0;

    if(this.tier===SIM_LOD_TIERS.NEAR){
      this._tick(dt,wallNow);
      return 1;
    }

    const interval=this.tier===SIM_LOD_TIERS.MID?this.config.midIntervalMs:this.config.farIntervalMs;
    this.accumulatorMs+=dt;
    let ticks=0;
    while(this.accumulatorMs>=interval&&ticks<this.config.maxCatchUpTicks){
      this.accumulatorMs-=interval;
      this._tick(interval,wallNow);
      ticks++;
    }
    return ticks;
  }

  _tick(stepMs,wallNow){
    this.totalTicks++;
    this.ticksByTier[this.tier]++;
    this.lastTickWallMs=wallNow;
    this.onSimulate(stepMs,this.tier,wallNow);
  }

  _transition(next,wallNow){
    const prev=this.tier;
    if(prev===SIM_LOD_TIERS.DORMANT&&next!==SIM_LOD_TIERS.DORMANT){
      this.accumulatorMs=0;
      this.tier=next;
      this.wakeCount++;
      this.transitionCount++;
      this.onWake(wallNow,next,prev);
      this.onTierChange(next,prev,wallNow);
      return;
    }
    if(prev!==SIM_LOD_TIERS.DORMANT&&next===SIM_LOD_TIERS.DORMANT){
      this.onSleep(wallNow,prev,next);
      this.accumulatorMs=0;
      this.tier=next;
      this.sleepCount++;
      this.transitionCount++;
      this.onTierChange(next,prev,wallNow);
      return;
    }
    this.accumulatorMs=0;
    this.tier=next;
    this.transitionCount++;
    this.onTierChange(next,prev,wallNow);
  }

  _nextTier(distance){
    const c=this.config;
    if(this.tier===SIM_LOD_TIERS.DORMANT){
      if(distance>c.wakeRadiusM)return SIM_LOD_TIERS.DORMANT;
      return this._tierForWake(distance);
    }
    if(distance>=c.sleepRadiusM)return SIM_LOD_TIERS.DORMANT;
    if(this.tier===SIM_LOD_TIERS.NEAR){
      return distance>c.nearExitM?SIM_LOD_TIERS.MID:SIM_LOD_TIERS.NEAR;
    }
    if(this.tier===SIM_LOD_TIERS.MID){
      if(distance<=c.nearEnterM)return SIM_LOD_TIERS.NEAR;
      if(distance>c.midExitM)return SIM_LOD_TIERS.FAR;
      return SIM_LOD_TIERS.MID;
    }
    if(this.tier===SIM_LOD_TIERS.FAR){
      if(distance<=c.nearEnterM)return SIM_LOD_TIERS.NEAR;
      if(distance<=c.midEnterM)return SIM_LOD_TIERS.MID;
      return SIM_LOD_TIERS.FAR;
    }
    return SIM_LOD_TIERS.NEAR;
  }

  _tierForWake(distance){
    if(distance<=this.config.nearEnterM)return SIM_LOD_TIERS.NEAR;
    if(distance<=this.config.midEnterM)return SIM_LOD_TIERS.MID;
    return SIM_LOD_TIERS.FAR;
  }
}
