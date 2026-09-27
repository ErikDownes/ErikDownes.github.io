(async () => {
  const body = document.getElementById('docBody');
  const topbar = document.querySelector('.topbar');
  const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
  const synth = window.speechSynthesis;
  const hasSpeech = Boolean(synth && typeof SpeechSynthesisUtterance !== 'undefined');
  const pageEdit = document.querySelector('.doc-toolbar .edit-link[href]');
  const pagePrint = document.querySelector('.doc-toolbar [data-action="print"]');
  const EDIT_PREFIX = 'coop-answer-edit:v1:';
  const MOVE_PREFIX = 'coop-section-moves:v1';
  const ORDER_PREFIX = 'coop-section-order:v1:';
  const GLOSSARY_PREFIX = 'coop-glossary:v1';
  const GLOSSARY_SEED = [
    { term: 'Commercial awareness', definition: 'Understanding how an organisation creates value, controls cost, serves customers and responds to its market.', cue: 'Business model → costs → customers → decisions.' },
    { term: 'Correlation', definition: 'A measure of the strength and direction of association between two variables.', cue: 'Association, not causation.' },
    { term: 'Discounting', definition: 'Converting future cash flows into an equivalent value today using a discount rate.', cue: 'Future cash → rate → today.' },
    { term: 'Expected value', definition: 'The probability-weighted average outcome of a random variable.', cue: 'Outcome × probability, then add.' },
    { term: 'Model assumption', definition: 'A condition accepted as part of a model so that the problem can be analysed.', cue: 'State it → justify it → test sensitivity.' },
    { term: 'Numerical method', definition: 'A computational procedure used to approximate a mathematical solution when an exact method is impractical or unavailable.', cue: 'Approximate → iterate → check error.' },
    { term: 'Operations research', definition: 'The use of mathematical models and analytical methods to improve decisions about complex systems and limited resources.', cue: 'Model → constraints → optimise.' },
    { term: 'Optimisation', definition: 'Finding the best feasible value of an objective subject to stated constraints.', cue: 'Objective → constraints → best feasible solution.' },
    { term: 'Outlier', definition: 'An observation that lies unusually far from the rest of a dataset and may warrant investigation.', cue: 'Spot → investigate → decide treatment.' },
    { term: 'Present value', definition: 'The current worth of a future cash flow after discounting for time and required return.', cue: 'Future value ÷ growth factor.' },
    { term: 'Regression', definition: 'A statistical method for modelling the relationship between a response variable and one or more explanatory variables.', cue: 'Relationship → estimate → interpret.' },
    { term: 'Robustness', definition: 'The extent to which a result remains reliable when assumptions, inputs or conditions change.', cue: 'Change inputs → does the conclusion hold?' },
    { term: 'Sensitivity analysis', definition: 'Testing how changes in model inputs or assumptions affect the resulting output.', cue: 'Vary input → observe output.' },
    { term: 'Variance', definition: 'A measure of how widely values are dispersed around their mean.', cue: 'Distance from mean, squared and averaged.' }

    ,{ term: 'Asset management', definition: 'Managing an aircraft through its lease life to protect value, control risk and support commercial returns.', cue: 'Aircraft condition + lease compliance + value.' }
    ,{ term: 'Aircraft leasing', definition: 'Providing an aircraft to an airline for an agreed period in return for lease payments under a contract.', cue: 'Asset owner → airline user → lease rent.' }
    ,{ term: 'Lessor', definition: 'The owner or financing party that leases an aircraft to an airline.', cue: 'Lessor owns; lessee operates.' }
    ,{ term: 'Lessee', definition: 'The airline or operator that uses an aircraft under a lease agreement.', cue: 'Lessee operates; lessor owns.' }
    ,{ term: 'Lease agreement', definition: 'The contract setting out rent, term, maintenance, reporting, insurance, return conditions and other obligations.', cue: 'The rules governing the lease.' }
    ,{ term: 'Residual value', definition: 'The estimated value of an aircraft at the end of a lease or investment period.', cue: 'What is the aircraft worth at the end?' }
    ,{ term: 'Maintenance reserve', definition: 'Payments linked to aircraft or engine usage that help fund major future maintenance events.', cue: 'Usage today → maintenance funding later.' }
    ,{ term: 'Utilisation', definition: 'How intensively an aircraft is used, commonly measured by flight hours and flight cycles.', cue: 'Hours + cycles.' }
    ,{ term: 'Flight cycle', definition: 'One take-off and one landing; an important measure of structural and component usage.', cue: 'Take-off + landing = one cycle.' }
    ,{ term: 'Airframe', definition: 'The main physical structure of an aircraft excluding engines and many removable systems.', cue: 'The aircraft structure itself.' }
    ,{ term: 'Turboprop', definition: 'A gas-turbine engine that drives a propeller, well suited to efficient short regional routes.', cue: 'Turbine power → propeller.' }
    ,{ term: 'Regional aviation', definition: 'Air transport connecting smaller cities and communities, usually over shorter routes with smaller aircraft.', cue: 'Shorter routes + smaller markets.' }
    ,{ term: 'ATR 42', definition: 'A smaller twin-engine regional turboprop in the ATR family, typically used on lower-demand short routes.', cue: 'Smaller ATR.' }
    ,{ term: 'ATR 72', definition: 'The larger twin-engine regional turboprop in the ATR family, offering more seats than the ATR 42.', cue: 'Larger ATR.' }
    ,{ term: 'ATR 600 series', definition: 'The current-generation ATR family with updated avionics, cabin and operating improvements over earlier variants.', cue: 'Modern ATR generation.' }
    ,{ term: 'Avionics', definition: 'The electronic systems used for aircraft communication, navigation, monitoring and flight control support.', cue: 'Aircraft electronics.' }
    ,{ term: 'Delivery slot', definition: 'A reserved position in an aircraft manufacturer’s future production and delivery schedule.', cue: 'Place in the production queue.' }
    ,{ term: 'Purchase option', definition: 'A contractual right, but not usually an obligation, to purchase an aircraft or take a future delivery under agreed terms.', cue: 'Right, not obligation.' }
    ,{ term: 'Option', definition: 'A contractual right that gives flexibility to act later without the same obligation as a firm commitment.', cue: 'Flexibility has value.' }
    ,{ term: 'Firm order', definition: 'A binding commitment to purchase specified aircraft, subject to the terms of the purchase agreement.', cue: 'Committed aircraft order.' }
    ,{ term: 'OEM', definition: 'Original Equipment Manufacturer; the company that manufactures the aircraft or major equipment.', cue: 'The manufacturer.' }
    ,{ term: 'Power BI', definition: 'Microsoft software for connecting, modelling and visualising data in interactive reports and dashboards.', cue: 'Data → model → visual report.' }
    ,{ term: 'Dashboard', definition: 'A visual display that brings key measures and trends together for monitoring and decision-making.', cue: 'Important information at a glance.' }
    ,{ term: 'KPI', definition: 'Key Performance Indicator; a measure used to track performance against an important objective.', cue: 'A measure that matters.' }
    ,{ term: 'Data validation', definition: 'Checking that data is complete, sensible, correctly formatted and consistent before it is used.', cue: 'Is the data fit to use?' }
    ,{ term: 'Reconciliation', definition: 'Comparing two records or datasets and resolving differences so that they agree.', cue: 'Compare → investigate → match.' }
    ,{ term: 'Billing', definition: 'The process of calculating, issuing and tracking amounts due from customers under contractual terms.', cue: 'What is due, why and when.' }
    ,{ term: 'Accrual', definition: 'Recognising income or expense in the period it is earned or incurred rather than when cash moves.', cue: 'Economic period, not cash date.' }
    ,{ term: 'Cash flow', definition: 'The movement of cash into and out of a business or investment over time.', cue: 'Cash in minus cash out over time.' }
    ,{ term: 'Discount rate', definition: 'The rate used to convert future cash flows into present value, reflecting time and required return or risk.', cue: 'Rate used to bring future cash back to today.' }
    ,{ term: 'Net present value', definition: 'The present value of expected future cash inflows minus the present value of cash outflows.', cue: 'Discounted inflows − discounted outflows.' }
    ,{ term: 'NPV', definition: 'Net present value; the value today of future net cash flows after discounting.', cue: 'Present value of the net cash flows.' }
    ,{ term: 'Internal rate of return', definition: 'The discount rate at which an investment’s net present value equals zero.', cue: 'The project’s break-even discount rate.' }
    ,{ term: 'IRR', definition: 'Internal rate of return; the discount rate that makes net present value equal to zero.', cue: 'NPV = 0.' }
    ,{ term: 'Credit risk', definition: 'The risk that a counterparty will fail to make payments or meet financial obligations.', cue: 'Will the counterparty pay?' }
    ,{ term: 'Counterparty', definition: 'The other party to a contract or financial transaction.', cue: 'Who is on the other side of the deal?' }
    ,{ term: 'Default', definition: 'Failure to meet a contractual obligation, such as making a required payment.', cue: 'Contractual obligation not met.' }
    ,{ term: 'Covenant', definition: 'A contractual promise or restriction that a party must comply with during an agreement.', cue: 'Ongoing contractual rule.' }
    ,{ term: 'Sanctions', definition: 'Legal restrictions imposed by governments or international bodies on specified countries, organisations, individuals or transactions.', cue: 'Legal restrictions on dealing.' }
    ,{ term: 'Geopolitical risk', definition: 'Risk arising from political conflict, sanctions, war, trade restrictions or international instability.', cue: 'Politics affecting assets and contracts.' }
    ,{ term: 'Liquidity', definition: 'The ability to meet cash obligations when due, or how easily an asset can be converted to cash without a large loss in value.', cue: 'Access to cash.' }
    ,{ term: 'Depreciation', definition: 'The accounting allocation of an asset’s cost over its useful life.', cue: 'Cost spread over useful life.' }
    ,{ term: 'Impairment', definition: 'An accounting reduction in an asset’s carrying value when it is no longer expected to recover that amount.', cue: 'Book value reduced after loss in recoverability.' }
    ,{ term: 'Carrying value', definition: 'The value at which an asset is recorded in the accounts after depreciation and other adjustments.', cue: 'Accounting book value.' }
    ,{ term: 'Yield', definition: 'A return measure that relates income or cash flow to the value or cost of an investment.', cue: 'Return relative to value.' }
    ,{ term: 'Portfolio', definition: 'A collection of assets or investments managed together.', cue: 'Group of assets.' }
    ,{ term: 'Diversification', definition: 'Spreading exposure across different assets, customers or markets to reduce concentration risk.', cue: 'Do not rely on one exposure.' }
    ,{ term: 'Concentration risk', definition: 'Risk created by having too much exposure to one customer, market, aircraft type or other factor.', cue: 'Too much in one place.' }
    ,{ term: 'Scenario analysis', definition: 'Testing how outcomes change under different plausible combinations of future conditions.', cue: 'What happens under different futures?' }
    ,{ term: 'Forecast', definition: 'An estimate of a future value or outcome based on available data, assumptions and a chosen method.', cue: 'Evidence-based estimate of what may happen.' }
    ,{ term: 'Time series', definition: 'Data recorded in time order, often analysed for trend, seasonality and forecasting.', cue: 'Values indexed by time.' }
    ,{ term: 'R-squared', definition: 'A regression measure describing the proportion of variation in the response explained by the model.', cue: 'How much variation the model explains.' }
    ,{ term: 'p-value', definition: 'A probability used in hypothesis testing to assess how incompatible observed data are with a null hypothesis.', cue: 'Evidence against the null, not effect size.' }
    ,{ term: 'Standard deviation', definition: 'A measure of typical spread around the mean, expressed in the same units as the data.', cue: 'Typical distance from the mean.' }
    ,{ term: 'API', definition: 'Application Programming Interface; a defined way for software systems to exchange data or functionality.', cue: 'Software talking to software.' }
    ,{ term: 'CSV', definition: 'Comma-separated values; a simple text format for storing tabular data.', cue: 'Rows and columns in text form.' }
    ,{ term: 'Database', definition: 'A structured system for storing, organising and retrieving data.', cue: 'Persistent organised data store.' }
    ,{ term: 'Automation', definition: 'Using software or defined processes to perform repetitive tasks with less manual intervention.', cue: 'Repeatable task done automatically.' }
    ,{ term: 'Process improvement', definition: 'A structured effort to make a workflow more accurate, efficient, reliable or easier to operate.', cue: 'Understand → improve → measure.' }
    ,{ term: 'AVP', definition: 'Assistant Vice President; a management title commonly used in financial services and aircraft leasing organisations.', cue: 'Assistant Vice President.' }
    ,{ term: 'EVP', definition: 'Executive Vice President; a senior executive title above vice-president level in many organisations.', cue: 'Executive Vice President.' }
  ];

  // Aircraft leasing entries feed both the inline Education layer and the A–Z glossary.
  const AERCAP_GLOSSARY_SEED = [
    { term: 'Lessor', definition: 'The company that owns an aircraft and leases it to an airline.', why: 'It receives rent but must preserve the aircraft’s value across customers and lease transitions.' },
    { term: 'Lessee', definition: 'The airline or operator that leases, flies and maintains an aircraft it does not own.', why: 'Its payments, use and return obligations determine much of the owner’s risk.' },
    { term: 'Utilisation', definition: 'How intensively an airline flies its aircraft, often tracked through flight hours and flight cycles.', why: 'It determines PBH rent and many maintenance-reserve payments.' },
    { term: 'OEM', definition: 'Original Equipment Manufacturer; the maker of an aircraft or major component, such as Airbus, Boeing or ATR.', why: 'Production slots, support and fleet demand shape what a lessor can buy and place.' },
    { term: 'Credit risk', definition: 'The risk that an airline customer will fail to pay rent or meet its lease obligations.', why: 'Lease protections and an aircraft that can be remarketed limit the lessor’s exposure.' },
    { term: 'Power-by-the-Hour', definition: 'A lease arrangement in which rent during an initial period depends on how much the airline flies the aircraft; it may later revert to fixed rent.', why: 'AerCap used PBH during Covid to accommodate uncertain flying while protecting later lease rates.' },
    { term: 'PBH', definition: 'Power-by-the-Hour: usage-linked rent for an initial period of an aircraft lease.', why: 'Cash from PBH and straight-line accounting revenue can move in different directions.' },
    { term: 'Lease rate', definition: 'The rent payable by an airline for an aircraft under its lease.', why: 'Contracted rent, aircraft condition and financing costs all affect a lessor’s return.' },
    { term: 'Fixed-rate', definition: 'A lease rent or borrowing rate set for a stated period instead of moving with a market rate.', why: 'Fixed lease income works best when the lessor also manages exposure to changing funding costs.' },
    { term: 'Straight-line rental', definition: 'Recognition of fixed contractual lease revenue evenly over the lease term, even when cash payments vary by year.', why: 'It explains why a PBH contract can show an accounting headwind while cash collections rise.' },
    { term: 'Maintenance reserves', definition: 'Usage-linked cash payments by an airline to the aircraft owner to help fund major future maintenance.', why: 'The lessor owns the asset and needs protection as the airline consumes maintenance life.' },
    { term: 'Maintenance reserve', definition: 'A usage-linked payment an airline makes to the aircraft owner towards major future maintenance.', why: 'The lessor needs protection as the operator consumes the aircraft’s maintenance life.' },
    { term: 'Maintenance Rights Asset', definition: 'An accounting asset recognised when an acquired aircraft lease promises better maintenance condition at redelivery than at purchase.', why: 'Acquisition accounting separates that right from the aircraft’s metal value and amortises it on a different timetable.' },
    { term: 'MRA', definition: 'Maintenance Rights Asset: the value of a maintenance-condition right recognised when an aircraft is bought with a lease attached.', why: 'An MRA affects reported asset value and profit after a portfolio acquisition.' },
    { term: 'Shop visit', definition: 'A major scheduled maintenance event, especially for an aircraft engine.', why: 'Its timing affects cash reimbursement and maintenance reserve liabilities.' },
    { term: 'Redelivery condition', definition: 'The aircraft’s required maintenance and technical state when an airline returns it at lease end.', why: 'It protects the owner’s ability to place or sell the aircraft again.' },
    { term: 'End-of-lease', definition: 'The point when an aircraft lease expires and the airline returns the aircraft or agrees an extension.', why: 'Return condition and compensation are settled as ownership and operation separate again.' },
    { term: 'EOL', definition: 'End of lease; EOL compensation pays for a maintenance shortfall when the airline returns the aircraft.', why: 'It is an alternative to collecting monthly maintenance reserves.' },
    { term: 'Flight hours', definition: 'Hours flown by the aircraft, used to measure utilisation and charge some maintenance reserves.', why: 'Engine maintenance is often tied to operating hours.' },
    { term: 'Flight cycles', definition: 'Take-off and landing cycles, another measure of aircraft use for maintenance and reserve charges.', why: 'A short route can produce many cycles even with relatively few flight hours.' },
    { term: 'Return condition', definition: 'The physical and maintenance state required under the lease when the aircraft is handed back.', why: 'A shortfall can lead to remedial work or cash compensation.' },
    { term: 'Remarketing', definition: 'Finding a new airline customer or buyer for an aircraft after a lease or sale decision.', why: 'An in-demand type with many operators gives the asset manager more placement options.' },
    { term: 'Security deposit', definition: 'Cash or other security an airline provides against lease obligations or default.', why: 'It is one contractual protection for the lessor if collections or return obligations fail.' },
    { term: 'P/E', definition: 'Price-to-earnings: a company’s market value divided by annual earnings.', why: 'AerCap argues it can better reflect predictable leasing earnings than book value alone.' },
    { term: 'P/B', definition: 'Price-to-book: market value divided by the accounting value of shareholders’ equity.', why: 'Different aircraft purchase prices can make identical fleets show different book values.' },
    { term: 'Book value', definition: 'The value recorded in the accounts after acquisition cost, depreciation and other accounting adjustments.', why: 'For lessors, book value can differ materially from the current market value of a fleet.' },
    { term: 'Return on equity', definition: 'Annual profit divided by shareholders’ equity.', why: 'The same earnings produce a higher ROE when an equivalent fleet was bought for less.' },
    { term: 'Leverage', definition: 'Debt used relative to equity to finance a lessor’s aircraft portfolio.', why: 'It can raise equity returns while increasing pressure on liquidity and bondholders.' },
    { term: 'Liquidity', definition: 'Cash and available funding to pay obligations when due.', why: 'Aircraft purchases, debt maturities and maintenance needs cannot wait for favourable markets.' },
    { term: 'Secured debt', definition: 'Borrowing backed by specified aircraft or other pledged assets.', why: 'It is one source in a lessor’s funding mix.' },
    { term: 'Unsecured debt', definition: 'Borrowing supported by the lessor’s credit without pledging a particular aircraft.', why: 'Access to unsecured bonds adds flexibility across the fleet.' },
    { term: 'Asset-liability matching', definition: 'Aligning the timing and interest-rate structure of lease income with the debt used to fund the aircraft.', why: 'It reduces the chance that financing costs rise sharply against fixed lease rent.' },
    { term: 'Duration risk', definition: 'Risk that assets and funding mature or reprice on different timetables.', why: 'A long fixed lease funded by short floating debt exposes the owner to refinancing and rate changes.' },
    { term: 'Hedge', definition: 'An arrangement used to reduce exposure to a financial risk such as changing interest rates.', why: 'Lessors use hedges so floating debt does not undermine predictable lease cash flows.' },
    { term: 'Swap', definition: 'A contract that can exchange floating interest-rate payments for fixed-rate payments.', why: 'It can turn variable borrowing costs into more predictable funding costs.' },
    { term: 'Interest-rate cap', definition: 'A contract limiting how high a floating borrowing rate can rise.', why: 'It protects the lessor from extreme increases in financing cost.' }
  ];

  const cleanText = value => (value || '')
    .replace(/\s+/g, ' ')
    .replace(/^[\s,.;:!?–—-]+|[\s,.;:!?–—-]+$/g, '')
    .trim();

  const normalisePath = value => {
    try {
      return new URL(value, location.href).pathname.replace(/\/+$/, '') || '/';
    } catch (_) {
      return '/';
    }
  };

  const splitQuestionHeading = value => {
    const text = cleanText(value);
    if (!text) return null;
    const delimiter = text.includes('||') ? '||' : (text.includes('|') ? '|' : '');
    if (!delimiter) return null;
    const pipeIndex = text.indexOf(delimiter);
    const handle = cleanText(text.slice(0, pipeIndex));
    const question = cleanText(text.slice(pipeIndex + delimiter.length));
    return handle && question ? {
      handle,
      question,
      entryType: 'section'
    } : null;
  };

  const currentPath = location.pathname.replace(/\/+$/, '') || '/';

  // Keep page names and ordering fresh even while GitHub Pages/CDN caches an
  // older HTML page. nav.json is rebuilt from the current page titles/orders,
  // then fetched with a cache-busting query on every page load.
  const syncFreshNavigation = async () => {
    const nav = document.getElementById('mainNav');
    if (!nav) return;
    try {
      const rootHref = document.querySelector('.brand')?.href || new URL('/coop/', location.origin).href;
      const manifestUrl = new URL('nav.json', rootHref);
      manifestUrl.searchParams.set('_', Date.now().toString());
      const response = await fetch(manifestUrl.href, { cache: 'no-store' });
      if (!response.ok) return;
      const entries = await response.json();
      if (!Array.isArray(entries) || !entries.length) return;

      const existing = new Map(
        Array.from(nav.querySelectorAll(':scope > .navitem')).map(item => {
          const label = item.querySelector(':scope > .navlabel[href]');
          return [label ? normalisePath(label.href) : '', item];
        })
      );

      const fragment = document.createDocumentFragment();
      entries.forEach(entry => {
        const href = new URL(entry.url, location.origin).href;
        const path = normalisePath(href);
        let item = existing.get(path);
        if (!item) {
          item = document.createElement('div');
          item.className = 'navitem nav-dynamic';
          item.dataset.questionMenu = '';
          item.innerHTML = '<a class="navlabel"><span></span></a><div class="dropmenu"></div>';
        }
        const label = item.querySelector(':scope > .navlabel');
        const span = label?.querySelector('span');
        const menuTitle = entry.title || '';
        const pageTitle = entry.page_title || entry.title || '';
        if (label) label.href = href;
        if (span) span.textContent = menuTitle;
        else if (label) label.textContent = menuTitle;
        fragment.appendChild(item);

        if (path === currentPath) {
          const h1 = document.querySelector('.doc-paper > h1');
          if (h1 && pageTitle) h1.textContent = pageTitle;
          if (pageTitle) document.title = pageTitle + ' | UL Co-op Interview';
        }
      });
      nav.replaceChildren(fragment);
    } catch (_) {
      // If the manifest is temporarily unavailable, leave the server-rendered
      // navigation untouched.
    }
  };

  await syncFreshNavigation();

  /* -----------------------------------------------------------------------
     Navigation: same open/pin behaviour as the Education site.
     ----------------------------------------------------------------------- */
  const closeNavMenus = (except = null) => {
    document.querySelectorAll('.navitem.is-open').forEach(item => {
      if (item === except) return;
      item.classList.remove('is-open');
      item.querySelectorAll('[data-nav-toggle]').forEach(button => button.setAttribute('aria-expanded', 'false'));
    });
  };

  const closeMobileNav = () => {
    if (!topbar || !mobileNavToggle) return;
    topbar.classList.remove('nav-open');
    mobileNavToggle.setAttribute('aria-expanded', 'false');
    mobileNavToggle.setAttribute('aria-label', 'Open main navigation');
    closeNavMenus();
  };

  mobileNavToggle?.addEventListener('click', event => {
    event.preventDefault();
    event.stopPropagation();
    const willOpen = !topbar.classList.contains('nav-open');
    topbar.classList.toggle('nav-open', willOpen);
    mobileNavToggle.setAttribute('aria-expanded', String(willOpen));
    mobileNavToggle.setAttribute('aria-label', willOpen ? 'Close main navigation' : 'Open main navigation');
    if (!willOpen) closeNavMenus();
  });

  document.querySelectorAll('[data-nav-toggle]').forEach(button => {
    button.addEventListener('click', event => {
      event.preventDefault();
      event.stopPropagation();
      const item = button.closest('.navitem');
      if (!item) return;
      const willOpen = !item.classList.contains('is-open');
      closeNavMenus(item);
      item.classList.toggle('is-open', willOpen);
      button.setAttribute('aria-expanded', String(willOpen));
    });
  });

  // Match the Education site: on desktop, clicking a top menu item opens the
  // whole page immediately. On smaller screens, the first tap opens its
  // section menu and a second tap follows the page link.
  document.querySelectorAll('.navitem > .navlabel').forEach(label => {
    label.addEventListener('click', event => {
      if (window.innerWidth > 1500) return;
      const item = label.closest('.navitem');
      const menu = item?.querySelector(':scope > .dropmenu');
      if (!item || !menu || !item.classList.contains('has-submenu') || item.classList.contains('is-open')) return;
      event.preventDefault();
      event.stopPropagation();
      closeNavMenus(item);
      item.classList.add('is-open');
    });
  });

  document.addEventListener('click', event => {
    if (!event.target.closest('.topbar')) closeNavMenus();
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && topbar?.classList.contains('nav-open')) closeMobileNav();
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 1500 && topbar?.classList.contains('nav-open')) closeMobileNav();
  });

  document.querySelectorAll('.navitem > .navlabel[href]').forEach(label => {
    const isCurrent = normalisePath(label.href) === currentPath;
    const item = label.closest('.navitem');
    item?.classList.toggle('is-current', isCurrent);
    if (isCurrent) label.setAttribute('aria-current', 'page');
    else label.removeAttribute('aria-current');
  });

  const headingInfo = heading => {
    if (!heading) return null;
    const handle = cleanText(heading.dataset?.menuLabel);
    const question = cleanText(heading.dataset?.questionText);
    if (handle && question) return { handle, question, id: heading.id };

    const raw = cleanText(heading.textContent);
    if (!raw) return null;

    const parsed = splitQuestionHeading(raw);
    if (parsed) return { ...parsed, id: heading.id };

    // Legacy H2: no pipe means the same text is both the menu handle
    // and the visible section title.
    return { handle: raw, question: raw, id: heading.id };
  };

  const populateQuestionMenu = (item, headings, pageUrl) => {
    const menu = item.querySelector(':scope > .dropmenu');
    if (!menu) return;
    const questions = headings.map(headingInfo).filter(Boolean);
    menu.replaceChildren();
    item.classList.toggle('has-submenu', questions.length > 0);
    if (!questions.length) return;

    questions.forEach((question, index) => {
      const link = document.createElement('a');
      const id = question.id || `question-${index + 1}`;
      link.href = `${pageUrl.pathname}${pageUrl.search}#${id}`;
      link.textContent = question.handle;
      link.title = question.question;
      link.addEventListener('click', () => {
        item.classList.remove('is-open');
        item.querySelector('[data-nav-toggle]')?.setAttribute('aria-expanded', 'false');
        if (window.innerWidth <= 1500) topbar?.classList.remove('nav-open');
      });
      menu.appendChild(link);
    });
  };

  const syncQuestionMenu = async item => {
    const label = item.querySelector(':scope > .navlabel[href]');
    const menu = item.querySelector(':scope > .dropmenu');
    if (!label || !menu) return;
    const pageUrl = new URL(label.href, location.href);
    const targetPath = normalisePath(pageUrl.href);

    try {
      if (targetPath === currentPath && body) {
        const headings = Array.from(body.querySelectorAll(':scope > h2')).filter(heading => headingInfo(heading));
        populateQuestionMenu(item, headings, pageUrl);
        return;
      }

      const response = await fetch(pageUrl.href, { cache: 'no-store' });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const html = await response.text();
      const parsed = new DOMParser().parseFromString(html, 'text/html');
      const headings = Array.from(parsed.querySelectorAll('#docBody > h2')).filter(heading => headingInfo(heading));
      populateQuestionMenu(item, headings, pageUrl);
    } catch (_) {
      menu.replaceChildren();
      item.classList.remove('has-submenu');
    }
  };

  document.querySelectorAll('[data-question-menu]').forEach(syncQuestionMenu);

  pagePrint?.addEventListener('click', () => window.print());

  /* -----------------------------------------------------------------------
     Glossary — available from every page and automatically alphabetical.
     User-added entries are stored locally in this browser.
     ----------------------------------------------------------------------- */
  const readGlossary = () => {
    let custom = [];
    try {
      custom = JSON.parse(localStorage.getItem(GLOSSARY_PREFIX) || '[]');
      if (!Array.isArray(custom)) custom = [];
    } catch (_) {
      custom = [];
    }
    const merged = new Map();
    [...GLOSSARY_SEED, ...AERCAP_GLOSSARY_SEED].forEach(item => merged.set(item.term.toLowerCase(), { ...item, builtIn: true }));
    custom.forEach(item => {
      if (!item?.term) return;
      merged.set(cleanText(item.term).toLowerCase(), { ...item, builtIn: false });
    });
    return Array.from(merged.values()).sort((a, b) => a.term.localeCompare(b.term, 'en', { sensitivity: 'base' }));
  };

  const writeCustomGlossary = items => {
    localStorage.setItem(GLOSSARY_PREFIX, JSON.stringify(items));
    renderGlossaryPage();
  };

  const customGlossary = () => readGlossary().filter(item => !item.builtIn);

  const glossaryDialog = document.createElement('div');
  glossaryDialog.className = 'glossary-dialog-overlay';
  glossaryDialog.hidden = true;
  glossaryDialog.innerHTML = `
    <section class="glossary-dialog" role="dialog" aria-modal="true" aria-label="Glossary term">
      <button type="button" class="glossary-dialog-close" aria-label="Close glossary">×</button>
      <div class="glossary-dialog-body"></div>
    </section>
  `;
  document.body.appendChild(glossaryDialog);
  const glossaryDialogBody = glossaryDialog.querySelector('.glossary-dialog-body');

  const closeGlossaryDialog = () => {
    glossaryDialog.hidden = true;
    glossaryDialogBody.replaceChildren();
  };

  glossaryDialog.addEventListener('click', event => {
    if (event.target === glossaryDialog || event.target.closest('.glossary-dialog-close')) closeGlossaryDialog();
  });

  const lookupDefinition = async raw => {
    const term = cleanText(raw);
    if (!term) return '';
    const existing = readGlossary().find(item => item.term.toLowerCase() === term.toLowerCase());
    if (existing) return existing.definition || '';
    try {
      if (!term.includes(' ')) {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(term)}`);
        if (response.ok) {
          const data = await response.json();
          const found = data?.[0]?.meanings?.flatMap(m => m.definitions || [])?.find(d => d.definition);
          if (found?.definition) return found.definition;
        }
      }
    } catch (_) {}
    try {
      const response = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(term)}`);
      if (response.ok) {
        const data = await response.json();
        if (data?.extract) return data.extract.split(/(?<=[.!?])\s+/).slice(0, 2).join(' ');
      }
    } catch (_) {}
    return '';
  };

  const openGlossaryTerm = async rawTerm => {
    const term = cleanText(rawTerm);
    if (!term) {
      const page = new URL('glossary.html', document.querySelector('.brand')?.href || location.href);
      location.href = page.href;
      return;
    }

    glossaryDialog.hidden = false;
    glossaryDialogBody.innerHTML = '<p class="glossary-looking-up">Looking up definition…</p>';

    const existing = readGlossary().find(item => item.term.toLowerCase() === term.toLowerCase());
    const suggested = existing?.definition || await lookupDefinition(term);

    const form = document.createElement('form');
    form.className = 'glossary-term-form';

    const h2 = document.createElement('h2');
    h2.textContent = existing ? term : 'Add to Glossary';

    const termLabel = document.createElement('label');
    termLabel.textContent = 'Term';
    const termInput = document.createElement('input');
    termInput.type = 'text';
    termInput.value = existing?.term || term;

    const defLabel = document.createElement('label');
    defLabel.textContent = 'Plain-English meaning';
    const defInput = document.createElement('textarea');
    defInput.rows = 5;
    defInput.value = suggested || '';

    const cueLabel = document.createElement('label');
    cueLabel.textContent = 'Recall cue';
    const cueInput = document.createElement('input');
    cueInput.type = 'text';
    cueInput.value = existing?.cue || '';

    const actions = document.createElement('div');
    actions.className = 'glossary-term-actions';

    const save = document.createElement('button');
    save.type = 'submit';
    save.textContent = existing?.builtIn ? 'Save my version' : 'Save';

    const view = document.createElement('a');
    view.href = new URL('glossary.html', document.querySelector('.brand')?.href || location.href).href;
    view.textContent = 'Open A–Z Glossary';

    actions.append(save, view);
    form.append(h2, termLabel, termInput, defLabel, defInput, cueLabel, cueInput, actions);

    form.addEventListener('submit', event => {
      event.preventDefault();
      const item = {
        term: cleanText(termInput.value),
        definition: cleanText(defInput.value),
        cue: cleanText(cueInput.value)
      };
      if (!item.term || !item.definition) return;
      const items = customGlossary().filter(x => x.term.toLowerCase() !== item.term.toLowerCase());
      items.push(item);
      writeCustomGlossary(items);
      save.textContent = 'Saved ✓';
      window.setTimeout(closeGlossaryDialog, 500);
    });

    glossaryDialogBody.replaceChildren(form);
    defInput.focus();
    defInput.setSelectionRange(defInput.value.length, defInput.value.length);
  };

  const renderGlossaryPage = () => {
    const app = document.getElementById('glossary-app');
    if (!app) return;

    const entries = readGlossary();
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const present = new Set(entries.map(item => item.term[0]?.toUpperCase()).filter(Boolean));

    const search = document.createElement('input');
    search.type = 'search';
    search.className = 'glossary-search';
    search.placeholder = 'Search glossary…';
    search.setAttribute('aria-label', 'Search glossary');

    const alphabet = document.createElement('nav');
    alphabet.className = 'glossary-alphabet';
    alphabet.setAttribute('aria-label', 'Glossary alphabet');

    letters.forEach(letter => {
      const button = document.createElement('button');
      button.type = 'button';
      button.textContent = letter;
      button.disabled = !present.has(letter);
      button.addEventListener('click', () => document.getElementById(`glossary-${letter}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
      alphabet.appendChild(button);
    });

    const list = document.createElement('div');
    list.className = 'glossary-az';

    const draw = query => {
      list.replaceChildren();
      const q = cleanText(query).toLowerCase();
      const filtered = entries.filter(item =>
        !q || item.term.toLowerCase().includes(q) || (item.definition || '').toLowerCase().includes(q)
      );
      let current = '';
      filtered.forEach(item => {
        const letter = item.term[0]?.toUpperCase() || '#';
        if (letter !== current) {
          current = letter;
          const heading = document.createElement('h2');
          heading.id = `glossary-${letter}`;
          heading.className = 'glossary-letter';
          heading.textContent = letter;
          list.appendChild(heading);
        }

        const card = document.createElement('details');
        card.className = 'glossary-entry';
        const summary = document.createElement('summary');
        summary.textContent = item.term;
        const p = document.createElement('p');
        p.textContent = item.definition;
        card.append(summary, p);

        if (item.cue) {
          const cue = document.createElement('p');
          cue.className = 'recall';
          cue.innerHTML = '<strong>Recall cue:</strong> ';
          cue.append(document.createTextNode(item.cue));
          card.appendChild(cue);
        }
        if (item.why) {
          const why = document.createElement('p');
          why.className = 'recall';
          why.innerHTML = '<strong>Why it matters:</strong> ';
          why.append(document.createTextNode(item.why));
          card.appendChild(why);
        }

        const tools = document.createElement('div');
        tools.className = 'glossary-entry-tools';
        const edit = document.createElement('button');
        edit.type = 'button';
        edit.textContent = item.builtIn ? 'Adapt' : 'Edit';
        edit.addEventListener('click', () => openGlossaryTerm(item.term));
        tools.appendChild(edit);

        if (!item.builtIn) {
          const remove = document.createElement('button');
          remove.type = 'button';
          remove.textContent = 'Remove';
          remove.addEventListener('click', () => {
            const items = customGlossary().filter(x => x.term.toLowerCase() !== item.term.toLowerCase());
            writeCustomGlossary(items);
          });
          tools.appendChild(remove);
        }
        card.appendChild(tools);
        list.appendChild(card);
      });

      if (!filtered.length) {
        const empty = document.createElement('p');
        empty.className = 'glossary-empty';
        empty.textContent = 'No matching terms yet.';
        list.appendChild(empty);
      }
    };

    search.addEventListener('input', () => draw(search.value));
    app.replaceChildren(search, alphabet, list);
    draw('');
  };

  renderGlossaryPage();

  if (!body) return;

  const showGlossaryDefinition = rawTerm => {
    const term = cleanText(rawTerm);
    const item = readGlossary().find(entry => entry.term.toLowerCase() === term.toLowerCase());
    if (!item) return;
    glossaryDialog.hidden = false;
    const heading = document.createElement('h2');
    heading.textContent = item.term;
    const definition = document.createElement('p');
    definition.textContent = item.definition || '';
    glossaryDialogBody.replaceChildren(heading, definition);
    if (item.cue) {
      const cue = document.createElement('p');
      cue.className = 'recall';
      cue.innerHTML = '<strong>Recall cue:</strong> ';
      cue.append(document.createTextNode(item.cue));
      glossaryDialogBody.appendChild(cue);
    }
    if (item.why) {
      const why = document.createElement('p');
      why.className = 'recall';
      why.innerHTML = '<strong>Why it matters:</strong> ';
      why.append(document.createTextNode(item.why));
      glossaryDialogBody.appendChild(why);
    }
  };

  const linkKnownGlossaryTerms = (root, onTerm = showGlossaryDefinition) => {
    if (!root) return;
    const entries = readGlossary().filter(item => item.term && item.term.length > 1);
    const terms = entries.map(item => item.term).sort((a, b) => b.length - a.length);
    const escapeRegExp = value => value.replace(/[.*+?^$()|[\]\\]/g, '\\$&');
    const pattern = terms.map(escapeRegExp).join('|');
    if (!pattern) return;
    const matcher = new RegExp('\\b(' + pattern + ')\\b', 'gi');
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) {
      const node = walker.currentNode;
      const parent = node.parentElement;
      if (!parent || parent.closest('a,button,script,style,textarea,input,.glossary-term,h2') || (root === body && parent.closest('.aercap-beamer'))) continue;
      matcher.lastIndex = 0;
      if (matcher.test(node.nodeValue || '')) nodes.push(node);
    }
    nodes.forEach(node => {
      const value = node.nodeValue || '';
      const fragment = document.createDocumentFragment();
      let last = 0;
      matcher.lastIndex = 0;
      value.replace(matcher, (match, _group, offset) => {
        fragment.append(document.createTextNode(value.slice(last, offset)));
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'glossary-term';
        button.textContent = match;
        button.title = 'Show definition';
        button.addEventListener('click', event => {
          event.preventDefault();
          event.stopPropagation();
          onTerm(match);
        });
        fragment.appendChild(button);
        last = offset + match.length;
        return match;
      });
      fragment.append(document.createTextNode(value.slice(last)));
      node.replaceWith(fragment);
    });
  };

  window.coopEducationGlossary = { readGlossary, linkKnownGlossaryTerms };
  linkKnownGlossaryTerms(body);

  const sectionHeadings = () => Array.from(body.querySelectorAll(':scope > h2[data-section-heading]'));
  // Every top-level H2 is rehearsal-capable. Pipes only control the menu handle/title split.
  const practiceHeadings = () => sectionHeadings();

  const sourceNodesFor = heading => {
    const nodes = [];
    let node = heading.nextElementSibling;
    while (node && node.tagName !== 'H2') {
      nodes.push(node);
      node = node.nextElementSibling;
    }
    return nodes;
  };

  const sourceHeadingText = heading => cleanText(
    heading.dataset.sourceHeading || `${heading.dataset.menuLabel || ''} | ${heading.dataset.questionText || heading.textContent}`
  );

  const answerTextFor = heading => sourceNodesFor(heading)
    .filter(node => !node.matches?.('.answer-focus-chain'))
    .map(node => node.querySelector?.('.aercap-source')?.textContent || node.textContent || '')
    .join(' ')
    .replace(/\s+/g, ' ')
    .trim();

  const editKeyFor = heading => `${EDIT_PREFIX}${location.pathname}:${sourceHeadingText(heading).toLowerCase()}`;

  const applySavedToSource = (heading, html) => {
    const current = sourceNodesFor(heading);
    const template = document.createElement('template');
    template.innerHTML = html;
    const replacement = Array.from(template.content.childNodes);
    if (current.length) {
      const anchor = current[0];
      replacement.forEach(node => anchor.parentNode.insertBefore(node, anchor));
      current.forEach(node => node.remove());
    } else {
      replacement.forEach(node => heading.parentNode.insertBefore(node, heading.nextSibling));
    }
  };

  const sectionIdFor = heading => {
    if (!heading.dataset.sectionMoveId) {
      heading.dataset.sectionMoveId = `${normalisePath(location.pathname)}::${sourceHeadingText(heading).toLowerCase()}`;
    }
    return heading.dataset.sectionMoveId;
  };

  const sectionBlockFor = heading => [heading, ...sourceNodesFor(heading)];

  const readSectionMoves = () => {
    try {
      const value = JSON.parse(localStorage.getItem(MOVE_PREFIX) || '[]');
      return Array.isArray(value) ? value : [];
    } catch (_) {
      return [];
    }
  };

  const writeSectionMoves = moves => {
    localStorage.setItem(MOVE_PREFIX, JSON.stringify(moves));
  };

  const saveSectionOrder = () => {
    const order = sectionHeadings().map(sectionIdFor);
    localStorage.setItem(`${ORDER_PREFIX}${normalisePath(location.pathname)}`, JSON.stringify(order));
  };

  const restoreSectionOrder = () => {
    let saved = [];
    try {
      saved = JSON.parse(localStorage.getItem(`${ORDER_PREFIX}${normalisePath(location.pathname)}`) || '[]');
      if (!Array.isArray(saved)) saved = [];
    } catch (_) {
      saved = [];
    }
    if (!saved.length) return;

    const headings = sectionHeadings();
    const byId = new Map(headings.map(heading => [sectionIdFor(heading), heading]));
    const currentIds = headings.map(sectionIdFor);
    const desired = [
      ...saved.filter(id => byId.has(id)),
      ...currentIds.filter(id => !saved.includes(id))
    ];

    desired.forEach(id => {
      const heading = byId.get(id);
      if (!heading) return;
      sectionBlockFor(heading).forEach(node => body.appendChild(node));
    });
  };

  const restoreMovedSections = () => {
    const currentPath = normalisePath(location.pathname);
    const moves = readSectionMoves();

    // Remove any original/local copy that now belongs on another page.
    sectionHeadings().forEach(heading => {
      const id = sectionIdFor(heading);
      const move = moves.find(item => item?.id === id);
      if (move && normalisePath(move.to) !== currentPath) {
        sectionBlockFor(heading).forEach(node => node.remove());
      }
    });

    // Add sections moved onto this page. New arrivals default to the bottom.
    moves
      .filter(item => item?.id && normalisePath(item.to) === currentPath)
      .forEach(move => {
        const existing = sectionHeadings().find(heading => sectionIdFor(heading) === move.id);
        if (existing) {
          if (move.bodyHtml) applySavedToSource(existing, move.bodyHtml);
          return;
        }

        const template = document.createElement('template');
        template.innerHTML = `${move.headingHtml || ''}${move.bodyHtml || ''}`;
        Array.from(template.content.childNodes).forEach(node => body.appendChild(node));
      });

    restoreSectionOrder();
  };

  const moveSectionWithinPage = (heading, where) => {
    const headings = sectionHeadings();
    const index = headings.indexOf(heading);
    if (index < 0 || headings.length < 2) return false;

    let targetIndex = index;
    if (where === 'up') targetIndex = Math.max(0, index - 1);
    if (where === 'down') targetIndex = Math.min(headings.length - 1, index + 1);
    if (where === 'top') targetIndex = 0;
    if (where === 'bottom') targetIndex = headings.length - 1;
    if (targetIndex === index) return false;

    const block = sectionBlockFor(heading);
    if (targetIndex < index) {
      const target = headings[targetIndex];
      block.forEach(node => body.insertBefore(node, target));
    } else {
      const target = headings[targetIndex];
      const targetBlock = sectionBlockFor(target);
      const afterTarget = targetBlock[targetBlock.length - 1]?.nextSibling || null;
      block.forEach(node => body.insertBefore(node, afterTarget));
    }

    saveSectionOrder();
    return true;
  };

  const moveSectionToPage = (heading, destinationUrl) => {
    const destination = new URL(destinationUrl, location.href);
    const destinationPath = normalisePath(destination.pathname);
    const currentPath = normalisePath(location.pathname);
    if (destinationPath === currentPath) return;

    const id = sectionIdFor(heading);
    const headingClone = heading.cloneNode(true);
    headingClone.querySelectorAll?.('button,.cm-question-play').forEach(node => node.remove());
    headingClone.dataset.sectionMoveId = id;

    const answer = cloneAnswer(heading);
    const moves = readSectionMoves().filter(item => item?.id !== id);
    moves.push({
      id,
      from: currentPath,
      to: destinationPath,
      headingHtml: headingClone.outerHTML,
      bodyHtml: answer.innerHTML,
      movedAt: new Date().toISOString()
    });
    writeSectionMoves(moves);

    sectionBlockFor(heading).forEach(node => node.remove());
    saveSectionOrder();
    location.href = destination.href;
  };

  const populateMovePageSelect = async select => {
    try {
      const base = document.querySelector('.brand')?.href || location.href;
      const response = await fetch(new URL('nav.json', base), { cache: 'no-store' });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const pages = await response.json();
      const currentPath = normalisePath(location.pathname);

      pages.forEach(page => {
        if (!page?.url) return;
        const url = new URL(page.url, location.origin);
        if (normalisePath(url.pathname) === currentPath) return;
        const option = document.createElement('option');
        option.value = url.href;
        option.textContent = page.title || page.page_title || url.pathname;
        select.appendChild(option);
      });
    } catch (_) {
      const option = document.createElement('option');
      option.disabled = true;
      option.textContent = 'Pages unavailable';
      select.appendChild(option);
    }
  };

  const restoreSavedAnswers = () => {
    sectionHeadings().forEach(heading => {
      const saved = localStorage.getItem(editKeyFor(heading));
      if (saved) applySavedToSource(heading, saved);
    });
  };

  restoreMovedSections();
  restoreSavedAnswers();

  /* -----------------------------------------------------------------------
     Audio state shared by inline play, focus play and page Listen.
     ----------------------------------------------------------------------- */
  let activeAudioButton = null;
  let activeAudioTarget = null;
  let activeUtterance = null;

  const resetAudio = () => {
    if (synth) synth.cancel();
    activeAudioButton?.classList.remove('is-active', 'is-paused');
    activeAudioTarget?.classList.remove('cm-audio-speaking');
    activeAudioButton = null;
    activeAudioTarget = null;
    activeUtterance = null;
  };

  const speak = ({ text, button = null, target = null, rate = 0.92, restart = false }) => {
    if (!hasSpeech || !cleanText(text)) return;

    if (!restart && button && activeAudioButton === button && synth.speaking) {
      if (synth.paused) {
        synth.resume();
        button.classList.remove('is-paused');
      } else {
        synth.pause();
        button.classList.add('is-paused');
      }
      return;
    }

    resetAudio();
    activeAudioButton = button;
    activeAudioTarget = target;
    button?.classList.add('is-active');
    target?.classList.add('cm-audio-speaking');
    activeUtterance = new SpeechSynthesisUtterance(text);
    activeUtterance.lang = 'en-IE';
    activeUtterance.rate = rate;
    activeUtterance.onend = resetAudio;
    activeUtterance.onerror = resetAudio;
    synth.speak(activeUtterance);
  };

  const addInlinePlayButtons = () => {
    practiceHeadings().forEach(heading => {
      if (heading.querySelector(':scope > .cm-question-play')) return;
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'cm-question-play';
      button.setAttribute('aria-label', `Play question and answer: ${heading.dataset.questionText}`);
      button.title = 'Play question and answer · double-click to restart';
      const text = () => `${heading.dataset.questionText}. ${answerTextFor(heading)}`;
      button.addEventListener('click', event => {
        event.preventDefault();
        event.stopPropagation();
        speak({ text: text(), button, target: heading });
      });
      button.addEventListener('dblclick', event => {
        event.preventDefault();
        event.stopPropagation();
        speak({ text: text(), button, target: heading, restart: true });
      });
      heading.prepend(button);
    });
  };

  addInlinePlayButtons();

  const addSectionMoveMenus = () => {
    sectionHeadings().forEach(heading => {
      if (heading.querySelector(':scope > .section-move-menu')) return;
      const wrap = document.createElement('span');
      wrap.className = 'section-move-menu';
      const toggle = document.createElement('button');
      toggle.type = 'button';
      toggle.className = 'section-move-toggle';
      toggle.textContent = '⋮';
      toggle.title = 'Reorder this section';
      const menu = document.createElement('span');
      menu.className = 'section-move-actions';
      menu.hidden = true;

      [['↑ Up','up'], ['↓ Down','down'], ['⇧ Top','top'], ['⇩ Bottom','bottom']].forEach(pair => {
        const button = document.createElement('button');
        button.type = 'button';
        button.textContent = pair[0];
        button.addEventListener('click', event => {
          event.preventDefault();
          event.stopPropagation();
          if (moveSectionWithinPage(heading, pair[1])) {
            heading.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
          menu.hidden = true;
        });
        menu.appendChild(button);
      });

      toggle.addEventListener('click', event => {
        event.preventDefault();
        event.stopPropagation();
        menu.hidden = !menu.hidden;
      });

      wrap.append(toggle, menu);
      heading.appendChild(wrap);
    });
  };

  addSectionMoveMenus();

  /* -----------------------------------------------------------------------
     Focus answer overlay — clicking a question produces the same blocking,
     distraction-free rehearsal view as the Education site.
     ----------------------------------------------------------------------- */
  const overlay = document.createElement('div');
  overlay.className = 'answer-focus-overlay';
  overlay.hidden = true;
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-label', 'Focused interview answer');
  overlay.innerHTML = `
    <article class="answer-focus-card" tabindex="-1">
      <button class="answer-focus-close" type="button" data-focus-close aria-label="Close focused answer">×</button>
      <div class="answer-focus-content" data-focus-content></div>
    </article>
  `;
  document.body.appendChild(overlay);

  const focusCard = overlay.querySelector('.answer-focus-card');
  const focusContent = overlay.querySelector('[data-focus-content]');
  let lastTrigger = null;

  const cloneAnswer = heading => {
    const wrapper = document.createElement('div');
    wrapper.className = 'answer-focus-copy';
    const saved = localStorage.getItem(editKeyFor(heading));
    if (saved) {
      wrapper.innerHTML = saved;
      return wrapper;
    }
    sourceNodesFor(heading).forEach(node => {
      const educationSource = node.querySelector?.('.aercap-source');
      if (educationSource) {
        Array.from(educationSource.children).forEach(paragraph => wrapper.appendChild(paragraph.cloneNode(true)));
        return;
      }
      const clone = node.cloneNode(true);
      clone.querySelectorAll?.('script,style,button,.cm-question-play,a[href*="pagescms.org"]').forEach(el => el.remove());
      if (cleanText(clone.textContent) || clone.matches?.('img,table,ul,ol,blockquote,.key-vocab,.recall')) wrapper.appendChild(clone);
    });
    return wrapper;
  };

  const selectContent = content => {
    const selection = window.getSelection();
    if (!selection) return;
    const range = document.createRange();
    range.selectNodeContents(content);
    selection.removeAllRanges();
    selection.addRange(range);
  };

  const closeFocus = () => {
    if (overlay.hidden) return;
    if (overlay.dataset.unsaved === 'true' && !window.confirm('Discard unsaved changes?')) return;
    resetAudio();
    focusContent.querySelector('.answer-practice-record.is-recording')?.click();
    delete overlay.dataset.unsaved;
    overlay.hidden = true;
    focusContent.replaceChildren();
    document.body.classList.remove('answer-focus-open');
    lastTrigger?.focus({ preventScroll: true });
    lastTrigger = null;
  };

  const openFocus = heading => {
    delete overlay.dataset.unsaved;
    const copy = cloneAnswer(heading);
    if (!cleanText(copy.textContent)) return;

    const title = document.createElement('h2');
    title.textContent = heading.dataset.questionText || cleanText(heading.textContent);
    title.dataset.focusClose = '';
    title.title = 'Click the question to close';

    const controls = document.createElement('div');
    controls.className = 'answer-focus-tools';

    const play = document.createElement('button');
    play.type = 'button';
    play.textContent = '▶ Play';
    play.title = 'Play or pause this question and answer';
    play.addEventListener('click', event => {
      event.stopPropagation();
      if (activeAudioButton === play && synth?.speaking) {
        if (synth.paused) {
          synth.resume();
          play.textContent = '⏸ Pause';
        } else {
          synth.pause();
          play.textContent = '▶ Resume';
        }
        return;
      }
      resetAudio();
      if (!hasSpeech) return;
      activeAudioButton = play;
      play.classList.add('is-active');
      play.textContent = '⏸ Pause';
      activeUtterance = new SpeechSynthesisUtterance(`${title.textContent}. ${cleanText(copy.innerText)}`);
      activeUtterance.lang = 'en-IE';
      activeUtterance.rate = 0.92;
      activeUtterance.onend = () => { play.textContent = '▶ Play'; resetAudio(); };
      activeUtterance.onerror = () => { play.textContent = '▶ Play'; resetAudio(); };
      synth.speak(activeUtterance);
    });

    const stop = document.createElement('button');
    stop.type = 'button';
    stop.textContent = '■ Stop';
    stop.addEventListener('click', event => {
      event.stopPropagation();
      resetAudio();
      play.textContent = '▶ Play';
    });

    const outline = document.createElement('div');
    outline.className = 'answer-focus-outline';

    const outlineItems = Array.from(copy.querySelectorAll('p,li,blockquote'))
      .map(node => cleanText(node.textContent))
      .filter(value => /^(key idea|key line|recall cue|cue|remember|outline|why this works)\s*:/i.test(value))
      .slice(0, 6);

    if (outlineItems.length) {
      const label = document.createElement('strong');
      label.textContent = 'Outline';
      const list = document.createElement('ul');
      outlineItems.forEach(value => {
        const li = document.createElement('li');
        li.textContent = value.replace(/^(key idea|key line|recall cue|cue|remember|outline|why this works)\s*:\s*/i, '');
        list.appendChild(li);
      });
      outline.append(label, list);
    } else {
      outline.hidden = true;
    }

    const outlineButton = document.createElement('button');
    outlineButton.type = 'button';
    outlineButton.textContent = outline.hidden ? 'Outline unavailable' : 'Hide Outline';
    outlineButton.disabled = outline.hidden;
    outlineButton.addEventListener('click', event => {
      event.preventDefault();
      event.stopPropagation();
      outline.hidden = !outline.hidden;
      outlineButton.textContent = outline.hidden ? 'Show Outline' : 'Hide Outline';
    });

    const answerButton = document.createElement('button');
    answerButton.type = 'button';
    answerButton.textContent = 'Hide Answer';
    answerButton.addEventListener('click', event => {
      event.preventDefault();
      event.stopPropagation();
      copy.hidden = !copy.hidden;
      answerButton.textContent = copy.hidden ? 'Show Answer' : 'Hide Answer';
    });

    const movePage = document.createElement('select');
    movePage.className = 'answer-focus-move-page';
    movePage.title = 'Move this section to another page (it will be placed at the bottom)';
    movePage.setAttribute('aria-label', 'Move section to another page');
    const movePrompt = document.createElement('option');
    movePrompt.value = '';
    movePrompt.textContent = 'Move to Page…';
    movePrompt.selected = true;
    movePrompt.disabled = true;
    movePage.appendChild(movePrompt);
    populateMovePageSelect(movePage);
    movePage.addEventListener('change', event => {
      event.stopPropagation();
      if (!movePage.value) return;
      moveSectionToPage(heading, movePage.value);
    });

    controls.append(play, stop, outlineButton, answerButton, movePage);

    const practice = document.createElement('section');
    practice.className = 'answer-practice-panel';
    const words = cleanText(copy.innerText).split(/\s+/).filter(Boolean).length;
    const fastSeconds = Math.max(10, Math.round((words / 150) * 60));
    const slowSeconds = Math.max(fastSeconds, Math.round((words / 120) * 60));
    const targetSeconds = Math.max(10, Math.round((words / 135) * 60));
    const fmt = seconds => {
      const mins = Math.floor(seconds / 60);
      const secs = seconds % 60;
      return `${mins}:${String(secs).padStart(2, '0')}`;
    };

    const practiceHead = document.createElement('div');
    practiceHead.className = 'answer-practice-head';
    practiceHead.innerHTML = `<strong>Practice answer</strong><span>Suggested time ${fmt(fastSeconds)}–${fmt(slowSeconds)}</span>`;

    const reminder = document.createElement('p');
    reminder.className = 'answer-practice-reminder';
    reminder.textContent = 'Learn the structure, not the script. Stay with the breadcrumbs and say it naturally.';

    const timer = document.createElement('div');
    timer.className = 'answer-practice-timer';
    timer.textContent = `0:00 / ~${fmt(targetSeconds)} target`;

    const record = document.createElement('button');
    record.type = 'button';
    record.className = 'answer-practice-record';
    record.textContent = '● Record answer';

    const attempts = document.createElement('div');
    attempts.className = 'answer-practice-attempts';

    let recorder = null;
    let stream = null;
    let chunks = [];
    let startedAt = 0;
    let tick = null;
    let attemptNumber = 0;

    const stopClock = () => {
      if (tick) window.clearInterval(tick);
      tick = null;
    };
    const updateClock = () => {
      if (!startedAt) return;
      const elapsed = Math.max(0, Math.floor((Date.now() - startedAt) / 1000));
      timer.textContent = `${fmt(elapsed)} / ~${fmt(targetSeconds)} target`;
    };

    record.addEventListener('click', async event => {
      event.preventDefault();
      event.stopPropagation();

      if (recorder && recorder.state === 'recording') {
        recorder.stop();
        record.textContent = '● Record answer';
        record.classList.remove('is-recording');
        stopClock();
        return;
      }

      if (!navigator.mediaDevices?.getUserMedia || typeof MediaRecorder === 'undefined') {
        timer.textContent = 'Recording is not supported in this browser.';
        return;
      }

      try {
        stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const preferred = MediaRecorder.isTypeSupported?.('audio/webm;codecs=opus')
          ? 'audio/webm;codecs=opus'
          : '';
        recorder = preferred ? new MediaRecorder(stream, { mimeType: preferred }) : new MediaRecorder(stream);
        chunks = [];
        recorder.ondataavailable = e => { if (e.data?.size) chunks.push(e.data); };
        recorder.onstop = () => {
          stopClock();
          stream?.getTracks().forEach(track => track.stop());
          stream = null;
          const blob = new Blob(chunks, { type: recorder.mimeType || 'audio/webm' });
          const url = URL.createObjectURL(blob);
          attemptNumber += 1;

          const row = document.createElement('div');
          row.className = 'answer-practice-attempt';
          const label = document.createElement('strong');
          label.textContent = `Recording ${attemptNumber}`;
          const audio = document.createElement('audio');
          audio.controls = true;
          audio.src = url;
          const download = document.createElement('a');
          download.href = url;
          download.download = `interview-practice-${attemptNumber}.webm`;
          download.textContent = 'Save';
          row.append(label, audio, download);
          attempts.prepend(row);
        };
        recorder.start();
        startedAt = Date.now();
        updateClock();
        tick = window.setInterval(updateClock, 250);
        record.textContent = '■ Stop recording';
        record.classList.add('is-recording');
      } catch (_) {
        timer.textContent = 'Microphone permission is needed to record.';
      }
    });

    practice.append(practiceHead, reminder, timer, record, attempts);

    focusContent.replaceChildren(title, controls, outline, copy, practice);
    linkKnownGlossaryTerms(copy);
    lastTrigger = heading;
    overlay.hidden = false;
    document.body.classList.add('answer-focus-open');
    focusCard.scrollTop = 0;
    focusCard.focus({ preventScroll: true });
  };

  practiceHeadings().forEach(heading => {
    heading.tabIndex = 0;
    heading.setAttribute('role', 'button');
    heading.setAttribute('aria-haspopup', 'dialog');
    heading.title = 'Double-click the section heading to open focus view';
    heading.addEventListener('dblclick', event => {
      if (event.target.closest('button,a,input,textarea,select,summary')) return;
      openFocus(heading);
    });
    heading.addEventListener('keydown', event => {
      if (event.key !== 'Enter' && event.key !== ' ') return;
      if (event.target.closest('button,a,input,textarea,select,summary')) return;
      event.preventDefault();
      openFocus(heading);
    });
  });

  overlay.addEventListener('click', event => {
    if (event.target === overlay || event.target.closest('[data-focus-close]')) closeFocus();
  });

  /* -----------------------------------------------------------------------
     Floating page tools: Edit here, Print, Listen.
     ----------------------------------------------------------------------- */
  const setupFloatingTools = () => {
    if (!pageEdit && !pagePrint) return;
    const rail = document.createElement('div');
    rail.id = 'floating-page-tools';
    rail.setAttribute('aria-label', 'Page tools');

    let floatingEdit = null;
    if (pageEdit?.href) {
      floatingEdit = document.createElement('a');
      floatingEdit.id = 'floating-section-edit';
      floatingEdit.href = pageEdit.href;
      floatingEdit.target = '_blank';
      floatingEdit.rel = 'noopener';
      floatingEdit.textContent = 'Edit here';
      floatingEdit.setAttribute('aria-label', 'Edit the section currently in view');
      floatingEdit.dataset.cmsBase = pageEdit.href.split('#')[0];
      rail.appendChild(floatingEdit);
      pageEdit.hidden = true;
    }

    const print = document.createElement('button');
    print.id = 'floating-page-print';
    print.type = 'button';
    print.textContent = 'Print';
    print.setAttribute('aria-label', 'Print this page');
    print.addEventListener('click', () => window.print());
    rail.appendChild(print);
    if (pagePrint) pagePrint.hidden = true;

    if (hasSpeech) {
      const listen = document.createElement('button');
      listen.id = 'floating-page-listen';
      listen.type = 'button';
      listen.textContent = 'Listen';
      listen.setAttribute('aria-label', 'Listen to this page');
      listen.addEventListener('click', () => {
        if (activeAudioButton === listen && synth.speaking) {
          if (synth.paused) {
            synth.resume();
            listen.textContent = 'Pause';
          } else {
            synth.pause();
            listen.textContent = 'Resume';
          }
          return;
        }
        const questions = practiceHeadings();
        const text = questions.length
          ? questions.map(heading => `${heading.dataset.questionText}. ${answerTextFor(heading)}`).join(' ')
          : `${document.querySelector('.doc-paper > h1')?.textContent || ''}. ${body.innerText}`;
        resetAudio();
        activeAudioButton = listen;
        listen.classList.add('is-active');
        listen.textContent = 'Pause';
        activeUtterance = new SpeechSynthesisUtterance(cleanText(text));
        activeUtterance.lang = 'en-IE';
        activeUtterance.rate = 0.92;
        activeUtterance.onend = () => { listen.textContent = 'Listen'; resetAudio(); };
        activeUtterance.onerror = () => { listen.textContent = 'Listen'; resetAudio(); };
        synth.speak(activeUtterance);
      });
      rail.appendChild(listen);
    }

    document.body.appendChild(rail);

    if (!floatingEdit) return;
    let ticking = false;
    const updateEditTarget = () => {
      ticking = false;
      const headings = sectionHeadings();
      if (!headings.length) {
        floatingEdit.href = floatingEdit.dataset.cmsBase;
        return;
      }
      const marker = Math.min(window.innerHeight * 0.38, 300);
      let active = headings[0];
      headings.forEach(heading => {
        if (heading.getBoundingClientRect().top <= marker) active = heading;
      });
      const source = sourceHeadingText(active);
      floatingEdit.href = source ? `${floatingEdit.dataset.cmsBase}#:~:text=${encodeURIComponent(source)}` : floatingEdit.dataset.cmsBase;
      floatingEdit.title = source ? `Edit near “${source}”` : 'Edit this page';
    };
    const queue = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(updateEditTarget);
    };
    window.addEventListener('scroll', queue, { passive: true });
    window.addEventListener('resize', queue);
    updateEditTarget();
  };

  setupFloatingTools();

  /* -----------------------------------------------------------------------
     Hash target alignment: give the last section enough temporary scroll
     runway to sit below the sticky navigation, without dummy headings or
     permanent blank space at the end of every page.
     ----------------------------------------------------------------------- */
  const alignHashTarget = () => {
    if (!location.hash) {
      body.style.removeProperty('padding-bottom');
      return;
    }

    let id = '';
    try {
      id = decodeURIComponent(location.hash.slice(1));
    } catch (_) {
      id = location.hash.slice(1);
    }

    const target = document.getElementById(id);
    if (!target || !body.contains(target)) {
      body.style.removeProperty('padding-bottom');
      return;
    }

    // Recalculate from the page's natural height first, then add only the
    // extra space needed for this target to reach its normal anchored position.
    body.style.removeProperty('padding-bottom');

    requestAnimationFrame(() => {
      const topOffset = (topbar?.getBoundingClientRect().height || 0) + 20;
      const targetTop = Math.max(0, window.scrollY + target.getBoundingClientRect().top - topOffset);
      const maxScrollTop = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
      const shortfall = Math.ceil(targetTop - maxScrollTop);

      if (shortfall > 0) {
        body.style.paddingBottom = `${shortfall + 24}px`;
      }

      requestAnimationFrame(() => {
        window.scrollTo({ top: targetTop, behavior: 'auto' });
      });
    });
  };

  window.addEventListener('hashchange', alignHashTarget);
  if (document.readyState === 'complete') alignHashTarget();
  else window.addEventListener('load', alignHashTarget, { once: true });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !overlay.hidden) closeFocus();
  });
  window.addEventListener('pagehide', resetAudio);
  window.addEventListener('beforeunload', resetAudio);
  document.dispatchEvent(new Event('coop-site-ready'));
})();


// Abelo global footprint map
(() => {
  const initAbeloMap = () => {
  const mapHost = document.querySelector('[data-abelo-map] #abeloWorldMap');
  if (!mapHost || mapHost.dataset.mapReady === 'true') return;
  mapHost.dataset.mapReady = 'true';

  const placements = [
    {
      lat: 53.35, lng: -6.26,
      title: 'Ireland — Emerald Airlines',
      date: 'Aug 2026',
      atr42: 0,
      atr72: 1,
      age: 'Existing aircraft; exact vintage not stated in the public acquisition announcement',
      history: 'Acquired in August 2026 as part of the Aergo portfolio, with the existing lease continuing to Emerald Airlines.'
    },
    {
      lat: 59.33, lng: 18.07,
      title: 'Sweden — Braathens Regional Airways',
      date: '2025',
      atr42: 0,
      atr72: 3,
      age: '2015/2016 vintage — about 10–11 years old in 2026',
      history: 'Three ATR 72s were acquired from Bramora in 2025 with their leases to Braathens already in place.'
    },
    {
      lat: 37.98, lng: 23.72,
      title: 'Greece — SKY express / Olympic Air',
      date: '2024',
      atr42: 0,
      atr72: 3,
      age: 'New 2024 deliveries',
      history: 'Two new ATR 72s were placed with SKY express and one new ATR 72 with Olympic Air from Abelo’s orderbook.'
    },
    {
      lat: 28.29, lng: -16.63,
      title: 'Canary Islands — Binter Canarias',
      date: 'Aug 2026',
      atr42: 0,
      atr72: 1,
      age: 'Existing aircraft; exact vintage not stated in the public acquisition announcement',
      history: 'Added in August 2026 through the Aergo portfolio acquisition, with the existing lease continuing to Binter.'
    },
    {
      lat: 4.71, lng: -74.07,
      title: 'Colombia — SATENA',
      date: 'May 2026',
      atr42: 1,
      atr72: 1,
      age: 'New deliveries — ATR 42 in Dec 2025; ATR 72 in May 2026',
      history: 'Abelo first placed an ATR 42 with SATENA, then followed with an ATR 72 as the airline continued its fleet modernisation.'
    },
    {
      lat: 4.18, lng: 73.51,
      title: 'Maldives — Maldivian',
      date: 'May 2025',
      atr42: 2,
      atr72: 0,
      age: 'New deliveries — May 2024 and May 2025',
      history: 'Two new ATR 42s were delivered to support Maldivian’s domestic fleet renewal programme.'
    },
    {
      lat: 23.81, lng: 90.41,
      title: 'Bangladesh — Air Astra',
      date: 'Sep 2026',
      atr42: 0,
      atr72: 3,
      age: 'Brand-new aircraft; all three delivered by Sep 2026',
      history: 'Three new ATR 72s were delivered under one fleet-expansion agreement for Air Astra’s domestic network.'
    },
    {
      lat: -4.33, lng: 15.31,
      title: 'DR Congo — Air Congo via Ethiopian Airlines Group',
      date: '2026',
      atr42: 0,
      atr72: 2,
      age: 'Brand-new 2026 deliveries',
      history: 'Two new ATR 72s from Abelo’s orderbook were placed with Ethiopian Airlines Group for operation by Air Congo.'
    },
    {
      lat: -6.21, lng: 106.85,
      title: 'Indonesia — Citilink',
      date: 'Aug 2026',
      atr42: 0,
      atr72: 2,
      age: 'Existing aircraft; exact vintages not stated in the public acquisition announcement',
      history: 'Two ATR 72s were added in August 2026 through the Aergo portfolio acquisition with leases already in place.'
    },
    {
      lat: -31.95, lng: 115.86,
      title: 'Australia — Aerlink / Air Navigator Group',
      date: '2026',
      atr42: 0,
      atr72: 1,
      age: '2007 build — about 19 years old in 2026',
      history: 'The ATR 72 was transitioned from Blue Islands to Aerlink in 2026 after repossession, inspection, maintenance and reconfiguration.'
    },
    {
      lat: 19.08, lng: 72.88,
      title: 'India — IndiGo',
      date: 'Mar 2024',
      atr42: 0,
      atr72: 4,
      age: 'Existing aircraft; exact vintages not stated in Abelo’s acquisition announcement',
      history: 'Four ATR 72s were acquired in March 2024 with their IndiGo leases already in place.'
    },
    {
      lat: -1.29, lng: 36.82,
      title: 'Kenya — Renegade Air',
      date: '2024',
      atr42: 0,
      atr72: 1,
      age: '2009 build — about 17 years old in 2026',
      history: 'An older ATR 72 passenger aircraft was converted to cargo configuration and delivered to Renegade Air in 2024.'
    }
  ];

  const loadLeaflet = () => new Promise((resolve, reject) => {
    if (window.L) return resolve(window.L);

    if (!document.querySelector('link[data-leaflet-css]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
      link.crossOrigin = '';
      link.dataset.leafletCss = 'true';
      document.head.appendChild(link);
    }

    const existing = document.querySelector('script[data-leaflet-js]');
    if (existing) {
      existing.addEventListener('load', () => resolve(window.L), { once: true });
      existing.addEventListener('error', reject, { once: true });
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
    script.crossOrigin = '';
    script.dataset.leafletJs = 'true';
    script.onload = () => resolve(window.L);
    script.onerror = reject;
    document.head.appendChild(script);
  });

  const escapeHtml = value => String(value).replace(/[&<>"']/g, ch => ({
    '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'
  }[ch]));

  const customerName = p => p.title.includes('—')
    ? p.title.split('—').slice(1).join('—').trim()
    : p.title;

  const popupHtml = p => `
      <div class="abelo-popup-card">
        <div class="abelo-popup-line abelo-popup-date">${escapeHtml(p.date)}</div>
        <div class="abelo-popup-line abelo-popup-customer">${escapeHtml(customerName(p))}</div>
        <div class="abelo-popup-line abelo-popup-ratio" aria-label="ATR 42 count ${escapeHtml(p.atr42)}, ATR 72 count ${escapeHtml(p.atr72)}">
          <strong>${escapeHtml(p.atr42)} / ${escapeHtml(p.atr72)}</strong>
          <span>ATR 42 / ATR 72</span>
        </div>
      </div>`;

  loadLeaflet().then(L => {
    const map = L.map(mapHost, { scrollWheelZoom: false, worldCopyJump: true }).setView([18, 15], 2);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 7,
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    placements.forEach(p => {
      L.marker([p.lat, p.lng])
        .addTo(map)
        .bindPopup(popupHtml(p), { maxWidth: 460, minWidth: 360 });
    });

    const group = L.featureGroup(placements.map(p => L.marker([p.lat, p.lng])));
    map.fitBounds(group.getBounds().pad(0.18), { maxZoom: 2 });
  }).catch(() => {
    mapHost.innerHTML = '<p style="padding:1rem">Interactive map unavailable. The placement list below remains available.</p>';
  });
  };

  initAbeloMap();
  document.addEventListener('abeloResearchRendered', initAbeloMap);
})();


// Render the detailed Abelo research summary outside Pages CMS rich-text parsing.
(() => {
  const body = document.getElementById('docBody');
  if (!body) return;

  const marker = [...body.querySelectorAll('p')].find(p => p.textContent.trim() === 'ABEL0_RESEARCH_WIDGET');
  if (!marker) return;

  const wrapper = document.createElement('div');
  wrapper.className = 'abelo-research-widget';
  wrapper.innerHTML = `
    <h3>Erik's 30-second summary</h3>
    <p><strong>Abelo is a Dublin-based B2B aircraft lessor specialising in regional turboprop aircraft.</strong> It does not sell tickets to passengers. It owns or finances aircraft and places them with airlines, then manages the commercial, financial and technical life of those assets.</p>
    <p>The business sits at the intersection of <strong>finance, aircraft, data, asset management, risk and sustainability</strong>. For Erik, that is the important connection: a Financial Mathematics degree can be applied to real assets with long lives, large capital values and uncertain future cash flows.</p>

    <h3>What has changed since Abelo was founded?</h3>
    <p>Abelo was created in <strong>2022</strong> and has moved quickly from a relatively new platform into a growing specialist lessor.</p>
    <ul>
      <li><strong>May 2025 — Cerberus acquired Abelo</strong> from funds managed by Oaktree Capital Management.</li>
      <li><strong>2025 — Abelo secured a warehouse financing facility of up to $750 million</strong> to support fleet and customer growth.</li>
      <li><strong>March 2026 — Abelo said it had 36 firm ATR aircraft ordered</strong>, with another nine options and purchase rights.</li>
      <li>Its newer placements show an increasingly international customer base across <strong>Europe, Latin America, Africa, Asia and Australia</strong>.</li>
    </ul>
    <p>That growth matters because an aircraft lessor is not simply buying planes. It has to decide <strong>which aircraft to buy, how to finance them, which airlines and markets to place them with, what lease structure to use, how to manage technical transitions, and what the aircraft may be worth years later</strong>.</p>

    <h3>The aircraft strategy | ATR 42 and ATR 72</h3>
    <p>Abelo's strategy is centred on larger regional turboprops, particularly the <strong>ATR 42-600</strong> and <strong>ATR 72-600</strong>. Modern turboprops are designed for shorter regional sectors where a jet may be unnecessarily expensive or inefficient.</p>
    <p>In January 2025, an earlier order for ten ATR 42 STOL aircraft was converted into <strong>five ATR 42-600 and five ATR 72-600 aircraft</strong>, with three further ATR 72-600s added.</p>

    <h3>Fleet mix | Documented aircraft by model</h3>
    <p>This chart counts the <strong>Abelo-linked aircraft individually documented in the research on this site</strong>. It is a verified subset of Abelo’s wider portfolio, which the company describes as more than 60 turboprop aircraft; it is not presented as a complete proprietary fleet register.</p>
    <div class="abelo-fleet-chart" role="img" aria-label="Documented Abelo aircraft by model: ATR 42-600 3, ATR 72-500 2, ATR 72-600 20, Dash 8-400 2">
      <div class="abelo-fleet-chart__plot">
        <div class="abelo-fleet-bar" style="--value:3; --max:20">
          <strong class="abelo-fleet-bar__value">3</strong>
          <span class="abelo-fleet-bar__column"></span>
          <span class="abelo-fleet-bar__label">ATR 42-600</span>
        </div>
        <div class="abelo-fleet-bar" style="--value:2; --max:20">
          <strong class="abelo-fleet-bar__value">2</strong>
          <span class="abelo-fleet-bar__column"></span>
          <span class="abelo-fleet-bar__label">ATR 72-500</span>
        </div>
        <div class="abelo-fleet-bar" style="--value:20; --max:20">
          <strong class="abelo-fleet-bar__value">20</strong>
          <span class="abelo-fleet-bar__column"></span>
          <span class="abelo-fleet-bar__label">ATR 72-600</span>
        </div>
        <div class="abelo-fleet-bar" style="--value:2; --max:20">
          <strong class="abelo-fleet-bar__value">2</strong>
          <span class="abelo-fleet-bar__column"></span>
          <span class="abelo-fleet-bar__label">Dash 8-400</span>
        </div>
      </div>
      <p class="abelo-fleet-chart__note"><strong>27 aircraft documented here.</strong> The bars show the researched subset, not Abelo’s complete 60+ aircraft portfolio.</p>
    </div>

    <h3>ATR fleet map | Type, age and fleet history</h3>
    <p>The map below shows <strong>documented Abelo-linked ATR placements</strong>. It is a portfolio-learning map, <strong>not live aircraft tracking</strong>.</p>
    <p><strong>Click a marker for a deliberately simple fleet card</strong>: ATR 42 count, ATR 72 count, age or vintage, and a short fleet-history note. Counts refer to the Abelo-linked aircraft identified in the public material shown here, <strong>not the airline’s total fleet</strong>.</p>
    <div class="abelo-map" data-abelo-map>
      <div class="abelo-map-canvas" id="abeloWorldMap" role="img" aria-label="World map of documented Abelo aircraft placements"></div>
      <p class="abelo-map-note"><strong>Map key:</strong> each marker shows only ATR 42 / ATR 72 cardinality, age or vintage, and a short Abelo fleet-history note. Locations are operating markets, not live aircraft positions.</p>
    </div>

    <h3>What one transaction actually involves</h3>
    <p>A useful example is the February 2026 transition of an <strong>ATR 72-500 to Air Navigator Group / Aerlink in Australia</strong>. Abelo said the work included <strong>repossession from Blue Islands, inspection, maintenance and reconfiguration to the new operator's specification in less than 100 days</strong>.</p>
    <p>That is a good picture of aircraft asset management. The job does not stop when a lease is signed. A lessor has to coordinate technical condition, documentation, maintenance, transition timing, customer requirements and the economics of keeping an expensive asset earning revenue.</p>

    <h3>How Abelo makes money | Think like an asset manager</h3>
    <p><strong>Raise capital → acquire aircraft → lease aircraft → collect lease cash flows → manage risk and maintenance → transition or sell the aircraft → manage residual value.</strong></p>
    <ul>
      <li><strong>Cash-flow modelling:</strong> lease rentals, deposits, maintenance reserves and financing payments.</li>
      <li><strong>Present value:</strong> comparing future lease income with the price paid for the asset.</li>
      <li><strong>Interest-rate risk:</strong> aircraft are capital-intensive and financing costs matter.</li>
      <li><strong>Credit risk:</strong> the airline must remain capable of meeting its lease obligations.</li>
      <li><strong>Residual-value risk:</strong> what will the aircraft be worth at the end of a lease?</li>
      <li><strong>Portfolio risk:</strong> diversification by airline, region, aircraft type and lease maturity.</li>
      <li><strong>Scenario analysis:</strong> fuel prices, rates, inflation, airline demand and aircraft values can all change.</li>
    </ul>

    <h3>Growth and financing | Why the $750m facility matters</h3>
    <p>A warehouse facility gives a lessor a pool of financing that can be drawn to acquire aircraft before those assets are refinanced, sold or moved into longer-term structures.</p>
    <p>Abelo had also previously announced a <strong>$190 million financing facility for a 20-turboprop portfolio</strong>, involving MUFG, Deutsche Bank and Société Générale.</p>

    <h3>Sustainability | More than a slogan</h3>
    <p>Abelo repeatedly describes turboprops as part of the transition toward lower-emission regional aviation. ATR states that its aircraft emit <strong>about 45% less CO₂ than similar-size regional jets</strong>.</p>
    <p><strong>Right-sized aircraft + lower fuel burn on suitable regional routes + access to smaller airports + replacement of older aircraft = a commercial as well as environmental proposition.</strong></p>

    <h3>What Erik should be able to say</h3>
    <p><strong>Specialist lessor → turboprops → global placements → finance → asset management → sustainable regional connectivity.</strong></p>
    <blockquote><p>“Abelo is a Dublin-based specialist turboprop lessor rather than an airline. What interests me is that the business combines aircraft with finance and asset management. It has been growing quickly, including a major ATR orderbook and international placements across Europe, Latin America, Africa, Asia and Australia. From a Financial Mathematics perspective, I can see direct links to cash flows, valuation, credit risk, financing, portfolio decisions and residual values.”</p></blockquote>

    <h3>News evidence | What the announcements tell us</h3>
    <ul>
      <li><strong>Cerberus acquisition:</strong> investor backing and a new growth phase.</li>
      <li><strong>$750m warehouse facility:</strong> capital available to scale the fleet.</li>
      <li><strong>ATR orderbook expansion:</strong> confidence in the underlying aircraft type and future demand.</li>
      <li><strong>SATENA / Colombia:</strong> repeat placement from the orderbook.</li>
      <li><strong>Air Astra / Bangladesh:</strong> three brand-new ATR 72-600s into a growing domestic market.</li>
      <li><strong>Maldivian:</strong> sale-and-leaseback and finance-lease examples.</li>
      <li><strong>Braathens / Sweden:</strong> acquisition of aircraft already on lease.</li>
      <li><strong>Aergo portfolio:</strong> diversification across five new operators and several regions.</li>
      <li><strong>Aerlink / Australia:</strong> hands-on aircraft transition and technical asset management.</li>
      <li><strong>IndiGo / India:</strong> four ATR 72-600s acquired while already on lease.</li>
      <li><strong>Renegade Air / Kenya:</strong> passenger-to-cargo conversion extending useful asset life.</li>
    </ul>
  `;

  marker.replaceWith(wrapper);

  // Fire a custom event so the map initializer can run after the map container exists.
  document.dispatchEvent(new CustomEvent('abeloResearchRendered'));
})();
