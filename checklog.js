//variables
var Sum        = 0;
var arr        = [];
var table      = [];
var data       = [];
var checklog   = [];
var nameGetter = document.getElementsByName('action_amount');
var rowGetter  = document.getElementsByClassName('form-row');
var actiondata = document.getElementsByClassName("fieldz");

//Dynamic getters
var lafBill      = document.getElementById("action_LAF").value,
    checkDate    = document.getElementById("action_date").value,
    actionCheck  = document.getElementById('action_check').value,
    actionREC    = document.getElementById('action_REC').value,
    actionAmount = document.getElementById('action_amount').value,
    actionType   = document.getElementById('action_type').value;

//Objects
//checkLogg array
// var checklogData = {
//       lafBill      = document.getElementById("action_LAF").value,
//       checkDate    = document.getElementById("action_date").value,
//       actionCheck  = document.getElementById('action_check').value,
//       actionREC    = document.getElementById('action_REC').value,
//       actionAmount = document.getElementById('action_amount').value,
//       actionType   = document.getElementById('action_type').value
//}

var checkLogArray ={lafBill, checkDate, actionCheck, actionREC, actionAmount, actionType}

var valx=Object.values(checkLogArray)
///
function  checkLogger(){
  for(var i=0; i<= actiondata.length; i++){
     forEach()
  var  values= valx.push(checkLogArray[i]);
  }
  return values;
}

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



//Dynamically Add  More Checklogs
$(document).ready(function () {
    var next = 0;
    $("#add-more").click(function(e){
        e.preventDefault();
        var addto = "#field" + next;
        var addRemove = "#field" + (next);
        next = next + 1;
        var newIn =     '<div id="field'+ next +'" name="field'+ next +'"> '+
                        '<!-- Text input-->'+
                            '<div class="form-row fieldz">'+
                             '<div class="form-group col-md-2">'+
                                ' <label class="control-label" for="action_LAF">LAF Bill#</label> '+
                                    ' <input id="action_LAF'+next+'" name="action_LAF" type="text" class="form-control input-md  ">'+
                                '</div>'+
                            '<!-- Text input-->'+
                            '<div class="form-group col-md-2 col-sm-2"> '+
                                '<label class=" control-label" for="action_date">Check Date</label>'+
                                    '  <input id="action_date'+next+'"" name="action_date" type="date" class="form-control input-md "> '+
                                    '</div>'+
                                '<div class="form-group col-md-2">'+
                                '<label class="control-label" for="action_check">Check #</label> '+
                                    ' <input id="action_check'+next+'"" name="action_check" type="text" placeholder="" class="form-control input-md"> '+
                                '</div>'+
                                '<div class="form-group col-md-2">'+
                                '<label class=" control-label" for="action_REC">Rec From</label>'+
                                '<input id="action_REC'+next+'"" name="action_REC" type="text" placeholder="" class="form-control input-md">'+
                                '</div>'+
                                '<div class="form-group col-md-2">'+
                                  '<label class=" control-label" for="action_amount">Amount</label>'+
                                  '<input id="action_amount'+next+'"" name="action_amount" type="text"class="form-control input-md">'+
                                '</div>'+
                                '<div class="form-group col-md-2">'+
                                  '<label class=" control-label" for="action_type">Type of Funds</label>'+
                                  '<input id="action_type'+next+'"" name="action_type" type="text" class="form-control input-md">'+
                                '</div>'+
                            '</div>'+
                        '</div>';
        var newInput = $(newIn);
        var removeBtn = '<button id="remove' + (next - 1) + '" class="btn btn-danger remove-me" >Remove</button></div></div><div id="field">';
        var removeButton = $(removeBtn);
        $(addto).after(newInput);
        $(addRemove).after(removeButton);
        $("#field" + next).attr('data-source',$(addto).attr('data-source'));
        $("#count").val(next);

            $('.remove-me').click(function(e){
                e.preventDefault();
                var fieldNum = this.id.charAt(this.id.length-1);
                var fieldID = "#field" + fieldNum;
                $(this).remove();
                $(fieldID).remove();
            });
    });

});

//Dynamically updating Object to display in email ...why....

 function objectUpdater(){
   for(var i=0;i<rowGetter.length; i++){
      //var value=table.push(rowGetter[i].value);
   }
   console.log(table);
 }
// Adding totals of Bills
function Total(){
 if(arr.length>0){
   arr=[];
 }
  for(var i=0;i<nameGetter.length;i++){
     //per value add to previous value
     var vals=arr.push(Number(nameGetter[i].value));
     sum=0;
   }
    for(var x=0;x<arr.length;x++){
    Sum +=arr[x];
    }
  return Sum;
}

//Send Mail Function dynamically

 function dyanmicEmail(){
  for(var i=0; i<rowGetter.length;i++){
    var vals=data.push(rowGetter[i].value);
  }
  console.log(data);
 }
 // Old Sendmail Function

function sendMail() {
   var link = "mailto:jward@lynden.com"
                + "?cc=jward@Lynden.com"
                + "&subject=" + escape("International Corrections")
                + "&body=Here is the info you requested%0A"

                + "Station : " + escape(document.getElementById('inputGroupSelect01').value) + "%0A" + "%0A"
                + "Today's Date: " + escape(document.getElementById('todaysDate').value) + "%0A" + "%0A"
                + "Date CheckLog Sent  : " + escape(document.getElementById('comatSent').value) + "%0A" + "%0A"
                + "Amount Total  : $" + Total() + "%0A" + "%0A"
                ;
            window.location.href = link
        }
