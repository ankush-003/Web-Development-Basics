//Javascript Class
class mobile{
    constructor(name,price) {
        this.name = name;
        this.price = price;
    }
    show() {
        document.write("name: " + this.name + " price: " + this.price + "<br>");
    }
}

let i1 = new mobile("Samsung","Rs. 20000");
i1.show();