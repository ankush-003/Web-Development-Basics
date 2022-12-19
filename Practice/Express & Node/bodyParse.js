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

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));// to convert the data into json format

app.post('/',function(req,res) {
    console.log(typeof(req.body));
    console.log(req.body);
    // res.send('Data received');
    let data = {
        name: req.body.fname + ' ' + req.body.lname,
        email: req.body.email,
        password: req.body.password
    }
    res.send(req.body);
});

app.listen(8080,function() {
    console.log('Server is running on port 8080');
});