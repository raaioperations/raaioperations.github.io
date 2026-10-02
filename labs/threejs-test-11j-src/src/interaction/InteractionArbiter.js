import {INTERACTION} from '../config.js';

function typePenalty(type){
  if(type==='PICKUP')return INTERACTION.pickupPriority;
  if(type==='USE')return INTERACTION.usePriority;
  return INTERACTION.npcPriority;
}

export function selectInteractionTarget(candidates,{playerX,playerZ,forwardX,forwardZ}){
  const forwardLength=Math.hypot(forwardX,forwardZ)||1;
  const fx=forwardX/forwardLength,fz=forwardZ/forwardLength;
  const ranked=[];

  for(const candidate of candidates){
    const dx=candidate.x-playerX,dz=candidate.z-playerZ;
    const distance=Math.hypot(dx,dz);
    if(distance>INTERACTION.maxDistance)continue;
    const inv=distance>1e-6?1/distance:0;
    const dot=distance>1e-6?(dx*inv*fx+dz*inv*fz):1;
    if(distance>1.4&&dot<INTERACTION.facingMinDot)continue;
    const penalty=typePenalty(candidate.type);
    const score=distance+(1-dot)*INTERACTION.facingPenalty+penalty;
    ranked.push({...candidate,distance,dot,score,typePenalty:penalty});
  }

  ranked.sort((a,b)=>
    a.score-b.score||
    a.typePenalty-b.typePenalty||
    a.id.localeCompare(b.id)
  );
  return ranked[0]||null;
}
