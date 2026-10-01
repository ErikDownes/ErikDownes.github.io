---
layout: doc
title: "AC4214 · Chapter 3 — Limiting Factors"
eyebrow: "ACCOUNTING FOR FINANCIAL DECISION MAKING · CHAPTER 3"
study_mode: true
ac4214_course: true
---

[← CVP]({{ '/education/ac4214/02-cvp-and-break-even.html' | relative_url }}) · [Course home]({{ '/modules/ac4214-accounting-for-financial-decision-making.html' | relative_url }}) · [Next: Budgeting →]({{ '/education/ac4214/04-budgeting-and-cash.html' | relative_url }})

<div class="ac4214-course" markdown="1">

<div class="ac-hero">
<p><strong>Central question:</strong> if every product is profitable but one resource is scarce, what should be produced first?</p>
<p>This chapter covers the limiting-factor lecture, the Kennedy material, tutorial skeleton/solution sets, the constrained-resource question/solution pack and the 2023-style tutorial question.</p>
</div>

## The constraint | Profitability is not enough

A <button data-ac-term="limiting factor">limiting factor</button> is a scarce resource that stops the firm from meeting all desired demand. Examples in the source material include labour hours, machine hours, materials and floor space.

When one resource is limiting, ranking products by contribution per unit can be wrong. The scarce resource must be brought into the denominator.

<div class="ac-formula">
<button data-ac-term="contribution per limiting factor">Contribution per limiting factor</button> = Contribution per unit ÷ Units of scarce resource required per product
</div>

## Five-step method

1. Identify whether the resource is genuinely limiting.
2. Calculate contribution per product unit.
3. Calculate contribution per unit of the scarce resource.
4. Rank products from highest to lowest.
5. Allocate the scarce resource in that order, respecting demand.

<div class="ac-worked">
<strong>Hockey plc — lecture example</strong>
<p>Wood: selling price €30, variable cost €12 → contribution €18; 2 labour hours → €9 contribution per labour hour.</p>
<p>Steel: selling price €40, variable cost €24 → contribution €16; 3 labour hours → €5.33 contribution per labour hour.</p>
<p>With 45,000 labour hours, make the demanded 10,000 wood sticks first (20,000 hours). The remaining 25,000 hours make 8,333 steel sticks. Total contribution is approximately €313,333.</p>
</div>

## Why fixed profit per unit is the wrong ranking

The constrained resource is already the bottleneck. Fixed costs normally do not change simply because the mix changes, so the objective is to maximise **total contribution** from the scarce resource.

A product with lower contribution per unit may still rank first if it consumes much less of the bottleneck.

<div class="ac-mcq" data-id="lf-rank" data-answer="2" data-explain="A yields €12 per machine hour; B yields €15 per machine hour. Under a machine-hour constraint, B ranks first.">
<strong>Product A contributes €24 and needs 2 machine hours. Product B contributes €15 and needs 1 machine hour. Which ranks first if machine hours are scarce?</strong>
<div class="ac-choices">
<button class="ac-choice">A, because €24 > €15</button>
<button class="ac-choice">They are equal</button>
<button class="ac-choice">B, because €15/hour > €12/hour</button>
</div><p class="ac-feedback"></p>
</div>

## Production-plan discipline

For each ranked product:

- satisfy demand if enough scarce resource remains;
- deduct the resource consumed;
- move to the next product;
- if insufficient resource remains, produce the fractional/whole-unit amount allowed by the context.

Then compute total contribution from the production plan.

<div class="ac-caution"><strong>Exam trap:</strong> always prove the resource is limiting before ranking. If available capacity is enough to satisfy all demand, there is no constrained-resource optimisation problem.</div>

## More than one limiting factor

The supplied material focuses on a single limiting factor. With multiple binding constraints, simple ranking may fail and the problem becomes a linear-programming / operations-research problem. That connection is useful because the degree later contains Operations Research.

<div class="ac-mcq" data-id="lf-first" data-answer="0" data-explain="Before ranking, calculate total resource required at demand and compare it with resource available.">
<strong>What is the first step in a limiting-factor question?</strong>
<div class="ac-choices">
<button class="ac-choice">Check whether the stated resource is actually scarce</button>
<button class="ac-choice">Rank by profit per unit</button>
<button class="ac-choice">Allocate all fixed costs</button>
</div><p class="ac-feedback"></p>
</div>

<div class="ac-interview">
<strong>Interview carry-out</strong>
<p>“The limiting-factor topic is really an optimisation problem. If capacity is constrained, I would rank activities by contribution earned per unit of the scarce resource, then allocate capacity subject to demand. It is a simple version of the same logic used later in operations research.”</p>
</div>

<div class="ac-confidence" data-id="lf-confidence">
<strong>If labour hours, machine hours or material kilograms become scarce, can you build the ranking and production plan from scratch?</strong>
</div>

<div class="ac-mastery"><strong>Mastery gate:</strong> all checks correct + confidence at <em>I know this</em>. <span data-ac-page-progress></span></div>

</div>
