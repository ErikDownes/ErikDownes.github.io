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

## Lab 1 — Spotify Track Energy in Python

**[Open the guided Spotify laboratory in Google Colab →](https://colab.research.google.com/github/ErikDownes/ErikDownes.github.io/blob/main/resources/ms4215/notebooks/MS4215_Python_02_Lab1_Spotify_Track_Energy.ipynb)**  
[View the actual .ipynb on GitHub](https://github.com/ErikDownes/ErikDownes.github.io/blob/main/resources/ms4215/notebooks/MS4215_Python_02_Lab1_Spotify_Track_Energy.ipynb)

**Investigation:** Which musical characteristics are associated with track energy?

The notebook follows **all six original Lab 1 question groups in order**: inspect the data → histograms and summaries → correlations → simple linear regression → multiple linear regression → residual diagnostics.

It uses **3,000 tracks sampled reproducibly from the original 114,000-track file**. Python sampling will not pick the identical records as R's `sample_n()`, even with the same seed.

[Original Lab 1 questions →]({{ '/resources/ms4215/labs/lab_1_questions.pdf' | relative_url }}) · [Original Spotify dataset (ZIP) →]({{ '/resources/ms4215/archives/lab1_dataset_spotify.zip' | relative_url }})

## The original lab sequence — in order

| Lab | Application | Main statistical method | Training status |
|:--|:--|:--|:--|
| 1 | Spotify music | Exploration, correlation, regression and diagnostics | **Python notebook available** |
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
