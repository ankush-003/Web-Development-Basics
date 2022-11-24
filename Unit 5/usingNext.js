/* The order of middleware loading is important: middleware functions that are loaded first are also executed first.

 If myLogger is loaded after the route to the root path, the request never reaches it and the app doesn’t print “LOGGED”, because the route handler of the root path terminates the request-response cycle. */

const express = require('express')
const app = express()

const myLogger = function (req, res, next) {
  console.log('LOGGED')
  next()
}

app.use(myLogger)

app.get('/', (req, res, next) => {
  res.send('Hello World!')
//   next(); // -> will make the next middleware function run
})

app.use(myLogger)// -> doesnt work if placed after app.get 

app.listen(3000,(err) => {
    if(err) {
        console.log(err);
    }
    console.log('Server listening on port 3000');
});