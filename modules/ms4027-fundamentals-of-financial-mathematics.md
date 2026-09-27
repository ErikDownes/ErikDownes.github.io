---
layout: doc
title: "MS4027 — Fundamentals of Financial Mathematics"
code: "MS4027"
year: "3rd"
semester: "Sem1"
status: "Core"
eyebrow: "3RD YEAR · SEM1"
intro: "One of the strongest direct links between Erik's Financial Mathematics degree and aircraft leasing: pricing, cash flows, market risk, hedging and financial decision-making."
---
<p><a href="{{ '/modules-projects.html' | relative_url }}">← Modules & Projects</a></p>

## Why this module matters for Abelo

This is one of the most commercially relevant modules in Erik's degree for an **aircraft leasing and asset-management role**.

The job is not asking Erik to sit down and price exotic options. The important connection is the way the module trains him to think about **future cash flows, uncertainty, market prices, risk, hedging and valuation**.

That thinking transfers naturally to aircraft leasing. A lessor owns a high-value asset, receives contractual cash flows over time, monitors financial and operational risk, and has to understand how movements in interest rates, currencies and wider market conditions can affect value and decision-making.

**Interview connection:** MS4027 shows that Erik has already studied the mathematics behind the financial language of **risk, pricing and hedging** rather than encountering those ideas for the first time in the workplace.

## What the UL module actually covers

The earlier UL module descriptor gives the purpose of MS4027 as developing the theory used to model asset prices and price derivative securities, together with fundamental pricing tools based on **arbitrage, hedging and replicating portfolios**.

The syllabus includes:

- futures and forward contracts
- European and American options
- arbitrage arguments and put-call parity
- trading strategies using options
- binomial trees
- risk-neutral valuation
- Wiener processes and geometric Brownian motion
- Ito's lemma
- Black-Scholes modelling
- the Greeks and delta hedging
- martingales and conditional expectation
- change of probability measure
- replication of derivative payoffs

The main texts include **John C. Hull, _Options, Futures and Other Derivatives_** and **Steven Shreve, _Stochastic Calculus for Finance I_**.

## Futures and forwards | Locking in a future price

A **forward contract** is an agreement made today to buy or sell an asset at a specified future date for a price agreed today. A **futures contract** has the same broad economic purpose but is standardised and traded through an exchange with daily settlement.

The commercial idea is simple: a business may know that it will have to buy or sell something in the future but not know what the market price will be then. A forward or futures position can reduce that uncertainty.

That is the first major connection with real business decisions. The mathematics is not only about calculating a payoff; it is about deciding which risks a company wants to retain and which risks it wants to control.

**Speakable version:** "A future or forward lets a company reduce uncertainty by agreeing a price today for a transaction that will happen later."

## Hedging | Reducing unwanted risk

Hull distinguishes between a **long hedge** and a **short hedge**.

- A **long hedge** is appropriate when a firm expects to **buy** an asset later and wants protection against the price rising.
- A **short hedge** is appropriate when a firm expects to **sell** an asset later and wants protection against the price falling.

The objective is not necessarily to make money from the hedge. The objective is to make the underlying business outcome **more predictable**.

That distinction is useful in an interview because it shows commercial judgement. A hedge can lose money while still doing its job if the underlying exposure moves in the opposite direction. The correct question is therefore not "Did the derivative make a profit?" but "Did the combined position reduce the risk the company wanted to reduce?"

**Recall cue:** exposure → opposite position → lower uncertainty → judge the combined result.

## Aviation example | An airline hedging jet fuel

Hull gives an aviation example in the chapter on hedging strategies. An airline expects to purchase **2 million gallons of jet fuel** in one month. Because a perfectly matching jet-fuel futures contract is not available in the example, it uses **heating-oil futures** as a cross hedge.

The hedge is based on the relationship between changes in the jet-fuel price and changes in the futures price. Hull introduces the **optimal hedge ratio**:

[
h^* = \rho \frac{\sigma_S}{\sigma_F}
]

where:

- (ho) is the correlation between changes in the spot price and futures price
- (sigma_S) is the volatility of the spot-price change
- (sigma_F) is the volatility of the futures-price change

In Hull's example, the calculated hedge ratio is about **0.78**, leading to approximately **37 futures contracts**.

The important interview point is not the arithmetic. It is the decision process:

**identify the exposure → find the closest tradeable hedge → measure how closely the prices move together → choose the hedge size → accept that some basis risk remains.**

For Abelo, Erik should be careful with the distinction: **Abelo is an aircraft lessor, not an airline purchasing fuel.** The relevance is that the example gives him a concrete understanding of an important risk faced by Abelo's airline customers. Fuel-price shocks can affect airline profitability and therefore the financial environment in which lessors manage leases and lessee relationships.

## Cross hedging and basis risk | When the hedge is not exact

A **cross hedge** is used when there is no futures contract on exactly the asset or exposure being hedged. The business chooses another contract whose price movements are strongly related to the exposure.

That creates **basis risk**. The spot price and futures price may not move perfectly together, so the hedge removes some risk rather than all risk.

This is a useful general lesson for asset management: models and proxies are often imperfect. Good analysis means understanding both the usefulness of the model and the **residual risk left behind**.

**Speakable version:** "If there is no perfect hedge, you can use a closely related instrument, but you then have basis risk because the two prices will not move exactly together."

## Interest rates | Cost of money and value through time

Hull moves from futures into **interest rates, forward rates, duration and interest-rate hedging**. These are especially important ideas for an asset-heavy, finance-driven business.

Aircraft are long-lived, capital-intensive assets. Lease economics depend on cash flows occurring over many years, so the **time value of money** matters. Changes in interest rates can alter financing costs, discount rates and the present value of future cash flows.

The important concepts for Erik to recognise are:

- spot interest rates
- forward interest rates
- discounting future cash flows
- duration as a measure of sensitivity to interest-rate changes
- hedging portfolios of assets and liabilities

He does not need to pretend that the internship is a treasury role. The value is that he already understands why a euro received several years from now is not economically equivalent to a euro received today and why changes in rates can alter financial values.

## Swaps | Turning one cash-flow exposure into another

Hull also covers **interest-rate swaps** and **currency swaps**.

An interest-rate swap can exchange fixed-rate cash flows for floating-rate cash flows, or vice versa. A currency swap can exchange cash flows denominated in different currencies.

For an international leasing business, these are useful concepts because aircraft finance and lease cash flows can involve different currencies and financing structures. Again, the internship may not involve executing swaps, but understanding the principle helps Erik follow conversations about funding and market risk.

**Speakable version:** "A swap lets two parties exchange one pattern of cash flows for another, for example fixed interest for floating interest."

## Options | Paying for flexibility

An **option** gives its holder a right without imposing the same obligation as a forward contract.

- A **call option** gives the right to buy.
- A **put option** gives the right to sell.
- A **European option** is exercised at maturity.
- An **American option** can generally be exercised at any time up to maturity.

This introduces an important commercial theme: **flexibility has value**. An option is valuable because it allows a decision to depend on what happens in the future.

Hull develops this into option pricing using no-arbitrage arguments, binomial trees and ultimately Black-Scholes. Even where the specific instrument is not used in day-to-day asset management, the underlying idea is important: uncertain future choices can have an economic value today.

## Arbitrage and replication | Pricing by consistency

One of the central ideas in the module is **no-arbitrage pricing**.

An arbitrage is a set of transactions that produces a risk-free profit without a corresponding net investment or risk. If two portfolios generate the same future cash flows, competitive markets should not allow them to have persistently different prices.

That leads to **replication**: construct a portfolio whose future payoff matches the payoff of the derivative. The cost of the replicating portfolio gives a consistent price for the derivative.

This is a very useful way to explain the character of financial mathematics in an interview:

**"Rather than guessing what something is worth, we look at the cash flows and ask what equivalent position would reproduce them."**

That style of reasoning transfers well to asset management because it focuses attention on the economics underneath a quoted number.

## Binomial trees and risk-neutral valuation | Modelling uncertain future states

A **binomial tree** models an asset price as moving to one of two possible values over each period. Although simple, it allows the student to see how uncertainty, probability and replication interact.

Risk-neutral valuation then provides a systematic way to price contingent claims consistently with no-arbitrage. The probabilities used for pricing are not simply forecasts of what Erik thinks will happen; they are probabilities chosen so that the pricing model is internally consistent with traded asset prices.

This distinction is worth remembering:

**real-world probability asks what is likely to happen; risk-neutral probability is a pricing device.**

## Black-Scholes and the Greeks | Measuring sensitivity

Later in the module, the Black-Scholes framework models option values using the price of the underlying asset, time, volatility, interest rates and other inputs.

The **Greeks** measure how the option value responds when an input changes. For example, **delta** measures sensitivity to the underlying asset price and leads directly to the idea of **delta hedging**.

For Erik's interview, the broader skill is sensitivity analysis:

**change an assumption → measure the effect on value → identify which variables matter most.**

That is highly transferable to financial modelling, asset valuation and reporting.

## The direct bridge to aircraft leasing and asset management

MS4027 does **not** teach aircraft leasing law, maintenance reserves or lease administration. Its relevance is financial rather than operational.

The strongest bridges are:

- **contractual future cash flows** — leases create payments extending through time
- **time value of money** — future cash flows must be interpreted in present-value terms
- **interest-rate exposure** — rates affect funding costs and valuation assumptions
- **currency exposure** — international transactions can create FX risk
- **risk management** — hedging is about controlling unwanted uncertainty
- **asset values** — financial models translate assumptions about future states into values today
- **sensitivity analysis** — changing inputs shows how robust a valuation or decision is
- **counterparty awareness** — an airline's market risks can ultimately affect its financial strength as a lessee
- **commercial judgement** — the mathematically optimal answer still has to make sense in the context of the underlying business

This is why MS4027 is particularly useful preparation for the Abelo role even though Erik will initially be helping with reporting, data, billing support and process improvement rather than trading derivatives.

## How Erik can use this in the interview

If asked which parts of his degree connect most directly to aircraft leasing, MS4027 should be one of the first modules he mentions.

A strong answer is:

> "Fundamentals of Financial Mathematics is particularly relevant because it deals with future cash flows, valuation, market risk and hedging. We are currently looking at futures and hedging, including an aviation example where an airline hedges jet-fuel exposure. The specific role at Abelo is asset management rather than derivatives trading, but the same financial mindset applies: understand the exposure, understand the cash flows, measure the risk and make the decision from the underlying economics rather than just the headline number."

That answer is strong because it connects the course to the job **without claiming experience Erik does not have**.

## Interview questions | MS4027

### What is a derivative?

A derivative is a financial contract whose value depends on an underlying asset, rate, price or other variable. Futures, forwards, swaps and options are common examples.

### Why would a company hedge?

To reduce uncertainty in an exposure that is not part of the risk it wants to take. The aim is usually to make future cash flows or costs more predictable rather than to speculate on market movements.

### What is the difference between a future and an option?

A future creates an obligation to transact at the agreed terms, while an option gives the holder a right without the same obligation. That flexibility is why an option has a premium.

### What is basis risk?

Basis risk is the remaining risk when the instrument used to hedge does not move perfectly with the underlying exposure. It is especially important in cross hedging.

### What is arbitrage?

Arbitrage is a combination of transactions that locks in a profit without taking the corresponding market risk or making a net investment. No-arbitrage reasoning is one of the foundations of derivative pricing.

### What is risk-neutral valuation?

It is a pricing method that uses a probability measure chosen to make discounted asset prices consistent with no-arbitrage. It is a pricing framework, not necessarily a forecast of real-world probabilities.

### Why is this relevant to aircraft leasing?

Because aircraft leasing involves valuable assets and long-dated contractual cash flows. Financial mathematics provides a framework for thinking about present value, interest rates, market risk, currency risk, sensitivity and the effect of uncertainty on financial decisions.

## Current material | What Erik has actually covered so far

The material currently available for this semester concentrates on:

- introduction to derivative markets
- mechanics of futures markets
- long and short hedges
- basis and basis risk
- choice of futures contract
- cross hedging
- optimal hedge ratios
- the number of contracts required for a hedge
- the airline jet-fuel hedging example

The rest of the page uses Hull and the full UL module descriptor to show where the module is going as later lectures are released. Erik should distinguish between **material already covered** and **material he recognises as later syllabus content** if asked in interview.

## Recall cues

**Course:** derivatives → futures → forwards → options → arbitrage → replication → risk-neutral pricing

**Hedging:** exposure → long/short hedge → basis risk → cross hedge → hedge ratio

**Aviation:** airline → jet fuel → heating-oil future → correlation → 0.78 hedge ratio → residual basis risk

**Abelo bridge:** cash flows → present value → rates → currency → risk → sensitivity → asset decisions
