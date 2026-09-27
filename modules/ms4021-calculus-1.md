---
layout: doc
title: "MS4021 — Calculus 1"
code: "MS4021"
year: "1st"
semester: "Sem1"
status: "Completed"
eyebrow: "1ST YEAR · SEM1 · COMPLETED"
intro: "Limits, continuity and differentiation — the mathematics of local change."
study_mode: true
---

<script>
window.MathJax = {
  tex: {
    inlineMath: [['\\(','\\)']],
    displayMath: [['\\[','\\]']]
  },
  svg: { fontCache: 'global' }
};
</script>
<script defer src="https://cdn.jsdelivr.net/npm/mathjax@3.2.2/es5/tex-svg.js"></script>

<style>
.calc-page{display:grid;gap:18px}
.calc-hero{margin:4px 0 2px;padding:24px 24px 20px;border:1px solid #dce3e9;border-radius:18px;background:linear-gradient(135deg,#fbfdff,#f4f8fb)}
.calc-hero .formula{font-size:1.28rem;text-align:center;margin:.4rem 0 .8rem}
.calc-hero p{margin:.35rem 0;color:#4d5965}
.calc-path{display:flex;flex-wrap:wrap;align-items:center;gap:8px;margin:4px 0 0}
.calc-path span{padding:6px 10px;border:1px solid #dce3e9;border-radius:999px;background:#fff;font-size:.86rem;font-weight:700}
.calc-path i{font-style:normal;color:#7a8792;font-weight:700}
.calc-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;margin:12px 0 6px}
.calc-card{border:1px solid #dce3e9;border-radius:16px;padding:18px;background:#fff}
.calc-card h3{margin:0 0 8px;font-size:1.02rem}
.calc-card .eq{font-size:1.03rem;margin:.7rem 0}
.calc-card p{margin:.35rem 0;color:#4d5965}
.calc-judgement{margin:12px 0;padding:18px 20px;border-left:4px solid #5b7da3;border-radius:0 14px 14px 0;background:#f7f9fb}
.calc-judgement strong{color:#24384c}
.calc-two{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}
.calc-two>div{border:1px solid #e1e6eb;border-radius:14px;padding:16px}
.calc-two h3{margin:0 0 8px}
.calc-two ul{margin:.4rem 0 0}
.module-resources{margin-top:14px;border:1px solid #dce3e9;border-radius:14px;background:#fbfcfd}
.module-resources>summary{cursor:pointer;padding:14px 16px;font-weight:800}
.module-resources>div{padding:0 16px 16px}
.module-resources details{margin:8px 0;border-top:1px solid #e6eaee;padding-top:8px}
.module-resources details summary{cursor:pointer;font-weight:700}
.module-resources p,.module-resources li{color:#53606b}
.calc-source-note{font-size:.88rem;color:#687580}
@media(max-width:700px){.calc-grid,.calc-two{grid-template-columns:1fr}.calc-hero{padding:19px}.calc-path i{display:none}}
</style>

<p><a href="{{ '/modules-projects.html' | relative_url }}">← Modules</a></p>

<div class="calc-page" markdown="1">

<div class="calc-hero">
<div class="formula">
\[
f'(a)=\lim_{h\to 0}\frac{f(a+h)-f(a)}{h}
\]
</div>
<p><strong>The central idea:</strong> a derivative turns “how is this changing?” into a precise number. The definition comes from a limit; the rules make it usable; the applications turn it into judgement.</p>
<div class="calc-path" aria-label="Course progression">
<span>Numbers</span><i>→</i><span>Functions</span><i>→</i><span>Limits</span><i>→</i><span>Continuity</span><i>→</i><span>Derivative</span><i>→</i><span>Optimisation</span>
</div>
</div>

## Core mathematics | What the module actually built

<div class="calc-grid">
<div class="calc-card">
<h3>Limits & continuity</h3>
<div class="eq">\(\displaystyle \lim_{x\to a}f(x)=L\)</div>
<p>Study what a function approaches, including cases where substitution alone is not enough. Continuity links the nearby behaviour to the actual value: \(\lim_{x\to a}f(x)=f(a)\).</p>
</div>

<div class="calc-card">
<h3>The derivative</h3>
<div class="eq">\(\displaystyle f'(x)=\lim_{h\to0}\frac{f(x+h)-f(x)}{h}\)</div>
<p>Instantaneous rate of change, local slope and sensitivity. The important skill is not merely obtaining \(f'(x)\), but interpreting its sign, size and units.</p>
</div>

<div class="calc-card">
<h3>Structure & rules</h3>
<div class="eq">\(\displaystyle (fg)'=f'g+fg'\)</div>
<div class="eq">\(\displaystyle \frac{d}{dx}f(g(x))=f'(g(x))g'(x)\)</div>
<p>Product, quotient and chain rules let complicated functions be decomposed into simpler pieces. The chain rule is especially important because models are usually compositions.</p>
</div>

<div class="calc-card">
<h3>Applications</h3>
<div class="eq">\(\displaystyle f'(x)=0\qquad f''(x)\gtrless0\)</div>
<p>Critical points, increasing/decreasing behaviour, curvature, local maxima/minima and optimisation. This is where calculus becomes a decision tool rather than an algebra exercise.</p>
</div>
</div>

## Judgement | What is worth retaining now

<div class="calc-judgement">
<strong>Keep the mathematical judgement; do not confuse difficult hand manipulation with professional mathematical ability.</strong>
<p>For finance, analytics and asset-management work, Erik should be able to recognise the structure of a problem, choose the right model, interpret derivatives and limits, check units and signs, and challenge an implausible result. Software can do repetitive symbolic manipulation extremely well; the human still has to decide what calculation is meaningful and whether the answer makes sense.</p>
<p>That also applies when integration appears later in the degree. Basic hand integration remains useful for fluency and checking, but specialised integration tricks are rarely a high-value day-to-day workplace skill. Understanding what an integral means, whether an analytical or numerical method is appropriate, and how to validate the result matters more.</p>
</div>

<div class="calc-two">
<div>
<h3>Keep in your head</h3>
<ul>
<li>A derivative is a <strong>local rate of change</strong>.</li>
<li>A limit describes behaviour <strong>near</strong> a point.</li>
<li>Continuity, domain and assumptions matter before applying rules.</li>
<li>The chain rule is the calculus of <strong>composed relationships</strong>.</li>
<li>\(f'(x)=0\) identifies candidates; it does not by itself prove a maximum or minimum.</li>
<li>A result should be checked against scale, sign, units and the underlying situation.</li>
</ul>
</div>
<div>
<h3>Let tools carry the grind</h3>
<ul>
<li>Long repetitive algebra and symbolic differentiation.</li>
<li>Dense graphing and parameter sweeps.</li>
<li>Numerical root-finding once the equation is correctly formulated.</li>
<li>Specialised symbolic integration when a CAS or numerical method is more appropriate.</li>
<li>Verification with Python, a CAS or plotting software — followed by human interpretation.</li>
</ul>
</div>
</div>

## Interview value | The useful one-minute version

<p>“Calculus I gave me the foundation for thinking about change mathematically. We built from functions and limits into continuity and differentiation, then used derivatives to analyse rates of change, turning points and optimisation. What I take from it now is less the ability to perform a long calculation by hand and more the ability to recognise the mathematical structure, use the right tool, and judge whether the result is sensible.”</p>

## Resources | Original lecture and tutorial material

<details class="module-resources">
<summary>Open the original course resource map</summary>
<div>
<p class="calc-source-note">This is deliberately kept out of the main page. The source pack supplied for MS4021 contains the original lecture material, handwritten lecture scans and tutorial sheets with worked solutions.</p>

<details>
<summary>Lecture resources</summary>
<ul>
<li><strong>Course introduction:</strong> module structure, texts and assessment.</li>
<li><strong>Foundations:</strong> real numbers, proof language and complex numbers.</li>
<li><strong>Functions:</strong> domain, range, composition and real-valued functions.</li>
<li><strong>Limits & continuity:</strong> intuitive limits, formal \(\varepsilon\)-\(\delta\) ideas and continuity.</li>
<li><strong>Differentiation:</strong> derivative from first principles; product, quotient and chain rules.</li>
<li><strong>Transcendental functions:</strong> exponential, logarithmic and trigonometric differentiation.</li>
<li><strong>Applications:</strong> mean value ideas, increasing/decreasing functions, stationary points and optimisation.</li>
</ul>
</details>

<details>
<summary>Tutorial resources</summary>
<ul>
<li>Tutorial Sheets 1–8 cover the same progression through numbers, functions, limits and differentiation.</li>
<li>Worked solution sets are included in the source pack for the tutorial material where supplied.</li>
<li>Use these only when a specific technique needs refreshing; they are not the main learning interface.</li>
</ul>
</details>
</div>
</details>

</div>
