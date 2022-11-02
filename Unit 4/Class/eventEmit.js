// Event Emitter

var events = require("events");
const { ConnectionClosedEvent } = require("mongodb");

var eventEmitter = new events.EventEmitter();

eventEmitter.on("connection",function listener() {
    console.log("Listener is Connected!")
});

eventEmitter.on("click",()=>console.log("Clicked!"));

eventEmitter.emit("connection");

eventEmitter.emit("click");
