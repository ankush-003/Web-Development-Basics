var num = 123.789
num2 = parseInt(num)
console.log(num2)
num3 = parseInt(num,8)
console.log(num3)
function getNum(num,...args) {
    console.log(args)
    return num
}
console.log(getNum(1,2,3,4,5,6,7,8,9,10))