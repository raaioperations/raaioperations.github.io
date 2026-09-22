export function make09BHtml(index08D,buildId){
  let html=index08D;
  html=html.replaceAll('RAAI Three.js Test 08D — World Expansion Certification','RAAI Three.js Test 09B — Vertical Beauty Slice');
  html=html.replaceAll('RAAI Proof 08D — World Expansion Certification','RAAI Presentation 09B — Vertical Beauty Slice');
  html=html.replace('Starting World Expansion Certification 08D…','Starting Sunlit Basin 09B…');
  html=html.replace('<div id="zone">08D · WORLD EXPANSION CERTIFICATION</div>','<div id="zone">09B · SUNLIT BASIN</div>');
  html=html.replace('<button id="tuneBtn">WORLD</button>','<button id="tuneBtn">SCENE</button>');
  html=html.replace(
    '<div id="panel"><div class="title">08D World Expansion Certification</div><div id="worldBrief"><b>No new gameplay mechanic.</b> This is the Test08 closeout stress gate over the frozen 08C world. Wait for 06J PASS, then complete A → B → A → B → A. The harness certifies repeated unload/restore churn, bounded actors/bindings/prefetch, one asset load, zero duplicate state, and a minimum 30-second live certification window.</div>',
    '<div id="panel"><div class="title">09B Sunlit Basin</div><div id="worldBrief"><b>Presentation proof:</b> one small authored area demonstrating Stylized Physical Realism on top of the frozen Test08 runtime. Explore the path, pool, canopy edge, stone gate and distant silhouettes. Judge place, substance, atmosphere, scale, motion, character readability and gameplay purpose—not just the metrics.</div>'
  );

  const css='#metrics,#cert08D{display:none!important}#beauty09B{position:absolute;left:max(10px,env(safe-area-inset-left));top:max(10px,env(safe-area-inset-top));width:270px;padding:9px 10px;border:1px solid rgba(255,255,255,.15);border-radius:13px;background:rgba(8,13,16,.48);backdrop-filter:blur(10px);font:8.5px/1.38 ui-monospace,SFMono-Regular,Menlo,monospace;color:#fff;text-shadow:0 2px 10px rgba(0,0,0,.7);pointer-events:none}#beauty09B .title{font:850 10px/1.25 system-ui;letter-spacing:.07em;text-transform:uppercase;margin-bottom:6px}#beauty09B .grid{display:grid;grid-template-columns:auto 1fr;gap:2px 9px}#beauty09B b{text-align:right;color:#bdf3c8;white-space:nowrap}#beautyResult09B{grid-column:1/-1;text-align:left!important;margin-top:5px;padding-top:5px;border-top:1px solid rgba(255,255,255,.13);white-space:normal!important}@media(pointer:coarse),(max-width:900px){#beauty09B{left:6px;top:58px;width:205px;padding:7px 8px;font-size:6.8px}#beauty09B .title{font-size:8px}#zone{top:12px}}';
  html=html.replace('</style>',css+'</style>');

  const hud='<div id="beauty09B"><div class="title">09B Vertical Beauty Slice</div><div class="grid"><span>Presentation</span><b id="beautyStage09B">WAITING 06J</b><span>Place</span><b id="beautyPlace09B">Sunlit Basin</b><span>Material families</span><b id="beautyMaterials09B">0/6</b><span>Depth layers</span><b id="beautyDepth09B">0/5</b><span>Motion systems</span><b id="beautyMotion09B">0/4</b><span>Slice drawables</span><b id="beautySliceDraw09B">0 / 14</b><span>Slice triangles</span><b id="beautySliceTri09B">0 / 18,000</b><span>Total draw calls</span><b id="beautyTotalDraw09B">— / 120</b><span>Total triangles</span><b id="beautyTotalTri09B">— / 350,000</b><span>06J runtime</span><b id="beautyRuntime09B">WAITING</b><span>Asset loads</span><b id="beautyAsset09B">1</b><span>Duplicates</span><b id="beautyDuplicates09B">0</b><span>Slice distance</span><b id="beautyDistance09B">—</b><b id="beautyResult09B">WAIT FOR 06J REGRESSION PASS</b></div></div>';
  html=html.replace('<div id="error"></div>',hud+'<div id="error"></div>');
  html=html.replace(/app\.js\?v=\d+/g,'app.js?v='+buildId);
  html=html.replace(/sw\.js\?v=\d+/g,'sw.js?v='+buildId);
  return html;
}
