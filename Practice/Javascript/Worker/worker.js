var i = 0;
function counter() {
    i++;
    postMessage(i);
    setTimeout(counter,1000);
    console.log(`count ${i}`);
}
console.log("counter started!");
counter()