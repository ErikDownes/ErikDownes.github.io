---
layout: doc
title: "Week 7 — Transportation Models"
eyebrow: "OPERATIONS RESEARCH I · WEEK 7"
study_mode: true
or1_course: true
mathjax: true
---

[← Operations Research I]({{ site.data.or1.home | relative_url }})

<div class="or-course" markdown="1">

<div class="or-hero"><h2>Exploit structure: not every LP should be treated as a generic table.</h2><p>The transportation problem is a structured linear programme for moving quantities from supply nodes to demand nodes at minimum cost or another linear objective.</p></div>

## Key line | Flow from sources to destinations

Let (x_{ij}) be the amount shipped from source (i) to destination (j), with unit cost (c_{ij}).

\[
\min \sum_i\sum_j c_{ij}x_{ij}
\]

subject to source supply and destination demand equations, with (x_{ij}\ge0).

The rectangular cost table is therefore not a different kind of mathematics; it is a specialised LP representation.

## Balance | Supply must meet demand in the table

A transportation problem is **balanced** when total supply equals total demand.

If supply exceeds demand, add a dummy destination for unused capacity. If demand exceeds supply, add a dummy source representing shortage/external supply according to the modelling interpretation.

A dummy route may have zero cost only when that is economically meaningful; sometimes a penalty cost is required.

## Start | Three initial feasible-solution methods

### North-West Corner

Allocate starting from the top-left feasible cell, exhausting a row or column at each step.

- fast;
- ignores costs;
- useful as a feasibility construction.

### Least Cost Method

Choose the lowest available unit-cost cell and allocate as much as possible.

- cost-aware;
- intuitive;
- still only a starting heuristic.

### Vogel's Approximation Method

For each row and column, compute a penalty based on the difference between the two lowest available costs. Allocate in the row/column with the highest penalty.

The penalty estimates the opportunity cost of *not* using the cheapest route.

## Worked | The logic of an allocation

Suppose source (S_1) has 30 units available and destination (D_2) still requires 18. If the chosen cell is (S_1\to D_2), allocate

\[
x_{12}=\min(30,18)=18.
\]

Then (D_2) is satisfied and removed from further allocation; (S_1) retains 12 units.

Every allocation step must update both remaining supply and remaining demand.

## Video | Transportation structure embedded

<div class="or-video"><iframe loading="lazy" src="https://www.youtube-nocookie.com/embed/Q31jKiEXxdc" title="Transportation Problems — NPTEL" allowfullscreen></iframe></div>
<p class="or-video-caption">NPTEL · transportation problem structure and solution logic.</p>

## Degeneracy | Count the occupied basic cells

For an (m\times n) balanced transportation problem, a nondegenerate basic feasible solution normally has

\[
m+n-1
\]

basic occupied cells.

If fewer are present, degeneracy must be handled carefully before applying an optimality method such as MODI.

## Check | What VAM is estimating

<div class="or-mcq" data-id="w7q1" data-answer="2" data-explain="The VAM penalty measures the difference between the cheapest and second-cheapest available choice in a row or column.">
<strong>What does the Vogel penalty represent?</strong>
<div class="or-choices">
<button class="or-choice" type="button">Total remaining supply.</button>
<button class="or-choice" type="button">The most expensive route in the table.</button>
<button class="or-choice" type="button">An estimate of the cost of losing the cheapest available route.</button>
<button class="or-choice" type="button">The shadow price of the final LP.</button>
</div><p class="or-feedback"></p></div>

<div class="or-confidence" data-id="w7c1"><strong>Exit ticket:</strong> I can formulate a transportation table, balance it appropriately and construct initial solutions using NW corner, least cost and Vogel.</div>

</div>
