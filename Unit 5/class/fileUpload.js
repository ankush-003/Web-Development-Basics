var express = require('express');
var app = express();
var fileupload = require('express-fileupload');

app.use((req, res, next) => {
    console.log('middleware');
    console.log(req.url + ' ' + req.method);
    next();
});

app.get("/",function(req,res) {
    res.sendFile(__dirname + '/upload.html');
})

app.use(fileupload());

app.post('/',function(req,res) {
    req.files ? console.log(req.files) : console.log('no files');
    var file = req.files.file;
    file.mv("./file1/"+file.name,function(err) {
        if(err) {
            console.log(err);
        }
        else {
            res.sendFile(__dirname + '/uploaded.html');
        }
    })
});

app.listen(8080,function() {
    console.log('Server is running on port 8080');
});