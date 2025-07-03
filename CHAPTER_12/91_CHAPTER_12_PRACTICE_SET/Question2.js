// Question: Write a JavaScript program to find average of numbers in an array using spread syntax.
// Solution:
function average(...nums) {
	const sum = nums.reduce((a, b) => a + b, 0);
	return sum / nums.length;
}

console.log(average(10, 20, 30, 40));
