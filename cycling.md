---
layout: doc
permalink: /cycling.html
handle: Cycling
title: Cycling | Ride, Data & Memory
description: Cycling as a personal interest and a small data-analysis project using Strava activity data and a privacy-safe derived dataset.
eyebrow: CYCLING · STRAVA · DATA ANALYSIS
public_mode: true
---

**Ride first. Data second.**

Cycling gives me time away from screens. Strava can run quietly in the background, but I do not need a phone in front of me while I ride. The point is fresh air, movement, effort and being completely in the moment. Afterwards, the same ride becomes data.

## Strava | Use the expert product

I am **not trying to rebuild Strava**. That would miss the point. Strava is a mature product built by specialist engineers and data scientists, and it already does an excellent job of recording, processing, mapping and presenting activity data.

My small project starts **after the export**. I use one of my own rides as a dataset so I can practise the underlying data-analysis process: inspect the raw file, clean it, derive variables, compare my results with the finished Strava output and explain any differences.

## Featured ride | Afternoon Ride

**11 June 2023 · Limerick**

Strava reports:

- Distance: **27.86 km**
- Moving time: **1:34:05**
- Elevation gain: **137 m**
- Average speed: **17.8 km/h**
- Maximum speed: **37.1 km/h**
- Estimated average power: **72 W**
- Energy output: **404 kJ**

[Open the original Strava activity →](https://www.strava.com/activities/9245976476)

### Segment milestones

- **Canal bank to UL Boat Club** — 8:37 PR
- **The Bike Shop Sprint** — 52 s PR
- **Crescent to Crescent (New to Old)** — 6:29 PR
- **Punchy Climb** — 1:09 PR

## Raw-data lab | My own analysis

I exported the ride as a GPX file and treated it as a small raw-data exercise.

The file contains **5,640 recorded track points** with position and elevation. This particular GPX export does **not** contain timestamps, so I cannot honestly reconstruct moving time or speed from this file alone.

A simple point-to-point calculation gives **28.126 km**, slightly above Strava's **27.86 km**. If I naïvely add every tiny upward movement in the raw elevation readings, I get **172.4 m** of ascent. After smoothing the elevation trace, the estimate becomes **136.2 m** — almost exactly Strava's reported **137 m**.

That difference is the interesting part. Raw sensor data is not the finished answer. Cleaning, filtering and methodological choices matter.

![Smoothed elevation profile from the exported GPX]({{ '/assets/afternoon-ride-elevation.svg' | relative_url }})

[Download the privacy-safe analysis CSV →]({{ '/data/afternoon-ride-analysis.csv' | relative_url }})

The public CSV is deliberately a **derived dataset**, sampled every 100 metres. It contains distance, smoothed elevation and change in elevation — **not the original latitude and longitude**. The full GPX stays private because publishing exact route coordinates can reveal precise start and finish locations.

## What this demonstrates

The workflow is small but genuine:

**GPX export → inspect → clean → derive → validate → visualise → explain**

It demonstrates several transferable data habits:

- preserve the original source,
- understand what fields are actually available,
- do not pretend missing data exists,
- compare calculated results against a trusted reference,
- investigate discrepancies rather than hiding them,
- publish only what is appropriate.

## Memory | More than exercise data

The numbers are useful, but cycling is personal first. A route, a photograph and a few statistics can preserve a memory of a day: where I went, who I was with, what felt difficult and what was enjoyable.

That is the balance I want here: **technology in the background, experience in the foreground**.

## Interview angle

This is not meant to be a huge portfolio project. It is a compact example I can explain clearly.

I took a real-world file, examined its structure, created a safer derived dataset, checked my calculations against the source application and documented what I could and could not conclude from the data.

For data, finance or corporate work, the subject changes but the habits are the same: **accuracy, reconciliation, traceability, judgement and clear reporting**.
