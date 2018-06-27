

var radio= document.getElementsByClassName("btn")

function sendMail() {
   var link = "mailto:jward@lynden.com"
                + "?cc=jward@Lynden.com"
                + "&subject=" + escape("New Mail Group Request")
                + "&body=Here is the info you requested%0A"
                + "Customer Name : " + escape(document.getElementById('customerName').value) + "%0A" + "%0A"
                + "customerEmail : " + escape(document.getElementById('customerEmail').value) + "%0A" + "%0A"
                + "Field : " + escape(document.getElementsByClassName('fieldz').value) + "%0A" + "%0A"
                + "Appended Field2 : " + escape(document.getElementById('field2').value) + "%0A" + "%0A"
                + "Shipper : " + escape(document.getElementById('shipper').value) + "%0A" + "%0A"
                + "consignee : " + escape(document.getElementById('consignee').value) + "%0A" + "%0A"
                + "billTo : " + escape(document.getElementById('billTo').value) + "%0A" + "%0A"
                + "neh : " + escape(document.getElementById('neh').value) + "%0A" + "%0A"
                + "mailCodes : " + escape(document.getElementById('mailCodes').value) + "%0A" + "%0A"
                + "ACN : " + escape(document.getElementById('ACN').value) + "%0A" + "%0A"
                + "alt : " + escape(document.getElementById('alt').value) + "%0A" + "%0A"
                ;
            window.location.href = link
        }


// Jquery Method
// var inputs = document.getElementsByName('fields');
// function lol(){
//  for(var i=0; i<=inputs.length; i++){
//    console.log(i);
//  }
// }

// javascript get method
// var fun = document.getElementsByClassName("fieldz");
//  function fieldLoop(){
//    for(var i=0; i<=fun.length; i++) {
//       console.log([i]+" "+ fun);
//      }
//  }

//array methods
var arr= [];
var fun= document.getElementsByClassName('fieldz');
function fieldLoop(){
  for (var i = 0; i <= fun.length; i++) {
     var why= arr.push(fun[i]);
  }
  console.log(why);
}
//Internet Method

// function nums(){
//    var elem= document.getElementsByClassName(".fieldz").selectedOptions;
//    var arr=[].slice.call(elem);
//    var hawbs = arr.map(function(el){
//      return el.value;
//    }).join(',');
//    console.log(hawbs);
// }

// function newHawb(){
//   var elem=document.getElementById('field');
//   var arr=[];
//   for(var i=0; i<elem.length; i++)
//   {
//     arr.push(elem[i].value);
//   }
//   var hawbs = arr.join(',');
//   console.log(arr);
// }

 function newHawb(form){
  var elem=document.getElementsByClassName('fieldz');
  for (var i = 0; i < elem.length; i++) {
      console.log((elem+i).value);
  }
 }

// getElementById

var lolz= document.getElementById('field')
function hello(){
  for (var i = 0; i <= lolz.length; i++) {
    lolz[i]
  }
  console.log(lolz);
}
function water(){
  for(var i=0; i<lolz.length; i++){
    var fieldValue=fun[i].value
    console.log(fieldValue);
  }
}
