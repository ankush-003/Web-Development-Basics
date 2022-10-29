var MongoClient = require('../Class/node_modules/mongodb').MongoClient;
var url = "mongodb+srv://Ankush:Ankush@learning.id5ibpg.mongodb.net/?retryWrites=true&w=majority";

// sntax of find: db.collection.find(query, projection)
// query: an optional query that specifies the selection filter using query operators.
// projection: an optional projection that specifies the fields to return using projection operators.
MongoClient.connect(url,function(err,db) {
    if(err) throw err;
    var mydb = db.db("Learning");
    var findReturn = mydb.collection("customers").find({});
    // console.log(findReturn);
    findReturn.toArray(function(err,result) {
        if(err) throw err;
        console.log(result);
        db.close();
    });    
    // db.close(); -> gives error
});