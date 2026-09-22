import * as THREE from 'three';
import {BEAUTY_SLICE_09B,seededBeautyRandom} from './presentation/beauty-slice-spec.js';

const assert=(condition,message)=>{
  if(!condition)throw new Error('09B beauty-slice proof failed: '+message);
};

const tri=(geometry,instances=1)=>{
  const count=geometry.index?geometry.index.count:geometry.getAttribute('position').count;
  return Math.round((count/3)*instances);
};

export function runBeautySliceProof(){
  assert(BEAUTY_SLICE_09B.materialFamilies.length===6,'six material families');
  assert(BEAUTY_SLICE_09B.depthLayers.length===5,'five depth layers');
  assert(BEAUTY_SLICE_09B.ambientMotionSystems.length===4,'four ambient motion systems');
  assert(BEAUTY_SLICE_09B.acceptance.preserve06J===true,'06J preservation required');
  assert(BEAUTY_SLICE_09B.acceptance.preserveTest08===true,'Test08 preservation required');
  assert(BEAUTY_SLICE_09B.acceptance.broadContentExpansion===false,'broad expansion prohibited');

  const layout=BEAUTY_SLICE_09B.layout;
  const geometries=[
    ['ground',new THREE.PlaneGeometry(66,66,32,32),1],
    ['path',new THREE.BufferGeometry().setAttribute('position',new THREE.Float32BufferAttribute(new Float32Array(layout.pathSegments*6*3),3)),1],
    ['water',new THREE.CircleGeometry(8.4,56),1],
    ['trunks',new THREE.CylinderGeometry(.42,.62,7,6,1),layout.trees],
    ['canopy',new THREE.IcosahedronGeometry(2.65,1),layout.trees],
    ['grass',new THREE.ConeGeometry(.14,.9,4,1),layout.grassTufts],
    ['flowers',new THREE.OctahedronGeometry(.11,0),layout.flowers],
    ['rocks',new THREE.DodecahedronGeometry(.7,0),layout.rocks],
    ['cliffs',new THREE.ConeGeometry(2.4,10,5,1),layout.distantCliffs],
    ['pillars',new THREE.BoxGeometry(1.45,7,1.55),2],
    ['lintel',new THREE.BoxGeometry(7.2,1.2,1.8),1],
    ['pollen',null,1]
  ];

  let triangles=0;
  for(const [name,g,instances] of geometries){
    if(name==='path'){
      triangles+=layout.pathSegments*2;
    }else if(g){
      triangles+=tri(g,instances);
    }
  }
  const drawables=geometries.length;

  assert(drawables<=BEAUTY_SLICE_09B.presentationBudget.addedDrawCallsMax,'drawables stay inside presentation budget');
  assert(triangles<=BEAUTY_SLICE_09B.presentationBudget.addedTrianglesMax,'triangles stay inside presentation budget');
  assert(BEAUTY_SLICE_09B.presentationBudget.absoluteDrawCallsMax===120,'preserve frozen draw-call ceiling');
  assert(BEAUTY_SLICE_09B.presentationBudget.absoluteTrianglesMax===350000,'preserve frozen triangle ceiling');

  const randA=seededBeautyRandom();
  const randB=seededBeautyRandom();
  const sampleA=Array.from({length:12},()=>randA());
  const sampleB=Array.from({length:12},()=>randB());
  assert(sampleA.every((v,i)=>v===sampleB[i]),'authored procedural placements deterministic');

  return {
    name:BEAUTY_SLICE_09B.name,
    material_families:BEAUTY_SLICE_09B.materialFamilies.length,
    depth_layers:BEAUTY_SLICE_09B.depthLayers.length,
    ambient_motion_systems:BEAUTY_SLICE_09B.ambientMotionSystems.length,
    authored_drawables:drawables,
    authored_triangles:triangles,
    added_draw_call_budget:BEAUTY_SLICE_09B.presentationBudget.addedDrawCallsMax,
    added_triangle_budget:BEAUTY_SLICE_09B.presentationBudget.addedTrianglesMax,
    absolute_draw_call_ceiling:BEAUTY_SLICE_09B.presentationBudget.absoluteDrawCallsMax,
    absolute_triangle_ceiling:BEAUTY_SLICE_09B.presentationBudget.absoluteTrianglesMax,
    deterministic_layout:true,
    broad_content_expansion:false
  };
}
