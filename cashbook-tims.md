---
layout: doc
permalink: /cashbook-tims.html
handle: TIMS & Data Flow
title: TIMS & Data Flow
public_mode: true
cashbook_learning: true
eyebrow: CASHBOOK LEARNING · FOUNDATIONS
description: A practical guide to TIMS ERP, Cashbook integration, finance data flows and the database concepts behind the role.
---

<div class="cash-learn-lead">
  <div class="cash-key">TIMS is the customer's ERP. Cashbook is the finance-automation layer that exchanges data with TIMS and the bank.</div>
  The most important distinction is that TIMS and Cashbook are not the same system. Understanding the data moving between them makes the rest of the role much easier to understand.
</div>

## Two systems, different jobs

<div class="cash-grid">
  <div class="cash-card"><h3>TIMS ERP</h3><p>The customer's core business system. It holds operational and accounting records such as customers, invoices, receipts and ledger data.</p></div>
  <div class="cash-card"><h3>Cashbook</h3><p>Specialist cash-management software. It imports ERP and banking data, applies matching and automation rules, presents exceptions, and sends approved results back to the ERP.</p></div>
  <div class="cash-card"><h3>Bank</h3><p>Provides bank statements, ACH/wire activity, lockbox files, cheque images and other transaction data.</p></div>
</div>

## The data flow

<div class="cash-flow" aria-label="TIMS and Cashbook data flow">
  <div class="node"><strong>TIMS ERP</strong>customers · invoices · GL data</div>
  <div class="arrow">→</div>
  <div class="node"><strong>Cashbook</strong>match · automate · review exceptions</div>
  <div class="arrow">←</div>
  <div class="node"><strong>Bank</strong>statements · lockbox · remittance</div>
</div>

<div class="cash-flow">
  <div class="node"><strong>Cashbook</strong>approved postings / matched receipts</div>
  <div class="arrow">→</div>
  <div class="node"><strong>TIMS ERP</strong>accounting records updated</div>
</div>

Cashbook publicly documents support for **TIMS v8**. For automated cash application it describes bringing TIMS customer and receivables data into Cashbook, combining that with bank lockbox, bank-statement and remittance data, applying matching algorithms, and then posting results back through standard TIMS interfaces.

## Database ideas to know

<table class="cash-terms">
<thead><tr><th>Idea</th><th>What it means here</th></tr></thead>
<tbody>
<tr><td><strong>Table / file</strong></td><td>A structured set of records: customers, invoices, receipts, bank transactions.</td></tr>
<tr><td><strong>Primary key</strong></td><td>A value that uniquely identifies a record, such as an invoice ID.</td></tr>
<tr><td><strong>Foreign key / reference</strong></td><td>A value that connects one record to another, such as a customer ID on an invoice.</td></tr>
<tr><td><strong>Mapping</strong></td><td>Defining which source field corresponds to which destination field.</td></tr>
<tr><td><strong>Join</strong></td><td>Combining related tables, e.g. invoice + customer.</td></tr>
<tr><td><strong>Interface</strong></td><td>The agreed mechanism by which two systems exchange data.</td></tr>
<tr><td><strong>Posting</strong></td><td>Writing an approved financial transaction back into the accounting/ERP records.</td></tr>
<tr><td><strong>Exception</strong></td><td>A record the automated rules cannot safely resolve and a person must review.</td></tr>
</tbody>
</table>

## Master data vs transaction data

<div class="cash-grid">
  <div class="cash-card"><h3>Master data</h3><p>Relatively stable reference data: customer number, customer name, currency, bank account, payment terms.</p></div>
  <div class="cash-card"><h3>Transaction data</h3><p>Events that happen: invoice 1042 for €1,250; payment P900 for €1,250; bank line B771 for €1,250.</p></div>
</div>

A large part of automation is connecting the transaction to the right master-data record and then to the right accounting record.

## Quick classification

<div class="cash-mini" id="sourceQuiz">
  <h3>Which system is the natural source?</h3>
  <p><strong>Open customer invoice</strong></p>
  <div class="cash-choice">
    <button data-answer="correct">TIMS ERP</button>
    <button data-answer="wrong">Bank</button>
    <button data-answer="wrong">Neither</button>
  </div>
  <p class="cash-feedback" aria-live="polite"></p>
</div>

<script>
(function(){
  const box=document.getElementById('sourceQuiz');
  if(!box) return;
  const out=box.querySelector('.cash-feedback');
  box.querySelectorAll('button').forEach(b=>b.addEventListener('click',()=>{
    out.textContent=b.dataset.answer==='correct'
      ? 'Correct — the invoice belongs to Accounts Receivable in the ERP. Cashbook imports it so it can match incoming cash against it.'
      : 'Not quite. The bank knows that money moved; the ERP is the natural source of the open invoice.';
  }));
})();
</script>

## What to be able to explain aloud

You should be able to explain this chain without jargon: **the ERP knows what the customer owes; the bank knows what money arrived; Cashbook brings those two worlds together, automates the obvious matches, leaves uncertain cases for review, and posts approved results back.**

<div class="cash-next">
  <a href="{{ '/cashbook-sql-lab.html' | relative_url }}">Practise the database side →</a>
  <a href="{{ '/cashbook-lockbox.html' | relative_url }}">See how lockbox data fits in →</a>
</div>

<p class="cash-source">Public references: <a href="https://www.cashbook.com/erps/tims-erp-software/" target="_blank" rel="noopener">Cashbook — TIMS ERP software integration</a> · <a href="https://www.cashbook.com/implementation/" target="_blank" rel="noopener">Cashbook — implementation process</a></p>
