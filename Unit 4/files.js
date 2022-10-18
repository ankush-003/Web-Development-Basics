const fs =  require('fs');
fs.readFile("./input.txt","utf-8",(err,data)=>{
    // if(err) throw err;
    if(err) {
        console.log(err);
        return;
    }
    console.log(data);
})

// writing to files
fs.writeFile("./output1.txt","Hello World",(err)=>{
    if(err) throw err;
    console.log("File written successfully");
});

// appending to files
fs.appendFile("./output2.txt","Appending Hello World",(err)=>{
    if(err) throw err;
    console.log("File written successfully");
});

// deleting files
fs.unlink("./output2.txt",(err)=>{
    if(err) throw err;
    console.log("File deleted successfully");
});