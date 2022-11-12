// error handling using middleware

var express = require("express")
var app = express();
var url = require("url");

app.get("/:id",function(req,res,next) {
    if(req.params.id == 100) {
        res.send("<h1>Hello User 100, No Error!</h1>"); // localhost:3000/100
    }
    else {
        var err = new Error("Full of errors"); //we can use without app.use(...)
        next(err);
    }
})
// err and next in middleware function
// app.use(function(err,req,res,next) {
//     // let message = url.parse(req.url).query.msg;
//     // console.log(url.parse(req.url).query);
//     res.status(500)// otherwise gives 200 even on error
//     res.send("<h1>Full of Errors</h1><p>Error status" + err + "</p>"); // localhost:3000/something
// })

app.listen(8080,()=>console.log("Server Running at 8080"))