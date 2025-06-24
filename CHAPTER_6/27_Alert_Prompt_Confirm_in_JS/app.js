// using window - methods

window.alert("HEY! ENTER A NUMBER");
let a = window.prompt("Enter the Number:");
a = Number.parseInt(a);
window.alert("You entered a number of type: " + typeof a);
let write = window.confirm("DO YOU WANT TO WRITE IT IN BROWSER!");
if (write) {
	document.write(a);
} else {
	document.write("To show the number here please click OK");
}
