---
layout: doc
handle: Project Build
title: How I Built the Turboprop Asset Reporting Dashboard
eyebrow: PORTFOLIO · DATA ANALYSIS · WEB APPLICATION
public_mode: true
---

## Why I started

Abelo’s public figures — 61 aircraft, 26 lessees and 19 countries — made me curious. Which aircraft were they, and where were they operating? I wanted to see the fleet on a map rather than just read the headline numbers.

## Finding and combining the data

I started with OpenSky’s public aircraft data, but some fields I needed were missing. PlaneSpotters let me filter its public pages to ATR 42s, ATR 72s and Dash 8s. Those pages were useful, although they did not give me a downloadable CSV.

I captured the relevant public pages and used AI-assisted text extraction to turn them into data I could compare. Then I matched aircraft across sources using identifiers such as registration or manufacturer serial number when available. Where one source lacked a field, I checked whether the other could supply it. That is a **data merge**, with matching and checking rather than simply sticking two lists together. I left uncertain matches unresolved.

## From notebook to app

The analysis first ran in Google Colab, using Python and Pandas in a Jupyter-style notebook to filter, clean and compare records. AI tools also helped me assemble and refine parts of the code, which I checked against the data and the working app.

I then built the interactive page with HTML, CSS and JavaScript. The map and filters make the aircraft, operators and countries easier to explore.

**All the information used here is publicly available.** I have not used Abelo’s internal data or any confidential records.
