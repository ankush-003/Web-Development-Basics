var url = require('url');
var http = require('http');

http.createServer(function(req, res) {
    res.writeHead(200,{"Content-Type":"text/html"});
    var urlData = url.parse(req.url,true);
    res.write("<h1>" + urlData.host + "</h1>");
    res.write("<h1>" + urlData.pathname + "</h1>");
    res.write("<h1>" + urlData.search + "</h1>");
    var q = urlData.query;
    res.write("<h1>" + q.value + "</h1>");
    res.end();
}).listen(8000,console.log("Server running on port 8000"));