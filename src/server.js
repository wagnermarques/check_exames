var express = require('express');
var appExpress = express();
var path = require("path");
var fs = require("fs");
var inspect = require('object-inspect');

var http = require('http').Server(appExpress);

const bodyParser = require('body-parser');
const middlewares = [
    express.static(path.join(__dirname, 'public')),
    bodyParser.json(),
    bodyParser.urlencoded({ extended: true })
]

appExpress.use(middlewares);

appExpress.get('/', function(req, res){
    res.sendFile(__dirname + '/views/index.html');
});

appExpress.get('/view_listar', function(req, res){
    res.sendFile(__dirname + '/views/listar.html');
});

delete(appExpress.cache);

//the concat and uglyfy create dist folder inside public
//appExpress.use(express.static(__dirname + '/public/dist')); 

//https://stackoverflow.com/questions/15693192/heroku-node-js-error-web-process-failed-to-bind-to-port-within-60-seconds-of
//Heroku dynamically assigns your app a port, so you can't set the port to a fixed number. Heroku adds the port to the env
http.listen(process.env.PORT || 3000, function(){
    let port= process.env.PORT || 3000;
});

exports.webapp = appExpress;
