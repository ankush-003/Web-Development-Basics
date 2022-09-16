/* Javascript can be embedded into documents by using the SCRIPT tag in two ways:
1.) Embedded (in head)
 <script type="text/javascript">
        ...
    </script>
    
2.) External
    <script type="text/javascript" src="myscript.js"></script>

To Debug script errors we can view console by: ctrl+shift+j.
*/
document.write("Hello World!<br>");
/* var x = 10;// global scope
if(true) {
    var x = 20;
}
console.log(x) -- gives 20

let y = 10;// block scope
if(true) {
    let y = 20;
}
console.log(y); -- gives 10

const z = 10;// block scope
if(true) {
    const z = 69;
}
console.log(z); -- gives 10

a = 10;// global
if (true) {
    a=69;
}
console.log(a); */

/* let x = null;// Object, as by default everything is an object
let y;// undefined
let z = true;// boolean
let a = 10.22;// number
let b = "Ankush";// string
let c = z.toString();
let d = "69";
let num = Number(d);

console.log(c + " is of type " + typeof(c));
console.log(num + " is of type " + typeof(num));
console.log(z + a);// 11.22, true --> 1
console.log(z + b);// whenever one operand is string other is converted to string

console.log(z.toString())// Explicit Conversion

let num2 = "70" - 1;
console.log(num2 + " is of type " + typeof(num2));

let num3 = parseInt("10.22")// default base 10, parseFloat()
let num4 = parseFloat("69.69");
console.log(num3,num4);// 10 69.69 */

var x = new Object();
x.name = "Ankush";
x.age = 19;
document.write("<br>Objects in JavaScript<br>")
for (i in x)
    document.write(i +" => " + x[i] + "<br>")//  Equivalent to x["name"]

var num = new Number("69");// typeof gives object for num, str, dt
var str = new String("10 days");
var dt = new Date(2003,01,29);
console.log(num,str,dt);
