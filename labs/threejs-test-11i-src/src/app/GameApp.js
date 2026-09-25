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
import {SpatialHash} from '../spatial/SpatialHash.js';
import {ProductionWorldScene} from '../world/ProductionWorldScene.js';
import {LivingWorldSystem} from '../actors/LivingWorldSystem.js';
import {WorldInteractables} from '../interaction/WorldInteractables.js';
import {GameplayInteractionSystem} from '../interaction/GameplayInteractionSystem.js';
import {CombatSystem} from '../combat/CombatSystem.js';
import {EnemyCombatSystem} from '../combat/EnemyCombatSystem.js';
import {PlayerVitalState} from '../combat/PlayerVitalState.js';
import {InteractionPrompt} from '../ui/InteractionPrompt.js';
import {PlayerStatusHUD} from '../ui/PlayerStatusHUD.js';
import {DiagnosticsPanel} from '../ui/DiagnosticsPanel.js';

export class GameApp{
  constructor(container){
    if(!(container instanceof HTMLElement))throw new TypeError('GameApp requires HTMLElement');
    this.container=container;
    this.lifecycle='CREATED';
    this.mounted=false;
    this.disposed=false;
    this.characterLoaded=false;
    this.worldLoaded=false;
    this.lastInput={moveX:0,moveY:0,sprint:false,jump:false,interact:false,attack:false,lookDX:0,lookDY:0};
  }

  mount(){
    if(this.mounted||this.disposed)return this;

    this.canvas=document.createElement('canvas');
    this.canvas.className='game-canvas';
    this.canvas.setAttribute('aria-label','RAAI Test11I Copperwash Reach reciprocal combat foundation');
    this.container.appendChild(this.canvas);

    this.quality=new QualityManager(window);
    this.resources=new ResourceTracker();
    this.renderer=new RendererService({canvas:this.canvas,quality:this.quality});
    this.assets=new AssetManager();
    this.spatial=new SpatialHash();
    this.world=new ProductionWorldScene({
      resources:this.resources,
      spatialIndex:this.spatial,
      quality:this.quality
    });
    this.actors=new LivingWorldSystem({
      root:this.world.root,
      resources:this.resources,
      chunkManager:this.world.chunkManager,
      groundHeight:(x,z)=>this.world.groundHeight(x,z),
      worldSpatialIndex:this.spatial
    });
    this.actors.syncPopulation(0);

    this.worldInteractables=new WorldInteractables({
      root:this.world.root,
      resources:this.resources,
      groundHeight:(x,z)=>this.world.groundHeight(x,z)
    });

    this.input=new InputManager({
      canvas:this.canvas,
      container:this.container,
      coarsePointer:this.quality.coarsePointer
    });
    this.player=new PlayerController(this.world.playerRoot,{
      groundHeight:(x,z)=>this.world.groundHeight(x,z)
    });
    this.playerVitals=new PlayerVitalState();
    this.lockedPlayerInput={moveX:0,moveY:0,sprint:false,jump:false,interact:false,attack:false,lookDX:0,lookDY:0};
    this.character=new CharacterVisual({
      root:this.world.playerRoot,
      assetManager:this.assets
    });
    this.cameraRig=new ThirdPersonCamera(this.world.camera,{
      spatialIndex:this.spatial,
      groundHeight:(x,z)=>this.world.groundHeight(x,z)
    });
    this.interactionPrompt=new InteractionPrompt(this.container);
    this.interaction=new GameplayInteractionSystem({
      actors:this.actors,
      worldInteractables:this.worldInteractables,
      camera:this.world.camera,
      prompt:this.interactionPrompt,
      coarsePointer:this.quality.coarsePointer
    });
    this.combat=new CombatSystem({
      actors:this.actors,
      camera:this.world.camera,
      worldRoot:this.world.root,
      resources:this.resources,
      groundHeight:(x,z)=>this.world.groundHeight(x,z)
    });
    this.enemyCombat=new EnemyCombatSystem({
      actors:this.actors,
      playerVitals:this.playerVitals
    });
    this.playerStatusHUD=new PlayerStatusHUD(this.container);
    this.performance=new PerformanceMonitor(180);
    this.scheduler=new FrameScheduler();
    this.diagnostics=new DiagnosticsPanel(this.container);

    this.scheduler.register({
      name:'input',
      phase:FRAME_PHASE.INPUT,
      update:()=>{
        this.lastInput=this.input.sample();
      }
    });

    this.scheduler.register({
      name:'player',
      phase:FRAME_PHASE.SIMULATION,
      update:frame=>{
        const locked=this.playerVitals.isControlLocked(frame.frame);
        if(locked){
          this.lockedPlayerInput.lookDX=this.lastInput.lookDX;
          this.lockedPlayerInput.lookDY=this.lastInput.lookDY;
          this.player.setInput(this.lockedPlayerInput);
        }else{
          this.player.setInput(this.lastInput);
        }
        this.player.update(frame,this.cameraRig.yaw);
      }
    });

    this.scheduler.register({
      name:'character-animation',
      phase:FRAME_PHASE.ANIMATION,
      update:frame=>this.character.update(frame.dt,this.player.state)
    });

    this.scheduler.register({
      name:'world-streaming',
      phase:FRAME_PHASE.STREAMING,
      update:frame=>{
        if(this.world.updateStreaming(this.world.playerRoot.position)){
          this.actors.syncPopulation(frame.frame);
        }
      }
    });

    this.scheduler.register({
      name:'living-world',
      phase:FRAME_PHASE.ACTORS,
      update:frame=>this.actors.update(frame,this.world.playerRoot.position)
    });

    this.scheduler.register({
      name:'world-presentation',
      phase:FRAME_PHASE.PRESENTATION,
      update:frame=>this.world.updatePresentation(frame,this.world.camera.position)
    });

    this.scheduler.register({
      name:'gameplay-interaction',
      phase:FRAME_PHASE.INTERACTION,
      update:frame=>this.interaction.update(
        frame,
        this.world.playerRoot.position,
        this.playerVitals.downed?{...this.lastInput,interact:false}:this.lastInput
      )
    });

    this.scheduler.register({
      name:'combat',
      phase:FRAME_PHASE.COMBAT,
      update:frame=>this.combat.update(
        frame,
        this.world.playerRoot.position,
        this.playerVitals.downed?{...this.lastInput,attack:false}:this.lastInput
      )
    });

    this.scheduler.register({
      name:'enemy-combat',
      phase:FRAME_PHASE.ENEMY_COMBAT,
      update:frame=>this.enemyCombat.update(frame,this.world.playerRoot.position)
    });

    this.scheduler.register({
      name:'camera',
      phase:FRAME_PHASE.CAMERA,
      update:frame=>this.cameraRig.update(frame,this.world.playerRoot.position,this.lastInput)
    });

    this.scheduler.register({
      name:'quality',
      phase:FRAME_PHASE.QUALITY,
      update:frame=>{
        if(this.quality.update(frame.dt*1000)){
          this.world.applyQualityTier();
          this.actors.syncPopulation(frame.frame);
          this.resize();
        }
      }
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
        this.playerStatusHUD.update(this.playerVitals.snapshot(this.scheduler.frameCount));
        this.renderer.render(this.world.scene,this.world.camera);
        this.diagnostics.update({
          characterLoaded:this.characterLoaded,
          worldLoaded:this.worldLoaded,
          world:this.world,
          actors:this.actors,
          interaction:this.interaction,
          combat:this.combat,
          enemyCombat:this.enemyCombat,
          playerVitals:this.playerVitals,
          player:this.player,
          camera:this.cameraRig,
          assets:this.assets,
          quality:this.quality,
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
    this.playerStatusHUD?.dispose();
    this.combat?.dispose();
    this.interaction?.dispose();
    this.interactionPrompt?.dispose();
    this.worldInteractables?.dispose();
    this.actors?.dispose();
    this.world?.dispose();
    this.spatial?.clear();
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
      actors:this.actors?.snapshot(),
      interaction:this.interaction?.snapshot(),
      combat:this.combat?.snapshot(),
      enemyCombat:this.enemyCombat?.snapshot(this.scheduler?.frameCount??0),
      playerVitals:this.playerVitals?.snapshot(this.scheduler?.frameCount??0),
      assets:this.assets?.snapshot(),
      quality:this.quality?.snapshot(),
      scheduler:{
        running:this.scheduler?.running??false,
        frameCount:this.scheduler?.frameCount??0,
        systems:this.scheduler?.systemNames??[]
      },
      renderer:this.renderer?.snapshot()
    });
  }
}
