/* Just some random Numbers */
const TAX_RATE = 0.08;
const PHONE_PRICE = 100;
const ACCESSORY_PRICE = 10;
const SPENDING_TRESHOLD = 200;

var bankAccountBalance = 0;
var amount = 0;

/* Get Users BankAccountBalance */
bankAccountBalance = prompt("Please enter your Bank Account Balance:");


 function calculateTax(amount){
	return amount + (amount * TAX_RATE);
 }

function formatAmount(amount) {
	return "$" + amount.toFixed(2);
}

// buy phones while you have money
while (bankAccountBalance>amount) {
	amount = amount + PHONE_PRICE;


// can you afford the accessory?
if (amount<SPENDING_TRESHOLD) {
	amount = amount + ACCESSORY_PRICE;
	}
}

// pay the tax
amount = calculateTax(amount);

console.log ("Your purchase: " + formatAmount (amount));

// can you afford it?
if(amount > bankAccountBalance) {
	console.log("You can't afford this purchase, sorry.");
} else {
	console.log("You can afford this purchase, congratulations!");
}
	
	
	
	
	
	
	
	

