//1a.
//a parameter is a preset variable designed to a function, an argument is the value passed through the function when it is called for

//1b.
//return stops the execution of a function and returns whatever expression is designated. console.log logs the result of an expression in the console

//1c.
//scope determines where in a script certain variables can be called for. variables declared globally are accessible anywhere. however, variables declared a function are local variables that are only available within that function 


//2

// function checkPalindrome(str) {
// 	let cleanStr = str.split(' ').join('').toLowerCase();
// 	let arr = cleanStr.split('');
// 	let arrEnd = arr.length - 1;
// 	for (let i = 0; i <= Math.floor(arr.length / 2); i++) {
// 		if (arr[i] !== arr[arrEnd - i]) {
// 			return false;
// 		}
// 		else {
// 			return true;
// 		}
// 	}
// }

// console.log(checkPalindrome('race car')); // true
// console.log(checkPalindrome('rAcE cAR')); // true
// console.log(checkPalindrome('james bardoLPh')); // false
// console.log(checkPalindrome('ab b c bb a')); // true


//3

function sumDigits(num) {
	let numStr = num.toString();
	let arr = numStr.split('');
	let solution = 0;
	for (let i = 0; i <= arr.length - 1; i++) {
		solution += parseInt(arr[i], 10);
	}
	return console.log(solution);
}

sumDigits(123); // 6
sumDigits(55555); // 25
sumDigits(2317497); // 33






