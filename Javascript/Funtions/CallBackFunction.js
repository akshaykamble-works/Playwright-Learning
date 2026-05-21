/*
 Callback Function: A callback function is a function that is passed as an argument to another function and is executed after some operation has been completed.
  It allows you to handle asynchronous operations, such as fetching data from an API or performing time-consuming tasks,
  without blocking the main thread of execution.

In JavaScript, callback functions are commonly used in scenarios like event handling, timers, and asynchronous programming.
They enable you to define what should happen after a certain task is completed, allowing for more flexible and responsive code.

The syntax for a callback function is as follows:
function mainFunction(callback) {
    // Perform some operations
    callback(); // Call the callback function
}

In this example, the mainFunction takes a callback function as an argument and calls it after performing some operations.
The callback function can be defined separately and passed to the mainFunction when it is called.
This allows you to customize the behavior of the mainFunction based on the specific callback function you provide.

In the examples below, we will see how to define and use callback functions in JavaScript.

*/
function greet(name) {
console.log("Hello " + name);
}
function processUser(callback) {
// Calling callback function
callback("Rahul");
}
// Passing greet function as argument
processUser(greet);
console.log("============================================");
function greet(name) {
console.log("Hello " + name);
}
function processUser(callback) {
// Calling callback function
callback("Rahul");
}
// Passing greet function as argument
processUser(greet);

// Example 1: Simple callback function
function fetchData(callback) {
    setTimeout(() => {
        const data = "Data fetched from API";
        callback(data); // Call the callback function with the fetched data
    }, 2000); // Simulate a delay of 2 seconds
}

function displayData(data) {
    console.log("Received data:", data);
}

fetchData(displayData); // Output after 2 seconds: Received data: Data fetched from API
console.log("============================================");
// Example 2: Callback function with parameters
function calculate(a, b, callback) {
    const result = a + b;
    callback(result); // Call the callback function with the calculated result
}

function displayResult(result) {
    console.log("The result is:", result);
}

calculate(5, 10, displayResult); // Output: The result is: 15
console.log("============================================");
console.log("============================================");
// Example 4: Callback function for array methods
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(function(num) {
    return num * num; // This is the callback function that squares each number
});

console.log("Squared Numbers:", squaredNumbers); // Output: Squared Numbers: [1, 4, 9, 16, 25]
console.log("============================================");
// Example 5: Callback function for error handling