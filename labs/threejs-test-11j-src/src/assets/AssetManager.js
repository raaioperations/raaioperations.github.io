import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {clone as cloneSkeleton} from 'three/addons/utils/SkeletonUtils.js';

function disposeScene(root){
  const geometries=new Set(),materials=new Set(),textures=new Set();
  root?.traverse?.(obj=>{
    if(obj.geometry)geometries.add(obj.geometry);
    const mats=Array.isArray(obj.material)?obj.material:[obj.material];
    for(const mat of mats){
      if(!mat)continue;
      materials.add(mat);
      for(const value of Object.values(mat))if(value?.isTexture)textures.add(value);
    }
  });
  for(const texture of textures)texture.dispose?.();
  for(const material of materials)material.dispose?.();
  for(const geometry of geometries)geometry.dispose?.();
}

export class AssetManager{
  constructor(){
    this.loader=new GLTFLoader();
    this.cache=new Map();
    this.resolved=new Map();
    this.errors=new Map();
    this.hits=0;this.misses=0;this.instances=0;
  }

  loadGLTF(url){
    if(this.cache.has(url)){this.hits++;return this.cache.get(url);}
    this.misses++;
    const promise=this.loader.loadAsync(url)
      .then(gltf=>{this.resolved.set(url,gltf);return gltf;})
      .catch(error=>{
        this.errors.set(url,error);
        this.cache.delete(url);
        this.resolved.delete(url);
        throw error;
      });
    this.cache.set(url,promise);
    return promise;
  }

  async instantiateGLTF(url){
    const gltf=await this.loadGLTF(url);
    this.instances++;
    return Object.freeze({
      scene:cloneSkeleton(gltf.scene),
      animations:gltf.animations
    });
  }

  hasError(url){return this.errors.has(url);}

  snapshot(){
    return Object.freeze({
      cached:this.cache.size,
      resolved:this.resolved.size,
      hits:this.hits,
      misses:this.misses,
      instances:this.instances,
      errors:this.errors.size
    });
  }

  dispose(){
    for(const gltf of this.resolved.values())disposeScene(gltf.scene);
    this.cache.clear();this.resolved.clear();this.errors.clear();
  }
}
