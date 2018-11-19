function fizBuzz(num, Fiznum, Buznum){
 for(i=0; i<=num; i++){
  if(i%Fiznum===0 && i%Buznum===0){
    console.log("Fizz Buzz")
  }else if(i%Buzznum===0){
    console.log("buzz");
  }else if (i%Fiznum===0){
    console.log("Fizz");
  }else{
    console.log(i)
    }
  }
}

var radio= document.getElementById('submit');

function sendMail() {
   var link = "mailto:ThankYou@lynden.com"
                + "?cc=jward@Lynden.com; rcable@lynden.com;"
                + "&subject=" + escape("Thank You Form")
                + "&body=Here is the info you requested%0A"
                + "Include Thank you? : " + escape(document.getElementById('friday').value) + "%0A" + "%0A"
                + "Thank you to : " + escape(document.getElementById('to').value) + "%0A" + "%0A"
                + "Station : " + escape(document.getElementById('station').value) + "%0A" + "%0A"
                + "From : " + escape(document.getElementById('from').value) + "%0A" + "%0A"
                + "Thank you for : " + escape(document.getElementById('thankYou').value) + "%0A" + "%0A"
                ;
            window.location.href = link
        }
