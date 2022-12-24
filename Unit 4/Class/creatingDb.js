var mongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

mongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("newdb");
    var myobj = { name: "PES Ins.", address: "RR Nagar" };
    dbo.collection("customers").insertOne(myobj, function(err, res) {
        if (err) throw err;
        console.log(myobj.name + "inserted");
        db.close();
    });
});