import * as THREE from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {clone as cloneSkeleton} from 'three/addons/utils/SkeletonUtils.js';

let bindingSequence07B=0;

export class ThreeActorAssetCache{
  constructor({loader=new GLTFLoader()}={}){
    this.loader=loader;
    this.entries=new Map();
    this.loadCount=0;
    this.instanceCount=0;
  }

  async load(definition){
    const asset=definition.asset;
    const existing=this.entries.get(asset.id);
    if(existing){
      if(existing.url!==asset.url)throw new Error('07B asset id/url conflict '+asset.id);
      return existing.promise;
    }
    this.loadCount++;
    const promise=this.loader.loadAsync(asset.url).then(gltf=>({
      gltf,
      template:gltf.scene,
      clips:[...gltf.animations]
    }));
    this.entries.set(asset.id,{url:asset.url,promise});
    return promise;
  }

  async instantiate(definition){
    const loaded=await this.load(definition);
    const model=cloneSkeleton(loaded.template);
    this.instanceCount++;
    return {model,clips:loaded.clips};
  }

  get assetCount(){return this.entries.size;}
}

export class ThreeProductionActorBinding{
  constructor({record,definition,scene,assetCache}){
    if(!record||!definition||!scene||!assetCache)throw new Error('07B binding dependencies required');
    this.record=record;
    this.definition=definition;
    this.scene=scene;
    this.assetCache=assetCache;
    this.bindingId='07B_BINDING_'+(++bindingSequence07B);
    this.root=new THREE.Group();
    this.root.userData.productionActorId=record.id;
    this.root.userData.productionActorType=record.typeId;
    this.model=null;
    this.mixer=null;
    this.actions=new Map();
    this.activeAction=null;
    this.resolvedAnimation='NONE';
    this.attached=false;
    this.ready=false;
  }

  async attach(){
    if(this.attached)return this;
    this.record.claimBinding(this.bindingId);
    const {model,clips}=await this.assetCache.instantiate(this.definition);
    this.model=model;
    this.model.scale.setScalar(this.definition.scale);
    this.model.rotation.y=this.definition.yawOffset;
    this.model.traverse(object=>{
      if(object.isMesh){
        object.castShadow=!!this.definition.presentation.castShadow;
        object.receiveShadow=this.definition.presentation.receiveShadow!==false;
      }
    });
    this.root.add(this.model);
    this.mixer=new THREE.AnimationMixer(this.model);
    for(const clip of clips)this.actions.set(clip.name,this.mixer.clipAction(clip));
    this.scene.add(this.root);
    this.attached=true;
    this.ready=true;
    this.syncTransform();
    this.setAnimationIntent(this.record.animationIntent,0);
    return this;
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
    if(!this.ready||!this.mixer)return null;
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

  update(dtSeconds){
    if(!this.ready)return;
    this.syncTransform();
    if(this.mixer)this.mixer.update(Math.max(0,Number.isFinite(dtSeconds)?dtSeconds:0));
  }

  detach(){
    if(!this.attached)return false;
    if(this.mixer){
      this.mixer.stopAllAction();
      if(this.model)this.mixer.uncacheRoot(this.model);
    }
    this.scene.remove(this.root);
    this.root.clear();
    this.record.releaseBinding(this.bindingId);
    this.attached=false;
    this.ready=false;
    this.model=null;
    this.mixer=null;
    this.actions.clear();
    this.activeAction=null;
    return true;
  }
}

export class ThreeProductionActorFactory{
  constructor({scene,assetCache=new ThreeActorAssetCache()}={}){
    if(!scene)throw new Error('07B Three actor factory requires scene');
    this.scene=scene;
    this.assetCache=assetCache;
    this.bindings=new Map();
    this.duplicateBindingCount=0;
  }

  async bind(record){
    if(this.bindings.has(record.id)){
      this.duplicateBindingCount++;
      throw new Error('07B duplicate actor binding '+record.id);
    }
    const binding=new ThreeProductionActorBinding({
      record,
      definition:record.definition,
      scene:this.scene,
      assetCache:this.assetCache
    });
    await binding.attach();
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
