export class ResourceTracker{
  #resources=new Set();
  own(resource){if(resource?.dispose)this.#resources.add(resource);return resource;}
  forget(resource){this.#resources.delete(resource);}
  disposeObject3D(root){
    root?.traverse?.((obj)=>{
      if(obj.geometry?.dispose)obj.geometry.dispose();
      const materials=Array.isArray(obj.material)?obj.material:[obj.material];
      for(const mat of materials){
        if(!mat)continue;
        for(const value of Object.values(mat))if(value?.isTexture&&value.dispose)value.dispose();
        mat.dispose?.();
      }
    });
  }
  dispose(){for(const r of this.#resources){try{r.dispose();}catch{}}this.#resources.clear();}
  get count(){return this.#resources.size;}
}
