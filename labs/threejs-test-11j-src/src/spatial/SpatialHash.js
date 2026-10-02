export class SpatialHash{
  constructor(cellSize=14){
    this.cellSize=cellSize;
    this.cells=new Map();
    this.entries=new Map();
    this.ownerIds=new Map();
    this.nextId=1;
    this.queryCount=0;
    this.lastCandidateCount=0;
  }

  #cell(v){return Math.floor(v/this.cellSize);}
  #key(ix,iz){return ix+','+iz;}

  insert(entry,{owner='global'}={}){
    const id=this.nextId++;
    const stored={id,owner,...entry};
    this.entries.set(id,stored);
    if(!this.ownerIds.has(owner))this.ownerIds.set(owner,new Set());
    this.ownerIds.get(owner).add(id);

    const r=stored.r||0;
    const minX=this.#cell(stored.x-r),maxX=this.#cell(stored.x+r);
    const minZ=this.#cell(stored.z-r),maxZ=this.#cell(stored.z+r);
    stored.cells=[];
    for(let ix=minX;ix<=maxX;ix++)for(let iz=minZ;iz<=maxZ;iz++){
      const key=this.#key(ix,iz);
      if(!this.cells.has(key))this.cells.set(key,new Set());
      this.cells.get(key).add(id);
      stored.cells.push(key);
    }
    return id;
  }

  remove(id){
    const entry=this.entries.get(id);
    if(!entry)return false;
    for(const key of entry.cells){
      const set=this.cells.get(key);
      if(!set)continue;
      set.delete(id);
      if(!set.size)this.cells.delete(key);
    }
    this.entries.delete(id);
    const ownerSet=this.ownerIds.get(entry.owner);
    ownerSet?.delete(id);
    if(ownerSet&&!ownerSet.size)this.ownerIds.delete(entry.owner);
    return true;
  }

  removeOwner(owner){
    const ids=[...(this.ownerIds.get(owner)||[])];
    for(const id of ids)this.remove(id);
    return ids.length;
  }

  queryAABB(minX,minZ,maxX,maxZ){
    const ids=new Set();
    const minCX=this.#cell(minX),maxCX=this.#cell(maxX);
    const minCZ=this.#cell(minZ),maxCZ=this.#cell(maxZ);
    for(let ix=minCX;ix<=maxCX;ix++)for(let iz=minCZ;iz<=maxCZ;iz++){
      const set=this.cells.get(this.#key(ix,iz));
      if(set)for(const id of set)ids.add(id);
    }
    const result=[];
    for(const id of ids){
      const e=this.entries.get(id);
      if(!e)continue;
      const r=e.r||0;
      if(e.x+r<minX||e.x-r>maxX||e.z+r<minZ||e.z-r>maxZ)continue;
      result.push(e);
    }
    this.queryCount++;
    this.lastCandidateCount=result.length;
    return result;
  }

  clear(){
    this.cells.clear();this.entries.clear();this.ownerIds.clear();
    this.lastCandidateCount=0;
  }

  snapshot(){
    return Object.freeze({
      entries:this.entries.size,
      cells:this.cells.size,
      owners:this.ownerIds.size,
      queries:this.queryCount,
      lastCandidates:this.lastCandidateCount
    });
  }
}
