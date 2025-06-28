// CALLBACK HELL!
console.log("Start");
setTimeout(() => {
	console.log("Step 1 done");

	setTimeout(() => {
		console.log("Step 2 done");

		setTimeout(() => {
			console.log("Step 3 done");

			setTimeout(() => {
				console.log("Step 4 done");
			}, 1000);
		}, 1000);
	}, 1000);
}, 1000);
console.log("End");
