var mysql =require('mysql');
var con= mysql.createConnection({
  host: "localhost",
  user: "dylanb",
  password:"HelloWorld?"
});
process.on('uncaughtException', function (err) {
    console.log(err);
}); 
con.connect(function(err){
  if(err){
    console.log(err);
  }
  console.log("Connected");
});
