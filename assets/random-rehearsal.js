(()=>{if(!document.body.classList.contains('interview-mode'))return;
const body=document.getElementById('docBody');if(!body)return;
const style=document.createElement('style');style.textContent='.rq-overlay{position:fixed;inset:0;background:#13243d66;z-index:99999;display:grid;place-items:center;padding:16px}.rq-overlay[hidden],.rq-answer[hidden],.rq-crumbs[hidden]{display:none!important}.rq-panel{width:min(760px,100%);max-height:90vh;overflow:auto;background:white;border-radius:12px;padding:24px;box-shadow:0 12px 40px #0003}.rq-panel h2{margin:4px 0 12px;font-size:1.4rem;line-height:1.35}.rq-controls{display:flex;align-items:center;flex-wrap:wrap;gap:12px;margin:0 0 15px}.rq-controls button{font-size:.94rem}.rq-controls button[role=switch]{display:inline-flex;align-items:center;gap:7px}.rq-controls button[role=switch]::after{content:'';width:27px;height:15px;background:#a7b3c0;border-radius:20px;box-shadow:inset 0 0 0 1px #8594a5}.rq-controls button[role=switch][aria-checked=true]::after{background:#1658ba;box-shadow:inset -11px 0 0 -4px white}.rq-controls button[role=switch][aria-checked=false]::after{box-shadow:inset 11px 0 0 -4px white}.rq-controls button{padding:9px;border:1px solid #bed0e0;border-radius:7px;background:#f7fafc;cursor:pointer}.rq-crumbs{display:flex;gap:clamp(8px,1.5vw,18px);justify-content:space-evenly;flex-wrap:nowrap;padding:16px clamp(14px,3%,26px);border-top:1px solid #ddd;color:#174ea6;font-weight:800}.rq-crumbs>span{flex:0 1 auto;min-width:0;text-align:center;overflow-wrap:anywhere}.rq-answer{border-top:1px solid #ddd;padding-top:16px}.rq-close{margin-left:auto}';document.head.append(style);
const overlay=document.createElement('div');overlay.className='rq-overlay';overlay.hidden=true;overlay.innerHTML='<section class="rq-panel" role="dialog" aria-modal="true" aria-labelledby="rq-title"><h2 id="rq-title"></h2><div class="rq-controls"><button id="rq-show" role="switch" aria-checked="true">Answer</button><button id="rq-bread" role="switch" aria-checked="true">Prompts</button><button id="rq-next">Next →</button><button id="rq-close" class="rq-close">Close</button></div><div id="rq-crumbs" class="rq-crumbs"></div><div id="rq-answer" class="rq-answer"></div></section>';document.body.append(overlay);
const el=id=>overlay.querySelector('#'+id);let last=-1,answer=true,bread=true,opener;
const headings=()=>Array.from(body.querySelectorAll(':scope > h2:not(.all-domain-label)'));
function question(){
  const list=headings();
  if(!list.length)return;
  let i=Math.floor(Math.random()*list.length);
  if(i===last && list.length>1)i=(i+1)%list.length;
  last=i;
  const h=list[i];
  el('rq-title').textContent=h.dataset.questionText||h.textContent;

  const nodes=[];
  for(let n=h.nextElementSibling;n&&!n.matches('h1,h2');n=n.nextElementSibling)nodes.push(n);
  const crumbs=[];
  const content=document.createElement('div');

  nodes.forEach((n,index)=>{
    // An authored prompt uses | between one to eight short recall cues.
    // Never derive practice prompts from ordinary answer prose.
    if(n.dataset?.cueScaffold==='true')return;
    const raw=(n.textContent||'').trim();
    const isStrip=n.classList.contains('interview-breadcrumbs');
    const parts=isStrip && n.children.length
      ? Array.from(n.children).map(x=>x.textContent.trim()).filter(Boolean)
      : raw.split('|').map(x=>x.trim()).filter(Boolean);
    const authoredPipe=raw.includes('|') && index===nodes.length-1 && n.tagName==='P';
    if((isStrip||authoredPipe) && parts.length>=1 && parts.length<=8 &&
       parts.every(part=>part.length<=36) && raw.length<=180){
      crumbs.push(...parts);
      return;
    }
    const clone=n.cloneNode(true);
    clone.hidden=false;
    clone.style.removeProperty('display');
    clone.querySelectorAll('[hidden]').forEach(x=>x.hidden=false);
    content.append(clone);
  });

  el('rq-crumbs').replaceChildren(...crumbs.map(c=>{
    const span=document.createElement('span');
    span.textContent=c;
    return span;
  }));
  el('rq-answer').replaceChildren(content);
  answer=true;
  el('rq-answer').hidden=false;
  el('rq-show').setAttribute('aria-checked','true');
  // Prompt visibility is independent of answer visibility and persists
  // when the student moves to the next question.
  el('rq-crumbs').hidden=!bread||!crumbs.length;
}
el('rq-show').onclick=()=>{answer=!answer;el('rq-answer').hidden=!answer;el('rq-show').setAttribute('aria-checked',String(answer))};
el('rq-bread').onclick=()=>{bread=!bread;el('rq-crumbs').hidden=!bread||!el('rq-crumbs').children.length;el('rq-bread').setAttribute('aria-checked',String(bread))};
el('rq-next').onclick=question;
function close(){overlay.hidden=true;opener?.focus({preventScroll:true})}
el('rq-close').onclick=close;overlay.onclick=e=>{if(e.target===overlay)close()};document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!overlay.hidden)close()});
function install(){const rail=document.querySelector('#floating-page-tools');if(!rail)return false;if(document.getElementById('floating-page-random'))return true;const b=document.createElement('button');b.id='floating-page-random';b.textContent=location.pathname.endsWith('/all-interview.html')?'Random — all questions':'Random question';b.onclick=e=>{opener=e.currentTarget;bread=true;el('rq-bread').setAttribute('aria-checked','true');question();overlay.hidden=false};rail.append(b);return true}
if(!install()){const obs=new MutationObserver(()=>{if(install())obs.disconnect()});obs.observe(document.body,{childList:true,subtree:true})}
})();