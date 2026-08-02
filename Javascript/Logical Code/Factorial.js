/*
Factorial function in JavaScript
The factorial of a non-negative integer n is the product of all positive integers less than or equal to n. It is denoted by n! and is defined as:
n! = n * (n-1) * (n-2) * ... * 1
For example, the factorial of 5 is:
5! = 5 * 4 * 3 * 2 * 1 = 120
*/

let Number = 5;
let factorial = 1;

for(let i=1;i<=Number;i++)
{
    factorial=factorial*i;
}
console.log("Factorial of " + Number + " is: " + factorial);
console.log("=====================================================");
// Second method

function factorilalFunction(num)
{
    let fact=1;
    for(let i=1;i<=num;i++)
    {
        fact=fact*i;
    }
    return fact;
}
console.log("Factorial of " + Number + " is: " + factorilalFunction(Number));