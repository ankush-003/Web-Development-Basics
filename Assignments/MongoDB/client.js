var http = require('http');
var fetch = require('node-fetch');
var url = require('url');

// gettting the data from the server 
fetch('http://localhost:8081/api', {
    method: 'GET',
})
.then(res => res.json())
.then(res => {console.log("Response received on GET\n")
console.table(res)});

// posting the data to the server
fetch('http://localhost:8081/api', {
    method: 'POST',
    body: JSON.stringify([{
        "compName": "IBM",
        "compRank": 2,
        "compWebsite": "www.ibm.com",
        "compAddress": "Nagavara, Bangalore"},
        {
        "compName": "Infosys",
        "compRank": 3,
        "compWebsite": "www.infosys.com",
        "compAddress": "Bangalore",
        }]),
    headers: { 'Content-Type': 'application/json' },
})
.then(res => {console.log("\nResponse Received on POST:\n")
console.log(res);});