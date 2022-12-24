// validator is used to validate the input it takes two arguments and returns a boolean
var val = require('validator');

var email = "anshhv2003@gmail.com";
console.log(val.isEmail(email)? "Valid Email" : "Invalid Email");

var name = "Ansh";
console.log(val.isAlpha(name)? "Valid Name" : "Invalid Name");

var url = "https://www.google.com";
console.log(val.isURL(url)? "Valid URL" : "Invalid URL");

var name1 = 'Ankush H V';
console.log(val.isLowercase(name1)? "lowercase" : "Not lowercase");

var name2 = 'PES';
console.log(val.isEmpty(name2)? "Empty" : "Not Empty");
