/*
Reverse a string without using the built-in reverse method.
input: Javascript
output: tpircSavaJ
*/

let name = 'Javascript';
let reversedName = '';
for(let i=name.length-1;i>=0;i--)
    {
    reversedName+=name[i];
   }
console.log(reversedName);

// using  function

function isRverseString(str)
{
    let reversedString='';
    for(let i=str.length-1;i>=0;i--)
    {
    reversedString+=str[i];
    }
    return reversedString;
}
console.log(isRverseString('Playwrite'));