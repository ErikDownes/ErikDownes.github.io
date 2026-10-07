---
layout: doc
title: "MS4045 — Worksheet 2"
handle: "Worksheet 2"
code: "MS4045"
year: "3rd"
semester: "Sem1"
status: "Midterm 1"
eyebrow: "MS4045 · MIDTERM 1 · WORKSHEET 2"
mathjax: true
mathjax_dollar: true
---

{% include ms4045-styles.html %}

<style>
.worksheet-actions{display:flex;flex-wrap:wrap;gap:9px;align-items:center;margin:0 0 16px}
.worksheet-actions a{padding:8px 11px;border:1px solid #d3dde5;border-radius:999px;background:#fff;text-decoration:none!important;font-weight:750}
.worksheet-modebar{position:sticky;top:72px;z-index:12;display:flex;align-items:center;gap:7px;flex-wrap:wrap;margin:0 0 18px;padding:10px 12px;border:1px solid #d8e1e8;border-radius:12px;background:rgba(250,252,253,.96);backdrop-filter:blur(7px)}
.worksheet-modebar strong{margin-right:3px;color:#31485b}
.worksheet-mode{border:1px solid #cfd9e1;border-radius:999px;background:#fff;color:#244c68;padding:7px 13px;font:inherit;font-weight:800;cursor:pointer}
.worksheet-mode.is-active{background:#183f67;border-color:#183f67;color:#fff}
.worksheet-modehint{margin-left:6px;color:#697986;font-size:.84rem}
.worksheet-paper{max-width:850px;margin:0 auto 44px;padding:50px 58px 64px;border:1px solid #d8d8d8;background:#fff;box-shadow:0 3px 16px rgba(15,23,42,.06);font-family:Georgia,"Times New Roman",serif;color:#111}
.worksheet-paper-header{text-align:center;margin-bottom:26px}
.worksheet-paper-header h1{margin:0;font-family:Georgia,"Times New Roman",serif;font-size:1.42rem;font-weight:700}
.worksheet-section-title{margin:28px 0 20px;font-family:Georgia,"Times New Roman",serif;font-size:1.06rem;font-weight:700;color:#111}
.worksheet-question{margin:0 0 38px}
.worksheet-prompt h3{margin:0 0 12px;font:700 1rem/1.45 Georgia,"Times New Roman",serif;color:#111}
.worksheet-prompt p,.worksheet-prompt li{line-height:1.72}
.worksheet-prompt p{margin:12px 0}
.worksheet-prompt mjx-container[display="true"],.worksheet-solution mjx-container[display="true"]{margin:1.28em 0!important}
.worksheet-solution{display:none;margin:18px 0 0;padding:18px 20px;border-left:3px solid #8ba9c4;background:#f8fafc;font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;font-size:.95rem}
.worksheet-solution p{line-height:1.68}
.worksheet-solution .solution-step{margin-top:14px;margin-bottom:14px}
.worksheet-paper[data-mode="on"] .worksheet-solution,.worksheet-paper[data-mode="reveal"] .worksheet-solution{display:block}
.worksheet-paper[data-mode="reveal"] .worksheet-solution .solution-step{display:none}
.worksheet-paper[data-mode="reveal"] .worksheet-solution .solution-step.is-revealed{display:block}
.worksheet-revealbar{display:none;align-items:center;gap:10px;margin:10px 0 0;font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif}
.worksheet-paper[data-mode="reveal"] .worksheet-revealbar{display:flex}
.worksheet-next{border:1px solid #315d7c;border-radius:999px;background:#fff;color:#214d6b;padding:7px 12px;font:inherit;font-weight:800;cursor:pointer}
.worksheet-next:disabled{opacity:.45;cursor:default}
.worksheet-count{color:#6b7985;font-size:.82rem}
@media(max-width:760px){.worksheet-modebar{top:62px}.worksheet-paper{padding:30px 20px 44px}.worksheet-modehint{width:100%;margin-left:0}}
@media print{.worksheet-actions,.worksheet-modebar,.worksheet-revealbar,.doc-toolbar{display:none!important}.worksheet-paper{max-width:none;margin:0;padding:0;border:0;box-shadow:none}.worksheet-solution{display:none!important}}
</style>

<div class="worksheet-actions">
<a href="{{ '/modules/ms4045/tutorial-sheet-1.html' | relative_url }}">← Worksheet 1</a>
<a href="https://drive.google.com/file/d/1BYlMtF7qvH9AtHkPMNSWUerooI0cMANc/view?usp=drivesdk" target="_blank" rel="noopener">Original Worksheet 2 PDF ↗</a>
<a href="{{ '/modules/ms4045/exam-2023.html' | relative_url }}">2023 exam →</a>
</div>

<div class="worksheet-modebar" role="group" aria-label="Solutions display mode">
<strong>Solutions</strong>
<button type="button" class="worksheet-mode is-active" data-mode="off" aria-pressed="true">Off</button>
<button type="button" class="worksheet-mode" data-mode="on" aria-pressed="false">On</button>
<button type="button" class="worksheet-mode" data-mode="reveal" aria-pressed="false">Reveal</button>
<span class="worksheet-modehint">One choice controls the whole sheet.</span>
</div>

<article class="worksheet-paper" data-worksheet data-mode="off">
<header class="worksheet-paper-header">
<h1>Tutorial sheet 2</h1>
</header>

<h2 class="worksheet-section-title">Multivalued functions</h2>

<section class="worksheet-question" id="q1">
<div class="worksheet-prompt" markdown="1">
### (1)

Consider the dependence
$$
f^3=z^2
\tag{1}
$$
on the complex plane with the **non-positive part of the real axis removed**, and require
$$
f(1)=1.
\tag{2}
$$

**(a)** Argue that (1)–(2) and the proposed branch cut describe a single-valued function.

**(b)** Find
$$
f(-1-i0)
\qquad\text{and}\qquad
f(-1+i0).
$$
</div>
<div class="worksheet-solution" markdown="1">
Remove the non-positive real axis and write
$$
z=re^{i\theta},
\qquad
-\pi<\theta<\pi.
$$
Then the condition $f(1)=1$ selects
$$
\boxed{
f(z)=r^{2/3}e^{2i\theta/3}
=
\exp\left(\frac23(\ln r+i\theta)\right)
}.
$$

### (a) Why this is single-valued

The cut prevents $\theta$ from increasing by a full $2\pi$ around the origin. On the cut plane, the chosen $\theta\in(-\pi,\pi)$ is continuous and unique, so the expression above gives one value of $f$ at every allowed point.

Equivalently: along every allowable closed contour, the net change of the chosen argument is zero, so $f$ returns to its starting value.

### (b) Values on the two sides of the cut

Approaching $-1$ from below,
$$
\theta\to-\pi,
$$
hence
$$
f(-1-i0)
=
e^{-2\pi i/3}
=
\boxed{\frac{-1-i\sqrt3}{2}}.
$$

Approaching from above,
$$
\theta\to\pi,
$$
so
$$
f(-1+i0)
=
e^{2\pi i/3}
=
\boxed{\frac{-1+i\sqrt3}{2}}.
$$

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
<div class="worksheet-revealbar">
<button type="button" class="worksheet-next">Reveal next step</button>
<span class="worksheet-count" aria-live="polite"></span>
</div>
</section>

<section class="worksheet-question" id="q2">
<div class="worksheet-prompt" markdown="1">
### (2)

A single-valued function is defined as a branch of
$$
f=\ln z
$$
on the complex plane with the **non-negative part of the imaginary axis removed**, together with
$$
f(1)=2\pi i.
$$

**(a)** Express $f$ in terms of $|z|$ and $\arg z$, and specify the branch of $\arg z$ to be used.

**(b)** Find
$$
f(i-0)
\qquad\text{and}\qquad
f(i+0).
$$
</div>
<div class="worksheet-solution" markdown="1">
A branch of the logarithm has the form
$$
f(z)=\ln|z|+i\arg z.
$$

The cut is the non-negative imaginary axis, whose direction is $\pi/2$. To satisfy
$$
f(1)=2\pi i,
$$
we need
$$
\arg 1=2\pi.
$$
A continuous branch that does this is
$$
\boxed{
\frac\pi2<\arg z<\frac{5\pi}{2}
}.
$$

Therefore
$$
\boxed{
f(z)=\ln|z|+i\arg z,
\qquad
\frac\pi2<\arg z<\frac{5\pi}{2}.
}
$$

Approaching $i$ from the left side of the cut,
$$
\arg z\to\frac\pi2,
$$
so
$$
\boxed{f(i-0)=\frac{\pi i}{2}}.
$$

Approaching from the right side, the continuous argument tends to $5\pi/2$, not $\pi/2$:
$$
\boxed{f(i+0)=\frac{5\pi i}{2}}.
$$

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
<figcaption>The cut fixes one continuous determination of argument. The two banks differ by $2\pi$, so the logarithm differs by $2\pi i$.</figcaption>
</figure>
</div>
<div class="worksheet-revealbar">
<button type="button" class="worksheet-next">Reveal next step</button>
<span class="worksheet-count" aria-live="polite"></span>
</div>
</section>

<section class="worksheet-question" id="q3">
<div class="worksheet-prompt" markdown="1">
### (3)

Consider
$$
f^4=(z+1)^2(z-1)
\tag{3}
$$
on the complex plane with the segment $[-1,1]$ of the real axis removed, and require
$$
f(2)=\sqrt3.
\tag{4}
$$

**(a)** Show that (3)–(4) and the proposed branch cut **do not** describe a single-valued function.

**(b)** Find a branch cut that **does** make the function described by (3)–(4) single-valued.
</div>
<div class="worksheet-solution" markdown="1">
We have
$$
f^4=(z+1)^2(z-1).
$$

### (a) Failure of the proposed cut

Take a closed contour that winds once around the removed segment $[-1,1]$. Along that contour,

- $z+1$ winds once around $0$, so $(z+1)^2$ contributes a change of argument $4\pi$;
- $z-1$ winds once around $0$, contributing $2\pi$.

Thus the right-hand side changes its argument by
$$
4\pi+2\pi=6\pi.
$$

Because $f^4$ is the right-hand side, the corresponding change in the argument of $f$ is
$$
\Delta\arg f=\frac{6\pi}{4}=\frac{3\pi}{2}.
$$

That is **not** a multiple of $2\pi$, so after returning to the same $z$, the value of $f$ has changed. Therefore the function is not single-valued on the proposed domain.

### (b) A cut that works

The lecturer solution gives one valid choice:

$$
\boxed{
(-\infty,-1]\ \cup\ [1,1+i\infty)
}
$$

That is, send one cut from $z=-1$ to $-\infty$ along the real axis, and another from $z=1$ vertically upward to infinity. The reference point $z=2$ is not on either cut.

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
<div class="worksheet-revealbar">
<button type="button" class="worksheet-next">Reveal next step</button>
<span class="worksheet-count" aria-live="polite"></span>
</div>
</section>

<section class="worksheet-question" id="q4">
<div class="worksheet-prompt" markdown="1">
### (4)

Consider the dependence
$$
f=\ln[z(z+1)]
\tag{5}
$$
on the complex plane with the segment $[-1,0]$ of the real axis removed, and require
$$
f(1)=\ln2+4\pi i.
\tag{6}
$$

**(a)** Show that (5)–(6) and the proposed branch cut **do not** describe a single-valued function.

**(b)** Find a branch cut that **does** make the function described by (5)–(6) single-valued.
</div>
<div class="worksheet-solution" markdown="1">
Let
$$
g(z)=z(z+1).
$$
Then
$$
f(z)=\ln g(z).
$$

### (a) Why the segment [−1,0] does not make f single-valued

The proposed domain removes the segment joining the two zeros $-1$ and $0$, but a closed contour can still go around the entire segment.

On one positive circuit around both zeros,

- $z$ winds once around $0$, so its argument changes by $2\pi$;
- $z+1$ also winds once around $0$, so its argument changes by another $2\pi$.

Hence
$$
\Delta\arg[z(z+1)]=4\pi.
$$

The logarithm therefore changes by
$$
\boxed{4\pi i},
$$
so it does not return to the same value after the contour. The proposed cut does **not** give a single-valued branch.

This is exactly the mechanism behind the lecturer hint: travel from $z=2$ to $z=-2$ through the upper half-plane and return through the lower half-plane.

### (b) One valid replacement cut

<div class="ms4045-warning">
<strong>Derived completion.</strong> The supplied lecturer sheet gives a hint for part (a) but does not state a specific answer for part (b). The following is one valid branch-cut construction.
</div>

A branch of $\ln[z(z+1)]$ exists on any simply connected domain that excludes the zeros $-1$ and $0$. One convenient choice that keeps the reference point $z=1$ available is

$$
\boxed{
(-\infty,-1]\ \cup\ [0,i\infty)
}.
$$

On the resulting cut plane, choose a continuous logarithm of $z(z+1)$ and then choose its additive multiple of $2\pi i$ so that
$$
f(1)=\ln2+4\pi i.
$$

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
<figcaption>A valid cut system prevents any allowed closed contour from winding independently around the branch points while preserving the point $z=1$.</figcaption>
</figure>
</div>
<div class="worksheet-revealbar">
<button type="button" class="worksheet-next">Reveal next step</button>
<span class="worksheet-count" aria-live="polite"></span>
</div>
</section>

</article>

<script>
(() => {
  const paper = document.querySelector('[data-worksheet]');
  const modeButtons = [...document.querySelectorAll('.worksheet-mode')];
  if (!paper || !modeButtons.length) return;

  const questions = [...paper.querySelectorAll('.worksheet-question')];
  questions.forEach(question => {
    const solution = question.querySelector('.worksheet-solution');
    if (!solution) return;
    [...solution.children].forEach(child => child.classList.add('solution-step'));

    const next = question.querySelector('.worksheet-next');
    const count = question.querySelector('.worksheet-count');
    const updateCount = () => {
      const steps = [...solution.querySelectorAll(':scope > .solution-step')];
      const shown = steps.filter(step => step.classList.contains('is-revealed')).length;
      count.textContent = paper.dataset.mode === 'reveal' ? shown + ' / ' + steps.length : '';
      next.disabled = paper.dataset.mode === 'reveal' && shown >= steps.length;
      next.textContent = next.disabled ? 'All steps revealed' : 'Reveal next step';
    };
    next.addEventListener('click', () => {
      const hidden = [...solution.querySelectorAll(':scope > .solution-step')].find(step => !step.classList.contains('is-revealed'));
      if (hidden) {
        hidden.classList.add('is-revealed');
        window.MathJax?.typesetPromise?.([hidden]).catch(()=>{});
      }
      updateCount();
    });
    question._updateWorksheetCount = updateCount;
  });

  const setMode = mode => {
    paper.dataset.mode = mode;
    modeButtons.forEach(button => {
      const active = button.dataset.mode === mode;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
    questions.forEach(question => {
      question.querySelectorAll('.solution-step').forEach(step => step.classList.remove('is-revealed'));
      question._updateWorksheetCount?.();
    });
    if (mode !== 'off') window.MathJax?.typesetPromise?.([paper]).catch(()=>{});
  };

  modeButtons.forEach(button => button.addEventListener('click', () => setMode(button.dataset.mode)));
  setMode('off');
})();
</script>
