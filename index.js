var ejs =require('ejs');
var express = require('express');
var index = express();
var port= 8080;
var MongoClient = require('mongodb').MongoClient;
var assert= require('assert');
var mongoose = require('mongoose');
var url="mongodb://localhost:27017/emailForms";
var dbName="emailForms"

mongoose.connect(url,{ useNewUrlParser: true});
// var client = new MongoClient(url,{ useNewUrlParser: true});

MongoClient.connect(function(err){
  assert.equal(null,err);
  console.log("connected to the server");
  var db = client.db(dbName);
});


index.get('/distributionList', function(req,res){
  res.send("HELLO");
});

index.listen(port,() => console.log('app is running.'))


var Schema= mongoose.Schema;
var ObjectId = Schema.ObjectId;

var EmployeeList = new Schema({
  employee: String,
  add:Boolean,
  end: Boolean
});
