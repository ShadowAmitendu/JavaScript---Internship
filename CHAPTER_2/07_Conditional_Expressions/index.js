// This is what we going to use to get input from user at the moment: prompt() and alert()
let prompt = require("prompt-sync")();
let userInput = prompt("Hey whats your Age!: ");
userInput = Number.parseInt(userInput);
if (userInput < 18) {
	console.log("YOU CANNOT ENTER THE SITE!");
} else if (userInput >= 18) {
	console.log("YOU MAY ENTER THE SITE!");
} else {
	console.log("YOU ENTERED INVALID AGE!\nPLEASE REFRESH THE BROWSER!");
}

// COMMENTS IN JS
// there are 3 types of comments
// SINGLE Line Comments
/*
MultiLine
Comments 
*/
/*
 * Documentation comment (this is more like multiline with some features!)
 */
// Now Ternary Operator!

console.log(
	"YOU MAYS",
	userInput >= 18 ? "ENTER THE SITE!" : "NOT ENTER THE SITE!"
);
