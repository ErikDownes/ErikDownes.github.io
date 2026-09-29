---
layout: doc
handle: Project Build
title: How I Built the Turboprop Asset Reporting Dashboard
eyebrow: PORTFOLIO · DATA ANALYSIS · WEB APPLICATION
---
## 30-Second Version

I used **OpenSky and PlaneSpotters** to build the aircraft database because I needed both sources to get the full picture.

I used **Python and Pandas** to clean, compare and organise the data, running the code in **Google Colab** in the cloud.

Then I used **Leaflet** to turn the data into an interactive map with filters.

You can view all **61 aircraft**, see the fleet by **lessee**, or drill down into individual aircraft. The map is colour-coded so you can quickly see how the fleet is distributed and where different aircraft are operating.

For me, that was the value of the project — it wasn’t just building an app. It was turning a fairly complicated aircraft dataset into something you could actually explore and understand visually.

The next step would be to add **EASA-approved engine shops and airport locations**. That could help connect aircraft location with scheduled maintenance requirements and give a better picture of how maintenance planning affects asset management.



&nbsp;

&nbsp;

## view answer

I started with a simple question. Abelo says it has 61 aircraft, 26 lessees and operates across 19 countries, and I wanted to understand what that portfolio actually looked like rather than just reading the headline numbers.

There wasn’t one clean dataset, so I combined several public sources. I used PlaneSpotters production lists for ATRs and Dash 8s, captured the pages and used AI-assisted OCR to turn them into about 2,600 structured aircraft records. That gave me things like MSN, registration, aircraft type, operator, delivery information and status.

I then brought in the much larger OpenSky aircraft database, with about 520,000 records. The fields weren’t identical, so I had to reconcile them rather than just merge them blindly. MSN matched to serial number, registration matched directly, and I used aircraft type, operator and aircraft history as supporting evidence.

Separately, I built a 61-record Abelo and Elix control table from public announcements and historical information. Some of those records gave me the lessee, country and aircraft type but not the actual registration or MSN, so I worked from lessee to aircraft type to candidate airframes, and then used registration and MSN where I could to confirm the match.

I deliberately left 5 aircraft unresolved where the evidence wasn’t strong enough rather than forcing a match. 

Once the data made sense, I moved from Google Colab and Pandas into VS Code and built the application using HTML, CSS, JavaScript and Leaflet. The map shows the geographic distribution of the portfolio by lessee and country, not live aircraft GPS positions.

What I liked about the project was that it started as a simple map, but it became a real data-reconciliation exercise involving incomplete data, different schemas, historical aircraft changes and uncertainty. That gave me a much better understanding of the kind of asset data you would actually have to work with in aircraft leasing.



# Turboprop Asset Reporting Dashboard — Interview Version

## Key Line

I started with a simple question: **Abelo says it has 61 aircraft, 26 lessees and operates across 19 countries — what does that portfolio actually look like?**

## Why I Built It

I wanted to go beyond the headline numbers and understand the actual portfolio.

There was no single clean dataset containing the full Abelo fleet, so I treated it as a **data-reconciliation problem** rather than just a mapping exercise.

## How I Built the Data

I used public PlaneSpotters production lists for ATR 42s, ATR 72s and Dash 8s.

The information was spread across pages rather than available as a CSV, so I captured the pages and used **AI-assisted OCR** to structure them.

That gave me about **2,600 aircraft records**, with fields such as:

- MSN
- registration
- aircraft type
- operator
- delivery information
- status
- aircraft history

I also kept the source page and OCR confidence so I could trace records back to their source.

## Bringing in OpenSky

I then brought in the much larger **OpenSky aircraft database — about 520,000 records**.

The schemas were different, so I had to work out which fields actually corresponded.

For example:

**PlaneSpotters MSN ↔ OpenSky serial number**

and

**registration ↔ registration**

I used registration and MSN as the strongest identifiers, with aircraft type, operator and historical information as supporting evidence.

## Reconstructing the 61 Aircraft

Separately, I built a **61-record Abelo/Elix control table** from public announcements and historical information.

Some records had a lessee, country and aircraft type but no actual registration or MSN.

So the process became:

**lessee → aircraft type → candidate aircraft → registration/MSN → OpenSky cross-check**

I deliberately did not force matches. If I could not identify an airframe confidently, I left it as **pending ID**.

That was probably the most useful lesson from the project: **good analysis also means knowing when the data is not strong enough to make a claim.**

## From Data to the App

Once the data made sense, I moved from **Google Colab and Pandas** into **VS Code**.

I built the front end with:

**HTML, CSS, JavaScript and Leaflet**

The map shows the **geographic distribution of the portfolio by lessee and country**, not live aircraft GPS positions.

I then added filters for country, aircraft type and lessee, with the detailed 61-aircraft table underneath.

## If They Ask What You Learned

The biggest thing I learned was that aircraft data is not static.

An aircraft can change **registration, operator, owner and country**, while the MSN stays with the physical airframe.

So what looked like a simple mapping project became a real exercise in **data cleaning, matching, provenance, uncertainty and asset reporting**.

And AI helped throughout — particularly with OCR and coding — but I still had to decide **what constituted a valid match, test the results and recognise when something was wrong.**