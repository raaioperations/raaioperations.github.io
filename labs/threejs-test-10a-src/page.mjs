export function make10AHtml(index09B,buildId){
  let html=index09B;
  html=html.replace(
    '<title>RAAI Three.js Test 09B — Vertical Beauty Slice / Presentation Pass 5</title>',
    '<title>RAAI Three.js Test 10A — Windcut Shelf Composition Proof</title>'
  );
  html=html.replace(/<div id="zone">[^<]*<\/div>/,'<div id="zone">10A · WINDCUT SHELF · AUTHORED VISTA</div>');

  const css='#pass5_09B{display:none!important}#rep10A{position:absolute;left:max(10px,env(safe-area-inset-left));top:max(10px,env(safe-area-inset-top));width:320px;padding:9px 10px;border:1px solid rgba(255,255,255,.15);border-radius:13px;background:rgba(8,13,16,.60);backdrop-filter:blur(10px);font:8.5px/1.38 ui-monospace,SFMono-Regular,Menlo,monospace;color:#fff;text-shadow:0 2px 10px rgba(0,0,0,.7);pointer-events:none}#rep10A .title{font:850 10px/1.25 system-ui;letter-spacing:.07em;text-transform:uppercase;margin-bottom:6px}#rep10A .grid{display:grid;grid-template-columns:auto 1fr;gap:2px 9px}#rep10A b{text-align:right;color:#bdf3c8;white-space:nowrap}#repResult10A{grid-column:1/-1;text-align:left!important;margin-top:5px;padding-top:5px;border-top:1px solid rgba(255,255,255,.13);white-space:normal!important;color:#ffe59a!important}@media(pointer:coarse),(max-width:900px){#rep10A{left:6px;top:8px;width:242px;padding:7px 8px;font-size:7px}#rep10A .title{font-size:8px}#zone{left:auto!important;right:8px!important;transform:none!important}}';
  html=html.replace('</style>',css+'</style>');

  const hud='<div id="rep10A"><div class="title">10A Presentation Replication · Windcut Shelf</div><div class="grid"><span>Presentation</span><b id="repStage10A">BUILDING</b><span>Asset GLBs</span><b id="repAssets10A">0 / —</b><span>Authored placements</span><b id="repPlacements10A">0 / 23</b><span>Runtime batches</span><b id="repBatches10A">0 / 6</b><span>Total draw calls</span><b id="repDraw10A">— / 120</b><span>Total triangles</span><b id="repTriangles10A">— / 350,000</b><span>Runtime duplicates</span><b id="repDuplicates10A">0</b><span>Forest instances</span><b id="repForest10A">0 cleared</b><span>Tree colliders</span><b id="repForestCollision10A">0 cleared</b><span>06J regression</span><b id="repRegression10A">WAITING</b><b id="repResult10A">BUILDING WINDCUT FOREST-CORRIDOR PROOF</b></div></div>';
  html=html.replace('<div id="error"></div>',hud+'<div id="error"></div>');

  html=html.replace(/app\.js\?v=\d+/g,'app.js?v='+buildId);
  html=html.replace(/sw\.js\?v=\d+/g,'sw.js?v='+buildId);
  return html;
}
