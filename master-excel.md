---
layout: doc
permalink: /master-excel.html
handle: Master Excel
title: Master Excel
nav_order: 65
top_nav: true
public_mode: true
description: Eight progressive Excel skills with live models, guided completion, independent practice and self-assessment.
eyebrow: MASTER EXCEL · EXPLORE · FINISH · BUILD · REFLECT
---

# Master Excel

**Explore a model → Finish it → Build independently → Reflect on what you learned.**

This is a small, practical Excel school. Each skill begins with a **finished, working example**: change a price, payment or code and see the result immediately. Next, finish a partially completed worksheet, build a similar one using different data, and assess your own understanding. You do not need an account or a download.

Use the **Excel Explorer** on the left to choose from eight topics, starting with months, basic calculations and cell references before progressing to IF, IFS, VLOOKUP, SUMIFS, cleaning data and pivot tables. Click any cell to see its entered value or the calculation behind it in the formula bar **above** the worksheet. Each stage uses a fresh, realistic sample dataset. Most examples fit into a few columns and six to eight rows.

<style>
.master-excel-page .doc-paper,
body:has(.master-excel-embed) .doc-paper {
  width:min(1260px,calc(100vw - 28px));
  max-width:none;
  padding:42px clamp(13px,3vw,48px) 60px;
}
.master-excel-embed {
  margin:22px -5px 18px;
  padding:0;
  overflow:hidden;
  border:1px solid #dae4ef;
  border-radius:18px;
  background:#f6f8fb;
}
.master-excel-embed iframe {
  display:block;
  width:100%;
  min-height:1000px;
  height:1000px;
  border:0;
}
.master-excel-after { color:#526477;font-size:.95rem; }
@media(max-width:680px) {
  .master-excel-embed { margin-left:-8px; margin-right:-8px; }
}
</style>

<div class="master-excel-embed">
  <iframe
    id="masterExcelFrame"
    title="Master Excel Explorer: eight interactive skills and four practice stages"
    src="{{ '/master-excel-lab.html' | relative_url }}"
    loading="eager"
    allow="clipboard-write"
  ></iframe>
</div>
<script>
(function () {
  var frame = document.getElementById('masterExcelFrame');
  if (!frame) return;
  window.addEventListener('message', function (event) {
    if (event.origin !== window.location.origin || event.source !== frame.contentWindow) return;
    if (!event.data || event.data.type !== 'master-excel-height') return;
    var h = Number(event.data.height);
    if (Number.isFinite(h) && h >= 500 && h <= 9000) frame.style.height = Math.ceil(h + 4) + 'px';
  });
})();
</script>

<p class="master-excel-after">Prefer a separate, full-width workspace? <a href="{{ '/master-excel-lab.html' | relative_url }}" target="_blank" rel="noopener">Open the interactive lesson on its own ↗</a>.</p>

## Why explaining matters

**A formula is a technical skill; explaining its purpose is a professional skill.** In a finance role, a colleague needs to understand what the calculation checks, when the result can be trusted and which exceptions deserve attention. Aim to give a natural explanation in about 20 seconds.

After testing a changed input and checking the result, use the final stage for **assessment as learning**: recognise what you understand, identify an uncertainty, and explain the practical value in your own words. It is self-reflection, not an exam or a request for memorised definitions.


## Create your own exercise with AI

Once you understand a skill, try designing a new example yourself rather than completing somebody else's sheet. You can give ChatGPT a brief like this:

> Create a small Excel lesson on SUMIFS using no more than five columns and eight rows. First show me a fully working model that I can change. Then give me a different, partly completed dataset to finish. Next give me fresh data so I can build and test the formula without copying. Finish with a few self-assessment questions and a simple explanation for a colleague. Give hints only when I ask.

**Erik:** Ask AI for a *new problem*, not an autofilled answer. Change the figures, challenge the results and explain your reasoning. You can reuse the same approach for any other Excel function.
