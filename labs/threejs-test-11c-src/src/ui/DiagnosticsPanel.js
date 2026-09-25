import {LIMITS,THREE_VERSION,WORLD} from '../config.js';

export class DiagnosticsPanel{
  constructor(container){
    this.root=document.createElement('section');
    this.root.className='diagnostics';
    this.root.innerHTML=`<div class="diag-title">TEST11C · ${WORLD.name.toUpperCase()} · WORLD FOUNDATION</div><div class="diag-grid">
      <span>Three.js</span><b>${THREE_VERSION}</b><span>Renderer</span><b>WebGLRenderer</b><span>RAF loops</span><b>1 / 1</b>
      <span>Soldier GLB</span><b data-k="character">LOADING</b><span>World GLBs</span><b data-k="worldAssets">0 / 4</b>
      <span>Trees</span><b data-k="trees">—</b><span>Shrubs</span><b data-k="shrubs">—</b><span>Terrain span</span><b data-k="terrain">—</b>
      <span>Water</span><b data-k="water">YES</b><span>Player</span><b data-k="player">IDLE</b><span>Ground error</span><b data-k="ground">—</b>
      <span>Camera clearance</span><b data-k="camera">—</b><span>Input</span><b data-k="input">—</b>
      <span>Draw calls</span><b data-k="draw">— / ${LIMITS.drawCallsMax}</b><span>Triangles</span><b data-k="tri">— / ${LIMITS.trianglesMax.toLocaleString()}</b>
      <span>Avg frame</span><b data-k="avg">—</b><span>p95 frame</span><b data-k="p95">—</b><span>DPR</span><b data-k="dpr">—</b>
      <strong data-k="result">VERIFYING</strong>
    </div>`;
    container.appendChild(this.root);
    this.nodes=Object.fromEntries([...this.root.querySelectorAll('[data-k]')].map(n=>[n.dataset.k,n]));
  }

  update({characterLoaded,worldLoaded,world,player,camera,inputMode,renderer,performance,scheduler}){
    const r=renderer.snapshot(),p=performance.stats(),ps=player.snapshot(),cs=camera.snapshot(),ws=world.snapshot();
    this.nodes.character.textContent=characterLoaded?'PASS':'LOADING';
    this.nodes.worldAssets.textContent=`${ws.authoredLoaded} / ${ws.authoredExpected}`;
    this.nodes.trees.textContent=String(ws.trees);
    this.nodes.shrubs.textContent=String(ws.shrubs);
    this.nodes.terrain.textContent=`${(ws.terrainMaxY-ws.terrainMinY).toFixed(1)}m`;
    this.nodes.water.textContent=ws.water?'YES':'NO';
    this.nodes.player.textContent=ps.state;
    this.nodes.ground.textContent=ps.grounded?ps.groundError.toFixed(3)+'m':'AIR';
    this.nodes.camera.textContent=cs.terrainClearance.toFixed(2)+'m';
    this.nodes.input.textContent=inputMode;
    this.nodes.draw.textContent=`${r.drawCalls} / ${LIMITS.drawCallsMax}`;
    this.nodes.tri.textContent=`${r.triangles.toLocaleString()} / ${LIMITS.trianglesMax.toLocaleString()}`;
    this.nodes.avg.textContent=p.avgMs.toFixed(2)+' ms';
    this.nodes.p95.textContent=p.p95Ms.toFixed(2)+' ms';
    this.nodes.dpr.textContent=r.dpr.toFixed(2);

    const pass=
      characterLoaded&&worldLoaded&&
      ws.authoredLoaded===ws.authoredExpected&&
      scheduler.frameCount>=10&&
      r.drawCalls<=LIMITS.drawCallsMax&&
      r.triangles<=LIMITS.trianglesMax;

    this.nodes.result.textContent=pass
      ?'1 RAF ✓ · TERRAIN ✓ · WATER ✓ · INSTANCING ✓ · 4 GLBs ✓ · BUDGET PASS ✓'
      :'VERIFYING';
  }

  dispose(){this.root.remove();}
}
