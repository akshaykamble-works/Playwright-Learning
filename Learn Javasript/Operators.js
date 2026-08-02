/*
Operators are special symbols that perform operations on operands (values and variables).
In JavaScript, there are several types of operators, including:
a) Arithmetic Operators: Used for mathematical operations like addition, subtraction, multiplication, division, and modulus.
b) Assignment Operators: Used to assign values to variables.
c) Comparison Operators: Used to compare two values and return a boolean result (true or false).
d) Logical Operators: Used to combine multiple boolean expressions and return a boolean result.
e) Unary Operators: Operate on a single operand to produce a new value.
f) Ternary Operator: A shorthand for an if-else statement that takes three operands.

*/

//A) Arithmetic Operators
let a=10;
let b=5;

console.log("addition: "+(a+b)); // addition
console.log("subtraction: "+(a-b)); // subtraction
console.log("multiplication: "+(a*b)); // multiplication
console.log("division: "+(a/b)); // division
console.log("modulus: "+(a%b)); // modulus

//B) Assignment Operators
let x=10;
x+=5; // equivalent to x=x+5
console.log("Assignment: "+x);
//C) Comparison Operators
let num1=10;
let num2=20;

console.log("Equal to: "+(num1==num2)); // equal to
console.log("Not equal to: "+(num1!=num2)); // not equal to
console.log("Greater than: "+(num1>num2)); // greater than
console.log("Less than: "+(num1<num2)); // less than
console.log("Greater than or equal to: "+(num1>=num2)); // greater than or equal to
console.log("Less than or equal to: "+(num1<=num2)); // less than or equal to

// D) Logical Operators
let p=true;
let q=false;

console.log("AND: "+(p&&q)); // AND
console.log("OR: "+(p||q)); // OR
console.log("NOT: "+(!p)); // NOT

let A=10;
let B=50;
console.log("AND: "+(A>5 && B<100)); // AND
console.log("OR: "+(A>5 || B<100)); // OR
console.log("NOT: "+(!(A>5))); // NOT