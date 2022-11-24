const express = require('express');
const app = express();
const port = 3000;

app.get("/:id", function(req,res,next) {
    console.log("Request URL:", req.originalUrl);
    if(req.params.id == 'Ankush') {
        res.send(`Hello ${req.params.id}`);
        next();
    }
    else {
        let err = new Error("Wrong ID!");
        err.status = 400;
        next(err);
    }
})
// whenever we give err as a parameter to next() function, it will be treated as an error
// we have to give next also as a parameter if we give err as a parameter to middleware function
app.use(function(err, req, res, next) {
    console.log("inside error handler");
    if(err) {
        console.log("Error handler called!");
        console.error(err);
        res.status(err.status || 500);
        res.send(err.message);
    } else {
        res.status(200);
    }
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));