import * as THREE from 'three';
export class RendererService{
  constructor({canvas,quality}){
    this.canvas=canvas;this.quality=quality;
    this.renderer=new THREE.WebGLRenderer({canvas,antialias:true,alpha:false,stencil:false,preserveDrawingBuffer:false,powerPreference:'high-performance'});
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
  snapshot(){return Object.freeze({renderer:'WebGLRenderer',width:this.lastWidth,height:this.lastHeight,dpr:this.lastDpr,drawCalls:this.renderer.info.render.calls,triangles:this.renderer.info.render.triangles});}
  dispose(){this.renderer.dispose();this.renderer.forceContextLoss?.();}
}
