var mongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";
mongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");

  // UpdateOne and UpdateMany
  var query = { address: "Highway 37" };
  var newvalues = { $set: { name: "John", address: "Grand Lane" } };
  dbo.collection("customers").updateOne(query, newvalues, function (err, res) {
    if (err) throw err;
    console.log("1 document updated");
    db.close();
  });
});

// 1) Create a collection named "people":

// dbo.createCollection("people", function (err, res) {
//   if (err) throw err;
//   console.log("Collection created!");
//   db.close();
// });

// 2) Insert ONE

// dbo.collection("customers").insertOne(myobj, function (err, res) {
//   if (err) throw err;
//   console.log("1 document inserted");
//   db.close();
// });

// 3) Insert MANY

// var myobj = { name: "Company Inc", address: "Highway 37" };
// var myMultipleObj = [
//   { name: "Company Inc", address: "Highway 37" },
//   { name: "Company2 Inc", address: "Highway 38" },
//   { name: "Company3 Inc", address: "Highway 39" },
// ];
// dbo.collection("customers").insertMany(myMultipleObj, function (err, res) {
//   if (err) throw err;
//   console.log("Number of documents inserted: " + res.insertedCount);
//   db.close();
// });
