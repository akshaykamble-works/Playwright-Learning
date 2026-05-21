/*
Function With Return Value:
 write a program to create a function with return value and print the result in console.

*/
function addition(a,b){
    return a+b;
}
const result = addition(5,10);  
console.log("Addition result is:", result); // Output: Addition result is: 15
console.log("============================================");
// Example 2:
function detailsform(name, age, company){
    return `Name: ${name}, Age: ${age}, Company: ${company}`;
}
const personDetails = detailsform("Alice", 30, "ABC Corp");
console.log(personDetails); // Output: Name: Alice, Age: 30, Company: ABC Corp
console.log("============================================");
// Example 3:
function calculateArea(radius){
    return Math.PI * radius * radius;
}
const area = calculateArea(5);
console.log("Area of the circle is:", area.toFixed(2)); // Output: Area of the circle is: 78.54
console.log("============================================");
// Example 4:
function login(username,password){
    return `Username is: ${username}, Password is: ${password}`;
}
const loginDetails = login("Alice", "password123");
console.log(loginDetails); // Output: Username is: Alice, Password is: password123
console.log("============================================");
function multiply(a, b) {
    return a * b;
}

let result1 = multiply(5, 4);

console.log('Multiplication of 5 and 4 is:', result1);