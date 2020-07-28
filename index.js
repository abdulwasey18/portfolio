const readlineSync = require('readline-sync');

const num1 = parseInt(readlineSync.question("Enter the first number:"));
const num2 = parseInt(readlineSync.question("Enter the second number:"));

function sum(a = 1, b = 2) {
    console.log(a + b);
}
sum(a + b);