---
layout: doc
permalink: /pivotal-office-map.html
handle: Pivotal Office Map
title: Pivotal Office Map
eyebrow: AI-ASSISTED · LEAFLET · OPENSTREETMAP
public_mode: true
description: Explore Pivotal Corporate's four office locations on a zoomable Leaflet map.
---

**AI-assisted Leaflet project:** the office addresses were turned into a simple interactive map. Use the buttons to jump between **Shannon, Dublin, London and New York**.

<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossorigin="">
<style>
.pivotal-map-controls{display:flex;flex-wrap:wrap;gap:8px;margin:12px 0}
.pivotal-map-controls button{padding:10px 14px;border:1px solid #9aa9b5;border-radius:8px;background:#fff;color:#18354a;font:inherit;cursor:pointer;min-height:44px}
.pivotal-map-controls button:hover,.pivotal-map-controls button[aria-pressed="true"]{background:#18354a;color:#fff}
.pivotal-map-controls button:focus-visible{outline:3px solid #c96c18;outline-offset:3px}
#pivotal-map{height:clamp(430px,68vh,720px);width:100%;border:1px solid #ccd5dd;border-radius:12px;z-index:0}
#pivotal-map .leaflet-popup-content{color:#18354a;font-size:15px;line-height:1.5}
.pivotal-note{font-size:.92rem;color:#64748b;margin:.7rem 0 1.5rem}
@media print{#pivotal-map,.pivotal-map-controls{display:none}}
</style>

<div class="pivotal-map-controls" role="group" aria-label="Choose an office to show on the map">
<button type="button" data-office="all" aria-pressed="true" disabled>All offices</button>
<button type="button" data-office="0" aria-pressed="false" disabled>Shannon</button>
<button type="button" data-office="1" aria-pressed="false" disabled>Dublin</button>
<button type="button" data-office="2" aria-pressed="false" disabled>London</button>
<button type="button" data-office="3" aria-pressed="false" disabled>New York</button>
</div>

<div id="pivotal-map" role="region" aria-label="Interactive map of Pivotal offices. Use the city buttons or map zoom controls." tabindex="0"></div>
<p id="pivotal-map-status" class="pivotal-note" role="status">Loading map…</p>

## How it was built

The addresses were represented as structured JavaScript data, then **AI-assisted HTML, CSS and JavaScript** were used to build the interface. **Leaflet** provides the interactive map and **OpenStreetMap** provides the map tiles. The important work was checking the locations, testing the controls and keeping the result clear rather than technically busy.

[View the source on GitHub →](https://github.com/ErikDownes/ErikDownes.github.io/blob/main/pivotal-office-map.md)

## Office addresses

- **Shannon:** First Floor, Universal House, Shannon Free Zone, Co. Clare, V14 T213.
- **Dublin:** 6–7 Fitzwilliam Square East, Dublin 2, D02 Y447.
- **London:** 35 New Broad Street, London, EC2M 1NH.
- **New York:** 245 Park Avenue, New York, NY 10167.

Pins show approximate office areas rather than verified building entrances.

[Back to Projects →]({{ '/projects.html' | relative_url }})

<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=" crossorigin=""></script>
<script>
(function(){
  var status=document.getElementById('pivotal-map-status');
  if(!window.L){status.textContent='The map could not load. The office addresses are listed below.';return;}
  var offices=[
    {name:'Shannon',coords:[52.69865,-8.90204],address:'First Floor, Universal House, Shannon Free Zone, Co. Clare, V14 T213'},
    {name:'Dublin',coords:[53.3354,-6.2507],address:'6–7 Fitzwilliam Square East, Dublin 2, D02 Y447'},
    {name:'London',coords:[51.516951,-0.083779],address:'35 New Broad Street, London, EC2M 1NH'},
    {name:'New York',coords:[40.754885,-73.974871],address:'245 Park Avenue, New York, NY 10167'}
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
  function overview(){map.fitBounds(bounds,{padding:[35,35]});map.closePopup();markSelected('all');status.textContent='Showing all four offices. Select a city to zoom in.';}
  buttons.forEach(function(b){b.disabled=false;b.addEventListener('click',function(){
    if(b.dataset.office==='all'){overview();return;}
    var i=Number(b.dataset.office),o=offices[i];map.setView(o.coords,15);markers[i].openPopup();markSelected(String(i));status.textContent=o.name+': '+o.address;
  });});
  tiles.on('tileerror',function(){status.textContent='Some map tiles could not load. Office addresses remain available below.';});
  overview();
  if(window.ResizeObserver){new ResizeObserver(function(){map.invalidateSize();}).observe(document.getElementById('pivotal-map'));}
})();
</script>
