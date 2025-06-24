// QUESTION: Write a program to change the URL to google.com (i.e., redirect) if the user enters a number greater than 4.
// SOLUTION:
let num = prompt("Enter a number:");

num = Number(num);

if (num > 4) {
	location.href = "https://www.google.com"; // Redirects to Google
}
