var http = require('http');
var myModule = require('./myModule')

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("Current Date and Time: " + myModule.dateTime().toLocaleDateString())
  res.end('Hello World!');
}).listen(8080); 

// Go to: http://localhost:8080