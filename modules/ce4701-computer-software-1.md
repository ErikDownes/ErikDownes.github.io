---
layout: doc
title: "CE4701 — Computer Software 1"
code: "CE4701"
year: "1st"
semester: "Sem1"
status: "Core"
eyebrow: "JAVA · PROGRAMMING · TESTING · SOFTWARE ENGINEERING"
study_mode: true
---

<p><a href="{{ '/coursework.html' | relative_url }}">← Coursework</a></p>

## Key Line

**CE4701 is not “a pile of Java files”. It is a progression from problem → algorithm → code → test → explanation.**

The supplied material uses **Java** and largely teaches through **BlueJ**, but the transferable skills are broader: breaking a problem down, selecting data types and control structures, writing methods, creating classes and objects, testing code, debugging it and documenting what was done.

For our purposes:

**BlueJ = original teaching environment · Replit = easiest place to play · GitHub = permanent portfolio record · VS Code/local Java = serious development environment.**

JDoodle may later be useful for embedding a small runnable Java example directly in the portfolio. GitHub Codespaces is useful when a repository needs a complete reproducible development environment, but it is unnecessary for these small first-year programs.

## Module Map | What was actually taught?

The module overview states that CE4701 introduces a **high-level object-oriented programming language and its software-development environment**, with an emphasis on good programming and software-engineering practice.

The syllabus in the supplied module overview includes:

- software development and simple program-design techniques
- comparison of programming languages
- algorithms and pseudocode
- Java syntax and semantics
- primitive and reference data types
- variables, expressions and statements
- input and formatted output
- selection and repetition
- methods, parameters, return values and scope
- classes, objects, constructors and instance variables
- arrays and introductory collection ideas
- Java class libraries and API documentation
- integrated development environments
- testing, debugging and test-case definition
- the relationship between a program, runtime environment and operating system
- professional technical reporting
- independent information acquisition

The published learning outcomes can be reduced to seven practical abilities:

1. Turn a stated problem into an algorithm.
2. Describe the algorithm in pseudocode.
3. Implement it using structured programming constructs.
4. Test and debug the program.
5. Apply top-down and modular design.
6. Report software-engineering work professionally.
7. Find and integrate technical information independently.

### Assessment structure in the supplied AY25 overview

| Instrument | Weight | What it tests |
| --- | ---: | --- |
| Project work | 30% | Five challenges, 6% each |
| Online quizzes | 20% | Knowledge and understanding |
| Final examination | 50% | Programming knowledge and problem solving |

The source pack says a **C3 or higher was required in each assessment instrument** to pass the module.

## Java Progression | From first program to structured code

The archive has a clear learning sequence even though the files themselves are messy.

### Stage 0 · Computing literacy

Before Java, the course covers the operating system, files and folders, applications, Word/PDF/ZIP workflows, computer specifications, the Internet and basic digital organisation.

**Challenge 1** asks students to investigate two computer-based devices, compare their specifications, cite sources and produce a professionally formatted report. This is digital literacy and technical communication rather than programming.

### Stage 1 · Input, output and simple decisions

The introductory Java examples include:

- `HelloWorld`
- `PrintText`
- `PrintFormatted`
- `AddNumbers`
- `CompareNumbers`
- `NumberSquared`
- `OddEven`
- `FindMax`

Core ideas:

**`main` → variables → `Scanner` → arithmetic → `if` → output**

**Challenge 2** moves from the supplied `FindMax` example to a new `FindMin3` application that accepts three integers, finds the minimum using conditional logic, then repeats the task through a separate `min(a,b,c)` method. The brief explicitly requires testing cases where each parameter is the minimum and warns about equality edge cases such as `3, 3, 7`.

### Stage 2 · Control structures

The revision pack contains dedicated examples for:

- `if` / `if ... else`
- `while`
- `do ... while`
- `for`
- `switch`

The underlying question is always the same:

**What should happen next, and under what condition?**

### Stage 3 · Classes and objects

The material then distinguishes a **class** from an **object** and introduces:

- attributes / instance variables
- primitive versus reference types
- constructors
- getter and setter methods
- `toString()`
- object creation
- class tests
- basic UML-style class representation

Examples include `Student`, `StudentTest`, `Module`, `ModuleTest`, and later `Card`, `CardDeck` and `TestCardDeck`.

### Stage 4 · Methods and modular design

The `MyMath` template is explicitly labelled for **Challenge 3**. The supplied template already contains methods such as:

- total surface area of a cuboid
- factorial

and indicates further work involving minimums, sums, binomial coefficients, powers and a calculation of π.

The important idea is not the individual formula. It is:

**one job → one method → defined inputs → defined return value → separate test**

### Stage 5 · Arrays and data

The array material covers:

- declaration, creation and initialisation
- zero-based indexing
- `array.length`
- looping over arrays
- enhanced `for`
- arrays as reference types
- passing array references to methods
- returning arrays from methods
- `java.util.Arrays`
- introductory `ArrayList`
- multidimensional arrays

The source examples include `ArrayBasics`, `ArrayIntMarks`, `ArrayIntRandom`, `ArrayString`, `ArrayManipulate`, `ArraysMethods`, `ArrayLists` and `ArrayMultiDi`.

### Stage 6 · More methods, variables and small applications

The later examples include:

- static variables and methods
- method overloading
- variable-length argument lists
- command-line arguments
- random simulation
- simple text bar charts
- π approximation
- a playing-card / card-deck model
- `JOptionPane` input dialogs

Course Work 6 also revises loops and methods through a **divisors** problem and asks students to create and test a small **club membership Card class**.

## Evidence | Assignments, code and examinations

The uploaded source pack is **course material**, not proof that Erik personally wrote every program in it. Lecturer examples and templates must never be presented as Erik's own work.

The strongest evidence becomes portfolio material only when we have **Erik's own submitted or reconstructed version**, can run it, and can explain the changes.

### Strong portfolio candidates

| Candidate | Why it is useful | What must be verified |
| --- | --- | --- |
| **FindMin3** | Input, conditionals, methods, edge-case testing | Erik's own submitted `.java` file |
| **MyMath / MyMathTest** | Modular methods, mathematical functions, explicit test cases | Erik's completed Challenge 3 code |
| **ExploreArrays** | Arrays + methods + Javadoc + testing + Taylor series for `exp(x)` | Erik's completed Challenge 5 code |
| **Card / CardTest** | Classes, fields, constructors, getters/setters, `toString` | Whether Erik completed the exercise |
| **ArrayIntRandom extension** | Arrays, random values, frequencies, user-controlled ranges | Erik's modified version |
| **Divisors program** | Loops, modulus, refactoring into a reusable method | Erik's version or a fresh reconstruction |

**Challenge 5 is especially interesting for Financial Mathematics.** It approximates the exponential function using a finite Taylor/Maclaurin series, stores partial estimates in arrays, compares results with `Math.exp`, and asks about numerical error. That creates a natural bridge to continuous growth and discounting later in the degree.

### Examination evidence in the pack

The archive contains final-exam papers for **AY19, AY20 and AY24** plus an AY24 outline-solution Java project. The completed AY24 example revisits:

- variables and scope
- primitive and reference types
- loops and divisors
- formatted output
- methods
- classes and constructors
- arrays and array manipulation
- simple test cases

That gives us a useful **retrieval-practice bank**, but past-paper solutions should remain study material rather than portfolio projects.

## Code Library | What is in this archive?

I unpacked the supplied ZIP and recursively opened the nested project archives.

The raw pack contains **46 top-level items**. After expanding nested ZIP files there are **153 files**, representing **118 unique file contents** after exact duplicates are removed.

| Type | Count in expanded pack |
| --- | ---: |
| Java source files | 92 |
| PDF files | 33 |
| ZIP archives | 8 |
| BlueJ project files | 8 |
| README text files | 8 |
| Images | 3 |
| Video | 1 |

A substantial part of the apparent size is duplication. Exact duplicate copies include the module overview, Java revision archive, revision slides, Java summary, Java Notes PDF and several past exam files. The duplicated revision archive also duplicates many individual `.java` files.

The useful source groups are:

- **Module overview** — objectives, syllabus, outcomes, assessment and reading
- **Course Work 1, 2, 5, 6** — weekly practical instructions
- **Challenge 1, 2, 5** — assessed briefs present in this upload
- **MyMathProjectTemplate** — explicitly references Challenge 3
- **Java1 examples** — introductory console programs
- **Java1–4 revision examples** — consolidated revision set
- **Java4 examples** — arrays and `ArrayList`
- **Java5 examples** — methods, variables and case studies
- **Past exam papers and outline solutions**
- **Chapter summaries / lecture slides**
- **Reference books / Java Notes**
- **A short computer-specifications video and screenshots**

### Gaps and anomalies

Do not silently invent missing material.

- A **Challenge 3 PDF is not present**, although the `MyMath` template explicitly says it belongs to Challenge 3.
- A **Challenge 4 brief is not present** in this upload.
- Course Work 6 is inside the CE4701 pack but its heading says **“Computer Software 2”**. Preserve that as a source-text anomaly until another source resolves it.
- Lecturer example files commonly name **John** as author. They are teaching examples, not Erik's submissions.

## Portfolio Workflow | How we should use the Java now

For this material, use the platforms for different jobs.

**Replit — play and learn**

Take one small program, run it, change values, break it, repair it, add a test and explain what changed. Replit removes most setup friction and is ideal while we are learning the code.

**GitHub — permanent source of truth**

Only curated work should graduate to Erik's GitHub: his own code, a clean README, sensible filenames, an explanation of what the program demonstrates, and enough instructions to run it.

**Portfolio website — presentation layer**

The website should not dump dozens of lecturer files. It should show selected work as:

**problem → approach → Java concepts → test → result → what I learned → source code**

**JDoodle — optional embedded demo**

A very small self-contained Java example could later be embedded so a visitor can press **Run** without leaving the page.

**Codespaces — later, when complexity justifies it**

Use it when a repository needs a reproducible toolchain or multi-file development environment. It is unnecessary for `FindMin3`, `MyMath` or a one-class array exercise.

### Java ↔ Python translation rule

When learning, it is useful to translate selected Java examples into Python.

Do not do this because Python is “better”. Use it to expose the transferable algorithm.

For example:

**Java ceremony:** declare type → create `Scanner` → read integer → conditional → print  
**Python equivalent:** read value → conditional → print

If the logic survives the translation, Erik understands the algorithm rather than merely recognising Java syntax.

## AI Handover | Reusable instruction set

Copy the instruction block below into a future AI chat whenever this CE4701 archive is being processed.

~~~text
You are working with the University of Limerick module CE4701 — Computer Software 1.

Treat the supplied CE4701 files as a RAW SOURCE ARCHIVE, not as a clean course and not as proof of student authorship.

GOAL
Turn the archive into:
1. a clean study map,
2. a trustworthy record of what the module taught,
3. runnable learning examples,
4. a small number of genuine portfolio candidates,
5. interview-ready explanations of the transferable skills.

SOURCE DISCIPLINE
- Inventory all supplied files before drawing conclusions.
- Recursively inspect nested ZIP/project folders.
- Detect exact duplicates and do not count duplicates as separate evidence.
- Preserve useful source filenames so claims can be traced back.
- Distinguish clearly between:
  a) lecturer/module material,
  b) supplied example/template code,
  c) assessment briefs,
  d) past-paper material,
  e) Erik's own work.
- NEVER describe lecturer examples or templates as Erik's work.
- If Erik's submission is missing, say "student evidence not yet verified".
- Do not invent missing Challenge/Course Work documents.
- Record anomalies rather than silently correcting them.

WHAT TO EXTRACT
- module objectives
- syllabus
- learning outcomes
- assessment structure
- programming vocabulary
- Java concepts in teaching order
- algorithms/pseudocode
- classes and objects
- control structures
- methods and scope
- arrays and collections
- testing/debugging practices
- Javadoc/documentation practices
- assignment requirements
- exam themes
- named code examples and what each demonstrates

FOR EACH JAVA FILE OR PROJECT
Explain:
- purpose in one sentence
- input
- processing / algorithm
- output
- Java concepts used
- methods/classes involved
- test cases or edge cases
- any obvious defect or teaching trap
- how to compile/run it today
- whether it is lecturer material, a template, or verified student work
- whether it is worth reconstructing as a portfolio project

LEARNING METHOD
For any selected program:
1. Run the original.
2. Explain every important line in plain English.
3. Predict the output before running it again.
4. Change one input or requirement.
5. Break the code deliberately.
6. Read the compiler/runtime error.
7. Repair it.
8. Add at least one explicit test.
9. Refactor repeated logic into a method where appropriate.
10. Explain the same algorithm without Java syntax.
11. Optionally translate it into Python and compare the two implementations.

PORTFOLIO RULE
Do not publish the entire teaching archive as a portfolio.
Prefer a few pieces that Erik can genuinely explain and defend.

A portfolio item should contain:
- the problem
- Erik's implementation
- concepts demonstrated
- sample input/output
- tests
- what changed from the original exercise/template
- what he learned
- a GitHub source link
- optional runnable Replit/JDoodle demonstration

PLATFORM RULE
- Replit = experimentation and immediate running
- GitHub = canonical source, history and README
- portfolio website = explanation and selected evidence
- JDoodle = optional small embedded runner
- Codespaces = only when a full reproducible dev environment is genuinely useful

JAVA/PYTHON COMPARISON
Use Python comparisons when they improve understanding.
Keep the focus on the common algorithm and data flow.
Explain Java's static typing, class structure and compilation rather than treating its extra syntax as pointless ceremony.

QUALITY CONTROL
- Run or compile code before calling it working whenever the environment permits.
- Check equality and boundary cases, not only the happy path.
- Prefer small explicit tests.
- Check integer-division traps, array bounds, uninitialised locals, null references and type mismatches.
- Keep mathematical formulas dimensionally/logically correct.
- For numerical work, compare against a trusted library result and report error.

WEBSITE OUTPUT
When updating the CE4701 portfolio/study page:
- summarise copyrighted teaching material rather than reproducing whole slides/books,
- keep provenance,
- use short H2 sections and useful tables,
- preserve the distinction between learning material and student evidence,
- prioritise explanation over file dumping,
- connect strong examples to Financial Mathematics only where the connection is genuine.

CURRENT ARCHIVE NOTES
- The supplied pack has substantial exact duplication.
- Challenge briefs 1, 2 and 5 are present.
- The MyMath template explicitly references Challenge 3, but the Challenge 3 brief is absent.
- Challenge 4 is absent from this upload.
- Course Work 6 has a "Computer Software 2" heading even though it is stored in the CE4701 pack.
- The original teaching environment is mainly BlueJ.
- The strongest potential portfolio item in the supplied briefs is Challenge 5 / ExploreArrays because it combines Java, arrays, methods, testing, documentation and approximation of exp(x) by a Taylor series.
~~~

That block is deliberately stricter than a normal “summarise these files” prompt. It prevents the two biggest errors with this archive: **mistaking duplication for content** and **mistaking lecturer examples for Erik's work**.

## Recall Cues | What should Erik be able to say?

**What was CE4701?**  
A first programming and software-engineering module using Java: algorithm design, structured programming, classes, methods, arrays, testing, debugging and reporting.

**Why Java?**  
It forces explicit thinking about types, methods, classes and program structure, while still being small enough to learn through console programs.

**What transferred beyond Java?**  
Problem decomposition, algorithms, testing, debugging, documentation and the ability to learn unfamiliar technical tools.

**What should go into the portfolio?**  
Not the lecturer's archive. A small number of Erik's own reconstructed or submitted programs that run, are tested, are explained properly and are stored on GitHub.
