var express = require('express');
var app = express();
var responseTime = require('response-time');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var routes = require('../app/routes');

morgan.token('localDate', function getDateToken(req, res, format) {
    var date = new Date();
    var options = {
        year: 'numeric', 
        month: '2-digit', 
        day: '2-digit', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit', 
        timeZone: 'America/Sao_Paulo'
    };
    return date.toLocaleDateString('pt-BR', options);
});


app.use(morgan(':remote-addr :localDate ":method :url HTTP/:http-version" :status :response-time ms ":referrer" ":user-agent"'));

app.use(responseTime({ digits: 2 }));


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


routes(app);


module.exports = app;
