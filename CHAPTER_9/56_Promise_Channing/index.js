function wait(ms, value) {
	return new Promise(resolve => {
		setTimeout(() => {
			console.log(`Waited ${ms}ms`);
			resolve(value);
		}, ms);
	});
}

wait(1000, 1)
	.then(val => {
		console.log("Step 1:", val);
		return wait(1000, val + 1);
	})
	.then(val => {
		console.log("Step 2:", val);
		return wait(1000, val + 1);
	})
	.then(val => {
		console.log("Step 3:", val);
	});
