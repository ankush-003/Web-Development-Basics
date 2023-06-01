/*
The HTML DOM is a standard Object model and programming interface for HTML, it defines:
1.) The HTML elements as objects
2.) The properties of all HTML elements
3.) The methods to access all HTML elements
4.) THe events for all HTML elements

Window Object -> Document -> HTML -> ...

if Document.write is executed after webpage loads then it completely overwrites the web page1

properties: specify attributes or characteristics of an object
methods: specify functions object can perform
events: methods corresponding to user actions

Accessing DOM:
-> write("String"): writes the given string on the document
-> getElementById(): returns the element having the given id value (must be unique, returns only one element)
-> getElementByClassName(): returns elements having given class name
-> getElementByName(): returns all the elements having the given name value
-> getElementByTagName(): returns all the elements having the given tag name

For CSS:
selector(single)-> querySelector("selector")
selector(all) -> querySelectorAll("selector")

creating Element Object

document.createElement(): create a new element node using tag
document.createTextNode(): create a new text node

node.textContent / node.innerText: get or set text content of an element node(without HTML Tag)

node.innerHTML: get or set the HTMLcontent enclosed in the element tag

node.appendChild(): add a node as the last child of the parent element
node.insertBefore(): insert a node into the parent before a specific sibling node
node.replaceChild(): replace an existing node with a new node
node.removeChild(): removes the child node
node.remove(): removes a node

* node here can be document.body or any existing element in the DOM 

Make sure the script is placed in the bottom of the BODY element of the document you're trying to manipulate, not in the HEAD element or placed before any of the elements you want to "get".

*/

// document.getElementById("demo").innerHTML = "<h3>Using InnerHTML</h3>";
// document.getElementById("demo1").innerText = "<h1>Using innerText</h1>";

// var x = document.getElementsByClassName("ex");
// x[1].innerHTML = "content of second division is changed!";

function myfunc() {
    document.getElementsByTagName("body")[0].style.background = "black";
    document.getElementsByTagName("body")[0].style.color = "white";
}
function myfuncrev() {
    document.getElementsByTagName("body")[0].style.background = "white";
    document.getElementsByTagName("body")[0].style.color = "black";
}

function change() {
    document.getElementById("demo").innerHTML = "<h3>Using InnerHTML</h3>";
    document.getElementById("demo1").innerText = "<h1>Using innerText</h1>";

    var x = document.getElementsByClassName("ex");
    x[1].innerHTML = "content of second division is changed!";
}