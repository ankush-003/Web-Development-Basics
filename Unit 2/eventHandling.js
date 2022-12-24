/*
i) Capturing phase starts from the top to target element.
ii) Bubbling Phase goes from target to outer phase

syntax:
        element.addEventListener("event",func_ref,flag);
    flag = true => Handler registered for capturing phase
    flag = false => Handler registered for bubbling Phase (default)

The eventPhase event property returns a number that indicates which phase of the event flow is currently being evaluated.
0 -> NONE
1 -> Capturing Phase
2 -> At Target (the event flow is in target phase, i.e it is being evaluated at the event target)
3 -> Bubbling Phase

Properties of Event Object: 
i) cancelBubble: setting its value to true before returning prevents propagation
ii) preventDefault(): It cancels the default behaviour of the event (if possible)
iii) stopPropagation(): stops bubbling/capturing
*/

function init() {
    document.querySelector("#div1").addEventListener("click",handler,true);
    document.querySelector("#list").addEventListener("click",handler,true);
    document.querySelector("#liele").addEventListener("click",handler,true);

    document.querySelector("#div1").addEventListener("click",handler,false);
    document.querySelector("#list").addEventListener("click",handler,false);
    document.querySelector("#liele").addEventListener("click",handler,false);
    // for liele only one event handler is registered
}

function handler(event) {
    e = event;
    console.log(event.eventPhase + " " + event.target.id + " " + event.currentTarget.id);
    event.target.style = "color:green;text-shadow:1px 1px black;"
    // event.currentTarget.style = "color: blue;"
}