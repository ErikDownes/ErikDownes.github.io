---
layout: doc
permalink: /cashbook-sql-lab.html
handle: SQL Lab
title: SQL Basics
public_mode: true
cashbook_learning: true
eyebrow: CASHBOOK LEARNING · BASICS
description: The basic SQL ideas useful for understanding finance data.
---

<div class="cash-learn-lead">
  <div class="cash-key">SQL is a language used to ask questions of a database.</div>
</div>

## What is a database?

A database stores structured information in tables.

For this kind of work, tables might contain:

- customers
- invoices
- payments
- bank transactions

## What is SQL?

SQL lets you read and analyse those tables.

You do not need to be a database administrator to understand the basic ideas.

## The four commands to recognise

<div class="cash-mini">
  <details><summary><strong>SELECT</strong></summary><p>Choose the data you want to see.</p></details>
  <details><summary><strong>WHERE</strong></summary><p>Filter the data, for example only open invoices.</p></details>
  <details><summary><strong>JOIN</strong></summary><p>Connect related tables, such as invoices to customers.</p></details>
  <details><summary><strong>GROUP BY</strong></summary><p>Summarise records into groups, such as total outstanding by customer.</p></details>
</div>

## One simple example

<pre><code>SELECT invoice_id, amount_due
FROM invoices
WHERE status = 'OPEN';</code></pre>

This simply means: **show me the ID and amount of every open invoice.**

## Why might this matter in the role?

SQL can help someone inspect records, check totals, find exceptions and understand what happened to a payment or invoice.

## Check yourself

<div class="cash-mini">
  <details><summary><strong>What does WHERE do?</strong></summary><p>It filters the rows.</p></details>
  <details><summary><strong>What does JOIN do?</strong></summary><p>It connects related tables.</p></details>
  <details><summary><strong>Why might you query unmatched bank transactions?</strong></summary><p>To find the exceptions that still need investigation.</p></details>
</div>

<div class="cash-next">
  <a href="{{ '/cashbook-tims.html' | relative_url }}">TIMS basics ←</a>
  <a href="{{ '/cashbook-reconciliation-automation.html' | relative_url }}">Automation basics →</a>
</div>

<p class="cash-source">The exact database access available in the placement may be controlled and role-dependent.</p>
