/*
Types of Conditional Statements
1.if
2.if…else
3.else if
4.switch
5.ternary operator
1. if statement
The if statement is used to execute a block of code if a specified condition is true.
Syntax:
if (condition) {
    // code to be executed if the condition is true
}
*/
let age;
if (age >= 18) {
    console.log("You are an adult.");
}

// Example of if statement with a variable
let score = 85;
if (score >= 90) {
    console.log("Grade: A");
}

/*
2. if…else statement
The if…else statement is used to execute one block of code if a specified condition is true, and another block of code if the condition is false.
Syntax:
if (condition) {
    // code to be executed if the condition is true
} else {
    // code to be executed if the condition is false
}
*/

if (score >= 90) {
    console.log("Grade: A");
} else {
    console.log("Grade: Not A");
}

/*
3. else if statement
The else if statement is used to specify a new condition to test, if the first condition is false.
Syntax:
if (condition1) {
    // code to be executed if condition1 is true
} else if (condition2) {
    // code to be executed if condition2 is true
} else {
    // code to be executed if both conditions are false
}
*/

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}

/*
4. switch statement
The switch statement is used to perform different actions based on different conditions.
Syntax:
switch(expression) {
    case value1:
        // code to be executed if expression === value1
        break;
    case value2:
        // code to be executed if expression === value2
        break;
    default:
        // code to be executed if expression doesn't match any case
}
*/

let day = "Monday";
switch (day) {
    case "Monday":
        console.log("Start of the week.");
        break;
    case "Friday":
        console.log("End of the week.");
        break;
    default:
        console.log("Midweek day.");
}

/*
5. ternary operator
The ternary operator is a shorthand for an if-else statement that returns a value based on a condition.
Syntax:
condition ? valueIfTrue : valueIfFalse
*/

let isLoggedIn = true;
let message = isLoggedIn ? "Welcome back!" : "Please log in.";
console.log(message); // Output: Welcome back!

let ageGroup = (age < 18) ? "Child" : (age < 65) ? "Adult" : "Senior";
console.log("Age group:", ageGroup); // Output: Age group: Adult    

let orderAmount = 800;
if (orderAmount >= 1000) {
    let discount = orderAmount * 0.20; // 20% discount
    let finalAmount = orderAmount - discount;
    console.log("You get a 20% discount of:", discount);
    console.log("Your final order amount after discount is:", finalAmount);
} else {
    console.log("No discount for order below ₹1000");
    console.log("Add more items to unlock discount");
    console.log("You do not qualify for a discount. Your order amount is:", orderAmount);

}