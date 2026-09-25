import * as THREE from 'three';
import {WORLD} from '../config.js';

export function heightAt(x,z){
  const broad=
    Math.sin(x*.055)*.72+
    Math.cos(z*.047)*.58+
    Math.sin((x+z)*.031)*.36+
    Math.cos((x-z)*.024)*.24;
  const ridge=Math.exp(-(((x+18)*(x+18))/230+((z-8)*(z-8))/150))*1.35;
  const lakeDx=x-WORLD.waterCenterX;
  const lakeDz=z-WORLD.waterCenterZ;
  const lakeDepression=Math.exp(-(lakeDx*lakeDx+lakeDz*lakeDz)/115)*2.25;
  return broad+ridge-lakeDepression;
}

export function mulberry32(seed){
  let a=seed>>>0;
  return ()=>{
    a|=0;a=a+0x6D2B79F5|0;
    let t=Math.imul(a^a>>>15,1|a);
    t=t+Math.imul(t^t>>>7,61|t)^t;
    return ((t^t>>>14)>>>0)/4294967296;
  };
}

export function createTerrainGeometry(resources){
  const geometry=resources.own(new THREE.PlaneGeometry(WORLD.size,WORLD.size,WORLD.terrainSegments,WORLD.terrainSegments));
  geometry.rotateX(-Math.PI/2);
  const position=geometry.attributes.position;
  for(let i=0;i<position.count;i++){
    const x=position.getX(i),z=position.getZ(i);
    position.setY(i,heightAt(x,z));
  }
  position.needsUpdate=true;
  geometry.computeVertexNormals();
  geometry.computeBoundingBox();
  geometry.computeBoundingSphere();
  return geometry;
}

export function generateVegetationLayout(){
  const rng=mulberry32(WORLD.seed);
  const trees=[];
  const shrubs=[];
  const half=WORLD.size*.43;

  const nextPoint=(kind,index)=>{
    for(let attempt=0;attempt<80;attempt++){
      const x=(rng()*2-1)*half;
      const z=(rng()*2-1)*half;
      const waterDist=Math.hypot(x-WORLD.waterCenterX,z-WORLD.waterCenterZ);
      const spawnDist=Math.hypot(x-WORLD.playerSpawnX,z-WORLD.playerSpawnZ);
      if(waterDist<WORLD.waterRadius+2.5||spawnDist<5.5)continue;
      return {
        x,z,
        y:heightAt(x,z),
        yaw:rng()*Math.PI*2,
        scale:kind==='tree'?.76+rng()*.62:.62+rng()*.70,
        variant:index%3
      };
    }
    throw new Error('Unable to place deterministic vegetation');
  };

  for(let i=0;i<WORLD.treeCount;i++)trees.push(nextPoint('tree',i));
  for(let i=0;i<WORLD.shrubCount;i++)shrubs.push(nextPoint('shrub',i));
  return Object.freeze({trees:Object.freeze(trees),shrubs:Object.freeze(shrubs)});
}
