
(() => {
  const $ = id => document.getElementById(id);
  const moneyM = n => '$' + n.toFixed(2) + 'm';
  const moneyK = n => '$' + Math.round(n) + 'k';
  const pct = n => n.toFixed(1) + '%';
  const clamp = (x,a,b)=>Math.max(a,Math.min(b,x));

  const defaults = {
    'atr42': {value:13, lease:125, decline:5.5},
    'atr72': {value:18, lease:180, decline:5.0},
    'd8-100': {value:3.5, lease:55, decline:7.0},
    'd8-300': {value:5.5, lease:75, decline:6.5},
    'd8-400': {value:12, lease:145, decline:6.0}
  };

  const acquisitionDefaults = {
    'atr42': {
      price: 22,
      note: 'Illustrative ATR 42-600 acquisition assumption. Adjust the value rather than treating it as a manufacturer list price.'
    },
    'atr72': {
      price: 25,
      note: 'ATR announced 40 ATR 72-600 aircraft for around $1bn in September 2026 — roughly $25m each as a headline transaction proxy, not an official list price.'
    },
    'd8-400': {
      price: 12,
      note: 'Illustrative refurbished Dash 8-400 acquisition assumption. De Havilland Canada is publicly selling OEM-refurbished Dash 8-400 aircraft in 2026; transaction prices are not disclosed.'
    }
  };

  const industryEvents = {
    paris: {
      name: 'Paris Air Show 2027',
      dateLabel: '14–20 June 2027 · Paris-Le Bourget',
      start: new Date('2027-06-14T09:00:00+02:00'),
      end: new Date('2027-06-20T18:00:00+02:00')
    },
    dubai: {
      name: 'Dubai Airshow 2027',
      dateLabel: '15–19 November 2027 · DWC, Dubai Airshow Site',
      start: new Date('2027-11-15T10:00:00+04:00'),
      end: new Date('2027-11-19T18:00:00+04:00')
    }
  };

  function selectedIndustryEvent() {
    const choice = $('acqEventSelect') ? $('acqEventSelect').value : 'auto';
    if (choice !== 'auto') return industryEvents[choice];
    const now = new Date();
    if (now <= industryEvents.paris.end) return industryEvents.paris;
    return industryEvents.dubai;
  }

  function countdownLabel(target, now = new Date()) {
    const ms = target - now;
    if (ms <= 0) return 'NOW';
    const totalHours = Math.floor(ms / 3600000);
    const days = Math.floor(totalHours / 24);
    const hours = totalHours % 24;
    return days + 'd ' + hours + 'h';
  }

  function formatShortDate(date) {
    return new Intl.DateTimeFormat('en-IE', {day:'numeric', month:'short', year:'numeric'}).format(date);
  }

  function updateAcquisition() {
    if (!$('acqAircraft')) return;
    const type = $('acqAircraft').value;
    const price = +$('acqUnitPrice').value || 0;
    const firm = +$('acqFirmQty').value;
    const options = +$('acqOptionQty').value;
    const exercise = Math.min(+$('acqExerciseQty').value, options);
    const factor = +$('acqOptionPriceFactor').value;
    const depositPct = +$('acqDepositPct').value;
    const leadDays = +$('acqDecisionLead').value;
    const optionPrice = price * factor / 100;
    const firmValue = price * firm;
    const exerciseValue = optionPrice * exercise;
    const programmeValue = firmValue + exerciseValue;
    const maxValue = firmValue + optionPrice * options;
    const upfront = programmeValue * depositPct / 100;
    const remaining = options - exercise;

    $('acqExerciseQty').max = String(options);
    $('acqExerciseQty').value = String(exercise);
    setOut('acqFirmOut', firm + (firm === 1 ? ' aircraft' : ' aircraft'));
    setOut('acqOptionsOut', options + ' available');
    setOut('acqExerciseOut', exercise + ' exercised');
    setOut('acqOptionFactorOut', factor + '% of base price');
    setOut('acqDepositOut', depositPct + '%');
    setOut('acqLeadOut', leadDays + ' days');

    setOut('acqFirmValue', moneyM(firmValue));
    setOut('acqExerciseValue', moneyM(exerciseValue));
    setOut('acqProgramValue', moneyM(programmeValue));
    setOut('acqMaxValue', moneyM(maxValue));
    setOut('acqUpfrontValue', moneyM(upfront));
    setOut('acqRemaining', String(remaining));

    const event = selectedIndustryEvent();
    const now = new Date();
    const decisionDate = new Date(event.start.getTime() - leadDays * 86400000);
    setOut('acqEventName', event.name);
    setOut('acqEventDate', event.dateLabel);
    setOut('acqCountdown', countdownLabel(event.start, now));

    const decisionMs = decisionDate - now;
    const decisionText = decisionMs > 0
      ? countdownLabel(decisionDate, now) + ' to decision gate'
      : 'decision gate reached';

    const summary = exercise === 0
      ? 'Firm order: ' + firm + ' aircraft. ' + options + ' purchase options remain available.'
      : 'Firm order: ' + firm + ' aircraft plus ' + exercise + ' exercised option' + (exercise === 1 ? '' : 's') + '. ' + remaining + ' remain.';
    setOut('acqDecisionSummary', summary + ' ' + decisionText + '.');

    const pill = $('acqStatusPill');
    if (pill) {
      pill.textContent = exercise === 0 ? 'OPTIONS HELD' : (remaining === 0 ? 'ALL OPTIONS EXERCISED' : 'OPTIONS PARTLY EXERCISED');
    }

    const timeline = $('acqTimeline');
    if (timeline) {
      const eventState = now >= event.start && now <= event.end ? 'UNDERWAY' : (now > event.end ? 'COMPLETED' : countdownLabel(event.start, now));
      timeline.innerHTML =
        '<article><span>TODAY</span><strong>' + formatShortDate(now) + '</strong><small>Current model date</small></article>' +
        '<article><span>DECISION GATE</span><strong>' + formatShortDate(decisionDate) + '</strong><small>' + decisionText + '</small></article>' +
        '<article><span>INDUSTRY MILESTONE</span><strong>' + formatShortDate(event.start) + '</strong><small>' + event.name + ' · ' + eventState + '</small></article>';
    }
  }

  function chooseAcquisitionAircraft(type) {
    if (!acquisitionDefaults[type] || !$('acqAircraft')) return;
    $('acqAircraft').value = type;
    $('acqUnitPrice').value = acquisitionDefaults[type].price;
    setOut('acqPriceNote', acquisitionDefaults[type].note);
    document.querySelectorAll('[data-acq-aircraft]').forEach(function(btn){
      btn.classList.toggle('active', btn.dataset.acqAircraft === type);
    });
    updateAcquisition();
  }

  function setOut(id, value){ const el=$(id); if(el) el.textContent=value; }

  function model({value, leaseK, horizon, discount, decline, annualCost}) {
    const rows=[]; let cum=0; let gross=0;
    for(let y=0;y<=horizon;y++){
      const asset=value*Math.pow(1-decline/100,y);
      if(y===0){rows.push({year:0,asset,cum:0,net:0});continue;}
      const lease=leaseK*12/1000;
      const net=lease-annualCost;
      gross+=lease;
      const pv=net/Math.pow(1+discount/100,y);
      cum+=pv;
      rows.push({year:y,asset,cum,net});
    }
    const residual=rows[rows.length-1].asset;
    const residualPV=residual/Math.pow(1+discount/100,horizon);
    return {rows,residual,gross,npv:cum+residualPV};
  }

  function drawLineChart(canvas, series, labels) {
    if(!canvas) return;
    const ctx=canvas.getContext('2d');
    const W=canvas.width,H=canvas.height,p={l:62,r:24,t:26,b:48};
    ctx.clearRect(0,0,W,H);
    const all=series.flatMap(s=>s.values);
    const max=Math.max(...all,1)*1.12;
    ctx.strokeStyle='#d9dee8'; ctx.lineWidth=1;
    ctx.fillStyle='#667085'; ctx.font='14px system-ui';
    for(let i=0;i<=4;i++){
      const y=p.t+(H-p.t-p.b)*i/4;
      ctx.beginPath();ctx.moveTo(p.l,y);ctx.lineTo(W-p.r,y);ctx.stroke();
      const v=max*(1-i/4);
      ctx.fillText('$'+v.toFixed(v<10?1:0)+'m',8,y+5);
    }
    const n=Math.max(...series.map(s=>s.values.length));
    labels.forEach((lab,i)=>{
      const x=p.l+(W-p.l-p.r)*(n===1?0:i/(n-1));
      if(i===0||i===labels.length-1||i%2===0) ctx.fillText(lab,x-8,H-16);
    });
    const palette=['#172554','#0f766e','#b45309','#7c3aed'];
    series.forEach((s,si)=>{
      ctx.strokeStyle=palette[si%palette.length];ctx.lineWidth=3;ctx.beginPath();
      s.values.forEach((v,i)=>{
        const x=p.l+(W-p.l-p.r)*(s.values.length===1?0:i/(s.values.length-1));
        const y=p.t+(H-p.t-p.b)*(1-v/max);
        if(i===0)ctx.moveTo(x,y);else ctx.lineTo(x,y);
      });
      ctx.stroke();
    });
    let lx=p.l;
    series.forEach((s,si)=>{
      ctx.fillStyle=palette[si%palette.length];ctx.fillRect(lx,5,14,4);
      ctx.fillStyle='#344054';ctx.fillText(s.name,lx+20,12);lx+=Math.max(150,s.name.length*8+38);
    });
  }

  function drawBars(canvas, items) {
    if(!canvas)return;
    const ctx=canvas.getContext('2d'),W=canvas.width,H=canvas.height,p={l:65,r:25,t:30,b:65};
    ctx.clearRect(0,0,W,H);
    const vals=items.map(x=>x.value); const max=Math.max(...vals,1)*1.15; const min=Math.min(0,...vals);
    const span=max-min||1;
    const y=v=>p.t+(H-p.t-p.b)*(max-v)/span;
    ctx.strokeStyle='#d9dee8';ctx.fillStyle='#667085';ctx.font='14px system-ui';
    for(let i=0;i<=4;i++){const v=min+span*i/4, yy=y(v);ctx.beginPath();ctx.moveTo(p.l,yy);ctx.lineTo(W-p.r,yy);ctx.stroke();ctx.fillText('$'+v.toFixed(1)+'m',8,yy+5)}
    const bw=(W-p.l-p.r)/(items.length*1.7), gap=(W-p.l-p.r)/items.length;
    const colors=['#9a3412','#172554','#0f766e'];
    items.forEach((it,i)=>{
      const x=p.l+gap*i+(gap-bw)/2, yy=y(it.value), zero=y(0);
      ctx.fillStyle=colors[i%colors.length];ctx.fillRect(x,Math.min(yy,zero),bw,Math.abs(zero-yy));
      ctx.fillStyle='#344054';ctx.fillText(it.label,x-5,H-32);ctx.font='bold 14px system-ui';ctx.fillText(moneyM(it.value),x-5,Math.min(yy,zero)-8);ctx.font='14px system-ui';
    });
  }

  function updateSingle() {
    const type=$('aircraftType').value, d=defaults[type];
    const age=+$('startAge').value,value=+$('startValue').value,leaseK=+$('monthlyLease').value,
      horizon=+$('horizon').value,discount=+$('discountRate').value,decline=+$('valueDecline').value,cost=+$('annualCost').value;
    setOut('ageOut',age+' years');setOut('valueOut',moneyM(value));setOut('leaseOut',moneyK(leaseK)+'/month');
    setOut('horizonOut',horizon+' years');setOut('discountOut',pct(discount));setOut('declineOut',pct(decline));setOut('costOut',moneyM(cost)+'/yr');
    const r=model({value,leaseK,horizon,discount,decline,annualCost:cost});
    $('npvKpi').textContent=moneyM(r.npv);$('residualKpi').textContent=moneyM(r.residual);$('incomeKpi').textContent=moneyM(r.gross);$('endAgeKpi').textContent=(age+horizon)+' yrs';
    drawLineChart($('singleChart'),[
      {name:'Estimated asset value',values:r.rows.map(x=>x.asset)},
      {name:'Cumulative discounted net lease cash',values:r.rows.map(x=>x.cum)}
    ],r.rows.map(x=>'Y'+x.year));
    updateScenarios();
  }

  function updateRelet(){
    const age=+$('reAge').value,lease=+$('reLease').value,delta=+$('newLeaseDelta').value,down=+$('downtime').value,cost=+$('transitionCost').value,h=+$('reHorizon').value;
    setOut('reAgeOut',age+' years');setOut('reLeaseOut',moneyK(lease)+'/month');setOut('newLeaseDeltaOut',(delta>=0?'+':'')+delta+'%');setOut('downtimeOut',down+' months');setOut('transitionCostOut',moneyM(cost));setOut('reHorizonOut',h+' years');
    const dr=8/100, annual=lease*12/1000, newAnnual=annual*(1+delta/100);
    let extend=0,relet=-cost; const ext=[],rel=[];
    for(let y=1;y<=h;y++){
      const e=annual/Math.pow(1+dr,y); extend+=e; ext.push(extend);
      let cash=newAnnual;
      if(y===1) cash*=Math.max(0,12-down)/12;
      const rr=cash/Math.pow(1+dr,y); relet+=rr; rel.push(relet);
    }
    $('extendNpv').textContent=moneyM(extend);$('reletNpv').textContent=moneyM(relet);
    const diff=relet-extend;$('decisionDelta').textContent=(diff>=0?'+':'')+moneyM(diff);
    $('decisionLabel').textContent=diff>0?'Re-lease leads':'Extend leads';
    drawLineChart($('reletChart'),[{name:'Extend current lease',values:[0,...ext]},{name:'Transition & re-lease',values:[-cost,...rel]}],Array.from({length:h+1},(_,i)=>'Y'+i));
  }

  function updateScenarios(){
    if(!$('startValue'))return;
    const base={value:+$('startValue').value,leaseK:+$('monthlyLease').value,horizon:+$('horizon').value,discount:+$('discountRate').value,decline:+$('valueDecline').value,annualCost:+$('annualCost').value};
    const scenarios=[
      {name:'Conservative',leaseK:base.leaseK*.9,discount:clamp(base.discount+2,1,20),decline:clamp(base.decline+2,0,20)},
      {name:'Base',leaseK:base.leaseK,discount:base.discount,decline:base.decline},
      {name:'Upside',leaseK:base.leaseK*1.1,discount:clamp(base.discount-2,1,20),decline:clamp(base.decline-2,0,20)}
    ].map(s=>({...s,result:model({...base,leaseK:s.leaseK,discount:s.discount,decline:s.decline})}));
    $('scenarioCards').innerHTML=scenarios.map(s=>'<article><span>'+s.name+'</span><strong>'+moneyM(s.result.npv)+'</strong><small>Lease '+moneyK(s.leaseK)+'/mo · discount '+pct(s.discount)+' · value decline '+pct(s.decline)+'</small></article>').join('');
    drawBars($('scenarioChart'),scenarios.map(s=>({label:s.name,value:s.result.npv})));
  }

  document.querySelectorAll('.lease-tab').forEach(btn=>btn.addEventListener('click',()=>{
    document.querySelectorAll('.lease-tab').forEach(b=>b.classList.toggle('active',b===btn));
    document.querySelectorAll('.lease-panel').forEach(p=>p.classList.toggle('active',p.dataset.panel===btn.dataset.tab));
    if(btn.dataset.tab==='acquisition') updateAcquisition();
    if(btn.dataset.tab==='scenarios') updateScenarios();
    if(btn.dataset.tab==='portfolio') initPortfolioMap();
  }));

  ['acqUnitPrice','acqFirmQty','acqOptionQty','acqExerciseQty','acqOptionPriceFactor','acqDepositPct','acqDecisionLead'].forEach(id=>$(id)?.addEventListener('input',updateAcquisition));
  $('acqEventSelect')?.addEventListener('change', updateAcquisition);
  document.querySelectorAll('[data-acq-aircraft]').forEach(function(btn){
    btn.addEventListener('click', function(){ chooseAcquisitionAircraft(btn.dataset.acqAircraft); });
  });
  document.querySelectorAll('[data-acq-exercise]').forEach(function(btn){
    btn.addEventListener('click', function(){
      const options = +$('acqOptionQty').value;
      const mode = btn.dataset.acqExercise;
      $('acqExerciseQty').value = mode === 'all' ? options : (mode === 'half' ? Math.ceil(options / 2) : 0);
      updateAcquisition();
    });
  });

  ['startAge','startValue','monthlyLease','horizon','discountRate','valueDecline','annualCost'].forEach(id=>$(id)?.addEventListener('input',updateSingle));
  $('aircraftType')?.addEventListener('change',()=>{
    const d=defaults[$('aircraftType').value];
    $('startValue').value=d.value;$('monthlyLease').value=d.lease;$('valueDecline').value=d.decline;updateSingle();
  });
  ['reAge','reLease','newLeaseDelta','downtime','transitionCost','reHorizon'].forEach(id=>$(id)?.addEventListener('input',updateRelet));

  const portfolioRecords = [
    {operator:'IndiGo',country:'India',city:'Delhi / Gurugram',region:'Asia',lat:28.46,lng:77.03,count:4,aircraft:'ATR 72-600',msn:[],detail:'Four aircraft acquired in 2024 with existing IndiGo leases attached.',source:'https://abelo.aero/wp-content/uploads/2024/03/Abelo-Press-Release-25032024.pdf'},
    {operator:'SKY express',country:'Greece',city:'Athens',region:'Europe',lat:37.99,lng:23.73,count:2,aircraft:'ATR 72-600',msn:[],registration:['SX-TWR'],detail:'Two new ATR 72-600 placements from Abelo’s ATR orderbook in 2024.',source:'https://abelo.aero/abelo-sky-express-collaboration-continues-with-two-brand-new-atr-72-600/'},
    {operator:'Olympic Air',country:'Greece',city:'Athens',region:'Europe',lat:38.08,lng:23.82,count:1,aircraft:'ATR 72-600',msn:[],detail:'New ATR 72-600 delivered on lease in 2024.',source:'https://avitrader.com/2024/04/12/abelo-leases-new-aircraft-to-olympic-air/'},
    {operator:'Renegade Air',country:'Kenya',city:'Nairobi',region:'Africa',lat:-1.29,lng:36.82,count:1,aircraft:'ATR 72-500F',msn:['875'],registration:['5Y-RNF'],detail:'Cargo-converted ATR 72-500 delivered in 2024.',source:'https://www.journal-aviation.com/leasing-et-financement/abelo-livre-un-atr72f-au-kenya-20240524.html'},
    {operator:'Maldivian',country:'Maldives',city:'Malé',region:'Asia',lat:4.18,lng:73.51,count:2,aircraft:'ATR 42-600',msn:['1617'],registration:['8Q-IAV'],detail:'Two ATR 42-600 finance-lease aircraft; the second was delivered in May 2025. One MSN is publicly identified here.',source:'https://abelo.aero/wp-content/uploads/2025/06/PR-Maldivian-May-2025.pdf'},
    {operator:'Madagascar Airlines',country:'Madagascar',city:'Antananarivo',region:'Africa',lat:-18.88,lng:47.51,count:2,aircraft:'ATR 72-500 / ATR 72-600',msn:['698','1248'],registration:['5R-MJF','5R-EJB'],detail:'Two Abelo leases extended in 2025 to January 2028 and November 2029 respectively.',source:'https://madagascarairlines.com/fileadmin/user_upload/actualites/JOINT_PRESS_RELEASE_MD-Abelo_062325.pdf'},
    {operator:'Braathens Regional Airways',country:'Sweden',city:'Stockholm',region:'Europe',lat:59.33,lng:18.07,count:3,aircraft:'ATR 72-600',msn:[],detail:'Three 2015/2016-vintage aircraft acquired in 2025 with Braathens leases already attached.',source:'https://abelo.aero/wp-content/uploads/2025/06/Abelo-to-acquire-Three-ATR-72-600-Aircraft-on-lease-to-Braathens.pdf'},
    {operator:'SATENA',country:'Colombia',city:'Bogotá',region:'Americas',lat:4.71,lng:-74.07,count:2,aircraft:'ATR 42-600 / ATR 72-600',msn:['1619','1725'],registration:['HK-5485'],detail:'ATR 42-600 delivered December 2025; ATR 72-600 followed in 2026. SATENA has also described a further aircraft expected later in 2026.',source:'https://abelo.aero/our-news/'},
    {operator:'Ethiopian Airlines / Air Congo',country:'DR Congo',city:'Kinshasa',region:'Africa',lat:-4.44,lng:15.27,count:2,aircraft:'ATR 72-600',msn:[],detail:'Two new ATR 72-600s leased to Ethiopian Airlines Group for Air Congo operations in 2026.',source:'https://aviationweek.com/air-transport/airlines-lessors/abelo-leases-atr-72-600s-ethiopian-airlines-air-congo'},
    {operator:'Aerlink / Air Navigator Group',country:'Australia',city:'Perth',region:'Oceania',lat:-31.95,lng:115.86,count:1,aircraft:'ATR 72-500',msn:['762'],registration:['VH-FVX'],detail:'Transitioned from Blue Islands and delivered to Aerlink in 2026 after repossession, inspection, maintenance and reconfiguration.',source:'https://abelo.aero/wp-content/uploads/2026/02/Abelo-Delivers-ATR72-500-MSN-762-to-Air-Navigator-Group.pdf'},
    {operator:'Air Astra',country:'Bangladesh',city:'Dhaka',region:'Asia',lat:23.81,lng:90.41,count:3,aircraft:'ATR 72-600',msn:['1822'],detail:'Three brand-new ATR 72-600 aircraft delivered in 2026. One publicly reported MSN is included here.',source:'https://abelo.aero/our-news/'},
    {operator:'Emerald Airlines',country:'Ireland',city:'Dublin',region:'Europe',lat:53.35,lng:-6.26,count:1,aircraft:'Aergo six-aircraft portfolio',msn:[],detail:'One of the operators in Abelo’s 2026 acquisition of six turboprops from the Aergo-managed portfolio; exact aircraft/type allocation is not stated in the transaction release.',source:'https://www.aergocapital.com/aergo-capital-announces-sale-of-six-turboprops-to-abelo-aviation/'},
    {operator:'Binter Canarias',country:'Spain',city:'Las Palmas',region:'Europe',lat:28.12,lng:-15.44,count:1,aircraft:'Aergo six-aircraft portfolio',msn:[],detail:'One of the operators in the 2026 six-turboprop portfolio acquisition; exact aircraft/type allocation is not stated in the transaction release.',source:'https://www.aergocapital.com/aergo-capital-announces-sale-of-six-turboprops-to-abelo-aviation/'},
    {operator:'National Jet Express',country:'Australia',city:'Perth',region:'Oceania',lat:-31.86,lng:115.98,count:1,aircraft:'Aergo six-aircraft portfolio',msn:[],detail:'One of the operators in the 2026 six-turboprop portfolio acquisition; exact aircraft/type allocation is not stated in the transaction release.',source:'https://www.aergocapital.com/aergo-capital-announces-sale-of-six-turboprops-to-abelo-aviation/'},
    {operator:'Citilink / Garuda Indonesia',country:'Indonesia',city:'Jakarta',region:'Asia',lat:-6.21,lng:106.85,count:2,aircraft:'Aergo six-aircraft portfolio',msn:[],detail:'Abelo’s uploaded release names Citilink (two aircraft); Aergo’s public sale announcement names Garuda Indonesia. Shown together here rather than pretending the source wording is identical.',source:'https://www.aergocapital.com/aergo-capital-announces-sale-of-six-turboprops-to-abelo-aviation/'},
    {operator:'Philippine Airlines',country:'Philippines',city:'Manila',region:'Asia',lat:14.60,lng:120.98,count:1,aircraft:'Aergo six-aircraft portfolio',msn:[],detail:'One of the operators in the 2026 six-turboprop portfolio acquisition; exact aircraft/type allocation is not stated in the transaction release.',source:'https://www.aergocapital.com/aergo-capital-announces-sale-of-six-turboprops-to-abelo-aviation/'}
  ];

  let portfolioMap = null;
  let portfolioLayer = null;

  function portfolioFiltered() {
    const region = $('portfolioRegion') ? $('portfolioRegion').value : 'all';
    const evidence = $('portfolioEvidence') ? $('portfolioEvidence').value : 'all';
    return portfolioRecords.filter(function(r){
      const regionOk = region === 'all' || r.region === region;
      const hasMsn = r.msn && r.msn.length > 0;
      const evidenceOk = evidence === 'all' || (evidence === 'msn' ? hasMsn : !hasMsn);
      return regionOk && evidenceOk;
    });
  }

  function portfolioEvidenceLabel(r) {
    if (!r.msn || !r.msn.length) return 'TRANSACTION VERIFIED';
    if (r.msn.length >= r.count) return 'AIRFRAME VERIFIED';
    return 'PARTIAL MSN MATCH';
  }

  function renderPortfolioList() {
    const list = $('portfolioList');
    if (!list) return;
    const rows = portfolioFiltered();
    const total = rows.reduce(function(sum,r){ return sum + r.count; }, 0);
    const msnCount = rows.reduce(function(sum,r){ return sum + (r.msn ? r.msn.length : 0); }, 0);
    setOut('portfolioMapped', String(total));
    setOut('portfolioOperators', String(rows.length));
    setOut('portfolioMsnCount', String(msnCount));

    list.innerHTML = rows.map(function(r){
      const ids = [];
      if (r.msn && r.msn.length) ids.push('MSN ' + r.msn.join(', '));
      if (r.registration && r.registration.length) ids.push('Reg ' + r.registration.join(', '));
      return '<article class="portfolio-card">' +
        '<div class="portfolio-card-top"><span class="portfolio-evidence">' + portfolioEvidenceLabel(r) + '</span><strong>' + r.count + ' aircraft</strong></div>' +
        '<h3>' + r.operator + '</h3>' +
        '<p class="portfolio-place">' + r.city + ', ' + r.country + ' · ' + r.aircraft + '</p>' +
        (ids.length ? '<p class="portfolio-ids">' + ids.join(' · ') + '</p>' : '<p class="portfolio-ids muted">MSN not disclosed in the cited transaction source</p>') +
        '<p>' + r.detail + '</p>' +
        '<p><a href="' + r.source + '" target="_blank" rel="noopener">Open source ↗</a></p>' +
      '</article>';
    }).join('');
  }

  function initPortfolioMap() {
    renderPortfolioList();
    const mapEl = $('abeloFleetMap');
    if (!mapEl || typeof L === 'undefined') return;

    if (!portfolioMap) {
      portfolioMap = L.map(mapEl, {scrollWheelZoom:false, worldCopyJump:true}).setView([20,15], 2);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(portfolioMap);
      portfolioLayer = L.layerGroup().addTo(portfolioMap);
    }

    portfolioLayer.clearLayers();
    const rows = portfolioFiltered();
    const bounds = [];
    rows.forEach(function(r){
      const marker = L.circleMarker([r.lat,r.lng], {
        radius: 6 + Math.min(r.count,4) * 2,
        weight: 2,
        fillOpacity: 0.72
      });
      const msnText = r.msn && r.msn.length ? '<br><strong>MSN:</strong> ' + r.msn.join(', ') : '<br><strong>MSN:</strong> not public in this source';
      marker.bindPopup('<strong>' + r.operator + '</strong><br>' + r.count + ' × ' + r.aircraft + '<br>' + r.city + ', ' + r.country + msnText + '<br><a href="' + r.source + '" target="_blank" rel="noopener">Source ↗</a>');
      marker.addTo(portfolioLayer);
      bounds.push([r.lat,r.lng]);
    });
    if (bounds.length > 1) portfolioMap.fitBounds(bounds, {padding:[28,28], maxZoom:4});
    else if (bounds.length === 1) portfolioMap.setView(bounds[0], 5);
    setTimeout(function(){ portfolioMap.invalidateSize(); }, 50);
  }

  $('portfolioRegion')?.addEventListener('change', initPortfolioMap);
  $('portfolioEvidence')?.addEventListener('change', initPortfolioMap);
  renderPortfolioList();

  updateAcquisition();updateSingle();updateRelet();
  setInterval(updateAcquisition, 60000);
})();
