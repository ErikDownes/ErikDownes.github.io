---
layout: doc
permalink: /cashbook-lockbox.html
handle: Lockbox
title: Lockbox
public_mode: true
cashbook_learning: true
eyebrow: CASHBOOK LEARNING · BASICS
description: The basic idea of a bank lockbox and how it connects to Cashbook and TIMS.
---

<div class="cash-learn-lead">
  <div class="cash-key">A lockbox is a bank service that receives customer payments for a company and sends the payment information on electronically.</div>
</div>

## What is a lockbox?

A customer sends a cheque or payment to an address controlled by the bank rather than directly to the company.

The bank processes the payment, deposits the money and sends the company information about who paid, how much they paid and what the payment relates to.

## Why use one?

It saves the company from manually receiving, opening and processing large volumes of customer cheques.

It also means payment information can reach the finance system faster and in a more structured form.

## Where does Cashbook fit?

<div class="cash-flow">
  <div class="node"><strong>Customer</strong>sends payment</div>
  <div class="arrow">→</div>
  <div class="node"><strong>Bank Lockbox</strong>processes it</div>
  <div class="arrow">→</div>
  <div class="node"><strong>Cashbook</strong>tries to match it</div>
  <div class="arrow">→</div>
  <div class="node"><strong>TIMS</strong>is updated</div>
</div>

Cashbook takes the bank information and tries to work out which customer and invoice the payment belongs to.

## Basic terms

<div class="cash-mini">
  <details><summary><strong>What is remittance information?</strong></summary><p>Information explaining what the payment is for, such as an invoice number or customer reference.</p></details>
  <details><summary><strong>What is OCR?</strong></summary><p>Technology that reads text from a scanned cheque or document.</p></details>
  <details><summary><strong>What is an exception?</strong></summary><p>A payment the system cannot match confidently, so a person needs to review it.</p></details>
</div>

## Check yourself

<div class="cash-mini">
  <details><summary><strong>Who actually receives the customer's payment in a lockbox arrangement?</strong></summary><p>The bank.</p></details>
  <details><summary><strong>What is Cashbook trying to work out?</strong></summary><p>Which customer and invoice the payment belongs to.</p></details>
  <details><summary><strong>Why might a payment become an exception?</strong></summary><p>The reference may be missing, unclear or inconsistent with the invoice data.</p></details>
</div>

<div class="cash-next">
  <a href="{{ '/cashbook-tims.html' | relative_url }}">TIMS basics ←</a>
  <a href="{{ '/cashbook-reconciliation-automation.html' | relative_url }}">Reconciliation automation →</a>
</div>

<p class="cash-source">Public reference: <a href="https://www.cashbook.com/cash-application-software/lockbox-automation/ocr-remittance/" target="_blank" rel="noopener">Cashbook — Lockbox OCR</a></p>
