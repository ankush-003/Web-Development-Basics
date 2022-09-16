// Javascript Object Inheritance

// method 1: Object Literals
/*let item = {name:"Reebok", price:"Rs. 2000", qty:20};
// Object is default object in JS
let item1 = Object.create(item);
document.write(item1.name + " " + item1.price + " " + item1.qty + "<br>") // item1 is copy of item
let item2 = Object.create(item, {name:{value:"Nike"},price:{value:"Rs 6999"}});
document.write(item2.name + " " + item2.price + " " + item2.qty + "<br>") */

//Method 2: Object Constructors
function item(name,price,qty) {
    this.name = name;
    this.price = price;
    this.qty = qty;
}

item.prototype.show = function () {
    document.write(this.name + " " + this.price + " " + this.qty + "<br>");
};

let item1 = new item("Reebok","Rs 2000",20);
item1.show()

function gcItem(name,price,qty,desc) {
    // call() calls the item constructor with reference to the object with given parameters
    item.call(this,name,price,qty);
    this.desc = desc;
}

// let gc1 = new gcItem("PS5","Rs. 69999",69,"Full HD display");
// gc1.show()->doesnt work
// show method isnt added to gcItem

gcItem.prototype = new item();// now all properties of item will be accessible with gcItem
// But constructor for gcItem will be item constructor to avoid that we do:
gcItem.prototype.constructor = gcItem;

let gc2 = new gcItem("PS5","Rs. 69999",69,"Full HD display");
console.log(gc2.desc);
gc2.show();
