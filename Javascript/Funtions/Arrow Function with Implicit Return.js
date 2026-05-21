/*
Arrow Function with Implicit Return in javascript is a concise way to write functions that return a value without explicitly using the 'return' keyword.
When an arrow function consists of a single expression, you can omit the curly braces and the 'return' keyword. 
The value of that expression will be implicitly returned.

The syntax for an arrow function with implicit return is as follows:
const functionName = (parameters) => expression;

In this case, the expression is evaluated and its result is automatically returned by the function. This makes the code more concise and easier to read, especially for simple functions that perform a single operation.

In the examples below, we will see how to define and use arrow functions with implicit return in JavaScript.

*/
const add = (a, b) => a + b;

console.log(add(10, 5));