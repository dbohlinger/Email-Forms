
var submitBtn= document.getElementById('submit');

function sendMail() {
   var link = "mailto:dylanb@lynden.com"
                + "?cc=jward@Lynden.com"
                + "&subject=" + escape("Station Check Print Request Form")
                + "&body=Here is the info you requested" +"%0A"
                + "Check Payable To : " + escape(document.getElementById('checkPayable').value) + "%0A" + "%0A"
                + "Total : " + escape(document.getElementById('total').value) + "%0A" + "%0A"
                + "Kayak Reference Number : " + escape(document.getElementById('kayak').value) + "%0A" + "%0A"
                ;
            window.location.href = link
        }
