var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("newdb");
    var myobj = [
        { name: "RV", address: "Highway 37" },
        { name: "Bengaluru", address: "Lowstreet 4"},
        { name: "Mumbai", address: "Apple st 652"},
        { name: "Delhi", address: "Mountain 21"},
        { name: "Kolkata", address: "Valley 345"},
        { name: "Chennai", address: "Ocean blvd 2"},
    ];
    dbo.collection("customers").insertMany(myobj, function(err, res) {
        if (err) throw err;
        console.log(res.insertedCount + " document inserted");
        db.close();
    });
});