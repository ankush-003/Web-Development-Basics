var MongoClient = require('../Class/node_modules/mongodb').MongoClient;
var url = "mongodb+srv://Ankush:Ankush@learning.id5ibpg.mongodb.net/?retryWrites=true&w=majority";

MongoClient.connect(url,function(err,db) {
    if (err) throw err;
    var mydb = db.db("Learning");
    var myobj = [
        { _id: 154, name: 'Chocolate Heaven'},
        { _id: 155, name: 'Tasty Lemon'},
        { _id: 156, name: 'Vanilla Dream'}
    ];
    mydb.collection("products").insertMany(myobj, function(err, res) {
        if (err) throw err;
        console.log(res);
        db.close();
    });
}); 