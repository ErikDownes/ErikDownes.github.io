---
layout: doc
permalink: /blog.html
handle: Blog
title: Blog
nav_order: 85
top_nav: true
description: Notes on software, tools, projects and practical technology choices.
eyebrow: SOFTWARE · TOOLS · PRACTICAL NOTES
public_mode: true
---


## Teamwork: Planning, Data and Adaptability

**7 October 2026**

During my TY placement at Mr Price, I worked as part of a large team reorganising the shop floor and redesigning the shelf layout. It was an all-hands-on-deck project, and everyone was encouraged to contribute ideas outside their normal role.

We needed to complete the changeover with minimum disruption to customers and minimum loss of sales. I created my first Gantt chart because the work had clear dependencies — one area often had to be cleared before another could move.

We also used data to choose the best time. Reolink cameras feeding into Frigate on a Raspberry Pi used AI computer vision to generate timestamped person-detection events. These discrete observations could be aggregated into integer footfall counts. A second camera provided redundancy, and the two feeds reconciled to the same overall pattern and totals, giving us extra confidence in the data.

We analysed the events locally in a Jupyter notebook using Python and pandas. By aggregating them by day of week and time of day, and then looking at the longer time-series pattern, we identified Sunday evening into Monday morning as one of the quietest periods.

When several staff became unavailable through illness, I took direction, switched tasks as priorities changed and helped focus effort on the activities that other parts of the project depended on. Despite being short-staffed, we completed the redesign within the planned window, minimising disruption to customers and protecting sales.

I have also developed teamwork in a different setting through pair programming at UL. Working closely with one colleague meant dividing the task, talking through our reasoning, reviewing each other’s code and making sure that both of us understood the final solution rather than simply splitting the work and joining it together at the end.

Together, those experiences reinforced three elements of successful teamwork for me: planning together, understanding how your work depends on others, and adapting together when circumstances change.



## CEFR and Interview English

The **CEFR scale** runs from **A1 to C2** and describes levels of language ability. For interview answers, the best target is around the **B2–C1 boundary**: clear, natural spoken English with short sentences, but with stronger vocabulary where it adds precision. A useful rule is **B2 sentence structure, B2–C1 general vocabulary, and C1 technical vocabulary**.
