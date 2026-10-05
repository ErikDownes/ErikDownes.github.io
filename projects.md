---
layout: doc
permalink: /projects.html
handle: Projects
title: Projects
nav_order: 90
eyebrow: DASHBOARDS · CALCULATORS · APPLIED WORK
public_mode: true
---


## Pivotal Office Map — AI-Assisted Leaflet Project

**Addresses → AI-assisted build → interactive map → clear client-facing communication**

This project began with a very small piece of source data: the **office addresses copied from Pivotal Corporate’s website**. I gave those addresses to an AI assistant and asked it to turn them into a simple interactive map that would be useful in interview preparation and easy for a visitor to understand.

The AI did not create a picture of a map. It helped produce the **HTML, CSS and JavaScript** needed to build a real interactive web map. The finished page uses **Leaflet**, an open-source JavaScript mapping library, with **OpenStreetMap** map tiles.

That means the result is not an iframe or a static screenshot. The map is part of the page itself: the user can **pan, zoom, select an office and open a location popup**.

### What the AI helped do

The workflow was straightforward:

1. Take the four office addresses as structured information.
2. Represent each office as a JavaScript object containing a **name, latitude, longitude and address**.
3. Create a Leaflet map.
4. Add OpenStreetMap tiles.
5. Add a marker for each office.
6. Add buttons so the visitor can jump directly to **Shannon, Dublin, London or New York**, or return to **All offices**.
7. Add accessible labels, keyboard-friendly controls and a text status line so the information is still understandable if the map itself does not load.

AI accelerated the coding, but the important part was still **checking the addresses, testing the controls, deciding what information should be shown and refining the presentation**.

### The critical lines

The map starts with Leaflet:

```javascript
var map = L.map('pivotal-project-map', { scrollWheelZoom: false });
```

OpenStreetMap provides the map tiles:

```javascript
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);
```

Each office is represented as data:

```javascript
{name:'Shannon', coords:[52.69865,-8.90204], address:'Universal House, Shannon Free Zone'}
```

The markers are then generated from that data rather than writing four separate pieces of map code:

```javascript
offices.map(function (office) {
  return L.marker(office.coords).addTo(map);
});
```

And the city buttons use `map.setView(...)` to move the user directly to the selected office.

### Interface and visual design

I wanted the interface to feel **quiet, balanced and professional** rather than technically busy. The map is given enough vertical space to be useful, while the controls sit in a simple row above it. Buttons have consistent spacing and size, the page uses generous **white space**, and the text is broken into short sections so the reader can understand the project without being overwhelmed by the code.

White space is not empty space: it separates ideas, creates hierarchy and lets important information stand out. **Balance** matters too. The written explanation, controls and map should feel like parts of one composition rather than unrelated blocks competing for attention.

That is also part of professional communication. A document, dashboard or client-facing page should not merely be correct; it should be **clear, pleasing to look at and easy to navigate**. Good presentation is close to visual art in the sense that proportion, spacing, hierarchy and balance influence how comfortably a person can absorb information. Sophisticated graphics are useful when they make complex information easier to understand, not when they decorate it for its own sake.

For client-centred service, that matters because the user should not have to work hard to discover what the information means.

### Try the map

Select an office to zoom in, use the normal map controls to explore, or choose **All offices** to return to the international view.



All officesShannonDublinLondonNew York

Loading map…



&nbsp;

[Open the standalone map →]({{ '/pivotal-office-map.html' | relative_url }})

## Turboprop Fleet Map — Aircraft, Lessees & Countries

**Public aircraft data → reconciliation → interactive fleet reporting**

I built this project to turn a complicated turboprop portfolio into something you can explore quickly. Use the controls below to view the fleet by **aircraft**, **lessee / airline** or **country**, then filter and inspect individual records.

The short version: I used **Python and Pandas** to clean and reconcile public aircraft data, worked in both **Jupyter locally and Google Colab**, and used **Leaflet** to turn the result into an interactive map.

ABEL0_MAP_APP

**Read more — how the fleet project was built**

### The data

There was no single clean fleet dataset, so I combined several public sources rather than treating one source as complete.

I used **PlaneSpotters production lists** for ATR and Dash 8 aircraft and structured the records into fields such as MSN, registration, aircraft type, operator, delivery information and status. I also brought in the much larger **OpenSky aircraft database**, containing roughly **520,000 aircraft records**, to cross-check identifiers and fill gaps.

Separately, I built a control table from public Abelo / Elix portfolio information so I had a target fleet to reconcile against.

### Python, Pandas and reconciliation

I used **Python and Pandas** for the main data work: cleaning column names and values, filtering the large datasets down to relevant turboprops, comparing schemas, joining candidate records and checking duplicates or uncertain matches.

The strongest identifiers were **MSN / serial number** and **registration**. Aircraft type, operator and history were supporting evidence rather than substitutes for a reliable identity.

Where the evidence was not strong enough, I left the aircraft unresolved rather than forcing a match. That was an important part of the project: the aim was not just to produce a map, but to keep the data **traceable and defensible**.

### Jupyter and Google Colab

I used notebooks in two ways:

- **Jupyter locally** for exploratory work, checking intermediate tables and iterating quickly on cleaning and matching logic.
- **Google Colab** when I wanted a browser-based environment that was easy to reopen, share and run without depending on the local setup.

The underlying workflow is the same in both: load the data, inspect it, clean it, filter it, reconcile it and export a smaller structured dataset for the web application.

### From dataset to interactive map

Once the data was in a usable form, I moved to the front end and used **HTML, CSS, JavaScript and Leaflet**.

The interface is designed so a visitor does not need to read the methodology first. They can immediately interact with the fleet, switch between different views, filter the records and see how aircraft and lessees are distributed geographically.

The map shows portfolio geography and reporting context; it is **not a live aircraft-tracking map**.



## Mortgage Calculator

A simple financial-mathematics tool for exploring principal, deposit, interest rate, term, monthly repayments and total borrowing cost.

[Open Mortgage Calculator →]({{ '/mortgage-calculator.html' | relative_url }})

## PCP Car Finance Calculator

A car-finance calculator built around deposit, monthly payment, term and the optional final payment / GMFV. The aim is to compare the full cash-flow structure rather than just the headline monthly payment.

[Open PCP Calculator →]({{ '/pcp-calculator.html' | relative_url }})  
  
  
