// QUESTION: Write a program to print the marks of a student in an object using for in loop
// obj = { Harry: 98, Rohan: 70, Akash: 7 };
// SOLUTION:

obj = { Harry: 98, Rohan: 70, Akash: 7 };

for (const key in obj) {
	console.log(key, ":", obj[key]);
}
