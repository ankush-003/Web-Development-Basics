// https://www.mongodb.com/cloud/atlas
var MongoClient = require('../Class/node_modules/mongodb').MongoClient;
var url = "mongodb+srv://Ankush:Ankush@learning.id5ibpg.mongodb.net/?retryWrites=true&w=majority";
MongoClient.connect(url,function(err,db) {
    if(err) throw err;
    console.log("Database created");
    db.close();
});