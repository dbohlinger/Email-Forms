
var submitBtn= document.getElementById('submit');

function sendMail() {
   var link = "mailto:dylanb@lynden.com"
    + "?cc=jward@Lynden.com"
    + "&subject=" + escape("Hit Code Form Alpha")
    + "&body=Here is the info you requested%0A"
    + "Customer details : " + escape(document.getElementById('customerName').value) + "%0A" + "%0A"
    + "Address : " + escape(document.getElementById('Address').value) + "%0A" + "%0A"
    + "City : " + escape(document.getElementById('City').value) + "%0A" + "%0A"
    + "State : " + escape(document.getElementById('state').value) + "%0A" + "%0A"
+ "Zip: " + escape(document.getElementById('zip').value) + "%0A" + "%0A"
+ "Contact name : " + escape(document.getElementById('contactName').value) + "%0A" + "%0A"
+ "Telephone : " + escape(document.getElementById('phone').value) + "%0A" + "%0A"
+ "Sales Rep : " + escape(document.getElementById('sales').value) + "%0A" + "%0A"
    + "Additional Text : " + escape(document.getElementById('comment').value) + "%0A" + "%0A"
    + "a : " + escape(document.getElementById('sales').value) + "%0A" + "%0A"

                ;
            window.location.href = link
        }

///

// function Send() {
//    submitBtn.addEventListener('click',function () {
//      sendMail();
//    })
// }
//
// function sendEmail( ){
//   // Captures the data in the fields
//   // 1. if #submit is clicked
//   //2. Export the data to Outlook/
//   //3. Sends Email to LINT AR?
//   var sub=document.getElementById('#submit');
//
//   if('#submit'==true)){
//     console.log("Send Email");
//   }
// }
//
// //Sends Opens up Outlook.
// var x= document.getElementById('#submit');
// x.addEventListener("click",sendEmail(),false)
