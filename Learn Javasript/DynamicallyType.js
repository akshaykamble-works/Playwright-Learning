/*
javascript is a dynamically typed language, which means that you don't have to specify the data type of a variable when you declare it.
The data type is determined at runtime based on the value assigned to the variable. This allows for greater flexibility in your code
but it also means that you need to be careful with how you use variables, as their types can change unexpectedly.


*/
// example of dynamically typed language
let variable = 42; // variable is a number
console.log(variable); // Output: 42
console.log(typeof variable); // Output: number

variable = "Hello, World!"; // variable is now a string
console.log(variable); // Output: Hello, World!
console.log(typeof variable); // Output: string

variable = true; // variable is now a boolean
console.log(variable); // Output: true
console.log(typeof variable); // Output: boolean

variable = null; // variable is now null
console.log(variable); // Output: null
console.log(typeof variable); // Output: object (this is a known quirk in JavaScript)

variable = undefined; // variable is now undefined
console.log(variable); // Output: undefined
console.log(typeof variable); // Output: undefined

variable = { name: "Alice", age: 30 }; // variable is now an object
console.log(variable); // Output: { name: 'Alice', age: 30 }
console.log(typeof variable); // Output: object

variable = [1, 2, 3]; // variable is now an array
console.log(variable); // Output: [ 1, 2, 3 ]
console.log(typeof variable); // Output: object (arrays are also considered objects in JavaScript)

variable = function() { return "Hello!"; }; // variable is now a function
console.log(variable()); // Output: Hello!
console.log(typeof variable); // Output: function   