const express = require('express');
const app = express();
const path = require('path');
// adds a middleware function to the stack
// this adds Data to the path 
app.use((req,res, next)=>{
    console.log(req.path);
    console.log(req.url);
    next();
},express.static(path.join(__dirname, 'Data')));

app.get('/', (req, res) => {
    console.log(req.path);
    res.send("<h1>Welcome To Student Portal</h1>" + "<a href='/client1.js' download><button>Client File</button></a>" + "<a href='/package.json'  download><button>Package.json</button></a>");
});

app.listen(3000, function() {
    console.log("Server is running on port 3000");
});