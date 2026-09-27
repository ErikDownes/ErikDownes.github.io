---
layout: doc
title: "MS4034 — Applied Data Analysis"
code: "MS4034"
year: "2nd"
semester: "Sem2"
status: "Core"
eyebrow: "APPLIED STATISTICS · PYTHON · GOOGLE COLAB"
intro: "Learn the statistical ideas properly, then implement them in Python. SPSS is not the skill; applied statistical reasoning is."
---
<p><a href="{{ '/modules-projects.html' | relative_url }}">← Modules & Projects</a></p>

## Key Line

**Eric: for our purposes, we are doing MS4034 in Python.**

The lecturer may demonstrate techniques in SPSS or R. That is fine. The underlying mathematics and statistical ideas are what matter.

Our workflow is:

**question → data → method → Python → result → interpretation**

Use **Google Colab** on your own Google account so the work is available anywhere and there is almost no setup friction.

## What this module is really about

Applied Data Analysis is about taking real data and deciding what can reasonably be learned from it.

The important skills are:

- understanding the question
- recognising the type of data
- choosing an appropriate statistical method
- checking assumptions
- carrying out the analysis
- interpreting uncertainty
- explaining the result in ordinary language

The software is secondary.

## Python | Main working environment

Use **Google Colab + Python** as the practical laboratory for this module.

Core tools:

- **pandas** — importing, cleaning, filtering and reshaping data
- **NumPy** — numerical work
- **SciPy** — probability distributions and hypothesis tests
- **statsmodels** — regression, ANOVA, inference and diagnostics
- **scikit-learn** — prediction, classification and decision trees
- **Matplotlib / Seaborn** — graphs and statistical visualisation

You do not need to memorise every command.

You need to understand enough to describe the analysis, read the generated code, run it, inspect the output and explain whether the result makes sense.

## SPSS | Translate it, do not major in it

SPSS is one interface for carrying out statistical procedures.

If a lecture says:

**Analyze → Compare Means → Independent-Samples T Test**

our question is:

**What statistical test is being performed, why is it appropriate, and how do we reproduce it transparently in Python?**

Examples:

| Statistical idea | Python route |
| --- | --- |
| Independent-samples t-test | `scipy.stats.ttest_ind()` |
| Chi-square test | `scipy.stats.chi2_contingency()` |
| Correlation | `pandas`, `scipy.stats` |
| ANOVA | `statsmodels` |
| Linear regression | `statsmodels` / `scikit-learn` |
| Logistic regression | `statsmodels` / `scikit-learn` |
| Bootstrap | NumPy / SciPy / custom resampling |
| Decision tree | `scikit-learn` |

The important thing is not the sequence of menu clicks. It is the statistical reasoning.

## Core statistical toolkit

The module develops practical experience with ideas such as:

- data collection and survey design
- sampling
- descriptive statistics
- probability distributions
- confidence intervals
- hypothesis testing
- statistical power
- sample-size calculations
- ANOVA and post-hoc comparisons
- non-parametric methods
- correlation
- simple and multiple regression
- logistic regression
- bootstrap methods
- experimental design
- introductory predictive modelling and decision trees

These are transferable methods. They are not owned by SPSS.

## Colab | How we will work

For each topic:

1. Open the dataset in Colab.
2. State the statistical question in plain English.
3. Explore and visualise the data.
4. Choose an appropriate method.
5. Run the analysis in Python.
6. Inspect assumptions and output.
7. Interpret the result in plain English.
8. Change something and rerun it so you know what the code is doing.

AI can help write or explain code, but **Eric must understand the question, the method and the result**.

## Data files | Keep control of the source

For CSV datasets, use a reproducible source.

Preferred order:

1. **Stable direct URL** if the source is reliable and unlikely to disappear.
2. **A copy in your own Google Drive / Google Sheets**.
3. **A local copy** kept with the project.

Before relying on a dataset, check that it still opens, has the expected columns and has not silently changed.

For Colab work, the aim is that the same notebook can be opened later and the data can still be loaded without hunting around for a lost file.

## Titanic | First practical dataset

The Titanic data are a good first project because the variables immediately support useful questions.

Possible questions include:

- Did survival differ by passenger class?
- Was survival associated with sex?
- How did age relate to survival?
- Did embarkation point matter?
- Can we predict survival from several variables together?

That gives a natural progression from:

**descriptive statistics → visualisation → contingency tables → hypothesis testing → regression / classification**

One dataset can therefore support several parts of the module.

## Regression | Why it matters

Regression is one of the most transferable parts of the module.

It asks how an outcome changes as one or more explanatory variables change.

In aircraft asset management, analogous questions might be:

**aircraft age + utilisation + maintenance history → maintenance cost**

or:

**aircraft characteristics + market conditions → estimated value**

The point is not that MS4034 is an aviation module.

The point is that the same statistical reasoning transfers directly to commercial datasets.

## Sampling, uncertainty and judgement

Good analysis starts before a test is run.

Ask:

- Where did the data come from?
- Is the sample representative?
- Are values missing?
- Are there outliers?
- Is the sample large enough?
- Are the assumptions reasonable?
- Could there be confounding variables?
- Does statistical significance actually matter commercially?

A sophisticated model cannot rescue poor data or a badly framed question.

## AI | Use it as an accelerator

A modern workflow can start in ordinary language:

> Load this CSV, inspect missing values, summarise the variables, plot the distributions and test whether these two groups differ.

AI can often generate a first Python implementation quickly.

Then the real work begins:

**run → inspect → challenge → modify → interpret**

Natural language is becoming a high-level interface to code, but mathematical and statistical understanding still decides whether the answer is useful.

## Asset Management | Why this module matters

For an asset-management placement, the transferable skill is:

**take unfamiliar data → identify the relevant variables → quantify patterns and uncertainty → communicate a defensible conclusion**

Possible business applications include:

- lease reporting
- billing checks
- utilisation analysis
- maintenance trends
- portfolio comparisons
- anomaly detection
- forecasting
- valuation support
- management reporting

The strongest interview point is not “I used SPSS”.

It is:

**“I learned how to analyse data statistically, and I am comfortable reproducing that work in Python and explaining the result.”**

## Interview answer | What is MS4034 about?

**“Applied Data Analysis is about choosing appropriate statistical methods for real datasets and then interpreting the results properly. We cover areas such as hypothesis testing, ANOVA, regression and other applied methods. I am particularly interested in reproducing that work in Python because it makes the analysis transparent, reproducible and easy to extend.”**

## Recall cues

**Question → data → method → Python → result → interpretation**

**Do not memorise software menus. Understand the statistics.**
