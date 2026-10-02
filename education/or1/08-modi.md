---
layout: doc
title: "Week 8 — MODI and Transportation Optimality"
eyebrow: "OPERATIONS RESEARCH I · WEEK 8"
study_mode: true
or1_course: true
mathjax: true
---

[← Operations Research I]({{ site.data.or1.home | relative_url }})

<div class="or-course" markdown="1">

<div class="or-hero"><h2>A feasible shipment plan is only the start.</h2><p>MODI tests whether an existing transportation basis is optimal and, if not, identifies a closed-loop reallocation that lowers cost.</p></div>

## Key line | Potentials turn a table into marginal information

For each occupied basic cell ((i,j)), MODI chooses row and column potentials (u_i,v_j) satisfying

\[
u_i+v_j=c_{ij}.
\]

Set one potential—commonly (u_1=0)—and solve the remaining equations across occupied cells.

For an unoccupied cell, compute a reduced/opportunity cost such as

\[
\Delta_{ij}=c_{ij}-(u_i+v_j).
\]

Under this convention for minimisation, a negative (Delta_{ij}) indicates an improving route.

## Loop | Why plus and minus alternate

When a nonbasic cell enters, supply and demand totals must remain unchanged. Therefore adjustments occur around a closed orthogonal loop.

Mark the entering cell (+), then alternate

\[
+,-,+,-,\ldots
\]

around the loop.

The maximum permissible adjustment is the smallest allocation in a cell carrying a minus sign. That cell leaves the basis.

This is transportation-simplex logic in a visual table.

## Worked | Opportunity cost interpretation

If an unoccupied route has

\[
\Delta_{24}=-6,
\]

then introducing that route along its feasible adjustment loop can reduce total transportation cost at a marginal rate of 6 per unit initially.

It is not enough to write “negative therefore enter.” Explain **why** negative means the current plan is improvable.

## Video | Optimal transportation solution embedded

<div class="or-video"><iframe loading="lazy" src="https://www.youtube-nocookie.com/embed/RnZnIIksdwU" title="Transportation Problem — Optimal Solutions — NPTEL" allowfullscreen></iframe></div>
<p class="or-video-caption">NPTEL · connect the MODI potentials to reduced-cost logic from linear programming.</p>

## Errors | What usually goes wrong

- solving (u_i,v_j) from nonbasic cells;
- inconsistent sign convention for (Delta_{ij});
- drawing a loop with diagonal moves;
- failing to alternate plus/minus;
- choosing a step larger than a minus allocation;
- forgetting the (m+n-1) basis count;
- changing row/column totals after reallocation.

## Check | Why the loop is necessary

<div class="or-mcq" data-id="w8q1" data-answer="1" data-explain="Alternating changes around a closed loop preserve each affected row and column total, so supply and demand remain feasible.">
<strong>Why does MODI adjust allocations around a closed alternating loop?</strong>
<div class="or-choices">
<button class="or-choice" type="button">To make the table square.</button>
<button class="or-choice" type="button">To preserve all affected supply and demand totals.</button>
<button class="or-choice" type="button">To calculate Vogel penalties.</button>
<button class="or-choice" type="button">To force every route to be occupied.</button>
</div><p class="or-feedback"></p></div>

## Connection | MODI is not an isolated trick

MODI is a specialised manifestation of familiar LP ideas:

- basic cells ↔ basis;
- unoccupied cells ↔ nonbasic variables;
- potentials ↔ dual variables;
- opportunity costs ↔ reduced costs;
- loop update ↔ pivot.

Seeing those connections turns several “methods” into one coherent theory.

<div class="or-confidence" data-id="w8c1"><strong>Exit ticket:</strong> I can compute MODI potentials, interpret opportunity costs and construct a valid improving loop without losing feasibility.</div>

</div>
