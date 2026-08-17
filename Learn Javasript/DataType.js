/*

DataType in javascript:
its used to define the type of data that a variable can hold.
JavaScript is a dynamically typed language, which means that you don't need to explicitly declare the data type of a variable when you create it.
The data type is determined automatically based on the value assigned to the variable.

A) Primitive Data Types: Primitive data store single values and are immutable (cannot be changed). They include:
1. Number: Represents numeric values, including integers and floating-point numbers.
 Example: 42, 3.14
2. String: Represents a sequence of characters enclosed in single quotes (' ') or double quotes (" ").
 Example: 'Hello', "World"
3. Boolean: Represents a logical value that can be either true or false.
 Example: true, false
4. Undefined: Represents a variable that has been declared but has not been assigned a value.
 Example: let x; // x is undefined
5. Null: Represents the intentional absence of any object value.
 Example: let y = null;
6. Symbol (ES6): Represents a unique and immutable value that can be used as an identifier for object properties.
7. BigInt (ES2020): Represents whole numbers larger than 2^53 - 1, which is the largest number JavaScript can reliably represent with the Number primitive.

B) Non-Primitive Data Types: Non-primitive data store the group of values and are mutable (can be changed). They include:
1. Object: Represents a collection of key-value pairs, where each key is a string (or symbol) and each value can be any data type.
 Example: let person = { name: 'John', age: 30 };
2. Array: Represents an ordered list of values, which can be of any data type.
 Example: let numbers = [1, 2, 3, 4, 5];
3. Function: Represents a reusable block of code that can be called with arguments and may return a value.
 Example: function add(a, b) { return a + b; }    

*/

let a= 10; // number
console.log(a);
console.log(typeof a);

let b=3;
console.log(a+b);// addition

let c="5"; // string
let d= "10";
console.log(c+d);// concatenation


console.log('== and === operator');
let x=5;
let y='5';
console.log(x==y); // true (loose equality, only checks value)
console.log(x===y); // false (strict equality, checks value and type)


