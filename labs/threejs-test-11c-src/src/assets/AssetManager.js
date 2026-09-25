import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';

export class AssetManager{
  constructor(){this.loader=new GLTFLoader();this.cache=new Map();this.errors=new Map();}
  loadGLTF(url){
    if(this.cache.has(url))return this.cache.get(url);
    const promise=this.loader.loadAsync(url).catch(error=>{this.errors.set(url,error);this.cache.delete(url);throw error;});
    this.cache.set(url,promise);return promise;
  }
  hasError(url){return this.errors.has(url);}
  dispose(){this.cache.clear();this.errors.clear();}
}
