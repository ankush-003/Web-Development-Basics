// npm install body-parser
// npm install -save pug

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.get('/',function(req,res) {
    res.render('form');
})

app.set('view engine','pug');// type of template engine
app.set('views','./views');