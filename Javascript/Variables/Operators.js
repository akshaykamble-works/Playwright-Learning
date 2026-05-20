/*
Operators are used to perform operations on variables and values.
In JavaScript, there are several types of operators, including:
1. Arithmetic Operators: Used to perform mathematical operations.
2. Assignment Operators: Used to assign values to variables.
3. Comparison Operators: Used to compare two values and return a boolean result.
4. Logical Operators: Used to combine multiple boolean expressions and return a boolean result.
5. Bitwise Operators: Used to perform bitwise operations on binary numbers.
6. Ternary Operator: A shorthand for an if-else statement that returns a value based on a condition.
7. Typeof Operator: Used to determine the type of a variable or value.
8. instanceof Operator: Used to check if an object is an instance of a specific class or constructor function.
9. Spread Operator: Used to expand an iterable (like an array) into individual elements.
10. Nullish Coalescing Operator: Used to provide a default value when dealing with null or undefined values.

Operators are essential for performing various operations in JavaScript, such as calculations, comparisons, and logical operations,
making it easier to manipulate data and control the flow of the

*/
let x = 10;
let y = 5;

// Arithmetic Operators
console.log("Addition:", x + y); // Output: 15
console.log("Subtraction:", x - y); // Output: 5
console.log("Multiplication:", x * y); // Output: 50
console.log("Division:", x / y); // Output: 2
console.log("Modulus:", x % y); // Output: 0

// Assignment Operators
let z = 20;
z += 10; // Equivalent to z = z + 10
console.log("After addition assignment:", z); // Output: 30

// Comparison Operators
console.log("Is x greater than y?", x > y); // Output: true
console.log("Is x equal to y?", x === y); // Output: false

// Logical Operators
let a = true;
let b = false;
console.log("Logical AND (a && b):", a && b); // Output: false
console.log("Logical OR (a || b):", a || b); // Output: true
console.log("Logical NOT (!a):", !a); // Output: false

// Ternary Operator
let age = 18;
let isAdult = age >= 18 ? "Yes" : "No";
console.log("Is the person an adult?", isAdult); // Output: Yes

// Typeof Operator
console.log("Type of x:", typeof x); // Output: number
console.log("Type of a:", typeof a); // Output: boolean

// instanceof Operator
class Person {}
let person = new Person();
console.log("Is person an instance of Person?", person instanceof Person); // Output: true

// Spread Operator
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5];
console.log("Combined array using spread operator:", arr2); // Output: [1, 2, 3, 4, 5]

// Nullish Coalescing Operator
let value = null;
let defaultValue = "Default";
let result = value ?? defaultValue;
console.log("Result using nullish coalescing operator:", result); // Output: Default    
  // Bitwise Operators
let m = 5; // In binary: 0101
let n = 3; // In binary: 0011
console.log("Bitwise AND (m & n):", m & n); // Output: 1 (In binary: 0001)
console.log("Bitwise OR (m | n):", m | n); // Output: 7 (In binary: 0111)
console.log("Bitwise XOR (m ^ n):", m ^ n); // Output: 6 (In binary: 0110)
console.log("Bitwise NOT (~m):", ~m); // Output: -6 (In binary: 1010)   
// Increment and Decrement Operators
let count = 0;
count++; // Increment count by 1
console.log("Count after increment:", count); // Output: 1
count--; // Decrement count by 1
console.log("Count after decrement:", count); // Output: 0  
//pre-increment and post-increment
let num = 5;
console.log("Post-increment (num++):", num++); // Output: 5 (returns the value before incrementing)
console.log("Value of num after post-increment:", num); // Output: 6
num = 5; // Reset num to 5
console.log("Pre-increment (++num):", ++num); // Output: 6 (increments the value before returning it)
console.log("Value of num after pre-increment:", num); // Output: 6
  