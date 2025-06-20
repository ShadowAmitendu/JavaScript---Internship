// QUESTION: DEMONSTRATE THE USE OF SWITCH CASE STATEMENTS IN JS.
// SOLUTION:

let prompt = require("prompt-sync")();

let user = prompt("ENTER SOME AGE:");

user = Number.parseInt(user);

switch (user) {
	case 10:
		console.log("YOU ARE 10!");
	case 20:
		console.log("YOU ARE 20!");
		break;
	case 30:
		console.log("YOU ARE 30!");
		break;
	default:
		console.log("YOU ARE NOT ALLOWED!");
		break;
}
