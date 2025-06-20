// Problem: Day of the Week
// Write a JavaScript program that takes a number (1 to 7) as input and outputs the corresponding day of the week. Use a switch statement to solve this.
// Example Input/Output:
// Input: 1 → Output: "Monday"
// Input: 5 → Output: "Friday"
// Input: 8 → Output: "Invalid input"

let prompt = require("prompt-sync")();
let userDay = prompt("Enter Your Day: ");
userDay = Number(userDay);

switch (userDay) {
	case 1:
		console.log("MONDAY");
		break;
	case 2:
		console.log("TUESDAY");
		break;
	case 3:
		console.log("WEDNESDAY");
		break;
	case 4:
		console.log("THURSDAY");
		break;
	case 5:
		console.log("FRIDAY");
		break;
	case 6:
		console.log("SATURDAY");
		break;
	case 7:
		console.log("SUNDAY");
		break;

	default:
		console.log("INVALID INPUT!");
		break;
}
