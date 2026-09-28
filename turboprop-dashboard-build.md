---
layout: doc
handle: Project Build
title: How I Built the Turboprop Asset Reporting Dashboard
eyebrow: PROJECT BUILD · DATA ANALYSIS · WEB APPLICATION
public_mode: true
---

## Motivation

I started by reading through Abelo’s website and news because I wanted to understand the company and the aircraft.

Then I found the headline figures: 61 aircraft, 26 lessees and 19 countries.

As a Financial Mathematics student, I immediately wanted to know what was behind those numbers. Which countries? Which lessees? Which aircraft?

61 aircraft across 19 countries needed a map. That was where the application started.

## Finding the Data

The data did not come from one clean source.

I started with Abelo’s own public material — press releases, aircraft announcements, lease announcements, financing news and other pages. Across the research, I used AI-assisted OCR on roughly 70 pages so that information trapped inside PDFs and page images could be turned into usable text and checked against the aircraft records.

I also found a public aviation master dataset containing about 520,000 aircraft records and 27 variables. That gave me a large structured dataset, but it was far broader than I needed and some of the fields I wanted were incomplete or inconsistent.

PlaneSpotters gave me another route. Its ATR 42 and ATR 72 filters produced a fleet view that also came back to 61 aircraft. It was useful reference data, but it was effectively read-only rather than a clean downloadable CSV source.

So the job became a data-consolidation exercise: use the large structured dataset for scale, use the PlaneSpotters filtered records for cross-checking and missing fields, and use OCR-extracted public material to fill gaps and validate what I was seeing.

## Python, Pandas and Notebooks

This was a natural application of what I had learned in Data Analytics.

I used Python and Pandas in Google Colab. Colab gives me a Jupyter-style notebook, so I can combine small blocks of Python code with notes and outputs and build the analysis step by step.

Pandas was the main library for handling the data. Rather than manually working through 520,000 rows, I could filter, sort, clean, count and compare records programmatically.

I reduced the master dataset to the aircraft families relevant to the project — ATR 42s, ATR 72s and Dash 8s — and then investigated registrations, operators, MSNs, variants and other fields.

The process was not simply “download a finished fleet list”. The different sources had different strengths, so I had to match and reconcile them.

## Learning Through the Data

One of the things I enjoyed most was learning aviation through the data itself.

I did not begin by memorising definitions. I encountered fields I did not understand and investigated them.

For example, I came across MSN and learned that it means Manufacturer Serial Number — the manufacturer’s unique number for an individual airframe.

I also found that the public data was not equally complete. Some aircraft could be identified cleanly through an MSN or registration; others could not. In several cases, one source supplied a field that another source was missing.

That is what made the cleaning interesting. I was not just removing duplicates or correcting spelling. I was deciding which source could best support each field and then consolidating the evidence into one usable record.

It reminded me of something I enjoyed in Data Analytics: unsupervised learning. You do not necessarily begin with all the answers or labels. You explore the data, find structure and keep asking: “What am I actually looking at here?”

## Roadblocks and Tools

I got stuck plenty of times, and that was part of the learning.

PlaneSpotters was useful to inspect, but it did not simply hand me the data in a CSV that I could drop into Pandas. Some of the information had to be read, compared and reconstructed from the public pages.

That is where newer AI tools made a real difference. OCRing around 70 pages and turning that material into searchable, comparable text would have been painfully slow only a few years ago.

Pandas handled the structured data and filtering. Python let me clean and transform the records programmatically. AI-assisted OCR helped recover information from PDFs and page images. JavaScript later handled the interaction and filtering in the browser.

The pattern was often simple: I knew what I wanted the application to do, but not yet how to do it. I found the appropriate tool or technique, tested it, checked the result and moved on.

## Validating the Result

I did not want a good-looking dashboard built on bad data.

The strongest check was that two very different routes converged on the same number.

The PlaneSpotters ATR filter gave me 61 aircraft. After filtering, cleaning and consolidating the broader dataset and the other public evidence, I also arrived at 61.

I then checked the wider portfolio structure against Abelo’s published figures: 61 aircraft, 26 lessees and 19 countries.

The sources were not identical. That was useful rather than inconvenient. When one source was missing a field, another could sometimes supply it. The final dataset therefore came from reconciliation across sources rather than blind trust in one table.

There are still five aircraft that I can associate with Abelo but where I cannot confidently establish the current lessee from the public information. I leave those unresolved rather than guessing — my five “floaters”.

## Building the Dashboard

Once the data was clean enough, I turned it into a web application.

HTML provides the page structure. CSS controls the appearance and responsive layout. JavaScript provides the interaction. The mapping library handles the geographical visualisation.

The dashboard can be filtered by region, country, lessee and aircraft type — for example ATR 42-500, ATR 72-600 or Dash 8-400.

Where the public data supports it, I can drill further into individual asset records and see fields such as model, MSN, registration, placement and the evidence used to identify the aircraft.

The difficult part was making the different views work together. When I change a filter, the map, aircraft counts, countries, lessees and asset information all have to remain consistent.

## Responsive Design

I wanted it to behave like a web application rather than something that only worked on my laptop.

It can run full-screen on a desktop, but the layout also adapts to tablets and phones. The map, filters, controls and information panels rearrange themselves according to the available screen space.

## GitHub and Publishing

I manage the project using Git, which gives me version control and a history of the changes I make.

The repository is stored on GitHub and the live application is published through GitHub Pages.

The workflow is:

Abelo public information  
→ AI-assisted OCR of roughly 70 pages  
→ 520,000-row aviation master dataset  
→ PlaneSpotters ATR 42 / ATR 72 filtered records  
→ Python and Pandas  
→ Google Colab / Jupyter-style notebook  
→ matching, cleaning and consolidation  
→ validation against 61 aircraft / 26 lessees / 19 countries  
→ HTML, CSS and JavaScript  
→ mapping and interactive filters  
→ Git and GitHub  
→ GitHub Pages  
→ responsive web application.

## Data and Attribution

Everything in the application comes from publicly available information. I have not had access to Abelo internal systems, proprietary datasets or confidential information.

The project uses Abelo’s name because I built it specifically while researching the company and preparing for the interview. If Abelo would prefer its name not to be used publicly, I would remove the name or take the application down immediately.
