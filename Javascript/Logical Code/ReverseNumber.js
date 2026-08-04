/*
input:12345
output:54321
*/

let number=12345;
let reverse=0;
while(number>0)
{
    let digit=number%10;
    reverse=reverse*10+digit;
    number=Math.floor(number/10);
}
console.log('Input Number:', 12345);
console.log("Reversed Number:", reverse);