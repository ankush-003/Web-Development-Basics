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
        "compAddress": "Nagavara, Bangalore",
        "empCount": 10000,
        "cmpRevenue": 1000000000},
        {
            "compName": "TCS",
            "compRank": 3,
            "compWebsite": "www.tcs.com",
            "compAddress": "Nagavara, Bangalore",
            "empCount": 10000,
            "cmpRevenue": 1000000000
        },{
            "compName": "Wipro",
            "compRank": 4,
            "compWebsite": "www.wipro.com",
            "compAddress": "Nagavara, Bangalore",
            "empCount": 10000,
            "cmpRevenue": 1000000000
        },{
            "compName": "Accenture",
            "compRank": 5,
            "compWebsite": "www.accenture.com",
            "compAddress": "Nagavara, Bangalore",
            "empCount": 10000,
            "cmpRevenue": 1000000000
        }]),
    headers: { 'Content-Type': 'application/json' },
})
.then(res => {console.log("\nResponse Received on POST:\n")
console.log(res);});