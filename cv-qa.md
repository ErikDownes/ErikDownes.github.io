---
layout: doc
permalink: /cv-qa.html
handle: CV QA
title: CV QA
subtitle: Start with the whole CV claim, then drill down until every word, tool and example can be explained simply.
nav_order: 16
top_nav: false
description: CV drill page for checking that every claim, tool, technical term and example in Erik's CV can be explained clearly in interview.
eyebrow: CV QA · KNOW EVERY CLAIM · EXPLAIN EVERY TOOL · DEFEND EVERY EXAMPLE
cv_mode: true
---

> **How to use this page:** start with the whole CV block, answer the broad question, then work down through the pick-up questions at finer and finer granularity. Where the CV does not actually contain enough detail, the page says **Need detail from Erik/Ronan** rather than inventing an answer.\n\n**Rule:** if it is written on the CV, be ready to explain **what it means, what you actually did, what tool you used, why you used it and what the result was**.

## Teamwork | Teamwork — explain the whole section from start to finish

> **CV block:** Mr Price shop-floor reorganisation → Gantt chart → footfall data from Reolink/Frigate/Raspberry Pi → Python/pandas analysis → quiet changeover window → staff illness and changing priorities → successful completion → pair programming at UL → three teamwork lessons: plan together, understand dependencies and adapt together.

### Broad question | Tell me the whole Mr Price teamwork story.

**Answer:** During my TY placement at Mr Price, I worked as part of a large team reorganising the shop floor and redesigning the shelf layout. We wanted to complete the changeover with minimum disruption to customers and sales. I used a Gantt chart because the work had dependencies, and I analysed timestamped footfall events in Python and pandas to help identify a quieter period. When several staff became unavailable, I took direction, switched tasks as priorities changed and concentrated on work that other parts of the project depended on. Despite being short-staffed, we completed the redesign within the planned window.

**Pick-up:** What was your own contribution rather than the team's contribution?

### Mr Price | What exactly was being reorganised?

**Answer:** The shop floor and shelf layout were being redesigned. The CV says I worked as part of the team; it does not claim I designed the entire new layout myself.

### Mr Price | What does “all-hands-on-deck” mean here?

**Answer:** It means the reorganisation required a large team effort and people were encouraged to contribute outside their normal role because the changeover had to be completed within a limited window.

### Gantt chart | What is a Gantt chart?

**Answer:** A Gantt chart is a visual project schedule that shows tasks across time. It helps show the order of work and where one task depends on another.

### Gantt chart | Why did you create one?

**Answer:** Because the reorganisation had clear dependencies. Some work could not move until another area had first been cleared or completed.

### Dependencies | What does a dependency mean in a project?

**Answer:** A dependency is a relationship where one task relies on another task happening first or being available.

### Dependencies | Give one real dependency from the Mr Price work.

**Answer:** The CV gives the example that one area often had to be cleared before another could move.

### Disruption | What did “minimum disruption to customers” mean?

**Answer:** It meant trying to carry out the most disruptive work when fewer customers were in the store so normal shopping and sales were affected as little as possible.

### Sales | How could the timing of the changeover affect sales?

**Answer:** A large floor change during a busy period could obstruct customers, make products harder to access and interfere with normal trading. That is why the timing mattered.

### Reolink / Frigate / Raspberry Pi | Explain the technology chain.

**Answer:** Reolink supplied the camera feeds. Frigate processed the feeds and produced person-detection events. That processing ran on a Raspberry Pi, a small computer. The useful analytical output was timestamped detection events that could be counted over time.

### Computer vision | What does AI computer vision mean here?

**Answer:** Software analysed the camera images and detected people automatically. For this analysis, the useful result was not a person's identity; it was a timestamped detection that could contribute to a footfall count.

### Timestamp | What is a timestamp?

**Answer:** A timestamp records when an event happened, usually as a date and time. That allowed the detections to be grouped by day of week and time of day.

### Event / discrete observation | What was one observation?

**Answer:** One observation was a separate person-detection event at a particular time. It is discrete because it is a countable event rather than a continuously varying measurement.

### Integer counts | Why do footfall counts become integers?

**Answer:** Because people are counted as whole events: 0, 1, 2, 3 and so on, not fractional people.

### Footfall | What does footfall mean?

**Answer:** Footfall is the number of people entering or moving through a place over a period of time. Here it was used as an indicator of how busy the shop was.

### Redundancy | Why was there a second camera?

**Answer:** The second camera provided redundancy and a cross-check. The CV says the two feeds reconciled to the same overall pattern and totals, which increased confidence in the result.

### Reconciliation | What does it mean that the camera feeds reconciled?

**Answer:** It means the independently produced feeds agreed closely enough on the overall pattern and totals to support the same conclusion.

### Local analysis | What does analysing the data locally mean?

**Answer:** The CV says the events were analysed locally in Jupyter rather than relying on a public analysis service. The analytical need was counts and timing, not customer identity.

### Jupyter | What is Jupyter?

**Answer:** Jupyter is an interactive notebook environment where code, outputs, charts and written explanation can be kept together.

### Python | What is Python and what did you use it for?

**Answer:** Python is a general-purpose programming language widely used in data analysis. I used it to process and analyse the timestamped detection-event data.

### pandas | What is pandas and what did you use it for?

**Answer:** pandas is a Python library for tabular data analysis. I used it to organise, group and aggregate the events by day and time.

### Aggregation | What does aggregating events mean?

**Answer:** It means combining many individual detection events into useful summaries, such as counts for a particular day or time period.

### Day and time | Why group by day of week and time of day?

**Answer:** Because the decision was about finding recurring quieter periods, not one isolated moment. Grouping made the weekly pattern visible.

### Time series | What is a time series?

**Answer:** A time series is a sequence of observations ordered through time. Looking at the longer pattern helped avoid basing the decision on one unusual day.

### Quiet period | How did you identify Sunday evening into Monday morning?

**Answer:** I aggregated the events by day of week and time of day and then looked at the longer time-series pattern. That identified Sunday evening into Monday morning as one of the quietest periods.

### Staff illness | What changed when several staff became unavailable?

**Answer:** The team had fewer people than expected, so priorities had to change. I took direction, switched tasks and focused effort on work that other parts of the project depended on.

### Priorities | What exact tasks did you switch between?

**Answer:** **Need detail from Erik/Ronan.** The CV supports that I switched tasks as priorities changed, but it does not name the individual tasks.

### Result | How do you know the redesign was successful?

**Answer:** Despite being short-staffed, the team completed the redesign within the planned window while minimising disruption to customers and protecting sales.

### Pair programming | What is pair programming?

**Answer:** Pair programming is a way of working where two people collaborate closely on the same programming task rather than working entirely independently.

### Pair programming | What did you actually do with your partner?

**Answer:** We divided the task, talked through our reasoning, reviewed each other's code and made sure both of us understood the final solution instead of simply joining two separate pieces together at the end.

### Code review | What does reviewing each other's code involve?

**Answer:** Reading and checking the other person's code, discussing the logic and making sure the final solution is correct, clear and understood by both people.

### Shared understanding | Why did both people need to understand the solution?

**Answer:** Because effective teamwork is not just splitting work. Both people should be able to explain, check and take responsibility for the combined result.

### Teamwork lesson | What are your three teamwork lessons?

**Answer:** Plan together, understand how your work depends on other people's work, and adapt together when circumstances change.

---

## Communication Skills | Communication Skills — explain every claim and example

### O’Mahony’s | What kinds of orders, invoices and dispatch information do you work with?

### Client libraries | Who are the client libraries?

### Clear communication | Give an example of information that had to be clear and accurate.

### Pricing problem | What happened in the Mr Price pricing example?

### Pricing problem | Why did you involve a manager?

### Know your audience | What does “know your audience” mean?

### Articulation | What does articulation mean?

### Pace | Why might you change your pace when speaking?

### Level of detail | How do you decide how much detail to give?

### Body language | What does body language contribute to communication?

### Acknowledgement | What is a quick acknowledgement and when would you use one?

### Written update | What makes a written update useful?

### Estimate | Why is an honest estimate of completion time important?

### Structured table | When is a table better than a paragraph?

### Bar chart | When would you use a bar chart?

### Time-series graph | When would you use a time-series graph?

### Flow diagram | When would you use a flow diagram?

### Visualisation | What makes a visualisation useful rather than decorative?

### Accessibility | What do you mean by accessibility principles?

### Clear headings | Why do clear headings help?

### Zebra shading | What is zebra shading?

### Structured tables | What makes a table properly structured?

### Overleaf | What is Overleaf?

### LaTeX | What is LaTeX?

### Citations | What is a citation?

### Bibliography | What is a bibliography?

### Referencing | Why does proper referencing matter?

### GitHub | What is GitHub?

### GitHub Pages | What is GitHub Pages?

### GitHub vs GitHub Pages | What is the difference between them?

### HTML | What is HTML?

### Web visualisation | What kind of web-based visualisation have you used?

### Personal site | What is the purpose of your personal site?

### Technical communication | How does publishing a project help another person understand technical work?

### PCP | What does PCP stand for?

### PCP finance | How does PCP car finance work at a high level?

### Loan amortisation | What does loan amortisation mean?

### Deposit | What role did the deposit play in the comparison?

### Monthly repayments | What did you compare about the monthly repayments?

### GMFV | What does GMFV stand for?

### Final payment | Why does the final payment matter when comparing PCP offers?

### Total cash outlay | What does total cash outlay mean?

### €800 result | How did you calculate that the middle option was about €800 cheaper?

### Ordinary language | How did you translate the maths into ordinary language?

### GDPR | What does GDPR stand for?

### Privacy | What privacy issue existed with the footfall data?

### Blurred images | Why were the customer images blurred?

### Data minimisation | Why should you avoid identifying people when it is not necessary?

### Appropriate access | What does appropriate access mean?

### Publishing data | What information should not be published?

### Communication principle | Why do you define good communication as accurate, accessible, appropriately presented, referenced and useful?

## Problem Solving and Analytics | Problem Solving and Analytics — explain every calculation and tool

### Analytical approach | What does an analytical approach mean to you?

### Differences | What kind of differences do you look for when checking data or calculations?

### Assumptions | Why do assumptions need to be checked?

### Trusted result | What makes a result trustworthy?

### Excel reconciliation | What does it mean for a spreadsheet to reconcile?

### Broken reconciliation | What was wrong with the spreadsheet?

### Duplicate sheet | Why did you duplicate the sheet before investigating?

### Expose formulas | What does exposing the formulas mean in Excel?

### Trace calculations | How do you trace a calculation in a spreadsheet?

### Hard-coded value | What is a hard-coded value?

### Relative reference | What is a relative-reference formula?

### Hard-coded vs formula | Why was the hard-coded value a problem?

### Fix | What exactly did you replace it with?

### Dynamic workbook | What does it mean that the workbook updated correctly when the data changed?

### Dublin Bikes | What was the question your Dublin Bikes project was trying to answer?

### 55 million observations | What exactly is one station-status observation?

### Historical files | Where did the observations come from?

### Changing structures | What changed between the historical files?

### Timestamp formats | What different timestamp problems did you encounter?

### Concatenate | What does concatenate mean in pandas?

### Schema | What is a schema?

### Standardise schema | What did you standardise?

### Normalise timestamps | What does normalising timestamps mean?

### SQLite | What is SQLite?

### SQL | What does SQL stand for and what is it used for?

### SQLite and SQL | What is the difference between SQLite and SQL?

### Store cleaned data | Why did you move the cleaned data into SQLite?

### Query | What is a query?

### Derived field | What is a derived field?

### Hour field | How did you derive hour from a timestamp?

### Weekday/weekend | How did you classify weekday versus weekend?

### Station occupancy | How did you calculate station occupancy?

### Capacity | What does station capacity mean?

### Grouping | What does grouping data mean?

### Aggregation | What does aggregation mean in this project?

### Station-by-hour profile | What is a station-by-hour profile?

### 24-hour dashboard | What does the dashboard show?

### Scale | Why was a database more appropriate than a spreadsheet at this scale?

### Validation | How did you validate that the logic was correct?

### Workflow | Explain the sequence: raw data → standardise → group → aggregate → validate → visualise.

## Using Initiative | Using Initiative — explain the process improvements and learning

### Initiative | What does initiative mean to you?

### Process improvement | What is the difference between fixing one mistake and improving the process?

### Booksolve | What is Booksolve?

### Printed report | What information was on the printed Booksolve reports?

### Point-in-time snapshot | What does point-in-time snapshot mean?

### Outdated information | How could the printed report become outdated?

### Wrong customer | What actually happened when books went to the wrong customer?

### Immediate resolution | What did you do to resolve the customer issue?

### Root cause | Why did you look beyond the one-off mistake?

### Line manager | What did you raise with your line manager?

### Appropriate access | Why did you need appropriate Booksolve access?

### Excel export | What was the purpose of a refreshed Excel export?

### Paper reliance | Why could reducing reliance on paper improve accuracy?

### Follow-through | What did you do after suggesting the improvement?

### Verification | How did the newer information improve your order checks?

### Ownership | What does taking greater responsibility for accuracy mean?

### Independent learning | Give an example of something you learned because a project required it.

### Inconsistent structures | What inconsistency did the Dublin Bikes files have?

### Manual correction | Why did you avoid correcting millions of records manually?

### pd.to_datetime() | What does pd.to_datetime() do?

### Timestamp validation | How did you check that timestamp standardisation worked?

### Spreadsheet limit | Why was the dataset no longer suitable for a spreadsheet workflow?

### SQL aggregation | What work did you move into SQL?

### Open source | What does open-source software mean?

### Python | Why do you use Python?

### pandas | Why do you use pandas?

### SQLite | Why do you use SQLite?

### Jupyter | Why do you use Jupyter?

### Leaflet | What is Leaflet?

### OpenStreetMap | What is OpenStreetMap?

### Free technology | Why do you value freely available technology?

### CareerPortfolio Starter | What is CareerPortfolio Starter?

### Reusable structure | What part of your website is reusable by another student?

### Give back | What do you mean by contributing something back?

### Initiative principle | Explain curiosity, ownership, follow-through and learning quickly in one example.

## Projects, Portfolio and Volunteering | Projects, Portfolio and Volunteering — explain every project

### Portfolio | What is on your personal project portfolio?

### Practical problems | Why do you choose practical finance and data problems?

### Dublin Bikes summary | Explain the Dublin Bikes project in 30 seconds.

### Cleaning | What cleaning did you perform on the Dublin Bikes data?

### Datetime standardisation | What did datetime standardisation involve?

### Storage | Why did you use SQLite for storage?

### Aggregation | What aggregations did you perform?

### Leaflet map | What does the interactive Leaflet map allow a user to see?

### Strava | What is the Strava raw-data project?

### GPX | What is a GPX file?

### EDA | What does EDA stand for?

### Exploratory data analysis | What do you actually do during EDA?

### Validation | What did you validate in the Strava project?

### Feature engineering | What is feature engineering?

### Strava features | What features did you create from the raw GPX data?

### Matplotlib | What is Matplotlib?

### Leaflet explorer | What does the Strava Leaflet explorer show?

### Data limitations | What limitations did the Strava data have?

### Missing data | Why is it important not to invent missing information?

### PCP project | Explain the PCP calculator in 30 seconds.

### Same car | Why was comparing offers for exactly the same car useful?

### 36-month term | Why did the equal term matter?

### Same GMFV | Why did the same GMFV make comparison easier?

### Higher deposit | Why was the largest deposit not automatically the cheapest option?

### Future cost | What was the less obvious future cost?

### Cash comparison | What numbers did you add together to compare total cash outlay?

### AI | How do you use AI in your work?

### AI research | What do you use AI research for?

### AI coding | What do you use AI coding help for?

### AI debugging | What does debugging mean?

### Verification | How do you check AI-generated work?

### Responsibility | What does taking responsibility for the final result mean?

## Additional Information | Additional Information — explain the academic and technology story

### Financial Mathematics | Why did you choose Financial Mathematics?

### Maths and technology | How had maths and technology come together for you by the end of school?

### Broad course | What do you mean by a broad range of mathematical subjects?

### First CAO choice | Why was Financial Mathematics in UL your first CAO choice?

### Junior Cycle CBA | What is a CBA?

### Exceptional | What does an Exceptional CBA mean?

### Academic Excellence | What was the Academic Excellence award?

### Kolvenbach Medal | What was the Kolvenbach Medal for Business?

### Four H1s | Which subjects did you get H1s in?

### 579 points | What does 579 CAO points mean?

### Individual achievements | Why do you describe those school achievements as largely individual?

### Broader experience | How have university and work broadened you into teamwork, customers, responsibility and service?

### Scratch | What is Scratch?

### Technology journey | Explain the progression from Scratch → spreadsheets → Python/pandas → databases/SQL → visualisation.

### Docking-station observation | What does one Dublin Bikes observation contain?

### Station ID | What is a station ID?

### Bikes available | What does bikes available tell you?

### Free docks | What do free docks tell you?

### Latitude and longitude | What are latitude and longitude?

### Fixed location | Why are latitude and longitude fixed for a docking station?

### Snapshots over time | How can repeated snapshots show whether a station tends to fill or empty?

### Rebalancing pressure | What does rebalancing pressure mean?

### Jupyter workflow | What did you do in Python inside Jupyter?

### pandas datetime | Why was pd.to_datetime() important?

### SQLite/SQL | What work did the database handle?

### Leaflet | What did the interactive visualisation add that a static table could not?

### Cycling | Why has cycling influenced the projects you choose?

### Financial Maths fit | Why does Financial Mathematics suit you?

### Cashbook fit | Why does Cashbook appeal to you?

### Finance + data + software | Give one example of how finance, data and software come together in a real customer problem.

### Final check | If an interviewer points at any line of this CV and says “What does that mean?”, can you explain it simply without reading?
