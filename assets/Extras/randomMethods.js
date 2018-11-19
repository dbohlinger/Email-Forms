// Jquery Method
// var inputs = document.getElementsByName('fields');
// function lol(){
//  for(var i=0; i<=inputs.length; i++){
//    console.log(i);
//  }
// }

// javascript get method
////// WORKS!!!! !

 // function fieldLoops(){
 //   for(var i=0; i<fun.length; i++) {
 //      console.log(fun[i].value);
 //     }
 // }
//////// Array Method THis actaullly works!!!!!!

///////////
// function valueGetter() {
//   for(var i=0; i< fun.length; i++){
//     var valueSe =+ fun[i];
//   }
//   return valueSe.value
// }

//array methods
// var arr= [];
// var fun= document.getElementsByClassName('fieldz');
// function fieldLoop(){
//   for (var i = 0; i <= fun.length; i++) {
//      var why= arr.push(fun[i].value);
//   }
//   console.log(why);
// }
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

//  function newHawb(form){
//   var elem=document.getElementsByClassName('fieldz');
//   for (var i = 0; i < elem.length; i++) {
//       console.log((elem+i).value);
//   }
//  }
//
// // getElementById
//
// var lolz= document.getElementById('field')
// function hello(){
//   for (var i = 0; i <= lolz.length; i++) {
//     lolz[i]
//   }
//   console.log(lolz);
// }
// function water(){
//   for(var i=0; i<lolz.length; i++){
//     var fieldValue=fun[i].value
//     console.log(fieldValue);
//   }
// }
//Returns Duplicate Hitcodes
 function duplicate(){
 //   //loop through array
 //   //find duplicate values
 //   //if duplicate values exist
 //   //print out in email
    var dups=[];
    for(var i=0;i<=arr.length; i++){
      var el = arr[Math.abs(arr[i])];
      if(el>0){
        arr[Math.abs(arr[i])]= -arr[Math.abs(arr[i])];
      }
  else if(el === 0){
    arr[Math.abs(arr[i])] = -arr.length;
  }
  else{ if(Math.abs(arr[i]) === arr.length) { dups.push(0); }
  else { dups.push(Math.abs(arr[i]))};
   }
 }

return dups;
 }
