// run npm install mongodb --save
var mongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

mongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var citydb = db.db("Bangalore_City");
    console.log("Database created!");
    db.close();
});