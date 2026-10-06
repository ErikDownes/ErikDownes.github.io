---
layout: doc
permalink: /analytics.html
handle: Problem Solving & Analytics
title: Problem Solving & Analytics
subtitle: How I analyse information, find what is wrong, explain it and reach a
  reliable solution.
nav_order: 40
top_nav: true
description: Problem solving, data analysis, accuracy and troubleshooting
  interview preparation.
eyebrow: INTERVIEW DOMAIN · PROBLEM SOLVING & ANALYTICS
---
## Break Down a Large Problem | Tell me about a difficult problem you had to break down and solve.

### Situation

In the 2024 Higher Level Applied Maths paper, I worked through a business-planning problem where a company had different promotional strategies available over four years, with different profits and losses attached to each route.

### Task

Looking at the whole network at once made the problem complicated, so I needed to reduce it into smaller decisions while keeping the final objective clear — **maximising total profit**.

### Action

I used **Bellman’s Principle of Optimality**. Instead of trying every complete route from the start, I worked backwards from the final year.

At each stage I calculated the best outcome available from that point onwards, recorded it, and then used that result when analysing the previous stage. That turned one large problem into a sequence of smaller, manageable decisions.

### Result

By working backwards systematically, I could identify the optimal route through the network rather than relying on trial and error.

### What I learned

When a problem looks too large, I try to **define the objective, break it into smaller components, solve them in a logical order and then bring the results back together**.



&nbsp;

&nbsp;

## First assumption or approach |  Tell me about a time your first assumption or approach was wrong and you had to rethink it.

### Situation

For my Leaving Certificate Applied Maths modelling project, I investigated the height needed for a roller coaster to descend and complete a 26-metre-radius loop.

### Task

My first model considered gravity only. It was mathematically valid and gave a minimum starting height of **65 metres**, but I realised that it was too idealised to represent a real roller coaster because it ignored forces that dissipate energy.

### Action

I treated the 65-metre result as a baseline rather than the final answer and refined the model in stages.

In the second iteration I introduced **air resistance**. That required me to model changing drag as velocity changed, integrate over the motion and find the initial speed needed to complete the loop. The required height increased to **67.27 metres**.

In the third iteration I introduced **friction** as another opposing force and recalculated the energy losses. The required height increased again to **72.23 metres**.

I also checked the reasonableness of the final result against a real roller coaster with similar dimensions rather than assuming that a more complicated model must automatically be correct.

### Result

The iterations showed clearly how changing the assumptions changed the answer: **65 m → 67.27 m → 72.23 m**.

### What I learned

My first approach was not useless — it gave me a clean baseline — but it was not realistic enough. I learned to **state my assumptions, test their effect, refine the model when necessary and validate the final result against reality** rather than becoming attached to the first answer.



&nbsp;

&nbsp;

## Inconsistency  | Tell me about a time you found an error or inconsistency and worked out what was causing it.

### Situation

I was working with an existing Excel spreadsheet where one of the calculated results no longer matched what I expected after some of the input figures had been changed.

### Task

I needed to work out whether the problem was with the new inputs or with the way the spreadsheet itself had been built.

### Action

I first duplicated the worksheet so I could investigate it without changing the original. I then used **Show Formulas** and compared the calculations across the relevant rows and columns.

That exposed the problem: one of the cells that should have contained a formula using **relative cell references** had instead been replaced with a hard-coded figure. It had originally produced the right answer, but when the input data later changed, that cell did not recalculate with everything else.

I replaced the hard-coded value with the correct relative-reference formula and then changed the inputs again to check that the calculation updated properly.

### Result

The figures reconciled again, and the spreadsheet responded correctly when its inputs changed.

### What I learned

A spreadsheet can **look correct because the current answer is correct while the underlying logic is still wrong**. When something does not reconcile, I check the calculation structure as well as the numbers themselves.



&nbsp;

&nbsp;

## Messy Data | Tell me about a time you analysed a large or messy set of data and made it reliable.

Yes. The **Dublin Bikes rebalancing project** is the right story, and we do not need to drown it in code.



### Situation

I worked with the historical Dublin Bikes data to analyse **where the bike network becomes unbalanced during the day and where rebalancing is likely to be needed**.

The raw archive was roughly **55 million station-status observations** collected over several years. They are snapshots of each station — timestamp, bikes available, empty stands, capacity and location — rather than individual journeys.

### Task

Before I could analyse anything, I had to turn that very large historical archive into **one consistent, reliable dataset**. The difficulty was not just its size; data collected over different periods was not always represented in exactly the same way, particularly dates and timestamps.

### Action

I combined the historical files, standardised the fields and normalised the timestamps so records from different periods could be compared properly.

I then reduced the full dataset into something operationally useful: for each station and time of day I could calculate its **occupancy — bikes available relative to station capacity**.

Rather than trying to display 55 million rows, I aggregated the data into a much smaller hourly view and compared **weekday and weekend patterns**. That let me identify when stations tended towards empty or full and see how that pressure moved across the network.

### Result

The finished dashboard turns a very large, messy historical dataset into a simple 24-hour picture of the network, showing **where and when rebalancing is likely to matter most**.

### What I learned

The main lesson was that with large datasets, the analysis is only as good as the preparation. **Make the data consistent first, reduce it to the level needed for the question, validate it, and only then analyse or visualise it.**

And yes — for the **Problem Solving & Analytics** page, the short visible question cues should be something like:

Break Down Problem

Rethink Assumptions

Find the Error

Messy Data

Reconcile & Check

Support a Decision

Much easier to scan.



&nbsp;

## Reconcile & Check | Tell me about a time you had to check or reconcile information to make sure it was accurate.

### Situation

I was checking an existing Excel spreadsheet where some of the totals no longer reconciled after the underlying data had been updated.

### Task

I needed to work out whether the source data was wrong or whether the spreadsheet calculations themselves were causing the difference.

### Action

I duplicated the worksheet first so I could investigate without affecting the original.

When I exposed the formulas and compared the calculations, I found that some results had been **calculated manually and typed in as figures** rather than being driven by formulas. They had once been correct, but when the inputs changed, those cells stayed fixed.

I replaced the manual entries with proper formulas and used simple Excel logic and lookups where appropriate so that the calculations were linked to the underlying data. I then filtered and checked the records again to make sure the totals reconciled.

### Result

The discrepancy disappeared, but more importantly the spreadsheet became **repeatable**: when the source data changed, the outputs updated with it rather than relying on somebody remembering to recalculate figures by hand.

### What I learned

For me, reconciliation is not just getting two totals to agree once. It is checking that the **logic underneath the totals is reliable**, so the same process continues to produce the right result when the data changes.



&nbsp;

## Used analysis for decision |   Tell me about a time you used analysis to support a decision or recommendation.

### Situation

In fifth year, my mother was comparing three PCP offers for an Audi A4: a higher deposit with lower monthly repayments, a lower deposit with higher monthly repayments, and an option in between. She was leaning towards the higher deposit because she had the money available in the bank.

### Task

I wanted to compare the offers objectively on their **overall financial outcome**, rather than letting the size of the monthly repayment drive the decision.

### Action

I used what I had learned about loan amortisation to build a simple [PCP calculator](/pcp-calculator.html). I modelled the deposit, the annuity of monthly repayments and the GMFV balloon payment, and used the calculator to compare the **total cash outlay** under each offer.

I then used graphs and the headline figures to make the comparison easy to understand.

### Result

The middle option was about **€800 cheaper in total cash outlay**, so the analysis changed the basis of the decision from immediate affordability to the overall financial cost.

### What I learned

Analysis is most useful when it **changes or improves a decision**. It is not enough to calculate an answer; the result has to be presented in a way that someone can actually use.



&nbsp;