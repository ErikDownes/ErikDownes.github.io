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

Open a project to see the working output first, followed by the analytical explanation.

<style>
.doc-paper{
  width:min(1180px,calc(100vw - 28px));
  padding:46px clamp(18px,4vw,64px) 76px;
}
.project-index{display:block;margin:1rem 0 2rem}
.project-card{
  display:block;width:100%;padding:22px 24px;margin:0 0 14px;
  border:1px solid #dbe2ea;border-radius:14px;background:#fff;
  text-decoration:none!important;color:inherit!important;
  box-shadow:0 2px 8px rgba(15,23,42,.04);
  transition:transform .15s ease,box-shadow .15s ease,border-color .15s ease
}
.project-card:hover{transform:translateY(-2px);box-shadow:0 8px 22px rgba(15,23,42,.09);border-color:#aebdca}
.project-card strong{display:block;font-size:1.12rem;color:#0f172a;margin-bottom:6px}
.project-card span{display:block;color:#475569;line-height:1.5}
</style>

<div class="project-index">
  <a class="project-card" href="{{ '/dublin-bikes.html' | relative_url }}">
    <strong>Dublin Bikes</strong>
    <span>Large public dataset → pandas → SQLite/SQL → 24-hour rebalancing dashboard.</span>
  </a>

  <a class="project-card" href="{{ '/cycling.html' | relative_url }}">
    <strong>Strava Analysis</strong>
    <span>Real GPX → EDA → pandas feature engineering → SQLite/SQL → full-width interactive ride, motion, terrain and data-quality analysis.</span>
  </a>

  <a class="project-card" href="{{ '/mortgage-calculator.html' | relative_url }}">
    <strong>Mortgage Calculator</strong>
    <span>Interactive repayment, amortisation and long-term cash-flow model.</span>
  </a>

  <a class="project-card" href="{{ '/pcp-calculator.html' | relative_url }}">
    <strong>PCP Finance Comparator</strong>
    <span>Compare up to three offers for the same car using cash cost and present-value cost.</span>
  </a>
</div>