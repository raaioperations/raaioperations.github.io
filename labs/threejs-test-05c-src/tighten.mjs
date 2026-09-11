import { readFile, writeFile } from 'node:fs/promises';
const path='build.mjs';
let text=await readFile(path,'utf8');
const from="if(!faceProved&&errDeg<=FACE_TOLERANCE_DEG){faceProved=true;prove('FACE CONFIRMED',errDeg.toFixed(1)+'° error');}";
const to="const movingForFace=Math.hypot(velocity.x,velocity.z)>.35;if(!faceProved&&movingForFace&&errDeg<=FACE_TOLERANCE_DEG){faceProved=true;prove('FACE CONFIRMED',errDeg.toFixed(1)+'° error while moving');}";
if(!text.includes(from))throw new Error('FACE proof patch anchor missing');
text=text.replace(from,to);
await writeFile(path,text);
console.log('Tightened FACE CONFIRMED to require active movement');
