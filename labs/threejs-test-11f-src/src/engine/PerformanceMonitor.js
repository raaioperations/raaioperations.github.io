export class PerformanceMonitor{
  constructor(capacity=180){this.capacity=capacity;this.samples=[];}
  sample(dt){const ms=Math.max(0,dt*1000);this.samples.push(ms);if(this.samples.length>this.capacity)this.samples.shift();}
  stats(){if(!this.samples.length)return{count:0,avgMs:0,p95Ms:0,p99Ms:0};const o=[...this.samples].sort((a,b)=>a-b),avgMs=this.samples.reduce((a,b)=>a+b,0)/this.samples.length,p=p=>o[Math.min(o.length-1,Math.ceil(o.length*p)-1)];return{count:this.samples.length,avgMs,p95Ms:p(.95),p99Ms:p(.99)};}
}
