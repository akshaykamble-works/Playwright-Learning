/*
An Array is an ordered list of values.
Think of it like a numbered shelf — each slot has a number (called an index)starting at 0.

*/
let fruits = ['Apple', 'Banana', 'Cherry'];
console.log("Fruits array is:",fruits); // Output: ['Apple', 'Banana', 'Cherry']

// Accessing array elements using index
console.log("First fruit is:",fruits[0]); // Output: Apple
console.log("Second fruit is:",fruits[1]); // Output: Banana
console.log("Third fruit is:",fruits[2]); // Output: Cherry

// Modifying an element in the array
fruits[1] = 'Blueberry';
console.log("Updated fruits array is:",fruits); // Output: ['Apple', 'Blueberry', 'Cherry']

// Adding a new element to the end of the array
fruits.push('Maskmelon');
console.log("Fruits array after adding Maskmelon is:",fruits); // Output: ['Apple', 'Blueberry', 'Cherry', 'Maskmelon']
// Removing the last element from the array
fruits.pop();
console.log("Fruits array after removing last element is:",fruits); // Output: ['Apple', 'Blueberry', 'Cherry']

// Adding a new element to the beginning of the array
fruits.unshift('Strawberry');
console.log("Fruits array after adding Strawberry at the beginning is:",fruits); // Output: ['Strawberry', 'Apple', 'Blueberry', 'Cherry']

// Removing the first element from the array
fruits.shift();
console.log("Fruits array after removing first element is:",fruits); // Output: ['Apple', 'Blueberry', 'Cherry']    
console.log("Length of fruits array is:",fruits.length); // Output: 3
console.log('Data type of fruits is ',typeof fruits); // Output: object

