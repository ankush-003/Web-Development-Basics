obj1 = {
    name: 'obj1',
    method: function() {
        console.log(this);
        inner = () => {
            console.log(this);
        }
        inner();
    },
    method2: () => {
        console.log(this);
    }
}

// obj1.method(); // obj1
// obj1.method2(); // undefined because this is not bound to obj1 here this is bound to global object

class check {
    constructor() {
        this.name = 'check';
    }
    method() {
        console.log(this);
    }
    method2 = () => {
        console.log(this);
    }
}

let obj2 = new check();
obj2.method(); // check
obj2.method2(); // check