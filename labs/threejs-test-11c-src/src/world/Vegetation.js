import * as THREE from 'three';

export function createVegetation({root,resources,layout,obstacles}){
  const trunkGeometry=resources.own(new THREE.CylinderGeometry(.16,.24,2.8,6,1));
  const crownGeometry=resources.own(new THREE.IcosahedronGeometry(1.05,0));
  const shrubGeometry=resources.own(new THREE.IcosahedronGeometry(.48,0));

  const trunkMaterial=resources.own(new THREE.MeshStandardMaterial({color:0x5c4938,roughness:.96}));
  const crownMaterial=resources.own(new THREE.MeshStandardMaterial({color:0x587a4e,roughness:.94}));
  const shrubMaterial=resources.own(new THREE.MeshStandardMaterial({color:0x68875a,roughness:.97}));

  const trunks=new THREE.InstancedMesh(trunkGeometry,trunkMaterial,layout.trees.length);
  const crowns=new THREE.InstancedMesh(crownGeometry,crownMaterial,layout.trees.length);
  const shrubs=new THREE.InstancedMesh(shrubGeometry,shrubMaterial,layout.shrubs.length);
  trunks.frustumCulled=true;crowns.frustumCulled=true;shrubs.frustumCulled=true;

  const dummy=new THREE.Object3D();

  for(let i=0;i<layout.trees.length;i++){
    const item=layout.trees[i];
    dummy.position.set(item.x,item.y+1.4*item.scale,item.z);
    dummy.rotation.set(0,item.yaw,0);
    dummy.scale.set(item.scale,item.scale,item.scale);
    dummy.updateMatrix();
    trunks.setMatrixAt(i,dummy.matrix);

    dummy.position.set(item.x,item.y+(3.25+item.variant*.18)*item.scale,item.z);
    dummy.rotation.set(0,item.yaw*.7,0);
    dummy.scale.set(item.scale*(1.0+item.variant*.08),item.scale*(1.15-item.variant*.05),item.scale);
    dummy.updateMatrix();
    crowns.setMatrixAt(i,dummy.matrix);

    obstacles.push({x:item.x,z:item.z,r:.30*item.scale,height:item.y+4.5*item.scale});
  }

  for(let i=0;i<layout.shrubs.length;i++){
    const item=layout.shrubs[i];
    dummy.position.set(item.x,item.y+.34*item.scale,item.z);
    dummy.rotation.set(0,item.yaw,0);
    dummy.scale.set(item.scale*1.35,item.scale*.72,item.scale);
    dummy.updateMatrix();
    shrubs.setMatrixAt(i,dummy.matrix);
  }

  trunks.instanceMatrix.needsUpdate=true;
  crowns.instanceMatrix.needsUpdate=true;
  shrubs.instanceMatrix.needsUpdate=true;

  root.add(trunks,crowns,shrubs);

  return Object.freeze({
    treeCount:layout.trees.length,
    shrubCount:layout.shrubs.length,
    drawCalls:3
  });
}
