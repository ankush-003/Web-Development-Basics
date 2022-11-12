var http = require('http');
var MongoClient = require('mongodb').MongoClient;
var mongoUrl = "mongodb://localhost:27017";

http.createServer(function(req, res) {
    console.log("The request type is: " + req.method);
    if(req.method == "GET") {
        // let company = req.body;
        MongoClient.connect(mongoUrl, function(err, db) {
            if (err) throw err;
            var citydb = db.db("Bangalore_City");
            citydb.collection("Companies").find({}).toArray(function(err, result) {
                if (err) throw err;
                console.log(result);
                res.writeHead(200, { 'Content-Type': 'application/json' });
                //write the content of the file to response body
                res.write(JSON.stringify(result));
                db.close();
                res.end();
            });
        });
    }
    else { // method is POST
        // console.log(req.body);
        req.on('data', function(data) {
            console.log("The data is: " + data);
            company = JSON.parse(data);
        });
        req.on('end', function() {
            try {
                MongoClient.connect(mongoUrl, function(err, db) {
                    if (err) throw err;
                    var citydb = db.db("Bangalore_City");
                    citydb.collection("Companies").insertOne(company, function(err, response) {
                        if (err) throw err;
                        console.log("1 document inserted");
                        db.close();
                        res.end("Data inserted:\n" + company);
                        // res.end("\nMessage: " + JSON.stringify(response));
                    });
                });
            } catch (error) {
                res.end("Error: " + error);
            }
        });
    }
}).listen(8081, function() {
    console.log("Server is listening on port 8081");
});
