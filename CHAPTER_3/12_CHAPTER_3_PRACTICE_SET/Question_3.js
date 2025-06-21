// QUESTION: Write a program to take user input and the program will run till the correct no is guessed!
// SOLUTION:

let prompt = require("prompt-sync")();

let answer = 50;
let guess;

while (guess != answer) {
	guess = prompt("ENTER VALUE: ");
	if (guess != answer) {
		console.log("TRY AGAIN!");
	}
}
console.log("GUESSED IT!");
