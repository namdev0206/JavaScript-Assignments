//  question 1  Add two Numbers
var a = 56;
var b = 44;
var sum = a + b;
console.log("the sum of the numbers is " + sum);

var a = parseInt(prompt("enter no. "));
var b = parseInt(prompt("enter no. ")) ;
var sum = a + b;
console.log("the sum of the numbers is " +  sum );



// question 2 Find if the conditions are obeyed or not?
var a = 6;
var b = 5;

if(a<10 && a>b){
    console.log("the condition is true");

}
else{
    console.log("false");

}

// question 3 Check the conditions

var a = 10;
var b = 50;
if (a % 10 == 0 && b % 10 == 0) {
    console.log("true");


}
else if (a % 10 != 0 && b % 10 != 0) {
    console.log("false");

}
else if (a % 10 == 0 || b % 10 == 0) {
    console.log("true");

}


// question 4 Find the first digit of a 4 digit number 
let number01 = 4567;
let firstDigit01 = Math.floor(number01 / 1000);
console.log(firstDigit01);  // Output: 4





// question 5  Find the last digit of a 4 digit number 
let number = 4567;
let firstDigit = Math.floor(number % 10);
console.log(firstDigit);  // Output: 7




// question 6 Find the remainder
 let a1 = 9;
 let b1 = 2;
 result1 = a1 % b1;

 console.log(result1);


// question 7 Multiply two Numbers
let a2 = 2;
let b2 = 5;
let result2 = a2 * b2 ;

 console.log(result2);


// question 8  Marks Calculator
let a3 = 50;
let b3 = 20;
let c3 = 100;
  
let result3 = a3 + b3 + c3;
console.log(result3);