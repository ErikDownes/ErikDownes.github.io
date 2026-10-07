---
layout: doc
permalink: /cashbook-tims.html
handle: TIMS & Data Flow
title: TIMS & Data Flow
public_mode: true
cashbook_learning: true
eyebrow: CASHBOOK LEARNING · BASICS
description: The basic relationship between TIMS, Cashbook and the bank.
---

<div class="cash-learn-lead">
  <div class="cash-key">TIMS is the customer's ERP system. Cashbook works with information from TIMS and the bank.</div>
</div>

## What is an ERP?

An **ERP** is the main business system used to store and manage company information such as customers, invoices, payments and accounting records.

## What is TIMS?

TIMS is an ERP used by some Cashbook customers.

For this role, the important idea is simple: **TIMS holds the customer's business and accounting data.**

## What is Cashbook?

Cashbook is specialist finance software that helps automate work such as cash application and bank reconciliation.

It does not replace the ERP. It works with it.

## How do the systems connect?

<div class="cash-flow">
  <div class="node"><strong>TIMS</strong>customers · invoices</div>
  <div class="arrow">→</div>
  <div class="node"><strong>Cashbook</strong>match · reconcile</div>
  <div class="arrow">←</div>
  <div class="node"><strong>Bank</strong>payments · statements</div>
</div>

Cashbook compares information from the ERP with information from the bank, then sends approved results back to the ERP.

## Check yourself

<div class="cash-mini">
  <details><summary><strong>Where would an open customer invoice normally live?</strong></summary><p>In the ERP, such as TIMS.</p></details>
  <details><summary><strong>Where does information about money arriving come from?</strong></summary><p>The bank.</p></details>
  <details><summary><strong>What is Cashbook doing between them?</strong></summary><p>Matching, reconciling and automating the finance work.</p></details>
</div>

<div class="cash-next">
  <a href="{{ '/cashbook-implementation.html' | relative_url }}">Implementation basics →</a>
  <a href="{{ '/cashbook-lockbox.html' | relative_url }}">Lockbox basics →</a>
</div>

<p class="cash-source">Public reference: <a href="https://www.cashbook.com/erps/tims-erp-software/" target="_blank" rel="noopener">Cashbook — TIMS ERP integration</a></p>
