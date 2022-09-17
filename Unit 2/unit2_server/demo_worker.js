var i = 0;
function timeCount() {
    i = i + 1;
    postMessage(i);
    setTimeout(timeCount,800);// or setTimeout("timeCount()",500)
}
timeCount();