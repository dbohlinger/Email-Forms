var radio      = document.getElementsByClassName("btn")
var inputGetter=document.getElementsByClassName("fieldz");
var idGetter   =document.querySelectorAll('id');
var labelGetter=document.getElementsByTagName('label');
var addData    = document.getElementsByName('add');
var removeData =document.getElementsByClassName('xx');

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
      ' <label class="control-label" for="members">Member</label> ' +
      ' <input id="members' + next + '" name="members" type="text" class="form-control input-md  ">' +
      '</div>' +
      '<!--Checkboxes-->' +
      '<div class="form-group col-md-2 col-sm-2"> ' +
      '<label class=" control-label" for="add">Add Employee</label>' +
      '  <input id="add' + next + '"" name="add" type="checkbox" class="form-control input-md "> ' +
      '</div>' +
      '<div class="form-group col-md-2">' +
      '<label class="control-label" for="remove">Remove Employee</label> ' +
      ' <input id="remove' + next + '"" name="remove" type="checkbox"  class="form-control input-md xx"> ' +
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






//
// $(document).ready(function(){
//     var next = 1;
//     $(".add-more").click(function(e){
//         e.preventDefault();
//         var addto = "#field" + next;
//         var addRemove = "#field" + (next);
//         next = next + 1;
//         var newIn = '<input autocomplete="off" class="input form-control fieldz" id="field' + next + '" name="field' + next + '" type="text">'+
//         '<input type="checkbox" class="input fieldz" id="checkbox1'+ next'">';
//         var newInput = $(newIn);
//         var removeBtn = '<button id="remove' + (next - 1) + '" class="btn btn-danger remove-me" >-</button></div><div id="field">';
//         var removeButton = $(removeBtn);
//         $(addto).after(newInput);
//         $(addRemove).after(removeButton);
//         $("#field" + next).attr('data-source',$(addto).attr('data-source'));
//         $("#count").val(next);
//
//             $('.remove-me').click(function(e){
//                 e.preventDefault();
//                 var fieldNum = this.id.charAt(this.id.length-1);
//                 var fieldID = "#field" + fieldNum;
//                 $(this).remove();
//                 $(fieldID).remove();
//             });
//     });
// });



function sendMail() {
   var link = "mailto:adminmanagegroups@lynden.com"
                + "?cc=LINT.MailgroupApproval@lynden.com"
                + "&subject=" + escape("New Mail Group Request")
                + "&body=Here is the info you requested%0A"
                + "Company Name : " + escape(document.getElementById('companyName').value) + "%0A" + "%0A"
                + "Mail Group : " + escape(document.getElementById('mailGroup').value) + "%0A" + "%0A"
                + "Add or Remove:  "+ escape(document.getElementById('choice').value)+"%0A" + "%0A"
                + "Members : " +setValue() + "%0A" + "%0A"
                ;
            window.location.href = link
        }

//Gets Hitcodes from Dynamic Inputs

function sort(){
   for(var i=0; i<=inputGetter.length; i++){
     var dataAdd=document.getElementById('add')
     if(document.getElementById("add")==true){
       console.log("ADD");
     }else if(document.getElementById('remove'+[i])==true){
       console.log("remove")
     }else{
       console.log("pick");
     }
   }
  // var addData= document.getElementById('add');
  // var removeData=document.getElementById('remove');
  //
  // for(var i=0; i<inputGetter.length; i++){
  //   var newAdd = addData+i;
  //    var newRemove=  removeData+i;
  //    if(removeData.checked==true){
  //      console.log('add');
  //    }else if(newRemove.checked==true){
  //      console.log("delete")
  //    }else{
  //      console.log("remove or add employee");
  //    }
  // }
}

var data=[]
function addData(){
  for(var i=0; i<=inputGetter.length; i++){
    var vals = data.push(inputGetter.value)
  }
  return data
}
var arr=[];
 function setValue(){
   if(arr.length>0){
     arr.length=0;
   }
   for(var i=0; i<inputGetter.length; i++) {
     var vals =arr.push(inputGetter[i].value);
     }
     return arr
 }

model.exports=mongoose.model("form", formSchema);
