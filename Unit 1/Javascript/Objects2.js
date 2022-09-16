// JavaScript Objects
/*// Method-1: Object Literals
let item = {name:"Reebok", price:"Rs.6999", qty:20};
//property: value
// document.write(item.name + " " + item.price + " " + item.qty);
// adding method:
item.show = function () {
    document.write(this.name + " " + this.price + " " + this.qty + "<br>");
};
item.show();
// Disadvantage -> we can define only one object of a kind
*/
// Method-2: Object Constructors
function item(name, price, qty){
    this.name = name;
    this.price = price;
    this.qty = qty;
    /* this.show = function show() {
        document.write(this.name + " " + this.price + " " + this.qty + "<br>");
    }; */
}

let item1 = new item("Reebok","Rs. 6999",20);// the reference to object is given to item1
// item1.show();
// if new was not used then it would have become a normal function call and 
// this would refer to global window object, and since there is now return value item1 would be undefined 
// let item2 = item("Nike","69999",69);
// show()

let item2 = new item("Nike","Rs. 7000",10);
// item2.show();
// Giving method like this has disadvantage that every object created will have a copy of show property added to it(multiple definitions of same function)
// prototype: basically is structure of the object

item.prototype.show = function() {
    document.write(this.name + " " + this.price + " " + this.qty + "<br>");
};

item1.show();
item2.show();