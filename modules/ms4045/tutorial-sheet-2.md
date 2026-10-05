---
layout: doc
title: "MS4045 — Tutorial Sheet 2"
handle: "Tutorial Sheet 2"
code: "MS4045"
year: "3rd"
semester: "Sem1"
status: "Midterm 1"
eyebrow: "MS4045 · MIDTERM 1 · SHEET 2"
mathjax: true
---
{% include ms4045-styles.html %}

<p><a href="{{ '/modules/ms4045-complex-analysis.html' | relative_url }}">← MS4045 Complex Analysis</a></p>

<div class="ms4045-sheet-nav">
<a href="{{ '/modules/ms4045/tutorial-sheet-1.html' | relative_url }}">Sheet 1</a>
<a href="{{ '/modules/ms4045/tutorial-sheet-1-solutions.html' | relative_url }}">Sheet 1 solutions</a>
<a href="{{ '/modules/ms4045/tutorial-sheet-2.html' | relative_url }}">Sheet 2</a>
<a href="{{ '/modules/ms4045/tutorial-sheet-2-solutions.html' | relative_url }}">Sheet 2 solutions</a>

<a href="https://drive.google.com/file/d/1BYlMtF7qvH9AtHkPMNSWUerooI0cMANc/view?usp=drivesdk" target="_blank" rel="noopener">Original PDF ↗</a>
<a href="https://drive.google.com/drive/folders/1EOVUSQ2E8I1f9W07hBTSnf4qVaF9rjy-?usp=sharing" target="_blank" rel="noopener">All originals ↗</a>
</div>

<div class="ms4045-intro">
<strong>Multivalued functions.</strong>
The emphasis here is not just algebra: track how the argument changes around branch points and use the Argand plane to decide whether a proposed branch cut actually makes the function single-valued.
</div>

## Multivalued functions

<div class="ms4045-problem" markdown="1">

### 1 · A branch of \(f^3=z^2\)

Consider the dependence
\[
f^3=z^2
\tag{1}
\]
on the complex plane with the **non-positive part of the real axis removed**, and require
\[
f(1)=1.
\tag{2}
\]

**(a)** Argue that (1)–(2) and the proposed branch cut describe a single-valued function.

**(b)** Find
\[
f(-1-i0)
\qquad\text{and}\qquad
f(-1+i0).
\]

</div>

<div class="ms4045-problem" markdown="1">

### 2 · A branch of the logarithm

A single-valued function is defined as a branch of
\[
f=\ln z
\]
on the complex plane with the **non-negative part of the imaginary axis removed**, together with
\[
f(1)=2\pi i.
\]

**(a)** Express \(f\) in terms of \(|z|\) and \(\arg z\), and specify the branch of \(\arg z\) to be used.

**(b)** Find
\[
f(i-0)
\qquad\text{and}\qquad
f(i+0).
\]

</div>

<div class="ms4045-problem" markdown="1">

### 3 · Does the proposed cut work?

Consider
\[
f^4=(z+1)^2(z-1)
\tag{3}
\]
on the complex plane with the segment \([-1,1]\) of the real axis removed, and require
\[
f(2)=\sqrt3.
\tag{4}
\]

**(a)** Show that (3)–(4) and the proposed branch cut **do not** describe a single-valued function.

**(b)** Find a branch cut that **does** make the function described by (3)–(4) single-valued.

</div>

<div class="ms4045-problem" markdown="1">

### 4 · A logarithm with two branch points

Consider the dependence
\[
f=\ln[z(z+1)]
\tag{5}
\]
on the complex plane with the segment \([-1,0]\) of the real axis removed, and require
\[
f(1)=\ln2+4\pi i.
\tag{6}
\]

**(a)** Show that (5)–(6) and the proposed branch cut **do not** describe a single-valued function.

**(b)** Find a branch cut that **does** make the function described by (5)–(6) single-valued.

</div>

<div class="ms4045-sheet-nav">
<a href="{{ '/modules/ms4045/tutorial-sheet-2-solutions.html' | relative_url }}">Open Sheet 2 solutions →</a>
<a href="{{ '/modules/ms4045/tutorial-sheet-1.html' | relative_url }}">← Back to Sheet 1</a>
</div>
