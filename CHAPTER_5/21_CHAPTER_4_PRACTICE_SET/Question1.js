// QUESTION: Create an array of numbers and take input from the user to add numbers to this array.
// SOLUTION:

let prompt = require("prompt-sync")();
let numbers = [1, 2, 2, 2, 5, 46, 321, 84, 1, 13];
let num = prompt("Enter a number: ");
numbers.push(Number.parseInt(num));
console.log("Array:", numbers);
