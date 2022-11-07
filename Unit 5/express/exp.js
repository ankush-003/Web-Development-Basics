var express = require('express');
var app = express();

// parameters of app.get() are: path, callback

app.get('/hello', function (req, res) {
    res.send('<h1>Hello World!</h1>');
});

app.listen(8080,function() {
    console.log('Server is running on port 8080');
})

// to start the server run: node exp.js