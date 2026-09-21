export function make08BHtml(index08A,buildId){
  let html=index08A;
  html=html.replaceAll('RAAI Three.js Test 08A — Multi-Region Production World','RAAI Three.js Test 08B — Predictive Region Handoff');
  html=html.replaceAll('RAAI Proof 08A — Multi-Region Production World','RAAI Proof 08B — Predictive Region Handoff');
  html=html.replace('Starting Multi-Region Production World 08A…','Starting Predictive Region Handoff 08B…');
  html=html.replace('<div id="zone">08A · MULTI-REGION PRODUCTION WORLD</div>','<div id="zone">08B · PREDICTIVE REGION HANDOFF</div>');
  html=html.replace(
    '<div id="panel"><div class="title">08A Multi-Region Production World</div><div id="worldBrief"><b>World Expansion begins:</b> three independent production regions now share the frozen production actor pipeline and one cached Soldier.glb asset. Follow the diagnostic route A → B → C → A. Each previous region must unload and preserve its own actor state while only the current region remains active.</div>',
    '<div id="panel"><div class="title">08B Predictive Region Handoff</div><div id="worldBrief"><b>New variable:</b> visual actor instances for the next region are prepared off-scene before the 24 m activation boundary. Wait for the inherited 06J regression to PASS, then travel A → B → A. B and the return to A must consume prepared instances, preserve state, keep asset loads at 1, and avoid duplicate bindings.</div>'
  );

  const css='#world08A{display:none!important}#handoff08B{position:absolute;right:max(12px,env(safe-area-inset-right));top:62px;width:360px;padding:10px 11px;border:1px solid rgba(255,255,255,.16);border-radius:13px;background:rgba(8,13,16,.74);backdrop-filter:blur(11px);font:9px/1.38 ui-monospace,SFMono-Regular,Menlo,monospace;color:#fff;text-shadow:0 2px 10px rgba(0,0,0,.7);pointer-events:none}#handoff08B .title{font:850 10px/1.25 system-ui;letter-spacing:.07em;text-transform:uppercase;margin-bottom:6px}#handoff08B .grid{display:grid;grid-template-columns:auto 1fr;gap:2px 9px}#handoff08B b{text-align:right;color:#a8f0b5;white-space:nowrap}#handoffResult08B{grid-column:1/-1;text-align:left!important;margin-top:5px;padding-top:5px;border-top:1px solid rgba(255,255,255,.13);white-space:normal!important}@media(pointer:coarse),(max-width:900px){#handoff08B{top:58px;right:6px;width:260px;padding:7px 8px;font-size:7px}#handoff08B .title{font-size:8px}}';
  html=html.replace('</style>',css+'</style>');

  const hud='<div id="handoff08B"><div class="title">08B Predictive Region Handoff</div><div class="grid"><span>Handoff</span><b id="handoffStage08B">WAITING</b><span>Predict target</span><b id="handoffTarget08B">NONE</b><span>Prepared A/B</span><b id="handoffPrepared08B">A:0 · B:0</b><span>Prepared consumed</span><b id="handoffConsumed08B">0</b><span>Fallback instances</span><b id="handoffFallback08B">0</b><span>States A/B</span><b id="handoffStates08B">U/U</b><span>Active</span><b id="handoffActive08B">NONE</b><span>Route</span><b id="handoffVisited08B">—→—→—</b><span>Return state</span><b id="handoffRestored08B">PENDING</b><span>Asset loads</span><b id="handoffAsset08B">1</b><span>Duplicates</span><b id="handoffDuplicates08B">0</b><span>06J regression</span><b id="handoffRegression08B">WAITING</b><b id="handoffResult08B">WAIT FOR 06J REGRESSION PASS</b></div></div>';
  html=html.replace('<div id="error"></div>',hud+'<div id="error"></div>');
  html=html.replace(/app\.js\?v=\d+/g,'app.js?v='+buildId);
  html=html.replace(/sw\.js\?v=\d+/g,'sw.js?v='+buildId);
  return html;
}
