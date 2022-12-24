const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Welcome To Student Portal" + "<br>" + "head over to <a href='/student'>/student</a>");
});

app.get("/student/:id", function(req, res, next) {
    const id = req.params.id;
    if(id.length > 5) {
        res.status(400).send("Id is too long");
        next(new Error("Id is too long"));
    } else {
        res.send(`Welcome to the student page, ${id}`);
        next();
    }
});

app.use('/student/:id',function(err,req,res,next) {
    // this line will be executed if there is an error
    console.log("In student error handler");
    console.error(err);
    // res.send(err.message);
})

app.use(function(req,res,next) {
    console.log("In Middleware");
})

app.listen(3000, function() {
    console.log("Server is running on port 3000");
});

