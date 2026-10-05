---
layout: doc
title: "MS4045 — Tutorial Sheet 1 Solutions"
handle: "Sheet 1 Solutions"
code: "MS4045"
year: "3rd"
semester: "Sem1"
status: "Midterm 1"
eyebrow: "MS4045 · MIDTERM 1 · WORKED SOLUTIONS"
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

<div class="ms4045-source-note">
<strong>Source discipline.</strong> The lecturer answer sheet is the authority for the stated answers and hints. The algebra below expands those terse answers into worked steps. Where the lecturer sheet says <em>For independent work</em> and the theorem statement itself is not in the supplied material, the theorem is not invented here.
</div>

## Click a question to reveal the worked solution

<details class="ms4045-solution" markdown="1">
<summary>Question 1 · Check the identities</summary>
<div class="ms4045-answer" markdown="1">

The lecturer answer says **(a) is correct and all the others are incorrect**.

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
</details>

<details class="ms4045-solution" markdown="1">
<summary>Question 2 · Complex division</summary>
<div class="ms4045-answer" markdown="1">

Multiply numerator and denominator by the conjugate of the denominator.

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
</details>

<details class="ms4045-solution" markdown="1">
<summary>Question 3 · Conjugation of products and quotients</summary>
<div class="ms4045-answer" markdown="1">

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
</details>

<details class="ms4045-solution" markdown="1">
<summary>Question 4 · Theorem 1.2</summary>
<div class="ms4045-answer" markdown="1">

<div class="ms4045-warning">
The supplied lecturer solution marks this question <strong>For independent work</strong>. The statement of Theorem 1.2 is not included in the supplied sheets, so a proof cannot be reconstructed faithfully from these sources alone.
</div>

</div>
</details>

<details class="ms4045-solution" markdown="1">
<summary>Question 5 · Modulus of a product and quotient</summary>
<div class="ms4045-answer" markdown="1">

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
</details>

<details class="ms4045-solution" markdown="1">
<summary>Question 6 · Theorems 1.3 and 1.4</summary>
<div class="ms4045-answer" markdown="1">

<div class="ms4045-warning">
The lecturer solution marks this as <strong>For independent work</strong>. The statements of Theorems 1.3 and 1.4 are not present in the supplied material, so no theorem statement or proof is guessed here.
</div>

</div>
</details>

<details class="ms4045-solution" markdown="1">
<summary>Question 7 · Express everything in terms of x and y</summary>
<div class="ms4045-answer" markdown="1">

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
</details>

<details class="ms4045-solution" markdown="1">
<summary>Question 8 · Polar to Cartesian + Argand diagram</summary>
<div class="ms4045-answer" markdown="1">

Use
\[
z=r(\cos\theta+i\sin\theta).
\]

\[
\begin{aligned}
\text{(a)}&\quad i,\\
\text{(b)}&\quad -i,\\
\text{(c)}&\quad 1-\sqrt3,i,\\
\text{(d)}&\quad \sqrt2(1+i),\\
\text{(e)}&\quad \frac32(\sqrt3+i),\\
\text{(f)}&\quad -3,\\
\text{(g)}&\quad \frac{-1+i}{\sqrt2},\\
\text{(h)}&\quad -2i,\\
\text{(i)}&\quad \frac32(\sqrt3-i).
\end{aligned}
\]

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
</details>

<details class="ms4045-solution" markdown="1">
<summary>Question 9 · Principal argument by quadrant + Argand diagram</summary>
<div class="ms4045-answer" markdown="1">

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
</details>

<details class="ms4045-solution" markdown="1">
<summary>Question 10 · Loci in the complex plane</summary>
<div class="ms4045-answer" markdown="1">

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
</details>

<details class="ms4045-solution" markdown="1">
<summary>Question 11 · Theorem 1.1</summary>
<div class="ms4045-answer" markdown="1">

<div class="ms4045-warning">
The supplied lecturer solution marks this as <strong>For independent work</strong>. The statement of Theorem 1.1 is not included in the supplied sheets, so no theorem is reconstructed from guesswork.
</div>

</div>
</details>

<details class="ms4045-solution" markdown="1">
<summary>Question 12 · Roots + unit-circle Argand diagram</summary>
<div class="ms4045-answer" markdown="1">

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
</details>

<details class="ms4045-solution" markdown="1">
<summary>Question 13 · Complex exponential equations + w-plane diagram</summary>
<div class="ms4045-answer" markdown="1">

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
</details>

<div class="ms4045-sheet-nav">
<a href="{{ '/modules/ms4045/tutorial-sheet-1.html' | relative_url }}">← Back to Sheet 1</a>
<a href="{{ '/modules/ms4045/tutorial-sheet-2.html' | relative_url }}">Continue to Sheet 2 →</a>
</div>
