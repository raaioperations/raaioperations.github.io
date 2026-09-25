import {COMBAT} from '../config.js';

export function selectCombatTarget(records,{playerX,playerZ,forwardX,forwardZ}){
  const fl=Math.hypot(forwardX,forwardZ)||1;
  const fx=forwardX/fl,fz=forwardZ/fl;
  const ranked=[];

  for(const record of records){
    if(!record||record.defeated)continue;
    const dx=record.x-playerX,dz=record.z-playerZ;
    const distance=Math.hypot(dx,dz);
    if(distance>COMBAT.targetRange)continue;
    const inv=distance>1e-6?1/distance:0;
    const dot=distance>1e-6?(dx*inv*fx+dz*inv*fz):1;
    if(distance>1.25&&dot<COMBAT.facingMinDot)continue;
    const score=distance+(1-dot)*COMBAT.facingPenalty;
    ranked.push({record,id:record.id,distance,dot,score});
  }

  ranked.sort((a,b)=>a.score-b.score||a.id.localeCompare(b.id));
  return ranked[0]||null;
}

export function combatTargetInHitRange(record,{playerX,playerZ}){
  if(!record||record.defeated)return false;
  return Math.hypot(record.x-playerX,record.z-playerZ)<=COMBAT.attackRange;
}
