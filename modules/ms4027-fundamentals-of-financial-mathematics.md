---
layout: doc
title: "MS4027 — Fundamentals of Financial Mathematics"
code: "MS4027"
year: "3rd"
semester: "Sem1"
status: "Core"
eyebrow: "3RD YEAR · AUTUMN · 6 CREDITS"
intro: "Price a future promise, explain its risk, and choose a sensible hedge."
---

<style>
.ms4027-facts{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px 22px;padding:16px 20px;border:1px solid #dae4ed;border-radius:14px;background:#f5f9fc;margin:10px 0 26px}
.ms4027-facts p{margin:0!important;line-height:1.5}.ms4027-facts strong{color:#153a5b}
.ms4027-cue{border-left:4px solid #226a9a;background:#f2f7fb;padding:12px 16px;margin:14px 0;font-weight:650}
.ms4027-check details{margin:9px 0;border:1px solid #d9e3ec;border-radius:10px;padding:11px 14px;background:#fff}
.ms4027-check summary{cursor:pointer;font-weight:700;color:#173b60}.ms4027-check details p{margin:10px 0 2px}
.ms4027-ratings{display:grid;gap:8px;margin:14px 0}.ms4027-rating{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:10px 14px;border:1px solid #d9e3ec;border-radius:10px}
.ms4027-rating .dots{display:flex;flex:none;gap:6px}.ms4027-rating button{width:32px;height:32px;border:1px solid #6694b3;border-radius:50%;background:#fff;color:#184b6e;font-size:19px;line-height:1;cursor:pointer}
.ms4027-rating button[aria-pressed="true"],.ms4027-rating button.is-filled{background:#165783;color:#fff}.ms4027-rating button:focus-visible{outline:3px solid #edb739;outline-offset:2px}
.ms4027-note{font-size:.9rem;color:#526778}
@media(max-width:620px){.ms4027-facts{grid-template-columns:1fr}.ms4027-rating{align-items:flex-start;flex-direction:column}.ms4027-rating button{width:40px;height:40px}}
</style>

<p><a href="{{ '/modules-projects.html' | relative_url }}">← Modules</a></p>

<div class="ms4027-facts">
<p><strong>Module leader:</strong> Dr Eberhard Mayerhofer</p>
<p><strong>Contact:</strong> <a href="mailto:eberhard.mayerhofer@ul.ie">eberhard.mayerhofer@ul.ie</a> · +353 61 202316</p>
<p><strong>Office:</strong> Room and office hours are not published in the module entry; confirm by email or Brightspace.</p>
<p><strong>Format:</strong> 2 lectures + 1 tutorial each week; a graded case study.</p>
</div>

## Core idea | What is the course about?

A **derivative** is a contract whose value depends on something else, such as a share price or an interest rate. MS4027 asks how to **price** that contract without an arbitrage opportunity and how to **hedge** the risk it creates. The course uses probability and small models to make those decisions precise.

<p class="ms4027-cue">Say it: “We start with a future payoff, work out a consistent price today, and decide which risk to keep or hedge.”</p>

## Language | Six distinctions worth saying clearly

- **Forward / future:** both agree a price for a later transaction. A future is standardised, exchange traded and settled daily; a forward is usually privately agreed.
- **Option / obligation:** an option gives its holder a right, while a forward or future creates an obligation.
- **Long / short hedge:** expect to buy later? A long hedge protects against a rising price. Expect to sell? A short hedge protects against a falling price.
- **Arbitrage / replication:** arbitrage is an inconsistent price that permits a riskless gain; replication matches a payoff using other traded positions.
- **Real-world / risk-neutral probability:** one describes what may happen; the other is a device for pricing consistently with market prices.
- **Hedge / basis risk:** a hedge reduces an exposure; basis risk remains when the hedge and the exposure do not move exactly together.

## Study | Follow the idea through the syllabus

1. **Contracts:** describe the payoff of forwards, futures, options, bonds and forward rate agreements. Start with the parties, the underlying and the date.
2. **Price:** use no-arbitrage, put–call parity and a binomial tree. Ask what portfolio would reproduce the payoff.
3. **Hedge:** choose an offsetting position, then explain what risk remains. Hull’s airline fuel example makes a cross hedge and basis risk concrete.
4. **Extend:** conditional expectation, martingales and risk-neutral valuation deepen the model; American options and simple ARMA time series extend it to exercise decisions and historical data.

The supplied Hull chapters and slides emphasise **derivatives, futures mechanics and hedging**. The later topics come from UL’s 2026/27 syllabus, so this is a **study map**, not a claim about the order of Erik’s lectures.

## Check | Explain before revealing

<div class="ms4027-check">
<details><summary>AfL · A fuel price hedge loses money. Has the hedge failed?</summary><p>Not necessarily. Look at the <strong>combined</strong> fuel cost and hedge result. A loss on the hedge may offset a saving on fuel; the purpose is to reduce uncertainty.</p></details>
<details><summary>AfL · Why could two contracts with the same future payoff not have different prices?</summary><p>If the payoffs are genuinely identical, buying the cheaper and selling the dearer would create an arbitrage. This is the intuition behind replication pricing.</p></details>
<details><summary>AfL · What remains when heating-oil futures are used to hedge jet fuel?</summary><p><strong>Basis risk:</strong> heating oil and jet fuel prices may move differently. The cross hedge reduces risk but does not remove it.</p></details>
</div>

## Know | Four-dot self-check

Close the answers above. For each idea, speak for 20 seconds without notes. Choose one dot for “I recognise it” through four for “I can explain and apply it”; leave it blank if you cannot yet begin. Revisit any idea below three dots.

<div class="ms4027-ratings" aria-label="Assessment as learning: self-rate from one to four dots">
<div class="ms4027-rating" data-topic="contracts"><span>Describe a contract and its payoff</span><span class="dots" role="group" aria-label="Contracts confidence"></span></div>
<div class="ms4027-rating" data-topic="pricing"><span>Explain arbitrage and replication</span><span class="dots" role="group" aria-label="Pricing confidence"></span></div>
<div class="ms4027-rating" data-topic="hedging"><span>Choose a hedge and name the remaining risk</span><span class="dots" role="group" aria-label="Hedging confidence"></span></div>
<div class="ms4027-rating" data-topic="probability"><span>Distinguish forecast probability from pricing probability</span><span class="dots" role="group" aria-label="Probability confidence"></span></div>
</div>

<p class="ms4027-note">Listen reads the page aloud. Tap a highlighted term for its glossary definition and a deeper check. <a href="https://bookofmodules.ul.ie/Default.aspx?ModuleCodeParameter=%7CMS4027%7C">UL module outline</a> is the source for the course structure; Hull supplies the worked context.</p>

<script>
(() => {
  document.querySelectorAll('.ms4027-rating').forEach(row => {
    const dots = row.querySelector('.dots');
    const key = 'ms4027-confidence:' + row.dataset.topic;
    let value = 0;
    try { value = Math.max(0, Math.min(4, Number(localStorage.getItem(key)) || 0)); } catch (_) {}
    const buttons = Array.from({length: 4}, (_, i) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.textContent = '●';
      button.setAttribute('aria-label', `${i + 1} of 4: ${row.querySelector('span').textContent}`);
      button.addEventListener('click', () => {
        value = i + 1;
        try { localStorage.setItem(key, String(value)); } catch (_) {}
        update();
      });
      dots.append(button);
      return button;
    });
    const update = () => buttons.forEach((button, i) => {
      button.classList.toggle('is-filled', i < value);
      button.setAttribute('aria-pressed', String(i === value - 1));
    });
    update();
  });
})();
</script>
