/*
Local Variable Scope in JavaScript refers to the accessibility of variables within a specific block of code,
such as a function or a loop. 
A variable declared within a function is considered to have local scope, meaning it can only be accessed and
 modified within that function. 
Local variables are created when the function is invoked and are destroyed when the function execution is completed. 
This allows for better encapsulation and prevents unintended side effects on other parts of the code, as local variables cannot be accessed from outside their respective functions.

In JavaScript, you can declare local variables using the 'var', 'let', or 'const' keywords. 
The choice of keyword affects the behavior of the variable, such as its scope and mutability. 
'var' has function scope, while 'let' and 'const' have block scope, meaning they are only accessible within the block they are defined in (e.g., within a loop or an if statement).

Understanding local variable scope is crucial for writing clean and maintainable code, as it helps prevent naming conflicts and ensures that variables are used in the appropriate context.

In the examples below, we will see how local variable scope works in JavaScript and how it can be utilized effectively in functions and other blocks of code.   

*/
function exampleFunction() {
    let localVariable = "I am a local variable";
    console.log(localVariable); // Output: I am a local variable
}

exampleFunction();

// Trying to access localVariable outside the function will result in an error
// console.log(localVariable); // Uncaught ReferenceError: localVariable is not defined

console.log("============================================");

function outerFunction() {
    let outerVariable = "I am an outer variable";

    function innerFunction() {
        let innerVariable = "I am an inner variable";
        console.log(outerVariable); // Output: I am an outer variable
        console.log(innerVariable); // Output: I am an inner variable
    }

    innerFunction();

    // Trying to access innerVariable outside the inner function will result in an error
    // console.log(innerVariable); // Uncaught ReferenceError: innerVariable is not defined
}

outerFunction();
console.log("============================================");
let globalVariable = "I am a global variable";

function accessGlobalVariable() {
    console.log(globalVariable); // Output: I am a global variable
}

accessGlobalVariable();