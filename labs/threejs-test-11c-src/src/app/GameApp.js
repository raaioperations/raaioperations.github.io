import {FRAME_PHASE} from '../config.js';
import {FrameScheduler} from '../engine/FrameScheduler.js';
import {QualityManager} from '../engine/QualityManager.js';
import {ResourceTracker} from '../engine/ResourceTracker.js';
import {RendererService} from '../engine/RendererService.js';
import {PerformanceMonitor} from '../engine/PerformanceMonitor.js';
import {AssetManager} from '../assets/AssetManager.js';
import {InputManager} from '../input/InputManager.js';
import {PlayerController} from '../player/PlayerController.js';
import {CharacterVisual} from '../player/CharacterVisual.js';
import {ThirdPersonCamera} from '../camera/ThirdPersonCamera.js';
import {WorldFoundationScene} from '../world/WorldFoundationScene.js';
import {DiagnosticsPanel} from '../ui/DiagnosticsPanel.js';

export class GameApp{
  constructor(container){
    if(!(container instanceof HTMLElement))throw new TypeError('GameApp requires HTMLElement');
    this.container=container;this.lifecycle='CREATED';this.mounted=false;this.disposed=false;
    this.characterLoaded=false;this.worldLoaded=false;
    this.lastInput={moveX:0,moveY:0,sprint:false,jump:false,lookDX:0,lookDY:0};
  }

  mount(){
    if(this.mounted||this.disposed)return this;

    this.canvas=document.createElement('canvas');
    this.canvas.className='game-canvas';
    this.canvas.setAttribute('aria-label','RAAI Test11C Copperwash Reach world foundation');
    this.container.appendChild(this.canvas);

    this.quality=new QualityManager(window);
    this.resources=new ResourceTracker();
    this.renderer=new RendererService({canvas:this.canvas,quality:this.quality});
    this.assets=new AssetManager();
    this.world=new WorldFoundationScene(this.resources);
    this.input=new InputManager({canvas:this.canvas,container:this.container,coarsePointer:this.quality.coarsePointer});
    this.player=new PlayerController(this.world.playerRoot,{groundHeight:(x,z)=>this.world.groundHeight(x,z)});
    this.character=new CharacterVisual({root:this.world.playerRoot,assetManager:this.assets,resources:this.resources});
    this.cameraRig=new ThirdPersonCamera(this.world.camera,{
      obstacles:this.world.obstacles,
      groundHeight:(x,z)=>this.world.groundHeight(x,z)
    });
    this.performance=new PerformanceMonitor(180);
    this.scheduler=new FrameScheduler();
    this.diagnostics=new DiagnosticsPanel(this.container);

    this.scheduler.register({
      name:'input',
      phase:FRAME_PHASE.INPUT,
      update:()=>{this.lastInput=this.input.sample();this.player.setInput(this.lastInput);}
    });
    this.scheduler.register({
      name:'player',
      phase:FRAME_PHASE.SIMULATION,
      update:frame=>this.player.update(frame,this.cameraRig.yaw)
    });
    this.scheduler.register({
      name:'character-animation',
      phase:FRAME_PHASE.ANIMATION,
      update:frame=>this.character.update(frame.dt,this.player.state)
    });
    this.scheduler.register({
      name:'world-presentation',
      phase:FRAME_PHASE.PRESENTATION,
      update:frame=>this.world.update(frame)
    });
    this.scheduler.register({
      name:'camera',
      phase:FRAME_PHASE.CAMERA,
      update:frame=>this.cameraRig.update(frame,this.world.playerRoot.position,this.lastInput)
    });
    this.scheduler.register({
      name:'performance',
      phase:FRAME_PHASE.DIAGNOSTICS,
      update:frame=>this.performance.sample(frame.dt)
    });
    this.scheduler.register({
      name:'render',
      phase:FRAME_PHASE.RENDER,
      update:()=>{
        this.renderer.render(this.world.scene,this.world.camera);
        this.diagnostics.update({
          characterLoaded:this.characterLoaded,
          worldLoaded:this.worldLoaded,
          world:this.world,
          player:this.player,
          camera:this.cameraRig,
          inputMode:this.quality.coarsePointer?'TOUCH+KEY':'KEY+POINTER',
          renderer:this.renderer,
          performance:this.performance,
          scheduler:this.scheduler
        });
      }
    });

    this.onResize=()=>this.resize();
    this.onVisibility=()=>document.hidden?this.pause('HIDDEN'):this.start('VISIBLE');
    this.onContextLost=e=>{
      e.preventDefault();
      this.pause('CONTEXT_LOST');
      document.documentElement.dataset.runtimeError='1';
    };

    this.resizeObserver=new ResizeObserver(this.onResize);
    this.resizeObserver.observe(this.container);
    window.addEventListener('resize',this.onResize,{passive:true});
    window.addEventListener('orientationchange',this.onResize,{passive:true});
    window.visualViewport?.addEventListener('resize',this.onResize,{passive:true});
    document.addEventListener('visibilitychange',this.onVisibility);
    this.canvas.addEventListener('webglcontextlost',this.onContextLost,false);

    this.resize();
    this.lifecycle='MOUNTED';
    this.mounted=true;

    this.ready=Promise.all([
      this.character.load().then(()=>{this.characterLoaded=true;}),
      this.world.loadAuthoredAssets(this.assets).then(()=>{this.worldLoaded=true;})
    ]).then(()=>this);

    return this;
  }

  start(reason='START'){
    if(!this.mounted||this.disposed)return;
    this.lifecycle='RUNNING:'+reason;
    this.scheduler.start();
  }

  pause(reason='PAUSE'){
    if(!this.mounted||this.disposed)return;
    this.scheduler.pause();
    this.lifecycle='PAUSED:'+reason;
  }

  resize(){
    if(!this.renderer)return false;
    return this.renderer.resizeTo(this.container,this.world.camera);
  }

  dispose(){
    if(this.disposed)return;
    this.scheduler?.dispose();
    this.resizeObserver?.disconnect();
    window.removeEventListener('resize',this.onResize);
    window.removeEventListener('orientationchange',this.onResize);
    window.visualViewport?.removeEventListener('resize',this.onResize);
    document.removeEventListener('visibilitychange',this.onVisibility);
    this.canvas?.removeEventListener('webglcontextlost',this.onContextLost,false);

    this.input?.dispose();
    this.character?.dispose();
    this.world?.dispose();
    this.assets?.dispose();
    this.diagnostics?.dispose();
    this.resources?.dispose();
    this.renderer?.dispose();
    this.canvas?.remove();

    this.mounted=false;
    this.disposed=true;
    this.lifecycle='DISPOSED';
  }

  snapshot(){
    return Object.freeze({
      lifecycle:this.lifecycle,
      characterLoaded:this.characterLoaded,
      worldLoaded:this.worldLoaded,
      player:this.player?.snapshot(),
      camera:this.cameraRig?.snapshot(),
      world:this.world?.snapshot(),
      scheduler:{
        running:this.scheduler?.running??false,
        frameCount:this.scheduler?.frameCount??0,
        systems:this.scheduler?.systemNames??[]
      },
      renderer:this.renderer?.snapshot(),
      quality:this.quality?.snapshot()
    });
  }
}
