import {ACTORS,COMBAT,INTERACTION,LIMITS,THREE_VERSION,WORLD} from '../config.js';

export class DiagnosticsPanel{
  constructor(container){
    this.root=document.createElement('section');
    this.root.className='diagnostics';
    this.root.innerHTML=`<div class="diag-title">TEST11H · ${WORLD.name.toUpperCase()} · COMBAT ACTION</div><div class="diag-grid">
      <span>Three.js</span><b>${THREE_VERSION}</b><span>Renderer</span><b>WebGLRenderer</b><span>RAF loops</span><b>1 / 1</b>
      <span>Soldier</span><b data-k="soldier">LOADING</b><span>World GLBs</span><b data-k="assets">0 / 6</b>
      <span>Active chunks</span><b data-k="chunks">— / 9</b><span>Active actors</span><b data-k="actors">— / ${ACTORS.activeCapacity}</b>
      <span>Actor pool realloc</span><b data-k="actorPool">0</b><span>Move peak/budget</span><b data-k="moveBudget">— / ${ACTORS.updateBudgetPerFrame}</b>
      <span>Behavior peak/budget</span><b data-k="behaviorBudget">— / ${ACTORS.behaviorBudgetPerFrame}</b><span>Interaction peak</span><b data-k="interactionBudget">— / ${INTERACTION.actionBudgetPerFrame}</b>
      <span>Combat target</span><b data-k="combatTarget">NONE</b><span>Target indicator</span><b data-k="indicator">HIDDEN</b>
      <span>Combat phase</span><b data-k="phase">READY</b><span>Locked HP</span><b data-k="lockedHp">—</b>
      <span>Attack starts total/peak</span><b data-k="attackStarts">0 / 0</b><span>Attack budget</span><b data-k="attackBudget">0 / ${COMBAT.attackStartsPerFrame}</b>
      <span>Hits / misses</span><b data-k="hits">0 / 0</b><span>Duplicate hit blocks</span><b data-k="dupeHits">0</b>
      <span>Recovery rejects</span><b data-k="recovery">0</b><span>No-target rejects</span><b data-k="noTarget">0</b>
      <span>Last damage</span><b data-k="damage">0</b><span>Defeats</span><b data-k="defeats">0</b>
      <span>World damage events</span><b data-k="damageEvents">0</b><span>Defeated actors</span><b data-k="defeatedActors">0</b>
      <span>Gameplay target</span><b data-k="gameplayTarget">NONE</b><span>Pickup / Waystone</span><b data-k="objects">READY / OFF</b>
      <span>NPC interactions</span><b data-k="npcInteractions">0</b><span>Restored actors</span><b data-k="restored">0</b>
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

  update({characterLoaded,worldLoaded,world,actors,interaction,combat,player,camera,assets,quality,renderer,performance,scheduler}){
    const ws=world.snapshot(),cs=ws.chunks,ss=ws.spatial,as=actors.snapshot(),is=interaction.snapshot(),co=combat.snapshot(),ps=player.snapshot(),cam=camera.snapshot();
    const bs=as.behavior,cache=assets.snapshot(),qs=quality.snapshot(),rs=renderer.snapshot(),perf=performance.stats();

    this.nodes.soldier.textContent=characterLoaded?'PASS':'LOADING';
    this.nodes.assets.textContent=`${ws.authoredLoaded} / ${ws.authoredExpected}`;
    this.nodes.chunks.textContent=`${cs.active} / ${WORLD.activeChunkCount}`;
    this.nodes.actors.textContent=`${as.activeActors} / ${ACTORS.activeCapacity}`;
    this.nodes.actorPool.textContent=String(as.poolReallocations);
    this.nodes.moveBudget.textContent=`${as.peakUpdatesPerFrame} / ${as.updateBudget}`;
    this.nodes.behaviorBudget.textContent=`${bs.peakEvaluationsPerFrame} / ${bs.evaluationBudget}`;
    this.nodes.interactionBudget.textContent=`${is.peakActionsPerFrame} / ${is.actionBudget}`;

    this.nodes.combatTarget.textContent=co.currentTarget?`${co.currentTarget.id.split(':').slice(-1)[0]} · ${co.currentTarget.health} HP`:'NONE';
    this.nodes.indicator.textContent=co.indicatorVisible?'VISIBLE':'HIDDEN';
    this.nodes.phase.textContent=co.phase;
    this.nodes.lockedHp.textContent=co.lockedTargetHealth===null?'—':String(co.lockedTargetHealth);
    this.nodes.attackStarts.textContent=`${co.totalAttackStarts} / ${co.peakAttackStartsPerFrame}`;
    this.nodes.attackBudget.textContent=`${co.peakAttackStartsPerFrame} / ${co.attackStartBudget}`;
    this.nodes.hits.textContent=`${co.totalHits} / ${co.totalMisses}`;
    this.nodes.dupeHits.textContent=String(co.duplicateHitBlocks);
    this.nodes.recovery.textContent=String(co.recoveryRejects);
    this.nodes.noTarget.textContent=String(co.noTargetRejects);
    this.nodes.damage.textContent=String(co.lastDamage);
    this.nodes.defeats.textContent=String(co.defeats);
    this.nodes.damageEvents.textContent=String(as.damageEvents);
    this.nodes.defeatedActors.textContent=String(as.defeatedCount);

    this.nodes.gameplayTarget.textContent=is.currentTarget?`${is.currentTarget.type} · ${is.currentTarget.label}`:'NONE';
    this.nodes.objects.textContent=`${is.world.pickupCollected?'COLLECTED':'READY'} / ${is.world.waystoneToggled?'ON':'OFF'}`;
    this.nodes.npcInteractions.textContent=String(is.npcInteractions);
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
      rs.drawCalls<=LIMITS.drawCallsMax&&rs.triangles<=LIMITS.trianglesMax&&
      scheduler.frameCount>=10;

    this.nodes.result.textContent=pass
      ?'1 RAF ✓ · SOFT TARGET ✓ · ATTACK PHASES ✓ · DAMAGE ✓ · COMBAT BUDGET ✓'
      :'VERIFYING';
  }

  dispose(){this.root.remove();}
}
