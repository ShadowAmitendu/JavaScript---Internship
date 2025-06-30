// 1. Promise.resolve
const p1 = Promise.resolve("Resolved Immediately");

// 2. Promise.reject
const p2 = Promise.reject("Rejected Immediately");

// 3. Custom Promise with setTimeout
const p3 = new Promise(resolve => {
	setTimeout(() => resolve("Resolved after 1 second"), 1000);
});

// 4. Promise.all
const allPromise = Promise.all([p1, p3]);

// 5. Promise.race
const racePromise = Promise.race([p3, p2]);

// 6. Promise.allSettled
const allSettledPromise = Promise.allSettled([p1, p2, p3]);

// 7. Promise.any
const anyPromise = Promise.any([p2, p3]);

// --------- Using .then, .catch, .finally ----------

// Basic usage
p1.then(result => console.log("p1 then:", result))
	.catch(error => console.log("p1 catch:", error))
	.finally(() => console.log("p1 finally done"));

p2.then(result => console.log("p2 then:", result))
	.catch(error => console.log("p2 catch:", error))
	.finally(() => console.log("p2 finally done"));

p3.then(result => console.log("p3 then:", result)).finally(() =>
	console.log("p3 finally done")
);

// all()
allPromise
	.then(results => console.log("all() resolved:", results))
	.catch(error => console.log("all() error:", error));

// race()
racePromise
	.then(result => console.log("race() result:", result))
	.catch(error => console.log("race() error:", error));

// allSettled()
allSettledPromise.then(results =>
	console.log("allSettled() results:", results)
);

// any()
anyPromise
	.then(result => console.log("any() result:", result))
	.catch(error => console.log("any() error (all failed):", error));
