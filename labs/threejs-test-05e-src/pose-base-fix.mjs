import { readFile, writeFile } from 'node:fs/promises';

const file='build.mjs';
let text=await readFile(file,'utf8');
const anchor="let html=await readFile(path.join(baseRoot,'index.template.html'),'utf8');";
if(!text.includes(anchor))throw new Error('05E pose-base fix anchor missing');
if(text.includes('05E locomotion-pose jump baseline fix')){console.log('05E pose-base fix already applied');process.exit(0);}

const find="standingJumpClip=buildJumpClip(model);runningJumpClip=buildRunningJumpClip(model);if(standingJumpClip){standingJumpAction=mixer.clipAction(standingJumpClip);actions.StandingJumpProcedural=standingJumpAction;}if(runningJumpClip){runningJumpAction=mixer.clipAction(runningJumpClip);actions.RunningJumpProcedural=runningJumpAction;}jumpClip=standingJumpClip;jumpAction=standingJumpAction;";
const repl="/* 05E locomotion-pose jump baseline fix */const standingPoseAction=actions.Idle||actions.Walk||actions.Run;if(standingPoseAction){mixer.stopAllAction();standingPoseAction.reset().play();standingPoseAction.time=0;mixer.update(0);}standingJumpClip=buildJumpClip(model);const runningPoseAction=actions.Run||actions.Walk||actions.Idle;if(runningPoseAction){mixer.stopAllAction();runningPoseAction.reset().play();runningPoseAction.time=runningPoseAction.getClip().duration*.18;mixer.update(0);}runningJumpClip=buildRunningJumpClip(model);mixer.stopAllAction();activeAction=null;if(standingJumpClip){standingJumpAction=mixer.clipAction(standingJumpClip);actions.StandingJumpProcedural=standingJumpAction;}if(runningJumpClip){runningJumpAction=mixer.clipAction(runningJumpClip);actions.RunningJumpProcedural=runningJumpAction;}jumpClip=standingJumpClip;jumpAction=standingJumpAction;";

const patch=`source=mustReplace(source,\n${JSON.stringify(find)},\n${JSON.stringify(repl)},\n'05E locomotion-pose jump baseline fix');\n`;
text=text.replace(anchor,"// 05E locomotion-pose jump baseline fix\n"+patch+'\n'+anchor);
await writeFile(file,text);
console.log('Applied Test 05E locomotion-pose jump baseline fix.');
