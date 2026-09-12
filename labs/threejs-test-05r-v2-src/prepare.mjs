import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root=path.dirname(fileURLToPath(import.meta.url));
const labs=path.resolve(root,'..');
const builderPath=path.join(labs,'threejs-test-05d-src','build.mjs');
const backupPath=path.join(root,'.05d-build.backup.mjs');
const fragment=await readFile(path.join(root,'camera-jolt.fragment.js'),'utf8');
let builder=await readFile(builderPath,'utf8');
await writeFile(backupPath,builder);

const sourceAnchor="let html=await readFile(path.join(baseRoot,'index.template.html'),'utf8');";
if(!builder.includes(sourceAnchor)) throw new Error('05D source anchor missing');
const escaped=fragment.replaceAll('`','\\`').replaceAll('${','\\${');
const sourcePatch=`const cameraJoltBlock=String.raw\`${escaped}\`;\nsource+=cameraJoltBlock;\nsource=mustReplace(source,\n\"camera.position.lerp(desired,ck);camera.lookAt(target);camera.fov=THREE.MathUtils.lerp(camera.fov,sprinting?60:53,1-Math.exp(-5*dt));\",\n\"camera.position.lerp(desired,ck);camera.lookAt(target);const cameraBaseFov=THREE.MathUtils.lerp(camera.fov,sprinting?60:53,1-Math.exp(-5*dt));camera.fov=cameraBaseFov;applyCameraJolt(performance.now(),target,cameraBaseFov);\",\n'05R-v2 source camera jolt hook');\n\n`;
builder=builder.replace(sourceAnchor,sourcePatch+sourceAnchor);

const htmlAnchor="html=html.replaceAll('Test 04 — Visual Fidelity','Test 05D — Two-Hit Attack Chain').replaceAll('RAAI Proof 04 — Visual Fidelity','RAAI Proof 05D — Two-Hit Attack Chain').replace('Starting local production bundle…','Starting two-hit attack-chain proof…');";
if(!builder.includes(htmlAnchor)) throw new Error('05D HTML anchor missing');
const htmlPatch=`\nhtml=html.replace('</body>','<div id=\"cameraJoltControls\"><b id=\"cameraJoltState\">JOLT READY</b><button id=\"cameraJolt25\" type=\"button\">JOLT 25 · K</button><button id=\"cameraJolt40\" type=\"button\">JOLT 40 · L</button></div></body>');\nhtml=html.replace('</style>','#cameraJoltControls{position:fixed;z-index:30;left:50%;top:104px;transform:translateX(-50%);display:flex;align-items:center;gap:7px;padding:7px 8px;border:1px solid rgba(255,255,255,.22);border-radius:999px;background:rgba(8,13,16,.78);backdrop-filter:blur(10px);pointer-events:auto}#cameraJoltControls b{color:#9df2ae;font:850 8px/1 system-ui;letter-spacing:.06em;white-space:nowrap}#cameraJoltControls button{border:1px solid rgba(255,255,255,.24);border-radius:999px;background:rgba(255,255,255,.09);color:#fff;padding:7px 9px;font:800 8px/1 system-ui;touch-action:manipulation}@media(pointer:coarse),(max-width:900px){#cameraJoltControls{top:96px}#cameraJoltControls b{display:none}}</style>');\n`;
builder=builder.replace(htmlAnchor,htmlAnchor+htmlPatch);
await writeFile(builderPath,builder);
console.log('Prepared source-level 05R-v2 camera jolt.');
