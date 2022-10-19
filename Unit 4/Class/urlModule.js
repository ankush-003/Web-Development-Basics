// URL -> Parse -> Query (to convert it into an object)
var http = require('http');
var url = require('url');

// url.parse syntax: url.parse(urlString, [parseQueryString], [slashesDenoteHost])
// 
http.createServer(function(req,res) {
    res.writeHead(200,{'Content-Type':'text/html'});
    var q = url.parse(req.url,true).query;
    var txt = q.year + " " + q.month;
    res.end(txt);
}).listen(8080);

// http://localhost:8080/?year=2017&month=July