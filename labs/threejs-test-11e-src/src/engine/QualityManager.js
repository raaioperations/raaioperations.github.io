import {LIMITS,QUALITY} from '../config.js';

const ORDER=['LOW','BALANCED','HIGH'];

export class QualityManager{
  constructor(win=window){
    this.win=win;
    this.coarsePointer=win.matchMedia?.('(pointer: coarse)')?.matches??false;
    const shortEdge=Math.min(win.innerWidth||0,win.innerHeight||0);
    this.mobile=this.coarsePointer||shortEdge<=820;
    this.baseMaxDpr=this.mobile?LIMITS.mobileMaxDpr:LIMITS.desktopMaxDpr;
    this.tier=this.mobile?'BALANCED':'HIGH';
    this.slowFrames=0;this.fastFrames=0;this.transitions=0;this.lastFrameMs=0;
  }

  profile(){return QUALITY[this.tier];}
  pixelRatio(){
    const device=Math.max(1,this.win.devicePixelRatio||1);
    const capped=Math.min(this.baseMaxDpr,device);
    return Math.max(.7,capped*this.profile().dprScale);
  }

  update(frameMs){
    this.lastFrameMs=frameMs;
    let changed=false;
    if(frameMs>QUALITY.degradeAboveMs){
      this.slowFrames++;this.fastFrames=0;
      if(this.slowFrames>=QUALITY.degradeFrames){changed=this.#shift(-1);this.slowFrames=0;}
    }else if(frameMs<QUALITY.improveBelowMs){
      this.fastFrames++;this.slowFrames=0;
      if(this.fastFrames>=QUALITY.improveFrames){changed=this.#shift(1);this.fastFrames=0;}
    }else{
      this.slowFrames=Math.max(0,this.slowFrames-1);
      this.fastFrames=Math.max(0,this.fastFrames-1);
    }
    return changed;
  }

  #shift(delta){
    const index=ORDER.indexOf(this.tier);
    const next=ORDER[Math.max(0,Math.min(ORDER.length-1,index+delta))];
    if(next===this.tier)return false;
    this.tier=next;this.transitions++;return true;
  }

  setTierForTest(tier){
    if(!QUALITY[tier])throw new Error('Unknown quality tier '+tier);
    const changed=tier!==this.tier;
    if(changed){this.tier=tier;this.transitions++;}
    this.slowFrames=0;this.fastFrames=0;
    return changed;
  }

  snapshot(){
    return Object.freeze({
      tier:this.tier,
      mobile:this.mobile,
      coarsePointer:this.coarsePointer,
      baseMaxDpr:this.baseMaxDpr,
      pixelRatio:this.pixelRatio(),
      transitions:this.transitions,
      lastFrameMs:this.lastFrameMs,
      slowFrames:this.slowFrames,
      fastFrames:this.fastFrames
    });
  }
}
