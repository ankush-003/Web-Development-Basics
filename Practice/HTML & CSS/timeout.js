// console.log('start');
// setTimeout(() => {
//     console.log('timeout');
//     }
// , 0);
// console.log('end');
// console.log('start');
// timeout is called after 0ms but it is called after end
// because it is called after the call stack is empty
// so it is called after the end of the current script execution 

// var timeId = setTimeout(() => {
//     console.log('timeout');
//     },10);
// // console.log(timeId);
// setTimeout(() => {
//     clearTimeout(timeId);
//     }, 11);

var timeId = setTimeout(() => {
    console.log("in func");
    setTimeout(() => console.log("timer"),1000);
    }, 1000);