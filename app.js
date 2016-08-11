var express = require('express');
var mongojs = require('mongojs');
var db = mongojs('contactlist',['contact']);
var bodyParser = require('body-parser');
var app = express();
var blog = require('./models/contact'); //* Call Blog Model
var webicon = require('serve-favicon');
var port = process.env.port || 3000; //* Define Port As Follow Server Port

//* Set Favicon for Blog
app.use(webicon(__dirname + '/resource/icon.png'));
//* Set url for js,css forlder
app.use(express.static(__dirname + '/node_modules'));
//* Set url for controler forlder
app.use(express.static(__dirname + '/controler'));
//* Set url for resource forlder
app.use(express.static(__dirname + '/resource'));
//* Get Home Page
app.get('/',function(req,res){
    res.sendFile(__dirname + '/views/index.html');
});
//* Get data on Table Contact From Database Contactlist
blog(app,db);
//* Call Server At Port that is defined above 
app.listen(port, function(){
    console.log("App is Running at port " + port);
});