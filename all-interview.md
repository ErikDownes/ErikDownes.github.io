---
layout: doc
permalink: /all-interview.html
title: All Questions
handle: All Questions
interview_mode: true
nav_order: 39
---
# Show Me the Order

The questions below follow a typical financial mathematics internship or graduate interview. Interviewers may ask them in a different order. **Every existing question remains in the bank.** Use **Random question** to practise across the complete bank.

{% assign pages = site.pages | where: 'interview_mode', true %}
{% assign sequence = 'Career|Motivation|Technology|Analytics|Teamwork|Communication|Initiative|HSE Finance' | split: '|' %}
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
        {% when 'Analytics' %}
          <h3 class="all-domain-label">Data Analysis &amp; Problem Solving</h3>
        {% when 'Teamwork' %}
          <h3 class="all-domain-label">Competencies — Teamwork</h3>
        {% when 'Communication' %}
          <h3 class="all-domain-label">Competencies — Communication</h3>
        {% when 'Initiative' %}
          <h3 class="all-domain-label">Competencies — Initiative &amp; Adaptability</h3>
        {% when 'HSE Finance' %}
          <h3 class="all-domain-label">Understanding the Job &amp; Contribution</h3>
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

<h3 class="all-domain-label">Closing &amp; Questions for the Interviewer</h3>

End by briefly reinforcing **accuracy, analytical ability, initiative and willingness to learn**. Then ask a genuine question that shows you are thinking about contributing to the team.

**Good closing questions to ask:**

- What would you expect a successful intern to be able to do independently by the end of the placement?
- Which systems and processes would I learn during the first few weeks?
- Where could I make the most useful contribution to the team?
