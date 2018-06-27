var submitBtn= document.getElementById('submit');

function sendMail() {
   var link = "mailto:dylanb@lynden.com"
                + "?cc=jward@Lynden.com"
                + "&subject=" + escape("property Damage Claim Form")
                + "&body=Here is the info you requested%0A"
                + "Control : " + escape(document.getElementById('control').value) + "%0A" + "%0A"
                + "Origin : " + escape(document.getElementById('origin').value) + "%0A" + "%0A"
                + "Pcs : " + escape(document.getElementById('pcs').value) + "%0A" + "%0A"
                + "Dims : " + escape(document.getElementById('dims').value) + "%0A" + "%0A"
                + "Value : " + escape(document.getElementById('value').value) + "%0A" + "%0A"
                + "Description : " + escape(document.getElementById('Description').value) + "%0A" + "%0A"
                + "Packaging : " + escape(document.getElementById('packaging').value) + "%0A" + "%0A"
                + "Request : " + escape(document.getElementById('request').value) + "%0A" + "%0A"
                + "Shipper : " + escape(document.getElementById('shipper').value) + "%0A" + "%0A"
                + "Consignee : " + escape(document.getElementById('consignee').value) + "%0A" + "%0A"
                + "Ship History : " + escape(document.getElementById('shipHistory').value) + "%0A" + "%0A"
                + "Commodity : " + escape(document.getElementById('commodity').value) + "%0A" + "%0A"
                + "Hawb : " + escape(document.getElementById('hawb').value) + "%0A" + "%0A"
                + "vessel : " + escape(document.getElementById('vessel').value) + "%0A" + "%0A"
                + "Bill : " + escape(document.getElementById('bill').value) + "%0A" + "%0A"
                + "dateofp : " + escape(document.getElementById('dateofp').value) + "%0A" + "%0A"
                + "dateofd : " + escape(document.getElementById('dateofd').value) + "%0A" + "%0A"
                + "dateofa : " + escape(document.getElementById('dateofa').value) + "%0A" + "%0A"
                + "terms : " + escape(document.getElementById('terms').value) + "%0A" + "%0A"
                + "route : " + escape(document.getElementById('route').value) + "%0A" + "%0A"
                + "comments : " + escape(document.getElementById('comments').value) + "%0A" + "%0A"
                + "warc : " + escape(document.getElementById('warc').value) + "%0A" + "%0A"
                + "warp : " + escape(document.getElementById('warp').value) + "%0A" + "%0A"
                ;
            window.location.href = link
        }


// for Each element in  the form
//Print name and  getElementById
//in email

 // function SendMails(){
 //    forEach(label, id){
 //      if(label==true && id==true){
 //       return lable: escape(document.getElementById("'"id"'").value)+"%0A"+"/0A"
 //     }else{
 //       console.log("ERRROR!")
 //     }
 //    }
 //
 // }
