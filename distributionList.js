
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
