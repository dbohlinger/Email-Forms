
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
























// $(document).ready(function(){
//     var next = 0;
//     $(".add-more").click(function(e){
//         e.preventDefault();
//         var addto = "#field"+ ".hitcode" + next;
//         var addRemove = "#field" + (next);
//         next = next + 1;
//         var newIn = ' <div id="field'+ next +'" name="field'+ next +'"><div class="form-row"><div class="form-group col-md-4"><label for="chargeDiscription">Charge discription</label><input type="text" class="form-control" id="chargeDiscription"></div><div class="form-group col-md-4"><label for="Oringinal">orginal</label><input type="text" class="form-control" id="Oringinal" ></div><div class="form-group col-md-4"><label for="corrected">corrected</label><input type="text" class="form-control" id="corrected" ></div></div></div>';
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
//
//
//
// });
