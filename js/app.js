// 1. Verbal Questions -------------------------------------
// a. A parameter is defined with the function and acts as the receiver for the argument that is sent with the function call.
// b. return stops and exits the function and returns the value determined by the code after the return statement. Console.log just logs out its argument into you console
// c. The scope of a variable is local to its code block {}. Scope is meant to keep variables from getting unwanted changes by other lines of code.

// 2. Palindrome --------------------------------------------
function palindrome(str) {
	str = str.toLowerCase();
	let arr = str.split("");
	arr = arr.reverse();
	let str2 = arr.join("");

	if (str2 == str) {
	return true;
	}	return false;
}

console.log("2. Palindrome:");
console.log("Mom: " + palindrome("moM"));
console.log("Aunt: " + palindrome("AuNt"));
console.log(" ");


// 3. Digit Sum -----------------------------------------------
function sumDigits(numb) {
	let arr = numb.toString().split("");
	let sum = 0;
	
	for(let i = 0; i<arr.length; i++) {
    sum += parseInt(arr[i]);
	} return sum
}

console.log("3. Digit Sum:");
console.log("555 equals " + sumDigits(555));
console.log(" ");

// 4. Pythargoras ---------------------------------------------
function calculateSide(sideA, sideB){
	return Math.sqrt((sideA * sideA) + (sideB * sideB));
}

console.log("4. Pythagoras:");
console.log("8 and 6 = " + calculateSide(8,6));
console.log(" ");

// 5. Sum Array -----------------------------------------------
function sumArray(arr){
	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	};
	return sum;
}

console.log("5. Sum Array:");
console.log("Sum of the digits 1,2,3,4,5,6 equals " + sumArray([1, 2, 3, 4, 5, 6]));
console.log(" ");

// 6. Prime numbers -------------------------------------------
function checkPrime(num){
	if (num === 1){
		return false
	} else if (num === 2){
		return true;
	} else {
		for (let i = 2; i < num; i++){
			if (!(num % i)) {
				return false;
			} 
		}
		return true;
	}
}

console.log("6. Prime numbers:");
console.log("1: " + checkPrime(1));
console.log("2: " + checkPrime(2));
console.log("3: " + checkPrime(3));
console.log("4: " + checkPrime(4));
console.log("5: " + checkPrime(5));
console.log("6: " + checkPrime(6));
console.log("7: " + checkPrime(7));

console.log("6. Print Primes:");
function printPrimes(numm){
	for (let i = 1; i <= numm; i++) {
		if (checkPrime(i) === true) {
			console.log(i);
		}
	};
}

console.log("150: " + printPrimes(150));

// 7. Insert Dash ---------------------------------------------
function insertDash(num){
	let numArray = num.toString().split("");
	let bucket = "";
	let oddArray = ["1","3","5","7","9"];

	for (var i = 0; i < numArray.length; i++) {
		if (!(oddArray.includes(numArray[i]))) { //Checks if even digit 
			bucket += numArray[i]; // Send even digit to the bucket
		} else if (oddArray.includes(numArray[i])) { //Checks if digit is odd 
			if (oddArray.includes(numArray[i-1])) { //Checks if the next element is also odd
				bucket += "-";
			}
			bucket += numArray[i];
		}
	}
	return bucket;
}

console.log("7. Insert Dash");
console.log(insertDash(454793));





