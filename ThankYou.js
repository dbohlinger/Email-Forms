var radio= document.getElementsByClassName(",")

function sendMail() {
   var link = "mailto:jward@lynden.com"
                + "?cc=jward@Lynden.com"
                + "&subject=" + escape("Thank You Form")
                + "&body=Here is the info you requested%0A"
                + "Include Thank you? : " + escape(document.getElementById('iReponse').value) + "%0A" + "%0A"
                + "Thank you to : " + escape(document.getElementById('txt_to').value) + "%0A" + "%0A"
                + "Station : " + escape(document.getElementById('txt_station').value) + "%0A" + "%0A"
                + "From : " + escape(document.getElementById('txt_from').value) + "%0A" + "%0A"
                + "Thank you for : " + escape(document.getElementById('txt_for').value) + "%0A" + "%0A"
                + "Additional Text : " + escape(document.getElementById('txt_additional').value) + "%0A" + "%0A"
                ;
            window.location.href = link
        }


//function yesno(){
  // This function will determine if the Thank you should go out each Friday//
//1. determine if #yes has been selected
//2. if yes has been selected send mail
//3. counter for email.
//???????? why would this be sent out every Friday????

  // if(getElementById('#yes'==true){
  //   sendMail();
  // }else
  // return false;
