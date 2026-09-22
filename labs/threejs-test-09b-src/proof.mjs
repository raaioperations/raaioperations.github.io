import * as THREE from 'three';
import {BEAUTY_SLICE_09B,seededBeautyRandom} from './presentation/beauty-slice-spec.js';

const assert=(condition,message)=>{
  if(!condition)throw new Error('09B beauty-slice proof failed: '+message);
};

const tri=(geometry,instances=1)=>{
  const count=geometry.index?geometry.index.count:geometry.getAttribute('position').count;
  return Math.round((count/3)*instances);
};

function crossedGrassGeometry(){
  const p=new Float32Array([
    -.10,0,0, .10,0,0, -.065,.9,0, .065,.9,0,
    0,0,-.10, 0,0,.10, 0,.9,-.065, 0,.9,.065
  ]);
  const g=new THREE.BufferGeometry();
  g.setAttribute('position',new THREE.BufferAttribute(p,3));
  g.setIndex([0,1,2,1,3,2,4,5,6,5,7,6]);
  return g;
}

export function runBeautySliceProof(){
  assert(BEAUTY_SLICE_09B.version===2,'presentation pass 2 spec required');
  assert(BEAUTY_SLICE_09B.materialFamilies.length===6,'six material families');
  assert(BEAUTY_SLICE_09B.depthLayers.length===5,'five depth layers');
  assert(BEAUTY_SLICE_09B.ambientMotionSystems.length===4,'four ambient motion systems');
  assert(BEAUTY_SLICE_09B.acceptance.automatedProofIsPresentationAcceptance===false,'automation cannot self-accept presentation');
  assert(BEAUTY_SLICE_09B.acceptance.humanPresentationReviewRequired===true,'human presentation review required');
  assert(BEAUTY_SLICE_09B.acceptance.preserve06J===true,'06J preservation required');
  assert(BEAUTY_SLICE_09B.acceptance.preserveTest08===true,'Test08 preservation required');
  assert(BEAUTY_SLICE_09B.acceptance.broadContentExpansion===false,'broad expansion prohibited');

  const l=BEAUTY_SLICE_09B.layout;
  const geometries=[
    ['ground',new THREE.PlaneGeometry(66,66,40,40),1],
    ['path',null,1],
    ['water',new THREE.CircleGeometry(8.4,72),1],
    ['shore',null,1],
    ['trunks',new THREE.CylinderGeometry(.42,.62,7,8,2),l.trees],
    ['canopy',new THREE.IcosahedronGeometry(2.65,1),l.trees],
    ['grass',crossedGrassGeometry(),l.grassTufts],
    ['shrubs',new THREE.DodecahedronGeometry(.7,0),l.shrubs],
    ['flowers',new THREE.OctahedronGeometry(.10,0),l.flowers],
    ['rocks',new THREE.DodecahedronGeometry(.7,0),l.rocks],
    ['ridge',null,1],
    ['gate',new THREE.BoxGeometry(1.25,1.1,1.5),l.gateBlocks],
    ['pollen',null,1]
  ];

  let triangles=0;
  for(const [name,g,instances] of geometries){
    if(name==='path')triangles+=l.pathSegments*2;
    else if(name==='shore')triangles+=l.shoreSegments*2;
    else if(name==='ridge')triangles+=l.ridgeLayers*l.ridgeSegments*3;
    else if(g)triangles+=tri(g,instances);
  }
  const drawables=geometries.length;

  assert(drawables<=BEAUTY_SLICE_09B.presentationBudget.addedDrawCallsMax,'drawables stay inside presentation budget');
  assert(triangles<=BEAUTY_SLICE_09B.presentationBudget.addedTrianglesMax,'triangles stay inside presentation budget');
  assert(BEAUTY_SLICE_09B.presentationBudget.absoluteDrawCallsMax===120,'preserve frozen draw-call ceiling');
  assert(BEAUTY_SLICE_09B.presentationBudget.absoluteTrianglesMax===350000,'preserve frozen triangle ceiling');

  const randA=seededBeautyRandom();
  const randB=seededBeautyRandom();
  const sampleA=Array.from({length:24},()=>randA());
  const sampleB=Array.from({length:24},()=>randB());
  assert(sampleA.every((v,i)=>v===sampleB[i]),'authored procedural placements deterministic');

  return {
    name:BEAUTY_SLICE_09B.name,
    presentation_pass:BEAUTY_SLICE_09B.presentationPass,
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
    automated_presentation_acceptance:false,
    human_presentation_review_required:true,
    broad_content_expansion:false
  };
}
