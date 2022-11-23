var express = require('express');
var app = express();

app.get('/hello/:id',function(req,res) {
    const id = req.params.id;
    res.send('<h1>Hello ' + id + '</h1>');
    // res.send('Hello World!');
})

app.listen(3000, function() {
    console.log('Server listening on port 3000');
});