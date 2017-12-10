// 1. Verbal Questions -------------------------------------
// a. A parameter is defined with the function and acts as the receiver for the argument that is sent with the function call.
// b. return stops and exits the function and returns the value determined by the code after the return statement. Console.log just logs out its argument into you console
// c. The scope of a variable is local to its code block {}. Scope is meant to keep variables from getting unwanted changes by other lines of code.

// 2. Palindrome --------------------------------------------
// function palindrome(str) {
// 	str = str.toLowerCase();
// 	let arr = str.split("");
// 	arr = arr.reverse();
// 	let str2 = arr.join("");

// 	if (str2 == str) {
// 	return true;
// 	}	return false;
// }

// console.log("Palindrome mom " + palindrome("moM"));
// console.log("Palindrome  aunt " + palindrome("AuNt"));


// 3. Digit Sum -----------------------------------------------
function sumDigits(num) {
	let arr = num.toString().split("");
	let sum = 0;
	
	for(var i = 0; i<arr.length; i++) {
    sum += parseInt(arr[i]);
	} return sum
}
console.log("sumDigits 555 is " + sumDigits(555));