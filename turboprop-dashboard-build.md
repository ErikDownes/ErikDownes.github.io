---
layout: doc
handle: Project Build
title: How I Built the Turboprop Asset Reporting Dashboard
eyebrow: PORTFOLIO · DATA ANALYSIS · WEB APPLICATION
---
## Why I started

Abelo’s public figures — 61 aircraft, 26 lessees and 19 countries — made me curious. Which aircraft were they, and where were they operating? I wanted to see the fleet on a map rather than just read the headline numbers.

## Finding and combining the data

I started with OpenSky’s public aircraft data, but some fields I needed were missing. PlaneSpotters let me filter its public pages to ATR 42s, ATR 72s and Dash 8s. Those pages were useful, although they did not give me a downloadable CSV.

I captured the relevant public pages and used AI-assisted text extraction to turn them into data I could compare. Then I matched aircraft across sources using identifiers such as registration or manufacturer serial number when available. Where one source lacked a field, I checked whether the other could supply it. That is a **data merge**, with matching and checking rather than simply sticking two lists together. I left uncertain matches unresolved.

## From notebook to app

The analysis first ran in **Google Colab**, using **Python and Pandas** in a Jupyter-style notebook to filter, clean and compare aircraft records.

I then used **VS Code** to build the interactive web app with **HTML, CSS and JavaScript**, with **Leaflet** powering the interactive map and geographic layers.

**AI-assisted development was part of the workflow.** I used AI tools in a **vibe-coding / agentic collaboration** approach — describing what I wanted the application to do, using AI to help generate, debug and refine code, then testing the output against the source data and the working application.

For me, that is one of the strengths of modern development: I do not need to pretend that every line was written manually. The important skills are being able to **define the problem, work effectively with AI, understand and test the output, spot errors, and iterate until the application works correctly**.

The final app brings the analysis and visualisation together, making the aircraft, operators, countries and underlying data much easier to explore.

**All information used here is publicly available. No Abelo internal data or confidential records have been used.**