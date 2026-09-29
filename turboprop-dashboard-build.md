---
layout: doc
handle: Project Build
title: How I Built the Turboprop Asset Reporting Dashboard
eyebrow: PORTFOLIO · DATA ANALYSIS · WEB APPLICATION
---
## Why I started

Abelo’s public figures — 61 aircraft, 26 lessees and 19 countries — made me curious. Which aircraft were they, who was operating them, and where were they flying?

I wanted to go beyond the headline numbers and actually see the fleet on a map.

## Finding and building the data

There was no neat downloadable dataset containing the Abelo fleet.

I started with public aircraft data, but some of the fields I needed were missing. PlaneSpotters was particularly useful because its public production lists could be filtered to ATR 42s, ATR 72s and Dash 8s.

The problem was that the information was spread across multiple pages rather than being available as a clean CSV.

I captured the relevant public pages and used AI-assisted text extraction to turn the aircraft records into structured data. The individual records contained useful identifiers such as registration and manufacturer serial number (MSN), as well as operator and aircraft history information.

That history was important. An aircraft might be operating for an airline while the record also contained information connecting it to Abelo or Elix. So finding the fleet was not simply a matter of filtering a column for the word “Abelo”.

I then cleaned and combined the records and matched aircraft across the different public sources, using registration and MSN where available. Where one source was missing information, I checked whether another source could fill the gap.

This became a data reconciliation problem rather than just a filtering exercise. Where I could not establish a match confidently, I left it unresolved rather than forcing the data to fit.

## From notebook to app

The analysis initially ran in Google Colab using Python and Pandas in a Jupyter-style notebook. That gave me a practical environment for cleaning, matching and checking the aircraft records.

Once the data made sense, I moved into VS Code and built the interactive application using HTML, CSS and JavaScript, with Leaflet powering the map and geographic layers.

AI-assisted development was part of the workflow. I used AI in an agentic or “vibe-coding” approach — describing what I wanted the application to do, generating and refining code, testing it against the data, finding problems and iterating.

I think that is an important modern development skill. It is not about pretending every line of code was written manually. It is about defining the problem properly, knowing what the output should do, working effectively with AI, checking its work and recognising when something is wrong.

## The result

What started as a simple question — “Where are the 61 aircraft?” — became a small asset-reporting application combining data collection, cleaning, reconciliation, analysis and interactive visualisation.

The final dashboard makes the aircraft, operators, countries and underlying records much easier to explore, and it gave me a much better understanding of the type of aircraft and portfolio data involved in aviation asset management.

All information used in the project is publicly available. No Abelo internal data or confidential records have been used.