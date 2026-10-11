---
layout: doc
permalink: /stories.html
handle: Stories
title: Stories
nav_order: 2
top_nav: true
interview_hub: true
description: Erik's workplace STAR interview stories, recall tables and repeatable speaking practice.
eyebrow: INTERVIEW STORIES · PRACTISE · RECORD
---

<style>
.sl-bank{max-width:940px;margin:20px auto 40px;color:#172c40}
.sl-bank-card{background:#fff;border:1px solid #dbe5ec;border-radius:16px;padding:24px;box-shadow:0 12px 32px rgba(24,60,91,.06)}
.sl-bank h2{font-size:1.55rem!important;margin:0 0 18px!important}
.sl-bank h3{font-size:1.2rem!important;margin:0 0 16px!important}
.sl-bank-controls{display:flex;gap:9px;flex-wrap:wrap;align-items:center;margin:16px 0}
.sl-bank button{font:inherit;cursor:pointer;border:1px solid #c6d5df;border-radius:8px;padding:10px 14px;background:#fff;color:#23445e}
.sl-bank button[aria-pressed=true]{background:#2261a6;color:#fff;border-color:#2261a6}
.sl-bank button:disabled{opacity:.38;cursor:not-allowed}
.sl-bank .story-copy p{font-size:1.04rem;line-height:1.75;margin:0 0 16px}
.sl-bank table{width:100%;border-collapse:collapse;font-size:1rem;margin-top:12px}
.sl-bank th,.sl-bank td{border:1px solid #b9c8d4;padding:9px;text-align:left;vertical-align:top}
.sl-bank th{background:#364657;color:white}
.sl-bank tbody tr:nth-child(even){background:#f1f5f8}
.sl-bank [hidden]{display:none!important}
.sl-bank .record-console{border-top:1px solid #dbe5ec;padding-top:18px;margin-top:24px}
.sl-bank .record-controls{display:flex;align-items:center;gap:12px;flex-wrap:wrap}
.sl-bank .transport{display:inline-flex;align-items:center;justify-content:center;width:48px;height:45px;padding:0;border-radius:9px}
.sl-bank .transport svg{width:23px;height:23px;fill:currentColor}
.sl-bank .record{color:#c32031}
.sl-bank .stop{color:#252b34}
.sl-bank .play{color:#15734b}
.sl-bank .download{width:auto;padding:10px 14px}
.sl-bank .level{width:220px;max-width:100%;height:54px;background:#f7fafc;border:1px solid #dbe5ec;border-radius:16px;display:block;margin:8px 0}.sl-bank .record-controls{gap:8px}.sl-bank .record-console{max-width:500px}.sl-bank .sl-mic-meter{display:flex;align-items:center;width:max-content;max-width:100%;gap:8px;border:1px solid #dbe5ec;border-radius:16px;padding:2px 10px;background:#f7fafc}.sl-bank .sl-mic-meter .level{border:0;background:transparent;width:195px;margin:0}.sl-bank .sl-mic-symbol{font-size:22px}.sl-bank .sl-guidance{font-size:.92rem;line-height:1.55;color:#4e6272;margin:10px 0 22px}.sl-bank .sl-section-heading{font-size:1.03rem;margin:22px 0 12px;color:#203e57}.sl-bank .sl-table-note{font-size:.88rem;color:#536879;margin:0 0 10px}
.sl-bank .status{font-size:.89rem;color:#536879;min-height:1.5em}
.sl-bank .recording-indicator{display:inline-block;width:9px;height:9px;border-radius:50%;background:#b91c1c;margin-right:7px}
.sl-bank audio{width:100%;margin:10px 0}
.interview-domain-sidebar .story-index{display:grid;gap:2px}
.interview-domain-sidebar .story-index a{line-height:1.3;padding:9px 12px;font-size:.88rem}
@media(max-width:650px){.sl-bank-card{padding:15px}.sl-bank table{font-size:.82rem}.sl-bank th,.sl-bank td{padding:6px}}
@media print{.sl-bank-controls,.record-console{display:none!important}.sl-bank-card{box-shadow:none}}
.sl-bank .sl-section-row{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-top:22px}.sl-bank .sl-section-row .sl-section-heading{margin:0 0 12px}.sl-bank .sl-visibility{min-width:62px;padding:7px 12px;border-radius:9px;border:1px solid #b6c8d7;background:#e7f1fd;color:#174a77;font-weight:650;cursor:pointer}.sl-bank .sl-visibility[aria-pressed="false"]{background:#f0f1f2;color:#5a6670}
</style>
<section class="sl-bank" id="sl-bank">
  <div class="sl-bank-card">
    <h3 id="sl-story-title"></h3>
    <div class="sl-section-row"><button type="button" class="sl-visibility" id="sl-show-story" aria-pressed="true" aria-label="Toggle exposition">Exposition: On</button></div>
    <div class="story-copy" id="sl-story-text"></div>
    <div class="sl-section-row"><h4 class="sl-section-heading">STAR Table</h4><button type="button" class="sl-visibility" id="sl-show-table" aria-pressed="true">On</button></div>
    <p class="sl-table-note" id="sl-table-note">Essential wording and evidence to retain when paraphrasing.</p>
    <div id="sl-story-table"></div>
    <div class="record-console">
      <div class="record-controls" aria-label="Audio recorder">
        <button class="transport record" type="button" id="sl-record" title="Record" aria-label="Record"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/></svg></button>
        <button class="transport stop" type="button" id="sl-stop" title="Stop recording" aria-label="Stop recording" disabled><svg viewBox="0 0 24 24"><rect x="5" y="5" width="14" height="14" rx="1"/></svg></button>
        <button class="transport play" type="button" id="sl-play" title="Play recording" aria-label="Play recording" disabled><svg viewBox="0 0 24 24"><path d="M7 4L21 12 7 20Z"/></svg></button>
        <button class="download" type="button" id="sl-download" disabled>Download</button>
      </div>
      <div class="sl-mic-meter"><span class="sl-mic-symbol" aria-hidden="true">🎙</span><canvas class="level" id="sl-level" aria-label="Live microphone audio level"></canvas></div>
      <p class="status" id="sl-status" role="status">Ready. Press the red record circle to begin.</p>
      <audio id="sl-audio" preload="metadata" hidden></audio>
    </div>
  </div>
</section>
<script>
(function(){
"use strict";
const stories=[{"name":"Problem Solving – Rerouting","paragraphs":["The situation was that a new recruit, still learning the dispatch procedures, addressed two boxes of books to the same library, one correctly and one in error. I had to mitigate the error and onboard and train my colleague.","My task was to coordinate the rerouting, communicate with stakeholders and train and support my colleague.","I sent a prepaid forwarding label to the receiving library on day one and phoned them on day two to explain how to relabel the box for onward delivery. I also showed my colleague how to cross-check delivery addresses and proposed that dispatch training be adapted to include supervised dispatch procedures before sign-off.","As a result, costs, delays and client inconvenience were minimised. We maintained professional client care, and my colleague learned a useful check to prevent the same mistake recurring."],"cues":[["Address error","Reroute","Forward label","Less delay"],["New recruit","Coordinate","Phone call","Client care"],["Two libraries","Support","Cross-check","Prevent repeat"]]},{"name":"Accountability – Correcting and Owning My Mistake","paragraphs":["The situation was that during my first week, a cross-check revealed I had mixed up two orders, and one incorrect parcel had already been dispatched.","My task was to take responsibility, correct the error promptly and maintain the customer's trust.","I informed my manager and arranged same-day dispatch of the correct books. Following his advice, I contacted the customer, explained what happened so no confusion would occur and talked them through our returns procedure using a prepaid return label.","As a result, my line manager, colleagues and the customer appreciated my honesty and prompt response. I maintained their trust and learned the importance of cross-checking orders before dispatch."],"cues":[["Wrong parcel","Own mistake","Tell manager","Customer trust"],["First week","Correct order","Prepaid return","Prompt response"],["Cross-check","Explain to customer","Contact customer","Learned check"]]},{"name":"Onboarding Training and Supporting a Colleague","paragraphs":["The situation was that I was training a new colleague in dispatch procedures using the buddy system.","My task was to train my colleague, monitor their progress, provide feedback and assess when they were ready to work independently.","I showed my colleague how to process orders, explaining why each step mattered and what could go wrong. We then switched roles so they could practise while I observed, asked questions and gave feedback. Once I was happy they could work independently, I signed them off and informed my manager.","As a result, my colleague became more confident and could process routine orders accurately with less supervision."],"cues":[["New colleague","Train","Show why","Confidence"],["Buddy system","Assess progress","Switch roles","Accuracy"],["Dispatch","Independence","Question; sign off","Less supervision"]]},{"name":"Analytical Thinking – Stock Discrepancy","paragraphs":["The situation was that I identified a discrepancy between the physical stock count and the inventory balance recorded in our dispatch system.","My task was to reconcile the stock records, identify the cause and maintain accurate inventory information.","I checked the physical stock against delivery and dispatch records, reconciled the difference and asked a colleague to independently verify the figures. I also suggested an additional check to prevent recurrence.","As a result, we corrected the inventory records and identified a way to strengthen the stock-control process."],"cues":[["Stock mismatch","Reconcile","Check records","Correct figures"],["Physical count","Identify cause","Verify independently","Stock control"],["Inventory","Accuracy","Suggest check","Prevention"]]},{"name":"Customer Care – Urgent Order","paragraphs":["The situation was that a customer requested an urgent order shortly before the courier cut-off.","My task was to respond to the customer's needs, manage expectations and maintain reliable service under time pressure.","I checked stock availability and the courier cut-off, agreed priorities with my manager, then contacted the customer to explain what we could realistically deliver and when.","As a result, the customer received a prompt, honest response and knew what to expect, helping maintain trust in our service."],"cues":[["Urgent order","Customer needs","Check stock","Prompt answer"],["Courier cut-off","Manage expectations","Agree priorities","Clarity"],["Time pressure","Reliable service","Contact customer","Trust"]]},{"name":"Conflict Communication and Commercial Awareness","paragraphs":["The situation was that a colleague and I disagreed about which library order to prioritise. He favoured processing orders in arrival order, but one order was incomplete because a book was out of stock, and that customer also had an overdue account. A new library was waiting for its first delivery.","My task was to work with my colleague, discuss our different views respectfully and agree priorities that made sense for the customers and the business.","I listened actively as my colleague explained why we should process orders in sequence. I explained why the new library should come first, given the other order had missing stock and an overdue account. I gave him time to consider the reasons, and we agreed on the priority together.","As a result, we reached an agreement, maintained a positive, professional working relationship and prioritised an order we could complete, while supporting a positive relationship with the new library."],"cues":[["Different views","Agree priority","Active listening","Agreement"],["Missing stock","Customer focus","Explain reasons","Good relationship"],["New library","Business needs","Discuss; decide","Teamwork"]]},{"name":"Initiative – Customer Records","paragraphs":["The situation was that I noticed an incorrect Eircode on a Booksolve report, apparently linked to another library.","My task was to verify the delivery address and protect the accuracy of our customer records.","I flagged the discrepancy to my manager and checked the Eircode against the correct library details before requesting a record correction.","As a result, the address discrepancy was identified before it could cause a delivery error."],"cues":[["Wrong Eircode","Verify address","Flag to manager","Error avoided"],["Library details","Data accuracy","Check Eircode","Prevention"],["Record mismatch","Customer care","Request correction",""]]},{"name":"Learning Booksolve – A New Software System","paragraphs":["The situation was that one of my first onboarding tasks at O'Mahony's was to learn Booksolve, our order-processing software.","My task was to learn the software quickly, understand our dispatch procedures and become confident working independently.","I used the buddy system, starting by shadowing an experienced colleague, observing and asking questions. But I wanted hands-on experience, so we switched roles. I worked on live customer orders while my colleague guided me, gave feedback and showed me quicker ways of doing things. Because these were real orders, accuracy mattered, so I paid close attention. I also started to understand how customer, order and stock records were linked.","As a result, I was up and running within a few days and could process orders accurately and independently."],"cues":[["New system","Learn quickly","Observe","Confidence"],["Dispatch","Accuracy","Switch roles","Independence"],["Unfamiliar","Hands-on","Practise","Buddy system"]]},{"name":"Shop-floor Reorganisation","paragraphs":["The situation was that Mr Price was carrying out a major shop-floor reorganisation. Extra staff worked on Sunday night after closing and on Monday morning before opening to minimise disruption to customers.","My task was to support the team, work outside normal rostered hours and help complete the reorganisation while keeping disruption to customers to a minimum.","I contributed ideas during team brainstorming, listened to colleagues and helped agree a shared approach. This gave everyone a voice and a sense of ownership. I then worked alongside the team and adapted as priorities changed.","As a result, I contributed to the team's exceptional reorganisation effort, planned around normal trading hours."],"cues":[["Extra staff","Support team","Brainstorm","Team effort"],["Sunday night","Customers","Listen; agree","Less disruption"],["Monday morning","Adapt","Change priorities","Reorganisation"]]},{"name":"Customer Experience Management","paragraphs":["The situation was that a customer arrived at the till expecting to pay the shelf price, only to discover that the item scanned at twice that amount.","My task was to resolve the discrepancy fairly, manage the customer's expectations and maintain trust.","I listened actively, acknowledged her concern and confirmed my understanding. I verified the shelf price against the till price and, with my manager's approval, honoured the lower price. I then corrected the shelf label to prevent recurrence.","As a result, the customer was treated fairly and the pricing discrepancy was resolved, preventing further confusion."],"cues":[["Price query","Resolve fairly","Listen","Trust"],["Till; shelf label","Customer care","Check price","Clear response"],["Customer concern","Accuracy","Explain options","Process check"]]}];
const root=document.getElementById("sl-bank");if(!root)return;
const $=id=>document.getElementById(id);
const title=$("sl-story-title"),body=$("sl-story-text"),table=$("sl-story-table");
const sb=$("sl-show-story"),tb=$("sl-show-table"),record=$("sl-record"),stop=$("sl-stop"),play=$("sl-play"),download=$("sl-download");
const status=$("sl-status"),audio=$("sl-audio"),canvas=$("sl-level"),ctx=canvas.getContext("2d");
let selected=0,showStory=true,showTable=true,media=null,stream=null,chunks=[],blob=null,blobUrl=null,recordedStory="",audioContext=null,analyser=null,source=null,animation=0;
const sidebar=document.querySelector(".interview-domain-sidebar nav");
if(sidebar){
 sidebar.replaceChildren();sidebar.classList.add("story-index");
 stories.forEach((s,i)=>{let a=document.createElement("a");a.href="#story-"+(i+1);a.textContent=s.name;a.addEventListener("click",e=>{e.preventDefault();selected=i;render();document.getElementById("sl-bank").scrollIntoView({block:"start"});});sidebar.append(a)});
}
function render(){
 const s=stories[selected];title.textContent=s.name;body.replaceChildren();table.replaceChildren();
 s.paragraphs.forEach(t=>{let p=document.createElement("p");p.textContent=t;body.append(p)});
 const t=document.createElement("table"),head=document.createElement("thead"),tr=document.createElement("tr");
 ["Situation","Task","Action","Result"].forEach(h=>{const th=document.createElement("th");th.textContent=h;tr.append(th)});head.append(tr);t.append(head);
 const tbody=document.createElement("tbody");s.cues.filter(r=>r.some(Boolean)).forEach(row=>{let tr=document.createElement("tr");row.forEach(word=>{let td=document.createElement("td");td.textContent=word;tr.append(td)});tbody.append(tr)});t.append(tbody);table.append(t);

 body.hidden=!showStory;table.hidden=!showTable;$("sl-table-note").hidden=!showTable;
 sb.textContent=showStory?"Exposition: On":"Exposition: Off";tb.textContent=showTable?"On":"Off";
 sb.setAttribute("aria-pressed",String(showStory));tb.setAttribute("aria-pressed",String(showTable));
  sidebar?.querySelectorAll("a").forEach((a,i)=>{a.classList.toggle("is-active",i===selected);if(i===selected)a.setAttribute("aria-current","page");else a.removeAttribute("aria-current")});
}

sb.addEventListener("click",()=>{showStory=!showStory;render()});
tb.addEventListener("click",()=>{showTable=!showTable;render()});
function draw(){
 const ratio=window.devicePixelRatio||1;let w=canvas.clientWidth,h=canvas.clientHeight;
 if(canvas.width!==Math.floor(w*ratio)||canvas.height!==Math.floor(h*ratio)){canvas.width=Math.floor(w*ratio);canvas.height=Math.floor(h*ratio);}
 ctx.setTransform(ratio,0,0,ratio,0,0);ctx.clearRect(0,0,w,h);
 ctx.strokeStyle="#2261a6";ctx.lineWidth=2;ctx.beginPath();
 if(analyser){const values=new Uint8Array(analyser.fftSize);analyser.getByteTimeDomainData(values);for(let x=0;x<w;x++){const n=values[Math.min(values.length-1,Math.floor(x*values.length/w))];const y=h/2+(n-128)/128*h*.42;if(x===0)ctx.moveTo(x,y);else ctx.lineTo(x,y)}}
 else{ctx.moveTo(0,h/2);ctx.lineTo(w,h/2)}
 ctx.stroke();if(media?.state==="recording")animation=requestAnimationFrame(draw);
}
draw();
record.addEventListener("click",async()=>{
 if(media?.state==="recording")return;
 if(!navigator.mediaDevices?.getUserMedia||!window.MediaRecorder){status.textContent="This browser does not support microphone recording.";return}
 try{
 stream=await navigator.mediaDevices.getUserMedia({audio:true});
 const mime=["audio/webm;codecs=opus","audio/webm","audio/mp4"].find(x=>MediaRecorder.isTypeSupported(x));
 media=new MediaRecorder(stream,mime?{mimeType:mime}:undefined);chunks=[];
 audioContext=new (window.AudioContext||window.webkitAudioContext)();
 analyser=audioContext.createAnalyser();analyser.fftSize=2048;source=audioContext.createMediaStreamSource(stream);source.connect(analyser);
 media.ondataavailable=e=>{if(e.data.size)chunks.push(e.data)};
 media.onstop=async()=>{
  blob=new Blob(chunks,{type:media.mimeType||"audio/webm"});if(blobUrl)URL.revokeObjectURL(blobUrl);
  blobUrl=URL.createObjectURL(blob);audio.src=blobUrl;play.disabled=false;download.disabled=false;
  stream?.getTracks().forEach(t=>t.stop());stream=null;source?.disconnect();source=null;await audioContext?.close();audioContext=null;analyser=null;draw();
  status.textContent="Recording finished. Press Play to listen, or Download to save it.";
 };
 recordedStory=stories[selected].name;media.start();record.disabled=true;stop.disabled=false;play.disabled=true;download.disabled=true;
 status.textContent="Recording… Stop when finished.";draw();
 }catch(e){status.textContent="Microphone unavailable. Check browser permissions.";stream?.getTracks().forEach(t=>t.stop());stream=null;}
});
stop.addEventListener("click",()=>{if(media?.state==="recording"){media.stop();cancelAnimationFrame(animation);stop.disabled=true;record.disabled=false}});
play.addEventListener("click",()=>{if(blobUrl){audio.currentTime=0;audio.play().catch(()=>{status.textContent="Playback could not start."});status.textContent="Playing recording…"}});
audio.addEventListener("ended",()=>{status.textContent=""});
download.addEventListener("click",()=>{
 if(!blobUrl)return;const a=document.createElement("a");a.href=blobUrl;
 a.download=recordedStory.replace(/[^a-z0-9]+/gi,"-").replace(/^-|-$/g,"")+"-practice."+(blob.type.includes("mp4")?"m4a":"webm");
 document.body.append(a);a.click();a.remove();
});
render();
})();
</script>