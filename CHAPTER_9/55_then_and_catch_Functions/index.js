let myPromise = new Promise((resolve, reject) => {
	let success = true; //first run was with false

	if (success) {
		resolve("Task completed!");
	} else {
		reject("Task failed!");
	}
});

myPromise
	.then(message => {
		console.log("Success: " + message);
	})
	.catch(error => {
		console.log("Error: " + error);
	});
