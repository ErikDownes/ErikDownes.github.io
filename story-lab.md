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



<style>
.sl-bank{max-width:940px;margin:28px auto 48px;color:#172c40}
.sl-bank h2{font-size:1.65rem!important;margin:0 0 10px!important}
.sl-bank-card{background:#fff;border:1px solid #dbe5ec;border-radius:18px;padding:22px;box-shadow:0 10px 30px rgba(24,60,91,.055)}
.sl-bank-controls{display:flex;gap:10px;flex-wrap:wrap;align-items:center;margin:14px 0}
.sl-bank select,.sl-bank button{font:inherit;border:1px solid #bdcdd8;border-radius:10px;padding:10px 12px;background:white;color:#23445e}
.sl-bank select{width:100%;font-weight:700}
.sl-bank button{cursor:pointer}
.sl-bank button[aria-pressed="true"]{background:#2261a6;color:white;border-color:#2261a6}
.sl-bank button:disabled{opacity:.45;cursor:not-allowed}
.sl-bank p{font-size:1.03rem;line-height:1.7}
.sl-bank table{width:100%;border-collapse:collapse;font-size:1rem}
.sl-bank th,.sl-bank td{border:1px solid #bdcbd5;padding:10px;text-align:left;vertical-align:top}
.sl-bank th{background:#364657;color:#fff}
.sl-bank tbody tr:nth-child(even){background:#f1f5f8}
.sl-bank .sl-bank-status{font-size:.88rem;color:#566879}
.sl-bank audio{display:block;width:100%;margin:12px 0}
@media(max-width:600px){.sl-bank-card{padding:13px}.sl-bank th,.sl-bank td{padding:6px;font-size:.81rem}}
@media print{.sl-bank-controls,.sl-bank audio,.sl-bank-status{display:none!important}.sl-bank-card{box-shadow:none}}
</style>
<section class="sl-bank" id="sl-bank">
  <h2>STAR Stories — Practice and Record</h2>
  <p>Select a story, switch between the spoken answer and the four-column recall table, and record as many attempts as you need. Recordings stay on your device unless you download them.</p>
  <div class="sl-bank-card">
    <label for="sl-bank-select"><strong>Story name</strong></label>
    <select id="sl-bank-select" aria-label="Select a STAR story"></select>
    <div class="sl-bank-controls" role="group" aria-label="Choose the story view">
      <button type="button" id="sl-bank-answer" aria-pressed="true">Story</button>
      <button type="button" id="sl-bank-cues" aria-pressed="false">STAR Table</button>
    </div>
    <div id="sl-bank-content" aria-live="polite"></div>
    <div class="sl-bank-controls" role="group" aria-label="Recording controls">
      <button type="button" id="sl-bank-record">Start recording</button>
      <button type="button" id="sl-bank-stop" disabled>Stop</button>
      <button type="button" id="sl-bank-download" disabled>Download recording</button>
    </div>
    <p class="sl-bank-status" id="sl-bank-status" aria-live="polite">Ready to practise. Allow microphone access when prompted.</p>
    <audio id="sl-bank-audio" controls hidden></audio>
  </div>
</section>
<script>
(function(){
"use strict";
const stories=[{"name":"Problem Solving – Rerouting","paragraphs":["The situation was that a new recruit, still learning the dispatch procedures, addressed two boxes of books to the same library, one correctly and one  in error. I had to  mitigate the error and onboard and train my colleague.","My task was to coordinate the rerouting, communicate  and train and support my colleague. ","I took action that same day by sending a prepaid forwarding label to the receiving library. I rang  next morning to explain how to relabel and hand right back the  postman. I also showed my colleague how to cross-check delivery addresses before dispatch.","The result was that costs, delays and client inconvenience were minimised. We maintained professional client care, and my colleague learned a useful check to prevent the same mistake recurring."],"cues":[["Error","Reroute","Forward label","Less delay"],["New recruit","Coordinate","Phone call","Client care"],["Two libraries","Support","Cross-check","Prevent repeat"]]},{"name":"Accountability – Correcting My Mistake","paragraphs":[],"cues":[["Wrong parcel","Own mistake","Tell manager","Customer trust"],["First week","Correct order","Prepaid return","Prompt response"],["Cross-check","Explain to customer","Contact customer","Learned check"],["","Communicate ","",""]]},{"name":"Planning, organising, pressure with Increased Workload","paragraphs":["The situation was that O'Mahony's expanded its library supply contract from fiction into non-fiction, creating a significant increase in orders and pressure on dispatch.","My task was to help manage the workload, meet courier deadlines and maintain accuracy.","I took action by discussing and agreeing priorities with colleagues, focusing on time-sensitive orders and applying maximum effort before courier deadlines. I continued cross-checking books and delivery details to prevent errors.","The result was that we maintained accurate, reliable deliveries despite the increased workload. Good teamwork, clear communication and effective prioritisation helped us maintain a high standard of client service."],"cues":[["More orders","Manage load","Agree priorities","Reliable delivery"],["New contract","Courier cut-off","Time-sensitive","Teamwork"],["Pressure","Accuracy","Cross-check","Client service"]]},{"name":"Onboarding training and Supporting a Colleague","paragraphs":["The situation was that I was training a new colleague in dispatch procedures using the buddy system. ","My task was to train my colleague, monitor their progress, provide feedback and assess when they were ready to work independently. ","I showed my colleague how to process orders, explaining why each step mattered and what could go wrong. We then switched roles so they could practise while I observed, asked questions and gave feedback. Once I was happy they could work independently, I signed them off and informed my manager. ","The result was that my colleague became more confident and could process routine orders accurately with less supervision."],"cues":[["New colleague","Train","Show why","Confidence"],["Buddy system","Assess progress","Switch roles","Accuracy"],["Dispatch","Independence","Question; sign off","Less supervision"]]},{"name":"Analytical Thinking – Stock Discrepancy","paragraphs":["The situation was that I identified a discrepancy between the physical stock count and the inventory balance recorded in our dispatch system.","My task was to reconcile the stock records, identify the cause and maintain accurate inventory information.","I took action by checking the physical stock against delivery and dispatch records, reconciling the difference and asking a colleague to independently verify the figures. I also suggested an additional check to prevent recurrence.","The result was that we corrected the inventory records and identified a way to strengthen the stock-control process."],"cues":[["Stock mismatch","Reconcile","Check records","Correct figures"],["Physical count","Identify cause","Verify independently","Stock control"],["Inventory","Accuracy","Suggest check","Prevention"]]},{"name":"Customer Care – Urgent Order","paragraphs":["The situation was that a customer requested an urgent order shortly before the courier cut-off.","My task was to respond to the customer's needs, manage expectations and maintain reliable service under time pressure.","I took action by checking stock availability and the courier cut-off, agreeing priorities with my manager, then contacting the customer to explain what we could realistically deliver and when.","The result was that the customer received a prompt, honest response and knew what to expect, helping maintain trust in our service."],"cues":[["Urgent order","Customer needs","Check stock","Prompt answer"],["Courier cut-off","Manage expectations","Agree priorities","Clarity"],["Time pressure","Reliable service","Contact customer","Trust"]]},{"name":"Conflict Communication and Commercial Awareness","paragraphs":["The situation was that a colleague and I disagreed about which library order to prioritise. He favoured processing orders in arrival order, but one order was incomplete because a book was out of stock, and that customer also had an overdue account. A new library was waiting for its first delivery.","My task was to work with my colleague, discuss our different views respectfully and agree priorities that made sense for the customers and the business.","I took action by applying active listening as my colleague explained why we should process orders in sequence. I explained why the new library should come first, given the other order had missing stock and an overdue account. I gave him time to consider the reasons, and we agreed on the priority together.","The result was that we reached an agreement, maintained a positive, professional working relationship and prioritised an order we could complete, while supporting a positive relationship with the new library."],"cues":[["Different views","Agree priority","Active listening","Agreement"],["Missing stock","Customer focus","Explain reasons","Good relationship"],["New library","Business needs","Discuss; decide","Teamwork"]]},{"name":"Initiative – Customer Records","paragraphs":["The situation was that I noticed an incorrect Eircode on a Booksolve report, apparently linked to another library. ","My task was to verify the delivery address and protect the accuracy of our customer records.","I took action by flagging the discrepancy to my manager and checking the Eircode against the correct library details before requesting a record correction.","The result was that the address discrepancy was identified before it could cause a delivery error. "],"cues":[["Wrong Eircode","Verify address","Flag to manager","Error avoided"],["Library details","Data accuracy","Check Eircode","Prevention"],["Record mismatch","Customer care","Request correction",""]]},{"name":"Learning Booksolve – A New Software System","paragraphs":["The situation was that one of my first onboarding tasks at O'Mahony's was to learn Booksolve, our order-processing software.","My task was to learn the software quickly, understand our dispatch procedures and become confident working independently.","We used the buddy system. I started by shadowing an experienced colleague, observing and asking questions. But I wanted hands-on experience, so we switched roles. I worked on live customer orders while my colleague guided me, gave feedback and showed me quicker ways of doing things. Because these were real orders, accuracy mattered, so I paid close attention. I also started to understand how customer, order and stock records were linked.","The result was that I was up and running within a few days and could process orders accurately and independently."],"cues":[["Extra staff","Support team","Brainstorm","Team effort"],["Sunday night","Customers","Listen; agree","Less disruption"],["Monday morning","Adapt","Change priorities","Reorganisation"]]},{"name":"Shop-floor Reorganisation","paragraphs":["The situation was that Mr Price was carrying out a major shop-floor reorganisation. Extra staff worked on Sunday night after closing and on Monday morning before opening to minimise disruption to customers.","My task was to support the team, work outside normal rostered hours and help complete the reorganisation while keeping disruption to customers to a minimum.","I took action by contributing ideas during team brainstorming, listening to colleagues and helping agree a shared approach. This gave everyone a voice and a sense of ownership. I then worked alongside the team and adapted as priorities changed.","The result was that I contributed to the team's exceptional reorganisation effort, planned around normal trading hours."],"cues":[["Price query","Resolve fairly","Listen","Trust"],["Till; shelf label","Customer care","Check price","Clear response"],["Customer concern","Accuracy","Explain options","Process check"]]},{"name":"Customer Experience Management","paragraphs":["The situation was that a customer queried the price of an item at Mr Price.","My task was to resolve the price query fairly, manage the customer's experience and maintain trust in our service.","I took action by listening without interrupting, repeating the customer's concern to confirm I understood, and reassuring them that I wanted to help. I checked the shelf label against the till price, explained the options clearly and flagged any incorrect label.","The result was that I considered whether the pricing or labelling process needed an extra check to prevent further confusion."],"cues":[["Verify","Reconcile","Prioritise","Coordinate"],["Resolve","Identify","Explain","Communicate"],["Improve","Reflect","Demonstrate","Validate"],["","","",""],["","","",""]]}];
const root=document.getElementById("sl-bank");
if(!root)return;
const pick=root.querySelector("#sl-bank-select"),body=root.querySelector("#sl-bank-content"),
storyBtn=root.querySelector("#sl-bank-answer"),tableBtn=root.querySelector("#sl-bank-cues"),
start=root.querySelector("#sl-bank-record"),stop=root.querySelector("#sl-bank-stop"),
download=root.querySelector("#sl-bank-download"),audio=root.querySelector("#sl-bank-audio"),status=root.querySelector("#sl-bank-status");
let mode="story",recorder=null,chunks=[],url=null,blob=null,stream=null;
stories.forEach((s,i)=>{const o=document.createElement("option");o.value=i;o.textContent=s.name;pick.append(o)});
function render(){
const s=stories[Number(pick.value)||0];body.replaceChildren();
if(mode==="story"){s.paragraphs.forEach(t=>{const p=document.createElement("p");p.textContent=t;body.append(p)})}
else{const t=document.createElement("table"),thead=document.createElement("thead"),tr=document.createElement("tr");
["Situation","Task","Action","Result"].forEach(h=>{const th=document.createElement("th");th.textContent=h;tr.append(th)});thead.append(tr);t.append(thead);
const tb=document.createElement("tbody");s.cues.forEach(row=>{const r=document.createElement("tr");row.forEach(cell=>{const td=document.createElement("td");td.textContent=cell;r.append(td)});tb.append(r)});t.append(tb);body.append(t)}
storyBtn.setAttribute("aria-pressed",String(mode==="story"));tableBtn.setAttribute("aria-pressed",String(mode==="table"));
}
storyBtn.addEventListener("click",()=>{mode="story";render()});tableBtn.addEventListener("click",()=>{mode="table";render()});pick.addEventListener("change",render);
start.addEventListener("click",async()=>{
 if(!navigator.mediaDevices?.getUserMedia||!window.MediaRecorder){status.textContent="Microphone recording is not supported in this browser.";return}
 try{
 stream=await navigator.mediaDevices.getUserMedia({audio:true});
 const preferred=["audio/webm;codecs=opus","audio/webm","audio/mp4"].find(t=>MediaRecorder.isTypeSupported(t));
 recorder=new MediaRecorder(stream,preferred?{mimeType:preferred}:undefined);chunks=[];
 recorder.ondataavailable=e=>{if(e.data.size)chunks.push(e.data)};
 recorder.onstop=()=>{
 blob=new Blob(chunks,{type:recorder.mimeType||"audio/webm"});if(url)URL.revokeObjectURL(url);url=URL.createObjectURL(blob);audio.src=url;audio.hidden=false;download.disabled=false;
 stream?.getTracks().forEach(t=>t.stop());stream=null;status.textContent="Recording ready. Play it back or download it. You can record another attempt.";
 };
 recorder.start();start.disabled=true;stop.disabled=false;download.disabled=true;status.textContent="Recording…";
 }catch(err){status.textContent="Could not start the microphone. Check browser permissions.";stream?.getTracks().forEach(t=>t.stop());stream=null}
});
stop.addEventListener("click",()=>{if(recorder?.state==="recording")recorder.stop();stop.disabled=true;start.disabled=false});
download.addEventListener("click",()=>{
if(!blob||!url)return;const a=document.createElement("a"),name=stories[Number(pick.value)||0].name.replace(/[^a-z0-9]+/gi,"-").replace(/^-|-$/g,"");
a.href=url;a.download=name+"-practice."+(blob.type.includes("mp4")?"m4a":"webm");document.body.append(a);a.click();a.remove();
});
render();
})();
</script>