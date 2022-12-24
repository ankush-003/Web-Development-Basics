var MongoClient = require('../Class/node_modules/mongodb').MongoClient;
var url = "mongodb+srv://Ankush:Ankush@learning.id5ibpg.mongodb.net/?retryWrites=true&w=majority";

// syntax for update: db.collection.updateOne(query, newvalues, callback)

MongoClient.connect(url,function(err,db) {
    if(err) throw err;
    var mydb = db.db("Learning");
    myquery = {name:"Michael"};
    newvalues = {$set:{name:"Michaelangelo"}};
    mydb.collection("customers").updateOne(myquery,newvalues,function(err,result) {
        if(err) throw err;
        console.log("1 document updated");
        console.log(result);
        db.close();
    });
});