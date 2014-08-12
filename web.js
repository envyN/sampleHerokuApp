// web.js
var express = require("express");
var logfmt = require("logfmt");
var app = express();
var path = require('path');

var oneDay = 86400000;

app.use(express.static(__dirname + '/public'));
app.use('/hotspots', express.static(__dirname + '/public/hotspots/app', {maxAge: oneDay}));
app.use(logfmt.requestLogger());

//app.get('/', function(req, res) {
//    res.send('Hello World! nVn is building this page. will add on everything as time passes!');
//});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
    console.log("Listening on " + port);
});
