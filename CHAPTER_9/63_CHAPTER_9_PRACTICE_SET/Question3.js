// Question: Create a promise which rejects after 3 seconds. Use an async/await to get its value. Use a try catch to handle its error.
// Solution:
let p = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			reject(new Error("Please this is not acceptable"));
		}, 3000);
	});
};

let a = async () => {
	try {
		let c = await p();
		console.log(c);
	} catch (err) {
		console.log("This error has been handled");
	}
};
a();
