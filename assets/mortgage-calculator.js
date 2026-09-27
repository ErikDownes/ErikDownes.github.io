(()=>{
const root=document.getElementById('mortgageLab');if(!root)return;
const $=id=>document.getElementById(id);
const el={price:$('housePrice'),priceExact:$('housePriceExact'),dep:$('depositPct'),rate:$('interestRate'),term:$('termYears'),extra:$('annualExtra'),canvas:$('mortgageChart'),tip:$('mortgageTooltip'),msg:$('mortgageValidation')};
const euro=n=>new Intl.NumberFormat('en-IE',{style:'currency',currency:'EUR',maximumFractionDigits:0}).format(Math.max(0,Number.isFinite(n)?n:0));
const euro2=n=>new Intl.NumberFormat('en-IE',{style:'currency',currency:'EUR',minimumFractionDigits:2,maximumFractionDigits:2}).format(Math.max(0,Number.isFinite(n)?n:0));
const clamp=(n,a,b)=>Math.min(b,Math.max(a,n));
function payment(P,annual,months){if(P<=0)return 0;if(months<=0)return NaN;const r=annual/1200;if(r===0)return P/months;return P*r/(1-Math.pow(1+r,-months));}
function simulate(P,annual,years,annualExtra){const months=Math.round(years*12),pay=payment(P,annual,months);if(P<=0)return {pay:0,rows:[{m:0,balance:0,principal:0,interest:0,extra:0}],interest:0,total:0,extraUsed:0,payoff:0};if(!Number.isFinite(pay))return null;
 let bal=P,cumPrin=0,cumInt=0,total=0,extraUsed=0;const rows=[{m:0,balance:P,principal:0,interest:0,extra:0}];const r=annual/1200;
 for(let m=1;m<=months && bal>0.005;m++){const int=bal*r;const scheduled=Math.min(pay,bal+int);let prin=Math.max(0,scheduled-int);if(prin>bal)prin=bal;bal-=prin;cumPrin+=prin;cumInt+=int;total+=scheduled;let x=0;if(m%12===0&&annualExtra>0&&bal>0){x=Math.min(annualExtra,bal);bal-=x;cumPrin+=x;total+=x;extraUsed+=x}rows.push({m,balance:Math.max(0,bal),principal:cumPrin,interest:cumInt,extra:x});}
 return {pay,rows,interest:cumInt,total,extraUsed,payoff:rows[rows.length-1].m};
}
let current=null, selectedIndex=null;
function read(){const price=Math.max(0,Number(el.priceExact.value)||0);const dep=clamp(Number(el.dep.value)||10,10,100);const rate=clamp(Number(el.rate.value)||0,0,9.9);const term=clamp(Number(el.term.value)||0,0,35);const extra=Math.max(0,Number(el.extra.value)||0);return {price,dep,rate,term,extra,deposit:price*dep/100,loan:price*(1-dep/100)}}
function update(){const s=read();el.price.value=clamp(Math.round(s.price/5000)*5000,Number(el.price.min),Number(el.price.max));$('housePriceOut').textContent=euro(s.price);el.dep.value=s.dep;el.rate.value=s.rate;el.term.value=s.term;$('depositPctOut').textContent=s.dep.toFixed(1)+'%';$('interestRateOut').textContent=s.rate.toFixed(1)+'%';$('termYearsOut').textContent=s.term+(s.term===1?' year':' years');$('depositCash').textContent=euro(s.deposit);
 if(s.loan>0&&s.term===0){current=null;el.msg.textContent='Choose a term above 0 years when a mortgage is required.';['loanKpi','monthlyKpi','payoffKpi','interestKpi','totalPaidKpi','savedKpi','houseKpi','depositKpi','extraUsedKpi'].forEach(id=>$(id).textContent='—');drawEmpty();return}
 el.msg.textContent='';
 const sim=simulate(s.loan,s.rate,s.term,s.extra);const base=simulate(s.loan,s.rate,s.term,0);current={s,sim,base};selectedIndex=null;
 $('loanKpi').textContent=euro(s.loan);$('monthlyKpi').textContent=s.loan===0?'€0':euro2(sim.pay);$('payoffKpi').textContent=formatMonths(sim.payoff);$('interestKpi').textContent=euro(sim.interest);$('totalPaidKpi').textContent=euro(sim.total);$('savedKpi').textContent=euro(Math.max(0,base.interest-sim.interest));$('houseKpi').textContent=euro(s.price);$('depositKpi').textContent=euro(s.deposit);$('extraUsedKpi').textContent=euro(sim.extraUsed);draw();
}
function formatMonths(m){if(m===0)return 'Cash purchase';const y=Math.floor(m/12),mo=m%12;return (y?y+'y ':'')+(mo?mo+'m':'').trim()}
function setupCanvas(){const c=el.canvas,rect=c.getBoundingClientRect(),dpr=Math.max(1,window.devicePixelRatio||1);const w=Math.max(320,Math.floor(rect.width||700)),h=w<520?320:420;c.width=Math.floor(w*dpr);c.height=Math.floor(h*dpr);c.style.height=h+'px';const ctx=c.getContext('2d');ctx.setTransform(dpr,0,0,dpr,0,0);return {ctx,w,h}}
function drawEmpty(){const {ctx,w,h}=setupCanvas();ctx.clearRect(0,0,w,h);ctx.fillStyle='#64748b';ctx.font='14px system-ui';ctx.textAlign='center';ctx.fillText('Enter a valid mortgage term to draw the repayment curves.',w/2,h/2)}
function draw(){if(!current)return drawEmpty();const {ctx,w,h}=setupCanvas(),rows=current.sim.rows;ctx.clearRect(0,0,w,h);const pad={l:62,r:18,t:20,b:42},pw=w-pad.l-pad.r,ph=h-pad.t-pad.b,maxY=Math.max(1,current.s.loan,current.sim.interest);const x=i=>pad.l+(i/Math.max(1,rows.length-1))*pw,y=v=>pad.t+ph-(v/maxY)*ph;
 ctx.strokeStyle='#e2e8f0';ctx.lineWidth=1;ctx.fillStyle='#64748b';ctx.font='11px system-ui';ctx.textAlign='right';
 for(let i=0;i<=4;i++){const val=maxY*i/4,yy=y(val);ctx.beginPath();ctx.moveTo(pad.l,yy);ctx.lineTo(w-pad.r,yy);ctx.stroke();ctx.fillText(shortMoney(val),pad.l-8,yy+4)}
 ctx.textAlign='center';const maxM=rows[rows.length-1].m;const ticks=Math.min(6,Math.max(1,Math.ceil(maxM/12)));for(let i=0;i<=ticks;i++){const m=Math.round(maxM*i/ticks),xx=pad.l+(m/Math.max(1,maxM))*pw;ctx.fillText((m/12).toFixed(m%12?1:0)+'y',xx,h-14)}
 const series=[['balance','#2563eb'],['principal','#16a34a'],['interest','#f59e0b']];series.forEach(([key,color])=>{ctx.strokeStyle=color;ctx.lineWidth=2.4;ctx.beginPath();rows.forEach((r,i)=>{const xx=x(i),yy=y(r[key]);i?ctx.lineTo(xx,yy):ctx.moveTo(xx,yy)});ctx.stroke()});
 if(selectedIndex!==null&&rows[selectedIndex]){const xx=x(selectedIndex);ctx.strokeStyle='#0f172a';ctx.lineWidth=1;ctx.setLineDash([4,4]);ctx.beginPath();ctx.moveTo(xx,pad.t);ctx.lineTo(xx,pad.t+ph);ctx.stroke();ctx.setLineDash([])}
}
function shortMoney(n){if(n>=1000000)return '€'+(n/1000000).toFixed(1)+'m';if(n>=1000)return '€'+Math.round(n/1000)+'k';return '€'+Math.round(n)}
function inspect(ev){if(!current||!current.sim.rows.length)return;const rect=el.canvas.getBoundingClientRect(),padL=62,padR=18,pw=rect.width-padL-padR;const px=clamp(ev.clientX-rect.left-padL,0,pw);const idx=Math.round(px/pw*(current.sim.rows.length-1));selectedIndex=idx;const r=current.sim.rows[idx];const year=Math.floor(r.m/12),month=r.m%12;el.tip.innerHTML='<strong>Year '+year+', month '+month+'</strong>Balance: '+euro(r.balance)+'<br>Principal repaid: '+euro(r.principal)+'<br>Interest paid: '+euro(r.interest)+(r.extra?'<br>Annual top-up: '+euro(r.extra):'');el.tip.hidden=false;const left=clamp(ev.clientX-rect.left+12,6,rect.width-220),top=clamp(ev.clientY-rect.top-72,6,rect.height-105);el.tip.style.left=left+'px';el.tip.style.top=top+'px';draw()}
el.price.addEventListener('input',()=>{el.priceExact.value=el.price.value;update()});el.priceExact.addEventListener('input',update);['input','change'].forEach(evt=>[el.dep,el.rate,el.term,el.extra].forEach(n=>n.addEventListener(evt,update)));
$('resetMortgage').addEventListener('click',()=>{el.price.value=400000;el.priceExact.value=400000;el.dep.value=10;el.rate.value=2.2;el.term.value=30;el.extra.value=0;update()});
el.canvas.addEventListener('pointermove',inspect);el.canvas.addEventListener('pointerdown',inspect);el.canvas.addEventListener('pointerleave',()=>{if(selectedIndex===null)el.tip.hidden=true});
window.addEventListener('resize',()=>{if(current)draw()});update();
})();

(()=>{
const root=document.getElementById('aircraftFinanceLab');if(!root)return;
const $=id=>document.getElementById(id);
const euro=n=>new Intl.NumberFormat('en-IE',{style:'currency',currency:'EUR',maximumFractionDigits:0}).format(Number.isFinite(n)?n:0);
const clamp=(n,a,b)=>Math.min(b,Math.max(a,n));
const shortMoney=n=>{const a=Math.abs(n);if(a>=1000000)return '€'+(n/1000000).toFixed(a>=10000000?0:1)+'m';if(a>=1000)return '€'+Math.round(n/1000)+'k';return '€'+Math.round(n)};
function pmt(P,annual,months){if(P<=0)return 0;const r=annual/1200;if(r===0)return P/months;return P*r/(1-Math.pow(1+r,-months));}
let aircraftCurrent=null,aircraftSelected=null;

function buildAircraftRows(debt,rate,debtYears,rent,leaseYears,annualCost,residual){
  const leaseMonths=leaseYears*12,debtMonths=debtYears*12,monthlyDebt=pmt(debt,rate,debtMonths),r=rate/1200;
  let balance=debt,cumRent=0,cumCost=0;
  const rows=[{m:0,balance,cumRent,cumCost,residual:0}];
  for(let m=1;m<=leaseMonths;m++){
    if(balance>0.005&&m<=debtMonths){
      const interest=balance*r;
      const principal=Math.min(balance,Math.max(0,monthlyDebt-interest));
      balance=Math.max(0,balance-principal);
    }
    cumRent+=rent;
    cumCost+=annualCost/12;
    rows.push({m,balance,cumRent,cumCost,residual:m===leaseMonths?residual:0});
  }
  return {rows,monthlyDebt};
}

function setupAircraftCanvas(){
  const canvas=$('aircraftChart'),rect=canvas.getBoundingClientRect(),dpr=Math.max(1,window.devicePixelRatio||1);
  const w=Math.max(320,Math.floor(rect.width||700)),h=w<520?320:420;
  canvas.width=Math.floor(w*dpr);canvas.height=Math.floor(h*dpr);canvas.style.height=h+'px';
  const ctx=canvas.getContext('2d');ctx.setTransform(dpr,0,0,dpr,0,0);return {canvas,ctx,w,h};
}

function drawAircraft(){
  if(!aircraftCurrent)return;
  const {ctx,w,h}=setupAircraftCanvas(),rows=aircraftCurrent.rows;
  ctx.clearRect(0,0,w,h);
  const pad={l:66,r:18,t:22,b:42},pw=w-pad.l-pad.r,ph=h-pad.t-pad.b;
  const maxY=Math.max(1,...rows.flatMap(r=>[r.balance,r.cumRent,r.cumCost,r.residual]));
  const x=i=>pad.l+(i/Math.max(1,rows.length-1))*pw,y=v=>pad.t+ph-(v/maxY)*ph;
  ctx.strokeStyle='#e2e8f0';ctx.lineWidth=1;ctx.fillStyle='#64748b';ctx.font='11px system-ui';ctx.textAlign='right';
  for(let i=0;i<=4;i++){const val=maxY*i/4,yy=y(val);ctx.beginPath();ctx.moveTo(pad.l,yy);ctx.lineTo(w-pad.r,yy);ctx.stroke();ctx.fillText(shortMoney(val),pad.l-8,yy+4)}
  ctx.textAlign='center';const maxM=rows[rows.length-1].m;const ticks=Math.min(6,Math.max(1,Math.ceil(maxM/12)));
  for(let i=0;i<=ticks;i++){const m=Math.round(maxM*i/ticks),xx=pad.l+(m/Math.max(1,maxM))*pw;ctx.fillText((m/12).toFixed(m%12?1:0)+'y',xx,h-14)}
  [['balance','#2563eb'],['cumRent','#16a34a'],['cumCost','#f59e0b']].forEach(([key,color])=>{ctx.strokeStyle=color;ctx.lineWidth=2.5;ctx.beginPath();rows.forEach((r,i)=>{const xx=x(i),yy=y(r[key]);i?ctx.lineTo(xx,yy):ctx.moveTo(xx,yy)});ctx.stroke()});
  const last=rows[rows.length-1];
  if(last.residual>0){
    const xx=x(rows.length-1),yy=y(last.residual);
    ctx.fillStyle='#7c3aed';ctx.beginPath();ctx.arc(xx,yy,5,0,Math.PI*2);ctx.fill();
    ctx.font='11px system-ui';ctx.textAlign='right';ctx.fillText('Residual '+shortMoney(last.residual),xx-8,Math.max(14,yy-8));
  }
  if(aircraftSelected!==null&&rows[aircraftSelected]){
    const xx=x(aircraftSelected);ctx.strokeStyle='#0f172a';ctx.lineWidth=1;ctx.setLineDash([4,4]);ctx.beginPath();ctx.moveTo(xx,pad.t);ctx.lineTo(xx,pad.t+ph);ctx.stroke();ctx.setLineDash([]);
  }
}

function inspectAircraft(ev){
  if(!aircraftCurrent)return;
  const canvas=$('aircraftChart'),tip=$('aircraftTooltip'),rect=canvas.getBoundingClientRect(),padL=66,padR=18,pw=rect.width-padL-padR;
  const px=clamp(ev.clientX-rect.left-padL,0,pw),idx=Math.round(px/pw*(aircraftCurrent.rows.length-1));
  aircraftSelected=idx;const r=aircraftCurrent.rows[idx],year=Math.floor(r.m/12),month=r.m%12;
  tip.innerHTML='<strong>Year '+year+', month '+month+'</strong>Debt balance: '+euro(r.balance)+'<br>Cumulative lease rentals: '+euro(r.cumRent)+'<br>Cumulative owner costs: '+euro(r.cumCost)+(r.residual?'<br>Residual value: '+euro(r.residual):'');
  tip.hidden=false;tip.style.left=clamp(ev.clientX-rect.left+12,6,rect.width-220)+'px';tip.style.top=clamp(ev.clientY-rect.top-72,6,rect.height-115)+'px';drawAircraft();
}

function updateAircraft(){
  const price=Math.max(0,(Number($('airPriceExact').value)||0)*1e6); $('airPrice').value=clamp(Math.round(price/1e6),Number($('airPrice').min),Number($('airPrice').max)); $('airPriceOut').textContent='€'+(price/1e6).toFixed(1).replace(/\.0$/,'')+'m';
  const eq=clamp(Number($('airEquity').value)||0,0,100);
  const rate=clamp(Number($('airDebtRate').value)||0,0,12);
  const debtYears=clamp(Number($('airDebtTerm').value)||1,1,20);
  const rent=Math.max(0,(Number($('airRent').value)||0)*1000);
  const leaseYears=clamp(Number($('airLeaseTerm').value)||1,1,15);
  const annualCost=Math.max(0,(Number($('airAnnualCost').value)||0)*1000);
  const residualPct=clamp(Number($('airResidual').value)||0,0,100);

  $('airEquityOut').textContent=eq.toFixed(0)+'%';
  $('airDebtRateOut').textContent=rate.toFixed(2).replace(/\.00$/,'')+'%';
  $('airDebtTermOut').textContent=debtYears+(debtYears===1?' year':' years');
  $('airLeaseTermOut').textContent=leaseYears+(leaseYears===1?' year':' years');
  $('airResidualOut').textContent=residualPct.toFixed(0)+'%';

  const equity=price*eq/100,debt=price-equity,residual=price*residualPct/100;
  const chart=buildAircraftRows(debt,rate,debtYears,rent,leaseYears,annualCost,residual);
  const leaseMonths=leaseYears*12,debtMonthsPaid=Math.min(leaseMonths,debtYears*12);
  const debtPaidDuringLease=chart.monthlyDebt*debtMonthsPaid,rentals=rent*leaseMonths,costs=annualCost*leaseYears;
  const net=rentals+residual-costs-debtPaidDuringLease-equity;

  $('airEquityKpi').textContent=euro(equity);
  $('airDebtKpi').textContent=euro(debt);
  $('airDebtPayKpi').textContent=euro(chart.monthlyDebt)+'/mo';
  $('airRentKpi').textContent=euro(rentals);
  $('airResidualKpi').textContent=euro(residual);
  $('airNetKpi').textContent=euro(net);

  aircraftCurrent={...chart,residual};aircraftSelected=null;drawAircraft();
}
$('airPrice').addEventListener('input',()=>{$('airPriceExact').value=$('airPrice').value;updateAircraft()});$('airPriceExact').addEventListener('input',updateAircraft);['airEquity','airDebtRate','airDebtTerm','airRent','airLeaseTerm','airAnnualCost','airResidual'].forEach(id=>{
  const n=$(id); if(n){n.addEventListener('input',updateAircraft);n.addEventListener('change',updateAircraft);}
});
const aircraftCanvas=$('aircraftChart');
if(aircraftCanvas){aircraftCanvas.addEventListener('pointermove',inspectAircraft);aircraftCanvas.addEventListener('pointerdown',inspectAircraft);}
window.addEventListener('resize',()=>{if(aircraftCurrent)drawAircraft()});
updateAircraft();
})();
(()=> {
  const root=document.getElementById('pcpLab'); if(!root) return;
  const $=id=>document.getElementById(id);
  const euro=n=>new Intl.NumberFormat('en-IE',{style:'currency',currency:'EUR',maximumFractionDigits:0}).format(Number.isFinite(n)?n:0);
  const euro2=n=>new Intl.NumberFormat('en-IE',{style:'currency',currency:'EUR',minimumFractionDigits:2,maximumFractionDigits:2}).format(Number.isFinite(n)?n:0);
  const clamp=(n,a,b)=>Math.min(b,Math.max(a,n));

  function paymentWithBalloon(P, annual, months, balloon){
    if(months<=0) return 0;
    const r=annual/1200;
    if(r===0) return Math.max(0,(P-balloon)/months);
    const pvBalloon=balloon/Math.pow(1+r,months);
    return Math.max(0,(P-pvBalloon)*r/(1-Math.pow(1+r,-months)));
  }

  function updatePCP(){
    const exact=Math.max(0,Number($('pcpPriceExact').value)||0);
    $('pcpPrice').value=clamp(Math.round(exact/1000)*1000,Number($('pcpPrice').min),Number($('pcpPrice').max));
    const price=exact;
    const deposit=clamp(Number($('pcpDeposit').value)||0,0,price);
    const rate=clamp(Number($('pcpRate').value)||0,0,15);
    const months=clamp(Number($('pcpTerm').value)||36,24,60);
    const balloon=clamp(Number($('pcpBalloon').value)||0,0,price-deposit);
    $('pcpDeposit').max=Math.max(0,price);
    $('pcpBalloon').max=Math.max(0,price-deposit);
    $('pcpPriceOut').textContent=euro(price);
    $('pcpDepositOut').textContent=euro(deposit);
    $('pcpRateOut').textContent=rate.toFixed(2).replace(/0$/,'').replace(/\.0$/,'')+'%';
    $('pcpTermOut').textContent=months+' months';
    $('pcpBalloonOut').textContent=euro(balloon);

    const financed=Math.max(0,price-deposit);
    const monthly=paymentWithBalloon(financed,rate,months,balloon);
    const monthlyTotal=monthly*months;
    const buyTotal=deposit+monthlyTotal+balloon;
    const financeCost=Math.max(0,buyTotal-price);

    $('pcpFinancedKpi').textContent=euro(financed);
    $('pcpMonthlyKpi').textContent=euro2(monthly)+'/mo';
    $('pcpMonthlyTotalKpi').textContent=euro(monthlyTotal);
    $('pcpBuyKpi').textContent=euro(buyTotal);
    $('pcpCostKpi').textContent=euro(financeCost);
    $('pcpBalloonKpi').textContent=euro(balloon);
  }

  $('pcpPrice').addEventListener('input',()=>{$('pcpPriceExact').value=$('pcpPrice').value;updatePCP()});
  $('pcpPriceExact').addEventListener('input',updatePCP);
  ['pcpDeposit','pcpRate','pcpTerm','pcpBalloon'].forEach(id=>{
    $(id).addEventListener('input',updatePCP); $(id).addEventListener('change',updatePCP);
  });
  updatePCP();
})();
