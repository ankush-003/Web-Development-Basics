var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";
//var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("dbnew");
  
  var myquery = { address: "RR nagar" };
  var newvalues = { $set: { name: "PES", address: "EC Campus" } };
  
  dbo.collection("customers").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
	
    db.close();
  });
});
