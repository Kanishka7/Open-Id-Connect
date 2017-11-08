var express = require('express');
var app = express();
var path = require('path');
var util = require('util');
var exec = require('child_process').exec;

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
app.get('/store', function (req, res) {
    res.sendFile(path.join(__dirname + '/view/test.html'));
});

app.get('/curl', function (req, res) {
    var token = req.query.token;
    var url = req.query.url;
    var command = "curl -X GET --header 'Accept: application/json' --header 'Authorization: Bearer "+token+"'"+" 'https://"+url.split('//')[1]+"' -k";
    child = exec(command, function(error, stdout, stderr){
        console.log("stdout--"+stdout);
        if (error !== null)
        {
            console.log('exec error: ' + error);
        } else {
            res.send(stdout);
        }
    });
});




module.exports = app;
