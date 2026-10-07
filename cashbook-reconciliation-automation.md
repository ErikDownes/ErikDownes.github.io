---
layout: doc
permalink: /cashbook-reconciliation-automation.html
handle: Automation
title: Increasing Bank Reconciliation Automation
public_mode: true
cashbook_learning: true
eyebrow: CASHBOOK LEARNING · RESPONSIBILITY 4
description: How finance teams increase bank-reconciliation automation using matching rules, tolerances, exception handling and measured testing.
---

<div class="cash-learn-lead">
  <div class="cash-key">Higher automation comes from turning repeatable human matching decisions into controlled rules — without increasing false matches.</div>
</div>

## What an auto-match rule is

A rule compares evidence on a **bank transaction** with evidence in the **general ledger**. A safe rule might combine amount, date, reference, account, transaction type and a permitted tolerance.

<div class="cash-grid">
  <div class="cash-card"><h3>Exact amount</h3><p>Strong evidence, but not always unique.</p></div>
  <div class="cash-card"><h3>Date window</h3><p>Useful because settlement dates can differ by a day or two.</p></div>
  <div class="cash-card"><h3>Reference</h3><p>Invoice, cheque, batch, transfer or customer reference can make a match much stronger.</p></div>
  <div class="cash-card"><h3>Account / type</h3><p>Prevents identical amounts in unrelated accounts or transaction classes from matching.</p></div>
  <div class="cash-card"><h3>Tolerance</h3><p>Allows controlled small differences where finance policy permits.</p></div>
  <div class="cash-card"><h3>Exception</h3><p>If the evidence is ambiguous, stop and ask for review.</p></div>
</div>

## Try a rule

<div class="cash-mini" id="ruleLab">
  <p><strong>Bank line:</strong> €1,250 · 06 Oct · reference “INV1042”</p>
  <p><strong>Candidate A:</strong> €1,250 · 05 Oct · “INV1042” &nbsp; | &nbsp; <strong>Candidate B:</strong> €1,250 · 06 Oct · “TRANSFER”</p>
  <div class="rule-row">
    <label><input type="checkbox" value="amount" checked> same amount</label>
    <label><input type="checkbox" value="date"> date within 1 day</label>
    <label><input type="checkbox" value="reference"> same reference</label>
  </div>
  <button class="cash-btn" type="button">Evaluate rule</button>
  <p class="cash-feedback" aria-live="polite"></p>
</div>

<script>
(function(){
 const box=document.getElementById('ruleLab'); if(!box) return;
 const out=box.querySelector('.cash-feedback');
 box.querySelector('button').addEventListener('click',()=>{
   const chosen=[...box.querySelectorAll('input:checked')].map(x=>x.value);
   if(chosen.length===1 && chosen[0]==='amount'){
     out.textContent='Too weak: both candidates have €1,250, so the rule is ambiguous.';
   } else if(chosen.includes('reference')){
     out.textContent='Strong: Candidate A has the matching invoice reference. Adding the date window gives further control.';
   } else {
     out.textContent='Better, but still potentially ambiguous. Amount + date can collide; a reference or another distinguishing field makes the rule safer.';
   }
 });
})();
</script>

## The automation-rate trap

A higher percentage is not automatically better. If aggressive rules create wrong matches, the process is fast but unreliable.

<table class="cash-terms">
<thead><tr><th>Metric</th><th>What it tells you</th></tr></thead>
<tbody>
<tr><td><strong>Auto-match rate</strong></td><td>Percentage of transactions matched without manual intervention.</td></tr>
<tr><td><strong>Exception rate</strong></td><td>Percentage needing human review.</td></tr>
<tr><td><strong>False-match rate</strong></td><td>Automatic matches later found to be wrong — especially important to keep low.</td></tr>
<tr><td><strong>Processing time</strong></td><td>How long the reconciliation takes before and after automation.</td></tr>
</tbody>
</table>

## Working with a customer to improve the rate

A good conversation is evidence-led: **Which items are still manual? What pattern do they share? Is there a reliable field we are not using? Is the bank/ERP data clean enough? Can a rule be tested safely against historical data?**

A sensible cycle is:

<div class="cash-pipeline">
  <div>Measure</div><div>Group exceptions</div><div>Find pattern</div><div>Design rule</div><div>Test history</div><div>Deploy + monitor</div>
</div>

Cashbook publicly describes importing GL data from the ERP and banking data from multiple formats, then using configurable matching rules to automate reconciliation. Its public material cites automation rates up to 95%, but the implementation goal should be **the highest safe, explainable rate for that customer's data**, not a number pursued blindly.

<div class="cash-next">
  <a href="{{ '/cashbook-finance-processes.html' | relative_url }}">Finance processes ←</a>
  <a href="{{ '/cashbook-sql-lab.html' | relative_url }}">Use SQL to inspect exceptions →</a>
</div>

<p class="cash-source">Public reference: <a href="https://www.cashbook.com/about-bank-reconciliation/" target="_blank" rel="noopener">Cashbook — Bank Reconciliation automation</a></p>
