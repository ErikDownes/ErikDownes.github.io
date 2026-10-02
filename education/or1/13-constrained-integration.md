---
layout: doc
title: "Week 13 — Constrained Optimisation and Integration"
eyebrow: "OPERATIONS RESEARCH I · WEEK 13"
study_mode: true
or1_course: true
mathjax: true
---

[← Operations Research I]({{ site.data.or1.home | relative_url }})

<div class="or-course" markdown="1">

<div class="or-hero"><h2>Bring the entire course together.</h2><p>Lagrange multipliers and KKT conditions extend optimisation to constrained nonlinear problems. The final section then connects hand methods to modern solver workflows and integrated decision modelling.</p></div>

## Equality constraints | Lagrange multipliers

To optimise (f(x)) subject to

\[
g(x)=0,
\]

form the <button data-or-term="lagrangian">Lagrangian</button>

\[
\mathcal L(x,\lambda)=f(x)+\lambda g(x).
\]

First-order conditions are

\[
\nabla_x\mathcal L=0,
\qquad
g(x)=0.
\]

Geometrically, at a regular constrained optimum the objective contour and constraint surface are tangent:

\[
\nabla f(x^*)=-\lambda\nabla g(x^*).
\]

The <button data-or-term="lagrange multiplier">Lagrange multiplier</button> often has a marginal-value interpretation related to relaxing the constraint.

## Video | Lagrange multipliers embedded

<div class="or-video"><iframe loading="lazy" src="https://www.youtube-nocookie.com/embed/yuqB-d5MjZA" title="Lagrange multipliers using tangency — Khan Academy" allowfullscreen></iframe></div>
<p class="or-video-caption">Khan Academy · visual tangency interpretation of equality-constrained optimisation.</p>

## Inequalities | KKT conditions

For a minimisation problem with inequalities written

\[
g_i(x)\le0,
\]

the <button data-or-term="kkt conditions">Karush–Kuhn–Tucker conditions</button> include:

1. **stationarity**
   \[
   \nabla f(x^*)+\sum_i\lambda_i\nabla g_i(x^*)=0;
   \]
2. **primal feasibility**
   \[
   g_i(x^*)\le0;
   \]
3. **dual feasibility**
   \[
   \lambda_i\ge0;
   \]
4. **complementary slackness**
   \[
   \lambda_i g_i(x^*)=0.
   \]

The exact sign convention depends on how the inequalities are written. State your convention and remain consistent.

## Complementarity | Binding versus priced

<button data-or-term="complementary slackness">Complementary slackness</button> says each inequality has a choice:

- inactive constraint: (g_i(x^*)<0) and (lambda_i=0);
- potentially valuable binding constraint: (g_i(x^*)=0) and (lambda_i\ge0).

This mirrors the LP relationship between slack and shadow price.

## Integration | One conceptual spine across the course

| Topic | Core structural idea |
|---|---|
| Graphical LP | feasible set + objective |
| Simplex | move between bases/extreme points |
| Big-M / Two-Phase | establish feasibility before optimisation |
| Duality | constraints have marginal values |
| Transportation | exploit network/table structure |
| Dynamic programming | exploit stage/state recursion |
| Decision theory | model uncontrollable states and information |
| Goal programming | optimise deviations from multiple targets |
| Calculus optimisation | use local derivative/curvature information |
| Lagrange / KKT | optimality conditions with active constraints |

The course is therefore much more coherent than a list of methods.

## Modern workflow | How a real project should look

1. load and validate data;
2. define decision variables with units;
3. formulate objective and constraints in code;
4. solve;
5. assert feasibility programmatically;
6. inspect duals/marginals/sensitivity where available;
7. stress-test scenarios;
8. visualise relevant trade-offs;
9. explain recommendation, assumptions and failure modes;
10. save the model and data so the analysis is reproducible.

## Capstone | Build a small decision system

Create an original model in a domain such as:

- aircraft allocation or lease-transition planning;
- hospital staffing or theatre capacity;
- product mix and scarce resources;
- transport/distribution;
- cycling support logistics;
- portfolio of projects under budget/capacity constraints.

Minimum deliverables:

- a plain-language decision statement;
- variables, units and assumptions;
- mathematical formulation;
- hand-worked small case;
- Python solution of a larger case;
- one sensitivity or scenario analysis;
- interpretation in nontechnical language;
- validation checks;
- one limitation and proposed model improvement.

That project turns the course into evidence rather than just revision.

## Exam | Retrieval checklist

Without notes, be able to reconstruct:

- graphical LP, special cases and iso-lines;
- simplex vocabulary and pivot logic;
- Big-M and Two-Phase;
- primal ↔ dual formulation;
- shadow prices and sensitivity;
- NW corner, least cost, VAM and MODI;
- dynamic-programming recurrence;
- certainty/risk/uncertainty, EMV/EOL/EVPI;
- goal-programming deviation variables and game-theory saddle point;
- gradient/Hessian tests;
- Lagrange and all KKT conditions.

<div class="or-mcq" data-id="w13q1" data-answer="3" data-explain="Complementary slackness links activity of a constraint and its multiplier: an inactive constraint has zero multiplier under the standard KKT setup.">
<strong>Which KKT idea most directly connects a nonbinding inequality with a zero multiplier?</strong>
<div class="or-choices">
<button class="or-choice" type="button">Primal feasibility</button>
<button class="or-choice" type="button">Stationarity</button>
<button class="or-choice" type="button">Dual feasibility</button>
<button class="or-choice" type="button">Complementary slackness</button>
</div><p class="or-feedback"></p></div>

<div class="or-confidence" data-id="w13c1"><strong>Final exit ticket:</strong> I can recognise the structure of a new optimisation problem, choose an appropriate method/solver, validate the result and explain what the mathematics means for the decision.</div>

</div>
