var express = require('express');
var app = express();
var responseTime = require('response-time');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var routes = require('../app/routes');


app.use(morgan('combined'));
app.use(responseTime({digits: 2}));


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


routes(app);


module.exports = app;
