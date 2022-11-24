const express = require('express');
const app = express();

app.use((req,res,next)=> {
    console.log(req.headers);
    console.table(req.query);
    console.table(req.params);
    console.table(req.body);
    console.log("In Middleware: %s %s",req.method,req.url);
    next(); // if not given, the request will be stuck here, keeps on loading
})

app.get('/', (req, res) => {
    res.json("Welcome To Our Website")
});

app.get("/student",(req,res) => {
    res.json("Welcome to the student page");
});

app.listen(3000, function() {
    console.log("Server is running on port 3000");
});