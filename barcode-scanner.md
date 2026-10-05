---
layout: doc
permalink: /barcode-scanner.html
handle: Barcode Scanner
title: Phone Barcode Scanner
description: A small browser project that turns a phone camera photo into a barcode scan.
eyebrow: PROJECT · JAVASCRIPT · MOBILE CAMERA · BARCODE
public_mode: true
---

This small project came from a real operational problem: **what do you do when an identifier is missing, unclear or needs to be checked quickly?**

Rather than typing a long barcode manually, a phone can already provide the input device. Take a photo of the barcode and let the browser try to decode it.

<div class="barcode-tool">
  <div class="barcode-actions">
    <label class="barcode-button" for="barcode-photo">Take or choose a barcode photo</label>
    <input id="barcode-photo" type="file" accept="image/*" capture="environment">
    <button id="barcode-clear" type="button" class="barcode-secondary">Clear</button>
  </div>

  <div id="barcode-reader" aria-label="Barcode image and scan area"></div>

  <div class="barcode-result" aria-live="polite">
    <span class="barcode-kicker">Result</span>
    <strong id="barcode-value">No barcode scanned yet.</strong>
    <span id="barcode-type"></span>
    <button id="barcode-copy" type="button" class="barcode-secondary" disabled>Copy result</button>
  </div>

  <p id="barcode-status" role="status">On a phone, choose the button above and use the rear camera. Try to keep the barcode flat, sharp and well lit.</p>
</div>

<style>
.barcode-tool{border:1px solid #d8e0e6;border-radius:16px;padding:clamp(16px,3vw,26px);margin:18px 0 28px;background:#fff}
.barcode-actions{display:flex;gap:10px;flex-wrap:wrap;align-items:center}
#barcode-photo{position:absolute;left:-9999px}
.barcode-button,.barcode-secondary{display:inline-flex;align-items:center;justify-content:center;min-height:44px;padding:10px 15px;border-radius:999px;font:inherit;cursor:pointer}
.barcode-button{background:#18354a;color:#fff;border:1px solid #18354a;text-decoration:none}
.barcode-secondary{background:#fff;color:#18354a;border:1px solid #9aa9b5}
.barcode-button:focus-visible,.barcode-secondary:focus-visible{outline:3px solid #c96c18;outline-offset:3px}
#barcode-reader{margin-top:16px;overflow:hidden;border-radius:12px}
#barcode-reader img{max-width:100%!important;height:auto!important}
.barcode-result{display:grid;gap:6px;margin-top:16px;padding:16px;border-radius:12px;background:#f5f7f9}
.barcode-kicker{text-transform:uppercase;letter-spacing:.08em;font-size:.75rem;font-weight:700;color:#5b6c78}
#barcode-value{font-size:1.15rem;overflow-wrap:anywhere}
#barcode-copy{width:max-content;margin-top:6px}
#barcode-status{margin:14px 0 0;color:#51626e}
@media print{.barcode-actions,#barcode-copy{display:none}}
</style>

<script src="https://unpkg.com/html5-qrcode@2.3.8/html5-qrcode.min.js"></script>
<script>
(function(){
  var input=document.getElementById('barcode-photo');
  var clear=document.getElementById('barcode-clear');
  var copy=document.getElementById('barcode-copy');
  var value=document.getElementById('barcode-value');
  var type=document.getElementById('barcode-type');
  var status=document.getElementById('barcode-status');
  var scanner=null;

  function describe(text){
    if(/^97[89]\d{10}$/.test(text)) return 'Looks like an ISBN-13 / EAN-13 book identifier.';
    if(/^\d{13}$/.test(text)) return '13-digit EAN barcode.';
    if(/^\d{12}$/.test(text)) return '12-digit UPC-style barcode.';
    return 'Decoded barcode value.';
  }

  function reset(){
    value.textContent='No barcode scanned yet.';
    type.textContent='';
    copy.disabled=true;
    input.value='';
    status.textContent='On a phone, choose the button above and use the rear camera. Try to keep the barcode flat, sharp and well lit.';
    var reader=document.getElementById('barcode-reader');
    reader.innerHTML='';
    scanner=new Html5Qrcode('barcode-reader');
  }

  function ensureScanner(){
    if(!window.Html5Qrcode){
      status.textContent='The barcode library could not load. Check the connection and reload the page.';
      return false;
    }
    if(!scanner) scanner=new Html5Qrcode('barcode-reader');
    return true;
  }

  input.addEventListener('change',function(){
    var file=input.files&&input.files[0];
    if(!file||!ensureScanner()) return;
    status.textContent='Scanning the image…';
    value.textContent='Scanning…';
    type.textContent='';
    copy.disabled=true;

    scanner.scanFile(file,true).then(function(decodedText){
      value.textContent=decodedText;
      type.textContent=describe(decodedText);
      copy.disabled=false;
      status.textContent='Barcode found. You can copy the value or take another photo.';
    }).catch(function(){
      value.textContent='No barcode found.';
      type.textContent='Try moving closer, improving the light, or taking the photo square-on.';
      status.textContent='The image was read, but no supported barcode could be decoded.';
    });
  });

  clear.addEventListener('click',function(){
    if(!window.Html5Qrcode){location.reload();return;}
    reset();
  });

  copy.addEventListener('click',function(){
    var text=value.textContent;
    if(navigator.clipboard&&text){
      navigator.clipboard.writeText(text).then(function(){status.textContent='Barcode copied.';});
    }
  });

  ensureScanner();
})();
</script>

# What this demonstrates

The project is deliberately small. It combines a **mobile input**, **JavaScript**, a specialist barcode-decoding library and a clear user interface around one practical workflow.

The photograph is selected by the user and decoded in the browser. The page is not trying to replace a warehouse system; it demonstrates how a repetitive manual step can be turned into a simple digital tool.

# The interview link

At O'Mahony's, barcode, invoice and dispatch exceptions are a useful reminder that operational work depends on identifiers being correct. The interesting interview point is not "I scanned a barcode"; it is the next thought:

> Could a small tool reduce the friction in checking this?

That is the connection between operational experience and technical curiosity.
