---
layout: doc
permalink: /cycling.html
handle: Strava Analysis
title: Strava Analysis
description: Interactive GPX analysis using pandas, feature engineering, SQLite/SQL, Plotly and Leaflet.
eyebrow: GPX · PANDAS · KINEMATICS · SQLITE / SQL · PLOTLY · LEAFLET
public_mode: true
---

<style>
/* This project page deliberately uses the available browser width. */
.doc-paper{
  width:min(1520px,calc(100vw - 28px));
  padding:42px clamp(18px,3.4vw,58px) 80px;
}
.strava-project{width:100%;min-width:0}
.strava-lead{max-width:1050px;font-size:1.08rem;color:#475569;margin:.25rem 0 1.15rem}
.strava-actions{display:flex;flex-wrap:wrap;gap:9px;margin:0 0 18px}
.strava-actions a,.strava-actions button{
  display:inline-flex;align-items:center;justify-content:center;
  min-height:42px;padding:8px 13px;border:1px solid #cfd7df;border-radius:999px;
  background:#fff;color:#17324d;text-decoration:none;font:inherit;font-weight:700;cursor:pointer
}
.strava-actions a:hover,.strava-actions button:hover{background:#f4f7fa}
.strava-kpis{
  width:100%;display:flex;gap:0;overflow-x:auto;margin:14px 0 24px;
  border:1px solid #dce3e9;border-radius:12px;background:#fff
}
.strava-kpi{display:flex;flex-direction:column;gap:2px;min-width:170px;padding:13px 16px;border-right:1px solid #e3e8ed}
.strava-kpi:last-child{border-right:0}
.strava-kpi strong{font-size:1.08rem;color:#17212b}
.strava-kpi small{color:#687684;font-size:.78rem}
.strava-note{width:100%;margin:14px 0 22px;padding:12px 14px;border-left:4px solid #5f7f9c;background:#f6f9fb;color:#45535f}
.strava-player{width:100%;margin:18px 0 34px}
#strava-map{width:100%;height:560px;border:1px solid #d9e0e6;border-radius:14px;overflow:hidden;background:#eef2f5}
.strava-player-controls{display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin:10px 0}
.strava-player-controls button{min-height:40px;padding:7px 12px;border:1px solid #cfd7df;border-radius:8px;background:#fff;font:inherit;font-weight:700;cursor:pointer}
.strava-player-controls input[type=range]{flex:1 1 420px;min-width:220px}
#ride-position-text{font-variant-numeric:tabular-nums;color:#52616f;font-weight:650}
.strava-jumps{display:flex;flex-wrap:wrap;gap:8px;margin:16px 0 30px}
.strava-jumps a{padding:7px 11px;border:1px solid #d7dfe6;border-radius:999px;text-decoration:none;color:#34495d;background:#fff}
.strava-section{width:100%;margin:36px 0 50px}
.strava-section>h2{font-size:1.55rem!important;margin:0 0 6px!important}
.strava-section>p{max-width:1050px;color:#596978}
.strava-chart-wrap{
  width:100%;margin:18px 0 34px;padding:8px;
  border:1px solid #dce3e9;border-radius:14px;background:#fff;overflow:hidden
}
.strava-chart{width:100%;min-height:510px}
.strava-chart .js-plotly-plot,.strava-chart .plot-container,.strava-chart .svg-container{width:100%!important}
.strava-findings{width:100%;display:block;margin:12px 0 34px}
.strava-finding{width:100%;display:grid;grid-template-columns:minmax(220px,1.1fr) minmax(110px,.35fr) minmax(300px,2fr);gap:18px;align-items:start;padding:13px 0;border-bottom:1px solid #e2e7ec}
.strava-finding strong{color:#1d2935}.strava-finding span{font-weight:800;color:#35556f}.strava-finding p{margin:0;color:#61707d}
.strava-tech{width:100%;border-top:1px solid #dfe5ea;padding-top:22px;margin-top:28px}
.strava-tech p{max-width:1100px}
@media(max-width:760px){
  .doc-paper{width:100%;padding:28px 15px 55px}
  #strava-map{height:430px}
  .strava-chart{min-height:430px}
  .strava-finding{grid-template-columns:1fr;gap:3px;padding:14px 0}
  .strava-kpi{min-width:150px}
}
</style>

<div class="strava-project">

<p class="strava-lead"><strong>One real GPX ride, taken from raw track points through validation, pandas feature engineering, SQL storage and a set of interactive visual outputs.</strong> The page opens with the data product first: play the ride, inspect exact values, zoom into every graph and then look underneath at how the analysis was built.</p>

<div class="strava-actions">
  <a href="https://colab.research.google.com/github/ErikDownes/ErikDownes.github.io/blob/main/assets/strava/Strava_Colab_V14.ipynb" target="_blank" rel="noopener">Open notebook in Colab</a>
  <a href="https://github.com/ErikDownes/ErikDownes.github.io/blob/main/assets/strava/Strava_Colab_V14.ipynb" target="_blank" rel="noopener">View notebook on GitHub</a>
  <a href="{{ '/assets/strava/Strava_Colab_V14.ipynb' | relative_url }}">Download .ipynb</a>
  <button type="button" id="reset-all-charts">Reset all graph zooms</button>
</div>

<div class="strava-kpis" id="strava-kpis" aria-label="Ride summary"></div>

<div class="strava-note"><strong>Time provenance:</strong> this ride contains genuine GPX timestamps. Distance, speed, velocity and acceleration are therefore calculated from recorded point times rather than a fabricated ride duration.</div>

<div class="strava-player">
  <h2>Play the ride</h2>
  <p>Drag the position control or press Play. The selected point moves along the actual route while the live readout reports distance, elapsed time, speed, elevation and gradient.</p>
  <div id="strava-map" aria-label="Interactive route map"></div>
  <div class="strava-player-controls">
    <button type="button" id="ride-play">▶ Play ride</button>
    <button type="button" id="ride-reset">↺ Reset ride</button>
    <input id="ride-position" type="range" min="0" max="1" step="1" value="0" aria-label="Ride position">
    <span id="ride-position-text"></span>
  </div>
</div>

<nav class="strava-jumps" aria-label="Strava project sections">
  <a href="#motion">Motion through time</a>
  <a href="#terrain">Terrain &amp; climbing</a>
  <a href="#quality">Curiosity &amp; data quality</a>
  <a href="#findings">What the ride reveals</a>
  <a href="#pipeline">Analytical pipeline</a>
</nav>

<section class="strava-section" id="motion">
<h2>Motion through time</h2>
<p>Each output is deliberately full width rather than packed into a dashboard array. Hover for exact values, drag to zoom, pan, autoscale or use the camera control to save a chart image.</p>

<div class="strava-chart-wrap"><div class="strava-chart" id="chart-distance-time"></div></div>
<div class="strava-chart-wrap"><div class="strava-chart" id="chart-displacement-time"></div></div>
<div class="strava-chart-wrap"><div class="strava-chart" id="chart-speed-time"></div></div>
<div class="strava-chart-wrap"><div class="strava-chart" id="chart-velocity-time"></div></div>
<div class="strava-chart-wrap"><div class="strava-chart" id="chart-acceleration-time"></div></div>
<div class="strava-chart-wrap"><div class="strava-chart" id="chart-elevation-time"></div></div>
<div class="strava-chart-wrap"><div class="strava-chart" id="chart-gradient-time"></div></div>
<div class="strava-chart-wrap"><div class="strava-chart" id="chart-vertical-speed-time"></div></div>
</section>

<section class="strava-section" id="terrain">
<h2>Terrain and climbing</h2>
<p>Distance becomes the natural horizontal axis for the physical route. This separates where something happened from when it happened.</p>

<div class="strava-chart-wrap"><div class="strava-chart" id="chart-elevation-distance"></div></div>
<div class="strava-chart-wrap"><div class="strava-chart" id="chart-gradient-distance"></div></div>
<div class="strava-chart-wrap"><div class="strava-chart" id="chart-climb-distance"></div></div>
<div class="strava-chart-wrap"><div class="strava-chart" id="chart-speed-distance"></div></div>
<div class="strava-chart-wrap"><div class="strava-chart" id="chart-speed-gradient"></div></div>
<div class="strava-chart-wrap"><div class="strava-chart" id="chart-speed-elevation"></div></div>
</section>

<section class="strava-section" id="quality">
<h2>Curiosity and data quality</h2>
<p>The GPX is treated as data to be investigated, not merely as a source for a pretty map. These outputs expose sampling, spacing, distributions, source missingness, stop/move state and direction.</p>

<div class="strava-chart-wrap"><div class="strava-chart" id="chart-sampling-hist"></div></div>
<div class="strava-chart-wrap"><div class="strava-chart" id="chart-segment-hist"></div></div>
<div class="strava-chart-wrap"><div class="strava-chart" id="chart-speed-hist"></div></div>
<div class="strava-chart-wrap"><div class="strava-chart" id="chart-acceleration-hist"></div></div>
<div class="strava-chart-wrap"><div class="strava-chart" id="chart-missingness"></div></div>
<div class="strava-chart-wrap"><div class="strava-chart" id="chart-moving"></div></div>
<div class="strava-chart-wrap"><div class="strava-chart" id="chart-bearing"></div></div>
</section>

<section class="strava-section" id="findings">
<h2>What the ride reveals</h2>
<p>These are generated from the same engineered dataset as the graphs. Correlations are descriptive relationships, not causal claims.</p>
<div class="strava-findings" id="strava-findings"></div>
</section>

<section class="strava-section strava-tech" id="pipeline">
<h2>Analytical pipeline</h2>

<p><strong>Raw GPX → validation / EDA → engineered features → SQLite / SQL → interactive Plotly + Leaflet → reusable CSV / JSON / GeoJSON / HTML outputs.</strong></p>

<p>The original fields are kept separate from the engineered variables. The notebook derives Haversine segment distance, cumulative travelled distance, displacement from the start, bearing, smoothed speed, east/north velocity components, tangential acceleration, smoothed elevation, gradient, vertical speed and cumulative climbing. Potential outliers are flagged for investigation rather than silently discarded.</p>

<p>The same processed data is written to SQLite and reusable files, so the map, graphs and summaries are not separate hand-built stories. They come from one reproducible pipeline.</p>

<h3>Why this matters beyond cycling</h3>

<p>The transferable skill is the workflow: understand an unfamiliar source file, audit its quality, create useful variables, reconcile different views of the same underlying data, store it cleanly, query it and communicate the result interactively. The bicycle ride simply makes that process visible.</p>
</section>

</div>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/leaflet@1.9.4/dist/leaflet.css">
<script src="https://cdn.jsdelivr.net/npm/leaflet@1.9.4/dist/leaflet.js"></script>
<script src="https://cdn.plot.ly/plotly-2.35.2.min.js"></script>
<script src="{{ '/assets/strava/ride-data.js' | relative_url }}"></script>
<script src="{{ '/assets/strava/strava-project.js' | relative_url }}"></script>