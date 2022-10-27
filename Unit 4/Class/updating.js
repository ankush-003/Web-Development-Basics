var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

// UpdateOne syntax: 
// db.collection.updateOne(
//    <query>,
//    <update>,
//    {
//      upsert: <boolean>,
//      writeConcern: <document>,
//      collation: <document>,
//      arrayFilters: [ <filterdocument1>, ... ]
//    }

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("newdb");
    var myquery = { address: "Mountain 21" };
    var newvalues = { $set: {name: "Mickey", address: "Canyon 123" } };
    dbo.collection("customers").updateOne(myquery, newvalues, function(err, res) {
        if (err) throw err;
        console.log(res);
        db.close();
    });
});