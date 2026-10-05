---
layout: doc
title: "MS4045 — Tutorial Sheet 1"
handle: "Tutorial Sheet 1"
code: "MS4045"
year: "3rd"
semester: "Sem1"
status: "Midterm 1"
eyebrow: "MS4045 · MIDTERM 1 · SHEET 1"
mathjax: true
---
{% include ms4045-styles.html %}

<p><a href="{{ '/modules/ms4045-complex-analysis.html' | relative_url }}">← MS4045 Complex Analysis</a></p>

<div class="ms4045-sheet-nav">
<a href="{{ '/modules/ms4045/tutorial-sheet-1.html' | relative_url }}">Sheet 1</a>
<a href="{{ '/modules/ms4045/tutorial-sheet-1-solutions.html' | relative_url }}">Sheet 1 solutions</a>
<a href="{{ '/modules/ms4045/tutorial-sheet-2.html' | relative_url }}">Sheet 2</a>
<a href="{{ '/modules/ms4045/tutorial-sheet-2-solutions.html' | relative_url }}">Sheet 2 solutions</a>
</div>

<div class="ms4045-intro">
<strong>The definition of complex numbers and basic operations.</strong>
This is the lecturer worksheet transcribed into live mathematics so it can be read, searched and worked directly on the site. The separate solution page uses click-to-reveal worked solutions and Argand diagrams.
</div>

## The definition of complex numbers and basic operations

<div class="ms4045-problem" markdown="1">

### 1 · Check the identities

Assume
\[
z=a+ib.
\]

Determine whether each equality is correct. For those that are not, give a counterexample and, wherever possible, correct them.

<div class="ms4045-two-col" markdown="1">

<div markdown="1">
**(a)** \(\operatorname{Re}z=a\)

**(b)** \(\operatorname{Im}z=ib\)

**(c)** \(\lvert z\rvert=\sqrt{a^2+(ib)^2}\)
</div>

<div markdown="1">
**(d)** \((z-1)(z-1)^*=(z-1)(z^*+1)\)

**(e)** \(\lvert e^z\rvert=e^{\lvert z\rvert}\)

**(f)** \(\lvert e^{iz}\rvert=\sqrt{(e^{iz})^2}\)
</div>

</div>
</div>

<div class="ms4045-problem" markdown="1">

### 2 · Calculate

\[
\text{(a)}\quad \frac{1+3i}{3-i},
\qquad
\text{(b}^+\text{)}\quad \frac{3-i}{1+3i}.
\]

</div>

<div class="ms4045-problem" markdown="1">

### 3 · Prove the conjugation rules

\[
\text{(a)}\quad \overline{z_1z_2}=\overline{z_1}\,\overline{z_2},
\qquad
\text{(b}^+\text{)}\quad
\overline{\frac{z_1}{z_2}}
=
\frac{\overline{z_1}}{\overline{z_2}}.
\]

</div>

<div class="ms4045-problem" markdown="1">

### 4\(^+\) · Theorem 1.2

Prove **Theorem 1.2**, filling all the gaps in the proof presented in the lecture.

</div>

<div class="ms4045-problem" markdown="1">

### 5 · Modulus identities — two proofs

Prove each identity twice: first using the polar representation of complex numbers, then without using it.

\[
\text{(a)}\quad \lvert z_1z_2\rvert=\lvert z_1\rvert\lvert z_2\rvert,
\qquad
\text{(b}^+\text{)}\quad
\left\lvert\frac{z_1}{z_2}\right\rvert
=
\frac{\lvert z_1\rvert}{\lvert z_2\rvert}.
\]

</div>

<div class="ms4045-problem" markdown="1">

### 6\(^+\) · Theorems 1.3 and 1.4

Prove **Theorems 1.3 and 1.4**.

</div>

<div class="ms4045-problem" markdown="1">

### 7 · Write in terms of \(x\) and \(y\)

Let \(z=x+iy\). Express each quantity in terms of \(x\) and \(y\).

\[
\begin{aligned}
\text{(a)}&\quad \operatorname{Im}\!\left(\frac1z\right), &
\text{(b}^+\text{)}&\quad \operatorname{Im}\!\left(\frac1{z^2}\right),\\[4pt]
\text{(c}^+\text{)}&\quad \operatorname{Re}(z^4)-\bigl(\operatorname{Re}(z^2)\bigr)^2, &
\text{(d)}&\quad \operatorname{Re}\!\left[(1+i)^{16}z^2\right],\\[4pt]
\text{(e)}&\quad \operatorname{Re}\!\left(\frac{z}{z^*}\right), &
\text{(f}^+\text{)}&\quad \operatorname{Im}\!\left(\frac1{(z^*)^2}\right).
\end{aligned}
\]

</div>

<div class="ms4045-problem" markdown="1">

### 8 · Polar form to Cartesian form

Assume \(r=\lvert z\rvert\) and \(\theta=\arg z\). Graph \(z\) in the complex plane and express it as \(x+iy\).

\[
\begin{aligned}
\text{(a)}&\ r=1,\ \theta=\frac\pi2, &
\text{(b}^+\text{)}&\ r=1,\ \theta=-\frac\pi2, &
\text{(c)}&\ r=2,\ \theta=-\frac\pi3,\\[4pt]
\text{(d}^+\text{)}&\ r=2,\ \theta=\frac\pi4, &
\text{(e}^+\text{)}&\ r=3,\ \theta=\frac\pi6, &
\text{(f}^+\text{)}&\ r=3,\ \theta=-\pi,\\[4pt]
\text{(g)}&\ r=1,\ \theta=\frac{3\pi}{4}, &
\text{(h)}&\ r=2,\ \theta=\frac{3\pi}{2}, &
\text{(i}^+\text{)}&\ r=3,\ \theta=-\frac{13\pi}{6}.
\end{aligned}
\]

</div>

<div class="ms4045-problem" markdown="1">

### 9\(^*\) · Principal argument by quadrant

For
\[
z=x+iy,
\]
relate \(\operatorname{Arg}z\) to
\[
\arcsin\!\left(\frac{y}{\sqrt{x^2+y^2}}\right).
\]

**Hint 1.** Here and everywhere in this module,
\[
\sqrt{\text{positive real number}}>0.
\]

**Hint 2.**
\[
-\frac\pi2\le \arcsin a\le \frac\pi2.
\]

**Hint 3.** Consider one quadrant of the complex plane at a time.

</div>

<div class="ms4045-problem" markdown="1">

### 10 · Sketch the loci in the complex plane

Show the sets of points \(z\) satisfying:

\[
\begin{aligned}
\text{(a)}&\ \operatorname{Re}z=1, &
\text{(b}^+\text{)}&\ \operatorname{Im}z=2, &
\text{(c)}&\ \operatorname{Im}\bar z=1, &
\text{(d}^+\text{)}&\ \operatorname{Re}\bar z=-1,\\[4pt]
\text{(e)}&\ \lvert z\rvert=3, &
\text{(f)}&\ \lvert\bar z\rvert=3, &
\text{(g)}&\ \lvert z-i\rvert=1,\\[4pt]
\text{(h)}&\ \arg z=2\pi, &
\text{(i)}&\ \operatorname{Arg}z=\frac\pi2, &
\text{(k}^+\text{)}&\ \arg\bar z=\frac\pi3.
\end{aligned}
\]

</div>

<div class="ms4045-problem" markdown="1">

### 11\(^*\) · Theorem 1.1

Prove **Theorem 1.1**.

</div>

## Roots, the exponential function, and the logarithm

<div class="ms4045-problem" markdown="1">

### 12 · Roots

Find all solutions. Give both polar and Cartesian forms and sketch the solutions in the complex plane.

\[
\text{(a)}\quad w^2=-i,
\qquad
\text{(b)}\quad w^3=1,
\qquad
\text{(c)}\quad w^4=1.
\]

</div>

<div class="ms4045-problem" markdown="1">

### 13 · Complex exponential equations

Find all solutions. Give both polar and Cartesian forms and sketch some of them in the complex plane.

\[
\text{(a)}\quad e^w=i,
\qquad
\text{(b)}\quad e^w=-1-i.
\]

</div>

<div class="ms4045-sheet-nav">
<a href="{{ '/modules/ms4045/tutorial-sheet-1-solutions.html' | relative_url }}">Open Sheet 1 solutions →</a>
<a href="{{ '/modules/ms4045/tutorial-sheet-2.html' | relative_url }}">Continue to Sheet 2 →</a>
</div>
