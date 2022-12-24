// Initialize x in the global scope
let x = true;
function hoist() {
    // we can access x here
    // Initialize x in the function scope
    if (3 === 4) {
        let x = false;
    }
        console.log(x);
}
hoist();