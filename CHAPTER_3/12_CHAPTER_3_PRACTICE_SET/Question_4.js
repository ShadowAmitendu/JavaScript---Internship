// QUESTION: Write a function to find the mean of 5 numbers
// SOLUTION:

let prompt = require("prompt-sync")();

function mean() {
	let sum = 0;

	for (let i = 1; i <= 5; i++) {
		let input = prompt(`ENTER ${i} NUMBER: `);
		sum += Number(input);
	}

	let average = sum / 5;
	console.log("THE MEAN IS:", average);
}

mean();
