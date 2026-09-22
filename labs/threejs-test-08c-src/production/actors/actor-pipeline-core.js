import {LivingWorldKernel} from '../living-world-kernel.js';

export const PRODUCTION_ACTOR_SCHEMA_VERSION=1;

const clone=value=>JSON.parse(JSON.stringify(value));
const finite=(value,label)=>{
  if(!Number.isFinite(value))throw new Error('07B invalid '+label);
  return value;
};

function freezeDefinition(definition){
  return Object.freeze({
    typeId:definition.typeId,
    asset:Object.freeze({...definition.asset}),
    scale:definition.scale,
    yawOffset:definition.yawOffset,
    animationMap:Object.freeze({...definition.animationMap}),
    presentation:Object.freeze({...definition.presentation})
  });
}

export class ProductionActorDefinitionRegistry{
  constructor(){this.definitions=new Map();}
  register(definition){
    if(!definition?.typeId)throw new Error('07B actor typeId required');
    if(this.definitions.has(definition.typeId))throw new Error('07B duplicate actor definition '+definition.typeId);
    if(!definition.asset?.id||!definition.asset?.url)throw new Error('07B actor asset id/url required');
    const scale=finite(definition.scale??1,'definition.scale');
    const yawOffset=finite(definition.yawOffset??0,'definition.yawOffset');
    const normalized=freezeDefinition({
      typeId:definition.typeId,
      asset:{id:definition.asset.id,url:definition.asset.url},
      scale,
      yawOffset,
      animationMap:definition.animationMap??{},
      presentation:definition.presentation??{}
    });
    this.definitions.set(normalized.typeId,normalized);
    return normalized;
  }
  get(typeId){
    const definition=this.definitions.get(typeId);
    if(!definition)throw new Error('07B unknown actor definition '+typeId);
    return definition;
  }
  has(typeId){return this.definitions.has(typeId);}
  list(){return [...this.definitions.values()];}
}

export class ProductionActorRecord{
  constructor({id,definition,kernel,position={x:0,y:0,z:0},yaw=0,animationIntent='IDLE'}){
    if(!id)throw new Error('07B actor id required');
    this.id=id;
    this.typeId=definition.typeId;
    this.definition=definition;
    this.kernel=kernel;
    this.position={
      x:finite(position.x??0,'actor.position.x'),
      y:finite(position.y??0,'actor.position.y'),
      z:finite(position.z??0,'actor.position.z')
    };
    this.yaw=finite(yaw,'actor.yaw');
    this.animationIntent=animationIntent||'IDLE';
    this.bindingId=null;
    this.bindingClaims=0;
    this.createdAt=Date.now();
  }

  setTransform({x=this.position.x,y=this.position.y,z=this.position.z,yaw=this.yaw}={}){
    this.position={x:finite(x,'actor.position.x'),y:finite(y,'actor.position.y'),z:finite(z,'actor.position.z')};
    this.yaw=finite(yaw,'actor.yaw');
  }

  setAnimationIntent(intent){
    if(!intent)throw new Error('07B animation intent required');
    this.animationIntent=String(intent);
  }

  claimBinding(bindingId){
    if(!bindingId)throw new Error('07B binding id required');
    if(this.bindingId&&this.bindingId!==bindingId)throw new Error('07B duplicate visual binding for '+this.id);
    if(!this.bindingId){
      this.bindingId=bindingId;
      this.bindingClaims++;
      return true;
    }
    return false;
  }

  releaseBinding(bindingId){
    if(this.bindingId!==bindingId)return false;
    this.bindingId=null;
    return true;
  }

  serialize(now=Date.now()){
    finite(now,'actor serialize now');
    return {
      version:PRODUCTION_ACTOR_SCHEMA_VERSION,
      actorId:this.id,
      typeId:this.typeId,
      serializedAt:now,
      transform:{position:clone(this.position),yaw:this.yaw},
      animationIntent:this.animationIntent,
      kernel:this.kernel.serialize(now)
    };
  }
}

export class ProductionActorPipeline{
  constructor({kernelFactory=(options)=>new LivingWorldKernel(options)}={}){
    this.definitions=new ProductionActorDefinitionRegistry();
    this.actors=new Map();
    this.kernelFactory=kernelFactory;
    this.createdCount=0;
    this.destroyedCount=0;
  }

  registerDefinition(definition){return this.definitions.register(definition);}

  createActor({
    id,
    typeId,
    position={x:0,y:0,z:0},
    yaw=0,
    animationIntent='IDLE',
    kernelOptions={}
  }){
    if(this.actors.has(id))throw new Error('07B duplicate actor id '+id);
    const definition=this.definitions.get(typeId);
    const kernel=this.kernelFactory(kernelOptions);
    const actor=new ProductionActorRecord({id,definition,kernel,position,yaw,animationIntent});
    this.actors.set(id,actor);
    this.createdCount++;
    return actor;
  }

  restoreActor(snapshot,now=Date.now()){
    if(!snapshot||snapshot.version!==PRODUCTION_ACTOR_SCHEMA_VERSION)throw new Error('07B actor snapshot version mismatch');
    if(this.actors.has(snapshot.actorId))throw new Error('07B restore collision '+snapshot.actorId);
    const definition=this.definitions.get(snapshot.typeId);
    const kernel=this.kernelFactory();
    kernel.restore(snapshot.kernel,now);
    const actor=new ProductionActorRecord({
      id:snapshot.actorId,
      definition,
      kernel,
      position:snapshot.transform.position,
      yaw:snapshot.transform.yaw,
      animationIntent:snapshot.animationIntent
    });
    this.actors.set(actor.id,actor);
    this.createdCount++;
    return actor;
  }

  destroyActor(id){
    const actor=this.actors.get(id);
    if(!actor)return false;
    if(actor.bindingId)throw new Error('07B actor must release visual binding before destroy '+id);
    this.actors.delete(id);
    this.destroyedCount++;
    return true;
  }

  getActor(id){return this.actors.get(id)??null;}
  listActors(){return [...this.actors.values()];}
  get size(){return this.actors.size;}
}
