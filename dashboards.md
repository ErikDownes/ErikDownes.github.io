---
layout: doc
handle: Dashboards
title: Dashboards — Aircraft & Finance
nav_order: 70
eyebrow: EXPLORE · EXPLAIN · APPLY
intro: Explore the aircraft portfolio, test a leasing decision and follow the financial ideas from a simple loan to an aircraft. Use the results to practise explaining what matters in an Asset Management role.
---

## The placement in one view

Abelo asks the intern to help prepare **lease reports**, keep **aircraft and contract data accurate**, support **billing**, and improve **reporting and processes**. Commercial, Finance and Legal may all use that work. These dashboards are practice tools for thinking through those tasks; their figures and scenarios are not Abelo's internal data or decisions.

**Interview answer:** “I would start by learning the lease requirements and checking the underlying data. I could then help make reporting and billing more reliable, and use my quantitative skills to explain what a change in the numbers means.”

[Explore the fleet](#fleet-map) · [Test a leasing decision](#aircraft-leasing-decision-lab) · [Use the finance lab](#finance-learning-lab)

<a id="fleet-map"></a>
## Fleet map | Ask what the records tell us

The interactive map brings together a public-record reconstruction of **61 aircraft, 26 lessees and 19 countries**. Treat the individual placements as research leads where records are incomplete.

ABEL0_MAP_APP

**Job connection:** A useful report needs consistent aircraft identities, lessee names, lease dates and source records. If two sources disagree, flag the discrepancy before using it for billing or a decision.

<a id="aircraft-leasing-decision-lab"></a>
## Aircraft leasing decision lab | Change one assumption

Try an aircraft age or lease income, then compare the value of extending a lease with re-leasing after downtime and transition cost. The model uses **illustrative assumptions** and is designed for discussion, not Abelo pricing.

<details class="embedded-app">
  <summary><strong>Open the aircraft leasing lab</strong></summary>
  <iframe title="Aircraft Leasing Decision Lab" src="{{ '/lease-dashboard.html' | relative_url }}#leaseLab" style="width:100%;height:920px;border:1px solid rgba(127,127,127,.28);border-radius:16px;margin-top:14px;background:#fff;" loading="lazy"></iframe>
</details>

**Job connection:** A clean dashboard should make a change visible and explainable. Which assumption drove the result: rent, downtime, maintenance cost or residual value? State what you checked before drawing a conclusion.

<a id="finance-learning-lab"></a>
## Finance learning lab | From a friend loan to an aircraft

Start with the words **principal, term, repayment and risk**. Then build toward interest, PCP, a mortgage and an aircraft that earns lease income. The controls below let you test each step.

## Financial instruments | Start with the contract, not the formula

A **financial instrument** is an agreement that creates financial rights and obligations between parties. Start with the simplest possible example and keep adding one idea at a time.

**Friend loan → risk language → simple interest → compound interest → PCP → mortgage → aircraft finance**

[Go deeper in MS4027 — Fundamentals of Financial Mathematics]({{ '/modules/ms4027-fundamentals-of-financial-mathematics.html' | relative_url }})

The same questions keep returning:

**Who provides the money? Who receives it? For how long? What must be repaid? What can go wrong? Who carries that risk?**

<div class="finance-flow">
  <div><strong>Friend loan</strong><span>money now → money back later</span></div>
  <div><strong>Simple interest</strong><span>interest on principal</span></div>
  <div><strong>Compound interest</strong><span>interest on a growing balance</span></div>
  <div><strong>PCP</strong><span>deposit → monthly → balloon</span></div>
  <div><strong>Mortgage</strong><span>deposit → loan → ownership</span></div>
  <div><strong>Aircraft</strong><span>capital → asset → lease cash flow</span></div>
</div>

## Friend loan | Finance before interest

Suppose a friend lends you **€1,000 today** and you agree to repay **€1,000 in one year**.

There is no interest, but there is already a financial contract and already some risk.

<div class="instrument-grid">
  <article><h3>Lender</h3><p>The person providing the money.</p></article>
  <article><h3>Borrower</h3><p>The person receiving the money and taking on the repayment obligation.</p></article>
  <article><h3>Principal</h3><p>The amount originally borrowed: here, €1,000.</p></article>
  <article><h3>Term</h3><p>The agreed length of the borrowing: here, one year.</p></article>
  <article><h3>Credit risk</h3><p>The risk that the borrower does not repay as agreed.</p></article>
  <article><h3>Creditworthiness / credit rating</h3><p>Creditworthiness is the borrower's ability and willingness to repay. A formal credit rating is an external assessment used for companies, banks and governments.</p></article>
  <article><h3>Default</h3><p>Failure to meet a contractual payment or another material obligation.</p></article>
  <article><h3>Security / collateral</h3><p>An asset or claim that may protect a lender if the borrower defaults. A casual friend loan may have none.</p></article>
  <article><h3>Reputational risk</h3><p>Even without collateral, failure to repay can damage trust and future access to finance.</p></article>
</div>

**Key idea:** interest is only one part of finance. **Time, obligation and risk exist even when the interest rate is 0%.**

## Simple interest | Pay for the use of money

With **simple interest**, interest is calculated only on the original principal.

**Interest:** \(I = Prt\)

**Amount repaid:** \(A = P(1 + rt)\)

For €1,000 at 6% simple interest for 3 years:

**Interest = €1,000 × 0.06 × 3 = €180**  
**Amount repaid = €1,180**

The important language is now **principal, rate, term, interest and maturity value**.

## Compound interest | Interest joins the balance

With **compound interest**, each interest calculation increases the balance on which later interest can be earned or charged.

For annual compounding:

**\(A = P(1+r)^t\)**

For €1,000 at 6% for 3 years:

**€1,000 → €1,060 → €1,123.60 → €1,191.02**

That extra €11.02 compared with simple interest is the effect of **interest on interest**.

The same idea becomes much more important when rates, terms and balances are large. Consumer loans and mortgages add another feature: the borrower usually makes regular repayments, so the balance is also being reduced over time.

<a id="pcp"></a>
## PCP | Buy a car with a final choice

PCP is useful because it separates the decision into an **up-front deposit**, a stream of **monthly payments** and an **optional final payment / GMFV**.

Use the model to compare structures rather than focusing on the monthly payment alone.

**Check the numbers → compare total cash outlay → recognise the capital constraint → understand the end-of-contract choice.**

<div id="pcpLab" class="mortgage-lab">
  <div class="mortgage-grid">
    <section class="mortgage-controls" aria-label="PCP assumptions">
      <h3>PCP assumptions</h3>

      <label>Car price <output id="pcpPriceOut">€30,000</output>
        <input id="pcpPrice" type="range" min="10000" max="80000" step="1000" value="30000">
      </label>
      <div class="money-input"><span>€</span><input id="pcpPriceExact" type="number" min="0" step="100" value="30000"></div>

      <label>Deposit <output id="pcpDepositOut">€6,000</output>
        <input id="pcpDeposit" type="range" min="0" max="30000" step="500" value="6000">
      </label>

      <label>APR <output id="pcpRateOut">6.0%</output>
        <input id="pcpRate" type="range" min="0" max="15" step="0.25" value="6">
      </label>

      <label>Term <output id="pcpTermOut">36 months</output>
        <input id="pcpTerm" type="range" min="24" max="60" step="6" value="36">
      </label>

      <label>Optional final payment / GMFV <output id="pcpBalloonOut">€12,000</output>
        <input id="pcpBalloon" type="range" min="0" max="40000" step="500" value="12000">
      </label>
    </section>

    <section class="mortgage-output" aria-label="PCP results">
      <div class="mortgage-kpis">
        <div><span>Amount financed</span><strong id="pcpFinancedKpi">—</strong></div>
        <div><span>Monthly payment</span><strong id="pcpMonthlyKpi">—</strong></div>
        <div><span>Total monthly payments</span><strong id="pcpMonthlyTotalKpi">—</strong></div>
        <div><span>Total if car is bought</span><strong id="pcpBuyKpi">—</strong></div>
        <div><span>Total finance cost</span><strong id="pcpCostKpi">—</strong></div>
        <div><span>Final payment</span><strong id="pcpBalloonKpi">—</strong></div>
      </div>

      <div class="mortgage-chart-card">
        <h3>The PCP cash-flow shape</h3>
        <div class="pcp-flow">
          <div><strong>Deposit</strong><span>cash now</span></div><b>→</b>
          <div><strong>Monthly payments</strong><span>finance the middle</span></div><b>→</b>
          <div><strong>GMFV / balloon</strong><span>buy, return or change car</span></div>
        </div>
        <p class="mortgage-help">The calculator is illustrative. Real PCP agreements can include fees, mileage limits, condition requirements and manufacturer/dealer terms.</p>
      </div>
    </section>
  </div>
</div>

<a id="mortgage"></a>

## Mortgage | Buy a house with secured borrowing

Use the slider for fast exploration and the number box for precision. The house-price slider moves in **€5,000 steps**.

<div class="mortgage-note"><strong>Model convention:</strong> “Deposit” means the cash paid up front. “Annual top-up” means an optional extra lump-sum mortgage repayment made after each 12 months of scheduled repayments.</div>

<div id="mortgageLab" class="mortgage-lab">
  <div class="mortgage-grid">
      <div class="mortgage-chart-card">
        <div class="mortgage-chart-heading">
          <div>
            <h3>Repayment curves</h3>
            <p>Move across the chart or tap it to inspect exact monthly values.</p>
          </div>
          <div class="mortgage-legend" aria-hidden="true">
            <span><i class="balance-dot"></i>Balance</span>
            <span><i class="principal-dot"></i>Principal repaid</span>
            <span><i class="interest-dot"></i>Interest paid</span>
          </div>
        </div>
        <div class="mortgage-canvas-wrap">
          <canvas id="mortgageChart" width="960" height="460" aria-label="Interactive mortgage balance, principal and interest curves"></canvas>
          <div id="mortgageTooltip" class="mortgage-tooltip" hidden></div>
        </div>
      </div>

    <section class="mortgage-controls" aria-label="Mortgage assumptions">
      <h3>Mortgage assumptions</h3>

      <label for="housePrice">House price <output id="housePriceOut">€400,000</output>
        <input id="housePrice" type="range" min="100000" max="1500000" step="5000" value="400000">
      </label>
      <div class="money-input"><span>€</span><input id="housePriceExact" type="number" min="0" step="1000" value="400000" inputmode="decimal"></div>

      <label for="depositPct">Deposit <output id="depositPctOut">10.0%</output>
        <input id="depositPct" type="range" min="10" max="100" step="0.5" value="10">
      </label>

      <div class="mortgage-inline-readout">
        <span>Deposit cash</span><strong id="depositCash">€40,000</strong>
      </div>

      <label for="interestRate">Interest rate <output id="interestRateOut">2.2%</output>
        <input id="interestRate" type="range" min="0" max="9.9" step="0.1" value="2.2">
      </label>

      <label for="termYears">Mortgage term <output id="termYearsOut">30 years</output>
        <input id="termYears" type="range" min="0" max="35" step="1" value="30">
      </label>

      <label for="annualExtra">Annual top-up / overpayment
        <div class="money-input"><span>€</span><input id="annualExtra" type="number" min="0" step="100" value="0" inputmode="decimal"></div>
      </label>
      <p class="mortgage-help">Applied after every 12 scheduled monthly payments and automatically capped at the remaining balance.</p>

      <button type="button" id="resetMortgage" class="mortgage-reset">Reset assumptions</button>
      <p id="mortgageValidation" class="mortgage-validation" role="status" aria-live="polite"></p>
    </section>

    <section class="mortgage-output" aria-label="Mortgage results">
      <div class="mortgage-kpis">
        <div><span>Mortgage required</span><strong id="loanKpi">—</strong></div>
        <div><span>Monthly repayment</span><strong id="monthlyKpi">—</strong></div>
        <div><span>Payoff time</span><strong id="payoffKpi">—</strong></div>
        <div><span>Total interest</span><strong id="interestKpi">—</strong></div>
        <div><span>Total mortgage payments</span><strong id="totalPaidKpi">—</strong></div>
        <div><span>Interest saved by top-ups</span><strong id="savedKpi">—</strong></div>
      </div>

      <div class="mortgage-summary-grid">
        <div><span>House price</span><strong id="houseKpi">—</strong></div>
        <div><span>Initial deposit</span><strong id="depositKpi">—</strong></div>
        <div><span>Top-ups actually used</span><strong id="extraUsedKpi">—</strong></div>
      </div>
    </section>
  </div>
</div>


## From house to aircraft | Same cash-flow questions, bigger asset

A mortgage introduces **secured long-term borrowing**: the borrower contributes equity through the deposit, borrows the balance, pays interest and gradually reduces the principal.

Aircraft finance keeps those ideas but adds a commercial layer. The asset is not just something to own; it is expected to **generate lease income**.

**Home:** buyer equity + mortgage debt → house → borrower repays bank

**Aircraft:** lessor equity + debt → aircraft → airline pays lease rentals

At aircraft scale, the vocabulary expands naturally: **debt, equity, leverage, lease rental, counterparty credit risk, residual value, maintenance exposure and remarketing risk**.

<a id="aircraft"></a>

## Aircraft | Finance an income-producing asset

The model below is deliberately illustrative. It is **not Abelo pricing**. It is a way to see the extra layer that does not exist in the residential mortgage calculator: a lessor may borrow to acquire the asset and then lease that asset to somebody else.

<div id="aircraftFinanceLab" class="mortgage-lab">
  <div class="mortgage-grid">
    <section class="mortgage-controls" aria-label="Aircraft finance assumptions">
      <h3>Illustrative lessor assumptions</h3>

      <label>Aircraft acquisition price <output id="airPriceOut">€20m</output>
        <input id="airPrice" type="range" min="5" max="100" step="1" value="20">
      </label>
      <div class="money-input"><span>€m</span><input id="airPriceExact" type="number" min="0" step="0.1" value="20"></div>

      <label>Equity contribution <output id="airEquityOut">30%</output>
        <input id="airEquity" type="range" min="0" max="100" step="5" value="30">
      </label>

      <label>Debt interest rate <output id="airDebtRateOut">5.0%</output>
        <input id="airDebtRate" type="range" min="0" max="12" step="0.25" value="5">
      </label>

      <label>Debt amortisation term <output id="airDebtTermOut">10 years</output>
        <input id="airDebtTerm" type="range" min="1" max="20" step="1" value="10">
      </label>

      <label>Monthly airline lease rental
        <div class="money-input"><span>€k</span><input id="airRent" type="number" min="0" step="5" value="180"></div>
      </label>

      <label>Airline lease term <output id="airLeaseTermOut">8 years</output>
        <input id="airLeaseTerm" type="range" min="1" max="15" step="1" value="8">
      </label>

      <label>Annual owner / asset cost
        <div class="money-input"><span>€k</span><input id="airAnnualCost" type="number" min="0" step="25" value="350"></div>
      </label>

      <label>Illustrative residual value <output id="airResidualOut">45%</output>
        <input id="airResidual" type="range" min="0" max="100" step="5" value="45">
      </label>
    </section>

    <section class="mortgage-output" aria-label="Aircraft finance results">
      <div class="mortgage-chart-card aircraft-chart-card">
        <div class="mortgage-chart-heading">
          <div>
            <h3>Aircraft economics over time</h3>
            <p>See debt fall while lease income and owner costs accumulate. Move across the chart or tap it for exact values.</p>
          </div>
          <div class="mortgage-legend" aria-hidden="true">
            <span><i class="air-debt-dot"></i>Debt balance</span>
            <span><i class="air-rent-dot"></i>Lease rentals</span>
            <span><i class="air-cost-dot"></i>Owner costs</span>
          </div>
        </div>
        <div class="mortgage-canvas-wrap">
          <canvas id="aircraftChart" width="960" height="460" aria-label="Interactive aircraft debt, lease rental and owner cost curves"></canvas>
          <div id="aircraftTooltip" class="mortgage-tooltip" hidden></div>
        </div>
        <p class="mortgage-help"><strong>Residual value is shown at the lease-end point</strong> because it is an end-of-period asset value rather than recurring income.</p>
      </div>

      <div class="mortgage-kpis">
        <div><span>Equity invested</span><strong id="airEquityKpi">—</strong></div>
        <div><span>Acquisition debt</span><strong id="airDebtKpi">—</strong></div>
        <div><span>Illustrative debt payment</span><strong id="airDebtPayKpi">—</strong></div>
        <div><span>Lease rentals over term</span><strong id="airRentKpi">—</strong></div>
        <div><span>Residual value</span><strong id="airResidualKpi">—</strong></div>
        <div><span>Cash before tax / sale costs</span><strong id="airNetKpi">—</strong></div>
      </div>

      <div class="mortgage-chart-card">
        <h3>The capital stack</h3>
        <div class="capital-stack">
          <div><strong>Banks / investors</strong><span>provide debt + equity capital</span></div>
          <b>→</b>
          <div><strong>Aircraft lessor</strong><span>buys & manages the aircraft</span></div>
          <b>→</b>
          <div><strong>Airline</strong><span>pays lease rentals</span></div>
        </div>
        <p class="mortgage-help">The debt-payment output assumes a conventional amortising loan purely for illustration. Real aviation facilities may use different advance rates, repayment profiles, covenants, security packages and refinancing structures.</p>
      </div>
    </section>
  </div>
</div>

## What changed? | From €1,000 to an aircraft

The mathematics became richer, but the underlying questions did not change:

**capital → term → cash flows → risk → value at the end**

A friend loan makes **credit risk** visible. Simple and compound interest price the **time value of money**. PCP adds a **balloon payment and end-of-contract choice**. A mortgage adds **security and amortisation**. Aircraft finance adds **lease income, counterparty risk, asset management and residual value**.

That is the bridge from basic financial mathematics to the kind of asset-finance thinking used in aircraft leasing.

<link rel="stylesheet" href="{{ '/assets/mortgage-calculator.css' | relative_url }}">
<script defer src="{{ '/assets/mortgage-calculator.js' | relative_url }}"></script>
