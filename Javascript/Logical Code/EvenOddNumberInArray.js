/*
Even Odd Number in Array

*/
function countEvenOdd(arr) {
let Even=0;
let Odd=0;
for(let i=0;i<arr.length;i++)
{
    if(arr[i]%2===0)
    {
        Even++;
    }
    else{
        Odd++;
    }
}
console.log("Total Even Numbers: " + Even);
console.log("Total Odd Numbers: " + Odd);

}
countEvenOdd([10, 15, 20, 25, 30]);