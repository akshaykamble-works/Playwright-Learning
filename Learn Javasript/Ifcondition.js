/*
if condition in JavaScript is a control flow statement that allows you to execute a block of code based on a specified condition. It enables you to make decisions in your code and perform different actions depending on whether the condition evaluates to true or false.

The basic syntax of an if condition is as follows:

if (condition) {
  // code to be executed if the condition is true
}

You can also use an else statement to specify a block of code to be executed if the condition is false:

if (condition) {
  // code to be executed if the condition is true
} else {
  // code to be executed if the condition is false
}

Additionally, you can use else if statements to check multiple conditions:

if (condition1) {
  // code to be executed if condition1 is true
} else if (condition2) {
  // code to be executed if condition2 is true
} else {
  // code to be executed if both conditions are false
}

Example:

*/

let mark=35;
if(mark>=35){
    console.log("Pass");
}else{
    console.log("Fail");
}

let age=17;
if(age>=18){
    console.log("Eligible for voting");
}else{
    console.log("Not eligible for voting");
}

let price=100;
if(price>90)
{
    console.log("1 liter petrol is available for Rs.100");
}
else{
    console.log("1 liter petrol is not available for Rs.100");
}
// else if condition
 let score=85;
 if(score>=90){
    console.log("Grade A");
 }else if(score>=80){
    console.log("Grade B");
 }else if(score>=70){
    console.log("Grade C");
 }else{
    console.log("Fail");
 } 

 // Real time Example:
 let day=7;
 if(day==1){
    console.log("Monday");
 }else if(day==2){
    console.log("Tuesday");
 }else if(day==3){
    console.log("Wednesday");
 }  else if(day==4){
    console.log("Thursday");
 }else if(day==5){
    console.log("Friday");
 }else if(day==6){
    console.log("Saturday");
 }else if(day==7){
    console.log("Sunday");
 }else{
    console.log("Invalid day");
 }