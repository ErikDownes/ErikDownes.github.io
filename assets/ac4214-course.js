
(() => {
  const COURSE_KEY='ac4214-course:v1';
  const GLOSSARY_KEY='ac4214-glossary:v1';
  const defs={
    'variable cost':['A cost whose total changes with activity volume.','More activity → more total variable cost.'],
    'fixed cost':['A cost that does not change with activity within the relevant range and time horizon.','Fixed in total, not necessarily per unit.'],
    'stepped fixed cost':['A fixed cost that jumps to a new level when capacity passes a threshold.','Capacity step → new fixed-cost level.'],
    'semi-variable cost':['A cost containing both fixed and variable elements.','Base charge + usage charge.'],
    'high-low method':['A simple method that estimates variable cost per unit from the highest and lowest activity observations, then derives fixed cost.','Change in cost ÷ change in activity.'],
    'relevant cost':['A future cash flow that differs between the alternatives being considered.','Future + different + cash flow.'],
    'sunk cost':['A past cost already incurred and therefore unchanged by the current decision.','Past and gone.'],
    'committed cost':['A future payment already contractually committed and unchanged by the decision.','Future payment, but not avoidable.'],
    'opportunity cost':['The benefit sacrificed by choosing one alternative instead of the best forgone alternative.','What do I give up?'],
    'replacement cost':['The current cost of replacing a resource that will need to be replenished if used.','Use it now → buy it again.'],
    'contribution':['Sales revenue minus variable cost. Contribution first covers fixed cost and then profit.','Selling price − variable cost.'],
    'break-even point':['The activity level at which total revenue equals total cost and profit is zero.','Contribution exactly covers fixed cost.'],
    'margin of safety':['The amount by which actual or budgeted sales exceed break-even sales.','How far above break-even?'],
    'cvp analysis':['Cost-volume-profit analysis studies how selling price, volume, variable cost, fixed cost and sales mix affect profit.','Price + volume + cost → profit.'],
    'limiting factor':['A scarce resource that prevents all desired output from being produced.','The constraint.'],
    'contribution per limiting factor':['Contribution earned per unit of the scarce resource, used to rank products when one resource is constrained.','Contribution ÷ scarce-resource units.'],
    'budget':['A quantified plan for a future period.','Plan in numbers.'],
    'budgetary control':['Using budgets to compare planned and actual performance and to support corrective action.','Plan → compare → act.'],
    'master budget':['The coordinated set of operating and financial budgets culminating in budgeted financial statements and cash.','All budgets joined together.'],
    'incremental budgeting':['Preparing a new budget by adjusting the previous budget for expected changes.','Last year ± changes.'],
    'zero-based budgeting':['Building a budget from a zero base so expenditure must be justified rather than automatically carried forward.','Justify from zero.'],
    'rolling budget':['A continuously updated budget that adds a new future period as the current period ends.','Always keep the horizon moving.'],
    'cash budget':['A forecast of cash receipts, cash payments and resulting cash balances over future periods.','When does cash actually move?'],
    'payback period':['The time required for project cash inflows to recover the initial investment.','How quickly do we get the cash back?'],
    'accounting rate of return':['Average annual accounting profit expressed as a percentage of investment.','Profit-based return measure.'],
    'net present value':['Present value of project cash inflows minus present value of cash outflows.','Discount all relevant cash flows to today.'],
    'internal rate of return':['The discount rate that makes a project’s NPV equal to zero.','The project’s break-even discount rate.'],
    'discounting':['Converting a future cash flow to an equivalent value today using a discount rate.','Future cash → today.'],
    'present value':['The value today of a future cash flow after discounting.','Future value ÷ discount factor.'],
    'cost of capital':['The return required by providers of finance; commonly used as the discount rate in investment appraisal.','Required return on funding.'],
    'working capital':['Short-term resources and obligations used in day-to-day operations, commonly focused on inventories, receivables, cash and payables.','Cash tied up in operations.'],
    'economic order quantity':['The order quantity that balances relevant ordering and holding costs under the EOQ assumptions.','Balance order cost with holding cost.'],
    'reorder level':['The inventory level that triggers a new order so replenishment should arrive before stock runs out.','Lead time tells you when to reorder.'],
    'safety stock':['Extra inventory held as a buffer against uncertainty in demand or lead time.','Insurance against stock-out.'],
    'just-in-time':['An inventory approach that aims to receive or produce items close to when they are needed, reducing inventory holdings.','Need it → receive it.'],
    'trade receivable':['An amount owed by a customer for credit sales.','Customer owes the business.'],
    'credit period':['The time allowed, or actually taken, for a customer to pay a credit sale.','How long cash is tied up.'],
    'cash discount':['A reduction offered to customers for earlier payment.','Give up some revenue to get cash sooner.'],
    'full absorption cost':['A unit cost including direct costs plus an allocated share of production overhead.','Direct cost + absorbed production overhead.'],
    'depreciation':['An accounting allocation of a non-current asset’s depreciable amount over its useful life. It is not itself a cash outflow in the period charged.','Accounting expense, not current cash flow.'],
    'liquidity':['The ability to meet short-term cash obligations when they fall due.','Can the business pay on time?'],
    'qualitative factor':['A decision consideration that may not be readily expressed in money, such as quality, staff morale, reliability, customer effects or environmental impact.','Not everything important fits in a spreadsheet.']
  };

  const load=()=>{
    try{return JSON.parse(localStorage.getItem(COURSE_KEY)||'{}')||{}}catch(_){return{}}
  };
  const save=s=>localStorage.setItem(COURSE_KEY,JSON.stringify(s));
  const glossaryLoad=()=>{
    try{return JSON.parse(localStorage.getItem(GLOSSARY_KEY)||'{}')||{}}catch(_){return{}}
  };
  const glossarySave=s=>localStorage.setItem(GLOSSARY_KEY,JSON.stringify(s));
  const page=location.pathname;
  const state=load();
  state.pages=state.pages||{};
  state.pages[page]=state.pages[page]||{quiz:{},confidence:{}};
  const pstate=state.pages[page];

  // Glossary: per-browser encounters and learner-controlled graduation.
  const pop=document.createElement('aside');
  pop.className='ac-term-pop';
  pop.hidden=true;
  pop.innerHTML='<button class="ac-term-close" type="button" aria-label="Close">×</button><h3></h3><p data-def></p><p data-cue></p><div class="ac-term-actions"></div>';
  document.body.appendChild(pop);
  const close=()=>pop.hidden=true;
  pop.querySelector('.ac-term-close').addEventListener('click',close);
  document.addEventListener('pointerdown',e=>{
    if(!pop.hidden&&!pop.contains(e.target)&&!e.target.closest?.('[data-ac-term]')) close();
  });

  const gstate=glossaryLoad();
  const refreshTerms=()=>document.querySelectorAll('[data-ac-term]').forEach(el=>{
    const key=(el.dataset.acTerm||el.textContent).trim().toLowerCase();
    el.classList.toggle('is-known',Boolean(gstate[key]?.known));
    el.title=gstate[key]?.known?'Glossary term — marked as known':'Glossary term — click for support';
  });
  document.querySelectorAll('[data-ac-term]').forEach(el=>{
    el.setAttribute('type','button');
    el.addEventListener('click',()=>{
      const raw=(el.dataset.acTerm||el.textContent).trim();
      const key=raw.toLowerCase();
      const [definition,cue]=defs[key]||['Course glossary term.','Explain it in your own words.'];
      gstate[key]=gstate[key]||{views:0,known:false};
      gstate[key].views=(gstate[key].views||0)+1;
      glossarySave(gstate);
      pop.querySelector('h3').textContent=raw;
      pop.querySelector('[data-def]').textContent=definition;
      pop.querySelector('[data-cue]').textContent='Recall cue: '+cue;
      const actions=pop.querySelector('.ac-term-actions');
      actions.replaceChildren();
      if(!gstate[key].known && gstate[key].views>=2){
        const know=document.createElement('button');
        know.type='button'; know.textContent='I know this now';
        know.addEventListener('click',()=>{gstate[key].known=true;glossarySave(gstate);refreshTerms();close()});
        const help=document.createElement('button');
        help.type='button'; help.textContent='Keep helping me';
        help.addEventListener('click',()=>{gstate[key].known=false;glossarySave(gstate);close()});
        actions.append(know,help);
      }else if(gstate[key].known){
        const restore=document.createElement('button');
        restore.type='button'; restore.textContent='Start highlighting again';
        restore.addEventListener('click',()=>{gstate[key].known=false;gstate[key].views=0;glossarySave(gstate);refreshTerms();close()});
        actions.append(restore);
      }else{
        const note=document.createElement('span');
        note.textContent=gstate[key].views===1?'First lookup — support stays on.':'';
        actions.append(note);
      }
      const r=el.getBoundingClientRect();
      pop.style.left=Math.min(window.innerWidth-400,Math.max(12,r.left))+'px';
      pop.style.top=Math.min(window.innerHeight-220,Math.max(12,r.bottom+8))+'px';
      pop.hidden=false;
    });
  });
  refreshTerms();

  // Multiple-choice checks.
  document.querySelectorAll('.ac-mcq').forEach((box,index)=>{
    const id=box.dataset.id||('q'+(index+1));
    const correct=Number(box.dataset.answer||0);
    const explain=box.dataset.explain||'Review the worked explanation above and try again.';
    const choices=[...box.querySelectorAll('.ac-choice')];
    const feedback=box.querySelector('.ac-feedback')||box.appendChild(Object.assign(document.createElement('p'),{className:'ac-feedback'}));
    choices.forEach((b,i)=>b.addEventListener('click',()=>{
      choices.forEach(x=>x.classList.remove('is-correct','is-wrong'));
      const ok=i===correct;
      b.classList.add(ok?'is-correct':'is-wrong');
      if(!ok) choices[correct]?.classList.add('is-correct');
      feedback.textContent=(ok?'Correct. ':'Not yet. ')+explain;
      pstate.quiz[id]=ok;
      state.pages[page]=pstate;save(state);updatePageProgress();
    }));
    if(pstate.quiz[id]===true){choices[correct]?.classList.add('is-correct');feedback.textContent='Previously answered correctly.'}
  });

  // Confidence is metacognitive evidence, not an automatic grade.
  document.querySelectorAll('.ac-confidence').forEach((box,index)=>{
    const id=box.dataset.id||('c'+(index+1));
    const actions=document.createElement('div');
    actions.className='ac-confidence-actions';
    [['notyet','Not yet'],['nearly','Nearly'],['know','I know this']].forEach(([value,label])=>{
      const b=document.createElement('button'); b.type='button'; b.textContent=label;
      if(pstate.confidence[id]===value)b.classList.add('is-on');
      b.addEventListener('click',()=>{
        pstate.confidence[id]=value; state.pages[page]=pstate; save(state);
        [...actions.children].forEach(x=>x.classList.remove('is-on')); b.classList.add('is-on'); updatePageProgress();
      });
      actions.appendChild(b);
    });
    box.appendChild(actions);
  });

  const updatePageProgress=()=>{
    const quizzes=[...document.querySelectorAll('.ac-mcq')];
    const confidences=[...document.querySelectorAll('.ac-confidence')];
    const qok=quizzes.filter((_,i)=>pstate.quiz[quizzes[i].dataset.id||('q'+(i+1))]===true).length;
    const cok=confidences.filter((_,i)=>pstate.confidence[confidences[i].dataset.id||('c'+(i+1))]==='know').length;
    const total=quizzes.length+confidences.length;
    const score=total?Math.round(100*(qok+cok)/total):0;
    pstate.score=score;
    pstate.mastered=total>0&&qok===quizzes.length&&cok===confidences.length;
    state.pages[page]=pstate; save(state);
    document.querySelectorAll('[data-ac-page-progress]').forEach(el=>{
      el.textContent=pstate.mastered?'Mastered':score+'% evidenced';
    });
  };
  updatePageProgress();

  // Landing-page chapter progress.
  document.querySelectorAll('[data-ac-chapter-path]').forEach(card=>{
    const path=card.dataset.acChapterPath;
    const ps=state.pages?.[path]||{};
    const pct=Number(ps.score||0);
    card.querySelector('.ac-progress>span')?.style.setProperty('width',pct+'%');
    const meta=card.querySelector('.ac-progress-meta');
    if(meta) meta.textContent=ps.mastered?'Mastered':(pct?pct+'% evidenced':'Not started on this browser');
  });

  document.querySelectorAll('[data-ac-reset]').forEach(b=>b.addEventListener('click',()=>{
    if(confirm('Reset AC4214 learning and glossary progress in this browser?')){
      localStorage.removeItem(COURSE_KEY); localStorage.removeItem(GLOSSARY_KEY); location.reload();
    }
  }));
})();
