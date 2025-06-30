try {
	let result = 5 + unknownVariable; // Error: unknownVariable is not defined
	console.log("Result:", result);
} catch (error) {
	console.log("Error:", error.message);
}
