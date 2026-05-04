/* in javascript variables are used to store data values. In javascript we have three types of variables var, let and const.

 var is the old way of declaring variables and it has some issues like it can be redeclared and updated. let and const are
 the new way of declaring variables and they are block scoped. let can be updated but not redeclared, while const cannot be
 updated or redeclared.
 */ 

 //Declaring a variable using let
 let course;
 console.log(course); // Output: undefined

    //Assigning a value to the variable
    course = 'Javascript';
    console.log("Course value is:",course); // Output: Javascript

    //overide the value of the variable
    course = 'Python';
    console.log("Course value is overridden",course); // Output: Python

    //Declaring a variable using const
    const language = 'Javascript';
    console.log("Language value is:",language); // Output: Javascript

    //Trying to update the value of a const variable will result in an error
   // language = 'Python'; // Uncaught TypeError: Assignment to constant variable.
   console.log("const variable cannot be updated value",language); // Output: Javascript

   //Trying to redeclare a variable using let will result in an error
   //let course = 'Java'; // Uncaught SyntaxError: Identifier 'course' has already been declared
   console.log("let variable cannot be redeclared value",course); // Output: Python
// var is the old way of declaring variables and it has some issues like it can be redeclared and updated. let and const are
// the new way of declaring variables and they are block scoped. let can be updated but not redeclared, while const cannot be
// updated or redeclared.
var name = 'Akshay';
console.log("Name value is:",name); // Output: Akshay

// redeclaring the variable using var
var name = 'John';
console.log("Name value is redeclared using var:",name); // Output: John


// Declaring a varrible in same name using let will result in an error
let company = 'Google';
console.log("Company value is:",company); // Output: Google

//let company = 'Microsoft'; //  throw run time error as Uncaught SyntaxError: Identifier 'company' has already been declared
console.log("Company value cannot be redeclared using let:",company); // Output: Google