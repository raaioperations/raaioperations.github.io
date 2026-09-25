import * as THREE from 'three';
import {ACTORS,WORLD} from '../config.js';
import {actorChunkKey,ActorStore} from './ActorStore.js';

const LOD_ORDER=Object.freeze(['NEAR','MID','FAR']);

function intervalFor(lod){
  return lod==='NEAR'?ACTORS.nearInterval:lod==='MID'?ACTORS.midInterval:ACTORS.farInterval;
}

export class LivingWorldSystem{
  constructor({root,resources,chunkManager,groundHeight}){
    this.root=root;
    this.resources=resources;
    this.chunkManager=chunkManager;
    this.groundHeight=groundHeight;
    this.store=new ActorStore();

    this.actorRoot=new THREE.Group();
    this.actorRoot.name='LivingWorldActors';
    this.root.add(this.actorRoot);

    this.bodyGeometry=resources.own(new THREE.CylinderGeometry(.20,.27,1.05,6,1));
    this.headGeometry=resources.own(new THREE.IcosahedronGeometry(.23,0));
    this.bodyMaterial=resources.own(new THREE.MeshStandardMaterial({color:0x9c7650,roughness:.88,metalness:0}));
    this.headMaterial=resources.own(new THREE.MeshStandardMaterial({color:0x3b3a34,roughness:.92,metalness:0}));

    this.bodies=new THREE.InstancedMesh(this.bodyGeometry,this.bodyMaterial,ACTORS.activeCapacity);
    this.heads=new THREE.InstancedMesh(this.headGeometry,this.headMaterial,ACTORS.activeCapacity);
    this.bodies.name='ActorBodies';
    this.heads.name='ActorHeads';
    this.bodies.count=0;this.heads.count=0;
    this.bodies.frustumCulled=true;this.heads.frustumCulled=true;
    this.actorRoot.add(this.bodies,this.heads);

    this.dummy=new THREE.Object3D();
    this.activeIds=[];
    this.slotById=new Map();
    this.activeChunkKeys=new Set();
    this.seenChunkKeys=new Set();

    this.activations=0;
    this.deactivations=0;
    this.reactivations=0;
    this.restoredEntities=0;
    this.visualRebinds=0;
    this.poolReallocations=0;

    this.updatesThisFrame=0;
    this.peakUpdatesPerFrame=0;
    this.totalFrames=0;
    this.totalUpdates=0;
    this.updatesByLod={NEAR:0,MID:0,FAR:0};
    this.activeByLod={NEAR:0,MID:0,FAR:0};
  }

  syncPopulation(frame=0){
    const descriptors=this.chunkManager.activeDescriptors();
    const nextChunkKeys=new Set();
    const nextIds=[];
    const previous=this.activeChunkKeys;

    this.activeByLod={NEAR:0,MID:0,FAR:0};

    for(const descriptor of descriptors){
      const key=actorChunkKey(descriptor.cx,descriptor.cz);
      nextChunkKeys.add(key);
      const wasActive=previous.has(key);
      const seenBefore=this.seenChunkKeys.has(key);
      const ids=this.store.ensureChunk(descriptor.cx,descriptor.cz,frame);
      this.store.touchChunk(descriptor.cx,descriptor.cz,frame);

      if(!wasActive){
        this.activations+=ids.length;
        if(seenBefore){
          this.reactivations++;
          this.restoredEntities+=ids.length;
        }
      }

      for(const id of ids){
        const record=this.store.get(id);
        record.lod=descriptor.lod;
        record.lastActiveFrame=frame;
        nextIds.push(id);
        this.activeByLod[record.lod]++;
      }

      this.seenChunkKeys.add(key);
    }

    for(const key of previous){
      if(!nextChunkKeys.has(key))this.deactivations+=ACTORS.perChunk;
    }

    if(nextIds.length>ACTORS.activeCapacity){
      throw new Error(`LivingWorld active population ${nextIds.length} exceeds pool ${ACTORS.activeCapacity}`);
    }

    this.activeChunkKeys=nextChunkKeys;
    this.activeIds=nextIds;
    this.slotById.clear();

    for(let slot=0;slot<this.activeIds.length;slot++){
      const id=this.activeIds[slot];
      this.slotById.set(id,slot);
      this.#writeVisual(slot,this.store.get(id));
    }

    this.bodies.count=this.activeIds.length;
    this.heads.count=this.activeIds.length;
    this.bodies.instanceMatrix.needsUpdate=true;
    this.heads.instanceMatrix.needsUpdate=true;
    this.visualRebinds++;
    this.store.prune(nextChunkKeys);
  }

  #writeVisual(slot,record){
    const y=this.groundHeight(record.x,record.z);

    this.dummy.position.set(record.x,y+.54,record.z);
    this.dummy.rotation.set(0,record.heading,0);
    this.dummy.scale.set(1,1,1);
    this.dummy.updateMatrix();
    this.bodies.setMatrixAt(slot,this.dummy.matrix);

    this.dummy.position.set(record.x,y+1.24+Math.sin(record.phase+record.ticks*.17)*.025,record.z);
    this.dummy.rotation.set(0,record.heading,0);
    this.dummy.scale.set(1,1,1);
    this.dummy.updateMatrix();
    this.heads.setMatrixAt(slot,this.dummy.matrix);
  }

  #simulate(record,dt,interval){
    const scaledDt=Math.min(.22,dt*interval);
    const wave=Math.sin(record.phase+record.ticks*.31);
    record.heading+=wave*.026*interval;
    record.x+=Math.sin(record.heading)*record.speed*scaledDt;
    record.z+=Math.cos(record.heading)*record.speed*scaledDt;

    const half=WORLD.chunkSize*.5-ACTORS.homeMargin;
    const minX=record.homeX-half,maxX=record.homeX+half;
    const minZ=record.homeZ-half,maxZ=record.homeZ+half;

    if(record.x<minX||record.x>maxX){
      record.x=Math.max(minX,Math.min(maxX,record.x));
      record.heading=-record.heading;
    }
    if(record.z<minZ||record.z>maxZ){
      record.z=Math.max(minZ,Math.min(maxZ,record.z));
      record.heading=Math.PI-record.heading;
    }

    record.y=this.groundHeight(record.x,record.z);
    record.ticks++;
  }

  update(frame){
    this.totalFrames++;
    this.updatesThisFrame=0;
    let matricesDirty=false;

    for(const lod of LOD_ORDER){
      const interval=intervalFor(lod);
      for(const id of this.activeIds){
        if(this.updatesThisFrame>=ACTORS.updateBudgetPerFrame)break;
        const record=this.store.get(id);
        if(!record||record.lod!==lod)continue;
        if(((frame.frame+record.stagger)%interval)!==0)continue;

        this.#simulate(record,frame.dt,interval);
        this.updatesThisFrame++;
        this.totalUpdates++;
        this.updatesByLod[lod]++;
        const slot=this.slotById.get(id);
        if(slot!==undefined){
          this.#writeVisual(slot,record);
          matricesDirty=true;
        }
      }
      if(this.updatesThisFrame>=ACTORS.updateBudgetPerFrame)break;
    }

    this.peakUpdatesPerFrame=Math.max(this.peakUpdatesPerFrame,this.updatesThisFrame);

    if(matricesDirty){
      this.bodies.instanceMatrix.needsUpdate=true;
      this.heads.instanceMatrix.needsUpdate=true;
    }
  }

  stateSnapshot(id){
    const r=this.store.get(id);
    if(!r)return null;
    return Object.freeze({
      id:r.id,cx:r.cx,cz:r.cz,x:r.x,z:r.z,heading:r.heading,speed:r.speed,phase:r.phase,ticks:r.ticks,lod:r.lod
    });
  }

  snapshot(){
    const store=this.store.snapshot();
    const averageByLod={
      NEAR:this.activeByLod.NEAR?this.updatesByLod.NEAR/this.activeByLod.NEAR:0,
      MID:this.activeByLod.MID?this.updatesByLod.MID/this.activeByLod.MID:0,
      FAR:this.activeByLod.FAR?this.updatesByLod.FAR/this.activeByLod.FAR:0
    };

    return Object.freeze({
      activeActors:this.activeIds.length,
      visualBindings:this.slotById.size,
      poolCapacity:ACTORS.activeCapacity,
      poolReallocations:this.poolReallocations,
      activeChunks:this.activeChunkKeys.size,
      activeByLod:Object.freeze({...this.activeByLod}),
      updatesThisFrame:this.updatesThisFrame,
      peakUpdatesPerFrame:this.peakUpdatesPerFrame,
      updateBudget:ACTORS.updateBudgetPerFrame,
      totalUpdates:this.totalUpdates,
      updatesByLod:Object.freeze({...this.updatesByLod}),
      averageUpdatesByLod:Object.freeze(averageByLod),
      activations:this.activations,
      deactivations:this.deactivations,
      reactivations:this.reactivations,
      restoredEntities:this.restoredEntities,
      visualRebinds:this.visualRebinds,
      duplicateIds:new Set(this.activeIds).size===this.activeIds.length?0:this.activeIds.length-new Set(this.activeIds).size,
      store
    });
  }

  dispose(){
    this.root.remove(this.actorRoot);
    this.slotById.clear();
    this.activeIds.length=0;
    this.activeChunkKeys.clear();
    this.seenChunkKeys.clear();
  }
}
