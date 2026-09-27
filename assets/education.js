/* Short industry ideas for interview articulation, with shared glossary. */
(() => {
  const recall = {
    'Aircraft Leasing 101': [{ after: 1, prompt: 'What two things must the lessor judge?', answer: 'Whether the lease works for this airline and whether the aircraft retains value and placement options later.' }],
    'The Lifecycle of an Aircraft': [{ after: 1, prompt: 'What choices arise at a lease transition?', answer: 'Extend, re-lease or sell, taking account of condition, demand and likely return.' }],
    'Maintenance Reserves': [{ after: 1, prompt: 'Why track both utilisation and future work?', answer: 'Flying consumes maintenance life, so reporting should connect usage, payments and the work ahead.' }],
    'Managing Credit Risk in Aircraft Leasing': [{ after: 1, prompt: 'What makes monitoring useful?', answer: 'Changes in payments or aircraft use may call for action before a larger problem develops.' }],
    'Power-by-the-Hour': [{ after: 1, prompt: 'What trade-off does flexible rent create?', answer: 'It gives an airline breathing space when flying is uncertain, while the lessor still needs to protect long-term value.' }],
    'Balance Sheet Discipline in Aircraft Leasing': [{ after: 1, prompt: 'Why does funding need to fit the lease?', answer: 'The timing and cost of borrowing can affect the return from long-term lease income.' }],
    'Maintenance Rights Assets': [{ after: 1, prompt: 'What must be checked before valuing the right?', answer: 'The aircraft’s condition when bought and the return condition promised in the attached lease.' }],
    'Valuation Practices in Aircraft Leasing': [{ after: 1, prompt: 'Why look beyond book value?', answer: 'Market demand, condition and future cash flows can differ from historical cost after depreciation.' }]
  };

  const questions = {
    'Aircraft Leasing 101': [{ prompt: 'How would you explain a lessor’s central decision?', options: ['Set the airline’s ticket prices', 'Assess both the lease income and the aircraft’s future usefulness', 'Guarantee the airline’s profit'], correct: 1, explain: 'The lessor needs income from the current lease and options for the aircraft afterwards.' }],
    'The Lifecycle of an Aircraft': [{ prompt: 'A lease is nearing its end. What should the lessor compare?', options: ['Only the original purchase price', 'Extending, re-leasing and selling in light of condition and demand', 'Only the age of the aircraft'], correct: 1, explain: 'The next decision depends on the likely value of each available route.' }],
    'Maintenance Reserves': [{ prompt: 'Why might a lease link maintenance payments to flight hours?', options: ['Use consumes maintenance life', 'Hours determine the aircraft’s owner', 'The aircraft needs no other reporting'], correct: 0, explain: 'Utilisation helps connect the operator’s use with future major work.' }],
    'Managing Credit Risk in Aircraft Leasing': [{ prompt: 'An airline’s payments begin arriving late. What is the useful asset-management response?', options: ['Wait until the lease ends', 'Check the position promptly alongside aircraft and lease information', 'Assume the aircraft has lost all value'], correct: 1, explain: 'Accurate, timely monitoring can identify an issue while choices remain.' }],
    'Power-by-the-Hour': [{ prompt: 'When might usage-linked rent be useful?', options: ['When short-term flying is uncertain', 'When aircraft ownership must transfer', 'When no lease agreement exists'], correct: 0, explain: 'It can align some rent with actual use during a disruption.' }],
    'Balance Sheet Discipline in Aircraft Leasing': [{ prompt: 'Why consider the timing of debt and lease cash flows together?', options: ['To avoid all aircraft maintenance', 'To manage financing and liquidity risk over the lease term', 'To decide ticket prices'], correct: 1, explain: 'Funding costs and maturities can alter the return from a long-term lease.' }],
    'Maintenance Rights Assets': [{ prompt: 'Can we claim an MRA for a particular Abelo aircraft from a purchase announcement alone?', options: ['Yes, every attached lease creates one', 'No; we need the aircraft condition, lease terms and accounting assessment', 'Yes, if the aircraft is an ATR'], correct: 1, explain: 'A public announcement of an attached lease does not establish the value or accounting of its maintenance rights.' }],
    'Valuation Practices in Aircraft Leasing': [{ prompt: 'Why might an aircraft’s market value differ from book value?', options: ['Demand and condition change while book value follows cost and depreciation', 'Book value is always a live market quote', 'A lease never affects value'], correct: 0, explain: 'Market conditions and expected cash flows can move separately from carrying value.' }]
  };

  const initialise = () => {
    const glossary = window.coopEducationGlossary;
    if (!glossary) return;

    let activeDeck = null;
    const pop = document.createElement('aside');
    pop.className = 'aercap-glossary-pop';
    pop.setAttribute('role', 'dialog');
    pop.setAttribute('aria-label', 'Glossary definition');
    pop.setAttribute('aria-live', 'polite');
    pop.hidden = true;
    document.body.append(pop);
    let returnFocus = null;
    const closePop = () => {
      pop.hidden = true;
      if (returnFocus?.isConnected) returnFocus.focus({ preventScroll: true });
    };
    document.addEventListener('pointerdown', event => {
      if (!pop.hidden && !pop.contains(event.target) && !event.target.closest?.('.glossary-term')) pop.hidden = true;
    });
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
      const quiz = (questions[box.dataset.title] || []).map(item => {
        const order = item.options.map((_, i) => i);
        for (let i = order.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [order[i], order[j]] = [order[j], order[i]];
        }
        return { ...item, options: order.map(i => item.options[i]), correct: order.indexOf(item.correct) };
      });
      let answers = Array(quiz.length).fill(null);

      const head = document.createElement('div');
      head.className = 'aercap-beamer-head';
      head.innerHTML = '<div class="aercap-beamer-brand">SPEAK · STUDY · CHECK</div><div class="aercap-progress" role="progressbar" aria-label="Learning progress" aria-valuemin="1"><span></span></div><div class="aercap-counter"></div>';

      const controls = document.createElement('div');
      controls.className = 'aercap-controls';
      controls.innerHTML = '<button type="button" data-mode="read" class="is-on" aria-pressed="true">Read</button><button type="button" data-mode="study" aria-pressed="false">Study</button><button type="button" data-mode="check" aria-pressed="false">Check</button><button type="button" data-practise aria-label="Practise this section aloud">Speak</button><span class="aercap-spacer"></span><button type="button" data-prev aria-label="Previous idea">←</button><button type="button" data-next aria-label="Next idea">Next →</button>';

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
      const showTerm = term => {
        const entry = glossary.readGlossary().find(item => item.term.toLowerCase() === term.toLowerCase());
        if (!entry) return;
        returnFocus = document.activeElement;
        const close = document.createElement('button');
        close.type = 'button';
        close.className = 'aercap-glossary-close';
        close.setAttribute('aria-label', 'Close definition');
        close.textContent = '×';
        close.addEventListener('click', closePop);
        const title = document.createElement('strong');
        title.textContent = entry.term;
        const definition = document.createElement('p');
        definition.textContent = entry.definition;
        pop.replaceChildren(close, title, definition);
        if (entry.why || entry.cue) {
          const why = document.createElement('p');
          const lead = document.createElement('b');
          lead.textContent = entry.why ? 'Why it matters: ' : 'Recall cue: ';
          why.append(lead, document.createTextNode(entry.why || entry.cue));
          pop.append(why);
        }
        glossary.renderGlossaryLearningContent?.(pop, entry, { compact: true });
        pop.hidden = false;
        close.focus({ preventScroll: true });
      };

      const updateChrome = () => {
        const position = mode === 'read' ? 1 : mode === 'study' ? index + 1 : resultsVisible ? quiz.length : questionIndex + 1;
        const total = mode === 'study' ? beats.length : mode === 'check' ? quiz.length : 1;
        const progress = head.querySelector('.aercap-progress');
        progress.setAttribute('aria-valuemax', String(total));
        progress.setAttribute('aria-valuenow', String(position));
        progress.querySelector('span').style.width = `${(position / total) * 100}%`;
        head.querySelector('.aercap-counter').textContent = mode === 'read' ? 'READ' : mode === 'study' ? `${position} / ${total}` : resultsVisible ? 'REVIEW' : `QUESTION ${position} / ${total}`;
        const previous = controls.querySelector('[data-prev]');
        const next = controls.querySelector('[data-next]');
        previous.hidden = next.hidden = mode === 'read';
        previous.disabled = mode === 'study' ? index === 0 : mode === 'check' ? questionIndex === 0 && !resultsVisible : true;
        next.disabled = mode === 'check' && !resultsVisible && answers[questionIndex] === null;
        next.textContent = mode === 'study' && index === beats.length - 1 ? 'Replay ↺' : mode === 'check' && resultsVisible ? 'Try again ↺' : mode === 'check' && questionIndex === quiz.length - 1 ? 'Results →' : 'Next →';
        next.setAttribute('aria-label', next.textContent);
      };

      const renderLearn = () => {
        stage.replaceChildren();
        const paragraph = document.createElement('p');
        paragraph.className = 'aercap-beat is-active';
        paragraph.textContent = beats[index];
        stage.append(paragraph);
        glossary.linkKnownGlossaryTerms(stage, showTerm);
        const cue = (recall[box.dataset.title] || []).find(item => item.after === index);
        if (cue) {
          const check = document.createElement('div');
          check.className = 'aercap-recall';
          const label = document.createElement('span');
          label.textContent = 'PAUSE & RECALL';
          const prompt = document.createElement('p');
          prompt.textContent = cue.prompt;
          const reveal = document.createElement('button');
          reveal.type = 'button';
          reveal.textContent = 'Show explanation';
          const answer = document.createElement('p');
          answer.className = 'aercap-recall-answer';
          answer.textContent = cue.answer;
          answer.hidden = true;
          reveal.addEventListener('click', event => {
            event.stopPropagation();
            answer.hidden = !answer.hidden;
            reveal.textContent = answer.hidden ? 'Show explanation' : 'Hide explanation';
            reveal.setAttribute('aria-expanded', String(!answer.hidden));
          });
          reveal.setAttribute('aria-expanded', 'false');
          check.append(label, prompt, reveal, answer);
          stage.append(check);
        }
        updateChrome();
        pop.hidden = true;
      };

      const renderTest = () => {
        test.replaceChildren();
        if (resultsVisible) {
          const needsReview = answers.some((answer, i) => answer !== quiz[i].correct);
          const heading = document.createElement('h3');
          heading.textContent = needsReview ? 'Ideas to revisit' : 'Ready to explain it aloud';
          const detail = document.createElement('p');
          detail.textContent = needsReview
            ? 'Follow the explanations marked ↗, return to Study, and check again when ready.'
            : 'Use Speak to explain this section in your own words, without reading.';
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
        if (mode === 'study') { index = index === beats.length - 1 ? 0 : index + 1; renderLearn(); }
        else if (mode === 'check') {
          if (resultsVisible) { answers = Array(quiz.length).fill(null); questionIndex = 0; resultsVisible = false; }
          else if (answers[questionIndex] === null) return;
          else if (questionIndex === quiz.length - 1) resultsVisible = true;
          else questionIndex++;
          renderTest();
        }
      };
      const previous = () => {
        if (mode === 'study' && index > 0) { index--; renderLearn(); }
        else if (mode === 'check') { if (resultsVisible) resultsVisible = false; else if (questionIndex > 0) questionIndex--; renderTest(); }
      };
      box.navigate = { next, previous, get mode() { return mode; } };
      glossary.linkKnownGlossaryTerms(read, showTerm);

      controls.addEventListener('click', event => {
        const button = event.target.closest('button');
        if (!button) return;
        activeDeck = box;
        if (button.hasAttribute('data-next')) next();
        else if (button.hasAttribute('data-prev')) previous();
        else if (button.hasAttribute('data-practise')) {
          let heading = box.previousElementSibling;
          while (heading && heading.tagName !== 'H2') heading = heading.previousElementSibling;
          heading?.dispatchEvent(new MouseEvent('dblclick', { bubbles: true }));
        }
        else if (button.dataset.mode) {
          mode = button.dataset.mode;
          stage.hidden = mode !== 'study';
          read.hidden = mode !== 'read';
          test.hidden = mode !== 'check';
          controls.querySelectorAll('[data-mode]').forEach(option => {
            const on = option === button;
            option.classList.toggle('is-on', on);
            option.setAttribute('aria-pressed', String(on));
          });
          if (mode === 'study') renderLearn();
          else if (mode === 'check') renderTest();
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
      box.append(stage, read, test);
      renderLearn();
      updateChrome();
    });

    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && !pop.hidden) { closePop(); return; }
      if (!pop.hidden) return;
      if (!activeDeck || activeDeck.navigate.mode !== 'study' || document.body.classList.contains('answer-focus-open')) return;
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
