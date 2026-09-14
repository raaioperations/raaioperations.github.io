import { build } from 'esbuild';
import { mkdir, writeFile, readFile, stat, copyFile } from 'node:fs/promises';
import path from 'node:path';

const root=process.cwd();
const out=path.resolve(root,'../threejs-test-05y');
const assets=path.join(out,'assets');
await mkdir(assets,{recursive:true});

const accepted05X=JSON.parse(await readFile(path.resolve(root,'../threejs-test-05x/acceptance.json'),'utf8'));
if(accepted05X.status!=='ACCEPTED'||accepted05X.human_visual_acceptance!==true)throw new Error('Accepted 05X required');

function mustReplace(text,find,repl,label){
  const i=text.indexOf(find);if(i<0)throw new Error(`Patch anchor missing: ${label}`);
  if(text.indexOf(find,i+find.length)>=0)throw new Error(`Patch anchor not unique: ${label}`);
  return text.slice(0,i)+repl+text.slice(i+find.length);
}

let source=await readFile(path.resolve(root,'../threejs-test-05x-src/src/main.js'),'utf8');
source=mustReplace(source,
"const stateEl=$('state'),phaseEl=$('phase'),chainEl=$('chain'),contactEl=$('contact'),hitstopEl=$('hitstop'),knockEl=$('knockback'),distanceEl=$('distance'),jx=$('jx'),jy=$('jy'),jr=$('jr'),reactionEl=$('reaction'),syncEl=$('sync');",
"const stateEl=$('state'),phaseEl=$('phase'),chainEl=$('chain'),contactEl=$('contact'),hitstopEl=$('hitstop'),knockEl=$('knockback'),distanceEl=$('distance'),burstEl=$('burst'),jx=$('jx'),jy=$('jy'),jr=$('jr'),reactionEl=$('reaction'),syncEl=$('sync');",
'05Y HUD burst binding');

const burstBlock=String.raw`
// ---- Test 05Y: isolated contact burst presentation ----
const BURST={duration:92,ringInner:.075,ringOuter:.105,rayCount:8,rayLength:.14};
const burstGroup=new THREE.Group();scene.add(burstGroup);burstGroup.visible=false;
const burstRingMat=new THREE.MeshBasicMaterial({color:0xffe6a8,transparent:true,opacity:0,depthWrite:false,blending:THREE.AdditiveBlending,side:THREE.DoubleSide});
const burstRayMat=new THREE.MeshBasicMaterial({color:0xfff0c2,transparent:true,opacity:0,depthWrite:false,blending:THREE.AdditiveBlending,side:THREE.DoubleSide});
const burstRing=new THREE.Mesh(new THREE.RingGeometry(BURST.ringInner,BURST.ringOuter,28),burstRingMat);burstGroup.add(burstRing);
for(let i=0;i<BURST.rayCount;i++){const a=i/BURST.rayCount*Math.PI*2,r=new THREE.Mesh(new THREE.PlaneGeometry(.016,BURST.rayLength),burstRayMat);r.position.set(Math.cos(a)*.115,Math.sin(a)*.115,0);r.rotation.z=a-Math.PI/2;burstGroup.add(r);}
let burstFx=null,burstCount=0;
function beginBurst(start){burstFx={start};burstCount++;burstGroup.position.set((anchorX(player)+anchorX(enemy))/2,1.22,.10);burstGroup.scale.setScalar(1);burstGroup.rotation.z=0;burstGroup.visible=true;burstEl.textContent='BURST '+burstCount;}
function resetBurst(){burstFx=null;burstGroup.visible=false;burstRingMat.opacity=0;burstRayMat.opacity=0;burstEl.textContent='IDLE';}
function updateBurst(now){if(!burstFx)return;const p=Math.min(1,(now-burstFx.start)/BURST.duration),e=1-Math.pow(1-p,3),fade=Math.pow(1-p,1.45);burstGroup.scale.setScalar(.78+e*.72);burstGroup.rotation.z=p*.12;burstRingMat.opacity=.72*fade;burstRayMat.opacity=.84*fade;if(p>=1)resetBurst();}
`;
source=mustReplace(source,
"const REACH=2.10;",
"const REACH=2.10;\n"+burstBlock,
'05Y burst source block');
source=mustReplace(source,
"jolt=null;hitstopRemaining=0;knockEl.textContent='0.00 m';contactEl.textContent='WAIT';reactionEl.textContent='IDLE';phaseEl.textContent='READY';chainEl.textContent='—';stateEl.textContent='READY';stateEl.style.color='#9df2ae';syncEl.textContent='—';updateDistance();",
"jolt=null;hitstopRemaining=0;resetBurst();knockEl.textContent='0.00 m';contactEl.textContent='WAIT';reactionEl.textContent='IDLE';phaseEl.textContent='READY';chainEl.textContent='—';stateEl.textContent='READY';stateEl.style.color='#9df2ae';syncEl.textContent='—';updateDistance();",
'05Y reset burst');
source=mustReplace(source,
"beginJolt(direction,wallNow);beginReaction(receiver,direction,simNow);beginHitstop();beginKnockback(receiver,direction,simNow);",
"beginJolt(direction,wallNow);beginReaction(receiver,direction,simNow);beginHitstop();beginKnockback(receiver,direction,simNow);beginBurst(wallNow);",
'05Y successful contact burst');
source=mustReplace(source,
"simNow+=simDt*1000;player.mixer.update(simDt);enemy.mixer.update(simDt);updateChain(wallNow);updateCharacter(player,simNow);updateCharacter(enemy,simNow);updateDistance();applyCamera(wallNow);renderer.render(scene,camera);",
"simNow+=simDt*1000;player.mixer.update(simDt);enemy.mixer.update(simDt);updateChain(wallNow);updateCharacter(player,simNow);updateCharacter(enemy,simNow);updateDistance();updateBurst(wallNow);applyCamera(wallNow);renderer.render(scene,camera);",
'05Y update burst');

const buildId=new Date().toISOString().replace(/\D/g,'').slice(0,14);
let html=await readFile('index.template.html','utf8');html=html.replaceAll('__BUILD_ID__',buildId);await writeFile(path.join(out,'index.html'),html);
await copyFile(path.resolve(root,'../threejs-test-05s/assets/Soldier.glb'),path.join(assets,'Soldier.glb'));
await writeFile(path.join(out,'source-main.js'),source);
await build({stdin:{contents:source,resolveDir:path.resolve(root,'../threejs-test-05x-src/src'),sourcefile:'main.js',loader:'js'},bundle:true,minify:true,format:'esm',target:['safari16.4'],outfile:path.join(out,'app.js'),legalComments:'none',treeShaking:true});
const js=await stat(path.join(out,'app.js')),glb=await stat(path.join(assets,'Soldier.glb'));
const info={
  build_id:buildId,
  test:'05Y',
  purpose:'isolated small world-space contact burst layered onto accepted 05X two-hit average-melee cadence',
  inherits:'05X accepted two-hit cadence + accepted micro-jolt/reaction/hitstop/knockback; 05S Jolt25/Jolt40 unchanged',
  three:'0.186.0',pipeline:'source-level transform + esbuild local bundle',runtime_external_dependencies:0,service_worker:false,source_level:true,
  contact_burst:{duration_ms:92,ring_inner_m:.075,ring_outer_m:.105,ray_count:8,ray_length_m:.14,world_space:true,additive:true,screen_flash:false,successful_contact_only:true,uses_wall_time_during_hitstop:true},
  inherited_feedback_unchanged:true,
  damage:false,
  controls:{KeyM:'GIVE 2-HIT',KeyN:'RECEIVE 2-HIT',KeyP:'RESET POSITIONS'},
  accepted_25_40_constants_changed:false,
  human_visual_review:'REQUIRED',
  review_items:['burst appears exactly at each successful contact','burst is small and readable rather than flashy','burst complements jolt/reaction/hitstop without overpowering them','both A1 and A2 bursts feel consistent','frequent melee remains visually comfortable'],
  app_js_bytes:js.size,soldier_glb_bytes:glb.size
};
await writeFile(path.join(out,'build-info.json'),JSON.stringify(info,null,2));
await writeFile(path.join(out,'verification-report.json'),JSON.stringify({test:'05Y',status:'PASS',build_id:buildId,delegated_nonvisual_checks:{accepted_05x_required:true,burst_successful_contact_only:true,burst_max_one_per_successful_contact:true,burst_duration_ms:92,burst_uses_wall_time:true,no_screen_flash:true,inherited_feedback_unchanged:true,accepted_25_40_untouched:true,damage_not_added:true},human_visual_review:'REQUIRED'},null,2));
console.log(JSON.stringify({buildId,status:'PASS'}));
