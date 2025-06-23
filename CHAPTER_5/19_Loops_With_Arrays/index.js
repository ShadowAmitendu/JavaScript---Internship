// Loops with Array!

let arr = [2, 4, 5, 8, 5, 41, 32, 845, 321, 561, 456, 213];

// iterating using for loop:
for (let i = 0; i < arr.length; i++) {
	console.log(arr[i]);
}

// iterating using forEach loop:
arr.forEach(element => {
	console.log(element * element);
});

// iterating using for...in loop
for (const item in arr) {
	console.log("Elements: ", item);
}

// iterating using for...of loop
for (const item of arr) {
	console.log("Elements: ", item);
}

//convering object to an array
let a = "Parag Chatterjee";
let b = Array.from(a);

for (const element of b) {
	console.log(element);
}
