export function makePass5Html09B(indexPass4,buildId){
  let html=indexPass4;
  html=html.replaceAll(
    'RAAI Three.js Test 09B — Vertical Beauty Slice / Presentation Pass 4',
    'RAAI Three.js Test 09B — Vertical Beauty Slice / Presentation Pass 5'
  );
  html=html.replace(
    '<div id="zone">09B · PASS 4 · SCENE ASSETIZATION</div>',
    '<div id="zone">09B · PASS 5 · ENVIRONMENT ART</div>'
  );
  html=html.replace(
    '<div class="title">09B Sunlit Basin · Presentation Pass 4</div>',
    '<div class="title">09B Sunlit Basin · Presentation Pass 5</div>'
  );
  html=html.replace(
    '<div id="worldBrief"><b>Human Presentation Proof:</b> Pass 4 shifts effort from engine work to scene authorship. Judge the new assetized horizon, cleaner world composition, material separation, character readability, path/landmark purpose and performance. Simulation proof visuals are still running but are intentionally hidden from the beauty frame.</div>',
    '<div id="worldBrief"><b>Human Presentation Proof:</b> Pass 5 spends the proven runtime headroom on environment art: terrain banks, path cuts, shoreline structure, a redesigned ruin, stronger tree silhouettes and wetland ecology. Judge place, physical substance, composition, material hierarchy and performance.</div>'
  );

  const css='#pass4_09B{display:none!important}#pass5_09B{position:absolute;left:max(10px,env(safe-area-inset-left));top:max(10px,env(safe-area-inset-top));width:310px;padding:9px 10px;border:1px solid rgba(255,255,255,.15);border-radius:13px;background:rgba(8,13,16,.58);backdrop-filter:blur(10px);font:8.5px/1.38 ui-monospace,SFMono-Regular,Menlo,monospace;color:#fff;text-shadow:0 2px 10px rgba(0,0,0,.7);pointer-events:none}#pass5_09B .title{font:850 10px/1.25 system-ui;letter-spacing:.07em;text-transform:uppercase;margin-bottom:6px}#pass5_09B .grid{display:grid;grid-template-columns:auto 1fr;gap:2px 9px}#pass5_09B b{text-align:right;color:#bdf3c8;white-space:nowrap}#p5Result09B{grid-column:1/-1;text-align:left!important;margin-top:5px;padding-top:5px;border-top:1px solid rgba(255,255,255,.13);white-space:normal!important;color:#ffe59a!important}@media(pointer:coarse),(max-width:900px){#pass5_09B{left:6px;top:8px;width:238px;padding:7px 8px;font-size:7px}#pass5_09B .title{font-size:8px}#zone{left:auto!important;right:8px!important;transform:none!important}}';
  html=html.replace('</style>',css+'</style>');

  const hud='<div id="pass5_09B"><div class="title">09B Vertical Beauty Slice · Pass 5</div><div class="grid"><span>Presentation</span><b id="p5Stage09B">BUILDING</b><span>V3 environment GLBs</span><b id="p5Assets09B">0 / 8</b><span>V3 runtime batches</span><b id="p5Batches09B">0 / 6</b><span>V3 asset triangles</span><b id="p5AssetTri09B">0</b><span>Legacy gate clip</span><b id="p5Gate09B">0 / 2</b><span>Player visual</span><b id="p5Player09B">FALLBACK</b><span>Total draw calls</span><b id="p5Draw09B">— / 120</b><span>Total triangles</span><b id="p5Triangles09B">— / 350,000</b><span>Runtime duplicates</span><b id="p5Duplicates09B">0</b><span>06J regression</span><b id="p5Regression09B">WAITING</b><b id="p5Result09B">BUILDING ENVIRONMENT ART PRODUCTION PASS</b></div></div>';
  html=html.replace('<div id="error"></div>',hud+'<div id="error"></div>');

  html=html.replace(/app\.js\?v=\d+/g,'app.js?v='+buildId);
  html=html.replace(/sw\.js\?v=\d+/g,'sw.js?v='+buildId);
  return html;
}
