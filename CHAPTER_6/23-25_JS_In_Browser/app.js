//PRINTS TO THE CONSOLE
console.log("THIS WILL GET PRINTED IN CONSOLE OF BROWSER");

//PRINTS ERRORS TO THE CONSOLE [RED]
console.error("this is wrong!");

// PRINTS WARNINGS TO THE CONSOLE [YELLOW]
console.warn("This is just a warning.");

// PRINTS INFORMATION TO THE CONSOLE
console.info("This is some info.");

// PRINTS IN TABLE FORMAT AN OBJECT
const users = [
	{ name: "Amit", age: 21 },
	{ name: "Neha", age: 22 },
];

console.table(users);

// PRINTS THE TIME TAKEN
console.time("loop");
for (let i = 0; i < 1000000; i++) {}
console.timeEnd("loop");

// PRINTS OK IF TRUE OR ERROR IF FALSE
let x = 5;
console.assert(x > 10, "x is not greater than 10");
