---
layout: doc
permalink: /blog.html
handle: Blog
title: Blog
nav_order: 100
description: Notes on software, tools, projects and practical technology choices.
eyebrow: SOFTWARE · TOOLS · PRACTICAL NOTES
public_mode: true
---
## miniforge

##   
**Miniforge3-Windows-x86_64.exe**  
  
Snagit in 2026: subscription-only — and the best alternatives

**5 October 2026**

I looked again at **Snagit** because it does substantially more than the built-in Windows Print Screen / Snipping Tool. The real attraction is not simply taking a screenshot. Snagit adds the workflow around the capture: **scrolling capture, annotations, arrows, numbered steps, blur and redaction, OCR/text extraction, screen recording, quick editing and sharing**.

The problem is the licensing model.

### Can you still buy Snagit outright?

For the current version, **no**.

TechSmith moved **Snagit 2025 and later to an annual subscription-only model**. If you already own an older perpetual version, that remains yours, but TechSmith no longer sells the current Snagit release as a new perpetual licence.

- [TechSmith — transition to annual subscription pricing](https://support.techsmith.com/hc/en-us/articles/27009223314701-TechSmith-Transition-to-Annual-Subscription-Pricing-Model-in-2025)
- [TechSmith — Snagit pricing](https://www.techsmith.com/store/snagit)
- [TechSmith — Snagit products and plans](https://www.techsmith.com/all-products/)

At the time of checking, **Snagit Individual is US$39 per year**, billed yearly.

### Student and education pricing

TechSmith advertises **Snagit for students at US$20 per year**, compared with the normal US$39 individual subscription.

There is an important restriction: the individual student offer is provided through **Student Beans** and TechSmith says it is available in the **United States, United Kingdom and Canada**. Ireland is not listed for that individual student offer.

TechSmith also has separate education licensing for accredited institutions and says full-time students, staff and faculty using the software for educational purposes can qualify for education pricing.

- [TechSmith — Snagit education pricing](https://www.techsmith.com/store/snagit/education)
- [TechSmith — education discount eligibility](https://support.techsmith.com/hc/en-us/articles/360025206292-Am-I-Eligible-for-the-Education-Discount)
- [TechSmith — Snagit for students](https://www.techsmith.com/snagit/use-cases/students/)

So the US$20 student price is attractive **where the Student Beans offer applies**, but it should not be assumed to be available to an Irish student.

### Why Snagit is more than Print Screen

The Windows Snipping Tool is perfectly good for a quick screenshot. Snagit becomes useful when screenshots are part of a repeated workflow.

Typical Snagit-type work includes:

- capturing an entire scrolling page rather than only the visible screen;
- adding arrows, callouts, boxes, highlights and numbered steps;
- blurring or redacting private information;
- extracting text from an image with OCR;
- recording the screen or making a short GIF;
- editing a screenshot immediately after capture;
- building instructions or documentation quickly.

That is why a proper Snagit replacement needs to be compared with **Snagit's capture-and-edit workflow**, not merely with the Print Screen key.

## Free and one-time-purchase alternatives


| Tool | Cost model | Best for |
| ---------------- | -------------------------------------------------- | ----------------------------------------------------------------- |
| **ShareX** | Free and open source | Best full-featured free Snagit alternative on Windows |
| **Greenshot** | Free and open source | Simpler screenshots and annotation |
| **Screenpresso** | Free version; Pro is a one-time perpetual purchase | Closest fit if you want to own the software rather than subscribe |


### ShareX — best completely free alternative

**ShareX** is the first option I would try if the requirement is **€0**.

It is free and open source and includes a very broad set of capture methods: full screen, active window, monitor, region, **scrolling capture**, screen recording and GIF recording.

It also includes after-capture tools such as an image editor, arrows, text, step numbers, magnification, blur and **OCR**. Its OCR uses the Windows OCR engine locally.

- [ShareX official site](https://getsharex.com/)
- [ShareX — scrolling screenshot documentation](https://getsharex.com/docs/scrolling-screenshot.html)
- [ShareX — OCR documentation](https://getsharex.com/docs/ocr)

The trade-off is that ShareX exposes a lot of options. It is more configurable than Snagit in some respects, but its interface is less polished and can initially feel more technical.

### Greenshot — simplest free alternative

**Greenshot** is also free and open source on Windows.

It is particularly good for quick screenshots followed by simple editing: **annotations, highlighting, arrows, text and obfuscating sensitive parts of an image**. It is easier to understand than ShareX if the main need is capturing and marking up screenshots rather than building automated workflows.

- [Greenshot official site](https://getgreenshot.org/)
- [Greenshot downloads](https://getgreenshot.org/downloads/)

Greenshot is closer to a very good screenshot utility; ShareX is closer to a complete capture toolbox.

### Screenpresso — the interesting one if you hate subscriptions

**Screenpresso** is particularly interesting because it still offers a **perpetual licence**.

Screenpresso Pro is advertised at **US$29.99 for one user as a one-time purchase**. The licence includes one year of upgrades and maintenance. When that period ends, renewal is optional: you can remain on the version you already have and use it indefinitely.

Its Pro features include a fuller image editor, **OCR**, HD/4K video capture, system-sound recording, automatic subtitles, document generation, video clipping/merging and additional editing and sharing tools.

- [Screenpresso pricing](https://www.screenpresso.com/pricing/)
- [Screenpresso — update and perpetual-licence policy](https://www.screenpresso.com/support/update-included/)

That model is much closer to the way older Snagit licences worked: **buy the software, keep the version you bought, and only pay again if future upgrades are worth it to you**.

## My shortlist

If I were choosing on Windows:

**Want completely free:** start with **ShareX**.

**Want the simplest free screenshot editor:** try **Greenshot**.

**Want something closer to old Snagit with a one-off purchase:** try **Screenpresso Pro**.

**Want Snagit's own polished workflow and do not mind subscriptions:** Snagit remains a strong product, but the move to annual licensing makes it much less attractive for somebody who previously bought a perpetual licence.

For most people who already know they dislike annual software subscriptions, I would try **ShareX first**, then **Screenpresso** if ShareX feels too technical.

---

## Cashbook interview technology: SQL matters, but it is not the whole story

**5 October 2026**

**SQL is the clearest explicitly named technical skill in the Cashbook job specification, but this is not a SQL-programmer job.** It is an **implementation and junior business-consulting role** where finance knowledge, data handling, troubleshooting, learning unfamiliar systems and customer communication all matter.

The strongest technical profile is therefore not simply “I know SQL”. It is someone who can understand financial data, investigate problems, work with structured information and explain what is happening to a customer or colleague.

### Technologies explicitly mentioned in the Cashbook role

The job specification specifically names:

- **Microsoft SQL**
- **Microsoft Excel**
- **AI tools**

The role also sits around financial-software implementation, **bank reconciliation, cash application, collections, lockboxes, customer troubleshooting and automation**.

Cashbook integrates with ERP and finance systems and works with bank, remittance and ledger data. Its product and integration material describes workflows involving structured files and data exchange, including formats such as **CSV, Excel/XLS, XML, TXT, EDI, BAI and MT940**, as well as connections with ERP platforms.

- [Cashbook — TIMS ERP integration](https://www.cashbook.com/erps/tims-erp-software/)
- [Cashbook — implementation](https://www.cashbook.com/implementation/)
- [Cashbook — Cash Application](https://www.cashbook.com/cash-application-software/)

### What Erik should emphasise

#### Excel

**Absolutely relevant.**

The role involves financial processes where reconciliation, checking, matching and structured data are central. Excel is useful evidence of being comfortable with:

- formulas and logical checks;
- comparing records;
- identifying exceptions;
- organising financial data;
- checking whether two sets of figures reconcile.

This is directly relevant to bank reconciliation and cash application.

#### SQL

SQL is probably the strongest *new technical keyword* in the job description.

Erik does not need to pretend to be a database engineer. What matters is being able to understand the purpose of SQL and discuss core ideas such as:

- `SELECT`
- `WHERE`
- `JOIN`
- grouping and aggregation
- matching records across tables
- finding unmatched or exceptional transactions

For Cashbook, a very natural example is:

**bank feed → ledger data → SQL matching → exceptions → reconciliation**

That is much more useful than learning SQL syntax in isolation.

#### Python and pandas

**Python is not explicitly requested in the Cashbook job specification, but it is highly relevant.**

Python and pandas demonstrate that Erik can:

- import structured data;
- clean and validate it;
- compare datasets;
- automate repetitive processing;
- investigate mismatches;
- manipulate dates, text and numerical fields;
- create repeatable analysis rather than doing everything manually.

That maps very naturally onto Cashbook's work because its software is dealing with bank transactions, remittance information, invoices, customers and ledger records.

A Python or pandas example therefore provides good evidence of the same underlying thinking that would be useful in an implementation role, even if Cashbook's production stack is different.

#### Java

Java is also worth mentioning because Erik has already studied it in **Computer Software 1 and Computer Software 2**.

The useful part is not merely being able to say “Java”. Those modules provide evidence of:

- programming logic;
- classes and objects;
- methods;
- arrays and collections;
- file and CSV processing;
- testing;
- debugging;
- searching and sorting;
- exception handling;
- regular expressions;
- working collaboratively on code.

That demonstrates that he has learned a programming language formally and can transfer those concepts to another technical environment.

#### R and statistical software

R and statistical software are useful supporting evidence of broader data competence.

They are less directly relevant to the Cashbook role than **Excel, SQL and Python**, but they show that Erik is comfortable working with datasets, analytical methods and unfamiliar software.

#### GitHub, Jupyter and Google Colab

These are supporting technologies rather than headline requirements.

They help demonstrate that Erik can actually work with code and reproducible analysis rather than simply talk about programming.

- **GitHub** — versioned project and code work
- **Jupyter** — interactive Python analysis
- **Google Colab** — reproducible notebook-based work

### The better interview answer

Rather than listing technologies one after another, Erik should explain the transferable capability behind them.

A strong answer would be:

> **“I’ve worked with Excel, Python and Java, and I have experience processing structured data and analysing datasets. I’m also developing my SQL because I can see how important databases and matching data are to Cashbook’s implementation work. I’m comfortable learning new technical systems rather than being tied to one language.”**

That is substantially stronger than simply saying:

> “I know SQL.”

### What Cashbook is really looking for

The best combination for this particular placement is probably:

**Finance understanding + Excel + SQL + Python/data handling + troubleshooting + customer communication**

That combination fits the role because an Implementation Associate is not simply writing software.

The work involves understanding a customer's financial process, helping implement Cashbook software, working with data, investigating problems, improving automation and communicating clearly with the people using the system.

Cashbook presents itself as a company combining **finance and technology expertise**, which is exactly why a Financial Mathematics student with both quantitative and programming experience can make sense for the role.

### What to prepare before the interview

With limited preparation time, the highest-value technical topics are:

- **SQL joins** — how two related tables can be matched;
- **Python / pandas** — loading, cleaning and comparing datasets;
- **CSV and structured data files** — how financial data moves between systems;
- **APIs** — a high-level understanding of systems exchanging data;
- **ERP systems** — what they are and why Cashbook integrates with them;
- **Bank reconciliation** — matching bank transactions against accounting records and investigating differences.

The important thing is not to become an expert in six technologies overnight.

The aim is to be able to explain what each one does, connect it to Cashbook's work and show that the underlying concepts are already familiar from university and project work.

