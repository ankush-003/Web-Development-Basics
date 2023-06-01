var MongoClient = require('../Class/node_modules/mongodb').MongoClient;
var url = "mongodb+srv://Ankush:Ankush@learning.id5ibpg.mongodb.net/?retryWrites=true&w=majority";

// sntax of find: db.collection.find(query, projection)
MongoClient.connect(url,function(err,db) {
    if(err) throw err;
    var mydb = db.db("Learning");
    mydb.collection("customers").find({name:'Company Inc'}).toArray(function(err,result) {
        if(err) throw err;
        console.log("First Search Result:");
        console.log(result[0]);
    });
    mydb.collection("customers").find({},{projection:{_id:0,name:1,address:1}}).toArray(function(err,result) {
        if(err) throw err;
        // console.log(result);
        console.log("\nSecond Search Result:");
        result.forEach((element) =>
            console.log(element.name + " lives in " + element.address));
        db.close();
    });
});