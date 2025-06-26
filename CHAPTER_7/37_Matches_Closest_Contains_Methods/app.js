// MATCHES, CLOSEST, CONTAINS

const btn = document.querySelector(".btn");
const container = document.querySelector(".container");

// MATCHES
console.log(btn.matches(".special"));
console.log(btn.matches(".other"));

// CLOSEST
const nearestSection = btn.closest(".section");
console.log(nearestSection.className);

// CONTAINS
console.log(container.contains(btn));
console.log(btn.contains(container));
