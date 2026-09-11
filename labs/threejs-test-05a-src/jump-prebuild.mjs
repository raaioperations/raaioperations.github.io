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
"const playerRoot=new THREE.Group();scene.add(playerRoot);playerRoot.position.set(5,groundHeight(5,60),60);let model=null,mixer=null,actions={},activeAction=null,characterMode='FALLBACK';let jumpClip=null,jumpAction=null,jumpBaseAction=null,jumpAnimating=false,jumpContacted=false,jumpLandingRecovery=0;const jumpContactNorm=.82,jumpRecoveryDuration=.18;function findRigBone(root,wanted){let bone=root.getObjectByName(wanted);if(bone)return bone;const needle=wanted.toLowerCase().replace('mixamorig','');root.traverse(o=>{if(!bone&&o.isBone&&o.name.toLowerCase().replace('mixamorig','').includes(needle))bone=o;});return bone;}function buildJumpClip(root){const times=[0,.06,.16,.32,.50,.68,.82,.90,1],tracks=[];const addQ=(name,poses)=>{const bone=findRigBone(root,name);if(!bone)return;const base=bone.quaternion.clone(),values=[];for(const p of poses){const delta=new THREE.Quaternion().setFromEuler(new THREE.Euler(p[0],p[1]||0,p[2]||0,'XYZ')),q=base.clone().multiply(delta);values.push(q.x,q.y,q.z,q.w);}tracks.push(new THREE.QuaternionKeyframeTrack(bone.name+'.quaternion',times,values));};const addP=(name,offsets)=>{const bone=findRigBone(root,name);if(!bone)return;const base=bone.position.clone(),values=[];for(const p of offsets)values.push(base.x+(p[0]||0),base.y+(p[1]||0),base.z+(p[2]||0));tracks.push(new THREE.VectorKeyframeTrack(bone.name+'.position',times,values));};addP('mixamorigHips',[[0,-.05,0],[0,.035,0],[0,.07,0],[0,.06,0],[0,.035,0],[0,.015,0],[0,-.015,0],[0,-.11,0],[0,0,0]]);addQ('mixamorigHips',[[-.10,0,.03],[-.02,0,.015],[.09,0,0],[.16,0,-.02],[.10,0,0],[.01,0,.015],[-.05,0,0],[.15,0,0],[0,0,0]]);addQ('mixamorigSpine',[[-.06,0,0],[.05,0,0],[.14,0,0],[.12,0,0],[.04,0,0],[-.04,0,0],[-.08,0,0],[.12,0,0],[0,0,0]]);addQ('mixamorigSpine1',[[-.04,0,0],[.04,0,0],[.12,0,0],[.11,0,0],[.03,0,0],[-.05,0,0],[-.07,0,0],[.10,0,0],[0,0,0]]);addQ('mixamorigSpine2',[[-.02,0,0],[.05,0,0],[.10,0,0],[.08,0,0],[0,0,0],[-.06,0,0],[-.08,0,0],[.08,0,0],[0,0,0]]);addQ('mixamorigNeck',[[.04,0,0],[.02,0,0],[-.03,0,0],[-.06,0,0],[-.03,0,0],[.02,0,0],[.04,0,0],[-.02,0,0],[0,0,0]]);addQ('mixamorigLeftArm',[[-.48,-.05,-.10],[-.25,-.04,-.06],[.18,-.03,.03],[.38,0,.08],[.45,.02,.10],[.28,.02,.08],[.08,0,.04],[-.20,0,-.04],[0,0,0]]);addQ('mixamorigRightArm',[[-.38,.05,.10],[-.18,.04,.06],[.25,.03,-.02],[.44,0,-.08],[.36,-.02,-.10],[.18,-.02,-.08],[.02,0,-.04],[-.16,0,.04],[0,0,0]]);addQ('mixamorigLeftForeArm',[[-.18,0,0],[-.10,0,0],[-.26,0,0],[-.42,0,0],[-.48,0,0],[-.34,0,0],[-.18,0,0],[-.26,0,0],[0,0,0]]);addQ('mixamorigRightForeArm',[[-.12,0,0],[-.08,0,0],[-.22,0,0],[-.38,0,0],[-.44,0,0],[-.30,0,0],[-.16,0,0],[-.22,0,0],[0,0,0]]);addQ('mixamorigLeftUpLeg',[[.34,-.05,.03],[-.04,-.04,.02],[.18,-.03,.01],[.66,-.08,.05],[.78,-.10,.06],[.48,-.05,.04],[.14,0,.02],[.58,0,.05],[0,0,0]]);addQ('mixamorigRightUpLeg',[[.28,.05,-.03],[-.02,.04,-.02],[.10,.03,-.01],[.52,.08,-.05],[.62,.10,-.06],[.40,.05,-.04],[.10,0,-.02],[.54,0,-.05],[0,0,0]]);addQ('mixamorigLeftLeg',[[-.62,0,0],[-.08,0,0],[-.20,0,0],[-.88,0,0],[-1.02,0,0],[-.58,0,0],[-.16,0,0],[-.92,0,0],[0,0,0]]);addQ('mixamorigRightLeg',[[-.56,0,0],[-.06,0,0],[-.16,0,0],[-.74,0,0],[-.88,0,0],[-.50,0,0],[-.13,0,0],[-.84,0,0],[0,0,0]]);addQ('mixamorigLeftFoot',[[.16,0,0],[.10,0,0],[.08,0,0],[.02,0,0],[-.08,0,0],[-.16,0,0],[-.22,0,0],[.12,0,0],[0,0,0]]);addQ('mixamorigRightFoot',[[.14,0,0],[.08,0,0],[.06,0,0],[0,0,0],[-.06,0,0],[-.14,0,0],[-.20,0,0],[.10,0,0],[0,0,0]]);return tracks.length?new THREE.AnimationClip('JumpProcedural',1,tracks,THREE.NormalAnimationBlendMode):null;}function beginJumpAnimation(){if(!jumpAction||!jumpClip)return false;jumpBaseAction=activeAction;jumpContacted=false;jumpLandingRecovery=0;const airtime=Math.max(.28,2*(+jumpS.value)/Math.max(1,+gravityS.value));jumpAction.reset();jumpAction.enabled=true;jumpAction.setEffectiveWeight(1);jumpAction.setLoop(THREE.LoopOnce,1);jumpAction.clampWhenFinished=true;jumpAction.timeScale=(jumpClip.duration*jumpContactNorm)/airtime;jumpAction.play();if(jumpBaseAction&&jumpBaseAction!==jumpAction)jumpAction.crossFadeFrom(jumpBaseAction,.07,false);activeAction=jumpAction;jumpAnimating=true;return true;}function updateJumpAnimation(dt,onGround){if(!jumpAnimating)return;if(onGround&&!jumpContacted){jumpContacted=true;jumpLandingRecovery=jumpRecoveryDuration;jumpAction.time=Math.max(jumpAction.time,jumpClip.duration*jumpContactNorm);jumpAction.timeScale=(jumpClip.duration*(1-jumpContactNorm))/jumpRecoveryDuration;}if(jumpContacted){jumpLandingRecovery-=dt;if(jumpLandingRecovery<=0)endJumpAnimation();}}function endJumpAnimation(){if(!jumpAnimating)return;jumpAction?.stop();jumpAnimating=false;jumpContacted=false;jumpLandingRecovery=0;activeAction=null;jumpBaseAction=null;}",
'jump animation rig');

add(
"const loader=new GLTFLoader();loader.load('./assets/Soldier.glb',g=>{if(model)playerRoot.remove(model);model=g.scene;model.scale.setScalar(1.0);model.rotation.y=Math.PI;model.traverse(o=>{if(o.isMesh){o.castShadow=true;o.receiveShadow=true;}});playerRoot.add(model);mixer=new THREE.AnimationMixer(model);actions={};for(const clip of g.animations)actions[clip.name]=mixer.clipAction(clip);characterMode='GLB';charEl.textContent='GLB';setAction(actions.Idle?'Idle':Object.keys(actions)[0],0);},undefined,err=>{console.warn('Local GLB failed; fallback remains active',err);charEl.textContent='FALLBACK';});",
"const loader=new GLTFLoader();loader.load('./assets/Soldier.glb',g=>{if(model)playerRoot.remove(model);model=g.scene;model.scale.setScalar(1.0);model.rotation.y=Math.PI;model.traverse(o=>{if(o.isMesh){o.castShadow=true;o.receiveShadow=true;}});playerRoot.add(model);mixer=new THREE.AnimationMixer(model);actions={};for(const clip of g.animations)actions[clip.name]=mixer.clipAction(clip);jumpClip=buildJumpClip(model);if(jumpClip){jumpAction=mixer.clipAction(jumpClip);actions.JumpProcedural=jumpAction;}characterMode='GLB';charEl.textContent='GLB';setAction(actions.Idle?'Idle':Object.keys(actions)[0],0);},undefined,err=>{console.warn('Local GLB failed; fallback remains active',err);charEl.textContent='FALLBACK';});",
'jump clip install');

add(
"if(jumpQueued&&grounded){verticalVel=+jumpS.value;grounded=false;prove('JUMP SUCCESS','launch '+(+jumpS.value).toFixed(1)+' m/s');}jumpQueued=false;verticalVel-=+gravityS.value*dt;",
"if(jumpQueued&&grounded){verticalVel=+jumpS.value;grounded=false;if(beginJumpAnimation())prove('JUMP ANIMATION SUCCESS','launch → tuck → extend → absorb');}jumpQueued=false;verticalVel-=+gravityS.value*dt;",
'jump launch animation proof');

add(
"if(playerRoot.position.y<=gh){playerRoot.position.y=gh;if(verticalVel<0)verticalVel=0;grounded=true;}else grounded=false;",
"if(playerRoot.position.y<=gh){playerRoot.position.y=gh;if(verticalVel<0)verticalVel=0;grounded=true;}else grounded=false;updateJumpAnimation(dt,grounded);",
'jump landing transition');

add(
"if(characterMode==='GLB'&&grounded){if(speed<.22)setAction(actions.Idle?'Idle':Object.keys(actions)[0]);else if(speed<6)setAction(actions.Walk?'Walk':(actions.Run?'Run':Object.keys(actions)[0]));else setAction(actions.Run?'Run':Object.keys(actions)[0]);}",
"if(characterMode==='GLB'&&grounded&&!jumpAnimating){if(speed<.22)setAction(actions.Idle?'Idle':Object.keys(actions)[0]);else if(speed<6)setAction(actions.Walk?'Walk':(actions.Run?'Run':Object.keys(actions)[0]));else setAction(actions.Run?'Run':Object.keys(actions)[0]);}",
'landing recovery owns animation state');

add(
"if(mixer)mixer.update(dt*(sprinting?1.08:1));",
"if(mixer)mixer.update(dt*(jumpAnimating?1:(sprinting?1.08:1)));",
'jump animation timing isolation');

text=text.replace(anchor,calls.join('\n')+'\n'+anchor);
await writeFile(path,text);
console.log('Applied reference-guided jump animation prebuild patch');
