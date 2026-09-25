export class ActorNeighborhoodIndex{
  constructor(cellSize=5){
    this.cellSize=cellSize;
    this.cells=new Map();
    this.records=new Map();
    this.rebuilds=0;
    this.queries=0;
    this.lastCandidates=0;
    this.peakCandidates=0;
  }

  #cell(v){return Math.floor(v/this.cellSize);}
  #key(ix,iz){return ix+','+iz;}

  rebuild(records){
    this.cells.clear();
    this.records.clear();

    for(const record of records){
      this.records.set(record.id,record);
      const key=this.#key(this.#cell(record.x),this.#cell(record.z));
      if(!this.cells.has(key))this.cells.set(key,[]);
      this.cells.get(key).push(record.id);
    }
    this.rebuilds++;
  }

  queryRadius(x,z,r){
    const out=[];
    const minX=this.#cell(x-r),maxX=this.#cell(x+r);
    const minZ=this.#cell(z-r),maxZ=this.#cell(z+r);
    const r2=r*r;

    for(let ix=minX;ix<=maxX;ix++)for(let iz=minZ;iz<=maxZ;iz++){
      const ids=this.cells.get(this.#key(ix,iz));
      if(!ids)continue;
      for(const id of ids){
        const record=this.records.get(id);
        if(!record)continue;
        const dx=record.x-x,dz=record.z-z;
        if(dx*dx+dz*dz<=r2)out.push(record);
      }
    }

    this.queries++;
    this.lastCandidates=out.length;
    this.peakCandidates=Math.max(this.peakCandidates,out.length);
    return out;
  }

  snapshot(){
    return Object.freeze({
      entries:this.records.size,
      cells:this.cells.size,
      rebuilds:this.rebuilds,
      queries:this.queries,
      lastCandidates:this.lastCandidates,
      peakCandidates:this.peakCandidates
    });
  }
}
