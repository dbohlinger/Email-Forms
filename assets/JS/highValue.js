var submitBtn= document.getElementById('submit');

function sendMail() {
   var link = "mailto:dylanb@lynden.com"
                + "?cc=jward@Lynden.com"
                + "&subject=" + escape("High Value Authorization Form")
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
                + "Hawb# : " + escape(document.getElementById('hawb').value) + "%0A" + "%0A"
                + "vessel : " + escape(document.getElementById('vessel').value) + "%0A" + "%0A"
                + "Bill : " + escape(document.getElementById('bill').value) + "%0A" + "%0A"
                + "Date of Possession : " + escape(document.getElementById('dateofp').value) + "%0A" + "%0A"
                + "date of Departure : " + escape(document.getElementById('dateofd').value) + "%0A" + "%0A"
                + "date of Arrival : " + escape(document.getElementById('dateofa').value) + "%0A" + "%0A"
                + "terms : " + escape(document.getElementById('terms').value) + "%0A" + "%0A"
                + "route : " + escape(document.getElementById('route').value) + "%0A" + "%0A"
                + "comments : " + escape(document.getElementById('comments').value) + "%0A" + "%0A"
                + "War Risk Country : " + escape(document.getElementById('warc').value) + "%0A" + "%0A"
                + "War Risk Carrier : " + escape(document.getElementById('warp').value) + "%0A" + "%0A"
                +"PER LAF OPERATION PROCEDURES MANUAL,IF IT IS AFTER OFFICE HOURS ALL"+ "%0A" + "%0A"
                +"STATIONS ARE TO CONTACT ONE OF THE FOLLOWING G.O. OFFICE STAFF AT"+ "%0A" + "%0A"
              +" HOME IN THE FOLLOWING ORDER:"+ "%0A" + "%0A"
              +"***********************************************************************"+ "%0A" + "%0A"
                <table>
                  <thead>
                  <tr>
                    <th>Name</th>
                    <th>Number</th>
                  </tr>
                </thead>
                  <tbody>
                    <tr>
                      <th>Tammy McKinnon</th>
                       <td>(206) 724-2033 </td>
                    </tr>
                    <tr>
                      <th>Brian Ruese</th>
                       <td>(206) 300-9533  </td>
                    </tr>
                    <tr>
                      <th>Howard Hales</th>
                       <td>(206) 999-0991</td>
                    </tr>
                    <tr>
                      <th>Laura Sanders</th>
                       <td>(206) 255-1894</td>
                    </tr>
                    <tr>
                      <th>John Kaloper</th>
                       <td>(206) 953-6673</td>
                    </tr>

                  </tbody>
                </table>
                <p>***********************************************************************</p>
                </div>

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
