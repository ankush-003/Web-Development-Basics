var http=require('http');
var url=require('url')
var fs=require('fs');
var qs=require('querystring')
var MongoClient= require('mongodb').MongoClient;
http.createServer(function(request,response){
    if(request.method=='GET'){
        var myurl=url.parse(request.url);
        //var query=myurl.query;
        //var qobj=qs.parse(query);
        var url1='mongodb://localhost:27017'
        MongoClient.connect(url1, function(err,client){
            if(err)throw err;
            const db=client.db('newdb');
           // db.collection('student').find(qobj).toArray(
            db.collection('student').findOne({},
                function(err,docs){
                    if(err) throw err;
                    response.writeHead(200,{'Content-type':'application/json'});
                    response.write(JSON.stringify(docs));
                    client.close();
                    response.end();                     
                })
        })
    }   
}).listen(8080);
console.log("Server is up and running");