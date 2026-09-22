import {PrefetchBudgetState} from './bounded-prefetch-lifecycle-core.js';

export class BoundedPredictivePrefetchController{
  constructor({factory,maxPreparedInstances=2}={}){
    if(!factory)throw new Error('08C bounded prefetch controller requires predictive factory');
    this.factory=factory;
    this.budget=new PrefetchBudgetState({maxPreparedInstances});
    this.targetId=null;
    this.sequence=0;
    this.prefetchExecutions=0;
    this.prefetchByRegion=new Map();
    this.lastAction='IDLE';
    this.lastDiscardReason='NONE';
    this.lastObservedConsumed=factory.consumedInstances??0;
  }

  preparedCount(regionId){
    return this.factory.preparedCount(regionId);
  }

  totalPrepared(){
    let total=0;
    for(const list of this.factory.prefetched.values())total+=list.length;
    return total;
  }

  discard(regionId,reason='RETARGET',{stale=false}={}){
    if(!regionId)return 0;
    const list=this.factory.prefetched.get(regionId);
    const count=list?.length??0;
    if(count>0)this.factory.prefetched.delete(regionId);
    this.budget.recordDiscard(regionId,count,{stale});
    this.lastDiscardReason=reason;
    if(count>0)this.lastAction='EVICTED '+regionId+' ×'+count;
    return count;
  }

  syncConsumed(){
    const current=this.factory.consumedInstances??0;
    const delta=Math.max(0,current-this.lastObservedConsumed);
    if(delta>0)this.budget.recordConsumed(delta);
    this.lastObservedConsumed=current;
    return delta;
  }

  async retarget(targetId,definition,count=2){
    const next=targetId||null;
    const prior=this.targetId;
    if(prior&&prior!==next)this.discard(prior,'RETARGET');
    this.targetId=next;
    this.budget.setTarget(next);
    const token=++this.sequence;

    if(!next){
      this.lastAction=prior?'TARGET CLEARED':'IDLE';
      return {target:null,prepared:0,stale:false};
    }

    const existing=this.factory.preparedCount(next);
    if(existing>=count){
      this.budget.setPrepared(next,existing);
      this.lastAction='READY '+next+' ×'+existing;
      return {target:next,prepared:existing,stale:false};
    }

    this.lastAction='PREFETCHING '+next;
    await this.factory.prefetch(next,definition,count);
    this.prefetchExecutions++;
    this.prefetchByRegion.set(next,(this.prefetchByRegion.get(next)??0)+1);

    if(token!==this.sequence||this.targetId!==next){
      const discarded=this.discard(next,'STALE COMPLETION',{stale:true});
      return {target:next,prepared:0,stale:true,discarded};
    }

    const prepared=this.factory.preparedCount(next);
    this.budget.setPrepared(next,prepared);
    this.lastAction='READY '+next+' ×'+prepared;
    return {target:next,prepared,stale:false};
  }

  observeAfterWorldStep(){
    this.syncConsumed();
    for(const regionId of [...this.budget.prepared.keys()]){
      const actual=this.factory.preparedCount(regionId);
      this.budget.setPrepared(regionId,actual);
    }
    if(this.totalPrepared()>this.budget.maxPreparedInstances){
      throw new Error('08C factory prepared pool exceeded bounded budget');
    }
  }

  executionCount(regionId){
    return this.prefetchByRegion.get(regionId)??0;
  }

  snapshot(){
    return {
      targetId:this.targetId,
      prefetchExecutions:this.prefetchExecutions,
      prefetchByRegion:Object.fromEntries(this.prefetchByRegion),
      lastAction:this.lastAction,
      lastDiscardReason:this.lastDiscardReason,
      factoryPrepared:this.totalPrepared(),
      budget:this.budget.snapshot()
    };
  }
}
