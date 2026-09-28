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

I went through about 20 Abelo PDFs — press releases, aircraft announcements, leases and financing announcements — as well as pages on the website.

I used AI to help extract the useful information and started building a dataset.

But I hit a major problem: I was missing almost half the fleet.

I found a public aviation master dataset containing exactly 520,000 aircraft records and 27 variables — everything from helicopters and private aircraft to commercial airliners.

The problem had changed: how do I find Abelo’s aircraft inside 520,000 records?

## Python, Pandas and Notebooks

This was a natural application of what I had learned in Data Analytics.

I used Python and Pandas in Google Colab. Colab gives me a Jupyter-style notebook, so I can combine small blocks of Python code with notes and outputs and build the analysis step by step.

Pandas was the main library for handling the data. Rather than manually filtering 520,000 rows in Excel, I could write code to filter, sort, clean, count and compare records.

I reduced the master dataset to the aircraft families relevant to the project — ATR 42s, ATR 72s and Dash 8s — and then investigated registrations, operators and other fields.

The process is reproducible. If the source data changes, I can run the notebook again rather than repeating hundreds of manual filters.

## Learning Through the Data

One of the things I enjoyed most was learning aviation through the data itself.

I did not begin by memorising definitions. I encountered fields I did not understand and investigated them.

For example, I came across MSN and learned that it means Manufacturer Serial Number — the manufacturer’s unique number for an individual airframe.

I also found that the public data was not equally complete. Some aircraft could be identified through an MSN or registration; others could not. The Dash 8 records in my dataset did not provide the same identification fields.

That reminded me of something I enjoyed in Data Analytics: unsupervised learning. You do not necessarily begin with all the answers or labels. You explore the data, find structure and keep asking: “What am I actually looking at here?”

## Roadblocks and Tools

I got stuck plenty of times, and that was part of the learning.

Pandas handled the tabular data and filtering. Python let me clean and transform the records programmatically. When I moved to the web application, JavaScript handled the interaction and filtering in the browser.

For the geographical visualisation, I used a mapping library rather than trying to build a map engine from scratch. That let me concentrate on connecting my aircraft, lessee and country data to the map.

The pattern was often simple: I knew what I wanted the application to do, but not yet how to do it. I researched the problem, found the appropriate library or technique, tested it, fixed what did not work and moved on.

## Validating the Result

I did not want a good-looking dashboard built on bad data.

I went back to the aircraft I had originally identified from Abelo’s own public announcements and checked that they appeared in the larger dataset.

Then came the strongest validation: I counted the portfolio and got 61 aircraft.

I also got 26 lessees and 19 countries — the same three figures that had started the project.

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
→ AI-assisted extraction  
→ 520,000-row aviation dataset  
→ Python and Pandas  
→ Google Colab / Jupyter-style notebook  
→ cleaning, filtering and validation  
→ HTML, CSS and JavaScript  
→ mapping and interactive filters  
→ Git and GitHub  
→ GitHub Pages  
→ responsive web application.

## Data and Attribution

Everything in the application comes from publicly available information. I have not had access to Abelo internal systems, proprietary datasets or confidential information.

The project uses Abelo’s name because I built it specifically while researching the company and preparing for the interview. If Abelo would prefer its name not to be used publicly, I would remove the name or take the application down immediately.
