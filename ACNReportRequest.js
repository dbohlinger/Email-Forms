
var radio= document.getElementsByClassName("btn")
var inputGetter=document.getElementsByClassName("fieldz");
var idGetter =document.querySelectorAll('id');
var labelGetter=document.getElementsByTagName('label');


$(document).ready(function(){
    var next = 1;
    $(".add-more").click(function(e){
        e.preventDefault();
        var addto = "#field" + next;
        var addRemove = "#field" + (next);
        next = next + 1;
        var newIn = '<input autocomplete="off" class="input form-control fieldz" id="field' + next + '" name="field' + next + '" type="text">';
        var newInput = $(newIn);
        var removeBtn = '<button id="remove' + (next - 1) + '" class="btn btn-danger remove-me" >-</button></div><div id="field">';
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

function sendMail() {
   var link = "mailto:ACN.ReportRequest@lynden.com"
                + "?cc=jward@Lynden.com"
                + "&subject=" + escape("New Mail Group Request")
                + "&body=Here is the info you requested%0A"
                + "Customer's Name : " + escape(document.getElementById('customerName').value) + "%0A" + "%0A"
                + "Customer's Email : " + escape(document.getElementById('customerEmail').value) + "%0A" + "%0A"
                + "Hitcodes : " +setValue() + "%0A" + "%0A"
                + "Shipper : " + escape(document.getElementById('shipper').value) + "%0A" + "%0A"
                + "consignee : " + escape(document.getElementById('consignee').value) + "%0A" + "%0A"
                + "billTo : " + escape(document.getElementById('billTo').value) + "%0A" + "%0A"
                + "Charges Visable? : " + escape(document.getElementById('neh').value) + "%0A" + "%0A"
                + "mailCodes : " + escape(document.getElementById('mailCodes').value) + "%0A" + "%0A"
                + "ACN : " + escape(document.getElementById('ACN').value) + "%0A" + "%0A"
                + "alt : " + escape(document.getElementById('alt').value) + "%0A" + "%0A"
                ;
            window.location.href = link
        }

// Gets Hitcodes from Dynamic Inputs
var arr=[];
 function setValue(){
   //clear array
   if(arr.length>0){
     arr.length=0;
   }
   for(var i=0; i<inputGetter.length; i++) {
     var vals =arr.push(inputGetter[i].value);
     }
     return arr
 }
//////

 // Refactoring sendMail function
//
// function sendMails(){
//   //Setting up the mailcode
//    // var link="mailto:dylanb@lynden.com"
//    // +"&subject="+escape(document.querySelector("h1");
//    // + "&body=Here is the info you requested%0A"
//   //have the function find all of the labels on the page
//   for(var i=0; i<labelGetter.length; i++){
//     console.log(i);
//     // for each id return name + value in email
//     return
//     //forEach???
//   }
// }
