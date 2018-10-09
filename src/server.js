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
    res.sendFile(__dirname + '/formulario.html');
});

appExpress.get('/view_listar', function(req, res){
    res.sendFile(__dirname + '/listar.html');
});

delete(appExpress.cache);

appExpress.use(express.static(__dirname + '/public'));

http.listen(3000, function(){
  console.log('listening on *:3000');
});

exports.webapp = appExpress;
