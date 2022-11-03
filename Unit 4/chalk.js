
//--------Chalk---------------

const chalk = require('chalk');				//import chalk from 'chalk';
console.log(chalk.blue('Hello world!'));

console.log(chalk.red("Hello chalk world ...."))

console.log(chalk.red("I am red line" 
	+ chalk.blue.underline.bold("with blue substring") 
		+ "that becomes red again"))
