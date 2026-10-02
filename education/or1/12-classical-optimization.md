---
layout: doc
title: "Week 12 — Classical and Unconstrained Optimisation"
eyebrow: "OPERATIONS RESEARCH I · WEEK 12"
study_mode: true
or1_course: true
mathjax: true
---

[← Operations Research I]({{ site.data.or1.home | relative_url }})

<div class="or-course" markdown="1">

<div class="or-hero"><h2>Optimisation existed before linear programming.</h2><p>Classical optimisation uses calculus to identify stationary points and curvature when variables are continuous and functions are differentiable.</p></div>

## One variable | Necessary and sufficient thinking

For a differentiable function (f(x)), an interior local optimum usually requires

\[
f'(x^*)=0.
\]

But (f'(x^*)=0) only identifies a <button data-or-term="stationary point">stationary point</button>. The second derivative helps classify it:

- (f''(x^*)>0): local minimum;
- (f''(x^*)<0): local maximum;
- (f''(x^*)=0): inconclusive.

Always check boundaries when the domain is restricted.

## Several variables | Gradient equals zero

For

\[
f(x_1,\ldots,x_n),
\]

the <button data-or-term="gradient">gradient</button> is

\[
\nabla f=
\begin{bmatrix}
\partial f/\partial x_1\\
\vdots\\
\partial f/\partial x_n
\end{bmatrix}.
\]

An interior stationary point satisfies

\[
\nabla f(x^*)=0.
\]

## Curvature | The Hessian

The <button data-or-term="hessian">Hessian</button> collects second partial derivatives:

\[
H_f(x)=
\begin{bmatrix}
f_{x_1x_1} & \cdots & f_{x_1x_n}\\
\vdots & \ddots & \vdots\\
f_{x_nx_1} & \cdots & f_{x_nx_n}
\end{bmatrix}.
\]

At a stationary point:

- positive definite Hessian → strict local minimum;
- negative definite → strict local maximum;
- indefinite → saddle point;
- semidefinite/singular → further analysis required.

## Worked | Two-variable classification

Let

\[
f(x,y)=x^2+4y^2-4x+8y.
\]

Gradient:

\[
\nabla f=(2x-4,\;8y+8).
\]

Set it to zero:

\[
x=2,\qquad y=-1.
\]

The Hessian is

\[
H=
\begin{bmatrix}
2&0\\0&8
\end{bmatrix},
\]

which is positive definite, so ((2,-1)) is a strict local—and here global—minimum.

## Modern | Numerical optimisation

<pre><code class="language-python">import numpy as np
from scipy.optimize import minimize

def f(v):
    x, y = v
    return x**2 + 4*y**2 - 4*x + 8*y

res = minimize(f, x0=np.array([0.0, 0.0]))
print(res.x, res.fun)</code></pre>

A numerical result should still be checked against analytical structure when possible.

## Check | Stationary does not mean optimum

<div class="or-mcq" data-id="w12q1" data-answer="2" data-explain="A zero gradient is a first-order necessary condition for many interior optima, but a saddle point can also have zero gradient.">
<strong>If (\nabla f(x^*)=0), what can you conclude immediately?</strong>
<div class="or-choices">
<button class="or-choice" type="button">It is definitely a global minimum.</button>
<button class="or-choice" type="button">It is definitely a local maximum.</button>
<button class="or-choice" type="button">It is a stationary candidate requiring curvature/boundary analysis.</button>
<button class="or-choice" type="button">The model is linear.</button>
</div><p class="or-feedback"></p></div>

<div class="or-confidence" data-id="w12c1"><strong>Exit ticket:</strong> I can find stationary points in one and several variables and use second derivatives/Hessians to classify them correctly.</div>

</div>
