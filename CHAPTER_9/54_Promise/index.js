// Promise In JS

let myPromise = new Promise((resolve, reject) => {
	let success = false;

	if (success) {
		resolve("Task completed!");
	} else {
		reject("Task failed!");
	}
});
