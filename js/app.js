/*
1. Verbal questions

Write answers to the following questions as comments. As a reminder you can highlight your code and type command + / to turn your code into a comment.

// my commented answer
a. What is the difference between a parameter and an argument?

b. Within a function, what is the difference between return and console.log?

c. Explain the concept of scope in four (or fewer) concise sentences.
*/

/*

// A parameter is anything in the parentheses in a function delcaration. An argument is are the things in the parentheses of a function call.

// return returns a value. console.log prints out the stuff in parenthese to the console

c. scope refers to accessibility of variables in different parts of the code


/*
## 2. Palindrome
Write a function `checkPalindrome` that accepts a single argument, a string. The function should return true (Boolean) if the string is a palindrome, false if it is not. Make sure your function will give the correct answer for words with **capital letters**.  Additionally, make sure that spaces are ignored.
*/
// checks to see if a word is a palindrome
function palindrome(str)
{
// split string into array
  var arr = str.split("");
// reverse array
  arr = arr.reverse();
//
  var str2 = arr.join("");


// if second string equals the first string return true
  if(str2 == str){
    return true;
  }
  // if they are not equal return false
  return false;

}
/*
3. Digit Sum

Write a function sumDigits that accepts a number and returns the sum of its digits.

console.log(sumDigits(42));
=> 6;
*/

function sumDigits(num)
{
// declaring variable for array and setting it equal to and array of the letters
  var arr = num.toString().split("");

// initialize the sum
  var sum = 0;
// for loop that adds the digits
    for(var i = 0; i<arr.length; i++) {
       // add each digit to the sum of previous digits
	      sum = sum + parseInt(arr[i]);
    }
return sum;
}
/*
4. Pythagoras

Write a function calculateSide that takes two arguments: sideA and sideB, and returns the solution for sideC using the Pythagorean theorem.

hint: discover the Pythagorean Theorem on a website called google.com
hint: checkout the Math methods in javascript
*/

function calculateSide(sideA, sideB)
{
  // returns sqrt
return Math.sqrt(sideA * sideA + SideB * SideB)
}

// function that adds all number in an array
function sumArray(arr)
{  // for loop that iterates through array
  for(var i=0; i<arr.length; i++){
      // add numbers to previous sum
      sum = sum + arr[i];
    }
// return the sum
return sum;
}


function checkPrime(num)
{
  if(num < 0){
    // converts negative nums to positive nums
     num = Math.abs(num);
  }  // if num is one return true
  if(num === 1) {
    return true;
    // if num is zero return false
  }
  if(num === 0){
    return false;
  }
   //for loop to check the rest of the nums
  for(var i = 2; i<num; i++) {
    // if i number is
    if(num % i === 0){
      return false;
    }
  }
return true;
}
/*
7. Insert Dash

Write a function insertDash that accepts a number as a parameter and returns a string with a dash inserted between any consecutive odd numbers. There should not be a dash at the end, it goes only between numbers.
*/

// declare function printPrimes that takes one argument which is the limit.
function printPrimes(limit) {
    // the for loop iterates through the prime numbers up to the limit passed in as argument
    for(var i = 1; i<=limit; i++) {
    // call checkPrime to see if each iteration is Prime
      if(checkPrime(i)===true) {
          console.log(i);
      }
    }
}
// declare function that puts dash inbetween two odd numbers
function insertDash(num) {
  // turns string into array
  var arr = num.toString().split("")
  // for loop that iterates through the digits
  for(i=0; i<arr.length; i++) {
    // compares consecutive digits to see if both are odd
    if(parseInt(arr[i])%2===1 && parseInt(arr[i+1])%2===1)
    { // inserts dash between odd numbers
      arr.splice(i+1,0,"-");
    }
  }

// turn array into a number
arr = arr.join("");
// return number
return arr;
}
