/*
 Funtions is block of code that performs a specific task.
 It can be reused multiple times in a program. Functions can take input parameters and return output values.
    Funtion Type :
    1. Function Declaration
    2. Function Expression
    3. Anonymous Function
    4. Arrow Function
    5. Callback Function
    6. IIFE (Immediately Invoked Function Expression)
*/
// Example 1: Function without parameters and without return value
function greet(name){
    console.log("Hello, " + name + "!");    
}
greet("Alice"); // Output: Hello, Alice!
console.log("============================================");
greet("Bob"); // Output: Hello, Bob!
console.log("============================================");
// Example 2: Function with parameters and return value
function add(a, b){
    return a + b;
}
let sum = add(5, 10);
console.log("Sum:", sum); // Output: Sum: 15
console.log("============================================");
// Example 3: Function with default parameters
function multiply(a, b = 3){
    return a * b;
}
console.log("Multiply with default parameter:", multiply(5)); // Output: Multiply with default parameter: 10
console.log("Multiply with both parameters:", multiply(5, 5)); // Output: Multiply with both parameters: 15

// Example 4: Function expression
const square = function(x){
    return x * x;
}
console.log("============================================");
// Example 5: login function
function login(username,password){
    console.log(`Username is: ${username}`);
    console.log(`Password is: ${password}`);
}
login("admin","admin123"); // Output: Username: admin, Password: admin123
login("Alice@gmail.com", "Alice123"); // Output: Username: user, Password: Alice123
console.log("============================================");
// Function is reusable block of code that performs a specific task. It can take input parameters and return output values, making it a fundamental building block in JavaScript programming. Functions help in organizing code, improving readability, and promoting code reusability.
 function LunchBrowser(browserName){
    console.log(`Lunching ${browserName} browser...`);
console.log(`${browserName} browser is launched successfully!`);
console.log(`Closing ${browserName} browser...`);
console.log(`${browserName} browser is closed successfully!`);

 }
 LunchBrowser("Chrome");
 console.log("============================================");
 LunchBrowser("Firefox");
 console.log("============================================");
 LunchBrowser("Edge");
 console.log("============================================");
 LunchBrowser("Safari");
 console.log("============================================");
 LunchBrowser("Opera");
 console.log("============================================");
 // Example 6: check Even or Odd number
 function checkEvenOdd(number){
    if(number%2===0){
        console.log(`${number} is an Even number.`);
    }
    else{
        console
    }
 }
 checkEvenOdd(10); // Output: 10 is an Even number.
 checkEvenOdd(15); // Output: 15 is an Odd number.
 checkEvenOdd(0); // Output: 0 is an Even number.
 checkEvenOdd(-5); // Output: -5 is an Odd number.
 console.log("============================================");

 // Example 7:
 function checkDays(day){
    switch(day.toLowerCase()){
        case "monday":
            console.log("Today is Monday.");
            break;
        case "tuesday":
            console.log("Today is Tuesday.");
            break;
        case "wednesday":
            console.log("Today is Wednesday.");
            break;
        case "thursday":
            console.log("Today is Thursday.");
            break;
        case "friday":
            console.log("Today is Friday.");
            break;
        case "saturday":
            console.log("Today is Saturday.");
            break;
        case "sunday":
            console.log("Today is Sunday.");
            break;
        default:
            console.log("Invalid day input.");
    }
 }
 checkDays("Monday");
 console.log("============================================");
 checkDays("Friday");
 console.log("============================================");
 checkDays("Sunday");
 console.log("============================================");
 checkDays("InvalidDay");