var event = require('events');
var em = new event.EventEmitter();
// Create an event handler:
var listener1 = function listener1() {
    console.log('listener1 executed.');
}

var listener2 = function listener2() {
    console.log('listener2 executed.');
}

// Bind the connection event with the listener1 function
em.addListener("connection",listener1);
// syntax of listenerCount: eventEmitter.listenerCount(eventName)
// console.log(em.listenerCount("connection"));
em.on("newListener",function(eventName,listener){
    console.log("listener count: " + event.EventEmitter.listenerCount(em,"connection"));
});
em.removeListener("connection",listener1);

// em.on("connection",listener2);
// console.log(event.EventEmitter.listenerCount(em,"connection"));

// Fire the connection event
em.emit("connection");

// Remove the binding of listener1 function
em.on("removeListener",()=>{
    console.log("Listener removed");
    console.log("listener count: "+event.EventEmitter.listenerCount(em,"connection"));
})
em.removeAllListeners("connection");