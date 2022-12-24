const express = require('express')
const app = express()

const requestTime = function (req, res, next) {
  req.requestTime = Date.now()
  next()
}

app.use(requestTime)

app.get('/', (req, res, next) => {
  let responseText = 'Hello World!<br>'
  responseText += `<small>Requested at: ${req.requestTime}</small>`
  res.send(responseText)
  next() // this is not required
})

app.use(() => console.log("End of middleware stack"))

app.listen(3000,() => console.log('Server listening on port 3000'))
