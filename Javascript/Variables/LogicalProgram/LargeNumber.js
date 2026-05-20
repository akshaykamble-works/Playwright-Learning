/*
find largest number in two variables
*/
let num1 = 10;
let num2 = 20;

if (num1 > num2) {
    console.log("Largest number is:", num1); // Output: Largest number is: 10
} else if (num2 > num1) {
    console.log("Largest number is:", num2); // Output: Largest number is: 20
} else {
    console.log("Both numbers are equal."); // Output: Both numbers are equal.
}
console.log("============================================");
//Find Largest of Three Numbers
let a = 15;
let b = 25;
let c = 5;

if (a > b && a > c) {
    console.log("Largest number is:", a); // Output: Largest number is: 15
} else if (b > a && b > c) {
    console.log("Largest number is:", b); // Output: Largest number is: 25
} else if (c > a && c > b) {
    console.log("Largest number is:", c); // Output: Largest number is: 5
} else {
    console.log("There is a tie for the largest number."); // Output: There is a tie for the largest number.
}
console.log("============================================");
// in array
let numbers = [10, 20, 5, 15];
let largest = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
}
console.log("Largest number in the array is:", largest); // Output: Largest number in the array is: 20


console.log("============================================");
// Table of 2rd number
let num = 2;
console.log("Table of", num);
for (let i = 1; i <= 10; i++) {
    //console.log(num + " x " + i + " = " + (num * i));
    console.log(`${num} x ${i} = ${num * i}`); // Using template literals for cleaner output
}