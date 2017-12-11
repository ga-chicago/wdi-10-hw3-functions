// question 1


// parametes are the names listed in the function definitinon and agruments are the real
//reall values passed to the function

// b. a console prints out the function and a return returns the value of the function

// c. Scope determines the accessibility of variables, objects, and functions from 
//different parts of the code.   

function checkPalindrome(str); 
var arrayOfLetters = str.split("");
arrayOfLetters = arrayOfLetters.reverse();
var str2 = arrayOfLetters.join("");


if checkPalindrome(str)	{
	var checkPalindrome = true;

}


//question 3
// function sumDigits(num){
// 	// string is now a string version of num
// 	var str = num.toString()
// 	// digitArray is now an array with each digit as a character
// 	var digitArray = str.split("");
// 	console.log(arr);
// var sum = 0;
function sumDigits(num)
{

  var arr = num.toString().split("");

console.log(arr);
  var sum = 0 ;

    for(var i = 0; i<arr.length; i++)
    {
      
	      sum = sum + parseInt(arr);
    }
return sum
}


// question 4
function calculateSide(sideA, sideB) {
 var sideC = sideA * sideA + sideB * sideB;
// sidec = a ^2 + b^2 
 	return sideC
}




// question 5
function sumArray(sum){

var sumArray = [1, 2, 3, 4, 5];
var sum = 0;
for(var i = 0; i < sumArray.length; i++) {
    num += nums[i];
}



}


//question 6

function checkPrime(num);{
	for(var i = 2; i < value; i++){
		if(value % i === 0) {
			return false;
		}
	}




//question 7