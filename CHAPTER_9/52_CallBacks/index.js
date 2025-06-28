// Synchronous Code
console.log("Start");

function syncTask() {
	console.log("Doing task...");
}

syncTask();
console.log("End");

// Asynchronous Code
console.log("Start");

setTimeout(() => {
	console.log("Async task finished");
}, 2000);

console.log("End");

// Callback
function add(a, b) {
	return a + b;
}

function divide(a, b) {
	return a / b;
}

function calculate(x, y, operation) {
	return operation(x, y);
}

console.log(calculate(10, 5, add));
console.log(calculate(10, 5, divide));
