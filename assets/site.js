Warning: truncated output (original token count: 47300)
Total output lines: 3562

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
    { term: 'Regional route', definition: 'A relatively short air service linking cities or airports within a region, often with lower passenger demand than major trunk routes.', cue: 'Shorter sector → thinner demand → right-sized aircraft.', examples: ['A service linking a smaller regional airport with a nearby city or hub'], misconceptions: ['Regional does not simply mean small aircraft; the route, demand and airport constraints matter.'] },
    { term: 'Lease transition',
  definition: 'The process of moving an aircraft from one lease or operator to another, including redelivery, technical records, maintenance status, remarketing and delivery to the next lessee.',
  why: 'A well-managed transition reduces downtime and helps protect the aircraft’s value and future lease income.'
},

{ term: 'Lease term',
  definition: 'The agreed length of time for which an aircraft is leased to an airline.',
  why: 'The lease term affects revenue visibility, remarketing timing, residual-value exposure and future fleet options.'
},
    { term: 'Esperanto', definition: 'An artificial, or constructed, language introduced by L. L. Zamenhof in 1887 for international communication. It draws features from European languages. Earlier constructed languages, including Volapük, already existed.', cue: 'A planned bridge language; 1887, but not the first.' },
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
    { term: 'Variance', definition: 'A measure of how widely values are dispersed around their mean.', cue: 'Distance from mean, squared and averaged.' },
    { term: 'Derivative', definition: 'A financial contract whose value depends on an underlying price, rate or other variable.', cue: 'What does this contract depend on?', examples: ['A fuel futures contract', 'A share option'], nonExamples: ['The underlying share itself'], misconceptions: ['A derivative does not have to be a complicated formula.'], check: { prompt: 'What makes a contract a derivative?', options: ['Its value depends on an underlying variable', 'It is always a share', 'It has no future payoff'], correct: 0, explain: 'The value comes from another price, rate or variable.' }, selfCheck: ['Name the underlying variable.', 'Explain the contract in one sentence.'] },
    { term: 'Forward contract', definition: 'A privately agreed obligation to buy or sell something later at a price set today.', cue: 'Agree today → transact later.', examples: ['Agree today to buy fuel in three months at a fixed price'], nonExamples: ['An option that can be left unexercised'], misconceptions: ['The buyer has an obligation, not merely a choice.'], check: { prompt: 'A forward buyer changes their mind. Can they simply let the contract lapse like an option?', options: ['Yes', 'No'], correct: 1, explain: 'A forward creates an obligation under its terms.' }, selfCheck: ['Say who buys, what, when and at which price.'] },
    { term: 'Futures contract', definition: 'A standardised exchange-traded obligation to buy or sell an underlying asset at a set future date and price, usually with daily settlement.', cue: 'Standardised + exchange + daily settlement.', examples: ['An exchange-traded commodity future'], nonExamples: ['A customised private forward'], misconceptions: ['A future is not identical to a privately agreed forward.'], check: { prompt: 'Which feature is typical of futures?', options: ['Daily settlement through an exchange', 'A private one-off contract with no standard terms'], correct: 0, explain: 'Futures are standardised and marked to market.' }, selfCheck: ['Explain one similarity and one difference from a forward.'] },
    { term: 'Arbitrage', definition: 'A combination of transactions that locks in a gain without a corresponding net investment or market risk under the model assumptions.', cue: 'Same payoff → consistent price.', examples: ['Buy a cheaper replica and sell an otherwise identical expensive payoff'], nonExamples: ['Buying a share because you think its price will rise'], misconceptions: ['A risky forecast is speculation, not arbitrage.'], check: { prompt: 'Two positions have exactly the same future payoff but different prices. What should you test?', options: ['Whether buying the cheaper and selling the dearer locks in a gain', 'Which has the nicer name'], correct: 0, explain: 'The price difference may violate no-arbitrage.' }, selfCheck: ['Explain why identical payoffs should have consistent prices.'] },
    { term: 'Replication', definition: 'Constructing traded positions that reproduce another contract’s payoff in every modelled state.', cue: 'Match each payoff → infer a price.', examples: ['Build an option payoff from shares and a risk-free position in a binomial model'], nonExamples: ['Guessing a price from last year’s average'], misconceptions: ['A portfolio must match every relevant state, not just the average outcome.'], check: { prompt: 'What must a replicating portfolio match?', options: ['The payoff in every modelled state', 'Only the expected payoff'], correct: 0, explain: 'Matching each state supports consistent pricing.' }, selfCheck: ['Explain replication without using a formula.'] },
    { term: 'Risk-neutral valuation', definition: 'Pricing a contingent payoff using probabilities consistent with traded asset prices and a risk-free discount rate.', cue: 'Pricing probability is not a forecast.', examples: ['Value an option in a binomial tree'], nonExamples: ['Predict the most likely share price from historical frequencies'], misconceptions: ['Risk-neutral probabilities are a pricing device, not necessarily real-world chances.'], check: { prompt: 'Does a risk-neutral probability tell you what is most likely to happen?', options: ['Yes, it is a forecast', 'No, it is chosen for consistent pricing'], correct: 1, explain: 'Its role is valuation under no-arbitrage.' }, selfCheck: ['Distinguish a forecast from a pricing probability.'] },
    { term: 'Basis risk', definition: 'The risk remaining because the price of a hedge does not move exactly with the exposure it is meant to protect.', cue: 'Imperfect match → residual risk.', examples: ['Hedging jet fuel with heating-oil futures'], nonExamples: ['A perfectly matching offsetting position under the model'], misconceptions: ['A cross hedge can reduce risk without removing it completely.'], check: { prompt: 'Why can a heating-oil hedge leave jet-fuel risk?', options: ['The two prices can move differently', 'Hedging always removes all risk'], correct: 0, explain: 'Their price difference can change.' }, selfCheck: ['Name the exposure, the proxy hedge and the risk left over.'] }

    // Core finance terms used in the Portfolio learning lab.
    ,{ term: 'Financial instrument', definition: 'A contract or arrangement that creates a financial asset for one party and a financial liability or equity claim for another.', cue: 'Rights and obligations expressed in money.' }
    ,{ term: 'Principal', definition: 'The original amount borrowed or invested, before interest and repayments are taken into account.', cue: 'The starting balance.' }
    ,{ term: 'Deposit', definition: 'Cash paid up front by the buyer, reducing the amount that must be financed.', cue: 'Cash now → less borrowing.' }
    ,{ term: 'PCP', definition: 'Personal Contract Plan: vehicle finance with an up-front deposit, regular monthly payments and a larger optional final payment linked to the car’s agreed future value.', cue: 'Deposit → monthly payments → final choice.' }
    ,{ term: 'GMFV', definition: 'Guaranteed Minimum Future Value: the value agreed at the start of a PCP that the finance provider guarantees for the vehicle at the end, subject to the contract conditions. It commonly determines the optional final payment needed to keep the car.', cue: 'Agreed end value → final PCP decision.' }
    ,{ term: 'Balloon payment', definition: 'A relatively large payment due at the end of a finance agreement after smaller regular payments during the term.', cue: 'Smaller payments now → large final payment.' }
    ,{ term: 'Mortgage', definition: 'A long-term loan used to buy property, with the property normally acting as security for the lender.', cue: 'Property purchase + secured long-term borrowing.' }
    ,{ term: 'Secured borrowing', definition: 'Borrowing backed by an asset or collateral over which the lender has a legal claim if the borrower fails to meet the agreement.', cue: 'Debt backed by an asset.' }
    ,{ term: 'Amortisation', definition: 'The gradual reduction of a loan balance through scheduled repayments of principal, usually alongside interest.', cue: 'Repay over time → principal falls.' }
    ,{ term: 'Debt', definition: 'Money borrowed that creates an obligation to repay under agreed terms.', cue: 'Borrowed capital that must be repaid.' }
    ,{ term: 'Equity', definition: 'The owner’s financial stake in an asset after deducting associated debt.', cue: 'Asset value − debt.' }
    ,{ term: 'Capital constraint', definition: 'A limit on the amount of cash or financing available for a purchase, investment or project.', cue: 'Good option, but can you fund it?' }

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
    { term: 'Maintenance reserves', definition: 'Payments an airline makes in addition to base rent under certain leases, usually linked to flight hours or cycles, for agreed major maintenance.', why: 'They collect cash ahead of expensive work and help attribute use to the airline responsible for it.' },
    { term: 'Maintenance reserve', definition: 'A payment beyond base rent under certain leases, usually calculated from hours flown or take-off and landing cycles.', why: 'The lease defines which major work can be paid or reimbursed from the reserves.' },
    { term: 'Maintenance Rights Asset', definition: 'An accounting asset recognised when an acquired aircraft lease promises better maintenance condition at redelivery than at purchase.', why: 'Acquisition accounting separates that right from the aircraft’s metal value and amortises it on a different timetable.' },
    { term: 'MRA', definition: 'Maintenance Rights Asset: the value of a maintenance-condition right recognised when an aircraft is bought with a lease attached.', why: 'An MRA affects reported asset value and profit after a portfolio acquisition.' },
    { term: 'Shop visit', definition: 'When an engine is taken to a maintenance facility for significant inspection, repair or overhaul.', why: 'An engine shop visit can be expensive and may be eligible for reimbursement under the lease’s reserve terms. It is more substantial than a routine check on the aircraft.' },
    { term: 'Redelivery condition', definition: 'The aircraft’s required maintenance and technical state when an airline returns it at lease end.', why: 'It protects the owner’s ability to place or sell the aircraft again.' },
    { term: 'End-of-lease', definition: 'The point when an aircraft lease expires and the airline returns the aircraft or agrees an extension.', why: 'Return condition and compensation are settled as ownership and operation separate again.' },
    { term: 'EOL', definition: 'End of lease; EOL compensation pays for a maintenance shortfall when the airline returns the aircraft.', why: 'It is an alternative to collecting monthly maintenance reserves.' },
    { term: 'EOL compensation', definition: 'End-of-lease cash paid when an aircraft’s maintenance condition falls short of the return condition agreed in the lease.', why: 'The airline may complete the work or settle the difference when it hands the aircraft back.' },
    { term: 'End-of-lease compensation', definition: 'Cash paid to settle the difference when the aircraft’s maintenance condition falls short of the agreed return condition.', why: 'Some leases use this settlement instead of monthly maintenance reserves.' },
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
    { term: 'Interest-rate cap', definition: 'A contract limiting how high a floating borrowing rate can rise.', why: 'It protects the lessor from extreme increases in financing cost.' },
    {
      term: 'Marginal cost',
      definition: 'The additional cost caused by producing or providing one more unit. On a flight that is already going to operate, the unit might be one more passenger in an otherwise empty seat.',
      cue: 'Ask: what extra cost happens only because this one extra unit is added?',
      why: 'Airlines have large fixed and committed costs, while the incremental cost of filling one otherwise empty seat can be relatively small. That helps explain price competition, cyclicality and why a lessor watches airline credit closely.',
      formula: 'MC ≈ ΔTotal Cost ÷ ΔQuantity. With a smooth cost function, MC(q) = C′(q).',
      characteristics: [
        'Incremental: include only costs caused by the extra unit.',
        'Decision-specific: a cost is marginal only if it changes because of the decision being analysed.',
        'Not automatically small: marginal cost can rise sharply when capacity becomes constrained.',
        'Different from average cost: average cost spreads total cost across all units.'
      ],
      examples: [
        'Extra catering or consumables for one additional passenger.',
        'Passenger-dependent airport, handling or transaction charges.',
        'The small additional fuel burn caused by carrying the extra passenger and baggage.'
      ],
      nonExamples: [
        'Aircraft lease rent that is due whether the seat is occupied or empty.',
        'Crew salaries for a flight that was already scheduled to operate.',
        'The whole flight’s fuel bill or the airline’s total operating cost.',
        'Average cost per passenger.'
      ],
      misconceptions: [
        '“Marginal” does not mean “unimportant” or “tiny”; it means caused by one additional unit.',
        'An empty seat is not literally free to fill. The marginal cost may be low, but it is not necessarily zero.',
        'Marginal cost is not the same thing as average cost.'
      ],
      workedExample: 'Hypothetical example: suppose a flight will operate anyway. One extra passenger causes €4 of catering, €3 of payment/distribution cost, €2 of extra fuel burn and €16 of passenger-dependent charges. The marginal cost of that passenger is €25. The aircraft lease and already-committed crew cost do not enter this one-passenger calculation.',
      transfer: 'Aircraft-leasing link: when demand weakens, an airline may cut fares aggressively because selling an otherwise empty seat can still contribute cash above its marginal cost. The airline still has to cover its much larger fixed and committed cost base, which is one reason the sector can be cyclical.',
      check: {
        prompt: 'A flight is definitely operating. Which item is most clearly part of the marginal cost of carrying one extra passenger?',
        options: [
          'The annual aircraft lease payment',
          'The pilots’ salaries for the already-scheduled flight',
          'Passenger-dependent charges plus the extra catering and fuel caused by that passenger',
          'The entire fuel bill for the flight'
        ],
        correct: 2,
        explain: 'Only costs that change because the extra passenger is carried belong in this marginal calculation.'
      },
      selfCheck: [
        'I can define marginal cost without using the word “average”.',
        'I can explain why an aircraft lease payment is not marginal to filling one seat on an already-scheduled flight.',
        'I can explain why “low marginal cost” does not mean “zero cost”.',
        'I can connect low seat-level marginal cost to airline pricing pressure and credit risk.'
      ]
    }
  ];

  const cleanText = value => (value || '')
    .replace(/\s+/g, ' ')
    .replace(/^[\s,.;:!?–—-]+|[\s,.;:!?–—-]+$/g, '')
    .trim();

  const renderGlossaryLearningContent = (container, item, options = {}) => {
    const rich = Boolean(
      item?.formula ||
      item?.workedExample ||
      item?.transfer ||
      item?.characteristics?.length ||
      item?.examples?.length ||
      item?.nonExamples?.length ||
      item?.misconceptions?.length ||
      item?.check ||
      item?.selfCheck?.length
    );
    if (!container || !rich) return null;

    const deep = document.createElement('details');
    deep.className = 'glossary-deep-dive';
    if (options.compact) deep.classList.add('is-compact');

    const summary = document.createElement('summary');
    summary.textContent = 'Learn this properly';
    deep.appendChild(summary);

    const body = document.createElement('div');
    body.className = 'glossary-learning-body';

    if (item.formula) {
      const formula = document.createElement('div');
      formula.className = 'glossary-formula';
      const label = document.createElement('strong');
      label.textContent = 'Core relationship';
      const value = document.createElement('div');
      value.textContent = item.formula;
      formula.append(label, value);
      body.appendChild(formula);
    }

    const frayerData = [
      ['Characteristics', item.characteristics],
      ['Examples', item.examples],
      ['Non-examples', item.nonExamples],
      ['Misconceptions', item.misconceptions]
    ].filter(([, values]) => Array.isArray(values) && values.length);

    if (frayerData.length) {
      const grid = document.createElement('div');
      grid.className = 'glossary-frayer';
      frayerData.forEach(([title, values]) => {
        const card = document.createElement('section');
        card.className = 'glossary-frayer-card';
        const heading = document.createElement('h4');
        heading.textContent = title;
        const list = document.createElement('ul');
        values.forEach(value => {
          const li = document.createElement('li');
          li.textContent = value;
          list.appendChild(li);
        });
        card.append(heading, list);
        grid.appendChild(card);
      });
      body.appendChild(grid);
    }

    if (item.workedExample) {
      const worked = document.createElement('details');
      worked.className = 'glossary-mini-section';
      const workedSummary = document.createElement('summary');
      workedSummary.textContent = 'Worked example';
      const workedText = document.createElement('p');
      workedText.textContent = item.workedExample;
      worked.append(workedSummary, workedText);
      body.appendChild(worked);
    }

    if (item.transfer) {
      const transfer = document.createElement('details');
      transfer.className = 'glossary-mini-section';
      const transferSummary = document.createElement('summary');
      transferSummary.textContent = 'Why this matters here';
      const transferText = document.createElement('p');
      transferText.textContent = item.transfer;
      transfer.append(transferSummary, transferText);
      body.appendChild(transfer);
    }

    if (item.check?.prompt && Array.isArray(item.check.options)) {
      const check = document.createElement('section');
      check.className = 'glossary-learning-check';
      const label = document.createElement('span');
      label.className = 'glossary-learning-label';
      label.textContent = 'CHECK UNDERSTANDING · AfL';
      const prompt = document.createElement('p');
      prompt.className = 'glossary-check-prompt';
      prompt.textContent = item.check.prompt;
      const options = document.createElement('div');
      options.className = 'glossary-check-options';
      const feedback = document.createElement('p');
      feedback.className = 'glossary-check-feedback';
      feedback.hidden = true;

      item.check.options.forEach((option, optionIndex) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.textContent = option;
        button.addEventListener('click', event => {
          event.preventDefault();
          event.stopPropagation();
          const buttons = Array.from(options.querySelectorAll('button'));
          buttons.forEach((candidate, i) => {
            candidate.disabled = true;
            if (i === item.check.correct) candidate.classList.add('is-correct');
          });
          if (optionIndex !== item.check.correct) button.classList.add('is-incorrect');
          feedback.hidden = false;
          feedback.textContent = `${optionIndex === item.check.correct ? 'Yes. ' : 'Not quite. '}${item.check.explain || ''}`;
        });
        options.appendChild(button);
      });

      check.append(label, prompt, options, feedback);
      body.appendChild(check);
    }

    if (Array.isArray(item.selfCheck) && item.selfCheck.length) {
      const self = document.createElement('section');
      self.className = 'glossary-self-check';
      const label = document.createElement('span');
      label.className = 'glossary-learning-label';
      label.textContent = 'KNOW THAT YOU KNOW · AaL';
      const intro = document.createElement('p');
      intro.textContent = 'Close the definition, then tick these only when you can do them from memory:';
      const list = document.createElement('div');
      list.className = 'glossary-self-check-list';
      item.selfCheck.forEach((statement, index) => {
        const row = document.createElement('label');
        const input = document.createElement('input');
        input.type = 'checkbox';
        input.setAttribute('aria-label', statement);
        const text = document.createElement('span');
        text.textContent = statement;
        row.append(input, text);
        list.appendChild(row);
      });
      self.append(label, intro, list);
      body.appendChild(self);
    }

    deep.appendChild(body);
    container.appendChild(deep);
    return deep;
  };

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
          if (pageTitle) document.title = pageTitle + ' | Erik Downes · Financial Mathematics';
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
    const labelPath = normalisePath(label.href);
    const rootPath = normalisePath(document.querySelector('.brand')?.href || '/');
    const isAboutParent = labelPath === rootPath && /\/academic-record\.html$/.test(currentPath);
    const isCareerParent = /\/career\.html$/.test(labelPath) && /\/career\//.test(currentPath);
    const isAviationParent = /\/aviation\.html$/.test(labelPath) && /\/aviation\//.test(currentPath);
    const isCourseworkParent = /\/coursework\.html$/.test(labelPath) && /\/modules\//.test(currentPath);
    const isCurrent = labelPath === currentPath || isAboutParent || isCareerParent || isAviationParent || isCourseworkParent;
    const item = label.closest('.navitem');
    item?.classList.toggle('is-current', isCurrent);
    if (isCurrent) label.setAttribute('aria-current', 'page');
    else label.removeAttribute('aria-current');
  });

  const headingInfo = heading => {
    if (!heading) return null;
    const navHref = cleanText(heading.dataset?.navHref);
    const handle = cleanText(heading.dataset?.menuLabel);
    const question = cleanText(heading.dataset?.questionText);
    if (handle && question) return { handle, question, id: heading.id, navHref };

    const raw = cleanText(heading.textContent);
    if (!raw) return null;

    const parsed = splitQuestionHeading(raw);
    if (parsed) return { ...parsed, id: heading.id, navHref };

    // Legacy H2: no pipe means the same text is both the menu handle
    // and the visible section title.
    return { handle: raw, question: raw, id: heading.id, navHref };
  };

  const populateQuestionMenu = (item, headings, pageUrl) => {
    const menu = item.querySelector(':scope > .dropmenu');
    if (!menu) return;
    const questions = headings.map(headingInfo).filter(Boolean);
    menu.replaceChildren();
    item.classList.toggle('has-submenu', questions.length > 0);
    if (!questions.length) return;

    // Keep About Me as a simple single-column dropdown. Other question menus
    // can still expand to two or three columns when they contain many entries.
    const rootPath = normalisePath(document.querySelector('.brand')?.href || '/');
    const isAboutMenu = normalisePath(pageUrl.href) === rootPath;
    menu.classList.toggle('menu-columns-2', !isAboutMenu && questions.length >= 5 && questions.length < 22);
    menu.classList.toggle('menu-columns-3', !isAboutMenu && questions.length >= 22);
    menu.style.setProperty('--menu-left', `${Math.round(item.getBoundingClientRect().left)}px`);

    questions.forEach((question, index) => {
      const link = document.createElement('a');
      const id = question.id || `question-${index + 1}`;
      link.href = question.navHref ? new URL(question.navHref, pageUrl.href).href : `${pageUrl.pathname}${pageUrl.search}#${id}`;
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

  const moduleTitleForSort = label =>
    cleanText(label).replace(/^[A-Z]{2,}(?:_?\d+)?\s*[—–-]\s*/i, '').toLocaleLowerCase();

  const COURSEWORK_GROUPS = [
    {
      label: 'Computer Science',
      codes: ['CE4701', 'CE4702']
    },
    {
      label: 'Accounting & Finance',
      codes: ['AC4214', 'AC4213', 'FI4003', 'MS4027', 'MS4528', 'MS4028']
    },
    {
      label: 'Data, Statistics & Probability',
      codes: ['MS4215', 'MS4034', 'MS4222', 'MS4035', 'MS4037', 'MS4038', 'MS4214', 'MS4217', 'MS4218']
    },
    {
      label: 'Core Mathematics & Analysis',
      codes: ['MS4021', 'MS4022', 'MS4045', 'MS4117', 'MS4122', 'MB4017', 'MS4131', 'MS4105', 'MS4043', 'MS4613']
    },
    {
      label: 'Applied Mathematics & Modelling',
      codes: ['MA4617', 'MS4014', 'MS4101', 'MS4008', 'MS4303', 'MS4315', 'MS4403', 'MS4404', 'MS4407', 'MS4414']
    },
    {
      label: 'Co-operative Education',
      codes: ['COOP_1']
    }
  ];

  const moduleCode = label => {
    const match = cleanText(label).match(/^([A-Z]{2,}(?:_?\d+)?)/i);
    return match ? match[1].toUpperCase() : '';
  };

  const createFlyoutToggle = (row, label) => {
    const toggle = document.createElement('button');
    toggle.type = 'button';
    toggle.className = 'nav-flyout-toggle';
    toggle.textContent = '›';
    toggle.setAttribute('aria-label', `Keep ${label} submenu open`);
    toggle.setAttribute('aria-expanded', 'false');

    toggle.addEventListener('click', event => {
      event.preventDefault();
      event.stopPropagation();

      const willOpen = !row.classList.contains('is-flyout-open');
      row.parentElement?.querySelectorAll(':scope > .nav-flyout-item.is-flyout-open').forEach(other => {
        if (other === row) return;
        other.classList.remove('is-flyout-open');
        other.querySelector(':scope > .nav-flyout-toggle')?.setAttribute('aria-expanded', 'false');
      });

      row.classList.toggle('is-flyout-open', willOpen);
      toggle.setAttribute('aria-expanded', String(willOpen));
    });

    return toggle;
  };

  document.addEventListener('click', event => {
    document.querySelectorAll('.nav-flyout-item.is-flyout-open').forEach(row => {
      if (row.contains(event.target)) return;
      row.classList.remove('is-flyout-open');
      row.querySelector(':scope > .nav-flyout-toggle')?.setAttribute('aria-expanded', 'false');
    });
  });

  const populateModuleMenu = (item, links, pageUrl) => {
    const menu = item.querySelector(':scope > .dropmenu');
    if (!menu) return;

    const seen = new Set();
    const modules = links
      .map(link => {
        const label = cleanText(link.textContent);
        const rawHref = link.getAttribute('href');
        if (!label || !rawHref) return null;
        const href = new URL(rawHref, pageUrl.href);
        if (!/\/modules\/[^/]+\.html$/.test(href.pathname)) return null;
        const key = normalisePath(href.href);
        if (seen.has(key)) return null;
        seen.add(key);
        return {
          label,
          href,
          code: moduleCode(label),
          completed: Boolean(link.closest('strong'))
        };
      })
      .filter(Boolean);

    const grouped = COURSEWORK_GROUPS
      .map(group => ({
        ...group,
        modules: modules
          .filter(module => group.codes.includes(module.code))
          .sort((a, b) => {
            const byTitle = moduleTitleForSort(a.label).localeCompare(
              moduleTitleForSort(b.label),
              undefined,
              { sensitivity: 'base', numeric: true }
            );
            return byTitle || a.label.localeCompare(b.label, undefined, { sensitivity: 'base', numeric: true });
          })
      }))
      .filter(group => group.modules.length > 0);

    const knownCodes = new Set(COURSEWORK_GROUPS.flatMap(group => group.codes));
    const uncategorised = modules
      .filter(module => !knownCodes.has(module.code))
      .sort((a, b) => moduleTitleForSort(a.label).localeCompare(
        moduleTitleForSort(b.label),
        undefined,
        { sensitivity: 'base', numeric: true }
      ));
    if (uncategorised.length) grouped.push({ label: 'Other Coursework', modules: uncategorised });

    menu.replaceChildren();
    menu.classList.remove('menu-columns-2', 'menu-columns-3', 'aviation-menu', 'career-menu', 'portfolio-menu');
    menu.classList.add('coursework-menu');
    item.classList.toggle('has-submenu', grouped.length > 0);
    item.classList.toggle('has-flyout-menu', grouped.length > 0);
    if (!grouped.length) return;
    menu.style.setProperty('--menu-left', `${Math.round(item.getBoundingClientRect().left)}px`);

    grouped.forEach(group => {
      const row = document.createElement('div');
      row.className = 'nav-flyout-item';

      const parent = document.createElement('a');
      parent.className = 'nav-flyout-parent';
      parent.href = pageUrl.href;
      parent.textContent = group.label;
      row.appendChild(parent);

      const panel = document.createElement('div');
      panel.className = 'nav-flyout-panel';
      panel.setAttribute('aria-label', group.label);
      row.appendChild(createFlyoutToggle(row, group.label));

      group.modules.forEach(module => {
        const link = document.createElement('a');
        link.href = module.href.href;
        link.textContent = module.label;
        if (module.completed) {
          link.style.fontWeight = '800';
          link.setAttribute('aria-label', module.label + ' — completed');
        }
        link.addEventListener('click', () => {
          item.classList.remove('is-open');
          item.querySelector('[data-nav-toggle]')?.setAttribute('aria-expanded', 'false');
          if (window.innerWidth <= 1500) topbar?.classList.remove('nav-open');
        });
        panel.appendChild(link);
      });

      row.appendChild(panel);
      menu.appendChild(row);
    });
  };

  const AVIATION_SUBPAGES = [
    { label: 'Aircraft', path: 'aviation/aircraft.html' },
    { label: 'Abelo', path: 'aviation/abelo.html' },
    { label: 'Aircraft Leasing', path: 'aviation/aircraft-leasing.html' },
    { label: 'Asset Management', path: 'aviation/asset-management.html' },
    { label: 'Aircraft Options', path: 'aviation/aircraft-options.html' },
    { label: 'Credit Risk', path: 'aviation/credit-risk.html' }
  ];

  const populateAviationMenu = async (item, pageUrl) => {
    const menu = item.querySelector(':scope > .dropmenu');
    if (!menu) return;

    menu.replaceChildren();
    menu.classList.remove('menu-columns-2', 'menu-columns-3', 'career-menu', 'coursework-menu', 'portfolio-menu');
    menu.classList.add('aviation-menu');
    item.classList.add('has-submenu');
    item.classList.remove('has-flyout-menu');
    menu.style.setProperty('--menu-left', `${Math.round(item.getBoundingClientRect().left)}px`);

    AVIATION_SUBPAGES.forEach(category => {
      const link = document.createElement('a');
      link.href = new URL(category.path, pageUrl.href).href;
      link.textContent = category.label;
      menu.appendChild(link);
    });
  };

  const CAREER_SUBPAGES = [
    { label: 'Preparation', path: 'career/preparation.html' },
    { label: 'Asset & Aviation Awareness', path: 'career/asset-aviation-awareness.html' },
    { label: 'Accuracy, Data & Systems', path: 'career/accuracy-data-systems.html' },
    { label: 'Reporting & Analysis', path: 'career/reporting-analysis.html' },
    { label: 'Finance & Commercial Awareness', path: 'career/finance-commercial-awareness.html' },
    { label: 'Organisation & Delivery', path: 'career/organisation-delivery.html' },
    { label: 'Teamwork & Stakeholders', path: 'career/teamwork-stakeholders.html' },
    { label: 'Initiative & Process Improvement', path: 'career/initiative-process-improvement.html' }
  ];

  const populateCareerMenu = async (item, pageUrl) => {
    const menu = item.querySelector(':scope > .dropmenu');
    if (!menu) return;

    menu.replaceChildren();
    menu.classList.remove('menu-columns-2', 'menu-columns-3', 'aviation-menu', 'coursework-menu', 'portfolio-menu');
    menu.classList.add('career-menu');
    item.classList.add('has-submenu', 'has-flyout-menu');
    menu.style.setProperty('--menu-left', `${Math.round(item.getBoundingClientRect().left)}px`);

    for (const category of CAREER_SUBPAGES) {
      const categoryUrl = new URL(category.path, pageUrl.href);
      const row = document.createElement('div');
      row.className = 'nav-flyout-item';

      const parent = document.createElement('a');
      parent.className = 'nav-flyout-parent';
      parent.href = categoryUrl.href;
      parent.textContent = category.label;
      row.appendChild(parent);

      const panel = document.createElement('div');
      panel.className = 'nav-flyout-panel';
      panel.setAttribute('aria-label', category.label);
      const toggle = createFlyoutToggle(row, category.label);
      row.append(toggle, panel);
      menu.appendChild(row);

      try {
        const response = await fetch(categoryUrl.href, { cache: 'no-store' }…17300 tokens truncated… if (!visible.length) {
      airframeTable.innerHTML = '<p class="abelo-airframes__loading">No aircraft records match this filter.</p>';
      return;
    }

    const rows = visible.map(r => {
      const ps = r.planespotters;
      const identity = r.verification_status === 'AIRFRAME IDENTIFIED'
        ? '<span class="abelo-data-badge is-identified">identified</span>'
        : r.mapped_or_gap === 'RECONCILIATION GAP'
          ? '<span class="abelo-data-badge is-gap">gap</span>'
          : '<span class="abelo-data-badge">pending ID</span>';

      const psQuality = ps
        ? (ps.review_flag
            ? `<span class="abelo-data-badge is-review">review: ${escapeHtml(ps.review_flag)}</span>`
            : '<span class="abelo-data-badge is-secondary">secondary match</span>')
        : '<span class="abelo-data-badge">no captured match</span>';

      const psBlock = ps ? `
        <div class="abelo-airframe-source-card">
          <strong>Planespotters captured entry</strong>
          <dl>
            <div><dt>MSN</dt><dd>${escapeHtml(ps.msn || '—')}</dd></div>
            <div><dt>Type</dt><dd>${escapeHtml(ps.aircraft_type || '—')}</dd></div>
            <div><dt>Registration</dt><dd>${escapeHtml(ps.registration || '—')}</dd></div>
            <div><dt>Operator</dt><dd>${escapeHtml(ps.airline_company || '—')}</dd></div>
            <div><dt>Delivered</dt><dd>${escapeHtml(ps.delivered || '—')}</dd></div>
            <div><dt>Status</dt><dd>${escapeHtml(ps.status || '—')}</dd></div>
          </dl>
          <p>${psQuality} ${ps.ocr_confidence_mean ? `<span class="abelo-data-badge">OCR ${escapeHtml(ps.ocr_confidence_mean)}%</span>` : ''}</p>
          ${safeLink(ps.source_url, 'Planespotters production list')}
        </div>` : `
        <div class="abelo-airframe-source-card is-muted">
          <strong>Planespotters captured entry</strong>
          <p>No airframe-level match has been attached yet. This is deliberately left unresolved rather than guessed.</p>
        </div>`;

      return `
        <tr>
          <td><strong>${escapeHtml(r.slot_id || '—')}</strong><br>${identity}</td>
          <td>${escapeHtml(r.model || r.family || '—')}</td>
          <td>${escapeHtml(r.msn || '—')}</td>
          <td>${escapeHtml(r.registration || '—')}</td>
          <td>${escapeHtml(r.placement_date || '—')}</td>
          <td>${escapeHtml(r.evidence_level || '—')}</td>
          <td>
            <details class="abelo-airframe-detail">
              <summary>Open record</summary>
              <div class="abelo-airframe-detail__grid">
                <div class="abelo-airframe-source-card">
                  <strong>Our reconciliation record</strong>
                  <dl>
                    <div><dt>Lessee</dt><dd>${escapeHtml(r.lessee || 'Unresolved')}</dd></div>
                    <div><dt>Country</dt><dd>${escapeHtml(r.country || '—')}</dd></div>
                    <div><dt>Verification</dt><dd>${escapeHtml(r.verification_status || '—')}</dd></div>
                    <div><dt>Evidence</dt><dd>${escapeHtml(r.evidence_level || '—')}</dd></div>
                  </dl>
                  <p>${escapeHtml(r.notes || '')}</p>
                  <div class="abelo-airframe-source-links">
                    ${safeLink(r.source_url_1, 'Primary/source 1')}
                    ${safeLink(r.source_url_2, 'Source 2')}
                  </div>
                </div>
                ${psBlock}
              </div>
            </details>
          </td>
        </tr>`;
    }).join('');

    airframeTable.innerHTML = `
      <table class="abelo-airframe-table">
        <thead><tr><th>Asset record</th><th>Model</th><th>MSN</th><th>Registration</th><th>Placement</th><th>Evidence</th><th>Detail</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>`;
  };

  fetch(new URL('assets/data/abelo-airframes.json', document.baseURI))
    .then(response => {
      if (!response.ok) throw new Error('Airframe data HTTP ' + response.status);
      return response.json();
    })
    .then(rows => {
      airframeRows = Array.isArray(rows)
        ? rows.map((row, index) => ({ ...row, aircraftNumber: index + 1 }))
        : [];
      document.dispatchEvent(new CustomEvent('abeloAirframesLoaded'));

      const models = [...new Set(
        airframeRows
          .filter(r => r.mapped_or_gap === 'MAPPED' && r.model)
          .map(r => r.model)
      )].sort((a,b) => a.localeCompare(b, undefined, { numeric: true }));

      modelFilterHost.replaceChildren();
      models.forEach(model => {
        const count = airframeRows.filter(r => r.mapped_or_gap === 'MAPPED' && r.model === model).length;
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'abelo-filter-chip abelo-filter-chip--model';
        button.dataset.model = model;
        button.style.setProperty('--country-color', aircraftColor(model));
        button.style.setProperty('--country-tint', aircraftTint(model));
        button.innerHTML = `<span class="abelo-filter-swatch"></span><span>${escapeHtml(model)}</span><small>${count} aircraft</small>`;
        modelFilterHost.appendChild(button);
      });

      renderAirframes();
    })
    .catch(() => {
      airframeLoadError = true;
      renderAirframes();
    });

  const regionHue = new Map(
    regions.map((region, index) => [region, Math.round((index * 300) / Math.max(regions.length, 1))])
  );

  regions.forEach(region => {
    const rows = rankedPlacements.filter(p => p.region === region);
    const aircraft = rows.reduce((sum, p) => sum + Number(p.aircraftCount || 0), 0);
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'abelo-filter-chip abelo-filter-chip--region';
    button.dataset.region = region;
    const hue = regionHue.get(region) ?? 210;
    button.style.setProperty('--country-color', `hsl(${hue} 58% 40%)`);
    button.style.setProperty('--country-tint', `hsl(${hue} 65% 96%)`);
    button.innerHTML = `<span class="abelo-filter-swatch"></span><span>${escapeHtml(region)}</span><small>${rows.length} lessees · ${aircraft} mapped aircraft</small>`;
    regionFilterHost.appendChild(button);
  });

  countries.forEach(country => {
    const count = rankedPlacements.filter(p => p.country === country).length;
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'abelo-filter-chip abelo-filter-chip--country';
    button.dataset.country = country;
    button.dataset.region = regionForCountry(country);
    button.style.setProperty('--country-color', countryColor(country));
    button.style.setProperty('--country-tint', countryTint(country));
    button.innerHTML = `<span class="abelo-filter-swatch"></span><span>${escapeHtml(country)}</span><small>${count}</small>`;
    countryFilterHost.appendChild(button);
  });

  rankedPlacements.forEach(p => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'abelo-filter-chip abelo-filter-chip--lessee';
    button.dataset.lessee = p.customer;
    button.dataset.region = p.region;
    button.style.setProperty('--country-color', countryColor(p.country));
    button.style.setProperty('--country-tint', countryTint(p.country));
    button.innerHTML = `<span class="abelo-filter-swatch"></span><span>#${escapeHtml(p.recencyRank)} ${escapeHtml(p.customer)}</span><small>${escapeHtml(p.aircraftCount)} aircraft · ${escapeHtml(p.country)}</small>`;
    lesseeFilterHost.appendChild(button);
  });

  let activeRegion = null;
  let activeCountry = null;
  let activeLessee = null;
  let activeModel = null;
  let activeModes = new Set(['lessees']);

  const filteredAirframes = () => airframeRows.filter(r => {
    if (r.mapped_or_gap !== 'MAPPED' && (activeRegion || activeCountry || activeLessee || activeModel)) return false;
    if (activeLessee && r.lessee !== activeLessee) return false;
    if (activeCountry && r.country !== activeCountry) return false;
    if (activeRegion && regionForCountry(r.country) !== activeRegion) return false;
    if (activeModel && r.model !== activeModel) return false;
    return true;
  });

  const popupHtml = p => {
    const firstSentence = String(p.history || '').split(/(?<=[.!?])\s+/)[0];
    const popupAircraft = airframeRows.filter(r => r.lessee === p.customer && r.mapped_or_gap === 'MAPPED');
    const miniRows = popupAircraft.length ? `
      <table class="abelo-popup-mini-table">
        <tbody>
          ${popupAircraft.map(r => `<tr>
            <td>${escapeHtml(r.model || r.family || 'Aircraft')}</td>
            <td>MSN ${escapeHtml(r.msn || '—')}</td>
            <td>${escapeHtml(r.registration || '—')}</td>
          </tr>`).join('')}
        </tbody>
      </table>` : '';
    return `
      <div class="abelo-popup-card">
        <div class="abelo-popup-date">Customer recency #${escapeHtml(p.recencyRank)} · ${escapeHtml(p.date)}</div>
        <div class="abelo-popup-customer">${escapeHtml(customerName(p))}</div>
        <div class="abelo-popup-ratio">
          <strong>${escapeHtml(p.aircraftCount)}</strong>
          <span>aircraft · ${escapeHtml(p.type || 'Turboprop')}</span>
        </div>
        ${firstSentence ? `<p class="abelo-popup-brief">${escapeHtml(firstSentence)}</p>` : ''}
        ${miniRows}
        <div class="abelo-popup-actions">
          <button type="button" class="abelo-popup-airframes" data-abelo-show-aircraft="${escapeHtml(p.customer)}">Open aircraft records ↓</button>
          <a class="abelo-popup-source" href="${escapeHtml(p.source)}" target="_blank" rel="noopener noreferrer">Primary source ↗</a>
        </div>
      </div>`;
  };

  const aircraftPopupHtml = row => {
    const ps = row.planespotters;
    return `
      <div class="abelo-popup-card abelo-popup-card--aircraft">
        <div class="abelo-popup-date">Aircraft #${escapeHtml(row.aircraftNumber)} · ${escapeHtml(row.slot_id || '')}</div>
        <div class="abelo-popup-customer">${escapeHtml(row.model || row.family || 'Aircraft')}</div>
        <div class="abelo-popup-aircraft-facts">
          <div><span>Lessee</span><strong>${escapeHtml(row.lessee || 'Unresolved')}</strong></div>
          <div><span>MSN</span><strong>${escapeHtml(row.msn || '—')}</strong></div>
          <div><span>Registration</span><strong>${escapeHtml(row.registration || '—')}</strong></div>
          <div><span>Evidence</span><strong>${escapeHtml(row.evidence_level || '—')}</strong></div>
        </div>
        ${ps ? `<p class="abelo-popup-brief">Planespotters capture: ${escapeHtml(ps.aircraft_type || row.model || 'aircraft')} · ${escapeHtml(ps.status || 'status not captured')}${ps.review_flag ? ' · review flagged' : ''}.</p>` : '<p class="abelo-popup-brief">Airframe identity is still being reconciled; unresolved fields are not guessed.</p>'}
        <div class="abelo-popup-actions">
          ${row.lessee ? `<button type="button" class="abelo-popup-airframes" data-abelo-show-aircraft="${escapeHtml(row.lessee)}">Open lessee records ↓</button>` : ''}
          ${row.source_url_1 ? `<a class="abelo-popup-source" href="${escapeHtml(row.source_url_1)}" target="_blank" rel="noopener noreferrer">Primary source ↗</a>` : ''}
          ${ps?.source_url ? `<a class="abelo-popup-source" href="${escapeHtml(ps.source_url)}" target="_blank" rel="noopener noreferrer">Planespotters ↗</a>` : ''}
        </div>
      </div>`;
  };

  const countryPopupHtml = country => {
    const placementsHere = filteredPlacements().filter(p => p.country === country);
    const mapped = airframeRows.length
      ? filteredAirframes().filter(r => r.mapped_or_gap === 'MAPPED' && r.country === country)
      : [];
    const aircraftCount = mapped.length || placementsHere.reduce((sum,p) => sum + Number(p.aircraftCount || 0), 0);
    return `
      <div class="abelo-popup-card abelo-popup-card--country">
        <div class="abelo-popup-date">Country #${escapeHtml(countryNumber.get(country) || '—')}</div>
        <div class="abelo-popup-customer">${escapeHtml(country)}</div>
        <div class="abelo-popup-ratio">
          <strong>${escapeHtml(aircraftCount)}</strong>
          <span>mapped aircraft · ${escapeHtml(placementsHere.length)} lessee${placementsHere.length === 1 ? '' : 's'}</span>
        </div>
      </div>`;
  };

    loadLeaflet().then(L => {
    const map = L.map(mapHost, { scrollWheelZoom: false, worldCopyJump: true }).setView([18, 15], 2);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 7,
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    const markerLayer = L.layerGroup().addTo(map);

    const modeControl = L.control({ position: 'topright' });
    modeControl.onAdd = () => {
      const div = L.DomUtil.create('div', 'abelo-map-mode');
      div.dataset.noGlossary = '';
      div.innerHTML = `
        <div class="abelo-map-mode__head">
          <button type="button" class="abelo-map-layers-toggle" data-abelo-layers-toggle aria-expanded="false">
            <span>Layers</span><b data-abelo-layer-summary>Lessees</b>
          </button>
          <div class="abelo-map-mode__head-actions">
            <button type="button" class="abelo-map-filter-toggle" data-abelo-map-filter aria-pressed="true">Filters</button>
            <button type="button" class="abelo-map-fullscreen" data-abelo-fullscreen aria-label="Toggle full screen">⛶</button>
          </div>
        </div>
        <div class="abelo-map-layer-popover" data-abelo-layer-popover hidden>
          <label><input type="checkbox" value="lessees" checked> <span>Lessees</span><b>1–26</b></label>
          <label><input type="checkbox" value="aircraft"> <span>Aircraft</span><b>1–61</b></label>
          <label><input type="checkbox" value="countries"> <span>Countries</span><b>1–19</b></label>
          <button type="button" class="abelo-map-layer-apply" data-abelo-layer-apply>OK</button>
        </div>
      `;
      L.DomEvent.disableClickPropagation(div);
      L.DomEvent.disableScrollPropagation(div);
      return div;
    };
    modeControl.addTo(map);
    const modeHost = modeControl.getContainer();
    const layerPopover = modeHost.querySelector('[data-abelo-layer-popover]');
    const layerToggle = modeHost.querySelector('[data-abelo-layers-toggle]');
    const layerApply = modeHost.querySelector('[data-abelo-layer-apply]');
    const filterToggle = modeHost.querySelector('[data-abelo-map-filter]');
    const filterHome = document.createComment('abelo-filter-home');
    filterHost.parentNode.insertBefore(filterHome, filterHost);
    let fullscreenFilterVisible = true;

    const setFilterOverlay = active => {
      const isFallback = mapHost.classList.contains('is-map-fullscreen-fallback');
      if (active || isFallback) {
        if (filterHost.parentNode !== mapHost) mapHost.appendChild(filterHost);
        filterHost.classList.add('is-map-overlay');
        filterHost.hidden = !fullscreenFilterVisible;
        filterToggle.hidden = false;
        filterToggle.classList.toggle('is-active', fullscreenFilterVisible);
        filterToggle.setAttribute('aria-pressed', fullscreenFilterVisible ? 'true' : 'false');
        L.DomEvent.disableClickPropagation(filterHost);
        L.DomEvent.disableScrollPropagation(filterHost);
      } else {
        if (filterHome.parentNode) filterHome.parentNode.insertBefore(filterHost, filterHome.nextSibling);
        filterHost.classList.remove('is-map-overlay');
        filterHost.hidden = false;
        filterToggle.hidden = true;
      }
    };

    const unlocatedControl = L.control({ position: 'bottomleft' });
    unlocatedControl.onAdd = () => {
      const div = L.DomUtil.create('div', 'abelo-unlocated-aircraft');
      div.hidden = true;
      L.DomEvent.disableClickPropagation(div);
      return div;
    };
    unlocatedControl.addTo(map);
    const unlocatedHost = unlocatedControl.getContainer();

    const filteredPlacements = () => rankedPlacements.filter(p => {
      if (activeLessee && p.customer !== activeLessee) return false;
      if (activeCountry && p.country !== activeCountry) return false;
      if (activeRegion && p.region !== activeRegion) return false;
      if (activeModel && airframeRows.length) {
        const hasModel = airframeRows.some(r =>
          r.mapped_or_gap === 'MAPPED' &&
          r.lessee === p.customer &&
          r.model === activeModel
        );
        if (!hasModel) return false;
      }
      return true;
    });

    const syncFilterUi = () => {
      filterHost.querySelectorAll('[data-region]').forEach(button => {
        if (!button.classList.contains('abelo-filter-chip--region')) return;
        const selected = button.dataset.region === activeRegion;
        button.classList.toggle('is-active', selected);
        button.setAttribute('aria-pressed', selected ? 'true' : 'false');
      });

      filterHost.querySelectorAll('[data-country]').forEach(button => {
        button.hidden = false;
        const selected = button.dataset.country === activeCountry;
        button.classList.toggle('is-active', selected);
        button.setAttribute('aria-pressed', selected ? 'true' : 'false');
      });

      filterHost.querySelectorAll('[data-lessee]').forEach(button => {
        button.hidden = false;
        const selected = button.dataset.lessee === activeLessee;
        button.classList.toggle('is-active', selected);
        button.classList.remove('is-muted');
        button.setAttribute('aria-pressed', selected ? 'true' : 'false');
      });

      filterHost.querySelectorAll('[data-model]').forEach(button => {
        const selected = button.dataset.model === activeModel;
        button.classList.toggle('is-active', selected);
        button.setAttribute('aria-pressed', selected ? 'true' : 'false');
      });

      const visible = filteredPlacements();
      const filteredAircraft = airframeRows.length ? filteredAirframes().filter(r => r.mapped_or_gap === 'MAPPED') : [];
      const aircraft = activeModel && airframeRows.length
        ? filteredAircraft.length
        : visible.reduce((sum, p) => sum + Number(p.aircraftCount || 0), 0);
      const visibleCountries = new Set(visible.map(p => p.country)).size;
      const noFilter = !activeRegion && !activeCountry && !activeLessee && !activeModel;
      statusHost.textContent = noFilter
        ? '26 lessees · 19 countries · 61 aircraft control total'
        : `${visible.length} lessee${visible.length === 1 ? '' : 's'} · ${visibleCountries} countr${visibleCountries === 1 ? 'y' : 'ies'} · ${aircraft} mapped aircraft${activeModel ? ' · ' + activeModel : ''}`;
      clearButton.disabled = !activeRegion && !activeCountry && !activeLessee && !activeModel;
      renderAirframes();
    };

    const placementForLessee = lessee => rankedPlacements.find(p => p.customer === lessee) || null;

    const aircraftItems = () => filteredAirframes()
      .filter(row => row.mapped_or_gap === 'MAPPED' && row.lessee)
      .map(row => ({ row, placement: placementForLessee(row.lessee) }))
      .filter(item => item.placement);

    const aircraftOffsets = items => {
      const clusters = [];
      items.forEach(item => {
        const p = item.placement;
        let cluster = clusters.find(group =>
          Math.abs(group.lat - p.lat) <= 0.35 && Math.abs(group.lng - p.lng) <= 0.35
        );
        if (!cluster) {
          cluster = { lat: p.lat, lng: p.lng, items: [] };
          clusters.push(cluster);
        }
        cluster.items.push(item);
      });

      const offsets = new Map();
      clusters.forEach(cluster => {
        const n = cluster.items.length;
        cluster.items.forEach((item, index) => {
          if (n === 1) {
            offsets.set(item.row.slot_id, { x: 0, y: 0 });
            return;
          }
          const ring = Math.floor(index / 8);
          const inRing = index % 8;
          const ringCount = Math.min(8, n - ring * 8);
          const radius = 34 + ring * 26;
          const angle = -Math.PI / 2 + (2 * Math.PI * inRing / Math.max(1, ringCount));
          offsets.set(item.row.slot_id, {
            x: Math.round(Math.cos(angle) * radius),
            y: Math.round(Math.sin(angle) * radius)
          });
        });
      });
      return offsets;
    };

    const syncModeButtons = () => {
      const labels = { lessees: 'Lessees', aircraft: 'Aircraft', countries: 'Countries' };
      modeHost.querySelectorAll('[data-abelo-layer-popover] input[type="checkbox"]').forEach(input => {
        input.checked = activeModes.has(input.value);
      });
      const selected = [...activeModes].map(mode => labels[mode]).filter(Boolean);
      const summary = modeHost.querySelector('[data-abelo-layer-summary]');
      if (summary) summary.textContent = selected.join(' + ') || 'Choose';
      if (layerApply) layerApply.disabled = activeModes.size === 0;
    };

    const renderMarkers = ({ fit = true } = {}) => {
      markerLayer.clearLayers();
      syncModeButtons();

      const fitPoints = [];
      let unlocated = [];

      if (activeModes.has('lessees')) {
        const visible = filteredPlacements();
        visible.forEach(p => {
          const offset = pinOffsets.get(p.sourceIndex) || { x: 0, y: 0 };
          const color = countryColor(p.country);
          const icon = L.divIcon({
            className: 'abelo-numbered-marker',
            html: `<span class="abelo-numbered-marker__badge" style="--pin-x:${offset.x}px;--pin-y:${offset.y}px;--pin-color:${color}">${escapeHtml(p.recencyRank)}</span>`,
            iconSize: [30, 30],
            iconAnchor: [15, 15],
            popupAnchor: [offset.x, offset.y - 18]
          });

          const marker = L.marker([p.lat, p.lng], {
            icon,
            title: `Lessee #${p.recencyRank} · ${p.customer} · ${p.country}`,
            riseOnHover: true,
            zIndexOffset: 100
          })
            .addTo(markerLayer)
            .bindPopup(() => popupHtml(p), { maxWidth: 520, minWidth: 390 });

          marker.on('click', () => {
            if (!airframeRows.length) return;
            activeRegion = null;
            activeCountry = null;
            activeLessee = p.customer;
            renderAirframes();
          });
          fitPoints.push([p.lat,p.lng]);
        });
      }

      if (activeModes.has('countries')) {
        const visible = filteredPlacements();
        const grouped = new Map();
        visible.forEach(p => {
          if (!grouped.has(p.country)) grouped.set(p.country, []);
          grouped.get(p.country).push(p);
        });

        grouped.forEach((rows, country) => {
          const lat = rows.reduce((sum,p) => sum + p.lat, 0) / rows.length;
          const lng = rows.reduce((sum,p) => sum + p.lng, 0) / rows.length;
          const color = countryColor(country);
          const icon = L.divIcon({
            className: 'abelo-country-marker',
            html: `<span class="abelo-country-marker__badge" style="--pin-color:${color}">${escapeHtml(countryNumber.get(country) || '—')}</span>`,
            iconSize: [32, 32],
            iconAnchor: [16, 16],
            popupAnchor: [0, -18]
          });
          L.marker([lat,lng], {
            icon,
            title: `Country #${countryNumber.get(country) || ''} · ${country}`,
            riseOnHover: true,
            zIndexOffset: 200
          })
            .addTo(markerLayer)
            .bindPopup(() => countryPopupHtml(country), { maxWidth: 420, minWidth: 320 });
          fitPoints.push([lat,lng]);
        });
      }

      if (activeModes.has('aircraft') && airframeRows.length) {
        const items = aircraftItems();
        const offsets = aircraftOffsets(items);

        items.forEach(({ row, placement }) => {
          const offset = offsets.get(row.slot_id) || { x: 0, y: 0 };
          const icon = L.divIcon({
            className: 'abelo-aircraft-marker',
            html: `<span class="abelo-aircraft-marker__badge" style="--pin-x:${offset.x}px;--pin-y:${offset.y}px;--aircraft-color:${aircraftColor(row.model)}"><span class="abelo-aircraft-marker__wing">✈</span><b>${escapeHtml(row.aircraftNumber)}</b></span>`,
            iconSize: [52, 38],
            iconAnchor: [26, 19],
            popupAnchor: [offset.x, offset.y - 22]
          });
          L.marker([placement.lat, placement.lng], {
            icon,
            title: `Aircraft #${row.aircraftNumber} · ${row.model || row.family || ''} · ${row.lessee || ''}`,
            riseOnHover: true,
            zIndexOffset: 300
          })
            .addTo(markerLayer)
            .bindPopup(() => aircraftPopupHtml(row), { maxWidth: 520, minWidth: 390 });
          fitPoints.push([placement.lat, placement.lng]);
        });

        unlocated = filteredAirframes().filter(row =>
          row.mapped_or_gap === 'RECONCILIATION GAP' || !row.lessee || !placementForLessee(row.lessee)
        );
      }

      unlocatedHost.hidden = !activeModes.has('aircraft') || !unlocated.length;
      unlocatedHost.innerHTML = (!unlocatedHost.hidden && unlocated.length) ? `
        <strong>Unlocated / reconciliation</strong>
        <div>${unlocated.map(row => `<span class="abelo-aircraft-marker__badge is-unlocated" style="--aircraft-color:${aircraftColor(row.model)}"><span class="abelo-aircraft-marker__wing">✈</span><b>${escapeHtml(row.aircraftNumber)}</b></span>`).join('')}</div>
      ` : '';

      syncFilterUi();

      if (fit && fitPoints.length) {
        const group = L.featureGroup(fitPoints.map(([lat,lng]) => L.marker([lat,lng])));
        map.fitBounds(group.getBounds().pad(0.18), { maxZoom: fitPoints.length === 1 ? 5 : 3 });
      }
    };

    modeHost.addEventListener('click', event => {
      const toggleButton = event.target.closest('[data-abelo-layers-toggle]');
      if (toggleButton) {
        const opening = layerPopover.hidden;
        layerPopover.hidden = !opening;
        layerToggle.setAttribute('aria-expanded', opening ? 'true' : 'false');
        if (opening) syncModeButtons();
        return;
      }

      const applyButton = event.target.closest('[data-abelo-layer-apply]');
      if (applyButton) {
        const selected = new Set(
          Array.from(layerPopover.querySelectorAll('input[type="checkbox"]:checked')).map(input => input.value)
        );
        if (!selected.size) return;
        activeModes = selected;
        layerPopover.hidden = true;
        layerToggle.setAttribute('aria-expanded', 'false');
        renderMarkers();
        return;
      }

      const filterButton = event.target.closest('[data-abelo-map-filter]');
      if (filterButton) {
        fullscreenFilterVisible = !fullscreenFilterVisible;
        filterHost.hidden = !fullscreenFilterVisible;
        filterButton.classList.toggle('is-active', fullscreenFilterVisible);
        filterButton.setAttribute('aria-pressed', fullscreenFilterVisible ? 'true' : 'false');
        return;
      }

      const fullButton = event.target.closest('[data-abelo-fullscreen]');
      if (!fullButton) return;

      if (document.fullscreenElement === mapHost) {
        document.exitFullscreen?.();
      } else if (mapHost.requestFullscreen) {
        mapHost.requestFullscreen();
      } else {
        const entering = !mapHost.classList.contains('is-map-fullscreen-fallback');
        mapHost.classList.toggle('is-map-fullscreen-fallback', entering);
        fullButton.textContent = entering ? '×' : '⛶';
        setFilterOverlay(entering);
        window.setTimeout(() => map.invalidateSize(), 80);
      }
    });

    layerPopover.addEventListener('change', () => {
      const checked = layerPopover.querySelectorAll('input[type="checkbox"]:checked').length;
      layerApply.disabled = checked === 0;
    });

    document.addEventListener('fullscreenchange', () => {
      const isFullscreen = document.fullscreenElement === mapHost;
      const fullButton = modeHost.querySelector('[data-abelo-fullscreen]');
      if (fullButton) fullButton.textContent = isFullscreen ? '×' : '⛶';
      setFilterOverlay(isFullscreen);
      window.setTimeout(() => map.invalidateSize(), 80);
    });

    document.addEventListener('abeloAirframesLoaded', () => {
      if (activeModes.has('aircraft')) renderMarkers({ fit: false });
    });

    regionFilterHost.addEventListener('click', event => {
      const button = event.target.closest('.abelo-filter-chip--region[data-region]');
      if (!button) return;
      const next = button.dataset.region;
      const turningOff = activeRegion === next && !activeCountry && !activeLessee;
      activeRegion = turningOff ? null : next;
      activeCountry = null;
      activeLessee = null;
      renderMarkers();
    });

    countryFilterHost.addEventListener('click', event => {
      const button = event.target.closest('[data-country]');
      if (!button) return;
      const next = button.dataset.country;
      const turningOff = activeCountry === next && !activeRegion && !activeLessee;
      activeRegion = null;
      activeCountry = turningOff ? null : next;
      activeLessee = null;
      renderMarkers();
    });

    lesseeFilterHost.addEventListener('click', event => {
      const button = event.target.closest('[data-lessee]');
      if (!button) return;
      const next = button.dataset.lessee;
      const turningOff = activeLessee === next && !activeRegion && !activeCountry;
      activeRegion = null;
      activeCountry = null;
      activeLessee = turningOff ? null : next;
      renderMarkers();
    });

    modelFilterHost.addEventListener('click', event => {
      const button = event.target.closest('[data-model]');
      if (!button) return;
      const next = button.dataset.model;
      activeModel = activeModel === next ? null : next;
      renderMarkers();
    });

    mapHost.addEventListener('click', event => {
      const button = event.target.closest('[data-abelo-show-aircraft]');
      if (!button) return;
      activeRegion = null;
      activeCountry = null;
      activeLessee = button.dataset.abeloShowAircraft;
      renderMarkers();
      window.setTimeout(() => airframeHost.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80);
    });

    clearButton.addEventListener('click', () => {
      activeRegion = null;
      activeCountry = null;
      activeLessee = null;
      activeModel = null;
      renderMarkers();
    });

    renderMarkers();
  }).catch(() => {
    mapHost.innerHTML = '<p style="padding:1rem">Interactive map unavailable. The placement list below remains available.</p>';
  });
  };

  initAbeloMap();
  document.addEventListener('abeloResearchRendered', initAbeloMap);
})();


// Render the Abelo placement map as a standalone development/app.
(() => {
  const body = document.getElementById('docBody');
  if (!body) return;

  const marker = [...body.querySelectorAll('p')].find(p => p.textContent.trim() === 'ABEL0_MAP_APP');
  if (!marker) return;

  const wrapper = document.createElement('div');
  wrapper.className = 'abelo-map';
  wrapper.dataset.abeloMap = '';
  wrapper.dataset.noGlossary = '';
  wrapper.innerHTML = `
    <div class="abelo-map-canvas" id="abeloWorldMap" role="img" aria-label="World map of Abelo and Elix aircraft placements"></div>
    <div class="abelo-map-kpis">
      <div><strong>61</strong><span>Aircraft</span></div>
      <div><strong>26</strong><span>Lessees</span></div>
      <div><strong>19</strong><span>Countries</span></div>
    </div>
  `;

  marker.replaceWith(wrapper);
  document.dispatchEvent(new CustomEvent('abeloResearchRendered'));
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
    <p><strong>Click a numbered marker for a deliberately simple fleet card</strong>. Pin 1 is the oldest documented customer relationship in this reconstruction; pin numbers increase oldest → newest by first documented year. Same-city customers are offset slightly so their pins do not sit on top of one another. Counts refer to the Abelo-linked aircraft identified in the public material shown here, <strong>not the airline’s total fleet</strong>.</p>
    <div class="abelo-map" data-abelo-map>
      <div class="abelo-map-canvas" id="abeloWorldMap" role="img" aria-label="World map of documented Abelo aircraft placements"></div>
      <p class="abelo-map-note"><strong>Map key:</strong> numbered pins show customer chronology (1 = oldest; highest number = newest) and are colour-coded by country. Same-city pins are visually offset but retain their original geographic anchor. Locations are operating markets, not live aircraft positions.</p>
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

  // Interview planning tool lives in the Portfolio with the other interactive work.
  (() => {
    const output = document.getElementById('abeloCountdown');
    if (!output) return;
    const interview = new Date('2026-09-29T11:10:00+01:00');
    function updateCountdown() {
      const ms = interview.getTime() - Date.now();
      if (ms <= 0) {
        output.textContent = 'Interview time';
        return;
      }
      const totalMinutes = Math.ceil(ms / 60000);
      const days = Math.floor(totalMinutes / 1440);
      const hours = Math.floor((totalMinutes % 1440) / 60);
      const minutes = totalMinutes % 60;
      output.textContent = days + 'd ' + String(hours).padStart(2, '0') + 'h ' + String(minutes).padStart(2, '0') + 'm';
    }
    updateCountdown();
    setInterval(updateCountdown, 15000);
  })();


// ATR-only public fleet and maintenance reporting dashboard.
(() => {
  const body = document.getElementById('docBody');
  if (!body) return;

  const marker = [...body.querySelectorAll('p')].find(p => p.textContent.trim() === 'ATR_FLEET_DASHBOARD_APP');
  if (!marker) return;

  const models = {
    'atr42-500': {
      label: 'ATR 42-500',
      generation: '500 series',
      engine: 'PW127 family',
      role: 'Earlier-generation 50-seat-class regional turboprop',
      watch: 'Cycles, engine / propeller condition, landing gear, structural and calendar tasks'
    },
    'atr42-600': {
      label: 'ATR 42-600',
      generation: '600 series',
      engine: 'PW127M / PW127XT-M',
      role: 'Current-generation smaller ATR',
      watch: 'FH + FC + calendar, engine time on wing, LLPs, component status'
    },
    'atr72-500': {
      label: 'ATR 72-500',
      generation: '500 series',
      engine: 'PW127 family',
      role: 'Earlier-generation larger ATR',
      watch: 'Transition condition, cycles, engine / propeller, landing gear and heavy-check status'
    },
    'atr72-600': {
      label: 'ATR 72-600',
      generation: '600 series',
      engine: 'PW127M / PW127XT-M',
      role: 'Current-generation larger ATR',
      watch: 'FH + FC + calendar, engine events, LLPs, maintenance programme and records'
    }
  };

  const wrapper = document.createElement('div');
  wrapper.className = 'atr-reporting-dashboard';
  wrapper.innerHTML = `
    <div class="lease-kpis atr-global-kpis">
      <div><span>ATR delivered</span><strong>1,700+</strong><small>as of Dec 2024</small></div>
      <div><span>Aircraft sold</span><strong>1,800+</strong><small>as of Dec 2024</small></div>
      <div><span>Backlog</span><strong>160+</strong><small>Feb 2026</small></div>
      <div><span>2025 second-hand transactions</span><strong>90+</strong><small>public ATR figure</small></div>
    </div>

    <div class="lease-grid atr-util-grid">
      <div class="lease-controls">
        <h3>Utilisation model</h3>
        <p>Change the operating pattern. The point is to keep <strong>flight hours</strong> and <strong>flight cycles</strong> separate.</p>

        <label>Aircraft model
          <select id="atrDashModel">
            <option value="atr42-500">ATR 42-500</option>
            <option value="atr42-600">ATR 42-600</option>
            <option value="atr72-500">ATR 72-500</option>
            <option value="atr72-600" selected>ATR 72-600</option>
          </select>
        </label>

        <label>Sectors per day <output id="atrSectorsOut">6</output>
          <input id="atrSectors" type="range" min="1" max="12" step="1" value="6">
        </label>

        <label>Average sector time <output id="atrSectorHoursOut">1.0 h</output>
          <input id="atrSectorHours" type="range" min="0.5" max="4" step="0.1" value="1">
        </label>

        <label>Operating days per year <output id="atrDaysOut">330</output>
          <input id="atrDays" type="range" min="250" max="365" step="5" value="330">
        </label>
      </div>

      <div class="lease-output">
        <div class="lease-kpis">
          <div><span>Annual flight cycles</span><strong id="atrAnnualCycles">—</strong></div>
          <div><span>Annual flight hours</span><strong id="atrAnnualHours">—</strong></div>
          <div><span>A-check reference</span><strong>750 FH</strong><small>ATR manufacturer reference</small></div>
          <div><span>C-check reference</span><strong>8,000 FH</strong><small>ATR manufacturer reference</small></div>
        </div>

        <div class="lease-mini-grid">
          <div>
            <h3 id="atrModelTitle">ATR 72-600</h3>
            <p id="atrModelMeta">—</p>
            <p><strong>Watch:</strong> <span id="atrModelWatch">—</span></p>
          </div>
          <div>
            <h3>Short-haul effect</h3>
            <p id="atrCycleMessage">—</p>
          </div>
        </div>

        <div class="lease-note">
          <strong>Maintenance language:</strong> FH = flight hours; FC = flight cycles; calendar = elapsed time. Individual component and airframe tasks may use different limits. Exact due dates come from the approved maintenance programme and aircraft/component records.
        </div>
      </div>
    </div>

    <div class="lease-mini-grid atr-maintenance-grid">
      <div><h3>Airframe</h3><p>Structural inspections, corrosion, modifications, AD/SB status and heavy-check position.</p></div>
      <div><h3>Engines</h3><p>Hours, cycles, time on wing, LLP remaining life, shop-visit status and records.</p></div>
      <div><h3>Landing gear</h3><p>Cycle-sensitive usage, overhaul status and remaining interval.</p></div>
      <div><h3>Propellers</h3><p>Hours / calendar status, overhaul history and configuration.</p></div>
      <div><h3>Records</h3><p>Traceability matters: maintenance status is only as useful as the technical records supporting it.</p></div>
      <div><h3>Reserves</h3><p>Technical consumption becomes a financial exposure through hour-, cycle- or event-linked reserve mechanisms.</p></div>
    </div>
  `;

  marker.replaceWith(wrapper);

  const modelEl = wrapper.querySelector('#atrDashModel');
  const sectorsEl = wrapper.querySelector('#atrSectors');
  const hoursEl = wrapper.querySelector('#atrSectorHours');
  const daysEl = wrapper.querySelector('#atrDays');

  const update = () => {
    const model = models[modelEl.value] || models['atr72-600'];
    const sectors = Number(sectorsEl.value);
    const sectorHours = Number(hoursEl.value);
    const days = Number(daysEl.value);
    const annualCycles = sectors * days;
    const annualHours = annualCycles * sectorHours;

    wrapper.querySelector('#atrSectorsOut').textContent = sectors;
    wrapper.querySelector('#atrSectorHoursOut').textContent = sectorHours.toFixed(1) + ' h';
    wrapper.querySelector('#atrDaysOut').textContent = days;
    wrapper.querySelector('#atrAnnualCycles').textContent = Math.round(annualCycles).toLocaleString();
    wrapper.querySelector('#atrAnnualHours').textContent = Math.round(annualHours).toLocaleString() + ' h';
    wrapper.querySelector('#atrModelTitle').textContent = model.label;
    wrapper.querySelector('#atrModelMeta').textContent = model.generation + ' · ' + model.engine + ' · ' + model.role;
    wrapper.querySelector('#atrModelWatch').textContent = model.watch;

    const cyclesPerHour = annualHours ? annualCycles / annualHours : 0;
    wrapper.querySelector('#atrCycleMessage').innerHTML =
      `At this pattern the aircraft accumulates <strong>${cyclesPerHour.toFixed(2)} cycles per flight hour</strong>. Shorter sectors push that ratio upward: the aircraft reaches more take-offs and landings for the same amount of flying time.`;
  };

  [modelEl, sectorsEl, hoursEl, daysEl].forEach(el => el.addEventListener('input', update));
  update();
})();


// Data-driven global ATR production-list browser.
(() => {
  const dashboard = document.querySelector('.atr-reporting-dashboard');
  if (!dashboard || dashboard.dataset.globalFleetReady === 'true') return;
  dashboard.dataset.globalFleetReady = 'true';

  const escapeAtr = value => String(value ?? '').replace(/[&<>"']/g, ch => ({
    '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'
  }[ch]));

  const section = document.createElement('section');
  section.className = 'atr-fleet-browser';
  section.innerHTML = `
    <div class="atr-fleet-browser__head">
      <div>
        <span class="abelo-airframes__eyebrow">GLOBAL ATR AIRFRAME DATA</span>
        <h3>Production-list browser</h3>
        <p>Search the captured ATR 42 / ATR 72 production list by MSN, registration, operator, model, delivery date or status.</p>
      </div>
      <div class="atr-data-boundary">
        <strong>Evidence boundary</strong>
        <span>Planespotters is a secondary aircraft-history source. Rows carrying an OCR review flag should be checked against the source page before publication.</span>
      </div>
    </div>

    <div class="atr-data-kpis" data-atr-data-kpis></div>

    <div class="atr-fleet-controls">
      <label>Search
        <input type="search" data-atr-search placeholder="MSN, registration, operator…">
      </label>
      <label>Family
        <select data-atr-family>
          <option value="">All ATR</option>
          <option value="ATR 42">ATR 42</option>
          <option value="ATR 72">ATR 72</option>
        </select>
      </label>
      <label>Status
        <select data-atr-status><option value="">All statuses</option></select>
      </label>
      <label>Delivery decade
        <select data-atr-decade><option value="">All decades</option></select>
      </label>
      <label>Data quality
        <select data-atr-quality>
          <option value="">All rows</option>
          <option value="clear">No review flag</option>
          <option value="review">Review flagged</option>
        </select>
      </label>
    </div>

    <div class="atr-data-visuals">
      <div class="atr-data-card">
        <strong>Status mix</strong>
        <div data-atr-status-bars></div>
      </div>
      <div class="atr-data-card">
        <strong>Model mix</strong>
        <div data-atr-model-bars></div>
      </div>
    </div>

    <div class="atr-fleet-result-head">
      <span data-atr-result-count>Loading global ATR records…</span>
      <div>
        <button type="button" data-atr-prev>← Previous</button>
        <span data-atr-page></span>
        <button type="button" data-atr-next>Next →</button>
      </div>
    </div>
    <div class="atr-fleet-table-wrap" data-atr-table></div>
  `;
  dashboard.appendChild(section);

  const search = section.querySelector('[data-atr-search]');
  const family = section.querySelector('[data-atr-family]');
  const status = section.querySelector('[data-atr-status]');
  const decade = section.querySelector('[data-atr-decade]');
  const quality = section.querySelector('[data-atr-quality]');
  const resultCount = section.querySelector('[data-atr-result-count]');
  const tableHost = section.querySelector('[data-atr-table]');
  const kpiHost = section.querySelector('[data-atr-data-kpis]');
  const statusBars = section.querySelector('[data-atr-status-bars]');
  const modelBars = section.querySelector('[data-atr-model-bars]');
  const prev = section.querySelector('[data-atr-prev]');
  const next = section.querySelector('[data-atr-next]');
  const pageLabel = section.querySelector('[data-atr-page]');

  let rows = [];
  let page = 1;
  const pageSize = 60;

  const familyName = row => {
    const type = String(row.aircraft_type || '').toUpperCase();
    if (type.includes('ATR 42')) return 'ATR 42';
    if (type.includes('ATR 72')) return 'ATR 72';
    return 'Other ATR';
  };

  const statusName = row => {
    const s = String(row.status || '').toLowerCase();
    if (s.includes('active')) return 'Active';
    if (s.includes('stored')) return 'Stored';
    if (s.includes('scrap')) return 'Scrapped';
    if (s.includes('written')) return 'Written Off';
    if (s.includes('preserv')) return 'Preserved';
    if (s.includes('order')) return 'On Order';
    if (!s.trim()) return 'Unknown';
    return 'Other';
  };

  const modelName = row => {
    const type = String(row.aircraft_type || '');
    const m = type.match(/ATR\s*(42|72)[-\s]?(200|300|320|400|500|600)/i);
    return m ? `ATR ${m[1]}-${m[2]}` : familyName(row);
  };

  const decadeName = row => {
    const y = Number(row.delivery_year);
    return Number.isFinite(y) && y >= 1980 ? `${Math.floor(y / 10) * 10}s` : 'Unknown';
  };

  const filtered = () => {
    const q = search.value.trim().toLowerCase();
    return rows.filter(row => {
      if (family.value && familyName(row) !== family.value) return false;
      if (status.value && statusName(row) !== status.value) return false;
      if (decade.value && decadeName(row) !== decade.value) return false;
      if (quality.value === 'clear' && row.review_flag) return false;
      if (quality.value === 'review' && !row.review_flag) return false;
      if (!q) return true;
      return [row.msn,row.aircraft_type,row.registration,row.operator,row.delivered,row.status,row.remark]
        .some(v => String(v || '').toLowerCase().includes(q));
    });
  };

  const drawBars = (host, entries) => {
    const max = Math.max(1, ...entries.map(([,n]) => n));
    host.innerHTML = entries.map(([label,n]) => `
      <div class="atr-data-bar">
        <span>${escapeAtr(label)}</span>
        <div><i style="width:${Math.max(2,(n/max)*100).toFixed(1)}%"></i></div>
        <strong>${Number(n).toLocaleString()}</strong>
      </div>`).join('');
  };

  const render = () => {
    const current = filtered();
    const pages = Math.max(1, Math.ceil(current.length / pageSize));
    if (page > pages) page = pages;
    const start = (page - 1) * pageSize;
    const shown = current.slice(start, start + pageSize);

    resultCount.textContent = `${current.length.toLocaleString()} matching airframes · showing ${current.length ? start + 1 : 0}–${Math.min(start + pageSize,current.length)}`;
    pageLabel.textContent = `Page ${page} of ${pages}`;
    prev.disabled = page <= 1;
    next.disabled = page >= pages;

    tableHost.innerHTML = shown.length ? `
      <table class="atr-fleet-table">
        <thead><tr><th>MSN</th><th>Aircraft type</th><th>Registration</th><th>Operator</th><th>Delivered</th><th>Status</th><th>Quality</th><th>Source</th></tr></thead>
        <tbody>
          ${shown.map(row => `
            <tr>
              <td><strong>${escapeAtr(row.msn || '—')}</strong></td>
              <td>${escapeAtr(row.aircraft_type || '—')}</td>
              <td>${escapeAtr(row.registration || '—')}</td>
              <td>${escapeAtr(row.operator || '—')}</td>
              <td>${escapeAtr(row.delivered || '—')}</td>
              <td>${escapeAtr(statusName(row))}</td>
              <td>${row.review_flag ? `<span class="abelo-data-badge is-review">${escapeAtr(row.review_flag)}</span>` : '<span class="abelo-data-badge is-identified">clear</span>'}</td>
              <td>${row.source_url ? `<a href="${escapeAtr(row.source_url)}" target="_blank" rel="noopener noreferrer">Planespotters ↗</a>` : '—'}</td>
            </tr>`).join('')}
        </tbody>
      </table>`
      : '<p class="abelo-airframes__loading">No ATR records match these filters.</p>';
  };

  const initialise = data => {
    rows = Array.isArray(data) ? data : [];

    const statuses = [...new Set(rows.map(statusName))].sort();
    status.insertAdjacentHTML('beforeend', statuses.map(v => `<option value="${escapeAtr(v)}">${escapeAtr(v)}</option>`).join(''));

    const decades = [...new Set(rows.map(decadeName).filter(v => v !== 'Unknown'))].sort();
    decade.insertAdjacentHTML('beforeend', decades.map(v => `<option value="${escapeAtr(v)}">${escapeAtr(v)}</option>`).join(''));

    const count42 = rows.filter(r => familyName(r) === 'ATR 42').length;
    const count72 = rows.filter(r => familyName(r) === 'ATR 72').length;
    const active = rows.filter(r => statusName(r) === 'Active').length;
    const review = rows.filter(r => r.review_flag).length;

    kpiHost.innerHTML = `
      <div><span>Captured airframes</span><strong>${rows.length.toLocaleString()}</strong></div>
      <div><span>ATR 42</span><strong>${count42.toLocaleString()}</strong></div>
      <div><span>ATR 72</span><strong>${count72.toLocaleString()}</strong></div>
      <div><span>Active rows</span><strong>${active.toLocaleString()}</strong></div>
      <div><span>Review flagged</span><strong>${review.toLocaleString()}</strong></div>
    `;

    const statusCounts = [...new Set(rows.map(statusName))].map(s => [s, rows.filter(r => statusName(r) === s).length]).sort((a,b)=>b[1]-a[1]).slice(0,7);
    const modelCounts = [...new Set(rows.map(modelName))].map(s => [s, rows.filter(r => modelName(r) === s).length]).sort((a,b)=>b[1]-a[1]).slice(0,8);
    drawBars(statusBars,statusCounts);
    drawBars(modelBars,modelCounts);
    render();
  };

  [search,family,status,decade,quality].forEach(el => el.addEventListener('input', () => { page = 1; render(); }));
  prev.addEventListener('click', () => { if (page > 1) { page -= 1; render(); section.scrollIntoView({behavior:'smooth',block:'start'}); } });
  next.addEventListener('click', () => { const pages=Math.max(1,Math.ceil(filtered().length/pageSize)); if(page<pages){page+=1;render();section.scrollIntoView({behavior:'smooth',block:'start'});} });

  fetch(new URL('assets/data/atr-global.json', document.baseURI))
    .then(response => {
      if (!response.ok) throw new Error('ATR dataset HTTP ' + response.status);
      return response.json();
    })
    .then(initialise)
    .catch(() => {
      resultCount.textContent = 'Global ATR dataset unavailable.';
      tableHost.innerHTML = '<p class="abelo-airframes__loading">The maintenance model above remains available.</p>';
    });
})();
