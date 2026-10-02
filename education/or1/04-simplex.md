---
layout: doc
title: "Week 4 — Simplex from First Principles"
eyebrow: "OPERATIONS RESEARCH I · WEEK 4"
study_mode: true
or1_course: true
mathjax: true
---

[← Operations Research I]({{ site.data.or1.home | relative_url }})

<div class="or-course" markdown="1">

<div class="or-hero"><h2>Simplex is the graphical corner method in higher dimensions.</h2><p>The tableau can look procedural. The important idea is structural: move from one basic feasible corner to an adjacent one that improves the objective.</p></div>

## Key line | What simplex is doing

The graphical method cannot display three, fifty or fifty thousand decision variables. The simplex method retains the corner-point logic algebraically.

A <button data-or-term="basic feasible solution">basic feasible solution</button> is the algebraic representation of a corner. A <button data-or-term="pivot">pivot</button> changes the basis and moves to an adjacent corner.

## Standard form | Turn inequalities into equations

For a constraint

\[
2x_1+x_2\le 10,
\]

add a <button data-or-term="slack">slack</button> variable:

\[
2x_1+x_2+s_1=10,\qquad s_1\ge0.
\]

The slack has an immediate interpretation:

\[
s_1=\text{capacity available}-\text{capacity used}.
\]

For a (ge) constraint, subtract a <button data-or-term="surplus variable">surplus variable</button>. That alone may not create a convenient starting basis, which motivates artificial-variable methods in Week 5.

## Basis | Why some variables are “basic”

With (m) independent equality constraints, a simplex basis normally contains (m) basic variables. Nonbasic variables are temporarily set to zero; the equations determine the basic variables.

Simplex then asks:

- Is the current basis feasible?
- Can a nonbasic variable improve the objective?
- Which basic variable must leave to preserve feasibility?
- After the pivot, are we optimal?

The “entering variable” and “leaving variable” are therefore not arbitrary tableau rituals.

## Geometry | The ratio test

Increasing an entering variable changes the basic variables. The minimum nonnegative ratio identifies which current basic variable hits zero first. That is the next boundary/corner.

This is why the ratio test protects feasibility.

## Video | Simplex algorithm embedded

<div class="or-video"><iframe loading="lazy" src="https://www.youtube-nocookie.com/embed/qxls3cYg8to" title="Linear Programming Solutions — Simplex Algorithm — NPTEL" allowfullscreen></iframe></div>
<p class="or-video-caption">NPTEL · use the video to connect tableau operations to basis changes.</p>

## Worked | Translate a tableau statement into meaning

Suppose a resource slack variable (s_2) is basic with value 12 at the optimum.

That does **not** mean “(s_2=12)” is an abstract output to memorise. It means:

> resource 2 has 12 units of unused capacity at the optimal plan.

If a product variable is nonbasic at zero, the current optimal mix does not use that activity. Week 6 will ask what objective improvement would be required before it becomes attractive.

## Check | Why the ratio test exists

<div class="or-mcq" data-id="w4q1" data-answer="1" data-explain="The ratio test limits movement in the entering direction so that no basic variable becomes negative.">
<strong>What is the main role of the simplex ratio test?</strong>
<div class="or-choices">
<button class="or-choice" type="button">Choose the variable with the largest objective coefficient.</button>
<button class="or-choice" type="button">Preserve feasibility while moving to the next basis.</button>
<button class="or-choice" type="button">Calculate a shadow price directly.</button>
<button class="or-choice" type="button">Detect whether a model is linear.</button>
</div><p class="or-feedback"></p></div>

## Modern | The algorithm versus the interface

A solver may use simplex, dual simplex, interior-point or hybrid methods. You usually provide the model rather than a tableau. Learning simplex still matters because it explains:

- why vertices/bases matter;
- where dual values come from;
- how degeneracy can occur;
- what “binding” and “nonbasic” mean;
- why an LP solver can certify optimality.

<div class="or-confidence" data-id="w4c1"><strong>Exit ticket:</strong> I can explain slack, a basis, entering/leaving variables and a pivot without relying on “because that is the table rule.”</div>

</div>
