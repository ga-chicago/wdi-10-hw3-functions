// Verbal Questions
// a: A parameter is is the argument that a function will take when called.

// b: Return is the actual output of a block of code, console.log is something that is just being printed to the console.

// c: Scope comes in two varieties: local and global. If we think about it in terms of a box containing scope, global scope is available both inside and out side of the box. Local scope is only available inside of the box.

// Palindrome
function checkPalindrome (palindrome) {
	smallCasePal = palindrome.toLowerCase().split("").join("")
	var reversePalindrome = palindrome.split("").reverse().join("").toLowerCase()
	if (smallCasePal === reversePalindrome) {
		return true;
	}; 
	return false;
}

// Digit Sum
const reducer = (accumulator, currentValue) => accumulator + currentValue;

function sumDigits(number) {
	let numArray = number.toString(10).split("").map(Number)
	return numArray.reduce(reducer);
}


