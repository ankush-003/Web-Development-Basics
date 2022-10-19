var url = require('url');
var http = require('http');

http.createServer(function(req, res) {
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write("<h1>" + req.url + "</h1>");
    res.end();
}).listen(8000,console.log("Server running on port 8000"));