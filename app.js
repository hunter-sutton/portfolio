var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var path = require('path');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '/public/pages/index.html'));
});

app.get('/style.css', (req, res) => {
  res.setHeader("Content-Type", "text/css");
  res.status(200).sendFile(path.join(__dirname, '/public/stylesheets/style.css'));
});

// catch 404 and forward to error handler
app.get('*', (req, res) => {
  res.status(404).sendFile(path.join(__dirname, '/public/pages/404.html'));
});

module.exports = app;