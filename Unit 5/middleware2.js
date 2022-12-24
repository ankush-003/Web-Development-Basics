const express = require('express');
const app = express();

// here order matters
app.use((req,res,next)=> {
    console.log("In middleware 1");
    console.log("%s %s",req.method,req.url);
    next();
});

app.get('/', (req, res) => {
    res.json("Welcome To Our Website")
});

app.use((req,res,next)=> {
    console.log("In middleware 2");
    // console.log("%s %s",req.method,req.url);
    console.log("Stop");
    next();
});

app.listen(3000, function() {
    console.log("Server is running on port 3000");
});