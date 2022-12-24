// http module ccreating a web server
var url = require('url');
var http = require('http');
var fs = require('fs');
var MongoClient = require('mongodb').MongoClient;
//create a server
http.createServer(function (request, response) {
//parse the request containing the filename
var pathname = url.parse(request.url).pathname;
//print the name of the file for which request is made
console.log("Request for" + pathname + "Received.");
if (request.method == "GET") {
//Read the requested file content from filesystem
// fs.readFile(pathname.substr(1), function (err, data) {
// if (err) {
//
console.log(err);
//
//HTTP Status 404 not found
//
response.writeHead(404, { 'Content-Type': 'text/html' });
// }
// else {
//
//page found and status of 200 has to be returned//response.writeHead(200, { 'Content-Type': 'text/html' });
//
//
//
//
////write the content of the file to response body
response.write(data.toString());
}
//send the responseBody
response.end();
// });
//Read from the mongodb
console.log('executing mongo');
MongoClient.connect("mongodb://localhost:27017", {
useUnifiedTopology:
true
}, function (err, client) {
console.log("Connected successfully to server");
const db = client.db("pes");
db.collection("student").find({}).toArray(function (err, docs) {
response.writeHead(200, { 'Content-Type': 'application/json' });
//write the content of the file to response body
response.write(JSON.stringify(docs));
client.close();
response.end();
});
});
}
else {
let body = [];
request.on('data', (chunk) => {
body.push(chunk);
}).on('end', () => {
body = Buffer.concat(body).toString();
// at this point, `body` has the entire request body stored in it as a string
});
// write to file
// fs.writeFile(pathname.substr(1), body, (err, res) => {
// response.writeHead(200, { 'Content-Type': 'application/json' });
// response.end();
// });//write to mongodb
console.log('executing mongo');
MongoClient.connect("mongodb://localhost:27017", {
useUnifiedTopology:
true
}, function (err, client) {
console.log("Connected successfully to server");
const db = client.db("pes");
db.collection("student").insertOne(JSON.parse(body)).then(r => {
response.writeHead(200, { 'Content-Type': 'application/json' });
//write the content of the file to response body
client.close();
response.end();
})
});
}
}).listen(8081);
console.log('server running at the link http://localhost/8081');