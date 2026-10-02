---
layout: doc
title: "Operations Research I — Glossary"
eyebrow: "OPERATIONS RESEARCH I · LANGUAGE & CONCEPTS"
study_mode: true
or1_course: true
mathjax: true
---

[← Operations Research I]({{ site.data.or1.home | relative_url }})

<div class="or-course" markdown="1">

<div class="or-hero"><h2>Language is part of the mathematics.</h2><p>The goal is not to memorise isolated definitions. For each term, be able to define it, recognise it in a model, give an example and explain why it matters.</p></div>

## Core model | Model anatomy

| Term | Meaning | Recall cue |
|---|---|---|
| Decision variable | quantity the decision-maker chooses | What can I control? |
| Parameter | model input treated as fixed | What data are given? |
| Objective function | measure being maximised/minimised | What does better mean? |
| Constraint | restriction on feasible decisions | What limits me? |
| Feasible solution | satisfies every constraint and domain rule | Allowed choice |
| Feasible region | set of all feasible solutions | All allowed choices |
| Optimal solution | feasible solution with best model objective | Best within the model |
| Binding constraint | holds as equality at the solution | Fully used / active |
| Slack | unused capacity in a ≤ constraint | Available − used |
| Surplus | amount above a ≥ minimum | Actual − required |

## Linear programming | Algorithm language

| Term | Meaning |
|---|---|
| Extreme point | corner of a polyhedral feasible region |
| Basic feasible solution | basis representation of a feasible corner |
| Basis | selected columns/variables defining the current basic solution |
| Nonbasic variable | variable fixed at its bound, commonly zero, in the current basis |
| Pivot | basis exchange produced by row operations |
| Artificial variable | temporary starting-basis device |
| Big-M | artificial-variable penalty method |
| Phase I | auxiliary optimisation to find feasibility |
| Phase II | optimisation of the original objective after feasibility |
| Degeneracy | a basic feasible solution with one or more basic variables at zero |
| Unbounded | objective can improve indefinitely while remaining feasible |
| Infeasible | no point satisfies all constraints |

## Duality | Economic interpretation

| Term | Meaning |
|---|---|
| Primal | the LP chosen as the original viewpoint |
| Dual | associated LP expressing complementary resource/value structure |
| Shadow price | marginal objective value of one more RHS resource unit, locally |
| Reduced cost | objective-coefficient improvement needed for a nonbasic variable to become attractive |
| Sensitivity analysis | effect of changing model coefficients or capacities |
| Complementary slackness | link between slack/activity in primal and dual relationships |

## Transportation | Structured flow

| Term | Meaning |
|---|---|
| Balanced problem | total supply equals total demand |
| Dummy source/destination | modelling device used to balance totals |
| North-West Corner | position-based initial allocation rule |
| Least Cost | allocate first to cheapest available cells |
| Vogel Approximation | penalty-based initial allocation heuristic |
| MODI | potential/reduced-cost optimality method for transportation |
| Opportunity cost | marginal cost change for introducing a currently unoccupied route |
| Loop | closed orthogonal path used to preserve supply/demand during a pivot |

## Dynamic programming | Multistage language

| Term | Meaning |
|---|---|
| Stage | one point in the decision sequence |
| State | compact information needed for future optimisation |
| Action | decision taken at a state |
| Value function | best achievable future value from a state |
| Bellman principle | optimal policy contains optimal continuation policies |
| Backward induction | solve later stages first and recurse backward |

## Decisions | Risk and uncertainty

| Term | Meaning |
|---|---|
| State of nature | external scenario outside the decision-maker's control |
| Payoff | outcome for a decision-state combination |
| EMV | probability-weighted expected payoff |
| Regret | loss relative to the best action for the realised state |
| EOL | probability-weighted expected regret |
| EVPI | value of perfect foresight |
| Decision tree | sequential graph of decisions and chance events |
| Posterior probability | probability after incorporating evidence |
| Maximax | optimistic uncertainty rule |
| Maximin | conservative worst-case rule |
| Minimax regret | minimise maximum possible regret |

## Nonlinear optimisation | Calculus language

| Term | Meaning |
|---|---|
| Stationary point | derivative/gradient equals zero |
| Gradient | vector of first partial derivatives |
| Hessian | matrix of second partial derivatives |
| Positive definite | local upward curvature in every nonzero direction |
| Negative definite | local downward curvature in every nonzero direction |
| Lagrangian | objective plus weighted constraints |
| Lagrange multiplier | constraint multiplier with marginal interpretation under suitable conditions |
| KKT | constrained first-order conditions including inequalities |
| Complementary slackness | either inequality slack or multiplier activity, linked multiplicatively |

## Practice | Definition → example → implication

For every term above, practise this three-part response:

> **Definition:** what it is.  
> **Example:** where it appears in a model.  
> **Implication:** what it tells the decision-maker.

That structure creates usable professional vocabulary rather than passive recognition.

<button type="button" class="or-reset" data-or-reset>Reset Operations Research glossary support on this browser</button>

</div>
