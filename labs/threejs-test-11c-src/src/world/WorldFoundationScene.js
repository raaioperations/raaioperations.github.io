import * as THREE from 'three';
import {WORLD} from '../config.js';
import {createTerrainGeometry,generateVegetationLayout,heightAt} from './Terrain.js';
import {createVegetation} from './Vegetation.js';

const AUTHORED=Object.freeze([
  {url:'./assets/rock_c_hero_boulder.glb',x:-17,z:-6,scale:1.15,yaw:.45,r:1.7,height:3.0},
  {url:'./assets/tree_e_windswept.glb',x:18,z:9,scale:1.12,yaw:-.75,r:.55,height:7.0},
  {url:'./assets/ruin_windcut_fragment_a.glb',x:13,z:-18,scale:1.02,yaw:.18,r:1.1,height:8.0},
  {url:'./assets/deadwood_windswept_a.glb',x:-8,z:-20,scale:1.08,yaw:-.4,r:.45,height:7.3}
]);

function createSky(resources){
  const geometry=resources.own(new THREE.SphereGeometry(110,24,12));
  const position=geometry.attributes.position;
  const colors=new Float32Array(position.count*3);
  const horizon=new THREE.Color(0xa8c9d7);
  const zenith=new THREE.Color(0x567ba3);
  const low=new THREE.Color(0xd6c5a6);
  const c=new THREE.Color();
  for(let i=0;i<position.count;i++){
    const y=position.getY(i)/110;
    if(y>=0)c.copy(horizon).lerp(zenith,Math.min(1,y));
    else c.copy(horizon).lerp(low,Math.min(1,-y*.9));
    colors[i*3]=c.r;colors[i*3+1]=c.g;colors[i*3+2]=c.b;
  }
  geometry.setAttribute('color',new THREE.BufferAttribute(colors,3));
  const material=resources.own(new THREE.MeshBasicMaterial({vertexColors:true,side:THREE.BackSide,fog:false,depthWrite:false}));
  return new THREE.Mesh(geometry,material);
}

export class WorldFoundationScene{
  constructor(resources){
    this.resources=resources;
    this.scene=new THREE.Scene();
    this.scene.background=new THREE.Color(0x9bb9c8);
    this.scene.fog=new THREE.FogExp2(0x9bb9c8,.0115);
    this.camera=new THREE.PerspectiveCamera(56,1,.1,180);
    this.root=new THREE.Group();
    this.root.name='CopperwashReach';
    this.scene.add(this.root);
    this.obstacles=[];
    this.authoredModels=[];
    this.authoredLoaded=0;
    this.authoredErrors=[];

    this.sky=createSky(resources);
    this.scene.add(this.sky);

    this.hemi=new THREE.HemisphereLight(0xe5f2ff,0x4e5843,2.05);
    this.scene.add(this.hemi);
    this.sun=new THREE.DirectionalLight(0xffd9a3,3.0);
    this.sun.position.set(-18,26,14);
    this.scene.add(this.sun);

    const terrainGeometry=createTerrainGeometry(resources);
    const terrainMaterial=resources.own(new THREE.MeshStandardMaterial({
      color:0x7a9163,
      roughness:.98,
      metalness:0
    }));
    this.terrain=new THREE.Mesh(terrainGeometry,terrainMaterial);
    this.terrain.name='CopperwashTerrain';
    this.root.add(this.terrain);

    const waterGeometry=resources.own(new THREE.CircleGeometry(WORLD.waterRadius,48));
    const waterMaterial=resources.own(new THREE.MeshPhysicalMaterial({
      color:0x477f92,
      roughness:.22,
      metalness:0,
      transparent:true,
      opacity:.72,
      depthWrite:false,
      clearcoat:.35,
      clearcoatRoughness:.28
    }));
    this.water=new THREE.Mesh(waterGeometry,waterMaterial);
    this.water.name='CopperwashWater';
    this.water.rotation.x=-Math.PI/2;
    this.water.position.set(WORLD.waterCenterX,WORLD.waterLevel,WORLD.waterCenterZ);
    this.root.add(this.water);

    this.vegetationLayout=generateVegetationLayout();
    this.vegetation=createVegetation({
      root:this.root,
      resources,
      layout:this.vegetationLayout,
      obstacles:this.obstacles
    });

    this.playerRoot=new THREE.Group();
    this.playerRoot.name='PlayerRoot';
    this.playerRoot.position.set(
      WORLD.playerSpawnX,
      heightAt(WORLD.playerSpawnX,WORLD.playerSpawnZ),
      WORLD.playerSpawnZ
    );
    this.scene.add(this.playerRoot);
  }

  groundHeight(x,z){return heightAt(x,z);}

  async loadAuthoredAssets(assetManager){
    const loaded=[];
    for(const spec of AUTHORED){
      try{
        const gltf=await assetManager.loadGLTF(spec.url);
        const model=gltf.scene;
        model.position.set(spec.x,heightAt(spec.x,spec.z),spec.z);
        model.rotation.y=spec.yaw;
        model.scale.setScalar(spec.scale);
        model.traverse(obj=>{
          if(obj.isMesh){obj.castShadow=false;obj.receiveShadow=true;}
        });
        this.root.add(model);
        this.authoredModels.push(model);
        this.obstacles.push({x:spec.x,z:spec.z,r:spec.r*spec.scale,height:heightAt(spec.x,spec.z)+spec.height*spec.scale});
        this.authoredLoaded++;
        loaded.push(model);
      }catch(error){
        this.authoredErrors.push({url:spec.url,error:error?.message||String(error)});
        throw error;
      }
    }
    return loaded;
  }

  update({elapsed}){
    this.water.position.y=WORLD.waterLevel+Math.sin(elapsed*.55)*.018;
    this.water.material.opacity=.70+Math.sin(elapsed*.37)*.025;
  }

  snapshot(){
    const bbox=this.terrain.geometry.boundingBox;
    return Object.freeze({
      name:WORLD.name,
      seed:WORLD.seed,
      authoredLoaded:this.authoredLoaded,
      authoredExpected:AUTHORED.length,
      authoredErrors:this.authoredErrors.length,
      trees:this.vegetation.treeCount,
      shrubs:this.vegetation.shrubCount,
      water:true,
      terrainMinY:bbox?.min.y??0,
      terrainMaxY:bbox?.max.y??0,
      terrainTriangles:this.terrain.geometry.index?this.terrain.geometry.index.count/3:this.terrain.geometry.attributes.position.count/3
    });
  }

  dispose(){
    for(const model of this.authoredModels){
      this.root.remove(model);
      this.resources.disposeObject3D(model);
    }
    this.authoredModels.length=0;
  }
}
