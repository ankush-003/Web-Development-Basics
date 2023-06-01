var http=require('http');
var fetch=require('node-fetch')
fetch('http://localhost:8080')
.then((res)=>res.text())
.then((text)=>console.log(text))
