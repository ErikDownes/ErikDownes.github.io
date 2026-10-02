
(() => {
  const COURSE='or1-course:v1', GLOSS='or1-glossary:v1';
  const defs={
    'operations research':['A quantitative discipline for modelling systems and choosing good decisions under constraints, trade-offs and uncertainty.','Model → optimise → interpret → decide.'],
    'decision variable':['A quantity the decision-maker is allowed to choose.','What can I control?'],
    'parameter':['A numerical input treated as fixed inside a model.','Given data, not a choice.'],
    'objective function':['A mathematical expression measuring what the model is trying to maximise or minimise.','What does better mean?'],
    'constraint':['A restriction that limits which decisions are feasible.','What stops us choosing anything we want?'],
    'feasible solution':['A choice of decision-variable values satisfying every constraint.','Allowed by all the rules.'],
    'feasible region':['The complete set of feasible solutions.','Every allowed decision lives here.'],
    'optimal solution':['A feasible solution with the best objective value under the stated model.','Best within the model, not automatically best in reality.'],
    'extreme point':['A corner of a polyhedral feasible region. For an LP, an optimum—when one exists—can be found at an extreme point.','Corners matter in linear programming.'],
    'slack':['Unused capacity in a less-than-or-equal resource constraint.','Available − used.'],
    'surplus variable':['The amount by which a greater-than-or-equal constraint exceeds its required minimum.','Actual − minimum.'],
    'artificial variable':['A temporary variable introduced to create an initial basis for simplex-type methods.','A computational scaffold, not a real decision.'],
    'basic feasible solution':['A feasible corner solution represented by a basis in the simplex method.','Algebraic version of a corner.'],
    'pivot':['The row-operation step that exchanges one basic variable for another in simplex.','Move to an adjacent basis.'],
    'duality':['The principle that every LP has a related dual problem carrying complementary economic information.','Same optimisation viewed from the resource-value side.'],
    'shadow price':['The marginal change in the optimal objective value from one extra unit of a constrained resource, within its valid sensitivity range.','What is one more unit of this resource worth?'],
    'reduced cost':['The objective improvement needed before a nonbasic variable would become attractive at the current optimum.','How far from entering the optimal mix?'],
    'sensitivity analysis':['Study of how an optimal solution or value changes when model data change.','How robust is the answer?'],
    'transportation problem':['A structured LP that allocates shipments from supply nodes to demand nodes at minimum cost or another objective.','How much should flow from each source to each destination?'],
    'north-west corner method':['A rule for constructing an initial transportation solution using table position rather than costs.','Feasible quickly, not necessarily cheaply.'],
    'least cost method':['An initial transportation heuristic that allocates first to the cheapest available cells.','Cheap cells first.'],
    'vogel approximation method':['A transportation heuristic using row/column penalties to choose allocations.','Largest regret for not using the cheapest route first.'],
    'modi method':['The u-v method for testing and improving a transportation solution using opportunity costs.','Potentials → reduced costs → improving loop.'],
    'stage':['One step in a multistage decision process.','Where am I in the sequence?'],
    'state':['The information from the past needed to make the remaining decisions.','What must I remember now?'],
    'bellman principle':['An optimal policy has optimal continuation decisions from every state reached by that policy.','Optimal tails inside an optimal path.'],
    'payoff':['The outcome attached to a decision and a state of nature.','What happens if I choose this and that scenario occurs?'],
    'state of nature':['An external scenario not controlled by the decision-maker.','What may happen to us?'],
    'expected monetary value':['Probability-weighted average payoff for a decision under risk.','Sum of probability × payoff.'],
    'expected opportunity loss':['Probability-weighted regret relative to the best action in each state.','Expected cost of being wrong.'],
    'evpi':['Expected value of perfect information: the most it would be rational to pay for perfect foresight.','Perfect-information value − best current expected value.'],
    'decision tree':['A graph representing sequential decisions, random events, probabilities and payoffs.','Fold the tree back from right to left.'],
    'goal programming':['An extension of mathematical programming that minimises unwanted deviations from multiple target levels, often with priorities.','Targets rather than one pure objective.'],
    'saddle point':['A game payoff that is simultaneously the row minimum and column maximum, giving a pure-strategy solution in a zero-sum game.','Maximin = minimax.'],
    'stationary point':['A point where the derivative or gradient is zero.','Candidate, not automatically optimum.'],
    'gradient':['Vector of first partial derivatives.','Direction of steepest local increase.'],
    'hessian':['Matrix of second partial derivatives used to study local curvature.','Curvature test in several variables.'],
    'lagrangian':['Objective plus constraints weighted by Lagrange multipliers.','Blend objective and active constraints into one function.'],
    'lagrange multiplier':['A multiplier associated with a constraint; under regularity it often has a marginal-value interpretation.','Constraint value at the margin.'],
    'kkt conditions':['First-order conditions for constrained nonlinear optimisation with inequalities, combining stationarity, feasibility, dual feasibility and complementary slackness.','Stationarity + feasibility + nonnegative multipliers + complementarity.'],
    'complementary slackness':['Condition linking inactive constraints to zero multipliers and positive multipliers to binding constraints.','Either slack or price, not both positive.']
  };
  const load=(k)=>{try{return JSON.parse(localStorage.getItem(k)||'{}')||{}}catch(_){return{}}};
  const save=(k,v)=>localStorage.setItem(k,JSON.stringify(v));
  const state=load(COURSE); state.pages=state.pages||{};
  const page=location.pathname;
  state.pages[page]=state.pages[page]||{quiz:{},confidence:{}};
  const ps=state.pages[page];

  const pop=document.createElement('aside');
  pop.className='or-term-pop'; pop.hidden=true;
  pop.innerHTML='<button class="or-term-close" type="button" aria-label="Close">×</button><h3></h3><p data-def></p><p data-cue></p><div class="or-term-actions"></div>';
  document.body.appendChild(pop);
  const gs=load(GLOSS);
  const close=()=>pop.hidden=true;
  pop.querySelector('.or-term-close').addEventListener('click',close);
  document.addEventListener('pointerdown',e=>{if(!pop.hidden&&!pop.contains(e.target)&&!e.target.closest?.('[data-or-term]'))close()});
  const refreshTerms=()=>document.querySelectorAll('[data-or-term]').forEach(el=>{
    const k=(el.dataset.orTerm||el.textContent).trim().toLowerCase();
    el.classList.toggle('is-known',Boolean(gs[k]?.known));
  });
  document.querySelectorAll('[data-or-term]').forEach(el=>{
    el.setAttribute('type','button');
    el.addEventListener('click',()=>{
      const raw=(el.dataset.orTerm||el.textContent).trim(), k=raw.toLowerCase();
      const [d,c]=defs[k]||['Important course term.','Explain it in your own words and give an example.'];
      gs[k]=gs[k]||{views:0,known:false}; gs[k].views++; save(GLOSS,gs);
      pop.querySelector('h3').textContent=raw; pop.querySelector('[data-def]').textContent=d; pop.querySelector('[data-cue]').textContent='Recall cue: '+c;
      const a=pop.querySelector('.or-term-actions'); a.replaceChildren();
      if(gs[k].known){
        const b=document.createElement('button');b.type='button';b.textContent='Start highlighting again';
        b.onclick=()=>{gs[k].known=false;gs[k].views=0;save(GLOSS,gs);refreshTerms();close()};a.append(b);
      }else if(gs[k].views>=2){
        for(const [lab,val] of [['I know this now',true],['Keep helping me',false]]){
          const b=document.createElement('button');b.type='button';b.textContent=lab;b.onclick=()=>{gs[k].known=val;save(GLOSS,gs);refreshTerms();close()};a.append(b);
        }
      }else{
        const s=document.createElement('span');s.textContent='First lookup — support stays on.';a.append(s);
      }
      const r=el.getBoundingClientRect(); pop.style.left=Math.min(innerWidth-410,Math.max(12,r.left))+'px'; pop.style.top=Math.min(innerHeight-220,Math.max(12,r.bottom+8))+'px'; pop.hidden=false;
    });
  });
  refreshTerms();

  const progress=()=>{
    const qs=[...document.querySelectorAll('.or-mcq')], cs=[...document.querySelectorAll('.or-confidence')];
    const qok=qs.filter((q,i)=>ps.quiz[q.dataset.id||('q'+(i+1))]===true).length;
    const cok=cs.filter((c,i)=>ps.confidence[c.dataset.id||('c'+(i+1))]==='know').length;
    const total=qs.length+cs.length, score=total?Math.round(100*(qok+cok)/total):0;
    ps.score=score; ps.mastered=total>0&&qok===qs.length&&cok===cs.length; state.pages[page]=ps; save(COURSE,state);
  };
  document.querySelectorAll('.or-mcq').forEach((box,i)=>{
    const id=box.dataset.id||('q'+(i+1)), correct=Number(box.dataset.answer||0), explain=box.dataset.explain||'Review the explanation above and try again.';
    const choices=[...box.querySelectorAll('.or-choice')], fb=box.querySelector('.or-feedback')||box.appendChild(Object.assign(document.createElement('p'),{className:'or-feedback'}));
    choices.forEach((b,j)=>b.addEventListener('click',()=>{
      choices.forEach(x=>x.classList.remove('is-correct','is-wrong'));const ok=j===correct;b.classList.add(ok?'is-correct':'is-wrong');if(!ok)choices[correct]?.classList.add('is-correct');fb.textContent=(ok?'Correct. ':'Not yet. ')+explain;ps.quiz[id]=ok;progress();
    }));
    if(ps.quiz[id]===true){choices[correct]?.classList.add('is-correct');fb.textContent='Previously answered correctly on this browser.'}
  });
  document.querySelectorAll('.or-confidence').forEach((box,i)=>{
    const id=box.dataset.id||('c'+(i+1)), a=document.createElement('div');a.className='or-confidence-actions';
    for(const [v,l] of [['notyet','Not yet'],['nearly','Nearly'],['know','I know this']]){
      const b=document.createElement('button');b.type='button';b.textContent=l;if(ps.confidence[id]===v)b.classList.add('is-on');
      b.onclick=()=>{ps.confidence[id]=v;[...a.children].forEach(x=>x.classList.remove('is-on'));b.classList.add('is-on');progress()};a.append(b);
    } box.append(a);
  });
  document.querySelectorAll('[data-or-chapter-path]').forEach(card=>{
    const p=card.dataset.orChapterPath, s=state.pages?.[p]||{}, pct=Number(s.score||0);
    card.querySelector('.or-progress>span')?.style.setProperty('width',pct+'%');
    const m=card.querySelector('.or-progress-meta');if(m)m.textContent=s.mastered?'Mastered':(pct?pct+'% evidenced':'Not started on this browser');
  });
  document.querySelectorAll('[data-or-reset]').forEach(b=>b.onclick=()=>{if(confirm('Reset Operations Research learning and glossary progress on this browser?')){localStorage.removeItem(COURSE);localStorage.removeItem(GLOSS);location.reload()}});

  document.querySelectorAll('[data-or-lp-demo]').forEach(box=>{
    const svg=box.querySelector('svg'), c1=box.querySelector('[data-c1]'), c2=box.querySelector('[data-c2]'), read=box.querySelector('[data-or-lp-readout]');
    if(!svg||!c1||!c2)return;
    const V=[[0,0],[0,8],[2,8],[4,6],[6,2],[6,0]], NS='http://www.w3.org/2000/svg';
    const W=520,H=360,m=45,sx=x=>m+x*38,sy=y=>H-m-y*34;
    const E=(tag,attrs={})=>{const e=document.createElementNS(NS,tag);for(const[k,v]of Object.entries(attrs))e.setAttribute(k,v);return e};
    const draw=()=>{
      svg.replaceChildren();
      for(let x=0;x<=10;x++)svg.append(E('line',{x1:sx(x),y1:sy(0),x2:sx(x),y2:sy(9),stroke:'#edf1f4'}));
      for(let y=0;y<=9;y++)svg.append(E('line',{x1:sx(0),y1:sy(y),x2:sx(10),y2:sy(y),stroke:'#edf1f4'}));
      svg.append(E('line',{x1:sx(0),y1:sy(0),x2:sx(10),y2:sy(0),stroke:'#44515c','stroke-width':'2'}),E('line',{x1:sx(0),y1:sy(0),x2:sx(0),y2:sy(9),stroke:'#44515c','stroke-width':'2'}));
      const pts=V.map(([x,y])=>sx(x)+','+sy(y)).join(' ');svg.append(E('polygon',{points:pts,fill:'#dfeaf2',stroke:'#557b99','stroke-width':'2'}));
      const a=Number(c1.value),b=Number(c2.value), scored=V.map(v=>({v,z:a*v[0]+b*v[1]})),best=Math.max(...scored.map(x=>x.z));
      scored.forEach(({v,z})=>svg.append(E('circle',{cx:sx(v[0]),cy:sy(v[1]),r:z===best?7:4,fill:z===best?'#23384b':'#6f8799'})));
      read.textContent='Objective: Z = '+a+'x + '+b+'y. Best displayed vertex: '+scored.filter(x=>x.z===best).map(x=>'('+x.v.join(', ')+')').join(' and ')+' with Z = '+best+'.';
    };
    c1.oninput=draw;c2.oninput=draw;draw();
  });
  progress();
})();
