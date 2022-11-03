// Opening  a File
/*var fs= require('fs')
console.log("Going to open file");
fs.open('test1.txt', 'r+',function(err,data){
    if(err){
        return console.error(err);
    }
    console.log(data);
    console.log("file Opened Sucessfully")
}) */

// Reading from the file
/*var fs=require('fs')
fs.readFile('test1.txt', function(err,data){
    if(err) throw err;
    console.log(data.toString());
})
console.log("Reading the contents of the file")
*/

/*
var fs=require('fs')
var data=fs.readFileSync('test1.txt','utf8');
console.log(data);
console.log("Reading the contents of the file")
*/


// Writing a file
/*
var fs=require('fs')
console.log("Going to write into exsting file");
fs.writeFile('test1.txt','PES University',function(err){
    if(err){
        return console.error(err)
    }
    console.log("Data written sucessfully");
    console.log("Let's read newly written data");
    fs.readFile('test1.txt', function(err,data){
        if(err) throw err;
        console.log(data.toString());
        console.log("Asynchronous Read " +data.toString())
    })
})*/

/*
var fs= require('fs')
console.log("Going to open file");
fs.open('test1.txt', 'r+',function(err,fd){
    if(err){
        return console.error(err);
    }
    var buf=new Buffer(1024);
    console.log("file Opened Sucessfully")
    console.log("Going to truncate file after 3 bytes")
	
// truncate the opened file
fs.ftruncate(fd,3, function(err){
    if(err){
        console.log(err);
    }
    console.log("File truncated sucessfully");
    console.log("Going to read the same file");
    
	fs.read(fd,buf,0,buf.length,0,function(err,bytes){
        if (err) throw err;
        if(bytes>0){
            console.log(buf.slice(0,bytes).toString());
        }
        fs.close(fd,function(err){
            if(err) throw err
        })
    })
})
}) */

var fs=require('fs')
fs.unlink('test1.txt',function(){
    console.log("write operation complete");

})


