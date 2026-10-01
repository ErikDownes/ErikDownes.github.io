---
layout: doc
handle: Lease Dashboard
title: Aircraft Leasing Decision Lab
eyebrow: OPEN · ONLINE · INTERACTIVE
intro: Explore illustrative lease, re-lease and residual-value scenarios for regional turboprop aircraft. Built as a static browser app with no proprietary BI platform.
---

<div id="leaseLab" class="lease-lab">
  <div class="lease-tabs" role="tablist" aria-label="Aircraft leasing dashboards">
    <button class="lease-tab active" data-tab="acquisition" type="button">Acquisition & options</button>
    <button class="lease-tab" data-tab="single" type="button">Single aircraft</button>
    <button class="lease-tab" data-tab="relet" type="button">Re-lease decision</button>
    <button class="lease-tab" data-tab="scenarios" type="button">Scenario comparison</button>
  </div>

  <section class="lease-panel active" data-panel="acquisition">
    <div class="acq-event-bar">
      <div>
        <span class="acq-kicker">NEXT INDUSTRY MILESTONE</span>
        <strong id="acqEventName">Paris Air Show 2027</strong>
        <small id="acqEventDate">14–20 June 2027 · Paris-Le Bourget</small>
      </div>
      <div class="acq-countdown">
        <span id="acqCountdown">—</span>
        <small>to show opening</small>
      </div>
    </div>

    <div class="acq-aircraft-strip" aria-label="Choose aircraft reference">
      <button class="acq-aircraft-card" data-acq-aircraft="atr42" type="button">
        <span>ATR 42-600</span><strong>50-seat class</strong><small>illustrative acquisition case</small>
      </button>
      <button class="acq-aircraft-card active" data-acq-aircraft="atr72" type="button">
        <span>ATR 72-600</span><strong>70-seat class</strong><small>2026 public order anchor</small>
      </button>
      <button class="acq-aircraft-card" data-acq-aircraft="d8-400" type="button">
        <span>Dash 8-400</span><strong>refurbished reference</strong><small>illustrative acquisition case</small>
      </button>
      <input id="acqAircraft" type="hidden" value="atr72">
    </div>

    <div class="lease-grid">
      <div class="lease-controls">
        <h3>Build an acquisition case</h3>
        <p>Start with a unit-price assumption, choose how many aircraft to commit to now, then decide whether to exercise purchase options later.</p>

        <label>Unit acquisition assumption
          <input id="acqUnitPrice" type="number" min="2" max="60" step="0.5" value="25">
          <small id="acqPriceNote" class="control-note">ATR announced 40 ATR 72-600 aircraft for around $1bn in September 2026 — roughly $25m each as a headline transaction proxy, not an official list price.</small>
        </label>

        <label>Firm aircraft <output id="acqFirmOut"></output>
          <input id="acqFirmQty" type="range" min="1" max="12" step="1" value="3">
        </label>

        <label>Purchase options available <output id="acqOptionsOut"></output>
          <input id="acqOptionQty" type="range" min="0" max="12" step="1" value="3">
        </label>

        <label>Options exercised <output id="acqExerciseOut"></output>
          <input id="acqExerciseQty" type="range" min="0" max="3" step="1" value="0">
        </label>

        <div class="acq-action-row" aria-label="Option exercise shortcuts">
          <button type="button" data-acq-exercise="0">Hold options</button>
          <button type="button" data-acq-exercise="half">Exercise half</button>
          <button type="button" data-acq-exercise="all">Exercise all</button>
        </div>

        <label>Option exercise price <output id="acqOptionFactorOut"></output>
          <input id="acqOptionPriceFactor" type="range" min="80" max="120" step="1" value="100">
        </label>

        <label>Up-front cash / PDP assumption <output id="acqDepositOut"></output>
          <input id="acqDepositPct" type="range" min="0" max="30" step="1" value="10">
        </label>

        <label>Industry milestone
          <select id="acqEventSelect">
            <option value="auto" selected>Auto · next show</option>
            <option value="paris">Paris Air Show · 14–20 Jun 2027</option>
            <option value="dubai">Dubai Airshow · 15–19 Nov 2027</option>
          </select>
        </label>

        <label>Decision gate before show <output id="acqLeadOut"></output>
          <input id="acqDecisionLead" type="range" min="30" max="180" step="15" value="90">
        </label>
      </div>

      <div class="lease-output">
        <div class="lease-kpis acq-kpis">
          <div><span>Firm commitment</span><strong id="acqFirmValue">—</strong></div>
          <div><span>Exercised options</span><strong id="acqExerciseValue">—</strong></div>
          <div><span>Current programme</span><strong id="acqProgramValue">—</strong></div>
          <div><span>All options exercised</span><strong id="acqMaxValue">—</strong></div>
          <div><span>Up-front cash</span><strong id="acqUpfrontValue">—</strong></div>
          <div><span>Options remaining</span><strong id="acqRemaining">—</strong></div>
        </div>

        <div class="lease-chart-card">
          <div class="acq-heading-row">
            <div>
              <h3>Firm order → option decision → industry milestone</h3>
              <p id="acqDecisionSummary">—</p>
            </div>
            <span id="acqStatusPill" class="acq-status-pill">OPTIONS HELD</span>
          </div>
          <div id="acqTimeline" class="acq-timeline"></div>
        </div>

        <div class="lease-mini-grid">
          <div>
            <h3>Why options matter</h3>
            <p>A firm order commits capital now. Purchase options preserve flexibility: add aircraft later if demand, financing, placement opportunities and market conditions support the decision.</p>
          </div>
          <div>
            <h3>What I can explain</h3>
            <p><strong>“I separated the firm commitment from optional capacity, then made the price, quantity and timing assumptions adjustable so I could see the capital effect of exercising the options.”</strong></p>
          </div>
        </div>

        <div class="lease-note">
          <strong>Public-data boundary:</strong> the ATR 72-600 default uses a September 2026 public order announcement as a headline reference. Other defaults are deliberately labelled illustrative. The model does not claim access to manufacturer list prices, any lessor's acquisition costs or confidential option terms.
        </div>
      </div>
    </div>
  </section>

  <section class="lease-panel" data-panel="single">
    <div class="lease-grid">
      <div class="lease-controls">
        <h3>Single-aircraft lease & value curve</h3>
        <p>Start with an aircraft at any age — for example a six-year-old aircraft entering a new lease — and model its next economic chapter.</p>
        <label>Aircraft family
          <select id="aircraftType">
            <option value="atr42">ATR 42-600</option>
            <option value="atr72" selected>ATR 72-600</option>
            <option value="d8-100">Dash 8-100 · historical</option>
            <option value="d8-300">Dash 8-300 · historical</option>
            <option value="d8-400">Dash 8-400 · historical</option>
          </select>
        </label>
        <label>Starting aircraft age <output id="ageOut"></output>
          <input id="startAge" type="range" min="0" max="30" step="1" value="6">
        </label>
        <label>Current asset value <output id="valueOut"></output>
          <input id="startValue" type="range" min="2" max="40" step="0.5" value="18">
        </label>
        <label>Monthly lease income <output id="leaseOut"></output>
          <input id="monthlyLease" type="range" min="40" max="350" step="5" value="180">
        </label>
        <label>Analysis horizon <output id="horizonOut"></output>
          <input id="horizon" type="range" min="3" max="15" step="1" value="8">
        </label>
        <label>Discount rate <output id="discountOut"></output>
          <input id="discountRate" type="range" min="2" max="15" step="0.25" value="8">
        </label>
        <label>Annual value decline <output id="declineOut"></output>
          <input id="valueDecline" type="range" min="1" max="12" step="0.25" value="5">
        </label>
        <label>Annual asset / maintenance cost <output id="costOut"></output>
          <input id="annualCost" type="range" min="0" max="1.5" step="0.05" value="0.35">
        </label>
      </div>

      <div class="lease-output">
        <div class="lease-kpis">
          <div><span>NPV incl. residual</span><strong id="npvKpi">—</strong></div>
          <div><span>End residual value</span><strong id="residualKpi">—</strong></div>
          <div><span>Gross lease income</span><strong id="incomeKpi">—</strong></div>
          <div><span>End aircraft age</span><strong id="endAgeKpi">—</strong></div>
        </div>
        <div class="lease-chart-card">
          <h3>Asset value and cumulative discounted cash</h3>
          <canvas id="singleChart" width="920" height="420" aria-label="Aircraft asset value and discounted cash flow chart"></canvas>
        </div>
        <div class="lease-mini-grid">
          <div>
            <h3>How to read it</h3>
            <p>The value curve estimates how the asset value changes from the selected starting age. The cash curve shows discounted net lease income accumulating through the scenario.</p>
          </div>
          <div>
            <h3>Interview connection</h3>
            <p><strong>“I can change an assumption, see the effect on cash flow and asset value, and then explain which assumption is driving the decision.”</strong></p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="lease-panel" data-panel="relet">
    <div class="lease-grid">
      <div class="lease-controls">
        <h3>Extend or re-lease?</h3>
        <p>Compare keeping the aircraft with its current operator against taking downtime and transition cost to place it on a new lease.</p>
        <label>Aircraft age at decision <output id="reAgeOut"></output>
          <input id="reAge" type="range" min="3" max="25" step="1" value="8">
        </label>
        <label>Current monthly lease <output id="reLeaseOut"></output>
          <input id="reLease" type="range" min="40" max="350" step="5" value="170">
        </label>
        <label>New lease change <output id="newLeaseDeltaOut"></output>
          <input id="newLeaseDelta" type="range" min="-30" max="30" step="1" value="8">
        </label>
        <label>Transition downtime <output id="downtimeOut"></output>
          <input id="downtime" type="range" min="0" max="12" step="1" value="4">
        </label>
        <label>Transition / remarketing cost <output id="transitionCostOut"></output>
          <input id="transitionCost" type="range" min="0" max="2" step="0.05" value="0.6">
        </label>
        <label>Decision horizon <output id="reHorizonOut"></output>
          <input id="reHorizon" type="range" min="3" max="10" step="1" value="6">
        </label>
      </div>

      <div class="lease-output">
        <div class="lease-kpis">
          <div><span>Extend NPV</span><strong id="extendNpv">—</strong></div>
          <div><span>Re-lease NPV</span><strong id="reletNpv">—</strong></div>
          <div><span>Difference</span><strong id="decisionDelta">—</strong></div>
          <div><span>Model result</span><strong id="decisionLabel">—</strong></div>
        </div>
        <div class="lease-chart-card">
          <h3>Discounted cash-flow comparison</h3>
          <canvas id="reletChart" width="920" height="420" aria-label="Extend versus re-lease discounted cash flow chart"></canvas>
        </div>
        <div class="lease-note">
          This is deliberately a simplified decision model. Real lessor decisions may also include maintenance status, return conditions, credit risk, taxes, financing, records, jurisdiction, technical modifications and market availability.
        </div>
      </div>
    </div>
  </section>

  <section class="lease-panel" data-panel="scenarios">
    <h3>Three-way scenario comparison</h3>
    <p>Use one set of aircraft assumptions, then stress the model. The purpose is to show sensitivity rather than claim a single “correct” valuation.</p>
    <div class="scenario-cards" id="scenarioCards"></div>
    <div class="lease-chart-card">
      <h3>NPV under conservative, base and upside assumptions</h3>
      <canvas id="scenarioChart" width="920" height="420" aria-label="Scenario NPV comparison chart"></canvas>
    </div>
    <div class="lease-mini-grid">
      <div><h3>Conservative</h3><p>Higher discount rate, faster value decline and weaker lease income.</p></div>
      <div><h3>Base</h3><p>Uses the assumptions selected in the single-aircraft dashboard.</p></div>
      <div><h3>Upside</h3><p>Lower discount rate, slower value decline and stronger lease income.</p></div>
    </div>
  </section>
</div>

<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css">
<link rel="stylesheet" href="{{ '/assets/lease-dashboard.css' | relative_url }}">
<script defer src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
<script defer src="{{ '/assets/lease-dashboard.js' | relative_url }}"></script>
