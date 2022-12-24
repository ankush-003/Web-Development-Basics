var a = 10;
function print() {
    console.log(a);
}
// var a = 20;
function main() {
    var a = 20;// this a is local to main and is destroyed after main is executed
    console.log(a);
    print();
}
main();

console.log(a);