//variables



//methods

//Dynamic Getters

//Schema
//
// mongo("");
//
// mongo.Schema()[
//    {
//     CustomerCompanyName:String,
//     CustomerEmail:String,
//     CustomersPhone:String,
//     ContactName:String,
//   },
//   {
//     Customer:CustomerCompanyName,
//     HitCode:String,
//     Airport:String,
//     Email: String,
//     EZ: Number
//
//   }
// ]


//Sudo Code for  Dynmaic Inputs

//1. set up Schema for Inputs
// 2. Get Values for Schema
//3. Return Values for Schema
//     3.a  Store Values in DB???
//4   Log Values in email?
// 1. get Values for  Input




//Dynamic Added inputs
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
                             '<div class="form-group col-md-3">'+
                                ' <label class="control-label" for="action_LAF">Hitcode</label> '+
                                    ' <input id="action_hitcode'+next+'" name="action_hitcode" type="text" class="form-control input-md  ">'+
                                '</div>'+
                            '<!-- Text input-->'+
                            '<div class="form-group col-md-3 col-sm-3"> '+
                                '<label class=" control-label" for="action_airport">Domestic Airport Code</label>'+
                                    '  <input id="action_airport'+next+'"" name="action_airport" type="text" class="form-control input-md "> '+
                                    '</div>'+
                                '<div class="form-group col-md-3">'+
                                '<label class="control-label" for="action_email">Email</label> '+
                                    ' <input id="action_email'+next+'"" name="action_check" type="email" placeholder="" class="form-control input-md"> '+
                                '</div>'+
                                '<div class="form-group col-md-3">'+
                                '<label class=" control-label" for="action_EZ">Enable EZ Communication</label>'+
                                '<input id="action_EZ'+next+'"" name="action_EZ" type="radio" placeholder="" class="form-control input-md">'+
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
