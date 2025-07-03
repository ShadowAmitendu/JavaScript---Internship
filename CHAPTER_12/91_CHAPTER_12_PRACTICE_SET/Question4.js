// Question: Write a simple interest calculator using JavaScript.
// Solution:

function simpleInterest(principal, rate, time) {
	return (principal * rate * time) / 100;
}

console.log(simpleInterest(1000, 5, 2));
