// syntax of Buffer.alloc(length,fill,encoding)
var buf1 = Buffer.alloc(10,'a');
console.log(buf1.toString('utf8'));

var buf2 = Buffer.alloc(10,'b');
var result = buf2.compare(buf1);
if(result < 0) {
    console.log(buf2 + " comes before " + buf1);
}
else if(result == 0) {
    console.log(buf2 + " is same as " + buf1);
}
else {
    console.log(buf2 + " comes after " + buf1);
}

// Copying Buffers
var buf3 = Buffer.alloc(10,'ankush');
var buf4 = Buffer.alloc(10,'PESU');
// buf 3 is copied to buf4
buf3.copy(buf4);
console.log(buf4.toString('utf8'));
