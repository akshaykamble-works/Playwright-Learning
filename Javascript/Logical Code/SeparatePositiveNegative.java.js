/*
SeparatePositiveNegative
input:let numbers = [10, -5, 3, -8, 0, 15, -2, 7, -9];

output:
Positive Numbers: [10, 3, 0, 15, 7,1]
Negative Numbers: [-5, -8, -2, -9]
*/
let numbers = [10, -5, 3, -8, 0, 15, -2, 7, -9,1];
let positiveNumbers=[];
let negativeNumbers=[];
for(let i=0;i<numbers.length;i++)
{
    if(numbers[i]>=0)
    {
        positiveNumbers.push(numbers[i]);
    }
    else
    {
        negativeNumbers.push(numbers[i]);
    }   
}
console.log("Positive Numbers: " + positiveNumbers);
console.log("Negative Numbers: " + negativeNumbers);
