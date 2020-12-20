'use strict';


let key2char,
  keys;


$(function() {
    const req = $.getJSON('../data/sumerianTransliterationUnicode.json');
    req.done(function() {
        const data = req['responseJSON'];
        console.log(data);
        key2char = getKey2char(data);
        keys = Object.keys(key2char);
        console.log(key2char);
    });
    let text = document.getElementById('textArea');
    text.addEventListener('keyup', processText);

    function processText() {
      console.log(text.value);
      let matches = getMatches(text.value);
      for (let [k, v] of Object.entries(matches)) console.log(`${k}: ${v}`); 
    }

    function getMatches(txt) {
      const n = txt.length;
      console.log(n);
      let matches = [];
      for (let key of keys) {
        if (key.slice(0, n) == txt) matches.push(key2char[key]);
      }
      return matches;
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



