// Promise Handlers

let promise = new Promise(function (resolve, reject) {
	resolve("Hello!");
});

promise.then(function (result) {
	console.log("Handler 1:", result);
});

promise.then(function (result) {
	console.log("Handler 2:", result);
});
