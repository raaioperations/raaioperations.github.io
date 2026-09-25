import * as THREE from 'three';
import {PLAYER} from '../config.js';

export class PlayerController{
  constructor(root){this.root=root;this.velocity=new THREE.Vector3();this.grounded=true;this.verticalVelocity=0;this.state='IDLE';this.speed=0;this.input={moveX:0,moveY:0,sprint:false,jump:false,lookDX:0,lookDY:0};this.fwd=new THREE.Vector3();this.right=new THREE.Vector3();this.desired=new THREE.Vector3();}
  setInput(input){this.input=input;}
  update({dt},cameraYaw){
    this.fwd.set(-Math.sin(cameraYaw),0,-Math.cos(cameraYaw));this.right.set(Math.cos(cameraYaw),0,-Math.sin(cameraYaw));
    this.desired.set(0,0,0).addScaledVector(this.fwd,this.input.moveY).addScaledVector(this.right,this.input.moveX);
    const lenSq=this.desired.lengthSq();if(lenSq>1)this.desired.normalize();
    const sprinting=this.input.sprint&&lenSq>.01,targetSpeed=sprinting?PLAYER.sprintSpeed:PLAYER.walkSpeed;
    if(lenSq>.001){
      this.desired.normalize().multiplyScalar(targetSpeed);
      const blend=1-Math.exp(-(this.grounded?PLAYER.acceleration:PLAYER.airAcceleration)*dt);
      this.velocity.x=THREE.MathUtils.lerp(this.velocity.x,this.desired.x,blend);this.velocity.z=THREE.MathUtils.lerp(this.velocity.z,this.desired.z,blend);
    }else{
      const damp=Math.exp(-PLAYER.damping*dt);this.velocity.x*=damp;this.velocity.z*=damp;
    }
    if(this.input.jump&&this.grounded){this.verticalVelocity=PLAYER.jumpVelocity;this.grounded=false;}
    this.verticalVelocity-=PLAYER.gravity*dt;
    this.root.position.x+=this.velocity.x*dt;this.root.position.z+=this.velocity.z*dt;this.root.position.y+=this.verticalVelocity*dt;
    if(this.root.position.y<=0){this.root.position.y=0;if(this.verticalVelocity<0)this.verticalVelocity=0;this.grounded=true;}
    this.speed=Math.hypot(this.velocity.x,this.velocity.z);
    if(this.speed>.12){const targetYaw=Math.atan2(this.velocity.x,this.velocity.z);let delta=((targetYaw-this.root.rotation.y+Math.PI)%(Math.PI*2))-Math.PI;this.root.rotation.y+=delta*(1-Math.exp(-14*dt));}
    this.state=!this.grounded?'AIR':this.speed<.18?'IDLE':this.speed<6?'WALK':'RUN';
  }
  snapshot(){return{state:this.state,speed:this.speed,grounded:this.grounded,x:this.root.position.x,y:this.root.position.y,z:this.root.position.z};}
}
