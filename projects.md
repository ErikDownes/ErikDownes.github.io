---
layout: doc
permalink: /projects.html
handle: Projects
title: Projects
nav_order: 80
top_nav: true
eyebrow: INTERACTIVE PROJECTS
public_mode: true
---

Open a project directly. Each one now has its **own page**, with the interactive work first and the explanation underneath.

<style>
.project-index{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:14px;margin:1rem 0 2rem}
.project-card{display:block;padding:18px 20px;border:1px solid #dbe2ea;border-radius:14px;background:#fff;text-decoration:none!important;color:inherit!important;box-shadow:0 2px 8px rgba(15,23,42,.04);transition:transform .15s ease,box-shadow .15s ease,border-color .15s ease}
.project-card:hover{transform:translateY(-2px);box-shadow:0 8px 22px rgba(15,23,42,.09);border-color:#aebdca}
.project-card strong{display:block;font-size:1.05rem;color:#0f172a;margin-bottom:5px}
.project-card span{display:block;color:#475569;line-height:1.45}
</style>

<div class="project-index">
  <a class="project-card" href="{{ '/dublin-bikes.html' | relative_url }}">
    <strong>Dublin Bikes</strong>
    <span>24-hour rebalancing dashboard using public station data, pandas, SQLite/SQL and Leaflet.</span>
  </a>

  <a class="project-card" href="{{ '/pivotal-office-map.html' | relative_url }}">
    <strong>Pivotal Office Map</strong>
    <span>AI-assisted Leaflet map of the four Pivotal Corporate office locations.</span>
  </a>

  <a class="project-card" href="{{ '/fleet-map.html' | relative_url }}">
    <strong>Turboprop Fleet Map</strong>
    <span>Interactive aircraft, lessee and country view built from reconciled public fleet data.</span>
  </a>

  <a class="project-card" href="{{ '/mortgage-calculator.html' | relative_url }}">
    <strong>Mortgage Calculator</strong>
    <span>Interactive repayment and amortisation model.</span>
  </a>

  <a class="project-card" href="{{ '/pcp-calculator.html' | relative_url }}">
    <strong>PCP Car Finance Calculator</strong>
    <span>Deposit, monthly payment, term and GMFV cash-flow calculator.</span>
  </a>
</div>
