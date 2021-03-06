var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

var jsonArray = [
    {
      firstName: 'Rawle',
      lastName: 'Juglal'
    },
    {
      firstName: 'Zach',
      lastName: 'Mays'
    }
  ]

var chickenGetArray =
  {
    firstName:'Chicken',
    lastName:'Little'
  }
  
var chickenPostArray = 
  {
   firstName:'Post a new firstName',
   lastName:'Post a new lastName'
  }
  
var chickenPutArray = 
  {
    
  }
app.get('/chicken/*', chickenGetCallback); //start will get anything after
app.post('/chicken/:id', chickenPostCallback); //:id will have a req param
app.put('/chicken', chickenPutCallback);
app.delete('/chicken', chickenDeleteCallback);

app.get('/jsonWanted', jsonGetCallback);

function jsonGetCallback(req, res){
  res.jsonp(jsonArray);
}

function chickenGetCallback(req, res){
  res.json(chickenGetArray);
}


function chickenPostCallback(req, res){
  res.send('Woo!!!Post!!')
}

function chickenPutCallback(req, res){
  res.send('WooWoo!!!Put!!');
}

function chickenDeleteCallback(req, res){
  res.send('Deleting chicken would not be a good idea!');
}
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);


//THESE ARE FALLBACKS FOR ANY ERRORS IN THE APPLICATION
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
