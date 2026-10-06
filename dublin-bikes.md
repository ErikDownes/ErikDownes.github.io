---
layout: doc
permalink: /dublin-bikes.html
handle: Dublin Bikes
title: Dublin Bikes — 24-Hour Rebalancing Dashboard
eyebrow: PANDAS · SQLITE / SQL · LEAFLET
public_mode: true
description: Interactive 24-hour Dublin Bikes station rebalancing dashboard built from Smart Dublin historical data.
---

**Interactive first:** play through the day, switch between weekday and weekend, and inspect station occupancy and rebalancing pressure. The method and data notes are underneath.

<div style="margin:1rem 0 1.2rem;border:1px solid rgba(127,127,127,.25);border-radius:14px;overflow:hidden;background:#fff;">
  <iframe
    src="{{ '/dublin-bikes-dashboard.html' | relative_url }}"
    title="Dublin Bikes 24-hour rebalancing dashboard"
    style="display:block;width:100%;height:900px;border:0;background:#fff;"
    loading="eager">
  </iframe>
</div>

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:.7rem;margin:1rem 0 1.5rem;">
  <div style="padding:.85rem 1rem;border:1px solid rgba(127,127,127,.25);border-radius:12px;"><strong>~55 million observations</strong><br><span style="font-size:.92em;opacity:.78;">Station-status snapshots, not individual journeys.</span></div>
  <div style="padding:.85rem 1rem;border:1px solid rgba(127,127,127,.25);border-radius:12px;"><strong>24-hour view</strong><br><span style="font-size:.92em;opacity:.78;">See how imbalance moves by hour.</span></div>
  <div style="padding:.85rem 1rem;border:1px solid rgba(127,127,127,.25);border-radius:12px;"><strong>Weekday / Weekend</strong><br><span style="font-size:.92em;opacity:.78;">Compare commuting and weekend patterns.</span></div>
  <div style="padding:.85rem 1rem;border:1px solid rgba(127,127,127,.25);border-radius:12px;"><strong>Occupancy</strong><br><span style="font-size:.92em;opacity:.78;">Bikes available ÷ station capacity.</span></div>
</div>

## What the data actually is

The source is Smart Dublin / Dublin City Council's historical **Dublinbikes API DCC** archive. A row is essentially a snapshot of one docking station at one reported time: station ID, timestamp, bikes available, docks available, capacity and the station's fixed latitude/longitude.

So **55 million rows does not mean 55 million journeys**. The data describes station state through time. A journey changes those station totals indirectly, and operator rebalancing can change them too.

[Smart Dublin — Dublinbikes API DCC →](https://data.smartdublin.ie/dataset/dublinbikes-api)

## Why SQL

The archive is too large for a normal spreadsheet workflow. The process is:

**raw CSV archive → pandas cleaning → SQLite database → SQL aggregation → compact hourly table → interactive dashboard**

Using SQL means the full historical archive can stay in the database while only the smaller aggregated result needed for the dashboard is brought back into pandas and the browser.

## What the dashboard is testing

The useful operational question is not simply “which stations are empty?” It is:

> **Where does imbalance move through the network during the day, and when is rebalancing likely to matter most?**

The map therefore keeps the continuous occupancy measure underneath, while simplifying the display into quick states such as **Empty**, **Balanced** and **Full** for interpretation.

[Back to Projects →]({{ '/projects.html' | relative_url }})
