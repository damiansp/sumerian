'use strict';

const fs = require('fs');

const express = require('express');
const layouts = require('express-ejs-layouts');

const homeController = require('./controllers/homeController');

const PORT = 3000;
const transliterator = JSON.parse(
  fs.readFileSync('./data/transliterator.json', 'utf8'));
const app = express();


console.log(transliterator);
app.set('port', process.env.PORT || PORT);
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));
app.use(layouts);

//app.get('/', (req, res) => { res.render('index'); });
app.get('/', homeController.init);

app.listen(app.get('port'), () => {
    console.log(`Server running at http://localhost:${app.get('port')}`);
});
    
