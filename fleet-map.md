---
layout: doc
handle: Turboprop Fleet Intelligence
title: Turboprop Fleet Intelligence
eyebrow: PUBLIC DATA · AIRFRAME RECONCILIATION · INTERACTIVE DASHBOARD
permalink: /fleet-map.html
---

## Live dashboard | Explore the reconstructed turboprop portfolio

ABEL0_MAP_APP

## Purpose | Turn scattered public records into usable fleet intelligence

This project reconstructs an Abelo / Elix turboprop portfolio from public aviation records. The objective is not to reproduce a proprietary fleet database. It is to demonstrate a repeatable asset-management workflow: identify aircraft, reconcile conflicting records, preserve source evidence and turn the cleaned data into an interactive view.

## Sources | Build from evidence, not a single scraped list

The research combines **Abelo transaction announcements**, **aircraft-history records including Planespotters**, and other public aviation sources. Manufacturer serial number (MSN) and registration history are used wherever possible because airline, lessor and registration names can change over an aircraft's life.

The original source is retained beside each working record so that a claim can be checked again rather than being detached from its evidence.

## Method | Reconcile at airframe level

The workflow is:

**transaction or aircraft record → MSN / registration → aircraft type → operator / lessee → ownership or lease lineage → verification status**

Records are not forced to agree. Where a public announcement establishes a transaction but the individual airframe has not yet been identified, the record remains flagged for reconciliation. Historical Elix aircraft are treated as lineage evidence, not automatically as aircraft still in the current Abelo portfolio.

## Build | Data to dashboard

The working data is structured as one aircraft-level record per row, with fields for aircraft family, model, MSN, registration, lessee, country, evidence level, verification status and source URLs. The dashboard then groups those records by aircraft type, customer and geography for filtering and visual inspection.

The project is being developed so the same cleaned table can be queried with **Pandas / SQL** rather than maintaining separate manual summaries.

## Validation | What the dashboard does and does not claim

Public fleet numbers refer to different dates and definitions: **owned**, **managed**, **on lease**, **historic**, and **on order** are not interchangeable. A transaction announcement can also describe an aircraft already present in another public fleet count.

For that reason, headline totals are treated as dated checkpoints. Individual aircraft are only promoted to the verified layer when their identity can be supported by an MSN, registration lineage or sufficiently specific transaction evidence.

## Why it matters | Asset-management relevance

The exercise mirrors a real reporting problem: several sources can describe the same physical asset differently. Useful fleet intelligence therefore depends on **identity resolution, data validation, source traceability and clear treatment of uncertainty**, not merely counting rows.
