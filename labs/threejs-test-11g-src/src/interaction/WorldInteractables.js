import * as THREE from 'three';
import {WORLD} from '../config.js';

export class WorldInteractables{
  constructor({root,resources,groundHeight}){
    this.root=new THREE.Group();
    this.root.name='GameplayInteractables';
    root.add(this.root);
    this.resources=resources;
    this.groundHeight=groundHeight;
    this.records=new Map();
    this.pickupActions=0;
    this.useActions=0;

    const pickupGeometry=resources.own(new THREE.OctahedronGeometry(.34,0));
    const pickupMaterial=resources.own(new THREE.MeshStandardMaterial({color:0xc57b47,roughness:.55,metalness:.18}));
    const deviceGeometry=resources.own(new THREE.CylinderGeometry(.34,.46,.95,6,1));
    const deviceMaterial=resources.own(new THREE.MeshStandardMaterial({color:0x607b67,roughness:.78,metalness:.05}));

    this.#add({
      id:'pickup:copper-shard',type:'PICKUP',label:'Copper Shard',prompt:'PICK UP',
      x:WORLD.playerSpawnX+2.5,z:WORLD.playerSpawnZ+1.7,
      mesh:new THREE.Mesh(pickupGeometry,pickupMaterial)
    });
    this.#add({
      id:'use:waystone',type:'USE',label:'Waystone',prompt:'ACTIVATE',
      x:WORLD.playerSpawnX-2.8,z:WORLD.playerSpawnZ-1.5,
      mesh:new THREE.Mesh(deviceGeometry,deviceMaterial)
    });
  }

  #add(spec){
    const y=this.groundHeight(spec.x,spec.z);
    spec.mesh.position.set(spec.x,y+(spec.type==='PICKUP'?.48:.47),spec.z);
    spec.mesh.rotation.y=.35;
    spec.mesh.userData.interactableId=spec.id;
    this.root.add(spec.mesh);
    this.records.set(spec.id,{
      id:spec.id,type:spec.type,label:spec.label,prompt:spec.prompt,
      x:spec.x,z:spec.z,y,
      active:true,collected:false,toggled:false,actionCount:0,mesh:spec.mesh
    });
  }

  candidates(){
    const out=[];
    for(const record of this.records.values()){
      if(!record.active)continue;
      out.push({
        id:record.id,type:record.type,label:record.label,prompt:record.prompt,
        x:record.x,z:record.z,y:record.y+.55,record
      });
    }
    return out;
  }

  get(id){return this.records.get(id)||null;}

  execute(id){
    const record=this.records.get(id);
    if(!record||!record.active)return false;
    record.actionCount++;

    if(record.type==='PICKUP'){
      record.collected=true;
      record.active=false;
      record.mesh.visible=false;
      this.pickupActions++;
      return true;
    }

    if(record.type==='USE'){
      record.toggled=!record.toggled;
      record.mesh.rotation.z=record.toggled?.32:0;
      record.mesh.scale.y=record.toggled?.84:1;
      this.useActions++;
      return true;
    }
    return false;
  }

  snapshot(){
    const pickup=this.get('pickup:copper-shard');
    const device=this.get('use:waystone');
    return Object.freeze({
      total:this.records.size,
      active:[...this.records.values()].filter(r=>r.active).length,
      pickupCollected:!!pickup?.collected,
      pickupActions:this.pickupActions,
      waystoneToggled:!!device?.toggled,
      useActions:this.useActions
    });
  }

  dispose(){
    this.root.removeFromParent();
    this.records.clear();
  }
}
