/*

Funtional scope in typescript is a concept that defines the accessibility of variables and functions within a specific block of code.
In functional scope, variables and functions are only accessible within the function they are defined in, and not outside of it.
This means that if you declare a variable or function inside a function, it cannot be accessed from outside that function.

Example:

function myFunction() {
    let message = "Hello, World!";
    console.log(message); // Output: Hello, World!
}

myFunction();
console.log(message); // Error: message is not defined
In the above example, the variable 'message' is declared inside the function 'myFunction'.
It can be accessed and logged within the function, but when we try to access it outside the function,
it results in an error because 'message' is not defined in that scope.
Functional scope helps to prevent naming conflicts and keeps variables and
functions encapsulated within their respective functions, promoting better code organization and maintainability.    



*/
export {};
console.log('This is functional scope example');
let courseName: string = 'TypeScript';
console.log(courseName);
function myFunction() {
    let message: string = "Hello, World!";
    console.log(message); // Output: Hello, World!
}

myFunction();
//console.log(message); // Error: message is not defined we cannot access message variable outside the function because it is in functional scope
console.log(courseName); // we can access courseName variable outside the function because it is in global scope
 console.log('End of functional scope example');
 console.log('-----------------------------');
 var age: number = 25;
 console.log(age); // we can access age variable outside the function because it is in global scope
function anotherFunction() {
    var weight: number = 70;
    console.log(age); // we can access age variable inside the function because it is in global scope
    console.log(weight); // we can access weight variable inside the function because it is in local scope
}
anotherFunction();
//console.log(weight); // Error: weight is not defined we cannot access weight variable outside the function because it is in functional scope    
console.log(age);
console.log('End of another function example');


const pi: number = 3.14;
console.log(pi);
function yetAnotherFunction() {
    const gravity: number = 9.8;
    console.log(pi); // we can access pi variable inside the function because it is in global scope
    console.log(gravity); // we can access gravity variable inside the function because it is in local scope
}
yetAnotherFunction();
//console.log(gravity); // Error: gravity is not defined we cannot access gravity variable outside the function because it is in functional scope       
