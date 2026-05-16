/*
Boolean data type can only have two values: true or false. It is often used in conditional statements to control the flow of a program. For example:
let isRaining = true;
if (isRaining) {
    console.log("Don't forget to take an umbrella!");
} else {
    console.log("Enjoy the sunshine!");
}
In this example, the variable isRaining is a boolean that determines which message to display based on its value.
*/

let age=18;
let isAdult = age >= 18; // This will evaluate to true if age is 18 or above, otherwise false
console.log("Is the person an adult?", isAdult); // Output: Is the person an adult? true

let isStudent = false;
console.log("Is the person a student?", isStudent); // Output: Is the person a student? false

//Example of using boolean in a conditional statement
let isLoggedIn = false;
if (isLoggedIn) {
    console.log("Welcome back!");
} else {
    console.log("Please log in to continue.");
}

let a=30;
let b=20;
let isAGreaterThanB = a > b; // This will evaluate to true since 30 is greater than 20
console.log("Is a greater than b?", isAGreaterThanB); // Output: Is a greater than b? true

let isEven = (age % 2 === 0); // This will evaluate to true if age is even, otherwise false
console.log("Is the age even?", isEven); // Output: Is the age even? true
