---
layout: doc
title: "Week 1 — Thinking Like an Operations Researcher"
eyebrow: "OPERATIONS RESEARCH I · WEEK 1"
study_mode: true
or1_course: true
mathjax: true
---

[← Operations Research I]({{ site.data.or1.home | relative_url }})

<div class="or-course" markdown="1">

<div class="or-hero"><h2>Before optimisation comes modelling.</h2><p>This week builds the intellectual framework: systems, model types, assumptions, the scientific decision cycle and the difference between a mathematical answer and a defensible decision.</p></div>

## Key line | What this week is really about

**Operations Research is not a collection of tricks. It is a disciplined way to move from a messy real system to a testable decision model and back again.**

## Model | Real system → representation

A model is a purposeful representation. It should preserve the structure that matters to the decision while discarding detail that does not.

The introductory material distinguishes three broad representations:

- **physical models** — scaled or tangible representations;
- **verbal models** — relationships expressed in natural language;
- **mathematical models** — variables, parameters and equations/inequalities representing system behaviour.

For this course, mathematical models dominate. But the verbal model comes first: if you cannot explain what the symbols mean, the formulation is not finished.

<div class="or-language">
<div><strong>Situation</strong><span>“We have limited machine time and several products.”</span></div>
<div><strong>Variables</strong><span>“Let (x_i) be the quantity of product (i).”</span></div>
<div><strong>Structure</strong><span>“Resource use cannot exceed capacity.”</span></div>
<div><strong>Decision</strong><span>“Choose the feasible production plan with greatest contribution.”</span></div>
</div>

## Assumptions | Why every model is conditional

A model is never simply “true.” It is useful under assumptions.

Ask:

- Is demand treated as known or random?
- Are costs linear?
- Can decision variables be fractional?
- Is one objective enough?
- Does the time horizon matter?
- Are interactions or qualitative effects being ignored?

This is where strong analysts separate themselves from mechanical solvers. They can state **what would have to be true for the recommendation to be credible**.

<div class="or-caution"><strong>Common mistake:</strong> treating a solver's output as a fact about the world. It is a fact about the model you supplied.</div>

## Cycle | The seven-step discipline

1. Define the decision and objective.
2. Identify controllable decisions and uncontrollable inputs.
3. Formulate the mathematical relationships.
4. Solve.
5. Validate against logic, data and edge cases.
6. Implement and monitor.
7. Revise when the system changes.

Validation should include dimensional checks. If a constraint combines hours and euros without a conversion, something is wrong. If an answer proposes a negative production quantity when that is impossible, the domain is wrong.

## Families | Recognising model classes

A useful professional skill is recognising structure before choosing an algorithm.

- **allocation / LP:** scarce resources allocated among competing activities;
- **transportation:** flow from sources to destinations;
- **dynamic programming:** linked decisions across stages;
- **decision analysis:** action under uncertain states of nature;
- **nonlinear optimisation:** objective or constraints have curvature;
- **queueing:** service capacity versus waiting;
- **inventory:** ordering versus holding/shortage;
- **simulation:** experiment with a stochastic model;
- **game theory:** strategic interaction between decision-makers.

The model class tells you which mathematics is likely to be useful.

## History | Why the subject emerged

Modern OR developed strongly during wartime when teams had to coordinate scarce equipment, logistics and tactics. Earlier queueing work by A. K. Erlang provided mathematical tools for congestion; George Dantzig's linear programming and simplex work later became foundational for resource allocation.

The historical lesson is more important than the dates: **when intuition alone becomes unreliable, formal models can improve the quality and auditability of decisions.**

## Check | Can you separate model from reality?

<div class="or-mcq" data-id="w1q1" data-answer="2" data-explain="The objective function is part of the model. It measures the chosen criterion; it is not the real system itself.">
<strong>Which statement is best?</strong>
<div class="or-choices">
<button class="or-choice" type="button">An optimal solution is always the best real-world decision.</button>
<button class="or-choice" type="button">A more complicated model is always more accurate.</button>
<button class="or-choice" type="button">The objective function formalises what the model treats as “better”.</button>
<button class="or-choice" type="button">Constraints are only computational devices.</button>
</div><p class="or-feedback"></p></div>

## Explain | Four sentences you should be able to produce

1. **What is OR?** A quantitative approach to modelling and improving decisions in systems with constraints and trade-offs.
2. **What is a model?** A purposeful abstraction containing the relationships needed for the decision.
3. **Why validate?** Because a mathematically correct optimum can still be operationally meaningless.
4. **Why software?** Because realistic models may contain thousands or millions of variables and constraints, while the modelling and interpretation remain human responsibilities.

<div class="or-confidence" data-id="w1c1"><strong>Exit ticket:</strong> I can take an unfamiliar decision situation and identify the likely variables, objective, constraints, assumptions and model family.</div>

</div>
