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

export function chunkSeed(cx,cz){
  let h=WORLD.seed|0;
  h=Math.imul(h^(cx|0),0x45d9f3b);
  h=Math.imul(h^(cz|0),0x119de1f3);
  h^=h>>>16;
  return h>>>0;
}

export function chunkCoord(value){return Math.floor(value/WORLD.chunkSize);}
export function chunkCenter(coord){return (coord+.5)*WORLD.chunkSize;}

export function createChunkTerrainGeometry(){
  const geometry=new THREE.PlaneGeometry(WORLD.chunkSize,WORLD.chunkSize,WORLD.terrainSegments,WORLD.terrainSegments);
  geometry.rotateX(-Math.PI/2);
  return geometry;
}

export function updateChunkTerrainGeometry(geometry,cx,cz){
  const centerX=chunkCenter(cx),centerZ=chunkCenter(cz);
  const position=geometry.attributes.position;
  for(let i=0;i<position.count;i++){
    const wx=centerX+position.getX(i);
    const wz=centerZ+position.getZ(i);
    position.setY(i,heightAt(wx,wz));
  }
  position.needsUpdate=true;
  geometry.computeVertexNormals();
  geometry.computeBoundingBox();
  geometry.computeBoundingSphere();
  return geometry;
}

export function generateChunkVegetation(cx,cz){
  const rng=mulberry32(chunkSeed(cx,cz));
  const centerX=chunkCenter(cx),centerZ=chunkCenter(cz);
  const half=WORLD.chunkSize*.46;
  const trees=[],shrubs=[];

  const point=(kind,index)=>{
    for(let attempt=0;attempt<80;attempt++){
      const localX=(rng()*2-1)*half;
      const localZ=(rng()*2-1)*half;
      const x=centerX+localX,z=centerZ+localZ;
      const waterDist=Math.hypot(x-WORLD.waterCenterX,z-WORLD.waterCenterZ);
      const spawnDist=Math.hypot(x-WORLD.playerSpawnX,z-WORLD.playerSpawnZ);
      if(waterDist<WORLD.waterRadius+2.2||spawnDist<4.8)continue;
      return Object.freeze({
        localX,localZ,x,z,y:heightAt(x,z),
        yaw:rng()*Math.PI*2,
        scale:kind==='tree'?.76+rng()*.58:.62+rng()*.62,
        variant:index%3
      });
    }
    return Object.freeze({localX:0,localZ:0,x:centerX,z:centerZ,y:heightAt(centerX,centerZ),yaw:0,scale:.8,variant:0});
  };

  for(let i=0;i<WORLD.maxTreesPerChunk;i++)trees.push(point('tree',i));
  for(let i=0;i<WORLD.maxShrubsPerChunk;i++)shrubs.push(point('shrub',i));
  return Object.freeze({trees:Object.freeze(trees),shrubs:Object.freeze(shrubs)});
}
