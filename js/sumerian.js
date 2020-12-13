'use strict';

$(function() {
    const req = $.getJSON('../data/sumerianTransliterationUnicode.json');
    req.done(function() {
        const data = req['responseJSON'];
        console.log(data);
        const key2char = getKey2char(data);
        console.log(key2char);
      });
    let text = document.getElementById('textArea');
    text.addEventListener('keyup', processText);

    function processText() {
      console.log(text.value);
    }
});


function getKey2char(data) {
  let out = {};
  for (let dict of data) {
    let keys = dict['Keystrokes'];
    let sign = dict['Sign'];
    out[keys] = sign;
  }
  return out;
}



