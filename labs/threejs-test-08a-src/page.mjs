export function make08AHtml(index07D,buildId){
  let html=index07D;
  html=html.replaceAll('RAAI Three.js Test 07D — Production Vertical Slice','RAAI Three.js Test 08A — Multi-Region Production World');
  html=html.replaceAll('RAAI Proof 07D — Production Vertical Slice','RAAI Proof 08A — Multi-Region Production World');
  html=html.replace('Starting Production Vertical Slice 07D…','Starting Multi-Region Production World 08A…');
  html=html.replace('<div id="zone">07D · PRODUCTION VERTICAL SLICE</div>','<div id="zone">08A · MULTI-REGION PRODUCTION WORLD</div>');
  html=html.replace(
    '<div id="panel"><div class="title">07D Production Vertical Slice</div><div id="worldBrief"><b>Integrated production proof:</b> stay near the cyan production region while actor A automatically runs the accepted FOOD → HAZARD → FOOD recovery cycle through the production animation binding. When Behavior loop says PASS, move beyond 38 m to stream the region out, then return inside 24 m. Final PASS requires behavior recovery, stream restoration, one cached asset load, zero duplicates, and the inherited mobile performance regression.</div>',
    '<div id="panel"><div class="title">08A Multi-Region Production World</div><div id="worldBrief"><b>World Expansion begins:</b> three independent production regions now share the frozen production actor pipeline and one cached Soldier.glb asset. Follow the diagnostic route A → B → C → A. Each previous region must unload and preserve its own actor state while only the current region remains active.</div>'
  );

  const css='#slice07D{display:none!important}#world08A{position:absolute;right:max(12px,env(safe-area-inset-right));top:62px;width:350px;padding:10px 11px;border:1px solid rgba(255,255,255,.16);border-radius:13px;background:rgba(8,13,16,.74);backdrop-filter:blur(11px);font:9px/1.38 ui-monospace,SFMono-Regular,Menlo,monospace;color:#fff;text-shadow:0 2px 10px rgba(0,0,0,.7);pointer-events:none}#world08A .title{font:850 10px/1.25 system-ui;letter-spacing:.07em;text-transform:uppercase;margin-bottom:6px}#world08A .grid{display:grid;grid-template-columns:auto 1fr;gap:2px 9px}#world08A b{text-align:right;color:#a8f0b5;white-space:nowrap}#worldResult08A{grid-column:1/-1;text-align:left!important;margin-top:5px;padding-top:5px;border-top:1px solid rgba(255,255,255,.13);white-space:normal!important}@media(pointer:coarse),(max-width:900px){#world08A{top:58px;right:6px;width:255px;padding:7px 8px;font-size:7px}#world08A .title{font-size:8px}}';
  html=html.replace('</style>',css+'</style>');

  const hud='<div id="world08A"><div class="title">08A Multi-Region Production World</div><div class="grid"><span>World</span><b id="worldStage08A">ACTIVE</b><span>Nearest</span><b id="worldNearest08A">—</b><span>Distances A/B/C</span><b id="worldDistances08A">—</b><span>States A/B/C</span><b id="worldStates08A">U/U/U</b><span>Active region</span><b id="worldActive08A">NONE</b><span>Visited</span><b id="worldVisited08A">———</b><span>Snapshots A/B/C</span><b id="worldSnapshots08A">—/—/—</b><span>Return progress</span><b id="worldProgress08A">PENDING</b><span>Asset loads</span><b id="worldAssets08A">0</b><span>Duplicates</span><b id="worldDuplicates08A">0</b><span>06J regression</span><b id="worldRegression08A">WAITING</b><b id="worldResult08A">VISIT REGION A</b></div></div>';
  html=html.replace('<div id="error"></div>',hud+'<div id="error"></div>');
  html=html.replace(/app\.js\?v=\d+/g,'app.js?v='+buildId);
  html=html.replace(/sw\.js\?v=\d+/g,'sw.js?v='+buildId);
  return html;
}
