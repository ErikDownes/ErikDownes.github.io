---
layout: doc
permalink: /cycling.html
handle: Cycling
title: Cycling | Ride, Data & Memory
description: Cycling as a personal interest and a small data-analysis project using Strava activity data, route files and reproducible analysis.
eyebrow: CYCLING · STRAVA · DATA ANALYSIS
public_mode: true
---

**Ride first. Data second.**

Cycling is one of the best breaks from a screen. Strava can run quietly in the background, but I do not need a phone in front of me while I ride. The point is the real world: fresh air, movement, effort, attention and being completely in the moment. Afterwards, the same ride becomes data — a record of distance, time, speed, elevation, route and progress.

That combination is what makes cycling interesting to me: it is personal first, but it also creates a rich dataset that can be explored properly.

## Milestones | What can I verify so far?

The records available to me currently confirm these rides:

| Date | Milestone | Evidence |
| --- | ---: | --- |
| 19 Aug 2020 | **32 km** ride | Historical ride record |
| 21 Aug 2020 | **23 km** ride | Historical ride record |
| 11 Jun 2023 | **27.86 km** | Strava activity |

The 32 km ride is the longest distance I can currently substantiate from the records available here. It should **not** yet be treated as my lifetime Strava maximum. A full Strava export will let me identify the true longest ride reliably.

## Featured ride | 11 June 2023

**Afternoon Ride · Limerick**

- Distance: **27.86 km**
- Moving time: **1:34:05**
- Elevation gain: **137 m**
- Average speed: **17.8 km/h**
- Maximum speed: **37.1 km/h**
- Estimated average power: **72 W**
- Energy output: **404 kJ**

[Open the original Strava activity →](https://www.strava.com/activities/9245976476)

### Segment milestones on this ride

- **Canal bank to UL Boat Club** — 8:37 PR
- **The Bike Shop Sprint** — 52 s PR
- **Crescent to Crescent (New to Old)** — 6:29 PR
- **Punchy Climb** — 1:09 PR

These segment results are useful because a ride is not just one total distance. It contains smaller repeated sections that can be compared over time.

## Data project | Turning a ride into analysis

Strava is a good example of data analysis hidden inside an everyday product. A GPS trace is essentially a time series: latitude, longitude, timestamp and sometimes elevation, heart rate, cadence or power. From that, we can calculate and visualise useful metrics.

A small reproducible project can answer questions such as:

- What is my **longest ride**?
- How has my **monthly distance** changed?
- Which rides had the greatest **elevation gain**?
- How does **average speed** vary with distance or climbing?
- What are my most repeated routes?
- Which segments show clear improvement?
- How consistent is my riding across weeks or seasons?

The workflow is straightforward:

**Strava → export → clean → validate → analyse → visualise → explain**

That is the same core discipline used in wider data work: preserve the source, understand the fields, check the numbers, transform carefully and make the result easy to read.

## Map | The next addition

The official Strava activity link already contains the route map for the 11 June 2023 ride. The next step is to export the ride as **GPX** or its original activity file and build an independent map with Python + Folium or JavaScript + Leaflet.

For privacy, I would not publish a raw GPX file if it reveals a precise home start or finish point. The public version should use Strava's map-visibility controls or a trimmed/generalised route.

Once the GPX is available, this page can show:

- the full route line,
- start/finish area,
- elevation profile,
- kilometre markers,
- selected segment milestones,
- photos attached to points on the ride.

## Memory | More than exercise data

A cycling log can also become a personal archive. A photo, a route and a few numbers are enough to bring a day back years later: where I went, who I was with, what the weather was like and what felt difficult or memorable.

That is why I like the idea of adding photographs to selected rides. The data provides the structure; the photographs and short notes provide the human memory.

## Build notes | How I would make this page

**On the phone**

1. Install Strava and sign in.
2. Tap **Record** and choose **Ride**.
3. Tap **Start** and put the phone away safely.
4. At the end, pause, choose **Finish**, add a title or photo, and save the activity.

**On the computer**

1. Open the ride on Strava.com.
2. Use the activity menu to **Export Original** or **Export GPX**.
3. Keep the untouched source file in a private `data/raw/` folder.
4. Read the exported activity into Python.
5. Create a cleaned table of ride-level statistics.
6. Build charts with pandas/matplotlib and a route map with Folium/Leaflet.
7. Publish only the derived statistics and privacy-safe map to GitHub Pages.

For a larger project, Strava also supports a **bulk account export**. That gives enough data to identify the real longest ride, monthly totals, trends and personal milestones across the whole history.

### Official Strava help

- [How to record an activity →](https://support.strava.com/en-us/articles/15402137-how-do-i-record-an-activity-on-strava)
- [How to export Strava data / GPX / original files →](https://support.strava.com/en-us/articles/15401919-how-do-i-export-my-strava-data)
- [How to share activity links →](https://support.strava.com/en-us/articles/15401717-how-do-i-get-and-share-links-from-strava)
- [How to embed activities on a website →](https://support.strava.com/en-us/articles/15402053-sharing-your-activities-and-routes-with-a-strava-embed)

## Interview angle | Why this is useful

This is a small project, but it is a good way to explain data thinking in an interview.

I can take an everyday source, preserve the original data, convert it into a structured dataset, reconcile my calculated results against the source, investigate differences, produce a clear report and document the process so that it can be repeated.

For a role such as Pivotal Corporate, the subject matter is different, but the habits transfer directly: **accuracy, reconciliation, traceability, process discipline and clear reporting**.
