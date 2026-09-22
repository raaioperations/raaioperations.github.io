import * as THREE from 'three';

class PreparedBinding08B{
  constructor({record,definition,scene,prepared,bindingId}){
    this.record=record;
    this.definition=definition;
    this.scene=scene;
    this.bindingId=bindingId;
    this.root=new THREE.Group();
    this.root.userData.productionActorId=record.id;
    this.root.userData.productionActorType=record.typeId;
    this.root.userData.predictivePrefetch08B=true;
    this.model=prepared.model;
    this.clips=prepared.clips;
    this.mixer=new THREE.AnimationMixer(this.model);
    this.actions=new Map();
    this.activeAction=null;
    this.resolvedAnimation='NONE';
    this.attached=false;

    this.model.scale.setScalar(definition.scale);
    this.model.rotation.y=definition.yawOffset;
    this.model.traverse(object=>{
      if(object.isMesh){
        object.castShadow=!!definition.presentation.castShadow;
        object.receiveShadow=definition.presentation.receiveShadow!==false;
      }
    });
    this.root.add(this.model);
    for(const clip of this.clips)this.actions.set(clip.name,this.mixer.clipAction(clip));
  }

  resolveAnimation(intent){
    const preferred=this.definition.animationMap[intent]??intent;
    if(this.actions.has(preferred))return preferred;
    const aliases={
      IDLE:['Idle','idle'],
      WALK:['Walk','Walking','walk'],
      RUN:['Run','Running','run']
    }[intent]??[];
    for(const name of aliases)if(this.actions.has(name))return name;
    const first=this.actions.keys().next();
    return first.done?null:first.value;
  }

  setAnimationIntent(intent,fade=.12){
    this.record.setAnimationIntent(intent);
    const resolved=this.resolveAnimation(intent);
    if(!resolved)return null;
    const next=this.actions.get(resolved);
    if(next!==this.activeAction){
      next.reset().play();
      if(this.activeAction&&fade>0)this.activeAction.crossFadeTo(next,fade,true);
      else if(this.activeAction)this.activeAction.stop();
      this.activeAction=next;
    }
    this.resolvedAnimation=resolved;
    return resolved;
  }

  syncTransform(){
    const p=this.record.position;
    this.root.position.set(p.x,p.y,p.z);
    this.root.rotation.y=this.record.yaw;
  }

  attach(){
    if(this.attached)return this;
    this.record.claimBinding(this.bindingId);
    this.scene.add(this.root);
    this.attached=true;
    this.syncTransform();
    this.setAnimationIntent(this.record.animationIntent,0);
    return this;
  }

  update(dtSeconds){
    if(!this.attached)return;
    this.syncTransform();
    this.mixer.update(Math.max(0,Number.isFinite(dtSeconds)?dtSeconds:0));
  }

  detach(){
    if(!this.attached)return false;
    this.mixer.stopAllAction();
    this.mixer.uncacheRoot(this.model);
    this.scene.remove(this.root);
    this.root.clear();
    this.record.releaseBinding(this.bindingId);
    this.attached=false;
    return true;
  }
}

export class ThreePredictiveActorFactory{
  constructor({scene,assetCache}={}){
    if(!scene||!assetCache)throw new Error('08B predictive factory requires scene + frozen asset cache');
    this.scene=scene;
    this.assetCache=assetCache;
    this.prefetched=new Map();
    this.prefetchPromises=new Map();
    this.bindings=new Map();
    this.prefetchCount=0;
    this.prefetchedInstances=0;
    this.consumedInstances=0;
    this.fallbackInstances=0;
    this.duplicateBindingCount=0;
    this.bindingSequence=0;
  }

  async prefetch(regionId,definition,count){
    if(!regionId||!definition||!Number.isInteger(count)||count<1)throw new Error('08B invalid prefetch request');
    const existing=this.prefetched.get(regionId);
    if(existing&&existing.length>=count)return existing.length;
    if(this.prefetchPromises.has(regionId))return this.prefetchPromises.get(regionId);

    const promise=(async()=>{
      const list=this.prefetched.get(regionId)??[];
      while(list.length<count){
        const prepared=await this.assetCache.instantiate(definition);
        list.push(prepared);
        this.prefetchedInstances++;
      }
      this.prefetched.set(regionId,list);
      this.prefetchCount++;
      return list.length;
    })().finally(()=>this.prefetchPromises.delete(regionId));

    this.prefetchPromises.set(regionId,promise);
    return promise;
  }

  preparedCount(regionId){
    return this.prefetched.get(regionId)?.length??0;
  }

  async bind(regionId,record){
    if(this.bindings.has(record.id)){
      this.duplicateBindingCount++;
      throw new Error('08B duplicate predictive binding '+record.id);
    }

    let prepared=null;
    const list=this.prefetched.get(regionId);
    if(list?.length){
      prepared=list.shift();
      this.consumedInstances++;
      if(list.length===0)this.prefetched.delete(regionId);
    }else{
      prepared=await this.assetCache.instantiate(record.definition);
      this.fallbackInstances++;
    }

    const binding=new PreparedBinding08B({
      record,
      definition:record.definition,
      scene:this.scene,
      prepared,
      bindingId:'08B_BIND_'+(++this.bindingSequence)
    });
    binding.attach();
    this.bindings.set(record.id,binding);
    return binding;
  }

  unbind(actorId){
    const binding=this.bindings.get(actorId);
    if(!binding)return false;
    binding.detach();
    this.bindings.delete(actorId);
    return true;
  }

  update(dtSeconds){
    for(const binding of this.bindings.values())binding.update(dtSeconds);
  }

  getBinding(actorId){return this.bindings.get(actorId)??null;}
  get size(){return this.bindings.size;}
}
