// Event Emitter

var events = require("events")

var eventEmitter = new events.EventEmitter();

eventEmitter.on("connection",function listener() {
    console.log("Listener is Connected!")
});

