---
layout: doc
permalink: /pivotal-corporate-study.html
handle: CV
title: CV
subtitle: UL CV — evidence, experience and achievements.
nav_order: 15
top_nav: true
description: UL CV evidence tailored for the Cashbook Limited Implementation
  Associate (TIMS) interview.
eyebrow: CV · UL EVIDENCE · EXPERIENCE · ACHIEVEMENTS
public_mode: true
---
## Teamwork

During my TY placement at Mr Price, I worked as part of a large team reorganising the shop floor and redesigning the shelf layout. It was an all-hands-on-deck project, and everyone was encouraged to contribute ideas outside their normal role.

We needed to complete the changeover with minimum disruption to customers and minimum loss of sales. I created my first Gantt chart because the work had clear dependencies — one area often had to be cleared before another could move.

We also used data to choose the best time. Reolink cameras feeding into Frigate on a Raspberry Pi used AI computer vision to generate timestamped person-detection events. These discrete observations could be aggregated into integer footfall counts. A second camera provided redundancy, and the two feeds reconciled to the same overall pattern and totals, giving us extra confidence in the data.

I analysed the events locally in a Jupyter notebook using Python and pandas. By aggregating them by day of week and time of day, and then looking at the longer time-series pattern, we identified Sunday evening into Monday morning as one of the quietest periods.

When several staff became unavailable through illness, I took direction, switched tasks as priorities changed and helped focus effort on the activities that other parts of the project depended on. Despite being short-staffed, we completed the redesign within the planned window, minimising disruption to customers and protecting sales.

I have also developed teamwork in a different setting through pair programming at UL. Working closely with one colleague meant dividing the task, talking through our reasoning, reviewing each other’s code and making sure that both of us understood the final solution rather than simply splitting the work and joining it together at the end.

Together, those experiences reinforced three elements of successful teamwork for me: planning together, understanding how your work depends on others, and adapting together when circumstances change.



## Communication Skills

My retail, logistics and university experience has developed strong written and verbal communication skills. At O’Mahony’s, I work with orders, invoices, dispatch information, colleagues and client libraries, so information needs to be clear, accurate and appropriate to the person receiving it. At Mr Price, I learned to listen to customers, verify the facts and involve the appropriate manager when resolving a pricing problem.

I try to make information easy for other people to understand and act on. That means knowing the audience and adjusting my articulation, pace, level of detail and body language, as well as choosing the right level of communication for the situation — from a quick acknowledgement that a message has been received to a clear written update for a client, including an honest estimate of when work will be completed. In written material, I also use simple accessibility principles such as clear headings, zebra shading and properly structured tables.

I also enjoy translating quantitative work into language another person can use. When my mother was comparing three PCP finance offers for the same car, I used the mathematics of loan amortisation to build a calculator and compare the deposit, monthly repayments, GMFV/final payment and total cash outlay. I then used graphs and headline figures to explain the result in ordinary language; the middle option was about €800 cheaper overall.

I am also conscious that good communication includes knowing what information should not be shared. When we used footfall data during the Mr Price store reorganisation, the customer images were already blurred because there was no operational reason for us to identify individual customers. That reinforced the importance of GDPR, privacy and only using the information genuinely needed for the task.

That experience reinforced that good communication means making information accurate, understandable, useful and appropriate, while working closely and responsibly with the people who depend on it.

## Problem Solving and Analytics

Financial Mathematics has developed my analytical approach across mathematics, statistics, finance, accounting, modelling and data analysis. I like identifying differences, checking assumptions and working systematically until the result can be trusted.

In Excel, I investigated a spreadsheet that no longer reconciled after its inputs changed. By duplicating the sheet, exposing the formulas and tracing the calculations, I found a hard-coded value where a relative-reference formula should have been. Replacing it restored the reconciliation and made the workbook update correctly when the data changed.

For larger data, my Dublin Bikes project involved about 55 million station-status observations spread across historical files with changing structures and timestamp formats. I used pandas to concatenate the files, standardise the schema and normalise the timestamps, then SQLite/SQL to store and query the cleaned data. I derived time-based fields such as hour and weekday/weekend, calculated station occupancy from bikes available relative to capacity, and used grouping and aggregation to reduce millions of observations into station-by-hour profiles for a 24-hour weekday/weekend dashboard. This strengthened my approach: understand the raw data, standardise it, group it at the level relevant to the question, aggregate it into something useful, validate the logic and choose technology appropriate to the scale.

That now gives him useful technical vocabulary he can talk about naturally:

“concatenation”, “schema standardisation”, “datetime normalisation”, “derived fields”, “grouping”, “aggregation”, “station-level occupancy”, “hourly profile”, “weekday/weekend segmentation”.

## Using Initiative

I try to look beyond the immediate task and ask whether the underlying process can be improved. At O’Mahony’s, I was working from printed Booksolve order reports that were point-in-time snapshots and could become outdated. After an inconsistency contributed to books being sent to the wrong customer, I helped resolve the immediate issue and then raised the root cause with my line manager. I suggested reviewing whether appropriate Booksolve access and a refreshed Excel export could provide more current information and reduce reliance on paper. I followed this through by obtaining the appropriate access and learning enough of the system to use more current information in my checks.

My independent project work reflects the same approach. I regularly take a practical question, identify what I need to learn and build something beyond formal course requirements. When inconsistent timestamps blocked my Dublin Bikes analysis, I learned to use pandas datetime tools, including [pd.to](http://pd.to)_datetime(), to standardise them, validate the results and keep the project moving.

I bring initiative through curiosity, responsible follow-through and a willingness to learn quickly.

## Projects, Portfolio and Volunteering

I maintain a personal project portfolio at [https://erikdownes.github.io](https://erikdownes.github.io), where I apply university learning to practical finance and data problems.

Dublin Bikes turns about 55 million historical station-status observations into a 24-hour weekday/weekend rebalancing dashboard, using Python/pandas for cleaning and datetime standardisation, SQLite/SQL for storage and aggregation, and Leaflet for the interactive map.

My Strava raw-data project starts from GPX data and follows a full workflow: exploratory data analysis (EDA), validation, feature engineering, pandas, SQLite/SQL, Matplotlib visualisation and a Leaflet explorer. It records data limitations rather than inventing missing information.

My PCP car-finance calculator came from a real decision my mother was making between three finance offers for exactly the same car. Each offer had the same 36-month term and the same GMFV, or final balloon payment, so the main variables were the size of the initial deposit and the 36 monthly repayments. Her instinct was that, since she had the money available in the bank, she might as well pay the largest deposit and reduce the monthly repayments. I looked at the offers more critically and used loan-amortisation mathematics to bring the less obvious future cost into the open. By combining the deposit, all 36 monthly repayments and the final GMFV, I could compare the total cash outlay directly. The analysis showed that the apparently attractive higher-deposit option was not necessarily the cheapest overall, and the middle option was about €800 cheaper.

I use AI for research, coding and debugging, while checking source data, testing outputs and taking responsibility for the final result.

## Additional Information

I chose Financial Mathematics because journeys through maths, technology and people had all started to come together for me by the end of secondary school. I was always drawn to maths and wanted a university course with a broad range of mathematical subjects, so putting Financial Mathematics in UL first on my CAO was an easy choice.

My technology journey moved from Scratch and spreadsheets into Python and pandas, and then into databases, SQL and visualisation. In my Dublin Bikes data-analysis project, I worked with about 55 million timestamped docking-station observations. Each observation is a snapshot of a station at a particular time, recording the station ID, timestamp, number of bikes available, number of free docks, capacity and fixed latitude and longitude. By comparing those snapshots over time, I could calculate how full or empty each station tended to be and identify where rebalancing pressure developed across the network. I used Python in Jupyter, pandas — including [pd.to](http://pd.to)_datetime() for timestamp standardisation — SQLite/SQL for storage and aggregation, and Leaflet for the interactive visualisation.

The people side has developed too. School began more with individual achievement, including four H1s, 579 CAO points and the Kolvenbach Medal for Business, while work at Mr Price and O’Mahony’s has taught me more about teamwork, customers, responsibility and reliable service.

Financial Mathematics suits me because it brings those three journeys together: mathematics, technology and people. That is also why Cashbook appeals to me — it applies finance, data and software to real customer problems and turns analysis into something useful.