#!/usr/bin/env/ node
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public/'));

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/index', index);
app.use('/users', users);

//routes
app.get('/partners', function (req, res) {
  res.render('partners');
})

var fs = require('fs');
var obj = JSON.parse(fs.readFileSync('public/json/research.json', 'utf8'));
app.get('/research', function (req, res) {
  res.render('research',{data:obj});
})

app.get('/contact', function (req, res) {
  res.render('contact');
})
app.get('/about', function (req, res) {
  res.render('about');
})
app.get('/news', function (req, res) {
  res.render('news');
})
app.get('/missions', function (req, res) {
  res.render('missions');
})
app.get('/apply', function (req, res) {
  res.redirect('https://piepieninja.typeform.com/to/Qp0m51');
})
app.get('/partners', function (req, res) {
  res.render('partners');
})
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
var server = app.listen(80, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('running at http://' + host + ':' + port)
});
module.exports = app;
