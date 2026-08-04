/*
Count the even and odd numbers
input: let numbers = [10, 15, 20, 25, 30, 35, 40];
output:
Total Even Numbers: 4
Total Odd Numbers: 3
*/

let even = [];
let odd = [];

for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
        even.push(i);
    } else {
        odd.push(i);
    }
}

console.log("Even Numbers:", even);
console.log("Odd Numbers:", odd);
console.log("Even Count:", even.length);
console.log("Odd Count:", odd.length);

console.log("Total Even Numbers:", even.length);
console.log("Total Odd Numbers:", odd.length);