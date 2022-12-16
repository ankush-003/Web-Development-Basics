function employee(name,age){
    this.name = name;
    this.age = age;
}

employee.prototype.getName = function(){
    return this.name;
}

function manager(name,age,dept){
    employee.call(this,name,age);
    this.dept = dept;
}

var m = new manager("John",30,"Sales");
// console.log(m.getName()); -> error as getName is not defined in manager prototype

manager.prototype = Object.create(employee.prototype);
manager.prototype.constructor = manager;

manager.prototype.getDept = function(){
    return this.dept;
}

var m = new manager("John",30,"Sales");
console.log(m.getName());
