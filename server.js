var express = require('express');
var bodyParser = require('body-parser');
var config = require('./config');
var mongoose = require('mongoose');

var app = express();

var expressFunction=require('./app/express/express.js');

mongoose.connect(config.database, function (err) {
    if (err) {
        console.log(err);
    }
    else{
        console.log("connected to database")
    }
});

var app=expressFunction();

app.listen(9000, function(err) {
    if (err) {
        console.log(err);
    }
    else{
        console.log("Listening on Port 9000");
    }
});


