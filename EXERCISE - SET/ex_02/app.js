// QUESTION: Use JavaScript to create a game of Snake, Water & Gun. The game should ask you to enter S, W, or G.
// The computer should be able to randomly generate S, W, or G and declare Win or Loss using alert.
// Use confirm and prompt wherever required.

function getComputerChoice() {
	const choices = ["S", "W", "G"];
	const randomIndex = Math.floor(Math.random() * choices.length);
	return choices[randomIndex];
}

function getResult(user, computer) {
	if (user === computer) return "It's a draw!";
	if (
		(user === "S" && computer === "W") ||
		(user === "W" && computer === "G") ||
		(user === "G" && computer === "S")
	) {
		return "You WIN!";
	} else {
		return "You LOSE!";
	}
}

let playAgain = true;

while (playAgain) {
	let userChoice = prompt("Enter S for Snake, W for Water, or G for Gun:");
	userChoice = userChoice.toUpperCase();

	if (!["S", "W", "G"].includes(userChoice)) {
		alert("Invalid input! Please enter only S, W, or G.");
	} else {
		const computerChoice = getComputerChoice();
		alert(`Computer chose: ${computerChoice}`);
		const result = getResult(userChoice, computerChoice);
		alert(result);
	}

	playAgain = confirm("Do you want to play again?");
}
