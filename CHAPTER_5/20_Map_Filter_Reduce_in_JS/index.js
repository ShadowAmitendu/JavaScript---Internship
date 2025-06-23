// MAP FILTER REDUCE functions in JS

// REDUCE FUNCTION
const numbers = [10, 20, 30];
const total = numbers.reduce((a, b) => {
	return a + b;
}, 0);
console.log("Sum:", total);

// MAP Function
const fruits = ["apple", "banana", "cherry"];
const upperFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(upperFruits);

// FILTER Function
const nums = [1, 2, 3, 4, 5, 6];
const evens = nums.filter(n => n % 2 === 0);
console.log(evens);
