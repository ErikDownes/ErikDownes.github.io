---
layout: doc
handle: Finance
title: Residential & Aircraft Finance — Decision Lab
nav_order: 70
eyebrow: OPEN · ONLINE · INTERACTIVE
intro: Start with a residential mortgage, then use the same cash-flow thinking to understand aircraft ownership, financing, leasing, options and residual value.
---

<div class="mortgage-note"><strong>Interactive app page:</strong> This page is maintained as a browser application rather than a normal Pages CMS document. Use the controls directly here; edit the source in GitHub when the application itself needs to change.</div>


## Financial instruments | Same questions, different contracts

The easiest way to understand finance is not to memorise products. Ask the same questions every time:

**Who supplies the capital? Who owns the asset? What payments are made? Who carries the risk? What happens at the end?**

<div class="finance-flow">
  <div><strong>Friend loan</strong><span>cash now → repayment later</span></div>
  <div><strong>Bank credit</strong><span>borrow → interest → repay</span></div>
  <div><strong>Mortgage</strong><span>borrow → buy → own</span></div>
  <div><strong>PCP</strong><span>deposit → monthly payments → balloon / return</span></div>
  <div><strong>Aircraft lease</strong><span>lease rentals → use aircraft → return aircraft</span></div>
</div>

<div class="instrument-grid">
  <article><h3>Interest-free personal loan</h3><p>The simplest instrument: one person provides capital and expects it back later. No interest does not mean no risk.</p><strong>Idea:</strong> trust, time and credit risk.</article>
  <article><h3>Current / deposit account</h3><p>You provide money to a bank. Liquidity is high and expected return is usually modest.</p><strong>Idea:</strong> liquidity versus return.</article>
  <article><h3>Overdraft / credit card</h3><p>Flexible revolving borrowing rather than a fixed amortising loan. Interest is charged on the balance used.</p><strong>Idea:</strong> flexibility versus borrowing cost.</article>
  <article><h3>Shares / investments</h3><p>Capital is invested for uncertain future value rather than repaid under a fixed schedule.</p><strong>Idea:</strong> expected return and market risk.</article>
  <article><h3>Mortgage</h3><p>Long-term secured borrowing used to acquire an asset that the borrower owns.</p><strong>Idea:</strong> deposit, amortisation and security.</article>
  <article><h3>PCP car finance</h3><p>Deposit plus monthly payments with a large optional final payment linked to the vehicle's future value.</p><strong>Idea:</strong> cash today versus cash later.</article>
  <article><h3>Aircraft operating lease</h3><p>The airline pays for use. Ownership normally stays with the lessor and the aircraft is returned under the lease terms.</p><strong>Idea:</strong> use without ownership.</article>
  <article><h3>Aircraft lessor finance</h3><p>The lessor may combine debt and equity to buy the aircraft before leasing it to an airline.</p><strong>Idea:</strong> capital stack, lease income and residual value.</article>
</div>

## PCP | Compare financing structures

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

## Mortgage | Borrow to own

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


## Residential rent and aircraft leasing | Same skeleton, different world

At the simplest level, the relationship is recognisable:

**Landlord → house → tenant → rent**

**Aircraft lessor → aircraft → airline → lease rentals**

In both cases, the owner supplies the use of an asset for a period in return for recurring payments. But an aircraft lease is a large, negotiated commercial contract with technical, maintenance, insurance, return-condition, jurisdiction, default and repossession provisions that have no close residential equivalent.

For Irish residential property, rent is also constrained by tenancy law. From **1 March 2026**, national rent-control rules generally limit annual increases to **2% or CPI inflation, whichever is lower**, subject to stated exceptions. That means a landlord cannot simply say “my mortgage rate rose, so I will raise the rent by the same amount.” [RTB — current rent-setting rules](https://rtb.ie/renting/setting-and-reviewing-private-rents-from-1-march-2026/)

### Who is financing the owner?

A useful way to extend the analogy is:

**Mortgage bank → homeowner/landlord → house → tenant**

**Banks / investors → aircraft lessor → aircraft → airline**

This is not hypothetical for Abelo. In 2024 Abelo announced a **$190 million financing facility covering 20 turboprop aircraft**, with MUFG, Deutsche Bank and Société Générale participating. In May 2025 it announced an **up-to-$750 million warehouse financing facility** arranged by Deutsche Bank and MUFG to support fleet growth.

So an aircraft lessor does not have to fund every acquisition entirely with cash equity. The lessor can combine investor capital with secured or corporate debt, acquire aircraft, lease them to airlines, and manage the difference between financing cost, lease income, asset costs and residual value.

### If both sides want out of an aircraft lease

The lease is binding according to its negotiated terms. An airline normally cannot simply hand the aircraft back because it no longer wants it, and the lessor normally cannot simply take it back because another customer offers more money.

If **both sides agree**, however, commercial contracts can generally be restructured by agreement. Depending on the actual lease this can involve an agreed early termination, lease amendment, buy-out, novation to another operator, sale of the aircraft subject to the lease, or an agreed return.

If only one side wants out, the contract matters. Aircraft leases commonly contain detailed **events of default, cure periods, termination rights, return conditions and remedies**. Enforcement also depends on governing law, aircraft registration, international conventions and local insolvency/repossesssion rules. So the correct interview answer is not “the lease can never be broken”; it is **“it is binding, but the contract defines the routes out.”**

## Aircraft version | Lessor economics

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

## Options | Not the same as a stock-market option

An aircraft purchase option is a **contractual right to firm additional aircraft under agreed commercial terms**, rather than a freely traded financial derivative.

At the **Dubai Airshow on 14 November 2023**, Abelo and ATR announced a Heads of Agreement for **10 firm ATR 72-600s plus options for 10 more**. In late 2024, Abelo converted three of those options into firm ATR 72-600 orders. On **31 March 2026**, ATR announced that Abelo had exercised three additional ATR 72-600 options; ATR said Abelo then had **36 firm aircraft ordered** and still held **nine options and purchase rights**. [Abelo/ATR 2023 agreement](https://abelo.aero/abelo-signs-deal-for-up-to-20-atr-72-600/) · [ATR option exercise, March 2026](https://www.atr-aircraft.com/presspost/abelo-confirms-three-additional-atr-72-600-options/)

The useful interview question is therefore:

**Why keep an option rather than firm the aircraft immediately?**

Because an option can preserve **fleet flexibility and access to production positions** while the lessor waits for customer demand, financing, market conditions and delivery timing to become clearer. The exact option price, aircraft price and escalation formula are commercial terms and should not be assumed to be public.

## Why airshows matter | The deal usually starts before the show

Airshows are not five days during which everybody suddenly negotiates billion-dollar contracts from scratch.

They are a **concentration point** for the industry: manufacturers, airlines, lessors, banks, investors, suppliers, governments and media are in the same place. Negotiations may have been running for weeks or months beforehand; an airshow creates a deadline and a high-visibility place to sign or announce a Heads of Agreement, order, financing, partnership or aircraft placement.

Abelo itself gives two excellent examples:

- **Farnborough 2022:** Abelo announced its agreement to acquire 20 ATR aircraft.
- **Dubai 2023:** Abelo and ATR announced 10 firm ATR 72-600s plus 10 options.

The latest of the major alternating European shows was **Farnborough, 20–24 July 2026**, which has already happened. The **next Paris Air Show is 14–20 June 2027**, followed later that year by the **Dubai Airshow, 15–19 November 2027**. Farnborough returns **17–21 July 2028**.

So, no: **Dubai was not the last big airshow.** Dubai 2025 was followed by Farnborough 2026. As of September 2026, Paris 2027 is the next major Paris/Farnborough commercial-airshow date.


## Technology choices

This calculator is deliberately built as an **open-source browser application** using **HTML, CSS and vanilla JavaScript**, hosted through **GitHub Pages / Jekyll**.

The mathematics runs entirely in the browser. There is no paid backend, no proprietary calculation engine and no licence required to use or inspect the model.

- **HTML** provides the inputs, outputs and accessible page structure.
- **CSS** controls the responsive dashboard layout.
- **JavaScript** performs the calculations and redraws outputs immediately.
- **Canvas** is used for the mortgage repayment curves.
- **GitHub Pages / Jekyll** keeps deployment simple, public and reproducible.

### Why not Power BI?

Power BI is highly relevant for governed reporting, shared dashboards, scheduled refreshes and enterprise data. This page is different: it is an interactive calculator where the user changes assumptions continuously. A small browser application gives direct control over that behaviour while exposing the underlying mathematics.

## What the model is doing

For a standard repayment mortgage, the monthly payment is calculated from the principal, monthly interest rate and number of monthly payments. The model then simulates the mortgage **month by month**, splitting each payment into interest and principal.

When an annual top-up is entered, the simulator applies that extra payment after each completed year, reducing the outstanding principal. That can shorten the payoff period and reduce later interest.

At a **0% interest rate**, the model simply divides principal by the number of months. At a **100% deposit**, the mortgage required is zero and the house is treated as a cash purchase. A term of **0 years** is therefore only valid when no mortgage is required.

## Decision-support purpose

The point is not just to produce one repayment number. It is to let a user change the assumptions and see the **shape of the financing decision**: how a larger deposit changes borrowing, how rate changes affect interest, how term changes trade monthly affordability against total interest, and how recurring overpayments accelerate principal reduction.

<link rel="stylesheet" href="{{ '/assets/mortgage-calculator.css' | relative_url }}">
<script defer src="{{ '/assets/mortgage-calculator.js' | relative_url }}"></script>
