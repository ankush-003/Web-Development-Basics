var express = require('express');
var app = express();

app.get('/hello/:id([0-9]{5})',(req,res) => {
    const id = req.params.id;
    res.send({user: id,
              message: 'Hello ' + id});
});

app.get('*', (req,res) => {
    res.send({message: 'Invalid URL'});
}) // this is a catch all route

app.listen(3000, function() {
    console.log('Server listening on port 3000');
});