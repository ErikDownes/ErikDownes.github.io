---
layout: doc
title: "MS4045 — Worksheet 1"
handle: "Worksheet 1"
mathjax: true
finmath_current: true
---

<style>
.doc-paper{width:min(980px,calc(100vw - 20px));padding:18px clamp(10px,2.5vw,26px) 40px}
.doc-paper>.doc-kicker,.doc-paper>h1,.doc-toolbar{display:none!important}
.worksheet-toolbar{display:flex;justify-content:space-between;gap:10px;align-items:center;margin:0 auto 14px;max-width:860px}
.worksheet-toolbar a{padding:9px 12px;border:1px solid #cfd9e1;border-radius:999px;background:#fff;color:#184f73;text-decoration:none!important;font-weight:850;font-size:.9rem}
.worksheet-paper{max-width:860px;margin:0 auto;background:#fff;border:1px solid #d7dce1;box-shadow:0 5px 18px rgba(15,23,42,.06);padding:44px clamp(22px,5vw,58px) 64px;font-family:Georgia,"Times New Roman",serif;color:#111}
.worksheet-page-no{font-size:.9rem;margin-bottom:4px}
.worksheet-title{text-align:center;margin:0 0 28px;font:700 clamp(1.35rem,4vw,1.75rem)/1.2 Georgia,"Times New Roman",serif}
.worksheet-section-title{margin:28px 0 18px;font:700 1.06rem/1.35 Georgia,"Times New Roman",serif;color:#111}
.worksheet-question{position:relative;margin:0;padding:10px 10px 16px;border-radius:8px;transition:background .12s ease}
.worksheet-question:hover,.worksheet-question:focus-within{background:#f6f9fb}
.worksheet-question-hit{position:absolute;inset:0;z-index:4;border-radius:8px}
.worksheet-question h3{margin:0 0 10px;font:700 1rem/1.45 Georgia,"Times New Roman",serif;color:#111}
.worksheet-question p,.worksheet-question li{font-size:clamp(1rem,2.4vw,1.13rem);line-height:1.65}
.worksheet-question p{margin:10px 0}
.worksheet-question .ms4045-two-col{gap:30px}
.worksheet-question mjx-container{position:relative;z-index:1}
.worksheet-question mjx-container[display="true"]{font-size:clamp(1.05rem,2.7vw,1.22rem)!important;margin:1.15em 0!important;overflow-x:auto;overflow-y:hidden}
.worksheet-question::after{content:"Tap question";position:absolute;right:12px;top:8px;font:700 .72rem system-ui,-apple-system,Segoe UI,sans-serif;color:#80909d;opacity:0;transition:opacity .12s}
.worksheet-question:hover::after,.worksheet-question:focus-within::after{opacity:1}
@media(max-width:700px){
  .doc-paper{width:100%;padding:10px 6px 24px}
  .worksheet-paper{padding:28px 16px 44px;border-left:1px solid #d7dce1;border-right:1px solid #d7dce1}
  .worksheet-toolbar{padding:0 6px}
  .worksheet-question{padding:8px 4px 14px}
  .worksheet-question::after{display:none}
  .worksheet-question .ms4045-two-col{grid-template-columns:1fr;gap:8px}
}
@media print{.worksheet-toolbar{display:none}.worksheet-paper{border:0;box-shadow:none;max-width:none;padding:0}}
</style>

<div class="worksheet-toolbar">
<a href="{{ '/education.html' | relative_url }}">← FinMath Mod</a>
<a href="https://drive.google.com/file/d/1mfdWYBotnQIJc6YhTczqKpo54wPzsDOQ/view?usp=drivesdk" target="_blank" rel="noopener">Original PDF ↗</a>
<a href="{{ '/modules/ms4045/tutorial-sheet-2.html' | relative_url }}">Worksheet 2 →</a>
</div>

<article class="worksheet-paper">
<div class="worksheet-page-no">1</div>
<h1 class="worksheet-title">Tutorial sheet 1</h1>
<h2 class="worksheet-section-title">The definition of complex numbers and basic operations</h2>


<section class="worksheet-question">
  <a class="worksheet-question-hit" href="{{ '/modules/ms4045/ws1-q01.html' | relative_url }}" aria-label="Open Worksheet 1 Question 1"></a>
  <div markdown="1">
### (1)

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
</section>

<section class="worksheet-question">
  <a class="worksheet-question-hit" href="{{ '/modules/ms4045/ws1-q02.html' | relative_url }}" aria-label="Open Worksheet 1 Question 2"></a>
  <div markdown="1">
### (2)

\[
\text{(a)}\quad \frac{1+3i}{3-i},
\qquad
\text{(b}^+\text{)}\quad \frac{3-i}{1+3i}.
\]
  </div>
</section>

<section class="worksheet-question">
  <a class="worksheet-question-hit" href="{{ '/modules/ms4045/ws1-q03.html' | relative_url }}" aria-label="Open Worksheet 1 Question 3"></a>
  <div markdown="1">
### (3)

\[
\text{(a)}\quad \overline{z_1z_2}=\overline{z_1}\,\overline{z_2},
\qquad
\text{(b}^+\text{)}\quad
\overline{\frac{z_1}{z_2}}
=
\frac{\overline{z_1}}{\overline{z_2}}.
\]
  </div>
</section>

<section class="worksheet-question">
  <a class="worksheet-question-hit" href="{{ '/modules/ms4045/ws1-q04.html' | relative_url }}" aria-label="Open Worksheet 1 Question 4"></a>
  <div markdown="1">
### (4⁺)

Prove **Theorem 1.2**, filling all the gaps in the proof presented in the lecture.
  </div>
</section>

<section class="worksheet-question">
  <a class="worksheet-question-hit" href="{{ '/modules/ms4045/ws1-q05.html' | relative_url }}" aria-label="Open Worksheet 1 Question 5"></a>
  <div markdown="1">
### (5)

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
</section>

<section class="worksheet-question">
  <a class="worksheet-question-hit" href="{{ '/modules/ms4045/ws1-q06.html' | relative_url }}" aria-label="Open Worksheet 1 Question 6"></a>
  <div markdown="1">
### (6⁺)

Prove **Theorems 1.3 and 1.4**.
  </div>
</section>

<section class="worksheet-question">
  <a class="worksheet-question-hit" href="{{ '/modules/ms4045/ws1-q07.html' | relative_url }}" aria-label="Open Worksheet 1 Question 7"></a>
  <div markdown="1">
### (7)

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
</section>

<section class="worksheet-question">
  <a class="worksheet-question-hit" href="{{ '/modules/ms4045/ws1-q08.html' | relative_url }}" aria-label="Open Worksheet 1 Question 8"></a>
  <div markdown="1">
### (8)

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
</section>

<section class="worksheet-question">
  <a class="worksheet-question-hit" href="{{ '/modules/ms4045/ws1-q09.html' | relative_url }}" aria-label="Open Worksheet 1 Question 9"></a>
  <div markdown="1">
### (9*)

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
</section>

<section class="worksheet-question">
  <a class="worksheet-question-hit" href="{{ '/modules/ms4045/ws1-q10.html' | relative_url }}" aria-label="Open Worksheet 1 Question 10"></a>
  <div markdown="1">
### (10)

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
</section>

<section class="worksheet-question">
  <a class="worksheet-question-hit" href="{{ '/modules/ms4045/ws1-q11.html' | relative_url }}" aria-label="Open Worksheet 1 Question 11"></a>
  <div markdown="1">
### (11*)

Prove **Theorem 1.1**.
  </div>
</section>

<h2 class="worksheet-section-title">Roots, the exponential function, and the logarithm</h2>

<section class="worksheet-question">
  <a class="worksheet-question-hit" href="{{ '/modules/ms4045/ws1-q12.html' | relative_url }}" aria-label="Open Worksheet 1 Question 12"></a>
  <div markdown="1">
### (12)

Find all solutions. Give both polar and Cartesian forms and sketch the solutions in the complex plane.

\[
\text{(a)}\quad w^2=-i,
\qquad
\text{(b)}\quad w^3=1,
\qquad
\text{(c)}\quad w^4=1.
\]
  </div>
</section>

<section class="worksheet-question">
  <a class="worksheet-question-hit" href="{{ '/modules/ms4045/ws1-q13.html' | relative_url }}" aria-label="Open Worksheet 1 Question 13"></a>
  <div markdown="1">
### (13)

Find all solutions. Give both polar and Cartesian forms and sketch some of them in the complex plane.

\[
\text{(a)}\quad e^w=i,
\qquad
\text{(b)}\quad e^w=-1-i.
\]
  </div>
</section>

</article>
