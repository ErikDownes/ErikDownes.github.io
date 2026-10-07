---
layout: doc
permalink: /cashbook-lockbox.html
handle: Lockbox
title: Lockbox Development & Application
public_mode: true
cashbook_learning: true
eyebrow: CASHBOOK LEARNING · RESPONSIBILITY 3
description: How US bank lockboxes, remittance data, OCR, matching rules and TIMS posting fit together.
---

<div class="cash-learn-lead">
  <div class="cash-key">A lockbox is a banking process for receiving customer cheques. The software job is to turn the bank's deposit and remittance information into correctly applied customer cash.</div>
</div>

## The real-world flow

<div class="cash-pipeline">
  <div>Customer sends cheque</div><div>Bank lockbox receives it</div><div>Bank deposits funds</div><div>Data/images arrive</div><div>Cashbook matches</div><div>Post to TIMS</div>
</div>

In a US lockbox arrangement, customers send cheques to a bank-controlled address. The bank deposits the cheques and provides the organisation with electronic lockbox data and often cheque/remittance images. Cashbook can import that material, identify the customer and invoices, and automate much of the application work.

## What “lockbox development” can mean

For an implementation role, think **configuration, data mapping, file handling, matching logic, testing and exception handling** rather than “invent a banking product from scratch”.

<div class="cash-grid">
  <div class="cash-card"><h3>File format</h3><p>Understand the bank's record layout and control totals. Examples can include lockbox formats and BAI2-related data.</p></div>
  <div class="cash-card"><h3>Field mapping</h3><p>Map bank fields such as amount, cheque number, customer reference or invoice number into the fields Cashbook expects.</p></div>
  <div class="cash-card"><h3>OCR / digitisation</h3><p>Read invoice numbers or remittance details from cheque/remittance images where structured data is incomplete.</p></div>
  <div class="cash-card"><h3>Matching rules</h3><p>Use customer number, invoice number, amount, purchase-order reference and other evidence to identify the correct receivable.</p></div>
  <div class="cash-card"><h3>Exceptions</h3><p>Send uncertain matches to a person rather than forcing a risky automatic posting.</p></div>
  <div class="cash-card"><h3>Posting</h3><p>Once approved, update the ERP so the customer's open invoices and receipt records are correct.</p></div>
</div>

## Terms worth recognising

<table class="cash-terms">
<thead><tr><th>Term</th><th>Meaning</th></tr></thead>
<tbody>
<tr><td><strong>Remittance</strong></td><td>Information explaining what a payment is for — often invoice numbers and amounts.</td></tr>
<tr><td><strong>OCR</strong></td><td>Optical Character Recognition: extracting machine-readable text from images/documents.</td></tr>
<tr><td><strong>BAI2</strong></td><td>A structured bank reporting format widely used in North America.</td></tr>
<tr><td><strong>MICR</strong></td><td>Machine-readable characters printed on cheques, useful for identifying bank/routing/account information.</td></tr>
<tr><td><strong>Control total</strong></td><td>An independent total used to prove a file or batch is complete and balanced.</td></tr>
</tbody>
</table>

## Mini matching case

<div class="cash-mini" id="lockboxMatch">
  <p><strong>Lockbox item:</strong> €1,250 · reference “INV1042” · customer ACME</p>
  <div class="cash-choice">
    <button data-match="no">Invoice 1041 · ACME · €1,250</button>
    <button data-match="yes">Invoice 1042 · ACME · €1,250</button>
    <button data-match="no">Invoice 1042 · BETA · €1,250</button>
  </div>
  <p class="cash-feedback" aria-live="polite"></p>
</div>

<script>
(function(){
 const box=document.getElementById('lockboxMatch'); if(!box) return;
 const out=box.querySelector('.cash-feedback');
 box.querySelectorAll('button').forEach(b=>b.addEventListener('click',()=>{
   out.textContent=b.dataset.match==='yes'
    ? 'Strong match: invoice number, customer and amount all agree. In a real system, rules and tolerances decide whether this can auto-match.'
    : 'That leaves conflicting evidence. It should not be auto-posted just because the amount matches.';
 }));
})();
</script>

## Why TIMS matters here

The customer and invoice records needed to validate the lockbox payment come from the ERP. Cashbook's public TIMS integration material specifically describes importing TIMS customer/AR data, importing lockbox and bank information, applying matching algorithms, and posting back through TIMS interfaces.

<div class="cash-next">
  <a href="{{ '/cashbook-tims.html' | relative_url }}">Revisit TIMS & data flow ←</a>
  <a href="{{ '/cashbook-reconciliation-automation.html' | relative_url }}">How matching rules raise automation →</a>
</div>

<p class="cash-source">Public references: <a href="https://www.cashbook.com/cash-application-software/lockbox-automation/ocr-remittance/" target="_blank" rel="noopener">Cashbook — Lockbox OCR</a> · <a href="https://www.cashbook.com/erps/tims-erp-software/" target="_blank" rel="noopener">Cashbook — TIMS integration</a></p>
