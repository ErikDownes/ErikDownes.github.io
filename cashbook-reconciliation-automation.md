---
layout: doc
permalink: /cashbook-reconciliation-automation.html
handle: Automation
title: Bank Reconciliation Automation
public_mode: true
cashbook_learning: true
eyebrow: CASHBOOK LEARNING · BASICS
description: The basic idea behind automated bank reconciliation.
---

<div class="cash-learn-lead">
  <div class="cash-key">Automation means letting the system make the obvious, repeatable matches and sending uncertain cases to a person.</div>
</div>

## What is bank reconciliation automation?

Instead of a person comparing every bank transaction with the ledger manually, software tries to match them automatically.

## What is a matching rule?

A matching rule tells the system what evidence to compare.

Common examples are:

- same amount
- similar date
- same reference
- same bank account
- same transaction type

Using more than one piece of evidence usually makes a match safer.

## What is an exception?

If the system is not confident, it should stop and create an exception for a person to review.

That is safer than forcing a bad match.

## Why not automate everything?

Because a wrong automatic match can be worse than a manual exception.

The aim is **safe automation**, not simply the highest possible percentage.

## Check yourself

<div class="cash-mini">
  <details><summary><strong>Two transactions have the same amount. Is that always enough to match them?</strong></summary><p>No. The same amount can occur more than once. A reference, date or account can provide stronger evidence.</p></details>
  <details><summary><strong>What should happen if the evidence is unclear?</strong></summary><p>Create an exception for human review.</p></details>
  <details><summary><strong>What is the goal?</strong></summary><p>Automate the clear cases safely and leave uncertain cases for people.</p></details>
</div>

<div class="cash-next">
  <a href="{{ '/cashbook-finance-processes.html' | relative_url }}">Finance processes ←</a>
  <a href="{{ '/cashbook-sql-lab.html' | relative_url }}">SQL basics →</a>
</div>

<p class="cash-source">Public reference: <a href="https://www.cashbook.com/about-bank-reconciliation/" target="_blank" rel="noopener">Cashbook — Bank Reconciliation automation</a></p>
