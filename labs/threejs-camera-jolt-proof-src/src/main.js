import * as THREE from 'three';

const $ = (id) => document.getElementById(id);
const stateEl = $('state');
const mx = $('mx'), my = $('my'), mr = $('mr'), mz = $('mz');
const cx = $('cx'), cy = $('cy'), cfov = $('cfov');

const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(devicePixelRatio, 1.8));
renderer.setSize(innerWidth, innerHeight);
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.05;
document.body.prepend(renderer.domElement);

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x8ec9df);
scene.fog = new THREE.Fog(0x9fcbd5, 28, 72);

const camera = new THREE.PerspectiveCamera(53, innerWidth / innerHeight, 0.1, 200);
const basePos = new THREE.Vector3(9.5, 6.2, 13.5);
const target = new THREE.Vector3(0, 1.8, 0);
const baseFov = 53;

scene.add(new THREE.HemisphereLight(0xdcefff, 0x50664c, 2.2));
const sun = new THREE.DirectionalLight(0xffefd3, 3.5);
sun.position.set(-12, 20, 8);
sun.castShadow = false;
scene.add(sun);

const ground = new THREE.Mesh(
  new THREE.PlaneGeometry(80, 80, 1, 1),
  new THREE.MeshStandardMaterial({ color: 0x6f9b5c, roughness: 0.95 })
);
ground.rotation.x = -Math.PI / 2;
scene.add(ground);

const grid = new THREE.GridHelper(80, 40, 0xd8ead1, 0x7d9a73);
grid.position.y = 0.012;
scene.add(grid);

const towerMat = new THREE.MeshStandardMaterial({ color: 0x7f9297, roughness: 0.7, metalness: 0.12 });
const tower = new THREE.Mesh(new THREE.BoxGeometry(3.1, 7.8, 3.1), towerMat);
tower.position.set(0, 3.9, -2.5);
scene.add(tower);
const dome = new THREE.Mesh(new THREE.SphereGeometry(2.35, 28, 18, 0, Math.PI * 2, 0, Math.PI / 2), towerMat);
dome.position.set(0, 7.8, -2.5);
scene.add(dome);

const targetMat = new THREE.MeshStandardMaterial({ color: 0xf1d36b, emissive: 0x5a3a08, emissiveIntensity: 0.35, roughness: 0.45 });
const targetOrb = new THREE.Mesh(new THREE.SphereGeometry(0.85, 28, 20), targetMat);
targetOrb.position.set(0, 1.65, 2.2);
scene.add(targetOrb);
const targetRing = new THREE.Mesh(
  new THREE.TorusGeometry(1.4, 0.07, 12, 64),
  new THREE.MeshBasicMaterial({ color: 0xffffff })
);
targetRing.position.copy(targetOrb.position);
targetRing.rotation.x = Math.PI / 2;
scene.add(targetRing);

const pillarGeo = new THREE.CylinderGeometry(0.45, 0.55, 3.2, 12);
const pillarMat = new THREE.MeshStandardMaterial({ color: 0x66736f, roughness: 0.85 });
for (let z = -18; z <= 16; z += 6) {
  for (const x of [-10, 10]) {
    const p = new THREE.Mesh(pillarGeo, pillarMat);
    p.position.set(x, 1.6, z);
    scene.add(p);
  }
}

const JOLT = {
  25: { duration: 240, ampX: 20, ampY: 12, rotation: 0.68, zoom: 0.018 },
  40: { duration: 300, ampX: 34, ampY: 20, rotation: 1.15, zoom: 0.030 },
  decayPower: 1.65,
  phaseMultiplier: 6.0
};

let active = null;
let rafToken = 0;

function triggerJolt(damage) {
  const key = damage >= 40 ? 40 : 25;
  active = { damage: key, start: performance.now(), token: ++rafToken };
  stateEl.textContent = `JOLT ${key}`;
  stateEl.style.color = key === 40 ? '#ff9b91' : '#ffd18a';
}

function waveform(now) {
  if (!active) return { x: 0, y: 0, rot: 0, scale: 1, done: false };
  const spec = JOLT[active.damage];
  const p = Math.min(1, (now - active.start) / spec.duration);
  const decay = Math.pow(1 - p, JOLT.decayPower);
  const phase = p * Math.PI * JOLT.phaseMultiplier;
  const x = Math.sin(phase) * spec.ampX * decay + (p < 0.16 ? spec.ampX * 0.34 * (1 - p / 0.16) : 0);
  const y = -Math.cos(phase * 0.91) * spec.ampY * decay;
  const rot = Math.sin(phase * 0.73) * spec.rotation * decay;
  const scale = 1 + spec.zoom * decay;
  return { x, y, rot, scale, done: p >= 1 };
}

function applyCameraRig(now) {
  const w = waveform(now);
  camera.fov = baseFov;
  camera.aspect = innerWidth / innerHeight;
  camera.position.copy(basePos);
  camera.lookAt(target);

  const distance = basePos.distanceTo(target);
  const verticalWorld = 2 * distance * Math.tan(THREE.MathUtils.degToRad(baseFov) / 2);
  const worldPerPixel = verticalWorld / Math.max(1, innerHeight);
  const localX = w.x * worldPerPixel;
  const localY = -w.y * worldPerPixel;

  camera.translateX(localX);
  camera.translateY(localY);
  camera.rotateZ(THREE.MathUtils.degToRad(w.rot));
  camera.fov = baseFov / w.scale;
  camera.updateProjectionMatrix();

  mx.textContent = `${w.x.toFixed(1)} px`;
  my.textContent = `${w.y.toFixed(1)} px`;
  mr.textContent = `${w.rot.toFixed(2)}°`;
  mz.textContent = w.scale.toFixed(3);
  cx.textContent = localX.toFixed(3);
  cy.textContent = localY.toFixed(3);
  cfov.textContent = `${camera.fov.toFixed(2)}°`;

  if (w.done && active) {
    active = null;
    stateEl.textContent = 'READY';
    stateEl.style.color = '#9df2ae';
  }
}

$('demo25').addEventListener('click', () => triggerJolt(25));
$('demo40').addEventListener('click', () => triggerJolt(40));
addEventListener('keydown', (e) => {
  if (e.repeat) return;
  if (e.code === 'KeyK') { e.preventDefault(); triggerJolt(25); }
  if (e.code === 'KeyL') { e.preventDefault(); triggerJolt(40); }
});

const clock = new THREE.Clock();
function animate(now) {
  requestAnimationFrame(animate);
  const t = clock.getElapsedTime();
  targetOrb.position.y = 1.65 + Math.sin(t * 1.4) * 0.09;
  targetRing.position.y = targetOrb.position.y;
  targetRing.rotation.z = t * 0.35;
  applyCameraRig(now);
  renderer.render(scene, camera);
}
requestAnimationFrame(animate);

addEventListener('resize', () => {
  renderer.setPixelRatio(Math.min(devicePixelRatio, 1.8));
  renderer.setSize(innerWidth, innerHeight);
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
});

globalThis.__cameraJoltProof = triggerJolt;
