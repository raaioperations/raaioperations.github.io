import * as THREE from 'three';
import {QUALITY,WORLD} from '../config.js';
import {
  chunkCenter,chunkCoord,createChunkTerrainGeometry,generateChunkVegetation,updateChunkTerrainGeometry
} from './Terrain.js';

function lodForOffset(dx,dz){
  if(dx===0&&dz===0)return 'NEAR';
  if(Math.abs(dx)+Math.abs(dz)===1)return 'MID';
  return 'FAR';
}

function lodCounts(lod,density){
  const base=lod==='NEAR'
    ?{trees:WORLD.maxTreesPerChunk,shrubs:WORLD.maxShrubsPerChunk}
    :lod==='MID'
      ?{trees:5,shrubs:4}
      :{trees:3,shrubs:0};
  return {
    trees:Math.max(lod==='FAR'?1:2,Math.round(base.trees*density)),
    shrubs:Math.max(0,Math.round(base.shrubs*density))
  };
}

export class ChunkManager{
  constructor({root,resources,spatialIndex,quality}){
    this.root=root;this.resources=resources;this.spatialIndex=spatialIndex;this.quality=quality;
    this.currentCX=Infinity;this.currentCZ=Infinity;this.lastTier='';
    this.reassignments=0;this.refreshes=0;this.visibleVegetationChunks=0;
    this.lodCounts={NEAR:0,MID:0,FAR:0};

    this.terrainMaterial=resources.own(new THREE.MeshStandardMaterial({
      color:0x7a9163,roughness:.98,metalness:0
    }));
    this.trunkGeometry=resources.own(new THREE.CylinderGeometry(.16,.24,2.8,6,1));
    this.crownGeometry=resources.own(new THREE.IcosahedronGeometry(1.05,0));
    this.shrubGeometry=resources.own(new THREE.IcosahedronGeometry(.48,0));
    this.trunkMaterial=resources.own(new THREE.MeshStandardMaterial({color:0x5c4938,roughness:.96}));
    this.crownMaterial=resources.own(new THREE.MeshStandardMaterial({color:0x587a4e,roughness:.94}));
    this.shrubMaterial=resources.own(new THREE.MeshStandardMaterial({color:0x68875a,roughness:.97}));

    this.slots=Array.from({length:WORLD.activeChunkCount},(_,index)=>this.#createSlot(index));
  }

  #createSlot(index){
    const group=new THREE.Group();
    group.name='ChunkSlot-'+index;

    const terrainGeometry=this.resources.own(createChunkTerrainGeometry());
    const terrain=new THREE.Mesh(terrainGeometry,this.terrainMaterial);
    terrain.name='Terrain';
    group.add(terrain);

    const vegetationRoot=new THREE.Group();
    vegetationRoot.name='Vegetation';
    const trunks=new THREE.InstancedMesh(this.trunkGeometry,this.trunkMaterial,WORLD.maxTreesPerChunk);
    const crowns=new THREE.InstancedMesh(this.crownGeometry,this.crownMaterial,WORLD.maxTreesPerChunk);
    const shrubs=new THREE.InstancedMesh(this.shrubGeometry,this.shrubMaterial,WORLD.maxShrubsPerChunk);
    trunks.name='Trunks';crowns.name='Crowns';shrubs.name='Shrubs';
    trunks.frustumCulled=true;crowns.frustumCulled=true;shrubs.frustumCulled=true;
    vegetationRoot.add(trunks,crowns,shrubs);
    group.add(vegetationRoot);
    this.root.add(group);

    return {
      index,owner:'chunk-slot-'+index,group,terrain,terrainGeometry,vegetationRoot,trunks,crowns,shrubs,
      cx:Infinity,cz:Infinity,lod:'FAR',treeCount:0,shrubCount:0
    };
  }

  #assign(slot,cx,cz,lod){
    this.spatialIndex.removeOwner(slot.owner);
    slot.cx=cx;slot.cz=cz;slot.lod=lod;
    slot.group.position.set(chunkCenter(cx),0,chunkCenter(cz));
    updateChunkTerrainGeometry(slot.terrainGeometry,cx,cz);

    const layout=generateChunkVegetation(cx,cz);
    const counts=lodCounts(lod,QUALITY[this.quality.tier].densityScale);
    const dummy=new THREE.Object3D();

    slot.treeCount=Math.min(counts.trees,layout.trees.length);
    slot.shrubCount=Math.min(counts.shrubs,layout.shrubs.length);
    slot.trunks.count=slot.treeCount;
    slot.crowns.count=slot.treeCount;
    slot.shrubs.count=slot.shrubCount;

    for(let i=0;i<slot.treeCount;i++){
      const item=layout.trees[i];
      dummy.position.set(item.localX,item.y+1.4*item.scale,item.localZ);
      dummy.rotation.set(0,item.yaw,0);
      dummy.scale.setScalar(item.scale);
      dummy.updateMatrix();
      slot.trunks.setMatrixAt(i,dummy.matrix);

      dummy.position.set(item.localX,item.y+(3.25+item.variant*.18)*item.scale,item.localZ);
      dummy.rotation.set(0,item.yaw*.7,0);
      dummy.scale.set(item.scale*(1+item.variant*.08),item.scale*(1.15-item.variant*.05),item.scale);
      dummy.updateMatrix();
      slot.crowns.setMatrixAt(i,dummy.matrix);

      this.spatialIndex.insert(
        {x:item.x,z:item.z,r:.30*item.scale,height:item.y+4.5*item.scale,type:'tree'},
        {owner:slot.owner}
      );
    }

    for(let i=0;i<slot.shrubCount;i++){
      const item=layout.shrubs[i];
      dummy.position.set(item.localX,item.y+.34*item.scale,item.localZ);
      dummy.rotation.set(0,item.yaw,0);
      dummy.scale.set(item.scale*1.35,item.scale*.72,item.scale);
      dummy.updateMatrix();
      slot.shrubs.setMatrixAt(i,dummy.matrix);
    }

    for(const mesh of [slot.trunks,slot.crowns,slot.shrubs]){
      mesh.instanceMatrix.needsUpdate=true;
      mesh.computeBoundingBox?.();
      mesh.computeBoundingSphere?.();
    }
    this.reassignments++;
  }

  refresh(playerX,playerZ,{force=false}={}){
    const cx=chunkCoord(playerX),cz=chunkCoord(playerZ);
    const tier=this.quality.tier;
    if(!force&&cx===this.currentCX&&cz===this.currentCZ&&tier===this.lastTier)return false;

    this.currentCX=cx;this.currentCZ=cz;this.lastTier=tier;
    this.lodCounts={NEAR:0,MID:0,FAR:0};

    let slotIndex=0;
    for(let dz=-WORLD.activeRadius;dz<=WORLD.activeRadius;dz++){
      for(let dx=-WORLD.activeRadius;dx<=WORLD.activeRadius;dx++){
        const lod=lodForOffset(dx,dz);
        this.lodCounts[lod]++;
        this.#assign(this.slots[slotIndex++],cx+dx,cz+dz,lod);
      }
    }
    this.refreshes++;
    return true;
  }

  updateCulling(cameraPosition){
    const maxDistance=QUALITY[this.quality.tier].farVegetationDistance;
    let visible=0;
    for(const slot of this.slots){
      const dx=cameraPosition.x-slot.group.position.x;
      const dz=cameraPosition.z-slot.group.position.z;
      const distance=Math.hypot(dx,dz);
      const visibleNow=distance<=maxDistance;
      slot.vegetationRoot.visible=visibleNow;
      if(visibleNow)visible++;
    }
    this.visibleVegetationChunks=visible;
  }

  dispose(){
    for(const slot of this.slots){
      this.spatialIndex.removeOwner(slot.owner);
      this.root.remove(slot.group);
    }
    this.slots.length=0;
  }

  snapshot(){
    let trees=0,shrubs=0;
    for(const slot of this.slots){trees+=slot.treeCount;shrubs+=slot.shrubCount;}
    return Object.freeze({
      active:this.slots.length,
      poolSize:this.slots.length,
      center:[this.currentCX,this.currentCZ],
      refreshes:this.refreshes,
      reassignments:this.reassignments,
      visibleVegetationChunks:this.visibleVegetationChunks,
      lod:Object.freeze({...this.lodCounts}),
      trees,shrubs,
      qualityTier:this.quality.tier
    });
  }
}
