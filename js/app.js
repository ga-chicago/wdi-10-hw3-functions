

// 1. Verbal Questions 

// a parameter is a variable that is part of the functions signature.
// an argument is the variable that is used in calling the function to output in response to the given arguments

// console.log simply prints out a result to the console
// return returns a result to be used or manipulated more in the code

// scope regards how and where you can use certain functions and variables.
// When a function or variable is stated while nested in a larger function than it cannot be used outside of where it is stated (local). 
// When a function or variable is stated un nested it can be used anywhere (global).

// 2. Palindrome

// function checkPalindrome(word) {
// 	let cap = word.toUpperCase();
// 	let flip = cap.split("").reverse().join("");
// 	return cap === flip;
// 	console.log(cap === flip);
// }

// 3. Digit Sum

// function sumDigits(int) {
// 	let stringInt = int.toString();
// 	let output = [];
// 	let sum = 0;
// 	for (var i = 0; i < int.length; i++) {
//     	output.push(stringInt.charAt(i));
// 	}

// 	for (i=0; i < output.length; i++) {
// 		sum += output[i];
// 	}
		
// 		console.log(sum);
// }

// 4. Pythagorus

// function calculateSide(sideA, sideB) {
// 	let sideC = Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
// 	console.log(sideC);
// }

// 5. Sum Array

function sumArray(arr) {
	let sum = 0;
	for (i=0; i < arr.length; i++) {
		sum += arr[i];
	}
	console.log(sum);
}