---
layout: doc
title: "MS4045 — Midterm 1 · Worksheet 1"
handle: "Worksheet 1"
code: "MS4045"
year: "3rd"
semester: "Sem1"
status: "Midterm 1"
eyebrow: "MS4045 · MIDTERM TOMORROW · WORKSHEET 1"
mathjax: true
---
{% include ms4045-styles.html %}

<style>
.ms4045-study-intro{margin:14px 0 26px;padding:18px 20px;border:1px solid #d7e2ea;border-radius:16px;background:#f8fbfd}
.ms4045-study-intro strong{display:block;color:#173f67;font-size:1.05rem;margin-bottom:4px}
.ms4045-study-card{margin:28px 0 34px;padding:0 0 22px;border:1px solid #d9e3ea;border-radius:18px;background:#fff;box-shadow:0 5px 18px rgba(30,48,66,.05);overflow:hidden}
.ms4045-question{padding:22px 24px 10px}
.ms4045-question h3{margin-top:0;color:#183a5b}
.ms4045-modebar{display:flex;align-items:center;gap:6px;flex-wrap:wrap;padding:12px 24px 14px;border-top:1px solid #edf1f4;background:#fbfcfd}
.ms4045-modebar>span{margin-right:5px;color:#5a6b78;font-size:.88rem;font-weight:800}
.ms4045-mode{border:1px solid #cfdbe4;border-radius:999px;background:#fff;color:#31536d;padding:7px 13px;font:inherit;font-size:.88rem;font-weight:850;cursor:pointer}
.ms4045-mode.is-active{background:#183f67;color:#fff;border-color:#183f67}
.ms4045-inline-solution{display:none;padding:8px 24px 4px;border-top:1px solid #e5ebef;background:#fcfdfe}
.ms4045-inline-solution[data-state="on"],.ms4045-inline-solution[data-state="reveal"]{display:block}
.ms4045-inline-solution[data-state="reveal"]>.ms4045-step{display:none}
.ms4045-inline-solution[data-state="reveal"]>.ms4045-step.is-revealed{display:block}
.ms4045-next-wrap{display:none;align-items:center;gap:12px;padding:10px 24px 4px}
.ms4045-study-card.is-reveal .ms4045-next-wrap{display:flex}
.ms4045-next{border:1px solid #183f67;border-radius:999px;background:#fff;color:#183f67;padding:8px 14px;font:inherit;font-weight:850;cursor:pointer}
.ms4045-next:disabled{opacity:.45;cursor:default}
.ms4045-step-count{color:#667684;font-size:.86rem}
.ms4045-inline-solution mjx-container[display="true"]{margin:1.25em 0!important}
.ms4045-inline-solution p,.ms4045-question p{line-height:1.65}
.ms4045-inline-solution>.ms4045-step{margin-top:14px;margin-bottom:14px}
.ms4045-inline-solution>.ms4045-step:first-child{margin-top:4px}
@media(max-width:760px){.ms4045-question,.ms4045-modebar,.ms4045-inline-solution,.ms4045-next-wrap{padding-left:15px;padding-right:15px}.ms4045-study-card{margin:20px 0 26px}}
</style>

<p><a href="{{ '/modules/ms4045-complex-analysis.html' | relative_url }}">← MS4045 Complex Analysis</a></p>

<div class="ms4045-study-intro">
<strong>Worksheet 1 · question first, working when you want it.</strong>
Use <b>Off</b> to work unaided, <b>On</b> to see the complete worked solution, or <b>Reveal</b> to uncover the solution one step at a time.
</div>

<div class="ms4045-sheet-nav">
<a href="{{ '/modules/ms4045/tutorial-sheet-1.html' | relative_url }}">1 · Worksheet 1</a>
<a href="{{ '/modules/ms4045/tutorial-sheet-2.html' | relative_url }}">2 · Worksheet 2</a>
</div>


<section class="ms4045-study-card" id="q1">
<div class="ms4045-question" markdown="1">
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
<div class="ms4045-modebar" role="group" aria-label="Solution mode for question 1">
<span>Solution</span>
<button type="button" class="ms4045-mode is-active" data-mode="off" aria-pressed="true">Off</button>
<button type="button" class="ms4045-mode" data-mode="on" aria-pressed="false">On</button>
<button type="button" class="ms4045-mode" data-mode="reveal" aria-pressed="false">Reveal</button>
</div>
<div class="ms4045-inline-solution" data-state="off" markdown="1">
<div class="ms4045-answer-label"><span>SOURCE-CHECKED</span><span>EXPANDED WORKING</span></div>

The lecturer answer says **(a) is correct and all the others are incorrect**.

<div class="ms4045-rule"><strong>Four facts to keep visible:</strong> \(\operatorname{Re}(a+ib)=a\), \(\operatorname{Im}(a+ib)=b\), \(\overline{a+ib}=a-ib\), and \(|a+ib|=\sqrt{a^2+b^2}\).</div>

Let \(z=a+ib\).

**(a)** Correct:
\[
\operatorname{Re}z=a.
\]

**(b)** Incorrect. The imaginary part is the **real coefficient** of \(i\):
\[
\operatorname{Im}z=b,
\]
not \(ib\). For example, if \(z=1+2i\), then \(\operatorname{Im}z=2\).

**(c)** Incorrect because
\[
(ib)^2=-b^2.
\]
The correct modulus is
\[
\boxed{|z|=\sqrt{a^2+b^2}}.
\]

**(d)** Incorrect. Conjugation changes the sign of the imaginary part and respects subtraction:
\[
(z-1)^*=z^*-1.
\]
Therefore
\[
(z-1)(z-1)^*=(z-1)(z^*-1)=|z-1|^2.
\]

**(e)** Incorrect. Since
\[
e^z=e^{a+ib}=e^a(\cos b+i\sin b),
\]
we have
\[
\boxed{|e^z|=e^a=e^{\operatorname{Re}z}}.
\]
A quick counterexample is \(z=i\): \(|e^i|=1\), whereas \(e^{|i|}=e\).

**(f)** Incorrect. Using \(z=a+ib\),
\[
iz=ia-b,
\qquad
e^{iz}=e^{-b}e^{ia},
\]
so
\[
\boxed{|e^{iz}|=e^{-b}=e^{-\operatorname{Im}z}}.
\]
</div>
<div class="ms4045-next-wrap">
<button type="button" class="ms4045-next">Reveal next line</button>
<span class="ms4045-step-count" aria-live="polite"></span>
</div>
</section>

<section class="ms4045-study-card" id="q2">
<div class="ms4045-question" markdown="1">
### 2 · Calculate

\[
\text{(a)}\quad \frac{1+3i}{3-i},
\qquad
\text{(b}^+\text{)}\quad \frac{3-i}{1+3i}.
\]
</div>
<div class="ms4045-modebar" role="group" aria-label="Solution mode for question 2">
<span>Solution</span>
<button type="button" class="ms4045-mode is-active" data-mode="off" aria-pressed="true">Off</button>
<button type="button" class="ms4045-mode" data-mode="on" aria-pressed="false">On</button>
<button type="button" class="ms4045-mode" data-mode="reveal" aria-pressed="false">Reveal</button>
</div>
<div class="ms4045-inline-solution" data-state="off" markdown="1">
<div class="ms4045-answer-label"><span>SOURCE-CHECKED</span><span>EXPANDED WORKING</span></div>

<div class="ms4045-rule"><strong>Method:</strong> multiply top and bottom by the conjugate of the denominator. The denominator then becomes a real number because \((a+ib)(a-ib)=a^2+b^2\).</div>

**(a)**
\[
\frac{1+3i}{3-i}
=
\frac{(1+3i)(3+i)}{(3-i)(3+i)}
=
\frac{3+i+9i+3i^2}{10}
=
\frac{10i}{10}
=
\boxed{i}.
\]

**(b)**
\[
\frac{3-i}{1+3i}
=
\frac{(3-i)(1-3i)}{(1+3i)(1-3i)}
=
\frac{3-9i-i+3i^2}{10}
=
\frac{-10i}{10}
=
\boxed{-i}.
\]
</div>
<div class="ms4045-next-wrap">
<button type="button" class="ms4045-next">Reveal next line</button>
<span class="ms4045-step-count" aria-live="polite"></span>
</div>
</section>

<section class="ms4045-study-card" id="q3">
<div class="ms4045-question" markdown="1">
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
<div class="ms4045-modebar" role="group" aria-label="Solution mode for question 3">
<span>Solution</span>
<button type="button" class="ms4045-mode is-active" data-mode="off" aria-pressed="true">Off</button>
<button type="button" class="ms4045-mode" data-mode="on" aria-pressed="false">On</button>
<button type="button" class="ms4045-mode" data-mode="reveal" aria-pressed="false">Reveal</button>
</div>
<div class="ms4045-inline-solution" data-state="off" markdown="1">
<div class="ms4045-answer-label"><span>SOURCE-CHECKED</span><span>EXPANDED WORKING</span></div>

<div class="ms4045-method-note"><strong>Proof strategy:</strong> expand both sides into Cartesian form and show that their real and imaginary parts are identical.</div>

Write
\[
z_1=x_1+iy_1,
\qquad
z_2=x_2+iy_2.
\]

**(a)** First,
\[
z_1z_2=(x_1x_2-y_1y_2)+i(x_1y_2+x_2y_1).
\]
Hence
\[
\overline{z_1z_2}
=
(x_1x_2-y_1y_2)-i(x_1y_2+x_2y_1).
\]
But
\[
\bar z_1\bar z_2
=
(x_1-iy_1)(x_2-iy_2)
=
(x_1x_2-y_1y_2)-i(x_1y_2+x_2y_1).
\]
Therefore
\[
\boxed{\overline{z_1z_2}=\bar z_1\bar z_2}.
\]

**(b)** For \(z_2\neq0\),
\[
\frac{z_1}{z_2}=\frac{z_1\bar z_2}{|z_2|^2}.
\]
Taking conjugates,
\[
\overline{\frac{z_1}{z_2}}
=
\frac{\bar z_1 z_2}{|z_2|^2}.
\]
Since
\[
\frac1{\bar z_2}=\frac{z_2}{|z_2|^2},
\]
we obtain
\[
\boxed{
\overline{\frac{z_1}{z_2}}
=
\frac{\bar z_1}{\bar z_2}
}.
\]
</div>
<div class="ms4045-next-wrap">
<button type="button" class="ms4045-next">Reveal next line</button>
<span class="ms4045-step-count" aria-live="polite"></span>
</div>
</section>

<section class="ms4045-study-card" id="q4">
<div class="ms4045-question" markdown="1">
### 4\(^+\) · Theorem 1.2

Prove **Theorem 1.2**, filling all the gaps in the proof presented in the lecture.
</div>
<div class="ms4045-modebar" role="group" aria-label="Solution mode for question 4">
<span>Solution</span>
<button type="button" class="ms4045-mode is-active" data-mode="off" aria-pressed="true">Off</button>
<button type="button" class="ms4045-mode" data-mode="on" aria-pressed="false">On</button>
<button type="button" class="ms4045-mode" data-mode="reveal" aria-pressed="false">Reveal</button>
</div>
<div class="ms4045-inline-solution" data-state="off" markdown="1">
<div class="ms4045-answer-label"><span>SOURCE-CHECKED</span><span>EXPANDED WORKING</span></div>

<div class="ms4045-warning">
The supplied lecturer solution marks this question <strong>For independent work</strong>. The statement of Theorem 1.2 is not included in the supplied sheets, so a proof cannot be reconstructed faithfully from these sources alone.
</div>
</div>
<div class="ms4045-next-wrap">
<button type="button" class="ms4045-next">Reveal next line</button>
<span class="ms4045-step-count" aria-live="polite"></span>
</div>
</section>

<section class="ms4045-study-card" id="q5">
<div class="ms4045-question" markdown="1">
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
<div class="ms4045-modebar" role="group" aria-label="Solution mode for question 5">
<span>Solution</span>
<button type="button" class="ms4045-mode is-active" data-mode="off" aria-pressed="true">Off</button>
<button type="button" class="ms4045-mode" data-mode="on" aria-pressed="false">On</button>
<button type="button" class="ms4045-mode" data-mode="reveal" aria-pressed="false">Reveal</button>
</div>
<div class="ms4045-inline-solution" data-state="off" markdown="1">
<div class="ms4045-answer-label"><span>SOURCE-CHECKED</span><span>EXPANDED WORKING</span></div>

### (a) \(|z_1z_2|=|z_1||z_2|\)

**Polar proof.** Let
\[
z_1=r_1e^{i\theta_1},
\qquad
z_2=r_2e^{i\theta_2}.
\]
Then
\[
z_1z_2=r_1r_2e^{i(\theta_1+\theta_2)},
\]
so
\[
|z_1z_2|=r_1r_2=|z_1||z_2|.
\]

**Cartesian proof.** With \(z_j=x_j+iy_j\),
\[
z_1z_2=(x_1x_2-y_1y_2)+i(x_1y_2+x_2y_1).
\]
Therefore
\[
\begin{aligned}
|z_1z_2|^2
&=(x_1x_2-y_1y_2)^2+(x_1y_2+x_2y_1)^2\\
&=(x_1^2+y_1^2)(x_2^2+y_2^2)\\
&=|z_1|^2|z_2|^2.
\end{aligned}
\]
Both sides are non-negative, hence
\[
\boxed{|z_1z_2|=|z_1||z_2|}.
\]

### (b) \(\left|z_1/z_2\right|=|z_1|/|z_2|\)

For \(z_2\neq0\), write
\[
z_1=\left(\frac{z_1}{z_2}\right)z_2.
\]
Using part (a),
\[
|z_1|
=
\left|\frac{z_1}{z_2}\right||z_2|.
\]
Therefore
\[
\boxed{
\left|\frac{z_1}{z_2}\right|
=
\frac{|z_1|}{|z_2|}
}.
\]

The polar proof is immediate from
\[
\frac{z_1}{z_2}
=
\frac{r_1}{r_2}e^{i(\theta_1-\theta_2)}.
\]
</div>
<div class="ms4045-next-wrap">
<button type="button" class="ms4045-next">Reveal next line</button>
<span class="ms4045-step-count" aria-live="polite"></span>
</div>
</section>

<section class="ms4045-study-card" id="q6">
<div class="ms4045-question" markdown="1">
### 6\(^+\) · Theorems 1.3 and 1.4

Prove **Theorems 1.3 and 1.4**.
</div>
<div class="ms4045-modebar" role="group" aria-label="Solution mode for question 6">
<span>Solution</span>
<button type="button" class="ms4045-mode is-active" data-mode="off" aria-pressed="true">Off</button>
<button type="button" class="ms4045-mode" data-mode="on" aria-pressed="false">On</button>
<button type="button" class="ms4045-mode" data-mode="reveal" aria-pressed="false">Reveal</button>
</div>
<div class="ms4045-inline-solution" data-state="off" markdown="1">
<div class="ms4045-answer-label"><span>SOURCE-CHECKED</span><span>EXPANDED WORKING</span></div>

<div class="ms4045-warning">
The lecturer solution marks this as <strong>For independent work</strong>. The statements of Theorems 1.3 and 1.4 are not present in the supplied material, so no theorem statement or proof is guessed here.
</div>
</div>
<div class="ms4045-next-wrap">
<button type="button" class="ms4045-next">Reveal next line</button>
<span class="ms4045-step-count" aria-live="polite"></span>
</div>
</section>

<section class="ms4045-study-card" id="q7">
<div class="ms4045-question" markdown="1">
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
<div class="ms4045-modebar" role="group" aria-label="Solution mode for question 7">
<span>Solution</span>
<button type="button" class="ms4045-mode is-active" data-mode="off" aria-pressed="true">Off</button>
<button type="button" class="ms4045-mode" data-mode="on" aria-pressed="false">On</button>
<button type="button" class="ms4045-mode" data-mode="reveal" aria-pressed="false">Reveal</button>
</div>
<div class="ms4045-inline-solution" data-state="off" markdown="1">
<div class="ms4045-answer-label"><span>SOURCE-CHECKED</span><span>EXPANDED WORKING</span></div>

<div class="ms4045-rule"><strong>Reusable start:</strong> for \(z=x+iy\neq0\), rationalise once:
\[
\frac1z=\frac{\bar z}{|z|^2}=\frac{x-iy}{x^2+y^2}.
\]
Most of Question 7 then becomes expansion plus “read off the real/imaginary part”.</div>

Let \(z=x+iy\), so
\[
\frac1z=\frac{x-iy}{x^2+y^2}.
\]

**(a)**
\[
\boxed{
\operatorname{Im}\left(\frac1z\right)
=
-\frac{y}{x^2+y^2}
}.
\]

**(b)** Since
\[
\frac1{z^2}
=
\frac{(x-iy)^2}{(x^2+y^2)^2}
=
\frac{x^2-y^2-2ixy}{(x^2+y^2)^2},
\]
we get
\[
\boxed{
\operatorname{Im}\left(\frac1{z^2}\right)
=
-\frac{2xy}{(x^2+y^2)^2}
}.
\]
This is equivalent to the lecturer form because
\[
(x^2-y^2)^2+4x^2y^2=(x^2+y^2)^2.
\]

**(c)** Now
\[
\operatorname{Re}(z^2)=x^2-y^2
\]
and
\[
\operatorname{Re}(z^4)=x^4-6x^2y^2+y^4.
\]
Hence
\[
\boxed{
\operatorname{Re}(z^4)-[\operatorname{Re}(z^2)]^2
=
-4x^2y^2
}.
\]

**(d)** Because
\[
1+i=\sqrt2\,e^{i\pi/4},
\]
we have
\[
(1+i)^{16}=2^8e^{i4\pi}=256.
\]
Therefore
\[
\boxed{
\operatorname{Re}[(1+i)^{16}z^2]
=
256(x^2-y^2)
}.
\]

**(e)** For \(z\neq0\),
\[
\frac{z}{z^*}
=
\frac{(x+iy)^2}{x^2+y^2}
=
\frac{x^2-y^2+2ixy}{x^2+y^2},
\]
so
\[
\boxed{
\operatorname{Re}\left(\frac{z}{z^*}\right)
=
\frac{x^2-y^2}{x^2+y^2}
}.
\]

**(f)**
\[
\frac1{(z^*)^2}
=
\frac{(x+iy)^2}{(x^2+y^2)^2}
=
\frac{x^2-y^2+2ixy}{(x^2+y^2)^2},
\]
therefore
\[
\boxed{
\operatorname{Im}\left(\frac1{(z^*)^2}\right)
=
\frac{2xy}{(x^2+y^2)^2}
}.
\]
</div>
<div class="ms4045-next-wrap">
<button type="button" class="ms4045-next">Reveal next line</button>
<span class="ms4045-step-count" aria-live="polite"></span>
</div>
</section>

<section class="ms4045-study-card" id="q8">
<div class="ms4045-question" markdown="1">
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
<div class="ms4045-modebar" role="group" aria-label="Solution mode for question 8">
<span>Solution</span>
<button type="button" class="ms4045-mode is-active" data-mode="off" aria-pressed="true">Off</button>
<button type="button" class="ms4045-mode" data-mode="on" aria-pressed="false">On</button>
<button type="button" class="ms4045-mode" data-mode="reveal" aria-pressed="false">Reveal</button>
</div>
<div class="ms4045-inline-solution" data-state="off" markdown="1">
<div class="ms4045-answer-label"><span>SOURCE-CHECKED</span><span>EXPANDED WORKING</span></div>

Use
\[
z=r(\cos\theta+i\sin\theta).
\]

<div class="ms4045-rule"><strong>Conversion rule:</strong>
\[
x=r\cos\theta,\qquad y=r\sin\theta,\qquad z=x+iy.
\]
So each part is a three-column job: angle → coordinates → complex number.</div>

<table class="ms4045-solution-table">
<thead><tr><th>Part</th><th>Coordinates \((x,y)\)</th><th>Cartesian form</th></tr></thead>
<tbody>
<tr><td>(a)</td><td>\((0,1)\)</td><td>\(\boxed{i}\)</td></tr>
<tr><td>(b)</td><td>\((0,-1)\)</td><td>\(\boxed{-i}\)</td></tr>
<tr><td>(c)</td><td>\((1,-\sqrt3)\)</td><td>\(\boxed{1-\sqrt3\,i}\)</td></tr>
<tr><td>(d)</td><td>\((\sqrt2,\sqrt2)\)</td><td>\(\boxed{\sqrt2(1+i)}\)</td></tr>
<tr><td>(e)</td><td>\((3\sqrt3/2,3/2)\)</td><td>\(\boxed{\frac32(\sqrt3+i)}\)</td></tr>
<tr><td>(f)</td><td>\((-3,0)\)</td><td>\(\boxed{-3}\)</td></tr>
<tr><td>(g)</td><td>\((-1/\sqrt2,1/\sqrt2)\)</td><td>\(\boxed{\frac{-1+i}{\sqrt2}}\)</td></tr>
<tr><td>(h)</td><td>\((0,-2)\)</td><td>\(\boxed{-2i}\)</td></tr>
<tr><td>(i)</td><td>\((3\sqrt3/2,-3/2)\)</td><td>\(\boxed{\frac32(\sqrt3-i)}\)</td></tr>
</tbody>
</table>

<div class="ms4045-checkline"><strong>Fast check:</strong> every coordinate pair must satisfy \(x^2+y^2=r^2\), and its quadrant must agree with \(\theta\).</div>

<figure class="ms4045-diagram">
<svg viewBox="0 0 620 430" role="img" aria-label="Argand diagram showing the nine points from question 8">
  <line x1="50" y1="215" x2="585" y2="215" class="axis"/>
  <line x1="310" y1="30" x2="310" y2="400" class="axis"/>
  <text x="570" y="202">Re</text><text x="320" y="42">Im</text>
  <g class="grid">
    <line x1="180" y1="35" x2="180" y2="395"/><line x1="440" y1="35" x2="440" y2="395"/>
    <line x1="55" y1="125" x2="580" y2="125"/><line x1="55" y1="305" x2="580" y2="305"/>
  </g>
  <g class="ghost">
    <line x1="310" y1="215" x2="310" y2="125"/>
    <line x1="310" y1="215" x2="310" y2="305"/>
    <line x1="310" y1="215" x2="397" y2="371"/>
    <line x1="310" y1="215" x2="433" y2="92"/>
    <line x1="310" y1="215" x2="535" y2="85"/>
    <line x1="310" y1="215" x2="50" y2="215"/>
    <line x1="310" y1="215" x2="246" y2="151"/>
    <line x1="310" y1="215" x2="310" y2="395"/>
    <line x1="310" y1="215" x2="535" y2="345"/>
  </g>
  <g class="point">
    <circle cx="310" cy="125" r="5"/><circle cx="310" cy="305" r="5"/>
    <circle cx="397" cy="371" r="5"/><circle cx="433" cy="92" r="5"/>
    <circle cx="535" cy="85" r="5"/><circle cx="50" cy="215" r="5"/>
    <circle cx="246" cy="151" r="5"/><circle cx="310" cy="395" r="5"/>
    <circle cx="535" cy="345" r="5"/>
  </g>
  <text x="320" y="120">(a)</text><text x="320" y="322">(b)</text><text x="405" y="385">(c)</text>
  <text x="441" y="86">(d)</text><text x="542" y="80">(e)</text><text x="58" y="208">(f)</text>
  <text x="222" y="143">(g)</text><text x="320" y="392">(h)</text><text x="542" y="356">(i)</text>
</svg>
<figcaption>Argand view: the algebraic coordinates and the polar directions agree.</figcaption>
</figure>
</div>
<div class="ms4045-next-wrap">
<button type="button" class="ms4045-next">Reveal next line</button>
<span class="ms4045-step-count" aria-live="polite"></span>
</div>
</section>

<section class="ms4045-study-card" id="q9">
<div class="ms4045-question" markdown="1">
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
<div class="ms4045-modebar" role="group" aria-label="Solution mode for question 9">
<span>Solution</span>
<button type="button" class="ms4045-mode is-active" data-mode="off" aria-pressed="true">Off</button>
<button type="button" class="ms4045-mode" data-mode="on" aria-pressed="false">On</button>
<button type="button" class="ms4045-mode" data-mode="reveal" aria-pressed="false">Reveal</button>
</div>
<div class="ms4045-inline-solution" data-state="off" markdown="1">
<div class="ms4045-answer-label"><span>SOURCE-CHECKED</span><span>EXPANDED WORKING</span></div>

<div class="ms4045-method-note"><strong>Why this question is tricky:</strong> \(\arcsin\) only returns values in \([ -\pi/2,\pi/2]\). That range naturally describes the right half-plane, so Quadrants II and III need a \(\pi\)-correction.</div>

Let
\[
r=\sqrt{x^2+y^2},
\qquad
\alpha=\arcsin\left(\frac{y}{r}\right),
\]
where \(-\pi/2\le\alpha\le\pi/2\).

The principal argument is

\[
\operatorname{Arg}z=
\begin{cases}
\alpha, & x>0,\ y>0,\\[4pt]
\pi-\alpha, & x<0,\ y>0,\\[4pt]
-\pi-\alpha, & x<0,\ y<0,\\[4pt]
\alpha, & x>0,\ y<0.
\end{cases}
\]

The reason is geometric: \(\arcsin(y/r)\) only returns an angle in the right-half-plane range \([-\pi/2,\pi/2]\), so in Quadrants II and III it must be corrected to the correct principal angle.

<figure class="ms4045-diagram">
<svg viewBox="0 0 560 360" role="img" aria-label="Argand diagram showing the four quadrants and principal argument">
  <line x1="45" y1="180" x2="520" y2="180" class="axis"/>
  <line x1="280" y1="25" x2="280" y2="335" class="axis"/>
  <text x="504" y="168">Re</text><text x="290" y="38">Im</text>
  <line x1="280" y1="180" x2="430" y2="90" class="shape"/>
  <circle cx="430" cy="90" r="5" class="point"/>
  <path d="M335 180 A55 55 0 0 0 327 151" class="accent"/>
  <text x="343" y="153">θ</text>
  <text x="390" y="63">I</text><text x="145" y="63">II</text>
  <text x="145" y="305">III</text><text x="390" y="305">IV</text>
  <text x="438" y="87">z</text>
</svg>
<figcaption>The quadrant tells you whether the inverse-sine angle needs a \(\pi\)-correction.</figcaption>
</figure>
</div>
<div class="ms4045-next-wrap">
<button type="button" class="ms4045-next">Reveal next line</button>
<span class="ms4045-step-count" aria-live="polite"></span>
</div>
</section>

<section class="ms4045-study-card" id="q10">
<div class="ms4045-question" markdown="1">
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
<div class="ms4045-modebar" role="group" aria-label="Solution mode for question 10">
<span>Solution</span>
<button type="button" class="ms4045-mode is-active" data-mode="off" aria-pressed="true">Off</button>
<button type="button" class="ms4045-mode" data-mode="on" aria-pressed="false">On</button>
<button type="button" class="ms4045-mode" data-mode="reveal" aria-pressed="false">Reveal</button>
</div>
<div class="ms4045-inline-solution" data-state="off" markdown="1">
<div class="ms4045-answer-label"><span>SOURCE-CHECKED</span><span>EXPANDED WORKING</span></div>

<div class="ms4045-rule"><strong>Geometry dictionary:</strong> fixed real part → vertical line; fixed imaginary part → horizontal line; fixed modulus → circle; fixed argument → ray.</div>

Write \(z=x+iy\), so \(\bar z=x-iy\).

- **(a)** \(\operatorname{Re}z=1\): the vertical line \(x=1\).
- **(b)** \(\operatorname{Im}z=2\): the horizontal line \(y=2\).
- **(c)** \(\operatorname{Im}\bar z=1\): since \(\operatorname{Im}\bar z=-y\), this is \(y=-1\).
- **(d)** \(\operatorname{Re}\bar z=-1\): conjugation does not change the real part, so \(x=-1\).
- **(e)** \(|z|=3\): circle centre \(0\), radius \(3\).
- **(f)** \(|\bar z|=3\): the same circle, because \(|\bar z|=|z|\).
- **(g)** \(|z-i|=1\): circle centre \(i\), radius \(1\).
- **(h)** \(\arg z=2\pi\): the positive real ray.
- **(i)** \(\operatorname{Arg}z=\pi/2\): the positive imaginary ray.
- **(k)** \(\arg\bar z=\pi/3\): \(\bar z\) lies on the ray at \(\pi/3\), so \(z\) lies on the reflected ray at \(-\pi/3\).

<figure class="ms4045-diagram">
<svg viewBox="0 0 680 430" role="img" aria-label="Argand diagrams for the line, circle and ray loci in question 10">
  <line x1="55" y1="215" x2="625" y2="215" class="axis"/>
  <line x1="340" y1="35" x2="340" y2="395" class="axis"/>
  <text x="608" y="202">Re</text><text x="350" y="48">Im</text>
  <line x1="430" y1="45" x2="430" y2="390" class="shape"/>
  <line x1="65" y1="95" x2="620" y2="95" class="shape"/>
  <line x1="65" y1="275" x2="620" y2="275" class="accent"/>
  <line x1="250" y1="45" x2="250" y2="390" class="accent"/>
  <circle cx="340" cy="215" r="145" class="shape"/>
  <circle cx="340" cy="155" r="50" class="accent"/>
  <line x1="340" y1="215" x2="620" y2="215" class="shape"/>
  <line x1="340" y1="215" x2="340" y2="45" class="shape"/>
  <line x1="340" y1="215" x2="520" y2="320" class="accent"/>
  <text x="437" y="66">x=1</text><text x="570" y="88">y=2</text><text x="570" y="291">y=-1</text>
  <text x="205" y="66">x=-1</text><text x="468" y="112">|z|=3</text><text x="350" y="149">i</text>
  <text x="503" y="337">arg z̄=π/3</text>
</svg>
<figcaption>One Argand picture links the algebra to the geometry: constant real/imaginary parts give lines, moduli give circles, and arguments give rays.</figcaption>
</figure>
</div>
<div class="ms4045-next-wrap">
<button type="button" class="ms4045-next">Reveal next line</button>
<span class="ms4045-step-count" aria-live="polite"></span>
</div>
</section>

<section class="ms4045-study-card" id="q11">
<div class="ms4045-question" markdown="1">
### 11\(^*\) · Theorem 1.1

Prove **Theorem 1.1**.
</div>
<div class="ms4045-modebar" role="group" aria-label="Solution mode for question 11">
<span>Solution</span>
<button type="button" class="ms4045-mode is-active" data-mode="off" aria-pressed="true">Off</button>
<button type="button" class="ms4045-mode" data-mode="on" aria-pressed="false">On</button>
<button type="button" class="ms4045-mode" data-mode="reveal" aria-pressed="false">Reveal</button>
</div>
<div class="ms4045-inline-solution" data-state="off" markdown="1">
<div class="ms4045-answer-label"><span>SOURCE-CHECKED</span><span>EXPANDED WORKING</span></div>

<div class="ms4045-warning">
The supplied lecturer solution marks this as <strong>For independent work</strong>. The statement of Theorem 1.1 is not included in the supplied sheets, so no theorem is reconstructed from guesswork.
</div>
</div>
<div class="ms4045-next-wrap">
<button type="button" class="ms4045-next">Reveal next line</button>
<span class="ms4045-step-count" aria-live="polite"></span>
</div>
</section>

<section class="ms4045-study-card" id="q12">
<div class="ms4045-question" markdown="1">
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
<div class="ms4045-modebar" role="group" aria-label="Solution mode for question 12">
<span>Solution</span>
<button type="button" class="ms4045-mode is-active" data-mode="off" aria-pressed="true">Off</button>
<button type="button" class="ms4045-mode" data-mode="on" aria-pressed="false">On</button>
<button type="button" class="ms4045-mode" data-mode="reveal" aria-pressed="false">Reveal</button>
</div>
<div class="ms4045-inline-solution" data-state="off" markdown="1">
<div class="ms4045-answer-label"><span>SOURCE-CHECKED</span><span>EXPANDED WORKING</span></div>

<div class="ms4045-rule"><strong>Root recipe:</strong> write the target as \(re^{i\theta}\). For \(w^n=re^{i\theta}\),
\[
w_k=r^{1/n}e^{i(\theta+2\pi k)/n},\qquad k=0,1,\ldots,n-1.
\]
The roots are equally spaced around a circle.</div>

### (a) \(w^2=-i\)

Use
\[
-i=e^{-i\pi/2}.
\]
Hence
\[
w_k=e^{i(-\pi/4+k\pi)},\qquad k=0,1.
\]
So
\[
\boxed{
w=\pm\frac{1-i}{\sqrt2}
}.
\]

### (b) \(w^3=1\)

The cube roots of unity are
\[
w_k=e^{2\pi ik/3},\qquad k=0,1,2.
\]
Thus
\[
\boxed{
1,\quad
\frac{-1+i\sqrt3}{2},\quad
\frac{-1-i\sqrt3}{2}
}.
\]

### (c) \(w^4=1\)

\[
w_k=e^{i\pi k/2},\qquad k=0,1,2,3,
\]
so
\[
\boxed{1,\ i,\ -1,\ -i}.
\]

<figure class="ms4045-diagram">
<svg viewBox="0 0 560 390" role="img" aria-label="Unit circle showing square, cube and fourth roots used in question 12">
  <line x1="55" y1="195" x2="505" y2="195" class="axis"/>
  <line x1="280" y1="35" x2="280" y2="355" class="axis"/>
  <circle cx="280" cy="195" r="125" class="ghost"/>
  <text x="490" y="183">Re</text><text x="290" y="48">Im</text>
  <g class="point">
    <circle cx="405" cy="195" r="5"/><circle cx="155" cy="195" r="5"/>
    <circle cx="280" cy="70" r="5"/><circle cx="280" cy="320" r="5"/>
    <circle cx="217.5" cy="86.7" r="5"/><circle cx="217.5" cy="303.3" r="5"/>
    <circle cx="368.4" cy="283.4" r="5"/><circle cx="191.6" cy="106.6" r="5"/>
  </g>
  <text x="412" y="190">1</text><text x="137" y="190">−1</text><text x="288" y="73">i</text><text x="288" y="324">−i</text>
  <text x="372" y="300">w²=−i</text><text x="160" y="93">w²=−i</text>
  <text x="145" y="122">cube root</text><text x="145" y="292">cube root</text>
</svg>
<figcaption>Roots of a complex number are equally spaced in argument; the unit circle makes the symmetry visible immediately.</figcaption>
</figure>
</div>
<div class="ms4045-next-wrap">
<button type="button" class="ms4045-next">Reveal next line</button>
<span class="ms4045-step-count" aria-live="polite"></span>
</div>
</section>

<section class="ms4045-study-card" id="q13">
<div class="ms4045-question" markdown="1">
### 13 · Complex exponential equations

Find all solutions. Give both polar and Cartesian forms and sketch some of them in the complex plane.

\[
\text{(a)}\quad e^w=i,
\qquad
\text{(b)}\quad e^w=-1-i.
\]
</div>
<div class="ms4045-modebar" role="group" aria-label="Solution mode for question 13">
<span>Solution</span>
<button type="button" class="ms4045-mode is-active" data-mode="off" aria-pressed="true">Off</button>
<button type="button" class="ms4045-mode" data-mode="on" aria-pressed="false">On</button>
<button type="button" class="ms4045-mode" data-mode="reveal" aria-pressed="false">Reveal</button>
</div>
<div class="ms4045-inline-solution" data-state="off" markdown="1">
<div class="ms4045-answer-label"><span>SOURCE-CHECKED</span><span>EXPANDED WORKING</span></div>

<div class="ms4045-rule"><strong>Exponential recipe:</strong> if \(e^w=Re^{i\theta}\) and \(w=u+iv\), then
\[
u=\ln R,\qquad v=\theta+2\pi k.
\]
So the real part comes from the modulus and the imaginary part comes from the argument.</div>

Write
\[
w=u+iv.
\]
Then
\[
e^w=e^u e^{iv}.
\]

### (a) \(e^w=i\)

Since
\[
i=e^{i(\pi/2+2\pi k)},
\]
the modulus gives \(e^u=1\), hence \(u=0\), and
\[
v=\frac\pi2+2\pi k.
\]
Therefore
\[
\boxed{
w_k=i\left(\frac\pi2+2\pi k\right),
\qquad k\in\mathbb Z.
}
\]

### (b) \(e^w=-1-i\)

Now
\[
-1-i=\sqrt2\,e^{i(-3\pi/4+2\pi k)}.
\]
Thus
\[
e^u=\sqrt2
\quad\Rightarrow\quad
u=\frac12\ln2,
\]
and
\[
v=-\frac{3\pi}{4}+2\pi k.
\]
Hence
\[
\boxed{
w_k=
\frac12\ln2
+i\left(-\frac{3\pi}{4}+2\pi k\right),
\qquad k\in\mathbb Z.
}
\]

<figure class="ms4045-diagram">
<svg viewBox="0 0 600 420" role="img" aria-label="w-plane showing two vertical families of logarithmic solutions">
  <line x1="55" y1="210" x2="550" y2="210" class="axis"/>
  <line x1="250" y1="35" x2="250" y2="385" class="axis"/>
  <text x="532" y="198">Re w</text><text x="260" y="48">Im w</text>
  <line x1="250" y1="45" x2="250" y2="375" class="ghost"/>
  <line x1="360" y1="45" x2="360" y2="375" class="ghost"/>
  <g class="point">
    <circle cx="250" cy="92" r="5"/><circle cx="250" cy="185" r="5"/><circle cx="250" cy="278" r="5"/><circle cx="250" cy="371" r="5"/>
    <circle cx="360" cy="64" r="5"/><circle cx="360" cy="157" r="5"/><circle cx="360" cy="250" r="5"/><circle cx="360" cy="343" r="5"/>
  </g>
  <text x="137" y="82">eʷ=i</text>
  <text x="372" y="55">eʷ=−1−i</text>
  <text x="368" y="225">Re w=½ ln 2</text>
</svg>
<figcaption>Exponential solutions repeat every \(2\pi i\), so each equation produces a vertical lattice in the \(w\)-plane.</figcaption>
</figure>
</div>
<div class="ms4045-next-wrap">
<button type="button" class="ms4045-next">Reveal next line</button>
<span class="ms4045-step-count" aria-live="polite"></span>
</div>
</section>


<script>
(() => {
  document.querySelectorAll('.ms4045-study-card').forEach(card => {
    const solution = card.querySelector('.ms4045-inline-solution');
    const modeButtons = [...card.querySelectorAll('.ms4045-mode')];
    const next = card.querySelector('.ms4045-next');
    const count = card.querySelector('.ms4045-step-count');

    // Treat each rendered top-level solution block as one reveal step.
    [...solution.children].forEach(el => el.classList.add('ms4045-step'));

    const steps = () => [...solution.children].filter(el => el.classList.contains('ms4045-step'));
    const setCount = () => {
      const all = steps();
      const shown = all.filter(el => el.classList.contains('is-revealed')).length;
      count.textContent = solution.dataset.state === 'reveal' ? shown + ' / ' + all.length + ' steps' : '';
      next.disabled = solution.dataset.state === 'reveal' && shown >= all.length;
      if(next.disabled) next.textContent = 'All steps revealed';
      else next.textContent = 'Reveal next line';
    };
    const setMode = mode => {
      solution.dataset.state = mode;
      card.classList.toggle('is-reveal', mode === 'reveal');
      modeButtons.forEach(btn => {
        const active = btn.dataset.mode === mode;
        btn.classList.toggle('is-active', active);
        btn.setAttribute('aria-pressed', active ? 'true' : 'false');
      });
      steps().forEach(el => el.classList.remove('is-revealed'));
      if(mode === 'reveal' && steps()[0]) steps()[0].classList.add('is-revealed');
      setCount();
      if(window.MathJax?.typesetPromise && mode !== 'off') {
        window.MathJax.typesetPromise([solution]).catch(()=>{});
      }
    };
    modeButtons.forEach(btn => btn.addEventListener('click', () => setMode(btn.dataset.mode)));
    next.addEventListener('click', () => {
      const hidden = steps().find(el => !el.classList.contains('is-revealed'));
      if(hidden){
        hidden.classList.add('is-revealed');
        if(window.MathJax?.typesetPromise) window.MathJax.typesetPromise([hidden]).catch(()=>{});
        hidden.scrollIntoView({behavior:'smooth',block:'nearest'});
      }
      setCount();
    });
    setMode('off');
  });
})();
</script>
