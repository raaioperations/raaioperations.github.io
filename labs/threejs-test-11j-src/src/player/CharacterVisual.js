import * as THREE from 'three';

export class CharacterVisual{
  constructor({root,assetManager,url='./assets/Soldier.glb'}){
    this.root=root;this.assetManager=assetManager;this.url=url;
    this.loaded=false;this.error='';this.mixer=null;this.actions=new Map();this.active=null;this.model=null;
  }

  async load(){
    try{
      const instance=await this.assetManager.instantiateGLTF(this.url);
      this.model=instance.scene;
      this.model.rotation.y=Math.PI;
      this.model.traverse(obj=>{if(obj.isMesh){obj.castShadow=false;obj.receiveShadow=true;}});
      this.root.add(this.model);
      this.mixer=new THREE.AnimationMixer(this.model);
      for(const clip of instance.animations)this.actions.set(clip.name,this.mixer.clipAction(clip));
      this.loaded=true;this.setState('IDLE',0);return this;
    }catch(error){this.error=error?.message||String(error);throw error;}
  }

  pick(state){
    const preferred=state==='RUN'?['Run','run','Running']:state==='WALK'?['Walk','walk','Walking']:['Idle','idle'];
    for(const name of preferred)if(this.actions.has(name))return this.actions.get(name);
    return this.actions.values().next().value||null;
  }

  setState(state,fade=.12){
    const next=this.pick(state);
    if(!next||next===this.active)return;
    next.reset().play();
    if(this.active)this.active.crossFadeTo(next,fade,true);
    this.active=next;
  }

  update(dt,state){if(!this.loaded)return;this.setState(state);this.mixer?.update(dt);}

  dispose(){
    if(this.mixer&&this.model){this.mixer.stopAllAction();this.mixer.uncacheRoot(this.model);}
    if(this.model)this.root.remove(this.model);
    this.actions.clear();this.model=null;this.mixer=null;this.loaded=false;
  }
}
