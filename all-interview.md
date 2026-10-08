---
layout: doc
permalink: /all-interview.html
title: All Questions
handle: All Questions
interview_mode: true
nav_order: 39
---
# Show Me the Order

Prepare in the natural interview sequence below. Interviewers can vary the order. **All existing questions and answers are retained.**

**STAR cue:** “Tell me about a time…”, “Give an example…” and “Have you ever…?” ask for a **real experience**. Questions marked **STAR** are shortened on the cards, but still require a situation, task, action and result. **Tell the story naturally.**

{% assign pages = site.pages | where: 'interview_mode', true %}
{% assign sequence = 'Career|Motivation|Technology|Teamwork|Communication|Initiative|HSE Finance|Analytics' | split: '|' %}
{% for domain in sequence %}
  {% for source in pages %}
    {% if source.url != page.url and source.handle == domain %}
      {% case domain %}
        {% when 'Career' %}
          <h3 class="all-domain-label">Introduction &amp; Icebreakers</h3>
        {% when 'Motivation' %}
          <h3 class="all-domain-label">Motivation &amp; Career Direction</h3>
        {% when 'Technology' %}
          <h3 class="all-domain-label">Education, Knowledge &amp; Technical Skills</h3>
        {% when 'Teamwork' %}
          <h3 class="all-domain-label">Competency &amp; Behavioural Questions — Teamwork</h3>
        {% when 'Communication' %}
          <h3 class="all-domain-label">Competency &amp; Behavioural Questions — Communication</h3>
        {% when 'Initiative' %}
          <h3 class="all-domain-label">Competency &amp; Behavioural Questions — Initiative</h3>
        {% when 'HSE Finance' %}
          <h3 class="all-domain-label">Understanding the Job</h3>
        {% when 'Analytics' %}
          <h3 class="all-domain-label">Strengths, Suitability &amp; Contribution</h3>
      {% endcase %}
      {{ source.content | markdownify }}
    {% endif %}
  {% endfor %}
{% endfor %}
{% for source in pages %}
  {% unless source.url == page.url or sequence contains source.handle %}
    <h3 class="all-domain-label">{{ source.handle | default: source.title }}</h3>
    {{ source.content | markdownify }}
  {% endunless %}
{% endfor %}

<h3 class="all-domain-label" id="interview-closing">Closing &amp; Questions for the Interviewer</h3>

The final impression matters. Recap why you fit the employer's own criteria, **back it with evidence**, and show you are thinking about the work.

**Closing impression — adapt to the organisation:**

> I'm a **highly motivated, flexible and conscientious** Financial Mathematics student. I've shown **initiative** by identifying ways to improve processes at work. I learn new **software and procedures** quickly and take accuracy and responsibility seriously. My work and projects have also helped me develop **interpersonal and communication skills** with colleagues, customers and people with different needs. I'd welcome the opportunity to bring those strengths to the team while continuing to learn.

**Interpersonal** means more than being friendly: communicate appropriately with **internal colleagues, external clients and intermediaries**, when relevant to the role. Use only examples Erik can substantiate, and distinguish HSE patients, staff and suppliers from corporate-services clients.

**Questions to show you are already thinking about the job:**

- What would a successful intern be able to handle independently by the end of the placement?
- What systems or processes would I learn in the first few weeks?
- Where could I make the most useful contribution to the team?
