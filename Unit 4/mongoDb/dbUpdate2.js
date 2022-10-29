var MongoClient = require('../Class/node_modules/mongodb').MongoClient;
var url = "mongodb+srv://Ankush:Ankush@learning.id5ibpg.mongodb.net/?retryWrites=true&w=majority";

// syntax for updateMany: db.collection.updateMany(query, newvalues, callback)

MongoClient.connect(url,function(err,db) {
    if(err) throw err;
    var mydb = db.db("Learning");
    myquery = {name:/^C/i};// starts with C (case insensitive)
    newvalues = {$set:{name:"Chucky Cheese"}};
    mydb.collection("customers").updateMany(myquery,newvalues,function(err,res) {
        if(err) throw err;
        console.log(res);
        db.close();
    });
});