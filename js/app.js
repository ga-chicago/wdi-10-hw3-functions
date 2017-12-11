		// 1. verbal questions

// a. parameters are the aliases for the values that will be passed through a funciont, arugments are the actual values
// b. return will stop a function from executing where console.log only prints the called parameter
// c. Scope affects where a variable can be used. Variables used outside of a funciton have global scope and can be used anwyere. Functions called inside of functions only have scope within that funciton.


	// 2. Palindrome

// const checkPalindrome = (str) => {
// 	let lowerCaseStr = str.toLowerCase()

// 	if(lowerCaseStr === lowerCaseStr.split("").reverse().join("")){
// 		return str + " is a palindrome";
// 	} else	{
// 		return str + " is not a palindrome";
// 	};
// };


	// 3. Digital Sum

// const sumDigits = (num) => {
// 	let numArray = num.toString().split("");
// 	let sum = 0
	
// 	for(i = 0; i < numArray.length; i++){
// 		sum = sum + parseInt(numArray[i], 10);
// 	};
// 	return "The sum of the digits in " + num + " is " + sum;
// };


// 	4. Pythagoras

// const calculateSide = (sideA, sideB) => {
// 	let sideC = Math.sqrt(Math.pow(sideA,2)+Math.pow(sideB, 2));
// 	return "The hypotanus of a triangle with sides of " + sideA + " & " + sideB + " is " + sideC
// }


	// 5. Sum Array

// const sumArray = (numArray) => {
// 	let sum = 0
// 	for(i = 0; i < numArray.length; i++){
// 		sum = sum + numArray[i];
// 	};
// 	return "The sum of " + numArray + " is " + sum;
// };


	// 6. Prime Numbers

// const checkPrime = (num) => {
// 	let sqrtOfNum = Math.sqrt(num);

// 	if (num ===1) {
// 		return num + " is not a prime number";
// 	}
// 	else{
// 		for(i = 2; i <= sqrtOfNum; i++){
// 			if (num % i === 0) {
// 				return num + " is not a prime number";
// 			};
// 		}; console.log(num + " is a prime number");
// 	};
// };

// const printPrimes = (limit) => {
// 	for(j = 1; j <= limit; j++){
// 		checkPrime(j);
// 	};
// };



	// 7. Insert Dash

function insertDash (num) {
	let strArray  = num.toString().split(""); //change number into a string array
	let numArray = [] //create an empty array to store the numbers
	
	for(i = 0; i < strArray.length; i++) { //interate through the array
		// add the digit
		numArray.push(strArray[i])

		// if this digit is odd AND the next digit is odd
		if (strArray[i] % 2 == 1 && strArray[i+1] % 2 == 1) {
			// add dash to output
			numArray.push("-");
		}
	}
	return numArray.join("")
}





