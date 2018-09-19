var radio=document.getElementsByClassName("btn");
var inputGetter=document.getElementsByClassName('fieldz');
var duplicate=[];
var address=[];
var Bill=[];
var hitcode= document.getElementsByClassName('lol').value;
var duplicateTrue= document.getElementsByClassName('className')

//Object Skema
var data={
  hitcode:document.getElementById("action_hitcode").value,
  duplicate:document.getElementById('action_duplicate').value,
  kayak: document.getElementById('action_kayak').value,
  address:document.getElementById('action_address').value
}

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
                            '<div class="form-row id=row'+next + '"">'+
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
/// Assorting Error Function
function hitCodeLoop(){
  for(var i=0; i<=hitcode.length; i++){
    // selecting an error
    if(data.kayak==true){
     var water= duplicate.push(hitcode)

   }else if (data.duplicate==true) {
     var val=duplicate.push(hitcode)
   }
 }if (data.address==true) {
    var val=duplicate.push(hitcode);
 }
 return val=data.push(hitcode);
}
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
                + "Duplicate Hitcodes : " +duplicate()  + "%0A" + "%0A"
                + "Address : " + escape(document.getElementById('address').value) + "%0A" + "%0A"
                + "Kayak Error : " + escape(document.getElementById('Kayak').value) + "%0A" + "%0A"
                + "Other? : " + escape(document.getElementById('other').value) + "%0A" + "%0A"
                ;
            window.location.href = link
        }
