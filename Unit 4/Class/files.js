var fs = require('fs');

// Reading from the file

fs.readFile("./info.txt",function(err,data) {
    if(err) {
        return console.error(err); // throw err;
    }
    console.log(data);// displays buffer
    console.log(data.toString());
})

// Writing to file

fs.writeFile("./sample.txt","PESU",function(err) {
    if(err) {
        return console.error(err);
    }
    console.log("data written");
})

// appending to a file
fs.appendFile("./sample.txt","Appending 69",function(err) {
    if(err) {
        return console.error(err);
    }
    console.log("data written");
})

// unlink a file
// fs.unlink("sample.txt",function() {
//     console.log("Unlink is Complete!");
// })