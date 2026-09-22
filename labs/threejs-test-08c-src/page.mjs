export function make08CHtml(index08B,buildId){
  let html=index08B;
  html=html.replaceAll('RAAI Three.js Test 08B — Predictive Region Handoff','RAAI Three.js Test 08C — Bounded Prefetch Lifecycle');
  html=html.replaceAll('RAAI Proof 08B — Predictive Region Handoff','RAAI Proof 08C — Bounded Prefetch Lifecycle');
  html=html.replace('Starting Predictive Region Handoff 08B…','Starting Bounded Prefetch Lifecycle 08C…');
  html=html.replace('<div id="zone">08B · PREDICTIVE REGION HANDOFF</div>','<div id="zone">08C · BOUNDED PREFETCH LIFECYCLE</div>');
  html=html.replace(
    '<div id="panel"><div class="title">08B Predictive Region Handoff</div><div id="worldBrief"><b>New variable:</b> visual actor instances for the next region are prepared off-scene before the 24 m activation boundary. Wait for the inherited 06J regression to PASS, then travel A → B → A. B and the return to A must consume prepared instances, preserve state, keep asset loads at 1, and avoid duplicate bindings.</div>',
    '<div id="panel"><div class="title">08C Bounded Prefetch Lifecycle</div><div id="worldBrief"><b>New variable:</b> stale off-scene prefetch work must be canceled and the prepared pool must stay bounded at two instances. Wait for 06J PASS. Enter A, move toward B until Prepared B = 2 while B is still unloaded, then reverse toward A before B activates. Confirm the stale B pool is evicted. Then travel A → B → A normally to prove re-prefetch, prepared consumption, state restoration, and performance.</div>'
  );

  const css='#handoff08B{display:none!important}#bounded08C{position:absolute;right:max(12px,env(safe-area-inset-right));top:62px;width:365px;padding:10px 11px;border:1px solid rgba(255,255,255,.16);border-radius:13px;background:rgba(8,13,16,.74);backdrop-filter:blur(11px);font:9px/1.38 ui-monospace,SFMono-Regular,Menlo,monospace;color:#fff;text-shadow:0 2px 10px rgba(0,0,0,.7);pointer-events:none}#bounded08C .title{font:850 10px/1.25 system-ui;letter-spacing:.07em;text-transform:uppercase;margin-bottom:6px}#bounded08C .grid{display:grid;grid-template-columns:auto 1fr;gap:2px 9px}#bounded08C b{text-align:right;color:#a8f0b5;white-space:nowrap}#boundedResult08C{grid-column:1/-1;text-align:left!important;margin-top:5px;padding-top:5px;border-top:1px solid rgba(255,255,255,.13);white-space:normal!important}@media(pointer:coarse),(max-width:900px){#bounded08C{top:58px;right:6px;width:265px;padding:7px 8px;font-size:7px}#bounded08C .title{font-size:8px}}';
  html=html.replace('</style>',css+'</style>');

  const hud='<div id="bounded08C"><div class="title">08C Bounded Prefetch Lifecycle</div><div class="grid"><span>Lifecycle</span><b id="boundedStage08C">WAITING</b><span>Predict target</span><b id="boundedTarget08C">NONE</b><span>Prepared A/B</span><b id="boundedPrepared08C">A:0 · B:0</b><span>Cancellations</span><b id="boundedCancel08C">0</b><span>Evicted</span><b id="boundedEvicted08C">0</b><span>Peak prepared</span><b id="boundedPeak08C">0/2</b><span>Prepared consumed</span><b id="boundedConsumed08C">0</b><span>Fallback instances</span><b id="boundedFallback08C">0</b><span>States A/B</span><b id="boundedStates08C">U/U</b><span>Route</span><b id="boundedRoute08C">—→—→—</b><span>Return state</span><b id="boundedRestored08C">PENDING</b><span>Asset loads</span><b id="boundedAsset08C">1</b><span>Duplicates</span><b id="boundedDuplicates08C">0</b><span>06J regression</span><b id="boundedRegression08C">WAITING</b><b id="boundedResult08C">WAIT FOR 06J REGRESSION PASS</b></div></div>';
  html=html.replace('<div id="error"></div>',hud+'<div id="error"></div>');
  html=html.replace(/app\.js\?v=\d+/g,'app.js?v='+buildId);
  html=html.replace(/sw\.js\?v=\d+/g,'sw.js?v='+buildId);
  return html;
}
