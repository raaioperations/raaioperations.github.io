export const BOUNDED_PREFETCH_SCHEMA_VERSION=1;

const finite=(value,label)=>{
  if(!Number.isFinite(value))throw new Error('08C invalid '+label);
  return value;
};

export class PrefetchBudgetState{
  constructor({maxPreparedInstances=2}={}){
    this.maxPreparedInstances=Math.max(1,Math.floor(finite(maxPreparedInstances,'maxPreparedInstances')));
    this.currentTarget=null;
    this.prepared=new Map();
    this.peakPrepared=0;
    this.cancellations=0;
    this.evictedInstances=0;
    this.consumedInstances=0;
    this.retargetCount=0;
    this.staleCompletionCount=0;
  }

  setTarget(targetId){
    const next=targetId||null;
    if(next!==this.currentTarget)this.retargetCount++;
    this.currentTarget=next;
  }

  setPrepared(regionId,count){
    const normalized=Math.max(0,Math.floor(finite(count,'prepared count')));
    if(normalized===0)this.prepared.delete(regionId);
    else this.prepared.set(regionId,normalized);
    this.peakPrepared=Math.max(this.peakPrepared,this.totalPrepared);
    if(this.totalPrepared>this.maxPreparedInstances){
      throw new Error('08C prepared-instance budget exceeded');
    }
  }

  recordDiscard(regionId,count,{stale=false}={}){
    const normalized=Math.max(0,Math.floor(finite(count,'discard count')));
    this.setPrepared(regionId,0);
    if(normalized>0){
      this.cancellations++;
      this.evictedInstances+=normalized;
    }
    if(stale)this.staleCompletionCount++;
  }

  recordConsumed(count){
    this.consumedInstances+=Math.max(0,Math.floor(finite(count,'consumed count')));
  }

  get totalPrepared(){
    let total=0;
    for(const count of this.prepared.values())total+=count;
    return total;
  }

  snapshot(){
    return {
      version:BOUNDED_PREFETCH_SCHEMA_VERSION,
      maxPreparedInstances:this.maxPreparedInstances,
      currentTarget:this.currentTarget,
      prepared:Object.fromEntries(this.prepared),
      totalPrepared:this.totalPrepared,
      peakPrepared:this.peakPrepared,
      cancellations:this.cancellations,
      evictedInstances:this.evictedInstances,
      consumedInstances:this.consumedInstances,
      retargetCount:this.retargetCount,
      staleCompletionCount:this.staleCompletionCount
    };
  }
}
