---
layout: doc
title: "Week 9 — Dynamic Programming"
eyebrow: "OPERATIONS RESEARCH I · WEEK 9"
study_mode: true
or1_course: true
mathjax: true
---

[← Operations Research I]({{ site.data.or1.home | relative_url }})

<div class="or-course" markdown="1">

<div class="or-hero"><h2>Break one difficult decision into linked smaller decisions.</h2><p>Dynamic programming is built for multistage problems. The art is choosing a state that carries exactly the information the future needs.</p></div>

## Key line | Stage, state, decision, recurrence

A DP model needs four objects:

- <button data-or-term="stage">stage</button> — where we are in the sequence;
- <button data-or-term="state">state</button> — the information required from the past;
- decision/action — what is chosen at the current stage;
- value function — best achievable future value from that state.

The <button data-or-term="bellman principle">Bellman principle</button> says an optimal policy contains optimal continuation decisions from every state reached along it.

## Recurrence | The mathematical engine

A generic finite-horizon maximisation recurrence is

\[
V_t(s)=\max_{a\in A_t(s)}
\left\{r_t(s,a)+V_{t+1}(T_t(s,a))\right\}.
\]

Read it in English:

> From state (s) at stage (t), choose the feasible action (a) that gives the best immediate reward plus the best future value from the resulting next state.

That one sentence is more valuable than memorising a table layout.

## Backward | Why solve from the end?

At the final stage the remaining problem is simplest. Once its value function is known, the previous stage can treat that future value as known. Continue backward until reaching the initial state.

This is **backward induction**.

## Worked | Resource allocation

Suppose 6 units of a resource must be split between projects A and B. Let (x) be the amount sent to A, leaving (6-x) for B.

If project returns are nonlinear, enumerate feasible integer allocations:

\[
V(6)=\max_{x\in\{0,1,\ldots,6\}}
\{R_A(x)+R_B(6-x)\}.
\]

For many stages, store subproblem values rather than recomputing them.

## Python | Memoisation makes the recurrence explicit

<pre><code class="language-python">from functools import lru_cache

returns = [
    [0, 4, 7, 9, 10],
    [0, 3, 6, 8, 11]
]

@lru_cache(None)
def value(stage, remaining):
    if stage == len(returns):
        return 0
    best = float("-inf")
    for x in range(min(remaining, len(returns[stage]) - 1) + 1):
        best = max(best, returns[stage][x] + value(stage + 1, remaining - x))
    return best</code></pre>

The code mirrors the recurrence; it does not replace the need to define a valid state.

## LP via DP | Why the course includes it

The supplied material also applies dynamic programming to selected linear-programming problems. That is pedagogically useful because it shows the same mathematical problem can sometimes be attacked through different structure.

The question becomes: **what state captures the remaining capacity and what stage corresponds to the next decision variable?**

## Check | What makes a good state?

<div class="or-mcq" data-id="w9q1" data-answer="2" data-explain="The state should summarise the past sufficiently for optimal future decisions without carrying irrelevant history.">
<strong>What is the best description of a DP state?</strong>
<div class="or-choices">
<button class="or-choice" type="button">Every event that has happened so far.</button>
<button class="or-choice" type="button">The objective value only.</button>
<button class="or-choice" type="button">The information from the past needed to make optimal future decisions.</button>
<button class="or-choice" type="button">A simplex basis.</button>
</div><p class="or-feedback"></p></div>

<div class="or-confidence" data-id="w9c1"><strong>Exit ticket:</strong> I can identify stages, states, actions and a recurrence, and explain why backward induction is valid.</div>

</div>
