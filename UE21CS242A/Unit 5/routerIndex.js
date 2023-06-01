var express = require('express');
var app = express();
var router = require('./routing2.js');

app.use('/',function(req,res,next) {
    console.log('Time: ', Date.now().toLocaleString("en-US", {timeZone: "Asia/Kolkata"}));
    next();
});

app.use(router);

app.listen(3000,function() {
    console.log('Server listening on port 3000');
});