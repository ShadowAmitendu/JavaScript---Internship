// More ARRAY Methods
let fruits = ["Apple", "Banana", "Mango"];

// Slice
let sliced = fruits.slice(1, 3);
console.log("Sliced Fruits:", sliced);

// Splice
fruits.splice(1, 1, "Kiwi");
console.log("After splice (replace index 1):", fruits);

// Join array into a string
console.log("Fruits as CSV:", fruits.join(", "));

console.log("Fruits:", fruits);

delete fruits[2];
console.log("Final Fruits:", fruits);

fruits.reverse();
console.log("Final Fruits:", fruits);

let boys = ["Amit", "Ravi"];
let girls = ["Priya", "Sneha"];

// Concatination like strings but in array
let students = boys.concat(girls);
console.log(students);
console.log(students.sort());
