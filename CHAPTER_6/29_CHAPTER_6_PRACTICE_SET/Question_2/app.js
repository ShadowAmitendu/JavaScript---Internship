// QUESTION: In Q1, use confirm to ask the user if he wants to see the prompt again.
// SOLUTION
let runAgain = true;

while (runAgain) {
	let age = prompt("Enter your age:");
	age = Number(age);

	if (age >= 18) {
		alert("You can drive!");
		break;
	} else {
		alert("You cannot drive.");
	}

	runAgain = confirm("Do you want to try again?");
}
