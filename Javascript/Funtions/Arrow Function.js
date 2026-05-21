/*
Arrow Function in JavaScript is a concise way to write functions.
It was introduced in ES6 (ECMAScript 2015) and provides a shorter syntax compared to traditional function expressions.
Arrow functions are anonymous and do not have their own 'this' context, which makes them particularly useful for certain scenarios,
such as when working with callbacks or when you want to preserve the 'this' value from the surrounding context.

The syntax for an arrow function is as follows:
const functionName = (parameters) => {
    // function body
};

If the function has only one parameter, you can omit the parentheses around the parameter. If the function body consists of a single expression, you can also omit the curly braces and the 'return' keyword. The value of that expression will be implicitly returned.

In the examples below, we will see how to define and use arrow functions in JavaScript.     
*/



const squareArrow = (num) => {
    return num * num;
};

console.log('Square of 5 (Arrow Function):',squareArrow(5));
console.log("============================================");
const greetArrow = (name) => {
    console.log("Hello, " + name + "!");
};

greetArrow("Alice");
greetArrow("Bob");
console.log("============================================");
const addArrow = (a, b) => a + b;

let sumArrow = addArrow(5, 10);
console.log("Sum (Arrow Function):", sumArrow);
console.log("============================================");
const multiplyArrow = (a, b) => a * b;

let productArrow = multiplyArrow(5, 10);
console.log("Product (Arrow Function):", productArrow);     