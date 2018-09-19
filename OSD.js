

//  var data={
//   this.org= document.getElementById('action_org').value,
//   destination= document.getElementById('action_dest').value,
//  description= document.getElementById('action_description').value
// }

//Dynamic Fields
$(document).ready(function () {
    var next = 0;
    $("#add-more").click(function(e){
        e.preventDefault();
        var addto = "#field" + next;
        var addRemove = "#field" + (next);
        next = next + 1;
        var newIn =     '<div id="field'+ next +'" name="field'+ next +'"> '+
                        '<!-- Text input-->'+
                            '<div class="form-row">'+
                             '<div class="form-group col-md-3 col-sm-2>'+
                                ' <label class="control-label" for="action_org">ORG</label> '+
                                    ' <input id="action_org" name="action_org" type="text" class="form-control input-md">'+
                                '</div>'+
                            '<!-- Text input-->'+
                            '<div class="form-group col-md-3"> '+
                                '<label class=" control-label" for="action_date">Dest</label>'+
                                    '  <input id="action_dest" name="action_dest" type="text" class="form-control input-md"> '+
                                '</div>'+
                                '<div class="form-group col-md-3">'+
                                '<label class="control-label" for="action_check">Consignee</label> '+
                                    ' <input id="action_consginee" name="action_check" type="text" placeholder="" class="form-control input-md"> '+
                                '</div>'+
                                '<div class="form-group col-md-3">'+
                                '<label class=" control-label" for="action_description">Detailed Description</label>'+
                                '<textarea id="action_description" name="action_description" type="text" placeholder="Analysis" class="form-control input-md"></textarea>'+
                                '</div>'+
                            '</div>'+
                        '<div>'+
                        '<div>';
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

//Get Dynamic Data
 function test(){
   console.log(data)
 }



 function sendMail() {
    var link = "mailto:dylanb@lynden.com"
     + "?cc=jward@Lynden.com"
     + "&subject=" + escape("Hit Code Form (Beta)")
     + "&body=Here is the info you requested%0A"
     + "Origin of AAWB : " + escape(document.getElementById('AAWB').value) + "%0A" + "%0A"
     + "Airline Bill : " + escape(document.getElementById('Bill').value) + "%0A" + "%0A"
     + "Ship Date : " + escape(document.getElementById('shipdate').value) + "%0A" + "%0A"
     + "Date CNRE'D : " + escape(document.getElementById('CNRED').value) + "%0A" + "%0A"
     // Return Objects Skemas

 // + "Origi " + escape(document.getElementById('zip').value) + "%0A" + "%0A"
 // + "Contact name : " + escape(document.getElementById('contactName').value) + "%0A" + "%0A"
 // + "Telephone : " + escape(document.getElementById('phone').value) + "%0A" + "%0A"
 // + "Sales Rep : " + escape(document.getElementById('sales').value) + "%0A" + "%0A"
 //     + "Additional Text : " + escape(document.getElementById('comment').value) + "%0A" + "%0A"
                 ;
             window.location.href = link
         }
