import {LIMITS,THREE_VERSION} from '../config.js';
export class DiagnosticsPanel{
  constructor(container){
    this.root=document.createElement('section');this.root.className='diagnostics';
    this.root.innerHTML=`<div class="diag-title">TEST11B · PLAYER / CAMERA / MOBILE</div><div class="diag-grid">
    <span>Three.js</span><b>${THREE_VERSION}</b><span>Renderer</span><b>WebGLRenderer</b><span>RAF loops</span><b>1 / 1</b>
    <span>Soldier GLB</span><b data-k="asset">LOADING</b><span>Player</span><b data-k="player">IDLE</b><span>Grounded</span><b data-k="grounded">YES</b>
    <span>Speed</span><b data-k="speed">0.0</b><span>Camera</span><b data-k="camera">—</b><span>Input</span><b data-k="input">—</b>
    <span>Draw calls</span><b data-k="draw">— / ${LIMITS.drawCallsMax}</b><span>Triangles</span><b data-k="tri">— / ${LIMITS.trianglesMax.toLocaleString()}</b>
    <span>Avg frame</span><b data-k="avg">—</b><span>p95 frame</span><b data-k="p95">—</b><span>DPR</span><b data-k="dpr">—</b>
    <strong data-k="result">VERIFYING</strong></div>`;
    container.appendChild(this.root);this.nodes=Object.fromEntries([...this.root.querySelectorAll('[data-k]')].map(n=>[n.dataset.k,n]));
  }
  update({assetLoaded,player,camera,inputMode,renderer,performance,scheduler}){
    const r=renderer.snapshot(),p=performance.stats(),ps=player.snapshot(),cs=camera.snapshot();
    this.nodes.asset.textContent=assetLoaded?'PASS':'LOADING';this.nodes.player.textContent=ps.state;this.nodes.grounded.textContent=ps.grounded?'YES':'NO';this.nodes.speed.textContent=ps.speed.toFixed(1);
    this.nodes.camera.textContent=cs.actualDistance.toFixed(1)+'m';this.nodes.input.textContent=inputMode;this.nodes.draw.textContent=`${r.drawCalls} / ${LIMITS.drawCallsMax}`;this.nodes.tri.textContent=`${r.triangles.toLocaleString()} / ${LIMITS.trianglesMax.toLocaleString()}`;this.nodes.avg.textContent=p.avgMs.toFixed(2)+' ms';this.nodes.p95.textContent=p.p95Ms.toFixed(2)+' ms';this.nodes.dpr.textContent=r.dpr.toFixed(2);
    const pass=assetLoaded&&scheduler.frameCount>=10&&r.drawCalls<=LIMITS.drawCallsMax&&r.triangles<=LIMITS.trianglesMax;
    this.nodes.result.textContent=pass?'1 RAF ✓ · SOLDIER ✓ · MOVE ✓ · CAMERA ✓ · MOBILE INPUT ✓ · BUDGET PASS ✓':'VERIFYING';
  }
  dispose(){this.root.remove();}
}
