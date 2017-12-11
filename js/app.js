/*

<!-- a. What is the difference between a parameter and an argument? -->

A paramerter are place holders for creating a function whereas arguments are the actual vaules themselves. var answer = function (a,b,c), A, B, C are the parameters and when invoking that same function answer(1,2,3) 1, 2, 3, are teh arguments. 

<!-- b. Within a function, what is the difference between return and console.log? -->

Console.log prints out the result of a line of code and continues (debugging), Return does the same but ends the code (print).


<!-- c. Explain the concept of scope in four (or fewer) concise sentences. -->

Scope has two loactions a "global" and a "Local", global variables are inclusive so any fucntion can use them and local variables are exclusive so no other fuction can use them.



function checkPalindrome (str){
     var caseString = str.toLowerCase().split("").filter(c => c != ' ').join("");
     var reverseString = caseString.split("").reverse().join("");
     return reverseString == caseString;
 }


<!-- Digital Sum -->

*/

function dS(num) {

    var tS = num.toString();
    var splitNum = tS.split("");


    let sum = 0;
    for (i = 0; i < splitNum.length; i++) {
        sum = sum + parseInt(splitNum[i]);

    }
    return sum;
}

