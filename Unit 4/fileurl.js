var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function(req,res) {
    console.log(req.url);
    var fileUrl = '.' + url.parse(req.url,true).pathname;
    fs.readFile(fileUrl, function(err,data) {
        if (err) {
            res.writeHead(404,{"Content-Type":"text/html"});
            return res.end("<h1>404 Not Found</h1>");
        }
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write(data);
        return res.end();
    });
}).listen(8000,console.log("Server running on port 8000"));
