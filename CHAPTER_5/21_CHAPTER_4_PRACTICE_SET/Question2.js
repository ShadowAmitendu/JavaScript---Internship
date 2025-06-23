// QUESTION: Keep adding numbers to the array in from Question 1 until 0 is added.
// SOLUTION:
let prompt = require("prompt-sync")();
let numbers = [1, 2, 2, 2, 5, 46, 321, 84, 1, 13];
let input;

do {
	input = Number.parseInt(prompt("Enter a number (0 to stop): "));
	numbers.push(input);
} while (input !== 0);

console.log("Final Array:", numbers);
