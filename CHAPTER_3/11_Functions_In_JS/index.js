// Functions in JS
// there are 2 types of Functions one is normal functions and arrow functions

function add(a, b) {
	return a + b;
}

let a, b;

a = 20;
b = 30;

console.log(add(a, b)); //Function Call
console.log(add(54, 70)); //Function Call
console.log(add(100, 70)); //Function Call
console.log(add(80, 70)); //Function Call

const value = () => {
	console.log("HELLO!~"); //Function Call
};

for (let i = 0; i < 10; i++) {
	value();
}
