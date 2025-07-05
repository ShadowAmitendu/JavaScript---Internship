const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
	res.send("Parags Home Page!");
});

app.get("/contact", (req, res) => {
	res.send("Contact Page!");
});

app.get("/about", (req, res) => {
	res.send("Parag's About Page!");
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
