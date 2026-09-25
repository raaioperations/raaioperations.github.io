import * as THREE from 'three';
import {CAMERA} from '../config.js';

export function segmentCylinderHitFraction(ax,az,bx,bz,cx,cz,r){
  const dx=bx-ax,dz=bz-az,fx=ax-cx,fz=az-cz,a=dx*dx+dz*dz;
  if(a<=1e-9)return null;
  const b=2*(fx*dx+fz*dz),c=fx*fx+fz*fz-r*r,disc=b*b-4*a*c;
  if(disc<0)return null;
  const root=Math.sqrt(disc),t1=(-b-root)/(2*a),t2=(-b+root)/(2*a);
  const t=[t1,t2].filter(v=>v>=0&&v<=1).sort((x,y)=>x-y)[0];
  return Number.isFinite(t)?t:null;
}

export class ThirdPersonCamera{
  constructor(camera,{obstacles=[]}={}){
    this.camera=camera;this.obstacles=obstacles;this.yaw=CAMERA.defaultYaw;this.pitch=CAMERA.defaultPitch;this.distance=CAMERA.defaultDistance;this.actualDistance=this.distance;
    this.target=new THREE.Vector3();this.desired=new THREE.Vector3();this.resolved=new THREE.Vector3();this.current=new THREE.Vector3();this.initialized=false;
  }
  applyLook(dx,dy){this.yaw-=dx*.0055;this.pitch=THREE.MathUtils.clamp(this.pitch+dy*.0045,CAMERA.minPitch,CAMERA.maxPitch);}
  zoom(delta){this.distance=THREE.MathUtils.clamp(this.distance+delta,CAMERA.minDistance,CAMERA.maxDistance);}
  solveCollision(target,desired){
    let best=1;
    for(const o of this.obstacles){
      const t=segmentCylinderHitFraction(target.x,target.z,desired.x,desired.z,o.x,o.z,o.r+CAMERA.collisionPadding);
      if(t===null)continue;
      const y=THREE.MathUtils.lerp(target.y,desired.y,t);
      if(y<=o.height+CAMERA.collisionPadding)best=Math.min(best,Math.max(.12,t-.04));
    }
    const groundY=.35;
    if(desired.y<groundY){
      const denom=desired.y-target.y;
      if(Math.abs(denom)>1e-6){const t=(groundY-target.y)/denom;if(t>=0&&t<=1)best=Math.min(best,Math.max(.12,t-.03));}
    }
    this.resolved.copy(target).lerp(desired,best);return this.resolved;
  }
  update({dt},playerPosition,input){
    if(input)this.applyLook(input.lookDX||0,input.lookDY||0);
    this.target.set(playerPosition.x,playerPosition.y+1.45,playerPosition.z);
    const cp=Math.cos(this.pitch);
    this.desired.set(
      this.target.x+Math.sin(this.yaw)*cp*this.distance,
      this.target.y+Math.sin(this.pitch)*this.distance+1,
      this.target.z+Math.cos(this.yaw)*cp*this.distance
    );
    const resolved=this.solveCollision(this.target,this.desired);
    if(!this.initialized){this.camera.position.copy(resolved);this.initialized=true;}
    else this.camera.position.lerp(resolved,1-Math.exp(-CAMERA.damping*dt));
    this.camera.lookAt(this.target);
    this.actualDistance=this.camera.position.distanceTo(this.target);
  }
  snapshot(){return{yaw:this.yaw,pitch:this.pitch,targetDistance:this.distance,actualDistance:this.actualDistance};}
}
