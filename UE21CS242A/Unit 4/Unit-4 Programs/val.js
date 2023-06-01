
//--------Validator---------------

var val=require('validator')

var email='xyz@pes.edu'
console.log(val.isEmail(email))

var name1='john'
console.log(val.isLowercase(name))

var name2='Smith'
console.log(val.isEmpty(name))




email='xyz@.edu'
console.log(val.isEmail(email))


name1='JOHN'
console.log(val.isLowercase(name))