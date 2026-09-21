export function make07DHtml(index07C,buildId){
  let html=index07C;
  html=html.replaceAll(
    'RAAI Three.js Test 07C — Streamed Production Region',
    'RAAI Three.js Test 07D — Production Vertical Slice'
  );
  html=html.replaceAll(
    'RAAI Proof 07C — Streamed Production Region',
    'RAAI Proof 07D — Production Vertical Slice'
  );
  html=html.replace('Starting Streamed Production Region 07C…','Starting Production Vertical Slice 07D…');
  html=html.replace(
    '<div id="zone">07C · STREAMED PRODUCTION REGION</div>',
    '<div id="zone">07D · PRODUCTION VERTICAL SLICE</div>'
  );
  html=html.replace(
    '<div id="panel"><div class="title">07C Streamed Production Region</div><div id="worldBrief"><b>New production layer:</b> one dedicated production region owns two real 07B actors. The cyan ground ring marks the region. Start inside 24 m, move away until region distance reaches 38 m and both region actors unload, then return inside 24 m. Their IDs/progress must restore through the same cached Soldier.glb asset with no duplicate bindings.</div>',
    '<div id="panel"><div class="title">07D Production Vertical Slice</div><div id="worldBrief"><b>Integrated production proof:</b> stay near the cyan production region while actor A automatically runs the accepted FOOD → HAZARD → FOOD recovery cycle through the production animation binding. When Behavior loop says PASS, move beyond 38 m to stream the region out, then return inside 24 m. Final PASS requires behavior recovery, stream restoration, one cached asset load, zero duplicates, and the inherited mobile performance regression.</div>'
  );

  const css='#region07C{display:none!important}#slice07D{position:absolute;right:max(12px,env(safe-area-inset-right));top:62px;width:340px;padding:10px 11px;border:1px solid rgba(255,255,255,.16);border-radius:13px;background:rgba(8,13,16,.74);backdrop-filter:blur(11px);font:9px/1.38 ui-monospace,SFMono-Regular,Menlo,monospace;color:#fff;text-shadow:0 2px 10px rgba(0,0,0,.7);pointer-events:none}#slice07D .title{font:850 10px/1.25 system-ui;letter-spacing:.07em;text-transform:uppercase;margin-bottom:6px}#slice07D .grid{display:grid;grid-template-columns:auto 1fr;gap:2px 9px}#slice07D b{text-align:right;color:#a8f0b5;white-space:nowrap}#sliceResult07D{grid-column:1/-1;text-align:left!important;margin-top:5px;padding-top:5px;border-top:1px solid rgba(255,255,255,.13);white-space:normal!important}@media(pointer:coarse),(max-width:900px){#slice07D{top:58px;right:6px;width:246px;padding:7px 8px;font-size:7px}#slice07D .title{font-size:8px}}';
  html=html.replace('</style>',css+'</style>');

  const hud='<div id="slice07D"><div class="title">07D Production Vertical Slice</div><div class="grid"><span>Slice</span><b id="sliceStage07D">WAITING</b><span>Region</span><b id="sliceRegion07D">UNLOADED</b><span>Actor A goal</span><b id="sliceGoal07D">UNLOADED</b><span>Memory</span><b id="sliceMemory07D">UNLOADED</b><span>Animation</span><b id="sliceAnim07D">NONE</b><span>Behavior loop</span><b id="sliceBehavior07D">WAITING</b><span>Stream restore</span><b id="sliceStream07D">PENDING</b><span>Actor IDs</span><b id="sliceIds07D">PENDING</b><span>Progress</span><b id="sliceProgress07D">—</b><span>Asset loads</span><b id="sliceAsset07D">0</b><span>Duplicates</span><b id="sliceDuplicates07D">0</b><span>06J regression</span><b id="sliceRegression07D">WAITING</b><b id="sliceResult07D">WAITING FOR PRODUCTION SLICE</b></div></div>';
  html=html.replace('<div id="error"></div>',hud+'<div id="error"></div>');
  html=html.replace(/app\.js\?v=\d+/g,'app.js?v='+buildId);
  html=html.replace(/sw\.js\?v=\d+/g,'sw.js?v='+buildId);
  return html;
}
