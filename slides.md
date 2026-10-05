---
layout: doc
permalink: /slides.html
title: Job Spec Slides
description: Self-hosted image gallery of the Pivotal Corporate job specification slides.
eyebrow: PIVOTAL CORPORATE · JOB SPEC · SLIDES
public_mode: true
---

<style>
.job-spec-gallery{max-width:1000px;margin:6px auto 30px}
.gallery-stage{position:relative;border:1px solid #dfe5ea;border-radius:14px;overflow:hidden;background:#eef2f6;box-shadow:0 8px 24px rgba(32,33,36,.08);touch-action:pan-y}
.gallery-art,.gallery-thumb-art{
  display:block;
  background-image:url('{{ "/assets/job-spec-slides/gallery.avif" | relative_url }}');
  background-repeat:no-repeat;
  background-size:100% 2100%;
}
.gallery-art{width:100%;aspect-ratio:16/9;background-position:center 0%}
.gallery-controls{display:flex;align-items:center;justify-content:space-between;gap:12px;margin:12px 0 18px}
.gallery-controls button{border:1px solid #cbd5e1;background:#fff;border-radius:999px;min-height:42px;padding:0 18px;color:#202124;font:inherit;font-weight:700;cursor:pointer}
.gallery-controls button:hover{background:#f5f8fc}
.gallery-counter{font-weight:800;color:#4b5563;white-space:nowrap}
.gallery-thumbs{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px}
.gallery-thumb{min-width:0;border:1px solid #d8dee7;background:#fff;border-radius:10px;padding:5px;cursor:pointer;color:#4b5563}
.gallery-thumb:hover{background:#f7f9fb}
.gallery-thumb[aria-current="true"]{outline:3px solid #1a73e8;outline-offset:1px}
.gallery-thumb-art{width:100%;aspect-ratio:16/9;background-position:center var(--pos)}
.gallery-thumb-label{display:block;margin-top:5px;font-size:.76rem;font-weight:700;text-align:center}
.gallery-help{margin:0 0 14px;color:#5f6368;font-size:.88rem}
@media(max-width:700px){
  .gallery-stage{border-radius:10px}
  .gallery-thumbs{grid-template-columns:repeat(2,minmax(0,1fr))}
  .gallery-controls{gap:8px}
  .gallery-controls button{padding:0 13px}
}
</style>

<section class="job-spec-gallery" aria-label="Job Spec slide gallery">
  <p class="gallery-help">21 slides · use the arrows, thumbnails, keyboard arrows or swipe on mobile.</p>
  <div class="gallery-stage">
    <div class="gallery-art" id="jobSpecSlide" role="img" aria-label="Job Spec slide 1 of 21"></div>
  </div>
  <div class="gallery-controls">
    <button type="button" id="galleryPrev" aria-label="Previous slide">← Previous</button>
    <span class="gallery-counter" id="galleryCounter" aria-live="polite">1 / 21</span>
    <button type="button" id="galleryNext" aria-label="Next slide">Next →</button>
  </div>
  <div class="gallery-thumbs" id="galleryThumbs" aria-label="Slide thumbnails"></div>
</section>

<script>
(() => {
  const total = 21;
  let index = 0;
  const art = document.getElementById('jobSpecSlide');
  const counter = document.getElementById('galleryCounter');
  const thumbs = document.getElementById('galleryThumbs');
  const prev = document.getElementById('galleryPrev');
  const next = document.getElementById('galleryNext');
  if (!art || !counter || !thumbs || !prev || !next) return;

  for (let i = 0; i < total; i++) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'gallery-thumb';
    button.setAttribute('aria-label', `Show slide ${i + 1}`);

    const thumb = document.createElement('span');
    thumb.className = 'gallery-thumb-art';
    thumb.style.setProperty('--pos', `${i * 5}%`);

    const label = document.createElement('span');
    label.className = 'gallery-thumb-label';
    label.textContent = `Slide ${i + 1}`;

    button.append(thumb, label);
    button.addEventListener('click', () => show(i));
    thumbs.appendChild(button);
  }

  const buttons = [...thumbs.querySelectorAll('.gallery-thumb')];

  function show(i) {
    index = (i + total) % total;
    art.style.backgroundPosition = `center ${index * 5}%`;
    art.setAttribute('aria-label', `Job Spec slide ${index + 1} of ${total}`);
    counter.textContent = `${index + 1} / ${total}`;
    buttons.forEach((button, n) => button.setAttribute('aria-current', n === index ? 'true' : 'false'));
  }

  prev.addEventListener('click', () => show(index - 1));
  next.addEventListener('click', () => show(index + 1));

  document.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft') show(index - 1);
    if (event.key === 'ArrowRight') show(index + 1);
  });

  let startX = 0;
  art.addEventListener('touchstart', event => {
    startX = event.changedTouches[0].clientX;
  }, {passive:true});
  art.addEventListener('touchend', event => {
    const dx = event.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 45) show(index + (dx < 0 ? 1 : -1));
  }, {passive:true});

  show(0);
})();
</script>
