const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// parsing the body of the request (default content-type: application/json)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// view engine setup
app.set('view engine','pug');
app.set('views','./views');

// used to serve static files
app.get('/',function(req,res) {
    res.render('form');
})

app.post('/',function(req,res) {
    // console.log(req.body);
    console.table(req.body);
    res.send("Request received");
})

app.listen(3000, () => console.log('Server is running on port 3000'));