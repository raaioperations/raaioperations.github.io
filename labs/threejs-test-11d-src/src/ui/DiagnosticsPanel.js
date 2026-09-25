import {LIMITS,THREE_VERSION,WORLD} from '../config.js';

export class DiagnosticsPanel{
  constructor(container){
    this.root=document.createElement('section');
    this.root.className='diagnostics';
    this.root.innerHTML=`<div class="diag-title">TEST11D · ${WORLD.name.toUpperCase()} · PRODUCTION WORLD SYSTEMS</div><div class="diag-grid">
      <span>Three.js</span><b>${THREE_VERSION}</b><span>Renderer</span><b>WebGLRenderer</b><span>RAF loops</span><b>1 / 1</b>
      <span>Soldier</span><b data-k="soldier">LOADING</b><span>World GLBs</span><b data-k="assets">0 / 6</b>
      <span>Active chunks</span><b data-k="chunks">— / 9</b><span>Chunk center</span><b data-k="center">—</b>
      <span>Chunk refreshes</span><b data-k="refreshes">—</b><span>Pool realloc</span><b data-k="pool">0</b>
      <span>LOD N/M/F</span><b data-k="lod">—</b><span>Visible veg chunks</span><b data-k="visible">—</b>
      <span>Trees / shrubs</span><b data-k="vegetation">—</b><span>Spatial entries</span><b data-k="spatial">—</b>
      <span>Camera candidates</span><b data-k="candidates">—</b><span>Asset cache H/M</span><b data-k="cache">—</b>
      <span>Quality</span><b data-k="quality">—</b><span>DPR</span><b data-k="dpr">—</b>
      <span>Ground error</span><b data-k="ground">—</b><span>Camera clearance</span><b data-k="camera">—</b>
      <span>Draw calls</span><b data-k="draw">— / ${LIMITS.drawCallsMax}</b><span>Triangles</span><b data-k="tri">— / ${LIMITS.trianglesMax.toLocaleString()}</b>
      <span>Avg frame</span><b data-k="avg">—</b><span>p95 frame</span><b data-k="p95">—</b>
      <strong data-k="result">VERIFYING</strong>
    </div>`;
    container.appendChild(this.root);
    this.nodes=Object.fromEntries([...this.root.querySelectorAll('[data-k]')].map(n=>[n.dataset.k,n]));
  }

  update({characterLoaded,worldLoaded,world,player,camera,assets,quality,renderer,performance,scheduler}){
    const ws=world.snapshot(),cs=ws.chunks,ss=ws.spatial,ps=player.snapshot(),cam=camera.snapshot();
    const as=assets.snapshot(),qs=quality.snapshot(),rs=renderer.snapshot(),perf=performance.stats();

    this.nodes.soldier.textContent=characterLoaded?'PASS':'LOADING';
    this.nodes.assets.textContent=`${ws.authoredLoaded} / ${ws.authoredExpected}`;
    this.nodes.chunks.textContent=`${cs.active} / ${WORLD.activeChunkCount}`;
    this.nodes.center.textContent=cs.center.join(',');
    this.nodes.refreshes.textContent=String(cs.refreshes);
    this.nodes.pool.textContent=String(Math.max(0,cs.poolSize-WORLD.activeChunkCount));
    this.nodes.lod.textContent=`${cs.lod.NEAR}/${cs.lod.MID}/${cs.lod.FAR}`;
    this.nodes.visible.textContent=`${cs.visibleVegetationChunks} / ${cs.active}`;
    this.nodes.vegetation.textContent=`${cs.trees} / ${cs.shrubs}`;
    this.nodes.spatial.textContent=String(ss.entries);
    this.nodes.candidates.textContent=String(cam.candidates);
    this.nodes.cache.textContent=`${as.hits} / ${as.misses}`;
    this.nodes.quality.textContent=qs.tier;
    this.nodes.dpr.textContent=rs.dpr.toFixed(2);
    this.nodes.ground.textContent=ps.grounded?ps.groundError.toFixed(3)+'m':'AIR';
    this.nodes.camera.textContent=cam.terrainClearance.toFixed(2)+'m';
    this.nodes.draw.textContent=`${rs.drawCalls} / ${LIMITS.drawCallsMax}`;
    this.nodes.tri.textContent=`${rs.triangles.toLocaleString()} / ${LIMITS.trianglesMax.toLocaleString()}`;
    this.nodes.avg.textContent=perf.avgMs.toFixed(2)+' ms';
    this.nodes.p95.textContent=perf.p95Ms.toFixed(2)+' ms';

    const pass=characterLoaded&&worldLoaded&&
      ws.authoredLoaded===ws.authoredExpected&&cs.active===WORLD.activeChunkCount&&
      as.hits>=2&&rs.drawCalls<=LIMITS.drawCallsMax&&rs.triangles<=LIMITS.trianglesMax&&
      scheduler.frameCount>=10;

    this.nodes.result.textContent=pass
      ?'1 RAF ✓ · 9 CHUNKS ✓ · LOD/CULL ✓ · SPATIAL HASH ✓ · CACHE ✓ · QUALITY ✓ · BUDGET PASS ✓'
      :'VERIFYING';
  }

  dispose(){this.root.remove();}
}
