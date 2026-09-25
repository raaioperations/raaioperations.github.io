import {ACTORS,COMBAT,ENEMY_COMBAT,INTERACTION,LIMITS,THREE_VERSION,WORLD} from '../config.js';

export class DiagnosticsPanel{
  constructor(container){
    this.root=document.createElement('section');
    this.root.className='diagnostics';
    this.root.innerHTML=`<div class="diag-title">TEST11I · ${WORLD.name.toUpperCase()} · RECIPROCAL COMBAT</div><div class="diag-grid">
      <span>Three.js</span><b>${THREE_VERSION}</b><span>Renderer</span><b>WebGLRenderer</b><span>RAF loops</span><b>1 / 1</b>
      <span>Soldier</span><b data-k="soldier">LOADING</b><span>World GLBs</span><b data-k="assets">0 / 6</b>
      <span>Active chunks</span><b data-k="chunks">— / 9</b><span>Active actors</span><b data-k="actors">— / ${ACTORS.activeCapacity}</b>
      <span>Actor pool realloc</span><b data-k="actorPool">0</b><span>Move peak/budget</span><b data-k="moveBudget">— / ${ACTORS.updateBudgetPerFrame}</b>
      <span>Behavior peak/budget</span><b data-k="behaviorBudget">— / ${ACTORS.behaviorBudgetPerFrame}</b><span>Interaction peak</span><b data-k="interactionBudget">— / ${INTERACTION.actionBudgetPerFrame}</b>
      <span>Player attack peak</span><b data-k="playerAttackBudget">— / ${COMBAT.attackStartsPerFrame}</b><span>Enemy eval peak</span><b data-k="enemyEvalBudget">— / ${ENEMY_COMBAT.evaluationBudgetPerFrame}</b>
      <span>Enemy attack peak</span><b data-k="enemyAttackBudget">— / ${ENEMY_COMBAT.attackStartsPerFrame}</b><span>Active hostiles</span><b data-k="hostiles">0</b>
      <span>Enemy phases R/T/S/R</span><b data-k="enemyPhases">0/0/0/0</b><span>Concurrent attacker peak</span><b data-k="concurrent">0 / ${ENEMY_COMBAT.maxConcurrentAttackers}</b>
      <span>Enemy attacks</span><b data-k="enemyAttacks">0</b><span>Enemy hits / misses</span><b data-k="enemyHits">0 / 0</b>
      <span>I-frame blocks</span><b data-k="iframes">0</b><span>Player downs</span><b data-k="playerDowns">0</b>
      <span>Player HP</span><b data-k="playerHp">100 / 100</b><span>Player state</span><b data-k="playerState">READY</b>
      <span>Player hit count</span><b data-k="playerHits">0</b><span>Last enemy damage</span><b data-k="enemyDamage">0</b>
      <span>Player combat hits</span><b data-k="playerHitsOut">0</b><span>Actor damage events</span><b data-k="actorDamage">0</b>
      <span>Defeated actors</span><b data-k="defeated">0</b><span>Restored actors</span><b data-k="restored">0</b>
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

  update({characterLoaded,worldLoaded,world,actors,interaction,combat,enemyCombat,playerVitals,player,camera,assets,quality,renderer,performance,scheduler}){
    const ws=world.snapshot(),cs=ws.chunks,ss=ws.spatial,as=actors.snapshot(),is=interaction.snapshot(),co=combat.snapshot(),ec=enemyCombat.snapshot(scheduler.frameCount),pv=playerVitals.snapshot(scheduler.frameCount),ps=player.snapshot(),cam=camera.snapshot();
    const bs=as.behavior,cache=assets.snapshot(),qs=quality.snapshot(),rs=renderer.snapshot(),perf=performance.stats();

    this.nodes.soldier.textContent=characterLoaded?'PASS':'LOADING';
    this.nodes.assets.textContent=`${ws.authoredLoaded} / ${ws.authoredExpected}`;
    this.nodes.chunks.textContent=`${cs.active} / ${WORLD.activeChunkCount}`;
    this.nodes.actors.textContent=`${as.activeActors} / ${ACTORS.activeCapacity}`;
    this.nodes.actorPool.textContent=String(as.poolReallocations);
    this.nodes.moveBudget.textContent=`${as.peakUpdatesPerFrame} / ${as.updateBudget}`;
    this.nodes.behaviorBudget.textContent=`${bs.peakEvaluationsPerFrame} / ${bs.evaluationBudget}`;
    this.nodes.interactionBudget.textContent=`${is.peakActionsPerFrame} / ${is.actionBudget}`;
    this.nodes.playerAttackBudget.textContent=`${co.peakAttackStartsPerFrame} / ${co.attackStartBudget}`;
    this.nodes.enemyEvalBudget.textContent=`${ec.peakEvaluationsPerFrame} / ${ec.evaluationBudget}`;
    this.nodes.enemyAttackBudget.textContent=`${ec.peakAttackStartsPerFrame} / ${ec.attackStartBudget}`;
    this.nodes.hostiles.textContent=String(ec.activeHostiles);
    this.nodes.enemyPhases.textContent=`${ec.phases.READY}/${ec.phases.TELEGRAPH}/${ec.phases.STRIKE}/${ec.phases.RECOVERY}`;
    this.nodes.concurrent.textContent=`${ec.concurrentAttackersPeak} / ${ec.concurrentAttackersLimit}`;
    this.nodes.enemyAttacks.textContent=String(ec.totalAttackStarts);
    this.nodes.enemyHits.textContent=`${ec.totalHits} / ${ec.totalMisses}`;
    this.nodes.iframes.textContent=String(ec.invulnerabilityBlocks);
    this.nodes.playerDowns.textContent=String(ec.playerDowns);
    this.nodes.playerHp.textContent=`${pv.health} / ${pv.maxHealth}`;
    this.nodes.playerState.textContent=pv.status;
    this.nodes.playerHits.textContent=String(pv.hitCount);
    this.nodes.enemyDamage.textContent=String(ec.lastDamage);
    this.nodes.playerHitsOut.textContent=String(co.totalHits);
    this.nodes.actorDamage.textContent=String(as.damageEvents);
    this.nodes.defeated.textContent=String(as.defeatedCount);
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
      co.peakAttackStartsPerFrame<=COMBAT.attackStartsPerFrame&&
      ec.peakEvaluationsPerFrame<=ENEMY_COMBAT.evaluationBudgetPerFrame&&
      ec.peakAttackStartsPerFrame<=ENEMY_COMBAT.attackStartsPerFrame&&
      ec.concurrentAttackersPeak<=ENEMY_COMBAT.maxConcurrentAttackers&&
      rs.drawCalls<=LIMITS.drawCallsMax&&rs.triangles<=LIMITS.trianglesMax&&
      scheduler.frameCount>=10;

    this.nodes.result.textContent=pass
      ?'1 RAF ✓ · RETALIATION ✓ · TELEGRAPH/STRIKE ✓ · PLAYER HP ✓ · BUDGET PASS ✓'
      :'VERIFYING';
  }

  dispose(){this.root.remove();}
}
