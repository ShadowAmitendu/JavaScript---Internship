let testStrings = [
	"Shadow_123",
	"Email: user.name@example.com",
	"Phone: 987-654-3210",
	"Whitespace\tand\nnewlines",
	"Start and end",
	"Price: $199.99",
	"Repeat: ha ha ha",
	"2025-07-05",
	"NoDigitsHere!",
	"Match this and only this!",
];

console.log("1.", /\w+/g.exec(testStrings[0]));
console.log("2.", /\d+/g.exec(testStrings[0]));
console.log("3.", /\s/g.exec(testStrings[3]));
console.log("4.", /^Start/.test(testStrings[4]));
console.log("5.", /end$/.test(testStrings[4]));
console.log("6.", /[aeiou]/g.exec(testStrings[0]));
console.log("7.", /[^a-zA-Z0-9\s]/g.exec(testStrings[5]));
console.log("8.", /colou?r/.test("color"));
console.log("   ", /colou?r/.test("colour"));
console.log("9.", /(cat|dog)/.test("The dog ran"));
console.log("10.", /Repeat:.*/.exec(testStrings[6]));
console.log("11.", /\d{4}-\d{2}-\d{2}/.test(testStrings[7]));
console.log("12.", /Match(?= this)/.test(testStrings[9]));
console.log("13.", /Match(?! that)/.test(testStrings[9]));
console.log("14.", /(?<=Price: \$)\d+/.exec(testStrings[5]));

let allWords = [...testStrings[6].matchAll(/\w+/g)];
console.log(
	"15.",
	allWords.map(match => match[0])
);

console.log("16.", /shadow/i.test("sHaDoW_123"));
console.log("17.", /.adow/.test("Shadow_123"));
console.log("18.", /\$199\.99/.test(testStrings[5]));

let dynamic = "example";
let reg = new RegExp(dynamic, "i");
console.log("19.", reg.test(testStrings[1]));

let yRegex = /\d{3}/y;
yRegex.lastIndex = 7;
console.log("20.", yRegex.exec("Phone: 9876543210"));
