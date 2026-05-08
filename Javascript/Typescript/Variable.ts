// Variable in TypeScript
export {};

/*
Variable is a container for storing data values.

In TypeScript, variables can be declared using:
1. let   -> value can be changed
2. const -> value cannot be changed
3. var   -> old way (function scoped, not recommended)

Examples:
*/

// String variable
let courseName: string = 'TypeScript';
console.log(courseName);

// Number constant
const pi: number = 3.14;
console.log(pi);

// Number variable using var
var age: number = 25;
console.log(age);

// Declaring variable first and assigning later
let userName: string;
userName = 'Akshay';
console.log(userName);

// Type inference
// TypeScript automatically understands the datatype
let city: string = 'New York';
console.log(city);

// Boolean variable
let isStudent: boolean = true;
console.log(isStudent);

// This will give an error because boolean variable
// cannot store string value

// isStudent = 'yes';