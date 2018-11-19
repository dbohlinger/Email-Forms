//Charge Totals
var arr           = [];
var arrC          = [];
var Description   = []

var correctGetter = document.getElementsByName('action_corrected');
var rowGetter     = document.getElementsByClassName('row');
var originGetter  = document.getElementsByName('action_original');
var  des          =document.getElementById('action_id');
//Dynamic Row Capturing
var ddGetter      = document.getElementsByClassName('form-group col-md-4');

// var dataGetter    = {
//    chargeD:document.getElementById('action_id').value,
//    origin:document.getElementsByName("action_orginal"),
//    correct:document.getElementsByName('action_corrected')
// }

//Dynamically added inputs
$(document).ready(function () {
    var next = 0;
    $("#add-more").click(function(e){
        e.preventDefault();
        var addto = "#field" + next;
        var addRemove = "#field" + (next);
        next = next + 1;
        var newIn =     '<div id="field'+ next +'" name="field'+ next +'"> '+
                        '<!-- Text input-->'+
                            '<div class="form-row lolz'+ next+'">'+
                             '<div class="form-group col-md-4">'+
                                ' <label class="control-label" for="action_id">Charge Description</label> '+
                                    '<input id="action_charge" name="action_charge" type="text" placeholder="" class="form-control input-md"> '+
                                '</div>'+
                            '<!-- Text input-->'+
                            '<div class="form-group col-md-4"> '+
                                '<label class="control-label" for="action_name">Original</label> '+
                                    '<input id="action_original" name="action_original" type="text" placeholder="" class="form-control input-md"> '+
                                    '</div>'+
                                '<div class="form-group col-md-4">'+
                                '<label class="control-label" for="action_name">Corrected </label> '+
                                    '<input id="action_corrected" name="action_corrected" type="text" placeholder="" class="form-control input-md"> '+
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

// Adding totals of Bills
// Add functionality so that removing bills subtracts from total
var OrSum=0;
function orTotal(){
  if(arr.length>0){
   arr=[];
   orSum=0;
  }
  for(var i=0;i<originGetter.length;i++){
     //per value add to previous value
     var vals=arr.push(Number(originGetter[i].value));
   }
    for(var x=0;x<arr.length;x++){
      OrSum +=arr[x];
    }
    // if(removeBtn==="true"){
    //   //subtract from total
  return OrSum;
}

var coSum=0;
function coTotal(){
 if(coSum>0){
   coSum=0;
 }
  for(var z=0;z<correctGetter.length;z++){
     //per value add to previous value
     var pals=arrC.push(Number(correctGetter[z].value));
   }
    for(var y=0;y<arrC.length;y++){
      coSum +=arrC[y];
    }
  return coSum;
}


var rowData    = {
   chargeD:document.getElementById('action_id').value,
   origin:document.getElementsByName("action_orginal").value,
   correct:document.getElementsByName('action_corrected').value
}
//Capturing Data from inputs:
// var data =[];
// var chargeD='chargeD'
//
// function multiple(){
// for(var i=0; i<ddGetter.length; i++){
//  var value= data.push(ddGetter).value
//
//    data[i] = {
//      rowData.chargeD=chargeD,
//      rowData.origin,
//      rowData.correct
//   };
//   }
//   console.log(data);
// }
// var cd=[];
// var og=[];
// var ca=[];
function dataForDayzz(){
  /// 1 loop through the documents
  /// put values into arrays
  for(var i=0; i=correctGetter.length; i++){
     var value=ca.push(correctGetter.value +("i"+1))
   }
  for(var i=0; i=originGetter.length; i++){
     var value=og.push(correctGetter.value +("i"+1))
   }
   for(var i=0; i=correctGetter.length; i++){
      var value=cd.push(correctGetter.value +("i"+1))
    }
    //make master array/ congat arrays
    if(ca.i===og.i&&og.i===cd.i){
      push(cd.value)
    }
}


//
// var data=[];
// ddGetter.forEach(element){
//   element.
// }
//Send Mail Function


$(document).ready(function () {
    $('body').on('click', '#btn', function () {
        var address = {};
        $('input[type="text"].address').each(function (index, element) {
            address[element.id] = $(element).val();
        });
        console.log(address);
    });
});


function sendMail() {
   var link = "mailto:jward@lynden.com"
                + "?cc=jward@Lynden.com"
                + "&subject=" + escape("International Corrections")
                + "&body=Here is the info you requested%0A"
                + "HAWB : " + escape(document.getElementById('HAWB').value) + "%0A" + "%0A"
                + "Ship Date: " + escape(document.getElementById('ShipDate').value) + "%0A" + "%0A"
                + "Original : " +escape(document.getElementById('orig').value) + "%0A" + "%0A"
                + "Destination : " + escape(document.getElementById('Dest').value) + "%0A" + "%0A"
                + "Mode : " + escape(document.getElementById('mode').value) + "%0A" + "%0A"
                + "Control : " + escape(document.getElementById('control').value) + "%0A" + "%0A"
                + "Authorized : " + escape(document.getElementById('autho').value) + "%0A" + "%0A"
                + "origin : " + escape(document.getElementById('origin').value) + "%0A" + "%0A"
                + "correct : " + escape(document.getElementById('correct').value) + "%0A" + "%0A"
                + "Corrected Address Hitcode : " + escape(document.getElementById('coadd').value) + "%0A" + "%0A"
                + "Correct Invalid or missing References Numbers : " + escape(document.getElementById('miss').value) + "%0A" + "%0A"
                + "Detailed Reason For Correction : " + escape(document.getElementById('reason').value) + "%0A" + "%0A"
                + "Reason Code for Correction : " + escape(document.getElementById('CorrectR').value) + "%0A" + "%0A"
                + "Original Total : $" +orTotal() + "%0A" + "%0A"
                + "Corrected Total :$" +coTotal() + "%0A" + "%0A"
                ;
            window.location.href = link
        }
