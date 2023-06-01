var http = require('http');

http.createServer(function(require,response) {
    response.write("Hello World!");
    response.end();
}).listen(8080)