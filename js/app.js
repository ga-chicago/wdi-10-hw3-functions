// Verbal Questions
// a: A parameter is is the argument that a function will take when called.

// b: Return is the actual output of a block of code, console.log is something that is just being printed to the console.

// c: Scope comes in two varieties: local and global. If we think about it in terms of a box containing scope, global scope is available both inside and out side of the box. Local scope is only available inside of the box.

// Palindrome
function checkPalindrome (palindrome) {
	// convert palindrom to lowercase and turn to an array of characters
	smallCasePal = palindrome.toLowerCase().split("").join("")
	// create another array that is the reverse of the first
	var reversePalindrome = palindrome.split("").reverse().join("").toLowerCase()
	// compare the arrays, if they match, return true, if not return false
	if (smallCasePal === reversePalindrome) {
		return true;
	}; 
	return false;
}

// Digit Sum
const reducer = (accumulator, currentValue) => accumulator + currentValue;
// reducer is taking 2 numbers in the array, adding them to each other and then adding to current value, and so on. NEED THIS FUNCTION TO USE .reduce().

function sumDigits(number) {
	// turn the number into an array of WHOLE integers
	// How: make a string, split the string, use . map to make numbers (from library)
	let numArray = number.toString(10).split("").map(Number)
	// 10 = radix number (so 0-9)
	return numArray.reduce(reducer);
}

// Pythagoras
function calculateSide(sideA, sideB) {
	// sideA squared + sideB squared = sideC squared
	let sideCSquare = (Math.pow(sideA, 2) + Math.pow(sideB, 2))
	// return square root of squareC
	let sideC = Math.sqrt(sideCSquare)
	return sideC
}


