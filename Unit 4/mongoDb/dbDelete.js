var MongoClient = require('../Class/node_modules/mongodb').MongoClient;
var url = "mongodb+srv://Ankush:Ankush@learning.id5ibpg.mongodb.net/?retryWrites=true&w=majority";

// syntax for deleteMany: db.collection.deleteMany(query, callback)
MongoClient.connect(url,function(err,db) {
    if(err) throw err;
    var mydb = db.db("Learning");
    myquery = {name:/^B/i};// starts with B case insensitive
    mydb.collection("customers").deleteMany(myquery,function(err,res) {
        if(err) throw err;
        console.log(res);
        db.close();
    });
});