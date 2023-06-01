// use node-fetch @ 2.6.7
var fetch = require('node-fetch');
var url = 'http://localhost:3000/hello/ankush';

fetch(url)
    .then(res => res.json())
    .then(data => console.log(data));