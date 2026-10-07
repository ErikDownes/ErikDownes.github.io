---
layout: doc
permalink: /sql-bank-reconciliation.html
handle: SQL Bank Reconciliation Lab
title: SQL Bank Reconciliation Lab
description: A Microsoft SQL practice project for finance reconciliation and data skills.
eyebrow: FINANCE DATA PRACTICE · MICROSOFT SQL · RECONCILIATION
public_mode: true
---

# SQL Bank Reconciliation Lab

## Key Line

Build a small finance database and use **Microsoft SQL** to turn raw bank and ledger records into a **reconciliation report with matched items, exceptions and possible matches**.

This is deliberately a **working project**, not a finished portfolio claim. The aim is for Erik to be able to explain the data model, write the queries himself and show how SQL supports **bank reconciliation, cash application and collections**.

## Business Scenario

A company receives bank transactions every day. Its accounting system also contains ledger entries and customer invoices.

The task is to determine:

- which bank transactions match ledger entries exactly;
- which items remain unmatched;
- which unmatched items are plausible candidates rather than definite matches;
- which customer invoices can be treated as paid;
- which invoices remain outstanding and may move into collections.

The core principle is the same as any reconciliation:

**two sources → matching rules → exceptions → investigation → controlled result**

## Data Model

Use four tables:

- **bank_transactions** — the bank statement feed;
- **ledger_entries** — entries recorded in the accounting system;
- **customers** — customer master data;
- **invoices** — invoices raised and their payment status.

Start with exact matches using **amount + reference**, then extend the logic to allow a small date window.

Do not force uncertain rows to match. A good reconciliation should distinguish **matched**, **unmatched** and **needs review**.

## Build Stages

### Stage 1 — Create and inspect

Run the starter script, inspect each table and make sure you understand every field.

### Stage 2 — Exact reconciliation

Write a query that joins bank transactions to ledger entries where:

- the amount is equal; and
- the payment reference is equal.

Return the bank ID, ledger ID, amount, reference and a status of **MATCHED**.

### Stage 3 — Exception report

Return every bank transaction that did not find an exact ledger match.

Classify it as:

- **UNMATCHED BANK ITEM**
- **POSSIBLE MATCH**
- **DUPLICATE / REVIEW**

Think about why an automated system should not simply choose the first similar row.

### Stage 4 — Cash application

Link incoming customer payments to invoices.

Show:

- customer;
- invoice number;
- invoice amount;
- payment amount;
- remaining balance;
- payment status.

### Stage 5 — Collections view

Create a query for unpaid invoices ordered by oldest due date first.

Add an ageing measure using `DATEDIFF`.

### Stage 6 — Reconciliation summary

Produce a one-row summary containing:

- total bank transactions;
- exact matches;
- unmatched transactions;
- total matched value;
- total unmatched value;
- match rate.

The final metric should be useful to a business user, not merely technically correct.

## Questions Erik Should Be Able to Answer

**Why SQL?**  
Because reconciliation data is naturally tabular and relational. SQL is well suited to joining records, filtering exceptions, aggregating results and creating repeatable controls.

**Why not match on amount alone?**  
Because two unrelated transactions can have the same value. A stronger rule combines independent fields such as amount, reference and date.

**What is the danger of aggressive automation?**  
A false positive can be worse than an unresolved exception. Good automation increases the match rate while preserving an audit trail and sending uncertain items for review.

**Why is this useful interview evidence?**  
It demonstrates structured-data thinking, reconciliation logic, exception handling and the ability to learn technical tools around a finance process.

## Starter Files

[Download / open the SQL starter script →]({{ '/sql-bank-reconciliation-starter.sql' | relative_url }})

When the first six stages work, the next version should add deliberately messy remittance references and a simple dashboard or Excel export.
