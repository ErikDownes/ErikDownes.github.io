---
layout: doc
permalink: /education/ms4215/python-training.html
title: "MS4215 — Python Data Analysis Training"
handle: "Python Data Analysis"
eyebrow: "MS4215 · EXPLAIN · EXPLORE · MODEL · EVALUATE"
study_mode: true
---

[← Projects]({{ '/projects.html' | relative_url }}) · [← MS4215 module]({{ '/modules/ms4215-advanced-data-analysis.html' | relative_url }})

# Python for Advanced Data Analysis

**What is data analysis actually for?** It turns messy observations into a clear, appropriately qualified answer to a real question. The objective is **not** to memorise a library of Python commands: it is to choose methods sensibly, check assumptions and explain findings.

We follow the **University of Limerick MS4215 order** from the supplied lecture slides and lab sheets, using the **original course datasets**. The original course uses **R**; these are additional **Python/Jupyter learning adaptations**, not replacements for the lecturer's instructions or an assertion that R was not taught.

## Begin: Week 1 — What does data analysis do?

**[Open the guided Irish weather notebook in Google Colab →](https://colab.research.google.com/github/ErikDownes/ErikDownes.github.io/blob/main/resources/ms4215/notebooks/MS4215_Python_01_What_Data_Analysis_Does_Weather.ipynb)**  
[View the actual .ipynb on GitHub](https://github.com/ErikDownes/ErikDownes.github.io/blob/main/resources/ms4215/notebooks/MS4215_Python_01_What_Data_Analysis_Does_Weather.ipynb)

**Investigation:** Which Irish weather stations typically have wetter days?

**Learn:** Ask a question | Rows and variables | Data types | Missing values | Histograms | Mean versus median | IQR | Group comparisons | Writing a defensible conclusion

*Teaching design:* Worked example → prediction before code → interpreted output → independent investigation. The notebook downloads the course dataset automatically in Colab. Nothing has to be installed locally.

[Read the original Week 1 explanation →]({{ '/education/ms4215/week-01.html' | relative_url }}) · [Open the Irish weather CSV →]({{ '/resources/ms4215/data/ireland_weather_2000_2023.csv' | relative_url }})

## Next: Week 2 — From description to regression

[Read Week 2: Correlation, simple and multiple regression →]({{ '/education/ms4215/week-02.html' | relative_url }})

**Big question:** If two measurements move together, can we describe the relationship, predict an outcome, and justify the prediction? This is where correlation, slopes, intercepts, residuals and R² enter the picture.

## The flagship investigation — Spotify Data Detective

**[Open Spotify Data Detective in Google Colab →](https://colab.research.google.com/github/ErikDownes/ErikDownes.github.io/blob/main/resources/ms4215/notebooks/MS4215_Python_02_Lab1_Spotify_Track_Energy.ipynb)**  
[View or download the actual Jupyter notebook on GitHub](https://github.com/ErikDownes/ErikDownes.github.io/blob/main/resources/ms4215/notebooks/MS4215_Python_02_Lab1_Spotify_Track_Energy.ipynb)

**The central question:** *What makes a song energetic — and how could our analysis fool us?*

This is a **new teaching investigation**, not the lecturer's six questions rewritten in Python. It uses the authentic **114,000-row Spotify dataset**, but organises the learning around decisions a responsible data analyst actually has to make.

### Six acts: scaffolded teaching that becomes independent analysis

| Act | What the learner investigates | New statistical habits |
|:--|:--|:--|
| 1. Understand | What exactly is a row? How many unique songs? | Variable types · unit of analysis · duplicate records · sampling |
| 2. Audit | Are missing values, zeros and duplicates the same problem? | Missingness · data quality · reasoned cleaning |
| 3. Explore | Is energy linked to loudness, genre or popularity? | Distribution · centre and spread · group comparisons · correlation |
| 4. Predict | Can audio features estimate unseen tracks' energy scores? | Baseline · regression · train/test split · MAE · test R² |
| 5. Challenge | Where is the model wrong, and what changes with the sample? | Residuals · data leakage · repeated splits · causal limits |
| 6. Defend | Could a music curator rely on our recommendation? | Evidence-based conclusions · limitations · professional reporting |

**The real data contain traps worth teaching.** The 114 genres each have exactly 1,000 rows, while many track IDs recur, sometimes under multiple genres. That is an opportunity to distinguish a **genre-labelled row** from a **unique song**, and to discuss misleading representations and non-independent train/test data.

**Teaching method:** predict before revealing → explore a worked model → change one assumption → explain the result → solve a genuinely new problem.

The final exercise offers **three independent missions** (music curator, data-quality investigator, predictive-model reviewer) and a reasoned report rubric. The learner chooses and defends an approach. The notebook is not an autofill exercise.

**Technical stack:** Python · pandas · NumPy · Matplotlib · scikit-learn. In Colab the notebook loads the dataset automatically. Work in VS Code or JupyterLab is also supported.

**A key limitation to teach:** Spotify already provides the energy score; predicting it from the other supplied audio features is a **deliberate training simulation**, not a claim that an actual application needs a redundant energy estimator. The relationships do not establish what *causes* musical energy or popularity.

[Original Lab 1 questions for reference →]({{ '/resources/ms4215/labs/lab_1_questions.pdf' | relative_url }}) · [Original dataset ZIP →]({{ '/resources/ms4215/archives/lab1_dataset_spotify.zip' | relative_url }})

## The original lab sequence — in order

| Lab | Application | Main statistical method | Training status |
|:--|:--|:--|:--|
| 1 | Spotify music | Data auditing, investigation, predictive evaluation, analyst reporting | **Extended six-act Python investigation available** |
| 2 | Espresso extraction | Design matrix, OLS estimation, tests and VIF | [Existing Python notebook](https://colab.research.google.com/github/ronandownes/coop/blob/main/resources/ms4215/notebooks/MS4215_Lab2_Espresso_R_to_Python.ipynb) |
| 3 | Blood pressure | Regression model building | Original exercise indexed |
| 4 | Earnings | Inference for regression | Original exercise indexed |
| 5 | Exercise and wellbeing | Mediation and moderation | Original exercise indexed |
| 6 | Palmer penguins | ANOVA and ANCOVA | Original exercise indexed |
| 7 | Baseball salaries | Robust regression, ridge, lasso and cross-validation | Original exercise indexed |
| 8 | Coronary heart disease | Logistic regression | Original exercise indexed |
| 9 | Diabetes | Model fit, ROC and classification | Original exercise indexed |

The **lab numbers are document labels**, not the week numbers. The original file collection includes lecture slides for **Weeks 1–3** and the **nine lab question sheets**. We will not invent missing lecture materials or label future notebooks as finished.

## How each learning notebook works

**QUESTION → DATA → QUALITY → EXPLORATION → METHOD → CHECKS → INTERPRETATION → COMMUNICATION**

A good submission must explain **what the analysis found, what it cannot establish, and why the method was appropriate**. Charts, code and p-values are evidence; they are not substitutes for the reasoning.

### Local Jupyter or Google Colab

- **Colab:** select the notebook above and run its cells. It loads data directly from the website.
- **Local Jupyter:** open the notebook in JupyterLab or VS Code. Place the original CSV in a `data/` folder if you want to work offline.
- **Libraries:** pandas, NumPy, Matplotlib and (for regression) statsmodels.

**Keep the R coursework and this Python learning project separate:** the Python work demonstrates understanding in a second environment; the original exercise instructions remain authoritative.
