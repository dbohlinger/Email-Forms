
var submitBtn= document.getElementById('submit');

function sendMail() {
   var link = "mailto:dylanb@lynden.com"
                + "?cc=jward@Lynden.com"
                + "&subject=" + escape("Wire/ACH Form")
                + "&body=Here is the info you requested%0A"
                + "Payable To: " + escape(document.getElementById('payableTo').value) + "%0A" + "%0A"
                + "Amount: " + escape(document.getElementById('amount').value) + "%0A" + "%0A"
                + "File Number : " + escape(document.getElementById('fileNumber').value) + "%0A" + "%0A"
                + "our Customer : " + escape(document.getElementById('ourCustomer').value) + "%0A" + "%0A"
                + "Invoice : " + escape(document.getElementById('invoice').value) + "%0A" + "%0A"
                + "Type : " + escape(document.getElementById('gridCheck').value) + "%0A" + "%0A"
                ;
            window.location.href = link
        }
