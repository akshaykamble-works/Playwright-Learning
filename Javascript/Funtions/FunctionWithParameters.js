/*
Function With Parameters
Functions with parameters allow you to pass values into a function when you call it.
 These parameters act as placeholders for the values that will be provided during the function call.
 This makes functions more flexible and reusable, as you can use the same function to perform operations on different data by simply passing different arguments.

The syntax for a function with parameters is as follows:
function functionName(parameter1, parameter2, ...) {
    // function body
}

When you call the function, you provide the arguments that correspond to the parameters defined in the function. The function can then use these parameters to perform its tasks.

In the examples below, we will see how to define and use functions with parameters in JavaScript.
*/
function greet(name){
    console.log("Hello, " + name + "!");    
}
greet("Alice");

console.log("============================================");
function calculationTax(ammount,taxRate){
    let tax=ammount*taxRate/100;
    console.log(`Tax for the amount ${ammount} at a tax rate of ${taxRate}% is: ${tax}`);
}
calculationTax(1000, 5); // Output: Tax for the amount 1000 at a tax rate of 5% is: 50
calculationTax(2000, 10); // Output: Tax for the amount 2000 at a tax rate of 10% is: 200
console.log("============================================");

function calculateArea(radius){
    let area=Math.PI*radius*radius;
    console.log(`Area of the circle with radius ${radius} is: ${area.toFixed(2)}`);
}
calculateArea(5); // Output: Area of the circle with radius 5 is: 78.54
calculateArea(10); // Output: Area of the circle with radius 10 is: 314.16
console.log("============================================");
function login(username,pasword){
    console.log(`Username is: ${username}`);
    console.log(`Password is: ${pasword}`); 
}

login("admin","admin123"); // Output: Username: admin, Password: admin123
login("Kainos@Test.com", "Kainos123"); // Output: Username: