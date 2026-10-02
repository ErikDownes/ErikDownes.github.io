---
layout: doc
title: "Week 5 — Big-M and Two-Phase"
eyebrow: "OPERATIONS RESEARCH I · WEEK 5"
study_mode: true
or1_course: true
mathjax: true
---

[← Operations Research I]({{ site.data.or1.home | relative_url }})

<div class="or-course" markdown="1">

<div class="or-hero"><h2>What if the obvious starting corner does not exist?</h2><p>Big-M and Two-Phase are ways to manufacture a temporary starting basis and then remove the computational scaffolding.</p></div>

## Key line | Artificial variables are not real decisions

A greater-than-or-equal or equality constraint may fail to supply an identity-column variable for the initial simplex basis. An <button data-or-term="artificial variable">artificial variable</button> is introduced temporarily so the algorithm can start.

The final real solution must not depend on a positive artificial variable.

## Big-M | Penalise the artificial scaffold

For a minimisation problem, a large positive penalty (M) is attached to artificial variables. For a maximisation problem the sign is chosen so an artificial variable is extremely unattractive.

\[
\min Z = c^Tx + M\sum a_i,
\qquad M\gg 0.
\]

The model says: “use the artificial variables only to construct a start; drive them out if the real constraints are feasible.”

The danger of hand calculation is bookkeeping with (M). The conceptual test is simpler: **does the final basis contain an artificial variable with positive value?** If so, the original problem is infeasible.

## Two-Phase | Separate feasibility from optimisation

### Phase I

Optimise an auxiliary objective whose sole purpose is to eliminate artificial variables, often by minimising their sum.

If the minimum artificial total is positive, the original model is infeasible.

### Phase II

Remove the artificial variables and restore the original objective. Continue from the feasible basis found in Phase I.

This separates two questions:

1. **Can I find a feasible basis?**
2. **Among feasible bases, which optimises the real objective?**

## Compare | Big-M versus Two-Phase

| Big-M | Two-Phase |
|---|---|
| embeds feasibility and original objective in one penalised model | solves feasibility first, real objective second |
| convenient for symbolic hand work | conceptually clean and numerically preferable |
| careful algebra with (M) required | no arbitrary huge numerical penalty required |
| positive artificial variable at optimum signals infeasibility | positive Phase-I optimum signals infeasibility |

## Worked | A greater-than constraint

If

\[
2x_1+x_2\ge 6,
\]

subtract surplus:

\[
2x_1+x_2-s_1=6.
\]

The column for (-s_1) does not provide the needed positive identity basis. Add (a_1):

\[
2x_1+x_2-s_1+a_1=6.
\]

The artificial variable is a computational device, not extra production or capacity.

## Check | Diagnose Phase I

<div class="or-mcq" data-id="w5q1" data-answer="2" data-explain="A positive minimum sum of artificial variables means the original constraints cannot all be satisfied without the artificial scaffold.">
<strong>At the end of Phase I, the minimum sum of artificial variables is 3. What follows?</strong>
<div class="or-choices">
<button class="or-choice" type="button">The original objective is unbounded.</button>
<button class="or-choice" type="button">Phase II should begin from that solution.</button>
<button class="or-choice" type="button">The original LP is infeasible.</button>
<button class="or-choice" type="button">The optimum has alternate solutions.</button>
</div><p class="or-feedback"></p></div>

## Exam method | Keep the logic visible

For hand solutions:

- label slack, surplus and artificial variables clearly;
- state the Phase-I or Big-M objective;
- show the entering/leaving choice;
- never drop (M)-terms casually;
- check whether artificial variables have actually left the meaningful solution;
- finish with a sentence interpreting feasibility and the original objective.

<div class="or-confidence" data-id="w5c1"><strong>Exit ticket:</strong> I can explain why artificial variables are needed, distinguish Big-M from Two-Phase, and diagnose infeasibility from the auxiliary problem.</div>

</div>
