// Creating Buffers
var buf = Buffer.alloc(15);
console.log(buf);
// faster
const buf1 = Buffer.allocUnsafe(10);
console.log(buf1);

// Writing to Buffers
var buf2 = new Buffer.alloc(30);
console.log(buf2.length);
for(var i = 0;i < buf2.length;i++) {
    buf2[i] = i+65;
}
console.log(buf2.toString('ascii'));
console.log(buf2.toString('ascii',0,5));
console.log(buf2.toString('utf8',0,5));

// syntax: buffer.write(value,start,end,encoding)
const len = buf1.write("Welcome to Node.js",2,8,'utf8');
console.log(len);
console.log(buf1.toString('utf8'));