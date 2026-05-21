/*
Function Expression in javascript is a way to define a function as part of an expression.
It allows you to create a function and assign it to a variable, pass it as an argument to another function, or return it from another function.
Function expressions can be anonymous (without a name) or named (with a name).

The syntax for a function expression is as follows:
const functionName = function(parameters) {
    // function body
};

Function expressions are often used in situations where you want to create a function on the fly,
such as when working with callbacks or when you want to create a function that is only used within a specific scope.
They provide flexibility and can help improve code readability by allowing you to define functions in the context where they are needed.
*/
const message = function () {
    console.log("Welcome to JavaScript");
};

message(); // Output: Welcome to JavaScript
console.log("============================================");
// Example 2: Function expression with parameters
const greet = function (name) {
    console.log("Hello, " + name + "!");
};

greet("Alice"); // Output: Hello, Alice!
greet("Bob"); // Output: Hello, Bob!
console.log("============================================");
// Example 3: Function expression with return value
const add = function (a, b) {
    return a + b;
};

let sum = add(5, 10);
console.log("Sum:", sum); // Output: Sum: 15            