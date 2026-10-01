---
layout: doc
title: "AC4214 · Chapter 5 — Investment Appraisal"
eyebrow: "ACCOUNTING FOR FINANCIAL DECISION MAKING · CHAPTER 5"
study_mode: true
ac4214_course: true
---

[← Budgeting]({{ '/education/ac4214/04-budgeting-and-cash.html' | relative_url }}) · [Course home]({{ '/modules/ac4214-accounting-for-financial-decision-making.html' | relative_url }}) · [Next: Working capital →]({{ '/education/ac4214/06-working-capital.html' | relative_url }})

<div class="ac4214-course" markdown="1">

<div class="ac-hero">
<p><strong>Central question:</strong> if a project costs cash today and generates benefits over several years, how do we decide whether it creates value?</p>
<p>This chapter consolidates the investment-appraisal lecture decks, discounting lecture, tutorial questions and solutions, present-value tables, Lumiere worked presentation and the investment questions appearing in the exam/revision material. The four methods required by the module are <button data-ac-term="payback period">Payback</button>, <button data-ac-term="accounting rate of return">ARR</button>, <button data-ac-term="net present value">NPV</button> and <button data-ac-term="internal rate of return">IRR</button>.</p>
</div>

## Cash-flow first | Build the project before applying a method

Investment appraisal begins with **incremental project cash flows**. Relevant cash flows commonly include:

- initial asset purchase and installation;
- future sales receipts or operating savings;
- variable and incremental fixed operating cash costs;
- tax or other cash consequences when supplied;
- additional working capital and its eventual release;
- disposal or residual value;
- opportunity costs, such as contribution lost elsewhere.

Do not include a cost simply because it appears in an accounting record. Apply the same relevant-cost logic from Chapter 1.

<div class="ac-caution"><strong>Depreciation:</strong> <button data-ac-term="depreciation">depreciation</button> is used to derive accounting profit for ARR, but it is not itself a project cash outflow. Payback, NPV and IRR use cash flows.</div>

## Payback | How quickly is the investment recovered?

The <button data-ac-term="payback period">payback period</button> is the time taken for cumulative project cash inflows to recover the initial outlay.

For equal annual cash flows:

<div class="ac-formula">
Payback = Initial investment ÷ Annual cash inflow
</div>

For uneven cash flows, calculate a cumulative cash-flow column and identify where it changes from negative to positive.

<div class="ac-worked">
<strong>Dee's Delights — tutorial solution</strong>
<p>Initial outlay: €30,000. Cash flows: €8,000, €8,800, €8,800, €12,500, €12,500.</p>
<p>After Year 3, €4,400 remains unrecovered. Year 4 brings €12,500.</p>
<p>Payback = 3 years + (€4,400 ÷ €12,500 × 12 months) ≈ <strong>3 years 4.22 months</strong>.</p>
</div>

**Strengths:** simple, intuitive, useful for liquidity/risk, focuses on fast recovery.  
**Weaknesses:** ignores cash flows after payback and, in its basic form, ignores the time value of money.

## ARR | The accounting-profit method

<button data-ac-term="accounting rate of return">ARR</button> is the only one of the four methods in this module that uses **accounting profit rather than cash flow**.

The tutorial uses:

<div class="ac-formula">
ARR = Average annual accounting profit ÷ Average investment × 100

Average investment = (Initial investment + Residual value) ÷ 2
</div>

The lecture material also uses an initial-investment denominator in examples. In an exam, follow the exact convention specified or demonstrated in the question/lecture and show the denominator clearly.

<div class="ac-worked">
<strong>Dee's Delights — tutorial solution</strong>
<p>Total project cash generation over five years is €50,600. Less €30,000 depreciation over the project life gives €20,600 total accounting profit, or €4,120 average annual profit.</p>
<p>Average investment = (€30,000 + €0) ÷ 2 = €15,000.</p>
<p>ARR = €4,120 ÷ €15,000 × 100 = <strong>27.46%</strong>.</p>
</div>

**Strengths:** familiar accounting percentage, easy to compare with a target accounting return.  
**Weaknesses:** based on accounting profit, affected by accounting conventions, and ignores when profits occur.

## Time value of money | €1 later is not €1 today

The discounting lecture defines <button data-ac-term="discounting">discounting</button> as converting future amounts into today's value using a discount rate or <button data-ac-term="cost of capital">cost of capital</button>.

<div class="ac-formula">
Present value = Future cash flow ÷ (1 + r)^n

Equivalent: Present value = Future cash flow × discount factor
</div>

Why does time matter? Money available now can earn a return; future cash is uncertain; and inflation can reduce purchasing power.

<div class="ac-worked">
<strong>Discounting example from the lecture</strong>
<p>A €320,000 payment due in two years at 10% has a present value of approximately:</p>
<p>€320,000 ÷ 1.1² = <strong>€264,462</strong> (table factors give a small rounding difference).</p>
</div>

## NPV | Value created today

<button data-ac-term="net present value">Net present value</button> discounts every relevant project cash flow to time 0 and then totals them.

<div class="ac-formula">
NPV = Σ [Cash flow at time t ÷ (1 + r)^t]

Decision rule:
NPV &gt; 0 → accept financially;
NPV &lt; 0 → reject financially;
NPV = 0 → financially indifferent at the chosen discount rate.
</div>

<div class="ac-worked">
<strong>Lecture example</strong>
<p>Initial cost €40,000. Future cash flows €9,000, €9,000, €10,000 and €13,000, plus €12,000 scrap value in Year 4, discounted at 10%.</p>
<p>The lecture obtains a small positive NPV of roughly <strong>€200</strong>; financially, the project is acceptable at 10%.</p>
</div>

The tutorial asks why NPV is theoretically superior: it considers **all project costs and benefits** and **the time value of money**. It also expresses the result directly as value added in today's money.

## IRR | The project's break-even discount rate

<button data-ac-term="internal rate of return">IRR</button> is the discount rate at which NPV equals zero.

The tutorial approach is:

1. calculate NPV at one rate that gives a positive result;
2. calculate NPV at a higher rate that gives a negative result;
3. interpolate between the two rates.

<div class="ac-formula">
IRR ≈ Lower rate + [Positive NPV ÷ (Positive NPV − Negative NPV)] × (Higher rate − Lower rate)
</div>

<div class="ac-worked">
<strong>Dee's Delights — supplied tutorial solution</strong>
<p>NPV at 14% = +€3,610.70. NPV at 20% = −€1,083.60.</p>
<p>IRR ≈ 14% + [3,610.70 ÷ (3,610.70 − (−1,083.60))] × 6%</p>
<p>≈ <strong>18.62%</strong>.</p>
</div>

Decision rule: if IRR exceeds the required return/cost of capital, the project is financially acceptable.

<div class="ac-caution"><strong>Interpretation:</strong> IRR is a percentage return signal; NPV is a direct measure of value creation. For mutually exclusive or unusual cash-flow projects, NPV is generally the more reliable decision criterion.</div>

## Four methods | Know what each one is actually measuring

| Method | Main input | Main question | Time value? | Main weakness |
|---|---|---|---:|---|
| Payback | Cash flow | How quickly is cash recovered? | No | Ignores post-payback cash |
| ARR | Accounting profit | What accounting return is earned? | No | Profit-based and timing-blind |
| NPV | Cash flow | How much value is created today? | Yes | Needs a discount rate |
| IRR | Cash flow | What discount rate makes NPV zero? | Yes | Can mislead with unusual/multiple-sign cash flows |

<div class="ac-mcq" data-id="inv-arr" data-answer="1" data-explain="ARR is based on accounting profit. Payback, NPV and IRR are cash-flow methods.">
<strong>Which method uses accounting profit rather than project cash flow?</strong>
<div class="ac-choices">
<button class="ac-choice">Payback</button>
<button class="ac-choice">ARR</button>
<button class="ac-choice">NPV</button>
</div><p class="ac-feedback"></p>
</div>

<div class="ac-mcq" data-id="inv-npv" data-answer="2" data-explain="A positive NPV means the discounted benefits exceed the discounted outflows at the required return.">
<strong>A project has NPV +€84,000 at the company's cost of capital. Financially, what does that mean?</strong>
<div class="ac-choices">
<button class="ac-choice">Its payback must be under one year</button>
<button class="ac-choice">Its IRR is exactly zero</button>
<button class="ac-choice">It adds €84,000 of value at that required return</button>
</div><p class="ac-feedback"></p>
</div>

<div class="ac-mcq" data-id="inv-irr" data-answer="0" data-explain="IRR is the discount rate that makes the project's NPV equal to zero.">
<strong>What is IRR?</strong>
<div class="ac-choices">
<button class="ac-choice">The discount rate at which NPV = 0</button>
<button class="ac-choice">Average profit divided by investment</button>
<button class="ac-choice">The year in which cumulative cash flow becomes positive</button>
</div><p class="ac-feedback"></p>
</div>

## Qualitative factors | A positive NPV is not the whole decision

The Lumiere material explicitly adds environmental impact, staff impact, service quality and business reputation. Other practical issues can include strategic fit, implementation risk, regulatory requirements, technology obsolescence and operational resilience.

<div class="ac-interview">
<strong>Interview carry-out</strong>
<p>“I would build the incremental cash flows first and then use NPV as the core value test because it recognises the time value of money and the whole project life. Payback gives a useful liquidity/risk view, ARR gives an accounting view, and IRR gives a percentage return. I would still check qualitative risks before making the recommendation.”</p>
</div>

<div class="ac-confidence" data-id="inv-confidence">
<strong>Could you take an unfamiliar project, identify its cash flows, calculate or interpret all four appraisal methods, and explain why NPV is usually the strongest value criterion?</strong>
</div>

<div class="ac-mastery"><strong>Mastery gate:</strong> all checks correct + confidence at <em>I know this</em>. <span data-ac-page-progress></span></div>

</div>
