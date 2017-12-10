//1a.
//a parameter is a preset variable designed to a function, an argument is the value passed through the function when it is called for

//1b.
//return stops the execution of a function and returns whatever expression is designated. console.log logs the result of an expression in the console

//1c.
//scope determines where in a script certain variables can be called for. variables declared globally are accessible anywhere. however, variables declared a function are local variables that are only available within that function 


//2

function checkPalindrome(str) {
	let cleanStr = str.split(' ').join('').toLowerCase();
	let arr = cleanStr.split('');
	let arrEnd = arr.length - 1;
	for (let i = 0; i <= Math.floor(arr.length / 2); i++) {
		if (arr[i] !== arr[arrEnd - i]) {
			return false;
		}
		else {
			return true;
		}
	}
}

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

// sumDigits(123); // 6
// sumDigits(55555); // 25
// sumDigits(2317497); // 33


//4

function calculateSide(sideA, sideB) {
	let num = Math.pow(sideA, 2) + Math.pow(sideB, 2);
	let solution = Math.sqrt(num);
	return console.log(solution);
}

// calculateSide(8,6); //10
// calculateSide(10,14); //17.204
// calculateSide(15, 20); //25


//5

function sumArray(arr) {
	let sum = 0;
	for (let i = 0; i <= arr.length - 1; i++) {
		sum += arr[i];
	}
	return console.log(sum);
}

// sumArray([1,3,7,10]); //21
// sumArray([0.2,6,-1,10]); //15.2
// sumArray([2,8,10,0,1,1,1]); //23


//6

function checkPrime(num) {
	let isPrime = true;
	let numRoot = Math.sqrt(num);
	for (let i = 2; i <= numRoot; i++) {
		if (Number.isInteger(num / i)) {
			isPrime = false;
		}
	}
	return isPrime;
}

// console.log(checkPrime(11)); //true
// console.log(checkPrime(9)); //false
// console.log(checkPrime(181)); //true

function printPrimes(max) {
	for (let i = 2; i <= max; i++) {
		if (checkPrime(i)) {
			console.log(i+" is a prime number.");
		}
		else {
			console.log(i+" is not a prime number.");
		}
	}
}


//7

function insertDash(num) {
	let arr = num.toString().split('');
	let oddNum = false;
	let withDash = [];
	withDash.push(arr[0]);
	arr[0] % 2 === 1 ? oddNum = true : oddNum;
	for (let i = 1; i <= arr.length - 1; i++) {
		if (oddNum === true && Number(arr[i]) % 2 !== 0) {
			withDash.push("-"+arr[i]);
			oddNum = true;
		}
		else if (oddNum === false && Number(arr[i]) % 2 !== 0) {
			withDash.push(arr[i]);
			oddNum = true;
		}
		else {
			withDash.push(arr[i]);
			oddNum = false;
		}
	}
	let solution = "";
	for (let i = 0; i < withDash.length - 1; i++) {
		solution += withDash[i];
	}
	return console.log(solution);
}


insertDash(213652781395); //21-3652781-3-9






