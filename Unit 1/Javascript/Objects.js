/*
Global Objects: Number, String, Array, Date, Math, Window, Document

Number Object Properties:
    MAX_VALUE
    MIN_VALUE
    NaN
    POSITIVE_INFINITY
    NEGATIVE_INFINITY
use isNaN(a) to test if a is NaN
toString method converts a number to string    

String Object:
    charAt(index), charCodeAt(index)
    concat(string)[s1.concat(s2) is same as s1 + s2]
    fromCharCode(value1,value2)
    indexOf(substring,index), lastIndexOf(substring,index)
    splice(start,end)
    split(string)
    substr(start,length)
    substring(start,end)
    toLowerCase(), toUpperCase()
    toString(), valueOf()

Array Methods:

    push -> Add to the end of array
    pop -> Remove from the end of the array
    shift -> Remove from the front of array
    unshift -> Add to the front of the arry
    join -> return a string with array elements
    indexOf -> return the index of element of array
    sort -> sort an array in ascending order by default
    concat -> conactenate two arrays
    slice -> returns a subset of the array

Window :
    global object containing global variables and functions declared in page
    eg: var x can be accessed as window.x, since it is root object we can refer to it without window.

*/

// Array.sort()

var arr = [1,11,22,2,23,5]; 
for (i of arr)
    document.write(i + ", ");

function asc(a,b){
    // if(a>b)
    //     return 1;
    // else if (a<b)
    //     return -1;
    // else
    //     return 0;  
    return a-b;      
}    

function des(a,b) {
    // if(a>b) // since we > it is converting to number
    //     return -1;
    // else if(a<b)
    //     return 1;
    // else 
    //     return 0;  
    return b-a;      
}
console.log(arr.sort(asc)); // sorts treats elements as string and sorts
console.log(arr.sort(des));
console.log(arr.push(69),arr);
console.log(arr.pop(),arr);
console.log(arr.shift(),arr);
console.log(arr.unshift(),arr);
console.log(arr.join("->"));
console.log(arr.indexOf(22));

//Math.random() -> returns a value between 0 and 1
// to get a number between a and b 
// var rnd = a + Math.floor((Math.random()*(b-a)))
console.log(Math.random())
var rnd = 1 + Math.floor((Math.random())*(100-1));// 0.1 * 99 -> 9.9 -> 9 -> 1 + 9 = 10 (100 excluded)
document.write("<br>" + "Random number between [1,100): " + rnd);

/* 
   var t = setTimeout(func_ref, time_in_ms); // execute func_ref once after time interval specified 
   clearTimeout(t); // Stop execution of func_ref

   var t = setInterval(func_ref, time_in_ms) // execute func_ref repeatedly after every time interval specified
   clearInterval(t); // stop repeated execution of func_ref
*/
var count = 0;
function log() {
    console.log("Function was called: " + count + " times");
    count++;
    if(count == 13)
        clearInterval(t1);
}
// setTimeout(log,5000);
var t = setTimeout(log,5000);
// clearTimeout(t);// to clear timeout i.e. function is not called

var t1 = setInterval(log,2000);

/* We need function reference:
    setInterval(log(),2000) -> incorrect
Method-2:

var t2 = setInterval(function(){
    console.log("Function was called: " + count + " times");
    count++;
    if(count == 13)
        clearInterval(t2);
},2000);
*/    