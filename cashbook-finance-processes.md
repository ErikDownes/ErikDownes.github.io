---
layout: doc
permalink: /cashbook-finance-processes.html
handle: Finance Processes
title: Cash Application, Bank Reconciliation & Collections
public_mode: true
cashbook_learning: true
eyebrow: CASHBOOK LEARNING · RESPONSIBILITY 2
description: A worked guide to the three finance processes named in the role: cash application, bank reconciliation and collections.
---

<div class="cash-learn-lead">
  <div class="cash-key">The three processes answer three different questions: What invoice did this cash pay? Does the bank agree with our books? What money is still owed?</div>
</div>

## The three processes

<div class="cash-grid">
  <div class="cash-card"><h3>Cash Application</h3><p><strong>Payment → invoice.</strong> Match incoming money to the correct customer and open invoice, then update Accounts Receivable.</p></div>
  <div class="cash-card"><h3>Bank Reconciliation</h3><p><strong>Bank → ledger.</strong> Compare bank-statement transactions with the organisation's accounting records and explain every difference.</p></div>
  <div class="cash-card"><h3>Collections</h3><p><strong>Outstanding invoice → action.</strong> Identify overdue receivables, prioritise follow-up and record customer contact, promises and disputes.</p></div>
</div>

## One customer, three views

Assume a customer has **Invoice 1042 for €1,250**.

<div class="cash-flow">
  <div class="node"><strong>Invoice</strong>€1,250 open in AR</div>
  <div class="arrow">→</div>
  <div class="node"><strong>Payment</strong>€1,200 arrives</div>
  <div class="arrow">→</div>
  <div class="node"><strong>Difference</strong>€50 remains</div>
</div>

### Cash application view

The €1,200 receipt is identified as belonging to this customer and invoice. The system can apply €1,200, leaving €50 open or recording a deduction/dispute depending on the remittance and company rules.

### Collections view

The collector needs to know why €50 remains. Is it a short payment, approved discount, disputed item, damaged goods claim, or simple mistake? The goal is not merely to “chase money”; it is to understand and resolve the open receivable.

### Bank reconciliation view

Separately, the bank account must agree with the ledger. If the bank shows a €50 bank charge that the ledger does not yet contain, the reconciliation identifies the exception and may create or request the appropriate GL entry.

## A reconciliation example

<table class="cash-terms">
<thead><tr><th>Bank statement</th><th>Ledger</th><th>Result</th></tr></thead>
<tbody>
<tr><td>Customer receipt €1,200</td><td>Receipt €1,200</td><td>Match</td></tr>
<tr><td>Bank fee €50</td><td>No entry</td><td>Exception → investigate / post fee</td></tr>
<tr><td>Transfer €5,000</td><td>Transfer €5,000</td><td>Match</td></tr>
</tbody>
</table>

A reconciliation is complete only when the remaining difference is **zero or fully explained by valid reconciling items**.

## Collections: what “aged debt” means

<div class="cash-grid">
  <div class="cash-card"><h3>Current</h3><p>Not yet overdue.</p></div>
  <div class="cash-card"><h3>1–30 days</h3><p>Recently overdue; often routine follow-up.</p></div>
  <div class="cash-card"><h3>31–60 days</h3><p>Higher attention; check disputes and promises.</p></div>
  <div class="cash-card"><h3>61+ days</h3><p>Increasing collection risk and management attention.</p></div>
</div>

Cashbook's public Collections material describes importing customer and invoice data from the ERP, ageing invoices, recording notes and contacts, highlighting overdue accounts, and supporting dunning / follow-up activity.

## What automation is trying to remove

Automation should remove **repeatable, low-judgement work**: obvious invoice matches, known bank-reference patterns, standard ledger entries, routine prioritisation. It should not hide uncertainty. Ambiguous cases belong in an **exception queue** for review.

<div class="cash-next">
  <a href="{{ '/cashbook-reconciliation-automation.html' | relative_url }}">Build matching rules →</a>
  <a href="{{ '/cashbook-sql-lab.html' | relative_url }}">Query the sample finance data →</a>
</div>

<p class="cash-source">Public references: <a href="https://www.cashbook.com/cash-application-software/" target="_blank" rel="noopener">Cash Application</a> · <a href="https://www.cashbook.com/about-bank-reconciliation/" target="_blank" rel="noopener">Bank Reconciliation</a> · <a href="https://www.cashbook.com/credit-collections-automation/" target="_blank" rel="noopener">Collections</a></p>
