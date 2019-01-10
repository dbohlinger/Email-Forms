//Variables
var radio         = document.getElementsByClassName("btn");
var inputGetter   = document.getElementsByClassName('fieldz');
var field         = document.getElementsByClassName("form-row");
var duplicate     = [];
var address       = [];
var bill          = [];
var arr           = [];
var hitcode       = document.getElementsByClassName('lol').value;
var duplicateTrue = document.getElementsByClassName('className')

///Constructor(s)
   //1. define object
   //2. get the data
   //3. return objects

 //Prototype approach
function Row(hitcode, duplicate, kayak, address, other1, other){
  this.hitcode   = hitcode;
  this.duplicate = duplicate;
  this.kayak     = kayak;
  this.address   = address;
  this.other1    = other1;
  this.other     = other;

  //Methods
  // Outer Counter to count the number of rows.
     // For Each row get create new object

  // inner counter to count the data?

   Row.prototype.getRowData = function(){
     for(var i= 0; i<=inputGetter.length; i++){
     hitcode= data.push()

     }
     console.log()
   }

}

function captureData(hitcode){
  for (var i = 0; i <= inputGetter.length; i++) {
      var arr= [];
       var values=  arr.push('action_LAF'[i]).value
  }
  return arr
}

 // call below later in the function(s)
    // var row1 = new Row(hitcode, duplicate, kayak, address, other1, other)

  //Constructor approach
 function deleteData(hitcode, duplicate, kayak, address, other1, other){
  //declared variables
    this.hitcode  = document.getElementById('LAF_action').value;
   this.duplicate = document.getElementById('action_duplicate').value;
   this.kayak     = document.getElementById('action_kayak').value;
   this.address   = document.getElementById('action_address').value;
   this.other1    = document.getElementById('action_other1').checked;
   this.other     = document.getElementById('action_other').value;
}
  //Methods
      //sudo code
        //1.declare the variables,
       //2.loop through the rows
       //3.capature the data
       //4. put the data into an array?
       //print the data....
//
  deleteData.prototype.getData=function(){
     for(var i=0; i<=inputGetter.length; i++){
        new deleteData
     }
  }

//    this.getdata =function(hitcode, duplicate, kayak, address, other1, other){
//      for(var i=0; i<inputGetter.length; i++){
//         var
//       }
//     } console.log(hitcode, duplicate, kayak, address, other1, other)
// }

//Object Skema
// var data={
//   this.action_hitcode= hitcode:document.getElementById("action_hitcode").value,
//   duplicate:document.getElementById('action_duplicate').value,
//   kayak: document.getElementById('action_kayak').value,
//   address:document.getElementById('action_address').value
// }


//Dynamic added input(s);
$(document).ready(function () {
    var next = 0;
    $("#add-more").click(function(e){
        e.preventDefault();
        var addto = "#field" + next;
        var addRemove = "#field" + (next);
        next = next + 1;
        var newIn =     '<div id="field'+ next +'" name="field'+ next +'"> '+
                        '<!-- Text input-->'+
                          // '<div classs="form-row" id="row'+ next'"> '
                            '<div class="form-row"'+' "id=row'+next +'" >'+
                             '<div class="form-group col-md-2">'+
                                ' <label class="control-label" for="action_LAF">LAF Bill#</label> '+
                                    ' <input id="action_LAF" name="action_LAF" type="text" class="form-control input-md">'+
                                '</div>'+
                            '<!-- Text input-->'+
                            '<div class="form-group col-md-2 col-sm-2"> '+
                                '<label class=" control-label" for="action_duplicate">Duplicate Hitcode?</label>'+
                                    ' <input id="action_duplicate" name="action_error'+next+'" type="radio" value="0" class="form-check-input form-control input-md">'+
                                    '</div>'+
                                '<div class="form-group col-md-2">'+
                                '<label class="control-label" for="action_check">Address no longer used?</label> '+
                                    '<input id="action_kayak" name="action_error'+next+'" type="radio"  value="1" class="form-check-input control form-control input-md">'+
                                '</div>'+
                                '<div class="form-group col-md-2">'+
                                '<label class=" control-label" for="action_REC">Kayak Error</label>'+
                                '<input id="action_address" name="action_error'+next+'" type="radio"  value="2"  class="form-check-input  form-control input-md">'+
                                '</div>'+
                                '<div class="form-group col-sm-2">'+
                                  '<label class="control-label" for="action_other1">Other?</label>'+
                                    '<input id="action_other1" name="action_error'+next+'" type="radio" class="form-control input-md lol">'+
                                '</div>'+
                                '<div class="form-group col-sm-2">'+
                                  '<label class="control-label" for="action_other">Other Reason?</label>'+
                                    '<input id="action_other" name="action_other"  type="text" class="form-control input-md lol">'+
                                '</div>'
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
//Returning Radio Button Values
// var radios= document.getElementsByName('action_error');
// function checkRadio(){
//   for(var i=0; i<=radios.length; i++){
//     if(document.getElementById("action_duplicate").checked{
//        var val= duplicate.push(hitcode)
//       }
//       ////idk dddddfjfjfjfjfjfjfjfjfjfj
//     }
//   }
// }

hitcodes =[]
duplicates=[]
kayakError =[]
addressin= []
otherReason=[]

//Sorting Hitcodes
 var hitcodesz= document.getElementsByClassName(('form-row'));

 function sortHitCodes(){
   for(var y= 0; y<=hitcodesz.length; y++){ //measures how many rows there are

      var  row = hitcodes.push(hitcodesz[y].value) // push hitcodes to array
     for(var x= 0; x<=row.length; x++){ // measures within each row
         //Sorting  instantaces

       if(document.getElementById('action_duplicate'[x]).checked==true ){
            console.log("Duplicates : "+ hitcode);
          }else if(document.getElementById('action_kayak'[x]).checked==true ){
            console.log("Kayak error: "+ hitcode);
          }else  if(document.getElementById('action_address'[x]).checked==true ){
            console.log("Address Incorrect : "+ hitcode);

          }else if(document.getElementById('action_other1'[x]).checked==true ){
            console.log("Other Reason : "+action_other[x] +" "+ hitcode);

          }else {
            console.log("enter a reason")
          }
        }
      }
  }
/// Assorting Error Function
// function hitCodeLoop(){
//   for(var i=0; i<=hitcode.length; i++){
//     // selecting an error
//     if(data.kayak==){
//      var water= duplicate.push(hitcode)
//
//    }else if (data.duplicate==true) {
//      var val=duplicate.push(hitcode)
//    }
//  }if (data.address==true) {
//     var val=duplicate.push(hitcode);
//  }
//  return val=data.push(hitcode);
// }
//  1. Loop through Hitcodes,
// 2. If Duplicate is selected
    //2.a  Push to New Array
    //2.b return new Array
//3. Repeat for other Errors
//4. Return Arrays

//Gets Hitcodes from Dynamic Inputs
 function setValue(){
   for(var i=0; i<inputGetter.length; i++) {
     var vals =arr.push(inputGetter[i].value);
     }
     return arr
 }
 //Duplicate hitcode function
    //add function for checkbox in dynamic field
    // if checkbox is on, signal as duplicate as duplicate
    //Jquery Method
    var dup=[];
    var err =document.getElementsByClassName("fieldz");
    function markSelection(evt){
      dup.push()
     for(i=0; i<err.length;i++){
     err[i].onclick=markedSelection;
      }
     }
     // var dup=[];
     //    $(".fieldz").on("click",function(){
     //      $(this).css('background-color',"red");
     //    });
//Email function:
function sendMail() {
   var link = "mailto:jward@lynden.com"
                + "?cc=jward@Lynden.com"
                + "&subject=" + escape("New Mail Group Request")
                + "&body=Here is the info you requested%0A"
                + "HitCodes : " +setValue() + "%0A" + "%0A"
                // + "Duplicate Hitcodes : " +duplicate()  + "%0A" + "%0A"
                + "Address : " + escape(document.getElementById('address').value) + "%0A" + "%0A"
                + "Kayak Error : " + escape(document.getElementById('Kayak').value) + "%0A" + "%0A"
                + "Other? : " + escape(document.getElementById('other').value) + "%0A" + "%0A"
                ;
            window.location.href = link
        }


function checkSecurity(){
  if(user.lms=true){
    user.persmissions=allowed
  }
}
