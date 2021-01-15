function add(num1, num2) {
	return num1 + num2;
}

console.log(add(1, 5)); //6
console.log(add(12, 15)); //27

function addRandom(num1) {
	return num1 + Math.random();
}

console.log(addRandom(5));

let previousResult = 0;

function addMoreNumbers(num1, num2) {
	const sum = num1 + num2;
	previousResult = sum;
	return sum;
}

console.log(addMoreNumbers(1, 5));

const hobbies = ['sports', 'cooking'];

function printHobbies(h) {
	h.push('new hobby');
	console.log(h)
} 

printHobbies(hobbies);

let multiplier = 1.1;

function createTaxCalculator(tax) {
		function calculateTax(amount) {
			console.log(multiplier);
			return amount * tax * multiplier;
	}
	
	return calculateTax;
}

const calculateVatAmount = createTaxCalculator(0.19);
const incomeTaxAmount = createTaxCalculator(0.25);

multiplier = 1.2;

console.log(calculateVatAmount(100));
console.log(calculateVatAmount(200));

let userName = 'max';

function greetUser() {
	//let name = 'Anna';
	console.log('hi ' + name);
}

let name = 'Maximilian';

userName = 'manuel';

greetUser();

/*
function powerOf(x, n) {
	let result = 1;
	
	for (let i = 0; i < n; i++) {
		result *= x;
	}
	
	return result;
}
*/

function powerOf(x, n) {
	
//	if (n === 1) {
//		return x;
//	}
//	return x * powerOf(x, n - 1);
	
	return n === 1 ? x : x * powerOf(x, n - 1);
}

console.log(powerOf(2, 3));





























