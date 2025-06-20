// Question: Create a const object in JS. Can you change it to hold a number later;
// Solution:

const myObj = {
	data_1: "hello",
	data_2: null,
};

myObj = 456;

// No we cant change a const because its a Constant! we cannot reassign it!
// It will create a TypeError: Assigment to constant variable
