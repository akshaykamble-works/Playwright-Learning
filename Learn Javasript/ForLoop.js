/*
For loop in JavaScript is a control flow statement that allows you to execute a block of code repeatedly for a specified number of iterations.
It consists of three main components: initialization, condition, and increment/decrement.
for (initialization; condition; increment/decrement) {
    // code to be executed in each iteration
}
*/

console.log('For loop in JavaScript');
for(let i=0;i<=10;i++)
{
    console.log(i);
}
console.log('For loop in JavaScript with decrement');
for(let i=10;i>=0;i--)
{
    console.log(i);
}

console.log('For loop in JavaScript with step of 2');
for(let i=0;i<=10;i+=2)
{
    console.log(i);
}
console.log('Print table of 5 using for loop');
for(let i=2;i<=20;i+=2)
{
    console.log(i);
}
console.log('Print table of 5 using for loop with index of each element');
for(let i=1;i<=10;i++)
{
    console.log('5 * '+i+' = '+(5*i));
}
console.log('Print table of 3 using for loop with index of each element in reverse order');
for(let i=0;i<=10;i++)
{
    console.log('3*'+i+' ='+(3*i));
}