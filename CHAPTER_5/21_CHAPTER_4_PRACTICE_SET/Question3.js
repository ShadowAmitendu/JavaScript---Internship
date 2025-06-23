// QUESTION: Filter for numbers divisible by 10 from a given array.
// SOLUTION:

const numbers = [10, 25, 30, 42, 50, 63];

let divisibleBy10 = numbers.filter(num => num % 10 == 0);

console.log("Divisible by 10:", divisibleBy10);
