$(document).ready(function(){
    var next = 0;
    $(".add-more").click(function(e){
        e.preventDefault();
        var addto = "#field" + next;
        var addRemove = "#field" + (next);
        next = next + 1;
        var newIn = ' <div id="field'+ next +'" name="field'+ next +'"><div class="form-row"><div class="form-group col-md-4"><label for="chargeDiscription">Charge discription</label><input type="text" class="form-control" id="chargeDiscription"></div><div class="form-group col-md-4"><label for="Oringinal">orginal</label><input type="text" class="form-control" id="Oringinal" ></div><div class="form-group col-md-4"><label for="corrected">corrected</label><input type="text" class="form-control" id="corrected" ></div></div></div>';
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
