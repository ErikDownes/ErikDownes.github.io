/* One recording control shared by interview answers and Education. */
(() => {
  const formatTime = seconds => `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')}`;

  window.coopPractice = {
    create(text, options = {}) {
      const words = (text || '').trim().split(/\s+/).filter(Boolean).length;
      const target = options.targetSeconds || Math.max(10, Math.round(words / 135 * 60));
      const fast = Math.max(10, Math.round(words / 150 * 60));
      const slow = Math.max(fast, Math.round(words / 120 * 60));
      const panel = document.createElement('section');
      panel.className = 'answer-practice-panel' + (options.visualOnly ? ' is-visual-only' : '');
      const head = document.createElement('div');
      head.className = 'answer-practice-head';
      const label = document.createElement('strong');
      label.textContent = options.title || 'Optional recording';
      const suggested = document.createElement('span');
      suggested.textContent = `Suggested time ${formatTime(fast)}–${formatTime(slow)}`;
      head.append(label, suggested);
      const reminder = document.createElement('p');
      reminder.className = 'answer-practice-reminder';
      reminder.textContent = 'Say the answer in your own words. Recording is optional.';
      const timer = document.createElement('div');
      timer.className = 'answer-practice-timer';
      timer.textContent = `0:00 / ~${formatTime(target)} target`;
      const record = document.createElement('button');
      record.type = 'button';
      record.className = 'answer-practice-record';
      record.textContent = options.visualOnly ? '●' : '● Record';
      record.setAttribute('aria-label', 'Record answer');
      record.title = 'Record';
      const attempts = document.createElement('div');
      attempts.className = 'answer-practice-attempts';
      if (options.visualOnly) {
        timer.textContent = '';
        timer.setAttribute('role', 'status');
        panel.append(record, timer, attempts);
      } else {
        panel.append(head, reminder, timer, record, attempts);
      }

      let recorder = null;
      let stream = null;
      let chunks = [];
      let startedAt = 0;
      let tick = null;
      let attemptNumber = 0;
      const stopClock = () => { clearInterval(tick); tick = null; };
      const stop = () => {
        if (recorder?.state === 'recording') recorder.stop();
        else stream?.getTracks().forEach(track => track.stop());
        record.textContent = options.visualOnly ? '●' : '● Record';
        record.setAttribute('aria-label', 'Record answer');
        record.title = 'Record';
        record.classList.remove('is-recording');
        stopClock();
      };
      record.addEventListener('click', async event => {
        event.preventDefault();
        event.stopPropagation();
        if (recorder?.state === 'recording') { stop(); return; }
        if (!navigator.mediaDevices?.getUserMedia || typeof MediaRecorder === 'undefined') {
          timer.textContent = 'Recording is not supported in this browser.';
          return;
        }
        try {
          stream = await navigator.mediaDevices.getUserMedia({ audio: true });
          const mime = MediaRecorder.isTypeSupported?.('audio/webm;codecs=opus') ? 'audio/webm;codecs=opus' : '';
          recorder = mime ? new MediaRecorder(stream, { mimeType: mime }) : new MediaRecorder(stream);
          chunks = [];
          recorder.ondataavailable = e => { if (e.data?.size) chunks.push(e.data); };
          recorder.onstop = () => {
            stopClock();
            stream?.getTracks().forEach(track => track.stop());
            stream = null;
            if (!chunks.length) return;
            const url = URL.createObjectURL(new Blob(chunks, { type: recorder.mimeType || 'audio/webm' }));
            const row = document.createElement('div');
            row.className = 'answer-practice-attempt';
            const name = document.createElement('strong');
            name.textContent = options.visualOnly ? '' : `Recording ${++attemptNumber}`;
            if (options.visualOnly) attemptNumber += 1;
            const audio = document.createElement('audio');
            audio.controls = true;
            audio.src = url;
            const download = document.createElement('a');
            download.href = url;
            download.download = `interview-practice-${attemptNumber}.webm`;
            download.textContent = options.visualOnly ? '↓' : 'Save';
            download.setAttribute('aria-label', 'Download recording');
            download.title = 'Download';
            if (options.visualOnly) row.append(audio, download);
            else row.append(name, audio, download);
            attempts.prepend(row);
          };
          recorder.start();
          startedAt = Date.now();
          const update = () => { timer.textContent = `${formatTime(Math.floor((Date.now() - startedAt) / 1000))} / ~${formatTime(target)} target`; };
          update();
          tick = setInterval(update, 250);
          record.textContent = options.visualOnly ? '■' : '■ Stop';
          record.setAttribute('aria-label', 'Stop recording');
          record.title = 'Stop';
          record.classList.add('is-recording');
        } catch (_) {
          stream?.getTracks().forEach(track => track.stop());
          stream = null;
          timer.textContent = 'Microphone permission is needed to record.';
        }
      });
      return { panel, stop };
    }
  };
})();
