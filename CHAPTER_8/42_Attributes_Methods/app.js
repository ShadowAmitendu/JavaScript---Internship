function manipulateAttributes() {
	let el = document.getElementById("userCard");

	console.log("Title:", el.getAttribute("title"));
	console.log("Class:", el.getAttribute("class"));

	el.setAttribute("title", "Updated Profile");
	el.setAttribute("data-status", "active");
	el.setAttribute("style", "color: teal; font-weight: bold;");

	console.log("Has 'id'? ", el.hasAttribute("id"));
	console.log("Has 'data-email'? ", el.hasAttribute("data-email"));

	el.removeAttribute("class");

	console.log("All attributes:");
	for (let attr of el.attributes) {
		console.log(attr.name + " = " + attr.value);
	}

	console.log("User ID:", el.dataset.userId);
	console.log("Role:", el.dataset.role);
	console.log("Status:", el.dataset.status);

	el.dataset.role = "admin";
	console.log("Updated Role:", el.dataset.role);
}
