var express = require('express');
var app = express();

//* Set dirname for js,css forlder
app.use(express.static(__dirname + '/node_modules'));
app.use(express.static(__dirname + '/controler'));

//* Get Home Page

app.get('/',function(req,res){
    res.sendFile(__dirname + '/index.html');
});
app.listen(3000, function(){
    console.log("App is Running at 3000");
});