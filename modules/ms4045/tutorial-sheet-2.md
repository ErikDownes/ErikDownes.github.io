---
layout: doc
title: "MS4045 — Worksheet 2"
handle: "Worksheet 2"
mathjax: true
finmath_current: true
---

<style>
.doc-paper{width:min(980px,calc(100vw - 20px));padding:18px clamp(10px,2.5vw,26px) 40px}
.doc-paper>.doc-kicker,.doc-paper>h1,.doc-toolbar{display:none!important}
.worksheet-toolbar{display:flex;justify-content:space-between;gap:10px;align-items:center;margin:0 auto 14px;max-width:860px}
.worksheet-toolbar a{padding:9px 12px;border:1px solid #cfd9e1;border-radius:999px;background:#fff;color:#184f73;text-decoration:none!important;font-weight:850;font-size:.9rem}
.worksheet-paper{max-width:860px;margin:0 auto;background:#fff;border:1px solid #d7dce1;box-shadow:0 5px 18px rgba(15,23,42,.06);padding:44px clamp(22px,5vw,58px) 64px;font-family:Georgia,"Times New Roman",serif;color:#111}
.worksheet-title{text-align:center;margin:0 0 28px;font:700 clamp(1.35rem,4vw,1.75rem)/1.2 Georgia,"Times New Roman",serif}
.worksheet-section-title{margin:28px 0 18px;font:700 1.06rem/1.35 Georgia,"Times New Roman",serif;color:#111}
.worksheet-question{position:relative;margin:0;padding:10px 10px 18px;border-radius:8px;transition:background .12s ease}
.worksheet-question:hover,.worksheet-question:focus-within{background:#f6f9fb}
.worksheet-question-hit{position:absolute;inset:0;z-index:4;border-radius:8px}
.worksheet-question h3{margin:0 0 10px;font:700 1rem/1.45 Georgia,"Times New Roman",serif;color:#111}
.worksheet-question p,.worksheet-question li{font-size:clamp(1rem,2.4vw,1.13rem);line-height:1.65}
.worksheet-question p{margin:10px 0}
.worksheet-question mjx-container{position:relative;z-index:1}
.worksheet-question mjx-container[display="true"]{font-size:clamp(1.05rem,2.7vw,1.22rem)!important;margin:1.15em 0!important;overflow-x:auto;overflow-y:hidden}
.worksheet-question::after{content:"Tap question";position:absolute;right:12px;top:8px;font:700 .72rem system-ui,-apple-system,Segoe UI,sans-serif;color:#80909d;opacity:0;transition:opacity .12s}
.worksheet-question:hover::after,.worksheet-question:focus-within::after{opacity:1}
@media(max-width:700px){.doc-paper{width:100%;padding:10px 6px 24px}.worksheet-paper{padding:28px 16px 44px}.worksheet-toolbar{padding:0 6px}.worksheet-question{padding:8px 4px 16px}.worksheet-question::after{display:none}}
@media print{.worksheet-toolbar{display:none}.worksheet-paper{border:0;box-shadow:none;max-width:none;padding:0}}
</style>

<div class="worksheet-toolbar">
<a href="{{ '/modules/ms4045/tutorial-sheet-1.html' | relative_url }}">← Worksheet 1</a>
<a href="https://drive.google.com/file/d/1BYlMtF7qvH9AtHkPMNSWUerooI0cMANc/view?usp=drivesdk" target="_blank" rel="noopener">Original PDF ↗</a>
<a href="{{ '/modules/ms4045/exam-2023.html' | relative_url }}">2023 exam →</a>
</div>

<article class="worksheet-paper">
<h1 class="worksheet-title">Tutorial sheet 2</h1>
<h2 class="worksheet-section-title">Multivalued functions</h2>

<section class="worksheet-question">
  <a class="worksheet-question-hit" href="{{ '/modules/ms4045/ws2-q01.html' | relative_url }}" aria-label="Open Worksheet 2 Question 1"></a>
  <div markdown="1">
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
</section>
<section class="worksheet-question">
  <a class="worksheet-question-hit" href="{{ '/modules/ms4045/ws2-q02.html' | relative_url }}" aria-label="Open Worksheet 2 Question 2"></a>
  <div markdown="1">
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
</section>
<section class="worksheet-question">
  <a class="worksheet-question-hit" href="{{ '/modules/ms4045/ws2-q03.html' | relative_url }}" aria-label="Open Worksheet 2 Question 3"></a>
  <div markdown="1">
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
</section>
<section class="worksheet-question">
  <a class="worksheet-question-hit" href="{{ '/modules/ms4045/ws2-q04.html' | relative_url }}" aria-label="Open Worksheet 2 Question 4"></a>
  <div markdown="1">
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
</section>
</article>
