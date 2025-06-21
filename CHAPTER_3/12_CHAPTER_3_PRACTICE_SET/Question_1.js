// QUESTION: Write a program to print the marks of a student in an object using for loop
// obj = { Harry: 98, Rohan: 70, Akash: 7 };
// SOLUTION:

obj = { Harry: 98, Rohan: 70, Akash: 7 };

for (let i = 0; i < Object.keys(obj).length; i++) {
	console.log(Object.keys(obj)[i], ":", obj[Object.keys(obj)[i]]);
}
