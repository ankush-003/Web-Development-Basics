var fs = require('fs');

var readableStream = fs.createReadStream("input.txt");
var data = '';
readableStream.setEncoding('UTF8');
readableStream.on('data', function(chunk) {
    console.log("writing data");
    data += chunk;
});
readableStream.on('end', function() {
    console.log("writing ended");
    console.log(data);
});

// writing to streams

var readStream = fs.createReadStream("input.txt");
var writeStream = fs.createWriteStream("output.txt");
readStream.setEncoding('UTF8');
readStream.on('data', function(chunk) {
    writeStream.write(chunk);
});
readStream.on('end', function() {
    console.log("writing ended");
});