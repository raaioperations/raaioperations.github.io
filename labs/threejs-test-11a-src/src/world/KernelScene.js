import * as THREE from 'three';

export class KernelScene {
  constructor(resources) {
    this.resources = resources;
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x8fb3c9);
    this.scene.fog = new THREE.Fog(0x8fb3c9, 28, 70);

    this.camera = new THREE.PerspectiveCamera(58, 1, 0.1, 140);
    this.camera.position.set(9, 7, 12);
    this.camera.lookAt(0, 1.2, 0);

    const hemi = new THREE.HemisphereLight(0xdcecff, 0x384536, 2.0);
    this.scene.add(hemi);

    const key = new THREE.DirectionalLight(0xffe0ae, 2.6);
    key.position.set(-8, 14, 7);
    this.scene.add(key);

    const groundGeometry = resources.own(new THREE.PlaneGeometry(70, 70, 1, 1));
    const groundMaterial = resources.own(new THREE.MeshStandardMaterial({
      color: 0x78966a,
      roughness: 1,
      metalness: 0
    }));
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2;
    this.scene.add(ground);

    const beaconMaterial = resources.own(new THREE.MeshStandardMaterial({
      color: 0xd6a65a,
      roughness: 0.48,
      metalness: 0.05
    }));
    const beaconGeometry = resources.own(new THREE.IcosahedronGeometry(1.35, 2));
    this.beacon = new THREE.Mesh(beaconGeometry, beaconMaterial);
    this.beacon.position.set(0, 2.0, 0);
    this.scene.add(this.beacon);

    const ringGeometry = resources.own(new THREE.TorusGeometry(2.4, 0.11, 10, 40));
    const ringMaterial = resources.own(new THREE.MeshStandardMaterial({
      color: 0x415f78,
      roughness: 0.7,
      metalness: 0
    }));
    this.ring = new THREE.Mesh(ringGeometry, ringMaterial);
    this.ring.position.y = 1.65;
    this.ring.rotation.x = Math.PI / 2;
    this.scene.add(this.ring);

    const pillarGeometry = resources.own(new THREE.CylinderGeometry(0.34, 0.52, 3.5, 8));
    const pillarMaterial = resources.own(new THREE.MeshStandardMaterial({
      color: 0x6a6257,
      roughness: 0.94
    }));

    for (const [x, z, scale] of [[-7, -4, 1], [6, -7, 0.82], [8, 6, 1.12], [-8, 7, 0.92]]) {
      const pillar = new THREE.Mesh(pillarGeometry, pillarMaterial);
      pillar.position.set(x, 1.75 * scale, z);
      pillar.scale.y = scale;
      this.scene.add(pillar);
    }
  }

  update({ elapsed }) {
    this.beacon.rotation.y = elapsed * 0.35;
    this.beacon.rotation.x = Math.sin(elapsed * 0.32) * 0.08;
    this.ring.rotation.z = elapsed * -0.14;
  }
}
