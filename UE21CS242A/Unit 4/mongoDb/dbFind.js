var MongoClient = require('../Class/node_modules/mongodb').MongoClient;
var url = "mongodb+srv://Ankush:Ankush@learning.id5ibpg.mongodb.net/?retryWrites=true&w=majority";

MongoClient.connect(url,function(err,db) {
    if(err) throw err;
    var dbo = db.db("Learning");
    dbo.collection("customers").findOne({},function(err,result) {
        if(err)throw err;
        console.log(result);
        db.close();
    });
});