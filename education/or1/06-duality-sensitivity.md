---
layout: doc
title: "Week 6 — Duality, Shadow Prices and Sensitivity"
eyebrow: "OPERATIONS RESEARCH I · WEEK 6"
study_mode: true
or1_course: true
mathjax: true
---

[← Operations Research I]({{ site.data.or1.home | relative_url }})

<div class="or-course" markdown="1">

<div class="or-hero"><h2>The dual asks what the resources are worth.</h2><p>Linear programming is not only about activity levels. Duality reveals marginal values, while sensitivity analysis asks whether the recommendation survives changes in the data.</p></div>

## Key line | Two views of the same optimisation

A primal maximisation problem of the form

\[
\max c^Tx
\quad\text{s.t.}\quad Ax\le b,;x\ge0
\]

has the dual

\[
\min b^Ty
\quad\text{s.t.}\quad A^Ty\ge c,;y\ge0.
\]

The primal (x) variables can be read as activity levels. The dual (y) variables can be read as implicit resource values.

## Shadow price | The value of one more unit

A <button data-or-term="shadow price">shadow price</button> is the marginal change in the optimal objective value when a right-hand-side resource amount changes by one unit, while the current basis remains valid.

If a resource is nonbinding with positive <button data-or-term="slack">slack</button>, its shadow price is typically zero: one extra unit does not help because some other restriction is already limiting the optimum.

If a resource is binding, its shadow price may be positive in a maximisation problem: additional capacity can create value.

<div class="or-application"><strong>Managerial interpretation:</strong> if an extra machine-hour improves optimal contribution by €18, then paying less than €18 for one extra hour may be attractive—<em>within the valid sensitivity range and before considering other real costs or constraints.</em></div>

## Complementarity | Slack and value fit together

Complementary slackness connects primal and dual structure.

Informally:

- if a resource has unused slack, its marginal value is zero;
- if a dual constraint has slack, the corresponding primal activity is zero;
- positive activity/value pairs tend to correspond to binding relationships.

This is one of the most elegant places where algebra and economics meet.

## Reduced cost | Why a zero variable stays out

A <button data-or-term="reduced cost">reduced cost</button> describes how much an objective coefficient would need to improve before a currently nonbasic activity would become attractive, under the current basis.

It answers a different question from the shadow price:

- **shadow price:** value of relaxing a constraint;
- **reduced cost:** attractiveness of changing/introducing an activity.

## Sensitivity | Do not oversell the optimum

<button data-or-term="sensitivity analysis">Sensitivity analysis</button> studies changes in:

- objective coefficients;
- resource availability;
- constraint coefficients;
- addition/removal of variables or constraints.

A shadow price is local. It should not be multiplied by a huge capacity change unless that change stays within the range for which the current basis remains optimal.

## Video | Duality embedded

<div class="or-video"><iframe loading="lazy" src="https://www.youtube-nocookie.com/embed/gmDwUCvOJQ8" title="Introduction to Duality — NPTEL" allowfullscreen></iframe></div>
<p class="or-video-caption">NPTEL · the economic interpretation is as important as the primal-to-dual conversion rules.</p>

## Dual simplex | When feasibility is the part that broke

The ordinary primal simplex maintains primal feasibility while improving optimality. The **dual simplex** is useful when a tableau is dual-feasible but primal-infeasible, such as after certain changes to right-hand sides or added constraints.

The conceptual contrast is worth retaining even if most practical work is solver-based.

## Check | Price versus slack

<div class="or-mcq" data-id="w6q1" data-answer="0" data-explain="A genuinely nonbinding resource with unused capacity normally has zero marginal value at the current optimum.">
<strong>A resource constraint has 25 units of unused slack at the optimum. What is the most likely shadow price?</strong>
<div class="or-choices">
<button class="or-choice" type="button">0</button>
<button class="or-choice" type="button">25</button>
<button class="or-choice" type="button">The objective coefficient of the largest product</button>
<button class="or-choice" type="button">It must be negative</button>
</div><p class="or-feedback"></p></div>

<div class="or-confidence" data-id="w6c1"><strong>Exit ticket:</strong> I can formulate the dual of a standard LP and explain shadow price, reduced cost, slack and sensitivity in decision language.</div>

</div>
