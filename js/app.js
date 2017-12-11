//******************VERBAL QUESTIONS*************************
// a. Paramter and Argument difference ~ a parameter is a variable you declare in the parentheses of a function and
// the argument is the value you assign to the parameter.

// b. Within a function the difference between RETURN and CONSOLE.LOG ~ console.log will log anything into the console.
// Inside of a function if will print any value you place inside it. The return statement will end the function and
// retun a specified value to the function caller.

// c. Concept of Scope ~ scope is the context in which the values and expressions are visable (or useable) for reference.
// The clearest example of this is local variables that are only defined inside a given function or a global variable
// which can be accesed from anywhere in the code.

//*****************PALINDROME*********************************
function checkPalindrome (str){
    var caseString = str.toLowerCase().split("").filter(c => c != ' ').join("");
    var reverseString = caseString.split("").reverse().join("");
    return reverseString == caseString;
}
console.log( checkPalindrome("RaDar") );
// convert all to lowercase then turn to array with split then use filter to loop through each charater and removes the space charaters and then use join to convert back to a string // turn back into array to reverse then back into a string // then check for equality

//****************DIGIT SUM************************************
function sumDigits(num){

}
sumDigits(42);

//*****************PRIME NUMBERS********************************
function checkPrime(num){
    for(let i=2; i <= Math.sqrt(num); i++){
        if(num % i === 0) {
            return false
        }
    }
    return true;
}

function printPrimes (limit){
    for(let i=1; i <= limit; i++){
        if (checkPrime(i)) {
            console.log(i);
        }
    }
}
printPrimes(97);