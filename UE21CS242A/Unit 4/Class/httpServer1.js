var http = require('http');

http.createServer(function(req,res) {
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write("<b>Hello There</b>");
    res.end("<p>Ending Communication</p>");
}).listen(8080,(err)=>{
    if(err) console.log(err);
    else console.log("Server Started on Port 8080");
});

http.createServer(function(req,res) {
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(req.url);
    res.end();
}).listen(6969,()=>{
    console.log("Server Started on Port 6969");
});