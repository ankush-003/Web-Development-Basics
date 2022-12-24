var MongoClient = require('../Class/node_modules/mongodb').MongoClient;
var url = "mongodb+srv://Ankush:Ankush@learning.id5ibpg.mongodb.net/?retryWrites=true&w=majority";

MongoClient.connect(url,function(err,db) {
    if(err) throw err;
    var learning = db.db("Learning");
    var myobj = { name: "Company Inc", address: "Highway 37" };
    learning.collection("customers").insertOne(myobj,function(err,res) {
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
    })
})