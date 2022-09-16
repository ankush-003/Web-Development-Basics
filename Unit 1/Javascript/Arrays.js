/*
Arrays are lists of elements indexed by a numerical value starting from 0.
Arrays can be created using 
i) new Array meathod
    let arr = new Array(100) -> creates array of 100 elements
    let arr = new Array(10,20) -> creates array of two elements
ii) Literal arrays using square brackets
    var alist = [1,'ii','69']; 

Array length property can be modified at runtime

const arr = [1,2];
console.log(arr[4]) // undefined
console.log(arr.length); // 2
arr.length = 7;
console.log(arr)// [ 1, 2, <5 empty slots> ]
*/
/*
The general syntax for a function is:
    function function_name([parameter [,...]])
    {
        statements
        //optional return statement
    }

the general syntax for calling a function is:
    [retval = ] function_name([argument[,...]])

Argument list and parameter list mismatch does not give errors.
Parameter that is not passed a value in arguments list is treated as undefined
To access additional arguments use the arguments object or the args array to access the value passed.    
*/

/*
Hoisting is JavaScript's default behaviour of moving all variable and function
declarations to top of the current scope (to the top of the current <script> or the current function)

Only declarations are hoisted not initializations
Variables and constants declared with let or const are not hoisted!
                                    var num;
num = 6;                            num = 6;
console.log(num);                   console.log(num);
var num = 8;            =>          num = 8;
console.log(num);                   console.log(num);

to avoid redeclaration use let
*/

var arr = new Array(10) // number of elements is 10
var arr1 = new Array(10,20,30) // array of three elements
console.log(arr.length, arr1.length) // 10 3

var arr2 = [1,"gamma",true,new Number("69")];
document.write(arr2,"<br>");
arr2.length = 10;
arr2[9] = 10
document.write(arr2,"<br>",arr2[9],"<br>");// arr2[9] is undefined
for (i in arr2)
{
    document.write(typeof(i) + i + " value: " + arr2[i] + "<br>")// here i is index stored as string, undefined values are not being displayed
}

function add(a,b) {
    return a + b;
}

var x = add(60,9);
console.log(x);
var ref = add;// we are accessing function add here 
console.log(ref,ref(5,8));

//anonymous function
var ref = function (a,b) {
    return a-b;
}

console.log(ref(1,1));

console.log(add(5,8,20,30))// 20 and 30 are not accessible with add
console.log(add(5)) // b is undefined, gives NaN(not a number)

function add1(a=0,b=0) { // default values 0,0
    return a+b;
}

console.log(add1(5));

var ref = function() {
    //arguments object -> holds all arguments passed to function
    var s = 0;
    console.log(arguments)
    for(var i in arguments) {
        //console.log(arguments[i]);
        s = s + arguments[i];
    }
    return s;
    // here arguments is an object
}
// function with variable number of arguments
var ref2 = function(...args) {
    var s = 0;
    // here args is a normal array
    console.log(args)
    for (var i in args)
        s = s + args[i];
    return s;    
}

console.log(ref(1,2,3,4,5),ref2(1,2,3,4,5));
