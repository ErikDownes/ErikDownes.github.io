---
layout: doc
permalink: /pivotal-office-map.html
handle: Pivotal Office Map
title: Pivotal Office Map
eyebrow: SHANNON · DUBLIN · LONDON · NEW YORK
public_mode: true
description: Explore Pivotal Corporate's four office locations on a zoomable Leaflet map.
---

Explore Pivotal’s four locations. Select a city to zoom in, or choose **All offices** to return to the overview.

<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossorigin="">
<style>
.pivotal-map-controls{display:flex;flex-wrap:wrap;gap:8px;margin:16px 0}
.pivotal-map-controls button{padding:10px 14px;border:1px solid #9aa9b5;border-radius:8px;background:#fff;color:#18354a;font:inherit;cursor:pointer;min-height:44px}
.pivotal-map-controls button:hover,.pivotal-map-controls button[aria-pressed="true"]{background:#18354a;color:#fff}
.pivotal-map-controls button:focus-visible{outline:3px solid #c96c18;outline-offset:3px}
#pivotal-map{height:clamp(330px,60vh,600px);width:100%;border:1px solid #ccd5dd;border-radius:12px;z-index:0}
#pivotal-map .leaflet-popup-content{color:#18354a;font-size:15px;line-height:1.5}
.pivotal-office-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,230px),1fr));gap:14px;margin:20px 0}
.pivotal-office-card{border:1px solid #ccd5dd;border-radius:10px;padding:16px}
.pivotal-office-card h3{margin:0 0 8px}
.pivotal-office-card p{margin:6px 0}
@media print{#pivotal-map,.pivotal-map-controls{display:none}.pivotal-office-grid{display:block}.pivotal-office-card{break-inside:avoid}}
</style>
<div class="pivotal-map-controls" role="group" aria-label="Choose an office to show on the map">
<button type="button" data-office="all" aria-pressed="true" disabled>All offices</button>
<button type="button" data-office="0" aria-pressed="false" disabled>Shannon</button>
<button type="button" data-office="1" aria-pressed="false" disabled>Dublin</button>
<button type="button" data-office="2" aria-pressed="false" disabled>London</button>
<button type="button" data-office="3" aria-pressed="false" disabled>New York</button>
</div>
<div id="pivotal-map" role="region" aria-label="Interactive map of Pivotal offices. Use the city buttons or map zoom controls." tabindex="0"></div>
<p id="pivotal-map-status" role="status">Loading map. The office addresses and map links are also available below.</p>

<div class="pivotal-office-grid">
<section class="pivotal-office-card"><h3>Shannon · Headquarters</h3><p>First Floor, Universal House,<br>Shannon Free Zone, Shannon,<br>Co. Clare, V14 T213, Ireland.</p><a href="https://www.google.com/maps/search/?api=1&amp;query=Universal%20House%20Shannon%20Ireland" target="_blank" rel="noopener">Open Shannon address in Maps</a></section>
<section class="pivotal-office-card"><h3>Dublin</h3><p>6–7 Fitzwilliam Square East,<br>Dublin 2, D02 Y447,<br>Ireland.</p><a href="https://www.google.com/maps/search/?api=1&amp;query=6-7%20Fitzwilliam%20Square%20East%20Dublin" target="_blank" rel="noopener">Open Dublin address in Maps</a></section>
<section class="pivotal-office-card"><h3>London</h3><p>35 New Broad Street,<br>Liverpool Street area, London,<br>EC2M 1NH, United Kingdom.</p><a href="https://www.google.com/maps/search/?api=1&amp;query=35%20New%20Broad%20Street%20London" target="_blank" rel="noopener">Open London address in Maps</a></section>
<section class="pivotal-office-card"><h3>New York · Manhattan</h3><p>245 Park Avenue,<br>New York, NY 10167,<br>United States.</p><a href="https://www.google.com/maps/search/?api=1&amp;query=245%20Park%20Avenue%20New%20York" target="_blank" rel="noopener">Open New York address in Maps</a></section>
</div>

Pins show approximate office areas, not verified entrances. The London address is confirmed as the UK company’s registered office. Use the address links for navigation.



## How was this made?

**Leaflet  OpenStreetMap  Clear information**

This small project turns a list of office addresses into an interactive map using **Leaflet**, an open-source JavaScript mapping library, and **OpenStreetMap** map tiles. City buttons, zoom controls and address popups make it easy to move from the international overview to each location.

**Remember Leaflet:** think of a small paper leaflet folded twice into three panels. Here, Leaflet is the name of the library that makes the digital map interactive.



## Sources and accuracy

Addresses checked on **4 October 2026** against the supplied address list, [Pivotal’s company profile](https://ie.linkedin.com/company/pivotal-corporate), [Companies House](https://find-and-update.company-information.service.gov.uk/company/17003470) and [Viscount House](https://www.iconicoffices.com/location/dublin/viscount-house). Shannon’s Eircode is shown as **V14 T213**, consistent with the company profile and public records for Universal House. [245 Park Avenue](https://245park.com/building/) is in Midtown Manhattan.

Pivotal reports **100+ staff overall**. Office headcounts have not been verified, so marker sizes do not represent employee numbers.

[Back to Projects]({{ '/projects.html' | relative_url }}) · [Initiative & Process Improvement]({{ '/preparation/initiative-process-improvement.html' | relative_url }})

<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=" crossorigin=""></script>
<script>
(function(){
  var status=document.getElementById('pivotal-map-status');
  if(!window.L){status.textContent='The map could not load. Use the address links below to explore each office.';return;}
  var offices=[
    {name:'Shannon',coords:[52.69865,-8.90204],address:'First Floor, Universal House, Shannon Free Zone, Co. Clare, V14 T213'},
    {name:'Dublin',coords:[53.3354,-6.2507],address:'6–7 Fitzwilliam Square East, Dublin 2, D02 Y447'},
    {name:'London',coords:[51.516951,-0.083779],address:'35 New Broad Street, London, EC2M 1NH'},
    {name:'New York',coords:[40.754885,-73.974871],address:'245 Park Avenue, Midtown Manhattan, NY 10167'}
  ];
  var map=L.map('pivotal-map',{scrollWheelZoom:false});
  var tiles=L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19,attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);
  var buttons=document.querySelectorAll('[data-office]');
  function markSelected(value){buttons.forEach(function(b){b.setAttribute('aria-pressed',String(b.dataset.office===value));});}
  var markers=offices.map(function(o,i){
    var popup=document.createElement('div'),title=document.createElement('strong'),address=document.createElement('p');
    title.textContent=o.name;address.textContent=o.address;popup.append(title,address);
    return L.marker(o.coords,{title:o.name,alt:o.name+' office area',keyboard:true}).addTo(map).bindPopup(popup).on('click',function(){markSelected(String(i));status.textContent=o.name+': '+o.address;});
  });
  var bounds=L.latLngBounds(offices.map(function(o){return o.coords;}));
  function overview(){map.fitBounds(bounds,{padding:[35,35]});map.closePopup();markSelected('all');status.textContent='Showing all four offices. Select a city to zoom in. Pins are approximate.';}
  buttons.forEach(function(b){b.disabled=false;b.addEventListener('click',function(){
    if(b.dataset.office==='all'){overview();return;}
    var i=Number(b.dataset.office),o=offices[i];map.setView(o.coords,15);markers[i].openPopup();markSelected(String(i));status.textContent=o.name+': '+o.address;
  });});
  tiles.on('tileerror',function(){status.textContent='Some map tiles could not load. Office address links remain available below.';});
  overview();
  if(window.ResizeObserver){new ResizeObserver(function(){map.invalidateSize();}).observe(document.getElementById('pivotal-map'));}
})();
</script>
