---
layout: doc
title: "AC4214 · Chapter 1 — Foundations & Relevant Costs"
eyebrow: "ACCOUNTING FOR FINANCIAL DECISION MAKING · CHAPTER 1"
study_mode: true
ac4214_course: true
---

[← Course home]({{ '/modules/ac4214-accounting-for-financial-decision-making.html' | relative_url }}) · [Next: CVP →]({{ '/education/ac4214/02-cvp-and-break-even.html' | relative_url }})

<div class="ac4214-course" markdown="1">

<div class="ac-hero">
<p><strong>Central question:</strong> when a decision changes the future, which numbers actually belong in the decision?</p>
<p>This chapter absorbs the Week 1 lecture, Tutorial 1 questions/answers and the relevant-cost question/solution pack. It also lays the cost-behaviour foundation used by CVP, budgeting and later exam questions.</p>
</div>

## Cost behaviour | Fixed, variable, stepped and mixed

A <button data-ac-term="variable cost">variable cost</button> changes in total as activity changes. Direct materials and activity-driven labour are common examples. A <button data-ac-term="fixed cost">fixed cost</button> stays constant in total within the relevant range and time horizon — rent and salaries may behave this way in the short run.

A <button data-ac-term="stepped fixed cost">stepped fixed cost</button> is fixed only until capacity is exhausted. A second supervisor, additional premises or another machine may then create a jump. A <button data-ac-term="semi-variable cost">semi-variable cost</button> contains both a fixed element and a variable element.

<div class="ac-caution"><strong>Per-unit trap:</strong> a fixed cost is fixed in total, not per unit. If total fixed cost is €40,000, the fixed cost per unit falls as more units are produced.</div>

### High-low method

The archive teaches the <button data-ac-term="high-low method">high-low method</button> as a quick way to split a mixed total cost.

<div class="ac-formula">
Variable cost per unit = (Cost at high activity − Cost at low activity) ÷ (High activity − Low activity)

Fixed cost = Total cost − (Variable cost per unit × Activity)
</div>

<div class="ac-worked">
<strong>Worked example from the lecture</strong>
<p>10,000 pens cost €30,000 in total; 15,000 pens cost €35,000.</p>
<p>The extra 5,000 pens create an extra €5,000 cost, so variable cost = €1 per pen. At 10,000 pens the variable element is €10,000, leaving fixed cost of €20,000.</p>
</div>

<div class="ac-mcq" data-id="found-highlow" data-answer="1" data-explain="The €9,000 increase relates to 3,000 extra units, so variable cost is €3 per unit.">
<strong>Check: total cost rises from €21,000 at 4,000 units to €30,000 at 7,000 units. What is variable cost per unit?</strong>
<div class="ac-choices">
<button class="ac-choice">€2</button>
<button class="ac-choice">€3</button>
<button class="ac-choice">€4.50</button>
</div><p class="ac-feedback"></p>
</div>

## Relevant costs | The decision rule

A <button data-ac-term="relevant cost">relevant cost</button> must be:

- related to the decision objective;
- **different between the alternatives**; and
- **future-related**.

The lecture's practical test is excellent: **will the company's future cash inflow or outflow change because of the decision?** If the cash flow is the same under both options, it is not relevant to choosing between them.

<div class="ac-grid">
<div class="ac-card">
<h3><button data-ac-term="sunk cost">Sunk cost</button></h3>
<p>Already incurred. It cannot be changed by the decision, so it is irrelevant.</p>
</div>
<div class="ac-card">
<h3><button data-ac-term="committed cost">Committed cost</button></h3>
<p>May be paid in the future, but an existing commitment means the current decision cannot avoid it.</p>
</div>
<div class="ac-card">
<h3><button data-ac-term="opportunity cost">Opportunity cost</button></h3>
<p>The benefit sacrificed by not using a resource in its best alternative use. Relevant even though it may never appear in the accounting ledger.</p>
</div>
<div class="ac-card">
<h3>Incremental / avoidable cash flow</h3>
<p>A future inflow or outflow that occurs only because one option is selected. Relevant.</p>
</div>
</div>

Fixed cost is not automatically irrelevant. Ordinary fixed overhead that will continue anyway is irrelevant; **specific fixed cost or stepped fixed cost caused by the decision is relevant**. Likewise, an absorbed overhead rate is not a cash flow just because it appears in a costing system.

## Inventory | Historic cost is usually the wrong question

The lecture gives three inventory rules:

1. If material is in regular use and will be replaced, use <button data-ac-term="replacement cost">replacement cost</button>.
2. If material is not in regular use, has no alternative use and would otherwise be worthless, relevant cost can be zero.
3. If material is not in regular use but could be sold or used elsewhere, use the economic value sacrificed — usually sale proceeds or another opportunity cost.

<div class="ac-worked">
<strong>Lecture pattern</strong>
<p>Material A is constantly used: historic cost €5, resale €3, replacement €6. The decision cost is €6 per unit because using it creates a replacement cash outflow.</p>
<p>Material B is not otherwise needed: historic cost €7, resale €8. If it is consumed, the business gives up €8 sale proceeds, so €8 is relevant.</p>
</div>

## One-off decisions | Where this logic is used

The Week 1 deck explicitly places relevant costing inside decisions such as:

- keep or replace equipment;
- retain or drop a product/segment;
- make internally or buy externally;
- accept a special order;
- use a scarce resource;
- sell a joint product at split-off or process it further.

The financial manager first prepares the quantitative comparison and states assumptions. The board then considers <button data-ac-term="qualitative factor">qualitative factors</button>: effects on customers, suppliers, employees, quality, reliability, environment, community and reputation.

<div class="ac-mcq" data-id="found-sunk" data-answer="2" data-explain="The €5,000 purchase price is already spent. The €6,000 offer is the future cash flow that differs between selling and keeping.">
<strong>A car cost €5,000 last month. Today someone offers €6,000 for it. Which amount is relevant to today's sell/keep decision?</strong>
<div class="ac-choices">
<button class="ac-choice">€5,000 only</button>
<button class="ac-choice">€11,000</button>
<button class="ac-choice">€6,000</button>
</div><p class="ac-feedback"></p>
</div>

<div class="ac-mcq" data-id="found-labour" data-answer="1" data-explain="When labour is fully occupied, diverting seven hours sacrifices €280 of alternative contribution/revenue; that opportunity cost is relevant.">
<strong>A mechanic is already paid, but the garage is full and those seven hours could earn €40 per hour on another job. What labour amount belongs in the decision?</strong>
<div class="ac-choices">
<button class="ac-choice">€0 because salary is fixed</button>
<button class="ac-choice">€280 opportunity cost</button>
<button class="ac-choice">7 × the mechanic's historic wage only</button>
</div><p class="ac-feedback"></p>
</div>

## Exam method | A disciplined answer

For a relevant-cost question, create a table with **item → relevant amount → include/exclude → reason**. Do not merely total numbers.

The supplied 2023 paper asks this in a dog-kennel setting; the tutorial and practice packs use horse boxes, school furniture and other contracts. The contexts change, but the reasoning is stable:

**future? → different? → cash flow? → opportunity cost? → qualitative consequence?**

<div class="ac-interview">
<strong>Interview carry-out</strong>
<p>“Relevant costing taught me not to accept accounting figures at face value. For a decision I would focus on future cash flows that actually change between the options, add opportunity costs where resources have an alternative use, and then consider qualitative factors such as service, quality and supplier reliability.”</p>
</div>

<div class="ac-confidence" data-id="found-confidence">
<strong>Can you now take an unfamiliar cost and explain, without guessing, whether it is relevant to a decision?</strong>
<p>Use the three tests: future, different between alternatives, decision-related cash flow — then check opportunity cost.</p>
</div>

<div class="ac-mastery"><strong>Mastery gate:</strong> the chapter is evidenced when the marked checks are correct and the confidence gate is set to <em>I know this</em>. <span data-ac-page-progress></span></div>

</div>
