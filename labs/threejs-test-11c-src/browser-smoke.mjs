const endpoint=process.env.CDP_ENDPOINT||'http://127.0.0.1:9222';
const url=process.env.TEST_URL||'http://127.0.0.1:4175/?smoke=1';

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

const expression="(()=>({smoke:document.documentElement.dataset.browserSmoke||'PENDING',runtimeError:document.documentElement.dataset.runtimeError||'?',renderer:document.documentElement.dataset.renderer||'',soldier:document.documentElement.dataset.soldier||'',world:document.documentElement.dataset.world||'',terrain:document.documentElement.dataset.terrain||'',vegetation:document.documentElement.dataset.vegetation||'',water:document.documentElement.dataset.water||'',movement:document.documentElement.dataset.movement||'',jump:document.documentElement.dataset.jump||'',camera:document.documentElement.dataset.camera||'',authored:document.documentElement.dataset.authored||'',drawCalls:document.documentElement.dataset.drawCalls||'',triangles:document.documentElement.dataset.triangles||'',text:document.body?.innerText?.slice(0,1600)||''}))()";

const start=Date.now();
let last=null;
while(Date.now()-start<25000){
  const result=await cdp.send('Runtime.evaluate',{expression,returnByValue:true});
  last=result.result?.value||null;
  if(last?.smoke==='PASS')break;
  if(last?.runtimeError==='1'||last?.smoke==='FAIL')break;
  await new Promise(r=>setTimeout(r,200));
}

console.log(JSON.stringify(last,null,2));
cdp.ws.close();

if(!last)throw new Error('No browser state');
if(last.smoke!=='PASS')throw new Error('11C browser smoke failed');
if(last.runtimeError!=='0')throw new Error('runtime error flag set');
for(const key of ['soldier','world','terrain','vegetation','water','movement','jump','camera']){
  if(last[key]!=='PASS')throw new Error(key+' proof failed');
}
if(last.authored!=='4')throw new Error('expected 4 authored GLBs');
