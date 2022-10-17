var myModule = require("./myModule");

var a = 10;
console.log("type of a " + typeof(a) + " Value of a " + a);

var b = true;
console.log("type of b " + typeof(b) + " Value of b " + b);

function mul(a,b) {
    return a*b;
}

// console.log("product of 6 and 9 is " + mul(6,9,7));
console.log("product of 6 and 9 is " + myModule.mul2(6,9,7))