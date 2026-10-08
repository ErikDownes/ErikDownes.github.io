---
layout: doc
permalink: /master-excel.html
handle: Master Excel
title: Master Excel
nav_order: 65
top_nav: true
public_mode: true
description: Learn Excel by exploring live data, building formulas and explaining how they help colleagues.
eyebrow: MASTER EXCEL · EXPLORE · BUILD · EXPLAIN
---

# Master Excel

**Change the data. Build the formula. Explain what it achieves.**

This is a small, practical Excel school. Each skill begins with a **finished, working example**: change a price, payment or code and see the result immediately. Then try the formula yourself, test it and explain its value to someone else. You do not need an account or a download.

Choose **IF**, **IFS** or **VLOOKUP** below. The examples use small, readable tables deliberately; mastering the idea matters more than filling hundreds of rows.

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
    title="Interactive Excel lessons: IF, IFS and VLOOKUP"
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

More lessons can follow the same three-stage pattern: **SUMIFS**, **COUNTIFS**, **XLOOKUP**, **pivot tables** and spreadsheet checks. This first set establishes the method without creating a sprawling workbook.
