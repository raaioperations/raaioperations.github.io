import * as THREE from 'three';
import {WORLD} from '../config.js';
import {heightAt} from './Terrain.js';
import {ChunkManager} from './ChunkManager.js';

const AUTHORED=Object.freeze([
  {url:'./assets/rock_c_hero_boulder.glb',x:-17,z:-6,scale:1.15,yaw:.45,r:1.7,height:3.0},
  {url:'./assets/rock_c_hero_boulder.glb',x:4,z:15,scale:.82,yaw:1.1,r:1.4,height:2.4},
  {url:'./assets/rock_c_hero_boulder.glb',x:22,z:-3,scale:.70,yaw:-.6,r:1.2,height:2.1},
  {url:'./assets/tree_e_windswept.glb',x:18,z:9,scale:1.12,yaw:-.75,r:.55,height:7.0},
  {url:'./assets/ruin_windcut_fragment_a.glb',x:13,z:-18,scale:1.02,yaw:.18,r:1.1,height:8.0},
  {url:'./assets/deadwood_windswept_a.glb',x:-8,z:-20,scale:1.08,yaw:-.4,r:.45,height:7.3}
]);

function createSky(resources){
  const geometry=resources.own(new THREE.SphereGeometry(120,24,12));
  const pos=geometry.attributes.position;
  const colors=new Float32Array(pos.count*3);
  const horizon=new THREE.Color(0xa8c9d7),zenith=new THREE.Color(0x567ba3),low=new THREE.Color(0xd6c5a6),c=new THREE.Color();
  for(let i=0;i<pos.count;i++){
    const y=pos.getY(i)/120;
    if(y>=0)c.copy(horizon).lerp(zenith,Math.min(1,y));
    else c.copy(horizon).lerp(low,Math.min(1,-y*.9));
    colors[i*3]=c.r;colors[i*3+1]=c.g;colors[i*3+2]=c.b;
  }
  geometry.setAttribute('color',new THREE.BufferAttribute(colors,3));
  const material=resources.own(new THREE.MeshBasicMaterial({vertexColors:true,side:THREE.BackSide,fog:false,depthWrite:false}));
  return new THREE.Mesh(geometry,material);
}

export class ProductionWorldScene{
  constructor({resources,spatialIndex,quality}){
    this.resources=resources;this.spatialIndex=spatialIndex;this.quality=quality;
    this.scene=new THREE.Scene();
    this.scene.background=new THREE.Color(0x9bb9c8);
    this.scene.fog=new THREE.FogExp2(0x9bb9c8,.0115);
    this.camera=new THREE.PerspectiveCamera(56,1,.1,190);

    this.root=new THREE.Group();
    this.root.name='CopperwashProductionWorld';
    this.scene.add(this.root);

    this.sky=createSky(resources);
    this.scene.add(this.sky);
    this.hemi=new THREE.HemisphereLight(0xe5f2ff,0x4e5843,2.05);
    this.scene.add(this.hemi);
    this.sun=new THREE.DirectionalLight(0xffd9a3,3.0);
    this.sun.position.set(-18,26,14);
    this.scene.add(this.sun);

    const waterGeometry=resources.own(new THREE.CircleGeometry(WORLD.waterRadius,48));
    const waterMaterial=resources.own(new THREE.MeshPhysicalMaterial({
      color:0x477f92,roughness:.22,metalness:0,transparent:true,opacity:.72,depthWrite:false,
      clearcoat:.35,clearcoatRoughness:.28
    }));
    this.water=new THREE.Mesh(waterGeometry,waterMaterial);
    this.water.rotation.x=-Math.PI/2;
    this.water.position.set(WORLD.waterCenterX,WORLD.waterLevel,WORLD.waterCenterZ);
    this.root.add(this.water);

    this.chunkManager=new ChunkManager({
      root:this.root,resources:this.resources,spatialIndex:this.spatialIndex,quality:this.quality
    });

    this.playerRoot=new THREE.Group();
    this.playerRoot.name='PlayerRoot';
    this.playerRoot.position.set(WORLD.playerSpawnX,heightAt(WORLD.playerSpawnX,WORLD.playerSpawnZ),WORLD.playerSpawnZ);
    this.scene.add(this.playerRoot);

    this.authoredModels=[];
    this.authoredLoaded=0;
    this.authoredErrors=[];
    this.chunkManager.refresh(this.playerRoot.position.x,this.playerRoot.position.z,{force:true});
  }

  groundHeight(x,z){return heightAt(x,z);}

  async loadAuthoredAssets(assetManager){
    for(let i=0;i<AUTHORED.length;i++){
      const spec=AUTHORED[i];
      try{
        const instance=await assetManager.instantiateGLTF(spec.url);
        const model=instance.scene;
        model.position.set(spec.x,heightAt(spec.x,spec.z),spec.z);
        model.rotation.y=spec.yaw;model.scale.setScalar(spec.scale);
        model.traverse(obj=>{if(obj.isMesh){obj.castShadow=false;obj.receiveShadow=true;}});
        this.root.add(model);
        this.authoredModels.push(model);
        this.spatialIndex.insert({
          x:spec.x,z:spec.z,r:spec.r*spec.scale,
          height:heightAt(spec.x,spec.z)+spec.height*spec.scale,type:'authored'
        },{owner:'authored'});
        this.authoredLoaded++;
      }catch(error){
        this.authoredErrors.push({url:spec.url,error:error?.message||String(error)});
        throw error;
      }
    }
    return this.authoredModels;
  }

  updateStreaming(playerPosition){
    return this.chunkManager.refresh(playerPosition.x,playerPosition.z);
  }

  applyQualityTier(){
    this.chunkManager.refresh(this.playerRoot.position.x,this.playerRoot.position.z,{force:true});
  }

  updatePresentation({elapsed},cameraPosition){
    this.water.position.y=WORLD.waterLevel+Math.sin(elapsed*.55)*.018;
    this.water.material.opacity=.70+Math.sin(elapsed*.37)*.025;
    this.chunkManager.updateCulling(cameraPosition);
  }

  snapshot(){
    return Object.freeze({
      name:WORLD.name,
      authoredLoaded:this.authoredLoaded,
      authoredExpected:AUTHORED.length,
      authoredErrors:this.authoredErrors.length,
      water:true,
      chunks:this.chunkManager.snapshot(),
      spatial:this.spatialIndex.snapshot()
    });
  }

  dispose(){
    this.chunkManager.dispose();
    this.spatialIndex.removeOwner('authored');
    for(const model of this.authoredModels)this.root.remove(model);
    this.authoredModels.length=0;
  }
}
