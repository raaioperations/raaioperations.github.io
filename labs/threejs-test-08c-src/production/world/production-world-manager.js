export const PRODUCTION_WORLD_SCHEMA_VERSION=1;

const finite=(v,label)=>{
  if(!Number.isFinite(v))throw new Error('08A invalid '+label);
  return v;
};

export class ProductionWorldRegionEntry{
  constructor({id,center,region}={}){
    if(!id||!region)throw new Error('08A region entry requires id + region');
    this.id=id;
    this.center={x:finite(center?.x,'center.x'),z:finite(center?.z,'center.z')};
    this.region=region;
    this.lastDistance=Infinity;
    this.transitions=0;
    this.loads=0;
    this.unloads=0;
    this.lastAction='NONE';
  }
}

export class ProductionWorldManager{
  constructor({entries=[]}={}){
    this.entries=new Map();
    this.stepCount=0;
    this.duplicateRegionIds=0;
    for(const entry of entries)this.register(entry);
  }

  register({id,center,region}){
    if(this.entries.has(id)){
      this.duplicateRegionIds++;
      throw new Error('08A duplicate region id '+id);
    }
    const entry=new ProductionWorldRegionEntry({id,center,region});
    this.entries.set(id,entry);
    return entry;
  }

  get(id){return this.entries.get(id)??null;}
  list(){return [...this.entries.values()];}
  get size(){return this.entries.size;}

  distances(playerPosition){
    return this.list().map(entry=>({
      id:entry.id,
      distance:Math.hypot(
        finite(playerPosition?.x,'player.x')-entry.center.x,
        finite(playerPosition?.z,'player.z')-entry.center.z
      )
    }));
  }

  nearest(playerPosition){
    const list=this.distances(playerPosition).sort((a,b)=>a.distance-b.distance||a.id.localeCompare(b.id));
    return list[0]??null;
  }

  async step({playerPosition,dtMs=0,now=Date.now(),foodProgressPerSecond=.006}={}){
    this.stepCount++;
    const actions=[];
    for(const entry of this.list()){
      const distance=Math.hypot(playerPosition.x-entry.center.x,playerPosition.z-entry.center.z);
      entry.lastDistance=distance;
      const region=entry.region;

      if(!region.operation){
        if(region.lifecycle==='UNLOADED'&&distance<=region.loadRadiusM){
          const before=region.loadCount;
          const result=await region.load(now);
          if(region.loadCount>before){
            entry.loads++;
            entry.transitions++;
            entry.lastAction=result.rehydrated?'REHYDRATE':'LOAD';
            actions.push({regionId:entry.id,action:entry.lastAction});
          }
        }else if(region.lifecycle==='ACTIVE'&&distance>=region.unloadRadiusM){
          const before=region.unloadCount;
          await region.unload(now);
          if(region.unloadCount>before){
            entry.unloads++;
            entry.transitions++;
            entry.lastAction='UNLOAD';
            actions.push({regionId:entry.id,action:'UNLOAD'});
          }
        }
      }

      if(region.isActive){
        region.update({dtMs,now,foodProgressPerSecond});
      }
    }
    return actions;
  }

  snapshot(){
    return {
      version:PRODUCTION_WORLD_SCHEMA_VERSION,
      regions:this.list().map(entry=>({
        id:entry.id,
        center:{...entry.center},
        lifecycle:entry.region.lifecycle,
        hasSnapshot:entry.region.hasSnapshot,
        lastDistance:entry.lastDistance,
        loads:entry.loads,
        unloads:entry.unloads,
        transitions:entry.transitions
      }))
    };
  }
}
