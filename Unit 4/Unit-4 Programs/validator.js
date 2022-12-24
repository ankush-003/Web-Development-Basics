	var val=require('validator')
//import val from 'validator';

var email='xyz@pes.edu'
console.log(val.isEmail(email))

email='xyz@.edu'
console.log(val.isEmail(email))

var name='john'
console.log(val.isLowercase(name))

name='JOHN'
console.log(val.isLowercase(name))

var name=''
console.log(val.isEmpty(name))

name='Smith'
console.log(val.isEmpty(name))

