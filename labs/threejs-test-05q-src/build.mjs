import { mkdir, copyFile, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const root=process.cwd();
const base=path.resolve(root,'../threejs-test-05p');
const out=path.resolve(root,'../threejs-test-05q');
const assets=path.join(out,'assets');
await mkdir(assets,{recursive:true});
for(const name of ['index.html','app.js','sw.js','build-info.json']) await copyFile(path.join(base,name),path.join(out,name));
await copyFile(path.join(base,'assets/Soldier.glb'),path.join(assets,'Soldier.glb'));

const buildId=new Date().toISOString().replace(/[-:TZ.]/g,'').slice(0,14);
let app=await readFile(path.join(out,'app.js'),'utf8');
const visualRuntime=`

// Test 05Q — human visual-review telegraph readability layer.
const q05VisualRoot=new THREE.Group();targetRoot.add(q05VisualRoot);
function q05SectorGeometry(radius=3.6,halfAngle=Math.PI*35/180,segments=28){
  const s=new THREE.Shape();s.moveTo(0,0);
  for(let i=0;i<=segments;i++){const a=-halfAngle+(halfAngle*2*i/segments);s.lineTo(Math.sin(a)*radius,Math.cos(a)*radius);}s.lineTo(0,0);return new THREE.ShapeGeometry(s);
}
const q05SectorMat=new THREE.MeshBasicMaterial({color:0xffa33a,transparent:true,opacity:0,depthWrite:false,side:THREE.DoubleSide,blending:THREE.NormalBlending});
const q05Sector=new THREE.Mesh(q05SectorGeometry(),q05SectorMat);q05Sector.rotation.x=-Math.PI/2;q05Sector.position.y=.055;q05Sector.visible=false;q05VisualRoot.add(q05Sector);
const q05RingMat=new THREE.MeshBasicMaterial({color:0xffbf5a,transparent:true,opacity:0,depthWrite:false,blending:THREE.AdditiveBlending});
const q05Ring=new THREE.Mesh(new THREE.TorusGeometry(.92,.045,8,48),q05RingMat);q05Ring.rotation.x=Math.PI/2;q05Ring.position.y=.12;q05Ring.visible=false;q05VisualRoot.add(q05Ring);
const q05HaloMat=new THREE.MeshBasicMaterial({color:0xffad42,transparent:true,opacity:0,depthWrite:false,blending:THREE.AdditiveBlending});
const q05Halo=new THREE.Mesh(new THREE.SphereGeometry(.78,18,12),q05HaloMat);q05Halo.position.y=1.25;q05Halo.scale.set(1,.82,1);q05Halo.visible=false;q05VisualRoot.add(q05Halo);
const q05StrikeMat=new THREE.MeshBasicMaterial({color:0xff3b2f,transparent:true,opacity:0,depthWrite:false,blending:THREE.AdditiveBlending});
const q05Strike=new THREE.Mesh(new THREE.BoxGeometry(.18,.035,3.35),q05StrikeMat);q05Strike.position.set(0,.085,1.68);q05Strike.visible=false;q05VisualRoot.add(q05Strike);
let q05LastPhase='READY',q05Auto=false,q05AutoTimer=0;
function q05OrientAtPlayer(){const dx=playerRoot.position.x-targetRoot.position.x,dz=playerRoot.position.z-targetRoot.position.z;q05VisualRoot.rotation.y=Math.atan2(dx,dz);}
function q05SetDemoButton(){const e=document.getElementById('visualDemoAuto');if(e)e.textContent=q05Auto?'AUTO: ON':'AUTO: OFF';}
function q05StartDemo(){if(enemyAttackPhase05O!=='READY')return false;q05OrientAtPlayer();return n05StartEnemyAttack('05Q_VISUAL');}
function q05BindVisualControls(){
  const once=document.getElementById('visualDemoAttack');if(once)once.addEventListener('pointerdown',e=>{e.preventDefault();q05StartDemo();});
  const auto=document.getElementById('visualDemoAuto');if(auto)auto.addEventListener('pointerdown',e=>{e.preventDefault();q05Auto=!q05Auto;q05AutoTimer=0;q05SetDemoButton();if(q05Auto)q05StartDemo();});
}
function q05VisualLoop(now){
  const phase=enemyAttackPhase05O;
  if(phase!==q05LastPhase){if(phase==='TELEGRAPH')q05OrientAtPlayer();q05LastPhase=phase;}
  const elapsed=Math.max(0,(performance.now()-enemyPhaseStart05O)/1000);
  q05Sector.visible=q05Ring.visible=q05Halo.visible=q05Strike.visible=false;
  if(phase==='TELEGRAPH'){
    const p=THREE.MathUtils.clamp(elapsed/.70,0,1),pulse=.5+.5*Math.sin(now*.018);
    q05Sector.visible=true;q05Ring.visible=true;q05Halo.visible=true;
    q05SectorMat.color.setHex(0xffa33a);q05SectorMat.opacity=.18+.18*p;
    q05RingMat.color.setHex(0xffc15b);q05RingMat.opacity=.42+.28*p;q05Ring.scale.setScalar(1.38-.40*p);
    q05HaloMat.color.setHex(0xffa33a);q05HaloMat.opacity=.08+.08*pulse;q05Halo.scale.set(1+.06*pulse,.82+.04*pulse,1+.06*pulse);
  }else if(phase==='ACTIVE'){
    const p=THREE.MathUtils.clamp(elapsed/.12,0,1),pulse=1+Math.sin(p*Math.PI)*.18;
    q05Sector.visible=true;q05Ring.visible=true;q05Halo.visible=true;q05Strike.visible=true;
    q05SectorMat.color.setHex(0xff352d);q05SectorMat.opacity=.68;
    q05RingMat.color.setHex(0xff2d24);q05RingMat.opacity=.92;q05Ring.scale.setScalar(.92*pulse);
    q05HaloMat.color.setHex(0xff2d24);q05HaloMat.opacity=.30;q05Halo.scale.set(1.08*pulse,.90*pulse,1.08*pulse);
    q05StrikeMat.opacity=.92*(1-p*.35);q05Strike.scale.set(1+.18*p,1,1);
  }else if(phase==='RECOVERY'){
    const p=THREE.MathUtils.clamp(elapsed/.40,0,1);
    q05Sector.visible=true;q05Ring.visible=true;
    q05SectorMat.color.setHex(0x7da0b8);q05SectorMat.opacity=.16*(1-p);
    q05RingMat.color.setHex(0x8ba9bd);q05RingMat.opacity=.30*(1-p);q05Ring.scale.setScalar(1+.12*p);
  }
  if(q05Auto){q05AutoTimer+=1/60;if(phase==='READY'&&q05AutoTimer>.75){q05AutoTimer=0;q05StartDemo();}else if(phase!=='READY')q05AutoTimer=0;}
  requestAnimationFrame(q05VisualLoop);
}
queueMicrotask(()=>{q05BindVisualControls();q05SetDemoButton();requestAnimationFrame(q05VisualLoop);});
`;
app+=visualRuntime;
await writeFile(path.join(out,'app.js'),app);

let html=await readFile(path.join(out,'index.html'),'utf8');
html=html.replaceAll('05P','05Q').replaceAll('05p','05q');
html=html.replaceAll('Defense Integration Verified','Enemy Telegraph Readability');
html=html.replace('DEFENSE INTEGRATION — automated deterministic verification complete; no manual proof required','VISUAL REVIEW — watch the enemy cue from TELEGRAPH → ACTIVE → RECOVERY; judge readability, direction, impact, and clutter');
html=html.replace(/<div id="checklist">[\s\S]*?<div class="acceptedContract">[\s\S]*?<\/div>/,
`<div id="checklist"><div><b>REVIEW</b><span>01 TELEGRAPH is immediately noticeable before ACTIVE</span></div><div><b>REVIEW</b><span>02 Attack direction / danger area is readable before impact</span></div><div><b>REVIEW</b><span>03 ACTIVE moment is unmistakably stronger than TELEGRAPH</span></div><div><b>REVIEW</b><span>04 RECOVERY reads as a clear safe/reset state</span></div><div><b>REVIEW</b><span>05 Cue does not obscure the character, controls, or scene</span></div></div><div class="contract"><b>VISUAL CONTRACT</b><span>Mechanical timing is already accepted and unchanged: TELEGRAPH 0.70 s → ACTIVE 0.12 s → RECOVERY 0.40 s. This test changes presentation only.</span></div><div class="acceptedContract"><b>AUTOMATED / NOT RETESTED</b><span>05P defense integration passed all deterministic checks. Movement, attacks, dodge/i-frames, guard, parry, stagger, counters, telegraph timing, and enemy damage remain active. Jump animation replacement stays deferred.</span></div>`);
html=html.replace('</body>','<button id="visualDemoAttack">DEMO ATTACK</button><button id="visualDemoAuto">AUTO: OFF</button></body>');
html=html.replace('</style>','#visualDemoAttack,#visualDemoAuto{position:fixed;z-index:14;top:54px;padding:9px 12px;border:1px solid rgba(255,255,255,.28);border-radius:999px;background:rgba(8,13,16,.72);backdrop-filter:blur(10px);color:#fff;font:800 9px/1 system-ui;letter-spacing:.05em;pointer-events:auto;touch-action:manipulation}#visualDemoAttack{left:50%;transform:translateX(-54%)}#visualDemoAuto{left:calc(50% + 72px)}@media(pointer:coarse),(max-width:900px){#visualDemoAttack,#visualDemoAuto{top:50px;font-size:8px;padding:8px 10px}#visualDemoAuto{left:calc(50% + 65px)}}</style>');
html=html.replace(/app\.js\?v=\d+/g,`app.js?v=${buildId}`).replace(/sw\.js\?v=\d+/g,`sw.js?v=${buildId}`);
await writeFile(path.join(out,'index.html'),html);

let sw=await readFile(path.join(out,'sw.js'),'utf8');
sw=sw.replace(/raai-threejs-test05o-\d+/g,`raai-threejs-test05q-${buildId}`).replace(/app\.js\?v=\d+/g,`app.js?v=${buildId}`);
await writeFile(path.join(out,'sw.js'),sw);

const info=JSON.parse(await readFile(path.join(out,'build-info.json'),'utf8'));
info.build_id=buildId;
info.inherits='Verified Test 05P combat baseline with delegated nonvisual defense integration';
info.focus='human visual review of enemy telegraph readability and phase presentation';
info.proof_labels=[];
info.acceptance_checklist={telegraph_noticeability:'HUMAN REVIEW',direction_readability:'HUMAN REVIEW',active_impact_readability:'HUMAN REVIEW',recovery_readability:'HUMAN REVIEW',visual_clutter_and_scene_readability:'HUMAN REVIEW'};
info.enemy_attack.visual_signal='world-space directional sector + countdown ring + body halo + ACTIVE strike lane + RECOVERY fade';
info.enemy_attack.visual_review_status='PENDING HUMAN ACCEPTANCE';
info.delegated_verification_status_05p='PASS';
info.human_acceptance={accepted:false,status:'PENDING HUMAN VISUAL ACCEPTANCE'};
info.disabled_systems={enemy_ai:true,authored_enemy_attack_animation:true,counter_animation:true,counter_hitstop:true,counter_vfx:true,block_stamina:true};
info.app_js_bytes=Buffer.byteLength(app);
await writeFile(path.join(out,'build-info.json'),JSON.stringify(info,null,2));
console.log(`Built Test 05Q visual telegraph readability review ${buildId}.`);
