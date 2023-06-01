this.onmessage = function(event) {
    postMessage("Reply from web Worker for " + event.data);
}
// Implementation of web worker thread code
i = 0;

setTimeout(loop,1500);

function loop() {
    postMessage("Calling back at:" + new Date().getTime());
}