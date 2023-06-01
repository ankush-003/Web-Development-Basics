// run npm install mongodb --save
var mongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

mongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var citydb = db.db("Bangalore_City");
    // console.log("Database created!");
    // citydb.createCollection("Companies", function(err, res) {
    //     if (err) throw err;
    //     console.log("Collection created!");
    //     db.close();
    // });
    let companies = [
        {compName: "Apple", compRank: 1, compWebsite: "www.apple.com", compAddress:"UB City, Bangalore",},
    ]
    citydb.collection("Companies").insertMany(companies, function(err, res) {
        if (err) throw err;
        console.log(res.acknowledged)
        console.log(res.insertedCount + "Documnets inserted!");
        db.close();
    });
    // db.close();
});