// innerHTML and outerHTML

let el = document.getElementById("box");
console.log(el.innerHTML);

el.innerHTML = "Hi <i>there</i>";

console.log(el.outerHTML);

el.outerHTML = "<section>New Element</section>";
