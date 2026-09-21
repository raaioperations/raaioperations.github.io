export function make07CHtml(index07B,buildId){
  let html=index07B;
  html=html.replaceAll(
    'RAAI Three.js Test 07B — Production Actor Pipeline',
    'RAAI Three.js Test 07C — Streamed Production Region'
  );
  html=html.replaceAll(
    'RAAI Proof 07B — Production Actor Pipeline',
    'RAAI Proof 07C — Streamed Production Region'
  );
  html=html.replace('Starting Production Actor Pipeline 07B…','Starting Streamed Production Region 07C…');
  html=html.replace(
    '<div id="zone">07B · PRODUCTION ACTOR PIPELINE</div>',
    '<div id="zone">07C · STREAMED PRODUCTION REGION</div>'
  );
  html=html.replace(
    '<div id="panel"><div class="title">07B Production Actor Pipeline</div><div id="worldBrief"><b>New production layer:</b> stable actor identity → 07A LivingWorldKernel → cached GLB asset → skeleton-safe clone → independent mixer → explicit visual binding. Two production actors are created from one definition and one cached Soldier.glb load. No new AI behavior and no region streaming are introduced.</div>',
    '<div id="panel"><div class="title">07C Streamed Production Region</div><div id="worldBrief"><b>New production layer:</b> one dedicated production region owns two real 07B actors. The cyan ground ring marks the region. Start inside 24 m, move away until region distance reaches 38 m and both region actors unload, then return inside 24 m. Their IDs/progress must restore through the same cached Soldier.glb asset with no duplicate bindings.</div>'
  );

  const css='#actor07B{display:none!important}#region07C{position:absolute;right:max(12px,env(safe-area-inset-right));top:62px;width:330px;padding:10px 11px;border:1px solid rgba(255,255,255,.16);border-radius:13px;background:rgba(8,13,16,.72);backdrop-filter:blur(11px);font:9px/1.38 ui-monospace,SFMono-Regular,Menlo,monospace;color:#fff;text-shadow:0 2px 10px rgba(0,0,0,.7);pointer-events:none}#region07C .title{font:850 10px/1.25 system-ui;letter-spacing:.07em;text-transform:uppercase;margin-bottom:6px}#region07C .grid{display:grid;grid-template-columns:auto 1fr;gap:2px 9px}#region07C b{text-align:right;color:#a8f0b5;white-space:nowrap}#regionResult07C{grid-column:1/-1;text-align:left!important;margin-top:5px;padding-top:5px;border-top:1px solid rgba(255,255,255,.13);white-space:normal!important}@media(pointer:coarse),(max-width:900px){#region07C{top:58px;right:6px;width:238px;padding:7px 8px;font-size:7px}#region07C .title{font-size:8px}}';
  html=html.replace('</style>',css+'</style>');

  const hud='<div id="region07C"><div class="title">07C Streamed Production Region</div><div class="grid"><span>Region</span><b id="regionStage07C">UNLOADED</b><span>Distance</span><b id="regionDistance07C">—</b><span>Region actors</span><b id="regionActors07C">0/2</b><span>Bindings</span><b id="regionBindings07C">0/2</b><span>Asset loads</span><b id="regionAssetLoads07C">0</b><span>Snapshot</span><b id="regionSnapshot07C">NONE</b><span>Offscreen</span><b id="regionOffscreen07C">0.0 s</b><span>Actor IDs</span><b id="regionIds07C">PENDING</b><span>Actor A progress</span><b id="regionProgress07C">—</b><span>Unload/restore</span><b id="regionCycles07C">0/0</b><span>Duplicates</span><b id="regionDuplicates07C">0</b><span>06J regression</span><b id="regionRegression07C">WAITING</b><b id="regionResult07C">WAITING FOR REGION</b></div></div>';
  html=html.replace('<div id="error"></div>',hud+'<div id="error"></div>');
  html=html.replace(/app\.js\?v=\d+/g,'app.js?v='+buildId);
  html=html.replace(/sw\.js\?v=\d+/g,'sw.js?v='+buildId);
  return html;
}
