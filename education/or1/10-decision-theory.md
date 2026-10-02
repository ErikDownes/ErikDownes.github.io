---
layout: doc
title: "Week 10 — Decision Theory and Decision Trees"
eyebrow: "OPERATIONS RESEARCH I · WEEK 10"
study_mode: true
or1_course: true
mathjax: true
---

[← Operations Research I]({{ site.data.or1.home | relative_url }})

<div class="or-course" markdown="1">

<div class="or-hero"><h2>Optimisation changes when the future is not known.</h2><p>Decision theory distinguishes certainty, risk and uncertainty, then matches the decision rule to the information actually available.</p></div>

## Environments | Certainty, risk and uncertainty

**Certainty:** the relevant consequence of each action is treated as known.

**Risk:** several <button data-or-term="state of nature">states of nature</button> are possible and probabilities are available or defensibly estimated.

**Uncertainty:** states are known but reliable probabilities are not available.

Do not use expected value mechanically when there is no credible probability model.

## Payoff matrix | Decisions × states

A <button data-or-term="payoff">payoff</button> (p_{ij}) is the outcome if decision (i) is chosen and state (j) occurs.

Under risk, with state probabilities (q_j), the <button data-or-term="expected monetary value">expected monetary value</button> of decision (i) is

\[
EMV_i=\sum_j q_jp_{ij}.
\]

Choose the largest EMV for a payoff-maximisation problem.

## Regret | Expected opportunity loss

For each state, define regret as the difference between the best payoff available in that state and the payoff from the chosen action.

Then

\[
EOL_i=\sum_j q_j r_{ij}.
\]

Minimising EOL selects the same decision as maximising EMV when constructed consistently.

## Information | EVPI

<button data-or-term="evpi">Expected value of perfect information</button> is

\[
EVPI=EV_{\text{with perfect information}}-\max_i EMV_i.
\]

It is the upper bound on what perfect foresight would be worth before paying for information.

## Trees | Decisions unfold over time

A <button data-or-term="decision tree">decision tree</button> represents:

- square nodes: choices;
- circular nodes: chance events;
- branches: actions or outcomes;
- terminal values: final payoffs.

Solve by **folding back** from right to left. At chance nodes take expectation; at decision nodes choose the preferred branch.

This naturally handles “should we buy information first?” questions.

## Bayesian update | New evidence changes probabilities

If evidence (E) arrives,

\[
P(S_i\mid E)=
\frac{P(E\mid S_i)P(S_i)}
{\sum_k P(E\mid S_k)P(S_k)}.
\]

The posterior probability becomes the input to the subsequent decision calculation.

## Uncertainty criteria | When probabilities are unavailable

Common rules include:

- **maximax:** optimistic — choose the decision with the best possible payoff;
- **maximin:** conservative — choose the best worst-case payoff;
- **minimax regret:** minimise worst possible regret;
- **Hurwicz:** weighted optimism/pessimism;
- **Laplace:** treat states as equally likely when that assumption is deliberately adopted.

Each rule embeds an attitude or assumption. State it.

## Check | Value of perfect information

<div class="or-mcq" data-id="w10q1" data-answer="1" data-explain="EVPI is the improvement in expected value from knowing the future state perfectly before acting.">
<strong>What does EVPI measure?</strong>
<div class="or-choices">
<button class="or-choice" type="button">The probability that the best decision succeeds.</button>
<button class="or-choice" type="button">The maximum expected amount worth paying for perfect foresight.</button>
<button class="or-choice" type="button">The largest payoff in the matrix.</button>
<button class="or-choice" type="button">The regret of the worst decision.</button>
</div><p class="or-feedback"></p></div>

<div class="or-application"><strong>Asset-management example:</strong> lease extension, sale or remarketing may have different payoffs under strong, normal and weak market states. Decision theory forces the analyst to separate controllable choices from external states and to quantify the value of better information.</div>

<div class="or-confidence" data-id="w10c1"><strong>Exit ticket:</strong> I can distinguish certainty/risk/uncertainty, calculate EMV, EOL and EVPI, and fold back a decision tree.</div>

</div>
