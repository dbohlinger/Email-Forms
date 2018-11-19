 var express = require("express");
var  mysql  = require('mysql');


var con= mysql.createConnection({
  host: "localhost",
  user: "dylanb",
  password:"HelloWorld?"
});

con.connect(function(err){
  if(err) throw err;
  console.log("Connected");
});

 var app= express();
schm = require("schm");

app.set("view engine", "ejs");


app.get('/', function(req, res){
  res.render("Landing.ejs");

 })
app.listen(process.env.PORT, process.env.IP,function(){
  console.log("Server has started"+" "+ "Hello World");
});
Hello world;

what am I doing?
how to javascript?  eh?
much wow, doge needs dem skillz

pupper
