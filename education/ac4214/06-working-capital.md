---
layout: doc
title: "AC4214 · Chapter 6 — Working Capital"
eyebrow: "ACCOUNTING FOR FINANCIAL DECISION MAKING · CHAPTER 6"
study_mode: true
ac4214_course: true
---

[← Investment appraisal]({{ '/education/ac4214/05-investment-appraisal.html' | relative_url }}) · [Course home]({{ '/modules/ac4214-accounting-for-financial-decision-making.html' | relative_url }}) · [Next: Full cost & finance →]({{ '/education/ac4214/07-full-cost-and-finance.html' | relative_url }})

<div class="ac4214-course" markdown="1">

<div class="ac-hero">
<p><strong>Central question:</strong> how much cash should be tied up in day-to-day operations, and how do we avoid a profitable business running into a cash crisis?</p>
<p>This chapter consolidates the Working Capital lecture, Week 10/11 material, EOQ/JIT resources, Blarney worked presentation, tutorial questions and the exam-style question/solution packs.</p>
</div>

## Working capital | Profit is not liquidity

<button data-ac-term="working capital">Working capital</button> is presented in the lecture as long-term funding used to finance current assets and is commonly calculated as:

<div class="ac-formula">
Working capital = Current assets − Current liabilities
</div>

The working-capital cycle runs from cash paid for inventory through production/sale and finally to cash collected from the customer. A longer cycle means more financing is tied up and normally greater financial risk.

The lecture warns about **overtrading**: sales and reported profits may grow while inventory and receivables absorb cash, creating a liquidity crisis.

<button data-ac-term="liquidity">Liquidity</button> asks whether short-term obligations can be paid when due. The source material uses:

- current ratio = current assets ÷ current liabilities;
- quick ratio = (current assets − inventory) ÷ current liabilities.

## Inventory days | How long is cash sitting on the shelf?

<div class="ac-formula">
Inventory holding period = Average inventory ÷ Cost of sales × 365 days
</div>

The lecture gives €900,000 inventory and €2.3m cost of sales:

€900,000 ÷ €2,300,000 × 365 ≈ <strong>143 days</strong>.

That is not automatically “good” or “bad”; it must be interpreted against the business, seasonality, reliability of supply and service requirements.

## EOQ | How much should we order?

The <button data-ac-term="economic order quantity">Economic Order Quantity</button> balances two competing relevant costs:

- ordering too frequently → lower inventory but higher ordering costs;
- ordering large amounts infrequently → lower ordering cost but higher holding cost.

<div class="ac-formula">
EOQ = √(2CD ÷ H)

C = cost of placing one order  
D = annual demand  
H = annual holding cost per unit
</div>

The model assumes, among other things, reasonably constant demand/lead time and a stable cost structure.

<div class="ac-worked">
<strong>CRH cement — lecture example</strong>
<p>Annual demand 2,000 bags; order cost €250; holding cost €4 per bag per year.</p>
<p>EOQ = √(2 × 250 × 2,000 ÷ 4) = <strong>500 bags</strong>.</p>
<p>Four orders per year. Ordering cost = 4 × €250 = €1,000. Average inventory = 250 bags; holding cost = 250 × €4 = €1,000.</p>
</div>

<div class="ac-mcq" data-id="wc-eoq" data-answer="1" data-explain="EOQ is the order quantity that balances/minimises relevant ordering and holding costs under the model assumptions.">
<strong>What is EOQ trying to optimise?</strong>
<div class="ac-choices">
<button class="ac-choice">Selling price and gross margin</button>
<button class="ac-choice">Ordering and holding costs</button>
<button class="ac-choice">Receivable days and payable days</button>
</div><p class="ac-feedback"></p>
</div>

## Reorder level and safety stock | When should the order be placed?

<button data-ac-term="reorder level">Reorder level</button> is driven by usage during supplier lead time.

<div class="ac-formula">
Reorder level ≈ Average usage per day/week × Lead time

With uncertainty, add <button data-ac-term="safety stock">safety stock</button>.
</div>

Safety stock protects against higher-than-expected demand or longer lead times, but it also ties up cash and increases holding risk.

## JIT | Lower inventory, higher dependence on reliability

<button data-ac-term="just-in-time">Just-in-time</button> aims to receive or produce items close to the time they are required. Benefits can include lower inventory investment, storage and obsolescence; requirements include reliable suppliers, quality, logistics, scheduling and close coordination.

Its weakness is the other side of the same trade-off: low buffers mean disruptions can stop operations quickly.

## Receivables | Sales are not cash until customers pay

A <button data-ac-term="trade receivable">trade receivable</button> is money owed by a customer after a credit sale.

<div class="ac-formula">
Receivable days = Average trade receivables ÷ Annual credit sales × 365

Estimated receivables = Annual credit sales ÷ 365 × Average collection days
</div>

Credit policy involves:

- who receives credit;
- the <button data-ac-term="credit period">credit period</button>;
- collection procedures;
- bad-debt risk;
- the cost of financing receivables;
- whether a <button data-ac-term="cash discount">cash discount</button> should be offered.

The course material uses the **Five Cs of credit** as a qualitative framework: character, capacity, capital, collateral and conditions.

## Cash discounts | Never look only at faster payment

A discount proposal normally has at least three financial effects:

1. lower receivables → financing cost saving;
2. perhaps lower bad debts → saving;
3. discount granted → cost.

It can also affect sales/customer behaviour, which must be included if the question supplies it.

<div class="ac-worked">
<strong>Blarney worked presentation</strong>
<p>Credit sales = €300m. Current average collection = 52 days. Proposed: 60% pay in 35 days and 40% remain at 52 days → weighted average ≈ 42 days.</p>
<p>Receivables fall by about €8.219m. At 9% finance cost, financing saving ≈ €739,726. Bad debts fall €100,000. But a 1% discount on the 60% taking it costs €1.8m.</p>
<p>Net effect ≈ <strong>€960,274 cost</strong>, so reject on the financial figures supplied.</p>
</div>

<div class="ac-mcq" data-id="wc-discount" data-answer="2" data-explain="A discount is worthwhile only if financing/bad-debt/other benefits exceed the discount and any other incremental costs or lost margins.">
<strong>A proposed early-payment discount reduces receivable days. Is that alone enough to accept it?</strong>
<div class="ac-choices">
<button class="ac-choice">Yes, lower receivable days always means accept</button>
<button class="ac-choice">Yes, provided sales are on credit</button>
<button class="ac-choice">No, compare all incremental benefits and costs</button>
</div><p class="ac-feedback"></p>
</div>

## Payables and cash | Manage the whole cycle

Working capital also includes trade payables and cash. Delaying payment can provide financing but may damage supplier relationships, lose discounts or breach terms. Holding too much idle cash has an opportunity cost; holding too little creates liquidity risk.

The objective is not “minimise every current asset.” It is to balance **liquidity, operational resilience, customer service and return on capital**.

<div class="ac-mcq" data-id="wc-cycle" data-answer="0" data-explain="A longer cash-conversion/working-capital cycle generally ties up funding for longer and raises financing requirements.">
<strong>All else equal, what usually happens when the working-capital cycle becomes longer?</strong>
<div class="ac-choices">
<button class="ac-choice">More financing is tied up</button>
<button class="ac-choice">EOQ automatically becomes zero</button>
<button class="ac-choice">Accounting profit must fall to zero</button>
</div><p class="ac-feedback"></p>
</div>

<div class="ac-interview">
<strong>Interview carry-out</strong>
<p>“Working-capital management is about keeping enough inventory, receivables and cash to operate without tying up unnecessary funding. I would look at the operating cycle, inventory and receivable days, financing cost and service risk. For a credit-policy change, I would compare the financing and bad-debt savings with the cost of any discount rather than just saying faster payment is better.”</p>
</div>

<div class="ac-confidence" data-id="wc-confidence">
<strong>Can you explain the cash-conversion logic, calculate EOQ/holding periods/receivable days, and financially evaluate a change in credit policy?</strong>
</div>

<div class="ac-mastery"><strong>Mastery gate:</strong> all checks correct + confidence at <em>I know this</em>. <span data-ac-page-progress></span></div>

</div>
