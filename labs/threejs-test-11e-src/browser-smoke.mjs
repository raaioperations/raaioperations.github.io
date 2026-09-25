const endpoint=process.env.CDP_ENDPOINT||'http://127.0.0.1:9222';
const url=process.env.TEST_URL||'http://127.0.0.1:4177/?smoke=1';

async function waitForVersion(timeoutMs=10000){
  const start=Date.now();
  while(Date.now()-start<timeoutMs){
    try{
      const r=await fetch(endpoint+'/json/version');
      if(r.ok)return r.json();
    }catch{}
    await new Promise(r=>setTimeout(r,150));
  }
  throw new Error('CDP endpoint unavailable');
}

function createCdp(wsUrl){
  const ws=new WebSocket(wsUrl);
  let nextId=1;
  const pending=new Map();
  const events=new Map();

  const ready=new Promise((resolve,reject)=>{
    ws.addEventListener('open',resolve,{once:true});
    ws.addEventListener('error',()=>reject(new Error('CDP websocket error')),{once:true});
  });

  ws.addEventListener('message',event=>{
    const msg=JSON.parse(event.data);
    if(msg.id&&pending.has(msg.id)){
      const pair=pending.get(msg.id);
      pending.delete(msg.id);
      if(msg.error)pair.reject(new Error(msg.error.message||'CDP command failed'));
      else pair.resolve(msg.result);
      return;
    }
    if(msg.method){
      const list=events.get(msg.method);
      if(list)for(const fn of [...list])fn(msg.params);
    }
  });

  const send=async(method,params={})=>{
    await ready;
    const id=nextId++;
    const promise=new Promise((resolve,reject)=>pending.set(id,{resolve,reject}));
    ws.send(JSON.stringify({id,method,params}));
    return promise;
  };

  const once=(method,timeoutMs=10000)=>new Promise((resolve,reject)=>{
    const fn=params=>{cleanup();resolve(params);};
    const timer=setTimeout(()=>{cleanup();reject(new Error('CDP event timeout: '+method));},timeoutMs);
    const cleanup=()=>{
      clearTimeout(timer);
      const list=events.get(method);
      if(list){list.delete(fn);if(!list.size)events.delete(method);}
    };
    if(!events.has(method))events.set(method,new Set());
    events.get(method).add(fn);
  });

  return{ws,ready,send,once};
}

await waitForVersion();
const create=await fetch(endpoint+'/json/new?'+encodeURIComponent('about:blank'),{method:'PUT'});
if(!create.ok)throw new Error('Unable to create Chrome target: '+create.status);
const target=await create.json();
const cdp=createCdp(target.webSocketDebuggerUrl);

await cdp.ready;
await cdp.send('Runtime.enable');
await cdp.send('Page.enable');
const loaded=cdp.once('Page.loadEventFired',15000);
await cdp.send('Page.navigate',{url});
await loaded;

const expression="(()=>({smoke:document.documentElement.dataset.browserSmoke||'PENDING',runtimeError:document.documentElement.dataset.runtimeError||'?',renderer:document.documentElement.dataset.renderer||'',soldier:document.documentElement.dataset.soldier||'',movement:document.documentElement.dataset.movement||'',jump:document.documentElement.dataset.jump||'',actors:document.documentElement.dataset.actors||'',actorPool:document.documentElement.dataset.actorPool||'',actorBudget:document.documentElement.dataset.actorBudget||'',simLod:document.documentElement.dataset.simLod||'',persistence:document.documentElement.dataset.persistence||'',statePreserved:document.documentElement.dataset.statePreserved||'',storeBounded:document.documentElement.dataset.storeBounded||'',ids:document.documentElement.dataset.ids||'',world:document.documentElement.dataset.world||'',spatial:document.documentElement.dataset.spatial||'',cache:document.documentElement.dataset.cache||'',camera:document.documentElement.dataset.camera||'',activeActors:document.documentElement.dataset.activeActors||'',actorPeakUpdates:document.documentElement.dataset.actorPeakUpdates||'',actorBudgetLimit:document.documentElement.dataset.actorBudgetLimit||'',actorNearAvg:document.documentElement.dataset.actorNearAvg||'',actorMidAvg:document.documentElement.dataset.actorMidAvg||'',actorFarAvg:document.documentElement.dataset.actorFarAvg||'',reactivations:document.documentElement.dataset.reactivations||'',restoredEntities:document.documentElement.dataset.restoredEntities||'',storeChunks:document.documentElement.dataset.storeChunks||'',storeEntities:document.documentElement.dataset.storeEntities||'',drawCalls:document.documentElement.dataset.drawCalls||'',triangles:document.documentElement.dataset.triangles||'',text:document.body?.innerText?.slice(0,2600)||''}))()";

const start=Date.now();
let last=null;
while(Date.now()-start<30000){
  const result=await cdp.send('Runtime.evaluate',{expression,returnByValue:true});
  last=result.result?.value||null;
  if(last?.smoke==='PASS')break;
  if(last?.runtimeError==='1'||last?.smoke==='FAIL')break;
  await new Promise(r=>setTimeout(r,200));
}

console.log(JSON.stringify(last,null,2));
cdp.ws.close();

if(!last)throw new Error('No browser state');
if(last.smoke!=='PASS')throw new Error('11E browser smoke failed');
if(last.runtimeError!=='0')throw new Error('runtime error flag set');
for(const key of ['soldier','movement','jump','actors','actorPool','actorBudget','simLod','persistence','statePreserved','storeBounded','ids','world','spatial','cache','camera']){
  if(last[key]!=='PASS')throw new Error(key+' proof failed');
}
if(last.activeActors!=='27')throw new Error('expected 27 active actors');
if(Number(last.actorPeakUpdates)>Number(last.actorBudgetLimit))throw new Error('actor update budget exceeded');
