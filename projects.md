---
layout: doc
handle: Projects
title: Projects
nav_order: 50
eyebrow: EXPLORE · EXPLAIN · APPLY
---
## Projects / Portfolio

I am interested in mathematics, but it is the **application of mathematics** that interests me most.

Some mathematical ideas can initially seem very abstract. An infinite convergent series, for example, is the idea of adding smaller and smaller amounts indefinitely. In financial mathematics that same structure becomes very practical: it helps explain the mathematics behind annuities, perpetuities and the value of future cash flows.

For me, mathematics becomes even more interesting when I can see the result of the calculation — and more interesting again when I can turn it into a program where assumptions can be changed and the consequences immediately explored.

**That is what this page is about: moving from mathematical ideas, to calculations, to code, and ultimately to something useful.**

I have also used this portfolio to demonstrate skills that are directly relevant to the type of work I would like to do. Rather than simply saying that I can work with data, financial mathematics or programming, I have tried to **show it by building things**.

For example, for an aircraft-leasing internship I put together a fleet map using public aircraft records and developed small financial and decision-support tools around aircraft leasing. The purpose is not to reproduce a company's internal systems or data. It is to demonstrate how I approach a problem: **find the relevant information, clean and check it, decide what matters, build something useful from it, and communicate the result clearly.**

Some of these tools are deliberately connected to the work I could encounter as an intern — aircraft and lessee data, reporting, financial calculations, lease cash flows, filtering, dashboards and identifying inconsistencies in source data.

My portfolio therefore combines university studies with projects that I have **extended beyond the assignment**. If I complete an analysis in R or SPSS, I may reproduce it in Python, make it reproducible in a Jupyter notebook or Google Colab, build an interactive version, or ask a different question of the same data.

The aim is not to present myself as an expert before I have worked in the industry. It is to show **how I learn, how I use quantitative ideas, and the kind of value I would like to learn to contribute in the workplace.**



&nbsp;

&nbsp;

## Fleet map | Ask what the records tell us

The interactive map brings together a public-record reconstruction of **61 aircraft, 26 lessees and 19 countries**. Treat the individual placements as research leads where records are incomplete.

ABEL0_MAP_APP

**Job connection:** A useful report needs consistent aircraft identities, lessee names, lease dates and source records. If two sources disagree, flag the discrepancy before using it for billing or a decision.



## Aircraft leasing decision lab | Change one assumption

Try an aircraft age or lease income, then compare the value of extending a lease with re-leasing after downtime and transition cost. The model uses **illustrative assumptions** and is designed for discussion, not Abelo pricing.

**Open the aircraft leasing lab**

**Job connection:** A clean dashboard should make a change visible and explainable. Which assumption drove the result: rent, downtime, maintenance cost or residual value? State what you checked before drawing a conclusion.



## Finance learning lab | From a friend loan to an aircraft

Start with the words **principal, term, repayment and risk**. Then build toward interest, PCP, a mortgage and an aircraft that earns lease income. The controls below let you test each step.

## Financial instruments | Start with the contract, not the formula

A **financial instrument** is an agreement that creates financial rights and obligations between parties. Start with the simplest possible example and keep adding one idea at a time.

**Friend loan → risk language → simple interest → compound interest → PCP → mortgage → aircraft finance**

[Go deeper in MS4027 — Fundamentals of Financial Mathematics]({{ '/modules/ms4027-fundamentals-of-financial-mathematics.html' | relative_url }})

The same questions keep returning:

**Who provides the money? Who receives it? For how long? What must be repaid? What can go wrong? Who carries that risk?**

**Friend loan**money now → money back later

**Simple interest**interest on principal

**Compound interest**interest on a growing balance

**PCP**deposit → monthly → balloon

**Mortgage**deposit → loan → ownership

**Aircraft**capital → asset → lease cash flow

## Friend loan | Finance before interest

Suppose a friend lends you **€1,000 today** and you agree to repay **€1,000 in one year**.

There is no interest, but there is already a financial contract and already some risk.

### Lender

The person providing the money.

### Borrower

The person receiving the money and taking on the repayment obligation.

### Principal

The amount originally borrowed: here, €1,000.

### Term

The agreed length of the borrowing: here, one year.

### Credit risk

The risk that the borrower does not repay as agreed.

### Creditworthiness / credit rating

Creditworthiness is the borrower's ability and willingness to repay. A formal credit rating is an external assessment used for companies, banks and governments.

### Default

Failure to meet a contractual payment or another material obligation.

### Security / collateral

An asset or claim that may protect a lender if the borrower defaults. A casual friend loan may have none.

### Reputational risk

Even without collateral, failure to repay can damage trust and future access to finance.

**Key idea:** interest is only one part of finance. **Time, obligation and risk exist even when the interest rate is 0%.**

## Simple interest | Pay for the use of money

With **simple interest**, interest is calculated only on the original principal.

**Interest:** I = Prt

**Amount repaid:** A = P(1 + rt)

For €1,000 at 6% simple interest for 3 years:

**Interest = €1,000 × 0.06 × 3 = €180**  
**Amount repaid = €1,180**

The important language is now **principal, rate, term, interest and maturity value**.

## Compound interest | Interest joins the balance

With **compound interest**, each interest calculation increases the balance on which later interest can be earned or charged.

For annual compounding:

**A = P(1+r)^t**

For €1,000 at 6% for 3 years:

**€1,000 → €1,060 → €1,123.60 → €1,191.02**

That extra €11.02 compared with simple interest is the effect of **interest on interest**.

The same idea becomes much more important when rates, terms and balances are large. Consumer loans and mortgages add another feature: the borrower usually makes regular repayments, so the balance is also being reduced over time.




## Vehicle finance | Look past the headline monthly payment

Comparing several vehicle-finance offers was a simple but revealing example of applied financial mathematics. The headline monthly payments made the offers look more similar than they really were, so I compared the **total cash cost and contract structure** instead of relying on the most visible number.

The calculation was straightforward enough to check on a handheld scientific calculator using school-level mathematics, but it identified an option worth roughly **€800 less overall**. I also checked whether a final balloon payment applied rather than assuming the monthly payment told the whole story.

What interested me was how much useful information can be hidden by presentation. The mathematics was not difficult; the value came from **asking the right comparison question, checking the full cash-flow structure and making the result visible**. The scale is very different, but the same habit carries into asset finance: understand the cash flows, terms, assumptions and value at the end before comparing alternatives.


## PCP | Buy a car with a final choice

PCP is useful because it separates the decision into an **up-front deposit**, a stream of **monthly payments** and an **optional final payment / GMFV**.

Use the model to compare structures rather than focusing on the monthly payment alone.

**Check the numbers → compare total cash outlay → recognise the capital constraint → understand the end-of-contract choice.**

### PCP assumptions





&nbsp;

## Mortgage | Buy a house with secured borrowing

Use the slider for fast exploration and the number box for precision. The house-price slider moves in **€5,000 steps**.

**Model convention:** “Deposit” means the cash paid up front. “Annual top-up” means an optional extra lump-sum mortgage repayment made after each 12 months of scheduled repayments.

### Repayment curves

Move across the chart or tap it to inspect exact monthly values.

Balance Principal repaid Interest paid





## From house to aircraft | Same cash-flow questions, bigger asset

A mortgage introduces **secured long-term borrowing**: the borrower contributes equity through the deposit, borrows the balance, pays interest and gradually reduces the principal.

Aircraft finance keeps those ideas but adds a commercial layer. The asset is not just something to own; it is expected to **generate lease income**.

**Home:** buyer equity + mortgage debt → house → borrower repays bank

**Aircraft:** lessor equity + debt → aircraft → airline pays lease rentals

At aircraft scale, the vocabulary expands naturally: **debt, equity, leverage, lease rental, counterparty credit risk, residual value, maintenance exposure and remarketing risk**.



## Aircraft | Finance an income-producing asset

The model below is deliberately illustrative. It is **not Abelo pricing**. It is a way to see the extra layer that does not exist in the residential mortgage calculator: a lessor may borrow to acquire the asset and then lease that asset to somebody else.

### Illustrative lessor assumptions





## What changed? | From €1,000 to an aircraft

The mathematics became richer, but the underlying questions did not change:

**capital → term → cash flows → risk → value at the end**

A friend loan makes **credit risk** visible. Simple and compound interest price the **time value of money**. PCP adds a **balloon payment and end-of-contract choice**. A mortgage adds **security and amortisation**. Aircraft finance adds **lease income, counterparty risk, asset management and residual value**.

That is the bridge from basic financial mathematics to the kind of asset-finance thinking used in aircraft leasing.



## Interview day | Countdown & location

This small planning tool keeps the interview time and location together.

**Tuesday 29 September · 11:10 AM** **Interview countdown**

**—**

