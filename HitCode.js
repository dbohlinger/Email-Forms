alert("HEllo Worl ")
var submitBtn= document.getElementById('submit');

function sendMail() {
   var link = "ARCustomerSvc@lynden.com"
    + "?cc=dylanb@lynden.com"
    + "&subject=" + escape("New Hitcode Request")
    + "&body=Here is the info you requested%0A"
    + "Customer details : " + escape(document.getElementById('custName').value) + "%0A" + "%0A"
    + "Address : " + escape(document.getElementById('address1').value) + "%0A" + "%0A"
    + "Address 2 : " + escape(document.getElementById('address2').value) + "%0A" + "%0A"
    + "City : " + escape(document.getElementById('inputCity').value) + "%0A" + "%0A"
    + "State : " + escape(document.getElementById('inputState').value) + "%0A" + "%0A"
+ "Zip: " + escape(document.getElementById('inputZip').value) + "%0A" + "%0A"
+ "Contact name : " + escape(document.getElementById('contact').value) + "%0A" + "%0A"
+ "Telephone : " + escape(document.getElementById('tel').value) + "%0A" + "%0A"
+ "Sales Rep : " + escape(document.getElementById('sales').value) + "%0A" + "%0A"
    + "Additional Text : "
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
