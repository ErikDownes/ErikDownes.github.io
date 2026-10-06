---
layout: doc
permalink: /technology.html
handle: Technology & Portfolio
title: Technology & Portfolio
subtitle: How I use and learn technology — Excel, Python, pandas, databases, SQL, AI and projects.
nav_order: 60
top_nav: true
description: Python, pandas, SQL, databases, Excel and technical aptitude for interview preparation.
eyebrow: INTERVIEW DOMAIN · TECHNOLOGY & PORTFOLIO
---

## Data at Scale | Tell me about a technical project where you had to work with data that was too large or complex for a spreadsheet.

### Situation

I worked with the historical Dublin Bikes data to analyse **where the bike network becomes unbalanced during the day and where rebalancing is likely to be needed**.

The raw archive was roughly **55 million station-status observations** collected over several years. They are snapshots of each station — timestamp, bikes available, empty stands, capacity and location — rather than individual journeys.

### Task

Before I could analyse anything, I had to turn that very large historical archive into **one consistent, reliable dataset**. The difficulty was not just its size; data collected over different periods was not always represented in exactly the same way, particularly dates and timestamps.

### Action

I combined the historical files, standardised the fields and normalised the timestamps so records from different periods could be compared properly.

I then reduced the full dataset into something operationally useful: for each station and time of day I could calculate its **occupancy — bikes available relative to station capacity**.

Rather than trying to display 55 million rows, I aggregated the data into a much smaller hourly view and compared **weekday and weekend patterns**. That let me identify when stations tended towards empty or full and see how that pressure moved across the network.

### Result

The finished [Dublin Bikes dashboard](/dublin-bikes.html) turns a very large, messy historical dataset into a simple 24-hour picture of the network, showing **where and when rebalancing is likely to matter most**.

### What I learned

The main lesson was that with large datasets, the analysis is only as good as the preparation. **Make the data consistent first, reduce it to the level needed for the question, validate it, and only then analyse or visualise it.**



&nbsp;

&nbsp;

## Reconcile Sources | Tell me about a project where you had to combine data from different sources and make sure the matches were reliable.

### Situation

I started with a simple question: **Abelo says it has 61 aircraft, 26 lessees and operates across 19 countries — what does that portfolio actually look like?**

There was no single clean dataset containing the full fleet, so what looked like a mapping project became a data-reconciliation problem.

### Task

I needed to build a reliable aircraft dataset from several public sources whose structures did not match.

### Action

I used public PlaneSpotters production lists for ATRs and Dash 8s. The information was spread across pages rather than available as a CSV, so I captured the pages and used **AI-assisted OCR** to turn them into about **2,600 structured aircraft records**.

I then brought in the much larger **OpenSky aircraft database — about 520,000 records**. The fields were not identical, so I had to reconcile them rather than merge them blindly. For example, **PlaneSpotters MSN matched to OpenSky serial number**, while registration could be matched directly. I used aircraft type, operator and aircraft history as supporting evidence.

Separately, I built a **61-record Abelo/Elix control table** from public announcements and historical information and worked from **lessee → aircraft type → candidate aircraft → registration/MSN → OpenSky cross-check**.

I deliberately left **five aircraft unresolved** where the evidence was not strong enough rather than forcing a match.

### Result

Once the data made sense, I used Google Colab and pandas for the analysis and then built the [Turboprop Fleet Map](/fleet-map.html) with HTML, CSS, JavaScript and Leaflet.

### What I learned

The most useful lesson was that **good analysis also means knowing when the evidence is not strong enough to make a claim**. A technically successful merge is not necessarily a reliable match.



&nbsp;

&nbsp;

## Raw Data | Tell me about a project where you had to clean and validate raw data before you could trust the result.

### Situation

I exported one of my own cycling activities from Strava as a GPX file and used it as a small raw-data project.

The file contained **5,640 track points** with position and elevation.

### Task

I wanted to see what I could reproduce from the raw file, compare my results with Strava and understand why any differences appeared.

### Action

The first thing I did was inspect what the file actually contained. This particular GPX export had **no timestamps**, so I could not honestly reconstruct moving time or speed from it and I did not try to manufacture missing information.

A simple point-to-point calculation gave me **28.126 km**, compared with Strava's **27.86 km**.

Elevation was a better example of why cleaning matters. If I simply added every tiny upward movement in the raw elevation readings, I got **172.4 metres** of ascent. After smoothing the elevation trace, the estimate became **136.2 metres**, almost exactly Strava's reported **137 metres**.

I also created a privacy-safe derived dataset rather than publishing the original latitude and longitude.

### Result

The [Strava analysis](/cycling.html) gave me a result I could validate against a mature product and, more importantly, let me explain where differences came from instead of hiding them.

### What I learned

Raw sensor data is **not automatically the finished answer**. I need to understand the fields that are actually present, clean the data appropriately, compare the result with a trusted reference and be clear about what the data cannot support.



&nbsp;

&nbsp;

## Financial Model | Tell me about a project where you turned financial mathematics into a practical interactive tool.

### Situation

In fifth year, my mother was comparing three PCP offers for an Audi A4: a higher deposit with lower monthly repayments, a lower deposit with higher monthly repayments, and an option in between. She was leaning towards the higher deposit because she had the money available in the bank.

### Task

I wanted to compare the offers objectively on their **overall financial outcome**, rather than letting the size of the monthly repayment drive the decision.

### Action

I used what I had learned about loan amortisation to build a simple [PCP calculator](/pcp-calculator.html). I modelled the deposit, the annuity of monthly repayments and the GMFV balloon payment, and used the calculator to compare the **total cash outlay** under each offer.

I then used graphs and the headline figures to make the comparison easy to understand.

I used the same core idea again in my [mortgage calculator](/mortgage-calculator.html), where the inputs are house price, deposit, interest rate and term, and the model shows the monthly repayment, total interest and the changing loan balance over time.

### Result

For the PCP comparison, the middle option was about **€800 cheaper in total cash outlay**, so the analysis changed the basis of the decision from immediate affordability to the overall financial cost.

### What I learned

The useful part of a model is not just getting the mathematics right. It is turning the mathematics into something **interactive, testable and understandable enough to support a real decision**.
