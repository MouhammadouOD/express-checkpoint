var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const port = 4400;

var homeRouter = require('./routes/home');
var contactUsRouter = require('./routes/contactUs');
var ourServicesRouter = require('./routes/ourServices');

//var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


/*
app.use('/', homeRouter);
app.use('/contactUs', contactUsRouter);
app.use('/ourServices', ourServicesRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});*/

// error handler
/*app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});*/
var today = new Date();
var hour = today.getHours();
var day = today.getDay();
//var hour = 18;
//var day = 0;

if(day == 6 || day == 0 || (hour>=17 && hour<9) ){
  app.get('/', function(req, res, next) {
    res.render('unavailable', { title: 'WE ARE CLOSED' });
    next();
  });
  
}
else{
  app.get('/', function(req, res, next) {
    res.render('home', { title: 'Home Page' });
    next();
  });
  
  app.get('/contactUs', function(req, res, next) {
    res.render('contactUs', { title: 'Contact Us Page' });
    next();
  });
  
  app.get('/ourServices', function(req, res, next) {
    res.render('ourServices', { title: 'Our Services Page' });
    next();
  });
}





app.listen(port, function(){
  console.log('The server is running, ' +
      ' please, open your browser at http://localhost:%s', 
      port);
});

module.exports = app;
