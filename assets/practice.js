/* Reusable spoken + typed practice control for interview answers and Education. */
(() => {
  const formatTime = seconds => Math.floor(seconds / 60) + ':' + String(seconds % 60).padStart(2, '0');

  const STOP_WORDS = new Set([
    'the','a','an','and','or','but','if','then','than','that','this','these','those',
    'to','of','in','on','at','for','from','with','as','by','is','are','was','were',
    'be','been','being','it','its','i','you','he','she','we','they','them','our',
    'your','their','my','me','his','her','so','because','into','about','over','under',
    'can','could','would','should','will','do','does','did','have','has','had',
    'not','no','yes','very','more','most','also','just'
  ]);

  const wordsOf = text => (text || '')
    .toLowerCase()
    .replace(/[’]/g, "'")
    .replace(/[^a-z0-9'-]+/g, ' ')
    .trim()
    .split(/\s+/)
    .filter(Boolean);

  const lcsCount = (a, b) => {
    if (!a.length || !b.length) return 0;
    const previous = new Array(b.length + 1).fill(0);
    const current = new Array(b.length + 1).fill(0);
    for (let i = 1; i <= a.length; i += 1) {
      current.fill(0);
      for (let j = 1; j <= b.length; j += 1) {
        current[j] = a[i - 1] === b[j - 1]
          ? previous[j - 1] + 1
          : Math.max(previous[j], current[j - 1]);
      }
      for (let j = 0; j <= b.length; j += 1) previous[j] = current[j];
    }
    return previous[b.length];
  };

  const compareAttempt = (attempt, reference, style) => {
    const attemptWords = wordsOf(attempt);
    const referenceWords = wordsOf(reference);

    if (style === 'verbatim') {
      const matched = lcsCount(referenceWords, attemptWords);
      const pct = referenceWords.length ? Math.round(matched / referenceWords.length * 100) : 0;
      return {
        title: pct + '% wording retained',
        detail: matched + ' of ' + referenceWords.length + ' reference words matched in order. This is a wording comparison, not a mark.'
      };
    }

    const referenceContent = [...new Set(referenceWords.filter(word => word.length > 2 && !STOP_WORDS.has(word)))];
    const attemptSet = new Set(attemptWords);
    const matched = referenceContent.filter(word => attemptSet.has(word));
    const pct = referenceContent.length ? Math.round(matched.length / referenceContent.length * 100) : 0;
    return {
      title: pct + '% content-word overlap',
      detail: matched.length + ' of ' + referenceContent.length + ' reference content words also appeared. Gist mode is about the ideas, so treat this only as a rough learning guide.'
    };
  };

  window.coopPractice = {
    create(text, options = {}) {
      const words = wordsOf(text).length;
      const target = options.targetSeconds || Math.max(10, Math.round(words / 135 * 60));
      const fast = Math.max(10, Math.round(words / 150 * 60));
      const slow = Math.max(fast, Math.round(words / 120 * 60));

      const panel = document.createElement('section');
      panel.className = 'answer-practice-panel';

      const head = document.createElement('div');
      head.className = 'answer-practice-head';
      const label = document.createElement('strong');
      label.textContent = options.title || 'Practice answer';
      const suggested = document.createElement('span');
      suggested.textContent = 'Suggested spoken time ' + formatTime(fast) + '–' + formatTime(slow);
      head.append(label, suggested);

      const styleGroup = document.createElement('div');
      styleGroup.className = 'answer-practice-choice-group';
      const stylePrompt = document.createElement('span');
      stylePrompt.className = 'answer-practice-choice-label';
      stylePrompt.textContent = 'How do you want to learn this answer?';
      const gist = document.createElement('button');
      gist.type = 'button';
      gist.className = 'answer-practice-mode is-active';
      gist.textContent = 'Gist · own words';
      const verbatim = document.createElement('button');
      verbatim.type = 'button';
      verbatim.className = 'answer-practice-mode';
      verbatim.textContent = 'Verbatim · close wording';
      styleGroup.append(stylePrompt, gist, verbatim);

      const methodGroup = document.createElement('div');
      methodGroup.className = 'answer-practice-choice-group';
      const methodPrompt = document.createElement('span');
      methodPrompt.className = 'answer-practice-choice-label';
      methodPrompt.textContent = 'Answer by';
      const speak = document.createElement('button');
      speak.type = 'button';
      speak.className = 'answer-practice-mode is-active';
      speak.textContent = '🎙 Speak';
      const type = document.createElement('button');
      type.type = 'button';
      type.className = 'answer-practice-mode';
      type.textContent = '⌨ Type';
      methodGroup.append(methodPrompt, speak, type);

      const reminder = document.createElement('p');
      reminder.className = 'answer-practice-reminder';

      const speakArea = document.createElement('div');
      speakArea.className = 'answer-practice-speak';

      const timer = document.createElement('div');
      timer.className = 'answer-practice-timer';
      timer.textContent = '0:00 / ~' + formatTime(target) + ' target';

      const record = document.createElement('button');
      record.type = 'button';
      record.className = 'answer-practice-record';
      record.textContent = '● Record answer';

      const attempts = document.createElement('div');
      attempts.className = 'answer-practice-attempts';
      speakArea.append(timer, record, attempts);

      const typeArea = document.createElement('div');
      typeArea.className = 'answer-practice-type';
      typeArea.hidden = true;

      const textarea = document.createElement('textarea');
      textarea.className = 'answer-practice-textarea';
      textarea.rows = 7;
      textarea.placeholder = 'Type your answer from memory here…';

      const typeActions = document.createElement('div');
      typeActions.className = 'answer-practice-type-actions';
      const wordCount = document.createElement('span');
      wordCount.textContent = '0 words';
      const saveTyped = document.createElement('button');
      saveTyped.type = 'button';
      saveTyped.className = 'answer-practice-record';
      saveTyped.textContent = 'Compare typed answer';
      typeActions.append(wordCount, saveTyped);

      const typedAttempts = document.createElement('div');
      typedAttempts.className = 'answer-practice-attempts';
      typeArea.append(textarea, typeActions, typedAttempts);

      panel.append(head, styleGroup, methodGroup, reminder, speakArea, typeArea);

      let answerStyle = 'gist';
      let answerMethod = 'speak';
      let recorder = null;
      let stream = null;
      let chunks = [];
      let startedAt = 0;
      let tick = null;
      let recordingNumber = 0;
      let typedNumber = 0;

      const refreshReminder = () => {
        reminder.textContent = answerStyle === 'verbatim'
          ? 'Try to reproduce the model answer as closely as you can. Then compare the wording.'
          : 'Explain the idea in your own words. Keep the key points; do not chase the script.';
      };

      const setStyle = style => {
        answerStyle = style;
        gist.classList.toggle('is-active', style === 'gist');
        verbatim.classList.toggle('is-active', style === 'verbatim');
        refreshReminder();
      };

      const setMethod = method => {
        answerMethod = method;
        speak.classList.toggle('is-active', method === 'speak');
        type.classList.toggle('is-active', method === 'type');
        speakArea.hidden = method !== 'speak';
        typeArea.hidden = method !== 'type';
        if (method !== 'speak' && recorder?.state === 'recording') stop();
        if (method === 'type') textarea.focus();
      };

      gist.addEventListener('click', event => {
        event.preventDefault();
        event.stopPropagation();
        setStyle('gist');
      });

      verbatim.addEventListener('click', event => {
        event.preventDefault();
        event.stopPropagation();
        setStyle('verbatim');
      });

      speak.addEventListener('click', event => {
        event.preventDefault();
        event.stopPropagation();
        setMethod('speak');
      });

      type.addEventListener('click', event => {
        event.preventDefault();
        event.stopPropagation();
        setMethod('type');
      });

      textarea.addEventListener('input', () => {
        const count = wordsOf(textarea.value).length;
        wordCount.textContent = count + (count === 1 ? ' word' : ' words');
      });

      saveTyped.addEventListener('click', event => {
        event.preventDefault();
        event.stopPropagation();
        const value = textarea.value.trim();
        if (!value) {
          textarea.focus();
          return;
        }

        const comparison = compareAttempt(value, text, answerStyle);
        const row = document.createElement('article');
        row.className = 'answer-practice-typed-attempt';

        const rowHead = document.createElement('div');
        rowHead.className = 'answer-practice-typed-head';
        const name = document.createElement('strong');
        name.textContent = 'Typed attempt ' + (++typedNumber);
        const badge = document.createElement('span');
        badge.className = 'answer-practice-badge';
        badge.textContent = answerStyle === 'verbatim' ? 'Verbatim' : 'Gist';
        rowHead.append(name, badge);

        const response = document.createElement('p');
        response.className = 'answer-practice-typed-text';
        response.textContent = value;

        const result = document.createElement('div');
        result.className = 'answer-practice-compare';
        const resultTitle = document.createElement('strong');
        resultTitle.textContent = comparison.title;
        const resultDetail = document.createElement('span');
        resultDetail.textContent = comparison.detail;
        result.append(resultTitle, resultDetail);

        row.append(rowHead, response, result);
        typedAttempts.prepend(row);

        textarea.value = '';
        wordCount.textContent = '0 words';
        textarea.focus();
      });

      const stopClock = () => {
        clearInterval(tick);
        tick = null;
      };

      const stop = () => {
        if (recorder?.state === 'recording') recorder.stop();
        else stream?.getTracks().forEach(track => track.stop());
        record.textContent = '● Record answer';
        record.classList.remove('is-recording');
        stopClock();
      };

      record.addEventListener('click', async event => {
        event.preventDefault();
        event.stopPropagation();

        if (recorder?.state === 'recording') {
          stop();
          return;
        }

        if (!navigator.mediaDevices?.getUserMedia || typeof MediaRecorder === 'undefined') {
          timer.textContent = 'Recording is not supported in this browser.';
          return;
        }

        try {
          stream = await navigator.mediaDevices.getUserMedia({ audio: true });
          const mime = MediaRecorder.isTypeSupported?.('audio/webm;codecs=opus') ? 'audio/webm;codecs=opus' : '';
          recorder = mime ? new MediaRecorder(stream, { mimeType: mime }) : new MediaRecorder(stream);
          chunks = [];

          recorder.ondataavailable = event => {
            if (event.data?.size) chunks.push(event.data);
          };

          recorder.onstop = () => {
            stopClock();
            stream?.getTracks().forEach(track => track.stop());
            stream = null;
            record.textContent = '● Record answer';
            record.classList.remove('is-recording');

            if (!chunks.length) return;

            const duration = Math.max(1, Math.round((Date.now() - startedAt) / 1000));
            const url = URL.createObjectURL(new Blob(chunks, { type: recorder.mimeType || 'audio/webm' }));
            const row = document.createElement('div');
            row.className = 'answer-practice-attempt';

            const nameWrap = document.createElement('div');
            nameWrap.className = 'answer-practice-attempt-name';
            const name = document.createElement('strong');
            name.textContent = 'Recording ' + (++recordingNumber);
            const meta = document.createElement('span');
            meta.textContent = (answerStyle === 'verbatim' ? 'Verbatim' : 'Gist') + ' · ' + formatTime(duration);
            nameWrap.append(name, meta);

            const audio = document.createElement('audio');
            audio.controls = true;
            audio.src = url;

            const download = document.createElement('a');
            download.href = url;
            download.download = 'practice-answer-' + recordingNumber + '.webm';
            download.textContent = 'Save';

            row.append(nameWrap, audio, download);
            attempts.prepend(row);
          };

          recorder.start();
          startedAt = Date.now();
          const update = () => {
            timer.textContent = formatTime(Math.floor((Date.now() - startedAt) / 1000)) + ' / ~' + formatTime(target) + ' target';
          };
          update();
          tick = setInterval(update, 250);
          record.textContent = '■ Stop recording';
          record.classList.add('is-recording');
        } catch (_) {
          stream?.getTracks().forEach(track => track.stop());
          stream = null;
          timer.textContent = 'Microphone permission is needed to record.';
        }
      });

      refreshReminder();
      setMethod(answerMethod);

      return { panel, stop };
    }
  };
})();
