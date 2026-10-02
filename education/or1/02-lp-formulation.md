---
layout: doc
title: "Week 2 — Linear Programming Formulation"
eyebrow: "OPERATIONS RESEARCH I · WEEK 2"
study_mode: true
or1_course: true
mathjax: true
---

[← Operations Research I]({{ site.data.or1.home | relative_url }})

<div class="or-course" markdown="1">

<div class="or-hero"><h2>Translate words into choices, value and limits.</h2><p>Linear programming begins with formulation. The algebra is usually easy; deciding what the algebra should represent is the real skill.</p></div>

## Key line | Formulation before calculation

A linear programme has a linear objective, linear constraints and a defined domain for its <button data-or-term="decision variable">decision variables</button>.

<div class="or-formula">
\[
\max\; c^Tx
\qquad\text{subject to}\qquad
Ax\le b,\quad x\ge0.
\]
</div>

The matrix notation is concise, but each symbol must still have units and meaning.

## Anatomy | Five things to write every time

1. **Decision variables:** what is controlled?
2. **Objective:** what is being maximised or minimised?
3. **Constraints:** what resources, requirements or relationships limit the choice?
4. **Bounds/domain:** non-negativity, upper bounds, integer restrictions if relevant.
5. **Units/assumptions:** what does one unit of each coefficient mean?

A coefficient such as (3x_1) in a labour constraint might mean **3 labour-hours per unit × number of units**.

## Worked | A product-mix model

A workshop makes products A and B. A earns €50 contribution and uses 2 machining hours; B earns €35 and uses 1 machining hour. Weekly machining capacity is 100 hours. A second finishing stage has 60 hours available; A uses 1 hour and B uses 1.5 hours.

Let

\[
x_A=\text{units of A},\qquad x_B=\text{units of B}.
\]

Maximise contribution:

\[
\max Z=50x_A+35x_B.
\]

Subject to machining:

\[
2x_A+x_B\le100,
\]

finishing:

\[
x_A+1.5x_B\le60,
\]

and

\[
x_A,x_B\ge0.
\]

Notice that **capacity numbers appear on the right-hand side; per-unit resource use appears beside the variables**.

## Language | Say the same model four ways

<div class="or-language">
<div><strong>Symbol</strong><span>(2x_A+x_B\le100)</span></div>
<div><strong>Units</strong><span>machining-hours used ≤ machining-hours available</span></div>
<div><strong>Ordinary</strong><span>the production plan cannot require more than 100 machining hours</span></div>
<div><strong>Managerial</strong><span>machining capacity limits which product mixes are feasible</span></div>
</div>

## Traps | Formulation errors that matter

- defining a variable as profit when profit should be calculated from quantities;
- mixing totals and per-unit values;
- reversing a minimum requirement;
- forgetting non-negativity or a genuine upper bound;
- including a constraint twice in different words;
- treating a nonlinear relationship as linear without justification;
- inventing decision variables for quantities the decision-maker cannot control.

## Video | Formulation lecture embedded

<div class="or-video"><iframe loading="lazy" src="https://www.youtube-nocookie.com/embed/a2QgdDk4Xjw" title="Introduction to Linear Programming Formulations — NPTEL" allowfullscreen></iframe></div>
<p class="or-video-caption">NPTEL · Fundamentals of Operations Research — use it to reinforce formulation, not as a substitute for the worked course.</p>

## Modern | Solve the model in Python

<pre><code class="language-python">from scipy.optimize import linprog

c = [-50, -35]
A_ub = [[2, 1], [1, 1.5]]
b_ub = [100, 60]
bounds = [(0, None), (0, None)]

result = linprog(c, A_ub=A_ub, b_ub=b_ub, bounds=bounds)
print(result.x, -result.fun)</code></pre>

The code is short because the difficult intellectual work happened before it.

## Check | What belongs where?

<div class="or-mcq" data-id="w2q1" data-answer="1" data-explain="A capacity is a right-hand-side parameter; the decision variable measures the chosen activity level.">
<strong>In a production-capacity LP, which statement is correct?</strong>
<div class="or-choices">
<button class="or-choice" type="button">Capacity should normally be a decision variable.</button>
<button class="or-choice" type="button">Capacity is normally a parameter limiting resource use.</button>
<button class="or-choice" type="button">The objective function defines feasibility.</button>
<button class="or-choice" type="button">Non-negativity is unnecessary if costs are positive.</button>
</div><p class="or-feedback"></p></div>

<div class="or-confidence" data-id="w2c1"><strong>Exit ticket:</strong> I can take a short business story and write variables with units, an objective, constraints and domain restrictions without starting the calculation first.</div>

</div>
