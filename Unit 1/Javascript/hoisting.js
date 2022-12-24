// variables defined using var keyword and all function definitions 
// are hoisted to top of the script tag
var x =fn();
function fn() {
    return 10;
}
console.log(x);
/*
equivalent to:
var x;
function fn() {
    return 10;
}

x = fn();
console.log(x)
*/

y = 10;
var y = 20;
console.log(y);
/*
equivalent to 
var x;
x = 10;
x = 20;
console.log(y);
*/

/*only variables and function declarations are hoisted not initializations*/

ref()

var ref = function () {
    return 69;
}

/*
error as :
var ref;
ref();
ref = function ()
{
    return 69;
}
*/