let item1 = {
    iname : "Reebok",
    iprice : "Rs 2000",
    show : function(){
    console.log("iname: "+this.iname+" iprice: "+this.iprice+"<br/>");
    }
};
let item2 = Object.create(item1); // item2 will be replica of item1
let item3 = Object.create(item1, {
    iname:{value:"PS5"},
    iprice:{value:"Rs 40000"},
    idesc:{value:"UHD 1080p"}
});
item3.show();