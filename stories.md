---
layout: doc
permalink: /stories.html
handle: Stories
title: Stories
subtitle: Interview practice — eleven genuine workplace stories.
nav_order: 2
top_nav: true
interview_hub: true
description: Erik's workplace STAR interview stories, recall tables and repeatable speaking practice.
eyebrow: INTERVIEW STORIES · PRACTISE · RECORD
---

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
const stories=[{"name":"Problem Solving – Rerouting","paragraphs":["The situation was that a new recruit, still learning the dispatch procedures, addressed two boxes of books to the same library, one correctly and one  in error. I had to  mitigate the error and onboard and train my colleague.","My task was to coordinate the rerouting, communicate  and train and support my colleague. ","I took action that same day by sending a prepaid forwarding label to the receiving library. I rang  next morning to explain how to relabel and hand right back the  postman. I also showed my colleague how to cross-check delivery addresses before dispatch.","The result was that costs, delays and client inconvenience were minimised. We maintained professional client care, and my colleague learned a useful check to prevent the same mistake recurring."],"cues":[["Error","Reroute","Forward label","Less delay"],["New recruit","Coordinate","Phone call","Client care"],["Two libraries","Support","Cross-check","Prevent repeat"]]},{"name":"Accountability – Correcting My Mistake","paragraphs":["The situation was that during my first week, a cross-check revealed I had mixed up two orders, and one incorrect parcel had already been dispatched.","My task was to take responsibility, correct the error promptly and maintain the customer's trust.","I took action by informing my manager and arranging same-day dispatch of the correct books. Following his advice, I contacted the customer, explained what happened so no confusion would occur and talked them through our returns procedure using a prepaid return label.","The result was that my line manager, colleagues and  the customer appreciated my honesty and prompt response. I maintained their trust and learned the importance of cross-checking orders before dispatch."],"cues":[["Wrong parcel","Own mistake","Tell manager","Customer trust"],["First week","Correct order","Prepaid return","Prompt response"],["Cross-check","Explain to customer","Contact customer","Learned check"],["","Communicate ","",""]]},{"name":"Planning, organising, pressure with Increased Workload","paragraphs":["The situation was that O'Mahony's expanded its library supply contract from fiction into non-fiction, creating a significant increase in orders and pressure on dispatch.","My task was to help manage the workload, meet courier deadlines and maintain accuracy.","I took action by discussing and agreeing priorities with colleagues, focusing on time-sensitive orders and applying maximum effort before courier deadlines. I continued cross-checking books and delivery details to prevent errors.","The result was that we maintained accurate, reliable deliveries despite the increased workload. Good teamwork, clear communication and effective prioritisation helped us maintain a high standard of client service."],"cues":[["More orders","Manage load","Agree priorities","Reliable delivery"],["New contract","Courier cut-off","Time-sensitive","Teamwork"],["Pressure","Accuracy","Cross-check","Client service"]]},{"name":"Onboarding training and Supporting a Colleague","paragraphs":["The situation was that I was training a new colleague in dispatch procedures using the buddy system. ","My task was to train my colleague, monitor their progress, provide feedback and assess when they were ready to work independently. ","I showed my colleague how to process orders, explaining why each step mattered and what could go wrong. We then switched roles so they could practise while I observed, asked questions and gave feedback. Once I was happy they could work independently, I signed them off and informed my manager. ","The result was that my colleague became more confident and could process routine orders accurately with less supervision."],"cues":[["New colleague","Train","Show why","Confidence"],["Buddy system","Assess progress","Switch roles","Accuracy"],["Dispatch","Independence","Question; sign off","Less supervision"]]},{"name":"Analytical Thinking – Stock Discrepancy","paragraphs":["The situation was that I identified a discrepancy between the physical stock count and the inventory balance recorded in our dispatch system.","My task was to reconcile the stock records, identify the cause and maintain accurate inventory information.","I took action by checking the physical stock against delivery and dispatch records, reconciling the difference and asking a colleague to independently verify the figures. I also suggested an additional check to prevent recurrence.","The result was that we corrected the inventory records and identified a way to strengthen the stock-control process."],"cues":[["Stock mismatch","Reconcile","Check records","Correct figures"],["Physical count","Identify cause","Verify independently","Stock control"],["Inventory","Accuracy","Suggest check","Prevention"]]},{"name":"Customer Care – Urgent Order","paragraphs":["The situation was that a customer requested an urgent order shortly before the courier cut-off.","My task was to respond to the customer's needs, manage expectations and maintain reliable service under time pressure.","I took action by checking stock availability and the courier cut-off, agreeing priorities with my manager, then contacting the customer to explain what we could realistically deliver and when.","The result was that the customer received a prompt, honest response and knew what to expect, helping maintain trust in our service."],"cues":[["Urgent order","Customer needs","Check stock","Prompt answer"],["Courier cut-off","Manage expectations","Agree priorities","Clarity"],["Time pressure","Reliable service","Contact customer","Trust"]]},{"name":"Conflict Communication and Commercial Awareness","paragraphs":["The situation was that a colleague and I disagreed about which library order to prioritise. He favoured processing orders in arrival order, but one order was incomplete because a book was out of stock, and that customer also had an overdue account. A new library was waiting for its first delivery.","My task was to work with my colleague, discuss our different views respectfully and agree priorities that made sense for the customers and the business.","I took action by applying active listening as my colleague explained why we should process orders in sequence. I explained why the new library should come first, given the other order had missing stock and an overdue account. I gave him time to consider the reasons, and we agreed on the priority together.","The result was that we reached an agreement, maintained a positive, professional working relationship and prioritised an order we could complete, while supporting a positive relationship with the new library."],"cues":[["Different views","Agree priority","Active listening","Agreement"],["Missing stock","Customer focus","Explain reasons","Good relationship"],["New library","Business needs","Discuss; decide","Teamwork"]]},{"name":"Initiative – Customer Records","paragraphs":["The situation was that I noticed an incorrect Eircode on a Booksolve report, apparently linked to another library. ","My task was to verify the delivery address and protect the accuracy of our customer records.","I took action by flagging the discrepancy to my manager and checking the Eircode against the correct library details before requesting a record correction.","The result was that the address discrepancy was identified before it could cause a delivery error. "],"cues":[["Wrong Eircode","Verify address","Flag to manager","Error avoided"],["Library details","Data accuracy","Check Eircode","Prevention"],["Record mismatch","Customer care","Request correction",""]]},{"name":"Learning Booksolve – A New Software System","paragraphs":["The situation was that one of my first onboarding tasks at O'Mahony's was to learn Booksolve, our order-processing software.","My task was to learn the software quickly, understand our dispatch procedures and become confident working independently.","We used the buddy system. I started by shadowing an experienced colleague, observing and asking questions. But I wanted hands-on experience, so we switched roles. I worked on live customer orders while my colleague guided me, gave feedback and showed me quicker ways of doing things. Because these were real orders, accuracy mattered, so I paid close attention. I also started to understand how customer, order and stock records were linked.","The result was that I was up and running within a few days and could process orders accurately and independently."],"cues":[["Extra staff","Support team","Brainstorm","Team effort"],["Sunday night","Customers","Listen; agree","Less disruption"],["Monday morning","Adapt","Change priorities","Reorganisation"]]},{"name":"Shop-floor Reorganisation","paragraphs":["The situation was that Mr Price was carrying out a major shop-floor reorganisation. Extra staff worked on Sunday night after closing and on Monday morning before opening to minimise disruption to customers.","My task was to support the team, work outside normal rostered hours and help complete the reorganisation while keeping disruption to customers to a minimum.","I took action by contributing ideas during team brainstorming, listening to colleagues and helping agree a shared approach. This gave everyone a voice and a sense of ownership. I then worked alongside the team and adapted as priorities changed.","The result was that I contributed to the team's exceptional reorganisation effort, planned around normal trading hours."],"cues":[["Price query","Resolve fairly","Listen","Trust"],["Till; shelf label","Customer care","Check price","Clear response"],["Customer concern","Accuracy","Explain options","Process check"]]},{"name":"Customer Experience Management","paragraphs":["The situation was that a customer queried the price of an item at Mr Price.","My task was to resolve the price query fairly, manage the customer's experience and maintain trust in our service.","I took action by listening without interrupting, repeating the customer's concern to confirm I understood, and reassuring them that I wanted to help. I checked the shelf label against the till price, explained the options clearly and flagged any incorrect label.","The result was that I considered whether the pricing or labelling process needed an extra check to prevent further confusion."],"cues":[["Verify","Reconcile","Prioritise","Coordinate"],["Resolve","Identify","Explain","Communicate"],["Improve","Reflect","Demonstrate","Validate"],["","","",""],["","","",""]]}];
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