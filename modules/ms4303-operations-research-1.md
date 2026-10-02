---
layout: doc
title: "Operations Research I"
code: "MS4303"
year: "2nd"
semester: "Sem2"
status: "Core"
eyebrow: "2ND YEAR · SEM2 · COMPLETE WEB COURSE"
study_mode: true
or1_course: true
mathjax: true
description: "A complete Operations Research I course: modelling, linear programming, simplex, duality, transportation, dynamic programming, decision analysis and nonlinear optimisation."
---

[← LM058]({{ '/lm058.html' | relative_url }})

<div class="or-course" markdown="1">

<div class="or-hero">
<h2>Model → optimise → interpret → decide</h2>
<p><strong>This is a complete learning course, not a summary of lecture slides.</strong> It rebuilds the supplied university material into a self-contained sequence of concepts, mathematics, worked examples, language development, computation, applications and retrieval practice.</p>
<p>The central question is simple: <strong>when several actions are possible, resources are limited and consequences interact, how do we choose intelligently?</strong></p>
<div class="or-path"><span>Model</span><span>Feasibility</span><span>Optimality</span><span>Algorithms</span><span>Marginal value</span><span>Uncertainty</span><span>Interpretation</span></div>
</div>

## Big picture | What Operations Research is really about

<button data-or-term="operations research">Operations Research</button> is the mathematics of purposeful decision-making in systems. A real situation is translated into a model; the model identifies what can be chosen, what cannot be violated, and what counts as a better outcome; an algorithm searches the feasible possibilities; and the result is translated back into a decision.

The subject is not just “doing optimisation calculations.” It asks four different questions:

1. **Representation:** Have we modelled the real decision correctly?
2. **Feasibility:** Which choices satisfy every requirement?
3. **Optimality:** Which feasible choice is best under the stated objective?
4. **Interpretation:** What does the answer mean, how robust is it, and should it actually be implemented?

<div class="or-key"><strong>The deepest habit in the course:</strong> never optimise before you know what the variables, objective, constraints, units and assumptions mean.</div>

### The first concepts worth knowing

<div class="or-grid three">
<div class="or-card"><h3>A model is deliberately incomplete</h3><p>A useful model ignores detail that does not change the decision. More detail is not automatically a better model.</p></div>
<div class="or-card"><h3>Feasible comes before optimal</h3><p>An attractive answer is irrelevant if it violates a capacity, demand, budget or logical restriction.</p></div>
<div class="or-card"><h3>Optimal does not mean perfect</h3><p>An <button data-or-term="optimal solution">optimal solution</button> is best <em>inside the model</em>. Bad data or bad assumptions can still produce a bad real-world decision.</p></div>
<div class="or-card"><h3>Scarcity has a price</h3><p>A <button data-or-term="shadow price">shadow price</button> quantifies the marginal value of relaxing a binding resource constraint.</p></div>
<div class="or-card"><h3>Algorithms move through structure</h3><p>Simplex does not blindly test every possibility. It exploits the geometry of linear constraints and moves between strategically chosen corner solutions.</p></div>
<div class="or-card"><h3>Uncertainty changes the question</h3><p>Under risk we may have probabilities; under deeper uncertainty we may not. Decision criteria must match what is actually known.</p></div>
<div class="or-card"><h3>Time creates states</h3><p>Dynamic programming compresses the past into a <button data-or-term="state">state</button> and solves a multistage problem recursively.</p></div>
<div class="or-card"><h3>Constraints connect mathematics and economics</h3><p>Duality and Lagrange multipliers turn constraints from “annoying restrictions” into quantities with marginal-value meaning.</p></div>
<div class="or-card"><h3>Computation is not understanding</h3><p>A solver can return numbers in milliseconds. The analyst still has to formulate, validate and explain the model.</p></div>
</div>

## Anatomy | The common mathematical anatomy of a model

A large part of the course can be recognised in one template.

<div class="or-formula">

Choose decision variables
\[
x=(x_1,x_2,\ldots,x_n)
\]

to maximise or minimise an <button data-or-term="objective function">objective function</button>
\[
\operatorname{opt}\; f(x)
\]

subject to <button data-or-term="constraint">constraints</button>
\[
g_i(x)\le b_i,\qquad h_j(x)=d_j
\]

and domain restrictions such as
\[
x\ge0.
\]

</div>

The symbols have different jobs. The (x_i) are choices. Quantities such as costs, capacities and probabilities are <button data-or-term="parameter">parameters</button>. The constraints define the <button data-or-term="feasible region">feasible region</button>. The objective ranks feasible decisions. The algorithm finds a candidate optimum. Interpretation turns that mathematical answer into an operational recommendation.

<div class="or-language">
<div><strong>Mathematical</strong><span>“Maximise (c^Tx) subject to (Ax\le b).”</span></div>
<div><strong>Ordinary language</strong><span>“Choose quantities that give the highest value without exceeding the available resources.”</span></div>
<div><strong>Managerial</strong><span>“This is the best plan under the capacities and assumptions we supplied.”</span></div>
<div><strong>Analytical</strong><span>“Now test whether the answer survives realistic changes in the inputs.”</span></div>
</div>

## Method | The Operations Research cycle

The supplied introductory material presents OR as a scientific decision process. In modern language, the cycle is:

1. **Define the decision problem.** State the decision, stakeholders, horizon and measure of success.
2. **Formulate the model.** Choose variables, parameters, objective, constraints and assumptions.
3. **Solve it.** Use analytical mathematics, an algorithm or a numerical solver.
4. **Validate it.** Check units, feasibility, edge cases, sensitivity and whether outputs make operational sense.
5. **Interpret and implement.** Translate variables and objective values into actions.
6. **Monitor.** Compare real outcomes with model expectations.
7. **Revise.** Update data, assumptions or structure when the system changes.

This is why OR belongs as much to analytics and management science as it does to pure calculation.

## Field map | Where this course sits in the wider discipline

The introductory material surveys a much wider OR family. This course develops selected branches deeply while keeping the broader map visible.

| OR family | Main question | Place in this course |
|---|---|---|
| Linear / mathematical programming | How should scarce resources be allocated? | **Core** |
| Transportation models | How should flow move from sources to destinations? | **Core** |
| Dynamic programming | How do we optimise linked decisions over stages? | **Core** |
| Decision analysis | What should we do under risk or uncertainty? | **Core** |
| Nonlinear optimisation | How do derivatives, curvature and constraints determine optima? | **Core** |
| Goal programming | How can several targets and priorities be handled? | Extension / past-paper coverage |
| Game theory | How do decisions change when another decision-maker is strategic? | Extension / past-paper coverage |
| Inventory models | How much and when should we order? | Wider OR context |
| Queueing models | How do service capacity and waiting trade off? | Wider OR context |
| Network models | How do paths, flows and projects use graph structure? | Wider OR context |
| Simulation / Monte Carlo | What happens when we experiment with a stochastic model? | Wider OR context |
| Markov models | How does a system move probabilistically between states? | Wider OR context |

Historically, OR grew rapidly from military resource-allocation work during the Second World War; Erlang's earlier queueing work and Dantzig's development of linear programming/simplex are part of the intellectual background. The durable idea is not the history itself: it is that **complex operational decisions can be represented, tested and improved before resources are committed**.

## Course map | Thirteen-week learning path

<div class="or-week-grid">
<a class="or-week" data-or-chapter-path="/education/or1/01-or-worldview.html" href="{{ '/education/or1/01-or-worldview.html' | relative_url }}"><strong><span class="or-number">1</span> Thinking like an operations researcher</strong><small>Systems, model types, assumptions, the OR cycle and the language of decision models.</small><div class="or-progress"><span></span></div><div class="or-progress-meta"></div></a>
<a class="or-week" data-or-chapter-path="/education/or1/02-lp-formulation.html" href="{{ '/education/or1/02-lp-formulation.html' | relative_url }}"><strong><span class="or-number">2</span> Linear programming formulation</strong><small>Decision variables, objective, constraints, non-negativity and translating words into algebra.</small><div class="or-progress"><span></span></div><div class="or-progress-meta"></div></a>
<a class="or-week" data-or-chapter-path="/education/or1/03-graphical-lp.html" href="{{ '/education/or1/03-graphical-lp.html' | relative_url }}"><strong><span class="or-number">3</span> Geometry of linear programming</strong><small>Feasible regions, extreme points, iso-profit/cost lines, alternate, infeasible and unbounded cases.</small><div class="or-progress"><span></span></div><div class="or-progress-meta"></div></a>
<a class="or-week" data-or-chapter-path="/education/or1/04-simplex.html" href="{{ '/education/or1/04-simplex.html' | relative_url }}"><strong><span class="or-number">4</span> Simplex from first principles</strong><small>Standard form, bases, pivots, slack/surplus variables and the geometry behind the tableau.</small><div class="or-progress"><span></span></div><div class="or-progress-meta"></div></a>
<a class="or-week" data-or-chapter-path="/education/or1/05-big-m-two-phase.html" href="{{ '/education/or1/05-big-m-two-phase.html' | relative_url }}"><strong><span class="or-number">5</span> Big-M & Two-Phase</strong><small>Artificial variables, starting bases, infeasibility and disciplined tableau logic.</small><div class="or-progress"><span></span></div><div class="or-progress-meta"></div></a>
<a class="or-week" data-or-chapter-path="/education/or1/06-duality-sensitivity.html" href="{{ '/education/or1/06-duality-sensitivity.html' | relative_url }}"><strong><span class="or-number">6</span> Duality, shadow prices & sensitivity</strong><small>Primal/dual structure, resource valuation, reduced costs, sensitivity and dual simplex.</small><div class="or-progress"><span></span></div><div class="or-progress-meta"></div></a>
<a class="or-week" data-or-chapter-path="/education/or1/07-transportation.html" href="{{ '/education/or1/07-transportation.html' | relative_url }}"><strong><span class="or-number">7</span> Transportation models</strong><small>Balanced tables and initial feasible solutions: NW corner, least cost and Vogel.</small><div class="or-progress"><span></span></div><div class="or-progress-meta"></div></a>
<a class="or-week" data-or-chapter-path="/education/or1/08-modi.html" href="{{ '/education/or1/08-modi.html' | relative_url }}"><strong><span class="or-number">8</span> MODI & transportation optimality</strong><small>Potentials, opportunity costs, loops, degeneracy and systematic improvement.</small><div class="or-progress"><span></span></div><div class="or-progress-meta"></div></a>
<a class="or-week" data-or-chapter-path="/education/or1/09-dynamic-programming.html" href="{{ '/education/or1/09-dynamic-programming.html' | relative_url }}"><strong><span class="or-number">9</span> Dynamic programming</strong><small>Stages, states, recursion, Bellman's principle and backward optimisation.</small><div class="or-progress"><span></span></div><div class="or-progress-meta"></div></a>
<a class="or-week" data-or-chapter-path="/education/or1/10-decision-theory.html" href="{{ '/education/or1/10-decision-theory.html' | relative_url }}"><strong><span class="or-number">10</span> Decision theory & decision trees</strong><small>Certainty, risk, uncertainty, EMV, EOL, EVPI, Bayes and sequential decisions.</small><div class="or-progress"><span></span></div><div class="or-progress-meta"></div></a>
<a class="or-week" data-or-chapter-path="/education/or1/11-goals-games.html" href="{{ '/education/or1/11-goals-games.html' | relative_url }}"><strong><span class="or-number">11</span> Goals & strategic interaction</strong><small>Goal programming, deviations, priorities, zero-sum games and saddle points from the exam archive.</small><div class="or-progress"><span></span></div><div class="or-progress-meta"></div></a>
<a class="or-week" data-or-chapter-path="/education/or1/12-classical-optimization.html" href="{{ '/education/or1/12-classical-optimization.html' | relative_url }}"><strong><span class="or-number">12</span> Classical & unconstrained optimisation</strong><small>Derivatives, stationary points, gradients, Hessians and multivariable curvature.</small><div class="or-progress"><span></span></div><div class="or-progress-meta"></div></a>
<a class="or-week" data-or-chapter-path="/education/or1/13-constrained-integration.html" href="{{ '/education/or1/13-constrained-integration.html' | relative_url }}"><strong><span class="or-number">13</span> Constrained optimisation & integration</strong><small>Lagrange multipliers, KKT conditions, modern solvers, revision and an integrated modelling project.</small><div class="or-progress"><span></span></div><div class="or-progress-meta"></div></a>
</div>

## Language | Learn to speak the subject, not just perform it

A strong learner should be able to move between four forms of the same idea:

**situation → mathematical model → computational representation → decision explanation**

That is why the course deliberately develops vocabulary such as <button data-or-term="decision variable">decision variable</button>, <button data-or-term="feasible solution">feasible solution</button>, <button data-or-term="basic feasible solution">basic feasible solution</button>, <button data-or-term="duality">duality</button>, <button data-or-term="state">state</button>, <button data-or-term="expected monetary value">expected monetary value</button>, <button data-or-term="hessian">Hessian</button> and <button data-or-term="kkt conditions">KKT conditions</button>.

Every important term is clickable. After repeated lookups the site asks whether the scaffold should fade.

[Open the full Operations Research glossary →]({{ site.data.or1.glossary | relative_url }})

## Computation | How this mathematics is actually used now

Manual methods remain valuable because they expose structure. Industrial-scale models are normally solved by software.

| Learning method | What it teaches | Modern computational analogue |
|---|---|---|
| Graphical LP | Geometry and feasibility | plotting + solver verification |
| Simplex tableau | bases, pivots, optimality | LP solver internals |
| Big-M / Two-Phase | constructing feasibility | solver presolve / phase-I logic |
| Duality | marginal resource value | dual variables / shadow prices |
| Transportation heuristics | structured allocation | min-cost flow / LP solver |
| Dynamic programming table | state recursion | memoisation / value iteration |
| Lagrange / KKT | constrained first-order logic | nonlinear optimisation routines |

A practical Python toolkit for the independent version of this course is NumPy for vectors and matrices, pandas for operational data, SciPy for linear and nonlinear optimisation, and PuLP or OR-Tools for explicit optimisation modelling.

The key professional skill is not “I can call a solver.” It is **I can formulate a defensible model, test it, diagnose it and explain the result.**

## Evidence | Assessment and exam evidence from the supplied archive

The supplied material describes **two lecture hours plus one tutorial hour per week**, with a **20% assignment and 80% final examination**. The archive also contains tutorial sheets and solutions, assignment material, 2024/2025 exam papers and solutions, and an exam-preparation guide.

Across those materials, repeated assessed themes include:

- graphical LP and the interpretation of infeasible/unbounded cases;
- Big-M and Two-Phase;
- dual formulation and the principle of duality;
- transportation initial solutions and MODI;
- dynamic programming;
- decision-making under risk/uncertainty;
- multivariable optimisation and KKT in the later lecture sequence;
- goal programming and game theory in parts of the historical exam archive.

The teaching pages above are rewritten as an independent course. The detailed mapping back to the supplied university files is kept separately so it can later be removed without damaging the course.

[Open source & syllabus alignment →]({{ site.data.or1.source_alignment | relative_url }})

## Transfer | What you should be able to say after the course

> “Operations Research is about turning a decision into a mathematical model, identifying feasible alternatives, optimising an objective subject to constraints, and then interpreting how robust and useful the answer is. Linear programming teaches the core structure; duality gives resource values; transportation and dynamic programming exploit special structure; decision analysis handles uncertainty; and nonlinear optimisation extends the same logic beyond linear models.”

That is substantially stronger than “I did simplex and transportation tables.”

<button type="button" class="or-reset" data-or-reset>Reset Operations Research learning progress on this browser</button>

</div>
