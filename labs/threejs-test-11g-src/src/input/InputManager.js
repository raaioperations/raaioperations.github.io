export class InputManager{
  constructor({canvas,container,coarsePointer=false}){
    this.canvas=canvas;this.container=container;this.coarsePointer=coarsePointer;
    this.keys=new Set();this.moveX=0;this.moveY=0;this.sprint=false;this.jumpQueued=false;this.interactQueued=false;this.lookDX=0;this.lookDY=0;this.dragPointer=null;this.testIntent=null;
    this.onKeyDown=e=>{
      this.keys.add(e.code);
      if(e.code==='Space'){this.jumpQueued=true;e.preventDefault();}
      if(e.code==='KeyE'){this.interactQueued=true;e.preventDefault();}
    };
    this.onKeyUp=e=>this.keys.delete(e.code);
    this.onPointerDown=e=>this.#pointerDown(e);
    this.onPointerMove=e=>this.#pointerMove(e);
    this.onPointerUp=e=>this.#pointerUp(e);
    window.addEventListener('keydown',this.onKeyDown);
    window.addEventListener('keyup',this.onKeyUp);
    canvas.addEventListener('pointerdown',this.onPointerDown);
    canvas.addEventListener('pointermove',this.onPointerMove);
    canvas.addEventListener('pointerup',this.onPointerUp);
    canvas.addEventListener('pointercancel',this.onPointerUp);
    if(coarsePointer)this.#buildTouchControls();
  }

  #buildTouchControls(){
    this.ui=document.createElement('div');this.ui.className='touch-ui';
    this.ui.innerHTML='<div class="stick" data-stick><div class="knob" data-knob></div></div><button class="touch-btn sprint" data-sprint>RUN</button><button class="touch-btn jump" data-jump>JUMP</button><button class="touch-btn use" data-use>USE</button>';
    this.container.appendChild(this.ui);
    this.stick=this.ui.querySelector('[data-stick]');
    this.knob=this.ui.querySelector('[data-knob]');
    this.sprintBtn=this.ui.querySelector('[data-sprint]');
    this.jumpBtn=this.ui.querySelector('[data-jump]');
    this.useBtn=this.ui.querySelector('[data-use]');
    this.stickPointer=null;

    const setStick=e=>{
      const r=this.stick.getBoundingClientRect(),cx=r.left+r.width/2,cy=r.top+r.height/2,max=r.width*.32;
      let dx=e.clientX-cx,dy=e.clientY-cy;
      const len=Math.hypot(dx,dy)||1,scale=Math.min(1,max/len);
      dx*=scale;dy*=scale;
      this.moveX=dx/max;this.moveY=-dy/max;
      this.knob.style.transform=`translate(${dx}px,${dy}px)`;
    };

    this.onStickDown=e=>{e.preventDefault();this.stickPointer=e.pointerId;this.stick.setPointerCapture(e.pointerId);setStick(e);};
    this.onStickMove=e=>{if(e.pointerId===this.stickPointer)setStick(e);};
    this.onStickUp=e=>{if(e.pointerId!==this.stickPointer)return;this.stickPointer=null;this.moveX=this.moveY=0;this.knob.style.transform='translate(0,0)';};

    this.stick.addEventListener('pointerdown',this.onStickDown);
    this.stick.addEventListener('pointermove',this.onStickMove);
    this.stick.addEventListener('pointerup',this.onStickUp);
    this.stick.addEventListener('pointercancel',this.onStickUp);

    this.onSprintDown=e=>{e.preventDefault();this.sprint=true;};
    this.onSprintUp=()=>{this.sprint=false;};
    this.sprintBtn.addEventListener('pointerdown',this.onSprintDown);
    for(const ev of ['pointerup','pointercancel','pointerleave'])this.sprintBtn.addEventListener(ev,this.onSprintUp);

    this.onJump=e=>{e.preventDefault();this.jumpQueued=true;};
    this.jumpBtn.addEventListener('pointerdown',this.onJump);

    this.onUse=e=>{e.preventDefault();this.interactQueued=true;};
    this.useBtn.addEventListener('pointerdown',this.onUse);
  }

  #pointerDown(e){
    if(this.coarsePointer&&e.clientX<this.container.clientWidth*.42&&e.clientY>this.container.clientHeight*.48)return;
    this.dragPointer=e.pointerId;this.lastX=e.clientX;this.lastY=e.clientY;this.canvas.setPointerCapture?.(e.pointerId);
  }

  #pointerMove(e){
    if(e.pointerId!==this.dragPointer)return;
    this.lookDX+=e.clientX-this.lastX;this.lookDY+=e.clientY-this.lastY;
    this.lastX=e.clientX;this.lastY=e.clientY;
  }

  #pointerUp(e){if(e.pointerId===this.dragPointer)this.dragPointer=null;}

  setTestIntent(intent){this.testIntent=intent?{...intent}:null;}

  sample(){
    if(this.testIntent){
      const out={
        moveX:this.testIntent.moveX||0,
        moveY:this.testIntent.moveY||0,
        sprint:!!this.testIntent.sprint,
        jump:!!this.testIntent.jump,
        interact:!!this.testIntent.interact,
        lookDX:this.testIntent.lookDX||0,
        lookDY:this.testIntent.lookDY||0
      };
      this.testIntent.jump=false;
      this.testIntent.interact=false;
      this.testIntent.lookDX=0;
      this.testIntent.lookDY=0;
      return out;
    }

    const keyX=(this.keys.has('KeyD')?1:0)-(this.keys.has('KeyA')?1:0);
    const keyY=(this.keys.has('KeyW')?1:0)-(this.keys.has('KeyS')?1:0);
    const out={
      moveX:Math.max(-1,Math.min(1,this.moveX+keyX)),
      moveY:Math.max(-1,Math.min(1,this.moveY+keyY)),
      sprint:this.sprint||this.keys.has('ShiftLeft')||this.keys.has('ShiftRight'),
      jump:this.jumpQueued,
      interact:this.interactQueued,
      lookDX:this.lookDX,
      lookDY:this.lookDY
    };
    this.jumpQueued=false;
    this.interactQueued=false;
    this.lookDX=0;
    this.lookDY=0;
    return out;
  }

  dispose(){
    window.removeEventListener('keydown',this.onKeyDown);
    window.removeEventListener('keyup',this.onKeyUp);
    this.canvas.removeEventListener('pointerdown',this.onPointerDown);
    this.canvas.removeEventListener('pointermove',this.onPointerMove);
    this.canvas.removeEventListener('pointerup',this.onPointerUp);
    this.canvas.removeEventListener('pointercancel',this.onPointerUp);

    if(this.stick){
      this.stick.removeEventListener('pointerdown',this.onStickDown);
      this.stick.removeEventListener('pointermove',this.onStickMove);
      this.stick.removeEventListener('pointerup',this.onStickUp);
      this.stick.removeEventListener('pointercancel',this.onStickUp);
    }
    if(this.sprintBtn){
      this.sprintBtn.removeEventListener('pointerdown',this.onSprintDown);
      for(const ev of ['pointerup','pointercancel','pointerleave'])this.sprintBtn.removeEventListener(ev,this.onSprintUp);
    }
    this.jumpBtn?.removeEventListener('pointerdown',this.onJump);
    this.useBtn?.removeEventListener('pointerdown',this.onUse);
    this.ui?.remove();
  }
}
