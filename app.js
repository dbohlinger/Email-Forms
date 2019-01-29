//initial variables
var ejs         = require('ejs'),
    express     = require('express'),
    app         = express(),
    bodyParser  = require('body-parser'),
    mariadb     = require('mariadb'),
    port        = 8080,
    mongoose    = require('mongoose');


//required Routes
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
// //Server
var MongoClient = require('mongodb').MongoClient
, assert=require('assert');

var url = 'mongodb://localhost:27017/test_db1';

MongoClient.connect(url,{ useNewUrlParser: true }, function(err, db){
  assert.equal(null,err);
  console.log("connected successfully to server");
  db.close();

});
//Mongoose:
 mongoose.connect( 'mongodb://localhost:27017/test_db1',{ useNewUrlParser: true });
 var db = mongoose.connection;
 db.on('error', console.error.bind(console,"connection error"));
 db.once("open", function(){

 });
//Routes

app.get('/', function(req, res){
  res.render("index");
});
app.get('/distributionList', function(req, res){
  res.send("HELLO");
});

//CheckLogg Routes
 app.get('/checklog',function(req,res){
   res.render("checklog");
 });

//Create -add new Checklog to DB
app.post("/", function(req,res){
  var LAF_BILL      = req.body.LAF_BILL;
  var Check_DATE    = req.body.check_Date;
  var Check_Number  = req.body.Check_Number;
  var Recieved_From = req.body.Recieved_From;
  var Amount        = req.body.Amount;
  var Type_of_Funds = req.body.Type_of_Funds;

  var newChecklog   = {LAF_BILL: LAF_BILL, Check_Date: Check_DATE, Check_Number:Check_Number, Recieved_From: Recieved_From, Amount: Amount, Type_of_Funds: Type_of_Funds}
   Checklog.create(newChecklog, function(err, newlyCreated){
   if(err){
     console.log(err);
   }else{
     res.redirect("/checklog");
     console.log("checklog")
   }
 });
});
app.get("/dist", function(req,res){
  res.render('dist');
});

app.listen(port,() => console.log('app is running.'))
