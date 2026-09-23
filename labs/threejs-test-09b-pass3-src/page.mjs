export function makePass3Html09B(index09D,buildId){
  let html=index09D;
  html=html.replaceAll(
    'RAAI Three.js Test 09D — Sunlit Basin Asset Integration Proof',
    'RAAI Three.js Test 09B — Vertical Beauty Slice / Presentation Pass 3'
  );
  html=html.replace(
    '<div id="zone">09B · SUNLIT BASIN</div>',
    '<div id="zone">09B · PASS 3 · ASSET-DRIVEN SUNLIT BASIN</div>'
  );
  html=html.replace(
    '<div class="title">09B Sunlit Basin · Presentation Pass 2</div>',
    '<div class="title">09B Sunlit Basin · Presentation Pass 3</div>'
  );
  html=html.replace(
    '<div id="worldBrief"><b>Human Presentation Proof:</b> structural/runtime metrics are only prerequisites. Explore the authored basin and judge terrain form, material substance, atmospheric depth, ridge scale, vegetation hierarchy, water response, ambient motion, character readability and path/landmark purpose. Automated checks cannot accept this scene.</div>',
    '<div id="worldBrief"><b>Human Presentation Proof:</b> Pass 3 uses the accepted 09D asset integration as its foundation. Judge the actual scene: authored assets, horizon quality, material substance, atmospheric depth, character readability, path/landmark purpose and performance. Automated checks cannot accept presentation quality.</div>'
  );

  const css='#asset09D{display:none!important}#pass3_09B{position:absolute;left:max(10px,env(safe-area-inset-left));top:max(10px,env(safe-area-inset-top));width:292px;padding:9px 10px;border:1px solid rgba(255,255,255,.15);border-radius:13px;background:rgba(8,13,16,.58);backdrop-filter:blur(10px);font:8.5px/1.38 ui-monospace,SFMono-Regular,Menlo,monospace;color:#fff;text-shadow:0 2px 10px rgba(0,0,0,.7);pointer-events:none}#pass3_09B .title{font:850 10px/1.25 system-ui;letter-spacing:.07em;text-transform:uppercase;margin-bottom:6px}#pass3_09B .grid{display:grid;grid-template-columns:auto 1fr;gap:2px 9px}#pass3_09B b{text-align:right;color:#bdf3c8;white-space:nowrap}#p3Result09B{grid-column:1/-1;text-align:left!important;margin-top:5px;padding-top:5px;border-top:1px solid rgba(255,255,255,.13);white-space:normal!important;color:#ffe59a!important}@media(pointer:coarse),(max-width:900px){#pass3_09B{left:6px;top:8px;width:228px;padding:7px 8px;font-size:7px}#pass3_09B .title{font-size:8px}#zone{left:auto!important;right:8px!important;transform:none!important}}';
  html=html.replace('</style>',css+'</style>');

  const hud='<div id="pass3_09B"><div class="title">09B Vertical Beauty Slice · Pass 3</div><div class="grid"><span>Presentation</span><b id="p3Stage09B">BUILDING</b><span>Legacy cone mountains</span><b id="p3Mountains09B">0 / 2</b><span>Player visual</span><b id="p3Player09B">FALLBACK</b><span>09C GLBs</span><b id="p3Assets09B">0 / 13</b><span>Runtime asset batches</span><b id="p3Batches09B">0 / 8</b><span>Total draw calls</span><b id="p3Draw09B">— / 120</b><span>Total triangles</span><b id="p3Triangles09B">— / 350,000</b><span>Runtime duplicates</span><b id="p3Duplicates09B">0</b><span>06J regression</span><b id="p3Regression09B">WAITING</b><b id="p3Result09B">BUILDING PRESENTATION PASS 3</b></div></div>';
  html=html.replace('<div id="error"></div>',hud+'<div id="error"></div>');

  html=html.replace(/app\.js\?v=\d+/g,'app.js?v='+buildId);
  html=html.replace(/sw\.js\?v=\d+/g,'sw.js?v='+buildId);
  return html;
}
