// QUESTION: In the previous question, use console.error to log the error if the age entered is negative.
// SOLUTION:

let runAgain = true;

while (runAgain) {
	let age = prompt("Enter your age:");
	age = Number(age);

	if (age < 0) {
		console.error("Enter a Valid AGE!");
	} else if (age >= 18) {
		alert("You can drive!");
	} else {
		alert("You cannot drive.");
	}

	runAgain = confirm("Do you want to try again?");
}
