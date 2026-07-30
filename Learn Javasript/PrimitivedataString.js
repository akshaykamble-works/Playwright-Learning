/*
String is a primitive data type in JavaScript that represents a sequence of characters.
It is used to store and manipulate text. Strings can be created using single quotes (' '),
double quotes (" "), or backticks (` `) for template literals.
*/
let name='Ashwini'; // string
let city="Pune"; // string
let country=`India`; // string

console.log(name);
console.log(city);
console.log(country);

console.log(typeof name);
console.log(typeof city);
console.log(typeof country);

// String concatenation
let firstName='Ashwini';
let lastName='Sable';
let fullName=firstName + ' ' + lastName; // concatenation using +
console.log(fullName);
console.log(firstName.toUpperCase()); // convert to uppercase
console.log(lastName.toLowerCase()); // convert to lowercase

// String length
let message='Hello, welcome to JavaScript!';
console.log(message.length); // length of the string

// Accessing characters in a string
console.log(message[0]); // first character
console.log(message[message.length - 1]); // last character

// String methods
let str='JavaScript is fun!';
console.log(str.includes('fun')); // check if substring exists
console.log(str.indexOf('is')); // index of substring
console.log(str.replace('fun', 'awesome')); // replace substring    
// trim whitespace
let strWithSpaces='   Hello World!   ';
console.log(strWithSpaces.trim()); // remove leading and trailing whitespace