import * as THREE from 'three';

export class PlayerTestScene{
  constructor(resources){
    this.scene=new THREE.Scene();this.scene.background=new THREE.Color(0x8faebc);this.scene.fog=new THREE.Fog(0x8faebc,34,90);
    this.camera=new THREE.PerspectiveCamera(56,1,.1,160);
    this.playerRoot=new THREE.Group();this.scene.add(this.playerRoot);
    this.obstacles=[
      {x:-5,z:-4,r:1.1,height:5.8},
      {x:5,z:-7,r:1.25,height:6.5},
      {x:8,z:4,r:1.0,height:5.2},
      {x:-8,z:6,r:1.4,height:6.8}
    ];
    const hemi=new THREE.HemisphereLight(0xddeeff,0x3f4c39,2.1);this.scene.add(hemi);
    const sun=new THREE.DirectionalLight(0xffdfae,2.8);sun.position.set(-10,15,9);this.scene.add(sun);
    const groundGeo=resources.own(new THREE.PlaneGeometry(70,70,1,1)),groundMat=resources.own(new THREE.MeshStandardMaterial({color:0x739266,roughness:1}));
    const ground=new THREE.Mesh(groundGeo,groundMat);ground.rotation.x=-Math.PI/2;ground.receiveShadow=true;this.scene.add(ground);
    const pillarGeo=resources.own(new THREE.CylinderGeometry(.9,1.15,1,10)),pillarMat=resources.own(new THREE.MeshStandardMaterial({color:0x6d655b,roughness:.94}));
    for(const o of this.obstacles){const m=new THREE.Mesh(pillarGeo,pillarMat);m.position.set(o.x,o.height/2,o.z);m.scale.y=o.height;this.scene.add(m);}
    const markerMat=resources.own(new THREE.MeshStandardMaterial({color:0xd9b55f,roughness:.7})),markerGeo=resources.own(new THREE.TorusGeometry(2.6,.08,8,36));
    const marker=new THREE.Mesh(markerGeo,markerMat);marker.rotation.x=Math.PI/2;marker.position.y=.04;this.scene.add(marker);
  }
}
