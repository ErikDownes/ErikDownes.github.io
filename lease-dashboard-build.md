---
layout: doc
handle: How I Built the Lease Calculator
title: How I Built the Turboprop Lease Calculator
eyebrow: PORTFOLIO · FINANCIAL MODELLING · JAVASCRIPT
public_mode: true
---

## Why I built it

I wanted to turn aircraft leasing concepts into something I could manipulate rather than just read about. The calculator lets me change assumptions such as lease income, aircraft value, discount rate, residual value and transition costs and immediately see how the economics change.

It is an illustrative learning model, not a valuation of any particular lessor, airline or aircraft transaction.

## From financial maths to an application

The starting point was familiar financial mathematics: cash flows, discounting and NPV. I then connected those ideas to aircraft-specific questions such as residual value, aircraft age, lease term, downtime and the economics of extending or re-leasing an aircraft.

The useful part is not producing one number. It is seeing which assumptions drive the result and how sensitive the result is when those assumptions move.

## Building it

The application runs entirely in the browser using HTML, CSS and JavaScript. I work with VS Code, Git and GitHub and had experience coding before the current generation of AI tools.

I used AI-assisted and agentic coding heavily during development to help structure components, debug JavaScript, improve the interface and iterate quickly. Having an existing interest in programming made that much more useful: I could describe what I wanted, inspect the result, test it, spot when something was wrong and keep refining it rather than treating generated code as a black box.

## Testing the model

I tested the calculator by changing one assumption at a time and checking whether the direction of the result made financial sense. Higher discount rates should reduce present value; stronger lease income should improve cash flow; greater transition downtime should make a re-lease case less attractive, all else equal.

I then added conservative, base and upside cases so the model could be used for sensitivity analysis and stress testing rather than presenting a single forecast as certain.

## What I learned

The project helped connect coding with financial judgement. A model can calculate quickly, but the important questions are still human ones: Are the assumptions reasonable? What is missing? Which variable matters most? How would the conclusion change under a less favourable scenario?

That is the part I enjoy most — using mathematics, data and software together to make a problem easier to explore and explain.

[Open the Turboprop Lease Calculator →]({{ '/lease-dashboard.html' | relative_url }})
