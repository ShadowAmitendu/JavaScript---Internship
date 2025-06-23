// QUESTION: Use reduce() to calculate factorial of a given number from an array of first n natural numbers.
// SOLUTION:

let prompt = require("prompt-sync")();
let n = Number(prompt("Enter a number to find factorial: "));
let arr = [];
for (let i = 1; i <= n; i++) {
	arr.push(i);
}
let factorial = arr.reduce((acc, val) => acc * val, 1);
console.log(`Factorial of ${n} is:`, factorial);
