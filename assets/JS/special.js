
var submitBtn= document.getElementById('submit');
//
function sendMail() {
   var link = "mailto:SpecialBillingRequest@lynden.com"
                + "?cc=jward@Lynden.com"
                + "&subject=" + escape("Special Billing Request")
                + "&body=Here is the info you requested%0A"
                + "Request: " + escape(document.getElementById('request').value) + "%0A" + "%0A"
                + "Yes : " + escape(document.getElementById('yes').value) + "%0A" + "%0A"
                + "responsible : " + escape(document.getElementById('responsible').value) + "%0A" + "%0A"
                + "Customer Name: " + escape(document.getElementById('custName').value) + "%0A" + "%0A"
                + "Hitcode : " + escape(document.getElementById('hitcode').value) + "%0A" + "%0A"
                + "address1 : " + escape(document.getElementById('address1').value) + "%0A" + "%0A"
                + "address2 : " + escape(document.getElementById('address2').value) + "%0A" + "%0A"
                + "City : " + escape(document.getElementById('inputCity').value) + "%0A" + "%0A"
                + "State : " + escape(document.getElementById('inputState').value) + "%0A" + "%0A"
                + "Zip : " + escape(document.getElementById('inputZip').value) + "%0A" + "%0A"
                + "contact : " + escape(document.getElementById('contact').value) + "%0A" + "%0A"
                + "Telephone : " + escape(document.getElementById('tel').value) + "%0A" + "%0A"
                + "fax : " + escape(document.getElementById('fax').value) + "%0A" + "%0A"
                + "LAF Sales associate : " + escape(document.getElementById('sales').value) + "%0A" + "%0A"
                + "Control Station : " + escape(document.getElementById('control').value) + "%0A" + "%0A"
                + "tariff : " + escape(document.getElementById('tariff').value) + "%0A" + "%0A"
                + "Special Billing Request(s) : " + escape(document.getElementById('specialdir').value) + "%0A" + "%0A"
                ;
            window.location.href = link
        }


//SENDEMAIL
//Find all Ids
//
// var elems=document.querySelectorAll("id");
 // elems.forEach(function(elems){
 //    console.log("red");
//  // });
// $(".btn").click(function(){
//   $("ids").each(function(i){
//     console.log("red");
//     });
//  });
// // function elements() {
// //   //Loop through ids
//   for(var i=0; i<=document.querySelectorAll("id"); i++){
//     console.log(i+ "redd");
//   }
// }
