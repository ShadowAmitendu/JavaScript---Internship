// QUESTION: USE LOGICAL OPERATORS TO FIND WHETHER THE AGE OF A PERSON LIES BETWEEN 10 AND 20?
// SOLUTION:

let prompt = require("prompt-sync")();
let user = prompt("YOUR AGE:");
Number.parseInt(user);

if (user >= 10 && user <= 20) {
	console.log("OK! AGE BETWEEN 10 AND 20");
} else {
	console.log("NOT OK! AGE BETWEEN 10 AND 20");
}
