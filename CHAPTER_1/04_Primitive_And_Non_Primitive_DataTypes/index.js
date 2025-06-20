// There are 7 types of Primitive DataType:
// NULL, NUMBER, BIGINT, BOOLEAN, STRING, SYMBOL, UNDEFINED

let a = null; //NULL
let b = 356; //NUMBER
let c = true; //BOOLEAN
let d = BigInt("575"); // BIGINT
let e = "THIS IS DAS SOLUTIONS!"; //STRING
let f = Symbol("HELLO THIS IS A SYMBOL!"); //SYMBOL
let g = undefined; // UNDEFINED

console.log(
	typeof a,
	"\n",
	typeof b,
	"\n",
	typeof c,
	"\n",
	typeof d,
	"\n",
	typeof e,
	"\n",
	typeof f,
	"\n",
	typeof g
);
console.log(a, b, c, d, e, f, g);
//best way to remember is to use NNBBSSU as SHORT FORM!
// Now on Non-Primitive Datatypes
// objects are created like this:

let myData = {
	NAME: "AMITENDU",
	COURSE: "BCA",
	INTERNSHIP: "DAS SOLUTIONS",
	UNI_ROLL_NO: 10,
};

console.log(myData);
console.log(typeof myData);
