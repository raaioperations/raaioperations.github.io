import { readFile, writeFile } from 'node:fs/promises';

const path='build.mjs';
let text=await readFile(path,'utf8');
const anchor="let html=await readFile(path.join(baseRoot,'index.template.html'),'utf8');";
if(!text.includes(anchor))throw new Error('Jump prebuild anchor missing');
if(text.includes('jump animation rig')){console.log('Jump prebuild already applied');process.exit(0);}

const calls=[];
const add=(find,repl,label)=>calls.push(`source=mustReplace(source,\n${JSON.stringify(find)},\n${JSON.stringify(repl)},\n${JSON.stringify(label)});\n`);

add(
"const playerRoot=new THREE.Group();scene.add(playerRoot);playerRoot.position.set(5,groundHeight(5,60),60);let model=null,mixer=null,actions={},activeAction=null,characterMode='FALLBACK';",
"const playerRoot=new THREE.Group();scene.add(playerRoot);playerRoot.position.set(5,groundHeight(5,60),60);let model=null,mixer=null,actions={},activeAction=null,characterMode='FALLBACK';let jumpClip=null,jumpAction=null,jumpBaseAction=null,jumpAnimating=false;function findRigBone(root,wanted){let bone=root.getObjectByName(wanted);if(bone)return bone;const needle=wanted.toLowerCase().replace('mixamorig','');root.traverse(o=>{if(!bone&&o.isBone&&o.name.toLowerCase().replace('mixamorig','').includes(needle))bone=o;});return bone;}function buildJumpClip(root){const times=[0,.10,.25,.50,.75,.90,1],tracks=[];const addQ=(name,poses)=>{const bone=findRigBone(root,name);if(!bone)return;const values=[];for(const p of poses){const q=new THREE.Quaternion().setFromEuler(new THREE.Euler(p[0],p[1]||0,p[2]||0,'XYZ'));values.push(q.x,q.y,q.z,q.w);}tracks.push(new THREE.QuaternionKeyframeTrack(bone.name+'.quaternion',times,values));};addQ('mixamorigHips',[[0,0,0],[-.08,0,0],[-.13,0,0],[-.04,0,0],[.07,0,0],[.12,0,0],[0,0,0]]);addQ('mixamorigSpine',[[0,0,0],[.05,0,0],[.10,0,0],[.04,0,0],[-.05,0,0],[-.09,0,0],[0,0,0]]);addQ('mixamorigLeftUpLeg',[[0,0,0],[.18,0,0],[.48,0,0],[.66,0,0],[.42,0,0],[.18,0,0],[0,0,0]]);addQ('mixamorigRightUpLeg',[[0,0,0],[.14,0,0],[.42,0,0],[.60,0,0],[.38,0,0],[.16,0,0],[0,0,0]]);addQ('mixamorigLeftLeg',[[0,0,0],[-.22,0,0],[-.58,0,0],[-.82,0,0],[-.54,0,0],[-.20,0,0],[0,0,0]]);addQ('mixamorigRightLeg',[[0,0,0],[-.18,0,0],[-.52,0,0],[-.76,0,0],[-.50,0,0],[-.18,0,0],[0,0,0]]);addQ('mixamorigLeftFoot',[[0,0,0],[.08,0,0],[.16,0,0],[.06,0,0],[-.10,0,0],[-.05,0,0],[0,0,0]]);addQ('mixamorigRightFoot',[[0,0,0],[.06,0,0],[.14,0,0],[.05,0,0],[-.08,0,0],[-.04,0,0],[0,0,0]]);return tracks.length?new THREE.AnimationClip('JumpProcedural',1,tracks,THREE.AdditiveAnimationBlendMode):null;}function beginJumpAnimation(){if(!jumpAction||!jumpClip)return false;jumpBaseAction=activeAction;if(jumpBaseAction)jumpBaseAction.paused=true;const airtime=Math.max(.28,2*(+jumpS.value)/Math.max(1,+gravityS.value));jumpAction.reset();jumpAction.enabled=true;jumpAction.setEffectiveWeight(1);jumpAction.setLoop(THREE.LoopOnce,1);jumpAction.clampWhenFinished=true;jumpAction.timeScale=jumpClip.duration/airtime;jumpAction.play();jumpAnimating=true;return true;}function endJumpAnimation(){if(!jumpAnimating)return;jumpAction?.stop();if(jumpBaseAction)jumpBaseAction.paused=false;jumpBaseAction=null;jumpAnimating=false;}",
'jump animation rig');

add(
"const loader=new GLTFLoader();loader.load('./assets/Soldier.glb',g=>{if(model)playerRoot.remove(model);model=g.scene;model.scale.setScalar(1.0);model.rotation.y=Math.PI;model.traverse(o=>{if(o.isMesh){o.castShadow=true;o.receiveShadow=true;}});playerRoot.add(model);mixer=new THREE.AnimationMixer(model);actions={};for(const clip of g.animations)actions[clip.name]=mixer.clipAction(clip);characterMode='GLB';charEl.textContent='GLB';setAction(actions.Idle?'Idle':Object.keys(actions)[0],0);},undefined,err=>{console.warn('Local GLB failed; fallback remains active',err);charEl.textContent='FALLBACK';});",
"const loader=new GLTFLoader();loader.load('./assets/Soldier.glb',g=>{if(model)playerRoot.remove(model);model=g.scene;model.scale.setScalar(1.0);model.rotation.y=Math.PI;model.traverse(o=>{if(o.isMesh){o.castShadow=true;o.receiveShadow=true;}});playerRoot.add(model);mixer=new THREE.AnimationMixer(model);actions={};for(const clip of g.animations)actions[clip.name]=mixer.clipAction(clip);jumpClip=buildJumpClip(model);if(jumpClip){jumpAction=mixer.clipAction(jumpClip);actions.JumpProcedural=jumpAction;}characterMode='GLB';charEl.textContent='GLB';setAction(actions.Idle?'Idle':Object.keys(actions)[0],0);},undefined,err=>{console.warn('Local GLB failed; fallback remains active',err);charEl.textContent='FALLBACK';});",
'jump clip install');

add(
"if(jumpQueued&&grounded){verticalVel=+jumpS.value;grounded=false;prove('JUMP SUCCESS','launch '+(+jumpS.value).toFixed(1)+' m/s');}jumpQueued=false;verticalVel-=+gravityS.value*dt;",
"if(jumpQueued&&grounded){verticalVel=+jumpS.value;grounded=false;if(beginJumpAnimation())prove('JUMP ANIMATION SUCCESS','takeoff → tuck → fall');}jumpQueued=false;verticalVel-=+gravityS.value*dt;",
'jump launch animation proof');

add(
"if(playerRoot.position.y<=gh){playerRoot.position.y=gh;if(verticalVel<0)verticalVel=0;grounded=true;}else grounded=false;",
"if(playerRoot.position.y<=gh){playerRoot.position.y=gh;if(verticalVel<0)verticalVel=0;grounded=true;}else grounded=false;if(grounded&&jumpAnimating)endJumpAnimation();",
'jump landing transition');

add(
"if(mixer)mixer.update(dt*(sprinting?1.08:1));",
"if(mixer)mixer.update(dt*(jumpAnimating?1:(sprinting?1.08:1)));",
'jump animation timing isolation');

text=text.replace(anchor,calls.join('\n')+'\n'+anchor);
await writeFile(path,text);
console.log('Applied jump animation prebuild patch');
