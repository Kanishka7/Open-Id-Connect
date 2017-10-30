var express = require('express');
var app = express();
var path = require('path');
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});
app.use("/js", express.static(__dirname + '/model/'));
app.use("/styles", express.static(__dirname + '/css/'));
app.get('/profile', function (req, res) {    
     res.sendFile(path.join(__dirname + '/view/home.html'));
});
app.get('/login', function (req, res) {
    res.sendFile(path.join(__dirname + '/view/login.html'));
});

module.exports = app;
