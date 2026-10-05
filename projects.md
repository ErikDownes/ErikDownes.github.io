---
layout: doc
permalink: /projects.html
handle: Projects
title: Projects
nav_order: 90
eyebrow: DASHBOARDS · CALCULATORS · APPLIED WORK
public_mode: true
---
## Pivotal Office Map — AI-Assisted Leaflet Project

**Addresses → AI-assisted build → interactive map → clear client-facing communication**

This project began with a very small piece of source data: the **office addresses copied from Pivotal Corporate’s website**. I gave those addresses to an AI assistant and asked it to turn them into a simple interactive map that would be useful in interview preparation and easy for a visitor to understand.

The AI did not create a picture of a map. It helped produce the **HTML, CSS and JavaScript** needed to build a real interactive web map. The finished page uses **Leaflet**, an open-source JavaScript mapping library, with **OpenStreetMap** map tiles.

That means the result is not an iframe or a static screenshot. The map is part of the page itself: the user can **pan, zoom, select an office and open a location popup**.

### What the AI helped do

The workflow was straightforward:

1. Take the four office addresses as structured information.
2. Represent each office as a JavaScript object containing a **name, latitude, longitude and address**.
3. Create a Leaflet map.
4. Add OpenStreetMap tiles.
5. Add a marker for each office.
6. Add buttons so the visitor can jump directly to **Shannon, Dublin, London or New York**, or return to **All offices**.
7. Add accessible labels, keyboard-friendly controls and a text status line so the information is still understandable if the map itself does not load.

AI accelerated the coding, but the important part was still **checking the addresses, testing the controls, deciding what information should be shown and refining the presentation**.

### The critical lines

The map starts with Leaflet:

```javascript
var map = L.map('pivotal-project-map', { scrollWheelZoom: false });
```

OpenStreetMap provides the map tiles:

```javascript
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);
```

Each office is represented as data:

```javascript
{name:'Shannon', coords:[52.69865,-8.90204], address:'Universal House, Shannon Free Zone'}
```

The markers are then generated from that data rather than writing four separate pieces of map code:

```javascript
offices.map(function (office) {
  return L.marker(office.coords).addTo(map);
});
```

And the city buttons use `map.setView(...)` to move the user directly to the selected office.

### Interface and visual design

I wanted the interface to feel **quiet, balanced and professional** rather than technically busy. The map is given enough vertical space to be useful, while the controls sit in a simple row above it. Buttons have consistent spacing and size, the page uses generous **white space**, and the text is broken into short sections so the reader can understand the project without being overwhelmed by the code.

White space is not empty space: it separates ideas, creates hierarchy and lets important information stand out. **Balance** matters too. The written explanation, controls and map should feel like parts of one composition rather than unrelated blocks competing for attention.

That is also part of professional communication. A document, dashboard or client-facing page should not merely be correct; it should be **clear, pleasing to look at and easy to navigate**. Good presentation is close to visual art in the sense that proportion, spacing, hierarchy and balance influence how comfortably a person can absorb information. Sophisticated graphics are useful when they make complex information easier to understand, not when they decorate it for its own sake.

For client-centred service, that matters because the user should not have to work hard to discover what the information means.

### Try the map

Select an office to zoom in, use the normal map controls to explore, or choose **All offices** to return to the international view.

<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossorigin="">
<style>
.pivotal-project-controls{display:flex;flex-wrap:wrap;gap:8px;margin:16px 0 12px}
.pivotal-project-controls button{padding:10px 14px;border:1px solid #9aa9b5;border-radius:999px;background:#fff;color:#18354a;font:inherit;cursor:pointer;min-height:44px}
.pivotal-project-controls button:hover,.pivotal-project-controls button[aria-pressed="true"]{background:#18354a;color:#fff}
.pivotal-project-controls button:focus-visible{outline:3px solid #c96c18;outline-offset:3px}
#pivotal-project-map{height:clamp(360px,60vh,620px);width:100%;border:1px solid #ccd5dd;border-radius:14px;z-index:0;margin:0 0 10px}
#pivotal-project-map .leaflet-popup-content{color:#18354a;font-size:15px;line-height:1.5}
@media print{#pivotal-project-map,.pivotal-project-controls{display:none}}
</style>

<div class="pivotal-project-controls" role="group" aria-label="Choose a Pivotal office">
<button type="button" data-project-office="all" aria-pressed="true" disabled>All offices</button>
<button type="button" data-project-office="0" aria-pressed="false" disabled>Shannon</button>
<button type="button" data-project-office="1" aria-pressed="false" disabled>Dublin</button>
<button type="button" data-project-office="2" aria-pressed="false" disabled>London</button>
<button type="button" data-project-office="3" aria-pressed="false" disabled>New York</button>
</div>

<div id="pivotal-project-map" role="region" aria-label="Interactive map of Pivotal Corporate office locations" tabindex="0"></div>
<p id="pivotal-project-map-status" role="status">Loading map…</p>

<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=" crossorigin=""></script>
<script>
(function(){
  var status=document.getElementById('pivotal-project-map-status');
  if(!window.L){status.textContent='The map could not load.';return;}
  var offices=[
    {name:'Shannon',coords:[52.69865,-8.90204],address:'First Floor, Universal House, Shannon Free Zone, Co. Clare, V14 T213'},
    {name:'Dublin',coords:[53.3354,-6.2507],address:'6–7 Fitzwilliam Square East, Dublin 2, D02 Y447'},
    {name:'London',coords:[51.516951,-0.083779],address:'35 New Broad Street, London, EC2M 1NH'},
    {name:'New York',coords:[40.754885,-73.974871],address:'245 Park Avenue, New York, NY 10167'}
  ];
  var map=L.map('pivotal-project-map',{scrollWheelZoom:false});
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19,attribution:'&copy; OpenStreetMap contributors'}).addTo(map);
  var buttons=document.querySelectorAll('[data-project-office]');
  function selected(value){buttons.forEach(function(b){b.setAttribute('aria-pressed',String(b.dataset.projectOffice===value));});}
  var markers=offices.map(function(o,i){
    return L.marker(o.coords,{title:o.name,keyboard:true}).addTo(map)
      .bindPopup('<strong>'+o.name+'</strong><br>'+o.address)
      .on('click',function(){selected(String(i));status.textContent=o.name+': '+o.address;});
  });
  var bounds=L.latLngBounds(offices.map(function(o){return o.coords;}));
  function overview(){
    map.fitBounds(bounds,{padding:[35,35]});
    map.closePopup();
    selected('all');
    status.textContent='Showing all four offices. Select a city to zoom in.';
  }
  buttons.forEach(function(b){
    b.disabled=false;
    b.addEventListener('click',function(){
      if(b.dataset.projectOffice==='all'){overview();return;}
      var i=Number(b.dataset.projectOffice),o=offices[i];
      map.setView(o.coords,15);
      markers[i].openPopup();
      selected(String(i));
      status.textContent=o.name+': '+o.address;
    });
  });
  overview();
  if(window.ResizeObserver){new ResizeObserver(function(){map.invalidateSize();}).observe(document.getElementById('pivotal-project-map'));}
})();
</script>

[Open the standalone map →]({{ '/pivotal-office-map.html' | relative_url }})

## Turboprop Asset Reporting

Aircraft and operator reporting built from public turboprop fleet records, with the emphasis on clean identities, traceable data and useful asset-level reporting.

[Open Turboprop Asset Reporting →]({{ '/fleet-map.html' | relative_url }})

[How I Built It →]({{ '/turboprop-dashboard-build.html' | relative_url }})

## Global Fleet Maintenance Dashboard

The existing ATR fleet and maintenance dashboard is retained as a core project. It brings aircraft, utilisation and maintenance thinking together in one reporting view.

[Open Global Fleet Maintenance Dashboard →]({{ '/atr-fleet-dashboard.html' | relative_url }})

## Mortgage Calculator

A simple financial-mathematics tool for exploring principal, deposit, interest rate, term, monthly repayments and total borrowing cost.

[Open Mortgage Calculator →]({{ '/mortgage-calculator.html' | relative_url }})

## PCP Car Finance Calculator

A car-finance calculator built around deposit, monthly payment, term and the optional final payment / GMFV. The aim is to compare the full cash-flow structure rather than just the headline monthly payment.

[Open PCP Calculator →]({{ '/pcp-calculator.html' | relative_url }})
