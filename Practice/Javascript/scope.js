let x = true;// global scope
function hoist() {
    if(3===4) {
        let x = false;// local scope
    }
    console.log(x);
}

hoist();