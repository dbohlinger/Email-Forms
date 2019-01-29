// variables
var sum        = 0;
var arr        = [];
var table      = [];
var data       = [];
var checklog   = [];
var nameGetter = document.getElementsByName('action_amount');
var rowGetter  = document.getElementsByClassName('form-row');
var actiondata = document.getElementsByClassName("fieldz");
var next       = 0;


var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var checklogSchema = new Schema({
   LAF_Bill: String,
   check_Date: DATE,
  Check_Number: String,
  Recieved_From: String,
  Amount: Number,
  Type_of_Funds:String
});

var SchemaObject= require('schema-object');
//Dynamic getters
var lafBill    = document.getElementById("action_LAF").value,
  checkDate    = document.getElementById("action_date").value,
  actionCheck  = document.getElementById('action_check').value,
  actionREC    = document.getElementById('action_REC').value,
  actionAmount = document.getElementById('action_amount').value,
  actionType   = document.getElementById('action_type').value;

var  Row = new SchemaObject({
  lafBill: String,
  checkDate:Date,
  actionCheck: String,
  actionREC: String,
  actionAmount: Number,
  actionType:String
});


function getRowData(){
  for(var i=0; i<=rowGetter.length; i++){
    var row = new Row({
        lafBill:  document.getElementById("action_LAF").value,
        checkDate:  document.getElementById("action_date").value,
        actionCheck: document.getElementById('action_check').value,
        actionREC  : document.getElementById('action_REC').value,
        actionAmoun: document.getElementById('action_amount').value,
        actionType : document.getElementById('action_type').value
      });
      console.log(row);
    }
}

//
// var capData = [
//   lafBill      = document.getElementById("action_LAF").value,
//   checkDate    = document.getElementById("action_date").value,
//   actionCheck  = document.getElementById('action_check').value,
//   actionREC    = document.getElementById('action_REC').value,
//   actionAmount = document.getElementById('action_amount').value,
//   actionType   = document.getElementById('action_type').value
// ]

//Constructors

// function dataCapture(bill, date, check, rec, amount, type){
//  //declared variables
//   this.bill  = document.getElementById('action_LAF').value;
//   this.date  = document.getElementById('action_date').value;
// //   this.check = document.getElementById('action_check').value;
// //   this.rec   = document.getElementById('action_REC').value;
// //   this.amount= document.getElementById('action_amount').value;
// //   this.type  = document.getElementById('action_type').value;
// }
 var capsdates = [];

// function addArray(bill, date, check, rec, amount, type){

   var bill= [];
   var date= [];
   var check= [];
   var rec= [];
   var amount= [];
   var type= []


// }



function lastData(){
  for(var i=0; i<=nameGetter.length; i++){
      bill.push(lafBill[i]);
      date.push(checkDate[i]);
      check.push(actionCheck[i]);
      rec.push(actionREC[i]);
      amount.push(actionAmount[i]);
      type.push(actionType[i]);
  }
  console.log(bill,date, check, rec, amount, type);
}
 //Methods
     //sudo code
       //1.declare the variables,
      //2.loop through the rows
      //3.capature the data
      //4. put the data into an array?
      //print the data....
// //
//  dataCapture.prototype.getData=function(){
//     for(var i=0; i<=nameGetter.length; i++){
//        new  dataCapture
//     }
//  }
 function getCapData(){
   for(var i=0; i<=nameGetter.length;i++){
      var row=capData.push(lafBill,checkDate,actionCheck, actionREC,actionAmount, actionType)
   }
 }
//
//  //For Each
//  capData.forEach(function(capData){
//    row.push(capData);
//  });
// //Arrays//
// function arrayBuild(){
//  masterArray = []
//    rowArray=[]
//      rowArray.i
//    ]
//  ]
// }

// var resultObject    = {
//   this.lafBill      = lafBill;
//   this.checkDate    = checkDate;
//   this.actionREC    = actionREC;
//   this.actionAmount = actionAmount;
//   this.actionType   = actionType;
// }
//

//Serialized Array
// function serialAttempt(){
// var result={};
// $.each($("dynamicform").serializeArray(),function(){
// result[this.name]=this.value;
// });
// console.log(result)
// }
// $(".btn").click(function(){
//   $('.dynamicform').submit(function(event){
//     console.log($(this).serializeArray());
//   });
//  });
//checkLogg array
// var checklogData = {
//       lafBill      = document.getElementById("action_LAF").value,
//       checkDate    = document.getElementById("action_date").value,
//       actionCheck  = document.getElementById('action_check').value,
//       actionREC    = document.getElementById('action_REC').value,
//       actionAmount = document.getElementById('action_amount').value,
//       actionType   = document.getElementById('action_type').value
//}
// { "$schema": "http://json-schema.org/schema#" }
// const schema = require("schm");
//
// const  dataSchema= schema({
//   lafBill: String,
//   checkDate: String,
//   actionCheck: String,
//   actionRec: String,
//   actionAmount: Number,
//   actionType: String
// });

// function firstArray{
//   for(var i=0 i<= rowGetter.length; i++){
//     var value= i
//   }
// }
//
//
// function checklogggers(lafBill, checkDate, actionCheck, actionREC, actionAmount, actionType){
//
// for(var i=1; i<actiondata.length; i++){
//
//   console.log(lafBill[("action_check"+i)].value)
// }
//
// }
// var checkLogArray = {
//   lafBill,
//   checkDate,
//   actionCheck,
//   actionREC,
//   actionAmount,
//   actionType
// }
//
// var valx = Object.values(checkLogArray)
// ///
// function checkLogger() {
//   for (var i = 0; i <= actiondata.length; i++) {
//     forEach()
//     var values = valx.push(checkLogArray[i]);
//   }
//   return values;
// }

// var objects =[];
// function objData(){
//   for(var i=0; i<actiondata.length; i++){
//       objects[i]={
//        LAFBill: lafBill,
//        CheckDate: checkDate,
//        Checknumber:actionCheck,
//        RECFrom:actionREC,
//        Amount: actionAmount,
//         Type: actionType
//      }
//      return objects
//     }
//}
// var info= new Object(){
//
//    info.LAF=document.getElementsByName('action_LAF'+next);
// //    info.check=document.getElementsByName('action');
// //    info.date=document.getElementsByName('action_check');
// //    info.REC=document.getElementsByName('action_REC');
// //    info.amount=document.getElementsByName('action_amount');
// //    info.type=document.getElementsByName('action_type');
// }
//
// function HelloValue(form){
//    for(var i=0; i<rowGetter.length; i++){
//      console.log(form["action_check" +i].value )
//    }
// }

//Dynamically Add  More Checklogs
$(document).ready(function() {
  var next = 0;
  $("#add-more").click(function(e) {
    e.preventDefault();
    var addto = "#field" + next;
    var addRemove = "#field" + (next);
    next = next + 1;
    var newIn = '<div id="field' + next + '" name="field' + next + '"> ' +
      '<!-- Text input-->' +
      '<div class="form-row fieldz">' +
      '<div class="form-group col-md-2">' +
      ' <label class="control-label" for="action_LAF">LAF Bill#</label> ' +
      ' <input id="action_LAF' + next + '" name="action_LAF" type="text" class="form-control input-md  ">' +
      '</div>' +
      '<!-- Text input-->' +
      '<div class="form-group col-md-2 col-sm-2"> ' +
      '<label class=" control-label" for="action_date">Check Date</label>' +
      '  <input id="action_date' + next + '"" name="action_date" type="date" class="form-control input-md "> ' +
      '</div>' +
      '<div class="form-group col-md-2">' +
      '<label class="control-label" for="action_check">Check #</label> ' +
      ' <input id="action_check' + next + '"" name="action_check" type="text" placeholder="" class="form-control input-md"> ' +
      '</div>' +
      '<div class="form-group col-md-2">' +
      '<label class=" control-label" for="action_REC">Rec From</label>' +
      '<input id="action_REC' + next + '"" name="action_REC" type="text" placeholder="" class="form-control input-md">' +
      '</div>' +
      '<div class="form-group col-md-2">' +
      '<label class=" control-label" for="action_amount">Amount</label>' +
      '<input id="action_amount' + next + '"" name="action_amount" type="text"class="form-control input-md">' +
      '</div>' +
      '<div class="form-group col-md-2">' +
      '<label class=" control-label" for="action_type">Type of Funds</label>' +
      '<input id="action_type' + next + '"" name="action_type" type="text" class="form-control input-md">' +
      '</div>' +
      '</div>' +
      '</div>';
    var newInput = $(newIn);
    var removeBtn = '<button id="remove' + (next - 1) + '" class="btn btn-danger remove-me" >Remove</button></div></div><div id="field">';
    var removeButton = $(removeBtn);
    $(addto).after(newInput);
    $(addRemove).after(removeButton);
    $("#field" + next).attr('data-source', $(addto).attr('data-source'));
    $("#count").val(next);

    $('.remove-me').click(function(e) {
      e.preventDefault();
      var fieldNum = this.id.charAt(this.id.length - 1);
      var fieldID = "#field" + fieldNum;
      $(this).remove();
      $(fieldID).remove();
    });
  });

});

//Dynamically updating Object to display in email ...why....

function objectUpdater() {
  for (var i = 0; i < rowGetter.length; i++) {
    //var value=table.push(rowGetter[i].value);
  }
  console.log(table);
}

// Adding totals of Bills

function Total() {
  if (arr.length > 0) {
    arr = [];
  }
  for (var i = 0; i < nameGetter.length; i++) {
    //per value add to previous value
    var vals = arr.push(Number(nameGetter[i].value));
    sum = 0;
  }
  for (var x = 0; x < arr.length; x++) {
    sum += arr[x];
  }
  return sum;
}

//Send Mail Function dynamically

function dyanmicEmail() {
  for (var i = 0; i < rowGetter.length; i++) {
    var vals = data.push(rowGetter[i].value);
  }
  console.log(data);
}

//print values to email
function printValue(){
  for(var i=0; i<=rowGetter.length; i++){
    escape(document.getElementById(+[i].value))
  }
}
// Old Sendmail Function

function sendMail() {
  var link = "mailto:jward@lynden.com" +
    "?cc=jward@Lynden.com" +
    "&subject=" + escape("International Corrections") +
    "&body=Here is the info you requested%0A"

    +
    "Station : " + escape(document.getElementById('inputGroupSelect01').value) + "%0A" + "%0A" +
    "Today's Date: " + escape(document.getElementById('todaysDate').value) + "%0A" + "%0A" +
    "Date CheckLog Sent  : " + escape(document.getElementById('comatSent').value) + "%0A" + "%0A" +
    "Amount Total  : $" + Total() + "%0A" + "%0A";

  window.location.href = link
}

module.exports=mongoose.model("Checklog",checklogSchema);
