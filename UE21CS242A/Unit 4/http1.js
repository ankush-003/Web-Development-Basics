var http = require('http');

/*http.createServer(function(req, res) {
    res.write("Hello World!");
    res.end();
}).listen(8000);*/

http.createServer(function(req, res) {
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write("<h1>Hello World!</h1>");
    res.write('<span style="font-wight:bold;color:red">Trying out some HTML</span>');
    res.end();
}).listen(8000,console.log("Server running on port 8000"));