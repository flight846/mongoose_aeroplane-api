var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


var routes = require('./routes/index');

var mongoose = require('mongoose')
mongoose.connect('mongodb://default:defaultpassword@ds011810.mlab.com:11810/aeroplane')

var users = require('./routes/users');

var app = express();

var port = process.env.PORT || 3000;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

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

var Flight= require('./models/Flight')
var Terminal= require('./models/Terminal')
var Airport= require('./models/Airport')

var flight1 = new Flight({
  from: "CDG France",
  to: "JFK New-York, USA",
  airline: "American Airline",
  passengers: []
});
 
flight1.save();
console.log(flight1)
 
 
var flight2 = new Flight({
  from: "Heathrow UK",
  to: "JFK New-York, USA",
  airline: "British Airways",
  passengers: []
});
 
flight2.save();
console.log(flight2)
 
 
 
var airport1 = new Airport({
    name: "JFK",
    country: "USA",
    opened: ((new Date()).setYear(1990))
  });
 
 
airport1.terminals.push({
    name: "Terminal 1",
    capacity: 234324,
    flights: [flight1, flight2]
  })

console.log(airport1)
console.log(airport1.terminals)
airport1.save()

// Terminal.findById('').populate('flights').exec(function(err, terminal) {
// 	if (err) return console.log(err)
// 	console.log('Terminal found...', user)
// })

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Listening on port: ' + port);

module.exports = app;
