export function make07BHtml(index07A,buildId){
  let html=index07A;
  html=html.replaceAll(
    'RAAI Three.js Test 07A — Production Architecture Promotion',
    'RAAI Three.js Test 07B — Production Actor Pipeline'
  );
  html=html.replaceAll(
    'RAAI Proof 07A — Production Architecture Promotion',
    'RAAI Proof 07B — Production Actor Pipeline'
  );
  html=html.replace('Starting Production Architecture 07A…','Starting Production Actor Pipeline 07B…');
  html=html.replace(
    '<div id="zone">07A · PRODUCTION ARCHITECTURE PROMOTION</div>',
    '<div id="zone">07B · PRODUCTION ACTOR PIPELINE</div>'
  );
  html=html.replace(
    '<div id="panel"><div class="title">07A Production Architecture Promotion</div><div id="worldBrief"><b>Architecture only:</b> Test06 is closed. Its accepted event, memory, spatial scope, arbitration, goal continuity, streaming, and LOD mechanics are now promoted into render-independent production modules. The visible world remains the frozen 06J regression reference. No production actor pipeline or new gameplay behavior is introduced here.</div>',
    '<div id="panel"><div class="title">07B Production Actor Pipeline</div><div id="worldBrief"><b>New production layer:</b> stable actor identity → 07A LivingWorldKernel → cached GLB asset → skeleton-safe clone → independent mixer → explicit visual binding. Two production actors are created from one definition and one cached Soldier.glb load. No new AI behavior and no region streaming are introduced.</div>'
  );

  const css='#audit06J{display:none!important}#actor07B{position:absolute;right:max(12px,env(safe-area-inset-right));top:62px;width:310px;padding:10px 11px;border:1px solid rgba(255,255,255,.16);border-radius:13px;background:rgba(8,13,16,.72);backdrop-filter:blur(11px);font:9px/1.38 ui-monospace,SFMono-Regular,Menlo,monospace;color:#fff;text-shadow:0 2px 10px rgba(0,0,0,.7);pointer-events:none}#actor07B .title{font:850 10px/1.25 system-ui;letter-spacing:.07em;text-transform:uppercase;margin-bottom:6px}#actor07B .grid{display:grid;grid-template-columns:auto 1fr;gap:2px 9px}#actor07B b{text-align:right;color:#a8f0b5;white-space:nowrap}#actorResult07B{grid-column:1/-1;text-align:left!important;margin-top:5px;padding-top:5px;border-top:1px solid rgba(255,255,255,.13);white-space:normal!important}@media(pointer:coarse),(max-width:900px){#actor07B{top:58px;right:6px;width:225px;padding:7px 8px;font-size:7px}#actor07B .title{font-size:8px}}';
  html=html.replace('</style>',css+'</style>');

  const hud='<div id="actor07B"><div class="title">07B Production Actor Pipeline</div><div class="grid"><span>Pipeline</span><b id="actorStage07B">LOADING</b><span>Definitions</span><b id="actorDefinitions07B">0</b><span>Asset loads</span><b id="actorAssetLoads07B">0</b><span>Actor records</span><b id="actorInstances07B">0/2</b><span>Bindings</span><b id="actorBindings07B">0/2</b><span>Unique roots</span><b id="actorRoots07B">0 / 0</b><span>Mixers</span><b id="actorMixers07B">0</b><span>Animations</span><b id="actorAnimations07B">—</b><span>Core kernels</span><b id="actorKernels07B">0</b><span>Duplicate binds</span><b id="actorDuplicates07B">0</b><span>06J regression</span><b id="actorRegression07B">WAITING</b><b id="actorResult07B">LOADING PRODUCTION ACTOR ASSET</b></div></div>';
  html=html.replace('<div id="error"></div>',hud+'<div id="error"></div>');
  html=html.replace(/app\.js\?v=\d+/g,'app.js?v='+buildId);
  html=html.replace(/sw\.js\?v=\d+/g,'sw.js?v='+buildId);
  return html;
}
