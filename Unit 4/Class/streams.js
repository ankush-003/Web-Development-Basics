// Streams
var fs = require('fs');

// read stream
var data1 = '';
var readStream = fs.createReadStream('info.txt');
readStream.setEncoding('UTF8');
readStream.on('data', function(chunk) {
    data1 += chunk;
});
readStream.on('end', function() {
    console.log(data1);
});
readStream.on('error', (err) => {
    console.error(err);
});

// write stream
var data2 = 'Hello World';
var writeStream = fs.createWriteStream('write.txt');
writeStream.write(data2, 'UTF8');
writeStream.end();
writeStream.on('finish', function() {
    console.log('Write completed');
});
writeStream.on('error', function(err) {
    console.error(err);
});
