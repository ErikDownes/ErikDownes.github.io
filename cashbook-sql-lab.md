---
layout: doc
permalink: /cashbook-sql-lab.html
handle: SQL Lab
title: Microsoft SQL Foundations for the Role
public_mode: true
cashbook_learning: true
eyebrow: CASHBOOK LEARNING · HANDS-ON DATABASE LAB
description: A browser-based SQL practice lab using finance data similar to customers, invoices, payments and bank transactions.
---

<div class="cash-learn-lead">
  <div class="cash-key">You do not need to be a database administrator. You do need to be comfortable reading tables, filtering records, joining related data, checking totals and finding exceptions.</div>
  The lab below uses an in-browser SQL engine and a small practice dataset. The core SELECT / WHERE / JOIN / GROUP BY ideas transfer directly to Microsoft SQL Server, although production syntax and tooling can differ.
</div>

## The practice database

<div class="cash-grid">
  <div class="cash-card"><h3>customers</h3><p>customer_id · customer_name · payment_terms</p></div>
  <div class="cash-card"><h3>invoices</h3><p>invoice_id · customer_id · amount_due · status</p></div>
  <div class="cash-card"><h3>payments</h3><p>payment_id · customer_id · amount · reference</p></div>
  <div class="cash-card"><h3>bank_transactions</h3><p>bank_id · amount · reference · matched</p></div>
</div>

## Run SQL

<div class="cash-mini cash-lab" id="sqlLab">
  <label for="sqlPreset"><strong>Choose a starting challenge</strong></label><br>
  <select id="sqlPreset">
    <option value="SELECT * FROM invoices;">1 — Show all invoices</option>
    <option value="SELECT invoice_id, amount_due FROM invoices WHERE status = 'OPEN';">2 — Find open invoices</option>
    <option value="SELECT c.customer_name, i.invoice_id, i.amount_due FROM customers c JOIN invoices i ON c.customer_id = i.customer_id WHERE i.status = 'OPEN';">3 — Join customers to open invoices</option>
    <option value="SELECT * FROM bank_transactions WHERE matched = 0;">4 — Find unmatched bank items</option>
    <option value="SELECT c.customer_name, SUM(i.amount_due) AS outstanding FROM customers c JOIN invoices i ON c.customer_id = i.customer_id WHERE i.status = 'OPEN' GROUP BY c.customer_name;">5 — Total outstanding by customer</option>
  </select>
  <p><textarea id="sqlQuery" spellcheck="false">SELECT * FROM invoices;</textarea></p>
  <button class="cash-btn" id="runSql" type="button">Run query</button>
  <span id="sqlStatus" class="cash-feedback" aria-live="polite"></span>
  <div class="result" id="sqlResult"></div>
</div>

<script src="https://cdn.jsdelivr.net/npm/alasql@latest/dist/alasql.min.js"></script>
<script>
(function(){
 const preset=document.getElementById('sqlPreset');
 const query=document.getElementById('sqlQuery');
 const run=document.getElementById('runSql');
 const out=document.getElementById('sqlResult');
 const status=document.getElementById('sqlStatus');
 if(!preset||!query||!run) return;

 preset.addEventListener('change',()=>{query.value=preset.value;});
 function render(rows){
   if(!Array.isArray(rows)){out.innerHTML='<p>'+String(rows)+'</p>';return;}
   if(rows.length===0){out.innerHTML='<p>No rows returned.</p>';return;}
   const cols=Object.keys(rows[0]);
   let html='<table><thead><tr>'+cols.map(c=>'<th>'+c+'</th>').join('')+'</tr></thead><tbody>';
   html+=rows.map(r=>'<tr>'+cols.map(c=>'<td>'+String(r[c]??'')+'</td>').join('')+'</tr>').join('');
   html+='</tbody></table>'; out.innerHTML=html;
 }
 function setup(){
   if(typeof alasql==='undefined') throw new Error('SQL engine did not load.');
   ['customers','invoices','payments','bank_transactions'].forEach(t=>{try{alasql('DROP TABLE '+t);}catch(e){}});
   alasql('CREATE TABLE customers (customer_id STRING, customer_name STRING, payment_terms INT)');
   alasql('CREATE TABLE invoices (invoice_id STRING, customer_id STRING, amount_due NUMBER, status STRING)');
   alasql('CREATE TABLE payments (payment_id STRING, customer_id STRING, amount NUMBER, reference STRING)');
   alasql('CREATE TABLE bank_transactions (bank_id STRING, amount NUMBER, reference STRING, matched INT)');
   alasql("INSERT INTO customers VALUES ('C001','ACME Manufacturing',30),('C002','Beta Industrial',45),('C003','Northstar Supply',30)");
   alasql("INSERT INTO invoices VALUES ('INV1041','C001',800,'PAID'),('INV1042','C001',1250,'OPEN'),('INV2050','C002',2400,'OPEN'),('INV3055','C003',600,'OPEN')");
   alasql("INSERT INTO payments VALUES ('P900','C001',1250,'INV1042'),('P901','C002',2400,'INV2050'),('P902','C003',550,'INV3055')");
   alasql("INSERT INTO bank_transactions VALUES ('B771',1250,'INV1042',1),('B772',2400,'INV2050',1),('B773',50,'BANK FEE',0),('B774',550,'NORTHSTAR',0)");
 }
 try{setup();status.textContent='Practice data ready.';}catch(e){status.textContent='The browser SQL engine could not load. The examples are still valid to copy into a local SQL environment.';}
 run.addEventListener('click',()=>{
   try{
     const result=alasql(query.value);
     render(result);
     status.textContent='Query ran successfully.';
   }catch(e){
     status.textContent='SQL error: '+e.message;
     out.innerHTML='';
   }
 });
})();
</script>

## Five things to learn from this lab

<div class="cash-grid">
  <div class="cash-card"><h3>SELECT</h3><p>Choose the rows and columns you need.</p></div>
  <div class="cash-card"><h3>WHERE</h3><p>Filter to the exceptions or records relevant to the problem.</p></div>
  <div class="cash-card"><h3>JOIN</h3><p>Connect related tables through a shared key such as customer_id.</p></div>
  <div class="cash-card"><h3>GROUP BY</h3><p>Summarise data by customer, bank account, date or exception type.</p></div>
  <div class="cash-card"><h3>Reconcile</h3><p>Use queries to prove counts, totals and relationships — not just to “get an answer”.</p></div>
</div>

## Next database exercises

Try changing the sample queries rather than only pressing Run:

- Find invoices over 1,000.
- Find the payment for customer C003.
- Join payments to customers.
- Count unmatched bank transactions.
- Sum the amount of unmatched bank transactions.

The important habit is: **inspect the structure, query a small slice, verify the result, then expand.**

<div class="cash-next">
  <a href="{{ '/cashbook-tims.html' | relative_url }}">Why the database sits between TIMS and Cashbook ←</a>
  <a href="{{ '/cashbook-reconciliation-automation.html' | relative_url }}">Use data to improve automation →</a>
</div>

<p class="cash-source">Cashbook's public implementation requirements for on-premise/private-cloud installations specify Microsoft SQL Server 2022 Standard. The exact database access available in this placement may be controlled and role-dependent.</p>
