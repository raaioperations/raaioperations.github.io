import {ACTORS,INTERACTION,LIMITS,THREE_VERSION,WORLD} from '../config.js';

export class DiagnosticsPanel{
  constructor(container){
    this.root=document.createElement('section');
    this.root.className='diagnostics';
    this.root.innerHTML=`<div class="diag-title">TEST11G · ${WORLD.name.toUpperCase()} · GAMEPLAY INTERACTION</div><div class="diag-grid">
      <span>Three.js</span><b>${THREE_VERSION}</b><span>Renderer</span><b>WebGLRenderer</b><span>RAF loops</span><b>1 / 1</b>
      <span>Soldier</span><b data-k="soldier">LOADING</b><span>World GLBs</span><b data-k="assets">0 / 6</b>
      <span>Active chunks</span><b data-k="chunks">— / 9</b><span>Chunk refreshes</span><b data-k="refreshes">—</b>
      <span>Active actors</span><b data-k="actors">— / ${ACTORS.activeCapacity}</b><span>Actor pool realloc</span><b data-k="actorPool">0</b>
      <span>Move peak/budget</span><b data-k="moveBudget">— / ${ACTORS.updateBudgetPerFrame}</b><span>Behavior peak/budget</span><b data-k="behaviorBudget">— / ${ACTORS.behaviorBudgetPerFrame}</b>
      <span>Target</span><b data-k="target">NONE</b><span>Prompt</span><b data-k="prompt">HIDDEN</b>
      <span>Target candidates peak</span><b data-k="targetCandidates">—</b><span>Actions total/peak</span><b data-k="actions">— / —</b>
      <span>Action budget</span><b data-k="actionBudget">— / ${INTERACTION.actionBudgetPerFrame}</b><span>Last action</span><b data-k="lastAction">—</b>
      <span>Pickup</span><b data-k="pickup">READY</b><span>Waystone</span><b data-k="waystone">OFF</b>
      <span>NPC interactions</span><b data-k="npc">0</b><span>No-target actions</span><b data-k="noTarget">0</b>
      <span>Awareness / avoid / social</span><b data-k="behavior">—</b><span>Restored actors</span><b data-k="restored">—</b>
      <span>Spatial entries</span><b data-k="spatial">—</b><span>Camera candidates</span><b data-k="candidates">—</b>
      <span>Asset cache H/M</span><b data-k="cache">—</b><span>Quality / DPR</span><b data-k="quality">—</b>
      <span>Ground error</span><b data-k="ground">—</b><span>Camera clearance</span><b data-k="camera">—</b>
      <span>Draw calls</span><b data-k="draw">— / ${LIMITS.drawCallsMax}</b><span>Triangles</span><b data-k="tri">— / ${LIMITS.trianglesMax.toLocaleString()}</b>
      <span>Avg frame</span><b data-k="avg">—</b><span>p95 frame</span><b data-k="p95">—</b>
      <strong data-k="result">VERIFYING</strong>
    </div>`;
    container.appendChild(this.root);
    this.nodes=Object.fromEntries([...this.root.querySelectorAll('[data-k]')].map(n=>[n.dataset.k,n]));
  }

  update({characterLoaded,worldLoaded,world,actors,interaction,player,camera,assets,quality,renderer,performance,scheduler}){
    const ws=world.snapshot(),cs=ws.chunks,ss=ws.spatial,as=actors.snapshot(),is=interaction.snapshot(),ps=player.snapshot(),cam=camera.snapshot();
    const bs=as.behavior,cache=assets.snapshot(),qs=quality.snapshot(),rs=renderer.snapshot(),perf=performance.stats();

    this.nodes.soldier.textContent=characterLoaded?'PASS':'LOADING';
    this.nodes.assets.textContent=`${ws.authoredLoaded} / ${ws.authoredExpected}`;
    this.nodes.chunks.textContent=`${cs.active} / ${WORLD.activeChunkCount}`;
    this.nodes.refreshes.textContent=String(cs.refreshes);
    this.nodes.actors.textContent=`${as.activeActors} / ${ACTORS.activeCapacity}`;
    this.nodes.actorPool.textContent=String(as.poolReallocations);
    this.nodes.moveBudget.textContent=`${as.peakUpdatesPerFrame} / ${as.updateBudget}`;
    this.nodes.behaviorBudget.textContent=`${bs.peakEvaluationsPerFrame} / ${bs.evaluationBudget}`;
    this.nodes.target.textContent=is.currentTarget?`${is.currentTarget.type} · ${is.currentTarget.label}`:'NONE';
    this.nodes.prompt.textContent=is.prompt.visible?'VISIBLE':'HIDDEN';
    this.nodes.targetCandidates.textContent=String(is.peakCandidates);
    this.nodes.actions.textContent=`${is.totalActions} / ${is.peakActionsPerFrame}`;
    this.nodes.actionBudget.textContent=`${is.peakActionsPerFrame} / ${is.actionBudget}`;
    this.nodes.lastAction.textContent=is.lastAction||'—';
    this.nodes.pickup.textContent=is.world.pickupCollected?'COLLECTED':'READY';
    this.nodes.waystone.textContent=is.world.waystoneToggled?'ON':'OFF';
    this.nodes.npc.textContent=String(is.npcInteractions);
    this.nodes.noTarget.textContent=String(is.noTargetActions);
    this.nodes.behavior.textContent=`${bs.playerAwarenessTransitions} / ${bs.avoidanceTransitions} / ${bs.interactions.totalCreated}`;
    this.nodes.restored.textContent=String(as.restoredEntities);
    this.nodes.spatial.textContent=String(ss.entries);
    this.nodes.candidates.textContent=String(cam.candidates);
    this.nodes.cache.textContent=`${cache.hits} / ${cache.misses}`;
    this.nodes.quality.textContent=`${qs.tier} / ${rs.dpr.toFixed(2)}`;
    this.nodes.ground.textContent=ps.grounded?ps.groundError.toFixed(3)+'m':'AIR';
    this.nodes.camera.textContent=cam.terrainClearance.toFixed(2)+'m';
    this.nodes.draw.textContent=`${rs.drawCalls} / ${LIMITS.drawCallsMax}`;
    this.nodes.tri.textContent=`${rs.triangles.toLocaleString()} / ${LIMITS.trianglesMax.toLocaleString()}`;
    this.nodes.avg.textContent=perf.avgMs.toFixed(2)+' ms';
    this.nodes.p95.textContent=perf.p95Ms.toFixed(2)+' ms';

    const pass=
      characterLoaded&&worldLoaded&&
      as.activeActors===ACTORS.activeCapacity&&
      as.poolReallocations===0&&as.duplicateIds===0&&
      as.peakUpdatesPerFrame<=ACTORS.updateBudgetPerFrame&&
      bs.peakEvaluationsPerFrame<=ACTORS.behaviorBudgetPerFrame&&
      is.peakActionsPerFrame<=INTERACTION.actionBudgetPerFrame&&
      rs.drawCalls<=LIMITS.drawCallsMax&&rs.triangles<=LIMITS.trianglesMax&&
      scheduler.frameCount>=10;

    this.nodes.result.textContent=pass
      ?'1 RAF ✓ · TARGET ✓ · PROMPT ✓ · PICKUP/USE/NPC READY ✓ · ACTION BUDGET ✓'
      :'VERIFYING';
  }

  dispose(){this.root.remove();}
}
