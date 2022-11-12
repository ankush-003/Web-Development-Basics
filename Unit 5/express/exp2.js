var express = require('express');
var app = express();
var path = require('path');
// middleware - a function that has access to the request and response objects
// next is a callback function that is called when the middleware is done
// app.use() is used to use middleware

app.use(function(req, res, next) {
    console.log("Method: %s Page: %s",req.method,req.url);// this will be printed on the console
    next();// this is used to call the next middleware
});

app.get('/', function (req, res,next) {
    // res.send('<div style="color:orange"><h1>Hello World!</h1><a href="/contact"><button>Contact Me!</button></a>&nbsp<a href="/about"><button>About Me!</button></a></div>');// sending in response
    // next();
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/about', function (req, res,next) {
    res.send('<div style="color:orange"><h1>About Me</h1><a href="/"><button>Home</button></a></div>');// sending in response
    // next();
});

app.get('/contact', function (req, res,next) {
    res.send('<p>Contact me at <a href="mailto:aryavinayak2003@gmail.com">Email</a></p>');
    // next();
});

app.listen(8080,function() {
    console.log('Server is running on port 8080');
});