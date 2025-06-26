// DOM MANIPULATION

const elementBodyColor = () => {
	document.body.firstElementChild.style.background = "red";
};

let body = document.body;

console.log(body.firstChild);
console.log(body.firstElementChild);

elementBodyColor();
