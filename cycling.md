---
layout: doc
permalink: /cycling.html
handle: Strava Raw Data
title: Strava Raw Data Analysis
description: Raw GPX data analysis using EDA, feature engineering, pandas, SQLite/SQL, visualisation and Leaflet.
eyebrow: GPX · EDA · FEATURE ENGINEERING · SQLITE / SQL · LEAFLET
public_mode: true
---

**Raw GPX → EDA → feature engineering → pandas → SQLite/SQL → graphics → Leaflet.**

This project starts with the underlying bicycle GPX data rather than accepting only the summary produced by a fitness app.

## The analysed ride

The source contains **4,327 track points**. The derived analysis gives:

- **43.17 km** total distance;
- **306.6 m** elevation gain;
- **304.0 m** elevation loss;
- recorded elevation from **8.8 m to 55.0 m**.

The source contains latitude, longitude and elevation but **no usable point timestamps**. That is treated as a data limitation: this ride supports distance, climbing, gradient and direction analysis, but not an honest reconstruction of speed or acceleration.

## EDA first

Before engineering features, the notebook audits the file:

- shape, columns and data types;
- missing values;
- duplicates;
- latitude/longitude validity;
- elevation completeness;
- unusually large point-to-point movements.

The audit found **0 exact duplicate rows**, **0 missing latitude or longitude values**, **0 invalid coordinates**, **0 missing elevation values**, and **13 distance observations flagged by an IQR screen for investigation**.

A screening flag is not an automatic deletion. It identifies observations that deserve checking.

## Feature engineering

From the raw coordinates and elevation, the analysis derives:

- point-to-point **Haversine distance**;
- cumulative distance;
- bearing / direction;
- elevation change;
- elevation gain and loss;
- smoothed elevation;
- route gradient;
- kilometre-by-kilometre summaries.

This is the main analytical step: useful variables are created from a small set of raw measurements.

## pandas + SQLite / SQL

The project keeps the raw track points separate from the engineered table and writes both to SQLite. Separate summary tables hold ride-level metrics, data-quality results and kilometre summaries.

SQL is then used for retrieval and aggregation, including overall summaries, kilometre comparisons, highest points and large point-to-point movements.

The data lineage is deliberately clear:

**raw source → validated data → engineered features → SQLite / SQL → visual outputs**

## Outputs and dashboard

The notebook produces reusable CSV, JSON, GeoJSON, SQLite, PNG, SVG and HTML outputs, including an interactive Leaflet ride explorer. The dashboard is designed around distance along the ride: the route, elevation profile and engineered metrics can all be explored from the same underlying processed data.

## Interview angle

The cycling subject is deliberately simple. The transferable workflow is the important part: inspect a real-world file, validate it, engineer useful variables, store it in a database, query it, investigate exceptions and communicate the result.

That maps naturally to technical implementation work where source data has to be understood before it can be automated or reconciled.
