---
layout: doc
permalink: /vlookup-practice.html
handle: VLOOKUP Practice
title: "Projects | VLOOKUP Practice"
eyebrow: "EXCEL · LOOKUPS · COMMUNICATION"
study_mode: true
---

[← Projects]({{ '/projects.html' | relative_url }})

## VLOOKUP in 60 seconds

A lookup formula answers a simple business question:

**“I have an ID. Find that ID in a reference table and return the matching information.”**

The pattern is:

```excel
=VLOOKUP(lookup_value, table_array, column_number, FALSE)
```

Using the same structure as the spreadsheet practice workbook:

```excel
=VLOOKUP(B10,$G$10:$J$17,2,FALSE)
```

- **B10** — the Product ID we want to find.
- **$G$10:$J$17** — the lookup table. The `$` signs lock it so the table does not move when the formula is copied.
- **2** — return the value from the second column of the lookup table.
- **FALSE** — require an exact match.

The important distinction is **relative versus absolute references**. If this formula is copied down one row, **B10 becomes B11**, but **$G$10:$J$17 stays fixed**.

## Mini practice — type the formula yourself

Do not choose an answer from a multiple-choice list. Type the spreadsheet formula you would actually enter in the cell.

<div id="vlab" style="max-width:900px;margin:1rem 0 1.5rem;">
  <style>
    #vlab .vlab-grid{display:grid;grid-template-columns:minmax(250px,1fr) minmax(320px,1.25fr);gap:1rem;align-items:start}
    #vlab .vlab-card{border:1px solid rgba(127,127,127,.28);border-radius:12px;padding:1rem;background:rgba(127,127,127,.035)}
    #vlab table{border-collapse:collapse;width:100%;font-size:.95rem}
    #vlab th,#vlab td{border:1px solid rgba(127,127,127,.3);padding:.48rem .55rem;text-align:left}
    #vlab th{background:rgba(127,127,127,.10);font-weight:700}
    #vlab .cell-ref{font-size:.78rem;opacity:.65;display:block;margin-bottom:.12rem}
    #vlab input,#vlab textarea{width:100%;box-sizing:border-box;border:1px solid rgba(127,127,127,.42);border-radius:9px;padding:.72rem;font:inherit;background:var(--body-background-color,#fff);color:inherit}
    #vlab input{font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace}
    #vlab textarea{min-height:88px;resize:vertical}
    #vlab button{border:1px solid rgba(127,127,127,.38);border-radius:9px;padding:.65rem .85rem;font:inherit;font-weight:650;cursor:pointer;background:rgba(127,127,127,.08);color:inherit}
    #vlab button:hover{background:rgba(127,127,127,.15)}
    #vlab .actions{display:flex;gap:.55rem;flex-wrap:wrap;margin-top:.75rem}
    #vlab .status{margin-top:.75rem;padding:.7rem .8rem;border-radius:9px;background:rgba(127,127,127,.08);min-height:1.45rem}
    #vlab .ok{background:rgba(34,197,94,.13)}
    #vlab .warn{background:rgba(245,158,11,.14)}
    #vlab .bad{background:rgba(239,68,68,.11)}
    #vlab .target{font-weight:750}
    @media (max-width:720px){#vlab .vlab-grid{grid-template-columns:1fr}}
  </style>

  <div class="vlab-grid">
    <div class="vlab-card">
      <strong>Order row</strong>
      <table style="margin-top:.65rem">
        <thead>
          <tr><th>Order ID</th><th>Product ID</th><th>Quantity</th><th id="targetHead">Product</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><span class="cell-ref">A10</span>SO-201</td>
            <td><span class="cell-ref">B10</span><strong id="questionId">P103</strong></td>
            <td><span class="cell-ref">C10</span>2</td>
            <td><span class="cell-ref">D10</span><span id="answerCell">?</span></td>
          </tr>
        </tbody>
      </table>

      <label for="formulaBox" style="display:block;margin-top:1rem;font-weight:700">Enter the formula for D10</label>
      <input id="formulaBox" type="text" spellcheck="false" autocomplete="off" placeholder="=VLOOKUP(...)">

      <div class="actions">
        <button id="checkFormula" type="button">Check formula</button>
        <button id="newQuestion" type="button">New question</button>
        <button id="showHint" type="button">Hint</button>
      </div>
      <div id="formulaStatus" class="status" aria-live="polite">Type the formula, then check it.</div>
    </div>

    <div class="vlab-card">
      <strong>Reference table — G10:J17</strong>
      <table style="margin-top:.65rem">
        <thead>
          <tr><th>Product ID</th><th>Product</th><th>Category</th><th>Unit Price</th></tr>
        </thead>
        <tbody>
          <tr><td>P101</td><td>Wireless Mouse</td><td>Accessories</td><td>€29</td></tr>
          <tr><td>P102</td><td>Keyboard</td><td>Accessories</td><td>€69</td></tr>
          <tr><td>P103</td><td>Webcam</td><td>Video</td><td>€79</td></tr>
          <tr><td>P104</td><td>Headset</td><td>Audio</td><td>€39</td></tr>
          <tr><td>P105</td><td>Monitor</td><td>Display</td><td>€215</td></tr>
          <tr><td>P106</td><td>USB-C Hub</td><td>Accessories</td><td>€44</td></tr>
          <tr><td>P107</td><td>Portable SSD</td><td>Storage</td><td>€139</td></tr>
          <tr><td>P108</td><td>Power Bank</td><td>Mobile</td><td>€52</td></tr>
        </tbody>
      </table>
      <p style="margin:.85rem 0 0;font-size:.92rem;opacity:.8">
        The lookup value is in <strong>B10</strong>. The reference table must stay fixed when the formula is copied.
      </p>
    </div>
  </div>

  <div class="vlab-card" style="margin-top:1rem">
    <strong>Communication check</strong>
    <p style="margin:.45rem 0 .7rem">After the formula works, explain it in one sentence as if you were speaking to a colleague.</p>
    <textarea id="explainBox" placeholder="This formula looks up ..."></textarea>
    <div class="actions">
      <button id="modelAnswer" type="button">Show model explanation</button>
    </div>
    <div id="explainStatus" class="status" aria-live="polite">Aim to mention the lookup value, fixed table, return column and exact match.</div>
  </div>

  <script>
  (function(){
    const root=document.getElementById('vlab');
    if(!root || root.dataset.ready==='1') return;
    root.dataset.ready='1';

    const products=[
      {id:'P101',product:'Wireless Mouse',category:'Accessories',price:'€29'},
      {id:'P102',product:'Keyboard',category:'Accessories',price:'€69'},
      {id:'P103',product:'Webcam',category:'Video',price:'€79'},
      {id:'P104',product:'Headset',category:'Audio',price:'€39'},
      {id:'P105',product:'Monitor',category:'Display',price:'€215'},
      {id:'P106',product:'USB-C Hub',category:'Accessories',price:'€44'},
      {id:'P107',product:'Portable SSD',category:'Storage',price:'€139'},
      {id:'P108',product:'Power Bank',category:'Mobile',price:'€52'}
    ];
    const targets=[
      {label:'Product',key:'product',col:2},
      {label:'Category',key:'category',col:3},
      {label:'Unit Price',key:'price',col:4}
    ];

    let p=products[2], t=targets[0];

    const qId=root.querySelector('#questionId');
    const targetHead=root.querySelector('#targetHead');
    const answerCell=root.querySelector('#answerCell');
    const formulaBox=root.querySelector('#formulaBox');
    const status=root.querySelector('#formulaStatus');
    const explainStatus=root.querySelector('#explainStatus');

    function cleanFormula(v){
      return (v||'').toUpperCase().replace(/\s+/g,'').replace(/;/g,',');
    }

    function expected(){
      return '=VLOOKUP(B10,$G$10:$J$17,'+t.col+',FALSE)';
    }

    function setStatus(message,kind){
      status.className='status '+(kind||'');
      status.textContent=message;
    }

    function newQuestion(){
      p=products[Math.floor(Math.random()*products.length)];
      t=targets[Math.floor(Math.random()*targets.length)];
      qId.textContent=p.id;
      targetHead.textContent=t.label;
      answerCell.textContent='?';
      formulaBox.value='';
      setStatus('New question ready. Type the formula for D10.','');
      formulaBox.focus();
    }

    root.querySelector('#checkFormula').addEventListener('click',function(){
      const f=cleanFormula(formulaBox.value);
      if(!f){
        setStatus('Enter a formula first.','bad');
        return;
      }

      const rangeFixed=/\$G\$10:\$J\$17/.test(f);
      const exactMatch=/(FALSE|0)\)$/.test(f);
      const lookupRight=/^=VLOOKUP\(B10,/.test(f);
      const colMatch=new RegExp(','+t.col+',(?:FALSE|0)\\)$').test(f);

      if(lookupRight && rangeFixed && colMatch && exactMatch){
        answerCell.textContent=p[t.key];
        setStatus('Correct. '+expected()+' returns '+p[t.key]+'. If copied down, B10 changes but the $G$10:$J$17 table stays fixed.','ok');
        return;
      }

      if(lookupRight && !rangeFixed){
        setStatus('Nearly there. Your lookup table is not locked. Use $G$10:$J$17 so it stays fixed when copied down.','warn');
        return;
      }

      if(lookupRight && rangeFixed && !colMatch){
        setStatus('The structure is right, but check the return-column number. '+t.label+' is column '+t.col+' within G:J.','warn');
        return;
      }

      if(lookupRight && rangeFixed && colMatch && !exactMatch){
        setStatus('Use FALSE (or 0) for an exact match.','warn');
        return;
      }

      setStatus('Not quite. Start with =VLOOKUP(B10, ...). Use the fixed table $G$10:$J$17 and return the '+t.label+' column.','bad');
    });

    root.querySelector('#newQuestion').addEventListener('click',newQuestion);

    root.querySelector('#showHint').addEventListener('click',function(){
      setStatus('Pattern: =VLOOKUP(B10,$G$10:$J$17,'+t.col+',FALSE). The '+t.label+' field is column '+t.col+' of the lookup table.','warn');
    });

    root.querySelector('#modelAnswer').addEventListener('click',function(){
      explainStatus.className='status ok';
      explainStatus.textContent='Model: “The formula takes the Product ID in B10, finds it in the first column of the fixed table G10:J17, returns the matching '+t.label+' from column '+t.col+', and requires an exact match.”';
    });
  })();
  </script>
</div>

## What this tests

This is intentionally small. The goal is not to memorise one answer; it is to be able to reconstruct the logic:

**find the key → lock the reference table → choose the return column → demand an exact match → explain what the formula is doing.**

That is the spreadsheet skill and the communication skill together.
