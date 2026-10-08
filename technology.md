---
layout: doc
permalink: /technology.html
handle: Technology
title: Technology
subtitle: How I use and learn technology — Excel, Python, pandas, databases,
  SQL, AI and projects.
nav_order: 200
top_nav: false
interview_mode: true
description: Python, pandas, SQL, databases, Excel and technical aptitude for
  interview preparation.
eyebrow: INTERVIEW DOMAIN · TECHNOLOGY
---
## Excel | How would you use Excel in a finance role?

I can organise data, calculate totals, match records and check exceptions. I'm practising **IF**, **SUMIFS**, **XLOOKUP**, filters and pivot tables in a [spreadsheet workbook](https://docs.google.com/spreadsheets/d/1CsGCxVfs8xBEGT7KsAcbAFXfqFl-XcvSe9Jb4rv5h0A/edit?gid=1524497728#gid=1524497728). I would always check an unusual figure against its source.

## Excel | What does IF do?

**IF** checks a condition and returns one answer if it is true and another if it is false. For example, it can flag an invoice for review when the amount paid is too low.

## Excel | What is the difference between SUMIF and SUMIFS?

**SUMIF** adds values meeting one condition. **SUMIFS** can use several conditions, such as payments for one department within a particular month.

## Excel | What is XLOOKUP used for?

**XLOOKUP** finds a matching reference in another table. I could use an invoice ID to find its payment record, then investigate any missing or duplicate match.

## Excel | What do the dollar signs mean in an Excel formula?

The dollar signs keep a reference fixed when a formula is copied. For example, **$H$4** always points to H4, which is useful when every row uses the same rate.

## Excel | What is IFERROR for?

**IFERROR** deals with a formula error, such as division by zero. I would check *why* it happened rather than automatically hiding a genuine data problem.

## Excel | How would you check a spreadsheet that stopped balancing?

I would show the formulas, trace the references, check the source totals and test a known example. A hard-coded number in place of a formula can make a workbook fail when inputs change.

## Excel | How would you clean imported data?

I would check dates and number formats, remove unwanted spaces, look for duplicates and filter for missing values. Then I would recheck the totals before using the data.

## Excel | What does a pivot table do?

A pivot table groups many rows into a quick summary, such as expenditure by month or category. I would verify the data range and the totals before using a chart.

## Excel | How is Excel different from SAP Financials?

Excel is useful for calculations, checking and analysis. SAP Financials is an organisation's controlled system for finance transactions. I would follow the approved SAP procedures rather than treating my spreadsheet as the official record.


## STAR · Working with large data

In my Dublin Bikes project, I worked with **96 CSV files** covering eight years and about 55 million observations. I used pandas to **standardise dates** and combine the data. The result was too large to manage conveniently as another CSV, so I **stored it in SQLite** and used SQL for the analysis.

96 CSV files|Standardise dates|SQLite

## STAR · Standardising date formats

The Dublin Bikes project covered eight years of data, but the **date formats** were inconsistent. I used pandas `to_datetime()` to **standardise** the dates and **check** that they had converted correctly before combining the data for analysis.

Date formats|Standardise|Check

## STAR · Working with raw data

Combining my interests in cycling and data analysis, I imported one of my Strava GPX files into Python. GPX files provide basic raw data, including GPS coordinates, elevation and sometimes timestamps. I **inspected** the available fields, **cleaned** the elevation data and **calculated** useful measures without assuming information was there when it was not.

Inspected|Cleaned|Calculated

## STAR · Building a financial tool

My mother was comparing three PCP offers for the same car, so I built a calculator comparing the deposit, monthly repayments, final GMFV and total cash outlay. The middle option came out about €800 cheaper overall. I later used the same loan-amortisation ideas in an interactive mortgage calculator.

Financial modelling|Comparison|Practical value