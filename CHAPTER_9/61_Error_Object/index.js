try {
	let x = y + 1; // y is not defined
} catch (err) {
	console.log("Error Name:", err.name);
	console.log("Error Message:", err.message);
	// console.log("Stack Trace:", err.stack); // optional
}

// Custom Error
function checkAge(age) {
	if (age < 18) {
		throw new Error("Age must be 18 or above");
	}
	return "Access granted";
}

try {
	console.log(checkAge(16));
} catch (err) {
	console.log("Custom Error:", err.message);
}

// using throw
function divide(a, b) {
	if (b === 0) {
		throw new Error("Cannot divide by zero!");
	}
	return a / b;
}

try {
	console.log(divide(10, 0)); // This will cause an error
} catch (err) {
	console.log("Error caught:", err.message);
}
