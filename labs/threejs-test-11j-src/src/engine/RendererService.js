import * as THREE from 'three';
export class RendererService{
  constructor({canvas,quality}){
    this.canvas=canvas;this.quality=quality;
    try{
      this.renderer=new THREE.WebGLRenderer({canvas,antialias:true,alpha:false,stencil:false,preserveDrawingBuffer:false,powerPreference:'high-performance'});
      this.rendererKind='WebGLRenderer';
    }catch(error){
      if(new URLSearchParams(location.search).get('smoke')!=='1')throw error;
      this.rendererKind='LIFECYCLE_SMOKE_NO_WEBGL';
      document.documentElement.dataset.rendererFallback='1';
      this.renderer={outputColorSpace:null,toneMapping:null,toneMappingExposure:1,shadowMap:{enabled:false},
        info:{render:{calls:0,triangles:0},memory:{geometries:0,textures:0}},
        setClearColor(){},setPixelRatio(){},setSize(){},render(){},dispose(){},forceContextLoss(){}};
    }
    this.renderer.outputColorSpace=THREE.SRGBColorSpace;
    this.renderer.toneMapping=THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure=1;
    this.renderer.shadowMap.enabled=false;
    this.renderer.setClearColor(0x91b4c7,1);
    this.lastWidth=0;this.lastHeight=0;this.lastDpr=0;
  }
  resizeTo(container,camera){
    const width=Math.max(1,Math.round(container.clientWidth)),height=Math.max(1,Math.round(container.clientHeight)),dpr=this.quality.pixelRatio();
    if(width===this.lastWidth&&height===this.lastHeight&&dpr===this.lastDpr)return false;
    this.lastWidth=width;this.lastHeight=height;this.lastDpr=dpr;
    this.renderer.setPixelRatio(dpr);this.renderer.setSize(width,height,false);camera.aspect=width/height;camera.updateProjectionMatrix();return true;
  }
  render(scene,camera){this.renderer.render(scene,camera);}
  snapshot(){return Object.freeze({renderer:this.rendererKind,width:this.lastWidth,height:this.lastHeight,dpr:this.lastDpr,drawCalls:this.renderer.info.render.calls,triangles:this.renderer.info.render.triangles,geometries:this.renderer.info.memory.geometries,textures:this.renderer.info.memory.textures});}
  dispose(){this.renderer.dispose();this.renderer.forceContextLoss?.();}
}
