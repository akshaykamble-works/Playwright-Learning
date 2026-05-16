/*
Undefine data type in JavaScript is a data type that represents the absence of a value or an uninitialized variable. It is denoted by the keyword "undefined". When a variable is declared but not assigned a value, it automatically gets the value of undefined. Additionally, if a function does not return a value, it also returns undefined by default.
undefined means a variable was declared but no value was assigned yet.
*/
let name;
console.log("Name value is:",name); // Output: undefined
console.log("Type of name variable is:",typeof name); // Output: undefined

// Null is another data type that represents the intentional absence of any object value. It is denoted by the keyword "null". When a variable is assigned null, it means that it has no value or object associated with it.
/*
null is an intentional empty value.
let selectedItem = null;
console.log(selectedItem);
console.log(typeof selectedItem);
3.6 BigInt
Used for very large integers.
Add n at end to create BigInt.Cannot mix with normal numbers ❗
let bigNum = 9007199254740992n;
console.log(bigNum + 1n);
console.log(typeof bigNum);
Program 1
// ===============================
// Arithmetic Operations
// ===============================
let a = 5;
let b = 3;
// Addition of two numbers
console.log("Addition of two numbers:", a + b); // 8
Feature Undefined Null
Meaning Not
assigned Intentionally empty
Assigned
by JavaScript Developer/Tester
Type undefined object ❗
Use case Default state Reset / no value
explicitly
*/
let city = null;
console.log("City value is:",city); // Output: null
console.log("Type of city variable is:",typeof city); // Output: object (this is a quirk in JavaScript, null is considered an object type)