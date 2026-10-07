
(() => {
  const root = document.querySelector('.strava-project');
  const D = window.STRAVA_PROJECT_DATA;
  if (!root || !D || !window.Plotly) return;

  const S = D.sample;
  const summary = D.summary;
  const plotIds = [];
  const config = {
    responsive: true,
    displaylogo: false,
    displayModeBar: true,
    scrollZoom: true,
    modeBarButtonsToRemove: ['lasso2d','select2d']
  };
  const baseLayout = {
    autosize: true,
    height: 510,
    margin: {l:70,r:30,t:64,b:62},
    paper_bgcolor: '#fff',
    plot_bgcolor: '#fff',
    font: {family:'Arial, Helvetica, sans-serif', color:'#202124'},
    hovermode: 'x unified',
    legend: {orientation:'h', y:1.10, x:0},
    xaxis: {automargin:true, gridcolor:'#e8eaed', zerolinecolor:'#dadce0'},
    yaxis: {automargin:true, gridcolor:'#e8eaed', zerolinecolor:'#dadce0'}
  };

  const safe = (a) => Array.isArray(a) ? a : [];
  const number = (v, d=1) => Number.isFinite(Number(v)) ? Number(v).toFixed(d) : '—';

  function mergeLayout(extra={}) {
    return {
      ...baseLayout,
      ...extra,
      xaxis: {...baseLayout.xaxis, ...(extra.xaxis||{})},
      yaxis: {...baseLayout.yaxis, ...(extra.yaxis||{})}
    };
  }

  function plot(id, traces, layout={}) {
    const el = document.getElementById(id);
    if (!el) return;
    plotIds.push(id);
    Plotly.newPlot(el, traces, mergeLayout(layout), config);
  }

  function line(name, x, y, hover, extra={}) {
    return {
      type:'scatter',
      mode:'lines',
      name,
      x:safe(x),
      y:safe(y),
      hovertemplate:hover,
      connectgaps:false,
      ...extra
    };
  }

  function markers(name, x, y, hover, extra={}) {
    return {
      type:'scatter',
      mode:'markers',
      name,
      x:safe(x),
      y:safe(y),
      hovertemplate:hover,
      marker:{size:7, opacity:.48},
      ...extra
    };
  }

  // ------------------------------------------------------------
  // KPI strip
  // ------------------------------------------------------------
  const kpi = document.getElementById('strava-kpis');
  if (kpi) {
    const items = [
      ['Distance', `${number(summary.distance_km,2)} km`],
      ['Duration', `${number((summary.duration_s||0)/60,1)} min`],
      ['Average speed', `${number(summary.average_speed_kmh,1)} km/h`],
      ['Maximum smoothed speed', `${number(summary.max_speed_kmh,1)} km/h`],
      ['Elevation gain', `${number(summary.elevation_gain_m,0)} m`],
      ['Track points', `${summary.track_points || D.points_total}`]
    ];
    kpi.innerHTML = items.map(([label,value]) =>
      `<span class="strava-kpi"><strong>${value}</strong><small>${label}</small></span>`
    ).join('');
  }

  // ------------------------------------------------------------
  // Interactive route player
  // ------------------------------------------------------------
  const lat = safe(S.latitude), lon = safe(S.longitude);
  let map, marker, travelled, timer = null, rideIndex = 0;
  const slider = document.getElementById('ride-position');
  const playBtn = document.getElementById('ride-play');
  const resetBtn = document.getElementById('ride-reset');
  const positionText = document.getElementById('ride-position-text');

  function contextAt(i) {
    return {
      time: safe(S.elapsed_time_min)[i],
      distance: safe(S.cumulative_distance_km)[i],
      speed: safe(S.speed_smooth_kmh)[i],
      elevation: safe(S.elevation_smooth_m)[i],
      gradient: safe(S.grade_smooth_pct)[i]
    };
  }

  function updateRide(i) {
    if (!lat.length) return;
    rideIndex = Math.max(0, Math.min(lat.length - 1, Number(i)||0));
    if (slider) slider.value = rideIndex;
    const point = [lat[rideIndex], lon[rideIndex]];
    if (marker) marker.setLatLng(point);
    if (travelled) travelled.setLatLngs(lat.slice(0, rideIndex + 1).map((v,j)=>[v,lon[j]]));
    const c = contextAt(rideIndex);
    if (positionText) {
      positionText.textContent =
        `${number(c.distance,2)} km · ${number(c.time,1)} min · ` +
        `${number(c.speed,1)} km/h · ${number(c.elevation,1)} m · ${number(c.gradient,1)}%`;
    }
  }

  if (window.L && lat.length && lon.length) {
    map = L.map('strava-map', {scrollWheelZoom:true});
    L.tileLayer(
      'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}',
      {attribution:'Tiles © Esri'}
    ).addTo(map);
    const coords = lat.map((v,i)=>[v,lon[i]]);
    const fullRoute = L.polyline(coords, {weight:5, opacity:.65}).addTo(map);
    travelled = L.polyline([coords[0]], {weight:7, opacity:.92}).addTo(map);
    marker = L.circleMarker(coords[0], {radius:8, weight:3, fillOpacity:1}).addTo(map);
    map.fitBounds(fullRoute.getBounds(), {padding:[22,22]});
    if (slider) {
      slider.max = Math.max(0, coords.length - 1);
      slider.addEventListener('input', e => updateRide(e.target.value));
    }
    updateRide(0);
  }

  function stopRide() {
    if (timer) clearInterval(timer);
    timer = null;
    if (playBtn) playBtn.textContent = '▶ Play ride';
  }

  if (playBtn) {
    playBtn.addEventListener('click', () => {
      if (timer) { stopRide(); return; }
      playBtn.textContent = '⏸ Pause';
      timer = setInterval(() => {
        if (rideIndex >= lat.length - 1) rideIndex = 0;
        else rideIndex += 1;
        updateRide(rideIndex);
      }, 75);
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      stopRide();
      updateRide(0);
      if (map && lat.length) {
        const coords = lat.map((v,i)=>[v,lon[i]]);
        map.fitBounds(L.latLngBounds(coords), {padding:[22,22]});
      }
    });
  }

  // ------------------------------------------------------------
  // Full-width motion charts
  // ------------------------------------------------------------
  const t = S.elapsed_time_min, d = S.cumulative_distance_km;
  const timeLabel = summary.has_real_gpx_time ? 'Elapsed time (min)' : 'Analysis time (min)';

  plot('chart-distance-time', [
    line('Cumulative distance', t, S.cumulative_distance_km,
      'Time %{x:.2f} min<br>Distance %{y:.3f} km<extra></extra>')
  ], {
    title:'Distance vs time',
    xaxis:{title:timeLabel}, yaxis:{title:'Cumulative distance (km)'}
  });

  plot('chart-displacement-time', [
    line('Displacement from start', t, safe(S.displacement_from_start_m).map(v=>v==null?null:v/1000),
      'Time %{x:.2f} min<br>Displacement %{y:.3f} km<extra></extra>')
  ], {
    title:'Displacement from start vs time',
    xaxis:{title:timeLabel}, yaxis:{title:'Displacement (km)'}
  });

  plot('chart-speed-time', [
    line('Raw speed', t, S.speed_kmh_raw,
      'Time %{x:.2f} min<br>Raw speed %{y:.2f} km/h<extra></extra>', {opacity:.28}),
    line('Smoothed speed', t, S.speed_smooth_kmh,
      'Time %{x:.2f} min<br>Smoothed speed %{y:.2f} km/h<extra></extra>')
  ], {
    title:'Speed vs time',
    xaxis:{title:timeLabel}, yaxis:{title:'Speed (km/h)'}
  });

  plot('chart-velocity-time', [
    line('East velocity', t, S.velocity_east_m_s,
      'Time %{x:.2f} min<br>East velocity %{y:.3f} m/s<extra></extra>'),
    line('North velocity', t, S.velocity_north_m_s,
      'Time %{x:.2f} min<br>North velocity %{y:.3f} m/s<extra></extra>')
  ], {
    title:'Velocity components vs time',
    xaxis:{title:timeLabel}, yaxis:{title:'Velocity (m/s)'}
  });

  plot('chart-acceleration-time', [
    line('Tangential acceleration', t, S.acceleration_smooth_m_s2,
      'Time %{x:.2f} min<br>Acceleration %{y:.3f} m/s²<extra></extra>')
  ], {
    title:'Acceleration vs time',
    xaxis:{title:timeLabel}, yaxis:{title:'Acceleration (m/s²)'}
  });

  plot('chart-elevation-time', [
    line('Elevation', t, S.elevation_smooth_m,
      'Time %{x:.2f} min<br>Elevation %{y:.1f} m<extra></extra>')
  ], {
    title:'Elevation vs time',
    xaxis:{title:timeLabel}, yaxis:{title:'Elevation (m)'}
  });

  plot('chart-gradient-time', [
    line('Gradient', t, S.grade_smooth_pct,
      'Time %{x:.2f} min<br>Gradient %{y:.2f}%<extra></extra>')
  ], {
    title:'Gradient vs time',
    xaxis:{title:timeLabel}, yaxis:{title:'Gradient (%)'}
  });

  plot('chart-vertical-speed-time', [
    line('Vertical speed', t, S.vertical_speed_m_s,
      'Time %{x:.2f} min<br>Vertical speed %{y:.3f} m/s<extra></extra>')
  ], {
    title:'Vertical speed vs time',
    xaxis:{title:timeLabel}, yaxis:{title:'Vertical speed (m/s)'}
  });

  // ------------------------------------------------------------
  // Full-width terrain charts
  // ------------------------------------------------------------
  plot('chart-elevation-distance', [
    line('Recorded elevation', d, S.elevation_m,
      'Distance %{x:.3f} km<br>Recorded elevation %{y:.1f} m<extra></extra>', {opacity:.28}),
    line('Smoothed elevation', d, S.elevation_smooth_m,
      'Distance %{x:.3f} km<br>Elevation %{y:.1f} m<extra></extra>')
  ], {
    title:'Elevation profile',
    xaxis:{title:'Distance (km)'}, yaxis:{title:'Elevation (m)'}
  });

  plot('chart-gradient-distance', [
    line('Gradient', d, S.grade_smooth_pct,
      'Distance %{x:.3f} km<br>Gradient %{y:.2f}%<extra></extra>')
  ], {
    title:'Gradient vs distance',
    xaxis:{title:'Distance (km)'}, yaxis:{title:'Gradient (%)'}
  });

  plot('chart-climb-distance', [
    line('Cumulative ascent', d, S.cumulative_elevation_gain_m,
      'Distance %{x:.3f} km<br>Ascent %{y:.1f} m<extra></extra>'),
    line('Cumulative descent', d, S.cumulative_elevation_loss_m,
      'Distance %{x:.3f} km<br>Descent %{y:.1f} m<extra></extra>')
  ], {
    title:'Cumulative ascent and descent',
    xaxis:{title:'Distance (km)'}, yaxis:{title:'Vertical metres'}
  });

  plot('chart-speed-distance', [
    line('Smoothed speed', d, S.speed_smooth_kmh,
      'Distance %{x:.3f} km<br>Speed %{y:.2f} km/h<extra></extra>')
  ], {
    title:'Speed vs distance',
    xaxis:{title:'Distance (km)'}, yaxis:{title:'Speed (km/h)'}
  });

  plot('chart-speed-gradient', [
    markers('Ride points', S.grade_smooth_pct, S.speed_smooth_kmh,
      'Gradient %{x:.2f}%<br>Speed %{y:.2f} km/h<extra></extra>')
  ], {
    title:'Speed vs gradient',
    hovermode:'closest',
    xaxis:{title:'Gradient (%)'}, yaxis:{title:'Speed (km/h)'}
  });

  plot('chart-speed-elevation', [
    markers('Ride points', S.elevation_smooth_m, S.speed_smooth_kmh,
      'Elevation %{x:.1f} m<br>Speed %{y:.2f} km/h<extra></extra>')
  ], {
    title:'Speed vs elevation',
    hovermode:'closest',
    xaxis:{title:'Elevation (m)'}, yaxis:{title:'Speed (km/h)'}
  });

  // ------------------------------------------------------------
  // Full-width curiosity / quality charts
  // ------------------------------------------------------------
  function histPlot(id, title, xTitle, h) {
    plot(id, [{
      type:'bar',
      x:safe(h.x), y:safe(h.y), name:title,
      hovertemplate:`${xTitle} %{x}<br>Count %{y}<extra></extra>`
    }], {
      title, hovermode:'closest',
      xaxis:{title:xTitle}, yaxis:{title:'Count'}
    });
  }

  histPlot('chart-sampling-hist','Sampling interval distribution','Sampling interval (s)',D.hist.sampling);
  histPlot('chart-segment-hist','GPS segment-distance distribution','Segment distance (m)',D.hist.segment);
  histPlot('chart-speed-hist','Speed distribution','Speed (km/h)',D.hist.speed);
  histPlot('chart-acceleration-hist','Acceleration distribution','Acceleration (m/s²)',D.hist.acceleration);

  const missKeys = Object.keys(D.missing || {});
  plot('chart-missingness', [{
    type:'bar', x:missKeys, y:missKeys.map(k=>D.missing[k]), name:'Missing values',
    hovertemplate:'%{x}<br>Missing %{y}<extra></extra>'
  }], {
    title:'Raw-source missing values', hovermode:'closest',
    xaxis:{title:'Raw GPX field'}, yaxis:{title:'Missing values'}
  });

  plot('chart-moving', [
    line('Moving state', t, safe(S.is_moving).map(v=>v ? 1 : 0),
      'Time %{x:.2f} min<br>Moving %{y:.0f}<extra></extra>', {line:{shape:'hv'}})
  ], {
    title:'Moving / stopped state',
    xaxis:{title:timeLabel}, yaxis:{title:'0 = stopped · 1 = moving', range:[-.1,1.1]}
  });

  plot('chart-bearing', [
    markers('Bearing', d, S.bearing_deg,
      'Distance %{x:.2f} km<br>Bearing %{y:.1f}°<extra></extra>')
  ], {
    title:'Bearing through the route', hovermode:'closest',
    xaxis:{title:'Distance (km)'}, yaxis:{title:'Bearing (degrees)', range:[0,360]}
  });

  // ------------------------------------------------------------
  // Curiosity findings
  // ------------------------------------------------------------
  const findings = document.getElementById('strava-findings');
  if (findings) {
    findings.innerHTML = (D.curiosity || []).map(item =>
      `<article class="strava-finding">
         <strong>${item.metric}</strong>
         <span>${item.value}</span>
         <p>${item.note}</p>
       </article>`
    ).join('');
  }

  // ------------------------------------------------------------
  // Reset all chart zooms
  // ------------------------------------------------------------
  const resetCharts = document.getElementById('reset-all-charts');
  if (resetCharts) {
    resetCharts.addEventListener('click', () => {
      plotIds.forEach(id => {
        Plotly.relayout(id, {
          'xaxis.autorange': true,
          'yaxis.autorange': true
        });
      });
    });
  }

  window.addEventListener('resize', () => {
    plotIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) Plotly.Plots.resize(el);
    });
    if (map) map.invalidateSize();
  });
})();