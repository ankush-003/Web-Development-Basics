const Manager = {
    name: "John",
    age: 27,
    job: "Software Engineer"
}
const Intern= {
    name: "Ben",
    age: 21,
    job: "Software Engineer Intern"
}
function sayHi() {
    console.log('Hello, my name is', this.name)
}
// add sayHi function to both objects
Manager.sayHi = sayHi;
Intern.sayHi = sayHi;
Manager.sayHi() // Hello, my name is John'
Intern.sayHi() // Hello, my name is Ben'

var sayHello = () => console.log("helllo" + this);

Manager.sayHello = sayHello;
Intern.sayHello = sayHello;
Manager.sayHello() // Hello, my name is John'
Intern.sayHello() // Hello, my name is Ben'