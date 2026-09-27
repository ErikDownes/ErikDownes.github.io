/* AerCap Education: one source transcript, two views, and the shared glossary. */
(() => {
  const questions = {
    'Power-by-the-Hour': [
      { prompt: 'Why did AerCap offer more PBH leases during Covid?', options: ['To remove all fixed rent permanently', 'To let early rent reflect uncertain flying while protecting later lease rates', 'To transfer aircraft ownership to airlines'], correct: 1, explain: 'PBH matched short-term rent to usage; the contract later returned to fixed rent.' },
      { prompt: 'In the five-year example with no flying in year one, what happens to fixed rent?', options: ['$0 of revenue is recognised in year one', '$800,000 is recognised each year despite different cash timing', '$1 million is recognised only in year one'], correct: 1, explain: 'The $4 million fixed component is spread evenly over five years: $800,000 each year.' },
      { prompt: 'Why could accounting revenue fall while cash collection rose as PBH expired?', options: ['Fixed rent ceased', 'The variable PBH amount no longer boosted first-year revenue, while fixed cash rent began', 'The aircraft had to be sold'], correct: 1, explain: 'The accounting comparison and the actual cash schedule have different timing.' }
    ],
    'Aircraft Leasing 101': [
      { prompt: 'Why might an airline lease a new aircraft?', options: ['To avoid all maintenance obligations', 'To access aircraft and financing earlier without funding a full purchase', 'To ensure the rent can never change before delivery'], correct: 1, explain: 'A lessor’s orderbook and funding can accelerate access while reducing capital expenditure.' },
      { prompt: 'What is the example lease pattern for a new aircraft?', options: ['One 25-year lease', 'Twelve years, then two six-year leases or extensions', 'Three leases of three years each'], correct: 1, explain: 'A twelve-year first lease followed by two six-year periods reaches roughly the passenger-service life.' },
      { prompt: 'Why match fixed lease income with fixed-rate debt or hedges?', options: ['To control the impact of changing borrowing rates', 'To eliminate aircraft maintenance', 'To raise airline ticket prices'], correct: 0, explain: 'If rent is fixed but borrowing costs float, rising rates can squeeze the lessor’s return.' }
    ],
    'Maintenance Rights Assets': [
      { prompt: 'When can a Maintenance Rights Asset arise?', options: ['When a lease is signed on a new aircraft only', 'When an aircraft is acquired with a lease promising better maintenance condition at return', 'Every time a passenger buys a ticket'], correct: 1, explain: 'An acquired lease may carry a valuable right to better condition at redelivery.' },
      { prompt: 'In the $50 million acquisition example, how is the price separated?', options: ['$35 million metal value and $15 million MRA', '$15 million metal value and $35 million MRA', '$50 million of immediate maintenance expense'], correct: 0, explain: 'The $15 million maintenance-condition right is recognised separately from the $35 million flight equipment.' },
      { prompt: 'Why can the MRA affect profit earlier than the metal?', options: ['It is amortised on lease events, potentially within two years', 'The whole aircraft must be expensed on purchase', 'It cannot ever be amortised'], correct: 0, explain: 'Metal is depreciated over remaining aircraft life; the MRA follows relevant events in the shorter remaining lease.' }
    ],
    'Maintenance Reserves': [
      { prompt: 'What does the airline pay in addition to base rent under a reserve structure?', options: ['Usage-related cash towards future major maintenance', 'A share of the lessor’s income tax', 'The full purchase price of the aircraft'], correct: 0, explain: 'Reserves usually reflect flight hours or cycles and help fund future maintenance.' },
      { prompt: 'In the twelve-year example, why is the first $10 million collected a liability?', options: ['It may need to be reimbursed for the expected shop visit', 'It is always a bank loan', 'It is owed to the manufacturer for buying the aircraft'], correct: 0, explain: 'Cash collected for qualifying work is matched by the lessor’s maintenance obligation.' },
      { prompt: 'How does an EOL arrangement differ from monthly reserves?', options: ['The airline may work on the aircraft or compensate for a return-condition shortfall at lease end', 'The airline never maintains the aircraft', 'The lessor receives a monthly PBH fee'], correct: 0, explain: 'The end-of-lease settlement deals with the condition at return rather than building the same monthly reserve balance.' }
    ],
    'The Lifecycle of an Aircraft': [
      { prompt: 'Why does AerCap favour widely used aircraft types?', options: ['They create more possible customers and placement choices', 'They guarantee there is never any credit risk', 'They require no OEM support'], correct: 0, explain: 'A broad operator base helps a lessor lease, re-lease or sell an aircraft.' },
      { prompt: 'What is the mid-life choice around years nine to twelve?', options: ['Extend, re-lease or sell after comparing value', 'Always scrap the aircraft', 'Always convert it to cargo'], correct: 0, explain: 'Condition, demand and market prices determine which route offers better relative value.' },
      { prompt: 'Why might an aircraft sell more readily with a lease attached?', options: ['A buyer can see contracted future cash flows', 'It removes all future maintenance', 'The airline becomes the owner automatically'], correct: 0, explain: 'Financial buyers may value a known stream of rent rather than an unplaced aircraft.' }
    ],
    'Managing Credit Risk in Aircraft Leasing': [
      { prompt: 'Which three protections does AerCap emphasise?', options: ['Lease structure, desirable assets and active collections', 'Only airline size, ticket price and fuel', 'Only a high security deposit'], correct: 0, explain: 'Credit discipline starts in the contract, the aircraft selection and the ongoing relationship.' },
      { prompt: 'Why can a strong aircraft with a weaker airline still be attractive?', options: ['It can be remarketed more easily if the customer gets into trouble', 'A weaker airline is always guaranteed to pay', 'The lease has no return obligations'], correct: 0, explain: 'A popular aircraft has more potential replacement customers; airline credit alone does not determine recovery options.' },
      { prompt: 'What does prompt collection achieve beyond a well-written contract?', options: ['It reveals and addresses payment problems early', 'It eliminates the need to monitor condition', 'It changes the OEM orderbook'], correct: 0, explain: 'A contract needs active payment monitoring, technical oversight and customer contact to protect its value.' }
    ],
    'Valuation Practices in Aircraft Leasing': [
      { prompt: 'Why can identical fleets show different book values?', options: ['They were acquired at different prices and recorded at depreciated cost', 'The number of aircraft is irrelevant', 'Both must always be marked to market daily'], correct: 0, explain: 'Company A paid $4 billion and B paid $6 billion for the same fleet in the example.' },
      { prompt: 'If both fleets earn $600 million and trade at 10× earnings, what is each worth?', options: ['$4 billion', '$6 billion', '$10 billion'], correct: 1, explain: 'Ten times $600 million equals a $6 billion market value for each.' },
      { prompt: 'What do the same earnings imply for return on equity?', options: ['A: 15%, B: 10%', 'A: 10%, B: 15%', 'Both: 10%'], correct: 0, explain: '$600 million divided by $4 billion is 15%; divided by $6 billion is 10%.' }
    ],
    'Balance Sheet Discipline in Aircraft Leasing': [
      { prompt: 'What is the purpose of AerCap’s leverage target?', options: ['Balance equity returns against bondholder protection', 'Eliminate all borrowing', 'Match the number of aircraft to employees'], correct: 0, explain: 'Debt can support returns, but too much reduces the balance sheet’s resilience.' },
      { prompt: 'Why diversify funding and hold liquidity?', options: ['To meet upcoming obligations and keep investing when markets change', 'To avoid assessing airlines', 'To make lease terms shorter'], correct: 0, explain: 'Multiple funding channels and a cash buffer help a lessor operate through different cycles.' },
      { prompt: 'What does asset-liability matching address?', options: ['The timing and rate structure of lease cash flows and aircraft funding', 'The seat count of every airline', 'Only the aircraft paint scheme'], correct: 0, explain: 'Fixed lease rent should not be left exposed to unexpected rises in floating financing cost.' }
    ]
  };

  const initialise = () => {
    const glossary = window.coopEducationGlossary;
    if (!glossary) return;

    let activeDeck = null;
    document.querySelectorAll('[data-aercap-beamer]').forEach(box => {
      const source = box.querySelector('.aercap-source');
      if (!source) return;
      const paragraphs = Array.from(source.querySelectorAll(':scope > p'));
      const beats = paragraphs.map(p => p.textContent.replace(/\s+/g, ' ').trim()).filter(Boolean);
      if (!beats.length) return;

      let index = 0;
      let mode = 'read';
      let questionIndex = 0;
      let resultsVisible = false;
      const quiz = questions[box.dataset.title] || [];
      let answers = Array(quiz.length).fill(null);

      const head = document.createElement('div');
      head.className = 'aercap-beamer-head';
      head.innerHTML = '<div class="aercap-beamer-brand">AERCAP · LEARNING DECK</div><div class="aercap-progress" role="progressbar" aria-label="Learning progress" aria-valuemin="1"><span></span></div><div class="aercap-counter"></div>';

      const controls = document.createElement('div');
      controls.className = 'aercap-controls';
      controls.innerHTML = '<button type="button" data-mode="read" class="is-on" aria-pressed="true">Read</button><button type="button" data-mode="learn" aria-pressed="false">Learn</button><button type="button" data-mode="test" aria-pressed="false">Test</button><span class="aercap-spacer"></span><button type="button" data-prev aria-label="Previous idea">←</button><button type="button" data-next aria-label="Next idea">Next →</button>';

      const stage = document.createElement('div');
      stage.className = 'aercap-stage';
      stage.hidden = true;
      stage.tabIndex = 0;
      stage.setAttribute('aria-label', 'Learning deck. Click, press space, or use the arrow keys to advance.');
      const read = document.createElement('div');
      read.className = 'aercap-read';
      paragraphs.forEach(p => read.appendChild(p.cloneNode(true)));
      const test = document.createElement('div');
      test.className = 'aercap-test';
      test.hidden = true;
      const pop = document.createElement('aside');
      pop.className = 'aercap-glossary-pop';
      pop.setAttribute('aria-live', 'polite');
      pop.hidden = true;

      const showTerm = term => {
        const entry = glossary.readGlossary().find(item => item.term.toLowerCase() === term.toLowerCase());
        if (!entry) return;
        const title = document.createElement('strong');
        title.textContent = entry.term;
        const definition = document.createElement('p');
        definition.textContent = entry.definition;
        pop.replaceChildren(title, definition);
        if (entry.why || entry.cue) {
          const why = document.createElement('p');
          const lead = document.createElement('b');
          lead.textContent = entry.why ? 'Why it matters: ' : 'Recall cue: ';
          why.append(lead, document.createTextNode(entry.why || entry.cue));
          pop.append(why);
        }
        pop.hidden = false;
      };

      const updateChrome = () => {
        const position = mode === 'read' ? 1 : mode === 'learn' ? index + 1 : resultsVisible ? quiz.length : questionIndex + 1;
        const total = mode === 'learn' ? beats.length : mode === 'test' ? quiz.length : 1;
        const progress = head.querySelector('.aercap-progress');
        progress.setAttribute('aria-valuemax', String(total));
        progress.setAttribute('aria-valuenow', String(position));
        progress.querySelector('span').style.width = `${(position / total) * 100}%`;
        head.querySelector('.aercap-counter').textContent = mode === 'read' ? 'FULL TEXT' : mode === 'learn' ? `${position} / ${total}` : resultsVisible ? 'REVIEW' : `QUESTION ${position} / ${total}`;
        const previous = controls.querySelector('[data-prev]');
        const next = controls.querySelector('[data-next]');
        previous.hidden = next.hidden = mode === 'read';
        previous.disabled = mode === 'learn' ? index === 0 : mode === 'test' ? questionIndex === 0 && !resultsVisible : true;
        next.disabled = mode === 'test' && !resultsVisible && answers[questionIndex] === null;
        next.textContent = mode === 'learn' && index === beats.length - 1 ? 'Replay ↺' : mode === 'test' && resultsVisible ? 'Try again ↺' : mode === 'test' && questionIndex === quiz.length - 1 ? 'Results →' : 'Next →';
        next.setAttribute('aria-label', next.textContent);
      };

      const renderLearn = () => {
        stage.replaceChildren();
        const start = Math.max(0, index - 3);
        beats.slice(start, index + 1).forEach((text, offset) => {
          const paragraph = document.createElement('p');
          paragraph.className = 'aercap-beat';
          if (start + offset === index) paragraph.classList.add('is-active');
          else if (start + offset >= index - 1) paragraph.classList.add('is-recent');
          paragraph.textContent = text;
          stage.append(paragraph);
        });
        glossary.linkKnownGlossaryTerms(stage, showTerm);
        updateChrome();
        pop.hidden = true;
      };

      const renderTest = () => {
        test.replaceChildren();
        if (resultsVisible) {
          const score = answers.filter((answer, i) => answer === quiz[i].correct).length;
          const heading = document.createElement('h3');
          heading.textContent = `${score} of ${quiz.length} understood`;
          const detail = document.createElement('p');
          detail.textContent = 'Use any explanation below to revisit an idea, then try again when ready.';
          test.append(heading, detail);
          quiz.forEach((item, i) => {
            const summary = document.createElement('p');
            summary.className = answers[i] === item.correct ? 'aercap-test-correct' : 'aercap-test-review';
            summary.textContent = `${answers[i] === item.correct ? '✓' : '↗'} ${item.explain}`;
            test.append(summary);
          });
          glossary.linkKnownGlossaryTerms(test, showTerm);
          updateChrome();
          return;
        }
        const item = quiz[questionIndex];
        const heading = document.createElement('h3');
        heading.textContent = item.prompt;
        test.append(heading);
        glossary.linkKnownGlossaryTerms(heading, showTerm);
        const options = document.createElement('div');
        options.className = 'aercap-test-options';
        item.options.forEach((option, optionIndex) => {
          const button = document.createElement('button');
          button.type = 'button';
          button.textContent = option;
          if (answers[questionIndex] !== null) {
            button.disabled = true;
            if (optionIndex === item.correct) button.classList.add('is-correct');
            else if (optionIndex === answers[questionIndex]) button.classList.add('is-incorrect');
          }
          button.addEventListener('click', () => {
            if (answers[questionIndex] !== null) return;
            answers[questionIndex] = optionIndex;
            renderTest();
          });
          options.append(button);
        });
        test.append(options);
        if (answers[questionIndex] !== null) {
          const feedback = document.createElement('p');
          feedback.className = 'aercap-test-feedback';
          feedback.setAttribute('role', 'status');
          feedback.textContent = `${answers[questionIndex] === item.correct ? 'Exactly. ' : 'Look again. '}${item.explain}`;
          test.append(feedback);
          glossary.linkKnownGlossaryTerms(feedback, showTerm);
        }
        updateChrome();
      };

      const next = () => {
        if (mode === 'learn') { index = index === beats.length - 1 ? 0 : index + 1; renderLearn(); }
        else if (mode === 'test') {
          if (resultsVisible) { answers = Array(quiz.length).fill(null); questionIndex = 0; resultsVisible = false; }
          else if (answers[questionIndex] === null) return;
          else if (questionIndex === quiz.length - 1) resultsVisible = true;
          else questionIndex++;
          renderTest();
        }
      };
      const previous = () => {
        if (mode === 'learn' && index > 0) { index--; renderLearn(); }
        else if (mode === 'test') { if (resultsVisible) resultsVisible = false; else if (questionIndex > 0) questionIndex--; renderTest(); }
      };
      box.navigate = { next, previous, get mode() { return mode; } };
      glossary.linkKnownGlossaryTerms(read, showTerm);

      controls.addEventListener('click', event => {
        const button = event.target.closest('button');
        if (!button) return;
        activeDeck = box;
        if (button.hasAttribute('data-next')) next();
        else if (button.hasAttribute('data-prev')) previous();
        else if (button.dataset.mode) {
          mode = button.dataset.mode;
          stage.hidden = mode !== 'learn';
          read.hidden = mode !== 'read';
          test.hidden = mode !== 'test';
          controls.querySelectorAll('[data-mode]').forEach(option => {
            const on = option === button;
            option.classList.toggle('is-on', on);
            option.setAttribute('aria-pressed', String(on));
          });
          if (mode === 'learn') renderLearn();
          else if (mode === 'test') renderTest();
          else updateChrome();
          pop.hidden = true;
        }
      });

      stage.addEventListener('click', event => {
        if (event.target.closest('.glossary-term')) return;
        stage.focus({ preventScroll: true });
        next();
      });
      box.addEventListener('pointerenter', () => { activeDeck = box; });
      box.addEventListener('focusin', () => { activeDeck = box; });
      source.hidden = true;
      box.prepend(head, controls);
      box.append(stage, read, test, pop);
      renderLearn();
      updateChrome();
    });

    document.addEventListener('keydown', event => {
      if (!activeDeck || activeDeck.navigate.mode !== 'learn' || document.body.classList.contains('answer-focus-open')) return;
      if (event.target.closest?.('input, textarea, select, [role="dialog"]')) return;
      if (event.key === 'ArrowRight' || (event.key === ' ' && !event.target.closest?.('button, a'))) {
        event.preventDefault();
        activeDeck.navigate.next();
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault();
        activeDeck.navigate.previous();
      }
    });
  };

  if (window.coopEducationGlossary) initialise();
  else document.addEventListener('coop-site-ready', initialise, { once: true });
})();
