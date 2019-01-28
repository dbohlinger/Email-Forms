var ejs =require('ejs');
var express = require('express');
var app = express();
var bodyParser=require('body-parser')
var mariadb = require('mariadb');
var port=8080;
// var router =require('router');

//required Routes
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
// //Server
// mongoose.connect('mongodb://localhost/Email_Forms_V1');

// var pool =mariadb.createPool({
// host: 'mydb.com',
// user: 'myUser',
// password:"password1",
// connectionLimit: 5
//
// });

app.get('/', function(req, res){
  res.render("index");
});
app.get('/distributionList', function(req, res){
  res.send("HELLO");
});

app.get("/dist", function(req,res){
  res.render('dist');
});
// // pool.getConnection()
// // .then(conn => {
// //
// // }
//
// //
// // var connection = mysql.createConnection({
// //   host: 'localhost',
// //   user: 'me',
// //   password: 'secret',
// //   database: 'my_db'
// // });
//
// connection.connect();
//
// connection.query('SELECT 1+1 AS solution', function(error, results, fields){
// if(error) throw error;
// console.log('THe solution is', results[0].solution)
// });
//
// connection.end();
app.listen(port,() => console.log('app is running.'))
