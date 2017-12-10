/*
## 2. Palindrome
Write a function `checkPalindrome` that accepts a single argument, a string. The function should return true (Boolean) if the string is a palindrome, false if it is not. Make sure your function will give the correct answer for words with **capital letters**.  Additionally, make sure that spaces are ignored.
*/

function palindrome(str)
{
console.log("this is first string" + str)
var arr = str.split("");
console.log(arr);
arr = arr.reverse();
console.log(typeof(arr));
var str2 = arr.join("")
console.log("this is second string" + typeof(str2));


if(str2 == str)
{
return true
}
return false

}
/*
3. Digit Sum

Write a function sumDigits that accepts a number and returns the sum of its digits.

console.log(sumDigits(42));
=> 6;
*/

function sumDigits(num){
var arr = num.toString().split("");
console.log(arr);
var sum = 0;
for(var i = 0; i<arr.length; i++)
{
	sum = sum + parseInt(arr[i]);
}
return sum


}
