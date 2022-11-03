var url= require('url');
var http=require('http');
var fs=require('fs');
http.createServer( function(request, response){
    response.writeHead(200,{'Content-type':'text/plain'});
   // response.write('Welcome to my domain!!!');
    response.end("Welcome to web server");
}).listen(8080);
console.log("Server is up and running on http://localhost:8080");