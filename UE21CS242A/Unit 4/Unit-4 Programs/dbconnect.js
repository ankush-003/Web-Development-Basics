//Connecting Database (Save the file using .js extention)

var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://127.0.0.1:27017/mydb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  
  console.log("Database created!");
  
  db.close();
}); 



// create collection--------------------------------------------------------------

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  
  var dbo = db.db("newdb");
  
  dbo.createCollection("customers", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});




// Insert One element--------------------------------------------------------------

 var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  
  var dbo = db.db("mydb");
  
  var myobj = { name: "PES Ins.", address: "RR nagar" };
  
  dbo.collection("customers").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});




// Insert Multiple elements--------------------------------------------------------------

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  
  var dbo = db.db("mydb");
  
  var myobj = [
    { name: 'Mysuru', address: 'Highway 71'},
    { name: 'Bengaluru', address: 'Lowstreet 4'},
    { name: 'Delhi', address: 'Apple st 652'},
    { name: 'Kodagu', address: 'Mountain 21'}
  ];
  
  dbo.collection("customers").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
});





//----------------------------------------------------------------

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  
  dbo.collection("customers").findOne({}, function(err, result) {
    if (err) throw err;
    console.log(result.address);
	
    db.close();
  });
});





//-------------------------------------------------------------------

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  
  dbo.collection("customers").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
	
    db.close();
  });
}); 




// Find some-----------------------------------------------------------


var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection("customers").find({}, { projection: { _id: 0, name: 1, address: 1 } }).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});




// Update --------------------------------------------------------------

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  
  var myquery = { address: "RR nagar" };
  var newvalues = { $set: { name: "PES", address: "EC Campus" } };
  
  dbo.collection("customers").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
	
    db.close();
  });
});




// Update some field------------------------------------------------

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  
  var myquery = { address: "EC Campus" };
  var newvalues = {$set: {address: "RR Campus"} };
  dbo.collection("customers").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
	
    db.close();
  });
});




// Delete ------------------------------------------------------------

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  
  var myquery = { name: 'Delhi' };
  dbo.collection("customers").deleteOne(myquery, function(err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
	
    db.close();
  });
});





//--------------------------------------------------------------------

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  
  /*Delete all customers where the address starts with an "O":*/
  var myquery = { address: /^O/ };
  dbo.collection("customers").deleteMany(myquery, function(err, obj) {
    if (err) throw err;
    console.log("document(s) deleted");
	
    db.close();
  });
});
