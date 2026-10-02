---
layout: doc
title: "Week 11 — Goal Programming and Game Theory"
eyebrow: "OPERATIONS RESEARCH I · WEEK 11 · ARCHIVE EXTENSION"
study_mode: true
or1_course: true
mathjax: true
---

[← Operations Research I]({{ site.data.or1.home | relative_url }})

<div class="or-course" markdown="1">

<div class="or-hero"><h2>What if there are several targets—or another strategic decision-maker?</h2><p>These topics appear in parts of the supplied exam archive. They are kept as a clearly identified extension so the independent course remains broader than any single year's lecture sequence.</p></div>

## Goals | From one objective to several targets

Linear programming normally optimises one scalar objective. <button data-or-term="goal programming">Goal programming</button> starts with target levels and minimises undesirable deviations from them.

For a target

\[
a^Tx=b,
\]

introduce under- and over-achievement variables:

\[
a^Tx+d^- - d^+=b,
\qquad d^-,d^+\ge0.
\]

Then penalise the deviations that matter.

Example: if a staffing goal is “at least 40 service-hours,” underachievement (d^-) may be penalised heavily while overachievement (d^+) may be acceptable.

## Priorities | Pre-emptive versus weighted goals

With **weighted goal programming**, deviations enter one combined weighted objective.

With **pre-emptive priorities**, a higher-priority goal is optimised first and cannot be sacrificed merely to improve a lower-priority goal.

This is useful when objectives are not genuinely commensurable.

## Games | Decisions depend on an opponent

In a two-player zero-sum game, one player's gain is the other's loss. A payoff matrix represents outcomes for one player.

Player A may use the **maximin** principle:

\[
\max_i\min_j a_{ij},
\]

while Player B uses **minimax**:

\[
\min_j\max_i a_{ij}.
\]

If

\[
\max_i\min_j a_{ij}
=
\min_j\max_i a_{ij},
\]

the game has a <button data-or-term="saddle point">saddle point</button> and a pure-strategy solution.

## Mixed strategies | When there is no saddle point

If no pure saddle point exists, players may randomise. For small games, expected payoff equations can determine optimal mixed-strategy probabilities.

The conceptual point is that “best action” now depends on anticipating another rational chooser.

## Compare | LP, goal programming and game theory

| Framework | Decision structure |
|---|---|
| LP | one decision-maker, one optimisation objective, constraints |
| Goal programming | one decision-maker, multiple target deviations/priorities |
| Game theory | strategic interaction; outcome depends on another chooser |

## Check | Why goal programming minimises deviations

<div class="or-mcq" data-id="w11q1" data-answer="3" data-explain="Goal programming represents unmet/exceeded targets explicitly and minimises the undesirable deviations according to weights or priorities.">
<strong>Why is goal programming commonly written as a minimisation problem?</strong>
<div class="or-choices">
<button class="or-choice" type="button">All original objectives must be costs.</button>
<button class="or-choice" type="button">It cannot contain greater-than constraints.</button>
<button class="or-choice" type="button">It always has a saddle point.</button>
<button class="or-choice" type="button">It minimises undesirable deviations from stated goals.</button>
</div><p class="or-feedback"></p></div>

<div class="or-confidence" data-id="w11c1"><strong>Exit ticket:</strong> I can explain deviation variables, priority goals, maximin/minimax and the meaning of a saddle point.</div>

</div>
