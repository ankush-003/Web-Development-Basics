// javascript program - Increment Function

var i = 0;

function timedCount() {
    i = i + 1;
    postMessage(i);
    setTimeout("timedCount()",500); // Timer delay in increment
}

timedCount();