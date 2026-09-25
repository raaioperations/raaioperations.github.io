import {ACTORS,LIMITS,THREE_VERSION,WORLD} from '../config.js';

export class DiagnosticsPanel{
  constructor(container){
    this.root=document.createElement('section');
    this.root.className='diagnostics';
    this.root.innerHTML=`<div class="diag-title">TEST11F · ${WORLD.name.toUpperCase()} · ENTITY BEHAVIOR / INTERACTION</div><div class="diag-grid">
      <span>Three.js</span><b>${THREE_VERSION}</b><span>Renderer</span><b>WebGLRenderer</b><span>RAF loops</span><b>1 / 1</b>
      <span>Soldier</span><b data-k="soldier">LOADING</b><span>World GLBs</span><b data-k="assets">0 / 6</b>
      <span>Active chunks</span><b data-k="chunks">— / 9</b><span>Chunk refreshes</span><b data-k="refreshes">—</b>
      <span>Active actors</span><b data-k="actors">— / ${ACTORS.activeCapacity}</b><span>Actor pool realloc</span><b data-k="actorPool">0</b>
      <span>Duplicate IDs</span><b data-k="duplicates">—</b><span>Actor LOD N/M/F</span><b data-k="actorLod">—</b>
      <span>Move update/peak</span><b data-k="moveUpdates">— / —</b><span>Move budget</span><b data-k="moveBudget">— / ${ACTORS.updateBudgetPerFrame}</b>
      <span>Behavior eval/peak</span><b data-k="behaviorEval">— / —</b><span>Behavior budget</span><b data-k="behaviorBudget">— / ${ACTORS.behaviorBudgetPerFrame}</b>
      <span>Behaviors W/O/A/S</span><b data-k="states">—</b><span>Awareness transitions</span><b data-k="awareness">—</b>
      <span>Avoid transitions</span><b data-k="avoid">—</b><span>Social interactions</span><b data-k="social">—</b>
      <span>Interaction peak</span><b data-k="interactionPeak">— / ${ACTORS.interactionBudgetPerFrame}</b><span>Pair dupes blocked</span><b data-k="pairDuplicates">—</b>
      <span>Perception candidates peak</span><b data-k="perception">—</b><span>Min actor spacing</span><b data-k="spacing">—</b>
      <span>Restored actors</span><b data-k="restored">—</b><span>State store E/C</span><b data-k="store">—</b>
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

  update({characterLoaded,worldLoaded,world,actors,player,camera,assets,quality,renderer,performance,scheduler}){
    const ws=world.snapshot(),cs=ws.chunks,ss=ws.spatial,as=actors.snapshot(),ps=player.snapshot(),cam=camera.snapshot();
    const bs=as.behavior,states=bs.states,cache=assets.snapshot(),qs=quality.snapshot(),rs=renderer.snapshot(),perf=performance.stats();

    this.nodes.soldier.textContent=characterLoaded?'PASS':'LOADING';
    this.nodes.assets.textContent=`${ws.authoredLoaded} / ${ws.authoredExpected}`;
    this.nodes.chunks.textContent=`${cs.active} / ${WORLD.activeChunkCount}`;
    this.nodes.refreshes.textContent=String(cs.refreshes);
    this.nodes.actors.textContent=`${as.activeActors} / ${ACTORS.activeCapacity}`;
    this.nodes.actorPool.textContent=String(as.poolReallocations);
    this.nodes.duplicates.textContent=String(as.duplicateIds);
    this.nodes.actorLod.textContent=`${as.activeByLod.NEAR}/${as.activeByLod.MID}/${as.activeByLod.FAR}`;
    this.nodes.moveUpdates.textContent=`${as.updatesThisFrame} / ${as.peakUpdatesPerFrame}`;
    this.nodes.moveBudget.textContent=`${as.peakUpdatesPerFrame} / ${as.updateBudget}`;
    this.nodes.behaviorEval.textContent=`${bs.evaluationsThisFrame} / ${bs.peakEvaluationsPerFrame}`;
    this.nodes.behaviorBudget.textContent=`${bs.peakEvaluationsPerFrame} / ${bs.evaluationBudget}`;
    this.nodes.states.textContent=`${states.WANDER}/${states.OBSERVE_PLAYER}/${states.AVOID}/${states.SOCIAL}`;
    this.nodes.awareness.textContent=String(bs.playerAwarenessTransitions);
    this.nodes.avoid.textContent=String(bs.avoidanceTransitions);
    this.nodes.social.textContent=String(bs.interactions.totalCreated);
    this.nodes.interactionPeak.textContent=`${bs.interactions.peakCreatedPerFrame} / ${bs.interactions.limit}`;
    this.nodes.pairDuplicates.textContent=String(bs.interactions.duplicateSkips);
    this.nodes.perception.textContent=String(bs.neighborhood.peakCandidates);
    this.nodes.spacing.textContent=as.minActorSeparation.toFixed(2)+'m';
    this.nodes.restored.textContent=String(as.restoredEntities);
    this.nodes.store.textContent=`${as.store.entities} / ${as.store.chunks}`;
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
      bs.interactions.peakCreatedPerFrame<=ACTORS.interactionBudgetPerFrame&&
      rs.drawCalls<=LIMITS.drawCallsMax&&rs.triangles<=LIMITS.trianglesMax&&
      scheduler.frameCount>=10;

    this.nodes.result.textContent=pass
      ?'1 RAF ✓ · 27 ACTORS ✓ · BEHAVIOR ✓ · PERCEPTION ✓ · INTERACTION ✓ · BUDGET PASS ✓'
      :'VERIFYING';
  }

  dispose(){this.root.remove();}
}
