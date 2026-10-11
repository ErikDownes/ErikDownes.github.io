---
layout: doc
permalink: /story-lab.html
handle: Story Laboratory
title: Story Laboratory
subtitle: One genuine experience. Several competency angles. The facts never change.
nav_order: 5
top_nav: false
interview_hub: true
description: Answer-first interview practice: keep Erik's O'Mahony's dispatch story fixed while changing the competency emphasis.
eyebrow: ANSWERS FIRST · ONE STORY · MULTIPLE ANGLES
---

<style>
  .sl-lab{--sl-ink:#172c40;--sl-muted:#566879;--sl-line:#dbe5ec;--sl-blue:#2261a6;--sl-teal:#0a8276;color:var(--sl-ink);max-width:940px;margin:18px auto 32px}
  .sl-lab *{box-sizing:border-box}
  .sl-lab .sl-rule{font-size:.99rem;line-height:1.65;color:var(--sl-muted);margin:0 0 22px}
  .sl-card{border:1px solid var(--sl-line);border-radius:22px;background:#fff;overflow:hidden;box-shadow:0 15px 45px rgba(24,60,91,.075)}
  .sl-card-head{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:17px 24px;background:#f1f8fb;border-bottom:1px solid var(--sl-line)}
  .sl-card-head strong{font-weight:800;font-size:1rem}
  .sl-fixed{font-size:.74rem;letter-spacing:.07em;font-weight:800;color:#087264;background:#d9f2eb;padding:7px 10px;border-radius:999px;white-space:nowrap}
  .sl-story{padding:24px 26px 20px}
  .sl-story h2{font-size:clamp(1.3rem,3vw,1.65rem)!important;line-height:1.25;margin:0 0 8px!important;color:var(--sl-ink)}
  .sl-story p{font-size:1.05rem;line-height:1.8;color:#2b4255;margin:0 0 18px}
  .sl-story .sl-source{font-size:.81rem;color:var(--sl-muted);margin:12px 0 0}
  .sl-cues{display:flex;justify-content:space-around;gap:8px;flex-wrap:wrap;border-top:1px dashed #c7d7e1;padding-top:16px;color:#26737e;font-weight:750;font-size:.85rem}
  .sl-cues span{white-space:nowrap}
  .sl-controls{padding:22px 26px 26px;background:#fbfdfe;border-top:1px solid var(--sl-line)}
  .sl-controls fieldset{padding:0;margin:0 0 20px;border:0;min-width:0}
  .sl-controls legend{font-weight:800;font-size:1.02rem;margin:0 0 14px}
  .sl-angles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}
  .sl-angle{display:flex;gap:10px;align-items:center;cursor:pointer;background:#fff;border:1.5px solid #d7e3eb;border-radius:13px;padding:14px 15px;min-height:52px;color:#22384e;font-weight:700;transition:background .15s,border-color .15s,box-shadow .15s}
  .sl-angle:has(input:checked){border-color:var(--sl-blue);background:#edf5ff;box-shadow:0 0 0 1px rgba(34,97,166,.12)}
  .sl-angle:has(input:focus-visible){outline:3px solid #f5b939;outline-offset:2px}
  .sl-angle input{appearance:auto;accent-color:var(--sl-blue);inline-size:19px;block-size:19px;flex:none;margin:0;cursor:pointer}
  .sl-output{border-left:4px solid var(--sl-teal);border-radius:0 14px 14px 0;padding:18px 20px;background:#eaf7f3;min-height:132px}
  .sl-output .sl-small{font-size:.72rem;text-transform:uppercase;letter-spacing:.09em;color:#386e69;font-weight:850;margin:0 0 9px}
  .sl-output #sl-emphasis{font-size:1.05rem;line-height:1.65;font-weight:700;margin:0 0 11px;color:#193d3a}
  .sl-output #sl-close{font-size:.93rem;line-height:1.6;margin:0;color:#375e5c}
  .sl-note{margin:17px 0 0!important;font-size:.87rem!important;color:var(--sl-muted);line-height:1.55}
  .sl-questions{margin-top:18px;border:1px solid var(--sl-line);border-radius:14px;background:#fff;overflow:hidden}
  .sl-questions summary{cursor:pointer;padding:14px 17px;font-weight:750;color:var(--sl-blue)}
  .sl-questions ul{margin:0;padding:0 22px 16px 40px;line-height:1.7;color:var(--sl-ink)}
  @media(max-width:640px){.sl-story,.sl-controls{padding:18px}.sl-card-head{padding:14px 17px}.sl-angles{grid-template-columns:1fr}.sl-story p{font-size:1rem}.sl-cues{justify-content:space-between}.sl-fixed{font-size:.66rem}}
  @media(prefers-reduced-motion:reduce){.sl-angle{transition:none}}
</style>

<div class="sl-lab" id="story-laboratory">
  <p class="sl-rule"><strong>The answer comes first.</strong> Read the experience once. Select a competency to see how the <em>emphasis</em> changes, without inventing a different story or learning four scripts.</p>
  <section class="sl-card" aria-label="One story, four competency angles">
    <div class="sl-card-head"><strong>One experience · Four competency angles</strong><span class="sl-fixed">STORY STAYS FIXED</span></div>
    <div class="sl-story">
      <h2>The O’Mahony’s Book Dispatch Incident</h2>
      <p id="sl-story-text">At O’Mahony’s, a parcel went to the wrong library. That created two problems: an unexpected delivery for one library and a delay for the intended library. I suggested to my manager that, rather than pay to return the books, we let the first library keep them; she agreed. I contacted the intended library, explained the one-day delay and checked that it was acceptable. The solution avoided unnecessary return costs while keeping the response practical and professional.</p>
      <div class="sl-cues" aria-label="Memory cues"><span>Problem</span><span>Two libraries</span><span>Options</span><span>Manager</span><span>One-day delay</span></div>
      <p class="sl-source">The facts are taken from Erik’s existing competency interview notes. Approval was his manager’s decision.</p>
    </div>
    <div class="sl-controls">
      <fieldset>
        <legend>What competency should this same story demonstrate?</legend>
        <div class="sl-angles">
          <label class="sl-angle"><input type="radio" name="sl-angle" value="problem" checked>Problem-solving</label>
          <label class="sl-angle"><input type="radio" name="sl-angle" value="communication">Communication</label>
          <label class="sl-angle"><input type="radio" name="sl-angle" value="care">Client care</label>
          <label class="sl-angle"><input type="radio" name="sl-angle" value="initiative">Initiative</label>
        </div>
      </fieldset>
      <div class="sl-output" role="status" aria-live="polite" aria-atomic="true">
        <p class="sl-small">Emphasis in the answer</p>
        <p id="sl-emphasis">I worked through the practical consequences: the return cost, the delay, and a simpler option that could resolve both issues.</p>
        <p id="sl-close"><strong>Closing line:</strong> I learned to look for a proportionate solution rather than automatically following the most cumbersome process.</p>
      </div>
      <p class="sl-note">Only the competency emphasis changes. The events, Erik’s contribution, the manager’s approval and the outcome remain identical.</p>
      <details class="sl-questions">
        <summary>Reveal possible interviewer questions for this angle</summary>
        <ul id="sl-questions-list">
          <li>Tell me about a time you solved an unexpected problem.</li>
          <li>How did you weigh different solutions?</li>
        </ul>
      </details>
    </div>
  </section>
</div>

<script>
(function(){
  "use strict";
  var root=document.getElementById("story-laboratory");
  if(!root)return;
  var variations={
    problem:{
      emphasis:"I worked through the practical consequences: the return cost, the delay, and a simpler option that could resolve both issues.",
      closing:"I learned to look for a proportionate solution rather than automatically following the most cumbersome process.",
      questions:["Tell me about a time you solved an unexpected problem.","How did you weigh different solutions?"]
    },
    communication:{
      emphasis:"I recognised that the error affected two different customers. I clearly explained the delay to the intended library and checked that the revised delivery was acceptable.",
      closing:"Clear, timely communication helped prevent a small mistake becoming a bigger customer-service problem.",
      questions:["Tell me about a time you communicated difficult information.","How do you keep people informed when something goes wrong?"]
    },
    care:{
      emphasis:"I considered the experience of both libraries, not just the cost of the error. The agreed solution avoided unnecessary handling, created goodwill and kept the intended customer informed.",
      closing:"Client care means considering how a practical decision affects the people who depend on the service.",
      questions:["Describe a time you provided good customer service.","How would you balance client expectations with business costs?"]
    },
    initiative:{
      emphasis:"Rather than just reporting the dispatch error, I suggested a workable alternative to my manager. I recognised that approving free stock was her decision, and I raised the option for her to consider.",
      closing:"Initiative means taking ownership of a problem while recognising when authority rests with someone else.",
      questions:["Tell me about a time you showed initiative.","When have you suggested a better way of resolving a problem?"]
    }
  };
  var emphasis=root.querySelector("#sl-emphasis");
  var closing=root.querySelector("#sl-close");
  var list=root.querySelector("#sl-questions-list");
  root.querySelectorAll('input[name="sl-angle"]').forEach(function(input){
    input.addEventListener("change",function(){
      if(!input.checked)return;
      var item=variations[input.value];
      if(!item)return;
      emphasis.textContent=item.emphasis;
      closing.textContent="";
      var label=document.createElement("strong");
      label.textContent="Closing line: ";
      closing.append(label,document.createTextNode(item.closing));
      list.replaceChildren();
      item.questions.forEach(function(question){
        var li=document.createElement("li");
        li.textContent=question;
        list.append(li);
      });
    });
  });
})();
</script>


<style>
.sl-practice{margin:24px 0;border:1px solid #dbe5ec;border-radius:18px;padding:22px;background:#fff}
.sl-practice h2{margin:0 0 12px!important;font-size:1.45rem!important}
.sl-practice .sl-four p{margin:0 0 12px;line-height:1.65}
.sl-practice .sl-switch{display:flex;gap:7px;margin:18px 0 12px;flex-wrap:wrap}
.sl-practice .sl-switch button{border:1px solid #b8cad7;border-radius:9px;background:#fff;color:#23445e;padding:8px 17px;font:inherit;cursor:pointer}
.sl-practice .sl-switch button[aria-pressed="true"]{background:#2261a6;color:#fff;border-color:#2261a6}
.sl-practice .sl-memory-table{width:100%;border-collapse:collapse;font-size:.9rem}
.sl-practice .sl-memory-table th,.sl-practice .sl-memory-table td{border:1px solid #d1dee7;text-align:left;padding:9px 10px;vertical-align:top}
.sl-practice .sl-memory-table th{background:#f1f7fb}
.sl-practice .sl-cue-line{border:1px solid #d1dee7;border-radius:8px;padding:12px;line-height:1.7}
.sl-practice .sl-competencies{font-size:.9rem;color:#385569;margin-top:12px}
@media(max-width:600px){.sl-practice{padding:15px}.sl-practice .sl-memory-table{font-size:.8rem}.sl-practice .sl-memory-table th,.sl-practice .sl-memory-table td{padding:6px}}
</style>
<section class="sl-practice" id="sl-onboarding" aria-labelledby="sl-onboarding-heading">
<h2 id="sl-onboarding-heading">Onboarding, Training and Supporting a Colleague</h2>
<div class="sl-four">
<p>The situation was that I was training a new colleague in dispatch procedures using the buddy system.</p>
<p>My task was to train my colleague, monitor their progress, provide feedback and assess when they were ready to work independently.</p>
<p>I showed my colleague how to process orders, explaining why each step mattered and what could go wrong in real situations. We then switched roles so they could practise while I observed, asked questions and gave feedback. Once I was happy they could work independently, I signed them off and informed my manager.</p>
<p>The result was that my colleague became more confident and could process routine orders accurately with less supervision.</p>
</div>
<div class="sl-switch" role="group" aria-label="Choose memory prompts">
<button type="button" data-format="table" aria-pressed="true">Table</button>
<button type="button" data-format="cue" aria-pressed="false">Cue</button>
</div>
<div class="sl-memory-table-wrap" data-panel="table">
<table class="sl-memory-table">
<thead><tr><th scope="col">Situation</th><th scope="col">Task</th><th scope="col">Action</th><th scope="col">Result</th></tr></thead>
<tbody><tr><td>New colleague<br>Buddy system</td><td>Train<br>Assess readiness</td><td>Show<br>Explain why<br>Real problems<br>Switch roles<br>Question<br>Sign off</td><td>Confident<br>Accurate<br>Independent</td></tr></tbody>
</table>
</div>
<div class="sl-cue-line" data-panel="cue" hidden>| New colleague · Buddy system | Train · Assess readiness | Show · Explain why · Real problems · Switch roles · Question · Sign off | Confident · Accurate · Independent |</div>
<p class="sl-competencies">Training and supporting colleagues · Communication · Coaching and feedback · Assessing progress · Empowering others</p>
</section>
<script>
(function(){
var root=document.getElementById('sl-onboarding');if(!root)return;
var buttons=root.querySelectorAll('[data-format]');
buttons.forEach(function(btn){btn.addEventListener('click',function(){
var chosen=btn.getAttribute('data-format');
buttons.forEach(function(b){b.setAttribute('aria-pressed',String(b===btn))});
root.querySelectorAll('[data-panel]').forEach(function(panel){panel.hidden=panel.getAttribute('data-panel')!==chosen});
});});
})();
</script>
