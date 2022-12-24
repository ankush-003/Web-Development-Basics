var chalk = require('chalk');
console.log(chalk.blue('Hello World'));
console.log(chalk.red("Hello Chalk world!"));
console.log(chalk.red.bgGreen.bold("Hello"));

console.log(chalk.red("I am red line " + chalk.blue.underline.bold("with blue substring") + " that becomes red again"));