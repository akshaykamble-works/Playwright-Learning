/*
Data conversion in JavaScript refers to the process of converting data from one type to another. This can be done using various methods and functions provided by JavaScript. Here are some common data conversion techniques:

1. String to Number:
   - Using the Number() function: 
     let str = "123";
     let num = Number(str); // num will be 123 (number)
   - Using the parseInt() function:
     let str = "123";
     let num = parseInt(str); // num will be 123 (number)
   - Using the parseFloat() function for decimal numbers:
     let str = "123.45";
     let num = parseFloat(str); // num will be 123.45 (number)

*/
let str = "123";
let num = Number(str); // num will be 123 (number)
console.log("String to Number using Number():", num); // Output: 123

let num2 = parseInt(str); // num2 will be 123 (number)
console.log("String to Number using parseInt():", num2); // Output: 123

let Number1="123";
let Number2=4;
console.log(Number1+Number2); // Output: 1234 (string concatenation)
console.log(Number(Number1)+Number2); // Output: 127 (number addition)