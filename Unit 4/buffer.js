// creating buffers
var b1 = Buffer.alloc(7,"Hello");
var b2 = Buffer.alloc(50);
// displays hexadecimal code
console.log(b1);
console.log(b1.toString());

// writing to buffers
b2.write("Adding Text");
console.log(b2.toString());

// reading from buffer
// syntax: buf.toString([encoding])
var rd1 = b2.toString("UTF8",0,3);
console.log(rd1);

// Concatenating Buffers
var b3 = Buffer.alloc(5,"hello");
var b4 = Buffer.alloc(5,"world");
var c = Buffer.concat([b3,b4]);
console.log(c.toString());

// Copying Buffers
console.log("b3(before): " + b3.toString());
console.log("b4(before): " + b4.toString());
b4.copy(b3)
console.log("b4: " + b4.toString());
console.log("b3: " + b3.toString());

// Comparing Buffer

var res = b3.compare(b4);
if(res < 0) {
    console.log(b3 + " comes before " + b4);
} else if(res > 0) {
    console.log(b3 + " comes after " + b4);
} else {
    console.log(b3 + " is same as " + b4);
}
