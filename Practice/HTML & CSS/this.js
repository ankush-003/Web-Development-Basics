const Manager = {
    name: "John",
    age: 27,
    job: "Software Engineer"
}
const Intern= {
    name: "Ben",
    age: 21,
    job: "Software Engineer Intern",
    // sayHello2: function () {
    //     console.log("hello" + this.name);
    // }
}
function sayHi() {
    console.log('Hello, my name is', this.name)
}
// add sayHi function to both objects
Manager.sayHi = sayHi;
Intern.sayHi = sayHi;
Manager.sayHi() // Hello, my name is John'
Intern.sayHi() // Hello, my name is Ben'

var sayHello = () => console.log("helllo" + this.name);

Manager.sayHello = sayHello;
Intern.sayHello = sayHello;
Manager.sayHello() // Hello, my name is John'
Intern.sayHello() // Hello, my name is Ben'

var sayHello2 = function() {
    console.log("hello" + this.name);
}

Manager.sayHello2 = sayHello2;
Intern.sayHello2 = function () {
    console.log("hello" + this.name);
}

Manager.sayHello2();
Intern.sayHello2();

function constructor(name) {
    this.name = name;
    this.hello1 = function() {
        console.log("hello" + this.name)
    }
    this.hello2 = () => console.log("hello 2" + this.name);
}

var obj1 = new constructor("me");
obj1.hello1()
obj1.hello2()

setTimeout(obj1.hello1,1000); // looses this context
setTimeout(obj1.hello2,1000); // doesnt loose context as there is no binding of this