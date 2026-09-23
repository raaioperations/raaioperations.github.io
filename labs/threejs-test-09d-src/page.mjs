export function make09DHtml(index09B,buildId){
  let html=index09B;
  html=html.replaceAll(
    'RAAI Three.js Test 09B — Vertical Beauty Slice',
    'RAAI Three.js Test 09D — Sunlit Basin Asset Integration Proof'
  );
  html=html.replace(
    '<div id="zone">09B · VERTICAL BEAUTY SLICE · SUNLIT BASIN</div>',
    '<div id="zone">09D · ASSET INTEGRATION PROOF · SUNLIT BASIN</div>'
  );

  const css='#beauty09B{display:none!important}#asset09D{position:absolute;left:max(10px,env(safe-area-inset-left));top:max(10px,env(safe-area-inset-top));width:292px;padding:9px 10px;border:1px solid rgba(255,255,255,.15);border-radius:13px;background:rgba(8,13,16,.58);backdrop-filter:blur(10px);font:8.5px/1.38 ui-monospace,SFMono-Regular,Menlo,monospace;color:#fff;text-shadow:0 2px 10px rgba(0,0,0,.7);pointer-events:none}#asset09D .title{font:850 10px/1.25 system-ui;letter-spacing:.07em;text-transform:uppercase;margin-bottom:6px}#asset09D .grid{display:grid;grid-template-columns:auto 1fr;gap:2px 9px}#asset09D b{text-align:right;color:#bdf3c8;white-space:nowrap}#assetResult09D{grid-column:1/-1;text-align:left!important;margin-top:5px;padding-top:5px;border-top:1px solid rgba(255,255,255,.13);white-space:normal!important;color:#ffe59a!important}@media(pointer:coarse),(max-width:900px){#asset09D{left:6px;top:8px;width:225px;padding:7px 8px;font-size:7px}#asset09D .title{font-size:8px}#zone{left:auto!important;right:8px!important;transform:none!important}}';
  html=html.replace('</style>',css+'</style>');

  const hud='<div id="asset09D"><div class="title">09D Sunlit Basin Asset Integration</div><div class="grid"><span>Integration</span><b id="assetStage09D">WAITING 09B</b><span>09C GLBs</span><b id="assetLoads09D">0 / 13</b><span>Prototype families removed</span><b id="assetRemoved09D">0 / 8</b><span>Asset placements</span><b id="assetPlaced09D">0</b><span>PBR material batches</span><b id="assetBatches09D">0 / 8</b><span>Integrated asset tris</span><b id="assetTriangles09D">0 / 18,000</b><span>Total draw calls</span><b id="assetDraw09D">— / 120</b><span>Total triangles</span><b id="assetTotalTriangles09D">— / 350,000</b><span>Soldier asset loads</span><b id="assetSoldierLoads09D">1</b><span>Runtime duplicates</span><b id="assetDuplicates09D">0</b><span>06J regression</span><b id="assetRegression09D">WAITING</b><b id="assetResult09D">WAITING FOR 09B SUNLIT BASIN</b></div></div>';
  html=html.replace('<div id="error"></div>',hud+'<div id="error"></div>');

  html=html.replace(/app\.js\?v=\d+/g,'app.js?v='+buildId);
  html=html.replace(/sw\.js\?v=\d+/g,'sw.js?v='+buildId);
  return html;
}
