/*
String Data Type in JavaScript
In JavaScript, a string is a sequence of characters used to represent text.
Strings can be defined using single quotes (' '), double quotes (" "), or backticks (` `).
The backticks allow for template literals, which can include embedded expressions.


*/
let name = 'Akshay';
console.log("Name value is:",name); // Output: Akshay
console.log("Type of name variable is:",typeof name); // Output: string
console.log("Length of name variable is:",name.length); // Output: 6
console.log("First character of name variable is:",name[0]); // Output: A
console.log("Last character of name variable is:",name[name.length - 1]); // Output: y
console.log("Uppercase name variable is:",name.toUpperCase()); // Output: AKSHAY
console.log("Lowercase name variable is:",name.toLowerCase()); // Output: akshay
console.log("Substring of name variable is:",name.substring(0, 3)); // Output: Aks
console.log("Replacing character in name variable:",name.replace('A', 'J')); // Output: Jkshay
console.log("Checking if name variable includes 'shay':",name.includes('shay')); // Output: true
console.log("Splitting name variable into an array:",name.split('')); // Output: ['A', 'k', 's', 'h', 'a', 'y'] 


// String concatenation using + operator
let firstName = 'John';
let lastName = 'Doe';
let fullName = firstName + ' ' + lastName;
console.log("Full Name value is:",fullName); // Output: John Doe

let greeting = "Hello, World!";
console.log("Greeting value is:",greeting); // Output: Hello, World!

let message = `Welcome to JavaScript!`;
console.log("Message value is:",message); // Output: Welcome to JavaScript!

// Using template literals to include variables in a string
let age = 30;
let info = `My name is ${name} and I am ${age} years old.`;
console.log("Info value is:",info); // Output: My name is Akshay and I am 30 years old. 
console.log(`The sum of 5 and 3 is ${5 + 3}`);
