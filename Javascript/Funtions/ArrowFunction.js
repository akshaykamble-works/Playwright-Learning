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
*/
// Example 1: 
console.log("Arrow function without parameters:");
const greet=()=>{
    console.log("Hello, World!");
}
greet(); // Output: Hello, World!
console.log("============================================");
// Example 2: Arrow function with parameters
console.log("Arrow function with parameters:");
const addFunction=(a,b)=>{
    return a+b;
}
let sum=addFunction(5,10);
console.log("Sum:",sum);
console.log("============================================");
// Example 3: Arrow function with implicit return
console.log("Arrow function with implicit return:");
const multiplyFunction=(a,b)=>a*b;
let product=multiplyFunction(5,10);
console.log("Product:",product);
console.log("============================================");