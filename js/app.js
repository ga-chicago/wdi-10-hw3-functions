

// 1. Verbal Questions 

// a parameter is a variable that is part of the functions signature.
// an argument is the variable that is used in calling the function to output in response to the given arguments

// console.log simply prints out a result to the console
// return returns a result to be used or manipulated more in the code

// scope regards how and where you can use certain functions and variables.
// When a function or variable is stated while nested in a larger function than it cannot be used outside of where it is stated (local). 
// When a function or variable is stated un nested it can be used anywhere (global).

// 2. Palindrome

function checkPalindrome(word) {
	let cap = word.toUpperCase();
	let flip = cap.split("").reverse().join("");
	return cap === flip;
	console.log(cap === flip);
}