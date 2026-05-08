/*
if else is a conditional statement that allows you to execute different blocks of code based on certain conditions. It is used to make decisions in your code and control the flow of execution.

The basic syntax of an if else statement is as follows:

if (condition) {
    // code to be executed if the condition is true
} else {
    // code to be executed if the condition is false
}

You can also have multiple conditions using else if:

if (condition1) {
    // code to be executed if condition1 is true
} else if (condition2) {
    // code to be executed if condition2 is true
} else {
    // code to be executed if both condition1 and condition2 are false
}

*/
let score: number = 85;

if (score >= 90) {
    console.log('Grade: A');
} else if (score >= 80) {
    console.log('Grade: B');
} else if (score >= 70) {
    console.log('Grade: C');
} else if (score >= 60) {
    console.log('Grade: D');
} else {
    console.log('Grade: F');
}
console.log('------------------------------');
let age: number = 19;
if (age >= 18) {
    console.log('You are eligible to vote.');
} else {
    console.log('You are not eligible to vote.');
}
console.log('------------------------------');
let day:string='xxxx';
if(day==='Monday') {
    console.log('It is Monday.');
} if(day==='Tuesday') {
    console.log('It is Tuesday.');
} if(day==='Wednesday') {
    console.log('It is Wednesday.');
} if(day==='Thursday') {
    console.log('It is Thursday.');
} if(day==='Friday') {
    console.log('It is Friday.');
} if(day==='Saturday') {
    console.log('It is Saturday.');
} if(day==='Sunday') {
    console.log('It is Sunday.');
}
else {
    console.log('Oops! ... Invalid day.');
}
console.log('------------------------------');


