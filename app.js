var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var path = require('path');
var exphbs = require('express-handlebars');

var app = express();

// use handlebars as the view engine
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// render the homepage using handlebars
app.get('/', (req, res) => {
  res.status(200).render('home');
});


// server the stylesheet used for all pages
app.get('/style.css', (req, res) => {
  res.setHeader("Content-Type", "text/css");
  res.status(200).sendFile(path.join(__dirname, '/public/stylesheets/style.css'));
});

// catch 404 and forward to error handler
app.get('*', (req, res) => {
  res.status(404).render('404');
});

module.exports = app;