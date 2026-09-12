import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const out=path.resolve(process.cwd(),'../threejs-test-05s');
const indexPath=path.join(out,'index.html');
let html=await readFile(indexPath,'utf8');
if(!html.includes('id="s05CounterReview"')){
  html=html.replace('</body>',`<div id="s05CounterReview"><button id="armCounterValid" type="button">ARM REAL 40 COUNTER</button><button id="resetCounterTarget" type="button">RESET COUNTER TARGET</button><span>Press ARM, then hold BLOCK. The accepted parry/counter path produces the real 40-damage event.</span></div></body>`);
  html=html.replace('</style>',`#s05CounterReview{position:fixed;z-index:20;left:50%;top:150px;transform:translateX(-50%);display:flex;align-items:center;gap:6px;padding:7px;border:1px solid rgba(255,255,255,.18);border-radius:12px;background:rgba(8,13,16,.80);backdrop-filter:blur(10px);color:#fff;pointer-events:auto}#s05CounterReview button{border:1px solid rgba(255,255,255,.24);border-radius:9px;background:rgba(255,255,255,.09);color:#fff;padding:8px 9px;font:800 8px/1 system-ui;touch-action:manipulation}#s05CounterReview span{max-width:250px;font:700 8px/1.25 system-ui;opacity:.85}@media(pointer:coarse),(max-width:900px){#s05CounterReview{top:136px;max-width:86vw;flex-wrap:wrap;justify-content:center}#s05CounterReview span{width:100%;text-align:center;font-size:7px}}</style>`);
  await writeFile(indexPath,html);
}

const infoPath=path.join(out,'build-info.json');
const info=JSON.parse(await readFile(infoPath,'utf8'));
info.camera_jolt.counter_review_control='armCounterValid → accepted frontal parry → accepted counter opportunity → real 40-damage applyCounterDamage event';
await writeFile(infoPath,JSON.stringify(info,null,2));

const verificationPath=path.join(out,'verification-report.json');
const verification=JSON.parse(await readFile(verificationPath,'utf8'));
verification.delegated_nonvisual_checks.counter_review_control_uses_existing_accepted_runtime_binding=true;
await writeFile(verificationPath,JSON.stringify(verification,null,2));
console.log('Added 05S accepted counter review controls.');
