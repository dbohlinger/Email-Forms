
var submitBtn= document.getElementById('submit');

function sendMail() {
   var link = "mailto:dylanb@lynden.com"
                + "?cc=jward@Lynden.com"
                + "&subject=" + escape("property Damage Claim Form")
                + "&body=Here is the info you requested%0A"
                + "Today's Date: " + escape(document.getElementById('todaysDate').value) + "%0A" + "%0A"
                + "HAWB : " + escape(document.getElementById('hawb').value) + "%0A" + "%0A"
                + "Customer PO# : " + escape(document.getElementById('customerPO').value) + "%0A" + "%0A"
                + "Claimant's Name : " + escape(document.getElementById('claimantName').value) + "%0A" + "%0A"
                + "Claimant's Phone : " + escape(document.getElementById('claimantPhone').value) + "%0A" + "%0A"
                + "Claimant's Email : " + escape(document.getElementById('email').value) + "%0A" + "%0A"
                + "Claimant's Address : " + escape(document.getElementById('inputAddress').value) + "%0A" + "%0A"
                + "City : " + escape(document.getElementById('inputCity').value) + "%0A" + "%0A"
                + "State : " + escape(document.getElementById('inputState').value) + "%0A" + "%0A"
                + "Zip : " + escape(document.getElementById('inputZip').value) + "%0A" + "%0A"
                + "Incident Date : " + escape(document.getElementById('incidentDate').value) + "%0A" + "%0A"
                + "Description  of Damage : " + escape(document.getElementById('description').value) + "%0A" + "%0A"
                ;
            window.location.href = link
        }
