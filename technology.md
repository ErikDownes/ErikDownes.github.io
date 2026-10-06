---
layout: doc
permalink: /technology.html
handle: Technology & Portfolio
title: Technology & Portfolio
subtitle: How I use and learn technology — Excel, Python, pandas, databases,
  SQL, AI and projects.
nav_order: 60
top_nav: true
description: Python, pandas, SQL, databases, Excel and technical aptitude for
  interview preparation.
eyebrow: INTERVIEW DOMAIN · TECHNOLOGY & PORTFOLIO
---
# Technology & Portfolio

## Tell me about working with large data.

My Dublin Bikes project used about 55 million station-status observations. I cleaned and standardised the historical files with pandas, stored the data in SQLite, then used SQL to reduce it into station-by-hour patterns for the dashboard. That turned a very large dataset into something practical and understandable.

55 million | pandas | SQLite | SQL | Dashboard

## Tell me about combining messy files.

The Dublin Bikes data came from different years with changing file structures and timestamp formats. I standardised the columns and dates in pandas, checked that they matched properly, then combined the cleaned data into one SQLite database. It taught me to make the data consistent before trying to analyse it.

Standardise | Validate | Combine | Query

## Tell me about working with raw data.

I exported one of my own Strava rides as a GPX file and analysed the raw track points. I checked what information was actually available, cleaned the elevation data and compared my results with Strava. I also found that the file had no timestamps, so I did not try to invent speed or moving-time information that the data could not support.

Raw data | Clean | Validate | Know limits

## Tell me about a financial tool you built.

My mother was comparing three PCP offers for the same car, so I built a calculator comparing the deposit, monthly repayments, final GMFV and total cash outlay. The middle option came out about €800 cheaper overall. I later used the same loan-amortisation ideas in an interactive mortgage calculator.

PCP | Amortisation | Compare | Explain | Decision