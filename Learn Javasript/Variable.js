/*
Variable in javascript is a container for storing data values. In JavaScript, we use the var, let, and const keywords to declare variables.
1. var: The var keyword is used to declare variables in JavaScript. It has function scope, meaning that the variable is accessible within the function it is declared in or globally if declared outside of any function. However, it is generally recommended to use let or const instead of var due to their block scope and better scoping rules.

2. let: The let keyword is used to declare block-scoped variables. It allows you to create variables that are limited in scope to the block, statement, or expression where they are defined. This helps prevent issues related to variable hoisting and makes code more predictable.

3. const: The const keyword is used to declare block-scoped variables that cannot be reassigned after their initial assignment. It is used for values that should remain constant throughout the program. However, note that while the variable itself cannot be reassigned, the contents of objects or arrays declared with const can still be modified.

In summary, variables in JavaScript are essential for storing and manipulating data. The choice between var, let, and const depends on the desired scope and mutability of the variable. It is generally recommended to use let and const for better scoping and to avoid potential issues associated with var.

 Features                        Var.           Let.          Const
Can change value?                Yes            Yes           No
Can declare variable again?      Yes            No            No
When to use.                     Never         Value change    Value is constant.

*/
let name='Ashwini';
console.log(name);

let age=30;
console.log(age);
 
let isStudent=true;
console.log(isStudent);

let contactNumber=1234567890;
console.log(contactNumber);

let address='Pune, Maharashtra';
console.log(address);

name='Ashwini Sable';
console.log(name);// value changed

//let name;
//console.log(name);// variable declared again, but value is undefined. throwinng error Identifier 'name' has already been declared

var city='Pune';
console.log(city);

var city='Mumbai';
console.log(city);// value changed

var city;
console.log(city);

const country='India';
console.log(country);

//country='USA';// value cannot be changed, throws error Assignment to constant variable.
//country='USA';// value cannot be changed, throws error Assignment to constant variable.