var radio= document.getElementsByClassName("btn")

function sendMail() {
   var link = "mailto:jward@lynden.com"
                + "?cc=jward@Lynden.com"
                + "&subject=" + escape("New Mail Group Request")
                + "&body=Here is the info you requested%0A"
                + "Company : " + escape(document.getElementById('company').value) + "%0A" + "%0A"
                + "manager : " + escape(document.getElementById('manager').value) + "%0A" + "%0A"
                + "mailGroup : " + escape(document.getElementById('mailGroup').value) + "%0A" + "%0A"
                + "Description : " + escape(document.getElementById('textArea').value) + "%0A" + "%0A"
                + "members : " + escape(document.getElementById('members').value) + "%0A" + "%0A"
                ;
            window.location.href = link
        }


// function fillForm(){
//   for(var i=0; 1<=document.querySelectorAll("id"); i++){
//     //loop through ids
//     //get id names
//     //add id names to getElementById
//     var doc= [i]+escape(document.getElementById([i]).value)+"%0A"+ "%0A"+
//   }
//   return doc
// }
