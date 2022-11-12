var http = require('http');
var fetch = require('node-fetch');
var url = require('url');

fetch('http://localhost:8081/sample.json', {
    method: 'GET',
})
.then(res => res.json())
.then(res => {console.log("Response received on GET\n")
console.table(res)});

fetch('http://localhost:8081/sample.json', {
    method: 'POST',
    body: JSON.stringify({
        "compName": "IBM",
        "compRank": 2,
        "compWebsite": "www.ibm.com",
        "compAddress": "Nagavara, Bangalore"
      }),
    headers: { 'Content-Type': 'application/json' },
})
.then(res => {console.log("\nResponse Received on POST:\n")
console.log(res);});