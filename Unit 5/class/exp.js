var express = require('express');
var app = express();
var url = require('url');

// parameters of app.get() are: path, callback
// app.get() is a handler for GET requests

app.get('/', function (req, res) {
    res.send('<div style="color:orange"><h1>Hello World!</h1><a href="/contact"><button>Contact me!</button></a></div>');// sending in response
});

app.get('/contact', function (req, res) {
    res.send('<p>Contact me at <a href="/email/ankush">anshhv2003@gmail.com</a></p>');
});

app.get('/email/:name', function (req, res) {
    var name = req.params.name;
    res.send('<h3>Mail me <a href="mailto:anshhv2003@gmail.com"><button>'+ name +'</button></a></h3>');// template string is used here, syntax: ``
});

app.get("/:id/:name", function (req, res) {
    var id = req.params.id;
    var name = req.params.name;
    res.send('<h1>Id: ' + id + ' Name: ' + name + '</h1>');
});


app.listen(8080,function() {
    console.log('Server is running on port 8080');
})

// to start the server run: node exp.js