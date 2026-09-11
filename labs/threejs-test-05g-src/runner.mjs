import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const root=process.cwd();
const sourcePath=path.join(root,'build.mjs');
const runtimePath=path.join(root,'.runner-05g.mjs');
let text=await readFile(sourcePath,'utf8');

// The source builder originally attempted to patch HTML literals inside the 05D builder text.
// Remove those two fragile source-text patches and instead patch the generated HTML directly.
text=text.replace(/\/\/ Add 05G telemetry and mobile control to generated HTML\.[\s\S]*?text=text\.replaceAll\('COMBO TEST — F \/ ATTACK, then press again inside OPEN','DODGE TEST — E \/ DODGE · press again during dodge to prove repeat blocking'\);/,
"text=text.replaceAll('COMBO TEST — F / ATTACK, then press again inside OPEN','DODGE TEST — E / DODGE · press again during dodge to prove repeat blocking');");

const anchor="html=html.replace('</style>','#dodge{right:max(30px,env(safe-area-inset-right));bottom:max(190px,calc(env(safe-area-inset-bottom) + 178px));width:62px;height:62px;font-size:9px}</style>');";
if(!text.includes(anchor)) throw new Error('05G runner postprocess anchor missing');
text=text.replace(anchor,anchor+`\nhtml=html.replace('<span>Target HP</span><b id="targetHp">100/100</b>','<span>Target HP</span><b id="targetHp">100/100</b><span>Dodge</span><b id="dodgeState">READY</b><span>Dodge dir</span><b id="dodgeDirection">—</b><span>Dodge dist</span><b id="dodgeDistance">—</b>');\nhtml=html.replace('<button id="lock" class="action">LOCK</button><button id="attack" class="action">ATTACK</button><button id="sprint" class="action">RUN</button>','<button id="lock" class="action">LOCK</button><button id="attack" class="action">ATTACK</button><button id="dodge" class="action">DODGE</button><button id="sprint" class="action">RUN</button>');`);

await writeFile(runtimePath,text);
await import(pathToFileURL(runtimePath).href+'?v='+Date.now());
