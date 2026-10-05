---
layout: doc
title: "MS4045 — Tutorial Sheet 2 Solutions"
handle: "Sheet 2 Solutions"
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

<a href="https://drive.google.com/file/d/1ZOadNXpVL-0jUh5zwq4krZG4GvIn2Nx6/view?usp=drivesdk" target="_blank" rel="noopener">Original PDF ↗</a>
<a href="https://drive.google.com/drive/folders/1EOVUSQ2E8I1f9W07hBTSnf4qVaF9rjy-?usp=sharing" target="_blank" rel="noopener">All originals ↗</a>
</div>

<div class="ms4045-source-note">
<strong>How to read these solutions.</strong> The stated lecturer answers and hints are preserved. The working expands them into a study version. Question 4(b) is not completed on the supplied lecturer answer sheet, so the branch cut shown there is explicitly marked as a derived valid choice rather than a quoted lecturer answer.
</div>

## Click a question to reveal the worked solution

<details class="ms4045-solution" markdown="1">
<summary>Question 1 · The branch of f³ = z²</summary>
<div class="ms4045-answer" markdown="1">

Remove the non-positive real axis and write
\[
z=re^{i\theta},
\qquad
-\pi<\theta<\pi.
\]
Then the condition \(f(1)=1\) selects
\[
\boxed{
f(z)=r^{2/3}e^{2i\theta/3}
=
\exp\left(\frac23(\ln r+i\theta)\right)
}.
\]

### (a) Why this is single-valued

The cut prevents \(\theta\) from increasing by a full \(2\pi\) around the origin. On the cut plane, the chosen \(\theta\in(-\pi,\pi)\) is continuous and unique, so the expression above gives one value of \(f\) at every allowed point.

Equivalently: along every allowable closed contour, the net change of the chosen argument is zero, so \(f\) returns to its starting value.

### (b) Values on the two sides of the cut

Approaching \(-1\) from below,
\[
\theta\to-\pi,
\]
hence
\[
f(-1-i0)
=
e^{-2\pi i/3}
=
\boxed{\frac{-1-i\sqrt3}{2}}.
\]

Approaching from above,
\[
\theta\to\pi,
\]
so
\[
f(-1+i0)
=
e^{2\pi i/3}
=
\boxed{\frac{-1+i\sqrt3}{2}}.
\]

<figure class="ms4045-diagram">
<svg viewBox="0 0 620 360" role="img" aria-label="Argand plane with the negative real axis as a branch cut and approaches to minus one from above and below">
  <line x1="55" y1="180" x2="565" y2="180" class="axis"/>
  <line x1="310" y1="35" x2="310" y2="325" class="axis"/>
  <text x="548" y="168">Re z</text><text x="320" y="48">Im z</text>
  <line x1="55" y1="180" x2="310" y2="180" class="accent"/>
  <circle cx="190" cy="180" r="5" class="point"/>
  <path d="M230 118 C210 130 198 148 190 174" class="shape"/>
  <path d="M230 242 C210 230 198 212 190 186" class="shape"/>
  <text x="64" y="164">branch cut</text>
  <text x="173" y="205">−1</text>
  <text x="232" y="112">Arg → π</text>
  <text x="232" y="257">Arg → −π</text>
</svg>
<figcaption>The same geometric point has different limiting arguments on the two banks of the branch cut, producing the two boundary values.</figcaption>
</figure>

</div>
</details>

<details class="ms4045-solution" markdown="1">
<summary>Question 2 · A logarithm branch with a non-standard argument</summary>
<div class="ms4045-answer" markdown="1">

A branch of the logarithm has the form
\[
f(z)=\ln|z|+i\arg z.
\]

The cut is the non-negative imaginary axis, whose direction is \(\pi/2\). To satisfy
\[
f(1)=2\pi i,
\]
we need
\[
\arg 1=2\pi.
\]
A continuous branch that does this is
\[
\boxed{
\frac\pi2<\arg z<\frac{5\pi}{2}
}.
\]

Therefore
\[
\boxed{
f(z)=\ln|z|+i\arg z,
\qquad
\frac\pi2<\arg z<\frac{5\pi}{2}.
}
\]

Approaching \(i\) from the left side of the cut,
\[
\arg z\to\frac\pi2,
\]
so
\[
\boxed{f(i-0)=\frac{\pi i}{2}}.
\]

Approaching from the right side, the continuous argument tends to \(5\pi/2\), not \(\pi/2\):
\[
\boxed{f(i+0)=\frac{5\pi i}{2}}.
\]

<figure class="ms4045-diagram">
<svg viewBox="0 0 620 360" role="img" aria-label="Argand plane with positive imaginary axis removed as a branch cut">
  <line x1="55" y1="190" x2="565" y2="190" class="axis"/>
  <line x1="310" y1="45" x2="310" y2="325" class="axis"/>
  <text x="548" y="178">Re z</text><text x="320" y="58">Im z</text>
  <line x1="310" y1="45" x2="310" y2="190" class="accent"/>
  <circle cx="310" cy="105" r="5" class="point"/>
  <path d="M250 120 C268 106 286 102 304 105" class="shape"/>
  <path d="M370 120 C352 106 334 102 316 105" class="shape"/>
  <text x="324" y="103">i</text>
  <text x="165" y="112">arg → π/2</text>
  <text x="385" y="112">arg → 5π/2</text>
  <text x="327" y="78">branch cut</text>
</svg>
<figcaption>The cut fixes one continuous determination of argument. The two banks differ by \(2\pi\), so the logarithm differs by \(2\pi i\).</figcaption>
</figure>

</div>
</details>

<details class="ms4045-solution" markdown="1">
<summary>Question 3 · Why the segment [−1,1] is not enough</summary>
<div class="ms4045-answer" markdown="1">

We have
\[
f^4=(z+1)^2(z-1).
\]

### (a) Failure of the proposed cut

Take a closed contour that winds once around the removed segment \([-1,1]\). Along that contour,

- \(z+1\) winds once around \(0\), so \((z+1)^2\) contributes a change of argument \(4\pi\);
- \(z-1\) winds once around \(0\), contributing \(2\pi\).

Thus the right-hand side changes its argument by
\[
4\pi+2\pi=6\pi.
\]

Because \(f^4\) is the right-hand side, the corresponding change in the argument of \(f\) is
\[
\Delta\arg f=\frac{6\pi}{4}=\frac{3\pi}{2}.
\]

That is **not** a multiple of \(2\pi\), so after returning to the same \(z\), the value of \(f\) has changed. Therefore the function is not single-valued on the proposed domain.

### (b) A cut that works

The lecturer solution gives one valid choice:

\[
\boxed{
(-\infty,-1]\ \cup\ [1,1+i\infty)
}
\]

That is, send one cut from \(z=-1\) to \(-\infty\) along the real axis, and another from \(z=1\) vertically upward to infinity. The reference point \(z=2\) is not on either cut.

<figure class="ms4045-diagram">
<svg viewBox="0 0 660 390" role="img" aria-label="Argand plane showing branch points minus one and one with two cuts to infinity">
  <line x1="55" y1="215" x2="610" y2="215" class="axis"/>
  <line x1="330" y1="45" x2="330" y2="350" class="axis"/>
  <text x="594" y="203">Re z</text><text x="340" y="58">Im z</text>
  <circle cx="230" cy="215" r="5" class="point"/><circle cx="430" cy="215" r="5" class="point"/>
  <line x1="55" y1="215" x2="230" y2="215" class="accent"/>
  <line x1="430" y1="215" x2="430" y2="55" class="accent"/>
  <circle cx="530" cy="215" r="5" class="point"/>
  <text x="207" y="240">−1</text><text x="423" y="240">1</text><text x="520" y="240">2</text>
  <text x="72" y="198">cut to −∞</text><text x="442" y="82">cut to i∞</text>
  <path d="M180 115 C260 65 440 65 500 145 C550 210 500 300 400 320 C300 340 180 300 155 235" class="ghost"/>
</svg>
<figcaption>The original segment ties the branch points together but still allows a loop around both. Sending the branch points to infinity blocks that monodromy.</figcaption>
</figure>

</div>
</details>

<details class="ms4045-solution" markdown="1">
<summary>Question 4 · log[z(z+1)] and two branch points</summary>
<div class="ms4045-answer" markdown="1">

Let
\[
g(z)=z(z+1).
\]
Then
\[
f(z)=\ln g(z).
\]

### (a) Why the segment [−1,0] does not make f single-valued

The proposed domain removes the segment joining the two zeros \(-1\) and \(0\), but a closed contour can still go around the entire segment.

On one positive circuit around both zeros,

- \(z\) winds once around \(0\), so its argument changes by \(2\pi\);
- \(z+1\) also winds once around \(0\), so its argument changes by another \(2\pi\).

Hence
\[
\Delta\arg[z(z+1)]=4\pi.
\]

The logarithm therefore changes by
\[
\boxed{4\pi i},
\]
so it does not return to the same value after the contour. The proposed cut does **not** give a single-valued branch.

This is exactly the mechanism behind the lecturer hint: travel from \(z=2\) to \(z=-2\) through the upper half-plane and return through the lower half-plane.

### (b) One valid replacement cut

<div class="ms4045-warning">
<strong>Derived completion.</strong> The supplied lecturer sheet gives a hint for part (a) but does not state a specific answer for part (b). The following is one valid branch-cut construction.
</div>

A branch of \(\ln[z(z+1)]\) exists on any simply connected domain that excludes the zeros \(-1\) and \(0\). One convenient choice that keeps the reference point \(z=1\) available is

\[
\boxed{
(-\infty,-1]\ \cup\ [0,i\infty)
}.
\]

On the resulting cut plane, choose a continuous logarithm of \(z(z+1)\) and then choose its additive multiple of \(2\pi i\) so that
\[
f(1)=\ln2+4\pi i.
\]

The important structural idea is: **each branch point is connected to infinity, and the cuts do not pass through the reference point.**

<figure class="ms4045-diagram">
<svg viewBox="0 0 660 390" role="img" aria-label="Argand plane showing branch points minus one and zero with two cuts to infinity for the logarithm">
  <line x1="55" y1="215" x2="610" y2="215" class="axis"/>
  <line x1="330" y1="45" x2="330" y2="350" class="axis"/>
  <text x="594" y="203">Re z</text><text x="340" y="58">Im z</text>
  <circle cx="230" cy="215" r="5" class="point"/><circle cx="330" cy="215" r="5" class="point"/>
  <line x1="55" y1="215" x2="230" y2="215" class="accent"/>
  <line x1="330" y1="215" x2="330" y2="55" class="accent"/>
  <circle cx="430" cy="215" r="5" class="point"/>
  <text x="207" y="240">−1</text><text x="320" y="240">0</text><text x="423" y="240">1</text>
  <text x="72" y="198">cut to −∞</text><text x="344" y="82">cut to i∞</text>
  <path d="M180 120 C260 70 430 80 500 155 C550 215 505 305 405 325 C300 345 180 300 155 235" class="ghost"/>
</svg>
<figcaption>A valid cut system prevents any allowed closed contour from winding independently around the branch points while preserving the point \(z=1\).</figcaption>
</figure>

</div>
</details>

<div class="ms4045-sheet-nav">
<a href="{{ '/modules/ms4045/tutorial-sheet-2.html' | relative_url }}">← Back to Sheet 2</a>
<a href="{{ '/modules/ms4045-complex-analysis.html' | relative_url }}">Back to MS4045 overview →</a>
</div>
