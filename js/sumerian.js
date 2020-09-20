'use strict';

const fs = require('fs');
const transliterator = JSON.parse(fs.readFileSync('./data/transliterator.json',
                                                  'utf8'));


$(function() {
    console.log('ready');
    console.log(transliterator);
});
