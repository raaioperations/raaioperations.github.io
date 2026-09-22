export function make08DHtml(index08C,buildId){
  let html=index08C;
  html=html.replaceAll('RAAI Three.js Test 08C — Bounded Prefetch Lifecycle','RAAI Three.js Test 08D — World Expansion Certification');
  html=html.replaceAll('RAAI Proof 08C — Bounded Prefetch Lifecycle','RAAI Proof 08D — World Expansion Certification');
  html=html.replace('Starting Bounded Prefetch Lifecycle 08C…','Starting World Expansion Certification 08D…');
  html=html.replace('<div id="zone">08C · BOUNDED PREFETCH LIFECYCLE</div>','<div id="zone">08D · WORLD EXPANSION CERTIFICATION</div>');
  html=html.replace(
    '<div id="panel"><div class="title">08C Bounded Prefetch Lifecycle</div><div id="worldBrief"><b>New variable:</b> stale off-scene prefetch work must be canceled and the prepared pool must stay bounded at two instances. Wait for 06J PASS. Enter A, move toward B until Prepared B = 2 while B is still unloaded, then reverse toward A before B activates. Confirm the stale B pool is evicted. Then travel A → B → A normally to prove re-prefetch, prepared consumption, state restoration, and performance.</div>',
    '<div id="panel"><div class="title">08D World Expansion Certification</div><div id="worldBrief"><b>No new gameplay mechanic.</b> This is the Test08 closeout stress gate over the frozen 08C world. Wait for 06J PASS, then complete A → B → A → B → A. The harness certifies repeated unload/restore churn, bounded actors/bindings/prefetch, one asset load, zero duplicate state, and a minimum 30-second live certification window.</div>'
  );

  const css='#bounded08C{display:none!important}#cert08D{position:absolute;right:max(12px,env(safe-area-inset-right));top:62px;width:370px;padding:10px 11px;border:1px solid rgba(255,255,255,.16);border-radius:13px;background:rgba(8,13,16,.76);backdrop-filter:blur(11px);font:9px/1.38 ui-monospace,SFMono-Regular,Menlo,monospace;color:#fff;text-shadow:0 2px 10px rgba(0,0,0,.7);pointer-events:none}#cert08D .title{font:850 10px/1.25 system-ui;letter-spacing:.07em;text-transform:uppercase;margin-bottom:6px}#cert08D .grid{display:grid;grid-template-columns:auto 1fr;gap:2px 9px}#cert08D b{text-align:right;color:#a8f0b5;white-space:nowrap}#certResult08D{grid-column:1/-1;text-align:left!important;margin-top:5px;padding-top:5px;border-top:1px solid rgba(255,255,255,.13);white-space:normal!important}@media(pointer:coarse),(max-width:900px){#cert08D{top:58px;right:6px;width:270px;padding:7px 8px;font-size:7px}#cert08D .title{font-size:8px}}';
  html=html.replace('</style>',css+'</style>');

  const hud='<div id="cert08D"><div class="title">08D World Expansion Certification</div><div class="grid"><span>Certification</span><b id="certStage08D">WAITING</b><span>Next target</span><b id="certNext08D">A</b><span>Distance</span><b id="certDistance08D">—</b><span>Direction</span><b id="certDirection08D">—</b><span>Visits</span><b id="certSequence08D">—</b><span>Live window</span><b id="certElapsed08D">0 / 30 s</b><span>A cycles</span><b id="certACycles08D">restore 0 · unload 0</b><span>B cycles</span><b id="certBCycles08D">restore 0 · unload 0</b><span>08C actors</span><b id="certActiveActors08D">0 · peak 0/4</b><span>08C bindings</span><b id="certBindings08D">0 · peak 0/4</b><span>Prepared</span><b id="certPrepared08D">0 · peak 0/2</b><span>Prepared consumed</span><b id="certConsumed08D">0</b><span>Fallback instances</span><b id="certFallback08D">0</b><span>Asset loads</span><b id="certAsset08D">1</b><span>Duplicates</span><b id="certDuplicates08D">0</b><span>06J regression</span><b id="certRegression08D">WAITING</b><b id="certResult08D">WAIT FOR 06J REGRESSION PASS</b></div></div>';
  html=html.replace('<div id="error"></div>',hud+'<div id="error"></div>');
  html=html.replace(/app\.js\?v=\d+/g,'app.js?v='+buildId);
  html=html.replace(/sw\.js\?v=\d+/g,'sw.js?v='+buildId);
  return html;
}
