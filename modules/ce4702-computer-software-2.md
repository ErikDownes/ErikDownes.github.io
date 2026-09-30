---
layout: doc
title: "CE4702 — Computer Software 2"
code: "CE4702"
year: "1st"
semester: "Sem2"
status: "Core"
eyebrow: "JAVA · OBJECT-ORIENTED PROGRAMMING · DATA · ALGORITHMS"
study_mode: true
---

<p><a href="{{ '/coursework.html' | relative_url }}">← Coursework</a></p>

## Key Line

**CE4702 develops the step from writing small programs to designing software that can represent data, validate it, process it with algorithms, handle errors and present useful results.**

Java is the teaching language, but the transferable ideas are broader:

**data type → representation → input → validation → algorithm → test → output**

The academic record shows a **B1** in CE4702.

## Public Learning Lab

The module now has a separate **[CE4702 Learning Lab]({{ '/learning/ce4702/' | relative_url }})**.

This is the working layer rather than the summary layer:

**predict → run → change → test → explain**

Each lab publishes the explanation, Java source, test/output evidence and a browser-based route to a real cloud development environment. The learning pages themselves use static HTML/CSS with no custom JavaScript.


## What this module is really about

Computer Software 2 builds directly on the programming foundations from CE4701.

The uploaded AY25 material moves through:

- classes, inheritance and polymorphism
- object-oriented design
- exceptions and robust input handling
- graphical user interfaces
- event-driven programming
- Java graphics and Java 2D
- strings and regular expressions
- file input and output
- CSV-style data processing
- arrays and structured data
- searching and sorting
- recursion
- algorithm analysis
- testing and documentation
- using a professional IDE such as NetBeans

This is not a data-analysis module in the statistical sense. However, it teaches several of the foundations that data analysis depends on: **how data is represented, typed, read, validated, stored, transformed, searched and written back out.**

## Data & Data Types | The important bridge

A computer cannot work with “data” in the abstract. The program needs to know **what kind of value it is dealing with and how that value is represented**.

CE4702 reinforces that distinction.

### Primitive data

Examples include:

- `int` — whole numbers such as an ID or attendance count
- `double` — real-valued quantities
- `boolean` — true / false state
- `char` — a single character

### Reference data

Examples include:

- `String` — text
- arrays such as `int[]`
- objects created from classes
- collections and other Java library objects

That matters because the permitted operations depend on the type.

A text value read from a GUI or file may need to be **parsed** into a number before arithmetic is possible. An invalid conversion can generate an exception. Two objects are not compared in exactly the same way as two primitive numbers. An array stores a collection of values but has indexing and size constraints.

The broader lesson is:

**before analysing data, know its type, structure, source and valid range.**

## A Small Data Pipeline | Challenge 6

The clearest data-processing exercise in the uploaded material is **Challenge 6 — Files, Sorting and Searching**.

The task works with a CSV file containing approximately 200 club-member records with fields for:

**index · ID · attendance · score**

The required workflow is effectively a small data pipeline:

**CSV file → read text → parse fields → store arrays → calculate summaries → frequencies → sort → search → write results**

The exercise asks students to:

- read a CSV file with `Scanner`
- split text into fields
- convert text to integer values
- store IDs, attendance and scores in arrays
- calculate average attendance and average score
- calculate the frequency of each score
- identify unique values
- sort data
- implement a search method
- test the search and sort methods
- write the calculated results to a new file

An optional extension uses a **regular expression search** against the data.

This is not pandas or SQL, but conceptually it is already:

**ingest → clean/parse → structure → transform → analyse → retrieve → export**

That is a useful bridge from first-year Java into later data analysis.

## Object-Oriented Programming | Inheritance & Polymorphism

Coursework 2 and Challenge 2 focus on inheritance and polymorphism.

The supplied Shape project starts with a superclass and several subclasses such as:

- Shape
- Rectangle
- Triangle
- Circle
- Quadrilateral

The challenge extends the superclass with common properties such as orientation angle and line width, then adds behaviour including rotation and translation.

Students are also asked to create:

- a `Square` subclass
- another non-trivial two-dimensional shape
- constructors
- getters and setters
- overridden methods
- tests
- Javadoc documentation

The important design idea is:

**put common state and behaviour in the superclass; specialise only what genuinely differs.**

The 2024 examination also tests polymorphism through an abstract `Person` superclass and different payment subclasses stored in a common `Person[]` array.

## Robust Programs | Exceptions & Validation

Challenge 3 develops a Guessing Game using dialogs and exception handling.

The program must:

- generate a random number
- accept user input
- convert a `String` to an integer
- reject invalid values
- handle exceptions
- keep the application running rather than crashing
- track games won and lost
- use methods and named constants
- exercise different paths through the code

The important principle is not the game.

It is:

**assume input can be wrong and design the program to deal with it deliberately.**

That carries directly into data work. Real data contains invalid values, missing values, unexpected formats and edge cases.

## GUI & Event-Driven Programming

Coursework 4 introduces graphical user interfaces and the NetBeans IDE.

The material covers Swing components such as:

- `JFrame`
- `JPanel`
- `JLabel`
- `JTextField`
- `JButton`
- `JCheckBox`
- `JComboBox`
- `JList`

and layout managers including:

- FlowLayout
- BorderLayout
- GridLayout

Challenge 4 asks students working with a partner to build either a GUI version of the Guessing Game or another original application.

The development process is explicit:

**analyse → design → implement → test → iterate**

The interface is therefore only one part of the exercise. The deeper lesson is connecting user events to program logic while keeping the application robust.

## Graphics, Strings & Regular Expressions

Coursework 5 extends the module into graphics, strings and pattern matching.

Graphics topics include:

- `Graphics` / `Graphics2D`
- colour and fonts
- lines, rectangles, ovals, arcs and polygons
- drawing inside a `JPanel`
- screen refresh and movement
- mouse interaction
- simple timing / thread delay

Challenge 5 asks for an original graphics application, with a screen-saver style project offered as one route.

The same coursework introduces:

- `String`
- `Character`
- `StringBuilder`
- `Pattern`
- `Matcher`
- regular expressions

Regular expressions matter because they allow programs to describe and detect **patterns in text data** rather than checking every possible string manually.

## Algorithms | Search, Sort & Recursion

The final part of the module introduces classic algorithms.

The supplied examples include:

- linear search
- binary search
- selection sort
- insertion sort
- merge sort
- factorial recursion
- Fibonacci recursion
- Towers of Hanoi
- recursive graphics

The module does not stop at using `Arrays.sort()`. Challenge 6 asks students to implement a sorting algorithm directly and create explicit test cases.

The 2024 final examination asks students to complete a selection sort and explain why it requires **O(n²)** comparisons.

That is the computer-science layer underneath software:

**not merely “does the program run?” but “what algorithm is it using, and how does its cost grow as the data grows?”**

## Module Progression | From objects to algorithms

| Stage | Main idea | Transferable skill |
| --- | --- | --- |
| Classes | Represent state and behaviour | Structure a problem |
| Inheritance | Reuse common behaviour | Design relationships |
| Polymorphism | Common interface, different implementations | Generalise code |
| Exceptions | Handle failure deliberately | Robustness |
| GUI | User events drive program behaviour | Interface + logic |
| Graphics | Coordinate systems and repeated updates | State and visualisation |
| Strings / regex | Process and validate text | Pattern recognition |
| Files / CSV | Persist and retrieve data | Data ingestion |
| Arrays | Store collections of values | Data structures |
| Search / sort | Retrieve and organise values | Algorithms |
| Recursion | Solve a problem in terms of smaller versions | Computational thinking |
| Big-O | Analyse how work grows | Efficiency |

## Evidence | What the uploaded material supports

The Drive folder contains the full CE4702 teaching pack for the material currently available, including coursework, challenge briefs, lecture/reference PDFs, Java example archives, IDE material and past examinations.

There is also a very large **JDK23_NetBeans25.zip** installer bundle. It accounts for most of the storage footprint but is not substantive module content.

The useful evidence includes:

- **Coursework 2 / Challenge 2** — inheritance and polymorphism
- **Coursework 3 / Challenge 3** — exceptions, dialogs and the Guessing Game
- **Coursework 4 / Challenge 4** — GUI design and event-driven programming
- **Coursework 5 / Challenge 5** — graphics, strings and regular expressions
- **Coursework 6 / Challenge 6** — files, CSV data, frequencies, searching, sorting and recursion
- **AY19 / AY24 final examinations** — evidence of the examinable computer-science concepts
- Java example projects for BlueJ and NetBeans
- reference material and Java API exploration

### Source discipline

The teaching pack is **evidence of what the module covered**, not proof that every supplied program was written by Erik.

Lecturer examples, templates and textbook code should remain learning material.

Portfolio claims should be restricted to work that can be verified as Erik's own submission, reconstruction or extension.

## Strong Portfolio Candidates

### 1. Challenge 6 · CSV Data Processor

Probably the strongest bridge to Erik's later quantitative work.

A cleaned-up version could demonstrate:

**file input → parsing → arrays → descriptive summaries → frequencies → sorting → searching → file output**

A modern extension could reproduce the same pipeline in Python/pandas and compare the two implementations.

### 2. Challenge 4 · GUI Application

Useful evidence for:

- working with a partner
- interface design
- event handling
- testing normal and error use cases
- integrating separate pieces of code

### 3. Challenge 2 · Shape Hierarchy

Useful evidence for explaining:

- inheritance
- constructors
- method overriding
- encapsulation
- testing
- class design

### 4. Challenge 5 · Graphics Application

Useful if Erik's original solution is available because the brief explicitly rewards originality and visual design.

## Teamwork Connection

Several CE4702 challenges are explicitly designed as **pair work**.

That makes the module a natural source of evidence for the teamwork description already used on the Skills Profile:

**divide the work → integrate the code → test the combined solution → resolve problems together**

Before naming a particular challenge publicly, the original student submission should be checked so the evidence remains precise.

## From Java to Data Analysis

CE4702 and a later data-analysis module answer different questions.

**Computer Software asks:**

- How is the data represented?
- What type is each value?
- How do I read it?
- How do I validate it?
- How do I store it?
- How do I search or sort it?
- What happens when something goes wrong?
- How efficient is the algorithm?

**Applied Data Analysis asks:**

- What does the data tell us?
- What statistical model or test is appropriate?
- How uncertain is the result?
- What conclusion is defensible?

The later statistical work is much easier to understand properly when the underlying computing ideas are already familiar.

## Interview Answer | What is CE4702 about?

**“Computer Software 2 extended our Java work into object-oriented design, inheritance, polymorphism, exception handling, GUIs, file processing and algorithms. One part I find particularly relevant now is the data-processing side: reading structured data from files, converting it into appropriate types, storing it in arrays, calculating summaries, sorting and searching it, and testing that the program behaves correctly. It gave me a good foundation for later data and quantitative work.”**

## Recall Cues

**Objects → inheritance → exceptions → GUI → strings → files → data → search/sort → recursion**

**Data type → representation → validation → algorithm → test → result**
