var express = require('express');
var app = express();
var router = express.Router();

router.get("/",function(req,res) {
    res.send("<h1>Welcome to the home page!</h1><a href='/hello'><button>Hello</button></a>");
});

router.get("/hello",function(req,res) {
    res.send("<h1>Hello There!</h1>");
});

router.get("/hello/:id",function(req,res) {
    var id = req.params.id;
    res.send("<h1>Hello " + id + "</h1>");
});

router.get("/:id/:msg",function(req,res) {
    var id = req.params.id;
    var msg = req.params.msg;
    res.send("<h1>Id: " + id + " Msg: " + msg + "</h1>");
})

app.use(router);// app.use("/",router) also works

app.listen(3000,function() {
    console.log("Server listening on port 3000");
});