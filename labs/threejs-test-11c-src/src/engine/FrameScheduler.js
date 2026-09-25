import {LIMITS} from '../config.js';

export class FrameScheduler{
  #systems=[];#running=false;#frameId=0;#lastNow=0;#elapsed=0;#frameCount=0;#nextOrder=0;
  constructor({now=()=>performance.now()}={}){this.now=now;this.boundFrame=(time)=>{if(!this.#running)return;this.#run(time);this.#schedule();};}
  register({name,phase,update}){
    if(!name||!Number.isFinite(phase)||typeof update!=='function')throw new TypeError('FrameScheduler.register requires name, numeric phase, and update');
    if(this.#systems.some(s=>s.name===name))throw new Error('FrameScheduler duplicate system: '+name);
    const system={name,phase,update,order:this.#nextOrder++};this.#systems.push(system);this.#systems.sort((a,b)=>(a.phase-b.phase)||(a.order-b.order));
    return()=>{const i=this.#systems.indexOf(system);if(i>=0)this.#systems.splice(i,1);};
  }
  start(){if(this.#running)return;this.#running=true;this.#lastNow=this.now();this.#schedule();}
  pause(){if(!this.#running)return;this.#running=false;if(this.#frameId)cancelAnimationFrame(this.#frameId);this.#frameId=0;}
  step(now=this.now()){this.#run(now);}
  #schedule(){this.#frameId=requestAnimationFrame(this.boundFrame);}
  #run(now){
    const raw=this.#lastNow>0?(now-this.#lastNow)/1000:0;
    const dt=Math.min(LIMITS.frameDtClampSeconds,Math.max(0,raw));
    this.#lastNow=now;this.#elapsed+=dt;this.#frameCount++;
    const frame=Object.freeze({now,dt,elapsed:this.#elapsed,frame:this.#frameCount});
    for(const system of this.#systems)system.update(frame);
  }
  dispose(){this.pause();this.#systems.length=0;}
  get running(){return this.#running;}get frameCount(){return this.#frameCount;}get elapsed(){return this.#elapsed;}get systemNames(){return this.#systems.map(s=>s.name);}
}
