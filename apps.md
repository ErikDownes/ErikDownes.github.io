---
layout: doc
handle: Apps
title: Apps
nav_order: 100
eyebrow: INTERACTIVE TOOLS
intro: Interactive apps, dashboards and visual tools for finance, aircraft leasing and interview preparation.
---

# Apps

This page is for the **interactive tools**. Academic content stays under **Modules** and **Finance**; calculators, dashboards, maps and decision-support tools live here.

## Abelo Fleet & Lease Placement Map

This proof-of-concept uses a **61-aircraft working reconstruction across 26 lessees in 19 countries**. Abelo itself says it supports **more than 60 turboprop aircraft**, but its public website does not provide a complete current aircraft-by-aircraft register. The reconstruction combines recent Abelo transactions with the inherited Elix portfolio and historical fleet evidence, and keeps unresolved aircraft visible rather than inventing precise current placements. [Abelo's fleet description](https://abelo.aero/our-business/).

ABEL0_MAP_APP

**Research challenge:** an airline can lease aircraft from several lessors, registrations change, and aircraft may sit inside Elix/Abelo SPVs. The map therefore works from the aircraft/transaction lineage rather than assuming an airline's whole fleet belongs to Abelo. It is a demonstrator for asset-management research, data reconciliation and visual communication — not a claim to reproduce Abelo's confidential live fleet system.

## Aircraft Leasing Decision Lab

[Open the Aircraft Leasing Decision Lab]({{ '/lease-dashboard.html' | relative_url }})

A browser-based asset-management model for testing aircraft leasing decisions.

It lets Erik:

- start with an aircraft at a selected age
- model lease income and residual value
- discount future cash flows
- compare lease extension with transition and re-leasing
- stress assumptions using conservative, base and upside scenarios
- explain why the result changes rather than simply quote a number

**Built with:** HTML, CSS and JavaScript.

## Finance & Mortgage Calculator

[Open the Finance & Mortgage Calculator]({{ '/mortgage-calculator.html' | relative_url }})

A financial mathematics app for exploring borrowing, repayment and amortisation visually.

It lets Erik:

- vary price, deposit, interest rate and term
- calculate monthly repayments
- generate a full amortisation schedule
- model recurring lump-sum overpayments
- inspect principal, interest and outstanding balance on the graph
- use the same financial logic as a bridge into aircraft-finance thinking

**Built with:** HTML, CSS, JavaScript and Canvas.
