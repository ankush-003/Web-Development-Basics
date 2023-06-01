var fs = require("fs");

fs.open("./output.txt","w+",function(err,res) {
    if(err) throw err;
    var fileBuffer = Buffer.alloc(1024);
    // fs.read (fd, buffer, offset, length, position, callback)
    fs.read(res,fileBuffer,0,fileBuffer.length,0,function(err,data) {
        if(err) throw err;
        console.log(data);
        console.log(fileBuffer.length);
        console.log(fileBuffer.toString());
    }
);})