// STRING METHODS IN JS

let str = "Hello";
console.log(str.length);

console.log("hello".toUpperCase());
console.log("WORLD".toLowerCase());

let str2 = "Amit";
console.log(str2.charAt(1));

console.log("banana".indexOf("a"), "banana".lastIndexOf("a"));

console.log("techno".includes("no"));
console.log("JavaScript".startsWith("Java"), "index.js".endsWith(".js"));

let msg = "Hello World";
console.log(msg.slice(0, 5)); // "Hello"

console.log("Example".substring(1, 4));
console.log("   hello   ".trimEnd());
console.log("   hello   ".trim());
