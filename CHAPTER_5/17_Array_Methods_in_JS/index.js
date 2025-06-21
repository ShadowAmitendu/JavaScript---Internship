// Methods in Arrays

let fruits = ["Apple", "Banana", "Mango"];

console.log("Initial Fruits:", fruits);

// Add elements at the end and start
fruits.push("Orange");
fruits.unshift("Pineapple");
console.log("After push & unshift:", fruits);

// Remove elements from start and end
fruits.pop();
fruits.shift();
console.log("After pop & shift:", fruits);

// Modify 2nd element
fruits[1] = "Grapes";
console.log("After modifying index 1:", fruits);

// Check if an element exists
console.log("Is 'Mango' in the list?", fruits.includes("Mango"));
console.log("Index of 'Mango':", fruits.indexOf("Mango"));

console.log("Final Fruits:", fruits);
