export const PREDICTIVE_HANDOFF_SCHEMA_VERSION=1;

const finite=(v,label)=>{
  if(!Number.isFinite(v))throw new Error('08B invalid '+label);
  return v;
};

export class PredictiveRegionPrefetchPlanner{
  constructor({
    prefetchRadiusM=46,
    minApproachSpeedMps=.35,
    minApproachDot=.35
  }={}){
    this.prefetchRadiusM=finite(prefetchRadiusM,'prefetchRadiusM');
    this.minApproachSpeedMps=finite(minApproachSpeedMps,'minApproachSpeedMps');
    this.minApproachDot=finite(minApproachDot,'minApproachDot');
    this.lastPosition=null;
    this.lastNow=null;
    this.velocity={x:0,z:0,speed:0};
    this.targetId=null;
    this.targetDistance=Infinity;
    this.targetApproach=0;
    this.selectionCount=0;
  }

  updateMotion(position,now){
    const p={x:finite(position?.x,'position.x'),z:finite(position?.z,'position.z')};
    finite(now,'now');
    if(this.lastPosition&&Number.isFinite(this.lastNow)&&now>this.lastNow){
      const dt=(now-this.lastNow)/1000;
      const vx=(p.x-this.lastPosition.x)/dt;
      const vz=(p.z-this.lastPosition.z)/dt;
      const speed=Math.hypot(vx,vz);
      this.velocity={x:vx,z:vz,speed};
    }else{
      this.velocity={x:0,z:0,speed:0};
    }
    this.lastPosition=p;
    this.lastNow=now;
    return {...this.velocity};
  }

  choose({position,regions,excludeIds=[]}={}){
    const p={x:finite(position?.x,'position.x'),z:finite(position?.z,'position.z')};
    const excluded=new Set(excludeIds);
    const v=this.velocity;
    if(v.speed<this.minApproachSpeedMps){
      this.targetId=null;
      this.targetDistance=Infinity;
      this.targetApproach=0;
      return null;
    }

    let best=null;
    for(const item of regions??[]){
      if(!item?.id||excluded.has(item.id))continue;
      if(item.lifecycle!=='UNLOADED')continue;
      const dx=item.center.x-p.x,dz=item.center.z-p.z;
      const distance=Math.hypot(dx,dz);
      if(distance>this.prefetchRadiusM||distance<=1e-6)continue;
      const approach=(v.x*dx+v.z*dz)/(v.speed*distance);
      if(approach<this.minApproachDot)continue;
      const score=approach*2-distance/this.prefetchRadiusM;
      if(!best||score>best.score||(score===best.score&&item.id<best.id)){
        best={id:item.id,distance,approach,score};
      }
    }

    const nextId=best?.id??null;
    if(nextId&&nextId!==this.targetId)this.selectionCount++;
    this.targetId=nextId;
    this.targetDistance=best?.distance??Infinity;
    this.targetApproach=best?.approach??0;
    return best;
  }

  snapshot(){
    return {
      version:PREDICTIVE_HANDOFF_SCHEMA_VERSION,
      targetId:this.targetId,
      targetDistance:this.targetDistance,
      targetApproach:this.targetApproach,
      velocity:{...this.velocity},
      selectionCount:this.selectionCount
    };
  }
}
