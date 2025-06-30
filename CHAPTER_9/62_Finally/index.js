function withdrawMoney(balance, amount) {
	try {
		console.log("Processing your request...");

		if (amount > balance) {
			throw new Error("Insufficient balance");
		}

		balance -= amount;
		console.log(`Please collect ₹${amount}`);
	} catch (error) {
		console.log("Transaction failed:", error.message);
	} finally {
		console.log("Thank you for using the ATM.");
	}
}

// Testing the function
withdrawMoney(500, 300); // Successful
withdrawMoney(500, 600); // Error: Not enough balance
