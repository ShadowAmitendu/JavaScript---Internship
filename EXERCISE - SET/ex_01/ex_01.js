/*
Exercise 1 – Guess the Number
Question:
Write a JavaScript program to generate a random number and store it in a variable. The program then takes an input from the user to tell them whether the guess was correct, greater, or lesser than the original number.

100 - (number of guesses) is the score of the user.

The program is expected to terminate once the number is guessed.
Number should be between 1 and 100.
*/

let prompt = require("prompt-sync")();
let target = Math.floor(Math.random() * 100) + 1;
let guess;
let attempts = 0;

while (true) {
	guess = prompt("Guess a number between 1 and 100:");
	attempts++;
	guess = Number(guess);

	if (guess === target) {
		console.log(
			`Correct! You took ${attempts} attempts.\nYour score is: ${
				100 - attempts
			}`
		);
		break;
	} else if (guess > target) {
		console.log("Too high!");
	} else {
		console.log("Too low!");
	}
}
