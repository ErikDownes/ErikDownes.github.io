---
layout: doc
permalink: /cashbook-implementation.html
handle: Implementation
title: Implementation Basics
public_mode: true
cashbook_learning: true
eyebrow: CASHBOOK LEARNING · BASICS
description: A simple introduction to what software implementation work means.
---

<div class="cash-learn-lead">
  <div class="cash-key">Implementation means getting the customer's systems and data working correctly with Cashbook.</div>
</div>

## What is implementation?

Implementation is the process of setting up software for a real customer.

That can include understanding their data, configuring the system, testing it and helping move it into live use.

## What might a junior person do?

A junior implementation associate might:

- keep notes and actions organised
- check sample files
- compare data
- help test
- record errors
- confirm whether a fix worked
- communicate clearly with the team

## What is testing?

Testing means checking whether the system does what it is supposed to do.

A simple pattern is:

**Expected → Actual → Compare**

## What are Development, QA and Production?

<div class="cash-mini">
  <details><summary><strong>Development</strong></summary><p>A place where software or configuration can be built and changed.</p></details>
  <details><summary><strong>QA / Test</strong></summary><p>A controlled place to check that changes work correctly.</p></details>
  <details><summary><strong>Production</strong></summary><p>The live customer environment.</p></details>
</div>

## What happens when something goes wrong?

First identify the exact problem:

- Which file?
- Which customer or account?
- Which environment?
- What should have happened?
- What actually happened?
- Is there an error message?

That gives the technical team something useful to investigate.

## Check yourself

<div class="cash-mini">
  <details><summary><strong>Why not test a random change directly in Production?</strong></summary><p>Because Production is live and may contain real financial data and processes.</p></details>
  <details><summary><strong>What is the first thing to know when testing?</strong></summary><p>What result you expect.</p></details>
  <details><summary><strong>What makes a useful error report?</strong></summary><p>Clear facts: where it happened, what was expected, what actually happened and any evidence or error message.</p></details>
</div>

<div class="cash-next">
  <a href="{{ '/cashbook-tims.html' | relative_url }}">TIMS basics ←</a>
  <a href="{{ '/cashbook-lockbox.html' | relative_url }}">Lockbox basics →</a>
</div>

<p class="cash-source">Public reference: <a href="https://www.cashbook.com/implementation/" target="_blank" rel="noopener">Cashbook — implementation process</a></p>
