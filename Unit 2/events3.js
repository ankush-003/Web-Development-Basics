// doubleclick and first button
var button = document.querySelector("#but1");
button.addEventListener("click",doSomething);
function doSomething(event) {
    document.getElementById("emptyp").innerHTML = "<strong>The button Was clicked!</strong>"
}

var para1 = document.querySelector("#para1");
para1.addEventListener("dblclick",function(){
    document.getElementById("emptyp").innerText = "Ta Da !";
})

// on doubleclick copy text from field1 to field2
var button2 = document.querySelector("#but2");
button2.addEventListener("click",copyValue);
function copyValue() {
    document.getElementById("field2").value = document.getElementById("field1").value; 
}

// Mouse Events - mouseout, mouseover, mouseup, mousedown
var img1 = document.querySelector("#img1");
img1.addEventListener("mouseover",mOver);
img1.addEventListener("mouseout",mOut);

function mOver() {
    // alert("Mouseover Event was triggered!");
    img1.style = "box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);"
}

function mOut() {
    // alert("Mouseout Event was triggered!");
    img1.style = "box-shadow: 15px 12px orange";
}

var p1 = document.querySelector("#p1");
p1.addEventListener("musedown",mDown);
p1.addEventListener("mouseup",mUp);
function mDown() {// Not working
    document.getElementById("p1").innerHTML="Mouse has been held!";
}
function mUp() {
    document.getElementById("p1").innerHTML="Mouse has been released!";
}

//Context Menu
document.addEventListener("contextmenu",hidemenu);
function hidemenu(e) {
    e.preventDefault()// prevents default behaviour of browser
}

// screen x, screen y, clientX, clientY
document.addEventListener("mousemove",mMove);
function mMove(e){
    // console.log("Mouse moved on screen");
    // console.log(e.screenX+" "+e.screenY);
    document.querySelector("span#xcoor").innerText = e.screenX;
    document.querySelector("span#ycoor").innerText = e.screenY;
}

// document.addEventListener("mouseover",mOver);
// function mOver(e){
//     console.log("Mouse moved on screen");
//     console.log(e.clientX+" "+e.clientY);
//     // document.querySelector("span#xcoor").innerText = e.screenX;
//     // document.querySelector("span#ycoor").innerText = e.screenY;
// }

// Key Events - keydown, keyup, keypress
var kd = document.querySelector("#key1");
kd.addEventListener("keydown",kDown);
document.querySelector("#uname").addEventListener("keyup",kUp);

function kDown() {
    alert("keydown event is triggered!");
}

function kUp() {
    var x = document.querySelector("#uname");
    x.value = x.value.toUpperCase();
}

window.addEventListener("keypress",kPress);
function kPress(e) {
    if(e.charCode===97)
    alert("key A is pressed by user");
}