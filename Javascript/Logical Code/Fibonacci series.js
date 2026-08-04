/*
0 1 1 2 3 5 8 13 21 34 ...

*/
let a=-1;
let b=0;
let c=1;
for(let i=0;i<5;i++)
{
    a=b;
    b=c;
    c=a+b;
    console.log('Fibonacci series:'+c);
}
