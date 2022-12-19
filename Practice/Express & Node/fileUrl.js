var http = require('http');
var url = require('url');
var fs = require('fs');

var server = http.createServer(function(req, res) {
    // url.parse(req.url,true) returns an object with the following properties:
    var path = "." + url.parse(req.url,true).pathname
    // console.table(req);
    fs.readFile(path,function(err,data) {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("404 Not Found");
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    })
});

server.listen(8080,(err) => {
    if (err) {
        console.log(err);
    }
    console.log("Server is listening on port 8080");
});