// Async and Await

function waitTwoSeconds() {
	return new Promise(resolve => {
		setTimeout(() => resolve("Done waiting!"), 2000);
	});
}

async function showMessage() {
	console.log("Please wait...");
	let message = await waitTwoSeconds();
	console.log(message);
}

showMessage();
