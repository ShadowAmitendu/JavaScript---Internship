// FOR LOOPS
// there are 3 types of for loops one is Traditional For Loop and For In Loop and For Each Loop

let n = 999;

for (let a = 0; a < n; a++) {
	console.log(a);
}

const marks = {
	Amit: 85,
	Sara: 92,
	Ravi: 78,
	Neha: 88,
	John: 74,
	Priya: 95,
	Karan: 67,
};

let b = 8;

for (let b in marks) {
	console.log(b);
}

for (let c of "C OF THIS SENTENCE") {
	console.log(c);
}
