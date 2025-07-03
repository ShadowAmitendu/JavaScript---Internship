// Question: Write a JavaScript function which resolves a Promise after n seconds. The function takes n as the parameter. Use an IIFE to execute the function with different values of n.
// Solution:

function wait(n) {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(`Resolved after ${n} seconds`);
		}, n * 1000);
	});
}

(async () => {
	console.log(await wait(2));
	console.log(await wait(1));
})();
