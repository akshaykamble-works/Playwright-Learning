/*
 Palindrome String
 input: MOM
 output:MOM
*/

let name='MOM';
let reversedName='';
for(let i=name.length-1;i>=0;i--)
{
    reversedName+=name[i];
}
if(name===reversedName)
{
    console.log(name+' is a palindrome string');
}
else
{
    console.log(name+' is not a palindrome string');
}