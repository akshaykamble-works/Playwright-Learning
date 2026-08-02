/*

Arrays are non-primitive data types in JavaScript.
They are used to store multiple values in a single variable.
An array can hold values of different data types, including numbers, strings, objects, and even other arrays.
*/
let fruits = ["Apple", "Banana", "Orange", "Mango"];
console.log(fruits); // Output: ["Apple", "Banana", "Orange", "Mango"]
console.log(typeof fruits); // Output: object
// Accessing array elements
console.log(fruits[0]); // Output: Apple
console.log(fruits[1]); // Output: Banana
console.log(fruits[2]); // Output: Orange
console.log(fruits[3]); // Output: Mango

// Manipulating array elements
fruits[1] = "Grapes"; // Updating the second element
console.log(fruits); // Output: ["Apple", "Grapes", "Orange", "Mango"]

fruits.push("Pineapple"); // Adding a new element at the end
console.log(fruits); // Output: ["Apple", "Grapes", "Orange", "Mango", "Pineapple"]

fruits.pop(); // Removing the last element
console.log(fruits); // Output: ["Apple", "Grapes", "Orange", "Mango"]

fruits.unshift("Strawberry"); // Adding a new element at the beginning
console.log(fruits); // Output: ["Strawberry", "Apple", "Grapes", "Orange", "Mango"]

fruits.shift(); // Removing the first element
console.log(fruits); // Output: ["Apple", "Grapes", "Orange", "Mango"]

let numbers = [10, 20, 30, 40, 50];
console.log(numbers); // Output: [10, 20, 30, 40, 50]
numbers[2]=60; // updating the third element
console.log(numbers); // Output: [10, 20, 60, 40, 50]

numbers.push(70); // adding a new element at the end
console.log(numbers); // Output: [10, 20, 60, 40, 50, 70]

numbers.pop(); // removing the last element
console.log(numbers); // Output: [10, 20, 60, 40, 50]

numbers.unshift(5); // adding a new element at the beginning
console.log(numbers); // Output: [5, 10, 20, 60, 40, 50]

numbers.shift(); // removing the first element
console.log(numbers); // Output: [10, 20, 60, 40, 50]   